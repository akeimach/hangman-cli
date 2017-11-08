var Letter = require("./letter.js");


function Game() {
    this.prevGuesses = [];
    this.turnsRemaining = 10;
}


//TODO: check if game over
//TODO: don't decrement turns if correct letter guessed

Game.prototype.validateInput = function(userInput) {
    if (this.prevGuesses.indexOf(userInput) === -1) {
        // they have not guessed this letter yet
        this.prevGuesses.push(userInput);
        this.turnsRemaining--;
        console.log("Guesses remaining: " + this.turnsRemaining);
    }
    if (this.turnsRemaining > 0) {
        return true;
    }
    return false;
}


module.exports = Game;