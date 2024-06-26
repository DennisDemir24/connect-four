import { createContext, useState, useEffect, useContext } from 'react';


const initialState = {
  board: Array(6).fill(null).map(() => Array(7).fill(null)),
  currentPlayer: 'Red',
  history: [],
  winner: null,
};

const GameContext = createContext(undefined);

export const GameProvider = ({ children }) => {
  const [gameState, setGameState] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedState = localStorage.getItem('gameState');
      return savedState ? JSON.parse(savedState) : initialState;
    }
    return initialState;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
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
     if (gameState.history.length === 0) return
     const lastMove = gameState.history.pop()
     setGameState({
       ...lastMove,
       history: [...gameState.history],
       winner: null,
       currentPlayer: lastMove.player,
     })
   }

   const resetGame = () => {
     setGameState(initialState)
   }

  const checkWinner = (board) => {
    // Check for winner logic
    // return 'Red' or 'Yellow' if there is a winner

    return null;
  };

  return (
    <GameContext.Provider value={{ ...gameState, dropDisc, undoMove, resetGame }}>
      {children}
    </GameContext.Provider>
  );
}