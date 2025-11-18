export class ARC<K, V> {
    private capacity: number;

    private T1: K[] = [];
    private T2: K[] = [];
    private B1: K[] = [];
    private B2: K[] = [];

    private store: Map<K, V> = new Map();
    private p = 0;

    constructor(capacity: number) {
        this.capacity = capacity;
    }

    get(key: K): V | undefined {
        if (this.store.has(key)) {
            if (this.T1.includes(key)) {
                this.T1 = this.T1.filter(k => k !== key);
                this.T2.unshift(key);
            }
            return this.store.get(key);
        }
        return undefined;
    }

    put(key: K, value: V) {
        if (this.store.has(key)) {
            this.store.set(key, value);
            this.get(key);
            return;
        }

        if (this.T1.length + this.B1.length === this.capacity) {
            if (this.T1.length < this.capacity) {
                this.B1.pop();
                this.replace(key);
            } else {
                this.T1.pop();
            }
        } else {
            const total = this.T1.length + this.T2.length +
                this.B1.length + this.B2.length;

            if (total >= this.capacity) {
                if (total === this.capacity * 2) this.B2.pop();
                this.replace(key);
            }
        }

        this.store.set(key, value);
        this.T1.unshift(key);
    }

    private replace(key: K) {
        if (this.T1.length > 0 && (this.B2.includes(key) && this.T1.length === this.p)) {
            const removed = this.T1.pop()!;
            this.B1.unshift(removed);
            this.store.delete(removed);
        } else {
            const removed = this.T2.pop()!;
            this.B2.unshift(removed);
            this.store.delete(removed);
        }
    }
}
