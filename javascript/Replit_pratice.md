```'use strict';

const practice = module.exports = {};

const Queue = require('./data-structures/queue');

practice.QuestionOfTheDay = function() {
}

// Linked List Iterations:
// Return the largest valued Node
// List Contains: (1->5->12->9)
practice.iterateLinkedListIteratively = function(list) {
  let biggest = list.head.value;
  let current = list.head;
  while (current) {
    if (current.value > biggest) { biggest = current.value; }
    current = current.next;
  }
  return biggest;
}

practice.iterateLinkedListRecursively = function(node, largest = 0) {
  if (!node) { return largest; } // BASE CASE
  if (node.value > largest) { largest = node.value; }
  return this.iterateLinkedListRecursively(node.next, largest);
}


// Stack Iterations:
// Return the largest valued Node
// Stack Contains: ((9->12->5->1)
practice.iterateStackIteratively = function(stack) {
  let biggest = stack.peek(); // not a made up number
  while (stack.peek()) {
    let current = stack.pop();
    if (current > biggest) { biggest = current; }
  }
  return biggest;
}

practice.iterateStackRecursively = function(stack, largest = 0) {
  if (!stack.peek()) { return largest; } // BASE CASE
  let currentValue = stack.pop();
  if (currentValue > largest) { largest = currentValue; }
  return this.iterateStackRecursively(stack, largest);
}

// Queue Iterations:
// Return the largest valued Node
// Queue Contains: (1->5->12->9)
practice.iterateQueueIteratively = function(queue) {
  let biggest = queue.peek(); // not a made up number
  while (queue.peek()) {
    let current = queue.dequeue();
    if (current > biggest) { biggest = current; }
  }
  return biggest;
}

practice.iterateQueueRecursively = function(queue, largest = 0) {
  if (!queue.peek()) { return largest; }
  let currentValue = queue.dequeue();
  if (currentValue > largest) { largest = currentValue; }
  return this.iterateQueueRecursively(queue, largest);
}


// Tree Iterations:
// Tree is a BST created from this list of numbers:
// 9,4,17,3,6,22,5,7,20

// Return True/False if the number (value) is in the tree
// Inbound arguments are the tree and the value to look for
practice.contains = function(tree, value) {
  let nodeQueue = new Queue();
  nodeQueue.enqueue(tree.root);
  while (nodeQueue.peek()) {
    let currentNode = nodeQueue.dequeue();
    if (currentNode.value === value) {
      return true;
    }
    if (currentNode.left) {
      nodeQueue.enqueue(currentNode.left);
    }
    if (currentNode.right) {
      nodeQueue.enqueue(currentNode.right);
    }
  }
  return false;
}

practice.containsBinarySearch = function(tree, value) {

  let current = tree.root;
  while (current) {
    if (current.value === value) {
      return true;
    } else if (value < current.value) {
      current = current.left;
    } else {
      current = current.right;
    }
  }

  return false;
}


// For the next 4 iterations: return a list with the values of each node

// Inbound argument is the tree root and an empty array
practice.preOrderTraversal = function(node, values) {
  values.push(node.value);
  if (node.left) { practice.preOrderTraversal(node.left, values); }
  if (node.right) { practice.preOrderTraversal(node.right, values); }
  return values;
}

// Inbound argument is the tree root and an empty array
practice.inOrderTraversal = function(node, values) {
  if (node.left) { practice.inOrderTraversal(node.left, values); }
  values.push(node.value);
  if (node.right) { practice.inOrderTraversal(node.right, values); }
  return values;
}


// Inbound argument is the tree root and an empty array
practice.postOrderTraversal = function(node, values) {
  if (node.left) { practice.postOrderTraversal(node.left, values); }
  if (node.right) { practice.postOrderTraversal(node.right, values); }
  values.push(node.value);
  return values;
}

// Inbound argument is the tree
practice.breadthFirstTraversal = function(tree) {
  let values = [];

  let nodeQueue = new Queue();
  nodeQueue.enqueue(tree.root);
  while (nodeQueue.peek()) {
    let currentNode = nodeQueue.dequeue();
    values.push(currentNode.value);
    if (currentNode.left) {
      nodeQueue.enqueue(currentNode.left);
    }
    if (currentNode.right) {
      nodeQueue.enqueue(currentNode.right);
    }
  }

  return values;
}
```









