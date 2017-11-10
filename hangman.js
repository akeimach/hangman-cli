var inquirer = require("inquirer");
var Game = require("./game.js");
var Word = require("./word.js");

var game = new Game();
var word = null;
console.log("\n\nIT'S FOOD THEMED HANGMAN! GOOD LUCK!")
startRound();

// TODO: check word for special characters, upper case?


function startRound() {
    var wordString = game.selectWord();
    if (!wordString) {
        console.log("You completed all the rounds!");
        return;
    }
    word = new Word(wordString);
    word.setWord();
    word.displayWord();
    userTurn();
}


function userTurn() {
    inquirer.prompt([
        {
            type: "input",
            message: "Guess a letter!",
            name: "letter",
            validate: function (value) {
                // Check that the input is exactly one letter
                if (value.match(/[A-Za-z]/) && (value.length === 1)) return true;
                return "You need to enter one letter";
            }
        }
    ]).then(function(response) {
        word.displayWord(response.letter);
        if (word.updateGame(response.letter)) {
            // The round is over, win or loss occured
            inquirer.prompt([
                {
                    type: "confirm",
                    message: "Would you like to play again?",
                    name: "another",
                }
            ]).then(function(nextRound) {
                if(nextRound.another) startRound();
                else return;
            });
        }
        else userTurn();
    });
}

