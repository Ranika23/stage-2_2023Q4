export function creatBlockResult() {
  const blockResult: HTMLElement | null = document.createElement('div');
  blockResult.className = 'game-page__block-result';
  document.querySelector('.main')?.append(blockResult);
  rowBlock();
}

function rowBlock() {
  for (let i = 0; i < 10; i++) {
    const rowBlockResult: HTMLElement | null = document.createElement('div');
    rowBlockResult.className = 'game-page__row-block-result';
    rowBlockResult.classList.add(`${i}`);
    document.querySelector('.game-page__block-result')?.append(rowBlockResult);
  }
}
