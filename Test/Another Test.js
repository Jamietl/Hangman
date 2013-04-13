for(GameComplete = false; number == WordLength; number = number + 1) {
    FinalWord = FinalWord + ViewAttempts[(counter)];
    counter = counter + 1;
    if(FinalWord == Word.word) {
        GameComplete = True;
        console.log('Well done on Completing the Game.');
    }
}