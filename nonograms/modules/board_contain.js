// game board
export function creatGameBoard(bodyContainer) {
  const gameBoardContainer = document.createElement('div');
  gameBoardContainer.className = 'game-board-container'; 

  const gameBoard = document.createElement('div');
  gameBoard.className = 'game-board';

  gameBoardContainer.prepend(gameBoard);
  bodyContainer.prepend(gameBoardContainer);


  creatEmptyCorner(gameBoard);  // empty corner
}

// empty left-top corner
function creatEmptyCorner(gameBoard) {
  const emptyCorner = document.createElement('div');
  emptyCorner.className = 'empty-corner';
  gameBoard.append(emptyCorner);
}

export function getWidthHeightBoard(widthBody, sizeImage, column, row) {
 
  console.log(widthBody, sizeImage, column, row)
  const gameBoard = document.querySelector('.game-board-container');


    if(sizeImage === 5 && widthBody <= 600) {
      gameBoard.style.width = `${6 * (column + 5)}vmin`;
      gameBoard.style.height = `${6 * (row + 5)}vmin`;
    } else if(sizeImage === 10 && widthBody <= 500) {
      gameBoard.style.width = `${4.5 * (column + 10)}vmin`;
      gameBoard.style.height = `${4.5 * (row + 10)}vmin`;
    } else if(sizeImage === 15 && widthBody <= 500) {
      gameBoard.style.width = `${3.5 * (column + 15)}vmin`;
      gameBoard.style.height = `${3.5 * (row + 15)}vmin`;
    }

    if(sizeImage === 5 && widthBody > 600) {
      gameBoard.style.width = `${40 * (column + 5)}px`;
      gameBoard.style.height = `${40 * (row + 5)}px`;
    } else if(sizeImage === 10 && widthBody > 500) {
      gameBoard.style.width = `${23 * (column + 10)}px`;
      gameBoard.style.height = `${23 * (row + 10)}px`;
    } else if(sizeImage === 15 && widthBody > 500) {
      gameBoard.style.width = `${17 * (column + 15)}px`;
      gameBoard.style.height = `${17 * (row + 15)}px`;
    }

    
    const solutionButton = document.querySelector('.solution-button');
    const widthBoard = document.querySelector('.game-board-container').clientWidth;
    solutionButton.style.left = `${(widthBody - widthBoard) / 2 + widthBoard - solutionButton.clientWidth}px`;
}
  