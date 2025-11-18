export class Node {
    key: number;
    value: number;
    prev: Node | null = null;
    next: Node | null = null;

    constructor(key: number, value: number) {
        this.key = key;
        this.value = value;
    }
}
