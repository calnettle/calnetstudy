# Extra Practice Questions

Twenty-eight exam-style questions across all five topics, none of them
copied from the unit's own material — the tutorial questions are already
worked in the previous note. Every answer here was computed in Python.

Weight your practice the way the exam does: the mid-semester covers
**Weeks 1–5 only** (introduction, time value of money, commercial leases,
capitalisation Parts A and B, WALE). Section E is Week 11 material and
belongs to the final assessment.

Conventions used throughout, per the Week 3 tutorial: **cap rates to the
nearest quarter percent**, **values rounded to the nearest $25,000**.

---

## Section A — Foundations

**A1.** A property is bought for $8,200,000. It generates gross income of
$790,000 and operating expenses of $168,000. State the NOI, the cap rate,
and the Year's Purchase.

<details><summary>Answer</summary>

```
NOI      = 790,000 − 168,000            = $622,000
Cap rate = 622,000 / 8,200,000          = 7.585%
YP       = 8,200,000 / 622,000          = 13.183
Check:     1 / 0.07585                  = 13.184  ✓
```

Note that 7.585% is *derived* from a completed transaction, so it is a
**yield**. It only becomes a **cap rate** when you apply it to a subject
property.

</details>

**A2.** Define market rent, and state the one phrase that distinguishes it
from the definition of market value.

<details><summary>Answer</summary>

> The estimated amount for which an interest in real property should be
> leased on the date of valuation between a willing lessor and a willing
> lessee **on appropriate lease terms** in an arm's length transaction,
> after proper marketing and where the parties had each acted
> knowledgeably, prudently and without compulsion.

The distinguishing phrase is **"on appropriate lease terms"**. It is the
statutory hook for the entire comparable-evidence process — a rent is only
evidence if the lease behind it is comparable.

</details>

**A3.** A valuer is instructed to value an industrial property for
mortgage security. Name four things the resulting report is, per the Week
1 deck.

<details><summary>Answer</summary>

1. A **legal document**, signed by the valuer as at a point in time and
   based on historical sales transactions.
2. Prepared for a **specific purpose** — here, mortgage security.
3. An assessment of the **risk of lending** against the asset as security.
4. A document **containing assumptions and qualifications**.

</details>

**A4.** Two office buildings in the same precinct have identical NOI of
$1,150,000. Building X has a 9-year WALE and attracts a 5.25% cap rate;
Building Y has a 3-year WALE and attracts 6.25%. Quantify the value
difference and explain the mechanism in one sentence.

<details><summary>Answer</summary>

```
Building X = 1,150,000 / 0.0525 = $21,904,761.90  →  $21,900,000
Building Y = 1,150,000 / 0.0625 = $18,400,000.00  →  $18,400,000
                                   ───────────────
Difference                         $ 3,504,761.90   (16.0% of X)
```

**Mechanism:** a longer WALE means the income is contracted further into
the future, which lowers the risk of that income not being maintained, and
the cap rate is a measure of exactly that risk — so a lower risk gives a
lower cap rate and, on unchanged income, a higher value.

</details>

**A5.** Which is the *least* reliable comparable for a suburban
neighbourhood shopping centre, and why: (a) a sub-regional centre sold
three months ago in the next suburb; (b) a neighbourhood centre sold
eleven months ago in a demographically similar suburb 20 km away; (c) a
strip of six shops sold last month, next door?

<details><summary>Answer</summary>

**(c)**, the strip of six shops. Recency and location are the two things
it has, but it fails on **size and tenancy mix**, which is the primary
definition of a retail asset. Six shops with no supermarket anchor is a
different asset class from a supermarket-anchored neighbourhood centre —
different tenant covenants, different customer draw, different cap rate
band.

(a) fails on size, (b) fails on recency and location — but (b) is the same
*tier* of asset, which is the harder characteristic to adjust for. Rank
them (b), (a), (c).

</details>

---

## Section B — Time Value of Money

**B1.** $95,000 is invested for 11 years at 5.4% p.a. compounded
quarterly. What is the maturity value?

<details><summary>Answer</summary>

```
i = 0.054 / 4 = 0.0135
n = 11 × 4    = 44

FV = 95,000 × (1.0135)⁴⁴
   = 95,000 × 1.804036
   = $171,383.39
```

</details>

**B2.** A body corporate must fund $340,000 of façade works in 12 years. A
quote today is $228,000. Inflation is expected to average 2.9% and the
sinking fund earns 5.1%. Does the projected $340,000 look right, and what
monthly contribution funds it?

<details><summary>Answer</summary>

```
Escalated cost = 228,000 × (1.029)¹²
               = 228,000 × 1.409238
               = $321,306.38
```

The projected $340,000 is **$18,693.62 above** what 2.9% inflation on
today's quote implies — `(340,000/228,000)^(1/12) − 1 = 3.386%`, so it
embeds about 3.39% p.a. rather than 2.9%.
Flag it; do not silently substitute your own figure.

Funding the stated $340,000:

```
i = 0.051 / 12 = 0.425% per month
n = 12 × 12    = 144

PMT = 340,000 / (((1.00425)¹⁴⁴ − 1) / 0.00425)
    = 340,000 / 198.053175
    = $1,716.71 per month
```

</details>

**B3.** A tenant is offered two incentive packages on a 5-year lease:
$180,000 paid on signing, or $52,000 a year for four years starting at the
end of year 1. At 9%, which is worth more to the tenant?

<details><summary>Answer</summary>

```
Package 1:  PV = $180,000 (already present value)

Package 2:  PV = 52,000 × (1 − 1.09⁻⁴) / 0.09
               = 52,000 × 3.239720
               = $168,465.43
```

**Package 1 is better by $11,534.57.** The nominal totals are $180,000
against $208,000, so the deferred package looks 15.6% larger and is in
fact 6.4% smaller once discounted — this is exactly the reversal the Week
2 deck's settlement-terms table is designed to teach.

</details>

**B4.** Why does the deck's monthly-compounding answer of $18,614 not
follow from its own stated rate of 0.458%?

<details><summary>Answer</summary>

Because 0.458% is a rounded version of `5.5/12 = 0.458333%`, and
compounding magnifies the rounding across 96 periods.

```
12,000 × (1.00458)⁹⁶    = $18,607.84
12,000 × (1.0045833)⁹⁶  = $18,613.77  →  $18,614
```

The published figure requires the unrounded rate. Round only the final
answer, never the periodic rate.

</details>

---

## Section C — Leases and Market Evidence

**C1.** A tenant pays $128,000 p.a. with a review of "CPI + 1.5%". The
base index is 141.2 and the current index is 146.9. Compute the reviewed
rent under both readings and say which matches the unit's workbook layout.

<details><summary>Answer</summary>

```
CPI multiplier = (146.9 − 141.2) / 141.2
               = 5.7 / 141.2
               = 0.040368  =  4.0368%

Compounding reading (workbook layout):
    128,000 × 1.040368 × 1.015 = $135,164.65

Additive reading:
    128,000 × (1 + 0.040368 + 0.015) = $135,087.14
```

The **compounding reading** matches the T05 workbook, whose rows apply the
margin to the CPI-adjusted rent. The two differ by **$77.51** in year 1
and diverge further each year. Quote the lease clause if you have it.

</details>

**C2.** A four-tenancy building at 1 September 2025. Compute WALE by
income and by area.

| Tenant | Area (m²) | Rent p.a. | Expiry |
|---|---|---|---|
| A | 620 | $310,000 | 31-Mar-2030 |
| B | 285 | $156,750 | 30-Nov-2027 |
| C | 410 | $184,500 | 31-Aug-2031 |
| D | 340 | vacant | — |

<details><summary>Answer</summary>

```
Total rent = 310,000 + 156,750 + 184,500 = $651,250
Total area = 620 + 285 + 410 + 340       = 1,655 m²

Days remaining from 1 Sep 2025:
    A  31 Mar 2030  = 1,672 days
    B  30 Nov 2027  =   820 days
    C  31 Aug 2031  = 2,190 days
    D  vacant       =     0 days

WALE (income)
    A  (310,000/651,250) × 1,672 =  795.88
    B  (156,750/651,250) × 820   =  197.37
    C  (184,500/651,250) × 2,190 =  620.43
                                   ────────
                                   1,613.68 days  =  4.42 years

WALE (area)
    A  (620/1,655) × 1,672 =  626.37
    B  (285/1,655) × 820   =  141.21
    C  (410/1,655) × 2,190 =  542.54
    D  (340/1,655) × 0     =    0.00
                              ────────
                              1,310.11 days  =  3.59 years
```

**4.42 years by income, 3.59 years by area.** The vacant 340 m² is 20.5%
of the area and contributes nothing, which is what opens the **18.8%** gap
between the two bases.

</details>

**C3.** A sale: price $6,400,000; passing net income $412,000; market net
income $478,000; a 4% permanent vacancy allowance applies to the market
income; capital adjustments for incentive and letting-up total $205,000.
Compute the initial yield and the analysed yield, and say what the gap
tells you.

<details><summary>Answer</summary>

```
Initial yield  = 412,000 / 6,400,000 × 100
               = 6.438%

Adjusted market net rent = 478,000 × (1 − 0.04)
                         = $458,880

Analysed yield = 458,880 / (6,400,000 + 205,000) × 100
               = 458,880 / 6,605,000 × 100
               = 6.947%
```

The gap of **51 basis points** tells you the property is **under-rented**:
passing income is 13.8% below market, so the buyer paid a price that
anticipates the rent rising at the next review. Report the **analysed**
yield as the comparable one — 6.95%, adopting the nearest quarter for
application would give **7.00%**.

</details>

**C4.** A retail tenant's lease contains a ratchet clause. The tenant is
in a shop in a suburban centre in Queensland. What is the clause worth?

<details><summary>Answer</summary>

**Nothing** — ratchet clauses on rent reviews are **deemed void under
retail leasing legislation in Australia**, and a shop in a suburban centre
in Queensland falls under the **Retail Shop Leases Act 1994 (Qld)**.

The valuation consequence: you cannot assume the rent is upward-only at
market review. In a falling market this tenancy's income can decline,
which is a materially different risk profile from an office lease where
the ratchet would stand.

</details>

**C5.** Comparable industrial lease evidence for a Banyo warehouse shows
rates of $170, $180, $190, $195 and $209 per m² of GLA. The $170 deal was
agreed 18–24 months before practical completion; the $209 deal is the most
recent and includes a fitted corporate office over two levels. What rate
do you adopt for a plain 2,400 m² warehouse with a small office, and why?

<details><summary>Answer</summary>

Adopt around **$180–$190/m²**, giving an annual net rent of roughly
**$432,000–$456,000**.

Reasoning, in the order a marker wants it:

- **Discard or heavily adjust the $170** — it was agreed 18–24 months
  before completion, so it reflects a market that is one to two years
  stale. It sets a floor, not a guide.
- **Discard or discount the $209** — a two-level corporate office fit-out
  is superior improvements, and the subject has only a small office. It
  sets the ceiling.
- **The $180, $190 and $195 cluster** is the usable evidence, and the
  subject at 2,400 m² is mid-sized, so nothing pushes it to either end of
  that band.

Say explicitly which comparables set the upper and lower parameters and
why — that structure is worth more marks than the number.

</details>

---

## Section D — The Capitalisation Method

**D1.** Value the following office building.

```
Rental income (NLA 1,850 m² at $395/m²)
Other income: signage $28,000, parking 42 bays at $290 per bay per month
Vacancy: 6.5% (applied to rent and parking)
Operating expenses: $186,000
Capitalisation rate: 7.5%
```

<details><summary>Answer</summary>

```
Rental income     1,850 × 395              = $  730,750
Car parking       42 × 290 × 12            = $  146,160
                                             ───────────
                                             $  876,910
Less: Vacancy @ 6.5%                         $   57,000
                                             ───────────
                                             $  819,910
Add: Signage                                 $   28,000
                                             ───────────
Gross Operating Income                       $  847,910
Less: Operating expenses                     $  186,000
                                             ───────────
Net Operating Income                         $  661,910.85

Value = 661,910.85 / 0.075                 = $8,825,478.00
Rounded to the nearest $25,000             = $8,825,000
```

Vacancy is `876,910 × 0.065 = $56,999.15`. Signage is added **after** the
vacancy deduction, following the Week 4 worked example — signage income
does not lapse because a tenancy is empty.

</details>

**D2.** The same building, but a permanent 6.5% vacancy is applied to the
whole $904,910 including signage. What is the value, and how much does the
ordering decision cost?

<details><summary>Answer</summary>

```
876,910 + 28,000 = $904,910
Less vacancy @ 6.5%            = $ 58,819.15
GOI                            = $846,090.85
Less operating expenses        = $186,000.00
NOI                            = $660,090.85

Value = 660,090.85 / 0.075     = $8,801,211.33  →  $8,800,000
```

The ordering decision is worth **$24,266.67** of value — `1,820 / 0.075`,
where $1,820 is 6.5% of the $28,000 signage. Small in percentage terms
(0.3%) but it is a free mark if you follow the worked example's order and
write one line justifying it.

</details>

**D3.** A property is over-rented. Passing net rent $625,000; market net
rent $548,000; cap rate 6.5%; the lease expires in 22 months; rent is paid
monthly in advance. Value it, and state what you would have got by
capitalising the passing rent.

<details><summary>Answer</summary>

```
Step 1 — the excess
    625,000 − 548,000 = $77,000 p.a. = $6,416.67 per month

Step 2 — PV to expiry (annuity due, 22 months)
    i = 0.065 / 12 = 0.541667%
    PV = 6,416.67 × (1 − 1.00541667⁻²²)/0.00541667 × 1.00541667
       = 6,416.67 × 20.687013 × 1.00541667
       = $133,460.68

Step 3 — capitalise the MARKET income
    548,000 / 0.065 = $8,430,769.23

Step 4 — add the excess
    8,430,769.23 + 133,460.68 = $8,564,229.91
    Rounded                     $8,575,000
```

Capitalising the passing rent instead gives
`625,000 / 0.065 = $9,615,384.62` — **12.3% too high**, because it
capitalises in perpetuity a rent premium that expires in 22 months.

</details>

**D4.** A property is under-rented. Passing $290,000; market $335,000; cap
rate 8.25%; lease expires in 14 months; rent monthly in arrears. Value it.

<details><summary>Answer</summary>

```
Shortfall = 335,000 − 290,000 = $45,000 p.a. = $3,750 per month
i = 0.0825 / 12 = 0.6875%
n = 14

PV = 3,750 × (1 − 1.006875⁻¹⁴) / 0.006875
   = 3,750 × 13.303839
   = $49,889.40

Indicative value = 335,000 / 0.0825 = $4,060,606.06
less PV of shortfall                = $   49,889.40
                                      ─────────────
Market value                        = $4,010,716.66
Rounded                             = $4,000,000
```

</details>

**D5.** A five-year lease on 1,400 m² at a face rent of $410/m², with a
28% incentive and a cap rate of 6.75%. Value it two ways and explain the
difference.

<details><summary>Answer</summary>

```
Face income      = 1,400 × 410            = $574,000
Effective rent   = 410 × (1 − 0.28)       = $295.20/m²
Effective income = 1,400 × 295.20         = $413,280

Route A — capitalise the effective rent
    413,280 / 0.0675 = $6,122,666.67  →  $6,125,000

Route B — capitalise the face rent, deduct the incentive below the line
    Capitalised face  = 574,000 / 0.0675      = $8,503,703.70
    Total incentive   = 5 × 574,000 × 28%     = $  803,600.00
    Value             = 8,503,703.70 − 803,600 = $7,700,103.70  →  $7,700,000
```

**The difference is $1,577,437 — 20.5% of the Route B figure.**

Route A capitalises the discount **in perpetuity**, which is correct only
if 28% is the market's standing incentive level and will recur at every
reletting. Route B charges the incentive **once**, over the five years it
actually applies to, which is the correct treatment of a below-the-line
adjustment on a single lease. Name your assumption either way.

</details>

**D6.** You have analysed three comparable sales at 7.42%, 7.68% and
7.91%. Your subject has a shorter WALE, one vacant tenancy, and a superior
location. What rate do you adopt?

<details><summary>Answer</summary>

The evidence brackets **7.42%–7.91%**, midpoint 7.67%. The subject has two
factors pushing the rate **up** (shorter WALE, vacancy — both raise the
risk of maintaining the income) and one pushing it **down** (superior
location). On balance, adopt at or slightly above the middle of the range
and round to the quarter: **7.75%**.

The reasoning matters more than the number. Write it as: *"Adopt 7.75%,
above the 7.67% midpoint of the analysed range, reflecting the subject's
shorter WALE and vacant tenancy, partially offset by its superior
location."*

</details>

**D7.** Why is a $60,000 p.a. ATM and vending licence not capitalised at
the building's 7% cap rate?

<details><summary>Answer</summary>

Because it is **terminable income of the nature of chattels** — a licence,
not a lease. It does not run with the land and can be cancelled at short
notice, so it has no perpetual right to exist.

Capitalising it at 7% would add `60,000 / 0.07 = $857,143` of value to an
arrangement that could end next month. Treat it as a short-term cash flow
(PV it over its contracted term), or exclude it and note it in the report.

</details>

---

## Section E — DCF and Hypothetical Development

*Week 11 material — outside the mid-semester exam scope.*

**E1.** A five-year DCF. Year 1 net income $920,000, growing at 3.2% p.a.
The current cap rate is 6.25%. What terminal value do you adopt, and which
year's income do you capitalise?

<details><summary>Answer</summary>

Capitalise the income of the period **immediately after** the holding
period — Year 6.

```
Year 6 income = 920,000 × (1.032)⁵
              = 920,000 × 1.170573
              = $1,076,927.12

Terminal cap rate: soften the current 6.25% by roughly 100 bp
                   → adopt 7.25%

Terminal value = 1,076,927.12 / 0.0725
               = $14,854,167.17
```

Soften the rate to allow for the asset being five years older, for
unknown risks in the property's life cycle, and for new competing supply.

</details>

**E2.** Explain in three sentences why the capitalisation rate and the
discount rate must never be interchanged.

<details><summary>Answer</summary>

The **capitalisation rate** expresses the relationship between one year's
net operating income and capital value **at a single point in time** — it
is a ratio derived from comparable sales. The **discount rate** is the
investor's required rate of return, applied to move cash flows **across
time**, and it is built as a risk-free rate plus a risk premium. A cap
rate implicitly contains the market's growth expectations, whereas a DCF
models growth explicitly and then discounts — so using one in place of the
other either double-counts growth or omits it entirely.

</details>

**E3.** A development site. Gross realisation $12,600,000; selling costs
$980,000; profit and risk 22%; development costs $4,150,000 including
contingency; development period 24 months; interest 7.4%; rates and taxes
$210,000; acquisition costs 4%. Compute the residual land value.

<details><summary>Answer</summary>

```
Gross Realisation                                   $12,600,000
less Selling Costs                                  $   980,000
                                                    ────────────
Net Realisation                                     $11,620,000

less Profit & Risk (grossed up at 122%)
    Residual After P&R = 11,620,000 / 1.22          $ 9,524,590.16
    Profit & Risk      = 11,620,000 − 9,524,590.16  $ 2,095,409.84

less Development Costs                              $ 4,150,000.00
less Interest on dev costs (HALF the period, 12 mo)
    4,150,000 × 7.4% × 1                            $   307,100.00
less Rates and Taxes                                $   210,000.00
                                                    ────────────
Residual After Development Costs                    $ 4,857,490.16

less Interest on land (WHOLE period, simple,
     7.4% × 2 years = 14.8%, grossed up)
    4,857,490.16 / 1.148 = $4,231,263.21
    Interest             =                          $   626,226.95
                                                    ────────────
Residual Value after interest                       $ 4,231,263.21

less Acquisition Costs @ 4% (grossed up)
    4,231,263.21 / 1.04 = $4,068,522.32
    Acquisition cost    =                           $   162,740.89
                                                    ────────────
Residual Land Value                                 $ 4,068,522.32
```

The three gross-ups are the marks. Multiplying instead of dividing would
give profit and risk of `11,620,000 × 22% = $2,556,400` — $460,990 too
much — and the error compounds through the remaining two deductions.

</details>

**E4.** In the same development, why is interest charged for 12 months on
the development costs but 24 months on the land?

<details><summary>Answer</summary>

Because the **development fund is drawn progressively** over the
construction period rather than all at once, so the assumption is that it
is outstanding for **half the development period** on average. The
**land** is bought on day one and held for the whole project, so interest
on the land cost accrues over the **entire development period**.

</details>

**E5.** A DCF produces an NPV of $340,000 against a purchase price of
$7,200,000 at a discount rate of 8.5%. What does that tell you about the
IRR, and what is the decision if the investor's hurdle rate is 9%?

<details><summary>Answer</summary>

A **positive NPV at 8.5% implies the IRR is greater than 8.5%.** That is
all it tells you — it does not tell you whether the IRR exceeds 9%.

To make the decision you must either recompute the NPV at 9% (if it is
still positive, IRR > 9%, so **invest**; if negative, **reject**) or solve
for the IRR directly. The decision rule is:

```
IRR >  RRR   →  Invest
IRR =  RRR   →  Accept
IRR <  RRR   →  Reject
```

Reporting "positive NPV, therefore invest" without checking against the
stated hurdle rate is the error the question is testing.

</details>

---

## Section F — Two longer synthesis questions

**F1.** You are instructed to value a suburban office building for
mortgage security purposes as at today. Set out the steps you would take,
naming the outputs of each.

<details><summary>Answer</summary>

1. **Confirm the instruction** — instructing party, purpose (mortgage
   security), interest to be valued (fee simple in possession subject to
   existing leases), date of valuation.
2. **Title and planning search** — real property description, registered
   owner, easements, encumbrances and interests, local authority, zoning.
3. **Inspect** and prepare the property description: site area, building
   configuration, NLA, car parking, construction, condition, services,
   environmental rating.
4. **Build the tenancy schedule** — each tenancy's area, start, expiry,
   term, options, review profile, passing rent, $/m², car spaces. Reconcile
   the areas to the stated NLA and the rents to the stated passing income.
5. **Compute WALE**, by income and by area, and say which.
6. **Analyse lease evidence** — seven comparability tests; reduce every
   comparable to $/m² on a consistent net-or-gross basis; adjust for
   incentives and for when the deal was struck; adopt a market rate.
7. **Build the NOI** — rental income at market, add other income, deduct
   vacancy, deduct operating expenses.
8. **Analyse sales evidence** — initial and analysed yields for each
   comparable; explain which sale sets each end of the range; adopt a cap
   rate to the nearest quarter percent.
9. **Capitalise** and apply below-the-line adjustments — capex, letting-up
   allowance, and the PV of any reversion for over- or under-renting.
10. **Round to the nearest $25,000**, cross-check against the rate per m²
    of the sales evidence, and state assumptions and qualifications.

The cross-check at step 10 is the one students skip. If your capitalised
value implies $6,200/m² and every comparable sold between $3,000 and
$3,400/m², something upstream is wrong.

</details>

**F2.** An industrial property is fully leased to a single strong-covenant
tenant on a triple-net lease with five years remaining, fixed 3.5% annual
reviews, and no options. Passing rent is $204.72/m² on 2,918 m². Market
evidence in the precinct sits at $170–$209/m² net, and you have adopted
$215/m². Describe the valuation consequences and how you would report it.

<details><summary>Answer</summary>

```
Passing rent   = 2,918 × 204.72   = $597,372.96 p.a.  (say $597,375)
Market rent    = 2,918 × 215      = $627,370.00 p.a.

Shortfall      = 627,370.00 − 597,372.96 = $29,997.04 p.a.
Passing rent is 4.8% below the adopted market rent
```

**Consequences:**

- The property is **under-rented**. Capitalise the **market** income
  ($627,370) and then **deduct** the present value of the shortfall for
  the five years to expiry. Do not capitalise the passing rent.
- With five years to run at fixed 3.5% reviews, the shortfall does not
  persist unchanged — the passing rent grows 3.5% a year while the market
  rent grows at market rates, so you must model the gap year by year
  rather than assuming a flat $29,997.
- **Triple-net** means the tenant pays operational costs, taxes, insurance
  and structural repairs, so the passing rent is very close to the NOI —
  the outgoings deduction is minimal. Check that your comparables are also
  net, or you will compare unlike quantities.
- A single strong-covenant tenant with a 5.0-year WALE and no options
  supports a **tighter cap rate** than a multi-tenanted equivalent, but no
  options means a genuine reletting risk at expiry — that is a
  below-the-line letting-up allowance, not a cap rate adjustment.

**How to report it:** state the adopted market rate and where in the
$170–$209 evidence range it sits, and explain why you went **above** the
top of the range if you did — the adopted $215 exceeds every comparable,
which needs an explicit justification (superior improvements, superior
covenant, a rising market since the comparables transacted) or it will not
survive review.

</details>
