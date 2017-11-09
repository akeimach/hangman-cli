


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
        console.log("INCORRECT!\n");
        this.turnsRemaining--;
        console.log(this.turnsRemaining + " guesses remaining!\n");
        if (!this.turnsRemaining) {
            // if there are no turns remaining gameOver is true
            console.log("GAME OVER!\n");
            return true;
        }
    }
    else {
        console.log("REPEAT GUESS\n");
    }
    return false;
}


module.exports = Game;