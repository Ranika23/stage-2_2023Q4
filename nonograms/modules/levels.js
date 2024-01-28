// creat modal
export function creatLevelsMenu() {
  const menuBackground = document.querySelector('.menu-background');
  const levelsMenu = document.createElement('div');
  levelsMenu.className = 'menu-levels';
  menuBackground.append(levelsMenu);

  const buttonLevel_1 = document.createElement('button');
  buttonLevel_1.className = 'menu-levels__button';
  buttonLevel_1.innerText = `Easy`;
  levelsMenu.append(buttonLevel_1);

  const buttonLevel_2 = document.createElement('button');
  buttonLevel_2.className = 'menu-levels__button';
  buttonLevel_2.innerText = `Middle`;
  levelsMenu.append(buttonLevel_2);

  const buttonLevel_3 = document.createElement('button');
  buttonLevel_3.className = 'menu-levels__button';
  buttonLevel_3.innerText = `Hard`;
  levelsMenu.append(buttonLevel_3);

  menuBackground.prepend(levelsMenu);
}

// start modal
export function openLevelsMenu() {
  const menuBackground = document.querySelector('.menu-background');
  const menuWindow = document.querySelector('.menu-window');
  const menuLevels = document.querySelector('.menu-levels');
  const menuButton = document.querySelector('.menu-icon');
  
  menuButton.style.opacity = '0';

  menuWindow.style.opacity = '0';
  menuWindow.style.zIndex = '9';
  menuLevels.style.opacity = '1';
  menuLevels.style.zIndex = '99999';
  menuBackground.classList.add('open');
  menuBackground.classList.remove('close');
}
export function closeLevelsMenu() {
  const menuBackground = document.querySelector('.menu-background');
  const menuLevels = document.querySelector('.menu-levels');
  //const menuWindow = document.querySelector('.menu-window');
  const menuButton = document.querySelector('.menu-icon');
  
  menuButton.style.opacity = '1';

  //menuWindow.style.opacity = '1';
  //menuWindow.style.zIndex = '99999';
  menuLevels.style.opacity = '0';
  menuLevels.style.zIndex = '9';
  menuBackground.classList.add('close');
  menuBackground.classList.remove('open');
}