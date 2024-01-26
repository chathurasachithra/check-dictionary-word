# check-dictionary-word

A module to verify if a word is a valid dictionary word. Simple and efficient word-check functionality.

### install

```bash
$ npm install check-dictionary-word
```

### how to use?

```javascript
const isDictionaryWord = require('check-dictionary-word'),
    
isDictionaryWord('cat'); // true
isDictionaryWord('trinitrophenylmethylnitramine'); // true
isDictionaryWord('fg45fg'); // false

...
