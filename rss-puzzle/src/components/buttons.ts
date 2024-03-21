export function creatButtonContainer() {
  const buttonContainer: HTMLElement | null = document.createElement('div');
  buttonContainer.className = 'game-page__button-container';

  document.querySelector('.main')?.append(buttonContainer);
}

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
  document
    .querySelector('.game-page__button-container')
    ?.append(buttonContinue);
}

export function creatButtonCheck() {
  const buttonCheck: HTMLElement | null = document.createElement('button');
  buttonCheck.className = 'game-page__button-check';
  buttonCheck.innerText = 'Check';
  buttonCheck.setAttribute('disabled', 'true');
  document.querySelector('.game-page__button-container')?.append(buttonCheck);
}

export function creatButtonAutoComplete() {
  const buttonAutoComplete: HTMLElement | null =
    document.createElement('button');
  buttonAutoComplete.className = 'game-page__button-auto-complete';
  buttonAutoComplete.innerText = 'Auto-Complete';
  document
    .querySelector('.game-page__button-container')
    ?.append(buttonAutoComplete);
}
