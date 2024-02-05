//creat top-clues container   ВЕРХНИЕ ПОДСКАЗКИ_КОНТЕЙНЕР+ячейки
export function creatTopClues(sizeImage, row) {
  const topClues = document.createElement('div');
  topClues.className = 'top-clues';
  topClues.style.gridTemplateRows = `repeat(${row}, ${100 / row}%)`;
  topClues.style.gridTemplateColumns = `repeat(${sizeImage}, ${100 / sizeImage}%)`


  const gameBoard = document.querySelector('.game-board');
  gameBoard.append(topClues);
  //left clues cells ЯЧЕЙКИ ЛЕВОЙ ПОДСКАЗКИ
  for (let i = 1; i <= row * sizeImage; i += 1) {
    const cellClues = document.createElement('div');
    cellClues.className = 'cell-clues';
    topClues.prepend(cellClues);
  }
}

export function addTopClues(matrixImage) { // включение количества закрашенных ячеек в массив
  const result = [];
  let max = 0;
  for (let i = 0; i < matrixImage.length; i += 1) {
    let countLine = 0;
    const arrLine = [];
    let arrEmpty = 0;

    for (let y = 0; y < matrixImage.length; y += 1) {
      if (matrixImage[y][i] === 1) {
        countLine += 1;
      }
      if (countLine > 0 && y === matrixImage.length - 1) {
        arrLine.push(countLine);
        countLine = 0;
      } else if (matrixImage[y][i] === 0 && countLine > 0) {

        arrLine.push(countLine);
        countLine = 0;
      } else if (matrixImage[y][i] === 0 && countLine === 0) {
        arrEmpty += 1;
      }

    }
    if (arrLine.length > max) max = arrLine.length;
    if (arrEmpty === matrixImage.length) {
      result.push([0]);
    } else {
      result.push(arrLine)
    }
  }
  for (let i = 0; i < result.length; i += 1) {  // матрица для поля верхней подсказки
    for (let y = 0; y < max + 1; y += 1) {
      if (result[i].length < max) result[i].unshift(0);
    }
  }
  return [result, max];

}

// заполнение поля подсказками (из массива arrClues)
export function fillTopClues(sizeImage, arrTopClues) {
  const arrClues = document.querySelector('.top-clues').children;
  let cell = 0;
  for (let i = 0; i < arrTopClues[i].length; i += 1) {
    for (let y = 0; y < arrTopClues.length; y += 1) {
      if (arrTopClues[y][i] > 0) arrClues[cell].innerText = arrTopClues[y][i];
      else arrClues[cell].style.opacity = '0.4';
      cell += 1;
    }
  }
}
export function getSizeCellTop(sizeImage, row) {
  const emptyCorner = document.querySelector('.empty-corner');
  const topClues = document.querySelector('.top-clues');
  const leftClues = document.querySelector('.left-clues');
  const gameField = document.querySelector('.game-field');

  if (sizeImage === 5) {
    const heigthCell = 100 / (5 + row);
    emptyCorner.style.height = `${heigthCell * row}%`;
    topClues.style.height = `${heigthCell * row}%`;

  }
  else if (sizeImage === 10) {
    const heigthCell = 100 / (10 + row);
    emptyCorner.style.height = `${heigthCell * row}%`;
    topClues.style.height = `${heigthCell * row}%`;
  }
  else if (sizeImage === 15) {
    const heigthCell = 100 / (15 + row);
    emptyCorner.style.height = `${heigthCell * row}%`;
    topClues.style.height = `${heigthCell * row}%`;
  }

  const heightEmptyCorner = emptyCorner.style.height;

  const heightLeftField = `${100 - Number(heightEmptyCorner.slice(0, heightEmptyCorner.length - 1))}%`;
  leftClues.style.height = heightLeftField;
  gameField.style.height = heightLeftField;
}


