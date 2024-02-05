//left clues   ЛЕВЫЕ ПОДСКАЗКИ
export function creatLeftClues(sizeImage, column) {
  const leftClues = document.createElement('div');
  leftClues.className = 'left-clues';
  leftClues.style.gridTemplateColumns = `repeat(${column}, ${100 / column}%)`;
  leftClues.style.gridTemplateRows = `repeat(${sizeImage}, ${100 / sizeImage}%)`;
  const gameBoard = document.querySelector('.game-board')
  gameBoard.append(leftClues);
  //left clues cells ЯЧЕЙКИ ЛЕВОЙ ПОДСКАЗКИ
  for (let i = 1; i <= column * sizeImage; i += 1) {
    const cellClues = document.createElement('div');
    cellClues.className = 'cell-clues';
    leftClues.prepend(cellClues);
  }
}
export function addLeftClues(matrixImage) { // включение количества закрашенных ячеек в массив
  const result = [];
  let max = 0;
  for (let i = 0; i < matrixImage.length; i += 1) {
    let countLine = 0;
    const arrLine = [];

    for (let y = 0; y < matrixImage[i].length; y += 1) {
      if (matrixImage[i].indexOf(1) === -1) {
        arrLine.push(0);
        break;
      } else if (matrixImage[i].indexOf(0) === -1) {
        arrLine.push(matrixImage[i].length);
        break;
      } else if (matrixImage[i][y] === 1) {
        countLine += 1;
        if (y === matrixImage[i].length - 1) {
          arrLine.push(countLine);
          if (arrLine.length > max) max = arrLine.length;
        }
      } else if (matrixImage[i][y] === 0 && countLine > 0) {
        arrLine.push(countLine);
        if (arrLine.length > max) max = arrLine.length;
        countLine = 0;
      }

    }

    result.push(arrLine)


  }
  for (let i = 0; i < result.length; i += 1) {  // матрица для поля левой подсказки
    for (let y = 0; y <= max; y += 1) {
      if (result[i].length < max) result[i].unshift(0);
    }
  }
  return [result, max];
}

// заполнение поля подсказками (из массива arrClues)
export function fillLeftClues(sizeImage, arrClues) {

  //getSizeCellLeft(sizeImage, column);
  const arrLeftClues = document.querySelector('.left-clues').children;
  for (let i = 0; i < arrClues.length; i += 1) {
    for (let y = 0; y < arrClues[i].length; y += 1) {
      const cell = i * arrClues[i].length + y;
      if (arrClues[i][y] > 0) arrLeftClues[cell].innerText = arrClues[i][y];
      else arrLeftClues[cell].style.opacity = '0.4';
    }
  }
}
export function getSizeCellLeft(sizeImage, column) {
  const emptyCorner = document.querySelector('.empty-corner');
  const topClues = document.querySelector('.top-clues');
  const leftClues = document.querySelector('.left-clues');
  const gameField = document.querySelector('.game-field');


  if (sizeImage === 5) {
    const widthCell = 100 / (5 + column);
    emptyCorner.style.width = `${widthCell * column}%`;
    leftClues.style.width = `${widthCell * column}%`;
  }
  else if (sizeImage === 10) {
    const widthCell = 100 / (10 + column);
    emptyCorner.style.width = `${widthCell * column}%`;
    leftClues.style.width = `${widthCell * column}%`;
  }
  else if (sizeImage === 15) {
    const widthCell = 100 / (15 + column);
    emptyCorner.style.width = `${widthCell * column}%`;
    leftClues.style.width = `${widthCell * column}%`;
  }


  const widthEmptyCorner = emptyCorner.style.width;
  const widthTopClues = `${100 - Number(widthEmptyCorner.slice(0, widthEmptyCorner.length - 1))}%`;
  topClues.style.width = widthTopClues;
  gameField.style.width = widthTopClues;
}



