"use client"

import { useGameContext } from '../context/GameContext'

const Header = () => {
  const { currentPlayer } = useGameContext()

  return (
    <div className='text-center my-4'>
      <h1 className='text-3xl font-bold'>Connect 4</h1>
      <h2 className='text-xl mt-2'>Current Player: {currentPlayer}</h2>
    </div>
  )
}

export default Header
