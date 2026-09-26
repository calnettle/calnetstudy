# TOPIC 9 — Discounting After-Tax Cashflows

The Week 9 lecture, released **26 September 2026**. It adds little new
mechanics — Topics 7 and 8 did that — and instead does the thing the unit
has been building toward: **runs one property through all four cashflow
definitions and compares the returns**.

It also states the A2 mark split and the due date, so read §19.6 even if
you skip the rest.

Reading: Rowland Chapters 5 and 6.

## 19.1 Recap — the Four Definitions

The same grid as Topic 8, now with a week label on each cell:

| | Property only | With borrowings |
|---|---|---|
| **Before tax** | **1.** Net rental income and resale proceeds *(Weeks 2–6)* | **2.** Net rent less loan payments; resale proceeds less outstanding loan *(Week 7)* |
| **After tax** | **3.** Net rental income after depreciation and income tax; resale proceeds after CGT | **4.** Net rent less loan payments **and** income tax; resale proceeds less outstanding loan **and** CGT *(Weeks 8–9)* |
| **Remember to include** | Depreciation, CGT, income tax | **Mortgage duty, establishment fees** |

> **Note the "remember to include" row — it names two costs the earlier
> models quietly omit.** Quadrant 2 and 4 cashflows should carry
> **mortgage duty** and **loan establishment fees** in period 0. The
> Week 7 and Week 9 teaching models do **not** include either. If A2 is
> marked against this grid, put them in and reference them.

The cost base gets one extra element in this deck that the Week 8 version
did not list:

```
   Acquisition price
 + acquisition costs
 + costs of ownership not claimed as earlier deductions     ← new
 + capital expenditure
 − building allowances if acquired after 13 May 1997
 = CGT cost base
```

> **"Costs of ownership not claimed as earlier deductions" is a real
> element and an easy mark.** Rates, land tax and insurance on a property
> that was *not* producing assessable income (vacant land, a holiday
> home) were never deductible — so they are added to the cost base
> instead. You cannot claim the same dollar twice, but you must claim it
> once.

And the capital gain, restated:

```
   Sale price
 − selling costs
 = Net sale price
 − cost base
 = Capital gain
 − discount (50% for individuals, pre-May 2026 Budget)
 = Additional taxable income
```

## 19.2 The Worked Comparison

*You want to buy a residential rental property because you believe it
will satisfy your investment objective of **10% p.a. returns**. A house
is on the market for **$850,000**. Should you make an offer?*

The same house as Weeks 3, 7 and 8 — now solved four ways. Assumptions
are unchanged (see
[Tutorial 5](#/USB245/13-tutorial-5-mortgages-and-the-after-finance-dcf),
§15.4) plus the tax block from
[Tutorial 7](#/USB245/15-tutorial-7-cgt-and-the-after-tax-dcf), §18.3.

### (1) Property, before tax and finance

```
Period 0   = −(850,000 + 34,000)          = −$884,000
Years 1–4  = net income (EBIT)
Year 5     = EBIT + sale − selling costs  =  $1,292,103.73

NPV @ 10%  =    $27,456.24
IRR        =        10.72%
```

Verified. Marginally above the 10% hurdle — the whole deal rests on the
3.5% terminal yield.

### (2) Equity, before tax

Add the loan: +$800,000 at period 0, less `IPMT` and `PPMT` each year,
less the outstanding balance at exit.

```
NPV @ 10%  =   $115,652.09
Equity IRR =        24.39%
```

Verified.

### (3) Property, after tax, no finance

Deduct depreciation to get taxable income, tax it, and take the tax off
the property cashflow. **No interest deduction**, because there is no
loan.

### (4) Equity, after tax and finance

The full model — Tutorial 7, §18.3.

```
NPV @ 10%  =    $69,698.32
Equity IRR =        19.35%
```

Verified.

### The summary table

The lecture's own closing table:

| | Property | Equity / Finance |
|---|---|---|
| **Before tax** | **(1) 10.7%** | **(2) 24.4%** |
| **After tax** | **(3) 6.9%** | **(4) 19.3%** |

Three of those four reproduce exactly. **The fourth does not.**

> **Cell (3) is not reproducible, and the supplied workbook contains
> three separate errors in that cashflow.** This is worth knowing before
> the exam, because it is the one number you cannot check by rebuilding
> the model.
>
> Errors in `Week 9 Solution AT`, cashflow 3 (rows 53–64):
>
> 1. **Rows 55 and 56 reference `$K$3` and `$L$3` in every year** —
>    absolute references to year 1. Plant depreciation is therefore
>    $8,333.33 in all five years instead of the diminishing schedule
>    ($8,333.33 → $4,018.78). Cashflow 4 (rows 69–70) gets this right,
>    so the two cashflows in the same file disagree.
> 2. **Row 59 computes `taxable income + tax` for years 1–4**, where it
>    should be `net cash flow + tax`. That deducts depreciation *from the
>    cashflow* — the exact error the Week 8 tutorial warns against in
>    capitals. Year 5 uses `=G33+G58` and is correct, so years 1–4 are
>    wrong and year 5 is right.
> 3. **Row 57 uses `H15`, the 50%-discounted gain**, while cashflow 4's
>    row 71 uses `H14`, the **gross** gain. The same workbook assumes an
>    individual in one cashflow and a company in the next.
>
> What the variants actually give — all computed independently:
>
> | Version | IRR | NPV @ 10% |
> |---|---|---|
> | Workbook as written (flat depreciation, discounted gain, wrong cash line) | **7.97%** | −$76,630 |
> | Corrected: DV schedule, gross gain (**company**), correct cash line | **8.01%** | −$73,247 |
> | Corrected: DV schedule, discounted gain (**individual**), correct cash line | **9.02%** | −$36,807 |
> | DV schedule, gross gain, wrong cash line retained | 7.02% | −$110,053 |
>
> **None of them is 6.9%.** The closest, 7.02%, requires keeping error 2.
> The slide figure appears to come from an earlier version of the
> workbook. Use **8.0%** (company) or **9.0%** (individual) with the
> working shown, note that the deck says 6.9%, and confirm with Lyndall
> which she will mark.

### What the comparison actually shows

Take the three reproducible figures and read across and down:

```
                      Property        Equity
   Before tax           10.7%          24.4%      leverage adds 13.7 points
   After tax          ~8.0%            19.3%      leverage adds ~11.3 points
                    ──────────       ──────────
   tax costs          ~2.7 points      5.0 points
```

> **Tax costs the geared investor *more* percentage points than the
> ungeared one — even though gearing creates the interest deduction.**
> That looks backwards until you see why: the geared return is a return
> on a much **smaller** equity base ($84,000 against $884,000), so the
> same absolute tax bill is a far larger fraction of it. Leverage
> magnifies the tax drag exactly as it magnifies everything else.
>
> Note also the decision does not change: all four exceed nothing, and
> only cashflows 1, 2 and 4 clear a 10% hurdle on a *pre-tax* basis —
> cashflow 3's NPV is **negative** at 10% in every variant. The hurdle
> rate has to match the cashflow definition, which is the next section.

## 19.3 Interpreting After-Tax Cashflows

The lecture's own checklist, and it is a good template for an A2
discussion section:

- **At a discount rate appropriate for after-tax equity cash flows**, is
  the NPV positive?
- **Contrast the internal rates of return:**
  - Property versus equity — *how much is the return enhanced by the
    loan?*
  - Before versus after tax — *how does the difference compare with the
    marginal tax rate?*
- **Study the interim cash flows:**
  - Are they sufficient for the investor's needs?
  - Can the investor meet further contributions from other sources?
- **Contrast the property and equity cash flows, before and after tax.**

> **"A discount rate appropriate for after-tax equity cash flows" is the
> sentence to underline.** You cannot discount an after-tax cashflow at a
> pre-tax required return — that compares a net number against a gross
> hurdle and will reject good deals. The teaching model uses 10%
> throughout precisely so the four cashflows are comparable, and that is
> a **teaching** simplification, not a method. Say so in A2.

> **The second bullet is a diagnostic, not a description.** If the
> before/after-tax gap is much *smaller* than the marginal tax rate, the
> deductions are doing a lot of work — depreciation and interest are
> sheltering income. If it is close to the marginal rate, they are not,
> and the tax shelter is not part of the investment case. Here: 24.4% →
> 19.3% is a 20.7% relative reduction against a 30% tax rate, so the
> shelter is worth roughly a third of the tax that would otherwise be
> due.

> **The third bullet is the solvency question, and it is the one this
> model fails.** The equity cashflow is **negative in every year but the
> exit**. A 19.3% IRR is unavailable to an investor who cannot fund
> ~$34,000 a year for five years from other income. Returns assume you
> survive to collect them.

## 19.4 Criticisms of After-Tax Models

Five, and they are examinable as a list — each is a reason the number is
less precise than it looks:

| Criticism | Why it bites |
|---|---|
| **The prediction of other sources of income** | The tax benefit of a loss depends on income you have not earned yet, at a marginal rate you do not know |
| **Equality of tax losses and before-tax receipts** | A $1 tax loss is not worth $1 — it is worth $1 × the marginal rate, and only if there is income to offset |
| **Solvency ignored** | The model discounts a cashflow the investor may not be able to fund (see above) |
| **The timing of tax payments** | Modelled as paid in the year incurred; in reality tax is paid on assessment, often a year later, and PAYG variations shift it again |
| **The complexity of calculations** | More assumptions, more places to be wrong — and the extra precision is spurious if the inputs are guesses |

> **These are the "limitations" paragraph the A2 rubric wants.** Do not
> present a four-decimal after-tax Equity IRR without them. The most
> damaging in practice is the first: the whole negative-gearing benefit
> rests on the investor having *other* income to shelter, which is an
> assumption about the person, not the property.

## 19.5 Presenting Your Cash Flow Analysis

Straight from the deck, and effectively an A2 marking guide:

- **Always refer to the brief**, setting out the investor's aims and
  circumstances, and the framework for the analysis.
- **Estimates, projections and assumptions** — all **identified and
  justified**.
- **Cash flow tables** — an **annual summary**, and: *can they be
  replicated with a calculator?*
- **The discount rate** — and other measures and assumptions
  **explained**.
- **Recommendations** — *be sure to answer the brief.*

> **"Can they be replicated with a calculator?" is the presentation test,
> and it is why Topic 6 exists.** A marker should be able to take your
> annual summary table, key the five net cashflows into a Sharp EL-738,
> and land on your NPV and IRR. If they cannot, your table is hiding
> something — an unexplained adjustment, a hard-coded cell, a row that
> does not sum. Print the annual summary at a scale a human can read and
> make it self-contained.

## 19.6 Assignment A2 — the Detail

| | |
|---|---|
| **Due** | **Wednesday 21 October 2026** |
| **Length** | 2,500-word report — *include the annual cashflow in the discussion* |
| **Annexures** | DCF and associated tabs **in PDF, at readable scale**; GenAI statements by each team member |
| **Also** | Peer review |

**The mark split, which is not what most groups assume:**

| Component | Weight |
|---|---|
| **Before finance and tax** | **85%** |
| Finance | 5% |
| Taxation | 10% |

> **Eighty-five per cent of the marks are in the Weeks 2–6 material.**
> The finance and tax layers that took three weeks to teach are worth
> **15% combined**. Budget your effort accordingly: the property
> cashflow, the discount rate derivation, the market evidence and the
> recommendation carry the report. Get the after-tax model right, but do
> not spend a week polishing a 10% component while the rent assumptions
> are unsupported.

> **"Include the annual cashflow in the discussion"** — in the body, not
> only the annexure. And the annexures must be **readable**: a 74-column
> monthly DCF exported at page-width is unmarkable. Export the annual
> summary at full size and the monthly detail across multiple pages.

## Checkpoint

1. The before-tax equity IRR is 24.4% and the after-tax is 19.3% — a
   drop of 5.0 points. The tax rate is 30%. Why is the drop not 30% of
   24.4% (7.3 points)?
2. Why does tax cost the geared investor more percentage points than the
   ungeared one, when gearing creates a deduction?
3. The lecture's summary says the after-tax property IRR is 6.9%. You
   rebuild the model and get 8.0%. What do you write?
4. Name three criticisms of after-tax models and say which matters most
   for a negatively geared residential investor.

<details><summary>Answers</summary>

1. Because **tax is not levied on the return, it is levied on taxable
   income** — and taxable income is a different quantity from the
   cashflow. Here, years 1–4 generate **losses** (no tax at all) and the
   entire bill falls in year 5, where it is partly absorbed by
   carried-forward losses and partly a capital gain. A 20.7% relative
   reduction against a 30% rate tells you the deductions sheltered
   roughly a third of the notional tax.
2. Because the geared return is measured on a **much smaller equity
   base** — $84,000 rather than $884,000. The same absolute tax is a
   larger fraction of a smaller denominator. Leverage magnifies the tax
   drag exactly as it magnifies the return.
3. **Both numbers, with the working, and the reason for the gap.** Show
   the three errors in the supplied cashflow 3 (absolute depreciation
   references, taxable income used as the cash line in years 1–4, and a
   discounted gain where the adjacent cashflow uses the gross gain),
   state your corrected figure and your entity assumption, note that the
   deck says 6.9%, and confirm with the unit coordinator. Do not
   silently adopt either.
4. Any three of: prediction of other income; the inequality of tax losses
   and before-tax receipts; solvency ignored; the timing of tax
   payments; complexity. **For a negatively geared residential investor
   the first matters most** — the entire benefit depends on having other
   income to shelter, at a marginal rate assumed years in advance. That
   is an assumption about the investor, not the property, and it is the
   one most likely to be wrong.
</details>

## Summary

- Four cashflow definitions, one property. Verified: **(1) property
  before tax 10.72%**, **(2) equity before tax 24.39%**, **(4) equity
  after tax and finance 19.35%**.
- **(3) property after tax is not reproducible.** The deck says 6.9%; the
  workbook as written gives 7.97%; corrected it gives **8.01%** for a
  company or **9.02%** for an individual. Three errors identified in the
  supplied cashflow. Confirm with the tutor.
- Quadrants 2 and 4 should include **mortgage duty and loan
  establishment fees**; the teaching models omit both.
- The cost base gains an element in this deck: **costs of ownership not
  claimed as earlier deductions**.
- Interpret by contrasting property vs equity (how much did the loan
  add?) and before vs after tax (how does the gap compare with the
  marginal rate?), then check whether the interim cashflows are
  **fundable**.
- Discount an after-tax cashflow at an **after-tax** required return. The
  model's single 10% is a teaching simplification.
- Five criticisms: other income, unequal value of tax losses, solvency,
  timing of tax payments, complexity.
- Presentation: refer to the brief, justify every assumption, give an
  annual summary a marker can **replicate on a calculator**, explain the
  discount rate, answer the brief.
- **A2: due Wednesday 21 October 2026.** 2,500 words. **85% of the marks
  are before finance and tax**; finance 5%, taxation 10%.
