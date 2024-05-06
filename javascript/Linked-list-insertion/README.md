
# Linked-List-Insertion Code Challenge: Class 06
Challenge Type: Extending an Implementation

we are tasked with implementing three methods (append, insertBefore, insertAfter) for a Linked List class. These methods allow adding nodes to the end of the list, inserting nodes before or after specific values in the list.

## Whiteboard Process
[Figma](https://www.figma.com/file/0ydwEQSkhkwlkboFGoHeuW/Code-challenge-6%3A-linked-list-insertions?type=whiteboard&node-id=0-1&t=EIDSy1ZRe0czRvLP-0):
![alt text](image.png)

## Approach & Efficiency

In implementing these operations, I traverse the linked list to locate the insertion point for appending, inserting before, or inserting after a node. After finding the appropriate position, I adjust the pointers to insert the new node.

### Big O
Time complexity: O(n) where n is the number of nodes in the linked list, as we need to traverse the list to append the new node.
Space complexity: O(1) since we only use a constant amount of extra space regardless of the size of the input.

## Solution
[Code link](./insert.test.js)




