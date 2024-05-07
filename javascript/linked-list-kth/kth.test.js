const LinkedList = require('./kth');

// Test Case - k is greater than the length of the linked list
test('k is greater than the length of the linked list', () => {
  const ll = new LinkedList();
  ll.append(1);
  ll.append(3);
  ll.append(8);
  ll.append(2);
  expect(() => ll.kthFromEnd(6)).toThrow('k is greater than the length of the list');
});

// Test Case - k and the length of the list are the same
test('k and the length of the list are the same', () => {
  const ll = new LinkedList();
  ll.append(1);
  ll.append(3);
  ll.append(8);
  ll.append(2);
  expect(() => ll.kthFromEnd(4)).toThrow('k is greater than the length of the list');
});

// Test Case - k is not a positive integer
test('k is not a positive integer', () => {
  const ll = new LinkedList();
  ll.append(1);
  ll.append(3);
  ll.append(8);
  ll.append(2);
  expect(() => ll.kthFromEnd(-2)).toThrow('k must be a positive integer');
});

// Test Case - the linked list is of size 1
test('the linked list is of size 1', () => {
  const ll = new LinkedList();
  ll.append(1);
  expect(() => ll.kthFromEnd(1)).toThrow('k is greater than the length of the list');
});

// Test Case - "Happy Path" where k is not at the end, but somewhere in the middle of the linked list
test('k is somewhere in the middle of the linked list', () => {
  const ll = new LinkedList();
  ll.append(1);
  ll.append(3);
  ll.append(8);
  ll.append(2);
  expect(ll.kthFromEnd(2)).toBe(3);
});
