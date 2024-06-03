function insert(sortedArr, value) {
  let i = 0;
  while (i < sortedArr.length && value > sortedArr[i]) {
    i++;
  }
  for (let j = sortedArr.length - 1; j >= i; j--) {
    sortedArr[j + 1] = sortedArr[j];
  }
  sortedArr[i] = value;
}

function insertionSort(arr) {
  const sortedArr = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    insert(sortedArr, arr[i]);
  }
  return sortedArr;
}

module.exports = { insertionSort };
