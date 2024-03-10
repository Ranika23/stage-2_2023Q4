export function createLoginForm() {
  const modalLoginForm: Element | null = document.createElement('form');
  modalLoginForm.className = 'modal-login-form';
  modalLoginForm.setAttribute('onsubmit', 'return false');

  const bodyContainer: Element | null =
    document.querySelector('.body-container');
  if (bodyContainer === null) throw Error('Element is Error');
  bodyContainer.prepend(modalLoginForm);

  creatInputLoginForm(modalLoginForm);
  creatButtonLoginForm(modalLoginForm);
}

function creatInputLoginForm(modalLoginForm: Element) {
  const inputLoginFormOne: Element | null = document.createElement('input');
  const inputLoginFormTwo: Element | null = document.createElement('input');

  inputLoginFormOne.className = 'modal-login-form__input';
  inputLoginFormTwo.className = 'modal-login-form__input';

  if (modalLoginForm === null) throw Error('Element is Error');
  modalLoginForm.prepend(inputLoginFormOne);
  modalLoginForm.prepend(inputLoginFormTwo);

  setAttributeInput(inputLoginFormOne, inputLoginFormTwo);
}

function setAttributeInput(
  inputLoginFormOne: Element,
  inputLoginFormTwo: Element,
) {
  inputLoginFormOne.setAttribute('type', 'text');
  inputLoginFormTwo.setAttribute('type', 'text');

  inputLoginFormOne.setAttribute('placeholder', 'First Name');
  inputLoginFormTwo.setAttribute('placeholder', 'Surname');

  inputLoginFormOne.setAttribute('required', '');
  inputLoginFormTwo.setAttribute('required', '');

  inputLoginFormOne.setAttribute('name', 'name');
  inputLoginFormTwo.setAttribute('name', 'surname');

  inputLoginFormOne.setAttribute(
    'pattern',
    `^\s*[A-ZА-Я][a-zа-я]+('[a-zа-я]+|-[A-ZА-Я][a-zа-я]+)?\s*$`,
  );
  inputLoginFormTwo.setAttribute(
    'pattern',
    `^\s*[A-ZА-Я][a-zа-я]+('[a-zа-я]+|-[A-ZА-Я][a-zа-я]+)?\s*$`,
  );
}

function creatButtonLoginForm(modalLoginForm: Element) {
  const buttonLoginForm: Element | null = document.createElement('button');
  buttonLoginForm.className = 'modal-login-form__button';
  buttonLoginForm.textContent = 'Login';

  if (modalLoginForm === null) throw Error('Element is Error');
  modalLoginForm.append(buttonLoginForm);
}
