# Practice Questions — Weeks 6+

<!-- notation:start -->
<details class="notation"><summary>Notation key — what the symbols in this note mean</summary>

| Symbol | Means |
|---|---|
| `NOI` | Net operating income — the same idea: income after operating costs, before finance and tax |
| `V` | Value of the property |
| `PV` | Present value — a future amount expressed in today's dollars |
| `FV` | Future value |
| `NPV` | Net present value — PV of everything in minus everything out. Positive = accept |
| `IRR` | Internal rate of return — the discount rate that makes NPV = 0 |
| `DCF` | Discounted cash flow — the model: forecast the cashflows, discount them to today |
| `CF₀, CFₜ` | Cash flow — at time 0 (the purchase) and at period t |
| `r` | Discount rate — the required return used to discount future cashflows |
| `n` | Number of periods — the holding period; n+1 is the year after it (used for the terminal value) |
| `rP` | Risk premium in the discount-rate build-up · in the leverage formula, the property's own (unlevered) return |
| `LVR` | Loan-to-value ratio — loan ÷ property value |
| `L` | Loan amount |
| `E, Eq` | Equity — the investor's own money in the deal |
| `rE` | Return on equity (the investor's geared return) |
| `rD` | Cost of debt — the interest rate on the loan |
| `LR` | Leverage ratio — debt ÷ equity |
| `PMT` | Loan payment each period (interest + principal) |
| `IPMT, INTₜ` | Interest part of a loan payment (the tax-deductible part) |
| `PPMT, AMORTₜ` | Principal part of a loan payment (reduces the balance; not deductible) |
| `DCR` | Debt coverage ratio — NOI ÷ annual debt service |
| `I/Y` | Calculator key — interest rate per year |
| `N` | Calculator key — number of periods |
| `CA` | Calculator — "clear all" cash-flow data |
| `CGT` | Capital gains tax |
| `WDV` | Written-down value — cost less depreciation claimed so far |

[Full USB245 notation key →](#/USB245/99-notation-key)

</details>
<!-- notation:end -->

Sections J–M: the financial calculator, property finance and leverage,
mortgage mathematics, and property taxation. Earlier material is in
[Practice Questions](#/USB245/19-practice-questions) (Sections A–F) and
[Practice Questions — Weeks 3+](#/USB245/20-practice-questions-weeks-3-plus)
(Sections G–I).

Answers are tap-to-reveal. **Every numerical answer was computed
independently in Python**, not copied from a solution sheet. Work them on
the calculator, not in Excel — that is how you will sit them.

---

## Section J — The Financial Calculator

**J1.** You enter `PV = 320,000`, `PMT = 2,400`, `N = 240`, `FV = 0` and
press `COMP I/Y`. The calculator errors. What did you do wrong?

<details><summary>Answer</summary>

**`PV` and `PMT` have the same sign.** The solver balances money in
against money out, so they must be opposite. You borrowed $320,000
(positive, money received) and repay $2,400 a month (negative, money
paid). Press `+/−` before entering the payment: `PMT = −2,400`.
</details>

**J2.** Explain, in one sentence each, why Excel's `NPV()` needs period 0
added back outside the function, while the Sharp's cash flow mode does
not.

<details><summary>Answer</summary>

**Excel:** `=NPV(rate, range)` treats the *first* cell in the range as
period **1** and discounts it one period, so a period-0 outlay placed
inside the range would be wrongly discounted — hence
`=NPV(rate, CF1:CFn) + CF0`.

**Calculator:** cash flow mode indexes its first `DATA` entry as `CF D0`
and applies a discount factor of 1 to it, so period 0 belongs *inside*
the data set.

(Excel's `IRR()` behaves like the calculator — period 0 goes in the
range. Only `NPV()` is the odd one out.)
</details>

**J3.** A property produces five annual receipts of $46,000 with no
purchase price. Can you compute (a) the sum of PVs, and (b) the IRR?

<details><summary>Answer</summary>

**(a) Yes.** It is an ordinary annuity — use the TVM solver:
`N = 5`, `I/Y = r`, `PMT = 46,000`, `FV = 0`, `COMP PV`.

**(b) No.** IRR requires at least one **sign change** in the cash flow
series. With no initial outlay there is no root to find and the
calculator will error. A stream of positive receipts has a *value*, not a
*rate of return*.
</details>

**J4.** A property is bought for $8m, produces $1m a year for 8 years and
sells for $12m at the end of year 8. List the `DATA` entries you make in
cash flow mode, in order.

<details><summary>Answer</summary>

**Nine entries:**

```
+/− 8000000  DATA      CF D0 = −8,000,000
1000000  DATA          ×7    (periods 1 to 7)
13000000  DATA         CF D8 = 13,000,000
```

The last one is the trap: **year 8 carries both** the final year's net
income ($1m) **and** the sale price ($12m). They are one cash flow at one
point in time, so they are one entry.

At 10% this gives NPV **$2,933,014.76** and IRR **16.01%**.
</details>

**J5.** Before starting a new question you press `2ndF CA`. What does that
do, and what does it *not* do?

<details><summary>Answer</summary>

`2ndF CA` **deletes all cash flow data** in cash flow mode.

It does **not** clear the TVM variables, and — critically — `RATE (I/Y)`
is **shared** between cash flow mode and the TVM solver. A discount rate
left over from the previous question will silently produce a wrong NPV.
Clear memory as well: `2ndF M-CLR`.
</details>

---

## Section K — Leverage

**K1.** An investor holds $840,000 of equity in a property worth
$2,400,000. State the debt, the LVR and the leverage ratio.

<details><summary>Answer</summary>

```
D   = 2,400,000 − 840,000     = $1,560,000
LVR = 1,560,000 / 2,400,000   = 65.00%
LR  = V/E = 2,400,000/840,000 = 2.857
      check: D/E + 1 = 1.857 + 1 = 2.857   ✓
```

LVR and LR describe the same position on different scales. 65% LVR ≡ an
LR of 2.857.
</details>

**K2.** A property returns 8.5%. Debt costs 6.5%. The investor gears to
60% LVR. Use `rE = rD + LR(rP − rD)` to find the return on equity, then
verify it directly on a $1,000,000 property.

<details><summary>Answer</summary>

```
LR = V/E = 1 / (1 − 0.60) = 2.5
rE = 6.5% + 2.5 × (8.5% − 6.5%) = 6.5% + 5.0% = 11.50%
```

**Direct check on $1,000,000:**

```
NOI               = $85,000
Loan              = $600,000 at 6.5%  →  interest $39,000
Equity            = $400,000
Cash after finance = 85,000 − 39,000  = $46,000
ROE               = 46,000 / 400,000  = 11.50%   ✓
```

**Positive leverage** — the 2-point spread is magnified 2.5×, adding 5
points to the equity return.
</details>

**K3.** Same property, but debt now costs 10.5%. What happens, and what is
the general rule?

<details><summary>Answer</summary>

```
rE = 10.5% + 2.5 × (8.5% − 10.5%) = 10.5% − 5.0% = 5.50%
```

**Negative leverage.** The geared investor earns 5.5% where the ungeared
investor earns 8.5%. Borrowing has *destroyed* 3 points of return.

**Rule:** leverage magnifies the spread `(rP − rD)` in whichever
direction it points. `rP > rD` → gearing helps; `rP < rD` → gearing
hurts; `rP = rD` → gearing does nothing at all.
</details>

**K4.** "More equity means more profit, so a lower-geared deal is better."
Assess.

<details><summary>Answer</summary>

**True on dollars, false on returns — and returns are what matter.**

More equity means less debt, so less interest, so more dollars of profit
and a slightly higher profit-on-cost. But the *return on equity* falls,
often sharply, because the same profit is spread over a much larger
capital base.

The lecture's framing: the question is never "did I make money?" but
**"is this the best allocation of this capital?"** The capital freed by
gearing can buy a second asset. Percentage return is the right measure —
provided you also price the risk that comes with it.
</details>

---

## Section L — Mortgages

**L1.** A lender requires a minimum DCR of 1.30 and a maximum LVR of 65%.
A property is worth $9,000,000 with NOI of $720,000. Interest-only at
6.75%. What is the maximum loan?

<details><summary>Answer</summary>

**DCR test:**
```
Maximum debt service = NOI / DCR = 720,000 / 1.30 = $553,846.15
Maximum loan (interest-only) = 553,846.15 / 0.0675 = $8,205,128.21
```

**LVR test:**
```
0.65 × $9,000,000 = $5,850,000
```

**The binding constraint is LVR: $5,850,000.**

You must compute **both** and take the lower. The lecture's point is that
DCR is the lender's *primary question* — but on a well-covered,
low-yielding asset it is often LVR that actually caps the loan. Reverse
the yield and DCR binds instead.
</details>

**L2.** A $2,750,000 loan at 6.2% p.a., 20 years, monthly, fully
amortising. Find (a) the monthly payment, (b) the first month's interest
and principal split, (c) the balance after 5 years.

<details><summary>Answer</summary>

```
rate = 0.062/12,  nper = 240

(a) PMT    = $20,020.46 per month
(b) INT₁   = 2,750,000 × 0.062/12   = $14,208.33
    PPMT₁  = 20,020.46 − 14,208.33  =  $5,812.13
(c) Balance after 60 payments        = $2,342,396.27
```

Note (c): after a quarter of the term, only **$407,603.73** of the
$2,750,000 principal is repaid — 14.8%. The front-loading is the same
phenomenon as the lecture's "$857,057 after 15 years".
</details>

**L3.** Same loan, but interest-only. Compare the annual cash cost, and
say which structure a commercial investor would choose and why.

<details><summary>Answer</summary>

```
Interest-only:  2,750,000 × 6.2%     = $170,500.00 per year
Amortising:     20,020.46 × 12       = $240,245.57 per year
Difference                             $69,745.57 per year
```

A commercial investor with a 5–10 year hold would usually take
**interest-only**: it preserves $69,746 a year of cashflow, and **all**
of the payment is tax-deductible, whereas the amortising loan's extra
$69,746 is non-deductible principal repayment.

The trade-off: a **balloon payment** of the full $2,750,000 at maturity,
requiring refinance or sale, and no equity built by amortisation. Over a
short hold the investor expects to realise equity through *capital
growth*, not principal repayment.
</details>

**L4.** You can afford $5,400 a month. Rates are 7.4% p.a. over 25 years,
monthly. Your lender will go to 70% LVR. What is the most expensive
property you can buy, and what deposit do you need?

<details><summary>Answer</summary>

```
i = 0.074/12,  n = 300,  PMT = −5,400

Maximum loan   PV              = $737,202.50
Maximum value  = L / LVR
               = 737,202.50 / 0.70  = $1,053,146.43
Deposit        = 1,053,146.43 − 737,202.50 = $315,943.93
```

Solve **affordability → loan → value**, in that order. And note that
$315,944 is the deposit only — acquisition costs sit on top of it and
come out of equity (Tutorial 5, §15.4).
</details>

**L5.** Interest rates rise mid-term on an amortising loan. What do you
recalculate, and with which inputs?

<details><summary>Answer</summary>

**Recalculate `PMT`**, using three current inputs:

```
rate  = the NEW periodic rate
nper  = the REMAINING term, not the original
PV    = the CURRENT outstanding balance, not the original loan
```

All three change. Using the original loan amount or the original term is
the standard error. (From the `Loan repayments` sheet's own note.)
</details>

---

## Section M — Taxation

**M1.** Classify each for tax: (a) council rates, (b) replacing a lift,
(c) stamp duty on purchase, (d) repainting in year 4, (e) repairing a
pre-existing roof leak in month 2 of ownership.

<details><summary>Answer</summary>

| | Treatment |
|---|---|
| (a) Council rates | **Deductible expense** — statutory charge |
| (b) Lift replacement | **Capital** — a renewal. Depreciate as plant; add to cost base |
| (c) Stamp duty | **Capital** — an acquisition cost. Not deductible; goes to **cost base** |
| (d) Repainting, year 4 | **Deductible** — a genuine repair, restoring the existing state |
| (e) Roof leak, month 2 | **Not deductible** — an **initial repair** of a defect present at purchase. Capital; to the cost base |

(d) and (e) are the same *kind* of work with opposite treatment, decided
entirely by **when** and by whether the defect pre-existed the purchase.
</details>

**M2.** A $1,200,000 building (40-year life) and $340,000 of plant
(10-year life, diminishing value). Compute five years of depreciation for
each.

<details><summary>Answer</summary>

**Building — straight line, `1/40 = 2.5%`:**
`$1,200,000 × 2.5% = $30,000 every year.` Five-year total **$150,000**.

**Plant — diminishing value, `2/10 = 20%` of written-down value:**

| Year | Depreciation | WDV |
|---|---|---|
| 1 | $68,000.00 | $272,000.00 |
| 2 | $54,400.00 | $217,600.00 |
| 3 | $43,520.00 | $174,080.00 |
| 4 | $34,816.00 | $139,264.00 |
| 5 | $27,852.80 | $111,411.20 |

Five-year total **$228,588.80**.

Note the plant is a quarter of the building's value but generates **50%
more deduction** over five years — front-loading plus the doubled rate.
</details>

**M3.** Purchase price $3,400,000; acquisition costs 5.5%; capex during
the hold $210,000; building allowances claimed $150,000. Sold for
$4,600,000 with selling costs of 2.2%, after 6 years. Compute the gross
gain, then the tax for (a) an individual on 47% and (b) a company.

<details><summary>Answer</summary>

```
Cost base = 3,400,000 + 187,000 + 210,000 − 150,000   = $3,647,000
Gain      = 4,600,000 − 101,200 − 3,647,000           =   $851,800  gross
```

**(a) Individual, held >12 months → 50% discount:**
```
Taxable gain = 851,800 × 50% = $425,900
Tax          = 425,900 × 47% = $200,173
```

**(b) Company — no discount, 30%:**
```
Tax = 851,800 × 30% = $255,540
```

The company pays **$55,367 more** despite the lower headline rate. Note
also that the $150,000 of building allowances raised the gross gain by
exactly $150,000 — the deductions were a deferral.
</details>

**M4.** A property produces taxable losses of $42,000, $38,000, $31,000
and $25,000 in years 1–4, then taxable income of $480,000 in year 5. Tax
rate 30%. What is the year-5 tax, and what would a naïve model get?

<details><summary>Answer</summary>

```
Accumulated losses = 42,000 + 38,000 + 31,000 + 25,000 = $136,000
Taxable in year 5  = 480,000 − 136,000                 = $344,000
Tax                = 344,000 × 30%                     = $103,200
```

A naïve `=taxable × rate` row gives `480,000 × 30% = $144,000` —
**$40,800 too much**. Carried-forward losses must be applied before the
final year is taxed. This is the most expensive single error in an
after-tax property DCF.
</details>

**M5.** Why can a **capital** loss not be offset against rental income,
when an ordinary tax loss can be offset against future income of any
kind?

<details><summary>Answer</summary>

Because capital losses are **ring-fenced to the capital account**. They
offset **capital gains only**, in the current year or carried forward
indefinitely — they cannot shelter rental or salary income.

An ordinary (revenue) tax loss carries forward against **future taxable
income of any kind**. Same word "loss", two different regimes. The
practical consequence: an investor who sells at a loss cannot use it
until they make another gain, which may be never.
</details>

**M6.** An investor is choosing between holding through a company and
holding personally, on a negatively geared property they expect to sell
at a large gain. Which two rows of the entity table decide it?

<details><summary>Answer</summary>

**"Pass through losses"** and **"Gains tax discount"** — the company gets
**neither**.

- Losses are **trapped inside the company** until it has income to absorb
  them, so the negative gearing shelters nothing in the meantime.
- The eventual gain is taxed **in full** at 30% with **no CGT discount**.

A negatively geared company is the worst of both worlds for this fact
pattern. A **trust** gets the discount but still cannot distribute losses.
Only **individuals and partnerships** get both.
</details>

---

## Section N — Putting It Together

**N1.** A commercial property is bought for $12,500,000 including costs.
Net income is $850,000 in year 1, growing 3% a year. It sells at the end
of year 5 for $15,800,000. Required return 9.5%. Compute the NPV and IRR
on the calculator.

<details><summary>Answer</summary>

| Year | Cash flow |
|---|---|
| 0 | −$12,500,000.00 |
| 1 | $850,000.00 |
| 2 | $875,500.00 |
| 3 | $901,765.00 |
| 4 | $928,817.95 |
| 5 | $16,756,682.49 ← year-5 income $956,682.49 **+** sale $15,800,000 |

```
NPV @ 9.5%  =  $983,635.28
IRR         =  11.38%
```

**Accept:** NPV > 0 and IRR (11.38%) > required return (9.5%). The two
measures agree, as they must for a single conventional project.

The year-5 entry is the trap again — income **and** sale price combine
into one cash flow.
</details>

**N2.** Explain why an investor's after-tax Equity IRR can be materially
lower than their before-tax Equity IRR even when the property makes tax
*losses* in every operating year.

<details><summary>Answer</summary>

Because the **capital gain** is taxed, and it lands in the exit year
where it dominates the cashflow.

In the Week 9 model, years 1–4 are identical before and after tax (no tax
is payable on a loss), yet the after-tax Equity IRR falls from **24.39%
to 19.35%** — a 5-point drop caused entirely by $74,009 of year-5 tax on
the capital gain, net of the carried-forward losses.

The operating losses do not disappear; they are *banked*, and they reduce
the final year's bill. But they only partly offset a gain that is much
larger than they are.
</details>

**N3.** Your A2 model shows a positive taxable income in year 3, a loss in
year 4, and a large gain in year 7. What must you change about the
supplied workbook's carried-forward-losses row?

<details><summary>Answer</summary>

**You must rebuild it.** The workbook's row is a plain running sum
(`= prior carried-forward + prior taxable income`), which is only correct
when **every** year is a loss.

With a profitable year 3, that year's income *consumes* some of the
accumulated losses. A running sum keeps carrying them anyway, so they get
used twice — understating tax in both year 3 and year 7.

The correct logic each year: apply available losses against positive
taxable income, tax the remainder, and carry forward **only what is
left** — i.e. an explicit offset step with a floor at zero, not a
cumulative sum.
</details>

---

## Where to Revise From

| Section | Read |
|---|---|
| J — Calculator | [Topic 6](#/USB245/06-topic-6-the-financial-calculator) |
| K — Leverage | [Topic 7](#/USB245/07-topic-7-property-finance-and-leverage), §14.2–14.4 |
| L — Mortgages | [Topic 7](#/USB245/07-topic-7-property-finance-and-leverage), §14.5–14.8; [Tutorial 5](#/USB245/13-tutorial-5-mortgages-and-the-after-finance-dcf) |
| M — Taxation | [Topic 8](#/USB245/08-topic-8-property-taxation); [Tutorial 6](#/USB245/14-tutorial-6-depreciation) |
| N — Integration | [Tutorial 7](#/USB245/15-tutorial-7-cgt-and-the-after-tax-dcf) |
