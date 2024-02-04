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
  menuLevel.innerText = `LEVELS`;
  menuWindow.append(menuLevel);

  const menuReset = document.createElement('button');
  menuReset.className = 'menu-window__reset';
  menuReset.innerText = `RESET GAME`;
  menuReset.setAttribute("disabled", "disabled");
  menuWindow.append(menuReset);

  const menuSaveGame = document.createElement('button');
  menuSaveGame.className = 'menu-window__save';
  menuSaveGame.innerText = `SAVE GAME`;
  menuSaveGame.setAttribute("disabled", "disabled");
  menuWindow.append(menuSaveGame);

  const menuLastGame = document.createElement('button');
  menuLastGame.className = 'menu-window__last-game';
  menuLastGame.innerText = `CONTINUE LAST GAME`;
  menuLastGame.setAttribute("disabled", "disabled");
  menuWindow.append(menuLastGame);

  const randomGame = document.createElement('button');
  randomGame.className = 'menu-window__random-game';
  randomGame.innerText = `RANDOM GAME`;
  menuWindow.append(randomGame);

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