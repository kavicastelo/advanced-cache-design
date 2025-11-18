import { LFUCache } from "../src";

const cache = new LFUCache(2);

cache.put(1, 10);
cache.put(2, 20);

console.log(cache.get(1)); // 10
cache.put(3, 30);          // Evicts key 2

console.log(cache.get(2)); // -1
console.log(cache.get(3)); // 30
