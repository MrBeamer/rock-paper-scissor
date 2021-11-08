import React, { useState, useEffect } from "react";
import "./css/app.css";
import Scoreboard from "./components/Scoreboard";
import StartScreen from "./components/StartScreen";
import SelectionScreen from "./components/SelectionScreen";
import Message from "./components/Message";

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [playerSelected, setPlayerSelected] = useState("");
  const [houseSelected, setHouseSelected] = useState("");
  const [gameResult, setGameResult] = useState("");
  const [score, setScore] = useState(0);

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

  // function determineWinner() {
  //   console.log("player: " + playerSelected);
  //   console.log("house: " + houseSelected);
  //   if (playerSelected === "paper" && houseSelected === "rock") {
  //     console.log("player wins");
  //     setGameResult("YOU WIN");
  //     updateScore();
  //   } else if (playerSelected === "rock" && houseSelected === "scissors") {
  //     setGameResult("YOU WIN");
  //     updateScore();
  //   } else if (playerSelected === "scissors" && houseSelected === "paper") {
  //     setGameResult("YOU WIN");
  //     updateScore();
  //   } else if (playerSelected === "paper" && houseSelected === "scissors") {
  //     setGameResult("YOU LOSE");
  //   } else if (playerSelected === "rock" && houseSelected === "paper") {
  //     setGameResult("YOU LOSE");
  //   } else if (playerSelected === "scissors" && houseSelected === "rock") {
  //     setGameResult("YOU LOSE");
  //   } else {
  //     setGameResult("DRAW");
  //   }
  // }

  function updateScore() {
    // gameResult === "YOU WIN"
    //   ? setScore((prevScore) => prevScore + 1)
    //   : setScore(score);
    setScore((prevScore) => prevScore + 1);
  }

  useEffect(() => {
    function determineWinner() {
      console.log("player: " + playerSelected);
      console.log("house: " + houseSelected);
      if (playerSelected === "paper" && houseSelected === "rock") {
        console.log("player wins");
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

  function resetGame() {
    setGameStarted(false);
    setPlayerSelected("");
    setHouseSelected("");
    setGameResult("");
  }

  return (
    <div className="container">
      <Scoreboard score={score} />

      {gameStarted ? (
        <SelectionScreen
          playerSelected={playerSelected}
          houseSelected={houseSelected}
        />
      ) : (
        <StartScreen
          setGameStarted={setGameStarted}
          setPlayerSelected={setPlayerSelected}
          houseSelection={houseSelection}
        />
      )}
      <Message gameResult={gameResult} resetGame={resetGame} />
    </div>
  );
}

export default App;
