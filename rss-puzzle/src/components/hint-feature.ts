import { getNextSentence } from '../local-storage';

export function creatHintSentence() {
  const sentence = getNextSentence() as string[][];
  const hintSentence: HTMLElement | null = document.createElement('div');
  hintSentence.className = 'game-page__hint-sentence';
  hintSentence.classList.add('close');
  hintSentence.innerText = `${sentence[2]}`;

  document.querySelector('.main')?.append(hintSentence);
}

export function creatHintContainer() {
  const hintContainer: HTMLElement | null = document.createElement('div');
  hintContainer.className = 'game-page__hint-container';
  document.querySelector('.header')?.append(hintContainer);

  addItemHintContainer(hintContainer);
}

function addItemHintContainer(hintContainer: HTMLElement) {
  for (let i = 0; i < 1; i += 1) {
    creatItemHintContainer(hintContainer);
  }
}

function creatItemHintContainer(hintContainer: HTMLElement) {
  const itemHintContainer: HTMLElement | null = document.createElement('div');
  itemHintContainer.className = 'game-page__item-hint-container';

  hintContainer?.append(itemHintContainer);
  creatImgHintTranslation(itemHintContainer);
}

function creatImgHintTranslation(itemHintContainer: HTMLElement) {
  const imgHintTranslation: HTMLImageElement | null =
    document.createElement('img');
  imgHintTranslation.className = 'game-page__hint-translation';
  imgHintTranslation.src = 'assets/svg/icon-translation-hint.png';
  imgHintTranslation.alt = 'img-translation';

  itemHintContainer?.append(imgHintTranslation);
}
