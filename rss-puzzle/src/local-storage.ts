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
    return [rounds, words];
  }
}

export function saveNextSentence(
  newSentence: string[],
  nextSentence: string[],
  hintTranslate: string[],
) {
  const Sentence = {
    newSentence: newSentence,
    nextSentence: nextSentence,
    hintTranslate: hintTranslate,
  };
  localStorage.setItem('Sentence', JSON.stringify(Sentence));
}

export function getNextSentence() {
  const sent = localStorage.getItem('Sentence');

  if (sent !== null) {
    const newSentence = JSON.parse(sent).newSentence;
    const nextSentence = JSON.parse(sent).nextSentence;
    const hintTranslate = JSON.parse(sent).hintTranslate;
    return [newSentence, nextSentence, hintTranslate];
  }
}
