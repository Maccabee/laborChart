import { useState } from 'react';

import './App.css';

import { RemainingCount, NewWordForm, GuessedLetters, ActiveWord, GuessForm, CompletionComponent }from './components';


function App () {
  const totalWrongGuesses = 10;
  
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [word, setCurrentWord] = useState('');

  return (<div className="App">
    <h1>Let's Play Hangman</h1>
    <div className="container">
      {!word && <NewWordForm setWord={setCurrentWord} />}
     
      {word &&
        <div>
        <RemainingCount remainingCount={totalWrongGuesses - guessedLetters.length} />
        <GuessForm guessedLetters={guessedLetters} setGuessedLetters={setGuessedLetters} />
        <ActiveWord guessedLetters={guessedLetters} word={word} />
        <GuessedLetters guessedLetters={guessedLetters} />
        <CompletionComponent guessedLetters={guessedLetters} word={word} totalWrongGuesses={totalWrongGuesses}/>
        </div>}
      </div>
    </div>);
}

export default App;
