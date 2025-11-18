import { Node } from "./Node";

export class LRUCache {
    private capacity: number;
    private map: Map<number, Node>;
    private head: Node;
    private tail: Node;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.map = new Map();

        this.head = new Node(0, 0);
        this.tail = new Node(0, 0);

        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    get(key: number): number {
        const node = this.map.get(key);
        if (!node) return -1;

        this.moveToHead(node);
        return node.value;
    }

    put(key: number, value: number): void {
        let node = this.map.get(key);

        if (node) {
            node.value = value;
            this.moveToHead(node);
        } else {
            const newNode = new Node(key, value);
            this.map.set(key, newNode);
            this.addNode(newNode);

            if (this.map.size > this.capacity) {
                this.evictLRU();
            }
        }
    }

    private addNode(node: Node) {
        node.prev = this.head;
        node.next = this.head.next;

        this.head.next!.prev = node;
        this.head.next = node;
    }

    private removeNode(node: Node) {
        const prev = node.prev!;
        const next = node.next!;

        prev.next = next;
        next.prev = prev;
    }

    private moveToHead(node: Node) {
        this.removeNode(node);
        this.addNode(node);
    }

    private evictLRU() {
        const lru = this.tail.prev!;
        this.removeNode(lru);
        this.map.delete(lru.key);
    }
}
