'use strict';

const Node = require('./node');

class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
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
