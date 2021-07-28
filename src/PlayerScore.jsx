import React from 'react'

export default function PlayerScore({ playerScores }) {
    playerScores.sort((score1, score2) => {
        return score2.s - score1.s;
    });

    let PlayerScoreHTML = playerScores.map((score, index) =>
        <ul className="individualScores" key={index}>
            <li>{score.n} : {score.s}</li>
        </ul>
    )
    return PlayerScoreHTML;
}
