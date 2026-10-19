// Theme 9 — Course 9: Agression & prédation
// (question format: see questions/origins.js)
//
// Sources: the course summary and the Lexique only. No very precise dates
// (years of the studies and authors are left out), no journal references.
//
// A notion that appears in several courses is asked only once, in the oldest theme.
// Not asked here on purpose:
//   - agonistic vs affiliative behaviours (definition)  -> social-023
//   - sterilisation of a fearful dog                    -> fear-011
//   - race alone does not predict aggression            -> temperament-017
//
// User request: in the question about the 3 phases of the aggression sequence, the wrong answer
// "Phase consommatoire" must be present (it exists among the phases of the adoption of a behaviour,
// but does not apply to the aggression sequence): see aggression-005.
(window.THEMES = window.THEMES || []).push({
  id: "aggression",
  title: "Agression et prédation",
  shortTitle: "Agression",
  questions: [
    // ---------- L'agression : un comportement naturel ----------
    {
      id: "aggression-001",
      question: "Comment le cours définit-il l'agression ?",
      answers: [
        "Un comportement adaptatif, qui appartient au répertoire des comportements normaux des espèces, à visée sociale",
        "Un comportement anormal et pathologique, provoqué par un trouble du développement ou de la relation",
        "Un comportement uniquement appris, qui n'existe que chez les animaux élevés dans un environnement hostile",
        "Un comportement réflexe, sans aucune fonction sociale, déclenché par la douleur ou la peur"
      ],
      correct: [0],
      explanation: "L'agression est un comportement adaptatif du répertoire normal des espèces, à visée sociale."
    },
    {
      id: "aggression-002",
      question: "Que dit le cours de l'agression comme interaction ?",
      answers: [
        "Elle implique nécessairement deux individus",
        "Le comportement d'un individu ne peut s'interpréter qu'en tenant compte du comportement du deuxième",
        "C'est un enchaînement de comportements graduels avec une communication permanente de signaux",
        "Elle peut s'interpréter en observant un seul des deux individus",
        "Elle se déclenche toujours sans aucun signal préalable"
      ],
      correct: [0, 1, 2],
      explanation: "L'agression est une interaction : on ne peut l'interpréter qu'en tenant compte des deux individus. C'est une séquence graduelle avec communication permanente de signaux."
    },
    {
      id: "aggression-003",
      question: "Qu'est-ce qu'une ressource ?",
      answers: [
        "Un élément permettant de satisfaire un besoin (eau, aliments, couchage, partenaire social ou sexuel, jouets...)",
        "Un espace délimité où le chien réside, trouve l'essentiel de ses ressources et où il se sent en sécurité",
        "Une récompense donnée par le maître pour renforcer un comportement qu'il souhaite voir se répéter ensuite",
        "Un comportement qui contribue à éloigner les individus d'un objet de convoitise partagé dans le groupe"
      ],
      correct: [0],
      explanation: "Une ressource est un élément permettant de satisfaire un besoin : eau, aliments, couchage, partenaire social ou sexuel, jouets..."
    },
    {
      id: "aggression-004",
      question: "Qu'est-ce qu'une séquence d'agression ?",
      answers: [
        "Un enchaînement séquentiel de comportements graduels, avec une communication permanente de signaux",
        "Un comportement unique et soudain, sans signal préalable, dirigé vers un congénère",
        "Une succession de tentatives de prédation, de plus en plus violentes, sur une même proie",
        "Un ensemble de comportements de jeu qui dégénèrent en une vraie attaque"
      ],
      correct: [0],
      explanation: "La séquence d'agression est un enchaînement séquentiel de comportements graduels avec communication permanente de signaux, en 3 phases : menace, attaque, arrêt."
    },
    {
      id: "aggression-005",
      question: "Quelles sont les 3 phases de la séquence d'agression ?",
      answers: [
        "La phase de menace",
        "La phase d'attaque",
        "La phase d'arrêt",
        "La phase consommatoire",
        "La phase d'alerte"
      ],
      correct: [0, 1, 2],
      explanation: "Les 3 phases : menace, attaque, arrêt. La phase consommatoire existe parmi les phases d'adoption d'un comportement, mais ne s'applique pas à la séquence d'agression."
    },
    {
      id: "aggression-006",
      question: "Quelles associations phase / contenu sont exactes pour la séquence d'agression ?",
      answers: [
        "Menace : les signaux de menace",
        "Attaque : les mouvements d'intention",
        "Arrêt : fonction de la réponse de l'agressé et des interactions qui en découlent",
        "Menace : les mouvements d'intention",
        "Attaque : les signaux de menace"
      ],
      correct: [0, 1, 2],
      explanation: "Menace = signaux de menace ; attaque = mouvements d'intention ; arrêt = fonction de la réponse de l'agressé et des interactions qui en découlent."
    },
    {
      id: "aggression-007",
      question: "Quels sont des signaux de la phase de menace ?",
      answers: [
        "Un regard fixe, l'œil grand ouvert, avec une posture debout raide",
        "La crête dorsale et les déplacements lents",
        "Les aboiements graves et les grognements",
        "Le retroussement de la lèvre supérieure",
        "Le léchage répété de la truffe",
        "Le bâillement"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Signaux de menace : regard fixe, crête dorsale, déplacements lents, aboiements graves, grognements, retroussement de la lèvre, oreilles redressées, contractions des lèvres, projection du corps vers l'avant."
    },
    {
      id: "aggression-070",
      question: "Quels sont d'autres signaux de la phase de menace ?",
      answers: [
        "Les oreilles redressées et tournées vers l'avant",
        "La contraction horizontale des lèvres (« pucker »)",
        "La contraction verticale des lèvres (découvrement des dents)",
        "La queue basse, serrée entre les pattes",
        "Le léchage de la truffe"
      ],
      correct: [0, 1, 2],
      explanation: "Suite des signaux de menace : oreilles redressées vers l'avant, contraction horizontale puis verticale des lèvres."
    },
    {
      id: "aggression-071",
      question: "Quels sont les derniers signaux de la phase de menace dans la gradation ?",
      answers: [
        "Les oreilles aplaties et tournées vers le bas",
        "La projection du corps vers l'avant (bouche ouverte)",
        "Le détournement du regard",
        "Le roulement sur le dos"
      ],
      correct: [0, 1],
      explanation: "En fin de gradation : oreilles aplaties et tournées vers le bas, puis projection du corps vers l'avant, bouche ouverte."
    },
    {
      id: "aggression-008",
      question: "Comment les signaux de menace et les mouvements d'attaque sont-ils organisés ?",
      answers: [
        "Par gradation conditionnelle contrôlée",
        "Au hasard, sans aucun ordre, selon l'excitation du moment",
        "Toujours dans le même ordre fixe, quels que soient les individus et la situation",
        "Par simple imitation du comportement observé chez l'adversaire"
      ],
      correct: [0],
      explanation: "Les signaux de menace comme les mouvements d'attaque se déroulent par gradation conditionnelle contrôlée."
    },
    {
      id: "aggression-009",
      question: "Quels sont les types de morsure de la phase d'attaque ?",
      answers: [
        "La morsure à vide",
        "La morsure ouverte",
        "La morsure fermée",
        "La morsure tenue",
        "Les morsures multiples",
        "La morsure de soumission",
        "La morsure d'apaisement"
      ],
      correct: [0, 1, 2, 3, 4],
      explanation: "Mouvements d'intention de la phase d'attaque : morsure à vide, ouverte, fermée, tenue, morsures multiples."
    },
    {
      id: "aggression-010",
      question: "Quelles associations type de morsure / définition sont exactes ?",
      answers: [
        "Morsure à vide : simulation de morsure (snapping)",
        "Morsure ouverte : poser la bouche ouverte sur une partie du corps du partenaire, sans la fermer",
        "Morsure fermée : fermer les mâchoires sur une partie du corps du partenaire, puis lâcher",
        "Morsure tenue : maintenir les mâchoires fermées sur une partie du corps du partenaire",
        "Morsure ouverte : fermer les mâchoires sur le partenaire, puis lâcher",
        "Morsure tenue : simuler une morsure sans contact"
      ],
      correct: [0, 1, 2, 3],
      explanation: "À vide = simulation ; ouverte = bouche ouverte posée ; fermée = mâchoires fermées puis lâcher ; tenue = mâchoires maintenues ; multiples = répétition."
    },
    {
      id: "aggression-011",
      question: "Que peut faire l'individu antagoniste pendant la phase d'arrêt ?",
      answers: [
        "Éviter ou fuir",
        "Émettre des signaux ritualisés qui inhibent la motivation à le mettre à distance (comportements infantiles, soumission)",
        "Émettre des comportements d'agression",
        "Contracter des alliances",
        "Se coucher et s'endormir sur place",
        "Relancer une séquence de prédation"
      ],
      correct: [0, 1, 2, 3],
      explanation: "L'antagoniste peut éviter ou fuir, émettre des signaux ritualisés (soumission), répondre par de l'agression ou contracter des alliances."
    },
    {
      id: "aggression-012",
      question: "Quels paramètres font varier l'ordre et l'intensité de la séquence d'agression ?",
      answers: [
        "L'appartenance ou non des individus à la même espèce",
        "L'appartenance ou non au même groupe social",
        "Le fait que les individus se connaissent ou non",
        "Le fait que l'adversaire déclenche ou non un comportement de prédation",
        "La saison de l'année",
        "Le nombre d'heures de sommeil de l'agresseur"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Paramètres : même espèce ou non, même groupe social ou non, individus qui se connaissent ou non, conflit déjà interrompu avant la fin, adversaire qui déclenche la prédation."
    },
    {
      id: "aggression-013",
      question: "Quelles affirmations sont exactes sur ces paramètres ?",
      answers: [
        "Les agressions sont moins violentes dans un groupe ajusté",
        "Deux individus qui ne se connaissent pas peuvent se jauger par des comportements agressifs sans intensité réelle",
        "Si deux individus ont déjà été séparés avant la fin d'un conflit, ils risquent de reprendre l'échange où il s'est arrêté, avec une intensité plus forte à chaque rencontre",
        "Si l'adversaire déclenche un comportement de prédation chez l'agresseur, il y a un risque de mise à mort",
        "Les agressions sont plus violentes dans un groupe ajusté",
        "Deux individus qui ne se connaissent pas s'attaquent toujours avec une intensité maximale"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Groupe ajusté = agressions moins violentes ; inconnus = jauge sans intensité réelle ; conflit interrompu = reprise plus forte ; déclenchement de la prédation = risque de mise à mort."
    },

    // ---------- Facteurs d'agressivité ----------
    {
      id: "aggression-014",
      question: "Quels sont des facteurs internes d'agressivité ?",
      answers: [
        "Les prédispositions génétiques (race, lignée, ascendants, individu)",
        "Le tempérament de l'individu",
        "Les facteurs hormonaux",
        "Le sexe de l'individu, entier ou stérilisé",
        "Le budget-temps (taux d'activité et besoins d'activité)",
        "La qualité de la relation au maître"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Facteurs internes : génétique, tempérament, hormones, sexe (entier/stérilisé), éventuels troubles physiologiques ou psychologiques. Budget-temps et relation au maître sont des facteurs externes."
    },
    {
      id: "aggression-015",
      question: "Quels sont des facteurs externes d'agressivité ?",
      answers: [
        "Le développement ontogénique (socialisation, familiarisation, éducation)",
        "L'environnement (stress, bruits, espace, emplacement du panier ou de la gamelle)",
        "Le budget-temps (taux d'activité et besoins d'activité)",
        "Les frustrations et la qualité de la relation au maître",
        "Les prédispositions génétiques",
        "Les facteurs hormonaux"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Facteurs externes : développement, environnement, budget-temps, frustrations, qualité de la relation au maître."
    },
    {
      id: "aggression-016",
      question: "Que dit le cours des races de chiens de garde et de police ?",
      answers: [
        "Elles ont un seuil de déclenchement de l'agressivité plus bas que les autres races",
        "Elles ont un seuil de déclenchement de l'agressivité plus haut que les autres races",
        "Elles ont le même seuil de déclenchement que les autres races",
        "Elles ne présentent aucune agressivité si elles sont bien éduquées"
      ],
      correct: [0],
      explanation: "Les races de chiens de garde et de police ont un seuil de déclenchement de l'agressivité plus bas que les autres races."
    },
    {
      id: "aggression-017",
      question: "Parmi ces races, laquelle est citée comme la plus agressive (gradation du plus au moins agressif) ?",
      answers: [
        "Le Teckel",
        "Le Cocker",
        "Le Westie",
        "Le Golden retriever"
      ],
      correct: [0],
      explanation: "La gradation de l'agressivité selon les races, du plus au moins : Teckel, Cockers, Westie, Golden retriever."
    },
    {
      id: "aggression-018",
      question: "Quels développements défavorables rendent les individus plus agressifs ?",
      answers: [
        "L'isolement",
        "Un défaut de socialisation",
        "Un défaut de familiarisation",
        "Un sevrage précoce",
        "Une socialisation précoce et diversifiée",
        "Une éducation régulière"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Les individus développés dans des environnements défavorables (isolement, défaut de socialisation ou de familiarisation, sevrage précoce) sont plus agressifs."
    },
    {
      id: "aggression-019",
      question: "Pourquoi plus d'apprentissages signifie-t-il moins d'agressions ?",
      answers: [
        "Parce que la relation est meilleure et qu'il y a plus d'ajustements",
        "Parce que le chien dépense toute son énergie dans les exercices et n'en a plus pour agresser",
        "Parce que le chien apprend à avoir peur des punitions qui suivent une agression",
        "Parce que les chiens éduqués perdent leurs prédispositions génétiques à l'agressivité"
      ],
      correct: [0],
      explanation: "Plus d'apprentissages = moins d'agressions : meilleure relation, plus d'ajustements."
    },
    {
      id: "aggression-020",
      question: "Que dit le cours du sexe et de l'agressivité ?",
      answers: [
        "Dans la plupart des études, les mâles ressortent comme plus agressifs",
        "Chez Educhien, environ sept chiens sur dix reçus pour agressivité sont des mâles",
        "Parmi ces mâles, 44 % étaient entiers et 56 % stérilisés",
        "Les femelles ressortent comme plus agressives que les mâles",
        "Tous les mâles reçus pour agressivité étaient entiers"
      ],
      correct: [0, 1, 2],
      explanation: "Les mâles sont plus représentés (plus de 70 % chez Educhien comme à l'ENVA). Parmi eux, 44 % entiers et 56 % stérilisés : cause ou conséquence ? D'autres facteurs ?"
    },
    {
      id: "aggression-021",
      question: "Que disent les notes du cours sur la stérilisation et l'agressivité ?",
      answers: [
        "Elle est acceptable pour une agressivité dirigée uniquement vers les autres mâles",
        "Elle n'est pas conseillée si elle est précoce (avant 3 ans) : masse musculaire en baisse, masse graisseuse en hausse, à déconseiller sur les grands chiens",
        "Elle est recommandée systématiquement pour tout chien agressif",
        "Elle est efficace quelle que soit la cible de l'agressivité"
      ],
      correct: [0, 1],
      explanation: "Stérilisation : acceptable pour une agressivité dirigée uniquement vers les autres mâles ; pas de stérilisation précoce (avant 3 ans), à déconseiller sur les grands chiens."
    },

    // ---------- Risques, morsures et cadre légal ----------
    {
      id: "aggression-022",
      question: "Comment évalue-t-on le risque ?",
      answers: [
        "Risque = gravité × probabilité (sévérité potentielle de l'accident et vraisemblance de sa survenue)",
        "Risque = gravité + probabilité, calculées séparément pour chaque race de chien concernée",
        "Risque = taille du chien × nombre de morsures déjà déclarées dans sa race les années précédentes",
        "Risque = niveau d'agressivité du chien, évalué uniquement par son propriétaire au moment de la consultation"
      ],
      correct: [0],
      explanation: "Risque = gravité × probabilité, évalués au travers d'une matrice."
    },
    {
      id: "aggression-023",
      question: "Quelles associations niveau de risque / gravité du dommage sont exactes ?",
      answers: [
        "Risque intolérable : dommage catastrophique",
        "Risque tolérable : dommage marginal",
        "Risque négligeable : dommage négligeable (pas de risques supérieurs à ceux inhérents à l'espèce canine)",
        "Risque intolérable : dommage marginal",
        "Risque négligeable : dommage catastrophique"
      ],
      correct: [0, 1, 2],
      explanation: "Intolérable = catastrophique ; indésirable ou tolérable = critique ; tolérable = marginal ; négligeable = négligeable."
    },
    {
      id: "aggression-024",
      question: "Que montrent les études sur la localisation des morsures ?",
      answers: [
        "Chez les enfants, les morsures touchent surtout la tête, le cou et le visage",
        "Chez les adultes, les morsures touchent plutôt les membres (mains, jambes, membres supérieurs)",
        "Chez les adultes, les morsures touchent surtout la tête et le visage",
        "Chez les enfants, les morsures touchent surtout les jambes"
      ],
      correct: [0, 1],
      explanation: "Enfants : tête, cou, visage. Adultes : membres (mains, membres inférieurs ou supérieurs)."
    },
    {
      id: "aggression-025",
      question: "Que disent les données de l'ANSES sur les séquelles des morsures ?",
      answers: [
        "Environ la moitié des morsures laissent une cicatrice permanente",
        "Près de la moitié des personnes hospitalisées déclarent des séquelles plusieurs mois après l'accident",
        "Les séquelles fonctionnelles sont principalement liées à des morsures aux mains, mais aussi aux jambes ou aux pieds",
        "Les séquelles sont rares : moins de 5 % des cas",
        "Les séquelles concernent surtout la tête chez l'adulte"
      ],
      correct: [0, 1, 2],
      explanation: "50 % de cicatrices permanentes, 47 % de séquelles 16 mois après chez les hospitalisés (23 % de gêne quotidienne), séquelles surtout liées aux mains, jambes et pieds."
    },
    {
      id: "aggression-026",
      question: "Sur quels axes le travail de l'éducateur est-il important face aux morsures ?",
      answers: [
        "L'accompagnement des propriétaires dans la socialisation, la familiarisation et l'éducation",
        "La sensibilisation des propriétaires aux risques de morsure, notamment avec les enfants",
        "L'efficacité de la rééducation des chiens présentant des troubles du comportement",
        "La prévention et la responsabilisation grâce aux signalements de chiens mordeurs",
        "Le remplacement de l'évaluation comportementale par un test de race",
        "La suppression des signalements, pour ne pas stigmatiser les chiens"
      ],
      correct: [0, 1, 2, 3],
      explanation: "4 axes : accompagnement des propriétaires, sensibilisation aux risques, efficacité de la rééducation, prévention et responsabilisation par les signalements."
    },
    {
      id: "aggression-027",
      question: "Parmi ces axes, lesquels sont préventifs et lesquels sont curatifs ?",
      answers: [
        "Préventifs : l'accompagnement des propriétaires et la sensibilisation aux risques",
        "Curatifs : la rééducation des chiens et les signalements",
        "Préventifs : la rééducation des chiens et les signalements",
        "Curatifs : l'accompagnement des propriétaires et la sensibilisation aux risques"
      ],
      correct: [0, 1],
      explanation: "Notes du cours : préventif pour les points 1 et 2 (accompagnement, sensibilisation), curatif pour les points 3 et 4 (rééducation, signalements)."
    },
    {
      id: "aggression-028",
      question: "Que dit le cours des chiffres de morsure en France ?",
      answers: [
        "Seuls les organismes publics recensent les morsures déclarées",
        "Environ 10 000 morsures par an font l'objet d'une mise sous surveillance sanitaire",
        "Près de 500 000 morsures sont déclarées chaque année aux assurances, soit environ 20 fois plus que d'après les sondages",
        "Les chiffres réels de morsure sont parfaitement connus",
        "Les assurances déclarent moins de morsures que les sondages"
      ],
      correct: [0, 1, 2],
      explanation: "Les études sont peu nombreuses : on observe une forte sous-déclaration, avec seulement un millier d'évaluations comportementales enregistrées."
    },
    {
      id: "aggression-029",
      question: "Que dit le cours des races et des morsures ?",
      answers: [
        "Selon la plupart des études, les terriers et les chiens de berger mordent plus que la moyenne",
        "Les retrievers mordent moins que la moyenne",
        "Sans données fiables sur les effectifs de chaque race, comparer les chiens mordeurs à la population générale est impossible",
        "Les retrievers mordent plus que la moyenne",
        "Les races les plus agressives sont les mêmes dans toutes les études"
      ],
      correct: [0, 1, 2],
      explanation: "Terriers et bergers mordent plus, retrievers moins ; mais l'ANSES souligne l'absence de données fiables et que les races identifiées diffèrent selon les études."
    },
    {
      id: "aggression-030",
      question: "Que dit le cours des chiffres de pression de mâchoire (en kg/cm²) ?",
      answers: [
        "La source n'est absolument pas fiable : l'origine des données est incertaine",
        "Aucun chiffre fiable n'a pu être obtenu : il y a trop de variabilité",
        "Plus de muscles des joues et du crâne donne une mâchoire plus puissante",
        "Une mâchoire plus courte est plus puissante",
        "Les chiffres par race sont mesurés précisément",
        "Une mâchoire plus longue est plus puissante"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Le tableau vient d'une thèse elle-même tirée du site d'un éleveur, sans référence. Il faut donc s'en méfier : variabilité, muscles des joues et du crâne, mâchoire plus courte."
    },
    {
      id: "aggression-031",
      question: "Quelles sont des étapes du protocole « chien mordeur » ?",
      answers: [
        "La déclaration en mairie, immédiate par le propriétaire ou le détenteur",
        "Le suivi sanitaire (« suivi morsure ») pendant 15 jours",
        "L'évaluation comportementale par un vétérinaire agréé",
        "Les éventuelles mesures restrictives",
        "La stérilisation obligatoire du chien",
        "Le placement systématique du chien en refuge"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Protocole : déclaration en mairie, suivi sanitaire, évaluation comportementale, puis mesures restrictives selon le résultat."
    },
    {
      id: "aggression-032",
      question: "Quand ont lieu les 3 contrôles du suivi sanitaire après une morsure ?",
      answers: [
        "À 24 heures, à 7 jours et à 15 jours",
        "À 24 heures, à 3 jours et à 30 jours",
        "À 48 heures, à 10 jours et à 3 mois",
        "À 7 jours, à 15 jours et à 30 jours"
      ],
      correct: [0],
      explanation: "Le suivi sanitaire dure 15 jours : le chien subit 3 contrôles sanitaires (24 h, 7 j et 15 j)."
    },
    {
      id: "aggression-033",
      question: "Que dit le cours de l'évaluation comportementale d'un chien mordeur ?",
      answers: [
        "Elle est faite par un vétérinaire inscrit sur la liste départementale des vétérinaires agréés",
        "Elle classe le niveau de dangerosité du chien entre 1 et 4",
        "Elle prend en compte deux paramètres : la possibilité de résurgence et la gravité potentielle de l'atteinte",
        "Elle peut être faite par n'importe quel éducateur canin",
        "Elle classe le chien uniquement selon sa race"
      ],
      correct: [0, 1, 2],
      explanation: "Évaluation par un vétérinaire agréé : niveau de dangerosité de 1 à 4, selon la possibilité de résurgence et la gravité potentielle de l'atteinte."
    },
    {
      id: "aggression-034",
      question: "Quelles mesures restrictives peuvent être imposées après l'évaluation ?",
      answers: [
        "Une formation pour les chiens dangereux (catégorisés)",
        "Le port de la laisse et de la muselière, ou l'isolement",
        "Le renouvellement de la visite d'évaluation comportementale, avec un délai",
        "En cas de danger grave et immédiat, une demande d'euthanasie par le Maire ou le Préfet",
        "Une interdiction définitive de sortir le chien",
        "Une stérilisation imposée"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Mesures possibles : formation, laisse et muselière ou isolement, renouvellement de l'évaluation, et en dernier recours euthanasie en cas de danger grave et immédiat."
    },
    {
      id: "aggression-035",
      question: "Qui doit déclarer une morsure à la mairie, selon l'article L 211-14-2 du Code rural ?",
      answers: [
        "Le propriétaire ou le détenteur, ou tout professionnel qui en a connaissance dans l'exercice de ses fonctions",
        "Uniquement la victime de la morsure, qui doit le faire dans un délai de 24 heures après l'accident",
        "Uniquement le vétérinaire qui a soigné la victime, à l'issue de la consultation d'urgence",
        "Uniquement les services de police ou de gendarmerie, après le dépôt d'une plainte par la victime"
      ],
      correct: [0],
      explanation: "La déclaration incombe au propriétaire ou détenteur, ou à tout professionnel ayant connaissance de la morsure dans l'exercice de ses fonctions : aspect légal à rappeler dans le bilan."
    },
    {
      id: "aggression-036",
      question: "Que dit le cours de l'euthanasie des chiens ?",
      answers: [
        "La première cause d'euthanasie du chien est comportementale",
        "Les trois principales causes sont l'agressivité, l'incontinence et la destruction",
        "En France, près de 50 000 chiens et chats sont euthanasiés chaque année",
        "La première cause d'euthanasie du chien est l'âge",
        "L'agressivité est la cause la moins fréquente"
      ],
      correct: [0, 1, 2],
      explanation: "La première cause d'euthanasie du chien est comportementale : agressivité, incontinence, destruction (près de 50 000 chiens et chats euthanasiés par an)."
    },

    // ---------- Les 10 types d'agression ----------
    {
      id: "aggression-037",
      question: "Quels sont des types d'agression présentés dans le cours ?",
      answers: [
        "L'agression prédatrice",
        "L'agression de distancement",
        "L'agression hiérarchique",
        "L'agression maternelle",
        "L'agression de sevrage"
      ],
      correct: [0, 1, 2],
      explanation: "Les 10 types : prédatrice, de distancement, hiérarchique, par irritation, compétitive et sociale, de jeu, sexuelle, apprise, de meute, redirigée (ici les trois premiers)."
    },
    {
      id: "aggression-068",
      question: "Quels sont d'autres types d'agression présentés dans le cours ?",
      answers: [
        "L'agression par irritation",
        "L'agression compétitive et sociale",
        "L'agression de jeu",
        "L'agression maternelle",
        "L'agression de transfert"
      ],
      correct: [0, 1, 2],
      explanation: "Suite des 10 types : par irritation, compétitive et sociale, de jeu (les trois suivants)."
    },
    {
      id: "aggression-069",
      question: "Parmi ces propositions, lesquelles sont aussi des types d'agression du cours ?",
      answers: [
        "L'agression sexuelle",
        "L'agression apprise",
        "L'agression de meute",
        "L'agression redirigée",
        "L'agression de sevrage",
        "L'agression de rivalité fraternelle"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Derniers types : sexuelle, apprise (notamment les sports de mordant), de meute (ganging), redirigée."
    },
    {
      id: "aggression-038",
      question: "Comment le cours renomme-t-il l'agression dite « territoriale » ?",
      answers: [
        "Agression de distancement",
        "Agression de protection",
        "Agression par irritation",
        "Agression hiérarchique"
      ],
      correct: [0],
      explanation: "« Territoriale » est barré et corrigé en « de distancement » : la notion de territoire chez le chien est très débattue."
    },
    {
      id: "aggression-039",
      question: "Que dit le cours de l'agression de distancement ?",
      answers: [
        "La distance de sécurité correspond à la limite extérieure du « territoire »",
        "Ici, le territoire est l'espace où le chien réside, trouve l'essentiel de ses ressources et où le stress de l'inconnu se dissipe",
        "Le chien peut rapidement trouver son comportement efficace : il s'amplifie souvent peu après son apparition (généralement à la puberté)",
        "La notion de « territoire » chez le chien est très débattue",
        "Le chien fuit toujours l'intrus avant de l'agresser",
        "Le comportement diminue toujours après quelques mois"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Les passants ne font que passer : le chien a l'impression que son comportement fait fuir les intrus. Une stratégie efficace se renforce."
    },
    {
      id: "aggression-040",
      question: "Dans le schéma de l'agression de distancement, comment sont placés les deux cercles autour du chien ?",
      answers: [
        "La distance critique est le cercle intérieur, la distance de sécurité le cercle extérieur",
        "La distance de sécurité est le cercle intérieur, la distance critique le cercle extérieur",
        "Les deux cercles sont confondus : il n'y a qu'une seule distance",
        "La distance critique est celle où l'intrus n'est plus perçu du tout par le chien"
      ],
      correct: [0],
      explanation: "Au centre, le chien ; cercle intérieur = distance critique, cercle extérieur = distance de sécurité (limite du territoire)."
    },
    {
      id: "aggression-041",
      question: "Que dit le cours de l'agression hiérarchique ?",
      answers: [
        "On l'appelle aussi « agression de dominance »",
        "C'est un comportement à visée sociale qui permet d'établir une relation de dominance/subordination entre deux individus",
        "Elle est très ritualisée : signaux de menace, morsures à vide ou ouvertes",
        "Elle est courante entre chiens et permet des ajustements entre deux congénères ou au sein d'un groupe",
        "C'est l'agression la plus courante chez le chien",
        "Elle est déclenchée par la douleur ou la contrainte"
      ],
      correct: [0, 1, 2, 3],
      explanation: "L'agression hiérarchique est très ritualisée et courante entre chiens. Elle est beaucoup plus rare vis-à-vis de l'Homme, possible dans une relation mal maîtrisée."
    },
    {
      id: "aggression-042",
      question: "Que dit le cours de l'agression par irritation ?",
      answers: [
        "C'est l'agression la plus courante chez le chien",
        "Elle survient quand un individu contraint le chien, lui fait peur ou lui fait mal",
        "Son intensité est fonction de l'intensité de la peur ou de la douleur",
        "Elle est généralement contrôlée et peu intense, pour mettre l'autre à distance",
        "C'est l'agression la plus rare chez le chien",
        "Son intensité n'a aucun lien avec la douleur ressentie"
      ],
      correct: [0, 1, 2, 3],
      explanation: "L'agression par irritation est la plus courante. Les douleurs intenses ou peurs paniques peuvent la rendre extrêmement violente ; une éducation coercitive peut la déclencher."
    },
    {
      id: "aggression-043",
      question: "Quels individus sont exposés à l'agression par irritation ?",
      answers: [
        "Le vétérinaire",
        "Le toiletteur",
        "Le propriétaire qui soigne son chien d'une affection douloureuse",
        "L'enfant qui coince le chien pour lui faire un câlin",
        "Le facteur qui passe devant le portail",
        "Un chien inconnu qui passe dans la rue"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Exposés : le vétérinaire, le toiletteur, le propriétaire devant soigner son chien, l'enfant qui coince le chien. Le passant devant le portail relève de la distance de sécurité."
    },
    {
      id: "aggression-044",
      question: "Quelles ressources peuvent être protégées dans l'agression compétitive et sociale ?",
      answers: [
        "Une ressource alimentaire (gamelle, os, gamelle d'eau)",
        "Une ressource sociale (un congénère familier ou un membre de la famille)",
        "Une ressource liée au repos (couchage, canapé, lit, coffre de voiture)",
        "Des objets divers (jouets, chaussure ramassée dans la maison)",
        "Un territoire de promenade",
        "La laisse du maître"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Protection de ressources alimentaires, sociales, de repos ou d'objets divers : agression générée par le désir d'obtenir ou de conserver une ressource."
    },
    {
      id: "aggression-045",
      question: "Où réside le problème dans l'agression compétitive et sociale ?",
      answers: [
        "Dans la valeur que le chien attribue à la ressource : si elle est vitale, la méthode coercitive est inutile",
        "Dans la dominance du chien, qui doit toujours être corrigée par des méthodes coercitives appliquées systématiquement",
        "Dans la taille de la ressource, qui doit être assez petite pour ne jamais être convoitée par le chien",
        "Dans le nombre de chiens présents, car un chien seul ne protège jamais une ressource qu'il possède"
      ],
      correct: [0],
      explanation: "Ces problèmes étaient autrefois traités comme de la dominance, de façon coercitive. Tout dépend de la valeur que le chien attribue à la ressource."
    },
    {
      id: "aggression-046",
      question: "Que dit le cours de l'agression de jeu ?",
      answers: [
        "Le jeu est essentiel au développement (locomotion, socialisation, prédation, agression, sexualité)",
        "Il est constitué de simulacres de comportements de prédation et d'agression",
        "L'excitation ou un stimulus peuvent le faire dégénérer en une vraie attaque",
        "Le propriétaire doit toujours être en mesure de réguler ces comportements si besoin",
        "Le jeu ne comporte aucun simulacre d'agression",
        "Un jeu ne peut jamais dégénérer en vraie agression"
      ],
      correct: [0, 1, 2, 3],
      explanation: "L'individu peut perdre le contrôle et passer d'une agression simulée à une agression réelle."
    },
    {
      id: "aggression-047",
      question: "Qu'est-ce que le « mobbing » ?",
      answers: [
        "Du harcèlement : un comportement qu'on ne peut définir ni comme du jeu ni comme de l'agression",
        "Une agression ritualisée qui établit une relation de dominance entre deux individus",
        "Une poursuite de prédation lancée par un groupe de chiens sur une proie",
        "Un comportement de jeu normal, sans risque de dégénérer en une vraie attaque"
      ],
      correct: [0],
      explanation: "Les éthologues parlent de « mobbing » : harcèlement, comportement qu'on ne peut définir ni comme du jeu, ni comme de l'agression."
    },
    {
      id: "aggression-048",
      question: "Que dit le cours des débordements du jeu en groupe ?",
      answers: [
        "Ils sont particulièrement courants dans les groupes de chiots et de jeunes adultes",
        "Les simulacres d'agression s'intensifient quand les chiens sont en groupe",
        "Un premier individu qui perd le contrôle risque d'entraîner d'autres individus dans une agression de meute",
        "Ils n'arrivent que chez les chiens âgés",
        "Ils ne concernent jamais les groupes de chiots"
      ],
      correct: [0, 1, 2],
      explanation: "En groupe, l'intensification des simulacres est courante chez les chiots et jeunes adultes : le risque est l'agression de meute."
    },
    {
      id: "aggression-049",
      question: "Que dit le cours de l'agression sexuelle ?",
      answers: [
        "Elle est manifestée par des chiens mâles vis-à-vis de femelles (ou de mâles castrés)",
        "Ils cherchent à les contraindre à l'accouplement, par des comportements agressifs pouvant aller jusqu'à la morsure",
        "Elle est nettement plus problématique quand le chien chevauche une femme ou un enfant et grogne ou mord quand on le repousse",
        "Elle peut être rattachée à une forme d'agression compétitive et sociale (protection d'une ressource sexuelle)",
        "Elle est manifestée par les femelles vis-à-vis des mâles",
        "Elle ne concerne jamais l'Homme"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Agression de mâles vis-à-vis de femelles ou de mâles castrés, parfois envers l'Homme, rattachable à une protection de ressource sexuelle."
    },
    {
      id: "aggression-050",
      question: "À quoi correspond notamment l'agression apprise, d'après les notes du cours ?",
      answers: [
        "Aux sports de mordant",
        "À l'agility",
        "Au canicross",
        "À la médiation animale"
      ],
      correct: [0],
      explanation: "L'agression apprise n'est pas détaillée dans le cours ; les notes manuscrites indiquent qu'il s'agit notamment des sports de mordant."
    },
    {
      id: "aggression-051",
      question: "Que dit le cours de l'agression de meute (ganging) ?",
      answers: [
        "Elle est caractérisée par la présence d'au moins 3 individus",
        "Un agresseur déclenche les hostilités et d'autres individus rejoignent le conflit, agressant la plupart du temps le plus faible",
        "L'agressivité est un comportement très contagieux",
        "Il faut être vigilant dans les cours collectifs et les balades collectives, notamment avec les nouveaux venus",
        "Elle est caractérisée par la présence de deux individus seulement",
        "Les chiens ne s'acharnent jamais sur un seul individu"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Les chiens s'acharnent généralement sur un seul individu, avec surenchère pouvant aller jusqu'à la mise à mort. Phénomène présent chez les espèces sociales : équidés, primates, poules..."
    },
    {
      id: "aggression-052",
      question: "Que dit le cours de l'agression redirigée ?",
      answers: [
        "Elle est provoquée par une situation de frustration",
        "Le chien veut agresser un autre individu mais ne peut pas y accéder (situation la plus courante)",
        "Il décharge son agressivité ou son excitation sur la première chose à proximité (souvent la laisse ou le maître)",
        "En laisse ou derrière un grillage, il peut mordre son maître ou un congénère",
        "Elle est provoquée par une douleur intense",
        "Elle est toujours dirigée vers l'individu à l'origine de la frustration"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Frustré de ne pas accéder à ce qu'il veut, le chien décharge sur ce qui est proche : souvent la laisse ou le maître."
    },
    {
      id: "aggression-053",
      question: "Que fait un chien très enthousiaste qui ne peut pas accéder à quelque chose d'attrayant (redirection par excitation) ?",
      answers: [
        "Il décharge sa frustration sur la laisse ou les vêtements, avec peu d'agressivité envers d'autres individus",
        "Il attaque violemment l'objet de son enthousiasme dès qu'il parvient enfin à l'atteindre et à le saisir",
        "Il se couche et attend patiemment, sans réagir, que la situation évolue et que l'accès se libère",
        "Il mord toujours le premier individu proche avec la même intensité qu'une agression redirigée agressive"
      ],
      correct: [0],
      explanation: "En cas d'excitation, on retrouve peu d'agressivité envers d'autres individus : le chien décharge plutôt sa frustration sur la laisse ou les vêtements (situation moins courante, moins intense)."
    },

    // ---------- L'agression prédatrice ----------
    {
      id: "aggression-054",
      question: "Que dit le cours de l'agression prédatrice ?",
      answers: [
        "C'est l'agression d'un individu se comportant en prédateur vers un autre considéré comme une proie",
        "Prédation = pas de communication",
        "Une familiarisation précoce et intense à une autre espèce inhibe la tendance prédatrice",
        "Elle commence par une phase de menace avec des signaux de communication",
        "Une familiarisation précoce augmente la tendance prédatrice"
      ],
      correct: [0, 1, 2],
      explanation: "Pas de communication dans la prédation : d'où l'importance d'une familiarisation précoce interspécifique (chats, poules, moutons... et tous types d'humains, comme les enfants)."
    },
    {
      id: "aggression-055",
      question: "Quelle est la séquence de prédation sur une petite proie ?",
      answers: [
        "Poursuite et capture (saut en avant pattes jointes)",
        "Saisie de la proie à la nuque",
        "Secouement (mise à mort)",
        "Morsure à vide d'avertissement",
        "Menace par grognement"
      ],
      correct: [0, 1, 2],
      explanation: "Petite proie : poursuite/capture, saisie à la nuque, secouement (mise à mort)."
    },
    {
      id: "aggression-056",
      question: "Quelle est la séquence de prédation sur une grande proie ?",
      answers: [
        "La poursuite",
        "La saisie de la proie à la nuque ou aux pattes arrière",
        "La morsure de mise à mort : saisie à la gorge jusqu'à étouffement",
        "Le secouement de la proie",
        "La saisie de la proie par le dos"
      ],
      correct: [0, 1, 2],
      explanation: "Grande proie : poursuite, saisie à la nuque ou aux pattes arrière, morsure de mise à mort (étouffement). Le secouement concerne la petite proie."
    },
    {
      id: "aggression-057",
      question: "Que dit le cours de la prédation entre chiens ?",
      answers: [
        "Le chien est censé intégrer dans le concept « Chiens » tous les individus de sa propre espèce, grands ou petits",
        "Le processus est parfois déficient : certains grands chiens adoptent des comportements de prédation sur leurs congénères les plus petits",
        "En cas d'attaque, l'agression est très violente et risque d'amener rapidement une mise à mort",
        "L'effet de groupe peut être un facteur déclenchant, notamment lors des jeux de poursuite",
        "La prédation entre chiens est impossible puisqu'ils sont de la même espèce",
        "Ce sont les petits chiens qui prédatent les grands"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Il faut être très vigilant avec ce type de chiens : l'excitation du groupe et l'esprit de compétition peuvent amener à des saisies violentes, voire des simulacres de mise à mort."
    },

    // ---------- Expliquer l'agression : schémas et modèles ----------
    {
      id: "aggression-058",
      question: "Que dit le modèle du calcul additionnel des facteurs déclencheurs ?",
      answers: [
        "Les facteurs déclencheurs s'additionnent",
        "L'agression se déclenche quand le seuil de déclenchement est franchi",
        "L'émotion en jeu regroupe le stress, l'excitation et la frustration",
        "Un seul facteur suffit toujours à déclencher l'agression",
        "Les facteurs se compensent entre eux et ne s'additionnent jamais"
      ],
      correct: [0, 1, 2],
      explanation: "Exemple : promenade, puis un enfant qui arrive en courant, puis la tension de la laisse, puis l'enfant qui crie : le dernier facteur fait franchir le seuil."
    },
    {
      id: "aggression-059",
      question: "Quelle est la séquence de la suite réflexe « F.L.I. » ?",
      answers: [
        "Fuite, puis lutte, puis inhibition",
        "Lutte, puis fuite, puis inhibition",
        "Inhibition, puis fuite, puis lutte",
        "Fuite, puis inhibition, puis lutte"
      ],
      correct: [0],
      explanation: "F.L.I. = Fuite, Lutte, Inhibition (l'équivalent des 3F anglais : Flight, Fight, Freeze). L'ordre peut varier à cause des effets de raciation."
    },
    {
      id: "aggression-060",
      question: "Que dit le cours de la suite F.L.I. ?",
      answers: [
        "Dans une situation de stress, le chien est soumis à son instinct : son cerveau reptilien, plus précisément l'hypothalamus, guide ses réactions",
        "En cas d'échec d'une stratégie, le chien essaie une autre stratégie de survie",
        "En cas de succès, la stratégie gagnante est mémorisée et renforcée",
        "L'ordre peut varier à cause des effets de raciation",
        "Ses réactions sont guidées par le cortex préfrontal et la réflexion",
        "L'ordre est identique pour toutes les races"
      ],
      correct: [0, 1, 2, 3],
      explanation: "La suite F.L.I. est guidée par l'instinct (cerveau reptilien, hypothalamus) ; en cas d'échec on change de stratégie, en cas de succès elle est renforcée."
    },
    {
      id: "aggression-061",
      question: "Quelles associations zone / description sont exactes dans le modèle proxémie ?",
      answers: [
        "Zone de confort : le chien ne montre aucun signe de stress ou d'agressivité envers l'antagoniste",
        "Zone d'apprentissage : le chien montre des signes d'inconfort mais reste capable de s'en désintéresser et de présenter des comportements favorables",
        "Zone de risque : le chien présente un comportement agressif, il est difficilement réceptif mais peut ponctuellement présenter un comportement favorable",
        "Zone de danger : le chien attaque de façon immédiate, il est incapable de raisonner",
        "Zone de confort : le chien attaque de façon immédiate",
        "Zone de danger : le chien ne montre aucun signe de stress"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Modèle proxémie : zone de confort, d'apprentissage, de risque et de danger autour du chien."
    },
    {
      id: "aggression-062",
      question: "Dans le modèle proxémie, dans quelle zone le travail doit-il commencer, et laquelle faut-il éviter ?",
      answers: [
        "Il doit commencer dans la zone de confort ; la zone de danger est à éviter",
        "Il doit commencer dans la zone de danger ; la zone de confort est à éviter",
        "Il doit commencer dans la zone de risque ; la zone d'apprentissage est à éviter",
        "Il doit commencer dans la zone d'apprentissage ; la zone de confort est à éviter"
      ],
      correct: [0],
      explanation: "Le travail commence dans la zone de confort ; la zone de risque n'est pas idéale mais pas exclue ; la zone de danger est à éviter."
    },
    {
      id: "aggression-063",
      question: "Que dit la note du cours sur l'activité agressive, dans le modèle activité du Dr Dehasse ?",
      answers: [
        "Elle permet de combler un déficit d'activité générale : l'activité générale est donc à traiter",
        "Elle remplace complètement toutes les autres activités du chien lorsque celui-ci est frustré de façon durable",
        "Elle diminue quand l'activité générale du chien est trop faible, faute d'énergie disponible pour agresser",
        "Elle n'a aucun lien avec l'activité générale du chien, qui se mesure indépendamment du reste de son budget-temps"
      ],
      correct: [0],
      explanation: "L'activité agressive permet de combler un déficit d'activité générale : il faut donc traiter l'activité générale."
    },
    {
      id: "aggression-064",
      question: "Comment utiliser les modèles pour rééduquer ?",
      answers: [
        "Le calcul des facteurs déclencheurs : jouer sur l'habituation progressive, la désensibilisation ou la familiarisation aux facteurs identifiés",
        "La suite F.L.I. : retravailler la fuite comme premier réflexe face au stress ou à l'inconfort",
        "Le modèle proxémie : jouer sur les distances pour renforcer les comportements favorables et réduire les zones de risque et de danger",
        "Le calcul des facteurs déclencheurs sert uniquement à mesurer la dangerosité du chien",
        "Le modèle proxémie sert à choisir la punition adaptée à la zone dans laquelle se trouve le chien"
      ],
      correct: [0, 1, 2],
      explanation: "Ces modèles schématisent l'émergence de l'agressivité et servent à modéliser une rééducation en jouant sur les facteurs déclencheurs, la stratégie de fuite et les distances."
    },

    // ---------- Les solutions et conclusion ----------
    {
      id: "aggression-065",
      question: "Que faut-il faire pour prévenir l'agressivité ?",
      answers: [
        "Socialiser son chien aux congénères",
        "Le familiariser à tous types d'humains et d'animaux avec lesquels on souhaite qu'il interagisse positivement",
        "L'habituer à tous types de situations",
        "L'éduquer pour améliorer le contrôle et la qualité des relations",
        "Attendre les premiers signes d'agressivité avant de commencer à agir",
        "Laisser le chien régler seul ses conflits avec ses congénères"
      ],
      correct: [0, 1, 2, 3],
      explanation: "L'agressivité se traite beaucoup plus efficacement et durablement par la prévention : socialiser, familiariser, habituer et éduquer."
    },
    {
      id: "aggression-066",
      question: "Pourquoi faut-il à tout prix éviter que l'agressivité se manifeste ?",
      answers: [
        "C'est quasiment toujours une stratégie efficace pour le chien : elle risque de devenir sa stratégie privilégiée",
        "Parce qu'une agression, même une seule fois, traumatise définitivement le chien qui l'a subie",
        "Parce que le chien agressif devient forcément moins sociable avec les humains",
        "Parce que l'agressivité est contagieuse et se transmet génétiquement à toute la portée"
      ],
      correct: [0],
      explanation: "L'agressivité permet au chien d'obtenir ce qu'il souhaite (mettre à distance, faire cesser une contrainte, défendre son os), avec en plus un renforcement intrinsèque."
    },
    {
      id: "aggression-067",
      question: "Quelles sont des conclusions du cours sur l'agression ?",
      answers: [
        "L'agressivité fait partie du répertoire comportemental normal du chien",
        "La meilleure arme est la prévention : éduquer le chien, mais aussi l'Humain",
        "Le meilleur moyen de rééduquer est de modéliser, en choisissant le bon modèle",
        "À défaut de toujours pouvoir l'inhiber, l'agressivité doit être contrôlée, maîtrisée et anticipée",
        "L'agressivité est toujours anormale et peut être totalement supprimée",
        "La race suffit à expliquer l'agressivité d'un chien"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Conclusion : agressivité normale, prévention, modélisation pour rééduquer, contrôle et anticipation."
    }
  ]
});
