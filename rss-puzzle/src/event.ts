import {
  saveUserLocalStorage,
  getLevelLocalStorage,
  getNextSentence,
} from './local-storage';
import { createStartPage } from './components/start-page';
import { checkFullFill, clickContinua } from './button-actions/continue';
import {
  changeColorPuzzleResult,
  changeColorPuzzleInitial,
} from './button-actions/check';

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
      alert(
        `Проект находится на стадии разработки. 
        
        Уважаемый проверяющий, если у тебя есть возможность перенести время проверки моей работы на 21 марта, это очень поможет мне в достижении поставленной цели.
        
        Так или иначе, спасибо за инициативу в вопросе проверки моей работы!`,
      );
    });
  }
}

export function moveToResultBlock(row: number) {
  const buttonContinue: HTMLButtonElement | null = document.querySelector(
    '.game-page__button-continue',
  );
  const buttonCheck: HTMLButtonElement | null = document.querySelector(
    '.game-page__button-check',
  );
  if (buttonContinue !== null) buttonContinue.disabled = true;
  if (buttonCheck !== null) buttonCheck.disabled = true;
  const blockInitialData: HTMLElement | null = document.querySelector(
    '.game-page__block-initial-data',
  );
  const blockResult: Element | undefined = document.querySelector(
    '.game-page__block-result',
  )?.children[row];
  blockInitialData?.addEventListener('click', (e) => {
    const puzzle = e.target as HTMLElement;
    if (puzzle?.parentElement === blockInitialData) blockResult?.append(puzzle);

    checkFullFill();
  });
  clickContinua();
}

export function moveFromResultBlock() {
  const sentence = getNextSentence() as string[][];
  let dataLevel = getLevelLocalStorage();
  if (dataLevel === undefined) dataLevel = [0, 0];
  const blockResult: Element | undefined = document.querySelector(
    '.game-page__block-result',
  )?.children[dataLevel[1]];
  const buttonContinue: HTMLButtonElement | null = document.querySelector(
    '.game-page__button-continue',
  );
  const buttonCheck: HTMLButtonElement | null = document.querySelector(
    '.game-page__button-check',
  );

  blockResult?.addEventListener('click', (e) => {
    const dataLevel = getLevelLocalStorage();
    if (dataLevel === undefined) throw Error('Element is undefined');
    if (buttonContinue !== null) buttonContinue.disabled = true;
    if (buttonCheck !== null) buttonCheck.disabled = true;

    const puzzle = e.target as HTMLElement;
    if (
      dataLevel !== undefined &&
      puzzle?.parentElement?.classList[1] !== undefined
    ) {
      if (puzzle?.parentElement?.classList[1] === String(dataLevel[1])) {
        const blockInitialData: HTMLElement | null = document.querySelector(
          '.game-page__block-initial-data',
        );
        if (blockInitialData === null) throw Error('Element is Error');
        blockInitialData?.append(puzzle);
        buttonCheck?.addEventListener('click', () => {
          changeColorPuzzleResult(
            blockResult,
            Number(puzzle.classList[2]),
            sentence,
          );
          changeColorPuzzleInitial(
            blockInitialData,
            Number(puzzle.classList[2]),
            sentence,
          );
        });
      }
    }
  });
}
