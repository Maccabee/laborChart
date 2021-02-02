const CompletionComponent = ({ guessedLetters, word, totalWrongGuesses }) => {
    const wrongGuesses = guessedLetters.reduce((acc, val) => word.includes(val) ? acc : [...acc, val], []);

    const lost = wrongGuesses.length === totalWrongGuesses;

    const won = word.split().reduce((acc, val) => acc && guessedLetters.includes(val), true);
    
    if (lost) {
        return (<div>You ran out of guesses, to play again refresh the page</div>)
    }
    if (won) {
        return (<div>You won, to play again refresh the page</div>)
    }
    return '';   
}

export default CompletionComponent