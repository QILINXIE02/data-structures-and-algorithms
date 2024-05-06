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

  insertBefore(value, newValue) {
      const newNode = new Node(newValue);
      if (!this.head) {
          this.head = newNode;
          return;
      }
      if (this.head.value === value) {
          newNode.next = this.head;
          this.head = newNode;
          return;
      }
      let current = this.head;
      while (current.next) {
          if (current.next.value === value) {
              newNode.next = current.next;
              current.next = newNode;
              return;
          }
          current = current.next;
      }
      throw new Error("Value not found in the list");
  }

  insertAfter(value, newValue) {
      const newNode = new Node(newValue);
      if (!this.head) {
          this.head = newNode;
          return;
      }
      let current = this.head;
      while (current) {
          if (current.value === value) {
              newNode.next = current.next;
              current.next = newNode;
              return;
          }
          current = current.next;
      }
      throw new Error("Value not found in the list");
  }
}

module.exports = { LinkedList, Node };
