import wordsLevel_1 from '../public/dates/wordCollectionLevel1.json';

export function sentence(rounds: number, words: number) {
  return wordsLevel_1.rounds[rounds].words[words].textExample.split(' ');
}

export function hintTranslate(rounds: number, words: number) {
  return wordsLevel_1.rounds[rounds].words[words].textExampleTranslate.split(
    ' ',
  );
}

export function words(rounds: number) {
  return wordsLevel_1.rounds[rounds];
}
