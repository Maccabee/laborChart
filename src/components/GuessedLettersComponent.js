const GuessedLetters = ({ guessedLetters }) => {
    return (<div className="guessed-letters">
        <span>Guessed Letters:</span>
        <div className="alphabet">
        {guessedLetters.map(letter => <span>{letter}</span>)}
        </div>
    </div>)
}

export default GuessedLetters;