const zipLists = require('./zip');
const LinkedList = require('../linked-list/linkedlist.js');

test('Zip two linked lists together', () => {
  // Create the first linked list: {1} -> {3} -> {2} -> null
  const list1 = new LinkedList();
  list1.append(1);
  list1.append(3);
  list1.append(2);

  // Create the second linked list: {5} -> {9} -> {4} -> null
  const list2 = new LinkedList();
  list2.append(5);
  list2.append(9);
  list2.append(4);

  // Call the zipLists function
  const result = zipLists(list1, list2);

  // Expected result: {1} -> {5} -> {3} -> {9} -> {2} -> {4} -> null
  const expectedResult = [1, 5, 3, 9, 2, 4];

  // Traverse the result linked list and collect the values
  const values = [];
  let current = result.head;
  while (current !== null) {
    values.push(current.value);
    current = current.next;
  }

  // Assert that the values match the expected result
  expect(values).toEqual(expectedResult);
});
