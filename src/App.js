import "./css/app.css";
import Scoreboard from "./components/Scoreboard";
import StartScreen from "./components/StartScreen";
import SelectionScreen from "./components/SelectionScreen";

function App() {
  return (
    <div className="container">
      <Scoreboard />
      <StartScreen />
      <SelectionScreen />
    </div>
  );
}

export default App;
