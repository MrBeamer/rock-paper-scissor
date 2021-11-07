import React, { useState } from "react";
import "./css/app.css";
import Scoreboard from "./components/Scoreboard";
import StartScreen from "./components/StartScreen";
import SelectionScreen from "./components/SelectionScreen";

function App() {
  const [playerSelected, setPlayerSelected] = useState("");
  const [houseSelected, setHouseSelected] = useState("");

  console.log(playerSelected);

  function houseSelection() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    console.log(randomNumber);

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

  return (
    <div className="container">
      <Scoreboard />
      <StartScreen
        setPlayerSelected={setPlayerSelected}
        houseSelection={houseSelection}
      />
      <SelectionScreen
        playerSelected={playerSelected}
        houseSelected={houseSelected}
      />
    </div>
  );
}

export default App;
