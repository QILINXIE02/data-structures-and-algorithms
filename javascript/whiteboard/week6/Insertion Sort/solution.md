Interview 01

Step 1: Define the Problem
Problem Statement
Ask the candidate to implement a mergesort algorithm without using built-in methods. Provide an example input array of positive and negative integers. Evaluate the candidate's solution based on the Whiteboard Rubric.

Domain-Specific Words
Mergesort: A sorting algorithm that divides the array into smaller subarrays, sorts them individually, and then merges them back together.

Step 2: Identify Test Cases
Sample Test Case
Input:
const inputArray = [8, 4, 23, 42, 16, 15];
Output:


[4, 8, 15, 16, 23, 42]
Additional Test Cases
Empty Array:
const emptyArray = [];

Single Element:
const singleElementArray = [5];


Array with Negative Integers:
const negativeArray = [-5, -8, -3, -1, -9];

Step 3: Visualize the Solution
Input
List of key-value pairs to add, keys to retrieve or check.
Output
Sorted list of movie objects.

For add, hash the key and insert it at the correct index, handling collisions with a linked list.
For get, hash the key and traverse the linked list at the correct index to find the value.
For contains, hash the key and check if it exists in the linked list at the correct index.


Step 4: Plan the Algorithm
Add Method
Hash the key to get the index position in the hashtable.
Look at that bucket's value for the given index.
If a key-value pair is present, assume it's a linked list and append.
If no key-value pair is present, instantiate a new linked list and insert it into the hashtable at the correct index.
Get Method
Hash the key to get the index position in the hashtable.
Look at that bucket's value for the given index.
If the bucket holds a value, traverse the linked list within the bucket to find the matching key and return the value.
If a value associated with that key does not exist in the table, return null.
Contains Method
Hash the key to get the index position in the hashtable.
Look at that bucket's value for the given index.
If the bucket at that hashed key holds a value, return true.
If the bucket does not exist, return false (the key does not exist in the table).
Hash Method
Add all the ASCII values of the key together.
Multiply sum by a prime number (599).
Get the remainder when sum is divided by the total size of the array.
Insert key-value pair into the array at that index.

5.
```
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}
```
6. 
## Big O Analysis:
Time Complexity: O(n^2) - nested loops for iterating and comparing elements
Space Complexity: O(1) - in-place sorting algorithm, no additional space used
