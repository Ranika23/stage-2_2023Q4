import wordsLevel_1 from '../public/dates/wordCollectionLevel1.json';
console.log(wordsLevel_1);

export function sentence() {
  return wordsLevel_1.rounds[0].words[0].textExample.split(' ');
}
