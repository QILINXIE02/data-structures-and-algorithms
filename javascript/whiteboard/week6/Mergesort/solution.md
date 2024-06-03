Step 1: Define the Problem
Problem Statement
Ask the candidate to implement an insertion sort algorithm without using built-in sort methods. Provide an example input array of positive and negative integers. Evaluate the candidate's solution based on the Whiteboard Rubric.

Domain-Specific Words
Insertion Sort: A sorting algorithm that builds the final sorted array one item at a time by repeatedly inserting the next element into the sorted part of the array.
Binary Search: A search algorithm that finds the position of a target value within a sorted array by repeatedly dividing the search interval in half.
Step 2: Identify Test Cases
Sample Test Case
Input:

const inputArray = [8, 4, 23, 42, 16, 15];
Output:
[4, 8, 15, 16, 23, 42]


Empty Array:
const emptyArray = [];

Single Element:
const singleElementArray = [5];

Array with Negative Integers:
const negativeArray = [-5, -8, -3, -1, -9];


Step 3: Visualize the Solution
Input
List of numbers to sort.
Output
Sorted list of numbers.
Steps
Create an output array.
Iterate through the input array.
For each item in the input array, find the correct position to insert it into the output array.
Insert the item into the output array.
Repeat until all items are inserted into the output array.
```Input: Unsorted array

1. Split the array into halves until each sub-array contains only one element.
    - [8, 3, 1, 7, 0, 10, 2, 4] -> [8, 3, 1, 7], [0, 10, 2, 4] -> [8, 3], [1, 7], [0, 10], [2, 4]

2. Merge the sub-arrays back together, sorting them in the process.
    - [8, 3], [1, 7] -> [3, 8], [1, 7] -> [1, 3, 7, 8]
    - [0, 10], [2, 4] -> [0, 2, 4, 10]

3. Merge the sorted sub-arrays to form the final sorted array.
    - [1, 3, 7, 8], [0, 2, 4, 10] -> [0, 1, 2, 3, 4, 7, 8, 10]

Output: Sorted array
```




Step 4: Plan the Algorithm
Insertion Sort Algorithm
Create an empty output array.
Iterate through each item in the input array.
For each item, find the correct position to insert it into the output array.
Insert the item into the correct position in the output array.
Return the sorted output array.
Insert Algorithm
Given an array and a value to insert.
Iterate through the array to find the correct position to insert the value.
If the value is less than the current array element, insert it at that position.
Otherwise, continue iterating.
If the value is greater than all elements in the array, insert it at the end.


Step 5: Code
```const merge = (left, right) => {
  let result = [];
  while (left.length && right.length) {
    result.push(left[0] < right[0] ? left.shift() : right.shift());
  }
  return [...result, ...left, ...right];
};

const mergesort = array => {
  if (array.length <= 1) return array;
  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);
  return merge(mergesort(left), mergesort(right));
};
```
step 6.
Big O Analysis
Time Complexity: O(n log n) - Mergesort has a time complexity of O(n log n) as it divides the array into halves recursively and then merges them back together.
Space Complexity: O(n) - Mergesort requires additional space for the temporary arrays created during the sorting process, resulting in a space complexity of O(n).
