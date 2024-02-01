export function creatLevelsHardMenu() {
  const menuBackground = document.querySelector('.menu-background');
  const levelsHardMenu = document.createElement('div');
  levelsHardMenu.className = 'menu-levels__hard';
  menuBackground.append(levelsHardMenu);

  for (let i = 0; i < 5; i += 1) {
    if (i === 0) {
      const hardImg = document.createElement('div');
      hardImg.className = 'menu-levels__title';
      hardImg.innerText = `Hard level 15x15`;
      levelsHardMenu.append(hardImg);
    }
    const arrTitleImg = ['Duck', 'Mouse', 'House', 'Lizard', 'Keys']
    const hardImg = document.createElement('button');
    hardImg.className = 'menu-levels__img';
    hardImg.classList.add(`${i + 1}`);
    hardImg.innerText = `${arrTitleImg[i]}`;
    levelsHardMenu.append(hardImg);
  }

  menuBackground.prepend(levelsHardMenu);
}

// start modal
export function openHardLevelsMenu() {
  const menuBackground = document.querySelector('.menu-background');
  const menuHardLevels = document.querySelector('.menu-levels__hard');

  menuHardLevels.style.opacity = '1';
  menuHardLevels.style.zIndex = '99999';
  menuHardLevels.style.display = 'flex';
  menuBackground.classList.add('open');
  menuBackground.classList.remove('close');
}
export function closeHardLevelsMenu() {
  const menuBackground = document.querySelector('.menu-background');
  const menuHardLevels = document.querySelector('.menu-levels__hard');
  const menuButton = document.querySelector('.menu-icon');
  
  menuButton.style.opacity = '1';

  menuHardLevels.style.opacity = '0';
  menuHardLevels.style.zIndex = '9';
  menuHardLevels.style.display = 'none';
  menuBackground.classList.add('close');
  menuBackground.classList.remove('open');
}