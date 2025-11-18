import { LRUCache } from "../src";

const cache = new LRUCache(2);

cache.put(1, 100);
cache.put(2, 200);

console.log(cache.get(1)); // 100

cache.put(3, 300); // evicts key 2

console.log(cache.get(2)); // -1
console.log(cache.get(3)); // 300
