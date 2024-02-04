// creat modal
export function creatLevelsMenu(bodyContainer) {

  const levelsMenu = document.createElement('div');
  levelsMenu.className = 'menu-levels';
  levelsMenu.classList.add('close');
  bodyContainer.append(levelsMenu);

  const buttonLevel_1 = document.createElement('button');
  buttonLevel_1.className = 'menu-levels__button';
  buttonLevel_1.innerText = `EASY`;
  levelsMenu.append(buttonLevel_1);

  const buttonLevel_2 = document.createElement('button');
  buttonLevel_2.className = 'menu-levels__button';
  buttonLevel_2.innerText = `MIDDLE`;
  levelsMenu.append(buttonLevel_2);

  const buttonLevel_3 = document.createElement('button');
  buttonLevel_3.className = 'menu-levels__button';
  buttonLevel_3.innerText = `HARD`;
  levelsMenu.append(buttonLevel_3);

}

// start modal
export function openLevelsMenu() {
  const menuLevels = document.querySelector('.menu-levels');
  menuLevels.classList.toggle('open');
  menuLevels.classList.toggle('close');
}
export function closeLevelsMenu() {
  const menuLevels = document.querySelector('.menu-levels');
  menuLevels.classList.add('close');
  menuLevels.classList.remove('open');
}