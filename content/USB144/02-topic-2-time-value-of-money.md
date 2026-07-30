# Topic 2 — Time Value of Money

Week 2 and the Week 3 tutorial. This is the topic that is pure arithmetic,
which means it is the topic where careless input errors cost the most
marks. The concepts take twenty minutes. The discipline of matching `n`
and `i` to the compounding period takes practice.

## Why the unit bothers

Income valuation methods rest on an income stream running for **10 to 30
years** (DCF) or **in perpetuity** (capitalisation of net rent). To value
either you must be able to move money through time. The Week 2 deck lists
six things you have to be able to compute:

1. Compounding interest
2. Present value of one dollar
3. Future value of one dollar
4. Present value of one dollar per annum
5. Future value of one dollar per annum
6. Sinking funds

That is three lump-sum calculations and three annuity calculations. Every
question in the unit is one of the six with different words wrapped around
it.

## The four inputs

```
i    = the interest rate (as a decimal in a formula, as a whole
       number in a Sharp EL-735)
p    = the principal
n    = the number of periods the sum is invested or borrowed
pmt  = the amount paid at regular intervals
```

You need **at least three** of these to solve for the fourth. That is the
financial calculator's third rule, and it is also the diagnostic for a
badly-set-up question: if you can only identify two, you have missed an
input.

## Nominal and real

- **Nominal return**: money generated before taking inflation and other
  expenses into account.
- **Real return**: actual return after factoring in inflation.

The deck sets an exercise and leaves the answer to the recording: *an
investment returns 8% while inflation is 3% — what are the nominal and
real rates?*

```
Nominal          = 8%

Real (approx)    = 8% − 3%
                 = 5%

Real (Fisher)    = (1.08 / 1.03) − 1
                 = 1.048544 − 1
                 = 4.85%
```

> **Say which one you used.** The subtraction approximation and the Fisher
> equation disagree by 15 basis points here, and the gap widens as rates
> rise. At 20% inflation the approximation is out by nearly two
> percentage points. In a written answer, state "real return ≈ 4.85%
> using (1+n)/(1+i) − 1" and you cannot be marked down either way.

## Simple interest

Interest is paid at the end of each period and is **not reinvested**.

```
Interest = p × i × n
```

**Example.** $1,000 invested for five years at 10% simple interest,
one annual payment, not reinvested.

```
Interest = 1,000 × 0.10 × 5
         = $500

Closing balance = 1,000 + 500 = $1,500
```

> **Read whether the question wants the interest or the balance.** The
> Week 3 tutorial's Question 1 asks for "the amount of interest that the
> investment has earned in total" on $20,000 at 6% for three years. The
> answer is `20,000 × 0.06 × 3 = $3,600`. The lecturer's own solution file
> computes `(20000*0.06*3)+20000 = $23,600`, which is the closing balance
> — a different question. Both numbers appear on the sheet, so make sure
> you hand in the one that was asked for.

## Compound interest

Interest is charged or received more often than annually, and each
payment becomes part of the principal for the next.

```
FV = p (1 + i)ⁿ
```

**Example.** $1,000 invested for five years at 10% p.a., compounded
monthly.

```
Monthly rate  i = 0.10 / 12   = 0.008333
Periods       n = 5 × 12      = 60

FV = 1,000 (1.008333)⁶⁰
   = 1,000 × 1.645309
   = $1,645.31

Principal $1,000, interest $645.31
```

> **The deck writes this rate as 0.0083 and still prints $1,645.31 —
> those two do not go together.** `1,000 × (1.0083)⁶⁰ = $1,642.05`, which
> is $3.26 short. The published answer uses the full `0.10/12`. Keep the
> unrounded rate in your calculator's memory and only round the final
> answer. This is not pedantry: on a $10m valuation the same rounding
> habit moves the answer by tens of thousands.

## Compounding frequency

Same money, same headline rate, same term — five different answers.
$12,000 invested for 8 years at 5.5%:

| Frequency | i per period | n | FV |
|---|---|---|---|
| Annually | 5.5% | 8 | **$18,416** |
| Semi-annually | 2.75% | 16 | **$18,522** |
| Quarterly | 1.375% | 32 | **$18,577** |
| Monthly | 0.4583% | 96 | **$18,614** |
| Daily | 0.01507% | 2,920 | **$18,632** |

All five verified against the exact rate `0.055 / m`. The deck's table
matches to the dollar except for quarterly, which it prints as $18,576
against a computed $18,576.72 — a rounding-down, not an error.

The lesson in the table is that going from annual to daily compounding on
this money buys you **$216 over eight years, 1.17% of the closing
balance**. Frequency matters, but not as much as students expect. The rate
matters far more.

> **Convert the rate *and* the term, or neither.** The single most common
> exam error in this topic is halving the rate but forgetting to double
> the periods. `12,000 × (1.0275)⁸ = $14,908.57`, which is not an
> answer to any question anyone asked. If you change `i`, change `n` in the same
> breath.

And the second-order trap the deck itself falls into:

> **Rounding the periodic rate before you compound it is a real error, not
> a presentation choice.** The deck writes the monthly rate for Example 1C
> as `0.458 (5.5/12)`. Compounding 0.458% for 96 periods gives
> **$18,607.84**, but the deck's own answer table says **$18,614**, which
> requires the unrounded 0.4583%. A $6 gap on $12,000 becomes a $6,000 gap
> on $12m. Never round `i`.

### Choosing between two offers

*You have $50,000 for 8 years. Option A pays 4.75% annually; Option B pays
4.62% monthly. Which is better?*

```
A:  50,000 × (1.0475)⁸                  = $72,477.34
B:  50,000 × (1 + 0.0462/12)⁹⁶          = $72,306.45
                                          ------------
A is better by                            $   170.89
```

The higher nominal rate wins despite the less frequent compounding,
because 13 basis points of headline rate beats the compounding gain. You
cannot eyeball this — compute both.

## Present value of a lump sum

```
        FV
PV = --------
     (1 + r)ⁿ
```

`r` is used interchangeably with `i`. Two rules the deck states and you
should be able to recite:

- The present value of a future amount will **always** be less than the
  future amount if interest rates are positive.
- In periods of inflation, a dollar today is worth more than a dollar in
  the future.

**Example (bequest).** A 12-year-old is left $40,000, payable on their
21st birthday. What must be invested today at 4.74% to meet it?

```
FV = 40,000
n  = 21 − 12 = 9
i  = 4.74%

PV = 40,000 / (1.0474)⁹
   = 40,000 / 1.517096
   = $26,366.16
```

If the account actually pays interest quarterly:

```
n  = 9 × 4  = 36
i  = 4.74/4 = 1.185%

PV = 40,000 / (1.01185)³⁶
   = $26,174.54
```

Quarterly compounding means you need **$191.62 less** up front to hit the
same target. More frequent compounding always reduces the PV required.

## Annuities — the future value of one dollar per annum

Regular payments, not a single deposit.

```
             (1 + r)ⁿ − 1
FV = PMT × ----------------          (ordinary annuity, payments in arrears)
                  r


FV_due = FV_ordinary × (1 + r)       (annuity due, payments in advance)
```

**Example.** Net rent of $5,000 p.a. invested at 6.25% for 12 years.

```
Annual payments, in arrears
FV = 5,000 × ((1.0625)¹² − 1) / 0.0625
   = 5,000 × 17.11824
   = $85,591

Monthly payments of $416.67 at 0.5208%/month for 144 months
FV = $89,031

Monthly payments in advance (BGN mode)
FV = 89,031 × (1 + 0.0625/12)
   = $89,494
```

Three answers from the same $5,000 a year. Paying monthly instead of
annually is worth **$3,440**; paying in advance instead of arrears is
worth a further **$463**.

> **BGN/END is worth real money and commercial rent is almost always
> BGN.** The Week 3 tutorial is explicit: "for rental payments in
> commercial buildings, rent is usually paid monthly in advance, so the
> BGN mode is chosen." If a question says "monthly in advance", "at the
> beginning of the month", or just describes commercial rent, switch to
> BGN. If it says interest is *received* at the end of the period, use
> END. Clear the mode afterwards — a stranded BGN setting will quietly
> corrupt every subsequent calculation.

The deck's own Example 4B rounds the monthly rate to 0.52% and the payment
to $416.67; carrying those rounded inputs gives $88,972 against the
published $89,031. Same lesson as before.

### Lump sum plus annuity

The calculator handles both at once. *Invest $12,000 today, add $5,000 a
year for 12 years, at 6.25% annually.*

```
FV of the lump sum   = 12,000 × (1.0625)¹²   = $ 24,838.68
FV of the annuity    = 5,000 × 17.11824      = $ 85,591.20
                                               ------------
Total FV                                       $110,429.88
```

Inputs on the EL-735: `PV = 12,000`, `PMT = 5,000`, `i = 6.25`, `n = 12`,
`COMP FV`.

**Example 6.** An annuity of $7,500 a year invested until you turn 35, 14
years away, at 5.75% annually.

```
FV = 7,500 × ((1.0575)¹⁴ − 1) / 0.0575
   = 7,500 × 20.650177
   = $154,876.33
```

## Present value of one dollar per annum

The lump sum today that buys a future income stream. This is the direct
ancestor of the capitalisation method — capitalisation is just this
formula with `n = ∞`.

```
             1 − (1 + r)⁻ⁿ
PV = PMT × ----------------
                  r
```

**Example.** A property returns net rent of $16,200 p.a. for the 12 years
remaining on the lease. At an investment rate of 6.75%, what is that
income stream worth today?

```
Annually in arrears
PV = 16,200 × (1 − 1.0675⁻¹²) / 0.0675
   = 16,200 × 8.049599
   = $130,403.51

Monthly ($1,350/month, 0.5625%/month, 144 months, arrears)
PV = $132,991.47

Monthly in advance (BGN)
PV = 132,991.47 × 1.005625
   = $133,739.55
```

Compare that $130,403 with what the same rent would be worth in
perpetuity: `16,200 / 0.0675 = $240,000`. The 12-year lease is worth 54%
of the freehold income. **The tail matters** — which is exactly why the
DCF in Topic 5 needs a terminal value.

## Sinking funds

An allowance, by lump sum or by regular payments, to make sure funds are
available for a future cost. Sinking funds are not a new formula — they
are the PV and FV formulas pointed at a maintenance liability.

**One-step (Example 9).** Strata units need repainting in 7 years; the
cost then is expected to be $125,000; money earns 6.45%.

```
(a) Lump sum today
    PV = 125,000 / (1.0645)⁷
       = 125,000 / 1.548887
       = $80,703.13

(b) Annual payments instead
    PMT = 125,000 / (((1.0645)⁷ − 1) / 0.0645)
        = 125,000 / 8.509872
        = $14,688.82 per year
```

**Two-step (Example 10).** This is the version the exam prefers, because
it tests whether you notice there are two different rates in play. *Units
require painting in 9 years. A quote today is $97,000. Money earns 5.75%;
inflation is expected to average 2.65%.*

```
Step 1 — escalate today's cost to the future cost, at INFLATION
    FV = 97,000 × (1.0265)⁹
       = 97,000 × 1.265408
       = $122,744.58        (the deck rounds to $122,745)

Step 2 — fund that amount with monthly payments, at the INVESTMENT rate
    FV  = 122,745
    n   = 9 × 12 = 108
    i   = 5.75 / 12 = 0.479167%

    PMT = 122,745 / (((1.00479167)¹⁰⁸ − 1) / 0.00479167)
        = 122,745 / 141.0272
        = $870.36 per month
```

> **Two rates, two directions — do not let them collide.** Inflation
> (2.65%) escalates the *cost* forward. The investment rate (5.75%)
> discounts the *funding* back. Using 5.75% in step 1 gives a future cost
> of $160,434 and a monthly contribution of $1,137.61 — a 30.7%
> over-funding. Using 2.65% in step 2 gives $1,007.63 a month. Label each rate on your
> page before you touch the calculator.

The deck's rounded 0.479% gives $870.45 against $870.36 on the exact rate;
either is acceptable, but say which you used.

## Excel

Three functions carry the whole topic.

```
PV(rate, nper, pmt, [fv], [type])
FV(rate, nper, pmt, [pv], [type])
PMT(rate, nper, pv, [fv], [type])
```

| Argument | Meaning |
|---|---|
| `rate` | Interest rate **per period**. A 10% car loan paid monthly is `10%/12`, entered as `10%/12` or `0.0083` |
| `nper` | Total number of payment periods. A four-year monthly loan is `4*12 = 48` |
| `pmt` | Payment each period; cannot change over the life of the annuity. Includes principal and interest but no fees or taxes |
| `pv` | Present value — the total that a series of future payments is worth now, also called the principal |
| `fv` | Future value, or the cash balance you want after the last payment |
| `type` | `0` = end of period (default), `1` = beginning of period |

> **Excel's sign convention will flip your answer and it is not a bug.**
> Money you pay out is negative, money you receive is positive. `FV(5%, 7,
> 0, 100000)` returns **−$140,710.04**, because Excel treats the $100,000
> you invested as an outflow and the maturity as an inflow. The lecturer's
> own solution file works around this by writing `=-FV(5%,7,0,100000)`.
> Either negate the whole function or enter the `pv` as negative — but be
> consistent within a spreadsheet, because a stray sign in a DCF is nearly
> invisible and completely fatal.

The EL-735 has the same behaviour. The deck's Example 1A notes that
`Comp FV` returns `−$18,416`, that the actual answer is $18,416, and that
"the negative answer can be eliminated by including the PV as a negative
value input."

### Financial calculator rules

1. Clear previous calculations from memory.
2. Set decimal points (`SET UP`, `0`, `0`, `2` for two decimal places).
3. At least three input variables are required to determine the fourth.
4. Have an understanding of the approximate answer before you press
   compute.
5. Select beginning or end mode.
6. The `+/−` signs matter.

Rule 4 is the one students skip and the one that saves exams. If you
expect roughly $18,000 and the screen says $180,000, you have a decimal in
the wrong place — catch it in two seconds rather than carrying it through
four more parts of the question.

## Time value of money in practice

Three offers to buy the same property, all nominally different, all
settling at different times. At an 8% annual cost of money (0.6667% per
month):

| | Nominal value | Settlement | Months | Present value |
|---|---|---|---|---|
| Offer 1 | $950,000 | 30 days | 1 | $943,708.61 |
| Offer 2 | $1,000,000 | 12 months | 12 | $923,361.45 |
| Offer 3 | $1,300,000 | 3 years | 36 | **$1,023,431.02** |

Offer 3 wins by $80,000 in present-value terms even though the nominal
ranking (3 > 2 > 1) is the same as the discounted ranking here. The point
of the table is the *narrowing*: Offer 2 is nominally 5.3% above Offer 1
but only 2.2% below it once discounted — the ranking of 1 and 2 flips.
Nominal price is not the deal.

> **The deck labels the monthly rate 0.67% and computes with 0.6667%.**
> Using a literal 0.67% gives $1,022,211.78 for Offer 3, $1,219 adrift.
> Same rounding lesson, third time. `8%/12` is `0.66667%`, not `0.67%`.

## Straight into a DCF

The last section of the Week 2 deck is a preview of Topic 5, and it is
worth working now because the arithmetic is Topic 2's.

**Flat income.** $25,000 a year for 10 years, discounted at 5%:

```
Σ 25,000 / (1.05)ᵗ  for t = 1…10  =  $193,043.37

Nominal (undiscounted) total       =  $250,000
Discount to present value          =  22.8% of the nominal total
```

**With 3% annual rent increases.** Year 1 is $25,000, Year 10 is $32,619:

```
Nominal total                      =  $286,596.98
Present value at 5%                =  $218,689.90
```

**Add a terminal value.** Year 11 income would be $33,597.91.
Capitalise it at an 8% terminal cap rate and add it to the Year 10 cash
flow:

```
Terminal value = 33,597.91 / 0.08     = $ 419,973.87
Year 10 net cash flow = 32,619.33 + 419,973.87
                                      = $ 452,593.20

NPV of the ten discounted cash flows  = $ 476,517.43
```

Every figure above reproduces the deck's table exactly. Notice how the
composition shifts: the terminal value's present value is `419,973.87 /
1.05¹⁰ = $257,827`, which is **54% of the whole valuation**. Topic 5's
warning that "growth rates and terminal value calculations can strongly
influence outcomes" is visible right here.

## Summary

- Six calculations: compound interest, PV and FV of a lump sum, PV and FV
  of an annuity, sinking funds. Everything else is these six in costume.
- `FV = p(1+i)ⁿ`; `PV = FV/(1+r)ⁿ`; annuity FV `= PMT × ((1+r)ⁿ−1)/r`;
  annuity PV `= PMT × (1−(1+r)⁻ⁿ)/r`; multiply either annuity by `(1+r)`
  for advance payments.
- Convert `i` and `n` together, and never round `i` before compounding —
  the deck's own published answers require the unrounded rate.
- Sinking funds with inflation are two-step: escalate the cost at
  inflation, fund it at the investment rate.
- Excel: `PV`, `FV`, `PMT`, all sign-sensitive, all with `type = 1` for
  payments in advance. Commercial rent is in advance.
- Discounting reorders offers that nominal pricing ranks differently.

<details><summary>Checkpoint — eight questions</summary>

1. $18,000 is invested for 6 years at 4.9% compounded quarterly. What is
   the future value?
2. What sum invested today at 5.2% will produce $85,000 in 11 years?
3. A net rent of $42,000 p.a. will be received for 9 more years. At 7.1%,
   what is that income stream worth today, in arrears?
4. Same rent, same rate, but paid monthly in advance. What is it worth?
5. A lift needs replacing in 15 years. It costs $180,000 today; inflation
   averages 3.1%; the sinking fund earns 6.0%. What annual contribution is
   needed?
6. Why does converting an annual rate to a monthly rate require you to
   change `n` as well?
7. In Excel, why does `FV(6%, 10, 0, 50000)` return a negative number?
8. Rank these by present value at 9% p.a.: $400,000 in 6 months;
   $430,000 in 18 months; $465,000 in 30 months.

---

**Answers**

1. `i = 0.049/4 = 0.01225`, `n = 24`.
   `18,000 × (1.01225)²⁴ = 18,000 × 1.339389 = $24,109.01`
2. `PV = 85,000 / (1.052)¹¹ = 85,000 / 1.746518 = $48,668.26`
3. `PV = 42,000 × (1 − 1.071⁻⁹) / 0.071 = 42,000 × 6.487607 =
   $272,479.49`
4. Monthly: `PMT = 3,500`, `i = 0.071/12 = 0.591667%`, `n = 108`.
   Arrears `= $278,729.29`; multiply by `1.00591667` for advance
   `= $280,378.44`. Paying monthly in advance is worth **$7,898.95** more
   than annually in arrears on the same $42,000 a year.
5. Two steps.
   `Future cost = 180,000 × (1.031)¹⁵ = 180,000 × 1.580811 = $284,546.00`.
   `PMT = 284,546.00 / (((1.06)¹⁵ − 1) / 0.06) = 284,546.00 / 23.275970 =
   $12,224.88 per year`.
6. Because `i` and `n` describe the same period. `(1+i)ⁿ` is "grow by `i`,
   `n` times" — if `i` is now a monthly rate, `n` must be a count of
   months or you are compounding a monthly rate an annual number of times.
7. Excel's cash-flow sign convention. The `$50,000` in the `pv` slot is
   read as money you received, so the maturity value is money you pay out,
   hence negative. Enter `pv` as `−50000`, or negate the whole function.
8. `400,000 / 1.09^0.5 = $383,130.51`;
   `430,000 / 1.09^1.5 = $377,858.08`;
   `465,000 / 1.09^2.5 = $374,875.20`.
   Ranking by PV: **$400,000 in 6 months > $430,000 in 18 months >
   $465,000 in 30 months** — the exact reverse of the nominal ranking.

</details>
