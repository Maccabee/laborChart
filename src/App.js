import { useState } from 'react';

import './App.css';

import { RemainingCount, NewWordForm, GuessedLetters, ActiveWord }from './components';
import GuessForm from './components/GuessFormComponent';


function App () {
  const totalWrongGuesses = 10;
  
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [word, setCurrentWord] = useState('');

  return (<div className="App">
      <h1>Let's Play Hangman</h1>
      {!word && <NewWordForm setWord={setCurrentWord} />}
     
      {word &&
        <div>
        <RemainingCount remainingCount={totalWrongGuesses - guessedLetters.length} />
        <GuessForm guessedLetters={guessedLetters} setGuessedLetters={setGuessedLetters} />
        <ActiveWord guessedLetters={guessedLetters} word={word} />
      <GuessedLetters guessedLetters={guessedLetters} />
      {word.split().reduce((acc, val) => acc && guessedLetters.includes(val), true) && 
        <div>
        </div>}
        </div>}
    </div>);
}

export default App;
