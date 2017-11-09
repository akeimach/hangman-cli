var Letter = require("./letter.js");


function Word(wordString) {
    this.wordString = wordString;
    this.wordLength = this.wordString.length;
    this.wordArr = [];
    this.countCorrect = 0;
    this.prevCountCorrect = 0;
}


Word.prototype.setWord = function() {
    for (var i = 0; i < this.wordLength; i++) {
        this.wordArr.push(new Letter(this.wordString.charAt(i)));
    }
}


Word.prototype.displayWord = function(userInput) {
    this.countCorrect = 0;
    for (var i = 0; i < this.wordLength; i++) {
        var displayLetter = this.wordArr[i].validateLetter(userInput);
        if (displayLetter !== "_") {
            this.countCorrect++;
        }
        process.stdout.write(displayLetter);
        if (i < (this.wordLength - 1)) {
            process.stdout.write(" ");
        }
    }
    console.log();
}


module.exports = Word;