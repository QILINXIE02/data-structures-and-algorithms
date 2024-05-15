function isValidBrackets(str) {
  const stack = [];
  const bracketPairs = {
      '(': ')',
      '[': ']',
      '{': '}'
  };

  for (let char of str) {
      if (char in bracketPairs) {
          stack.push(char);
      } else if (char === ')' || char === ']' || char === '}') {
          if (stack.length === 0) return false; // unmatched closing bracket
          const topBracket = stack.pop();
          if (bracketPairs[topBracket] !== char) return false; // unmatched opening bracket
      }
  }

  return stack.length === 0; // true if all brackets are matched
}

module.exports = isValidBrackets;
