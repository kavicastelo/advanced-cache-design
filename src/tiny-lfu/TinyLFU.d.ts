export declare class TinyLFU {
    private sketch;
    record(key: string): void;
    shouldAdmit(candidateKey: string, victimKey: string): boolean;
}
