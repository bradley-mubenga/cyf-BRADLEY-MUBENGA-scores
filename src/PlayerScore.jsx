import React from 'react'

export default function PlayerScore({playerScores}) {
    let PlayerScoreHTML = playerScores.map((score, index) =>
        <ul className="individualScores" key={index}>
            <li>{score.n} : {score.s}</li>
        </ul>
    )
    return PlayerScoreHTML;
}
