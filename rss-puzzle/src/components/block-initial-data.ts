import { sentence } from '../data';
import { saveLevelLocalStorage } from '../local-storage';

export function creatBlockInitialData(rounds: number, words: number) {
  if (document.querySelector('.game-page__block-initial-data') !== null) {
    const lastElement: HTMLElement | null = document.querySelector(
      '.game-page__block-initial-data',
    );
    lastElement?.remove();
  }
  const blockInitialData: HTMLElement | null = document.createElement('div');
  blockInitialData.className = 'game-page__block-initial-data';
  document.querySelector('.main')?.append(blockInitialData);

  creatPuzzle(blockInitialData, rounds, words);
}

export function creatPuzzle(
  blockInitialData: HTMLElement,
  rounds: number,
  words: number,
) {
  saveLevelLocalStorage(rounds, words);
  let randomWords: string[] | undefined = shuffle(sentence(rounds, words));
  if (randomWords === undefined) {
    const buttonContinue: HTMLButtonElement | null = document.querySelector(
      '.game-page__button-continue',
    );
    buttonContinue?.disabled === false;
    randomWords = shuffle(sentence(rounds, words));
  } else {
    randomWords.forEach((elem) => {
      if (elem === sentence(rounds, words)[0])
        creatFirstPuzzle(blockInitialData, elem);
      else if (
        randomWords !== undefined &&
        elem === sentence(rounds, words)[randomWords.length - 1]
      )
        creatLastPuzzle(blockInitialData, elem);
      else creatMiddlePuzzle(blockInitialData, elem);
    });
  }
}

function shuffle(array: string[]) {
  console.log(array);
  const result = array.slice(0);
  result.sort(() => Math.random() - 0.5);
  if (JSON.stringify(array) == JSON.stringify(result)) shuffle(array);
  else return result;
}

function creatFirstPuzzle(blockInitialData: HTMLElement, elem: string) {
  const puzzle: HTMLCanvasElement | null = document.createElement('canvas');
  puzzle.className = 'game-page__puzzle';
  puzzle.classList.add(`${elem}`);
  const context = puzzle.getContext('2d');
  if (context === null) throw Error('Element is Error');

  puzzle.setAttribute('draggable', 'true');

  context.font = '20px serif';
  const widthText = context.measureText(elem).width;
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
  context.fillText(`${elem}`, puzzle.width / 2 - widthText / 2, 25);
  context.textAlign = 'center';
  context.textBaseline = 'middle';

  context?.stroke();

  blockInitialData?.append(puzzle);
}
function creatMiddlePuzzle(blockInitialData: HTMLElement, elem: string) {
  const puzzle: HTMLCanvasElement | null = document.createElement('canvas');
  puzzle.className = 'game-page__puzzle';
  puzzle.classList.add(`${elem}`);
  const context = puzzle.getContext('2d');
  if (context === null) throw Error('Element is Error');

  puzzle.setAttribute('draggable', 'true');

  context.font = '20px serif';
  const widthText = context.measureText(elem).width;
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
  context.fillText(`${elem}`, puzzle.width / 2 - widthText / 2 + 2, 25);
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context?.stroke();

  blockInitialData?.append(puzzle);
}

function creatLastPuzzle(blockInitialData: HTMLElement, elem: string) {
  const puzzle: HTMLCanvasElement | null = document.createElement('canvas');
  puzzle.className = 'game-page__puzzle';
  puzzle.classList.add(`${elem}`);
  const context = puzzle.getContext('2d');
  if (context === null) throw Error('Element is Error');

  puzzle.setAttribute('draggable', 'true');

  context.font = '20px serif';
  const widthText = context.measureText(elem).width;
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
  context.fillText(`${elem}`, puzzle.width / 2 - widthText / 2 + 2, 25);
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context?.stroke();

  blockInitialData?.append(puzzle);
}
