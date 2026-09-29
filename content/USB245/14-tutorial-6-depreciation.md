# Tutorial 6 — Depreciation

<!-- notation:start -->
<details class="notation"><summary>Notation key — what the symbols in this note mean</summary>

| Symbol | Means |
|---|---|
| `NPV` | Net present value — PV of everything in minus everything out. Positive = accept |
| `IRR` | Internal rate of return — the discount rate that makes NPV = 0 |
| `DCF` | Discounted cash flow — the model: forecast the cashflows, discount them to today |
| `IPMT, INTₜ` | Interest part of a loan payment (the tax-deductible part) |
| `PPMT, AMORTₜ` | Principal part of a loan payment (reduces the balance; not deductible) |
| `CGT` | Capital gains tax |
| `WDV` | Written-down value — cost less depreciation claimed so far |

[Full USB245 notation key →](#/USB245/99-notation-key)

</details>
<!-- notation:end -->

The **Week 8 lab**. Source: `Week 08 Tutorial Depreciation.xlsx`, four
sheets. Short, mechanical, and worth easy exam marks — depreciation
questions are the most formulaic thing in the unit, provided you pick the
right method for the right asset class.

Three tasks in the lab: the concept checks, the two depreciation
schedules, and then adding depreciation to the Week 7 DCF.

Every figure below was recomputed independently in Python.

## 17.1 The Concept Checks

The tutorial opens with a sorting exercise. Three questions over one list:

- **Which of the following are expenses?**
- **Which items are depreciated?**
- **Which items form part of the cost base?**

The list: council rates · lift replacement · mobile phone · capital gain ·
land tax · refurbishment · dry cleaning · stamp/transfer duty · capital
loss.

No answers are supplied. Worked from the Topic 8 rules
([note 08](#/USB245/08-topic-8-property-taxation), §16.4–16.5):

| Item | Expense (deductible)? | Depreciated? | Cost base? |
|---|---|---|---|
| **Council rates** | ✓ — statutory charge | ✗ | ✗ |
| **Lift replacement** | ✗ — a renewal, so capital | ✓ — plant and equipment | ✓ — capex |
| **Mobile phone** | ✓ **if** used to produce assessable income, and apportioned for private use | ✓ if >$300 and depreciated rather than expensed | ✗ |
| **Capital gain** | ✗ — it is *income*, not an expense | ✗ | ✗ — it is the **output** of the cost base calculation |
| **Land tax** | ✓ — statutory charge | ✗ | ✗ |
| **Refurbishment** | ✗ — an improvement | ✓ — building allowance and/or plant, by component | ✓ — capex |
| **Dry cleaning** | ✗ — private or domestic | ✗ | ✗ |
| **Stamp/transfer duty** | ✗ — capital | ✗ | ✓ — an **acquisition cost** |
| **Capital loss** | ✗ | ✗ | ✗ — offset against capital **gains** only |

> **"Expense", "depreciated" and "cost base" are not mutually exclusive —
> but "expense" and the other two nearly always are.** A lift replacement
> is depreciated *and* goes to the cost base; it is not an expense. The
> sorting logic is: is it **revenue** (deduct it now) or **capital**
> (depreciate it if it has an effective life, and add it to the cost
> base)? Council rates are revenue. A new lift is capital. Dry cleaning is
> neither — it is private.

> **Don't double-count the building allowance.** A refurbishment adds to
> the cost base *and* generates building allowance deductions — and those
> allowances then **reduce** the cost base again (Topic 8, §16.4). Net
> effect over the hold: the deduction is a timing benefit, not a
> permanent one.

## 17.2 The Two Methods

Straight from the `Depreciation` sheet:

> Deductions for the cost of a depreciating asset are based on the
> **decline in value**.
>
> - **Building depreciation always uses the straight line approach.**
> - **The low-value pool always uses the diminishing value approach.**
> - **Plant and equipment can use either — but you cannot change at a
>   later date.**
> - In some cases you can claim an **immediate deduction**, e.g. low value
>   assets costing **less than $300**.
> - Both approaches are based on the asset's **effective life**.

```
Straight line (prime cost):
    Depreciation = Asset value × 1 ÷ effective life

Diminishing value (declining balance):
    Depreciation = Written-down value × 2 ÷ effective life
```

The sheet's own commentary on the difference:

> Note the rate of depreciation is **2× the straight line approach**,
> which provides initially higher depreciation. However, depreciation is
> calculated on the **written-down value**, which decreases quickly.

> **The two differences are easy to conflate — there are *two* of them.**
> Diminishing value has (a) **double the rate** and (b) a **shrinking
> base**. Straight line applies a single rate to the **original cost**
> forever; diminishing value applies double the rate to a base that falls
> every year. That is why DV front-loads the deduction and then tails off
> below SL.

> **Straight line divides by effective life; diminishing value divides 2
> by effective life.** A 40-year building is 2.5% SL. A 12-year plant item
> is 16.67% DV (`2/12`), not 8.33%. Writing `1/12` for a DV asset halves
> every deduction in the schedule.

## 17.3 Worked Example — Straight Line

*Prepare a 5-year depreciation schedule: $500,000 building cost, 40-year
effective life (ATO specified, based on date of construction).*

```
Depreciation rate = 1 / 40 = 2.5%
Annual depreciation = $500,000 × 2.5% = $12,500   ← same every year
```

| Year | Building depreciation | Written-down value |
|---|---|---|
| 1 | $12,500 | $487,500 |
| 2 | $12,500 | $475,000 |
| 3 | $12,500 | $462,500 |
| 4 | $12,500 | $450,000 |
| 5 | $12,500 | $437,500 |

Run to 40 years (as the `Depreciation Practice` sheet does) and the WDV
reaches **exactly $0** in year 40. That is the definition of straight
line: the asset is fully written off over its effective life.

> **The base is the cost of *construction*, not the purchase price.** You
> bought land and a building for $850,000; only the building's
> construction cost is depreciable, and land never is. Getting the split
> right is a quantity surveyor's job in practice and an assumption in a
> DCF — state it.

## 17.4 Worked Example — Diminishing Value

*Prepare a 5-year schedule: $200,000 plant and equipment, 12-year
effective life.*

```
Rate = 2 / 12 = 16.667%,  applied to the written-down value
```

| Year | P&E depreciation | Written-down value |
|---|---|---|
| 1 | $33,333.33 | $166,666.67 |
| 2 | $27,777.78 | $138,888.89 |
| 3 | $23,148.15 | $115,740.74 |
| 4 | $19,290.12 | $96,450.62 |
| 5 | $16,075.10 | $80,375.51 |

All verified. Each year's figure is the **prior** written-down value ×
16.667%:

```
Year 1:  $200,000.00 × 0.16667 = $33,333.33
Year 2:  $166,666.67 × 0.16667 = $27,777.78
Year 3:  $138,888.89 × 0.16667 = $23,148.15
```

### Compare the two on the same asset

The `Depreciation Practice` sheet runs $500,000 of plant over 40 years at
`2/12`. The pattern is the lesson:

| Year | DV deduction | Cumulative |
|---|---|---|
| 1 | $83,333 | $83,333 |
| 5 | $40,188 | $259,061 |
| 10 | $16,151 | $419,247 |
| 20 | $2,608 | $486,958 |
| 40 | $68 | $499,660 |

> **Diminishing value never reaches zero.** After 40 years there is still
> **$340.19** of written-down value left, because you are always taking a
> fraction of a shrinking balance. Straight line hits exactly zero at the
> end of the effective life; DV approaches it asymptotically. In practice
> the remainder is dealt with by a **balancing adjustment** on disposal,
> or by rolling the asset into the low-value pool.

**Which to choose?** DV gives more deduction sooner, so more tax saved
sooner, so a higher NPV of the tax shield — and for a 5–10 year property
hold you are only ever in the front-loaded part of the curve. That is why
DV is the default choice for plant in property DCFs. But remember: **the
choice is locked in once made.**

## 17.5 Adding Depreciation to the DCF

The `Week 7 DCF + depreciation` sheet takes the Week 7 after-finance model
([note 13](#/USB245/13-tutorial-5-mortgages-and-the-after-finance-dcf))
and inserts two rows. The tutorial's instruction, in capitals:

> **REMEMBER — depreciation is only added to calculate our tax… it should
> not be included in your after-tax Net Cash Flow!**

This is *the* rule of the week. Mechanically it means your model needs two
separate bottom lines:

```
Net income (EBIT)
  − interest                     ─┐
  − building depreciation         ├─► Taxable income  ──► × tax rate ──► Tax
  − plant depreciation           ─┘
                                        (principal and depreciation excluded)

Net income (EBIT)
  − interest
  − principal                    ─────► Cash flow to equity  ──► − Tax ──► NCF
                                        (depreciation excluded)
```

| Line | In taxable income? | In cash flow? |
|---|---|---|
| Net income (EBIT) | ✓ | ✓ |
| Interest (`IPMT`) | ✓ | ✓ |
| **Principal (`PPMT`)** | **✗** — not deductible | **✓** — you pay it |
| **Depreciation** | **✓** — deductible | **✗** — no cash leaves |
| Tax payable | — | ✓ |

> **Principal and depreciation are mirror images, and that is the whole
> trick.** Principal is **cash out with no deduction**. Depreciation is a
> **deduction with no cash out**. Each appears in exactly one of the two
> columns. Put depreciation in the cashflow and you understate the return;
> put principal in taxable income and you understate the tax.

The completed version of this — with capital gains, carried-forward losses
and the full after-tax Equity IRR — is the Week 9 lab:
[Tutorial 7](#/USB245/15-tutorial-7-cgt-and-the-after-tax-dcf).

## Checkpoint

1. A $90,000 air-conditioning plant has a 15-year effective life. First
   two years' depreciation under each method?
2. Why does a 40-year straight-line schedule end at exactly $0 while a
   40-year diminishing-value schedule does not?
3. An investor claims $12,500 a year of building allowance for 8 years,
   then sells. What has that done to the capital gain?
4. In the after-tax DCF, which of these four lines appear in taxable
   income: net rent, interest, principal, depreciation?

<details><summary>Answers</summary>

1. **Straight line:** `1/15 = 6.667%` × $90,000 = **$6,000** in year 1 and
   **$6,000** in year 2 (WDV $78,000).
   **Diminishing value:** `2/15 = 13.333%`.
   Year 1 = $90,000 × 13.333% = **$12,000** (WDV $78,000).
   Year 2 = $78,000 × 13.333% = **$10,400** (WDV $67,600).
   DV gives $22,400 over two years against SL's $12,000.
2. Straight line takes a **constant amount** off the **original cost** —
   40 × 2.5% = 100%, so it lands exactly on zero. Diminishing value takes
   a constant **percentage** of a **shrinking balance**, which halves
   toward zero without reaching it.
3. **It increased it by $100,000.** Building allowances **reduce the cost
   base** (Topic 8, §16.4), so 8 × $12,500 = $100,000 comes off the cost
   base and goes straight onto the gross capital gain. The investor got
   $100,000 of deductions at their marginal rate along the way and pays
   tax on $100,000 more gain (possibly discounted) at the end — a
   **deferral**, and a rate arbitrage if the gain is discounted.
4. **Net rent, interest and depreciation — not principal.** The cash flow
   takes net rent, interest and principal — not depreciation.
</details>

## Summary

- Sort every item first: **revenue** (deduct now) or **capital**
  (depreciate if it has an effective life, and add to the cost base).
- `Straight line = cost × 1/effective life`, on the **original cost**.
- `Diminishing value = WDV × 2/effective life`, on the **written-down
  value**. Double rate *and* shrinking base.
- **Buildings: always straight line** (2.5% for a 40-year life, on
  **construction cost**). **Low value pool: always diminishing value.**
  **Plant: either, but locked once chosen.** Under $300: immediate
  deduction.
- Verified: $500,000/40yr SL = $12,500 p.a., WDV $437,500 at year 5.
  $200,000/12yr DV = $33,333 → $27,778 → $23,148 → $19,290 → $16,075.
- SL reaches exactly $0 at the end of the effective life; DV never does
  ($340.19 left after 40 years) — hence balancing adjustments.
- **Depreciation reduces tax, never cashflow. Principal reduces cashflow,
  never tax.** Two separate bottom lines in every after-tax model.

Next: [Tutorial 7 — CGT and the After-Tax
DCF](#/USB245/15-tutorial-7-cgt-and-the-after-tax-dcf).
