# Advanced Cache Design — Wiki

Welcome to the official wiki for **Advanced Cache Design**, a TypeScript repository implementing modern cache eviction and admission algorithms used across operating systems, databases, CDNs, and large-scale distributed systems.

This wiki covers:

- 💾 LRU (Least Recently Used)
- 📊 LFU (Least Frequently Used)
- 🔁 ARC (Adaptive Replacement Cache)
- 🧩 Segmented LRU (SLRU)
- 🔍 Count–Min Sketch (CMS)
- ⚙️ TinyLFU (Admission Policy)

## 📘 Contents

- [[LRUCache]]
- [[LFUCache]]
- [[ARCCache]]
- [[SegmentedLRU]]
- [[CountMinSketch]]
- [[TinyLFU]]
- [[Architecture]]
- [[Diagrams]]
- [[Benchmarks]]
- [[FAQ]]
- [[References]]

---

## About This Project

This repository is designed for:

- Systems design learners
- Backend engineers
- Cache algorithm researchers
- Interview preparation
- Students studying OS memory management

All implementations are written in **TypeScript**, focusing on clarity over micro-optimizations.

---

## Quick Start

```bash
npm install
npm run build
node dist/examples/test-lru.js
```

## Contributing

Contributions are welcome! Create an issue or submit a pull request.
