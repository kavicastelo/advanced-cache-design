export declare class LFUCache {
    private capacity;
    private size;
    private minFreq;
    private keyMap;
    private freqMap;
    constructor(capacity: number);
    get(key: number): number;
    put(key: number, value: number): void;
    private updateFreq;
}
