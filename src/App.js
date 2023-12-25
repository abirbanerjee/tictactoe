import { useEffect, useState } from "react";
import Cell from "./Cell";
function App() {
  const [cells, setCells] = useState(['', '', '', '', '', '', '', '', '']);
  const [turn, setTurn] = useState("circle");
  const [winner, setWinner] = useState(null);
  const winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  useEffect(() => {
    console.log(cells);
    winningCombos.forEach(combo => {
      if (combo.every(cell => cells[cell] === 'circle')) setWinner('Circle wins');
      if (combo.every(cell => cells[cell] === 'cross')) setWinner('Cross wins');
    })
  }, [cells]);
  return (
    <div className="App">
      <div className='board'>
        {cells.map((cell, index) => <Cell key={index} id={index} turn={turn} setTurn={setTurn} cells={cells} setCells={setCells} winner={winner} />)}
        <h2> {winner || turn}</h2>
      </div>
    </div>
  );
}

export default App;
