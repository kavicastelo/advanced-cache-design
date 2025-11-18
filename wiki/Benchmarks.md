# Benchmarks

Benchmarks compare hit rates across algorithms under different workloads.

---

## 📊 Workload Types

- Sequential scan
- Looping (hotset)
- Zipfian distribution
- Mixed read/write

---

## 📈 Example Chart (Mermaid)

```mermaid
graph LR
    LRU((LRU Hit Rate 72%))
    LFU((LFU Hit Rate 89%))
    ARC((ARC Hit Rate 93%))
    SLRU((SLRU Hit Rate 88%))
```

---

## Running Benchmarks

Coming soon: `npm run benchmark`
