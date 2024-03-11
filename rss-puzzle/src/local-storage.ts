export function saveUserLocalStorage() {
  const inputForm = document.querySelectorAll('.modal-login-form__input');
  if (inputForm === null) throw Error('Element is null');
  const surName = inputForm[0] as HTMLInputElement;
  const firstName = inputForm[1] as HTMLInputElement;

  const user = {
    firstName: firstName.value,
    surName: surName.value,
  };
  localStorage.setItem('user', JSON.stringify(user));
}
