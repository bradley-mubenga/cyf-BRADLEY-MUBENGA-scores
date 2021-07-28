import React from 'react';

export default function WorldWide({isWorldWide, changeWorldWide}) {
    return (
        <button onClick={changeWorldWide}>World Wide: { isWorldWide ? "Off" : "On" }</button>
    )
}
