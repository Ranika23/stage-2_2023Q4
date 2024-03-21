//import { getNextSentence } from '../local-storage';
export function openButtonCheck() {
  const buttonCheck: HTMLButtonElement | null = document.querySelector(
    '.game-page__button-check',
  );
  if (buttonCheck !== null) {
    buttonCheck.style.opacity = '1';
    buttonCheck.style.zIndex = '99';
  }
}

export function closeButtonCheck() {
  const buttonCheck: HTMLButtonElement | null = document.querySelector(
    '.game-page__button-check',
  );
  if (buttonCheck !== null) {
    buttonCheck.style.opacity = '0';
    buttonCheck.style.zIndex = '9';
  }
}

export function checkOrderWord(
  blockResult: HTMLCollection,
  originalSentence: string[],
) {
  for (let i = 0; i < blockResult.length; i++) {
    const puzzle = blockResult[i] as HTMLCanvasElement | null;
    if (puzzle === null) throw Error('Element is Error');

    const puzzleResult = blockResult[i].classList[1];
    const wordSentence = originalSentence[i];

    if (puzzleResult !== wordSentence) {
      if (puzzleResult === originalSentence[0]) creatFirstPuzzle(i, puzzle);
      else if (puzzleResult === originalSentence[originalSentence.length - 1])
        creatLastPuzzle(i, puzzle);
      else creatMiddlePuzzle(i, puzzle);
    }
  }
}

function creatFirstPuzzle(ind: number, puzzle: HTMLCanvasElement) {
  if (puzzle === null) throw Error('Element is Error');
  const context = puzzle.getContext('2d');
  if (context === null) throw Error('Element is Error');

  puzzle.setAttribute('draggable', 'true');

  context.font = '20px serif';
  const widthText = context.measureText(puzzle.classList[1]).width;
  puzzle.width = widthText + 20;
  puzzle.height = 40;

  context?.beginPath();
  context?.moveTo(0, 0);
  context?.lineTo(puzzle.width - 10, 0);
  context?.lineTo(puzzle.width, 20);
  context?.lineTo(puzzle.width - 10, 40);
  context?.lineTo(0, 40);
  context?.lineTo(0, 0);
  context?.closePath();
  context.fillStyle = 'rgb(237, 75, 75, 0.5)';
  context?.fill();
  context.font = '20px serif';
  context.fillStyle = 'black';
  context.fillText(
    `${puzzle.classList[1]}`,
    puzzle.width / 2 - widthText / 2,
    25,
  );
  context.textAlign = 'center';
  context.textBaseline = 'middle';

  context?.stroke();
}
function creatMiddlePuzzle(ind: number, puzzle: HTMLCanvasElement) {
  if (puzzle === null) throw Error('Element is Error');
  const context = puzzle.getContext('2d');
  if (context === null) throw Error('Element is Error');

  puzzle.setAttribute('draggable', 'true');

  context.font = '20px serif';
  const widthText = context.measureText(puzzle.classList[1]).width;
  puzzle.width = widthText + 30;
  puzzle.height = 40;

  context?.beginPath();
  context?.moveTo(0, 0);
  context?.lineTo(puzzle.width - 10, 0);
  context?.lineTo(puzzle.width, 20);
  context?.lineTo(puzzle.width - 10, 40);
  context?.lineTo(0, 40);
  context?.lineTo(10, 20);
  context?.lineTo(0, 0);
  context?.closePath();
  context.fillStyle = 'rgb(237, 75, 75, 0.5)';
  context?.fill();
  context.font = '20px serif';
  context.fillStyle = 'black';
  context.fillText(
    `${puzzle.classList[1]}`,
    puzzle.width / 2 - widthText / 2 + 2,
    25,
  );
  context.textAlign = 'center';
  context.textBaseline = 'middle';

  context?.stroke();
}

function creatLastPuzzle(ind: number, puzzle: HTMLCanvasElement) {
  if (puzzle === null) throw Error('Element is Error');
  const context = puzzle.getContext('2d');
  if (context === null) throw Error('Element is Error');

  puzzle.setAttribute('draggable', 'true');

  context.font = '20px serif';
  const widthText = context.measureText(puzzle.classList[1]).width;
  puzzle.width = widthText + 40;
  puzzle.height = 40;

  context?.beginPath();
  context?.moveTo(0, 0);
  context?.lineTo(puzzle.width - 10, 0);
  context?.lineTo(puzzle.width - 10, 40);
  context?.lineTo(0, 40);
  context?.lineTo(10, 20);
  context?.lineTo(0, 0);
  context?.closePath();
  context.fillStyle = 'rgb(237, 75, 75, 0.5)';
  context?.fill();
  context.font = '20px serif';
  context.fillStyle = 'black';
  context.fillText(
    `${puzzle.classList[1]}`,
    puzzle.width / 2 - widthText / 2 + 2,
    25,
  );
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context?.stroke();
}

export function changeColorPuzzleResult(
  blockResult: Element,
  i: number,
  sentence: string[][],
) {
  for (let i = 0; i < blockResult.children.length; i += 1) {
    const puzzle = blockResult.children[i] as HTMLCanvasElement | null;
    if (puzzle === null) throw Error('Element is Error');
    const countWords = sentence[0].length;
    const word = puzzle.classList[2];
    if (word === '0') colorFirstPuzzle(i, puzzle);
    else if (word === String(countWords - 1)) colorLastPuzzle(i, puzzle);
    else colorMiddlePuzzle(i, puzzle);
  }
}

export function changeColorPuzzleInitial(
  blockInitialData: HTMLElement,
  i: number,
  sentence: string[][],
) {
  for (let i = 0; i < blockInitialData.children.length; i += 1) {
    const puzzle = blockInitialData.children[i] as HTMLCanvasElement | null;
    if (puzzle === null) throw Error('Element is Error');

    const countWords = sentence[0].length;
    const word = puzzle.classList[2];
    if (word === '0') colorFirstPuzzle(i, puzzle);
    else if (word === String(countWords - 1)) colorLastPuzzle(i, puzzle);
    else colorMiddlePuzzle(i, puzzle);
  }
}

function colorFirstPuzzle(ind: number, puzzle: HTMLCanvasElement) {
  if (puzzle === null) throw Error('Element is Error');
  const context = puzzle.getContext('2d');
  if (context === null) throw Error('Element is Error');

  puzzle.setAttribute('draggable', 'true');

  context.font = '20px serif';
  const widthText = context.measureText(puzzle.classList[1]).width;
  puzzle.width = widthText + 20;
  puzzle.height = 40;

  context?.beginPath();
  context?.moveTo(0, 0);
  context?.lineTo(puzzle.width - 10, 0);
  context?.lineTo(puzzle.width, 20);
  context?.lineTo(puzzle.width - 10, 40);
  context?.lineTo(0, 40);
  context?.lineTo(0, 0);
  context?.closePath();
  context.fillStyle = 'rgba(255, 163, 50, 0.5)';
  context?.fill();
  context.font = '20px serif';
  context.fillStyle = 'black';
  context.fillText(
    `${puzzle.classList[1]}`,
    puzzle.width / 2 - widthText / 2,
    25,
  );
  context.textAlign = 'center';
  context.textBaseline = 'middle';

  context?.stroke();
}
function colorMiddlePuzzle(ind: number, puzzle: HTMLCanvasElement) {
  if (puzzle === null) throw Error('Element is Error');
  const context = puzzle.getContext('2d');
  if (context === null) throw Error('Element is Error');

  puzzle.setAttribute('draggable', 'true');

  context.font = '20px serif';
  const widthText = context.measureText(puzzle.classList[1]).width;
  puzzle.width = widthText + 30;
  puzzle.height = 40;

  context?.beginPath();
  context?.moveTo(0, 0);
  context?.lineTo(puzzle.width - 10, 0);
  context?.lineTo(puzzle.width, 20);
  context?.lineTo(puzzle.width - 10, 40);
  context?.lineTo(0, 40);
  context?.lineTo(10, 20);
  context?.lineTo(0, 0);
  context?.closePath();
  context.fillStyle = 'rgba(255, 163, 50, 0.5)';
  context?.fill();
  context.font = '20px serif';
  context.fillStyle = 'black';
  context.fillText(
    `${puzzle.classList[1]}`,
    puzzle.width / 2 - widthText / 2 + 2,
    25,
  );
  context.textAlign = 'center';
  context.textBaseline = 'middle';

  context?.stroke();
}

function colorLastPuzzle(ind: number, puzzle: HTMLCanvasElement) {
  if (puzzle === null) throw Error('Element is Error');
  const context = puzzle.getContext('2d');
  if (context === null) throw Error('Element is Error');

  puzzle.setAttribute('draggable', 'true');

  context.font = '20px serif';
  const widthText = context.measureText(puzzle.classList[1]).width;
  puzzle.width = widthText + 40;
  puzzle.height = 40;

  context?.beginPath();
  context?.moveTo(0, 0);
  context?.lineTo(puzzle.width - 10, 0);
  context?.lineTo(puzzle.width - 10, 40);
  context?.lineTo(0, 40);
  context?.lineTo(10, 20);
  context?.lineTo(0, 0);
  context?.closePath();
  context.fillStyle = 'rgba(255, 163, 50, 0.5)';
  context?.fill();
  context.font = '20px serif';
  context.fillStyle = 'black';
  context.fillText(
    `${puzzle.classList[1]}`,
    puzzle.width / 2 - widthText / 2 + 2,
    25,
  );
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context?.stroke();
}
