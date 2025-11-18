import { LFUNode } from "./LFUNode";
import { DoublyLinkedList } from "./DoublyLinkedList";

export class LFUCache {
    private capacity: number;
    private size: number = 0;
    private minFreq: number = 0;

    private keyMap: Map<number, LFUNode>;
    private freqMap: Map<number, DoublyLinkedList>;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.keyMap = new Map();
        this.freqMap = new Map();
    }

    get(key: number): number {
        const node = this.keyMap.get(key);
        if (!node) return -1;

        this.updateFreq(node);
        return node.value;
    }

    put(key: number, value: number): void {
        if (this.capacity === 0) return;

        if (this.keyMap.has(key)) {
            const node = this.keyMap.get(key)!;
            node.value = value;
            this.updateFreq(node);
            return;
        }

        if (this.size === this.capacity) {
            const list = this.freqMap.get(this.minFreq)!;
            const removed = list.removeLast()!;
            this.keyMap.delete(removed.key);
            this.size--;
        }

        const newNode = new LFUNode(key, value);
        this.keyMap.set(key, newNode);

        if (!this.freqMap.has(1)) {
            this.freqMap.set(1, new DoublyLinkedList());
        }
        this.freqMap.get(1)!.addNode(newNode);

        this.minFreq = 1;
        this.size++;
    }

    private updateFreq(node: LFUNode) {
        const oldFreq = node.freq;
        const newFreq = oldFreq + 1;
        node.freq = newFreq;

        const oldList = this.freqMap.get(oldFreq)!;
        oldList.removeNode(node);

        if (oldList.size === 0 && oldFreq === this.minFreq) {
            this.minFreq++;
        }

        if (!this.freqMap.has(newFreq)) {
            this.freqMap.set(newFreq, new DoublyLinkedList());
        }

        this.freqMap.get(newFreq)!.addNode(node);
    }
}
