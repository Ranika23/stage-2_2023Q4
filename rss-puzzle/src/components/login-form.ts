export function createLoginForm() {
  const modalLoginForm: HTMLElement | null = document.createElement('form');
  modalLoginForm.className = 'modal-login-form';
  modalLoginForm.setAttribute('onsubmit', 'return false');

  const bodyContainer: Element | null =
    document.querySelector('.body-container');
  if (bodyContainer === null) throw Error('Element is Error');
  bodyContainer.prepend(modalLoginForm);

  creatInputLoginForm(modalLoginForm);
  creatButtonLoginForm(modalLoginForm);
}

function creatInputLoginForm(modalLoginForm: HTMLElement) {
  const inputLoginFormOne: Element | null = document.createElement('input');
  const inputLoginFormTwo: Element | null = document.createElement('input');

  inputLoginFormOne.className = 'modal-login-form__input';
  inputLoginFormTwo.className = 'modal-login-form__input';

  if (modalLoginForm === null) throw Error('Element is Error');
  modalLoginForm.append(inputLoginFormOne);
  modalLoginForm.append(inputLoginFormTwo);

  setAttributeInput(inputLoginFormOne, inputLoginFormTwo);
  setValidationForm(modalLoginForm);
}

function setAttributeInput(
  inputLoginFormOne: Element,
  inputLoginFormTwo: Element,
) {
  inputLoginFormOne.setAttribute('type', 'text');
  inputLoginFormTwo.setAttribute('type', 'text');

  inputLoginFormOne.setAttribute('placeholder', 'First Name');
  inputLoginFormTwo.setAttribute('placeholder', 'Surname');

  inputLoginFormOne.setAttribute('minlength', '3');
  inputLoginFormTwo.setAttribute('minlength', '4');

  inputLoginFormOne.setAttribute('required', '');
  inputLoginFormTwo.setAttribute('required', '');

  inputLoginFormOne.setAttribute('name', 'name');
  inputLoginFormTwo.setAttribute('name', 'surname');

  inputLoginFormOne.setAttribute(
    'pattern',
    `^\s*[A-Z][a-z]+('[a-z]+|-[A-Z][a-z]+)?\s*$`,
  );
  inputLoginFormTwo.setAttribute(
    'pattern',
    `^\s*[A-Z][a-z]+('[a-z]+|-[A-Z][a-z]+)?\s*$`,
  );

  inputLoginFormOne.setAttribute('autocomplete', 'off');
  inputLoginFormTwo.setAttribute('autocomplete', 'off)');
}

function setValidationForm(modalLoginForm: HTMLElement) {
  modalLoginForm.addEventListener('input', (e) => {
    const inputForm = e.target as HTMLInputElement;
    if (inputForm === null) throw Error('Element is null');
    if (inputForm.value.length === 0) {
      inputForm.setCustomValidity(
        'Используйте только буквы английского алфавита и дефис',
      );
    } else if (
      inputForm.value.length === 1 &&
      'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(inputForm.value[0]) === -1
    ) {
      inputForm.setCustomValidity('Укажите первую букву прописной');
    } else if (
      inputForm.value.length > 1 &&
      inputForm.value[inputForm.value.length - 2] === '-' &&
      'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(
        inputForm.value[inputForm.value.length - 1],
      ) === -1
    ) {
      inputForm.setCustomValidity('Укажите прописную букву после дефиса');
    } else {
      inputForm.setCustomValidity(
        inputForm.validity.patternMismatch
          ? 'Используйте только буквы английского алфавита и дефис'
          : '',
      );
    }
  });
}

function creatButtonLoginForm(modalLoginForm: Element) {
  const buttonLoginForm: Element | null = document.createElement('button');
  buttonLoginForm.className = 'modal-login-form__button';
  buttonLoginForm.textContent = 'Login';

  if (modalLoginForm === null) throw Error('Element is Error');
  modalLoginForm.append(buttonLoginForm);
}
