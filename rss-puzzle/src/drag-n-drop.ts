import { getLevelLocalStorage } from './local-storage';
import { checkFullFill } from './button-actions/continue';
import { clickContinua } from './button-actions/continue';

export function drapPuzzleInResult() {
  const blockInitialData: Element | null = document.querySelector(
    '.game-page__block-initial-data',
  );

  if (blockInitialData === null) throw Error;

  for (const puzzle of blockInitialData.children) {
    puzzle.addEventListener('mouseover', dragPuzzle);
  }

  function dragPuzzle(e: Event) {
    e.stopPropagation();
    const puzzle = e.target as HTMLCanvasElement;

    function dragStart() {
      const blockResult: HTMLElement | null = document.querySelector(
        '.game-page__block-result',
      );
      puzzle.classList.add('hold');

      if (blockResult === null) throw Error;
      blockResult.addEventListener('dragenter', dragEnter);
      blockResult.addEventListener('dragleave', dragLeave);
      blockResult.addEventListener('dragover', dragOver);
      blockResult.addEventListener('drop', drop, { once: true });

      function dragEnter(e: Event) {
        e.preventDefault();
        blockResult?.classList.add('hover');
      }

      function dragLeave() {
        blockResult?.classList.remove('hover');
      }

      function dragOver(e: Event) {
        e.preventDefault();
      }
      if (getLevelLocalStorage() === undefined) throw Error;
      const arrLocal = getLevelLocalStorage();
      if (arrLocal === undefined) throw Error;
      const row = arrLocal[1];

      function drop() {
        if (blockInitialData === null) throw Error;
        blockResult?.children[row].append(puzzle);
        checkFullFill();
      }
    }

    function dragEnd() {
      puzzle.classList.remove('hold');
      drapPuzzleFromResult();
    }

    puzzle.addEventListener('dragstart', dragStart);
    puzzle.addEventListener('dragend', dragEnd);
  }

  clickContinua();
}

export function drapPuzzleFromResult() {
  if (getLevelLocalStorage() === undefined) throw Error;
  const arrLocal = getLevelLocalStorage();
  if (arrLocal === undefined) throw Error;
  let row = arrLocal[1];
  const blockResult: Element | undefined = document.querySelector(
    '.game-page__block-result',
  )?.children[row];

  if (blockResult === undefined) throw Error;

  for (const puzzle of blockResult.children) {
    puzzle.addEventListener('mouseover', dragPuzzle);
  }

  function dragPuzzle(e: Event) {
    e.stopPropagation();
    const puzzle = e.target as HTMLCanvasElement;

    if (getLevelLocalStorage() === undefined) throw Error;
    const arrLocal = getLevelLocalStorage();
    if (arrLocal === undefined) throw Error;
    row = arrLocal[1];
    if (puzzle.parentElement?.classList[1] === String(row)) {
      function dragStart() {
        const blockInitialData: Element | null = document.querySelector(
          '.game-page__block-initial-data',
        );

        puzzle.classList.add('hold');

        if (blockInitialData === null) throw Error;
        blockInitialData.addEventListener('dragenter', dragEnter);
        blockInitialData.addEventListener('dragleave', dragLeave);
        blockInitialData.addEventListener('dragover', dragOver);
        blockInitialData.addEventListener('drop', drop, { once: true });

        function dragEnter(e: Event) {
          e.preventDefault();

          blockInitialData?.classList.add('hover');
        }

        function dragLeave() {
          blockResult?.classList.remove('hover');
          blockInitialData?.classList.remove('hover');
        }

        function dragOver(e: Event) {
          e.preventDefault();
        }

        function drop() {
          if (blockInitialData === null) throw Error;
          blockInitialData.append(puzzle);

          checkFullFill();
        }
      }

      function dragEnd() {
        puzzle.classList.remove('hold');
      }

      puzzle.addEventListener('dragstart', dragStart);
      puzzle.addEventListener('dragend', dragEnd, { once: true });
    }
  }

  clickContinua();
}
