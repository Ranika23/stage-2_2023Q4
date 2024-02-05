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
  const gameBoard = document.querySelector('.game-board-container');


  if (sizeImage === 5 && widthBody <= 600) {
    gameBoard.style.width = `${8 * (column + 5)}vmin`;
    gameBoard.style.height = `${8 * (row + 5)}vmin`;
  } else if (sizeImage === 10 && widthBody <= 500) {
    gameBoard.style.width = `${7 * (column + 10)}vmin`;
    gameBoard.style.height = `${7 * (row + 10)}vmin`;
  } else if (sizeImage === 15 && widthBody <= 500) {
    gameBoard.style.width = `${4.2 * (column + 15)}vmin`;
    gameBoard.style.height = `${4.2 * (row + 15)}vmin`;
  }

  if (sizeImage === 5 && widthBody > 600) {
    gameBoard.style.width = `${46 * (column + 5)}px`;
    gameBoard.style.height = `${46 * (row + 5)}px`;
  } else if (sizeImage === 10 && widthBody > 500) {
    gameBoard.style.width = `${35 * (column + 10)}px`;
    gameBoard.style.height = `${35 * (row + 10)}px`;
  } else if (sizeImage === 15 && widthBody > 500) {
    gameBoard.style.width = `${22 * (column + 15)}px`;
    gameBoard.style.height = `${22 * (row + 15)}px`;
  }


  const solutionButton = document.querySelector('.solution-button');
  const resetButton = document.querySelector('.menu-window__reset');
  const widthBoard = document.querySelector('.game-board-container').clientWidth;
  solutionButton.style.left = `${(widthBody - widthBoard) / 2 + widthBoard - solutionButton.clientWidth}px`;
  resetButton.style.left = `${(widthBody - widthBoard) / 2}px`;
}
