let ShipFactory = require("../modules/ShipFactory");

let testShip = ShipFactory();

test("test if ship is created correctly", () => {
  let shipLength = 5;
  testShip = ShipFactory(shipLength);
  expect(testShip.length).toEqual(shipLength);
  expect(Object.keys(testShip[0])).toContain("containsShip");
  expect(Object.keys(testShip[0])).toContain("isHit");
  expect(Object.keys(testShip[0])).toContain("shipType");
  expect(Object.keys(testShip[0])).toContain("sinkStatus");
  expect(Object.keys(testShip[0])).toContain("hitShip");
});
test("ship methods and properties work as intended", () => {
  let shipLength = 3;
  testShip = ShipFactory(shipLength);
  expect(testShip[0].containsShip).toBe(true);
  expect(testShip[0].isHit).toBe(false);
  testShip[0].hitShip();
  expect(testShip[0].isHit).toBe(true);
  testShip[1].hitShip();
  expect(testShip[1].isHit).toBe(true);
  testShip[2].hitShip();
  expect(testShip[2].isHit).toBe(true);
  expect(testShip[0].shipType).toEqual(`${shipLength}`);
});
