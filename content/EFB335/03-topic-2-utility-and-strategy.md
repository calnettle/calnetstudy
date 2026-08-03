# TOPIC 2 (continued) — Investor Utility and Investment Strategy

*(Reilly & Brown, Chapter 6 — second half)*

The first half of Topic 2 (**doc 02**) is entirely about **measurement**: how to compute a portfolio's expected return and risk, how covariance and correlation govern the diversification benefit, and how the efficient frontier falls out of those calculations. Every result there is objective — two analysts with the same return series must get the same frontier.

This half is about the two things that are **not** objective: **which point on that frontier a particular investor should hold**, and **how you would design and honestly evaluate a strategy for getting there**. The frontier tells you what is attainable. It cannot tell you what is desirable. That requires a statement of the investor's own tolerance for risk, and that is what the utility function supplies.

Doc 02 runs §2.1–§2.13; this document restarts its own numbering at §3.1. Cross-references back to the measurement half are written as "doc 02, §2.n".

---

## 3.1 Efficient Frontier and Investor Utility

An individual investor's **utility curve** specifies the **trade-offs they are willing to make between expected return and risk**.

Two curves interact:

1. The **efficient frontier** — its slope decreases steadily as you move upward (the marginal utility of each additional unit of risk falls).
2. The investor's **utility curves** (indifference curves) — each represents a constant level of satisfaction.

**The interaction of these two curves determines the particular portfolio selected by an individual investor.**

### The optimal portfolio

**The optimal portfolio lies at the point of tangency between the efficient frontier and the utility curve with the highest possible utility.**

- Investor **X**, with steep utility curves, achieves highest utility at portfolio **X**.
- Investor **Y**, with flatter utility curves, achieves highest utility at portfolio **Y**.

**Which investor is more risk averse?** → **Investor X.** Steeper utility curves mean the investor demands a **large** increase in return to accept a **small** increase in risk. Investor Y's flatter curves mean they will tolerate more risk for extra return, so their tangency point sits further right and up the frontier.

The lecture is explicit about the geometry: curves `U₁, U₂, U₃` are very steep, so those investors will not tolerate much additional risk to obtain additional return, and their highest attainable tangency is **X**. Curves `U₁′, U₂′, U₃′` are relatively flatter, so those investors accept a bit more risk for a higher expected return, and their tangency is **Y**. Curves `U₁` and `U₁′` do intersect the frontier, but at a **lower** level of utility — intersecting is not the same as being optimal.

> **Tangency, not intersection.** A utility curve that *crosses* the frontier cuts it at two points and is therefore **not** the best the investor can do — they can always shift to a higher curve. Only the curve that just *touches* the frontier at a single point is the highest attainable. A common exam error is picking a crossing point.

### The utility function

```
U = E(r) − 0.5 × A × σ²
```

| Symbol | Meaning |
|---|---|
| `U` | Utility |
| `E(r)` | Expected return on the portfolio |
| `A` | **Risk aversion coefficient**, obtained via the risk tolerance questionnaire |
| `σ²` | Risk level of the portfolio (measured by the **variance** of portfolio return) |

**Values of A:**

| Investor type | A |
|---|---|
| Conservative | ~**7** |
| Aggressive | ~**1** |
| Risk-neutral | 0 |

> **Note the σ² — it's VARIANCE, not standard deviation.** Squaring is the single most common error here. Also note: higher A → the risk term is penalised more heavily → the investor picks a lower-risk portfolio.

**Worked micro-example:**

Portfolio with E(r) = 15%, σ = 20% (σ² = 0.04):

```
Conservative (A = 7):  U = 0.15 − 0.5(7)(0.04)  = 0.15 − 0.14 = 0.01
Aggressive   (A = 1):  U = 0.15 − 0.5(1)(0.04)  = 0.15 − 0.02 = 0.13
```

The same portfolio delivers wildly different utility depending on risk aversion — which is why the tangency point differs by investor.

**Certainty equivalent:** U is expressed in return units, so U is the **guaranteed** return that would make the investor indifferent to the risky portfolio. The conservative investor above would swap this 15%-return portfolio for a certain **1%**.

> **A risk-free asset has σ² = 0, so its utility is simply its return — the same number for every investor, whatever their A.** That makes it the natural yardstick: any risky portfolio whose U falls below the risk-free rate should not be held by that investor at all.

### Drawing a utility (indifference) curve

*(`Topic 2 Utility Function-1.xlsx`)*

A single indifference curve is the set of `(σ, E(r))` pairs that all deliver the **same** utility. Rearrange the utility function to make `E(r)` the subject:

```
U = E(r) − 0.5 A σ²      →      E(r) = U + 0.5 × A × σ²
```

The workbook sets `A = 10` and `U = 0`, then steps σ from 0 to 0.30 in increments of 0.02:

| σ | E(r) required to hold U = 0 |
|---|---|
| 0.00 | 0.00% |
| 0.10 | 5.00% |
| 0.20 | 20.00% |
| 0.30 | 45.00% |

**The curve is a parabola, not a line** — because σ enters squared. Doubling risk from 10% to 20% does not double the return this investor demands; it **quadruples** it. That convex shape, set against the concave efficient frontier, is exactly what makes the tangency a single well-defined point rather than a range.

Compare how steeply different investors' curves rise, holding `U = 0.05`:

```
E(r) needed at σ = 20%:   A = 1 →  7.0%     A = 4 → 13.0%
                          A = 7 → 19.0%     A = 10 → 25.0%
```

> **Steep curve = high A = risk averse.** The `A = 10` investor demands a 25% expected return to accept 20% volatility; the `A = 1` investor is content with 7%. This is the algebra behind "Investor X is more risk averse than Investor Y" — X's curves are steeper because X's `A` is larger. Note also that the workbook's `A = 10` sits *outside* the 1–7 range the lecture quotes; treat 7 and 1 as typical anchors, not hard bounds.

### Where A comes from — the risk tolerance questionnaire

*(`Risk tolerance questionnaire.pdf` on Canvas — Reilly & Brown Exhibit 2.4, "How Much Risk Is Right for You?", adapted from a 1993 retirement-planning guide)*

It is a **ten-item multiple-choice quiz**. Each question describes a small financial or lifestyle decision — what to do with an unexpected windfall, whether to lock in a fixed holiday rate or gamble on standby, how large a stake to take in an unlisted company, how to choose a restaurant in an unfamiliar city — and each of the four answers scores **1 to 4 points**, with higher scores marking the more risk-tolerant choice. Scores therefore run from **10 to 40**, and the guide sorts them into four bands:

| Total score | Band |
|---|---|
| 10–17 | **Conservative** — unwilling to risk capital, accepting that big gains are off the table |
| 18–25 | **Semi-conservative** — will take a small chance, given enough information |
| 26–32 | **Semi-aggressive** — will take chances when the odds look favourable |
| 33–40 | **Aggressive** — treats money as a tool to make more money, tolerates long odds |

**The link to the formula:** the band maps onto the risk aversion coefficient `A` used in `U = E(r) − 0.5Aσ²` — roughly **A ≈ 7 at the conservative end and A ≈ 1 at the aggressive end**. That is the entire purpose of the instrument: it converts a subjective attitude into a number an optimiser can use.

> **The honest caveat, which is worth a mark in a discussion question.** `A` is not *measured*, it is *elicited* — from a ten-question quiz written for retail investors in 1993, whose answers depend on framing and mood. It then enters a formula that determines the entire asset allocation. Estimation risk in Markowitz optimisation is usually discussed in terms of returns and correlations (doc 02, §2.11), but the **preference** input is at least as soft as the statistical ones, and nothing in the mathematics flags that.

### Worked example — which portfolio does each investor actually choose?

Take the three-asset frontier built in doc 02 §2.10 (`Topic 2 3 Assets_solve.xlsx` — BHP, Woolworths and CAR Group, 173 monthly returns) and score every candidate with `U = E(r) − 0.5Aσ²`. The risk-free rate in that workbook is **1.35%**.

| Portfolio | E(r) | σ | σ² | U (A=1) | U (A=4) | U (A=7) | U (A=10) |
|---|---|---|---|---|---|---|---|
| WOW alone | 7.925% | 16.840% | 0.028359 | +6.507% | +2.253% | −2.001% | −6.255% |
| **Min-variance** | 11.158% | 14.897% | 0.022193 | +10.048% | +6.719% | +3.390% | **+0.061%** |
| BHP alone | 11.923% | 25.254% | 0.063778 | +8.734% | −0.832% | −10.399% | −19.966% |
| **Max-Sharpe** | 20.157% | 20.629% | 0.042556 | +18.029% | **+11.646%** | **+5.263%** | −1.121% |
| CAR alone | 24.064% | 26.087% | 0.068052 | **+20.662%** | +10.454% | +0.246% | −9.962% |
| Risk-free asset | 1.350% | 0 | 0 | +1.350% | +1.350% | +1.350% | +1.350% |

**Reading the table across the rows tells you the whole story of Topic 2:**

- **The aggressive investor (A = 1) holds CAR alone.** With almost no penalty on variance, the highest-return asset wins outright. Note this is consistent with doc 02 §2.12: the frontier's endpoints *are* individual securities.
- **The middle investors (A = 4 and A = 7) hold the maximum-Sharpe portfolio.** This is the classic case — a diversified mix beats every single asset once variance carries real weight.
- **The most risk-averse investor (A = 10) holds the minimum-variance portfolio** among the risky choices, at U = +0.061%. But look at the last column: **0.061% is below the 1.350% risk-free rate**. This investor should hold **cash**, not any of these portfolios.

**Where does the switch happen?** Set the two candidates' utilities equal and solve for A:

```
r₁ − 0.5 A σ₁²  =  r₂ − 0.5 A σ₂²

A* = 2(r₂ − r₁) / (σ₂² − σ₁²)
   = 2(0.201571 − 0.111578) / (0.042556 − 0.022193)
   = 0.179987 / 0.020363
   = 8.84
```

Below `A ≈ 8.84` the maximum-Sharpe portfolio wins; above it, the minimum-variance portfolio wins. In this data set both also fall **below the 1.35% risk-free rate** at almost exactly the same A, so `A ≈ 8.84` is simultaneously the point at which the investor stops preferring risk altogether.

> **Two portfolios that get dominated outright, worth spotting.** **BHP alone** (11.923% at 25.254%) is beaten by the max-Sharpe portfolio on *both* dimensions — more return, less risk. **WOW alone** (7.925% at 16.840%) is beaten by the minimum-variance portfolio on both. Neither should ever be held as a single-asset position by any investor at any level of A. That is what "inefficient" means in practice.

> ⚠️ **Do not read "maximum Sharpe" as "the answer".** The Sharpe ratio ranks portfolios without reference to any particular investor. The utility function is what personalises the choice, and at A = 1 and A = 10 it picks something *other* than the max-Sharpe portfolio. Questions that supply an `A` want the utility calculation, not the Sharpe ranking.

---

## ✅ Checkpoint 1

1. Two portfolios have identical expected returns. One has σ = 12%, the other σ = 18%. By how much does the utility gap between them widen when A rises from 2 to 6?
2. An investor's utility for a risky portfolio comes out at 3.2%. The risk-free rate is 4%. What should they do, and why does the comparison work directly?
3. A utility curve *crosses* the efficient frontier at two points. Is either point the investor's optimum?
4. Investor P demands 4 percentage points more return to accept 5 more points of volatility. Investor Q demands 12. Which has the higher A, and whose tangency portfolio sits further right on the frontier?

<details><summary>Answers</summary>

1. The return terms cancel, so the gap is `0.5 × A × (σ₂² − σ₁²)`. With `σ₂² − σ₁² = 0.0324 − 0.0144 = 0.0180`: at **A = 2** the gap is `0.5(2)(0.0180) = 1.80 pp`; at **A = 6** it is `0.5(6)(0.0180) = 5.40 pp`. It **widens by 3.60 percentage points** — and it scales linearly in A, which is why risk-averse investors separate so sharply from aggressive ones on volatile assets.
2. **Hold the risk-free asset.** The comparison is direct because U is a **certainty equivalent** expressed in return units, and a risk-free asset has σ² = 0 so its own utility is just its return (4%). Since 3.2% < 4%, the investor prefers a guaranteed 4% to the risky portfolio.
3. **No.** A curve that crosses the frontier is not the highest attainable — the investor can always move to a higher utility curve. Only the curve that is **tangent** to the frontier, touching at exactly one point, marks the optimum.
4. **Investor Q has the higher A** — a steeper indifference curve means more return is demanded per unit of risk, i.e. greater risk aversion. **Investor P's** tangency sits further right (higher risk, higher return), because P's flatter curves let them keep climbing the frontier before the marginal return stops compensating.
</details>

---

## 3.2 Setting Up and Evaluating an Investment Strategy

*(Preparing for Assessment 2)*

### Before you start — investment philosophy

Before deciding on a strategy, reflect on what kind of investor you are:

- **Value vs Growth** investor?
- **Index** investor?
- Investing along **socially responsible** (ESG) lines?

In practice this reflection acts as a **guide post in turbulent markets** — the point at which a strategy is most likely to be abandoned is precisely the point at which a stated philosophy is most useful.

### The menu of strategies

*(`Topic 2 Potential Investment Strategies.docx`)*

| Technical | Fundamental |
|---|---|
| Momentum | Underpriced according to CAPM |
| Contrarian | Price/earnings ratio |
| Moving averages | Company size |
| Mean reversion | Dividend yield |
| Volume | |

**Technical** strategies read signals out of the price and volume series itself. **Fundamental** strategies read them out of company financials or a pricing model. Both are legitimate; what matters is that the signal is defined precisely enough to be computed from data you actually have.

The prescribed structure: use the **first three years** of returns to decide whether to buy or sell at the **beginning of each month**, then use the **last two years** as the investment period, with the decision **updated each month** during it.

### Turning a strategy into a decision rule

A workable strategy statement is a **decision rule with no gaps** — a signal, a threshold, and an action for **every** case, including the tie. The examples supplied with the unit all take the same three-branch shape:

```
At the end of each month, compute <the signal> over <the lookback window>.

  If <signal> is above <threshold>   →  buy the stock for the following month
  If <signal> is below <threshold>   →  short-sell the stock for the following month
  If <signal> equals <threshold>     →  hold the position from the previous month
```

Note that the supplied examples are illustrations only, and the document explicitly **forbids reusing either of them** in the assignment — you may borrow the ideas, but the strategy must vary from them.

Three things the skeleton forces you to be specific about, and each is a place marks are lost:

1. **The lookback window.** "Recent performance" is not a rule. "The average monthly return over the previous 36 months" is.
2. **The tie branch.** Signals hit the threshold exactly more often than you would expect, especially with rounded data. A rule with no tie branch is not replicable.
3. **The timing.** The signal must be computable *before* the month it governs. A rule that uses this month's return to decide this month's position is not a strategy — it is hindsight, and it will produce spectacular back-tests that cannot be traded.

> ⚠️ **The mislabelling in the source document.** Both worked examples are headed *"Example – Technical Analysis"*, but the second one trades on **dividend yield**, which the same document's own table lists under **Fundamental** strategies. Classify your own strategy by what it uses as a signal, not by which heading you happened to copy.

### Constructing the strategy

1. **Ensure your investment strategy can be stated as a clear process that could be followed by anyone** choosing to use the strategy. (Replicability is being marked.)
2. Use an **"in-sample" period** to construct and refine your strategy.
3. ⚠️ **Be careful not to "overfit" your model** — it will not work so well in the out-of-sample period.

> **What overfitting looks like in practice.** If you try twenty lookback windows and report the one that performed best in-sample, you have not found a signal — you have found the luckiest of twenty noise draws. The in-sample result is then meaningless as a prediction. The defence is to fix the rule *before* looking at the out-of-sample period, and to report how many variants you tried.

### Evaluating the strategy

1. Use an **"out-of-sample" period** to test the strategy. This can be **any time period after the in-sample period**.
2. Calculate the **annual return and risk** from implementing the strategy.

### Other factors to consider

- **How often did you trade?** (turnover)
- **How much would it cost for each of those trades?** (brokerage, spread, market impact)
- **Would you need to pay taxes on these earnings?** (CGT, dividend imputation)

> These three questions are the difference between a paper return and a real one. A strategy that looks great gross of costs can be comfortably negative after 200 trades a year.

### Worked example — evaluating a daily momentum rule

*(`Topic 2 Evaluate an Investment Strategy-2-1.xlsx` — S&P 500 total return index, 5,783 daily returns, May 2002 to Jun 2024)*

**The rule, stated so anyone could follow it:** at the close of each day, look at that day's index return. If it was **positive**, be **long** tomorrow. If it was **negative**, be **short** tomorrow.

**How the workbook implements and scores it:**

| Column | Formula | Purpose |
|---|---|---|
| Payoff | `=IF(B_prev > 0, B_today, −B_today)` | Flips the sign of the return when short |
| Portfolio value | `=D_prev × (1 + payoff)` | Compounds $100 forward |
| Trade counter | `=IF(OR(AND(B_t<0, B_prev<0), AND(B_t>0, B_prev>0)), 0, 1)` | Scores 1 whenever the signal flips |

Note that the payoff column reads `B_prev` — **yesterday's** return — to set today's position. That is what makes the rule tradeable rather than hindsight.

**Results:**

```
$100 invested May 2002        →  $2.72 by June 2024
Annualised return             =  (2.7153/100)^(1/22.161) − 1  =  −15.02% p.a.
Annualised standard deviation =  σ_daily × √252                =   18.94%
Number of trades              =  3,213  (on 55.6% of all trading days)
```

**Buy-and-hold on the identical series returned +9.67% p.a.**, turning $100 into $773.87, on essentially the same 18.9% volatility — and with **one** trade.

> ⚠️ **Read the sign before you read the size.** A −15.02% *annualised* return is not "a 15% loss" — compounded over 22 years it destroys **97%** of the capital. Daily equity returns are close to serially uncorrelated with a small positive drift, so a rule that shorts after every down day sells the rebound roughly half the time and pays the drift away.
>
> And that is **before a single dollar of transaction costs**. 3,213 flips over 22.16 years is about **145 position changes a year**, each closing one position and opening the opposite — at 5 basis points a side, roughly **14 percentage points of annual cost** on top of the −15%. This is what "how often did you trade?" is for.

**The examinable lesson:** an evaluation is not complete until you have (a) an out-of-sample annual return, (b) an out-of-sample annual risk, (c) a turnover count, and (d) a **benchmark** — buy-and-hold on the same asset over the same window. A strategy that beats zero but loses to buy-and-hold has added nothing.

> **The divisor, again.** This workbook uses `STDEV.P`; its sibling `Topic 2 US Equities vs Bonds` uses `STDEV.S`. Over 5,783 observations they differ in the fourth decimal (18.940% vs 18.941%) — irrelevant here, decisive on a six-observation tutorial question. **The size of `n` decides whether the choice matters; the question decides which is marked correct.**

### A template for the written evaluation

Structure the write-up so that a marker can find each required element:

| Element | What to state |
|---|---|
| The rule | Signal, lookback, threshold, all three branches, and the timing convention |
| In-sample period | Dates, and what you fixed during it |
| Variants tried | How many, so the overfitting risk is visible |
| Out-of-sample period | Dates, strictly after the in-sample window |
| Return | Annualised, `(1 + r̄)^periods − 1` |
| Risk | Annualised, `σ_period × √periods` |
| Turnover | Number of trades, and trades per year |
| Costs | Assumed cost per side, and the return net of it |
| Tax | Whether gains are realised annually and at what rate |
| **Benchmark** | Buy-and-hold, same asset, same window, same treatment of costs |
| Verdict | Whether the strategy beat the benchmark **after** costs, on a risk-adjusted basis |

---

## ✅ Checkpoint 2

1. A back-test uses this month's return to decide this month's position. What is wrong with it, and what will the result look like?
2. Your strategy returned 11% a year out-of-sample; buy-and-hold returned 11% a year. Turnover was 90 trades a year. Which is preferable?
3. What is the single defence against overfitting, and what should you disclose alongside the result?

<details><summary>Answers</summary>

1. It is **look-ahead bias** — the rule uses information that was not available when the position had to be taken, so it is not implementable. The result will look **spectacular** (it is close to knowing the answer in advance) and is worthless as evidence. The fix is to lag the signal by one period, as the momentum workbook does by reading `B_prev`.
2. **Buy-and-hold**, decisively. Equal gross returns, but the strategy carries 90 trades a year of brokerage and spread, realises gains annually for tax, and demands ongoing effort. Identical gross performance at higher cost and higher turnover is **worse** performance. You would also want the two risk figures before finalising the comparison.
3. **Fix the rule on the in-sample period before you look at the out-of-sample data**, and never tune it afterwards. Disclose **how many variants you tested** — a result selected from twenty attempts needs to be judged as the best of twenty noise draws, not as a single independent finding.
</details>

---

## 3.3 Summary

- The efficient frontier says what is **attainable**; the utility function says what is **desirable** to a particular investor. You need both to choose a portfolio.
- The **optimal portfolio is the point of tangency** between the frontier and the highest attainable utility curve. A curve that merely *crosses* the frontier is not optimal.
- Steeper utility curves mean a **higher A** and a **more risk-averse** investor, whose tangency sits further left and down the frontier.

```
U = E(r) − 0.5 × A × σ²          (σ² is VARIANCE, not σ)

Indifference curve:  E(r) = U + 0.5 × A × σ²      — a parabola, steeper for higher A
```

- U is a **certainty equivalent** in return units, so it compares directly against a risk-free rate. A risk-free asset has σ² = 0, so its utility is its return, identical for every investor.
- `A` comes from a **ten-item risk tolerance questionnaire** scored 10–40 across four bands, mapping to roughly **A ≈ 7 (conservative)** down to **A ≈ 1 (aggressive)**. It is elicited, not measured — a soft input driving a hard allocation.
- In the three-asset worked example, **A = 1 picks the highest-return single asset, A = 4 and A = 7 pick the maximum-Sharpe portfolio, and A = 10 should hold cash** — the same frontier, four different answers. **Maximum Sharpe is not automatically "the answer"** when a question supplies an `A`.
- An investment strategy must be a **decision rule with no gaps**: signal, lookback, threshold, an action for every branch including the tie, and a timing convention that only uses information available beforehand.
- Build on an **in-sample** window, test on a strictly later **out-of-sample** window, and do not tune after looking. **Overfitting** is the standing risk; disclosing how many variants you tried is the honest defence.
- An evaluation needs **return, risk, turnover, costs, tax and a benchmark**. The unit's own momentum example returns **−15.02% p.a. against buy-and-hold's +9.67%**, on 3,213 trades — a complete demonstration of why a gross return proves nothing.

---

*Continues from doc 02 (Topic 2 — Portfolio Management). All numerical worked examples were computed from the unit's Excel workbooks and independently verified in Python.*
