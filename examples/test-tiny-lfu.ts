import { TinyLFU } from "../src";

const tiny = new TinyLFU();

tiny.record("a");
tiny.record("a");
tiny.record("b");

console.log(tiny.shouldAdmit("a", "b")); // true
console.log(tiny.shouldAdmit("b", "a")); // false
