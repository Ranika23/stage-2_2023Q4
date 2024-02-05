// click right mouse button (black cell)
export function clickLeftMouse(event) {
  const cell = event.target;
  if (cell.classList.contains('right-click')) cell.classList.remove('right-click');
  cell.classList.toggle('left-click');
}


// click right mouse button (black cell)
export function clickRigthMouse(event) {
  event.preventDefault();
  const cell = event.target;
  if (cell.classList.contains('left-click')) cell.classList.remove('left-click');
  cell.classList.toggle('right-click');
}

export function cleanCellField() {
  const arrGameField = document.querySelector('.game-field').children;
  for (let i = 0; i < arrGameField.length; i += 1) {
    if (arrGameField[i].classList.contains('left-click')) arrGameField[i].classList.remove('left-click');
    if (arrGameField[i].classList.contains('right-click')) arrGameField[i].classList.remove('right-click');
  }
}

export function cleanBoard() {
  if (document.querySelector('.game-board-container') !== null) document.querySelector('.game-board-container').remove();
}

export function getSolution(gameField, matrixImage, sizeImage) {
  const arrayGameField = gameField.children;
  for (let i = 0; i < matrixImage.length; i += 1) {
    for (let y = 0; y < matrixImage[i].length; y += 1) {
      const cell = sizeImage * i + y;
      if (matrixImage[i][y] === 1) {
        arrayGameField[cell].classList.add('left-click');
      }
    }
  }
  document.querySelector('.menu-window__save').disabled = true;
}