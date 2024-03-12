export function creatButtonLogOut() {
  const buttonLogOut: HTMLElement | null = document.createElement('button');
  buttonLogOut.className = 'game-page__button-logout';
  buttonLogOut.innerText = 'Logout';

  document.querySelector('.header')?.prepend(buttonLogOut);
}
