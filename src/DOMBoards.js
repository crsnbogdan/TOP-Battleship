import {
  updateGamePrompt,
  getShipType,
  clearDOMElement,
} from "./DOMMethods.js";

function renderGame(playerBoard, compBoard) {
  let gameboard = playerBoard;

  function renderSingleBoardView(gameboard) {
    let mainViewSection = document.querySelector(".mainviewSection");
    let gameboardArr = gameboard.gameboardArr;
    let shipLength = 5;
    updateGamePrompt(`Please place your ${getShipType(shipLength)}`);
    let playerBoardContainer = document.createElement("div");
    playerBoardContainer.classList.add("playerboard-container");
    mainViewSection.appendChild(playerBoardContainer);
    let playerBoard = document.createElement("div");
    playerBoard.classList.add("playerboard");
    playerBoardContainer.appendChild(playerBoard);

    gameboardArr.forEach((gameboardRow) => {
      let xCoord = gameboardArr.indexOf(gameboardRow);
      gameboardRow.forEach((rowItem) => {
        let yCoord = gameboardRow.indexOf(rowItem);
        const boardItem = document.createElement("div");
        boardItem.classList.add("boardItem");
        playerBoard.appendChild(boardItem);
        boardItem.addEventListener("click", () => {
          if (boardItem.nextElementSibling.classList.contains("containsShip"))
            return;
          if (
            boardItem.previousElementSibling.classList.contains("containsShip")
          )
            return;
          if (shipLength < 1) return;
          if (gameboard.placeShip(xCoord, yCoord, shipLength) === false) return;

          gameboard.placeShip(xCoord, yCoord, shipLength);

          let currentBoardItem = boardItem.previousElementSibling;
          for (let i = 0; i < shipLength; i++) {
            currentBoardItem.nextElementSibling.classList.add("containsShip");
            currentBoardItem = currentBoardItem.nextElementSibling;
          }
          shipLength--;
          if (shipLength > 1) {
            updateGamePrompt(`Please place your ${getShipType(shipLength)}`);
          }
          if (shipLength <= 1) {
            updateGamePrompt("");
            renderDualBoardView(gameboard, compBoard, mainViewSection);
          }
        });
      });
    });
  }

  function renderDualBoardView(playerBoard, compBoard, containerElement) {
    clearDOMElement(containerElement);
    let mainViewSection = document.querySelector(".mainviewSection");

    function renderBoard(board, containerElement, displayShips) {
      let boardContainer = document.createElement("div");
      boardContainer.classList.add("boardContainer");
      containerElement.appendChild(boardContainer);

      let gameboardArr = board.gameboardArr;

      let DOMBoard = document.createElement("div");
      boardContainer.appendChild(DOMBoard);
      DOMBoard.classList.add("gameboard");
      gameboardArr.forEach((gameboardRow) => {
        gameboardRow.forEach((rowItem) => {
          const boardItem = document.createElement("div");
          boardItem.classList.add("boardItem");
          DOMBoard.appendChild(boardItem);
          if (displayShips) {
            if (rowItem.containsShip) {
              boardItem.classList.add("containsShip");
            }
          }
          boardItem.addEventListener("click", () => {});
        });
      });
    }
    renderBoard(playerBoard, mainViewSection, true);
    renderBoard(compBoard, mainViewSection, false);
  }
  renderSingleBoardView(gameboard);
}

export { renderGame };
