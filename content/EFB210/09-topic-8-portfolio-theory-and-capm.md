# TOPIC 8 — Portfolio Theory and CAPM

Lecture 8. Ross et al. (2021, 8th ed.) Ch 13.

Topic 7 measured risk. Topic 8 shows that **most of what you measured can be diversified away for free**, and that only the part that cannot be diversified away earns a return. That single result — total risk is not priced, systematic risk is — is the intellectual centre of the unit, and it is what finally tells you where the discount rate you have been handed since Topic 1 actually comes from.

---

## 8.1 Risk, return and the mean–variance approach

**What is risk?** Uncertainty of outcome. The lecture's example: roll a die, get $1 for an odd number and $0 otherwise. You know the full set of outcomes and their probabilities, yet the exact outcome is uncertain — and therefore risky.

**Mean–variance theory.** Under uncertainty, the outcome of a specific event is unknown, but it falls within a **probability distribution** of possible outcomes. The mean–variance approach uses probability theory to characterise that uncertainty by its **first two moments**:

- the **mean** — return
- the **variance** — risk

This is valid under either of two conditions (Tutorial 8 Q1):

1. **Returns are normally distributed**, so the first two moments fully describe the distribution; **or**
2. **Investors have quadratic utility** — utility increases in return and decreases in risk, and higher moments (skewness, kurtosis) do not matter.

If either holds, investors can choose between investments **entirely** on mean and variance, seeking to maximise expected return for a given level of risk, or minimise risk for a given level of return.

---

## 8.2 Building a portfolio

A **portfolio** is created when an investor combines 2 or more assets. Introduced by **Markowitz, H. (1952, Journal of Finance)** — he shared the 1990 Nobel Prize with Sharpe and Miller.

By constructing portfolios of diverse assets — **diversification** — investors can **reduce risk** and therefore maximise return for a given risk, or minimise risk for a given return. The lecture states this can be achieved with as few as **10–20 different investments** spread across different firms, industries, economies and security types.

### The three portfolio formulas

```
Portfolio return (historical):     Rp,ₜ  = Σ wᵢ Rᵢ,ₜ

Portfolio expected return:         E[Rp] = Σ wᵢ E[Rᵢ]

Portfolio variance (N = 2):
    VAR(Rp) = w₁² VAR(R₁) + w₂² VAR(R₂) + 2 w₁ w₂ COV(R₁, R₂)
```

> **In EFB210 the variance formula is only used for a two-asset portfolio.** The lecture says so explicitly. For three or more assets you would need every pairwise covariance, which is out of scope here — but **portfolio expected return and portfolio beta are linear and work for any number of assets.**

### Expected return is linear; variance is not

Tutorial 8 Q2 asks whether "the variance of the sum equals the sum of the variances". **False.**

Expected returns **are** linearly additive:
```
E[Rp] = w_A E[R_A] + w_B E[R_B]
```

Variances are **not**. If portfolio total risk were simply `w_A VAR(R_A) + w_B VAR(R_B)`, **there would be no risk reduction from diversification and no advantage to forming a portfolio at all.** The covariance term is what creates the benefit:

```
VAR(Rp) = w_A² VAR(R_A) + w_B² VAR(R_B) + 2 w_A w_B COV(R_A, R_B)
```

### Substituting correlation for covariance

Since `CORREL(Rᵢ,Rⱼ) = COV(Rᵢ,Rⱼ)/[STD(Rᵢ)STD(Rⱼ)]`:

```
COV(Rᵢ, Rⱼ) = CORREL(Rᵢ, Rⱼ) × STD(Rᵢ) × STD(Rⱼ)

VAR(Rp) = w₁²VAR(R₁) + w₂²VAR(R₂) + 2 w₁ w₂ STD(R₁) STD(R₂) CORREL(R₁, R₂)
```

Use whichever version matches the data you were given.

> **The `2` and the squares are both load-bearing.** `w₁²` not `w₁`, and the cross term carries a factor of 2 because `COV(1,2)` and `COV(2,1)` are the same number counted twice. Dropping the 2 understates variance whenever the correlation is positive; dropping the squares can easily double it.

### Worked example — Lecture 8

An investor puts 60% in Asset A and 40% in Asset B.

| Asset | Weight | Mean | Std. dev. | Covariance with A |
|---|---|---|---|---|
| A | 0.60 | 0.10 | 0.20 | 0.0400 |
| B | 0.40 | 0.15 | 0.30 | 0.0120 |

Note that "covariance with A" for asset A is `0.0400 = 0.20²` — the covariance of a variable with itself is its variance, exactly as Topic 7 showed.

```
E[Rp] = 0.60(0.10) + 0.40(0.15) = 0.06 + 0.06 = 0.12 = 12%

VAR(Rp) = 0.60²(0.20²) + 0.40²(0.30²) + 2(0.60)(0.40)(0.0120)
        = 0.36(0.04) + 0.16(0.09) + 0.48(0.0120)
        = 0.0144 + 0.0144 + 0.00576
        = 0.03456

STD(Rp) = √0.03456 = 0.1859 = 18.59%
```

| | Weight | Mean | Std. dev. |
|---|---|---|---|
| A | 0.60 | 0.10 | 0.20 |
| B | 0.40 | 0.15 | 0.30 |
| **Portfolio** | — | **0.12** | **0.1859** |

**The portfolio's standard deviation (18.59%) is below the weighted average of the two standard deviations** (`0.6 × 0.20 + 0.4 × 0.30 = 24%`). That gap is the diversification benefit, and it exists because the correlation (`0.0120/(0.20 × 0.30) = 0.20`) is less than 1.

### Worked example — Tutorial 8 Q7 — the whole frontier

| | E(R) | STD(R) |
|---|---|---|
| Company A | 20% | 20% |
| Company B | 10% | 14% |

`CORREL(R_A, R_B) = 0.2`.

For `w_A = 0.5`:
```
E(Rp)   = 0.5(0.20) + 0.5(0.10) = 0.15
VAR(Rp) = 0.5²(0.20²) + 0.5²(0.14²) + 2(0.5)(0.5)(0.20)(0.20)(0.14)
        = 0.01 + 0.0049 + 0.0028
        = 0.0177
STD(Rp) = √0.0177 = 0.13304
```

Full table, at full precision:

| Weight A | Weight B | E(R) | STD(R) |
|---|---|---|---|
| 100% | 0% | 20.00% | 20.00% |
| 75% | 25% | **17.50%** | **16.07%** |
| 50% | 50% | 15.00% | 13.30% |
| **25%** | **75%** | **12.50%** | **12.50%** ← lowest risk of the five |
| 0% | 100% | 10.00% | 14.00% |

> **The tutorial's published table rounds to whole percentages, and that hides the point of the question.** It reports 18% and 13% for the 75/25 and 25/75 rows, when the exact expected returns are **17.5%** and **12.5%**. Worse, it prints 13% for *both* the 50/50 and 25/75 standard deviations, when the true values are **13.30%** and **12.50%**. The 25/75 portfolio is the lowest-risk of the five weightings tabulated, and its standard deviation (12.50%) is **below that of either asset on its own** (20% and 14%). Rounding to the nearest whole percent conceals the single most important result on the page. Work to at least two decimals.

Plotting E(R) against STD(R) produces the characteristic backward-bending curve: from B (10%, 14%) the line moves **left** as you add A, turns at the minimum-variance point, then climbs to A (20%, 20%). **Everything below the minimum-variance point is dominated** — you can get the same risk with a higher return.

The exact minimum-variance weighting (not asked for, but useful to know it exists) is `w_A* = (σ_B² − ρσ_Aσ_B)/(σ_A² + σ_B² − 2ρσ_Aσ_B) = 0.0140/0.0484 = 28.93%`, giving `STD = 12.47%`. The tabulated 25/75 point at 12.50% is only 3 basis points away from it, which is why 25/75 looks like the turning point.

---

## 8.3 Correlation and the limit of diversification

**The risk of a portfolio depends not only on the individual risk (variance) of each asset, but on the way the assets interact** — their covariance or correlation.

| Correlation | Effect |
|---|---|
| **−1** (perfect negative) | Maximum risk reduction. Portfolio risk can be driven to **zero** |
| Between −1 and +1 | Some risk reduction; the lower the correlation, the greater the benefit |
| **+1** (perfect positive) | **No** risk reduction; portfolio STD is the weighted average |

**Tutorial 8 Q3:**

- **(a)** The most desirable correlation is **perfect negative correlation** (`−1`), which drives portfolio risk to nil. It is rare to find such assets in the real world.
- **(b)** Most real-world assets show **small positive correlation**, because they all share the same market-related (systematic) risk. **Gold** is one asset historically negatively correlated with others — though not perfectly.

### The limit of diversification — Lecture 8's table

Equally weighted portfolios where every asset has `E(Rᵢ) = 15%`, `STD(Rᵢ) = 30%` and `CORREL(Rᵢ,Rⱼ) = 0.40`:

| Number of assets | % in each | Expected return | Standard deviation |
|---|---|---|---|
| 1 | 100% | 15% | **30.00%** |
| 10 | 10% | 15% | 20.35% |
| 25 | 4% | 15% | 19.53% |
| 50 | 2% | 15% | 19.26% |
| 100 | 1% | 15% | 19.12% |
| 1,000 | 0.1% | 15% | **18.99%** |

```
Formula:  VAR(Rp) = (1/N) σ² + (1 − 1/N) ρ σ²
As N → ∞:  VAR(Rp) → ρ σ² = 0.40 × 0.09 = 0.036,  STD → 18.97%
```

> **Diversification has a floor, and you hit it fast.** Going from 1 asset to 10 removes almost 10 percentage points of standard deviation. Going from 10 to 1,000 removes 1.4 more. The residual 18.97% is the correlated, market-wide component — it cannot be diversified away no matter how many assets you hold. This is the numerical proof behind the "15–20 unrelated assets" rule of thumb.

### Systematic vs non-systematic risk

```
Total Risk = Systematic Risk + Non-systematic Risk
```

| | Systematic | Non-systematic |
|---|---|---|
| Also called | Market risk, non-diversifiable, economy-related | Diversifiable risk, asset-specific risk |
| Diversifiable? | **No** | **Yes** — gone with 15–20 unrelated assets |
| Measured by | **Beta** | — |
| Rewarded? | **Yes** | **No** |

**Tutorial 8 Q4 — why variance does not give a positive risk/return relationship.** Because variance measures **total risk**, and total risk includes non-systematic risk. Non-systematic risk can be diversified away, so the investor is **not rewarded** for bearing it. Only systematic risk is rewarded. This explains how two assets with the same expected return can have different variances: they have the same *systematic* risk but one carries more *non-systematic* risk.

**Tutorial 8 Q5 — "Oil is a risky investment and steel is not."** **False**, if you are a diversified investor.

An oil company's returns may well have more **total** variance than a steel company's, because oil returns incorporate **exploration risk**. But exploration outcomes are largely independent of the state of the economy, so exploration risk is **non-systematic** — irrelevant to an investor holding a diversified portfolio. The relevant risk is **beta**. Oil is arguably closer to a necessity in most economies, so its beta is plausibly *lower* than steel's, since steel usage is highly susceptible to the economic cycle.

---

## 8.4 The efficient frontier and the Capital Market Line

**The efficient set:** among all portfolios of risky assets, find those with the **minimum variance for each level of return**. That set is the **efficient frontier**.

Now introduce a **risk-free asset** (`STD = 0`). The efficient portfolios become simply combinations of the risk-free asset `Rf` and the **market portfolio** `M`, and the efficient set becomes a **straight line** — the **Capital Market Line (CML)**. A positive, straight-line relationship between risk and return is excellent from a pricing perspective.

**But the CML only applies to efficient portfolios.** It does not explain why individual assets P, A and B can have very different standard deviations and the *same* expected return.

> **What's wrong? From a pricing perspective, variance is not the appropriate measure of risk.** That sentence, straight from the lecture, is the hinge of the entire topic. Variance measures total risk; the market only pays for systematic risk. Replace the x-axis with **beta** and the relationship becomes a straight line that *does* hold for individual assets — the **Security Market Line (SML)**.

| | Capital Market Line | Security Market Line |
|---|---|---|
| x-axis | Standard deviation (**total** risk) | Beta (**systematic** risk) |
| Applies to | Efficient portfolios only | **All** assets and portfolios |
| Intercept | `Rf` | `Rf` |
| At `x = 1` on the SML | — | `E[Rm]` |

---

## 8.5 The Capital Asset Pricing Model

Often called the **Sharpe–Lintner–Mossin CAPM**.

```
E[Rᵢ] = Rf + βᵢ ( E[Rm] − Rf )

             COV(Rᵢ, Rm)
βᵢ  =  ─────────────────
              VAR(Rm)
```

`E[Rm] − Rf` is the **market risk premium**.

**Portfolio beta is a simple weighted average:**

```
βp = Σ wᵢ βᵢ                and equivalently        COV(Rp, Rm) = Σ wᵢ COV(Rᵢ, Rm)
```

### Interpreting beta

| Beta | Meaning |
|---|---|
| `β = 0` | No systematic risk — earns the risk-free return |
| `β < 1` | Less risky than the market |
| `β = 1` | Equal risk with the market |
| `β > 1` | More risky than the market |

Beta measures the asset's **exposure to the market**. Because it includes no other factors, the CAPM implies that **only market risk is priced**.

**Some Australian betas** (Peirson et al.):

| Firm | Industry | Beta (2007–10) | Beta (2009–13) |
|---|---|---|---|
| ANZ | Banking | 1.18 | 1.16 |
| Amcor | Packaging | 0.62 | 0.75 |
| BHP | Mining | 1.41 | 1.32 |
| QANTAS | Airline | 0.96 | |
| Telstra | Telecommunications | 0.40 | |
| Toll | Transportation | 0.87 | |
| Wesfarmers | Diversified | 0.97 | |
| Woolworths | Retailing | 0.61 | 0.46 |

Betas are estimated by **regressing asset returns on market returns**. Estimation requires careful choice of sample period and return frequency (Peirson et al. use daily). **This unit does not estimate beta from raw data.**

**Lecture 8's question:** Woolworths has `β = 0.61` and BHP has `β = 1.41`. Which should have the higher expected return?

**BHP** — higher beta means greater systematic risk, greater exposure to the market. BHP is a miner; Woolworths is a grocery retailer, and groceries are necessities, which explains the lower beta. With `E[Rm] = 10.00%` and `Rf = 4.00%`:

```
E[R_WOW] = 0.04 + 0.61(0.10 − 0.04) = 0.04 + 0.0366 = 7.66%
E[R_BHP] = 0.04 + 1.41(0.10 − 0.04) = 0.04 + 0.0846 = 12.46%
```

**This expected return is what we use to price expected cash flows** — the link to Topic 9.

### Worked example — Lecture 8's full table

| Asset | Weight | Mean | Std. dev. | Cov. with A | Cov. with Mkt | Beta |
|---|---|---|---|---|---|---|
| A | 0.60 | 0.10 | 0.20 | 0.0400 | 0.0183 | **0.7148** |
| B | 0.40 | 0.15 | 0.30 | 0.0120 | 0.0366 | **1.4297** |
| Rf | — | 0.05 | — | 0.0000 | 0.0000 | 0.00 |
| Mkt | — | 0.12 | 0.16 | — | 0.0256 | 1.00 |
| **P** | — | **0.12** | **0.1859** | — | **0.0256** | **1.00** |

```
VAR(Rm) = 0.16² = 0.0256

β_A = 0.0183/0.0256 = 0.7148
β_B = 0.0366/0.0256 = 1.4297

COV(Rp, Rm) = 0.60(0.0183) + 0.40(0.0366) = 0.01098 + 0.01464 = 0.02562
β_P = 0.02562/0.0256 = 1.0008     (or 0.60(0.7148) + 0.40(1.4297) = 1.0008)
```

> **The slide reports 0.7143 and 1.4286 and flags "a small rounding error has entered the calculations".** Those are `5/7` and `10/7`, consistent with a covariance of 0.018286 rather than the printed 0.0183. Both are within rounding of each other and the portfolio beta comes out at 1.00 either way. Cite whichever the question's data supports — but note that the portfolio's beta of 1.00 combined with a standard deviation of 18.59% against the market's 16% is the whole lesson: **the portfolio carries market-average systematic risk while carrying more total risk than the market.** That extra risk is non-systematic and earns nothing.

Confirm with the CAPM: `E[Rp] = 0.05 + 1.00(0.12 − 0.05) = 0.12` ✔ — matching the 12% computed directly from the weights.

### Worked example — Tutorial 8 Q6

**(a)** `Rf = 4.00%`, `E[Rm] = 8.00%`.
```
Doolan  (β = 1.7):  0.04 + 1.7(0.08 − 0.04) = 0.04 + 0.068 = 10.80%
Hay     (β = 1.0):  0.04 + 1.0(0.04)        = 0.04 + 0.040 =  8.00%
Bati    (β = 0.8):  0.04 + 0.8(0.04)        = 0.04 + 0.032 =  7.20%
```
Hay's beta of exactly 1.0 gives it exactly the market return. That is a check on the model, not a coincidence.

**(b)** Houtsma's expected return is 8.00% and `COV(R_H, Rm) = 0.02`. Since `E[Rᵢ] = E[Rm]`, we must have `βᵢ = 1`:
```
VAR(Rm) = COV(R_H, Rm)/β_H = 0.02/1 = 0.02
```

**(c)** Equal weights (25%) in all four:
```
βp = 0.25(1.7) + 0.25(1.0) + 0.25(0.8) + 0.25(1.0) = 0.25(4.5) = 1.125
```

### Worked example — Tutorial 8 Q8 — filling in a table

| Portfolio | STD(Rᵢ) | E(Rᵢ) | βᵢ | COV(Rᵢ,Rm) | CORREL(Rᵢ,Rm) |
|---|---|---|---|---|---|
| X | 0.28 | — | — | 0.015 | |
| Y | 0.23 | — | 1.5 | — | 0.92 |
| Z | 0.34 | 0.17 | — | 0.048 | |
| Rf | 0.00 | 0.05 | 0.0 | 0.000 | |
| Mkt | — | 0.10 | — | 0.020 | |

`COV(R_X, R_Y) = 0.04`. Note `COV(Rm, Rm) = VAR(Rm) = 0.020`.

**(a) Missing betas**
```
β_X   = 0.015/0.02 = 0.75
β_Z   = 0.048/0.02 = 2.4
β_Mkt = 0.020/0.02 = 1.0
```

**(b) Missing expected returns**
```
E(R_X) = 0.05 + 0.75(0.10 − 0.05) = 0.0875 = 8.75%
E(R_Y) = 0.05 + 1.50(0.10 − 0.05) = 0.1250 = 12.50%
```

**(c) Remaining figures**
```
STD(Rm)      = √VAR(Rm) = √0.02 = 0.1414
COV(R_Y, Rm) = β_Y × VAR(Rm) = 1.5 × 0.02 = 0.03
```

**(d) X has a lower beta than Y but a much higher standard deviation. Why?** This is exactly the difference between **systematic risk (beta)** and **total risk (variance)**. **Most of X's risk is non-systematic; most of Y's risk is systematic.** Confirm it with correlations:
```
CORREL(R_X, Rm) = 0.015/(0.28 × 0.1414) = 0.379    ← weakly tied to the market
CORREL(R_Y, Rm) = 0.030/(0.23 × 0.1414) = 0.922    ← almost entirely market-driven  (matches the given 0.92)
```

**(e)** Portfolio P has `STD = 0.30` and `E(R) = 0.125` — the same expected return as Y. **Without calculating**, it must therefore have the same beta as Y: **1.5**. On the SML, expected return and beta are in one-to-one correspondence.

**(f)** A portfolio of 60% X and 40% Y:
```
βp = 0.6(0.75) + 0.4(1.5) = 0.45 + 0.60 = 1.05
```

**(g)**
```
E(Rp)        = 0.05 + 1.05(0.10 − 0.05) = 0.1025 = 10.25%
COV(Rp, Rm)  = βp × VAR(Rm) = 1.05 × 0.02 = 0.021
```

> **Part (f) needs the betas, not the standard deviations, and `COV(R_X, R_Y) = 0.04` is a distractor.** Portfolio **beta** is a plain weighted average — no covariance term, no squares. The covariance between X and Y is only needed for portfolio *variance*, which this question never asks for. Read which one is wanted.

---

## 8.6 CAPM as a source of the discount rate

### Worked example — Tutorial 8 Q9

Two mutually exclusive projects, three-year lives:

| | Outlay | Annual cash flow | Beta |
|---|---|---|---|
| Project X | $3,800 | $2,910 | 1.5 |
| Project Y | $4,000 | $2,850 | 1.0 |

`E[Rm] = 13.00%`, `Rf = 5.00%`.

**(a) Discounting both at 10.00%:**
```
NPV_X = −3,800 + 2,910[1 − 1/(1.10)³]/0.10 = −3,800 + 7,236.74 = $3,436.74
NPV_Y = −4,000 + 2,850[1 − 1/(1.10)³]/0.10 = −4,000 + 7,087.53 = $3,087.53
```
**Project X is preferred.**

**(b) The rate that should be used** — the SML gives it:
```
E(R_X) = 0.05 + 1.5(0.13 − 0.05) = 0.05 + 0.12 = 17.00%
E(R_Y) = 0.05 + 1.0(0.13 − 0.05) = 0.05 + 0.08 = 13.00%
```

**(c) Redo the NPVs at the correct rates:**
```
NPV_X = −3,800 + 2,910[1 − 1/(1.17)³]/0.17 = −3,800 + 6,429.89 = $2,629.89
NPV_Y = −4,000 + 2,850[1 − 1/(1.13)³]/0.13 = −4,000 + 6,729.29 = $2,729.29
```
**Project Y should now be accepted. The answer has reversed.**

> **This is the most important single result in Topic 8.** Using one discount rate for two projects of different risk gave the wrong answer. X's cash flows are riskier (`β = 1.5`), so they must be discounted harder; the flat 10% flattered X and penalised Y. *"A project's cash flows should be discounted at a rate which reflects the riskiness of that project."* Every earlier topic simply handed you the rate; this is where the rate comes from.

### Worked example — Tutorial 8 MCQ 10–16 — Bondy Corp

| Industry | E(Rᵢ) | βᵢ | COV(Rᵢ,Rm) | STD(Rᵢ) | Weight |
|---|---|---|---|---|---|
| Medical | — | — | 0.068 | 0.50 | 10% |
| Airlines | 0.134 | — | 0.056 | 0.35 | 20% |
| Oil | 0.110 | 1.00 | — | 0.28 | 50% |
| Building | 0.092 | 0.70 | — | 0.18 | 20% |
| Market Index | 0.110 | 1.00 | 0.040 | ? | |
| Ten-Year Bond | 0.050 | 0.00 | 0.000 | 0.00 | |

**Key first step:** `COV(Rm, Rm) = VAR(Rm) = 0.040`.

```
Q10  β_Medical = 0.068/0.04 = 1.7                                       → (c)
Q11  E(R_Medical) = 0.05 + 1.7(0.11 − 0.05) = 0.05 + 0.102 = 0.152      → (d)
Q12  COV(R_Oil, Rm) = β × VAR(Rm) = 1.00 × 0.04 = 0.040                 → (b)
Q13  E(Rp) = 0.10(0.152) + 0.20(0.134) + 0.50(0.110) + 0.20(0.092)
           = 0.0152 + 0.0268 + 0.0550 + 0.0184 = 0.1154 ≈ 11.5%         → (c)
Q14  STD(Rm) = √0.04 = 0.20                                             → (b)
```

**Q15 — a new portfolio of 45% Oil and 55% Building, correlation 0.48:**
```
VAR = 0.45²(0.28²) + 0.55²(0.18²) + 2(0.45)(0.55)(0.48)(0.28)(0.18)
    = 0.2025(0.0784) + 0.3025(0.0324) + 0.495(0.48)(0.0504)
    = 0.015876 + 0.009801 + 0.011975
    = 0.037652
STD = √0.037652 = 0.19404 ≈ 0.194                                       → (b)
```

**Q16 — why is the Oil investment not efficient?**
```
E(R_Oil) = 0.110 = E(Rm) = 0.110
VAR(R_Oil) = 0.28² = 0.0784   >   VAR(Rm) = 0.040
```
**Oil offers the same expected return as the market with nearly twice the variance.** From the perspective of efficiency being the maximum return for a given risk, Oil is not efficient. Answer **(d)**.

> **Diversification beats the weighted average, not necessarily the safer asset.** The 45/55 portfolio's 19.40% sits below the weighted average of the two standard deviations (`0.45 × 0.28 + 0.55 × 0.18 = 22.50%`) but *above* Building's own 18%. With a correlation of 0.48 there is not enough offsetting movement to get below the lower-risk asset. So the benchmark for "did diversification help?" is the **weighted average**, never the minimum — expecting portfolio risk to fall below every constituent is how people talk themselves out of a correct answer.

---

## Summary

- **Mean–variance analysis** is valid if returns are normal **or** investors have quadratic utility.
- `E[Rp] = Σ wᵢ E[Rᵢ]` — **linear**. `VAR(Rp) = w₁²VAR₁ + w₂²VAR₂ + 2w₁w₂COV₁₂` — **not linear**, and the covariance term is where diversification comes from.
- `COV(Rᵢ,Rⱼ) = CORREL × STDᵢ × STDⱼ`.
- The **lower the correlation, the greater the risk reduction**. At `ρ = −1` risk can be eliminated; at `ρ = +1` there is none. Real assets are mostly weakly positively correlated.
- **Diversification has a floor.** 10–20 unrelated assets remove essentially all diversifiable risk; the residual is systematic.
- `Total Risk = Systematic + Non-systematic`. Only **systematic** risk is priced, because non-systematic risk can be diversified away for free.
- The **CML** (return vs standard deviation) applies only to efficient portfolios. The **SML** (return vs beta) applies to every asset.
- `E[Rᵢ] = Rf + βᵢ(E[Rm] − Rf)`; `βᵢ = COV(Rᵢ,Rm)/VAR(Rm)`; `βp = Σ wᵢβᵢ`; `COV(Rᵢ,Rm) = βᵢ VAR(Rm)`.
- `COV(Rm, Rm) = VAR(Rm)` — this is often the hidden first step in a table-filling question.
- Two assets with the same expected return **must** have the same beta, whatever their standard deviations.
- **Discount each project at a rate reflecting its own systematic risk.** Using one rate across projects of different beta reverses rankings.

<details><summary>Checkpoint — seven questions</summary>

1. Asset M has `E(R) = 12%`, `STD = 22%`. Asset N has `E(R) = 7%`, `STD = 11%`. Correlation is 0.3. Find the expected return and standard deviation of a 40/60 M/N portfolio.
2. For the same two assets, what is `COV(M, N)`?
3. `Rf = 3.5%`, `E[Rm] = 9.5%`. An asset has `COV(Rᵢ, Rm) = 0.0315` and `VAR(Rm) = 0.0225`. Find its beta and required return.
4. A portfolio holds 30% of the asset in Q3, 50% of an asset with `β = 0.8`, and 20% of the risk-free asset. Find the portfolio beta and expected return.
5. Two shares have the same expected return but very different standard deviations. What must be true of their betas, and what explains the difference in total risk?
6. Why does using a single firm-wide discount rate for all projects lead to bad decisions?
7. A project has `β = 1.8`, outlay $50,000 and cash flows of $22,000 p.a. for four years. `Rf = 4%`, `E[Rm] = 11%`. Should it be accepted?

---

**Answers**

1. `E(Rp) = 0.40(0.12) + 0.60(0.07) = 0.048 + 0.042 = **9.00%**`. `VAR = 0.40²(0.22²) + 0.60²(0.11²) + 2(0.40)(0.60)(0.3)(0.22)(0.11) = 0.0077440 + 0.0043560 + 0.0034848 = 0.0155848`. `STD = **12.48%**` — below the weighted average of 15.4%.

2. `COV = 0.3 × 0.22 × 0.11 = **0.00726**`.

3. `β = 0.0315/0.0225 = **1.4**`. `E(R) = 0.035 + 1.4(0.095 − 0.035) = 0.035 + 0.084 = **11.90%**`.

4. `βp = 0.30(1.4) + 0.50(0.8) + 0.20(0) = 0.42 + 0.40 = **0.82**`. `E(Rp) = 0.035 + 0.82(0.06) = 0.035 + 0.0492 = **8.42%**`.

5. Their **betas must be equal** — on the SML, expected return is a one-to-one function of beta. The difference in total risk is therefore entirely **non-systematic** (diversifiable) risk, for which no return is paid.

6. Because the discount rate must reflect the **risk of the cash flows being discounted**. A single rate over-discounts low-beta projects (rejecting good ones) and under-discounts high-beta projects (accepting bad ones). Tutorial 8 Q9 shows the ranking of two projects reversing once each is discounted at its own CAPM rate.

7. `r = 0.04 + 1.8(0.11 − 0.04) = 0.04 + 0.126 = 16.60%`. `NPV = −50,000 + 22,000[1 − 1/(1.166)⁴]/0.166 = −50,000 + 22,000 × 2.764996 = −50,000 + 60,829.92 = **+$10,829.92 — accept**`. (At a naive 10% the NPV would be $19,737 — the right decision here, but for the wrong reason and with the value overstated by 82%.)
</details>
