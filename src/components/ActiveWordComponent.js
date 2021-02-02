const ActiveWord = ({ guessedLetters, word }) => {
    return (<div className="active-word">
        {word.split('').map((letter, index) => (<span key={index}>{guessedLetters.includes(letter) ? letter : ' _ '}</span>))}
    </div>);
}

export default ActiveWord;