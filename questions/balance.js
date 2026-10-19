// Theme 15 — Course 15: Équilibre éducatif (+ questions that compare the three education methods)
// (question format: see questions/origins.js)
//
// Sources: the course summary and the Lexique only. No very precise dates.
// This theme holds (1) the notions of course 15, (2) the TRANSVERSE questions between the three methods of
// courses 12 (traditionnelle), 13 (positive) and 14 (naturelle), as announced.
//
// Not asked: the NUMBER of main rewards (course 13 says 5, course 15 says 4: the courses disagree).
// "Éducation restrictive (coercitive)" of course 15 is the reprimand-based education, without violence:
// it is not the same thing as the "traditional" education of course 12 (famille-meute).
// The mimetism (imitation) is used in natural education: never use it as a wrong answer for that method.
//
// Removed on purpose (never reuse this id): balance-011 (rappels of the positive education) -> positive-001 and
// the "primary / secondary" question of the transverse section already cover it.

(window.THEMES = window.THEMES || []).push({
  id: "balance",
  title: "Équilibre éducatif",
  shortTitle: "Équilibre éducatif",
  questions: [
    // ---------- Un équilibre nécessaire ----------
    {
      id: "balance-001",
      question: "Qu'est-ce que l'équilibre éducatif ?",
      answers: [
        "Une éducation à l'intersection de l'éducation positive, naturelle et restrictive, sans aucun extrême absolu",
        "Une éducation qui alterne chaque semaine l'éducation positive et l'éducation traditionnelle, sans fil directeur",
        "Une éducation qui reste toujours dans l'éducation positive, avec une part de jeu et de récompense importante",
        "Une éducation qui utilise uniquement l'éducation naturelle, en l'absence de tout interdit ou de toute limite"
      ],
      correct: [0],
      explanation: "Équilibre éducatif : intersection des trois éducations, aucun extrême absolu."
    },
    {
      id: "balance-002",
      question: "Quels sont les trois cercles du diagramme de l'équilibre éducatif ?",
      answers: [
        "L'éducation positive",
        "L'éducation naturelle",
        "L'éducation restrictive",
        "L'éducation traditionnelle",
        "L'éducation par « Do As I Do »"
      ],
      correct: [0, 1, 2],
      explanation: "Diagramme de Venn à 3 cercles."
    },
    {
      id: "balance-003",
      question: "Où se situe l'équilibre éducatif dans le diagramme ?",
      answers: [
        "À l'intersection des trois cercles, là où les trois méthodes se rejoignent",
        "Dans le cercle de l'éducation positive, qui est la méthode la plus respectueuse de l'animal",
        "Dans le cercle de l'éducation restrictive, qui pose le cadre et les limites nécessaires au chien",
        "En dehors des cercles, dans une méthode nouvelle qui remplace les trois autres méthodes éducatives"
      ],
      correct: [0],
      explanation: "L'équilibre est à l'intersection des trois méthodes."
    },
    {
      id: "balance-004",
      question: "Pourquoi l'éducation d'un chien ne doit-elle jamais se faire dans un extrême absolu ?",
      answers: [
        "L'objectif est d'en faire un compagnon équilibré",
        "Le chien ne se comporte jamais de façon absolument positive ou négative",
        "Tous les chiens ne présentent pas la même réceptivité à un stimulus positif ou négatif",
        "Fonctionner de façon absolue avec une méthode donnée, c'est nier l'individualité de chaque chien",
        "Parce que les méthodes extrêmes sont interdites par la loi",
        "Parce que tous les chiens présentent exactement la même réceptivité aux stimuli"
      ],
      correct: [0, 1, 2, 3],
      explanation: "On ne peut pas se reposer sur une éducation strictement positive ou coercitive."
    },

    // ---------- L'éducation restrictive (coercitive) ----------
    {
      id: "balance-005",
      question: "Parmi ces affirmations sur l'éducation restrictive (coercitive), lesquelles sont vraies ?",
      answers: [
        "Elle est basée sur la réprimande des mauvais comportements par conditionnement simple ou opérant",
        "Son objectif est de faire baisser en fréquence les mauvais comportements, que l'on souhaite voir disparaître",
        "Elle est basée sur le renforcement positif des bons comportements",
        "Son objectif est de faire augmenter en fréquence un comportement que l'on souhaite voir se reproduire"
      ],
      correct: [0, 1],
      explanation: "Éducation restrictive : réprimande des mauvais comportements."
    },
    {
      id: "balance-006",
      question: "Que peut-on faire à mesure que le comportement indésirable disparaît ?",
      answers: [
        "Diminuer l'utilisation de la réprimande primaire au profit de la réprimande secondaire",
        "Augmenter l'intensité de la réprimande primaire pour consolider la disparition",
        "Supprimer immédiatement toute forme de réprimande, même secondaire",
        "Remplacer la réprimande par un renforçateur primaire, comme une friandise"
      ],
      correct: [0],
      explanation: "Plus le comportement disparaît, plus on peut diminuer la réprimande primaire."
    },
    {
      id: "balance-007",
      question: "Quand utilise-t-on l'éducation restrictive ?",
      answers: [
        "Lorsqu'on souhaite mettre en place des interdits et des limites",
        "Lorsqu'on souhaite faire baisser en fréquence un comportement",
        "Lorsqu'on ne peut pas utiliser l'éducation positive ou naturelle pour travailler un problème de comportement",
        "Lorsqu'on travaille les ordres",
        "Lorsqu'on souhaite renforcer la réceptivité générale"
      ],
      correct: [0, 1, 2],
      explanation: "Interdits et limites, baisse de fréquence, ou impossibilité d'utiliser les autres méthodes."
    },
    {
      id: "balance-008",
      question: "Comment pratique-t-on l'éducation restrictive ?",
      answers: [
        "En restant calme, sans s'énerver ni s'agiter de façon nerveuse",
        "En étant rigoureux dans la mise en place des interdits",
        "En se positionnant correctement (communication)",
        "En gardant une attitude positive, détendue et joyeuse",
        "En laissant le chien en liberté, sans intervention du maître"
      ],
      correct: [0, 1, 2],
      explanation: "Calme, rigueur, bon positionnement."
    },
    {
      id: "balance-009",
      question: "Quelles sont des associations négatives efficaces et sans violence ?",
      answers: [
        "L'ignorance",
        "L'attitude ferme",
        "La cessation du jeu",
        "L'exclusion",
        "Le retrait de quelque chose de positif",
        "Le collier à pointes",
        "Le roulé alpha"
      ],
      correct: [0, 1, 2, 3, 4],
      explanation: "On travaille avec des associations négatives efficaces et sans violence."
    },
    {
      id: "balance-010",
      question: "Quels problèmes de comportement se résolvent avec l'éducation restrictive ?",
      answers: [
        "Le chien qui aboie de façon intempestive à la maison",
        "Le chien qui devient agressif vis-à-vis de certains congénères",
        "Le chien qui court derrière les joggeurs ou les cyclistes",
        "Le chien qui saute sur les invités",
        "Le chien qui stresse en milieu urbain"
      ],
      correct: [0, 1, 2],
      explanation: "Exemples d'utilisation de l'éducation restrictive."
    },

    // ---------- L'éducation positive : rappels ----------
    {
      id: "balance-012",
      question: "Quand utilise-t-on l'éducation positive ?",
      answers: [
        "Lorsqu'on travaille les ordres",
        "Lorsqu'on souhaite renforcer des comportements spécifiques",
        "Lorsqu'on souhaite renforcer la réceptivité générale",
        "Lorsqu'on souhaite mettre en place des interdits et des limites",
        "Lorsqu'on maîtrise le risque des confrontations avec des stimuli"
      ],
      correct: [0, 1, 2],
      explanation: "Ordres, comportements spécifiques, réceptivité générale."
    },
    {
      id: "balance-013",
      question: "Comment pratique-t-on l'éducation positive ?",
      answers: [
        "Par l'utilisation des principales récompenses",
        "En étant rigoureux dans la communication",
        "En gardant une attitude positive, détendue et joyeuse",
        "En travaillant de façon progressive (3D)",
        "En utilisant le clicker training ou la méthode « Do As I Do »",
        "En restant ferme et en excluant le chien après chaque erreur",
        "En laissant le chien en liberté sans intervenir"
      ],
      correct: [0, 1, 2, 3, 4],
      explanation: "Récompenses, communication, attitude joyeuse, progressivité, clicker ou Do As I Do."
    },
    {
      id: "balance-014",
      question: "Quels problèmes de comportement se résolvent avec l'éducation positive ?",
      answers: [
        "Le chien qui saute sur les invités",
        "Le chien qui ne rapporte pas la balle",
        "Le chien qui court derrière les joggeurs ou les cyclistes",
        "Le chien qui aboie de façon intempestive à la maison",
        "Le chien qui saute sur les passants"
      ],
      correct: [0, 1, 2],
      explanation: "Le chien qui court derrière joggeurs et cyclistes se traite aussi avec la méthode restrictive."
    },

    // ---------- L'éducation naturelle : rappels ----------
    {
      id: "balance-015",
      question: "Comment résume-t-on l'éducation naturelle ?",
      answers: [
        "Des apprentissages autonomes, avec une non-intervention du maître",
        "Des apprentissages guidés par le maître et récompensés à chaque étape",
        "Des apprentissages fondés sur la réprimande des mauvais comportements",
        "Des apprentissages par conditionnement opérant, avec marquage et renforçateur"
      ],
      correct: [0],
      explanation: "Éducation naturelle : apprentissages autonomes + non-intervention du maître."
    },
    {
      id: "balance-016",
      question: "Quelles associations mécanisme / description sont exactes ?",
      answers: [
        "Imprégnation : période de 3 à 12 voire 16 semaines, durant laquelle le chiot apprend qu'il existe d'autres espèces que la sienne",
        "Autorégulation : le chien finit par s'autoréguler en constatant qu'il n'a pas d'intérêt à reproduire le comportement",
        "Habituation : confrontation régulière voire quotidienne, en liberté ou non, à un ensemble de stimuli auxquels le chien s'habitue",
        "Habituation : le chien sature et finit par ne plus s'intéresser du tout à un environnement très riche",
        "Autorégulation : le chien reproduit le comportement dont le maître vient de lui montrer l'intérêt"
      ],
      correct: [0, 1, 2],
      explanation: "Rappels du cours 15."
    },
    {
      id: "balance-017",
      question: "Quelles associations saturation et mimétisme / description sont exactes ?",
      answers: [
        "Saturation : le chien ne peut pas se concentrer sur tous les éléments d'un environnement très riche, il sature et finit par ne plus s'y intéresser du tout",
        "Mimétisme : intraspécifique (congénères) ou interspécifique (Homme)",
        "Saturation : confrontation régulière, voire quotidienne, à un ensemble de stimuli, en liberté ou non",
        "Mimétisme : apprentissage obtenu uniquement par la récompense du maître"
      ],
      correct: [0, 1],
      explanation: "Saturation et mimétisme."
    },
    {
      id: "balance-018",
      question: "Quand utilise-t-on l'éducation naturelle ?",
      answers: [
        "Dans la socialisation (congénères), la familiarisation (autres espèces) et l'habituation (environnements) du chiot et du chien adulte",
        "De façon plus intense, dans un processus de rééducation",
        "Lorsqu'on maîtrise le risque des confrontations (pour le chien comme pour les tiers)",
        "Lorsque l'éducation positive ne suffit pas à modifier le comportement",
        "Lorsqu'on travaille les ordres",
        "Lorsqu'on souhaite mettre en place des interdits et des limites"
      ],
      correct: [0, 1, 2, 3],
      explanation: "Socialisation, rééducation, risque maîtrisé, échec de la positive."
    },
    {
      id: "balance-019",
      question: "Comment pratique-t-on l'éducation naturelle en éducation générale ?",
      answers: [
        "En favorisant la socialisation, la familiarisation et l'habituation de façon progressive, par l'imprégnation, l'autorégulation, l'habituation et l'observation",
        "En utilisant en priorité l'immersion (saturation), de façon intense, dès le plus jeune âge et pour tous les stimuli",
        "En marquant chaque bon comportement avec un clicker, puis en le renforçant par une friandise de forte valeur",
        "En réprimandant les comportements indésirables avec des associations négatives efficaces et sans violence"
      ],
      correct: [0],
      explanation: "En rééducation, on utilise l'immersion (saturation) et l'apprentissage par observation."
    },
    {
      id: "balance-020",
      question: "Quels problèmes de comportement se résolvent avec l'éducation naturelle ?",
      answers: [
        "Le chien qui saute sur les passants",
        "Le chien qui court voir ses congénères et leur saute dessus pour jouer",
        "Le chien qui stresse en milieu urbain",
        "Le chien qui saute sur les invités",
        "Le chien qui ne rapporte pas la balle"
      ],
      correct: [0, 1, 2],
      explanation: "Attention : sauter sur les invités se traite plutôt en éducation positive."
    },

    // ---------- Questions transverses : comparer les trois méthodes ----------
    {
      id: "balance-021",
      question: "Quelles associations méthode / système d'apprentissage sont exactes ?",
      answers: [
        "Éducation traditionnelle : punition positive (P+) et renforcement négatif (R-)",
        "Éducation positive : renforcement positif (R+) et punition négative (P-)",
        "Éducation naturelle : apprentissages autonomes, sans système de récompense ni de sanction",
        "Éducation positive : punition positive (P+) et renforcement négatif (R-)",
        "Éducation traditionnelle : renforcement positif (R+) et punition négative (P-)"
      ],
      correct: [0, 1, 2],
      explanation: "Traditionnelle = P+ et R- ; positive = R+ et P- ; naturelle = ni récompense ni sanction."
    },
    {
      id: "balance-022",
      question: "Quels sont les mécanismes d'apprentissage de chaque méthode ?",
      answers: [
        "Éducation positive : conditionnement simple ou opérant, par renforcement des bons comportements",
        "Éducation restrictive : conditionnement simple ou opérant, par réprimande des mauvais comportements",
        "Éducation naturelle : imprégnation, autorégulation, habituation, saturation et mimétisme",
        "Éducation naturelle : conditionnement opérant avec marquage au clicker",
        "Éducation positive : autorégulation par essais-erreurs en liberté"
      ],
      correct: [0, 1, 2],
      explanation: "Positive et restrictive reposent sur le conditionnement ; naturelle sur des apprentissages autonomes."
    },
    {
      id: "balance-023",
      question: "Quels outils sont associés à chaque méthode ?",
      answers: [
        "Éducation positive : clicker, friandises, jeu",
        "Éducation traditionnelle : colliers étrangleurs, badines, martinets...",
        "Éducation naturelle : aucun outil",
        "Éducation naturelle : colliers de rappel et laisse tendue",
        "Éducation positive : colliers étrangleurs et fouets"
      ],
      correct: [0, 1, 2],
      explanation: "La méthode naturelle ne nécessite aucun outil."
    },
    {
      id: "balance-024",
      question: "Quelle méthode est efficace même avec un chien non motivé par une quelconque forme de récompense ?",
      answers: [
        "L'éducation naturelle",
        "L'éducation positive",
        "Le clicker training",
        "La méthode « Do as I do »"
      ],
      correct: [0],
      explanation: "Les apprentissages de l'éducation naturelle ne dépendent ni d'un système de récompense, ni d'un système de sanction."
    },
    {
      id: "balance-025",
      question: "Quelle méthode ne permet pas de travailler l'apprentissage d'ordres ni la réceptivité ?",
      answers: [
        "L'éducation naturelle",
        "L'éducation positive",
        "L'éducation traditionnelle",
        "L'éducation restrictive, pour mettre en place des interdits"
      ],
      correct: [0],
      explanation: "L'éducation naturelle ne permet pas de travailler l'apprentissage d'ordres et la réceptivité."
    },
    {
      id: "balance-026",
      question: "Quelles associations méthode / dérive sont exactes ?",
      answers: [
        "Éducation positive : bannir le « non » et renforcer des chaînes de comportements",
        "Éducation naturelle : la non-intervention absolue des maîtres dans les écoles de chiots",
        "Éducation traditionnelle : l'état de détresse acquise (résignation) du chien",
        "Éducation positive : la non-intervention absolue des maîtres dans les écoles de chiots",
        "Éducation naturelle : bannir le « non » du vocabulaire"
      ],
      correct: [0, 1, 2],
      explanation: "Chaque méthode a sa dérive propre."
    },
    {
      id: "balance-027",
      question: "Quelles associations méthode / risque de dépendance sont exactes ?",
      answers: [
        "Éducation positive : risque de dépendance à la récompense si elle est mal travaillée",
        "Éducation traditionnelle : pas de dépendance à la nourriture",
        "Éducation naturelle : les apprentissages ne dépendent ni d'un système de récompense ni d'un système de sanction",
        "Éducation traditionnelle : risque de dépendance à la récompense",
        "Éducation positive : aucun apprentissage ne dépend d'une récompense"
      ],
      correct: [0, 1, 2],
      explanation: "Dépendance à la récompense : un inconvénient de l'éducation positive."
    },
    {
      id: "balance-028",
      question: "Quelles associations méthode / problème de comportement sont exactes ?",
      answers: [
        "Le chien qui aboie de façon intempestive : éducation restrictive",
        "Le chien qui ne rapporte pas la balle : éducation positive",
        "Le chien qui stresse en milieu urbain : éducation naturelle",
        "Le chien qui aboie de façon intempestive : éducation naturelle",
        "Le chien qui stresse en milieu urbain : éducation positive"
      ],
      correct: [0, 1, 2],
      explanation: "Chaque méthode a ses indications."
    },
    {
      id: "balance-029",
      question: "Que fait-on à mesure que le comportement progresse, en éducation positive et en éducation restrictive ?",
      answers: [
        "Positive : on diminue le renforçateur primaire (friandises) au profit d'un renforçateur secondaire",
        "Restrictive : on diminue la réprimande primaire au profit de la réprimande secondaire",
        "Positive : on augmente la quantité de friandises",
        "Restrictive : on augmente l'intensité de la réprimande"
      ],
      correct: [0, 1],
      explanation: "Dans les deux méthodes, on passe du primaire au secondaire."
    },
    {
      id: "balance-030",
      question: "Quel est le rôle du maître dans chaque méthode ?",
      answers: [
        "Éducation positive : il renforce les bons comportements",
        "Éducation restrictive : il réprimande les mauvais comportements",
        "Éducation naturelle : il n'intervient pas dans les apprentissages, qui sont autonomes",
        "Éducation positive : il réprimande les mauvais comportements",
        "Éducation naturelle : il renforce chaque comportement par une récompense"
      ],
      correct: [0, 1, 2],
      explanation: "Renforce, réprimande, n'intervient pas."
    },
    {
      id: "balance-031",
      question: "Quelles éducations reposent sur le conditionnement simple ou opérant ?",
      answers: [
        "L'éducation positive",
        "L'éducation restrictive (coercitive)",
        "L'éducation naturelle",
        "L'équilibre éducatif en tant que méthode distincte"
      ],
      correct: [0, 1],
      explanation: "L'éducation naturelle repose sur des apprentissages autonomes."
    }
  ]
});
