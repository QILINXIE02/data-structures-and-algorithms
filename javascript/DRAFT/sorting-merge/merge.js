function merge(left, right, arr) {
  let i = 0, j = 0, k = 0;
  while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
          arr[k] = left[i];
          i++;
      } else {
          arr[k] = right[j];
          j++;
      }
      k++;
  }
  while (i < left.length) {
      arr[k] = left[i];
      i++;
      k++;
  }
  while (j < right.length) {
      arr[k] = right[j];
      j++;
      k++;
  }
}

function mergeSort(arr) {
  let n = arr.length;
  if (n > 1) {
      let mid = Math.floor(n / 2);
      let left = arr.slice(0, mid);
      let right = arr.slice(mid, n);
      mergeSort(left);
      mergeSort(right);
      merge(left, right, arr);
  }
  return arr;
}

module.exports = { mergeSort };
