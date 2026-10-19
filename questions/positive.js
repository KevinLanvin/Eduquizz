// Theme 13 — Course 13: Éducation positive
// (question format: see questions/origins.js)
//
// Sources: the course summary and the Lexique only. No very precise dates
// (the years of the studies and of the authors are left out).
//
// A notion that appears in several courses is asked only once, in the oldest theme.
// The three education methods (courses 12, 13, 14) are asked separately here; the questions that
// compare the methods will be written with course 15 (balance between the methods).
// Not asked here on purpose: the definitions of R+, R-, P+, P- and of the simple / operant conditioning
// (ethology theme), of the habituation (cognition-006), of the facilitation sociale (cognition-009).

(window.THEMES = window.THEMES || []).push({
  id: "positive",
  title: "Éducation positive",
  shortTitle: "Positive",
  questions: [
    // ---------- Définir et théoriser ----------
    {
      id: "positive-001",
      question: "Qu'est-ce que l'éducation positive ?",
      answers: [
        "Une éducation basée sur le renforcement positif des bons comportements, par conditionnement simple ou opérant, pour augmenter leur fréquence",
        "Une éducation basée sur la sanction des mauvais comportements, pour faire baisser leur fréquence et éviter qu'ils se reproduisent",
        "Une éducation basée sur la liberté du chien et sur ses essais-erreurs, sans intervention directe du maître dans les apprentissages",
        "Une éducation basée sur le concept de la famille-meute et sur la maîtrise de privilèges par le maître au quotidien"
      ],
      correct: [0],
      explanation: "L'objectif : faire augmenter en fréquence un comportement que l'on souhaite voir se reproduire."
    },
    {
      id: "positive-002",
      question: "Qu'est-ce que le contre-conditionnement ?",
      answers: [
        "Remplacer un conditionnement (simple ou opérant) de l'animal par un nouveau conditionnement",
        "Renforcer un conditionnement déjà acquis en augmentant la valeur de la récompense",
        "Supprimer un comportement en ajoutant un stimulus aversif",
        "Exposer longuement l'animal à un stimulus jusqu'à ce qu'il n'y réagisse plus"
      ],
      correct: [0],
      explanation: "Définition clé du cours 13."
    },
    {
      id: "positive-003",
      question: "Sur quel système l'éducation positive est-elle principalement basée ?",
      answers: [
        "Sur le renforcement positif (R+) et la punition négative (P-)",
        "Sur la punition positive (P+) et le renforcement négatif (R-)",
        "Sur le renforcement négatif (R-) et la punition négative (P-)",
        "Uniquement sur le renforcement positif (R+), sans aucune punition"
      ],
      correct: [0],
      explanation: "R+ et P- sont entourés sur le schéma."
    },

    // ---------- Les prémices : Ortega et les « tradi-bonbons » ----------
    {
      id: "positive-004",
      question: "Quels sont des points positifs de la méthode « naturelle » de Joseph Ortega ?",
      answers: [
        "Il est précurseur dans l'utilisation de la récompense en éducation canine",
        "Il a su diffuser et faire accepter sa méthode au sein de la SCC et des clubs canins",
        "Il a grandement participé à la mise en place des écoles du chiot dans les clubs canins",
        "Il a rompu totalement avec le schéma de la famille-meute",
        "Il a banni toute forme de sanction de sa méthode"
      ],
      correct: [0, 1, 2],
      explanation: "Attention : sa méthode « naturelle » n'est pas l'éducation naturelle du cours 14."
    },
    {
      id: "positive-005",
      question: "Quels sont des points négatifs de la méthode de Joseph Ortega ?",
      answers: [
        "Elle reste sur un schéma famille-meute et confond toujours éducation et dominance",
        "Elle recommande des méthodes qui ne doivent plus l'être, comme le roulé alpha",
        "Son approche est basée sur une théorie dépassée et erronée",
        "Elle refuse toute forme de récompense",
        "Elle bannit le mot « non »"
      ],
      correct: [0, 1, 2],
      explanation: "Une transition, mais sur une théorie erronée."
    },
    {
      id: "positive-006",
      question: "Que désigne-t-on par les « tradi-bonbons » ?",
      answers: [
        "Une transition progressive vers la récompense, en gardant le schéma famille-meute et certaines approches coercitives",
        "Une éducation positive pure, dans laquelle seules des friandises sont utilisées pour récompenser le chien en toutes situations",
        "Une éducation traditionnelle abandonnée au profit de la seule liberté du chien dans des environnements riches et variés",
        "Une méthode qui remplace les friandises par le jeu et la caresse, sans jamais utiliser le moindre marqueur"
      ],
      correct: [0],
      explanation: "Les tradi-bonbons : récompense, mais famille-meute."
    },

    // ---------- Le clicker training ----------
    {
      id: "positive-007",
      question: "Parmi ces affirmations sur le clicker training, lesquelles sont vraies ?",
      answers: [
        "Il a été développé par Karen Pryor aux États-Unis, avec les mammifères marins",
        "Il est finalement utilisé avec tous les animaux, y compris le chien",
        "Le clicker est un marqueur",
        "Il a été développé en Europe avec des chiens de berger",
        "Le clicker est un renforçateur primaire"
      ],
      correct: [0, 1, 2],
      explanation: "Clicker = marqueur (stimulus conditionné)."
    },
    {
      id: "positive-008",
      question: "Quelles sont les 3 étapes du conditionnement par renforcement positif au clicker ?",
      answers: [
        "Observer le comportement",
        "Marquer le comportement",
        "Renforcer le comportement",
        "Punir le comportement",
        "Contrôler le comportement"
      ],
      correct: [0, 1, 2],
      explanation: "Observer, marquer (timing primordial), renforcer (le choix du renforçateur est essentiel)."
    },
    {
      id: "positive-009",
      question: "Que comprend l'étape d'observation du comportement ?",
      answers: [
        "L'état émotionnel du chien",
        "Les intentions tendant vers le bon comportement",
        "La décomposition du comportement par étapes",
        "La hiérarchie entre le maître et le chien",
        "La couleur et la taille du clicker"
      ],
      correct: [0, 1, 2],
      explanation: "Observer pour décomposer le comportement."
    },
    {
      id: "positive-010",
      question: "Parmi ces affirmations sur le renforçateur et le timing, lesquelles sont vraies ?",
      answers: [
        "Le renforçateur doit être suffisamment puissant pour permettre l'augmentation en fréquence d'un comportement",
        "Plus l'exercice est dur, plus la valeur du renforçateur doit être importante",
        "Le timing est extrêmement important pour un apprentissage clair et rapide",
        "Un délai trop long entre le marqueur et le renforçateur diminue fortement la capacité d'apprentissage",
        "Un renforçateur de faible valeur suffit pour un exercice difficile",
        "Le délai entre le marqueur et le renforçateur n'a aucune importance"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Le renforçateur et le timing conditionnent l'apprentissage."
    },
    {
      id: "positive-011",
      question: "Quelle est la fréquence de renforcement idéale ?",
      answers: [
        "10 à 20 récompenses par minute (haut ratio)",
        "1 à 2 récompenses par minute (bas ratio)",
        "3 à 5 récompenses par séance (ratio faible)",
        "Une récompense toutes les 10 minutes (ratio très faible)"
      ],
      correct: [0],
      explanation: "La fréquence de renforcement doit être importante pour garder la concentration du chien."
    },
    {
      id: "positive-012",
      question: "Quel est l'intérêt du clicker ?",
      answers: [
        "C'est un marqueur bref, distinct, neutre, non confondu avec un autre stimulus et facile à utiliser",
        "Il est perçu par le chien même en situation de stress, contrairement à la voix, ce qui en fait un excellent marqueur en rééducation",
        "Le chien se conditionne rapidement à cet outil et devient généralement force de propositions en quelques séances",
        "Le marqueur verbal est plus bref et plus distinct que le clicker",
        "Le clicker est peu utile en rééducation car le chien ne le perçoit pas en situation de stress"
      ],
      correct: [0, 1, 2],
      explanation: "Le marqueur verbal est généralement non bref, non distinct, confus et dépendant de l'état émotionnel du maître."
    },

    // ---------- Do as I do ----------
    {
      id: "positive-013",
      question: "Parmi ces affirmations sur la méthode « Do as I do », lesquelles sont vraies ?",
      answers: [
        "« Do as I do » signifie « fais ce que je fais »",
        "C'est une méthode d'apprentissage social par observation",
        "Elle est basée sur l'accentuation du stimulus et le conditionnement opérant",
        "Le maître fait la démonstration d'un comportement que le chien doit reproduire",
        "Elle est fondée sur l'habituation du chien à des stimuli",
        "Le maître ne fait aucune démonstration au chien"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Méthode de C. Fugazza."
    },
    {
      id: "positive-014",
      question: "Quelles sont les deux phases de la méthode « Do as I do » ?",
      answers: [
        "Phase 1 : apprentissage de 3 ordres par signal verbal, puis apprentissage associatif entre le comportement du maître et ces ordres, jusqu'à la reproduction sans signal verbal",
        "Phase 2 : démonstration de nouveaux comportements suivie de l'imitation par le chien, puis ajout du signal verbal une fois le comportement systématique",
        "Phase 1 : démonstration de nouveaux comportements par le maître, sans ordre connu",
        "Phase 2 : apprentissage de 3 ordres par signal verbal"
      ],
      correct: [0, 1],
      explanation: "Deux phases : ordres connus puis nouveaux comportements."
    },

    // ---------- Pratique : renforçateurs et 3D ----------
    {
      id: "positive-015",
      question: "Comment distingue-t-on les renforçateurs primaires et secondaires ?",
      answers: [
        "Les renforçateurs primaires répondent directement à un besoin primaire du chien (stimulus inconditionné)",
        "Les renforçateurs secondaires sont des stimuli conditionnés",
        "Les renforçateurs primaires sont des stimuli conditionnés",
        "Les renforçateurs secondaires répondent directement à un besoin primaire du chien"
      ],
      correct: [0, 1],
      explanation: "Primaire = stimulus inconditionné ; secondaire = stimulus conditionné."
    },
    {
      id: "positive-016",
      question: "Parmi les 5 principales récompenses, lesquelles sont des renforçateurs primaires ?",
      answers: [
        "La friandise",
        "Le jeu",
        "La caresse",
        "La voix",
        "Le clicker"
      ],
      correct: [0, 1, 2],
      explanation: "Friandise, jeu, caresse = renforçateurs primaires."
    },
    {
      id: "positive-017",
      question: "Parmi les 5 principales récompenses, lesquelles sont des renforçateurs secondaires ?",
      answers: [
        "La voix",
        "Le clicker",
        "La friandise",
        "Le jeu"
      ],
      correct: [0, 1],
      explanation: "Voix et clicker = renforçateurs secondaires."
    },
    {
      id: "positive-018",
      question: "Pourquoi faut-il mettre le chien en situation de réussite ?",
      answers: [
        "Pour progresser, il faut renforcer, et pour renforcer, il faut que le chien réussisse",
        "Plus le chien est mis en situation de réussite, plus les comportements sont renforcés et plus vite il progresse",
        "Tout l'enjeu est de gérer les facteurs d'échec",
        "« Plus on va lentement, plus ça va vite »",
        "Il faut pousser le chien à l'échec pour le motiver",
        "Plus on va vite, plus le chien progresse"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Gérer les facteurs d'échec : méthode des 3D."
    },
    {
      id: "positive-019",
      question: "Quels sont les 3D de la méthode de gestion des facteurs d'échec ?",
      answers: [
        "La durée",
        "La distance",
        "La distraction",
        "La dominance",
        "La discipline"
      ],
      correct: [0, 1, 2],
      explanation: "Méthode des 3D : durée, distance, distraction."
    },
    {
      id: "positive-020",
      question: "Que recouvre la durée dans la méthode des 3D ?",
      answers: [
        "La durée globale de travail",
        "La durée de l'exercice en cours",
        "La distance par rapport à vous",
        "La valeur de la récompense proposée"
      ],
      correct: [0, 1],
      explanation: "Durée globale (noté « important ») et durée de l'exercice."
    },
    {
      id: "positive-021",
      question: "Que recouvre la distance dans la méthode des 3D ?",
      answers: [
        "La distance par rapport à vous",
        "La distance par rapport à la distraction négative",
        "La durée de l'exercice en cours",
        "La nature de la récompense"
      ],
      correct: [0, 1],
      explanation: "Distance : par rapport au maître et à la distraction négative."
    },
    {
      id: "positive-022",
      question: "Quels sont les deux types de distraction dans la méthode des 3D ?",
      answers: [
        "Négative : chiens, joggeurs, cyclistes, marcheurs...",
        "Positive : jouet, friandises, leurre...",
        "Négative : jouet, friandises, leurre...",
        "Positive : chiens, joggeurs, cyclistes, marcheurs..."
      ],
      correct: [0, 1],
      explanation: "La distraction peut être négative ou positive."
    },

    // ---------- Dérives ----------
    {
      id: "positive-023",
      question: "Parmi ces affirmations sur les dérives de l'éducation positive « à l'extrême », lesquelles sont vraies ?",
      answers: [
        "Certains bannissent le « non » de leur vocabulaire",
        "Les interdits et les règles sont le fondement de toute forme de vie en société, humaine ou animale",
        "La plupart de ces extrêmes finissent par utiliser des interdits sous d'autres formes (« Pschitt ! »)",
        "Les interdits sont incompatibles avec toute forme d'éducation du chien",
        "Ces extrêmes n'utilisent jamais d'interdit, sous aucune forme"
      ],
      correct: [0, 1, 2],
      explanation: "Il est interdit d'interdire : une dérive de l'éducation positive."
    },
    {
      id: "positive-024",
      question: "Quelles réponses peut-on apporter aux arguments contre les interdits ?",
      answers: [
        "Les interdits permettent au chien de gérer sa frustration",
        "Il y a confusion entre interdits, douleur et état dépressif d'un animal : l'interdit ne provoque pas de détresse acquise",
        "Les interdits provoquent toujours une détresse acquise",
        "Les interdits empêchent définitivement le chien d'apprendre de nouveaux comportements"
      ],
      correct: [0, 1],
      explanation: "Arguments courants des extrêmes : confusion entre interdit et douleur, frustration, détresse acquise."
    },
    {
      id: "positive-025",
      question: "Parmi ces affirmations sur le renforcement de chaînes, lesquelles sont vraies ?",
      answers: [
        "Les extrêmes conseillent de détourner l'attention du chien ou de lui « proposer autre chose » au moment du comportement indésirable",
        "Récompenser l'arrêt d'un mauvais comportement provoque un renforcement positif de ce comportement (conditionnement opérant)",
        "On renforce toute la chaîne, la séquence comportementale dans sa globalité",
        "Récompenser l'arrêt d'un mauvais comportement diminue durablement sa fréquence",
        "Le détournement n'a aucun effet sur le comportement indésirable"
      ],
      correct: [0, 1, 2],
      explanation: "Le détournement donne l'impression de contrôler, mais renforce la chaîne."
    },
    {
      id: "positive-026",
      question: "Dans les trois situations suivantes (aboiement, canapé, mordillement), quelles sont les conséquences de la récompense ?",
      answers: [
        "Le chien qui aboie, à qui on demande « silence » avant de le récompenser, aboie de plus en plus souvent dans l'attente de l'ordre",
        "Le chien à qui on demande de « descendre » du canapé et que l'on récompense est d'autant plus enthousiaste à l'idée de monter pour le rejoindre",
        "Le chiot à qui on donne un jouet quand il mordille utilise le mordillement pour solliciter un jouet ou un os",
        "Le chien aboie de moins en moins, puisqu'il est récompensé quand il se tait",
        "Le chiot cesse de mordiller dès qu'on lui donne un jouet"
      ],
      correct: [0, 1, 2],
      explanation: "Des renforcements de chaînes et de simples renforcements positifs involontaires."
    },
    {
      id: "positive-027",
      question: "Quelles sont des conséquences des dérives de l'éducation positive « à l'extrême » ?",
      answers: [
        "Un renforcement des problématiques : amélioration rapide au début, puis renforcement du comportement initial",
        "Une augmentation du risque de morsure lorsqu'il s'agit d'un renforcement d'agressivité",
        "Une incompréhension du chien, qui perçoit que son comportement déplaît tout en étant récompensé",
        "Une disparition durable de la problématique",
        "Une amélioration de la communication Homme-Chien"
      ],
      correct: [0, 1, 2],
      explanation: "Des conséquences désastreuses pour le chien."
    },
    {
      id: "positive-028",
      question: "Lesquelles de ces propositions sont des conséquences des dérives de l'éducation positive « à l'extrême » ?",
      answers: [
        "Les propriétaires sont désemparés et culpabilisent sans comprendre que la méthode est mauvaise",
        "La communication Homme-Chien se détériore : le maître ne sait plus communiquer les comportements désirables et indésirables",
        "Il existe un risque d'abandon ou d'euthanasie",
        "Les propriétaires comprennent mieux leur chien",
        "La relation Homme-Chien s'améliore rapidement"
      ],
      correct: [0, 1, 2],
      explanation: "Conséquences pour les propriétaires et la relation."
    },

    // ---------- Avantages et inconvénients ----------
    {
      id: "positive-029",
      question: "Quels sont des avantages de l'éducation positive ?",
      answers: [
        "Le plaisir du chien à être éduqué ou rééduqué",
        "Le plaisir du maître à éduquer son chien",
        "Le respect du bien-être de l'animal",
        "Peu de connaissances à maîtriser",
        "Aucune préparation avant les séances"
      ],
      correct: [0, 1, 2],
      explanation: "Plaisir et bien-être."
    },
    {
      id: "positive-030",
      question: "Parmi ces propositions, lesquelles sont des avantages de l'éducation positive ?",
      answers: [
        "La prise en compte des besoins et la baisse des troubles comportementaux",
        "Elle est praticable par tous les membres de la famille",
        "Les apprentissages sont rapides et faciles",
        "C'est une méthode universelle qui demande peu d'adaptation",
        "Elle ne nécessite aucun matériel"
      ],
      correct: [0, 1, 2],
      explanation: "Besoins, famille et rapidité."
    },
    {
      id: "positive-031",
      question: "Quels sont des inconvénients de l'éducation positive ?",
      answers: [
        "Une maîtrise de connaissances indispensable en comportement et en éducation",
        "La prise en compte des besoins de l'animal est nécessaire",
        "Elle demande une adaptabilité à l'animal",
        "Elle demande une préparation des séances et de la patience",
        "Peu de techniques à maîtriser",
        "Peu de préparation avant une séance"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Une méthode exigeante en connaissances et en préparation."
    },
    {
      id: "positive-032",
      question: "Parmi ces propositions, lesquelles sont des inconvénients de l'éducation positive ?",
      answers: [
        "Un risque de dépendance à la récompense si elle est mal travaillée",
        "La pratique extrême et exclusive de certains professionnels",
        "Il est difficile pour certaines personnes de gérer le timing des récompenses",
        "La mise en danger de l'Humain, en particulier des enfants",
        "La non-prise en compte des besoins du chien"
      ],
      correct: [0, 1, 2],
      explanation: "Dépendance, extrêmes, timing."
    }
  ]
});
