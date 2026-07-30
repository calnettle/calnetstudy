# TOPIC 6 — Capital Budgeting 2: Building the Financial Model

Lecture 6. Ross et al. (2021, 8th ed.) Ch 10.

Topic 5 gave you the decision rules with the cash flows handed to you. Topic 6 makes you build the cash flows: which ones to include, and how tax and depreciation distort them. This is the topic the 25% assignment is built on. Replacement decisions and the full worked tutorial models continue in the next file.

---

## 6.1 Marginal analysis

**Marginal analysis examines the additional / incremental cash flows that one project generates relative to another.**

Take the two projects from Lecture 5, `r = 10%`:

| Project | Yr 0 | Yr 1 | Yr 2 | Yr 3 | NPV | IRR |
|---|---|---|---|---|---|---|
| A | −3,000 | 2,000 | 2,000 | 0 | 471.07 | 21.5% |
| B | −6,200 | 4,000 | 4,000 | 0 | 742.15 | 18.8% |
| **B − A** | **−3,200** | **2,000** | **2,000** | **0** | **271.07** | **16.3%** |

Two readings:

- The **NPV of the marginal analysis** is the additional NPV of B over A: `$271.07` (and `742.15 − 471.07 = 271.08` ✔).
- The **IRR of the marginal analysis** is the **crossover rate** — the discount rate at which both projects generate the same NPV: **16.3%**.

**Every NPV you have ever calculated is a marginal analysis:**

```
CFs of company WITH the project  −  CFs of company WITHOUT the project  =  CFs of the project
```

That sentence is the licence for everything in §6.2: you only ever count what *changes*.

### Worked example — Tutorial 6 Q1

| Year | 0 | 1–5 |
|---|---|---|
| A | (1,500) | 550 |
| B | (600) | 240 |
| **A − B** | **(900)** | **310** |

A − B is chosen (rather than B − A) because it gives a standard cash-flow pattern: one outlay, then inflows.

```
NPV_(A−B) = −900 + 310[1 − 1/(1.1)⁵]/0.1 = −900 + 1,175.14 = $275.14
```
Check: `584.93 − 309.79 = 275.14` ✔ — the difference in the NPVs from Tutorial 5 Q7.

```
IRR_(A−B): 0 = −900 + 310[1 − 1/(1+IRR)⁵]/IRR   →   IRR = 21.36%
```

**Interpretation, and this is the part worth memorising:**

- `r < 21.36%` → **A** is preferred.
- `21.36% < r < 28.65%` → **B** is preferred (28.65% is B's own IRR).
- `r > 28.65%` → **neither**; both have negative NPVs.

### Worked example — Tutorial 6 Q2

| Year | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| A | (11,000) | 2,000 | 4,000 | 10,000 |
| B | (12,000) | 8,000 | 4,000 | 4,000 |
| **B − A** | **(1,000)** | **6,000** | **0** | **(6,000)** |

Here **B − A** is chosen to make the first cash flow negative.

```
NPV_(B−A) = −1,000 + 6,000(1.1)⁻¹ + 0 − 6,000(1.1)⁻³ = −$53.34
```
Check: `1,583.77 − 1,637.11 = −53.34` ✔ — B is worse than A by $53.34 at 10%.

```
IRR_(B−A) = 10.74%
```

- `r < 10.74%` → **A** preferred.
- `10.74% < r < 18%` → **B** preferred.
- `r > 18%` → neither.

> **Choose the subtraction order so the incremental stream starts negative.** `A − B` in Q2 gives `+1,000, −6,000, 0, +6,000` — a non-standard pattern whose IRR is harder to find and may be multiple. The NPV is just the negative of the other, but the IRR interpretation gets murky. Pick the order that gives one sign change.

---

## 6.2 The financial model

When modelling project cash flows, consider **which** flows to include, their **timing**, the **tax effect** and the impact of **inflation**.

### Include / exclude

| Include | Exclude |
|---|---|
| Incremental cash flows | **Financing charges** — they are in the discount rate; counting them twice double-counts |
| Opportunity costs and benefits | **Sunk costs** — already spent, not incremental |
| Incremental tax effects, which are not always cash flows themselves (e.g. depreciation) | **Allocated costs** that are not incremental |

Plus: be careful with inflation, and take a **structured approach**.

### The structure

| Line | Notes |
|---|---|
| Revenue | |
| Operating Expenses | |
| **EBITDA** | Earnings Before Interest, Tax, Depreciation and Amortisation |
| Depreciation | Not a cash flow — it is here only for its tax effect |
| Gain/Loss on Sale | Also not a cash flow — same reason |
| **EBIT** | Earnings Before Interest and Tax |
| Tax | `−EBIT × t` |
| **NOPAT** | Net Operating Profit After Tax |
| Add back Depreciation and Gain/Loss | Because neither was a cash flow |
| **Cash Flow from Operations** | |
| Less Capital Expenditure | |
| Add Salvage | The **cash** proceeds of sale |
| Less Changes in Working Capital | Capital to meet short-term funding needs |
| **Free Cash Flow** | |
| Discount Factor | `(1 + r)⁻ᵗ` |
| PV of Cash Flows | |
| **NPV** | |

> **Depreciation appears twice, with opposite signs, and so does the gain or loss on sale.** Subtract them above EBIT so they reduce taxable income; add them back below NOPAT because no cash moved. If you only do one of the two, your cash flow is wrong by the full amount. The single most common structural error in this topic is adding back the depreciation but forgetting the gain/loss.

### Tax

Tax is a significant cash flow. Considerations:

- **Depreciation method:** straight-line vs diminishing value.
- **Salvage value:** a tax adjustment is needed when salvage ≠ book value.
- **Special provisions:** e.g. an R&D offset.
- **Non-deductible items.**
- **Timing:** tax paid in the **year of** income, or the **year after**.
- **Rate:** generally **30%**.

### Depreciation

Depreciation writes off the asset's acquisition cost. For DCF analysis it is calculated according to **tax legislation**, not accounting standards. **In EFB210 we depreciate to a zero balance** unless told otherwise.

```
Straight-line (SL) / Prime cost:
    Depreciation = Cost × SL rate,       SL rate = 1/Life

Diminishing value (DMV) / Reducing balance:
    Depreciation = (Cost − Accumulated Depreciation) × DMV rate
    DMV rate = SL rate × 2
```

**Gain or loss on sale** at disposal, when salvage ≠ book value:

```
Book Value = Cost − Accumulated Depreciation

Gain on sale: Salvage > Book Value   (e.g. 3,000 vs 2,500 → a 500 gain)
Loss on sale: Salvage < Book Value   (e.g. 1,000 vs 2,500 → a 1,000 loss)
```

**Lecture 6 example.** Outlay $10,000, useful life 5 years, sold for $5,000 after 2 years.

| | Straight line | Diminishing value |
|---|---|---|
| Rate | `1/5 = 20%` | `1/5 × 2 = 40%` |
| Year 1 depreciation | `10,000 × 0.20 = 2,000` | `10,000 × 0.40 = 4,000` |
| Year 2 depreciation | `10,000 × 0.20 = 2,000` | `6,000 × 0.40 = 2,400` |
| Book value at year 2 | `10,000 − 4,000 = 6,000` | `10,000 − 6,400 = 3,600` |
| Salvage | 5,000 | 5,000 |
| **Gain/(loss) on sale** | **(1,000)** loss | **+1,400** gain |

Same asset, same sale price, opposite tax consequences — purely because of the depreciation method.

> **The DMV rate is double the straight-line rate.** `DMV rate = (1/Life) × 2`. A 5-year asset depreciates at 40% reducing balance, not 20%. Tutorial 6 MCQ 13 turns on precisely this — see the next file.

### Working capital

Different texts define it differently:

| Source | Definition |
|---|---|
| Ross et al. (2021) | A firm's short-term assets and liabilities |
| Peirson et al. (2015) | Current assets |
| Brealey et al. (2000) | Inventories + accounts receivable − accounts payable |
| Parrino et al. (2011) | Cash + inventories + accounts receivable − accounts payable |

**For this unit:** working capital is simply *the capital required to provide liquidity to the project*. The convention in every EFB210 example is that an amount is **required at the start** of the project and **refunded at the end**.

> **Working capital is a pure cash-flow line — it never touches EBIT.** It is not an expense, is not deductible and generates no tax effect. It goes in below Cash Flow from Operations, alongside capital expenditure. Putting it in the EBITDA block changes the tax bill and the answer.

### Worked example — Lecture 6, Example 1

A machine costs **$30,000**, useful life **3 years**, expected salvage **$1,000**, straight-line depreciation. Annual cash revenues **$40,000**, cash expenses **$20,000**. Tax **30%**, paid **in the year income is earned**. Required return **15%**.

```
Depreciation = 30,000/3 = 10,000 p.a.
Book value at year 3 = 30,000 − 30,000 = 0
Gain on sale at year 3 = 1,000 − 0 = +1,000
```

| Year | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| Revenue | | 40,000 | 40,000 | 40,000 |
| Op. expenses | | (20,000) | (20,000) | (20,000) |
| **EBITDA** | | **20,000** | **20,000** | **20,000** |
| Depreciation | | (10,000) | (10,000) | (10,000) |
| Gain on sale | | | | 1,000 |
| **EBIT** | | **10,000** | **10,000** | **11,000** |
| Tax @ 30% | | (3,000) | (3,000) | (3,300) |
| **NOPAT** | | **7,000** | **7,000** | **7,700** |
| Add back depr. & G/L | | 10,000 | 10,000 | 9,000 |
| **CF from operations** | | **17,000** | **17,000** | **16,700** |
| Capital expenditure | (30,000) | | | |
| Salvage | | | | 1,000 |
| **FCF** | **(30,000)** | **17,000** | **17,000** | **17,700** |
| Discount factor @ 15% | 1.0000 | 0.8696 | 0.7561 | 0.6575 |
| **PV** | **(30,000)** | **14,782.61** | **12,854.44** | **11,638.04** |

```
NPV = $9,275.09     →  accept
```

Note the year-3 add-back: `+10,000 depreciation − 1,000 gain = +9,000`. The gain was added to EBIT, so it is subtracted below NOPAT; the actual $1,000 of cash comes in on the Salvage line.

### Worked example — Lecture 6, Example 2 — the gold mine

A gold mine costs **$300,000**: **$250,000** for machinery depreciated at **25% p.a. straight line**, plus **$50,000** of **R&D** with a **refundable tax offset of 145%**. Machinery salvage after 3 years: **$50,000**. Output 1,000 ounces a year for 3 years. Gold price currently **$1,500/oz**, rising **$20 a year**. Extraction costs **$1,240/oz**, constant. Working capital **$10,000** at commencement, recovered in the final year. Required return **10%**, tax **30%** in the year of income.

```
Revenue year 1  = 1,000 × 1,520 = 1,520,000     (price rises $20 from 1,500)
Operating exp.  = 1,000 × 1,240 = 1,240,000
Depreciation    = 250,000 × 0.25 = 62,500 p.a.
Book value after 3 years = 250,000 − 3 × 62,500 = 62,500
Salvage 50,000  →  Loss on sale = 50,000 − 62,500 = (12,500)
R&D offset      = 1.45 × 0.30 × 50,000 = $21,750    (a tax RECEIPT at time 0)
```

| Year | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| Revenue | | 1,520,000 | 1,540,000 | 1,560,000 |
| Op. expenses | | (1,240,000) | (1,240,000) | (1,240,000) |
| R&D expense | (50,000) | | | |
| **EBITDA** | **(50,000)** | **280,000** | **300,000** | **320,000** |
| Depreciation | | (62,500) | (62,500) | (62,500) |
| Loss on sale | | | | (12,500) |
| **EBIT** | **(50,000)** | **217,500** | **237,500** | **245,000** |
| Tax | **+21,750** | (65,250) | (71,250) | (73,500) |
| **NOPAT** | **(28,250)** | **152,250** | **166,250** | **171,500** |
| Add back depr. & G/L | 0 | 62,500 | 62,500 | 75,000 |
| **CF from operations** | **(28,250)** | **214,750** | **228,750** | **246,500** |
| Capital expenditure | (250,000) | | | |
| Salvage | | | | 50,000 |
| Change in working capital | (10,000) | | | 10,000 |
| **FCF** | **(288,250)** | **214,750** | **228,750** | **306,500** |
| Discount factor @ 10% | 1.0000 | 0.9091 | 0.8264 | 0.7513 |
| **PV** | **(288,250)** | **195,227.27** | **189,049.59** | **230,277.99** |

```
NPV = $326,304.85     →  accept
```

> **Tax at time 0 is POSITIVE.** The 145% refundable offset returns `1.45 × 0.30 × 50,000 = $21,750` in cash. The lecture flags this explicitly. Note also that the R&D outlay is a fully expensed **operating** cost here, not capital expenditure — it never enters the depreciation schedule.

> **The year-3 add-back is $75,000, not $62,500.** `+62,500 depreciation + 12,500 loss = 75,000`. A **loss** on sale reduced EBIT, so reversing it *adds*. A gain would have *subtracted*. Get this sign wrong and the year-3 flow is out by $25,000.

---

## 6.3 Sensitivity analysis

Assesses the effect of changes or errors in estimated variables on NPV. Start with a **base case**, then consider:

- Increase or decrease of key variables (e.g. ±20%)
- Best- and worst-case scenarios
- **Break-even analysis** — the input value at which `NPV = 0`
- Combinations

It requires a **dynamic spreadsheet** that updates instantly to input changes. It gives management information on the risks of the investment and may warrant further effort in reducing forecast error.

### Gold mine sensitivities, verified

**A price fall.** If gold sells at a flat **$1,300/oz** for all three years (instead of the rising 1,520/1,540/1,560 path):
```
NPV = −$89,277.42     →  reject
```

**Break-even on price.** Holding everything else constant, a **flat** gold price of **$1,351.29/oz** drives NPV to zero. The lecture slide reports "$1,352/ounce", which is this figure rounded up.

**Break-even on quantity.** The unit's own workbook actually solves for output rather than price, and finds `NPV = 0` at **372.53 ounces per year** (against a base case of 1,000).

> **The lecture's $1,352 and the workbook's 372.5 are answers to different questions — check which lever the exam is asking about.** Both are correct: $1,352 is the break-even *flat price*, 372.5 oz is the break-even *quantity*. The workbook sheet is labelled "sensitivity" and contains the quantity solution, while the slide above it quotes the price. If a question asks for a break-even, name the variable you solved for.

---

---

## Summary

- **Marginal analysis:** the difference in cash flows between two projects. Its NPV is the difference in the two NPVs; its IRR is the **crossover rate** at which the two projects are equally good.
- Choose the subtraction order that gives a **standard** cash-flow pattern (one sign change).
- **Include** incremental cash flows, opportunity costs and incremental tax effects. **Exclude** financing charges (they are in the discount rate), sunk costs and non-incremental allocated costs.
- The model runs: Revenue → EBITDA → less Depreciation and ± Gain/Loss → EBIT → Tax → NOPAT → **add back Depreciation and Gain/Loss** → CF from operations → less Capex, plus Salvage, ± Working Capital → FCF → discount → NPV.
- **Depreciation and gain/loss on sale are not cash flows** — they appear above EBIT for their tax effect and are reversed out below NOPAT. A **loss** adds back positively; a **gain** subtracts.
- `SL rate = 1/Life`. `DMV rate = SL rate × 2`. Depreciate to **zero** unless told otherwise.
- `Book value = Cost − Accumulated depreciation`; `Gain/(Loss) = Salvage − Book value`.
- **Working capital** is a pure cash line: out at the start, back at the end, **no tax effect**, never inside EBIT.
- A **refundable tax offset** can make the tax line **positive** at time 0.
- **Sensitivity analysis** starts from a base case and varies key inputs, tests best/worst cases, and solves for **break-even**. It needs a dynamic spreadsheet.
- Break-even **price**, break-even **quantity** and break-even **capital cost** are three different numbers — name the variable.

<details><summary>Checkpoint — five questions</summary>

1. Two projects have NPVs of $14,200 (Project P) and $17,900 (Project Q) at 9%. What is the NPV of the marginal analysis, and which subtraction order should you use?
2. A machine costs $60,000, lasts 5 years, is depreciated straight line to zero and is sold for $9,000 at the end. What is the gain or loss on sale, and how does it flow through the model?
3. Same machine, depreciated at diminishing value. What rate applies, and what is the book value at the end of year 5?
4. A project generates EBITDA of $85,000 p.a. for 4 years. Capex $200,000, straight line, zero salvage, working capital of $25,000 recovered at the end, tax 30% in the year of income, `r = 11%`. Find the NPV.
5. Why must financing charges be excluded from a project's cash flows?

---

**Answers**

1. `NPV_(Q−P) = 17,900 − 14,200 = **+$3,700**`. Use **Q − P** if that ordering makes the incremental outlay negative (Q costs more up front); the aim is a single sign change so the incremental IRR — the crossover rate — is unique and interpretable.

2. `Depreciation = 60,000/5 = 12,000` p.a.; book value at year 5 `= 0`. `Gain = 9,000 − 0 = **+$9,000**`. It is **added to EBIT** (raising tax by $2,700), then **subtracted** in the add-back line below NOPAT. The $9,000 of actual cash appears on the Salvage line.

3. `DMV rate = (1/5) × 2 = **40%**`. Balances: `60,000 → 36,000 → 21,600 → 12,960 → 7,776 → **$4,665.60**`. `Gain = 9,000 − 4,665.60 = **+$4,334.40**` — a smaller taxable gain, because more was written off earlier.

4. `Depreciation = 200,000/4 = 50,000`. `EBIT = 85,000 − 50,000 = 35,000`; `Tax = 10,500`; `NOPAT = 24,500`; `CF from ops = 24,500 + 50,000 = 74,500` p.a. `FCF₀ = −225,000`; years 1–3 = 74,500; year 4 = `74,500 + 25,000 = 99,500`. `NPV = −225,000 + 74,500 × [1 − 1/(1.11)³]/0.11 + 99,500(1.11)⁻⁴ = −225,000 + 182,056.75 + 65,543.73 = **+$22,600.48**`.

5. Because they are already reflected in the **discount rate** — the WACC prices both the cost of debt and its tax shield. Including interest in the cash flows and then discounting at an after-tax WACC counts the financing cost twice and understates the NPV.
</details>
