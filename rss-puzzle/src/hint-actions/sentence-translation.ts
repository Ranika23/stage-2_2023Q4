export function clickIconHintTranslation() {
  const iconHintTranslation: HTMLElement | null = document.querySelector(
    '.game-page__item-hint-container',
  );
  const hintSentence: HTMLElement | null = document.querySelector(
    '.game-page__hint-sentence',
  );

  function openClickSentence() {
    if (iconHintTranslation === null || hintSentence === null) throw Error;
    hintSentence.classList.toggle('open');
    iconHintTranslation.classList.toggle('open');
  }

  iconHintTranslation?.addEventListener('click', openClickSentence);
}

export function openHintSentence() {
  const iconHintTranslation: HTMLElement | null = document.querySelector(
    '.game-page__item-hint-container',
  );
  const hintSentence: HTMLElement | null = document.querySelector(
    '.game-page__hint-sentence',
  );

  if (iconHintTranslation === null || hintSentence === null) throw Error;
  hintSentence.classList.add('open');
  iconHintTranslation.classList.add('open');
}

export function closeHintSentence() {
  const iconHintTranslation: HTMLElement | null = document.querySelector(
    '.game-page__item-hint-container',
  );
  const hintSentence: HTMLElement | null = document.querySelector(
    '.game-page__hint-sentence',
  );

  if (iconHintTranslation === null || hintSentence === null) throw Error;
  hintSentence.classList.remove('open');
  iconHintTranslation.classList.remove('open');
}
