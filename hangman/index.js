// body
const BODY = document.querySelector('body');
BODY.className = 'body';
//BODY.style.width = '100%';
//BODY.style.margin = '0';
//BODY.style.background = '#E1D4C9';

//body-container
const BODY_CONTAINER = document.createElement('div');
BODY_CONTAINER.className = 'body-container';
BODY.prepend(BODY_CONTAINER);

// hangman
const HANGMAN = document.createElement('div');
HANGMAN.className = 'hangman';
BODY_CONTAINER.prepend(HANGMAN);

// hangman-img
const HANGMAN_IMG = document.createElement('img');
HANGMAN_IMG.className = 'hangman__img';
HANGMAN.prepend(HANGMAN_IMG);
HANGMAN_IMG.src = 'assets/img/gallows.png';

// hangman-title
const HANGMAN_TITLE = document.createElement('h1');
HANGMAN_TITLE.className = 'hangman__title';
HANGMAN.append(HANGMAN_TITLE);
HANGMAN_TITLE.innerHTML = 'HANGMAN GAME';

// game-board
const GAME_BOARD = document.createElement('div');
GAME_BOARD.className = 'game-board';
BODY_CONTAINER.append(GAME_BOARD);

// game-word
const GAME_WORD = document.createElement('div');
GAME_WORD.className = 'game-word';
GAME_BOARD.append(GAME_WORD);

// game-board__hint
const GAME_BOARD_HINT = document.createElement('h2');
GAME_BOARD_HINT.className = 'game-board__hint';
GAME_BOARD.append(GAME_BOARD_HINT);

// game-keyboard
const GAME_KEYBOARD = document.createElement('div');
GAME_KEYBOARD.className = 'game-keyboard';
GAME_BOARD.append(GAME_KEYBOARD);

// game-keyboard__button
const ARR_BUTTON = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];
for (let i = 0; i < ARR_BUTTON.length; i += 1) {
  let letter = ARR_BUTTON[i];
  let game_keyboard_button = document.createElement('div');
  game_keyboard_button.className = 'game-keyboard__button';
  GAME_KEYBOARD.append(game_keyboard_button);
  game_keyboard_button.innerHTML = `${letter}`;
}
