import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log"
function App() {
  const [turnsBoard, setTurnsBoard] = useState([]);
  const [activePlayer, setActivePlayer] = useState('X');
  function handleSelectedPlayer(rowIndex, colIndex) {
    setActivePlayer((prevActivePlayer) => prevActivePlayer === 'X' ? 'O' : 'X');
    setTurnsBoard((prevTurnsBoard) => {
      let curruntPlayer = 'X'; // we use this instead of activePlayer because activePlayer is not updated yet when this function is called and because this is another state 

      if (prevTurnsBoard.length > 0 && prevTurnsBoard[0].Player === 'X') {
        curruntPlayer = 'O';
      }

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
        <GameBoard activePlayerSymbol={activePlayer} onSelectSquare={handleSelectedPlayer} />
      </div>
      <Log />
    </main>
  )
}

export default App
