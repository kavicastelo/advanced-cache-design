"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LFUNode = void 0;
class LFUNode {
    constructor(key, value) {
        this.freq = 1;
        this.prev = null;
        this.next = null;
        this.key = key;
        this.value = value;
    }
}
exports.LFUNode = LFUNode;
