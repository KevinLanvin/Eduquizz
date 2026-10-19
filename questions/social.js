// Theme 6 — Course 6: Le chien social, relations intra & interspécifiques
// (question format: see questions/origins.js)
//
// Sources: the course summary and the Lexique only. No very precise dates
// (years of the studies and authors are left out), no journal references.
// The "Alpha / Beta" cartoons that are crossed out in the course are only used as wrong answers.
//
// A notion that appears in several courses is asked only once, in the oldest theme.
// Not asked here on purpose:
//   - autodétermination lost by the dog      -> origins-006
//   - feral vs stray dogs (definition)       -> budget-010
(window.THEMES = window.THEMES || []).push({
  id: "social",
  title: "Le chien social et la relation Homme-Chien",
  shortTitle: "Chien social",
  questions: [
    // ---------- La socialité ----------
    {
      id: "social-001",
      question: "Quelles associations sont exactes à propos des degrés de socialité ?",
      answers: [
        "Une espèce solitaire n'a pas d'interactions entre individus",
        "Une espèce grégaire : les individus se regroupent et peuvent avoir des interactions élémentaires",
        "Une espèce sociale : existence de groupes et développement de relations sociales",
        "Une espèce solitaire : les individus se regroupent et développent des relations sociales",
        "Une espèce grégaire : les individus n'ont aucune interaction entre eux"
      ],
      correct: [0, 1, 2],
      explanation: "Solitaire : pas d'interactions. Grégaire : regroupement et interactions élémentaires. Sociale : groupes et relations sociales."
    },
    {
      id: "social-002",
      question: "À quel type de relations la socialité s'applique-t-elle ?",
      answers: [
        "Uniquement aux relations intraspécifiques, entre individus de la même espèce",
        "Uniquement aux relations interspécifiques, entre individus d'espèces différentes",
        "Aux relations intraspécifiques comme interspécifiques, sans distinction",
        "Uniquement aux relations entre un parent et ses petits, pendant la période de dépendance"
      ],
      correct: [0],
      explanation: "La socialité ne définit que des relations intraspécifiques. Entre espèces, on parle de relation interspécifique (ex : relation Homme-Chien)."
    },
    {
      id: "social-003",
      question: "Quels sont les 5 critères de socialité qu'une espèce doit réunir pour être dite « sociale » ?",
      answers: [
        "La stabilité temporelle du groupe",
        "La cohésion spatiale du groupe",
        "La communication et la coordination des activités",
        "La reconnaissance des membres du groupe et la discrimination des non-membres",
        "La coopération entre les membres du groupe",
        "Une hiérarchie linéaire stricte entre les membres",
        "La reproduction réservée à un seul couple"
      ],
      correct: [0, 1, 2, 3, 4],
      explanation: "Les 5 critères : stabilité temporelle, cohésion spatiale, communication et coordination, reconnaissance des membres, coopération. L'espèce n'est dite sociale que si elle les regroupe tous."
    },
    {
      id: "social-004",
      question: "Que démontre l'étude des chiens féraux ?",
      answers: [
        "Que le chien est une espèce sociale, formant des groupes stables qui partagent un même espace",
        "Que ces groupes communiquent entre eux, reconnaissent leurs membres et sont capables de coopérer",
        "Que le chien est une espèce solitaire, qui ne se regroupe que pour se reproduire",
        "Que les groupes sont toujours composés d'un couple alpha et de ses descendants directs"
      ],
      correct: [0, 1],
      explanation: "L'étude des chiens féraux démontre que le chien est une espèce sociale : groupes stables, même espace, communication, reconnaissance des membres et coopération."
    },
    {
      id: "social-005",
      question: "Quelle est la taille habituelle des groupes de chiens féraux ?",
      answers: [
        "De 3 à 6 individus, contre 2 à 15 chez le loup",
        "De 10 à 15 individus, contre 2 à 6 chez le loup",
        "De 2 à 15 individus, contre 3 à 6 chez le loup",
        "De 8 à 12 individus, comme chez le loup"
      ],
      correct: [0],
      explanation: "Les groupes de chiens féraux comptent généralement 3 à 6 individus, contre 2 à 15 chez le loup."
    },
    {
      id: "social-006",
      question: "Entre quelles valeurs varie le domaine vital des chiens féraux, en fonction des ressources ?",
      answers: [
        "De 100 m² en ville à 70 km² en zone rurale",
        "De 1 km² en ville à 5 km² en zone rurale",
        "De 10 000 m² en ville à 700 m² en zone rurale",
        "De 100 m² en zone rurale à 70 km² en ville"
      ],
      correct: [0],
      explanation: "Le domaine vital varie de 100 m² en ville à 70 km² en zone rurale (Alaska), selon les ressources : nourriture, reproduction, activités."
    },
    {
      id: "social-007",
      question: "Que dit le cours de la structure sociale des groupes de chiens féraux ?",
      answers: [
        "Elle est très variable",
        "Un groupe peut être constitué d'un couple et de ses descendants",
        "On observe aussi de nombreux groupes avec des membres non apparentés",
        "Un groupe est toujours dirigé par un couple alpha",
        "Tous les membres d'un groupe sont toujours apparentés"
      ],
      correct: [0, 1, 2],
      explanation: "La structure sociale est très variable : un couple et ses descendants, mais aussi de nombreux groupes avec des membres non apparentés."
    },
    {
      id: "social-008",
      question: "Que dit le cours des soins parentaux et de la mortalité chez les chiens féraux ?",
      answers: [
        "Les soins parentaux sont apportés quasi exclusivement par la mère",
        "La mortalité juvénile est très importante (plus de 80 % la première année)",
        "Les soins sont partagés à parts égales entre tous les membres du groupe",
        "La mortalité juvénile est très faible, grâce à la vie en groupe"
      ],
      correct: [0, 1],
      explanation: "Chez les chiens féraux, les soins parentaux sont quasi exclusivement apportés par la mère et la mortalité juvénile est très importante."
    },

    // ---------- La notion de dyade ----------
    {
      id: "social-009",
      question: "Qu'est-ce qu'une dyade ?",
      answers: [
        "Un couple de deux sujets, de deux éléments en interaction",
        "Un groupe stable d'au moins trois individus qui coopèrent",
        "Une hiérarchie circulaire entre trois individus",
        "Une interaction unique, sans suite, entre deux inconnus"
      ],
      correct: [0],
      explanation: "La dyade est un couple de deux sujets en interaction : terminologie utilisée notamment par le Pr B. Deputte pour décrire les interactions sociales."
    },
    {
      id: "social-010",
      question: "Combien de dyades forme un groupe de 6 chiens ?",
      answers: [
        "15 dyades",
        "6 dyades",
        "12 dyades",
        "36 dyades"
      ],
      correct: [0],
      explanation: "Nombre de dyades = n × (n − 1) / 2 = 6 × 5 / 2 = 15 : quinze relations complexes entremêlées, d'où l'extrême complexité des groupes sociaux canins."
    },
    {
      id: "social-011",
      question: "Que montre le sociogramme d'un groupe de 6 Saint-Hubert observé pendant 80 heures ?",
      answers: [
        "Sur 15 dyades, 3 seulement semblent être dans une relation de dominance/subordination",
        "Sur 15 dyades, 12 sont dans une relation de dominance/subordination",
        "Les 15 dyades sont dans une relation de dominance/subordination",
        "Aucune dyade n'est dans une relation de dominance/subordination"
      ],
      correct: [0],
      explanation: "Sur les 15 dyades du groupe, 3 seulement semblent dans une relation de dominance/subordination : la dominance reste l'exception, pas la règle."
    },
    {
      id: "social-012",
      question: "Que désigne la dominance ?",
      answers: [
        "L'ascendant décisionnel d'un individu sur un autre, dans toutes les situations et de façon stable dans le temps",
        "L'ensemble des comportements qui visent à éloigner un autre individu d'une ressource ponctuelle (os, jouet...)",
        "Un trait de tempérament qui pousse un chien à gagner chacune de ses interactions avec n'importe quel congénère",
        "Le fait de gagner une interaction ponctuelle, par exemple pour l'accès à un os, face à un autre chien"
      ],
      correct: [0],
      explanation: "La dominance est l'ascendant décisionnel d'un individu sur l'autre dans toutes les situations, de manière stable dans le temps. C'est la caractéristique potentielle d'une relation, jamais d'un individu."
    },
    {
      id: "social-013",
      question: "Quelles propositions sont exactes à propos de la dominance ?",
      answers: [
        "C'est la caractéristique potentielle d'une relation",
        "Ce n'est pas un tempérament mais une relation",
        "Un chien ne peut pas être dit « dominant » ou « soumis » dans l'absolu",
        "Les rôles sont interchangeables dans une autre relation",
        "C'est un trait de tempérament propre à chaque chien",
        "Un chien dominant le reste avec tous les autres chiens"
      ],
      correct: [0, 1, 2, 3],
      explanation: "La dominance est une relation éventuelle entre deux individus, pas un trait de tempérament : un chien ne peut pas être « dominant » ou « soumis » en général."
    },

    // ---------- L'organisation sociale ----------
    {
      id: "social-014",
      question: "Que dit le cours de l'organisation sociale du chien ?",
      answers: [
        "Le chien n'évolue pas dans une meute composée d'un couple Alpha et d'individus Beta, Gamma, Omega...",
        "Il développe des relations sociales, qui peuvent aboutir à de la dominance/subordination ou à de simples interactions affiliatives",
        "Un groupe stable fonctionne de façon beaucoup plus complexe qu'une organisation pyramidale ou linéaire",
        "Le chien vit en meute pyramidale, dirigée par un couple alpha",
        "Toutes les relations entre chiens sont des relations de dominance"
      ],
      correct: [0, 1, 2],
      explanation: "Le chien développe des relations sociales (dominance/subordination ou interactions affiliatives positives) : un groupe stable est bien plus complexe qu'une pyramide."
    },
    {
      id: "social-015",
      question: "Quelles associations niveau d'organisation / exemple sont exactes ?",
      answers: [
        "Interaction agonistique : A agresse B, et B se soumet à A ou l'évite",
        "Relation de dominance/subordination : A domine B, B est subordonné à A",
        "Hiérarchie de dominance/subordination : un ensemble de relations entre plusieurs individus",
        "Interaction agonistique : A domine B de façon stable dans toutes les situations",
        "Hiérarchie de dominance/subordination : une seule interaction entre deux chiens"
      ],
      correct: [0, 1, 2],
      explanation: "Plusieurs interactions agonistiques forment une relation ; plusieurs relations forment une hiérarchie (par exemple circulaire : A domine B, B domine C, C domine A)."
    },
    {
      id: "social-016",
      question: "Comment appelle-t-on une hiérarchie où A domine B, B domine C et C domine A ?",
      answers: [
        "Une hiérarchie circulaire (intransitive)",
        "Une hiérarchie linéaire transitive",
        "Une hiérarchie pyramidale de type Alpha-Beta-Gamma",
        "Une hiérarchie familiale, par âge et par sexe"
      ],
      correct: [0],
      explanation: "A domine B, B domine C, C domine A : c'est une hiérarchie de dominance/subordination circulaire (structure intransitive)."
    },
    {
      id: "social-017",
      question: "Dans le schéma des relations de dominance, quelles structures sont encadrées en vert (celles qui existent) ?",
      answers: [
        "La structure intransitive (circulaire)",
        "La meute de loups familiale (père, mère, fils, filles, jeunes)",
        "La hiérarchie linéaire transitive (Alpha, Beta, Gamma, Omega)",
        "La meute de loups captifs classique, hiérarchisée par sexe et par âge"
      ],
      correct: [0, 1],
      explanation: "Sont encadrées en vert : la structure circulaire et la meute de loups familiale. La hiérarchie linéaire Alpha-Beta-Gamma-Omega et la meute classique de loups captifs sont barrées."
    },
    {
      id: "social-018",
      question: "Que dit le cours des comportements de chiens face à leurs congénères ?",
      answers: [
        "Certains chiens cherchent immédiatement une relation de dominance/subordination",
        "D'autres adoptent plutôt des comportements affiliatifs",
        "Une proportion plus restreinte d'individus ne cherche simplement pas à interagir",
        "Tous les chiens cherchent d'emblée une relation de dominance/subordination",
        "La majorité des chiens ne cherche pas à interagir avec ses congénères"
      ],
      correct: [0, 1, 2],
      explanation: "Certains chiens cherchent la dominance/subordination, d'autres sont plutôt affiliatifs, et une proportion plus restreinte ne cherche pas à interagir."
    },
    {
      id: "social-019",
      question: "De quoi la socialité intraspécifique d'un chien dépend-elle ?",
      answers: [
        "De son inné (race, lignée, ascendants)",
        "De son sexe (mâle ou femelle, entier ou stérilisé)",
        "De la quantité, de la qualité et de la nature de ses expériences au contact de congénères",
        "Des apprentissages que ses maîtres lui ont transmis, volontairement ou non",
        "De la couleur de sa robe",
        "De l'âge de ses maîtres"
      ],
      correct: [0, 1, 2, 3],
      explanation: "La socialité d'un chien dépend de son inné, de son sexe, de ses expériences avec les congénères et des apprentissages transmis (volontairement ou involontairement) par ses maîtres."
    },
    {
      id: "social-020",
      question: "Que donnent le tempérament et l'expérience d'un chien dans ses relations avec ses congénères ?",
      answers: [
        "Une tendance : certains chiens apprennent à gagner et d'autres à perdre",
        "Un statut fixe : le chien est « dominant » ou « soumis » avec tous les chiens",
        "Une impossibilité de nouer une relation avec un chien inconnu",
        "Une absence totale d'influence : seul le sexe de l'animal compte"
      ],
      correct: [0],
      explanation: "Le tempérament et l'expérience donnent une tendance : certains chiens apprennent à gagner, d'autres à perdre. Mais un chien n'est pas « dominant » ou « soumis » dans l'absolu."
    },
    {
      id: "social-021",
      question: "Pourquoi les interactions entre chiens que nous mettons en contact posent-elles problème ?",
      answers: [
        "La plupart ne forment pas un groupe stable : pas de récurrence des interactions, donc pas de relation sociale",
        "Sans ajustements, les interactions sont instables et le risque d'interactions agonistiques est important",
        "Les groupes que nous formons ne sont ni stables ni ajustés : les conflits sont donc récurrents",
        "Les chiens sont naturellement incapables de communiquer entre eux",
        "Les chiens sont naturellement solitaires et refusent tout contact"
      ],
      correct: [0, 1, 2],
      explanation: "Problématique majeure : le manque de stabilité. Sans récurrence ni ajustements, on a de simples interactions, pas de relations. L'ajustement peut passer par du conflit, qu'on contrôle pour éviter les débordements."
    },
    {
      id: "social-022",
      question: "Comment le cours définit-il une relation sociale ?",
      answers: [
        "Multiples interactions sociales + ajustements",
        "Une seule interaction sociale, suivie d'une séparation",
        "Un groupe de chiens qui vivent ensemble sous le même toit",
        "Une hiérarchie stable avec un chien dominant et des subordonnés"
      ],
      correct: [0],
      explanation: "Relation sociale = multiples interactions sociales + ajustements."
    },
    {
      id: "social-023",
      question: "Quelle différence y a-t-il entre un comportement agonistique et un comportement affiliatif ?",
      answers: [
        "Le comportement agonistique vise à éloigner un individu d'une ressource, le comportement affiliatif à rapprocher les individus",
        "Le comportement agonistique vise à rapprocher les individus, le comportement affiliatif à éloigner un individu d'une ressource",
        "Le comportement agonistique est toujours inné, alors que le comportement affiliatif est toujours un comportement appris",
        "Il n'y a aucune différence : les deux termes désignent des comportements agressifs entre individus d'un groupe"
      ],
      correct: [0],
      explanation: "Agonistique : éloigner un autre individu d'une ressource. Affiliatif : rapprocher les individus."
    },

    // ---------- La relation Homme-Chien ----------
    {
      id: "social-024",
      question: "Quels sont les deux grands concepts de la relation Homme-Chien qui s'affrontent aujourd'hui ?",
      answers: [
        "L'absence de hiérarchie et d'interdits",
        "Le concept de la « famille-meute »",
        "Le dressage pur, fondé uniquement sur la contrainte",
        "La domestication partielle, qui laisse le chien choisir son groupe"
      ],
      correct: [0, 1],
      explanation: "Deux visions s'affrontent : l'absence de hiérarchie et d'interdits d'un côté, la « famille-meute » de l'autre. Le cours critique les deux."
    },
    {
      id: "social-025",
      question: "Quelles idées sont associées à l'« absence de hiérarchie et d'interdits » ?",
      answers: [
        "Le chien doit suivre son « guide » sans contraintes",
        "Tous les apprentissages doivent être travaillés uniquement de façon positive",
        "Il est inutile d'interdire l'accès à certains espaces de la maison",
        "« Il est interdit d'interdire »",
        "Vous devez être le chef de meute",
        "Vous devez manger avant votre chien"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Selon ce concept, il n'existe aucune hiérarchie Homme-Chien, tout se travaille de façon positive et l'interdit génère de la frustration. Chef de meute et manger avant son chien relèvent de la famille-meute."
    },
    {
      id: "social-026",
      question: "Quelles idées sont associées au concept de la « famille-meute » ?",
      answers: [
        "Vous devez être le chef de meute",
        "Vous devez manger avant votre chien",
        "Votre chien ne doit pas avoir accès au mobilier (canapé, lit)",
        "Votre chien ne doit jamais gagner dans le jeu",
        "Il est interdit d'interdire",
        "Les apprentissages doivent être uniquement positifs"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Famille-meute : chef de meute, manger avant le chien, pas de mobilier, ne jamais enjamber le chien, jamais gagner au jeu, soumettre le chien en cas de mauvais comportement."
    },
    {
      id: "social-027",
      question: "Pourquoi le cours dit-il que l'Homme et le chien ne forment pas une meute ?",
      answers: [
        "Nous n'appartenons pas à la même espèce",
        "Nous n'avons pas les mêmes codes ni la même communication",
        "Nous ne sommes pas en compétition pour notre reproduction",
        "Le chien ne dispose pas de la liberté sociale de quitter un groupe ou d'en rejoindre un nouveau",
        "Nous partageons les mêmes codes de communication que les chiens",
        "Le chien peut quitter le groupe quand il le souhaite"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Nous n'avons pas la même espèce, ni les mêmes codes, ni compétition pour la reproduction ; le partage des ressources n'est que partiel et le chien n'a pas la liberté sociale de quitter un groupe ou d'en rejoindre un autre : les conditions d'une meute ne sont pas réunies."
    },
    {
      id: "social-028",
      question: "Pourquoi manger avant son chien ou passer les portes en premier est-il jugé inutile et infondé ?",
      answers: [
        "Ces comportements pseudo-dominants reposent sur une mauvaise transposition du fonctionnement des loups puis des chiens",
        "Parce que le chien est trop jeune pour comprendre ces règles et qu'il faut attendre qu'il soit devenu adulte",
        "Parce que ces règles n'ont de sens que pour les chiens de grande taille, qui ont un fort tempérament",
        "Parce que le chien ne remarque pas l'ordre dans lequel ses maîtres passent les portes ou prennent leurs repas"
      ],
      correct: [0],
      explanation: "Reproduire le fonctionnement d'une meute (manger avant son chien, passer les portes en premier...) repose sur une mauvaise transposition du fonctionnement des loups puis des chiens entre eux."
    },
    {
      id: "social-029",
      question: "Pourquoi l'Homme et le chien ne sont-ils pas sur un pied d'égalité ?",
      answers: [
        "Le chien ne comprend pas les contraintes sociales humaines (lois, voisins, sécurité routière...)",
        "Le chien ne peut pas anticiper les conséquences indirectes ou différées de ses actes",
        "Le chien ne peut pas être tenu juridiquement, moralement ou socialement responsable",
        "Le chien a les mêmes capacités cognitives que l'Homme",
        "La responsabilité est partagée à parts égales entre l'Homme et le chien"
      ],
      correct: [0, 1, 2],
      explanation: "L'égalité décisionnelle suppose une symétrie de responsabilité, or la responsabilité est entièrement humaine : le chien ne comprend pas nos contraintes, n'anticipe pas les conséquences différées et ne peut être tenu responsable."
    },
    {
      id: "social-030",
      question: "Que recouvre l'asymétrie fonctionnelle et décisionnelle de la relation Homme-Chien ?",
      answers: [
        "L'humain contrôle l'environnement",
        "L'humain fixe les règles de cohabitation",
        "L'humain autorise, interdit ou favorise certains comportements",
        "Le chien ne dispose pas de ce pouvoir décisionnel",
        "Le chien fixe ses propres règles de cohabitation",
        "Cette asymétrie est abusive et violente"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Cette asymétrie n'est ni abusive ni violente : elle est structurelle et inévitable."
    },
    {
      id: "social-031",
      question: "Que désigne le référent dans la relation Homme-Chien ?",
      answers: [
        "L'humain, qui structure l'environnement, donne de la lisibilité et garantit la sécurité et le bien-être de tous",
        "L'humain, qui se comporte en chef de meute et impose sa position dominante au chien dans toutes les situations",
        "L'humain, qui se place sur un pied d'égalité avec le chien et partage avec lui toutes les décisions importantes",
        "Le chien le plus âgé du groupe, que les autres chiens prennent comme modèle dans leurs apprentissages"
      ],
      correct: [0],
      explanation: "L'humain n'est ni un congénère, ni un égal, ni un dominant au sens animal : c'est un référent qui structure l'environnement, donne de la lisibilité et garantit sécurité et bien-être."
    },
    {
      id: "social-032",
      question: "Que signifie poser un cadre, fixer des règles et des limites et mettre en place des apprentissages ?",
      answers: [
        "Ce n'est pas dominer : c'est assumer sa responsabilité humaine envers une espèce domestiquée par l'Homme et pour l'Homme",
        "C'est dominer le chien, ce qui reste nécessaire pour qu'il accepte la vie commune avec les humains au quotidien",
        "C'est imposer au chien un fonctionnement de meute, qui est adapté à sa nature d'animal social et grégaire",
        "C'est une contrainte inutile, car le chien sait déjà très bien se comporter dans une maison sans aucune règle"
      ],
      correct: [0],
      explanation: "Poser un cadre, ce n'est pas dominer : c'est assumer sa responsabilité humaine vis-à-vis d'une espèce domestiquée par l'Homme et pour l'Homme."
    },
    {
      id: "social-033",
      question: "Quelle posture le cours demande-t-il aux professionnels face à la relation Homme-Chien ?",
      answers: [
        "Une posture pragmatique, éthique et fonctionnelle, plutôt qu'idéologique",
        "L'humain prend les décisions et les assume, en tenant compte de ce que l'animal exprime et perçoit",
        "Le chien évolue dans le cadre éducatif et l'environnement fournis par l'humain, qui lui permet d'exprimer ses besoins, émotions et limites",
        "Une posture idéologique, au choix du professionnel",
        "Renoncer à décider pour respecter le chien"
      ],
      correct: [0, 1, 2],
      explanation: "Respecter le chien ne consiste pas à renoncer à décider, mais à décider en tenant compte de ses capacités, de ses besoins et de son bien-être."
    }
  ]
});
