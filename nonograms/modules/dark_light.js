export function creatChangeColorButton(bodyContainer) {
  const changeColorButton = document.createElement('button');
  changeColorButton.className = 'change-color'; 
  bodyContainer.prepend(changeColorButton);

  const sliderButton = document.createElement('div');
  sliderButton.className = 'change-color__slider'; 
  changeColorButton.prepend(sliderButton);

  const lineButton = document.createElement('div');
  lineButton.className = 'change-color__line'; 
  changeColorButton.prepend(lineButton);

  return changeColorButton;
}

export function changeColorTheme() {
  const changeColorButton = document.querySelector('.change-color');
  const sliderButton = document.querySelector('.change-color__slider');
  const lineButton = document.querySelector('.change-color__line');
  changeColorButton.classList.toggle('open-dark');
  if (changeColorButton.classList.contains('open-dark')) {
    lineButton.style.width = '100%';
    sliderButton.style.left = '21px';
    changeDarkPage();
  }
  else if (!changeColorButton.classList.contains('open-dark')) {
    lineButton.style.width = '0%';
    sliderButton.style.left = '0px';
    changeLightPage();
  }
}
export function getColorLoadPage() {
  const changeColorButton = document.querySelector('.change-color');
  if (changeColorButton.classList.contains('open-dark')) {
    changeDarkPage();
  }
  else if (!changeColorButton.classList.contains('open-dark')) {
    changeLightPage();
  }
}


function changeDarkPage() {

  const bodyContainer = document.querySelector('.body-container');
  
  const slider = document.querySelector('.change-color');
  const sliderButton = document.querySelector('.change-color__slider');
  const lineButton = document.querySelector('.change-color__line');

  const scoreButton = document.querySelector('.score-button');
  const scoreTable = document.querySelector('.score-table');
  const scoreTableTitle = document.querySelector('.score-table__title');
  const scoreTableItem = document.querySelectorAll('.score-table__line-cell');

  const solutionButton = document.querySelector('.solution-button');
  const resetButton = document.querySelector('.menu-window__reset');

  const menuIcon = document.querySelector('.menu-icon').childNodes;

  const buttonMenuWindow = document.querySelector('.menu-window').childNodes;
  const buttonMenuLevels = document.querySelector('.menu-levels').childNodes;
  const modalLevels = document.querySelector('.menu-background').childNodes;
  const menuLevelsEasy = document.querySelector('.menu-levels__easy').childNodes;
  const menuLevelsMiddle = document.querySelector('.menu-levels__middle').childNodes;
  const menuLevelsHard = document.querySelector('.menu-levels__hard').childNodes;

  const gameBoard = document.querySelector('.game-board');
  const emptyCorner = document.querySelector('.empty-corner');
  const cellsClues = document.querySelectorAll('.cell-clues');

  const containerWatch = document.querySelector('.container-watch');

  bodyContainer.style.backgroundImage = 'url("assets/img/background-dark.jpg")';
  bodyContainer.style.backgroundSize = 'cover';

  slider.style.borderColor = 'rgb(112 133 133)';
  sliderButton.style.backgroundColor = 'rgb(112 133 133)';
  lineButton.style.backgroundColor = 'rgb(168 197 197)';

  scoreButton.style.backgroundColor = 'rgb(112, 133, 133)';
  scoreButton.style.color = 'white';
  scoreTable.style.backgroundColor = 'rgb(112, 145, 145)';
  scoreTableTitle.style.color = 'white';
  scoreTableTitle.style.backgroundColor = 'rgb(112, 133, 133)';
  scoreTableItem.forEach((item) => item.style.backgroundColor = 'rgb(112, 133, 133)');
  scoreTableItem.forEach((item) => item.style.border = '1px solid rgb(171 235 235)');
  scoreTableItem.forEach((item) => item.style.color = 'white');

  solutionButton.style.backgroundColor = 'rgb(112, 133, 133)';
  solutionButton.style.color = 'white';
  resetButton.style.backgroundColor = 'rgb(112, 133, 133)';
  resetButton.style.color = 'white';

  menuIcon.forEach((item) => item.style.backgroundColor = 'rgb(171, 235, 235)');

  buttonMenuWindow.forEach((item) => item.style.backgroundColor = 'rgb(112, 133, 133)');
  buttonMenuWindow.forEach((item) => item.style.border = '1px solid rgb(171 235 235)');
  buttonMenuWindow.forEach((item) => item.style.color = 'white');
  buttonMenuLevels.forEach((item) => item.style.backgroundColor = 'rgb(112, 133, 133)');
  buttonMenuLevels.forEach((item) => item.style.border = '1px solid rgb(171 235 235)');
  buttonMenuLevels.forEach((item) => item.style.color = 'white');

  modalLevels.forEach((item) => item.style.backgroundColor = 'rgb(65 79 79)');

  menuLevelsEasy.forEach((item) => item.style.backgroundColor = 'rgb(112, 133, 133)');
  menuLevelsEasy.forEach((item) => item.style.border = '1px solid rgb(171 235 235)');
  menuLevelsEasy.forEach((item) => item.style.color = 'white');

  menuLevelsMiddle.forEach((item) => item.style.backgroundColor = 'rgb(112, 133, 133)');
  menuLevelsMiddle.forEach((item) => item.style.border = '1px solid rgb(171 235 235)');
  menuLevelsMiddle.forEach((item) => item.style.color = 'white');

  menuLevelsHard.forEach((item) => item.style.backgroundColor = 'rgb(112, 133, 133');
  menuLevelsHard.forEach((item) => item.style.border = '1px solid rgb(171 235 235)');
  menuLevelsHard.forEach((item) => item.style.color = 'white');
  
  gameBoard.style.borderColor = 'rgb(171 235 235)';
  emptyCorner.style.background = 'grey';
  cellsClues.forEach((item) => item.style.background = 'grey');
  cellsClues.forEach((item) => item.style.color = '#e7f2ea');

  containerWatch.style.color = '#e7f2ea';

}

function changeLightPage() {

  const bodyContainer = document.querySelector('.body-container');

  const slider = document.querySelector('.change-color');
  const sliderButton = document.querySelector('.change-color__slider');
  const lineButton = document.querySelector('.change-color__line');

  const scoreButton = document.querySelector('.score-button');
  const scoreTable = document.querySelector('.score-table');
  const scoreTableTitle = document.querySelector('.score-table__title');
  const scoreTableItem = document.querySelectorAll('.score-table__line-cell');

  const solutionButton = document.querySelector('.solution-button');
  const resetButton = document.querySelector('.menu-window__reset');

  const menuIcon = document.querySelector('.menu-icon').childNodes;

  const buttonMenuWindow = document.querySelector('.menu-window').childNodes;
  const buttonMenuLevels = document.querySelector('.menu-levels').childNodes;
  const modalLevels = document.querySelector('.menu-background').childNodes;
  const menuLevelsEasy = document.querySelector('.menu-levels__easy').childNodes;
  const menuLevelsMiddle = document.querySelector('.menu-levels__middle').childNodes;
  const menuLevelsHard = document.querySelector('.menu-levels__hard').childNodes;

  const gameBoard = document.querySelector('.game-board');
  const emptyCorner = document.querySelector('.empty-corner');
  const cellsClues = document.querySelectorAll('.cell-clues');

  const containerWatch = document.querySelector('.container-watch');

  bodyContainer.style.backgroundImage = 'url("assets/img/background.jpg")';
  bodyContainer.style.backgroundSize = 'cover';

  slider.style.borderColor = 'rgb(171 235 235)';
  sliderButton.style.backgroundColor = 'rgb(171 235 235)';
  lineButton.style.backgroundColor = 'rgb(93, 125, 125)';

  scoreButton.style.backgroundColor = 'white';
  scoreButton.style.color = '#141111';
  scoreTable.style.backgroundColor = 'rgb(112, 145, 145)';
  scoreTableTitle.style.color = '#141111';
  scoreTableTitle.style.backgroundColor = 'rgb(240, 240, 240)';
  scoreTableItem.forEach((item) => item.style.backgroundColor = 'rgb(240, 240, 240)');
  scoreTableItem.forEach((item) => item.style.border = '1px solid rgb(171, 235, 235)');
  scoreTableItem.forEach((item) => item.style.color = 'rgb(20, 17, 17)');

  solutionButton.style.backgroundColor = 'white';
  solutionButton.style.color = '#141111';

  resetButton.style.backgroundColor = 'white';
  resetButton.style.color = '#141111';

  menuIcon.forEach((item) => item.style.backgroundColor = 'rgb(89 57 23');


  buttonMenuWindow.forEach((item) => item.style.backgroundColor = 'rgb(240, 240, 240)');
  buttonMenuWindow.forEach((item) => item.style.border = '1px solid rgb(171 235 235)');
  buttonMenuWindow.forEach((item) => item.style.color = '#141111');


  buttonMenuLevels.forEach((item) => item.style.backgroundColor = 'rgb(240, 240, 240)');
  buttonMenuLevels.forEach((item) => item.style.border = '1px solid rgb(171 235 235)');
  buttonMenuLevels.forEach((item) => item.style.color = '#141111');

  modalLevels.forEach((item) => item.style.backgroundColor = 'rgb(112 145 145)');

  menuLevelsEasy.forEach((item) => item.style.backgroundColor = 'rgb(240, 240, 240)');
  menuLevelsEasy.forEach((item) => item.style.border = '1px solid rgb(171 235 235)');
  menuLevelsEasy.forEach((item) => item.style.color = '#141111');

  menuLevelsMiddle.forEach((item) => item.style.backgroundColor = 'rgb(240, 240, 240)');
  menuLevelsMiddle.forEach((item) => item.style.border = '1px solid rgb(171 235 235)');
  menuLevelsMiddle.forEach((item) => item.style.color = '#141111');

  menuLevelsHard.forEach((item) => item.style.backgroundColor = 'rgb(240, 240, 240');
  menuLevelsHard.forEach((item) => item.style.border = '1px solid rgb(171 235 235)');
  menuLevelsHard.forEach((item) => item.style.color = '#141111');
  
  gameBoard.style.borderColor = 'rgb(78 119 112)'; 
  emptyCorner.style.background = '#e7f2ea';
  cellsClues.forEach((item) => item.style.background = '#e7f2ea');
  cellsClues.forEach((item) => item.style.color = '#141111');
  
  containerWatch.style.color = '#141111';
}