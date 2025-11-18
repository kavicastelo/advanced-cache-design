export declare class SegmentedLRU<T> {
    private probation;
    private protected;
    private capacity;
    constructor(capacity: number);
    access(key: T): void;
}
