const binarySearch = require('./binarySearch');

describe('binarySearch', () => {
  test('Finds existing element (15)', () => {
    expect(binarySearch([4, 8, 15, 16, 23, 42], 15)).toBe(2);
  });

  test('Finds existing element (42)', () => {
    expect(binarySearch([-131, -82, 0, 27, 42, 68, 179], 42)).toBe(4);
  });

  test('Returns -1 for missing element (90)', () => {
    expect(binarySearch([11, 22, 33, 44, 55, 66, 77], 90)).toBe(-1);
  });

  test('Returns -1 for missing element (4)', () => {
    expect(binarySearch([1, 2, 3, 5, 6, 7], 4)).toBe(-1);
  });
});
