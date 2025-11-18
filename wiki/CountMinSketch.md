# Count–Min Sketch

CMS is a probabilistic frequency estimator used at scale (CDNs, databases, TinyLFU, Redis Streams).

---

## 🔍 Key Features

- Sub-linear memory
- Probabilistic (overestimates only)
- Fast: O(1) updates and queries

---

## 📐 Diagram

```mermaid
graph TB
    subgraph CMS [Count-Min Sketch Matrix]
        direction TB
        R1["Hash 1 → buckets"]
        R2["Hash 2 → buckets"]
        R3["Hash 3 → buckets"]
        R4["Hash 4 → buckets"]
    end
```

---

## 👍 Strengths

- Scalable to billions of keys
- No need to store actual keys
