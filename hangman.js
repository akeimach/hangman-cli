
var inquirer = require("inquirer");
var Game = require("./game.js");
var Word = require("./word.js");

var game = new Game();
var word = new Word("pea soup");
word.setWord();
word.displayWord();
userTurn();

// TODO: add colors to correct and incorrect
// TODO: add dictionary of random words, restart game for next word

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
            console.log("CORRECT!\n");
            if (word.countCorrect === word.wordLength) {
                return console.log("YOU WON!\n");
            }
            word.prevCountCorrect = word.countCorrect;
            game.storeInput(response.letter);
        }
        else if (game.checkGameStatus(response.letter)) {
            // if guess was incorrect, store input, decrement turns
            return;
        }
        userTurn();
    });
}
