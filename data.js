let Content = `

#Introduction

@ROOT

Voici un plugin de loup-garou uhc.
Un mode de jeu vu et revu mais pourtant toujours aussi plaisant.
Mais ce plugin-ci ne propose pas seulement les rôles et évènement du loup garou classique.
Beaucoup de rôles ont été revisités, d'autres créé et certains juste un peu ajustés de manière à créer un loup garou respectant les idées du plugin de Lapin.
Ce n'est cependant qu'un plugin fait en tant qu'amateur, encore en phase de test.
Ne le prenez que comme ça et non pour autre chose.
Je ne prendrai pas les remarques qui ont pour objectif de critiquer sans rien apporter de constructif pour l'amélioration du plugin.
Pour certains égarés qui ne connaitraient pas les règles du jeu, les voici:

Tous les joueurs commence à miner à 0min pour faire leur équipement (=stuff), l'équipement standart est jambière en fer p3 (=protection 3), plastron diams p2, casque fer p3, puis soit une épée en fer t3 (tranchant 3) et des bottes diams p2, soit des bottes fers p3 et une épée diams t3.

A 20min chaque joueur obtient un rôle qu'il ne doit pas révéler, qui définit son camp de victoire entre les [**Villageois**]{green}, qui ne se connaissent pas mais qui sont majoritaire et doivent éliminer les loups et les solos; loup garous se connaissant et devant trahir et éliminer les autres joueurs, et les solos gagnant tout seul en éliminant tout les autres joueurs.

END ROOT
END Introduction

#Documentation

@ROOT

JOUR ET NUIT

END ROOT

@CATEGORIES

##JOUR ET NUIT

Le temps est divisé en épisode de 20min, eux-même divisée en 2 jours et 2 nuits de 5min.
En fonction du moment de la journée (nuit/jour), certains rôles ont ou pas certains effets.
Les loups ont notamment l'effet force de nuit. 

##REGISTRE

Le Spectacle commence !!!
Une pièce où s'affrontent les terribles loup-garou et la justice du Village.
Et pour une fois le développeur... heu non le dramaturge, a décidé de laisser le choix du registre aux joueurs...enfin aux personnages, pardon.
Les actions des différents joueurs avec ou sans leur role influenceront donc le registre de la partie dans 3 directions possibles:
- Epique
- tragique
- Oratoire
...qui influenceront la partie, et c'est aux joueurs de choisir mais aussi d'en assumer les conséquences, bonnes ou mauvaises, sans savoir pour autant ce que font chaque registres.

Le registre est affiché sur le scoreboard à droite.

##AURA

Chaque joueur possède une aura définie en fonction du rôle,
- obscure (surtout pour les loup-garous),
- neutre (surtout les solos et [**Villageois**]{green} de moindre importance),
- lumineuse ([**Villageois**]{green} surtout),
- dangereuse (parrain, infect père des loups, et ...),
- et... je ne sais plus, ou peut etre que si, enfin, vous verrez :)

##VOTE

A chaque épisode, il y a un vote.
Les joueurs de la partie peuvent alors voter par le biais d'urnes qu'il trouveront dans des maison sur la map, cependant une urne ne peut etre utilisé qu'un nombre limité de fois, et il n'y a pas assez de vote pour tout le monde,  donc dépechez-vous.
Le joueur le plus voté perdra de la vie permanente, et son role ainsi que quelques faux roles seront affichés dans le chat.
A chaque vote, la vie perdue augmente et le nombre de faux roles diminue.

##ACCUSATION

Dans les 100 blocs autour du 0, il y a une maison contentant une borne d'accusation.
Un joueur peut y accuser un autre joueur, l'accusation prendra alors effet à la fin de l'épisode.
L'accuseur aura alors temporairement un effet de force contre le joueur ciblé.
Il aura alors 5min pour tuer ce joueur, s'il ne réussie pas ou que le joueur n'est pas loup/solo, il aura un malus, sinon il gagnera un bonus.

##MAISON BONUS

Certaines maisons possèdent des bonus, à vous de les trouver et de découvrir leur contenu.
Une liste des bonus possibles sera créée après la première game officiel (sans compter les games test)

##LISTE DES RÔLES

! [**Simple Villageois**]{green}: Simple [**Villageois**]{green}: Gagne avec les [**Villageois**]{green}, possède un petit bonus au hasard parmis 4 bonus (listés après première game)

! [Voyante]{green}: [Voyante]{green}: La voyante peut espionner un joueur à chaque épisode grace à la commande /lg voir [nomDuJoueur] , mais elle subira 5 coeurs de dégat ainsi que 5min de faiblesse si elle se trompe. Aura lumineuse

! [Sorcière]{green}: [Sorcière]{green}: La sorcière gagne avec le Village. La sorcière peut une fois dans la partie, réssuciter un joueur en clicquant sur un message, de plus elle possède une potion de instant heal, une d'instant damage et une de régénération, Aura = Neutre

! [Montreur d'Ours]{green}: [Montreur d'Ours]{green}: Le montreur d'ours gagne avec le Village, à chaque épisode, un ''GRRRR'' apparait dans le chat pour chaque loups dans les 50 blocs autour de lui, Aura lumineuse

! [Chasseur]{green}: [Chasseur]{green}: Le chasseur doit gagner avec les [**Villageois**]{green}, pour cela il possède un arc power 3, 20% de force contre les loups, et peut tirer sur un joueur à sa mort pour lui infliger 5 coeurs et lui faire perdre sa force s'il est loup. Aura neutre

! [Salvateur]{green}: [Salvateur]{green}: Le salvateur gagne avec le Village, il possède 2 potion d'instant heal et peut donner réistance à un joueur pendant 20min à chaque épisode Aura lumineuse

! [Corbeau]{green}: [Corbeau]{green}: Le corbeau gagne avec le Village, à chaque fois que son vote correspond à la personne la plus voté, ce sera indiqué dans le chat, il recevra 2 gapple la 1ere fois, 4 la 2e,puis 2 coeur permanents, puis resistance 1. Aura neutre

! [Sœur]{green}: [Sœur]{green}: Les soeurs possèdent force quand elles sont à moins de 20 blocs d'une de leurs soeurs, elle obtienne également le pseudo du tueur d'une soeur qui viendrait à mourir.  Aura lumineuse

! [Bienfaiteur]{green}: [Bienfaiteur]{green}: Le bienfaiteur gagne avec le Village, pour cela il peut donner 4 fois un coeur avec la commande /lg conferer [nomDuJoueur], de plus il possède 2 livres protection 2. Aura lumineuse

! [Idiot du Village]{green}: [Idiot du Village]{green}: L'idiot du Village gagne avec le Village, si le Village vient à l'éliminer, il réssucitera avec 2 coeurs en moins. Aura lumineuse

! [Renard]{green}: [Renard]{green}: Le renard gagne avec le Village, pour cela il peut connaitre le role d'un joueur après etre resté 10min à coté de lui avec la commande /lg flaire [nomDuJoueur], il y a cependant 15% de chance que le role ne soit pas bon, +5% par flairage déjà effectué. Aura lumineuse

! [Ancien]{green}: [Ancien]{green}: L'ancien gagne avec le Village, pour cela il possède une resistance permanente, s'il meure par les loups-garou, il ressucitera mais perdra sa résistance. Aura lumineuse

! [Vieux Sage]{green}: [Vieux Sage]{green}: Le vieux sage gagne avec les [**Villageois**]{green}, pour cela il obtiendra le taux de présence de chaque aura autour de lui, (voir aura dans /lg help) fréquenter un joueur fera augmenter la barre de l'aura correspondant à son aura. Aura lumineuse



! [Ermite]{green}: [Ermite]{green}: L'ermite gagne avec les [**Villageois**]{green}, il possède 30% de force le jour et 20% de résistance la nuit, mais pour chaque joueur autour de lui, il perdra 5% de force, le jour et 3% de resistance la nuit, il peut donc avoir un malus au lieu d'un bonus si trop de joueurs. Si le registre est tragique, il gagne 10% de résistance, s'il est oratoire, il perd 10% de force. Sa mort ne sera pas annoncée.  Aura Unknown

! [Comédien]{green}: [Comédien]{green}: Le comédien gagne avec les [**Villageois**]{green}, pour cela, son pouvoir change en fonction du registre de la pièce. Si le registre tragique est à 20%, il aura 20% de chance de connaitre l'aura d'un joueur, 20% de chance de connaitre son nombre de kill, et 20% de chance de savoir s'il a un effet. Il possède une résistance proportionnelle à taux d'Epique, (20% d'epique = 4% de resistance, 50% = 10% et 100% = 20%). Pour un taux de oratoire à 20%, il aura 20% de chance de connaitre l'ensemble des pseudos des joueurs ayant voté pour la personne la + votée.

! [Parrain]{green}: [Parrain]{green}: Le parrain gagne avec le Village, pour cela, il peut mettre une prime sur un joueur à chaque épisode, cette prime sera envoyé à un 1 joueur du camp opposé au hasard, s'il le tue, les 2 gagneront 5% de force et 1/2 coeur permanent Aura Dangereuse (commande: /lg prime [nomDuJoueur]

! [Allumeur de Lampadaire]{green}: [Allumeur de Lampadaire]{green}: L'allumeur de lampadaire gagne avec le Village, pour cela, il rend l'aura des joueurs autour de lui correspondant à leur objectif de victoire au bout de 10min à coté d'eux. Aura neutre

! [Disciple]{green}: [Disciple]{green}: Le disciple gagne avec le Village, pour cela il connait l'identité du vieux sage, après 20min à ses cotés, le vieux sage obtiendra son identité, après 30min, il aura accès 2 fois à la commande /lg aura [nomDuJoueur] lui permettant d'obtenir l'aura d'un joueur, au bout de 45min, il obtiendra speed 0,5. Aura Lumineuse

! [Infect Père Des loups]: [Infect Père Des loups]: L'infect père des loups (ou IPDL) possède force de nuit, de plus il peut choisir une fois dans la partie de réssuciter un joueur victime des loups garou en clicquant sur un message, celui-ci sera infecté et devra gagner avec les loups. Aura Dangereuse

! [Loup Garou Barbare]: [Loup Garou Barbare]: Le loup garou barbare possède force 0.5 perma, et a 5% de chance d'infliger un demi coeur en plus à chaque coup, pourcentage qui augmentera de 4% à chaque kill. A chaque kill, il gagne 2min de résistance mais perd 1 coeur permanent. Aura Obscure

! [Loup Garou Mystique]: [Loup Garou Mystique]: Le loup mystique gagne avec les loups, il possède la force des loups, et obtient un role aléatoire à chaque mort d'un loup. Aura obscur


! [Loup Garou Perfide]: [Loup Garou Perfide]: Le loup perfide gagne avec les loups-garou, pour cela il possède la force des loups et peut se mettre invisible 5min par nuit. Aura obscure

! [Loup garou métamorphe]: [Loup garou métamorphe]: Le loup métamorphe gagne avec les loups et possède la force des loups, il volera le role du premier joueur qu'il tuera. Aura obscure

! [Loup Garou Brumeux]: [Loup Garou Brumeux]: Le loup brumeux gagne avec les loups-garou, il peut, 2 fois dans la partie, cacher la mort d'un joueur.

! [Loup Garou Grimeur]: [Loup Garou Grimeur]: Le loup garou grimeur possède la force des loups de nuit, il gagne avec les loups et peut afficher les joueurs qu'il a tués comme loup garou à l'annonce de leurs rôles malgrés leurs véritables rôles

 
! [Loup Garou Alchimiste]: [Loup Garou Alchimiste]: Le loup garou alchimiste gagne avec les loups mais ne possède pas leur force, il peut une fois mettre un virus sur un joueur à coté de qui il est resté 5min, cette infection peut prendre 3 formes, le parasite qui prendra effet après 10min, mais qui pourra etre transmis par un kill de l'infecté, l'épidémie qui se transmet de joueur en joueur, le joueur sera avertis après une min, et le poison qui affaiblit la victime jusqu'à la mort du loup alchimiste Aura obscure

! [Loup Garou Manipulateur]: [Loup Garou Manipulateur]: Le loup garou manipulateur gagne avec les loups garou, mais ne possède pas force, à chaque épisode, il peut aveugler un joueur, si ce joueur a un role à info, le loup manipulateur obtiendra son role et l'aveuglera, ce qui empechera le joueur de gagner des info pour l'épisode Aura ///UNKNOWN///

! [Loup Garou]: [Loup Garou]: Le [loup garou simple] gagne avec les [loups], et possède la force des [loups]. Aura obscure

! [Enfant Sauvage]{purple}: [Enfant Sauvage]{purple}: L'enfant sauvage gagne avec le Village, il choisit un modèle, si ce modèle meure, il passera loup-garou, et aura la force des loups. Aura neutre

! [Voleur]{purple}: [Voleur]{purple}: Le voleur gagne tout seul, il possède force jusqu'à 90min, et vole le role et le camp du premier joueur qu'il tuera. Aura obscur  

! [Sorcier]{purple}: [Sorcier]{purple}: Le sorcier a 50% de gagner tout seul, et 50% de gagner avec le Village, il peut créer des potions avec certains matériaux. Ces potions ont des effets divers, ce sont celles que des joueurs normaux trouverait dans des batiments bonus.

! [Cupidon]{pink}: [Cupidon]{pink}: Le cupidon gagne avec le couple qu'il aura désigné, et il possède un arc punch 1, cependant si un membre de ce couple meure, l'autre mourra aussi. Aura neutre







! [Assassin]{yellow}: [Assassin]{yellow}: L'assassin gagne tout seul, pour cela il peut fabriquer une sharpness 4, possède force de jour, et obtient 3 livres: sharpness 3, protection 3, efficacité 3. Aura neutre


! [Pyromane]{yellow}: [Pyromane]{yellow}: Le pyromane gagne tout seul, il possède fire aspect et flame activable ou desactivable avec /lg fireaspect, il peut recouvrir 2 joueurs à moins de 20 blocs avec /lg recouvrir [nomDuJoueur], et tous les enflammer avec /lg enflammer pour les enflammer pendant 20 sec sans qu'ils puissent d'éteindre. Aura neutre


! [Ange de Thiercelieux]{yellow} ( à ne pas confondre avec Ange): [Ange de Thiercelieux]{yellow}: L'ange de thiercelieux gagne tout seul, il peut craft une sharpness 4, quand il est accusé, il gagne 20% de force contre l'accuseur et connait son role, 5% de résistance et 1 coeur permanents, et l'accuseur ne possède pas 20% de force contre lui. Si l'ange de T tue l'accuseur, sa mort ne sera pas annoncée. Aura Lumineuse

! [Démon]{yellow}: Démon: surprise !!

##COUPLE

Dans presque chaque partie, il existe un cupidon qui peut désigner un couple.
Les 3 joueurs devront alors gagner ensemble quoi qu'il arrive.
Rien ne passe au dessus du couple.
Si un membre du couple, meure, l'autre amoureux mourra aussi.
Il peuvent s'envoyer de la vie l'un à l'autre à l'aide de la commande /lg don [pourcentageDeVie].

##EVENEMENTS

Il existe certains évènement spéciaux configurables, dont voici une liste non exaustive:
- Exposed: Le pseudo d'un joueur et 3 roles dont le siens sont révélés aux yeux de tous.
- Brume: La mort d'un joueur n'apparait pas dans le chat
- Prémonition: Un joueur obtient des infos sur son entourages, bien que peu précises.
- Trouple: le couple n'est pas un couple mais un trouple... 
- Loup Solitaire: Un loup désigné aléatoirement devient solitaire, il doit gagner tout seul, il gagne alors 4 coeurs et 5% de résistance.
- Couple Aléatoire: Le couple n'est pas désigné par le cupidon mais par les dés du destin.

##LISTE DES COMMANDES

Commandes, non spécifiques aux roles non admin seulement (voir en jeu pour celles de l'host):
- /lg role --> permet de voir son role, et la liste des loups si vous l'etes
- /lg list --> permet de voir la liste des joueurs de la partie
- /lg whisper [message]
- /lg conférer [nomDuJoueur] --> confère un coeur à un joueur (si possible)
- /color --> plugin externes, ne marche pas forcement, permet de colorer un pseudo

END CATEGORIES
END Documentation

#Crédits

@ROOT

développement: [FITZCHE]

Organisation Games: [BoomAsko], [FITZCHE]

Participation pré-tests: [BoomAsko], [FITZCHE], [Xynos], [Maxilounite], [Gappy], [Valtor], [Nkid], [Strange]

Participation game test: ceux d'au dessus et bien d'autres, désolé je ne vous cite pas ça serait trop long mais merci bcp.

Inspiration: [Lapin] avec son plugin, Les suggestion sur le discord d'uhc world (notamment l'allumeur de lampadaire qui vient de [GR3M_])

Développement du site: [Raylazzz]

END ROOT
END Crédits

`;

function parseContent() {
    const lines = Content.split("\n");
    const storedLines = {};
    const storedLines2 = {};

    let themaOpened = false;

    lines.forEach((line, index) => {
        if (line.length == 0) return;

        if (line.startsWith("#") && !line.startsWith("##")) {
            const thema = line.slice(1);
            storedLines[thema] = [];
            themaOpened = thema;

            return;
        }

        if (line == `END ${themaOpened}`) {
            themaOpened = false;
            return;
        }

        if (themaOpened != false) {
            storedLines[themaOpened].push(line);
        }
    });

    for (const thema in storedLines) {
        const lines2 = storedLines[thema];

        let categoryOpened = false;

        lines2.forEach((line, index) => {
            if (line.startsWith("@")) {
                const category = line.slice(1);
                storedLines2[thema] = storedLines2[thema] || {};
                storedLines2[thema][category] = [];

                categoryOpened = category;

                return;
            }

            if (line == `END ${categoryOpened}`) {
                categoryOpened = false;
            }

            if (categoryOpened != false) {
                storedLines2[thema][categoryOpened].push(line);
            }
        });
    }

    for (const thema in storedLines2) {
        if (storedLines2[thema].CATEGORIES == undefined) continue;

        const lines3 = [...storedLines2[thema].CATEGORIES];
        storedLines2[thema].CATEGORIES = {};

        let openedTitle = false;

        lines3.forEach((line, index) => {
            if (line.startsWith("##")) {
                openedTitle = line.slice(2);

                storedLines2[thema].CATEGORIES[openedTitle] =
                    storedLines2[thema].CATEGORIES[openedTitle] || [];

                return;
            }

            if (openedTitle != false) {
                storedLines2[thema].CATEGORIES[openedTitle].push(line);
            }
        });
    }

    return storedLines2;
}

Content = parseContent();
