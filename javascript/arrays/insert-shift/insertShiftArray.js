// insertShiftArray function definition
function insertShiftArray(arr, val) {
  // Calculate the middle index of the array
  const middleIndex = Math.ceil(arr.length / 2);

  // Create a new array to hold the result
  const result = [];

  // Iterate through the original array
  for (let i = 0; i < arr.length; i++) {
      // If we reach the middle index, insert the value
      if (i === middleIndex) {
          result.push(val);
      }
      // Insert the current value from the original array
      result.push(arr[i]);
  }

  // Return the resulting array
  return result;
}

module.exports = insertShiftArray;
