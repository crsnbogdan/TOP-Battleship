function updateGamePrompt(message, target, returnPrompt) {
  let prompt = target.querySelector(".gameprompt");
  prompt.textContent = String(message);
  if (returnPrompt) {
    return prompt.textContent;
  }
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
  }
  return shipType;
}

function clearDOMElement(targetElement) {
  targetElement.textContent = "";
}

export { updateGamePrompt, getShipType, clearDOMElement };

/*
module.exports = {
    updateGamePrompt: updateGamePrompt,
    getShipType: getShipType,
}
*/
