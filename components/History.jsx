"use client"

import { useGameContext } from "../context/GameContext"

const History = () => {
  const { undoMove } = useGameContext()
  return (
    <button
      className='bg-gray-500 text-white px-4 py-2 rounded mt-4'
      onClick={undoMove}
    >
      Undo Move
    </button>
  )
}

export default History
