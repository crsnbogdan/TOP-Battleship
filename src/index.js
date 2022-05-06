import style from "./style.css";
import { Player } from "./Player.js";
import { renderGame } from "./DOMBoards.js";

let player = Player();
renderGame(player.playerBoard, player.compBoard);
