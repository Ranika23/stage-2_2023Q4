// game board
export function creatGameBoard(bodyContainer) {
  const gameBoard = document.createElement('div');
  gameBoard.className = 'game-board';
  bodyContainer.prepend(gameBoard);
}

// empty corner
export function creatEmptyCorner() {
  const emptyCorner = document.createElement('div');
  emptyCorner.className = 'empty-corner';
  const gameBoard = document.querySelector('.game-board');
  gameBoard.append(emptyCorner);
}