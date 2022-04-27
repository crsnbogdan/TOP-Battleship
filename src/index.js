function ShipFactory(shipLength) {
    let ship = [];
    for (let i = 0; i < shipLength; i++) {
        ship.push([]);
    }

    ship.forEach((shipPiece) => {
        shipPiece.containsShip = true;
        shipPiece.isHit = false;
        shipPiece.shipType = `${shipLength}`;
        shipPiece.sunkStatus = false;

        shipPiece.hitShip = function() {
            if (this.containsShip === false || this.sinkStatus === true) return;
            this.isHit = true;
        };
    });
    return ship;
}

function Gameboard() {
    let gameboardArr = [
        [
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            []
        ],
        [
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            []
        ],
        [
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            []
        ],
        [
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            []
        ],
        [
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            []
        ],
        [
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            []
        ],
        [
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            []
        ],
        [
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            []
        ],
        [
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            []
        ],
        [
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            []
        ],
    ];
    gameboardArr.forEach((gameBoardRow) => {
        gameBoardRow.forEach((gameBoardItem) => {
            (gameBoardItem.containsShip = false), (gameBoardItem.isHit = false);
        });
    });

    function placeShip(xCoord, yCoord, shipLength) {
        if (xCoord >= 10 || xCoord < 0 || yCoord < 0 || shipLength < 0) {
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
            boardRow.forEach((boardPiece) => {
                if (boardPiece.shipType === shipType) {
                    boardRowIndex = gameboardArr.indexOf(boardRow);
                    shipPieceIndexes += boardRow.indexOf(boardPiece);
                }
            });
        }
        let shipInfo = [boardRowIndex, shipPieceIndexes];
        return shipInfo;
    }

    function updateShipSunkStatus(shipInfo) {
        let shipHitCounter = 0;
        let shipSunkStatus = false;
        for (let i = 0; i < shipInfo[1].length; i++) {
            if (gameboardArr[shipInfo[0]][shipInfo[1][i]].isHit === true) {
                shipHitCounter++;
            }
        }
        if (shipHitCounter === shipInfo[1].length) {
            shipSunkStatus = true;
            for (let i = 0; i < shipInfo[1].length; i++) {
                gameboardArr[shipInfo[0]][shipInfo[1][i]].sunkStatus = true;
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
        updateShipSunkStatus(getShipOfType(currentShipType));
    }

    return { gameboardArr, placeShip, receiveAttack };
}

module.exports = { Gameboard };