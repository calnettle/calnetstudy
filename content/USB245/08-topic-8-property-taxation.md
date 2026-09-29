# TOPIC 8 — Property Taxation

<!-- notation:start -->
<details class="notation"><summary>Notation key — what the symbols in this note mean</summary>

| Symbol | Means |
|---|---|
| `CPI` | Consumer price index — the inflation measure used for rent reviews |
| `DCF` | Discounted cash flow — the model: forecast the cashflows, discount them to today |
| `CGT` | Capital gains tax |

[Full USB245 notation key →](#/USB245/99-notation-key)

</details>
<!-- notation:end -->

The last layer. Weeks 2–6 built a **before-tax, before-finance** cashflow;
Week 7 added finance; Weeks 8 and 9 add tax. The lecture's own grid says it
best:

| | Property only | With borrowings |
|---|---|---|
| **Before tax** | **1.** Net rental income and resale proceeds | **2.** Net rent less loan payments; resale proceeds less outstanding loan |
| **After tax** | **3.** Net rental income after depreciation and income tax; resale proceeds after capital gains tax | **4.** Net rent less loan payments **and** income tax; resale proceeds less outstanding loan **and** capital gains tax |
| **Remember to include** | Depreciation, CGT, income tax | Mortgage duty, establishment fees |

Quadrant 4 is where the unit lands, and it is what A2 asks for. Why bother?
Because after-tax cashflow "is a more holistic approach to investment
analysis" — and because, as the lecture drily notes, the tax return is
"what makes negative gearing and rental houses so attractive".

Reading: Compton (2008) *Rental Property and Taxation*; Rowland Chapter 5.

> **Tax rules change constantly, and this deck is dated.** The lecture's
> own closing slide says so: *"Tax is complicated! Tax rules change (… all
> the time)."* The May 2026 Federal Budget announcements in §16.4 are
> announcements, not enacted law. Check the ATO before relying on any rate
> in this note outside an exam.

## 16.1 Why Tax Matters

Two reasons, and they are symmetrical:

**Not all properties are taxed the same way** — rental income versus
capital gain, different depreciation allowances, recapture on resale,
different after-tax leverage.

**Not all owners are taxed the same way** — different rates, different
offsets, different treatment of losses, different ownership entities, and
whether the entity passes income through or pays tax itself.

So two investors can bid on the same building, model the same rents, and
rationally arrive at different maximum prices. That is the whole point.

## 16.2 The Tax Calculation

Learn this ladder. Every tax question in the unit is a step on it:

```
    Assessable income
  − deductions
  ─────────────────────
  = Taxable income
  × marginal tax rate
  ─────────────────────
  = Basic tax payable
  − tax offsets
  ─────────────────────
  = Tax payable
```

> **Deductions and offsets are not the same thing and are not worth the
> same.** A **deduction** reduces *taxable income* — it is worth your
> marginal rate (a $1,000 deduction saves $300 at 30%). An **offset**
> reduces *tax payable* — it is worth its full face value (a $1,000 offset
> saves $1,000). They enter the ladder at different rungs. Swapping them is
> a guaranteed lost mark.

Tax payable on a property can be calculated two ways: by treating the
property as a **separate investment**, or as the **difference between the
tax paid with and without the property**. The second is what actually
happens to an investor's return; the first is what a DCF usually models.

### Rates

| Entity | Rate |
|---|---|
| **Individuals** | Marginal rates — progressive ATO scale |
| **Companies (full rate)** | **30%** |
| **Base rate entities** | **25%** from FY2021–22 |

A company is a **base rate entity** for a year if *both*: aggregated
turnover for that year is below the threshold, **and** no more than **80%**
of its assessable income that year is **base rate entity passive income**.
Prior years' turnover is irrelevant to the current year's test.

Base rate entity passive income includes: corporate distributions and their
franking credits; **royalties and rent**; interest income (with
exceptions); gains on qualifying securities; net capital gains; and
partnership or trust amounts traceable to any of the above.

> **Read the second limb against a property company.** Rent *is* passive
> income. A company whose income is overwhelmingly rent will typically fail
> the 80% test and pay the **full 30%**, not 25% — which is exactly the
> assumption the Week 9 after-tax DCF makes. Don't reach for 25% just
> because the entity is small.

## 16.3 Assessable Income from Property

Two sources, and they are taxed differently:

```
   Rental income  ┐
                  ├──►  Assessable income
   Capital gain   ┘
```

**Rental income** = all rent and other recurrent lease payments.

**Capital gain (or loss)** = the difference between what it cost you to
acquire the asset and what you receive when you dispose of it. Capital
gains tax "is not a separate tax, just part of your income tax" — it is
added to other taxable income **in the year the gain is realised**.

That last point matters in a DCF: the entire capital gain lands in the
final year, on top of that year's rental income, often pushing the
investor into a different marginal bracket.

## 16.4 Capital Gains Tax

### Cost base

```
   Acquisition price
 + acquisition costs          (stamp duty, settlement fees, inspection fees)
 + capital expenditure        (capex that enhances the property's value)
 − building allowances        (if acquired after 13 May 1997)
 ─────────────────────────────
 = CGT cost base
```

### The gain

```
   Resale price
 − selling costs
 − cost base
 ─────────────────
 = Capital gain
 − indexation or discount
 ─────────────────
 = Taxable gain, added to other taxable income in the year realised
```

> **Depreciation is claimed twice — once as a deduction, once back as a
> larger gain.** Building allowances reduce your taxable income each year
> *and* reduce the cost base, which increases the capital gain on sale. The
> benefit is a **deferral**, not a free deduction: you get the deduction at
> your marginal rate now and pay it back at the (possibly discounted)
> capital gains rate later. That timing difference is real value, but it is
> not the same as the deduction being free. Note also that **only the
> building allowance reduces the cost base** — plant and equipment
> depreciation does not; plant is handled by a balancing adjustment.

### Acquisition date rules

| Acquired | Treatment |
|---|---|
| Before **20 September 1985** | **No capital gains tax** |
| 20 Sep 1985 – 1999 | Either the indexation **or** the discount method |
| After **11.45am (ACT legal time) on 21 September 1999** | **Must use the discount method** |

### The discount

| Method | How it works |
|---|---|
| **Indexation** | Index the cost base by CPI. Not currently used; relevant only for pre-1999 assets. Applies to each cost base element **other than non-capital costs of ownership** |
| **Discount** | A flat-rate reduction of the gross gain |

| Entity | Discount |
|---|---|
| Individuals and trusts | **50%** |
| Complying superannuation funds and eligible life insurance companies | **33⅓%** |
| **Companies** | **Nil** |

The discount method also requires that you held the asset **at least 12
months** before the CGT event — and the workbook is emphatic that *exactly*
one year is **not** long enough.

> **Companies get no CGT discount.** This is the counterweight to the flat
> 30% rate, and it is the reason entity choice is a genuine decision rather
> than a formality. An individual on the top marginal rate pays 47% on half
> the gain (effectively ~23.5%); a company pays 30% on all of it.

### The May 2026 Budget announcements

On **12 May 2026** the Government announced it would reform negative
gearing and CGT. **From 1 July 2027:**

- Limit **negative gearing** for residential property investments to **new
  builds**.
- **Replace the 50% CGT discount** for individuals, trusts and partnerships
  with **cost base indexation**.
- A **30% minimum tax rate** on capital gains accruing after 1 July 2027,
  with **no grandfathering**.

> **Announced, not legislated — and the deck's own workbook headings say
> so.** The Week 9 CGT sheet is titled "*applicable pre-May 2026 Federal
> Budget*". For exam purposes: use the **current** (50% discount) rules
> unless a question explicitly dates itself after 1 July 2027, and *say*
> that you are doing so. Mentioning the announced reform in a written
> answer is worth a mark; applying it to a present-day valuation is not.

### Capital losses

A capital loss arises where the net sale price is **less than** the cost
base.

- Capital losses can **only** be offset against **capital gains** — not
  against rental or salary income.
- They can be **carried forward indefinitely**.

> **Revenue losses and capital losses are ring-fenced differently.** An
> ordinary tax loss (deductions exceeding assessable income) carries
> forward against *future taxable income of any kind*. A **capital** loss
> carries forward only against *future capital gains*. Same word, different
> rule.

## 16.5 Deductions

The general test: **expenses incurred in producing assessable income,
provided they are not capital, private or domestic.** Claimable when
incurred (due to be paid), or prepaid for the following year, or where they
are "properly referable" to the year of claim — the last being the test for
businesses.

The catalogue: statutory charges, insurance, fuel, management charges, and
the big three below.

### Loan interest

Deductible **provided the money is borrowed to produce assessable income**
— "in the not too distant future".

**Negative gearing** generally means loan interest exceeds net income, or
more broadly that rental property deductions exceed assessable rental
income, so that **the tax loss shelters the investor's other income from
tax**.

**Borrowing expenses** (establishment fees and the like — distinct from
interest) are deductible over the **shorter of the loan period or five
years**.

### Repairs and maintenance

Deductible — but the lecture defines it by what it is **not**:

- **Not** renewals or improvements (generally depreciable instead).
- **Not** initial repairs to make the property fit to rent.
- **Not** payments into sinking funds **until spent**.
- **Not** capital expenditure.

By contrast, **capex** is: the renewal of material different from the
original; work that is effectively an improvement; anything that increases
the value of the asset; or expenditure to reduce the likelihood of further
repair.

> **"Initial repairs" is the classic trap.** Fixing a rotten deck the month
> after settlement is **not** deductible, even though fixing the same deck
> three years later is. The defect existed when you bought it, so it is
> reflected in the purchase price — it is capital, and it goes to the cost
> base. Same physical work, opposite tax treatment, decided by *when*.

### Depreciation

A deduction for the **decline in value** of a depreciating asset — one with
a limited effective life that can reasonably be expected to decline in
value over the time it is used. Examples the ATO gives: computers,
electrical tools, furnishings, carpet and curtains, motor vehicles.

Three categories, and they do **not** behave the same way:

| Category | Method | Rate |
|---|---|---|
| **Building allowance** | **Always** straight line | **2.5%** p.a. of construction cost (4% for July 1985 – Sept 1987) |
| **Plant and equipment** | Either straight line **or** diminishing value — chosen once, **cannot be changed later** | Based on effective life |
| **Low value pool** | **Always** diminishing value | **18.75%** in year 1, then **37.5%** |

Assets costing **less than $300** can be claimed as an immediate deduction.

**Plant** means plant *within* buildings — lifts, air-conditioners,
carpets, hot water systems, cookers. A portion of the purchase price is
**apportioned** to it. The rate follows the effective life, generally the
Commissioner's schedule:

```
Prime cost rate = 100 / effective life
```

A **balancing adjustment** is made if plant is sold for more or less than
its adjustable (written-down) value.

**Building allowances** are 2.5% or 4% p.a. of the **cost of construction**
— not the purchase price — depending on the start date and property type.
They are **transferable to subsequent owners**, and they **reduce the cost
base** for CGT if acquired after 13 May 1997.

> **Depreciation is a valuable tax shelter because it is a deduction with
> no cash outflow.** You deduct it, but you never write a cheque for it.
> Which is precisely why — as the Week 8 tutorial shouts in capitals —
> *"depreciation is only added to calculate our tax… it should not be
> included in your after-tax Net Cash Flow!"* Add it to the tax
> calculation; keep it out of the cashflow.

The full worked schedules for both methods are in
[Tutorial 6](#/USB245/14-tutorial-6-depreciation).

## 16.6 Tax Losses and Offsets

If an investor has a **tax loss** — negative taxable income — it can be
**carried forward to future years**.

**Capital losses** (where the cost base, *after* building allowances,
exceeds the resale proceeds) can only be offset against capital gains in
the current or future years.

One named offset in the deck: the **National Rental Affordability Scheme
(NRAS)** — an **$8,000 per annum, per dwelling** tax offset for **10
years**, for building dwellings and renting them to qualifying tenants at
**20% below market rents**. Most have now expired.

> **Where carried-forward losses bite in a DCF.** A negatively geared
> property generates losses in years 1–4 and a large capital gain in year
> 5. The accumulated losses are applied against that final-year income
> *before* tax is calculated. Model tax year by year and you will overstate
> the tax bill badly. Note 15 shows the mechanics — and the flaw in the
> supplied workbook's version of it.

## 16.7 Tax and the Ownership Entity

Two key tax issues:

1. **Pass through (personal-level taxation) or entity/corporate taxation
   (double taxation)?**
2. **Are any elements taxed in the entity and again when distributed?**
   E.g. capital gains by companies; depreciation tax shields effectively
   **trapped** within companies; dividends by individuals.

Three non-tax issues also drive the choice: how control is shared, whether
investors are liable for losses, and how flexible the structure is.

| | Person | Partners | Trust | Company |
|---|---|---|---|---|
| Distributions | ✓ | Shared | Flexible | Dividends |
| Governance | — | Flexible | By trustee | Formal |
| Liability for losses | ✓ | Jointly | Limited | Limited |
| Taxation | Pass through | Pass through | Pass through | **Entity** |
| Tax rate of | The person | The partners | The beneficiaries | **30%** |
| **Pass through losses** | ✓ | ✓ | **✗** | **✗** |
| **Gains tax discount** | ✓ | ✓ | ✓ | **✗** |

> **Read the bottom two rows together — they are the decision.** A company
> gets neither the CGT discount nor the ability to push losses out to its
> owners, so a **negatively geared company is the worst of both worlds**:
> the losses are trapped inside the entity until it has income to absorb
> them, and the eventual gain is taxed in full. A **trust** gets the
> discount but still cannot distribute losses. Only individuals and
> partnerships get both.

## Checkpoint

1. An investor spends $40,000 replacing a roof damaged by a storm three
   years into ownership, and $12,000 fixing a pre-existing plumbing fault
   in the month after settlement. Tax treatment of each?
2. A company and an individual on the 47% marginal rate each realise a
   $400,000 gross capital gain on a property held 5 years. Who pays more?
3. A property's taxable income is −$30,000 in each of years 1–3, then
   +$200,000 in year 4. What is taxed in year 4 at 30%?
4. Why is a $1,000 tax offset worth more than a $1,000 deduction?
5. Building allowances of $50,000 were claimed over the holding period.
   The property sells for $900,000 with a $700,000 acquisition price and
   $35,000 of acquisition costs. Selling costs are $20,000. Gross gain?

<details><summary>Answers</summary>

1. **Roof: not deductible as a repair** — replacing an entire roof is a
   renewal/improvement, so it is **capex**: depreciated where eligible and
   added to the **cost base**. **Plumbing: not deductible either** — an
   *initial repair* of a defect that existed at purchase. Also capital,
   also to the cost base. Two different reasons, same answer. (Had the
   plumbing failed in year three, it would have been deductible.)
2. **The company.**
   - Individual: 50% discount → $200,000 taxable × 47% = **$94,000**.
   - Company: no discount → $400,000 × 30% = **$120,000**.

   The flat rate does not compensate for losing the discount on a
   long-held asset. (The company may still win on *rental* income, taxed
   at 30% rather than 47% — which is the real trade-off.)
3. **$110,000.** Carried-forward losses total $90,000, so taxable income
   in year 4 is $200,000 − $90,000 = $110,000; tax = $33,000. Taxing the
   full $200,000 would overstate tax by $27,000.
4. Because they enter the ladder at **different rungs**. A deduction
   reduces *taxable income*, so it is worth `$1,000 × marginal rate`. An
   offset reduces *tax payable* directly — worth the full $1,000.
5. ```
   Cost base = 700,000 + 35,000 − 50,000        = $685,000
   Gain      = 900,000 − 20,000 − 685,000       = $195,000  gross
   ```
   For an individual holding >12 months, the taxable gain is **$97,500**.
   Note the building allowance *increased* the gain by exactly the $50,000
   deducted along the way.
</details>

## Summary

- Four quadrants: before/after tax × property-only/with-borrowings.
  Quadrant 4 — after tax **and** finance — is what A2 requires.
- The ladder: assessable income − deductions = taxable income × marginal
  rate = basic tax − offsets = tax payable. **Deductions ≠ offsets.**
- Companies: 30%, or 25% for base rate entities — but rent is passive
  income, so most property companies fail the 80% test and pay 30%.
- Assessable income from property = **rental income + capital gain**.
- Cost base = price + acquisition costs + capex − building allowances.
  Gain = resale − selling costs − cost base, then discount.
- Discount: **50%** individuals and trusts, **33⅓%** complying super,
  **nil** companies. Requires a holding period of **more than** 12 months.
  Pre-20 Sep 1985 assets: no CGT at all.
- May 2026 Budget: negative gearing limited to new builds, discount
  replaced by indexation, 30% minimum on gains, from 1 July 2027 — all
  **announced, not enacted**.
- Deductions: interest (borrowed to produce assessable income), repairs
  (not renewals, not initial repairs, not sinking funds until spent), and
  depreciation. Borrowing expenses over the shorter of the loan term or
  five years.
- Depreciation: building **2.5% straight line always**; plant either
  method but **locked once chosen**; low value pool **18.75% then 37.5%**.
  Under $300 = immediate deduction.
- **Depreciation reduces tax, never cashflow.** Building allowances also
  reduce the cost base — a deferral, not a gift.
- Capital losses offset **only** capital gains; revenue losses carry
  forward against any taxable income.
- Entity choice: only individuals and partnerships get **both** the CGT
  discount and the ability to pass losses through.

Next: [Tutorial 6 — Depreciation](#/USB245/14-tutorial-6-depreciation) for
the schedules, then
[Tutorial 7](#/USB245/15-tutorial-7-cgt-and-the-after-tax-dcf) for the
complete after-tax, after-finance model.
