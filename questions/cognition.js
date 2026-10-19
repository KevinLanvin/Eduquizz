// Theme 7 — Course 7: Capacités cognitives
// (question format: see questions/origins.js)
//
// Sources: the course summary and the Lexique only. No very precise dates
// (years of the experiments and of the authors are left out), no journal references.
// Not covered: the brain-weight graph (no conclusion given on the course photo).
// The detour experiment: only its hypothesis is asked (its own results are not on the photos).
// From the teacher's oral explanation (given by the user): the dogs beat the chimpanzees and
// the wolves (see cognition-014), several hypotheses were then made about the reason of that
// success (cognition-037), and they led to the cup-choice experiment with human and non-human
// cues (cognition-016 to cognition-020, cognition-038).
//
// A notion that appears in several courses is asked only once, in the oldest theme.
// Not asked here on purpose:
//   - "imprégnation" and the conditioning types -> ethology-013 / ethology-038
//   - the dog's domesticated plasticity          -> ethology-066
(window.THEMES = window.THEMES || []).push({
  id: "cognition",
  title: "Capacités cognitives",
  shortTitle: "Cognition",
  questions: [
    // ---------- La cognition chez le chien ----------
    {
      id: "cognition-001",
      question: "Comment le Pr Deputte définit-il les capacités cognitives ?",
      answers: [
        "La capacité à élaborer des connaissances, à se les représenter et à agir sur ces représentations avant d'agir",
        "La capacité d'un animal à résoudre un problème par essais et erreurs, jusqu'à obtenir une récompense, puis à le refaire",
        "La capacité d'un animal à reproduire un comportement observé chez un autre individu de son propre groupe social",
        "La capacité d'un animal à s'adapter à son milieu par des changements génétiques apparus au fil des générations"
      ],
      correct: [0],
      explanation: "Les capacités cognitives : élaborer des connaissances, se les représenter et les « manipuler » en amont de l'expression d'un comportement (Pr B. Deputte)."
    },
    {
      id: "cognition-002",
      question: "Quel terme a remplacé celui d'intelligence depuis les années 1980 ?",
      answers: [
        "Capacités cognitives, dans une perspective évolutionniste sans préjugés",
        "Quotient comportemental, dans une perspective statistique",
        "Tempérament cognitif, dans une perspective génétique",
        "Aptitude fonctionnelle, dans une perspective zootechnique"
      ],
      correct: [0],
      explanation: "Le terme de capacités cognitives a remplacé celui d'intelligence : il s'agit d'une perspective évolutionniste sans préjugés."
    },
    {
      id: "cognition-003",
      question: "Que dit le canon de Morgan ?",
      answers: [
        "Il ne faut pas interpréter une action animale comme relevant de facultés de haut niveau si elle peut s'expliquer par des facultés de niveau inférieur",
        "Il faut toujours privilégier l'explication par des facultés de haut niveau, car les animaux sont plus intelligents qu'on ne le croit",
        "Il faut décrire chaque comportement animal en utilisant les mêmes termes que pour un comportement humain équivalent",
        "Il faut éviter toute expérience en laboratoire, car elle modifie le comportement naturel de l'animal"
      ],
      correct: [0],
      explanation: "Le canon de Morgan reste un rempart indispensable à l'anthropomorphisme : on n'interprète pas une action comme une faculté supérieure s'il existe une explication par une faculté plus basse."
    },
    {
      id: "cognition-004",
      question: "Qu'est-ce que l'anthropomorphisme ?",
      answers: [
        "Attribuer une émotion ou une cognition humaine à un animal, ce qu'il faut éviter",
        "Étudier le comportement d'un animal en le comparant à celui d'autres espèces animales proches",
        "Refuser d'attribuer la moindre émotion à un animal, par prudence scientifique",
        "Adapter l'environnement d'un animal aux besoins qu'un humain lui prête"
      ],
      correct: [0],
      explanation: "L'anthropomorphisme consiste à attribuer une émotion ou une cognition humaine à un animal : à éviter."
    },
    {
      id: "cognition-005",
      question: "Parmi ces propositions, lesquelles font partie des 10 types d'apprentissage distingués par Thorpe ?",
      answers: [
        "L'habituation",
        "L'apprentissage latent",
        "L'apprentissage par essai-erreur",
        "L'insight",
        "La reconnaissance individuelle",
        "L'instinct",
        "Le raisonnement abstrait"
      ],
      correct: [0, 1, 2, 3, 4],
      explanation: "Les 10 types : habituation, apprentissage latent, apprentissage associatif, conditionnement, essai-erreur, insight, imprégnation, facilitation sociale, reconnaissance individuelle, imitation."
    },
    {
      id: "cognition-039",
      question: "Parmi ces propositions, lesquelles sont aussi des types d'apprentissage distingués par Thorpe ?",
      answers: [
        "L'apprentissage associatif",
        "Le conditionnement",
        "L'imprégnation",
        "La facilitation sociale",
        "L'imitation",
        "La résolution logique de problèmes abstraits",
        "La mémoire de travail"
      ],
      correct: [0, 1, 2, 3, 4],
      explanation: "Les 10 types de Thorpe : habituation, apprentissage latent, associatif, conditionnement, essai-erreur, insight, imprégnation, facilitation sociale, reconnaissance individuelle, imitation."
    },
    {
      id: "cognition-006",
      question: "Qu'est-ce que l'habituation ?",
      answers: [
        "Une exposition récurrente, sans renforcement, qui inhibe la réactivité",
        "L'association de plusieurs stimuli indifférents, sans avantage ni désavantage immédiat",
        "Une exposition répétée à un stimulus aversif, qui intensifie la réponse de l'animal",
        "Un apprentissage rapide pendant une période sensible du jeune âge"
      ],
      correct: [0],
      explanation: "L'habituation est une exposition récurrente sans renforcement, qui inhibe la réactivité."
    },
    {
      id: "cognition-007",
      question: "Qu'est-ce que l'apprentissage latent ?",
      answers: [
        "L'association de stimuli indifférents, sans avantage immédiat, mémorisés pour être utilisés plus tard",
        "L'apprentissage d'un comportement grâce à un renforcement immédiat, répété à chaque essai du même exercice",
        "Un apprentissage qui n'apparaît que sous l'effet d'une punition, jamais sous l'effet d'une récompense",
        "L'exposition répétée à un stimulus jusqu'à ce que l'animal cesse progressivement d'y réagir"
      ],
      correct: [0],
      explanation: "Dans l'apprentissage latent, les stimuli sont mémorisés et la réponse est fixée sans renforcement préalable. Exemple : un enfant qui prononce un mot pour la première fois dans le contexte adéquat."
    },
    {
      id: "cognition-008",
      question: "Qu'est-ce qui distingue l'insight de l'apprentissage par essai-erreur ?",
      answers: [
        "Dans l'insight, l'individu cherche la relation entre les éléments du problème : ses essais ne sont pas aléatoires",
        "Dans l'insight, l'individu répète le même comportement jusqu'à obtenir une récompense, sans réfléchir",
        "Dans l'insight, l'individu copie exactement le comportement d'un congénère qu'il a observé",
        "Dans l'insight, l'individu ne fait aucun essai : la bonne solution lui est donnée dès le départ"
      ],
      correct: [0],
      explanation: "L'insight est un apprentissage approfondi : essai-erreur + recherche de compréhension des mécanismes (les essais ne sont plus aléatoires)."
    },
    {
      id: "cognition-009",
      question: "Qu'est-ce que la facilitation sociale ?",
      answers: [
        "L'amélioration des capacités et de la performance d'un individu lorsqu'il est en présence d'autres individus",
        "Le processus d'appariement à une cible, une mise en correspondance entre le moi et l'autre individu",
        "La reconnaissance des individus avec qui l'animal entretient des relations sociales de longue durée",
        "L'ensemble des interactions positives qui rapprochent entre eux les membres d'un même groupe social"
      ],
      correct: [0],
      explanation: "La facilitation sociale (apprentissage par observation) est l'amélioration de la performance d'un individu en présence d'autres. À ne pas confondre avec l'imitation."
    },
    {
      id: "cognition-010",
      question: "Qu'est-ce que l'imitation ?",
      answers: [
        "Un processus d'appariement à une cible, une mise en correspondance entre le moi et l'autre",
        "Une amélioration de la performance d'un individu lorsqu'il est en présence d'autres individus",
        "Un apprentissage par essai-erreur, fondé sur la recherche de la relation entre les éléments",
        "Une reconnaissance des individus avec qui l'animal entretient des relations sociales"
      ],
      correct: [0],
      explanation: "L'imitation est un processus d'appariement à une cible, une mise en correspondance entre le moi et l'autre. Elle diffère de la facilitation sociale."
    },
    {
      id: "cognition-011",
      question: "Qu'est-ce que la reconnaissance individuelle ?",
      answers: [
        "La reconnaissance des individus avec qui l'animal entretient des relations sociales (parentales, hiérarchiques...)",
        "La capacité d'un animal à se reconnaître lui-même dans un miroir, comme le font certains grands singes",
        "La reconnaissance d'un stimulus déjà rencontré, qui devient familier à force d'y être exposé",
        "La reconnaissance des membres de sa propre espèce parmi des individus appartenant à d'autres espèces"
      ],
      correct: [0],
      explanation: "La reconnaissance individuelle porte sur les individus avec qui l'animal entretient des relations sociales : parentales, hiérarchiques, affiliatives..."
    },
    {
      id: "cognition-012",
      question: "Quelles propositions sont exactes à propos de la facilitation sociale ?",
      answers: [
        "Théoriquement, elle est réservée aux apprentissages intraspécifiques",
        "En interspécifique, le terme d'apprentissage par observation serait plus juste",
        "Entre le chien et son maître, on parle d'apprentissage par observation, pas de facilitation sociale",
        "Elle s'applique sans distinction aux apprentissages intra et interspécifiques",
        "Elle est identique à l'imitation"
      ],
      correct: [0, 1, 2],
      explanation: "La socialité se rapporte toujours à des relations intraspécifiques : entre chien et maître, on parle d'apprentissage par observation. Facilitation sociale et imitation sont deux notions différentes."
    },

    // ---------- Expériences sur la cognition sociale ----------
    {
      id: "cognition-013",
      question: "Quelle hypothèse l'expérience de « détour » cherche-t-elle à tester ?",
      answers: [
        "La démonstration d'un détour par un humain améliore la performance des chiens qui l'ont observé et réduit leur temps",
        "La démonstration d'un détour par un autre chien est plus efficace que celle d'un humain, de la même espèce",
        "Les chiens trouvent un détour plus vite lorsqu'ils sont récompensés à chaque essai que lorsqu'ils observent",
        "Les chiens sont incapables de contourner un obstacle sans l'aide directe et constante de leur propriétaire"
      ],
      correct: [0],
      explanation: "L'hypothèse : la démonstration du détour par un humain améliorera la performance des chiens qui l'ont observé et réduira le temps de détour (dispositif : une clôture en V)."
    },
    {
      id: "cognition-014",
      question: "Quels résultats ressortent des expériences de recherche guidée (indices donnés par l'expérimentateur) ?",
      answers: [
        "Les chiens font plus de choix corrects que les chimpanzés",
        "Les chiens ont plus de réponses correctes que les loups quand un indice est donné",
        "En condition contrôle, sans intervention de l'Humain, chiens et loups ont des résultats proches",
        "Les chiots, quels que soient leur âge et leur condition d'élevage, utilisent aussi des indices visuels",
        "Les loups utilisent mieux les indices humains que les chiens",
        "Les chiots n'utilisent les indices visuels qu'après plusieurs mois d'exposition aux humains"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Les chiens battent chimpanzés et loups pour utiliser les indices humains, mais loups et chiens font jeu égal quand l'Humain n'intervient pas ; les chiots utilisent les indices dès le plus jeune âge."
    },
    {
      id: "cognition-015",
      question: "Quelles conclusions tire-t-on de ces expériences sur l'origine des capacités sociales cognitives du chien ?",
      answers: [
        "Les performances des chiens ne sont pas héritées phylogénétiquement des loups",
        "Elles ne sont pas non plus une simple conséquence d'une exposition intense à l'Homme tout au long de la vie",
        "Les aptitudes à communiquer avec l'Homme ont été acquises par les chiens au cours de la domestication",
        "Les chiens ont acquis un avantage sélectif sur les loups : une utilisation plus flexible des indices visuels de l'Homme",
        "Les chiens ont hérité ces aptitudes de leurs ancêtres loups",
        "Ces aptitudes ne s'acquièrent qu'avec l'âge et l'expérience"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Les chiens et les loups ont des capacités cognitives différentes, acquises par les chiens pendant la domestication : ce n'est ni hérité du loup, ni une simple conséquence de l'exposition à l'Homme."
    },
    {
      id: "cognition-016",
      question: "Comment se déroule le protocole d'Udell sur les indices humains et non humains ?",
      answers: [
        "Le chien choisit entre deux gobelets",
        "Il est récompensé s'il fait le bon choix, et il ne se passe rien s'il se trompe",
        "Chaque chien fait 10 essais",
        "Les indices varient selon leur forme, leur taille et leur origine, humaine ou non humaine",
        "Le chien est puni s'il choisit le mauvais gobelet",
        "Chaque chien ne fait qu'un seul essai"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Tâche de choix d'objets (2 gobelets, 10 essais par chien) avec des indices variant en forme, en taille et selon qu'ils viennent d'humains ou d'objets non humains. Récompense si bon choix, rien sinon."
    },
    {
      id: "cognition-017",
      question: "Quels sont des indices humains familiers dans cette expérience ?",
      answers: [
        "Pointer le bras vers le gobelet",
        "Se pencher vers le gobelet, en le fixant",
        "Jeter un coup d'œil alterné entre le chien et le gobelet",
        "Pointer avec le coude",
        "Hocher la tête vers le gobelet"
      ],
      correct: [0, 1, 2],
      explanation: "Indices familiers : pointer, se pencher vers, jeter un coup d'œil. Indices non familiers : pointer avec la jambe en étant assis, tourner les épaules, pointer avec le coude, hocher la tête."
    },
    {
      id: "cognition-040",
      question: "Quels sont des indices humains non familiers dans cette expérience ?",
      answers: [
        "Pointer avec la jambe, en étant assis",
        "Tourner les épaules vers le gobelet",
        "Pointer avec le coude",
        "Hocher la tête vers le gobelet",
        "Pointer le bras vers le gobelet",
        "Se pencher vers le gobelet, en le fixant"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Indices non familiers : pointer avec la jambe en étant assis, tourner les épaules, pointer avec le coude, hocher la tête. Pointer du bras et se pencher sont des indices familiers."
    },
    {
      id: "cognition-018",
      question: "Quels sont des indices non humains dans cette expérience ?",
      answers: [
        "Un bras mécanique qui pointe",
        "Un chien empaillé, orienté vers le gobelet",
        "Un marqueur fixe en bois, orienté vers le gobelet",
        "Une poupée assise entre les deux gobelets, bras tendu vers le bon",
        "Pointer avec la jambe en étant assis",
        "Tourner les épaules vers le gobelet"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Indices non humains : bras mécanique, chien empaillé, marqueur fixe, poupée. Pointer avec la jambe et tourner les épaules sont des indices humains non familiers."
    },
    {
      id: "cognition-019",
      question: "Quels résultats ressortent de l'expérience d'Udell ?",
      answers: [
        "Pas de différence significative entre les indices humains familiers et non familiers",
        "Différence significative entre les indices humains, quels qu'ils soient, et les indices non humains",
        "Le geste humain de pointer de la main est significativement meilleur que les indices non humains similaires",
        "La taille de l'indice (en % de la hauteur) est corrélée positivement aux performances des chiens",
        "Les chiens réussissent mieux avec un marqueur fixe qu'avec un geste humain",
        "Les indices humains non familiers n'ont aucun potentiel communicatif"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Tous les indices donnés par l'humain ont un potentiel communicatif pour le chien. Les indices non humains de même taille ou de même topographie sont moins bien utilisés."
    },
    {
      id: "cognition-020",
      question: "Quelles conclusions tire-t-on de l'expérience d'Udell ?",
      answers: [
        "Les chiens comprennent plus aisément les indices donnés par un humain que des indices non humains de même taille",
        "Les chiens ne sont pas capables de prendre en compte un marqueur fixe placé devant le bon gobelet",
        "Les chiens ont développé une grande sensibilité aux conséquences des actions humaines, et ne répondent pas à la topographie ou à la seule présence d'un indice",
        "L'expérience individuelle joue un rôle non négligeable dans l'utilisation des indices",
        "Les chiens réagissent à n'importe quel objet qui pointe vers un gobelet",
        "L'expérience individuelle ne joue aucun rôle"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Les chiens sont sensibles aux conséquences des actions humaines, pas à la forme ou à la simple présence d'un indice ; l'expérience individuelle compte aussi."
    },

    // ---------- Langage et représentations ----------
    {
      id: "cognition-021",
      question: "Que montre l'imagerie cérébrale (IRMf) du Pr Gregory Berns sur la perception des mots ?",
      answers: [
        "Chez l'Homme comme chez le chien, l'activité cérébrale augmente à l'écoute de mots absurdes ou inconnus",
        "Pour un mot connu, l'Homme active les cortex de la reconnaissance et du visuel, alors que le chien n'active que le cortex auditif",
        "Berns émet l'hypothèse d'un apprentissage par mot-action plutôt que par mot-objet",
        "Pour un mot connu, le chien active les mêmes zones visuelles que l'Homme",
        "Berns conclut que le chien apprend les mots par mot-objet, comme l'Homme"
      ],
      correct: [0, 1, 2],
      explanation: "Le chien n'active que le cortex auditif pour un mot connu : d'où l'hypothèse d'un apprentissage mot-action plutôt que mot-objet."
    },
    {
      id: "cognition-022",
      question: "Selon l'hypothèse du mot-action, que pourrait signifier le mot « balle » pour un chien ?",
      answers: [
        "« Poursuivre et attraper »",
        "« Poursuivre, attraper et tuer »",
        "« Attendre et regarder »",
        "« Rapporter à son maître et s'asseoir »"
      ],
      correct: [0],
      explanation: "Dans l'hypothèse mot-action, « balle » signifierait « poursuivre et attraper », et « chat » « poursuivre, attraper et tuer » (selon le conditionnement bien sûr)."
    },
    {
      id: "cognition-023",
      question: "Que sait-on de Chaser, la chienne qui comprend 1000 mots ?",
      answers: [
        "Elle connaissait parfaitement le nom propre de 1022 jouets",
        "Elle n'a pas pu les retenir par un simple conditionnement mot-action : un mécanisme plus complexe était à l'œuvre",
        "Elle comprenait des phrases simples (sujet, verbe, complément)",
        "Elle ne connaissait que quelques dizaines de mots",
        "Elle n'a jamais compris de phrases, seulement des mots isolés"
      ],
      correct: [0, 1, 2],
      explanation: "Chaser connaissait 1022 noms de jouets et comprenait des phrases simples, ce qui remet en question un simple schéma mot-action : peut-être une forme de représentation symbolique de l'objet."
    },
    {
      id: "cognition-024",
      question: "Que montre l'effet Clever Hans ?",
      answers: [
        "Les talents apparents de Hans venaient d'indices transmis inconsciemment par son propriétaire",
        "Tout chercheur qui veut démontrer une forme d'apprentissage animal doit éviter cet effet",
        "Hans avait de réelles aptitudes mathématiques, sans aucune aide de son propriétaire",
        "Cet effet ne concerne que les erreurs de mesure en laboratoire"
      ],
      correct: [0, 1],
      explanation: "Au début du XXe siècle, les aptitudes mathématiques de Clever Hans fascinaient : elles venaient d'indices donnés inconsciemment par son propriétaire."
    },
    {
      id: "cognition-025",
      question: "Combien de mots simples la propriétaire de Rico affirmait-elle qu'il reconnaissait ?",
      answers: [
        "Plus de 200 mots",
        "Une vingtaine de mots",
        "Plus de 1000 mots",
        "Environ 50 mots"
      ],
      correct: [0],
      explanation: "Sa propriétaire l'a déclaré capable de reconnaître plus de 200 mots simples ; une psychologue (J. Kaminski) a ensuite mené une étude sur Rico."
    },

    // ---------- Émotions de l'autre et espaces sémantiques ----------
    {
      id: "cognition-026",
      question: "Comment se déroule l'étude de reconnaissance des émotions humaines du Clever Dog Lab de Vienne ?",
      answers: [
        "18 chiens sont entraînés à utiliser des écrans tactiles",
        "Ils sont récompensés quand ils touchent la photo d'une personne souriante ou en colère",
        "Les photos ne montrent que la moitié du visage (haut ou bas)",
        "Face à des images jamais vues, leur taux de réussite est proche de 100 %",
        "Les photos montrent toujours le visage entier",
        "Face à des images inconnues, leur taux de réussite est proche du hasard"
      ],
      correct: [0, 1, 2, 3],
      explanation: "18 chiens, écrans tactiles, récompense pour la bonne photo, demi-visages, puis images inconnues avec un taux de réussite proche de 100 %."
    },
    {
      id: "cognition-027",
      question: "Quelles conclusions tire-t-on de cette étude ?",
      answers: [
        "Le chien est capable de créer des concepts à partir d'émotions humaines, comme le bonheur ou la colère",
        "On ne sait pas si sa « table d'expressions faciales » est acquise par l'expérience ou innée",
        "Le chien peut simplement être conditionné à nos expressions faciales, sans représentation symbolique du bonheur",
        "Le chien a donc la capacité de reconnaître l'état émotionnel de l'Homme",
        "Il est établi que cette table d'expressions est innée chez le chien comme chez l'Homme",
        "Le chien possède forcément une représentation symbolique du bonheur"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Le chien reconnaît l'état émotionnel humain, mais on ne sait pas si la table d'expressions est innée ou acquise, ni s'il a une représentation symbolique du bonheur."
    },
    {
      id: "cognition-028",
      question: "Que dit le cours de l'espace sémantique Homme-Chien (Berns) ?",
      answers: [
        "L'espace sémantique humain comporte à priori beaucoup plus de concepts que celui du chien",
        "Le chien a sans doute un espace sémantique sur lequel nous serions incapables de mettre un mot",
        "La communication Homme-Chien n'est possible et efficace que dans l'espace sémantique commun",
        "Les deux espaces sémantiques sont identiques",
        "L'espace sémantique du chien contient plus de concepts que celui de l'Homme"
      ],
      correct: [0, 1, 2],
      explanation: "Les deux espaces se recouvrent en partie : la communication ne fonctionne que dans la zone commune. Il est difficile de savoir ce que le chien conçoit, et lui ne peut pas comprendre que nous ne percevions pas ses concepts."
    },

    // ---------- Hypothèses et limites ----------
    {
      id: "cognition-029",
      question: "Que dit le cours du regret ?",
      answers: [
        "C'est une émotion extrêmement complexe, qui dépend de la reconnaissance de réalités alternatives et donc de l'imaginaire",
        "On estime généralement que seul l'Humain en est capable",
        "Le cortex orbitofrontal est identifié chez l'Humain comme la zone des regrets",
        "Chez le rat, cette zone est très active quand il fait demi-tour après avoir quitté une zone plus appétente",
        "C'est une émotion simple, partagée par tous les mammifères",
        "Le cortex orbitofrontal est identifié chez l'Humain comme la zone de la peur"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Le regret suppose l'imaginaire. Chez l'Homme, il est lié au cortex orbitofrontal, également très actif chez le rat qui revient sur ses pas : si le rat regrette, le chien aussi, mais on ignore ce que cela signifie pour lui."
    },
    {
      id: "cognition-030",
      question: "Que montre l'expérience du labyrinthe circulaire du rat ?",
      answers: [
        "Le labyrinthe a 4 branches, chacune avec une saveur différente",
        "Le rat choisit entre attendre sa saveur préférée ou changer de zone en espérant attendre moins longtemps",
        "Le plus de regrets apparaît quand le rat quitte une zone et découvre qu'il doit attendre encore plus longtemps pour une saveur moins appétente",
        "Lors de ces demi-tours, le cortex orbitofrontal est très actif",
        "Quitter la zone n'arrête pas le compte à rebours",
        "Les rats ne font jamais demi-tour une fois qu'ils ont quitté une zone"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Si le rat quitte la zone avant la fin du compte à rebours, celui-ci s'arrête et ne reprend pas : après un mauvais choix, il retourne souvent vers la zone préférée et son cortex orbitofrontal est très actif."
    },
    {
      id: "cognition-031",
      question: "Pourquoi parler de « culpabilité » ou de « regret » chez le chien pose-t-il problème ?",
      answers: [
        "Ces émotions impliquent la conscience de normes sociales et morales",
        "Elles impliquent de se représenter des alternatives passées (« j'aurais dû ») et d'attribuer une responsabilité personnelle",
        "Elles impliquent une narration interne de ses propres actes",
        "Ces fonctions cognitives et métacognitives ne sont pas démontrées chez le chien",
        "Parce que le chien n'éprouve aucune émotion",
        "Parce que le regret n'a jamais été étudié chez l'animal"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Culpabilité et regret reposent sur des fonctions cognitives et métacognitives complexes, qui ne sont pas démontrées chez le chien."
    },
    {
      id: "cognition-032",
      question: "Que le chien est-il capable de faire, selon le cours ?",
      answers: [
        "Associer une action à une conséquence, positive ou négative",
        "Anticiper des réactions humaines",
        "Modifier son comportement futur",
        "Exprimer des états émotionnels négatifs (stress, inhibition, peur)",
        "Se sentir moralement coupable d'une action passée",
        "Raconter intérieurement ses actes passés"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Le chien associe action et conséquence, anticipe les réactions humaines, modifie son comportement et exprime des états émotionnels négatifs (et réévalue une décision sur le plan fonctionnel)."
    },
    {
      id: "cognition-033",
      question: "Qu'est-ce qui suffit à expliquer les postures dites de « chien coupable » ?",
      answers: [
        "Des mécanismes simples (association action-conséquence, anticipation, émotions négatives), sans culpabilité morale",
        "Une culpabilité morale réelle, que le chien ressent comme un humain après une bêtise qu'il a commise",
        "Un instinct de soumission inné, déclenché par le simple fait d'être en présence d'un humain mécontent",
        "Une imitation des postures de soumission observées chez les autres chiens du groupe familial ou voisin"
      ],
      correct: [0],
      explanation: "L'évitement, la soumission post-événement et les postures de « chien coupable » s'expliquent par ces mécanismes, sans invoquer de culpabilité morale ni de regret conscient."
    },
    {
      id: "cognition-034",
      question: "Que défend C. Lloyd Morgan dans sa démarche de psychologie comparée ?",
      answers: [
        "L'expérimentation plutôt que les anecdotes",
        "Ne pas se contenter de noter une activité apparemment intelligente, mais en faire la première d'une série d'observations pour en vérifier la nature",
        "Les résultats de recherches minutieuses ont bien plus d'intérêt que les observations fortuites",
        "Les anecdotes valent autant que les expériences",
        "Il faut interpréter toute activité intelligente comme une faculté supérieure"
      ],
      correct: [0, 1, 2],
      explanation: "Morgan passe de l'anecdote à la recherche expérimentale : une observation fortuite doit être vérifiée par une série d'observations."
    },
    {
      id: "cognition-035",
      question: "Que pense Morgan du comportement de son fox-terrier Tony, qui prend sa canne près du pommeau ?",
      answers: [
        "Tony a trouvé le centre de gravité par hasard, après des essais : rien ne prouve qu'il ait perçu cette relation",
        "Tony a élaboré un véritable concept de « gravité » pour porter la canne en équilibre, comme le ferait un humain",
        "Tony a imité le geste de son maître, qu'il avait observé de nombreuses fois avant de porter la canne",
        "Tony a compris la mécanique de la canne dès son premier essai, sans aucune erreur ni hésitation de sa part"
      ],
      correct: [0],
      explanation: "Tony a saisi la canne par le milieu, puis près du pommeau : il a résolu accidentellement un problème de mécanique. Morgan n'a aucune raison de supposer qu'il ait perçu la relation : essai-erreur plutôt qu'un concept de gravité."
    },
    {
      id: "cognition-036",
      question: "Quelles sont des conclusions du cours sur les capacités cognitives du chien ?",
      answers: [
        "Nos connaissances sur le cerveau du chien et ses capacités cognitives restent extrêmement limitées",
        "Nous connaissons quelques-unes de ses limites et quelques-unes de ses capacités",
        "Nous ne savons pas encore dissocier ce qui fonctionne de la même façon ou différemment chez l'Homme et chez le chien",
        "Le canon de Morgan reste un rempart indispensable à l'anthropomorphisme",
        "Les capacités cognitives du chien sont désormais connues dans le détail",
        "Le canon de Morgan est aujourd'hui dépassé"
      ],
      correct: [0, 1, 2, 3],
      explanation: "On connaît quelques limites et capacités du chien, mais pas encore ce qui est commun ou différent avec l'Homme : le canon de Morgan reste un rempart contre l'anthropomorphisme."
    },
    {
      id: "cognition-037",
      question: "Quelles hypothèses sont posées pour expliquer ce que les chiens ont appris en regardant les humains ?",
      answers: [
        "Ils ont appris à regarder très attentivement les humains",
        "Ils ont appris les conséquences de certains types d'actions (pointages, direction du regard), qu'elles viennent d'humains ou de non-humains",
        "Ils ont appris à être attentifs à certaines actions particulières des humains (actions familières ou non familières)",
        "La taille des indices est importante pour que les chiens apprennent",
        "Ils ont hérité du loup la capacité de suivre les pointages de leur maître",
        "Ils ne comprennent que les indices sonores donnés par la voix de l'humain"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Hypothèses : 1) regarder attentivement les humains ; 2) apprendre les conséquences de certaines actions, humaines ou non ; 2 bis) être attentif à des actions humaines particulières (familières ou non) ; 3) la taille des indices. Elles ont conduit à l'expérience du choix de gobelet avec des indices humains et non humains."
    },
    {
      id: "cognition-038",
      question: "Pourquoi réalise-t-on l'expérience du choix de gobelet avec des indices humains et non humains ?",
      answers: [
        "Pour tester plusieurs hypothèses sur la raison de la réussite des chiens, meilleurs que les chimpanzés et que les loups",
        "Pour vérifier que les chiens sont meilleurs que les chiens-loups issus d'une hybridation avec le loup",
        "Pour mesurer la vitesse d'apprentissage des chiens selon leur race et leur lignée de sélection",
        "Pour comparer les performances de l'odorat et de la vue du chien dans une tâche de recherche de nourriture"
      ],
      correct: [0],
      explanation: "Après avoir montré que les chiens réussissent mieux que les chimpanzés et que les loups, on pose plusieurs hypothèses sur la raison de leur réussite : l'expérience des gobelets, avec des indices humains et non humains, sert à les départager."
    }
  ]
});
