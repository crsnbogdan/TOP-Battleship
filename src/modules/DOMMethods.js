function updateGamePrompt(message) {
  let prompt = document.querySelector(".gameprompt");
  prompt.textContent = message;
}

function getShipType(shipLength) {
  let shipType;
  switch (shipLength) {
    case 5:
      shipType = "Carrier";
      break;
    case 4:
      shipType = "Battleship";
      break;
    case 3:
      shipType = "Cruiser";
      break;
    case 2:
      shipType = "Submarine";
      break;
    case 1:
      shipType = "Destroyer";
      break;
  }
  return shipType;
}

function clearDOMElement(targetElement) {
  targetElement.textContent = "";
}
export { updateGamePrompt, getShipType, clearDOMElement };
