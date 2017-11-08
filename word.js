var Letter = require("./letter.js");


function Word(wordString) {
    this.wordString = wordString;
    this.wordLength = this.wordString.length;
    this.wordArr = [];
}


Word.prototype.setWord = function() {
    for (var i = 0; i < this.wordLength; i++) {
        this.wordArr.push(new Letter(this.wordString.charAt(i)));
    }
}


Word.prototype.displayWord = function(userInput) {
    for (var i = 0; i < this.wordLength; i++) {
        process.stdout.write(this.wordArr[i].validateLetter(userInput));
        if (i < (this.wordLength - 1)) {
            process.stdout.write(" ");
        }
    }
    console.log();
}


module.exports = Word;