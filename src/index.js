function ShipFactory(shipLength) {
  let ship = [];
  for (let i = 0; i < shipLength; i++) {
    ship.push([]);
  }

  ship.forEach((shipPiece) => {
    shipPiece.containsShip = true;
    shipPiece.isHit = false;
    shipPiece.shipType = `${shipLength}`;
    shipPiece.sinkStatus = false;

    shipPiece.hitShip = function () {
      if (this.containsShip === false || this.sinkStatus === true) return;
      this.isHit = true;
    };
  });
  return ship;
}

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

  function getShipOfType(shipType) {
    let boardRowIndex;
    let shipPieceIndexes = "";
    for (boardRow of gameboardArr) {
      for (boardPiece of boardRow) {
        if (boardPiece.shipType === shipType) {
          boardRowIndex = gameboardArr.indexOf(boardRow);
          shipPieceIndexes += boardRow.indexOf(boardPiece);
        }
      }
    }
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
    } else {
      gameboardArr[xCoord][yCoord].isHit = true;
    }
    let currentShipType = gameboardArr[xCoord][yCoord].shipType;
    updateShipSinkStatus(getShipOfType(currentShipType));
  }

  function reportShipsDestroyedStatus() {
    let shipPieces = 0;
    let shipPieceHitCounter = 0;
    for (boardRow of gameboardArr) {
      for (boardPiece of boardRow) {
        if (boardPiece.containsShip === true) {
          shipPieces++;
          if (boardPiece.isHit === true) {
            shipPieceHitCounter++;
          }
        }
      }
    }
    if (shipPieces === shipPieceHitCounter && shipPieces > 0) return true;
    return false;
  }

  return { gameboardArr, placeShip, receiveAttack, reportShipsDestroyedStatus };
}

const player = (function (name) {
  const playerName = name;
  let playerBoard = Gameboard();
  let compBoard = Gameboard();
  placeComputerShips();
  let playerTurn = true;

  playerBoard.placeShip(0, 0, 3);

  function attackComputerBoard(xCoord, yCoord) {
    compBoard.receiveAttack(xCoord, yCoord);
    switchTurn();
    playComputerTurn(playerBoard);
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
    playerBoard.receiveAttack(...generateTwoRandomCoords());
    switchTurn();
  }
  return { attackComputerBoard };
})();

player.attackComputerBoard(0, 0);
player.attackComputerBoard(0, 1);
player.attackComputerBoard(0, 2);

module.exports = { Gameboard };
