# Formula Sheet & Exam Traps

Everything in one place. Formulas first, then the conventions the unit
insists on, then the traps that change an answer, then the running list of
errors in the unit's own material.

## The master equation

```
NOI   = Gross Income − Operating Expenses

Value = NOI / Capitalisation rate
```

Every other formula in the unit is either a way of building the numerator
or a way of defending the denominator.

## Topic 1 — Ratios

```
NOI       = Gross Income − Operating Expenses

Cap rate  = NOI / Property Value

Value     = NOI / Cap rate

NOI       = Cap rate × Value

Yield     = NOI / Capital Value

                Current value of investment − Cost of investment
ROI       =  ───────────────────────────────────────────────────
                             Cost of investment
```

**Yield vs cap rate.** Same arithmetic, opposite direction. You *derive* a
yield from a completed sale; you *apply* a cap rate to a subject property.

## Topic 2 — Time value of money

```
Simple interest       I  = p × i × n

Compound / FV         FV = p (1 + i)ⁿ

Present value         PV = FV / (1 + r)ⁿ

                                (1 + r)ⁿ − 1
FV of an annuity      FV = PMT × ────────────
                                      r

                                1 − (1 + r)⁻ⁿ
PV of an annuity      PV = PMT × ─────────────
                                      r

Annuity due           multiply either annuity result by (1 + r)

Perpetuity            PV = PMT / r          (this IS the cap rate formula)

Real return (Fisher)  r_real = (1 + nominal) / (1 + inflation) − 1
```

Converting a rate: `i_period = i_annual / m` and `n_periods = years × m`.
Change both or neither.

**Excel**

```
PV(rate, nper, pmt, [fv], [type])
FV(rate, nper, pmt, [pv], [type])
PMT(rate, nper, pv, [fv], [type])

type = 0  end of period (arrears, default)
type = 1  beginning of period (advance — commercial rent)
```

Cash out is negative, cash in is positive. Negate the whole function or
enter `pv` as negative, but be consistent.

**Financial calculator rules:** clear memory; set two decimals; three
inputs give the fourth; estimate the answer first; select BGN or END;
watch the signs.

## Topic 3 — Leases and evidence

```
Fixed % review        Rent_n = Rent₀ × (1 + g)ⁿ

Fixed amount review   Rent_n = Rent₀ + (n × fixed amount)

                                      Current Index − Base Index
CPI review            Review = Rent × ──────────────────────────
                                              Base Index

CPI + margin          Rent × (1 + CPI) × (1 + margin)     [workbook layout]
                      Rent × (1 + CPI + margin)           [additive reading]

Turnover rent         Passing = Base rent + (Gross turnover × review rate)

Future rental value   FV = Current rental value × (1 + g)ⁿ

Number of reviews     (term ÷ review interval) − 1

Rental income         = rent per m² × NLA

Yield                 = NOI ÷ Capital Value
```

**The four yields**

| Yield | Numerator | Denominator |
|---|---|---|
| Initial (passing) | Passing net income | Purchase price |
| Effective | Current net income after incentives and impending vacancies | Value or price |
| Analysed / equated | Net **market** income | Sale price **plus capital adjustments** |
| Reversionary | A future net income | Current value, quoted with its start date |

**WALE**

```
                Σ ( weightᵢ × days remainingᵢ )
WALE (days) = ────────────────────────────────
                        Σ weightᵢ

weightᵢ = tenancy rent   → WALE by income
        = tenancy area   → WALE by area

WALE (years) = WALE (days) ÷ 365

Per tenancy:  contribution = (weightᵢ ÷ total weight) × daysᵢ
```

**The five-step market rent review**

```
1  Review the terms of the subject lease
2  Inspect the subject premises, noting value drivers
3  Identify and analyse the rental evidence
4  Determine the market rental rate
5  Prepare the market rent review report
```

**Seven comparability tests:** recent lease date; similar location;
similar use and size; similar tenure; similar lease terms and conditions;
similar construction and condition; open market transaction.

## Topic 4 — Capitalisation

```
    Estimate    Rental Income
    Add         Other Income Sources
    Deduct      Vacancy Allowances
                ─────────────────────────
                Gross Operating Income
    Deduct      Operating Expenses
                ─────────────────────────
                Net Operating Income (NOI)
    Determine   Appropriate Capitalisation Rate
    Calculate   Market Value (Capitalise NOI)
```

```
Vacancy rate      = unoccupied space ÷ lettable area × 100
Loss of rent      = gross income × vacancy rate

Year's Purchase   YP = Capital Value ÷ Net Income
                  CV = Net Income × YP
YP in perpetuity  YP = 1 ÷ cap rate

Total incentive   = Lease term × annual rental × incentive %
Effective rent    = Face rent × (1 − incentive %)
```

**Over-rented — four steps**

```
1  Excess = Passing net income − Market net income
2  PV the excess to lease expiry or market review
3  Capitalise the MARKET net income
4  Market value = Indicative value + PV of excess
```

**Under-rented** — identical, but step 4 **deducts** the PV of the
shortfall.

**Below-the-line adjustments:** immediate capex needed to sustain the
income; letting-up allowance; the value of the reversionary income;
leasing-up costs, incentive allowances and agents' commission.

## Topic 5 — DCF and hypothetical development

**Six DCF elements:** net cash flow, escalation, holding period, terminal
value, discount rate, net present value.

```
        ∞
       ___    CFₙ
DCF =  ╲   ────────
       ╱   (1 + r)ⁿ
       ‾‾‾
      n = 1

Terminal value   = NOI of the period AFTER the holding period
                   ÷ terminal cap rate      (softer than the current rate)

Discount rate    = Risk-free rate + Risk premium
                   (or opportunity cost + inflation + risk, or WACC,
                    or the client's hurdle rate, or sales analysis)

NPV              = PV of inflows − PV of outflows

IRR              = the discount rate at which NPV = 0

Decision rule    IRR > RRR → Invest
                 IRR = RRR → Accept
                 IRR < RRR → Reject
```

**Hypothetical development**

```
V = L + D + F + P        Value = Land + Development + Finance + Profit

Rate per lot = Sale Price ÷ Lot Yield

Four steps
1  Determine gross and net realisation value
2  Deduct profit and risk           (GROSS UP)
3  Deduct development costs and interest on them  (HALF the period)
4  Deduct interest on the land (WHOLE period) and acquisition costs
                                                  (BOTH GROSSED UP)
   The remainder is the residual land value.

Gross-up rule
    Base   = Net realisation ÷ (100 + factor)% × 100%
    Factor = Net realisation ÷ (100 + factor)% × factor%
    NOT      Net realisation × factor%
```

**Highest and best use:** physically possible; legally permissible;
financially feasible; maximum productivity.

## Conventions the unit enforces

| Convention | Rule | Source |
|---|---|---|
| Cap rate rounding | Nearest **quarter percent** — 8.0%, 8.25%, 8.5%, 8.75% | Week 3 tutorial, stated twice |
| Value rounding | Nearest **$25,000** | Week 3 tutorial |
| Rent payment timing | Commercial rent is **monthly in advance** → BGN mode | Week 3 tutorial |
| Terminal cap rate | **Softer** than the current cap rate | Week 11 |
| Interest on development costs | **Half** the development period | Week 11 |
| Interest on land | The **whole** development period | Week 11 |
| Vacancy base | Percentage of **gross** income | Week 4 ladder, Week 3 tutorial |
| Analysis consistency | Analyse the sale and apply the rate the same way | Week 3 tutorial |
| Measurement | **Property Council Method of Measurement** | Week 3 |

## Exam traps checklist

Work down this list before you hand anything in.

**Time value of money**

- [ ] Did you convert `i` **and** `n` to the same period?
- [ ] Did you keep `i` **unrounded** through the compounding?
- [ ] Is the question BGN or END? Any mention of "in advance", "beginning
      of the month", or commercial rent means BGN.
- [ ] Does the question want the **interest** or the **closing balance**?
- [ ] Is the cost given as a **today** cost (escalate it first) or an
      **escalated** cost (do not)?
- [ ] Two rates in a sinking fund? Inflation escalates the cost; the
      investment rate funds it. Do not swap them.
- [ ] Are you moving money **forward** (FV) or **backward** (PV)?

**Leases and evidence**

- [ ] Net or gross? You cannot compare a net $/m² to a gross $/m².
- [ ] Is the review compounding (fixed %, CPI) or arithmetic (fixed
      amount)?
- [ ] How many reviews actually fall inside the term? `(term ÷ interval) − 1`.
- [ ] Which WALE basis — income or area? Say so.
- [ ] Have you counted vacant and owner-occupied space in the WALE
      denominator?
- [ ] Have you adjusted comparables for **when the deal was struck**, not
      just the lease commencement date?
- [ ] Did you name which comparable sets the upper end and which the lower
      end of your range?
- [ ] Is a ratchet clause involved? Void in retail.
- [ ] Is there a demolition clause? Then the long WALE is not real.

**Capitalisation**

- [ ] Is the vacancy percentage applied to **gross** income?
- [ ] Is other income (signage, ATMs) added **after** the vacancy
      deduction, and treated as terminable?
- [ ] Are you capitalising the **market** income, not the passing income,
      on an over- or under-rented property?
- [ ] Are one-off costs sitting **below** the capitalisation line, not
      inside the income?
- [ ] Have you rounded the cap rate to the quarter and the value to
      $25,000?
- [ ] Does your $/m² of capital value sit inside the range shown by the
      sales evidence?
- [ ] Did you write the one sentence explaining why your cap rate differs
      from the analysed yield of your best comparable?

**DCF and development**

- [ ] Terminal value uses the income of the period **after** the holding
      period.
- [ ] Terminal cap rate **softer** than the current rate.
- [ ] Discount rate = risk-free **plus** a premium — never the cap rate.
- [ ] Did you subtract the purchase price to get a **net** present value?
- [ ] Did you **gross up** the profit and risk factor rather than
      multiplying?
- [ ] Half the period on development costs, the whole period on the land.
- [ ] Does the residual land value pass the reasonableness test against
      comparable englobo sales?

## The unit's own errors

Verified against Python. Each is flagged where it appears in the notes; do
not "correct" them back.

| Source | Says | Verified |
|---|---|---|
| Week 2, compound interest | `1,000 × (1.0083)⁶⁰ = $1,645.31` | $1,642.05 at 0.0083. The published figure needs the unrounded `0.10/12` |
| Week 2, Example 1C | monthly `i = 0.458`, `FV = $18,614` | 0.458% gives $18,607.84 |
| Week 2, Example 4B | `i = 0.52`, `FV = $89,031` | Those rounded inputs give $88,972 |
| Week 2, offers table | "Irate (mth) 0.67%" | `8%/12 = 0.66667%`; a literal 0.67% moves Offer 3 by $1,219 |
| Week 3, CPI example | Question says base rent **$10,000**; the table uses **$1,000** | $10,000 is consistent with 25 m² at $400/m². Review $337.16 |
| Week 3, CPI definition vs example | "same quarter in a previous year" vs Jun-25 against Sep-24 | Nine months, not twelve |
| Week 3, Milton description | "from **120 m²**"; "**two** third-party tenants"; "WALE (by income) **3.69 years**" | Smallest tenancy 232 m²; **four** third-party tenants; WALE is **4.77 by income**, 3.70 by area |
| Week 3, tenancy schedule | `$/m²` of 578 and 547 | Implied 577.91 and 547.49 — do not rebuild rents from the rates |
| Week 3, retail tiers | Regional and Super Regional given the same anchor mix | The distinction is by GLAR and store count |
| Week 5, Year's Purchase | Milton SP Core value **$1,409,840** | `112,788 / 0.08 = $1,409,850` |
| Week 5, incentives | Effective-rent route $937,500 vs face-less-incentive $1,125,000 | Differ by $187,500; the deck does not reconcile them and the referenced spreadsheet is not in the folder |
| Week 11, discount rate | "equal to the risk-free rate" | Risk-free **plus** risk premium (5.41% + 3.5% = 8.91%) |
| Week 11, period 0 | "Period 0 is not discounted" | The deck's own table and spreadsheet discount it a full period |
| Week 11, NPV example | Labels **$100,577** as the NPV | Gross PV of inflows. NPV = $14,399 after the $86,178 cost |
| Week 11, IRR example | Cost shown as $86,177 here, $86,178 two slides earlier | IRR is 14.00% either way |
| T03 `Book2.xlsx` Q1 | `=(20000*0.06*3)+20000 = $23,600` | Question asks for interest: **$3,600** |
| T03 `Book2.xlsx` Q4 | `PV(8%,2,0,170000)` | Question says $85,000 in 12 months: **$78,703.70** |
| T03 `Book2.xlsx` Q8 | Adds the incentives to the tenant's cost; inconsistent BGN/END across the two buildings | Incentives should be deducted. Building 2 still wins, by ~$36,000 |
| T05 workbook QN1 | Car-park column headed `$pa` | Contains a **monthly** figure. Annual total $369,600, not $30,800 |
| T05 workbook QN5 | Asks for two reviews on a 20-year lease with 10-yearly reviews | Only the year-10 review falls within the term |

## Stale admin detail

The lecture and tutorial files in the unit folder are from the **2025**
offering. The exam-prep tutorial says group sign-up closes **5 September
2025**; the WALE exercise uses a valuation date of **15 August 2025**. The
30 / 30 / 40 assessment weighting comes from the Week 1 unit-information
slide and is the most reliable figure in the set, but **confirm it and
every date on Canvas** before relying on any of it.

The lecture folder holds **Weeks 1, 2, 3, 4, 5 and 11 only**. Weeks 6–10
and 12–13 are not in it, so these notes cover five topic blocks rather
than a full thirteen-week unit.
