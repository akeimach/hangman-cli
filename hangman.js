
var inquirer = require("inquirer");
var Game = require("./game.js");
var Word = require("./word.js");

// var guessesRemain = 10;
// var prevGuesses = [];
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
        if (game.validateInput(response.letter)) {
            userTurn();
        }
    });
}
