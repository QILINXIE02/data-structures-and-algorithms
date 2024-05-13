class Stack {
  constructor() {
      this.stack = [];
  }

  push(value) {
      this.stack.push(value);
  }

  pop() {
      if (!this.isEmpty()) {
          return this.stack.pop();
      } else {
          throw new Error("pop from empty stack");
      }
  }

  peek() {
      if (!this.isEmpty()) {
          return this.stack[this.stack.length - 1];
      } else {
          return null;
      }
  }

  isEmpty() {
      return this.stack.length === 0;
  }
}

class PseudoQueue {
  constructor() {
      this.stack1 = new Stack();
      this.stack2 = new Stack();
  }

  enqueue(value) {
      this.stack1.push(value);
  }

  dequeue() {
      if (this.stack2.isEmpty()) {
          while (!this.stack1.isEmpty()) {
              this.stack2.push(this.stack1.pop());
          }
      }
      return !this.stack2.isEmpty() ? this.stack2.pop() : null;
  }
}

module.exports = PseudoQueue;
