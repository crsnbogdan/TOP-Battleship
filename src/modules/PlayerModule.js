import { Gameboard } from "./GameboardModule";
import { updateGamePrompt } from "./HelperFunctions.js";
/*
let Gameboard = require('./GameboardModule');
let HelperFunctions = require('./HelperFunctions');
let updateGamePrompt = HelperFunctions.updateGamePrompt();
*/
function Player(name) {
  if (name == "" || name == "undefined" || name == "null") return;
  let playerBoard = Gameboard();
  let compBoard = Gameboard();
  placeComputerShips();
  let playerTurn = true;
  let gameOver = false;
  let winner = "";

  function checkIfGameEnded() {
    if (gameOver) return;
    if (compBoard.reportShipsDestroyedStatus()) {
      winner = name;
      gameOver = true;
      updateGamePrompt(
        `${winner} sunk all of the computer's ships and won`,
        document
      );
      return;
    }
    if (playerBoard.reportShipsDestroyedStatus()) {
      winner = "The computer";
      gameOver = true;
      return updateGamePrompt(
        `${winner} sunk all your ships and won`,
        document
      );
    }
  }

  function attackComputerBoard(xCoord, yCoord) {
    if (gameOver) return;
    compBoard.receiveAttack(xCoord, yCoord);
    switchTurn();
    let cachedCoords = playComputerTurn(playerBoard);

    checkIfGameEnded();
    return cachedCoords;
  }

  function switchTurn() {
    if (playerTurn) {
      playerTurn = false;
    } else if (!playerTurn) {
      playerTurn = true;
    }
  }

  function placeComputerShips() {
    setTimeout(generateComputerShip(5), 100);
    setTimeout(generateComputerShip(4), 200);
    setTimeout(generateComputerShip(3), 300);
    setTimeout(generateComputerShip(2), 400);
  }

  function generateTwoRandomCoords(isForAttack) {
    let x = Math.floor(Number(Math.random() * 10));
    let y = Math.floor(Number(Math.random() * 10));
    if (isForAttack) {
      return [x, y];
    } else {
      if (x + y > 9) {
        return generateTwoRandomCoords();
      } else {
        return [x, y];
      }
    }
  }

  function generateComputerShip(shipLength) {
    let [x, y] = generateTwoRandomCoords();
    while (y + shipLength > 9) {
      y = Number((Math.random() * 10).toFixed(0));
    }
    while (compBoard.gameboardArr[x][shipLength].containsShip) {
      x = Number((Math.random() * 10).toFixed(0));
      y = Number((Math.random() * 10).toFixed(0));
    }
    compBoard.placeShip(x, y, shipLength);
  }

  function playComputerTurn(playerBoard) {
    if (gameOver) return;
    checkIfGameEnded();
    let [x, y] = generateTwoRandomCoords(true);
    while (playerBoard.gameboardArr[x][y].isHit) {
      [x, y] = generateTwoRandomCoords(true);
    }
    playerBoard.receiveAttack(x, y);
    switchTurn();
    return [x, y];
  }
  return {
    attackComputerBoard,
    gameOver,
    playerBoard,
    compBoard,
    checkIfGameEnded,
  };
}

export { Player };
//module.exports = Player;
