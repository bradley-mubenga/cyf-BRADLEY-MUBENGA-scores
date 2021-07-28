//Modules
import React, { useState, useEffect } from 'react';

//React Components
import PlayerScore from './PlayerScore';

//Score Board Functional Component With The Scores Data Passed As A Prop.
export default function ScoreBoard({ scoresData, scoreState }) {
    //The current state of the data, is there data present in the props or not?
    const [ isData, setData ] = useState(false);
    
    //Every time the page loads we check if we have data in the props and set the state accordingly.
    useEffect(() => {
        if (scoresData.length === 0) {
            setData(false);
        }

        else {
            setData(true);
        }
    }, [scoresData]);

    //Sorting array by the first name without case sensitivity
    scoresData.sort((a, b) => {
        let fa = a.name.toLowerCase(),
            fb = b.name.toLowerCase();

        if (fa < fb) {
            return -1;
        }

        if (fa > fb) {
            return 1;
        }

        return 0;
    });

    //Mappping through the score data and creating the HTML elements.
    let ScoreBoardHTML = scoresData.map((scoreData, index) =>
        <div className="scoreBox" key={index}>
            <h3>{ scoreData.name }</h3>
            <PlayerScore playerScores={scoreData.scores} scoreState={scoreState}/>
        </div>
    )
    
    //Checking the state of the data, if the state is favourable we show the scores in the DOM.
    return isData ? ScoreBoardHTML : "NO SCORE DATA AVAILIBLE";
}
