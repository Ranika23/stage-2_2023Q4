export function creatButtonLogOut() {
  const buttonLogOut: HTMLElement | null = document.createElement('button');
  buttonLogOut.className = 'game-page__button-logout';
  buttonLogOut.innerText = 'Logout';

  document.querySelector('.header')?.prepend(buttonLogOut);
}

export function creatButtonContinue() {
  const buttonContinue: HTMLElement | null = document.createElement('button');
  buttonContinue.className = 'game-page__button-continue';
  buttonContinue.innerText = 'Continue';
  buttonContinue.setAttribute('disabled', 'true');
  document.querySelector('.main')?.append(buttonContinue);
}
