# System Architecture

This repository implements a suite of eviction + admission algorithms.

---

## 🧱 Architecture Diagram

```mermaid
flowchart TD
    LRU([LRU])
    LFU([LFU])
    ARC([ARC])
    SLRU([SLRU])
    CMS([Count-Min Sketch])
    Tiny[TinyLFU]

    CMS --> Tiny
    LRU --> ARC
    LFU --> ARC
    SLRU --> ARC
    Tiny --> ARC
```

---

## Layers

- **Eviction policies**: LRU, LFU, ARC, SLRU
- **Admission policies**: TinyLFU
- **Frequency estimation**: CMS

Together they form the foundation of modern cache design.
