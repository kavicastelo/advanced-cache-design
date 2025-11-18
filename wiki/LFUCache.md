# LFU Cache

LFU (Least Frequently Used) evicts the item used the *fewest* times.

---

## 🔍 How LFU Works

- Each item has a frequency counter
- Items with lowest frequency get evicted
- Ties resolved by recency (LRU within each frequency group)

---

## 🧠 Data Structures

- Hash map of keys
- Hash map of frequencies → doubly linked lists
- Track `minFreq`

---

## 📊 Diagram

```mermaid
graph TD
    subgraph F1[Freq = 1]
        A1[(K1)]
        A2[(K4)]
    end
    subgraph F2[Freq = 2]
        B1[(K5)]
    end
    subgraph F3[Freq = 3]
        C1[(K8)]
    end
```

---

## 📦 Strengths

- Excellent under repeated-key workloads
- Differentiates "hot" vs "cold" data

## ⚠️ Weaknesses

- Slow adaptation
- Frequency often grows without bound
