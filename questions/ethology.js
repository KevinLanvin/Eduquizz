// Theme 2 — Course 2: Notions d'éthologie
// (question format: see questions/origins.js)
//
// Sources: the course summary and the Lexique only. No very precise dates
// (e.g. the years of the Pavlov / Watson experiments or the birth years of the authors).
//
// A notion that appears in several courses is asked only once, in the oldest theme.
// Removed on purpose (never reuse this id):
//   015 phylogénèse of behaviours -> origins-011 (phylogénèse); ethology-036 covers the behaviour side
// Moved to another theme (never reuse this id):
//   008 definition of the budget-time -> budget-024 (the budget-time has its own course)
(window.THEMES = window.THEMES || []).push({
  id: "ethology",
  title: "Notions d'éthologie",
  shortTitle: "Éthologie",
  questions: [
    // ---------- Définitions clés ----------
    {
      id: "ethology-009",
      question: "Qu'étudie l'éthologie ?",
      answers: [
        "Le comportement des espèces animales dans leur milieu naturel ou dans un environnement expérimental, par l'observation et la quantification",
        "L'histoire évolutive des espèces animales à partir de leurs liens de parenté et de leur ancêtre commun",
        "Les maladies des animaux domestiques et les moyens médicaux pour empêcher leur développement",
        "Le fonctionnement des organes sensoriels des animaux, indépendamment de leur comportement"
      ],
      correct: [0],
      explanation: "L'éthologie est l'étude scientifique du comportement des espèces animales (humaines et non-humaines) dans leur milieu naturel ou en laboratoire, avec des méthodes d'observation et de quantification."
    },
    {
      id: "ethology-010",
      question: "Que signifient les deux racines du mot « éthologie » ?",
      answers: [
        "ethos = mœurs ; logos = étude",
        "ethos = animal ; logos = étude",
        "ethos = mœurs ; logos = animal",
        "ethos = instinct ; logos = loi"
      ],
      correct: [0],
      explanation: "Éthologie vient de ethos (mœurs) et logos (étude)."
    },
    {
      id: "ethology-001",
      question: "Que désigne l'Umwelt, concept de Jakob von Uexküll ?",
      answers: [
        "Le territoire qu'un animal défend contre ses congénères",
        "Le « monde propre » : l'univers sensible auquel chaque espèce (et chaque individu) donne sens",
        "L'ensemble de tous les comportements que peut exprimer une espèce",
        "Le développement d'un comportement chez un individu au cours de sa vie"
      ],
      correct: [1],
      explanation: "L'Umwelt est le monde propre ou monde sensible, conditionné par les caractéristiques morphologiques et cognitives de l'individu. L'ensemble des comportements d'une espèce, c'est l'éthogramme."
    },
    {
      id: "ethology-011",
      question: "Qu'est-ce qu'un éthogramme ?",
      answers: [
        "L'ensemble des comportements proposés par une espèce",
        "L'ensemble des gènes d'un individu, son patrimoine héréditaire",
        "L'ensemble des comportements qu'un individu a appris au cours de sa vie",
        "L'ensemble des activités d'un animal réparties sur 24 heures"
      ],
      correct: [0],
      explanation: "L'éthogramme est la liste de tous les comportements recensés pour une espèce donnée : il est défini au niveau de l'espèce, alors que le phénotype comportemental est individuel."
    },
    {
      id: "ethology-012",
      question: "Qu'est-ce qu'un instinct ?",
      answers: [
        "Un comportement inné qui apparaît indépendamment de l'environnement",
        "Un comportement appris par association avec une récompense",
        "Un comportement qui n'apparaît que sous l'effet d'une punition",
        "Un comportement acquis pendant une période sensible du jeune âge"
      ],
      correct: [0],
      explanation: "L'instinct est un comportement inné qui apparaît au sein d'une espèce indépendamment de l'environnement de développement des individus."
    },
    {
      id: "ethology-013",
      question: "Quelles propositions sont exactes à propos de l'imprégnation ?",
      answers: [
        "C'est un concept mis en évidence par Lorenz",
        "Elle est liée à un âge précoce",
        "Les apprentissages y sont facilités par des mécanismes perceptifs et cognitifs différents",
        "Elle apparaît uniquement à l'âge adulte",
        "C'est un conditionnement mis en évidence par Pavlov"
      ],
      correct: [0, 1, 2],
      explanation: "L'imprégnation, mise en évidence par Lorenz, est liée à l'âge précoce : pendant cette période, les apprentissages sont facilités par des mécanismes perceptifs et cognitifs différents."
    },
    {
      id: "ethology-014",
      question: "Qu'est-ce que l'ontogénèse d'un comportement ?",
      answers: [
        "Son développement chez l'individu, combinaison de prédispositions génétiques et d'environnement",
        "Son apparition au cours de l'évolution des espèces, à partir d'une espèce ancestrale commune",
        "Sa fonction : ce à quoi il sert pour la survie et la reproduction de l'individu",
        "Le facteur interne ou externe qui le déclenche à un moment précis"
      ],
      correct: [0],
      explanation: "L'ontogénèse est le développement du comportement chez l'individu : prédisposition génétique + environnement. Son apparition au cours de l'évolution, c'est la phylogénèse."
    },
    {
      id: "ethology-017",
      question: "Que défend le béhaviorisme ?",
      answers: [
        "Le comportement observable est conditionné par des réponses réflexes à un stimulus ou par l'histoire des renforcements et punitions de l'individu",
        "Le comportement est essentiellement déterminé par l'instinct, quel que soit l'environnement dans lequel vit l'individu et les expériences qu'il traverse",
        "Le comportement des animaux ne peut pas être comparé à celui des humains, car leurs mécanismes mentaux sont totalement différents et fondés sur de simples réflexes",
        "Le comportement est surtout le résultat de la sélection naturelle : il est conservé parce qu'il a une valeur adaptative pour l'espèce"
      ],
      correct: [0],
      explanation: "Le béhaviorisme étudie les mécanismes de conditionnement et d'apprentissage : le comportement observable est conditionné par des réflexes ou par l'histoire des renforcements et punitions."
    },
    {
      id: "ethology-018",
      question: "Quelles propositions sont exactes ?",
      answers: [
        "Un renforcement est une conséquence qui rend un comportement plus probable",
        "Une punition est une conséquence qui rend un comportement moins probable",
        "Un renforcement est une conséquence qui rend un comportement moins probable",
        "Une punition est une conséquence qui rend un comportement plus probable"
      ],
      correct: [0, 1],
      explanation: "Renforcement : le comportement devient plus probable. Punition : le comportement devient moins probable."
    },

    // ---------- Les trois courants ----------
    {
      id: "ethology-019",
      question: "De quels courants principaux l'éthologie moderne tire-t-elle son origine ?",
      answers: [
        "Le courant naturaliste",
        "Le béhaviorisme",
        "La psychologie comparée",
        "La psychanalyse",
        "Le cognitivisme"
      ],
      correct: [0, 1, 2],
      explanation: "L'éthologie moderne est née de 3 courants : naturaliste, béhaviorisme et psychologie comparée."
    },
    {
      id: "ethology-021",
      question: "Quels auteurs sont rattachés au courant naturaliste ?",
      answers: [
        "Jakob von Uexküll",
        "Nikolaas Tinbergen",
        "Konrad Lorenz",
        "B.F. Skinner",
        "René Descartes"
      ],
      correct: [0, 1, 2],
      explanation: "Courant naturaliste : von Uexküll, Tinbergen et Lorenz. Skinner relève du béhaviorisme, Descartes de la psychologie comparée."
    },
    {
      id: "ethology-020",
      question: "Quels auteurs sont rattachés au béhaviorisme ?",
      answers: [
        "Ivan Pavlov",
        "John Watson",
        "B.F. Skinner",
        "Konrad Lorenz",
        "Lloyd Morgan"
      ],
      correct: [0, 1, 2],
      explanation: "Béhaviorisme : Pavlov, Watson et Skinner. Lorenz est naturaliste, Morgan relève de la psychologie comparée."
    },
    {
      id: "ethology-022",
      question: "Quelles idées défend la psychologie comparée ?",
      answers: [
        "Elle compare les mécanismes mentaux de l'Homme et de l'animal",
        "Elle voit une discontinuité psychique entre l'Homme et l'animal",
        "Elle voit l'animal comme un animal-machine qui adopte des mécanismes réflexes",
        "Elle met en avant la valeur adaptative des comportements",
        "Elle explique le comportement par la loi de l'effet"
      ],
      correct: [0, 1, 2],
      explanation: "Psychologie comparée (Descartes, Romanes, Morgan) : comparaison des mécanismes mentaux, discontinuité psychique Homme/animal, animal-machine. La valeur adaptative est naturaliste, la loi de l'effet béhavioriste."
    },
    {
      id: "ethology-023",
      question: "Quelle est l'idée centrale du béhaviorisme ?",
      answers: [
        "La « loi de l'effet » : le comportement est le fruit d'apprentissages par conditionnement classique ou opérant",
        "La valeur adaptative des comportements, liée à la sélection naturelle et à l'imprégnation",
        "La discontinuité psychique entre l'Homme et l'animal, considéré comme un animal-machine",
        "Le monde propre de chaque espèce, conditionné par ses caractéristiques morphologiques et cognitives"
      ],
      correct: [0],
      explanation: "Le béhaviorisme s'appuie sur la « loi de l'effet » : le comportement est le fruit d'apprentissages par conditionnement classique ou opérant."
    },
    {
      id: "ethology-024",
      question: "Quelles notions sont associées au courant naturaliste ?",
      answers: [
        "La valeur adaptative des comportements",
        "Le concept d'imprégnation",
        "La sélection naturelle",
        "Le lien entre biologie, génétique, environnement et comportement",
        "La loi de l'effet",
        "L'animal-machine"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Le courant naturaliste insiste sur la valeur adaptative des comportements, l'imprégnation, la sélection naturelle et le lien biologie-génétique-environnement-comportement."
    },

    // ---------- Lorenz, Tinbergen ----------
    {
      id: "ethology-026",
      question: "Quels concepts sont associés à Konrad Lorenz ?",
      answers: [
        "L'instinct et les comportements innés",
        "L'imprégnation",
        "La réalisation d'éthogrammes",
        "Le conditionnement opérant",
        "La loi de l'effet"
      ],
      correct: [0, 1, 2],
      explanation: "Lorenz travaille sur les éthogrammes, l'instinct (comportements innés) et l'imprégnation. Le conditionnement opérant et la loi de l'effet relèvent du béhaviorisme."
    },
    {
      id: "ethology-027",
      question: "Quel lien Tinbergen établit-il entre la biologie et l'éthologie ?",
      answers: [
        "La sélection naturelle agit sur les comportements comme sur les caractères physiques",
        "Les comportements sont uniquement le résultat d'un apprentissage par conditionnement",
        "Les comportements des animaux ne sont pas comparables à ceux de l'Homme",
        "Les comportements ne dépendent que du monde propre de chaque espèce"
      ],
      correct: [0],
      explanation: "Tinbergen fait le lien entre la sélection naturelle sur les caractères physiques et sur les comportements : l'éthologie se pose les mêmes questions que la biologie."
    },
    {
      id: "ethology-002",
      question: "Quelle question Tinbergen ajoute-t-il à celles de la biologie (causalité, valeur de survie, évolution) ?",
      answers: [
        "La motivation",
        "L'ontogénèse",
        "La sélection sexuelle",
        "La socialisation"
      ],
      correct: [1],
      explanation: "Les 4 questions de Tinbergen : causalité, fonction (valeur de survie), phylogénèse (évolution) et ontogénèse (développement chez l'individu), qu'il est le seul à ajouter."
    },
    {
      id: "ethology-029",
      question: "Quelles sont les 4 questions de Tinbergen ?",
      answers: [
        "La causalité (mécanisme)",
        "La fonction (valeur de survie)",
        "L'ontogénèse (développement)",
        "La phylogénèse (évolution)",
        "La motivation",
        "La socialisation"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Tinbergen pose 4 questions pour expliquer un comportement : causalité, fonction, ontogénèse et phylogénèse."
    },
    {
      id: "ethology-030",
      question: "Quelle question de Tinbergen cherche les facteurs qui déclenchent un comportement (causes proximales) ?",
      answers: [
        "La causalité (mécanisme)",
        "La fonction (valeur de survie)",
        "L'ontogénèse (développement)",
        "La phylogénèse (évolution)"
      ],
      correct: [0],
      explanation: "La causalité (causes proximales) cherche les facteurs externes ou internes qui déclenchent le comportement. La fonction correspond aux causes ultimes."
    },
    {
      id: "ethology-031",
      question: "Quelle question de Tinbergen correspond aux causes ultimes : « à quoi sert le comportement ? »",
      answers: [
        "La fonction (valeur de survie)",
        "La causalité (mécanisme)",
        "L'ontogénèse (développement)",
        "La phylogénèse (évolution)"
      ],
      correct: [0],
      explanation: "La fonction (valeur de survie) correspond aux causes ultimes : comme les organes, les comportements ont des fonctions qui garantissent l'adaptation de l'individu à son milieu."
    },
    {
      id: "ethology-032",
      question: "Que sont les facteurs déclencheurs internes d'un comportement ?",
      answers: [
        "Toute modification de l'organisme jouant un rôle dans le déclenchement du comportement étudié",
        "Toute modification du milieu susceptible de faire réagir l'animal de façon spécifique",
        "Toutes les prédispositions génétiques transmises par l'espèce ancestrale",
        "Toutes les conséquences passées du comportement, positives comme négatives"
      ],
      correct: [0],
      explanation: "Facteurs internes : modification de l'organisme (d'où l'importance de connaître les systèmes de l'espèce). Facteurs externes : toute modification du milieu qui fait réagir l'animal."
    },
    {
      id: "ethology-033",
      question: "Que permet la fonction d'un comportement ?",
      answers: [
        "Elle garantit l'adaptation de l'individu à son milieu",
        "Elle procure un avantage comparatif pour se reproduire par rapport aux congénères",
        "Elle fixe le caractère génétique avantageux dans la population",
        "Elle explique comment le comportement apparaît au cours de la vie de l'individu",
        "Elle identifie le facteur qui déclenche le comportement"
      ],
      correct: [0, 1, 2],
      explanation: "La fonction garantit l'adaptation à son milieu, donne un avantage pour se reproduire et fixe ainsi le caractère génétique avantageux dans la population. Le développement relève de l'ontogénèse, le déclencheur de la causalité."
    },
    {
      id: "ethology-034",
      question: "Quels sont des exemples de fonctions des comportements cités dans le cours ?",
      answers: [
        "S'alimenter",
        "Se reproduire",
        "Fuir ses prédateurs",
        "Réguler ses comportements sociaux",
        "Associer un stimulus neutre à un stimulus inconditionné",
        "Obtenir une récompense"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Fonctions citées : s'alimenter, se reproduire, fuir ses prédateurs, réguler ses comportements sociaux."
    },
    {
      id: "ethology-035",
      question: "Un chien aboie sur un passant derrière un portail. Quels éléments relèvent de l'ontogénèse de ce comportement ?",
      answers: [
        "Une prédisposition génétique",
        "Un renforcement intrinsèque",
        "La variation des comportements chez l'espèce ancestrale",
        "Un isolement reproducteur entre espèces proches"
      ],
      correct: [0, 1],
      explanation: "Pour l'exemple du portail, l'ontogénèse = prédisposition génétique + renforcement intrinsèque. La variation chez l'espèce ancestrale et l'isolement reproducteur relèvent de la phylogénèse."
    },
    {
      id: "ethology-036",
      question: "Quels éléments décrivent la phylogénèse d'un comportement ?",
      answers: [
        "Il faut d'abord une variation des comportements chez l'espèce ancestrale",
        "La spéciation se fait à partir de ces divergences",
        "Les espèces issues de l'ancêtre ont des comportements qui se ressemblent mais sont assez différents pour constituer un isolement reproducteur",
        "Le comportement apparaît au cours de la vie d'un individu, sous l'effet de son environnement",
        "Le comportement est déclenché par une modification du milieu"
      ],
      correct: [0, 1, 2],
      explanation: "Phylogénèse : variation chez l'espèce ancestrale, spéciation à partir de ces divergences, comportements proches mais assez différents pour isoler les espèces. Le reste relève de l'ontogénèse et de la causalité."
    },

    // ---------- Béhaviorisme : conditionnements ----------
    {
      id: "ethology-038",
      question: "Quels sont les deux types de conditionnement présentés dans le cours ?",
      answers: [
        "Le conditionnement répondant",
        "Le conditionnement opérant",
        "Le conditionnement par imitation",
        "Le conditionnement par habituation"
      ],
      correct: [0, 1],
      explanation: "Le cours distingue le conditionnement répondant (pavlovien) et le conditionnement opérant (skinnérien)."
    },
    {
      id: "ethology-003",
      question: "Quelles appellations désignent le conditionnement répondant ?",
      answers: [
        "Conditionnement simple",
        "Conditionnement de type I",
        "Conditionnement pavlovien",
        "Conditionnement instrumental",
        "Conditionnement de type II",
        "Apprentissage skinnérien"
      ],
      correct: [0, 1, 2],
      explanation: "Le conditionnement répondant est aussi dit simple, de type I ou pavlovien. Le conditionnement opérant est instrumental, de type II ou skinnérien."
    },
    {
      id: "ethology-041",
      question: "Quelles variables sont présentes AVANT le conditionnement répondant ?",
      answers: [
        "Le stimulus neutre (SN)",
        "Le stimulus inconditionné (SI)",
        "La réponse inconditionnée (RI)",
        "Le stimulus conditionné (SC)",
        "La réponse conditionnée (RC)"
      ],
      correct: [0, 1, 2],
      explanation: "Avant conditionnement : SN, SI et RI. Après conditionnement apparaissent le stimulus conditionné (SC) et la réponse conditionnée (RC)."
    },
    {
      id: "ethology-042",
      question: "Qu'est-ce qu'un stimulus inconditionné (SI) ?",
      answers: [
        "Un stimulus qui déclenche une réponse réflexe",
        "Un stimulus qui ne déclenche aucun réflexe",
        "Un stimulus initialement neutre qui finit par déclencher une réponse",
        "Une réponse déclenchée après association avec un autre stimulus"
      ],
      correct: [0],
      explanation: "Le SI déclenche une réponse réflexe (la RI). Un stimulus qui ne déclenche aucun réflexe est un stimulus neutre."
    },
    {
      id: "ethology-043",
      question: "Qu'est-ce qu'un stimulus conditionné (SC) ?",
      answers: [
        "Un stimulus initialement neutre qui finit par déclencher une réponse conditionnée",
        "Un stimulus qui déclenche d'emblée une réponse réflexe",
        "Un stimulus qui ne déclenche jamais aucune réponse",
        "Une réponse réflexe déclenchée par un stimulus inconditionné"
      ],
      correct: [0],
      explanation: "Le SC est un stimulus initialement neutre qui, après association avec un SI, déclenche une réponse conditionnée (RC)."
    },
    {
      id: "ethology-005",
      question: "Dans l'expérience de Pavlov, que devient la pièce où les chiens reçoivent leur gamelle ?",
      answers: [
        "Un stimulus inconditionné (SI)",
        "Une réponse inconditionnée (RI)",
        "Un stimulus conditionné (SC)",
        "Une réponse conditionnée (RC)"
      ],
      correct: [2],
      explanation: "La pièce (stimulus neutre) devient un stimulus conditionné : les chiens salivent (RC) dès qu'ils y entrent. La gamelle est le SI, la salivation initiale la RI."
    },
    {
      id: "ethology-044",
      question: "Dans l'expérience de Pavlov sur la salivation des chiens, quelles associations sont exactes ?",
      answers: [
        "La gamelle de nourriture est le stimulus inconditionné",
        "La salivation devant la nourriture est la réponse inconditionnée",
        "La salivation dès l'entrée dans la pièce est la réponse conditionnée",
        "Le fait d'entrer dans la pièce est le stimulus inconditionné",
        "La gamelle de nourriture est le stimulus conditionné"
      ],
      correct: [0, 1, 2],
      explanation: "Pièce = SN puis SC ; gamelle = SI ; salivation devant la nourriture = RI ; salivation en entrant dans la pièce = RC."
    },
    {
      id: "ethology-045",
      question: "Dans l'expérience du petit Albert (Watson), quelles associations sont exactes ?",
      answers: [
        "La souris blanche est d'abord un stimulus neutre",
        "Les deux barres de métal frappées sont le stimulus inconditionné",
        "La panique et les pleurs devant les barres sont la réponse inconditionnée",
        "La peur de la souris après de nombreuses répétitions est la réponse conditionnée",
        "La souris blanche est le stimulus inconditionné",
        "Les pleurs devant les barres de métal sont une réponse conditionnée"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Souris blanche = SN puis SC ; barres de métal = SI ; panique et pleurs devant les barres = RI ; peur de la souris après répétitions = RC."
    },
    {
      id: "ethology-046",
      question: "Que s'est-il passé avec Watson lui-même dans l'expérience du petit Albert ?",
      answers: [
        "Il est lui aussi devenu un stimulus conditionné : l'enfant avait la même réaction face à lui",
        "Il est resté un stimulus neutre : l'enfant ne réagissait pas en sa présence",
        "Il est devenu un stimulus inconditionné, comme les barres de métal",
        "Il a provoqué une réponse inconditionnée dès le début de l'expérience"
      ],
      correct: [0],
      explanation: "Watson est lui aussi devenu un SC pour l'enfant, qui avait la même réaction face à lui qu'à la souris."
    },

    // ---------- Conditionnement opérant ----------
    {
      id: "ethology-004",
      question: "Que décrit un renforcement négatif ?",
      answers: [
        "L'ajout d'un stimulus aversif qui diminue le comportement",
        "Le retrait d'un stimulus appétitif qui diminue le comportement",
        "Le retrait d'un stimulus aversif qui augmente le comportement",
        "L'ajout d'un stimulus appétitif qui augmente le comportement"
      ],
      correct: [2],
      explanation: "Renforcement = le comportement augmente ; négatif = par retrait d'un stimulus. Ex : retrait d'une obligation ou d'une douleur."
    },
    {
      id: "ethology-047",
      question: "Quelles associations sont exactes pour le conditionnement opérant ?",
      answers: [
        "Renforcement positif : ajout d'un stimulus appétitif (récompense, félicitations)",
        "Renforcement négatif : retrait d'un stimulus aversif (retrait d'une obligation ou d'une douleur)",
        "Punition positive : ajout d'un stimulus aversif (ajout d'une obligation ou d'une douleur)",
        "Punition négative : ajout d'un stimulus appétitif (récompense, félicitations)",
        "Renforcement négatif : retrait d'un stimulus appétitif (retrait d'un privilège)"
      ],
      correct: [0, 1, 2],
      explanation: "Renforcement positif = ajout d'un appétitif ; renforcement négatif = retrait d'un aversif ; punition positive = ajout d'un aversif ; punition négative = retrait d'un appétitif."
    },
    {
      id: "ethology-048",
      question: "Que décrit une punition négative ?",
      answers: [
        "Le retrait d'un stimulus appétitif (ex : retrait d'un privilège ou d'un droit), qui diminue le comportement",
        "L'ajout d'un stimulus aversif (ex : ajout d'une obligation ou d'une douleur), qui diminue le comportement",
        "Le retrait d'un stimulus aversif (ex : retrait d'une obligation ou d'une douleur), qui augmente le comportement",
        "L'ajout d'un stimulus appétitif (ex : récompense ou félicitations), qui augmente le comportement"
      ],
      correct: [0],
      explanation: "Punition négative = retrait d'un stimulus appétitif (un privilège, un droit) : le comportement diminue."
    },
    {
      id: "ethology-049",
      question: "Dans le conditionnement opérant, que signifient « positif » et « négatif » ?",
      answers: [
        "Positif = ajout d'un stimulus agissant sur l'organisme ; négatif = retrait d'un stimulus",
        "Positif = le comportement augmente ; négatif = le comportement diminue",
        "Positif = stimulus agréable pour l'animal ; négatif = stimulus désagréable pour l'animal",
        "Positif = conséquence voulue par l'éducateur ; négatif = conséquence non voulue"
      ],
      correct: [0],
      explanation: "Positif/négatif se rapportent à l'ajout ou au retrait d'un stimulus. L'augmentation ou la diminution du comportement distingue le renforcement de la punition."
    },
    {
      id: "ethology-075",
      question: "Qu'est-ce que le conditionnement opérant ?",
      answers: [
        "L'utilisation de renforcement ou de punition pour faire augmenter ou diminuer la fréquence d'apparition d'un comportement",
        "L'association d'un stimulus neutre à un stimulus inconditionné pour qu'il déclenche une réponse conditionnée",
        "L'exposition répétée à un stimulus, sans renforcement, qui diminue la réactivité de l'animal",
        "L'association de plusieurs stimuli sans qu'un avantage ou un désavantage immédiat n'apparaisse"
      ],
      correct: [0],
      explanation: "Le conditionnement opérant utilise le renforcement ou la punition pour augmenter ou diminuer la fréquence d'un comportement."
    },
    {
      id: "ethology-050",
      question: "Quelles propositions caractérisent le conditionnement opérant ?",
      answers: [
        "Il demande à l'organisme de s'adapter",
        "Il permet à l'organisme de modifier volontairement son comportement pour avoir la récompense ou éviter la punition",
        "Le stimulus à conditionner est une action de l'individu lui-même",
        "Il consiste uniquement à associer un stimulus neutre à un stimulus inconditionné",
        "Le stimulus à conditionner est un événement extérieur"
      ],
      correct: [0, 1, 2],
      explanation: "Opérant : l'organisme s'adapte, modifie volontairement son comportement, le stimulus à conditionner est son action. Associer un SN à un SI et conditionner un événement extérieur caractérisent le conditionnement répondant."
    },
    {
      id: "ethology-051",
      question: "Quelles propositions caractérisent le conditionnement répondant ?",
      answers: [
        "Il associe un stimulus neutre à un stimulus inconditionné (et sa réponse) pour que le stimulus devienne conditionné",
        "Le stimulus à conditionner est un événement extérieur",
        "L'individu modifie volontairement son comportement pour obtenir une récompense",
        "Il repose sur le renforcement et la punition"
      ],
      correct: [0, 1],
      explanation: "Répondant : association SN-SI pour obtenir un SC qui provoque une RC, avec un événement extérieur. La modification volontaire du comportement, le renforcement et la punition relèvent de l'opérant."
    },

    // ---------- L'éthologie moderne ----------
    {
      id: "ethology-052",
      question: "Que dit le cours de l'éthologie moderne ?",
      answers: [
        "Elle n'est pas une querelle entre l'inné et l'acquis",
        "Le comportement est issu de la rencontre de l'inné et de l'acquis",
        "Il existe des interactions permanentes entre les gènes et l'environnement",
        "Seul l'acquis explique le comportement",
        "Seul l'inné explique le comportement"
      ],
      correct: [0, 1, 2],
      explanation: "L'éthologie moderne dépasse la querelle inné/acquis : le comportement naît d'interactions permanentes entre gènes et environnement."
    },
    {
      id: "ethology-053",
      question: "Quels termes sont associés aux éthologues naturalistes (par opposition au béhaviorisme) ?",
      answers: [
        "Inné",
        "Phylogénétique / évolution",
        "Aspect fonctionnel",
        "Ontogénèse",
        "Conditionnement",
        "Apprentissages"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Naturalistes : inné, phylogénétique/évolution, aspect fonctionnel, ontogénèse. Béhaviorisme : acquis, apprentissages, conditionnement, environnement."
    },
    {
      id: "ethology-054",
      question: "Une proportion non négligeable des problématiques comportementales s'explique par :",
      answers: [
        "La rencontre entre une expérience ou un déclencheur et un comportement pour lequel le chien avait déjà une prédisposition innée",
        "Une absence totale de prédisposition génétique chez le chien, qui apprendrait tout par conditionnement au cours de sa vie",
        "Une mutation génétique soudaine apparue au cours de la vie de l'individu adulte, sans lien avec son environnement",
        "La seule influence de l'environnement social du chien, quelles que soient ses prédispositions génétiques de départ"
      ],
      correct: [0],
      explanation: "Beaucoup de problèmes de comportement viennent de la rencontre entre un déclencheur ou une expérience et une prédisposition innée : l'inné et l'acquis sont liés."
    },

    // ---------- Définir et expliquer un comportement ----------
    {
      id: "ethology-055",
      question: "Quelles définitions du comportement sont données dans le cours ?",
      answers: [
        "« Ce qu'un organisme fait »",
        "L'ensemble des processus par lesquels un animal ressent le monde extérieur et l'état interne de son corps, et répond aux changements perçus",
        "L'ensemble des manifestations motrices observables d'un individu à un moment et dans un lieu particuliers",
        "L'ensemble des gènes d'un individu et de ses caractères héréditaires",
        "La liste de tous les comportements recensés pour une espèce donnée"
      ],
      correct: [0, 1, 2],
      explanation: "Trois définitions : « ce qu'un organisme fait », celle de Manning (ressentir et répondre) et celle de Campan et Scapini (manifestations motrices observables). Les deux dernières propositions définissent le génotype et l'éthogramme."
    },
    {
      id: "ethology-056",
      question: "Selon le cours, qu'est-ce qu'un comportement ?",
      answers: [
        "Un élément observable et une interaction animal-milieu",
        "Un état interne de l'animal, non observable de l'extérieur",
        "Une réponse réflexe uniquement, déclenchée par un stimulus inconditionné",
        "Un trait héréditaire transmis par l'espèce ancestrale"
      ],
      correct: [0],
      explanation: "Un comportement, c'est un élément observable et une interaction animal-milieu."
    },
    {
      id: "ethology-057",
      question: "Quelles étapes composent le schéma qui explique un comportement ?",
      answers: [
        "La perception (environnement externe)",
        "La cognition (traitement de l'information)",
        "L'interprétation / modulation (environnement interne)",
        "Le comportement (action observable)",
        "La sélection naturelle",
        "L'imprégnation"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Schéma des déclencheurs : perception, cognition, interprétation/modulation par l'environnement interne, puis comportement observable."
    },
    {
      id: "ethology-058",
      question: "Quels éléments relèvent de l'environnement interne, qui module le comportement ?",
      answers: [
        "Les gènes",
        "Le tempérament",
        "L'émotion",
        "La motivation",
        "L'environnement social",
        "L'environnement physique"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Interprétation/modulation : gènes, tempérament, émotion, sexe, motivation. L'environnement social et physique forment l'environnement externe."
    },
    {
      id: "ethology-059",
      question: "Que dit le cours sur le milieu ?",
      answers: [
        "C'est l'espace d'expression des comportements",
        "Un comportement est indissociable du milieu dans lequel il est exprimé",
        "Le milieu est indissociable de la notion de bien-être animal",
        "Un comportement peut s'étudier sans tenir compte du milieu",
        "Le milieu inhibe les besoins de l'animal"
      ],
      correct: [0, 1, 2],
      explanation: "Le milieu est l'espace d'expression des comportements : comportement et milieu sont indissociables, et le milieu est lié au bien-être animal. Le milieu n'inhibe pas les besoins."
    },
    {
      id: "ethology-060",
      question: "Que comprend le milieu interne ?",
      answers: [
        "La motivation",
        "Les hormones",
        "Les rythmes",
        "L'environnement social",
        "L'environnement physique"
      ],
      correct: [0, 1, 2],
      explanation: "Milieu interne : motivation, hormones, rythmes. Milieu externe : environnement social et environnement physique."
    },

    // ---------- Génotype, phénotype, domestication ----------
    {
      id: "ethology-061",
      question: "Qu'est-ce que le génotype ?",
      answers: [
        "L'ensemble des gènes d'un individu, son patrimoine héréditaire",
        "L'ensemble des caractères apparents d'un individu, en l'occurrence ses comportements",
        "L'ensemble des comportements que peut exprimer une espèce",
        "L'expression d'un gène sous l'effet de l'environnement d'un individu"
      ],
      correct: [0],
      explanation: "Le génotype est le patrimoine héréditaire : l'ensemble des gènes d'un individu."
    },
    {
      id: "ethology-062",
      question: "Qu'est-ce que le phénotype ?",
      answers: [
        "L'ensemble des caractères apparents d'un individu (ici, ses comportements), c'est-à-dire l'expression du génotype dans un environnement",
        "L'ensemble des gènes d'un individu, c'est-à-dire son patrimoine héréditaire transmis par ses parents",
        "L'ensemble des comportements recensés pour toute une espèce, indépendamment des individus",
        "Le processus par lequel une population s'adapte à l'Homme et à la captivité au fil des générations"
      ],
      correct: [0],
      explanation: "Le phénotype est l'expression du gène dans l'environnement : l'ensemble des caractères apparents, en éthologie les comportements."
    },
    {
      id: "ethology-007",
      question: "Comment appelle-t-on le fait qu'un même génotype comportemental donne des phénotypes différents selon l'environnement ?",
      answers: [
        "L'imprégnation, période précoce où les apprentissages sont facilités",
        "L'habituation, exposition répétée sans renforcement",
        "La plasticité phénotypique (même génotype, phénotypes différents)",
        "La ritualisation, modification d'un comportement à des fins de communication"
      ],
      correct: [2],
      explanation: "Le passage du génotype au phénotype est influencé par l'environnement : c'est la plasticité phénotypique."
    },
    {
      id: "ethology-064",
      question: "Quelle différence y a-t-il entre phénotype comportemental et éthogramme ?",
      answers: [
        "Le phénotype comportemental est individuel, l'éthogramme est défini au niveau de l'espèce",
        "Le phénotype comportemental est défini au niveau de l'espèce, l'éthogramme est individuel",
        "Le phénotype comportemental est inné, l'éthogramme est entièrement acquis",
        "Il n'y en a aucune : ce sont deux noms pour la même notion"
      ],
      correct: [0],
      explanation: "Phénotype comportemental = individuel ; éthogramme = niveau de l'espèce."
    },
    {
      id: "ethology-006",
      question: "Quelles propositions sont exactes à propos de la domestication et de l'apprivoisement ?",
      answers: [
        "La domestication modifie le génotype d'une population au fil des générations",
        "L'apprivoisement modifie le phénotype de l'animal, sans changement génétique",
        "L'apprivoisement modifie le génotype de l'animal",
        "La domestication ne modifie que le phénotype d'un individu",
        "Ce sont deux synonymes"
      ],
      correct: [0, 1],
      explanation: "Domestication : adaptation d'une population à l'Homme par des changements génétiques au fil des générations. Apprivoisement : l'animal accepte l'Homme en s'adaptant (phénotype), sans changement génétique."
    },
    {
      id: "ethology-066",
      question: "Que dit le cours de la domestication du chien : modification du génotype ou du phénotype ?",
      answers: [
        "Elle correspond à une sélection sur des traits comportementaux apparents (tolérance, docilité)",
        "Elle a progressivement généré des modifications génétiques au fil des générations",
        "Le chien est génétiquement différent du loup, mais surtout plus plastique dans son développement phénotypique",
        "Elle est un simple changement du phénotype, sans modification génétique",
        "Elle est un simple changement du génotype, sans lien avec les comportements apparents"
      ],
      correct: [0, 1, 2],
      explanation: "Réponse du cours : les deux. Sélection sur des traits phénotypiques (tolérance, docilité), qui a généré des modifications génétiques ; le chien est plus plastique, ce qui facilite l'apprentissage et l'éducation."
    },
    {
      id: "ethology-067",
      question: "Quels traits comportementaux apparents ont été sélectionnés lors de la domestication du chien ?",
      answers: [
        "La tolérance",
        "La docilité",
        "La méfiance envers l'Homme",
        "L'indépendance",
        "L'agressivité"
      ],
      correct: [0, 1],
      explanation: "La domestication a sélectionné des traits comme la tolérance et la docilité."
    },

    // ---------- Umwelt ----------
    {
      id: "ethology-069",
      question: "Quelles associations sont exactes ?",
      answers: [
        "Umwelt : le monde propre, ce que vit l'animal",
        "Merkwelt : le monde de la perception, ce que l'animal perçoit",
        "Werkwelt : le monde de l'action, ce que l'animal fait",
        "Merkwelt : le monde de l'action, ce que l'animal fait",
        "Werkwelt : le monde de la perception, ce que l'animal perçoit"
      ],
      correct: [0, 1, 2],
      explanation: "Umwelt = monde propre (ce que vit l'animal), Merkwelt = monde de la perception, Werkwelt = monde de l'action."
    },
    {
      id: "ethology-070",
      question: "Qu'est-ce qui détermine l'information pertinente pour le cerveau d'un animal ?",
      answers: [
        "Sa niche écologique",
        "Son âge au moment de l'imprégnation",
        "Les conséquences passées de ses comportements",
        "Le nombre d'individus de son groupe"
      ],
      correct: [0],
      explanation: "Chaque animal a sa propre perception du milieu, son répertoire d'actions et ses capacités sensorielles : l'information pertinente pour son cerveau dépend de sa niche écologique."
    },
    {
      id: "ethology-071",
      question: "Que signifie le fait que chaque individu ait son propre Umwelt ?",
      answers: [
        "On ne pénétrera jamais totalement dans l'univers canin, et le chien ne pénétrera jamais totalement dans l'univers humain",
        "Un chien finit par percevoir le monde exactement comme son maître, grâce à une éducation régulière et cohérente",
        "Deux espèces ne peuvent jamais partager le même environnement, même de façon partielle",
        "Tous les chiens perçoivent le monde de la même façon, quelle que soit leur histoire personnelle"
      ],
      correct: [0],
      explanation: "Chaque individu a son propre Umwelt. Deux espèces peuvent partager un environnement à la fois similaire et totalement différent."
    },

    // ---------- Adaptation au milieu et bien-être ----------
    {
      id: "ethology-073",
      question: "Que dit le cours de l'adaptation du chien à son milieu ?",
      answers: [
        "L'animal s'adapte au milieu dans lequel il vit",
        "Le milieu n'inhibe pas les besoins de l'animal",
        "Le chien est l'une des espèces les plus adaptables",
        "Ne pas répondre à certains besoins constitue un non-respect des conditions de bien-être animal",
        "Un animal très adaptable n'a plus besoin de répondre à ses besoins",
        "Le milieu finit par supprimer les besoins de l'animal"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Le chien est très adaptable, mais le milieu n'inhibe pas ses besoins : ne pas y répondre est un non-respect du bien-être animal."
    },
    {
      id: "ethology-074",
      question: "Quelles sont des conclusions du cours d'éthologie ?",
      answers: [
        "L'analyse des comportements nécessite une parfaite connaissance de l'espèce étudiée",
        "Le comportement d'un individu est le résultat d'interactions complexes entre son génotype et son environnement",
        "Chaque individu a son propre Umwelt",
        "Le milieu doit être adapté à l'individu pour qu'il soit dans des conditions de bien-être acceptables",
        "Un seul facteur d'influence suffit à analyser un comportement",
        "L'Homme peut entrer totalement dans l'univers canin"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Conclusions : connaître l'espèce, tenir compte des interactions génotype-environnement, chaque individu a son Umwelt, le milieu doit être adapté à l'individu."
    }
  ]
});
