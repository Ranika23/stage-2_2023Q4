// creat modal
export function creatModal() {
  const modalBackground = document.createElement('div');
  modalBackground.className = 'modal-background';
  modalBackground.classList.add('close');

  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerText = `Great!\n\nYou have solved the nonogram!`;
  modalBackground.append(modal);

  const body = document.querySelector('.body');
  body.prepend(modalBackground);
}

// start modal
export function openModal() {
  const modalBackground = document.querySelector('.modal-background');
  modalBackground.classList.add('open');
  modalBackground.classList.remove('close');
}
