# Hash Table Implementation in JavaScript

## Problem Domain

In this code challenge, we need to create a Hash Table class with the following methods:
- `add(key, value)`: Adds a key-value pair to the hash table.
- `get(key)`: Retrieves the value associated with the given key.
- `contains(key)`: Checks if the key exists in the table.
- `hash(key)`: Computes the index in the hash table for the given key.

## Whiteboard Process
[Figma](https://www.figma.com/board/2CfJ1XFhSXmEcBFe4kJo7S/Hash-Table-Code-Challenge%3A-Class-30?node-id=14905-11&t=pEyx9iu6r9PcCMfe-0) :

## Inputs / Outputs

### Add Method
- **Input**: `key`, `value`
- **Output**: None

### Get Method
- **Input**: `key`
- **Output**: Value associated with that key in the table

### Contains Method
- **Input**: `key`
- **Output**: Boolean indicating if the key exists in the table

### Hash Method
- **Input**: `key`
- **Output**: Index in the collection for that key


### Big O Analysis
- Add Method: O(1) on average, O(n) in the worst case (if many collisions occur).
- Get Method: O(1) on average, O(n) in the worst case.
- Contains Method: O(1) on average, O(n) in the worst case.
- Hash Method: O(k), where k is the length of the key (usually considered O(1) if key length is small).

## Solution
[Code link](./hashtable.js)

## Credit
ChatGPT help implemented the test file.
