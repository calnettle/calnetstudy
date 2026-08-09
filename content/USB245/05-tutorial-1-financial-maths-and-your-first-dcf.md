# TUTORIAL — Financial Maths and Your First DCF

The Week 1 tutorial is an optional recap: capitalisation, time value of
money, and one genuinely useful monthly DCF. The Week 2 tutorial builds the
first Excel DCF. Everything below is worked end to end and every figure was
recomputed before it was written down.

The tutorial deck sets out the whole semester's lab programme — worth
keeping in front of you, because each week adds one layer to the assignment
model. It is reproduced in note 00.

## 3.1 Exercise 1a — Capitalisation

A commercial property generates **$120,000** p.a. of rental income. Annual
operating expenses: council rates $8,000, insurance $2,000, property
management $6,000, maintenance $4,000.

```
Outgoings = 8,000 + 2,000 + 6,000 + 4,000 = $20,000

NOI = 120,000 − 20,000 = $100,000 p.a.
```

*What is the property worth at a 7.5% cap rate?*

```
CV = NI / Y = 100,000 / 0.075 = $1,333,333
```

The tutorial slide poses the question and leaves the answer blank. Two terms
it flags for the DCF:

- **Initial yield** — year 0, when you buy it
- **Terminal yield** — year *n*, when you sell it

> **Outgoings ratio is the sanity check you run on any cap-rate sum.**
> Here `20,000/120,000 = 16.7%` of gross. For Australian commercial property
> a ratio far outside roughly 15–35% of gross means either the expense list
> is incomplete or the leases are structured differently than you assumed.
> 41 Park Road's ratio is 21.4% (note 06, §5.6) — plausible, which is itself
> evidence that the outgoings schedule is broadly complete.

## 3.2 Exercise 1b — Reading a Transaction

> "GIC … purchased a 27,670 sqm site, featuring a 14,543 sqm concrete tilt
> panel office/warehouse, for $20m on a cap rate or yield of 8%."

*Net income per sqm? Site coverage ratio?*

```
Step 1 — invert the cap rate to get income:
  NI = CV × Y = 20,000,000 × 0.08 = $1,600,000 p.a.

Step 2 — divide by the RIGHT area:
  per sqm of building = 1,600,000 / 14,543 = $110.02/sqm
  per sqm of site     = 1,600,000 / 27,670 =  $57.82/sqm

Step 3 — site coverage:
  = building area / site area
  = 14,543 / 27,670
  = 52.56%
```

*Why is site coverage interesting?* Because the 47.4% that is not built on
is doing something. For an industrial asset it is hardstand, truck
manoeuvring and parking — a functional requirement, and part of why the
tenant is there. It is simultaneously **latent development capacity**, which
is value that does not appear anywhere in the income line. Two buildings on
identical income with coverage of 52% and 85% are not the same investment.

## 3.3 Exercise 2 — Gross to Net to Value

*What would you pay for a 5,486 sqm prime industrial property, fully leased
at $175/sqm gross, outgoings $62/sqm, cap rate 8%?*

```
Gross income  = 5,486 × 175  =  $960,050
Outgoings     = 5,486 ×  62  =  $340,132
                                ────────
Net income    =                 $619,918      (= 5,486 × $113/sqm net)

Capital value = 619,918 / 0.08 = $7,748,975
```

Cross-check: net rate `175 − 62 = $113/sqm`, so `5,486 × 113 = $619,918` ✓.
Value per sqm of building: `7,748,975 / 5,486 = $1,412.50/sqm`.

> **Feeding the GROSS income into `CV = NI/Y` gives $12,000,625 — 54.9% too
> high.** The outgoings ratio here is `340,132/960,050 = 35.4%` of gross,
> which is high, and that is exactly why the error is so expensive. The
> higher the outgoings ratio, the more damage the mistake does. Say "net"
> out loud before dividing.

## 3.4 Exercises 3–5 — Time Value of Money

Three shapes, three formulas. Learn to spot which is which from the wording.

### Exercise 3 — PV of an annuity

*Net rent of $16,200 p.a. for the remaining 12 years of the lease. Interest
rate 6.75%. What is the income stream worth today?*

```
              1 − 1/(1+r)^N
PV = PMT  ×  ───────────────
                    r

              1 − 1/(1.0675)^12
   = 16,200 × ─────────────────
                     0.0675

   = 16,200 × 8.049600     = $130,403.51
```

Slide gives $130,403.5 ✓. Sanity check: 12 × $16,200 = $194,400 of nominal
rent, present-valued down to $130,404 — a 67% ratio, which is about right
for 12 years at 6.75%.

### Exercise 4 — PV of a single future sum

*A block of units must be repainted in 7 years, at a cost of $125,000 then.
What lump sum invested today at 6.45% covers it?*

```
            1              125,000
PV = FV × ───────   =    ───────────   =   $80,703.13
          (1+r)^n        (1.0645)^7
```

Slide gives $80,703 ✓.

### Exercise 5 — sinking fund payment

*Same repaint. What equal annual payment at 6.45% accumulates to $125,000?*

```
            (1+r)^n − 1                 FV × r         125,000 × 0.0645
FV = PMT × ─────────────   →   PMT =  ───────────  =  ──────────────────
                 r                    (1+r)^n − 1       (1.0645)^7 − 1

                                                   =  $14,688.82
```

Slide gives $14,688.8 ✓. Check: 7 payments × $14,688.82 = **$102,821.74** of
contributions; the other $22,178.26 is compound interest.

> **Exercises 4 and 5 are the same problem with different questions, and
> both answers are smaller than $125,000 — but for different reasons.**
> $80,703 is *one* payment made now. $14,689 is *seven* payments made over
> the period. If you ever solve for PMT and get a number larger than
> `FV / n`, you have used the PV factor where the FV factor belongs.

## 3.5 Exercise 6 — Net Present Value

An investor expects net rental income of **$20,800** in year 1 from a
Brisbane middle-ring residential property, after allowing for vacancy,
management fees, maintenance, insurance and council rates. Rents grow
**2.5% p.a.** The required return is **9%**. Five years. **No sale proceeds**
— rental income only.

```
        n     CFt
NPV =   Σ   ───────
       t=1  (1+r)^t
```

Write down what you know before touching a calculator:

```
CF1 = $20,800            r = 9%
g   = 2.5% p.a.          t = 5 years
No terminal value.
```

Then build the table:

```
 t     CFt          DF = 1/(1.09)^t        PV
──────────────────────────────────────────────────
 1   $20,800.00        0.9174         $19,082.57
 2   $21,320.00        0.8417         $17,944.62
 3   $21,853.00        0.7722         $16,874.53
 4   $22,399.32        0.7084         $15,868.25
 5   $22,959.31        0.6499         $14,921.97
                                 ─────────────────
                          Σ PVs =      $84,691.93
```

The slide's rounded table gives **$84,692** ✓.

**Q: What does this tell you?** That five years of *rent alone* is worth
$84,692 today at a 9% required return. It is **not** what the property is
worth, because no sale proceeds are included. Add a terminal value and the
figure roughly triples.

> **The slide's discount factors are rounded to two decimals and its
> arithmetic is not.** It shows `1/1.19 = 0.84` for year 2 — that is
> `1/1.09² = 1/1.1881`, printed to two places. If you multiply $21,320 by
> 0.84 you get $17,908.80, which is $35.82 short of the printed $17,945.
> The tutorial's own solution to Exercise 7 spells out the rule: **use at
> least 4 decimal places** on discount factors. Over 84 monthly periods,
> two-decimal factors will cost you thousands.

## 3.6 Exercise 7 — The Gap-Year Monthly DCF

This is the most useful exercise in the deck, because it is a **monthly**
model with **genuinely uneven** cashflows — exactly the shape A1 requires.

*You want to take a gap year. Your budget is $1,000 per month for the first
3 months, increasing by 20% each month thereafter as you move from Asia to
Europe. You have found an investment forecasting returns of 15% p.a. paid
monthly. How much do you need before you go?*

### Step 1 — set up the periods

Twelve monthly periods, `n = 1 … 12`.

### Step 2 — work out the monthly cashflows

```
Months 1–3:  $1,000
Month 4:     $1,000 × 1.2 = $1,200
Month 5:     $1,200 × 1.2 = $1,440
… × 1.2 each month through to month 12
```

### Step 3 — work out the discount rate

The question says 15%, but that is **annual**, and the cashflows are
**monthly**. All inputs must use the same convention:

```
15% / 12 = 1.25% per month
```

### Step 4 and 5 — discount and sum

Use at least 4 decimal places on the factors.

```
  n      NI            DF          PV
────────────────────────────────────────────
  1   $ 1,000.00     0.9877     $   987.65
  2   $ 1,000.00     0.9755     $   975.46
  3   $ 1,000.00     0.9634     $   963.42
  4   $ 1,200.00     0.9515     $ 1,141.83
  5   $ 1,440.00     0.9398     $ 1,353.28
  6   $ 1,728.00     0.9282     $ 1,603.89
  7   $ 2,073.60     0.9167     $ 1,900.90
  8   $ 2,488.32     0.9054     $ 2,252.92
  9   $ 2,985.98     0.8942     $ 2,670.13
 10   $ 3,583.18     0.8832     $ 3,164.60
 11   $ 4,299.82     0.8723     $ 3,750.63
 12   $ 5,159.78     0.8615     $ 4,445.20
                            ────────────────
        $27,958.68            $25,209.91
```

Both totals match the tutorial's answer exactly ($27,959 and $25,209.91).

You spend **$27,959** over the year but only need **$25,210** today — the
$2,749 difference is the interest the unspent balance earns while you
travel. That gap *is* the time value of money, made concrete.

### The Excel version

```
A       B                    C                        D
n       NI                   DF                       PV
1       1000                 =1/(1+15%/12)^A2         =B2*C2
2       1000                 …                        …
3       1000
4       =B4*(1+20%)          …                        …
…
12
        =SUM(B2:B13)                                  =SUM(D2:D13)
```

> **The Excel screenshot on that slide is garbled and should not be copied
> literally.** It prints the escalation formula `=B4*(1+20%)` against the
> row for month 3 and shows `=1/(1+15%/12)^A2` floating between the month-3
> and month-4 rows. The *logic* is right — escalate from month 4 onward, and
> build the discount factor from the monthly rate — but the cell references
> in the image do not line up with the rows they sit beside. Build it from
> the arithmetic above, then check your month-12 NI is $5,159.78.

## 3.7 Building It Properly in Excel

The tutorial's spreadsheet is four columns. Everything A1 requires is a
larger version of the same four columns, so get the habits right now.

```
        A          B                    C                       D
  1     n          NI                   DF                      PV
  2     1          1000                 =1/(1+$G$1/12)^A2       =B2*C2
  3     2          =B2                  =1/(1+$G$1/12)^A3       =B3*C3
  4     3          =B3                  =1/(1+$G$1/12)^A4       =B4*C4
  5     4          =B4*(1+$G$2)         =1/(1+$G$1/12)^A5       =B5*C5
  …
 13    12          =B12*(1+$G$2)        =1/(1+$G$1/12)^A13      =B13*C13
                   =SUM(B2:B13)                                 =SUM(D2:D13)

  G1   0.15   ← annual rate      (the only place it appears)
  G2   0.20   ← monthly escalation
```

Four habits, all of which the assignment marks:

1. **Every rate lives in one labelled cell**, referenced absolutely
   (`$G$1`). Never type `15%` inside a formula. If the rate appears in
   twelve formulas you cannot run sensitivity on it, which is most of A2.
2. **One formula, copied.** Rows 5 through 13 are identical. If a single
   cell mid-column has been hand-edited, the model is silently wrong and no
   error message will tell you. This is the commonest failure mode in a
   student workbook.
3. **The escalation is relative** (`=B4*(1+$G$2)`) so it chains down the
   column; the rate reference is absolute so it does not drift.
4. **Format the discount factor column to at least four decimals** on
   screen. Excel carries full precision internally, but a two-decimal
   display invites you to "check" a PV by hand against a rounded factor and
   conclude the sheet is broken when it is not.

> **Displayed precision and stored precision are different things, and only
> one of them affects your answer.** The tutorial's calculator table and the
> lecture's Exercise 6 table both print factors to 2–4 places while
> computing on the full value. If you retype a displayed factor into another
> cell you have hardcoded a rounding error. Reference the cell; never retype
> a number Excel already knows.

### The financial-calculator route

The tutorial also shows the Sharp EL-738XTB route, which skips step 3
entirely: for each period, enter `n`, `i` and `FV` (the period's cashflow)
and solve for `PV`. That gives the same column of present values without
building discount factors.

```
 n = 1      i = 1.25      FV = 1,000      PV = ?   →   987.65
 n = 2      i = 1.25      FV = 1,000      PV = ?   →   975.46
 …
```

Worth knowing for the exam, where you will not have Excel. Two cautions:
the `i` key on that calculator takes a **percentage** (1.25, not 0.0125),
and `PV` will return with the opposite sign to `FV` because the calculator
assumes one is an outflow. Take absolute values when you total the column.

> **Do not use the calculator's built-in NPV/CF worklist for an escalating
> stream without checking the first period.** Most financial calculators
> treat `CF0` as occurring at time zero — undiscounted — and `CF1` as the
> end of period 1. If you enter your month-1 cashflow as `CF0`, every period
> is discounted one step too little. In this exercise that would overstate
> the answer by about 1.25%. Enter a `CF0` of zero when the first cashflow
> arrives at the end of period 1.

## 3.8 What the Week 2 Tutorial Covers

The Week 2 lab is the first one that counts, and its agenda is three items:

1. **Week 1 homework review** — the asset-class classification grid, and the
   PDS hunt (find a property-related PDS and identify its investment
   objectives; would you invest, given your own risk tolerance?).
2. **NPV in Excel — your first DCF.** The five-year, 2.5%-escalating stream
   worked in note 02, §2.9, built as a spreadsheet rather than a table.
3. **The assignment brief**, and group formation — three students per group.

Bring the financial calculator: the Week 2 lecture closes with
"NEXT WEEK — DCF — BRING YOUR FINANCIAL CALCULATORS", and the Week 3
tutorial goes straight to a multi-tenanted commercial DCF.

> **The Week 1 tutorial is flagged "optional" and is the one that teaches
> the monthly convention.** Skipping it means arriving at the Week 2 lab
> without having built a monthly, escalating, unevenly-timed cashflow by
> hand — which is exactly the shape of A1. Work Exercise 7 before Week 2
> even if you do not attend.

## 3.9 The Discount Rate Convention Trap

The unit's own materials use **two different** monthly-rate conventions, and
both are correct — for different questions. This is the single most
dangerous thing in Weeks 1–2.

| Source | Formula | Monthly rate | Implied effective annual |
|---|---|---|---|
| Week 1 tutorial, Ex 7 | `15% / 12` | 1.2500% | `1.0125¹² − 1 =` **16.076%** |
| Worked-example DCF workbook, cell B13 | `(1 + 7.5%)^(1/12) − 1` | 0.6045% | **7.500%** |

The workbook's own comment on that cell reads: *"Monthly-equivalent rate:
(1+annual)^(1/12)-1. **NOT annual/12** — that ignores compounding."*

Both are right, because they are answering different questions:

```
"15% p.a. PAID MONTHLY"        →  a NOMINAL annual rate, compounded monthly
                                  monthly rate = 15%/12 = 1.25%
                                  the true annual outcome is 16.076%

"7.5% p.a. EFFECTIVE"          →  an ANNUAL rate that already includes
                                  compounding
                                  monthly equivalent = 1.075^(1/12) − 1
                                                     = 0.6045%
```

> **Decide which convention your discount rate is quoted in, write it in the
> assumptions sheet, and never mix them.** On an $8m, 84-month model the
> difference between 0.6045%/month and 0.625%/month (`7.5%/12`) compounds
> into a materially different NPV — and a marker who sees `=B12/12` in your
> assumptions sheet without a note will assume you did not know the
> difference. The safest habit: state the annual rate, state whether it is
> nominal or effective, and show the conversion formula in an adjacent cell.

**Which should A1 use?** Your discount rate will be derived in the Week 4
tutorial by market comparison and WACC. Market-derived property discount
rates and IRRs are conventionally quoted as **effective annual** rates, so
`(1+r)^(1/12) − 1` is the defensible default — which is what the teaching
workbook does. Loan interest, by contrast, is usually quoted as a **nominal
annual rate**, so `rate/12` is right for the interest line. The teaching
workbook does exactly that too: `B38 = loan × rate / 12`. Confirm the
treatment with your tutor before A1 is submitted, and state it in the
assumptions.

<details><summary>Checkpoint</summary>

1. A lease has 9 years left at $48,000 net p.a. At an 8.25% required return,
   what is the income stream worth today?
2. You need $300,000 in 6 years for a roof replacement. At 5.4%, what single
   sum today, and what equal annual payment, get you there?
3. A model discounts monthly cashflows at `9%/12 = 0.75%`. What effective
   annual rate is that actually applying?
4. A tutorial table shows CF = $21,320, DF = 0.84, PV = $17,945. Reconcile.
5. A 1,850 m² office building is fully leased at $395/m² gross with
   outgoings of $118/m². What is the value at a 6.75% cap rate, and what is
   the outgoings ratio?
6. Your gap-year budget is $1,400/month for the first two months, then rises
   10% each month for the remaining ten. At 12% p.a. paid monthly, what is
   the month-12 spend, and what monthly discount rate applies?

**Answers**

1. `PV = 48,000 × (1 − 1.0825^-9)/0.0825 = 48,000 × 6.182464 =` **$296,758**
2. Lump sum `300,000 / 1.054^6 = 300,000 / 1.371020 =` **$218,815**.
   Annual payment `300,000 × 0.054 / (1.054^6 − 1) = 16,200 / 0.371020 =`
   **$43,663**. Check: 6 × 43,663 = $261,981 of contributions, plus $38,019
   of interest = $300,000 ✓
3. `1.0075¹² − 1 =` **9.381%**, not 9%. The extra 38 basis points is the
   compounding the simple division discarded.
4. The DF is printed rounded. `21,320 × 0.84 = $17,908.80`; the true factor
   is `1/1.09² = 0.841680`, and `21,320 × 0.841680 = $17,944.62`, which
   rounds to the printed $17,945. **The table's PV column is correct; its DF
   column is a display rounding.** Always carry at least 4 decimals.
5. Gross `1,850 × 395 = $730,750`; outgoings `1,850 × 118 = $218,300`; net
   `= $512,450` (or `1,850 × $277/m²`). Value `512,450 / 0.0675 =`
   **$7,591,852**, i.e. $4,103.70/m² of building. Outgoings ratio
   `218,300 / 730,750 =` **29.9%** of gross — inside the plausible band.
6. Month 12 is the tenth escalation after month 2:
   `1,400 × 1.10^10 =` **$3,631.24**. The rate is quoted as a **nominal**
   annual rate paid monthly, so the monthly discount rate is
   `12% / 12 =` **1.00%** — *not* `1.12^(1/12) − 1 = 0.949%`. Total nominal
   spend over the year is $27,343.63.
</details>

## Summary

- `CV = NI/Y` needs **net** income; check the outgoings ratio sits in a
  plausible band before you trust the result.
- Invert a cap rate to get income from a market transaction:
  `NI = CV × Y`. Then name the area you divide by.
- Site coverage = building area / site area. The uncovered share is either
  operational necessity or development capacity.
- Three time-value shapes: PV of an annuity, PV of a lump sum, sinking-fund
  PMT. Identify the shape from the wording before reaching for a formula.
- NPV generalises them all. Carry **4+ decimal places** on discount factors.
- The gap-year exercise is a monthly, uneven-cashflow DCF — the template for
  A1.
- Two monthly-rate conventions live in this unit's materials. `rate/12` is
  for nominal annual rates (loan interest); `(1+rate)^(1/12) − 1` is for
  effective annual rates (discount rates and IRRs). State which you used.
