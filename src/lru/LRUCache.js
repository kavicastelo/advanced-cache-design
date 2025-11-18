"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LRUCache = void 0;
const Node_1 = require("./Node");
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();
        this.head = new Node_1.Node(0, 0);
        this.tail = new Node_1.Node(0, 0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }
    get(key) {
        const node = this.map.get(key);
        if (!node)
            return -1;
        this.moveToHead(node);
        return node.value;
    }
    put(key, value) {
        let node = this.map.get(key);
        if (node) {
            node.value = value;
            this.moveToHead(node);
        }
        else {
            const newNode = new Node_1.Node(key, value);
            this.map.set(key, newNode);
            this.addNode(newNode);
            if (this.map.size > this.capacity) {
                this.evictLRU();
            }
        }
    }
    addNode(node) {
        node.prev = this.head;
        node.next = this.head.next;
        this.head.next.prev = node;
        this.head.next = node;
    }
    removeNode(node) {
        const prev = node.prev;
        const next = node.next;
        prev.next = next;
        next.prev = prev;
    }
    moveToHead(node) {
        this.removeNode(node);
        this.addNode(node);
    }
    evictLRU() {
        const lru = this.tail.prev;
        this.removeNode(lru);
        this.map.delete(lru.key);
    }
}
exports.LRUCache = LRUCache;
