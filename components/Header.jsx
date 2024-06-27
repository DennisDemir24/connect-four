"use client"

import Link from "next/link"

const Header = () => {

  return (
    <div className='flex mt-10 ml-10'>
      <Link
        className='bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg'
        href='/'
      >
        {'<-'}
      </Link>
    </div>
  )
}

export default Header
