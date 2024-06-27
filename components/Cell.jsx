"use client"

const Cell = ({ value, onClick }) => {
  const getColor = () => {
    if (value === 'Red') return 'bg-red-500'
    if (value === 'Yellow') return 'bg-yellow-500'
    return 'bg-white'
  }

  return (
    <div className="w-14 h-14 p-1">
      <div
        className={`w-full h-full rounded-full border-2 border-gray-400 ${getColor()} transition-colors duration-200 ease-in-out cursor-pointer`}
        onClick={onClick}
      ></div>
    </div>
  )
}

export default Cell
