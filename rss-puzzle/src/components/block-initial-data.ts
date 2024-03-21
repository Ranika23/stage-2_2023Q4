import { sentence } from '../data';
import { saveLevelLocalStorage } from '../local-storage';
import { saveNextSentence, getNextSentence } from '../local-storage';

export function creatBlockInitialData(
  rounds: number,
  words: number,
  newSentence: string[],
) {
  if (getNextSentence() === undefined) {
    const firstSentence = sentence(0, 0) as string[];
    const secondSentence = sentence(0, 1) as string[];
    saveNextSentence(firstSentence, secondSentence);
    const sent = getNextSentence() as Array<Array<string>>;
    newSentence = sent[0];
    saveLevelLocalStorage(rounds, words);
  }

  if (document.querySelector('.game-page__block-initial-data') !== null) {
    const lastElement: HTMLElement | null = document.querySelector(
      '.game-page__block-initial-data',
    );
    lastElement?.remove();
  }
  const blockInitialData: HTMLElement | null = document.createElement('div');
  blockInitialData.className = 'game-page__block-initial-data';
  if (document.querySelector('.game-page__button-container') === null)
    document.querySelector('.main')?.append(blockInitialData);
  else
    document
      .querySelector('.game-page__button-container')
      ?.before(blockInitialData);

  creatPuzzle(blockInitialData, newSentence, rounds, words);
}

export function creatPuzzle(
  blockInitialData: HTMLElement,
  newSentence: string[],
  rounds: number,
  words: number,
) {
  (function saveSentence() {
    if (words < 9)
      saveNextSentence(sentence(rounds, words), sentence(rounds, words + 1));
    else if (words >= 9)
      saveNextSentence(sentence(rounds, words), sentence(rounds + 1, 0));
  })();

  const random: string[] = newSentence.slice();
  const randomWords: string[] | undefined = shuffle(random);

  if (randomWords === undefined) throw Error;
  randomWords.forEach((elem) => {
    const indWord: number = newSentence.indexOf(elem);
    if (elem === newSentence[0])
      creatFirstPuzzle(blockInitialData, elem, indWord);
    else if (
      randomWords !== undefined &&
      elem === newSentence[randomWords.length - 1]
    )
      creatLastPuzzle(blockInitialData, elem, indWord);
    else creatMiddlePuzzle(blockInitialData, elem, indWord);
  });
  //}
}

function shuffle(array: string[]) {
  let j, temp;
  for (let i = array.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[j];
    array[j] = array[i];
    array[i] = temp;
  }
  if (array === undefined) shuffle(array);
  else return array;
}

function creatFirstPuzzle(
  blockInitialData: HTMLElement,
  elem: string,
  words: number,
) {
  const puzzle: HTMLCanvasElement | null = document.createElement('canvas');
  puzzle.className = 'game-page__puzzle';
  puzzle.classList.add(`${elem}`);
  puzzle.classList.add(`${words}`);
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
function creatMiddlePuzzle(
  blockInitialData: HTMLElement,
  elem: string,
  words: number,
) {
  const puzzle: HTMLCanvasElement | null = document.createElement('canvas');
  puzzle.className = 'game-page__puzzle';
  puzzle.classList.add(`${elem}`);
  puzzle.classList.add(`${words}`);
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

function creatLastPuzzle(
  blockInitialData: HTMLElement,
  elem: string,
  words: number,
) {
  const puzzle: HTMLCanvasElement | null = document.createElement('canvas');
  puzzle.className = 'game-page__puzzle';
  puzzle.classList.add(`${elem}`);
  puzzle.classList.add(`${words}`);
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
