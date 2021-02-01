import { useState } from 'react';

const NewWord = ({ setWord }) => {
    const [newWord, setNewWord] = useState('');
    const [error, setError] = useState('');

    const submit = () => {
        if (newWord.length === 0) {
            setError('Please enter a word');
            return;
        }
        if (newWord.match(/[0-9]/g)) {
            setError('Words must not include numbers');
        }
        setWord(newWord);
    };

    return (
        <form>
            <div>
                <input value={newWord} onChange={setNewWord} type="text" />
                {error && 
                    <span>{error}</span>}
                </div>
            <button type="submit">Submit</button>            
        </form>
    );
}

export default NewWord;