var Letter = require("./letter.js");


function Word(wordString) {
    this.wordString = wordString;
    this.wordLength = this.wordString.length;
    this.wordArr = [];
    this.turnResult = "";
    this.countCorrect = 0;
    this.prevGuesses = [];
    this.turnsRemaining = 10;
}


Word.prototype.setWord = function() {
    for (var i = 0; i < this.wordLength; i++) {
        this.wordArr.push(new Letter(this.wordString.charAt(i)));
    }
}


Word.prototype.displayWord = function(guessChar) {
    this.turnResult = "INCORRECT!";
    this.countCorrect = 0;
    console.log();
    for (var i = 0; i < this.wordLength; i++) {
        var displayChar = this.wordArr[i].validateLetter(guessChar);
        if (displayChar !== "_") this.countCorrect++;
        if (i < (this.wordLength - 1)) displayChar += " ";
        process.stdout.write(displayChar);
        // Will only trigger if found char match
        if (this.wordArr[i].guessResult !== "INCORRECT!")
            this.turnResult = this.wordArr[i].guessResult;
    }
    console.log("\n\n");
}



Word.prototype.updateGame = function(guessChar) {
    if (this.turnResult !== "INCORRECT!") {
        if (this.turnResult === "REPEAT") // repeat correct guess
            console.log("\x1b[33m" + this.turnResult + "\n");
        else console.log("\x1b[32m" + this.turnResult + "\n");
        if (this.countCorrect === this.wordLength) {
            console.log("\x1b[35mYOU WON\n");
            return true;
        }
    }
    else if (this.prevGuesses.indexOf(guessChar) === -1) {
        // returns false if already guessed
        this.prevGuesses.push(guessChar);
        this.turnsRemaining--;
        console.log("\x1b[31m" + this.turnResult + "\n" + this.turnsRemaining + " guesses remaining!\n");
        if (!this.turnsRemaining) {
            // if there are no turns remaining gameOver is true
            console.log("\x1b[35mGAME OVER!\nThe correct word was " + this.wordString + "\n");
            return true;
        }
    }
    else console.log("\x1b[33mREPEAT\n"); // repeat wrong guess
    return false; // game still in play
}


module.exports = Word;

