# TOPIC 3 — Financial Mathematics

Lecture 3. Ross et al. (2021, 8th ed.) Ch 5–6.

This is the engine room of the unit. Every valuation in Topics 4, 5, 6 and 9 is one of these five formulas wearing a costume. Get the timing conventions right here and the rest of the unit is bookkeeping; get them wrong and you will lose marks in every remaining topic.

---

## 3.1 Compound interest

**Compound interest is calculated each period on the principal amount *and* on any interest already earned.** The derivation is a chain:

```
FV₁ = PV₀(1+i)
FV₂ = PV₀(1+i)(1+i) = PV₀(1+i)²
...
FVₙ = PV₀(1+i)ⁿ
```

The four rearrangements — all on the formula sheet:

```
FVₙ = PV₀(1 + i)ⁿ

PV₀ = FVₙ(1 + i)⁻ⁿ            (equivalently  FVₙ /(1+i)ⁿ )

i   = (FVₙ/PV₀)^(1/n) − 1

n   = ln(FVₙ/PV₀) / ln(1 + i)
```

Exponent rules you will need: `a⁰ = 1`, `a¹ = a`, `1/aᵗ = a⁻ᵗ`, `aᵗ·aᵐ = a^(t+m)`, `(aᵗ)ᵐ = a^(tm)`.

### Worked examples — Lecture 3

**Example 2.** FV of $100 invested 2 years at 10% compounded annually.
```
FV = 100(1.10)² = 100 × 1.21 = 121.00
```
And backwards: `PV = 121(1.10)⁻² = 100.00`; `i = (121/100)^(1/2) − 1 = 1.10 − 1 = 10%`; `n = ln(1.21)/ln(1.10) = 0.19062/0.09531 = 2 years`. ✔

**Example 3 — why compounding matters.** $25 invested for 360 years at 10%.
```
Simple:   FV = 25(1 + 0.10 × 360)  = 25 × 37       = $925
Compound: FV = 25(1.10)³⁶⁰                          ≈ $1.99 × 10¹⁶
```
The lecture's answer to the compound case is simply "= a lot!" It is close to twenty quadrillion dollars.

**Example 4.** PV of $100,000 received in 100 years at 10% annually compounded.
```
PV = 100,000(1.10)⁻¹⁰⁰ = 100,000 / 13,780.6 = $7.26
```

**Example 5.** $125,000 invested at the start of 2005 doubles by the end of 2014 (n = 10).
```
i = (250,000/125,000)^(1/10) − 1 = 2^0.1 − 1 = 0.07177 = 7.18%
```

**Example 6.** $100 at 8% compounded annually — how long to double?
```
n = ln(200/100)/ln(1.08) = 0.693147/0.076961 = 9.01 years
```

### Worked examples — Tutorial 3 Q2–Q5

```
Q2(a)  2,000(1.04)⁵                       = $2,433.31
Q2(b)  2,000(1 + 0.04/365)^(5×365)        = $2,442.78
Q2(c)  2,000(1.04)³⁰                      = $6,486.80

Q3(a)  10,000(1.12)⁻⁵                     = $5,674.27
Q3(b)  10,000(1.12)⁻¹⁰                    = $3,219.73
Q3(c)  10,000(1 + 0.12/12)^−(10×12)       = $3,029.95

Q4(a)  n = ln(4,000/2,000)/ln(1.06) = 11.90  ≈ 12 years
Q4(b)  n = ln(8,000/2,000)/ln(1.06) = 23.79  ≈ 24 years

Q5(a)  i = 2^(1/5)  − 1 = 0.1487 ≈ 14.87%   (the answer sheet rounds this to "15%")
Q5(b)  i = 2^(1/10) − 1 = 0.0718 ≈ 7.18%    (rounded to "7%")
```

> **Q4(b) is not double Q4(a) by accident.** Quadrupling takes exactly twice as long as doubling, because `ln 4 = 2 ln 2`. If you see 11.90 and 23.79 and think one is a typo, it is not — that relationship is a free sanity check on any doubling-time question.

---

## 3.2 Nominal rates, periodic rates and the effective annual rate

Compounding can be more frequent than annual. Write the **nominal annual rate** as `Jm`, where `m` is the number of compounding periods per year.

```
Periodic rate            = Jm / m

FV over one year         = PV(1 + Jm/m)^m

Effective annual rate:   i = (1 + Jm/m)^m − 1
```

`J1` means annual compounding, `J4` quarterly, `J12` monthly, `J365` daily.

### Worked example — Lecture 3, Example 7

`J4 = 15%`, `PV = 100,000`, `T = 1 year`.

```
Quarterly rate = 0.15/4 = 0.0375

FV = 100,000 × 1.0375 × 1.0375 × 1.0375 × 1.0375
   = 100,000(1.0375)⁴
   = $115,865.04
```

Interest earned = **$15,865.04**, not the $15,000 the nominal rate suggests.

```
Effective annual rate  i = (1 + 0.15/4)⁴ − 1 = 1.15865 − 1 = 15.865%
```

### Worked example — Tutorial 3 Q7 — the same PV from different nominal rates

PV of $10,000 in 5 years using (i) `J1 = 10.00%` and (ii) `J12 = 9.569%`.

```
(i)  10,000(1.10)⁻⁵                = $6,209.21
(ii) 10,000(1 + 0.09569/12)⁻⁶⁰     = $6,209.20
```

**(b) Why are they almost identical when the nominal rates differ by 43 basis points?** Because they imply the same **effective annual rate**:
```
(1 + 0.09569/12)¹² − 1 = 0.100000  =  10.00%
```
Nominal rates are only comparable once converted to effective rates.

**(c)** If the PV of the $10,000 were $5,000 instead:
```
i = (10,000/5,000)^(1/5) − 1 = 2^0.2 − 1 = 14.87%
```

### Worked example — Tutorial 3 Q6 and MCQ 24 — comparing offers

**Q6.** Two banks quote the same nominal rate, one compounding semi-annually and one monthly. From a **saver's** point of view, the more frequently compounding rate is better because it gives a higher effective annual rate. Two caveats the answer adds: the effect depends on the size of the nominal rate (bigger for `J = 12%` than `J = 4%`), and it has a **natural limit** — the gap between `J365 = 12%` and `J8760 = 12%` is negligible.

**MCQ 24.** Mary is **borrowing** and wants the **lowest** effective rate.

| Bank | Quote | Effective annual rate |
|---|---|---|
| A | 15.00% quarterly | `(1 + 0.15/4)⁴ − 1` = 15.865% |
| **B** | **15.10% semi-annually** | `(1 + 0.151/2)² − 1` = **15.670%** ← lowest |
| C | 14.90% monthly | `(1 + 0.149/12)¹² − 1` = 15.961% |
| D | 14.75% daily | `(1 + 0.1475/365)³⁶⁵ − 1` = 15.890% |
| E | 20.00% daily | `(1 + 0.20/365)³⁶⁵ − 1` = 22.134% |

**Bank B**, despite quoting the *second-highest* nominal rate.

> **The lowest nominal rate is not the cheapest loan.** Bank C quotes 14.90% — the second lowest headline — and is the second *most* expensive once monthly compounding is applied. Convert everything to an effective annual rate before comparing anything.

### Worked examples — Tutorial 3 MCQ 17 and 19

```
MCQ 17: monthly rate 2.50%  →  i = (1.025)¹² − 1 = 34.489%   ≈ 34.49%
MCQ 19: 2.5% per two months →  i = (1.025)⁶  − 1 = 15.969%   ≈ 15.97%
```

Same periodic rate, different `m`, wildly different effective rates. Count the periods per year before you exponentiate.

---

## 3.3 Multiple cash flows

Handle them by finding the PV (or FV) of **each** cash flow and summing.

```
PV₀ = Σ  CFₜ (1 + i)⁻ᵗ
```

**Lecture 3, Example 8.** $100 in one year, $200 in two years, `i = 10%`.
```
PV = 100(1.10)⁻¹ + 200(1.10)⁻²
   = 90.909 + 165.289
   = $256.20
```

---

## 3.4 Annuities

An **annuity** is a series of **fixed** payments `C` at **equal** intervals.

| Type | First payment | Example |
|---|---|---|
| **Ordinary annuity** (in arrears) | End of period 1 | Home loan repayments |
| **Annuity due** (in advance) | **Today**, at t = 0 | Lease payments |
| **Deferred annuity** | Later than the end of period 1 | Retirement deferred annuities |

### PV of an ordinary annuity

```
PV₀ = C [1 − 1/(1+i)ⁿ] / i
```

**Lecture 3, Example 9.** Four-year ordinary annuity of $5,000, `i = 8%`.

The long way:
```
5,000(1.08)⁻¹ = 4,629.63
5,000(1.08)⁻² = 4,286.69
5,000(1.08)⁻³ = 3,969.16
5,000(1.08)⁻⁴ = 3,675.15
                ---------
                16,560.63
```
The short way:
```
PV = 5,000[1 − 1/(1.08)⁴]/0.08 = 5,000 × 3.312127 = 16,560.63   ✔
```

### Where the formula values the cash flows — and why

This is the most important sentence in the topic:

> **The PV of annuity formula values the annuity ONE PERIOD BEFORE the first cash flow.**

Tutorial 3 Q8 asks you to prove it, and the proof is short enough to reproduce in an exam:

```
       PV₀      = C/(1+i) + C/(1+i)² + … + C/(1+i)ⁿ          (1)
PV₀ (1+i)      = C       + C/(1+i)  + … + C/(1+i)ⁿ⁻¹        (2)

(2) − (1):   PV₀(1+i) − PV₀ = C − C/(1+i)ⁿ
             PV₀ · i        = C[1 − 1/(1+i)ⁿ]
             PV₀            = C[1 − 1/(1+i)ⁿ]/i
```

The derivation *starts* with the first cash flow at `t = 1`. That is why the answer lands at `t = 0` — one period earlier. It is not a convention someone chose; it falls out of the algebra.

Consequences:

- If the annuity is **yearly**, PV sits one **year** before the first cash flow.
- If **monthly**, one **month** before the first cash flow.
- The rate frequency must match the cash-flow frequency:

| Situation | What to do |
|---|---|
| freq of C = freq of J (yearly/yearly) | No adjustment |
| freq of C > freq of J (monthly cash flows, annual nominal rate) | `i = Jm/m` |
| freq of C < freq of J (yearly cash flows, quarterly compounding) | `i = (1 + Jm/m)^m − 1` |

### Solving for the payment

```
C = PV₀ / { [1 − 1/(1+i)ⁿ] / i }
```

### PV of an annuity due

Derived with the first of `n` cash flows at `t = 0`:

```
PV₀ = C + C[1 − 1/(1+i)ⁿ⁻¹]/i
```

Equivalently, one payment today plus an ordinary annuity of `n − 1` payments. (Multiplying the ordinary-annuity PV by `(1+i)` gives the same number.)

**Lecture 3, Example 11.** Five annual payments of $5,000, first one today, `i = 8%`.
```
PV = 5,000 + 5,000[1 − 1/(1.08)⁴]/0.08
   = 5,000 + 16,560.63
   = $21,560.63
```

Compare Example 9 (four payments in arrears, $16,560.63): the same discount factors, plus a whole undiscounted payment at t = 0.

**Tutorial 3 MCQ 21.** Four payments of $12,000 starting **today**, `r = 15%`.
```
PV = 12,000 + 12,000[1 − 1/(1.15)³]/0.15
   = 12,000 + 12,000 × 2.283225
   = 12,000 + 27,398.70
   = $39,398.70
```

> **Count the payments, then subtract one.** A four-payment annuity due is `C + [3-payment ordinary annuity]`, not `C + [4-payment ordinary annuity]`. Using `n = 4` inside the bracket gives $46,256 — and that error is what the "$48,000" distractor (4 × 12,000) is neighbouring.

### Deferred annuities

**Lecture 3, Example 12.** On your 18th birthday you are promised $1,000 each year for 5 years, **commencing on your 21st birthday**. `i = 10%`.

```
Step 1 — value the annuity one period before the first cash flow, i.e. at age 20:
   PV₂₀ = 1,000[1 − 1/(1.10)⁵]/0.10 = 1,000 × 3.790787 = 3,790.79

Step 2 — discount that back two more years to age 18:
   PV₁₈ = 3,790.79 × (1.10)⁻² = 3,132.88
```

> **The discount is 2 years, not 3.** The first payment is 3 years away (18 → 21), but the annuity formula already lands you at 20. Discounting 3 years gives $2,848 — a $285 error. Write the age under the value: "3,790.79 is a value **at 20**". Then the exponent is obvious.

**Tutorial 3 Q10 — the definitive comparison.** Angelina receives 10 yearly payments of $8,000, first payment either **today** (18th birthday) or **in three years** (21st). `i = 10%`.

```
First payment today — annuity due:
   PV₀ = 8,000 + 8,000[1 − 1/(1.10)⁹]/0.10 = 8,000 + 46,072.19 = $54,072.19

First payment in 3 years — deferred annuity:
   PV₂ = 8,000[1 − 1/(1.10)¹⁰]/0.10 = $49,156.54          (value at year 2)
   PV₀ = 49,156.54 (1.10)⁻²          = $40,625.24
```

She prefers today, by **$13,446.95**. Note both legs used the same 10 payments and the same rate — only the timing changed.

### FV of an annuity

```
FVₙ = C [(1 + i)ⁿ − 1] / i

C   = FVₙ / { [(1 + i)ⁿ − 1] / i }
```

**The FV lands on the date of the LAST cash flow.**

**Lecture 3, Example 15.** Ordinary annuity, `C = 5,000`, `i = 8%`, `n = 4`.
```
5,000(1.08)³ = 6,298.56
5,000(1.08)² = 5,832.00
5,000(1.08)¹ = 5,400.00
5,000                = 5,000.00
                      ---------
                       22,530.56
FV = 5,000[(1.08)⁴ − 1]/0.08 = 5,000 × 4.506112 = 22,530.56   ✔
```

And the two are consistent: `16,560.63 × (1.08)⁴ = 22,530.56`. Once you know the value of a stream at *any* date, multiply by `(1+i)ⁿ` to move forward or `(1+i)⁻ⁿ` to move back.

**Tutorial 3 Q15 — a frequency mismatch.** $100 deposited at the **end of every year** for five years.

```
(a) J1 = 8%  — rate and cash flows both annual, so use the formula directly:
    FV = 100[(1.08)⁵ − 1]/0.08 = $586.66

(b) J4 = 8%  — quarterly compounding, annual cash flows: MISMATCH.
    Option 1: compound each deposit individually
      100(1.02)¹⁶ + 100(1.02)¹² + 100(1.02)⁸ + 100(1.02)⁴ + 100 = $589.51
    Option 2: convert to an effective annual rate first
      i = (1 + 0.08/4)⁴ − 1 = 0.082432
      FV = 100[(1.082432)⁵ − 1]/0.082432 = $589.51    ✔
```

> **You cannot put `J4 = 8%` into an annual annuity formula.** Neither `i = 0.08` nor `i = 0.02` is correct — the first ignores the compounding, the second applies a quarterly rate to annual payments. Convert to the effective annual rate. The gap here is only $2.85, but on a 30-year mortgage the equivalent error is thousands.

**Tutorial 3 MCQ 20.** Value at end of year 4 of four $12,000 payments starting in one year, 15%:
```
FV₄ = 12,000[(1.15)⁴ − 1]/0.15 = 12,000 × 4.993375 = $59,920.50
```

**Tutorial 3 MCQ 25 — a savings plan.** Deposits from age 35, then a 20-year, $50,000 annual annuity with the first withdrawal on the 65th birthday, `i = 6%`.

```
Amount needed on the 65th birthday (payment that day + 19 more):
   50,000 + 50,000[1 − 1/(1.06)¹⁹]/0.06 = 50,000 + 557,905.82 = $607,905.82

31 deposits (35th through 65th birthday inclusive), FV dated at the 65th birthday:
   C = 607,905.82 / {[(1.06)³¹ − 1]/0.06} = 607,905.82 / 84.80168 = $7,168.56
```
The answer key gives **$7,169**.

> **The question and its own answer disagree about the number of deposits — check with your tutor.** The question says "Matt will make the **final deposit on his 64th birthday**", which is 30 deposits (ages 35–64). On that reading the FV lands at age 64, so you need `607,905.82/1.06 = $573,496.06` there, and `C = 573,496.06 / 79.05819 = $7,254.10`. The published answer of $7,169 only reconciles with **31** deposits. Tutorial 7 Q1 confirms the unit's house convention: for someone aged 35 saving until retirement at 65, it counts "**31 saving events**". So the intended method is 31 deposits and the parenthetical about the 64th birthday is a leftover. **Use 31 in an exam, but say what you assumed.**

### Amortising loans

**Lecture 3, Example 10 (continued on slide 22).** Once you know the repayment `C` on an amortising loan:

```
Payment (C) = Principal repaid (P) + Interest paid (I)
I = C − P
```

The lecture's worked figures: `C = 96,738.00`, opening balance 750,000, closing balance 727,343.66, so principal repaid = `750,000 − 727,343.66 = 22,656.34` and
```
I = 96,738.00 − 22,656.34 = 74,081.66
```
At the beginning of a loan, **most of the repayment is interest**.

**Tutorial 3 Q11 — $600,000 home loan, `J12 = 6.00%`, 30 years.**

```
Monthly rate  i = 0.06/12 = 0.005
Months        n = 360

(a) C = 600,000 / {[1 − 1/(1.005)³⁶⁰]/0.005}
      = 600,000 / 166.79161
      = $3,597.30

(b) Balance after 2 years = PV of the remaining 336 payments
      = 3,597.30 [1 − 1/(1.005)³³⁶]/0.005
      = $584,809.41

(c) Interest component of the 25th repayment = one month's interest on the opening balance
      I = 584,809.41 × 0.06 × 1/12 = $2,924.05
```

Of a $3,597.30 payment, $2,924.05 is interest and only $673.25 reduces the principal. After two years of payments totalling $86,335, the balance has fallen by just **$15,191**.

**Tutorial 3 Q12 — $500,000 loan, 6.50% p.a. charged monthly, 30 years.**

```
i = 0.065/12 = 0.00541667,  n = 360

(a) C = 500,000 / {[1 − 1/(1.00541667)³⁶⁰]/0.00541667} = $3,160.34

(b) Balance after 3 years (324 payments remaining)
      = 3,160.34[1 − 1/(1.00541667)³²⁴]/0.00541667 = $482,086.21

(c) Total interest paid in 3 years
      = total payments − principal repaid
      = 3,160.34 × 36 − (500,000 − 482,086.21)
      = 113,772.25 − 17,913.79
      = $95,858.45
```

> **"Total interest paid" is not "total payments".** 36 payments come to $113,772.25, but $17,913.79 of that was principal. Interest is the difference. Writing $113,772 loses the mark outright.

> **A rounding warning that bites on long loans.** If you round `C` to $3,160 before computing the balance, the year-3 balance moves by about $35. Carry the unrounded repayment through and round only at the end. Published answers to loan questions are computed from unrounded periodic rates — `0.065/12 = 0.005416666…`, not `0.00542`.

---

## 3.5 Perpetuities

A **perpetuity** is an annuity to infinity — equal payments at equal intervals, forever.

```
PV₀ = C / i
```

**Like the annuity formula, it values the cash flows ONE PERIOD BEFORE the first payment.**

**Lecture 3, Example 13.** $10 every year forever at 10%: `PV = 10/0.10 = $100`.

**Tutorial 3 Q13.** $100 annual perpetuity, first payment in one year, `i = 10%`: `PV = 100/0.10 = $1,000`.

### Growing perpetuity

```
PV₀ = C₁ / (i − g)
```

where `g` is the constant growth rate and `C₁` is the **first** cash flow (one period from the valuation date).

**Lecture 3, Example 14.** First cash flow $10, growing at 2% forever, discount rate 10%.
```
PV = 10/(0.10 − 0.02) = 10/0.08 = $125
```

Compare the flat perpetuity ($100): 2% of growth added 25% to the value. That sensitivity is exactly why the dividend growth model in Topic 4 is so fragile as `g` approaches `i`.

### Worked example — Tutorial 3 Q14 — deferred perpetuity

A perpetuity paying $1,000 p.a. with the **first payment in 12 years**, `i = 10%`.

```
Value one period before the first payment (at t = 11):
   PV₁₁ = 1,000/0.10 = $10,000

(a) Today:                    10,000 (1.10)⁻¹¹ = $3,504.94
(b) One year before the first payment (t = 11): $10,000
(c) At the first payment (t = 12), including that day's payment:
                              10,000 + 1,000 = $11,000
```

Part (c) is worth pausing on. At `t = 12` the perpetuity formula values *the payments from t = 13 onwards* at $10,000, and you additionally receive the $1,000 due that day.

### Worked example — Tutorial 3 MCQ 22

The PV of a perpetuity whose **first cash flow is in 4 years** equals receiving **$100,000 in 15 years**. `r = 10%`. Find the annual cash flow.

```
PV today of the lump sum:      100,000(1.10)⁻¹⁵ = 23,939.20
That is also the PV today of the perpetuity.

The perpetuity formula values it at t = 3 (one period before the first cash flow at t = 4):
   PV₃ = 23,939.20 (1.10)³ = 31,863.08
   C   = PV₃ × i = 31,863.08 × 0.10 = $3,186.31
```

> **The exponent is 3, not 4.** The perpetuity's first payment is at `t = 4`, so the formula's output sits at `t = 3`. Using 4 gives `C = $3,504.94` — and that number is the answer to a *different* question. There is no $3,505 option on the MCQ, but there is on Q14(a) of the same tutorial; the two questions are testing the same off-by-one.

### Worked example — Tutorial 3 MCQ 18

A six-payment quarterly annuity of $1,000, first payment **in two years**, `J4 = 20%`.

```
Quarterly rate i = 0.20/4 = 0.05
First payment at quarter 8 → annuity formula gives a value at quarter 7

PV₇ = 1,000[1 − 1/(1.05)⁶]/0.05 = 1,000 × 5.075692 = 5,075.69
PV₀ = 5,075.69 (1.05)⁻⁷         = $3,607.20
```

Everything is in **quarters**: 2 years = 8 quarters, so discount back 7 quarters at the quarterly rate. Mixing units (discounting 7 *years*, or 1.75 years at an annual rate) is the failure mode here.

### Worked example — Tutorial 3 Q9 — moving a stream around the timeline

| Year | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|---|---|
| Cash flow | | | 2,500 | 1,500 | 1,500 | 1,500 | 1,500 | | |

`r = 10.00%`.

```
(a) PV at year 0
    = 2,500(1.10)⁻² + 1,500(1.10)⁻³ + 1,500(1.10)⁻⁴ + 1,500(1.10)⁻⁵ + 1,500(1.10)⁻⁶
    = 2,066.12 + 1,127.00 + 1,024.54 + 931.38 + 846.71
    = $5,995.70

(b) PV at year 2 = 5,995.70 (1.10)²  = $7,254.80
(c) FV at year 6 = 5,995.70 (1.10)⁶  = $10,621.75
(d) FV at year 8 = 5,995.70 (1.10)⁸  = $12,852.32
```

Or, faster: the four $1,500 payments are an ordinary annuity whose formula value sits at **year 2**, alongside the $2,500 lump sum:
```
Value at year 2 = 2,500 + 1,500[1 − 1/(1.10)⁴]/0.10 = 2,500 + 4,754.80 = 7,254.80  ✔
```
Then slide that single number anywhere on the timeline. **This is the technique**: collapse the stream to one number at one date, then move it.

### Worked example — Tutorial 3 MCQ 23 — comparing salary packages

Five-year horizon, `r = 10.00%`.

| Package | Calculation | PV |
|---|---|---|
| (a) $200,000 today | — | $200,000.00 |
| (b) $100,000 today + $25,000 p.a. starting today | `100,000 + 25,000 + 25,000[1 − 1.1⁻⁴]/0.1` | $204,246.64 |
| **(c) $56,700 p.a. from year 1** | `56,700[1 − 1.1⁻⁵]/0.1` | **$214,937.61** ← best |
| (d) Commissions 45,000 / 52,500 / 54,400 / 60,000 / 63,000 | sum of `CFₜ(1.1)⁻ᵗ` | $205,267.90 |
| (e) $210,000 in one year | `210,000/1.10` | $190,909.09 |

Package (c). Undiscounted, (c) totals $283,500 and (d) totals $274,900 — but (b) hands over $200,000 in the first year alone. The ordering only becomes clear once everything is discounted to the same date, which is the point of the question.

---

## Summary

- **Compound interest**: `FVₙ = PV₀(1+i)ⁿ`, and its four rearrangements. Over long horizons it dwarfs simple interest.
- **`Jm` is a nominal rate.** Periodic rate = `Jm/m`; effective annual rate `i = (1 + Jm/m)^m − 1`. Compare offers only after converting to effective rates.
- **Ordinary annuity:** `PV₀ = C[1 − 1/(1+i)ⁿ]/i` — value sits **one period before the first payment**.
- **Annuity due:** `PV₀ = C + C[1 − 1/(1+i)ⁿ⁻¹]/i` — note the `n − 1`.
- **Deferred annuity:** apply the ordinary formula, then discount the extra periods. Count from the formula's landing date, not from today.
- **FV of an annuity:** `FVₙ = C[(1+i)ⁿ − 1]/i` — value sits **on the date of the last payment**.
- **Perpetuity:** `PV₀ = C/i`. **Growing perpetuity:** `PV₀ = C₁/(i − g)`. Both land one period before the first payment.
- **Amortising loans:** balance at any date = PV of the remaining payments. Interest in a period = opening balance × periodic rate. Total interest = total payments − principal repaid.
- **Match the rate frequency to the cash-flow frequency**, and work in the cash flows' own time units.
- Once a stream is collapsed to a single value at a single date, move it with `(1+i)^±n`.

<details><summary>Checkpoint — eight questions</summary>

1. What is the effective annual rate of `J12 = 7.20%`?
2. A five-year ordinary annuity of $2,000 at 9%. What is its PV, and its FV at year 5?
3. Same annuity but the first payment is today. New PV?
4. A perpetuity of $600 p.a. with the first payment in 8 years, `i = 7%`. Value today?
5. $350,000 borrowed over 25 years at `J12 = 5.40%`. Monthly repayment?
6. For the loan in Q5, what is the balance after 5 years?
7. Why does the PV-of-annuity formula land one period before the first cash flow?
8. A $1,000 quarterly annuity runs for 12 quarters, first payment in 3 quarters. `J4 = 16%`. PV today?

---

**Answers**

1. `i = (1 + 0.072/12)¹² − 1 = (1.006)¹² − 1 = **7.442%**`.

2. `PV = 2,000[1 − 1/(1.09)⁵]/0.09 = 2,000 × 3.889651 = **$7,779.30**`. `FV₅ = 2,000[(1.09)⁵ − 1]/0.09 = 2,000 × 5.984711 = **$11,969.42**`. Check: `7,779.30 × 1.09⁵ = 11,969.42`. ✔

3. Annuity due: `PV = 2,000 + 2,000[1 − 1/(1.09)⁴]/0.09 = 2,000 + 6,479.44 = **$8,479.44**`. (Equivalently `7,779.30 × 1.09 = 8,479.44`.) ✔

4. Formula value sits at `t = 7`: `600/0.07 = 8,571.43`. Today: `8,571.43(1.07)⁻⁷ = **$5,337.85**`.

5. `i = 0.054/12 = 0.0045`, `n = 300`. `C = 350,000/{[1 − 1/(1.0045)³⁰⁰]/0.0045} = 350,000/164.4359 = **$2,128.45**`.

6. 240 payments remaining: `2,128.45[1 − 1/(1.0045)²⁴⁰]/0.0045 = **$311,975.05**`. The balance has fallen by only **$38,024.95** after $127,707.28 of payments — the other $89,682 was interest.

7. Because the algebraic derivation begins with the first cash flow at `t = 1`. Subtracting `PV₀` from `PV₀(1+i)` telescopes the series, leaving a value dated one period ahead of the first payment.

8. Quarterly rate `i = 0.16/4 = 0.04`. First payment at quarter 3, so the formula lands at quarter 2. `PV₂ = 1,000[1 − 1/(1.04)¹²]/0.04 = 1,000 × 9.385074 = 9,385.07`. `PV₀ = 9,385.07(1.04)⁻² = **$8,677.03**`.
</details>
