# Tutorial 7 — CGT and the After-Tax DCF

The **Week 9 lab**, and the capstone of the whole modelling sequence:
*"Taxation part 2 — CGT calculations, and add taxation to our Week 6 and 8
DCF."* Source: `Week 09_tax_solution_v1 (1).xlsx`, six sheets.

By the end of this note the residential model has travelled the full
distance: **before tax and finance → after finance → after tax and
finance**. Quadrant 4 of the Topic 8 grid.

Every figure was recomputed independently in Python and agrees with the
supplied workbook to the cent.

## 18.1 What the Model Needs

The tutorial's own checklist of the extra inputs:

| After finance | After tax |
|---|---|
| The initial loan amount | Repairs and maintenance |
| Initial equity contribution | Other claimable expenses |
| Loan establishment fees | Depreciation |
| Loan amortisation (`IPMT`, `PPMT`) | Building allowances |
| | Capex |
| | Cost base and capital gain |
| | Applicable income tax rate |
| | **Any carried forward losses** |

And the "pulling it all together" grid — the same four quadrants as Topic
8, restated:

| | Property (before finance) | Equity (after finance) |
|---|---|---|
| **Before tax** | 1. Net rental income and resale proceeds | 2. Net rental income **less loan payments**, and resale proceeds **less outstanding loan** |
| **After tax** | 3. Net rental income after income tax, and resale proceeds after CGT | 4. Net rental income less loan payments **and** income tax, and resale proceeds less outstanding loan **and** CGT |

> **The tutorial's own warning on quadrant 3.** *"Interest repayments are
> usually a major component of your tax deductions, so don't calculate
> this cashflow unless you're buying without debt financing."* An
> after-tax, **before-finance** cashflow is an artificial object: it
> denies the investor their largest deduction. Model quadrants 1, 2 and 4
> — skip 3 unless the purchase really is unlevered.

## 18.2 The CGT Calculation

The `Cost base and capital gains tax` sheet. Note its own heading:
**"applicable pre-May 2026 Federal Budget"** — see Topic 8, §16.4.

The discount method can be used if **all** of:

- You are an **individual, a trust or a complying superannuation entity**
  (**not** a company);
- A CGT event happens in relation to an asset you own;
- The CGT event happened **after 11.45am (ACT legal time) on 21 September
  1999**; and
- You acquired the asset **at least 12 months before** the CGT event —
  and the sheet is explicit: **exactly one year is NOT long enough**.

The discount for individuals is a **50% reduction of the gross capital
gain**.

The indexation method "is not currently used but may be relevant for
assets purchased before 1999": an indexation factor from CPI is applied to
**each element of the cost base other than non-capital costs of
ownership**, and investors could choose between indexation and discount
for gains accrued to 1999.

### The two worked examples

| | Example 1 | Example 2 |
|---|---|---|
| Purchase price | $500,000 | $110,000,000 |
| Plus acquisition costs | $25,000 *(5%)* | $6,600,000 *(6%)* |
| Plus capex during holding period | $20,000 | $4,000,000 |
| Less building depreciation | ($75,000) | ($525,000) |
| **= Cost base** | **$470,000** | **$120,075,000** |
| | | |
| Selling price (assume >12 months) | $700,000 | $128,000,000 |
| Less selling costs | ($17,500) *(2.5%)* | ($2,560,000) *(2%)* |
| Less cost base | ($470,000) | ($120,075,000) |
| **= Gross capital gain** | **$212,500** | **$5,365,000** |
| **Capital gain after 50% discount** | **$106,250** | **$2,682,500** |

Both verified.

> **Look at Example 2 before you assume big deals mean big gains.** A
> $110m asset sold for $128m — a headline uplift of $18m, or 16.4% — nets
> a gross gain of only **$5.365m**, because $6.6m of acquisition costs,
> $4m of capex and $2.56m of selling costs are all absorbed first.
> Transaction costs at commercial scale eat most of the movement. This is
> the single best argument in the unit for long holding periods.

> **Note which depreciation reduces the cost base.** The line is "less
> **building** depreciation". Plant and equipment depreciation does
> **not** reduce the cost base — plant is dealt with by a balancing
> adjustment on disposal. The Week 9 DCF gets this right (it subtracts
> only the building allowance); make sure yours does too.

## 18.3 Building the After-Tax DCF

The `Week 9 All in One AT` sheet. It is the Week 7 model
([note 13](#/USB245/13-tutorial-5-mortgages-and-the-after-finance-dcf))
with the tax block bolted on. Same house, same loan, same exit — four new
assumptions:

```
Building cost                               $200,000
Building depreciation rate (straight line)      2.5%
Plant and equipment value                    $50,000
P&E effective life (diminishing value)        12 years
Tax rate                                        30%
```

### Step 1 — the depreciation schedules

| Year | Building (SL, 2.5% × $200,000) | Plant (DV, 2/12 of WDV) |
|---|---|---|
| 1 | $5,000 | $8,333.33 |
| 2 | $5,000 | $6,944.45 |
| 3 | $5,000 | $5,787.04 |
| 4 | $5,000 | $4,822.53 |
| 5 | $5,000 | $4,018.78 |
| **Total** | **$25,000** | **$29,906.13** |

Verified. The workbook rounds each P&E figure to two decimals with
`ROUND(...,2)` and carries the rounded value into the next year's base —
worth copying, because it keeps the schedule reproducible.

### Step 2 — the cost base

```
Purchase price                                $850,000
Plus acquisition costs                         $34,000
Plus capex during holding period                   Nil
Less building depreciation                    ($25,000)   ← building only
────────────────────────────────────────────────────────
= Cost Base                                   $859,000
```

### Step 3 — the capital gain

```
Selling price          $1,288,921.96     (Year 6 NI / 3.5% terminal yield)
Less selling costs        ($38,667.66)   (3%)
Less cost base           ($859,000.00)
──────────────────────────────────────
= Gross capital gain     $391,254.30
  Taxable gain if individual (50%)  $195,627.15
```

Both verified.

> **The workbook computes the 50% discounted figure and then does not use
> it.** Cell `H15` shows $195,627.15, but the DCF's capital-gain row pulls
> `H14` — the **gross** $391,254.30 — and taxes it at 30%. That is
> **internally consistent**, because 30% is the company rate and
> **companies get no CGT discount** (Topic 8, §16.7). But it is only
> correct if the investor is a company. If your A2 investor is an
> individual or a trust, you must use the **discounted** gain. The
> workbook leaves both figures on the sheet without saying which case it
> is modelling — decide explicitly, and write the entity assumption into
> your report.

### Step 4 — taxable income, which is *not* the cashflow

```
Taxable income  =  Net income (EBIT)
                 − interest
                 − building depreciation
                 − plant depreciation
                 + capital gain (final year only)
```

Note what is **absent**: principal repayment. Note what is **present**:
depreciation. The mirror-image rule from
[Tutorial 6](#/USB245/14-tutorial-6-depreciation), §17.5.

| | Yr 1 | Yr 2 | Yr 3 | Yr 4 | Yr 5 |
|---|---|---|---|---|---|
| Net income (EBIT) | 30,880 | 33,338 | 35,977 | 38,809 | 41,849 |
| Less interest | (56,000) | (55,115) | (54,167) | (53,154) | (52,069) |
| Less building depreciation | (5,000) | (5,000) | (5,000) | (5,000) | (5,000) |
| Less plant depreciation | (8,333) | (6,944) | (5,787) | (4,823) | (4,019) |
| Plus capital gain | | | | | 391,254 |
| **Taxable income** | **(38,453)** | **(33,721)** | **(28,978)** | **(24,167)** | **372,016** |

All verified. Four years of tax **losses**, then one very large gain — the
classic negatively geared profile.

### Step 5 — carried-forward losses

| | Yr 1 | Yr 2 | Yr 3 | Yr 4 | Yr 5 |
|---|---|---|---|---|---|
| Carried forward losses (opening) | 0 | (38,453) | (72,175) | (101,152) | (125,319) |
| Tax payable | 0 | 0 | 0 | 0 | **(74,009)** |

Years 1–4 use `=IF(taxable income < 0, 0, −rate × taxable income)` — no
tax on a loss. Year 5 applies the accumulated losses first:

```
Tax = −(carried forward losses + year 5 taxable income) × 30%
    = −(−125,319.31 + 372,016.03) × 30%
    = −$74,009.02
```

Verified to the cent.

> **Without the loss carry-forward the year-5 tax would be $111,604.81 —
> $37,595 too much.** `372,016.03 × 30%`. Modelling each year in isolation
> is the most expensive single error available in an after-tax property
> DCF, and it is exactly the error a naïve `=taxable × rate` row makes.

> **The workbook's carried-forward formula only works because every year
> is a loss.** It is a plain running sum: `=prior_cfwd + prior_taxable`.
> Drop a **profitable** year into the middle and the sum keeps
> accumulating a number that should have been *consumed* by that year's
> tax — the losses get counted twice. A robust version needs a
> `MAX(0, ...)` offset step each year: apply available losses against
> positive income, tax the remainder, and carry forward only what is left.
> If A2's cashflow turns positive before the sale — and a 65% LVR model
> may well — rebuild this row rather than copying it.

### Step 6 — the after-tax cash flow

```
Net cash flow (equity, after tax)
  = Net income after finance   (EBIT − interest − principal)
  + Tax payable
  + Sale price
  + Selling costs
  + Loan repaid
```

Depreciation does **not** appear. Principal does.

| | Yr 0 | Yr 1 | Yr 2 | Yr 3 | Yr 4 | Yr 5 |
|---|---|---|---|---|---|---|
| **NCF equity after tax** | (84,000) | (37,768) | (35,311) | (32,672) | (29,839) | **422,184** |
| Discount factor @10% | 1.0000 | 0.9091 | 0.8264 | 0.7513 | 0.6830 | 0.6209 |
| **PV** | (84,000) | (34,335) | (29,182) | (24,547) | (20,381) | **262,143** |

```
After-tax NPV        $69,698.32
After-tax Equity IRR     19.35%
```

Verified: **NPV $69,698.31, AT EIRR 19.3462%** (the one-cent difference is
the workbook's floating point).

### The three results side by side

This comparison is the exam answer to "why do we bother?":

| Model | NPV @10% | IRR | Note |
|---|---|---|---|
| **After finance, before tax** | $115,652.09 | **24.39%** | Tutorial 5 |
| **After finance, after tax** | **$69,698.32** | **19.35%** | This note |
| Difference | −$45,953.77 | −5.04 pts | The tax bill, present-valued |

> **Tax costs 5 percentage points of Equity IRR here — and it all lands
> in one year.** Years 1–4 are identical in both models (no tax is
> payable on a loss), so the entire difference is the year-5 CGT and
> income tax of $74,009. An investor comparing two properties on
> **before-tax** IRR is comparing the wrong number, and by a margin that
> would easily reverse a ranking.

## 18.4 The Other Sheets

| Sheet | What it is |
|---|---|
| `Week 9 Solution AT` | The same model with **three separate cashflows** — property before tax, equity before tax, equity after tax — so each return can be read off independently |
| `Mthly Comm DCF Equity AT` | The Week 4 commercial building, **monthly**, after tax and finance — the template for A2 |
| `Mthly Comm DCF Equity AT_Amort` | Its 480-month amortisation schedule |
| `Mthly Comm DCF Equity AT_Tax` | Its tax workings, separated out |

The tutorial asks which layout you prefer — the "all in one" sheet or the
three separate cashflows.

> **For A2, separate them.** The three-cashflow layout lets you quote a
> **property IRR**, an **equity IRR** and an **after-tax equity IRR** from
> one model without re-deriving anything, and a marker can follow each
> deduction to its line. The all-in-one sheet is more compact but it
> hides the quadrant structure the rubric is looking for. The monthly
> commercial sheets also isolate amortisation and tax onto their own tabs
> — copy that habit; a 74-column sheet with tax formulas buried in it is
> unauditable.

## Checkpoint

1. Why is the year-5 tax $74,009 rather than $111,605?
2. The workbook taxes the **gross** $391,254 gain at 30% and ignores its
   own 50%-discounted figure. Is that a mistake?
3. Years 1–4 of the after-tax model are identical to the before-tax
   model. Why?
4. Plant depreciation totals $29,906 over the hold. How much of that
   reduces the cost base?
5. Your A2 model shows positive taxable income in year 3 and a loss in
   year 4. Can you copy this workbook's carried-forward row?

<details><summary>Answers</summary>

1. Because **$125,319 of carried-forward losses** from years 1–4 are
   applied against year 5's $372,016 of taxable income first. Tax is
   `(372,016 − 125,319) × 30% = $74,009`. Taxing year 5 in isolation
   would cost $37,595 too much.
2. **No — it is consistent with a company investor.** Companies get no
   CGT discount and pay 30%. It *would* be a mistake for an individual or
   trust, who would use the discounted $195,627. The workbook simply
   never states the entity. State yours.
3. Because taxable income is **negative** in each of those years, so
   **tax payable is zero**. The loss shelters other income in reality
   (negative gearing), but this model treats the property as a separate
   investment, so the benefit shows up only as losses carried forward to
   year 5.
4. **None of it.** Only the **building allowance** ($25,000) reduces the
   cost base. Plant is handled by a balancing adjustment on disposal —
   which this model omits entirely.
5. **No.** The workbook's row is a plain running sum that only works
   when every year is a loss. With a profitable year in the middle, the
   losses consumed by that year's income must be removed from the
   carried-forward balance. Rebuild it with an explicit offset step.
</details>

## Summary

- Quadrant 4 — after tax **and** after finance — is the goal. Skip
  quadrant 3 unless the purchase is genuinely unlevered, because it denies
  the investor their biggest deduction.
- CGT discount needs: not a company, CGT event after 21 Sep 1999, and a
  holding period of **more than** 12 months. 50% for individuals and
  trusts.
- Cost base = price + acquisition costs + capex − **building** allowances.
  Plant does not touch the cost base.
- Verified worked cost bases: $470,000 → gross gain $212,500 → $106,250
  discounted; and $120,075,000 → $5,365,000 → $2,682,500.
- The model's own numbers, all verified: depreciation $5,000 p.a.
  building and $8,333 → $4,019 plant; cost base **$859,000**; gross gain
  **$391,254.30**; year-5 tax **$74,009.02**.
- **Taxable income** = EBIT − interest − depreciation (+ gain). **Cash
  flow** = EBIT − interest − principal − tax. Depreciation in one,
  principal in the other, never both.
- Carried-forward losses must be applied before taxing the final year —
  worth $37,595 here. The workbook's running-sum formula breaks if any
  year is profitable.
- **After finance, before tax: NPV $115,652, EIRR 24.39%. After tax: NPV
  $69,698, AT EIRR 19.35%.** Tax costs 5 percentage points, all in the
  exit year.
- For A2, use the three-cashflow layout and keep amortisation and tax on
  their own tabs.

That completes the modelling sequence. Weeks 10–12 are sensitivity
analysis and assignment studio; Week 13 is exam preparation.
