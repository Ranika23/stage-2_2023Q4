export function clickIconHintTranslation() {
  const iconHintTranslation: HTMLElement | null = document.querySelector(
    '.game-page__item-hint-container',
  );
  const hintSentence: HTMLElement | null = document.querySelector(
    '.game-page__hint-sentence',
  );

  function openSentence() {
    if (iconHintTranslation === null || hintSentence === null) throw Error;
    hintSentence.classList.toggle('open');
    iconHintTranslation.classList.toggle('open');
  }

  iconHintTranslation?.addEventListener('click', openSentence);
}
