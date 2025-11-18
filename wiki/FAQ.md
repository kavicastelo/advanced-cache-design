# FAQ

### ❓ Why are there so many cache algorithms?

Different workloads → different optimal eviction strategies.

---

### ❓ What does ARC do better than LRU?

- Avoids scan pollution
- Balances frequency & recency
- Self-tunes automatically

---

### ❓ Why use TinyLFU?

To prevent low-frequency items from evicting high-value items.

---

### ❓ Why do we need Count–Min Sketch?

To approximate frequency without storing all keys.
