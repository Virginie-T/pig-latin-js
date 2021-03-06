describe('translate', function () {
    it("for words that start with a vowel, add 'ay' to the end", function() {
        expect(translate("english")).to.equal("englishay");
    });

    it("for words that start with a consonant, move the consonant to the end and add 'ay'", function() {
        expect(translate("pig")).to.equal("igpay");
    });

    it("is translated to pig latin", function() {
        expect(translate("school")).to.equal("oolschay");
    });
});
