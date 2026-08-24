# TUTORIAL 4 — Full Worked Solutions

*(Source: `Tutorial 4 Questions-2 (1).docx` — Reilly & Brown Chapter 7: Question 7, Question 9, Problem 9, Problem 13, Problem 14(a–b). No solution sheet was supplied; every solution below is worked from scratch. The Problem 13/14 data table — Exhibit 7.22, 30 months of excess returns for two portfolios and three factors — is embedded in the question sheet as an image; the numbers were extracted from it and every calculation, including the regressions, was verified in Python.)*

---

## Chapter 7, Question 7 — explaining CAPM vs APT to new analysts

**(a) What each model attempts, and the main differences.**

Both models describe how the **expected return** of a security is determined by its exposure to **systematic risk** — risk that survives diversification and must therefore be compensated. Both are linear.

- **CAPM** prices assets with **one** factor: sensitivity (beta) to the **market portfolio**. Required return = RFR + β × market risk premium. It needs the full Topic 3 assumption set (mean–variance investors, homogeneous expectations, a mean–variance-efficient market portfolio).
- **APT** prices assets with **K** factors: `E(Ri) = λ0 + Σλj·bij`. It needs only three assumptions (competitive markets, non-satiation, a linear K-factor return process), does not assume normal returns or quadratic utility, and — the defining feature — **does not identify the factors** or require a market portfolio at all. Equilibrium is enforced by **arbitrage** (the law of one price) rather than by everyone holding M.

| Difference | CAPM | APT |
|---|---|---|
| Risk factors | 1, named (the market) | K > 1, unnamed |
| Key mechanism | All investors hold M | Arbitrage removes mispricing |
| Assumption load | Heavy (8) | Light (3) |
| Benchmark needed | Yes — exposed to Roll's critique | No |

**(b) When would APT be preferred for stock selection?**

- When returns are demonstrably driven by **several** systematic influences (inflation, rates, industrial production, size, value) that a single market beta averages away — APT isolates each exposure, so the fund can tilt toward priced risks it wants and hedge those it doesn't.
- When no reliable **market-portfolio proxy** exists (international or multi-asset mandates — Topic 3's benchmark-error problem).
- When the CAPM's stronger assumptions are clearly violated (non-normal returns, for instance), since APT does not need them.

The cost: the analysts must **identify and estimate the factors themselves** — the model won't name them (Topic 4, §4.2).

## Chapter 7, Question 9 — reading Fama–French coefficients for XYZ

The regression of XYZ's monthly returns on the three FF factors gave: **market = 1.2, SMB = −0.3, HML = 1.4**.

- **Market factor 1.2** — XYZ moves 1.2% for a 1% move in the market's excess return: **more volatile than the market** (beta > 1), amplifying market swings.
- **SMB = −0.3** — a *negative* loading on small-minus-big: XYZ behaves like a portfolio of **large-capitalisation** stocks. When small caps beat large caps, XYZ underperforms.
- **HML = 1.4** — a strongly *positive* loading on high-minus-low book-to-market: XYZ behaves like a **value** portfolio, and 1.4 is a heavy tilt.

**What XYZ likely holds:** high-beta, **large-cap value** stocks — big companies with high book-to-market ratios (mature, possibly beaten-down names), not small growth stocks.

> The sign conventions are the whole question: SMB positive = small, negative = large; HML positive = value, negative = growth. Same convention as the Topic 4 checkpoint (SMB −0.22 / HML 0.89 → large-cap value).

## Chapter 7, Problem 9 — expected excess returns under three premium sets

Factor loadings (estimated 2005–09):

```
Three-factor:  BCD:  0.966·λM − 0.018·λSMB − 0.388·λHML
               FGH:  1.042·λM − 0.043·λSMB + 0.370·λHML
               JKL:  1.178·λM + 0.526·λSMB + 0.517·λHML
Four-factor:   BCD:  1.001·λM − 0.012·λSMB − 0.341·λHML + 0.073·λMOM
               FGH:  1.122·λM − 0.031·λSMB + 0.478·λHML + 0.166·λMOM
               JKL:  1.041·λM + 0.505·λSMB + 0.335·λHML − 0.283·λMOM
```

**(a) With the 15-year premia** (λM 7.23, λSMB 2.00, λHML 4.41, λMOM 4.91 — all %):

```
3-factor  BCD: 0.966(7.23) − 0.018(2.00) − 0.388(4.41) = 6.984 − 0.036 − 1.711 = 5.24%
          FGH: 1.042(7.23) − 0.043(2.00) + 0.370(4.41) = 7.534 − 0.086 + 1.632 = 9.08%
          JKL: 1.178(7.23) + 0.526(2.00) + 0.517(4.41) = 8.517 + 1.052 + 2.280 = 11.85%
4-factor  BCD: 1.001(7.23) − 0.012(2.00) − 0.341(4.41) + 0.073(4.91) = 6.07%
          FGH: 1.122(7.23) − 0.031(2.00) + 0.478(4.41) + 0.166(4.91) = 10.97%
          JKL: 1.041(7.23) + 0.505(2.00) + 0.335(4.41) − 0.283(4.91) = 8.62%
```

Confirmed — these reproduce the question's stated 5.24 / 9.08 / 11.86 and 6.07 / 10.98 / 8.63 to within a cent of a percent. *(Exact arithmetic gives 11.85, 10.97 and 8.62; the textbook's 11.86 / 10.98 / 8.63 come from rounding intermediate products. State either — show the working.)*

**(b) Three-factor model under the alternative premium histories:**

```
              λM     λSMB   λHML        BCD      FGH      JKL
30-year:      7.11   1.50   5.28   →   4.79%    9.30%   11.89%
80-year:      7.92   3.61   5.02   →   5.64%    9.95%   13.82%
```

**(c) Four-factor model, adding λMOM = 7.99 (30-yr) / 9.79 (80-yr):**

```
30-year  →   BCD 5.88%    FGH 11.78%    JKL 7.67%
80-year  →   BCD 6.89%    FGH 12.80%    JKL 8.98%
```

All verified in Python.

**(d) Do they all make sense?** Mostly, with one systematic oddity:

- Across every premium set the *ordering* under the three-factor model is stable (BCD < FGH < JKL) and economically sensible — JKL is the high-beta, small-cap, value-tilted stock, so it should require the most.
- The four-factor model **reverses JKL and FGH**, and the reversal grows with the sample period: JKL's *negative* momentum loading (−0.283) collides with very large estimated momentum premia (4.91 → 7.99 → 9.79%). Taking the 80-year λMOM at face value, holding a stock that hedges momentum costs 2.77% a year of required return — a huge effect from one estimated coefficient.
- That is the inconsistency worth discussing: **the MOM premium estimates look implausibly large and unstable relative to the other factors**, and Fama–French themselves exclude momentum from the five-factor model, regarding it as a short-term phenomenon rather than a priced long-term risk. The exercise also shows how sensitive "expected return" is to the sample period used for the premia — the same stock (JKL, 3-factor) ranges from 11.85% to 13.82% depending on the history chosen.

## Chapter 7, Problem 13 — Exhibit 7.22 statistics

30 monthly excess returns for Portfolios A and B and Factors 1–3.

**(a) Means and standard deviations** (monthly, then annualised ×12 for means and ×√12 for SDs, per the hint; sample SDs, n−1):

| | Monthly mean | Monthly σ | Annual mean | Annual σ |
|---|---|---|---|---|
| Portfolio A | 1.87% | 5.49% | 22.45% | 19.01% |
| Portfolio B | 1.39% | 4.64% | 16.66% | 16.08% |
| Factor 1 | 1.18% | 5.30% | 14.18% | 18.36% |
| Factor 2 | 0.04% | 6.87% | 0.42% | 23.79% |
| Factor 3 | −1.28% | 4.97% | −15.42% | 17.22% |

All verified in Python.

**(b) Did one portfolio clearly outperform?** **No — it isn't clear.** A earned more (22.45% vs 16.66% annualised) but was also riskier (19.01% vs 16.08%). Higher return *with* higher risk is exactly the trade-off asset pricing exists to referee; without a risk-adjusted measure (a Sharpe ratio, or the factor model of Problem 14) you cannot rank them. *(If you do compute excess-return-per-unit-of-risk from these annualised figures: A ≈ 1.18, B ≈ 1.04 — A edges ahead, but the gap is modest and these are already excess returns; the honest part-(b) answer is "not clear from raw return and σ alone".)*

**(c) Correlations between the factor pairs:**

```
r(F1,F2) = +0.22      r(F1,F3) = −0.55      r(F2,F3) = −0.75
```

Verified in Python.

**(d) What should factor correlations be in theory?** **Zero.** Factors in a multifactor model are meant to be *independent* sources of systematic risk — orthogonal by construction (principal-component methods literally build them that way). Each factor should capture risk the others don't.

**(e) How close are we, and what problem does the deviation create?** Not close: −0.75 between Factors 2 and 3 is a strong relationship, and −0.55 isn't small either — only the +0.22 is tolerable. Correlated factors create **multicollinearity** in the Problem 14 regressions: the factors partly measure the *same* risk, so the regression struggles to attribute return between them — coefficient estimates become unstable and their standard errors inflate, and the "premium per factor" interpretation breaks down because you cannot move one factor holding the others fixed.

## Chapter 7, Problem 14 (a–b) — the factor regressions

Regressing each portfolio's 30 monthly excess returns on all three factors simultaneously (multivariate OLS — the same job as Excel's Data Analysis → Regression with three X columns). Computed in Python:

**(a) Factor betas and significance** (t-statistics in parentheses; with 26 degrees of freedom the 5% critical value is ≈ 2.06):

| | Intercept | b1 (Factor 1) | b2 (Factor 2) | b3 (Factor 3) |
|---|---|---|---|---|
| Portfolio A | 0.54 (2.73)* | **0.99 (21.91)*** | **−0.20 (−4.47)*** | −0.13 (−1.80) |
| Portfolio B | 0.66 (2.34)* | **0.96 (14.82)*** | 0.05 (0.77) | **0.32 (3.15)*** |

- **Factor 1 is overwhelmingly significant for both portfolios** with betas ≈ 1 — it behaves like a market factor.
- **Factor 2 matters only for A** (significantly *negative*, −0.20): A hedges whatever Factor 2 measures. For B it is indistinguishable from zero.
- **Factor 3 matters only for B** (+0.32, significant): B loads on it; A's −0.13 is not significant at 5%.
- Both intercepts are positive and marginally significant — return the factors don't explain.

**(b) How well does the model explain the returns?**

```
Portfolio A:  R² = 0.970   (adjusted 0.966)
Portfolio B:  R² = 0.913   (adjusted 0.903)
```

The basis of evaluation is the **coefficient of determination**: the three factors jointly explain ~97% of the monthly variation in A and ~91% in B — a very good fit by any standard (compare the CSL Fama–French regression's R² of ~0.38 on daily data in the Topic 4 workbook). The caveat from Problem 13(e) still applies: with factor correlations up to −0.75, the *individual* betas are less trustworthy than the overall fit — multicollinearity inflates their standard errors even while R² stays high.

> **Marks live in the pairing: (a) is read off the t-stats, (b) off the R².** Say what each *is for* — t answers "is this factor priced into this portfolio", R² answers "how much of the movement do the factors collectively explain" — and quote the numbers. Note this uses the whole Exhibit 7.22 table, so a hand calculation is not expected: in the exam, describe the procedure; in the briefing, run Data Analysis → Regression exactly as practised in `Topic 4 Fama French Factors.xlsx`.

## ✅ Checkpoint

<details><summary>1. Under a two-factor APT with λ0 = 3%, λ1 = 5%, λ2 = 2%, what is the expected return of a stock with b1 = 1.1 and b2 = −0.4?</summary>

```
E(R) = 3% + 5%(1.1) + 2%(−0.4) = 3 + 5.5 − 0.8 = 7.7%
```

A negative loading *reduces* the required return — the stock hedges factor 2.

</details>

<details><summary>2. A fund's FF regression gives market 0.9, SMB +0.8, HML −0.5. Describe its holdings.</summary>

Slightly defensive (beta < 1) **small-cap growth** portfolio: positive SMB = small-cap behaviour, negative HML = low book-to-market (growth) behaviour.

</details>

<details><summary>3. Two candidate factors have a correlation of −0.8. Why is that a problem for a multifactor model?</summary>

In theory factors should be uncorrelated (each an independent risk source). At −0.8 they largely measure the same thing: the regression can't cleanly attribute return between them (multicollinearity), betas become unstable with inflated standard errors, and the per-factor premium interpretation collapses.

</details>

<details><summary>4. A regression of a portfolio on three factors returns R² = 0.91 and a Factor-2 t-statistic of 0.77. What do you conclude?</summary>

The factors *jointly* explain 91% of the variation (excellent fit), but Factor 2 individually contributes nothing distinguishable from zero for this portfolio — drop it or accept it's unpriced here. High R² and an insignificant coefficient can coexist, especially when factors are correlated.

</details>
