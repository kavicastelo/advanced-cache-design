import { SegmentedLRU } from "../src";

const slru = new SegmentedLRU<string>(3);

slru.access("A");
slru.access("B");
slru.access("C");
slru.access("A"); // moves to protected
slru.access("D"); // eviction from probation

console.log("SLRU internal state:", slru);
