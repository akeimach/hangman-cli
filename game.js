var foodWords = require('food-words');


function Game() {
    this.storeRandNums = [];
}


Game.prototype.selectWord = function() {
    if (this.storeRandNums.length === foodWords.length) return;
    var randNum = Math.ceil(Math.random() * foodWords.length);
    while (this.storeRandNums.indexOf(randNum) !== -1) {
        randNum = Math.ceil(Math.random() * foodWords.length);
    }
    this.storeRandNums.push(randNum);
    return foodWords[randNum];
}


module.exports = Game;