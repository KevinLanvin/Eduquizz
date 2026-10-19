// Theme 10 — Course 10: Développement comportemental du chien
// (question format: see questions/origins.js)
//
// Sources: the course summary and the Lexique only (the "Développement comportemental" mindmap is ignored).
// No very precise dates (years of the studies and authors are left out), no journal references.
//
// A notion that appears in several courses is asked only once, in the oldest theme.
// Not asked here on purpose:
//   - "early familiarisation to another species blocks predation"  -> aggression-054
//   - the sterilisation of a male in the pubertal period            -> aggression-021
//   - the definition of the myelination                             -> fear-009 ; of the homeostasis -> fear-023
//   - the very first sense: touch in the foetus (also in the communication course) is asked here only
//
// Long lists are split in several questions (see CLAUDE.md).
// aggression-005 (user request) uses "phase consommatoire" as a wrong answer: it is a real phase of a
// behavioural sequence (asked here), but not of the aggression sequence.

(window.THEMES = window.THEMES || []).push({
  id: "development",
  title: "Développement comportemental du chien",
  shortTitle: "Développement",
  questions: [
    // ---------- La période prénatale ----------
    {
      id: "development-001",
      question: "Quelle est la durée de la période prénatale du chiot ?",
      answers: [
        "63 jours (plus ou moins 1 jour)",
        "45 jours (plus ou moins 3 jours)",
        "90 jours (plus ou moins 5 jours)",
        "30 jours (plus ou moins 1 jour)"
      ],
      correct: [0],
      explanation: "La période prénatale, la vie in utero du chiot, dure 63 jours (± 1 j)."
    },
    {
      id: "development-002",
      question: "Qu'est-ce que la neurogenèse ?",
      answers: [
        "Le processus de prolifération cellulaire qui donne naissance à tous les neurones de l'animal",
        "La formation d'une gaine de myéline autour des fibres nerveuses pendant le développement",
        "Le façonnement définitif du cerveau qui établit des cartes cognitives individuelles",
        "La destruction des cellules nerveuses inactives par des enzymes sécrétées par le cerveau"
      ],
      correct: [0],
      explanation: "La neurogenèse est le processus de prolifération cellulaire qui conduit à la formation de presque tous les neurones de l'animal."
    },
    {
      id: "development-003",
      question: "Parmi ces affirmations sur le développement cellulaire pendant la période prénatale, lesquelles sont vraies ?",
      answers: [
        "Le développement se fait sous l'influence du patrimoine génétique de la mère et du père",
        "La neurogenèse donne naissance à tous les neurones de l'animal",
        "Le réseau neuronal construit est extrêmement dense, complexe et peu organisé",
        "Le réseau neuronal est déjà très organisé et peu dense à la naissance",
        "Seul le patrimoine génétique de la mère influence le développement"
      ],
      correct: [0, 1, 2],
      explanation: "Embryon puis fœtus se développent sous l'influence du patrimoine génétique des deux parents ; le réseau neuronal est dense, complexe et peu organisé."
    },
    {
      id: "development-004",
      question: "Quels échanges ont lieu entre la mère et le chiot avant la naissance, à travers le placenta ?",
      answers: [
        "Des échanges alimentaires (nutrition du fœtus), pouvant être à l'origine de préférences alimentaires",
        "La transmission de molécules, notamment d'hormones de stress (catécholamines et glucocorticoïdes)",
        "Les hormones de stress transmises influencent l'organisation et le fonctionnement des structures cérébrales",
        "Aucun échange : le fœtus est totalement isolé de la mère jusqu'à la naissance",
        "Uniquement des hormones sexuelles, sans influence sur le cerveau"
      ],
      correct: [0, 1, 2],
      explanation: "De nombreux échanges chimiques ont lieu : nutrition et hormones de stress (catécholamines, glucocorticoïdes) qui influencent le cerveau."
    },
    {
      id: "development-005",
      question: "Parmi ces affirmations sur la sensibilité tactile du fœtus, lesquelles sont vraies ?",
      answers: [
        "Le fœtus de 40 à 45 jours réagit aux stimulations tactiles de l'abdomen de la mère par un mouvement de retrait",
        "Il réagit aux stimulations positives (léchage, caresses) par habituation",
        "Il réagit aux mouvements intestinaux et aux contractions utérines générées par le stress",
        "Le fœtus ne réagit à aucune stimulation avant la naissance",
        "Le fœtus ne réagit qu'aux sons venant de l'extérieur"
      ],
      correct: [0, 1, 2],
      explanation: "À 40-45 jours, le fœtus réagit au toucher (mouvement de retrait, visible à l'échographie) : le tactile est le premier sens."
    },
    {
      id: "development-006",
      question: "Quels sont les effets du stress de la mère pendant la gestation ?",
      answers: [
        "Le stress agit via les mouvements de stress (contractions utérines et agitation) et via les hormones de stress",
        "Il perturbe le développement fœtal",
        "Il augmente l'anxiété et l'émotivité et réduit les comportements sociaux",
        "Il n'a aucun effet sur le chiot avant la naissance",
        "Il augmente les comportements sociaux et réduit l'émotivité"
      ],
      correct: [0, 1, 2],
      explanation: "Schéma de synthèse : stress (+ génétique) → mouvements et hormones de stress → perturbation du développement fœtal → plus d'anxiété et d'émotivité, moins de comportements sociaux."
    },

    // ---------- La période néonatale ----------
    {
      id: "development-007",
      question: "Quelle est la durée de la période néonatale ?",
      answers: [
        "De la naissance à 10-15 jours, jusqu'à l'ouverture des yeux",
        "De la naissance à 3 semaines, jusqu'à l'apparition des premiers pas",
        "De la naissance à 3 jours, jusqu'à la première tétée",
        "De 3 à 12 semaines, jusqu'à la fin de la socialisation primaire"
      ],
      correct: [0],
      explanation: "La période néonatale s'étale de la naissance aux 10-15 jours du chiot, jusqu'à l'ouverture des yeux."
    },
    {
      id: "development-008",
      question: "Quelles caractéristiques a le chiot nouveau-né ?",
      answers: [
        "La vue, l'audition et l'homéothermie (gestion de la température) ne sont pas fonctionnelles",
        "Il n'est sensible qu'au tactile (recherche de la chaleur de la mère) et au goût (alimentation)",
        "Il présente une immaturité sensorielle et motrice",
        "Il voit et entend dès la naissance",
        "Il est surtout sensible à l'odorat et à l'ouïe"
      ],
      correct: [0, 1, 2],
      explanation: "Période néonatale : immaturité sensorielle et motrice ; seuls le tactile et le goût fonctionnent."
    },
    {
      id: "development-009",
      question: "Parmi ces affirmations sur les échanges du chiot nouveau-né, lesquelles sont vraies ?",
      answers: [
        "Il ne se déplace que pour trouver de la chaleur et se nourrir",
        "Il ne communique que par des gémissements lorsqu'il se perd et lorsque sa mère le lèche",
        "Il dort 90 % du temps",
        "Il explore activement son environnement dès les premiers jours",
        "Il dort environ la moitié du temps"
      ],
      correct: [0, 1, 2],
      explanation: "Les échanges sont limités : déplacements pour la chaleur et le lait, gémissements, 90 % de sommeil."
    },

    // ---------- La période d'imprégnation (socialisation primaire) ----------
    {
      id: "development-010",
      question: "Quelle est la durée de la période d'imprégnation, aussi appelée socialisation primaire ?",
      answers: [
        "De 3 à 12 semaines (voire 16), à partir de l'éveil des sens",
        "De la naissance à 3 semaines, jusqu'à l'ouverture des yeux",
        "De 4 à 8 mois, entre l'imprégnation et la puberté",
        "De 12 à 18 mois, pendant toute la puberté"
      ],
      correct: [0],
      explanation: "La période d'imprégnation (socialisation primaire) s'étend de 3 à 12 (voire 16) semaines."
    },
    {
      id: "development-011",
      question: "Comment les sens du chiot se développent-ils au début de la période d'imprégnation ?",
      answers: [
        "À partir de 10 à 15 jours, le chiot voit",
        "Son conduit auditif s'ouvre vers 14-15 jours",
        "Les membres inférieurs et postérieurs deviennent fonctionnels à partir de la deuxième semaine",
        "À partir de 20 à 25 jours, il est capable de s'orienter visuellement",
        "Il s'oriente visuellement dès les premiers jours de vie",
        "Son conduit auditif ne s'ouvre qu'à partir de 6 semaines"
      ],
      correct: [0, 1, 2, 3],
      explanation: "C'est l'explosion des sens : le chiot voit, sent, entend, s'oriente et explore : il va s'imprégner de son environnement."
    },
    {
      id: "development-012",
      question: "Qu'est-ce que l'imprégnation ?",
      answers: [
        "Une période de 3 à 12 semaines qui favorise grandement les apprentissages : un phénomène instinctif d'interaction avec le milieu, limité dans le temps",
        "Un apprentissage par conditionnement, qui peut se faire à tout âge avec des récompenses",
        "Un apprentissage uniquement social, qui ne dépend pas de l'environnement du chiot",
        "Un comportement acquis après la puberté, sous l'influence des hormones sexuelles"
      ],
      correct: [0],
      explanation: "L'imprégnation est un phénomène instinctif d'interaction avec le milieu, limité dans le temps (3 à 12 semaines chez le chiot) et qui favorise grandement les apprentissages."
    },
    {
      id: "development-013",
      question: "Comment le Dr Dehasse décrit-il l'imprégnation du chiot ?",
      answers: [
        "Un façonnement définitif du cerveau, avec une architecture cérébrale individuelle et des cartes cognitives dans les neurones",
        "Une période pendant laquelle le cerveau perd progressivement toute sa capacité d'apprentissage et de mémorisation",
        "Un simple apprentissage de comportements par renforcement, qui peut être défait plus tard par l'éducation",
        "Une phase pendant laquelle seuls les gènes déterminent le comportement, sans aucun effet de l'environnement du chiot"
      ],
      correct: [0],
      explanation: "Le cerveau est façonné définitivement : architecture cérébrale individuelle et cartes cognitives."
    },
    {
      id: "development-014",
      question: "Parmi ces affirmations sur les espèces nidicoles et nidifuges, lesquelles sont vraies ?",
      answers: [
        "Les espèces nidicoles dépendent entièrement de leur mère à la naissance",
        "Chez elles, la phase d'imprégnation dure plus longtemps",
        "Les espèces nidifuges savent tout de suite marcher",
        "Les espèces nidifuges dépendent entièrement de leur mère à la naissance",
        "La phase d'imprégnation est plus longue chez les espèces nidifuges"
      ],
      correct: [0, 1, 2],
      explanation: "Nidicoles = dépendantes de la mère (chaleur, nourriture, protection) : imprégnation plus longue que chez les nidifuges."
    },
    {
      id: "development-015",
      question: "Qu'est-ce qui est inné et qu'est-ce qui est acquis dans l'imprégnation ?",
      answers: [
        "Le processus, ses caractéristiques et sa durée sont innés, mais les informations enregistrées sont acquises",
        "Le processus est acquis par l'éducation, mais les informations enregistrées sont innées et transmises par la mère",
        "Tout est inné : le processus comme les informations enregistrées sont déterminés par le patrimoine génétique",
        "Tout est acquis : le processus comme sa durée dépendent entièrement de l'éducation et de l'environnement"
      ],
      correct: [0],
      explanation: "Le processus est inné ; les informations qu'il enregistre sont acquises."
    },
    {
      id: "development-016",
      question: "Parmi ces affirmations sur le cerveau du chiot pendant l'imprégnation, lesquelles sont vraies ?",
      answers: [
        "Il possède déjà la quasi-totalité de ses cellules à la naissance",
        "Il ne pèse alors que 20 % du poids qu'il atteindra à l'âge adulte",
        "La différence de poids avec l'âge adulte s'explique par la mise en place des connexions entre chaque cellule",
        "Il ne possède que 20 % de ses cellules à la naissance",
        "La différence de poids avec l'âge adulte s'explique par la prolifération de nouveaux neurones"
      ],
      correct: [0, 1, 2],
      explanation: "La période d'imprégnation est cruciale : le cerveau est en pleine croissance et organisation, avec des connexions qui se mettent en place."
    },
    {
      id: "development-017",
      question: "Qu'est-ce qu'une synapse ?",
      answers: [
        "Un pont chimique qui assure la connexion entre les prolongements des cellules nerveuses (dendrites ou axones)",
        "Une gaine de myéline qui entoure l'axone et accélère la circulation du message nerveux le long de la fibre",
        "Le corps de la cellule nerveuse, qui contient son noyau et assure la production des substances de la cellule",
        "Une enzyme sécrétée par le cerveau, qui détruit les cellules nerveuses et les connexions devenues inactives"
      ],
      correct: [0],
      explanation: "Chaque cellule nerveuse envoie des prolongements dont la connexion aux autres cellules est assurée par la synapse."
    },
    {
      id: "development-018",
      question: "Comment le chien structure-t-il son cerveau pendant l'imprégnation ?",
      answers: [
        "Son cerveau sécrète des « enzymes suicidaires » qui détruisent les cellules nerveuses et connexions synaptiques inactives",
        "Il y a un double mécanisme de construction et de destruction de réseaux neuronaux",
        "L'élimination des cellules inactives dépend de l'activation des cellules nerveuses par une stimulation externe, par un sens",
        "La génétique donne un potentiel (inné), que l'environnement exploite et affine (acquis)",
        "Toutes les cellules nerveuses et connexions sont conservées, même inactives",
        "La structure du cerveau est entièrement fixée par la génétique"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Les connexions utilisées sont renforcées, les inactives détruites : l'environnement affine le potentiel génétique."
    },
    {
      id: "development-019",
      question: "Que montre l'expérience de Wiesel et Hubel sur des chatons ?",
      answers: [
        "Les paupières d'un œil sont suturées à la naissance, puis les sutures sont enlevées à 3 mois",
        "L'œil suturé est devenu aveugle : l'organe est fonctionnel mais le cortex visuel est inefficace",
        "Chez des chats adultes, l'effet n'existe pas : il ne se produit que sur la période critique d'imprégnation",
        "L'œil suturé a retrouvé une vision normale à l'ouverture",
        "Chez les chats adultes, la suture produit le même effet que chez les chatons"
      ],
      correct: [0, 1, 2],
      explanation: "Si la structure n'a pas été construite pendant la période critique, la fonction ne se développe pas."
    },
    {
      id: "development-020",
      question: "Parmi ces affirmations sur les conséquences d'un défaut d'imprégnation chez le chiot, lesquelles sont vraies ?",
      answers: [
        "La phase d'imprégnation construit les structures neuronales qui permettront d'appréhender ou non un stimulus, un environnement, une situation",
        "Si la structure n'a pas été construite pendant cette période, l'adaptation est extrêmement compliquée et parfois impossible",
        "L'adaptation reste toujours facile à n'importe quel âge",
        "Les structures neuronales se construisent uniquement après la puberté"
      ],
      correct: [0, 1],
      explanation: "Ce qui n'est pas construit pendant l'imprégnation est très difficile voire impossible à rattraper."
    },
    {
      id: "development-021",
      question: "Lesquelles de ces propositions correspondent à un exemple de développement pauvre pendant l'imprégnation ?",
      answers: [
        "Un chiot qui grandit dans une pièce sombre, sans sortir",
        "Un chiot qui grandit sans stimuli sonores ménagers ou urbains",
        "Un chiot qui grandit seul, élevé au biberon",
        "Un chiot qui grandit en famille avec des enfants et de nombreux visiteurs",
        "Un chiot qui sort chaque jour en ville dès l'âge de 5 semaines"
      ],
      correct: [0, 1, 2],
      explanation: "Pièce sombre, absence de stimuli sonores, isolement au biberon : des exemples de développement pauvre."
    },

    // ---------- Les empreintes ----------
    {
      id: "development-022",
      question: "Qu'est-ce que les « empreintes » ?",
      answers: [
        "Un apprentissage perceptif des caractéristiques (forme, couleur...), par exposition",
        "Un apprentissage non soumis à un système de renforcement (conditionnement opérant)",
        "Un apprentissage fondé sur la récompense et la punition",
        "Un apprentissage uniquement social, qui ne passe que par la mère"
      ],
      correct: [0, 1],
      explanation: "Les empreintes sont des apprentissages perceptifs par exposition, sans renforcement."
    },
    {
      id: "development-023",
      question: "Quelles associations empreinte / notion sont exactes ?",
      answers: [
        "L'empreinte intraspécifique correspond à la socialisation",
        "L'empreinte interspécifique correspond à la familiarisation",
        "L'empreinte au biotope correspond à l'habituation (différente de l'habituation comme méthode d'apprentissage)",
        "L'empreinte intraspécifique correspond à l'habituation",
        "L'empreinte au biotope correspond à la socialisation"
      ],
      correct: [0, 1, 2],
      explanation: "Intraspécifique = socialisation ; interspécifique = familiarisation ; biotope = habituation."
    },
    {
      id: "development-024",
      question: "Parmi ces affirmations sur l'empreinte intraspécifique, lesquelles sont vraies ?",
      answers: [
        "C'est la première empreinte du chiot, lors des premières semaines",
        "Elle permet l'identification à l'espèce chien par les contacts avec la mère, la fratrie et d'autres chiens",
        "Le chiot élabore un concept d'espèce chien qu'il reconnaît peu importe le morphotype",
        "C'est une phase essentielle pour adopter les bons codes avec ses congénères",
        "Elle a lieu après 12 semaines, une fois l'imprégnation terminée",
        "Elle dépend du morphotype des chiens rencontrés : un chiot ne reconnaît que sa propre race"
      ],
      correct: [0, 1, 2, 3],
      explanation: "L'empreinte intraspécifique construit le concept d'espèce chien, quel que soit le morphotype."
    },
    {
      id: "development-025",
      question: "Parmi ces affirmations sur l'empreinte interspécifique, lesquelles sont vraies ?",
      answers: [
        "Le marquage est plus important à partir de la 5e semaine, jusqu'à la fin de l'imprégnation (12, voire 16 semaines)",
        "C'est un phénomène plus facilement réversible que l'imprégnation intraspécifique",
        "Le marquage est le plus important avant 3 semaines",
        "C'est un phénomène moins réversible que l'imprégnation intraspécifique"
      ],
      correct: [0, 1],
      explanation: "L'empreinte interspécifique marque surtout à partir de la 5e semaine et se défait plus facilement."
    },
    {
      id: "development-026",
      question: "Parmi ces affirmations sur l'empreinte à l'Homme, lesquelles sont vraies ?",
      answers: [
        "Il y a une absolue nécessité de confronter le chien à un maximum de types d'humains (bébé, enfant, adulte, femme, homme, forte corpulence...)",
        "Les problèmes de mauvaise familiarisation primaire sont récurrents : chiens anxieux face aux enfants, aux hommes, aux personnes de couleur",
        "Il existe des cas de prédation de l'Homme, notamment des nourrissons ou enfants",
        "Un seul type d'humain suffit à habituer le chien à tous les autres",
        "La familiarisation à l'Homme n'a aucune influence sur la suite du développement"
      ],
      correct: [0, 1, 2],
      explanation: "Confronter le chiot à tous les types d'humains pendant la période d'imprégnation."
    },
    {
      id: "development-027",
      question: "Parmi ces affirmations sur la familiarisation à d'autres espèces, lesquelles sont vraies ?",
      answers: [
        "Pendant cette phase, un chien peut se familiariser aux chats, rongeurs, volailles, équidés...",
        "Ce n'est pas un processus indélébile : la familiarisation doit être entretenue",
        "Après l'imprégnation, certains chiens ne pourront plus du tout être familiarisés à une autre espèce",
        "Une fois acquise, la familiarisation est définitive et ne demande aucun entretien",
        "La familiarisation est toujours possible avec n'importe quel chien, à tout âge"
      ],
      correct: [0, 1, 2],
      explanation: "La familiarisation primaire est limitée dans le temps et doit être entretenue."
    },
    {
      id: "development-028",
      question: "Parmi ces affirmations sur l'empreinte au biotope, lesquelles sont vraies ?",
      answers: [
        "Elle est extrêmement importante et accompagne l'éveil des sens",
        "Le chiot doit s'imprégner d'un maximum de bruits, textures, odeurs, mouvements et objets de l'environnement",
        "Le milieu des élevages est souvent trop pauvre pour cela",
        "Il faut travailler sur tous les sens : visuel, auditif, tactile, olfactif et gustatif",
        "Le milieu des élevages est toujours suffisamment riche",
        "Seul le sens visuel doit être travaillé"
      ],
      correct: [0, 1, 2, 3],
      explanation: "L'imprégnation au biotope concerne tous les sens ; les élevages sont souvent trop pauvres en stimulations."
    },
    {
      id: "development-029",
      question: "Quelles bonnes habitudes prendre dès l'arrivée du chiot ?",
      answers: [
        "Recevoir régulièrement des invités de tout type",
        "Emmener son chien dans des environnements riches",
        "Proposer les bons jouets à mordiller",
        "Faire un bon conditionnement à la propreté",
        "Éviter les visites pour ne pas fatiguer le chiot",
        "Réserver les sorties aux endroits calmes pour ne pas l'effrayer"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Tous ces éléments seront influencés par la phase d'imprégnation."
    },
    {
      id: "development-030",
      question: "Quelles sont les conséquences d'une mauvaise empreinte intraspécifique ou à l'Homme ?",
      answers: [
        "Mauvaise empreinte intraspécifique : anxiété ou agressivité face aux congénères, incapacité totale à communiquer et être sociable",
        "Mauvaise empreinte à l'Homme : chien sauvage non domesticable, anxiété ou agressivité vers un ou plusieurs types d'humains, prédation",
        "Mauvaise empreinte intraspécifique : prédation ou fuite face aux animaux d'autres espèces",
        "Mauvaise empreinte à l'Homme : anxiété profonde en milieu riche, comme en ville"
      ],
      correct: [0, 1],
      explanation: "Les conséquences dépendent de l'empreinte manquante."
    },
    {
      id: "development-031",
      question: "Quelles sont les conséquences d'une mauvaise empreinte aux animaux ou au biotope ?",
      answers: [
        "Mauvaise empreinte aux animaux : prédation ou fuite",
        "Mauvaise empreinte au biotope : anxiété profonde en milieu riche (ville), incapacité à s'accoutumer aux bruits de la maison, incapacité à supporter les rassemblements",
        "Mauvaise empreinte aux animaux : anxiété profonde en ville",
        "Mauvaise empreinte au biotope : incapacité totale à communiquer avec les congénères"
      ],
      correct: [0, 1],
      explanation: "Animaux : prédation ou fuite. Biotope : anxiété en milieu riche, bruits de la maison, rassemblements."
    },

    // ---------- Les 4 apprentissages fondamentaux ----------
    {
      id: "development-032",
      question: "Quels sont les 4 apprentissages comportementaux fondamentaux de la socialisation primaire ?",
      answers: [
        "La communication",
        "La gestion de conflits",
        "Les autocontrôles et le signal d'arrêt",
        "Le détachement",
        "L'obéissance aux ordres",
        "La propreté"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Les 4 apprentissages : communication, gestion de conflits, autocontrôles et signal d'arrêt, détachement."
    },
    {
      id: "development-033",
      question: "Comment la communication s'apprend-elle pendant la socialisation primaire ?",
      answers: [
        "Avec la mère et la fratrie : codes vocaux, postures et comportements, au travers du jeu, du conflit, de la peur",
        "Avec l'Homme et les autres animaux : au travers du jeu, de la réprimande, des félicitations, du travail des ordres",
        "Uniquement avec l'Homme : le chiot n'apprend aucun code canin auprès de sa mère",
        "Aucun code de communication ne s'apprend pendant cette période"
      ],
      correct: [0, 1],
      explanation: "La socialisation primaire met en place les codes de communication intra- et interspécifiques."
    },
    {
      id: "development-034",
      question: "Parmi ces affirmations sur la gestion de conflits chez le chiot, lesquelles sont vraies ?",
      answers: [
        "C'est la première étape de la « hiérarchisation » (la deuxième a lieu à la puberté)",
        "Elle se manifeste lors de deux temps forts de la journée : les repas et le jeu",
        "La mère joue un rôle important de régulation des conflits et se positionne aussi hiérarchiquement",
        "Elle n'apparaît qu'à l'âge adulte",
        "La mère n'intervient jamais dans les conflits entre les chiots"
      ],
      correct: [0, 1, 2],
      explanation: "Repas (compétition) et jeu (positionnement relatif) sont les deux moments de la gestion de conflits."
    },
    {
      id: "development-035",
      question: "Quelles sont les 3 phases de toute séquence comportementale ?",
      answers: [
        "La phase appétitive",
        "La phase consommatoire",
        "La phase d'arrêt",
        "La phase de menace",
        "La phase d'attaque"
      ],
      correct: [0, 1, 2],
      explanation: "Toute séquence comportementale comporte une phase appétitive, une phase consommatoire et une phase d'arrêt. Menace et attaque sont des phases de la séquence d'agression."
    },
    {
      id: "development-036",
      question: "Quelles associations phase / apprentissage du chiot sont exactes dans la séquence comportementale ?",
      answers: [
        "Phase appétitive : le chiot apprend à évaluer si c'est possible, s'il peut",
        "Phase consommatoire : le chiot apprend à contrôler l'intensité du comportement",
        "Phase d'arrêt : le chiot apprend à s'arrêter lorsqu'il reçoit un signal d'arrêt",
        "Phase appétitive : le chiot apprend à s'arrêter lorsqu'il reçoit un signal",
        "Phase consommatoire : le chiot apprend à évaluer si c'est possible"
      ],
      correct: [0, 1, 2],
      explanation: "Les autocontrôles se travaillent à chaque phase de la séquence."
    },
    {
      id: "development-037",
      question: "Qui apprend au chiot à se contrôler et à s'arrêter ?",
      answers: [
        "La mère dans un premier temps, puis les adoptants",
        "Les adoptants doivent prendre le relais des apprentissages de la mère",
        "La fratrie uniquement, par le jeu",
        "Le chiot apprend seul, sans intervention de la mère ni des adoptants"
      ],
      correct: [0, 1],
      explanation: "La mère enseigne autocontrôles et signal d'arrêt, les adoptants prennent ensuite le relais."
    },
    {
      id: "development-038",
      question: "Quels sont des travaux d'autocontrôles que les adoptants doivent mener ?",
      answers: [
        "La gestion des mordillements",
        "La gestion de l'espace",
        "La gestion du jeu avec jouet",
        "La gestion de la nourriture",
        "La gestion des vocalises nocturnes",
        "La gestion des invités"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Mordillements, espace, jeu avec jouet et nourriture : les adoptants prennent le relais de la mère."
    },
    {
      id: "development-039",
      question: "Parmi ces gestions, laquelle ne travaille que la phase appétitive ?",
      answers: [
        "La gestion de l'espace",
        "La gestion des mordillements",
        "La gestion du jeu avec jouet",
        "La gestion de la nourriture"
      ],
      correct: [0],
      explanation: "Espace : phase appétitive seule. Mordillements, jeu et nourriture : phases appétitive, consommatoire et d'arrêt."
    },
    {
      id: "development-040",
      question: "Qu'est-ce que l'homéostasie sensorielle ?",
      answers: [
        "Un équilibre émotionnel face aux stimuli",
        "Elle s'acquiert grâce aux autocontrôles inculqués par la mère et les adoptants dans des environnements variés",
        "Sans elle, le chien risque des comportements d'excitation, d'anxiété ou d'agressivité incontrôlés et disproportionnés",
        "Cela peut favoriser les profils HS-HA",
        "Un équilibre hormonal lié à la puberté",
        "Une capacité innée, qui ne dépend d'aucun apprentissage"
      ],
      correct: [0, 1, 2, 3],
      explanation: "L'homéostasie sensorielle est l'équilibre émotionnel face aux stimuli : elle s'apprend."
    },
    {
      id: "development-041",
      question: "Parmi ces affirmations sur le détachement, lesquelles sont vraies ?",
      answers: [
        "À partir du sevrage (environ 4 semaines), la mère joue un rôle actif : elle repousse les chiots qui lui font mal avec leurs dents",
        "Les adoptants doivent poursuivre ce processus en trouvant le bon équilibre, notamment avec des règles d'espace",
        "Le processus se poursuit jusqu'à la puberté",
        "S'il n'est pas mis en place, il y a un risque de troubles de l'hyperattachement",
        "La mère ne repousse jamais ses chiots",
        "Le processus est terminé dès l'adoption à 8 semaines"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Le détachement commence au sevrage et se poursuit jusqu'à la puberté."
    },

    // ---------- La période juvénile ----------
    {
      id: "development-042",
      question: "Quelle est la durée de la période juvénile ?",
      answers: [
        "Entre 3-4 mois et 5-8 mois, selon les races et les individus",
        "Entre 3 et 12 semaines, avant l'ouverture des sens",
        "Entre 12 et 18 mois, jusqu'à la maturité",
        "Entre 2 et 4 ans, jusqu'à la stabilité adulte"
      ],
      correct: [0],
      explanation: "La période juvénile se situe entre l'imprégnation et la puberté."
    },
    {
      id: "development-043",
      question: "Quelles sont les caractéristiques de la période juvénile ?",
      answers: [
        "Une forte croissance physique",
        "Des besoins de dépense encore assez faibles : le chiot fatigue rapidement",
        "Une appréhension vis-à-vis de l'inconnu, avec des comportements d'évitement qui le rendent facile à gérer",
        "Il est en général plus intéressé par son maître que par les inconnus",
        "Une forte indépendance vis-à-vis du maître",
        "Un attrait marqué pour les inconnus"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Le chiot juvénile est facile à gérer : peu de dépense, prudence, attaché à son maître."
    },
    {
      id: "development-044",
      question: "Pourquoi la période juvénile est-elle le bon moment pour apprendre ?",
      answers: [
        "Elle se situe entre deux périodes extrêmement sensibles : le chiot n'est plus dans la découverte de ses sens et pas encore travaillé par ses hormones de puberté",
        "C'est le moment idéal pour enseigner un maximum d'ordres et d'apprentissages ludiques",
        "Parce que le cerveau est encore en pleine neurogenèse à cet âge",
        "Parce que le chiot est alors très attiré par les inconnus"
      ],
      correct: [0, 1],
      explanation: "Entre imprégnation et puberté, le chiot est réceptif et attentif à son maître."
    },

    // ---------- La période pubertaire ----------
    {
      id: "development-045",
      question: "Quelle est la durée de la période pubertaire ?",
      answers: [
        "De 5-8 mois à 12-18 mois, après la période juvénile",
        "De 3 à 12 semaines, pendant la période d'imprégnation",
        "De 2 à 4 mois, pendant la période juvénile",
        "De 24 à 36 mois, au début de l'âge adulte"
      ],
      correct: [0],
      explanation: "La période pubertaire est une période sensible, de 5-8 mois à 12-18 mois."
    },
    {
      id: "development-046",
      question: "Comment la puberté se manifeste-t-elle ?",
      answers: [
        "Par le marquage urinaire (principalement chez les mâles)",
        "Par les chaleurs chez les femelles",
        "Par l'apparition d'hormones sexuelles (testostérone pour les mâles, œstrogènes pour les femelles)",
        "Par un renforcement de l'attractivité des inconnus",
        "Par un renforcement de l'obéissance spontanée",
        "Par une perte d'intérêt pour les inconnus"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Marquage, chaleurs, hormones sexuelles et attrait pour les inconnus marquent la puberté."
    },
    {
      id: "development-047",
      question: "Parmi ces propositions, lesquelles sont des effets de la puberté sur le comportement ?",
      answers: [
        "Une résurgence plus ou moins intense de l'héritage génétique",
        "Une perte plus ou moins importante de l'obéissance spontanée",
        "La prise d'une certaine indépendance vis-à-vis du maître",
        "Une disparition complète de l'héritage génétique",
        "Une dépendance accrue vis-à-vis du maître"
      ],
      correct: [0, 1, 2],
      explanation: "La puberté fait ressortir l'inné et éloigne le chien de son maître."
    },
    {
      id: "development-048",
      question: "Qu'est-ce que la néoténie comportementale ?",
      answers: [
        "La conservation de caractères juvéniles à l'âge adulte",
        "La perte de caractères juvéniles dès la puberté",
        "L'apparition de caractères adultes chez le jeune chiot",
        "La stabilisation définitive de la configuration du cerveau"
      ],
      correct: [0],
      explanation: "Néoténie comportementale : conservation de caractères juvéniles à l'âge adulte (notes du cours)."
    },
    {
      id: "development-049",
      question: "Parmi ces affirmations sur la puberté hormonale, lesquelles sont vraies ?",
      answers: [
        "Des changements physiques apparaissent (développement musculaire chez le mâle)",
        "La communication intraspécifique est modifiée (hormones, phéromones et odeurs)",
        "La chimie cérébrale se modifie : l'autorégulation des neurotransmissions à dopamine, qui contrôle l'agressivité et la motricité, diminue",
        "Le chien devient sensible aux hormones et phéromones sexuelles des congénères et des humains",
        "La chimie cérébrale ne change pas pendant la puberté",
        "Le chien devient insensible aux phéromones sexuelles"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Les hormones sexuelles modifient le corps, la communication et la chimie cérébrale."
    },
    {
      id: "development-050",
      question: "Comment se manifeste la recherche du positionnement social pendant la puberté ?",
      answers: [
        "Une perte de l'obéissance spontanée : le chiot recherche l'indépendance",
        "Une provocation et une recherche des limites",
        "Une remise en question des acquis éducatifs",
        "Une recherche de conflit avec les mâles et des interactions insistantes avec les femelles",
        "Un renforcement des acquis éducatifs",
        "Un évitement systématique des autres mâles"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Le chien en puberté cherche sa place, provoque et teste les règles."
    },
    {
      id: "development-051",
      question: "Quels troubles du comportement peuvent apparaître pendant la puberté ?",
      answers: [
        "Des anxiétés inexpliquées, principalement vis-à-vis de l'inconnu",
        "Des comportements d'agression (protection de ressources, agressions de distanciation)",
        "Une anxiété ou une agressivité chez des chiots pourtant correctement imprégnés, par la génétique",
        "Aucun trouble ne peut apparaître chez un chiot correctement imprégné",
        "Les troubles de cette période sont toujours dus à une mauvaise imprégnation"
      ],
      correct: [0, 1, 2],
      explanation: "La période est favorable à l'anxiété et aux agressions ; la génétique reprend sa place."
    },
    {
      id: "development-052",
      question: "Autour de quel âge se situe le pic d'apparition des troubles du comportement innés ?",
      answers: [
        "Autour de 6 à 9 mois",
        "Autour de 2 à 3 mois",
        "Autour de 12 à 18 mois",
        "Autour de 24 à 36 mois"
      ],
      correct: [0],
      explanation: "La courbe des troubles innés monte vers 4 mois, culmine vers 6-9 mois puis redescend entre 15 et 24 mois."
    },
    {
      id: "development-053",
      question: "Comment gérer correctement la période pubertaire ?",
      answers: [
        "Maintenir un cadre éducatif solide, en restant calme et rigoureux",
        "Continuer à travailler les fondamentaux de façon rigoureuse et positive, en évitant la confrontation",
        "Maintenir le système d'éducation mis en place malgré des échecs potentiellement récurrents",
        "Continuer à confronter le chien à des environnements riches",
        "Arrêter l'éducation le temps de la puberté",
        "Isoler le chien jusqu'à la fin de cette période"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Une période d'abandon du maître et d'isolement du chien ne fait qu'empirer la situation : on s'accroche, c'est un cap à passer."
    },
    {
      id: "development-054",
      question: "Quelles associations méthode d'éducation / principe sont exactes ?",
      answers: [
        "Éducation naturelle : on confronte le chien de façon intense et régulière au stimulus problématique",
        "Éducation positive : on renforce les bons comportements, on détourne l'attention",
        "Éducation coercitive : on réprimande le mauvais comportement",
        "Éducation naturelle : on marque chaque bon comportement avec un clicker et une friandise",
        "Éducation coercitive : on détourne l'attention du chien"
      ],
      correct: [0, 1, 2],
      explanation: "Face à un trouble, on peut tester ces méthodes ; on contacte rapidement un éducateur canin comportementaliste."
    },
    {
      id: "development-055",
      question: "Dans quels cas envisage-t-on la médication ?",
      answers: [
        "Dans les cas les plus extrêmes",
        "Dès l'apparition du premier trouble du comportement",
        "Systématiquement pendant toute la puberté",
        "Uniquement chez les chiens de moins de 5 mois"
      ],
      correct: [0],
      explanation: "On envisage la médication dans les cas les plus extrêmes, après avoir testé les méthodes d'éducation."
    },

    // ---------- L'âge adulte ----------
    {
      id: "development-056",
      question: "Comment définit-on l'âge adulte ?",
      answers: [
        "Un individu parvenu au terme de son développement physiologique, de 12 à 36 mois jusqu'à la mort du chien",
        "Une phase de quasi-stabilité physiologique et psychique, qui évolue lentement sauf événement traumatisant",
        "Un individu dont le comportement ne peut plus jamais évoluer, quel que soit l'événement",
        "Une période de forte croissance physique et de développement des sens"
      ],
      correct: [0, 1],
      explanation: "L'âge adulte est une phase de quasi-stabilité : évolution lente sauf événement traumatisant."
    },
    {
      id: "development-057",
      question: "Parmi ces affirmations sur la neurogenèse adulte, lesquelles sont vraies ?",
      answers: [
        "Il est faux d'affirmer qu'il est illusoire d'habituer un chien à ce dont il n'a pas été imprégné : l'expérience le prouve",
        "Une neurogenèse localisée persiste chez l'adulte",
        "Elle permet d'habituer un chien correctement prédisposé à d'autres espèces, environnements ou stimuli, les apprentissages, la mémorisation et la rééducation",
        "Son intensité n'est pas comparable à celle de l'imprégnation : certains manques ne seront pas rattrapables",
        "La neurogenèse disparaît totalement après l'imprégnation",
        "La neurogenèse adulte permet de rattraper tous les manques de l'imprégnation"
      ],
      correct: [0, 1, 2, 3],
      explanation: "La plasticité cérébrale adulte permet l'éducation et la rééducation, mais pas de tout rattraper."
    },
    {
      id: "development-058",
      question: "Pourquoi dit-on que l'éducation est un sport cérébral ?",
      answers: [
        "Quand on arrête l'entraînement, on perd ses capacités",
        "Enrichir le quotidien par des apprentissages nouveaux et de plus en plus complexes est un besoin incontournable au bien-être du chien",
        "S'engager en binôme dans une discipline sportive renforce le lien Homme-chien",
        "Une fois le chien adulte, l'éducation est terminée et ne demande plus d'efforts",
        "Il ne faut plus rien lui proposer de nouveau pour ne pas le déstabiliser"
      ],
      correct: [0, 1, 2],
      explanation: "L'éducation s'entretient toute la vie."
    }
  ]
});
