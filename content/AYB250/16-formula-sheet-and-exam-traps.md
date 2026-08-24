# Formula Sheet and Exam Traps

Everything from Weeks 1 to 5 and the Part A technique, on one page. Nothing
here is new — it is the reference version of notes 01 to 09 and the
tutorial solutions in notes 10 to 13.

## Personal financial statements

```
PERSONAL CASH FLOW BUDGET            (a FLOW, over a period)
  Income  − Expenditure  =  Net savings   if positive
                            Deficit       if negative

PERSONAL BALANCE SHEET               (a STOCK, at a point in time)
  Total assets = Total liabilities + Net worth
  Net worth    = Total assets − Total liabilities
```

| Belongs in the budget | Belongs on the balance sheet |
|---|---|
| Annual loan repayments | Outstanding loan balances |
| Personal super contributions | Super fund balances |
| Interest paid on loans | The principal owing |
| Salary after PAYG tax | — |
| — | Employer super (never a cash flow) |

## The four planning ratios

```
                        Net worth
Net worth ratio    =  --------------  × 100        higher is better
                      Total assets

                      Liquid assets
Liquidity ratio    =  --------------  × 100        higher is better
                       Current debt

                          Savings
Savings ratio      =  --------------  × 100        higher is better
                        Net income

                      Annual debt commitments / 12
Debt service ratio = ------------------------------ × 100   LOWER is better
                        Annual net income / 12
```

Definitions that decide the answer:

| Term | Means |
|---|---|
| Liquid assets | Cash, and other assets **quickly converted** into cash |
| Current debt | **Total of all debt repayments for the next twelve months** — a flow, not a balance |
| Savings | Surplus **plus** other forms of saving — investments, extra super contributions |
| Net income | Income **net of tax** — after tax |

### Reference values to check yourself against

| | Lecture case study | Part A case study |
|---|---|---|
| Net worth ratio | 673 000 / 957 000 = **70.3%** | 289 200 / 315 200 = **91.75%** |
| Liquidity | 12 000 / 22 000 = **54.5%** | 57 200 / 10 941.60 = **522.78%** |
| Savings | 13 000 / 123 000 = **10.6%** | 51 778.40 / 150 058.40 = **34.51%** |
| Debt service | 22 000 / 123 000 = **17.9%** | 10 941.60 / 150 058.40 = **7.29%** |

## Time value of money

```
SIMPLE INTEREST
  FV = PV + (PV × i)

  Part year (365-day convention):
  FV = PV + [PV × (i × days/365)]

COMPOUND INTEREST
  FV = PV (1 + i)^n
  PV = FV (1 + i)^(−n)

EFFECTIVE ANNUAL RATE
  i = [1 + (j/m)]^m − 1        j = nominal annual rate
                               m = compounding periods per year
  Periodic rate = j/m

ORDINARY ANNUITY  (payments at the END of each period)
             (1 + i)^n − 1                    1 − (1 + i)^(−n)
  FV = PMT × --------------      PV = PMT × --------------------
                    i                                i

ANNUITY DUE  (payments at the START)
  multiply either result by (1 + i)

NET PRESENT VALUE
  NPV = PV(future cash flows) − Investment today

INTERNAL RATE OF RETURN  (linear interpolation)
                  (r₁ − r₂) × NPV₁
  IRR = r₁ +  -------------------------
                  NPV₂ − NPV₁

REAL RATE OF RETURN  (lecture method)
  real = nominal − tax on the return − inflation
```

### Reference values

```
1 000 at 8% simple                          →  $1 080
1 000 000 at 8% for 90 days                 →  $1 019 726.03
1 000 at 8% compound, 4 years               →  $1 360.49
1 360.49 discounted 4 years at 8%           →  $1 000.00
15% daily / 15.5% quarterly / 16% annual    →  16.18% / 16.42% / 16.00%
1.6% per month                              →  20.98% effective
500 per year, 5 years, 7% — FV / PV         →  $2 875.37 / $2 050.10
−300 then 100 × 4 years at 10%              →  NPV $16.99, IRR 12.59%
                                               (12.7% by interpolation)
```

## 2026-27 rates (from the Part A template)

```
INCOME TAX (resident)
  Lower bound   Base tax    Marginal rate
        0             0        0%
   18 200             0       15%
   45 000         4 020       30%
  135 000        31 020       37%
  190 000        51 370       45%

  tax = base + (income − lower bound) × marginal rate

INCOME TAX (non-resident) — no tax-free threshold
        0             0       30%
  135 000        40 500       37%
  190 000        60 850       45%

MEDICARE LEVY   2% of taxable income
  Shaded in below the individual lower threshold ($28,011) to nil,
  full rate reached at the upper threshold ($35,013). See note 04 for
  the SAPTO / family thresholds.

MEDICARE LEVY SURCHARGE   (no private hospital cover)
  Single       Family       Rate
  105 000      210 000      1.00%
  123 000      246 000      1.25%
  164 000      328 000      1.50%
  Applied to the WHOLE income, not the excess.

HECS-HELP
  Lower bound   Base        Marginal rate
   69 528            0       15%
  129 717        9 028       17%
  186 050            —       10% of TOTAL repayment income  ← a CAP
```

```
Check the base figures reconcile:
  45 000:      0 + (45 000 − 18 200) × 0.15 =  4 020  ✓
 135 000:  4 020 + (135 000 − 45 000) × 0.30 = 31 020  ✓
 190 000: 31 020 + (190 000 − 135 000) × 0.37 = 51 370  ✓
 HELP:      (129 717 − 69 528) × 0.15         =  9 028.35  ✓
 HELP cap crossover: 9 028.35 + 0.17(x − 129 717) = 0.10x
                     →  x = $186 050.57   ✓ matches the table
```

## Deductions, offsets and investment tax (Week 3)

```
STANDARD DEDUCTION (new for 2026-27)
  Up to $1 000, automatic, no records needed.
  Reduced $-for-$ by work-related expenses claimed instead —
  EXCEPT union fees/memberships, which are ALWAYS additional.

TOOLS AND EQUIPMENT
  < $300   → immediate deduction
  ≥ $300   → depreciate over effective life (prime cost or diminishing
             value), work-use proportion only

LOW INCOME TAX OFFSET (LITO)
  Taxable income          Offset
    0 – 37 500            $700
   37 501 – 45 000        $700 − 5c per $1 over 37 500
   45 001 – 66 667        $325 − 1.5c per $1 over 45 000
   above 66 667           $0

FRANKING (IMPUTATION) CREDIT
  credit = dividend received × [company tax rate / (1 − company tax rate)]
  large company (30%):  dividend × 30/70
  small company (25%):  dividend × 25/75
  Partially franked → multiply by the franked percentage.
  The resulting franking tax offset is REFUNDABLE.

CAPITAL GAINS TAX
  Net capital gain = gains − losses (current year + carried forward)
  Held > 12 months:  Discount method — 50% of the gain assessable
                      (individuals only; super funds get 1/3, not 1/2;
                      companies get NO discount)
                      Indexation method — cost base indexed
                      (pre-21-Sept-1999 purchases only)
  Held ≤ 12 months:  entire gain assessable, no concession
  Netting order:      apply losses to NON-discountable gains first,
                       then to the discountable pool BEFORE halving it
  Pre-19-Sept-1985 assets, the main residence, and cars: CGT-exempt

  FROM 1 JULY 2027: the 50% discount is replaced by cost-base indexation
  (tax only the gain above inflation) plus a 30% MINIMUM tax rate on
  gains accruing after that date.

ENTITY TAX RATES
  Companies            30% flat (25% base rate entities)
  Superannuation funds  15% flat
  Trusts / partnerships distributed to members/partners, taxed at
                        their own marginal rate
  Sole traders          taxed as individuals

NEGATIVE GEARING CUTOVER — 7:30pm, 12 May 2026
  Before that time, or a new build → old rules: losses offset ANY income
  After that time, existing property → new rules (from 1 Jul 2027):
    losses only offset OTHER residential property income (rent or
    capital gains), carried forward if unused

SALARY PACKAGING
  Saving = packaged amount × (marginal rate + Medicare levy − 15%
           contributions tax), while within the concessional cap
```

### Reference values

```
Sophie: wages 50 500 + interest 400, deductions 1 150 (standard $1 000 +
        union $150), taxable income 49 750, tax $5 445, Medicare $995,
        LITO $253.75  →  net tax payable $6 186.25
Stanley: wages 45 000 + fully franked dividend 35 000 (large co.)
        → franking credit $15 000, taxable income $95 000,
          net tax payable $5 920
Tobias CGT case study: net capital gain $160 000 (current rules) /
        $141 580 (new rules, indexed) — tax saving under the new
        rules is $6 815.40 either way the tax is then calculated
Jenny negative gearing: weekly deduction $90, $4 680 p.a.
Kristy salary packaging: $20 000 sacrificed to super saves $3 400 in tax
```

## Investments (Week 4)

```
REAL CASH RATE
  real = (1 + nominal)/(1 + inflation) − 1        (ratio, not subtraction)

DISCOUNT SECURITIES  (no coupon — sold below face value)
  Yield for period = (Face value − Purchase price) / Purchase price
  Annualised yield = period yield × 365/days
  Price            = Face value / [1 + (yield × days/365)]

COUPON SECURITIES (BONDS)  — per-period figures throughout
  Price = PMT × [1 − (1+i)^(−n)]/i  +  FV (1+i)^(−n)
  Semi-annual: PMT = FV × coupon/2,  i = required/2,  n = years × 2
  Coupon < required → price BELOW face; coupon > required → ABOVE
  Market rates rise → traded bond prices fall (and vice versa)

PORTFOLIO EXPECTED RETURN  (a weighted average — risk is NOT)
  E(Rp) = w₁E(R₁) + w₂E(R₂) + …
  Correlation −1 → large risk reduction; +1 → none;
  two random shares ≈ +0.5 to +0.7
  Total risk = systematic (undiversifiable, priced by beta)
             + non-systematic (10–30 holdings ≈ eliminates it)

CAPM
  Ri = Rf + βi (Rm − Rf)          market β = 1
  Given the market RETURN, subtract Rf to get the premium first

SHARPE RATIO
  S = (Rp − Rf) / σp              higher = better risk-adjusted return
  Returns from unit prices first: r = (end − start)/start

SHARE VALUATION
  P/E            = price / EPS      forecast price = P/E × expected EPS
  Dividend yield = dividends over the year / share price
  Residual income: value = book value + PV(profit − required return ×
                   opening book equity)   — concept only, no worked example

INVESTOR CLASSIFICATION  (defensive = cash + fixed interest)
  Very conservative  60/30/10  ≤2 yrs    no tolerable loss
  Conservative       20/40/40  2–4 yrs   ≤5%
  Balanced           10/30/60  4–6 yrs   ≤10%
  Aggressive          5/15/80  6–8 yrs   ≤15%
  Very aggressive     5/10/85  8–10 yrs  20%+
  Risk profile = risk required + risk capacity + risk tolerance

BEHAVIOURAL FINANCE
  Loss aversion · Herding · Overconfidence · Biased judgements
```

### Reference values

```
Real cash rate: 4.75% nominal, 2.7% inflation        →  1.996%
180-day, $10 000 face sold at $9 800                 →  2.041% period, 4.14% p.a.
90-day $100 000 bill at 6.6%                         →  $98 398.66
$100 000 2-yr bond, 5% coupon semi, required 6%      →  $98 141.45
55/45 portfolio of 10% and 14% shares                →  E(R) 11.8%
CAPM: Rf 4%, premium 6%, β 0.8 / 1.2                 →  8.8% / 11.2%
Sharpe: A 9.79% ret SD 0.76 / B 22.22% ret SD 0.98   →  8.28 vs 19.1 (B wins)
Term deposit $75 000 at 6.5%, inflation 2.75%        →  $79 875; real gain $2 737.50
```

## Property and leverage (Week 5)

```
RENTAL PROPERTY SCHEDULE  (tax view)
  Net rental = rent − interest − (borrowing costs / 5) − cash expenses
               − depreciation (building 2.5%; fixtures 5–20%)
  Interest deductible; principal repayments NEVER deductible
  CASH view: drop the depreciation and borrowing-cost amortisation

CAPITALISATION APPROACH
  Market value = annual NET income / capitalisation rate
  Cap rate = average of (net income / sale price) across comparables

MORTGAGE / LOAN REPAYMENTS   (annuity PV solved for the payment)
  C = PV / { [1 − (1+i)^(−n)] / i }        i = j/12,  n = years × 12
  Excel: =PMT(rate/12, years*12, -PV)

GEARING RATIO vs LVR   (same numerator, different denominator)
  Gearing ratio = debt / investor's own capital          lower = safer
  LVR           = debt / total investment value          lenders speak LVR

MARGIN LENDING
  Max loan at LVR m with equity E:   L = E × m/(1 − m)
  After market move: LVR = loan / new portfolio value
  Margin call when LVR > maximum (+ 5–10% buffer); 24 hours to fix:
  pay cash into loan / add security / sell down
  Cash to restore LVR m:   x  where  (loan − x)/portfolio = m

GEARED SHARES, AFTER TAX  (the Jason method — note 13)
  Taxable = dividends + franking credits − interest + gain × 50%*
  Tax     = taxable × marginal rate − franking credits (refundable)
  Net $   = dividends − interest + gain − tax
  Net %   = net $ / YOUR equity  (never the total invested)
  *held > 12 months, current rules

NEGATIVE GEARING QUARANTINE (from 1 Jul 2027; note 05)
  Applies to EXISTING residential property bought after 7:30pm
  12 May 2026. New builds: old rules. Shares/margin loans: old rules —
  losses still offset salary.
```

### Reference values

```
Sally's unit: −20 300 tax loss, −2 400 cash, tax saved 6 846,
        after-tax 4 446 better off (old rules); new rules: loss
        quarantined, carried forward
Cap approach: 23 920 income / 0.0846 cap rate      →  $282 742
$500 000, 30 yr, 6.55% monthly                     →  $3 176.80 /month
$200 000, 25 yr, 6.5% monthly (tutorial)           →  $1 350.41 /month;
                                                      interest $205 124
Geared unit: $30 000 equity, $270 000 at 8%        →  +97% or −10% ROC
Matthew: 300 000 invested, 100 000 borrowed        →  gearing 0.5, LVR 33%
Loretta: 50 000 + 75 000 loan (LVR 60%, max 80%)   →  call at −30%
        (LVR 85.7%); $5 000 into loan restores 80%
Jason (note 13): 8%/6%f/4%: 8.45 → 12.02 → 40.57% as equity 100→50→10%
        9%/5%f/2%: 5.97 → 6.44 → 10.26% (tax-driven — pre-tax negative)
```

## Week 1 in one table

| | |
|---|---|
| **Definition** | Holistic process; total position, financial **and non-financial**; plan to meet the client's ultimate goals |
| **Nine areas** | Legal/ethical framework, tax, investments, credit, risk & insurance, super & retirement, social security, estate planning, plan construction |
| **Origin** | Funds management (mid-1970s US / mid-1980s Aus); first advisers came from **life insurance**, sales-driven and commission-based |
| **FOFA (2011)** | Ban on conflicted remuneration · opt-in · annual fee disclosure · best interests duty |
| **Four growth drivers** | Ageing population · longevity · pension de-emphasis + super emphasis · low financial literacy |
| **Key numbers** | 6 → 2.7 workers per retiree by 2050 · SG 3% (1992) → 12% now · ~35% of Australians get all Big 3 right |
| **Theory** | Modigliani's life-cycle hypothesis — smooth consumption and saving over a lifetime |

### The five regulators

| | Owns |
|---|---|
| **ASIC** | Financial advice (primary), Corporations Act, misleading conduct in advice, adviser registers |
| **ATO** | **SMSFs**, tax aspects of planning |
| **APRA** | Banks, insurers, **non-SMSF** super — prudential soundness |
| **ACCC** | Competition, misleading advertising |
| **AUSTRAC** | AML/CTF, customer identification, suspicious transactions |

### The section numbers

| | |
|---|---|
| **s 911A** | AFSL required unless exempt (legal advice, tax agents, media) |
| **s 766A** | Financial *service* — eight listed activities |
| **s 763A** | Financial *product* — a facility to invest, manage risk, or make non-cash payments |
| **s 942C** | FSG — retail client, financial services |
| **s 946A** | SoA — **personal** advice to a retail client |
| **s 947B** | SoA content; **s 947B(6)** "clear, concise and effective" |
| **s 961B** | Best interests duty — six limbs |
| **Pt 7.6 Div 5** | Authorised representatives; **the licensee stays liable** |

## The traps, ranked by how much they cost

### 1. Flow versus stock

Current debt is **twelve months of repayments**. The balance sheet's
outstanding balances are a different number answering a different question.
In the lecture's case study the annual repayment flow ($22,000) and the
car-loan balance ($22,000) are identical by coincidence — get the reasoning
right, not just the number.

### 2. Cutting gross income without recomputing tax

A 20% cut to a $92,000 salary removes $18,400 of gross pay but only $636 a
month of household surplus, because income tax, the Medicare levy, the
surcharge and the HECS repayment all fall with it — and in the Part A case
the whole household drops below the family MLS threshold. If your stress
test shows the surplus falling by the full gross amount, you have hard-coded
something.

### 3. Mixing periodic and effective rates

```
Per-period working:  i = j/m               n = years × m
Annual working:      i = (1 + j/m)^m − 1   n = years
```

Both are right. Using the effective annual rate with a period count is not.
The Week 2 slide that calls `[1 + (j/m)]^m − 1` "the periodic (effective)
rate" is mislabelled — it is the effective **annual** rate.

### 4. Applying a marginal rate to the whole income

HECS at 15% applies to income **above** $69,528, not to all of it —
`92 000 × 0.15 = $13,800` is wrong by a factor of four against the correct
$3,370.80. The exception is the **$186,050 cap**, which genuinely does apply
10% to the whole repayment income. Two rules, opposite behaviour; know which
band you are in.

The Medicare levy surcharge is the other whole-of-income charge: 1% of
$120,000 is $1,200, not 1% of the amount over $105,000.

### 5. Nominal ranking ≠ effective ranking

15% daily (16.18%) beats 16% annual (16.00%). The lender quoting the highest
nominal rate can be the cheapest. Always convert to effective before
comparing.

### 6. Adding future values struck at different dates

Two-stage savings problems: the first annuity's FV lands at the end of stage
one and must be compounded forward as a lump sum before it can be added to
the second. Skipping that step in the worked example in note 15 costs
$3,813 on a $34,817 answer.

### 7. Annuity timing

The formulas assume payments at the **end** of the period. Payments at the
start earn one extra period — multiply by `(1 + i)`. On $1,200 a year for 10
years at 6% that is $15,816.95 versus $16,765.97.

### 8. Interpolated IRR overstates

The NPV curve is convex, so a straight line between two points sits above
it. The lecture's own example: 12.7% interpolated, 12.59% true. Use the
prescribed method, but name the limitation if asked to comment.

### 9. Unnamed percentage bases

Every percentage needs its base stated. The Part A rent line is 39.68% of
total expenses, 18.40% of gross income, and 25.99% of net income. All three
are correct arithmetic; only one answers the question.

### 10. The `/12` that cancels

The debt service ratio's monthly form gives exactly the same answer as the
annual form, because both sides are divided by 12. Where it bites is when
only *one* side is monthly — then the answer is out by a factor of 12.

### 11. Simple is not compound

"Simple interest at 8% for 3 years" is `1 000 × (1 + 0.08 × 3) = $1,240`,
not `1 000 × 1.08³`. And part-year simple interest uses **365 days**.

### 12. ATO versus APRA on superannuation

SMSFs are the **ATO**. Everything else super is **APRA**. This is the most
likely single-mark regulatory question in the unit.

### 13. Union fees pulled into the standard-deduction comparison

The new $1,000 standard deduction excludes union fees and memberships —
they're always additional. Comparing *all* work expenses (including union
fees) against the $1,000 cap, instead of comparing non-union expenses only
and then adding union fees back on top, is easy to get backwards. Sophie's
worked example in note 04 turns entirely on this.

### 14. Franking credits skip the taxable-income line

The credit is added to assessable income and taxed at the marginal rate
*before* being subtracted back out as a refundable offset — it isn't just
tacked onto the final tax bill. Forgetting to gross up taxable income by
the credit understates every number downstream, including the Medicare
levy (which is calculated on the grossed-up taxable income, not the cash
dividend received).

### 15. CGT netting order: losses before the discount, not after

Apply capital losses to non-discountable gains first, then any remainder
to the discountable pool — **then** halve the net remaining discountable
gain. Halving each discountable gain individually before netting the loss
against it overstates the concession. Tobias's case study in note 05 is
built around this exact trap.

### 16. Super's CGT discount is one-third, not one-half

Every other structure that gets a CGT concession at all gets 50%.
Superannuation funds, already taxed at a flat 15%, get a **one-third**
discount instead. Companies get no CGT concession at all outside
small-business rules.

### 17. Whole-of-income tax applied where marginal tax was meant

A capital gain (or any income) taxed at "the marginal rate" only equals
`gain × rate` when other income has already filled every bracket below it.
With no other income, the correct figure comes from the full marginal
formula — `base + (income − lower bound) × rate` — not the top rate
applied flat to the whole amount. See the flagged issue on Tobias's tax
payable in note 05: the gap is a fixed $18,930, regardless of which CGT
regime applies.

### 18. CAPM: premium versus market return

`Ri = Rf + β(Rm − Rf)` wants the **premium**. "Market risk premium is 6%"
goes straight in; "the market return is 10%" must have Rf subtracted
first. With Rf 4%, β 0.8: the right answer is 8.8% either way — but only
if you notice which number you were given. Plugging a 10% market *return*
in as the premium gives 12%.

### 19. Discount-security yield divides by the price, not the face value

The $10,000/$9,800 security yields `200/9 800 = 2.041%`, not
`200/10 000 = 2.00%`. The return is earned on what you paid. Same
convention as every rate in this unit: the base is the money at risk.

### 20. Bond pricing halves everything except the face value

Semi-annual bond: coupon ÷ 2, required rate ÷ 2, years × 2 — face value
untouched. Mixing an annual rate with semi-annual periods (or vice versa)
is trap 3 wearing a bond costume, and the numbers look plausible either
way, so check the period count first.

### 21. Gearing ratio ≠ LVR

Same debt, different denominator: gearing divides by **your own capital**,
LVR by the **total investment**. Matthew's $100,000 loan on a $300,000
investment is gearing 0.5 but LVR 33%. Lender maximums and margin-call
triggers are always LVR.

### 22. Three different "returns" on one property

Nerida's unit (note 13): 5% gross yield, 3.85% net of costs, 2.35% after
tax — negative once geared. All four describe the same property in the
same year. Name the base and the stage, or the marker can't tell you knew
the difference.

### 23. The 2027 quarantine catches property, not shares

From 1 July 2027, negative-gearing losses are quarantined only for
**existing residential property bought after 7:30pm 12 May 2026**. New
builds keep the old rules, and geared **share** portfolios (margin loans)
keep offsetting salary entirely. Applying the quarantine to a share
question — or missing it on a post-cutover property question — flips the
whole answer. Two dates, two jobs: 12 May 2026 decides *which* properties;
1 July 2027 decides *when* it starts.

## Reconciliation checks to run on any answer

```
□ Balance sheet:  assets − liabilities = net worth
□ Column totals:  every subtotal against its own components
□ Ratio pairs:    net worth ratio + (liabilities / assets) = 100%
□ Annuity FV:     must EXCEED the sum of the payments
□ Annuity PV:     must be LESS than the sum of the payments
□ Percentages:    a "% of total" column must sum to exactly 100%
□ Any figure appearing twice: does the summary match the detail?
□ Every percentage: recompute it, and name the base
```

## Errors in the source material

Four things in the Week 2 deck, three in the Week 3 deck, one in the Week
5 deck and two in the Tutorial 2 answer slides do not survive checking.
All are detailed in notes 02, 03, 04, 05, 08 and 10; confirm each with
your tutor.

| Slide | Says | Should be |
|---|---|---|
| Wk2, 58 (footnote) | Inflation rate = 5% p.a. | The table subtracts **4.0%** and is internally consistent; the footnote is wrong. At 5% inflation every bracket goes negative: −0.90, −1.60, −1.95 and −2.35 |
| Wk2, 31 | FV = $1,360.50 | **$1,360.49** — exact value $1,360.4890, matching the year-by-year table on slide 29 |
| Wk2, 34 | `[1 + (j/m)]^m − 1` is "the periodic (effective) interest rate" | It is the effective **annual** rate. The periodic rate is `j/m` |
| Wk2, 55 | IRR = 12.7% | **12.59%** is the true IRR. 12.7% is what linear interpolation gives, and interpolation overstates |
| Wk3, 29 | Sophie's total tax = "$5,490 + $998 = $6,488" | Doesn't match the deck's own line items: tax $5,445 + Medicare $995 = **$6,440** |
| Wk3, 32 | LITO working shows `4 750 × 0.015 = $71.20`, then final net tax payable "$6,186.23" | $4,750 × 0.015 = **$71.25** (the stated LITO of $253.75 actually uses the correct $71.25). Net tax payable is **$6,186.25**, not $6,186.23 |
| Wk3, 52 | Tobias's CGT "tax payable" = net gain × 37% flat, with "no other income" assumed | With genuinely no other income, the progressive scale gives **$40,270** (current rules) and **$33,454.60** (new rules) — not $59,200 / $52,385. The tax **saving** between old and new rules ($6,815.40) is identical either way |
| Wk5, 30 | $500,000 / 30 yr / 6.55% monthly = "around $3,174" per month | The formula the slide itself quotes gives **$3,176.80** |
| Tut2 slides, 7 | Casey's expense list shows "Car expenses $855"; total expenses "$58,950" | Car expenses are **$650** per the question data (855 is the petrol figure, listed twice); the correct total is **$58,960**. The slide's own surplus, $8,395, is only consistent with the corrected figures |
| Tut2 workbook | Option 2's NPV formulas reference Option 1's rate cell (`$B$8`), not Option 2's own (`$B$17`) | Right answer only because both cells hold 10% — repoint before changing either rate |

Not an error, though it looks like one: the fourth row of the HECS-HELP
table ($186,050 / 10% / "Total income") is a genuine **cap**, and the
crossover arithmetic above proves it.

## What this sheet does not cover

Weeks 6 onwards. Weeks 4 and 5 (investments, portfolio theory, property
and leverage) are now covered in notes 06–09 and their tutorials in notes
12–13. Insurance, superannuation, social security, estate planning and
plan construction are all in the Week 1 list of what a planner must know,
and none of them have been lectured yet — Week 5's own closing slide says
the next topic is **risk management and insurance**. Add to this sheet as
those weeks land.
