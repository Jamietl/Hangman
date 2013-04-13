/**
 * Created with JetBrains WebStorm.
 * User: Jamiw
 * Date: 12/04/13
 * Time: 18:59
 * To change this template use File | Settings | File Templates.
 */
var ViewAttempts = new Array('');
var counter = 0;
var FinalWord;
var GameComplete = false;

for(GameComplete = false; FinalWord = FinalWord + ViewAttempts[(counter)]; {
    counter = counter + 1;
    if(FinalWord == Word.word) {
        GameComplete = True;
        console.log('Well done on Completing the Game.');


    }
})