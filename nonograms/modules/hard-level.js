export function creatLevelsHardMenu() {
  const menuBackground = document.querySelector('.menu-background');
  const levelsHardMenu = document.createElement('div');
  levelsHardMenu.className = 'menu-levels__hard';
  menuBackground.append(levelsHardMenu);

  for (let i = 0; i <= 5; i += 1) {
    if (i === 0) {
      const easyImg = document.createElement('div');
      easyImg.className = 'menu-levels__title';
      easyImg.innerText = `Hard level 5x5`;
      levelsHardMenu.append(easyImg);
    }
    const easyImg = document.createElement('div');
    easyImg.className = 'menu-levels__img';
    easyImg.innerText = `???`;
    levelsHardMenu.append(easyImg);
  }

  menuBackground.prepend(levelsHardMenu);
}

// start modal
export function openHardLevelsMenu() {
  const menuBackground = document.querySelector('.menu-background');
  const menuHardLevels = document.querySelector('.menu-levels__hard');

  menuHardLevels.style.opacity = '1';
  menuHardLevels.style.zIndex = '99999';
  menuBackground.classList.add('open');
  menuBackground.classList.remove('close');
}
export function closeHardLevelsMenu() {
  const menuBackground = document.querySelector('.menu-background');
  const menuHardLevels = document.querySelector('.menu-levels__easy');
  const menuButton = document.querySelector('.menu-icon');
  
  menuButton.style.opacity = '1';

  menuHardLevels.style.opacity = '0';
  menuHardLevels.style.zIndex = '9';
  menuBackground.classList.add('close');
  menuBackground.classList.remove('open');
}