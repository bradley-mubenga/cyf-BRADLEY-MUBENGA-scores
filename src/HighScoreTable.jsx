import React, { useState, useEffect } from 'react';

import PlayerScore from './PlayerScore';

//Score Board Functional Component With The Scores Data Passed As A Prop.
export default function ScoreBoard({ scoresData }) {
    //The current state of the data, is there data present in the props or not?
    const [ isData, setData ] = useState(false);
    
    //Every time the page loades we check if we have data in the props and set the state accordingly.
    useEffect(() => {
        if (scoresData.length === 0) {
            setData(false);
        }

        else {
            setData(true);
        }
    }, [scoresData]);

    //Mappping through the score data and creating the HTML elements
    let ScoreBoardHTML = scoresData.map((scoreData, index) => 
        <div className="scoreBox" key={index}>
            <h3>{ scoreData.name }</h3>
            <PlayerScore playerScores={scoreData.scores}/>
        </div>
    )
    
    //Checking the state of the data, if the state is favourable we show the scores in the DOM
    return isData ? ScoreBoardHTML : "NO SCORE DATA AVAILIBLE";
}
