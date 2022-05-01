const { Gameboard } = require('./index')
let testBoard = Gameboard();

beforeEach(() => testBoard = Gameboard())

test('hit gameboard', () => {;
    testBoard.receiveAttack(4, 6);
    expect(testBoard.gameboardArr[4][5].isHit).toBe(false);
    expect(testBoard.gameboardArr[4][6].isHit).toBe(true);
    expect(testBoard.gameboardArr[4][7].isHit).toBe(false);
})

test('place and hit ship on gameboard', () => {
    testBoard.placeShip(0, 0, 3)
    testBoard.receiveAttack(0, 0)
    expect(testBoard.gameboardArr[0][0].isHit).toBe(true);

})
test('place ship on gameboard legal moves', () => {
    expect(testBoard.placeShip(0, 9, 2)).toBe(false);
    expect(testBoard.placeShip(0, 9, 1)).toBe(true);
    expect(testBoard.placeShip(9, 9, 2)).toBe(false);
    expect(testBoard.placeShip(9, 8, 2)).toBe(true);
    expect(testBoard.placeShip(-1, 9, 1)).toBe(false);
    expect(testBoard.placeShip(1, -9, 1)).toBe(false);
    expect(testBoard.placeShip(1, 9, -1)).toBe(false);
})

test('destroy ship', () => {
    testBoard.placeShip(0, 0, 3);
    testBoard.receiveAttack(0, 0);
    testBoard.receiveAttack(0, 1);
    testBoard.receiveAttack(0, 2);
    expect(testBoard.gameboardArr[0][0].isHit).toBe(true);
    expect(testBoard.gameboardArr[0][1].isHit).toBe(true);
    expect(testBoard.gameboardArr[0][2].isHit).toBe(true);
    expect(testBoard.gameboardArr[0][0].sinkStatus).toBe(true);
    expect(testBoard.gameboardArr[0][1].sinkStatus).toBe(true);
    expect(testBoard.gameboardArr[0][2].sinkStatus).toBe(true);
})

test('destroyed all ships', () => {
    testBoard.placeShip(0, 0, 3);
    testBoard.placeShip(2, 0, 3);
    testBoard.receiveAttack(0, 0);
    testBoard.receiveAttack(0, 1);
    testBoard.receiveAttack(0, 2);
    testBoard.receiveAttack(2, 0);
    testBoard.receiveAttack(2, 1);
    testBoard.receiveAttack(2, 2);
    testBoard.receiveAttack(2, 3);
    testBoard.receiveAttack(3, 3);
    expect(testBoard.reportShipsDestroyedStatus()).toBe(true);
})