class Node {
  constructor(value) {
      this.value = value;
      this.next = null;
  }
}

class LinkedList {
  constructor() {
      this.head = null;
  }

  append(newValue) {
      const newNode = new Node(newValue);
      if (!this.head) {
          this.head = newNode;
          return;
      }
      let current = this.head;
      while (current.next) {
          current = current.next;
      }
      current.next = newNode;
  }

  kthFromEnd(k) {
      if (!this.head) {
          throw new Error("Empty list");
      }

      if (k <= 0 || !Number.isInteger(k)) {
          throw new Error("k must be a positive integer");
      }

      let fast = this.head;
      let slow = this.head;

      for (let i = 0; i < k; i++) {
          if (!fast.next) {
              throw new Error("k is greater than the length of the list");
          }
          fast = fast.next;
      }

      while (fast.next) {
          fast = fast.next;
          slow = slow.next;
      }

      return slow.value;
  }
}

module.exports = LinkedList;
