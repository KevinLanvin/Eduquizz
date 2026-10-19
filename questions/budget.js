// Theme 4 — Course 4: Hypertypes comportementaux et budget-temps
// (question format: see questions/origins.js)
//
// Sources: the course summary and the Lexique only. No very precise dates
// (the years of Fraser's model and of the studies are left out).
//
// The definition of the budget-time was moved here from the ethology theme (ethology-008 -> budget-024).
//
// A notion that appears in several courses is asked only once, in the oldest theme.
// Not asked here on purpose:
//   - "genetics sets the predispositions, thresholds and needs" -> genetics-062 / genetics-066
(window.THEMES = window.THEMES || []).push({
  id: "budget",
  title: "Hypertypes comportementaux et budget-temps",
  shortTitle: "Budget-temps",
  questions: [
    // ---------- Type, type comportemental, hypertype comportemental ----------
    {
      id: "budget-001",
      question: "En zootechnie, que désigne un « type » ?",
      answers: [
        "Les attributs morphologiques caractéristiques d'une population ou d'une race, généralement rattachés à une utilisation ou une vocation particulière",
        "Les attributs comportementaux caractéristiques d'une population, d'une race ou d'une lignée, rattachés à son tempérament",
        "L'ensemble des gènes caractéristiques d'une population, transmis de façon identique à tous les individus d'une race",
        "Un groupe de races rassemblées par la FCI en fonction de leur origine géographique et de leurs aptitudes"
      ],
      correct: [0],
      explanation: "En zootechnie, le type désigne les attributs morphologiques caractéristiques d'une population ou d'une race, généralement rattachés à une utilisation ou vocation particulière."
    },
    {
      id: "budget-002",
      question: "Qu'est-ce qu'un type comportemental ?",
      answers: [
        "Les attributs comportementaux caractéristiques d'une population, d'une race (ou d'une lignée)",
        "Les attributs morphologiques caractéristiques d'une population ou d'une race, liés à son utilisation",
        "Un ou plusieurs attributs comportementaux surdéveloppés par une sélection excessive",
        "L'ensemble des comportements recensés pour toute l'espèce canine, toutes races confondues"
      ],
      correct: [0],
      explanation: "Le type comportemental correspond aux attributs comportementaux caractéristiques d'une population, d'une race ou d'une lignée. S'ils sont surdéveloppés, on parle d'hypertype comportemental."
    },
    {
      id: "budget-003",
      question: "Qu'est-ce qu'un hypertype comportemental ?",
      answers: [
        "Un ou plusieurs attributs comportementaux surdéveloppés, résultant d'une sélection ayant provoqué une accentuation importante voire excessive de certains traits, en vue d'une utilisation particulière",
        "Les attributs comportementaux simplement caractéristiques d'une race, tels qu'ils ressortent d'une sélection raisonnée",
        "Une anomalie morphologique apparue par mutation et conservée pour créer une nouvelle race",
        "Un comportement anormal et fréquent, sans fonction, lié à un manque d'activité du chien"
      ],
      correct: [0],
      explanation: "L'hypertype comportemental est un trait comportemental surdéveloppé par une sélection excessive pour une vocation particulière. Un comportement fréquent et non fonctionnel est une stéréotypie."
    },
    {
      id: "budget-004",
      question: "Parmi ces affirmations sur l'influence de la lignée et la race sur le comportement, lesquelles sont vraies ?",
      answers: [
        "Plusieurs études montrent des différences plus marquées entre les lignées d'une même race qu'entre les races elles-mêmes",
        "Les différences entre deux races (Border Collie, Labrador Retriever) sont plus petites que celles entre leurs lignées de beauté et de travail",
        "Les généralisations fondées sur la race ne sont donc pas appropriées",
        "Les différences entre races sont toujours plus grandes que les différences entre lignées d'une même race",
        "Les lignées de beauté et de travail d'une même race ne diffèrent pas sur le plan comportemental"
      ],
      correct: [0, 1, 2],
      explanation: "La lignée compte encore plus que la race : les différences à l'intérieur d'une race (travail contre beauté) dépassent celles entre races. Selon les notes, la sélection travail a plus d'impact que la race."
    },

    // ---------- Bien-être, modèle de Fraser ----------
    {
      id: "budget-005",
      question: "Comment définit-on le bien-être ?",
      answers: [
        "Une relation animal / environnement : une adaptation à moindre coût donne un bien-être élevé, à un coût élevé un bien-être faible, et impossible un mal-être",
        "L'absence totale de contraintes dans l'environnement de l'animal, qui n'a alors plus rien à s'adapter",
        "La satisfaction des seuls besoins physiques de l'animal : alimentation, abri et soins vétérinaires",
        "Un état dans lequel l'animal n'exprime plus que des comportements de repos et de sommeil"
      ],
      correct: [0],
      explanation: "Le bien-être est une relation animal / environnement : plus l'adaptation à l'environnement est réalisée à moindre coût, plus le bien-être est élevé. Si l'adaptation n'est pas possible, c'est du mal-être."
    },
    {
      id: "budget-006",
      question: "Dans le modèle de Fraser, que représentent les zones du schéma ?",
      answers: [
        "Le cercle A, bien-être : l'environnement « naturel » de l'animal, avec les adaptations acquises au cours de l'évolution (et de la domestication)",
        "Le cercle B, mal-être : l'environnement dans lequel l'animal ne peut pas s'adapter",
        "L'intersection, le « coping » (« je fais avec ») : l'environnement auquel l'animal arrive à s'adapter",
        "L'intersection, le bien-être maximal : l'environnement où l'animal n'a plus rien à s'adapter",
        "Le cercle A, mal-être : l'environnement dans lequel l'animal ne peut pas s'adapter"
      ],
      correct: [0, 1, 2],
      explanation: "Modèle de Fraser : cercle A = bien-être (environnement naturel, adaptations de l'évolution et de la domestication) ; cercle B = mal-être (l'animal ne peut pas s'adapter) ; intersection = coping, « je fais avec »."
    },
    {
      id: "budget-007",
      question: "Dans l'exemple des border collies de lignée travail, quelles associations sont exactes ?",
      answers: [
        "Chez un éleveur de brebis, l'adaptation est réalisée à moindre coût : le bien-être est élevé",
        "Chez un particulier qui sort son chien une heure le matin et une heure le soir, l'adaptation se fait à un coût élevé : le bien-être est faible",
        "Chez un particulier qui ne le sort que dans le jardin la semaine et une heure en balade le week-end, l'adaptation n'est pas possible : c'est du mal-être",
        "Chez un éleveur de brebis, l'adaptation se fait à un coût élevé : le bien-être est faible",
        "Chez un particulier qui ne le sort que dans le jardin la semaine, le bien-être est élevé"
      ],
      correct: [0, 1, 2],
      explanation: "Trois frères et sœurs border collies, trois situations : éleveur de brebis = bien-être élevé ; deux sorties d'une heure par jour = bien-être faible ; jardin la semaine et une balade le week-end = mal-être."
    },

    // ---------- Le budget-temps ----------
    {
      id: "budget-024",
      question: "Qu'est-ce que le budget-temps d'un animal ?",
      answers: [
        "L'allocation du temps passé par l'animal à ses activités essentielles (durables)",
        "La durée totale de sa vie, exprimée en années, répartie entre ses différents âges",
        "Le temps nécessaire à l'animal pour apprendre un nouveau comportement avec un renforçateur",
        "Le temps qu'il passe chaque jour en présence de l'Homme, par rapport à celui passé seul"
      ],
      correct: [0],
      explanation: "Le budget-temps (ou budget-activités) est l'allocation du temps passé par un animal à ses activités essentielles : l'animal ajuste ses activités à ses besoins."
    },
    {
      id: "budget-008",
      question: "À quoi sert l'estimation du budget-temps d'un chien ?",
      answers: [
        "À évaluer la compatibilité des besoins du chien avec son environnement",
        "À émettre une hypothèse sur l'origine de comportements problématiques",
        "À avoir une démarche plus cartésienne et mathématique pour responsabiliser le client dans la mise en place d'un protocole",
        "À prévoir la durée de vie du chien en fonction de son niveau d'activité",
        "À remplacer la séance d'éducation par un simple planning d'activités"
      ],
      correct: [0, 1, 2],
      explanation: "Estimer le budget-temps permet d'évaluer la compatibilité besoins/environnement, d'émettre une hypothèse sur l'origine de comportements problématiques et de responsabiliser le client avec une démarche plus cartésienne."
    },
    {
      id: "budget-009",
      question: "Quels rôles peut jouer l'évaluation du budget-temps ?",
      answers: [
        "Un rôle curatif : comprendre et résoudre des problèmes comportementaux",
        "Un rôle préventif : prévenir des comportements anormaux",
        "Le rôle préventif est particulièrement important face à un chien « spécialisé »",
        "Un rôle uniquement curatif, une fois que les troubles sont installés",
        "Un rôle de choix de la race, avant toute adoption"
      ],
      correct: [0, 1, 2],
      explanation: "Curatif : comprendre et résoudre les problèmes. Préventif : prévenir les comportements anormaux, surtout pour un chien « spécialisé »."
    },
    {
      id: "budget-010",
      question: "Quelle différence y a-t-il entre un chien féral et un chien errant ?",
      answers: [
        "Le chien féral est un chien sauvage né dans la nature ; le chien errant est né chez l'humain puis a été abandonné",
        "Le chien errant est un chien sauvage né dans la nature ; le chien féral est né chez l'humain puis a été abandonné",
        "Le chien féral vit en groupe, alors que le chien errant vit toujours seul, sans contact avec ses congénères",
        "Aucune : ce sont deux mots pour désigner des chiens qui vivent sans propriétaire"
      ],
      correct: [0],
      explanation: "Chiens féraux : population de chiens sauvages nés dans la nature. Chiens errants : nés chez l'humain puis abandonnés."
    },
    {
      id: "budget-011",
      question: "Dans l'étude sur les chiens féraux, quelle activité occupe la plus grande part du budget-temps ?",
      answers: [
        "Le repos, environ la moitié du temps",
        "L'activité, environ la moitié du temps",
        "Le déplacement, environ la moitié du temps",
        "Les interactions avec l'Homme, environ la moitié du temps"
      ],
      correct: [0],
      explanation: "Chiens féraux : repos 48 %, activité 40 %, déplacement 12 %."
    },
    {
      id: "budget-012",
      question: "Quelles variations sont notées dans le budget-temps des chiens féraux ?",
      answers: [
        "Les femelles sont plus actives que les mâles",
        "Il y a plus d'activité au printemps et à l'automne",
        "Les pics d'activité ont lieu à l'aube et au crépuscule",
        "Les pics d'activité ont lieu au milieu de la journée",
        "L'activité est identique toute l'année"
      ],
      correct: [0, 1, 2],
      explanation: "Chez les chiens féraux : femelles plus actives, plus d'activité au printemps et à l'automne, pics d'activité à l'aube et au crépuscule."
    },
    {
      id: "budget-013",
      question: "Quelles affirmations sont exactes sur le budget-temps des chiens errants étudiés en Inde (journée de 12 heures en période diurne) ?",
      answers: [
        "Environ la moitié du temps (près de 6 h) est consacré à l'inactivité",
        "Environ un quart du temps est consacré à l'activité, déplacements compris",
        "Environ 11 % du temps est consacré à des interactions entre les hommes et les chiens",
        "Plus de la moitié du temps est consacré aux déplacements",
        "La majorité du temps est consacré aux interactions avec les hommes"
      ],
      correct: [0, 1, 2],
      explanation: "Chiens errants (Inde) : environ 53 % d'inactivité (6 h), 27 % d'activité (dont environ 16 % de déplacement), 11 % d'interactions homme/chien, le reste en autres activités."
    },
    {
      id: "budget-014",
      question: "Que provoque généralement le manque d'activité chez le chien de compagnie, dont le budget-temps est loin de celui des chiens « libres » ?",
      answers: [
        "Des vocalisations intempestives",
        "De la destruction",
        "Une exploration excessive (orale notamment)",
        "De l'agressivité",
        "Une diminution naturelle de ses besoins d'activité",
        "Une meilleure obéissance au quotidien"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Le manque d'activité se traduit généralement par le développement de comportements anormaux : vocalisations intempestives, destruction, exploration excessive, agressivité, voire stéréotypies."
    },
    {
      id: "budget-015",
      question: "Quels comportements sont des stéréotypies ?",
      answers: [
        "Un toilettage excessif, pouvant provoquer des plaies de léchage",
        "Des déplacements répétitifs dans la maison ou le jardin",
        "Tourner en rond dans une cage ou un box",
        "Tourner autour de sa queue",
        "Aboyer brièvement à l'arrivée d'un inconnu",
        "Se rouler dans l'herbe à la fin de la balade"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Exemples de stéréotypies : toilettage excessif, déplacements répétitifs, tourner en rond dans une cage ou autour de sa queue."
    },
    {
      id: "budget-016",
      question: "Qu'est-ce qu'une stéréotypie ?",
      answers: [
        "Un comportement fréquent et non fonctionnel",
        "Un comportement rare, mais utile à la survie de l'animal",
        "Un comportement appris par association avec une récompense",
        "Un comportement inné qui apparaît dès la naissance chez tous les individus"
      ],
      correct: [0],
      explanation: "Une stéréotypie est un comportement fréquent et non fonctionnel : elle est typiquement liée à un manque d'activité."
    },

    // ---------- Les besoins du chien ----------
    {
      id: "budget-017",
      question: "Qu'appelle-t-on les besoins biologiques ?",
      answers: [
        "Des besoins fondamentaux auxquels l'animal doit absolument répondre pour être satisfait ; sinon, il cherchera à y répondre d'une façon ou d'une autre, ce qui peut entraîner des troubles du comportement importants",
        "Des besoins secondaires, que l'animal peut facilement mettre de côté sans conséquence pour son bien-être",
        "Les besoins purement alimentaires et physiques de l'animal : nourriture, eau et abri",
        "Les besoins que l'Homme impose à l'animal pour qu'il s'adapte à sa vie en famille"
      ],
      correct: [0],
      explanation: "Les besoins biologiques sont fondamentaux : s'ils ne sont pas comblés, l'animal cherche par tous les moyens à y répondre, ce qui peut entraîner des troubles du comportement importants."
    },
    {
      id: "budget-018",
      question: "Parmi ces affirmations sur les besoins d'activité du chien, lesquelles sont vraies ?",
      answers: [
        "Un chien a en moyenne besoin d'environ 5 heures d'activités par jour",
        "C'est un paramètre variable en fonction du tempérament de l'animal",
        "5 heures d'activité, ce n'est pas 5 heures de balade",
        "La lignée (patrimoine génétique) et les tempéraments individuels donnent une très grande amplitude de besoins",
        "Tous les chiens ont exactement les mêmes besoins d'activité, quelle que soit leur lignée",
        "Une heure de balade par jour couvre en général les besoins de tous les chiens"
      ],
      correct: [0, 1, 2, 3],
      explanation: "En moyenne environ 5 h d'activités par jour, mais c'est une moyenne : très variable selon la lignée et le tempérament, et pas équivalent à 5 h de promenade."
    },
    {
      id: "budget-019",
      question: "Sous quelles formes les besoins du chien s'expriment-ils ?",
      answers: [
        "Des comportements de prédation",
        "Des comportements locomoteurs",
        "Des comportements de jeu",
        "Des comportements de mastication",
        "Des comportements d'attachement",
        "Des comportements de thermorégulation",
        "Des comportements de migration saisonnière"
      ],
      correct: [0, 1, 2, 3, 4],
      explanation: "Besoins exprimés sous forme de comportements : prédation, locomoteurs, jeu, mastication, agression, vocalise, apprentissage, sexuels et érotiques, communication, repos et sommeil, attachement."
    },
    {
      id: "budget-025",
      question: "Lesquels de ces comportements expriment un besoin du chien ?",
      answers: [
        "Des comportements d'agression",
        "Des comportements de vocalise",
        "Des comportements d'apprentissage",
        "Des comportements de construction d'un nid",
        "Des comportements de stockage de nourriture"
      ],
      correct: [0, 1, 2],
      explanation: "Suite des besoins exprimés sous forme de comportements : agression, vocalise, apprentissage."
    },
    {
      id: "budget-026",
      question: "Parmi ces propositions, lesquelles sont des comportements qui expriment un besoin du chien ?",
      answers: [
        "Des comportements sexuels et érotiques",
        "Des comportements de communication",
        "Des comportements de repos et de sommeil",
        "Des comportements de thermorégulation",
        "Des comportements de migration saisonnière"
      ],
      correct: [0, 1, 2],
      explanation: "Besoins exprimés sous forme de comportements : prédation, locomoteurs, jeu, mastication, agression, vocalise, apprentissage, sexuels et érotiques, communication, repos et sommeil, attachement."
    },

    // ---------- Le modèle activités ----------
    {
      id: "budget-020",
      question: "Quelles activités font partie du modèle activité du Dr Dehasse (l'activité générale étant leur somme) ?",
      answers: [
        "La sécurisation",
        "L'alimentation",
        "La chasse",
        "L'activité sexuelle",
        "Le repos et le sommeil",
        "L'attachement"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Le modèle activité compte 11 activités : sécurisation, alimentation, chasse, sexuelle, socialisation, agressive, locomotrice, vocale, masticatoire, jeu, intellectuelle. Repos/sommeil et attachement n'y figurent pas."
    },
    {
      id: "budget-021",
      question: "Lesquelles de ces propositions font partie du modèle activité du Dr Dehasse ?",
      answers: [
        "La socialisation",
        "L'activité agressive",
        "L'activité vocale",
        "L'activité intellectuelle",
        "La communication",
        "L'attachement"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Socialisation, agressive, vocale et intellectuelle font partie des 11 activités du modèle (avec locomotrice, masticatoire et jeu). La communication et l'attachement n'y sont pas listés."
    },
    {
      id: "budget-027",
      question: "Parmi ces activités, lesquelles font partie du modèle activité du Dr Dehasse ?",
      answers: [
        "L'activité locomotrice",
        "L'activité masticatoire",
        "Le jeu",
        "Le repos et le sommeil",
        "La communication"
      ],
      correct: [0, 1, 2],
      explanation: "Les 11 activités : sécurisation, alimentation, chasse, sexuelle, socialisation, agressive, locomotrice, vocale, masticatoire, jeu, intellectuelle (ici les trois dernières à découvrir)."
    },
    {
      id: "budget-022",
      question: "Est-il possible d'adapter n'importe quel chien à n'importe quel environnement ?",
      answers: [
        "Tout est possible sur le plan théorique, mais tout n'est pas réaliste, soutenable ou éthique sur le plan pratique",
        "L'éducation peut moduler et canaliser les prédispositions, mais pas compenser durablement une incompatibilité d'investissement des humains",
        "Le rôle de l'éducateur est aussi d'évaluer la viabilité et le bien-être du trinôme chien–humain–environnement",
        "Oui, à condition de consacrer assez d'heures de travail quotidien pour compenser l'inadéquation",
        "La génétique détermine un comportement précis, quel que soit l'environnement"
      ],
      correct: [0, 1, 2],
      explanation: "Dans certaines configurations, le poids du bagage génétique rend l'adaptation irréaliste. L'éducation module les prédispositions mais ne compense pas durablement un manque d'investissement : l'éducateur évalue aussi la viabilité du trinôme."
    },

    // ---------- Conclusion ----------
    {
      id: "budget-023",
      question: "Quelles conclusions peut-on tirer du budget-temps pour l'éducateur ?",
      answers: [
        "L'analyse de la relation besoins/environnement est primordiale, à titre curatif comme préventif",
        "Il faut aborder cette thématique avec pédagogie, pour que les clients prennent conscience des besoins de leur animal",
        "Il faut établir des schémas budget-temps réalistes et cohérents avec les capacités des propriétaires (disponibilité, capacités physiques et financières)",
        "Face à une situation sans issue, il n'y a pas de solution miracle : il faut dialoguer et chercher l'issue la plus favorable pour le maître comme pour le chien",
        "Il existe toujours une solution miracle pour adapter un chien à ses propriétaires",
        "L'éducateur doit se limiter à éduquer le chien, sans s'occuper de l'environnement"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Conclusion : relation besoins/environnement primordiale, pédagogie, budget-temps réalistes, et dialogue lorsque la situation est sans issue (chien à gros besoins, maîtres indisponibles)."
    }
  ]
});
