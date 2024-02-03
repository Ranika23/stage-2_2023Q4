// creat modal
export function creatModal() {
  const modalBackground = document.createElement('div');
  modalBackground.className = 'modal-background';
  modalBackground.classList.add('close');

  const modal = document.createElement('div');
  modal.className = 'modal';

  const watchInner = document.querySelector('.container-watch').innerText;
  const timeGame = Number(watchInner.slice(0,3)) * 60 + Number(watchInner.slice(5));
  modal.innerText = `Great!\n\nYou have solved the nonogram in ${timeGame} seconds!`;
  modalBackground.append(modal);

  const body = document.querySelector('.body');
  body.prepend(modalBackground);

  return timeGame;
}

// start modal
export function openModal() {
  const modalBackground = document.querySelector('.modal-background');
  modalBackground.classList.add('open');
  modalBackground.classList.remove('close');
}
