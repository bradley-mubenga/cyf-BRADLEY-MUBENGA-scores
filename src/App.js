import './App.css';
import HighScoreTable from './HighScoreTable';

import allCountryScores from './scores';
import Single from './Single';

import { useState, useEffect } from 'react';

function App() {
  const [ scoreState, setScoreState ] = useState(false);

  const scoreSortOrder = () => {
    if (scoreState) {
      setScoreState(false);
    }

    else {
      setScoreState(true);
    }
  }

  return (
    <div className="App">
      <Single showSingleScores={scoreSortOrder} />

      <div className="outerBox">
        <h1>High Scores Per Country</h1>

        <HighScoreTable scoresData={allCountryScores} scoreState={scoreState}/>
      </div>
    </div>
  );
}

export default App;
