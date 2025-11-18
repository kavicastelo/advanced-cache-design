"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountMinSketch = void 0;
class CountMinSketch {
    constructor(width = 2000, depth = 5) {
        this.width = width;
        this.depth = depth;
        this.table = Array.from({ length: depth }, () => Array(width).fill(0));
    }
    hash(value, i) {
        return Math.abs((value + i).split('').reduce((a, c) => a + c.charCodeAt(0), 0)) % this.width;
    }
    add(value) {
        for (let i = 0; i < this.depth; i++) {
            const index = this.hash(value, i);
            this.table[i][index]++;
        }
    }
    estimate(value) {
        let min = Infinity;
        for (let i = 0; i < this.depth; i++) {
            const index = this.hash(value, i);
            min = Math.min(min, this.table[i][index]);
        }
        return min;
    }
}
exports.CountMinSketch = CountMinSketch;
