import { saveUserLocalStorage } from './local-storage';
import { createStartPage } from './components/start-page';

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
    createStartPage();
    closeStartPage();
  });
}

// check Login Status
export function checkLoginStatus() {
  if (localStorage.getItem('user') !== null) {
    closeLogin();
    createStartPage();
    closeStartPage();
  }
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

// close start page
function closeStartPage() {
  const startPage: Element | null = document.querySelector('.start-page');
  if (startPage !== null) {
    const buttonStart: Element | null = document.querySelector(
      '.start-page__button',
    );
    if (buttonStart === null) throw Error('Element is Error');
    buttonStart.addEventListener('click', () => {
      startPage.classList.add('close');
    });
  }
}
