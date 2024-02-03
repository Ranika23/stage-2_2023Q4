export function creatSolutionButton(bodyContainer) {
  const buttonSolution = document.createElement('button');
  buttonSolution.className = 'solution-button'; 
  bodyContainer.prepend(buttonSolution);
  buttonSolution.innerText = 'Solution';

  return buttonSolution;
}

export function getSolution(gameField, matrixImage, sizeImage) {  const arrayGameField = gameField.children;
  for (let i = 0; i < matrixImage.length; i += 1) {
    for (let y = 0; y < matrixImage[i].length; y += 1) {
      const cell = sizeImage * i + y;
      //const getResult = arrayGameField[cell].classList.contains('left-click');
      if (matrixImage[i][y] === 1) {
        arrayGameField[cell].classList.add('left-click');
      }
    }
  }}