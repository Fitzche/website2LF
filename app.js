class HTMLElement {
    constructor(properties) {
        this.body = document.createElement(properties.tag);

        const handledProperties = ["tag", "text", "style", "id", "classList", "parent"];

        if (properties.text) this.body.innerHTML = properties.text;
        if (properties.style) this.body.style = properties.style;
        if (properties.id) this.body.id = properties.id;
        if (properties.classList) {
            properties.classList.forEach((className) => this.body.classList.add(className));
        }

        for (const key in properties) {
            if (handledProperties.includes(key)) continue;

            this.body[key] = properties[key];
        }

        properties.parent.appendChild(this.body);
    }
}

function handleColors(text) {
    text = text.replace(/\[([^\]]+)\]\{([^\}]+)\}/g, "<span style='color: $2'>$1</span>");
    text = text.replace(/\[([^\]]+)\]/g, "<span style='color: var(--main-color)'>$1</span>");
    text = text.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>");

    return text;
}

function init(data) {
    const root = document.documentElement;
    const Style = data.style;
    const SelectedThema = "Introduction";
    const Title = document.getElementById("Thema-title");
    const CategoryTitle = document.getElementById("Category-title");
    const SideBar = document.getElementById("sidebar");
    const MenuBar = document.getElementById("menubar");
    const TextContent = document.getElementById("text-content");
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");
    const searchMenu = document.getElementById("search-menu");

    Object.keys(Style).forEach((key) => {
        root.style.setProperty(key, Style[key]);
    });

    function parse(lines, parent) {
        let currentUL = null;
        let currentMenu = null;
        let selectedOption = null;

        lines.forEach((line) => {
            if (line.startsWith("- ")) {
                if (currentUL == null) {
                    currentUL = new HTMLElement({ tag: "ul", parent: parent });
                }

                new HTMLElement({ tag: "li", text: handleColors(line.slice(2)), parent: currentUL.body });
            } else if (line.startsWith("! ")) {
                if (currentMenu == null) {
                    currentMenu = {};

                    currentMenu.global = new HTMLElement({
                        tag: "div",
                        parent: parent,
                        classList: ["innerMenu"],
                    });

                    currentMenu.left = new HTMLElement({
                        tag: "div",
                        parent: currentMenu.global.body,
                        classList: ["innerMenu-left"],
                    });
                    currentMenu.right = new HTMLElement({
                        tag: "div",
                        parent: currentMenu.global.body,
                        classList: ["innerMenu-right"],
                    });
                }

                const text = line.slice(2);
                const title = text.split(":")[0];
                const description = text.split(":").slice(1).join(":");

                const titleContainer = new HTMLElement({
                    tag: "div",
                    parent: currentMenu.left.body,
                    classList: ["menu-title"],
                });

                new HTMLElement({
                    tag: "img",
                    parent: titleContainer.body,
                    src: `./img/${title}.png`,
                }).body.addEventListener("error", function () {
                    this.src = "./img/LG.png";
                });

                new HTMLElement({ tag: "span", text: handleColors(title), parent: titleContainer.body });

                titleContainer.body.onclick = () => {
                    currentMenu.right.body.innerHTML = "";
                    new HTMLElement({
                        tag: "span",
                        text: handleColors(description),
                        parent: currentMenu.right.body,
                    });

                    if (selectedOption != null) selectedOption.classList.remove("selectedOption");
                    titleContainer.body.classList.add("selectedOption");
                    selectedOption = titleContainer.body;
                };
            } else {
                if (!currentUL == null) {
                    currentUL = null;
                }

                new HTMLElement({ tag: "p", text: handleColors(line), parent: parent });
            }
        });
    }

    function load(thema) {
        const Data = Content[thema];

        Title.innerHTML = thema;

        if (Data.CATEGORIES == undefined) {
            CategoryTitle.style.display = "none";
            SideBar.style.display = "none";

            TextContent.innerHTML = "";
            parse(Data.ROOT, TextContent);
        } else {
            const selectedCategory = Data.ROOT;

            CategoryTitle.style.display = "block";
            SideBar.style.display = "block";

            SideBar.innerHTML = "";
            CategoryTitle.innerHTML = selectedCategory;
            TextContent.innerHTML = "";

            parse(Data.CATEGORIES[selectedCategory], TextContent);

            Object.keys(Data.CATEGORIES).forEach((category) => {
                const element = document.createElement("div");
                element.innerHTML = category;
                element.classList.add("category");
                if (category == selectedCategory) element.classList.add("selectedCategory");

                element.onclick = () => {
                    CategoryTitle.innerHTML = category;
                    TextContent.innerHTML = "";

                    parse(Data.CATEGORIES[category], TextContent);

                    document.querySelector(".selectedCategory").classList.remove("selectedCategory");
                    element.classList.add("selectedCategory");
                };

                SideBar.appendChild(element);
            });
        }
    }

    searchInput.addEventListener("input", function () {
        searchMenu.style.display = "block";
        searchInput.style.borderRadius = "0";

        searchMenu.style.left = searchInput.offsetLeft + "px";
        searchMenu.style.top = searchInput.offsetTop + searchInput.offsetHeight + "px";

        searchMenu.innerHTML = "";

        const research = searchInput.value.toLowerCase();

        let matches = 0;

        for (const categoryName in Content.Documentation.CATEGORIES) {
            if (categoryName.toLowerCase().startsWith(research)) {
                const element = document.createElement("div");
                element.innerHTML = categoryName;
                element.classList.add("category");

                element.onclick = () => {
                    load("Documentation");

                    CategoryTitle.innerHTML = categoryName;
                    TextContent.innerHTML = "";

                    parse(Content.Documentation.CATEGORIES[categoryName], TextContent);

                    document.querySelector(".selectedCategory").classList.remove("selectedCategory");
                    element.classList.add("selectedCategory");
                };

                searchMenu.appendChild(element);
                matches++;
            }
        }

        if (matches == 0) {
            const element = document.createElement("div");
            element.innerHTML = "Aucun résultat trouvé";
            element.classList.add("category");

            searchMenu.appendChild;
        }
    });

    searchInput.addEventListener("blur", function (event) {
        setTimeout(() => {
            searchMenu.style.display = "none";
            searchMenu.innerHTML = "";
            searchInput.style.borderRadius = "20px 0 0 20px";
        }, 10000);
    });

    load(SelectedThema);

    [...MenuBar.childNodes].forEach((element) => {
        element.onclick = () => {
            load(element.innerHTML);

            document.querySelector(".selected").classList.remove("selected");
            element.classList.add("selected");
        };
    });
}

const config = {
    style: {
        "--main-color": "rgb(255, 0, 0)",
        "--bg-color": "rgb(39, 39, 39)",
        "--main-bg-color": "rgb(53, 53, 53)",
        "--dark-main-bg-color": "rgb(66, 0, 0)",
        "--darker-main-bg-color": "rgba(0, 0, 0, 0.1)",
        "--darker-main-bg-color-2": "rgba(0, 0, 0, 0.2)",
        "--text-color": "rgb(224, 224, 224)",
    },
};

init(config);
