# Topic Checklist — EFB335 Investments

**Exam Friday 13 November · 40% of the unit.** The most mathematically
demanding paper, and the one with the most unknown content — Topics 1–4
are taught and written; market efficiency, bonds, derivatives and
performance evaluation are promised and not yet here.

Its Friday slot plus the free Thursday is the best position in the block.
Use it.

> **Revise from the four revision packs, not the topic notes.** [Notes
> 13–16](#/EFB335/13-revision-pack-topic-1-and-tutorial-1) already fold
> each topic together with its tutorial and end with a self-test and a
> cheat sheet — which is exactly the shape a revision pass should have.
> Drop back to a topic note only when a pack exposes a gap.

---

## Topic 1 — The Investment Background

[Topic note 01](#/EFB335/01-topic-1-investment-background) · [Revision
pack 1](#/EFB335/13-revision-pack-topic-1-and-tutorial-1) · [Tutorial
1](#/EFB335/06-tutorial-1-solutions)

| # | Sub-topic | Own it |
|---|---|---|
| 1.1 | What an investment is | The required rate of return decomposed: real risk-free + inflation + risk premium |
| 1.2 | Historical rates of return | The asset-class ordering, and why |
| 1.3 | **AM vs GM** | Both, on the same series, and **why `AM ≥ GM`** with the gap ≈ `σ²/2` |
| 1.4 | BHP worked example | Re-do it, cold |
| 1.5 | **Expected rates of return** | `E(R) = Σ PᵢRᵢ` |
| 1.6 | **Risk of expected return** | Variance and SD, **expected vs historical divisors** |
| 1.7 | **Sharpe ratio** | `(R − Rf)/σ`, and the CV as its cousin |
| 1.8 | **Types of orders** | Market, limit, stop-loss, stop-buy — and when each executes |
| 1.9 | **Margin transactions** | Long **and** short. The margin-call price both ways |

```
HPR = Ending / Beginning          HPY = HPR − 1
HPY with income = (P₁ − P₀ + D₁) / P₀
AM = Σ HPY / n                    GM = [Π HPR]^(1/n) − 1
Long  margin call:  P* = Loan / [N × (1 − MM)]
Short margin call:  P* = (Proceeds + Deposit) / [N × (1 + MM)]
Leverage factor = 1 / IM
```

---

## Topic 2a — Portfolio Management (the measurement half)

[Topic note 02](#/EFB335/02-topic-2-portfolio-management) · [Revision
pack 2](#/EFB335/14-revision-pack-topic-2-and-tutorial-2) · [Tutorial
2](#/EFB335/07-tutorial-2-solutions)

| # | Sub-topic | Own it |
|---|---|---|
| 2.1–2.2 | **Markowitz assumptions** | List them. They are asked directly |
| 2.3 | Alternative risk measures | Semi-variance, range, downside risk — and why SD won |
| 2.4–2.5 | Expected return · individual risk | The weighted average, and `σ` per asset |
| 2.6 | **Covariance — direction** | Sample `/(n−1)` vs population `/n`. **This is the unit's most common lost mark** |
| 2.7 | **Correlation — strength** | `r = Cov/(σᵢσⱼ)`, range −1 to +1, and `R² = r²` |
| 2.8–2.9 | **Portfolio standard deviation** | The two-asset variance formula, by hand, twice |
| 2.10 | **Extending to n assets** | `n` variance terms and `n(n−1)/2` unique covariances |
| 2.11 | Estimation issues | Why inputs, not maths, break MPT in practice |
| 2.12 | **The efficient frontier** | Draw it, label the axes, and say what dominance means |

```
σ²_p = w₁²σ₁² + w₂²σ₂² + 2w₁w₂ r₁₂ σ₁ σ₂
Min-variance weight (any r):  w₁* = (σ₂² − Cov₁₂) / (σ₁² + σ₂² − 2Cov₁₂)
r = +1 → σ_p = w₁σ₁ + w₂σ₂          r = −1 → σ_p = |w₁σ₁ − w₂σ₂|
Annualise: return (1+r)^m − 1 · variance ×m · SD ×√m     (m = 12, 52, 252)
```

---

## Topic 2b — Investor Utility and Strategy

[Topic note 03](#/EFB335/03-topic-2-utility-and-strategy)

| # | Sub-topic | Own it |
|---|---|---|
| 3.1 | **Utility and indifference curves** | `U = E(r) − 0.5Aσ²`. A ≈ 7 conservative, ≈ 1 aggressive. The curve is a **parabola**, steeper for higher A. Find the optimal portfolio as the tangency |
| 3.2 | Setting up and evaluating a strategy | The steps, and the evaluation criteria — the "modified" Sharpe `E(R_p)/σ_p` has **no** risk-free rate and does **not** rank the same way |

---

## Topic 3 — Capital Market Theory and the CAPM

[Topic note 04](#/EFB335/04-topic-3-capital-market-theory-and-capm) ·
[Revision pack 3](#/EFB335/15-revision-pack-topic-3-and-tutorial-3) ·
[Tutorial 3](#/EFB335/08-tutorial-3-solutions)

| # | Sub-topic | Own it |
|---|---|---|
| 3.1 | **The assumptions**, including the risk-free asset | `Cov(RF, i) = 0` always |
| 3.2 | **The Capital Market Line** | Derive it. `σ_port = (1 − w_RF)σ_M`. Lending vs borrowing portfolios |
| 3.3 | Diversification and the market portfolio | Systematic vs unsystematic, and the number-of-stocks curve |
| 3.4 | **The CAPM and the SML** | `E(Rᵢ) = Rf + βᵢ(Rm − Rf)`. **Beta two ways** — from `Cov(i,m)/σ²m` and from a regression slope. Over/undervalued from the SML |
| 3.5 | Relaxing the assumptions | Which conclusions survive |
| 3.6 | Empirical tests | What the evidence actually shows |
| 3.7 | **Benchmark error (Roll's critique)** | Why the true market portfolio is unobservable and what that does to every test |

**CML vs SML** — the distinction is examined nearly every time: CML prices
*efficient portfolios* against **total risk (σ)**; SML prices *any asset*
against **systematic risk (β)**.

---

## Topic 4 — APT and Multifactor Models

[Topic note 05](#/EFB335/05-topic-4-apt-and-multifactor-models) ·
[Revision pack 4](#/EFB335/16-revision-pack-topic-4-and-tutorial-4) ·
[Tutorial 4](#/EFB335/09-tutorial-4-solutions)

| # | Sub-topic | Own it |
|---|---|---|
| 4.1 | **Why the CAPM needed a successor** | The three or four failures, stated crisply |
| 4.2 | **The APT model** | Its assumptions — and which CAPM assumptions it drops |
| 4.3 | **The two-factor worked example** | Compute an expected return from factor betas and premiums |
| 4.4 | **The three-stock arbitrage** | Price three securities, find the mispriced one, construct the arbitrage. The hardest routine question in the unit |
| 4.5 | Empirical tests of the APT | Including the "unnamed factors" criticism |
| 4.6 | **Multifactor models** | Fama–French: size and value factors, and reading the coefficients |
| 4.7 | Estimating expected returns | Assemble a multifactor expected return from a regression output |

---

## The Tutorials

| Tutorial | Content | Note |
|---|---|---|
| T1 | Ch 1 Q6, Q7, P3, P5 · Ch 3 Q9, P2, P4 | [Note 06](#/EFB335/06-tutorial-1-solutions) |
| T2 | Ch 6 variations, P1, P3, P4, P7 — **and two defects in the supplied template**, which is an empty file | [Note 07](#/EFB335/07-tutorial-2-solutions) |
| T3 | Ch 7 Q2, Q5, P2, plus three non-textbook questions | [Note 08](#/EFB335/08-tutorial-3-solutions) |
| T4 | CAPM vs APT explained · Fama–French coefficients · excess returns under three premium sets · Exhibit 7.22 · the factor regressions | [Note 09](#/EFB335/09-tutorial-4-solutions) |

[Note 12, the investment briefing guide](#/EFB335/12-investment-briefing-guide)
was written for A1, which you have already sat — but its **14 Excel
calculations are exactly the unit's examinable computations**. Worth one
pass as a computation checklist.

---

## Traps — the recurring five

1. **Population vs sample divisors** in variance and SD. The single most
   common lost mark in the unit.
2. **Sign flips** — short positions, excess returns, covariance terms.
3. **Which mean** — arithmetic vs geometric, and when each is correct.
4. **Annualising** — `×12`, `×√12` and `(1+i)^12 − 1` are three different
   operations for three different quantities.
5. **Beta from a regression vs beta from `Cov/σ²`** — same number, two
   derivations, and exams ask for both.

Full list: [note 11](#/EFB335/11-formula-sheet).

> **This is the unit where "I read it" and "I can do it" diverge
> furthest.** A portfolio variance derivation reads as obvious and then
> will not come out under time pressure. Every block in this unit should
> end with a derivation on paper.

---

## Still To Be Taught — the plan's biggest single risk

Topics 1–4 exist. The unit description also promises **market
efficiency, anomalies, bonds, derivatives and performance evaluation**,
and A2's brief references "Topic 6 anomalies". That is potentially **as
much material again** as is currently written.

> **Audit this on Sunday 25 October and re-plan from there.** If four
> more topics have landed, EFB335 needs a second slot in Phase 2 and
> USB245's allocation is where it comes from. Leaving that audit until
> November is how a 40% paper goes wrong.

When new topics land, add them here in the same shape — sub-topic, "own
it", formulas — and the Thursday 12 November plan in [note
03](#/REVISION/03-the-exam-week) gets an explicit block for them.
