
function Letter(letter) {
    this.letter = letter;
    this.display = "_";
    this.correctGuess = false;
}

Letter.prototype.displayLetter = function() {
    if (this.correctGuess) {
        this.display = this.letter;
    }
    return this.display;
}

module.exports = {
    Letter
};