import { useState } from 'react';

import './App.css';

import {RemainingCount, NewWord }from './compnents';


function App () {
  const [remainingCount, setRemainingCount] = useState(10);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [word, setCurrentWord] = useState('');

  return (
    <div className="App">
      <RemainingCount remainingCount={remainingCount} />
      {!word && <NewWord setWord={setCurrentWord} />}
    </div>
  );
}

export default App;
