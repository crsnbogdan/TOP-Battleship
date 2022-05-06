import { Gameboard } from "./Gameboard.js";

function Player() {
  const playerName = "ben"; /*prompt('what should we call you?')*/
  let playerBoard = Gameboard();
  let compBoard = Gameboard();
  placeComputerShips();
  let playerTurn = true;
  let gameOver = false;
  let winner = "";

  function checkIfGameEnded() {
    if (gameOver) return;
    if (compBoard.reportShipsDestroyedStatus()) {
      winner = "player";
      gameOver = true;
      return;
    }
    if (playerBoard.reportShipsDestroyedStatus()) {
      winner = "computer";
      gameOver = true;
      return;
    }
  }

  function attackComputerBoard(xCoord, yCoord) {
    if (gameOver) return;
    compBoard.receiveAttack(xCoord, yCoord);
    switchTurn();
    playComputerTurn(playerBoard);
    checkIfGameEnded();
  }

  function switchTurn() {
    if (playerTurn) {
      playerTurn = false;
    } else if (!playerTurn) {
      playerTurn = true;
    }
  }

  function placeComputerShips() {
    generateComputerShip(5);
    generateComputerShip(4);
    generateComputerShip(3);
    generateComputerShip(2);
  }

  function generateTwoRandomCoords() {
    let x = Number((Math.random() * 10).toFixed(0));
    let y = Number((Math.random() * 10).toFixed(0));
    if (x + y > 9) {
      return generateTwoRandomCoords();
    } else {
      return [x, y];
    }
  }

  function generateComputerShip(shipLength) {
    let [x, y] = generateTwoRandomCoords();
    while (y + shipLength > 9) {
      y = Number((Math.random() * 10).toFixed(0));
    }
    while (compBoard.gameboardArr[x][shipLength].containsShip) {
      x = Number((Math.random() * 10).toFixed(0));
    }
    compBoard.placeShip(x, y, shipLength);
  }

  function playComputerTurn(playerBoard) {
    if (gameOver) return;
    let [x, y] = generateTwoRandomCoords();
    while (playerBoard.gameboardArr[x][y].isHit) {
      [x, y] = generateTwoRandomCoords();
    }
    playerBoard.receiveAttack(x, y);
    switchTurn();
    checkIfGameEnded();
  }
  return { attackComputerBoard, gameOver, playerBoard, compBoard };
}

export { Player };
