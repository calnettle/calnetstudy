# THE ASSIGNMENT DCF — Model Anatomy

A1 is a monthly discounted cash flow workbook. This note walks the
teaching example sheet by sheet and formula by formula, because the
*structure* is the thing being assessed and it is much easier to learn from
a model that already works.

> **The worked-example workbook is FICTIONAL and says so on its own first
> sheet.** `USB245_worked_example_DCF_FICTIONAL.xlsx` models "200 Teaching
> Lane, Milton" — an invented property, every number invented, with no
> sources. It exists so you can see how the worksheets connect. **Nothing in
> it is evidence for 41 Park Road.** Copy the structure and the formula
> logic; replace every input with a researched, referenced figure of your
> own. The workbook says the same thing: *"This example uses invented values
> with no sources."*

Every output below was independently rebuilt in Python from the cell
formulas and reproduces the workbook to the cent — NPV $721,237.12, property
IRR 8.8548%, equity IRR 12.2665%. So the model is arithmetically sound; the
critiques in this note are about *assumptions and conventions*, not errors.

## 4.1 What A1 Actually Requires

From the brief:

| Item | Requirement |
|---|---|
| Due | Week 8 |
| Weight | 15% individual + 15% group = 30% |
| Format | MS Excel workbook |
| Groups | Three students, formed by end of Week 5 |
| Holding period | **Minimum 7 years** |
| Frequency | **Monthly** cashflows |
| Scope | Property cashflow only — **excluding finance and tax** |
| Software | Build your own. No proprietary or off-the-shelf DCF packages |

The nine worksheets the brief enumerates:

```
1 Tenancy Schedule       update as at your proposed acquisition date
2 Outgoings Schedule     update as at your proposed acquisition date
3 Assumptions            refer to tutorial templates
4 Monthly DCF cashflow   A1: property cashflow
                         A2: property, equity and after-tax equity
5 Annual DCF summary     rolled-up summary of the monthly cashflows
6 Tax calculations       A2: depreciation and CGT
7 Sensitivity analysis   A2: sensitivity tables on key variables
8 Individual contributions   A1: detailed contribution of each member
9 GenAI Use record       statement from each team member
```

Sheets 6 and 7 are A2 scope but the brief lists them in the A1 structure, so
build the tabs now and populate them later.

> **The brief's own worksheet count is inconsistent — it says eight in the
> table and lists nine.** Build nine. See note 00.

> **"Students are NOT to contact the agent, owners or tenants."** The IM plus
> your own market research is the whole information set. Anything the IM does
> not disclose — tenancy areas, rent review dates, outgoings responsibility,
> incentives already granted — has to be *assumed and justified*, not
> obtained. Note 05 lists exactly what is missing.

## 4.2 Sheet 3 — Assumptions

Everything the model does is driven from this one sheet. **Nothing is
hardcoded inside a formula.** That is not a style preference: it is what
makes sensitivity analysis possible at all.

The teaching example's levers, with the fictional values:

| Lever | Value | Note |
|---|---|---|
| Purchase price | $9,000,000 | The price being tested |
| Acquisition costs (% of price) | 5.5% | Stamp duty, legals, due diligence |
| **Total acquisition outlay** | `=B5*(1+B6)` = $9,495,000 | Cash out at month 0 |
| Acquisition date | 1-Oct-2026 | Month 0; escalations anniversary from here |
| Holding period | 84 months | 7 years — the brief's minimum |
| Discount rate (p.a., effective) | 7.5% | The required total return |
| **Discount rate (monthly)** | `=(1+B12)^(1/12)-1` = 0.604492% | **Not** annual ÷ 12 |
| Terminal capitalisation rate | 6.75% | Applied to Year-8 NOI |
| Selling costs (% of sale price) | 2.5% | Agent fees + legals on disposal |
| Market rent growth | 3.25% p.a. | On each acquisition anniversary |
| Outgoings growth | 3.0% p.a. | |
| Market net rent at acquisition | $440/m² p.a. | What a vacant suite re-lets at today |
| Downtime on expiry, larger suite | 4 months | Vacancy before a new tenant starts |
| Incentive — rent free, larger suite | 3 months | |
| Downtime on expiry, smaller suite | 6 months | Smaller suites take longer to lease |
| Incentive — rent free, smaller suite | 3 months | |
| Review rate on new leases | 3.5% p.a. | Fixed annual reviews on re-lets |
| Recurring capex allowance (Yr 1) | $20,000 p.a. | Grows with outgoings growth |
| One-off upgrade | $250,000 at month 30 | What makes the cashflow "uneven" |
| LVR | 65% | A2 scope |
| Interest rate | 6.1% p.a. | Interest-only facility |
| Company tax rate | 30% | A2 scope; no CGT discount |

> **Two acquisition-cost pitfalls in one row.** First, `Total acquisition
> outlay = price × (1 + costs%)` — the cost percentage is *of the price*, not
> of the outlay, so you cannot back out the price by dividing the outlay by
> 1.055 unless you set it up that way. Second, this is the number that goes
> in month 0 as a **negative**; the discount factor at month 0 is
> `1/(1+r)^0 = 1`, so it is not discounted. Putting the outlay in month 1
> understates it by one month's discounting and quietly flatters the NPV.

### Building the monthly discount rate

```
Annual effective         7.5000%
Monthly equivalent    = (1.075)^(1/12) − 1  =  0.604492%
Check: (1.00604492)^12 − 1 = 7.5000%        ✓

The naive alternative:  7.5% / 12 = 0.625000%
Check: (1.00625)^12 − 1 = 7.7633%           ✗ — 26bp too high
```

See note 03, §3.9 for when each convention is right. The interest line in
this workbook deliberately uses the *other* one — `loan × rate / 12` —
because a loan rate is quoted as a nominal annual rate.

## 4.3 Sheets 1 and 2 — Tenancy Schedule and Outgoings

**Sheet 1** is the rent roll. One row per tenant, with area, net rent per m²,
annual and monthly rent, lease expiry expressed as a **month number** (not a
date), review structure and review rate. Then:

```
Annual rent   = area × $/m²
Monthly rent  = annual / 12
TOTAL area, TOTAL annual, TOTAL monthly = SUM of the rows

Fully-leased passing yield = total annual rent / purchase price
                           = 626,750 / 9,000,000 = 6.964%
```

> **Expressing lease expiry as a month number is the trick that makes the
> whole model work.** Every timing formula in the monthly sheet is then a
> comparison of two integers — `IF(month <= expiry, …)` — instead of date
> arithmetic. Convert once, on the tenancy schedule, using your acquisition
> date as month 0. Get that conversion wrong and every downtime, incentive
> and re-letting event lands in the wrong month.

**Sheet 2** is the outgoings, driven per m² and grossed up by the total area
from sheet 1:

```
Annual $ = ($/m²) × 'Tenancy Schedule'!$B$7      ← total area, absolute ref
```

The teaching example's eight lines total **$110/m²** and **$165,000** p.a.
against 1,500 m². Recovery basis: **net leases — tenants reimburse outgoings
pro-rata to occupied area**, and the owner wears outgoings on vacant space.

> **The recovery basis is an assumption, not a fact, and it is worth
> hundreds of thousands.** The teaching example assumes fully net leases and
> recovers 100% of outgoings while fully occupied. 41 Park Road's IM shows
> recovered outgoings of only **$13,386.76 against $97,364.40 of total
> outgoings — 13.75%** (note 05, §5.5). If you copy the teaching example's
> net-lease assumption onto 41 Park Road you will overstate NOI by roughly
> $84,000 p.a., which at a 6.5% cap rate is about **$1.3 million** of
> capital value. Model what the IM shows, and state the assumption.

## 4.4 Sheet 4 — The Monthly DCF

84 columns, one per month, plus month 0. The workbook's own note is the right
attitude: *"Formulas are identical across every month — audit one column and
you have audited them all."*

### The row structure

```
Month                    0, 1, 2 … 84
Year index               =ROUNDUP(month/12, 0)      ← for the annual roll-up

Market net rent $/m²     = base × (1+g)^INT((m−1)/12)

── per tenant ──
Passing rent $/m² p.a.   fixed reviews while in term; market on re-let
Occupied? (1/0)          0 during downtime
Rent free? (1/0)         1 during the incentive period
Cash rent $/mth          = area × rate/12 × occupied × (1 − rentfree)

TOTAL RENTAL INCOME      = sum of the tenant cash rents
Occupied area share      = occupied m² / total m²
Outgoings $/mth          = −annual/12 × (1+g_out)^INT((m−1)/12)
Outgoings recoveries     = −outgoings × occupied share
NET OPERATING INCOME     = rent + outgoings + recoveries

Recurring capex          = −allowance/12 × (1+g_out)^INT((m−1)/12)
One-off upgrade          = IF(month = upgrade month, −amount, 0)
Acquisition outlay       month 0 only, negative
Terminal value           = IF(month = holding period, net sale proceeds, 0)

PROPERTY CASHFLOW        = NOI + capex + upgrade + terminal   ← A1 endpoint

Discount factor          = 1/(1+r_monthly)^month
PV of cashflow           = cashflow × discount factor
```

### The escalation trick

Every growth line uses the same pattern:

```
(1 + g) ^ INT( (month − 1) / 12 )
```

`INT()` truncates toward zero, so months 1–12 give exponent 0, months 13–24
give 1, and so on. That produces an **annual step on each acquisition
anniversary**, not a smooth monthly creep.

> **`INT((m−1)/12)` and `ROUNDUP(m/12,0)` are not interchangeable.**
> `INT((m−1)/12)` returns 0 for month 1 — you do not escalate the rent in the
> month you buy it. `ROUNDUP(m/12,0)` returns 1 for month 1 — that is the
> *year index*, used only for the annual roll-up. Swap them and either every
> rent is escalated a year too early, or your Year 1 column picks up
> month 0. Test both at month 1, month 12 and month 13.

### The re-letting logic

The most intricate formula in the model. In words, for a tenant expiring in
month *E*:

```
IF month <= E:
    passing rent = contract rate × (1 + review rate)^INT((m−1)/12)
ELSE:
    passing rent = market rent grown to the re-let date
                   × (1 + new-lease review rate)^INT((m − (E + downtime + 1))/12)

Occupied  = 0 for months E+1 … E+downtime, else 1
Rent free = 1 for months E+downtime+1 … E+downtime+incentive, else 0

Cash rent = area × passing rent / 12 × Occupied × (1 − Rent free)
```

So the income sequence on an expiry is: **contract rent → nothing (downtime)
→ nothing (rent-free incentive) → new market rent, reviewing annually**.

For the fictional Tenant A (700 m², expiry month 36, 4 months downtime,
3 months rent free) this bites in Year 4, and the annual summary shows it
plainly:

| Year | Rental income | NOI |
|---|---|---|
| 1 | $626,750 | $626,750 |
| 2 | $648,116 | $648,116 |
| 3 | $670,211 | $670,211 |
| **4** | **$500,592** | **$472,546** |
| 5 | $718,211 | $718,211 |
| 6 | $659,169 | $643,229 |
| 7 | $779,507 | $779,507 |

Year 4 rent falls **25.3%** below Year 3. Year 6 dips again — that is
Tenant C (250 m², expiry month 60, 6 months downtime). Note that in those
years NOI falls *further* than rent, because the owner also loses the
outgoings recovery on the vacant area.

> **An incentive is a DEDUCTION from income, never an addition.** The model
> implements a rent-free period by multiplying cash rent by `(1 − rentfree)`,
> which zeroes it. If instead you model the incentive as a cost line and
> *also* leave the rent running, you double-count the income. If you model it
> as a positive cashflow — which happens more often than you would think when
> the sign convention on a cost row is inconsistent — you have turned a
> leasing cost into leasing revenue. Check the sign of every cost row by
> confirming the annual total is negative.

> **Rent-free is not the same as vacant, and the recoveries row proves it.**
> During downtime the space is empty: occupied = 0, so the owner wears the
> outgoings on that area. During the rent-free period the tenant is in
> occupation: occupied = 1, so recoveries continue even though rent is nil.
> That is the correct treatment for a *net* lease where the abatement is of
> base rent only — but it is an assumption. If the incentive is a gross
> rent-free period, recoveries stop too. State which you have modelled.

## 4.5 Sheet 5 — Annual Summary and the Terminal Value

The roll-up uses `SUMIFS` against the year-index row:

```
=SUMIFS('4 Monthly DCF'!$D$23:$CI$23, '4 Monthly DCF'!$D$4:$CI$4, C$3)
        ── the row being summed ──      ── year index row ──      ── year ──
```

### Terminal value

```
Year 7 NOI                            $  779,506.54
Year 8 (terminal) NOI = Yr7 × (1+g)   $  804,840.50    ← × 1.0325
Gross terminal value = Yr8 NOI / cap  $11,923,562.99   ← ÷ 0.0675
Net of 2.5% selling costs             $11,625,473.91   ← × 0.975
```

That net figure feeds month 84 of the monthly sheet.

> **Capitalise the FORWARD year's NOI, not the year you are selling in.**
> A buyer at the end of year 7 is buying year 8's income — they do not get
> the income you have already collected. Using Year 7's NOI here gives
> $11,548,245 gross, understating the exit by $375,318 and the NPV by
> $220,569 in today's money (`375,318 × 0.975 × 1/1.075⁷`). Every
> institutional model does it this
> way; say so in your assumptions.

> **The gross terminal value is not the exit cashflow.** Selling costs come
> off before it enters the DCF. Getting this wrong is the classic "figure
> labelled net that is actually gross" error, and here it is worth
> $298,089 — the 2.5% on $11.92m.

### The results block

```
Sum of PVs (months 1–84)              $10,216,237.12
Less total acquisition outlay         $ 9,495,000.00
                                      ──────────────
NET PRESENT VALUE                     $   721,237.12

IRR (monthly)                              0.709544%
IRR (annualised, effective)                8.8548%     = (1+monthly)^12 − 1
Equity IRR (annualised)                   12.2665%
```

Decision rule, in the workbook's own words: *NPV > 0 and IRR > 7.0% target
→ the price being tested meets the AREIT's objectives.*

> **Annualise an IRR by compounding, not by multiplying.** `0.709544% × 12 =
> 8.5145%` — 34 basis points below the true 8.8548%. On a decision measured
> against a 7.0% hurdle, that is not fatal here, but on a marginal deal it
> flips the recommendation. `(1 + monthly IRR)^12 − 1`.

### Leverage

```
Property IRR   8.8548%
Equity IRR    12.2665%
```

The workbook's note: *"Leverage lifts the equity IRR above the property IRR
while debt costs less than the property returns — and adds risk."* Debt at
6.1% against a property IRR of 8.85% is accretive; if the property IRR fell
below 6.1%, leverage would *reduce* the equity IRR. That asymmetry is the
risk, and A2 has to say so.

> **The 'Meets target?' cell in the teaching workbook tests the EQUITY IRR
> against the 7.0% objective.** That is a defensible reading — a levered
> investor earns the levered return — but it is not the only one, and it is
> the more flattering one. The property IRR (8.85%) also clears 7.0% here,
> so the answer is the same either way; on a marginal deal it would not be.
> Decide explicitly whether the AREIT's "target total return exceeding 7.0%"
> is ungeared or geared, write it in your assumptions, and report both.

## 4.6 Sheet 6 — Tax (A2 scope)

Annual, from before-tax to after-tax. Three depreciation streams plus CGT.

```
Taxable income = NOI − interest − Div 43 (building) − Div 40 (P&E)
Tax            = −MAX(taxable income, 0) × 30%
```

**Division 43 — capital works.** Straight line, 2.5% of the original cost per
year for 40 years. **Division 40 — plant and equipment.** Diminishing value:

```
DV rate = 200% / effective life = 200% / 15 = 13.3333%
Each year:  depreciation = opening WDV × DV rate
            closing WDV  = opening WDV − depreciation
```

**The brief's actual tax assumptions for 41 Park Road** — use these, not the
workbook's fictional ones:

| Item | Amount | Treatment |
|---|---|---|
| Original construction (1988) | $15.0m | Div 43 at 2.5% = **$375,000 p.a.**, **2 years remaining** |
| Refurbishment (completed 2020) | $10.0m | Div 43 at 2.5% = **$250,000 p.a.**, **34 years remaining** |
| Plant & equipment (2015 refurb) | $4.0m | Div 40, 15-year effective life, diminishing value |
| Company tax rate | 30% | No CGT discount |

Check the brief's internal consistency: 1988 + 40 = 2028, so from a 2026
acquisition **2 years remain** ✓. 2020 + 40 = 2060, so **34 years remain** ✓.
The brief is self-consistent here.

Running the P&E down from $4.0m at 13.3333% for the eleven years from 2015
to 2026 gives an opening written-down value of about **$828,768**, and a
first-year deduction of about **$110,502**. State your starting point
explicitly and say how you derived it — and confirm with your tutor how the
unit wants a *purchaser's* P&E position treated, because a buyer does not
simply inherit the vendor's WDV.

**Capital gains tax** in the workbook:

```
Sale price (net of selling costs)                  $11,625,473.91
Cost base = outlay + capex − Div 43 claimed        $ 8,578,249.24
                                                   ──────────────
Capital gain                                       $ 3,047,224.67
CGT @ 30%, no discount                             $   914,167.40
```

> **The sign convention on the cost base is the trap, and the workbook
> flags it in its own footnote.** Capex rows are stored as *negative* on the
> annual summary, so the formula **subtracts** them — which **adds** the
> spend to the cost base. Correct: money you spent improving the asset
> increases your cost base and reduces the gain. Meanwhile Div 43 claimed
> **reduces** the cost base (s110-45), because you have already had a
> deduction for it. Get either sign backwards and the CGT moves by hundreds
> of thousands.

> **A negative taxable year is not a tax refund.** Year 4 in the teaching
> model shows taxable income of −$129,022 and the formula returns **zero**
> tax, not a credit, via `MAX(taxable, 0)`. In reality the loss is carried
> forward against future income — the workbook says so and tells you to
> state your treatment. The simplified version is defensible; leaving a
> negative tax number in the cashflow is not.

## 4.7 Sheet 7 — Sensitivity (A2 scope)

A two-way grid: **discount rate** down the side, **terminal cap rate**
across the top, NPV in the cells. The teaching example's grid, in dollars:

| Discount ↓ / Cap → | 6.25% | 6.50% | 6.75% | 7.00% | 7.25% |
|---|---|---|---|---|---|
| **6.5%** | 1,807,127 | 1,496,375 | 1,208,642 | 941,461 | 692,706 |
| **7.0%** | 1,488,373 | 1,187,645 | 909,192 | 650,629 | 409,898 |
| **7.5%** | 1,180,794 | 889,721 | **620,209** | 369,948 | 136,946 |
| **8.0%** | 883,940 | 602,170 | 341,271 | 99,009 | −126,546 |
| **8.5%** | 597,382 | 324,577 | 71,979 | −162,575 | −380,954 |

Read it the way the workbook tells you to: *how far do the discount rate or
exit yield have to move before NPV goes negative? That distance is your
margin for error.* Here, holding the discount rate at 7.5%, the deal
survives a terminal cap rate all the way out to 7.25% — but at a 8.5%
discount rate it fails at 7.0%.

> **The base-case cell reads $620,209 while the monthly model reports
> $721,237 — a $101,028 gap on the same assumptions.** Nothing is broken.
> The grid is built on *annual* cashflows received at year end; the monthly
> model receives cash monthly and discounts it 84 times. Money received
> earlier is worth more. The workbook flags this itself. If you build your
> sensitivity on annual data, **say so in the report** and quote the monthly
> NPV as the headline — otherwise a marker sees two different NPVs for one
> property and assumes an error.

The workbook also notes the alternative: Excel's **Data → What-If Analysis →
Data Table** run directly on the monthly model, which is what your real
workbook should use.

## 4.8 Sheets 8 and 9 — Contributions and GenAI

Both are brief requirements, both are marks, and both are trivial to lose by
forgetting.

**Sheet 8 — individual contributions.** One row per team member: worksheets
and sections built, assumptions researched and justified with sources, notes.
The brief is explicit that "individual contributions as well as team efforts
will have significant roles" and A1 carries a 15% individual component.

**Sheet 9 — GenAI use record.** One row per team member: tool used, how it
was used (specifically), and **how you verified it and what you authored**.
The brief warns you "may be asked to demonstrate authorship" and points to
the Academic Integrity Policy for penalties on unauthorised use. Check the
unit's Canvas page for the actual expectations — they are unit-specific, and
they are not reproduced in the brief.

## 4.9 A Build Order That Works

```
1.  Sheet 3 Assumptions   — every lever, blue text, with a source column
2.  Sheet 1 Tenancy       — from the IM; convert expiries to month numbers
3.  Sheet 2 Outgoings     — from the IM; decide and state the recovery basis
4.  Sheet 4 row 3–4       — month counter and year index. Test at m1/12/13
5.  Sheet 4 one tenant    — build the full rent block for ONE tenant, in
                            ONE column, and check it by hand
6.  Copy right 84 columns — then audit months 1, 12, 13, expiry, expiry+1,
                            expiry+downtime, expiry+downtime+incentive, 84
7.  Copy down             — repeat the block for each remaining tenant
8.  Outgoings, recoveries, NOI, capex
9.  Sheet 5 roll-up       — check Σ of the annual columns = Σ of the months
10. Terminal value        — forward NOI ÷ cap rate × (1 − selling costs)
11. Discount factors, PVs, NPV, IRR
12. Sheets 8 and 9
```

> **Step 9 is the reconciliation that catches almost everything.** The sum
> of the twelve monthly NOI cells must equal the annual NOI cell, and the
> sum of the seven annual cells must equal the sum of all 84 months. If they
> disagree, your year index is wrong or a `SUMIFS` range is off by a column.
> Build that check into the sheet as a visible row, not as something you do
> once and delete.

<details><summary>Checkpoint</summary>

1. Year 7 NOI is $640,000, market rent growth 3.0%, terminal cap rate 6.25%,
   selling costs 2.0%. What is the terminal cashflow at the end of year 7?
2. A monthly IRR of 0.62% — what is the annualised effective IRR?
3. Your model shows Year 5 NOI $80,000 below Year 4 with no rent review
   change. Name two lines to check.
4. Purchase price $8.0m, acquisition costs 5.5%, LVR 65%. What goes in month
   0 of the property cashflow row, and what goes in month 0 of the equity
   cashflow row?

**Answers**

1. Year 8 NOI `640,000 × 1.03 = $659,200`. Gross TV
   `659,200 / 0.0625 = $10,547,200`. Net of 2% selling costs
   `× 0.98 =` **$10,336,256**.
2. `(1.0062)^12 − 1 =` **7.700%**. (Not `0.62 × 12 = 7.44%`.)
3. **Downtime** (an occupied flag switching to 0) and the **rent-free
   incentive** flag. Also check the **outgoings recovery** row, which falls
   with occupied area and makes the NOI drop larger than the rent drop.
4. Property cashflow month 0: **−$8,440,000** (price × 1.055 — the full
   outlay, undiscounted). Equity cashflow month 0: **−$3,240,000**
   (−$8,440,000 plus the $5,200,000 loan drawdown). The loan is 65% of
   **price**, not of outlay.
</details>

## 4.10 Beyond Flat Rates — Itemised Costs, Vacancy, Incentives, Escalations

Everything above describes `USB245_worked_example_DCF_FICTIONAL.xlsx`. A
second workbook, `USB245_worked_example_DCF_v2.xlsx`, sits beside it in the
unit folder and extends the model in four ways. All four are things a marker
can reasonably expect you to have thought about, and all four are places
where the simple version quietly flatters the deal.

### One flat growth rate for seven years is an assumption you cannot defend

The v1 model escalates everything with a single rate: `(1+g)^INT((m−1)/12)`,
with `g` = 3.25% for rent and 3.0% for outgoings, every year, for seven
years. Nobody forecasts a property market that way. Rates, land tax and
insurance routinely outrun CPI; rents move in cycles; vacancy peaks and
recovers.

v2 adds a sheet — **`3b Escalations`** — carrying one input *per year* for
each driver, across years 1 to 8:

| Driver | Yr 1 | Yr 2 | Yr 3 | Yr 4 | Yr 5 | Yr 6 | Yr 7 | Yr 8 |
|---|---|---|---|---|---|---|---|---|
| Market rent growth | — | 1.0% | 0.5% | 2.0% | 3.5% | 4.0% | 4.0% | 3.5% |
| Outgoings growth | — | 4.5% | 4.0% | 3.5% | 3.0% | 3.0% | 3.0% | 3.0% |
| Structural vacancy | 1.0% | 3.0% | 5.5% | 6.0% | 3.5% | 2.0% | 1.5% | 1.5% |
| Rent free (months) | 3 | 4 | 6 | 6 | 4 | 3 | 3 | 3 |
| Fitout ($/m²) | 150 | 200 | 300 | 300 | 220 | 150 | 150 | 150 |
| Leasing commission | 12% | 14% | 15% | 15% | 14% | 12% | 12% | 12% |

Year 8 is there because the terminal value capitalises the **year 8** NOI
(§4.5) — it needs a growth rate of its own.

The compounding moves out of the cashflow and onto a **cumulative index
row**, built once:

```
Year 1 index = 1.0000                      ← you are already at today's rent
Year n index = Year (n−1) index × (1 + growth entering year n)

  Yr1    Yr2      Yr3      Yr4      Yr5      Yr6      Yr7      Yr8
1.0000  1.0100   1.0151   1.0354   1.0716   1.1145   1.1590   1.1996
```

and the monthly sheet looks the index up by year instead of raising a rate
to a power:

```
v1:   = base × (1 + g) ^ INT((m − 1) / 12)
v2:   = base × INDEX(escalation_index_row, year_index_of_this_month)
```

> **Year 1's growth cell must be locked at zero, and this is the single
> easiest thing to get wrong.** In year 1 you are already *at* today's
> market rent — you have just bought the property. If you let year 1 carry a
> growth rate, every rent in the model is escalated one year early and the
> terminal value inherits the error compounded seven times. In v2 the year-1
> cells are formatted black rather than blue for exactly this reason. The
> equivalent check on the v1 formula is that `INT((m−1)/12)` returns 0 for
> month 1.

> **Setting every year to the same number reproduces the flat model
> exactly.** Nothing is lost by building it this way, so there is no reason
> not to — and a grader can see at a glance which years you thought about.

### Acquisition costs are not one blended percentage

v1 uses `Total outlay = price × (1 + 5.5%)`. v2 itemises:

| Line | Amount |
|---|---|
| Purchase price | $9,000,000 |
| Transfer duty (Qld) | $498,025 |
| Legal fees | $25,000 |
| Due diligence | $45,000 |
| Other (registration, searches, bank fees) | $15,000 |
| **Total acquisition costs** | **$583,025** |
| **Total acquisition outlay** | **$9,583,025** |

The blended 5.5% understated the real figure: **$583,025 is 6.478% of the
price**, not 5.5%. On this deal that single change costs **$88,025 of NPV**.

Duty is not a flat percentage — it is a **stepped scale**, so it must be
looked up, not multiplied:

```
Duty = fixed amount for the bracket
     + rate per $100 × (dutiable value − bracket threshold) / 100

At $9,000,000, on the general transfer duty scale:
     = 38,025 + 5.75 × (9,000,000 − 1,000,000) / 100
     = 38,025 + 460,000
     = $498,025
```

> **Duty rates change, and a scale you half-remember is worth five figures
> of error.** v2 holds the brackets as an editable lookup table with an
> `INDEX`/`MATCH` on the price, precisely so you can update it in one place.
> **Verify the current Queensland scale against the Queensland Revenue
> Office before you submit**, and check whether any surcharge applies — the
> table in the workbook is a starting point, not an authority.

> **A stepped duty scale breaks the "maximum price payable" shortcut.**
> Both `PV × (1 − acq%)` and `PV ÷ (1 + acq%)` (note 03, §3.8) assume
> acquisition costs are a constant *percentage*. With a stepped scale the
> percentage itself moves with the price, so both are approximations. For an
> exact answer use **Data → What-If Analysis → Goal Seek**: set the NPV cell
> to 0 by changing the purchase price cell.

### Structural vacancy is not the same line as lease-expiry downtime

v1 models vacancy only through the occupied flag — space is empty for a
known number of months after a known expiry. That captures the *lettable*
vacancy but nothing else: incidental voids, bad debt, under-recovery,
holdover disputes.

v2 adds a **structural vacancy allowance** as its own line, a percentage of
gross rent taken from the year-by-year vector:

```
GROSS RENTAL INCOME              sum of tenant cash rents
Less structural vacancy          = −gross × vacancy% for that year
NET RENTAL INCOME
```

> **Do not double count.** The gross rental income line has *already* lost
> the rent of any tenant whose occupied flag is 0. Applying a structural
> allowance on top is an allowance against the rent you still expect to
> collect — which is the correct treatment, but only if you say so. If you
> instead set the structural rate high enough to "cover" the known expiries
> as well, you have charged for the same vacancy twice.

### Incentives cost money beyond the rent-free period

v1 models an incentive purely as abatement — cash rent × `(1 − rentfree)`.
Real incentives also cost capital, and a re-letting costs agency fees. v2
adds both, as lump sums in the month the new lease commences:

```
Fitout contribution   = −area × fitout $/m² for that year
Leasing commission    = −area × new passing rent × commission% for that year
```

For fictional Tenant A (700 m², re-letting in month 41, which falls in
year 4):

```
Fitout       700 × $300                     = $210,000.00
Commission   700 × $455.5544 × 15%          = $ 47,833.22
                                              ───────────
Year 4 leasing cost                           $257,833.22
```

Tenant C adds $52,210.76 in year 6. **$310,043.98 of cost that v1 does not
show at all**, and it lands in exactly the years the income has already
dipped.

### What all of it does to the answer

Each change applied in turn, on otherwise identical assumptions:

| Step | NPV | Change | IRR |
|---|---|---|---|
| v1 baseline — flat rates, blended 5.5% | $721,237 | — | 8.8548% |
| + itemised acquisition costs | $633,212 | −$88,025 | 8.6824% |
| + structural vacancy allowance | $416,678 | −$216,534 | 8.2818% |
| + fitout & leasing commission | $177,550 | −$239,128 | 7.8330% |
| + longer rent-free in the soft years | $116,805 | −$60,745 | 7.7191% |
| + year-by-year rent & outgoings growth | **−$170,869** | −$287,674 | 7.1748% |

> **The same property, the same price, the same discount rate — and the NPV
> travels from +$721,237 to −$170,869.** Not one of those five steps is
> exotic. Every one is a line an experienced analyst would expect to see.
> This is the real lesson of the exercise: a DCF's output is an argument
> about its assumptions, and a model that omits the uncomfortable lines will
> tell you what you want to hear. When you present A1, the defensible claim
> is not "the NPV is $X" — it is "the NPV is $X **given these assumptions**,
> and here is how far they can move before the answer changes."

> **Three decision tests can disagree, and that disagreement is the
> finding.** At the v2 base case the equity IRR (8.39%) clears the AREIT's
> 7.0% target, but the NPV is negative and the property IRR (7.17%) is below
> the 7.5% required return. All three statements are true. They differ
> because they are measured against different benchmarks, and because equity
> IRR is geared. Report all three and say which one you are recommending on.

## Summary

- The teaching workbook is fictional; take its structure and formulas, never
  its numbers.
- Every input lives on **Sheet 3**. Nothing is hardcoded in a formula, or
  sensitivity analysis is impossible.
- Convert lease expiries to **month numbers** so timing is integer
  comparisons.
- Escalate with `(1+g)^INT((m−1)/12)`; index years with
  `ROUNDUP(m/12,0)`. They are different formulas doing different jobs.
- The re-letting sequence is contract rent → downtime → rent-free → new
  market rent. Incentives are deducted; recoveries continue through
  rent-free but stop during downtime.
- Terminal value capitalises the **forward** year's NOI and is taken **net**
  of selling costs.
- `NPV = Σ PVs − total acquisition outlay`. Annualise IRR by compounding.
- Reconcile monthly to annual as a visible row in the sheet.
- Set growth, vacancy and incentives **year by year** on an escalations
  sheet, with year 1 growth locked at zero and a cumulative index doing the
  compounding. Flat rates are a choice you have to defend.
- **Itemise acquisition costs.** Transfer duty is a stepped scale, not a
  percentage — look it up, and verify the current scale with the QRO.
- Structural vacancy, fitout contributions and leasing commission are all
  real lines that a simple model omits. Adding them moved this deal's NPV
  from **+$721,237 to −$170,869**.
