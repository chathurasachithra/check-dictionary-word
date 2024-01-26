const nodeLemmatizer = require('node-lemmatizer');
const dictionary = require('./dict/index');

/**
 * Check if the given string is a real english dictionary
 * 
 * @param {*} word 
 * @returns 
 */
const checkDictionaryWord = (word) => {
    word = word.trim().toLowerCase();
    const lemmaWords = nodeLemmatizer.only_lemmas(word);
    if (lemmaWords.length > 1) {
        return true;
    }
    const targetLengthProperty = `char${word.length}Words`;
    if (!dictionary[targetLengthProperty]) {
        return false;
    }
    const dictionarySubsection = dictionary[targetLengthProperty][word.slice(0, 2)];
    return !!(dictionarySubsection && dictionarySubsection.includes(word));;
};

module.exports = checkDictionaryWord;
