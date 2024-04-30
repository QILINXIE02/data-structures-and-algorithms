const insertShiftArray = require('./insertShiftArray');

// Test cases
test('Inserts value in the middle of an array', () => {
    expect(insertShiftArray([2,4,6,-8], 5)).toEqual([2,4,5,6,-8]);
    expect(insertShiftArray([42,8,15,23,42], 16)).toEqual([42,8,15,16,23,42]);
});

test('Inserts value in the middle of an array with even length', () => {
    expect(insertShiftArray([1, 2, 4, 5], 3)).toEqual([1, 2, 3, 4, 5]);
});

test('Inserts value in the middle of an array with one element', () => {
    expect(insertShiftArray([1], 2)).toEqual([1, 2]);
});

test('Inserts value in the middle of an empty array', () => {
    expect(insertShiftArray([], 1)).toEqual([1]);
});
