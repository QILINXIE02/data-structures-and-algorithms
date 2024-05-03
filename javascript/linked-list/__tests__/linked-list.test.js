'use strict';

const LinkedList = require('../linkedlist');
const Node = require('../node');

describe('Linked List', () => {
    it('can successfully instantiate an empty linked list', () => {
        const linkedList = new LinkedList();
        expect(linkedList.head).toBeNull();
    });

    it('can properly insert into the linked list', () => {
        const linkedList = new LinkedList();
        linkedList.insert(1);
        expect(linkedList.head.value).toEqual(1);
    });

    it('the head property will properly point to the first node in the linked list', () => {
        const linkedList = new LinkedList();
        linkedList.insert(1);
        linkedList.insert(2);
        expect(linkedList.head.value).toEqual(2);
    });

    it('can properly insert multiple nodes into the linked list', () => {
        const linkedList = new LinkedList();
        linkedList.insert(1);
        linkedList.insert(2);
        linkedList.insert(3);
        expect(linkedList.head.value).toEqual(3);
    });

    it('will return true when finding a value within the linked list that exists', () => {
        const linkedList = new LinkedList();
        linkedList.insert(1);
        linkedList.insert(2);
        linkedList.insert(3);
        expect(linkedList.includes(2)).toBeTruthy();
    });

    it('will return false when searching for a value in the linked list that does not exist', () => {
        const linkedList = new LinkedList();
        linkedList.insert(1);
        linkedList.insert(2);
        linkedList.insert(3);
        expect(linkedList.includes(4)).toBeFalsy();
    });

    it('can properly return a collection of all the values that exist in the linked list', () => {
        const linkedList = new LinkedList();
        linkedList.insert(1);
        linkedList.insert(2);
        linkedList.insert(3);
        expect(linkedList.toString()).toEqual("{ 3 } -> { 2 } -> { 1 } -> NULL");
    });
});
