const GuessedLetters = ({ guessedLetters }) => {
    return (<div>
        <div className="alphabet">
        {guessedLetters.map(letter => <span>{letter}</span>)}
        </div>
    </div>)
}

export default GuessedLetters;