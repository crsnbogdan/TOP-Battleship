import style from "./style.css";
import { Player } from "./modules/PlayerFactory.js";
import { renderGame } from "./modules/RenderGameboards.js";
import {
  renderInitialViewContent,
  playerName,
} from "./modules/InitializeGame.js";
import { clearDOMElement } from "./modules/HelperFunctions.js";
(function () {
  renderInitialViewContent();
  let btn = document.getElementById("submit");
  let player = null;
  btn.addEventListener("click", () => {
    setTimeout(() => {
      let boardviewSection = document.querySelector(".boardviewSection");
      clearDOMElement(boardviewSection);
      player = Player(playerName);
      renderGame(player.playerBoard, player.compBoard, player);
    }, 0);
  });
})();
