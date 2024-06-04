const { mergeSort } = require('./merge');

describe('Merge Sort', () => {
  test('sorts an array with random elements', () => {
    expect(mergeSort([8, 4, 23, 42, 16, 15])).toEqual([4, 8, 15, 16, 23, 42]);
  });

  test('sorts a reverse-sorted array', () => {
    expect(mergeSort([20, 18, 12, 8, 5, -2])).toEqual([-2, 5, 8, 12, 18, 20]);
  });

  test('sorts an array with few unique elements', () => {
    expect(mergeSort([5, 12, 7, 5, 5, 7])).toEqual([5, 5, 5, 7, 7, 12]);
  });

  test('sorts a nearly-sorted array', () => {
    expect(mergeSort([2, 3, 5, 7, 13, 11])).toEqual([2, 3, 5, 7, 11, 13]);
  });

  test('sorts an empty array', () => {
    expect(mergeSort([])).toEqual([]);
  });

  test('sorts a single-element array', () => {
    expect(mergeSort([5])).toEqual([5]);
  });

  test('sorts an array with negative numbers', () => {
    expect(mergeSort([-3, -1, -4, -2, 0])).toEqual([-4, -3, -2, -1, 0]);
  });

  test('sorts an array with duplicate numbers', () => {
    expect(mergeSort([3, 3, 2, 1, 2])).toEqual([1, 2, 2, 3, 3]);
  });

  test('sorts an array with already sorted elements', () => {
    expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test('sorts an array with all identical elements', () => {
    expect(mergeSort([7, 7, 7, 7, 7])).toEqual([7, 7, 7, 7, 7]);
  });
});
