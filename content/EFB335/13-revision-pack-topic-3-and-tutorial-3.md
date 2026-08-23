# Revision Pack 3 — Topic 3 (Capital Market Theory and CAPM) + Tutorial 3

*(Reilly & Brown, Chapter 7, §7.1–7.3. Built from the Topic 3 slides, the Beta Formula and Capital Market Line documents, the three Topic 3 workbooks, and the Tutorial 3 question sheet. Every number re-computed in Python.)*

## How to use this pack

Read Part A once, slowly, doing each worked example on paper before you read the answer. Then do Part B (the tutorial) with the solutions covered. Part C is the self-test; Part D is the one screen you memorise the night before the 2 September briefing assessment and again before the final.

---

## Part A — The concepts, taught from scratch

### A1. Where Topic 3 starts

Topic 2 gave you the Markowitz efficient frontier: a curved line of the best risky portfolios, each one the lowest-risk way to get a given return. Topic 3 asks a single question: **what happens if you add one asset whose return is certain?** That asset is the risk-free asset (a Treasury bill or the RBA cash rate). The answer reshapes everything:

- the curved frontier gets replaced by a **straight line** (the Capital Market Line),
- there is now **one** risky portfolio everyone should hold (the market portfolio, M),
- and you get a formula for the required return on **any single asset** (the CAPM).

Why you care as an investor: the CAPM is the discount rate for valuing shares, the benchmark for judging whether a fund manager added value, and the tool you will use in the assessment to turn a beta into an expected return.

### A2. The assumptions of capital market theory

These extend Markowitz's assumptions. The lecture lists eight. Learn them as a block, because "state the assumptions" and "which assumption is violated when X" are standard short-answer questions.

```
1. All investors are Markowitz-efficient (they target points on the efficient frontier)
2. Investors can borrow or lend ANY amount at the risk-free rate (RFR)
3. Homogeneous expectations (everyone sees the same return distributions)
4. Same one-period horizon (a month, six months, a year)
5. Investments are infinitely divisible (fractional shares allowed)
6. No taxes or transaction costs
7. No inflation or interest-rate changes, or they are fully anticipated
8. Markets are in equilibrium (every asset is correctly priced for its risk)
```

Assumptions 2, 3 and 6 are the ones the lecture later relaxes (§A13). Assumption 2 is the one that breaks first in practice: you cannot borrow at the Treasury-bill rate.

> If a question says "investors can lend but must borrow at a higher rate", it is attacking assumption 2 and the answer is a kinked CML (two segments), not a single straight line. Don't draw one line.

### A3. The risk-free asset and why Cov(RF, i) = 0

**What it is.** An asset whose return is known with certainty for the period. Its expected return is the RFR and its standard deviation is zero.

**Why covariance with anything is zero.** Covariance is built from deviations from the mean:

```
Cov(i, j) = Σ [Rᵢ − E(Rᵢ)] × [Rⱼ − E(Rⱼ)] / n        (or n − 1 for a sample)
```

For the risk-free asset, the return equals its expected return every single period, so `R_RF − E(R_RF) = 0` in every term. Anything multiplied by zero is zero, so the whole sum is zero:

```
Cov(RF, i) = 0          for every risky asset or portfolio i
ρ(RF, i)   = Cov(RF, i) / (σ_RF × σᵢ) = 0 / (0 × σᵢ)  →  treated as 0
```

On a risk-return chart the risk-free asset sits on the vertical axis at height RFR, because its horizontal coordinate (σ) is zero.

> Checkpoint 1 on the slides asks the correlation between CBA shares and 5-year Treasury bonds. The answer the lecture wants is **zero**, because the bond is the risk-free asset. (A real 5-year bond has price risk before maturity, but within this topic "Treasury bonds" means the risk-free asset.)

### A4. Combining the risk-free asset with a risky portfolio

Put weight `w_RF` in the risk-free asset and the rest, `1 − w_RF`, in a risky portfolio M.

**Return** is an ordinary weighted average, exactly as in Topic 2:

```
E(R_port) = w_RF × RFR + (1 − w_RF) × E(R_M)
```

**Risk** starts from the two-asset variance formula from Topic 2, then two of the three terms die because `σ_RF = 0`:

```
σ²_port = w_RF² σ²_RF + (1 − w_RF)² σ²_M + 2 w_RF (1 − w_RF) ρ_RF,M σ_RF σ_M
        = 0            + (1 − w_RF)² σ²_M + 0
σ_port  = (1 − w_RF) × σ_M
```

**Why this makes the combination line straight.** In Topic 2, mixing two risky assets gave a curve, because the cross term (with correlation) bent it. Here the cross term is gone, so both return and risk are *linear* in the weight. Linear in, linear out: the set of combinations is a straight line from the risk-free point to M.

**Worked example (slides, Checkpoint 1).** A portfolio is 40% in the risk-free asset and 60% in Stock A, whose σ is 10%. Take RFR = 4% and E(R_A) = 9%.

```
σ_port    = (1 − 0.40) × 10%  = 0.60 × 10% = 6.0%
E(R_port) = 0.40 × 4% + 0.60 × 9% = 1.6% + 5.4% = 7.0%
```

Portfolio: 7.0% return, 6.0% risk. Notice the risk is simply 60% of Stock A's risk. No square root of a sum was needed.

> The trap is writing the full three-term variance formula, then keeping a non-zero `σ_RF`. If your working has any term containing `σ_RF` that is not zero, you have made an error. The only surviving term is `(1 − w_RF)² σ²_M`.

### A5. The tangency portfolio, the market portfolio M, and the Separation Theorem

Draw the efficient frontier. From the risk-free point on the vertical axis, draw straight lines out to different frontier portfolios. Every such line is a feasible set of RF-plus-risky combinations (§A4). The steeper the line, the more return per unit of risk. Because the frontier is concave (bulges toward the top-left), the steepest line you can draw is the one that just **touches** the frontier: the tangent line. The portfolio at the touching point is the **tangency portfolio**.

Under the assumptions (everyone sees the same frontier and the same RFR), everyone finds the same tangency portfolio. If everyone holds it, it must contain every risky asset in existence, each weighted by its market value. That is the **market portfolio, M**.

**Separation Theorem (Tobin, 1958).** Two decisions that are independent of each other:

| Decision | What it is | Depends on risk preference? |
|---|---|---|
| Investment decision | Which risky assets to hold | **No**: everyone holds M |
| Financing decision | How much to borrow or lend at the RFR | **Yes**: this is the only place preference enters |

A nervous investor puts some money in the risk-free asset and the rest in M. An aggressive investor borrows at the RFR and puts more than 100% of their own money into M. Nobody's risk preference changes *which* risky assets they hold, only *how much* of M they hold relative to cash.

> Short-answer trap: "a risk-averse investor should hold low-beta stocks" is **wrong** under capital market theory. They should hold M and lend. Risk aversion shows up in the financing decision, not in stock selection.

### A6. The Capital Market Line (CML) equation and its slope

The tangent line through the risk-free point and M is a straight line, so it has the form `y = b + a·x`. The supplied CML document builds it this way:

```
y = E(R_port)                    (vertical axis)
x = σ_port                       (horizontal axis)
b = RFR                          (intercept: return at zero risk)
a = rise / run = [E(R_M) − RFR] / [σ_M − 0] = [E(R_M) − RFR] / σ_M

E(R_port) = RFR + σ_port × [E(R_M) − RFR] / σ_M
```

Two pieces: `RFR` is the **time value of money** (reward for waiting), and `σ_port × [E(R_M) − RFR]/σ_M` is **compensation for bearing risk**.

**The slope is the market price of risk.** It says how many percentage points of extra expected return you earn for each percentage point of standard deviation. It is the Sharpe ratio of the market portfolio, and it is constant along the whole line.

**Worked example (slide 12, and the Borrowing or Lending workbook).** RFR = 4%, E(R_M) = 9%, σ_M = 10%. Find the expected return of a portfolio on the CML with σ_port = 15%.

```
slope     = (9% − 4%) / 10% = 5% / 10% = 0.50
E(R_port) = 4% + 15% × 0.50 = 4% + 7.5% = 11.5%
```

Check against the workbook: its column B formula is `=$F$1+A2*($F$2-$F$1)/$F$3` with F1 = 0.04, F2 = 0.09, F3 = 0.10, and the row for σ = 0.15 returns 0.115. Matches.

> The CML slope divides by **σ_M**, not by σ_port. Writing `(9% − 4%)/15%` gives 0.333 and an answer of 9%, which is wrong. The slope is a property of the line, fixed by the market, and you then multiply it by *your* portfolio's risk.

### A7. Lending versus borrowing portfolios: the sign of w_RF

Along the CML, `w_RF` runs from +1 (all cash) down through 0 (all in M) and then **negative** (borrowing). Three regions:

| w_RF | Position on CML | Name | Risk relative to M |
|---|---|---|---|
| w_RF = 1 | On the vertical axis at RFR | All cash | zero |
| 0 < w_RF < 1 | Between RFR and M | **Lending** portfolio | less than σ_M |
| w_RF = 0 | At M | Market portfolio | σ_M |
| w_RF < 0 | Beyond M, up the line | **Borrowing** (leveraged) portfolio | more than σ_M |

**Worked example (slide 13 and the CML document).** Same market: RFR = 4%, E(R_M) = 9%. What weighting gives an expected return of 11.5%?

```
E(R_port) = w_RF × RFR + (1 − w_RF) × E(R_M)
11.5%     = w_RF × 4% + (1 − w_RF) × 9%
11.5%     = 4% w_RF + 9% − 9% w_RF
11.5%     = 9% − 5% w_RF
5% w_RF   = 9% − 11.5% = −2.5%
w_RF      = −2.5% / 5% = −0.5
```

`w_RF = −0.5` means **borrow** 50% of your own equity at the RFR and invest 150% (`1 − (−0.5) = 1.5`) in M. Per $1,000 of your own money: borrow $500, invest $1,500 in M. Check the risk: `σ_port = 1.5 × 10% = 15%`, which is exactly the 15% portfolio from §A6. The two examples are the same portfolio seen from two directions.

A quicker route when you are given a target return:

```
w_M  = [target E(R) − RFR] / [E(R_M) − RFR] = (11.5% − 4%) / (9% − 4%) = 7.5% / 5% = 1.5
w_RF = 1 − w_M = −0.5
```

> A negative `w_RF` is a valid answer and it means borrowing. Students see the minus sign and assume they made an algebra error, then "fix" it. Don't. The sign is the answer.

### A8. Why nothing beats the CML (Exhibit 6.21)

The slides give six portfolios on the risky-only efficient frontier and their `[E(R) − RFR]/σ` ratio with RFR = 4%. Verified from the workbook:

| Frontier portfolio | E(R) | σ | [E(R) − 4%] / σ |
|---|---|---|---|
| 1 | 5% | 5% | 0.200 |
| 2 | 7% | 7% | 0.429 |
| 3 | **9%** | **10%** | **0.500** |
| 4 | 11% | 15% | 0.467 |
| 5 | 13% | 21% | 0.429 |
| 6 | 15% | 28% | 0.393 |

Portfolio 3 is M (9% at 10%). It is the only frontier portfolio that reaches the CML's ratio of 0.500. Every other frontier portfolio is beaten by some RF-plus-M mix at the same risk:

```
Frontier portfolio 4:  11% return at 15% risk          ratio 0.467
CML at σ = 15%:        4% + 15% × 0.5 = 11.5%           ratio 0.500   ← higher return, same risk
CML at E(R) = 11%:     σ = (11% − 4%) / 0.5 = 14%                      ← same return, less risk
```

The CML lies above the curved frontier everywhere except at the single tangency point. That is the geometric proof of "hold M and adjust risk by borrowing or lending".

> Only the tangency portfolio has the maximum ratio. Do not assume that because a portfolio is on the efficient frontier it is "efficient enough". Once a risk-free asset exists, every frontier portfolio except M is dominated.

### A9. Systematic versus unsystematic risk, and diversification

Because M contains every risky asset, it is completely diversified. All the risk unique to individual firms (strikes, product failures, a CEO resigning) has been averaged away. What is left is **systematic risk**: variability caused by macroeconomic factors that hit every asset at once: money-supply growth, interest rates, industrial production, corporate earnings, aggregate cash flow.

```
Total risk (σ²ᵢ) = systematic risk + unsystematic risk
                 = β²ᵢ σ²_M        + σ²_ε

Systematic   : macro, market-wide, cannot be diversified away, IS rewarded with return
Unsystematic : firm-specific, diversified away by holding many assets, NOT rewarded
```

The single-index form behind this (slide 23) describes each asset's return as a linear function of the market:

```
Rᵢ = αᵢ + βᵢ R_M + εᵢ
```

**How much diversification is complete?** A completely diversified portfolio has correlation **+1.00 with the market portfolio**, because only systematic risk remains and systematic risk moves in lockstep with M. Exhibit 6.20 shows σ_port falling steeply as you add stocks, then flattening out at the level of the market's own σ; the flat part is systematic risk and cannot be removed.

**Worked example (BHP workbook, 1,304 daily returns).** BHP's daily σ is 1.852%, the ASX 200's daily σ is 1.068%, their correlation is 0.638 and BHP's beta is 1.106 (derived in §A11).

```
Systematic variance   = β² σ²_M = 1.106² × 0.01068² = 0.0001395
Total variance        = σ²_BHP  = 0.01852²          = 0.0003429
Systematic share      = 0.0001395 / 0.0003429       = 0.407   (= ρ² = 0.638² = 0.407)
Unsystematic variance = 0.0003429 − 0.0001395       = 0.0002034  →  σ_ε = 1.426% per day
```

About 41% of BHP's daily variance is market-driven; 59% is BHP-specific and would vanish inside a diversified portfolio. The identity `systematic share = ρ²` is a useful check: correlation squared is the fraction of an asset's variance explained by the market.

> **Systematic is not systemic.** Systematic risk is the macro risk that remains after diversification. Systemic risk is the risk of the whole financial system collapsing (2008). The slides ask the difference; do not mix them.

### A10. The Security Market Line (SML) and why the CML cannot price a single stock

The CML's horizontal axis is total risk, σ. That works for portfolios on the line, because they are fully diversified and all their σ is systematic. A single stock is not diversified; most of its σ is unsystematic and the market pays nothing for it. So plugging a single stock's σ into the CML would tell you it "requires" a return it will never get.

The fix (slide 26): the relevant risk of asset *i* is not `σᵢ` but `σᵢ × r_iM`, the part of its risk that is correlated with the market. Divide that by σ_M to express it relative to the market and you get beta. Re-plot with beta on the horizontal axis and the line is the **Security Market Line**.

```
SML / CAPM:   E(Rᵢ) = RFR + βᵢ × [E(R_M) − RFR]
```

Every asset and every portfolio, diversified or not, plots on the SML in equilibrium. The slope is the **market risk premium** `E(R_M) − RFR`, the intercept is RFR, and the market itself sits at β = 1.

### A11. Beta: definition, three formulas, Excel, and two rules

**What it is.** Beta measures how much an asset's return moves, on average, for a 1% move in the market. β = 1.5 means the stock tends to rise 1.5% when the market rises 1% and fall 1.5% when it falls 1%. It is the asset's systematic risk expressed relative to the market.

**Formula 1: covariance over variance.**

```
βᵢ = Cov(Rᵢ, R_M) / σ²_M
```

**Formula 2: correlation form.** Substitute `Cov = ρ σᵢ σ_M` and cancel one σ_M:

```
βᵢ = ρ_iM × σᵢ × σ_M / σ²_M = ρ_iM × σᵢ / σ_M
```

**Formula 3: regression slope (the characteristic line).** Regress the asset's returns over time on the market's returns. The fitted line is the characteristic line and its slope is beta. Exhibit 7.6 shows it for JPMorgan against the S&P 500.

```
Rᵢₜ = αᵢ + βᵢ R_Mt + εᵢₜ         slope βᵢ = Cov(Rᵢ, R_M) / Var(R_M)
```

All three give the identical number. The first is what you compute from a covariance matrix; the second is what you use when a question gives you correlation and standard deviations; the third is what Excel does.

**Excel.**

```
=COVARIANCE.S(stock_returns, market_returns) / VAR.S(market_returns)
=SLOPE(stock_returns, market_returns)          ← y first (stock), x second (market)
```

Use `.S` for both or `.P` for both; the `n−1` or `n` cancels. Mixing them does not.

**Worked example (BHP workbook, 6 Mar 2020 to Mar 2025, 1,304 daily returns).** Re-computed from the raw total-return indices:

```
Cov(BHP, ASX200) = 0.00012620        (COVARIANCE.S)
Var(ASX200)      = 0.00011414        (VAR.S)
β_BHP            = 0.00012620 / 0.00011414 = 1.1057

Check via correlation form:
ρ = 0.6379,  σ_BHP = 0.018519,  σ_M = 0.010683
β = 0.6379 × 0.018519 / 0.010683 = 1.1057                          ✓
SLOPE(BHP, ASX200) = 1.1057                                         ✓
```

The workbook's cell H2 holds `=COVARIANCE.S(D8:D1311,E8:E1311)/VAR.S(E8:E1311)` and caches 1.1057. A beta just above 1 is what you expect for a large, cyclical miner.

**Rule 1: the market's beta is 1.** `β_M = Cov(M, M)/σ²_M = σ²_M/σ²_M = 1`. In the assessment, the ASX 200 column's beta against itself must come out as exactly 1.000; use that as your sanity check.

**Rule 2: portfolio beta is a weighted average.** Unlike σ, beta is linear, because covariance is linear.

```
β_port = Σ wᵢ βᵢ
40% in a β = 1.2 stock, 60% in a β = 0.8 stock:   β_port = 0.4 × 1.2 + 0.6 × 0.8 = 0.48 + 0.48 = 0.96
20% cash, 50% in β = 1.1, 30% in β = 0.6:         β_port = 0.2 × 0 + 0.5 × 1.1 + 0.3 × 0.6 = 0.73
```

The risk-free asset has β = 0, so cash dilutes a portfolio's beta toward zero.

> Two traps in one. **(1)** `β = Cov/σ²_M`, with σ_M squared. Dividing by σ_M once gives a number about ten times too big for monthly data. **(2)** `SLOPE(known_y, known_x)` takes the **stock first, market second**. Reversed, Excel returns `ρ²/β` (for BHP: 0.368, a plausible-looking wrong number).

### A12. The CAPM equation, each input, and finding mispriced stocks

```
E(Rᵢ) = RFR + βᵢ × [E(R_M) − RFR]
```

| Input | What it is | Where it comes from |
|---|---|---|
| RFR | Risk-free rate | Treasury-bill yield or RBA cash rate (the BHP workbook uses 4.10%) |
| βᵢ | Asset's systematic risk | `COVARIANCE.S/VAR.S` or `SLOPE` on historical returns |
| E(R_M) | Expected market return | Historical annualised index return, or a forecast |
| E(R_M) − RFR | Market risk premium | The slope of the SML |
| βᵢ × [E(R_M) − RFR] | Asset's risk premium | What the market pays for *this* asset's systematic risk |

**Worked example (slide 29).** RFR = 5%, E(R_M) = 9%, so the market risk premium is 4%.

```
A: β = 0.70   E(R) = 5% + 0.70 × 4% = 5% + 2.8% =  7.8%
B: β = 1.00   E(R) = 5% + 1.00 × 4% = 5% + 4.0% =  9.0%   (= the market, as it must)
C: β = 1.15   E(R) = 5% + 1.15 × 4% = 5% + 4.6% =  9.6%
D: β = 1.40   E(R) = 5% + 1.40 × 4% = 5% + 5.6% = 10.6%
E: β = −0.30  E(R) = 5% − 0.30 × 4% = 5% − 1.2% =  3.8%
```

Stock E has a negative beta and a required return **below the risk-free rate** but still positive. It moves against the market, so it acts as insurance, and investors accept a lower return to hold it.

**Worked example (BHP workbook).** RFR = 4.10%, annualised ASX 200 return 10.69%, β = 1.106.

```
E(R_BHP) = 4.10% + 1.106 × (10.69% − 4.10%) = 4.10% + 1.106 × 6.59% = 4.10% + 7.28% = 11.38%
```

BHP's realised annualised return over the same window was 16.32%. That 16.32% is *history*; 11.38% is what the CAPM says BHP should earn going forward given its risk. Keep those two numbers apart in the briefing note.

**Finding over- and underpriced stocks.** Compute the required return from the CAPM, then compare it with an *estimated* return from an analyst's price and dividend forecast:

```
Estimated return = (Expected price − Current price + Dividend) / Current price
Alpha            = Estimated return − Required return

Alpha > 0  →  plots ABOVE the SML  →  UNDERPRICED  →  buy
Alpha < 0  →  plots BELOW the SML  →  OVERPRICED   →  sell or avoid
Alpha = 0  →  on the SML           →  fairly priced
```

**Worked example (slide 31).** Using the required returns above and the slide's estimated returns:

| Stock | Required | Estimated | Alpha | Verdict |
|---|---|---|---|---|
| A | 7.80% | 8.00% | +0.20% | Underpriced, buy |
| B | 9.00% | 6.20% | −2.80% | Overpriced, sell |
| C | 9.60% | 15.15% | +5.55% | Underpriced, buy |
| D | 10.60% | 5.15% | −5.45% | Overpriced, sell |
| E | 3.80% | 6.00% | +2.20% | Underpriced, buy |

For BHP: `alpha = 16.32% − 11.38% = +4.94%` over the sample, so it plotted above the SML for that window. One five-year draw is not proof of persistent mispricing.

> "Underpriced" means the price is low enough that the stock is expected to deliver **more** return than its beta requires, so demand should push the price up. It is a statement about risk-adjusted return, not about whether the share price looks cheap. And never compare stocks' estimated returns to each other: compare each stock's estimated return with its **own** required return.

### A13. CML versus SML

| | CML | SML |
|---|---|---|
| Vertical axis | E(R_port) | E(Rᵢ) |
| Horizontal axis | **σ** (total risk) | **β** (systematic risk) |
| Intercept | RFR | RFR |
| Slope | `[E(R_M) − RFR] / σ_M`, the market price of total risk | `E(R_M) − RFR`, the market risk premium |
| Where M sits | at `(σ_M, E(R_M))` | at `(1, E(R_M))` |
| What lies on it | **Only** fully diversified portfolios (RF mixed with M) | **Every** asset and portfolio, in equilibrium |
| Where a single stock sits | Below/right of the line (its σ includes unpriced risk) | On the line if fairly priced; above if underpriced; below if overpriced |
| What it is for | Choosing how much risk to take (the efficient set) | Pricing any asset: required return, discount rate, mispricing test |

Both say `E(R) = RFR + (price of risk) × (quantity of risk)`. The CML is the special case; the SML is the general pricing rule.

> Checkpoint 2 on the slides: "Portfolios below the efficient frontier are ______ whereas securities below the SML are ______." The first blank is **inefficient** (dominated); the second is **overpriced**. Different words, different meanings.

### A14. Relaxing the assumptions

| Assumption relaxed | What changes |
|---|---|
| Borrowing rate R_b above the lending rate RFR | The CML is **broken into two segments**: a lending line from RFR tangent at a lower point, and a flatter borrowing line from R_b tangent at a higher point, with a piece of the curved frontier between them. Slide 38 shows this with points F, G, K. |
| No risk-free asset at all (**zero-beta CAPM**) | Use a **zero-beta portfolio** (uncorrelated with M) as the intercept instead of RFR. Its return is normally above the RFR, so the SML intercept rises and the **slope is flatter**. |
| Transaction costs | The SML becomes a **band**, not a line: small mispricings are not worth trading away once costs are counted. |
| Heterogeneous expectations, different planning periods | A **band of SMLs**, width set by how much investors disagree. |
| Taxes | Investors with different tax rates see different after-tax CMLs and SMLs. |

**Worked example (zero-beta).** RFR = 5%, E(R_M) = 9%, zero-beta portfolio return R_z = 6%. Required return on a β = 1.5 stock:

```
Standard CAPM:  5% + 1.5 × (9% − 5%) = 5% + 6.0% = 11.0%     slope 4%
Zero-beta CAPM: 6% + 1.5 × (9% − 6%) = 6% + 4.5% = 10.5%     slope 3%
```

Higher intercept, flatter slope, so high-beta stocks require *less* and low-beta stocks require *more* than the standard model says.

> In the zero-beta model the slope is `E(R_M) − R_z`, not `E(R_M) − RFR`. Replace the RFR in **both** places in the formula, not just the intercept.

### A15. Empirical tests of the CAPM

**Beta stability.**

- Betas of **individual stocks are not stable** over time. Betas of **portfolios are**, and they become more stable as the portfolio gets larger and the estimation window longer.
- Betas **mean-revert toward 1**: high-beta portfolios drift down, low-beta portfolios drift up.
- Trading volume affects stability.
- There is no "correct" estimation interval. Morningstar uses monthly returns over five years, Bloomberg weekly over two years, Reuters daily over two years. Different intervals give different betas for the same stock.

**Is beta the whole story?** The CAPM says only beta should explain the cross-section of returns. Tests find other things matter:

| Factor | Finding |
|---|---|
| Skewness | Investors prefer positive skewness (a small chance of a very large gain). |
| Size | Smaller firms earn more than beta predicts (an inverse relationship). |
| P/E | Low-P/E stocks earn more than beta predicts. |
| Financial leverage | Helps explain returns beyond beta. |
| Book-to-market (BV/MV) | Fama and French (1992) found it a key determinant of returns. |

The SML's empirical slope tends to be flatter than `E(R_M) − RFR` and its intercept higher than the RFR, which is what the zero-beta model predicts.

### A16. Roll's critique and benchmark error

The true market portfolio contains every risky asset on earth: all equities, bonds, property, commodities, art. It cannot be observed. Every test uses a proxy, usually a single-country equity index such as the S&P 500, even though US stocks are under 15% of global risky assets.

Consequences (Exhibit 7.9, "benchmarking error"):

1. The CAPM cannot be properly tested, only the proxy can (Roll's critique).
2. A different proxy gives a **different beta** for the same stock over the same period.
3. An error in the chosen RFR or the chosen proxy changes the **slope of the SML**, so required returns, mispricing verdicts and fund-manager performance rankings all change.

**Worked example (JPM workbook, corrected).** Monthly total returns, Jan 1988 to Feb 2025, 445 returns, JPMorgan Chase against two proxies:

```
β_JPM vs S&P 500     = 1.31      (ρ = 0.623)
β_JPM vs MSCI World  = 1.17      (ρ = 0.571)
```

Same stock, same months, different "market": a beta gap of 0.14, which moves JPM's required return by `0.14 × market risk premium` and can flip a mispricing call.

> The supplied `Topic 3 JPM vs mkt-1.xlsx` has a date-misalignment bug. Its `Raw Data` sheet stores the S&P 500 and MSCI World series starting **Jan 1988** but the JPM series starting **Jan 1973**, in the same row numbers. The `Analysis` sheet pairs them by row, so it computes covariance between 1988–2025 market returns and 1973–2010 JPM returns. The workbook's cached betas are **−0.099** (S&P) and **+0.026** (MSCI), which are nonsense for a bank stock. Re-aligning the three series by calendar date gives **1.31** and **1.17**. The lesson (different proxies give different betas) is unchanged; the workbook's numbers are not usable. Use 1.31 and 1.17.

### A17. Preview of Topic 4: APT and multifactor models

*This is context only; it is examined in Topic 4, not Topic 3.* The empirical failures in §A15 motivate models with more than one risk factor.

- **Arbitrage Pricing Theory (APT, Ross 1976)** keeps the idea of a linear relationship between expected return and risk, but allows **several** systematic factors, each with its own beta and risk premium, and makes far fewer assumptions than the CAPM (no market portfolio required).
- **Fama–French three-factor model** adds two empirical factors to the market factor: **SMB** (Small Minus Big: the return of small firms over large) and **HML** (High Minus Low: the return of high book-to-market "value" firms over low book-to-market "growth" firms).

```
Rᵢ − RF = αᵢ + β_M (R_M − RF) + β_SMB × SMB + β_HML × HML + εᵢ
```

This is exactly the regression the assessment asks for (item 13 in the briefing guide). A negative SMB coefficient means a large-cap tilt; a negative HML coefficient means a growth tilt. You will learn the theory in Topic 4, but the mechanics are the same characteristic-line regression as §A11 with more explanatory variables.

---

## Part B — Tutorial 3 fully worked

No solutions workbook was supplied for Tutorial 3. Every figure below is computed from the question data and agrees with `07-tutorial-3-solutions.md`.

### B1. Question 1 (not from the textbook): the graph and the tangent line

**Question.** Draw what happens to the Markowitz efficient frontier when a risk-free asset is combined with alternative risky portfolios on the frontier. Explain why the line from the RFR tangent to the frontier defines the dominant set of portfolios.

**Solution.**

*The graph.* Horizontal axis σ, vertical axis E(R). Draw the curved efficient frontier bowing up and to the left. Mark the risk-free asset at `(0, RFR)` on the vertical axis. Draw three straight lines from that point: one to a frontier portfolio below the tangency point, one to the tangency point M, one that would pass through the frontier to a point above M. Label the tangent line "CML" and the touching point "M". Mark the lending region (between RFR and M) and the borrowing region (beyond M).

*Why the tangent dominates.*

1. Any straight line from `(0, RFR)` to a risky portfolio is the set of RF-plus-that-portfolio combinations, because `σ_port = (1 − w_RF) σ_M` and `E(R_port)` are both linear in the weight (§A4).
2. The slope of such a line, `[E(R) − RFR]/σ`, is the return earned per unit of risk. Higher slope is better at every σ.
3. The frontier is concave, so the steepest line through `(0, RFR)` that still touches a feasible portfolio is the tangent. Any steeper line misses the frontier entirely (infeasible); any shallower line delivers less return per unit of risk at every σ and, where it cuts the frontier, is dominated by the frontier itself.
4. Therefore RF-plus-M combinations dominate every other feasible combination. Numerically (Exhibit 6.21): the CML's ratio is 0.500 everywhere; the best risky-only frontier portfolio other than M manages 0.467.

**What the marker wants.** A correctly labelled graph (axes, frontier, RFR on the vertical axis, tangent line, M, lending and borrowing segments); the words "concave", "slope = return per unit of risk", and "tangent = steepest feasible line"; the conclusion that everyone holds M and moves along the line by borrowing or lending.

### B2. Chapter 7, Question 2: CML versus SML

**Question.** Similarities and differences between the CML and SML as models of the risk-return trade-off.

**Solution.**

*Similarities.* Both are straight lines with intercept RFR. Both say expected return equals the time value of money plus a risk premium: `E(R) = RFR + (price of risk) × (quantity of risk)`. Both have the market portfolio on them.

*Differences.*

| | CML | SML |
|---|---|---|
| Risk measure | Total risk, σ | Systematic risk, β |
| Slope | `[E(R_M) − RFR]/σ_M` | `E(R_M) − RFR` |
| Applies to | Fully diversified portfolios only (RF + M) | Any asset or portfolio |
| Single stock | Plots below it (unsystematic risk is unpriced) | Plots on it in equilibrium |
| Purpose | Efficient set: how much risk to take | Pricing: required return and mispricing |

*One-line summary.* The CML is a special case that only diversified portfolios can sit on; the SML is the general equilibrium relationship that every asset satisfies.

**What the marker wants.** The axis difference (σ versus β) stated explicitly; the slope difference; the point that a single stock cannot be priced on the CML because its σ contains diversifiable risk; the word "equilibrium".

### B3. Chapter 7, Question 5: the market portfolio and its proxies

**Question.** What assets does the CAPM's market portfolio include and how are they weighted? What proxies are used empirically? If the proxy is poor, what CAPM factors are affected?

**Solution.**

*Contents.* Every risky asset in existence: domestic and foreign shares, bonds, property, commodities, collectibles, anything with an uncertain future value. *Weights:* each asset's share of total market value (equilibrium condition).

*Empirical proxies.* Almost always a single-country, equities-only index, most commonly the S&P 500 (value-weighted, covers most US equity market capitalisation). Occasionally a broader index such as the MSCI World.

*Effects of a poor proxy (benchmark error).*

1. **Beta changes.** JPM: 1.31 against the S&P 500, 1.17 against the MSCI World, over identical months (corrected figures, §A16).
2. **Required returns change**, because beta feeds straight into `RFR + β(E(R_M) − RFR)`.
3. **The SML's slope changes** (Exhibit 7.9), so the whole pricing line shifts, not just one stock.
4. **Mispricing verdicts and performance evaluation change.** A stock that looks underpriced against one SML can look fairly priced against another, and a fund manager's alpha is only as good as the benchmark used to draw the line.

**What the marker wants.** "All risky assets, market-value weighted"; "S&P 500 as the usual proxy"; then beta, required return, SML slope and performance evaluation as the four things that break. Quoting a concrete beta difference earns the application mark.

### B4. Chapter 7, Problem 2: three stocks on the SML

**Question.** RFR = 10%, E(R_M) = 14%. Stocks U (β 0.85), N (β 1.25), D (β −0.20). (a) Compute the required returns and plot them on an SML. (b) A broker gives current price, expected price and dividend: U 22 → 24, div 0.75; N 48 → 51, div 2.00; D 37 → 40, div 1.25. Plot the estimated returns and decide what to do.

**Part (a): required returns.** Market risk premium = 14% − 10% = 4%.

```
U:  E(R) = 10% + 0.85 × 4% = 10% + 3.4% = 13.4%
N:  E(R) = 10% + 1.25 × 4% = 10% + 5.0% = 15.0%
D:  E(R) = 10% + (−0.20) × 4% = 10% − 0.8% = 9.2%
```

*Plot.* Horizontal axis β from −0.5 to 1.5, vertical axis E(R). Intercept at `(0, 10%)`, the market at `(1.0, 14%)`. U, N and D sit exactly on the line at `(0.85, 13.4%)`, `(1.25, 15.0%)`, `(−0.20, 9.2%)`, because these are the required returns computed from the line itself.

**Part (b): estimated returns from the broker's forecasts.**

```
Estimated return = (P₁ − P₀ + D) / P₀

U:  (24 − 22 + 0.75) / 22 = 2.75 / 22 = 0.1250 = 12.50%
N:  (51 − 48 + 2.00) / 48 = 5.00 / 48 = 0.1042 = 10.42%
D:  (40 − 37 + 1.25) / 37 = 4.25 / 37 = 0.1149 = 11.49%
```

**Part (c): decision.**

| Stock | Required | Estimated | Alpha | Position vs SML | Action |
|---|---|---|---|---|---|
| U | 13.40% | 12.50% | −0.90% | below | Overpriced: sell or avoid |
| N | 15.00% | 10.42% | −4.58% | below | Overpriced: sell or avoid |
| D | 9.20% | 11.49% | +2.29% | above | Underpriced: buy |

*Explanation.* U and N are forecast to return less than their systematic risk demands, so at the broker's numbers the market is not paying enough to hold them. D has a negative beta, so very little is required of it (9.2%, below the RFR), and the forecast 11.49% clears that bar comfortably. D is the only buy.

**What the marker wants.** The three required returns (1 mark each, typically), the three estimated returns using the `(P₁ − P₀ + D)/P₀` formula with the dividend included, a clear above/below-SML statement for each, and the action with a reason that references *risk-adjusted* return.

> U has the highest estimated return (12.50%) and is still a sell. The decision is estimated versus required **for that stock**, never estimated versus the other stocks.

### B5. Question 2 (not from the textbook): betas from covariances

**Question.** σ_M = 15%. Covariances with the market: A 2.92%, B 1.80%, C 2.25%. Find the betas.

**Solution.** Convert σ_M to variance first: `σ²_M = 0.15² = 0.0225`.

```
β_A = 0.0292 / 0.0225 = 1.298
β_B = 0.0180 / 0.0225 = 0.800
β_C = 0.0225 / 0.0225 = 1.000
```

C's covariance with the market equals the market's own variance, so C has β = 1 exactly, the same identity that gives `β_M = 1`.

**What the marker wants.** The variance (0.0225) written down before dividing, three betas to three decimals, and ideally the observation about C.

> A covariance of "2.92%" means 0.0292, not 0.0292%. Units of covariance are return-squared; read the percentage as a decimal and divide by a decimal variance.

### B6. Question 3 (not from the textbook): build the CML from a two-stock market

**Question.** Two stocks make up the market: A (E(R) 10%, σ 20%, weight 40%), B (E(R) 15%, σ 28%, weight 60%), correlation 0.30, RFR 5%. (a) State the CML equation. (b) Target a 15% return using RF and M, and show it beats holding B alone.

**Step 1: the market portfolio's return and risk** (Topic 2 formulas).

```
E(R_M) = 0.4 × 10% + 0.6 × 15% = 4% + 9% = 13%

σ²_M = w_A² σ_A² + w_B² σ_B² + 2 w_A w_B ρ σ_A σ_B
     = 0.4² × 0.20² + 0.6² × 0.28² + 2 × 0.4 × 0.6 × 0.30 × 0.20 × 0.28
     = 0.0064 + 0.028224 + 0.008064
     = 0.042688
σ_M  = √0.042688 = 0.2066 = 20.66%
```

**Step 2: the CML.**

```
slope = (13% − 5%) / 20.66% = 8% / 20.66% = 0.3872
CML:  E(R_port) = 5% + 0.3872 × σ_port
```

**Step 3: reach 15%.** Two routes, same answer.

```
Via the weight:   w_M = (15% − 5%) / (13% − 5%) = 10% / 8% = 1.25    →  w_RF = −0.25
                  σ_port = 1.25 × 20.66% = 25.83%

Via the CML:      15% = 5% + 0.3872 σ_port  →  σ_port = 10% / 0.3872 = 25.83%     ✓
```

Borrow 25% of your equity at 5% and invest 125% in M.

**Step 4: compare with Stock B alone.**

| | E(R) | σ |
|---|---|---|
| Stock B alone | 15% | 28.00% |
| Borrow 25%, 125% in M | 15% | 25.83% |

Same expected return, 2.17 percentage points less risk. The leveraged market portfolio dominates the single stock because M already combines A and B efficiently, and leverage scales that efficient mix instead of concentrating in one asset.

**What the marker wants.** E(R_M) and σ_M with the three variance terms shown; the CML written as an equation with a numeric slope; `w_RF = −0.25` stated as borrowing; the σ comparison (25.83% versus 28%) with the word "dominates".

> The correlation term uses `2 × w_A × w_B × ρ × σ_A × σ_B`. Forgetting the 2, or using the covariance *and* multiplying by ρ again, changes σ_M and every number after it.

### B7. Question 4 (not from the textbook, not exam-likely): the tangency point by calculus

**Question.** A risky asset's risk-return relation is `R = ln(σ)`. RFR = 0.05. Sketch the curve, write the excess return, write the excess return per unit of risk, and find its maximum.

**Solution.**

*Sketch.* `ln(σ)` is defined for σ > 0, goes to −∞ as σ → 0, crosses zero at σ = 1, and keeps rising but ever more slowly (concave).

```
Excess return                    = ln(σ) − 0.05
Excess return per unit of risk   f(σ) = [ln(σ) − 0.05] / σ
```

*Maximise with the quotient rule* (`d ln σ / dσ = 1/σ`):

```
f'(σ) = [ (1/σ) × σ − (ln σ − 0.05) × 1 ] / σ²
      = [ 1 − ln σ + 0.05 ] / σ²
      = [ 1.05 − ln σ ] / σ²

Set f'(σ) = 0:   ln σ* = 1.05   →   σ* = e^1.05 = 2.858
Maximum:         f(σ*) = (1.05 − 0.05) / 2.858 = 1 / 2.858 = 0.350
```

This is the CML construction done with calculus: the line from `(0, RFR)` tangent to the curve `R(σ)` touches it where the excess-return-per-unit-risk is maximised.

**What the marker wants** (if ever asked): the derivative set to zero, `σ* = e^(1 + RFR)`, and the link to the tangency portfolio.

---

## Part C — Self-test

Work each one on paper. All ten use a different market from the lecture examples, so you cannot pattern-match.

1. RFR = 3%, E(R_M) = 10%, σ_M = 18%. Write the CML equation and find the expected return of a CML portfolio with σ = 27%.
2. Same market. You want an expected return of 8%. What weights in the risk-free asset and M, and what is the portfolio's σ?
3. Cov(i, M) = 0.036 and σ_M = 20%. Find βᵢ.
4. A stock has σ = 30%, correlation with the market 0.50, and σ_M = 20%. Find its beta.
5. RFR = 4%, market risk premium 6%. Required return on a β = 1.3 stock?
6. The stock in Q5 trades at $50; an analyst expects $54 in a year plus a $1.50 dividend. Estimated return, alpha, and the decision?
7. A portfolio is 30% in a β = 0.6 stock, 50% in a β = 1.1 stock and 20% in Treasury bills. Portfolio beta?
8. RFR = 4%, market risk premium 6%, β = −0.5. Required return? Is it below the RFR, and why is that rational?
9. Two analysts compute different betas for the same stock from the same five-year window. Give three possible reasons.
10. β = 1.2, σ_M = 15%, σᵢ = 25%. Split the stock's variance into systematic and unsystematic parts and find its correlation with the market.

<details><summary>Answers</summary>

**1.**
```
slope = (10% − 3%) / 18% = 0.3889
CML:  E(R_port) = 3% + 0.3889 σ_port
At σ = 27%:  3% + 0.3889 × 27% = 3% + 10.5% = 13.5%
```

**2.**
```
w_M = (8% − 3%) / (10% − 3%) = 5% / 7% = 0.7143      w_RF = 0.2857  (lending)
σ_port = 0.7143 × 18% = 12.86%
Check on the CML: (8% − 3%) / 0.3889 = 12.86%   ✓
```

**3.** `β = 0.036 / 0.20² = 0.036 / 0.04 = 0.90`

**4.** `β = ρ σᵢ / σ_M = 0.50 × 0.30 / 0.20 = 0.75`

**5.** `E(R) = 4% + 1.3 × 6% = 4% + 7.8% = 11.8%`

**6.**
```
Estimated = (54 − 50 + 1.50) / 50 = 5.50 / 50 = 11.0%
Alpha     = 11.0% − 11.8% = −0.8%   →  below the SML  →  overpriced  →  do not buy
```

**7.** `β_port = 0.3 × 0.6 + 0.5 × 1.1 + 0.2 × 0 = 0.18 + 0.55 + 0 = 0.73`

**8.** `E(R) = 4% + (−0.5) × 6% = 4% − 3% = 1.0%`. Below the RFR but positive. Rational because a negative-beta asset rises when the market falls, so it reduces a diversified portfolio's risk; investors pay for that insurance by accepting a lower expected return.

**9.** Any three of: different market proxy (S&P 500 versus MSCI World versus ASX 200); different return interval (daily, weekly, monthly); different sample window or start date; one used price returns and the other total returns; one mixed `COVARIANCE.P` with `VAR.S` (or reversed the `SLOPE` arguments); a date-misalignment between the two series, as in the supplied JPM workbook.

**10.**
```
Systematic variance   = β² σ²_M = 1.2² × 0.15² = 1.44 × 0.0225 = 0.0324
Total variance        = 0.25² = 0.0625
Unsystematic variance = 0.0625 − 0.0324 = 0.0301   →  σ_ε = √0.0301 = 17.35%
Correlation           = β σ_M / σᵢ = 1.2 × 0.15 / 0.25 = 0.72
Check: ρ² = 0.5184 = 0.0324 / 0.0625   ✓
```
</details>

---

## Part D — Cheat sheet (memorise this)

### Every formula

```
RISK-FREE ASSET
  Cov(RF, i) = 0          ρ(RF, i) = 0          σ_RF = 0          β_RF = 0

RF + RISKY PORTFOLIO M
  E(R_port) = w_RF × RFR + (1 − w_RF) × E(R_M)
  σ_port    = (1 − w_RF) × σ_M                      (the two σ_RF terms vanish)

CAPITAL MARKET LINE
  E(R_port) = RFR + σ_port × [E(R_M) − RFR] / σ_M
  slope (market price of risk) = [E(R_M) − RFR] / σ_M     (= Sharpe ratio of M)
  w_M for a target return      = [target − RFR] / [E(R_M) − RFR]
  σ_port for a target return   = [target − RFR] / slope
  w_RF = 1 − w_M      w_RF > 0 lending      w_RF < 0 borrowing (leverage)

BETA
  βᵢ = Cov(Rᵢ, R_M) / σ²_M  =  ρ_iM × σᵢ / σ_M  =  SLOPE(stock, market)
  β_M = 1        β_RF = 0        β_port = Σ wᵢ βᵢ  (weighted average)

CAPM / SECURITY MARKET LINE
  E(Rᵢ) = RFR + βᵢ × [E(R_M) − RFR]
  slope = E(R_M) − RFR  (market risk premium)
  Zero-beta version:  E(Rᵢ) = R_z + βᵢ × [E(R_M) − R_z]

MISPRICING
  Estimated return = (P₁ − P₀ + D) / P₀
  Alpha = Estimated − Required
  Alpha > 0 above SML underpriced BUY      Alpha < 0 below SML overpriced SELL

RISK DECOMPOSITION
  σ²ᵢ = β²ᵢ σ²_M + σ²_ε         systematic share = ρ²_iM
  Rᵢ = αᵢ + βᵢ R_M + εᵢ         (characteristic line)
```

### Ten numbers and facts to know cold

1. Eight assumptions; the one relaxed first is "borrow and lend at the RFR".
2. `σ_port = (1 − w_RF) σ_M`: risk is linear in the weight, which is why the CML is straight.
3. Lecture CML: RFR 4%, E(R_M) 9%, σ_M 10% → slope 0.50; σ = 15% gives 11.5%; `w_RF = −0.5`.
4. Exhibit 6.21: only M (9% at 10%) reaches the 0.500 ratio; frontier portfolio 4 manages 0.467.
5. Lecture CAPM: RFR 5%, E(R_M) 9% → A 7.8%, B 9.0%, C 9.6%, D 10.6%, E (β −0.3) 3.8%.
6. BHP (5Y daily): β = 1.106, ρ = 0.638, CAPM return 11.38% with RFR 4.10% and market 10.69%; realised 16.32%.
7. JPM monthly 1988–2025: β = 1.31 vs S&P 500, 1.17 vs MSCI World. The workbook's −0.099 and +0.026 are a date bug.
8. `β_M = 1`, always; use it as the sanity check on your assessment workbook.
9. Individual betas are unstable; portfolio betas are stable and drift toward 1.
10. Fama–French 1992: book-to-market is a key determinant of returns; size and P/E are inverse. Seeds of Topic 4.

### Traps

1. `β = Cov/σ²_M`. Square the market's σ. Dividing by σ_M once is the single most common error.
2. CML slope divides by `σ_M`, never by your portfolio's σ.
3. Negative `w_RF` is correct and means borrowing. Do not "fix" the sign.
4. Never put a single stock's σ into the CML. Single stocks use the SML and beta.
5. Compare each stock's estimated return with its **own** required return, not with other stocks.
6. A negative beta gives a required return below the RFR but usually still positive.
7. `SLOPE(stock, market)`: y first, x second. Reversed gives `ρ²/β`.
8. `.S` with `.S` or `.P` with `.P`. Mixed divisors do not cancel.
9. "Inefficient" is below the frontier; "overpriced" is below the SML. Different words.
10. Systematic (macro, priced) is not systemic (financial-system collapse).
11. Zero-beta CAPM replaces RFR in **both** the intercept and the slope.
12. A covariance quoted as "2.92%" is 0.0292. Variance of a 15% σ is 0.0225.
13. Changing the market proxy changes beta and every downstream number.
14. Realised historical return is not the CAPM expected return. Quote both, label both.

### Excel function map

| Task | Formula | Note |
|---|---|---|
| Daily return | `=B4/B3-1` | Total-return index already includes dividends |
| Beta (long form) | `=COVARIANCE.S(stock,market)/VAR.S(market)` | Same divisor top and bottom |
| Beta (short form) | `=SLOPE(stock,market)` | Stock is `known_y`, market is `known_x` |
| Correlation | `=CORREL(stock,market)` | Divisor-invariant |
| Beta via correlation | `=CORREL(s,m)*STDEV.S(s)/STDEV.S(m)` | Must equal SLOPE |
| Characteristic line intercept | `=INTERCEPT(stock,market)` | Alpha of the regression |
| Market beta check | `=SLOPE(market,market)` | Must be exactly 1 |
| Annualised return | `=(1+AVERAGE(r))^252-1` | Arithmetic; BHP workbook uses this |
| Annualised σ | `=STDEV.S(r)*SQRT(252)` | √T, not T |
| CAPM expected return | `=RF+beta*(Rm-RF)` | All inputs annualised |
| Full regression | Data Analysis → Regression | Coefficient on market = beta; extra X columns for SMB, HML |

### CML versus SML

| | CML | SML |
|---|---|---|
| x-axis | σ (total risk) | β (systematic risk) |
| Slope | `[E(R_M) − RFR]/σ_M` | `E(R_M) − RFR` |
| Intercept | RFR | RFR |
| Who lies on it | Diversified portfolios of RF and M only | Every asset and portfolio in equilibrium |
| Single stock | Below the line | On the line if fairly priced |
| Use | How much risk to take | Required return, discount rate, mispricing |

---

*Every figure in this pack was computed in Python from the question data and the raw workbook series. Where a supplied file disagrees with the computation (the JPM workbook), both numbers are shown and the corrected one is the one to use.*
