import { updateGamePrompt, getShipType, clearDOMElement } from './DOMElements.js'

function placeShipsOnPlayerGameboard(gameboard) {
    let gameboardArr = gameboard.gameboardArr;
    let shipLength = 5;
    updateGamePrompt(`Please place your ${getShipType(shipLength)}`)
    let mainViewSection = document.querySelector('.mainview-section');
    let playerBoardContainer = document.createElement('div');
    playerBoardContainer.classList.add('playerboard-container')
    mainViewSection.appendChild(playerBoardContainer);
    let playerBoard = document.createElement('div');
    playerBoard.classList.add('playerboard')
    playerBoardContainer.appendChild(playerBoard);

    gameboardArr.forEach(gameboardRow => {
        let xCoord = gameboardArr.indexOf(gameboardRow)
        gameboardRow.forEach(rowItem => {
            let yCoord = gameboardRow.indexOf(rowItem)
            const boardItem = document.createElement('div');
            boardItem.classList.add('boardItem');
            playerBoard.appendChild(boardItem)
            boardItem.addEventListener('click', () => {
                if (boardItem.previousElementSibling.classList.contains('containsShip')) return;
                if (shipLength < 1) return;

                if (gameboard.placeShip(xCoord, yCoord, shipLength) === false) return;
                gameboard.placeShip(xCoord, yCoord, shipLength);

                let currentBoardItem = boardItem.previousElementSibling;
                for (let i = 0; i < shipLength; i++) {
                    (currentBoardItem.nextElementSibling).classList.add('containsShip');
                    currentBoardItem = currentBoardItem.nextElementSibling
                }
                shipLength--;
                if (shipLength >= 1) {
                    updateGamePrompt(`Please place your ${getShipType(shipLength)}`)
                } else {
                    updateGamePrompt('')
                    clearDOMElement(mainViewSection)
                }
            })
        })
    })
}



export { placeShipsOnPlayerGameboard };