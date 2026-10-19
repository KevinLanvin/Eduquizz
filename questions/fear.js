// Theme 8 — Course 8: Peur, phobie, stress & anxiété
// (question format: see questions/origins.js)
//
// Sources: the course summary and the Lexique only. No very precise dates
// (years of the studies and authors are left out), no journal references.
// Not covered: the "signals" pages (fear, phobia, stress, anxiety): they are not in the course photos.
//
// A notion that appears in several courses is asked only once, in the oldest theme.
// Not asked here on purpose:
//   - the definition of the habituation          -> cognition-006 (only the "habituation in frequency /
//                                                    immersion in duration" note is asked here)
//   - the "fear" trait and the fear threshold    -> temperament-006 / temperament-026
(window.THEMES = window.THEMES || []).push({
  id: "fear",
  title: "Peur, phobie, stress et anxiété",
  shortTitle: "Peur et anxiété",
  questions: [
    // ---------- L'émotion et la peur ----------
    {
      id: "fear-001",
      question: "Qu'est-ce qu'une émotion ?",
      answers: [
        "Une réaction affective (ressenti, état interne), intense et fugace, en réponse à un événement",
        "Un état affectif permanent, indépendant des événements que traverse l'individu",
        "Une réponse purement physiologique, sans aucune composante subjective ou comportementale",
        "Un comportement appris par association entre un stimulus neutre et un stimulus inconditionné"
      ],
      correct: [0],
      explanation: "Une émotion est une réaction affective, intense et fugace, en réponse à un événement : ce n'est pas un état permanent."
    },
    {
      id: "fear-002",
      question: "Quelles sont les trois composantes déclenchées par un événement émotionnel ?",
      answers: [
        "L'expérience subjective (cerveau)",
        "La réaction comportementale",
        "L'activation physiologique",
        "La mémorisation à long terme de l'événement",
        "L'apprentissage social auprès des congénères"
      ],
      correct: [0, 1, 2],
      explanation: "Un événement déclenche trois composantes : une expérience subjective (cerveau), une réaction comportementale et une activation physiologique."
    },
    {
      id: "fear-003",
      question: "Qu'est-ce que la peur ?",
      answers: [
        "Une émotion ressentie en présence ou dans la perspective d'un danger ou d'une menace, faisant partie des émotions négatives",
        "Un état émotionnel généralisé et durable, sans objet précis à l'origine de la crainte, qui traduit de l'appréhension",
        "Un état réactionnel de l'organisme face à une agression, c'est-à-dire un stimulus perçu comme tel par l'individu",
        "Une peur disproportionnée et inadaptée, qui ne s'atténue pas malgré les expositions répétées ou espacées"
      ],
      correct: [0],
      explanation: "La peur est une émotion négative, ressentie en présence ou dans la perspective d'un danger ou d'une menace. L'état généralisé et durable, c'est l'anxiété ; la peur disproportionnée, la phobie."
    },
    {
      id: "fear-004",
      question: "Parmi ces affirmations sur le modèle de la réponse de peur, lesquelles sont vraies ?",
      answers: [
        "La réponse de peur est une réponse adaptative qui permet la survie : elle est normale",
        "La cognition (attention, mémoire, contexte) intervient avec l'émotion dans la réponse",
        "La réponse comprend une partie comportementale et une partie physiologique",
        "La cognition est inhibée par l'activation massive des circuits émotionnels de survie",
        "La réponse de peur est toujours anormale"
      ],
      correct: [0, 1, 2],
      explanation: "Situation → modification de l'organisme → émotion + cognition → réponse de peur (comportementale et physiologique), adaptative et normale. L'inhibition de la cognition caractérise la phobie."
    },
    {
      id: "fear-005",
      question: "Quelles associations sont exactes pour les facteurs à l'origine de la peur ?",
      answers: [
        "Facteurs intrinsèques : internes, propres à l'individu",
        "Facteurs extrinsèques : externes, environnementaux",
        "Facteurs biotiques : les vivants",
        "Facteurs abiotiques : milieux riches ou pauvres (en bruit), cohérence du milieu",
        "Facteurs biotiques : les milieux riches ou pauvres en bruit",
        "Facteurs intrinsèques : les facteurs environnementaux"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Intrinsèques = internes ; extrinsèques = environnementaux. Les facteurs extrinsèques se divisent en facteurs biotiques (les vivants) et abiotiques (le milieu : bruit, cohérence)."
    },

    // ---------- Facteurs intrinsèques ----------
    {
      id: "fear-006",
      question: "Parmi ces affirmations sur la génétique de la peur, lesquelles sont vraies ?",
      answers: [
        "Les chiens de berger présentent statistiquement plus de réactions de peur que la moyenne de l'espèce",
        "Il n'y a pas un seul gène codant la peur, mais plusieurs gènes impliqués",
        "Certaines races ont de fortes propensions phobiques : bergers blancs suisses, chiens-loups, et certaines races dites primitives",
        "Un seul gène code la peur chez le chien",
        "Toutes les races ont la même propension aux comportements phobiques"
      ],
      correct: [0, 1, 2],
      explanation: "La peur est un caractère polygénique ; les bergers, les bergers blancs suisses, les chiens-loups et certaines races primitives sont plus concernés."
    },
    {
      id: "fear-007",
      question: "Que montre l'étude de Dykman sur deux lignées de pointers ?",
      answers: [
        "Elle compare une lignée non phobique de l'Homme (stable) à une lignée phobique (instable) obtenue par sélection génétique et consanguinité",
        "La lignée phobique était de plus en plus représentée par cette caractéristique comportementale",
        "Les phobies y étaient de plus en plus nombreuses, plus uniquement associées à l'Homme",
        "Les deux lignées présentaient les mêmes comportements phobiques à chaque génération",
        "La phobie ne se transmettait pas d'une génération à l'autre"
      ],
      correct: [0, 1, 2],
      explanation: "En sélectionnant et en croisant des individus apparentés, la lignée phobique a vu ce caractère s'accentuer et s'étendre à d'autres stimuli : l'héritabilité du caractère phobique."
    },
    {
      id: "fear-008",
      question: "Parmi ces affirmations sur le développement et la peur, lesquelles sont vraies ?",
      answers: [
        "Deux facteurs d'influence : les mauvaises expériences et l'absence d'expériences",
        "La période de développement est particulièrement sensible de 3 semaines à 3 mois",
        "Une myélinisation croissante diminue les capacités d'habituation spontanée",
        "Seules les mauvaises expériences ont une influence sur la peur",
        "La période la plus sensible commence après la première année"
      ],
      correct: [0, 1, 2],
      explanation: "Mauvaises expériences et absence d'expériences jouent, surtout entre 3 semaines et 3 mois ; la myélinisation croissante réduit l'habituation spontanée."
    },
    {
      id: "fear-009",
      question: "Qu'est-ce que la myélinisation ?",
      answers: [
        "La formation d'une gaine de myéline autour des fibres nerveuses, qui stabilise la configuration du cerveau et réduit l'adaptabilité",
        "La prolifération de cellules qui conduit à la formation de presque tous les neurones d'un individu pendant son développement",
        "Le façonnement définitif du cerveau pendant la période juvénile, au contact de l'environnement dans lequel vit l'individu",
        "La régulation et le contrôle des réactions physiologiques de l'organisme face à une perturbation de son milieu intérieur"
      ],
      correct: [0],
      explanation: "La myélinisation forme une gaine de myéline autour des fibres nerveuses : la configuration du cerveau se stabilise, ce qui diminue l'adaptabilité."
    },
    {
      id: "fear-010",
      question: "Quels troubles peuvent influencer les comportements de peur ?",
      answers: [
        "Des troubles de l'apprentissage (pathologie médicale)",
        "Une malformation cérébrale, comme l'hydrocéphalie",
        "Des troubles neurologiques, comme l'épilepsie",
        "Des dérèglements hormonaux, comme l'hypothyroïdie",
        "Un excès de sommeil",
        "Un manque d'exercice physique"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Les troubles organiques (apprentissage, malformation), neurologiques (épilepsie, influence très significative) et hormonaux (hypothyroïdie) peuvent renforcer la peur."
    },
    {
      id: "fear-011",
      question: "Parmi ces affirmations sur les hormones sexuelles et la peur, lesquelles sont vraies ?",
      answers: [
        "Les hormones sexuelles peuvent influencer les comportements de peur",
        "Les chiens stérilisés (absence de testostérone) ont davantage de comportements de peur",
        "La stérilisation d'un chien anxieux tend à renforcer ses comportements de peur",
        "La stérilisation d'un chien anxieux diminue généralement ses comportements de peur",
        "Les chiens stérilisés ont moins de comportements de peur que les chiens entiers"
      ],
      correct: [0, 1, 2],
      explanation: "L'absence de testostérone est associée à davantage de peur : la stérilisation d'un chien anxieux a généralement tendance à renforcer les comportements de peur."
    },
    {
      id: "fear-012",
      question: "Parmi ces affirmations sur l'âge et les phobies, lesquelles sont vraies ?",
      answers: [
        "On constate généralement une intensification des phobies avec l'âge",
        "Des phobies apparaissent de façon récurrente chez les chiens âgés, ce qui doit faire penser aux soucis de dégénérescence",
        "Les phobies disparaissent généralement avec l'âge",
        "Les chiens âgés ne développent jamais de nouvelles phobies"
      ],
      correct: [0, 1],
      explanation: "Les phobies s'intensifient avec l'âge (moins bonnes capacités de fuite, de défense ?) et apparaissent chez les chiens âgés : attention aux problèmes de dégénérescence."
    },

    // ---------- Facteurs extrinsèques ----------
    {
      id: "fear-013",
      question: "Quels sont des facteurs biotiques (les vivants) de la peur ?",
      answers: [
        "La présence d'autres chiens (apprentissages sociaux, facilitation sociale...)",
        "Les chiens vivant en groupe présentent moins de phobie aux bruits que la moyenne",
        "Les chiens vivant en groupe présentent plus de phobie aux bruits que la moyenne",
        "La présence d'autres chiens n'a aucune influence sur la peur"
      ],
      correct: [0, 1],
      explanation: "Facteurs biotiques = les vivants : la présence d'autres chiens joue, et les chiens vivant en groupe ont moins de phobie aux bruits que la moyenne."
    },
    {
      id: "fear-014",
      question: "Quels sont des facteurs abiotiques de la peur ?",
      answers: [
        "Les milieux riches ou pauvres (en bruit)",
        "La cohérence du milieu de développement avec le milieu de vie futur",
        "La présence d'autres chiens",
        "Les apprentissages sociaux auprès des congénères"
      ],
      correct: [0, 1],
      explanation: "Facteurs abiotiques = le milieu : richesse ou pauvreté en bruit, cohérence entre milieu de développement et milieu de vie futur."
    },

    // ---------- La phobie ----------
    {
      id: "fear-015",
      question: "Qu'est-ce qu'une phobie ?",
      answers: [
        "Une peur disproportionnée et inadaptée face à un stimulus perçu comme dangereux, qui ne s'atténue pas malgré les expositions répétées",
        "Une émotion intense et fugace, déclenchée par un événement précis, qui s'estompe ensuite avec le temps qui passe",
        "Un état émotionnel généralisé et durable, qui s'exprime en l'absence de tout objet précis à l'origine de la crainte",
        "Un état réactionnel de l'organisme face à une agression, qui se déroule en trois phases successives et distinctes"
      ],
      correct: [0],
      explanation: "La phobie est une peur disproportionnée et inadaptée. L'intensification et la généralisation de la réponse phobique sont fréquemment observées."
    },
    {
      id: "fear-016",
      question: "Quelles caractéristiques a la réponse phobique ?",
      answers: [
        "Une réponse forte, non graduée et extrême",
        "Elle se manifeste par de l'évitement, de la fuite, de l'anxiété associant une réaction du système sympathique",
        "L'intensification et la généralisation de la réponse sont fréquemment observées",
        "Une réponse graduée, proportionnée au danger réel",
        "Elle s'atténue progressivement avec des expositions répétées"
      ],
      correct: [0, 1, 2],
      explanation: "Réponse forte, non graduée, extrême : évitement, fuite, anxiété avec réaction sympathique. L'effet déclenchant ne s'affaiblit pas avec les expositions."
    },
    {
      id: "fear-017",
      question: "Parmi ces affirmations sur le modèle de la réponse phobique, lesquelles sont vraies ?",
      answers: [
        "La cognition (attention, mémoire, contexte) est inaccessible et inhibée par l'activation massive des circuits émotionnels de survie",
        "La réponse n'est plus une réponse adaptative qui permet la survie : elle est anormale",
        "Les composantes expressives motrices (ou freezing) et physiologiques sont très marquées",
        "La cognition reste pleinement accessible pendant la réponse",
        "La réponse phobique permet la survie de l'animal"
      ],
      correct: [0, 1, 2],
      explanation: "Dans la phobie, l'activation massive des circuits de survie court-circuite l'attention, la mémoire et la contextualisation : la réponse n'est plus adaptative."
    },
    {
      id: "fear-018",
      question: "Qu'est-ce que le système sympathique, impliqué dans la réponse phobique ?",
      answers: [
        "Le système nerveux autonome, qui gère les organes viscéraux et les fonctions automatiques (respiration, battements du cœur)",
        "Le système nerveux central, qui gère les apprentissages, la mémoire à long terme et la prise de décision de l'individu",
        "Le système hormonal, qui régule la reproduction, les comportements sexuels et les rythmes saisonniers de l'organisme",
        "Le système immunitaire, qui protège l'organisme contre les maladies infectieuses et les agressions des agents pathogènes"
      ],
      correct: [0],
      explanation: "Le système sympathique est un système nerveux autonome qui gère les organes viscéraux et les fonctions automatiques comme la respiration ou le battement du cœur."
    },
    {
      id: "fear-019",
      question: "Quelles associations sont exactes pour les phobies couramment observées ?",
      answers: [
        "Phobie aux bruits : orages, feux d'artifice, coups de feu, pétards...",
        "Phobie intraspécifique : phobie des congénères",
        "Phobie interspécifique : phobie de l'Homme ou de certains types d'humains",
        "Phobie intraspécifique : phobie de l'Homme",
        "Phobie interspécifique : phobie des congénères"
      ],
      correct: [0, 1, 2],
      explanation: "Intraspécifique = entre individus de la même espèce (congénères) ; interspécifique = entre espèces (l'Homme). D'autres phobies courantes : voitures, bus, camions, eau."
    },
    {
      id: "fear-020",
      question: "Quelles sont les origines habituelles des phobies intraspécifique et interspécifique ?",
      answers: [
        "La phobie des congénères est généralement déclenchée par un ou plusieurs événements traumatisants en période sensible (3 semaines à 3 mois)",
        "La phobie de l'Homme vient généralement d'un manque d'exposition en période sensible, voire d'événements traumatisants",
        "La phobie des congénères peut apparaître au vieillissement du chien (baisse de la tolérance ?)",
        "La phobie de l'Homme est toujours d'origine héréditaire",
        "La phobie des congénères n'apparaît jamais chez un chien âgé"
      ],
      correct: [0, 1, 2],
      explanation: "Les phobies intra et interspécifiques naissent surtout en période sensible : événements traumatisants pour les congénères, manque d'exposition (ou traumatisme) pour l'Homme."
    },
    {
      id: "fear-021",
      question: "Quelle proportion des chiens aux États-Unis est concernée par la phobie des orages ?",
      answers: [
        "Plus de la moitié des chiens (52 %)",
        "Environ un chien sur vingt (5 %)",
        "Environ un chien sur cinq (20 %)",
        "Environ neuf chiens sur dix (90 %)"
      ],
      correct: [0],
      explanation: "Phobie aux bruits : les orages concernent 52 % des chiens aux États-Unis (puis feux d'artifice, coups de feu, pétards...)."
    },

    // ---------- Le stress ----------
    {
      id: "fear-022",
      question: "Qu'est-ce que le stress ?",
      answers: [
        "Un état réactionnel de l'organisme face à une « agression », un stimulus perçu comme tel : une réponse physiologique adaptative",
        "Une émotion intense et fugace en présence d'un danger immédiat, qui disparaît avec lui dès que la menace s'éloigne",
        "Un état émotionnel généralisé et durable, sans objet précis à l'origine de la crainte ressentie par l'individu",
        "Une peur disproportionnée et inadaptée, dont l'effet ne s'affaiblit pas malgré les expositions répétées ou espacées"
      ],
      correct: [0],
      explanation: "Le stress est un état réactionnel de l'organisme face à une agression, une réponse physiologique adaptative face à une situation."
    },
    {
      id: "fear-023",
      question: "Qu'est-ce que l'homéostasie ?",
      answers: [
        "Le processus de régulation et de contrôle des réactions physiologiques",
        "La stabilisation de la configuration du cerveau pendant le développement",
        "La réaction de l'organisme face à une agression extérieure",
        "L'état émotionnel généralisé et durable de l'animal"
      ],
      correct: [0],
      explanation: "L'homéostasie est le processus de régulation et de contrôle des réactions physiologiques (voir le lexique). Le concept est lié à Hans Selye."
    },
    {
      id: "fear-024",
      question: "Quelles associations sont exactes pour les phases du syndrome général d'adaptation ?",
      answers: [
        "Alarme : mise en alerte de l'organisme, activation des systèmes nerveux et endocrinien",
        "Résistance : réaction de combat, de fuite ou d'impuissance, dépense et récupération des réserves d'énergie",
        "Épuisement : incapacité de récupérer et de s'adapter, apparition de maladies, effondrement de l'organisme",
        "Alarme : effondrement de l'organisme",
        "Épuisement : mise en alerte de l'organisme"
      ],
      correct: [0, 1, 2],
      explanation: "Syndrome général d'adaptation : alarme, résistance, épuisement."
    },
    {
      id: "fear-025",
      question: "Sur la courbe du syndrome général d'adaptation, quelles phases correspondent à la détresse ?",
      answers: [
        "La phase de résistance",
        "La phase d'épuisement",
        "La phase d'alarme",
        "La phase d'immersion"
      ],
      correct: [0, 1],
      explanation: "La détresse correspond aux phases de résistance puis d'épuisement."
    },
    {
      id: "fear-026",
      question: "Parmi ces affirmations sur l'habituation et l'immersion, lesquelles sont vraies ?",
      answers: [
        "L'habituation se fait en fréquence et l'immersion en durée",
        "En immersion, le stresseur est objectif : son acceptation ne le fait pas disparaître",
        "Il faut toujours parler d'immersion contrôlée (d'intensité modérée et contrôlée)",
        "L'habituation se fait en durée et l'immersion en fréquence",
        "Une immersion peut être menée à intensité maximale pour aller plus vite"
      ],
      correct: [0, 1, 2],
      explanation: "Habituation en fréquence ; immersion en durée. Toujours parler d'immersion contrôlée : intensité modérée et contrôlée."
    },
    {
      id: "fear-027",
      question: "Quel est un exemple d'immersion ?",
      answers: [
        "Un chiot séparé de sa famille lors de l'adoption",
        "Un chien qui entend un orage de temps en temps",
        "Un chien qui croise un congénère une fois par jour",
        "Un chien exposé cinq minutes à un bruit, puis récompensé"
      ],
      correct: [0],
      explanation: "Un chiot séparé de sa famille lors de l'adoption est déjà en immersion : le stresseur est objectif et dure."
    },

    // ---------- L'anxiété ----------
    {
      id: "fear-028",
      question: "Qu'est-ce que l'anxiété ?",
      answers: [
        "Un état émotionnel généralisé et durable : une crainte diffuse, sans objet, traduisant de l'appréhension et de la détresse",
        "Une émotion intense et fugace, déclenchée par un événement précis et qui disparaît ensuite",
        "Un état réactionnel de l'organisme face à une agression, en trois phases successives",
        "Une peur disproportionnée face à un stimulus précis, avec une réponse forte et non graduée"
      ],
      correct: [0],
      explanation: "L'anxiété est un état émotionnel généralisé et durable : émotion vague et déplaisante, crainte diffuse et sans objet."
    },
    {
      id: "fear-029",
      question: "Quelles propositions caractérisent l'anxiété ?",
      answers: [
        "C'est ressentir du stress de façon durable, sans l'objet à l'origine du stress",
        "On l'appelle aussi la « peur anticipée »",
        "C'est une réaction brève et intense face à un danger précis",
        "C'est une émotion fugace liée à un événement"
      ],
      correct: [0, 1],
      explanation: "L'anxiété est une « peur anticipée » : ressentir du stress de façon durable et sans objet. Une réaction brève et intense face à un danger précis est une peur."
    },
    {
      id: "fear-030",
      question: "Comment décrit-on les degrés d'anxiété ?",
      answers: [
        "Un degré bas ou normal : un état normal qui permet de répondre aux situations de stress",
        "Un état plus élevé : des réponses inadaptées et une perte de contrôle",
        "L'anxiété est toujours pathologique, quel que soit son degré",
        "Un degré élevé d'anxiété n'a aucune influence sur la capacité à répondre"
      ],
      correct: [0, 1],
      explanation: "Il y a une variation dans le degré d'anxiété : bas ou normal (vigilance adaptative) ou plus élevé (réponses inadaptées et perte de contrôle)."
    },
    {
      id: "fear-031",
      question: "Parmi ces affirmations sur le modèle de la réponse anxieuse, lesquelles sont vraies ?",
      answers: [
        "Il part d'une attente redoutée",
        "Si la cognition est excessive, elle perturbe l'attention et la concentration",
        "C'est une vigilance adaptative qui permet la survie : normale jusqu'à un certain seuil",
        "Il part d'un stimulus précis et réel, toujours présent",
        "La cognition est inhibée par l'activation des circuits de survie"
      ],
      correct: [0, 1, 2],
      explanation: "Attente redoutée → modification de l'organisme → émotion + cognition → réponse anxieuse : vigilance adaptative normale jusqu'à un certain seuil."
    },

    // ---------- Conclusion ----------
    {
      id: "fear-032",
      question: "Quelles associations sont exactes pour dissocier peur, phobie, stress et anxiété ?",
      answers: [
        "La peur : une émotion instantanée",
        "La phobie : une peur profonde et disproportionnée, avec une réponse forte et non graduée et une perte totale de contrôle",
        "Le stress : un état réactionnel de l'organisme",
        "L'anxiété : un état émotionnel généralisé et durable",
        "Le stress : une émotion instantanée",
        "L'anxiété : une réponse forte et non graduée avec perte totale de contrôle"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Peur = émotion instantanée ; phobie = peur profonde et disproportionnée ; stress = état réactionnel de l'organisme ; anxiété = état émotionnel généralisé et durable."
    },
    {
      id: "fear-033",
      question: "Pourquoi connaître les différentes réactions du chien est-il essentiel ?",
      answers: [
        "Pour intervenir de façon juste et proportionnée, avec les outils éducatifs voire médicaux strictement nécessaires",
        "Pour éviter tout contact du chien avec des situations nouvelles pendant sa vie entière",
        "Pour pouvoir soigner seul le chien, sans faire appel à un vétérinaire quelle que soit la situation",
        "Pour éliminer définitivement toute émotion négative chez le chien au bout de quelques séances"
      ],
      correct: [0],
      explanation: "Distinguer peur, phobie, stress et anxiété permet d'intervenir de façon juste et proportionnée. Le traitement fera l'objet de cours et de protocoles dédiés."
    }
  ]
});
