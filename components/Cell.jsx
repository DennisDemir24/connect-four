'use client'

const Cell = ({ cell, onClick }) => {
  return (
    <div
      className='w-16 h-16 bg-blue-600 rounded-full shadow-inner cursor-pointer flex items-center justify-center'
      onClick={onClick}
    >
      <div
        className={`w-16 h-16 rounded-full ${
          cell ? (cell === 'Red' ? 'bg-red-500' : 'bg-yellow-500') : 'bg-white'
        } shadow-inner transition-all duration-300 ease-in-out transform ${
          cell ? 'scale-100' : 'scale-90'
        }`}
      ></div>
    </div>
  )
}

export default Cell
