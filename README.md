# Advanced Cache Design Algorithms (LRU, LFU, ARC, TinyLFU, SLRU, CMS)

This repository contains **production-quality, educational implementations** of modern cache eviction and admission algorithms used in systems such as:

- Redis
- ZFS
- Cloudflare CDN
- YouTube backend services
- Google’s Caffeine Cache
- OS kernel memory managers

These implementations are written in **TypeScript**, focusing on clarity and correctness.

---

## 🚀 Included Algorithms

### ✔️ LRU (Least Recently Used)

Classical O(1) LRU using a doubly linked list + hash map.

### ✔️ LFU (Least Frequently Used)

Full LFU with frequency lists and O(1) updates.

### ✔️ ARC (Adaptive Replacement Cache)

Self-tuning hybrid of recency and frequency.

### ✔️ TinyLFU (Admission Policy)

Modern frequency-based admission algorithm used by Google Caffeine.

### ✔️ SLRU (Segmented Least Recently Used)

Two-tier LRU that protects hot entries from eviction.

### ✔️ CMS (Count-Min Sketch)

Probabilistic frequency estimator (used by huge-scale caches).

---

## 📦 Installation

```bash
git clone https://github.com/kavicastelo/advanced-cache-design.git
cd advanced-cache-design
npm install
```

---

## ▶️ Running Examples

```bash
npm run build
node dist/examples/test-lru.js
```

Want scripts for all algorithms? Just run:

```bash
node dist/examples/test-*.js
```

---

## 📁 Directory Overview

```text
src/
  lru/          → LRU cache implementation
  lfu/          → LFU cache implementation
  arc/          → ARC hybrid cache
  cms/          → Count–Min Sketch
  tiny-lfu/     → TinyLFU admission
  slru/         → Segmented LRU eviction
examples/       → Demo scripts
```

---

## 🧰 Technologies Used

- TypeScript
- Node.js
- Modern data structure design
- Systems design best practices

---

## 📝 License

[MIT](LICENSE) License – Free to use and modify.
