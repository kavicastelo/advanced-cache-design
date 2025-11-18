"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoublyLinkedList = void 0;
const LFUNode_1 = require("./LFUNode");
class DoublyLinkedList {
    constructor() {
        this.size = 0;
        this.head = new LFUNode_1.LFUNode(0, 0);
        this.tail = new LFUNode_1.LFUNode(0, 0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }
    addNode(node) {
        node.next = this.head.next;
        node.prev = this.head;
        this.head.next.prev = node;
        this.head.next = node;
        this.size++;
    }
    removeNode(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
        this.size--;
    }
    removeLast() {
        if (this.size === 0)
            return null;
        const last = this.tail.prev;
        this.removeNode(last);
        return last;
    }
}
exports.DoublyLinkedList = DoublyLinkedList;
