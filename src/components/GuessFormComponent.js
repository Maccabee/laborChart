import { useState } from 'react';

const GuessForm = ({ guessedLetters, setGuessedLetters }) => {
    const [letter, setLetter] = useState('');
    const [error, setError] = useState('');

    const submit = () => {
        if (letter.length > 1) {
            setError('Please use 1 letter per guess');
            return;
        }
        if (guessedLetters.includes(letter)) {
            setError('Letter already guessed');
            return;
        }
        setGuessedLetters([...guessedLetters, letter]);
    };

    const onChange = (e) => {
        setError('');
        setLetter(e.target.value);
    };

    return (<form className="guess-form" onSubmit={submit}>
        <div>
            <label>Guess a letter</label>
            <input value="letter" onChange={onChange} />
                {error && 
                    <span className="error">{error}</span>}
        </div>
        <button type="submit">Submit</button>
    </form>)
}

export default GuessForm;