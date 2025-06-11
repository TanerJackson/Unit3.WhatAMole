import { useGame } from "./gameContext";

export default function App() {
  let {
    isPlaying,
    gameScore,
    gameWhack,
    gameTimer,
    gameStop,
    gameStart,
    gameMole,
  } = useGame();
  isPlaying ? "true" : "false";
  console.log(isPlaying);
  if (isPlaying === false)
    return (
      <>
        <header>
          <h1>Whack a Mole</h1>
        </header>
        <section>
          <button className="StartButton" onClick={gameStart}>
            Start Game
          </button>
        </section>
      </>
    );
  if (isPlaying === true)
    return (
      <>
        <header>
          <h1>Whack a Mole</h1>
          <h2> {gameScore} </h2>
        </header>

        <main>
          <section className="GameArea">
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className={i === gameMole ? "mole" : "hole"}
                onClick={() => gameWhack(i)}
              ></div>
            ))}
          </section>
        </main>
      </>
    );
}
