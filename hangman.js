
var inquirer = require("inquirer");
var word = require("./word.js");
var guessesRemain = 10;
var wordString = "eggplant";
var currWordArr = new word.Word(wordString);
var prevGuesses = [];

function getLetter() {
    currWordArr.displayWord();
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
        if (wordString.indexOf(response.letter) !== -1) {
            currWordArr.handleLetter(response.letter);
            if (currWordArr.checkWin()) {
                currWordArr.displayWord();
                console.log("WINNER!");
                return;
            }
        }
        else if (prevGuesses.indexOf(response.letter) === -1) {
            prevGuesses.push(response.letter);
            guessesRemain--;
            console.log("Guesses remaining: " + guessesRemain);
        }
        if (guessesRemain > 0) {
            getLetter();
        }
    });
}

currWordArr.initWord();
getLetter();