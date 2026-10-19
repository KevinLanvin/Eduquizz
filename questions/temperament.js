// Theme 5 — Course 5: Notions de tempérament et tests
// (question format: see questions/origins.js)
//
// Sources: the course summary and the Lexique only. No very precise dates
// (the years of the studies and of the tests are left out), no journal references.
// The Educhien shelter evaluation grid is not covered (unreadable on the course photo).
//
// A notion that appears in several courses is asked only once, in the oldest theme.
// Not asked here on purpose:
//   - "genetics sets a frame of possibilities" -> genetics-066 (only the breed-specific
//     conclusion of the C-BARQ study is asked here)
//   - "hypertype" / "type comportemental"      -> budget-002 / budget-003
(window.THEMES = window.THEMES || []).push({
  id: "temperament",
  title: "Tempérament et tests",
  shortTitle: "Tempérament",
  questions: [
    // ---------- Tempérament : approches et définitions ----------
    {
      id: "temperament-001",
      question: "Qu'est-ce que le tempérament ?",
      answers: [
        "La variabilité comportementale individuelle dans l'expression des comportements",
        "L'ensemble des comportements recensés pour une espèce donnée, tous individus confondus",
        "Le patrimoine héréditaire d'un individu, transmis par ses parents à sa naissance",
        "La capacité d'un animal à s'adapter à un environnement qui n'est pas le sien"
      ],
      correct: [0],
      explanation: "Le tempérament désigne la variabilité comportementale individuelle : les individus diffèrent par leur tendance à exprimer tel ou tel comportement."
    },
    {
      id: "temperament-002",
      question: "Quel terme le cours privilégie-t-il pour désigner la variabilité comportementale individuelle ?",
      answers: [
        "Le tempérament",
        "La personnalité",
        "Le style de stratégie (coping style)",
        "Le phénotype comportemental"
      ],
      correct: [0],
      explanation: "Style de stratégie (coping style), tempérament et personnalité désignent la même chose, sans consensus sur la terminologie : le cours privilégie le terme de tempérament."
    },
    {
      id: "temperament-003",
      question: "Quelles caractéristiques ont les traits de tempérament ?",
      answers: [
        "Ils sont constants et consistants dans le temps et dans les contextes pour un animal donné",
        "Ils sont présents à un âge précoce",
        "Ils correspondent à une tendance générale : le comportement dans un contexte est corrélé au comportement dans de multiples contextes",
        "Ils s'acquièrent uniquement par apprentissage, une fois le chien adulte",
        "Ils changent complètement d'un contexte à l'autre chez un même animal"
      ],
      correct: [0, 1, 2],
      explanation: "Les traits de tempérament sont constants et consistants dans le temps et les contextes, présents à un âge précoce, et traduisent une tendance générale. Attention toutefois à ne pas surinterpréter le caractère « constant »."
    },
    {
      id: "temperament-004",
      question: "Qu'est-ce qu'un syndrome comportemental ?",
      answers: [
        "Un « paquet cohérent » de traits de tempérament qui tendent à s'organiser ensemble",
        "Un trouble du comportement provoqué par un manque d'activité ou de stimulations",
        "Un comportement fréquent et non fonctionnel, répété de façon identique",
        "Un trait comportemental surdéveloppé par une sélection excessive d'une race"
      ],
      correct: [0],
      explanation: "Un syndrome comportemental est un « paquet cohérent » de traits de tempérament qui se développent et s'organisent ensemble."
    },
    {
      id: "temperament-005",
      question: "Qu'appelle-t-on l'effet de raciation ?",
      answers: [
        "Les variations phénotypiques extrêmes entre les différentes races d'une même espèce, la sélection étant artificielle chez le chien",
        "Les variations phénotypiques entre individus d'une même portée, élevés dans les mêmes conditions de vie",
        "La disparition progressive des différences entre races, quand elles se croisent entre elles de façon répétée",
        "L'apparition d'une nouvelle race après une mutation génétique conservée par les éleveurs"
      ],
      correct: [0],
      explanation: "L'effet de raciation désigne les variations phénotypiques extrêmes entre races d'une même espèce : chez le chien, contrairement à la plupart des espèces, la sélection est artificielle."
    },
    {
      id: "temperament-006",
      question: "Quelles sont des dimensions générales du tempérament, partiellement corrélées entre elles ?",
      answers: [
        "La réactivité émotionnelle",
        "Le seuil de peur",
        "La tolérance à la frustration",
        "L'inhibition comportementale",
        "L'obéissance aux ordres",
        "La taille adulte de l'animal"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Dimensions générales : réactivité émotionnelle, seuil de peur, tolérance à la frustration, inhibition comportementale."
    },
    {
      id: "temperament-007",
      question: "De quoi l'expression des dimensions générales du tempérament dépend-elle fortement ?",
      answers: [
        "Du type de stimulus",
        "De la valence émotionnelle (l'état d'esprit)",
        "Du contexte social",
        "De la couleur de la robe de l'animal",
        "De l'âge du propriétaire"
      ],
      correct: [0, 1, 2],
      explanation: "L'expression de ces dimensions dépend fortement du type de stimulus, de la valence émotionnelle et du contexte social."
    },
    {
      id: "temperament-008",
      question: "Comment qualifier les corrélations entre les traits latents du tempérament ?",
      answers: [
        "Partielles, dimensionnelles et non universelles",
        "Totales, car tous les traits évoluent toujours ensemble",
        "Nulles, car chaque trait est indépendant de tous les autres",
        "Universelles, car elles sont identiques dans toutes les espèces"
      ],
      correct: [0],
      explanation: "Les traits latents sont partiellement corrélés : les corrélations sont partielles, dimensionnelles, non universelles."
    },

    // ---------- Le tempérament chez le chien ----------
    {
      id: "temperament-009",
      question: "Que dit le cours du lien entre race et tempérament chez le chien ?",
      answers: [
        "Contrairement à la plupart des espèces, la sélection est artificielle chez le chien",
        "Les traits comportementaux sont présents chez toutes les races, mais diffèrent en fréquence et en intensité",
        "Chaque race possède des traits comportementaux qui n'existent chez aucune autre race",
        "La sélection du chien est naturelle, comme chez la plupart des autres espèces"
      ],
      correct: [0, 1],
      explanation: "Chez le chien, la sélection est artificielle : les traits comportementaux existent chez toutes les races mais diffèrent en fréquence et en intensité."
    },
    {
      id: "temperament-010",
      question: "Quelles races ont été comparées dans l'étude de Scott et Fuller sur la dominance dyadique ?",
      answers: [
        "Le Fox Terrier",
        "Le Berger des Shetland",
        "Le Basenji",
        "Le Cocker Spaniel",
        "Le Beagle",
        "Le Labrador",
        "Le Berger allemand"
      ],
      correct: [0, 1, 2, 3, 4],
      explanation: "L'étude portait sur 5 races pures de chiots, élevés dans un contexte de développement similaire : Fox Terrier, Berger des Shetland, Basenji, Cocker Spaniel et Beagle."
    },
    {
      id: "temperament-011",
      question: "Comment se déroule le test de dominance dyadique de Scott et Fuller ?",
      answers: [
        "Un os est placé au centre d'une enceinte inconnue",
        "Deux chiots y sont placés ensemble",
        "Le test dure 10 minutes",
        "Chaque chiot est testé seul, avec son propre os",
        "Le test dure plusieurs heures, jusqu'à ce qu'un chiot cède"
      ],
      correct: [0, 1, 2],
      explanation: "Test de dominance dyadique : 1 os au centre d'une enceinte inconnue, 2 chiots, pendant 10 minutes. Les tests sont répétés de la 5e à la 52e semaine (la première année)."
    },
    {
      id: "temperament-012",
      question: "Dans ce test, à quel moment considère-t-on que la relation entre les deux chiots est stable ?",
      answers: [
        "Quand le dominant s'attribue l'os sans réaction de l'autre chiot (ajustements)",
        "Quand les deux chiots se partagent l'os en alternant à chaque test",
        "Quand le plus gros chiot gagne l'os de force, quel que soit l'autre chiot",
        "Quand aucun des deux chiots ne s'intéresse à l'os pendant le test"
      ],
      correct: [0],
      explanation: "La relation devient stable quand le dominant s'attribue l'os sans réaction de l'autre chiot : les deux individus se sont ajustés."
    },
    {
      id: "temperament-013",
      question: "Que conclut l'étude de Scott et Fuller ?",
      answers: [
        "La propension à établir des relations de dominance stables varie en fonction des races",
        "Le Fox Terrier est la race chez qui ces relations s'établissent le plus (courbe la plus élevée)",
        "Cette propension est identique dans les cinq races étudiées",
        "Le Basenji est la race chez qui ces relations s'établissent le plus"
      ],
      correct: [0, 1],
      explanation: "La propension à établir des relations de dominance stables varie selon les races : sur la figure, le Fox Terrier a la courbe la plus élevée."
    },
    {
      id: "temperament-014",
      question: "Que dit le cours sur le tempérament et l'agressivité (syndromes comportementaux) ?",
      answers: [
        "Certains traits de tempérament tendent à s'organiser en paquets cohérents, les syndromes comportementaux",
        "Une forte audace ou prise de risque peut être associée à certains types d'agressivité, dans des contextes compétitifs ou à risque",
        "Les individus timides sont plus prudents et présentent plutôt des stratégies d'évitement (sauf agression défensive)",
        "Les individus timides sont statistiquement les plus agressifs",
        "La prise de risque ne dépend pas de ce que l'individu a à perdre"
      ],
      correct: [0, 1, 2],
      explanation: "La prise de risque dépend de ce que l'individu a à perdre. Statistiquement, les plus explorateurs, téméraires et agressifs s'opposent aux moins explorateurs, plus timides et moins agressifs."
    },

    // ---------- Tests de tempérament : le C-BARQ ----------
    {
      id: "temperament-015",
      question: "Qu'est-ce que le C-BARQ ?",
      answers: [
        "Un questionnaire d'environ 100 items, qui permet de dissocier 11 traits de personnalité chez les chiens de compagnie",
        "Un test standardisé de mise en situation, composé de 10 catégories de tests, qui évalue 5 traits de tempérament",
        "Une grille d'évaluation du tempérament, adaptée aux chiens de refuge et à leurs conditions d'accueil",
        "Une échelle d'évaluation de l'héritabilité des comportements, calculée à partir des pédigrées"
      ],
      correct: [0],
      explanation: "Le C-BARQ (Canine Behavioral Assessment & Research Questionnaire, de James Serpell) est un questionnaire d'environ 100 items qui dissocie 11 traits chez les chiens de compagnie."
    },
    {
      id: "temperament-016",
      question: "Parmi les 11 traits du C-BARQ listés dans le cours, lesquels figurent dans la liste ?",
      answers: [
        "L'agressivité dirigée contre les inconnus",
        "L'agressivité dirigée contre le propriétaire",
        "La capacité d'apprentissage (trainability)",
        "L'excitabilité",
        "La sensibilité au bruit",
        "L'agressivité alimentaire"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Les 11 traits : agressivité envers inconnus, propriétaire, chiens ; peur des inconnus, non sociale ; agressivité liée à la séparation ; attachement ; capacité d'apprentissage ; poursuite ; excitabilité ; sensibilité à la douleur."
    },
    {
      id: "temperament-035",
      question: "Parmi les traits de peur et d'agressivité du C-BARQ, lesquels figurent dans la liste du cours ?",
      answers: [
        "La peur des inconnus",
        "La peur non sociale",
        "La peur ou l'agressivité envers les chiens",
        "L'agressivité liée à la séparation",
        "La peur du vétérinaire",
        "L'agressivité maternelle"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Les 11 traits : agressivité envers inconnus, propriétaire, chiens ; peur des inconnus, non sociale ; agressivité liée à la séparation ; attachement ; capacité d'apprentissage ; poursuite ; excitabilité ; sensibilité à la douleur."
    },
    {
      id: "temperament-036",
      question: "Parmi ces propositions, lesquelles sont aussi des traits du C-BARQ ?",
      answers: [
        "Le comportement d'attachement",
        "La poursuite (chasing)",
        "La sensibilité à la douleur",
        "La dominance sociale",
        "L'intelligence"
      ],
      correct: [0, 1, 2],
      explanation: "Derniers traits du C-BARQ : attachement, poursuite, sensibilité à la douleur."
    },
    {
      id: "temperament-017",
      question: "Que montrent les résultats de recherche du C-BARQ sur la race et l'agressivité ?",
      answers: [
        "La race ne permet pas de prédire de manière fiable l'agressivité d'un individu",
        "La race influence néanmoins les distributions de traits et des prédispositions de population",
        "Les races ne sont ni des étiquettes comportementales ni des pages blanches",
        "La race détermine à elle seule le comportement agressif d'un chien",
        "La race n'a aucune influence sur les tendances de comportement"
      ],
      correct: [0, 1, 2],
      explanation: "Aucune race ne détermine à elle seule l'agressivité d'un chien, mais la race influence des tendances statistiques : ces prédispositions s'analysent en interaction avec l'environnement, le contexte social et la capacité d'investissement des humains."
    },
    {
      id: "temperament-018",
      question: "Quelles sont des limites du C-BARQ en tant qu'outil de recherche ?",
      answers: [
        "Ses résultats parlent de populations, pas d'individus",
        "Il mesure des tendances perçues de façon parfois subjective, pas des données scientifiquement mesurées",
        "Il mesure une représentation, pas un comportement brut",
        "Il est utile pour poser des questions, pas pour y répondre",
        "Il permet de poser un diagnostic fiable pour un cas particulier",
        "Il remplace avantageusement l'analyse d'un éducateur canin"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Le C-BARQ parle de populations et pas d'individus, mesure des tendances perçues et une représentation, et sert à poser des questions plutôt qu'à y répondre."
    },
    {
      id: "temperament-019",
      question: "Pourquoi un simple questionnaire rempli par le propriétaire ne peut-il pas remplacer l'analyse d'un éducateur canin ?",
      answers: [
        "Il ne teste pas le chien",
        "Il ne prend pas de recul en observant concrètement les comportements décrits",
        "Il n'intègre pas le contexte précis, la motivation individuelle et les interactions chien-humain-environnement",
        "Il ne questionne pas des sujets essentiels : qui, quoi, où, comment, pourquoi, et avant, et après",
        "Il est beaucoup trop long à remplir pour la plupart des propriétaires",
        "Ses résultats sont presque toujours faux"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Le questionnaire ne teste pas le chien, n'observe pas concrètement, n'intègre pas le contexte, la motivation ni les interactions, et ne pose pas les questions essentielles (qui, quoi, où, comment, pourquoi, avant, après)."
    },
    {
      id: "temperament-020",
      question: "Comment le cours qualifie-t-il le C-BARQ en conclusion ?",
      answers: [
        "Un excellent outil de recherche et de repérage, mais pas un outil de diagnostic d'un cas particulier",
        "Un excellent outil de diagnostic, utilisable seul pour décider du devenir d'un chien",
        "Un outil sans intérêt, car il repose uniquement sur le discours subjectif du propriétaire",
        "Un outil réservé aux chiens de refuge, pour évaluer leur placement"
      ],
      correct: [0],
      explanation: "Le C-BARQ est un excellent outil de recherche et de repérage, mais ne constitue pas un outil de diagnostic d'un cas particulier."
    },

    // ---------- Questionnaire ou tests de mise en situation ----------
    {
      id: "temperament-021",
      question: "Quelle démarche suit-on pour réaliser un test de tempérament ?",
      answers: [
        "Déterminer d'abord les traits à évaluer pour une fonction donnée, puis choisir le format : questionnaire ou tests de mise en situation",
        "Choisir d'abord le test le plus répandu, puis adapter les traits à évaluer à ce que ce test mesure",
        "Réaliser systématiquement un questionnaire et des tests de mise en situation, quels que soient les traits visés",
        "Observer le chien en liberté, sans fixer à l'avance les traits ou le format du test"
      ],
      correct: [0],
      explanation: "On détermine d'abord les traits à évaluer pour une fonction donnée, puis on choisit le format : questionnaire OU tests de mise en situation."
    },
    {
      id: "temperament-022",
      question: "Quels sont des avantages du questionnaire ?",
      answers: [
        "Il donne une vision multi-contextes sur une longue période (jours, semaines, mois)",
        "Il est utile pour un premier repérage, pour identifier des zones à explorer",
        "Il peut capter des événements rares (morsure, incident) qu'un test court ne provoquera pas",
        "La standardisation des questions permet des comparaisons entre groupes ou populations",
        "Il permet d'observer directement les comportements du chien",
        "Il permet d'analyser les seuils de déclenchement et la récupération émotionnelle"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Questionnaire : vision multi-contextes sur longue période, premier repérage, événements rares, standardisation. L'observation directe et l'analyse des seuils sont des avantages des tests de mise en situation."
    },
    {
      id: "temperament-023",
      question: "Quelles sont des limites du questionnaire ?",
      answers: [
        "Il est déclaratif : biais subjectif (minimisation, dramatisation, mémoire, honte, normes sociales)",
        "Il mesure une perception ou une représentation, pas le comportement « brut »",
        "Il dépend du niveau d'observation et des compétences du répondant",
        "Il a une faible utilité pour un pronostic individuel s'il est utilisé seul",
        "Il dépend fortement de l'état du chien le jour du test (fatigue, douleur, stress)",
        "Il peut être risqué et nécessite un protocole strict"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Limites du questionnaire : biais déclaratif, perception et non comportement brut, dépendance au répondant, faible utilité pronostique seul. La dépendance à l'état du jour et le risque sont des limites des tests de mise en situation."
    },
    {
      id: "temperament-024",
      question: "Quels sont des avantages des tests de mise en situation ?",
      answers: [
        "Ils permettent d'observer directement les comportements, de façon moins dépendante du discours du propriétaire",
        "Ils permettent d'analyser les seuils de déclenchement, la récupération émotionnelle, les stratégies et la qualité des signaux",
        "Ils peuvent objectiver des comportements non perçus ou mal décrits par le propriétaire",
        "Ils captent facilement des événements rares comme une morsure",
        "Ils donnent une vision sur plusieurs mois de la vie du chien"
      ],
      correct: [0, 1, 2],
      explanation: "Tests de mise en situation : observation directe, analyse des seuils, de la récupération et des stratégies, objectivation de comportements mal décrits. Les événements rares et la vue sur la durée sont des atouts du questionnaire."
    },
    {
      id: "temperament-025",
      question: "Quelles sont des limites des tests de mise en situation ?",
      answers: [
        "Ils sont instantanés : forte dépendance à l'état du jour (fatigue, douleur, stress, nouveauté)",
        "Il y a un risque de faux négatifs (le chien « se fige ») ou de faux positifs (situation trop artificielle)",
        "Leur généralisation est limitée : ce qui se passe « au test » n'est pas ce qui se passe « dans la vraie vie »",
        "Ils peuvent être risqués et nécessitent des compétences et un protocole strict",
        "Ils sont déclaratifs, donc soumis aux biais de minimisation ou de dramatisation",
        "Leur standardisation permet de comparer des groupes ou des populations"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Limites des tests de mise en situation : dépendance à l'état du jour, faux négatifs ou positifs, généralisation limitée (effet test), risque et protocole strict. Le biais déclaratif concerne le questionnaire."
    },

    // ---------- Les traits à évaluer et le DMA ----------
    {
      id: "temperament-026",
      question: "Parmi les 6 principaux traits de tempérament à évaluer chez un chien de compagnie, lesquels figurent dans le cours ?",
      answers: [
        "La réactivité",
        "La peur",
        "La sociabilité / familiarité",
        "La réponse à l'entraînement",
        "La dominance",
        "L'intelligence"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Les 6 traits : réactivité, peur, sociabilité/familiarité, activité, réponse à l'entraînement, agressivité."
    },
    {
      id: "temperament-027",
      question: "Quelles associations trait / ce qui est évalué sont exactes ?",
      answers: [
        "Réactivité : activité ou réaction dans des situations nouvelles",
        "Peur : signes d'inconfort ou d'évitement de certaines situations ou objets",
        "Sociabilité / familiarité : initiation d'interactions amicales avec les congénères et les humains",
        "Réponse à l'entraînement : vitesse d'apprentissage de nouvelles interactions ou de nouveaux environnements",
        "Activité : vitesse d'apprentissage de nouvelles interactions",
        "Agressivité : initiation d'interactions amicales avec les humains"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Réactivité = réaction aux situations nouvelles ; peur = inconfort et évitement ; sociabilité = interactions amicales ; réponse à l'entraînement = vitesse d'apprentissage. L'activité couvre l'activité générale et l'exploration, l'agressivité les menaces et morsures."
    },
    {
      id: "temperament-032",
      question: "Parmi les 6 traits à évaluer, quelles associations concernent l'activité et l'agressivité ?",
      answers: [
        "Activité : activité générale et comportements exploratoires",
        "Agressivité : comportements agressifs (menaces, morsures) dirigés vers le propriétaire, un étranger ou un congénère",
        "Activité : vitesse d'apprentissage de nouvelles interactions",
        "Agressivité : initiation d'interactions amicales avec les humains"
      ],
      correct: [0, 1],
      explanation: "Les 6 traits : réactivité, peur, sociabilité/familiarité, activité (activité générale et exploration), réponse à l'entraînement, agressivité (menaces et morsures)."
    },
    {
      id: "temperament-028",
      question: "Quels traits de tempérament le DMA (Dog Mentality Assessment) permet-il d'évaluer ?",
      answers: [
        "L'activité de jeu",
        "La curiosité / l'absence de peur",
        "La prédisposition à la poursuite",
        "La sociabilité",
        "L'agressivité",
        "L'obéissance",
        "La sensibilité à la douleur"
      ],
      correct: [0, 1, 2, 3, 4],
      explanation: "Le DMA est un test standardisé de mise en situation, composé de 10 catégories de tests, qui évalue 5 traits : activité de jeu, curiosité/absence de peur, prédisposition à la poursuite, sociabilité, agressivité."
    },
    {
      id: "temperament-029",
      question: "Quelles associations test du DMA / principe sont exactes ?",
      answers: [
        "Contact social : un étranger salue le chien, le prend en laisse à distance du maître et le caresse",
        "Poursuite : un objet en fourrure d'environ 40 à 50 cm est mis en mouvement par un système de roue et de corde",
        "Fantômes : deux personnes s'approchent avec un drap sur la tête, percé de trous pour les yeux",
        "Coup de feu : le chien et le maître sont en activité lorsqu'un coup de feu retentit",
        "Bruit métallique : un mannequin apparaît soudainement devant le chien",
        "Fantômes : une chaîne bruyante est tirée au bout d'une corde"
      ],
      correct: [0, 1, 2, 3],
      explanation: "L'apparition soudaine est le test du mannequin ; le bruit métallique est celui de la chaîne bruyante au bout d'une corde. Les 10 tests incluent aussi deux phases de jeu, une situation passive et un jeu à distance."
    },
    {
      id: "temperament-033",
      question: "Quelles associations sont exactes pour les tests de jeu et de situation passive du DMA ?",
      answers: [
        "Phase de jeu 1 : jeu avec un étranger, avec un chiffon et tir à la corde",
        "Situation passive : le chien est en laisse, sans aucun stimulus",
        "Jeu à distance : une personne inconnue, masquée, à distance, se démasque et invite au jeu",
        "Situation passive : une chaîne bruyante est tirée au bout d'une corde",
        "Jeu à distance : un mannequin apparaît soudainement"
      ],
      correct: [0, 1, 2],
      explanation: "Suite des 10 tests du DMA : phase de jeu 1, situation passive, jeu à distance."
    },
    {
      id: "temperament-034",
      question: "Quelles associations sont exactes pour les autres tests du DMA ?",
      answers: [
        "Apparition soudaine : un mannequin apparaît soudainement",
        "Bruit métallique : une chaîne bruyante est tirée au bout d'une corde",
        "Phase de jeu 2 : jeu avec un étranger et un chiffon",
        "Apparition soudaine : deux personnes s'approchent avec un drap sur la tête",
        "Bruit métallique : un coup de feu retentit pendant que le chien est en activité"
      ],
      correct: [0, 1, 2],
      explanation: "Les 10 tests du DMA : contact social, phase de jeu 1, poursuite, situation passive, jeu à distance, apparition soudaine, bruit métallique, fantômes, phase de jeu 2, coup de feu."
    },

    // ---------- Tests pour les chiens de refuge ----------
    {
      id: "temperament-030",
      question: "Quels sont des intérêts d'un test de tempérament adapté aux chiens de refuge ?",
      answers: [
        "Il est réalisé dans l'environnement et avec les moyens disponibles en refuge",
        "Il évalue les aptitudes pour la compagnie (sociabilité, réactivité, agressivité, peur, réponse à l'apprentissage)",
        "Il sécurise le travail des agents et des bénévoles, en évitant de découvrir le tempérament du chien lors d'un événement imprévu",
        "Il permet d'adapter l'environnement et l'approche éducative de façon préventive, et donne une meilleure visibilité en cas de placement rapide",
        "Il permet de poser un diagnostic précis de pathologie comportementale",
        "Il dispense de toute information sur le passé du chien"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Le test de refuge vise la compagnie, sécurise agents et bénévoles, permet d'adapter préventivement l'environnement et l'éducation, et évite de placer un chien « sans informations » après quelques jours."
    },

    // ---------- Conclusion ----------
    {
      id: "temperament-031",
      question: "Quelles sont des conclusions du cours sur le tempérament ?",
      answers: [
        "Les chiens présentent une importante variabilité comportementale individuelle : l'expression de leur tempérament (ou personnalité)",
        "Cette variabilité est notamment conditionnée par des facteurs génétiques, donc par la race, mais ce n'est pas une vérité absolue",
        "Pour évaluer le tempérament d'un chien et sa compatibilité avec un environnement ou une fonction, il faut mettre en place un test adapté (questionnaire ou mise en situation)",
        "On peut s'appuyer sur des tests existants, notamment le C-BARQ et le DMA",
        "La race d'un chien suffit à prédire son tempérament de façon certaine",
        "Un questionnaire rempli par le propriétaire suffit à évaluer le tempérament"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Conclusions : variabilité individuelle importante, conditionnée notamment par la génétique mais pas de façon absolue, test adapté pour évaluer la compatibilité, appui possible sur le C-BARQ et le DMA."
    }
  ]
});
