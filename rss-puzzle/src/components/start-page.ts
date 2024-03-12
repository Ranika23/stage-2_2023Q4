export function createStartPage() {
  const startPage: HTMLElement | null = document.createElement('div');
  startPage.className = 'start-page';

  const bodyContainer: Element | null =
    document.querySelector('.body-container');
  if (bodyContainer === null) throw Error('Element is Error');
  bodyContainer.prepend(startPage);

  addTitleStartPage(startPage);
  addDescrStartPage(startPage);
  addGreeting(startPage);
  addButtonStartPage(startPage);
}

function addTitleStartPage(startPage: HTMLElement) {
  const titleGame: HTMLElement | null = document.createElement('div');
  titleGame.className = 'start-page__title';
  titleGame.innerText = 'INGLISH PUZZLE';

  if (titleGame === null) throw Error('Element is Error');
  startPage.append(titleGame);
}

function addDescrStartPage(startPage: HTMLElement) {
  const descriptionGame: HTMLElement | null = document.createElement('div');
  descriptionGame.className = 'start-page__description';
  descriptionGame.innerText = `Click on words, collect phrases.
  Words can be drag and drop. Select tooltips in the menu.`;

  if (descriptionGame === null) throw Error('Element is Error');
  startPage.append(descriptionGame);
}

function addGreeting(startPage: HTMLElement) {
  const dataUser: string | null = localStorage.getItem('user');
  if (dataUser === null) throw Error('Element is Error');

  const firstName = JSON.parse(dataUser).firstName.toUpperCase();
  const surName = JSON.parse(dataUser).surName.toUpperCase();

  const greetingStartGame: HTMLElement | null = document.createElement('div');
  greetingStartGame.className = 'start-page__greeting';
  greetingStartGame.innerText = `Good to see you, ${firstName} ${surName}.`;

  if (greetingStartGame === null) throw Error('Element is Error');
  startPage.append(greetingStartGame);
}

function addButtonStartPage(startPage: HTMLElement) {
  const buttonStartGame: HTMLElement | null = document.createElement('button');
  buttonStartGame.className = 'start-page__button';
  buttonStartGame.innerText = `Start`;

  if (buttonStartGame === null) throw Error('Element is Error');
  startPage.append(buttonStartGame);
}
