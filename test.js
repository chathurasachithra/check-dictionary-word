const assert = require('assert');
const checkDictionaryWord = require('./index');
const words = [
  ['hello', true],
  ['cat', true],
  ['zymogenesis', true],
  ['abbreviation', true],
  ['cccccccccccccccccc', false],
  ['trinitrophenylmethylnitramine', true],
  ['iphone', true],
  ['fg45fg', false]
];

const testWords = (words) => {
  const test = ([word, expected]) => {
    const t0 = performance.now();
    const result = checkDictionaryWord(word);
    const t1 = performance.now();
    console.log(`Time Taken for ${word}: ${t1 - t0} milliseconds.`);
    assert(result === expected, `Failed on word: ${word}. Expected: ${expected}, but got: ${result}`);
  }
  words.forEach(test);
  console.log("All tests passed successfully.");
}

testWords(words);
