import {countClickCell, countFillCells, getResultGame} from './modules/game-result.js';
import {creatGameBoard, getWidthHeightBoard} from './modules/board_contain.js';
import {creatLeftClues, addLeftClues, fillLeftClues, getSizeCellLeft} from './modules/clues-left.js';
import {creatTopClues, addTopClues, fillTopClues, getSizeCellTop} from './modules/clues-top.js';
import {creatGameField, getFillMatrixField, addLineField} from './modules/board_field.js';
import {creatModal, openModal, closeModal} from './modules/game_over-modal.js';
import {addButtonMenu, creatMenu, openMenu, closeMenu} from './modules/menu_main.js';
import {creatLevelsMenu, openLevelsMenu, closeLevelsMenu} from './modules/menu_levels.js';
import {creatLevelsEasyMenu, openEasyLevelsMenu, closeEasyLevelsMenu} from './modules/level_1-easy.js';
import {creatLevelsMiddleMenu, openMiddleLevelsMenu, closeMiddleLevelsMenu} from './modules/level_2-middle.js';
import {creatLevelsHardMenu, openHardLevelsMenu, closeHardLevelsMenu} from './modules/level_3-hard.js';
import {clickLeftMouse, clickRigthMouse, cleanCellField, cleanBoard} from './modules/operations-field.js';
import {addContainWatch, resetTime, cleanWatch} from './modules/stop-watch.js';
import {addSoundClick, addSoundClose, addSoundWinGame} from './modules/get-sound.js';
import {enableButtons, getInitStateButtons} from './modules/disabled-button.js';
import {saveLastGame, getLastGame} from './modules/local-storage.js';
import {creatChangeColorButton, changeColorTheme , getColorLoadPage} from './modules/dark_light.js';
import {creatScoreButton, creatScoreTable, openScoreTable, saveWinGame, fillScoreTable, closeScoreTable} from './modules/score-table.js';
import {randomNumber} from './modules/random-game.js';
import {creatSolutionButton, getSolution} from './modules/solution-game.js';





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
getInitStateButtons();
creatLevelsMenu(bodyContainer);
creatLevelsEasyMenu();
creatLevelsMiddleMenu();
creatLevelsHardMenu();

const menuButton = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu-window');
const buttonLevels = document.querySelector('.menu-window__levels');
const buttonReset = document.querySelector('.menu-window__reset');
const buttonSaveGame = document.querySelector('.menu-window__save');
const buttonLastGame = document.querySelector('.menu-window__last-game');
const buttonRandomGame = document.querySelector('.menu-window__random-game');
const solutionButton = creatSolutionButton(bodyContainer);
let countClickSolution = 0;

menuButton.addEventListener('click', (event) => {
  openMenu();
  closeLevelsMenu();
  closeScoreTable();
  event._isClickMenu = true;
})
menu.addEventListener("click", event => {
  event._isClickMenu = true;
})

buttonLevels.addEventListener('click', () => {
  openLevelsMenu();
})
buttonReset.addEventListener('click', () => {
  document.querySelector('.menu-window__reset').disabled = true;
  endTime();
  cleanCellField();
  openMenu();
  closeLevelsMenu();
  countClickSolution = 0;

})








// save last game
buttonLastGame.addEventListener('click', () => {
  openMenu();
  closeLevelsMenu();
  clearInterval(interval);
  endTime();
  
  let [matrixImage, sizeImage, gameField, rowTopClues, columnLeftClues, infScoreTable] = getLastGame();

  localStorage.setItem('saveRowsColumnSize', JSON.stringify([rowTopClues, columnLeftClues, sizeImage]));

  const nameImgWin = infScoreTable[0];
  const levelWin = infScoreTable[1];

  getSizeCellTop(sizeImage, rowTopClues);
  getSizeCellLeft(sizeImage, columnLeftClues);
  const widthBody = window.innerWidth;
  //const widthBoard = document.querySelector('.game-board-container').clientWidth;

  getWidthHeightBoard(widthBody, sizeImage, columnLeftClues, rowTopClues);  
  getColorLoadPage();

    //button solution
  solutionButton.addEventListener("click", () => {
    countClickSolution += 1;
    cleanCellField();
    getSolution(gameField, matrixImage, sizeImage);
    clearInterval(interval);
    document.querySelector('.menu-window__reset').disabled = false;
    //endTime();
  })
  minutes = Number(localStorage.getItem('minutes'));
  seconds = Number(localStorage.getItem('seconds'));

  gameField.addEventListener('click', (event) => {
    if (countClickSolution === 0) {
      counterClick += 1;
      if (counterClick === 1) {
      interval = setInterval(startTime, 1000);
      enableButtons();
      }
      addSoundClick(event);
      clickLeftMouse(event);
      countClickSolution = getWinCondition(matrixImage, sizeImage, nameImgWin, levelWin, countClickSolution);
    }


  })

  // click right mouse button (black cell)
  gameField.addEventListener('contextmenu', (event) => {

    if (countClickSolution === 0) {
      counterClick += 1;
      if (counterClick === 1) {
      interval = setInterval(startTime, 1000);
      enableButtons();
      }
      addSoundClose(event);
      clickRigthMouse(event);
    }

  })
 
})


//random game
buttonRandomGame.addEventListener('click', () => {
  openMenu();
  closeLevelsMenu();
  closeScoreTable();
  let [numberImg, sizeImage, nameImgWin, levelWin] = randomNumber();
  console.log(numberImg, sizeImage, nameImgWin, levelWin)
  startGame(numberImg, sizeImage, nameImgWin, levelWin);
  getColorLoadPage();
})


// open menu images
const levelsMenu = document.querySelector('.menu-levels');
levelsMenu.addEventListener('click', (event) => {
  event._isClickMenu = true;
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


startGame('1', 5, 'TOWER', 'easy 5x5'); // on page loading





//button change color
const buttonScore = creatScoreButton(bodyContainer);
creatScoreTable(bodyContainer);
buttonScore.addEventListener("click", () => {
  openScoreTable();
})



//button change color
const changeColorButton = creatChangeColorButton(bodyContainer);
changeColorButton.addEventListener("click", () => {
  changeColorTheme();
})
getColorLoadPage();



// open images level-easy
document.querySelector('.menu-levels__easy').addEventListener('click', (event) => {
  event._isClickMenu = true;
  console.log(event.target.classList)
  const numberImg = event.target.classList[1];
  const nameImgWin = event.target.classList[2];
  const sizeImage = 5;
  const levelWin = 'easy 5x5';
  if (numberImg !== undefined) {
    startGame(numberImg, sizeImage, nameImgWin, levelWin);
  }
  getColorLoadPage();
})

// open images level-middle
document.querySelector('.menu-levels__middle').addEventListener('click', (event) => {
  event._isClickMenu = true;
  console.log(event.target.classList)
  const numberImg = event.target.classList[1];
  const nameImgWin = event.target.classList[2];
  const sizeImage = 10;
  const levelWin = 'middle 10x10';
  console.log('numberImg' ,numberImg)
  if (numberImg !== undefined) {
    startGame(numberImg, sizeImage, nameImgWin, levelWin);
  }
  getColorLoadPage();
})

// open images level-hard
document.querySelector('.menu-levels__hard').addEventListener('click', (event) => {
  event._isClickMenu = true;
  console.log(event.target.classList)
  const numberImg = event.target.classList[1];
  const nameImgWin = event.target.classList[2];
  const sizeImage = 15;
  const levelWin = 'hard 15x15';
  console.log('numberImg' ,numberImg)
  if (numberImg !== undefined) {
    startGame(numberImg, sizeImage, nameImgWin, levelWin);
  }
  getColorLoadPage();
})


document.body.addEventListener("click", event => {
  if (event._isClickMenu) return;
  closeMenu();
  closeLevelsMenu();
  closeEasyLevelsMenu();
  closeMiddleLevelsMenu();

})

// function start game
function startGame(numberImg, sizeImage, nameImgWin, levelWin) {

  cleanBoard();

  cleanWatch();
  addContainWatch(bodyContainer);
  endTime();

  closeEasyLevelsMenu();
  closeMiddleLevelsMenu();
  closeHardLevelsMenu();


  console.log(sizeImage, numberImg)
  creatGameBoard(bodyContainer); // game board 
  const matrixImage = getFillMatrixField(sizeImage, numberImg);      // matrix image-field
  console.log(matrixImage)


  const arrTopClues = addTopClues(matrixImage)[0];  // array top-clues
  const rowTopClues = addTopClues(matrixImage)[1];  // max counter rows in top-container
  creatTopClues(sizeImage, rowTopClues);            // creat top-clues container+cells

  console.log('arrTopClues', arrTopClues)
  console.log('rowTopClues', rowTopClues)

  const arrLeftClues = addLeftClues(matrixImage)[0];    // array left-clues
  const columnLeftClues = addLeftClues(matrixImage)[1]; // max counter columns in left-container
  creatLeftClues(sizeImage, columnLeftClues);           // creat left-clues container+c

  localStorage.setItem('saveRowsColumnSize', JSON.stringify([rowTopClues, columnLeftClues, sizeImage]));

  creatGameField(sizeImage);              // creat game field-container + cell-item


  fillTopClues(sizeImage, arrTopClues);         // fill cells top-clues
  fillLeftClues(sizeImage, arrLeftClues);   // fill cells left-clues

  getSizeCellTop(sizeImage, rowTopClues)
  getSizeCellLeft(sizeImage, columnLeftClues);

  const widthBody = window.innerWidth;
  getWidthHeightBoard(widthBody, sizeImage, columnLeftClues, rowTopClues);  


  addLineField(sizeImage, columnLeftClues, rowTopClues);


 // click left mouse button (black cell)
  const gameField = document.querySelector('.game-field');

  buttonSaveGame.addEventListener('click', () => {
   closeMenu();
    closeLevelsMenu();
    saveLastGame(matrixImage, sizeImage, rowTopClues, columnLeftClues, nameImgWin, levelWin);
    getInitStateButtons();
  })

//button solution
solutionButton.addEventListener("click", () => {
  countClickSolution += 1;
  cleanCellField();
  getSolution(gameField, matrixImage, sizeImage);
  clearInterval(interval);
  document.querySelector('.menu-window__reset').disabled = false;
  //endTime();
})



  gameField.addEventListener('click', (event) => {
    if (countClickSolution === 0) {
      counterClick += 1;
      if (counterClick === 1) {
      interval = setInterval(startTime, 1000);
      enableButtons();
      }
      addSoundClick(event);
      clickLeftMouse(event);
      countClickSolution = getWinCondition(matrixImage, sizeImage, nameImgWin, levelWin, countClickSolution);
    }

    
  })

  // click right mouse button (black cell)
  gameField.addEventListener('contextmenu', (event) => {
    if (countClickSolution === 0) {
      counterClick += 1;
      if (counterClick === 1) {
      interval = setInterval(startTime, 1000);
      enableButtons();
      }
      addSoundClose(event);
      clickRigthMouse(event);
    }

  })

}

// get a win condition
let countWin = 0;
function getWinCondition(matrixImage, sizeImage, nameImgWin, levelWin, countClickSolution) {

  const gameField = document.querySelector('.game-field');
  const topClues = document.querySelector('.top-clues');
  
  const countClick = countClickCell(gameField);
  const countFill = countFillCells(topClues);

  let result;
  if (countClick === countFill && countClickSolution === 0) result = getResultGame(gameField, matrixImage, sizeImage);
  if (result) {  // ===> WIN
    countWin += 1;
    addSoundWinGame();
    const timeWin = creatModal();
    countClickSolution += 1;
    setTimeout(openModal, 1000);
    setTimeout(closeModal, 4000);
    const timeInner = document.querySelector('.container-watch').innerText;
    console.log(timeInner);
    clearInterval(interval);
    saveWinGame(countWin, nameImgWin, levelWin, timeInner, timeWin);  

  }
  return countClickSolution;
}
fillScoreTable();

// close  menu-burger > 768px
window.addEventListener('resize', function () {
  let [row, column, size] = JSON.parse(localStorage.getItem('saveRowsColumnSize'));
  //const gameBoard = document.querySelector('.game-board-container');
  let width = window.innerWidth;
  //const widthBoard = document.querySelector('.game-board-container').clientWidth;
  getWidthHeightBoard(width, size, column, row);  



  /*if (width > 500) {
    gameBoard.style.width = `${25 * (column + size)}px`;
    gameBoard.style.height = `${25 * (row + size)}px`;

  } else if (width <= 500) {
    gameBoard.style.width = `${5 * (column + size)}vw`;
    gameBoard.style.height = `${5 * (row + size)}vw`;
  }*/
  //let h = this.window.innerHeight;
  //document.querySelector(".menu-burger").style.height = `${h - 100}px`;
});
