const reverseArrayInPlace = require('./reverseArrayInPlace');

// Test cases
describe('reverseArrayInPlace', () => {
  test('should reverse an array in place', () => {
    const inputArray = [1, 2, 3, 4, 5, 6];
    const expectedOutput = [6, 5, 4, 3, 2, 1];

    const actualOutput = reverseArrayInPlace(inputArray);

    expect(actualOutput).toEqual(expectedOutput);
  });

});
