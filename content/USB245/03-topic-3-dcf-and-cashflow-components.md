# TOPIC 3 — DCF and Cashflow Components

Week 3 is where the unit stops describing property and starts modelling it.
Weeks 1 and 2 gave you the seven steps as a list; this week fills each step
with the actual line items, and works one complete residential DCF from a
weekly rent to a maximum purchase price.

Reading: Rowland Ch 2.60–2.100 and Ch 6.40, 6.50, 6.90, 6.140.

The lecture's own worked example — the $930,000 house — is used here as the
running illustration for each step. The full spreadsheet build of it, plus
the expense-inflation variant, is in note 05.

## 6.1 What a DCF Is, and What It Is For

Three claims from the deck, and they are not the same claim:

1. **A valuation method.** "A method of valuing a project, company or asset
   using the concepts of the time value of money. All future cash flows are
   estimated and discounted to give their present values."
2. **A decision tool** for assessing the viability of income-producing
   properties or projects.
3. **A time-value tool for when future payments are irregular.**

Point 3 is the one that matters for A1. The annuity formulas from Week 1
assume a level payment. A building does not produce a level payment — leases
expire, incentives are given, capex lands in one month, the asset is sold in
period *n*. Once the payments are uneven, the annuity formula is unusable and
you are left discounting each period individually. That is all a DCF is.

| | Direct capitalisation | DCF |
|---|---|---|
| Input | One year's net income | A forecast for every period |
| Growth | Buried inside the yield | Explicit, per line, per period |
| Expiries, capex, incentives | Invisible | Modelled where they fall |
| Exit assumption | None | Terminal yield, stated |
| Best for | Stabilised, fully-let, market-rented | Anything with a story |
| Fails when | Income is not representative | Your forecasts are wrong |

Both appear in professional practice, and a real model runs them side by side
as a cross-check. Note 05 §7.7 shows a commercial model that reports three
capitalisation results *and* a DCF, and adopts a value only where they agree.

## 6.2 The Seven Steps

```
1. Set up cashflows over period/time
2. Determine the Net Income for each period
3. Calculate the discount factor for each period
4. Calculate the PV of each period
5. Add up all the PVs
6. Adjust for any acquisition costs
7. Answer = Maximum price payable OR Expected Return
```

> **Step 7 has two different answers, and the deck states both.** The agenda
> slide says "Maximum price payable **OR** Expected Return"; the cashflow
> components slide says "Answer = Maximum price payable = PV". Which one you
> get depends on which variable you left unknown. Leave the **price**
> unknown and solve for it → maximum price payable. Fix the price at what is
> being asked and solve for the **rate** that sets the PV equal to it →
> expected return, i.e. the IRR. §6.8 does both on the same property and
> they give opposite-looking answers.

## 6.3 Step 1 — Setting Up the Time Frame

Before a single dollar is typed, decide how long you hold the asset and how
finely you slice it.

```
n     total holding period      often 10 years; A1's brief says 7–10
t     number of periods         annual, quarterly or monthly
0     period 0                  the initial purchase
n+1   the year after the sale   needed only to price the sale itself
```

The deck's four considerations for *n*:

- **Availability of data and accuracy of forecasts.** You cannot forecast
  year 25 rent in a suburban strip building. Ten years is convention because
  later years add little present value.
- **Later years add little.** At a 10% discount rate, year 15's income is
  worth 24 cents in the dollar.
- **It assumes a sale in period n**, real or notional. You do not have to
  intend to sell; the model has to end somewhere, and a capitalised exit is
  how it ends.
- **Payments at the start or the end of the period** — in advance or in
  arrears.

> **Advance versus arrears is a whole period of discounting, and rent is
> normally paid in advance.** The Exercise 1 model, the teaching workbook and
> almost every student DCF discount period 1 by `1/(1+r)¹` — that is rent in
> **arrears**. Rent actually arrives monthly in advance. The convention is
> defensible for an annual model and is what this unit uses, but you must
> *state* it in the assumptions sheet. On Exercise 1's numbers, treating
> year 1 as received at the start instead of the end lifts its present value
> from $28,073 to $30,880.

Period 0 and period n+1 are the two that get forgotten. Period 0 carries the
purchase and its costs. Period n+1 carries no cashflow at all — it exists
only to supply the forward income the exit price is calculated from.

## 6.4 Step 2 — Net Income: Where the Marks Are Lost

The deck is blunt about this: *"This is the step where the most errors are
made."*

```
Net income = Gross income − operating expenses
```

For **every** income and expense item, the lecture asks three questions:

| | Question | What it decides |
|---|---|---|
| **WHEN** | Where in the cashflow does this item appear? | The column |
| **WHAT** | What is the item comprised of? | The row |
| **HOW** | How do you calculate it, or justify the assumption? | The mark |

The "HOW" sources named in the deck are the ones the A1 rubric wants cited:
**leases, the tenancy schedule, outgoings budgets, market research and CPI
estimates**.

The concept-check slide splits net income into four components, and they are
worth memorising as four separate objects because they sit in different
columns:

```
Period 0     = purchase price plus acquisition costs
Period 1..n  = gross income less vacancy less expenses, per period
Period n     = assumed sale price (terminal value) less selling costs
Period n+1   = net income in the year AFTER the assumed sale
```

> **Two slides in this deck describe period 0 with opposite signs.** The
> initial-outlay slide says "Acquisition price **+** acquisition costs"; the
> concept-check slide four pages later says "Period 0 = Purchase price
> **less** acquisition costs". Both can be defended, because they are
> describing different things. As a statement of the **cash leaving your
> account in period 0**, the plus sign is the only correct one — total outlay
> is `price × (1 + T)`. The concept-check wording is best read as a loose
> description of *step 6*, where the acquisition percentage is deducted from
> the sum of PVs to back out a price. Keep them separate: outlay adds, the
> step-6 solve subtracts. On a $900,000 purchase with 4% costs, reading the
> concept-check line literally as your period-0 cashflow puts you $72,000 out.

### The initial outlay — period 0

```
Acquisition price
  + stamp duty
  + legals
  + due diligence
  + any other initial expense
  = total initial outlay
```

The slide adds one line that is easy to skim past: *"Period 0 items may be
KNOWNS or VARIABLES."* That is the whole trick of Exercise 1. If you know the
price, period 0 is a known and you solve for the return. If you do not know
the price — because you are deciding what to offer — period 0 is the unknown
and everything else in the model exists to solve for it.

### The income waterfall

```
        Gross (potential) income
  less  Vacancy allowance
  ────────────────────────────────
      = Gross (effective) income

  less  Statutory charges       council rates, water rates, land tax
  less  Operating expenses      insurance, maintenance/service/repairs,
                                management fees
  ────────────────────────────────
      = Net (operating) income
```

Two levels of "gross" is the part that trips people. **Gross potential
income** is the rent if every square metre is let at all times. **Gross
effective income** is after the vacancy allowance. Cap rates, outgoings
ratios and expense ratios are quoted against different ones of these, so name
your base every time.

> **Land tax sits in the statutory block and is usually not recoverable from
> tenants.** That makes it the single most commonly omitted line in a
> student model — and in real documents. The 41 Park Road information
> memorandum's quarterly outgoings total omits land tax entirely; the
> correct total is $24,341.10, not the $16,966.10 printed (note 07 §5.5).
> When you list expenses, list statutory charges first, then tick land tax
> off explicitly.

### Growth

The deck defines growth as *"expected periodic growth rate in income"* — and
that wording is the trap. Income growth is one rate. **Expense** growth is a
different rate, and the deck's own Exercise 1 does not apply one at all.

> **Escalating income while freezing expenses manufactures net income out of
> nothing.** In Exercise 1, gross income grows 7% p.a. and the $7,405 of
> outgoings sits flat for six years. That widens the margin every year for
> free. The tutorial's second sheet, Exercise 1a, adds 3% inflation to the
> expense line and the maximum price drops **$20,990** — 2.34% of the answer
> — with nothing else changed. Two rates, two labelled cells, always.

### Worked — the waterfall on Exercise 1, year 1

The lecture's property: a house at $930,000, rent **$775 per week**, growth
7% p.a., hold 5 years, sell on a 3.5% terminal yield, management fees and
maintenance $5,360 p.a., statutory costs **$511.25 per quarter**, vacancy and
let-up allowance 5%, selling costs 3%, acquisition costs 4%, required return
10%.

```
Gross potential income   775 × 52            =  $40,300.00
less vacancy             5% × 40,300         =  $ 2,015.00
                                                ───────────
Gross effective income                          $38,285.00

less outgoings           511.25 × 4 + 5,360  =  $ 7,405.00
                                                ───────────
NET INCOME, year 1                              $30,880.00
```

Both conversions in that block are unit changes, and both are places to lose
marks: a **weekly** rent becomes annual by ×52, a **quarterly** statutory
charge becomes annual by ×4.

> **A per-quarter figure multiplied by 12 destroys the answer.** Treating the
> $511.25 statutory charge as monthly gives $6,135 p.a. instead of $2,045 —
> $4,090 of phantom expense every year. Carried through the model, the
> maximum purchase price falls from $895,988 to **$813,537**, an $82,451
> error on a $900,000 decision. This unit's material has already produced
> one column headed "per quater" holding a monthly figure (note 07 §5.5).
> Read the unit label, then say out loud what you are multiplying by.

## 6.5 Step 2b — Sale Proceeds and the n+1 Year

```
                    NI(n+1)
Sale price  =  ──────────────────
                terminal yield

Net proceeds = sale price × (1 − selling cost %)
```

Exercise 1 holds for five years, so the sale happens at the end of period 5
and is priced off **period 6** income:

```
Year 6 gross    40,300 × 1.07⁵  =  $56,522.83
less vacancy    5%              =  $ 2,826.14
less outgoings                  =  $ 7,405.00
                                   ──────────
Year 6 NET INCOME                  $46,291.69

Sale price   = 46,291.69 / 0.035  =  $1,322,619.80
Selling cost = 3% × 1,322,619.80  =  $   39,678.59
Net proceeds                         $1,282,941.21
```

> **The lecture slide prints $1,325,720 in the "Sale Price" row, and that is
> not the sale price.** $1,325,720 is the period-5 **net cashflow** — sale
> price plus year-5 net income less selling costs — and the slide correctly
> shows the same number one row down in the "Net Cashflow" row. The true
> sale price is **$1,322,619.80**. The algebra:
> `1,322,619.80 + 42,778.83 − 39,678.59 = 1,325,720.04`. The difference,
> $3,100.24, is year 5's net income net of the selling cost. Nothing
> downstream is affected — the PVs and the final answer on the slide are
> right — but if you copy the row label into your own model you will apply
> a 3% selling cost to a number that already has one deducted. Confirm with
> your tutor if the slide is presented again in class.

**Why n+1 and not n.** The buyer at the end of year 5 is buying year 6's
income. You have already collected year 5's. Capitalising year 5's net income
instead gives a sale price of $1,222,252 — $100,368 low — and drags the
maximum purchase price down by $58,033. Note 06 §4.5 makes the same point on
the assignment workbook, where it is worth $375,318.

**How do you determine a terminal yield?** The deck asks the question and
does not answer it — that is Week 4. But there is a coherence check available
now. Under `r = y + g`, a 3.5% exit yield with 7% income growth implies a
total return around 10.5%, which is close to the 10% required return the
question specifies. The exercise's exit assumption is therefore internally
consistent rather than arbitrary. A 3.5% yield on its own looks absurdly
tight; paired with 7% growth it is a normal Australian residential
relationship.

> **88.2% of this property's present value is the exit assumption.** The five
> PVs are $28,073, $27,736, $27,369, $26,976 and $823,168 — the last of which
> is almost entirely the terminal value. That means the answer is a bet on
> the terminal yield, not on the rent. Any sensitivity section that tests
> rent growth but not the exit yield has tested the wrong variable (§7.6 of
> note 05 quantifies it).

## 6.6 Steps 3, 4 and 5 — Discounting

```
STEP 3    Discount factor  DF = 1/(1+r)^t
STEP 4    PV of each period = NI(t) × DF(t)
STEP 5    Sum of PVs        = Σ NI(t)/(1+r)^t
```

On Exercise 1, at a 10% required return:

| t | Net cashflow | DF = 1/1.1^t | PV |
|---|---|---|---|
| 1 | $30,880.00 | 0.909091 | $28,072.73 |
| 2 | $33,559.95 | 0.826446 | $27,735.50 |
| 3 | $36,427.50 | 0.751315 | $27,368.52 |
| 4 | $39,495.77 | 0.683013 | $26,976.14 |
| 5 | $1,325,720.03 | 0.620921 | $823,167.84 |
| | | **Sum of PVs** | **$933,320.72** |

The slide's rounded totals — $28,073, $27,735, $27,369, $26,976, $823,168 and
$933,321 — all agree.

> **Step 5's formula box calls this NPV. It is not an NPV.** The sum of the
> present values of the *future* cashflows is a **gross present value**: no
> price has been deducted. The slide's own table gets the label right ("Sum
> of PV of future cashflows"); the formula box beside it does not. The true
> net present value at the $930,000 asking price is
> `933,321 − 930,000 × 1.04 = −$33,879`. Positive gross PV, negative NPV,
> opposite recommendations. The same trap is already on the exam-traps list
> from the Week 2 grandmother exercise (note 09) — this is its second
> appearance in three weeks.

> **The slide's discount factors are printed to two decimals.** Using
> 0.91 / 0.83 / 0.75 / 0.68 / 0.62 as typed gives a sum of $932,079.72 —
> $1,241 below the true $933,320.72. Four decimal places minimum, and in
> Excel reference the cell rather than retyping what you see.

## 6.7 Step 6 — Acquisition Costs, and the Algebra Nobody Shows

The supplied solution does this:

```
Sum of PVs                     $933,320.72
less 4% of the sum of PVs      $ 37,332.83
                               ───────────
Maximum purchase price         $895,987.89
```

That is what the slide shows ($37,333 and $895,988) and it is the method the
class is being taught. But the assumption cell that defines the 4% is
labelled, in the workbook itself, **"Acquisition costs … × PP"** — a
percentage *of the purchase price*. Test the answer against that definition:

```
4% × 895,987.89        = $ 35,839.52
895,987.89 + 35,839.52 = $931,827.41    ≠ $933,320.72
```

The total outlay comes up $1,493 short of the present value it is supposed to
equal. Solving it as the definition states:

```
PP × (1 + T)  =  Σ PVs
PP            =  933,320.72 / 1.04
              =  $897,423.77

check:  4% × 897,423.77 = $35,896.95
        897,423.77 + 35,896.95 = $933,320.72   ✓
```

> **$895,988 and $897,424 are both defensible, and they are $1,436 apart.**
> Deducting the cost percentage from the present value treats acquisition
> costs as a percentage *of value*; grossing up treats them as a percentage
> *of price*, which is what stamp duty and legals actually are. The
> gross-up is the algebraically consistent one and is what note 06 §4.1 uses
> for the assignment (`outlay = price × (1 + T)`). **Use the class method for
> the class exercise so your figures match the tutor's, and state the
> gross-up in your A1 assumptions sheet.** Ask which the marker expects — on
> an $8m purchase at the 5.5% acquisition costs the assignment uses, the
> same gap is about **$24,200** — `8,440,000 × (1/1.055 − 0.945)`.

Either way the *decision* is unchanged here, which is the honest thing to say
in an exam: name both, show the difference, and note that it does not change
the recommendation.

## 6.8 Step 7 — The Answer

**Read as a maximum price:**

```
Maximum purchase price   $895,988   (class method)
                         $897,424   (gross-up)
Asking price             $930,000
```

The house is $32,576–$34,012 too expensive for a 10% required return. You
would offer at or below roughly $896,000, or walk. Implied initial yield at
the maximum price is `30,880 / 895,988 = 3.45%`; at the asking price it is
3.32% net, 4.33% gross.

**Read as an expected return:** fix the price at $930,000 and solve for the
rate that makes the present value equal it.

```
Expected return, price only              10.08%
Expected return, price + 4% acquisition   9.17%
```

> **Whether this deal passes depends entirely on whether acquisition costs
> are inside the outlay.** On the price alone it returns 10.08% and clears
> the 10% objective. Add the $37,200 of stamp duty, legals and due diligence
> that you must actually pay, and it returns 9.17% and fails. That is a 91
> basis point swing produced by a modelling convention, and it flips the
> recommendation. Acquisition costs are real money leaving your account in
> period 0; put them in, and say so.

Note also that the two readings agree: maximum price $895,988 < asking
$930,000, and expected return 9.17% < required 10%. If they ever disagree,
one of them is wrong — that is a free consistency check on any DCF you build.

## 6.9 The Discount Rate — Deferred to Week 4

The deck states the shape and stops:

```
WHAT   the required return       rt = rf + rp
WHEN   applied in each period t
HOW    next week
```

Two things worth carrying into Week 4. First, `rt` carries a *t* subscript —
the required return is allowed to differ by period, even though almost every
student model holds it flat. Second, the discount rate and the terminal yield
are different numbers doing different jobs: the discount rate prices *your*
holding period, the terminal yield prices the *next* buyer's. In Exercise 1
they are 10% and 3.5% and both are correct.

<details><summary>Checkpoint</summary>

1. A property is held for six years. Which period's net income prices the
   sale, and why that one?
2. Weekly rent $1,680, vacancy allowance 5% of gross potential income,
   statutory charges $920 per quarter, other operating expenses $9,450 p.a.
   Give the full waterfall and the outgoings ratio.
3. A purchase price is $2,400,000 and acquisition costs are 5%. What is the
   period 0 cashflow, and what discount factor applies to it?
4. The required return is 9% and income is forecast to grow 4% p.a. Is a
   4.75% terminal yield coherent?
5. A DCF summary reads "NPV $1,240,000", and the next line reads "less
   acquisition costs". Is $1,240,000 an NPV?
6. Name the four components of net income across a holding period, and say
   which one carries no cashflow.

**Answers**

1. **Period 7** — the year *after* the sale. The buyer at the end of year 6
   receives year 7's income; you have already collected year 6's.
   Capitalising year 6 understates the exit.
2. ```
   Gross potential   1,680 × 52        =  $87,360
   less vacancy      5%                =  $ 4,368
   Gross effective                        $82,992
   less statutory    920 × 4           =  $ 3,680
   less other opex                        $ 9,450
   NET OPERATING INCOME                   $69,862
   ```
   Outgoings ratio `13,130 / 87,360 =` **15.03%** of gross potential income
   — just inside the plausible band, which is worth a second look at whether
   any expense line is missing.
3. `2,400,000 × 1.05 =` **−$2,520,000**, an outflow. Acquisition costs are
   *added* to the price. The discount factor is `1/(1+r)⁰ =` **1** — period 0
   is today and is never discounted. Putting the outlay in period 1 flatters
   the NPV.
4. Marginally low. Under `r ≈ y + g`, `4.75% + 4% = 8.75%`, which is 25 basis
   points below the 9% required return. A 5.0% exit yield would reconcile
   exactly. It is defensible if you argue the exit yield tightens over the
   hold — but you have to make that argument, not leave the reader to spot
   the gap.
5. **No.** It is a gross present value. An NPV already has the outlay
   deducted; this one has costs deducted on the line beneath, which would be
   double-counting if the label were accurate.
6. Period 0 (price plus acquisition costs); periods 1 to n (gross less
   vacancy less expenses); period n (terminal value less selling costs); and
   period n+1 (net income only). **Period n+1 carries no cashflow** — it
   exists solely to price the exit.
</details>

## Summary

- A DCF is a time-value tool for **irregular** cashflows. Once income is
  uneven, the annuity formulas stop working and you discount period by
  period.
- Step 1 sets *n*, the period length, and whether payments are in advance or
  arrears. Period 0 holds the purchase; period n+1 holds nothing but the
  income the exit is priced from.
- Step 2 is where the errors are. For every line ask **when, what, how**.
  Gross potential → less vacancy → gross effective → less statutory charges
  and operating expenses → net operating income.
- Acquisition costs are **added** to the price, never subtracted — the deck's
  concept-check slide says otherwise and is wrong.
- Income growth and expense growth are two different rates. Freezing expenses
  is worth 2.34% of the answer in this exercise.
- Sale price capitalises **year n+1** net income at the terminal yield, then
  selling costs come off.
- The sum of PVs is a **gross** present value. Subtract the outlay before you
  call anything an NPV.
- Step 6 has two conventions, $1,436 apart on this exercise. Use the class
  method in class, the gross-up in A1, and state which.
- Step 7 answers either "what is the most I can pay?" or "what will I earn at
  this price?" — and the two answers must agree in direction.
