"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TinyLFU = void 0;
const CountMinSketch_1 = require("../cms/CountMinSketch");
class TinyLFU {
    constructor() {
        this.sketch = new CountMinSketch_1.CountMinSketch(2048, 4);
    }
    record(key) {
        this.sketch.add(key);
    }
    shouldAdmit(candidateKey, victimKey) {
        const c = this.sketch.estimate(candidateKey);
        const v = this.sketch.estimate(victimKey);
        return c > v;
    }
}
exports.TinyLFU = TinyLFU;
