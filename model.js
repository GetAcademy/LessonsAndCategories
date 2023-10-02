const model = {
    content: [
        {
          id: 1,
          parentId: null,
          text: "Student",
          subText: "Studentinformasjon",
          isLession: false
        },
        {
          id: 2,
          parentId: 1,
          text: "Velkommen",
          isLession: true
        },
        {
          id: 3,
          parentId: 1,
          text: "Eksamen",
          isLession: true
        },
        {
          id: 4,
          parentId: 1,
          text: "Klagenemnd",
          isLession: true
        },
        {
          id: 5,
          parentId: 1,
          text: "Lover og forskrifter",
          isLession: true
        },
        {
          id: 6,
          parentId: 1,
          text: "Lånekassen",
          isLession: true
        },
        {
          id: 7,
          parentId: 1,
          text: "Studentombud",
          isLession: true
        },
        {
          id: 8,
          parentId: 1,
          text: "Studentorgan",
          isLession: true
        },
        {
          id: 9,
          parentId: 1,
          text: "Studentrepresentant i styret",
          isLession: true
        },
        {
          id: 10,
          parentId: 1,
          text: "Studieplan",
          isLession: true
        },
        {
          id: 11,
          parentId: 1,
          text: "Timeplan",
          isLession: true
        },
        {
          id: 12,
          parentId: 1,
          text: "Undervisningsformer",
          isLession: true
        },
        {
          id: 13,
          parentId: 1,
          text: "Litteratur",
          isLession: true
        },
        {
          id: 14,
          parentId: 1,
          text: "Krav til datamaskin",
          isLession: true
        },
        {
          id: 15,
          parentId: 1,
          text: "Studentbevis",
          isLession: true
        },
        {
          id: 16,
          parentId: 1,
          text: "Første dag",
          isLession: true
        },
        {
          id: 100,
          parentId: null,
          text: "Emne 1",
          isLession: false
        },
        {
          id: 110,
          parentId: 100,
          text: "1 Intro",
          subText: " Introduksjon til verktøy, Github, HTML, CSS, JavaScript - Uke 1",
          isLession: false
        },
        {
          id: 111,
          parentId: 110,
          text: "Eksempel 1",
          isLession: true
        },
        {
          id: 112,
          parentId: 110,
          text: "Verktøy",
          isLession: true
        },
        {
          id: 113,
          parentId: 110,
          text: "HTML",
          isLession: true
        },
        {
          id: 114,
          parentId: 110,
          text: "CSS",
          isLession: true
        },
        {
          id: 115,
          parentId: 110,
          text: "Layout med CSS",
          isLession: true
        },
        {
          id: 116,
          parentId: 110,
          text: "JavaScript",
          isLession: true
        },
        {
          id: 117,
          parentId: 110,
          text: "GIT og GitHub",
          isLession: true
        },
        {
          id: 118,
          parentId: 110,
          text: "Enkel refactoring",
          isLession: true
        },
        {
          id: 120,
          parentId: 100,
          text: "2 Funksjon, variabel, operator, valg",
          subText: " Funksjoner med parametre og returverdi, refactoring, Lokale og globale variabler, deklarasjon. Operatorer: tilordning, aritmetisk, logisk, sammenligning. If-setninger - Uke 1-3",
          isLession: false
        },
        {
          id: 121,
          parentId: 120,
          text: "Funksjoner med parametre",
          isLession: true
        },
        {
          id: 122,
          parentId: 120,
          text: "Variabler og operatorer",
          isLession: true
        },
        {
          id: 123,
          parentId: 120,
          text: "Valgsetninger 1",
          isLession: true
        },
        {
          id: 124,
          parentId: 120,
          text: "Funksjoner med returverdi",
          isLession: true
        },
        {
          id: 125,
          parentId: 120,
          text: "Valgsetninger 2 og Logiske operatorer",
          isLession: true
        },
        {
          id: 126,
          parentId: 120,
          text: "Oppsummering operatorer",
          isLession: true
        },
        {
          id: 127,
          parentId: 120,
          text: "Refactoring",
          isLession: true
        },
        {
          id: 128,
          parentId: 120,
          text: "Oppgaver",
          isLession: true
        },
        {
          id: 140,
          parentId: 100,
          text: "3 MVC og innebygd",
          subText: " Design patternet model-view-controller, innebygde funksjoner for tekst, tall og datoer - Uke 3-4",
          isLession: false
        },
        {
          id: 141,
          parentId: 140,
          text: "Model-view-controller",
          isLession: true
        },
        {
          id: 142,
          parentId: 140,
          text: "Innebygde funksjoner - tall",
          isLession: true
        },
        {
          id: 143,
          parentId: 140,
          text: "Innebygde funksjoner - tekst",
          isLession: true
        },
        {
          id: 144,
          parentId: 140,
          text: "Innebygde funksjoner - datoer",
          isLession: true
        },
        {
          id: 145,
          parentId: 140,
          text: "Oppgaver",
          isLession: true
        },
        {
          id: 150,
          parentId: 100,
          text: "4 Løkker og lister",
          subText: " Uke 4",
          isLession: false
        },
        {
          id: 151,
          parentId: 150,
          text: "Løkker",
          isLession: true
        },
        {
          id: 152,
          parentId: 150,
          text: "Lister 1",
          isLession: true
        },
        {
          id: 153,
          parentId: 150,
          text: "Lister 2",
          isLession: true
        },
        {
          id: 160,
          parentId: 100,
          text: "5 Enhetstesting",
          subText: " Enhetstesting av funksjoner, refactoring - Uke 5",
          isLession: false
        },
        {
          id: 161,
          parentId: 160,
          text: "QUnit",
          isLession: true
        },
        {
          id: 162,
          parentId: 160,
          text: "Teste controller-funksjoner",
          isLession: true
        },
        {
          id: 163,
          parentId: 160,
          text: "Testdrevet utvikling",
          isLession: true
        },
        {
          id: 164,
          parentId: 160,
          text: "Test coverage",
          isLession: true
        },
        {
          id: 170,
          parentId: 100,
          text: "6 Objekter",
          subText: " Uke 6",
          isLession: false
        },
        {
          id: 171,
          parentId: 170,
          text: "Objekter",
          isLession: true
        },
        {
          id: 172,
          parentId: 170,
          text: "Lister av objekter",
          isLession: true
        },
        {
          id: 173,
          parentId: 170,
          text: "SPA på Emne-2-måten",
          isLession: true
        },
        {
          id: 200,
          parentId: null,
          text: "Emne 2",
          isLession: false
        },
        {
          id: 210,
          parentId: 200,
          text: "Prosessen",
          isLession: false
        },
        {
          id: 211,
          parentId: 210,
          text: "1 Intro",
          isLession: true
        },
        {
          id: 212,
          parentId: 210,
          text: "2 Kundemøte og oppsummering i tekst",
          isLession: true
        },
        {
          id: 213,
          parentId: 210,
          text: "3 Tegne skjermbilder",
          isLession: true
        },
        {
          id: 214,
          parentId: 210,
          text: "4 Fra skjermbilder til modell",
          isLession: true
        },
        {
          id: 215,
          parentId: 210,
          text: "5 Implementere",
          isLession: true
        },
        {
          id: 220,
          parentId: 200,
          text: "Emne 2-app",
          isLession: false
        },
        {
          id: 300,
          parentId: null,
          text: "Emne 3",
          isLession: false
        },
        {
          id: 400,
          parentId: null,
          text: "NK",
          subText: "Nøkkelkompetanser",
          isLession: false
        },
        {
          id: 410,
          parentId: 400,
          text: "Tenkning og læring",
          isLession: false
        },
        {
          id: 411,
          parentId: 410,
          text: "Problemløsning",
          isLession: true
        },
        {
          id: 412,
          parentId: 410,
          text: "Læring",
          isLession: true
        },
        {
          id: 413,
          parentId: 410,
          text: "Kritisk tenkning",
          isLession: true
        },
        {
          id: 414,
          parentId: 410,
          text: "Pomodoro",
          isLession: true
        },
        {
          id: 415,
          parentId: 410,
          text: "Focused vs diffused",
          isLession: true
        },
        {
          id: 416,
          parentId: 410,
          text: "Show and tell",
          isLession: true
        },
        {
          id: 417,
          parentId: 410,
          text: "Feynman-teknikken",
          isLession: true
        },
        {
          id: 420,
          parentId: 400,
          text: "Samarbeid og kommunikasjon",
          isLession: false
        },
        {
          id: 421,
          parentId: 420,
          text: "Kommunikasjon",
          isLession: true
        },
        {
          id: 422,
          parentId: 420,
          text: "Aktiv lytting",
          isLession: true
        },
        {
          id: 423,
          parentId: 420,
          text: "Samarbeid",
          isLession: true
        },
        {
          id: 424,
          parentId: 420,
          text: "Sosial kompetanse",
          isLession: true
        },
        {
          id: 425,
          parentId: 420,
          text: "Tuckmans modell rundt teamdynamikk",
          isLession: true
        },
        {
          id: 426,
          parentId: 420,
          text: "Psykologisk trygghet",
          isLession: true
        },
        {
          id: 427,
          parentId: 420,
          text: "Googles Project Aristotle",
          isLession: true
        },
        {
          id: 430,
          parentId: 400,
          text: "Selvledelse og refleksjon",
          isLession: false
        },
        {
          id: 431,
          parentId: 430,
          text: "Attribusjon",
          isLession: true
        },
        {
          id: 432,
          parentId: 430,
          text: "Daglig logg",
          isLession: true
        },
        {
          id: 433,
          parentId: 430,
          text: "Egenmotivasjon og prokrastinering",
          isLession: true
        },
        {
          id: 434,
          parentId: 430,
          text: "Emosjonell kompetanse",
          isLession: true
        },
        {
          id: 435,
          parentId: 430,
          text: "Etisk refleksjon",
          isLession: true
        },
        {
          id: 436,
          parentId: 430,
          text: "GRIT",
          isLession: true
        },
        {
          id: 437,
          parentId: 430,
          text: "Gode vaner",
          isLession: true
        },
        {
          id: 438,
          parentId: 430,
          text: "Growth mindset",
          isLession: true
        },
        {
          id: 439,
          parentId: 430,
          text: "Learned helplessness",
          isLession: true
        },
        {
          id: 440,
          parentId: 430,
          text: "Locus of control",
          isLession: true
        },
        {
          id: 441,
          parentId: 430,
          text: "Mestringstro",
          isLession: true
        },
        {
          id: 442,
          parentId: 430,
          text: "Metakognisjon",
          isLession: true
        },
        {
          id: 443,
          parentId: 430,
          text: "Personlighetspsykologi",
          isLession: true
        },
        {
          id: 444,
          parentId: 430,
          text: "Signaturstyrker",
          isLession: true
        },
        {
          id: 445,
          parentId: 430,
          text: "7 Habits",
          isLession: true
        },
        {
          id: 446,
          parentId: 430,
          text: "Isfjellmetafor",
          isLession: true
        },
        {
          id: 447,
          parentId: 430,
          text: "Nevroplastisitet",
          isLession: true
        },
        {
          id: 448,
          parentId: 430,
          text: "The Art of Failing Well",
          isLession: true
        },
        {
          id: 500,
          parentId: null,
          text: "Bonus",
          subText: "Bonuspensum - faglige ting som går utover pensum",
          isLession: false
        },
        {
          id: 510,
          parentId: 500,
          text: "Emne 1",
          isLession: false
        },
        {
          id: 511,
          parentId: 510,
          text: "Maler i Visual Studio Code",
          isLession: true
        },
        {
          id: 512,
          parentId: 510,
          text: "Callbacks, promises, async og await",
          isLession: true
        },
        {
          id: 513,
          parentId: 510,
          text: "API",
          isLession: true
        },
        {
          id: 514,
          parentId: 510,
          text: "Klasser og kompent ved hjelp av arv",
          isLession: true
        },
        {
          id: 515,
          parentId: 510,
          text: "Vue.js",
          isLession: true
        },
        {
          id: 516,
          parentId: 510,
          text: "Sorteringsfunksjoner",
          isLession: true
        },
        {
          id: 517,
          parentId: 510,
          text: "Datastrukturer",
          isLession: true
        },
        {
          id: 518,
          parentId: 510,
          text: "Rekursjon",
          isLession: true
        },
        {
          id: 519,
          parentId: 510,
          text: "Funksjonell programmering",
          isLession: true
        },
        {
          id: 520,
          parentId: 510,
          text: "Node.js",
          isLession: true
        },
        {
          id: 600,
          parentId: null,
          text: "Oblig",
          subText: "Obligatoriske oppgaver",
          isLession: false
        },
        {
          id: 610,
          parentId: 600,
          text: "Emne 1",
          isLession: false
        },
        {
          id: 611,
          parentId: 610,
          text: "Obligatorisk oppgave Emne 1 Høst 2023",
          isLession: true
        },
        {
          id: 700,
          parentId: null,
          text: "Opptak",
          isLession: false
        },
        {
          id: 710,
          parentId: 700,
          text: "Emne 1",
          isLession: false
        },
        {
          id: 711,
          parentId: 710,
          text: "Høst 2023",
          isLession: true
        }
      ]
};