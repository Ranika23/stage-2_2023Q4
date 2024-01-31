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