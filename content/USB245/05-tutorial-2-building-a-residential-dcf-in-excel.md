# TUTORIAL 2 — Building a Residential DCF in Excel

The Week 3 lab has three items:

1. **See what a real DCF looks like** — open `DCF_Sample.xls`.
2. **Build the lecture's DCF in Excel** — reproduce `Week 3 solution.xls`
   yourself rather than reading it.
3. **Assignment check-in and questions.**

Item 2 is the one that carries the marks, so it comes first below. Every
figure here was recomputed in Python from the raw assumptions and then
checked against the supplied workbook's formulas, not copied from it.

> **The tutorial deck's week schedule disagrees with the Week 1 deck by a
> full week.** The Week 3 tutorial lists Week 2 as "Recap NPV and introduce
> Assignment Brief", Week 3 as "Build a simple residential DCF", Week 4 as
> the multi-tenanted commercial extension and Week 5 as discount-rate
> derivation. The Week 1 tutorial deck put each of those one week earlier —
> which is what note 00's schedule table originally reproduced. The Week 3
> deck matches what has actually happened (this lab really is the simple
> residential DCF), so it wins, and note 00 has been corrected. The Week 3
> **lecture** closes with "NEXT WEEK — Discount Rate Derivation", so the
> lecture on discount rates lands in Week 4 while the tutorial on it lands in
> Week 5. Both can be true; don't assume the tutorial follows its lecture.

## 7.1 The Supplied Solution Is a Real Solution

`Week 3_solution.xlsx` is **not** an empty template. It contains two
worksheets, `Exercise 1` and `Exercise 1a`, both fully formula-driven —
every cashflow cell is a live formula referencing a labelled assumption cell,
with only the assumptions themselves hardcoded. That is worth noting because
it is also the standard your A1 workbook is marked against.

The sheet's own closing note states the rule:

> *"Red cells are variables. All other cells are formulas. Play with the
> variables to see the impact on the PP."*

Layout:

```
A1:D12    assumptions block          the only hardcoded numbers
F1:F8     the seven steps, listed    a checklist beside the model
A14:H24   the cashflow grid          periods 0 to 6 across
A25:B28   the results block          sum of PVs, costs, answer
```

## 7.2 Exercise 1 — The Assumptions

*You want to buy a residential rental property because you believe it will
satisfy your investment objectives of 10% p.a. returns. You have found a
house you like. It is on the market for $930,000. Should you make an offer?*

| Assumption | Symbol | Cell | Value |
|---|---|---|---|
| Purchase price | PP | C2 | **UNKNOWN** |
| Required return | r | C3 | 10% |
| Rent | i | C4 | $775 per week |
| Growth | g | C5 | 7% p.a. |
| Term | n | C6 | 5 years |
| Mgmt fees, mtce & statutory charges | | C7 | `=(511.25*4)+5360` |
| Vacancy, relet fees | | C8 | 5% of gross income |
| Acquisition costs | | C9 | 4% × PP |
| Terminal yield | TY | C11 | 3.5% |
| Selling costs | | C12 | 3% |

> **The purchase price is the unknown, and that is the whole design.** Every
> other cell is given. The model runs forward to a present value and then
> backs out the most you could pay. Students who start by typing $930,000
> into C2 have converted a "what should I offer?" question into a "what will
> I earn?" question — a different exercise (§7.5 does that one properly).

Note that C7 is itself a formula, `=(511.25*4)+5360`, not the typed answer
$7,405. That is deliberate: the quarterly-to-annual conversion stays visible
and auditable. Copy that habit.

## 7.3 Exercise 1 — The Formula Map

The grid runs periods 0 to 6 across columns B to H. Row by row, with the
supplied workbook's actual formulas:

| Row | Label | Formula (period 1 / period 2) | What it does |
|---|---|---|---|
| 14 | Period | `0 1 2 3 4 5 6` | The column index |
| 15 | Gross income | `=C4*52` / `=C15*(1+$C5)` | Weekly rent annualised, then chained growth |
| 16 | Less vacancy | `=C15*$C$8` | 5% of that period's gross |
| 18 | Less expenses | `=C7` / `=C18` | Flat — carried across unchanged |
| 19 | **(2a) Net income** | `=C15-C18-C16` | The waterfall |
| 20 | (2b) Sale price | `=H19/C11` (period 5 only) | Year-6 NI ÷ terminal yield |
| 21 | (2b) Less selling costs | `=G20*C12` | 3% of the sale price |
| 22 | **(2) Net cashflow** | `=C19` / period 5: `=G19+G20-G21` | NI, plus net sale in the final period |
| 23 | (3) Discount factor | `=1/(1+$C3)^C14` | Full precision, not typed |
| 24 | (4) PV | `=C22*C23` | |
| 25 | (5) Sum of PVs | `=SUM(C24:G24)` | Periods 1–5 only |
| 27 | (6) Less acquisition cost | `=B25*C9` | 4% of the sum of PVs |
| 28 | **(7) Maximum purchase price** | `=B25-B27` | The answer |

Three details in that map are worth stealing outright:

- **The growth chain is relative, the rate is absolute** — `=C15*(1+$C5)`.
  The row reference walks across; the rate reference does not drift.
- **Column H (period 6) exists but never enters the sum.** `=SUM(C24:G24)`
  stops at period 5. Period 6 supplies `H19` to the sale-price formula and
  nothing else. If your sum accidentally includes it you have double-counted
  the exit.
- **The discount factor is built from the period index in row 14**, not from
  a hand-typed exponent. Insert a period and it still works.

> **`=SUM(C24:G24)` starts at period 1, not period 0.** Column B is period 0
> and it is deliberately empty, because the purchase price — the only period
> 0 item — is what the model is solving for. In A1 the price *is* known, so
> your period 0 column carries a negative outlay and the sum must include it.
> The two models look identical and their sum ranges are different.

## 7.4 Exercise 1 — The Full Worked Grid

Gross income grows 7% from $40,300; vacancy is 5% of gross in every period;
outgoings hold flat at $7,405.

| Period | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| Gross income | 40,300.00 | 43,121.00 | 46,139.47 | 49,369.23 | 52,825.08 | 56,522.83 |
| Less vacancy | 2,015.00 | 2,156.05 | 2,306.97 | 2,468.46 | 2,641.25 | 2,826.14 |
| Less expenses | 7,405.00 | 7,405.00 | 7,405.00 | 7,405.00 | 7,405.00 | 7,405.00 |
| **Net income** | **30,880.00** | **33,559.95** | **36,427.50** | **39,495.77** | **42,778.83** | **46,291.69** |

The exit, priced off period 6:

```
Sale price     = 46,291.69 / 0.035  =  $1,322,619.80
Selling costs  = 3% × 1,322,619.80  =  $   39,678.59

Period 5 net cashflow
  = year 5 NI + sale price − selling costs
  = 42,778.83 + 1,322,619.80 − 39,678.59
  = $1,325,720.03
```

Discounting at 10%:

```
  t      Net cashflow        DF = 1/1.1^t          PV
─────────────────────────────────────────────────────────────
  1   $     30,880.00          0.909091      $     28,072.73
  2   $     33,559.95          0.826446      $     27,735.50
  3   $     36,427.50          0.751315      $     27,368.52
  4   $     39,495.77          0.683013      $     26,976.14
  5   $  1,325,720.03          0.620921      $    823,167.84
                                             ────────────────
                        (5) Sum of PVs       $    933,320.72

                        (6) less 4%          $     37,332.83
                                             ────────────────
                        (7) MAX PRICE        $    895,987.89
```

Every rounded figure on the lecture slide reconciles: $28,073, $27,735,
$27,369, $26,976, $823,168, $933,321, $37,333 and $895,988.

**Answer to the question asked.** No — not at $930,000. The most you can pay
and still earn 10% p.a. on these assumptions is about **$896,000**, so the
asking price is roughly **$34,000** too high. Offer at or below that, or
walk away.

## 7.5 Three Checks Before You Trust It

### Check 1 — the sale-price row on the lecture slide

The slide prints **$1,325,720** in the row labelled "(2b) Sale Price" *and*
in the row labelled "(2) Net Cashflow". Only the second is right.

```
True sale price                    $1,322,619.80
+ year 5 net income                $   42,778.83
− selling costs (3% of sale price) $   39,678.59
                                   ─────────────
= period 5 net cashflow            $1,325,720.03
```

The workbook itself is correct — `G20 = H19/C11` gives $1,322,619.80 — so
this is a slide transcription problem, not a model problem. It changes
nothing downstream. It matters only if you copy the label into your own
model and then deduct selling costs a second time.

### Check 2 — the acquisition-cost algebra

`B27 = B25*C9` takes 4% of the **sum of PVs**. C9's own label says the 4% is
"× PP" — a percentage of the purchase price. Those are not the same thing:

```
Class method:   933,320.72 − 4% × 933,320.72   =  $895,987.89
  test it:      4% × 895,987.89 = 35,839.52
                895,987.89 + 35,839.52 = 931,827.41   ✗  short by $1,493

Gross-up:       933,320.72 / 1.04                =  $897,423.77
  test it:      4% × 897,423.77 = 35,896.95
                897,423.77 + 35,896.95 = 933,320.72   ✓
```

> **The gap is $1,435.88, and the gross-up is the algebraically consistent
> one.** Use the class method to match the tutor's figures in the lab; use
> `price × (1 + T)` in A1, where note 06 §4.1 already sets it out that way,
> and state it in the assumptions sheet. Ask the tutor which the exam
> expects — on an $8m purchase at 5.5% acquisition costs the same
> disagreement is about **$24,200**, and
> it is the kind of thing worth a mark either way.

### Check 3 — discount factors

The slide prints the factors as 0.91, 0.83, 0.75, 0.68 and 0.62. Used
literally they give $932,079.72, which is **$1,241 short**. Excel's cells are
right; the printed display is not. Never retype a factor Excel already knows.

## 7.6 Exercise 1a — Adding Expense Inflation

The second worksheet changes exactly one thing. C10 adds **Inflation = 3%**,
and the expense row becomes `=C18*(1+$C$10)` instead of `=C18`. The sheet's
own note beside it: *"Added inflation to the Mgmt fees etc."*

| Period | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| Gross income | 40,300.00 | 43,121.00 | 46,139.47 | 49,369.23 | 52,825.08 | 56,522.83 |
| Less vacancy | 2,015.00 | 2,156.05 | 2,306.97 | 2,468.46 | 2,641.25 | 2,826.14 |
| Less expenses | 7,405.00 | 7,627.15 | 7,855.96 | 8,091.64 | 8,334.39 | 8,584.42 |
| **Net income** | **30,880.00** | **33,337.80** | **35,976.53** | **38,809.13** | **41,849.43** | **45,112.27** |

```
Sale price     = 45,112.27 / 0.035  =  $1,288,921.96
Selling costs  = 3%                 =  $   38,667.66
Period 5 NCF   = 41,849.43 + 1,288,921.96 − 38,667.66
                                    =  $1,292,103.73

  t      PV
──────────────────────
  1   $    28,072.73
  2   $    27,551.90
  3   $    27,029.70
  4   $    26,507.16
  5   $   802,294.76
      ────────────────
      $   911,456.24     sum of PVs   (Ex 1: $933,320.72)
      $    36,458.25     less 4%
      ────────────────
      $   874,997.99     MAX PRICE    (Ex 1: $895,987.89)
```

| | Exercise 1 | Exercise 1a | Change |
|---|---|---|---|
| Year 6 net income | $46,291.69 | $45,112.27 | −$1,179.42 |
| Sale price | $1,322,619.80 | $1,288,921.96 | −$33,697.84 |
| Sum of PVs | $933,320.72 | $911,456.24 | −$21,864.48 |
| **Maximum price** | **$895,987.89** | **$874,997.99** | **−$20,989.90** |

> **One realistic assumption costs 2.34% of the answer.** Note where the
> damage lands: only $1,179 of net income is lost in year 6, but that flows
> through a 3.5% terminal yield and becomes $33,698 off the exit price.
> Anything that touches year n+1 income is multiplied by `1/terminal yield`
> — here, by 28.57. A $1 error in year 6 is a $28.57 error in the sale price.
> That is why the n+1 column deserves more checking than any other.

Note also that the vacancy line needs no inflation cell: it is 5% *of gross
income*, so it escalates with rent automatically. Expenses are the only row
that needed a rate of its own.

## 7.7 Sensitivity — What Actually Moves the Answer

Re-running Exercise 1 one variable at a time, everything else held (maximum
price, class method):

| Terminal yield | Max price | | Growth | Max price | | Required return | Max price |
|---|---|---|---|---|---|---|---|
| 3.0% | $1,023,445 | | 3% | $731,037 | | 8% | $976,872 |
| 3.5% | $895,988 | | 5% | $810,480 | | 9% | $935,340 |
| 4.0% | $800,395 | | **7%** | **$895,988** | | **10%** | **$895,988** |
| 4.5% | $726,045 | | 9% | $987,907 | | 11% | $858,682 |
| 5.0% | $666,565 | | | | | 12% | $823,299 |

> **A 100 basis point move in the terminal yield is worth four and a half
> times a 100 basis point move in the discount rate.** Exit yield 3.5% →
> 4.5% takes $169,943 off the answer; required return 10% → 11% takes
> $37,306 — a ratio of 4.56 to 1. That is
> the arithmetic consequence of 88.2% of present value sitting in the
> terminal cashflow. Any sensitivity table in A2 that omits the terminal
> yield has tested the least important variables.

## 7.8 Item 1 — What a Real DCF Looks Like

`DCF_Sample.xls` is a professional monthly DCF for a 13-tenancy Brisbane CBD
office/retail building, prepared for QUT in 2007 as a teaching artefact. The
tutorial deck is explicit about how to treat it:

> *"This is NOT a template for your assignment. This just gives you an
> example of what a DCF can look like. Do NOT feel you need to use macros.
> Do NOT use hidden cells. You are required to show all your formula."*

### What is in it

| Sheet | What it holds |
|---|---|
| Title / Summary | Property particulars, headline inputs, three value conclusions |
| Assumptions | 20 numbered, written assumptions with their sources |
| Tenancy Schedule | 13 tenancies × 27 columns of lease particulars |
| Outgoings | 14 expense lines, land tax shown separately, recoveries below |
| Escalation Rates | Nine growth series and CPI, year by year |
| Direct Capitalisation | Market, passing and stabilised income bases, side by side |
| DCF / DCF Summary | Monthly, 84 months plus terminal, ungeared |
| Equity DCF (+ Summary) | The same after finance |
| After Tax DCF | After tax, plus the ratio block and IRR |
| Charts | Lease expiry profile, by area and by income |
| Lists | Validation lists for lease type, review type, review months |

Headline inputs, which are worth comparing against your own:

```
NLA                    7,157.7 sqm      Discount rate          8.00%
Tenancies                     13        Terminal yield         7.25%
Car parks                     94        Purchase costs         5.50%
Holding period          7 years         Selling costs          1.00%
Vacancy & bad debt          1.0%        LVR                   65.00%
Letting up period       3 months        Interest rate          8.50%
```

The 65% LVR is the same figure the assignment's AREIT specifies, so the
finance section of that workbook is a reasonable structural reference for A2.

### The three things worth copying

1. **The Escalation Rates tab.** The tutorial deck singles this out: *"Here
   is where you document what you think will be happening in the market over
   the holding period. I would use it to also track things like vacancy
   rates, let up periods, incentives etc … All your assumptions need to be
   consistent with your view of where you think the market is heading."*
   The sample runs seven separate growth series — office, retail, storage,
   car parking, telecommunications, ATM, residential — plus CPI, each with a
   different number for each year. Office growth runs +31.8%, +19.8%, +6.1%,
   **−18.4%**, **−17.1%**, +1.8%. A single flat growth rate is not a market
   view.
2. **A numbered, written assumptions register.** Twenty plain-English
   sentences, each naming its source ("Land tax has been calculated as per
   the Office of State Revenue"; "Market rents adopted are Effective Rents
   not Face Rents"). This is exactly what the A1 rubric rewards.
3. **Cross-checking the DCF against direct capitalisation.** The sample
   values the asset three ways and adopts only where they converge:

```
Market income basis      3,173,573 / 0.0725      = $43,773,425
  less below-market rent adjustment  −2,233,337
  less PV of planned capex             −375,047
                                     ────────────
                                      $41,165,041  → adopt $41,170,000

Passing income basis     2,329,220 / 0.056294    = $41,376,345
  less PV of planned capex             −375,047   → adopt $41,000,000

Stabilised income basis  2,850,430 / 0.0725      = $39,316,280  → $39,320,000

DCF                                               → adopt $41,000,000
```

All four land within 5% of each other, which is what gives the conclusion its
credibility. Its outgoings also reconcile exactly:
`629,443 + 76,999.995 = $706,442.995`, an outgoings ratio of 20.9% of gross
income — inside the plausible band from note 04 §3.1.

### The trap inside the sample

> **The same workbook uses the word "NPV" to mean two different things.** On
> the ungeared DCF sheet, "NPV $43,306,861" is followed by "less Purchase
> Costs $2,300,000" to give "Market Value $41,000,000" — so that NPV is a
> **gross present value** with nothing netted off. On the After Tax DCF
> sheet, "NPV −$2,693,729" is followed by "Add Total Invested Capital
> $43,566,500" to give "Estimated Present Worth $40,866,500" — so *that* NPV
> is a genuine net figure. Same word, same file, opposite meanings. Whenever
> you meet a cell labelled NPV, find the line above and below it before you
> believe the label.

### What could not be extracted, honestly

The file is 63 MB in the legacy `.xls` format. It opens and parses cleanly
with `xlrd`, and every sheet, label and computed value above was read
directly from it. Two limits are worth stating:

- **Formula text is not recoverable.** `xlrd` returns cached values, not the
  formulas that produced them. The structure and every number above are
  first-hand; the formula *logic* on the tenancy rows is inferred from the
  workbook's own note, not read.
- **The tenancy calculations are deliberately hidden.** The Title sheet's
  note explains why: *"For each tenancy there is 6 cells of formulas working
  to calculate the cashflows. Multiple cells have had to be utilised as Excel
  is limited to 1024 characters per cell as well as 7 Nested IF functions."*
  Six hidden rows per tenancy × 13 tenancies is where the lease logic lives,
  and it is the part the tutorial tells you **not** to imitate.

The 63 MB is mostly formatting and stale used-range bloat across six sheets
declared as 246 columns wide, not content. File size is not a proxy for
model complexity, and yours should not need macros to be sophisticated.

## 7.9 Item 3 — Assignment Check-In

Straight from the tutorial's final slide:

- **Groups must be formed *and registered* by Week 5.** Three students.
- **Include a title page/sheet** in the workbook.
- **Each member must be individually responsible for identified parts of the
  work, and that must be documented in the file.**
- **Each group member needs their own GenAI use statement.**

Note 06 §4.8 covers the contributions and GenAI sheets in detail. The word
"registered" is new here — forming a group is not the same as registering
it, and the deadline applies to the second.

<details><summary>Checkpoint</summary>

1. A property rents for $1,150 per week with a 4% vacancy allowance,
   statutory charges of $845 per quarter and management and maintenance of
   $7,900 p.a. What is year 1 net income?
2. Using the property in question 1, growth of 4% p.a., a 6-year hold and a
   5.25% terminal yield, what is the sale price and what is it based on?
3. A model's sum of PVs is $2,410,000 and acquisition costs are 5.5% of
   price. Give the maximum purchase price both ways and say which is
   internally consistent.
4. In Exercise 1, why does the sum-of-PVs formula stop at period 5 when the
   grid runs to period 6?
5. Exercise 1a lost only $1,179 of year 6 net income but $33,698 of sale
   price. Explain the multiplier, and state it.
6. A DCF sheet shows "NPV $43,306,861", and the row beneath reads "less
   Purchase Costs $2,300,000". Is the labelled figure an NPV? What is it?

**Answers**

1. Gross `1,150 × 52 =` **$59,800**. Vacancy `4% =` $2,392. Outgoings
   `845 × 4 + 7,900 =` $11,280. Net income
   `59,800 − 2,392 − 11,280 =` **$46,128**.
2. You need **year 7** income, not year 6. Gross
   `59,800 × 1.04⁶ = $75,666.08`; vacancy `4% = $3,026.64`; outgoings held
   flat at $11,280 gives net `= $61,359.43`. Sale price
   `61,359.43 / 0.0525 =` **$1,168,751**. It is based on the income the
   *next* owner receives — year n+1 — because you have already collected
   year 6's.
3. Class method `2,410,000 × (1 − 0.055) =` **$2,277,450**; gross-up
   `2,410,000 / 1.055 =` **$2,284,360**. The gross-up is consistent: 5.5% of
   $2,284,360 is $125,640, and `2,284,360 + 125,640 = 2,410,000` ✓. The
   class method's implied costs are only $125,260, so its outlay totals
   $2,402,709.75 — $7,290.25 short of the present value it should equal. The
   two answers differ by **$6,910.19**.
4. Because period 6 carries no cashflow. It exists solely to supply the
   forward net income the terminal value is capitalised from. Including it
   in the sum would count the exit income twice — once inside the sale price
   and once as an extra period.
5. The sale price is `NI(n+1) / terminal yield`, so any change in year n+1
   income is multiplied by `1 / 0.035 =` **28.571**. Check:
   `1,179.42 × 28.571 = $33,698` ✓.
6. **No.** It is a gross present value. An NPV has the outlay already
   deducted; this one has $2,300,000 of purchase costs deducted on the *next*
   line to arrive at a market value of $41,000,000. If it were an NPV, the
   subtraction beneath it would be double-counting.
</details>

## Summary

- The supplied `Week 3_solution.xlsx` is a complete, live, formula-driven
  model on both sheets. Every assumption is in a labelled cell and referenced
  absolutely; nothing is hardcoded inside a cashflow formula.
- Exercise 1's answer: sum of PVs **$933,320.72**, maximum purchase price
  **$895,987.89**. At $930,000 the house is roughly $34,000 too expensive
  for a 10% required return.
- The lecture slide labels $1,325,720 as the sale price. It is the period 5
  **net cashflow**; the sale price is $1,322,619.80. The workbook is right.
- Step 6 has two conventions $1,435.88 apart. `Σ PV / (1 + T)` is the
  consistent one; the class deducts `T × Σ PV`. Match the class in class,
  state the gross-up in A1, and confirm with your tutor.
- Exercise 1a inflates expenses at 3% and the answer falls $20,989.90, or
  2.34%. Income growth and expense growth are separate rates.
- The terminal yield is the dominant variable — 100 bp there is worth 4.56
  times 100 bp on the discount rate, because 88.2% of present value is the
  exit.
- A $1 change in year n+1 income is a $28.57 change in the sale price at a
  3.5% terminal yield. Check that column hardest.
- `DCF_Sample.xls` is a reference for *structure*, not a template: copy the
  escalations tab, the written assumptions register and the
  DCF-versus-capitalisation cross-check. Do not copy the macros or the
  hidden rows — the brief requires visible formulas.
