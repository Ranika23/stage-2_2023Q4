export function saveLastGame(matrixImage, sizeImage, rowTopClues, columnLeftClues, nameImgWin, levelWin) {
  const watchInner = document.querySelector('.container-watch').innerText;
  const gameBoard = document.querySelector('.game-board');
  localStorage.setItem('gameBoard', gameBoard.outerHTML);
  localStorage.setItem('matrixImage', JSON.stringify(matrixImage));
  localStorage.setItem('sizeImage', sizeImage);
  localStorage.setItem('minutes', Number(watchInner.slice(0, 3)));
  localStorage.setItem('seconds', Number(watchInner.slice(5)));
  localStorage.setItem('time', watchInner);
  localStorage.setItem('rowTopClues', rowTopClues);
  localStorage.setItem('columnLeftClues', columnLeftClues);
  localStorage.setItem('infScoreTable', JSON.stringify([nameImgWin, levelWin]));
}

export function getLastGame() {
  const gameBoardCont = document.querySelector('.game-board-container');
  const matrixImage = JSON.parse(localStorage.getItem('matrixImage'));
  const sizeImage = Number(localStorage.getItem('sizeImage'));
  const saveGame = localStorage.getItem('gameBoard');
  const time = localStorage.getItem('time');
  const rowTopClues = Number(localStorage.getItem('rowTopClues'));
  const columnLeftClues = Number(localStorage.getItem('columnLeftClues'));
  const infScoreTable = JSON.parse(localStorage.getItem('infScoreTable'));

  gameBoardCont.innerHTML = saveGame;
  const gameField = document.querySelector('.game-field');

  document.querySelector('.container-watch').innerText = `${time}`;

  return [matrixImage, sizeImage, gameField, rowTopClues, columnLeftClues, infScoreTable];
}
