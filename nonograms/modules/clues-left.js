





//left clues   ЛЕВЫЕ ПОДСКАЗКИ
export function creatLeftClues(sizeImage, column) {
  console.log('creatLeftClues(sizeImage', sizeImage)
  const leftClues = document.createElement('div');
  leftClues.className = 'left-clues';
  leftClues.style.gridTemplateColumns = `repeat(${column}, ${100/column}%)`;
  leftClues.style.gridTemplateRows = `repeat(${sizeImage}, ${100/sizeImage}%)`;
  console.log(`repeat(${sizeImage}, ${100/sizeImage}%)`)
  const gameBoard = document.querySelector('.game-board')
  gameBoard.append(leftClues);
  //left clues cells ЯЧЕЙКИ ЛЕВОЙ ПОДСКАЗКИ
  for (let i = 1; i <= column * sizeImage; i += 1) {
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
  //console.log('result',result, max)
 for (let i = 0; i < result.length; i += 1) {  // матрица для поля левой подсказки
    for (let y = 0; y <= max; y += 1) {
      if (result[i].length < max) result[i].unshift(0);
    }
  }
  //console.log('maxLeft', max)
  return [result,max];
}

// заполнение поля подсказками (из массива arrClues)
export function fillLeftClues(sizeImage, arrClues,column) {

 getSizeCellLeft(sizeImage, column);
  const arrLeftClues = document.querySelector('.left-clues').children;
  for (let i = 0; i < arrClues.length; i += 1) {
    for (let y = 0; y < arrClues[i].length; y += 1) {
      const cell = i * arrClues[i].length + y;
      //console.log(cell)
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
function getSizeCellLeft(sizeImage, column) {
  const gameBoard = document.querySelector('.game-board');
  const emptyCorner = document.querySelector('.empty-corner');
  const topClues = document.querySelector('.top-clues');
  const leftClues = document.querySelector('.left-clues');
  const gameField = document.querySelector('.game-field');

  if(sizeImage === 5) {
    gameBoard.style.width = `${43.5 + 8.5 * column}vw`;
    emptyCorner.style.width = `${sizeImage+ 12 * column}%`;
    leftClues.style.width = `${sizeImage + 12 * column}%`;
  }
  else if(sizeImage === 10) {
    gameBoard.style.width = `${38.5 + 8.5 * column}vw`;
    emptyCorner.style.width = `${sizeImage + 3.5 * column}%`;
    leftClues.style.width = `${sizeImage + 3.5 * column}%`;
  }


  const widthEmptyCorner = emptyCorner.style.width;

  const widthTopClues = `${100 - Number(widthEmptyCorner.slice(0, widthEmptyCorner.length - 1))}%`;
  topClues.style.width = widthTopClues;
  gameField.style.width = widthTopClues;
}

