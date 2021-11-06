import "./css/app.css";
import Scoreboard from "./components/Scoreboard";
import Game from "./components/Game";

function App() {
  return (
    <div className="container">
      <Scoreboard />
      <Game />
    </div>
  );
}

export default App;
