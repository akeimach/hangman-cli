


function Letter(initChar) {
    this.hiddenChar = initChar;
    this.displayChar = "_";
    if (initChar === " ") this.displayChar = " ";
    this.guessResult = "";
}


Letter.prototype.validateLetter = function(guessChar) {
    this.guessResult = "INCORRECT!";
    if (guessChar === this.displayChar) this.guessResult = "REPEAT";
    else if (guessChar === this.hiddenChar) {
        this.displayChar = this.hiddenChar;
        this.guessResult = "CORRECT!";
    }
    return this.displayChar;
}


module.exports = Letter;