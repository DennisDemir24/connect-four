'use client';

import { createContext, useState, useEffect, useContext } from 'react';

/* Constants for the board  */
const BOARD_ROWS = 6;
const BOARD_COLUMNS = 7;

const initialState = {
  board: Array(BOARD_ROWS).fill(null).map(() => Array(BOARD_COLUMNS).fill(null)),
  currentPlayer: 'Red',
  history: [],
  winner: null,
};

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [gameState, setGameState] = useState(initialState);

  useEffect(() => {
    const savedState = localStorage.getItem('gameState');
    if (savedState) {
      setGameState(JSON.parse(savedState));
    }
  }, []);

  useEffect(() => {
    if (gameState !== initialState) {
      localStorage.setItem('gameState', JSON.stringify(gameState));
    }
  }, [gameState]);

  const dropDisc = (column) => {
    if (gameState.winner) return;

    const newBoard = gameState.board.map(row => row.slice());
    for (let row = newBoard.length - 1; row >= 0; row--) {
      if (!newBoard[row][column]) {
        newBoard[row][column] = gameState.currentPlayer;
        break;
      }
    }

    const newHistory = [...gameState.history, { board: gameState.board, player: gameState.currentPlayer }];
    setGameState({
      board: newBoard,
      currentPlayer: gameState.currentPlayer === 'Red' ? 'Yellow' : 'Red',
      history: newHistory,
      winner: checkWinner(newBoard),
    });
  };

  const undoMove = () => {
    if (gameState.history.length === 0) return;
    const lastMove = gameState.history.pop();
    setGameState({
      ...lastMove,
      history: [...gameState.history],
      winner: null,
      currentPlayer: lastMove.player,
    });
  };

  const resetGame = () => {
    setGameState(initialState);
  };

  const checkWinner = (board) => {
    const checkLine = (a, b, c, d) => {
      return a !== null && a === b && a === c && a === d;
    };

    for (let row = 0; row < board.length; row++) {
      for (let col = 0; col < board[row].length; col++) {
        if (col <= board[row].length - 4 && checkLine(board[row][col], board[row][col + 1], board[row][col + 2], board[row][col + 3])) {
          return board[row][col];
        }
        if (row <= board.length - 4 && checkLine(board[row][col], board[row + 1][col], board[row + 2][col], board[row + 3][col])) {
          return board[row][col];
        }
        if (row <= board.length - 4 && col <= board[row].length - 4 && checkLine(board[row][col], board[row + 1][col + 1], board[row + 2][col + 2], board[row + 3][col + 3])) {
          return board[row][col];
        }
        if (row >= 3 && col <= board[row].length - 4 && checkLine(board[row][col], board[row - 1][col + 1], board[row - 2][col + 2], board[row - 3][col + 3])) {
          return board[row][col];
        }
      }
    }

    return null;
  };

  return (
    <GameContext.Provider value={{ ...gameState, dropDisc, undoMove, resetGame }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => useContext(GameContext);