const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

export default function GameBoard({ onSelectSquare }) {
    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // const handleCellClick = (rowIndex,colIndex)=> {
    //     setGameBoard((prevGameBoard)=>{
    //         const updatedGameBoard = [...prevGameBoard.map(innerArray=>[...innerArray])];
    //         updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return updatedGameBoard;
    //     })
    //     onSelectPlayer();
    // }
    return (
        <ol id='game-board'>
            {{/*gameBoard*/}.map((row, rowIndex) =>
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSympol, colIndex) =>
                            <li key={colIndex}>
                                <button onClick={onSelectSquare} >
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
