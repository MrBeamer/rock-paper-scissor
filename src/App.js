import React, { useState } from "react";
import "./css/app.css";
import Scoreboard from "./components/Scoreboard";
import StartScreen from "./components/StartScreen";
import SelectionScreen from "./components/SelectionScreen";

function App() {
  const [playerSelected, setPlayerSelected] = useState("");
  const [houseSelected, setHouseSelected] = useState("");
  const [gameResult, setGameResult] = useState("");
  const [score, setScore] = useState(0);
  console.log(gameResult);

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

  function determineWinner() {
    console.log("player: " + playerSelected);
    console.log("house: " + houseSelected);
    if (playerSelected === "paper" && houseSelected === "rock") {
      console.log("player wins");
      setGameResult("YOU WIN");
      updateScore();
    }
    if (playerSelected === "rock" && houseSelected === "scissors") {
      setGameResult("YOU WIN");
      updateScore();
    }
    if (playerSelected === "scissors" && houseSelected === "paper") {
      setGameResult("YOU WIN");
      updateScore();
    }

    if (playerSelected === "paper" && houseSelected === "scissors") {
      setGameResult("YOU LOSE");
    }
    if (playerSelected === "rock" && houseSelected === "paper") {
      setGameResult("YOU LOSE");
    }
    if (playerSelected === "scissors" && houseSelected === "rock") {
      setGameResult("YOU LOSE");
    } else {
      setGameResult("DRAW");
    }
  }

  function updateScore() {
    // gameResult === "YOU WIN"
    //   ? setScore((prevScore) => prevScore + 1)
    //   : setScore(score);
    setScore((prevScore) => prevScore + 1);
  }

  return (
    <div className="container">
      <Scoreboard score={score} />
      <StartScreen
        setPlayerSelected={setPlayerSelected}
        houseSelection={houseSelection}
        determineWinner={determineWinner}
      />
      <SelectionScreen
        playerSelected={playerSelected}
        houseSelected={houseSelected}
      />
    </div>
  );
}

export default App;
