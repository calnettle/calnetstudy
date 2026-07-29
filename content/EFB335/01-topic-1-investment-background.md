# TOPIC 1 — The Investment Background

## 1.1 What Is an Investment?

An investment is **a current commitment of dollars for a period of time in order to derive future payments** that compensate the investor for three things:

1. **Opportunity cost** — the time value of money; what you gave up by not consuming/investing elsewhere.
2. **Inflation** — the expected erosion of purchasing power over the holding period.
3. **Uncertainty (risk)** — the possibility that actual future payments differ from expected ones.

**The core trade-off:** by saving instead of spending, individuals trade off *present consumption* in expectation of *larger future consumption*.

> **Exam phrasing:** "Discuss the three components of an investor's required rate of return." → Real risk-free rate (opportunity cost / pure time value), expected inflation premium, and risk premium (uncertainty). These are additive: `Required return ≈ Real risk-free rate + Expected inflation + Risk premium`.

---

## 1.2 Historical Rates of Return

### Holding Period Return (HPR)

The **cumulative** return — total investment performance over the whole period, expressed as a *multiple* of the starting value.

```
HPR = Ending Value of Investment / Beginning Value of Investment
```

- HPR is always ≥ 0 (you cannot lose more than 100% on a long unlevered position).
- HPR = 1.0 means you broke even.

### Holding Period Yield (HPY)

The **period-specific percentage** rate of return.

```
HPY = HPR − 1
```

### Annualising

```
Annual HPR = HPR^(1/n)
Annual HPY = Annual HPR − 1 = HPR^(1/n) − 1
```

where `n` = number of **years** of the investment (can be fractional).

> **Trap:** `n` is measured in *years*, not number of observations. If you have 52.16 years of daily data, `n = 52.16`, not 13,609.

### Including income (dividends)

When there's a cash distribution, the HPY splits into two identifiable components:

```
HPY = (P₁ − P₀ + D₁) / P₀
    = (P₁ − P₀)/P₀   +   D₁/P₀
      └── capital gain ──┘   └─ dividend yield ─┘
```

---

## 1.3 Mean Historical Returns — AM vs GM

### Arithmetic Mean (AM)

```
AM = Σ HPY / n
```

Simple average of the periodic yields.

### Geometric Mean (GM)

```
GM = [ Π HPR ]^(1/n) − 1
```

Product of all the HPRs, taken to the power 1/n, minus 1.

### The relationship — memorise this

| Condition | Result |
|---|---|
| All periodic returns identical | **AM = GM** |
| Returns vary across periods | **AM > GM, always** |
| Greater volatility | Larger the AM–GM gap |

**Why:** GM accounts for compounding. A −50% followed by +50% gives AM = 0% but GM = −13.4% — and the GM is the one that reflects what actually happened to your money.

**When to use which:**

- **AM** → best estimate of the **expected value for a single future year**.
- **GM** → best measure of an asset's **long-term historical performance** (what you actually earned per year, compounded).

> The gap between AM and GM is approximately `σ²/2`. Useful sanity check.

### Portfolio HPY

The mean historical rate of return for a *portfolio* is the **weighted average of the individual HPYs**:

```
HPY_portfolio = Σ wᵢ × HPYᵢ
```

Weights `wᵢ` are the **relative beginning market values** of each holding. This is called the **dollar-weighted** or **value-weighted** mean rate of return.

Equivalently: the overall change in the value of the original portfolio.

---

## 1.4 Worked Example — BHP Historical Returns

*(From `Topic 1 BHP Historical Returns - Solutions-1.xlsx`)*

Daily BHP total return index, 1 Jan 1973 → 2025. Index starts at 100.

| Measure | Value | How it's built |
|---|---|---|
| Total HPR | 554.28 | Final index ÷ starting index (= product of all daily HPRs) |
| Years (n) | 52.16 | Days ÷ 365.25 |
| **Annual HPR** | 1.1288 | 554.28^(1/52.16) |
| **Annual HPY (geometric)** | **12.88%** | Annual HPR − 1 |
| Ave daily return (AM) | 0.06106% | Simple average of daily returns |
| **Ave annual return (AM)** | **16.63%** | Daily AM × 272.4 trading days |
| Daily variance | 0.00029223 | Σ(R − E(R))² / n |
| Daily SD | 1.7095% | √variance |
| **Annual variance** | 0.073643 | Daily variance × trading days |
| **Annual SD** | **27.14%** | √annual variance |

**The single most important observation here:** AM (16.63%) > GM (12.88%). The gap is **3.75 percentage points**, driven by BHP's 27% annual volatility. Cross-check: σ²/2 = 0.0736/2 = 3.68% ≈ 3.75%. ✓

### Excel functions used

| Task | Formula |
|---|---|
| Simple return | `=(B3-B2)/B2` |
| Log return | `=LN(B3/B2)` |
| HPR | `=1+E3` |
| Geometric total | `=PRODUCT(F3:F14491)` |
| Annualise | `=J2^(1/J4)` |
| Variance | `=VAR.S(range)` or `=SUM(M:M)/COUNT(M:M)` |
| SD | `=STDEV.S(range)` |

> **Log returns vs simple returns:** log returns (`ln(P₁/P₀)`) are *additive over time* — sum them and you get the total log return. Simple returns are *additive across assets* in a portfolio. Neither is additive both ways. That's the whole reason both columns exist in the spreadsheet.

---

## 1.5 Expected Rates of Return

Everything above is **realised / historical**. An investor actually cares about the **expected** return on a *future* risky investment.

**Key definitions:**

- **Risk** = the uncertainty of the future outcomes of an investment.
- Many possible returns exist because of that uncertainty.
- **Probability** = the likelihood of a given outcome.
- The probabilities of all possible outcomes **sum to 1.0**.

### Formula

```
E(R) = Σ (Pᵢ × Rᵢ)
```

where `Pᵢ` = probability of return *i*, `Rᵢ` = possible return *i*.

### Probability distribution shapes (Example 2)

| Type | Distribution |
|---|---|
| Risk-free | Single outcome, P = 1.0. Variance = 0. |
| Risky Investment 1 | Three possible returns, unequal probabilities |
| Risky Investment 2 | Ten possible returns, equal probabilities (0.1 each) |

### Worked — Risky Investment 1

| Probability | Return |
|---|---|
| 0.15 | −20% |
| 0.70 | +10% |
| 0.15 | +20% |

```
E(R) = (0.15)(−0.20) + (0.70)(0.10) + (0.15)(0.20)
     = −0.030 + 0.070 + 0.030
     = 0.070 = 7.0%
```

**Interpretation:** a risk-adjusted (probability-weighted) return of 7%, heavily weighted toward the highest-probability outcome of 10%. Possible returns range from −20% to +20%.

### Worked — Risky Investment 2

Ten equally likely outcomes from −40% to +50% in 10% steps:

```
E(R) = 0.1 × [(−0.4)+(−0.3)+(−0.2)+(−0.1)+0+0.1+0.2+0.3+0.4+0.5]
     = 0.1 × 0.5
     = 0.05 = 5.0%
```

---

## 1.6 Risk of Expected Return

Risk = uncertainty, so the **measure of risk must reflect the degree of uncertainty** — i.e. how far actual returns are likely to land from the expected return (the mean).

### 1. Variance

**For expected (forward-looking) returns:**

```
σ² = Σ Pᵢ [ Rᵢ − E(R) ]²
```

**For historical returns (using HPY):**

```
σ² = Σ [ HPYᵢ − E(HPY) ]² / n
```

where `E(HPY)` = the arithmetic mean of the series, `n` = number of observations.

> **Population vs sample:** divide by `n` for a full population, `n−1` for a sample. The lectures use `n` for the risk-of-expected-return case and flag the `n−1` correction for sample data in Topic 2 (covariance). **Read the question carefully** — in Excel that's `VAR.P` vs `VAR.S`.

### 2. Standard Deviation (σ)

```
σ = √σ²
```

Square root of variance. **Measures TOTAL risk.** Expressed in the same units as returns (%), which is why it's intuitive.

### 3. Coefficient of Variation (CV)

```
CV = σ / E(R)
```

**Risk per unit of expected return.** A *relative* measure — lets you compare investments with very different return levels.

**Lower CV = better** (less risk per unit of return).

### Worked — Variance calculations

**Risk-free investment:** single certain outcome → σ² = 0, σ = 0, CV = 0.

**Risky Investment 1** (E(R) = 7%):

```
σ² = 0.15(−0.20 − 0.07)² + 0.70(0.10 − 0.07)² + 0.15(0.20 − 0.07)²
   = 0.15(0.0729) + 0.70(0.0009) + 0.15(0.0169)
   = 0.010935 + 0.00063 + 0.002535
   = 0.01410

σ  = √0.01410 = 0.11874 = 11.87%
CV = 0.11874 / 0.07 = 1.696 ≈ 1.70
```

**Interpretation:** expected return 7%, standard deviation 11.87%. For every 1 basis point of return, the investment carries ~1.70 bps of risk.

**Risky Investment 2** (E(R) = 5%):

```
σ² = 0.0825
σ  = 28.72%
CV = 28.72 / 5 = 5.74
```

> **Compare the two:** Investment 1 has a *higher* expected return (7% vs 5%) AND *lower* risk (11.87% vs 28.72%). It dominates. CV confirms it: 1.70 vs 5.74.

---

## 1.7 Sharpe Ratio

Relative return (excess return of one security over a benchmark) as a proportion of its volatility:

```
Sharpe Ratio = (Rₘ − R_f) / σ_portfolio
```

- Numerator = **excess return** over the benchmark/risk-free rate.
- Denominator = **total risk** (standard deviation).
- Answers: *how much extra return am I getting per unit of risk taken?*

**Reading the results (Example 4):**

- Investment B → small positive excess return over the benchmark for each unit of risk. Marginal but positive.
- Investment C → **no excess return** over the benchmark despite taking on additional risk. Bad deal.

> **Sharpe vs CV — don't confuse them.** CV = σ / E(R): total risk per unit of *total* return. Sharpe = (R − R_f) / σ: *excess* return per unit of risk. They're near-reciprocals in spirit but the numerator differs (excess vs total return), and higher Sharpe is good while lower CV is good.

---

## ✅ Checkpoint 1

1. An investor requires compensation for opportunity cost, inflation and ________
2. _____ measures the cumulative return of an investment over time
3. GM is generally lower than AM due to the effects of ______

<details><summary>Answers</summary>

1. **Uncertainty / risk**
2. **Holding Period Return (HPR)**
3. **Compounding** (variability of returns)
</details>

---

## 1.8 Types of Orders

| Order type | What it does | Key point |
|---|---|---|
| **Market order** | Buy or sell at the best current price | Provides **immediate liquidity**. Certainty of execution, uncertainty of price. |
| **Limit order** | Specifies the buy/sell price | Certainty of price, uncertainty of execution. Can specify timing: *fill or kill*, *good until cancelled*. |
| **Stop loss** | Conditional market order — directs the **sale** of shares if the price **drops** to a given level | Protects a **long** position. Risk: a **'gap down'** (price jumps past your stop, so you fill much lower). |
| **Stop buy** | Directs the **purchase** of shares if the price **rises** to a given level | Used by **short-sellers** to minimise losses. Risk: a **'gap up'**. |

> **Gap risk is the exam point.** A stop order becomes a *market* order once triggered — it does not guarantee your stop price. Overnight gaps blow straight through it.

---

## 1.9 Margin Transactions

### The mechanics

Instead of paying 100% cash, an investor **borrows a portion of the transaction price through the broker**. The stock itself is used as **collateral**.

**Call money rate** = the interest rate banks charge brokers, who in turn lend to margin investors. A widely-used base lending rate.

Margin investors pay a **premium over the broker's base lending rate**, which covers:
- the broker's cost of recording, monitoring and managing the loan, and
- a risk premium.

### Margin requirements

| Term | Definition | Typical |
|---|---|---|
| **Initial margin** | Proportion of total transaction value that must be paid in **cash at the outset** | 50% |
| **Maintenance margin** | Required proportion of **equity to total value after purchase** — protects the broker if the price declines | 25% |

### Margin call

Triggered when equity/total value falls below the maintenance margin. Can be met by:
1. Deposit of new cash or margin securities, **otherwise**
2. Sale of the margined securities and repayment of the loan.

---

### 1.9a Buying on Margin

**The critical intuition:** *the lender has priority over the equityholder.* The amount **borrowed is fixed** regardless of what happens to the stock price. Only the remaining balance after the loan is attributed to the investor's equity. **The investor wears the entire downside of a price drop.**

### Formulas

```
Total Value    = P × N
Initial Loan   = P₀ × N × (1 − IM)
Initial Equity = P₀ × N × IM

Equity (at any P) = (P × N) − Loan

Percentage Margin = Equity / Total Value = (P·N − Loan) / (P·N)
```

**Margin call trigger price:**

```
Set (P·N − Loan) / (P·N) = MM
     P·N (1 − MM) = Loan

     P* = Loan / [ N × (1 − MM) ]
```

> ⚠️ **Spreadsheet trap.** `Topic 1 Margins Solution-3.xlsx` cell C18 uses `=B14/(B3−B3*B5)` — i.e. *Initial Equity* / (N(1−MM)). That only gives the right answer because the initial margin is 50%, which makes Equity = Loan. **The correct numerator is always the LOAN, not the equity.** If the exam gives you a 40% or 60% initial margin, the spreadsheet formula breaks. Use `P* = Loan / [N(1−MM)]`.

### Worked — Example 5

Purchase 1,000 shares at $100. Initial margin 50%, maintenance margin 25%.

```
Total value: $100 × 1,000        = $100,000
Buy in cash: $100,000 × 0.5      =  $50,000
Borrow:      $100,000 − $50,000  =  $50,000
Equity:      $100,000 − $50,000  =  $50,000    ✓ (50% margin)
```

**If the price drops to $65:**

```
Equity = ($65 × 1,000) − $50,000 = $65,000 − $50,000 = $15,000
Percentage margin = $15,000 / $65,000 = 23.1%  → below 25%, MARGIN CALL
```

**At what price is a margin call triggered?**

```
P* = $50,000 / [1,000 × (1 − 0.25)]
   = $50,000 / 750
   = $66.67
```

**If the price rises to $120:**

```
Equity = ($120 × 1,000) − $50,000 = $70,000
Return on equity = ($70,000 − $50,000) / $50,000 = +40%
```

> **Leverage effect:** the stock rose 20% ($100→$120) but the investor's equity rose **40%**. At 50% margin, returns are magnified by exactly 2× (1/IM) — in **both** directions. That's the whole point of margin, and the whole risk.

---

### 1.9b Short Selling on Margin

**The critical difference from buying on margin:** what is 'borrowed' is the **current value of the stock**, which *floats* with the price. It is not a fixed dollar loan.

```
Equity = Cash from sale + Cash deposited − Dividends paid − Current value of stock owed
       = (P₀ × N) + (P₀ × N × IM) − Dividends − (P × N)

Percentage Margin = Equity / Current value of stock owed
                  = Equity / (P × N)
```

**Margin call trigger price:**

```
Set [(P₀N) + (P₀N × IM) − (P × N)] / (P × N) = MM

     P* = [Sale proceeds + Deposit] / [ N × (1 + MM) ]
```

### Worked — Example 6

Short-sell 1,000 shares of Vodafone at $80. Margin posted 50%.

**(a) Percentage margin if the price drops to $70:**

```
Sale of the stock:        +$80,000
Money deposited:          +$40,000   ($80,000 × 50%)
Value of stock owed:      −1,000P

Percentage margin = ($80,000 + $40,000 − 1,000 × $70) / (1,000 × $70)
                  = ($120,000 − $70,000) / $70,000
                  = $50,000 / $70,000
                  = 71.4%
```

Margin went *up* — the trade is working.

**(b) At what price is a 25% maintenance margin breached?**

```
($80,000 + $40,000 − 1,000P) / 1,000P = 0.25
$120,000 − 1,000P = 250P
$120,000 = 1,250P
P* = $96
```

### The symmetry — memorise this table

| | Buying on margin (long) | Short selling on margin |
|---|---|---|
| **What's borrowed** | A **fixed** dollar loan | The **stock** (floating value) |
| **Risk direction** | **Falling** price | **Rising** price |
| **Why** | Fixed borrowings against a stock now worth less → maintenance margin drops | Must buy back at a higher price than shorted → percentage margin drops |
| **Denominator in % margin** | Total value = P·N | Value of stock owed = P·N |
| **Trigger price** | `Loan / [N(1−MM)]` | `(Proceeds + Deposit) / [N(1+MM)]` |
| **Max loss** | 100% of investment | **Unlimited** |

> **The sign flip is the exam trap.** Long → `(1 − MM)` in the denominator. Short → `(1 + MM)`. Get this backwards and every subsequent number is wrong.

---

## ✅ Checkpoint 2

1. A _______ order specifies a price at which the shares will be sold
2. A short sale on margin account may trigger a margin call when the underlying stock price ______

<details><summary>Answers</summary>

1. **Limit** order
2. **Rises** (increases)
</details>

---

## 1.10 Topic 1 Summary

- An investment is a **trade-off between current and future consumption**, requiring compensation for **inflation, opportunity cost and uncertainty**.
- **HPR** provides cumulative returns; **HPY** provides periodic percentage returns.
- **AM** is the simple average of HPYs; **GM** is the product of HPRs less 1.
- Generally **AM > GM** due to the compounding effects included in GM.
- **Expected return** is the risk/probability-adjusted mean of possible future returns.
- The risk of returns diverging from expected return is measured by **variance and standard deviation**.
- **CV** is a *relative* measure — units of risk per unit of expected return.
- **Sharpe Ratio** is a relative measure of excess return (over benchmark) per unit of risk (SD).
- Order types: **market, limit, stop loss, stop buy**.
- **Margin** amplifies returns and losses; long positions fear falling prices, short positions fear rising prices.

---

## 1.11 Appendix — Mathematics Refresher

### Linear functions

Slope-intercept form: `y = mx + b`, where `m` = slope, `b` = y-intercept (where the line crosses the y-axis).

### Slope of non-linear functions

The slope at a point = the **derivative** at that point. For `y = f(x)`, the slope is `f'(x)`.

### Higher order derivatives

```
y  = x²
y' = 2x

At x = 2:   y = 2² = 4,   y' = 2(2) = 4
```

Second derivative `y'' = 2` tells you the curvature (here, convex).

### Minima and maxima

- Set `f'(x) = 0` → gives **stationary points**.
- `f''(x) > 0` → **minimum**; `f''(x) < 0` → **maximum**.
- This is exactly the machinery behind finding the **minimum variance portfolio** in Topic 2.

### Continuous compounding

```
FV = PV × e^(r × t)
r  = ln(FV / PV) / t
```

This is why the BHP spreadsheet has a **log return** column: `ln(P₁/P₀)` is the continuously compounded return, and log returns **sum across time**.

### Systems of linear equations

Multiple equations, multiple unknowns — solve by substitution, elimination, or matrix inversion.

### Matrix algebra

*(From `Topic 1 Matrices Solutions.xlsx`)*

Let:

```
A = [3  8]      B = [4   0]
    [4  6]          [1  −9]
```

**Addition** (element by element; Excel `=B2:C3+F2:G3`):

```
A + B = [7   8]
        [5  −3]
```

**Subtraction:**

```
A − B = [−1   8]
        [ 3  15]
```

**Scalar multiplication:**

```
2A = [6  16]
     [8  12]
```

**Matrix multiplication** (Excel `=MMULT()`) — row × column:

```
AB = [3·4 + 8·1    3·0 + 8·(−9)]  =  [20  −72]
     [4·4 + 6·1    4·0 + 6·(−9)]     [22  −54]
```

> **Order matters:** AB ≠ BA. Dimensions must conform: (m×n)(n×p) = (m×p).

**Transpose** (Excel `=TRANSPOSE()`) — flip rows and columns:

```
Aᵀ = [3  4]
     [8  6]
```

### Solving systems with matrices

Given the system:

```
1x + 1y + 1z =  6
0x + 2y + 5z = −4
2x + 5y − 1z = 27
```

Write as `C·E = D`:

```
C = [1  1   1]     E = [x]     D = [ 6]
    [0  2   5]         [y]         [−4]
    [2  5  −1]         [z]         [27]
```

Solve `E = C⁻¹ · D`. In Excel: `=MMULT(MINVERSE(J2:L4), O2:O4)`

```
x = 5,  y = 3,  z = −2
```

*(Verify: 5 + 3 − 2 = 6 ✓ · 0 + 6 − 10 = −4 ✓ · 10 + 15 + 2 = 27 ✓)*

> **Why this matters:** for an *n*-security portfolio you need `n` variances and `n(n−1)/2` covariance terms. Beyond three assets, matrix multiplication is the only practical way to compute portfolio variance. This is Topic 2's punchline.

### Covariance and correlation

| Excel function | Purpose |
|---|---|
| `=COVARIANCE.S()` | Sample covariance (divides by n−1) |
| `=COVARIANCE.P()` | Population covariance (divides by n) |
| `=CORREL()` | Correlation coefficient |
| `=MMULT()` | Matrix multiplication |
| `=MINVERSE()` | Matrix inverse |
| `=TRANSPOSE()` | Matrix transpose |

Covered in full in Topic 2.
