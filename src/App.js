 import './App.css';
 import HighScoreTable from './HighScoreTable';

 import allCountryScores from './scores';

function App() {
  return (
    <div className="App">
      <div className="outerBox">
        <h1>High Scores Per Country</h1>

        <HighScoreTable scoresData={allCountryScores}/>
      </div>
    </div>
  );
}

export default App;
