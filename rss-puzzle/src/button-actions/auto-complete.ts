import { getLevelLocalStorage, getNextSentence } from '../local-storage';
import { closeButtonCheck } from '../button-actions/check';
import { openButtonContinue } from '../button-actions/continue';

export function clickAutoComplete() {
  const buttonAutoComplete: HTMLElement | null = document.querySelector(
    '.game-page__button-auto-complete',
  );
  if (buttonAutoComplete === null) throw Error;

  function clickOne() {
    if (buttonAutoComplete !== null) {
      buttonAutoComplete.style.background = '#86b386';
      buttonAutoComplete.style.color = 'white';
      buttonAutoComplete.addEventListener('click', clickTwo);
    }
  }

  function clickTwo() {
    if (buttonAutoComplete !== null) {
      buttonAutoComplete.style.background = 'white';
      buttonAutoComplete.style.color = '#bbbab3';
      buttonAutoComplete.setAttribute('disabled', '');

      movePuzzle();
      closeButtonCheck();
      openButtonContinue();

      buttonAutoComplete.removeEventListener('click', clickOne);
      buttonAutoComplete.removeEventListener('click', clickTwo);
    }
  }
  buttonAutoComplete.addEventListener('click', clickOne);
}

function movePuzzle() {
  const arr = getLevelLocalStorage() as number[];
  if (arr === undefined && getLevelLocalStorage() === undefined) throw Error;
  const row = arr[1];

  const originalSentence = getNextSentence() as Array<Array<string>>;
  const blockInitialData: Element | null = document.querySelector(
    '.game-page__block-initial-data',
  );
  const blockResult: Element | undefined = document.querySelector(
    '.game-page__block-result',
  )?.children[row];

  if (blockResult === undefined || blockInitialData === null) throw Error;

  movefromResult(blockResult, blockInitialData);
  moveInResult(blockInitialData, originalSentence, blockResult);
}

function movefromResult(
  blockResult: Element | undefined,
  blockInitialData: Element | null,
) {
  if (blockResult === undefined) throw Error;
  for (const elem of blockResult.children) {
    const puzzle = elem as HTMLCanvasElement;
    blockInitialData?.append(puzzle);
  }
  if (blockResult.children.length > 0)
    movefromResult(blockResult, blockInitialData);
}

function moveInResult(
  blockInitialData: Element | null,
  originalSentence: Array<Array<string>>,
  blockResult: Element | undefined,
) {
  if (blockInitialData === null) throw Error;
  for (let i = 0; i < originalSentence[0].length; i += 1) {
    const originalWord = originalSentence[0][i];
    for (const elem of blockInitialData.children) {
      if (originalWord === elem.classList[1]) {
        const puzzle = elem as HTMLCanvasElement;
        blockResult?.append(puzzle);
        break;
      }
    }
  }
}

export function enabledButtonAutoComplete() {
  const buttonAutoComplete: HTMLButtonElement | null = document.querySelector(
    '.game-page__button-auto-complete',
  );
  if (buttonAutoComplete === null) throw Error;
  buttonAutoComplete.disabled = false;
}
