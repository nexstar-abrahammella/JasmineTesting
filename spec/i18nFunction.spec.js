const { changeMessageByLocale } = require("../modules/i18nfunction")


describe(`Testing for the i18n Function`, function () {
    // Locale Messages
    let localeGeneral;
    let localeItaly;
    let localteGermany;

    //Locale Abbreviation
    let localeEN;
    let localeIT;
    let localteGE;

    //Locale to Test
    let locale;

    beforeEach(function () {
        localeGeneral = { locale: "en", message: "ICE CREAM" };
        localeItaly = { locale: "it", message: "GELATTO" };
        localeGermany = { locale: "ge", message: "Eis" };

        localeIT = "it";
        localeEN = "en";
        localeGE = "ge";

    })


    it("Checking if the locale variable: ITALY  its the locale corrects one.", function(){

        let localeTesting = changeMessageByLocale(localeIT,localeItaly,localeGermany,localeGeneral);

        expect(localeTesting).toBe(localeItaly.message);

    })

    it("Checking if the locale variable: GERMANY  its the locale corrects one.", function(){

        let localeTesting = changeMessageByLocale(localeGE,localeItaly,localeGermany,localeGeneral);

        expect(localeTesting).toBe(localeGermany.message);

    })


    it("Checking if not exist a locale, need to show a general message.", function(){
        let localeGE = "es"
        let localeTesting = changeMessageByLocale(localeGE,localeItaly,localeGermany,localeGeneral);

        expect(localeTesting).toBe(localeGeneral.message);

    })

    it("Checking if the local is null  need to show a general message.", function(){
        let localeNull = null;
        let localeTesting = changeMessageByLocale(localeNull,localeItaly,localeGermany,localeGeneral);

        expect(localeTesting).toBe(localeGeneral.message);

    })


})