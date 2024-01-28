export function creatLevelsEasyMenu() {
  const menuBackground = document.querySelector('.menu-background');
  const levelsEasyMenu = document.createElement('div');
  levelsEasyMenu.className = 'menu-levels__easy';
  menuBackground.append(levelsEasyMenu);

  for (let i = 0; i <= 5; i += 1) {
    if (i === 0) {
      const easyImg = document.createElement('div');
      easyImg.className = 'menu-levels__title';
      easyImg.innerText = `Easy level 5x5`;
      levelsEasyMenu.append(easyImg);
    }
    const easyImg = document.createElement('div');
    easyImg.className = 'menu-levels__img';
    easyImg.innerText = `???`;
    levelsEasyMenu.append(easyImg);
  }

  menuBackground.prepend(levelsEasyMenu);
}

// start modal
export function openEasyLevelsMenu() {
  const menuBackground = document.querySelector('.menu-background');
  const menuEasyLevels = document.querySelector('.menu-levels__easy');

  menuEasyLevels.style.opacity = '1';
  menuEasyLevels.style.zIndex = '99999';
  menuBackground.classList.add('open');
  menuBackground.classList.remove('close');
}
export function closeLevelsMenu() {
  const menuBackground = document.querySelector('.menu-background');
  const menuEasyLevels = document.querySelector('.menu-levels__easy');
  const menuButton = document.querySelector('.menu-icon');
  
  menuButton.style.opacity = '1';

  menuEasyLevels.style.opacity = '0';
  menuEasyLevels.style.zIndex = '9';
  menuBackground.classList.add('close');
  menuBackground.classList.remove('open');
}