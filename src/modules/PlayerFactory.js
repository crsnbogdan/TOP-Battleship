import { Gameboard } from "./GameboardFactory";
import { updateGamePrompt } from "./HelperFunctions.js";
/*
let Gameboard = require('./GameboardFactory');
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
    if (gameOver && winner === name) {
      updateGamePrompt(
        `You sunk all of the computer's ships and won`,
        document
      );
    } else if (gameOver && winner === "The computer") {
      updateGamePrompt(`${winner} sunk all your ships and won`, document);
    }
    if (compBoard.reportShipsDestroyedStatus()) {
      winner = name;
      gameOver = true;
      checkIfGameEnded();
    }
    if (playerBoard.reportShipsDestroyedStatus()) {
      winner = "The computer";
      gameOver = true;
      checkIfGameEnded();
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

  function generateTwoRandomCoords(areForAttack) {
    let x = Math.floor(Number(Math.random() * 10));
    let y = Math.floor(Number(Math.random() * 10));
    if (areForAttack) {
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
