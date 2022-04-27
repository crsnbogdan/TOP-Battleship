const { Gameboard } = require('./index')
let testBoard = Gameboard();


test('place ship on gameboard', () => {
    expect(testBoard.placeShip(0, 9, 2)).toBe(false);
    expect(testBoard.placeShip(0, 9, 1)).toBe(true);
    expect(testBoard.placeShip(9, 9, 2)).toBe(false);
    expect(testBoard.placeShip(9, 8, 2)).toBe(true);
    expect(testBoard.placeShip(-1, 9, -1)).toBe(false);
    expect(testBoard.placeShip(1, -9, -1)).toBe(false);
    expect(testBoard.placeShip(1, 9, -1)).toBe(false);
})

test('hit ship', () => {
    testBoard.placeShip(0, 0, 2);
    testBoard.gameboardArr[0][0].hitShip();
    expect(testBoard.gameboardArr[0][0].isHit).toBe(true);
})

test('destroy ship', () => {
    testBoard.placeShip(0, 0, 3);
    testBoard.receiveAttack(0, 0);
    testBoard.receiveAttack(0, 1);
    testBoard.receiveAttack(0, 2);
    expect(testBoard.gameboardArr[0][0].isHit).toBe(true);
    expect(testBoard.gameboardArr[0][1].isHit).toBe(true);
    expect(testBoard.gameboardArr[0][2].isHit).toBe(true);
    expect(testBoard.gameboardArr[0][0].sunkStatus).toBe(true);
})

test('hit gameboard', () => {;
    testBoard.receiveAttack(4, 6);
    expect(testBoard.gameboardArr[4][6].isHit).toBe(true);

})