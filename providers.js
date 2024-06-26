'use client';

import { GameProvider } from "./context/GameContext.js";


export function Providers({ children }) {
  return (
    <GameProvider>
      {children}
    </GameProvider>
  )
}