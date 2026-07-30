# TOPIC 6 (continued) — Replacement Decisions and Worked Models

Lecture 6 and Tutorial 6. Ross et al. (2021, 8th ed.) Ch 10.

The previous file built the financial model from scratch. This one applies it to the case that dominates the tutorial and the exam: **replacing an existing asset**. Everything here is the same model with three extra rows — the old asset's forgone depreciation, its gain or loss on sale, and its salvage proceeds — and those three rows are where the marks are.

---

## 6.4 Replacement decisions — the marginal model

If the analysis involves mutually exclusive investments — replacing existing machinery, or working out an optimal replacement frequency — apply the Topic 5 tree, but with the full tax and depreciation model underneath:

- No replacement → **NPV** or **marginal analysis**
- Replacement, equal lives → **NPV**
- Replacement, unequal lives → **AE**, **NPV_LCM** or **NPV∞**

**What changes in a replacement model:**

| Line | What to enter |
|---|---|
| Revenue | The **additional** revenue (new − old) |
| Expenses | The **cost reduction** (old − new), entered as a positive to EBITDA |
| Depreciation | **New** depreciation as a cost, **old** depreciation **added back** (it is forgone) |
| Gain/Loss old | At time 0: `old salvage − old book value` |
| Salvage old | The cash received for the old asset, at time 0 |
| Capital expenditure | The new asset's cost |

### Worked example — Lecture 6, Playfun Ltd

The furniture division bought a machine **5 years ago for $7,500**, expected useful life **15 years**, zero value at end of life. Current market value **$1,000**. A new machine costs **$16,000** (including installation) and over its **10-year life** will expand sales from **$10,000 to $11,000** p.a. and reduce annual running costs from **$7,000 to $5,000**. Required return **10% p.a.**, straight-line depreciation to zero, new salvage $0, tax **30%** in the year income is earned.

```
Additional revenue    = 11,000 − 10,000 = 1,000
Cost reduction        =  7,000 −  5,000 = 2,000
Old depreciation      = 7,500/15  =   500 p.a.
New depreciation      = 16,000/10 = 1,600 p.a.
Book value old at t=0 = 7,500 − 5 × 500 = 5,000
Loss on sale of old   = 1,000 − 5,000 = (4,000)
```

| Year | 0 | 1–9 | 10 |
|---|---|---|---|
| Additional revenue | | 1,000 | 1,000 |
| Cost reduction | | 2,000 | 2,000 |
| **EBITDA** | **0** | **3,000** | **3,000** |
| New depreciation | | (1,600) | (1,600) |
| Old depreciation (forgone, added back) | | 500 | 500 |
| Loss on sale of old | (4,000) | | |
| **EBIT** | **(4,000)** | **1,900** | **1,900** |
| Tax @ 30% | +1,200 | (570) | (570) |
| **NOPAT** | **(2,800)** | **1,330** | **1,330** |
| Add back new depr. & G/L | 0 | 1,600 | 1,600 |
| Less old depr. & G/L | +4,000 | (500) | (500) |
| **CF from operations** | **1,200** | **2,430** | **2,430** |
| Capital expenditure | (16,000) | | |
| Salvage (old machine) | 1,000 | | |
| **FCF** | **(13,800)** | **2,430** | **2,430** |

```
Discount factor for years 1–9 = [1 − 1/(1.1)⁹]/0.1 = 5.759024
Discount factor for year 10   = (1.1)⁻¹⁰            = 0.385543

NPV = −13,800 + 2,430 × 5.759024 + 2,430 × 0.385543
    = −13,800 + 13,994.43 + 936.87
    = $1,131.30      →  replace the machine
```

> **The loss on sale at time 0 is a tax *benefit*, worth +$1,200.** Selling the old machine for $1,000 when its book value is $5,000 generates a $4,000 deductible loss. That reduces the tax bill by $1,200, and it is the difference between a positive and a negative NPV here. Never leave the gain/loss on the old asset out of the time-0 column.

---

## 6.5 Full worked tutorial models

These are the models most likely to appear as an extended exam question.

### Tutorial 6 Q3 — marginal change in depreciation

An old machine cost **$6,000 three years ago**, total estimated life 8 years, depreciated at **25% diminishing value**. The new machine costs **$25,000**, life **5 years**, straight-line.

**(a)** New depreciation `= 25,000/5 = $5,000` p.a., constant, to a **zero** residual balance (the EFB210 default).

**(b)** The marginal change in depreciation is the new depreciation **plus** the old depreciation forgone. Note the old machine has already been depreciated for 3 years:

| Year | Opening balance (old) | Old depreciation | New depreciation | Change in depreciation |
|---|---|---|---|---|
| −2 | 6,000.00 | (1,500.00) | | *already claimed* |
| −1 | 4,500.00 | (1,125.00) | | *already claimed* |
| 0 | 3,375.00 | (843.75) | | *already claimed* |
| 1 | 2,531.25 | (632.81) | (5,000.00) | **(4,367.19)** |
| 2 | 1,898.44 | (474.61) | (5,000.00) | **(4,525.39)** |
| 3 | 1,423.83 | (355.96) | (5,000.00) | **(4,644.04)** |
| 4 | 1,067.87 | (266.97) | (5,000.00) | **(4,733.03)** |
| 5 | 800.90 | (200.23) | (5,000.00) | **(4,799.77)** |

> **The first three years of depreciation are sunk and never enter the NPV analysis.** Only the depreciation the old machine *would have* claimed from year 1 onwards is forgone. And note the change is not constant — DMV old depreciation shrinks each year, so the increment grows.

### Tutorial 6 Q4 — Sunrise Industries

Printing press **$25,000**; additional cash revenue **$24,000** p.a.; cash costs **$13,000** p.a.; straight-line over **5 years**; salvage **$1,200**; tax **30%** in the year of income; discount rate **20%**; no working capital.

```
Depreciation = 25,000/5 = 5,000;  book value at yr 5 = 0;  gain on sale = +1,200
```

| Year | 0 | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|
| Revenue | | 24,000 | 24,000 | 24,000 | 24,000 | 24,000 |
| Expenses | | (13,000) | (13,000) | (13,000) | (13,000) | (13,000) |
| **EBITDA** | | **11,000** | **11,000** | **11,000** | **11,000** | **11,000** |
| Depreciation | | (5,000) | (5,000) | (5,000) | (5,000) | (5,000) |
| Gain on sale | | | | | | 1,200 |
| **EBIT** | | **6,000** | **6,000** | **6,000** | **6,000** | **7,200** |
| Tax | | (1,800) | (1,800) | (1,800) | (1,800) | (2,160) |
| **NOPAT** | | **4,200** | **4,200** | **4,200** | **4,200** | **5,040** |
| Add back depr. & G/L | | 5,000 | 5,000 | 5,000 | 5,000 | 3,800 |
| **CF from ops** | | **9,200** | **9,200** | **9,200** | **9,200** | **8,840** |
| Capital expenditure | (25,000) | | | | | |
| Salvage | | | | | | 1,200 |
| **FCF** | **(25,000)** | **9,200** | **9,200** | **9,200** | **9,200** | **10,040** |
| Disc. factor @ 20% | 1.0000 | 0.8333 | 0.6944 | 0.5787 | 0.4823 | 0.4019 |
| **PV** | (25,000) | 7,667 | 6,389 | 5,324 | 4,437 | 4,035 |

```
NPV = $2,851    →  purchase the press
```

### Tutorial 6 Q5 — bottling machine, with working capital

Equipment **$100,000**, life **5 years**, revenues **$50,000** p.a., expenses **$20,000** p.a., prime-cost depreciation, salvage **$10,000**, working capital **$10,000** at the start recovered in the final year. `r = 10%`, tax **30%** in the year of income.

```
Depreciation = 100,000/5 = 20,000;  book value at yr 5 = 0;  gain on sale = +10,000
```

| Year | 0 | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|
| **EBITDA** | | 30,000 | 30,000 | 30,000 | 30,000 | 30,000 |
| Depreciation | | (20,000) | (20,000) | (20,000) | (20,000) | (20,000) |
| Gain on sale | | | | | | 10,000 |
| **EBIT** | | **10,000** | **10,000** | **10,000** | **10,000** | **20,000** |
| Tax | | (3,000) | (3,000) | (3,000) | (3,000) | (6,000) |
| **NOPAT** | | 7,000 | 7,000 | 7,000 | 7,000 | 14,000 |
| Add back depr. & G/L | | 20,000 | 20,000 | 20,000 | 20,000 | 10,000 |
| **CF from ops** | | **27,000** | **27,000** | **27,000** | **27,000** | **24,000** |
| Capital expenditure | (100,000) | | | | | |
| Salvage | | | | | | 10,000 |
| Change in working capital | (10,000) | | | | | 10,000 |
| **FCF** | **(110,000)** | 27,000 | 27,000 | 27,000 | 27,000 | **44,000** |
| Disc. factor | 1.0000 | 0.9091 | 0.8264 | 0.7513 | 0.6830 | 0.6209 |
| **PV** | (110,000) | 24,545 | 22,314 | 20,285 | 18,441 | 27,321 |

```
NPV = $2,907    →  purchase the machine
```

> **Margin of safety is thin — $2,907 on a $110,000 outlay.** That is 2.6%. A 3% error in the revenue forecast flips the decision. Say so in a written answer; it is what "limitations" sections are for.

### Tutorial 6 Q6 — widgets, with tax paid the year AFTER income

330 widgets p.a. at **$1,000** each; variable costs **40% of sales**; fixed costs **$50,000** p.a.; capex **$400,000**; working capital **$50,000** recovered in the last year; prime cost over **5 years**; salvage **$60,000**; tax **30% paid the year after income**; `r = 10%`.

```
Revenue         = 330 × 1,000 = 330,000
Variable costs  = 40% × 330,000 = 132,000
Depreciation    = 400,000/5 = 80,000;  book value yr 5 = 0;  gain = +60,000
```

| Year | 0 | 1 | 2 | 3 | 4 | 5 | **6** |
|---|---|---|---|---|---|---|---|
| Revenue | | 330,000 | 330,000 | 330,000 | 330,000 | 330,000 | |
| Variable expenses | | (132,000) | (132,000) | (132,000) | (132,000) | (132,000) | |
| Fixed expenses | | (50,000) | (50,000) | (50,000) | (50,000) | (50,000) | |
| **EBITDA** | | 148,000 | 148,000 | 148,000 | 148,000 | 148,000 | — |
| Depreciation | | (80,000) | (80,000) | (80,000) | (80,000) | (80,000) | |
| Gain on sale | | | | | | 60,000 | |
| **EBIT** | | **68,000** | 68,000 | 68,000 | 68,000 | **128,000** | — |
| **Tax (one year later)** | | **—** | (20,400) | (20,400) | (20,400) | (20,400) | **(38,400)** |
| **NOPAT** | | 68,000 | 47,600 | 47,600 | 47,600 | 107,600 | (38,400) |
| Add back depr. & G/L | | 80,000 | 80,000 | 80,000 | 80,000 | 20,000 | — |
| **CF from ops** | | 148,000 | 127,600 | 127,600 | 127,600 | 127,600 | (38,400) |
| Capital expenditure | (400,000) | | | | | | |
| Salvage | | | | | | 60,000 | |
| Working capital | (50,000) | | | | | 50,000 | |
| **FCF** | **(450,000)** | 148,000 | 127,600 | 127,600 | 127,600 | **237,600** | **(38,400)** |
| Disc. factor | 1.0000 | 0.9091 | 0.8264 | 0.7513 | 0.6830 | 0.6209 | 0.5645 |
| **PV** | (450,000) | 134,545 | 105,455 | 95,868 | 87,153 | 147,531 | (21,676) |

```
NPV = $98,875    →  purchase the equipment
```

**(b)** Break-even price ≈ **$818.87** (the solution says "approximately $819").
**(c)** At 200 widgets p.a., `NPV = −$116,166` — **not viable**.

> **Tax paid a year in arrears adds a year to the model.** Year 1 has **no tax line** and year 6 has **nothing but** the tax on year 5's income. Both easy to drop. Note also that year 1's cash flow ($148,000) is the largest of the five operating years precisely because no tax is paid then — that is a timing effect, not a profitability effect.

> **Break-even *price* and break-even *quantity* are different questions.** The NPV = 0 quantity here is **270.23 widgets**, not 200 and not the 819 from part (b). Read which one the question wants.

### Tutorial 6 Q7 — Makestuff Ltd replacement

Machine bought **5 years ago for $75,000**, expected useful life 15 years, zero end value. Current market value **$10,000**. New machine **$160,000** including installation, **10-year life**, expands sales from **$100,000 to $110,000** and reduces running costs from **$70,000 to $50,000**. Straight-line to zero for both, new salvage **$0**, tax **30%** in the year earned, no working capital, `r = 10%`.

```
Additional revenue = 10,000        Cost reduction = 20,000
New depreciation   = 160,000/10 = 16,000
Old depreciation   =  75,000/15 =  5,000
Book value old     = 75,000 − 5 × 5,000 = 50,000
Loss on sale old   = 10,000 − 50,000 = (40,000)
```

| Year | 0 | 1–9 | 10 |
|---|---|---|---|
| Additional revenue | | 10,000 | 10,000 |
| Cost reduction | | 20,000 | 20,000 |
| **EBITDA** | 0 | **30,000** | **30,000** |
| New depreciation | | (16,000) | (16,000) |
| Old depreciation added back | | 5,000 | 5,000 |
| Loss on sale of old | (40,000) | | |
| **EBIT** | **(40,000)** | **19,000** | **19,000** |
| Tax @ 30% | +12,000 | (5,700) | (5,700) |
| **NOPAT** | (28,000) | 13,300 | 13,300 |
| Add back new depr. & G/L | 0 | 16,000 | 16,000 |
| Less old depr. & G/L | +40,000 | (5,000) | (5,000) |
| **CF from ops** | **12,000** | **24,300** | **24,300** |
| Capital expenditure | (160,000) | | |
| Salvage (old) | 10,000 | | |
| **FCF** | **(138,000)** | **24,300** | **24,300** |
| Disc. factor | 1.0000 | 5.7590 | 0.3855 |
| **PV** | (138,000) | 139,944 | 9,369 |

```
(a) NPV = $11,313    →  replace the machine
(b) AE  = 11,313/{[1 − 1/(1.1)¹⁰]/0.1} = 11,313/6.144567 = $1,841
(c) With no additional sales:  EBIT falls to 9,000, CF to 17,300,  NPV = −$31,699  →  do NOT replace
```

**Part (c) is the sensitivity result that matters.** The entire case rests on the $10,000 of extra sales; strip it out and a comfortably positive project becomes a $31,699 loser.

### Tutorial 6 Q8 — Publishing Company, tax paid a year in arrears

Old photocopier cost **$60,000**, five years old, current salvage **$10,000**, depreciated straight-line at **6⅔% p.a.** (i.e. over 15 years) to zero. Replacement costs **$45,000**, **ten-year** life, salvage at the end **$10,000**, depreciated **10% straight line**, reduces annual costs by **$12,000**. Tax **30%**, paid **the year after** the income/expense. `r = 15%`. No working capital.

```
New depreciation = 45,000 × 0.10       = 4,500
Old depreciation = 60,000 × (2/30)     = 4,000
Book value old   = 60,000 − 5 × 4,000  = 40,000
Loss on sale old = 10,000 − 40,000     = (30,000)
Gain on sale new (yr 10): book value 45,000 − 10 × 4,500 = 0, salvage 10,000 → +10,000
```

| Year | 0 | 1 | 2–9 | 10 | 11 |
|---|---|---|---|---|---|
| Cost saving | | 12,000 | 12,000 | 12,000 | |
| **EBITDA** | 0 | 12,000 | 12,000 | 12,000 | — |
| New depreciation | | (4,500) | (4,500) | (4,500) | |
| Old depreciation added back | | 4,000 | 4,000 | 4,000 | |
| Loss on sale old | (30,000) | | | | |
| Gain on sale new | | | | 10,000 | |
| **EBIT** | **(30,000)** | 11,500 | 11,500 | **21,500** | — |
| **Tax (one year later)** | — | **+9,000** | (3,450) | (3,450) | **(6,450)** |
| **NOPAT** | (30,000) | 20,500 | 8,050 | 18,050 | (6,450) |
| Add back new depr. & G/L | 0 | 4,500 | 4,500 | (5,500) | — |
| Less old depr. & G/L | +30,000 | (4,000) | (4,000) | (4,000) | — |
| **CF from ops** | 0 | 21,000 | 8,550 | 8,550 | (6,450) |
| Capital expenditure | (45,000) | | | | |
| Salvage | 10,000 | | | 10,000 | |
| **FCF** | **(35,000)** | **21,000** | **8,550** | **18,550** | **(6,450)** |

```
NPV @ 15% = $19,822    →  purchase the replacement
```

**(b) Should the company change its depreciation technique?**

*In finance, depreciation is a benefit* — it carries a **tax shield**. In present-value terms, the method that delivers the benefit **sooner** is preferred.

- **(i) Depreciate only the net value (cost less salvage):** NPV falls to **$19,158**. Prefer straight-line **to zero**.
- **(ii) Diminishing value:** NPV rises to **$20,772**. Prefer **DMV**.

**(c) How much could the company borrow, servicing the loan from the project's cash flows?**

```
The answer is always NPV + outlay:   45,000 + 19,822 = $64,822
```

Borrow $64,822, buy the machine for $45,000, and pocket $19,822. The amortisation schedule confirms it: the $10,000 old-machine proceeds repay part immediately, the annual $8,550 flows service the rest, and the year-10 surplus covers the year-11 tax bill, leaving exactly zero.

> **"How much can they borrow?" = NPV + initial outlay.** This is a one-line result worth remembering; it is the cleanest possible statement of what NPV *means*. A project with NPV of $19,822 supports $19,822 more debt than it costs.

### Tutorial 6 Q9 — Super Jets, the full model

Same scenario as Tutorial 5 MCQ 18, but with revenue, expenses and depreciation given separately (all in $m).

| Detail | Amount |
|---|---|
| Additional outlay | 750 |
| Additional annual revenues | 450 |
| Additional annual cash expenses | 144 |
| Depreciation method | Straight line |
| Additional working capital | 0 |
| Additional salvage value | 200 |
| Opportunity cost | 12% |
| Company tax rate | 30% |

```
Depreciation = 750/5 = 150 p.a.;  book value yr 5 = 0;  gain on sale = +200
```

| Year | 0 | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|
| Revenue | | 450 | 450 | 450 | 450 | 450 |
| Expenses | | (144) | (144) | (144) | (144) | (144) |
| **EBITDA** | | 306 | 306 | 306 | 306 | 306 |
| Depreciation | | (150) | (150) | (150) | (150) | (150) |
| Gain on sale | | | | | | 200 |
| **EBIT** | | 156 | 156 | 156 | 156 | 356 |
| Tax @ 30% | | (46.8) | (46.8) | (46.8) | (46.8) | (106.8) |
| **NOPAT** | | 109.2 | 109.2 | 109.2 | 109.2 | 249.2 |
| Add back depr. & G/L | | 150 | 150 | 150 | 150 | (50) |
| **CF from ops** | | 259.2 | 259.2 | 259.2 | 259.2 | 199.2 |
| Capital expenditure | (750) | | | | | |
| Salvage | | | | | | 200 |
| **FCF** | **(750)** | **259.2** | **259.2** | **259.2** | **259.2** | **399.2** |

```
NPV (one cycle)  = $263.80m
AE               = 263.80/3.604776 = $73.18m
NPV∞ at year 2   = 73.18/0.12  = $609.83m
NPV∞ at year 0   = 609.83 × (1.12)⁻² = $486.16m
```

The tutorial rounds these to 264, 73, 610 and 486 respectively — consistent with the Tutorial 5 figures (73.42 and 487.78) computed from the simplified "net cash receipts of 250" version. The tiny difference is the depreciation tax shield being modelled explicitly rather than rolled into a net figure.

### Tutorial 6 Q10 — the cafeteria, two mutually exclusive alternatives

Open **250 days** a year. **200 dissatisfied customers** turn away daily. Two options: two vending machines at **$10,000 each**, or revamping the serving line for **$100,000**. Both have a **10-year** life, prime-cost depreciation. `r = 12%`, tax **30%** in the year earned. Average sale **$2.20**; current contribution margin **30%**, rising to **35%** with the new serving line. Present equipment cost **$45,000** five years ago, depreciated prime cost over 15 years.

```
Old depreciation = 45,000/15 = 3,000;  book value now = 45,000 − 15,000 = 30,000
```

**Alternative 1 — Revamp**

```
Additional sales      = 200 × 250 × 2.20 × 0.35 = 38,500
Additional contribution margin on existing sales = 10,000 (given)
Additional salary                                = (10,000)
Dismantling cost at t=0                          = (2,000)
New depreciation = 100,000/10 = 10,000;  old depreciation forgone = 3,000
Old salvage now = 15,000 → Loss on sale = 15,000 − 30,000 = (15,000)
New salvage at yr 10 = 20,000, book value 0 → Gain = +20,000
```

| Year | 0 | 1–9 | 10 |
|---|---|---|---|
| Additional contribution margin | | 10,000 | 10,000 |
| Additional sales | | 38,500 | 38,500 |
| Additional salary | | (10,000) | (10,000) |
| Dismantling costs | (2,000) | | |
| **EBITDA** | **(2,000)** | **38,500** | **38,500** |
| New depreciation | | (10,000) | (10,000) |
| Old depreciation added back | | 3,000 | 3,000 |
| Gain on new | | | 20,000 |
| Loss on old | (15,000) | | |
| **EBIT** | **(17,000)** | **31,500** | **51,500** |
| Tax @ 30% | +5,100 | (9,450) | (15,450) |
| **NOPAT** | (11,900) | 22,050 | 36,050 |
| Add back depr. & G/L | 15,000 | 7,000 | (13,000) |
| **CF from ops** | 3,100 | 29,050 | 23,050 |
| Capital expenditure | (100,000) | | |
| Salvage | 15,000 | | 20,000 |
| **FCF** | **(81,900)** | **29,050** | **43,050** |
| Disc. factor | 1.000 | 5.328 | 0.322 |
| **PV** | (81,900) | 154,786 | 13,861 |

```
NPV = $86,747
```

**Alternative 2 — Vending machines**

```
Additional sales = 200 × 0.70 × 250 × 2.20 × 0.20 = 15,400
Servicing costs  = (1,200)
Depreciation     = 20,000/10 = 2,000
Salvage yr 10    = 2 × 1,500 = 3,000, book value 0 → Gain = +3,000
Old equipment is retained, so no old-asset lines
```

| Year | 0 | 1–9 | 10 |
|---|---|---|---|
| Additional sales | | 15,400 | 15,400 |
| Servicing costs | | (1,200) | (1,200) |
| **EBITDA** | 0 | 14,200 | 14,200 |
| Depreciation | | (2,000) | (2,000) |
| Gain on sale | | | 3,000 |
| **EBIT** | 0 | 12,200 | 15,200 |
| Tax @ 30% | 0 | (3,660) | (4,560) |
| **NOPAT** | 0 | 8,540 | 10,640 |
| Add back depr. & G/L | 0 | 2,000 | (1,000) |
| **CF from ops** | 0 | 10,540 | 9,640 |
| Capital expenditure | (20,000) | | |
| Salvage | | | 3,000 |
| **FCF** | **(20,000)** | **10,540** | **12,640** |
| **PV** | (20,000) | 56,160 | 4,070 |

```
NPV = $40,229
```

**Select the revamp** — the higher NPV, and the lives are equal so no AE is needed.

> **Only 70% of the turned-away customers use the vending machines, and their margin is 20%, not 30%.** `200 × 0.70 × 250 × 2.20 × 0.20 = 15,400`. Dropping either the 0.70 or using the wrong margin gives $22,000 or $11,000 and the wrong NPV. Read the paragraph twice before multiplying.

---

## 6.6 Multiple choice — the Retro City Bicycles set

Initial outlay **$1,800,000**, straight-line over **5 years**, salvage **$80,000**. Price **$550** per bike, variable cost **$220**, fixed costs **$500,000** p.a. `r = 10%`, tax **30%** in the year of income.

```
Depreciation = 1,800,000/5 = 360,000;  book value yr 5 = 0
Contribution per bike = 550 − 220 = 330
```

**Q11 — units to break even, to the nearest 50.**

Solving `NPV = 0` by goal-seek: `q = 3,063.48` → **3,050** (option b).

> **This is the NPV break-even, not the accounting break-even.** Setting `EBIT = 0` gives `q = (500,000 + 360,000)/330 = 2,606` bikes — a completely different number and not an option. The NPV break-even is higher because it must also recover the required 10% return on capital.

**Q12 — NPV at 5,000 bikes.**

```
Revenue        = 5,000 × 550       = 2,750,000
Variable costs = 5,000 × 220       = (1,100,000)
Fixed costs                        =   (500,000)
Depreciation                       =   (360,000)
EBIT (yrs 1–4)                     =    790,000        yr 5: 790,000 + 80,000 = 870,000
Tax                                =   (237,000)       yr 5: (261,000)
NOPAT                              =    553,000        yr 5: 609,000
Add back depr. and G/L             =    360,000        yr 5: 360,000 − 80,000 = 280,000
FCF                                =    913,000        yr 5: 913,000 + 80,000 = 969,000

NPV = −1,800,000 + 913,000 × [1 − 1.1⁻⁴]/0.1 + 969,000(1.1)⁻⁵
    = $1,695,760      →  option (c)
```

**Q13 — Gain/Loss on sale in year 5 under diminishing value.**

```
DMV rate = (1/5) × 2 = 40%

Year 1: 1,800,000 × 0.40 = 720,000   →  balance 1,080,000
Year 2: 1,080,000 × 0.40 = 432,000   →  balance   648,000
Year 3:   648,000 × 0.40 = 259,200   →  balance   388,800
Year 4:   388,800 × 0.40 = 155,520   →  balance   233,280
Year 5:   233,280 × 0.40 =  93,312   →  balance   139,968

Gain/(Loss) = Salvage − Book Value = 80,000 − 139,968 = (59,968)
```

Answer **(b) −$59,968**.

> **The unit's two published answers to Q13 disagree — and the PDF is the one that is right.** The PDF answer key says (b) −$59,968. The Excel solution file says *"Question 13 is not clear as it does not specify the diminishing depreciation rate, so the correct answer shall be (d) cannot be determined"*, then works the schedule at a **20%** rate and reports a loss of $509,824. But EFB210's own convention, stated in Lecture 6, is `DMV rate = SL rate × 2` — here `20% × 2 = 40%` — and that convention reproduces the published answer of −$59,968 exactly. The Excel note applied the *straight-line* rate as if it were the DMV rate. **Use 40% and answer (b).** Worth confirming with your tutor, but the arithmetic settles it.

**Q14 — which statement is correct?** **(d) All of the above.**

- (a) NPV would increase under diminishing value → **correct**: higher depreciation in early years means larger tax deductions sooner, which is worth more in present value.
- (b) NPV decreases as the discount rate increases → **correct**.
- (c) AE would give the same decision as NPV in this instance → **correct**: with a single project there is only one life to annuitise, so the sign of AE always matches the sign of NPV.

---

---

## Summary

- In a **replacement** model, everything is *incremental*: **additional** revenue, the **cost reduction**, **new** depreciation as a cost, **old** depreciation **added back** as forgone, and the old asset's **gain/loss** and **salvage** at time 0.
- A **loss on sale of the old asset is a cash benefit** at time 0, worth `loss × t` in reduced tax. It is frequently the difference between a positive and a negative NPV.
- The forgone old depreciation only runs for **as long as the old asset had remaining life**.
- The **first years of depreciation already claimed are sunk** and never enter the analysis.
- **Tax paid a year in arrears** adds a year to the model: year 1 has no tax line, and the final extra year contains nothing but the last year's tax.
- **Maximum borrowing supported by a project = NPV + initial outlay.**
- **DMV depreciation raises NPV** relative to straight line, because the tax shield arrives sooner. Depreciating only the net value (cost less salvage) **lowers** it.
- **Accounting break-even ≠ NPV break-even.** The Retro City Bicycles set has an accounting break-even of 2,606 bikes and an NPV break-even of 3,063.
- `DMV rate = 2 × SL rate` — a 5-year asset depreciates at **40%** reducing balance, not 20%.
- Choose the tool by the decision tree from Topic 5: independent → NPV; mutually exclusive with no replacement → NPV; with replacement and **equal** lives → NPV; with replacement and **unequal** lives → AE, NPV∞ or NPV_LCM.

<details><summary>Checkpoint — six questions</summary>

1. A firm bought a machine 4 years ago for $90,000, straight line over 12 years to zero. It can be sold today for $35,000. What is the gain or loss, and what is the time-0 tax effect at 30%?
2. Following Q1, a replacement costs $150,000 with a 10-year life, zero salvage, and cuts operating costs by $28,000 p.a. Tax 30% in the year of income, `r = 10%`. Should the firm replace?
3. Why is a loss on sale of an old asset treated as a *benefit* in a replacement analysis?
4. A firm's tax is paid one year after income. Which two features of the model change relative to same-year tax?
5. A project has an NPV of $38,000 and required an outlay of $215,000. How much can the firm borrow against it, and why?
6. Two projects have NPVs of $9,500 (5-year life) and $12,800 (8-year life) at 10%, both with indefinite replacement. Which is preferred?

---

**Answers**

1. `Old depreciation = 90,000/12 = 7,500` p.a.; `Book value = 90,000 − 4 × 7,500 = 60,000`. `Loss on sale = 35,000 − 60,000 = **(25,000)**`. The loss reduces EBIT at time 0, so tax falls by `25,000 × 0.30 = **+$7,500**` — a cash inflow.

2. Time 0: `EBIT = −25,000`, `Tax = +7,500`, `NOPAT = −17,500`, add back the loss `+25,000` → `CF from ops = 7,500`. `FCF₀ = 7,500 − 150,000 + 35,000 = **−$107,500**`. New depreciation `= 150,000/10 = 15,000`; the old machine had 8 years of life left, so its $7,500 is forgone for years 1–8 only. Years 1–8: `EBIT = 28,000 − 15,000 + 7,500 = 20,500`; `Tax = 6,150`; `NOPAT = 14,350`; `CF = 14,350 + 15,000 − 7,500 = 21,850`. Years 9–10: `EBIT = 28,000 − 15,000 = 13,000`; `Tax = 3,900`; `NOPAT = 9,100`; `CF = 9,100 + 15,000 = 24,100`. `NPV = −107,500 + 21,850 × 5.334926 + 24,100 × (6.144567 − 5.334926) = −107,500 + 116,568.13 + 19,512.34 = **+$28,580.47 — replace**`.

3. Because it is a **deductible** loss. Selling below book value creates a tax deduction in that year, reducing the tax bill by `loss × t`. The accounting label "loss" describes the book entry, not the cash consequence, and the cash consequence is a receipt.

4. The **tax line shifts one column to the right** (year 1 has no tax; each year's tax is computed on the previous year's EBIT), and the model **gains an extra final year** containing only the last year's tax payment.

5. **`38,000 + 215,000 = $253,000`.** The project's cash flows will service a loan of exactly that size — which is the cleanest possible statement of what NPV means: the surplus a project generates over and above repaying its own cost with interest.

6. Unequal lives with replacement → AE. `AF(5, 10%) = 3.790787`; `AE = 9,500/3.790787 = **$2,506.07**`. `AF(8, 10%) = 5.334926`; `AE = 12,800/5.334926 = **$2,399.19**`. **The 5-year project is preferred**, even though its NPV is lower — the classic AE reversal.
</details>
