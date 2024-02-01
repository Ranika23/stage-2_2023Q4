export function saveLastGame(matrixImage, sizeImage, rowTopClues, columnLeftClues) {
  const watchInner = document.querySelector('.container-watch').innerText;
  console.log(watchInner)
  const gameBoard = document.querySelector('.game-board');
  localStorage.setItem('gameBoard', gameBoard.outerHTML);
  localStorage.setItem('matrixImage', JSON.stringify(matrixImage));
  localStorage.setItem('sizeImage', sizeImage);
  localStorage.setItem('minutes', Number(watchInner.slice(0,3)));
  localStorage.setItem('seconds', Number(watchInner.slice(5)));
  localStorage.setItem('time', watchInner);
  localStorage.setItem('rowTopClues', rowTopClues);
  localStorage.setItem('columnLeftClues', columnLeftClues);
}

export function getLastGame() {
  const gameBoardCont = document.querySelector('.game-board-container');
  const matrixImage = JSON.parse(localStorage.getItem('matrixImage'));
  const sizeImage = Number(localStorage.getItem('sizeImage'));
  const saveGame = localStorage.getItem('gameBoard');
  const time = localStorage.getItem('time');
  const rowTopClues = Number(localStorage.getItem('rowTopClues'));
  const columnLeftClues = Number(localStorage.getItem('columnLeftClues'));

  gameBoardCont.innerHTML = saveGame;
  const gameField = document.querySelector('.game-field');

  document.querySelector('.container-watch').innerText = `${time}`;

  return [matrixImage, sizeImage, gameField, rowTopClues, columnLeftClues];
  }