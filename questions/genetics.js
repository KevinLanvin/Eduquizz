// Theme 3 — Course 3: Sélection génétique et prédispositions comportementales
// (question format: see questions/origins.js)
//
// Sources: the course summary and the Lexique only. No very precise dates
// (e.g. the years the breeds were created or recognized, the years of the studies).
// The FCI groups list is not covered: the course says it is not to be learned by heart.
//
// A notion that appears in several courses is asked only once, in the oldest theme.
// Removed on purpose (never reuse these ids):
//   002 functions of the early dogs      -> origins-033 / origins-047
//   003 first primitive breeds           -> origins-045 / origins-046
//   008 morphotypes (lupoïdes...)        -> origins-045
//   041 dog as a fashion object          -> origins-056
//   061, 063, 070 genes x environment    -> ethology-052 / ethology-054 / ethology-074
(window.THEMES = window.THEMES || []).push({
  id: "genetics",
  title: "Sélection génétique et héritabilité",
  shortTitle: "Génétique",
  questions: [
    // ---------- Définitions clés ----------
    {
      id: "genetics-001",
      question: "Que désigne la sélection fonctionnelle ?",
      answers: [
        "La sélection des chiens pour favoriser la prépondérance de caractéristiques comportementales avantageuses (chasse, garde, berger, combat, guerre)",
        "La sélection des chiens sur des critères esthétiques, pour obtenir des individus originaux et surprenants",
        "La sélection naturelle qui élimine les individus les plus craintifs d'une population sauvage",
        "La sélection de reproducteurs au hasard dans une population, sans critère particulier"
      ],
      correct: [0],
      explanation: "La notion d'utilité intervient très vite dans l'évolution de l'espèce canine : on sélectionne les chiens pour favoriser des caractéristiques comportementales avantageuses (chasse, garde, berger, combat, guerre)."
    },
    {
      id: "genetics-004",
      question: "Qu'est-ce qu'un standard et un livre des origines ?",
      answers: [
        "Des documents établis à partir d'individus sélectionnés dans une population ancienne et relativement stable (première façon de créer une race)",
        "Des documents qui listent toutes les maladies héréditaires connues chez une race donnée, pour guider les éleveurs",
        "Des documents qui classent les races en groupes selon leur morphologie, leur origine géographique et leurs aptitudes",
        "Des documents qui recensent les croisements réalisés entre deux espèces animales différentes, par exemple chien et loup"
      ],
      correct: [0],
      explanation: "Établir un standard et un livre des origines à partir d'individus sélectionnés dans une population ancienne et relativement stable est la première façon de créer une race."
    },
    {
      id: "genetics-005",
      question: "Qu'est-ce que le métissage ?",
      answers: [
        "Le croisement de plusieurs races existantes",
        "Le croisement avec une autre espèce animale",
        "La conservation d'un changement génétique d'abord considéré comme une anomalie",
        "La sélection d'individus dans une population ancienne et stable"
      ],
      correct: [0],
      explanation: "Métissage = croisement de plusieurs races existantes. Le croisement avec une autre espèce est l'hybridation."
    },
    {
      id: "genetics-006",
      question: "Qu'est-ce que la mutation génétique, comme voie de création de race ?",
      answers: [
        "La conservation d'un changement génétique, d'abord considéré comme une anomalie chez la race initiale, pour en faire une nouvelle race à part entière",
        "Le croisement de plusieurs races existantes pour obtenir une race nouvelle, aux caractères intermédiaires",
        "Le croisement avec une autre espèce animale pour obtenir une race nouvelle, dite hybride",
        "L'établissement d'un standard et d'un livre des origines à partir d'une population ancienne et stable"
      ],
      correct: [0],
      explanation: "La mutation génétique : on conserve un changement génétique, d'abord vu comme une anomalie de la race initiale, pour créer une nouvelle race (ex : Welsh Corgi Pembroke)."
    },
    {
      id: "genetics-007",
      question: "Qu'est-ce que l'hybridation ?",
      answers: [
        "Le croisement avec une autre espèce animale",
        "Le croisement de plusieurs races existantes",
        "La conservation d'une mutation génétique, d'abord vue comme une anomalie",
        "La sélection d'une tare uniquement, sans autre critère"
      ],
      correct: [0],
      explanation: "Hybridation = croisement avec une autre espèce animale (ex : chien-loup tchécoslovaque)."
    },
    {
      id: "genetics-009",
      question: "Que dit le cours de l'épigénétique ?",
      answers: [
        "C'est le transfert d'une partie de notre vécu via le génome, avec un effet très faible",
        "C'est la modification du génotype d'une population au fil des générations par la sélection",
        "C'est l'expression du génotype dans un environnement donné",
        "C'est un indicateur statistique de la part génétique d'un trait dans une population"
      ],
      correct: [0],
      explanation: "L'épigénétique est le transfert d'une partie de notre vécu via le génome, avec un très faible pourcentage : un effet noté comme très faible."
    },

    // ---------- Le renard argenté ----------
    {
      id: "genetics-010",
      question: "Qui a mené l'étude de domestication expérimentale du renard argenté, et à quelle époque ?",
      answers: [
        "Dimitry Belyaev, dans les années 1950, dans un institut russe de génétique",
        "Konrad Lorenz, dans les années 1930, dans un institut allemand de zoologie",
        "Nikolaas Tinbergen, dans les années 1960, dans une université britannique",
        "Ivan Pavlov, au début du XXe siècle, dans un laboratoire russe de physiologie"
      ],
      correct: [0],
      explanation: "L'étude a été réalisée dans les années 1950 par Dimitry Belyaev, à l'Institut de Cytologie et Génétique de l'Académie des Sciences russe."
    },
    {
      id: "genetics-011",
      question: "Sur quel critère les renards reproducteurs étaient-ils sélectionnés ?",
      answers: [
        "Des réactions peu marquées à l'approche de l'Homme (parmi les 10 % de renards les moins réactifs)",
        "Une fourrure plus claire et plus dense que celle des autres renards de la population",
        "Une grande taille et une forte condition physique, pour obtenir des portées plus nombreuses",
        "Une docilité acquise par un dressage intensif dès le plus jeune âge"
      ],
      correct: [0],
      explanation: "Les reproducteurs (30 mâles et 100 femelles) étaient choisis parmi les 10 % de renards aux réactions les moins marquées à l'approche de l'Homme, grâce à un test comportemental de plus de 50 critères."
    },
    {
      id: "genetics-012",
      question: "Quel était l'objectif de départ de cette étude ?",
      answers: [
        "Faciliter la production de fourrure",
        "Créer un animal de compagnie pour les familles",
        "Comprendre l'origine du chien domestique",
        "Étudier l'agressivité du renard sauvage"
      ],
      correct: [0],
      explanation: "À la base, l'objectif était de faciliter la production de fourrure (notes du cours)."
    },
    {
      id: "genetics-013",
      question: "Quels résultats sont observés dans l'expérience du renard argenté ?",
      answers: [
        "Après 10 générations, environ 18 % des renards sont apprivoisés",
        "Après 30 à 35 générations, 70 à 80 % des renards sont apprivoisés",
        "Dans la population de renards sauvages sans sélection, l'agressivité envers l'Homme reste constante au fil des générations",
        "Après 10 générations, tous les renards sélectionnés sont déjà apprivoisés",
        "Dans la population de renards sauvages sans sélection, l'agressivité diminue elle aussi peu à peu"
      ],
      correct: [0, 1, 2],
      explanation: "10 générations : 18 % apprivoisés ; 30 à 35 générations : 70 à 80 %. La population sauvage non sélectionnée garde une agressivité constante : c'est la preuve de l'héritabilité comportementale."
    },
    {
      id: "genetics-014",
      question: "Qu'est-ce que l'expérience du renard argenté met en évidence ?",
      answers: [
        "L'héritabilité comportementale : la sélection sur un comportement le fait évoluer au fil des générations",
        "Le fait que l'apprivoisement s'acquiert uniquement par l'apprentissage de chaque individu",
        "Le fait que l'épigénétique suffit à transmettre un comportement en quelques générations",
        "Le fait que la domestication du chien s'est faite en moins de deux générations"
      ],
      correct: [0],
      explanation: "C'est la preuve de l'héritabilité comportementale. L'épigénétique (transfert du vécu) a un effet très faible, et 30 générations restent un délai rapide mais pas immédiat."
    },
    {
      id: "genetics-015",
      question: "Que révèle l'analyse « genome wide » chez le renard ?",
      answers: [
        "Un locus de « domestication » sur le chromosome 12",
        "Ce locus est lié au caractère apprivoisé/agressif",
        "Ce locus a aussi été mis en évidence dans la domestication du chien",
        "Un gène unique qui explique à lui seul la couleur du pelage",
        "Aucun point commun avec la domestication du chien"
      ],
      correct: [0, 1, 2],
      explanation: "L'analyse a identifié un locus de domestication sur le chromosome 12 du renard, associé au caractère apprivoisé/agressif, également retrouvé dans la domestication du chien."
    },
    {
      id: "genetics-016",
      question: "Quels types de modifications apparaissent chez les renards sélectionnés sur un unique critère comportemental ?",
      answers: [
        "Des modifications hormonales (adrénaline, dopamine, noradrénaline, mélanine...)",
        "Des modifications morphologiques (couleur blanche, taches, oreilles tombantes...)",
        "Des modifications comportementales (plus joueurs, plus curieux, moins de peur...)",
        "Une disparition complète du pelage",
        "Une agressivité accrue envers l'Homme"
      ],
      correct: [0, 1, 2],
      explanation: "Sélectionner un seul critère comportemental entraîne des effets hormonaux, morphologiques et comportementaux : le renard passe de l'apprivoisement à la domestication."
    },
    {
      id: "genetics-017",
      question: "Quelles modifications morphologiques apparaissent chez ces renards ?",
      answers: [
        "L'apparition de la couleur blanche",
        "Des rayures et des taches sur le pelage",
        "Des oreilles tombantes",
        "Un museau plus long et plus fin",
        "Un pelage plus ras"
      ],
      correct: [0, 1, 2],
      explanation: "Apparition de la couleur blanche, de rayures et de taches, d'oreilles tombantes. Ces caractères sont fréquents chez les espèces domestiquées mais très rares chez les animaux sauvages en France."
    },
    {
      id: "genetics-018",
      question: "Quelles modifications comportementales apparaissent chez ces renards ?",
      answers: [
        "Ils sont plus joueurs",
        "Ils sont plus curieux",
        "Ils émettent plus de vocalisations",
        "Ils ont moins de peur",
        "Ils sont plus méfiants envers l'Homme"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Les renards sélectionnés sont plus joueurs, plus curieux, plus vocaux, plus réceptifs et ont moins peur."
    },
    {
      id: "genetics-019",
      question: "Qu'illustre l'évolution des renards sélectionnés ?",
      answers: [
        "Le passage de l'apprivoisement à la domestication, avec des caractéristiques assez proches de celles du chien",
        "Le passage de la domestication à l'état sauvage, avec la perte des caractères acquis",
        "Une simple modification du phénotype, sans aucun changement génétique",
        "Une simple adaptation individuelle, qui ne se transmet pas à la descendance"
      ],
      correct: [0],
      explanation: "L'expérience illustre le passage de l'apprivoisement à la domestication : les renards acquièrent des caractéristiques assez proches de celles du chien."
    },

    // ---------- Spécialisation et principes de sélection ----------
    {
      id: "genetics-020",
      question: "À quoi s'applique le principe de sélection ?",
      answers: [
        "À la spéciation chien-loup",
        "À l'apparition des morphotypes au sein de l'espèce",
        "À l'apparition des races au sein des morphotypes",
        "À l'apparition des lignées au sein des races",
        "À l'apparition des différentes espèces de canidés sauvages"
      ],
      correct: [0, 1, 2, 3],
      explanation: "La sélection s'applique à la spéciation chien-loup, aux morphotypes dans l'espèce, aux races dans les morphotypes et aux lignées dans les races."
    },
    {
      id: "genetics-021",
      question: "Que produit la sélection répétée d'un nombre restreint de reproducteurs au sein d'une population ?",
      answers: [
        "Une sous-population de plus en plus homogène, dont la variabilité est réduite",
        "Une sous-population de plus en plus hétérogène, dont la variabilité augmente",
        "Une population dont tous les individus sont génétiquement identiques",
        "Une population qui retrouve spontanément sa variabilité d'origine"
      ],
      correct: [0],
      explanation: "Population naturelle hétérogène → sélection de quelques reproducteurs → sous-population homogène → nouvelle sélection → sous-population très homogène (variabilité réduite)."
    },

    // ---------- Créer des races ----------
    {
      id: "genetics-022",
      question: "Quelles sont les façons de créer des races présentées dans le cours ?",
      answers: [
        "Partir d'une population existante stable, avec un standard et un livre des origines",
        "Le métissage",
        "La mutation génétique",
        "L'hybridation",
        "Le clonage",
        "La sélection naturelle sans intervention humaine"
      ],
      correct: [0, 1, 2, 3],
      explanation: "4 façons : population existante stable (standard + livre des origines), métissage, mutation génétique, hybridation."
    },
    {
      id: "genetics-023",
      question: "Quelles associations race / façon de créer une race sont exactes ?",
      answers: [
        "Basenji : population existante stable",
        "Eurasier : métissage",
        "Welsh Corgi Pembroke et Cardigan : mutation génétique",
        "Chien-loup tchécoslovaque : hybridation",
        "Eurasier : hybridation",
        "Basenji : mutation génétique"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Basenji = population existante stable ; Eurasier = métissage ; Welsh Corgi = mutation génétique ; chien-loup tchécoslovaque = hybridation."
    },
    {
      id: "genetics-024",
      question: "Que dit le cours du Basenji ?",
      answers: [
        "Il est aussi appelé Terrier du Congo",
        "Il est originaire d'Afrique centrale",
        "Il est déjà décrit sur des peintures rupestres très anciennes",
        "Il est issu d'un croisement entre un chien et un loup",
        "Il est né d'une mutation génétique récente"
      ],
      correct: [0, 1, 2],
      explanation: "Le Basenji, ou Terrier du Congo, est originaire d'Afrique centrale et déjà décrit sur des peintures rupestres vieilles de plusieurs millénaires : c'est l'exemple d'une race créée à partir d'une population stable."
    },
    {
      id: "genetics-025",
      question: "Quelle autre voie est notée dans le cours, avec l'exemple du Berger blanc suisse ?",
      answers: [
        "La sélection d'une tare, uniquement",
        "La sélection d'un standard à partir d'une population stable",
        "Le croisement avec une autre espèce animale",
        "Le croisement de plusieurs races existantes"
      ],
      correct: [0],
      explanation: "Autre voie notée : la sélection d'une tare uniquement (ex : Berger blanc suisse). La première façon reste de repartir d'une population existante homogène."
    },
    {
      id: "genetics-026",
      question: "Que dit le cours des chiens errants de l'île de la Réunion ?",
      answers: [
        "L'isolement géographique est propice à une certaine stabilité comportementale et morphologique",
        "De nombreuses hybridations avec des chiens de races importés perturbent cette stabilité",
        "Le « Royal Bourbon » ne sera probablement pas reconnu par la FCI, car trop de chiens importés polluent le patrimoine génétique",
        "Le « Royal Bourbon » est déjà une race reconnue par la FCI",
        "L'isolement rend cette population très hétérogène"
      ],
      correct: [0, 1, 2],
      explanation: "L'isolement de la Réunion favorise une certaine stabilité, mais les hybridations avec des chiens importés la perturbent : la réponse du cours est que le « Royal Bourbon » ne sera pas reconnu."
    },
    {
      id: "genetics-027",
      question: "Comment l'Eurasier a-t-il été créé ?",
      answers: [
        "Chow Chow × Spitz Loup donne le Wolf Chow",
        "Wolf Chow × Samoyède donne l'Eurasier",
        "Berger allemand × loup donne l'Eurasier",
        "Chow Chow × Samoyède donne directement l'Eurasier"
      ],
      correct: [0, 1],
      explanation: "L'Eurasier est issu d'un métissage en deux étapes : Chow Chow × Spitz Loup → Wolf Chow, puis Wolf Chow × Samoyède → Eurasier."
    },
    {
      id: "genetics-028",
      question: "Que dit le cours du Welsh Corgi ?",
      answers: [
        "Il existe deux races : le Welsh Corgi Cardigan et le Welsh Corgi Pembroke",
        "Le Pembroke est issu d'une mutation génétique (du gène T)",
        "Le Pembroke est issu d'un croisement avec un loup",
        "Le Cardigan est le résultat d'une hybridation entre deux espèces"
      ],
      correct: [0, 1],
      explanation: "Le Welsh Corgi donne deux variétés devenues deux races, Cardigan et Pembroke. Le Pembroke est issu d'une mutation du gène T : l'exemple de la création de race par mutation."
    },
    {
      id: "genetics-029",
      question: "Quel croisement a donné le chien-loup tchécoslovaque ?",
      answers: [
        "Loup des Carpates × Berger allemand",
        "Loup gris d'Amérique × Husky",
        "Chacal doré × Berger allemand",
        "Coyote × Malamute"
      ],
      correct: [0],
      explanation: "Le chien-loup tchécoslovaque vient du croisement entre un loup des Carpates (Canis lupus lupus) et un Berger allemand (Canis lupus familiaris) : l'exemple d'hybridation."
    },

    // ---------- Classification ----------
    {
      id: "genetics-030",
      question: "Quelles associations sont exactes à propos des chiens de montagne et des lévriers (notes du cours) ?",
      answers: [
        "Les chiens de montagne sont plutôt indépendants, intolérants et peu obéissants",
        "Les lévriers ont une sociabilité correcte, peu d'agressivité et un instinct de poursuite",
        "Les chiens de montagne sont très obéissants et très tolérants",
        "Les lévriers sont intolérants et très agressifs"
      ],
      correct: [0, 1],
      explanation: "Chiens de montagne : indépendance, intolérance, pas d'obéissance. Lévriers : sociabilité correcte, peu d'agressivité, poursuite, obéissance correcte."
    },
    {
      id: "genetics-031",
      question: "Sur quels critères la FCI répartit-elle les races en groupes ?",
      answers: [
        "La morphologie",
        "Les origines géographiques",
        "Les aptitudes",
        "La couleur de la robe",
        "L'âge de la race"
      ],
      correct: [0, 1, 2],
      explanation: "La FCI répartit les races en 10 groupes sur la base de 3 critères : morphologie, origines géographiques, aptitudes. (La liste des groupes n'est pas à connaître par cœur.)"
    },
    {
      id: "genetics-032",
      question: "Combien de races sont reconnues par la FCI, et en combien de groupes sont-elles réparties ?",
      answers: [
        "Environ 360 races, réparties en 10 groupes",
        "Environ 100 races, réparties en 5 groupes",
        "Environ 200 races, réparties en 8 groupes",
        "Environ 500 races, réparties en 12 groupes"
      ],
      correct: [0],
      explanation: "Aujourd'hui, 359 races sont reconnues par la FCI (Fédération Cynologique Internationale), réparties en 10 groupes."
    },

    // ---------- Profils comportementaux par fonction ----------
    {
      id: "genetics-033",
      question: "Quel profil comportemental est noté pour les chiens courants ?",
      answers: [
        "Indépendants",
        "Sociables",
        "Peu agressifs",
        "Très obéissants",
        "Très tenaces avec leurs congénères"
      ],
      correct: [0, 1, 2],
      explanation: "Chiens courants : indépendants, sociables, peu agressifs."
    },
    {
      id: "genetics-034",
      question: "Quel profil comportemental est noté pour les chiens d'arrêt ?",
      answers: [
        "Obéissance",
        "Plutôt sociables et peu agressifs",
        "Endurance",
        "Exploration très développée (jusqu'à 8 h de sniff)",
        "Profil anxieux-agressif",
        "Absence de ténacité"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Chiens d'arrêt : obéissance, plutôt sociables, peu agressifs, endurance, exploration très développée (8 h de sniff)."
    },
    {
      id: "genetics-035",
      question: "Quelle particularité est notée pour certains chiens d'arrêt comme le braque, le Drahthaar ou le Korthals ?",
      answers: [
        "Ils ont été sélectionnés pour le sanglier : ils sont donc tenaces et agressifs",
        "Ils ont été sélectionnés pour la compagnie : ils sont donc très calmes et peu endurants",
        "Ils ont été sélectionnés pour rapporter le gibier d'eau : ils sont donc patients et obéissants",
        "Ils ont été sélectionnés pour garder les troupeaux : ils sont donc indépendants et méfiants"
      ],
      correct: [0],
      explanation: "Attention : le braque et d'autres chiens d'arrêt sélectionnés pour le sanglier (Drahthaar, Korthals) sont tenaces et agressifs."
    },
    {
      id: "genetics-036",
      question: "Quel profil comportemental est noté pour les terriers ?",
      answers: [
        "Une forte ténacité",
        "Une exploration correcte mais pas à 100 %",
        "Des problèmes avec les congénères et les propriétaires",
        "Une obéissance et une patience remarquables",
        "Une très faible ténacité"
      ],
      correct: [0, 1, 2],
      explanation: "Terriers : forte ténacité, exploration correcte mais pas à 100 %, d'où des problèmes avec les congénères et les propriétaires."
    },
    {
      id: "genetics-037",
      question: "Quel profil comportemental est noté pour les retrievers ?",
      answers: [
        "L'obéissance",
        "La sociabilité",
        "L'absence de ténacité",
        "La patience",
        "Une forte ténacité",
        "Une forte agressivité"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Retrievers : obéissance, sociabilité, pas de ténacité, patience."
    },
    {
      id: "genetics-038",
      question: "Quel profil comportemental est noté pour les chiens de garde ?",
      answers: [
        "Des profils anxieux-agressifs : en alerte, ils répondent par l'agression",
        "Des profils très sociables, qui accueillent chaque inconnu avec enthousiasme",
        "Des profils obéissants et patients, sans aucune ténacité",
        "Des profils indépendants et peu agressifs, qui explorent beaucoup"
      ],
      correct: [0],
      explanation: "Chiens de garde : profils anxieux-agressifs (en alerte et qui répondent par l'agression)."
    },
    {
      id: "genetics-039",
      question: "Quel profil comportemental est noté pour les chiens de berger ?",
      answers: [
        "L'obéissance",
        "L'endurance",
        "L'œil fort",
        "Le travail à distance",
        "L'indépendance",
        "La ténacité"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Chiens de berger : obéissance, endurance, œil fort, travail à distance, sociabilité correcte."
    },

    // ---------- Du « bon chien » au « beau chien » ----------
    {
      id: "genetics-040",
      question: "Comment a évolué le critère de sélection du chien ?",
      answers: [
        "D'abord utile (sélection sur les aptitudes), aujourd'hui beau (sélection sur l'apparence)",
        "D'abord beau (sélection sur l'apparence), aujourd'hui utile (sélection sur les aptitudes)",
        "Il a toujours été sélectionné uniquement sur son apparence",
        "Il a toujours été sélectionné uniquement sur ses aptitudes"
      ],
      correct: [0],
      explanation: "Dans un premier temps, le chien devait être utile (critères d'aptitudes). Avec la dominance du chien de compagnie, il ne doit plus être utile, il doit être beau."
    },

    // ---------- Hypertypes morphologiques ----------
    {
      id: "genetics-042",
      question: "Quels problèmes liés à la tête et à la respiration sont cités pour le Bulldog ?",
      answers: [
        "La sténose des narines",
        "Le voile du palais",
        "La macroglossie",
        "La gêne respiratoire",
        "La dysplasie du coude",
        "La dystocie"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Tête et respiration : plis de peau sur le nez, orbites peu profonds, sténose des narines, prognatisme, voile du palais, macroglossie, collapsus laryngé secondaire, gêne respiratoire."
    },
    {
      id: "genetics-072",
      question: "Quels autres problèmes de tête et de respiration sont cités pour le Bulldog ?",
      answers: [
        "Les plis de peau sur le nez",
        "Les orbites peu profonds",
        "Le prognatisme",
        "Le collapsus laryngé secondaire",
        "La dysplasie du coude",
        "La dystocie"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Tête et respiration : plis de peau sur le nez, orbites peu profonds, sténose des narines, prognatisme, voile du palais, macroglossie, collapsus laryngé secondaire, gêne respiratoire."
    },
    {
      id: "genetics-043",
      question: "Quels problèmes liés au squelette et aux organes sont cités pour le Bulldog ?",
      answers: [
        "La dysplasie du coude",
        "La dysplasie de la hanche",
        "Les anomalies vertébrales",
        "La cardiomégalie secondaire",
        "La sténose des narines",
        "L'intolérance à la chaleur"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Squelette et organes : dysplasie du coude, dysplasie de la hanche, anomalies vertébrales, cardiomégalie secondaire."
    },
    {
      id: "genetics-044",
      question: "Quels problèmes liés à la tolérance et à la reproduction sont cités pour le Bulldog ?",
      answers: [
        "L'intolérance à l'effort",
        "L'intolérance à la chaleur",
        "La dystocie",
        "La dysplasie de la hanche",
        "Le prognatisme"
      ],
      correct: [0, 1, 2],
      explanation: "Tolérance et reproduction : intolérance à l'effort, intolérance à la chaleur, dystocie."
    },
    {
      id: "genetics-045",
      question: "Que sont les choanes ?",
      answers: [
        "Des orifices postérieurs internes des fosses nasales, ouverts dans le rhinopharynx, essentiels à la respiration et à la thermorégulation",
        "Des plis de peau situés sur le nez, qui gênent la respiration et la thermorégulation des chiens à museau court",
        "Des cartilages de la trachée, qui peuvent s'affaisser et provoquer un collapsus laryngé chez les chiens brachycéphales",
        "Des orifices antérieurs des narines, par lesquels l'air entre en premier dans la truffe de l'animal"
      ],
      correct: [0],
      explanation: "Les choanes sont des orifices postérieurs internes des fosses nasales, ouverts à l'arrière du palais dans le rhinopharynx : elles jouent un rôle majeur dans la respiration et la thermorégulation."
    },
    {
      id: "genetics-046",
      question: "Comment évolue l'ouverture des choanes lorsqu'on compare un loup, un Am Staff et un carlin ?",
      answers: [
        "Elle est de plus en plus réduite du loup au carlin",
        "Elle est de plus en plus large du loup au carlin",
        "Elle est identique chez les trois, seule la forme du museau change",
        "Elle est plus réduite chez le loup que chez le carlin"
      ],
      correct: [0],
      explanation: "Sur les crânes comparés, l'ouverture des choanes est de plus en plus réduite du loup au carlin : un argument contre les hypertypes morphologiques."
    },
    {
      id: "genetics-047",
      question: "Comment peut-on lutter contre les hypertypes ?",
      answers: [
        "Sensibiliser les éleveurs",
        "Informer les professionnels du chien",
        "Établir des standards excluant toute forme de sélection excessive et non fonctionnelle",
        "Arrêter d'acheter ce type de chien",
        "Interdire toute sélection sur les aptitudes",
        "Supprimer les standards de race"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Lutter contre les hypertypes : sensibiliser les éleveurs, informer les professionnels, établir des standards excluant la sélection excessive et non fonctionnelle, arrêter d'acheter ces chiens."
    },

    // ---------- Héritabilité comportementale ----------
    {
      id: "genetics-048",
      question: "Que dit le cours de la génétique et du comportement du chien ?",
      answers: [
        "La génétique est une composante majeure du comportement canin",
        "La sélection des races puis des lignées s'est faite sur des critères d'aptitudes bien avant que l'esthétique prenne le dessus",
        "Beaucoup de chiens sont aujourd'hui sélectionnés quasi exclusivement sur des critères morphologiques",
        "La génétique n'a aucune influence sur le comportement du chien",
        "La sélection sur l'esthétique a toujours précédé la sélection sur les aptitudes"
      ],
      correct: [0, 1, 2],
      explanation: "La génétique reste une composante majeure du comportement : races et lignées ont été sélectionnées sur des aptitudes bien avant l'esthétique, même si beaucoup de chiens le sont aujourd'hui sur la morphologie."
    },
    {
      id: "genetics-049",
      question: "Quel comportement est associé aux variations des gènes SETDB2 et CYSLTR2 ?",
      answers: [
        "Le comportement d'arrêt (pointing)",
        "Le rapport (retrieving)",
        "Le travail à distance du chien de berger",
        "La motivation alimentaire"
      ],
      correct: [0],
      explanation: "Des variations nucléotidiques dans les gènes SETDB2 et CYSLTR2 contribuent, avec d'autres facteurs, au comportement d'arrêt (pointing)."
    },
    {
      id: "genetics-050",
      question: "Que conclut le cours à propos du comportement d'arrêt ?",
      answers: [
        "Certaines variations génétiques sont statistiquement associées à une plus forte prédisposition à l'arrêt chez les chiens sélectionnés pour ce comportement",
        "L'entraînement et l'environnement contribuent aussi au comportement d'arrêt, avec les facteurs génétiques",
        "Une seule mutation génétique explique entièrement le comportement d'arrêt",
        "L'entraînement n'a aucun rôle dans l'expression du comportement d'arrêt"
      ],
      correct: [0, 1],
      explanation: "Certaines variations génétiques sont associées à une plus forte prédisposition à l'arrêt, mais l'entraînement et l'environnement y contribuent aussi."
    },
    {
      id: "genetics-051",
      question: "Que dit le cours de la mutation du gène POMC chez le labrador ?",
      answers: [
        "C'est une délétion de 14 paires de bases",
        "Elle entraîne une tendance marquée à la prise de poids et une motivation alimentaire accrue",
        "Elle explique une plus forte représentativité parmi les chiens d'assistance",
        "Elle a aussi été détectée chez le Flat Coated Retriever",
        "Elle rend les labradors plus agressifs envers leurs congénères",
        "Elle n'existe que chez le labrador"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Mutation du gène POMC (délétion de 14 paires de bases) : prise de poids et motivation alimentaire accrue, donc davantage de labradors parmi les chiens d'assistance ; détectée aussi chez le Flat Coated Retriever."
    },
    {
      id: "genetics-052",
      question: "Quelle prédisposition comportementale est notée chez le Doberman ?",
      answers: [
        "Il est surreprésenté parmi les chiens présentant des TOC (troubles obsessionnels compulsifs)",
        "Il est surreprésenté parmi les chiens souffrant d'anxiété de séparation",
        "Il est surreprésenté parmi les chiens présentant une agressivité territoriale",
        "Il est surreprésenté parmi les chiens souffrant de phobies des bruits"
      ],
      correct: [0],
      explanation: "Les Doberman sont surreprésentés parmi les chiens présentant des TOC/OCB ; plusieurs gènes, potentiellement à l'origine de cette prédisposition, ont été identifiés."
    },
    {
      id: "genetics-053",
      question: "Qu'est-ce que l'héritabilité (h²) ?",
      answers: [
        "Un indicateur statistique (entre 0 et 1) qui estime, dans une population, la part de la variation d'un trait liée aux différences génétiques entre individus",
        "La probabilité qu'un chien donné transmette un trait donné à chacun de ses chiots à la naissance",
        "La part du comportement d'un chien donné qui est déterminée par ses gènes plutôt que par son éducation",
        "Le nombre de gènes qui contribuent, ensemble, à l'apparition d'un comportement chez une race donnée"
      ],
      correct: [0],
      explanation: "L'héritabilité est un indicateur statistique, propre à une population : la part de la variation d'un trait associée aux différences génétiques entre individus. Ce n'est pas la part génétique d'un individu."
    },
    {
      id: "genetics-054",
      question: "Comment calcule-t-on l'héritabilité (h²) ?",
      answers: [
        "h² = variance génétique / variance phénotypique totale",
        "h² = variance phénotypique totale / variance génétique",
        "h² = variance de l'environnement / variance génétique",
        "h² = variance génétique × variance de l'environnement"
      ],
      correct: [0],
      explanation: "h² = variance génétique / variance phénotypique totale : d'où une valeur comprise entre 0 et 1."
    },
    {
      id: "genetics-055",
      question: "Quelles interprétations de la valeur de h² sont exactes ?",
      answers: [
        "h² proche de 0 : la variation observée est surtout liée à l'environnement",
        "h² modérée (0,2 à 0,5) : les gènes et l'environnement contribuent aux différences comportementales",
        "h² élevée (supérieure à 0,5) : les différences comportementales sont significativement liées à la génétique",
        "h² proche de 0 : la variation observée est surtout liée à la génétique",
        "h² élevée : le comportement ne peut plus être modifié par l'éducation"
      ],
      correct: [0, 1, 2],
      explanation: "h² proche de 0 : surtout l'environnement ; 0,2 à 0,5 : gènes et environnement ; supérieure à 0,5 : différences liées significativement à la génétique."
    },
    {
      id: "genetics-056",
      question: "Chez le Golden Retriever, quels traits présentent une composante génétique très significative (h² supérieure à 0,75) ?",
      answers: [
        "L'agressivité dirigée contre un congénère",
        "L'agressivité dirigée contre un humain",
        "Le rapport (retrieving)",
        "Attendre patiemment dans un groupe de chiens"
      ],
      correct: [0, 1],
      explanation: "Golden Retriever : agressivité envers un congénère (h² = 0,81) et envers un humain (0,77), donc très significativement génétiques. Le rapport et l'attente patiente sont des exemples du Flat Coated Retriever."
    },
    {
      id: "genetics-057",
      question: "Chez le Flat Coated Retriever, quel trait a l'héritabilité la plus élevée ?",
      answers: [
        "Attendre patiemment dans un groupe de chiens (composante significative)",
        "Le rapport, retrieving (composante génétique modérée)",
        "Les deux ont exactement la même héritabilité chez cette race",
        "Aucun des deux traits n'a d'héritabilité mesurable chez cette race"
      ],
      correct: [0],
      explanation: "Flat Coated Retriever : attendre patiemment dans un groupe (h² = 0,74, significatif) contre le rapport (0,34, modéré)."
    },
    {
      id: "genetics-058",
      question: "Que dit l'héritabilité d'un comportement comme « attendre » ou « agresser » ?",
      answers: [
        "Elle dit pourquoi, chez des chiens développés dans les mêmes conditions et placés dans la même situation, certains attendent (ou agressent) plus facilement que d'autres",
        "Elle dit si un chien est capable d'apprendre à attendre (ou à agresser) après une éducation adaptée",
        "Elle dit quelle probabilité a un chien donné d'attendre (ou d'agresser) dans une situation précise donnée",
        "Elle dit quelle part du comportement d'un chien vient de ses gènes et quelle part vient de son éducation"
      ],
      correct: [0],
      explanation: "L'héritabilité ne dit pas si un chien peut apprendre à attendre ou à agresser : ils le peuvent tous. Elle explique les différences entre chiens placés dans les mêmes conditions."
    },
    {
      id: "genetics-059",
      question: "Quels facteurs influencent l'agressivité chez le Cocker Spaniel Anglais, selon l'étude citée ?",
      answers: [
        "Le sexe",
        "La robe",
        "L'héritabilité",
        "L'âge du propriétaire",
        "L'alimentation des chiots"
      ],
      correct: [0, 1, 2],
      explanation: "L'agressivité est influencée par le sexe, la robe et l'héritabilité : c'est une question de race, mais aussi de lignée."
    },
    {
      id: "genetics-060",
      question: "Quelles conclusions de l'étude sur le Cocker Spaniel Anglais sont exactes ?",
      answers: [
        "Les mâles sont plus « dominants »",
        "Le niveau d'agressivité par dominance augmente de la robe tricolore à la robe noire, puis à la robe dorée",
        "L'héritabilité est plus forte via la mère que via les pères",
        "Les femelles sont plus « dominantes » que les mâles",
        "Les robes tricolores sont les plus agressives"
      ],
      correct: [0, 1, 2],
      explanation: "Mâles plus « dominants » ; agressivité croissante tricolore < noir < doré ; héritabilité modeste via les pères (≈ 0,20) et plus forte via la mère (≈ 0,46)."
    },
    {
      id: "genetics-062",
      question: "Que sous-entend le développement d'une capacité par la sélection génétique ?",
      answers: [
        "Le développement d'un besoin, donc la nécessité de fournir au chien un environnement qui y répond tout au long de sa vie",
        "Le développement d'une obéissance naturelle, qui rend l'éducation moins nécessaire",
        "La disparition des autres besoins du chien, qui s'efface devant sa fonction",
        "Une meilleure santé, car la sélection fonctionnelle élimine les tares"
      ],
      correct: [0],
      explanation: "Développer une capacité par la sélection sous-entend le développement d'un besoin, donc de fournir un environnement qui répond à ces besoins tout au long de la vie du chien."
    },
    {
      id: "genetics-064",
      question: "Dans quoi l'héritabilité indique-t-elle des différences majeures entre individus ?",
      answers: [
        "La façon dont un individu va interagir avec son environnement",
        "La facilité ou la difficulté à inhiber ou amplifier un comportement au cours du développement",
        "La capacité ou l'incapacité totale d'apprendre un comportement",
        "Le sexe des chiots dans une portée"
      ],
      correct: [0, 1],
      explanation: "L'héritabilité n'empêche pas l'apprentissage, mais indique des différences majeures dans l'interaction avec l'environnement et dans la facilité à inhiber ou amplifier un comportement."
    },
    {
      id: "genetics-065",
      question: "Quelles affirmations sont exactes sur la prédisposition à un comportement et son modelage ?",
      answers: [
        "Plus un comportement est fortement prédisposé, plus son inhibition est coûteuse",
        "Moins un comportement est prédisposé, plus son amplification demande d'efforts",
        "Plus un comportement est fortement prédisposé, plus il est facile de l'inhiber",
        "Moins un comportement est prédisposé, plus il est facile de l'amplifier"
      ],
      correct: [0, 1],
      explanation: "Plus un comportement est prédisposé, plus l'inhiber est coûteux ; moins il l'est, plus l'amplifier demande d'efforts."
    },
    {
      id: "genetics-066",
      question: "Comment le cours résume-t-il la place de la génétique, de l'éducation et du bien-être ?",
      answers: [
        "La génétique fixe un cadre de possibilités, l'éducation travaille à l'intérieur de ce cadre, et le bien-être impose parfois d'en reconnaître les limites",
        "L'éducation fixe un cadre de possibilités, la génétique travaille à l'intérieur de ce cadre, et le bien-être passe après toute autre considération",
        "La génétique et l'éducation sont indépendantes l'une de l'autre, et le bien-être ne dépend que de l'environnement du chien",
        "La génétique fixe tout, l'éducation ne sert qu'à masquer les défauts du chien et à améliorer son apparence"
      ],
      correct: [0],
      explanation: "La génétique fixe un cadre de possibilités, l'éducation travaille à l'intérieur de ce cadre, et le bien-être impose parfois de savoir en reconnaître les limites."
    },

    // ---------- Équilibre et conclusion ----------
    {
      id: "genetics-067",
      question: "Quels sont les trois cercles du schéma de l'équilibre de la sélection ?",
      answers: [
        "Santé / bien-être",
        "Comportement / aptitudes",
        "Morphologie / fonctionnalité",
        "Origine / pédigrée",
        "Éducation / obéissance"
      ],
      correct: [0, 1, 2],
      explanation: "Les trois cercles : santé/bien-être, comportement/aptitudes, morphologie/fonctionnalité. Leur intersection est l'équilibre."
    },
    {
      id: "genetics-068",
      question: "Que représente l'intersection des trois cercles dans le schéma de la sélection ?",
      answers: [
        "L'équilibre",
        "La perfection de la race",
        "Le standard officiel de la FCI",
        "Le chien de compagnie idéal"
      ],
      correct: [0],
      explanation: "Selon la citation de Jean Grenier, il est aussi noble de tendre à l'équilibre qu'à la perfection : l'intersection des trois cercles, c'est l'équilibre."
    },
    {
      id: "genetics-069",
      question: "Pour un éducateur canin, que recommande la conclusion du cours ?",
      answers: [
        "Connaître la race du chien (origines, aptitudes, prédispositions)",
        "Se renseigner sur la lignée et les parents (pédigrée)",
        "Comprendre les interactions génotype/environnement pour estimer sa marge de manœuvre",
        "Conseiller et renseigner ses clients sur une adoption à venir",
        "Choisir lui-même la race de chaque client, sans tenir compte de ses besoins",
        "Éviter de parler de génétique aux propriétaires pour ne pas les inquiéter"
      ],
      correct: [0, 1, 2, 3],
      explanation: "L'éducateur doit connaître la race, la lignée et les parents, comprendre les interactions génotype/environnement, conseiller les futurs adoptants et lutter contre les hypertypes préjudiciables."
    },
    {
      id: "genetics-071",
      question: "Quelle lignée la conclusion du cours dit-elle encore attendre, après les lignées d'obéissance, de chasse, de ring, de sport et de beauté ?",
      answers: [
        "La lignée de compagnie",
        "La lignée de berger",
        "La lignée de garde",
        "La lignée de sauvetage"
      ],
      correct: [0],
      explanation: "La conclusion se demande : « À quand la lignée de compagnie ? », alors que le chien est avant tout un animal de compagnie."
    }
  ]
});
