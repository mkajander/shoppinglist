const recipes = {
    'The Upgraded Chicken Power Bowl': {
        steps: [
            "Lisää salaattisekoitus (~100g) isoon kulhoon.",
            "Lisää yksi paketti valmiiksi kypsennettyjä kanasuikaleita (~150-200g).",
            "Lisää muutama iso lusikallinen Maitorahkaa tai Raejuustoa (~125g).",
            "Purista päälle sitruunamehua ja mausta mustapippurilla ja yrteillä.",
            "Valinnainen: Lisää puolikas muussattu avokado (~70g). Sekoita ja nauti."
        ],
        nutrition: "~530 kcal (P: 74g, C: 12g, F: 20g)"
    },
    'The Pantry Power Bowl': {
        steps: [
            "Valuta ja lisää proteiini kulhoon: 1 tlk tonnikalaa (~110g valutettuna) tai 1 prk kikherneitä/papuja (~230g valutettuna).",
            "Lisää kasvikset, joita ei tarvitse pilkkoa (kourallinen babypinaattia, muutama lusikallinen paahdettua paprikaa, maissia tai oliiveja).",
            "Lorauta päälle oliiviöljyä (~1 rkl) ja sitruunamehua. Mausta pippurilla ja oreganolla. Sekoita ja nauti."
        ],
        nutrition: "~440-590 kcal (P: ~25g, C: ~50g, F: ~22g)"
    },
    'The Freezer Aisle Warm Bowl': {
        steps: [
            "Laita annos pakastekasviksia (~250-300g) mikroaaltouunin kestävään kulhoon ja kypsennä pakkauksen ohjeen mukaan.",
            "Kun kasvikset ovat kuumia, lisää proteiini (valutettu tlk tonnikalaa, ~110g, tai kikherneitä, ~230g) suoraan päälle.",
            "Lorauta päälle oliiviöljyä (~1 rkl) ja hieman soijakastiketta tai sitruunamehua. Sekoita ja nauti."
        ],
        nutrition: "~360-560 kcal (P: ~23g, C: ~40g, F: ~19g)"
    },
    'The Rye Bread Plate': {
        steps: [
            "Ota 2-3 viipaletta ruisleipää (~70-100g).",
            "Valitse päällyste:",
            "Lohi: Levitä ohut kerros kevyttä tuorejuustoa (~30g) ja asettele päälle lohiviipaleita (~75g).",
            "Avokado: Muussaa puolikas avokado (~70g) suoraan leivän päälle ja mausta pippurilla."
        ],
        nutrition: "~320-420 kcal (P: ~14g, C: ~47g, F: ~14g)"
    },
    'The Power Porridge': {
        steps: [
            "Valmista kaurapuuro kaurahiutaleista (~60g) ja vedestä/maidosta mikrossa.",
            "Kun puuro on kuumaa, sekoita joukkoon raejuustoa (~125g), kunnes se sulaa joukkoon.",
            "Viimeistele isolla kourallisella pakastemarjoja (~100g), ripauksella kanelia ja muutamalla pähkinällä (~30g)."
        ],
        nutrition: "~575 kcal (P: 22g, C: 52g, F: 30g)"
    },
    'Quick Rahka Bowl': {
        steps: [
            "Lusikoi annos maitorahkaa tai raejuustoa (~200-250g) kulhoon.",
            "Lisää päälle kourallinen pakastemarjoja (~100g) ja ripaus siemeniä."
        ],
        nutrition: "~300 kcal (P: 28g, C: 30g, F: 7g)"
    }
};

const mealData = {
    'Banaani & saksanpähkinöitä': { nutrition: "~300 kcal (P: 5g, C: 28g, F: 20g)" },
    'Tuoreita marjoja & raejuustoa': { nutrition: "~210 kcal (P: 20g, C: 18g, F: 5g)" },
    'Appelsiini & manteleita': { nutrition: "~235 kcal (P: 7g, C: 18g, F: 15g)" },
    'Banaani & maitorahkaa': { nutrition: "~195 kcal (P: 18g, C: 30g, F: 1g)" },
    'Kourallinen saksanpähkinöitä': { nutrition: "~195 kcal (P: 4g, C: 4g, F: 20g)" },
    'Appelsiini': { nutrition: "~60 kcal (P: 1g, C: 15g, F: 0g)" },
    'Kourallinen manteleita': { nutrition: "~175 kcal (P: 6g, C: 6g, F: 15g)" }
};

let mealPlan = [
    { day: 'Maanantai', meals: { Lounas: 'The Upgraded Chicken Power Bowl', Välipala: 'Banaani & saksanpähkinöitä', Illallinen: 'The Freezer Aisle Warm Bowl' } },
    { day: 'Tiistai', meals: { Lounas: 'The Pantry Power Bowl', Välipala: 'Tuoreita marjoja & raejuustoa', Illallinen: 'The Rye Bread Plate' } },
    { day: 'Keskiviikko', meals: { Lounas: 'The Upgraded Chicken Power Bowl', Välipala: 'Appelsiini & manteleita', Illallinen: 'The Freezer Aisle Warm Bowl' } },
    { day: 'Torstai', meals: { Lounas: 'The Pantry Power Bowl', Välipala: 'Banaani & maitorahkaa', Illallinen: 'The Rye Bread Plate' } },
    { day: 'Perjantai', meals: { Lounas: 'The Upgraded Chicken Power Bowl', Välipala: 'Kourallinen saksanpähkinöitä', Illallinen: 'The Pantry Power Bowl' } },
    { day: 'Lauantai', meals: { Aamiainen: 'The Power Porridge', Lounas: 'The Rye Bread Plate', Välipala: 'Appelsiini', Illallinen: 'The Freezer Aisle Warm Bowl' } },
    { day: 'Sunnuntai', meals: { Aamiainen: 'Quick Rahka Bowl', Lounas: 'The Pantry Power Bowl', Välipala: 'Kourallinen manteleita', Illallinen: 'The Upgraded Chicken Power Bowl' } },
];