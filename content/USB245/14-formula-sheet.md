# FORMULA SHEET & EXAM TRAPS

Everything from Weeks 1–4 and the assignment model, on one page.

## Returns

```
Ri  Income return   = income / purchase price
Rc  Capital return  = (sale price − purchase price) / purchase price
Rt  Total return    = Ri + Rc
```

Three decompositions of the same total return:

```
1.  r  = y + g       current yield + growth
2.  rt = rf + rp     risk-free rate + risk premium
3.  r  = ρ + π       real return + inflation
```

Annualising a holding-period return over *n* years:

```
Annual = (1 + HPR)^(1/n) − 1        NEVER  HPR / n
```

## Net Operating Income

```
NOI = Gross Rental Income − Operating Expenses
```

Before **interest, tax and depreciation**. Interest belongs to your
financing, not to the asset.

For a property with partial recovery of outgoings:

```
NOI = Gross rent − Outgoings + Recovered outgoings
```

## Capitalisation

```
CV = NI / Y          NI = CV × Y          Y = NI / CV
```

- **Initial yield** — year 0, at purchase
- **Terminal (exit / reversionary) yield** — year *n*, at sale

Value of $1 p.a. of recurring net income:

```
at 4.5%  →  $22.22       at 6.5%  →  $15.38
at 5.0%  →  $20.00       at 7.0%  →  $14.29
at 5.5%  →  $18.18       at 7.5%  →  $13.33
at 6.0%  →  $16.67       at 8.0%  →  $12.50
```

Fast estimate: removing $20,000 p.a. of non-recoverable outgoings at a 6.5%
cap rate is worth `20,000 × 15.38 ≈ $308,000` of capital value.

## Areas and Ratios

```
Site coverage ratio = building footprint / site area
Plot ratio          = gross floor area  / site area
Outgoings ratio     = outgoings / gross income      (plausible band 15–35%)
```

## Affordability

```
        E
P = ───────────
     1 + T − M

P = price      E = equity available
T = acquisition costs, % of price
M = % of price borrowed (LVR)
```

Always reconstruct: `price − loan + costs` must equal your equity.

## Time Value of Money

```
                 1 − 1/(1+r)^N
PV of annuity  = PMT × ─────────────
                       r

                       1
PV of a lump sum = FV × ───────
                      (1+r)^n

                       (1+r)^n − 1                   FV × r
FV of an annuity = PMT × ───────────    →    PMT = ─────────────
                            r                      (1+r)^n − 1
```

## Discounted Cash Flow

```
        n     CFt
NPV =   Σ   ───────       DF = 1/(1+r)^t       PV = CF × DF
       t=1  (1+r)^t
```

**The 7 steps**

```
1. Set up cashflows over period/time
2. Determine the Net Income for each period
3. Calculate the discount factor for each period
4. Calculate the PV of each period
5. Add up all the PVs
6. Adjust for any acquisition costs
7. Answer = NPV
```

For a purchase, step 6 is a **subtraction**:

```
NPV = Σ PVs − price × (1 + acquisition cost %)
```

## The Cashflow Waterfall (Week 3)

```
        Gross (potential) income      every m² let, all of the time
  less  Vacancy allowance             % of gross potential
  ────────────────────────────────
      = Gross (effective) income

  less  Statutory charges             council rates, water rates, LAND TAX
  less  Operating expenses            insurance, maintenance/service/repairs,
                                      management fees
  ────────────────────────────────
      = Net (operating) income
```

Net income across the holding period, in four objects:

```
Period 0     price + acquisition costs          = price × (1 + T)
Period 1..n  gross − vacancy − expenses, per period
Period n     terminal value − selling costs
Period n+1   net income only — no cashflow; it prices the exit
```

For every line, ask **WHEN** (which column), **WHAT** (which row) and
**HOW** (from leases, the tenancy schedule, outgoings budgets, market
research, CPI estimates).

## Deriving the Discount Rate (Week 4)

Four methods, and none of them is exact — IVS and RICS both require the
method and evidence to be **documented**, not a single correct number
(note 04 §8.9).

```
1. Risk premium / build-up model    r = rf + rP
                                     rf = rV + π    (time value + inflation)
                                     1 + r = (1+rV)(1+π)(1+rP)   [compounded, more accurate]

2. Market approach (comparable      Full DCF on each comparable, solved
   sales)                           for r; weight by comparability:
                                     weighted r = Σ (ri × wi),  Σ wi = 1

3. Benchmark against alternative    Property must clear the return on
   investments                     competing assets of similar risk

4. WACC                             r_WACC = rD × (D/V) + rE × (E/V)
                                     D/V = LVR,  E/V = 1 − LVR
                                     valid for INTEREST-ONLY debt only
```

Solved for the missing variable instead of the blended rate:

```
rE = (r_WACC − rD × LVR) / (1 − LVR)          equity's required return
rD = (r_WACC − rE × (1−LVR)) / LVR            implied cost of debt
```

**Cap rate vs discount rate** (note 04 §8.6):

```
Cap rate        = income return only         = NI(year 1) / value
Discount rate    = income AND capital growth, across every period

Cap rate = Discount rate  ONLY IF income is stabilised (level, non-growing)

Gordon Growth Model:   Discount rate = Cap rate + Growth rate
```

Two decompositions of the same required return — already on this sheet
under Returns, restated here as the "requirement vs delivery" framework
RICS uses (§5.13):

```
REQUIREMENT:   risk-free rate + risk premium      =  discount rate
DELIVERY:      cap rate + growth rate             =  total return (discount rate)
```

## Return Measurements (Week 5)

Static measures — any ratio of one known feature over another. Year-1
figures only:

```
Rates                     Multipliers (yrs purchase)   Operating ratios
Gross rate = GI/Value     GIM  = Value/GI              Expense    = Og/GI
Net rate   = NI/Value     NIM  = Value/NI              Break-even = (Og+PMT)/GI
Cash-on-cash = BTCF/Eq    Cash mult = Eq/BTCF          Profit mgn = BTCF/GI

BTCF = NOI − annual debt service        Eq = initial equity
```

Cash-on-cash, cash multiplier, break-even and profit margin are **geared**
— they move with the loan, not just the property. Static shortcomings
(exam list): ignore time value, year-1 only, ignore acquisition/sale
costs, ignore capital growth, like-with-like only.

Dynamic measures:

```
        n     CFt
NPV  =  Σ  ─────────  −  CF0          NPV > 0  accept (hurdle exceeded)
       t=1 (1 + r)^t                  NPV = 0  earns exactly r
                                      NPV < 0  reject

IRR  =  the r that makes NPV = 0      no closed form — iterate
                                      IRR > r  accept;  IRR < r  reject
```

The two are one model, two outputs: NPV reports the dollar surplus at
your hurdle rate; IRR reports the rate at which the surplus vanishes.
NPV and maximum price payable are the same equation rearranged:

```
NPV at price PP     = Σ PVs − (1 + acq%) × PP
Break-even price    = Σ PVs / (1 + acq%)        (the price where NPV = 0,
                                                 gross-up convention)
```

Required vs expected return (Rowland [2.60]): fix the **rate**, solve the
**price** (investment value, Weeks 3–4) — or fix the **price**, solve the
**rate** (expected return = IRR, Week 5).

NPV–IRR ranking conflicts (mutually exclusive projects): **scale**
(IRR favours the small hot project, NPV the large surplus), **timing**
(IRR favours early cash), **horizon** (IRR favours quick doubles).
Multiple IRRs whenever the cashflow changes sign more than once. In every
conflict: **decide by NPV** — it measures the wealth increase directly.

## Unit Conversions That Cost Marks

```
Weekly rent    → annual:      × 52          (not × 4 × 12 = 48)
Monthly figure → annual:      × 12
Quarterly      → annual:      × 4           (not × 12)
Annual $/m²    → monthly:     / 12
```

## Maximum Price Payable vs Expected Return

Step 7 answers one of two questions, depending on which cell you left blank:

```
Price unknown  →  MAXIMUM PRICE PAYABLE
                  the deduct method (as taught):   PP = Σ PV × (1 − T)
                  the gross-up   (algebraic):      PP = Σ PV / (1 + T)

Price fixed    →  EXPECTED RETURN (IRR)
                  solve r such that  Σ CFt/(1+r)^t = price × (1 + T)
```

The two conventions differ. On the Week 3 exercise: $895,988 vs $897,424,
a gap of $1,435.88 (note 07 §7.5). Grossing up is the internally consistent
one, because acquisition costs are a percentage *of price*. State which you
used.

> **The Week 4 solution workbook switches to the gross-up method.** The
> `Annual Commercial` sheet's "less purchase costs" row computes
> `−NPV × T/(1+T)`, which is algebraically the gross-up (`NPV/(1+T)`), not
> the class method Week 3 taught. On the Week 4 commercial exercise:
> $2,436,500.07 (gross-up) vs $2,430,408.82 (class method), a gap of
> $6,091.25 (note 08 §9.9). The two weeks' solution files now disagree with
> each other on which convention to use — match whichever week's material
> you are being assessed against, and state your choice.

## Monthly Conversions

```
EFFECTIVE annual rate  →  monthly:   (1 + r)^(1/12) − 1
NOMINAL annual rate    →  monthly:   r / 12

Monthly IRR            →  annual:    (1 + i)^12 − 1
```

| Annual | Effective→monthly | Nominal ÷ 12 | What ÷12 really applies |
|---|---|---|---|
| 6.0% | 0.486755% | 0.500000% | 6.1678% |
| 7.0% | 0.565415% | 0.583333% | 7.2290% |
| 7.5% | 0.604492% | 0.625000% | 7.7633% |
| 8.0% | 0.643403% | 0.666667% | 8.3000% |
| 8.25% | 0.662797% | 0.687500% | 8.5692% |
| 9.0% | 0.720732% | 0.750000% | 9.3807% |

Use `(1+r)^(1/12) − 1` for **discount rates and IRRs** (quoted effective).
Use `r/12` for **loan interest** (quoted nominal).

## Terminal Value

```
Terminal NOI    = Year n NOI × (1 + g)          ← the FORWARD year
Gross TV        = Terminal NOI / terminal cap rate
Net TV          = Gross TV × (1 − selling cost %)
PV of TV        = Net TV / (1 + r)^n
```

The exit multiplier — how much a $1 error in year n+1 income costs:

```
Δ sale price = Δ NI(n+1) × (1 / terminal yield)

at 3.5%  → × 28.57       at 6.0%  → × 16.67
at 4.5%  → × 22.22       at 7.0%  → × 14.29
at 5.5%  → × 18.18       at 8.0%  → × 12.50
```

Coherence check on any terminal yield, before you defend it:

```
r ≈ y + g        terminal yield + expected income growth ≈ required return
```

Week 3's exercise: `3.5% + 7.0% = 10.5%` against a 10% required return —
tight but coherent. A 3.5% exit yield with 2% growth would not be.

The final-period cashflow is **three** things, not one:

```
Period n net cashflow = year n net income
                      + terminal value
                      − selling costs
```

## Escalation in a Monthly Model

```
Annual step on each anniversary:   (1 + g) ^ INT((month − 1)/12)
Year index for the roll-up:        ROUNDUP(month / 12, 0)
```

Test both at month 1, month 12 and month 13 before you copy the column
across.

### When the rate is not flat

One rate for the whole hold is a choice you have to defend. To vary it by
year, put a growth vector on an escalations sheet and compound it once into
a **cumulative index**, then look the index up:

```
Year 1 index = 1.0000                  ← no growth in the year you buy
Year n index = Year (n−1) index × (1 + growth entering year n)

In the cashflow:   = base × INDEX(index_row, year_index_of_this_month)
                   ← replaces  base × (1+g)^INT((m−1)/12)
```

Same result when every year carries the same rate, so there is no cost to
building it this way.

> **Lock year 1's growth cell at zero.** You are already at today's rent in
> year 1. A growth rate there escalates every rent one year early and the
> error compounds into the terminal value.

> **Look up the index by the year the month falls in.** For a re-letting
> event at month *M*, the year is `INT(M/12)+1` — this is *not* the same as
> `ROUNDUP(M/12,0)` when *M* is an exact multiple of 12. Check month 48.

## Transfer Duty (Queensland)

A stepped scale, not a percentage. It must be looked up:

```
Duty = fixed amount for the bracket
     + rate per $100 × (value − bracket threshold) / 100

At $9,000,000:  38,025 + 5.75 × (9,000,000 − 1,000,000)/100  =  $498,025
```

In Excel, hold the brackets as a table and use `INDEX`/`MATCH(...,1)` on the
price so the model updates in one place.

> **Verify the current scale with the Queensland Revenue Office before you
> submit.** Duty rates and surcharges change, and a half-remembered scale is
> a five-figure error.

> **A stepped scale breaks both maximum-price shortcuts.** `PV × (1 − acq%)`
> and `PV ÷ (1 + acq%)` both assume acquisition costs are a constant
> percentage. When duty steps, the percentage moves with the price — use
> **Goal Seek** on the NPV cell for an exact maximum price.

## Re-letting Sequence

```
Cash rent = area × ($/m² p.a.) / 12 × Occupied × (1 − Rent free)

Occupied  = 0 for months E+1 … E+downtime
Rent free = 1 for months E+downtime+1 … E+downtime+incentive
New rent  = market rent grown to the re-let date, then reviewed annually
```

Downtime: rent stops **and** outgoings recovery stops.
Rent free: rent stops, recovery **continues** (net lease abatement of base
rent only — state your assumption).

## WALE

```
                    Σ (tenant income × remaining term to expiry)
WALE (by income) = ─────────────────────────────────────────────
                            Σ (tenant income)

                    Σ (tenant area × remaining term to expiry)
WALE (by area)   = ───────────────────────────────────────────
                            Σ (tenant area)
```

Measured to **expiry**, not to the end of options. Always name the
weighting. Recompute at your assessment date, not the IM date.

## Depreciation

```
Div 43 capital works (straight line):
    annual deduction = original cost × 2.5%      for 40 years from completion

Div 40 plant & equipment (diminishing value):
    DV rate       = 200% / effective life
    depreciation  = opening written-down value × DV rate
    closing WDV   = opening WDV − depreciation
```

Capital gains tax cost base:

```
Cost base = acquisition outlay + capital expenditure − Div 43 already claimed
Gain      = net sale proceeds − cost base
```

## Excel Function Map

The Week 3 solution's whole model, as formulas. Each row is copied across;
only the assumption cells are typed.

| Row | Formula | Note |
|---|---|---|
| Gross income, period 1 | `=C4*52` | Weekly rent, annualised in the cell |
| Gross income, period t | `=C15*(1+$C5)` | Relative row, absolute rate |
| Less vacancy | `=C15*$C$8` | % of that period's gross |
| Expenses, flat | `=C18` | What Exercise 1 does |
| Expenses, inflated | `=C18*(1+$C$10)` | What Exercise 1a does |
| Net income | `=C15-C18-C16` | The waterfall |
| Sale price | `=H19/C11` | Year **n+1** NI ÷ terminal yield |
| Selling costs | `=G20*C12` | % of sale price |
| Final net cashflow | `=G19+G20-G21` | NI + sale − selling costs |
| Discount factor | `=1/(1+$C3)^C14` | Exponent read from the period row |
| PV | `=C22*C23` | |
| Sum of PVs | `=SUM(C24:G24)` | Stops at period n — **not** n+1 |
| Acquisition costs | `=B25*C9` | Class method |
| Maximum price | `=B25-B27` | |

Elsewhere in the assignment model:

```
=SUMIFS(monthly row, year-index row, year)     monthly → annual roll-up
=INT((month-1)/12)                             annual escalation step
=ROUNDUP(month/12, 0)                          year index
=IRR(range)                                    monthly IRR; then (1+i)^12−1
=NPV(rate, range)                              EXCLUDES period 0 — add it
                                               back outside the function
=MAX(taxable, 0)                               no refunds on a loss year
```

The Week 5 patterns, from the `NPV and IRR formula` tab:

```
=NPV(rate, CF1:CFn) + CF0     period 0 OUTSIDE the bracket, added after
=IRR(CF0:CFn, guess)          period 0 INSIDE the range, and negative
rate                          must be PERIODIC: annual/12 monthly, /2 semi
guess                         use your discount rate — guards the root
annualise a periodic IRR      × 12 or × 2 (unit convention; effective
                              rate would be (1+i)^m − 1)
Goal Seek                     Data → What-If → Goal Seek: NPV cell to 0
                              by changing price (break-even) or rate (IRR)
```

Both functions read the raw **net cashflow row** — never the PV row.

> **Excel's `NPV()` does not return an NPV.** It discounts the range as if
> the first cell were period **1**, and it does not include period 0. The
> correct pattern is `=NPV(rate, CF1:CFn) + CF0`, with `CF0` negative. Both
> the Week 3 solution and the teaching workbook avoid the function entirely
> and build explicit discount-factor rows, which is also what the brief's
> "show all your formula" requirement wants.

---

## EXAM TRAPS

One line each. Each of these changes an answer.

### Returns

- **Higher risk ≠ higher return.** It means a higher *required* return. The
  realised return is whatever happens.
- **The denominator is the purchase price**, never the sale price.
- **Never divide a multi-year return by the years.** Use
  `(1+HPR)^(1/n) − 1`.
- **Dollar returns are not comparable.** $500,000 on $5m (10%) is worse than
  $150,000 on $1m (15%).
- **A "total return exceeding 7.0%" is not a 7% cap rate.** Under `r = y + g`
  a 4.63% initial yield needs 2.37% p.a. growth to reach it.

### Capitalisation

- **`CV = NI/Y` takes NET income.** Feeding gross income into a 35% outgoings
  ratio overstates value by 55%.
- **`CV = NI/Y` assumes year-1 income in perpetuity.** That is why DCF
  exists: forecast market shifts, major expiries, refurbishment plans.
- **Check the outgoings ratio.** Far outside 15–35% of gross means lines are
  missing or double-counted.
- **Name the denominator of every $/m².** Site, building footprint, GFA and
  NLA are four different numbers.

### Reading an IM

- **It is a marketing document.** Quote it for facts; interrogate it for
  claims. Its own disclaimer says the figures were not verified.
- **Reconcile every column against its own total.** When part of a table
  reconciles exactly and part does not, the reconciling part pins the inputs
  and proves where the error is.
- **Watch for a monthly figure in a column headed quarterly** — check every
  row by multiplying by 4.
- **A total can silently omit a row.** If a column's sum exceeds its stated
  total by exactly one entry, that entry was left out.
- **Cross-check any figure appearing twice.** The 41 Park Road IM gives the
  train station at 220 m on one page and 400 m on another.
- **GFA is not lettable area.** Income ÷ GFA understates the true $/m² by
  10–25%.
- **Tenure is not lease term.** "In the building for nearly seven years" on
  an eight-month remaining term is an eight-month income stream.
- **Tenant diversification is not expiry diversification.** Eight tenants
  with 80% of income expiring inside a year is a concentrated risk.
- **Never assume net leases.** Check recovered outgoings against total
  outgoings. At 41 Park Road recovery is 13.75%, so assuming full recovery
  adds ~$84,000 p.a. of phantom income — about $1.3m of value.
- **Fixed reviews above market growth create negative reversion.** Re-let at
  your researched *market* rent, never at the escalated passing rent.
- **Options are the tenant's right, not yours.** They do not secure income;
  WALE is measured to expiry.

### Building the DCF

- **Step 6's sign depends on the question.** Investing to fund outflows →
  **add** costs. Buying an asset → **subtract** price and acquisition costs.
- **A "gross present value" labelled NPV is still a gross present value.**
  The Week 2 grandmother exercise's $142,767 is the amount you must invest,
  not a net present value.
- **The acquisition outlay goes in month 0, undiscounted.** `DF at month 0
  = 1`. Putting it in month 1 flatters the NPV.
- **LVR applies to price, not to total outlay.** Acquisition costs are
  equity.
- **Acquisition costs are a percentage OF PRICE**, so
  `outlay = price × (1 + T)`.
- **Never hardcode a number inside a formula.** Every input on the
  assumptions sheet, or sensitivity analysis is impossible.
- **Convert lease expiries to month numbers** so all timing logic is integer
  comparison.
- **`INT((m−1)/12)` ≠ `ROUNDUP(m/12,0)`.** The first escalates; the second
  indexes years. Swapping them shifts every rent by a year.
- **Incentives are deducted, never added.** Confirm every cost row's annual
  total is negative.
- **Downtime and rent-free are different states.** Downtime stops recoveries
  too; a base-rent abatement does not.
- **Capitalise the FORWARD year's NOI at exit.** The buyer gets year *n+1*,
  not the income you already collected.
- **Take selling costs off the terminal value** before it enters the
  cashflow. A "net" figure that is actually gross is worth 2.5% of the exit.
- **Annualise IRR by compounding**, `(1+i)^12 − 1`, not `i × 12`.
- **Reconcile monthly to annual as a visible row.** Σ of 12 months must
  equal the annual cell; Σ of 7 years must equal Σ of 84 months.
- **An annual sensitivity grid will not match the monthly NPV.** That is
  timing granularity. Explain it; do not hide it.
- **A negative taxable year is not a refund.** `MAX(taxable, 0) × rate`, and
  state your loss carry-forward treatment.
- **Capex signs in the CGT cost base.** Capex stored as negative means the
  formula *subtracts* it to *add* it to the cost base. Div 43 claimed
  *reduces* the cost base.
- **A DCF with no capex line has modelled a bond, not a building.**
  Obsolescence is specific to property as an asset class.
- **A blended acquisition-cost percentage is usually too low.** Itemised —
  duty, legals, due diligence, registration — the teaching example comes to
  6.478%, not the 5.5% assumed. That gap alone cost $88,025 of NPV.
- **Transfer duty is a stepped scale, not a flat rate.** Look it up, and
  verify the current scale with the QRO.
- **Structural vacancy and lease-expiry downtime are different lines.** The
  occupied flag handles known expiries; a structural allowance covers
  incidental voids and bad debt. Charging one rate to do both double counts.
- **Incentives cost more than the rent-free period.** Fitout contributions
  and leasing commission are cash, paid at lease commencement, and they land
  in the years income has already dipped — $310,044 in the teaching example.
- **Vary growth, vacancy and incentives by year.** A flat rate across seven
  years is an assumption a marker can challenge and you cannot evidence.
- **NPV, property IRR and equity IRR can disagree.** Different benchmarks,
  and equity IRR is geared. Report all three and name the one you recommend
  on.

### Week 3 — Cashflow Components

- **Period 0 ADDS acquisition costs.** The deck's concept-check slide says
  "purchase price less acquisition costs"; the initial-outlay slide says
  "acquisition price **+** acquisition costs". The outlay is
  `price × (1 + T)`. The "less" belongs to step 6, not to period 0.
- **Weekly × 52, quarterly × 4.** Treating a per-quarter statutory charge as
  monthly costs $82,451 of maximum price on the Week 3 exercise.
- **There are two grosses.** Gross *potential* income is before vacancy;
  gross *effective* income is after it. Name which one your ratio uses.
- **Land tax is statutory and usually not recoverable.** It is the line most
  often left out — including by the 41 Park Road IM's own quarterly total.
- **Income growth and expense growth are two rates.** Escalating rent while
  freezing outgoings manufactures margin: worth 2.34% of the answer in the
  Week 3 exercise.
- **Vacancy set as a % of gross needs no growth rate of its own** — it
  escalates with the rent. Expenses do need one.
- **Period n+1 carries income but no cashflow.** It exists only to price the
  exit. Including it in the sum of PVs double-counts the sale.
- **The exit multiplier is `1 / terminal yield`.** At a 3.5% exit yield a $1
  error in year n+1 income is a $28.57 error in the sale price. Check that
  column harder than any other.
- **Sanity-check any terminal yield against `r ≈ y + g`.** A 3.5% exit with
  7% growth implies 10.5% — coherent with a 10% required return. The same
  3.5% with 2% growth is not defensible.
- **The final period's cashflow is three things** — year n income, plus the
  terminal value, less selling costs. A cell holding only the sale price is
  missing a year of rent.
- **Sensitivity belongs on the exit yield first.** 100 bp on the terminal
  yield moved the Week 3 answer 4.56 times as far as 100 bp on the discount
  rate, because 88.2% of present value sits in the terminal cashflow.
- **The discount rate and the terminal yield are different numbers doing
  different jobs.** The first prices your holding period; the second prices
  the next buyer's. 10% and 3.5% in the same model is not an inconsistency.
- **Step 7 has two possible answers.** Price unknown → maximum price payable.
  Price fixed → expected return. They must point the same way; if the max
  price is below the asking price, the expected return must be below the
  required return.
- **Decide whether acquisition costs are inside the return.** The Week 3
  house returns 10.08% on the price alone and 9.17% once the 4% is included
  — pass and fail on the same deal.
- **`=NPV()` in Excel excludes period 0 and starts at period 1.** Use
  `=NPV(rate, CF1:CFn) + CF0`, or build explicit discount factors.
- **A sum range that starts one column too far left picks up period 0.** The
  Week 3 model deliberately leaves period 0 empty because price is the
  unknown; A1's period 0 is a real negative outlay and must be included.

### Week 4 — Deriving the Discount Rate

- **A cap rate equals a discount rate only when income is stabilised.**
  Growth or lease events in the cashflow make them diverge —
  `discount rate = cap rate + growth rate` (Gordon Growth) is the
  reconciling identity.
- **WACC assumes a constant `D/V` and only holds for interest-only debt.**
  An amortising loan reduces the debt balance every period, so a WACC
  computed at t=0 does not describe the blended return once the loan has
  paid down principal — do not use it inside a geared DCF with an
  amortising mortgage (Weeks 7–9).
- **Weighting comparable sales is a judgement call, not an arithmetic
  one.** Any weighting is defensible provided it is *consistent with the
  stated comparability* — putting more weight on the least comparable
  sale is what loses marks, not the exact split chosen.
- **Read the assumption cell, not just the question text.** The lecture's
  own WACC Exercise 3 states debt at 8.5% but its target answer (8.25%)
  only reconciles at 7.5% — a 75bp gap that moves the WACC 75bp one-for-one
  through the 75% debt weighting. Confirm which figure your tutor intends
  before quoting either.
- **Multi-tenanted rents reset to the *forecast* market rent in the year
  *after* the stated expiry**, then resume compounding at that tenancy's
  own review rate — "expires in 3 years" resets in year 4, the same n+1
  logic used for a terminal sale price.
- **No blanket vacancy allowance in a multi-tenanted model.** Letting-up
  costs (a vacancy-period allowance plus an agent's fee, both sized off
  the *new* rent) hit only in the actual re-let year — net income can fall
  in a year gross potential income rises.
- **A capex item quoted "in today's dollars, in year N" escalates by the
  period's own index number**, not the years remaining until it. Using
  `(1+CPI)^(N−1)` instead of `(1+CPI)^N` understated a $50,000 item by
  $1,591 on the Week 4 exercise.
- **A hardcoded number in a "sensitivity" cell is not a live sensitivity.**
  The Week 4 solution workbook's own `Sensitivity` tab has pasted-in
  values that were never recalculated after its base case changed —
  check whether a cell is a formula before trusting a sensitivity table.

### Week 5 — Return Measurements

- **`NPV()` excludes period 0; `IRR()` requires it.** The two functions
  treat the purchase outlay in opposite ways — `=NPV(rate,CF1:CFn)+CF0`
  vs `=IRR(CF0:CFn,guess)`. Mixing the conventions is the most common
  Excel error in the topic.
- **Feed both functions raw cashflows, never the PV row.** `NPV()` on
  discounted values discounts twice; `IRR()` on them returns plausible
  garbage.
- **The discount rate in `NPV()` must match the period.** A monthly model
  needs `annual/12` — the same convention trap as note 06 §3.9.
- **The IRR is a property of the cashflows alone.** If your IRR cell
  moves when the discount rate changes, the range is pointing at
  discounted values.
- **Zero NPV is not zero return** — it means the investment earns exactly
  the discount rate.
- **A ×12 (or ×2) annualised IRR is a nominal rate.** The effective rate
  is `(1+i)^m − 1`; at Week 5's numbers the gap is 20–35bp. Follow the
  unit's multiply convention, but say so.
- **Static measures price year 1 and call it the investment** — no time
  value, no later years, no acquisition/sale costs, no growth. Name the
  denominator: cash-on-cash divides BTCF by *equity*, not price, and is
  geared.
- **When NPV and IRR rank alternatives differently, choose by NPV** —
  scale, timing or horizon differences (and any cashflow with more than
  one sign change) can flip the IRR ranking; NPV gives the
  wealth-maximising signal.
- **The Week 5 lecture's conflict slides don't reconcile with their own
  tables** — the headline example's NPVs are computed at 10% despite the
  slide saying 20%; the scale example's "NPV" column is the PV of
  inflows, and its project-B IRR is 23.4%, not the printed 21%; the
  timing example's stated results need a $120 year-2 cashflow, not the
  printed $125. Rankings and conclusions are unaffected. Recompute before
  quoting.

### Reporting

- **Say which return you are reporting** — required or expected, ungeared or
  geared, property IRR or equity IRR. Report both where the hurdle is
  ambiguous.
- **Leverage adds return and risk.** Equity IRR above property IRR only
  holds while debt costs less than the property returns.
- **Systemic risk is priced; non-systemic risk is managed.** Naming a risk is
  descriptive; naming the lever that addresses it is analytical.
- **This is not a valuation exercise.** The brief says so explicitly — the
  output is an investment analysis and recommendation, not a valuation
  report.
- **Every assumption needs a source.** The rubric marks evidence and
  justification, and "the IM does not disclose X, so Y has been assumed
  because Z" is worth marks that silence is not.

### Quick Reference — 41 Park Road

```
Land area                   671 m²          GFA          1,209 m² over 3 levels
Gross rental income   $454,237.52 p.a.      Tenants      8
Total outgoings       $ 97,364.40 p.a.      Recovered    $13,386.76 (13.75%)
Net rental income     $370,259.88 p.a.      Quoted       offers over $8,000,000

Net initial yield at $8m           4.63%
Gross yield at $8m                 5.68%
Outgoings / gross income          21.43%
WALE by income (1 Aug 2026)        0.98 years
Income expiring within 12 mths    80.47%
Largest tenant share of income    43.53%
Growth needed for r ≥ 7% at $8m    2.37% p.a.
```

Three errors found in the IM, all resolved by using the **annual** columns:
The Movement Standard's monthly rent should be $16,475.85 (not $16,475.00);
the Land Tax "per quarter" figure of $2,458.33 is a monthly figure (quarterly
is $7,375.00); and the quarterly outgoings total of $16,966.10 omits land tax
entirely (correct total $24,341.10).

### Quick Reference — the Week 3 Exercise

```
Rent $775/wk    g 7%    n 5 yrs    r 10%    TY 3.5%
Outgoings $511.25/qtr + $5,360 pa       Vacancy 5%
Selling 3%      Acquisition 4%          Asking price $930,000

Year 1 net income                       $   30,880.00
Year 6 (n+1) net income                 $   46,291.69
Sale price   = 46,291.69 / 0.035        $1,322,619.80
Selling costs at 3%                     $   39,678.59
Period 5 net cashflow                   $1,325,720.03
Sum of PVs (periods 1–5)                $  933,320.72
Maximum price — class method            $  895,987.89
Maximum price — gross-up                $  897,423.77
Expected return at $930,000, price only       10.08%
Expected return at $930,000 + 4% costs         9.17%
Terminal share of present value                88.2%
With expenses inflated at 3% (Ex 1a)    $  874,997.99
```

Two things in the Week 3 material that are wrong or ambiguous: the lecture
slide prints **$1,325,720 as the sale price** when that figure is the period
5 net cashflow (the sale price is $1,322,619.80); and step 6 deducts 4% of
the *present value* when the assumption cell defines it as 4% of the *price*,
a $1,435.88 difference. Both are set out with the algebra in note 07 §7.5.

### Quick Reference — the Week 4 Commercial Exercise

```
5-year hold    8% discount rate    9% terminal yield    3% CPI
5% purchase costs    2% selling costs    6-month letting-up, 15% letting fee

Hairdresser  200m² @$300/m² net, 3% reviews, expires yr 2 (resets yr 3)
Butcher      250m² @$250/m² net, 4% reviews, expires yr 4 (resets yr 5)
Newsagent    300m² @$275/m² net, 3.5% reviews, expires yr 3 (resets yr 4)
Carparking   10 bays @$1,200 p.a., 3% reviews, no expiry

Year 1 potential net income             $  217,000.00
Year 3 net income (post letting-up)     $  169,814.99
Year 6 (n+1) net income                 $  251,576.12
Terminal value  = 251,576.12 / 0.09     $2,795,290.22
Selling costs at 2%                     $   55,905.80
Air-con capex, escalated to yr 3        $   54,636.35
Sum of PVs (periods 1–5)                $2,558,325.08
Maximum price — gross-up (this week)    $2,436,500.07
Maximum price — class method (Wk 3)     $2,430,408.82
Year-1 initial yield at gross-up price        8.14%

Exercise 4 — weighted market discount rate    8.58%
Exercise 5 — implied equity return              15%
```

Two things in the Week 4 material that are wrong or ambiguous: WACC
Exercise 3's question text states 8.5% debt but its target answer of 8.25%
only reconciles at 7.5% debt (§ above, and note 04 §8.8); and the solution
workbook's `Sensitivity` tab does not reconcile with its own base case —
its discount-rate table is a stale, hardcoded leftover and one column of
its growth table just points back at that stale table instead of being
recomputed (note 08 §9.2).

### Quick Reference — the Week 5 Exercises

```
Week 3 model repriced (3%-CPI expense variant, Σ PVs = $911,456.24):
  PP $825,000    NPV +$53,456.24    IRR 11.43%
  PP $850,000    NPV +$27,456.24    IRR 10.72%
  PP $875,000    NPV + $1,456.24    IRR 10.04%
  Break-even price (NPV = 0)        $876,400  ( = 911,456.24 / 1.04 )

Six-monthly model, PP $825,000:     NPV +$70,221.71
  IRR 5.893% per half-year → ×2 = 11.79% (effective 12.13%)

Monthly commercial (Ex 9, PP $2.5m + 5% costs, r 8%, TY 9%):
  Terminal value (NI mths 61–72 ÷ 9%)    $2,752,636.81  at month 60
  NPV @ 8%/12                            −$104,564.46   → reject
  IRR 0.5869%/month → ×12 = 7.04%  (effective 7.27%)  < 8% hurdle
  Break-even price ≈ $2.40m
```

Three things in the Week 5 material that are wrong or stale, all flagged
in note 09: the lecture's three NPV–IRR conflict slides do not reconcile
with their own tables (details in the traps above); the `Exercise 8` tab's
check comments quote "$18,815 NPV / 10.7% IRR at a $600,000 price" that no
input reproduces — the tab's own base case gives +$70,221.71 / 11.79% at
$825,000; and the workbook carries two contradictory "Week 3 solutions"
(3%-CPI expenses with the class acquisition method vs 7% expenses with
the gross-up), whose maximum prices differ by ~$30k — confirm with the
tutor which variant the exam expects.
