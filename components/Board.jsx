"use client"
import { useGameContext } from '../context/GameContext'
import Cell from './Cell'

const Board = () => {
  const { board, winner, dropDisc } = useGameContext()

  const handleCellClick = (column) => {
    if (!winner) {
      dropDisc(column)
    }
  }

  if (!board) {
    return null
  }

  return (
    <div className='grid gap-1'>
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
  )
}

export default Board