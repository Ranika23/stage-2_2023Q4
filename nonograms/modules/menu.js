export function addButtonMenu(bodyContainer) {
  const gameBoard = document.createElement('div');
  gameBoard.className = 'menu-icon';
  bodyContainer.prepend(gameBoard);
}

// creat modal
export function creatMenu() {
  const menuBackground = document.createElement('div');
  menuBackground.className = 'menu-background';
  menuBackground.classList.add('close');

  const menuWindow = document.createElement('div');
  menuWindow.className = 'menu-window';
  //menuWindow.innerText = `Great!\n\nYou have solved the nonogram!`;
  menuBackground.append(menuWindow);

  const menuLevel = document.createElement('button');
  menuLevel.className = 'menu-window__levels';
  menuLevel.innerText = `Levels`;
  menuWindow.append(menuLevel);


  const body = document.querySelector('.body');
  body.prepend(menuBackground);
}

// start modal
export function openMenu() {
  const menuBackground = document.querySelector('.menu-background');
  const menuButton = document.querySelector('.menu-icon');
  const menuWindow = document.querySelector('.menu-window');
  menuButton.style.opacity = '0';
  menuBackground.classList.add('open');
  menuBackground.classList.remove('close');

  menuWindow.style.opacity = '1';
  menuWindow.style.zIndex = '99999';
}
export function closeMenu() {
  const menuBackground = document.querySelector('.menu-background');
  const menuButton = document.querySelector('.menu-icon');
  menuBackground.classList.add('close');
  menuBackground.classList.remove('open');
  menuButton.style.opacity = '1';
}