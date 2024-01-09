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

//question-and-answer list
const QUEST_ANSER = {
  0: ['провоз', 'Для пассажира проезд, а для багажа?'],
  1: [
    'счетчик',
    'Прибор, который обязан был включить советский таксист при посадке пассажира',
  ],
  2: ['парашют', 'Что нужно, чтобы спуститься с небес на землю'],
  3: ['рундук', 'Короб для багажа под нижней полкой поезда'],
  4: ['транспорт', 'Превращает человека в пассажира'],
  5: ['перевес', 'Излишек багажа пассажира самолёта'],
  6: ['трап', 'Лестница для прилетевших'],
  7: ['экипаж', 'коллектив самолета'],
  8: ['штурвал', '"баранка" капитана корабля'],
  9: ['авиамодель', 'Миниатюрная копия самолета или вертолета'],
};

// random word choice
function randomWord() {
  let num = Math.floor(Math.random() * 10);
  return QUEST_ANSER[num];
}

//add word
let newWord = randomWord()[0];
wordAdd(newWord);

function wordAdd(newWord) {
  for (let i = 0; i < newWord.length; i += 1) {
    let char_elem = document.createElement('div');
    char_elem.className = 'game-word__char';
    GAME_WORD.append(char_elem);
    char_elem.style.borderBottom = '5px solid black';
  }
}
