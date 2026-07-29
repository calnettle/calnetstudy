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
| Annualising variance | `σ²_annual = σ²_daily × trading days` |
| Annualising SD | `σ_annual = σ_daily × √(trading days)` |

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
| Correlation | `r(i,j) = Cov(i,j) / (σᵢ σⱼ)`, range −1 to +1 |
| Covariance from correlation | `Cov(i,j) = r(i,j) σᵢ σⱼ` |
| Goodness of fit | `R² = r²` |
| **Two-asset portfolio variance** | **`σ²_p = w₁²σ₁² + w₂²σ₂² + 2w₁w₂ r₁₂ σ₁ σ₂`** |
| General portfolio variance | `σ²_p = Σᵢ wᵢ²σᵢ² + Σᵢ Σⱼ≠ᵢ wᵢwⱼ Cov(i,j)` |
| Matrix form | `σ²_p = wᵀ Σ w` |
| Number of variance terms | `n` |
| Number of unique covariances | `n(n − 1) / 2` |
| Min-variance weight (r = 0) | `w₁* = σ₂² / (σ₁² + σ₂²)` |
| Zero-risk weight (r = −1) | `w₁* = σ₂ / (σ₁ + σ₂)` |
| σ_p when r = +1 | `w₁σ₁ + w₂σ₂` (weighted average) |
| σ_p when r = −1 | `|w₁σ₁ − w₂σ₂|` |
| Single-index correlation | `r(i,j) = βᵢβⱼσ²_m / (σᵢσⱼ)` |
| **Utility function** | **`U = E(r) − 0.5 × A × σ²`** (A ≈ 7 conservative, ≈ 1 aggressive) |

---

# EXAM TRAPS — QUICK CHECKLIST

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

---

*Notes compiled from EFB335 Topic 1 and Topic 2 lecture slides, Tutorial 1 questions and solutions, and the Topic 1 Excel workbooks. All numerical worked examples independently verified.*
