export function creatBlockResult() {
  const blockResult: HTMLElement | null = document.createElement('div');
  blockResult.className = 'game-page__block-result';
  document.querySelector('.main')?.append(blockResult);
}
