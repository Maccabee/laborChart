import { useState } from 'react';

const NewWordForm = ({ setWord }) => {
    const [newWord, setNewWord] = useState('');
    const [error, setError] = useState('');

    const submit = (e) => {
        e.preventDefault();
        if (newWord.length === 0) {
            setError('Please enter a word');
            return;
        }
        if (newWord.match(/[0-9]/g)) {
            setError('Words must not include numbers');
            return;
        }
        setWord(newWord);
    };

    return (
        <form onSubmit={submit} className="new-word-form">
            <div>
                <label>Enter a word</label>
                <input value={newWord} onChange={e => setNewWord(e.target.value)} type="text" />
                {error && 
                    <span className="error">{error}</span>}
                </div>
            <button type="submit">Submit</button>            
        </form>
    );
}

export default NewWordForm;