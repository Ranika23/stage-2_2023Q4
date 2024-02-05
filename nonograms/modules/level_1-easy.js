export function creatLevelsEasyMenu() {
  const menuBackground = document.querySelector('.menu-background');


  const levelsEasyMenu = document.createElement('div');
  levelsEasyMenu.className = 'menu-levels__easy';
  menuBackground.append(levelsEasyMenu);

  for (let i = 0; i < 5; i += 1) {
    if (i === 0) {
      const easyImg = document.createElement('div');
      easyImg.className = 'menu-levels__title';
      easyImg.innerText = `Easy level 5x5`;
      levelsEasyMenu.append(easyImg);
    }
    const arrTitleImg = ['TOWER', 'SNAKE', 'FLAG', 'SHURIKEN', 'RUNE']
    const easyImg = document.createElement('button');
    easyImg.className = 'menu-levels__img';
    easyImg.classList.add(`${i + 1}`);
    easyImg.classList.add(`${arrTitleImg[i]}`);
    easyImg.innerText = `${arrTitleImg[i]}`;
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
  menuEasyLevels.style.display = 'flex';
  menuBackground.classList.add('open');
  menuBackground.classList.remove('close');
}
export function closeEasyLevelsMenu() {
  const menuBackground = document.querySelector('.menu-background');
  const menuEasyLevels = document.querySelector('.menu-levels__easy');
  const menuButton = document.querySelector('.menu-icon');

  menuButton.style.opacity = '1';

  menuEasyLevels.style.opacity = '0';
  menuEasyLevels.style.zIndex = '9';
  menuEasyLevels.style.display = 'none';
  menuBackground.classList.add('close');
  menuBackground.classList.remove('open');
}