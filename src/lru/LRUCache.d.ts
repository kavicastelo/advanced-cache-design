export declare class LRUCache {
    private capacity;
    private map;
    private head;
    private tail;
    constructor(capacity: number);
    get(key: number): number;
    put(key: number, value: number): void;
    private addNode;
    private removeNode;
    private moveToHead;
    private evictLRU;
}
