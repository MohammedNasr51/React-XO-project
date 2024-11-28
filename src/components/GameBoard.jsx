import { useState } from "react"
const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

export default function GameBoard() {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    const handleCellClick = (rowIndex,colIndex)=> {
        setGameBoard((prevGameBoard)=>{
            const updatedGameBoard = [...prevGameBoard.map(innerArray=>[...innerArray])];
            updatedGameBoard[rowIndex][colIndex] = 'X';
            return updatedGameBoard;
        })
    }
    return (
        <ol id='game-board'>
            {gameBoard.map((row, rowIndex) =>
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSympol, colIndex) =>
                            <li key={colIndex}>
                                <button onClick={()=>handleCellClick(rowIndex,colIndex)}>
                                    {playerSympol}
                                </button>
                            </li>
                        )}
                    </ol>
                </li>
            )}
        </ol>
    )
}
