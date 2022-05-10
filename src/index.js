import style from "./style.css";
import { Player } from "./modules/Player.js";
import { renderGame } from "./modules/DOMBoards.js";
import {
  renderInitialViewContent,
  playerName,
} from "./modules/gameInitialization.js";
import { clearDOMElement } from "./modules/DOMMethods.js";

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
