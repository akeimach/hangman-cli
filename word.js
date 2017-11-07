
var letter = require("./letter.js");

function Word(wordString) {
    this.wordString = wordString;
    this.numLetters = wordString.length;
    this.wordArr = []; // An array of letter objects
}

Word.prototype.initWord = function() {
    for (var i = 0; i < this.numLetters; i++) {
        this.wordArr.push(new letter.Letter(this.wordString.charAt(i)));
    }
}

Word.prototype.displayWord = function() {
    for (var i = 0; i < this.numLetters; i++) {
        process.stdout.write(this.wordArr[i].displayLetter());
        if (i !== (this.numLetters - 1)) {
            process.stdout.write(" ");
        }
    }
    console.log();
}

Word.prototype.handleLetter = function(letter) {
    for (var i = 0; i < this.numLetters; i++) {
        if (letter === this.wordArr[i].letter) {
            this.wordArr[i].correctGuess = true;
        }
    }
}

Word.prototype.checkWin = function() {
    for (var i = 0; i < this.numLetters; i++) {
        if (!this.wordArr[i].correctGuess) {
            return false;
        }
    }
    return true;
}


module.exports = {
    Word
};