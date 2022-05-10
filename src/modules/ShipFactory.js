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
// module.exports = ShipFactory;
export { ShipFactory };
