"use client"

import { useGameContext } from '../context/GameContext'
import History from './History'

const Header = () => {
  const { currentPlayer, resetGame } = useGameContext()

  return (
    <div className='text-center my-4'>
      <h1 className='text-3xl font-bold'>Connect 4</h1>
      <h2 className='text-xl mt-2'>Current Player: {currentPlayer}</h2>
      <div>
        <History />
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4' onClick={resetGame}>Reset Game</button>
      </div>
    </div>
  )
}

export default Header
