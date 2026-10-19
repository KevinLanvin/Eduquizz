// Theme 11 — Course 11: La communication chez le chien
// (question format: see questions/origins.js)
//
// Sources: the course summary and the Lexique only. No very precise dates
// (years of the studies and authors are left out), no journal references.
// Not covered: the photos of facial expressions (not identified one by one).
//
// A notion that appears in several courses is asked only once, in the oldest theme.
// Not asked here on purpose:
//   - the definition of the Umwelt and the "monde propre" idea -> ethology-001 (only the order of the
//                                                                  dog's senses is asked here)
//   - the neonatal period and the touch of the foetus            -> development theme
//   - the definition of a stereotypy and its goals               -> budget-016 (a stereotypy is non-functional)
//
// Removed on purpose (never reuse this id): communication-032 ("two supposed goals of a stereotypy": a stereotypy
// is non-functional, see budget-016).
//   - the threat signals (staring, raised posture...)            -> aggression-007 / 070 / 071
//   - Chaser and the 1000 words                                  -> cognition-023
//
// Long lists are split in several questions (see CLAUDE.md).

(window.THEMES = window.THEMES || []).push({
  id: "communication",
  title: "La communication chez le chien",
  shortTitle: "Communication",
  questions: [
    // ---------- Définir la communication ----------
    {
      id: "communication-001",
      question: "Comment définit-on la communication ?",
      answers: [
        "La transmission d'un signal porteur d'informations, d'un émetteur vers un récepteur, par un canal",
        "L'échange de comportements entre deux individus de la même espèce, avec une réponse immédiate de l'autre",
        "L'ensemble des vocalises qu'un animal est capable d'émettre dans son milieu, quelle que soit la situation",
        "La réaction d'un animal à un stimulus du milieu, indépendamment de la présence de tout émetteur"
      ],
      correct: [0],
      explanation: "Communication : transmission d'un signal porteur d'informations, d'un émetteur vers un récepteur, par un canal (Yveline Leroy)."
    },
    {
      id: "communication-002",
      question: "Parmi ces affirmations sur l'histoire de la communication animale, lesquelles sont vraies ?",
      answers: [
        "Jusqu'aux années 1930, on suit la théorie de Darwin : seul l'Homme exprime des idées, sentiments ou émotions, l'animal n'exprime qu'une humeur",
        "Les béhavioristes estiment que la communication se limite au schéma stimuli-réponse",
        "À partir de 1930, grâce aux éthologues objectivistes (Lorenz, Tinbergen), les interactions animales ne sont plus considérées comme de simples humeurs",
        "Les béhavioristes décrivent une communication animale riche et variée",
        "Lorenz et Tinbergen nient toute communication entre animaux"
      ],
      correct: [0, 1, 2],
      explanation: "Trois temps : humeur (Darwin), stimulus-réponse (béhavioristes), puis vraie communication (éthologues objectivistes)."
    },
    {
      id: "communication-003",
      question: "Pourquoi le chien a-t-il besoin de communiquer ?",
      answers: [
        "C'est un animal social, qui ne peut pas vivre seul",
        "Vivre en collectivité implique forcément une communication, efficace ou non",
        "Une défaillance de la communication Homme-chien est souvent à l'origine de troubles",
        "La communication passe souvent simultanément par plusieurs canaux afin d'être plus efficace",
        "Il peut vivre sans communiquer s'il a assez de ressources",
        "Un seul canal de communication suffit toujours"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Le chien est social : communiquer est un besoin."
    },
    {
      id: "communication-004",
      question: "Parmi ces affirmations sur le processus de communication, lesquelles sont vraies ?",
      answers: [
        "Le signal peut être émis volontairement ou involontairement",
        "La réponse à un signal peut être volontaire ou involontaire",
        "Le signal peut être ciblé (aboiement) ou diffusé (marquage)",
        "Le signal est soumis à interprétation : il doit toujours être contextualisé",
        "Le signal est toujours émis volontairement",
        "Un signal se comprend sans tenir compte du contexte"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Un signal s'interprète toujours dans son contexte."
    },

    // ---------- Le modèle cybernétique et la ritualisation ----------
    {
      id: "communication-005",
      question: "Parmi ces affirmations sur le modèle cybernétique de la communication, lesquelles sont vraies ?",
      answers: [
        "Il décrit un enchaînement séquentiel, en « zig zag », des actions des deux partenaires",
        "Le récepteur qui produit sa réponse devient à son tour émetteur, et l'émetteur initial le nouveau récepteur",
        "C'est un dialogue qui relève souvent d'une négociation",
        "L'émetteur reste toujours émetteur et le récepteur toujours récepteur",
        "La communication va toujours dans un seul sens, sans retour"
      ],
      correct: [0, 1, 2],
      explanation: "Dans une interaction, les rôles d'émetteur et de récepteur s'échangent en permanence."
    },
    {
      id: "communication-006",
      question: "Quelles sont des étapes du déroulé du modèle cybernétique ?",
      answers: [
        "La motivation de l'émetteur",
        "La production de signaux ou d'informations par l'initiateur-émetteur",
        "Le traitement des signaux par le receveur",
        "La terminaison de la séquence",
        "La phase d'attaque de l'émetteur",
        "Le renforcement positif de la réponse"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Déroulé : motivation, production, traitement, production en retour, traitement, terminaison de la séquence."
    },
    {
      id: "communication-007",
      question: "Qu'est-ce que la ritualisation ?",
      answers: [
        "La modification du comportement au cours de l'évolution à des fins de communication",
        "Un changement de causalité d'un comportement vers une fonction de communication",
        "Une perte ou une modification de fonction du comportement d'origine",
        "Des signaux compris par tous les individus de l'espèce",
        "L'apprentissage d'un signal par conditionnement au cours de la vie d'un individu",
        "Un signal compris uniquement par l'émetteur qui l'a inventé"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Ritualisation : changement de causalité d'un comportement vers la communication, au cours de l'évolution."
    },
    {
      id: "communication-008",
      question: "Quel est un exemple de ritualisation ?",
      answers: [
        "Le comportement de cour du héron cendré et du cormoran : une agitation rythmique des ailes dérivée du battement avant le vol",
        "Le grognement du chien, dérivé des vocalises émises par le chiot nouveau-né lorsqu'il est séparé de sa mère",
        "Le marquage urinaire du chien, dérivé du simple besoin d'éliminer qui l'accompagne chez le jeune",
        "Le léchage des babines du chien, dérivé du comportement de prise de nourriture observé chez l'adulte"
      ],
      correct: [0],
      explanation: "Exemples : vol ritualisé, alarme, comportement sexuel, comportement parental."
    },
    {
      id: "communication-009",
      question: "Quels comportements du chien n'étaient pas des signaux à l'origine et le sont devenus par évolution et ritualisation ?",
      answers: [
        "Les comportements d'attaque et de prédation",
        "Le mouvement de préparation à la fuite",
        "La demande de soin par les jeunes",
        "Les comportements de protection face à une agression",
        "Les mimiques faciales menaçantes",
        "Le grognement"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Non-signaux : attaque/prédation, préparation à la fuite, demande de soin, protection, respiration, défécation, miction."
    },
    {
      id: "communication-010",
      question: "Quels comportements du chien sont des signaux, issus de l'évolution et de la ritualisation ?",
      answers: [
        "Les mimiques faciales menaçantes, les postures hautes, le grognement et la fixation oculaire",
        "Les comportements d'évitement et les signaux d'apaisement",
        "Les comportements de soumission",
        "Les comportements affiliatifs",
        "La respiration",
        "La défécation"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Le marquage « territorial » est aussi un signal (la notion de territoire n'est pas prouvée chez le chien)."
    },

    // ---------- Les canaux et la multimodalité ----------
    {
      id: "communication-011",
      question: "Quels sont des canaux de communication du chien ?",
      answers: [
        "La communication visuelle",
        "La communication olfactive",
        "La communication auditive",
        "La communication gustative",
        "La communication thermique"
      ],
      correct: [0, 1, 2],
      explanation: "Les 6 canaux : visuel, olfactif, auditif, tactile, positionnement dans l'espace, extrasensoriel."
    },
    {
      id: "communication-012",
      question: "Parmi ces propositions, lesquelles sont des canaux de communication du chien ?",
      answers: [
        "La communication tactile",
        "La communication par le positionnement dans l'espace",
        "La communication extrasensorielle",
        "La communication électrique",
        "La communication magnétique"
      ],
      correct: [0, 1, 2],
      explanation: "Visuel, olfactif et auditif complètent la liste : tactile, positionnement, extrasensoriel."
    },
    {
      id: "communication-013",
      question: "Parmi ces affirmations sur la multimodalité de la communication, lesquelles sont vraies ?",
      answers: [
        "Les émissions peuvent être simultanées, avec des signaux de différents canaux (grogne et montre les dents : acoustique + visuel)",
        "Les émissions peuvent être séquentielles (s'approche, renifle puis mord : visuel + olfactif + tactile)",
        "La communication n'utilise jamais plusieurs canaux à la fois",
        "Les signaux de canaux différents ne peuvent jamais se succéder"
      ],
      correct: [0, 1],
      explanation: "Deux cas : émissions simultanées ou séquentielles de signaux de canaux différents."
    },
    {
      id: "communication-014",
      question: "Dans quel ordre le monde propre (Umwelt) du chien est-il organisé selon ses sens ?",
      answers: [
        "Plutôt olfactif, puis visuel, auditif et tactile",
        "Plutôt visuel, puis olfactif, auditif et tactile",
        "Plutôt auditif, puis visuel, olfactif et tactile",
        "Plutôt tactile, puis auditif, visuel et olfactif"
      ],
      correct: [0],
      explanation: "Le chien a un monde propre plutôt olfactif, puis visuel, auditif et tactile."
    },

    // ---------- La communication visuelle ----------
    {
      id: "communication-015",
      question: "Quelles sont des capacités visuelles du chien ?",
      answers: [
        "Une résolution temporelle de 70 à 80 Hz (50 à 60 Hz chez l'Homme)",
        "Une acuité 4 fois moins bonne que celle de l'Humain",
        "Il voit les objets flous au-delà de 50 cm",
        "Une acuité 4 fois meilleure que celle de l'Humain",
        "Une résolution temporelle inférieure à celle de l'Homme"
      ],
      correct: [0, 1, 2],
      explanation: "Le chien a une meilleure résolution temporelle mais une acuité moins bonne."
    },
    {
      id: "communication-016",
      question: "Parmi ces propositions, lesquelles sont des capacités visuelles du chien ?",
      answers: [
        "Un champ visuel de 250° (180° pour l'Homme)",
        "Il est dichromate : cônes à 2 pigments (jaune et bleu), alors que l'Humain est trichromate",
        "Une vision diurne mais aussi nocturne (plus de bâtonnets, tapetum lucidum)",
        "Il est trichromate (rouge, vert et bleu) comme l'Homme",
        "Son champ visuel est de 180°, comme celui de l'Homme"
      ],
      correct: [0, 1, 2],
      explanation: "Dichromate, champ de 250°, vision nocturne."
    },
    {
      id: "communication-017",
      question: "Pourquoi un film sur un vieux téléviseur apparaît-il comme une série d'images pour le chien ?",
      answers: [
        "Parce que la résolution temporelle du chien est supérieure à celle de ces téléviseurs, inférieure à 80 Hz",
        "Parce que le chien ne distingue pas bien les couleurs affichées par ces téléviseurs et voit des taches",
        "Parce que le chien voit les objets flous au-delà de 50 cm et ne distingue pas les détails",
        "Parce que le chien a un champ visuel beaucoup trop large pour percevoir correctement un écran de télévision"
      ],
      correct: [0],
      explanation: "Les vieux téléviseurs ont une résolution inférieure à 80 Hz : le chien perçoit la discontinuité."
    },
    {
      id: "communication-018",
      question: "Parmi ces affirmations sur la communication visuelle, lesquelles sont vraies ?",
      answers: [
        "Elle s'établit à moyenne distance et de façon simultanée",
        "C'est un canal particulièrement important dans la communication Homme-chien",
        "Elle s'appuie sur les postures, les comportements et mouvements, les mimiques faciales et les micromouvements",
        "Elle s'établit à très longue distance et de façon différée",
        "Elle n'a que peu d'importance dans la communication Homme-chien"
      ],
      correct: [0, 1, 2],
      explanation: "Canal visuel : moyenne distance, simultané, essentiel avec l'Homme."
    },
    {
      id: "communication-019",
      question: "Quelles associations contexte / comportements visuels sont exactes ?",
      answers: [
        "La rencontre : vitesse d'approche, posture d'approche, zone de contact, position d'attente",
        "L'apaisement : postures basses, détournement de tête, léchages, halètement",
        "Le jeu : mobilité importante, abaissement de l'avant du corps, appels à la poursuite, coup de patte",
        "L'apaisement : postures hautes, raidissement, fixation oculaire",
        "Le jeu : immobilité, raidissement et regard fixe"
      ],
      correct: [0, 1, 2],
      explanation: "Les signaux sont volontaires (appel au jeu) ou involontaires (stress)."
    },
    {
      id: "communication-020",
      question: "Quels comportements visuels caractérisent la sexualité et le stress ?",
      answers: [
        "La sexualité : chevauchement, léchage du sexe du congénère, agitation en rond",
        "Le stress : agitation frénétique, léchages, grattages, détournements de regard",
        "La sexualité : abaissement de l'avant du corps et appels à la poursuite",
        "Le stress : vitesse d'approche et position d'attente"
      ],
      correct: [0, 1],
      explanation: "Sexualité : chevauchement, léchage du sexe, agitation en rond. Stress : agitation, léchages, grattages, regard détourné."
    },
    {
      id: "communication-021",
      question: "Parmi ces affirmations sur les mimiques faciales du chien, lesquelles sont vraies ?",
      answers: [
        "Le chien communique beaucoup au travers de ses mimiques faciales",
        "Les couleurs plus marquées sur la face du loup rendent cette communication plus fonctionnelle",
        "Certains chiens sont handicapés par leur morphologie (Briard, Bull-terrier, Bouledogue, Shar-peï), source possible de conflits",
        "On suppose qu'il mime l'Homme dans certaines mimiques, comme le « sourire »",
        "La morphologie n'a aucune influence sur la lisibilité des mimiques",
        "Seules les oreilles transmettent des informations faciales"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Les phénotypes handicapants nuisent à la lisibilité des mimiques."
    },
    {
      id: "communication-022",
      question: "Parmi ces affirmations sur les micromouvements, lesquelles sont vraies ?",
      answers: [
        "Ce sont des informations importantes qui complètent l'interprétation d'une posture, d'une mimique ou d'un mouvement",
        "La queue en fait partie : 7 positions de menace à soumission",
        "La dilatation des pupilles permet de percevoir un stress (peur, agressivité ou excitation)",
        "Le plus important est la mobilité et la direction du regard",
        "Ils remplacent l'interprétation de la posture",
        "La taille des pupilles est le seul indice utile du regard"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Les micromouvements (oreilles, queue, yeux) complètent la lecture d'une posture."
    },
    {
      id: "communication-023",
      question: "Dans le schéma des 7 positions de queue, de haut en bas, à quoi correspond la position la plus haute ?",
      answers: [
        "À la menace",
        "À la soumission",
        "À la neutralité",
        "À la peur"
      ],
      correct: [0],
      explanation: "De haut en bas : menace, intimidation, dominance, neutralité, anxiété, peur, soumission."
    },
    {
      id: "communication-024",
      question: "Quels états correspondent aux positions de queue du schéma ?",
      answers: [
        "La menace",
        "L'intimidation",
        "La dominance",
        "La neutralité",
        "La joie",
        "L'ennui"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Les 7 états : menace, intimidation, dominance, neutralité, anxiété, peur, soumission."
    },
    {
      id: "communication-025",
      question: "Quels états peuvent être exprimés par la position de la queue du chien ?",
      answers: [
        "L'anxiété",
        "La peur",
        "La soumission",
        "L'excitation",
        "La fatigue"
      ],
      correct: [0, 1, 2],
      explanation: "Les trois positions les plus basses : anxiété, peur, soumission."
    },

    // ---------- Les signaux d'apaisement et la stéréotypie ----------
    {
      id: "communication-026",
      question: "Que sont les signaux d'apaisement ?",
      answers: [
        "Un ensemble de postures, de comportements ou de micromouvements permettant d'apaiser une situation",
        "Des signaux de menace atténués qui précèdent toujours une attaque, une fois la montée en tension terminée",
        "Des comportements appris par conditionnement, dans le but d'obtenir une récompense de la part du maître",
        "Des vocalises émises par le chien pour appeler le maître à l'aide lorsqu'il se trouve dans une situation inconfortable"
      ],
      correct: [0],
      explanation: "Les signaux d'apaisement servent à apaiser une situation."
    },
    {
      id: "communication-027",
      question: "Quelle différence y a-t-il entre signaux d'apaisement volontaires et involontaires ?",
      answers: [
        "Volontaires : le chien communique qu'il ne souhaite pas le conflit",
        "Involontaires : le chien extériorise son stress et s'apaise, le récepteur doit comprendre qu'il est stressé",
        "Volontaires : le chien extériorise son stress sans le vouloir",
        "Involontaires : le chien cherche volontairement à apaiser le récepteur"
      ],
      correct: [0, 1],
      explanation: "Dans les deux cas, la situation doit s'apaiser."
    },
    {
      id: "communication-028",
      question: "Parmi ces affirmations sur les signaux d'apaisement, lesquelles sont vraies ?",
      answers: [
        "Ils sont à contextualiser",
        "Il n'existe aucune preuve scientifique, car ils sont utilisés dans de nombreux contextes",
        "Ils évitent ou interrompent l'agression, le stress, la peur",
        "Ils servent à l'apaisement du chien ou de ses vis-à-vis",
        "Ils sont scientifiquement prouvés et univoques",
        "Ils ne servent qu'à provoquer le conflit"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Les signaux d'apaisement sont « l'assurance vie des canidés », mais restent à contextualiser."
    },
    {
      id: "communication-029",
      question: "Quels sont des exemples de signaux d'apaisement ?",
      answers: [
        "Renifler et/ou uriner",
        "Bâiller",
        "Se coucher ou s'asseoir",
        "Montrer les dents",
        "Fixer du regard"
      ],
      correct: [0, 1, 2],
      explanation: "Autres : lever la patte, décrire des cercles, marcher lentement, lécher le nez ou les babines."
    },
    {
      id: "communication-030",
      question: "Parmi ces comportements, lesquels sont des signaux d'apaisement ?",
      answers: [
        "Lever la patte",
        "Décrire des cercles",
        "Marcher lentement",
        "Lécher le nez ou les babines",
        "Se raidir",
        "Poursuivre l'autre individu"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Les signaux d'apaisement incluent aussi les postures de jeu et les mouvements aléatoires."
    },
    {
      id: "communication-031",
      question: "Quels derniers comportements sont des signaux d'apaisement ?",
      answers: [
        "Détourner le regard",
        "Se secouer",
        "Remuer la queue",
        "Gratter",
        "Fixer le regard",
        "Retrousser la lèvre"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Détourner le regard (ou « rassurer »), se détourner, se secouer, remuer la queue, gratter."
    },
    {
      id: "communication-033",
      question: "Parmi ces affirmations sur le Flehmen chez le chien, laquelle est vraie ?",
      answers: [
        "Il n'existe pas aussi marqué que chez d'autres animaux comme le lion, le cheval, le cerf ou le bouquetin",
        "Il est aussi marqué que chez le cheval, et le chien l'utilise pour explorer les odeurs de l'urine",
        "C'est un signal d'apaisement très courant, que l'on observe dans presque toutes les situations de stress",
        "Il n'existe que chez les mâles entiers, au moment où ils détectent des phéromones sexuelles dans l'urine"
      ],
      correct: [0],
      explanation: "Le Flehmen n'existe pas aussi marqué chez le chien."
    },

    // ---------- De l'Homme au chien (visuel) ----------
    {
      id: "communication-034",
      question: "Parmi ces affirmations sur la communication visuelle de l'Homme vers le chien, lesquelles sont vraies ?",
      answers: [
        "Le chien décode nos postures, comportements, mimiques et micromouvements",
        "C'est un facteur d'influence extrêmement important sur son comportement",
        "Nos attitudes peuvent déclencher des troubles du comportement",
        "Nos attitudes peuvent renforcer un trouble du comportement (cercle vicieux)",
        "Le chien ne perçoit pas nos micromouvements",
        "Nos attitudes n'ont aucun effet sur le comportement du chien"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Si nous décodons le chien par le visuel, il peut en faire autant avec nous."
    },
    {
      id: "communication-035",
      question: "Quels signaux de l'Homme faut-il éviter ?",
      answers: [
        "Le stress : raidissement général, tension sur la laisse, démarche lente et saccadée",
        "Le manque de contrôle : gestes hésitants, tremblements, postures alternant postures hautes et basses",
        "L'agressivité : raidissement, mouvements vifs, froncement des sourcils, narines dilatées",
        "Le stress : gestes amples et dynamiques",
        "L'agressivité : gestes lents et détendus"
      ],
      correct: [0, 1, 2],
      explanation: "Stress, manque de contrôle et agressivité sont lus par le chien."
    },
    {
      id: "communication-036",
      question: "Comment communiquer les bons signaux visuels au chien ?",
      answers: [
        "Les postures : se positionner droit, avec assurance, tout en étant détendu",
        "Les mouvements : rester dynamique, marcher si possible, laisse détendue, gestuelle claire et posée",
        "Les mimiques : éviter d'anticiper un comportement du chien par des mimiques anxieuses ou tendues",
        "Les micromouvements : éviter les mouvements nerveux",
        "Se raidir pour montrer son autorité",
        "Tendre la laisse pour garder le contrôle"
      ],
      correct: [0, 1, 2, 3],
      explanation: "On peut transmettre volontairement des signaux positifs."
    },

    // ---------- La communication olfactive ----------
    {
      id: "communication-037",
      question: "Parmi ces affirmations sur l'odorat du chien, lesquelles sont vraies ?",
      answers: [
        "C'est le sens le plus développé",
        "Son épithélium olfactif fait environ 7 000 mm² (35 fois moins chez l'Homme)",
        "Il possède environ 280 millions de neurones olfactifs (4 à 10 fois moins chez l'Homme)",
        "L'odorat est un sens peu développé chez le chien",
        "Son épithélium olfactif a la même surface que celui de l'Homme"
      ],
      correct: [0, 1, 2],
      explanation: "L'odorat est le sens le plus développé du chien."
    },
    {
      id: "communication-038",
      question: "Quelles capacités olfactives du chien l'Homme exploite-t-il ?",
      answers: [
        "La chasse, le pistage et la recherche de personnes (avalanches, décombres)",
        "La recherche de drogues, d'armes, de munitions et d'explosifs",
        "La détection de maladies (cancers, Covid-19...)",
        "La détection de crises de maladies chroniques (épilepsie, diabète)",
        "La détection de séismes",
        "La recherche de minerais précieux"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Le pouvoir de discrimination est performant : entre 2 odeurs humaines, pour le sens d'une piste, pour détecter une crise."
    },
    {
      id: "communication-039",
      question: "Parmi ces affirmations sur la communication olfactive, lesquelles sont vraies ?",
      answers: [
        "Elle s'établit à courte ou longue distance, de façon simultanée ou différée",
        "C'est la perception d'éléments chimiques (phéromones) émis volontairement ou non",
        "Avec l'Homme, elle est unilatérale : nous ne pouvons ni percevoir ni décoder ces signaux",
        "Elle ne s'établit qu'à très courte distance et de façon simultanée",
        "Avec l'Homme, elle est bilatérale : nous percevons les mêmes signaux que le chien"
      ],
      correct: [0, 1, 2],
      explanation: "Le canal olfactif est unilatéral avec l'Homme."
    },
    {
      id: "communication-040",
      question: "Comment définit-on une phéromone dans l'usage courant ?",
      answers: [
        "Une molécule chimique produite par un organisme, qui induit un comportement spécifique chez un autre membre de la même espèce",
        "Une hormone qui agit uniquement à l'intérieur du corps de l'animal qui la produit, sans jamais être émise dans le milieu",
        "Une odeur apprise par conditionnement, qui provoque une réaction chez le chien qui l'a associée à un événement",
        "Un signal sonore à très haute fréquence, inaudible pour l'Homme, qui est émis par le chien pour communiquer à distance"
      ],
      correct: [0],
      explanation: "Définition usuelle d'une phéromone (Lexique)."
    },
    {
      id: "communication-041",
      question: "Par quelles sources les phéromones sont-elles émises ?",
      answers: [
        "Les selles et l'urine",
        "La salive",
        "Les coussinets",
        "Les sacs anaux et les glandes sous les oreilles ou autour de la queue",
        "Les larmes",
        "Le sang"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Les phéromones sont émises par des glandes situées sur la peau ou les muqueuses."
    },
    {
      id: "communication-042",
      question: "Parmi ces affirmations sur la définition stricte d'une phéromone en éthologie, lesquelles sont vraies ?",
      answers: [
        "C'est une molécule simple dont la perception est spécifique aux membres de l'espèce",
        "1 molécule = 1 réaction systématique chez tous les membres de l'espèce",
        "Elle provoque des réponses répétables, stéréotypées et prédéfinies, indépendamment de tout apprentissage",
        "C'est un mélange complexe de molécules dont l'effet dépend de l'apprentissage",
        "Elle provoque des réponses différentes selon l'expérience de chaque individu"
      ],
      correct: [0, 1, 2],
      explanation: "Définition stricte : une molécule, une réaction systématique."
    },
    {
      id: "communication-043",
      question: "Parmi ces affirmations sur les phéromones au sens strict chez les animaux, lesquelles sont vraies ?",
      answers: [
        "Elles sont prouvées chez les insectes (ex : les fourmis)",
        "Chez les mammifères, seule la phéromone mammaire de la lapine a été identifiée",
        "Chez le chien, il est plus juste de parler d'« odeurs » ou de « communication olfactive »",
        "Plusieurs phéromones au sens strict ont été prouvées chez le chien",
        "Le terme « phéromone » est interdit dans la communauté scientifique"
      ],
      correct: [0, 1, 2],
      explanation: "Dans l'usage courant, le terme reste très utilisé, y compris par les scientifiques."
    },
    {
      id: "communication-044",
      question: "Parmi ces affirmations sur les phéromones de stress, lesquelles sont vraies ?",
      answers: [
        "Le chien stressé sécrète involontairement des phéromones de stress, principalement par les coussinets",
        "En cas de stress important, le chien peut vider ses glandes anales, uriner, faire ses selles",
        "Les émissions involontaires (phéromones, urine, selles) sont contrôlées par le système neurovégétatif (nerveux autonome)",
        "Les chiens ont tendance à éviter les endroits marqués par des phéromones de stress",
        "Les phéromones de stress sont émises volontairement pour appeler à l'aide",
        "Les chiens recherchent les endroits marqués par des phéromones de stress"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Penser aux situations imposées au chien : vétérinaire, clubs, expositions, canicross..."
    },
    {
      id: "communication-045",
      question: "Parmi ces affirmations sur les phéromones sexuelles, lesquelles sont vraies ?",
      answers: [
        "Elles sont principalement transmises au travers des urines",
        "Chez les mâles entiers : le chien sent voire lèche des urines, puis salive abondamment et claque des dents, gueule entrouverte",
        "Le marquage urinaire renforce alors l'attrait sexuel",
        "La femelle est réceptive de façon périodique, le mâle 24 h/24, 365 jours par an",
        "La femelle est réceptive toute l'année",
        "Le mâle n'est réceptif que quelques jours par an"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Le chien peut aussi être réceptif aux hormones de la femme, ce qui peut engendrer des comportements compétitifs voire agressifs."
    },
    {
      id: "communication-046",
      question: "Parmi ces affirmations sur le marquage urinaire, lesquelles sont vraies ?",
      answers: [
        "Il induit chez le récepteur une exploration olfactive et un marquage urinaire",
        "Il implique généralement un signal visuel : la patte levée (quasi systématique chez le mâle)",
        "L'urine transmet des informations sur le sexe, l'identité et l'état physiologique",
        "Les mâles marquent 5 fois plus que les femelles",
        "Il n'existe que chez les femelles",
        "L'urine ne transmet aucune information sur l'animal"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Le marquage urinaire transmet des informations et déclenche l'exploration."
    },
    {
      id: "communication-047",
      question: "Parmi ces affirmations sur les urines de chiens stérilisés, lesquelles sont vraies ?",
      answers: [
        "Elles sont flairées plus longtemps que celles de chiens entiers",
        "La stérilisation change donc les informations transmises par l'animal",
        "Elles sont flairées moins longtemps que celles de chiens entiers",
        "La stérilisation ne change pas les informations transmises par l'urine"
      ],
      correct: [0, 1],
      explanation: "Les urines de stérilisés attirent davantage l'exploration olfactive."
    },
    {
      id: "communication-048",
      question: "Pourquoi la fonction territoriale du marquage urinaire n'est-elle pas prouvée ?",
      answers: [
        "Parce qu'un marquage urinaire n'empêche pas les congénères d'entrer : il ne remplit donc pas de fonction territoriale",
        "Parce que seules les femelles marquent leur territoire par l'urine, alors que les mâles ne le font que pour séduire",
        "Parce que les chiens n'ont aucune perception de l'odeur de l'urine laissée par les autres chiens sur leur passage",
        "Parce que le marquage ne se produit que dans l'enceinte de la maison, jamais lors des promenades à l'extérieur"
      ],
      correct: [0],
      explanation: "Selon certains scientifiques, la notion de territoire n'est pas prouvée chez le chien."
    },
    {
      id: "communication-049",
      question: "Parmi ces affirmations sur les phéromones sociales et territoriales, lesquelles sont vraies ?",
      answers: [
        "Elles permettent aux chiens de s'identifier mutuellement : chiens tête-bêche lors d'une rencontre, pour déterminer le sexe",
        "Le grattage après le marquage urinaire permet de déposer des phéromones d'identification",
        "Le léchage du sexe d'un congénère est un comportement d'identification ou d'attrait aux phéromones sexuelles",
        "Le grattage sert uniquement à enterrer l'urine",
        "Le léchage du sexe d'un congénère n'a aucun rôle de communication"
      ],
      correct: [0, 1, 2],
      explanation: "Identification sociale par les phéromones."
    },
    {
      id: "communication-050",
      question: "Peut-on influencer la communication par les phéromones ?",
      answers: [
        "Nous ne maîtrisons pas les phéromones émises par nous ou par un congénère",
        "On ne peut pas influencer instantanément et volontairement ce canal",
        "C'est un paramètre à prendre en compte dans l'analyse d'un comportement",
        "La médecine vétérinaire peut agir : castration (moindre réceptivité aux phéromones sexuelles) ou phéromone synthétique DAP",
        "On peut contrôler volontairement les phéromones qu'on émet",
        "Le DAP est une phéromone sexuelle de synthèse"
      ],
      correct: [0, 1, 2, 3],
      explanation: "La castration et le DAP sont des leviers vétérinaires."
    },
    {
      id: "communication-051",
      question: "Qu'est-ce que le DAP ?",
      answers: [
        "Une phéromone synthétique analogue des phéromones d'attachement néonatales (Dog Appeasing Pheromone)",
        "Une hormone naturelle sécrétée par les coussinets du chien en cas de stress important ou de peur intense",
        "Une molécule sexuelle de synthèse qui augmente la réceptivité des mâles aux femelles en chaleur",
        "Un médicament qui diminue l'activité du système nerveux autonome lors des situations stressantes ou d'excitation"
      ],
      correct: [0],
      explanation: "Le DAP (Dog Appeasing Pheromone) est utilisé en médecine vétérinaire pour apaiser."
    },

    // ---------- La communication auditive ----------
    {
      id: "communication-052",
      question: "Parmi ces affirmations sur les capacités auditives du chien, lesquelles sont vraies ?",
      answers: [
        "Il perçoit les sons jusqu'à 65 kHz (20 kHz chez l'Humain)",
        "Ses oreilles sont mobiles, ce qui renforce fortement ses capacités auditives",
        "Il y a une inégalité des races, ne serait-ce que par le port d'oreilles",
        "La communication auditive est très peu étudiée chez le chien",
        "Il perçoit les mêmes fréquences que l'Homme, jusqu'à 20 kHz",
        "Ses oreilles sont fixes, ce qui limite ses capacités auditives"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Le chien perçoit environ trois fois plus haut en fréquence que l'Humain."
    },
    {
      id: "communication-053",
      question: "Parmi ces affirmations sur la communication auditive, lesquelles sont vraies ?",
      answers: [
        "Elle s'établit généralement à courte et moyenne distance, de façon simultanée",
        "C'est la perception d'éléments sonores émis volontairement par l'émetteur",
        "Avec l'Homme, cette communication bilatérale est assez privilégiée : c'est un des moyens de communication que nous maîtrisons le plus",
        "Elle s'établit à très longue distance, de façon différée",
        "Avec l'Homme, cette communication est unilatérale"
      ],
      correct: [0, 1, 2],
      explanation: "Canal auditif : courte et moyenne distance, simultané, bilatéral avec l'Homme."
    },
    {
      id: "communication-054",
      question: "Parmi ces affirmations sur l'hypertrophie de la communication auditive, lesquelles sont vraies ?",
      answers: [
        "Le chien primitif ne présentait sûrement pas une aussi grande diversité de vocalises que le chien moderne",
        "Le loup ne présente que 4 à 9 vocalises, principalement des hurlements et gémissements",
        "L'aboiement à la chasse serait un non-sens pour un prédateur sauvage, une des principales causes d'échec des chiens sauvages",
        "L'Homme a favorisé l'aboiement pour la chasse (chiens courants) et la garde/défense",
        "Le loup aboie autant que le chien moderne",
        "L'Homme a sélectionné contre l'aboiement dès le début de la domestication"
      ],
      correct: [0, 1, 2, 3],
      explanation: "L'aboiement a été favorisé par la sélection humaine."
    },
    {
      id: "communication-055",
      question: "Comment interpréter les signaux auditifs ?",
      answers: [
        "Les sons graves sont souvent associés à des menaces, une motivation agressive visant à mettre à distance",
        "Les sons aigus sont plutôt caractéristiques d'états de détresse non menaçants",
        "L'interprétation des signaux auditifs seuls est quasiment impossible",
        "Elle doit toujours être contextualisée, avec les postures et mimiques qui accompagnent le signal",
        "Les sons aigus sont toujours des menaces",
        "Un seul son suffit à connaître l'état émotionnel du chien"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Les sons graves : menace ; les sons aigus : détresse non menaçante."
    },
    {
      id: "communication-056",
      question: "Lesquelles de ces propositions correspondent à un type d'aboiement ?",
      answers: [
        "L'aboiement de défense du « territoire » (derrière un grillage ou un portail, lié à de la frustration, avec des postures hautes)",
        "L'aboiement de distanciation (repousser un autre individu, parfois accompagné d'une « charge »)",
        "L'aboiement d'appel au jeu (aboiement aigu)",
        "L'aboiement de faim",
        "L'aboiement d'alerte nocturne"
      ],
      correct: [0, 1, 2],
      explanation: "Les 7 aboiements : défense du territoire, distanciation, appel au jeu, frustration, poursuite, détresse, peur."
    },
    {
      id: "communication-057",
      question: "Parmi ces propositions, lesquelles décrivent un type d'aboiement ?",
      answers: [
        "L'aboiement de frustration (le chien ne peut pas accéder à ce qu'il souhaite)",
        "L'aboiement de poursuite (excitation, très développé chez les chiens courants)",
        "L'aboiement de détresse (le chien s'ennuie ou est coincé)",
        "L'aboiement de peur (anxiété, ou volonté de repousser la menace)",
        "L'aboiement de domination",
        "L'aboiement de joie"
      ],
      correct: [0, 1, 2, 3],
      explanation: "L'aboiement est souvent lié à une source d'excitation positive ou négative, mais pas systématiquement."
    },
    {
      id: "communication-058",
      question: "Parmi ces affirmations sur le grognement, lesquelles sont vraies ?",
      answers: [
        "Le grognement de jeu est le plus courant (tirer sur une corde, jouer à la lutte)",
        "Le grognement d'excitation est souvent ritualisé (le chien fait la fête ou appelle à jouer)",
        "Le grognement de menace peut venir d'une attitude dominante (posture haute) ou anxieuse (posture basse), avec un raidissement général",
        "Le grognement de jeu est toujours un signe de menace",
        "Le grognement de menace s'accompagne d'un corps détendu"
      ],
      correct: [0, 1, 2],
      explanation: "Importance de la contextualisation et d'une vue d'ensemble."
    },
    {
      id: "communication-059",
      question: "Quelles associations vocalise / signification sont exactes ?",
      answers: [
        "Gémissements : recherche d'attention, excitation ou frustration, douleur (avec volonté de communiquer)",
        "Hurlements : détresse, excitation de poursuite (chiens courants), mimétisme primitif (congénère, alarmes, sirènes)",
        "Jappements : signe d'excitation, souvent un appel au jeu",
        "Cri aigu : initialement associé à la douleur, peut devenir un moyen d'échapper à une source de contrainte par conditionnement",
        "Jappements : une menace d'attaque imminente",
        "Hurlements : un appel au jeu"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Les gémissements d'excitation ou frustration sont 10 fois plus présents chez les mâles entiers que chez les mâles castrés ou les femelles."
    },
    {
      id: "communication-060",
      question: "Parmi ces affirmations sur la communication sonore de l'Homme vers le chien, lesquelles sont vraies ?",
      answers: [
        "Par conditionnement opérant, le chien mémorise en moyenne de 20 à 100 mots",
        "Plus qu'aux mots, le chien prête attention à l'intonation (intensité + fréquence + vitesse)",
        "Le chien comprend des phrases complexes dès l'âge adulte",
        "Seuls les mots comptent : l'intonation n'a aucune importance"
      ],
      correct: [0, 1],
      explanation: "Le chien est surtout sensible à l'intonation."
    },
    {
      id: "communication-061",
      question: "Comment maîtriser son langage verbal avec le chien ?",
      answers: [
        "Ne pas faire de phrases",
        "Privilégier les mots courts",
        "1 mot = 1 fonction",
        "Uniformiser le langage parmi les maîtres (lister un vocabulaire)",
        "Faire des phrases longues pour bien expliquer",
        "Changer de mot à chaque fois pour éviter la lassitude"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Le verbal : un langage simple et constant."
    },
    {
      id: "communication-062",
      question: "Comment utiliser le paraverbal (l'intonation) avec le chien ?",
      answers: [
        "Avec assurance, sans laisser place au doute",
        "Calmement : crier est signe de perte de contrôle",
        "De façon dynamique pour que le chien soit réceptif",
        "Plus fermement, sans crier, pour marquer un interdit",
        "En criant pour être sûr d'être entendu",
        "En chuchotant pour marquer un interdit"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Le paraverbal : l'intonation doit s'adapter au message transmis."
    },

    // ---------- La communication tactile ----------
    {
      id: "communication-063",
      question: "Parmi ces affirmations sur la communication tactile, lesquelles sont vraies ?",
      answers: [
        "Elle s'établit à très courte distance, au contact de l'individu, de façon simultanée",
        "La communication tactile telle que l'Homme la conçoit doit faire l'objet d'une imprégnation",
        "Elle s'établit à longue distance, de façon différée",
        "Les caresses humaines sont des codes canins innés"
      ],
      correct: [0, 1],
      explanation: "Le tactile humain n'est pas inné : il s'imprègne."
    },
    {
      id: "communication-064",
      question: "Quel rôle joue la communication tactile entre chiens ?",
      answers: [
        "Elle joue un rôle dans la rencontre (léchage du sexe du congénère pour l'identifier)",
        "Elle joue un rôle dans le positionnement hiérarchique (tête ou patte sur l'encolure ou mordillement ou léchage des babines)",
        "Elle est essentielle dans le jeu (contacts très stéréotypés selon les races)",
        "La toilette par léchage permet de déposer des phéromones salivaires sur le poil",
        "Elle ne joue aucun rôle dans le jeu entre chiens",
        "La toilette par léchage ne sert qu'à nettoyer le poil"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Le tactile intraspécifique : rencontre, hiérarchie, jeu, toilette."
    },
    {
      id: "communication-065",
      question: "Parmi ces affirmations sur la communication tactile avec l'Homme, lesquelles sont vraies ?",
      answers: [
        "Les caresses et câlins ne sont pas appréciés d'inné : ce n'est pas un code canin, le chien apprend à les apprécier (ou pas)",
        "Tous les chiens n'acceptent pas forcément les contacts tactiles avec les inconnus",
        "La laisse crée également un contact tactile, pouvant être anxiogène",
        "Tous les chiens apprécient d'inné les caresses et les câlins",
        "La laisse ne crée aucun contact tactile avec le chien"
      ],
      correct: [0, 1, 2],
      explanation: "Il faut imprégner le chiot aux contacts tactiles humains pour qu'il les tolère."
    },
    {
      id: "communication-066",
      question: "Comment la communication tactile peut-elle être anxiolytique ?",
      answers: [
        "En situation de stress, certains chiens cherchent le contact en se collant à leur maître ou en se mettant entre leurs jambes",
        "La caresse a un effet apaisant, quasi hypnotique pour certains chiens",
        "La bradycardie de contact provoque un ralentissement cardiaque et respiratoire et de l'hypotension, déclenchée par le contact avec un être auquel le chien est attaché",
        "L'autoapaisement par léchages peut dégénérer en plaies de léchage ou automutilation",
        "La caresse augmente toujours la fréquence cardiaque du chien",
        "L'effet apaisant est identique avec n'importe quel inconnu"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Contact apaisant : bradycardie de contact et autoapaisement."
    },
    {
      id: "communication-067",
      question: "Dans quels contextes utilise-t-on le contact avec le chien chez l'Homme ?",
      answers: [
        "La médiation animale en EHPAD",
        "La médiation animale en écoles ou fermes pédagogiques pour les enfants",
        "La zoothérapie pour des personnes atteintes de handicaps",
        "Les concours de beauté",
        "Les sports de mordant"
      ],
      correct: [0, 1, 2],
      explanation: "L'Homme privilégie le toucher pour exprimer ses émotions."
    },

    // ---------- Le positionnement dans l'espace ----------
    {
      id: "communication-068",
      question: "Parmi ces affirmations sur la communication par le positionnement dans l'espace, lesquelles sont vraies ?",
      answers: [
        "Elle s'établit à moyenne et courte distance, et tend à se pérenniser (récurrence du positionnement)",
        "Elle manifeste un problème de comportement : un chien qui cherche une relation de dominance/subordination ou un chien anxieux",
        "Elle s'établit à très longue distance et se renouvelle chaque jour",
        "Elle est un signe de bon équilibre comportemental"
      ],
      correct: [0, 1],
      explanation: "Le positionnement répété révèle un problème."
    },
    {
      id: "communication-069",
      question: "Quelles caractéristiques a le positionnement sociopathique ?",
      answers: [
        "Il se manifeste quasi uniquement chez des chiens mâles (généralement non castrés) dans une relation dyadique de dominance/subordination",
        "Il apparaît lors de la phase pubertaire",
        "Positionnements à des zones stratégiques de surveillance : en hauteur et/ou dans un espace central de passage",
        "Positionnements « provocateurs » : fauteuil du maître, place à table, place dans le lit",
        "Il se manifeste surtout chez les femelles stérilisées",
        "Il apparaît pendant les premières semaines de vie du chiot"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Ce type de comportement dégénère toujours s'il n'est pas traité."
    },
    {
      id: "communication-070",
      question: "Quelles sont les causes du positionnement d'anxiété ?",
      answers: [
        "Il peut se manifester chez les mâles comme chez les femelles : généralement un déficit d'imprégnation",
        "On le retrouve chez des chiens nés dans des conditions d'élevage très dégradées (ou sauvages)",
        "Le positionnement d'anxiété peut être d'origine génétique, notamment chez les hybrides (chien-loup de Saarloos en particulier)",
        "Il ne se manifeste que chez les mâles non castrés",
        "Il apparaît systématiquement pendant la puberté"
      ],
      correct: [0, 1, 2],
      explanation: "Positionnement d'anxiété : déficit d'imprégnation ou génétique."
    },
    {
      id: "communication-071",
      question: "Comment se manifeste le positionnement d'anxiété ?",
      answers: [
        "Mise en retrait au moindre stimulus (bruits, inconnus...)",
        "Mise en retrait systématique vis-à-vis d'un membre de la famille (souvent un homme, parfois les enfants en bas âge)",
        "Refus ou mise en retrait au moment de sortir dehors",
        "Déplacements de cachette en cachette (sous les meubles, couettes, coussins)",
        "Positionnement en hauteur dans un espace de passage",
        "Prise de la place du maître à table ou dans le lit"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Retrait et cachettes caractérisent le positionnement d'anxiété."
    },

    // ---------- La communication extrasensorielle ----------
    {
      id: "communication-072",
      question: "Comment qualifie-t-on la communication « extrasensorielle » ?",
      answers: [
        "Elle ne passe pas par les sens connus : si le chien perçoit une information, elle est bien passée par un canal",
        "On n'en est encore qu'à l'état de spéculations, malgré des expériences scientifiques troublantes",
        "Elle est scientifiquement prouvée et reproductible",
        "Elle ne passe par aucun organe, ce qui la rend impossible à étudier"
      ],
      correct: [0, 1],
      explanation: "Plutôt que « extrasensorielle », mieux vaut dire « ne passant pas par les sens connus »."
    },
    {
      id: "communication-073",
      question: "Lesquelles de ces propositions correspondent à une explication « rationnelle » des intuitions du chien ?",
      answers: [
        "Le chien anticipe par la lecture des micromouvements et mimiques faciales",
        "Le chien anticipe par conditionnement (vêtements de travail, rituels quotidiens, passage du camion poubelles)",
        "Le chien se repère aux phéromones libérées pour anticiper nos humeurs, actions ou heure de retour",
        "Le chien se repère grâce à des signaux auditifs imperceptibles pour l'Homme",
        "Le chien lit dans les pensées de son maître",
        "Le chien ne perçoit rien : ses intuitions sont de pures coïncidences"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Ces explications ne permettent pas de justifier tous les comportements d'intuition."
    },
    {
      id: "communication-074",
      question: "Que montre l'expérience de Wood et Cadoret avec le chien Chris ?",
      answers: [
        "Chris devait aboyer entre 1 et 5 fois pour désigner la carte présentée parmi 5 cartes",
        "Une fois la carte cachée dans une enveloppe, la probabilité de réussite au hasard est de 20 %",
        "Après plusieurs milliers d'essais, son taux de réussite est de 30 %, soit 1,5 fois plus que le hasard",
        "On parle d'une capacité de clairvoyance",
        "Son taux de réussite était de 20 %, conforme au hasard",
        "On parle d'une capacité de télépathie"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Test de clairvoyance dans une relation homme-chien."
    },
    {
      id: "communication-075",
      question: "Quelles associations expérience / capacité sont exactes ?",
      answers: [
        "Chris (Wood et Cadoret) : capacité de clairvoyance",
        "Bobbie the Wonder Dog : capacité de pistage mental",
        "Jaytee : capacité de télépathie",
        "Chris : capacité de pistage mental",
        "Jaytee : capacité de clairvoyance"
      ],
      correct: [0, 1, 2],
      explanation: "Trois expériences troublantes : clairvoyance, pistage mental, télépathie."
    },
    {
      id: "communication-076",
      question: "Que raconte l'histoire de Bobbie the Wonder Dog ?",
      answers: [
        "Un croisé colley et berger anglais devenu star après avoir parcouru plus de 4 000 km pour retrouver ses maîtres",
        "Il est retourné dans chacune des stations-service où la famille s'était arrêtée dormir",
        "De nombreux témoignages de personnes l'ayant soigné ou nourri ont permis de retracer son itinéraire",
        "Il a retrouvé ses maîtres en quelques jours, à moins de 100 km de chez lui",
        "Il a retrouvé ses maîtres en suivant uniquement des routes qu'il connaissait déjà"
      ],
      correct: [0, 1, 2],
      explanation: "Bobbie, perdu dans l'Indiana, a retrouvé ses maîtres dans l'Oregon six mois plus tard."
    },
    {
      id: "communication-077",
      question: "Que montre l'expérience de Jaytee sur le retour de sa maîtresse ?",
      answers: [
        "La chienne se positionne à la fenêtre environ 23 % du temps quand sa maîtresse pense à rentrer",
        "Elle y passe plus de 55 % du temps quand sa maîtresse est sur le trajet du retour, contre 4 % en temps normal",
        "Les horaires de retour étaient aléatoires, déterminés par un programme informatique",
        "Elle passait le même temps à la fenêtre, quelle que soit l'heure de retour",
        "Les horaires de retour étaient toujours les mêmes, ce qui permettait à Jaytee de les prévoir"
      ],
      correct: [0, 1, 2],
      explanation: "Observation vidéo : la maîtresse travaillait à 7 km."
    },

    // ---------- Les troubles de la communication ----------
    {
      id: "communication-078",
      question: "Parmi ces affirmations sur les troubles de la communication, lesquelles sont vraies ?",
      answers: [
        "Une mauvaise communication génère du stress : positif (excitation) ou négatif (anxiété/agressivité)",
        "En tant qu'émetteur : le chien n'arrive pas à transmettre une ou plusieurs informations",
        "En tant que récepteur : le chien n'arrive pas à comprendre une ou plusieurs informations émises",
        "En tant qu'émetteur : le chien ne comprend pas les informations qu'on lui envoie",
        "En tant que récepteur : le chien ne parvient pas à transmettre ses informations"
      ],
      correct: [0, 1, 2],
      explanation: "Troubles intra ou interspécifiques, côté émetteur ou côté récepteur."
    },
    {
      id: "communication-079",
      question: "Parmi ces affirmations sur les fondamentaux de la communication non acquis, lesquelles sont vraies ?",
      answers: [
        "Une incapacité totale à comprendre certains messages vient généralement d'un déficit lors de la phase d'imprégnation",
        "Des prédispositions génétiques peuvent être à l'origine d'une communication non acquise",
        "La caractéristique principale reste la non-maîtrise des autocontrôles d'une séquence comportementale",
        "Elle vient toujours d'une éducation tardive après la puberté",
        "La caractéristique principale est un excès d'obéissance"
      ],
      correct: [0, 1, 2],
      explanation: "Syndrome de privation sensorielle, voire dissocialisation (absence totale de socialisation)."
    },
    {
      id: "communication-080",
      question: "Qu'est-ce que le syndrome de privation sensorielle ?",
      answers: [
        "Un déficit de communication pendant la phase d'imprégnation, qui engendre une incapacité totale à comprendre certains messages",
        "Une perte progressive des sens liée au vieillissement du chien, qui l'empêche de percevoir les signaux",
        "Un trouble de l'audition qui apparaît chez les chiens de grande taille et les empêche de percevoir les vocalises",
        "Un état émotionnel généralisé et durable, sans objet précis, qui perturbe la communication avec les congénères"
      ],
      correct: [0],
      explanation: "Définition du Lexique."
    },
    {
      id: "communication-081",
      question: "Quels types de chiens trouve-t-on parmi ceux qui ont des troubles profonds de communication ?",
      answers: [
        "Des chiens HS-HA",
        "Des chiens incapables de se contrôler dans le jeu ou l'excitation",
        "Des chiens totalement asociables vis-à-vis de leurs congénères",
        "Des chiens asociables vis-à-vis de l'Homme ou d'un type d'Homme",
        "Des chiens parfaitement équilibrés en toutes situations",
        "Des chiens ayant bénéficié d'une imprégnation complète"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Ces chiens manquent de contrôle sur leurs séquences comportementales."
    },
    {
      id: "communication-082",
      question: "Quels facteurs extérieurs au chien peuvent créer des troubles de la communication ?",
      answers: [
        "Le maître influence son chien et ses communications",
        "Le ou les congénères de la maison influencent ses communications",
        "Les rencontres de chiens ou d'humains jouent un rôle",
        "L'environnement influence l'équilibre psychologique (stress, dépense physique, contacts sociaux)",
        "La communication ne peut plus évoluer après l'imprégnation",
        "Seule la génétique influence la communication d'un chien adulte"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Le chien reste sous influence de son environnement tout au long de sa vie."
    },
    {
      id: "communication-083",
      question: "Parmi ces affirmations sur la perturbation d'un signal dans le modèle cybernétique de Norbert Wiener, lesquelles sont vraies ?",
      answers: [
        "Émetteur → codage → canal → décodage → récepteur, avec un feed-back dans les deux sens",
        "Le bruit sémantique et le bruit interne interviennent au niveau du codage et du décodage",
        "Le bruit technique intervient au niveau du canal",
        "Le bruit technique intervient au niveau du codage",
        "Il n'y a pas de retour du récepteur vers l'émetteur"
      ],
      correct: [0, 1, 2],
      explanation: "Trois bruits : sémantique, interne, technique."
    },
    {
      id: "communication-084",
      question: "Quelles associations bruit / définition sont exactes ?",
      answers: [
        "Bruit sémantique : différence entre l'intention et la compréhension d'un message",
        "Bruit interne : état hormonal ou émotionnel perturbant le codage ou le décodage",
        "Bruit technique : perturbation externe lors d'une communication",
        "Bruit interne : perturbation externe lors de la communication",
        "Bruit technique : état hormonal perturbant le décodage"
      ],
      correct: [0, 1, 2],
      explanation: "Bruit sémantique, interne et technique (Lexique)."
    },
    {
      id: "communication-085",
      question: "Comment fonctionne le cercle vicieux entre un maître stressé et son chien ?",
      answers: [
        "Le maître stressé et tendu (tension sur la laisse, raidissement, regard fixe) transmet son stress au chien",
        "Le chien stressé ou agressif (raidissement, regard fixe, grognement, aboiements) transmet son état au maître",
        "Les deux s'influencent mutuellement : le cycle se renforce",
        "Un maître calme calme toujours le chien, quel que soit son état",
        "Le chien n'influence jamais l'état émotionnel du maître"
      ],
      correct: [0, 1, 2],
      explanation: "Le sens du cycle importe peu : les deux s'influencent."
    }
  ]
});
