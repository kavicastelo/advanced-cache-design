export declare class ARC<K, V> {
    private capacity;
    private T1;
    private T2;
    private B1;
    private B2;
    private store;
    private p;
    constructor(capacity: number);
    get(key: K): V | undefined;
    put(key: K, value: V): void;
    private replace;
}
