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

*(Exhibits 6.4–6.7; numbers from `Topic 2 Returns and Risk_solved.xlsx`)*

Twelve monthly returns for each index, January–December 2021.

**Step 1 — the two means:**

```
E(R_stocks) = +0.021700  = +2.1700%   per month
E(R_bonds)  = −0.001267  = −0.1267%   per month
```

**Step 2 — for each month form `[R_s − E(R_s)] × [R_b − E(R_b)]` and sum.** September is the largest single contributor: stocks fell 4.65% (a −6.82 pp deviation) while bonds fell 0.87% (a −0.74 pp deviation), and two negatives multiply to a **positive** 0.000507.

```
Σ of the 12 cross-products = 0.0005215
```

**Step 3 — divide by n − 1 = 11:**

```
Cov(stocks, bonds) = 0.0005215 / 11 = 0.00004741
```

**Result:** **positive** — a positive relationship between the two indices during 2021.

> **What the sign does and does not tell you.** A positive covariance means the two series were, on balance, above or below **their own means** at the same time. It does **not** mean both rose — bonds *lost* money on average in 2021. Covariance is measured against each series' mean, not against zero.

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

### The 2021 result, standardised

Take the covariance from §2.6 and the two **sample** standard deviations of the same twelve monthly returns:

```
σ_stocks = 3.189608%      (variance 0.00101736)
σ_bonds  = 0.819693%      (variance 0.00006719)

r = 0.00004741 / (0.03189608 × 0.00819693)
  = 0.00004741 / 0.00026145
  = 0.1813
```

A **weak positive correlation**. Because `r < 1`, there is a substantial diversification benefit from combining them.

> **Every input must use the same divisor.** Excel's `CORREL()` returns 0.1813 here, and so does `COVARIANCE.S / (STDEV.S × STDEV.S)`. Mix a *population* covariance with *sample* standard deviations and you get 0.1662 — a number that is not any correlation at all. The `n − 1` cancels only when it appears in all three inputs.

### The same pair over twenty-two years

*(`Topic 2 US Equities vs Bonds-1_for charts.xlsx` — S&P 500 and the US Aggregate Bond index, **daily** total returns, 30 Apr 2002 to 30 Jul 2024, n = 5,783)*

| | Equities | Bonds |
|---|---|---|
| Mean **daily** return | 0.042681% | 0.012821% |
| Annualised, `(1+r̄)²⁵² − 1` | **11.353%** | **3.283%** |
| **Daily** standard deviation | 1.193651% | 0.256222% |
| Annualised, `σ_d × √252` | **18.949%** | **4.067%** |
| Daily covariance | \-0.0000076333 | |
| **Correlation** | **−0.2496** | |

**The correlation is *negative* over the long sample and *positive* in 2021.** Same two asset classes, opposite sign. Nothing was computed wrongly — the relationship genuinely differs by period and by observation frequency.

> ⚠️ **This is the estimation-risk problem made concrete, and it is a favourite exam prompt.** A Markowitz optimiser fed `r = +0.181` will build a materially different portfolio from one fed `r = −0.250`. The correlation you use is an *estimate* from a chosen sample window and frequency, not a property of the assets. Twelve monthly observations is a very thin basis for a decision; 5,783 daily ones is better but still just history.

**Annualisation rules used above — memorise all three:**

```
Returns:            (1 + r̄_period)^(periods per year) − 1
Standard deviation: σ_period × √(periods per year)
Variance:           σ²_period × (periods per year)
```

Returns compound; standard deviation scales with the **square root** of time because *variance* is what is additive. Multiplying a daily σ by 252 instead of √252 inflates it roughly 16-fold.

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

At `r = +1.00` that locus would instead be a **straight line** — no bulge, no benefit. The lower the correlation, the further the curve bows to the left.

**Minimum variance portfolio** (when r = 0):

```
w₁* = σ₂² / (σ₁² + σ₂²) = 0.0100 / (0.0049 + 0.0100) = 0.671
```

→ 67.1% in Asset 1, 32.9% in Asset 2, giving σ_port = **5.74%** — lower than *either* asset alone, at a 13.29% expected return.

### Worked example on real data — two ASX stocks

*(`Topic 2 Diversification Benefits-2-1.xlsx` — 157 monthly total returns, July 2011 to July 2024)*

The workbook labels its two columns **AGL** and **CBA**. Annualised inputs:

| | Annual return | Annual σ |
|---|---|---|
| AGL | 7.983% | 16.842% |
| CBA | 14.977% | 16.993% |
| **Correlation** | **0.4767** | |
| **Annual covariance** | `0.4767 × 0.16842 × 0.16993 =` **0.013644** | |

Now sweep the weights, using `σ²_port = w₁²σ₁² + w₂²σ₂² + 2w₁w₂Cov`:

| w_AGL | Portfolio return | **Portfolio σ** | Return ÷ risk |
|---|---|---|---|
| 1.0 | 7.983% | 16.842% | 0.4740 |
| 0.7 | 10.081% | 14.909% | 0.6761 |
| **0.5** | **11.480%** | **14.537%** | 0.7897 |
| 0.3 | 12.878% | 14.978% | 0.8598 |
| **0.1** | 14.277% | 16.165% | **0.8832** ← highest |
| 0.0 | 14.977% | 16.993% | 0.8813 |

**Three things to take from this table:**

1. **The 50/50 portfolio is less risky than either stock on its own** — 14.54% against 16.84% and 16.99%. The weighted average of the two SDs is 16.92%, so diversification bought **2.38 percentage points** of risk for nothing.
2. **The minimum-risk mix is close to 50/50** (`w_AGL = 0.509`, σ = 14.536%), because the two SDs are almost identical here. When two assets have similar volatility, the minimum-variance portfolio sits near the middle.
3. **Minimum risk is not the goal.** Return ÷ risk keeps improving past the minimum-variance point, peaking around **10% AGL / 90% CBA**. The risk-minimising portfolio and the best risk-adjusted portfolio are different portfolios.

> **The ratio in the last column is a "modified" Sharpe ratio — return over risk, with no risk-free rate subtracted.** A true Sharpe ratio is `(R_p − R_f)/σ_p`. Subtracting `R_f` reorders the ranking, so do not quote one as the other. The workbook is explicit that it has left `R_f` out.

> ⚠️ **Source flag.** In this workbook's `Data` tab, the column headed *AGL ENERGY – TOT RETURN IND* carries the Datastream code **`A:TLS(RI)`** — Telstra's code, not AGL's. The name and the code contradict each other. The arithmetic is internally consistent, but the **identity of the first stock is uncertain**; do not cite these as AGL's figures without checking.

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

### The matrix form, and where it comes from

*(`Topic 2 Covariance Matrix.docx` derives this term by term)*

```
σ²_port = Σᵢ Σⱼ wᵢ wⱼ Cov(rᵢ, rⱼ)          where Cov(rᵢ, rᵢ) = Var(rᵢ)
```

Expand the double sum for `n = 2` and you get four terms, two of which are identical:

```
σ²_p = w₁w₁Cov(r₁,r₁) + w₁w₂Cov(r₁,r₂) + w₂w₁Cov(r₂,r₁) + w₂w₂Cov(r₂,r₂)
     = w₁²σ₁² + w₂²σ₂² + 2w₁w₂Cov(r₁,r₂)
```

That is where the **2** in the two-asset formula comes from: `Cov(1,2)` and `Cov(2,1)` are the same number, counted twice. For `n = 3` the same expansion gives nine terms — three variances and **three** distinct covariances, each doubled. In matrix form, for any `n`:

```
σ²_port = wᵀ Σ w
```

with `w` the column vector of weights and `Σ` the **full square symmetric** covariance matrix.

### Building the matrix in Excel

*(`Topic 2 Covariance Matrix-1-1.xlsx` — **187 ASX stocks**, 60 monthly returns, Jan 2019 – Dec 2023)*

1. Convert the return-index series to returns: `= RI_t / RI_{t−1} − 1`.
2. **Data → Data Analysis → Covariance** over the whole block of returns.
3. Excel returns a **lower-triangular** matrix — 17,578 numbers for 187 assets (`n(n+1)/2`), with the variances on the diagonal and each covariance appearing **once**.
4. **Mirror it into a full square before using it.** `MMULT` cannot read a half-empty matrix: it will treat the blank upper triangle as zeros and silently understate the portfolio variance. The workbook does exactly this — the sheet holds the 17,578-cell triangle *and* a second, complete 187 × 187 block (34,969 cells) built by reflecting it.
5. Then `σ²_port = MMULT(MMULT(wᵀ, Σ), w)`.

> ⚠️ **This workbook uses the POPULATION divisor and the 2021 one uses the SAMPLE divisor.** Its diagonal is `=VARP(...)` and Excel's Data Analysis → Covariance tool divides by **n**, with no option to change it. `Topic 2 Returns and Risk_solved.xlsx` uses `COVARIANCE.S` and `STDEV.S`, which divide by **n − 1**. Both files are correct on their own terms and they are not interchangeable. If you build a matrix with Data Analysis and then compute standard deviations with `STDEV.S`, your correlations will be wrong. Pick one convention per workbook and label it.

### Worked example — three assets

*(`Topic 2 3 Assets_solve.xlsx` — BHP, Woolworths and CAR Group, 173 monthly returns, Nov 2009 – Mar 2024)*

**Annualised inputs:**

| | Annual return | Annual σ |
|---|---|---|
| BHP | 11.923% | 25.254% |
| WOW | 7.925% | 16.840% |
| CAR | 24.064% | 26.087% |

**Monthly covariance matrix** (sample, `n − 1`; the diagonal is the variance):

```
            BHP          WOW          CAR
BHP    0.00531483   0.00078857   0.00098662
WOW    0.00078857   0.00236322   0.00128763
CAR    0.00098662   0.00128763   0.00567101
```

Standardised, these are correlations of **0.223** (BHP–WOW), **0.180** (BHP–CAR) and **0.352** (WOW–CAR) — all low, so there is real diversification to be had.

**A 30 / 30 / 40 portfolio:**

```
σ²_monthly = wᵀ Σ w        = 0.00228615
σ²_annual  = 0.00228615×12 = 0.02743379
σ_annual   = √0.02743379   = 16.563%
```

Against a weighted average of the three annual SDs of **23.063%**, that is a **6.50 percentage point** diversification benefit.

> ⚠️ **The two "portfolio return" figures in this workbook differ, and both are right.** Take the weighted average of the three *annualised* returns and you get **15.580%**. Annualise the portfolio's own *monthly* return series and you get **15.382%**. Annualising is `(1+r̄)¹² − 1`, which is non-linear, so averaging-then-annualising and annualising-then-averaging are not the same operation. **Portfolio return is a weighted average of component returns only at a single, common frequency.** Do the weighting on monthly returns, then annualise once.

**Optimising with Solver** (risk-free rate 1.35%):

| Objective | BHP | WOW | CAR | Return | σ | Sharpe |
|---|---|---|---|---|---|---|
| Minimise σ | 22.81% | 62.81% | 14.38% | 11.158% | **14.897%** | 0.6584 |
| Maximise Sharpe | 23.57% | 6.48% | 69.95% | 20.157% | 20.629% | **0.9117** |

The minimum-variance portfolio piles into the lowest-volatility asset (WOW); the maximum-Sharpe portfolio does close to the opposite, because CAR's return more than pays for its risk. Both lie **on** the efficient frontier — the frontier is the set of all such solutions as the target return is swept.

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

## 2.13 Summary — the measurement half

- A good portfolio is **not** simply a collection of individually good investments — the **relationships** between assets matter.
- **Portfolio return** = weighted average of component returns. **Portfolio risk ≠** weighted average of component risks. That gap is the diversification benefit, and it is free.
- **Covariance** gives the **direction** of a relationship; **correlation** standardises it to give the **strength** (range −1 to +1). `Cov(i,j) = rᵢⱼσᵢσⱼ`.
- Any correlation **< +1.0** produces a diversification benefit. At **+1.0** there is none; at **−1.0** it is maximised — but only at the risk-minimising weights, not automatically.
- **The same two assets can show opposite correlations** over different windows and frequencies (S&P vs US bonds: **+0.181** monthly in 2021, **−0.250** daily over 2002–2024). Correlation is an estimate, not a property — this is **estimation risk**.
- **Annualise correctly:** returns compound, `(1+r̄)^m − 1`; variance scales with `m`; standard deviation scales with `√m`. And weight the *periodic* returns before annualising, never the other way round.
- An **n-asset** portfolio needs `n` variances and `n(n−1)/2` unique covariances. Beyond three assets that means matrix algebra: `σ²_port = wᵀΣw`, with `Σ` mirrored into a **full square** first.
- **Be consistent about the divisor.** `n` (population) and `n − 1` (sample) give different variances, standard deviations and covariances — though the correlation is identical, provided all three inputs use the same one.
- Estimation errors may be reduced by **relating each security to an index** instead of estimating every pairwise correlation — 4,950 terms down to 100 for a 100-asset portfolio.
- The **efficient frontier** is the set of portfolios with the maximum return for every level of risk, or the minimum risk for every level of return. Its slope **decreases steadily** as you move upward — diminishing marginal return for risk. Its two endpoints are individual securities; everything between them is a portfolio.
- **Minimum risk ≠ best risk-adjusted return.** The minimum-variance portfolio and the maximum-Sharpe portfolio are different points on the same frontier.

**This document has established what is attainable. It cannot say which point an investor should hold — that needs a statement of their tolerance for risk.** Continue with **doc 03, Topic 2 (continued) — Investor Utility and Investment Strategy**, which covers the utility function, the risk tolerance questionnaire, and how to design and honestly evaluate an investment strategy.
