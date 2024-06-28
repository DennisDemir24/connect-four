import Link from "next/link";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-8 bg-gradient-to-r from-blue-500 to-purple-500'>
      <section className='flex flex-col items-center text-center font-mono text-white space-y-6'>
        <h1 className='text-5xl font-bold mb-4 drop-shadow-lg'>
          Welcome to Connect 4!
        </h1>
        <p className='text-2xl drop-shadow-lg'>
          Click the button below to start a new game and have fun.
        </p>
        <Link href='/game'>
          <button className='bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg'>
            Start Game
          </button>
        </Link>
      </section>
    </main>
  )
}
