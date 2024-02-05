export function creatSolutionButton(bodyContainer) {
  const buttonSolution = document.createElement('button');
  buttonSolution.className = 'solution-button';
  bodyContainer.prepend(buttonSolution);
  buttonSolution.innerText = 'SOLUTION';

  return buttonSolution;
}

export function creatResetButton(bodyContainer) {
  const menuReset = document.createElement('button');
  menuReset.className = 'menu-window__reset';
  menuReset.innerText = `RESET GAME`;
  menuReset.setAttribute("disabled", "disabled");
  bodyContainer.append(menuReset);

  return menuReset;
}