export class SegmentedLRU<T> {
    private probation: T[] = [];
    private protected: T[] = [];
    private capacity: number;

    constructor(capacity: number) {
        this.capacity = capacity;
    }

    access(key: T) {
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
            if (this.probation.length > 0) this.probation.pop();
            else this.protected.pop();
        }
    }
}
