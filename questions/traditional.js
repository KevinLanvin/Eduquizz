// Theme 12 — Course 12: Éducation dite « traditionnelle »
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
  id: "traditional",
  title: "Éducation traditionnelle",
  shortTitle: "Traditionnelle",
  questions: [
    // ---------- Théorie ----------
    {
      id: "traditional-001",
      question: "Sur quel concept l'éducation dite « traditionnelle » est-elle basée ?",
      answers: [
        "Le concept de la « famille-meute »",
        "Le renforcement positif des bons comportements",
        "L'autorégulation en liberté, par essais-erreurs",
        "La saturation face aux stimuli problématiques"
      ],
      correct: [0],
      explanation: "L'éducation dite traditionnelle est basée sur le concept de la « famille-meute »."
    },
    {
      id: "traditional-002",
      question: "Que dit la théorie de l'éducation traditionnelle ?",
      answers: [
        "Elle repose sur l'observation de loups en captivité, supposés former des meutes hiérarchisées de façon pyramidale",
        "Nous devrions reproduire le fonctionnement de ces meutes",
        "Le chien doit être le dernier échelon de la « famille-meute », dominé par tous les autres individus",
        "Elle repose sur l'observation de chiens errants en liberté, vivant en groupes familiaux",
        "Le chien doit être considéré comme l'égal de son maître"
      ],
      correct: [0, 1, 2],
      explanation: "Théorie basée sur la famille-meute : le chien est le dernier échelon."
    },
    {
      id: "traditional-003",
      question: "Comment l'éducation traditionnelle interprète-t-elle l'obéissance du chien ?",
      answers: [
        "Le chien obéissant est considéré comme soumis à son maître",
        "Le chien non obéissant est considéré comme dominant son maître",
        "Le chien non obéissant manque simplement de motivation",
        "Le chien obéissant est considéré comme dominant son maître"
      ],
      correct: [0, 1],
      explanation: "L'obéissance dépend de la position « sociale » du maître par rapport au chien."
    },
    {
      id: "traditional-004",
      question: "Que dit la théorie traditionnelle de la hiérarchie et des problèmes de comportement ?",
      answers: [
        "La hiérarchisation repose sur la maîtrise de « privilèges » et sur l'exercice de la dominance (soumission du chien) dans de nombreuses situations du quotidien",
        "Les problèmes éducatifs et comportementaux sont considérés comme une défiance de la domination du maître",
        "La rééducation repose donc sur des systèmes de sanction souvent violents",
        "Les problèmes de comportement sont vus comme le signe de besoins non satisfaits",
        "La rééducation repose avant tout sur la récompense"
      ],
      correct: [0, 1, 2],
      explanation: "Tout problème est lu comme une défiance de la domination du maître."
    },
    {
      id: "traditional-005",
      question: "Que dit la théorie traditionnelle des besoins du chien et de son maître ?",
      answers: [
        "Le seul besoin de l'animal est généralement de vivre en « meute »",
        "On évoque rarement d'autres formes de besoins chez le chien",
        "Le chien est souvent considéré comme n'ayant qu'un seul maître",
        "On insiste surtout sur ses besoins d'activité et de stimulation intellectuelle",
        "Le chien est considéré comme attaché de la même façon à tous les membres de la famille"
      ],
      correct: [0, 1, 2],
      explanation: "Peu de besoins, un seul maître."
    },
    {
      id: "traditional-006",
      question: "Sur quel système l'éducation traditionnelle est-elle principalement basée ?",
      answers: [
        "Sur la punition positive (P+) et le renforcement négatif (R-)",
        "Sur le renforcement positif (R+) et la punition négative (P-)",
        "Uniquement sur le renforcement positif (R+)",
        "Sur la punition négative (P-) et le renforcement négatif (R-)"
      ],
      correct: [0],
      explanation: "P+ : baisse du comportement par l'ajout d'un stimulus aversif. R- : augmentation par le retrait d'un stimulus aversif."
    },
    {
      id: "traditional-007",
      question: "Comment l'éducation traditionnelle fait-elle progresser le chien ?",
      answers: [
        "En le poussant à l'échec et en sanctionnant la faute, pour éviter qu'elle se reproduise",
        "En maximisant sa réussite et en évitant l'échec, pour renforcer chaque bon comportement",
        "En le laissant apprendre seul par essais-erreurs, en liberté, sans intervention du maître",
        "En l'exposant de façon prolongée aux stimuli qui lui posent problème, jusqu'à ce qu'il les accepte"
      ],
      correct: [0],
      explanation: "En éducation positive, on évite l'échec ; en éducation traditionnelle, on pousse à l'échec et on le sanctionne."
    },
    {
      id: "traditional-008",
      question: "Que dit le cours du renforcement positif en éducation traditionnelle ?",
      answers: [
        "Il y a un refus quasi systématique de la friandise",
        "La récompense en tant que telle n'est pas refusée",
        "La récompense sociale (jeu, caresses, félicitations) est utilisée de façon très marquée",
        "La friandise est la récompense principale, utilisée à chaque exercice",
        "Aucun renforcement positif n'est jamais utilisé"
      ],
      correct: [0, 1, 2],
      explanation: "On refuse toute forme de dépendance à la nourriture."
    },

    // ---------- Les outils ----------
    {
      id: "traditional-009",
      question: "Quels sont des outils de l'éducation traditionnelle cités dans le cours ?",
      answers: [
        "Les colliers semi-étrangleurs",
        "Les colliers étrangleurs",
        "Les colliers Torquatus",
        "Les colliers électriques",
        "Les harnais anti-traction",
        "Les clickers"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Outils souvent désagréables voire douloureux pour le chien."
    },
    {
      id: "traditional-010",
      question: "Quels autres outils de l'éducation traditionnelle sont cités ?",
      answers: [
        "Les journaux",
        "Les bouteilles remplies de cailloux",
        "Les badines",
        "Les martinets",
        "Les jouets à mâcher",
        "Les friandises de récompense"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Journaux, bouteilles de cailloux, badines, martinets..."
    },
    {
      id: "traditional-011",
      question: "Quels derniers outils sont cités dans le cours ?",
      answers: [
        "Les fouets",
        "La planche à clous",
        "Les longes de travail",
        "Les tapis de fouille"
      ],
      correct: [0, 1],
      explanation: "La liste se termine par les fouets et la planche à clous."
    },
    {
      id: "traditional-012",
      question: "Quels arguments trompeurs accompagnent certains colliers étrangleurs ?",
      answers: [
        "Le nommer collier « sanitaire » pour ne pas employer le terme « étrangleur »",
        "Lui attribuer une fonction naturelle créant « harmonie et confiance entre le maître et le chien »",
        "Affirmer que la maille du collier imite les canines du chien",
        "Reconnaître clairement qu'il provoque de la douleur",
        "Préciser qu'il est réservé aux chiens agressifs"
      ],
      correct: [0, 1, 2],
      explanation: "Des arguments trompeurs pour donner au collier une apparence naturelle."
    },

    // ---------- Pratique ----------
    {
      id: "traditional-013",
      question: "Que dit le cours de la pratique de l'éducation traditionnelle ?",
      answers: [
        "Pratiquée avec respect et sans violence, sans renforcement à base de nourriture, elle peut faire naître de belles complicités",
        "Certains conseils sont utiles et efficaces (cadre éducatif structurant, règles bien définies), mais fondés sur une argumentation fausse (famille-meute)",
        "Les bons éducateurs maîtrisent beaucoup plus les notions de motivation par le maître et par le jeu",
        "Elle est toujours violente et ne contient aucun conseil utile",
        "Les bons éducateurs se contentent de la friandise pour motiver leur chien"
      ],
      correct: [0, 1, 2],
      explanation: "La coercition n'est heureusement pas le seul visage de l'éducation traditionnelle."
    },
    {
      id: "traditional-014",
      question: "Quels apprentissages sont plus efficaces en méthode traditionnelle ?",
      answers: [
        "Certains apprentissages sont acquis de façon beaucoup plus rapide et efficace par l'interdit, même sans violence (ex : refus d'appât)",
        "Certaines disciplines se pratiquent de façon plus efficace en méthode traditionnelle (détection, mordant...)",
        "Aucun apprentissage n'est plus rapide par l'interdit",
        "Les disciplines de détection ne peuvent pas être pratiquées en méthode traditionnelle"
      ],
      correct: [0, 1],
      explanation: "Sans violence toujours."
    },

    // ---------- Dérives ----------
    {
      id: "traditional-015",
      question: "Qu'est-ce que l'état de détresse acquise (ou impuissance apprise) ?",
      answers: [
        "Une forme de résignation, cliniquement semblable à la dépression, après une exposition durable à des stimuli aversifs sans évitement possible",
        "Une réaction de révolte du chien face à une contrainte, qui disparaît avec la répétition des séances et l'habitude",
        "Un état d'excitation extrême provoqué par une récompense trop forte, qui empêche le chien d'apprendre correctement",
        "Un état émotionnel généralisé et durable, sans objet précis à l'origine de la crainte, qui perturbe l'attention"
      ],
      correct: [0],
      explanation: "Mis en avant par Henri Laborit et Martin Seligman."
    },
    {
      id: "traditional-016",
      question: "Que montrent les travaux de Laborit et Seligman sur la détresse acquise ?",
      answers: [
        "Un individu (animal ou humain) confronté durablement à des stimuli aversifs sans évitement possible finit dans un état semblable à la dépression",
        "Il comprend que toute action de fuite ou de rébellion est inefficace, et finit par capituler et se résigner passivement",
        "Cet état se traduit généralement par une perte de motivation et une quasi-absence d'émotions",
        "Il finit par se révolter de plus en plus violemment",
        "L'état disparaît spontanément dès que les stimuli aversifs sont arrêtés"
      ],
      correct: [0, 1, 2],
      explanation: "Essais en laboratoire sur des rats, des humains et des chiens."
    },
    {
      id: "traditional-017",
      question: "Que voient les éducateurs ou propriétaires chez un chien éduqué en méthode traditionnelle ?",
      answers: [
        "Des chiens « sages et obéissants » là où se trouvent des chiens résignés, déprimés et « cassés »",
        "C'est particulièrement représentatif chez les chevaux dressés de façon coercitive",
        "Des chiens agressifs et incontrôlables",
        "Des chiens très motivés et pleins d'enthousiasme"
      ],
      correct: [0, 1],
      explanation: "La résignation est confondue avec la sagesse."
    },

    // ---------- Avantages et inconvénients ----------
    {
      id: "traditional-018",
      question: "Quels sont des avantages de la méthode traditionnelle ?",
      answers: [
        "Peu de connaissances à maîtriser (tout est dominance/soumission)",
        "Peu de techniques à maîtriser",
        "Peu de préparation avant une séance",
        "Certains apprentissages sont très rapides",
        "Une adaptation très fine à chaque chien",
        "Une préparation minutieuse de chaque séance"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Une méthode simple, avec peu de préparation."
    },
    {
      id: "traditional-019",
      question: "Quels autres avantages la méthode traditionnelle présente-t-elle ?",
      answers: [
        "Une méthode universelle, qui demande peu d'adaptation",
        "Peu de matériel à transporter",
        "Pas de dépendance à la nourriture",
        "Une dépendance du chien à la récompense",
        "Un matériel important à transporter"
      ],
      correct: [0, 1, 2],
      explanation: "Universelle, légère, sans dépendance à la nourriture."
    },
    {
      id: "traditional-020",
      question: "Quels sont des inconvénients de la méthode traditionnelle ?",
      answers: [
        "La mise en danger du chien",
        "La mise en danger de l'Humain, en particulier des enfants et des inconnus",
        "La détérioration de la relation Homme-Chien",
        "Une dépendance à la nourriture",
        "Une préparation de séance très longue"
      ],
      correct: [0, 1, 2],
      explanation: "Danger pour le chien, pour l'Humain, et relation détériorée."
    },
    {
      id: "traditional-021",
      question: "Quels autres inconvénients la méthode traditionnelle présente-t-elle ?",
      answers: [
        "Elle masque les problèmes sans les résoudre",
        "La non-prise en compte des besoins est une maltraitance passive",
        "Le risque important de dérives est une maltraitance active",
        "Elle ne correspond plus au modèle éthique de la relation Homme-Chien",
        "Elle demande trop de connaissances à maîtriser",
        "Elle nécessite beaucoup de matériel"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Masque les problèmes, maltraitance passive et active, éthique dépassée."
    },
    {
      id: "traditional-022",
      question: "Quelles associations sont exactes pour les inconvénients de la méthode traditionnelle ?",
      answers: [
        "La non-prise en compte des besoins : maltraitance passive",
        "Le risque important de dérives : maltraitance active",
        "La non-prise en compte des besoins : maltraitance active",
        "Le risque important de dérives : maltraitance passive"
      ],
      correct: [0, 1],
      explanation: "Passive = besoins ignorés ; active = dérives."
    }
  ]
});
