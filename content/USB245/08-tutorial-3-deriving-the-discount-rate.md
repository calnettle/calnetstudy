# TUTORIAL 3 — Deriving the Discount Rate, and a Multi-Tenanted Commercial DCF

The Week 4 lab has three parts: two short discount-rate exercises that
apply Topic 4's methods directly, a concept check, and — the bulk of the
lab — building a five-tenancy commercial DCF from scratch, extending the
single-let residential model from note 07 to a building with several
leases expiring on different dates. Every figure below was recomputed
independently in Python from the raw assumptions in `Week 4_solution.xlsx`
and checked against the workbook's own formulas, not copied from its
cached values.

> **The tutorial deck's own week table shifts the schedule again.** It
> lists Week 4 as *"Deriving a discount rate by market approach and WACC.
> Build an extension multi-tenanted commercial DCF model"* — both halves
> of this note in one week — and Week 5 as NPV/IRR. Note 00's schedule
> table already reflects this.

## 9.1 Exercise 4 — Weighting Market-Derived Evidence

*You have three comparable sales. Sale 1 is directly comparable, Sale 2 is
slightly superior, and Sale 3 is a fair bit inferior. From the sales
evidence you derive discount rates of 8.5%, 8% and 10.3% respectively.
What discount rate will you adopt for the subject?*

This is Topic 4 §8.5's weighting method, applied fresh. The supplied
solution's weighting, and the reasoning behind it:

```
Comparable    r        Weight   Weighted r
#1 (direct)   0.085    0.70     0.0595
#2 (superior) 0.080    0.20     0.0160
#3 (inferior) 0.103    0.10     0.0103
                                ────────
                    Weighted discount rate = 0.0858  →  8.58%
```

Verified: `0.085×0.7 + 0.08×0.2 + 0.103×0.1 = 0.0858`. Weights sum to 1.0.

The logic behind the weights: Sale 1 is directly comparable, so it carries
the most weight (70%). Sale 2 is only "slightly superior" — still highly
relevant — so it gets a meaningful but smaller share (20%). Sale 3 is "a
fair bit inferior," meaning its evidence is the least reliable guide to
the subject, so it gets the smallest weight (10%), not zero — it is still
market evidence, just discounted in influence rather than discarded.

> **The workbook's own footnote makes the point that matters most for the
> exam:** *"There may be more than one correct answer for the weighting
> given, so long as it can be justified and consistent with the sales
> analysis."* A defensible alternative — say 60/25/15 — would also be
> accepted if the reasoning tracks the stated comparability. What loses
> marks is weighting that contradicts the given similarity ranking (e.g.
> putting more weight on Sale 3, the "fair bit inferior" one, than on
> Sale 1).

## 9.2 Exercise 5 — Solving WACC in Reverse

*What return can an investor expect if the forecast total return is
10.45% p.a. and debt is secured at 8.5% p.a. over a 20-year term at a 70%
loan-to-value ratio?*

This is the WACC identity from Topic 4 §8.8, but with the **equity**
return as the unknown instead of the blended rate — the same algebra as
"maximum price payable vs expected return" in note 03 §6.2: one equation,
solved for whichever variable is missing.

```
r_WACC = rD × LVR + rE × (1 − LVR)

rE = (r_WACC − rD × LVR) / (1 − LVR)
   = (0.1045 − 0.085 × 0.70) / (1 − 0.70)
   = (0.1045 − 0.0595) / 0.30
   = 0.045 / 0.30
   = 0.15  →  15%
```

Verified against the supplied workbook exactly. **Equity investors need to
earn 15%** for the blend to average out to the fund's 10.45% target, given
debt is doing 70% of the capital stack at a comparatively cheap 8.5%.

> **Sense-check the direction.** Equity's required return (15%) is higher
> than both the blended WACC (10.45%) and the cost of debt (8.5%) — that
> has to be true whenever debt is cheaper than the blended rate, because
> equity is compensating for bearing the residual, geared risk. If solving
> this kind of question ever returns an equity rate *below* the cost of
> debt, the arithmetic has gone wrong somewhere.

The tutorial slide also points back at note 07's Week 3 sensitivity work:
*"Check out your W3 solution and see how changes to the discount rate
impact your maximum purchase price. What about changes to other
variables, such as Growth? Which variable has the bigger impact on
outputs?"* Note 07 §7.7 already answers this in full — the
terminal yield moves the answer 4.56 times as far as the discount rate,
because 88.2% of present value sits in the exit. The Week 4 solution
workbook carries an updated `Sensitivity` tab making the same comparison
under a revised base case (income and management-fee growth both raised
to 9%, with expenses now escalating alongside income rather than staying
flat — a change the tab itself notes was made *"to remain consistent with
Rowland"*).

> **The updated Sensitivity tab's own side-tables do not reconcile with
> its own base case, and are not reliable to quote.** The sheet's main
> grid (rows 14–28) computes a maximum price of **$917,233.84** at the
> stated 10% required return and 9% growth — independently verified. But
> the adjacent discount-rate sensitivity table prints its 10% column as
> **$856,358.93**, a $60,875 gap from the sheet's own headline answer, and
> that column is a **hardcoded number**, not a live formula — it was not
> recalculated when the base case was updated from the old 7%-growth,
> flat-expenses model. The growth-sensitivity table alongside it is worse:
> four of its five columns are correctly recomputed for the new model
> (matched independently to the cent), but its middle (7%-growth) column
> is a formula that simply points at the stale discount-rate table instead
> of being computed fresh. **Use note 07 §7.7's fully-reconciled Week 3
> sensitivity table for "which variable moves the answer more" — it is
> internally consistent and independently verified. Treat this workbook's
> `Sensitivity` tab as a stale leftover, not a source of numbers.**

## 9.3 Concept Check — Cap Rate vs Discount Rate

Answered in full in Topic 4 §8.6: a cap rate measures the **income**
return alone (`NI year 1 / value`); a discount rate measures the return
from **income and capital growth together**, across every period of the
hold. They coincide only when income is stabilised — level and
non-growing — which is the special case where a perpetuity capitalisation
and a DCF converge to the same value.

## 9.4 Commercial Property Terms You Should Know

Straight from the tutorial's own glossary slide — needed before the
building exercise below makes sense, and needed again for A1/A2 given 41
Park Road's retail and service tenant mix:

| Term | Meaning |
|---|---|
| Gross rent | Rent **inclusive** of outgoings — the tenant pays one number |
| Net rent | Outgoings are **payable on top of** the rent |
| Face (headline) rent | Rent before any incentive is deducted |
| Effective rent | Rent **after** the incentive — what the landlord actually nets |
| Incentives | Quoted as a % of the first year's face rent, calculated over the full lease term, e.g. `35% × 7-year term × $700/m² × 1,000m²` |
| Incentive payment forms | Upfront (fitout funding), spread evenly (rent abatement), paying out a lease tail, cash, or a combination |
| Commissions | Paid to leasing agents at the start of a **new** tenant's lease |

> **The building worked below has no incentives** ("Incentives: Nil" in
> the assumptions), which is why the cashflow only carries a **letting-up
> fee** (a leasing agent's commission on re-letting) and not a separate
> incentive line. A1's 41 Park Road may well need both — the assumptions
> sheet has to say which apply and why.

The deck's closing advice matters for both assignments: *"Make sure your
market research is consistent with your DCF"* — the same forecast growth,
vacancy, and incentive assumptions researched for the write-up have to be
the ones actually driving the Excel model, not a separate, softer set of
numbers used only in the narrative. The PCA Glossary of Terms
(`propertycouncil.com.au`) is the named source for anything not covered
above.

## 9.5 Building the Commercial DCF — the Assumptions

*Determine the maximum purchase price for this property.*

Four income sources, each on its own review and expiry timetable:

| Tenancy | Area | Current rent | Reviews | Expires |
|---|---|---|---|---|
| Hairdresser | 200 m² | $300/m² net | 3% p.a. | 2 years |
| Butcher | 250 m² | $250/m² net | 4% p.a. | 4 years |
| Newsagent | 300 m² | $275/m² net | 3.5% p.a. | 3 years |
| Carparking | 10 bays @ $1,200/bay p.a. | | 3% p.a. | N/A |

Forecast retail market rent, used only when a tenancy re-lets:

```
Year 1    Year 2    Year 3    Year 4    Year 5    Year 6 (n+1)
$280/m²   $290/m²   $300/m²   $320/m²   $350/m²   $350/m²
```

Additional assumptions:

```
Analysis period                5 years, annual cashflows
CPI                             3% p.a.
Letting-up period               6 months (vacancy between tenants)
Letting-up fee                 15% of the new tenant's first year's rent
Incentives                     Nil
Non-recoverable outgoings      $25/m² (whole-building area)
Capex                          air-conditioning replacement, Year 3,
                                today's cost $50,000, escalated by CPI
Discount rate                   8%
Terminal yield                  9%
Purchase costs                  5%
Selling costs                   2%
```

> **No blanket vacancy allowance this time.** Note 07's residential model
> applies a flat 5% vacancy-and-relet allowance to *every* year regardless
> of whether a lease actually expires. This building instead only loses
> income in the specific years a lease **actually rolls** — a more
> realistic mechanic once a building has more than one tenant, because
> tenancies expire at different times rather than all facing the same
> generic vacancy risk every period.

## 9.6 Each Tenancy's Rent Line — the Re-Let Logic

The core trick of a multi-tenanted model: each tenancy grows at its **own
review rate** until its lease expires, then resets to that year's
**forecast market rent**, then resumes growing at its own review rate from
the new, reset base.

```
Year 1              = area × current $/m²
Years growing        = previous year × (1 + review rate)
Year after expiry    = that year's forecast market $/m² × area
```

Hairdresser expires in **2 years**, so year 3 resets to market:

```
Year 1   200 × 300                =  $60,000.00
Year 2   60,000 × 1.03            =  $61,800.00
Year 3   200 × $300/m² (market)   =  $60,000.00   ← reset, not 61,800 × 1.03
Year 4   60,000 × 1.03            =  $61,800.00
Year 5   61,800 × 1.03            =  $63,654.00
Year 6   63,654 × 1.03            =  $65,563.62
```

> **Year 3's reset happens to land back on exactly $60,000 — the same
> figure as Year 1 — which is a coincidence of these particular numbers,
> not a rule.** The Year-3 market rent ($300/m²) is identical to the
> Year-1 passing rent ($300/m²), so the reset produces the same dollar
> figure the lease started at. Change either input and the two years
> would no longer match. Do not assume a re-let always returns to the
> starting rent — check the market-rent forecast for the actual reset
> year every time.

Butcher (4-year expiry, resets in year 5) and Newsagent (3-year expiry,
resets in year 4) follow the identical pattern, each against its **own**
review rate and its **own** reset year. Carparking has no expiry, so it
simply compounds at 3% for all six years with no reset.

Full rent grid, verified independently in Python against the workbook:

| Period | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| Hairdresser net rent | 60,000.00 | 61,800.00 | **60,000.00** | 61,800.00 | 63,654.00 | 65,563.62 |
| Butcher net rent | 62,500.00 | 65,000.00 | 67,600.00 | 70,304.00 | **87,500.00** | 91,000.00 |
| Newsagent net rent | 82,500.00 | 85,387.50 | 88,376.06 | **96,000.00** | 99,360.00 | 102,837.60 |
| Carpark | 12,000.00 | 12,360.00 | 12,730.80 | 13,112.72 | 13,506.11 | 13,911.29 |
| **Potential net income** | **217,000.00** | **224,547.50** | **228,706.86** | **241,216.72** | **264,020.11** | **273,312.51** |

(Bold cells are the re-let years — the year *after* each stated expiry,
because "expires in 2 years" means the lease runs through year 2 and the
new lease starts in year 3.)

## 9.7 Letting-Up Costs, Outgoings, and Net Income

Every re-let year carries two costs, both sized off the **new** (post-relet)
rent, not the old one:

```
Letting-up allowance (period costs)  =  −(new annual rent / 12) × 6 months
Letting-up fee (agent's commission)  =  −15% × new annual rent
```

For the hairdresser's year-3 reset: allowance
`−60,000/12 × 6 = −$30,000.00`; fee `−15% × 60,000 = −$9,000.00`. Same
mechanic for the butcher's year-5 reset (allowance −$43,750.00, fee
−$13,125.00) and the newsagent's year-4 reset (allowance −$48,000.00, fee
−$14,400.00).

Non-recoverable outgoings are `$25/m²` on the whole building's **750 m²**
(`200 + 250 + 300`), escalated at CPI (3%) every year from a year-1 base
of `−25 × 750 = −$18,750.00` — a single line, unlike the itemised
tenancy income, because outgoings here are not attributed to individual
tenancies.

| Period | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| Letting-up allowance | — | — | −30,000.00 | −48,000.00 | −43,750.00 | — |
| Letting-up fee | — | — | −9,000.00 | −14,400.00 | −13,125.00 | — |
| Non-recoverable outgoings | −18,750.00 | −19,312.50 | −19,891.88 | −20,488.63 | −21,103.29 | −21,736.39 |
| **Net income** | **198,250.00** | **205,235.00** | **169,814.99** | **158,328.09** | **186,041.82** | **251,576.12** |

> **Year 3's net income drops by more than a third even though total
> potential rent is still growing.** Potential income rises from
> $224,547.50 (year 2) to $228,706.86 (year 3), but net income falls from
> $205,235.00 to $169,814.99 — a $35,420 swing in the wrong direction.
> That is the letting-up allowance and fee ($39,000 combined) landing in a
> single year. A model that shows net income growing smoothly every year
> has probably forgotten to cost a lease expiry.

## 9.8 The Exit, the Capex, and the Full Cashflow

**Terminal value**, priced off year 6 (n+1) net income at the 9% terminal
yield — the same n+1 convention as every DCF in this unit:

```
Terminal value  = 251,576.12 / 0.09        =  $2,795,290.22
Selling costs   = 2% × 2,795,290.22        =  $   55,905.80
```

**Capital expenditure** — the air-conditioning replacement, quoted in
today's dollars but incurred in year 3, so it needs three years of CPI
escalation applied before it enters the cashflow, exactly like the
tenancy rents and outgoings above it:

```
Capex, year-3 dollars = 50,000 × 1.03³ = 50,000 × 1.092727 = $54,636.35
```

> **The escalation exponent is the period number itself, not the number
> of years remaining until it.** It is tempting to read "in Year 3" as
> "two years from now" and escalate by `1.03²` — that gives $53,045.00,
> understating the true cost by $1,591.35. The workbook's own inflation
> index treats period 0 (today) as index 1.0000, so year 3's index is
> `1.03³`, matching three full years of inflation from today to the
> capex date — the same off-by-one risk already flagged for lease-expiry
> indexing in note 14's escalation section, now showing up on the capex
> line instead of a rent line.

Full net cash flow and its present value at the 8% discount rate:

| Period | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| Net cash flow | 198,250.00 | 205,235.00 | 115,178.64 | 158,328.09 | 2,925,426.23 |
| PV factor `1/1.08^t` | 0.925926 | 0.857339 | 0.793832 | 0.735030 | 0.680583 |
| Present value | 183,564.81 | 175,955.93 | 91,432.52 | 116,375.87 | 1,990,995.94 |

Year 3's net cash flow (`$115,178.64`) is year 3's net income
(`$169,814.99`) **less** the escalated capex (`$54,636.35`) — two
unrelated shocks landing in the same year, one from a lease expiry and
one from planned maintenance, which is realistic and exactly the kind of
lumpiness a DCF exists to capture and a cap-rate valuation cannot.

Year 5's net cash flow (`$2,925,426.23`) is, as always, three things
stacked: year 5 net income (`$186,041.82`) plus the terminal value
(`$2,795,290.22`) less selling costs (`$55,905.80`).

```
Sum of PVs (periods 1–5)                    $2,558,325.08
```

## 9.9 Step 6 — and the Convention Finally Changes

```
Gross-up      (algebraic):    2,558,325.08 / 1.05  =  $2,436,500.07
Class method  (as taught in Week 3):
              2,558,325.08 × (1 − 0.05)             =  $2,430,408.82
                                                        ─────────────
                                              Gap:       $6,091.25
```

**Verified: the Week 4 solution workbook now uses the gross-up method**
(`= −NPV × T / (1+T)`, which algebraically reduces to `NPV / (1+T)`) —
the same convention notes 03 and 06 argued was the internally consistent
one, against the "class method" the Week 3 solution actually taught. This
is a genuine change between the two workbooks, not an error to flag — but
it means **the Week 3 and Week 4 solution files now disagree with each
other** on which acquisition-cost convention to use. Match whichever the
current week's material is teaching; state the choice in your own
assumptions sheet either way.

## 9.10 Step 7 — The Answer

```
Maximum purchase price   $2,436,500.07   (gross-up — this workbook's method)
                          $2,430,408.82   (class method — Week 3's method)
```

Initial yield check at the gross-up price:
`198,250.00 / 2,436,500.07 =` **8.14%** — comfortably above the 8%
discount rate, which is the expected relationship for an asset with real
income growth built into the model (the initial yield only needs to equal
the discount rate when income is flat forever, per §9.3's stabilised-income
condition).

<details><summary>Checkpoint</summary>

1. A comparable gives a discount rate of 9.1%. Under what single condition
   could you also treat 9.1% as a valid cap rate for that same property?
2. Three comparables give discount rates of 7.8%, 8.1% and 9.4%, weighted
   50/35/15. What is the adopted rate?
3. A fund needs an overall 11% return; debt costs 7% at 60% LVR. What
   return must equity earn?
4. A tenancy's lease "expires in 3 years." In which cashflow year does it
   first show the reset market rent, and why not one year earlier?
5. A capex item is quoted today at $80,000 and lands in year 4 of the
   model, with 2.5% CPI. What is its escalated cost, and what is the most
   common way to get this wrong?
6. Why does year 3 in the worked example show *falling* net income even
   though gross potential income that year is higher than the year
   before?

**Answers**

1. Only if the property's income is **stabilised** — level and
   non-growing over the holding period. A growing or lease-event-driven
   income stream makes the cap rate and the discount rate diverge.
2. `0.078×0.5 + 0.081×0.35 + 0.094×0.15 = 0.039 + 0.02835 + 0.0141 =`
   **8.145%**.
3. `rE = (0.11 − 0.07×0.6) / 0.4 = (0.11 − 0.042)/0.4 = 0.068/0.4 =`
   **17%**.
4. **Year 4.** "Expires in 3 years" means the existing lease runs through
   year 3; the new lease, at the reset market rent, starts in year 4 — the
   year *after* the stated expiry, same logic as the n+1 sale-price
   convention.
5. `80,000 × 1.025⁴ = 80,000 × 1.103813 =` **$88,305.03**. The common
   error is escalating by the number of years *until* the capex (here,
   3 years, `1.025³`), rather than by the capex year's own index number
   (4), which would understate it as $86,151.25 — $2,153.78 short.
6. Two lease-expiry costs land in that year at once: a letting-up
   allowance and a letting-up fee, both sized off the newly re-let rent.
   Together they outweigh the growth in the tenancies that did not
   expire, so net income falls even though gross potential income rose.

</details>

## Summary

- **Exercise 4** (market weighting): 8.5%/8%/10.3% weighted 70/20/10 by
  comparability gives **8.58%** — verified. Weights are judgement calls;
  the justification carries the marks.
- **Exercise 5** (WACC in reverse): a 10.45% target return with 8.5% debt
  at 70% LVR requires equity to earn **15%** — verified.
- **The updated `Sensitivity` tab in `Week 4_solution.xlsx` does not
  reconcile with its own base case** — its discount-rate table is stale
  and one growth-table column just references it rather than being
  recomputed. Use note 07 §7.7's Week 3 sensitivity table instead; it is
  fully verified.
- **Multi-tenanted DCFs reset each tenancy to forecast market rent in the
  year after its own expiry**, then resume compounding at that tenancy's
  own review rate — four independent income streams on four independent
  timetables, not one blended growth rate.
- **No blanket vacancy allowance** — letting-up costs (a period allowance
  plus an agent's fee, both based on the new rent) hit only in the actual
  re-let year, which is why net income can fall in a year gross income
  rises.
- **Capex is escalated by the period number itself**, not the years
  remaining until it — a $1,591 understatement on this exercise if you
  get the exponent one year short.
- **Step 6 has changed convention from Week 3.** This workbook now uses
  the gross-up method (`ΣPV / (1+T)` = $2,436,500.07) instead of the
  class method (`ΣPV × (1−T)` = $2,430,408.82) — an intentional
  improvement, but it means the two weeks' solution files no longer agree
  with each other, so state which you used.
