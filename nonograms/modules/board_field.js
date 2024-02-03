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

export function addLineField(sizeImage, columns, rows) {
  const gameBoard = document.querySelector('.game-board');

  const verticlBorder = document.createElement('div');
  verticlBorder.className = 'verticl-border';
  const horizBorder = document.createElement('div');
  horizBorder.className = 'horiz-border';

  const verticlLine = document.createElement('div');
  verticlLine.className = 'verticl-line';
  const horizLine = document.createElement('div');
  horizLine.className = 'horiz-line';

  const verticlLine_2 = document.createElement('div');
  verticlLine_2.className = 'verticl-line-2';
  const horizLine_2 = document.createElement('div');
  horizLine_2.className = 'horiz-line-2';

  if (sizeImage === 5) {

    const widthCell = 100 / (5 + columns);
    verticlBorder.style.left = `${widthCell * columns - 0.4}%`;
    const heigthCell = 100 / (5 + rows);
    horizBorder.style.top = `${heigthCell * rows - 0.4}%`;

    gameBoard.append(verticlBorder);
    gameBoard.append(horizBorder);
  }

  else if (sizeImage === 10) {
    const widthCell = 100 / (10 + columns);
    verticlLine.style.left = `${widthCell * (columns + 5) - 0.4}%`;
    verticlBorder.style.left = `${widthCell * columns - 0.4}%`;

    const heigthCell = 100 / (10 + rows);
    horizLine.style.top = `${heigthCell * (rows + 5) - 0.4}%`;
    horizBorder.style.top = `${heigthCell * rows - 0.4}%`;

    gameBoard.append(verticlLine);
    gameBoard.append(horizLine);
    gameBoard.append(verticlBorder);
    gameBoard.append(horizBorder);
  }

  else if (sizeImage === 15) {

    const widthCell = 100 / (15 + columns);
    verticlLine.style.left = `${widthCell * (columns + 5) - 0.4}%`;
    verticlLine_2.style.left = `${widthCell * (columns + 10) - 0.4}%`;
    verticlBorder.style.left = `${widthCell * columns  - 0.4}%`;

    const heigthCell = 100 / (15 + rows);
    horizLine.style.top = `${heigthCell * (rows + 5) - 0.4}%`;
    horizLine_2.style.top = `${heigthCell * (rows + 10) - 0.4}%`;
    horizBorder.style.top = `${heigthCell * rows - 0.4}%`;

    gameBoard.append(verticlLine);
    gameBoard.append(horizLine);
    gameBoard.append(verticlLine_2);
    gameBoard.append(horizLine_2);
    gameBoard.append(verticlBorder);
    gameBoard.append(horizBorder);
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
  if (numberImg === '1') matrixImage = getEasyImg_1(matrix);
  else if (numberImg === '2') matrixImage = getEasyImg_2(matrix);
  else if (numberImg === '3') matrixImage = getEasyImg_3(matrix);
  else if (numberImg === '4') matrixImage = getEasyImg_4(matrix);
  else if (numberImg === '5') matrixImage = getEasyImg_5(matrix);
}

else if (sizeImage === 10) {
  if (numberImg === '1') matrixImage = getMiddleImg_1(matrix);
  else if (numberImg === '2') matrixImage = getMiddleImg_2(matrix);
  else if (numberImg === '3') matrixImage = getMiddleImg_3(matrix);
  else if (numberImg === '4') matrixImage = getMiddleImg_4(matrix);
  else if (numberImg === '5') matrixImage = getMiddleImg_5(matrix);
}

else if (sizeImage === 15) {
  if (numberImg === '1') matrixImage = getHardImg_1(matrix);
  else if (numberImg === '2') matrixImage = getHardImg_2(matrix);
  else if (numberImg === '3') matrixImage = getHardImg_3(matrix);
  else if (numberImg === '4') matrixImage = getHardImg_4(matrix);
  else if (numberImg === '5') matrixImage = getHardImg_5(matrix);
}


return matrixImage;
}


// matrix image МАТРИЦА ЧИСЛОВАЯ 1 === 1 ЧЕРНЫЙ ПИКСЕЛЬ 
function getEasyImg_1(matrix) { // First image 5x5
const matrixImage = [];
for (let i = 0; i < matrix.length; i += 1) {
  const elemMatr = [];
  for (let y = 0; y < matrix[i].length; y += 1) {
    
    if (i === 0 && (y === 0 || y === 2 || y === 4)) elemMatr.push(1);
    else if (i === 1) elemMatr.push(1);
    else if (i === 2 && (y === 1 || y === 2 || y === 3)) elemMatr.push(1);
    else if (i === 3 && (y === 1 || y === 3)) elemMatr.push(1);
    else if (i === 4 && (y === 1 || y === 2 || y === 3)) elemMatr.push(1);
    else elemMatr.push(0);
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
      
      if (i === 0) elemMatr.push(1);
      else if (i === 1 && y === 0) elemMatr.push(1);
      else if (i === 2) elemMatr.push(1);
      else if (i === 3 && y === 4) elemMatr.push(1);
      else if (i === 4) elemMatr.push(1);
      else elemMatr.push(0);
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
      
      if (i === 0) elemMatr.push(1);
      else if (i === 1 && (y === 0 ||  y === 2 || y === 4)) elemMatr.push(1);
      else if (i === 2) elemMatr.push(1);
      else if (i === 3 && y === 0) elemMatr.push(1);
      else if (i === 4 && y === 0) elemMatr.push(1);
      else elemMatr.push(0);
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
      
      if (i === 0 && (y === 0 || y === 3 || y === 4)) elemMatr.push(1);
      else if (i === 1 && (y === 0 ||  y === 1 || y === 2 || y === 3)) elemMatr.push(1);
      else if (i === 2 && (y === 1 ||  y === 3)) elemMatr.push(1);
      else if (i === 3 && (y === 1 ||  y === 2 || y === 3 || y === 4)) elemMatr.push(1);
      else if (i === 4 && (y === 0 ||  y === 1 || y === 4)) elemMatr.push(1);
      else elemMatr.push(0);
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
      
      if (i === 0 && (y === 1 || y === 2)) elemMatr.push(1);
      else if (i === 1 && y === 2) elemMatr.push(1);
      else if (i === 2) elemMatr.push(1);
      else if (i === 3 && (y === 0 ||  y === 2 || y === 4)) elemMatr.push(1);
      else if (i === 4 && (y === 0 ||  y === 1 || y === 2)) elemMatr.push(1); 
      else elemMatr.push(0);
    }
    matrixImage.push(elemMatr);
  }
    return matrixImage;
}



function getMiddleImg_1(matrix) { // First image 10x10
  const matrixImage = [];
  for (let i = 0; i < matrix.length; i += 1) {
    const elemMatr = [];
    for (let y = 0; y < matrix[i].length; y += 1) {
      
      if (i === 0 && (y === 2 || y === 3 || y === 4 || y === 5 || y === 6 || y === 7)) elemMatr.push(1);
      else if (i === 1 && (y === 1 || y === 2 || y === 7 || y === 8)) elemMatr.push(1);
      else if (i === 2 && (y === 1 || y === 2 || y === 7 || y === 8)) elemMatr.push(1);
      else if (i === 3 && (y === 7 || y === 8)) elemMatr.push(1);
      else if (i === 4 && (y === 6 || y === 7 || y === 8)) elemMatr.push(1);
      else if (i === 5 && (y === 4 || y === 5 || y === 6 || y === 7)) elemMatr.push(1);
      else if (i === 6 && (y === 0 || y === 4 || y === 5 || y === 9)) elemMatr.push(1);
      else if (i === 7 && (y === 0 || y === 1 || y === 8 || y === 9)) elemMatr.push(1);
      else if (i === 8 && (y === 0 || y === 4 || y === 5 || y === 9)) elemMatr.push(1);
      else if (i === 9 && (y === 4 || y === 5)) elemMatr.push(1);
      else elemMatr.push(0);
    }
    matrixImage.push(elemMatr);
  }
    return matrixImage;
}
function getMiddleImg_2(matrix) { // Two image 10x10
  const matrixImage = [];
  for (let i = 0; i < matrix.length; i += 1) {
    const elemMatr = [];
    for (let y = 0; y < matrix[i].length; y += 1) {
      
      if (i === 0 && (y === 6 || y === 7 || y === 8 || y === 9)) elemMatr.push(1);
      else if (i === 1 && (y === 3 || y === 4 || y === 5 || y === 9)) elemMatr.push(1);
      else if (i === 2 && (y === 3 || y === 7 || y === 8 || y === 9)) elemMatr.push(1);
      else if (i === 3 && (y === 3 || y === 4 || y === 5 || y === 6 || y === 9)) elemMatr.push(1);
      else if (i === 4 && (y === 3 || y === 9)) elemMatr.push(1);
      else if (i === 5 && (y === 3 || y === 7 || y === 8 || y === 9)) elemMatr.push(1);
      else if (i === 6 && (y === 1 || y === 2 || y === 3 || y === 6 || y === 7 || y === 8 || y === 9)) elemMatr.push(1);
      else if (i === 7 && (y === 0 || y === 1 || y === 2 || y === 3 || y === 6 || y === 7 || y === 8 || y === 9)) elemMatr.push(1);
      else if (i === 8 && (y === 0 || y === 1 || y === 2 || y === 3 || y === 7 || y === 8)) elemMatr.push(1);
      else if (i === 9 && (y === 1 || y === 2)) elemMatr.push(1);
      else elemMatr.push(0);
    }
    matrixImage.push(elemMatr);
  }
    return matrixImage;
}
function getMiddleImg_3(matrix) { // Three image 10x10
  const matrixImage = [];
  for (let i = 0; i < matrix.length; i += 1) {
    const elemMatr = [];
    for (let y = 0; y < matrix[i].length; y += 1) {
      
      if (i === 0 && (y === 3 || y === 4 || y === 5 || y === 6)) elemMatr.push(1);
      else if (i === 1 && (y === 2 || y === 5 || y === 6 || y === 7)) elemMatr.push(1);
      else if (i === 2) elemMatr.push(1);
      else if (i === 3 && (y === 1 || y === 3 || y === 6 || y === 8)) elemMatr.push(1);
      else if (i === 4 && (y === 0 || y === 4 || y === 5 || y === 9)) elemMatr.push(1);
      else if (i === 5 && (y === 0 || y === 4 || y === 5 || y === 9)) elemMatr.push(1);
      else if (i === 6 && (y === 1 || y === 6 || y === 8)) elemMatr.push(1);
      else if (i === 7 && (y === 1 || y === 4 || y === 5 || y === 8)) elemMatr.push(1);
      else if (i === 8 && (y === 2 || y === 7)) elemMatr.push(1);
      else if (i === 9 && (y >= 1 && y <= 8)) elemMatr.push(1);
      else elemMatr.push(0);

    }
    matrixImage.push(elemMatr);
  }
    return matrixImage;
}
function getMiddleImg_4(matrix) { // Four image 10x10
  const matrixImage = [];
  for (let i = 0; i < matrix.length; i += 1) {
    const elemMatr = [];
    for (let y = 0; y < matrix[i].length; y += 1) {
      
      if (i === 0 && (y === 1 || y === 2 || y === 7 || y === 8)) elemMatr.push(1);
      else if (i === 1 && (y === 0 || y === 1 || y === 3 || y === 4 || y === 5 || y === 6 || y === 8 || y === 9)) elemMatr.push(1);
      else if (i === 2 && (y === 0 || y === 2 || y === 3 || y === 4 || y === 6 || y === 7 || y === 9)) elemMatr.push(1);
      else if (i === 3 && (y === 1 || y === 2 || y === 3 || y === 4 || y === 6 || y === 7 || y === 8)) elemMatr.push(1);
      else if (i === 4 && (y === 1 || y === 2 || y === 3 || y === 4 || y === 6 || y === 7 || y === 8)) elemMatr.push(1);
      else if (i === 5 && (y === 1 || y === 2 || y === 3 || y === 5 || y === 6 || y === 7 || y === 8)) elemMatr.push(1);
      else if (i === 6 && (y === 1 || y === 2 || y === 4 || y === 5 || y === 6 || y === 7 || y === 8)) elemMatr.push(1);
      else if (i === 7 && (y >= 2 && y <= 7)) elemMatr.push(1);
      else if (i === 8 && (y >= 3 && y <= 6)) elemMatr.push(1);
      else if (i === 9 && (y === 2 || y === 3 || y === 6 || y === 7)) elemMatr.push(1);
      else elemMatr.push(0);
    }
    matrixImage.push(elemMatr);
  }
    return matrixImage;
}
function getMiddleImg_5(matrix) { // Five image 10x10
  const matrixImage = [];
  for (let i = 0; i < matrix.length; i += 1) {
    const elemMatr = [];
    for (let y = 0; y < matrix[i].length; y += 1) {
      
      if (i === 0 && (y >= 4)) elemMatr.push(1);
      else if (i === 1 && (y === 3 || y === 5 || y === 7 || y === 9)) elemMatr.push(1);
      else if (i === 2 && (y === 2 || y === 3 || y === 5 || y === 7 || y === 8)) elemMatr.push(1);
      else if (i === 3 && (y === 1 || y === 3 || y === 5 || y === 6 || y === 8)) elemMatr.push(1);
      else if (i === 4 && (y === 1 || y === 3 || y === 5 || y === 6 || y === 7 || y === 8)) elemMatr.push(1);
      else if (i === 5 && (y === 1 || y === 3 || y === 4 || y === 8)) elemMatr.push(1);
      else if (i === 6 && (y >= 1 && y <= 8)) elemMatr.push(1);
      else if (i === 7 && (y === 2 || y === 7)) elemMatr.push(1);
      else if (i === 8 && (y === 1 || y === 3 || y === 4 || y === 5 || y === 6)) elemMatr.push(1);
      else if (i === 9 && (y === 0 || y === 1)) elemMatr.push(1);
      else elemMatr.push(0);
    }
    matrixImage.push(elemMatr);
  }
    return matrixImage;
}

function getHardImg_1(matrix) { // First image 15x15
  const matrixImage = [];
  for (let i = 0; i < matrix.length; i += 1) {
    const elemMatr = [];
    for (let y = 0; y < matrix[i].length; y += 1) {
      
      if (i === 0 && (y === 9 || y === 10 || y === 11)) elemMatr.push(1);
      else if (i === 1 && (y >= 8 && y <= 12)) elemMatr.push(1);
      else if (i === 2 && (y === 7 || y === 8 || y === 9 || y === 10 || y === 12 || y === 13 || y === 14)) elemMatr.push(1);
      else if (i === 3 && (y >= 7 && y <= 13)) elemMatr.push(1);
      else if (i === 4 && (y >= 8 && y <= 12)) elemMatr.push(1);
      else if (i === 5 && (y >= 9 && y <= 11)) elemMatr.push(1);
      else if (i === 6 && (y >= 8 && y <= 12)) elemMatr.push(1);
      else if (i === 7 && (y === 0 || (y >= 6 && y <= 13))) elemMatr.push(1);
      else if (i === 8 && (y === 0 || y === 1 || y === 2 || y === 5 || y === 6 || y === 7 || y === 11 || y === 12 || y === 13)) elemMatr.push(1);
      else if (i === 9 && (y !== 7 && y !== 11 && y !== 14)) elemMatr.push(1);
      else if (i === 10 && (y !== 0 && y !== 6 && y !== 11 && y !== 14)) elemMatr.push(1);
      else if (i === 11 && (y !== 0 && y !== 9 && y !== 10 && y !== 13 && y !== 14)) elemMatr.push(1);
      else if (i === 12 && (y >= 2 && y <= 11)) elemMatr.push(1);
      else if (i === 13 && (y === 4 || y === 5 || y === 7 || y === 8 || y === 9)) elemMatr.push(1);
      else if (i === 14 && (y >= 6 && y <= 11)) elemMatr.push(1);
      else elemMatr.push(0);
    }
    matrixImage.push(elemMatr);
  }
    return matrixImage;
}
function getHardImg_2(matrix) { // Two image 15x15
  const matrixImage = [];
  for (let i = 0; i < matrix.length; i += 1) {
    const elemMatr = [];
    for (let y = 0; y < matrix[i].length; y += 1) {
      
      if (i === 0 && (y === 12 || y === 13 || y === 14)) elemMatr.push(1);
      else if (i === 1 && (y === 5 || y === 6 || y === 7 || y === 8 || y === 11 || y === 12 || y === 14)) elemMatr.push(1);
      else if (i === 2 && (y === 3 || y === 4 || y === 5 || y === 8 || y === 11 || y === 13)) elemMatr.push(1);
      else if (i === 3 && (y === 0 || y === 1 || y === 2 || y === 4 || y === 7 || y === 8 || y === 11)) elemMatr.push(1);
      else if (i === 4 && (y === 0 || y === 1 || y === 7 || y === 11 || y === 12)) elemMatr.push(1);
      else if (i === 5 && (y === 1 || y === 2 || y === 3 || y === 4 || y === 7 || y === 8 || y === 12 || y === 13)) elemMatr.push(1);
      else if (i === 6 && (y === 4 || y === 5 || y === 8 || y === 9 || y === 13 || y === 14)) elemMatr.push(1);
      else if (i === 7 && (y === 5 || y === 9 || y === 10 || y === 11 || y === 14)) elemMatr.push(1);
      else if (i === 8 && (y === 5 || y === 6 || y === 11 || y === 12 || y === 14)) elemMatr.push(1);
      else if (i === 9 && (y === 3 || y === 4 || y === 5 || y === 6 || y === 12 || y === 13 || y === 14)) elemMatr.push(1);
      else if (i === 10 && (y === 3 || y === 5 || y === 8 || y === 9 || y === 13 || y === 14)) elemMatr.push(1);
      else if (i === 11 && (y === 5 || y === 8 || y === 13)) elemMatr.push(1);
      else if (i === 12 && (y === 6 || y === 8 || y === 13)) elemMatr.push(1);
      else if (i === 13 && (y === 5 || y === 6 || y === 7 || y === 8 || y === 9 || y === 12 || y === 13)) elemMatr.push(1);
      else if (i === 14 && (y === 3 || y === 4 || y === 5 || y === 7 || y === 8 || y === 10 || y === 11 || y === 12)) elemMatr.push(1);
      else elemMatr.push(0);
    }
    matrixImage.push(elemMatr);
  }
    return matrixImage;
}
function getHardImg_3(matrix) { // Three image 15x15
  const matrixImage = [];
  for (let i = 0; i < matrix.length; i += 1) {
    const elemMatr = [];
    for (let y = 0; y < matrix[i].length; y += 1) {
      
      if (i === 0 && y === 14) elemMatr.push(1);
      else if (i === 1 && (y === 11 || y === 12)) elemMatr.push(1);
      else if (i === 2 && y === 4) elemMatr.push(1);
      else if (i === 3 && (y === 4 || y === 5 || y === 9 || y === 10)) elemMatr.push(1);
      else if (i === 4 && (y === 4 || y === 9 || y === 10)) elemMatr.push(1);
      else if (i === 5 && (y >= 3 && y <= 11)) elemMatr.push(1);
      else if (i === 6 && (y === 2 || y === 3 || y === 4 || y === 5 || y === 6 || y === 8 || y === 10 || y === 12)) elemMatr.push(1);
      else if (i === 7 && (y === 1 || y === 2 || y === 3 || y === 4 || y === 5 || y === 6 || y === 7 || y === 9 || y === 11 || y === 13)) elemMatr.push(1);
      else if (i === 8) elemMatr.push(1);
      else if (i === 9 && (y === 1 || y === 13)) elemMatr.push(1);
      else if (i === 10 && (y === 1 || y === 3 || y === 4 || y === 5 || y === 10 || y === 11 || y === 13)) elemMatr.push(1);
      else if (i === 11 && (y === 1 || y === 3 || y === 4 || y === 5 || y === 7 || y === 8 || y === 10 || y === 11 || y === 13)) elemMatr.push(1);
      else if (i === 12 && (y === 1 || y === 7 || y === 8 || y === 13)) elemMatr.push(1);
      else if (i === 13 && (y === 1 || y === 7 || y === 8 || y === 13)) elemMatr.push(1);
      else if (i === 14) elemMatr.push(1);
      else elemMatr.push(0);
    }
    matrixImage.push(elemMatr);
  }
    return matrixImage;
}
function getHardImg_4(matrix) { // Four image 15x15
  const matrixImage = [];
  for (let i = 0; i < matrix.length; i += 1) {
    const elemMatr = [];
    for (let y = 0; y < matrix[i].length; y += 1) {
      
      if (i === 0 && (y === 0 || y === 2 || y === 6 || y === 7 || y === 8 || y === 9)) elemMatr.push(1);
      else if (i === 1 && (y === 1 || y === 2 || (y >= 5 && y <= 11))) elemMatr.push(1);
      else if (i === 2 && (y === 0 || y === 1 || (y >= 4 && y <= 12))) elemMatr.push(1);
      else if (i === 3 && (y === 1 || y === 3 || y === 4 || y === 5 || y === 6 || y === 9 || y === 10 || y === 12)) elemMatr.push(1);
      else if (i === 4 && ((y >= 1 && y <= 5) || (y >= 9 && y <= 12))) elemMatr.push(1);
      else if (i === 5 && ((y >= 2 && y <= 6) || y === 8  || y === 10 || y === 11 || y === 12 || y === 14)) elemMatr.push(1);
      else if (i === 6 && ((y >= 2 && y <= 9) || y === 14)) elemMatr.push(1);
      else if (i === 7 && ((y >= 2 && y <= 5) || y === 8 || y ===14)) elemMatr.push(1);
      else if (i === 8 && ((y >= 2 && y <= 5) || y === 13 || y === 14)) elemMatr.push(1);
      else if (i === 9 && ((y >= 2 && y <= 5) || y === 8 || y === 13 || y === 14)) elemMatr.push(1);
      else if (i === 10 && ((y >= 2 && y <= 9) || y === 12 || y === 13 || y === 14)) elemMatr.push(1);
      else if (i === 11 && ((y >= 3 && y <= 6) || y === 8 || y === 11 || y === 12 || y === 13)) elemMatr.push(1);
      else if (i === 12 && (y === 0 || (y >= 2 && y <= 7) || (y >= 9 && y <= 13))) elemMatr.push(1);
      else if (i === 13 && (y === 1 || y === 2 || (y >= 4 && y <= 12))) elemMatr.push(1);
      else if (i === 14 && (y === 0 || y === 2 || (y >= 5 && y <= 11))) elemMatr.push(1);
      else elemMatr.push(0);
    }
    matrixImage.push(elemMatr);
  }
    return matrixImage;
}
function getHardImg_5(matrix) { // Five image 15x15
  const matrixImage = [];
  for (let i = 0; i < matrix.length; i += 1) {
    const elemMatr = [];
    for (let y = 0; y < matrix[i].length; y += 1) {
      
      if (i === 0 && (y >= 1 && y <= 6)) elemMatr.push(1);
      else if (i === 1 && (y === 0 || y === 1 || y === 2 || y === 5 || y === 6 || y === 7 || y === 10 || y === 11)) elemMatr.push(1);
      else if (i === 2 && (y === 0 || y === 1 || y === 6 || y === 7 || y === 10 || y === 11 || y === 12 || y === 13)) elemMatr.push(1);
      else if (i === 3 && ((y >= 0 && y <= 2) ||(y >= 5 && y <= 7) || (y >= 10 && y <= 13))) elemMatr.push(1);
      else if (i === 4 && ((y >= 1 && y <= 6) || (y >= 10 && y <= 12))) elemMatr.push(1);
      else if (i === 5 && (y === 3 || y === 4 || (y >= 10 && y <= 13))) elemMatr.push(1);
      else if (i === 6 && (y === 3 || y === 4 || y === 10 || y === 11)) elemMatr.push(1);
      else if (i === 7 && (y === 3 || y === 4 || y === 10 || y === 11)) elemMatr.push(1);
      else if (i === 8 && (y === 3 || y === 4 || y === 10 || y === 11)) elemMatr.push(1);
      else if (i === 9 && ((y >= 1 && y <= 4) || y === 10 || y === 11)) elemMatr.push(1);
      else if (i === 10 && ((y >= 2 && y <= 4) || (y >= 8 && y <= 13))) elemMatr.push(1);
      else if (i === 11 && ((y >= 1 && y <= 4) || (y >= 7 && y <= 9) ||(y >= 12 && y <= 14))) elemMatr.push(1);
      else if (i === 12 && ((y >= 1 && y <= 4) || (y >= 7 && y <= 8) ||(y >= 13 && y <= 14))) elemMatr.push(1);
      else if (i === 13 && ((y >= 3 && y <= 4) || (y >= 7 && y <= 9) ||(y >= 12 && y <= 14))) elemMatr.push(1);
      else if (i === 14 && (y >= 8 && y <= 13)) elemMatr.push(1);
      else elemMatr.push(0);
    }
    matrixImage.push(elemMatr);
  }
    return matrixImage;
}