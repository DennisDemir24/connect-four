"use client"
import { useGameContext } from '../context/GameContext'
import Cell from './Cell'

const Board = () => {
  const { board, winner, dropDisc,  currentPlayer } = useGameContext()

  const handleCellClick = (column) => {
    if (!winner) {
      dropDisc(column)
    }
  }

  if (!board) {
    return null
  }

  return (
    <div>
      <div>
        {winner ? (
          <h2>{winner} Wins!</h2>
        ) : (
          <h2>Current Player: {currentPlayer}</h2>
        )}
      </div>

      <div className='grid gap-1 bg-blue-700 w-1/2 justify-center'>
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className='flex'>
            {row.map((cell, colIndex) => (
              <Cell
                key={colIndex}
                value={cell}
                onClick={() => handleCellClick(colIndex)}
              />
            ))}
          </div>
        ))}
        {winner && (
          <div className='text-center text-xl font-bold mt-4'>
            Winner: {winner}
          </div>
        )}
      </div>
    </div>
  )
}

export default Board