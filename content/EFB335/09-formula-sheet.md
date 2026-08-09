# Formula Sheet & Exam Traps

## Returns

| Concept | Formula |
|---|---|
| Holding Period Return | `HPR = Ending Value / Beginning Value` |
| Holding Period Yield | `HPY = HPR − 1` |
| HPY with income | `HPY = (P₁ − P₀ + D₁) / P₀` |
| Annual HPR | `HPR^(1/n)` |
| Annual HPY | `HPR^(1/n) − 1` |
| Arithmetic Mean | `AM = Σ HPY / n` |
| Geometric Mean | `GM = [Π HPR]^(1/n) − 1` |
| Log return | `ln(P₁ / P₀)` |
| Portfolio HPY | `Σ wᵢ HPYᵢ` |
| Relationship | `AM ≥ GM`, gap ≈ `σ²/2` |

## Risk

| Concept | Formula |
|---|---|
| Expected return | `E(R) = Σ Pᵢ Rᵢ` |
| Variance (expected) | `σ² = Σ Pᵢ [Rᵢ − E(R)]²` |
| Variance (historical) | `σ² = Σ [HPYᵢ − E(HPY)]² / n` |
| Standard deviation | `σ = √σ²` |
| Coefficient of Variation | `CV = σ / E(R)` — **lower is better** |
| Sharpe Ratio | `(Rₘ − R_f) / σ` — **higher is better** |
| Annualising a **return** | `(1 + r̄_period)^(periods per year) − 1` |
| Annualising **variance** | `σ²_annual = σ²_period × periods per year` |
| Annualising **SD** | `σ_annual = σ_period × √(periods per year)` |

*Periods per year: 12 monthly, 52 weekly, **252** daily (trading days).*

## Margin — Long

| Concept | Formula |
|---|---|
| Total value | `P × N` |
| Loan | `P₀ × N × (1 − IM)` |
| Initial equity | `P₀ × N × IM` |
| Equity at price P | `(P × N) − Loan` |
| Percentage margin | `[(P × N) − Loan] / (P × N)` |
| **Margin call price** | **`P* = Loan / [N × (1 − MM)]`** |
| Return on equity | `(New Equity − Initial Equity) / Initial Equity` |
| Leverage factor | `1 / IM` |

## Margin — Short

| Concept | Formula |
|---|---|
| Proceeds | `P₀ × N` |
| Deposit | `P₀ × N × IM` |
| Equity at price P | `Proceeds + Deposit − Dividends − (P × N)` |
| Percentage margin | `Equity / (P × N)` |
| **Margin call price** | **`P* = (Proceeds + Deposit) / [N × (1 + MM)]`** |
| Rate of return | `Net Profit / Deposit` |

## Portfolio Theory

| Concept | Formula |
|---|---|
| Portfolio expected return | `E(R_p) = Σ wᵢ E(Rᵢ)` |
| Covariance (definition) | `Cov(i,j) = E{[Rᵢ − E(Rᵢ)][Rⱼ − E(Rⱼ)]}` |
| Covariance (sample) | `Σ [Rᵢ,ₜ − E(Rᵢ)][Rⱼ,ₜ − E(Rⱼ)] / (n − 1)` |
| Covariance (population) | `Σ [Rᵢ,ₜ − E(Rᵢ)][Rⱼ,ₜ − E(Rⱼ)] / n` |
| Correlation | `r(i,j) = Cov(i,j) / (σᵢ σⱼ)`, range −1 to +1 |
| Covariance from correlation | `Cov(i,j) = r(i,j) σᵢ σⱼ` |
| Goodness of fit | `R² = r²` |
| **Two-asset portfolio variance** | **`σ²_p = w₁²σ₁² + w₂²σ₂² + 2w₁w₂ r₁₂ σ₁ σ₂`** |
| General portfolio variance | `σ²_p = Σᵢ wᵢ²σᵢ² + Σᵢ Σⱼ≠ᵢ wᵢwⱼ Cov(i,j)` |
| Matrix form | `σ²_p = wᵀ Σ w` |
| Number of variance terms | `n` |
| Number of unique covariances | `n(n − 1) / 2` |
| Three-asset variance | `w₁²σ₁² + w₂²σ₂² + w₃²σ₃² + 2w₁w₂Cov₁₂ + 2w₁w₃Cov₁₃ + 2w₂w₃Cov₂₃` |
| **Min-variance weight (any r)** | **`w₁* = (σ₂² − Cov₁₂) / (σ₁² + σ₂² − 2Cov₁₂)`** |
| Min-variance weight (r = 0) | `w₁* = σ₂² / (σ₁² + σ₂²)` — *special case of the above* |
| Zero-risk weight (r = −1) | `w₁* = σ₂ / (σ₁ + σ₂)` |
| σ_p when r = +1 | `w₁σ₁ + w₂σ₂` (weighted average) |
| σ_p when r = −1 | `abs(w₁σ₁ − w₂σ₂)` |
| Single-index correlation | `r(i,j) = βᵢβⱼσ²_m / (σᵢσⱼ)` |
| **Utility function** | **`U = E(r) − 0.5 × A × σ²`** (A ≈ 7 conservative, ≈ 1 aggressive) |
| Indifference curve | `E(r) = U + 0.5 × A × σ²` — a **parabola**, steeper for higher A |
| "Modified" Sharpe ratio | `E(R_p) / σ_p` — **no** risk-free rate. Not the same ranking as the true Sharpe |

## Capital Market Theory (CML) — Topic 3

| Concept | Formula |
|---|---|
| Covariance with risk-free asset | `Cov(RF, i) = 0` always |
| σ of RF + risky portfolio M | `σ_port = (1 − w_RF) σ_M` |
| E(R) of RF + risky portfolio M | `E(R_port) = w_RF × RFR + (1 − w_RF) × E(R_M)` |
| **CML** | **`E(R_port) = RFR + σ_port × [E(R_M) − RFR] / σ_M`** |
| CML slope (price of risk) | `[E(R_M) − RFR] / σ_M` |
| Weight in M for a target return | `w_M = [target E(R) − RFR] / [E(R_M) − RFR]` |
| σ_port for a target return | `σ_port = [target E(R) − RFR] / CML slope` |
| Sign of w_RF | `w_RF > 0` → lending (less risky than M). `w_RF < 0` → borrowing/leverage (riskier than M). |

## CAPM / SML — Topic 3

| Concept | Formula |
|---|---|
| **Beta** | **`βᵢ = Cov(i, M) / σ²_M = (σᵢ × r_iM) / σ_M`** |
| Beta of the market | `β_M = 1` always |
| **CAPM / SML** | **`E(Rᵢ) = RFR + βᵢ [E(R_M) − RFR]`** |
| Characteristic line (regression form) | `βᵢ = COVARIANCE.S(Rᵢ, R_M) / VAR.S(R_M)` |
| Mispricing test | Estimated > required → **underpriced** (above SML). Estimated < required → **overpriced** (below SML). |

## Excel function map

| Task | Sample (÷ n−1) | Population (÷ n) |
|---|---|---|
| Variance | `VAR.S` | `VAR.P` / `VARP` |
| Standard deviation | `STDEV.S` | `STDEV.P` |
| Covariance | `COVARIANCE.S` | `COVARIANCE.P`, **Data Analysis → Covariance** |
| Correlation | `CORREL` — identical either way | |

**Matrix work:** `=SUMPRODUCT(P, R)` for `E(R)`; `=MMULT(MMULT(wᵀ, Σ), w)` for `σ²_port`; `=TRANSPOSE()` to turn a weight row into a column. Data Analysis → Covariance returns only the **lower triangle** — mirror it into a full square before `MMULT`, or the blank cells are read as zeros and portfolio variance is understated.

---

## EXAM TRAPS — QUICK CHECKLIST

1. **`n` in annualising is YEARS**, not number of observations.
2. **AM > GM always** (unless all returns identical). If you get GM > AM, you've made an arithmetic error.
3. **Variance divisor:** `/n` for population, `/(n−1)` for a sample. Covariance in Topic 2 uses `n−1`. Excel: `VAR.P` vs `VAR.S`.
4. **CV: lower is better. Sharpe: higher is better.** Opposite directions.
5. **Margin call, long:** numerator is the **LOAN**, denominator uses **(1 − MM)**.
6. **Margin call, short:** denominator uses **(1 + MM)**. The sign flips.
7. **Short sellers pay the dividend** — it's a cash outflow, subtract it.
8. **Rate of return on a short** divides by the **margin deposit**, not the position value.
9. **Utility function uses σ² (VARIANCE)**, not σ. Square it.
10. **Portfolio return is a weighted average. Portfolio risk is not.**
11. **r = −1 does not automatically mean σ_p = 0** — only at the specific risk-minimising weights.
12. **R² = r² is always positive**; correlation can be negative.
13. **Number of covariance terms is n(n−1)/2** for *unique pairs*, but `n(n−1)` if counting both `Cov(i,j)` and `Cov(j,i)` in the double-sum formula. Read the question.
14. **Stop orders become market orders** when triggered — gap risk means you may not get your stop price.
15. **State your assumptions** on ambiguous questions (interest treatment on shorts, rounding of share counts). Markers reward method.
16. **Any `r < +1.0` gives a diversification benefit** — not "any *low* r". A correlation of 0.8 still helps. The threshold is exactly +1.0.
17. **Correlation is divisor-invariant only if you are consistent.** `COVARIANCE.P` over `STDEV.S` produces a number that is not a correlation.
18. **σ scales with √t, not t.** Multiplying a daily SD by 252 overstates it by a factor of √252 ≈ 15.9.
19. **Weighted-average-of-annualised ≠ annualised-portfolio.** Weight the *periodic* returns, then annualise once. Annualising is non-linear.
20. **Minimum variance ≠ maximum Sharpe.** They are different points on the same frontier, and questions ask for one or the other deliberately.
21. **A strategy back-test needs a benchmark.** Buy-and-hold on the same asset over the same window, and a turnover/cost count. A positive gross return proves nothing.
22. **Covariance is measured against each series' own mean, not zero.** A positive covariance does not mean both assets rose.
23. **Only the tangency portfolio M has the maximum `(E(R) − RFR)/σ` ratio.** Every other point on the efficient frontier is dominated by some RF+M combination at the same risk level — don't assume any frontier portfolio is "efficient enough".
24. **`w_RF` can be negative.** A negative weight in the risk-free asset means *borrowing*, not an invalid answer — don't discard it as an error.
25. **The CML only prices fully diversified portfolios.** Never plug a single stock's own `σ` into the CML formula to find its "required return" — a single stock needs the **SML** and **beta**, not the CML and total risk.
26. **β = Cov(i,M)/σ²_M, not Cov(i,M)/σ_M.** Dividing by σ_M once (not squared) is a very common slip and gives a number roughly `σ_M` times too large.
27. **A negative beta still has a positive CAPM-required return in most exam numbers** — it's *lower than the RFR*, not negative itself, unless the premium × beta term exceeds the RFR.
28. **Don't compare stocks' estimated returns to each other.** Compare each stock's own estimated return to its own CAPM-required return. The stock with the single highest forecast return is not automatically the best buy.
29. **Changing the market proxy (S&P 500 vs a global index) changes beta and every downstream CAPM figure.** If a question changes the index used, expect the beta — and the mispricing verdict — to change too, even for the identical stock and time period.

---

*Notes compiled from EFB335 Topic 1, Topic 2 and Topic 3 lecture slides, the Tutorial 1, Tutorial 2 and Tutorial 3 question sheets, and the Topic 1, Topic 2 and Topic 3 Excel workbooks. All numerical worked examples independently verified in Python.*
