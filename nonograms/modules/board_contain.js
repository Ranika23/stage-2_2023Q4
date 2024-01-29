// game board
export function creatGameBoard(bodyContainer) {
  const gameBoard = document.createElement('div');
  gameBoard.className = 'game-board';
  bodyContainer.prepend(gameBoard);

  creatEmptyCorner(gameBoard);  // empty corner
}

// empty left-top corner
function creatEmptyCorner(gameBoard) {
  const emptyCorner = document.createElement('div');
  emptyCorner.className = 'empty-corner';
  gameBoard.append(emptyCorner);
}