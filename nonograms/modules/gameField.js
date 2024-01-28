//size field
export const sizeImage = 5;

//game field
export function creatGameField() {
  const gameField = document.createElement('div');
  gameField.className = 'game-field';
  const gameBoard = document.querySelector('.game-board');
  gameBoard.append(gameField);
}


//field cells
export function creatCellField(sizeImage) {
  for (let i = 1; i <= sizeImage ** 2; i += 1) {
    const cellField = document.createElement('div');
    cellField.className = 'cell-field';
    const gameField = document.querySelector('.game-field');
    gameField.prepend(cellField)
  }
}

export function getMatrixField(sizeImage) {
// matrix МАТРИЦА ПУСТАЯ: ОСНОВА ДЛЯ ИГРОВОГО ПОЛЯ
const arr = new Array(sizeImage).fill(0);
const matrix = [];
arr.forEach(() => matrix.push(arr))

// matrix image МАТРИЦА ЧИСЛОВАЯ 1 === 1 ЧЕРНЫЙ ПИКСЕЛЬ 
const matrixImage = [];
for (let i = 0; i < matrix.length; i += 1) {
  const elemMatr = [];
  for (let y = 0; y < matrix[i].length; y += 1) {
    
    if (i === 0 && y === 1 || i === 0 && y === 2) {
      elemMatr.push(1);
    }
    else if ((i === 1 && y === 1) || (i === 1 && y === 3)) {
      elemMatr.push(1);
    }
    else if ((i === 2 && y === 1) || (i === 2 && y === 2)) {
      elemMatr.push(1);
    }
    else if ((i === 3 && y === 1) || (i === 3 && y === 3)) {
      elemMatr.push(1);
    }
    else if ((i === 4 && y === 1) || (i === 4 && y === 3)) {
      elemMatr.push(1);
    } else {
      elemMatr.push(0);
    }
  }
  matrixImage.push(elemMatr);

}
return matrixImage;
}
