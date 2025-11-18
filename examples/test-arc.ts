import { ARC } from "../src";

const arc = new ARC<number, number>(2);

arc.put(1, 100);
arc.put(2, 200);

console.log(arc.get(1)); // 100
arc.put(3, 300);         // ARC handles recency/frequency balance

console.log(arc.get(2)); // undefined
console.log(arc.get(3)); // 300
