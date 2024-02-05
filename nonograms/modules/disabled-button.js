export function enableButtons() {
  document.querySelector('.menu-window__reset').disabled = false;
  document.querySelector('.menu-window__save').disabled = false;
}



export function getInitStateButtons() {
  if(localStorage.getItem('gameBoard') !== null) {
    document.querySelector('.menu-window__last-game').disabled = false;
    //document.querySelector('.menu-window__save').disabled = false;
  } 
}