export function addButtonMenu(bodyContainer) {
  const menuIcon = document.createElement('div');
  menuIcon.className = 'menu-icon';
  bodyContainer.prepend(menuIcon);

  const line1 = document.createElement('span');
  line1.className = 'menu-icon__line1';
  menuIcon.prepend(line1);
  const line2 = document.createElement('span');
  line2.className = 'menu-icon__line2';
  menuIcon.prepend(line2);
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
  const menuIcon = document.querySelector('.menu-icon');
  menuWindow.classList.toggle('open');
  menuWindow.classList.toggle('close');
  menuIcon.classList.toggle('open');
}
export function closeMenu() {
  const menuWindow = document.querySelector('.menu-window');
  menuWindow.classList.add('close');
  menuWindow.classList.remove('open');
}