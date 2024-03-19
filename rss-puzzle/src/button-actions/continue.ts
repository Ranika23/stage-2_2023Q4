import { creatBlockInitialData } from '../components/block-initial-data';
import {
  getLevelLocalStorage,
  getNextSentence,
  saveLevelLocalStorage,
} from '../local-storage';
import { moveToResultBlock } from '../event';
import { moveFromResultBlock } from '../event';
import { changeColorPuzzleResult, changeColorPuzzleInitial } from './check';

import { checkOrderWord } from './check';

export function checkFullFill() {
  const dataLevel = getLevelLocalStorage();
  const originalSentence = getNextSentence() as Array<Array<string>>;

  if (dataLevel === undefined) throw Error('Element is undefined');
  const blockResult: Element | undefined = document.querySelector(
    '.game-page__block-result',
  )?.children[dataLevel[1]];

  const buttonContinue: HTMLButtonElement | null = document.querySelector(
    '.game-page__button-continue',
  );
  const buttonCheck: HTMLButtonElement | null = document.querySelector(
    '.game-page__button-check',
  );

  if (blockResult?.children.length === originalSentence[0].length) {
    if (buttonContinue !== null && buttonCheck !== null) {
      buttonCheck.disabled = false;
      const finalSentence: string[] = [];
      for (let i = 0; i < blockResult?.children.length; i++) {
        finalSentence.push(blockResult?.children[i].classList[1]);
        console.log(blockResult.children);
        const rowBlockResult: HTMLCollection = blockResult.children;
        if (
          JSON.stringify(finalSentence) == JSON.stringify(originalSentence[0])
        ) {
          buttonContinue.disabled = false;
        } else {
          function check() {
            checkOrderWord(rowBlockResult, originalSentence[0]);

            blockResult?.addEventListener('click', (e) => {
              const sentence = getNextSentence() as string[][];
              const dataLevel = getLevelLocalStorage();
              const blockInitialData: HTMLElement | null =
                document.querySelector('.game-page__block-initial-data');
              if (dataLevel === undefined || blockInitialData === null)
                throw Error('Element is undefined');
              if (buttonContinue !== null) buttonContinue.disabled = true;
              if (buttonCheck !== null) buttonCheck.disabled = true;

              const puzzle = e.target as HTMLElement;

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
              /* if (
                dataLevel !== undefined &&
                puzzle?.parentElement?.classList[1] !== undefined
              ) {
                if (
                  puzzle?.parentElement?.classList[1] === String(dataLevel[1])
                ) {
                  const blockInitialData: HTMLElement | null =
                    document.querySelector('.game-page__block-initial-data');
                  if (blockInitialData === null)
                    throw Error('Element is Error');
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
              }*/
              buttonCheck?.removeEventListener('click', check);
            });
          }
          buttonCheck?.addEventListener('click', check);
        }
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
    const Sentence = getNextSentence() as Array<Array<string>>;
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
    ) {
      if (dataLevel[1] === 9) {
        saveLevelLocalStorage(dataLevel[0] + 1, 0);
        creatBlockInitialData(dataLevel[0] + 1, 0, Sentence[1]);
        buttonContinue.disabled = true;
        if (dataLevel !== undefined) moveToResultBlock(0);
        if (dataLevel !== undefined) moveFromResultBlock();
      } else {
        saveLevelLocalStorage(dataLevel[0], dataLevel[1] + 1);
        creatBlockInitialData(dataLevel[0], dataLevel[1] + 1, Sentence[1]);
        buttonContinue.disabled = true;
        if (dataLevel !== undefined) moveToResultBlock(dataLevel[1] + 1);
        if (dataLevel !== undefined) moveFromResultBlock();
      }
    }
  });
}
