# Revision Pack 2 — Topic 2 (Portfolio Management) + Tutorial 2

*(Reilly & Brown, Chapter 6. Built from the Topic 2 lecture deck, the Covariance Matrix and Potential Investment Strategies handouts, the seven Topic 2 workbooks, the Tutorial 2 question sheet, and the verified site notes in docs 02, 03, 07 and 11. Every number below was recomputed in Python.)*

## How to use this pack

Read Part A once, slowly, doing every worked example on paper or in a blank Excel sheet before you look at the answer. Then do Part B (Tutorial 2) cold and mark yourself against the solutions. Part D is the only thing you need to re-read the night before 2 September — it is the whole topic on one phone screen.

---

## Part A — The concepts, taught from scratch

### A1. Risk aversion and the Markowitz assumptions

**What it is.** A risk-averse investor, offered two assets with the **same expected return**, takes the one with **less risk**. That single sentence is the foundation of everything in this topic. The lecture's evidence: people buy insurance (life, car, health, disability), and bond yields rise as credit quality falls from AAA to AA to A — investors demand to be paid for taking risk.

**Why you care.** If investors did not mind risk, portfolio theory would reduce to "buy the highest-return thing". Because they do mind, the question becomes *how much return per unit of risk* — and that is what the rest of the topic measures.

**Two components of risk** (lecture slide 6):

| Component | Meaning | Lecture example |
|---|---|---|
| Uncertainty | Future outcome is not known | Google stock's future value is uncertain (risky); a six-month certificate of deposit has a certain value (not risky) |
| Probability | Risk is assessed as the chance of an adverse outcome | "There is a 40% chance you will receive a return less than 8%" |

**Markowitz (1952, 1959)** did four things: quantified risk; derived the expected return and an expected risk measure for a *portfolio*; showed that the **variance** of returns is a meaningful measure of portfolio risk; and derived the portfolio-variance formula, which shows how to diversify effectively.

**The five assumptions about investors — learn them as a list:**

1. They see investments as **probability distributions** of expected returns over a holding period.
2. They **maximise one-period expected utility**, with **diminishing marginal utility of wealth**.
3. They estimate risk from the **variability of expected returns**.
4. They base decisions **solely on expected return and risk**.
5. They prefer **higher return for a given risk** and **lower risk for a given return**.

From those five, a portfolio is **efficient** if no other portfolio offers a higher expected return at the same (or lower) risk, or lower risk at the same (or higher) return.

**Alternative risk measures** the lecture names: variance/standard deviation, range of returns, returns below expectations, and **semi-variance** (only deviations *below* the mean count). Standard deviation wins because it is in the same units as returns (%), it is widely recognised as a measure of *total* risk, and it is what the asset pricing models use.

> If a variance-looking formula only sums terms where `Rᵢ < E(R)` or `Rᵢ < R_benchmark`, it is **semi-variance**, not variance. The lecture's Checkpoint 1 tests exactly this.

---

### A2. Expected return — single asset and portfolio

**What it is.** The probability-weighted average of the possible returns. For a portfolio, the value-weighted average of the components' expected returns.

**Why you care.** Portfolio return is the *easy* half of Markowitz: it really is just a weighted average. Portfolio risk is not (A5). Keep that asymmetry in your head the whole way through.

```
Single asset:   E(R) = Σ Pⱼ × Rⱼ                   (probabilities sum to 1)

Portfolio:      E(R_port) = Σ wᵢ × E(Rᵢ)           (weights sum to 1)
```

**Worked example (lecture slide 12 / `Topic 2 Returns and Risk_solved.xlsx`).**

| Probability | Return | P × R |
|---|---|---|
| 0.35 | 8% | 0.0280 |
| 0.30 | 10% | 0.0300 |
| 0.20 | 12% | 0.0240 |
| 0.15 | 14% | 0.0210 |
| **1.00** | | **0.1030** |

```
E(R) = 0.35(0.08) + 0.30(0.10) + 0.20(0.12) + 0.15(0.14) = 0.103 = 10.3%
```

**Worked example — portfolio (lecture slide 27).** Two assets, 50/50, with E(R₁) = 10% and E(R₂) = 20%:

```
E(R_port) = 0.50(0.10) + 0.50(0.20) = 0.15 = 15%
```

**Excel translation.** `=SUMPRODUCT(probabilities, returns)`. The workbook also shows the matrix version `=MMULT(TRANSPOSE(P), R)` — identical answer, and this is what the empty placeholder in the Tutorial 2 template is asking for.

> **Check the probabilities sum to 1.00 before you do anything.** If they do not, you have misread the table. And never take the plain `AVERAGE` of the returns — that assumes every outcome is equally likely. In Tutorial 2 Problem 1 that mistake gives 10.00% instead of the correct 11.00%.

---

### A3. Variance and standard deviation of a single asset

**What it is.** Variance is the probability-weighted average *squared* distance of each possible return from the expected return. Standard deviation is its square root, which puts it back into % units.

```
σ² = Σ Pᵢ [Rᵢ − E(R)]²
σ  = √σ²
```

**Worked example (lecture slide 15).** Same four outcomes, E(R) = 10.3%:

| Rᵢ | Rᵢ − E(R) | [Rᵢ − E(R)]² | Pᵢ | × Pᵢ |
|---|---|---|---|---|
| 8% | −2.3% | 0.000529 | 0.35 | 0.000185 |
| 10% | −0.3% | 0.000009 | 0.30 | 0.000003 |
| 12% | +1.7% | 0.000289 | 0.20 | 0.000058 |
| 14% | +3.7% | 0.001369 | 0.15 | 0.000205 |
| | | | | **0.000451** |

```
σ² = 0.000451
σ  = √0.000451 = 0.021237 = 2.1237%
```

This matches the lecture's figure exactly.

**From a series of past returns** (no probabilities — every observation is equally weighted) you divide the sum of squared deviations by `n` (population) or `n − 1` (sample):

```
Population:  σ² = Σ [Rₜ − R̄]² / n          Excel VAR.P,  STDEV.P
Sample:      σ² = Σ [Rₜ − R̄]² / (n − 1)    Excel VAR.S,  STDEV.S
```

> **The divisor changes the answer, and EFB335's own files disagree.** The lecture's 2021 example and `Returns and Risk_solved.xlsx` use `n − 1`. The `Covariance Matrix` workbook and Excel's Data Analysis → Covariance tool use `n`. On six observations the gap is large (Tutorial 2 Problem 3: 6.55% vs 7.17%). Always state which you used.

---

### A4. Covariance — direction of co-movement

**What it is.** A measure of how two return series move *together relative to their own means*. Positive: when one is above its mean, the other tends to be above its mean too. Negative: they tend to be on opposite sides. Zero: no linear relationship.

**Why you care.** Covariance is the ingredient that makes portfolio risk different from a weighted average. Every diversification result in this topic comes from the sign and size of the covariance terms.

```
Definition:   Cov(i,j) = E{ [Rᵢ − E(Rᵢ)] × [Rⱼ − E(Rⱼ)] }

From a series of n observations:
  Sample:      Cov(i,j) = Σ [Rᵢ,ₜ − R̄ᵢ][Rⱼ,ₜ − R̄ⱼ] / (n − 1)
  Population:  Cov(i,j) = Σ [Rᵢ,ₜ − R̄ᵢ][Rⱼ,ₜ − R̄ⱼ] / n
```

**The procedure, step by step — this is what you do in the exam:**

1. Compute the mean of each series.
2. For every period, subtract the mean from each series (two deviation columns). **Each deviation column must sum to zero** — free error check.
3. Multiply the two deviations for each period (one cross-product column).
4. Sum the cross-products.
5. Divide by `n − 1` (sample) or `n` (population).

**Worked example — the lecture's own data (Exhibits 6.4–6.7, 2021 monthly returns, S&P 500 vs Barclays US Aggregate Bond index).**

| Month | Stocks | Bonds |
|---|---|---|
| Jan | −1.02% | −0.72% |
| Feb | 2.76% | −1.44% |
| Mar | 4.38% | −1.25% |
| Apr | 5.34% | 0.79% |
| May | 0.70% | 0.33% |
| Jun | 2.33% | 0.70% |
| Jul | 2.38% | 1.12% |
| Aug | 3.04% | −0.19% |
| Sep | −4.65% | −0.87% |
| Oct | 7.01% | −0.03% |
| Nov | −0.70% | 0.30% |
| Dec | 4.47% | −0.26% |

Step 1 — means:

```
R̄_stocks = 26.04 / 12 = 2.1700%   (= 0.021700)
R̄_bonds  = −1.52 / 12 = −0.1267%  (= −0.001267)   — the slide rounds this to −0.13
```

Step 2–3 — deviations and cross-products. Take September as the illustration:

```
Stocks: −4.65 − 2.17   = −6.82 pp   (= −0.0682)
Bonds:  −0.87 − (−0.13) = −0.74 pp  (= −0.0074)
Cross-product: (−0.0682)(−0.0074) = +0.000507     ← two negatives give a positive
```

Step 4 — sum of all twelve cross-products:

```
Σ = 0.0005215
```

Step 5 — divide:

```
Sample (n − 1 = 11):   Cov = 0.0005215 / 11 = 0.00004741
Population (n = 12):   Cov = 0.0005215 / 12 = 0.00004346
```

The lecture uses 11 and states why: the twelve months are a **sample** of the population of index values, and `n − 1` corrects for the degrees of freedom lost by estimating the mean. Result: **positive** covariance — a positive relationship in 2021.

**Excel translation.** `=COVARIANCE.S(range1, range2)` (÷ n−1) or `=COVARIANCE.P(...)` (÷ n). Or build the deviation columns yourself and `=SUM(products)/(COUNT(products)-1)` — the solved workbook shows both methods agreeing.

> **Covariance is measured against each series' own mean, not against zero.** Bonds *lost* money on average in 2021 and the covariance is still positive, because the two series were above or below *their own averages* in the same months. "Positive covariance" does not mean "both went up".

---

### A5. Correlation — strength of co-movement

**What it is.** Covariance divided by the product of the two standard deviations. Dividing strips out the units and the volatility, leaving a pure number between −1 and +1.

**Why you care.** Covariance tells you the *direction* of a relationship but its size is meaningless on its own (0.00004741 — is that strong or weak?). Correlation tells you the *strength*. And it is correlation that decides how much diversification you get.

```
r(i,j) = Cov(i,j) / (σᵢ × σⱼ)

Rearranged — you will use this constantly:
Cov(i,j) = r(i,j) × σᵢ × σⱼ
```

| r | Meaning | Diversification benefit |
|---|---|---|
| +1.0 | Perfect positive — move together, completely linearly | **None** |
| between 0 and +1 | Positive, imperfect | Some — more as r falls |
| 0 | No linear relationship | Substantial |
| between 0 and −1 | Negative | Large |
| −1.0 | Perfect negative — completely linear, opposite directions | **Maximum** — can reach zero risk at the right weights |

**Worked example — finish the 2021 case (Exhibit 6.9).** Sample standard deviations of the same twelve returns:

```
σ_stocks = √(0.01119 / 11) = 0.031896 = 3.1896%
σ_bonds  = √(0.00074 / 11) = 0.008197 = 0.8197%

r = 0.00004741 / (0.031896 × 0.008197)
  = 0.00004741 / 0.00026145
  = 0.1813
```

**Where the lecture's arithmetic differs from this.** Slide 22 writes `r = 0.47 / (3.19 × 0.82) = 0.181`, working in percentage units and rounding every input to two decimals. Those rounded inputs actually give `0.47 / 2.6158 = 0.1797`, not 0.181. The unrounded calculation (and Excel's `CORREL`) gives **0.1813**, which is what the slide reports. The slide's *answer* is right; its displayed inputs are too coarse to reproduce it. Use unrounded inputs and you will land on 0.181.

Interpretation: a **weak positive** correlation. Because r < 1, combining the two gives a real diversification benefit.

**The scatterplot (Exhibit 6.8).** Plot stock returns against bond returns and fit a line. Slope = sensitivity of one to the other; intercept = expected value of one when the other is zero; **R² = r² = 0.181² = 0.033** is the goodness-of-fit, meaning only about 3% of bond-return variation is explained by stock returns.

**Same pair, longer window (`Topic 2 US Equities vs Bonds` workbook, 5,783 daily returns, Apr 2002 – Jul 2024): r = −0.2496.** The sign flips. Correlation is an *estimate* from a chosen window and frequency, not a fixed property of two assets — this is the estimation-risk problem (A10) in one number.

**Excel translation.** `=CORREL(range1, range2)`. It gives the same answer whether you think in sample or population terms, *because* the divisor cancels.

> **Mixing divisors produces a number that is not a correlation.** `COVARIANCE.P` over `STDEV.S × STDEV.S` on the 2021 data gives 0.1662 — wrong. `COVARIANCE.S` over `STDEV.S × STDEV.S` gives 0.1813, and so does `COVARIANCE.P` over `STDEV.P × STDEV.P`. The `n` or `n − 1` only cancels when it appears in all three inputs.

> **R² cannot be negative; r can.** r = −0.9 and r = +0.9 both give R² = 0.81. If a question gives you an R² and asks for the correlation, you need the sign from somewhere else (the slope of the regression line).

---

### A6. Two-asset portfolio variance — derived term by term

**What it is.** The formula that turns two assets' risks and their covariance into the portfolio's risk. It is the single formula you must be able to write and use from memory.

**Why you care.** It is where the diversification benefit lives. The first two terms are the assets' own risks, scaled by weight squared. The third term is the covariance — and it can be small, zero or negative, pulling portfolio risk *below* the weighted average.

**Derivation (from `Topic 2 Covariance Matrix.docx`).** Start from the general definition — a double sum over every pair of assets, including each asset with itself:

```
σ²_port = Σᵢ Σⱼ wᵢ wⱼ Cov(rᵢ, rⱼ)       where Cov(rᵢ, rᵢ) = Var(rᵢ) = σᵢ²
```

For n = 2 the double sum has four terms:

```
σ²_p = w₁w₁Cov(r₁,r₁) + w₁w₂Cov(r₁,r₂) + w₂w₁Cov(r₂,r₁) + w₂w₂Cov(r₂,r₂)
```

`Cov(r₁,r₁)` is just `σ₁²`, and `Cov(r₁,r₂)` equals `Cov(r₂,r₁)`, so the two middle terms are identical and combine:

```
σ²_p = w₁²σ₁² + w₂²σ₂² + 2 w₁ w₂ Cov(1,2)
```

Substitute `Cov(1,2) = r₁₂ σ₁ σ₂`:

```
σ²_p = w₁²σ₁² + w₂²σ₂² + 2 w₁ w₂ r₁₂ σ₁ σ₂

σ_p  = √σ²_p
```

That is where the **2** comes from: the covariance is counted twice in the double sum because (1,2) and (2,1) are the same pair.

**Worked example (lecture slide 27, Reilly & Brown p.181).** Asset 1: E(R) = 10%, σ = 7% (σ² = 0.0049). Asset 2: E(R) = 20%, σ = 10% (σ² = 0.0100). Weights 50/50. Take r = +0.50:

```
Cov(1,2) = 0.50 × 0.07 × 0.10 = 0.0035

σ²_p = (0.5)²(0.0049) + (0.5)²(0.0100) + 2(0.5)(0.5)(0.0035)
     = 0.001225 + 0.002500 + 0.001750
     = 0.005475

σ_p  = √0.005475 = 0.0740 = 7.40%
```

And the expected return, unchanged by correlation: 15%.

**Excel translation.** Either type the three terms out, or with a 2×2 covariance matrix in cells and weights in a column: `=MMULT(MMULT(TRANSPOSE(w), Σ), w)` — see A9.

> **The weights are squared in the variance terms but not in the covariance term.** `w₁²σ₁²` and `2w₁w₂Cov` — forgetting to square a weight, or squaring the 2, is the most common arithmetic slip. And the formula gives **variance**; take the square root at the end for σ.

---

### A7. Why portfolio risk is NOT a weighted average — the effect of correlation

**What it is.** With r = +1 the portfolio standard deviation *is* the weighted average of the two SDs. With any r < +1 it is lower. With r = −1 it can be zero.

**Why you care.** This is the diversification benefit — the only free lunch in finance. You keep the weighted-average return and pay less than the weighted-average risk.

**Worked example — the lecture's five cases (Exhibit 6.12).** Same two assets, 50/50, so the first two terms never change; only the covariance term does:

```
σ²_p = 0.001225 + 0.002500 + 2(0.5)(0.5) × r × 0.07 × 0.10
     = 0.003725 + 0.0035 r
```

| Case | r | Cov = r σ₁σ₂ | σ²_p | **σ_p** | E(R_p) |
|---|---|---|---|---|---|
| a | +1.00 | +0.0070 | 0.007225 | **8.50%** | 15% |
| b | +0.50 | +0.0035 | 0.005475 | **7.40%** | 15% |
| c | 0.00 | 0 | 0.003725 | **6.10%** | 15% |
| d | −0.50 | −0.0035 | 0.001975 | **4.44%** | 15% |
| e | −1.00 | −0.0070 | 0.000225 | **1.50%** | 15% |

Reading it:

- **Case a** — `σ_p = 0.5(7%) + 0.5(10%) = 8.50%`, exactly the weighted average. No diversification benefit at all.
- **Cases b–e** — every one is below 8.50% at the same 15% return. Every one is also below Asset 2 (10%) and above Asset 1 (7%).
- **Case e** — r = −1 but σ_p is 1.50%, **not zero**, because the weights are equal and the SDs are not. The closed form at r = −1 is `|w₁σ₁ − w₂σ₂| = |3.5% − 5.0%| = 1.5%`.

The two closed forms worth memorising:

```
r = +1:   σ_p = w₁σ₁ + w₂σ₂           (weighted average — a perfect square)
r = −1:   σ_p = |w₁σ₁ − w₂σ₂|         (can be zero, only at the right weights)
```

**Worked example — constant correlation, changing weights (Exhibit 6.13).** Hold r = 0 and sweep the weights:

| Case | w₁ | w₂ | E(R_p) | σ_p |
|---|---|---|---|---|
| f | 0.00 | 1.00 | 20% | 10.00% (= Asset 2) |
| g | 0.20 | 0.80 | 18% | 8.12% |
| h | 0.40 | 0.60 | 16% | 6.62% |
| i | 0.50 | 0.50 | 15% | 6.10% (= case c) |
| j | 0.60 | 0.40 | 14% | 5.80% |
| k | 0.80 | 0.20 | 12% | 5.95% |
| l | 1.00 | 0.00 | 10% | 7.00% (= Asset 1) |

All seven recompute exactly as the slide shows them. Plotted with σ on the horizontal axis and E(R) on the vertical, the points trace a **curve bowing to the left**. Notice that between j and k the risk *turns around* — at some weight near 0.67 the portfolio is less risky than either asset on its own (A8). At r = +1 the same sweep would be a straight line between the two assets; at r = −1 it would bend all the way to the vertical axis.

**Worked example on real data (`Topic 2 Diversification Benefits` workbook, two ASX stocks, 157 monthly returns).** Annualised: stock A 7.983% return, 16.842% σ; stock B 14.977% return, 16.993% σ; r = 0.4767. At 50/50 the portfolio σ is **14.537%** against a 16.92% weighted average — 2.38 percentage points of risk removed for nothing. The minimum-risk mix is near 50/50 (w_A = 0.509) because the two SDs are almost equal.

> **"r = −1 means zero risk" is only true at one specific weight.** Case e above has r = −1 and σ_p = 1.5%. Say "*may* reduce risk to zero" and give the weight `w₁ = σ₂/(σ₁ + σ₂)` (A8).

---

### A8. Minimum-variance weights

**What it is.** The weight in Asset 1 that makes the two-asset portfolio variance as small as possible. Found by differentiating σ²_p with respect to w₁ and setting it to zero.

**Why you care.** It is the left-most point of the two-asset curve — the endpoint of the efficient frontier — and it is a standard short-calculation question.

```
General:      w₁* = (σ₂² − Cov₁₂) / (σ₁² + σ₂² − 2 Cov₁₂)          w₂* = 1 − w₁*

r = 0:        w₁* = σ₂² / (σ₁² + σ₂²)                               (Cov = 0)

r = −1:       w₁* = σ₂ / (σ₁ + σ₂)                                  gives σ_p = 0
```

**Worked example — r = 0 (the Exhibit 6.13 assets).**

```
w₁* = 0.0100 / (0.0049 + 0.0100) = 0.0100 / 0.0149 = 0.671

σ²_p = (0.671)²(0.0049) + (0.329)²(0.0100) = 0.003289
σ_p  = 5.73%        E(R_p) = 0.671(10%) + 0.329(20%) = 13.29%
```

5.73% is lower than *either* asset (7% and 10%). With r = 0, holding 67.1% of the *safer* asset and 32.9% of the riskier one is less risky than holding the safer asset alone.

**Worked example — r = −1, same assets.**

```
w₁* = 0.10 / (0.07 + 0.10) = 0.588      w₂* = 0.412

Check: σ_p = |0.588(0.07) − 0.412(0.10)| = |0.04118 − 0.04118| = 0
```

**Worked example — general formula with r = +0.50.**

```
Cov = 0.50 × 0.07 × 0.10 = 0.0035
w₁* = (0.0100 − 0.0035) / (0.0049 + 0.0100 − 0.0070) = 0.0065 / 0.0079 = 0.823
σ_p at w₁ = 0.823:  6.82%      (just under Asset 1's 7.00%)
```

**Excel translation.** Type the formula, or use **Solver**: set objective = portfolio variance cell, *Min*, by changing the weight cells, subject to weights summing to 1 (and ≥ 0 if short sales are banned). This is the tool the 3-asset workbook uses (A9) and it is a preview of Assessment 1.

> **The general formula can return a weight above 1 or below 0.** Tutorial 2 Q11 (σ₁ = 20%, σ₂ = 30%, r = 0.8) gives w₁* = 1.235 — 123.5% in Asset 1 financed by shorting Asset 2. That is a valid answer if short selling is allowed; if not, the long-only minimum is 100% in the less risky asset. Say which.

---

### A9. Three assets, the covariance matrix, and wᵀΣw

**What it is.** The same double sum, expanded for n = 3: three variance terms and three *doubled* covariance terms. For larger n you stop writing terms and use matrix multiplication.

**Why you care.** Assessment 1 hands you ~20 stocks. You cannot write out 210 terms; you build a covariance matrix and multiply.

```
σ²_p = w₁²σ₁² + w₂²σ₂² + w₃²σ₃²
       + 2w₁w₂Cov₁₂ + 2w₁w₃Cov₁₃ + 2w₂w₃Cov₂₃

σ_p  = √σ²_p
```

**In matrix form, for any n:**

```
σ²_p = wᵀ Σ w

w = column vector of weights (n × 1)
Σ = covariance matrix (n × n): variances on the diagonal,
    covariances off the diagonal, symmetric (Σᵢⱼ = Σⱼᵢ)
```

**Counting the terms.** For n assets there are `n` variances and `n(n − 1)/2` *unique* covariances — the lecture's "100 assets needs 4,950 correlation estimates":

| n | Variances | Unique covariances | Total inputs n(n+1)/2 |
|---|---|---|---|
| 2 | 2 | 1 | 3 |
| 3 | 3 | 3 | 6 |
| 10 | 10 | 45 | 55 |
| 20 | 20 | 190 | 210 |
| 100 | 100 | **4,950** | 5,050 |
| 187 | 187 | 17,391 | 17,578 |

**Worked example (`Topic 2 3 Assets_solve.xlsx` — BHP, Woolworths, CAR Group, 173 monthly returns).** Monthly sample covariance matrix, diagonal = variance:

```
            BHP          WOW          CAR
BHP    0.00531483   0.00078857   0.00098662
WOW    0.00078857   0.00236322   0.00128763
CAR    0.00098662   0.00128763   0.00567101
```

Weights 30% / 30% / 40%. Term by term:

```
w₁²σ₁²   = (0.3)²(0.00531483) = 0.00047833
w₂²σ₂²   = (0.3)²(0.00236322) = 0.00021269
w₃²σ₃²   = (0.4)²(0.00567101) = 0.00090736
2w₁w₂Cov = 2(0.3)(0.3)(0.00078857) = 0.00014194
2w₁w₃Cov = 2(0.3)(0.4)(0.00098662) = 0.00023679
2w₂w₃Cov = 2(0.3)(0.4)(0.00128763) = 0.00030903
                                      ----------
σ²_monthly                          = 0.00228615
```

`MMULT(MMULT(TRANSPOSE(w), Σ), w)` returns the identical 0.00228615. Annualise the variance by ×12, then root:

```
σ²_annual = 0.00228615 × 12 = 0.0274338
σ_annual  = √0.0274338 = 0.16563 = 16.56%
```

Weighted average of the three annual SDs (25.254%, 16.840%, 26.087%) is 23.06%, so diversification removed **6.50 percentage points** of risk. The three correlations (0.223, 0.180, 0.352) are all low, which is why the benefit is so large.

**Solver on the same data** (risk-free rate 1.35%) finds two frontier portfolios:

| Objective | BHP | WOW | CAR | Return | σ | Sharpe |
|---|---|---|---|---|---|---|
| Minimise σ | 22.81% | 62.81% | 14.38% | 11.158% | **14.897%** | 0.658 |
| Maximise Sharpe | 23.57% | 6.48% | 69.95% | 20.157% | 20.629% | **0.912** |

**Excel translation.**

- Build the matrix with `=COVARIANCE.S(col_i, col_j)` in every cell, **or** Data → Data Analysis → Covariance over the whole block.
- `=MMULT(MMULT(TRANSPOSE(weights), matrix), weights)` — one cell, entered as an array formula (Ctrl+Shift+Enter in older Excel).
- Solver: objective = σ cell, Max or Min, variable cells = weights, constraint `SUM(weights) = 1`.

> **Data Analysis → Covariance returns only the LOWER triangle and uses the POPULATION divisor.** The upper triangle is blank. `MMULT` reads blanks as zeros, so on the 3-asset data it returns σ²_monthly = 0.0019423 instead of 0.0022861 — an annual σ of 15.27% instead of 16.56%, silently understated. Mirror the triangle into a full square (`=B3` style references, or `=TRANSPOSE`) before you multiply. And because the tool divides by n, the diagonal will not match `VAR.S` — do not mix it with `STDEV.S` elsewhere in the same sheet.

> **Weight monthly returns first, then annualise once.** Weighted average of the three *annualised* returns = 15.580%; annualising the portfolio's *monthly* return series = 15.382%. Both appear in the workbook and both are "right" — annualising is non-linear, so the order matters. Returns are only a weighted average at a single common frequency.

---

### A10. Estimation issues and the single-index shortcut

**What it is.** Every Markowitz result depends on estimated inputs — expected returns, standard deviations and all those pairwise correlations. Errors in the inputs produce wrong "optimal" portfolios. The lecture's fix: if every stock is related to a market index through a beta, every pairwise correlation can be built from betas instead of estimated directly.

```
r(i,j) = βᵢ βⱼ σ²_market / (σᵢ σⱼ)
```

This cuts the inputs for 100 stocks from **4,950** correlations to **100** betas. It is the bridge into Topic 3.

> **The estimation problem is real, not theoretical.** The S&P 500 and US bonds had r = +0.181 on twelve 2021 monthly returns and r = −0.250 on 5,783 daily returns over 2002–2024. Feed an optimiser either one and it builds a different portfolio. When a question asks "what are the limitations of this analysis", the answer is: the inputs are estimates from one window at one frequency, and small input changes move the frontier a lot.

---

### A11. The efficient frontier

**What it is.** The set of portfolios offering the **maximum return for every level of risk**, or equivalently the **minimum risk for every level of return**. Plot every possible portfolio on a risk–return chart; the frontier is the upper-left edge of that cloud.

**Why you care.** Anything below or to the right of the frontier is *dominated* — some frontier portfolio beats it on return, risk or both. No risk-averse investor should hold a dominated portfolio.

**How to read it (Exhibit 6.14):**

- **Portfolio A dominates C** — equal return, substantially less risk.
- **Portfolio B dominates C** — equal risk, higher return.
- The frontier is **concave**: its slope falls as you move up and right. Each extra unit of risk buys less extra return — diminishing marginal return for risk.
- The frontier consists of **portfolios**, not single securities, except at its two ends: the lowest-risk asset and the highest-return asset.
- Everything above/left of the frontier is unattainable.

**Two named points on the frontier** (from the 3-asset example, A9):

| Point | What it is | BHP/WOW/CAR |
|---|---|---|
| **Minimum-variance portfolio** | Left-most tip — lowest risk attainable | 11.158% at σ 14.897% |
| **Maximum-Sharpe portfolio** | Highest `(E(R) − RFR)/σ` — the tangency with a line from the risk-free rate (Topic 3's CML) | 20.157% at σ 20.629% |

They are different portfolios. The minimum-variance one leans on the lowest-volatility stock (WOW 63%); the maximum-Sharpe one leans on CAR (70%) because its return more than pays for its risk.

> **Minimum variance is not "the best" portfolio.** A question asking for the lowest-risk portfolio wants the min-variance point; one asking for the best risk-adjusted portfolio wants max-Sharpe. Read which one is being asked. And a "modified" Sharpe of `E(R)/σ` with no risk-free rate (the Diversification Benefits workbook uses one) ranks portfolios differently from the true Sharpe — do not quote one as the other.

---

### A12. Diversification benefits and how many stocks

**What it is.** As you add assets with less-than-perfect correlation, portfolio risk falls — quickly at first, then more slowly — toward a floor that cannot be diversified away (market risk; Topic 3 calls this systematic risk).

**Why you care.** It tells you (a) diversification is cheap at the start and (b) there is a floor.

**The numbers already in this pack show the pattern:**

| Portfolio | σ_p | Weighted avg of SDs | Benefit |
|---|---|---|---|
| Exhibit 6.12 case b (2 assets, r = 0.5) | 7.40% | 8.50% | 1.10 pp |
| ASX pair, 50/50 (r = 0.48) | 14.54% | 16.92% | 2.38 pp |
| BHP/WOW/CAR 30/30/40 (r ≈ 0.2–0.35) | 16.56% | 23.06% | 6.50 pp |
| Tutorial 2 P7, S&P + Nikkei (r = −0.90) | 0.80% | 3.43% | 2.63 pp |

The benefit depends on **correlation**, not on the number of assets by itself: three loosely related ASX stocks bought 6.5 points of risk reduction; two near-identical US indexes (Tutorial 2, r = 0.96) bought 0.05. Reilly & Brown's textbook result is that most of the diversifiable risk is gone by around 12–18 randomly selected stocks and almost all of it by 30 — the lecture deck does not quote a specific count, so in an exam argue from the correlation logic rather than a magic number.

> **Adding a stock with r = +1 to what you already hold does nothing.** Diversification comes from *imperfect* correlation, not from the count. Ten stocks in the same sector diversify less than three across different economies.

---

### A13. Investor utility and indifference curves

**What it is.** A formula that converts a portfolio's return and risk into one number — how happy a particular investor is with it — using a risk-aversion coefficient `A` that differs from person to person.

**Why you care.** The frontier says what is *attainable*. Utility says what is *desirable* for *this* investor. The optimal portfolio is where the two meet.

```
U = E(r) − 0.5 × A × σ²

U     = utility (in return units — a certainty equivalent)
E(r)  = expected portfolio return
A     = risk-aversion coefficient: ≈ 7 conservative, ≈ 1 aggressive, 0 risk-neutral
σ²    = VARIANCE of portfolio return (σ squared)
```

**Worked example.** Portfolio E(r) = 15%, σ = 20% so σ² = 0.04:

```
Conservative, A = 7:   U = 0.15 − 0.5(7)(0.04) = 0.15 − 0.14 = 0.01 = 1%
Aggressive,   A = 1:   U = 0.15 − 0.5(1)(0.04) = 0.15 − 0.02 = 0.13 = 13%
```

The same portfolio is worth a guaranteed 1% to one investor and a guaranteed 13% to the other. Because U is in return units, you can compare it straight against the risk-free rate: a risk-free asset has σ² = 0, so its U is just its return. If a risky portfolio's U is below the risk-free rate, that investor should hold cash.

**Indifference curves (`Topic 2 Utility Function-1.xlsx`).** Rearrange to make E(r) the subject:

```
E(r) = U + 0.5 × A × σ²
```

Every (σ, E(r)) pair on one curve gives the same U. The workbook sets A = 10, U = 0 and steps σ:

| σ | E(r) required |
|---|---|
| 0.00 | 0% |
| 0.10 | 5% |
| 0.20 | 20% |
| 0.30 | 45% |

The curve is a **parabola** (σ is squared): doubling risk from 10% to 20% *quadruples* the return demanded. Higher A means a steeper curve.

At σ = 20% and U = 5%, the return each investor needs: A = 1 → 7%; A = 4 → 13%; A = 7 → 19%; A = 10 → 25%.

**Optimal portfolio = tangency (Exhibit 6.17).** Draw the investor's family of indifference curves over the efficient frontier. The curve that *just touches* the frontier at one point is the highest utility attainable; that touching point is the optimal portfolio. Steep curves (high A, investor X) touch low-left on the frontier; flat curves (low A, investor Y) touch high-right. **Investor X is the more risk-averse.** A curve that *crosses* the frontier is not optimal — the investor can move to a higher curve.

**Worked example — who holds what (3-asset frontier from A9, RFR 1.35%):**

| Portfolio | E(r) | σ | U (A=1) | U (A=4) | U (A=7) | U (A=10) |
|---|---|---|---|---|---|---|
| Min-variance | 11.158% | 14.897% | 10.05% | 6.72% | 3.39% | 0.06% |
| Max-Sharpe | 20.157% | 20.629% | 18.03% | **11.65%** | **5.26%** | −1.12% |
| CAR alone | 24.064% | 26.087% | **20.66%** | 10.45% | 0.25% | −9.96% |
| Risk-free | 1.350% | 0 | 1.35% | 1.35% | 1.35% | **1.35%** |

A = 1 holds CAR alone; A = 4 and A = 7 hold max-Sharpe; A = 10 gets 0.06% from the min-variance portfolio, which is *below* the 1.35% risk-free rate, so should hold cash. The switch between max-Sharpe and min-variance happens at `A* = 2(r₂ − r₁)/(σ₂² − σ₁²) = 8.84`.

**Excel translation.** `=E_r − 0.5*A*sd^2`. Keep A in its own cell so you can vary it.

> **σ² in the utility function is variance. Square the standard deviation.** Using σ = 0.20 instead of σ² = 0.04 with A = 7 gives U = 0.15 − 0.70 = −0.55, an absurd number. If your utility comes out hugely negative, you forgot to square.

> **Maximum Sharpe is not automatically "the answer".** When a question gives you an `A`, it wants the utility calculation. At A = 1 and A = 10 the utility-maximising choice is *not* the max-Sharpe portfolio.

---

### A14. The risk tolerance questionnaire

**What it is.** A ten-question multiple-choice quiz (Reilly & Brown Exhibit 2.4, on Canvas as `Risk tolerance questionnaire.pdf`). Each answer scores 1–4, higher = more risk-tolerant, so totals run 10–40:

| Score | Band | Approximate A |
|---|---|---|
| 10–17 | Conservative | ≈ 7 |
| 18–25 | Semi-conservative | |
| 26–32 | Semi-aggressive | |
| 33–40 | Aggressive | ≈ 1 |

**Why you care.** It is where `A` comes from. The lecture's footnote: "typically around 7 if conservative and 1 if aggressive". Note the utility workbook uses A = 10, outside that range — treat 1 and 7 as anchors, not limits.

> **A is elicited, not measured.** A discussion question on the limitations of the utility approach gets a mark for pointing out that the entire asset allocation hangs on a ten-question retail quiz whose answers depend on framing and mood — an input at least as soft as the statistical estimates in A10.

---

### A15. Investment strategies, in-sample vs out-of-sample, overfitting (Assessment 2 preview)

**What it is.** The last two slides set up Assessment 2: design a trading rule, test it honestly, and report what it would really have earned.

**Strategy menu (`Topic 2 Potential Investment Strategies.docx`):**

| Technical (signals from price/volume) | Fundamental (signals from financials or a model) |
|---|---|
| Momentum | Underpriced according to CAPM |
| Contrarian | Price/earnings ratio |
| Moving averages | Company size |
| Mean reversion | Dividend yield |
| Volume | |

The Topic 2 handout's second example trades on dividend yield but is headed "Technical Analysis" — by its own table that is a fundamental strategy. (The reissue distributed with the A2 materials, `Potential Investment Strategies-5.docx`, corrects the heading to "Fundamental Analysis".) Classify by the signal, not the heading. The handout also says **do not reuse either example** in the assignment.

**A strategy must be a decision rule with no gaps:**

```
At the end of each month, compute <signal> over <lookback window>.
  If signal > threshold  →  buy for the following month
  If signal < threshold  →  short-sell for the following month
  If signal = threshold  →  hold the previous month's position
```

Three places marks are lost: a vague lookback ("recent" is not a rule — "previous 36 months" is); no tie branch; and **timing** — the signal must be computable *before* the month it governs. Using this month's return to set this month's position is look-ahead bias and produces spectacular, untradeable back-tests.

**Process (lecture slides 41–42):**

1. State a philosophy first (value vs growth, index, socially responsible) — a guide post in turbulent markets.
2. Build and refine on an **in-sample** period (the handout: the first three years).
3. Test on an **out-of-sample** period — any period *after* in-sample (the handout: the last two years, decisions updated monthly).
4. Report annual return **and** risk out of sample.
5. Then ask: how often did you trade? what did each trade cost? would tax be payable?

**Overfitting** means tuning the rule until it fits the in-sample noise. Try twenty lookback windows, keep the best, and you have found the luckiest of twenty noise draws, not a signal — it will not work out of sample. Defence: fix the rule before looking at the out-of-sample data, and disclose how many variants you tried.

**Worked example (`Topic 2 Evaluate an Investment Strategy` workbook — S&P 500, 5,783 daily returns).** Rule: long tomorrow if today's return was positive, short if negative. Result: $100 → $2.72, **−15.02% p.a.**, σ 18.94%, 3,213 trades. Buy-and-hold on the same series: **+9.67% p.a.**, $100 → $773.87, one trade. Before costs. At 5 bp a side, 145 position changes a year is roughly another 14 percentage points a year of cost.

**Excel translation.** Payoff `=IF(R_prev>0, R_today, −R_today)` — note it reads *yesterday's* return; value `=V_prev*(1+payoff)`; trade counter `=IF(sign flipped, 1, 0)`; annualise with `(V_end/V_start)^(1/years) − 1` and `STDEV × √252`.

> **An evaluation without a benchmark is worthless.** A strategy that beats zero but loses to buy-and-hold on the same asset over the same window has added nothing. Always report: out-of-sample return, out-of-sample risk, trade count, cost estimate, and buy-and-hold on the same data.

---

## Part B — Tutorial 2, fully worked

> The file supplied as `Tutorial 2 SV-1.xlsx` is an **empty template** — headings and blank result cells, with placeholder formulas `=sumproduct()` and `=mmult(transpose(),)` that have no arguments. There are no official answers. Every figure below was computed from scratch and verified independently in Python. Where the sample/population divisor matters, both are shown; the correlation is the same either way.

### B1. Variation of Chapter 6, Question 11

**Question.** Returns from two stocks have a correlation of 0.8. Will combining them provide any diversification benefit? Explain.

**Answer: Yes — a real but modest benefit.** The threshold is r = +1.0 exactly. Any correlation strictly below +1 reduces portfolio risk below the weighted average of the component risks, at the same expected return.

**Demonstrate with numbers.** Take σ₁ = 20%, σ₂ = 30%, 50/50:

```
σ²_p = (0.5)²(0.04) + (0.5)²(0.09) + 2(0.5)(0.5)(r)(0.20)(0.30)
     = 0.0100 + 0.0225 + 0.03r
     = 0.0325 + 0.03r
```

| r | σ²_p | σ_p | vs weighted average 25.00% |
|---|---|---|---|
| +1.0 | 0.0625 | 25.00% | no benefit |
| **+0.8** | **0.0565** | **23.77%** | **−1.23 pp** |
| 0.0 | 0.0325 | 18.03% | −6.97 pp |
| −1.0 | 0.0025 | 5.00% | −20.00 pp |

At r = 0.8 the portfolio carries 23.77% instead of 25.00%. The benefit is small because the assets move together most of the time; most of the *available* benefit is unrealised, and an investor wanting meaningful diversification should look for correlations near zero or negative.

**What the marker wants.** (1) "Yes" — not "no". (2) The rule: benefit exists for any r < +1. (3) A sentence on *why* it is small at 0.8. (4) Bonus: a numerical illustration like the table. The common fail is answering "no, 0.8 is too high".

---

### B2. Chapter 6, Problem 1 — Lauren Labs expected return

**Question.** Six possible returns with probabilities 0.10, 0.15, 0.20, 0.25, 0.20, 0.10 for returns −0.20, −0.05, 0.10, 0.15, 0.20, 0.40. Compute E(Rᵢ).

Probabilities sum to 1.00 — check.

```
E(R) = 0.10(−0.20) + 0.15(−0.05) + 0.20(0.10) + 0.25(0.15) + 0.20(0.20) + 0.10(0.40)
     = −0.0200 − 0.0075 + 0.0200 + 0.0375 + 0.0400 + 0.0400
     = 0.1100
```

**E(R) = 11.00%.**

In Excel: `=SUMPRODUCT(A2:A7, B2:B7)`, or the array formula `=MMULT(TRANSPOSE(A2:A7), B2:B7)`.

**What the marker wants.** The probability-weighted sum with the six products visible, and 11.00%. The plain average of the six returns is 10.00% — wrong, and deceptively close.

---

### B3. Chapter 6, Problem 3 — Madison Cookies and Sophie Electric

**Question.** Six monthly returns for each stock. Compute (a) the average return, (b) standard deviation, (c) covariance, (d) correlation. Then: what correlation did you expect, how does it compare, and are these good diversification choices?

| Month | Madison Rᵢ | Sophie Rⱼ |
|---|---|---|
| 1 | −0.04 | 0.07 |
| 2 | 0.06 | −0.02 |
| 3 | −0.07 | −0.10 |
| 4 | 0.12 | 0.15 |
| 5 | −0.02 | −0.06 |
| 6 | 0.05 | 0.02 |

**(a) Means.**

```
Madison: (−0.04 + 0.06 − 0.07 + 0.12 − 0.02 + 0.05) / 6 = 0.10 / 6 = 0.016667 = 1.67%
Sophie:  ( 0.07 − 0.02 − 0.10 + 0.15 − 0.06 + 0.02) / 6 = 0.06 / 6 = 0.010000 = 1.00%
```

**The deviation table — build it once; (b), (c) and (d) all read off it.**

| Month | Rᵢ − R̄ᵢ | Rⱼ − R̄ⱼ | (Rᵢ − R̄ᵢ)² | (Rⱼ − R̄ⱼ)² | product |
|---|---|---|---|---|---|
| 1 | −0.056667 | +0.060000 | 0.003211 | 0.003600 | −0.003400 |
| 2 | +0.043333 | −0.030000 | 0.001878 | 0.000900 | −0.001300 |
| 3 | −0.086667 | −0.110000 | 0.007511 | 0.012100 | +0.009533 |
| 4 | +0.103333 | +0.140000 | 0.010678 | 0.019600 | +0.014467 |
| 5 | −0.036667 | −0.070000 | 0.001344 | 0.004900 | +0.002567 |
| 6 | +0.033333 | +0.010000 | 0.001111 | 0.000100 | +0.000333 |
| **Σ** | 0 | 0 | **0.025733** | **0.041200** | **0.022200** |

Both deviation columns sum to zero — the means are right.

**(b) Standard deviations.**

```
Madison:  population  σ² = 0.025733 / 6 = 0.004289   σ = 6.549%
          sample      σ² = 0.025733 / 5 = 0.005147   σ = 7.174%

Sophie:   population  σ² = 0.041200 / 6 = 0.006867   σ = 8.287%
          sample      σ² = 0.041200 / 5 = 0.008240   σ = 9.077%
```

Sophie is riskier on either convention, and has the lower mean return — Madison dominates it in this sample.

**(c) Covariance.**

```
population:  Cov = 0.022200 / 6 = 0.003700
sample:      Cov = 0.022200 / 5 = 0.004440
```

Positive — they tend to move the same way relative to their means.

**(d) Correlation.**

```
population:  r = 0.003700 / (0.065490 × 0.082865) = 0.003700 / 0.0054267 = 0.6818
sample:      r = 0.004440 / (0.071740 × 0.090774) = 0.004440 / 0.0065120 = 0.6818
```

**r = 0.68** on both conventions.

**Discussion.** *Expected:* a food manufacturer and an electrical business have unrelated revenue drivers, so a low positive correlation (perhaps 0.2–0.4) from shared market exposure would be reasonable. *Got:* 0.68, much higher. The reason is visible in the table: months 3 and 4 are the two largest moves, both in the same direction, and together contribute 0.024 of the 0.0222 cross-product total — the other four months net out slightly negative. *Good for diversification?* Not especially: any r < 1 gives a benefit, but at 0.68 it is weak. *Caveat worth a mark:* six observations is far too few; the estimate is driven by two months and would change drastically if one were dropped.

**What the marker wants.** Means; a deviation table; both SDs with the divisor stated; covariance; correlation matching `CORREL`; a prior stated *before* comparing; a reason for the gap; a verdict on diversification with the "any r < 1" rule; and the small-sample caveat.

---

### B4. Chapter 6, Problem 4 — two portfolios, two correlations

**Question.** E(R₁) = 0.15, σ₁ = 0.10; E(R₂) = 0.20, σ₂ = 0.20; w₁ = w₂ = 0.5. Compute mean and SD of the portfolio for r = +0.40 and r = −0.60. Plot and explain.

**Expected return — the same in both cases, because correlation does not appear in the formula:**

```
E(R_p) = 0.5(0.15) + 0.5(0.20) = 0.175 = 17.50%
```

**Variance skeleton:**

```
σ²_p = (0.5)²(0.10)² + (0.5)²(0.20)² + 2(0.5)(0.5) × Cov
     = 0.0025 + 0.0100 + 0.5 × Cov
```

**Case 1, r = +0.40:**

```
Cov  = 0.40 × 0.10 × 0.20 = 0.0080
σ²_p = 0.0025 + 0.0100 + 0.5(0.0080) = 0.0125 + 0.0040 = 0.0165
σ_p  = √0.0165 = 0.12845 = 12.85%
```

**Case 2, r = −0.60:**

```
Cov  = −0.60 × 0.10 × 0.20 = −0.0120
σ²_p = 0.0025 + 0.0100 + 0.5(−0.0120) = 0.0125 − 0.0060 = 0.0065
σ_p  = √0.0065 = 0.08062 = 8.06%
```

| | E(R_p) | Cov | σ²_p | σ_p |
|---|---|---|---|---|
| Asset 1 alone | 15.00% | — | 0.0100 | 10.00% |
| Asset 2 alone | 20.00% | — | 0.0400 | 20.00% |
| Portfolio, r = +0.40 | **17.50%** | +0.0080 | 0.0165 | **12.85%** |
| Portfolio, r = −0.60 | **17.50%** | −0.0120 | 0.0065 | **8.06%** |
| Weighted average of SDs | | | | 15.00% |

**The plot.** σ horizontal, E(R) vertical. Four points: Asset 1 (10%, 15%), Asset 2 (20%, 20%), Portfolio r = +0.40 (12.85%, 17.5%), Portfolio r = −0.60 (8.06%, 17.5%).

**Explanation.** (1) Both portfolios sit at the same height — return is a weighted average, unaffected by correlation. (2) The r = −0.60 portfolio sits 4.79 percentage points to the left — lower correlation shifts the point horizontally toward less risk at no cost in return. (3) Both beat the 15% weighted average of SDs (by 2.15 pp and 6.94 pp). (4) **The r = −0.60 portfolio at 8.06% is less risky than *either* asset alone**, including Asset 1 at 10%, while returning 2.5 pp more than Asset 1 — it dominates Asset 1 outright. (5) Joining each portfolio point to the two asset points sketches the frontier's curve; the more negative the correlation, the further it bows left.

**What the marker wants.** 17.50% for both; 12.85% and 8.06%; a plot with four labelled points; and point (4) — that a negatively correlated mix can be less risky than its safest component, which no weighted average could ever produce.

---

### B5. Chapter 6, Problem 7 — four indexes

**Question.** Six monthly returns for DJIA, S&P 500, Russell 2000 and Nikkei. Compute (a) means, (b) SDs, (c) four covariances, (d) four correlations, (e) return and SD of equal-weight S&P + Russell and S&P + Nikkei. Discuss.

| Month | DJIA R₁ | S&P R₂ | Russell R₃ | Nikkei R₄ |
|---|---|---|---|---|
| 1 | 0.03 | 0.02 | 0.04 | 0.04 |
| 2 | 0.07 | 0.06 | 0.10 | −0.02 |
| 3 | −0.02 | −0.01 | −0.04 | 0.07 |
| 4 | 0.01 | 0.03 | 0.03 | 0.02 |
| 5 | 0.05 | 0.04 | 0.11 | 0.02 |
| 6 | −0.06 | −0.04 | −0.08 | 0.06 |

**(a) Means.**

```
DJIA:     0.08 / 6 = 0.013333 = 1.333%
S&P 500:  0.10 / 6 = 0.016667 = 1.667%
Russell:  0.16 / 6 = 0.026667 = 2.667%
Nikkei:   0.19 / 6 = 0.031667 = 3.167%
```

**(b) Standard deviations.** Sum of squared deviations, then divide and root:

| Index | Σ(R − R̄)² | σ population (÷6) | σ sample (÷5) |
|---|---|---|---|
| DJIA | 0.011333 | 4.346% | 4.761% |
| S&P 500 | 0.006533 | 3.300% | 3.615% |
| Russell 2000 | 0.028333 | 6.872% | 7.528% |
| Nikkei | 0.005283 | 2.967% | 3.251% |

Russell (small caps) is by far the most volatile. The Nikkei being least volatile is a six-month artefact.

**(c) Covariances.**

| Pair | Σ of cross-products | Cov population (÷6) | Cov sample (÷5) |
|---|---|---|---|
| DJIA – S&P | +0.008367 | +0.001394 | +0.001673 |
| S&P – Russell | +0.013033 | +0.002172 | +0.002607 |
| S&P – Nikkei | −0.005267 | −0.000878 | −0.001053 |
| Russell – Nikkei | −0.010267 | −0.001711 | −0.002053 |

**(d) Correlations** — `Cov / (σᵢσⱼ)`, identical on either divisor:

| Pair | r | Reading |
|---|---|---|
| DJIA – S&P | **+0.972** | almost perfectly positive |
| S&P – Russell | **+0.958** | very strongly positive |
| S&P – Nikkei | **−0.896** | strongly negative |
| Russell – Nikkei | **−0.839** | strongly negative |

The three US indexes price the same economy and are near-substitutes. The Nikkei moves against them *in this sample*.

**(e) Two equal-weight portfolios** (sample figures shown; population in brackets).

Portfolio 1 — S&P + Russell:

```
E(R_p) = 0.5(0.016667) + 0.5(0.026667) = 0.021667 = 2.167%

σ²_p = 0.25(0.0013067) + 0.25(0.0056667) + 0.5(0.0026067)
     = 0.00032667 + 0.00141667 + 0.00130333
     = 0.00304667
σ_p  = 5.520%          (population: σ² = 0.00253889, σ = 5.039%)
```

Portfolio 2 — S&P + Nikkei:

```
E(R_p) = 0.5(0.016667) + 0.5(0.031667) = 0.024167 = 2.417%

σ²_p = 0.25(0.0013067) + 0.25(0.0010567) + 0.5(−0.0010533)
     = 0.00032667 + 0.00026417 − 0.00052667
     = 0.00006417
σ_p  = 0.801%          (population: σ² = 0.00005347, σ = 0.731%)
```

| | E(R_p) | σ_p (sample) | Weighted avg of SDs | Benefit |
|---|---|---|---|---|
| S&P + Russell | 2.167% | 5.520% | 5.571% | 0.05 pp |
| S&P + Nikkei | **2.417%** | **0.801%** | 3.433% | **2.63 pp** |

**Discussion.** S&P + Nikkei wins on *both* dimensions — higher return and about one-seventh the risk — so Portfolio 1 is simply dominated. The cause is correlation and nothing else: at r = +0.958 the S&P/Russell mix behaves like one asset (5.520% is barely below the 5.571% weighted average — combining two things that are the same thing is not diversification); at r = −0.896 the Nikkei's bad months are the S&P's good months and most of the volatility cancels. Portfolio 2 is less risky than either of its components (0.801% vs 3.615% and 3.251%) — only a strongly negative correlation can do that. Caveat: six months produced r = −0.90; over long horizons developed equity markets are reliably positively correlated, so do not carry the conclusion outside the sample.

**What the marker wants.** Four means; four SDs with divisor stated; four covariances and four correlations; the two portfolio return/risk pairs; "Portfolio 2 dominates"; the explanation in terms of correlation; and the small-sample caveat.

> **Template defects to know about.** In the `Ch6 P7` sheet, cell C23 reads `=SQRT(B22)` but the variance is in C22 — as shipped it returns 0 or an error; fix to `=SQRT(C22)`. The `Ch6 P1` placeholders need `=SUMPRODUCT(A2:A7,B2:B7)` and `=MMULT(TRANSPOSE(A2:A7),B2:B7)`. The file header says "Solutions" and spells the stock "Maddison". You have the right file.

---

## Part C — Self-test

Do these without looking back. Working in the answers.

1. Three outcomes: −10% with probability 0.2, 8% with probability 0.5, 25% with probability 0.3. What is E(R)?
2. Two assets: σ₁ = 12%, σ₂ = 18%, r = 0.3, E(R₁) = 8%, E(R₂) = 12%. Weights 60/40. Compute E(R_p) and σ_p, and the weighted average of the SDs.
3. Same two assets. What weight in Asset 1 minimises variance, and what is σ_p there?
4. Same two assets but now r = −1. What weight in Asset 1 gives zero risk?
5. Four monthly returns: X = 2%, −1%, 4%, 3%; Y = 1%, 0%, 5%, −2%. Compute the sample covariance and the correlation.
6. Cov(A,B) = 0.0072, σ_A = 15%, σ_B = 12%. What is the correlation? Is it the same if all three inputs had been computed with the population divisor instead?
7. A portfolio of 50 stocks: how many variances and how many unique covariances does the Markowitz calculation need? What does the single-index model reduce the covariance inputs to?
8. Three assets, equal weights, covariance matrix with variances 0.04, 0.09, 0.16 and covariances Cov₁₂ = 0.01, Cov₁₃ = 0, Cov₂₃ = 0.03. Compute σ_p.
9. Portfolio P: E(r) = 12%, σ = 15%. Portfolio Q: E(r) = 9%, σ = 8%. Which does an investor with A = 2 choose? With A = 5?
10. A monthly return series has mean 1% and standard deviation 4%. Annualise both. What would you get if you (wrongly) multiplied the SD by 12?

<details><summary>Answers</summary>

**1.** `E(R) = 0.2(−0.10) + 0.5(0.08) + 0.3(0.25) = −0.020 + 0.040 + 0.075 = 0.095 = 9.5%`.

**2.**
```
E(R_p) = 0.6(0.08) + 0.4(0.12) = 0.048 + 0.048 = 0.096 = 9.6%
Cov    = 0.3 × 0.12 × 0.18 = 0.00648
σ²_p   = (0.6)²(0.0144) + (0.4)²(0.0324) + 2(0.6)(0.4)(0.00648)
       = 0.005184 + 0.005184 + 0.003110 = 0.013478
σ_p    = √0.013478 = 0.1161 = 11.61%
Weighted average of SDs = 0.6(12%) + 0.4(18%) = 14.4%   → 2.79 pp of benefit
```

**3.**
```
w₁* = (σ₂² − Cov) / (σ₁² + σ₂² − 2Cov)
    = (0.0324 − 0.00648) / (0.0144 + 0.0324 − 0.01296)
    = 0.02592 / 0.03384 = 0.766
σ_p at w₁ = 0.766:  √[(0.766)²(0.0144) + (0.234)²(0.0324) + 2(0.766)(0.234)(0.00648)] = 11.20%
```
Lower than Asset 1's 12% on its own.

**4.** `w₁* = σ₂ / (σ₁ + σ₂) = 0.18 / 0.30 = 0.60`. Check: `|0.6(0.12) − 0.4(0.18)| = |0.072 − 0.072| = 0`.

**5.** Means: X̄ = 2%, Ȳ = 1%. Deviations X: 0, −3, +2, +1; Y: 0, −1, +4, −3 (in %). Cross-products: 0, +3, +8, −3 → Σ = 8 (%²) = 0.0008.
```
Cov.S = 0.0008 / 3 = 0.000267        (population: 0.0008 / 4 = 0.0002)
σ_X (sample) = √(0.0014/3) = 2.160%     σ_Y (sample) = √(0.0026/3) = 2.944%
r = 0.000267 / (0.02160 × 0.02944) = 0.419
```

**6.** `r = 0.0072 / (0.15 × 0.12) = 0.0072 / 0.018 = 0.40`. Yes, identical — the divisor cancels when all three inputs use the same one. It would *not* be 0.40 if the covariance were population and the SDs sample.

**7.** 50 variances; `50 × 49 / 2 = 1,225` unique covariances. The single-index model needs one beta per stock: 50 inputs.

**8.** With w = ⅓ each:
```
σ²_p = (1/9)(0.04 + 0.09 + 0.16) + 2(1/9)(0.01 + 0 + 0.03)
     = (1/9)(0.29) + (2/9)(0.04) = 0.032222 + 0.008889 = 0.041111
σ_p  = √0.041111 = 0.2028 = 20.28%
```
(Weighted average of the SDs 20%, 30%, 40% is 30%.)

**9.**
```
A = 2:  U_P = 0.12 − 0.5(2)(0.0225) = 0.12 − 0.0225 = 0.0975   U_Q = 0.09 − 0.5(2)(0.0064) = 0.0836   → P
A = 5:  U_P = 0.12 − 0.5(5)(0.0225) = 0.12 − 0.05625 = 0.06375  U_Q = 0.09 − 0.5(5)(0.0064) = 0.0740   → Q
```
The more risk-averse investor switches to the lower-risk portfolio. Note σ² = 0.0225 and 0.0064 — squared.

**10.**
```
Annual return = (1.01)¹² − 1 = 0.1268 = 12.68%     (not 12%)
Annual σ      = 4% × √12 = 13.86%
Wrong:          4% × 12 = 48%   — overstated by a factor of √12 ≈ 3.46
```
</details>

---

## Part D — CHEAT SHEET (memorise this)

### Every formula, grouped

```
EXPECTED RETURN
  single asset            E(R) = Σ Pⱼ Rⱼ
  portfolio               E(R_p) = Σ wᵢ E(Rᵢ)                 (weighted average — always)

SINGLE-ASSET RISK
  variance (probabilities)  σ² = Σ Pᵢ [Rᵢ − E(R)]²
  variance (series)         σ² = Σ [Rₜ − R̄]² / n   (pop)    or  / (n−1)  (sample)
  standard deviation        σ  = √σ²

CO-MOVEMENT
  covariance (definition)   Cov(i,j) = E{[Rᵢ − E(Rᵢ)][Rⱼ − E(Rⱼ)]}
  covariance (series)       Cov(i,j) = Σ [Rᵢ,ₜ − R̄ᵢ][Rⱼ,ₜ − R̄ⱼ] / n  or  / (n−1)
  correlation               r(i,j) = Cov(i,j) / (σᵢ σⱼ)        range −1 to +1
  covariance from r         Cov(i,j) = r σᵢ σⱼ
  goodness of fit           R² = r²

TWO-ASSET PORTFOLIO
  variance                  σ²_p = w₁²σ₁² + w₂²σ₂² + 2 w₁ w₂ r σ₁ σ₂
  r = +1                    σ_p = w₁σ₁ + w₂σ₂
  r = −1                    σ_p = |w₁σ₁ − w₂σ₂|
  min-variance (any r)      w₁* = (σ₂² − Cov) / (σ₁² + σ₂² − 2Cov)
  min-variance (r = 0)      w₁* = σ₂² / (σ₁² + σ₂²)
  zero-risk (r = −1)        w₁* = σ₂ / (σ₁ + σ₂)

N-ASSET PORTFOLIO
  three assets              σ²_p = w₁²σ₁² + w₂²σ₂² + w₃²σ₃² + 2w₁w₂Cov₁₂ + 2w₁w₃Cov₁₃ + 2w₂w₃Cov₂₃
  general                   σ²_p = Σᵢ Σⱼ wᵢ wⱼ Cov(i,j)
  matrix                    σ²_p = wᵀ Σ w
  inputs                    n variances,  n(n−1)/2 unique covariances
  single-index shortcut     r(i,j) = βᵢ βⱼ σ²_m / (σᵢ σⱼ)

ANNUALISING (m periods per year: 12 monthly, 252 daily)
  return                    (1 + r̄)^m − 1
  variance                  σ² × m
  standard deviation        σ × √m

UTILITY
  utility                   U = E(r) − 0.5 A σ²              (σ² = VARIANCE)
  indifference curve        E(r) = U + 0.5 A σ²              (parabola; steeper for higher A)
  switch point              A* = 2(r₂ − r₁) / (σ₂² − σ₁²)
  risk-free asset           U = RFR  (σ² = 0), for every A

SHARPE
  true                      (E(R_p) − RFR) / σ_p
  "modified" (workbook)     E(R_p) / σ_p                     — not the same ranking
```

### Ten numbers and facts to know cold

1. Correlation range **−1 to +1**; diversification benefit for **any r < +1**; none at exactly +1.
2. At r = +1, σ_p = weighted average of SDs. At r = −1, σ_p can be 0 — **only** at `w₁ = σ₂/(σ₁+σ₂)`.
3. **100 assets → 4,950 covariances**; single-index model → 100 betas.
4. Lecture 2021 example: Cov = **0.0000474** (÷11), σ_stocks **3.19%**, σ_bonds **0.82%**, **r = 0.181**. Same pair daily 2002–24: **r = −0.25**.
5. Lecture two-asset table (7%/10% SDs, 50/50): σ_p = **8.50 / 7.40 / 6.10 / 4.44 / 1.50%** for r = +1 / +0.5 / 0 / −0.5 / −1; E(R_p) = **15%** throughout.
6. A ≈ **7** conservative, ≈ **1** aggressive, **0** risk-neutral. Questionnaire scores **10–40**, four bands.
7. Lecture utility example: E(r) 15%, σ 20% → U = **1%** (A=7), **13%** (A=1).
8. Tutorial 2: P1 E(R) = **11.00%**; P3 r = **0.68**; P4 σ_p = **12.85%** (r=+0.4) and **8.06%** (r=−0.6), both at **17.50%**; P7 S&P+Nikkei **0.80%** σ at **2.42%** return vs S&P+Russell **5.52%** at **2.17%**.
9. Markowitz's five assumptions: probability distributions; maximise one-period expected utility with diminishing marginal utility; risk = variability of returns; decide on return and risk only; prefer more return / less risk.
10. Efficient frontier: max return per risk level or min risk per return level; **concave**; endpoints are single assets; min-variance ≠ max-Sharpe.

### Traps

1. **Portfolio return is a weighted average; portfolio risk is not.** Never average SDs and call it σ_p.
2. **E(R) needs the probabilities.** Plain `AVERAGE` of the outcomes gives 10% instead of 11% in P1.
3. **Divisor: n (population) vs n−1 (sample).** Changes σ and Cov, not r — *provided* all three use the same one. State it.
4. **Mixed divisors give a fake correlation** (0.166 instead of 0.181 on the 2021 data).
5. **Square the weights in the variance terms, not in the covariance term.** `w₁²σ₁²` but `2w₁w₂Cov`.
6. **Take the square root at the end.** The formula gives variance.
7. **r = −1 does not automatically mean zero risk** — 1.5% at 50/50 in the lecture's own example.
8. **Utility uses σ², not σ.** A hugely negative U means you forgot to square.
9. **Max-Sharpe is not "the answer" when A is given** — do the utility calculation.
10. **Data Analysis → Covariance is lower-triangle and population.** Mirror it before `MMULT` (15.27% vs 16.56% on the 3-asset data) and do not pair it with `STDEV.S`.
11. **σ scales with √m, not m.** 4% monthly → 13.86% annual, not 48%.
12. **Weight periodic returns, then annualise once** — 15.38% vs 15.58% in the 3-asset workbook.
13. **Covariance is relative to each series' own mean.** Positive Cov does not mean both rose.
14. **R² is never negative; r can be.** ±0.9 both give 0.81.
15. **Min-variance weight can exceed 1** (Q11: 1.235) — valid only if shorting is allowed.
16. **A back-test needs a benchmark, a trade count and a cost estimate.** −15% vs +9.67% buy-and-hold.
17. **Look-ahead bias:** the signal must use *last* period's data. `=IF(R_prev>0, …)`, not `R_today`.
18. **Six observations is not a correlation estimate** — say so whenever n is tiny.

### Excel function map

| Task | Sample (÷ n−1) | Population (÷ n) |
|---|---|---|
| Expected return from probabilities | `=SUMPRODUCT(P, R)` or `=MMULT(TRANSPOSE(P), R)` | same |
| Mean of a series | `=AVERAGE(range)` | same |
| Variance | `=VAR.S(range)` | `=VAR.P(range)` |
| Standard deviation | `=STDEV.S(range)` | `=STDEV.P(range)` |
| Covariance | `=COVARIANCE.S(r1, r2)` | `=COVARIANCE.P(r1, r2)`; Data Analysis → Covariance (lower triangle only) |
| Correlation | `=CORREL(r1, r2)` — same either way | |
| Correlation matrix | Data Analysis → Correlation (lower triangle) | |
| Portfolio variance (matrix) | `=MMULT(MMULT(TRANSPOSE(w), Σ), w)` — array formula, Σ must be a full square | |
| Portfolio SD | `=SQRT(variance cell)` | |
| Annualise return | `=(1+mean)^12-1` (monthly) or `^252` (daily) | |
| Annualise SD | `=sd*SQRT(12)` or `*SQRT(252)` | |
| Utility | `=E_r - 0.5*A*sd^2` | |
| Min-variance / max-Sharpe weights | **Solver**: objective = σ or Sharpe cell, Min/Max, change weight cells, constraint `SUM(w)=1` (add `w>=0` for long-only) | |
| Strategy payoff | `=IF(R_prev>0, R_today, -R_today)`; value `=V_prev*(1+payoff)` | |

---

*All figures computed independently in Python from the lecture data, the Topic 2 workbooks and the Tutorial 2 question sheet. `Tutorial 2 SV-1.xlsx` contains no answers; where the n vs n−1 convention is open, both are shown. Confirm the house convention with your tutor before 2 September.*
