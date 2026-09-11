# Topic 5 — Property Investment

Week 5, first half. Source: `AYB250 Week 5.pptx`, slides 3–30. Reading:
Chapters 5 and 6. The leveraged-investing half of the same deck is note 09.

Covers the forms of property investment, the tax treatment of an
investment property (a full negative-gearing worked example on the 2026-27
scale), property valuation methods, home ownership versus renting, and
mortgage repayments. Every worked figure was recomputed in Python — the
deck's rental-property case study reconciles exactly; one repayment figure
is slightly off and flagged below.

## The property asset class

Sub-classes:

| Sub-class | Examples |
|---|---|
| Residential | Units, houses |
| Commercial | Offices, retail, industrial |
| Alternative (industrial/social infrastructure) | Aged care, child care, data centres, self storage, service stations |
| Agribusiness | Land/marine and growing/harvesting operations |

### Characteristics

- Solid, tangible; **land is scarce**
- Generally **illiquid**
- Returns are both **income and capital growth**
- Entry and exit costs may be high; management and maintenance can be expensive
- **High level of gearing possible**
- Taxation advantages
- Prices less volatile than shares
- Property cycles don't necessarily coincide with the share market — **diversification**

### Direct vs indirect

```
Direct:    your own name (or related entity, e.g. a trust) on the title

Indirect:  listed real estate investment trusts (REITs)
           unlisted property trusts
           property securities funds
           mortgage funds
           mixed funds
           private property syndicates
```

**Residential** property has risen strongly since the early 2000s —
scarcity, infrastructure, availability of finance, negative gearing and
immigration policy, and encouragement of higher-density housing.

**Commercial** property is largely institutional (large capital required),
offers **higher yields than residential**, and its income security depends
on the **length and quality of the lease** — the risk is the tenant
ceasing to trade or not renewing.

## Taxation of an investment property

The rules (all on top of the Week 3 framework in notes 04–05):

- **Capital gains** are discounted if held over a year — until **1 July
  2027**, when the discount is replaced by an indexed cost base and a
  minimum 30% rate (note 05).
- **Loan interest** is deductible — **loan principal repayments are not**.
- **Borrowing costs** are deducted **over 5 years**.
- **Depreciation**: building generally **2.5%** of cost; fixtures and
  fittings **5–20%** per ATO rules.
- Other deductions: rates, insurance, agent fees, repairs.
- **Negative gearing** — losses offset other taxable income, but this
  changes from 1 July 2027 (below, and note 05).

### Worked example — Sally's unit (the deck's case study)

Sally buys a unit for $500,000 plus stamp duty and legal fees of $26,800.
She borrows $400,000 **interest-only** at 4.5% p.a., with borrowing costs
of $2,000. Rent is $2,300/month. Expenses (rates, repairs) are $12,000 for
the year. Her depreciation schedule shows building $12,500 and fixtures &
fittings $5,000.

**Step 1 — the rental property schedule:**

```
Rental income          2 300 × 12                     $ 27 600

Less deductions
  Loan interest        400 000 × 4.5%                 ($18 000)
  Borrowing costs      2 000 / 5 years                ($   400)
  Rates and repairs                                   ($12 000)
  Depreciation — building                             ($12 500)
  Depreciation — fixtures & fittings                  ($ 5 000)
                                                      ---------
NET RENTAL LOSS                                       ($20 300)
```

**Step 2 — impact on tax payable** (salary $140,000, 2026-27 scale):

| | Without property | With property |
|---|---|---|
| Salaried income | $140,000 | $140,000 |
| Net rental loss | — | ($20,300) |
| Taxable income | $140,000 | $119,700 |
| Income tax | ($32,870) | ($26,430) |
| Medicare levy | ($2,800) | ($2,394) |
| **Total tax payable** | **$35,670** | **$28,824** |

```
Tax saving from negative gearing = 35 670 − 28 824 = $6 846

Check: tax on 140 000 = 31 020 + 0.37 × (140 000 − 135 000) = 32 870  ✓
       tax on 119 700 =  4 020 + 0.30 × (119 700 −  45 000) = 26 430  ✓
```

Verified exactly.

**Step 3 — but what about actual cash flow?** Depreciation and the
amortised borrowing costs are deductions, not cash out the door this year:

```
Net CASH from rental = 27 600 − 18 000 − 12 000 = −$2 400

                            Without         With
Net cash before tax         140 000        137 600
Income tax                 (32 870)       (26 430)
Medicare levy               (2 800)        (2 394)
                           --------       --------
Net cash after tax          104 330        108 776     → $4 446 better off
```

Verified exactly.

> **The property loses $20,300 on paper but only $2,400 in cash — and
> after tax Sally is $4,446 ahead.** The gap is the $17,900 of non-cash
> deductions (depreciation $17,500 + amortised borrowing costs $400)
> plus the tax saved. This paper-loss/cash-flow distinction is the entire
> economics of negative gearing, and the deck deliberately shows all three
> tables. Know which of the three questions is being asked: taxable
> income, tax payable, or cash position.

**Step 4 — under the new rules.** For a property subject to the post-
**1 July 2027** regime (bought after 7:30pm, 12 May 2026, and not a new
build — note 05), the loss is **quarantined**:

| | Without property | With property |
|---|---|---|
| Taxable income | $140,000 | $140,000 (loss quarantined) |
| Total tax payable | $35,670 | $35,670 |
| Rental loss carried forward | — | $20,300 |

The $20,300 doesn't vanish — it carries forward against future
**residential property income** (rent or capital gains) — but the $6,846
annual tax subsidy from salary is gone, and the year's cash position is
correspondingly worse.

### Tax advantages of property funds

Unlisted property trusts pay regular (usually quarterly) distributions,
often substantially **tax-deferred** — income sheltered from tax until the
property is sold. On disposal, the aggregate tax-deferred income
**reduces the cost base**, likely producing a higher capital gain. Super
funds particularly benefit: in pension phase they pay **no tax on capital
gains** at all.

> **Tax-deferred is not tax-free.** The deferred income comes back as a
> bigger capital gain via the reduced cost base — the benefit is timing
> (and possibly a concessional CGT rate), not exemption. The exception
> that makes it genuinely free is a super fund in pension phase.

## Valuing property

Property valuation differs from shares and bonds: every property is
unique, terms of sale vary, projected yields and growth are imperfect,
sales are infrequent, external shocks hit hard and fast, and "actual"
value may not match what someone will pay.

Three methods to estimate market value:

```
1. COST approach              cost of building the property at current prices
2. DIRECT COMPARISON          compare with sale prices of similar properties
3. CAPITALISATION approach    Market value = Annual net income
                                             ------------------
                                             Capitalisation rate
```

The **capitalisation rate** is the average rate of return — net income ÷
sale price — of similar properties.

### Worked example — pricing a unit from comparables

Recent sales in the same building:

| Unit | Net income | Sale price | Rate of return |
|---|---|---|---|
| 8 | $20,800 | $243,000 | 0.0856 |
| 31 | $26,000 | $315,000 | 0.0825 |
| 14 | $21,840 | $255,000 | 0.0857 |
| | | **Average** | **0.0846** |

Your unit has a tenant on a 12-month lease at $460/week = $23,920 p.a.:

```
Market value = 23 920 / 0.0846 = $282 742
```

Verified — each comparable's rate and the average reconcile exactly
(0.08560, 0.08254, 0.08565 → mean 0.08460), and the division gives
$282,742.32.

> **The cap rate divides, so small rate changes move the answer a lot —
> and the income must be NET.** At an 0.0825 cap rate the same unit is
> "worth" $289,939; at 0.0857, $279,113 — a $10,800 spread from the range
> within one building. And feeding *gross* rent into a cap rate derived
> from *net* incomes overstates value; match the definition used to build
> the rate.

### NPV analysis

The alternative to the cap approach: estimate future rental cash flows and
the future sale price, discount them at a chosen rate (Week 2's NPV
machinery, note 03), and compare the result against the outlay required —
or against an alternative investment.

## Housing affordability, and rent vs buy

From the deck (Domain House Price Report, June 2026): Australia has one of
the world's most unaffordable housing markets — national capital-city
median house price **$1,276,413**; Sydney median house **$1,733,891** and
unit **$849,068**, both records.

Financial modelling shows **little long-term difference** between a
mortgage and renting-plus-investing-the-difference. The RBA's view, quoted
on the slide: if house price growth is slower than the historical average,
the average home buyer would be financially better off renting. Individual
circumstances vary.

### Owning your own home

| Advantages | Disadvantages |
|---|---|
| Locational and financial stability | Long-term planning required |
| Disciplined saving; a useful asset base | Lacks diversification; illiquid |
| Personal freedom | High transaction costs |
| Taxation concessions (main-residence CGT exemption — note 05) | Opportunity cost |
| | Requires a large deposit |

### Financing a purchase

- Deposit generally **20%**, plus stamp (transfer) duty and legal fees
- Borrowing above 80% attracts **lenders mortgage insurance (LMI)** —
  sometimes capitalisable into the loan
- Match financial capacity to borrowings; shop around or use a broker

Loan types: standard variable vs fixed; combination fixed/variable;
introductory "honeymoon" and capped loans; interest-only; equity release;
home equity conversion (reverse mortgage); second mortgage.

### Mortgage repayments

The repayment formula is Week 2's annuity PV formula solved for the
payment:

```
              PV
C  =  ---------------------          i = rate per period
      [1 − (1 + i)^(−n)] / i         n = number of periods
```

**Worked example** (deck): $500,000 over 30 years at 6.55% compounded
monthly.

```
i = 0.0655 / 12 = 0.00545833          n = 30 × 12 = 360

C = 500 000 / {[1 − (1.00545833)^(−360)] / 0.00545833}
  = $3 176.80 per month
```

> **Flagged: the slide says "around $3,174 per month"; the formula it
> quotes gives $3,176.80.** The gap is only a few dollars and the slide
> hedges with "around", but if you reproduce the calculation in an exam,
> show $3,176.80 — that is what the arithmetic yields (verified in
> Python, and consistent with the Moneysmart calculator the slide links).
> The tutorial's 25-year version of this calculation is worked in note 17.

## Checkpoint

<details><summary>Questions</summary>

1. An investor's rental property earns $31,200 rent with cash expenses of
   $9,000, interest of $24,000, and depreciation of $11,000. What are (a)
   the net rental result for tax and (b) the net cash flow before tax?
2. Using the schedule in Q1, the owner earns a $120,000 salary and bought
   the property in 2024. By how much does the property cut their 2026-27
   tax bill (including Medicare levy)?
3. Comparable units sell on net incomes of $18,000/$250,000 and
   $22,000/$300,000. Value a unit with net income of $20,500.
4. Why can commercial property income be both more secure and more risky
   than residential?
5. What are the repayments on $350,000 over 25 years at 6% compounded
   monthly?
6. A property trust distribution is 60% tax-deferred. What happens to
   that deferred amount when the investor eventually sells their units?

</details>

<details><summary>Answers</summary>

1. ```
   (a) Tax:  31 200 − 9 000 − 24 000 − 11 000 = −$12 800 net rental loss
   (b) Cash: 31 200 − 9 000 − 24 000          = −$1 800 out of pocket
   ```
2. ```
   Bought 2024 → old rules; loss offsets salary.
   Taxable income falls 120 000 → 107 200
   Tax:      4 020 + 0.30 × (120 000 − 45 000) = 26 520
             4 020 + 0.30 × (107 200 − 45 000) = 22 680
   Medicare: 2 400 → 2 144
   Saving = (26 520 + 2 400) − (22 680 + 2 144) = $4 096
   ```
   (= 12 800 × 32%, her marginal rate + Medicare.)
3. ```
   Cap rates: 18 000/250 000 = 0.0720;  22 000/300 000 = 0.0733
   Average = 0.07267
   Value  = 20 500 / 0.07267 = $282 110  (≈ $282 000)
   ```
4. The lease makes it secure — long leases to quality tenants lock income
   in for years. The same concentration makes it risky: one tenant ceasing
   to trade or not renewing can zero the income entirely.
5. ```
   i = 0.06/12 = 0.005    n = 300
   C = 350 000 / {[1 − 1.005^(−300)]/0.005} = $2 255.05 per month
   ```
6. It reduces the **cost base** of the units, so the capital gain on sale
   is larger by the total deferred amount — deferral, not exemption.

</details>

## Summary

- Property: residential, commercial, alternative, agribusiness — direct
  (on title) or indirect (REITs, unlisted trusts, property securities,
  mortgage funds, syndicates). Tangible, illiquid, high entry/exit costs,
  highly gearable, tax-advantaged, diversifying against shares.
- Tax deductions: loan **interest** (never principal), borrowing costs
  over **5 years**, building depreciation **2.5%**, fixtures **5–20%**,
  plus rates, insurance, agent fees, repairs.
- Sally's case: $20,300 paper loss, $2,400 cash loss, $6,846 tax saved,
  $4,446 better off after tax — until the post-2027 quarantine regime
  makes the same purchase (if made after 12 May 2026) carry its loss
  forward instead.
- Valuation: cost, direct comparison, capitalisation
  (`value = net income / cap rate`, cap rate from comparables) — plus NPV
  analysis using Week 2 machinery.
- Rent vs buy is closer than folklore suggests (RBA: slower-than-history
  price growth favours renting); owning trades diversification, liquidity
  and transaction costs for stability, forced saving and the
  main-residence CGT exemption.
- Repayments: `C = PV / {[1 − (1+i)^(−n)]/i}` with monthly i and n —
  $500,000 / 30 yr / 6.55% = **$3,176.80**/month (slide's "$3,174" is
  slightly off).
