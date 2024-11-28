import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log"
function App() {
  const [turnsBoard, setTurnsBoard] = useState([]);
  const [activePlayer , setActivePlayer] = useState('X');
  function handleSelectedPlayer(){
    setActivePlayer((prevActivePlayer)=> prevActivePlayer === 'X' ? 'O' : 'X');
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName='Player 1' symbol='X' isActive={activePlayer==='X'}/>
          <Player initialName='Player 2' symbol='O' isActive={activePlayer==='O'}/>
        </ol>
        <GameBoard activePlayerSymbol={activePlayer} onSelectPlayer={handleSelectedPlayer} />
      </div>
      <Log />
    </main>
  )
}

export default App
