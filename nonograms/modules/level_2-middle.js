export function creatLevelsMiddleMenu() {
  const menuBackground = document.querySelector('.menu-background');
  const levelsMiddleMenu = document.createElement('div');
  levelsMiddleMenu.className = 'menu-levels__middle';
  menuBackground.append(levelsMiddleMenu);

  for (let i = 0; i <= 5; i += 1) {
    if (i === 0) {
      const middleImg = document.createElement('div');
      middleImg.className = 'menu-levels__title';
      middleImg.innerText = `Middle level 5x5`;
      levelsMiddleMenu.append(middleImg);
    }
    const middleImg = document.createElement('div');
    middleImg.className = 'menu-levels__img';
    middleImg.innerText = `???`;
    levelsMiddleMenu.append(middleImg);
  }

  menuBackground.prepend(levelsMiddleMenu);
}

// start modal
export function openMiddleLevelsMenu() {
  const menuBackground = document.querySelector('.menu-background');
  const menuMiddleLevels = document.querySelector('.menu-levels__middle');

  menuMiddleLevels.style.opacity = '1';
  menuMiddleLevels.style.zIndex = '99999';
  menuMiddleLevels.style.display = 'flex';
  menuBackground.classList.add('open');
  menuBackground.classList.remove('close');
}
export function closeMiddleLevelsMenu() {
  const menuBackground = document.querySelector('.menu-background');
  const menuMiddleLevels = document.querySelector('.menu-levels__middle');
  const menuButton = document.querySelector('.menu-icon');
  
  menuButton.style.opacity = '1';

  menuMiddleLevels.style.opacity = '0';
  menuMiddleLevels.style.zIndex = '9';
  menuMiddleLevels.style.display = 'none';
  menuBackground.classList.add('close');
  menuBackground.classList.remove('open');
}