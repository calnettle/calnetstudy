# TOPIC 2 — Portfolio Management

*(Reilly & Brown, Chapter 6)*

## 2.1 Background Assumptions

As investors, we want to **maximise returns for a given level of risk**.

Three framing points:

1. Our portfolio includes **all** of our assets and liabilities.
2. The **relationship between the returns** for assets in the portfolio is critical.
3. **A good portfolio is not simply a collection of individually good investments.**

> Point 3 is the entire thesis of Chapter 6. Two individually excellent assets that move together give you far less than two mediocre assets that move oppositely.

### Risk aversion

Given a choice between two assets with **equal rates of return**, risk-averse investors select the asset with the **lower level of risk**.

**Evidence for risk aversion:**
- Many investors purchase insurance — life, automobile, health, disability income.
- Bond yields **increase** with risk classification, from AAA → AA → A → BBB…

**But not all investors avoid risk all the time.** It may depend on the amount of money involved: people happily risk small amounts (lottery tickets) while insuring against large losses.

### Components of risk

| Component | Meaning | Example |
|---|---|---|
| **Uncertainty** | Risk means uncertainty of future outcomes | Google stock's future value is uncertain → risky. A six-month CD has a certain future value → not risky. |
| **Probability** | Risk is examined through the probability of an adverse outcome | "There is a 40% chance you will receive a return less than 8%." |

---

## 2.2 Markowitz Portfolio Theory

**Professor Harry Markowitz (1952, 1959)** — the foundation of modern portfolio theory. His contribution:

1. **Quantifies risk.**
2. **Derives the expected rate of return** for a portfolio of assets and an expected risk measure.
3. Shows that the **variance of the rate of return is a meaningful measure of portfolio risk**.
4. Derives the **formula for computing the variance of a portfolio**, showing how to effectively diversify.

### The five underlying assumptions about investors

Investors:

1. Consider investments as **probability distributions of expected returns** over some holding period.
2. **Maximise one-period expected utility**, which demonstrates **diminishing marginal utility of wealth**.
3. Estimate the risk of the portfolio on the basis of the **variability of expected returns**.
4. Base decisions **solely on expected return and risk** (i.e. the first two moments of the distribution).
5. Prefer **higher returns for a given risk level**; similarly, for a given level of expected return, prefer **less risk to more risk**.

> **Memorise these five.** They're a classic short-answer question, and every criticism of MPT attacks one of them (e.g. assumption 4 ignores skewness and kurtosis; assumption 1 assumes returns are normally distributed).

### Definition of an efficient portfolio

Using those five assumptions, a single asset or portfolio of assets is **efficient** if:

- **no other asset or portfolio offers a higher expected return with the same (or lower) risk**, or
- **lower risk with the same (or higher) expected return.**

---

## 2.3 Alternative Measures of Risk

| Measure | Description |
|---|---|
| **Variance / standard deviation** of expected return | The standard. Measures total dispersion. |
| **Range of returns** | Simple max − min. Crude; ignores distribution shape. |
| **Returns below expectations** | Only downside deviations count. |
| **Semi-variance** | A measure that considers **only deviations below the mean**. |

These downside measures implicitly assume investors want to **minimise the damage from returns below a given target rate**.

### Why standard deviation wins

1. It is **intuitive** — same unit of measure as returns (%).
2. It is a **correct and widely recognised** risk measure (measures **total risk**).
3. It is used in **most theoretical asset pricing models**.

> **Semi-variance formula distinguisher:** if the formula only sums squared deviations where `Rᵢ < E(R)` (or `Rᵢ < R_benchmark`), it's semi-variance. If it sums *all* squared deviations, it's variance.

---

## 2.4 Expected Return

### Individual asset

The sum of potential returns multiplied by the corresponding probability (weighted average):

```
E(Rᵢ) = Σ Pⱼ × Rⱼ
```

### Portfolio

The **weighted average of the expected rates of return** for the individual investments:

```
E(R_port) = Σ wᵢ × E(Rᵢ)
```

where `wᵢ` = proportion of portfolio value in asset *i*, and `Σwᵢ = 1`.

> **Critical asymmetry — this is the single most important idea in Topic 2:**
> **Portfolio RETURN is a simple weighted average of the components.**
> **Portfolio RISK is NOT.** It's almost always *less* than the weighted average of the individual standard deviations.
> That gap is the **diversification benefit**, and it's free.

---

## 2.5 Individual Investment Risk Measure

```
σ² = Σ Pᵢ [ Rᵢ − E(R) ]²

σ  = √σ²
```

Variance measures the variation of possible rates of return `Rᵢ` from the expected rate of return `E(R)`, where `Pᵢ` is the probability of that rate of return.

---

## 2.6 Covariance of Returns — *direction*

**Covariance** = a measure of the degree to which two variables **"move together"** relative to their individual mean values over time.

For two assets *i* and *j*:

```
Cov(i,j) = E{ [Rᵢ − E(Rᵢ)] × [Rⱼ − E(Rⱼ)] }
```

**Sample calculation** (from a series of *n* observations):

```
Cov(i,j) = Σ [Rᵢ,ₜ − E(Rᵢ)][Rⱼ,ₜ − E(Rⱼ)] / (n − 1)
```

> **Why n−1 and not n?** The lecture is explicit: for the 2021 monthly example there are 12 observations but the divisor is **11**. This is because the data represents a **sample** of the population of index values — it's a correction factor to account for the **degrees of freedom** available in a sample, given a known (estimated) mean.

### Interpreting covariance

| Sign | Meaning |
|---|---|
| **Positive** | The two assets tend to move in the **same** direction relative to their means |
| **Negative** | They tend to move in **opposite** directions |
| **Zero** | No linear relationship |

**The limitation:** covariance tells you the **direction** of the relationship but **not the strength**, because its magnitude depends on the units and volatility of the underlying series. A covariance of 0.0004 sounds tiny but could represent a strong relationship. That's why we standardise it into correlation.

### Worked example — S&P 500 vs Barclays US Aggregate Bond Index, 2021

*(Exhibits 6.4–6.7)*

Twelve monthly returns for each index. The computation:

1. Find `E(R)` for each series (arithmetic mean of the 12 monthly returns).
2. For each month, compute `[R_stocks − E(R_stocks)]` and `[R_bonds − E(R_bonds)]`.
3. Multiply the two deviations together for each month.
4. Sum the 12 products and **divide by 11 (n−1)**.

**Result:** a **positive** covariance → indicates a positive relationship between the two indices.

---

## 2.7 Correlation Coefficient — *strength*

The correlation coefficient is obtained by **standardising** covariance — dividing it by the **product of the individual standard deviations**:

```
r(i,j) = Cov(i,j) / (σᵢ × σⱼ)
```

Rearranged (you'll use this constantly):

```
Cov(i,j) = r(i,j) × σᵢ × σⱼ
```

### Range and interpretation

The coefficient varies in the range **+1 to −1**.

| Value | Meaning |
|---|---|
| **+1.0** | **Perfect positive correlation.** Returns move together positively and completely linearly. **No diversification benefit.** |
| **0** | No linear relationship. Substantial diversification benefit. |
| **−1.0** | **Perfect negative correlation.** Returns move together in a completely linear manner but in **opposite directions**. Maximum diversification benefit. |

**Any correlation < +1.0 delivers a diversification benefit.** The lower the correlation, the greater the benefit.

### The 2021 result

```
r = 0.181
```

A **weak positive correlation** between the S&P 500 and the Barclays Bond index.

**Because r < 1, there is a stronger diversification benefit from combining them in a portfolio.**

### The scatterplot (Exhibit 6.8)

Plotting monthly stock returns (x) against bond returns (y) gives a regression line with:

- **Slope** — the sensitivity of one to the other.
- **Intercept** — the expected return of one when the other is zero.
- **R² (square of the correlation)** — the **goodness of fit** measure, between 0 and 1. Here R² = 0.181² = **0.033**, i.e. only ~3.3% of the variation in bond returns is explained by stock returns. Very weak.

> **Correlation vs R² trap:** correlation can be negative; R² cannot. R² = r². A correlation of −0.9 and +0.9 both give R² = 0.81.

---

## ✅ Checkpoint 1

1. An efficient portfolio offers _____ expected returns for the same (or lower) risk, **or** ____ risk with the same (or higher) expected returns.
2. `σᵢ² = Σ Pᵢ[Rᵢ − E(Rᵢ)]²` — this looks like a formula for ____________
3. `Σ Pᵢ[Rᵢ − R_benchmark]²` where only `Rᵢ < R_benchmark` — this looks like a formula for semi-variance because _________

<details><summary>Answers</summary>

1. **Higher** expected returns / **lower** risk
2. The **variance of rates of return for asset i**
3. Because it **only considers deviations below the mean (or below a benchmark/target rate)** — it ignores upside deviations, treating only downside outcomes as risk
</details>

---

## 2.8 Standard Deviation of a Portfolio

### The general formula

```
σ_port = √[ Σᵢ wᵢ²σᵢ²  +  Σᵢ Σⱼ≠ᵢ wᵢ wⱼ Cov(i,j) ]
```

where:

| Symbol | Meaning |
|---|---|
| `σ_port` | Standard deviation of the portfolio |
| `wᵢ` | Weight of individual asset *i* — determined by the **proportion of value** in the portfolio |
| `Cov(i,j)` | Covariance between the rates of return for assets *i* and *j*, where `Cov(i,j) = rᵢⱼ σᵢ σⱼ` |
| `σᵢ²` | Variance of rates of return for asset *i* |

### Two-asset case — the one you must be able to do cold

```
σ²_port = w₁²σ₁² + w₂²σ₂² + 2 w₁ w₂ Cov(1,2)

        = w₁²σ₁² + w₂²σ₂² + 2 w₁ w₂ r₁₂ σ₁ σ₂
```

```
σ_port = √( w₁²σ₁² + w₂²σ₂² + 2 w₁ w₂ r₁₂ σ₁ σ₂ )
```

**Any asset in a portfolio can be described by two characteristics:**
1. Its expected rate of return
2. Its expected standard deviation of returns

**The correlation (measured by covariance) affects the portfolio standard deviation.**

**Low correlation reduces portfolio risk while not affecting the expected return.** ← This is the free lunch.

### Key results

- Assets may differ in expected rates of return **and** individual standard deviations.
- **Any correlation < 1 reduces portfolio risk.**
- Combining two assets with **+1.0** correlation will **not** reduce the portfolio standard deviation.
- Combining two assets with **−1.0** correlation **may** reduce the portfolio standard deviation **to zero**.

> ⚠️ **Note the word "may".** With r = −1.0 you get σ_port = 0 **only at the right weights**. With equal (50/50) weights and *different* individual SDs, you do **not** get zero — you get `|w₁σ₁ − w₂σ₂|`. The lecture makes this point explicitly about Portfolio E.
>
> The zero-risk weight when r = −1 is: `w₁ = σ₂ / (σ₁ + σ₂)`

---

## 2.9 Worked Example — Correlation and Portfolio Risk

*(Structure of Exhibits 6.12–6.13. Illustrative figures.)*

Two assets, equal weights (w₁ = w₂ = 0.50):

| | E(R) | σ |
|---|---|---|
| Asset 1 | 10% | 7% |
| Asset 2 | 20% | 10% |

**Portfolio expected return** — the same in every case, because the weights don't change:

```
E(R_port) = 0.5(0.10) + 0.5(0.20) = 15%
```

**Portfolio standard deviation** — only the covariance term changes:

```
σ²_port = (0.5)²(0.07)² + (0.5)²(0.10)² + 2(0.5)(0.5)(r)(0.07)(0.10)
        = 0.001225 + 0.002500 + 0.0035r
        = 0.003725 + 0.0035r
```

| Portfolio | r₁₂ | σ²_port | **σ_port** |
|---|---|---|---|
| A | **+1.00** | 0.007225 | **8.50%** |
| B | +0.50 | 0.005475 | **7.40%** |
| C | 0.00 | 0.003725 | **6.10%** |
| D | −0.50 | 0.001975 | **4.44%** |
| E | **−1.00** | 0.000225 | **1.50%** |

### Reading the results

- **Portfolio A (r = +1.00):** the portfolio SD is exactly the **weighted average** of the individual SDs — `0.5(7%) + 0.5(10%) = 8.5%`. **No diversification benefit whatsoever.**
- **Portfolios B–E:** each combination gives a **lower portfolio SD than Asset 2** and a **higher SD than Asset 1**, at the same 15% expected return.
- **Portfolio E (r = −1.00):** perfect negative correlation. Because the weights are equal but the asset SDs differ, this does **not** produce a zero portfolio SD. It gives `|0.5(7%) − 0.5(10%)| = 1.5%` — the **same portfolio return for the lowest risk**. Full diversification benefit.

> **To actually get σ = 0 with r = −1:** set `w₁ = σ₂/(σ₁+σ₂) = 0.10/0.17 = 0.588` in Asset 1 and 0.412 in Asset 2.

### Constant correlation with changing weights (Exhibit 6.13)

Now hold correlation at r = 0 and vary the weights from 100% Asset 1 → 100% Asset 2:

- At w₁ = 1.00 → portfolio return and risk are **the same as Asset 1**.
- At w₁ = 0.00 → **the same as Asset 2**.
- In between → a **curved** locus bulging left toward lower risk.

**Minimum variance portfolio** (when r = 0):

```
w₁* = σ₂² / (σ₁² + σ₂²) = 0.0100 / (0.0049 + 0.0100) = 0.671
```

→ 67.1% in Asset 1, 32.9% in Asset 2, giving σ_port = **5.74%** — lower than *either* asset alone, at a 13.29% expected return.

### The big picture

- Portfolios with **perfect positive correlation show no benefit from diversification** — the locus is a straight line.
- The risk/return profile moves from points closer to **Asset 2** (where it has a higher weighting) toward **Asset 1**.
- With **progressively lower correlation** (all the way to perfectly negative), portfolios start to return **the same or higher return for lower risk** — the curve bows further to the left.

---

## 2.10 Extending to n Assets

The two-asset results extend directly to a portfolio of *n* assets.

**As more assets are added, generally, risk will be reduced, everything else being the same.**

The computing procedure is the same, but the **amount of computation increases rapidly**. Moving from two assets to three roughly **doubles** the computation.

### The counting rule — know this cold

For an **n-security portfolio**:

```
Variance terms:    n
Covariance terms:  n(n − 1) / 2   (unique pairs)
Total terms:       n(n + 1) / 2
```

| n | Variances | Unique covariances |
|---|---|---|
| 2 | 2 | 1 |
| 3 | 3 | 3 |
| 10 | 10 | 45 |
| **100** | **100** | **4,950** |

Beyond three assets this requires **matrix multiplication** — hence the Topic 1 maths refresher.

**Excel:** build a covariance matrix using **Data Analysis → Covariance**, then `σ²_port = wᵀ Σ w` via nested `=MMULT()`.

---

## 2.11 Estimation Issues

**Results of portfolio allocation depend on accurate statistical inputs.** You must estimate:

- Expected returns
- Standard deviations
- **Correlation coefficients — among the entire set of assets**

With 100 assets that's **4,950 correlation estimates**.

**Estimation risk** = the potential for errors in these inputs. Small input errors can produce wildly different "optimal" portfolios — this is the practical Achilles heel of Markowitz optimisation.

### The single-index solution

If all securities are similarly related to a **market index** (i.e. the index is a good proxy for returns), and a **βᵢ** is derived for each one, then the correlation coefficient between two securities *i* and *j* can be expressed as:

```
r(i,j) = (βᵢ βⱼ σ²_market) / (σᵢ σⱼ)
```

**The payoff:** this reduces the number of covariance terms for a 100-asset portfolio from **4,950 down to 100** — one βᵢ per asset.

> This is the direct bridge to **Topic 3 (Asset Pricing Models)**. Beta is introduced here as a computational shortcut before it becomes a risk measure in the CAPM.

---

## 2.12 The Efficient Frontier

**Definition:** the efficient frontier represents that set of portfolios with:

- the **maximum rate of return for every given level of risk**, or
- the **minimum risk for every level of return**.

**Efficient frontiers represent portfolios of investments rather than individual securities** — *except* for the two endpoints: the asset with the highest return and the asset with the lowest risk.

### Dominance (Exhibit 6.14)

- **Portfolio A dominates Portfolio C** because it has an **equal rate of return but substantially less risk**.
- **Portfolio B dominates Portfolio C** because it has **equal risk but a higher expected rate of return**.

Portfolio C is therefore **inefficient** and no rational (risk-averse) investor would hold it.

### Shape of the curve

The frontier is **concave** — the slope **decreases steadily as you move upward**. Each additional unit of risk you accept buys you **less and less** additional return. This is **diminishing marginal return for risk**.

> **Everything below/right of the frontier is attainable but inefficient. Everything above/left is unattainable.**

---

## ✅ Checkpoint 2

1. A fully diversified portfolio may be indicated by a correlation coefficient of _______
2. A correlation coefficient of < 1.0 means that the portfolio is expected to provide ______ for lower risk
3. The curvature of the Efficient Frontier shows that there is ________ return for risk beyond a certain point

<details><summary>Answers</summary>

1. **−1.0** (perfect negative correlation)
2. **The same (or higher) return** — i.e. an equal or better return
3. **Diminishing (marginal)** return
</details>

---

## 2.13 Efficient Frontier and Investor Utility

An individual investor's **utility curve** specifies the **trade-offs he/she is willing to make between expected return and risk**.

Two curves interact:

1. The **efficient frontier** — its slope decreases steadily as you move upward (the marginal utility of each additional unit of risk falls).
2. The investor's **utility curves** (indifference curves) — each represents a constant level of satisfaction.

**The interaction of these two curves determines the particular portfolio selected by an individual investor.**

### The optimal portfolio

**The optimal portfolio lies at the point of tangency between the efficient frontier and the utility curve with the highest possible utility.**

- Investor **X**, with steep utility curves, achieves highest utility at portfolio **X**.
- Investor **Y**, with flatter utility curves, achieves highest utility at portfolio **Y**.

**Which investor is more risk averse?** → **Investor X.** Steeper utility curves mean the investor demands a **large** increase in return to accept a **small** increase in risk. Investor Y's flatter curves mean they'll tolerate more risk for extra return, so their tangency point sits further right/up the frontier.

### The utility function

```
U = E(r) − 0.5 × A × σ²
```

| Symbol | Meaning |
|---|---|
| `U` | Utility |
| `E(r)` | Expected return on the portfolio |
| `A` | **Risk aversion coefficient**, obtained via the risk tolerance questionnaire |
| `σ²` | Risk level of the portfolio (measured by the **variance** of portfolio return) |

**Values of A:**

| Investor type | A |
|---|---|
| Conservative | ~**7** |
| Aggressive | ~**1** |
| Risk-neutral | 0 |

> **Note the σ² — it's VARIANCE, not standard deviation.** Squaring is the single most common error here. Also note: higher A → the risk term is penalised more heavily → the investor picks a lower-risk portfolio.

**Worked micro-example:**

Portfolio with E(r) = 15%, σ = 20% (σ² = 0.04):

```
Conservative (A = 7):  U = 0.15 − 0.5(7)(0.04)  = 0.15 − 0.14 = 0.01
Aggressive   (A = 1):  U = 0.15 − 0.5(1)(0.04)  = 0.15 − 0.02 = 0.13
```

The same portfolio delivers wildly different utility depending on risk aversion — which is why the tangency point differs by investor.

**Certainty equivalent:** U is expressed in return units, so U is the **guaranteed** return that would make the investor indifferent to the risky portfolio. The conservative investor above would swap this 15%-return portfolio for a certain **1%**.

---

## 2.14 Setting Up and Evaluating an Investment Strategy

*(Preparing for Assessment 2)*

### Before you start — investment philosophy

Before deciding on a strategy, reflect on what kind of investor you are:

- **Value vs Growth** investor?
- **Index** investor?
- Investing along **socially responsible** (ESG) lines?

### Constructing the strategy

1. **Ensure your investment strategy can be stated as a clear process that could be followed by anyone** choosing to use the strategy. (Replicability is being marked.)
2. Use an **"in-sample" period** to construct and refine your strategy.
3. ⚠️ **Be careful not to "overfit" your model** — it will not work so well in the out-of-sample period.

### Evaluating the strategy

1. Use an **"out-of-sample" period** to test the strategy. This can be **any time period after the in-sample period**.
2. Calculate the **annual return and risk** from implementing the strategy.

### Other factors to consider

- **How often did you trade?** (turnover)
- **How much would it cost for each of those trades?** (brokerage, spread, market impact)
- **Would you need to pay taxes on these earnings?** (CGT, dividend imputation)

> These three questions are the difference between a paper return and a real one. A strategy that looks great gross of costs can be comfortably negative after 200 trades a year.

---

## 2.15 Topic 2 Summary

- A good portfolio is **not** simply a collection of individually good investments — the **relationships** between assets matter.
- **Portfolio return** = weighted average of component returns. **Portfolio risk ≠** weighted average of component risks.
- **Covariance** gives the **direction** of a relationship; **correlation** standardises it to give the **strength** (range −1 to +1).
- Any correlation **< +1.0** produces a diversification benefit. At **+1.0** there is none; at **−1.0** it is maximised.
- Estimation errors with portfolio risk/return calculations may be reduced by **relating each security to an index** (where it is a reasonable proxy) instead of calculating each correlation/covariance between every pair of securities — reducing 4,950 terms to 100 for a 100-asset portfolio.
- The **efficient frontier** represents a set of portfolios with the maximum rate of return for every given level of risk, or the minimum risk for every level of return.
- The slope of the efficient frontier **decreases steadily** as you move upward — diminishing marginal utility of each additional unit of risk.
- The **optimal portfolio** is the tangency point of the efficient frontier and the investor's highest attainable utility curve:

```
U = E(r) − 0.5 × A × σ²
```
