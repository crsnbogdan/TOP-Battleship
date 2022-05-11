import style from "./style.css";
import { Player } from "./modules/PlayerModule.js";
import { renderGame } from "./modules/RenderGameboards.js";
import {
  renderInitialViewContent,
  playerName,
} from "./modules/InitializeGame.js";
import { clearDOMElement } from "./modules/HelperFunctions.js";

renderInitialViewContent();
let btn = document.getElementById("submit");
let player = null;
btn.addEventListener("click", () => {
  setTimeout(() => {
    let mainViewSection = document.querySelector(".mainviewSection");
    clearDOMElement(mainViewSection);
    player = Player(playerName);
    renderGame(player.playerBoard, player.compBoard, player);
  }, 0);
});
