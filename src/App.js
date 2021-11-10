import React, { useState, useEffect } from "react";
import "./css/app.css";
import Scoreboard from "./components/Scoreboard";
import StartScreen from "./components/StartScreen";
import SelectionScreen from "./components/SelectionScreen";
import Message from "./components/Message";
import Rules from "./components/Rules";

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [playerSelected, setPlayerSelected] = useState("");
  const [houseSelected, setHouseSelected] = useState("");
  const [gameResult, setGameResult] = useState("");
  const [score, setScore] = useState(0);
  const [show, setShow] = useState(false);

  function houseSelection() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    switch (randomNumber) {
      case 1:
        setHouseSelected("rock");
        break;
      case 2:
        setHouseSelected("paper");
        break;
      case 3:
        setHouseSelected("scissors");
        break;
      default:
        console.log("error");
    }
  }

  function updateScore() {
    // gameResult === "YOU WIN"
    //   ? setScore((prevScore) => prevScore + 1)
    //   : setScore(score);
    // setScore((prevScore) => prevScore + 1);

    //delays the rendering of the score => because its needs to be synchronous with the message
    const timeout = setTimeout(() => {
      setScore((prevScore) => prevScore + 1);
    }, 3600);
    //cleanup delay debounce
    return () => clearTimeout(timeout);
  }

  useEffect(() => {
    function determineWinner() {
      if (playerSelected === "paper" && houseSelected === "rock") {
        setGameResult("YOU WIN");
        updateScore();
      } else if (playerSelected === "rock" && houseSelected === "scissors") {
        setGameResult("YOU WIN");
        updateScore();
      } else if (playerSelected === "scissors" && houseSelected === "paper") {
        setGameResult("YOU WIN");
        updateScore();
      } else if (playerSelected === "paper" && houseSelected === "scissors") {
        setGameResult("YOU LOSE");
      } else if (playerSelected === "rock" && houseSelected === "paper") {
        setGameResult("YOU LOSE");
      } else if (playerSelected === "scissors" && houseSelected === "rock") {
        setGameResult("YOU LOSE");
      } else {
        setGameResult("DRAW");
      }
    }
    determineWinner();
  }, [playerSelected, houseSelected]);

  //delays the rendering of the message
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true);
    }, 3600);

    //cleanup delay debounce
    return () => clearTimeout(timeout);
  }, [gameResult]);

  function resetGame() {
    setGameStarted(false);
    setPlayerSelected("");
    setHouseSelected("");
    setGameResult("");
    setShow(false);
  }

  return (
    <div className="container">
      <Scoreboard score={score} />
      {gameStarted ? (
        <SelectionScreen
          playerSelected={playerSelected}
          houseSelected={houseSelected}
          gameResult={gameResult}
        />
      ) : (
        <StartScreen
          setGameStarted={setGameStarted}
          setPlayerSelected={setPlayerSelected}
          houseSelection={houseSelection}
        />
      )}
      {show ? (
        <Message
          gameResult={gameResult}
          resetGame={resetGame}
          gameStarted={gameStarted}
        />
      ) : null}
      {/* <Rules /> */}
    </div>
  );
}

export default App;
