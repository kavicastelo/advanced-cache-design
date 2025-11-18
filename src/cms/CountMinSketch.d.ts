export declare class CountMinSketch {
    private width;
    private depth;
    private table;
    constructor(width?: number, depth?: number);
    private hash;
    add(value: string): void;
    estimate(value: string): number;
}
