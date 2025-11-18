"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SegmentedLRU = void 0;
class SegmentedLRU {
    constructor(capacity) {
        this.probation = [];
        this.protected = [];
        this.capacity = capacity;
    }
    access(key) {
        if (this.protected.includes(key)) {
            this.protected = this.protected.filter(k => k !== key);
            this.protected.unshift(key);
            return;
        }
        if (this.probation.includes(key)) {
            this.probation = this.probation.filter(k => k !== key);
            this.protected.unshift(key);
            return;
        }
        this.probation.unshift(key);
        if (this.probation.length + this.protected.length > this.capacity) {
            if (this.probation.length > 0)
                this.probation.pop();
            else
                this.protected.pop();
        }
    }
}
exports.SegmentedLRU = SegmentedLRU;
