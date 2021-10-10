const increases = {
    3: {
        value: 8,
        type: "green"
    },
    8: {
        value: -3,
        type: "red"
    },
    22: {
        value: -8,
        type: "red"
    },
    35: {
        value: 8,
        type: "green"
    },
    39: {
        value: 8,
        type: "green"
    },
    53: {
        value: -3,
        type: "red"
    },
    67: {
        value: 3,
        type: "green"
    },
    71: {
        value: 8,
        type: "green"
    },
    85: {
        value: -8,
        type: "red"
    }
};
const increasesLevel2 = {
    12: {
        value: 8,
        type: "green"
    },
    9: {
        value: -5,
        type: "red"
    },
    15: {
        value: -2,
        type: "red"
    },
    27: {
        value: -5,
        type: "red"
    },
    30: {
        value: -6,
        type: "red"
    },
    43: {
        value: -6,
        type: "red"
    },
    47: {
        value: 3,
        type: "green"
    },
    64: {
        value: -8,
        type: "red"
    },
    69: {
        value: -6,
        type: "red"
    },
    72: {
        value: -6,
        type: "red"
    },
    87: {
        value: 2,
        type: "green"
    },
    94: {
        value: -10,
        type: "red"
    }
};
const questions = {
    4: {
        question: "What is the capital of Georgia?",
        multipleAnswers: ["Tokyo", "Istanbul", "Tbilisi", "Washington"],
        rightAnswer: "Tbilisi"
    },
    11: {
        question: "What is the name of the first decentralized cryptocurrency?",
        multipleAnswers: ["Ethereum", "Bitcoin", "Ripple", "Litecoin"],
        rightAnswer: "Bitcoin"
    },
    17: {
        question: "Where was pizza invented?",
        multipleAnswers: ["Spain", "Greece", "Italy", "Germany"],
        rightAnswer: "Italy"
    },
    24: {
        question: "Which book belongs to George Orwell?",
        multipleAnswers: [
            "Jane Eyre",
            "Crime and Punishment",
            "1984",
            "Wuthering Heights"
        ],
        rightAnswer: "1984"
    },
    29: {
        question: "What the capital of Eduador?",
        multipleAnswers: ["Santo Domingo", "Quito", "San Jose", "Brasilia"],
        rightAnswer: "Quito"
    },
    32: {
        question: "Which composer composed Für Elise?",
        multipleAnswers: ["Bach", "Chopin", "Mozart", "Beethoven"],
        rightAnswer: "Beethoven"
    },
    37: {
        question: "What is the real name of Lady Gaga?",
        multipleAnswers: ["Stefani", "Sara", "Isabella", "Sophia"],
        rightAnswer: "Stefani"
    },

    45: {
        question: "What does Dozen mean?",
        multipleAnswers: [6, 18, 12, 24],
        rightAnswer: 12
    },
    59: {
        question: "The largest ocean in the world is?",
        multipleAnswers: [
            "Atlantic Ocean",
            "Indian Ocean",
            "Arctic ocean",
            "Pacific ocean"
        ],
        rightAnswer: "Pacific ocean"
    },
    61: {
        question: "What instrument is used to look at the stars?",
        multipleAnswers: ["Telescope", "Microscope", "Camera", "Glasses"],
        rightAnswer: "Telescope"
    },
    66: {
        question: "What is the language spoken in Hong Kong?",
        multipleAnswers: ["Cantonese", "Mandarin", "Cebuano", "Malay"],
        rightAnswer: "Cantonese"
    },
    73: {
        question: "What is the fastest car with speed of 316 mph in 2021?",
        multipleAnswers: ["Tuatara", "Koenigsegg", "Bugatti", "Ferarri"],
        rightAnswer: "Tuatara"
    },
    78: {
        question: "What is the capital of Germany?",
        multipleAnswers: ["Bern", "Munich", "Berlin", "Frankfurt"],
        rightAnswer: "Berlin"
    },
    80: {
        question: "Which country give the nobel prize in natural sciences?",
        multipleAnswers: ["Switzerland", "Norway", "Finland", "Sweden"],
        rightAnswer: "Sweden"
    }
};

const questionsLevel2 = {
    4: {
        question: "How much saliva we produce everyday?",
        multipleAnswers: [
            "One litre",
            "Half a litre",
            "100 mililitre",
            "50 mililitre"
        ],
        rightAnswer: "One litre"
    },
    11: {
        question: "How the universe started in physics?",
        multipleAnswers: ["Big Bang", "Explosion", "collision", "oxidation"],
        rightAnswer: "Big Bang"
    },
    17: {
        question: "Wich one is a non-renewable?",
        multipleAnswers: ["Benzin", "Wind", "Water", "Sunlight"],
        rightAnswer: "Benzin"
    },
    19: {
        question: "Which country has the shortest people in the world?",
        multipleAnswers: ["Netherland", "Indonesia", "Philiphins", "Mexico"],
        rightAnswer: "Indonesia"
    },
    24: {
        question: "what is 12 times 12?",
        multipleAnswers: ["144", "125", "122", "164"],
        rightAnswer: "144"
    },
    29: {
        question:
            "What is the name of the 1976 film about the Watergate scandal, starring Robert Redford and Dustin Hoffman?",
        multipleAnswers: [
            "All the President's Men",
            "Taxi Driver",
            "Network",
            "Rocky"
        ],
        rightAnswer: "All the President's Men"
    },
    32: {
        question: "What is the currency of Emirates?",
        multipleAnswers: ["Dollar", "Dinar", "Dirham", "Pound"],
        rightAnswer: "Dirham"
    },
    37: {
        question:
            "Who is the composer of The Lion King, Inception and Pirates of the Caribbean?",
        multipleAnswers: [
            "Hans Zimmer",
            "James Horner",
            "Rachel Portman",
            "Ramin Djawadi"
        ],
        rightAnswer: "Hans Zimmer"
    },

    45: {
        question: "What is the the mercury symbol?",
        multipleAnswers: ["Hg", "Sn", "Au", "Mn"],
        rightAnswer: "Hg"
    },
    49: {
        question: "What is the famous food in England?",
        multipleAnswers: ["Fish and Chips", "Pizza", "Hamburger", "Salmon"],
        rightAnswer: "Fish and Chips"
    },
    54: {
        question: "What is the nearest large galaxy to Milky Way?",
        multipleAnswers: [
            "	Canis Major Dwarf",
            "Andromeda",
            "Ursa Major",
            "Pegasus"
        ],
        rightAnswer: "Andromeda"
    },
    59: {
        question: "Where is the world’s most active volcano located?",
        multipleAnswers: ["Canary Islands", "Italy", "Hawaii", "Indonesia"],
        rightAnswer: "Hawaii"
    },
    61: {
        question: "What is the fattest organ of the body?",
        multipleAnswers: ["Stomach", "Liver", "Brain", "intestines"],
        rightAnswer: "Brain"
    },
    66: {
        question: "What field Stephen Hawking famous for?",
        multipleAnswers: ["Chemistry", "Math", "Physics", "Bilogoy"],
        rightAnswer: "Physics"
    },
    73: {
        question: "Which on is known as the God particle?",
        multipleAnswers: ["Electron", "Proton", "Plasma", "Higgs Boson"],
        rightAnswer: "Higgs Boson"
    },
    78: {
        question: "Who is the creator of the Game of Thrones Music?",
        multipleAnswers: [
            "Howard Shore",
            "Ramin Djawadi",
            "Elton John",
            "Hanz Zimmer"
        ],
        rightAnswer: "Ramin Djawadi"
    },
    80: {
        question: "Who proposed the theory of relativity for the first time?",
        multipleAnswers: [
            "Albert Einstein",
            "James Watt",
            "Isaac Newton",
            "Marie Curie"
        ],
        rightAnswer: "Albert Einstein"
    },
    84: {
        question: "What causes Covid disease?",
        multipleAnswers: ["Bacteria", "Fungi", "Virus", "Algae"],
        rightAnswer: "Virus"
    },
    88: {
        question: "What is the name of an object that connects to points?",
        multipleAnswers: ["Line", "Dot", "Dash", "Circle"],
        rightAnswer: "Line"
    },
    96: {
        question: "How salt is known in chemistry?",
        multipleAnswers: [
            "Sodium Chloride",
            "Calcium Chloride",
            "Sodium Iodide",
            "Carbon dioxide"
        ],
        rightAnswer: "Sodium Chloride"
    }
};
