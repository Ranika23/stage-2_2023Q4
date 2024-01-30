// click right mouse button (black cell)
export function clickLeftMouse(event) {

  const cell = event.target;
  if (cell.classList.contains('right-click')) cell.classList.remove('right-click');
  cell.classList.toggle('left-click');
}


// click right mouse button (black cell)
export function clickRigthMouse(event) {
  event.preventDefault();

  const cell = event.target;
  if (cell.classList.contains('left-click')) cell.classList.remove('left-click');
  cell.classList.toggle('right-click');
}