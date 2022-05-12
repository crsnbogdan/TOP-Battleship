import {
  updateGamePrompt,
  getShipType,
  clearDOMElement,
} from "./HelperFunctions.js";

function renderGame(playerBoard, compBoard, player) {
  let gameboard = playerBoard;

  function renderSingleBoardView(gameboard) {
    let boardviewSection = document.querySelector(".boardviewSection");
    let gameboardArr = gameboard.gameboardArr;
    let shipLength = 5;
    updateGamePrompt(`Please place your ${getShipType(shipLength)}`, document);
    let playerBoardContainer = document.createElement("div");
    playerBoardContainer.classList.add("playerboard-container");
    boardviewSection.appendChild(playerBoardContainer);
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
          if (checkAdjacentBoardPieces(shipLength, boardItem)) return;
          if (shipLength < 1) return;
          if (gameboard.placeShip(xCoord, yCoord, shipLength) === false) return;

          gameboard.placeShip(xCoord, yCoord, shipLength);
          let currentBoardItem = boardItem;
          if (!boardItem.previousElementSibling == null) {
            currentBoardItem = boardItem;
          }
          for (let i = 0; i < shipLength; i++) {
            currentBoardItem.classList.add("containsShip");
            currentBoardItem = currentBoardItem.nextElementSibling;
          }

          shipLength--;

          if (shipLength > 0) {
            updateGamePrompt(
              `Please place your ${getShipType(shipLength)}`,
              document
            );
          } else if (shipLength < 1) {
            updateGamePrompt("", document);
            renderDualBoardView(gameboard, compBoard, boardviewSection);
          }

          function checkAdjacentBoardPieces(shipLength, currentBoardItem) {
            let breakFunction = false;
            if (breakFunction === true) return;
            let boardItem = currentBoardItem;
            for (let i = 0; i < shipLength; i++) {
              if (breakFunction) return;
              if (boardItem.classList.contains("containsShip")) {
                return (breakFunction = true);
              } else {
                boardItem = boardItem.nextElementSibling;
              }
            }
            return breakFunction;
          }
        });
      });
    });
  }

  function renderDualBoardView(playerBoard, compBoard, containerElement) {
    clearDOMElement(containerElement);
    let boardNamesContainer = document.querySelector(".boardnamesSection");
    boardNamesContainer.style.visibility = "visible";
    updateGamePrompt("In progress...", document);
    let boardviewSection = document.querySelector(".boardviewSection");

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
          if (!displayShips) {
            boardItem.addEventListener("click", () => {
              let xCoord = gameboardArr.indexOf(gameboardRow);
              let yCoord = gameboardRow.indexOf(rowItem);
              if (gameboardArr[xCoord][yCoord].isHit) return;

              let cachedCompHitCoords = player.attackComputerBoard(
                xCoord,
                yCoord
              );
              if (rowItem.containsShip) {
                boardItem.style.backgroundColor = "#5234B5";
                boardItem.classList.add("containsHitShip");
              }
              [xHitByCompCoord, yHitByCompCoord] = cachedCompHitCoords;
              updateGameboardItem(xHitByCompCoord, yHitByCompCoord);
              if (!rowItem.containsShip) {
                boardItem.style.backgroundColor = "#d2d2d2";
              }
            });
          }
        });
      });
    }
    let [xHitByCompCoord, yHitByCompCoord] = [];

    function updateGameboardItem(xCoord, yCoord) {
      let DOMPlayerboardContainer = document.querySelector(".gameboard");
      let DOMBoardItemArr =
        DOMPlayerboardContainer.querySelectorAll(".boardItem");
      let boardItemIndex = xCoord * 10 + yCoord;
      let boardItem = DOMBoardItemArr[boardItemIndex];
      if (
        !playerBoard.gameboardArr[xHitByCompCoord][yHitByCompCoord].containsShip
      ) {
        boardItem.style.backgroundColor = "#d2d2d2";
      }
      if (
        playerBoard.gameboardArr[xHitByCompCoord][yHitByCompCoord].containsShip
      ) {
        boardItem.style.backgroundColor = "#5234B5";
        boardItem.classList.add("containsHitShip");
      }
    }
    renderBoard(playerBoard, boardviewSection, true);
    renderBoard(compBoard, boardviewSection, false);
  }
  renderSingleBoardView(gameboard);
}

export { renderGame };
