import Image from "next/image";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <section className='flex-col font-mono text-sm lg:flex'>
        <h1 className='text-4xl font-bold'>Welcome to Connect 4!</h1>
        <p className='text-xl'>Click the button below to start a new game.</p>
        <div>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            Start Game
          </button>
        </div>
      </section>
    </main>
  )
}
