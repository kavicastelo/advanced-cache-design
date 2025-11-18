"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ARC = void 0;
class ARC {
    constructor(capacity) {
        this.T1 = [];
        this.T2 = [];
        this.B1 = [];
        this.B2 = [];
        this.store = new Map();
        this.p = 0;
        this.capacity = capacity;
    }
    get(key) {
        if (this.store.has(key)) {
            if (this.T1.includes(key)) {
                this.T1 = this.T1.filter(k => k !== key);
                this.T2.unshift(key);
            }
            return this.store.get(key);
        }
        return undefined;
    }
    put(key, value) {
        if (this.store.has(key)) {
            this.store.set(key, value);
            this.get(key);
            return;
        }
        if (this.T1.length + this.B1.length === this.capacity) {
            if (this.T1.length < this.capacity) {
                this.B1.pop();
                this.replace(key);
            }
            else {
                this.T1.pop();
            }
        }
        else {
            const total = this.T1.length + this.T2.length +
                this.B1.length + this.B2.length;
            if (total >= this.capacity) {
                if (total === this.capacity * 2)
                    this.B2.pop();
                this.replace(key);
            }
        }
        this.store.set(key, value);
        this.T1.unshift(key);
    }
    replace(key) {
        if (this.T1.length > 0 && (this.B2.includes(key) && this.T1.length === this.p)) {
            const removed = this.T1.pop();
            this.B1.unshift(removed);
            this.store.delete(removed);
        }
        else {
            const removed = this.T2.pop();
            this.B2.unshift(removed);
            this.store.delete(removed);
        }
    }
}
exports.ARC = ARC;
