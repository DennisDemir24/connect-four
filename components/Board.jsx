"use client"
import React, { useState } from 'react'
import { useGameContext } from '../context/GameContext'
import Cell from './Cell'

const Board = () => {
  const { board, winner, dropDisc,  currentPlayer, resetGame, undoMove } = useGameContext()

  const getColor = () => {
    if (currentPlayer === 'Red') return 'text-red-500'
    if (currentPlayer === 'Yellow') return 'text-yellow-500'
    return 'bg-white'
  }
  const handleCellClick = (column) => {
    if (!winner) {
      dropDisc(column)
    }
  }

  if (!board) {
    return null
  }

  return (
    <div className='flex flex-col items-center mt-12'>
      <div>
        {winner ? (
          <>
            <h2 className='text-2xl font-bold mb-4'>
              {winner} Wins, Play again!
            </h2>
          </>
        ) : (
          <h2 className='text-2xl font-bold mb-4'>
            Current Player:
            <span className={`${getColor()}`}> {currentPlayer}</span>
          </h2>
        )}
      </div>
      <div className='bg-blue-600 p-4 rounded-lg shadow-lg '>
        <div className='grid grid-cols-7 gap-1'>
          {board.map((row, rowIndex) => (
            <React.Fragment key={rowIndex}>
              {row.map((cell, colIndex) => (
                <Cell
                  key={`${rowIndex}-${colIndex}`}
                  cell={cell}
                  onClick={() => handleCellClick(colIndex)}
                />
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className='mt-4'>
        <button
          className='bg-gray-700 text-white px-4 py-2 rounded-md mr-2 shadow-md hover:bg-gray-600'
          onClick={undoMove}
        >
          Undo
        </button>
        <button
          className='bg-red-700 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-600'
          onClick={resetGame}
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default Board