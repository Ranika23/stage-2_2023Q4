export function creatScoreButton(bodyContainer) {
  const buttonScore = document.createElement('button');
  buttonScore.className = 'score-button'; 
  bodyContainer.prepend(buttonScore);
  buttonScore.innerText = 'SCORE';

  return buttonScore;
}

export function creatScoreTable(bodyContainer) {

  const scoreTable = document.createElement('div');
  scoreTable.className = 'score-table';
  scoreTable.classList.add('close');

  const scoreTableTitle = document.createElement('div');
  scoreTableTitle.className = 'score-table__title';
  scoreTableTitle.innerText = `5 last game`;
  scoreTable.append(scoreTableTitle);

  const scoreTableInf = document.createElement('div');
  scoreTableInf.className = 'score-table__inf';
  scoreTable.append(scoreTableInf);

  for (let i = 0; i <= 5; i += 1) {
    const scoreTableLine = document.createElement('div');
    scoreTableLine.className = 'score-table__line';
    scoreTableInf.append(scoreTableLine);
    for (let y = 1; y <= 3; y += 1) {
      const scoreTableCell = document.createElement('div');
      scoreTableCell.className = 'score-table__line-cell';
      scoreTableLine.append(scoreTableCell);
      if (i === 0 && y === 1) scoreTableCell.innerText = `IMAGE`;
      else if (i === 0 && y === 2) scoreTableCell.innerText = `LEVEL`;
      else if (i === 0 && y === 3) scoreTableCell.innerText = `TIME`;
      else scoreTableCell.innerText = `-`;
    }
  }
  bodyContainer.prepend(scoreTable);
}

export function openScoreTable() {
  const scoreTable = document.querySelector('.score-table');
  scoreTable.classList.toggle('open');
  scoreTable.classList.toggle('close');
}

export function saveWinGame(countWin, image, level, timeInner, time) {

  let arrSaveWinGame;
  
  if (JSON.parse(localStorage.getItem('counterWin')) === null) arrSaveWinGame = [];
  else {
    arrSaveWinGame = JSON.parse(localStorage.getItem('counterWin'));
    console.log(JSON.parse(localStorage.getItem('counterWin'))[countWin - 1]['countWin'])
    countWin += JSON.parse(localStorage.getItem('counterWin'))[countWin - 1]['countWin'];
  } 
  arrSaveWinGame.push({'countWin' : countWin, 'image' : image, 'level' : level, 'timeInner' : timeInner, 'time' : time});
  localStorage.setItem('counterWin', JSON.stringify(arrSaveWinGame));
  refillScoreTable();
}

export function fillScoreTable() {


  const scoreTableLine = document.querySelectorAll('.score-table__line');
  console.log(JSON.parse(localStorage.getItem('counterWin')))
  if (JSON.parse(localStorage.getItem('counterWin')) !== null) {
    const arrInfGame = JSON.parse(localStorage.getItem('counterWin'));
    sortArr(arrInfGame);
    for (let i = 0; i < arrInfGame.length; i += 1) {
      scoreTableLine[i + 1].children[0].innerText = arrInfGame[i].image;
      scoreTableLine[i + 1].children[1].innerText = arrInfGame[i].level;
      scoreTableLine[i + 1].children[2].innerText = arrInfGame[i].timeInner;
    }
  }

}




function refillScoreTable() {
  const arrInfGame = JSON.parse(localStorage.getItem('counterWin'));

  if (arrInfGame.length === 6) {
    const scoreTableLine = document.querySelectorAll('.score-table__line');
    const arrNewList = arrInfGame.slice(1, 6);

    localStorage.setItem('counterWin', JSON.stringify(arrNewList));

    console.log(arrNewList)
    sortArr(arrNewList);
    console.log(arrNewList)
    for (let i = 0; i < arrNewList.length; i += 1) {
      scoreTableLine[i + 1].children[0].innerText = arrNewList[i].image;
      scoreTableLine[i + 1].children[1].innerText = arrNewList[i].level;
      scoreTableLine[i + 1].children[2].innerText = arrNewList[i].timeInner;
    }
  }
}

function sortArr(arrNewList) {
  arrNewList.sort(function(a, b) {
    return a.time - b.time;
  });
}