import {countClickCell, countFillCells, getResultGame} from './modules/resultGame.js';
import {creatEmptyCorner, creatGameBoard} from './modules/gameBoard.js';
import {creatTopClues, creatLeftClues} from './modules/gameClues.js';
import {sizeImage, creatGameField, creatCellField, getMatrixField} from './modules/gameField.js';

// body
const body = document.querySelector('body');
body.className = 'body';

//body-container
const bodyContainer = document.createElement('div');
bodyContainer.className = 'body-container';
body.prepend(bodyContainer);




creatGameBoard(bodyContainer); // game board
creatEmptyCorner();            // empty corner

creatTopClues(sizeImage);      // top clues
creatLeftClues(sizeImage);     // left clues

creatGameField();              // game field
creatCellField(sizeImage);     // cells field
const matrixImage = getMatrixField(sizeImage);      // matrix field



// listener for cells
const gameField = document.querySelector('.game-field');
const topClues = document.querySelector('.top-clues');

gameField.addEventListener('click', (event) => {
  const cell = event.target;
  cell.classList.toggle('click');
  const countClick = countClickCell(gameField);
  const countFill = countFillCells(topClues);
  let result;
  if (countClick === countFill) result = getResultGame(gameField, matrixImage, sizeImage);
  if (result) console.log('WIN'); // ===> WIN
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

