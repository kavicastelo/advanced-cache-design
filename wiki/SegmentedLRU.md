# Segmented LRU (SLRU)

SLRU divides the cache into two segments:

- **Probation**: newly inserted entries
- **Protected**: entries that survived at least one hit

---

## 🧠 How It Works

- New items → Probation
- Second access → promote to Protected
- Evictions come from Probation
- High-hit items remain protected

---

## 📊 Diagram

```mermaid
flowchart TB
    subgraph Probation
        P1[(K9)]
        P2[(K4)]
        P3[(K8)]
    end

    subgraph Protected
        H1[(K1)]
        H2[(K2)]
    end
```
