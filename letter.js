


function Letter(letter) {
    this.letter = letter;
    this.displayChar = "_";
}


Letter.prototype.validateLetter = function(userInput) {
    if (userInput === this.letter) {
        this.displayChar = this.letter;
    }
    return this.displayChar;
}


module.exports = Letter;