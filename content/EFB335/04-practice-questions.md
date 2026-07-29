# Extra Practice Questions

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
