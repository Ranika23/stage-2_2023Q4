//game field
export function creatGameField(sizeImage) {
  const gameField = document.createElement('div');
  gameField.className = 'game-field';
  const gameBoard = document.querySelector('.game-board');
  gameBoard.append(gameField);


  creatCellField(sizeImage);
}

//creat field cells
function creatCellField(sizeImage) {
  for (let i = 1; i <= sizeImage ** 2; i += 1) {
    const cellField = document.createElement('div');
    cellField.className = 'cell-field';
    const gameField = document.querySelector('.game-field');

    gameField.prepend(cellField);
    gameField.style.gridTemplateColumns = `repeat(${sizeImage}, ${100/sizeImage}%)`;
    gameField.style.gridTemplateRows = `repeat(${sizeImage}, ${100/sizeImage}%)`;

  }
}


// matrix МАТРИЦА ПУСТАЯ: ОСНОВА ДЛЯ ИГРОВОГО ПОЛЯ
export function getFillMatrixField(sizeImage, numberImg) {
  console.log('sizeImage', sizeImage)
const arr = new Array(sizeImage).fill(0);
const matrix = [];
arr.forEach(() => matrix.push(arr));
console.log('matrix', matrix)
let matrixImage;
if (sizeImage === 5) {
  if (numberImg === '1') {
    //console.log(numberImg)
    matrixImage = getEasyImg_1(matrix);
  }
  if (numberImg === '2') {
    //console.log(numberImg)
    matrixImage = getEasyImg_2(matrix);
  }
  if (numberImg === '3') {
    //console.log(numberImg)
    matrixImage = getEasyImg_3(matrix);
  }
  if (numberImg === '4') {
    //console.log(numberImg)
    matrixImage = getEasyImg_4(matrix);
  }
  if (numberImg === '5') {
    //console.log(numberImg)
    matrixImage = getEasyImg_5(matrix);
  }
}

if (sizeImage === 10) {
  if (numberImg === '1') {
    //console.log(numberImg)
    matrixImage = getMiddleImg_1(matrix);
  }
}


return matrixImage;
}


// matrix image МАТРИЦА ЧИСЛОВАЯ 1 === 1 ЧЕРНЫЙ ПИКСЕЛЬ 
function getEasyImg_1(matrix) { // First image 5x5
const matrixImage = [];
for (let i = 0; i < matrix.length; i += 1) {
  const elemMatr = [];
  for (let y = 0; y < matrix[i].length; y += 1) {
    
    if (i === 0 && (y === 0 || y === 2 || y === 4)) {
      elemMatr.push(1);
    }
    else if (i === 1) {
      elemMatr.push(1);
    }
    else if (i === 2 && (y === 1 || y === 2 || y === 3)) {
      elemMatr.push(1);
    }
    else if (i === 3 && (y === 1 || y === 3)) {
      elemMatr.push(1);
    }
    else if (i === 4 && (y === 1 || y === 2 || y === 3)) {
      elemMatr.push(1);
    } else {
      elemMatr.push(0);
    }
  }
  matrixImage.push(elemMatr);
}
  return matrixImage;
}
function getEasyImg_2(matrix) { // Two image 5x5
  const matrixImage = [];
  for (let i = 0; i < matrix.length; i += 1) {
    const elemMatr = [];
    for (let y = 0; y < matrix[i].length; y += 1) {
      
      if (i === 0) {
        elemMatr.push(1);
      }
      else if (i === 1 && y === 0) {
        elemMatr.push(1);
      }
      else if (i === 2) {
        elemMatr.push(1);
      }
      else if (i === 3 && y === 4) {
        elemMatr.push(1);
      }
      else if (i === 4) {
        elemMatr.push(1);
      } else {
        elemMatr.push(0);
      }
    }
    matrixImage.push(elemMatr);
  }
    return matrixImage;
}
function getEasyImg_3(matrix) { // Three image 5x5
  const matrixImage = [];
  for (let i = 0; i < matrix.length; i += 1) {
    const elemMatr = [];
    for (let y = 0; y < matrix[i].length; y += 1) {
      
      if (i === 0) {
        elemMatr.push(1);
      }
      else if (i === 1 && (y === 0 ||  y === 2 || y === 4)) {
        elemMatr.push(1);
      }
      else if (i === 2) {
        elemMatr.push(1);
      }
      else if (i === 3 && y === 0) {
        elemMatr.push(1);
      }
      else if (i === 4 && y === 0) {
        elemMatr.push(1);
      } else {
        elemMatr.push(0);
      }
    }
    matrixImage.push(elemMatr);
  }
    return matrixImage;
}
function getEasyImg_4(matrix) { // Four image 5x5
  const matrixImage = [];
  for (let i = 0; i < matrix.length; i += 1) {
    const elemMatr = [];
    for (let y = 0; y < matrix[i].length; y += 1) {
      
      if (i === 0 && (y === 0 || y === 3 || y === 4)) {
        elemMatr.push(1);
      }
      else if (i === 1 && (y === 0 ||  y === 1 || y === 2 || y === 3)) {
        elemMatr.push(1);
      }
      else if (i === 2 && (y === 1 ||  y === 3)) {
        elemMatr.push(1);
      }
      else if (i === 3 && (y === 1 ||  y === 2 || y === 3 || y === 4)) {
        elemMatr.push(1);
      }
      else if (i === 4 && (y === 0 ||  y === 1 || y === 4)) {
        elemMatr.push(1);
      } else {
        elemMatr.push(0);
      }
    }
    matrixImage.push(elemMatr);
  }
    return matrixImage;
}
function getEasyImg_5(matrix) { // Five image 5x5
  const matrixImage = [];
  for (let i = 0; i < matrix.length; i += 1) {
    const elemMatr = [];
    for (let y = 0; y < matrix[i].length; y += 1) {
      
      if (i === 0 && (y === 1 || y === 2)) {
        elemMatr.push(1);
      }
      else if (i === 1 && y === 2) {
        elemMatr.push(1);
      }
      else if (i === 2) {
        elemMatr.push(1);
      }
      else if (i === 3 && (y === 0 ||  y === 2 || y === 4)) {
        elemMatr.push(1);
      }
      else if (i === 4 && (y === 0 ||  y === 1 || y === 2)) {
        elemMatr.push(1);
      } else {
        elemMatr.push(0);
      }
    }
    matrixImage.push(elemMatr);
  }
    return matrixImage;
}



function getMiddleImg_1(matrix) { // First image 5x5
  const matrixImage = [];
  for (let i = 0; i < matrix.length; i += 1) {
    const elemMatr = [];
    for (let y = 0; y < matrix[i].length; y += 1) {
      
      if (i === 0 && (y === 2 || y === 3 || y === 4 || y === 5 || y === 6 || y === 7)) {
        elemMatr.push(1);
      }
      else if (i === 1 && (y === 1 || y === 2 || y === 7 || y === 8)) {
        elemMatr.push(1);
      }
      else if (i === 2 && (y === 1 || y === 2 || y === 7 || y === 8)) {
        elemMatr.push(1);
      }
      else if (i === 3 && (y === 7 || y === 8)) {
        elemMatr.push(1);
      }
      else if (i === 4 && (y === 6 || y === 7 || y === 8)) {
        elemMatr.push(1);
      } 
      else if (i === 5 && (y === 4 || y === 5 || y === 6 || y === 7)) {
        elemMatr.push(1)
      }
      else if (i === 6 && (y === 4 || y === 5)) {
        elemMatr.push(1)
      }
      else if (i === 8 && (y === 4 || y === 5)) {
        elemMatr.push(1)
      }
      else if (i === 9 && (y === 4 || y === 5)) {
        elemMatr.push(1)
      }else {
        elemMatr.push(0);
      }
    }
    matrixImage.push(elemMatr);
  }
    return matrixImage;
  }