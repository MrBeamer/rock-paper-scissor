const [badge, setBadge] = useState({ class: "", icon: "" });

switch (playerSelected) {
  case "rock":
    setBadge((prevBadge) => {
      return {
        ...prevBadge,
        class: "badge--rock",
        icon: "/images/icon-rock.svg",
      };
    });
    break;
  case "paper":
    console.log("rock");
    break;
  case "scissors":
    console.log("rock");
    break;
  default:
    console.log("Error");
}
