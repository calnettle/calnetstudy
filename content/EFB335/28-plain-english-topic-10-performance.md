# Plain English — Topic 10: Judging a Fund Manager

[← Start here](#/EFB335/20-plain-english-start-here) · 📁 Deck:
`Topic 10_Performance Evaluation-5.pptx` ·
[Official sheet, Topic 10 lines](#/EFB335/17-official-exam-formula-sheet/risk-adjusted-performance-topic-10) ·
[Sample Q9](#/EFB335/18-sample-final-exam/question-9-risk-adjusted-performance-topic-10-4-marks) ·
[Sample Q10](#/EFB335/18-sample-final-exam/question-10-beating-the-benchmark-topics-6-and-10-4-marks)

## The One-Sentence Version

**Never judge a manager on return alone: judge them on return per unit
of risk, and the five measures differ only in which risk they divide
by.**

## The Picture

Two drivers both arrive in 30 minutes. One drove at the speed limit.
The other ran red lights and overtook on blind corners. Same result,
but you'd only hire the first one. **Return is the arrival time. Risk is
how they drove.** Each measure below is a different way of scoring the
driving.

## The Five Measures

Every one is **(return above something) ÷ (some kind of risk)**, except
Jensen, which is a straight difference.

| Measure | Formula | Risk it uses | Use it when |
|---|---|---|---|
| **Sharpe** | (Rp − Rf) ÷ σp | **Total** risk | The fund is the investor's **whole** portfolio |
| **Treynor** | (Rp − Rf) ÷ βp | **Systematic** risk (beta) | The fund is **one part** of a diversified whole |
| **Jensen's alpha** | (Rp − Rf) − βp(Rm − Rf) | Beta, via the CAPM | You want "how many % above what the risk deserved" |
| **Information ratio** | (Rp − Rb) ÷ tracking error | **Active** risk vs a benchmark | Judging an active manager against their benchmark |
| **Sortino** | (Rp − τ) ÷ downside risk | **Downside** risk only | Investors only mind returns falling below a target τ. **Not on the sheet** |

Sharpe, Treynor, Jensen and the information ratio **are on the official
sheet**. Sortino is not.

## Worked Example: The Slides' Own Numbers

Market return 14%, market σ 20%, risk-free 8%.

**Sharpe (slide 15):**

| Fund | Return | σ | Sharpe | vs market (0.30) |
|---|---|---|---|---|
| D | 13% | 18% | (13 − 8) / 18 = **0.28** | worse |
| E | 17% | 22% | (17 − 8) / 22 = **0.41** | better |
| F | 16% | 23% | (16 − 8) / 23 = **0.35** | better |

**Treynor and Jensen (slide 18):** market Treynor = (14 − 8) / 1 = 6.

| Manager | Return | β | Treynor | Jensen's α = (Rp − Rf) − β(Rm − Rf) |
|---|---|---|---|---|
| W | 12% | 0.90 | 4 / 0.90 = **4.44** (below 6) | 4 − 0.90 × 6 = **−1.4%** |
| X | 16% | 1.05 | 8 / 1.05 = **7.62** | 8 − 1.05 × 6 = **+1.7%** |
| Y | 18% | 1.20 | 10 / 1.20 = **8.33** | 10 − 1.20 × 6 = **+2.8%** |

W underperformed for its risk. X and Y beat it. All three measures
agree here because these are judged on beta alone.

**Information ratio:** a fund averages 11% against a benchmark's 9%,
with tracking error 4%. IR = 2 / 4 = **0.5**.

**Sortino:** return 10%, target 2%, downside deviation 8%.
Sortino = 8 / 8 = **1.0**.

## Why Sharpe and Treynor Can Disagree

This is the classic exam question. Sharpe divides by **total** risk,
Treynor by **systematic** risk only. For a **well-diversified** fund the
two are nearly the same, so the rankings agree. A **poorly diversified**
fund carries lots of firm-specific risk: Sharpe punishes it, Treynor
ignores it. So that fund can look good on Treynor and poor on Sharpe.

## Attribution: Where Did the Extra Return Come From?

Formulas on the sheet:

```
Allocation effect = Σ (W_pi − W_bi) × R_bi      did you over-weight the right segments?
Selection effect  = Σ W_pi × (R_pi − R_bi)      did you pick better within each segment?
Allocation + Selection = portfolio return − benchmark return
```

| Segment | W_p | W_b | R_p | R_b |
|---|---|---|---|---|
| Shares | 0.7 | 0.6 | 11% | 10% |
| Bonds | 0.3 | 0.4 | 5% | 4% |

```
Benchmark return = 0.6(10) + 0.4(4) = 7.6%
Portfolio return = 0.7(11) + 0.3(5) = 9.2%        excess = 1.6

Allocation = (0.7 − 0.6)(10) + (0.3 − 0.4)(4) = 1.0 − 0.4 = 0.6
Selection  = 0.7(11 − 10) + 0.3(5 − 4)        = 0.7 + 0.3 = 1.0
Check: 0.6 + 1.0 = 1.6 ✓
```

In words: the manager gained 0.6 points by leaning into shares and 1.0
point by picking better shares and bonds than the index.

## The Rest of the Topic, Briefly

- **Past performance** drives where investors put money (most ads quote it, often just one year), but persistence is weak: **poor performers tend to stay poor**, top performers only mildly repeat.
- **What a good manager needs (slide 33):** (1) above-average risk-adjusted returns from **timing** or **selection**, and (2) **full diversification** of unsystematic risk.
- **Benchmark error:** the "market" is hard to measure. A different index gives a different beta and a different answer. A good benchmark is unambiguous, investable, measurable, appropriate, reflects current opinion, and is **specified in advance**.
- **Evidence:** early studies found funds underperformed on average (Jensen 1968: average alpha −1.1%). Recent evidence is mixed and depends on the period, benchmark and fees.

## The Jargon to Learn

The plain English above is there to help you *understand* it. **The
marks go to the proper terms**, so learn every one of these: the term,
what it means, and a sentence that uses it the way a marker wants to
read it. Cover the right two columns and test yourself.

| Term | What it means | Say it like this in the exam |
|---|---|---|
| **Peer group comparison** | Ranking a fund against similar funds | "Peer group comparisons ignore risk explicitly and depend on a comparable universe." |
| **Benchmark portfolio** | The passive standard the manager is judged against | "A valid benchmark is unambiguous, investable, measurable, appropriate and specified in advance." |
| **Tracking performance: ATP / AATP / σ(TP)** | Average, average absolute and standard deviation of fund − benchmark returns | "AATP avoids positive and negative tracking errors cancelling out; σ(TP) penalises large deviations." |
| **Sharpe ratio** | Excess return per unit of total risk | "The Sharpe ratio is appropriate when the portfolio is the investor's entire wealth." |
| **Treynor ratio** | Excess return per unit of systematic risk | "The Treynor ratio assumes a well-diversified portfolio, since it ignores unsystematic risk." |
| **Jensen's alpha** | Actual return minus CAPM-required return | "A significantly positive Jensen's alpha indicates superior risk-adjusted performance." |
| **Information ratio** | Active return ÷ tracking error | "The information ratio measures the consistency of a manager's active return relative to the active risk taken." |
| **Sortino ratio / downside risk / semi-deviation** | Return above a minimum target ÷ downside risk only | "The Sortino ratio penalises only returns below the minimum acceptable return." |
| **Excess return** | Return above Rf (or above the benchmark) | "Both Sharpe and Treynor use excess return over the risk-free rate." |
| **Market timing vs security selection** | Shifting exposure vs picking assets | "Superior risk-adjusted returns can come from superior timing or superior security selection." |
| **Attribution analysis: allocation effect / selection effect** | Where the excess return came from | "The allocation effect measures over- or under-weighting segments; the selection effect measures picking better securities within segments." |
| **Performance persistence** | Do winners keep winning? | "Evidence of persistence is weak for top performers and stronger for poor performers." |
| **Time-weighted return / GIPS** | Return unaffected by the client's deposits and withdrawals; presentation standards | "Performance presentation standards require total, time-weighted returns, geometrically linked." |

## How the Exam Asks It

**Sample Q9** (4 marks): (a) when can Sharpe and Treynor conflict, and
why (2), then (b) calculate Jensen's alpha. Shape for (a):

> Sharpe divides excess return by total risk (σ); Treynor divides it by
> systematic risk (β). For well-diversified funds total risk is close
> to systematic risk, so they rank funds the same way. They conflict
> when a fund is poorly diversified: its unsystematic risk lowers its
> Sharpe ratio but doesn't affect Treynor, so it can rank well on
> Treynor and badly on Sharpe.

**Sample Q10(b)** (2 marks): explain allocation and selection effects.
Use the two "did you…?" lines above, and say they add up to the excess
return.

## Say It Back

<details><summary>1. Return 12%, Rf 4%, σ 16%, β 0.8. Sharpe and Treynor?</summary>

Sharpe = 8 / 16 = **0.50**. Treynor = 8 / 0.8 = **10**.
</details>

<details><summary>2. Same fund, market return 10%. Jensen's alpha?</summary>

(12 − 4) − 0.8(10 − 4) = 8 − 4.8 = **+3.2%**.
</details>

<details><summary>3. Which measure for a fund that is an investor's entire wealth, and why?</summary>

**Sharpe**, because with no other holdings the investor bears the
fund's total risk, including the unsystematic part.
</details>

<details><summary>4. What does the information ratio measure?</summary>

Active return (fund minus benchmark) per unit of tracking error: how
much extra return the manager produced for each unit of risk taken by
straying from the benchmark.
</details>

<details><summary>5. How does Sortino differ from Sharpe?</summary>

It subtracts a chosen minimum acceptable return (not necessarily Rf)
and divides by **downside** risk only, so upside volatility isn't
punished.
</details>
