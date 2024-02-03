export function randomNumber() {
  let number;
  if (localStorage.getItem('randomGameNumber') !== null) {
    (function getRandomNumber() {
      const lastNumber = Number(localStorage.getItem('randomGameNumber'));
      number = Math.floor(Math.random() * 15);
      if (lastNumber === number) getRandomNumber();
    })();
  }
  else number = Math.floor(Math.random() * 15);

  localStorage.setItem('randomGameNumber', number);
  console.log('number', number);
  return getRandonNumberGame(number);
}

function getRandonNumberGame(number) {
  let numberImg;
  let sizeImage;
  let nameImgWin;
  let levelWin;
  if(number >= 0 && number <= 4) {
    numberImg = String(number + 1);
    sizeImage = 5;
    nameImgWin = ['TOWER', 'SNAKE', 'FLAG', 'SHURIKEN', 'RUNE'][number];
    levelWin = 'easy 5x5';
  }
  else if(number >= 5 && number <= 9) {
    numberImg = String(number - 5 + 1);
    sizeImage = 10;
    nameImgWin = ['QUESTION', 'MUSIC', 'CLOWN', 'CLOCK', 'LEAF'][number - 5];
    levelWin = 'middle 10x10';
  }
  else if(number >= 10 && number <= 14) {
    numberImg = String(number - 10 + 1);
    sizeImage = 15;
    nameImgWin = ['DUCK', 'MOUSE', 'HOUSE', 'LIZARD', 'KEYS'][number - 10];
    levelWin = 'hard 15x15';
  }
  return [numberImg, sizeImage, nameImgWin, levelWin]
}