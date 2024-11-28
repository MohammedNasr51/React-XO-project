import { useState } from "react"
const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

export default function GameBoard() {
    // const [gameBoard, setGameBoard] = useState(initialGameBoard);
    return (
        <ol id='game-board'>
            {initialGameBoard.map((row, rowIndex) =>
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSympol, colIndex) =>
                            <li key={colIndex}>
                                <button>
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
