import { createContext, useState, useEffect, useContext, ReactNode } from 'react';

interface GameState {
  board: (string | null)[][];
  currentPlayer: 'Red' | 'Yellow';
  history: { board: (string | null)[][]; player: 'Red' | 'Yellow' }[];
  winner: 'Red' | 'Yellow' | null;
}

interface GameContextProps extends GameState {
  dropDisc: (column: number) => void;
  undoMove: () => void;
  resetGame: () => void;
}