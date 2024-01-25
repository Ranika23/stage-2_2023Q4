
const sizeImage = 5;

// body
const body = document.querySelector('body');
body.className = 'body';

//body-container
const bodyContainer = document.createElement('div');
bodyContainer.className = 'body-container';
body.prepend(bodyContainer);

// game board
const gameBoard = document.createElement('div');
gameBoard.className = 'game-board';
bodyContainer.prepend(gameBoard);






// empty corner
const emptyCorner = document.createElement('div');
emptyCorner.className = 'empty-corner';
gameBoard.append(emptyCorner);
























//top clues  
const topClues = document.createElement('div');
topClues.className = 'top-clues';
gameBoard.append(topClues);
//left clues cells 
for (let i = 1; i <= 3 * sizeImage; i += 1) {
  const cellClues = document.createElement('div');
  cellClues.className = 'cell-clues';
  topClues.prepend(cellClues);
}
(function addLeftClues() {
  const arrTopClues = topClues.children;
  arrTopClues[7].innerText = 1;
  arrTopClues[8].innerText = 1;
  arrTopClues[11].innerText = 5;
  arrTopClues[12].innerText = 1;
  arrTopClues[13].innerText = 2;
}
)()










//left clues  
const leftClues = document.createElement('div');
leftClues.className = 'left-clues';
gameBoard.append(leftClues);
//left clues cells 
for (let i = 1; i <= 3 * sizeImage; i += 1) {
  const cellClues = document.createElement('div');
  cellClues.className = 'cell-clues';
  leftClues.prepend(cellClues);
}
(function addLeftClues() {
  const arrLeftClues = leftClues.children;
  arrLeftClues[2].innerText = 2;
  arrLeftClues[4].innerText = 1;
  arrLeftClues[5].innerText = 1;
  arrLeftClues[8].innerText = 2;
  arrLeftClues[10].innerText = 1;
  arrLeftClues[11].innerText = 1;
  arrLeftClues[13].innerText = 1;
  arrLeftClues[14].innerText = 1;  
})()











//game field
const gameField = document.createElement('div');
gameField.className = 'game-field';
gameBoard.append(gameField);

//field cells
for (let i = 1; i <= sizeImage ** 2; i += 1) {
  const cellField = document.createElement('div');
  cellField.className = 'cell-field';
  gameField.prepend(cellField)
}

// matrix 
const arr = new Array(sizeImage).fill(0);
const matrix = [];
arr.forEach(() => matrix.push(arr))

// matrix image 
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

// listener for cells
gameField.addEventListener('click', (event) => {
  const cell = event.target;
  cell.classList.toggle('click');
})


// game field with image 
/*const arrayGameField = gameField.children;
for (let i = 0; i < matrixImage.length; i += 1) {
  for (let y = 0; y < matrixImage[i].length; y += 1) {
    const cell = sizeImage * i + y;
    if (matrixImage[i][y] === 1) {
      arrayGameField[cell].style.background = 'black';
    }
  }
}*/

