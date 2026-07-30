# TOPIC 2 — The Three Decisions, Capital Rationing and Simple Interest

Lecture 2. Peirson et al. (2015) Ch 2, Ch 3 §3.1–3.3, Ch 6 §6.9.

Topic 1 proved that in perfect capital markets the investment decision can be made independently of consumption preferences. Topic 2 pushes that further and asks: do the **dividend** and **financing** decisions affect firm value either? The answer — under the same assumptions — is no. Then the lecture drops the assumptions (capital rationing) and starts the time-value machinery with simple interest.

---

## 2.1 The three decisions, re-stated

| Decision | The question | Effect on firm value under PCM |
|---|---|---|
| **Investment** | Which projects do we take? | **Affects firm value** |
| **Financing** | Debt or equity? | Does **not** affect firm value |
| **Dividend** | How much do we pay out now? | Does **not** affect firm value |

All three sit inside the single objective: maximise firm value, which maximises the present value of shareholder consumption, which lets owners maximise their utility.

> **These conclusions also hold in the multiple-period world.** The lecture says so explicitly. Do not write "this only works in two periods" in an exam answer — the two-period model is a simplification for drawing, not a limitation of the result.

---

## 2.2 The investment decision — it *does* affect value

### Worked example — Lecture 2, base case

A firm starts with **$10 million**, invests **$4 million** now, and receives **$6.6 million** in period 2. Market rate 10%.

```
NPV = X₂/(1+i) − I₁ = 6.6/1.1 − 4        = 6.0 − 4      = 2.0
IRR = X₂/I₁ − 1     = 6.6/4 − 1                          = 65%

D₁ = 10 − 4 = 6        D₂ = 6.6

W₁ = D₁ + D₂/(1+i)  = 6 + 6.6/1.1        = 6 + 6        = 12
W₁ = Endowment + NPV = 10 + 2                            = 12   ✔
```

**Without investing, W₁ = 10. With investing, W₁ = 12. The increase is exactly the NPV.**

That sentence is the whole point of the example, and it is worth writing in an exam even when not explicitly asked.

> **NPV is maximised at P, and only at P.** Producing *below* P forgoes positive-NPV projects; producing *above* P means accepting negative-NPV ones. Both reduce `W₁`. "Invest as much as possible" is as wrong as "invest as little as possible".

### Worked example — Lecture 2, two projects with borrowing

A firm starts with **$10m**, invests **$10m** in Project A returning **$12.98m**, and a further **$2m** in Project B returning **$2.42m**. The extra $2m is borrowed and repaid in P2. `i = 10%`.

```
NPV_A = 12.98/1.1 − 10 = 11.8 − 10  = 1.8
NPV_B = 2.42/1.1  − 2  = 2.2 − 2    = 0.2
```

**Project A alone — cash flow table**

| | P1 | P2 |
|---|---|---|
| Endowment `E` | +10.00 | |
| Investment `I₁A` | −10.00 | |
| Return `X₂A` | | +12.98 |
| Dividend | `D₁ = 0.00` | `D₂ = −12.98` |
| **Net** | **0.00** | **0.00** |

`W₁ = 0 + 12.98/1.1 = 11.8`, and `= 10 + 1.8 = 11.8`. ✔

**Projects A and B — cash flow table**

| | P1 | P2 |
|---|---|---|
| Endowment `E` | +10.00 | |
| Investment `I₁A` | −10.00 | |
| Investment `I₁B` | −2.00 | |
| Borrowing `F₁` | +2.00 | |
| Return `X₂A` | | +12.98 |
| Return `X₂B` | | +2.42 |
| Repay borrowing `F₂` | | −2.20 |
| Dividend | `D₁ = 0.00` | `D₂ = −13.20` |
| **Net** | **0.00** | **0.00** |

`W₁ = 0 + 13.20/1.1 = 12.00`, and `= 10 + 1.8 + 0.2 = 12.00`. ✔

> **Borrowing at the market rate has zero NPV — that is why it is invisible in the value.** The $2m borrowed costs $2.20m to repay; `NPV = −2.20/1.1 + 2.00 = 0`. Every row you add to the table that is a market transaction adds nothing. Only the *projects* add value. If you build the table and the two `W₁` calculations disagree, you have priced a market transaction at the wrong rate.

---

## 2.3 The dividend decision — it does *not* affect value

### Worked example — Lecture 2

Same firm: $10m endowment, invests $4m returning $6.6m, `i = 10%`. Now the firm **pays D₁ = $4m** and invests the $2m balance **in the market** rather than paying it out.

```
NPV_project = 6.6/1.1 − 4     = 2.0
NPV_market  = 2.2/1.1 − 2     = 0.0        ← lending at the market rate creates nothing

D₁ = 4                D₂ = 6.6 + 2.2 = 8.8

W₁ = 4 + 8.8/1.1 = 4 + 8   = 12
W₁ = 10 + 2 + 0            = 12    ✔
```

| Policy | D₁ | D₂ | W₁ |
|---|---|---|---|
| Original | 6.0 | 6.6 | `6 + 6.6/1.1` = **12** |
| New | 4.0 | 8.8 | `4 + 8.8/1.1` = **12** |

**The dividend decision does not affect firm value.** Reducing D₁ by 2 and lending it raises D₂ by exactly 2.2, whose present value is exactly 2. It is a wash.

---

## 2.4 The financing decision — it does *not* affect value either

### Worked example — Lecture 2

A firm starts with **$10m**, **borrows $2m**, and invests all **$12m** in projects returning **$15.4m** in P2. Shareholders want a **$5m** period-one dividend, so the firm **borrows another $5m** to pay it. All borrowings repaid in P2. `i = 10%`.

| | P1 | P2 |
|---|---|---|
| Endowment `E` | +10.00 | |
| Investment `I₁` | −12.00 | |
| Borrow for investment `F₁A` | +2.00 | |
| Borrow for dividend `F₁B` | +5.00 | |
| Dividend `D₁` | −5.00 | |
| Return `X₂` | | +15.40 |
| Repay `F₂A` (2.00 × 1.1) | | −2.20 |
| Repay `F₂B` (5.00 × 1.1) | | −5.50 |
| Dividend `D₂` | | −7.70 |
| **Net** | **0.00** | **0.00** |

```
NPV = 15.4/1.1 − 12 = 14 − 12 = 2
W₁  = 5 + 7.7/1.1 = 5 + 7 = 12
```

| Policy | W₁ |
|---|---|
| Do not borrow for the dividend | 12 |
| Borrow $5m for the dividend | 12 |

**The financing decision does not affect firm value.**

> **Read the repayment line, not the borrowing line.** Every marked error in this table type is a missing `× (1 + i)` on the repayment. Borrowing $5m in P1 costs $5.5m in P2, not $5m. Two separate borrowings need two separate repayment rows — collapsing them into one is where a $7.70 turns into a $7.00.

### Under what conditions does all of this hold?

- Perfect certainty
- Perfect capital markets
- Rational investors
- Two periods (and the results extend to many periods)

Drop perfect capital markets — introduce taxes, transaction costs, bankruptcy costs, information asymmetry — and the financing and dividend decisions start to matter. That is exactly the door Topic 9's Modigliani–Miller discussion walks through.

---

## 2.5 Capital rationing

**Capital rationing** is where a firm **cannot** (hard) or **will not** (soft) raise funds. It is a *financial* constraint, not a physical one.

| Type | Also called | Source | Example |
|---|---|---|---|
| **Hard** | External | The market will not supply funds | Poor credit rating, restrictive covenants, regulation |
| **Soft** | Internal | Management chooses a ceiling | "We will not invest more than this year's internal funds" |

**The lecture's position on each:**

- **Hard rationing** questions whether markets are perfect. In a definitional sense they are imperfect — but they *behave* as if imperfections were trivial. Positive-NPV projects, correctly discounted for risk, **do** get funded.
- **Soft rationing** is the rejection of value-maximising projects. Conceptually there is no justification for such investment ceilings; economically, all projects that enhance long-run value should be accepted.

### How to answer a rationing question

1. Compute NPV for every project at the required return.
2. **No constraint** → take every positive-NPV project, borrowing whatever is needed.
3. **Budget constraint** → choose the **combination** of projects that maximises **total NPV** subject to total `I₁ ≤ budget`.

> **Do not rank by IRR under a budget constraint.** The lecture is explicit: *IRR is not necessarily consistent with the firm objective when used to discriminate between investments.* IRR is a rate; it says nothing about how many dollars of value a project adds. The combination with the highest total NPV can easily contain a project with a lower IRR than one you left out.

### Worked example — Lecture 2, seven projects, budget = 300

`i = 10%`.

| Project | I₁ | X₂ | IRR | NPV |
|---|---|---|---|---|
| A | 100 | 120 | 20% | 9.09 |
| B | 100 | 119 | 19% | 8.18 |
| C | 100 | 116 | 16% | 5.45 |
| D | 100 | 112 | 12% | 1.82 |
| E | 200 | 236 | 18% | 14.55 |
| F | 200 | 228 | 14% | 7.27 |
| G | 300 | 354 | 18% | 21.82 |

Combinations costing exactly 300:

| Combination | Total NPV |
|---|---|
| **A + E** | **23.64** ← best |
| B + E | 22.73 |
| A + B + C | 22.72 |
| G | 21.82 |
| A + B + D | 19.09 |
| A + C + D | 16.36 |
| A + F | 16.36 |
| B + C + D | 15.45 |

**A + E wins at $23.64.** Notice that ranking by IRR would have picked A (20%), then B (19%), then E or G (18% each) — giving A + B + C at $22.72, which is worse. Notice also that G, the single highest-NPV project on its own, is not in the winning set.

### Worked example — Tutorial 2 Q5

Endowment $200,000, `i = 15%`.

| Project | I₁ | X₂ | NPV |
|---|---|---|---|
| 1 | 150,000 | 180,000 | **+6,521.74** |
| 2 | 125,000 | 140,000 | −3,260.87 |
| 3 | 160,000 | 175,000 | −7,826.09 |
| 4 | 55,000 | 70,000 | **+5,869.57** |

**(a) Soft rationing at $200,000.** Projects 1 and 4 are both positive-NPV, but `150,000 + 55,000 = 205,000 > 200,000`. You can only afford one.

- Project 1 alone: NPV **6,521.74**, cost 150,000
- Project 4 alone: NPV 5,869.57, cost 55,000

Take **Project 1**. `D₁ = 200,000 − 150,000 = 50,000`, `D₂ = 180,000`.
```
W₁ = 50,000 + 180,000/1.15 = 50,000 + 156,521.74 = 206,521.74
```

**(a)(iii) Pay D₁ = $40,000 and lend the $10,000 surplus.** `D₂ = 180,000 + 10,000(1.15) = 191,500`.
```
W₁ = 40,000 + 191,500/1.15 = 40,000 + 166,521.74 = 206,521.74     unchanged ✔
```

**(b) No rationing.** Take 1 and 4: `I₁ = 205,000`, so borrow $5,000, repay $5,750.
```
D₁ = 0        D₂ = 250,000 − 5,750 = 244,250
W₁ = 0 + 244,250/1.15 = 212,391.30
Cross-check: 200,000 + 6,521.74 + 5,869.57 = 212,391.30   ✔
```

**Removing the rationing constraint added $5,869.56 of value** — exactly the NPV of the project the constraint excluded. That is the cost of soft rationing, quantified.

**(b)(iii) Pay D₁ = $95,000 by raising more funds.** Borrow an extra $95,000, repay $109,250.
```
D₂ = 244,250 − 109,250 = 135,000
W₁ = 95,000 + 135,000/1.15 = 95,000 + 117,391.30 = 212,391.30    unchanged ✔
```

### Worked example — Tutorial 2 Q6

Endowment $500,000, required return 12%.

| Project | I₁ | X₂ | NPV |
|---|---|---|---|
| 1 | 150,000 | 175,000 | **+6,250.00** |
| 2 | 360,000 | 420,000 | **+15,000.00** |
| 3 | 185,000 | 205,000 | −1,964.29 |
| 4 | 100,000 | 115,000 | **+2,678.57** |
| 5 | 240,000 | 285,000 | **+14,464.29** |

**(a) Soft rationing at $500,000.** Project 2 (the largest single NPV) plus Project 5 costs $600,000 — over budget. Search the feasible combinations:

| Combination | I₁ | Total NPV |
|---|---|---|
| **1 + 4 + 5** | 490,000 | **23,392.86** ← best |
| 2 + 4 | 460,000 | 17,678.57 |
| 2 + 1 | 510,000 | infeasible |
| 5 + 1 + 4 (same as above) | 490,000 | 23,392.86 |
| 2 alone | 360,000 | 15,000.00 |

Take **1, 4 and 5**. `D₁ = 500,000 − 490,000 = 10,000`, `D₂ = 175,000 + 115,000 + 285,000 = 575,000`.
```
W₁ = 10,000 + 575,000/1.12 = 10,000 + 513,392.86 = 523,392.86
Cross-check: 500,000 + 23,392.86 = 523,392.86    ✔
```

**(a)(iii) Pay no D₁ and lend the $10,000.** `D₂ = 575,000 + 11,200 = 586,200`.
```
W₁ = 0 + 586,200/1.12 = 523,392.86    unchanged ✔
```

**(b) No rationing.** Take 1, 2, 4 and 5: `I₁ = 850,000`, borrow $350,000, repay $392,000.
```
D₂ = 995,000 − 392,000 = 603,000
W₁ = 603,000/1.12 = 538,392.86
Cross-check: 500,000 + 6,250 + 15,000 + 2,678.57 + 14,464.29 = 538,392.86   ✔
```

**(c)** The **investment** policy affects value: rationing cost the firm `538,392.86 − 523,392.86 = $15,000`, exactly Project 2's NPV. The **dividend** and **financing** policies do not.

### Worked example — Tutorial 2 MCQ 15–18

Two-period world, opportunity cost 10%, endowment $200,000.

| Project | I₁ | IRR |
|---|---|---|
| 1 | 100,000 | 22.0% |
| 2 | 50,000 | 30.0% |
| 3 | 86,000 | 9.30% |
| 4 | 92,000 | 17.4% |
| 5 | 95,000 | 5.30% |

**Q15 — only one project can be accepted.** IRR is fine for accept/reject but useless for ranking here, because the projects differ in scale. Convert to NPV: `X₂ = I₁(1 + IRR)`, so `NPV = I₁(1 + IRR)/1.1 − I₁ = I₁ × (IRR − 0.10)/1.10`.

```
P1: 100,000 × 0.12/1.10 = 10,909.09     ← largest
P2:  50,000 × 0.20/1.10 =  9,090.91
P3:  86,000 × (−0.007)/1.10 =   −547.27
P4:  92,000 × 0.074/1.10 =  6,189.09
P5:  95,000 × (−0.047)/1.10 = −4,059.09
```

**Project 1** — even though Project 2 has the higher IRR (30% vs 22%). This is the scale problem in one MCQ.

**Q16 — dividends with no constraint.** Take 1, 2 and 4: `I₁ = 242,000`, borrow $42,000. `D₁ = 0`.
```
X₂ = 122,000 + 65,000 + 108,008 = 295,008
D₂ = 295,008 − 42,000(1.10) = 295,008 − 46,200 = 248,808
```

**Q17 — all five projects.** Each `X₂ = I₁(1 + IRR)`:

```
P1: 100,000 × 1.220  = 122,000
P2:  50,000 × 1.300  =  65,000
P3:  86,000 × 1.093  =  93,998
P4:  92,000 × 1.174  = 108,008
P5:  95,000 × 1.053  = 100,035
                       -------
X₂ total             = 489,041

I₁ total = 423,000  →  borrow 223,000  →  repay 223,000 × 1.10 = 245,300
D₁ = 0
D₂ = 489,041 − 245,300 = 243,741
W₁ = 243,741/1.10 = 221,582.73
```

Firm value **$221,583** — versus `248,808/1.10 = $226,189` if you take only 1, 2 and 4. **Taking the two negative-NPV projects destroyed $4,606 of value** (= 547.27 + 4,059.09, their combined negative NPVs). That is the point the question is making.

---

## 2.6 Time value of money — the basic principle

```
      today (t = 0)                             some future date (t)
          |----------------------------------------------|
        $100                                            $???
   PV = Present Value = Price = P              FV = Future Value = Future Sum = S
                        interest rate: r
```

`t` is usually measured in **years**. Rates may be written `i`, `r` or `k` in this unit — they mean the same thing.

**Why $100 today beats $100 in a year** (Tutorial 2 Q8): you can invest it and have more than $100; inflation erodes the purchasing power of the later sum; and there is risk that the later sum never arrives.

---

## 2.7 Simple interest

**Simple interest is calculated on the original principal balance only.** No interest on interest.

```
I  = PV × r × t

FV = PV(1 + rt)

PV = FV / (1 + rt)

r  = (FV/PV − 1) / t

t  = (FV/PV − 1) / r
```

All five are on the mid-semester formula sheet.

### Worked example — Lecture 2, Example 1

$1,000 invested at 10% p.a. for 3 years.

```
I  = 1,000 × 0.10 × 3      = 300
FV = 1,000(1 + 0.10 × 3)   = 1,000 × 1.30   = 1,300
```
Solving backwards: `r = (1,300/1,000 − 1)/3 = 0.30/3 = 10%`; `t = (1,300/1,000 − 1)/0.10 = 3 years`. ✔

### The main application — bank bills

A **bank bill** is a short-dated discount security: no coupons, one face value at maturity, priced by discounting at a simple-interest yield.

**Lecture 2 example.** Value a $100,000, 90-day bank bill on issue date at `r = 10%`.
```
PV = 100,000 / (1 + 0.10 × 90/365) = 100,000 / 1.0246575 = 97,593.58
```
At `r = 15%`:
```
PV = 100,000 / (1 + 0.15 × 90/365) = 100,000 / 1.0369863 = 96,433.10
```

> **The inverse relationship, in one line: `r ↑ ⟹ PV ↓`.** Raise the yield and the price falls. This is the same result you will meet again in Topic 4 as "yield up, bond price down", and it comes from the same algebra — the rate sits in the denominator.

> **Use 365 days, not 360.** Australian money-market convention is `actual/365`. Every solution in this unit uses 365. A 360-day count changes the answer in the third decimal place of a percentage and will not match the MCQ options.

### Worked example — Tutorial 2 Q9

$130,000 borrowed on 19 June, repaid on 10 August, at 7.25%.

```
Days: 19 Jun → 30 Jun = 11;  July = 31;  1 Aug → 10 Aug = 10.   Total t = 52 days.

FV = 130,000 (1 + 0.0725 × 52/365)
   = 130,000 (1 + 0.01032877)
   = 130,000 × 1.01032877
   = 131,342.74
```

> **Count the days, do not guess the months.** "About two months" gives 61 days and an answer of $131,576 — a $234 error. Day-count questions are day-count questions.

### Worked example — Tutorial 2 Q10

$20,000 term deposit at 9.00% simple.

```
(a) 45 days:  20,000(1 + 0.09 × 45/365)  = 20,000 × 1.01109589 = 20,221.92
(b) 6 months: 20,000(1 + 0.09 × 0.5)     = 20,000 × 1.045      = 20,900.00
```

> **Part (b) is deliberately ambiguous, and the two readings differ.** Treating "6 months" as exactly half a year gives **$20,900.00**. Treating it as 182 days gives `20,000(1 + 0.09 × 182/365) = $20,897.53`. The tutorial answer uses the half-year reading. Say which convention you have used; a marker cannot penalise a stated assumption.

### Worked example — Tutorial 2 Q11

Price a 90-day, $100,000 face value bank bill.

```
(a) yield 6.50%, 90 days:  100,000/(1 + 0.065 × 90/365)  = 98,422.54
(b) yield 8.00%, 90 days:  100,000/(1 + 0.080 × 90/365)  = 98,065.56
(c) yield 8.00%, 60 days:  100,000/(1 + 0.080 × 60/365)  = 98,702.00
```

(a) vs (b): higher yield, lower price. (b) vs (c): shorter to maturity, higher price (closer to face value).

### Worked example — Tutorial 2 Q12 — buy and sell before maturity

A 90-day, $100,000 bill is bought at a yield of 4.00% and sold after 30 days at a yield of 4.50%.

```
Buy  (90 days left, y = 4.00%):  100,000/(1 + 0.04 × 90/365)  = 99,023.33
Sell (60 days left, y = 4.50%):  100,000/(1 + 0.045 × 60/365) = 99,265.71

Interest earned = 99,265.71 − 99,023.33 = $242.37
```

> **Two things move at once and it is easy to mis-handle one.** Time to maturity fell from 90 days to 60 — that pushes the price *up*. The yield rose from 4.00% to 4.50% — that pushes the price *down*. The net result here is positive, but it does not have to be. The recurring trap is using 90 days on the sale leg: that gives $98,905 and a **loss** of $118 instead of a $242 gain. **On the sale, use the days remaining, not the original term.**

### Worked example — Tutorial 2 MCQ 18

You buy a 90-day, $100,000 bill with **68 days to maturity** at 8.25%. After holding 10 days, rates rise to 9.00% and you sell.

```
Buy  (68 days, 8.25%):  100,000/(1 + 0.0825 × 68/365) = 98,486.28
Sell (58 days, 9.00%):  100,000/(1 + 0.09   × 58/365) = 98,590.03

Interest = 98,590.03 − 98,486.28 = $103.75
```

Note the "90-day bill" label is irrelevant — you bought it with 68 days left. And note that despite rates *rising*, you still made money, because 10 days of accretion outweighed the yield move.

### Worked example — Tutorial 2 MCQ 19

$3,500 promised on 15 July; today is 8 March; rate 12.50%.

```
Days 8 Mar → 15 Jul: Mar 23 + Apr 30 + May 31 + Jun 30 + Jul 15 = 129 days

PV = 3,500 / (1 + 0.125 × 129/365) = 3,500 / 1.04417808 = $3,351.92
```

### Worked example — Tutorial 2 Q13 — annualising a very short rate

$20 borrowed on Friday, $25 repaid the following Friday.

```
Weekly return = 25/20 − 1 = 0.25 = 25%

Annualised (simple):  r = (FV/PV − 1)/t = 0.25 / (7/365) = 0.25 × 52.142857 = 13.036 = 1,303.6% p.a.
```

> **Simple annualisation, not compound.** The simple-interest formula gives **1,303.6% p.a.** If you compounded weekly the answer is `1.25^52.14 − 1 ≈ 1.5 million per cent`, which is arithmetically true but not what the simple-interest formula asks for. Topic 2 is a simple-interest topic; read the instruction.

### Worked example — Tutorial 2 MCQ 20 — doubling under simple interest

```
FV/PV = 2,  r = 5%
t = (FV/PV − 1)/r = (2 − 1)/0.05 = 20 years
```

**20 years.** Under *compound* interest at 5% it is `ln 2 / ln 1.05 = 14.2 years`. The 6-year gap is the whole reason Topic 3 exists.

---

## Summary

- **Investment decisions affect firm value; dividend and financing decisions do not** — under certainty, perfect capital markets, rational investors, and in both two-period and multi-period worlds.
- Firm value increases by exactly the **NPV** of the projects taken. `W₁ = D₁ + D₂/(1+i) = Endowment + ΣNPV`, and the two must agree.
- Any transaction at the market rate has **zero NPV**: borrowing, lending, changing the dividend. Only projects create value.
- **Capital rationing**: hard (external, market will not fund) vs soft (internal, management ceiling). Under a budget constraint, maximise **total NPV across combinations** — never rank by IRR.
- Soft rationing costs the firm exactly the NPV of the projects it excludes.
- **Simple interest** is on principal only: `FV = PV(1 + rt)`, `PV = FV/(1 + rt)`, `r = (FV/PV − 1)/t`, `t = (FV/PV − 1)/r`.
- Bank bills: discount `100,000` at the yield over **days remaining ÷ 365**. On a sale before maturity, always use the **remaining** days.
- Rates and prices move inversely.

<details><summary>Checkpoint — six questions</summary>

1. A firm has an endowment of $400,000 and `i = 12%`. Projects: A (`I₁ = 200,000`, `X₂ = 240,000`), B (`I₁ = 150,000`, `X₂ = 162,000`), C (`I₁ = 120,000`, `X₂ = 145,000`). Which should it take with no constraint, and what is `W₁`?
2. Same data, but soft rationing caps investment at $400,000. Does the answer change?
3. Explain in one sentence why paying a larger period-1 dividend and borrowing to fund it leaves firm value unchanged.
4. A $250,000 face value, 120-day bank bill yields 5.75%. What is its price?
5. The bill in Q4 is sold after 45 days when the yield has fallen to 5.20%. What dollar interest was earned?
6. Under simple interest at 8% p.a., how long does an investment take to triple?

---

**Answers**

1. `NPV_A = 240,000/1.12 − 200,000 = 214,285.71 − 200,000 = **+14,285.71**`. `NPV_B = 162,000/1.12 − 150,000 = 144,642.86 − 150,000 = **−5,357.14**`. `NPV_C = 145,000/1.12 − 120,000 = 129,464.29 − 120,000 = **+9,464.29**`. Take **A and C** (`I₁ = 320,000`). `D₁ = 80,000`, `D₂ = 385,000`. `W₁ = 80,000 + 385,000/1.12 = 80,000 + 343,750 = **$423,750**`; cross-check `400,000 + 14,285.71 + 9,464.29 = 423,750`. ✔

2. **No.** `A + C` costs $320,000, comfortably inside the $400,000 cap. The constraint is not binding, so it costs nothing.

3. Because borrowing at the market rate is a zero-NPV transaction — the present value of the extra repayment in period 2 exactly equals the extra cash raised in period 1, so `D₁ + D₂/(1+i)` is unchanged.

4. `PV = 250,000/(1 + 0.0575 × 120/365) = 250,000/1.01890411 = **$245,361.66**`.

5. Days remaining = `120 − 45 = 75`. `Sale price = 250,000/(1 + 0.052 × 75/365) = 250,000/1.01068493 = $247,357.01`. `Interest = 247,357.01 − 245,361.66 = **$1,995.35**`.

6. `t = (FV/PV − 1)/r = (3 − 1)/0.08 = **25 years**`.
</details>
