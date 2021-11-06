import "./app.css";
import Badge from "./components/Badge";

function App() {
  return (
    <div className="container">
      <Badge badgeColor={"badge--rock"} badgeIcon={"/images/icon-rock.svg"} />
      <Badge badgeColor={"badge--paper"} badgeIcon={"/images/icon-paper.svg"} />
      <Badge
        badgeColor={"badge--scissors"}
        badgeIcon={"/images/icon-scissors.svg"}
      />
    </div>
  );
}

export default App;
