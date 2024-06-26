"use client"

const Cell = ({ value, onClick }) => {
  const getColor = () => {
    if (value === 'Red') return 'bg-red-500'
    if (value === 'Yellow') return 'bg-yellow-500'
    return 'bg-white'
  }

  return (
    <div
      className={`w-12 h-12 border border-gray-400 ${getColor()}`}
      onClick={onClick}
    ></div>
  )
}

export default Cell
