
var inquirer = require("inquirer");
var Game = require("./game.js");
var Word = require("./word.js");

var game = new Game();
var word = new Word("eggplant");
word.setWord();
word.displayWord();
userTurn();

function userTurn() {
    inquirer.prompt([
        {
            type: "input",
            message: "Guess a letter!",
            name: "letter",
            validate: function (value) {
                // Check that the input is exactly one letter
                if (value.match(/[A-Za-z]/) && (value.length === 1)) {
                    return true;
                }
                return "You need to enter one letter";
            }
        }
    ]).then(function(response) {
        word.displayWord(response.letter);
        if (word.countCorrect > word.prevCountCorrect) {
            // another correct guess
            if (word.countCorrect === word.wordLength) {
                return console.log("YOU WON!");
            }
            word.prevCountCorrect = word.countCorrect;
            game.storeInput(response.letter);
        }
        else {
            // if guess was incorrect, store input, decrement turns
            if (game.checkGameStatus(response.letter)) {
                return console.log("GAME OVER!");
            }
        }
        userTurn();
    });
}
