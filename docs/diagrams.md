# Cache Algorithm Diagrams (Mermaid)

This document contains conceptual diagrams for all cache eviction and admission algorithms implemented in this repository.
All diagrams use **Mermaid**, supported natively by GitHub.

## #️⃣ 1. LRU Cache (Least Recently Used)

LRU maintains a **doubly linked list** where:
- **Head = Most Recently Used**
- **Tail = Least Recently Used**
- On GET/PUT → move node to head
- When full → evict from tail

### LRU Structure

```mermaid
flowchart LR
    subgraph DLL [Doubly Linked List]
        direction LR
        H((HEAD)) --> A[(Key 3)]
        A --> B[(Key 1)]
        B --> C[(Key 5)]
        C --> T((TAIL))
    end
```

---

## #️⃣ 2. LFU Cache (Least Frequently Used)

LFU uses:
- A **frequency map**
- Multiple doubly linked lists (one per frequency)
- A pointer to minFreq

### LFU Multi-List Structure

```mermaid
graph TD
    subgraph F1[Freq = 1]
        A1[(K1)]
        A2[(K4)]
    end

    subgraph F2[Freq = 2]
        B1[(K3)]
    end

    subgraph F3[Freq = 3]
        C1[(K2)]
    end

    A1 --> A2
    B1
    C1

    style F1 fill:#ffe8e8,stroke:#ff7d7d
    style F2 fill:#e8ffe8,stroke:#74cc74
    style F3 fill:#e8f0ff,stroke:#6b8bff
```

---

## #️⃣ 3. ARC (Adaptive Replacement Cache)

ARC maintains **four lists**:
- **T1**: recent items
- **T2**: frequently used
- **B1**: ghost entries for T1
- **B2**: ghost entries for T2

ARC dynamically adjusts a parameter p to balance recency vs. frequency.

### ARC Layout

```mermaid
flowchart LR
    subgraph T1 [T1: Recent List]
        A1[Key A]
        A2[Key B]
    end

    subgraph T2 [T2: Frequent List]
        B1[Key D]
        B2[Key F]
    end

    subgraph B1 [B1: Ghost Recent]
        G1[A]
    end

    subgraph B2 [B2: Ghost Frequent]
        G2[D]
    end

    T1 --> T2
    B1 --> B2
```

---

## #️⃣ 4. Count–Min Sketch

CMS is a probabilistic estimator using a **DxW matrix** where each row is hashed differently.

### Count–Min Sketch Matrix

```mermaid
graph TB
    subgraph CMS [Count-Min Sketch]
    direction TB
        R1["Hash Row 1 → buckets"]
        R2["Hash Row 2 → buckets"]
        R3["Hash Row 3 → buckets"]
        R4["Hash Row 4 → buckets"]
    end
```

---

## #️⃣ 5. TinyLFU Admission Policy

TinyLFU’s logic:

```text
admit(candidate) if freq(candidate) > freq(victim)
```

It uses CMS for approximate frequency estimation.

### TinyLFU Flow

```mermaid
flowchart LR
    C[Candidate Key]
    V[Eviction Victim]
    CMS1[(Count-Min Sketch)]

    C --> CMS1
    V --> CMS1

    CMS1 --> D{"freq (C) > freq (V) ?"}

D -->|Yes| A[Admit Candidate]
D -->|No| R[Reject Candidate]
```

---

## #️⃣ 6. Segmented LRU (SLRU)

SLRU uses:
- **Probation Segment**: new entries
- **Protected Segment**: frequently accessed entries
- Promotion occurs on second hit.

### SLRU Two-Segment Architecture

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

    P2 --> H1
    P3 --> P1
```

---

## #️⃣ 7. Full High-Level Comparison

```mermaid
flowchart TD
    LRU([LRU: Recency])
    LFU([LFU: Frequency])
    ARC([ARC: Recency + Frequency])
    SLRU([SLRU: 2-List LRU])
    CMS([CMS: Probabilistic Frequency])
    Tiny[TinyLFU: Admission Policy]

    LRU --> ARC
    LFU --> ARC
    CMS --> Tiny
    Tiny --> ARC
    SLRU --> ARC
```
