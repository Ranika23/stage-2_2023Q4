//top clues   ВЕРХНИЕ ПОДСКАЗКИ
export function creatTopClues(sizeImage) {

  const topClues = document.createElement('div');
  topClues.className = 'top-clues';
  const gameBoard = document.querySelector('.game-board');
  gameBoard.append(topClues);
  //left clues cells ЯЧЕЙКИ ЛЕВОЙ ПОДСКАЗКИ
  for (let i = 1; i <= 3 * sizeImage; i += 1) {
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
      if (result[i].length <= max) result[i].unshift(0);
    }
  }
  return result;

}

// заполнение поля подсказками (из массива arrClues)
export function fillTopClues(arrTopClues) {
  const arrClues = document.querySelector('.top-clues').children;
  let cell = 0;
  for (let i = 0; i < arrTopClues[i].length; i += 1) {
    for (let y = 0; y < arrTopClues.length; y += 1) {
      if (arrTopClues[y][i] > 0) arrClues[cell].innerText = arrTopClues[y][i];
      cell += 1;
    }
  }
}

































//left clues   ЛЕВЫЕ ПОДСКАЗКИ
export function creatLeftClues(sizeImage) {
  const leftClues = document.createElement('div');
  leftClues.className = 'left-clues';
  const gameBoard = document.querySelector('.game-board')
  gameBoard.append(leftClues);
  //left clues cells ЯЧЕЙКИ ЛЕВОЙ ПОДСКАЗКИ
  for (let i = 1; i <= 3 * sizeImage; i += 1) {
    const cellClues = document.createElement('div');
    cellClues.className = 'cell-clues';
    leftClues.prepend(cellClues);
  }
  /*(function addLeftClues() {
    const arrLeftClues = leftClues.children;
    arrLeftClues[2].innerText = 2;
    arrLeftClues[4].innerText = 1;
    arrLeftClues[5].innerText = 1;
    arrLeftClues[8].innerText = 2;
    arrLeftClues[10].innerText = 1;
    arrLeftClues[11].innerText = 1;
    arrLeftClues[13].innerText = 1;
    arrLeftClues[14].innerText = 1;  
  }
)();*/
}
export function addLeftClues(matrixImage) { // включение количества закрашенных ячеек в массив
  const result = [];
  let max = 0;
  for (let i = 0; i < matrixImage.length; i += 1) {
    let countLine = 0;
    const arrLine = [];

    for (let y = 0; y < matrixImage.length; y += 1) {
      if (matrixImage[i][y] === 1) {
        countLine += 1;
      } else if (matrixImage[i][y] === 0 && countLine > 0) {

        arrLine.push(countLine);
        if (countLine > max) max = countLine;
        countLine = 0;
      }
    }
    result.push(arrLine)
  }
  for (let i = 0; i < result.length; i += 1) {  // матрица для поля левой подсказки
    for (let y = 0; y < max + 1; y += 1) {
      if (result[i].length <= max) result[i].unshift(0);
    }
  }
  return result;
}

// заполнение поля подсказками (из массива arrClues)
export function fillLeftClues(arrClues) {
  const arrLeftClues = document.querySelector('.left-clues').children;
  for (let i = 0; i < arrClues.length; i += 1) {
    for (let y = 0; y < arrClues[i].length; y += 1) {
      const cell = i * arrClues[i].length + y;
      if (arrClues[i][y] > 0) arrLeftClues[cell].innerText = arrClues[i][y];
    }
  }
  /*arrLeftClues[2].innerText = 2;
  arrLeftClues[4].innerText = 1;
  arrLeftClues[5].innerText = 1;
  arrLeftClues[8].innerText = 2;
  arrLeftClues[10].innerText = 1;
  arrLeftClues[11].innerText = 1;
  arrLeftClues[13].innerText = 1;
  arrLeftClues[14].innerText = 1; */
}

