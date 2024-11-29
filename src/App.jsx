import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log"
import { WINNING_COMBINATIONS } from "./winning-combinations"
import GameOver from "./components/GameOver"

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2'
}

function driveCurrentPlayer(turns) {
  let curruntPlayer = 'X'; // we use this instead of activePlayer because activePlayer is not updated yet when this function is called and because this is another state we can use it to drive the current player
  if (turns.length > 0 && turns[0].player === 'X') {
    curruntPlayer = 'O';
  }
  return curruntPlayer;
}

function driveGameBoard(turnsBoard) {
  let gameBoard = [...INITIAL_GAME_BOARD.map((row) => [...row])];

  for (const turn of turnsBoard) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  return gameBoard;
}

function driveWinner(gameBoard, Players) {
  let winner;
  // this is the winning combinations loop i wrote it here bacause the app component will be re-rendered every time we click on square so we dont need another state to store the winner
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].col];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].col];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].col];
    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
      winner = Players[firstSquareSymbol];
    }
  }
  return winner;
}

function App() {
  const [turnsBoard, setTurnsBoard] = useState([]);
  const [Players, setPlayers] = useState([PLAYERS]);

  function handleSelectedPlayer(rowIndex, colIndex) {

    setTurnsBoard((prevTurnsBoard) => {

      let curruntPlayer = driveCurrentPlayer(prevTurnsBoard);

      let updatedTurnsBoard = [{ square: { row: rowIndex, col: colIndex }, player: curruntPlayer }, ...prevTurnsBoard];
      return updatedTurnsBoard;
    })
  }

  function handleRestart() {
    setTurnsBoard([]);
  }

  function handleChangePlayerName(symbol, newPlayerName) {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newPlayerName
      }
    })
  }

  const activePlayer = driveCurrentPlayer(turnsBoard);
  let gameBoard = driveGameBoard(turnsBoard);
  const winner = driveWinner(gameBoard, Players);
  let hasDrow = turnsBoard.length === 9 && !winner; // if we clicked on all squares and there is no winner then it is a drow
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName={PLAYERS.X} symbol='X' isActive={activePlayer === 'X'} onChangeName={handleChangePlayerName} />
          <Player initialName={PLAYERS.O} symbol='O' isActive={activePlayer === 'O'}
            onChangeName={handleChangePlayerName} />
        </ol>
        {(winner || hasDrow) && <GameOver winner={winner} onRematch={handleRestart} />}
        <GameBoard board={gameBoard} onSelectSquare={handleSelectedPlayer} />

      </div>
      <Log turns={turnsBoard} />
    </main>
  )
}

export default App
