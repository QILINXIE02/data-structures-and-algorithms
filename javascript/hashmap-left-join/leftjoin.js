function leftJoin(synonyms, antonyms) {
  const result = [];

  for (let key in synonyms) {
      const synonym = synonyms[key];
      const antonym = antonyms[key] !== undefined ? antonyms[key] : null;
      result.push([key, synonym, antonym]);
  }

  return result;
}

module.exports = { leftJoin };
