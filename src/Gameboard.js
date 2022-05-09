import { ShipFactory } from "./ShipFactory";

function Gameboard() {
  let gameboardArr = [
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], [], []],
  ];
  gameboardArr.forEach((gameBoardRow) => {
    gameBoardRow.forEach((gameBoardItem) => {
      gameBoardItem.containsShip = false;
      gameBoardItem.isHit = false;
    });
  });

  function placeShip(xCoord, yCoord, shipLength) {
    let shipLastCoord = yCoord + shipLength;
    if (
      xCoord >= 10 ||
      xCoord < 0 ||
      yCoord < 0 ||
      shipLength < 0 ||
      gameboardArr[xCoord][yCoord].containsShip ||
      shipLastCoord > 10
    ) {
      return false;
    } else {
      if (yCoord + shipLength > 10) {
        return false;
      } else {
        let ship = ShipFactory(shipLength);
        gameboardArr[xCoord].splice(yCoord, shipLength, ...ship);
        return true;
      }
    }
  }

  function getFullShipOfType(shipType) {
    let boardRowIndex;
    let shipPieceIndexes = "";
    gameboardArr.forEach((boardRow) => {
      boardRow.forEach((shipPiece) => {
        if (shipPiece.shipType === shipType) {
          boardRowIndex = gameboardArr.indexOf(boardRow);
          shipPieceIndexes += boardRow.indexOf(shipPiece);
        }
      });
    });

    let shipInfo = [boardRowIndex, shipPieceIndexes];
    return shipInfo;
  }

  function updateShipSinkStatus(shipInfo) {
    let shipHitCounter = 0;
    for (let i = 0; i < shipInfo[1].length; i++) {
      if (gameboardArr[shipInfo[0]][shipInfo[1][i]].isHit === true) {
        shipHitCounter++;
      }
    }
    if (shipHitCounter === shipInfo[1].length) {
      for (let i = 0; i < shipInfo[1].length; i++) {
        gameboardArr[shipInfo[0]][shipInfo[1][i]].sinkStatus = true;
      }
    }
  }

  function receiveAttack(xCoord, yCoord) {
    if (gameboardArr[xCoord][yCoord].containsShip === true) {
      gameboardArr[xCoord][yCoord].hitShip();
      let currentShipType = gameboardArr[xCoord][yCoord].shipType;

      updateShipSinkStatus(getFullShipOfType(currentShipType));
    } else {
      gameboardArr[xCoord][yCoord].isHit = true;
    }
  }

  function reportShipsDestroyedStatus() {
    let shipPieces = 0;
    let shipPieceHitCounter = 0;
    gameboardArr.forEach((boardRow) => {
      boardRow.forEach((boardPiece) => {
        if (boardPiece.containsShip === true) {
          shipPieces++;
          if (boardPiece.isHit === true) {
            shipPieceHitCounter++;
          }
        }
      });
    });

    if (shipPieces === shipPieceHitCounter && shipPieces > 0) return true;
    return false;
  }

  return { gameboardArr, placeShip, receiveAttack, reportShipsDestroyedStatus };
}
export { Gameboard };
