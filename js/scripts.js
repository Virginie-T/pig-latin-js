var translate = function(word) {
    var text1 = word;
    var ay = "ay";
    var temp = "";
    var text3;

    for (var i = 0; i <= word.length; i++) {

        if (word[i] !== 'a' && word[i] !== 'e' && word[i] !== 'i'
                        && word[i] !== 'o' && word[i] !== 'u') {
            console.log("text 1 = " + text1);
            text3 = text1.slice(1, text1.length);
            console.log("text3 = " + text3);
            temp += text1[i];
            console.log("temp = " + temp);

        } else {
            return text3 + temp + "ay";
        }

    }

};
