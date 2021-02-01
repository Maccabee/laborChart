const ActiveWord = ({ guessedLetters, word }) => {
    return (<div className="active-word">
        {word.split().map(letter => (<span>{guessedLetters.includes(letter) ? letter : '_'}</span>))}
    </div>);
}

export default ActiveWord;