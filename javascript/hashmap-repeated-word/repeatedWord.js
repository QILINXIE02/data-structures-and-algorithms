function repeatedWord(inputString) {
  if (!inputString) {
      return null;
  }

  const words = inputString.toLowerCase().split(/\W+/); // Tokenize and convert to lowercase
  const wordCount = new Map();

  for (const word of words) {
      if (wordCount.has(word)) {
          return word;
      } else {
          wordCount.set(word, 1);
      }
  }

  return null;
}

module.exports = repeatedWord;
