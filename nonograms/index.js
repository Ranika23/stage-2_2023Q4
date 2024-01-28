import {countClickCell, countFillCells, getResultGame} from './modules/resultGame.js';
import {creatEmptyCorner, creatGameBoard} from './modules/gameBoard.js';
import {creatTopClues, creatLeftClues} from './modules/gameClues.js';
import {sizeImage, creatGameField, creatCellField, getMatrixField} from './modules/gameField.js';
import {creatModal, openModal} from './modules/modal.js';
import {addButtonMenu, creatMenu, openMenu, closeMenu} from './modules/menu.js';
import {creatLevelsMenu, openLevelsMenu, closeLevelsMenu} from './modules/levels.js';
import {creatLevelsEasyMenu, openEasyLevelsMenu} from './modules/easy-level.js';
import {creatLevelsMiddleMenu, openMiddleLevelsMenu} from './modules/middle-level.js';
import {creatLevelsHardMenu, openHardLevelsMenu} from './modules/hard-level.js';

// body
const body = document.querySelector('body');
body.className = 'body';

//body-container
const bodyContainer = document.createElement('div');
bodyContainer.className = 'body-container';
body.prepend(bodyContainer);



// menu-burger
addButtonMenu(bodyContainer); // menu-button
creatMenu();
creatLevelsMenu();
creatLevelsEasyMenu();
creatLevelsMiddleMenu();
creatLevelsHardMenu();
const menuButton = document.querySelector('.menu-icon');
const buttonLevels = document.querySelector('.menu-window__levels');
menuButton.addEventListener('click', () => {
  openMenu();

 
})
buttonLevels.addEventListener('click', () => {
  closeMenu();
  openLevelsMenu();
})

const levelsMenu = document.querySelector('.menu-levels');

levelsMenu.addEventListener('click', (event) => {
  const button = event.target;
  const arrLevelsMenu = document.querySelector('.menu-levels').children;
  for (let i = 0; i < arrLevelsMenu.length; i+= 1) {
    if (arrLevelsMenu[i] === button) {
      if (i === 0) {
        closeLevelsMenu();
        openEasyLevelsMenu();
        openMiddleLevelsMenu
      } else if (i === 1) {
        closeLevelsMenu();
        openMiddleLevelsMenu();
        openHardLevelsMenu();
      } else if (i === 2) {
        closeLevelsMenu();
        openHardLevelsMenu();
      }
    }
  }
})








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
  if (result) {  // ===> WIN
    creatModal();
    openModal();
  }
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

