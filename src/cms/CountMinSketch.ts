export class CountMinSketch {
    private width: number;
    private depth: number;
    private table: number[][];

    constructor(width = 2000, depth = 5) {
        this.width = width;
        this.depth = depth;
        this.table = Array.from({ length: depth }, () =>
            Array(width).fill(0)
        );
    }

    private hash(value: string, i: number): number {
        return Math.abs(
            (value + i).split('').reduce((a, c) => a + c.charCodeAt(0), 0)
        ) % this.width;
    }

    add(value: string) {
        for (let i = 0; i < this.depth; i++) {
            const index = this.hash(value, i);
            this.table[i][index]++;
        }
    }

    estimate(value: string): number {
        let min = Infinity;
        for (let i = 0; i < this.depth; i++) {
            const index = this.hash(value, i);
            min = Math.min(min, this.table[i][index]);
        }
        return min;
    }
}
