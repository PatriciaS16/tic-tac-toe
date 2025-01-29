import React from 'react';
import Square from './Square';

function Board({ positions, takeTurn }) {
  return (
    <div className="grid">
      {positions.map((value, index) => (
        <Square key={index} position={index} value={value} takeTurn={takeTurn} />
      ))}
    </div>
  );
}

export default Board;





