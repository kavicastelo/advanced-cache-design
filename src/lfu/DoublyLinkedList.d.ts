import { LFUNode } from "./LFUNode";
export declare class DoublyLinkedList {
    head: LFUNode;
    tail: LFUNode;
    size: number;
    constructor();
    addNode(node: LFUNode): void;
    removeNode(node: LFUNode): void;
    removeLast(): LFUNode | null;
}
