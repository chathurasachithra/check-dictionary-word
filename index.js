const dictionary = require('./dict/index');

/**
 * Check if the given string is a real english dictionary
 * 
 * @param {*} word 
 * @returns 
 */
const checkDictionaryWord = (word) => {
    word = word.trim().toLowerCase();
    const targetLengthProperty = `char${word.length}Words`;
    if (!dictionary[targetLengthProperty]) {
        return false;
    }
    const dictionarySubsection = dictionary[targetLengthProperty][word.slice(0, 2)];
    return !!(dictionarySubsection && dictionarySubsection.includes(word));;
};

module.exports = checkDictionaryWord;
