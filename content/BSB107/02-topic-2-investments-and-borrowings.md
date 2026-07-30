# TOPIC 2 — Investments and Borrowings

*Weeks 4–6. Built from the Week 4 and Week 5 tutorial questions, the
Assignment 1 investment and repayment schedules, and the Week 6 lecture deck.*

---

## 2.1 Compounding — the engine

Interest earned in one period joins the balance and earns interest itself in
the next. That is the whole idea, and it is why an investment schedule and a
closed-form formula give the same answer.

```
FV = PV × (1 + r)ⁿ
```

where **`r` is the rate per compounding period** and **`n` is the number of
compounding periods**. Those two must match. A 4.5% per annum rate compounded
monthly is not `r = 0.045, n = 20`. It is:

```
r = 0.045 / 12 = 0.00375  per month
n = 20 × 12    = 240      months
```

> **Trap — the single most expensive mistake in this unit.** "4.5% per annum,
> compounded monthly" over 20 years. Using `4.5%` and `20` gives
> `4,000 × 1.045²⁰ = $9,646.86`. The correct answer is $9,821.87 — $175.01
> adrift on a tiny deposit, and the gap scales with everything. Divide the
> rate, multiply the periods. Every time.

### Investment schedule vs formula

The unit makes you build the schedule *and* use the function, because the
schedule shows the mechanism and the function proves you can automate it.

```
Month   Opening balance   Interest (× 0.00375)   Closing balance
  1        4,000.0000            15.0000            4,015.0000
  2        4,015.0000            15.0563            4,030.0563
  3        4,030.0563            15.1127            4,045.1690
  …
 240                                                9,821.8654
```

Each row's opening balance is the previous row's closing balance — one
formula, filled down. Then the check:

```
FV = 4,000 × (1.00375)²⁴⁰ = 4,000 × 2.4554664 = $9,821.87
```

The schedule and the formula must agree to the cent. If they don't, your
`nper` is off by one row.

---

## 2.2 The Excel time-value functions

All five solve the same underlying equation. Give it four inputs and it
returns the fifth.

```
PV × (1 + r)ⁿ  +  PMT × [((1 + r)ⁿ − 1) / r] × (1 + r·type)  +  FV  =  0
```

| Function | Returns | Arguments |
|---|---|---|
| `FV` | Future value | `(rate, nper, pmt, pv, type)` |
| `PV` | Present value | `(rate, nper, pmt, fv, type)` |
| `NPER` | Number of periods | `(rate, pmt, pv, fv, type)` |
| `PMT` | Payment per period | `(rate, nper, pv, fv, type)` |
| `RATE` | Rate per period | `(nper, pmt, pv, fv, type)` |

`type` is **0** for end-of-period payments (an *ordinary annuity* — the
default, and what every question in this unit uses unless it says otherwise)
and **1** for beginning-of-period.

### The sign convention

Because the equation sums to zero, **money in and money out must have
opposite signs**. Consequences:

- `FV(rate, nper, 0, 10000)` returns a **negative** number. Wrap it:
  `=-FV(...)`, or enter the `pv` as `-10000`.
- `PMT(rate, nper, 48000)` returns a **negative** payment — you are paying
  out against money you received.
- Mixing signs inconsistently is the most common cause of a "that answer
  looks insane" moment.

> **Trap — signs, and the marks attached to them.** Several Assignment
> questions award their mark for the *function being present in the cell*,
> tested by searching the formula text for `"FV"`, `"PV"`, `"NPER"` or
> `"PMT"`. Two consequences. First, typing the number in by hand scores zero
> even if it is right. Second, `CUMIPMT` contains the letters `PMT`, so a
> naive check can be satisfied by the wrong function — the Assignment 1
> workbook explicitly screens `CUMIPMT` out of its `PMT` test. Use the
> function the question names.

### The four questions and their functions

| Question | Function |
|---|---|
| What will it grow to? | `FV` |
| What must I put in today? | `PV` |
| How long until it reaches X? | `NPER` |
| What are the repayments? | `PMT` |

---

## 2.3 Worked example — Steve's deposit account

*Week 4 tutorial. $4,000 invested at 4.5% per annum compounded monthly for 20
years, with an optional $20 added at the end of each month.*

```
r = 0.045 / 12 = 0.00375        n = 20 × 12 = 240
```

**(a) Value after 20 years, no monthly additions**

```
FV = 4,000 × (1.00375)²⁴⁰
   = 4,000 × 2.4554664
   = $9,821.87
```
Excel: `=-FV(0.045/12, 240, 0, 4000)`

**(b) Interest earned in the first five years**

```
Balance at month 60 = 4,000 × (1.00375)⁶⁰ = 4,000 × 1.2517958 = 5,007.18
Interest            = 5,007.18 − 4,000.00               = $1,007.18
```

**(c) Interest earned in the last five years**

```
Balance at month 180 = 4,000 × (1.00375)¹⁸⁰ = 7,846.22
Balance at month 240 =                        9,821.87
Interest             = 9,821.87 − 7,846.22  = $1,975.65
```

Nearly **double** the first five years, on the same deposit at the same rate.
That is compounding, and it is the answer to "why start early?".

> **Trap — "interest in the last five years" is not `FV − PV × 5/20`.** You
> must take the difference between two balances. Anyone who computes
> `9,821.87 − 4,000 = 5,821.87` and divides by four has answered a different
> question.

**(d) Value if he also adds $20 at the end of every month**

Two components: the lump sum compounds, and the payments form an ordinary
annuity.

```
Future value of the annuity = PMT × [ (1 + r)ⁿ − 1 ] / r
                            = 20 × [ 2.4554664 − 1 ] / 0.00375
                            = 20 × 388.1244
                            = $7,762.49

Total FV = 9,821.87 + 7,762.49 = $17,584.35
```
Excel: `=-FV(0.045/12, 240, 20, 4000)`

$4,800 of extra deposits ($20 × 240) turned into $7,762 — so yes, it makes a
difference. That is the point of the question.

**(e) What monthly payment reaches $20,000?**

```
Shortfall to fund by annuity = 20,000 − 9,821.87 = 10,178.13
PMT = 10,178.13 / 388.1244 = $26.22
```
Excel: `=-PMT(0.045/12, 240, -4000, 20000)`

**Cross-check:** `4,000 × 2.4554664 + 26.2239 × 388.1244 = $20,000.00` ✓

### The `PV` and `NPER` versions of the same question

If you want $20,000 in 10 years at 3.09% compounded **annually**:

```
PV   = 20,000 / (1.0309)¹⁰ = $14,752.47      →  =-PV(0.0309, 10, 0, 20000)
```

If instead you invest $10,000 now and wait:

```
NPER = ln(2) / ln(1.0309) = 22.78 years      →  =NPER(0.0309, 0, 10000, -20000)
```

**Cross-check:** `10,000 × 1.0309^22.7768 = $20,000.00` ✓

> **Trap — `NPER` returns a fraction, and you cannot always round it down.**
> 22.78 years means the target is not reached until **year 23** if interest
> is credited annually. Say which convention you are using.

---

## 2.4 Borrowings — the mirror image

A loan is an investment run backwards: the lender's asset is your liability.
The same equation solves it.

```
PMT = PV × r × (1 + r)ⁿ / [ (1 + r)ⁿ − 1 ]
```

### The amortisation schedule

Every repayment splits into interest and principal, and the split shifts over
the life of the loan:

```
Interest this month  = Opening balance × r
Principal this month = Payment − Interest
Closing balance      = Opening balance − Principal
```

Early on the payment is mostly interest; late on it is mostly principal, and
nothing about the payment itself changes. Build the schedule with those three
formulas filled down.

> **Trap — how the workbook computes the interest column.** Assignment 1
> uses `=-ISPMT($C$5, 0, 300, F4)`, where `F4` is the opening balance.
> `ISPMT(rate, per, nper, pv)` returns `pv × rate × (per/nper − 1)`, so at
> `per = 0` it collapses to exactly `−balance × rate`. It works, but it is a
> roundabout way of writing `=F4*$C$5`, and `ISPMT` is genuinely designed for
> **straight-line principal** loans, not amortising ones. If you reuse that
> pattern, keep `per = 0` and the opening balance in the last argument, or
> just multiply. Don't reach for `ISPMT` with a real period number — it will
> give you a different loan.

### Interest and principal over a span of periods

| Function | Returns |
|---|---|
| `CUMIPMT(rate, nper, pv, start_period, end_period, type)` | Total **interest** paid between two periods |
| `CUMPRINC(rate, nper, pv, start_period, end_period, type)` | Total **principal** repaid between two periods |

Both return negative numbers. Both require `type` — it is **not** optional,
unlike in `PMT`.

**Identity worth knowing:** for the same span,
`CUMIPMT + CUMPRINC = −(number of periods × PMT)`. Use it as a check.

---

## 2.5 Worked example — Steve's car loan

*Week 5 tutorial. A four-wheel drive at $53,000, less a $5,000 trade-in.
Finance at 6.5% per annum compounded monthly over 5 years, with a balloon
payment reflecting a $10,000 residual value.*

```
Amount borrowed = 53,000 − 5,000 = $48,000
r  = 0.065 / 12 = 0.00541667      n = 5 × 12 = 60      FV = −10,000
```

### (a) The monthly payment

```
=PMT(6.5%/12, 60, -48000, 10000, 0)   →   $797.68
```

Working it by hand:

```
r        = 0.065 / 12 = 0.005416667
(1 + r)ⁿ = (1.005416667)⁶⁰ = 1.3828173
Annuity factor = (1.3828173 − 1) / 0.005416667 = 70.67397

48,000 × 1.3828173 = 66,375.23
less the residual         10,000.00
                     ─────────────
to be repaid by the
sixty payments        56,375.23   (in month-60 dollars)

PMT = 56,375.23 / 70.67397 = $797.68
```

Same machinery with no residual: `48,000 × 1.3828173 / 70.67397 = $939.18`.

### (b) The repayment schedule, first three months

```
Month  Opening      Payment    Interest   Principal   Closing
  1    48,000.00     797.68      260.00     537.68    47,462.32
  2    47,462.32     797.68      257.09     540.59    46,921.73
  3    46,921.73     797.68      254.16     543.52    46,378.21
  …
 60                                                   10,000.00  ← balloon
```

The balance lands on exactly $10,000 after 60 payments. That is the residual,
and it is due as a lump sum. **Verified: the schedule closes on $10,000.0000.**

### (c) Total interest over the five years

```
Total of 60 payments        = 797.68 × 60   = 47,860.82
Principal actually repaid   = 48,000 − 10,000 = 38,000.00
                                              ──────────
Interest                                        $9,860.82
```

**Cross-check the other way:** total cash out including the balloon is
`47,860.82 + 10,000 = 57,860.82`, less the $48,000 borrowed = **$9,860.82** ✓

### (d) The same loan with no residual

Steve intends to keep the car, so he does not want a $10,000 lump sum at the
end.

```
=PMT(6.5%/12, 60, -48000, 0, 0)   →   $939.18
```

```
Total paid  = 939.18 × 60 = 56,350.51
Interest    = 56,350.51 − 48,000 = $8,350.51
Interest as a share of total paid = 8,350.51 / 56,350.51 = 14.82%
```

### (e) Why is the interest *less* without the balloon?

This is the tutorial's own question and it is worth understanding rather than
memorising. The monthly payment is **higher** ($939.18 vs $797.68), so the
balance falls faster, so **less principal is outstanding for less time**.
Interest accrues on the balance, and the balance is what you shrank.

```
                        With $10k balloon    No residual
Monthly payment            797.68              939.18
Total cash out          57,860.82           56,350.51
Total interest           9,860.82            8,350.51
```

The balloon buys you $141.49 a month of breathing room, and it costs $1,510.31
in extra interest plus a $10,000 bill in five years' time.

### (f) First-year interest and principal

```
=CUMIPMT(6.5%/12, 60, 48000, 1, 12, 0)   →   −$2,872.76
=CUMPRINC(6.5%/12, 60, 48000, 1, 12, 0)  →   −$8,397.34
```

**Cross-check:** `2,872.76 + 8,397.34 = 11,270.10 = 12 × 939.18` ✓ and the
balance at the end of year 1 is `48,000 − 8,397.34 = $39,602.66`.

### (g) Would a longer loan help?

An 8-year term at the same rate:

```
=PMT(6.5%/12, 96, -48000, 0, 0)  →  $642.54
Total interest = 642.54 × 96 − 48,000 = $13,683.76
```

**Lower monthly payment, much higher total interest** — $13,683.76 against
$8,350.51, a 64% increase. Stretching a loan always trades cash flow for
cost. Say both halves of that sentence in an exam answer; saying only one
half is a half mark.

> **Trap — "total interest" needs its span named.** For the balloon loan,
> $9,860.82 is the interest over the whole deal *including* the balloon
> payment. `60 × PMT − 48,000` would give −$139.18, which is nonsense,
> because only $38,000 of principal was repaid by the instalments. Always ask
> *"what principal did these payments actually retire?"* before subtracting.

---

## 2.6 Worked example — Eva's mortgage, and a rounding trap

*Assignment 1 pattern. $500,000 borrowed at 4.47% per annum over 25 years,
repaid monthly.*

```
=PMT(0.0447/12, 300, -500000, 0, 0)   →   $2,770.66
=-CUMIPMT(0.0447/12, 300, 500000, 1, 300, 0)  →  $331,196.56
Interest as a share of the total paid = 331,196.56 / 831,196.56 = 39.85%
```

Nearly **40 cents in every dollar** Eva repays is interest. That is the
headline number for a 25-year loan at that rate, and it is the kind of figure
a written answer should quote.

### Borrowing capacity

Turn the question around: at $2,500 a month, how much can she borrow?

```
=-PV(0.0447/12, 300, 2500, 0, 0)   →   $451,156.82
```

**Cross-check:** `PMT(0.0447/12, 300, -451156.82) = $2,500.00` ✓

> **Trap — do not round the periodic rate.** The Assignment 1 worksheet
> stores the monthly rate as a separate cell rounded to four decimal places:
> `0.0037` instead of `0.0447/12 = 0.003725`. Every downstream answer
> inherits it:
>
> ```
>                          r = 0.0037      r = 0.003725     error
> Monthly payment           2,762.16        2,770.66       −$8.49
> Total interest          328,648.53      331,196.56    −$2,548.03
> Interest share             39.66%          39.85%      −0.19 pp
> Borrowing @ $2,500/mo   452,544.10      451,156.82    +$1,387.28
> ```
>
> A four-decimal rate is wrong by seven parts in a thousand, and $2,548 of
> interest disappears. **Reference `=C4/12` in the formula rather than typing
> a rounded rate into a cell.** Which figures the marker expects depends on
> which cell the workbook told you to use — if the sheet supplies a rounded
> rate cell, use it *and note the rounding in your workings*. Worth confirming
> with your tutor.

> **Trap — a whole-dollar payment does not clear the loan.** The same
> worksheet's repayment schedule uses a literal `2762` in the payment column
> rather than the calculated `2762.1618`. Sixteen cents a month for 300
> months, compounded, leaves **$88.67 still owing** at month 300. Reference
> the `PMT` cell, don't retype it rounded.

---

## 2.7 Goal Seek

When there is no clean formula to invert — or the question tells you to —
use `Data > What-If Analysis > Goal Seek`.

```
Set cell:        the cell holding the result you want to control
To value:        the target number
By changing:     the single input cell you are willing to move
```

Three rules that stop it failing:

1. The **"Set cell" must contain a formula** that depends, through a chain of
   formulas, on the "By changing" cell. If it is a typed constant, Goal Seek
   has nothing to solve.
2. The **"By changing" cell must be a constant**, not a formula.
3. Goal Seek converges numerically, so it returns something like
   `1253.4632034632` — it will not hand you a tidy integer. **You round it,
   and the direction matters** (see §3.4 on break-even).

---

## 2.8 Where you invest, not just how much — Week 6

The Week 6 lecture, *Personal Finances – Can I have a Social and Ethical
Impact?*, is the qualitative counterpart to the arithmetic above, and it
carries its own marks (Assignment 1 Question 6, capability 5.2).

### The responsible-investment vocabulary

Definitions from the **UN Principles for Responsible Investment**, quoted on
the slides:

| Approach | What it means |
|---|---|
| **Screening** | Determining which investments are or are not permitted in a portfolio. Can be **negative** (exclude) or **positive** (include). |
| **ESG integration** | Incorporating environmental, social and governance factors into the investment process, aiming to reduce risk and/or increase returns. Quantitative or qualitative. |
| **Thematic investing** | A portfolio chosen top-down from assets expected to benefit from specific medium- to long-term trends — climate shift, an ageing population, sustainable agriculture. |
| **Stewardship** | Exercising rights and influence to protect and enhance long-term value for clients and beneficiaries — being a good long-term owner. |
| **Impact investing** | Investing with the intention to generate a positive, **measurable** social and/or environmental impact **alongside** a financial return. |

Impact investing is the strictest of the five, and the slides give three
reasons why: **intention** matters (and the outcome might not be achieved),
the **investor's role** matters (the impact must be generated *by* the
investment), and the impact must be **measurable** — megawatt-hours of
renewable electricity, megalitres of water treated, number of affordable
houses. There is also "some discretion over the rate of return expected",
which is the honest admission that concessionary returns are sometimes part
of the deal.

The **GIIN's four core characteristics** of impact investing:
**intentionality**; using **evidence and impact data** in investment design;
**managing impact performance**; and **contributing to the growth of the
industry**.

### The problems, which is where the marks are

The lecture spends more time on the objections than the definitions, so an
answer that only recites definitions is thin. The slides raise:

- **Who decides what is worthwhile?**
- Can environmental, social *and* governance issues really collapse into a
  single measure or index?
- Can good governance outweigh poor environmental performance, or the
  reverse?
- What about issues that **are not measurable**?
- Can you hold competing social, environmental and financial goals at once?

And the one the deck calls the elephant in the room:

**Greenwashing** — presenting misleading environmental information to project
a positive image. The eight indicators listed:

```
Vague language        Hidden trade-offs      Suggestive pictures
Lack of proof         Irrelevant claims      Fibbing
Misleading labels     Lesser of two evils
```

### Effective altruism and FTX

Effective altruism asks which problems are **big, solvable and neglected**,
and directs effort there.

| For | Against |
|---|---|
| Focuses on the most effective impact per dollar | Focusing on outcomes invites "the ends justify the means" |
| Impartial — every person counts the same | Bias toward family, friends and community can be justified |
| Counters bias and popular trends | "Longtermism" can mean ignoring pressing problems today |
| | Can be too onerous — no holidays, ever, because lives could be saved |

**Sam Bankman-Fried and the collapse of FTX** is the case study, and the
"earning to give" idea is what is on trial: is it a licence to make money by
any means as long as you give it away? The slides pose the questions rather
than answering them, so an exam answer should take a position *and* concede
the other side.

### The psychology of spending

The prescribed readings behind Assignment 1 Question 6:

**Elizabeth Dunn, *Happy Money*, Chapter 1 — buy experiences.** The claim is
that experiential purchases deliver more durable wellbeing than material ones.
The mechanisms the chapter offers: experiences become part of your identity
and memory; they tend to be social; they make better stories; and they resist
comparison in a way that possessions do not — you can rank two televisions,
but not two holidays.

**Arthur C. Brooks, *The Satisfaction Trap*.** Brooks reframes the naive model
`Satisfaction = getting what you want` into a ratio: satisfaction is what you
have **divided by** what you want. Because homeostasis pulls you back to a
set point, wanting always regenerates, so working only on the numerator is a
treadmill. His practical suggestion is to attack the denominator — a "reverse
bucket list" of wants to give up rather than acquire.

> **Trap — the discussion questions have a hard word limit and it is
> enforced.** Assignment 1 Question 6 and Assignment 2 Questions 12 and 13 are
> 200 words ±10%; Question 14 is 500 ±10%. The workbook counts words live and
> **answers are only marked up to the limit**. Question 6 also requires a
> **page reference for each study**, and requires that the studies come from
> the prescribed reading rather than sources you found yourself.

---

## 2.9 Checkpoint

<details><summary>Questions</summary>

1. $8,000 at 6% per annum compounded quarterly for 7 years. What are `r` and
   `n`, and what is the future value?
2. Why does `=FV(0.05, 10, 0, 1000)` return a negative number?
3. A $30,000 loan at 7.2% per annum monthly over 4 years. What is the
   interest component of the *first* payment, before you know the repayment
   amount?
4. Two loans, identical except one has a $12,000 balloon. Which has the higher
   monthly payment, and which costs more in total interest?
5. Goal Seek returns 1,253.4632 units to break even. Do you report 1,253 or
   1,254?
</details>

<details><summary>Answers</summary>

1. `r = 0.06/4 = 0.015`, `n = 7 × 4 = 28`.
   `FV = 8,000 × 1.015²⁸ = 8,000 × 1.517222 = $12,137.78`.
2. The time-value equation sums to zero, so inflows and outflows carry
   opposite signs. A $1,000 present value paid **in** returns a future value
   paid **out**. Negate it, or enter `pv` as `−1000`.
3. `30,000 × 0.072/12 = $180.00`. The first month's interest depends only on
   the opening balance and the periodic rate — you don't need `PMT` at all.
4. The **balloon loan has the lower monthly payment** and the **higher total
   interest**. A bigger balance stays outstanding for longer.
5. **1,254.** Rounding down leaves you short of break-even — at 1,253 units
   you are still making a loss. Break-even units always round **up**.
</details>

---

## Topic 2 summary

- `FV = PV(1 + r)ⁿ`. **`r` per period, `n` periods** — divide the annual rate
  and multiply the years by the compounding frequency.
- The five Excel functions all invert one equation. Inflows and outflows take
  **opposite signs**.
- Interest earned in a later window is always larger than in an earlier one
  of the same length. Compute it as the **difference between two balances**.
- Adding a regular payment adds an **annuity** term:
  `PMT × [(1 + r)ⁿ − 1] / r`.
- On a loan: `interest = opening balance × r`, `principal = payment −
  interest`. The split shifts, the payment doesn't.
- A **balloon / residual** lowers the payment and raises total interest. So
  does a **longer term**. Both trade cash flow for cost.
- `CUMIPMT + CUMPRINC = −(periods × PMT)` over the same span. Use it as a
  check.
- **Never round the periodic rate** and never retype a calculated payment as
  a whole number.
- Week 6 is assessed on the **objections**, not the definitions: measurability,
  aggregation into a single ESG score, competing goals, and greenwashing.
