// creat modal
export function creatModal() {
  const modalBackground = document.createElement('div');
  modalBackground.className = 'modal-background';
  modalBackground.classList.add('close');

  const modal = document.createElement('div');
  modal.className = 'modal';

  const watchInner = document.querySelector('.container-watch').innerText;
  const timeGame = Number(watchInner.slice(0, 3)) * 60 + Number(watchInner.slice(5));
  modal.innerText = `Great!\n\nYou have solved the nonogram in ${timeGame} seconds!`;
  modalBackground.append(modal);

  const body = document.querySelector('.body');
  body.prepend(modalBackground);

  return timeGame;
}

// start modal
export function openModal() {
  const modalBackground = document.querySelector('.modal-background');
  const modal = document.querySelector('.modal');
  const choiceColor = document.querySelector('.change-color');
  modalBackground.classList.add('open');
  modalBackground.classList.remove('close');
  if (choiceColor.classList.contains('open-dark')) {
    modal.style.backgroundColor = 'rgb(112, 133, 133)';
    modal.style.border = '1px solid rgb(171 235 235)';
    modal.style.color = 'white';
  } else {
    modal.style.backgroundColor = 'rgb(240, 240, 240)';
    modal.style.border = '1px solid rgb(171 235 235)';
    modal.style.color = '#141111';
  }

}
export function closeModal() {
  const modalBackground = document.querySelector('.modal-background');
  modalBackground.classList.remove('open');
  modalBackground.classList.add('close');
}
