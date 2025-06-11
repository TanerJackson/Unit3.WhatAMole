import { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";

const GameContext = createContext();

export function GameProvider({ children }) {
  const [gameScore, setGameScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [gameMole, setGameMole] = useState(Math.floor(Math.random() * 9));

  const gameStop = () => {
    setIsPlaying(false);
  };

  const gameStart = () => {
    setIsPlaying(true);
    setGameScore(0);
    setGameMole(Math.floor(Math.random() * 9));
  };

  const gameWhack = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * 9);
    } while (setGameMole(newPosition));
  };
  return (
    <GameContext.Provider
      value={{
        isPlaying,
        gameScore,
        gameWhack,
        //gameTimer,
        gameStop,
        gameStart,
        gameMole,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
export function useGame() {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("use game must be used inside a GameProvider");
  }
  return context;
}
