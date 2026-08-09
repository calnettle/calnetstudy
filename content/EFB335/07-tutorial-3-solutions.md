# TUTORIAL 3 — Full Worked Solutions

*(Reilly & Brown, Chapter 7 — Capital Market Theory, CML, CAPM/SML)*

No solutions workbook was supplied for this tutorial (no `Tutorial 3 SV` file exists in the unit's material, unlike Tutorials 1 and 2). Every figure below was computed from scratch and independently re-verified in Python.

---

## Question 1 (not from the textbook)

> Draw a graph that shows what happens to the Markowitz efficient frontier when you combine a risk-free asset with alternative risky asset portfolios on the Markowitz efficient frontier. Explain why the line from the RFR that is tangent to the efficient frontier defines the dominant set of portfolio possibilities.

**The graph.** Axes: standard deviation (σ) on the horizontal, expected return `E(R)` on the vertical. Plot the curved Markowitz efficient frontier (bowed to the left, running from the global minimum-variance portfolio up and to the right). Mark the risk-free asset at `(0, RFR)` on the vertical axis. From that point, draw straight lines out to several different points on the curved frontier — one line to a point below the tangency point, one to the tangency point itself, one to a point above it.

**Why the tangent line dominates.** Every straight line from `(0, RFR)` to a frontier portfolio is a feasible set of `RF + that portfolio` combinations (§3.2 of the topic notes). Because the frontier is *concave* (bows outward toward the investor), the line that just **touches** the frontier without crossing it — the tangent line — has the **steepest possible slope** of any such line. A steeper line means more expected return for each unit of risk. Every other line from `(0, RFR)` either:

- crosses the frontier and lies *below* it for part of its length (dominated by the frontier itself over that range), or
- has a shallower slope than the tangent line, so it delivers **less return per unit of risk** than the tangent line at every σ.

The single point of tangency is portfolio **M**. The tangent line is the **Capital Market Line**, and it dominates every other combination of RF with a risky portfolio — including combinations with every other point on the efficient frontier — because no steeper line through `(0, RFR)` is achievable. This is exactly Table A vs Table B in the topic notes: the CML's constant `(E(R) − RFR)/σ = 0.500` ratio beats every frontier portfolio except M itself.

---

## Chapter 7, Question 2

> What are the similarities and differences between the CML and SML as models of the risk-return trade-off?

| | CML | SML |
|---|---|---|
| **Similarity** | Both are straight lines with intercept `RFR` and a risk premium term — both express `E(R) = RFR + (price of risk) × (quantity of risk)`. | |
| **Risk measure (x-axis)** | Total risk, `σ` (standard deviation) | Systematic risk only, **β** |
| **What can be plotted on it** | Only **fully diversified portfolios** — specifically, combinations of the risk-free asset with the market portfolio M | **Any** individual asset or portfolio, diversified or not |
| **Slope** | `[E(R_M) − RFR] / σ_M` — the market price of *total* risk | `E(R_M) − RFR` — the market risk premium, multiplied by β |
| **Purpose** | Shows the best *achievable* risk-return combinations (an efficiency frontier for diversified investors) | Shows the *required* return for **any** asset given its systematic risk (a pricing/valuation tool) |

**In short:** the CML is a special case that only diversified portfolios can sit on; the SML is a general pricing relationship every asset satisfies in equilibrium, whether it's diversified or not. An individual stock never plots meaningfully on the CML (its `σ` includes unsystematic risk the market won't compensate for) but always has a defined position on the SML via its beta.

---

## Chapter 7, Question 5

> According to the CAPM, what assets are included in the market portfolio, and what are the relative weightings? In empirical studies of the CAPM, what are the typical proxies used for the market portfolio? Assuming that the empirical proxy for the market portfolio is not a good proxy, what factors related to the CAPM will be affected?

**Theoretical market portfolio:** *every* risky asset that exists anywhere — domestic and international equities, bonds, real estate, commodities, art, collectibles, human capital — everything with uncertain future value. Weightings are by **relative market value** (equilibrium condition: capital markets are in equilibrium, so every asset's share of the portfolio equals its share of total investable wealth).

**Empirical proxies actually used:** almost always a **single-country, equities-only index** — the S&P 500 in the vast majority of U.S. studies. Some studies use broader multi-asset or global indexes (e.g. MSCI World), but this is the exception, not the rule.

**Consequences of a poor proxy (the benchmark error problem):**

1. **Beta estimates change** — the topic notes verify this directly: JPM's beta is 1.31 against the S&P 500 but 1.17 against the MSCI World Index, over the identical period.
2. **CAPM-required returns change**, since beta feeds directly into `E(Rᵢ) = RFR + βᵢ[E(R_M) − RFR]`.
3. **Under/overpriced calls flip.** A stock judged undervalued against one proxy's SML can be judged fairly priced or overvalued against another's.
4. **Performance evaluation of fund managers is distorted** — a manager's alpha (excess return over the SML) is only as reliable as the market proxy used to draw that SML.

---

## Chapter 7, Problem 2

> `RFR = 10%`, `E(R_M) = 14%`. Compute `E(Rᵢ)` for stocks U (β=0.85), N (β=1.25), D (β=−0.20) and plot on an SML. Then a broker gives current price, expected price and dividend for each stock — compute the broker-implied return and decide what to do.

### Part (a) — CAPM required returns

Market risk premium `= 14% − 10% = 4%`.

```python
rfr, mrp = 0.10, 0.04
for stock, beta in [('U',0.85), ('N',1.25), ('D',-0.20)]:
    print(stock, rfr + beta*mrp)
```

| Stock | β | E(Rᵢ) = 10% + β(4%) |
|---|---|---|
| U | 0.85 | 10% + 0.85(4%) = **13.4%** |
| N | 1.25 | 10% + 1.25(4%) = **15.0%** |
| D | −0.20 | 10% − 0.20(4%) = **9.2%** |

**SML plot:** horizontal axis β (0 to 1.25+), vertical axis E(R). Intercept at `(0, 10%)`; the line passes through `(1.0, 14%)` = the market. Plot U at `(0.85, 13.4%)`, N at `(1.25, 15.0%)`, D at `(−0.20, 9.2%)` — all three sit exactly **on** the line by construction, since these are the *required* returns computed from that exact line.

### Part (b) — broker's forecast returns

```
Return = (Expected Price − Current Price + Dividend) / Current Price
```

```python
for stock, p0, p1, div in [('U',22,24,0.75), ('N',48,51,2.00), ('D',37,40,1.25)]:
    print(stock, (p1-p0+div)/p0)
```

| Stock | P₀ | P₁ | Div | Estimated return `(P₁−P₀+D)/P₀` |
|---|---|---|---|---|
| U | 22 | 24 | 0.75 | (24−22+0.75)/22 = **12.50%** |
| N | 48 | 51 | 2.00 | (51−48+2.00)/48 = **10.42%** |
| D | 37 | 40 | 1.25 | (40−37+1.25)/37 = **11.49%** |

### Part (c) — the investment decision

| Stock | Required (CAPM) | Estimated (broker) | Estimated vs required | Verdict |
|---|---|---|---|---|
| U | 13.40% | 12.50% | below | Plots **below** SML → **overpriced → sell / avoid** |
| N | 15.00% | 10.42% | below | Plots **below** SML → **overpriced → sell / avoid** |
| D | 9.20% | 11.49% | above | Plots **above** SML → **underpriced → buy** |

**U and N are both forecast to underperform what their systematic risk demands** — the market is not being compensated enough for holding them at the broker's own numbers, so a rational investor sells or avoids both. **D is forecast to outperform its (low, even negative-beta) risk profile** — despite the least attractive-looking beta of the three, it's the one buy signal here, because low/negative beta means very little is *required* of it.

> **The trap:** don't confuse "highest forecast return" with "best buy". N has the highest broker-estimated return (10.42%) of the three... no — actually D does (11.49%), but even U's 12.50% is the largest number here. **The largest raw forecast return (U, 12.5%) is not the buy signal** — U still falls short of what its beta of 0.85 demands (13.4%). Compare *estimated vs required for that specific asset*, never compare estimated returns to each other in isolation.

---

## Question 2 (not from the textbook)

> `σ_M = 15%`. Given the covariance of stocks A, B, C with the market, calculate their betas.

```
β = Cov(i, M) / σ²_M
```

```python
sigM = 0.15
for stock, cov in [('A',0.0292), ('B',0.0180), ('C',0.0225)]:
    print(stock, cov/sigM**2)
```

| Stock | Cov(i,M) | σ²_M = 0.15² | β = Cov/σ²_M |
|---|---|---|---|
| A | 2.92% | 0.0225 | 0.0292/0.0225 = **1.298** |
| B | 1.80% | 0.0225 | 0.0180/0.0225 = **0.800** |
| C | 2.25% | 0.0225 | 0.0225/0.0225 = **1.000** |

> **Notice C's beta is exactly 1.00** — its covariance with the market equals the market's own variance, i.e. C moves in exactly the same proportion as the market. This is the same relationship as `β_M = Cov(M,M)/σ²_M = σ²_M/σ²_M = 1` — a useful identity to remember: **any asset with `Cov(i,M) = σ²_M` has β = 1 regardless of the asset's own total variance.**

---

## Question 3 (not from the textbook)

> Two stocks constitute the market portfolio: A (E(R)=10%, σ=20%, weight 40%), B (E(R)=15%, σ=28%, weight 60%). Correlation 0.30, RFR=5%. Specify the CML equation. Then show how to achieve a 15% target return via the CML in preference to holding stock B alone.

### Step 1 — the market portfolio's own return and risk

```
E(R_M) = w_A E(R_A) + w_B E(R_B) = 0.4(10%) + 0.6(15%) = 4% + 9% = 13%

σ²_M = w_A²σ_A² + w_B²σ_B² + 2w_Aw_B ρ σ_Aσ_B
     = (0.4)²(0.20)² + (0.6)²(0.28)² + 2(0.4)(0.6)(0.30)(0.20)(0.28)
     = 0.0064 + 0.028224 + 0.008064
     = 0.042688

σ_M = √0.042688 = 0.20661 = 20.66%
```

### Step 2 — the CML equation

```
E(R_port) = RFR + σ_port × [E(R_M) − RFR]/σ_M
          = 5% + σ_port × (13% − 5%)/20.66%
          = 5% + 0.3872 × σ_port
```

**CML: `E(R_port) = 5% + 0.3872 σ_port`.**

### Step 3 — achieving a 15% target return

Two equivalent routes to the same portfolio:

**Route A — solve for σ_port on the CML:**

```
15% = 5% + 0.3872 σ_port
σ_port = 10%/0.3872 = 25.83%
```

**Route B — solve for the weight in M:**

```
E(R_port) = RFR + w_M[E(R_M) − RFR]
15% = 5% + w_M(8%)
w_M = 10%/8% = 1.25   →   w_RF = 1 − 1.25 = −0.25
```

**The investor borrows 25% of their own equity and invests 125% in the market portfolio.** Checking consistency: `σ_port = w_M × σ_M = 1.25 × 20.66% = 25.83%` — matches Route A. ✓

### Step 4 — comparing against holding stock B alone

| | E(R) | σ |
|---|---|---|
| Stock B alone | 15% | 28.00% |
| CML portfolio (borrow 25%, 125% in M) | **15%** | **25.83%** |

**Same 15% expected return, but 2.17 percentage points less risk.** The CML portfolio strictly **dominates** holding stock B on its own — identical return, lower risk — because it achieves its return through the *efficient* combination of B with A (inside M) plus leverage at the RFR, rather than through the risk of a single asset. This is the CML's whole selling point: any return target achievable by a single risky holding is achievable with less risk via RF + M.

> **Why this isn't "cheating":** the leverage (`w_RF = −0.25`) does add risk relative to holding M alone, but M itself is already the most efficient risky combination available (it's minimum-variance for its return, by construction of the tangency portfolio) — so even after levering up to hit 15%, the total package still beats a concentrated single-stock bet at the same expected return.

---

## Question 4 (not from the textbook, not exam-likely — included to build intuition)

> A risky asset's risk-return relation is `R = ln(σ)`. RFR = 0.05. Sketch the curve, express the excess return, express the excess return per unit of risk, and find the maximum excess return per unit of risk.

### Sketching `R = ln(σ)`

`ln(σ)` is only defined for `σ > 0`, and `ln(σ) → −∞` as `σ → 0⁺`, crosses zero at `σ = 1` (100% risk — a very high-risk asset), and grows slowly (concave, ever-flattening) for `σ > 1`. Unlike the CML's straight line, this hypothetical asset offers **rapidly diminishing marginal return for extra risk** at high σ.

### Excess return

```
Excess return = R − RFR = ln(σ) − 0.05
```

### Excess return per unit of risk (a Sharpe-ratio-style quantity)

```
f(σ) = [ln(σ) − 0.05] / σ
```

### Maximising `f(σ)` — quotient rule

```
f(σ) = [ln(σ) − 0.05] / σ

f'(σ) = { (1/σ)·σ − [ln(σ) − 0.05]·1 } / σ²          (quotient rule, using d(ln x)/dx = 1/x)
       = [1 − ln(σ) + 0.05] / σ²
       = [1.05 − ln(σ)] / σ²
```

Set `f'(σ) = 0`. Since `σ² > 0` always, this requires the numerator to vanish:

```
1.05 − ln(σ*) = 0
ln(σ*) = 1.05
σ* = e^1.05 ≈ 2.8577   (i.e. 285.77% — an extreme, illustrative risk level)
```

**Maximum excess return per unit of risk:**

```
f(σ*) = [ln(σ*) − 0.05] / σ* = [1.05 − 0.05] / σ* = 1 / σ* = 1 / e^1.05 ≈ 0.3499
```

```python
import math
rfr = 0.05
sigma_star = math.exp(1 + rfr)   # = 2.8577
max_ratio = 1/sigma_star          # = 0.3499
```

**σ\* ≈ 2.858, maximum excess-return-per-unit-risk ≈ 0.350.** This is the σ at which a straight line from `(0, RFR)` — exactly the CML construction from Question 1 — would be tangent to this particular `R(σ)` curve; everything about the shape mirrors why the tangency point in the real CML derivation is unique and dominates every other combination.

> **Method note:** this question is really "find the tangency point on an arbitrary risk-return curve" dressed up algebraically — the same logic as Question 1's graphical argument, just done with calculus instead of a picture. If you understand *why* the tangent line dominates in Q1, this is the same idea with `d/dσ[(R(σ)−RFR)/σ] = 0` doing the work a ruler does on the graph.

---

## ✅ Checkpoint

1. Why is the tangent line from `(0, RFR)` to the efficient frontier the *dominant* set of portfolios, rather than any other line through `(0, RFR)`?
2. A stock's broker-forecast return is the highest of three stocks under consideration. Is it automatically the best buy? Why or why not?
3. Two analysts compute different betas for the same stock because they used different market-index proxies. What CAPM output changes as a direct result?
4. In Question 3, why does the CML portfolio targeting 15% beat holding Stock B outright, even though it requires borrowing?

<details><summary>Answers</summary>

1. Because the efficient frontier is concave, the tangent line has the **steepest slope achievable** from `(0, RFR)` — every other line through that point either crosses (and falls below) the frontier, or has a shallower slope and therefore less return per unit of risk at every σ.
2. **No.** The buy/sell decision compares each stock's *own* estimated return against its *own* CAPM-required return (which depends on its beta) — not against the estimated returns of other stocks. A high estimated return can still fall short of what a high beta demands.
3. The **required return under CAPM** (`E(Rᵢ) = RFR + βᵢ[E(R_M) − RFR]`) changes, since it depends directly on β — and with it, any under/overpriced verdict.
4. Because the market portfolio M (which the CML portfolio is built from) is already the most risk-efficient combination of all risky assets available — so even after adding leverage to reach a 15% return, the total risk (25.83%) is still lower than the risk of Stock B alone (28%) at the identical return.
</details>

---

*All figures above were computed from the question data and independently re-verified in Python. No solutions file was supplied for this tutorial, so nothing here is being checked against (or corrected against) a supplied answer key.*
