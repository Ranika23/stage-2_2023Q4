export function addSoundClick(event) {
  const audioClick = new Audio('assets/audio/click.mp3');
  const audioCancelClick = new Audio('assets/audio/cancel-click.mp3');
  const cell = event.target;
  if (!cell.classList.contains('left-click'))   audioClick.play();
  else if (cell.classList.contains('left-click'))   audioCancelClick.play();
}

export function addSoundClose(event) {
  const audioClose = new Audio('assets/audio/close.mp3');
  const audioCancelClick = new Audio('assets/audio/cancel-click.mp3');
  const cell = event.target;
  if (!cell.classList.contains('right-click'))   audioClose.play();
  else if (cell.classList.contains('right-click'))   audioCancelClick.play();
}

export function addSoundWinGame() {
  const audioClose = new Audio('assets/audio/game-win.mp3');
  audioClose.play();
}