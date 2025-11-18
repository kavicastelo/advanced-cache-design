import { LFUNode } from "./LFUNode";

export class DoublyLinkedList {
    head: LFUNode;
    tail: LFUNode;
    size: number = 0;

    constructor() {
        this.head = new LFUNode(0, 0);
        this.tail = new LFUNode(0, 0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    addNode(node: LFUNode) {
        node.next = this.head.next;
        node.prev = this.head;

        this.head.next!.prev = node;
        this.head.next = node;

        this.size++;
    }

    removeNode(node: LFUNode) {
        node.prev!.next = node.next;
        node.next!.prev = node.prev;
        this.size--;
    }

    removeLast(): LFUNode | null {
        if (this.size === 0) return null;
        const last = this.tail.prev!;
        this.removeNode(last);
        return last;
    }
}
