export function addButtonMenu(bodyContainer) {
  const gameBoard = document.createElement('div');
  gameBoard.className = 'menu-icon';
  bodyContainer.prepend(gameBoard);
}

// creat modal
export function creatMenu(bodyContainer) {


  const menuWindow = document.createElement('div');
  menuWindow.className = 'menu-window';
  menuWindow.classList.add('close');

  const menuLevel = document.createElement('button');
  menuLevel.className = 'menu-window__levels';
  menuLevel.innerText = `Levels`;
  menuWindow.append(menuLevel);

  const menuReset = document.createElement('button');
  menuReset.className = 'menu-window__reset';
  menuReset.innerText = `Reset Game`;
  menuReset.setAttribute("disabled", "disabled");
  menuWindow.append(menuReset);

  bodyContainer.prepend(menuWindow);
}

// start modal
export function openMenu() {
  const menuWindow = document.querySelector('.menu-window');
  menuWindow.classList.toggle('open');
  menuWindow.classList.toggle('close');
}
export function closeMenu() {
  const menuWindow = document.querySelector('.menu-window');
  menuWindow.classList.add('close');
  menuWindow.classList.remove('open');
}