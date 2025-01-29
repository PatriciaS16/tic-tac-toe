import React, { useState } from 'react';
import Board from './Board';
import Result from './Result';

const EMPTY = 'EMPTY';
const CIRCLE = 'CIRCLE';
const CROSS = 'CROSS';

function Game() {
  const [state, setState] = useState({
    player: CROSS,
    positions: Array(9).fill(EMPTY),
  });

  function detectWinner(p) {
    const winningPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    ];

    for (let pattern of winningPatterns) {
      const [a, b, c] = pattern;
      if (p[a] !== EMPTY && p[a] === p[b] && p[a] === p[c]) {
        return p[a];
      }
    }

    return p.every(position => position !== EMPTY) ? 'DRAW!' : null;
  }

  function takeTurn(position) {
    const newPositions = [...state.positions];
    newPositions[position] = state.player;

    setState({
      player: state.player === CIRCLE ? CROSS : CIRCLE,
      positions: newPositions,
    });
  }

  function reset() {
    setState({
      player: CROSS,
      positions: Array(9).fill(EMPTY),
    });
  }

  const winner = detectWinner(state.positions);

  return (
    <div>
      <Board positions={state.positions} takeTurn={takeTurn} />
      {winner && <Result winner={winner} reset={reset} />}
    </div>
  );
}

export default Game;
