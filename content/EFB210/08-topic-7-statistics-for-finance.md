# TOPIC 7 — Writing for Finance and Basic Statistics of Finance

Lecture 7. Ross et al. (2021, 8th ed.) Ch 12 §12.1–12.3.

Everything up to here assumed **certainty**. Topic 7 drops that assumption and builds the statistical vocabulary — returns, means, variances, covariances, correlations — that Topics 8 and 9 use to price risk. The lecture is paired with a short writing component, because the 25% assignment is a written report.

---

## 7.1 Writing for finance

Tutorial 7A is a writing exercise: two questions where you are given a poor draft, a marked-up version, and a final version. The recurring corrections are worth listing because they are the assignment's marking criteria in miniature.

| What the marker flagged | What to do instead |
|---|---|
| Colloquialisms ("figure out") | Formal register |
| "We" and "I" | Passive or impersonal — *the calculations performed* are the subject |
| Formula dropped in with no explanation | State what each symbol means and **where the formula's output is dated** |
| Assumptions unstated | List them: rate, frequency, start and end, taxes and fees |
| Abbreviations used before definition | Write "present value (PV)" the first time |
| Spelling and grammar | Proof it |

**Tutorial 7 Q1's final answer is the template.** Setting a retirement savings target of $1,000,000 at age 65 starting at 35:

> Assumptions: savings earn a constant 5.00% p.a.; savings are annual, starting today and finishing on the 65th birthday (**31 saving events**); no taxes or fees.

```
FV = C[(1 + i)ⁿ − 1]/i        where FV is dated at the LAST saving event

C  = FV / {[(1 + i)ⁿ − 1]/i}
   = 1,000,000 / {[(1.05)³¹ − 1]/0.05}
   = 1,000,000 / 70.760790
   = $14,132.12
```

The written answer then closes by naming the limitation: the calculation assumes a constant rate, a constant amount and a constant frequency; if any of those fail, a different technique is needed.

**Tutorial 7 Q2's final answer** is the deferred-annuity explanation, and it is the clearest statement of the timing rule in the whole unit:

> The present value of annuity formula values an annuity one period before the first cash flow. When used to value a deferred annuity — which by definition has its first cash flow in more than one period's time — the value reported is *not* a present value at zero. It is a present value at a point in time in advance of zero. For example, if the first cash flow of an annual annuity is in 3 years' time, the formula reports a value at year 2. If the present value at zero is required, additional discounting is performed.

Note that the model answer uses **no formula at all**. "Explain" means explain.

---

## 7.2 Prices versus returns

Future earnings are uncertain for most investments, so most investments are risky. We cannot know a future price, but we can form a view of the **likelihood of particular outcomes** from past outcomes — provided we can find a repetitive pattern in the probability distributions.

**Can we expect past prices to be realised again?** **No.** In the long run share prices are expected to grow — to move into higher price regions. This is a **random walk plus drift**.

**What about returns (percentage price changes)?** Share price returns appear to **behave in the same manner through time**. The outcomes are still random, but the distribution is constant — the same mean and variance.

| | Prices | Returns |
|---|---|---|
| Specific outcome | Unknown | Unknown |
| Distribution **across securities** | Shape, central moment and variance **vary** | Shape generally **the same**, with minor variations |
| Distribution **across time** | **Vary** (random walk) | **Can assume the same**, with sample variation |

**The consequence:** we model **returns**, not prices. This is convenient rather than a restriction — from returns you can always recover the price level.

Returns can be approximated by the **normal distribution**, which is fully characterised by just **two parameters: mean and variance**. So if returns display constant behaviour through time, past return data gives you everything you need to describe the distribution — and lets you make statements like *"there is a 5% probability of a loss of 7% or more in the next month."*

---

## 7.3 Calculating returns

```
        Pᵢ,ₜ − Pᵢ,ₜ₋₁ + Dᵢ,ₜ
Rᵢ,ₜ =  ─────────────────────
              Pᵢ,ₜ₋₁
```

The same formula applies at any frequency — daily, weekly, monthly, annual.

**Lecture 7's CBA data:**

| End of month | Pₜ | Dₜ | Rₜ |
|---|---|---|---|
| Sept 13 | 71.21 | | |
| Oct 13 | 76.08 | | `(76.08 − 71.21)/71.21` = 0.0684 |
| Nov 13 | 77.82 | | 0.0229 |
| Dec 13 | 77.80 | | −0.0003 |
| Jan 14 | 74.23 | | −0.0459 |
| Feb 14 | 74.66 | 1.83 | `(74.66 − 74.23 + 1.83)/74.23` = 0.0304 |

> **The dividend belongs in the period it is received, on top of the price change.** February's price rose only $0.43 — a 0.58% capital gain — but the $1.83 dividend lifted the total return to 3.04%. Leaving dividends out of a return series systematically understates performance, and it is why the **ASX200 index return is not a total return**: the lecture notes explicitly that the ASX200 "does not include dividends."

### Worked example — Tutorial 7 Q3

Buy BHP at $30.00 at the start of August. End of August: $32.00. End of September: $33.00 plus a $1.00 dividend.

```
R_Aug  = (32.00 − 30.00 + 0)/30.00    = 0.0667  = 6.67%
R_Sept = (33.00 − 32.00 + 1.00)/32.00 = 0.0625  = 6.25%
```

September's *price* rose only $1 against August's $2, yet the returns are nearly the same — because the dividend contributes and the base price is higher.

---

## 7.4 Mean and variance

```
                 1
E[Rᵢ]  =  Mean = ─  Σ Rᵢ,ₜ
                 T

                     1
VAR(Rᵢ)  =  ───────  Σ (Rᵢ,ₜ − E[Rᵢ])²
             T − 1

STD(Rᵢ)  =  √VAR(Rᵢ)
```

> **The divisor is `T − 1`, not `T`.** The formula sheet says `T − 1` and every solution in the unit uses it. This is the **sample** variance. In Excel that is `VAR.S` and `STDEV.S`, not `VAR.P` / `STDEV.P`. With four observations the difference is 33% — enough to move an MCQ answer into a different option.

### Worked example — Tutorial 7 Q4

A share returned 4.00%, 4.50%, −3.00% and 1.00% over four months.

```
(a) E[R] = (0.04 + 0.045 − 0.03 + 0.01)/4 = 0.065/4 = 0.01625 = 1.625%

(b) Deviations:  0.02375,  0.02875,  −0.04625,  −0.00625
    Squares:     0.00056406,  0.00082656,  0.00213906,  0.00003906
    Sum          = 0.00356875
    VAR = 0.00356875/(4 − 1) = 0.00118958

(c) STD = √0.00118958 = 0.03449 = 3.449%
```

Sanity check: the mean monthly return is 1.6% and the monthly standard deviation is 3.4% — over twice the mean. That is normal for equities and is the reason risk gets its own topic.

### Reading a normal distribution — Lecture 7's CBA numbers

The lecture states: with a mean of 0.0151 and a standard deviation such that mean − 2 STD = −0.0842,

> "There is a 2.5% probability of experiencing a loss of 8.42% or more in the next month."

The reasoning: by the empirical rule, about **5% of observations lie two standard deviations or more from the mean**. The normal distribution is **symmetric**, so half of that 5% — **2.5%** — sits in the left tail below `mean − 2 STD`.

> **5% is the two-tailed number; 2.5% is the one-tailed number.** A question asking "what is the probability of a loss of X% or more" wants the **one-tailed** 2.5%. A question asking "what is the probability of a move of X% or more in either direction" wants 5%. Halve it, or do not, depending on the wording.

---

## 7.5 Investor preferences

An investor's attitude to risk may be:

| Attitude | Effect of risk on utility |
|---|---|
| **Risk averse** | Risk **decreases** utility |
| **Risk neutral** | Risk **does not affect** utility |
| **Risk seeking** | Risk **increases** utility |

**In finance we generally assume investors are risk averse**, which means:

- For a given level of **return**, they prefer the investment with the **lowest risk**.
- For a given level of **risk**, they prefer the investment with the **greatest return**.
- To bear additional risk they require additional return, and **how much** depends on their degree of risk aversion.

The lecture's illustration: a 20-year-old and a 65-year-old can both be risk averse, but you would expect the 65-year-old to have **higher aversion** — they are retiring or close to it, and their superannuation wealth is much larger.

### The three comparisons — Tutorial 7 Q8

| Security | Mean | Standard deviation |
|---|---|---|
| A | 0.10 | 0.10 |
| B | 0.10 | 0.20 |
| C | 0.20 | 0.20 |

- **A is preferred to B** — same return, **less risk**.
- **C is preferred to B** — same risk, **more return**.
- **A versus C is indeterminate** — C has more risk (0.2 > 0.1) *and* more return (0.2 > 0.1).

**What extra information is needed?** The investor's **degree of risk aversion**. A highly risk-averse investor prefers A, because C's extra return does not adequately compensate for its extra risk. A less risk-averse investor prefers C.

> **This is why Tutorial 7 MCQ 13 and 14 both answer "(e) none of the above".** Every option in both questions asserts a preference that either contradicts dominance (B over A, B over C) or claims a determinate answer for the A-versus-C comparison, which cannot be made without knowing risk aversion. When a question offers "C is preferred to A because it has a greater return", the correct response is *"and also greater risk — you cannot tell."*

---

## 7.6 Covariance and correlation

When dealing with **two** random variables we care about each one's mean and variance, plus whether they share a relationship.

```
                     1
COV(Rᵢ, Rⱼ)  =  ───────  Σ (Rᵢ,ₜ − E[Rᵢ]) (Rⱼ,ₜ − E[Rⱼ])
                 T − 1

                       COV(Rᵢ, Rⱼ)
CORREL(Rᵢ, Rⱼ)  =  ─────────────────
                    STD(Rᵢ) STD(Rⱼ)
```

**Interpretation:**

- **Covariance** tells you the **direction** of the relationship (its sign) but **not the strength**. Its magnitude depends on the units of the two series.
- **Correlation** is the **standardised** covariance and ranges from **+1 to −1**. This is the one you interpret for strength.

Two useful results (Tutorial 7 Q7 — the algebra is not assessed, but the results are):

```
COV(Rᵢ, Rᵢ) = VAR(Rᵢ)     — the covariance of a variable with ITSELF is its variance
COV(Rᵢ, k)  = 0           — the covariance of a variable with a CONSTANT is zero
```

The second follows because a constant never deviates from its own mean, so `(k − E[k]) = 0` in every term. That result is why the risk-free asset has zero covariance with everything, and therefore zero beta.

### Worked example — Tutorial 7 Q5

| | Stock A | Stock B |
|---|---|---|
| Jan | 0.0500 | 0.0600 |
| Feb | 0.0200 | 0.0200 |
| Mar | −0.0300 | −0.0500 |
| Apr | −0.0100 | 0.0100 |
| **Average** | 0.0075 | 0.0100 |
| **Std deviation** | 0.0350 | 0.0455 |

```
COV = (1/3)[(0.05 − 0.0075)(0.06 − 0.01)
           + (0.02 − 0.0075)(0.02 − 0.01)
           + (−0.03 − 0.0075)(−0.05 − 0.01)
           + (−0.01 − 0.0075)(0.01 − 0.01)]

    = (1/3)[(0.0425)(0.05) + (0.0125)(0.01) + (−0.0375)(−0.06) + (−0.0175)(0)]
    = (1/3)[0.002125 + 0.000125 + 0.00225 + 0]
    = (1/3)(0.0045)
    = 0.0015

CORREL = 0.0015 / (0.0350 × 0.0455) = 0.9419
```

A very strong positive relationship.

> **The published 0.9419 uses the *rounded* standard deviations printed in the table. The exact value is 0.9427.** Stock B's true standard deviation is 0.04546, not 0.0455. The solution itself warns that "small rounding errors can easily creep into your statistical calculations." **Carry full precision through and round only the final answer** — and if an MCQ's options are separated by less than a percentage point, that is your cue that they expect the unrounded route.

> **Note the fourth term is exactly zero, and it still counts.** April's Stock B return equals its mean, so its deviation is nil and the product vanishes — but it is still one of the four observations, so the divisor stays at `T − 1 = 3`. Dropping it to 2 gives a covariance of 0.00225 and a correlation of 1.41, which is impossible. If your correlation exceeds 1, you have miscounted `T`.

### Worked example — Tutorial 7 Q6 — building a return series from prices

| | Dividend | Share price | Market index |
|---|---|---|---|
| Jan | | 12.56 | 2117 |
| Feb | | 12.80 | 2148 |
| Mar | | 12.75 | 2167 |
| Apr | 0.12 | 12.82 | 2205 |

```
Share returns:
  Feb: (12.80 − 12.56)/12.56            =  0.0191
  Mar: (12.75 − 12.80)/12.80            = −0.0039
  Apr: (12.82 − 12.75 + 0.12)/12.75     =  0.0149

Index returns:
  Feb: (2148 − 2117)/2117               =  0.0146
  Mar: (2167 − 2148)/2148               =  0.0088
  Apr: (2205 − 2167)/2167               =  0.0175
```

| | Share | Index |
|---|---|---|
| Mean | 0.0100 | 0.0137 |
| Variance | 0.000150 | 0.000020 |
| Std deviation | 0.0123 | 0.0044 |

```
COV(share, index)     = 0.0000475
CORREL(share, index)  = 0.0000475 / (0.012255 × 0.004425) = 0.8750
```

> **Recompute the correlation from unrounded inputs.** Using the four-decimal figures in the table above — `0.000047/(0.0123 × 0.0044)` — gives 0.8684, not 0.8750. The gap comes entirely from rounding the standard deviations (0.012255 and 0.004425) to four decimals. On three observations the rounding error is amplified enormously. Keep the full-precision values in your calculator's memory.

**Four price observations give three returns.** So `T = 3` and the variance divisor is 2.

> **The index has no dividend column, and that is deliberate.** A share index measures price performance only. Comparing a *total* return series for the share against a *price* return series for the market builds a small upward bias into the share's mean — real, and worth a sentence in a written answer.

### Worked example — Tutorial 7 MCQ 9–12

Eleven monthly observations of a share (with dividends of $0.03 and $0.02 in two months) and an index, giving ten returns.

| Statistic | Share | Index |
|---|---|---|
| **Mean** | 0.01745 | 0.01187 |
| **Variance** | 0.00129 | 0.00203 |
| Standard deviation | 0.03589 | 0.04501 |
| **Covariance** | 0.00078 | |
| **Correlation** | 0.48385 | |

Answers: Q9 **(d)**, Q10 **(b)**, Q11 **(b)**, Q12 **(c)**.

> **Look at Q11 and Q12 side by side.** Covariance is 0.00078 and correlation is 0.48385 — a factor of 620 apart, describing the same relationship. The MCQ deliberately lists 0.48385 as an option under Q11 (covariance) and 0.00134 as an option under Q12 (correlation). Covariance is in **squared return units** and is essentially uninterpretable; correlation is unit-free and bounded by ±1. If an answer to a correlation question falls outside [−1, +1], it is not a correlation.

---

## 7.7 What the statistics are for

Tying the topic to what follows:

| Statistic | Where it goes next |
|---|---|
| `E[Rᵢ]` | Portfolio expected return (Topic 8), the `g` in the dividend growth model (Topic 9) |
| `VAR(Rᵢ)`, `STD(Rᵢ)` | Portfolio variance and the efficient frontier (Topic 8) |
| `COV(Rᵢ, Rⱼ)` | The cross term in portfolio variance — the source of diversification benefit (Topic 8) |
| `COV(Rᵢ, Rm)` and `VAR(Rm)` | **Beta**, and therefore CAPM and the discount rate (Topics 8–9) |
| `CORREL(Rᵢ, Rⱼ)` | An alternative route to portfolio variance, and the intuition for diversification |

---

## Summary

- **Prices** follow a random walk with drift; their distributions vary across securities and time. **Returns** have a broadly stable distribution, so we model returns.
- Returns are approximately **normal**, and a normal distribution is fully described by two parameters: **mean and variance**.
- `Rᵢ,ₜ = (Pₜ − Pₜ₋₁ + Dₜ)/Pₜ₋₁`. Include the dividend in the period received.
- `E[R] = (1/T) Σ R`; `VAR(R) = [1/(T − 1)] Σ (R − E[R])²`; `STD = √VAR`. **Sample divisor `T − 1`.**
- About 5% of a normal distribution lies two standard deviations or more from the mean, **2.5% in each tail**.
- Investors are assumed **risk averse**: more return for given risk, less risk for given return. Where one asset has both more risk and more return, you need the investor's degree of risk aversion to decide.
- `COV(Rᵢ,Rⱼ) = [1/(T − 1)] Σ (Rᵢ − E[Rᵢ])(Rⱼ − E[Rⱼ])`. Sign only — no strength.
- `CORREL = COV / (STDᵢ · STDⱼ)`, bounded by **±1**. This is the measure of strength.
- `COV(Rᵢ, Rᵢ) = VAR(Rᵢ)` and `COV(Rᵢ, constant) = 0`.
- **`n` prices give `n − 1` returns.** Count them before you set `T`.

<details><summary>Checkpoint — six questions</summary>

1. A share is $18.40 at the end of March, $19.10 at the end of April with a $0.35 dividend, and $18.75 at the end of May. Compute the two monthly returns.
2. For the returns 2.0%, −1.5%, 3.5%, 0.5% and −0.5%, find the mean, variance and standard deviation.
3. Why is the divisor `T − 1` rather than `T`?
4. Returns on X and Y over four periods are X: 0.03, −0.01, 0.05, 0.01 and Y: 0.02, 0.00, 0.04, 0.02. Find the covariance and correlation.
5. Asset P has a mean of 8% and a standard deviation of 12%. Asset Q has a mean of 8% and a standard deviation of 15%. Which does a risk-averse investor prefer, and why?
6. Monthly returns are normally distributed with a mean of 1.2% and a standard deviation of 4.0%. What loss level has roughly a 2.5% chance of being exceeded in a month?

---

**Answers**

1. `R_Apr = (19.10 − 18.40 + 0.35)/18.40 = 1.05/18.40 = **5.71%**`. `R_May = (18.75 − 19.10)/19.10 = −0.35/19.10 = **−1.83%**`.

2. `Mean = (0.02 − 0.015 + 0.035 + 0.005 − 0.005)/5 = 0.04/5 = **0.008 = 0.80%**`. Deviations: 0.012, −0.023, 0.027, −0.003, −0.013. Squares sum to `0.000144 + 0.000529 + 0.000729 + 0.000009 + 0.000169 = 0.00158`. `VAR = 0.00158/4 = **0.000395**`. `STD = **0.019875 = 1.99%**`.

3. Because these are **sample** statistics estimated from a sample mean, not the true population mean. Dividing by `T − 1` corrects the downward bias that using the sample mean introduces (one degree of freedom is used up estimating it).

4. `E[X] = 0.02`, `E[Y] = 0.02`. Deviations X: 0.01, −0.03, 0.03, −0.01; Y: 0.00, −0.02, 0.02, 0.00. Products: 0, 0.0006, 0.0006, 0. `COV = 0.0012/3 = **0.0004**`. `VAR(X) = (0.0001 + 0.0009 + 0.0009 + 0.0001)/3 = 0.000667`, `STD(X) = 0.02582`. `VAR(Y) = (0 + 0.0004 + 0.0004 + 0)/3 = 0.000267`, `STD(Y) = 0.01633`. `CORREL = 0.0004/(0.02582 × 0.01633) = **0.9487**`.

5. **P.** Same expected return, lower standard deviation. A risk-averse investor prefers less risk for a given return, so P **dominates** Q and no information about the degree of risk aversion is needed.

6. `Mean − 2 STD = 0.012 − 2(0.040) = −0.068`. There is roughly a **2.5% chance of a loss of 6.8% or more** in a month.
</details>
