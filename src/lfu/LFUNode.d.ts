export declare class LFUNode {
    key: number;
    value: number;
    freq: number;
    prev: LFUNode | null;
    next: LFUNode | null;
    constructor(key: number, value: number);
}
