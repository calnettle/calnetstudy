# TUTORIAL 2 — Full Worked Solutions

*(Reilly & Brown, Chapter 6 — portfolio return, risk, covariance and correlation)*

> ⚠️ **Read this before you compare answers.** The file supplied as `Tutorial 2 SV-1.xlsx` is **not a solutions file** — it is an empty template. Every sheet contains column headings and blank result cells; the only formulas present are placeholders (`=sumproduct()` and `=mmult(transpose(),)` with no arguments). There are no numbers in it to check against. Every figure below was therefore computed from scratch and independently re-verified in Python. Two defects in the template itself are flagged at the end.

---

## Which divisor? Read this first

Four of the five questions below ask for a standard deviation or a covariance from a **series of past observations**, and the answer changes depending on whether you divide the sum of squared deviations by `n` or by `n − 1`:

```
Population (Excel VAR.P / STDEV.P / COVARIANCE.P):   ÷ n
Sample     (Excel VAR.S / STDEV.S / COVARIANCE.S):   ÷ (n − 1)
```

Both are shown throughout. Two things to hold on to:

1. **The correlation coefficient is identical either way**, provided you use the *same* divisor in the covariance and in both standard deviations. The `n` (or `n − 1`) cancels.
2. **The covariance and the standard deviations are not identical**, and neither is any portfolio standard deviation built from them.

> **Which one does EFB335 want?** The unit's own materials are not consistent. `Topic 2 Returns and Risk_solved.xlsx` uses `COVARIANCE.S` and `STDEV.S` (sample, `n − 1`). `Topic 2 Covariance Matrix-1-1.xlsx` uses `VARP` and Excel's Data Analysis → Covariance tool, both of which are **population** (`n`). `Topic 2 Evaluate an Investment Strategy-2-1.xlsx` uses `STDEV.P`; its sibling `Topic 2 US Equities vs Bonds` uses `STDEV.S`. No supplied answer key resolves it. **Show your divisor, say which convention you used, and a marker can follow you either way.** Confirm the house convention with your tutor before the exam.

---

## Variation of Chapter 6, Question 11

> *Returns from two stocks have a correlation coefficient of 0.8. Will combining these assets in a portfolio provide any diversification benefits? Explain.*

**Answer: yes — a genuine, if modest, diversification benefit.**

The rule is not "low correlation gives a benefit". The rule is:

```
Any correlation strictly below +1.0 produces a diversification benefit.
Only r = +1.0 produces none.
```

At `r = +1.0` the portfolio standard deviation collapses to the **weighted average** of the individual standard deviations — you have gained nothing that you could not have got by holding the two assets in separate accounts. At any `r < +1.0` the portfolio standard deviation is **strictly less** than that weighted average, at exactly the same expected return.

### Demonstrating it with numbers

Take two assets with `σ₁ = 20%`, `σ₂ = 30%`, held 50/50:

```
σ²_port = w₁²σ₁² + w₂²σ₂² + 2 w₁ w₂ r σ₁ σ₂
        = (0.5)²(0.20)² + (0.5)²(0.30)² + 2(0.5)(0.5)(r)(0.20)(0.30)
        = 0.0100 + 0.0225 + 0.03r
        = 0.0325 + 0.03r
```

| r | σ²_port | **σ_port** | vs weighted average (25.00%) |
|---|---|---|---|
| +1.0 | 0.062500 | **25.00%** | no benefit |
| **+0.8** | **0.056500** | **23.77%** | **−1.23 pp** |
| 0.0 | 0.032500 | 18.03% | −6.97 pp |
| −1.0 | 0.002500 | 5.00% | −20.00 pp |

At `r = 0.8` the portfolio carries **23.77%** risk instead of **25.00%** — a saving of 1.23 percentage points for free.

**How to phrase it in an exam:** the benefit exists but is *small*, because the two return series move together most of the time. The lower the correlation, the larger the benefit; 0.8 is near the top of the range, so most of the available benefit is unrealised. An investor looking to diversify meaningfully should look for assets with correlations closer to zero or negative.

> **The trap in this question is answering "no".** A correlation of 0.8 *sounds* like "these move together, so there's no point". Wrong. The threshold is +1.0 exactly, not "high". Marks are lost here every year.

> **A second-order point worth a mark.** The *minimum-variance* weights at `r = 0.8` are `w₁ = (σ₂² − Cov)/(σ₁² + σ₂² − 2Cov) = 1.235` — i.e. **123.5% in asset 1, financed by shorting asset 2**. If short selling is not allowed, the lowest-risk long-only holding is 100% of asset 1 at 20.00%. The diversification benefit at 50/50 is still real; it is measured against the 25.00% weighted average, not against the least risky single asset.

---

## Chapter 6, Problem 1

> *You expect the rate of return for Lauren Labs common stock to range between −20% and +40% with the following probabilities. Compute the expected rate of return E(Rᵢ).*

**Check the probabilities sum to 1.0 first** — they do (0.10 + 0.15 + 0.20 + 0.25 + 0.20 + 0.10 = 1.00). If they do not, you have mis-read the table.

```
E(Rᵢ) = Σ Pⱼ × Rⱼ
```

| Probability | Possible return | Pⱼ × Rⱼ |
|---|---|---|
| 0.10 | −0.20 | −0.0200 |
| 0.15 | −0.05 | −0.0075 |
| 0.20 | 0.10 | +0.0200 |
| 0.25 | 0.15 | +0.0375 |
| 0.20 | 0.20 | +0.0400 |
| 0.10 | 0.40 | +0.0400 |
| **1.00** | | **+0.1100** |

```
E(Rᵢ) = 0.11 = 11.00%
```

**Answer: 11.00%.**

> **Do not average the six possible returns.** The unweighted mean of −0.20, −0.05, 0.10, 0.15, 0.20, 0.40 is **10.00%** — deceptively close to the right answer, and wrong. The probabilities are not equal, so the weighting matters. Getting 10% is the single most common error on this style of question, precisely *because* it looks plausible.

**In Excel:** `=SUMPRODUCT(A2:A7,B2:B7)`. This is what the empty `=sumproduct()` placeholder in the template is asking for. The matrix equivalent — the second placeholder — is `=MMULT(TRANSPOSE(A2:A7),B2:B7)`, entered as an array formula.

---

## Chapter 6, Problem 3

> *The following are the monthly rates of return for Madison Cookies and for Sophie Electric during a six-month period.*

| Month | Madison Cookies (Rᵢ) | Sophie Electric (Rⱼ) |
|---|---|---|
| 1 | −0.04 | 0.07 |
| 2 | 0.06 | −0.02 |
| 3 | −0.07 | −0.10 |
| 4 | 0.12 | 0.15 |
| 5 | −0.02 | −0.06 |
| 6 | 0.05 | 0.02 |

### (a) Average monthly rate of return for each stock

```
Madison: (−0.04 + 0.06 − 0.07 + 0.12 − 0.02 + 0.05) / 6 = 0.10 / 6 = 0.016667 = 1.67%
Sophie:  ( 0.07 − 0.02 − 0.10 + 0.15 − 0.06 + 0.02) / 6 = 0.06 / 6 = 0.010000 = 1.00%
```

### The deviation table — build this once and every remaining part falls out of it

| Month | Rᵢ | Rⱼ | Rᵢ − E(Rᵢ) | Rⱼ − E(Rⱼ) | [Rᵢ − E(Rᵢ)]² | [Rⱼ − E(Rⱼ)]² | product |
|---|---|---|---|---|---|---|---|
| 1 | −0.04 | 0.07 | −0.056667 | +0.060000 | 0.003211 | 0.003600 | −0.003400 |
| 2 | 0.06 | −0.02 | +0.043333 | −0.030000 | 0.001878 | 0.000900 | −0.001300 |
| 3 | −0.07 | −0.10 | −0.086667 | −0.110000 | 0.007511 | 0.012100 | +0.009533 |
| 4 | 0.12 | 0.15 | +0.103333 | +0.140000 | 0.010678 | 0.019600 | +0.014467 |
| 5 | −0.02 | −0.06 | −0.036667 | −0.070000 | 0.001344 | 0.004900 | +0.002567 |
| 6 | 0.05 | 0.02 | +0.033333 | +0.010000 | 0.001111 | 0.000100 | +0.000333 |
| | | | **Σ ≈ 0** | **Σ ≈ 0** | **0.025733** | **0.041200** | **0.022200** |

> **Free error check:** both deviation columns must sum to **zero**. If they do not, your mean is wrong and everything downstream is too. Do this before you square anything.

### (b) Standard deviation of returns for each stock

```
Madison, population (÷ 6):   σ² = 0.025733 / 6 = 0.0042889   →  σ = 6.549%
Madison, sample     (÷ 5):   σ² = 0.025733 / 5 = 0.0051467   →  σ = 7.174%

Sophie,  population (÷ 6):   σ² = 0.041200 / 6 = 0.0068667   →  σ = 8.287%
Sophie,  sample     (÷ 5):   σ² = 0.041200 / 5 = 0.0082400   →  σ = 9.077%
```

**Sophie Electric is the riskier stock on either convention** (8.29% vs 6.55%, or 9.08% vs 7.17%) — and it also has the *lower* average return. On both dimensions Madison Cookies dominates it over this sample.

### (c) Covariance between the rates of return

```
Population:  Cov = 0.022200 / 6 = 0.003700
Sample:      Cov = 0.022200 / 5 = 0.004440
```

**Positive** — the two stocks tend to move in the same direction relative to their own means. Notice how uninformative the raw magnitude is: 0.0037 could describe almost any strength of relationship. That is exactly why we standardise it.

### (d) Correlation coefficient

```
r(i,j) = Cov(i,j) / (σᵢ × σⱼ)

Population:  0.003700 / (0.065490 × 0.082865) = 0.003700 / 0.0054267 = 0.6818
Sample:      0.004440 / (0.071740 × 0.090774) = 0.004440 / 0.0065120 = 0.6818
```

```
r = 0.6818  (identical on both conventions ✓)
```

### Discussion — what level of correlation did you expect?

**Expectation:** these are firms in **unrelated industries** — a food manufacturer and an electrical/utility business. Their revenues respond to different drivers (grocery demand and input costs on one side; energy prices, regulation and interest rates on the other). A reasonable prior is a **low positive** correlation, somewhere around 0.2–0.4, reflecting only the common exposure to the overall market.

**What we actually got: 0.68 — substantially higher than expected.** Look back at the deviation table and the reason is obvious: in **months 3, 4, 5 and 6** the two stocks moved the same way, and months 3 and 4 were the two largest moves in the sample. Those two months alone contribute `0.009533 + 0.014467 = 0.024` of the 0.0222 total cross-product sum — that is, **months 3 and 4 more than account for the entire covariance**, and the other four months net out slightly negative.

**Would these be good choices for diversification?** **Not especially.** At `r = 0.68` there is a diversification benefit (any `r < 1` gives one), but a fairly weak one. An investor would do better pairing either stock with an asset whose correlation is nearer zero or negative.

> **The caveat that earns the extra mark: six observations is far too few.** A correlation estimated from `n = 6` has a very wide confidence interval, and here it is being driven by two months. Drop month 4 and the estimate changes drastically. Say so — the question is inviting you to compare your prior against a noisy estimate, not to trust the estimate blindly.

---

## Chapter 6, Problem 4

> *You are considering two assets with the following characteristics.*
>
> `E(R₁) = 0.15  E(σ₁) = 0.10  w₁ = 0.5`
> `E(R₂) = 0.20  E(σ₂) = 0.20  w₂ = 0.5`
>
> *Compute the mean and standard deviation of two portfolios if r₁,₂ = 0.40 and −0.60 respectively. Plot the two portfolios on a risk–return graph and briefly explain the results.*

### Portfolio expected return — the same in both cases

```
E(R_port) = w₁E(R₁) + w₂E(R₂) = 0.5(0.15) + 0.5(0.20) = 0.175 = 17.50%
```

**The correlation does not appear in this formula.** Both portfolios return 17.50%. This is the whole point of the question.

### Portfolio standard deviation

```
σ²_port = w₁²σ₁² + w₂²σ₂² + 2 w₁ w₂ r₁₂ σ₁ σ₂
        = (0.5)²(0.10)² + (0.5)²(0.20)² + 2(0.5)(0.5)(r)(0.10)(0.20)
        = 0.0025 + 0.0100 + 0.01r
        = 0.0125 + 0.01r
```

**Case 1 — r₁,₂ = +0.40:**

```
Cov(1,2) = 0.40 × 0.10 × 0.20 = 0.0080

σ²_port = 0.0025 + 0.0100 + 2(0.25)(0.0080)
        = 0.0025 + 0.0100 + 0.0040
        = 0.016500

σ_port  = √0.016500 = 0.128452 = 12.85%
```

**Case 2 — r₁,₂ = −0.60:**

```
Cov(1,2) = −0.60 × 0.10 × 0.20 = −0.0120

σ²_port = 0.0025 + 0.0100 + 2(0.25)(−0.0120)
        = 0.0025 + 0.0100 − 0.0060
        = 0.006500

σ_port  = √0.006500 = 0.080623 = 8.06%
```

### Summary

| | E(R_port) | Cov(1,2) | σ²_port | **σ_port** |
|---|---|---|---|---|
| Asset 1 alone | 15.00% | — | 0.0100 | 10.00% |
| Asset 2 alone | 20.00% | — | 0.0400 | 20.00% |
| **Portfolio, r = +0.40** | **17.50%** | +0.0080 | 0.016500 | **12.85%** |
| **Portfolio, r = −0.60** | **17.50%** | −0.0120 | 0.006500 | **8.06%** |
| Weighted average of SDs | — | — | — | 15.00% |

### The plot and what it shows

Draw risk (σ) on the horizontal axis and expected return on the vertical. Plot four points:

```
Asset 1              (10.00%, 15.0%)
Asset 2              (20.00%, 20.0%)
Portfolio r = +0.40  (12.85%, 17.5%)   ← same height as the one below
Portfolio r = −0.60  ( 8.06%, 17.5%)   ← same height, far to the left
```

**Explanation of the results:**

1. **Both portfolios sit at the same height (17.50%).** Expected return is a weighted average of component returns and is entirely unaffected by correlation.
2. **The `r = −0.60` portfolio sits well to the left.** Lower correlation shifts the portfolio horizontally toward less risk with no cost in return. That horizontal distance — **4.79 percentage points** here — is the diversification benefit.
3. **Both portfolios beat the naive 15.00% weighted average of the individual SDs**, by 2.15 pp and 6.94 pp respectively.
4. **The `r = −0.60` portfolio (8.06%) is less risky than *either* asset held alone**, including the 10.00% Asset 1 — while returning 2.5 pp more than Asset 1. It **dominates Asset 1 outright**. The `r = +0.40` portfolio does not achieve this: at 12.85% it is riskier than Asset 1, though it does pay 2.5 pp more for that risk.
5. Joining each portfolio to the two single-asset points traces the **curvature of the efficient frontier**: the more negative the correlation, the further the curve bows to the left.

> **Point 4 is the examinable insight.** "Lower correlation reduces risk" is worth one mark. "At `r = −0.60` the two-asset portfolio has *less* total risk than the safer of its two components, which is impossible for any weighted average" is worth the rest. Risk is not additive; return is.

---

## Chapter 6, Problem 7

> *The following are monthly percentage price changes for four market indexes.*

| Month | DJIA (R₁) | S&P 500 (R₂) | Russell 2000 (R₃) | Nikkei (R₄) |
|---|---|---|---|---|
| 1 | 0.03 | 0.02 | 0.04 | 0.04 |
| 2 | 0.07 | 0.06 | 0.10 | −0.02 |
| 3 | −0.02 | −0.01 | −0.04 | 0.07 |
| 4 | 0.01 | 0.03 | 0.03 | 0.02 |
| 5 | 0.05 | 0.04 | 0.11 | 0.02 |
| 6 | −0.06 | −0.04 | −0.08 | 0.06 |

### (a) Average monthly rate of return for each index

```
DJIA:     0.08 / 6 = 0.013333 = 1.333%
S&P 500:  0.10 / 6 = 0.016667 = 1.667%
Russell:  0.16 / 6 = 0.026667 = 2.667%
Nikkei:   0.19 / 6 = 0.031667 = 3.167%
```

### (b) Standard deviation for each index

Sum of squared deviations from each mean:

```
DJIA     Σ[R − E(R)]² = 0.011333
S&P 500  Σ[R − E(R)]² = 0.006533
Russell  Σ[R − E(R)]² = 0.028333
Nikkei   Σ[R − E(R)]² = 0.005283
```

| Index | σ population (÷ 6) | σ sample (÷ 5) |
|---|---|---|
| DJIA | 4.346% | 4.761% |
| S&P 500 | 3.300% | 3.615% |
| Russell 2000 | 6.872% | 7.528% |
| Nikkei | 2.967% | 3.251% |

**The Russell 2000 is by far the most volatile** — as you would expect from a small-cap index. The Nikkei is the least volatile *in this sample*, which is a sampling artefact, not a fact about Japanese equities.

### (c) Covariance between the rates of return

Cross-product sums, `Σ[Rᵢ − E(Rᵢ)][Rⱼ − E(Rⱼ)]`:

| Pair | Σ of products | Cov population (÷ 6) | Cov sample (÷ 5) |
|---|---|---|---|
| DJIA–S&P 500 | +0.008367 | +0.0013944 | +0.0016733 |
| S&P 500–Russell 2000 | +0.013033 | +0.0021722 | +0.0026067 |
| S&P 500–Nikkei | −0.005267 | −0.0008778 | −0.0010533 |
| Russell 2000–Nikkei | −0.010267 | −0.0017111 | −0.0020533 |

### (d) Correlation coefficients

```
r(i,j) = Cov(i,j) / (σᵢ σⱼ)
```

| Pair | **r** | Reading |
|---|---|---|
| DJIA–S&P 500 | **+0.9723** | Almost perfectly positively correlated |
| S&P 500–Russell 2000 | **+0.9579** | Very strongly positively correlated |
| S&P 500–Nikkei | **−0.8964** | Strongly negatively correlated |
| Russell 2000–Nikkei | **−0.8391** | Strongly negatively correlated |

All four are **identical whichever divisor you used** — the `n` cancels top and bottom. Use this as your arithmetic check: if your population and sample correlations differ, you have used mismatched divisors somewhere.

**Interpretation:** the three US indexes are near-substitutes for one another (r ≈ 0.96–0.97) because they price the same economy. The Nikkei, a different economy in a different currency, moves **against** them in this sample. That is the pairing that will do diversification work.

### (e) Two equal-weighted portfolios

```
E(R_port) = 0.5 E(Rᵢ) + 0.5 E(Rⱼ)
σ²_port   = (0.5)²σᵢ² + (0.5)²σⱼ² + 2(0.5)(0.5) Cov(i,j)
```

**Portfolio 1 — S&P 500 + Russell 2000, 50/50:**

```
E(R_port) = 0.5(0.016667) + 0.5(0.026667) = 0.021667 = 2.167%

Sample:      σ² = 0.25(0.0013067) + 0.25(0.0056667) + 0.5(0.0026067)
                = 0.00032667 + 0.00141667 + 0.00130333
                = 0.00304667
             σ  = 5.520%

Population:  σ² = 0.00253889   →   σ = 5.039%
```

**Portfolio 2 — S&P 500 + Nikkei, 50/50:**

```
E(R_port) = 0.5(0.016667) + 0.5(0.031667) = 0.024167 = 2.417%

Sample:      σ² = 0.25(0.0013067) + 0.25(0.0010567) + 0.5(−0.0010533)
                = 0.00032667 + 0.00026417 − 0.00052667
                = 0.00006417
             σ  = 0.801%

Population:  σ² = 0.00005347   →   σ = 0.731%
```

### Discussion of the two portfolios

| | E(R_port) | σ_port (sample) | Weighted avg of SDs | Benefit |
|---|---|---|---|---|
| S&P + Russell | 2.167% | **5.520%** | 5.571% | 0.05 pp |
| S&P + Nikkei | **2.417%** | **0.801%** | 3.433% | **2.63 pp** |

**The S&P + Nikkei portfolio wins on both dimensions simultaneously** — a higher expected return (2.417% vs 2.167%) *and* about one-seventh of the risk (0.801% vs 5.520%). It is not a trade-off; Portfolio 1 is simply dominated.

**Why:** correlation, and nothing else. At `r = +0.958` the S&P/Russell combination behaves almost exactly like a single asset — its portfolio SD (5.520%) is barely below the 5.571% weighted average of its components. Combining two things that are the same thing is not diversification. At `r = −0.896` the Nikkei's bad months are the S&P's good months, so the deviations offset inside the portfolio and most of the volatility disappears.

Notice also that **Portfolio 2 is less risky than either of its components** (0.801% against 3.615% and 3.251%). Only a strongly negative correlation can do that.

> **Do not carry the "diversification" conclusion outside the sample.** Six months of data produced `r = −0.90` between the S&P 500 and the Nikkei. Over long horizons developed equity markets are reliably **positively** correlated. The correct exam sentence is: *"within this sample the Nikkei provides a large diversification benefit, but six observations cannot establish a stable long-run correlation."*

---

## Two defects in the supplied template

Worth knowing before you open it and assume your own work is wrong.

| Cell | Issue |
|---|---|
| `Ch6 P7` sheet, **C23** | `=SQRT(B22)` — but Portfolio Variance is computed in **C22**, not B22. As shipped, this returns 0 (or an error). Correct it to `=SQRT(C22)`. |
| `Ch6 P1` sheet, **C11 / C13** | `=sumproduct()` and `=mmult(transpose(),)` are placeholders with no arguments. Fill in `=SUMPRODUCT(A2:A7,B2:B7)` and `=MMULT(TRANSPOSE(A2:A7),B2:B7)`. |

The document header also reads **"Tutorial 2 Solutions"** while the file contains only questions, and the same stock is spelled "Madison" in the question sheet and "Maddison" in the workbook. Cosmetic, but do not assume you have the wrong file.

---

## ✅ Checkpoint

1. Two assets have `r = +1.0`. What is `σ_port` at any set of weights?
2. Your population and sample correlation coefficients for the same pair of series come out different. What have you done wrong?
3. A portfolio's standard deviation is lower than the standard deviation of *both* its components. What does that tell you about the correlation?
4. Six probabilities sum to 1.00 and you want `E(R)`. Why is the unweighted mean of the returns wrong?

<details><summary>Answers</summary>

1. Exactly the **weighted average of the individual standard deviations**, `w₁σ₁ + w₂σ₂`. This is the only correlation at which there is **no** diversification benefit.
2. You have used **mismatched divisors** — e.g. a population covariance over sample standard deviations. Correlation is invariant to the choice of `n` vs `n − 1` only when the *same* divisor is used in all three inputs.
3. The correlation must be **substantially negative** (or the weights very unequal with a low correlation). A positive correlation can push portfolio risk below the *weighted average*, but pushing it below **both** components requires the deviations to offset — Problem 7's S&P + Nikkei portfolio at `r = −0.896` and Problem 4's `r = −0.60` case are the two examples here.
4. Because the outcomes are **not equally likely**. `E(R) = Σ PⱼRⱼ` weights each outcome by its probability; the unweighted mean silently assumes every `Pⱼ = 1/n`. In Problem 1 that error gives 10.00% instead of 11.00%.
</details>

---

*All figures above were computed from the question data and independently re-verified in Python. The supplied `Tutorial 2 SV-1.xlsx` contains no answers to reconcile against; where a convention is genuinely open (the `n` vs `n − 1` divisor) both readings are given rather than one being chosen silently. Confirm the house convention with your tutor.*
