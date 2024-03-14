import { sentence } from '../data';
import { creatBlockInitialData } from '../components/block-initial-data';
import { getLevelLocalStorage } from '../local-storage';
import { moveToResultBlock } from '../event';
import { moveFromResultBlock } from '../event';

//const rounds: number = 0;
//const words: number = 0;
//const originalSentence = sentence(rounds, words);

export function checkFullFill() {
  const dataLevel = getLevelLocalStorage();
  let originalSentence;
  if (dataLevel !== undefined) {
    originalSentence = sentence(dataLevel[0], dataLevel[1]);
  } else originalSentence = sentence(0, 0);

  if (dataLevel === undefined) throw Error('Element is undefined');
  const blockResult: Element | undefined = document.querySelector(
    '.game-page__block-result',
  )?.children[dataLevel[1]];

  const buttonContinue: HTMLButtonElement | null = document.querySelector(
    '.game-page__button-continue',
  );

  if (blockResult?.children.length === originalSentence.length) {
    if (buttonContinue !== null) {
      const finalSentence: string[] = [];
      for (let i = 0; i < blockResult?.children.length; i++) {
        finalSentence.push(blockResult?.children[i].classList[1]);
        if (JSON.stringify(finalSentence) == JSON.stringify(originalSentence))
          buttonContinue.disabled = false;
      }
    }
  }
}

export function clickContinua() {
  const buttonContinue: HTMLButtonElement | null = document.querySelector(
    '.game-page__button-continue',
  );
  const blockInitialData: HTMLElement | null = document.querySelector(
    '.game-page__block-initial-data',
  );

  buttonContinue?.addEventListener('click', () => {
    const dataLevel = getLevelLocalStorage();

    const blockResult: NodeListOf<Element> | undefined =
      document.querySelectorAll('.game-page__row-block-result');

    if (blockResult !== undefined && blockResult[9].children.length > 0) {
      for (let i = 0; i < blockResult.length; i++) {
        blockResult[i].innerHTML = '';
      }
    }

    if (
      dataLevel !== undefined &&
      blockInitialData !== null &&
      buttonContinue.disabled === false
    )
      creatBlockInitialData(dataLevel[0], dataLevel[1] + 1);
    buttonContinue.disabled = true;
    if (dataLevel !== undefined) moveToResultBlock(dataLevel[1] + 1);
    if (dataLevel !== undefined) moveFromResultBlock();
  });
}
