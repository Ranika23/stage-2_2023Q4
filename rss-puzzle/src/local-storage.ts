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

export function saveLevelLocalStorage(rounds: number, words: number) {
  const level = {
    rounds: rounds,
    words: words,
  };
  localStorage.setItem('level', JSON.stringify(level));
}

export function getLevelLocalStorage() {
  const dataLevel: string | null = localStorage.getItem('level');
  if (dataLevel !== null) {
    const rounds = JSON.parse(dataLevel).rounds;
    const words = JSON.parse(dataLevel).words;
    if (words === 10) {
      return [rounds + 1, -1];
    } else return [rounds, words];
  }
}
