# Practice Questions

Exam-style questions across all ten topics, matching the format the unit uses: multiple choice for the mid-semester exam (Topics 1–4) and longer worked problems for the final. Answers are hidden — attempt each set before opening them.

Every figure below was computed independently in Python and re-checked after drafting. Where a question is genuinely ambiguous, the answer gives both readings and names the conventional one.

---

## Part A — Multiple choice: Topics 1–4 (mid-semester style)

**A1.** Under Fisher's Separation Theorem, in perfect capital markets the firm should:

a. Choose the production point that maximises the utility of the majority of shareholders
b. Accept all projects where `IRR > i`, regardless of owners' consumption preferences
c. Minimise dividends in period 1 in order to maximise investment
d. Choose the production point where the marginal rate of return equals zero

**A2.** A firm has a $600,000 endowment and `i = 12%`. It undertakes projects costing $410,000 in total, returning $500,000 in period 2. The value of the firm after investing is:

a. $600,000
b. $636,428.57
c. $690,000
d. $446,428.57

**A3.** A 120-day, $250,000 face value bank bill is purchased at a yield of 6.20% and sold 40 days later at a yield of 5.90%. The dollar interest earned is closest to:

a. $1,802
b. $2,038
c. −$610
d. $2,449

**A4.** What is the effective annual rate of `J4 = 9.60%`?

a. 9.60%
b. 9.95%
c. 10.03%
d. 38.40%

**A5.** A five-payment annuity of $4,000 has its first payment in four years' time. At `r = 8%` its present value today is closest to:

a. $12,678
b. $13,690
c. $14,787
d. $15,971

**A6.** A $100 face value bond pays a 6% annual coupon, has 8 years to maturity and yields 7.50%. Its price is:

a. $91.214
b. $94.607
c. $100.000
d. $108.980

**A7.** A share has just paid a dividend of $0.64. Dividends are expected to grow at 4.5% p.a. indefinitely and the required return is 11%. The current price is:

a. $5.82
b. $9.85
c. $10.29
d. $14.22

**A8.** A company announces a 1-for-3 rights issue at a subscription price of $2.40 when the cum-rights price is $3.20. The theoretical ex-rights price and the value of the right to **one new share** are:

a. $2.93 and $0.53
b. $3.00 and $0.20
c. $3.00 and $0.60
d. $2.80 and $0.40

<details><summary>Answers — Part A</summary>

**A1 — (b).** The theorem's entire content is that the investment decision is made **independently** of consumption preferences; owners then use the capital market to reach their own preferred consumption. Option (a) describes the *pre*-capital-market problem, which has no unique non-dictatorial solution. Option (d) confuses "marginal rate of return equals the market rate" with "equals zero".

**A2 — (b) $636,428.57.**
```
D₁ = 600,000 − 410,000 = 190,000
D₂ = 500,000
W₁ = 190,000 + 500,000/1.12 = 190,000 + 446,428.57 = $636,428.57
```
Cross-check: `NPV = 500,000/1.12 − 410,000 = 36,428.57`, and `600,000 + 36,428.57 = 636,428.57` ✔. Option (c) is `600,000 + (500,000 − 410,000)` — undiscounted. Option (d) is the present value of D₂ with the D₁ dividend forgotten.

**A3 — (a) $1,802.**
```
Buy  (120 days, 6.20%): 250,000/(1 + 0.062 × 120/365) = 250,000/1.02038356 = 245,005.91
Sell ( 80 days, 5.90%): 250,000/(1 + 0.059 ×  80/365) = 250,000/1.01293151 = 246,808.40

Interest = 246,808.40 − 245,005.91 = $1,802.49
```
Option (c) is what you get if you price the sale over the **original** 120 days instead of the 80 remaining — the standard trap.

**A4 — (b) 9.95%.** `(1 + 0.096/4)⁴ − 1 = (1.024)⁴ − 1 = 0.099512 = 9.95%`. Option (d) multiplies rather than compounds.

**A5 — (a) $12,678.** The annuity formula lands **one period before the first payment**, i.e. at year 3:
```
PV₃ = 4,000[1 − 1/(1.08)⁵]/0.08 = 4,000 × 3.992710 = 15,970.84
PV₀ = 15,970.84 (1.08)⁻³ = $12,678.17
```
Option (d) is `PV₃` left undiscounted; option (c) discounts only two years. Both are the classic deferred-annuity off-by-one.

**A6 — (a) $91.214.**
```
P = 6[1 − 1/(1.075)⁸]/0.075 + 100(1.075)⁻⁸ = 35.144 + 56.070 = $91.214
```
Yield (7.50%) > coupon (6%), so it must trade at a **discount** — which rules out (c) and (d) before you calculate anything.

**A7 — (c) $10.29.** `D₁ = 0.64 × 1.045 = 0.6688`; `P₀ = 0.6688/(0.11 − 0.045) = 0.6688/0.065 = $10.289`. Option (b) $9.85 is the `D₀` error (`0.64/0.065`).

**A8 — (c) $3.00 and $0.60.**
```
N = 3
X = (N·M + S)/(N + 1) = (3 × 3.20 + 2.40)/4 = 12.00/4 = $3.00
R = X − S = 3.00 − 2.40 = $0.60
```
Option (b) pairs the correct `X` with `(M − S)/(N + 1) = $0.20`, which is the value attaching to **one old share held** — three of those make up the $0.60 right to one new share. Read which the question asked for.
</details>

---

## Part B — Two-period model and simple interest

**B1.** A company has an endowment of $800,000 and faces a market rate of 14%. Its available projects are:

| Project | I₁ | X₂ |
|---|---|---|
| 1 | 180,000 | 210,000 |
| 2 | 240,000 | 268,000 |
| 3 | 150,000 | 178,500 |
| 4 | 320,000 | 372,000 |

a. Which projects should be undertaken, and what are D₁ and D₂?
b. What is the value of the firm, computed two ways?
c. If soft capital rationing caps investment at $400,000, which combination should be chosen, and what does the constraint cost?
d. Under the unconstrained answer, an owner of 15% wants to consume $30,000 in period 1. How much can they consume in period 2?

**B2.** $180,000 is borrowed on 3 April and repaid on 27 September at a simple interest rate of 8.15%. Calculate the repayment.

**B3.** A 180-day, $500,000 bank bill is issued at a yield of 4.85%. Sixty days later it is sold at a yield of 5.40%.

a. What was the issue price?
b. What was the sale price?
c. What dollar interest did the original holder earn, and what annualised simple return does that represent?

<details><summary>Answers — Part B</summary>

**B1(a).**
```
NPV₁ = 210,000/1.14 − 180,000 = 184,210.53 − 180,000 = +$4,210.53   accept
NPV₂ = 268,000/1.14 − 240,000 = 235,087.72 − 240,000 = −$4,912.28   reject
NPV₃ = 178,500/1.14 − 150,000 = 156,578.95 − 150,000 = +$6,578.95   accept
NPV₄ = 372,000/1.14 − 320,000 = 326,315.79 − 320,000 = +$6,315.79   accept

Undertake 1, 3 and 4.
I₁ = 180,000 + 150,000 + 320,000 = $650,000
D₁ = 800,000 − 650,000            = $150,000
D₂ = 210,000 + 178,500 + 372,000  = $760,500
```

**B1(b).**
```
W₁ = 150,000 + 760,500/1.14 = 150,000 + 667,105.26 = $817,105.26
W₁ = 800,000 + 4,210.53 + 6,578.95 + 6,315.79      = $817,105.26   ✔
```

**B1(c).** Combinations costing ≤ $400,000:

| Combination | I₁ | Total NPV |
|---|---|---|
| **1 + 3** | 330,000 | **$10,789.48** ← best |
| 3 alone | 150,000 | $6,578.95 |
| 4 alone | 320,000 | $6,315.79 |
| 1 alone | 180,000 | $4,210.53 |

Choose **1 and 3**. `W₁ = 800,000 + 10,789.48 = $810,789.48`, so the constraint costs `817,105.26 − 810,789.48 = $6,315.78` — **exactly Project 4's NPV**, which is the project the cap excluded.

**B1(d).** `d₁ = 0.15 × 150,000 = $22,500`; `d₂ = 0.15 × 760,500 = $114,075`.
```
Consuming 30,000 in P1 means BORROWING 7,500, repaid with interest in P2:
c₂ = 114,075 − 7,500(1.14) = 114,075 − 8,550 = $105,525
```
Note the bracket is **multiplied** by 1.14, not divided — the shortfall is carried forward, not discounted back.

**B2.** Days from 3 April to 27 September: Apr 27 + May 31 + Jun 30 + Jul 31 + Aug 31 + Sep 27 = **177 days**.
```
FV = 180,000(1 + 0.0815 × 177/365) = 180,000 × 1.03952192 = $187,113.95
```

**B3(a).** `500,000/(1 + 0.0485 × 180/365) = 500,000/1.02391781 = $488,320.45`
**B3(b).** 120 days remain: `500,000/(1 + 0.054 × 120/365) = 500,000/1.01775342 = $491,278.13`
**B3(c).**
```
Interest = 491,278.13 − 488,320.45 = $2,957.68

Annualised simple return over the 60-day holding period:
r = (491,278.13/488,320.45 − 1) × 365/60 = 0.0060569 × 6.083333 = 3.685%
```
The holder still made money despite yields **rising**, because 60 days of price accretion outweighed the 55-basis-point move. But the realised 3.685% is well below the 4.85% they bought at — a rising yield is a capital loss on a bill you already own.
</details>

---

## Part C — Financial mathematics

**C1.** You borrow $420,000 over 25 years at `J12 = 5.80%`.

a. Calculate the monthly repayment.
b. What is the loan balance after 5 years?
c. What is the interest component of the 61st repayment?
d. How much total interest has been paid over the first 5 years?

**C2.** A retirement plan calls for 25 annual deposits, starting on your 40th birthday and finishing on your 64th. From your 65th birthday you wish to draw $70,000 a year for 25 years. `i = 6.50%`.

a. How much must be in the fund on the 65th birthday, immediately before the first withdrawal?
b. What annual deposit is required?
c. Restate the answer if the deposits instead run from the 40th to the 65th birthday inclusive.

**C3.** A perpetuity paying $2,500 p.a. makes its first payment in 9 years. `i = 7.25%`. Price it (i) today, (ii) one year before the first payment, and (iii) on the date of the first payment, inclusive of that payment.

<details><summary>Answers — Part C</summary>

**C1(a).** `i = 0.058/12 = 0.004833333`, `n = 300`.
```
Annuity factor = [1 − 1/(1.004833333)³⁰⁰]/0.004833333 = 158.194954
C = 420,000/158.194954 = $2,654.95
```

**C1(b).** 240 payments remain.
```
Balance = 2,654.95 [1 − 1/(1.004833333)²⁴⁰]/0.004833333
        = 2,654.95 × 141.855399
        = $376,620.46
```

**C1(c).** One month's interest on the opening balance at the start of month 61:
```
I = 376,620.46 × 0.004833333 = $1,820.33
```
Of a $2,654.95 payment, **$1,820.33 is interest** and only $834.62 reduces the principal — after five years of payments.

**C1(d).**
```
Total payments   = 2,654.95 × 60          = $159,297.12
Principal repaid = 420,000 − 376,620.46   = $ 43,379.54
Interest paid    = 159,297.12 − 43,379.54 = $115,917.58
```
**73% of five years of repayments went to interest.**

**C2(a).** On the 65th birthday you need that day's payment plus a 24-payment ordinary annuity:
```
70,000 + 70,000[1 − 1/(1.065)²⁴]/0.065 = 70,000 + 70,000 × 11.990739
                                       = 70,000 + 839,351.71
                                       = $909,351.71
```

**C2(b).** 25 deposits, ages 40–64. The FV-of-annuity formula lands on the **date of the last deposit (age 64)**, so first discount the target back one year:
```
Needed at 64 = 909,351.71/1.065 = $853,851.37
FV factor for 25 periods = [(1.065)²⁵ − 1]/0.065 = 58.887679
C = 853,851.37/58.887679 = $14,499.66
```

**C2(c).** 26 deposits, ages 40–65, with the FV landing at age 65:
```
FV factor for 26 periods = [(1.065)²⁶ − 1]/0.065 = 63.715378
C = 909,351.71/63.715378 = $14,272.09
```
The extra deposit lowers the required annual amount by **$227.57**. This is exactly the ambiguity in Tutorial 3 MCQ 25; the unit's own convention (Tutorial 7 Q1) counts the retirement birthday as a saving event, giving the (c) answer. State which you used.

**C3.** The perpetuity formula lands **one period before the first cash flow**, i.e. at year 8.
```
PV₈ = 2,500/0.0725 = $34,482.76

(i)   Today:                                 34,482.76 (1.0725)⁻⁸ = $19,698.07
(ii)  One year before the first payment (year 8):                  $34,482.76
(iii) At the first payment (year 9), including that payment:
                                             34,482.76 + 2,500    = $36,982.76
```
</details>

---

## Part D — Capital budgeting

**D1.** Two mutually exclusive projects **with replacement**, `r = 11%`:

| Year | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|---|
| Alpha | (24,000) | 9,000 | 9,000 | 9,000 | 9,000 | | |
| Beta | (35,000) | 10,000 | 10,000 | 10,000 | 10,000 | 10,000 | 10,000 |

a. Calculate the NPV and IRR of each.
b. Which would be chosen on NPV alone?
c. Which should be chosen given replacement, and by how much on an annualised basis?
d. Calculate NPV∞ for each.

**D2.** A manufacturer is evaluating a new production line. Capital cost **$820,000**, life **6 years**, straight-line depreciation to zero, salvage **$95,000**. Annual revenue **$480,000**, annual cash operating costs **$265,000**. Working capital of **$60,000** is required at the start and recovered at the end. Tax **30%**, paid **in the year of income**. Required return **13%**.

a. Build the cash flow model and calculate the NPV.
b. Calculate the annual equivalent.
c. What is the approximate break-even annual revenue?

**D3.** A firm bought a machine **6 years ago for $140,000** with an expected life of **20 years** and zero end value, depreciated straight line. It can be sold today for **$32,000**. A replacement costs **$260,000**, has a **14-year** life and zero salvage, and will lift revenue from **$300,000 to $335,000** while cutting cash operating costs from **$190,000 to $168,000**. Tax **30%** in the year of income. `r = 12%`. No working capital change.

a. Should the machine be replaced?
b. What is the corresponding AE?
c. If the new machine produced no revenue increase, would the answer change?

<details><summary>Answers — Part D</summary>

**D1(a).**
```
Annuity factor, 4 years @ 11% = 3.102446  →  NPV_Alpha = −24,000 + 9,000 × 3.102446 = +$3,922.01
Annuity factor, 6 years @ 11% = 4.230538  →  NPV_Beta  = −35,000 + 10,000 × 4.230538 = +$7,305.38

IRR_Alpha: 24,000 = 9,000 × AF  →  AF = 2.66667  →  IRR = 18.45%
IRR_Beta:  35,000 = 10,000 × AF →  AF = 3.50000  →  IRR = 17.97%
```

**D1(b).** On raw NPV, **Beta** ($7,305.38 vs $3,922.01).

**D1(c).** Unequal lives with replacement → equate lives with AE:
```
AE_Alpha = 3,922.01/3.102446 = $1,264.17
AE_Beta  = 7,305.38/4.230538 = $1,726.82
```
**Beta**, by **$462.65 a year**. Here AE and NPV agree — Beta's longer life is not enough to overturn a nearly two-to-one NPV gap. Do not assume AE always reverses NPV; it only does so when the shorter project is being unfairly penalised for its short life (as in Tutorial 5 Q10, where it does).

**D1(d).** `NPV∞_Alpha = 1,264.17/0.11 = $11,492.43`; `NPV∞_Beta = 1,726.82/0.11 = $15,698.37`. Same ranking, as it must be — NPV∞ is only AE re-expressed as a value.

**D2(a).** `Depreciation = 820,000/6 = 136,666.67`; book value at year 6 = 0; **gain on sale = +95,000**.

| Year | 0 | 1–5 | 6 |
|---|---|---|---|
| Revenue | | 480,000.00 | 480,000.00 |
| Cash costs | | (265,000.00) | (265,000.00) |
| **EBITDA** | | **215,000.00** | **215,000.00** |
| Depreciation | | (136,666.67) | (136,666.67) |
| Gain on sale | | | 95,000.00 |
| **EBIT** | | **78,333.33** | **173,333.33** |
| Tax @ 30% | | (23,500.00) | (52,000.00) |
| **NOPAT** | | 54,833.33 | 121,333.33 |
| Add back depr. & G/L | | 136,666.67 | 41,666.67 |
| **CF from ops** | | **191,500.00** | **163,000.00** |
| Capital expenditure | (820,000) | | |
| Salvage | | | 95,000 |
| Working capital | (60,000) | | 60,000 |
| **FCF** | **(880,000)** | **191,500.00** | **318,000.00** |

```
NPV = −880,000 + 191,500 × [1 − 1/(1.13)⁵]/0.13 + 318,000 (1.13)⁻⁶
    = −880,000 + 191,500 × 3.517231 + 318,000 × 0.480319
    = −880,000 + 673,549.79 + 152,741.29
    = −$53,708.92        →  reject
```
Note the year-6 add-back is `136,666.67 − 95,000 = 41,666.67`: the depreciation returns but the gain is removed, because the gain is not cash — the $95,000 of actual cash appears on the Salvage line.

**D2(b).** `AE = −53,708.92 / {[1 − 1/(1.13)⁶]/0.13} = −53,708.92/3.997550 = −$13,435.46` per year.

**D2(c).** Solving `NPV = 0` on revenue gives approximately **$499,194** p.a. — about **4.0% above** the forecast $480,000. Anything below that destroys value. Given the forecast sits 4% below break-even, the project is not marginal in the wrong direction by much, which is worth saying in a limitations section.

**D3.**
```
Additional revenue = 335,000 − 300,000  = 35,000
Cost reduction     = 190,000 − 168,000  = 22,000
Old depreciation   = 140,000/20         =  7,000 p.a.
New depreciation   = 260,000/14         = 18,571.43 p.a.
Book value old     = 140,000 − 6 × 7,000 = 98,000
Loss on sale old   = 32,000 − 98,000     = (66,000)
```

**Year 0:**
```
EBIT   = (66,000)   →  Tax = +19,800   →  NOPAT = (46,200)
Add back the loss:  +66,000
CF from ops = 19,800
FCF₀ = 19,800 − 260,000 + 32,000 = −$208,200
```

**Years 1–14** (the old machine had 14 years of depreciation left, so the forgone depreciation runs the whole period):
```
EBITDA = 35,000 + 22,000                    = 57,000.00
EBIT   = 57,000 − 18,571.43 + 7,000         = 45,428.57
Tax    = (13,628.57)
NOPAT  = 31,800.00
Add back new depr. 18,571.43, less old depr. 7,000  = +11,571.43
CF from ops                                  = $43,371.43
```

```
Annuity factor, 14 years @ 12% = 6.628168
NPV = −208,200 + 43,371.43 × 6.628168 = −208,200 + 287,473.12 = +$79,273.12   →  replace
```

**(b)** `AE = 79,273.12/6.628168 = $11,960.04` per year.

**(c)** With no revenue increase, EBITDA falls to $22,000:
```
EBIT = 22,000 − 18,571.43 + 7,000 = 10,428.57;  Tax = (3,128.57);  NOPAT = 7,300.00
CF from ops = 7,300.00 + 11,571.43 = $18,871.43
NPV = −208,200 + 18,871.43 × 6.628168 = −208,200 + 125,083.00 = −$83,117.00   →  do NOT replace
```
**Yes, the answer reverses.** As in Tutorial 6 Q7, the entire case rests on the revenue increase, not the cost saving.
</details>

---

## Part E — Risk, return, CAPM and WACC

**E1.** Monthly returns for a share and the market index:

| Month | Share | Market |
|---|---|---|
| 1 | 0.032 | 0.018 |
| 2 | −0.014 | −0.009 |
| 3 | 0.041 | 0.025 |
| 4 | 0.007 | 0.011 |
| 5 | −0.022 | −0.015 |

a. Compute the mean, variance and standard deviation of each series.
b. Compute the covariance and correlation.
c. Compute the share's beta.
d. If `Rf = 0.30%` per month, what monthly return does the CAPM require?

**E2.** Asset F has `E(R) = 14%` and `STD = 24%`. Asset G has `E(R) = 8%` and `STD = 10%`. Their correlation is **−0.15**.

a. Find `E(Rp)` and `STD(Rp)` for a 50/50 portfolio.
b. Compare `STD(Rp)` with the weighted average of the two standard deviations, and explain the gap.
c. Suppose instead the second asset had `STD = 24%` and a correlation with F of **+1.0**. What would the 50/50 portfolio standard deviation be?

**E3.** Harbourline Ltd has **3,000,000 ordinary shares** trading at **$7.80**; **20,000 bonds** with a $100 face value, a **9% annual coupon**, **6 years** to maturity, trading at **$107.582**; a **$4,000,000 bank overdraft** at **9.50%** p.a.; and **500,000 preference shares** trading at **$2.00** paying a constant dividend of **$0.24**. Beta **1.15**, `Rf = 4.25%`, `E[Rm] = 10.75%`, tax **30%**.

a. Calculate the cost of each source of capital.
b. Calculate the WACC using a table.
c. A proposed project in an unrelated industry has a beta of 1.9. Should Harbourline discount it at the WACC? What should it use instead?

<details><summary>Answers — Part E</summary>

**E1(a).**
```
Share:  mean = (0.032 − 0.014 + 0.041 + 0.007 − 0.022)/5 = 0.044/5 = 0.00880
        deviations: 0.0232, −0.0228, 0.0322, −0.0018, −0.0308
        VAR = (0.00053824 + 0.00051984 + 0.00103684 + 0.00000324 + 0.00094864)/4
            = 0.0030468/4 = 0.00076170
        STD = 0.027599  =  2.760%

Market: mean = (0.018 − 0.009 + 0.025 + 0.011 − 0.015)/5 = 0.030/5 = 0.00600
        deviations: 0.012, −0.015, 0.019, 0.005, −0.021
        VAR = (0.000144 + 0.000225 + 0.000361 + 0.000025 + 0.000441)/4
            = 0.001196/4 = 0.00029900
        STD = 0.017292  =  1.729%
```

**E1(b).**
```
Products of the paired deviations:
   0.0232 ×  0.012  =  0.00027840
  −0.0228 × −0.015  =  0.00034200
   0.0322 ×  0.019  =  0.00061180
  −0.0018 ×  0.005  = −0.00000900
  −0.0308 × −0.021  =  0.00064680
                       ----------
Sum                 =  0.00187000

COV    = 0.00187000/4 = 0.00046750
CORREL = 0.00046750/(0.027599 × 0.017292) = 0.9796
```

**E1(c).** `β = COV(Rᵢ, Rm)/VAR(Rm) = 0.00046750/0.00029900 = **1.5635**`.

**E1(d).** `E[R] = 0.0030 + 1.5635(0.00600 − 0.0030) = 0.0030 + 0.004691 = **0.769% per month**`. The realised mean of 0.880% exceeded the required return — over five observations, which proves nothing whatsoever.

**E2(a).**
```
E(Rp) = 0.5(0.14) + 0.5(0.08) = 11.00%

VAR = 0.5²(0.24²) + 0.5²(0.10²) + 2(0.5)(0.5)(−0.15)(0.24)(0.10)
    = 0.25(0.0576) + 0.25(0.0100) − 0.5(0.0036)
    = 0.0144 + 0.0025 − 0.0018
    = 0.0151
STD = √0.0151 = 12.288%
```

**E2(b).** The weighted average is `0.5(24%) + 0.5(10%) = 17.00%`. The portfolio's **12.288%** is **4.71 percentage points lower** — that gap is the diversification benefit, and it is large here because the correlation is **negative**, so the two assets' deviations partly cancel. Note the portfolio's risk is still **above** G's 10% on its own: negative correlation improves on the *average*, not necessarily on the *safest* constituent.

**E2(c).** With `ρ = +1` and both standard deviations at 24%:
```
VAR = 0.25(0.0576) + 0.25(0.0576) + 2(0.5)(0.5)(1.0)(0.24)(0.24)
    = 0.0144 + 0.0144 + 0.0288
    = 0.0576
STD = 24.00%
```
**Exactly the weighted average — no diversification benefit at all.** Perfectly correlated assets are, for risk purposes, one asset.

**E3(a).**
```
ke (CAPM)   = 0.0425 + 1.15(0.1075 − 0.0425) = 0.0425 + 0.07475 = 11.725%

kd (bonds): $107.582 is above par so kd < 9%.  Trial and error:
   at 7.50%:  9[1 − 1.075⁻⁶]/0.075 + 100(1.075)⁻⁶ = 42.253 + 64.788 = 107.041   too low
   at 7.40%:                                                        = 107.533   close
   at 7.39%:                                                        = 107.583   ✔
   kd ≈ 7.39%      →  after tax:  7.39% × 0.70 = 5.173%

Overdraft:  9.50%  →  after tax:  9.50% × 0.70 = 6.650%

Preference: kp = D/P₀ = 0.24/2.00 = 12.00%      (no tax adjustment — dividends are not deductible)
```

**E3(b).**

| Source | Market value | Weight | After-tax cost | Weighted |
|---|---|---|---|---|
| Ordinary shares | `3,000,000 × 7.80` = 23,400,000 | 0.76592 | 11.725% | 8.980% |
| Preference shares | `500,000 × 2.00` = 1,000,000 | 0.03273 | 12.000% | 0.393% |
| Bonds | `20,000 × 107.582` = 2,151,640 | 0.07043 | 5.173% | 0.364% |
| Bank overdraft | 4,000,000 | 0.13093 | 6.650% | 0.871% |
| **Total** | **30,551,640** | **1.00000** | | **10.608%** |

**WACC ≈ 10.61%.**

Two structural checks: the overdraft **does** get the `(1 − t)` adjustment (interest is deductible) and the preference shares **do not**; and the bonds are valued at `20,000 × $107.582`, not at their $2,000,000 face value.

**E3(c).** **No.** The project's beta (1.9) is far above the firm's (1.15), so its cash flows carry substantially more systematic risk. Discounting at 10.61% would understate the required return, overstate the NPV, and lead Harbourline to accept a project it should reject. Use the **pure play** approach: find a listed firm operating solely in that industry, take its beta, adjust for capital-structure differences, and build a project-specific rate. On the given beta the CAPM cost of equity alone is `0.0425 + 1.9(0.065) = **16.60%**` — nearly six percentage points above the firm-wide WACC.
</details>

---

## Part F — Derivatives

**F1.** In August, a cotton grower expects a crop of **340 bales** in March. March cotton futures are quoted at **$620/bale** and the spot price is **$598/bale**. Contracts are for **25 bales**.

a. What position should the grower take, and in how many contracts?
b. In March the spot price is $545 and March futures are $551. The grower harvests **350 bales**. Compute the futures result, the auction proceeds, the total and the average price per bale.
c. Explain the gap between the average price achieved and the $620 originally quoted.

**F2.** A share trades at **$46.80**. A **$44.00 call** trades at **$4.15** and a **$48.00 put** trades at **$3.05**. Contract size 100.

a. Split each premium into intrinsic and time value.
b. You buy one call contract. The share ends at $53.20. What is your payoff, and your profit?
c. You write one put contract. The share ends at $41.00. What is your payoff, and your profit?
d. A **$42.00 call** on the same share is quoted at **$4.20**. Is there an arbitrage? Describe the trade and the profit per contract.

<details><summary>Answers — Part F</summary>

**F1(a).** The grower will **sell** cotton later, so **sell** futures. `340/25 = 13.6 contracts` → **14 contracts** (350 bales) rounding to the nearest whole contract, or 13 (325 bales) rounding down. The workings below use 14; state your convention.

**F1(b).**
```
Futures: sold at 620 in August, closed out by BUYING at 551 in March
  Profit per bale       = 620 − 551 = $69
  14 contracts × 25 bales × $69     = $24,150

Auction: 350 bales × $545           = $190,750

Total = 190,750 + 24,150             = $214,900
Average = 214,900/350                = $614.00 per bale
```

**F1(c).** Two effects, and only one applies here:

1. **Basis.** At close, `F − S = 551 − 545 = $6`. The effective hedged price is `F₀ − basis at close = 620 − 6 = $614`, not the $620 quoted. **Basis risk is what a futures hedge cannot remove.**
2. **Quantity mismatch** contributed nothing this time — 14 contracts × 25 bales = 350 bales, exactly the harvest. Had the grower shorn only the anticipated 340, 10 bales' worth of futures would have been an unhedged short position, and the average would have moved again.

**F2(a).**
```
$44.00 call:  IV = max(46.80 − 44.00, 0) = $2.80;   TV = 4.15 − 2.80 = $1.35
$48.00 put:   IV = max(48.00 − 46.80, 0) = $1.20;   TV = 3.05 − 1.20 = $1.85
```
Both are in the money, so both have positive intrinsic value.

**F2(b).**
```
Call is in the money (53.20 > 44.00) → exercise.
Payoff = (53.20 − 44.00) × 100         = $920
Profit = 920 − (4.15 × 100) = 920 − 415 = $505
```

**F2(c).**
```
Put is in the money (41.00 < 48.00) → exercised against you.
Payoff = −(48.00 − 41.00) × 100          = −$700
Profit = −700 + (3.05 × 100) = −700 + 305 = −$395
```
Note the writer's **payoff** is negative but the **profit** is less negative by the premium received — and the question asks for both.

**F2(d).**
```
IV of the $42.00 call = 46.80 − 42.00 = $4.80
Premium               = $4.20         → trading BELOW intrinsic value
```
**Yes, there is an arbitrage.**
```
Buy the call at 4.20
Exercise immediately, buying the share at 42.00
Sell the share in the market at 46.80

Profit per share    = 46.80 − 42.00 − 4.20 = $0.60
Profit per contract = $60,  riskless, with no capital at risk beyond the moment
```
Executing the trade pushes the call premium **up** and the share price **down**, closing the gap. Arbitrage eliminates the mispricing it feeds on — which is precisely why intrinsic value acts as the option's lower bound.
</details>

---

## Part G — Short-answer concepts

Answer each in three to five sentences. These match the style most likely to appear as written questions.

**G1.** State the assumptions of Fisher's Separation Theorem and explain its central implication for financial decision making.

**G2.** Distinguish soft from hard capital rationing, give an example of each, and explain the effect on the firm.

**G3.** Explain why NPV and IRR always agree for independent projects with standard cash flows but can conflict for mutually exclusive ones.

**G4.** Why is annual equivalence needed for mutually exclusive projects with unequal lives and replacement, and what assumption does it rest on?

**G5.** Explain why the market rewards systematic but not non-systematic risk.

**G6.** Under what conditions is a firm's WACC an appropriate discount rate for a project, and what should be used when those conditions fail?

**G7.** Explain why an option's premium can never fall below its intrinsic value for long.

<details><summary>Answers — Part G</summary>

**G1.** Two periods; perfect certainty (so the market rate is the riskless rate); perfect capital markets (one interest rate, costless and equal information, no taxes or transaction costs, no price-setters); rational investors who prefer more wealth to less; and managers acting in shareholders' interests. **The implication:** the firm's investment decision can be made **separately from the owners' consumption preferences**. The firm accepts all projects with `IRR > i` (equivalently `NPV > 0`), which maximises firm value; owners then borrow or lend in the capital market to obtain whatever consumption pattern they prefer. Without capital markets and with multiple owners there is no unique, non-dictatorial production point.

**G2.** **Soft (internal)** rationing is a self-imposed ceiling — management decides, for example, not to invest beyond the year's internal funds, even though borrowing is available. **Hard (external)** rationing is a market constraint — a poor credit rating, restrictive covenants or regulation prevents the firm raising funds. Under either, the firm must choose the **combination** of projects that maximises total NPV within the budget, rather than simply taking every positive-NPV project, and the cost of the constraint is exactly the NPV of the projects it excludes. The lecture's position is that markets behave as if imperfections were trivial, so genuinely positive-NPV projects do get funded; soft rationing has no conceptual justification at all.

**G3.** IRR is defined as the rate at which NPV is zero, so for a standard cash-flow pattern — one outlay followed by inflows — `IRR > r` and `NPV > 0` are equivalent statements, and the accept/reject decision is identical. For **mutually exclusive** projects the question changes from "is this worthwhile?" to "which adds the most value?", and IRR is a **rate** that ignores the **scale** and **timing** of the investment. A small project with a very high percentage return can add less dollar value than a larger project with a lower one, and IRR systematically favours projects whose cash flows arrive sooner. NPV measures the dollar increase in firm value directly, so **NPV is the method consistent with the firm's objective**.

**G4.** Standard NPV neither accounts for replacement nor equates lives, so comparing a three-year project's NPV against a five-year project's compares one cycle with one cycle — when in reality the shorter project will be repeated. **AE converts each NPV into an equivalent annual value over that project's own life**, making them directly comparable; under perpetual-chain replacement the AE becomes a perpetuity valued at `AE/r`. The assumption is that **the project's cash flows are constant through each investment cycle** — no inflation, no technological change, no price drift. AE also only compares directly when the projects share a discount rate; if they do not, convert to a value figure such as NPV∞.

**G5.** Total risk is the sum of systematic and non-systematic risk. Non-systematic (asset-specific, diversifiable) risk can be **eliminated at no cost** by holding 15–20 unrelated assets, so anyone bearing it is doing so by choice. Competition among diversified investors means no one will pay a premium for exposure they could have removed for free, so the market offers no compensation for it. Systematic (market-related, non-diversifiable) risk cannot be avoided by any investor holding risky assets, so it must be compensated — and beta, which measures exposure to it, is therefore the priced risk measure. This is why two assets with identical expected returns can have very different variances.

**G6.** The firm's WACC is appropriate when (i) the project has **the same risk as the firm's existing operations** — typically an expansion of what the firm already does; (ii) the **target debt/equity ratio is not changing** and the weights represent it; (iii) **market values** are used for equity and debt; and (iv) the cash flows discounted are **after tax but before interest and interest tax savings**. When project risk differs — a takeover in another industry, or a diversification move — the firm-wide WACC is wrong in a predictable direction: too high for low-beta projects, so good ones get rejected, and too low for high-beta ones, so bad ones get accepted, and the firm drifts into riskier businesses over time. The remedy is the **pure play** approach: take the beta or WACC of a listed firm operating solely in the target activity, adjust for capital-structure differences, and use that.

**G7.** Intrinsic value is what the option is worth **if exercised immediately** — `max(S − X, 0)` for a call, `max(X − S, 0)` for a put. If the premium fell below that, anyone could buy the option, exercise it at once and trade the underlying for a **riskless profit** with essentially no capital at risk. The arbitrage trade itself corrects the mispricing: buying the option pushes its premium up, while the offsetting trade in the underlying moves the share price the other way, so the gap closes. Intrinsic value is therefore the option's **lower bound**, and the excess of premium over it — the **time value** — is the discounted, probability-weighted value of ending further in the money before expiry.
</details>
