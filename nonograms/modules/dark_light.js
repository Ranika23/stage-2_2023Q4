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

  const solutionButton = document.querySelector('.solution-button');

  const menuIcon = document.querySelector('.menu-icon');

  //const menuWindow = document.querySelector('.menu-window');
  const buttonMenuWindow = document.querySelector('.menu-window').childNodes;
  //const menuLevels = document.querySelector('.menu-levels');
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
  scoreTable.style.backgroundColor = 'rgb(112, 133, 133)';
  scoreTable.style.color = 'white';

  solutionButton.style.backgroundColor = 'rgb(112, 133, 133)';
  solutionButton.style.color = 'white';

  menuIcon.style.backgroundImage = "url('assets/img/menu-black.png')";

  //menuWindow.style.backgroundColor = 'rgb(115 108 102)';
  buttonMenuWindow.forEach((item) => item.style.backgroundColor = 'rgb(197 187 178)');
  //menuLevels.style.backgroundColor = 'rgb(115 108 102)';
  buttonMenuLevels.forEach((item) => item.style.backgroundColor = 'rgb(197 187 178)');
  modalLevels.forEach((item) => item.style.backgroundColor = 'rgb(127 118 112)');
  menuLevelsEasy.forEach((item) => item.style.backgroundColor = '#514c48');
  menuLevelsMiddle.forEach((item) => item.style.backgroundColor = '#514c48');
  menuLevelsHard.forEach((item) => item.style.backgroundColor = '#514c48');
  menuLevelsEasy.forEach((item) => item.style.color = '#e7f2ea');
  menuLevelsMiddle.forEach((item) => item.style.color = '#e7f2ea');
  menuLevelsHard.forEach((item) => item.style.color = '#e7f2ea');
  
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

  const solutionButton = document.querySelector('.solution-button');

  const menuIcon = document.querySelector('.menu-icon');

  //const menuWindow = document.querySelector('.menu-window');
  const buttonMenuWindow = document.querySelector('.menu-window').childNodes;
  //const menuLevels = document.querySelector('.menu-levels');
  const buttonMenuLevels = document.querySelector('.menu-levels').childNodes;
  const modalLevels = document.querySelector('.menu-background').childNodes;
  const menuLevelsEasy = document.querySelector('.menu-levels__easy').childNodes;
  const menuLevelsMiddle = document.querySelector('.menu-levels__middle').childNodes;
  const menuLevelsHard = document.querySelector('.menu-levels__hard').childNodes;

  const gameBoard = document.querySelector('.game-board');
  const emptyCorner = document.querySelector('.empty-corner');
  const cellsClues = document.querySelectorAll('.cell-clues');

  const containerWatch = document.querySelector('.container-watch');


  //bodyContainer.style.background = '#d8ffe0';
  bodyContainer.style.backgroundImage = 'url("assets/img/background.jpg")';
  bodyContainer.style.backgroundSize = 'cover';

  slider.style.borderColor = 'rgb(171 235 235)';
  sliderButton.style.backgroundColor = 'rgb(171 235 235)';
  lineButton.style.backgroundColor = 'rgb(93, 125, 125)';

  scoreButton.style.backgroundColor = 'white';
  scoreButton.style.color = 'black';
  scoreTable.style.backgroundColor = '#e1d4c9';
  scoreTable.style.color = 'rgb(57, 57, 57)';

  solutionButton.style.backgroundColor = 'white';
  solutionButton.style.color = 'black';

  menuIcon.style.backgroundImage = "url('assets/img/menu.png')";

  //menuWindow.style.backgroundColor = 'none';
  buttonMenuWindow.forEach((item) => item.style.backgroundColor = 'rgb(240, 240, 240)');
  //menuLevels.style.backgroundColor = '#e1d4c9';
  buttonMenuLevels.forEach((item) => item.style.backgroundColor = 'rgb(240, 240, 240)');
  modalLevels.forEach((item) => item.style.backgroundColor = '#e1d4c9');
  menuLevelsEasy.forEach((item) => item.style.backgroundColor = 'rgb(240, 240, 240)');
  menuLevelsMiddle.forEach((item) => item.style.backgroundColor = 'rgb(240, 240, 240)');
  menuLevelsHard.forEach((item) => item.style.backgroundColor = 'rgb(240, 240, 240)');
  menuLevelsEasy.forEach((item) => item.style.color = 'black');
  menuLevelsMiddle.forEach((item) => item.style.color = 'black');
  menuLevelsHard.forEach((item) => item.style.color = 'black');
  
  gameBoard.style.borderColor = 'rgb(78 119 112)'; 
  emptyCorner.style.background = '#e7f2ea';
  cellsClues.forEach((item) => item.style.background = '#e7f2ea');
  cellsClues.forEach((item) => item.style.color = 'black');
  
  containerWatch.style.color = 'black';
}