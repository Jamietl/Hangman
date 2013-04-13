/**
 * Created with JetBrains WebStorm.
 * User: Jamiw
 * Date: 10/04/13
 * Time: 18:38
 * To change this template use File | Settings | File Templates.
 */
var wordschema = {
        properties: {
            word: {
                pattern: /^[a-zA-Z\s\-]+$/,
                message: 'Word may only include letters, spaces and hyphons.',
                required: true
            }
        }
    };

var guessschema = {
    properties: {
        guess: {
            pattern: /^[a-zA-Z\s\-]+$/,
                message: 'Word may only include letters, spaces and hyphens.',
                required: true
            }
        }
    };
//setting the word format allowed when choosing the word and guess
var failure = 0;
var hangingMan = new Array('/|', '|', '|/', '_________', ' |/     |', ' |      |', ' |      0', ' |     -|-', ' |     /');
//String for the Picture
var ViewAttempts = new Array('_ ');
var InitialWord = require('prompt');
InitialWord.start();
//Starts the prompt.

InitialWord.get(wordschema, function (err, Word) {
    console.log('Word received. Good luck guessing!');
    console.log(Word.word);
    var TotalLength = Word.word;
    //console.log(TotalLength);
    var WordLength = TotalLength.length;
    //console.log(WordLength);
    ViewAttempts.length = WordLength;
    //Array length = Word Length

    var InitialGuess = require('Prompt');
    InitialGuess.start();

    InitialGuess.get(guessschema, function (err, Guess) {
        console.log('Guess received.');
        //console.log(Guess.guess);
        var GuessLetter = Guess.guess;
        console.log('You have chosen the letter ', GuessLetter);
        var counter = 0;
        //Setting counter for cross reference.
        for(counter; counter<(WordLength); counter = counter + 1){
            //console.log(counter);
            if(GuessLetter == TotalLength.charAt(counter)) {
                //console.log(TotalLength.charAt(counter));
                ViewAttempts[(counter)] =  TotalLength.charAt(counter);

            }
            else{
                failure = failure + 1;
            }
        }
    });
});



