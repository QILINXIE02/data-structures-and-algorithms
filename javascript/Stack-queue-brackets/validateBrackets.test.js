const isValidBrackets = require('./validateBrackets');

test('Valid brackets: "{}"', () => {
    expect(isValidBrackets("{}")).toBe(true);
});

test('Valid brackets: "{}(){}"', () => {
    expect(isValidBrackets("{}(){}")).toBe(true);
});

test('Valid brackets: "()[[Extra Characters]]"', () => {
    expect(isValidBrackets("()[[Extra Characters]]")).toBe(true);
});

test('Valid brackets: "(){}[[]]"', () => {
    expect(isValidBrackets("(){}[[]]")).toBe(true);
});

test('Valid brackets: "{}{Code}[Fellows](())"', () => {
    expect(isValidBrackets("{}{Code}[Fellows](())")).toBe(true);
});

test('Invalid brackets: "[({}]"', () => {
    expect(isValidBrackets("[({}]")).toBe(false);
});

test('Invalid brackets: "(]"', () => {
    expect(isValidBrackets("(]")).toBe(false);
});

test('Invalid brackets: "{(})"', () => {
    expect(isValidBrackets("{(})")).toBe(false);
});
