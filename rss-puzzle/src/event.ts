export function closeLoginForm() {
  const buttonLoginForm: Element | null = document.querySelector(
    '.modal-login-form__button',
  );
  const modalLoginForm: Element | null =
    document.querySelector('.modal-login-form');

  if (buttonLoginForm === null || modalLoginForm === null)
    throw Error('Element is Error');

  modalLoginForm.addEventListener('submit', () => {
    modalLoginForm.classList.add('close');
  });
}
