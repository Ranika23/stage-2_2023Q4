export function countClickCell(gameField) { // count click cells
  const arrayGameField = gameField.children;
  let count = 0;
  for (let i = 0; i < arrayGameField.length; i += 1) {
    const cell = arrayGameField[i];
    if (cell.classList.contains('left-click')) {
      count += 1;
    }
  }
  return count;
}

export function countFillCells(topClues) { // count fill cells images
  const arrTopClues = topClues.children;
  let countFillCells = 0;
  for (let i = 0; i < arrTopClues.length; i += 1) {
    const contentCell = Number(arrTopClues[i].innerText)
    countFillCells += contentCell;
  }
  return countFillCells;
}

export function getResultGame(gameField, matrixImage, sizeImage) { // get result game
  const arrayGameField = gameField.children;
  let flag = true;
  for (let i = 0; i < matrixImage.length; i += 1) {
    for (let y = 0; y < matrixImage[i].length; y += 1) {
      const cell = sizeImage * i + y;
      const getResult = arrayGameField[cell].classList.contains('left-click');
      if (matrixImage[i][y] === 1 && !getResult) {
        flag = false;
      }
    }
  }
  return flag; //if true ===> WIN
}