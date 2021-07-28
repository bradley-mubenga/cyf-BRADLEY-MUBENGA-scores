import React, { useState, useEffect } from 'react'

export default function Single({ showSingleScores }) {

    return (
        <button onClick={showSingleScores}>Single Scores</button>
    )
}
