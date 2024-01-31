import {countClickCell, countFillCells, getResultGame} from './modules/game-result.js';
import {creatGameBoard} from './modules/board_contain.js';
import {creatLeftClues, addLeftClues, fillLeftClues} from './modules/clues-left.js';
import {creatTopClues, addTopClues, fillTopClues} from './modules/clues-top.js';
import {creatGameField, getFillMatrixField} from './modules/board_field.js';
import {creatModal, openModal} from './modules/game_over-modal.js';
import {addButtonMenu, creatMenu, openMenu, closeMenu} from './modules/menu_main.js';
import {creatLevelsMenu, openLevelsMenu, closeLevelsMenu} from './modules/menu_levels.js';
import {creatLevelsEasyMenu, openEasyLevelsMenu, closeEasyLevelsMenu} from './modules/level_1-easy.js';
import {creatLevelsMiddleMenu, openMiddleLevelsMenu, closeMiddleLevelsMenu} from './modules/level_2-middle.js';
import {creatLevelsHardMenu, openHardLevelsMenu, closeHardLevelsMenu} from './modules/level_3-hard.js';
import {clickLeftMouse, clickRigthMouse, cleanCellField, cleanBoard} from './modules/operations-field.js';
import {addContainWatch, resetTime, cleanWatch} from './modules/stop-watch.js';


// start TIME
let interval = 0;
let minutes = 0;
let seconds = 0;
let counterClick = 0;
function startTime() {
  const containerWatch = document.querySelector('.container-watch');
  console.log(seconds)
  seconds += 1;
  if (seconds === 60) {
    minutes += 1;
    seconds = 0;
  }
  if (seconds < 10) {
    if (minutes < 10) containerWatch.innerText = `0${minutes} : 0${seconds}`;
    else containerWatch.innerText = `${minutes} : 0${seconds}`;
  }
  else if (seconds > 9) {
    if (minutes < 10) containerWatch.innerText = `0${minutes} : ${seconds}`;
    else containerWatch.innerText = `${minutes} : ${seconds}`;
  }
}
function endTime() {
  clearInterval(interval);
  resetTime();
  counterClick = 0;
  minutes = 0;
  seconds = 0;
}



// body
const body = document.querySelector('body');
body.className = 'body';

//body-container
const bodyContainer = document.createElement('div');
bodyContainer.className = 'body-container';
body.prepend(bodyContainer);

//menu-background for modal of levels
const menuBackground = document.createElement('div');
menuBackground.className = 'menu-background';
menuBackground.classList.add('close');
body.prepend(menuBackground);




// menu-burger
addButtonMenu(bodyContainer); // menu-button
creatMenu(bodyContainer);
creatLevelsMenu(bodyContainer);
creatLevelsEasyMenu();
creatLevelsMiddleMenu();
creatLevelsHardMenu();
const menuButton = document.querySelector('.menu-icon');
const buttonLevels = document.querySelector('.menu-window__levels');
const buttonReset = document.querySelector('.menu-window__reset');
menuButton.addEventListener('click', () => {
  openMenu();
  closeLevelsMenu();
})
buttonLevels.addEventListener('click', () => {
  openLevelsMenu();
})
buttonReset.addEventListener('click', () => {
  endTime();
  cleanCellField();
  openMenu();
})


// open menu images
const levelsMenu = document.querySelector('.menu-levels');
levelsMenu.addEventListener('click', (event) => {
  closeMenu();
  closeLevelsMenu();
  const button = event.target;

  const arrLevelsMenu = document.querySelector('.menu-levels').children;
  for (let i = 0; i < arrLevelsMenu.length; i+= 1) {
    if (arrLevelsMenu[i] === button) {
      console.log('button', i)
      if (i === 0) {
        closeMiddleLevelsMenu();
        closeHardLevelsMenu();
        openEasyLevelsMenu();
      } else if (i === 1) {
        closeHardLevelsMenu();
        closeEasyLevelsMenu();
        openMiddleLevelsMenu();
      } else if (i === 2) {
        closeMiddleLevelsMenu();
        closeEasyLevelsMenu();
        openHardLevelsMenu();
      }
    }
  }
})



// open images level-easy
document.querySelector('.menu-levels__easy').addEventListener('click', (event) => {
  const numberImg = event.target.classList[1];
  const sizeImage = 5;
  if (numberImg !== undefined) {
    startGame(event, numberImg, sizeImage);
  }
})



// function start game
function startGame(event, numberImg, sizeImage) {
  cleanBoard();

  cleanWatch();
  addContainWatch(bodyContainer);
  endTime();



  closeEasyLevelsMenu();
  document.querySelector('.menu-window__reset').disabled = false;



  creatGameBoard(bodyContainer); // game board 
  const matrixImage = getFillMatrixField(sizeImage, numberImg);      // matrix image-field



  const arrTopClues = addTopClues(matrixImage)[0];  // array top-clues
  const rowTopClues = addTopClues(matrixImage)[1];  // max counter rows in top-container
  creatTopClues(sizeImage, rowTopClues);            // creat top-clues container+cells

  const arrLeftClues = addLeftClues(matrixImage)[0];    // array left-clues
  const columnLeftClues = addLeftClues(matrixImage)[1]; // max counter columns in left-container
  creatLeftClues(sizeImage, columnLeftClues);           // creat left-clues container+c



  creatGameField(sizeImage);              // creat game field-container + cell-item



  fillTopClues(arrTopClues, rowTopClues);         // fill cells top-clues
  fillLeftClues(arrLeftClues, columnLeftClues);   // fill cells left-clues

  

 // click left mouse button (black cell)
  const gameField = document.querySelector('.game-field');

  
  gameField.addEventListener('click', (event) => {

    counterClick += 1;
    if (counterClick === 1) {
    interval = setInterval(startTime, 1000);
    }

    clickLeftMouse(event);
    getWinCondition(matrixImage, sizeImage);
    
  })

  // click right mouse button (black cell)
  gameField.addEventListener('contextmenu', (event) => {

    counterClick += 1;
    if (counterClick === 1) {
    interval = setInterval(startTime, 1000);
    }

    clickRigthMouse(event);
  })
}

// get a win condition
function getWinCondition(matrixImage, sizeImage) {

  const gameField = document.querySelector('.game-field');
  const topClues = document.querySelector('.top-clues');
  
  const countClick = countClickCell(gameField);
  const countFill = countFillCells(topClues);

  let result;
  if (countClick === countFill) result = getResultGame(gameField, matrixImage, sizeImage);
  if (result) {  // ===> WIN
    creatModal();
    openModal();
    endTime();
  }
}
