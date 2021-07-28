import './App.css';
import HighScoreTable from './HighScoreTable';

import allCountryScores from './scores';
import Single from './Single';

import { useState } from 'react';
import WorldWide from './WorldWide';

function App() {
  //State that sets the order of the scores
  const [ scoreState, setScoreState ] = useState(false);

  const scoreSortOrder = () => {
    if (scoreState) {
      setScoreState(false);
    }

    else {
      setScoreState(true);
    }
  }

  //State that displays worldwide data on mount and then changes if button is clicked
  const [ isWorldWide, setWorldWide ] = useState(false);

  const changeWorldWide = () => {
    if (isWorldWide) {
      setWorldWide(false);
    }

    else {
      setWorldWide(true);
    }
  }

  return (
    <div className="App">
      <Single showSingleScores={scoreSortOrder} />
      <WorldWide changeWorldWide={changeWorldWide} isWorldWide={isWorldWide}/>

      <div className="outerBox">
        <h1> { isWorldWide ? "High Scores Per Country" : "Individual Scores"}</h1>

        <HighScoreTable scoresData={allCountryScores} scoreState={scoreState} isWorldWide={isWorldWide} />
      </div>
    </div>
  );
}

export default App;
