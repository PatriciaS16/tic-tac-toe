import React from 'react';

const CIRCLE = 'CIRCLE';
const CROSS = 'CROSS';

function Result({ winner, reset }) {
    return (
      <div className="result">
        {winner === CIRCLE && 'Circle won the game!'}
        {winner === CROSS && 'Cross won the game!'}
        {winner === 'DRAW!' && 'DRAW!'}
        <button className="button" onClick={reset}>Reset</button>
      </div>
    );
  }

export default Result;
