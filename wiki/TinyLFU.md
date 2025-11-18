# TinyLFU — Modern Admission Policy

TinyLFU is used by Google’s **Caffeine** cache.  
It decides whether *new items should be cached at all*.

---

## 🔍 Logic

```bash
admit(candidate) if freq(candidate) > freq(victim)
```

---

## 📊 Diagram

```mermaid
flowchart LR
    C[Candidate]
    V[Victim]
    CMS[(Count-Min Sketch)]
    
    C --> CMS
    V --> CMS

    CMS --> D{"freq(C) > freq(V)?"}
    D -->|Yes| A[Admit]
    D -->|No| R[Reject]
```
