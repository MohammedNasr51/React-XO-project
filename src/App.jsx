import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log"

function driveCurrentPlayer(turns) {
  let curruntPlayer = 'X'; // we use this instead of activePlayer because activePlayer is not updated yet when this function is called and because this is another state we can use it to drive the current player

  if (turns.length > 0 && turns[0].player === 'X') {
    curruntPlayer = 'O';
  }
  return curruntPlayer;
}

function App() {
  const [turnsBoard, setTurnsBoard] = useState([]);
  const activePlayer = driveCurrentPlayer(turnsBoard);

  function handleSelectedPlayer(rowIndex, colIndex) {

    setTurnsBoard((prevTurnsBoard) => {

      let curruntPlayer = driveCurrentPlayer(prevTurnsBoard);

      let updatedTurnsBoard = [{ square: { row: rowIndex, col: colIndex }, player: curruntPlayer }, ...prevTurnsBoard];
      return updatedTurnsBoard;
    })
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName='Player 1' symbol='X' isActive={activePlayer === 'X'} />
          <Player initialName='Player 2' symbol='O' isActive={activePlayer === 'O'} />
        </ol>
        <GameBoard turns={turnsBoard} onSelectSquare={handleSelectedPlayer} />
      </div>
      <Log turns={turnsBoard} />
    </main>
  )
}

export default App
