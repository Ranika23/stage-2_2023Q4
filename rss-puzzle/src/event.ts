import { saveUserLocalStorage } from './local-storage';

// close Login Form after click button
export function closeLoginForm() {
  const buttonLoginForm: Element | null = document.querySelector(
    '.modal-login-form__button',
  );
  const modalLoginForm: Element | null =
    document.querySelector('.modal-login-form');

  if (buttonLoginForm === null || modalLoginForm === null)
    throw Error('Element is Error');

  modalLoginForm.addEventListener('submit', () => {
    saveUserLocalStorage();
    closeLogin();
  });
}

// check Login Status
export function checkLoginStatus() {
  if (localStorage.getItem('user') !== null) closeLogin();
}

// logoutProcess
export function logoutProcess() {
  const buttonLogOut: Element | null = document.querySelector(
    '.game-page__button-logout',
  );
  if (buttonLogOut === null) throw Error('Element is Error');
  buttonLogOut.addEventListener('click', () => {
    localStorage.clear();
    openLogin();
  });
}

// close_open login Form
function closeLogin() {
  const modalLoginForm: Element | null =
    document.querySelector('.modal-login-form');
  if (modalLoginForm === null) throw Error('Element is Error');
  modalLoginForm.classList.add('close');
}

function openLogin() {
  const modalLoginForm: Element | null =
    document.querySelector('.modal-login-form');
  if (modalLoginForm === null) throw Error('Element is Error');
  modalLoginForm.classList.remove('close');
}
