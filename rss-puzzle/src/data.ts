import wordsLevel_1 from '../public/dates/wordCollectionLevel6.json';
console.log(wordsLevel_1);

export function sentence() {
  return wordsLevel_1.rounds[0].words[4].textExample.split(' ');
}
