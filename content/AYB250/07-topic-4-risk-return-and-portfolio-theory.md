# Topic 4 — Risk, Return and Portfolio Theory

Week 4, second half. Source: `AYB250 Week 4.pptx` — the risk, diversification,
CAPM and investor-profile slides (roughly slides 27–42 and 59–64). Reading:
Chapters 4 and 5. The asset-class and valuation half of the deck is note 06.

Covers what "risk" means in finance, why diversification works, modern
portfolio theory and the efficient frontier, CAPM, the Sharpe ratio,
investor classification and risk profiling, and behavioural finance. Every
worked figure was recomputed in Python.

## What risk means

Three definitions from the deck:

1. The chance of **loss of capital** — a negative real return
2. The chance of **loss of purchasing power** — will returns beat inflation?
3. The **variability of returns**

> **In finance, the measure of risk is standard deviation** — the
> variability of returns around an expected mean. When a question asks
> "how is risk measured", that is the one-line answer.

### Risk and return by asset class

The deck's summary table:

| | Cash | Fixed interest | Property (direct) | Shares |
|---|---|---|---|---|
| Risk (short-term volatility) | Very low | Low | Medium | High |
| Correlation with other classes | Low | Low | Low w/ cash & FI; moderate w/ shares | Low w/ cash & FI; moderate w/ property |
| Long-run returns | Low | Low–medium | Medium–high | High |
| Ability to beat inflation | Very poor | Poor | Good | Very good |

## Portfolio return — a weighted average

For a portfolio, consider the risk and return of the **whole portfolio**,
not the individual shares. The expected return **is** a weighted average:

```
E(Rp) = w₁ × E(R₁) + w₂ × E(R₂) + …
```

**Worked example** (deck): Share A — expected return 10%, SD 3%, 55% of
the portfolio. Share B — expected return 14%, SD 5%, 45%.

```
E(Rp) = 0.55 × 10% + 0.45 × 14% = 5.5% + 6.3% = 11.8%
```

Verified.

## Portfolio risk — NOT a weighted average

Portfolio risk is **not** the weighted average of the individual standard
deviations. It depends on the **correlation** (covariance) between asset
returns — how one share's return moves relative to the other's.

```
Correlation coefficient: −1 to +1

  −1  perfectly negative   →  large risk reduction
  +1  perfectly positive   →  NO risk reduction
  Two random ASX shares    →  typically +0.5 to +0.7
```

The deck's evidence: a table of 30 ASX firms where the **average**
individual share had a mean return of 12.6% with a standard deviation of
24.1 — but the **portfolio** of all 30 had the same 12.6% mean with a
standard deviation of only **12.3**. Same return, half the risk. That gap
is diversification.

> **"Why can't we just weight-average the risks?" is a standing tutorial
> question (note 12).** Because unless correlation is exactly +1, some of
> each share's movement cancels against the others'. The weighted average
> is the *ceiling* on portfolio risk, reached only with perfect positive
> correlation; any correlation below +1 pulls actual portfolio risk below
> it.

### Systematic vs non-systematic risk

```
Total risk = systematic risk + non-systematic risk

Systematic:      market-wide. The ONLY way to avoid it is not to invest.
Non-systematic:  company- or industry-specific. A portfolio of 10–30
                 different companies reduces it to very low levels.
```

> **Diversification kills only non-systematic risk.** No number of
> holdings removes systematic risk — that is precisely the risk CAPM's
> beta prices.

## Modern portfolio theory and the efficient frontier

**Modern portfolio theory** (Harry Markowitz, 1952) assumes investors are
**risk averse** — they only take more risk for more return. By mixing
assets you can shape a portfolio to the best available risk–return
trade-off.

The **efficient frontier** is the curved line of those best trade-offs: at
any point on it, you get the **most return for a given level of risk**.
Investors pick their point on the frontier according to their risk
tolerance.

## The capital asset pricing model (CAPM)

CAPM links **systematic risk** to expected return, using **beta** — the
riskiness of a share relative to the whole market (the market's beta = 1).
Expected return = the risk-free rate plus a risk premium scaled by beta:

```
Ri = Rf + βi (Rm − Rf)

  Ri          expected/required return on share i
  Rf          risk-free rate
  βi          beta of share i
  (Rm − Rf)   the market risk premium
```

**Worked example** (deck): A Ltd β = 0.8, B Ltd β = 1.2; risk-free rate
4%; market risk premium 6%.

```
A Ltd:  4% + 0.8 × 6% = 8.8%
B Ltd:  4% + 1.2 × 6% = 11.2%
```

Verified. B Ltd's higher beta means higher systematic risk, so investors
require the higher return. CAPM is useful for estimating expected returns
and for spotting **undervalued** shares (offering more than CAPM requires)
and **overvalued** ones (offering less).

> **Read the question: "market risk premium" is already (Rm − Rf).** If
> instead you are given the market *return* Rm, subtract Rf first. With
> Rf = 4% and premium = 6%, the market return is 10% — plugging 10%
> straight in as the premium gives 12% for A Ltd instead of 8.8%. The
> tutorial (note 12) words it as "the risk premium is 4%", so no
> subtraction is needed there.

## The Sharpe ratio

Shows how much **excess return above the risk-free rate** an investment
generates **per unit of risk taken**:

```
        Rp − Rf
S  =  -----------        (the unit uses × 100 and quotes it as %)
          σp
```

The higher the Sharpe ratio, the better the risk-*adjusted* performance —
a fund with a lower raw return can still win once volatility is accounted
for. The tutorial's Fund A vs Fund B comparison (note 12) is the worked
example: B's raw return of 22.2% adjusts down to 19.1% per unit of risk,
still beating A's 8.3%.

## Investor classification and risk profiling

Investors are classified by **tolerance to risk**, **preference for income
versus capital growth**, and **investment timeframe**. Defensive investors
are risk averse and focus on preserving capital; aggressive investors
tolerate risk and chase capital growth.

The deck's five-way classification:

| Classification | Household income | Tolerable capital decline | Timeframe | Approximate asset mix |
|---|---|---|---|---|
| Very conservative | Unstable, insecure | None | ≤ 2 yrs | Cash 60 / FI 30 / Growth 10 |
| Conservative | Somewhat unstable | ≤ 5% | 2–4 yrs | Cash 20 / FI 40 / Growth 40 |
| Balanced | Fairly stable | ≤ 10% | 4–6 yrs | Cash 10 / FI 30 / Growth 60 |
| Aggressive | Substantially stable | ≤ 15% | 6–8 yrs | Cash 5 / FI 15 / Growth 80 |
| Very aggressive | Very stable | 20%+ regularly | 8–10 yrs | Cash 5 / FI 10 / Growth 85 |

> **Read the mixes as defensive % vs growth %.** Cash + fixed interest is
> the defensive allocation; everything else is growth. The tutorial's
> managed-fund question (note 12) describes a fund that is 60% cash/fixed
> interest and 40% growth — which maps onto the *conservative* row (20+40
> defensive / 40 growth), not the balanced one.

### Risk profiling

A **risk profile** is built from three components — **risk required**
(what the goals demand), **risk capacity** (what the finances can absorb),
and **risk tolerance** (what the client can psychologically stand) — so
the client can be matched to a portfolio consistent with their comfort
level and goals. It is influenced by:

- Age — younger investors tolerate more risk
- Income — higher income absorbs losses more easily
- Wealth — likewise
- Years to retirement — less time to recover means less tolerance
- Past financial experiences — past gains breed optimism; past losses breed caution

## Behavioural finance

The traditional view — **Efficient Market Theory** — holds that markets
are efficient and investors rational. **Behavioural Finance Theory**
challenges this: people sometimes behave irrationally, in patterned ways:

| Bias | Meaning |
|---|---|
| **Loss aversion** (prospect theory) | Losses hurt far more than equal gains please |
| **Herding** | Following crowd behaviour |
| **Overconfidence** | Believing you can beat the market — leads to overtrading and more losses |
| **Biased judgements** | e.g. "house prices never go down" |

These four labels are the marking vocabulary for any "what behaviour is
this investor exhibiting?" question — the tutorial's Slick Oil scenario
(note 12) is exactly that.

## Checkpoint

<details><summary>Questions</summary>

1. A portfolio is 70% in Fund X (expected return 6%) and 30% in Fund Y
   (expected return 11%). What is the portfolio's expected return?
2. Two shares each have a standard deviation of 20% and a correlation of
   +1. How much risk reduction does combining them give?
3. Which type of risk survives full diversification, and what measures it
   relative to the market?
4. Rf = 3%, market risk premium = 5%, β = 1.4. Required return under CAPM?
5. Fund P returned 12% with SD 0.9; Fund Q returned 9% with SD 0.4. The
   risk-free rate is 3%. Which has the better Sharpe ratio?
6. A client can tolerate a 10% decline in capital and has a 5-year
   timeframe. Which classification, and roughly what asset mix?
7. An investor refuses to sell a losing share because "it'll come back —
   selling makes the loss real". Which bias?

</details>

<details><summary>Answers</summary>

1. `0.70 × 6% + 0.30 × 11% = 4.2% + 3.3% = 7.5%`
2. **None.** At correlation +1 the portfolio SD is exactly the weighted
   average — diversification only reduces risk when correlation is below +1.
3. **Systematic risk** — measured by **beta** (market β = 1).
4. `3% + 1.4 × 5% = 10%`
5. ```
   P: (0.12 − 0.03) / 0.9 = 0.100
   Q: (0.09 − 0.03) / 0.4 = 0.150
   ```
   **Fund Q** — lower raw return, but more excess return per unit of risk.
6. **Balanced** — roughly Cash 10 / Fixed interest 30 / Growth 60.
7. **Loss aversion** (prospect theory) — the pain of realising the loss
   outweighs the rational assessment of where the money is best invested
   now.

</details>

## Summary

- Risk in finance = **standard deviation** of returns. Asset classes run
  very low (cash) to high (shares) — and only property and shares reliably
  beat inflation long-run.
- Portfolio **return** is the weighted average of the parts; portfolio
  **risk is not** — it depends on correlation. −1 = large risk reduction,
  +1 = none; two random shares sit around +0.5 to +0.7. The deck's 30-firm
  portfolio kept the average 12.6% return but halved the SD (24.1 → 12.3).
- Total risk = systematic + non-systematic. 10–30 holdings all but
  eliminates the non-systematic part; nothing eliminates the systematic
  part.
- Markowitz (1952): risk-averse investors mix assets to reach the
  **efficient frontier** — maximum return per unit of risk.
- **CAPM:** `Ri = Rf + βi(Rm − Rf)`. Beta scales the market risk premium;
  the market itself has β = 1. A Ltd (β 0.8) requires 8.8%, B Ltd (β 1.2)
  requires 11.2% when Rf = 4% and the premium is 6%.
- **Sharpe ratio** `= (Rp − Rf)/σp` — excess return per unit of risk;
  higher is better.
- Investor classes run very conservative (60/30/10 cash/FI/growth, ≤2 yrs)
  to very aggressive (5/10/85, 8–10 yrs). Risk profile = risk required +
  risk capacity + risk tolerance, shaped by age, income, wealth, years to
  retirement and past experience.
- Behavioural finance's four biases: loss aversion, herding,
  overconfidence, biased judgements.
