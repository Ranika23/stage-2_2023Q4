//creat top-clues container   ВЕРХНИЕ ПОДСКАЗКИ_КОНТЕЙНЕР+ячейки
export function creatTopClues(sizeImage, row) {

  const topClues = document.createElement('div');
  topClues.className = 'top-clues';
  topClues.style.gridTemplateRows = `repeat(${row}, ${100/row}%)`;

  
  const gameBoard = document.querySelector('.game-board');
  gameBoard.append(topClues);
  //left clues cells ЯЧЕЙКИ ЛЕВОЙ ПОДСКАЗКИ
  for (let i = 1; i <= row * sizeImage; i += 1) {
    const cellClues = document.createElement('div');
    cellClues.className = 'cell-clues';
    topClues.prepend(cellClues);
  }
  /*(function addTopClues() {
    const arrTopClues = topClues.children;
    arrTopClues[7].innerText = 1;
    arrTopClues[8].innerText = 1;
    arrTopClues[11].innerText = 5;
    arrTopClues[12].innerText = 1;
    arrTopClues[13].innerText = 2;
  }
  )();*/
}

export function addTopClues(matrixImage) { // включение количества закрашенных ячеек в массив
  console.log(matrixImage)
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
  return [result,max];

}

// заполнение поля подсказками (из массива arrClues)
export function fillTopClues(arrTopClues, row) {
  getSizeCellTop(row);
  const arrClues = document.querySelector('.top-clues').children;
  let cell = 0;
  for (let i = 0; i < arrTopClues[i].length; i += 1) {
    for (let y = 0; y < arrTopClues.length; y += 1) {
      if (arrTopClues[y][i] > 0) arrClues[cell].innerText = arrTopClues[y][i];
      cell += 1;
    }
  }
}
function getSizeCellTop(row) {
  const gameBoard = document.querySelector('.game-board');
  const emptyCorner = document.querySelector('.empty-corner');
  const topClues = document.querySelector('.top-clues');
  const leftClues = document.querySelector('.left-clues');
  const gameField = document.querySelector('.game-field');

  gameBoard.style.height = `${39 + 10 * row}vw`;
  emptyCorner.style.height = `${7 + 10 * row}%`;
  topClues.style.height = `${7 + 10 * row}%`;

  const heightEmptyCorner = emptyCorner.style.height;

  console.log(heightEmptyCorner.slice(0, heightEmptyCorner.length - 1));
  const heightLEftField = `${100 - Number(heightEmptyCorner.slice(0, heightEmptyCorner.length - 1))}%`;
  leftClues.style.height = heightLEftField;
  gameField.style.height = heightLEftField;
}

