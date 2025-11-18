export class LFUNode {
    key: number;
    value: number;
    freq: number = 1;
    prev: LFUNode | null = null;
    next: LFUNode | null = null;

    constructor(key: number, value: number) {
        this.key = key;
        this.value = value;
    }
}
