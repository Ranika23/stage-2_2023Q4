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
const GAME_BOARD_HINT = document.createElement('div');
GAME_BOARD_HINT.className = 'game-board__hint';
GAME_BOARD.append(GAME_BOARD_HINT);

// game-board__incorrect-container
const GAME_BOARD_INCORRECT_CONTAINER = document.createElement('div');
GAME_BOARD_INCORRECT_CONTAINER.className = 'game-board__incorrect-container';
GAME_BOARD.append(GAME_BOARD_INCORRECT_CONTAINER);

// game-board__incorrect-guesses
const GAME_BOARD_INCORRECT = document.createElement('div');
GAME_BOARD_INCORRECT.className = 'game-board__incorrect-guesses';
GAME_BOARD_INCORRECT_CONTAINER.append(GAME_BOARD_INCORRECT);
GAME_BOARD_INCORRECT.innerText = 'неверная догадка: ';

// game-board__incorrect-counter
const GAME_BOARD_COUNTER = document.createElement('div');
GAME_BOARD_COUNTER.className = 'game-board__incorrect-counter';
GAME_BOARD_INCORRECT_CONTAINER.append(GAME_BOARD_COUNTER);
GAME_BOARD_COUNTER.innerText = '0 / 6';

// game-keyboard
const GAME_KEYBOARD = document.createElement('div');
GAME_KEYBOARD.className = 'game-keyboard';
GAME_BOARD.append(GAME_KEYBOARD);

// game-keyboard__button
const ARR_BUTTON = [
  'А',
  'Б',
  'В',
  'Г',
  'Д',
  'Е',
  'Ж',
  'З',
  'И',
  'Й',
  'К',
  'Л',
  'М',
  'Н',
  'О',
  'П',
  'Р',
  'С',
  'Т',
  'У',
  'Ф',
  'Х',
  'Ц',
  'Ч',
  'Ш',
  'Щ',
  'Ъ',
  'Ы',
  'Ь',
  'Э',
  'Ю',
  'Я',
];

for (let i = 0; i < ARR_BUTTON.length; i += 1) {
  let letter = ARR_BUTTON[i];
  let game_keyboard_button = document.createElement('button');
  game_keyboard_button.className = 'game-keyboard__button';
  GAME_KEYBOARD.append(game_keyboard_button);
  game_keyboard_button.innerHTML = `${letter}`;
}

//question-and-answer list
const QUEST_ANSER = {
  0: ['провоз', 'Подсказка: Для пассажира проезд, а для багажа?'],
  1: [
    'счетчик',
    'Подсказка: Прибор, который обязан был включить советский таксист при посадке пассажира.',
  ],
  2: ['парашют', 'Подсказка: Что нужно, чтобы спуститься с небес на землю.'],
  3: ['рундук', 'Подсказка: Короб для багажа под нижней полкой поезда.'],
  4: ['транспорт', 'Подсказка: Превращает человека в пассажира.'],
  5: ['перевес', 'Подсказка: Излишек багажа пассажира самолёта.'],
  6: ['трап', 'Подсказка: Лестница для прилетевших.'],
  7: ['экипаж', 'Подсказка: "Коллектив" самолета.'],
  8: ['штурвал', 'Подсказка: "Баранка" капитана корабля.'],
  9: ['авиамодель', 'Подсказка: Миниатюрная копия самолета или вертолета.'],
};

// random word choice
function randomWord() {
  let num = Math.floor(Math.random() * 10);
  return QUEST_ANSER[num];
}

//add word
let newWord = randomWord();
addWord(newWord[0]);
addHint(newWord[1]);

function addWord(newWord) {
  for (let i = 0; i < newWord.length; i += 1) {
    let char_elem = document.createElement('div');
    char_elem.className = 'game-word__char';
    GAME_WORD.append(char_elem);
    char_elem.style.borderBottom = '5px solid black';
  }
}

//add hint
function addHint(newHint) {
  GAME_BOARD_HINT.innerText = `${newHint}`;
}
//open char
function openChar(char) {
  let setLetters = newWord[0];
  for (let i = 0; i < setLetters.length; i += 1) {
    if (setLetters[i].toUpperCase() === char) {
      GAME_WORD.children[i].innerHTML = `${char}`;
      GAME_WORD.children[i].style.borderBottom = 'none';
    }
  }
}
// disabled button
function disabledButton(char) {
  let lettersKeyboard = GAME_KEYBOARD.children;
  for (let i = 0; i < lettersKeyboard.length; i += 1) {
    if (lettersKeyboard[i].innerHTML === char) {
      lettersKeyboard[i].setAttribute('disabled', '');
    }
  }
}
// enabled button
function enabledButton() {
  let lettersKeyboard = GAME_KEYBOARD.children;
  for (let i = 0; i < lettersKeyboard.length; i += 1) {
    lettersKeyboard[i].disabled = 'false';
  }
}

//EventListener virtual_keyboard
GAME_KEYBOARD.addEventListener('click', event => {
  let char = event.target.innerText;
  if (char.length === 1) {
    openChar(char);
    disabledButton(char);
  }
  const checkKeyboardRus = `йцукенгшщзхъфывапролджэячсмитьбюё`;
  if (
    newWord[0].indexOf(char.toLowerCase()) === -1 &&
    checkKeyboardRus.indexOf(char.toLowerCase()) >= 0
  ) {
    disabledButton(char);
    countIncorrect();
    startModal();
  }
});
//EventListener keyboard
document.addEventListener('keydown', event => {
  let button = event.key;
  const checkKeyboardRus = `йцукенгшщзхъфывапролджэячсмитьбюё`;
  if (checkKeyboardRus.indexOf(button.toLowerCase()) >= 0) {
    for (let i = 0; i < ARR_BUTTON.length; i += 1) {
      //let engSymbol = ARR_BUTTON[i];
      let char = ARR_BUTTON[i];
      if (
        char === button.toUpperCase() &&
        GAME_KEYBOARD.children[ARR_BUTTON.indexOf(event.key.toUpperCase())]
          .disabled === false
      ) {
        if (newWord[0].indexOf(char.toLowerCase()) === -1) {
          countIncorrect();
        }
        openChar(char);
        disabledButton(char);
        startModal();
      }
    }
  }
});

//body parts
const HANGMAN_BODY = document.createElement('div');
HANGMAN_BODY.className = 'hangman-body';
HANGMAN.prepend(HANGMAN_BODY);

//body parts head
const HANGMAN_BODY_HEAD = document.createElement('div');
HANGMAN_BODY_HEAD.className = 'hangman-body__head';
HANGMAN_BODY.prepend(HANGMAN_BODY_HEAD);

//body parts body
const HANGMAN_BODY_BODY = document.createElement('img');
HANGMAN_BODY_BODY.className = 'hangman-body__body';
HANGMAN_BODY.append(HANGMAN_BODY_BODY);
HANGMAN_BODY_BODY.src = 'assets/img/body.svg';

//body parts left-hand
const HANGMAN_BODY_LEFT_HAND = document.createElement('img');
HANGMAN_BODY_LEFT_HAND.className = 'hangman-body__left-hand';
HANGMAN_BODY.append(HANGMAN_BODY_LEFT_HAND);
HANGMAN_BODY_LEFT_HAND.src = 'assets/img/hand-one.svg';

//body parts right-hand
const HANGMAN_BODY_RIGHT_HAND = document.createElement('img');
HANGMAN_BODY_RIGHT_HAND.className = 'hangman-body__right-hand';
HANGMAN_BODY.append(HANGMAN_BODY_RIGHT_HAND);
HANGMAN_BODY_RIGHT_HAND.src = 'assets/img/hand-two.svg';

//body parts left-leg
const HANGMAN_BODY_LEFT_LEG = document.createElement('img');
HANGMAN_BODY_LEFT_LEG.className = 'hangman-body__left-leg';
HANGMAN_BODY.append(HANGMAN_BODY_LEFT_LEG);
HANGMAN_BODY_LEFT_LEG.src = 'assets/img/leg-one.svg';

//body parts right-leg
const HANGMAN_BODY_RIGHT_LEG = document.createElement('img');
HANGMAN_BODY_RIGHT_LEG.className = 'hangman-body__right-leg';
HANGMAN_BODY.append(HANGMAN_BODY_RIGHT_LEG);
HANGMAN_BODY_RIGHT_LEG.src = 'assets/img/leg-two.svg';

//add body parts
function addBodyParts(partsBody) {
  HANGMAN_BODY.children[partsBody - 1].style.opacity = '1';
}

// add counter incorrect guesses
let countIncorrectGuesses = 0;
function countIncorrect() {
  countIncorrectGuesses += 1;
  GAME_BOARD_COUNTER.innerHTML = `${countIncorrectGuesses} / 6`;
  addBodyParts(countIncorrectGuesses);
}

//const checkKeyboardEng = `qwertyuiop[]asdfghjkl;''zxcvbnm,./`;

// modal
const MODAL_BACKGROUND = document.createElement('div');
MODAL_BACKGROUND.className = 'modal-background';
MODAL_BACKGROUND.classList.add('close');
const MODAL = document.createElement('div');
MODAL.className = 'modal-desktop';
MODAL_BACKGROUND.append(MODAL);
BODY.append(MODAL_BACKGROUND);

//start modal__game over
function gameOver() {
  GAME_BOARD_COUNTER.innerHTML[0] = 0;
  enabledButton();
}
function startModal() {
  console.log(GAME_BOARD_COUNTER.innerHTML[0]);
  if (GAME_BOARD_COUNTER.innerHTML[0] === '6') {
    modalEndGame();
    const MESSAGE = document.querySelector('.modal-desktop__message');
    MESSAGE.style.color = 'rgb(151, 15, 15)';
    MESSAGE.innerText = 'Слово не угадано! Рискнете еще раз?';
    gameOver();
  }
  let setLetters = newWord[0];
  let count = 0;
  for (let i = 0; i < setLetters.length; i += 1) {
    if (GAME_WORD.children[i].style.borderBottom === 'none') {
      count += 1;
      if (count === setLetters.length) {
        modalEndGame();
        const MESSAGE = document.querySelector('.modal-desktop__message');
        MESSAGE.style.color = 'rgb(32, 136, 103)';
        MESSAGE.innerText = 'Поздравляем! Вы угадали!';
        gameOver();
      }
    }
  }
}

//modal end game
function modalEndGame() {
  MODAL_BACKGROUND.classList.add('open');
  MODAL_BACKGROUND.classList.remove('close');
  const MESSAGE = document.createElement('div');
  MESSAGE.classList = 'modal-desktop__message';
  MODAL.append(MESSAGE);

  const WORD_SECRET = document.createElement('div');
  WORD_SECRET.classList = 'modal-desktop__word-secret';
  WORD_SECRET.innerText = `секретное слово: `;
  const WORD_SECRET_SPAN = document.createElement('span');
  WORD_SECRET_SPAN.innerText = `${newWord[0].toUpperCase()}`;
  WORD_SECRET_SPAN.classList = 'modal-desktop__word-secret-span';
  MODAL.append(WORD_SECRET);
  WORD_SECRET.append(WORD_SECRET_SPAN);

  const PLAY_AGAIN = document.createElement('button');
  PLAY_AGAIN.classList = 'modal-desktop__button';
  PLAY_AGAIN.innerText = `PLAY AGAIN`;
  MODAL.append(PLAY_AGAIN);
}
