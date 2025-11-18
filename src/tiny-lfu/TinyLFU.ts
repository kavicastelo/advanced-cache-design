import { CountMinSketch } from "../cms/CountMinSketch";

export class TinyLFU {
    private sketch = new CountMinSketch(2048, 4);

    record(key: string) {
        this.sketch.add(key);
    }

    shouldAdmit(candidateKey: string, victimKey: string): boolean {
        const c = this.sketch.estimate(candidateKey);
        const v = this.sketch.estimate(victimKey);
        return c > v;
    }
}
