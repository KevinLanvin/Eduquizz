// Theme 1 — Course 1: Origines et domestication
// A theme has: id, title (full name), shortTitle (friendlier short name shown above its
// progress bar on the home screen) and questions.
// Question format:
//   id           STABLE identifier (saved progress, friend links, debugging): never change or reuse it
//   question     the question text
//   answers      the choices (their order is shuffled when displayed)
//   correct      LIST of the indexes of the correct answers in `answers`, e.g. [1] or [0, 2].
//                The player must select exactly these answers (no more, no less) to pass.
//   explanation  shown at the end of the series if the question was missed
//
// Note: question 005 used to ask for a very precise date, it was reworded (the id is kept).
// Ids that no longer exist must never be reused.
(window.THEMES = window.THEMES || []).push({
  id: "origins",
  title: "Origines et domestication",
  shortTitle: "Origines",
  questions: [
    // ---------- Définitions clés ----------
    {
      id: "origins-001",
      question: "Que désigne le terme « êtres commensaux » ?",
      answers: [
        "Des animaux qui vivent en coopération avec l'Homme, par exemple pour le gardiennage",
        "Des animaux vivant dans des environnements créés par l'Homme, à ses dépens, sans coopération",
        "Des animaux sauvages qui vivent dans des milieux naturels, à l'écart de toute présence humaine",
        "Des animaux de compagnie élevés à l'intérieur des maisons depuis le milieu du XXe siècle"
      ],
      correct: [1],
      explanation: "Les commensaux vivent aux dépens de l'Homme, sans coopération ; la coopération caractérise les êtres symbiotiques."
    },
    {
      id: "origins-009",
      question: "Que désigne le terme « êtres symbiotiques » (au sens moderne) ?",
      answers: [
        "Des animaux qui vivent aux dépens de l'Homme, sans coopération",
        "Des organismes liés par une dépendance mutuelle qui génère un résultat positif pour tous",
        "Des animaux sauvages qui évitent tout contact avec l'Homme",
        "Des animaux élevés uniquement pour leur production (viande, œufs...)"
      ],
      correct: [1],
      explanation: "La symbiose est une coopération : une dépendance mutuelle avec un résultat positif pour tous les organismes impliqués. Sans coopération, on parle de commensalisme."
    },
    {
      id: "origins-010",
      question: "Parmi ces propositions, lesquelles caractérisent les êtres commensaux ?",
      answers: [
        "Ils vivent dans des environnements créés et entretenus par les humains",
        "Ils vivent aux dépens de l'Homme, sans coopération",
        "Les fluctuations saisonnières des ressources y sont complètement changées par rapport aux milieux naturels",
        "Ils sont liés à l'Homme par une dépendance mutuelle positive pour les deux",
        "Ils vivent exclusivement dans des milieux naturels, loin des humains"
      ],
      correct: [0, 1, 2],
      explanation: "Les commensaux vivent dans des environnements anthropogéniques (créés et entretenus par l'Homme), où les ressources ne suivent plus les cycles saisonniers naturels, aux dépens de l'Homme et sans coopération."
    },
    {
      id: "origins-063",
      question: "Comment appelle-t-on les environnements créés et entretenus par les humains, où vivent les êtres commensaux ?",
      answers: [
        "Des environnements anthropogéniques",
        "Des niches phylogénétiques",
        "Des écosystèmes primaires",
        "Des milieux symbiotiques"
      ],
      correct: [0],
      explanation: "Ce sont des environnements anthropogéniques : l'Homme les crée et les entretient, ce qui change complètement les fluctuations naturelles (notamment saisonnières) des ressources."
    },
    {
      id: "origins-011",
      question: "Que désigne la phylogénèse ?",
      answers: [
        "Le développement d'un comportement chez un individu au cours de sa vie",
        "L'histoire évolutive d'une espèce ou d'un groupe d'espèces apparentées",
        "L'environnement et le milieu de vie exploités par une espèce donnée",
        "La gestion des maladies et les moyens d'empêcher leur développement"
      ],
      correct: [1],
      explanation: "La phylogénèse étudie les liens de parenté entre groupes d'espèces pour comprendre leur évolution et les classer. Le développement chez l'individu, c'est l'ontogénèse."
    },
    {
      id: "origins-012",
      question: "Qu'est-ce que la niche écologique d'une espèce ?",
      answers: [
        "La liste de tous les comportements propres à une espèce donnée",
        "L'ensemble des ancêtres communs d'un groupe d'espèces apparentées",
        "L'environnement, le milieu de vie qu'elle exploite (géographie, alimentation, comportement)",
        "Le temps qu'un animal consacre à chacune de ses activités sur une journée complète"
      ],
      correct: [2],
      explanation: "La niche écologique est le milieu de vie exploité par une espèce : géographie, alimentation, comportement."
    },
    {
      id: "origins-060",
      question: "Que désigne la prophylaxie ?",
      answers: [
        "La sélection naturelle des individus les moins craintifs face à l'Homme",
        "La coopération mutuelle entre l'Homme et l'animal pour un résultat positif",
        "La gestion des maladies, c'est-à-dire les moyens d'empêcher leur apparition et leur développement",
        "La capacité d'un animal à faire ses propres choix pour assurer sa survie"
      ],
      correct: [2],
      explanation: "La prophylaxie est la gestion des maladies. C'est l'une des raisons pour lesquelles les chiens ont mis du temps à entrer dans la maison."
    },
    {
      id: "origins-006",
      question: "Qu'a perdu en grande partie le chien avec la domestication, ce qui rend son éducation obligatoire ?",
      answers: [
        "Son odorat",
        "Son autodétermination",
        "Sa sociabilité",
        "Sa capacité d'apprentissage"
      ],
      correct: [1],
      explanation: "L'autodétermination est la capacité à faire ses propres choix : le chien en a perdu une grande partie et dépend de l'Homme pour vivre et survivre."
    },
    {
      id: "origins-015",
      question: "Que signifie l'idée « animal enfant / animal produit » ?",
      answers: [
        "L'animal enfant est un jeune animal, l'animal produit est un animal adulte",
        "L'animal enfant (de compagnie) ne peut exister que si l'animal produit (ex : poule industrielle) existe",
        "L'animal produit désigne les animaux issus d'un croisement entre deux espèces",
        "L'animal enfant est un animal que l'on élève uniquement pour son produit (viande, œufs...)"
      ],
      correct: [1],
      explanation: "Notion du cours : l'animal enfant ne peut exister que parce que l'animal produit existe, par exemple la poule industrielle."
    },
    {
      id: "origins-016",
      question: "Comment définit-on une espèce ?",
      answers: [
        "Un ensemble d'individus capables de se reproduire et dont la descendance est fertile",
        "Un ensemble d'individus ayant un aspect physique identique et une taille comparable",
        "Un ensemble d'individus vivant dans la même région et exploitant les mêmes ressources",
        "Un ensemble d'individus partageant les mêmes comportements et le même régime alimentaire"
      ],
      correct: [0],
      explanation: "Une espèce est un ensemble d'individus capables de se reproduire entre eux avec une descendance fertile."
    },

    // ---------- Phylogénèse et classification ----------
    {
      id: "origins-002",
      question: "À quelle famille appartient le chien ?",
      answers: ["Felidae", "Canidae", "Ursidae", "Mustelidae"],
      correct: [1],
      explanation: "Chien : classe Mammifères, ordre Carnivores, sous-ordre Caniformia, famille Canidae, genre Canis, espèce Canis lupus familiaris."
    },
    {
      id: "origins-017",
      question: "Quelles propositions sont exactes sur la classification du chien ?",
      answers: [
        "Il appartient à la classe des Mammifères",
        "Il appartient à l'ordre des Carnivores",
        "Il appartient au genre Canis",
        "Il appartient au sous-ordre des Feliformia",
        "Il appartient à la famille des Ursidae"
      ],
      correct: [0, 1, 2],
      explanation: "Mammifères > Carnivores > Caniformia (et non Feliformia) > Canidae (et non Ursidae) > Canis > Canis lupus familiaris."
    },
    {
      id: "origins-018",
      question: "Quel est le nom scientifique du chien ?",
      answers: [
        "Canis lupus lupus",
        "Canis lupus familiaris",
        "Canis latrans",
        "Vulpes vulpes"
      ],
      correct: [1],
      explanation: "Canis lupus familiaris est le chien. Canis lupus lupus est le loup."
    },
    {
      id: "origins-019",
      question: "Dans un arbre phylogénétique, que signifie le fait qu'il y ait peu de nœuds entre deux espèces ?",
      answers: [
        "Qu'elles vivent dans le même milieu et se nourrissent des mêmes ressources",
        "Qu'elles sont proches en termes de parenté évolutive et génétique",
        "Qu'elles ont le même régime alimentaire et le même mode de vie",
        "Qu'elles sont apparues exactement à la même époque géologique"
      ],
      correct: [1],
      explanation: "Dans l'arbre, le tronc est l'ancêtre commun et les branches sont les espèces : moins il y a de nœuds entre deux espèces, plus elles sont proches en parenté évolutive et génétique."
    },
    {
      id: "origins-020",
      question: "Chien et loup : sont-ils de la même espèce ? Quelles propositions sont exactes ?",
      answers: [
        "Oui, du point de vue biologique",
        "Non, du point de vue de l'écologiste",
        "Non, du point de vue biologique",
        "Oui, du point de vue de l'écologiste",
        "Non, car ils ne peuvent pas se reproduire entre eux"
      ],
      correct: [0, 1],
      explanation: "Chien et loup sont de la même espèce du point de vue biologique, mais d'espèces différentes du point de vue de l'écologiste (niches différentes). Ils peuvent se reproduire entre eux, comme le montre le chien-loup tchécoslovaque."
    },
    {
      id: "origins-022",
      question: "Qu'est-ce qui explique la prédisposition du loup à l'adaptabilité ?",
      answers: [
        "Sa petite taille",
        "Sa grande aire de répartition",
        "Son régime exclusivement carnivore",
        "Sa vie en solitaire"
      ],
      correct: [1],
      explanation: "Le loup occupe une grande aire de répartition, ce qui le prédispose à s'adapter à des milieux variés."
    },

    // ---------- Distinguer loup et chien ----------
    {
      id: "origins-007",
      question: "Quels critères caractérisent le loup (par rapport au chien) ?",
      answers: [
        "Un liseré noir sur l'avant des pattes antérieures",
        "Des oreilles courtes et légèrement arrondies",
        "Une queue courte, jamais en dessous de l'articulation du tarse",
        "Des oreilles longues et pointues",
        "Une virgule blanche en arrière des antérieurs"
      ],
      correct: [0, 1, 2],
      explanation: "Le loup a un liseré noir sur l'avant des pattes antérieures, des oreilles courtes et légèrement arrondies et une queue courte qui ne descend jamais sous le tarse. Oreilles longues et pointues et virgule blanche sont des critères du chien."
    },
    {
      id: "origins-023",
      question: "Quels critères caractérisent le chien (par rapport au loup) ?",
      answers: [
        "Un pelage plus homogène, avec une virgule blanche en arrière des antérieurs",
        "Des oreilles longues et pointues",
        "Une queue longue, qui descend sous l'articulation du tarse",
        "Un liseré noir sur l'avant des pattes antérieures",
        "Un pelage très contrasté, sombre sur le dos et clair sur le ventre"
      ],
      correct: [0, 1, 2],
      explanation: "Le chien a un pelage plus homogène avec une virgule blanche derrière les antérieurs, des oreilles longues et pointues, une queue longue qui descend sous le tarse. Liseré noir et pelage contrasté sont des critères du loup."
    },
    {
      id: "origins-025",
      question: "Parmi ces affirmations sur la queue du loup, laquelle est vraie ?",
      answers: [
        "Elle est longue et descend sous l'articulation du tarse",
        "Elle est courte, jamais en dessous de l'articulation du tarse",
        "Elle est enroulée sur le dos",
        "Elle est de la même longueur que celle d'un chien"
      ],
      correct: [1],
      explanation: "La queue du loup est courte et ne descend jamais sous l'articulation du tarse, contrairement à celle du chien."
    },

    // ---------- Niche écologique et spéciation ----------
    {
      id: "origins-026",
      question: "Qu'est-ce qui a permis à certains loups de survivre dans la nouvelle niche écologique créée par l'Homme ?",
      answers: [
        "Ils étaient plus forts et plus agressifs que les autres loups",
        "Ils étaient plus faibles, mais aussi plus sociables",
        "Ils étaient plus rapides à la course et meilleurs chasseurs",
        "Ils étaient plus grands, donc moins craintifs face à l'Homme"
      ],
      correct: [1],
      explanation: "L'Homme a créé une nouvelle niche qui a permis à certains loups, plus faibles mais plus sociables, de survivre."
    },
    {
      id: "origins-027",
      question: "Quelles caractéristiques décrivent Canis lupus familiaris, issu de cette nouvelle niche ?",
      answers: [
        "Il est dépendant de l'Homme",
        "Il est plus sociable",
        "Il est plus adaptable",
        "Il est indépendant de l'Homme",
        "Il vit exclusivement de proies sauvages"
      ],
      correct: [0, 1, 2],
      explanation: "Nouvelle niche écologique, nouvelle espèce : Canis lupus familiaris, dépendant de l'Homme mais plus sociable et plus adaptable."
    },
    {
      id: "origins-003",
      question: "Que montrent les plus vieux ossements connus (environ −33 000 ans), découverts dans les montagnes de l'Altaï, en Sibérie ?",
      answers: [
        "Un museau plus court que celui du loup",
        "Une réduction de la dentition carnassière",
        "Des traits intermédiaires entre loup et chien : un processus de spéciation en cours",
        "Que tous les chiens actuels descendent directement de cet animal",
        "Un crâne strictement identique à celui du loup"
      ],
      correct: [0, 1, 2],
      explanation: "Ces ossements ont un museau plus court, une dentition carnassière réduite et des traits intermédiaires : une spéciation en cours. Mais cette lignée s'est éteinte : les tentatives avant −15 000 ans n'ont pas survécu."
    },
    {
      id: "origins-028",
      question: "Que sait-on des tentatives de domestication antérieures à −15 000 ans ?",
      answers: [
        "Elles ont donné naissance à toutes les races de chiens que l'on connaît aujourd'hui",
        "Elles n'ont pas survécu : tous les chiens actuels viennent d'une mutation vers −15 000 ans",
        "Elles ont toutes réussi, puis les lignées se sont mélangées pour former le chien actuel",
        "Elles n'ont jamais eu lieu : le chien est apparu uniquement au Néolithique"
      ],
      correct: [1],
      explanation: "Les tentatives de domestication avant −15 000 ans n'ont pas survécu. Tous les chiens actuels proviennent d'une mutation vers −15 000 ans."
    },
    {
      id: "origins-029",
      question: "Parmi ces affirmations sur les estimations de l'ancienneté de la domestication, lesquelles sont vraies ?",
      answers: [
        "Les ossements les plus anciens suggèrent des premières traces vers −30 000 ans",
        "Les données génétiques sur les lignées actuelles la placent vers −15 000 à −20 000 ans",
        "Toutes les méthodes donnent exactement la même date",
        "La domestication date du Néolithique, vers −5 000 ans"
      ],
      correct: [0, 1],
      explanation: "L'archéologie suggère des premières traces vers −30 000 ans, la génétique des lignées actuelles plutôt −15 000 à −20 000 ans : les deux approches ne coïncident pas. Le Néolithique correspond à un autre moment : le passage au chien symbiotique."
    },

    // ---------- Un processus long et non linéaire ----------
    {
      id: "origins-032",
      question: "Comment qualifier le processus de domestication du chien ?",
      answers: [
        "Rapide et linéaire",
        "Long et non linéaire",
        "Instantané, à la suite d'une seule mutation",
        "Terminé dès le Néolithique"
      ],
      correct: [1],
      explanation: "La domestication est un processus long et non linéaire, en 3 phases : familiarisation opportuniste, tentatives de proto-domestication, domestication réussie."
    },
    {
      id: "origins-030",
      question: "Quelle phase de la domestication est marquée par des loups attirés par les déchets humains et la sélection naturelle des individus les moins craintifs ?",
      answers: [
        "La familiarisation opportuniste",
        "La proto-domestication",
        "La domestication réussie",
        "La création des races de compagnie"
      ],
      correct: [0],
      explanation: "Phase 1, la familiarisation opportuniste : les loups sont attirés par les déchets humains et les moins craintifs sont sélectionnés naturellement (possible avant −30 000 ans)."
    },
    {
      id: "origins-031",
      question: "Quelles caractéristiques décrivent la phase de proto-domestication ?",
      answers: [
        "Le cas de l'Altaï, il y a environ 33 000 ans",
        "Des changements morphologiques partiels",
        "Des lignées instables, souvent éteintes",
        "Une intégration durable dans les sociétés humaines",
        "La fondation génétique de tous les chiens actuels"
      ],
      correct: [0, 1, 2],
      explanation: "Phase 2 : le cas de l'Altaï, des changements morphologiques partiels, des lignées instables et souvent éteintes. L'intégration durable et la fondation génétique des chiens actuels appartiennent à la phase 3."
    },
    {
      id: "origins-064",
      question: "Que caractérise la domestication réussie (vers −20 000 à −15 000 ans) ?",
      answers: [
        "Une intégration durable dans les sociétés humaines",
        "La fondation génétique de tous les chiens actuels",
        "Des lignées instables, souvent éteintes",
        "Des loups simplement attirés par les déchets humains"
      ],
      correct: [0, 1],
      explanation: "Phase 3 : intégration durable dans les sociétés humaines et fondation génétique de tous les chiens actuels. Les lignées instables relèvent de la phase 2, l'attrait pour les déchets de la phase 1."
    },
    {
      id: "origins-049",
      question: "Qu'est-ce qui caractérise la période allant d'environ −30 000 à −5 000 ans ?",
      answers: [
        "Une familiarisation à l'Homme",
        "La sélection naturelle et artificielle des individus les plus familiers",
        "Le passage du chien commensal au chien symbiotique",
        "L'apparition des races de chiens de compagnie",
        "La diabolisation du chien en Occident"
      ],
      correct: [0, 1, 2],
      explanation: "De −30 000 à −5 000 ans a lieu la domestication réelle : familiarisation, sélection naturelle et artificielle des plus familiers, passage du commensal au symbiotique. Les races de compagnie et la diabolisation sont bien plus tardives."
    },

    // ---------- Du chien commensal au chien symbiotique ----------
    {
      id: "origins-004",
      question: "Quelle période voit le passage du chien commensal au chien symbiotique, avec la sédentarisation des populations humaines ?",
      answers: [
        "Le Moyen-Âge, avec la lutte contre le loup",
        "Le Néolithique (environ −5 000 av. J-C)",
        "Le Paléolithique, avec les premières familiarisations",
        "Le XIXe siècle, avec l'industrialisation"
      ],
      correct: [1],
      explanation: "Au Néolithique, la sédentarisation installe une coopération mutuelle (berger, garde, chasse...) : le chien devient symbiotique."
    },
    {
      id: "origins-033",
      question: "Quels sont des exemples de coopération mutuelle entre l'Homme et le chien symbiotique ?",
      answers: [
        "Le chien de berger",
        "Le chien de garde",
        "Le chien de chasse",
        "Le chien de compagnie sur le canapé",
        "Le chien de salon de la noblesse"
      ],
      correct: [0, 1, 2],
      explanation: "La coopération symbiotique : berger, garde, chasse (et traction). Les chiens de compagnie n'apparaissent que beaucoup plus tard : chiens de salon aux Temps modernes, canapé au milieu du XXe siècle."
    },
    {
      id: "origins-034",
      question: "Selon les anthropologues, qu'est-ce qui n'aurait pas été possible sans le chien ?",
      answers: [
        "L'agriculture",
        "La sédentarisation",
        "L'écriture",
        "Le commerce maritime"
      ],
      correct: [0],
      explanation: "Les anthropologues pensent que l'agriculture n'aurait pas été possible sans le chien."
    },
    {
      id: "origins-035",
      question: "De quel type de chien sont dérivés les chiens de guerre ?",
      answers: [
        "Du lévrier",
        "Du mastiff",
        "Du berger",
        "Du spitz"
      ],
      correct: [1],
      explanation: "Les chiens de guerre sont dérivés du mastiff. La traction était assurée par des molosses et des chiens de montagne."
    },

    // ---------- Du parasite au meilleur ami de l'Homme ----------
    {
      id: "origins-036",
      question: "Pourquoi le chien est-il diabolisé en Occident au Moyen-Âge ?",
      answers: [
        "Selon l'idéologie chrétienne, le chien est synonyme de rage",
        "La rage est liée à la peste",
        "Le chien noir représente le diable dans les soirées de sorcières",
        "L'Église l'avait déclaré animal sacré",
        "Il était devenu trop rare pour être utile"
      ],
      correct: [0, 1, 2],
      explanation: "Au Moyen-Âge, le chien est synonyme de rage, la rage est liée à la peste, et le chien noir représente le diable dans les soirées de sorcières."
    },
    {
      id: "origins-005",
      question: "Quel souverain donne une dimension officielle à la lutte contre le loup en créant le corps de la louveterie ?",
      answers: ["Louis XIV", "Napoléon", "Charlemagne", "Clovis"],
      correct: [2],
      explanation: "Charlemagne crée la louveterie (VIIIe siècle). Plus tard, la Révolution française abolit le privilège de chasse et le loup est définitivement exterminé du territoire."
    },
    {
      id: "origins-052",
      question: "Quel événement abolit le privilège de chasse et mène à l'extermination définitive du loup sur le territoire français ?",
      answers: [
        "La Révolution française",
        "La création de la louveterie",
        "L'industrialisation de la société occidentale",
        "La fin de l'Antiquité"
      ],
      correct: [0],
      explanation: "La Révolution française abolit le privilège de chasse, et l'espèce est ensuite définitivement exterminée du territoire."
    },
    {
      id: "origins-037",
      question: "Jusqu'au XIXe siècle, comment est considéré un chien qui n'a pas d'utilité ?",
      answers: [
        "Comme un animal sacré",
        "Comme un parasite",
        "Comme un membre de la famille",
        "Comme un animal de prestige"
      ],
      correct: [1],
      explanation: "Jusqu'au XIXe siècle, si le chien n'est pas d'utilité, c'est un parasite (un nuisible, parfois chassé et consommé)."
    },
    {
      id: "origins-013",
      question: "Quelles raisons expliquent que les chiens aient eu du mal à entrer dans la maison ?",
      answers: [
        "La prophylaxie : la gestion des maladies",
        "Le pouvoir d'achat : un chien inutile coûte cher",
        "Leur refus d'y entrer",
        "Leur incapacité à apprendre",
        "Leur trop petite taille"
      ],
      correct: [0, 1],
      explanation: "Deux raisons notées dans le cours : la prophylaxie (gestion des maladies) et le pouvoir d'achat (des chiens inutiles)."
    },
    {
      id: "origins-039",
      question: "Aux Temps modernes, à qui sont principalement destinées les races de chiens de compagnie ?",
      answers: [
        "Aux paysans, pour garder les fermes",
        "Aux nobles et aux bourgeois",
        "Aux bergers, pour mener les troupeaux",
        "Aux chasseurs, pour la chasse à courre"
      ],
      correct: [1],
      explanation: "Aux Temps modernes apparaissent les races de chiens de compagnie, principalement destinées aux nobles et aux bourgeois."
    },
    {
      id: "origins-038",
      question: "Dans quel contexte apparaît le chien de compagnie ?",
      answers: [
        "Dans une société occidentale qui s'industrialise",
        "Au moment de la sédentarisation du Néolithique",
        "Pendant la lutte contre le loup au Moyen-Âge",
        "À la fin de l'Antiquité"
      ],
      correct: [0],
      explanation: "Le chien de compagnie apparaît avec une société occidentale qui s'industrialise."
    },
    {
      id: "origins-040",
      question: "À quelle période le chien de compagnie se popularise-t-il et entre-t-il dans les maisons, parfois jusque sur le canapé ou dans le lit ?",
      answers: [
        "Au Néolithique, avec la sédentarisation",
        "Au Moyen-Âge, avec les premières lignées occidentales",
        "Au milieu du XXe siècle (années 1950)",
        "Au XVIIe siècle, aux Temps modernes"
      ],
      correct: [2],
      explanation: "C'est vers le milieu du XXe siècle que le chien de compagnie se popularise et rentre dans les maisons."
    },
    {
      id: "origins-041",
      question: "Dans certains pays pauvres, que reste le chien aujourd'hui ?",
      answers: [
        "Un animal sacré que l'on protège de toute maladie",
        "Un nuisible qui vit dehors et dont on appréhende les maladies (zoonoses)",
        "Un animal de traction employé exclusivement pour les travaux agricoles",
        "Un animal de compagnie de luxe réservé aux familles les plus aisées"
      ],
      correct: [1],
      explanation: "Dans certains pays pauvres, le chien reste un nuisible qui vit dehors et dont on appréhende les maladies (zoonoses)."
    },
    {
      id: "origins-008",
      question: "Quel est le premier animal de la frise des animaux domestiqués (dès le Paléolithique) ?",
      answers: ["Le cheval", "Le bovin", "La chèvre", "Le chien"],
      correct: [3],
      explanation: "Le chien est le premier animal de la frise, avant les animaux d'élevage du Néolithique (bovin, porc, chèvre, cheval...)."
    },
    {
      id: "origins-044",
      question: "Quelles races sont citées en exemple comme races de compagnie de plus de 15 kg, quasiment inexistantes jusqu'ici ?",
      answers: [
        "Le Staff",
        "L'Eurasier",
        "Le Husky",
        "Le Pékinois",
        "Le Samoyède"
      ],
      correct: [0, 1],
      explanation: "Il n'existe quasiment aucune race spécifique à la compagnie de plus de 15 kg : le Staff et l'Eurasier sont cités (Bully et Pomsky sont de futures races)."
    },

    // ---------- Chronologie ----------
    {
      id: "origins-045",
      question: "Quelles sont les races primitives apparues au milieu de l'Antiquité ?",
      answers: [
        "Les Lupoïdes",
        "Les Molossoïdes",
        "Les Braccoïdes",
        "Les Graïoïdes",
        "Les Terrioïdes"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Les races primitives du milieu de l'Antiquité : Lupoïdes, Molossoïdes, Braccoïdes et Graïoïdes."
    },
    {
      id: "origins-046",
      question: "Lesquelles de ces races comptent parmi les premières races encore présentes aujourd'hui (fin de l'Antiquité) ?",
      answers: [
        "Le Husky",
        "Le Samoyède",
        "Le Pékinois",
        "Le Labrador",
        "Le Bouledogue français"
      ],
      correct: [0, 1, 2],
      explanation: "À la fin de l'Antiquité apparaissent les premières races encore présentes aujourd'hui : Husky, Lévrier afghan, Saluki, Shar-peï, Pékinois, Samoyède, Malamute."
    },
    {
      id: "origins-065",
      question: "Lesquelles de ces races comptent aussi parmi les premières races encore présentes aujourd'hui (fin de l'Antiquité) ?",
      answers: [
        "Le Lévrier afghan",
        "Le Saluki (lévrier persan)",
        "Le Shar-peï",
        "Le Malamute",
        "Le Berger allemand",
        "Le Caniche"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Premières races encore présentes : Husky, Lévrier afghan, Saluki, Shar-peï, Pékinois, Samoyède, Malamute."
    },
    {
      id: "origins-047",
      question: "Que se passe-t-il entre −5 000 ans et la fin de l'Antiquité ?",
      answers: [
        "Le chien se spécialise, avec un renforcement progressif de la coopération mutuelle (berger, garde, chasse)",
        "Le chien est diabolisé en Occident, à cause de la rage et de la peste",
        "Les premières tentatives de domestication ont lieu entre le chien et le loup",
        "Le chien devient un animal de salon, destiné aux nobles et aux bourgeois"
      ],
      correct: [0],
      explanation: "De −5 000 ans à la fin de l'Antiquité, le chien se spécialise avec le renforcement de la coopération mutuelle : chien de berger, de garde, de chasse."
    },
    {
      id: "origins-048",
      question: "Quelles affirmations sont exactes sur le chien au Moyen-Âge ?",
      answers: [
        "La sélection des chiens « d'utilité » se renforce",
        "Les premières lignées occidentales apparaissent (chasse, garde, berger)",
        "Sans utilité, le chien est considéré comme un nuisible, parfois chassé et consommé",
        "Les races de compagnie destinées aux nobles apparaissent",
        "Le chien entre dans les maisons, parfois jusque dans le lit"
      ],
      correct: [0, 1, 2],
      explanation: "Moyen-Âge : sélection renforcée des chiens d'utilité, premières lignées occidentales, chien sans utilité considéré comme nuisible. Les races de compagnie datent des Temps modernes, l'entrée dans les lits du milieu du XXe siècle."
    },

    // ---------- Le chien moderne ----------
    {
      id: "origins-053",
      question: "Parmi ces propositions, lesquelles font partie des « six points » qui définissent le chien moderne ?",
      answers: [
        "Descendant du loup",
        "Héritier d'un prédateur",
        "Une grande diversité d'individus",
        "Victime de la mode",
        "Un animal totalement autodéterminé",
        "Une race unique et uniforme"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Les six points : descendant du loup, dépendance à l'Homme, héritage de prédateur, partageant notre foyer, diversité d'individus, victime de la mode. Le chien a au contraire perdu une grande partie de son autodétermination, et aucune autre espèce n'est aussi diverse."
    },
    {
      id: "origins-059",
      question: "Parmi ces affirmations sur le chien par rapport aux autres animaux domestiqués, laquelle est vraie ?",
      answers: [
        "C'est l'animal le plus façonné par l'Homme, domestiqué depuis plus de 30 000 ans",
        "C'est l'animal domestiqué le plus récent, apparu après les animaux d'élevage",
        "C'est l'animal le moins modifié par l'Homme, resté proche de son ancêtre sauvage",
        "C'est le seul animal domestiqué qui ne dépend pas de l'Homme pour vivre"
      ],
      correct: [0],
      explanation: "Descendant du loup, le chien est domestiqué depuis plus de 30 000 ans : c'est l'animal le plus façonné par l'Homme."
    },
    {
      id: "origins-055",
      question: "Parmi ces affirmations sur l'héritage de prédateur du chien, laquelle est vraie ?",
      answers: [
        "La domestication l'a totalement effacé : le chien n'a plus aucune prédisposition de prédateur",
        "Il ne concerne que les chiens de chasse, sélectionnés pour leur instinct de poursuite",
        "La domestication a fortement assoupli son comportement, mais des prédispositions persistent, plus ou moins marquées selon les individus",
        "Il a disparu chez les chiens de compagnie, mais reste très marqué chez les chiens de garde"
      ],
      correct: [2],
      explanation: "Le chien est l'héritier d'un des plus grands prédateurs du monde : la domestication a fortement assoupli son comportement, mais il reste sujet à des prédispositions, plus ou moins marquées selon les individus."
    },
    {
      id: "origins-058",
      question: "Parmi ces affirmations sur la relation actuelle entre l'Homme et le chien (« partageant notre foyer »), lesquelles sont vraies ?",
      answers: [
        "C'est une évolution très récente de la relation Homme-chien",
        "Le chien est l'animal à la relation la plus privilégiée avec l'Homme",
        "Il est parfois associé à la famille comme membre à part entière",
        "C'est une relation qui existe depuis le Néolithique sous cette forme",
        "Le chien reste un animal qui vit toujours dehors"
      ],
      correct: [0, 1, 2],
      explanation: "Le chien partage notre foyer : c'est une évolution très récente, avec la relation la plus privilégiée, parfois comme membre de la famille à part entière."
    },
    {
      id: "origins-054",
      question: "Parmi ces affirmations sur la diversité des chiens, lesquelles sont vraies ?",
      answers: [
        "Aucune autre espèce ne présente une telle diversité de types morphologiques et comportementaux",
        "Il existe plus de 350 races au LOF",
        "On passe du chihuahua d'environ 1 kg au mastiff d'environ 100 kg",
        "Il n'existe qu'une cinquantaine de races",
        "Tous les chiens ont la même taille à quelques kilos près"
      ],
      correct: [0, 1, 2],
      explanation: "Aucune autre espèce n'est aussi diverse : plus de 350 races au LOF, du chihuahua d'environ 1 kg au mastiff d'environ 100 kg."
    },
    {
      id: "origins-056",
      question: "Pourquoi dit-on que le chien est « victime de la mode » ?",
      answers: [
        "Parce que les phénomènes de mode vont souvent à l'encontre de la compatibilité entre les besoins de l'animal et le cadre de vie proposé par ses maîtres",
        "Parce que les chiens à la mode sont sélectionnés pour vivre plus longtemps et en meilleure santé",
        "Parce que la mode change chaque année les besoins alimentaires et les soins des chiens",
        "Parce que seuls les chiens de grande taille sont à la mode et deviennent difficiles à garder en appartement"
      ],
      correct: [0],
      explanation: "Dans une société où l'image est primordiale, la mode va souvent à l'encontre de la compatibilité entre les besoins du chien et le cadre de vie proposé par ses maîtres."
    }
  ]
});
