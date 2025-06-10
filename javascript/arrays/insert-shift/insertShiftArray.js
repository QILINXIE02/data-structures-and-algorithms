// insertShiftArray function definition
function insertShiftArray(arr, val) {
  // Calculate the middle index of the array
  const middleIndex = Math.ceil(arr.length / 2);

  // Insert the value at the middle index using array slicing
  const result = [
    ...arr.slice(0, middleIndex),
    val,
    ...arr.slice(middleIndex),
  ];

  return result;
}

module.exports = insertShiftArray;
