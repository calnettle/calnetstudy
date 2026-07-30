# Tutorial Worked Solutions

Every tutorial exercise in the unit folder, worked end to end. Three of
them the unit never released answers for; one it released answers that
disagree with the questions. Each number below was recomputed in Python
and cross-checked against the lecturer's spreadsheets where they exist.

Tutorials in the folder: **T01** drivers of asset value, **T03** time
value of money (with the lecturer's `Book2.xlsx` solutions), **T04**
capitalisation method, **T05** WALE calculation (with its Excel exercise),
and **T06** mid-semester exam preparation.

---

## T01 — Drivers of Asset Value

A discussion tutorial with no calculations. The content is folded into
Topic 1, and the case study is **127 George Street, Brisbane**, which the
tutorial asks you to classify against five headings.

The tutorial supplies only one of the five answers directly — *age of
construction: 1960s/70s* — with the rest left to be filled in from the
site visit and the images on the slides. Working from what the deck does
tell you:

| Heading | What the tutorial gives you |
|---|---|
| Location in location | George Street is the **government precinct** of the Brisbane CBD |
| Grade | Not stated. But the deck's own Week 1 slide says the government sector "generally comprises A and B grade space", and a 1960s/70s building is very unlikely to be Premium — a landmark trendsetter in establishing rents. The defensible answer is **B, possibly C** |
| Age of construction | **1960s/70s** — the only fact the tutorial states outright |
| Size / floor plate | Shown as an image only; not stated in text |
| Environmental / energy characteristics | Shown as an image only; not stated in text |

> **Two of the five headings cannot be answered from the extracted text —
> the slides carry them as images with no caption.** If you were not in
> the tutorial, you do not have the floor plate or the NABERS rating for
> 127 George Street, and you should not invent them. Get them from the
> recording or from a classmate's notes rather than guessing, because a
> grade classification that contradicts the floor plate is worse than no
> answer.

The examinable substance of T01 is the **six drivers** and the WALE
material, both covered in Topic 1.

---

## T03 — Time Value of Money

Eight questions. The lecturer's solutions are in `Book2.xlsx`, one Excel
formula per question. Two of those formulas do not answer the question
that was asked, and one has a sign problem — all flagged below.

### Question 1

*If $20,000 has been invested for the last three years at 6% per annum,
simple interest, what is the amount of **interest** that the investment
has earned in total?*

```
Interest = p × i × n
         = 20,000 × 0.06 × 3
         = $3,600
```

> **The lecturer's cell answers a different question.** `Book2.xlsx` cell
> A2 contains `=(20000*0.06*3)+20000`, returning **$23,600** — the closing
> balance, not the interest. The question asks for "the amount of interest
> that the investment has earned in total", which is **$3,600**. Present
> both if you like ("interest $3,600; closing balance $23,600") but lead
> with the interest. Worth confirming with your tutor which the exam
> wants, because the same wording will appear again.

### Question 2

*If I invest $100,000 today for seven years at 5%, compounded annually,
what will the investment be worth? What about semi-annually, quarterly,
monthly, daily?*

| Compounding | Excel | i per period | n | FV |
|---|---|---|---|---|
| Annually | `=-FV(5%,7,0,100000)` | 5% | 7 | **$140,710.04** |
| Semi-annually | `=-FV((5%/2),(7*2),0,100000)` | 2.5% | 14 | **$141,297.38** |
| Quarterly | `=-FV((5%/4),(7*4),0,100000)` | 1.25% | 28 | **$141,599.23** |
| Monthly | `=-FV((5%/12),(7*12),0,100000)` | 0.41667% | 84 | **$141,803.61** |
| Daily | `=-FV((5%/365),(7*365),0,100000)` | 0.0136986% | 2,555 | **$141,903.35** |

All five reproduce exactly. Going from annual to daily compounding is
worth **$1,193.31** — 0.85% of the balance.

Note the leading minus sign in every formula. Excel returns a negative FV
because the `pv` argument is entered positive; negating the function is
the lecturer's chosen fix.

### Question 3

*A building's lift needs replacement in 20 years at an escalated cost of
$200,000. As treasurer of the Body Corporate, what annual amount must each
of the **ten** unit owners contribute to a sinking fund earning 7.5%
p.a.?*

```
Excel: =PMT(7.5%,20,0,200000,0)

Total annual contribution
    = 200,000 / (((1.075)²⁰ − 1) / 0.075)
    = 200,000 / 43.304681
    = $4,618.44 per year

Per owner
    = 4,618.44 / 10
    = $461.84 per year
```

The lecturer's cells are `E2 = -4,618.44` and `E3 = E2/10 = -461.84`.

> **The cost is already escalated — do not inflate it again.** The
> question says "the **escalated** replacement cost of the lift in 20
> years is estimated to be $200,000", so $200,000 is the future value and
> this is a single-step sinking fund. Contrast the Week 2 lecture's
> Example 10, where a quote of $97,000 is a **today** cost that must be
> escalated at inflation first. Read for the words "escalated", "in *n*
> years' time" and "today" before you decide how many steps the question
> has.

### Question 4

*Landlords are offering incentives. The first offers a deferred payment of
$150,000 in two years. The second offers $85,000 in 12 months. The cash
investment rate is 8%. Which is the best deal?*

```
Offer 1:  PV = 150,000 / (1.08)²
             = 150,000 / 1.1664
             = $128,600.82

Offer 2:  PV =  85,000 / (1.08)
             =  85,000 / 1.08
             = $ 78,703.70
```

**Offer 1 is better by $49,897.12** — it is worth 63.4% more in present
value terms. This is not close, and it is not close in nominal terms
either ($150,000 against $85,000), so no discounting subtlety is being
tested here.

> **The lecturer's second cell does not match the question.** `Book2.xlsx`
> cell G3 is `=PV(8%,2,0,170000,0)` — the present value of **$170,000 in
> two years**, giving $145,747.60. The question says $85,000 in **twelve
> months**. There is no reading of the question that produces $170,000
> over two years; $170,000 is $85,000 × 2, so it looks like a leftover
> from a variant of the question. Use $78,703.70 for Offer 2 and note the
> discrepancy.

### Question 5

*You have $25,000 to invest for five years. One bank offers 7.0% p.a.
compounding annually; the second offers 6.75% compounding quarterly. Which
gives the better future value?*

```
Bank 1:  FV = 25,000 × (1.07)⁵                = $35,063.79
Bank 2:  FV = 25,000 × (1 + 0.0675/4)²⁰       = $34,937.47
                                                ───────────
Bank 1 is better by                             $   126.33
```

Both reproduce the lecturer's cells (`I2` and `I4`) exactly. The
quarterly compounding on Bank 2 is worth about 17 basis points of
effective rate — `(1 + 0.0675/4)⁴ − 1 = 6.923%` against a nominal 6.75% —
but that is not enough to close a 25-basis-point gap in the headline rate.

> **Compare effective annual rates, not nominal ones, and the answer falls
> out in one line.** Bank 1's effective rate is 7.000%; Bank 2's is
> 6.923%. Once you have those two numbers you do not need to run five
> years of compounding at all. This is the fastest route through any
> "which bank" question.

### Question 6

*A wealthy aunt has been investing $3,000 a year into a trust fund since
1992. The fund earns 8.25% p.a. You could access the money in 2020. What
was the fund worth in 2020?*

```
Excel: =FV(8.25%,28,3000,0,0)

n = 2020 − 1992 = 28

FV = 3,000 × (((1.0825)²⁸ − 1) / 0.0825)
   = 3,000 × 99.443639
   = $298,330.92
```

> **The period count is arguable and the answer moves by $27,612 on it.**
> The lecturer uses `n = 28` with payments in arrears (type 0), which
> means the first $3,000 lands at the end of 1992 and the last at the end
> of 2019, with the fund valued at the start of 2020. If instead you read
> "flowing in since 1992" as 29 deposits (1992 through 2020 inclusive),
> `FV = $325,943.22`. Go with **28 and type 0** because that is the
> lecturer's own solution, but write one line stating the assumption — the
> question genuinely does not pin down the first and last payment dates.

### Question 7

*A developer bought a vacant parcel of industrial land 16 years ago for
$750,000. If values in that area have grown by 2½% per annum, what is the
land worth now?*

```
Excel: =FV(2.5%,16,0,750000,0)

FV = 750,000 × (1.025)¹⁶
   = 750,000 × 1.484506
   = $1,113,379.22
```

The land has grown **48.5%** in sixteen years. Sanity-check that against
the rule of 72: at 2.5%, money doubles in about 29 years, so 16 years
should give a bit over half a doubling. It does.

### Question 8

*You own an expanding city real estate agency and your lease is
approaching expiry. Two premises are available.*

- *Building 1: 500 m² at $700/m² for the first year, with an upfront cash
  incentive of $50,000.*
- *Building 2: 500 m² at $650/m² for the first year, with a cash incentive
  of $65,000 at the **end** of the year.*
- *Rent is paid in equal monthly instalments. The acceptable annual
  discount rate is 10.5%, equivalent to an effective monthly rate of
  0.836%.*

First, verify the rate the question hands you:

```
(1.105)^(1/12) − 1 = 0.8355%   →  0.836%  ✓
```

Good — 0.836% really is the **effective** monthly equivalent of 10.5%
compounded annually, not `10.5/12 = 0.875%`. The question is being careful
and you should be too.

**The gross rents:**

```
Building 1:  500 × 700 = $350,000 p.a.  =  $29,166.67 / month
Building 2:  500 × 650 = $325,000 p.a.  =  $27,083.33 / month
```

**The lecturer's cells:**

```
O6 = -FV(0.836%,12,(O3/12),O4,1)        = $424,867.55   Building 1
Q6 = (-FV(0.836%,12,(Q3/12),,0))+Q4     = $405,367.86   Building 2
```

> **Both of the lecturer's formulas ADD the incentive to the tenant's
> cost, and an incentive is money the tenant receives.** In `O6` the
> $50,000 sits in the `pv` slot of `FV()`, so it is compounded forward and
> added to the rent. In `Q6` the $65,000 is added on at the end. On those
> figures Building 1 "costs" $424,868 and Building 2 "costs" $405,368, and
> you would choose Building 2. Subtract the incentives instead, as the
> economics require, and **Building 2 still wins** — so the conclusion
> survives the error — but every intermediate figure changes and the
> margin changes with it.

**The corrected comparison.** Both buildings should use the same payment
mode; the question says only "equal monthly instalments" for both, and the
lecturer's file inconsistently uses advance (type 1) for Building 1 and
arrears (type 0) for Building 2. Commercial rent is normally paid in
advance, so BGN is the better single assumption — but here is both:

| | Building 1 | Building 2 |
|---|---|---|
| **Monthly in advance (BGN, type 1)** | | |
| FV of rents at year end | $369,614.37 | $343,213.34 |
| less incentive, at year end | $50,000 × 1.00836¹² = $55,253.19 | $65,000 |
| **Net cost at year end** | **$314,361.18** | **$278,213.34** |
| **Monthly in arrears (END, type 0)** | | |
| FV of rents at year end | $366,550.01 | $340,367.86 |
| less incentive, at year end | $55,253.19 | $65,000 |
| **Net cost at year end** | **$311,296.82** | **$275,367.86** |

**Building 2 is the better deal on every reading**, by roughly $36,000 a
year. The reasoning: Building 2 is $25,000 a year cheaper on rent
*and* gives $15,000 more incentive, so it wins on both axes — the
discounting only affects the size of the margin, not the ranking.

The $50,000 upfront incentive is worth $55,253 at year end because it has
had twelve months to earn 0.836% a month; the $65,000 received at year end
has earned nothing. That timing difference is the only real content in the
question, and it is worth $5,253 to Building 1 — nowhere near enough.

---

## T04 — Capitalisation Method

### Property X — analysing a sale

*Sale date 23 February 2022. Sale price $2,750,000. Site area 2,151 m².
Lettable area 1,286 m². Net passing rent $157,792 p.a. Net market rent
$157,792 p.a. Outgoings $28,006 or $22/m². Allowances made: 6-month
incentive allowance, 3-month letting-up allowance and 15% agency fees.*

*Find: initial yield, analysed yield, analysed equivalent yield, gross
passing rent.*

**The straightforward parts:**

```
Initial yield      = 157,792 / 2,750,000 × 100
                   = 5.738%   →  5.74%

Gross passing rent = Net passing rent + Outgoings
                   = 157,792 + 28,006
                   = $185,798 p.a.

Rate per m² (site)     = 2,750,000 / 2,151 = $1,278.48  →  $1,278 ✓
Rate per m² (lettable) = 2,750,000 / 1,286 = $2,138.41  →  $2,138 ✓
Outgoings per m²       =    28,006 / 1,286 =     $21.78 →  $22    ✓
```

Three of the sheet's stated figures reproduce exactly, which confirms the
areas and price are consistent.

**The analysed yield.** Because passing rent **equals** market rent here
($157,792 both ways), the numerator does not change — only the denominator
does, by the capital adjustments. Reading the three stated allowances as
capital sums added to the buyer's true cost:

```
6-month incentive allowance   = 157,792 × 6/12   = $ 78,896.00
3-month letting-up allowance  = 157,792 × 3/12   = $ 39,448.00
15% agency fees               = 157,792 × 15%    = $ 23,668.80
                                                   ───────────
Total capital adjustments                          $142,012.80

Analysed yield = 157,792 / (2,750,000 + 142,012.80) × 100
               = 157,792 / 2,892,012.80 × 100
               = 5.456%   →  5.46%
```

> **The tutorial gives no answers for Property X and the allowances are
> not fully specified, so state your reading.** "6 month incentive
> allowance" could mean six months of the *net* rent (used above), six
> months of the *gross* rent ($92,899, giving an analysed yield of 5.43%),
> or a stated dollar figure not reproduced on the slide. "15% agency fees"
> is almost certainly 15% of one year's rent — the standard leasing
> commission — but could be read as 15% of the incentive. Show the
> arithmetic and name the assumption in a sentence; that is what the
> tutorial's own worked example does for the retail exercise below.
>
> The **analysed equivalent yield** cannot be computed here at all,
> because passing and market rent are identical and no reversion exists.
> Say so: with passing rent at market and no vacancy, the equivalent yield
> collapses to the analysed yield, **5.46%**.

### Sale 1 — the retail comparable

*Sale date 20 February 2023. Sale price $3,125,000. GLAR 804 m². Net
income $204,000 p.a.*

```
Initial yield = (Net income p.a. / Sale price) × 100
              = (204,000 / 3,125,000) × 100
              = 6.528%   →  6.53%

Sale price per m² = 3,125,000 / 804 = $3,886.82  →  $3,887
```

The initial yield is the yield **before any adjustments are made**.

Now the analysed yield, where adjustments are made to the net income
because the rents are not at market and, for a multi-tenanted property, a
vacancy allowance is also applied:

```
Market assessment of rent      $260,000
Permanent vacancy allowance      2.5%
Adjusted net rent            = 260,000 × (1 − 0.025)
                             = $253,500

Analysed yield = (253,500 / 3,125,000) × 100
               = 8.112%   →  8.11%
```

The gap between 6.53% and 8.11% is 158 basis points, entirely explained by
the passing income being 21.5% below market (`204,000 / 260,000 = 0.785`).

### The retail valuation

```
Gross Income                                              $228,000
Less: Outgoings                                           $ 62,000
Less: Permanent vacancy allowance (3%)                    $  6,840
                                                          ─────────
Net income                                                $159,160

Capitalised net income at 8.5%                            $1,872,471

Capital adjustments:
    Leasing up vacant shop            $10,000
    Incentive allowance               $ 4,000
    Agents commission                 $ 2,500
                                      ───────
    Total capital adjustments                             $ 16,500
                                                          ─────────
Capitalised value                                         $1,855,971
Rounded                                                   $1,850,000
```

Every step reproduces: `228,000 × 3% = 6,840`;
`228,000 − 62,000 − 6,840 = 159,160`; `159,160 / 0.085 = 1,872,470.59`;
`1,872,470.59 − 16,500 = 1,855,970.59`; rounded to the nearest $25,000,
**$1,850,000**.

Two conventions from this exercise that carry into the exam:

- **Cap rate to the nearest quarter percent** — 8.0%, 8.25%, 8.5%, 8.75%.
- **Value rounded to the nearest $25,000**, "similar to the 25 basis
  points in the capitalisation rate."

And the sentence that justifies the 8.5%: *"In this example I made the cap
rate slightly higher than the analysed yield in the sale because the
subject property had a vacant shop and a lower WALE."*

> **The vacancy allowance is deducted from gross income here, not from
> net.** `228,000 − 62,000 − 6,840` and
> `(228,000 − 62,000) × 0.97 = 161,020` are different — $1,860 of NOI,
> which is $21,882 of value at 8.5%. The tutorial's order (deduct
> outgoings and vacancy separately, both from gross) matches the Week 4
> ladder, where vacancy is a percentage of **gross** income. Keep the
> percentage on the same base the deck uses.

---

## T05 — WALE Calculation Exercise

Five questions in `USB144 T05 Tutorial WALE Calculation Exercise (1).xlsx`,
all with the answer cells left blank. Worked below.

### QN1 — WALE for a ten-tenancy building

Valuation date **Friday 15 August 2025** (confirmed — 15 August 2025 was a
Friday). Car parking is $350 per bay per month across every tenancy.

First build the passing rents from `area × $/m²`:

| Tenant | Area (m²) | $/m² | Passing rent p.a. | Bays | Expiry | Days remaining |
|---|---|---|---|---|---|---|
| 1 | 736 | $560 | $412,160 | 16 | 13-Jun-31 | 2,128 |
| 2 | 57 | $860 | $49,020 | 2 | 27-May-32 | 2,477 |
| 3 | 158 | $605 | $95,590 | 7 | 13-Jul-27 | 697 |
| 4 | 394 | $555 | $218,670 | 3 | 13-Aug-30 | 1,824 |
| 5 | 222 | $570 | $126,540 | 6 | 12-May-28 | 1,001 |
| 6 | 460 | $560 | $257,600 | 10 | 12-May-28 | 1,001 |
| 7 | 275 | $550 | $151,250 | 5 | 14-Mar-29 | 1,307 |
| 8 | 404 | $560 | $226,240 | 7 | 12-Jun-30 | 1,762 |
| 9 | 411 | $550 | $226,050 | 9 | 12-Feb-31 | 2,007 |
| 10 | 1,153.7 | $550 | $634,535 | 23 | 11-Feb-29 | 1,276 |
| **Total** | **4,270.7** | | **$2,397,655** | **88** | | |

Both totals reconcile against the workbook's own `SUM` cells:
area **4,270.7 m²** ✓ and rent **$2,397,655** ✓.

Now the weighted contributions:

| Tenant | Income weight × days | Area weight × days |
|---|---|---|
| 1 | 365.81 | 366.73 |
| 2 | 50.64 | 33.06 |
| 3 | 27.79 | 25.79 |
| 4 | 166.35 | 168.28 |
| 5 | 52.83 | 52.03 |
| 6 | 107.55 | 107.82 |
| 7 | 82.45 | 84.16 |
| 8 | 166.26 | 166.68 |
| 9 | 189.22 | 193.15 |
| 10 | 337.69 | 344.70 |
| **WALE (days)** | **1,546.58** | **1,542.40** |
| **WALE (years)** | **4.24** | **4.23** |

One row stepped out:

```
Tenant 10
    Days remaining  = 11 Feb 2029 − 15 Aug 2025 = 1,276 days

    Income weight   = 634,535 / 2,397,655 = 0.264652
    Contribution    = 0.264652 × 1,276    = 337.69 days

    Area weight     = 1,153.7 / 4,270.7   = 0.270144
    Contribution    = 0.270144 × 1,276    = 344.70 days
```

**Answer: WALE 4.24 years by income, 4.23 years by area.**

The two are almost identical here because every tenancy is let — there is
no owner-occupied or vacant space to pull the area figure down, and the
rate per m² varies only from $550 to $860. Contrast the lecture's Milton
example, where an owner-occupied floor opened a 29% gap between the two
bases.

> **The workbook's car-park column is labelled `$pa` and contains a
> monthly figure.** Cell `G5` is `=E5*F5` — bays × $350 — where `F` is
> headed `$pcpm` (per car park per month). So $5,600 for Tenant 1 is
> **monthly**, and the annual figure is $67,200. The stated total of
> $30,800 is monthly across all 88 bays; annualised it is **$369,600**.
> Multiply by 12 before you use car-park income in any income weighting,
> and fix the header when you hand the sheet back.

Including annualised car parking in the income weighting moves the answer
only slightly, because the $350/bay rate is uniform:

```
Total income including car parking = 2,397,655 + 369,600 = $2,767,255
WALE (income, incl. parking)       = 4.22 years
```

The lecture's own worked example excludes car parking from the WALE
weighting, so **use rent only unless told otherwise** — and say so.

### QN2 — Passing and analysed market yield

*A premium-grade office building recently sold. NLA 3,271 m²; passing rent
$850/m²; market rent $790/m²; sale price $30,500,000. All rents net.*

```
Step 1 — NOI

    Passing NOI = 3,271 × 850  = $2,780,350
    Market NOI  = 3,271 × 790  = $2,584,090

Step 2 — Yields

    Passing (initial) yield = 2,780,350 / 30,500,000 × 100
                            = 9.116%   →  9.12%

    Analysed market yield   = 2,584,090 / 30,500,000 × 100
                            = 8.472%   →  8.47%
```

**The property is over-rented.** Passing rent of $850/m² sits 7.6% above
the market rent of $790/m² (`850/790 − 1 = 0.0759`), so the buyer is
paying for income that will fall at the next market review. That is
precisely why the analysed yield (8.47%) is *lower* than the passing yield
(9.12%) — the 64-basis-point gap is the market's discount on rent that
will not persist.

> **A high passing yield on an over-rented property is a warning, not a
> bargain.** If you screened investments on initial yield alone this
> building would look like the best buy on the list at 9.12%. On market
> income it is an 8.47% asset, and at the next review the income drops
> $196,260 a year. Always compute both and report the analysed yield as
> the comparable one.

### QN3 — Rent reviews across four tenancies

*An office building in Melbourne. Tenant 3's rent increases by $2,500 on
each anniversary of the lease commencement date.*

| Tenant | Area | Initial rent p.a. | Start | Expiry | Review type |
|---|---|---|---|---|---|
| 1 | 736 | $412,160 | 14-Jun-21 | 13-Jun-31 | CPI |
| 2 | 57 | $49,020 | 29-May-22 | 27-May-32 | 2.5% |
| 3 | 158 | $95,590 | 14-Jul-22 | 13-Jul-27 | Fixed amount |
| 4 | 394 | $218,670 | 13-Jul-24 | 13-Aug-30 | CPI + 2% |
| **Total** | **1,345** | **$775,440** | | | |

Both totals reconcile ✓.

The workbook points at the QGSO Brisbane CPI series for the index figures,
with a **current index of Jun-25** and a **base index of Sep-24**. Using
the same two figures the Week 3 lecture uses — **144.1** and **139.4**:

```
                     144.1 − 139.4       4.7
Index multiplier  =  --------------  =  -------  =  0.033716  =  3.3716%
                         139.4           139.4
```

**Tenant 1 — CPI review:**

```
Rent                  $412,160
Multiplier               3.3716%
CPI rent review    =  412,160 × 0.033716  =  $ 13,896.36
Passing rent       =  412,160 + 13,896.36 =  $426,056.36
```

**Tenant 4 — CPI + 2% review:** the workbook's row labels run *Initial
Rent → Index Adj. Multiplier → CPI Review → CPI Rent → 2% of CPI increase
→ CPI Rent → Passing Rent*, which reads as CPI applied first, then 2%
applied **to the CPI-adjusted rent**:

```
Initial rent                        $218,670
CPI review    = 218,670 × 0.033716  = $  7,372.66
CPI rent      = 218,670 + 7,372.66  = $226,042.66
2% of that    = 226,042.66 × 0.02   = $  4,520.85
                                      ───────────
Passing rent                          $230,563.51
```

> **"CPI + 2%" has two readings and they differ by $147.45 here.** The
> compounding reading — `218,670 × 1.033716 × 1.02 = $230,563.51` — matches
> the workbook's row ordering, where the 2% line sits *below* the
> CPI-adjusted rent. The additive reading —
> `218,670 × (1 + 0.033716 + 0.02) = $230,416.06` — treats the review as a
> single 5.37% uplift. The gap is small on one year but compounds over a
> six-year lease. Follow the workbook's layout (compounding), and quote
> the lease clause wording if you have it, because the clause governs.

**Tenant 2 — fixed 2.5%:** lease started 29 May 2022, so three
anniversaries have passed by 15 August 2025 (2023, 2024, 2025):

```
49,020 × (1.025)³ = 49,020 × 1.076891 = $52,789.18
```

**Tenant 3 — fixed amount:** lease started 14 July 2022; three
anniversaries have passed:

```
95,590 + (3 × 2,500) = $103,090
```

Note the difference in character: Tenant 2's review **compounds** (2.5% of
a growing base), Tenant 3's is **arithmetic** (a flat $2,500 regardless of
the base). Over ten years those diverge substantially.

> **The workbook compares a June index to a September index, and the
> lecture's own definition says that is wrong.** The Week 3 deck defines a
> CPI review as "dividing a current quarter index figure by the index
> figure for **that quarter** in a previous year" — a June-on-June or
> September-on-September comparison. The workbook's `E17 = Jun-2025` and
> `E18 = Sep-2024` are nine months apart, which understates a full year of
> inflation. The lecture slide makes the same pairing, so it is a
> consistent house convention rather than a one-off slip — but it is
> inconsistent with the definition the same deck gives. Use the pair the
> question supplies, name both quarters, and raise it with your tutor.

### QN4 — Turnover rent

*A restaurant in a mixed-use commercial building pays a base rent of
$78,200 plus 0.25% of average gross turnover. The business had a turnover
of $3,000,000 last financial year.*

```
Step 1 — Turnover rent
    Gross sales        $3,000,000
    Review rate              0.25%
    Turnover rent  =  3,000,000 × 0.0025
                   =  $7,500

Step 2 — Passing rent after review
    Base rent          $78,200
    Turnover rent      $ 7,500
                       ────────
    Passing Rent       $85,700
```

The turnover component is only **8.8%** of the passing rent here — a very
different proposition from the Week 3 lecture's clothing store at 6% of
turnover, where the turnover rent was two-thirds again on top of the base.
A 0.25% rate is a token participation clause, not a real turnover deal.

### QN5 — Future rental values

*Estimate future rental values of an office building generating an NOI of
$638,000 p.a. The tenants have signed a 20-year lease with 10-yearly
upward-only reviews. Rental market analysis indicates future growth of 4%
p.a.*

```
Rent at first review (year 10)
    Initial rent   $638,000
    Term           10 years
    Interest       4%
    Future Value = 638,000 × (1.04)¹⁰
                 = 638,000 × 1.480244
                 = $944,395.85

Rent at second review (year 20)
    Current rent   $638,000
    Term           20 years
    Interest       4%
    Future Value = 638,000 × (1.04)²⁰
                 = 638,000 × 2.191123
                 = $1,397,936.57
```

Note that the second review is computed from the **original** rent over 20
years, not from the year-10 rent over a further 10 — the two are identical
(`944,395.85 × 1.04¹⁰ = 1,397,936.57`) because the growth compounds
either way, but the workbook's template labels row B13 "Current rent",
which invites you to enter $944,395.85 and then compound it a second time
to $2,069,287.60. Enter the **initial** $638,000 with a 20-year term, or the
year-10 rent with a 10-year term — not the year-10 rent with a 20-year
term.

> **A 20-year lease with 10-yearly reviews has one review, not two.** The
> review at year 20 coincides with the expiry, so it never happens — the
> same arithmetic as the Week 3 lecture's 15-year lease with 5-yearly
> reviews, which produces reviews at years 5 and 10 only. The workbook
> asks for two anyway. Compute both because that is what the template
> wants, but add a line noting that the year-20 figure is the rent the
> *renewal* would start at, not a review within the term.

---

## T06 — Mid-Semester Exam Preparation

The tutorial states plainly: **"The following questions mirror the
mid-semester exam. Hence, no work solution will be uploaded."** So these
are the closest thing to a real exam paper in the unit folder, and nobody
has published the answers. Worked below.

Exam scope, from the same tutorial: introduction to investment valuation;
time value of money concepts and calculations (PV, FV, PMT); commercial
leases; capitalisation method Parts A and B; WALE.

### Question 1 — compound growth

*An investor bought a residential plot 15 years ago for $180,000. If
property values in that neighbourhood have appreciated at an annual rate
of 6.2%, what is the current value of the plot?*

```
PV = $180,000
n  = 15
i  = 6.2%

FV = 180,000 × (1.062)¹⁵
   = 180,000 × 2.465289
   = $443,751.93
```

The plot has grown **146.5%** in fifteen years.

### Question 2 — deferred payment

*A developer offers you the option to pay $500,000 today or defer payment
for 7 months. If your money earns 6.8% annual interest compounded monthly,
what is the equivalent deferred payment amount?*

```
i = 6.8% / 12 = 0.566667% per month
n = 7 months

FV = 500,000 × (1 + 0.068/12)⁷
   = 500,000 × 1.040347
   = $520,173.70
```

You would be indifferent between paying $500,000 now and **$520,173.70**
in seven months.

> **Read the direction of travel before you touch the calculator.** This
> question moves money *forward* (what is $500,000 today worth in seven
> months?), so it is an FV. The very similar Question 4 below moves money
> *backward*. Getting the direction wrong here would give
> `500,000 / 1.040347 = $480,608.69`, which is a plausible-looking wrong
> answer worth zero marks.

### Question 3 — sinking fund

*A coastal apartment complex's roof needs full replacement in 20 years due
to saltwater corrosion. The projected replacement cost at that time is
$200,000. What annual contribution to a sinking fund earning 5.75% p.a. is
required?*

```
FV = $200,000
n  = 20
i  = 5.75%

PMT = 200,000 / (((1.0575)²⁰ − 1) / 0.0575)
    = 200,000 / 35.812131
    = $5,584.70 per year
```

Note this is the *whole* fund's contribution. Unlike T03 Question 3, this
question does **not** mention a number of owners, so do not divide.
Compare the two: the same $200,000 over the same 20 years costs $4,618.44
a year at 7.5% but $5,584.70 at 5.75% — a **20.9% higher** contribution
for 175 basis points less return.

### Question 4 — rent reversion (below-the-line adjustment)

*You are valuing a retail property in a suburban shopping precinct. The
tenant pays a passing net rent of $180,000 p.a.; market net rent is
$200,000 p.a. The lease expires in 10 months, after which rent reverts to
market. **Rent is paid at the beginning of the month.** The capitalisation
rate is 7.25%.*

*Calculate the rent reversion (below-the-line adjustment) to reflect the
difference between passing and market rent until lease expiry.*

This is an **under-rented** property, so the adjustment is negative.

```
Step 1 — the shortfall
    Market net rent            $200,000 p.a.
    less Passing net rent      $180,000 p.a.
                               ─────────────
    Shortfall                  $ 20,000 p.a.
                               = $1,666.67 per month

Step 2 — PV the shortfall to lease expiry
    i = 7.25% / 12 = 0.604167% per month
    n = 10 months
    Payments in ADVANCE (annuity due), because rent is paid at the
    beginning of the month

    PV = 1,666.67 × (1 − 1.00604167⁻¹⁰) / 0.00604167 × 1.00604167
       = 1,666.67 × 9.675584 × 1.00604167
       = $16,223.40
```

**The below-the-line adjustment is −$16,223.40.**

For completeness, the full valuation this feeds into:

```
Indicative value = 200,000 / 0.0725     = $2,758,620.69
less rent reversion                     = $   16,223.40
                                          ─────────────
Market value                            = $2,742,397.29
Rounded to the nearest $25,000          = $2,750,000
```

> **"Rent is paid at the beginning of the month" is not scene-setting — it
> is an instruction to use BGN mode, and it is worth $97.43.** In arrears
> the answer is $16,125.97; in advance it is $16,223.40. The examiner put
> that sentence in the question deliberately. Every time a question
> specifies payment timing, it is testing the mode.

### Question 5 — capitalisation

*You are assessing a small office building in a metropolitan fringe area.
The property generates gross rental income of $180,000 p.a., with annual
outgoings of $65,000. Due to market conditions a vacancy factor of 7% is
applied. The assessed capitalisation rate is 7.75%.*

*Calculate the value of the subject property using the capitalisation
method.*

```
Gross rental income                             $180,000
Less: Vacancy @ 7% of gross                     $ 12,600
                                                ─────────
Gross operating income                          $167,400
Less: Outgoings                                 $ 65,000
                                                ─────────
Net operating income                            $102,400

Value = 102,400 / 0.0775
      = $1,321,290.32

Rounded to the nearest $25,000                  $1,325,000
```

> **Apply the vacancy factor to the gross income, not to the net.** Both
> the Week 4 ladder and the Week 3 tutorial's worked retail valuation
> deduct vacancy as a percentage of **gross**. Apply 7% to the net instead
> — `(180,000 − 65,000) × 0.93 = $106,950` — and the value becomes
> `106,950 / 0.0775 = $1,380,000`, **$58,710 too high**. The base you
> apply a percentage to is worth as many marks as the percentage itself.

---

## The running error log

Everything in the unit's own material that a verified calculation
contradicts. None of these have been silently corrected above — each is
flagged where it appears.

| Source | Says | Should be |
|---|---|---|
| Week 2, compound interest example | `1,000 × (1.0083)⁶⁰ = $1,645.31` | $1,642.05 at 0.0083; the published $1,645.31 requires the unrounded `0.10/12` |
| Week 2, Example 1C | monthly `i = 0.458`, `FV = $18,614` | 0.458% gives $18,607.84; $18,614 requires 0.4583% |
| Week 2, Example 4B | `i = 0.52`, `PMT = 416.67`, `FV = $89,031` | Those rounded inputs give $88,972; $89,031 requires exact rates |
| Week 3, CPI example | Question says base rent **$10,000**; the table uses **$1,000** | $10,000 is internally consistent with the 25 m² NLA ($400/m²). Review $337.16, passing rent $10,337.16 |
| Week 3, CPI definition vs example | Definition says compare the same quarter a year apart; example compares Jun-25 with Sep-24 | Nine months, not twelve |
| Week 3, Milton property description | "five tenancy areas ranging from **120 m²**"; "partially leased to **two** third-party tenants"; "WALE (by income) of **3.69 years**" | Schedule's smallest tenancy is 232 m²; there are **four** third-party tenants; the WALE table gives **4.77 by income**, 3.70 by area — 3.69 is the area figure mislabelled |
| Week 3, tenancy schedule | `$/m²` of 578 and 547 | Implied rates are 577.91 and 547.49; do not rebuild rents from the rounded rates |
| Week 5, Year's Purchase table | Milton SP Core value **$1,409,840** | `112,788 / 0.08 = $1,409,850`, confirmed by `112,788 × 12.5` |
| Week 5, incentive example | Effective-rent route gives $937,500; the stated formula gives a $125,000 deduction from $1,250,000 = $1,125,000 | Both are shown; they differ by $187,500 and the deck does not reconcile them. The referenced Excel file is not in the unit folder |
| Week 11, discount rate | "the investor's required rate of return, which **is equal to the risk-free rate**" | Risk-free **plus** risk premium — as the same deck's own 5.41% + 3.5% = 8.91% shows |
| Week 11, period 0 | "the current period is by convention Period '0' and is **not** discounted" | The deck's own NPV table and spreadsheet discount it by one full period |
| Week 11, NPV example | Labels **$100,577** as the Net Present Value | That is the gross PV of inflows. NPV = 100,577 − 86,178 = **$14,399** |
| Week 11, IRR example | Purchase price shown as **$86,177** here and **$86,178** two slides earlier | $1 inconsistency; IRR is 14.00% either way |
| T03 `Book2.xlsx`, Q1 | `=(20000*0.06*3)+20000 = $23,600` | The question asks for interest: **$3,600** |
| T03 `Book2.xlsx`, Q4 | `G3 = PV(8%,2,0,170000)` | The question says $85,000 in 12 months: `PV = $78,703.70` |
| T03 `Book2.xlsx`, Q8 | Both formulas **add** the incentive to the tenant's cost, and use inconsistent payment modes | Incentives should be deducted. Building 2 still wins, but by ~$36,000, not the file's ~$19,500 |
| T05 workbook, QN1 | Car-park column headed `$pa` | Contains a **monthly** figure (bays × $350 pcpm). Annual total is $369,600, not $30,800 |
| T05 workbook, QN5 | Asks for two reviews on a 20-year lease with 10-yearly reviews | Only the year-10 review falls within the term |

Raise the ones that change an answer with your tutor before the exam —
particularly the Q1 wording, the CPI base rent, and which incentive
treatment the unit wants.
