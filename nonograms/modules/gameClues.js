//top clues   ВЕРХНИЕ ПОДСКАЗКИ
export function creatTopClues(sizeImage) {

  const topClues = document.createElement('div');
  topClues.className = 'top-clues';
  const gameBoard = document.querySelector('.game-board');
  gameBoard.append(topClues);
  //left clues cells ЯЧЕЙКИ ЛЕВОЙ ПОДСКАЗКИ
  for (let i = 1; i <= 3 * sizeImage; i += 1) {
    const cellClues = document.createElement('div');
    cellClues.className = 'cell-clues';
    topClues.prepend(cellClues);
  }
  (function addTopClues() {
    const arrTopClues = topClues.children;
    arrTopClues[7].innerText = 1;
    arrTopClues[8].innerText = 1;
    arrTopClues[11].innerText = 5;
    arrTopClues[12].innerText = 1;
    arrTopClues[13].innerText = 2;
  }
  )();
}


//left clues   ЛЕВЫЕ ПОДСКАЗКИ
export function creatLeftClues(sizeImage) {
  const leftClues = document.createElement('div');
  leftClues.className = 'left-clues';
  const gameBoard = document.querySelector('.game-board')
  gameBoard.append(leftClues);
  //left clues cells ЯЧЕЙКИ ЛЕВОЙ ПОДСКАЗКИ
  for (let i = 1; i <= 3 * sizeImage; i += 1) {
    const cellClues = document.createElement('div');
    cellClues.className = 'cell-clues';
    leftClues.prepend(cellClues);
  }
  (function addLeftClues() {
    const arrLeftClues = leftClues.children;
    arrLeftClues[2].innerText = 2;
    arrLeftClues[4].innerText = 1;
    arrLeftClues[5].innerText = 1;
    arrLeftClues[8].innerText = 2;
    arrLeftClues[10].innerText = 1;
    arrLeftClues[11].innerText = 1;
    arrLeftClues[13].innerText = 1;
    arrLeftClues[14].innerText = 1;  
  }
)();
}

