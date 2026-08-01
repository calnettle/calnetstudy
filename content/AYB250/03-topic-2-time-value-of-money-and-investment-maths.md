# Topic 2 — Time Value of Money and Investment Maths

Week 2, second half. Source: `AYB250 Week 2.pptx`, slides 23–59.

Every worked figure below was recomputed. Three of the lecture's numbers
disagree with the exact arithmetic; all three are flagged where they occur.

## Why the time value of money exists

Most financial decisions involve benefits and costs spread over time. A
dollar in the hand today is worth more than a dollar to be received in the
future. The lecture gives four reasons, and they are four separate marks:

| Reason | What it is really saying |
|---|---|
| Risk or uncertainty of future collection | You might not get it |
| Opportunity cost | You could have been earning a return on it |
| Postponement of present consumption | You have to wait to enjoy it |
| Purchasing power is eroded by inflation | The future dollar buys less |

> **Inflation is only *one* of the four, and it is the one people wrongly
> give as the whole answer.** Even with zero inflation and zero default
> risk, money today is still worth more, because of opportunity cost and
> deferred consumption. If a question asks "why is a dollar today worth
> more", listing all four is the full-mark answer.

## Simple interest

Interest is calculated on the principal only, usually for a fixed period
such as a year.

```
Future Value = PV + (PV × i)

  PV = present value of the money
  i  = interest rate for the period
```

**Example.** Invest $1,000 at 8%.

```
FV = 1 000 + (1 000 × 0.08)
   = 1 000 + 80
   = $1 080
```

### Simple interest for part of a year

The convention is an **annual rate and a 365-day year**. `i` becomes the
proportion of the annual rate earned over the part period.

**Example.** Invest $1,000,000 at 8% for 90 days.

```
FV = 1 000 000 + [1 000 000 × (0.08 × 90/365)]
   = 1 000 000 + [1 000 000 × 0.0197260…]
   = 1 000 000 + 19 726.03
   = $1 019 726.03
```

Verified to the cent.

> **365, not 360, and not 12 months of 30 days.** Money-market conventions
> differ by instrument and by country — a 360-day year is standard in some
> US markets. This unit's convention is **365**. On 90 days at 8% the
> difference is $19,726.03 versus $20,000.00 — $274, on a single quarter, on
> a million dollars. State the convention you used.

> **Simple interest is never compounded, however long the period.** If a
> question says "simple interest at 8% for 3 years", the answer is
> `1 000 × (1 + 0.08 × 3) = $1,240`, not `1 000 × 1.08³ = $1,259.71`. Read
> the word "simple".

## Compound interest

Compounding occurs when interest is periodically added to the principal —
"interest on interest". It **enhances savings** and **increases debt**.
Common compounding periods: annual, quarterly, monthly, daily. Continuous
compounding also exists.

**Example.** $1,000 invested at 8% p.a. for 4 years.

| Year | Starting balance | Interest (8%) | Ending balance |
|---|---|---|---|
| 1 | $1,000.00 | $80.00 | $1,080.00 |
| 2 | $1,080.00 | $86.40 | $1,166.40 |
| 3 | $1,166.40 | $93.31 | $1,259.71 |
| 4 | $1,259.71 | $100.78 | $1,360.49 |

Recomputed year by year — every row checks.

### The future value formula

```
FV = PV (1 + i)^n

  FV = future value of an amount invested today
  PV = amount of the present sum of money
  i  = interest rate per period
  n  = number of periods
```

```
FV = 1 000 (1 + 0.08)^4
   = 1 000 × 1.36048896
   = $1 360.4890
```

> **Flagged: the lecture states two different answers for the same
> calculation.** The year-by-year table on slide 29 ends at **$1,360.49**.
> The formula slide (31) states **$1,360.50**. The exact value is
> **$1,360.4890**, so $1,360.49 is correct and $1,360.50 is a rounding
> error carried from the textbook. It is one cent, but the same slip in a
> multi-step question compounds. Use the formula, not the transcribed
> answer, and confirm with your tutor which the exam expects.

### The present value formula

The same equation rearranged:

```
PV = FV (1 + i)^(−n)      which is the same as    FV / (1 + i)^n
```

**Example.** How much do we need to invest now at 8% to accumulate
$1,360.50 in 4 years?

```
PV = 1 360.50 × (1 + 0.08)^(−4)
   = 1 360.50 × 0.73502985
   = $1 000.01     (the lecture states $1 000)
```

Using the exact $1,360.4890 gives exactly $1,000.00. The one-cent drift is
the slide-31 rounding coming back around — which is the cleanest possible
demonstration of why it matters.

> **`(1 + i)^(−n)` is division, not a negative number.** A negative exponent
> discounts. If a present value comes out *larger* than the future value you
> have used `+n` somewhere, or you have discounted at a negative rate.

## Nominal and effective interest rates

- The **nominal** interest rate is the stated rate a bank quotes.
- The value of the investment is affected by the **frequency** at which
  interest is determined — quarterly, monthly, daily.
- The **effective** interest rate is the real rate after adjusting for
  compounding frequency.

Because the time value of money formulas assume annual compounding, an
adjustment is needed:

```
n is multiplied by m  (the number of compounding periods per year)
j is divided by m

i = [1 + (j/m)]^m − 1

  j = the nominal rate of interest
  m = the number of compounding periods per year
```

> **Flagged: the slide labels this "the periodic (effective) interest rate
> (i)". It is not the periodic rate — it is the effective *annual* rate.**
> The periodic rate is `j/m`. This matters because `i` is also the symbol
> used in `FV = PV(1 + i)^n`, where it must be the **per-period** rate. Feed
> the effective annual rate into a formula with `n = years × m` and the
> answer is wildly wrong. Two safe habits:
>
> ```
> Per-period working:  i = j/m           and  n = years × m
> Annual working:      i = (1+j/m)^m − 1 and  n = years
> ```
>
> Both give the same answer. Mixing them does not.

**Example.** Three banks quote:

- Bank A: 15%, compounded **daily**
- Bank B: 15.5%, compounded **quarterly**
- Bank C: 16%, compounded **annually**

```
Bank A = [1 + 0.15/365]^365 − 1 = 16.1798%  →  16.18%
Bank B = [1 + 0.155/4  ]^4   − 1 = 16.4244%  →  16.42%
Bank C = [1 + 0.16/1   ]^1   − 1 = 16.0000%  →  16.00%
```

All three verified against the lecture's stated answers.

> **The ranking of the effective rates is not the ranking of the nominal
> rates.** Nominal order is C (16%) > B (15.5%) > A (15%). Effective order is
> **B (16.42%) > A (16.18%) > C (16.00%)**. The bank quoting the *lowest*
> nominal rate is not the cheapest, and the one quoting the highest is the
> cheapest. That inversion is the entire point of the example, and it is why
> comparison rates are mandated in consumer credit.

Note also that daily compounding on 15% only lifts the effective rate to
16.18%. The gain from compounding more often has sharply diminishing
returns — most of the effect is captured by the first few compounding
periods per year.

## Annuities

People often save a fixed amount periodically rather than as a one-off. If
the amount is the same each period, treat it as an **annuity**: a fixed sum
of money paid at regular intervals. It is also a common retirement income
product.

### Future value of an annuity

```
        PMT [(1 + i)^n − 1]
FV  =  ---------------------
                i
```

**Example.** How much will we have after 5 years investing $500 at the
**end** of each year at 7%?

```
FV = 500 × [(1.07^5 − 1) / 0.07]
   = 500 × [(1.4025517 − 1) / 0.07]
   = 500 × 5.7507390
   = $2 875.37
```

### Present value of an annuity

```
        PMT [1 − (1 + i)^(−n)]
PV  =  ------------------------
                  i
```

**Example.** Present value of an annuity of $500 for 5 years at 7%:

```
PV = 500 × [(1 − 1.07^(−5)) / 0.07]
   = 500 × [(1 − 0.7129862) / 0.07]
   = 500 × 4.1001974
   = $2 050.10
```

Both verified exactly.

> **These formulas assume payments at the *end* of each period — an ordinary
> annuity.** The lecture's example says "at the end of each year" for a
> reason. If payments are made at the *beginning* (an annuity due), every
> payment earns one extra period of interest, so multiply the result by
> `(1 + i)`. Here that would be `2 875.37 × 1.07 = $3 076.65` — a $201
> difference on a $2,500 total investment. Read whether payments are at the
> start or the end.

> **Sanity check every annuity answer against the undiscounted total.** Five
> payments of $500 is $2,500 of cash. The future value must be **more** than
> $2,500 ($2,875.37 ✓) and the present value must be **less** ($2,050.10 ✓).
> If FV comes out below $2,500 or PV above it, you have swapped the
> formulas.

### When the payment amount changes

Annuity formulas only work if the amount is the same. If the amount changes
at a point in time, split the problem:

```
Example: save X per year at r% for 5 years,
         then increase to Y per year at r% for the next 5 years

  1. FV of the first arrangement — then carry that lump sum forward
     another 5 years as a single PV → FV
  2. FV of the second savings plan over its own 5 years
  3. Add the two together
```

> **Step 1 is where marks disappear.** The first annuity's future value
> lands at the *end of year 5*, not at the end of year 10. It must be
> compounded forward for the remaining 5 years as a lump sum before it can
> be added to the second annuity's future value. Adding two future values
> struck at different dates is meaningless.

## Credit cards

Credit card lending peaked in 2018 but, with cost-of-living pressure, more
people are turning to cards. The lecture's worked figure:

```
1.6% per month
Effective annual rate = (1 + 0.016)^12 − 1
                      = 1.20983 − 1
                      = 20.98%
```

Verified: 20.9830%.

The lecture's tips: use a debit card ideally; have only one card with a
manageable limit; pay off the full balance each month; at minimum pay more
than the interest **each month**; watch that some 0% balance-transfer cards
attract interest if the card is *used* during the 0% period; opt out of
limit-increase offers.

The reason rates are high: **risk**. The debt is unsecured, and it is only
loosely attached to the economy generally — so card rates do not track the
cash rate the way mortgage rates do.

The lecture states that **49% of all Australian credit card debt, $21.53
billion, is accruing interest**.

> **That pair of figures implies a total balance of $43.94 billion**
> (`21.53 / 0.49`). The slide does not state the total, so if you quote the
> $21.53bn figure, quote the 49% with it and cite the RBA's credit card
> statistics for the period rather than the slide — the series is updated
> monthly and this number moves.

> **The slide says card rates "are generally quoted as effective interest
> rates", then works the example by compounding a monthly rate.** Those are
> different things. 1.6% per month compounded is a *nominal* 19.2% p.a.
> presented monthly, which becomes an effective 20.98%. If a card genuinely
> quotes 20.98% as its effective rate, the monthly rate is
> `1.2098^(1/12) − 1 = 1.6%` — the same arithmetic run backwards. Know which
> direction the question is asking you to go.

## Risk

Risk can mean three things, and the lecture lists all three:

```
· the chance of loss
· the variability of returns
· the price you pay for returns
```

The types of risk named:

| | |
|---|---|
| Mismatch risk | Market risk |
| Inflation risk | Market timing risk |
| Interest rate risk | Lack of diversification risk |
| Reinvestment risk | Currency risk |
| Market volatility | Liquidity risk |
| Credit risk | Legislative risk |
| Gearing risk | |

> **Only the third definition — "the price you pay for returns" — explains
> why anyone accepts risk.** Definitions one and two are descriptions of a
> bad thing. The third makes risk the input that produces return, which is
> the bridge to the next slide. If asked "what is risk", give all three and
> lead with that one.

### Risk and return

- Returns compensate the investor for the risk of that particular
  investment.
- The rate of return you could earn on an investment is effectively your
  **opportunity cost**.
- Compare investments against your **required rate of return**.
- Use that rate to decide whether to take an investment (NPV, IRR).
- The required rate of return is also called the **discount rate**.

That last equivalence is the hinge of the rest of the topic. *Required rate
of return = discount rate = opportunity cost = `r` in the NPV formula.* Four
names, one number.

## Net present value

NPV is a measure of the **net change in the value or wealth of the client**
from undertaking an investment.

```
NPV = PV (future cash flows) − Investment today

  CF₀ = the initial outlay
  CFᵢ = the future cash flows over period i
  r   = the discount rate / cost of capital
  n   = the last year of the project
```

**Decision rule:**

```
NPV < 0   generally financially unacceptable
NPV = 0   marginal
NPV > 0   generally financially acceptable
```

**Example.** An investment costs $300 today and returns $100 at the end of
each year for 4 years. Discount rate 10% p.a.

```
NPV = −300 + 100/1.1¹ + 100/1.1² + 100/1.1³ + 100/1.1⁴
```

| Year | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| Cash flow | −300 | 100 | 100 | 100 | 100 |
| Discount factor | 1 | 0.9091 | 0.8264 | 0.7513 | 0.6831 |
| Discounted cash flow | −300 | 90.91 | 82.64 | 75.13 | 68.31 |

```
NPV = −300 + 90.91 + 82.64 + 75.13 + 68.31 = $16.99
```

Verified: the exact NPV is $16.9865, which rounds to $16.99. ✓ NPV is
positive, so the investment is acceptable.

> **This cash flow is a 4-year annuity of $100, so the annuity formula does
> the whole job in one line.** `100 × [(1 − 1.1^(−4))/0.1] = $316.99`, less
> the $300 outlay, equals $16.99. Recognising an annuity inside an NPV
> question saves four discountings and four rounding opportunities. The
> table is only necessary when the cash flows differ year to year.

**Advantages of NPV**, per the lecture: it compares and evaluates different
investment options; it accounts for the time value of money; it considers
all cash flows expected to be generated by the project.

That last point is stated as **both** a strength and a weakness — considering
all cash flows requires extensive forecasting, which may not be accurate.

## Internal rate of return

The IRR is the discount rate that equates the present value of a project's
cash inflows with the present value of its cash outflows. Equivalently:
**the discount rate at which NPV = 0**.

The lecture's method is linear interpolation between two trial rates.

```
Step 1  Apply an estimated discount rate, say 10%
Step 2  Calculate NPV at that rate           →  +$16.99
Step 3  Estimate a second rate that produces a negative NPV, say 15%
Step 4  Calculate NPV at the second rate     →  −$14.50
Step 5  Interpolate
```

At 15%:

| Year | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| Cash flow | −300 | 100 | 100 | 100 | 100 |
| Discount factor | 1 | 0.8696 | 0.7561 | 0.6575 | 0.5718 |
| Discounted cash flow | −300 | 86.96 | 75.61 | 65.75 | 57.18 |

```
NPV = −300 + 86.96 + 75.61 + 65.75 + 57.18 = −$14.50   ✓ verified
```

Interpolation:

```
              (10 − 15) × 16.99
IRR = 10 +  ---------------------
              (−14.50 − 16.99)

              (−5 × 16.99)
    = 10 +  ----------------
                 −31.49

    = 10 + 2.70
    = 12.7%
```

Verified: the interpolation arithmetic gives 12.697%, so 12.7% is right
*for the method*.

> **Flagged: the true IRR of that cash flow is 12.59%, not 12.7%.** Solving
> `−300 + 100 × [(1 − (1+r)^(−4))/r] = 0` gives **r = 12.5898%**. Linear
> interpolation always overstates the IRR when you bracket it this way,
> because the NPV curve is convex — a straight line drawn between two points
> on a convex curve sits above it. The wider the bracket, the worse the
> error. 12.7% is the syllabus answer and you should give it if the question
> prescribes the method, but know it is an approximation and say so if the
> question asks you to comment on limitations.

**Decision rule** — compare the IRR to the discount rate `r`:

```
IRR < r   generally financially unacceptable
IRR = r   marginal
IRR > r   should be financially acceptable
```

Here IRR (12.59% or 12.7%) > r (10%), and NPV at 10% is positive. The two
rules agree, which they always do for a single conventional project with one
sign change in its cash flows.

> **A tighter bracket gives a better interpolation.** Trialling 12% and 13%
> instead of 10% and 15% would land within a couple of basis points of
> 12.59%. If the exam lets you choose the trial rates, choose them close
> together and straddling your guess.

## The effect of tax and inflation on returns

Both inflation and tax reduce the net return of an investment.

```
The rate an investment quotes is the NOMINAL rate of return.
The REAL rate of return is reduced by taxation and inflation.
```

The lecture's table for a fixed-interest investment, with a 5% p.a. interest
rate. Tax rates include the 2.0% Medicare levy.

| | | | | |
|---|---|---|---|---|
| **Tax rate** | 18% | 32% | 39% | 47% |
| Interest % | 5.00 | 5.00 | 5.00 | 5.00 |
| Tax on interest % | (0.90) | (1.60) | (1.95) | (2.35) |
| After-tax return % | 4.10 | 3.40 | 3.05 | 2.65 |
| Inflation % | (4.00) | (4.00) | (4.00) | (4.00) |
| **Real rate of return %** | **0.10** | **−0.60** | **−0.95** | **−1.35** |

Every cell verified:

```
5.00 × 0.18 = 0.90    5.00 − 0.90 = 4.10    4.10 − 4.00 =  0.10  ✓
5.00 × 0.32 = 1.60    5.00 − 1.60 = 3.40    3.40 − 4.00 = −0.60  ✓
5.00 × 0.39 = 1.95    5.00 − 1.95 = 3.05    3.05 − 4.00 = −0.95  ✓
5.00 × 0.47 = 2.35    5.00 − 2.35 = 2.65    2.65 − 4.00 = −1.35  ✓
```

The four tax rates are marginal rates plus the 2% Medicare levy: 16+2, 30+2,
37+2, 45+2. The slide notes they are based on the rates applying in
**2026-27** — consistent with the assignment's Rates and Thresholds sheet,
which uses a 15% bottom rate for 2026-27. Check which year's scale a question
gives you.

> **Flagged: the slide's own footnote contradicts its own table.** The
> footnote says the example assumes an inflation rate of **5% p.a.** The
> table subtracts **4.0%**. The table is internally consistent — every real
> rate of return equals the after-tax return minus 4.00 — so the footnote is
> the error. At 5% inflation the real rates would be **−0.90, −1.60, −1.95
> and −2.35**, i.e. negative in every bracket including the lowest. Show
> your inflation assumption explicitly in any answer using this table, and
> flag the discrepancy to your tutor.

> **This is subtraction, not the Fisher equation, and that is a
> simplification.** The exact real return is
> `(1 + after-tax) / (1 + inflation) − 1`. At the 18% bracket that is
> `1.0410 / 1.04 − 1 = 0.0962%` rather than 0.10% — close enough here, but
> the approximation degrades as rates rise. Use the lecture's subtraction
> method unless told otherwise, and know why it is an approximation.

The headline finding is worth stating plainly, because it is the answer to
"why can't a client just leave money in a term deposit": **at 5% interest
and 4% inflation, every taxpayer above the lowest bracket goes backwards in
real terms.** Only the 18% bracket clears inflation, and only by 10 basis
points.

## Checkpoint

<details><summary>Questions</summary>

1. $1,000,000 invested at 6% simple interest for 120 days. What is the
   future value?
2. Bank D quotes 12% compounded monthly. What is the effective annual rate?
   What is the *periodic* rate?
3. You invest $2,000 at the end of each year for 8 years at 6%. What is the
   future value, and what is the quick sanity check?
4. An investment costs $500 and returns $150 at the end of each year for 5
   years. Required rate of return 12%. Compute the NPV using the annuity
   formula, and give the decision.
5. NPV at 8% is +$40; NPV at 12% is −$20. Estimate the IRR by
   interpolation. Is the true IRR above or below your estimate?
6. An investment returns 6%, the investor's marginal rate including
   Medicare is 39%, and inflation is 4%. What is the real rate of return
   using the lecture's method?

</details>

<details><summary>Answers</summary>

1. ```
   FV = 1 000 000 + [1 000 000 × (0.06 × 120/365)]
      = 1 000 000 + [1 000 000 × 0.01972602…]
      = $1 019 726.03
   ```
   (Coincidentally the same figure as the lecture's 8%/90-day example —
   `0.08 × 90 = 0.06 × 120 = 7.2`. A nice check that you are using 365.)
2. ```
   Effective annual = (1 + 0.12/12)^12 − 1 = 1.01^12 − 1 = 12.6825%
   Periodic (monthly) rate = 0.12/12 = 1.00%
   ```
   Do not put 12.68% into a formula with n = 96 months.
3. ```
   FV = 2 000 × [(1.06^8 − 1) / 0.06]
      = 2 000 × [(1.59384807 − 1) / 0.06]
      = 2 000 × 9.89746791
      = $19 794.94
   ```
   Sanity check: 8 × $2,000 = $16,000 of cash in, so the future value must
   exceed $16,000. ✓
4. ```
   PV of inflows = 150 × [(1 − 1.12^(−5)) / 0.12]
                 = 150 × 3.60477620
                 = $540.72
   NPV = 540.72 − 500 = +$40.72
   ```
   Positive NPV → **financially acceptable**.
5. ```
   IRR ≈ 8 + [(8 − 12) × 40] / (−20 − 40)
       = 8 + (−160 / −60)
       = 8 + 2.67
       = 10.67%
   ```
   The true IRR is **below** the estimate. Linear interpolation across a
   convex NPV curve overstates the IRR, exactly as it did in the lecture's
   own example (12.7% estimated, 12.59% true).
6. ```
   Tax on interest     = 6.00 × 0.39 = 2.34
   After-tax return    = 6.00 − 2.34 = 3.66
   Less inflation      = 3.66 − 4.00 = −0.34
   ```
   **−0.34%** — a negative real return despite a 6% headline rate.

</details>

## Summary

- Four reasons money has time value: **risk of collection, opportunity
  cost, deferred consumption, inflation**. Inflation is one of four.
- Simple interest: `FV = PV + (PV × i)`, part-year on a **365-day** basis.
- Compound: `FV = PV(1 + i)^n`, and `PV = FV(1 + i)^(−n)`.
- Effective annual rate `= [1 + (j/m)]^m − 1`. The **periodic** rate is
  `j/m`. Keep `i` and `n` in the same period; never mix the two conventions.
  Nominal ranking ≠ effective ranking — 15% daily (16.18%) beats 16% annual.
- Ordinary annuities pay at the **end** of the period:
  `FV = PMT[((1+i)^n − 1)/i]`, `PV = PMT[(1 − (1+i)^(−n))/i]`. Multiply by
  `(1 + i)` for an annuity due. Sanity-check against the undiscounted total.
- Changed payment amounts need two calculations, with the first carried
  forward as a lump sum before adding.
- Credit cards: 1.6%/month compounds to **20.98%** effective. High because
  the debt is unsecured.
- Required rate of return = discount rate = opportunity cost.
- `NPV > 0` accept, `IRR > r` accept. Interpolated IRR **overstates** the
  true IRR; the lecture's own example is 12.7% against a true 12.59%.
- Real return = nominal − tax − inflation. At 5% interest, 4% inflation and
  2026-27 rates, **only the lowest bracket clears inflation**, by 0.10%.
