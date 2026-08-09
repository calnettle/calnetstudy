# TOPIC 3 — Asset Pricing Models I: Capital Market Theory and CAPM

*(Reilly & Brown, Chapter 7, §7.1–7.3)*

Topic 2 built the Markowitz efficient frontier from risky assets alone. Topic 3 adds **one new asset — a risk-free asset** — and shows that this single addition collapses the curved efficient frontier into a **straight line**, identifies **one specific portfolio** every investor should hold, and produces a formula for the **required return on any individual risky asset**. That formula is the CAPM, arguably the most examined single equation in the unit.

---

## 3.1 Background for Capital Market Theory

Four assumptions, building directly on Markowitz's five from Topic 2:

1. All investors are **Markowitz-efficient investors** who target points on the efficient frontier.
2. Investors can **borrow or lend unlimited amounts at the risk-free rate (RFR)**.
3. All investors have **homogeneous expectations** — identical probability distributions for future returns.
4. All investors share the **same one-period time horizon**.

…plus four more:

5. All investments are **infinitely divisible** — fractional shares are possible.
6. **No taxes or transaction costs.**
7. **No inflation**, or inflation is fully anticipated.
8. **Capital markets are in equilibrium** — every asset is priced correctly for its risk.

> **Exam short-answer bait.** These eight are frequently asked as "state the assumptions of capital market theory" or "which assumption is violated by X". Assumption 2 (borrowing/lending at RFR) is the one that gets relaxed later in §3.5 — know it's the first to break down in practice.

---

## 3.2 Developing the Capital Market Line (CML)

### Step 1 — covariance with a risk-free asset is always zero

The risk-free asset has a **certain** return, so `Rᵢ − E(Rᵢ) = 0` for every period. Since covariance is built from that deviation term, `Cov(RF, i) = 0` for *any* risky asset or portfolio `i`, and therefore `r(RF, i) = 0` too.

On a risk–return plot, the risk-free asset sits **exactly on the y-axis** — return `= RFR`, standard deviation `= 0`.

### Step 2 — combine the risk-free asset with a risky portfolio M

Weight `w_RF` in the risk-free asset, `(1 − w_RF)` in risky portfolio `M`. Expected return is the ordinary weighted average:

```
E(R_port) = w_RF × RFR + (1 − w_RF) × E(R_M)
```

Standard deviation uses the two-asset formula from Topic 2, but `σ_RF = 0` kills two of the three terms:

```
σ²_port = w_RF² σ_RF² + (1 − w_RF)² σ_M² + 2 w_RF(1 − w_RF) ρ_RF,M σ_RF σ_M
        = (1 − w_RF)² σ_M²                          (both terms with σ_RF vanish)

σ_port  = (1 − w_RF) σ_M
```

**Portfolio risk is just a straight linear proportion of the risky portfolio's risk.** No square roots of sums, no correlation term survives — this is *why* the combination is a straight line and not a curve.

### Step 3 — the Capital Market Line equation

`(σ_port, E(R_port))` traces a straight line as `w_RF` varies from 1 (all cash) through 0 (all in M) to negative (borrowing to lever up). A straight line is `y = b + ax`, where the intercept `b = RFR` (at `σ_port = 0`) and the slope `a` is rise over run between the risk-free point and portfolio M:

```
slope = [E(R_M) − RFR] / [σ_M − 0] = [E(R_M) − RFR] / σ_M
```

Substituting:

```
E(R_port) = RFR + σ_port × [E(R_M) − RFR] / σ_M
```

When the risky portfolio `M` is specifically **the market portfolio** (every risky asset that exists, in market-value proportions), this line is called the **Capital Market Line**. It has two components:

| Term | Meaning |
|---|---|
| `RFR` | Time value of money — reward for waiting, no risk involved |
| `σ_port × [E(R_M) − RFR] / σ_M` | Compensation for bearing portfolio risk — the risk premium |

> **This is a different formula from the two-asset variance formula in Topic 2** even though it comes from it — don't write the general `σ²_p = w₁²σ₁² + w₂²σ₂² + 2w₁w₂r₁₂σ₁σ₂` formula and then forget to drop the two zero terms. If `σ_RF ≠ 0` in your working, you've made an error.

### Worked example — investing along the CML

> Riskless security returns 4%. Market portfolio returns 9% with a standard deviation of 10%. Find the expected return on a portfolio with **σ_port = 15%**.

```
E(R_port) = RFR + σ_port × [E(R_M) − RFR] / σ_M
          = 4% + 15% × (9% − 4%) / 10%
          = 4% + 15% × 0.5
          = 4% + 7.5%
          = 11.5%
```

**Answer: 11.5%.** Note `σ_port (15%) > σ_M (10%)` — this portfolio is riskier than the market itself, which is only possible with **leverage** (see below).

### Worked example — finding the leverage that delivers a target return

> Same numbers. What weighting achieves an **expected return of 11.5%**, and what does that weighting mean in dollar terms?

```
E(R_port) = w_RF × RFR + (1 − w_RF) × E(R_M)

11.5% = w_RF(4%) + (1 − w_RF)(9%)
11.5% = 4%w_RF + 9% − 9%w_RF
11.5% = 9% − 5%w_RF
5%w_RF = 9% − 11.5% = −2.5%
w_RF = −2.5% / 5% = −0.5
```

**`w_RF = −0.5`.** A negative weight in the risk-free asset means **borrowing** at the RFR, not lending. The investor borrows 50% of their own equity and puts `1 − (−0.5) = 1.5` (150%) into the market portfolio: for every \$1,000 of their own money, borrow \$500 and invest \$1,500 in `M`. They pay the RFR on the borrowed \$500 and hope the market outperforms it — which, in expectation (9% > 4%), it does.

> **Sign check:** `w_RF < 0` → borrowing → leveraged, riskier than the market. `0 < w_RF < 1` → lending → less risky than the market. `w_RF = 0` → 100% in M. `w_RF = 1` → 100% cash, zero risk.

### Exhibit 6.21 — why nothing beats the CML

Two different tables, easy to conflate — keep them separate:

**Table A — combinations of RF and M along the CML itself** (`RFR = 4%`, `E(R_M) = 9%`, `σ_M = 10%`). The Sharpe-style ratio `(E(R) − RFR)/σ` is **constant at exactly 0.5** by construction — that's the defining property of a straight line through `(0, RFR)`:

| σ_port | E(R_port) | (E(R) − RFR)/σ |
|---|---|---|
| 5% | 6.50% | 0.500 |
| 10% | 9.00% | 0.500 |
| 15% | 11.50% | 0.500 |
| 20% | 14.00% | 0.500 |

**Table B — six *risky-only* portfolios sitting on the Markowitz efficient frontier itself** (no risk-free asset involved), verified from the unit's own workbook:

| Portfolio | E(R) | σ | (E(R) − RFR)/σ |
|---|---|---|---|
| 1 | 5% | 5% | 0.200 |
| 2 | 7% | 7% | 0.429 |
| 3 | **9%** | **10%** | **0.500** |
| 4 | 11% | 15% | 0.467 |
| 5 | 13% | 21% | 0.429 |
| 6 | 15% | 28% | 0.393 |

**Portfolio 3 *is* M** — same 9%/10% point, and it is the *only* frontier portfolio that reaches a 0.500 ratio. Every other frontier portfolio is **dominated**: Portfolio 4 offers 11% at 15% risk (ratio 0.467), but Table A shows that combining RF with M can deliver 11.5% at that *same* 15% risk. The CML lies **above** the curved efficient frontier everywhere except at the single point of tangency, M. This is the geometric proof behind "everyone should hold the market portfolio and adjust risk only by borrowing or lending."

> **Trap: don't assume every point on the frontier has the same Sharpe ratio.** Only the tangency portfolio does. This is precisely why M is special and not arbitrary.

---

## 3.3 Risk, Diversification and the Market Portfolio

Because **M lies at the point of tangency**, it has the highest possible portfolio-possibility-line slope. Consequences:

- Everyone wants to hold **portfolio M** and use borrowing/lending to reach their preferred point on the CML.
- M must contain **all risky assets**, each in proportion to its **market value** (equilibrium condition).
- Because M is completely diversified, it holds **no unsystematic risk** — only **systematic risk** survives.

### Systematic vs unsystematic risk

**Systematic risk** — variability in returns caused by **macroeconomic** variables that affect *all* assets: money supply growth, interest-rate volatility, industrial production, corporate earnings, aggregate cash flow. Cannot be diversified away.

**Unsystematic (unique) risk** — firm-specific. Diversified away as the number of holdings grows.

> **Systemic vs systematic — do not confuse these on an exam.** *Systematic* risk is the macro risk that remains after diversification (the CAPM's subject). *Systemic* risk refers to the risk of collapse of an entire financial system (e.g. 2008) — a different concept from a different literature.

**How to measure "fully diversified":** a completely diversified portfolio has a **correlation of +1.00 with the market portfolio** — all its unique risk is gone, and what's left (systematic risk) moves in lockstep with the market by definition.

### The Separation Theorem (Tobin, 1958)

Two *independent* decisions:

1. **The investment decision** — everyone invests in the same portfolio, M, regardless of risk preference.
2. **The financing decision** — how much to **borrow or lend** at the RFR to reach a personally preferred point on the CML.

Risk preference affects *only* decision 2. A highly risk-averse investor lends (buys T-bills alongside M); a risk-seeking investor borrows to lever up their holding of M. **Nobody's risk preference changes which risky assets they hold** — that is the entire content of the theorem, and it is a favourite short-answer question.

---

## 3.4 The Capital Asset Pricing Model (CAPM)

### Why the CML can't price an individual asset

The CML relates **total risk** (`σ`) to return, but that relationship only holds for **fully diversified portfolios on the CML itself**. A single stock, or any portfolio that isn't perfectly diversified, sits *below* (to the right of) the CML — the formula would understate its risk-adjusted position. Individual assets need a different risk measure: not `σᵢ`, but `σᵢ × r_iM` — the part of an asset's total risk that is systematic (i.e., correlated with the market).

### Deriving beta

Substitute `σᵢ r_iM` for `σ` in the CML logic and simplify. Define:

```
βᵢ = (σᵢ × r_iM) / σ_M = Cov(i, M) / σ²_M
```

**Beta measures an asset's systematic risk relative to the market.** `β_M = 1` by definition (the market's covariance with itself, divided by its own variance, is 1).

| β value | Interpretation |
|---|---|
| β = 1 | Moves with the market |
| β > 1 | More volatile than the market (amplifies market moves) |
| 0 < β < 1 | Less volatile than the market |
| β = 0 | Uncorrelated with the market (theoretically, same expected return as RFR) |
| β < 0 | Moves *against* the market — rare, valuable for diversification |

### The Security Market Line (SML) / CAPM equation

```
E(Rᵢ) = RFR + βᵢ [E(R_M) − RFR]
```

Same shape as the CML — an intercept (`RFR`) plus a risk premium — but the risk axis is now **beta**, not `σ`, so the equation applies to *any* asset or portfolio, diversified or not.

### Worked example — required returns for five stocks

> `RFR = 5%`, `E(R_M) = 9%`. Market risk premium `= 9% − 5% = 4%`.

```python
for stock, beta in [('A',0.70), ('B',1.00), ('C',1.15), ('D',1.40), ('E',-0.30)]:
    print(stock, 0.05 + beta*0.04)
```

| Stock | β | E(Rᵢ) = RFR + β(E(R_M) − RFR) |
|---|---|---|
| A | 0.70 | 5% + 0.70(4%) = **7.8%** |
| B | 1.00 | 5% + 1.00(4%) = **9.0%** |
| C | 1.15 | 5% + 1.15(4%) = **9.6%** |
| D | 1.40 | 5% + 1.40(4%) = **10.6%** |
| E | −0.30 | 5% + (−0.30)(4%) = **3.8%** |

Note Stock E: a **negative** beta still gives a *positive* required return, just one **below** the risk-free rate — it's valuable precisely because it moves against the market (insurance-like), so investors accept a lower return to hold it.

### Identifying mispriced assets

In equilibrium, every asset plots **exactly on** the SML. Compare each stock's *required* return (from CAPM, using its β) against an analyst's *estimated* (forecast) return for the same stock:

```
estimated return > required return  →  plots ABOVE the SML  →  UNDERPRICED  →  buy
estimated return < required return  →  plots BELOW the SML  →  OVERPRICED   →  sell / avoid
```

| Stock | Required return | Estimated return | Verdict |
|---|---|---|---|
| A | 7.80% | 8.00% | Above SML — **underpriced** |
| B | 9.00% | 6.20% | Below SML — **overpriced** |
| C | 9.60% | 15.15% | Above SML — **underpriced** |
| D | 10.60% | 5.15% | Below SML — **overpriced** |
| E | 3.80% | 6.00% | Above SML — **underpriced** |

> **Underpriced does not mean "cheap" in a colloquial sense** — it means the market is pricing the asset to deliver *more* return than its risk (beta) justifies, so a rational investor's demand should push the price up (and the future return back down) until it sits back on the line. It's a statement about risk-adjusted return, not sticker price.

### Calculating beta in practice: the characteristic line

Beta is estimated by regressing an asset's historical returns (`Rᵢₜ`) against the market's returns (`R_Mt`) — the **slope** of this regression line is beta:

```
βᵢ = Cov(Rᵢ, R_M) / σ²_M
```

which is exactly the formula above, just estimated from a time series with `COVARIANCE.S`/`VAR.S` (or the population versions) rather than from theoretical probabilities.

### Worked example — BHP beta, verified from real market data

Using 5 years of daily total-return data (6 Mar 2020 – 6 Feb 2025) for BHP Group (`BHPX.AX`) against the ASX 200:

```python
beta = COVARIANCE.S(BHP_daily_returns, ASX200_daily_returns) / VAR.S(ASX200_daily_returns)
     = 1.1057
```

| Quantity | Value |
|---|---|
| Beta (5Y daily) | **1.106** |
| BHP annualised 5Y return | 16.32% |
| ASX 200 annualised 5Y return | 10.69% |
| RFR used (RBA cash rate) | 4.10% |
| **CAPM expected return** = `RFR + β(E(R_M) − RFR)` | 4.10% + 1.106 × (10.69% − 4.10%) = **11.38%** |

BHP's actual 16.32% annualised return over the period **exceeds** its CAPM-required 11.38% — consistent with it having plotted above the SML for this sample window (though five years of realised return is one noisy draw, not proof of persistent mispricing — see §3.6).

> **β > 1 makes sense for BHP.** A large diversified miner is more cyclical than the broad index — commodity prices amplify GDP swings — so a beta modestly above 1 (here, 1.11) is the expected sign and rough magnitude, a useful sanity check whenever you compute a beta yourself.

---

## 3.5 Relaxing the Assumptions

Capital market theory's cleanest predictions rely on assumptions #2, #3, #6 and #7 above (borrow/lend at RFR, homogeneous expectations, no costs, no inflation surprises). Relax them and:

| Relaxed assumption | Effect |
|---|---|
| **Differential borrowing/lending rates** — borrowing rate `R_b > RFR` | The CML "breaks" into two line segments: a lending segment (tangent at a lower point) and a steeper borrowing segment (tangent at a higher point), with a flat/kinked region between. |
| **Zero-beta model** — no risk-free asset exists | Use a *zero-beta portfolio* (uncorrelated with M) instead of RFR as the SML's intercept. Since a zero-beta portfolio's return typically **exceeds** the RFR, the resulting SML has a **flatter (less steep) slope**. |
| **Transaction costs** | The SML becomes a **band**, not a line — small mispricings aren't worth trading away once costs are included. |
| **Heterogeneous expectations / differing planning periods** | Produces a **band of SMLs**, width driven by how much investors disagree. |
| **Taxes** | Differential tax rates across investors can materially shift both the CML and SML, since after-tax returns differ investor-to-investor even at identical pre-tax returns. |

> **Exam pattern:** "What happens to the CML/SML if assumption X is relaxed?" Match the assumption to its row above. Differential borrowing/lending (kinked CML) and the zero-beta model (flatter SML) are the two most commonly tested.

---

## 3.6 Empirical Tests of the CAPM

### Beta stability

- **Individual-stock betas are not stable** over time; **portfolio betas are** — the larger the portfolio and the longer the estimation period, the more stable the beta.
- **Mean reversion:** high-beta portfolios tend to **decline toward 1** over time; low-beta portfolios tend to **rise toward 1**.
- Trading volume can also affect beta stability.

### Beyond beta: other risk factors found to matter empirically

| Factor | Finding |
|---|---|
| **Skewness** | Investors seem to prefer stocks with high **positive** skewness (small chance of a very large gain) — a preference CAPM's mean-variance framework doesn't capture. |
| **Size** | Smaller firms show an **inverse** relationship with returns, even after controlling for CAPM beta. |
| **P/E ratio** | Also shows an inverse relationship after controlling for beta. |
| **Financial leverage** | Helps explain the cross-section of returns beyond beta alone. |
| **Book-to-market value (BV/MV)** | Fama and French (1992) found this to be a **key determinant** of returns — the empirical finding that eventually produced the Fama–French three-factor model (Topic 4). |

> These are the seeds of **multi-factor models** — CAPM says only beta should matter; the empirical record says size, value (BV/MV) and momentum also show up. Useful context if a question asks "what are CAPM's empirical shortcomings?"

---

## 3.7 Market Portfolio: Theory vs Practice — the Benchmark Error Problem

The *true* market portfolio should include **every risky asset globally** — all equities, bonds, real estate, commodities, art, collectibles. In practice, almost every study proxies it with a single country's equity index (commonly the S&P 500), even though **U.S. equities are well under 15% of the true global risky-asset universe.**

**Consequence:** an asset's estimated beta — and therefore its CAPM-required return — **depends on which proxy you pick**. Two errors compound: an error in the risk-free asset chosen, and an error in the market-portfolio proxy chosen. Using the wrong SML can lead to incorrect conclusions about whether a portfolio manager outperformed.

### Worked example — JP Morgan Chase, two market proxies

Monthly total returns, Jan 1988 – Feb 2025 (446 months), JPM vs two proxies:

```python
beta_JPM_vs_SP500 = COVARIANCE.S(JPM, SP500) / VAR.S(SP500)
beta_JPM_vs_MSCI  = COVARIANCE.S(JPM, MSCI_World) / VAR.S(MSCI_World)
```

| Market proxy | Beta |
|---|---|
| S&P 500 (US only) | **1.31** |
| MSCI World (global) | **1.17** |

The **same stock, over the identical period**, gets a **meaningfully different beta** depending on which index stands in for "the market" — exactly the benchmark error the textbook describes (Exhibit 7.9: differential SMLs from measurement error in the RFR and/or the market proxy).

> ⚠️ **A genuine bug in the supplied `Topic 3 JPM vs mkt-1.xlsx` workbook.** Its `Raw Data` sheet stores three time series in the same row numbers but with *different* start dates: the S&P 500 and MSCI World columns start **Jan 1988**, while the JPM column starts **Jan 1973** — a 180-month (15-year) offset. The `Analysis` sheet's formulas pull all three series from matching row numbers without adjusting for this, silently pairing 1988–2025 market returns against **1973–2010** JPM returns. The workbook's own cached betas are **−0.099** (vs S&P 500) and **+0.026** (vs MSCI World) — implausible for a bank stock and the wrong sign in one case. Realigning the series by actual calendar date (as done above) gives betas of **1.31** and **1.17**, both economically sensible. **Do not trust the workbook's own `L21`/`L22`/`M21`/`M22` cells** — use the corrected figures above. This does not change the *lesson* the exhibit is teaching (different proxies give different betas), only the specific numbers.

---

## Summary

- Adding a **risk-free asset** to Markowitz's curved frontier collapses it into the straight-line **Capital Market Line**, because `σ_RF = 0` eliminates two of the three terms in the portfolio-variance formula.
- The point of tangency between the CML and the efficient frontier is the **market portfolio, M** — the *only* frontier portfolio with the maximum possible `(E(R) − RFR)/σ` ratio. Every investor should hold M and adjust risk only by **borrowing or lending** at the RFR (the **Separation Theorem**).
- The CML prices *total risk*; it can't price a single asset. The **CAPM/SML** fixes this by using **beta** — `Cov(i,M)/σ²_M` — the *systematic* component of an asset's risk — as the risk measure instead of `σ`.
- `E(Rᵢ) = RFR + βᵢ[E(R_M) − RFR]`. Compare an analyst's estimated return against this required return to call an asset **under-** or **overpriced**.
- Beta is estimated in practice as the slope of a regression of asset returns on market returns (the **characteristic line**). The choice of RFR and market proxy both materially affect the estimate — the **benchmark error problem**.

---

## ✅ Checkpoint

1. Why does `Cov(RF, i) = 0` for any risky asset `i`?
2. What is the Separation Theorem, and which of the two decisions does risk aversion actually affect?
3. A stock has `β = −0.3`. Is its CAPM-required return above or below the risk-free rate? Why does this make economic sense?
4. Two analysts estimate different betas for the same stock using the same historical return series. Name two things that could differ between their calculations.

<details><summary>Answers</summary>

1. Because the risk-free asset's return is **certain** — `Rᵢ − E(Rᵢ) = 0` every period — and covariance is built entirely from that deviation term, so it's zero regardless of what the other asset does.
2. Everyone invests in the market portfolio M (the *investment* decision); risk preference only determines how much to **borrow or lend** at the RFR to move along the CML (the *financing* decision). Risk aversion affects financing, not investment choice.
3. **Below** the risk-free rate (`RFR + negative × positive premium < RFR`). This makes sense because a negative-beta asset tends to rise when the market falls — it's diversification insurance, so investors are willing to accept a lower expected return to hold it.
4. The **choice of market proxy** (S&P 500 vs MSCI World vs some other index) and the **choice of divisor/estimation window** (population vs sample statistics, daily vs weekly vs monthly returns, 2 years vs 5 years) — both are shown in this topic to move the beta estimate materially.
</details>

---

*Notes compiled from EFB335 Topic 3 lecture slides ("Asset Pricing Models I" and "Beta Formula"), the Topic 3 Capital Market Line derivation document, and the Topic 3 Excel workbooks (Borrowing or Lending with the Market Portfolio, CAPM Example BHP, JPM vs Market). All numerical worked examples independently verified in Python; the JPM vs Market workbook's date-misalignment bug is flagged above with corrected figures.*
