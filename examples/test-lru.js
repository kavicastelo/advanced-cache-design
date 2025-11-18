"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
const cache = new src_1.LRUCache(2);
cache.put(1, 100);
cache.put(2, 200);
console.log(cache.get(1)); // 100
cache.put(3, 300); // evicts key 2
console.log(cache.get(2)); // -1
console.log(cache.get(3)); // 300
