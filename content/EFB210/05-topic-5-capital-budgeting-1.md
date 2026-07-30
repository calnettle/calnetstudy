# TOPIC 5 — Capital Budgeting 1

Lecture 5. Ross et al. (2021, 8th ed.) Ch 9.

Topic 1 proved that the firm should accept positive-NPV projects. Topic 5 asks the practical follow-up: **how do you actually evaluate a project, and what do you do when you cannot take them all?** Six methods, one that is always right, and a decision tree for the cases where the obvious answer is wrong.

---

## 5.1 Classifying projects — do this first

An **investment project** is, per Peirson et al. (2015, p. 104), "*any proposal to outlay cash in the expectation that future cash flows will result*."

| Classification | Meaning |
|---|---|
| **Independent** | Investing in one does not prohibit investing in another |
| **Mutually exclusive** | Investing in one **prohibits** the other (a financial or physical constraint) |
| **Mutually inclusive** | Investing in one **requires** investing in the other |

> **Classify before you calculate.** The classification determines which tool is valid. Independent projects: take every positive-NPV one. Mutually exclusive: you need the *ranking*, not just accept/reject — and if the lives are unequal with replacement, NPV alone will pick the wrong project. Tutorial 5 Q1 is entirely about this and it is a standing short-answer question.

**The capital expenditure process:** generate investment proposals → evaluate and select (forward-looking) → approve and control capital expenditure → post-completion audit (forward *and* backward looking).

---

## 5.2 What Australian CFOs actually use

Peirson et al. (2015, p. 106) — approximate percentages of Australian CFOs using each metric:

| Method | % | Discounted cash flow? |
|---|---|---|
| Internal Rate of Return (IRR) | 72 | Yes |
| Net Present Value (NPV) | 70 | Yes |
| Payback Period (PB) | 57 | **No** |
| Real Option Analysis | 27 | Yes |
| Accounting Rate of Return (ARR) | 26 | **No** |

A discounted cash flow method accounts for **cash flows, timing and risk**. Payback and ARR do not.

---

## 5.3 Payback period

**The length of time it takes to recover the initial investment.**

```
Accept if  Payback < Target Payback
```

The target is set **arbitrarily**, usually 2–5 years.

### Why it fails — Lecture 5, Example 1

| Project | Yr 0 | Yr 1 | Yr 2 | Yr 3 | Yr 4 | PB |
|---|---|---|---|---|---|---|
| A | −9,000 | 3,000 | 3,000 | 3,000 | | 3 |
| B | −9,000 | 7,000 | 1,000 | 1,000 | | 3 |
| C | −9,000 | 3,000 | 3,000 | 3,000 | 9,000 | 3 |
| D | −9,000 | 3,000 | 3,000 | 3,000 | | 3 |

**All four have a payback of 3 — and they are obviously not equally attractive.** B recovers most of the money in year 1. C throws off another $9,000 in year 4 that the metric simply cannot see.

| Problems | Advantages |
|---|---|
| Does not account for **size, timing or risk** of cash flows | Simple, and asks a genuinely important question |
| Ignores everything after the payback date | Can be used **alongside** other measures |
| Selected projects are not necessarily profitable in the economic sense | Weights early cash flows, which are less uncertain |

### Computing a fractional payback

```
PB = (last full year before recovery) + (remaining outlay ÷ that year's cash flow)
```

**Tutorial 5 Q6, Project A.** `(5,000)` then `1,000 / 1,200 / 1,200 / 900 / 800`.
```
Cumulative:  1,000 → 2,200 → 3,400 → 4,300 → 5,100
Recovered during year 5, with 5,000 − 4,300 = 700 still to go
PB = 4 + 700/800 = 4.88 years
```

---

## 5.4 Accounting Rate of Return

Uses **accounting profits** as a ratio to investment.

```
ARR_net   = Average Accounting Profit / Average Investment
ARR_gross = Average Accounting Profit / Initial Investment

Accept if ARR > Target ARR
```

| Problems | Advantages |
|---|---|
| Does **not use cash flows** and ignores timing | Can be used with other measures |
| Target is arbitrary | |

### Worked example — Lecture 5, Example 2

A labour-saving machine costs **$15,000**, life five years, no salvage, no tax. Savings: 3,800 / 4,200 / 5,000 / 8,000 / 9,000.

**Payback:**
```
Cumulative: 3,800 → 8,000 → 13,000 → 21,000
Recovered during year 4:  PB = 3 + 2,000/8,000 = 3.25 years
```

**ARR (gross):** straight-line depreciation is `15,000/5 = 3,000` per year.

| Year | Saving | Depreciation | Profit |
|---|---|---|---|
| 1 | 3,800 | −3,000 | 800 |
| 2 | 4,200 | −3,000 | 1,200 |
| 3 | 5,000 | −3,000 | 2,000 |
| 4 | 8,000 | −3,000 | 5,000 |
| 5 | 9,000 | −3,000 | 6,000 |
| **Average** | | | **3,000** |

```
ARR_gross = 3,000/15,000 = 20%
ARR_net   = 3,000/7,500  = 40%      (average investment = 15,000/2)
```

> **Payback is 3.25 years only if cash flows accrue evenly through the year.** The slide flags this: if cash flows are assumed to occur at **year end**, payback is **4 years**, not 3.25. Two different, defensible answers from one data set. State the assumption you are using.

---

## 5.5 The discounted cash flow methods

Four of them, and **they are all linked to NPV**:

- **IRR** corresponds to `NPV = 0`
- **BCR** indicates the value created per dollar invested
- **AE** is NPV annuitised

Standing assumptions in this unit: the timing of cash flows is known, and all cash flows **except the initial outlay** occur at **year end**.

### NPV

```
       n
NPV =  Σ  CFₜ (1 + r)⁻ᵗ
      t=0

Accept if NPV > 0;  reject if NPV < 0
```

**NPV represents the increase in the value of the firm which accrues from the project.**

**Lecture 5, Example 3.** `r = 10%`.

| Year | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| Cash flow | (900,000) | 509,000 | 450,000 | 400,000 |
| Discount factor | 1.0000 | 0.9091 | 0.8264 | 0.7513 |
| PV | (900,000) | 462,727 | 371,901 | 300,526 |

```
NPV = $235,154
```

### IRR

**The rate of return that produces a zero NPV.** Found by trial and error.

```
Accept if IRR > r
```

For Example 3: try 15% → positive; try 30% → negative; try 25% → **zero**. `IRR = 25%`.

**IRR pathologies:**

- A project may have **no IRR** (e.g. all cash flows negative).
- A project may have **multiple IRRs** if it has more than one sign change.

| Multiple IRRs | | No IRR | |
|---|---|---|---|
| Year | CFₜ | Year | CFₜ |
| 0 | −14,545,620 | 0 | −80,000 |
| 1 | 34,182,000 | 1 | 100,000 |
| 2 | −20,000,000 | 2 | −50,000 |

### Benefit-Cost Ratio

```
BCR = PV of net cash flows / Initial cash outlay

Accept if BCR > 1
```

Indicates the value generated **per dollar invested**.

Example 3: `BCR = 1,135,154/900,000 = 1.26`.

### Annual Equivalent

```
AE = NPV / { [1 − 1/(1 + r)ⁿ] / r }
```

Spreads the NPV across the project's life as an equivalent annual cash flow. Its purpose is comparing mutually exclusive projects with **differing lives and replacement**.

Example 3: `AE = 235,154/{[1 − 1/(1.1)³]/0.1} = 235,154/2.486852 = $94,559`.

### The four methods side by side — Lecture 5, `r = 10%`

| Project | Yr 0 | Yr 1 | Yr 2 | Yr 3 | NPV | IRR | BCR | PB |
|---|---|---|---|---|---|---|---|---|
| A | −3,000 | 2,000 | 2,000 | | 471.07 | 21.5% | 1.16 | 1.50 |
| B | −6,200 | 4,000 | 4,000 | | 742.15 | 18.8% | 1.12 | 1.55 |
| C | −1,100 | 1,400 | 200 | 100 | 413.15 | 44.2% | 1.38 | 0.79 |
| D | −1,100 | 100 | 500 | 2,000 | 906.76 | 37.8% | 1.82 | 2.25 |
| E | −60 | 155 | −100 | | −1.74 | 25.0% & 33.0% | 0.97 | ? |
| F | 60 | −155 | 100 | | 1.74 | 25.0% & 33.0% | ? | ? |
| G | −51 | 100 | −50 | | −1.41 | N/A | 0.97 | ? |

Working for A:
```
Disc. factors: 0.9091, 0.8264
PVs: 1,818 and 1,653  →  NPV = 3,471 − 3,000 = 471
BCR = 3,471/3,000 = 1.157
PB  = 1 + 1,000/2,000 = 1.50
```

> **Read the E, F and G rows.** E and F are mirror images with two IRRs each, so "accept if IRR > r" is meaningless for them — the *sign* of the NPV is the only thing that answers the question. F has a positive initial cash flow, so "PV of benefits ÷ initial outlay" has no denominator and BCR cannot be computed. G has no IRR at all. When a project has more than one sign change in its cash flows, go straight to NPV.

### NPV vs IRR

Both are DCF methods; both adjust for the time value of money.

- For **independent** projects with **standard** cash flows (one outlay, then inflows), they give the **same accept/reject decision**.
- For **mutually exclusive** projects they can give **conflicting rankings**.
- **NPV is the method consistent with the objective of the firm** — maximise firm value. This is the same result the capital-rationing example in Lecture 2 produced.

### Worked example — Tutorial 5 Q5

Outlay $14,250; returns $5,000, $4,000, $3,000, $6,000 in years 1–4. `r = 12.00%`.

```
NPV = −14,250 + 5,000(1.12)⁻¹ + 4,000(1.12)⁻² + 3,000(1.12)⁻³ + 6,000(1.12)⁻⁴
    = −14,250 + 4,464.29 + 3,188.78 + 2,135.34 + 3,813.11
    = −$648.49

IRR: by trial and error, 9.85%
```

Reject — negative NPV, and `IRR (9.85%) < r (12%)`. The two agree, as they must for a standard cash-flow pattern.

### Worked example — Tutorial 5 Q6 — four independent projects, `r = 10.00%`

| Year | 0 | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|
| A | (5,000) | 1,000 | 1,200 | 1,200 | 900 | 800 |
| B | (2,000) | 800 | 800 | 800 | 800 | 800 |
| C | (4,500) | 2,000 | 2,000 | 2,000 | | |
| D | (3,000) | 2,500 | 2,500 | | | |

| Metric | A | B | C | D |
|---|---|---|---|---|
| PB (years) | 4.88 | 2.50 | 2.25 | 1.20 |
| NPV | **(1,086.15)** | **1,032.63** | **473.70** | **1,338.84** |
| IRR | 0.70% | 28.65% | 15.89% | 42.01% |
| BCR | 0.78 | 1.52 | 1.11 | 1.45 |
| AE | (286.52) | 272.41 | 190.48 | 771.43 |

**Which to accept?** These are independent, so:

- **Payback** — no target was given, so **no decision can be made** on this method.
- **NPV** — accept B, C and D (positive).
- **IRR** — accept B, C and D (`IRR > 10%`).
- **BCR** — accept B, C and D (`> 1`).
- **AE** — accept B, C and D (`> 0`).

**All four DCF methods agree, because the projects are independent.**

> **Notice AE and NPV rank differently.** By NPV: D (1,338.84) > B (1,032.63) > C (473.70). By AE: D (771.43) > B (272.41) > C (190.48). Here they happen to agree, but AE is *dividing by the annuity factor for each project's own life*, so a short project's AE is inflated relative to its NPV. That is intentional — and it is exactly why AE is only the right tool when there is replacement.

### Worked example — Tutorial 5 Q7 — the scale problem

Two **independent** projects, `r = 10.00%`.

| Year | 0 | 1–5 |
|---|---|---|
| A | (1,500) | 550 |
| B | (600) | 240 |

```
PB_A = 2 + 400/550 = 2.73          PB_B = 2 + 120/240 = 2.50

NPV_A = −1,500 + 550[1 − 1/1.1⁵]/0.1 = −1,500 + 2,084.93 = $584.93
NPV_B = −600   + 240[1 − 1/1.1⁵]/0.1 = −600 + 909.79     = $309.79

IRR_A = 24.32%          IRR_B = 28.65%
```

Both are independent and both have positive NPVs, so **take both**. But note the ranking conflict: **B has the higher IRR and the lower NPV**. The reason is that **IRR does not consider the size of the investment** — a 28.65% return on $600 creates less value than a 24.32% return on $1,500.

NPV profile:

| r | 0% | 5% | 10% | 15% | 20% | 25% |
|---|---|---|---|---|---|---|
| NPV_A | 1,250.00 | 881.21 | 584.93 | 343.69 | 144.84 | (20.90) |
| NPV_B | 600.00 | 439.07 | 309.79 | 204.52 | 117.75 | 45.43 |

A's profile is steeper and crosses zero sooner. The two lines cross at 21.36% (computed in Topic 6).

### Worked example — Tutorial 5 Q8 — mutually exclusive, NPV wins

`r = 10.00%`.

| Year | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| A | (11,000) | 2,000 | 4,000 | 10,000 |
| B | (12,000) | 8,000 | 4,000 | 4,000 |

```
PB_A = 2 + 5,000/10,000 = 2.50      PB_B = 2.00

NPV_A = −11,000 + 2,000(1.1)⁻¹ + 4,000(1.1)⁻² + 10,000(1.1)⁻³ = $1,637.11
NPV_B = −12,000 + 8,000(1.1)⁻¹ + 4,000(1.1)⁻² +  4,000(1.1)⁻³ = $1,583.77

IRR_A = 16.45%        IRR_B = 18.52%
```

**Select A** — highest NPV. IRR picks B, because **IRR favours the project whose cash flows arrive sooner**.

NPV profile:

| r | 0% | 5% | 10% | 15% | 20% | 25% |
|---|---|---|---|---|---|---|
| NPV_A | 5,000.00 | 3,171.26 | 1,637.11 | 338.87 | (768.52) | (1,720.00) |
| NPV_B | 4,000.00 | 2,702.52 | 1,583.77 | 611.16 | (240.74) | (992.00) |

The lines cross at 10.74% — just above the 10% cost of capital. **The conflict here is marginal and the ranking flips almost immediately.** If your discount rate estimate is even slightly off, the decision changes. That is a real limitation worth writing about.

---

## 5.6 Mutually exclusive projects with unequal lives

This is the part of the topic that produces wrong answers, and there is a decision tree for it.

```
Projects
├── Independent                          → NPV (take all positive)
└── Mutually exclusive
    ├── No replacement                    → NPV
    └── Replacement
        ├── Equal lives                   → NPV
        └── Unequal lives                 → AE, NPV∞ or NPV_LCM
```

### No replacement — just use NPV

If we have **no** replacement, we do **not** need to equate lives before comparing NPVs. Example from the lecture: exploiting an oil field with either a small plant over 10 years or a large plant over 5 years. Compare the two NPVs over their own lives and pick the larger.

### Abandonment — a special case of "no replacement"

Selecting the optimal time to **abandon** an asset is a mutually exclusive decision: you can sell now or in a year, not both. Because there is no replacement, use NPV.

**Lecture 5 example.** A block of old units, required return 10%.

| | Rental income | Yearly costs | Net cash flow | Market value |
|---|---|---|---|---|
| 2024* | 100,000 | 8,000 | 92,000 | 3,000,000 |
| 2025 | 110,000 | 10,000 | 100,000 | 3,100,000 |
| 2026 | 115,000 | 12,000 | 103,000 | 3,200,000 |

*2024 income has already occurred but the asset is yet to be sold.

The deck states the figures but not the arithmetic, so here it is:

```
Sell now (start 2024):
  NPV = 3,000,000                                                       = $3,000,000.00

Sell end 2024:
  NPV = (92,000 + 3,000,000)/1.10                                       = $2,810,909.09

Sell end 2025:
  NPV = 92,000/1.10 + (100,000 + 3,100,000)/1.10²                       = $2,728,264.46

Sell end 2026:
  NPV = 92,000/1.10 + 100,000/1.10² + (103,000 + 3,200,000)/1.10³       = $2,647,873.78
```

**Sell now.** The rents ($92k–$103k a year) never come close to covering the 10% opportunity cost on a $3 million asset that is also appreciating by only $100,000 a year. Every extra year of holding destroys value.

### Worked example — Tutorial 5 Q11 — when to sell

Barry's general store is worth **$150,000** at the start of 2014. Required return **15.00%**.

| Year | 2014 | 2015 | 2016 | 2017 |
|---|---|---|---|---|
| Market value (year end) | 145,000 | 140,000 | 135,000 | 130,000 |
| Income | 35,000 | 30,000 | 27,000 | 25,000 |

```
Sell now (start 2014):
  NPV = 150,000                                                       = $150,000.00

Sell end 2014:
  NPV = (35,000 + 145,000)(1.15)⁻¹                                    = $156,521.74

Sell end 2015:
  NPV = 35,000(1.15)⁻¹ + (30,000 + 140,000)(1.15)⁻²                   = $158,979.21

Sell end 2016:
  NPV = 35,000(1.15)⁻¹ + 30,000(1.15)⁻² + (27,000 + 135,000)(1.15)⁻³  = $159,636.72   ← maximum

Sell end 2017:
  NPV = 35,000(1.15)⁻¹ + 30,000(1.15)⁻² + 27,000(1.15)⁻³
        + (25,000 + 130,000)(1.15)⁻⁴                                  = $159,493.78
```

**Sell at the end of 2016.**

> **The margin between 2016 and 2017 is $142.94 — 0.09%.** Do not round intermediate discount factors to two or three decimals here; at four decimals the gap is inside the rounding error and you will pick the wrong year. Carry full precision and round only the final answers.

### Replacement with unequal lives — three equivalent tools

```
AE      = NPV / { [1 − 1/(1+r)ⁿ] / r }

NPV∞    = AE / r                        (perpetual chain of replacements)

NPV_LCM = AE × [1 − 1/(1+r)^L] / r      (over the lowest common multiple of lives, L)
```

All three give the **same ranking** when the projects share a discount rate. `NPV∞` and `NPV_LCM` are just AE re-expressed as a value.

**The assumption underneath all three:** cash flows are **constant through each investment cycle** (no inflation, no technology improvement).

### Worked example — Lecture 5, Alpha vs Beta

`r = 10%`.

| Year | 0 | 1 | 2 | 3 | 4 | NPV |
|---|---|---|---|---|---|---|
| Alpha | −2,000 | 1,500 | 1,500 | | | 603.31 |
| Beta | −4,800 | 1,800 | 1,800 | 1,800 | 1,800 | 905.76 |

Raw NPV says Beta. But Beta lasts four years and Alpha two, and **the NPV as calculated does not account for replacement**.

```
AE_Alpha = 603.31/{[1 − 1/(1.1)²]/0.1} = 603.31/1.735537 = $347.62
AE_Beta  = 905.76/{[1 − 1/(1.1)⁴]/0.1} = 905.76/3.169865 = $285.74

NPV∞_Alpha = 347.62/0.10 = $3,476.20     ← preferred
NPV∞_Beta  = 285.74/0.10 = $2,857.40
```

**Alpha wins once replacement is accounted for.** Running Alpha twice over four years:

| Year | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| Alpha 1 | −2,000 | 1,500 | 1,500 | | |
| Alpha 2 | | | −2,000 | 1,500 | 1,500 |
| NPV | 603.31 | | 603.31 | | |
| AE | | 347.62 | 347.62 | 347.62 | 347.62 |

> **Comparing raw NPVs here gives the wrong answer.** Beta's NPV is 50% larger, and Beta is still the worse project. The whole point of AE is that a four-year project must be compared against *two* two-year projects, not one.

### Worked example — Tutorial 5 Q9 — equal lives, so no AE needed

`r = 9.00%`.

| Year | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|---|
| A | (90,000) | 0 | 30,000 | 40,000 | 45,000 | 50,000 | 50,000 |
| B | (60,000) | 24,000 | 23,000 | 20,000 | 18,000 | 15,000 | 12,000 |

```
NPV_A = $60,326.81      NPV_B = $26,476.49
```

- **(a) Independent** → accept **both**, both are positive.
- **(b) Mutually exclusive, no replacement** → **A**, higher NPV.
- **(c) Mutually exclusive, with replacement** → still **A**. The lives are **equal** (both 6 years), so NPV is the appropriate metric; AE would give the same answer.

> **Replacement alone does not trigger AE — unequal lives do.** Part (c) is a trap for anyone who has learned "replacement ⟹ use AE". Read the decision tree: replacement with **equal** lives is an NPV problem.

### Worked example — Tutorial 5 Q10 — unequal lives with replacement

`r = 10.00%`.

| Year | 0 | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|
| A | (10,000) | 4,500 | 4,500 | 4,500 | | |
| B | (6,000) | 2,000 | 2,000 | 2,000 | 2,000 | 2,000 |

```
NPV_A = −10,000 + 4,500[1 − 1/1.1³]/0.1 = $1,190.83
NPV_B = −6,000  + 2,000[1 − 1/1.1⁵]/0.1 = $1,581.57
```

**(a) Independent** → take **both**.

**(b) Mutually exclusive with unequal lives and replacement** → equate lives:

```
AE_A = 1,190.83/{[1 − 1/(1.1)³]/0.1} = 1,190.83/2.486852 = $478.85    ← higher
AE_B = 1,581.57/{[1 − 1/(1.1)⁵]/0.1} = 1,581.57/3.790787 = $417.22

NPV∞_A = 478.85/0.10 = $4,788.50        NPV∞_B  = 417.22/0.10 = $4,172.10
NPV_LCM (15 years):
  A: 478.85[1 − 1/(1.1)¹⁵]/0.1 = $3,642.19
  B: 417.22[1 − 1/(1.1)¹⁵]/0.1 = $3,173.33
```

**Select A on all three measures.** Note that **raw NPV says B** ($1,581.57 > $1,190.83) — and that would be the wrong project.

### Worked example — Tutorial 5 Q12 — the taxi

`r = 12.00%`. Both cars are bought **in one year's time**.

| | Camry | Falcon |
|---|---|---|
| Purchase price | $35,000 | $38,000 |
| Yearly revenue | $100,000 | $100,000 |
| Yearly costs | ($20,000) | ($22,000) |
| Trade-in value | $12,000 | $17,000 |
| Useful life | 4 years | 3 years |

Net annual cash flow: Camry **$80,000**, Falcon **$78,000**.

**Camry, one cycle (dated from purchase at year 1):**
```
NPV = −35,000 + 80,000(1.12)⁻¹ + 80,000(1.12)⁻² + 80,000(1.12)⁻³ + 92,000(1.12)⁻⁴
    = $215,614.16
AE  = 215,614.16/{[1 − 1/(1.12)⁴]/0.12} = 215,614.16/3.037349 = $70,987.61
NPV∞ at year 1 = 70,987.61/0.12 = $591,563.42
NPV∞ at year 0 = 591,563.42(1.12)⁻¹ = $528,181.63
NPV_LCM (12 yrs, at year 1) = 70,987.61[1 − 1/(1.12)¹²]/0.12 = $439,723.82
NPV_LCM at year 0 = $392,610.54
```

**Falcon:**
```
NPV  = −38,000 + 78,000(1.12)⁻¹ + 78,000(1.12)⁻² + 95,000(1.12)⁻³ = $161,443.10
AE   = 161,443.10/{[1 − 1/(1.12)³]/0.12} = $67,216.67
NPV∞ at year 1 = $560,138.93        NPV∞ at year 0 = $500,124.04
NPV_LCM (12 yrs, at year 1) = $416,365.22    at year 0 = $371,754.65
```

**Choose the Camry** — higher AE, higher NPV∞ and higher NPV_LCM.

> **Where the perpetuity value is dated matters, even though it does not change the decision.** Because the first car is bought in **one year's time**, the perpetual chain starts at year 1, so `AE/r` is a **year-1** value. Adjusting to year 0 (dividing by 1.12) gives the true value added today. The tutorial notes this explicitly: adjusting "is not necessary for making the correct decision, but it provides the true value added of the investment". Both `591,563` and `528,182` are correct answers to *different* questions, and both appear in the tutorial solution.

### Worked example — Tutorial 5 Q13 — optimal replacement of a cost-only asset

The NPV of the **costs** of maintaining a company car for various periods, `r = 20.00%`:

| Hold for | NPV of costs | AE |
|---|---|---|
| One year | (4,891) | (5,869.20) |
| Two years | (8,691) | (5,688.65) |
| Three years | (12,176) | (5,780.25) |
| Four years | (14,005) | (5,409.98) |
| **Five years** | **(15,621)** | **(5,223.35)** ← least cost |

```
AE (1 year) = −4,891/{[1 − 1/(1.20)¹]/0.20} = −4,891/0.833333 = −5,869.20
```

**Replace every five years** — the lowest annual cost.

> **When evaluating costs, choose the *lowest* AE, not the highest.** The AEs here are all negative, so "highest" and "lowest" mean the same in absolute terms only if you keep the signs straight. `−5,223.35` is the *largest* number on that list and also the *smallest cost*. Write the sign every time.

> **You cannot rank by raw NPV here either.** The one-year option has the smallest NPV of costs ($4,891) and the *worst* annual cost. The five-year option has the largest NPV of costs and is the best choice. That inversion is the whole question.

### Worked example — Tutorial 5 MCQ 14–16

Four projects, all with `r = 15.00%`.

| Year | 0 | 1 | 2 | 3 | 4 | 5 | NPV | AE |
|---|---|---|---|---|---|---|---|---|
| A | −14,000 | 7,000 | 6,000 | 5,000 | 4,000 | | **2,198.41** | **770.03** |
| B | −22,000 | 7,000 | 7,000 | 7,000 | 7,000 | 7,000 | 1,465.09 | 437.06 |
| C | −41,500 | 10,000 | 10,000 | 10,000 | 10,000 | 10,000 | (7,978.45) | (2,380.10) |
| D | −32,000 | 11,000 | 11,000 | 11,000 | 11,000 | | (595.24) | (208.49) |

- **Q14 — independent** → take every positive-NPV project → **A and B** (option c).
- **Q15 — mutually exclusive, no replacement** → highest NPV → **A** (option a).
- **Q16 — mutually exclusive, with replacement** → highest AE → **A** (option a).

Here A wins all three. It will not always.

### Worked example — Tutorial 5 MCQ 17 — abandonment

A lease ends at the end of year 4 with zero value; `r = 20.00%`.

| Year | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| Expected cash flows | 5,000 (actual) | 4,500 | 4,000 | 3,000 | 2,000 |
| Sale of lease rights | 3,600 | 4,200 | 3,500 | 1,900 | 0 |

Discontinue at the end of year `k` → collect the operating cash flows up to and including year `k`, plus the sale value at year `k`.

```
Today (yr 0):   5,000 + 3,600                                                  = $8,600.00
End yr 1:       5,000 + (4,500 + 4,200)/1.2                                    = $12,250.00
End yr 2:       5,000 + 4,500/1.2 + (4,000 + 3,500)/1.2²                       = $13,958.33
End yr 3:       5,000 + 4,500/1.2 + 4,000/1.2² + (3,000 + 1,900)/1.2³          = $14,363.43   ← max
End yr 4:       5,000 + 4,500/1.2 + 4,000/1.2² + 3,000/1.2³ + 2,000/1.2⁴       = $14,228.40
```

**End of year 3** (option d).

### Worked example — Tutorial 5 MCQ 18 — Super Jets

The current fleet has two years of useful life. In two years it could be replaced with Super Jets, then replaced every 5 years thereafter. `r = 12%`.

| Detail | Amount ($m) |
|---|---|
| Additional outlay | 750 |
| Additional annual net cash receipts **after all cash expenses including tax** | 250 |
| Additional salvage value | 200 |
| Opportunity cost | 12% |
| Company tax rate | 30% |

The cash receipts are already after tax, so the 30% rate is a distractor here.

```
Cycle cash flows: −750, 250, 250, 250, 250, 450

NPV (one cycle)  = $264.68
AE               = 264.68/{[1 − 1/(1.12)⁵]/0.12} = 264.68/3.604776 = $73.42
NPV∞ at year 2   = 73.42/0.12 = $611.87
NPV∞ at year 0   = 611.87 × (1.12)⁻² = $487.78
```

Answer **(a) 73.42 and 487.78**.

> **Options (a) and (b) differ only in where NPV∞ is dated.** (b) gives 611.87 — correct, but at **year 2**, when the replacement chain begins. The question asks for `NPV₀`. The tutorial even prints the rule underneath: "*the AE starts at Year 3. Hence the NPV at 2 = AE/r while NPV at 0 = AE/r × (1+r)⁻².*" Write down which year your perpetuity is anchored to, every time.

---

## Summary

- **Classify the project first**: independent, mutually exclusive, or mutually inclusive.
- **Payback** — time to recover the outlay; arbitrary target; ignores size, timing and risk, and everything after the payback date.
- **ARR** — average accounting profit ÷ investment (average or initial); not cash, ignores timing.
- **NPV** — `Σ CFₜ(1+r)⁻ᵗ`; accept if positive; the **only** method always consistent with maximising firm value.
- **IRR** — the rate giving `NPV = 0`; accept if `IRR > r`; can be multiple or non-existent; ignores project scale; favours early cash flows.
- **BCR** — `PV of net cash flows ÷ initial outlay`; accept if `> 1`.
- **AE** — `NPV ÷ annuity factor`; the tool for **mutually exclusive projects with unequal lives and replacement**.
- **NPV∞ = AE/r**; **NPV_LCM = AE × annuity factor over the LCM of lives**. Both re-express AE as a value; all three rank identically.
- **The decision tree:** independent → NPV. Mutually exclusive with no replacement → NPV. With replacement and equal lives → NPV. With replacement and unequal lives → AE, NPV∞ or NPV_LCM.
- **Costs:** choose the option with the lowest annual cost (the least negative AE).
- Always record **which date** your perpetuity value is anchored to.

<details><summary>Checkpoint — seven questions</summary>

1. State the decision tree for choosing an evaluation method.
2. A project costs $8,000 and returns $3,000 p.a. for four years. `r = 11%`. Find NPV, IRR, BCR, payback and AE.
3. Two mutually exclusive projects with replacement: X costs $9,000 and returns $4,000 p.a. for 3 years; Y costs $14,000 and returns $4,300 p.a. for 5 years. `r = 10%`. Which is preferred?
4. Why can a project have more than one IRR?
5. Under what circumstances does BCR fail to be computable?
6. Machine maintenance costs have an NPV of −$6,200 if replaced every 2 years and −$10,900 if replaced every 4 years. `r = 12%`. Which replacement cycle is cheaper?
7. An asset can be sold today for $80,000, or held one more year for $18,000 of net income and then sold for $70,000. `r = 14%`. When should it be sold?

---

**Answers**

1. Independent → NPV. Mutually exclusive: no replacement → NPV; replacement with **equal** lives → NPV; replacement with **unequal** lives → AE, NPV∞ or NPV_LCM.

2. Annuity factor at 11% for 4 years = `[1 − 1/(1.11)⁴]/0.11 = 3.102446`. `PV of inflows = 3,000 × 3.102446 = 9,307.34`. `NPV = 9,307.34 − 8,000 = **$1,307.34**`. `BCR = 9,307.34/8,000 = **1.16**`. `PB = 8,000/3,000 = **2.67 years**`. `AE = 1,307.34/3.102446 = **$421.39**`. IRR solves `8,000 = 3,000 × AF`, so `AF = 2.6667` → `IRR ≈ **18.45%**`.

3. `NPV_X = −9,000 + 4,000[1 − 1.1⁻³]/0.1 = −9,000 + 9,947.41 = 947.41`. `NPV_Y = −14,000 + 4,300[1 − 1.1⁻⁵]/0.1 = −14,000 + 16,300.39 = 2,300.39`. Unequal lives with replacement, so use AE: `AE_X = 947.41/2.486852 = **$380.96**`; `AE_Y = 2,300.39/3.790787 = **$606.84**`. **Y is preferred** — and here raw NPV happens to agree, unlike Tutorial 5 Q10.

4. Because IRR solves a polynomial. Each change of sign in the cash-flow sequence can produce another real root, so a project with more than one sign change (outlay → inflows → outlay) may have multiple IRRs, or none.

5. When the initial cash flow is **positive** (there is no outlay to divide by), as in the lecture's Project F. It is also unhelpful when there are multiple outlays spread over time, because "initial outlay" is then ambiguous.

6. `AE (2 yrs) = −6,200/{[1 − 1/(1.12)²]/0.12} = −6,200/1.690051 = **−$3,668.53**`. `AE (4 yrs) = −10,900/{[1 − 1/(1.12)⁴]/0.12} = −10,900/3.037349 = **−$3,588.66**`. **Replace every 4 years** — lower annual cost.

7. Sell today: **$80,000**. Hold one year: `(18,000 + 70,000)/1.14 = 88,000/1.14 = **$77,192.98**`. **Sell today** — the income does not compensate for the $10,000 fall in value plus a year of foregone return.
</details>
