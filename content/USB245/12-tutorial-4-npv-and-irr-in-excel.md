# TUTORIAL 4 — NPV and IRR in Excel

The Week 5 lab puts Topic 5's two dynamic measures into the spreadsheet:
first on the lecture's simple streams, then on the Week 3 residential model
at three test prices, then two sensitivity tables, a six-monthly variant,
and finally a full monthly commercial DCF — the direct rehearsal for A1's
monthly cashflow. Solution workbook: `Week_5solution.xlsx`, nine tabs.

Every figure below was recomputed independently in Python from the stated
assumptions — nothing is copied from the workbook. Where the workbook's own
guidance contradicts its numbers, it is flagged.

## 11.1 The Two Functions, and the Rules That Cost Marks

The workbook's `NPV and IRR formula` tab is a keeper — it is the closest
thing the unit has issued to an exam crib for these functions.

```
=NPV(rate, value1, value2, …) + period 0
=IRR(values, [guess])
```

**NPV function rules:**

- `rate` is the **periodic** discount rate — a monthly DCF needs a monthly
  rate (`annual/12`), a six-monthly DCF needs `annual/2`.
- The value range is periods **1 to n only**. Period 0 MUST be added
  **outside** the bracket — Excel discounts everything inside as if the
  first cell were one period away.
- Don't feed the function *and* apply discount-factor rows — that discounts
  twice. Use the raw net cashflow row.
- `XNPV` is the date-aware relative with different inputs.

**IRR function rules:**

- This time period 0 MUST be **inside** the range, and it must be
  **negative** (the purchase outflow) — otherwise `#NUM!`.
- Good practice: pass your discount rate as the `guess`, which also guards
  against Excel finding the wrong root when multiple IRRs exist.
- The result is a **periodic** IRR — annualise it if your periods are less
  than a year (the unit's convention below).
- `XIRR` is the date-aware relative.
- Alternative: **Goal Seek** (Data → What-If Analysis) driving the NPV cell
  to 0 by changing the discount rate — or the purchase price.

> **The two functions treat period 0 in opposite ways, and that asymmetry
> is the single most common Excel error in this topic.** `NPV()` excludes
> it (add `+ CF0` after the bracket); `IRR()` requires it. Mixing the
> conventions gives an NPV overstated by the discounted-once purchase
> price, or an IRR error. Both functions read the **net cashflow row**,
> never the PV row.

## 11.2 Exercises 1 and 2 — the Lecture Streams in Excel

Exercise 1 (tab `Exercise 1`) rebuilds Topic 5's Whipple example with
explicit factor cells — `=1/(1+C$1)^A4` against a 14% rate cell:

```
Year   CF         PV factor    PV
1      10,000     0.8772        8,771.93
2      14,000     0.7695       10,772.55
3      11,000     0.6750        7,424.69
4     100,000     0.5921       59,208.03
                  Σ            86,177.19

NPV at CF0 = 100,000:   −13,822.81     reject
NPV at CF0 =  75,000:   +11,177.19     accept
```

Exercise 2 (tab `Exercise 2`) prices the $500,000 / 8-year / 10% stream —
but lays it out differently: the −500,000 sits **in the table as period 0**
with PV factor 1, and the NPV is a single `SUM` of the PV column:

```
Year 0     −500,000 × 1.0000  =  −500,000.00
Years 1–7    15,000 × factors =   +73,026.28
Year 8      915,000 × 0.4665  =  +426,854.25
                        NPV   =       −119.46     (implied IRR 9.996%)
```

The tab's own note: *"This is a slightly different approach than done in
class. But the answer is the same."* Both layouts are correct; the
period-0-in-table version is the one that scales to the assignment model,
because the purchase row then feeds `IRR()` directly.

## 11.3 Exercises 3 and 4 — Converting the Week 3 Model to NPV/IRR

Tab `Exercise 3&4` takes the Week 3 residential DCF (note 07) and converts
it from a *maximum price* model to an *NPV/IRR* model. The tab lists its
own changes, which are exactly the conversion recipe for any model you
built in Weeks 3–4:

1. Insert **purchase price and acquisition costs in period 0** — as
   negatives — at the top of the cashflow.
2. Remove the price/costs deduction from the **bottom** of the model (the
   old "less acquisition costs → maximum price" rows are hidden).
3. Make sure they flow into the **net cashflow** row (not net income).
4. NPV = sum of all PVs including period 0 — or
   `=NPV(rate, CF1:CF5) + CF0`.
5. IRR by `=IRR(B24:G24, 0.1)` off the net cashflow row.

Assumptions (the Week 3 "Exercise 1a" set): rent $775/wk, growth 7%,
vacancy 5%, expenses $7,405 escalating at 3% CPI, terminal yield 3.5%,
selling costs 3%, acquisition costs 4%, required return 10%, 5-year hold.
The income side is price-independent, so it is unchanged at every test
price:

| Period | 1 | 2 | 3 | 4 | 5 (+sale) |
|---|---|---|---|---|---|
| Net income | 30,880.00 | 33,337.80 | 35,976.53 | 38,809.13 | 41,849.43 |
| Sale price (yr-6 NI ÷ 3.5%) | | | | | 1,288,921.96 |
| Less selling costs 3% | | | | | −38,667.66 |
| **Net cashflow** | 30,880.00 | 33,337.80 | 35,976.53 | 38,809.13 | **1,292,103.73** |

PV of the future cashflows: **$911,456.24**. Period 0 is `−1.04 × PP`:

| Purchase price | CF0 | NPV @10% | IRR |
|---|---|---|---|
| $825,000 | −858,000 | **+$53,456.24** | **11.43%** |
| $850,000 | −884,000 | **+$27,456.24** | **10.72%** |
| $875,000 | −910,000 | **+$1,456.24** | **10.04%** |

All three clear the 10% hurdle; NPV and IRR agree at each price; the
break-even price is `911,456.24 / 1.04 = $876,400`.

> **The workbook carries two different "Week 3 solutions", and their notes
> contradict each other.** The `Exercise 3&4` / `Exercises 5-7` tabs grow
> expenses at **3% CPI** and say *"Week 3 solution has been updated to
> include 3% growth in Mgmt fees"*; the workbook's own `Week3 Solution`
> tab grows expenses at **7%** (the rent growth rate), says *"updated to
> include 7% growth,"* and uses the ÷1.04 acquisition convention — giving
> a maximum price of **$844,444.76** instead of ~$875–876k. Both claim
> consistency with Rowland. The NPV/IRR exercises above are built on the
> 3%-CPI version (they reconcile exactly with it), so use that for this
> tutorial — but confirm with the tutor which variant the exam expects,
> and quote your expense-growth assumption whenever you give a Week 3
> answer.

> **The tab's hidden "maximum purchase price" row uses the other
> acquisition convention than its own NPV.** It computes
> `911,456.24 − 4% × 911,456.24 = $874,998` (the class method), yet the
> NPV rows charge acquisition costs as `4% × PP`, which zeroes at
> `911,456.24 ÷ 1.04 = $876,400`. Note 03, §6.7 has the algebra. The
> ~$1,400 gap is the same convention disagreement flagged in Week 3 — at
> assignment scale it is tens of thousands, so state the convention you
> used.

## 11.4 Exercise 5 — NPV and IRR for a Changing Purchase Price

Tab `Exercises 5-7` is the same model again (base price $875,000); Exercise
5 asks for NPV and IRR at the same three prices — the answers are the
table in §11.3. What the exercise is really teaching: **only period 0
changes**. The income rows, sale price and PV of inflows never move; a
price test is a one-cell edit. Set the model up that way and a sensitivity
table becomes trivial — which is the point of Exercises 6 and 7.

## 11.5 Exercise 6 — Discount-Rate Sensitivity

At PP $875,000, vary the required return (the workbook supplies the row of
rates and one filled cell — 10% → $1,456 — as the check figure; the rest
is yours to fill). Full verified table:

| Discount rate | NPV |
|---|---|
| 9.25% | +$31,244 |
| 9.50% | +$21,181 |
| 9.75% | +$11,253 |
| 10.00% | +$1,456 |
| 10.25% | −$8,210 |
| 10.50% | −$17,749 |
| 10.75% | −$27,162 |
| 11.00% | −$36,451 |

The sign flips between 10.00% and 10.25% — consistent with the IRR of
10.04%: the IRR **is** the discount rate at which this table crosses zero.
Roughly $39k of NPV evaporates per 100bp of discount rate at this price.

> **The IRR row of a discount-rate sensitivity table is constant — and
> being asked why is a known tutorial question.** The IRR is a property of
> the *cashflows alone*; the discount rate is only the benchmark you
> compare it against. If your IRR cell changes when you vary the discount
> rate, your `IRR()` range is wrongly pointing at discounted values. (The
> `guess` argument uses the rate cell, but a guess only changes where the
> iteration starts, not the answer.)

## 11.6 Exercise 7 — Rent-Growth Sensitivity

Same model, PP $875,000, r = 10%, varying rent growth (workbook check
figures at 7%: NPV $1,456 / IRR 10.037%):

| Rent growth | NPV @10% | IRR |
|---|---|---|
| 6.25% | −$32,708 | 9.15% |
| 6.50% | −$21,423 | 9.44% |
| 6.75% | −$10,035 | 9.74% |
| 7.00% | +$1,456 | 10.04% |
| 7.25% | +$13,052 | 10.33% |
| 7.50% | +$24,753 | 10.63% |
| 7.75% | +$36,560 | 10.93% |
| 8.00% | +$48,473 | 11.22% |

At this price the deal lives or dies on the growth assumption: 75bp of
rent growth either way swings the NPV by roughly ±$35k, and the deal is
only just accept at the base case. Growth cuts twice — through every
income year *and* through the year-6 income that sets the sale price —
which is why the NPV responds ~$46k per 100bp of growth versus ~$39k per
100bp of discount rate.

> **A sensitivity table built with hardcoded values goes stale the moment
> the base case changes** — the Week 4 workbook's own `Sensitivity` tab is
> the cautionary example (note 08). Build these as formulas (or a proper
> Data Table), and spot-check one cell by hand before trusting any of it.
> The A1 rubric expects at least one live sensitivity table (e.g. terminal
> yield × discount rate).

## 11.7 Exercise 8 — the Six-Monthly Residential Model

Tab `Exercise 8` rebuilds the same property on **half-yearly periods** —
the stepping stone between the annual Week 3 model and the monthly
assignment model. The conversion rules, each applied in the workbook:

```
Periods          12 half-years modelled; sale at end of period 10 (year 5)
Rent             775 × 26 per half-year, escalating at g/2 = 3.5% per period
Expenses         7,405/2 per period, escalating at CPI/2 = 1.5% per period
Vacancy          still 5% of that period's gross
Discount factor  1/(1 + r/2)^t  =  5% per half-year
Terminal value   (NI₁₁ + NI₁₂) ÷ 3.5%   ← the NEXT YEAR of income, i.e.
                                          two half-years, at period 10
Selling costs    3% of terminal value
```

Verified results (period-10 terminal value $1,322,617.11):

| Purchase price | NPV @5%/half-year | IRR (half-yearly × 2) |
|---|---|---|
| $825,000 | **+$70,221.71** | **11.79%** (5.893% per half-year) |
| $850,000 | +$44,221.71 | 11.11% |
| $875,000 | +$18,221.71 | 10.45% |

Note the NPV at $825,000 is ~$17k *higher* than the annual model's
$53,456. That is not an error — the six-monthly model genuinely contains
different assumptions: rent escalates every six months (year-1 gross
becomes $41,005 vs $40,300), and cashflows arrive half a period earlier on
average. Compounding `g/2` twice a year is a *slightly faster* growth path
than `g` once a year. Same property, different model, different NPV —
which is itself the lesson: **period structure is an assumption**.

> **The tab's own check figures do not match the tab.** Its comments say
> you "should get" an NPV of **$18,815** and an annual IRR of **10.7%**
> "with a $600,000 purchase price" — but at $600,000 this model's NPV is
> **+$304,222** and the doubled IRR is **19.25%**. No purchase price
> reproduces the quoted pair (the $825,000 base case gives $70,222 /
> 11.79%). The comments appear to be carried over from an earlier version
> with different cashflows. Trust the model's arithmetic — verified above
> — and flag the discrepancy to the tutor rather than forcing your sheet
> to match the comment.

> **The unit annualises a periodic IRR by multiplying — a nominal
> convention.** The workbook says "annual IRR (6 monthly IRR × 2)" here
> and "× 12" in Exercise 9. Strictly, 5.893% per half-year compounds to
> `1.05893² − 1 = 12.13%` effective. Follow the unit's ×2/×12 convention
> in the lab and the assignment, but know the difference — note 06, §3.9
> is the same trap from the rate-conversion side, and "which convention?"
> is a legitimate exam question.

## 11.8 Exercise 9 — the Monthly Commercial DCF

The capstone tab: a $2.5m property with three retail tenancies plus
carpark income, modelled monthly over 5 years — explicitly labelled
*"Assignment skill development"*, and structurally the closest thing in
the unit to what A1 requires. It is the **same building as Week 4's
annual commercial exercise** (note 08) rebuilt on monthly periods, so
the two models cross-check each other: the annual version's maximum
price was $2.44m (gross-up), and this monthly version breaks even at
roughly $2.40m — the differences come from monthly timing, actual
expiry dates instead of whole-year resets, and the ×12 rate convention.

### The brief

| Tenancy | Area | Passing rent | Reviews | Expires |
|---|---|---|---|---|
| Hairdresser | 200 m² | $300/m² net | 3% | 30-Nov-2024 |
| Butcher | 250 m² | $250/m² net | 4% | 31-Jul-2027 |
| Newsagent | 300 m² | $275/m² net | 3.5% | 28-Feb-2026 |
| Carparking | 10 bays | $1,200/bay p.a. | 3% (each 1 Jun) | — |

```
Purchase price $2.5m + 5% costs         Analysis: 5 years, monthly, from 1-Jul-2023
Market rent forecast, $/m² by year:     280, 290, 300, 320, 350, 350
Letting-up: 6 months vacancy            Letting-up fee: 15% of first year's new rent
Incentives: nil                         Non-recoverable outgoings: $25/m²
Air-con replacement: $50,000 (today's $) in month 25
Discount rate 8% (⇒ 8%/12 monthly)      Terminal yield 9%     Selling costs 2%
```

### How the model works — the techniques to steal for A1

- **A real date row**: `=EOMONTH(prev,0)+1` generates the month sequence,
  so review dates and expiries land on actual dates, not "year 3-ish".
- **One row per tenancy**, each cell `=prev` until an event month: a
  review multiplies by `(1+review%)` on that lease's anniversary; an
  expiry zeroes the rent for the 6-month letting-up; re-letting restarts
  at **that year's forecast market rent** (then reviews on the *new*
  anniversary).
- **The letting-up fee hits once**, in the re-let month, as
  `−15% × new monthly rent × 12`. Verified: hairdresser re-lets Jun-2025
  at $290/m² → fee `15% × 200 × 290 = −$8,700`; newsagent Sep-2026 at
  $320/m² → `−$14,400`; butcher Feb-2028 at $350/m² → `−$13,125`.
- **Negative reversion happens naturally**: the hairdresser's passing
  rent had grown to $5,150/month by expiry, and the market re-let is
  `200 × 290/12 = $4,833/month` — fixed reviews above market growth, the
  same trap note 14 lists for 41 Park Road.
- **Non-recoverables**: `−$25 × 750 m² / 12 = −$1,562.50/month`,
  escalating monthly at CPI/12 via an **inflation index row**
  (`1.0025^t`).
- **Capex escalates by the index at its month**: the air-con lands in
  month 25 at `−50,000 × 1.0025²⁵ = −$53,220.57` — the index-number
  method note 14 requires, not `(1+CPI)^years`.
- **Terminal value at month 60** = the *next twelve months'* net income
  (months 61–72, which the model builds but never discounts) ÷ 9% =
  `247,737.31 / 0.09 = $2,752,636.81`, less 2% selling costs
  ($55,052.74). The n+1 rule, in monthly form.

### Verified results

```
NPV  @ 8%/12:                −$104,564.46      →  REJECT at a $2.5m price
IRR  0.5869% monthly × 12 =     7.04% p.a.     →  below the 8% hurdle
     (effective: 1.005869¹² − 1 = 7.27% — still below 8%)
```

Both measures agree, as they must for an accept/reject on a conventional
cashflow. To clear the 8% hurdle the price must fall by
`104,564 / 1.05 ≈ $99,600` (every dollar off the price also saves 5c of
purchase costs) — a break-even price of roughly **$2.40m**.

> **The NPV and IRR functions read row 50 — the raw net cashflow — never
> row 53, the PV row.** The workbook's own comments hammer this twice.
> Feeding already-discounted values into `NPV()` double-discounts;
> feeding them into `IRR()` returns garbage that can look plausible.
> In a 73-column model the two rows are easy to confuse — name them.

## 11.9 Assignment Check-In

The Week 5 tutorial closes with a checklist, and one hard deadline:

- **Group formed and registered by the end of Week 5** — this week.
- Assumptions research done ("don't leave this to the last minute").
- Structure set up, all known data entered.

Next steps it prescribes, in order: build the monthly property cashflow
calculating NPV/IRR (that is Exercise 9's skill set, on 41 Park Road);
add **at least one sensitivity table** (it suggests terminal yield ×
discount rate); add an **annual summary DCF** and complete the Financial
Analysis section; bring questions to the Week 8 tutorial. Each group
member must work on **both** the DCF and the report — individual
contribution has to be demonstrable (the contributions sheet, note 10,
§4.8).

> **Your assignment DCF solves for NPV and IRR, not maximum purchase
> price.** The tutorial says this explicitly. The agent is quoting offers
> over $8m; the model's job is to report the NPV and IRR *at* a candidate
> price against the AREIT's >7.0% total-return hurdle — the Exercise 3&4
> conversion in §11.3 is exactly the surgery to perform if you built a
> max-price model first.

## Summary

- `=NPV(rate, CF1:CFn) + CF0` — period 0 outside; `=IRR(CF0:CFn, guess)`
  — period 0 inside and negative. Both read raw cashflows, always at the
  **periodic** rate.
- Week 3 model repriced: NPV +$53,456 / +$27,456 / +$1,456 and IRR
  11.43% / 10.72% / 10.04% at $825k / $850k / $875k; break-even $876,400.
- IRR is invariant to the discount rate — that is the point of it.
- Sensitivity: ~$39k NPV per 100bp of discount rate; ~$46k per 100bp of
  rent growth. Build tables live, never hardcoded.
- Six-monthly model: NPV +$70,222, IRR 11.79% (×2 convention) at $825k —
  different period structure is a different assumption set. Its "$18,815 /
  10.7% at $600k" check comment is stale: no price reproduces it.
- Monthly commercial: NPV −$104,564, IRR 7.04% ×12 vs an 8% hurdle —
  reject. Terminal value = months 61–72 NI ÷ terminal yield, at month 60.
- Groups register **this week**; the assignment model reports NPV/IRR,
  not maximum price.
