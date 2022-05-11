const DOMModule = require("../modules/HelperFunctions");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
let dom = new JSDOM(``);
global.document = dom.window.document;
global.window = dom.window;

test("display correct ship name", () => {
  expect(DOMModule.getShipType(5)).toBe("Carrier");
  expect(DOMModule.getShipType(4)).toBe("Battleship");
  expect(DOMModule.getShipType(3)).toBe("Cruiser");
  expect(DOMModule.getShipType(2)).toBe("Submarine");
});

test("update game prompt text", () => {
  dom = new JSDOM(`<!DOCTYPE html><p class="gameprompt">first message</p>`);
  expect(
    DOMModule.updateGamePrompt("third message", dom.window.document, true)
  ).toBe("third message");
  expect(
    DOMModule.updateGamePrompt("second message", dom.window.document, true)
  ).toBe("second message");
  // if a test fails containing the message 'TypeError: Cannot read properties of undefined (reading 'querySelector')'
  // it can be ignored as it's due to the test environment
});
