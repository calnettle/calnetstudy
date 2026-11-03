# Extra Practice Questions

<!-- notation:start -->
<details class="notation"><summary>Notation key — what the symbols in this note mean</summary>

| Symbol | Means |
|---|---|
| `E(R)` | Expected return — the probability-weighted average return you expect. E(Rᵢ) for asset i, E(R_p) for a portfolio |
| `Rᵢ, R_p` | A return — Rᵢ on asset i, R_p on the portfolio. The subscript says whose return it is |
| `RFR, R_f` | Risk-free rate — the return on a riskless asset such as a government bill |
| `R_M, R_m` | Market return — the return on the whole market (e.g. the ASX 200 as a proxy) |
| `σ (sigma)` | Standard deviation — how widely returns swing around their average. The standard measure of risk |
| `σ²` | Variance — standard deviation squared. Same information as σ in squared units; σ = √σ² |
| `σ₁, σᵢ` | Standard deviation of one asset (asset 1, asset i …) |
| `σ_p, σ_port` | Standard deviation of the whole portfolio |
| `σ_M` | Standard deviation of the market |
| `CV` | Coefficient of variation — σ ÷ E(R), risk per unit of expected return. Lower is better |
| `HPR` | Holding period return — ending value ÷ beginning value. 1.10 means +10% |
| `HPY` | Holding period yield — HPR − 1, the return as a percentage |
| `AM` | Arithmetic mean — the simple average of the period returns |
| `GM` | Geometric mean — the compound average return per period. Always ≤ AM |
| `n` | Number of items — observations, periods or assets, depending on the formula |
| `Σ` | "Add them all up" — a sum over every item (Σᵢ = over every asset i) |
| `w, wᵢ` | Weight — the fraction of the portfolio held in asset i. Weights add up to 1 |
| `Cov(i,j)` | Covariance — do two assets move together (+) or in opposite directions (−)? Cov(i,i) is just σᵢ² |
| `r(i,j), ρ` | Correlation — covariance rescaled to −1 … +1. +1 moves perfectly together, −1 perfectly opposite, 0 unrelated |
| `U` | Utility — an investor's satisfaction score for a portfolio. Higher is better |
| `A` | Risk-aversion coefficient — how much the investor dislikes risk (≈7 conservative, ≈1 aggressive) |
| `MM` | Maintenance margin — the minimum equity % before the broker makes a margin call |
| `N` | Number of shares bought, or sold short |
| `P*` | Margin-call price — the share price that triggers a margin call |
| `β (beta)` | Beta — how sensitive an asset is to market moves; its systematic risk. β = 1 moves with the market |
| `α (alpha)` | Alpha — the return above (or below) what the CAPM says the risk deserves |
| `CML` | Capital market line — the best mixes of the risk-free asset and the market portfolio, priced on total risk σ |
| `SML` | Security market line — the CAPM as a line: required return against beta |
| `CAPM` | Capital asset pricing model — E(Rᵢ) = R_f + βᵢ[E(R_M) − R_f] |
| `APT` | Arbitrage pricing theory — expected return explained by several risk factors, not just the market |
| `SMB` | Small Minus Big — the Fama–French size factor (small firms' return minus big firms') |
| `HML` | High Minus Low — the Fama–French value factor (high book-to-market minus low) |
| `AUM` | Assets under management — the (average) dollar size of the fund |
| `TCR` | Tax cost ratio — the share of return lost to tax |
| `S_T` | Share price at expiry (time T) |
| `X` | Strike (exercise) price of the option |
| `ATP` | Average tracking performance — average of (portfolio − benchmark) returns |
| `AATP` | Average absolute tracking performance — the same, ignoring sign |
| `σ(TP)` | Tracking error — standard deviation of (portfolio − benchmark) returns |
| `SI (Sharpe)` | Sharpe index — (R_p − R_f) ÷ σ_p: excess return per unit of total risk |
| `TI (Treynor)` | Treynor index — (R_p − R_f) ÷ β_p: excess return per unit of systematic risk |
| `IR` | Information ratio — active return ÷ tracking error |
| `EP, BP, Div, Cap.Dist` | Fund return inputs — ending price, beginning price, dividends paid, capital-gain distributions |

[Full EFB335 notation key →](#/EFB335/99-notation-key)

</details>
<!-- notation:end -->

> Attempt these closed-book, then check. Answers are collapsed.

## Set A — Returns and Risk (Topic 1)

**A1.** You buy a share for $80. Over the next year it pays a $3.20 dividend and ends the year at $86. Compute the HPR, the HPY, and split the HPY into its capital and income components.

<details><summary>Answer</summary>

```
Ending value = $86 + $3.20 = $89.20
HPR = $89.20 / $80 = 1.115
HPY = 0.115 = 11.5%

Capital component = ($86 − $80)/$80 = 7.5%
Income component  = $3.20/$80        = 4.0%
                                       ─────
                                       11.5% ✓
```
</details>

---

**A2.** An investment grew from $10,000 to $27,500 over 9 years. Find the annual HPR and annual HPY.

<details><summary>Answer</summary>

```
HPR = 27,500 / 10,000 = 2.75
Annual HPR = 2.75^(1/9) = 1.11896
Annual HPY = 11.90%
```
Check: 10,000 × 1.11896⁹ = $27,500 ✓
</details>

---

**A3.** A stock returns +60% in year 1 and −40% in year 2. Compute the AM and GM. Explain the difference to a non-finance friend.

<details><summary>Answer</summary>

```
AM = (0.60 − 0.40) / 2 = 0.10 = 10%
GM = [(1.60)(0.60)]^(1/2) − 1 = (0.96)^0.5 − 1 = 0.9798 − 1 = −2.02%
```

**Explanation:** $100 → $160 → $96. You **lost** money, despite an "average" return of +10%. The AM adds percentages that are calculated off different bases; the GM tracks the actual dollar path. **Only the GM tells you what happened to your wealth.** The gap here is huge (12 pp) because volatility is huge (σ = 50%).
</details>

---

**A4.** An investment has the following distribution. Compute E(R), σ², σ and CV.

| Probability | Return |
|---|---|
| 0.20 | −0.15 |
| 0.50 | 0.08 |
| 0.30 | 0.25 |

<details><summary>Answer</summary>

```
E(R) = 0.20(−0.15) + 0.50(0.08) + 0.30(0.25)
     = −0.030 + 0.040 + 0.075 = 0.085 = 8.5%

σ² = 0.20(−0.15 − 0.085)² + 0.50(0.08 − 0.085)² + 0.30(0.25 − 0.085)²
   = 0.20(0.055225) + 0.50(0.000025) + 0.30(0.027225)
   = 0.011045 + 0.0000125 + 0.0081675
   = 0.019225

σ  = 13.87%
CV = 0.1387 / 0.085 = 1.632
```
</details>

---

**A5.** Investment X: E(R) = 12%, σ = 18%. Investment Y: E(R) = 7%, σ = 9%. The risk-free rate is 3%. Which is preferable on (a) CV and (b) Sharpe ratio? Do they agree? Why or why not?

<details><summary>Answer</summary>

```
CV(X) = 18/12 = 1.50        CV(Y) = 9/7  = 1.286  →  Y preferred (lower CV)
Sharpe(X) = (12−3)/18 = 0.500   Sharpe(Y) = (7−3)/9 = 0.444  →  X preferred (higher Sharpe)
```

**They disagree.** CV divides **total** return by risk; Sharpe divides **excess** return (over the risk-free rate) by risk. Because Y's return is closer to the risk-free rate, subtracting R_f penalises Y proportionally far more. **Sharpe is the better measure** — it correctly recognises you can earn 3% risk-free without taking any risk at all, so only the excess is compensation for risk.
</details>

---

## Set B — Margin Transactions (Topic 1)

**B1.** You buy 2,000 shares at $25 with an initial margin of 60%. Maintenance margin is 30%.
(a) How much do you borrow? (b) What is your initial equity? (c) At what price do you get a margin call? (d) What is your return on equity if the price rises to $32?

<details><summary>Answer</summary>

```
(a) Total value = 2,000 × $25 = $50,000
    Loan = $50,000 × (1 − 0.60) = $20,000

(b) Equity = $50,000 × 0.60 = $30,000

(c) P* = Loan / [N(1 − MM)]
       = $20,000 / (2,000 × 0.70)
       = $20,000 / 1,400
       = $14.29

(d) Value at $32 = 2,000 × $32 = $64,000
    Equity = $64,000 − $20,000 = $44,000
    Return = ($44,000 − $30,000) / $30,000 = 46.67%

    (Stock rose 28%; equity rose 46.67% = 28% × 1/0.60 ✓)
```
> Note this is where the spreadsheet's `Equity/(N(1−MM))` shortcut **fails**: it would give $30,000/1,400 = $21.43, which is wrong. The correct numerator is the **loan**.
</details>

---

**B2.** You short-sell 500 shares at $60 with a 50% initial margin. Maintenance margin is 30%. No dividends.
(a) What is your initial equity? (b) At what price do you receive a margin call? (c) If you close at $48, what is your rate of return?

<details><summary>Answer</summary>

```
(a) Proceeds = 500 × $60 = $30,000
    Deposit  = $30,000 × 0.50 = $15,000
    Initial equity = $15,000 (your own capital)

(b) P* = (Proceeds + Deposit) / [N(1 + MM)]
       = ($30,000 + $15,000) / (500 × 1.30)
       = $45,000 / 650
       = $69.23

(c) Cost to close = 500 × $48 = $24,000
    Profit = $30,000 − $24,000 = $6,000
    Return = $6,000 / $15,000 = 40%
```
Note the **(1 + MM)** in (b) — the short-seller's danger is a *rising* price.
</details>

---

**B3.** *Conceptual.* Explain why a long margin buyer's maximum loss is capped at 100% of their equity but a short seller's loss is theoretically unlimited.

<details><summary>Answer</summary>

**Long buyer:** the stock price is bounded below at $0. The worst case is the shares become worthless, so the maximum loss equals the total position value. Since the loan is *fixed*, the investor loses their entire equity (and the broker's margin call mechanism normally forces a sale before equity reaches zero).

**Short seller:** the stock price is **unbounded above**. The short seller has an obligation to buy back the shares at whatever price prevails. If the stock goes from $60 to $600, the loss is $540/share — 900% of the initial proceeds. There is no upper limit, which is why brokers impose maintenance margins and why short positions demand active management.
</details>

---

## Set C — Portfolio Theory (Topic 2)

**C1.** Two assets:

| | E(R) | σ | Weight |
|---|---|---|---|
| A | 8% | 12% | 0.40 |
| B | 14% | 20% | 0.60 |

Correlation r = 0.30. Compute E(R_port) and σ_port.

<details><summary>Answer</summary>

```
E(R_port) = 0.40(0.08) + 0.60(0.14) = 0.032 + 0.084 = 0.116 = 11.6%

Cov(A,B) = 0.30 × 0.12 × 0.20 = 0.0072

σ²_port = (0.40)²(0.12)² + (0.60)²(0.20)² + 2(0.40)(0.60)(0.0072)
        = (0.16)(0.0144) + (0.36)(0.0400) + (0.48)(0.0072)
        = 0.002304 + 0.014400 + 0.003456
        = 0.020160

σ_port = √0.020160 = 0.14199 = 14.20%
```

**Diversification benefit:** the weighted average of the SDs is 0.40(12%) + 0.60(20%) = **16.8%**. The actual portfolio SD is **14.20%** — a saving of **2.6 percentage points** at no cost to expected return.
</details>

---

**C2.** Using the same two assets, recompute σ_port for r = +1.0, r = 0, and r = −1.0. Comment.

<details><summary>Answer</summary>

```
σ²_port = 0.002304 + 0.014400 + 2(0.24)(r)(0.12)(0.20)
        = 0.016704 + 0.01152r

r = +1.0:  σ² = 0.028224  →  σ = 16.80%   (= weighted average — no benefit)
r =  0.0:  σ² = 0.016704  →  σ = 12.92%
r = −1.0:  σ² = 0.005184  →  σ =  7.20%   (= |0.40(12) − 0.60(20)| = 7.2% ✓)
```

**Comment:** portfolio return is **11.6% in every case** — correlation has zero effect on return. But risk falls from 16.80% to 7.20% as correlation falls from +1 to −1. **Correlation is the only lever that reduces risk without sacrificing return.** Even at r = −1.0 the SD is not zero here, because these weights are not the risk-minimising ones (that would be w_A = 20/32 = 0.625).
</details>

---

**C3.** You are given σ_A = 15%, σ_B = 22%, Cov(A,B) = 0.0165. What is the correlation coefficient? Interpret.

<details><summary>Answer</summary>

```
r = Cov / (σ_A × σ_B) = 0.0165 / (0.15 × 0.22) = 0.0165 / 0.033 = 0.50
```

A **moderate positive correlation**. The assets tend to move in the same direction about half the time in a linear sense. R² = 0.25, so only 25% of the variation in one is explained by the other — meaningful diversification benefit remains (any r < 1 helps).
</details>

---

**C4.** A portfolio has E(r) = 11% and σ = 16%. Compute the utility for a conservative investor (A = 7) and an aggressive investor (A = 1). Which investor would prefer a risk-free asset paying 4%?

<details><summary>Answer</summary>

```
σ² = 0.16² = 0.0256

Conservative (A = 7): U = 0.11 − 0.5(7)(0.0256) = 0.11 − 0.0896 = 0.0204 = 2.04%
Aggressive   (A = 1): U = 0.11 − 0.5(1)(0.0256) = 0.11 − 0.0128 = 0.0972 = 9.72%
```

**The risk-free asset has U = 4% for everyone** (σ² = 0, so U = E(r)).

- Conservative investor: 2.04% < 4.00% → **prefers the risk-free asset.**
- Aggressive investor: 9.72% > 4.00% → **prefers the risky portfolio.**

U is a **certainty equivalent** — the guaranteed return that leaves the investor indifferent to the risky portfolio.
</details>

---

**C5.** How many variance and unique covariance terms are required to compute the portfolio variance of a 40-asset portfolio? How does the single-index model reduce this?

<details><summary>Answer</summary>

```
Variance terms:            n = 40
Unique covariance terms:   n(n−1)/2 = (40 × 39)/2 = 780
Total inputs:              820
```

Under the **single-index model**, each asset needs only a **beta** relative to the market index, plus the market variance. Covariances are then derived as `Cov(i,j) = βᵢβⱼσ²_market`. This reduces **780 covariance estimates to 40 beta estimates** — and dramatically reduces estimation risk, since each beta is estimated from a single regression rather than each pairwise correlation being estimated separately.
</details>

---

**C6.** *Conceptual.* Portfolio P has E(R) = 10% and σ = 14%. Portfolio Q has E(R) = 10% and σ = 18%. Portfolio R has E(R) = 13% and σ = 14%. Which portfolios are efficient? Which are dominated, and by whom?

<details><summary>Answer</summary>

- **Q is dominated by P** — equal return (10%), higher risk (18% vs 14%). Q is **inefficient**.
- **P is dominated by R** — equal risk (14%), lower return (10% vs 13%). P is also **inefficient** relative to R.
- **R is efficient** among these three — nothing offers a higher return at 14% risk or lower risk at 13% return.

Dominance requires being **at least as good on one dimension and strictly better on the other**.
</details>

---

**C7.** *Short answer.* State the five Markowitz assumptions about investor behaviour, and identify which assumption is violated by an investor who buys lottery tickets while also insuring their home.

<details><summary>Answer</summary>

**The five assumptions:** investors (1) consider investments as probability distributions of expected returns over a holding period; (2) maximise one-period expected utility, exhibiting diminishing marginal utility of wealth; (3) estimate portfolio risk from the variability of expected returns; (4) base decisions solely on expected return and risk; (5) prefer higher return for given risk and less risk for given return.

**Violated:** assumption **(5)** — risk aversion — and arguably **(2)**. A lottery ticket has a **negative** expected return and **enormous** variance; a risk-averse investor should never buy one. The lecture acknowledges this directly: *"not all investors avoid risk... it may depend on the amount of money involved: risking small amounts but insuring against large losses."* This is the classic **Friedman–Savage** utility puzzle: the utility function is concave (risk-averse) over large losses but convex (risk-seeking) over small stakes with large payoffs.
</details>

---

## Set D — Multi-asset portfolios, annualising and strategy evaluation (Topic 2)

**D1.** Three assets held at weights `w = (0.50, 0.30, 0.20)`. The **monthly** covariance matrix is:

```
           A         B         C
A     0.0040    0.0012    0.0008
B     0.0012    0.0025    0.0005
C     0.0008    0.0005    0.0090
```

Compute the monthly and annual portfolio standard deviation, and state the diversification benefit against the weighted average of the three annual SDs.

<details><summary>Answer</summary>

`σ²_port = wᵀ Σ w` — six distinct terms, three variances and three doubled covariances:

```
Variance terms   (0.50)²(0.0040) = 0.00100000
                 (0.30)²(0.0025) = 0.00022500
                 (0.20)²(0.0090) = 0.00036000

Covariance terms 2(0.50)(0.30)(0.0012) = 0.00036000
                 2(0.50)(0.20)(0.0008) = 0.00016000
                 2(0.30)(0.20)(0.0005) = 0.00006000
                                          ──────────
σ²_monthly                              = 0.00216500
σ_monthly  = √0.002165 = 4.653%
```

Annualise the **variance** by 12, then take the root:

```
σ²_annual = 0.002165 × 12 = 0.025980
σ_annual  = √0.025980     = 16.118%     (= 4.653% × √12 ✓)
```

Individual annual SDs are `√(0.0040×12) = 21.909%`, `√(0.0025×12) = 17.321%` and `√(0.0090×12) = 32.863%`. Their weighted average is **22.723%**.

**Diversification benefit = 22.723% − 16.118% = 6.61 percentage points.** The correlations are low — 0.379 (A–B), 0.133 (A–C), 0.105 (B–C) — which is why the benefit is large.
</details>

---

**D2.** A stock's monthly returns have a mean of **0.9%** and a standard deviation of **5.2%**. Annualise both. What do you get if you multiply each by 12 instead, and why is that wrong?

<details><summary>Answer</summary>

```
Annual return = (1 + 0.009)¹² − 1 = 11.351%
Annual σ      = 0.052 × √12       = 18.013%
```

Multiplying by 12 gives **10.80%** and **62.4%**.

- **The return** is only slightly wrong (10.80% vs 11.351%) because `12 × r̄` ignores **compounding**. The gap widens fast as the monthly return grows.
- **The standard deviation is catastrophically wrong** — 62.4% against 18.0%, an overstatement of 3.46×. **Variance** is what scales linearly with time, so σ scales with **√t**. `σ × 12` is `σ × √12 × √12`, i.e. √12 ≈ 3.46 times too large.
</details>

---

**D3.** Two assets: `σ₁ = 18%`, `σ₂ = 25%`, correlation `r = 0.30`. Find the minimum-variance weights and the resulting portfolio SD. Compare with an equal-weighted portfolio.

<details><summary>Answer</summary>

```
Cov(1,2) = 0.30 × 0.18 × 0.25 = 0.0135

w₁* = (σ₂² − Cov) / (σ₁² + σ₂² − 2Cov)
    = (0.0625 − 0.0135) / (0.0324 + 0.0625 − 0.0270)
    = 0.0490 / 0.0679
    = 0.7216

w₂* = 0.2784

σ²_port = (0.7216)²(0.0324) + (0.2784)²(0.0625) + 2(0.7216)(0.2784)(0.0135)
        = 0.027139
σ_port  = 16.474%
```

Equal weights give `σ = 17.457%` — **0.98 pp worse**, and both are below either asset alone.

> **Do not reach for `w₁* = σ₂²/(σ₁² + σ₂²)`.** That is the **special case for r = 0** and would give 0.6586 here. The general formula has `− Cov` on top and `− 2Cov` on the bottom; they vanish only when the covariance is zero.
</details>

---

**D4.** *Conceptual.* You compute a covariance and two standard deviations from six observations, once dividing by 6 and once by 5. The two covariances differ and the two pairs of standard deviations differ, yet both give **exactly** the same correlation coefficient. Explain, then state the one way to get this wrong.

<details><summary>Answer</summary>

Write the correlation out in full:

```
        Σ(xᵢ − x̄)(yᵢ − ȳ) / k
r = ─────────────────────────────────────────
    √[Σ(xᵢ − x̄)²/k] × √[Σ(yᵢ − ȳ)²/k]
```

The denominator's two square roots each contribute one factor of `1/√k`, so together they contribute `1/k` — which **cancels** the `1/k` in the numerator. Whatever `k` is, it disappears. Correlation is a pure, scale-free number.

**The one way to get it wrong: mixing conventions.** Use `COVARIANCE.P` with `STDEV.S`, and the `k`s no longer cancel — you get a number that is neither a population nor a sample correlation and is not bounded by ±1 in general. This is exactly the mismatch that turns the EFB335 2021 stocks-vs-bonds correlation from the correct **0.1813** into a meaningless **0.1662**.
</details>

---

**D5.** A back-tested strategy returns **6.2% p.a.** over five years with **320 trades**. Buy-and-hold on the same asset over the same window returned **9.1% p.a.** Round-trip transaction costs are **10 basis points**. Evaluate the strategy.

<details><summary>Answer</summary>

```
Trades per year   = 320 / 5 = 64
Annual cost drag  = 64 × 0.10% = 6.4%
Net annual return = 6.2% − 6.4% = −0.2%
```

**The strategy is a failure on three separate grounds, and you should state all three:**

1. **It loses to its benchmark before costs.** 6.2% against 9.1% for doing nothing. Gross outperformance is the minimum bar, and it is not cleared.
2. **It is negative after costs.** The 6.4% cost drag more than consumes the entire gross return. A gross return is not a return.
3. **Tax has not been counted.** 64 trades a year realise gains annually at the full marginal rate, whereas buy-and-hold defers the gain and (in Australia, after 12 months) attracts the CGT discount. The after-tax gap is wider still than −0.2% vs 9.1%.

**Also required for a complete evaluation:** the strategy's **risk**. A lower return at materially lower volatility would at least be a coherent trade-off. Return alone never settles the question.
</details>

---

**D6.** *Short answer.* Excel's Data Analysis → Covariance tool returns a covariance matrix for 50 assets. State how many numbers it produces, why you cannot feed it straight into `MMULT`, and which divisor it has used.

<details><summary>Answer</summary>

```
Numbers produced = n(n+1)/2 = (50 × 51)/2 = 1,275
   ( = 50 variances on the diagonal + 1,225 unique covariances )
```

**Why you cannot use it directly:** the tool outputs only the **lower triangle**. `MMULT` reads the blank upper triangle as **zeros**, so `wᵀΣw` would omit half of every covariance term and **understate** the portfolio variance. You must mirror the triangle into a full 50 × 50 symmetric square (2,500 cells) first.

**Divisor:** Data Analysis → Covariance uses the **population** divisor `n`, with no option to change it — matching `VAR.P` / `COVARIANCE.P`, not `VAR.S` / `COVARIANCE.S`. Take your standard deviations with `STDEV.P` to stay consistent.
</details>

---

## Set E — Capital Market Line and CAPM (Topic 3)

**E1.** `RFR = 3%`, `E(R_M) = 8%`, `σ_M = 12%`. What standard deviation is required to target an expected return of 20%, and what does the required weighting imply about the investor's position (borrowing or lending)?

<details><summary>Answer</summary>

```
slope = (8% − 3%) / 12% = 0.41667
σ_port = (20% − 3%) / 0.41667 = 40.80%

w_M = (20% − 3%) / (8% − 3%) = 3.4   →   w_RF = 1 − 3.4 = −2.4
```

**σ_port = 40.80%.** `w_RF = −2.4` means heavy **borrowing** — for every $1 of the investor's own equity, borrow $2.40 more and put the full $3.40 into the market portfolio. Check: `w_M × σ_M = 3.4 × 12% = 40.80%` ✓. A target this far above `E(R_M)` always implies leverage, since `E(R_M) = 8%` is the return at `w_RF = 0`.
</details>

---

**E2.** `σ_M = 18%`. Given the covariance of stocks X, Y and Z with the market, find their betas: `Cov(X,M) = 3.24%`, `Cov(Y,M) = 1.62%`, `Cov(Z,M) = −0.90%`.

<details><summary>Answer</summary>

```
β = Cov(i,M) / σ²_M,   σ²_M = 0.18² = 0.0324

X:  0.0324 / 0.0324 = 1.00
Y:  0.0162 / 0.0324 = 0.50
Z: −0.0090 / 0.0324 = −0.28
```

**β_X = 1.00, β_Y = 0.50, β_Z = −0.28.** X moves exactly with the market. Y is a defensive, half-as-volatile stock. Z has a **negative** beta — it tends to move against the market, and would carry a CAPM-required return *below* the risk-free rate.
</details>

---

**E3.** `RFR = 6%`, `E(R_M) = 11%`. Three stocks: P (β=1.10, analyst estimate 12%), Q (β=0.60, analyst estimate 7.5%), R (β=1.80, analyst estimate 16%). Find each stock's CAPM-required return and state whether it is under- or overpriced.

<details><summary>Answer</summary>

```
Market risk premium = 11% − 6% = 5%
```

| Stock | β | Required = 6% + β(5%) | Estimated | Verdict |
|---|---|---|---|---|
| P | 1.10 | **11.5%** | 12.0% | Above SML → **underpriced, buy** |
| Q | 0.60 | **9.0%** | 7.5% | Below SML → **overpriced, sell** |
| R | 1.80 | **15.0%** | 16.0% | Above SML → **underpriced, buy** |

Note R has both the highest beta *and* the highest estimated return of the three — high beta alone tells you nothing about mispricing. R is a buy not because 16% is a big number, but because 16% **exceeds what its own beta of 1.80 demands** (15%).
</details>

---

**E4.** *Short answer.* State the Separation Theorem in one sentence. An investor becomes significantly more risk-averse after a market downturn. According to the theorem, which of their two portfolio decisions should change, and which should not?

<details><summary>Answer</summary>

**Separation Theorem:** the decision of *which risky assets to hold* (always the market portfolio, M) is independent of the decision of *how much to borrow or lend* at the risk-free rate to reach a personally preferred risk level.

**What should change:** the **financing decision** — a more risk-averse investor should move toward **lending** (a higher `w_RF`), holding less of M and more of the risk-free asset.

**What should NOT change:** the **investment decision** — the risky-asset holding itself should still be the market portfolio, M, in the same proportions as before. Risk aversion is expressed entirely through the RF/M mix, never by tilting away from M into a different combination of risky assets.
</details>

---

**E5.** Two risky assets form the entire market portfolio: M1 (E(R)=12%, σ=25%, weight 35%) and M2 (E(R)=9%, σ=15%, weight 65%), correlation 0.20. `RFR = 4%`. Derive the CML equation, then find the expected return of a portfolio targeting `σ_port = 10%`, and the required split between the risk-free asset and M.

<details><summary>Answer</summary>

```
E(R_M) = 0.35(12%) + 0.65(9%) = 4.20% + 5.85% = 10.05%

σ²_M = (0.35)²(0.25)² + (0.65)²(0.15)² + 2(0.35)(0.65)(0.20)(0.25)(0.15)
     = 0.007656 + 0.009506 + 0.003413
     = 0.020575

σ_M = √0.020575 = 14.34%
```

```
CML:  E(R_port) = 4% + σ_port × (10.05% − 4%)/14.34% = 4% + 0.4218 σ_port
```

At `σ_port = 10%`:

```
E(R_port) = 4% + 0.4218(10%) = 4% + 4.22% = 8.22%

w_M = σ_port / σ_M = 10% / 14.34% = 0.6972   →   w_RF = 1 − 0.6972 = 0.3028
```

**Invest 69.72% in the market portfolio, 30.28% in the risk-free asset, for an expected return of 8.22% at 10% risk.** Since `w_RF > 0`, this is a **lending** position — less risky than holding M outright (which would carry `σ_M = 14.34%`).
</details>

## Set F — APT and Multifactor Models (Topic 4)

**F1.** A two-factor APT has λ0 = 3.5%, λ1 = 4% and λ2 = 1.5%. Asset M has sensitivities (1.2, 0.6); asset N has (0.7, 2.0). Calculate each expected return. Which asset carries more factor-1 risk, and does the ordering of expected returns follow?

<details><summary>Answer F1</summary>

```
E(R_M) = 3.5 + 4(1.2) + 1.5(0.6) = 3.5 + 4.8 + 0.9 = 9.2%
E(R_N) = 3.5 + 4(0.7) + 1.5(2.0) = 3.5 + 2.8 + 3.0 = 9.3%
```

M carries more factor-1 risk (1.2 vs 0.7), but N still requires slightly more overall because its heavy factor-2 exposure (2.0) outweighs the cheaper premium on that factor. Expected return orders on the *weighted sum* of exposures, not on any single factor.

</details>

**F2.** Under a factor model, stocks X and Y have required returns of 6% and 9%. Both trade at $50 today and pay no dividends. Your research forecasts prices one year out of $52.40 (X) and $55.10 (Y). Classify each stock and state the trade.

<details><summary>Answer F2</summary>

Discount **your forecast** at the **model's** required return and compare to today's price:

```
X: 52.40 / 1.06 = $49.43  <  $50   → overpriced  → SHORT
Y: 55.10 / 1.09 = $50.55  >  $50   → underpriced → BUY
```

Note X is overpriced *even though its price is expected to rise* — the forecast rise (4.8%) is below the risk-required 6%. Comparing the raw forecasts to the model's future prices ($53.00, $54.50) reaches the same verdicts; comparing forecasts to $50 does not, and is the standard error.

</details>

**F3.** Stocks P, Q and R have factor sensitivities (1.0, 0.8), (0.6, −0.4) and (1.4, 2.0) respectively, and all trade at $40. Show that a portfolio short 1 share of P and long 0.5 shares each of Q and R is a legitimate arbitrage *candidate* on the risk conditions, and state the third condition it must also satisfy.

<details><summary>Answer F3</summary>

```
Net wealth:   +40 − 20 − 20                        = 0  ✓
Factor 1:     (−1)(1.0) + 0.5(0.6) + 0.5(1.4)      = 0  ✓
Factor 2:     (−1)(0.8) + 0.5(−0.4) + 0.5(2.0)     = 0  ✓
```

Zero net investment and zero exposure to **each** factor. The third condition: the expected payoff must be **strictly positive** (`Σwᵢ·Rᵢ > 0`) given your price forecasts — without that, it's a costless, riskless portfolio that earns nothing, which is not an arbitrage.

</details>

**F4.** A managed fund's Fama–French three-factor regression (monthly data, five years) returns: market 0.85, SMB +0.9, HML −0.6, R² = 0.88. (a) Describe the fund's style. (b) What must be true of the return series used, and what tool produces this output in Excel?

<details><summary>Answer F4</summary>

(a) A slightly defensive (beta 0.85) **small-cap growth** fund: the positive SMB loading says it behaves like small companies; the negative HML loading says it behaves like low book-to-market (growth) stocks. The three factors explain 88% of its monthly variation.

(b) Both the fund's returns and the market factor must be **excess** returns (net of the risk-free rate), matching the model's form. In Excel: **Data → Data Analysis → Regression** with the three factor columns selected together as the X range — one multivariate regression, not three `SLOPE()` calls.

</details>

**F5.** The risk-free rate is 3%. A stock's Fama–French loadings are: market 1.1, SMB 0.4, HML −0.2. Estimated premia: λM = 7%, λSMB = 2%, λHML = 4%. Find the expected excess return and the expected total return.

<details><summary>Answer F5</summary>

```
Excess: 1.1(7) + 0.4(2) + (−0.2)(4) = 7.7 + 0.8 − 0.8 = 7.7%
Total:  3 + 7.7 = 10.7%
```

The negative HML loading (growth behaviour) *subtracts* required return — exposure that hedges a priced factor is compensated less.

</details>

**F6.** "The APT's greatest strength is also its greatest weakness." Discuss with reference to Roll's critique and Shanken's challenge.

<details><summary>Answer F6</summary>

The strength: APT never specifies its factors and never invokes the market portfolio, so it is immune to **Roll's critique** — no benchmark proxy is needed, and benchmark error cannot contaminate it (unlike CAPM betas, which change with the index chosen). The weakness — **Shanken (1982)**: precisely because the factors are unnamed, equivalent sets of returns can conform to different factor structures; if chosen factors fail to explain returns, the APT itself is never falsified, only the factor choice. A theory that can't fail a test is effectively **untestable**. Full-marks answers state both directions and note the empirical record in between: Roll–Ross (1980) found 3–5 factors and "general support", but follow-ups found the factor count varies with portfolio size and that unique risk sometimes predicts returns, which the theory forbids.

</details>

**F7.** A portfolio's three-factor regression over 30 months gives: intercept 0.61 (t = 2.1), b1 = 1.02 (t = 18.4), b2 = 0.07 (t = 0.6), b3 = −0.29 (t = −2.8), R² = 0.94. Interpret every number a marker would expect you to mention.

<details><summary>Answer F7</summary>

- **b1 = 1.02, t = 18.4** — a market-like factor exposure of about one, overwhelmingly significant: the portfolio moves one-for-one with factor 1.
- **b2 = 0.07, t = 0.6** — statistically indistinguishable from zero (|t| < ~2): factor 2 is not priced into this portfolio.
- **b3 = −0.29, t = −2.8** — significant *negative* exposure: the portfolio hedges factor 3, and holding it should lower required return through that channel.
- **Intercept 0.61, t = 2.1** — marginally significant abnormal return of 0.61%/month the factors don't explain.
- **R² = 0.94** — the factors jointly explain 94% of monthly variation: excellent fit. Note joint fit (R²) and per-factor significance (t) answer different questions — b2 contributes nothing even though the model overall fits superbly.

</details>

---

## Set G — Market Efficiency (Topic 5)

**G1.** *(Practice numbers.)* A stock's daily price changes over 12 days are `+-+-+--+-+-+`. (a) Count the runs. (b) Calculate the expected number of runs if changes were independent. (c) What does the result say about weak-form efficiency?

<details><summary>Answer G1</summary>

(a) `+ | - | + | - | + | -- | + | - | + | - | +` = **11 runs** (n₁ = 6 pluses, n₂ = 6 minuses).

(b)
```
E(runs) = 2n₁n₂/(n₁ + n₂) + 1 = 2(6)(6)/12 + 1 = 6 + 1 = 7
(unit workbook form: 1 + 2(12 − 1)(0.5)(0.5) = 6.5)
```

(c) 11 actual vs about 7 expected: **more runs than expected**. Price changes keep reversing, which is **negative** dependence. That still contradicts independence, so it is evidence against the weak form. It is the opposite pattern to the deck's checkpoint, where too few runs meant trends. With 12 observations the sample is far too small to conclude anything in practice.

</details>

**G2.** *(Practice numbers, %.)* Two firms announce surprise earnings on day 0.

```
Day          −1     0     +1    +2    +3
Firm X  R   0.5   3.0   1.2   0.9   0.8
        Rm  0.4   0.5   0.2   0.1   0.3
Firm Y  R  −0.3   2.6   1.5   0.4   0.6
        Rm −0.2   0.4   0.3  −0.3   0.2
```

Calculate AR, AAR and CAR, and state whether the result is consistent with semi-strong efficiency.

<details><summary>Answer G2</summary>

```
Day                −1      0      +1     +2     +3
AR_X = R − Rm     0.1    2.5    1.0    0.8    0.5
AR_Y = R − Rm    −0.1    2.2    1.2    0.7    0.4
AAR (average)    0.00   2.35   1.10   0.75   0.45
CAR (running)    0.00   2.35   3.45   4.20   4.65
```

Only 2.35/4.65 = **50.5%** of the 4.65% cumulative abnormal return arrives on day 0. The other **49.5%** drifts in over the next three days. An investor who bought at the close on day 0, after the news was public, would still have earned about 2.3% abnormal. That is **inconsistent with semi-strong efficiency**: the post-earnings-announcement drift pattern. Caveat: `R − Rm` ignores beta, so the joint hypothesis applies.

</details>

**G3.** *(Practice numbers.)* An autocorrelation regression of daily ASX returns on the previous day's return gives ρ = −0.04, with a t-statistic of −0.9. Interpret it for weak-form efficiency.

<details><summary>Answer G3</summary>

ρ is close to zero and **not statistically significant** (|t| is below roughly 2). Yesterday's return explains `ρ² = 0.04² = 0.0016 = 0.16%` of today's variation, which is essentially nothing. Past returns don't predict future returns, which is **consistent with weak-form efficiency**. Even a significant ρ this small would be unprofitable after transaction costs, which is why trading-rule tests complement the statistical tests.

</details>

**G4.** *(Sample-exam style, 4 marks.)* (a) Describe semi-strong form efficiency. (b) Explain how an event study tests it. (c) Give one piece of evidence against it.

<details><summary>Answer G4</summary>

(a) Prices fully reflect **all publicly available information**, market and non-market, including the historical data covered by the weak form. Trading on information after it is announced cannot earn above-average **risk-adjusted** returns, and fundamental analysis of public data adds nothing on average.

(b) Collect firms with a surprise announcement and set the announcement day as day 0. Compute each firm's daily abnormal return `AR = R − Rm` over the window, average across firms (AAR) and cumulate across days (CAR). Efficient: the CAR adjusts fully on day 0 and is flat afterwards, so there is nothing to earn by trading after the announcement.

(c) Any one of: **post-earnings-announcement drift** (large SUEs, with over 50% of the price change after the announcement); the **low-P/E**, **size**, **neglected-firm** or **book-to-market** effects, where public information predicts risk-adjusted returns. Note the joint hypothesis: these may instead reflect a mis-specified risk model.

</details>

**G5.** Is the strong form of the EMH supported? Refer to the three groups the deck tests.

<details><summary>Answer G5</summary>

**No, the strong form is rejected.** **Corporate insiders** earn above-average returns on their own firms' stock, especially on purchases, so private information is not fully reflected in price. **Security analysts** show some superior ability (market timing and stock picking); consensus levels carry no incremental information, but changes in consensus and upward earnings revisions are useful. **Professional money managers** mostly fail to beat their benchmarks, which gives at best weak support for the strong form. The rejection rests on insiders. Public investors who copy insider trades after disclosure don't profit after costs, which is consistent with semi-strong efficiency.

</details>

**G6.** Momentum and long-term reversals are both documented in stock returns. Define each, give its horizon, and give one behavioural explanation for each.

<details><summary>Answer G6</summary>

**Momentum:** recent winners keep outperforming over the next **1–12 months** (Jegadeesh and Titman). It is explained by **underreaction**. Under the disposition effect from prospect theory, investors sell winners too soon and hold losers too long, so prices adjust slowly. Under gradual information diffusion (Hong and Stein), news spreads slowly across newswatchers.

**Long-term reversal:** over **3–5 years**, past winners become losers and past losers become winners (DeBondt and Thaler). It is explained by **overreaction**. Extreme losers become too cheap and extreme winners too expensive. Under overconfidence and self-attribution (Daniel, Hirshleifer and Subrahmanyam), prices overshoot and then correct. In Hong–Stein, momentum traders push prices past fundamentals, which then revert.

Both patterns make past returns predictive, which challenges the weak form. Fama–French's 3-factor model explains reversals but not momentum.

</details>

---

## Set H — Equity Portfolio Management Strategies (Topic 6)

**H1.** *(Practice numbers.)* An index fund's monthly returns over four months were 0.9%, 1.4%, −0.6% and 2.0%; its benchmark returned 1.0%, 1.1%, −0.4% and 1.8%. Using the official formula sheet, calculate ATP, AATP and σ(TP), then annualise σ(TP). Is this a good result for a passive manager?

<details><summary>Answer H1</summary>

```
Δ = Rp − Rb:   −0.1, +0.3, −0.2, +0.2

ATP   = (−0.1 + 0.3 − 0.2 + 0.2) / 4       = 0.2 / 4  = 0.05%
AATP  = (0.1 + 0.3 + 0.2 + 0.2) / 4         = 0.8 / 4  = 0.20%
σ(TP) = √[(0.01 + 0.09 + 0.04 + 0.04) / 4]  = √(0.18 / 4) = √0.045 = 0.212% a month
Annualised: 0.212 × √12 = 0.73% a year
```

Yes. The fund beats the index by only 0.05% a month on average, and its deviations are small (annualised tracking error of about 0.7%). A passive manager is judged on low tracking error, not on beating the index. Annualise with √12, not 12.

</details>

**H2.** *(Practice numbers.)* Active fund K earned 12.0% pretax and 10.0% after tax. Index fund L earned 12.0% pretax and 11.6% after tax. K sold $600m of securities during the year; L sold $15m. Both started the year at $480m and ended at $520m. Calculate each fund's tax cost ratio and portfolio turnover, and explain the link between them.

<details><summary>Answer H2</summary>

```
TCR_K = 1 − 1.100 / 1.120 = 1 − 0.9821 = 1.79%
TCR_L = 1 − 1.116 / 1.120 = 1 − 0.9964 = 0.36%

AUM (average) = (480 + 520) / 2 = $500m
PT_K = 600 / 500 = 120%
PT_L =  15 / 500 =   3%
```

High turnover crystallises capital gains every year, so investors in K pay tax sooner. Same pretax return, but K's investors keep 1.6 points less. That's why active funds generally have a higher TCR than passive funds.

</details>

**H3.** *(Practice numbers; ignore short-sale costs.)* A manager runs a $50m 130/30 fund. State the long and short positions and the net exposure. If the long book returns 9% and the stocks shorted return 4%, what does the fund return, and how much of that comes from the extension compared with a long-only fund holding the same longs?

<details><summary>Answer H3</summary>

```
Long  = 1.30 × 50 = $65m      Short = 0.30 × 50 = $15m      Net = 100% ($50m)

Return = 1.30(9%) − 0.30(4%) = 11.7 − 1.2 = 10.5%
Long-only with the same picks = 9%
Extension adds 1.5 points = 0.30 × (9% − 4%)   (extra 30% long, 30% short on the spread)
```

The short book funds extra long exposure, so the manager earns the long–short spread on an extra 30% of capital. If the picks were wrong (shorted stocks beat the longs), the extension would lose by the same mechanism. Higher risk, higher expected return.

</details>

**H4.** *(Practice numbers, in the format of Exhibit 11.27.)* Three efficient portfolios have (ER, σ²) of X (6, 4), Y (9, 16) and Z (11, 30). Using `EU = ER − σ²/RT`, which portfolio does each investor choose: RT = 2, RT = 5 and RT = 50? Which asset allocation strategy is this, and which step of Exhibit 11.26 does it represent?

<details><summary>Answer H4</summary>

```
              X               Y                 Z
RT = 2:    6 − 4/2 = 4.00   9 − 16/2 = 1.00    11 − 30/2 = −4.00    → X
RT = 5:    6 − 4/5 = 5.20   9 − 16/5 = 5.80    11 − 30/5 =  5.00    → Y
RT = 50:   6 − 4/50 = 5.92  9 − 16/50 = 8.68   11 − 30/50 = 10.40   → Z
```

The more risk-tolerant the investor, the riskier the chosen mix. This is **integrated asset allocation**: capital market inputs (C3: expected returns, risks) combined with the investor's risk tolerance (I3) in the optimiser (M1) to give the investor's asset mix (M2).

</details>

**H5.** Distinguish strategic, tactical and insured asset allocation. For each, state what a fund does after shares rally strongly.

<details><summary>Answer H5</summary>

- **Strategic:** long-term policy weights set from long-run average returns, risks and covariances (efficient frontier); constant mix with periodic rebalancing. After a rally it **sells shares** back to the policy weight.
- **Tactical:** frequent shifts in the asset mix driven only by perceived changes in relative value, often relying on mean reversion. Inherently contrarian. If the rally makes shares look expensive, it **sells shares** (or underweights them).
- **Insured:** two assets (shares and T-bills). Assumes market expectations are constant but the investor's objectives change with wealth. After a rally it **buys more shares**; after a fall it moves toward T-bills.

</details>

**H6.** Explain why passive investing has grown, referring to tracking error, costs and the evidence on active manager performance.

<details><summary>Answer H6</summary>

Passive funds aim only to match an index, so they are judged on tracking error and run at very low cost: Exhibit 11.16's index fund has a 0.02% expense ratio and 2% turnover (TCR 0.47%), against 0.99%, 205% and 3.19% for the active fund. Active managers must beat the benchmark **net of** these costs on a risk-adjusted basis, and most don't. In most years since 2001, fewer than half of US active funds beat the S&P 500 (Exhibit 11.5). Over 15 years, 86.94% of Australian funds underperformed the S&P/ASX 200 (SPIVA). Consistent with market efficiency (Topic 5), investors have moved money to index funds and ETFs: US passive equity assets grew 390.6% from 2008 to 2022 against 142.4% for active, and passive overtook active.

</details>

---

## Set I — Bond Portfolio Management (Topic 7)

*Practice numbers throughout, made up for this set and verified in Python. Annual coupons, $1,000 par.*

**I1.** A 3-year bond pays a 6% annual coupon and yields 5%. Calculate its price, Macaulay duration, modified duration and basis point value.

<details><summary>Answer I1</summary>

```
 t   CF       PV = CF/1.05^t    t × PV
 1     60          57.14          57.14
 2     60          54.42         108.84
 3  1,060         915.67       2,747.00
            P0 = 1,027.23    Σ = 2,912.99

Macaulay D = 2,912.99 / 1,027.23 = 2.84 years
Mod D      = 2.84 / 1.05         = 2.70
BPV        = 2.70 × 0.0001 × 1,027.23 = $0.28 per bp
```

The bond trades at a premium because YTM (5%) is below the coupon (6%). D is below the 3-year maturity because the coupons arrive early.

</details>

**I2.** For the bond in I1, compute convexity, then estimate the dollar price change if yields rise by 1 point using (a) duration only and (b) duration plus convexity. Compare with the actual repriced change.

<details><summary>Answer I2</summary>

```
PV × (t² + t):  57.14×2 = 114.29   54.42×6 = 326.53   915.67×12 = 10,988.01
Σ = 11,428.83
Convexity = (11,428.83 / 1.05²) / 1,027.23 = 10.09

(a) ΔP ≈ −2.70 × 0.01 × 1,027.23           = −$27.74
(b) + 0.5 × 10.09 × 0.0001 × 1,027.23       = +$0.52   →  ΔP ≈ −$27.22
Actual: at 6% YTM = coupon, P = $1,000.00  →  ΔP = −$27.23
```

(Duration term computed with unrounded Mod D, 2.7007.) Duration alone overstates the fall. Adding convexity brings the estimate within a cent of the actual change.

</details>

**I3.** A $10m bond portfolio holds $2m in a bond with modified duration 4.5, $3m with modified duration 7.0, and $5m with modified duration 11.2. Calculate the portfolio's modified duration and the approximate dollar change if all yields rise 50 basis points.

<details><summary>Answer I3</summary>

```
Weights: 0.2, 0.3, 0.5
D_port = 0.2(4.5) + 0.3(7.0) + 0.5(11.2) = 0.90 + 2.10 + 5.60 = 8.60
ΔP/P ≈ −8.60 × 0.005 = −4.30%   →   ΔP ≈ −0.043 × $10m = −$430,000
```

Weights are market values ($ invested), not face values.

</details>

**I4.** You expect interest rates to fall. For each pair, choose the bond and give the reason. (a) 10-year, 4% coupon vs 10-year, 9% coupon, both yielding 5%. (b) 20-year zero-coupon vs 25-year, 10% coupon, both yielding 6%. (c) Two 15-year, 5% coupon bonds, one yielding 4% and one yielding 7%.

<details><summary>Answer I4</summary>

To profit from falling rates, pick the **higher-duration** bond in each pair.

| Pair | Choose | Macaulay D | Why |
|---|---|---|---|
| (a) | **4% coupon** | 8.36 vs 7.40 | Lower coupon → more value in the final payment → higher duration |
| (b) | **20-year zero** | 20.00 vs 12.37 | All cash at maturity, so D = maturity. It beats the *longer* bond because the 10% coupons pull the 25-year bond's duration down |
| (c) | **4% yield** | 11.13 vs 10.41 | Lower initial YTM → distant cash flows are discounted less → higher sensitivity |

Part (b) is the trap: maturity alone does not rank sensitivity, duration does.

</details>

**I5.** The yield curve slopes upward: short rates are well below long rates. Explain how each of the three term-structure theories would account for this shape.

<details><summary>Answer I5</summary>

- **Expectations hypothesis:** long rates reflect expected future short rates, so an upward slope means the market **expects short-term rates to rise**.
- **Liquidity preference:** investors prefer short-term bonds because long bonds are more volatile and less liquid, so issuers must pay a **premium** to induce them to hold longs. The curve should *normally* slope up even with no expected rate rise, and other shapes are temporary aberrations.
- **Segmented markets:** institutions confine themselves to particular maturity segments. The slope reflects **supply and demand within each segment**: relatively heavy demand for short maturities, or heavy supply of long bonds, pushes long yields above short yields.

</details>

**I6.** A client gives a manager $100m for 4 years under contingent immunisation, with a floor return of 5%. Market rates are currently 7%. Using annual compounding, find the cushion spread, the required terminal value, the value needed today to reach it by immunising at 7%, and the safety margin. What happens if the portfolio falls to that required value?

<details><summary>Answer I6</summary>

```
Cushion spread            = 7% − 5% = 2 percentage points
Required terminal value   = 100 × 1.05^4        = $121.55m
Required value today      = 121.55 / 1.07^4     = $92.73m
Safety margin             = 100.00 − 92.73      = $7.27m
```

The manager may run the portfolio actively while its value stays above $92.73m. If losses wipe out the $7.27m safety margin, the **trigger point** is reached: active management stops and the manager **immunises** (sets duration equal to the remaining horizon) to lock in the 5% floor. The method is the textbook's; the deck gives only the definitions.

</details>

---

## Set J — Derivatives and Option Strategies (Topic 8)

**J1.** *(Practice numbers.)* A share has a call and a put, both with X = $25. The call costs $2.10 and the put $1.60. For S_T = $21 and S_T = $29, find the payoff and profit to (a) the call holder, (b) the call writer, (c) the put holder. State each holder's break-even.

<details><summary>Answer J1</summary>

```
                      S_T = $21                    S_T = $29
Call holder   payoff  max(21 − 25, 0) = 0          max(29 − 25, 0) = 4
              profit  0 − 2.10 = −2.10             4 − 2.10 = +1.90
Call writer   profit  2.10 − 0 = +2.10             2.10 − 4 = −1.90
Put holder    payoff  max(25 − 21, 0) = 4          max(25 − 29, 0) = 0
              profit  4 − 1.60 = +2.40             0 − 1.60 = −1.60

Break-evens: call 25 + 2.10 = $27.10;  put 25 − 1.60 = $23.40
```

Only the payoff lines are on the formula sheet. Profit needs the premium, with a minus sign for the holder and a plus sign for the writer.

</details>

**J2.** *(Practice numbers.)* A fund holds a $6,000,000 share portfolio with β = 1.2. The ASX 200 is at 8,000 and SPI 200 futures are worth $25 per index point (assume the futures price equals the index). (a) How many contracts hedge the portfolio, and on which side? (b) The index then falls 5%. Show that the hedge offsets the expected portfolio loss.

<details><summary>Answer J2</summary>

```
(a) n = (PV × β) / (Index × 25) = (6,000,000 × 1.2) / (8,000 × 25) = 7,200,000 / 200,000 = 36
    → SELL 36 contracts

(b) Index falls 5%: 8,000 × 0.05 = 400 points
    Expected portfolio loss = β × 5% = 6% × 6,000,000 = $360,000
    Short futures gain      = 36 × $25 × 400        = $360,000   → offset exactly
```

The hedge only works this neatly if the portfolio moves exactly β times the index (no tracking error) and the futures price tracks the index (no basis risk). It also gives away the same $360,000 if the index rises 5%.

</details>

**J3.** *(Practice numbers.)* You own a share at $50. You buy a $45 put for $1.20 and sell a $56 call for $1.20. Name the strategy, state the net premium, and give the position value at S_T = $40, $50 and $60. What are the maximum loss and maximum gain, as a percentage of $50?

<details><summary>Answer J3</summary>

A **zero-cost collar**: long OTM put + short OTM call. Net premium = 1.20 − 1.20 = **0**.

```
S_T = 40:  40 + (45 − 40) − 0         = 45   (floor)
S_T = 50:  50 + 0 − 0                 = 50
S_T = 60:  60 + 0 − (60 − 56)         = 56   (cap)

Max loss = (45 − 50)/50 = −10%      Max gain = (56 − 50)/50 = +12%   (base: today's $50 price)
```

You get the protection of a protective put with no upfront cost. The price is surrendering every gain above $56.

</details>

**J4.** *(Practice numbers.)* Calls on a share with strikes $45, $50 and $55 cost $7.00, $3.50 and $1.20. Build a long butterfly spread. Find the net premium, the maximum profit and loss, the break-evens, and the profit at S_T = $48.

<details><summary>Answer J4</summary>

Buy one $45 call, **sell two** $50 calls, buy one $55 call.

```
Net debit D = 7.00 + 1.20 − 2(3.50) = 1.20

Max loss   = 1.20         (S_T ≤ 45 or S_T ≥ 55)
Max profit = (50 − 45) − 1.20 = 3.80   (at S_T = 50)
Break-evens: 45 + 1.20 = 46.20   and   55 − 1.20 = 53.80

S_T = 48:  (48 − 45) − 0 + 0 − 1.20 = 1.80
```

The deck writes the net premium as "P2 − P1 − P3". With two short options at the middle strike it is 2P_2 − P_1 − P_3 = 7.00 − 8.20 = −1.20, i.e. the −D above. A butterfly is a low-volatility bet with a small, known maximum loss.

</details>

**J5.** *(Practice numbers.)* A share trades near $30. A $30 call costs $2.50 and a $30 put $2.20. A $33 call costs $1.00 and a $27 put $0.90. Compare a long straddle and a long strangle: cost, break-evens, and profit at S_T = $24, $30 and $38. When would you prefer each?

<details><summary>Answer J5</summary>

```
                 Straddle (30/30)            Strangle (27 put / 33 call)
Cost             2.50 + 2.20 = 4.70          1.00 + 0.90 = 1.90
Break-evens      30 ± 4.70 = 25.30 / 34.70   27 − 1.90 = 25.10 / 33 + 1.90 = 34.90

S_T = 24         6 − 4.70 = +1.30            3 − 1.90 = +1.10
S_T = 30         −4.70 (max loss)            −1.90 (max loss)
S_T = 38         8 − 4.70 = +3.30            5 − 1.90 = +3.10
```

Both bet on a large move in either direction. The **strangle** costs much less and loses far less if nothing happens. It needs a slightly bigger move to break even and earns a little less on big moves. Prefer the strangle when you expect a significant gap but want to cut the upfront cost (deck Checkpoint 2 Q3). Prefer the straddle when you expect a move but not necessarily a huge one.

</details>

**J6.** A fund manager will receive a large cash inflow next month to buy ASX 200 shares. (a) Describe two option strategies from the deck for managing the purchase price, and the futures alternative. (b) Which would you choose if you feared a sharp rally, and why?

<details><summary>Answer J6</summary>

(a)
- **Buy calls** (slides 27–29): this caps the purchase price at K + premium (deck: 8,200 + 19 = 8,219). If the market falls, the manager buys in the market at S_T + premium, so the premium is the cost of the protection.
- **Sell puts** (slides 30–32, the "covered put"): this earns a premium while waiting. On a fall the manager is assigned at K and pays an effective K − premium (deck: 8,075 − 20 = 8,055), which they wanted to do anyway. On a rally the cost is **uncapped** (S_T − premium).
- **Buy index futures** (sample Q5, cash equitisation): no premium, and the price is locked in both ways. Rises are offset by futures gains, but the manager cannot benefit from a fall. Basis risk remains.

(b) Fearing a sharp rally, **long calls** or **long futures**. Selling puts gives no protection against a rise, only premium income. Choose calls if you want to keep the benefit of a possible fall and can pay the premium. Choose futures to lock the level at no upfront cost.

</details>

---

## Set K — Hedge Funds and Alternative Investments (Topic 9)

*All numbers in this set are practice numbers, not taken from the deck.*

**K1.** A hedge fund charges a 20% performance fee subject to a high-water mark, with no management fee. Its unit price starts at $1.00 and ends each year at $1.20, $1.02 and $1.26 (values before fees, as in the deck's example). (a) Calculate the performance fee each year and in total. (b) What would the total be without a high-water mark? (c) Explain the difference.

<details><summary>Answer K1</summary>

```
Year 1:  1.20 > HWM 1.00  →  20% × (1.20 − 1.00) = $0.040;  HWM → 1.20
Year 2:  1.02 ≤ HWM 1.20  →  no fee;                         HWM stays 1.20
Year 3:  1.26 > HWM 1.20  →  20% × (1.26 − 1.20) = $0.012;  HWM → 1.26
Total with HWM:  $0.052   ( = 20% × (1.26 − 1.00), the net new-high gain )

Without HWM, fee on every rise:
  rises 0.20 (yr 1) + 0.24 (yr 3, 1.02 → 1.26) = 0.44
  20% × 0.44 = $0.088
```

(c) Without the mark, the manager is paid again in year 3 for recovering the $0.18 lost in year 2, which is ground already paid for in year 1. The high-water mark requires past losses to be recouped before any further performance fee is paid, so the manager is paid only on the $0.06 above the old peak.

</details>

**K2.** A fund has an opening NAV of $50m and earns a gross 10% for the year. Fees are a 2% management fee on opening NAV and a 20% performance fee on the gain after the management fee, subject to a 6% hard hurdle. The fund is above its high-water mark. (a) Calculate each fee and the investor's net return. (b) Recalculate with no hurdle.

<details><summary>Answer K2</summary>

```
Management fee      = 2% × 50           = $1.0m
Gain after mgmt fee = 10% × 50 − 1.0    = $4.0m
Hurdle              = 6% × 50           = $3.0m

(a) Hard hurdle:  performance fee = 20% × (4.0 − 3.0) = $0.2m
                  investor's net  = 4.0 − 0.2          = $3.8m  →  7.6%

(b) No hurdle:    performance fee = 20% × 4.0          = $0.8m
                  investor's net  = 4.0 − 0.8          = $3.2m  →  6.4%
```

A hard hurdle charges the performance fee only on the return *above* the hurdle. State your fee conventions in any exam answer, because funds differ.

</details>

**K3.** An investor holds $700,000 in an equity portfolio (β 1.0, expected return 9%) and adds $300,000 of a hedge fund (β 0.3, expected return 5%). The risk-free rate is 3%. Calculate the combined portfolio's beta and expected return. Has the hedge fund improved the risk–return trade-off?

<details><summary>Answer K3</summary>

```
Weights 0.7 / 0.3
β_p    = 0.7(1.0) + 0.3(0.3) = 0.70 + 0.09 = 0.79
E(R_p) = 0.7(9)   + 0.3(5)   = 6.3  + 1.5  = 7.8%

Return per unit of beta:   equity 9/1.0 = 9.00   HF 5/0.3 = 16.67   blend 7.8/0.79 = 9.87
Treynor (E(R) − Rf)/β:     equity 6.00           HF 6.67            blend 6.08
```

**Yes.** The hedge fund offers more excess return per unit of systematic risk than the equity it replaces, so the blend improves on both measures. This is the opposite of sample Q8, where the hedge fund's 5/0.8 = 6.25 was below the equity's 10.91. Always do the comparison. A low correlation could improve the trade-off further in total-risk terms (slide 49).

</details>

**K4.** A takeover offer of $50 a share is announced for a target that traded at $40 beforehand. The target now trades at $46. You believe there is an 80% chance the deal completes, and that the price returns to $40 if it fails. What probability does the market imply, what trade do you make, and what is your expected gain?

<details><summary>Answer K4</summary>

```
Implied P  = (46 − 40) / (50 − 40) = 0.60
Your view  = 0.80 > 0.60  →  BUY the target
Expected price = 0.8(50) + 0.2(40) = $48.00
Expected gain  = 48 − 46 = $2.00 per share = 4.35% on $46
```

This is merger (risk) arbitrage. You profit if your judgement of the deal's completion probability is better than the market's (slide 39). The implied-probability formula is the textbook's standard approach and is not on the slides. If the deal fails, you lose $6 a share, which is why leverage and position limits matter (the LTCM lessons).

</details>

**K5.** Early studies reported venture capital returns of 30.5% and 45% p.a. Explain why the deck concludes that VC does not offer superior returns. *(3 marks)*

<details><summary>Answer K5</summary>

- **Risk is high.** VC betas are estimated at 1.4 (Gompers & Lerner) and 1.7 (Cochrane), so VC *should* earn well above the market.
- **Risk-adjusted returns are negative.** Measured against NASDAQ, the mean risk-adjusted return is **−7.1%**, so the raw return does not compensate for the risk.
- **Averages mislead.** VC returns are non-normal (a few huge winners), so traditional averages are not appropriate. The typical fund earns much less than the mean.
- VC is also costly: VC firms take large fees and large ownership stakes. The evidence does not support superior risk-adjusted returns.

</details>

**K6.** A trustee says: "Hedge funds give higher returns at lower risk, so we should put 50% of the fund in them." Evaluate the claim using the Topic 9 evidence. *(4 marks)*

<details><summary>Answer K6</summary>

- **The claimed benefits** are higher returns, low risk and diversifying power (slide 32).
- **Returns:** research casts doubt on superior returns. On a risk-adjusted basis, hedge funds do not appear to outperform (slide 48). Fees (around 1.5% plus a performance fee, and a second layer in a fund of funds) absorb much of any gross outperformance.
- **Risk:** the average hedge fund is less risky than the market, but not low risk, and risk varies widely by strategy (slide 48). Strategy returns swing enormously from year to year; for example, convertible arbitrage went from −31.6% in 2008 to +47.4% in 2009. Leverage and illiquidity add tail risk (LTCM).
- **Measurement:** lack of disclosure, reporting lags, net-of-fee measurement and non-normal returns all make reported performance unreliable (slide 47).
- **Diversification is the real case.** Lower correlations improve portfolio efficiency in certain circumstances, but the suggested allocation is **10–20%**, not 50% (slide 49). Illiquidity and redemption limits also matter for a fund that must pay members.

</details>

---

## Set L — Performance Evaluation (Topic 10)

*All numbers in this set are practice numbers, not from the deck.*

**L1.** Rf = 3%, market return 9%, market σ 15%. Fund P: return 11%, σ 22%, β 0.9. Fund Q: return 10%, σ 13%, β 0.8. (a) Calculate Sharpe, Treynor and Jensen's alpha for both funds and the Sharpe and Treynor of the market. (b) Which fund would you recommend to an investor for whom it will be their entire portfolio, and which to one adding it to a large diversified portfolio? Explain.

<details><summary>Answer L1</summary>

```
Market:  Sharpe = (9 − 3) / 15 = 0.40        Treynor = (9 − 3) / 1 = 6.00

Fund P:  Sharpe  = (11 − 3) / 22 = 8 / 22   = 0.364     below market
         Treynor = (11 − 3) / 0.9 = 8 / 0.9 = 8.89      above market
         α       = 8 − 0.9 × 6 = 8 − 5.4    = +2.6%

Fund Q:  Sharpe  = (10 − 3) / 13 = 7 / 13   = 0.538     above market
         Treynor = (10 − 3) / 0.8 = 7 / 0.8 = 8.75      above market
         α       = 7 − 0.8 × 6 = 7 − 4.8    = +2.2%
```

(b) **Entire portfolio → Q** (higher Sharpe). P's σ of 22% is far above its systematic risk of 0.9 × 15 = 13.5%, so most of its risk is unsystematic — an investor holding only P bears all of it. **Part of a diversified portfolio → P** (higher Treynor and alpha), because the diversified investor's other holdings wash out P's unsystematic risk, leaving only β to be paid for. This is the Sharpe–Treynor conflict in action.

</details>

**L2.** A fund and its benchmark returned the following over four quarters (%): fund 2.4, −0.8, 1.9, 3.1; benchmark 2.0, −1.5, 2.2, 2.5. Calculate ATP, AATP, σ(TP) using the formula-sheet definitions, and the information ratio. Interpret.

<details><summary>Answer L2</summary>

```
Differences:  +0.4, +0.7, −0.3, +0.6

ATP   = (0.4 + 0.7 − 0.3 + 0.6) / 4      = 1.4 / 4         = 0.35%
AATP  = (0.4 + 0.7 + 0.3 + 0.6) / 4      = 2.0 / 4         = 0.50%
σ(TP) = √[(0.16 + 0.49 + 0.09 + 0.36) / 4] = √(1.10 / 4) = √0.275 = 0.524%
IR    = 0.35 / 0.524                                       = 0.67
```

The fund beat its benchmark by 0.35% a quarter on average, missing in only one quarter. An IR of about 0.67 means it earned 0.67% of active return per 1% of tracking error — high relative to the spread of manager IRs in Exhibit 18.6, where 1.0+ is rare.

</details>

**L3.** A fund's annual returns over six years were 12%, −4%, 8%, −2%, 15% and 7%. The minimum acceptable return is 3%, which is also the risk-free rate. Using the deck's conventions (population σ; semi-deviation with the mean as hurdle, divided by the number of below-mean years), calculate the Sharpe and Sortino ratios. Why is Sortino lower here?

<details><summary>Answer L3</summary>

```
Mean = (12 − 4 + 8 − 2 + 15 + 7) / 6 = 36 / 6 = 6%

σ (population):  deviations 6, −10, 2, −8, 9, 1  → squares sum to 286
                 σ = √(286 / 6) = √47.67 = 6.90%
Sharpe  = (6 − 3) / 6.90 = 0.435

Below-mean years: −4, −2
DR = √{[(−4 − 6)² + (−2 − 6)²] / 2} = √[(100 + 64) / 2] = √82 = 9.06%
Sortino = (6 − 3) / 9.06 = 0.331
```

Sortino is lower because this fund's volatility is concentrated on the **downside**: its two bad years are 10 and 8 points below the mean, while its good years are modest. Sharpe dilutes those two shortfalls across all six years of volatility; Sortino charges for them alone. (Under other DR conventions the number changes — state the one you use.)

</details>

**L4.** A managed fund's unit price was $1.80 at the start of the month and $1.86 at the end. During the month it paid a dividend of $0.04 and a capital-gain distribution of $0.05. What was its total return, and what would you get if you used the price change alone?

<details><summary>Answer L4</summary>

```
R = (EP + Div + Cap.Dist − BP) / BP
  = (1.86 + 0.04 + 0.05 − 1.80) / 1.80 = 0.15 / 1.80 = 8.33%

Price only: (1.86 − 1.80) / 1.80 = 0.06 / 1.80 = 3.33%
```

Ignoring the distributions understates the month's return by 5 percentage points.

</details>

**L5.** A balanced fund and its benchmark:

| Segment | w_p | w_b | R_p % | R_b % |
|---|---|---|---|---|
| Australian equities | 0.55 | 0.45 | 8.0 | 7.0 |
| International equities | 0.25 | 0.35 | 10.0 | 11.0 |
| Cash | 0.20 | 0.20 | 3.0 | 3.0 |

Calculate the fund and benchmark returns, the allocation and selection effects (formula-sheet form), and explain the result.

<details><summary>Answer L5</summary>

```
Fund      = 0.55(8.0) + 0.25(10.0) + 0.20(3.0) = 4.40 + 2.50 + 0.60 = 7.50%
Benchmark = 0.45(7.0) + 0.35(11.0) + 0.20(3.0) = 3.15 + 3.85 + 0.60 = 7.60%
Excess    = 7.50 − 7.60 = −0.10%

Allocation = (0.10)(7.0) + (−0.10)(11.0) + (0)(3.0) = 0.70 − 1.10 + 0  = −0.40%
Selection  = 0.55(1.0) + 0.25(−1.0) + 0.20(0)       = 0.55 − 0.25 + 0  = +0.30%
Check: −0.40 + 0.30 = −0.10 ✓
```

The manager **picked well** (selection +0.30%, mostly from Australian equities) but **allocated badly** — under-weighting international equities, the best-performing benchmark segment at 11%. The allocation loss outweighed the selection gain, so the fund under-performed by 0.10%.

</details>

**L6.** (a) What are the required characteristics of a valid benchmark? (b) Explain how benchmark error affects the evaluation of a portfolio manager, and which performance measures are most exposed to it.

<details><summary>Answer L6</summary>

(a) **Unambiguous, investable, measurable, appropriate, reflective of current investment opinions, and specified in advance.**

(b) The true market portfolio is difficult to approximate, so any index used is a proxy. Using a different proxy changes **estimated betas** (substantially, even for the same stock over the same period) and the **slope of the SML**. The **beta-based measures — Treynor and Jensen's alpha —** are most exposed: the same manager can appear superior against one benchmark and inferior against another. The problem is greater with **global investing**, where the choice of benchmark is wider, and it is a problem of **measurement**, not of the manager's skill.

</details>
