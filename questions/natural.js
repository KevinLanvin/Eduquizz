// Theme 14 — Course 14: Éducation naturelle
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
//
// User request: several questions of the type "Quels sont les mécanismes d'apprentissage utilisés dans la méthode
// naturelle ?" (natural-002 to natural-004), the same notion asked in several ways.
// Warning: the "méthode naturelle de Joseph Ortega" (positive education course) is NOT the natural education.

(window.THEMES = window.THEMES || []).push({
  id: "natural",
  title: "Éducation naturelle",
  shortTitle: "Naturelle",
  questions: [
    // ---------- Approches : comment ont-ils appris ? ----------
    {
      id: "natural-001",
      question: "Que montrent les chiens de SDF à Paris, les chiens errants d'Italie ou d'Espagne et le chien impassible dans un bar ?",
      answers: [
        "Ces chiens n'ont jamais suivi de cours d'éducation",
        "Ils n'ont peut-être même jamais été éduqués (renforcement/punition par un maître)",
        "Ils évoluent pourtant calmement dans des environnements riches : foule, circulation, enfants qui courent",
        "Ils ont tous été éduqués en méthode positive avec un clicker",
        "Ils ont tous été dressés avec des outils coercitifs"
      ],
      correct: [0, 1, 2],
      explanation: "La question posée : comment ont-ils appris ?"
    },
    {
      id: "natural-002",
      question: "Quels sont les mécanismes d'apprentissage utilisés dans la méthode naturelle ?",
      answers: [
        "L'imprégnation (ou socialisation primaire)",
        "L'autorégulation (essais-erreurs)",
        "L'habituation",
        "La saturation (ou immersion)",
        "La facilitation sociale (ou apprentissage par observation)",
        "L'insight (apprentissage approfondi)",
        "L'apprentissage latent"
      ],
      correct: [0, 1, 2, 3, 4],
      explanation: "La méthode naturelle repose sur l'imprégnation, l'autorégulation, l'habituation, la saturation et la facilitation sociale. L'insight et l'apprentissage latent sont d'autres mécanismes d'apprentissage (cours sur la cognition), mais ils ne sont pas utilisés dans la méthode."
    },
    {
      id: "natural-003",
      question: "Parmi ces mécanismes, lesquels sont utilisés en éducation naturelle pour confronter le chien aux stimuli ?",
      answers: [
        "L'autorégulation",
        "L'habituation",
        "La saturation",
        "L'apprentissage latent",
        "L'apprentissage associatif"
      ],
      correct: [0, 1, 2],
      explanation: "Trois mécanismes reposent sur la confrontation du chien aux stimuli : autorégulation, habituation, saturation. L'apprentissage latent et l'apprentissage associatif sont d'autres mécanismes d'apprentissage, mais ils ne sont pas utilisés ici."
    },
    {
      id: "natural-004",
      question: "Quels mécanismes de l'éducation naturelle reposent sur le développement précoce et sur l'observation ?",
      answers: [
        "L'imprégnation (socialisation primaire)",
        "La facilitation sociale (apprentissage par observation)",
        "L'insight (apprentissage approfondi)",
        "La reconnaissance individuelle"
      ],
      correct: [0, 1],
      explanation: "L'imprégnation construit les cartes neuronales du chiot ; la facilitation sociale (apprentissage par observation) apprend le bon (ou mauvais) comportement."
    },
    {
      id: "natural-005",
      question: "Que permet la confrontation précoce du chiot à divers congénères, espèces et environnements ?",
      answers: [
        "Une bonne socialisation primaire",
        "Le chiot apprend à communiquer avec ses congénères",
        "Il apprend à accepter d'autres espèces que la sienne",
        "Il apprend à évoluer dans des environnements riches et variés",
        "Une soumission durable à son maître",
        "Une diminution de sa curiosité pour les nouveaux stimuli"
      ],
      correct: [0, 1, 2, 3],
      explanation: "L'imprégnation est une période sensible de 3 semaines à 3 mois, essentielle pour construire des cartes neuronales."
    },

    // ---------- Chaque mécanisme en détail ----------
    {
      id: "natural-006",
      question: "Qu'est-ce que l'autorégulation ?",
      answers: [
        "Une régulation autonome des comportements par la confrontation du chien en liberté face aux stimuli, pour permettre un apprentissage par essais-erreurs",
        "À force d'essais-erreurs, le chien s'aperçoit des comportements aux conséquences favorables, défavorables ou neutres",
        "La liberté permet l'apprentissage par essais-erreurs",
        "Une régulation des comportements par les récompenses données par le maître",
        "Une régulation des comportements par la contrainte physique"
      ],
      correct: [0, 1, 2],
      explanation: "L'autorégulation : liberté + essais-erreurs."
    },
    {
      id: "natural-007",
      question: "Parmi ces affirmations sur l'habituation en éducation naturelle, lesquelles sont vraies ?",
      answers: [
        "C'est la disparition de la réactivité non apprise à un stimulus, après des expositions répétées, sans association à une stimulation favorable ou défavorable",
        "À force de confrontations, le chien banalise le stimulus et ne réagit plus",
        "La fréquence de confrontation permet l'habituation",
        "Le chien associe le stimulus à une récompense",
        "La durée et l'intensité de la confrontation permettent l'habituation"
      ],
      correct: [0, 1, 2],
      explanation: "Habituation = fréquence de confrontation."
    },
    {
      id: "natural-008",
      question: "Qu'est-ce que la saturation (ou immersion) ?",
      answers: [
        "La disparition de la réactivité non apprise à un stimulus, après une mise en présence intense et/ou prolongée, sans association à une stimulation favorable ou défavorable",
        "La durée et l'intensité d'immersion permettent la saturation",
        "Une exposition brève et fréquente à un stimulus, associée à une friandise",
        "Une exposition fréquente à un stimulus, avec un renforcement positif à chaque fois"
      ],
      correct: [0, 1],
      explanation: "Saturation = durée et intensité d'immersion."
    },
    {
      id: "natural-009",
      question: "Que comprend le chien en situation de saturation ?",
      answers: [
        "Que ces stimuli ne représentent pas un danger pour lui",
        "Il accepte, à défaut de pouvoir se soustraire, la présence des stimuli",
        "Il inhibe sa réactivité (fuite/agression) au fur et à mesure du temps (fatigue mentale/physique)",
        "Il comprend que le comportement est inutile et non fonctionnel, puisque l'acceptation ne génère aucune conséquence négative",
        "Que le stimulus est dangereux et qu'il doit fuir plus vite",
        "Qu'il sera récompensé s'il cesse de réagir"
      ],
      correct: [0, 1, 2, 3],
      explanation: "La saturation fonctionne par l'acceptation et la fatigue."
    },
    {
      id: "natural-010",
      question: "Parmi ces affirmations sur la facilitation sociale en éducation naturelle, lesquelles sont vraies ?",
      answers: [
        "Elle est aussi appelée apprentissage par observation ou mimétisme",
        "Elle permet au chien d'observer ses congénères et des individus d'une autre espèce (comme l'Homme)",
        "Il apprend ainsi à adopter le bon (ou mauvais !) comportement",
        "La présence d'autres individus adoptant le bon comportement permet une facilitation sociale favorable",
        "Elle permet d'apprendre uniquement grâce aux récompenses",
        "La présence d'individus adoptant un mauvais comportement est sans effet"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Facilitation sociale = présence d'individus au bon comportement."
    },
    {
      id: "natural-011",
      question: "Quelle caractéristique permet chacun de ces mécanismes ?",
      answers: [
        "Habituation : la fréquence de confrontation",
        "Saturation : la durée et l'intensité d'immersion",
        "Autorégulation : la liberté, qui permet les essais-erreurs",
        "Facilitation sociale : la présence d'autres individus adoptant le bon comportement",
        "Habituation : la durée et l'intensité d'immersion",
        "Saturation : la fréquence de confrontation"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Un facteur clé par mécanisme."
    },

    // ---------- La méthode et sa pratique ----------
    {
      id: "natural-012",
      question: "Comment résume-t-on la méthode d'éducation naturelle ?",
      answers: [
        "On confronte le chien le plus régulièrement possible (habituation)",
        "À des environnements riches (saturation)",
        "En le laissant en liberté, contrôlée si nécessaire (autorégulation)",
        "En gardant une attitude normale (mimétisme)",
        "On marque chaque bon comportement avec un clicker",
        "On sanctionne les réactions excessives du chien"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Habituation, saturation, autorégulation, mimétisme."
    },
    {
      id: "natural-013",
      question: "Parmi ces affirmations sur les précautions de la méthode naturelle, lesquelles sont vraies ?",
      answers: [
        "Elle est plus facile à mettre en place avec un chiot (imprégnation)",
        "On peut travailler en liberté contrôlée, avec une longe si nécessaire",
        "On travaille en sécurité quand le chien est confronté à des dangers",
        "On travaille aussi en sécurité quand le chien représente un danger",
        "Elle n'est possible qu'avec un chien adulte",
        "L'utilisation d'une longe est interdite"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Toujours travailler en sécurité."
    },
    {
      id: "natural-014",
      question: "Quel est le rôle de l'éducation naturelle chez le chiot ?",
      answers: [
        "Lui permettre de découvrir son environnement",
        "Lui permettre de s'y habituer de façon progressive",
        "Lui permettre de s'autoréguler en allant au contact des stimuli non dangereux",
        "Lui faire suivre l'exemple d'un référent calme et détendu",
        "Lui apprendre les ordres de base par la contrainte",
        "Le soumettre à son maître"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Découvrir, s'habituer, s'autoréguler, observer."
    },
    {
      id: "natural-015",
      question: "Quelles pratiques privilégie-t-on chez le chiot pour chaque mécanisme ?",
      answers: [
        "Imprégnation : le confronter à divers environnements et à tous types de stimuli",
        "Habituation : le sortir quotidiennement dans des environnements riches et variés",
        "Autorégulation : le promener en liberté dès le plus jeune âge dans des environnements sécurisés",
        "Apprentissage par observation : se comporter de façon calme et détendue à la rencontre de joggeurs, cyclistes ou congénères",
        "Habituation : le promener uniquement en laisse courte",
        "Autorégulation : le contrôler en permanence par la contrainte"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Quatre mécanismes à privilégier chez le chiot."
    },
    {
      id: "natural-016",
      question: "Parmi ces affirmations sur la saturation chez le chiot, lesquelles sont vraies ?",
      answers: [
        "On est très vigilant sur son utilisation",
        "On l'évite pour traiter les appréhensions du chiot",
        "On la réserve sans risque aux stimuli attractifs (ex : parcs urbains très fréquentés pour un chiot qui saute sur les passants)",
        "On l'utilise en priorité pour traiter les peurs du chiot",
        "On l'évite pour les stimuli attractifs"
      ],
      correct: [0, 1, 2],
      explanation: "La saturation est un mécanisme à manier avec prudence."
    },
    {
      id: "natural-017",
      question: "Quels mécanismes privilégie-t-on en rééducation sur des troubles légers, comme la peur ?",
      answers: [
        "L'habituation",
        "L'autorégulation",
        "L'apprentissage par observation",
        "La saturation",
        "Le contre-conditionnement"
      ],
      correct: [0, 1, 2],
      explanation: "Troubles légers : habituation, autorégulation, observation."
    },
    {
      id: "natural-018",
      question: "Quels mécanismes privilégie-t-on en rééducation sur des troubles plus lourds (phobie intense, anxiété, agressivité intense et fréquente) ?",
      answers: [
        "La saturation",
        "L'apprentissage par observation",
        "L'autorégulation seule",
        "Le marquage au clicker et le renforcement positif"
      ],
      correct: [0, 1],
      explanation: "Troubles lourds : saturation et apprentissage par observation."
    },
    {
      id: "natural-019",
      question: "À quoi sert l'éducation naturelle en rééducation ?",
      answers: [
        "À compléter le travail éducatif, voire à apporter une solution à un chien peu réceptif aux récompenses et aux interdits",
        "À remplacer définitivement toute autre méthode éducative, qu'elle soit positive ou traditionnelle, quel que soit le chien",
        "À apprendre au chien des ordres précis sous contrainte, en le confrontant longuement à des stimuli dangereux",
        "À sanctionner les comportements indésirables avec un outil adapté, tout en restant calme et rigoureux dans la mise en place"
      ],
      correct: [0],
      explanation: "Un complément, voire une solution pour un chien peu réceptif."
    },
    {
      id: "natural-020",
      question: "Quel est le rôle du professionnel en éducation naturelle ?",
      answers: [
        "Un rôle important sur les aspects pédagogiques et préventifs",
        "Prévenir les accidents pour les chiens pouvant présenter un danger (muselière pour un chien agressif)",
        "Expliquer tous les mécanismes de l'éducation naturelle (attention à la saturation) pour qu'aucune erreur ne soit commise",
        "Laisser le propriétaire gérer seul la saturation",
        "Éviter de parler des dangers pour ne pas l'inquiéter"
      ],
      correct: [0, 1, 2],
      explanation: "Pédagogie et prévention."
    },

    // ---------- Dérives, avantages et inconvénients ----------
    {
      id: "natural-021",
      question: "Lesquelles de ces propositions correspondent à une dérive de l'éducation naturelle ?",
      answers: [
        "La non-intervention absolue des maîtres dans les écoles de chiots : des chiots harcelés et d'autres harceleurs, origine de comportements phobiques et d'agressivité intraspécifique",
        "Considérer l'éducation naturelle comme la seule forme d'éducation respectueuse du bien-être animal",
        "Oublier l'aspect qualitatif des rencontres",
        "Utiliser la saturation sur un chiot craintif, sans danger",
        "Associer systématiquement chaque rencontre à une friandise"
      ],
      correct: [0, 1, 2],
      explanation: "Une utilisation extrême et exclusive ne peut amener à un résultat stable et équilibré."
    },
    {
      id: "natural-022",
      question: "Qu'est-ce qui est plus favorable pour un chiot ?",
      answers: [
        "Quelques rencontres positives et régulières avec des congénères",
        "De nombreuses expériences aléatoires, ponctuées d'agressions et de harcèlements",
        "Aucune rencontre avec des congénères avant l'âge adulte",
        "Des rencontres les plus nombreuses possible, quelle que soit leur qualité"
      ],
      correct: [0],
      explanation: "Il ne faut pas oublier l'aspect qualitatif des rencontres."
    },
    {
      id: "natural-023",
      question: "Parmi ces affirmations sur une utilisation extrême et exclusive d'une méthode éducative, laquelle est vraie ?",
      answers: [
        "Elle ne peut en aucun cas amener à un résultat stable et équilibré",
        "Elle est la seule à garantir un résultat stable et équilibré",
        "Elle donne de bons résultats uniquement avec un chiot",
        "Elle n'est dangereuse qu'avec la méthode traditionnelle"
      ],
      correct: [0],
      explanation: "Ce principe s'applique à toute méthode éducative."
    },
    {
      id: "natural-024",
      question: "Quels sont des avantages de l'éducation naturelle ?",
      answers: [
        "Elle est efficace même avec un chien non motivé par une quelconque forme de récompense",
        "Elle ne nécessite aucun outil",
        "Ses apprentissages sont les plus fiables : ils ne dépendent ni d'un système de récompense, ni d'un système de sanction, aucune motivation n'est nécessaire",
        "Elle nécessite beaucoup de matériel",
        "Elle dépend entièrement de la motivation du chien"
      ],
      correct: [0, 1, 2],
      explanation: "Efficace sans récompense, sans outil, très fiable."
    },
    {
      id: "natural-025",
      question: "Quels sont des inconvénients de l'éducation naturelle ?",
      answers: [
        "Elle ne permet pas de travailler l'apprentissage d'ordres et la réceptivité",
        "Elle ne permet pas de travailler les comportements dont le renforcement est intrinsèque (chasse, certaines agressions...)",
        "Elle permet d'apprendre rapidement tous les ordres de base",
        "Elle fonctionne très bien avec les comportements de chasse"
      ],
      correct: [0, 1],
      explanation: "Pas d'ordres, pas de comportements à renforcement intrinsèque."
    },
    {
      id: "natural-026",
      question: "Quels autres inconvénients l'éducation naturelle présente-t-elle ?",
      answers: [
        "Un travail à réaliser sur le long terme",
        "Elle nécessite de pouvoir emmener très régulièrement son chien dans des environnements adaptés",
        "Des résultats immédiats dès la première séance",
        "Elle ne nécessite aucun déplacement"
      ],
      correct: [0, 1],
      explanation: "Long terme et environnements adaptés."
    }
  ]
});
