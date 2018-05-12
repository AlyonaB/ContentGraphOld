var ns = new vis.DataSet([
    {id: 1, label: 'Node 1'},
    {id: 2, label: 'Node 2'},
    {id: 3, label: 'Node 3'},
    {id: 4, label: 'Node 4'},
    {id: 5, label: 'Node 5'}
]);

var es = new vis.DataSet([
    {from: 1, to: 3},
    {from: 1, to: 2},
    {from: 2, to: 4},
    {from: 2, to: 5}
]);

var subjectsTest = [
    {id: 0, name: "Math", type: "subject", config: {color: "yellow"}},
    {id: 1, name: "IT", type: "subject", config: {color: "blue"}}
];

// var nodesTest = [
//     {id: 1, name: 'OOP', relatesTo: [12], subject: "IT", url: "node.html?id=1"},
//     {id: 2, name: 'Math', relatesTo: [], subject: "Math", url: "node.html?id=2"},
//     {id: 3, name: 'Objects in JavaScript', relatesTo: [1], subject: "IT", url: "node.html?id=3"},
//     {id: 4, name: 'Objects in Java', relatesTo: [1], subject: "IT", url: "node.html?id=4"},
//     {id: 5, name: 'OOP in Java', relatesTo: [1,4,12], subject: "IT", url: "node.html?id=5"},
//     {id: 6, name: 'Matrices', relatesTo: [2,7,9,11], subject: "Math", url: "node.html?id=6"},
//     {id: 7, name: 'Determinants', relatesTo: [2], subject: "Math", url: "node.html?id=7"},
//     {id: 8, name: 'Systems of linear equations', relatesTo: [2], subject: "Math", url: "node.html?id=8"},
//     {id: 9, name: 'Vectors', relatesTo: [2], subject: "Math", url: "node.html?id=9"},
//     {id: 10, name: 'Scalar product of vectors', relatesTo: [2,6, 9], subject: "Math", url: "node.html?id=10"},
//     {id: 11, name: 'Numerical analysis', relatesTo: [12], subject: "IT", url: "node.html?id=11"},
//     {id: 12, name: 'Algorithms', relatesTo: [], subject: "IT", url: "node.html?id=12"}
// ];
var nodesTest = [
    {
        "id": "1",
        "name": "Головна",
        "url": "https://history-time.in.ua/",
        "relatesTo": [
            "1",
            "61",
            "60",
            "59",
            "58",
            "57",
            "56",
            "55",
            "54",
            "53",
            "52",
            "51",
            "50",
            "49",
            "48",
            "47",
            "46",
            "45",
            "44",
            "43",
            "42",
            "41",
            "40",
            "39",
            "38",
            "37",
            "36",
            "35",
            "34",
            "33",
            "32",
            "31",
            "30",
            "29",
            "28",
            "27",
            "26",
            "25",
            "24",
            "23",
            "22",
            "21",
            "20",
            "19",
            "18",
            "17",
            "16",
            "15",
            "14",
            "13",
            "12",
            "11",
            "10",
            "9",
            "8",
            "7",
            "6",
            "4",
            "3",
            "2"
        ]
    },
    {
        "id": "2",
        "name": "Третій Універсал",
        "url": "https://history-time.in.ua/concept/2",
        "relatesTo": [
            "1",
            "61"
        ],
        "group": "Group #0"
    },
    {
        "id": "3",
        "name": "Повість минулих літ",
        "url": "https://history-time.in.ua/concept/4",
        "relatesTo": [
            "1",
            "61",
            "16",
            "15",
            "11",
            "4",
            "53",
            "48"
        ],
        "group": "Group #1"
    },
    {
        "id": "4",
        "name": "Київська Русь",
        "url": "https://history-time.in.ua/concept/3",
        "relatesTo": [
            "1",
            "61",
            "3",
            "4",
            "11",
            "9",
            "5",
            "16",
            "17",
            "15",
            "14",
            "13",
            "6",
            "32",
            "20",
            "34",
            "28",
            "55",
            "51",
            "54",
            "53",
            "43",
            "29",
            "31",
            "40",
            "52",
            "50",
            "58",
            "44",
            "37",
            "39",
            "56",
            "57",
            "49",
            "41",
            "59",
            "47",
            "42",
            "36",
            "48",
            "45",
            "26",
            "60",
            "30"
        ],
        "group": "Group #2"
    },
    {
        "id": "5",
        "name": "Бояри",
        "url": "https://history-time.in.ua/concept/18",
        "relatesTo": [
            "1",
            "61",
            "55",
            "53",
            "58",
            "57",
            "60"
        ],
        "group": "Group #2"
    },
    {
        "id": "6",
        "name": "Прийняття християнства",
        "url": "https://history-time.in.ua/concept/16",
        "relatesTo": [
            "1",
            "61",
            "4",
            "14",
            "54",
            "53",
            "50",
            "44",
            "47",
            "60"
        ],
        "group": "Group #2"
    },
    {
        "id": "7",
        "name": "Грушевський Михайло Сергійович",
        "url": "https://history-time.in.ua/concept/1",
        "relatesTo": [
            "1",
            "61"
        ],
        "group": "Group #0"
    },
    {
        "id": "8",
        "name": "Володимир Мономах",
        "url": "https://history-time.in.ua/concept/14",
        "relatesTo": [
            "1",
            "61",
            "4",
            "54",
            "53",
            "40",
            "39",
            "56",
            "42",
            "36"
        ],
        "group": "Group #1"
    },
    {
        "id": "9",
        "name": "Ярослав",
        "url": "https://history-time.in.ua/concept/13",
        "relatesTo": [
            "1",
            "61",
            "4",
            "11",
            "9",
            "33",
            "34",
            "28",
            "54",
            "53",
            "43",
            "58",
            "37",
            "39",
            "56",
            "46",
            "41",
            "47",
            "45",
            "38",
            "26"
        ],
        "group": "Group #1"
    },
    {
        "id": "10",
        "name": "Святополк",
        "url": "https://history-time.in.ua/concept/12",
        "relatesTo": [
            "1",
            "61",
            "11",
            "13",
            "9",
            "10",
            "53",
            "39",
            "46",
            "47"
        ],
        "group": "Group #1"
    },
    {
        "id": "11",
        "name": "Володимир",
        "url": "https://history-time.in.ua/concept/11",
        "relatesTo": [
            "1",
            "61",
            "4",
            "9",
            "11",
            "6",
            "33",
            "32",
            "27",
            "20",
            "34",
            "28",
            "54",
            "53",
            "43",
            "40",
            "50",
            "58",
            "44",
            "37",
            "39",
            "56",
            "24",
            "46",
            "49",
            "41",
            "47",
            "42",
            "36",
            "48",
            "45",
            "38",
            "26"
        ],
        "group": "Group #1"
    },
    {
        "id": "12",
        "name": "Ярополк",
        "url": "https://history-time.in.ua/concept/10",
        "relatesTo": [
            "1",
            "61",
            "4",
            "12",
            "40",
            "48"
        ],
        "group": "Group #1"
    },
    {
        "id": "13",
        "name": "Святослав",
        "url": "https://history-time.in.ua/concept/9",
        "relatesTo": [
            "1",
            "61",
            "4",
            "16",
            "11",
            "13",
            "54",
            "53",
            "43",
            "50",
            "39",
            "56",
            "46",
            "49"
        ],
        "group": "Group #1"
    },
    {
        "id": "14",
        "name": "Ольга",
        "url": "https://history-time.in.ua/concept/8",
        "relatesTo": [
            "1",
            "61",
            "15",
            "6",
            "4",
            "14",
            "13",
            "54",
            "53",
            "50",
            "44",
            "49"
        ],
        "group": "Group #1"
    },
    {
        "id": "15",
        "name": "Ігор",
        "url": "https://history-time.in.ua/concept/7",
        "relatesTo": [
            "1",
            "61",
            "15",
            "4",
            "51",
            "54",
            "53",
            "43",
            "52",
            "50",
            "39",
            "41",
            "60"
        ],
        "group": "Group #1"
    },
    {
        "id": "16",
        "name": "Олег",
        "url": "https://history-time.in.ua/concept/6",
        "relatesTo": [
            "1",
            "61",
            "15",
            "16",
            "4",
            "53",
            "52",
            "49",
            "38",
            "60"
        ],
        "group": "Group #1"
    },
    {
        "id": "17",
        "name": "Аскольд і Дір",
        "url": "https://history-time.in.ua/concept/5",
        "relatesTo": [
            "1",
            "61",
            "16",
            "15",
            "17",
            "4",
            "53",
            "60"
        ],
        "group": "Group #2"
    },
    {
        "id": "18",
        "name": "Казимир IV Ягайлович. Відновлення й остаточна ліквідація Київського та Волинського удільних князівств",
        "url": "https://history-time.in.ua/article/kazymyr-iv-yahaylovych-vidnovlennya-y-ostatochna-likvidaciya-kyyivskoho-ta-volynskoho-udilnyh-knyazivstv",
        "relatesTo": [
            "1",
            "61"
        ],
        "group": "Group #0"
    },
    {
        "id": "19",
        "name": "Правління Свидригайла. «Велике князівство Руське»",
        "url": "https://history-time.in.ua/article/pravlinnya-svydryhayla-velyke-knyazivstvo-ruske",
        "relatesTo": [
            "1",
            "61"
        ],
        "group": "Group #0"
    },
    {
        "id": "20",
        "name": "Діяльність Вітовта на українських землях. Захоплення Польщею Західного Поділля",
        "url": "https://history-time.in.ua/article/diyalnist-vitovta-na-ukrayinskyh-zemlyah-zahoplennya-polshcheyu-zahidnoho-podillya",
        "relatesTo": [
            "1",
            "61"
        ],
        "group": "Group #0"
    },
    {
        "id": "21",
        "name": "Громадянська війна (1389-1392 рр.)",
        "url": "https://history-time.in.ua/article/hromadyanska-viyna-1389-1392-rr",
        "relatesTo": [
            "1",
            "61"
        ],
        "group": "Group #4"
    },
    {
        "id": "22",
        "name": "Соціально-економічний розвиток України у другій половині XIV - першій половині XVI ст.",
        "url": "https://history-time.in.ua/article/Socialno-ekonomichnyy-rozvytok-Ukrayiny-u-druhiy-polovyni-XIV---pershiy-polovyni-XVI-st",
        "relatesTo": [
            "1",
            "61"
        ],
        "group": "Group #4"
    },
    {
        "id": "23",
        "name": "Кревська унія та її наслідки",
        "url": "https://history-time.in.ua/article/krevska-uniya-ta-yiyi-naslidky",
        "relatesTo": [
            "1",
            "61"
        ],
        "group": "Group #0"
    },
    {
        "id": "24",
        "name": "Становище українських земель у складі Великого Князівства Литовського. Смерть Ольгерда: початок боротьби за великокняжий престол",
        "url": "https://history-time.in.ua/article/Stanovyshche-ukrayinskyh-zemel-u-skladi-Velykoho-Knyazivstva-Lytovskoho-Smert-Olherda-pochatok-borotby-za-velykoknyazhyy-prestol",
        "relatesTo": [
            "1",
            "61"
        ],
        "group": "Group #2"
    },
    {
        "id": "25",
        "name": "Утвердження польської влади на Галичині",
        "url": "https://history-time.in.ua/article/utverdzhennya-polskoyi-vlady-na-halychyni",
        "relatesTo": [
            "1",
            "61"
        ],
        "group": "Group #1"
    },
    {
        "id": "26",
        "name": "Захоплення українських земель Литовським князівством і Польщею",
        "url": "https://history-time.in.ua/article/Zahoplennya-ukrayinskyh-zemel-Lytovskym-knyazivstvom-i-Polshcheyu",
        "relatesTo": [
            "1",
            "61",
            "11",
            "4",
            "9",
            "58",
            "47",
            "45"
        ],
        "group": "Group #0"
    },
    {
        "id": "27",
        "name": "Данилові нащадки (1264-1349)",
        "url": "https://history-time.in.ua/article/Danylovi-nashchadky-(1264-1349)",
        "relatesTo": [
            "1",
            "61"
        ],
        "group": "Group #4"
    },
    {
        "id": "28",
        "name": "Галицько-Волинське князівство у другій половині XIII - на початку XIV ст.",
        "url": "https://history-time.in.ua/article/Halycko-Volynske-knyazivstvo-u-druhiy-polovyni-XIII---na-pochatku-XIV-st.",
        "relatesTo": [
            "1",
            "61",
            "9",
            "4",
            "11",
            "58",
            "47",
            "45"
        ],
        "group": "Group #4"
    },
    {
        "id": "29",
        "name": "Монголо-татарське іго",
        "url": "https://history-time.in.ua/article/Monholo-tatarske-iho",
        "relatesTo": [
            "1",
            "61",
            "4",
            "58"
        ],
        "group": "Group #1"
    },
    {
        "id": "30",
        "name": "Золота Орда",
        "url": "https://history-time.in.ua/article/Zolota-Orda",
        "relatesTo": [
            "1",
            "61"
        ],
        "group": "Group #1"
    },
    {
        "id": "31",
        "name": "Монгольська імперія",
        "url": "https://history-time.in.ua/article/Monholska-imperiya",
        "relatesTo": [
            "1",
            "61",
            "4",
            "58"
        ],
        "group": "Group #1"
    },
    {
        "id": "32",
        "name": "Битва на Калці",
        "url": "https://history-time.in.ua/article/Bytva-na-Kalci",
        "relatesTo": [
            "1",
            "61",
            "4",
            "11",
            "58",
            "47"
        ],
        "group": "Group #4"
    },
    {
        "id": "33",
        "name": "1205-1238 роки",
        "url": "https://history-time.in.ua/article/1205-1238-roky",
        "relatesTo": [
            "1",
            "61"
        ],
        "group": "Group #4"
    },
    {
        "id": "34",
        "name": "Галицько-Волинське князівство (XII-XIV ст.)",
        "url": "https://history-time.in.ua/article/Halycko-Volynske-knyazivstvo-(XII-XIV-st.)",
        "relatesTo": [
            "1",
            "61"
        ],
        "group": "Group #4"
    },
    {
        "id": "35",
        "name": "Данило Галицький (1201-1264)",
        "url": "https://history-time.in.ua/article/Danylo-Halyckyy-(1201-1264)",
        "relatesTo": [
            "1",
            "61"
        ],
        "group": "Group #4"
    },
    {
        "id": "36",
        "name": "Волинське князівство",
        "url": "https://history-time.in.ua/article/Volynske-knyazivstvo",
        "relatesTo": [
            "1",
            "61",
            "8",
            "4",
            "58",
            "42"
        ],
        "group": "Group #4"
    },
    {
        "id": "37",
        "name": "Роман Мстиславович (бл.1150-1205)",
        "url": "https://history-time.in.ua/article/Roman-Mstyslavovych-(bl.1150-1205)",
        "relatesTo": [
            "1",
            "61",
            "4",
            "58"
        ],
        "group": "Group #4"
    },
    {
        "id": "38",
        "name": "Ярослав Володимирович Осмомисл (бл.1130-1187)",
        "url": "https://history-time.in.ua/article/Yaroslav-Volodymyrovych-Osmomysl-(bl.1130-1187)",
        "relatesTo": [
            "1",
            "61"
        ],
        "group": "Group #4"
    },
    {
        "id": "39",
        "name": "Роздробленість",
        "url": "https://history-time.in.ua/article/Rozdroblenist",
        "relatesTo": [
            "1",
            "61",
            "9",
            "13",
            "10",
            "11",
            "8",
            "15",
            "4",
            "58",
            "51",
            "49",
            "47",
            "46",
            "45",
            "42"
        ],
        "group": "Group #4"
    },
    {
        "id": "40",
        "name": "Мстислав Великий (1076-1132)",
        "url": "https://history-time.in.ua/article/Mstyslav-Velykyy-(1076-1132)",
        "relatesTo": [
            "1",
            "61",
            "8",
            "4",
            "58",
            "42"
        ],
        "group": "Group #4"
    },
    {
        "id": "41",
        "name": "Тріумвірат",
        "url": "https://history-time.in.ua/article/Triumvirat",
        "relatesTo": [
            "1",
            "61",
            "9",
            "4",
            "15",
            "11",
            "58",
            "51",
            "47",
            "45"
        ],
        "group": "Group #4"
    },
    {
        "id": "42",
        "name": "Володимир II Мономах (1053-1125)",
        "url": "https://history-time.in.ua/article/Volodymyr-II-Monomah-(1053-1125)",
        "relatesTo": [
            "1",
            "61",
            "8",
            "4",
            "58"
        ],
        "group": "Group #3"
    },
    {
        "id": "43",
        "name": "Міждержавні угоди",
        "url": "https://history-time.in.ua/article/Mizhderzhavni-uhody",
        "relatesTo": [
            "1",
            "61",
            "4",
            "11",
            "13",
            "15",
            "58",
            "51",
            "49",
            "47"
        ],
        "group": "Group #4"
    },
    {
        "id": "44",
        "name": "Прийняття християнства",
        "url": "https://history-time.in.ua/article/Pryynyattya-hrystyyanstva",
        "relatesTo": [
            "1",
            "61",
            "4",
            "14",
            "58",
            "50"
        ],
        "group": "Group #2"
    },
    {
        "id": "45",
        "name": "Ярослав (981-1054)",
        "url": "https://history-time.in.ua/article/Yaroslav-(981-1054)",
        "relatesTo": [
            "1",
            "61",
            "9",
            "4",
            "11",
            "58",
            "47"
        ],
        "group": "Group #2"
    },
    {
        "id": "46",
        "name": "Святополк (981-1019)",
        "url": "https://history-time.in.ua/article/Svyatopolk-(981-1019)",
        "relatesTo": [
            "1",
            "61",
            "13",
            "9",
            "10",
            "11",
            "49",
            "47",
            "45"
        ],
        "group": "Group #2"
    },
    {
        "id": "47",
        "name": "Володимир (958-1015)",
        "url": "https://history-time.in.ua/article/Volodymyr-(958-1015)",
        "relatesTo": [
            "1",
            "61",
            "11",
            "4",
            "6",
            "9",
            "10",
            "58",
            "46",
            "45"
        ],
        "group": "Group #2"
    },
    {
        "id": "48",
        "name": "Ярополк (956-980)",
        "url": "https://history-time.in.ua/article/Yaropolk-(956-980)",
        "relatesTo": [
            "1",
            "61",
            "12",
            "4",
            "11",
            "58",
            "47"
        ],
        "group": "Group #2"
    },
    {
        "id": "49",
        "name": "Святослав (934-972)",
        "url": "https://history-time.in.ua/article/Svyatoslav-(934-972)",
        "relatesTo": [
            "1",
            "61",
            "4",
            "13",
            "16",
            "11",
            "14",
            "58",
            "52",
            "50",
            "47"
        ],
        "group": "Group #2"
    },
    {
        "id": "50",
        "name": "Ольга (бл. 890-969)",
        "url": "https://history-time.in.ua/article/Olha-(bl.-890-969)",
        "relatesTo": [
            "1",
            "61",
            "15",
            "6",
            "4",
            "14",
            "11",
            "13",
            "58",
            "51",
            "49",
            "47"
        ],
        "group": "Group #2"
    },
    {
        "id": "51",
        "name": "Ігор (бл. 879—945)",
        "url": "https://history-time.in.ua/article/Ihor-(bl-879945)",
        "relatesTo": [
            "1",
            "61",
            "15",
            "4",
            "58"
        ],
        "group": "Group #2"
    },
    {
        "id": "52",
        "name": "Олег (845-912)",
        "url": "https://history-time.in.ua/article/Oleh-(845-912)",
        "relatesTo": [
            "1",
            "61",
            "15",
            "16",
            "4",
            "58",
            "51"
        ],
        "group": "Group #2"
    },
    {
        "id": "53",
        "name": "Київська Русь",
        "url": "https://history-time.in.ua/article/Kyyivska-Rus",
        "relatesTo": [
            "1",
            "61",
            "4",
            "11",
            "9",
            "3",
            "5",
            "16",
            "17",
            "15",
            "14",
            "13",
            "6",
            "10",
            "8",
            "58",
            "60",
            "52",
            "51",
            "50",
            "49",
            "47",
            "46",
            "45",
            "42"
        ],
        "group": "Group #2"
    },
    {
        "id": "54",
        "name": "Історичний розвиток Київської Русі",
        "url": "https://history-time.in.ua/article/Istorychnyy-rozvytok-Kyyivskoyi-Rusi",
        "relatesTo": [
            "1",
            "61",
            "4",
            "15",
            "14",
            "6",
            "13",
            "11",
            "9",
            "8",
            "58",
            "51",
            "50",
            "49",
            "47",
            "45",
            "42"
        ],
        "group": "Group #2"
    },
    {
        "id": "55",
        "name": "Господарське життя та економіка Русі.",
        "url": "https://history-time.in.ua/article/Hospodarske-zhyttya-ta-ekonomika-Rusi.",
        "relatesTo": [
            "1",
            "61",
            "4",
            "5",
            "58"
        ],
        "group": "Group #2"
    },
    {
        "id": "56",
        "name": "«Руська правда»",
        "url": "https://history-time.in.ua/article/Ruska-pravda",
        "relatesTo": [
            "1",
            "61",
            "9",
            "13",
            "11",
            "8",
            "4",
            "58",
            "49",
            "47",
            "45",
            "42"
        ],
        "group": "Group #2"
    },
    {
        "id": "57",
        "name": "Суспільство Русі",
        "url": "https://history-time.in.ua/article/Suspilstvo-Rusi",
        "relatesTo": [
            "1",
            "61",
            "4",
            "5",
            "58"
        ],
        "group": "Group #2"
    },
    {
        "id": "58",
        "name": "Політичний устрій русі",
        "url": "https://history-time.in.ua/article/Politychnyy-ustriy",
        "relatesTo": [
            "1",
            "61",
            "4",
            "5",
            "11",
            "9",
            "47",
            "45"
        ],
        "group": "Group #2"
    },
    {
        "id": "59",
        "name": "Утворення Київської Русi",
        "url": "https://history-time.in.ua/article/Utvorennya-Kyyivskoyi-Rusi",
        "relatesTo": [
            "1",
            "61"
        ],
        "group": "Group #2"
    },
    {
        "id": "60",
        "name": "Заснування Києва",
        "url": "https://history-time.in.ua/article/Zasnuvannya-Kyyeva",
        "relatesTo": [
            "1",
            "61",
            "4",
            "16",
            "17",
            "5",
            "15",
            "58",
            "52",
            "51"
        ],
        "group": "Group #4"
    },
    {
        "id": "61",
        "name": "Авторизація",
        "url": "https://history-time.in.ua/admin-tools",
        "relatesTo": [
            "1",
            "61"
        ]
    }
];


$(document).ready(function () {
    var container = document.getElementById('graph');

    var cg = contgr.nodeFields({link: "url"}) //, group: "subject"})
        .dataTypes([
            {id: 0, name: "concept"},
            {id: 1, name: "subject", abstract: true}
        ], "name")
        .layout({
            direction: "LR",
            sortMethod: "directed"
        })
        .buildData(nodesTest)
        .draw(container);
    console.log(cg);
})