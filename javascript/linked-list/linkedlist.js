'use strict';

const Node = require('./node');

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        const newNode = new Node(value);
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

    includes(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    toString() {
        let current = this.head;
        let linkedListStr = "";
        while (current) {
            linkedListStr += `{ ${current.value} } -> `;
            current = current.next;
        }
        linkedListStr += "NULL";
        return linkedListStr;
    }
}

module.exports = LinkedList;
