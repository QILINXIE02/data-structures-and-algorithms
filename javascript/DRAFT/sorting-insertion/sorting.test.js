const { insertionSort } = require('./sorting');

describe('Insertion Sort', () => {
  it('sorts a sample array', () => {
    const arr = [8, 4, 23, 42, 16, 15];
    const expected = [4, 8, 15, 16, 23, 42];
    expect(insertionSort(arr)).toEqual(expected);
  });

  it('sorts a reverse-sorted array', () => {
    const arr = [20, 18, 12, 8, 5, -2];
    const expected = [-2, 5, 8, 12, 18, 20];
    expect(insertionSort(arr)).toEqual(expected);
  });

  it('sorts an array with few unique elements', () => {
    const arr = [5, 12, 7, 5, 5, 7];
    const expected = [5, 5, 5, 7, 7, 12];
    expect(insertionSort(arr)).toEqual(expected);
  });

  it('sorts a nearly sorted array', () => {
    const arr = [2, 3, 5, 7, 13, 11];
    const expected = [2, 3, 5, 7, 11, 13];
    expect(insertionSort(arr)).toEqual(expected);
  });
});
