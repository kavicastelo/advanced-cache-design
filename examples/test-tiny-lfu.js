"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
const tiny = new src_1.TinyLFU();
tiny.record("a");
tiny.record("a");
tiny.record("b");
console.log(tiny.shouldAdmit("a", "b")); // true
console.log(tiny.shouldAdmit("b", "a")); // false
