


function Game() {
    this.prevGuesses = [];
    this.turnsRemaining = 10;
}


Game.prototype.storeInput = function(userInput) {
    // if letter has not yet been guessed, add to array
    if (this.prevGuesses.indexOf(userInput) === -1) {
        this.prevGuesses.push(userInput);
        return true;
    }
    return false;
}


Game.prototype.checkGameStatus = function(userInput) {
    if (this.storeInput(userInput)) { // store incorrect guess
        this.turnsRemaining--;
        console.log("Guesses remaining: " + this.turnsRemaining);
        if (!this.turnsRemaining) {
            // if there are no turns remaining gameOver is true
            return true;
        }
    }
    return false;
}


module.exports = Game;