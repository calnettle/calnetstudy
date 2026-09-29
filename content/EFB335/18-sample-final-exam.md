# The Sample Final Exam — Every Question, Worked

<!-- notation:start -->
<details class="notation"><summary>Notation key — what the symbols in this note mean</summary>

| Symbol | Means |
|---|---|
| `E(R)` | Expected return — the probability-weighted average return you expect. E(Rᵢ) for asset i, E(R_p) for a portfolio |
| `Rᵢ, R_p` | A return — Rᵢ on asset i, R_p on the portfolio. The subscript says whose return it is |
| `RFR, R_f` | Risk-free rate — the return on a riskless asset such as a government bill |
| `R_M, R_m` | Market return — the return on the whole market (e.g. the ASX 200 as a proxy) |
| `σ (sigma)` | Standard deviation — how widely returns swing around their average. The standard measure of risk |
| `P₀, P₁` | Price — P₀ at the start of the period, P₁ at the end |
| `Σ` | "Add them all up" — a sum over every item (Σᵢ = over every asset i) |
| `β (beta)` | Beta — how sensitive an asset is to market moves; its systematic risk. β = 1 moves with the market |
| `α (alpha)` | Alpha — the return above (or below) what the CAPM says the risk deserves |
| `SML` | Security market line — the CAPM as a line: required return against beta |
| `CAPM` | Capital asset pricing model — E(Rᵢ) = R_f + βᵢ[E(R_M) − R_f] |
| `APT` | Arbitrage pricing theory — expected return explained by several risk factors, not just the market |
| `IR` | Information ratio — active return ÷ tracking error |
| `W_pi, W_bi` | Weight in segment i — portfolio (p) vs benchmark (b) |
| `R_pi, R_bi` | Return in segment i — portfolio (p) vs benchmark (b) |

[Full EFB335 notation key →](#/EFB335/99-notation-key)

</details>
<!-- notation:end -->

**The unit's own sample paper** (`EFB335 Sample Final Exam-1.docx`,
released 29 September 2026). Ten questions, **4 marks each, 40 marks** —
which matches the exam's 40% weight. Every question is reproduced below
with a full answer.

> **Read this first: what the paper actually tests.** Map each question
> to its topic and the picture is stark.

| Topic | Questions | Marks | On this site? |
|---|---|---|---|
| 1 · Investment background | — | 0 | ✅ |
| 2 · Portfolio management | *(weighting arithmetic inside Q8)* | 0 | ✅ |
| 3 · CAPM | Q2 | **4** | ✅ |
| 4 · APT and multifactor | — | 0 | ✅ |
| 5 · Market efficiency | Q1 | **4** | ❌ |
| 6 · Equity portfolio management | Q3, Q10(c) | **5** | ❌ |
| 7 · Bond portfolio management | Q4 | **4** | ❌ |
| 8 · Derivatives | Q5, Q6 | **8** | ❌ |
| 9 · Hedge funds and alternatives | Q7, Q8 | **8** | ❌ |
| 10 · Performance evaluation | Q9, Q10(a)(b) | **7** | ❌ |
| | | **40** | |

> **36 of the 40 marks come from Topics 5–10.** The four topics the site
> covers, and that the revision plan spends most of its EFB335 time on,
> carry **4 marks** between them — one CAPM question. If the real paper
> follows this sample, the plan's EFB335 weighting is close to backwards.

> **And it is a writing paper, not a maths paper.** Only Q2, Q6, Q8(b)
> and Q9(b) are calculations — **12 of 40 marks**. The other 28 are
> describe, discuss, explain. Every one of Topics 5–10 needs a practised
> written answer, not just a formula.

**Caveat on the answers.** The unit supplied **no solutions** to this
paper. The calculations below are verified independently. The written
answers are model answers built from the Topic 5–10 lecture decks and
the textbook (Reilly and Brown) — sound, but not the marker's own key.

---

## Question 1 — Market efficiency · Topic 5 · 4 marks

*Market efficiency assumes that security prices fully reflect all
available information. Fama further classifies the efficient market
hypothesis into weak-form, semi-strong form and strong-form efficiency.*

**(a) Describe what it means for a market to be weak-form efficient.** *(1)*

Current prices fully reflect **all historical market information** —
past prices, returns, trading volume. So future returns cannot be
predicted from past returns, and **technical analysis cannot earn
abnormal returns** after costs.

**(b) Discuss how we would test whether markets are weak-form efficient.** *(2)*

Two families of test:

1. **Statistical tests of independence** — if prices follow a random
   walk, successive returns should be uncorrelated.
   - **Autocorrelation tests**: correlate returns with their own lagged
     returns. Significant autocorrelation means past returns predict
     future ones.
   - **Runs tests**: count sequences of consecutive price rises or falls
     and compare with what a random series would produce.
2. **Trading-rule tests** — simulate a technical rule (filter rules,
   moving-average crossovers) and test whether it beats buy-and-hold
   **after transaction costs**, on out-of-sample data.

**(c) Are markets weak, semi-strong or strong-form efficient?** *(1)*

The evidence broadly supports **weak-form** efficiency in developed
markets — autocorrelations are small and trading rules rarely survive
costs. **Semi-strong** is largely supported (prices adjust to public
announcements quickly) but with persistent **anomalies** — size, value,
momentum, post-earnings drift. **Strong-form** is **rejected**: insiders
and specialists earn abnormal returns, which is why insider trading is
illegal. Most professional managers, meanwhile, fail to beat their
benchmarks consistently.

---

## Question 2 — CAPM · Topic 3 · 4 marks

*Risk-free rate 2%, expected market return 8%.*

**(a) Required returns for Stock A (β = 0.20) and Stock B (β = 0.45).** *(1)*

The CAPM is **not on the formula sheet** — this is a memorised formula.

```
E(Rᵢ) = Rf + βᵢ [E(Rm) − Rf]          market risk premium = 8 − 2 = 6%

Stock A:  2 + 0.20 × 6  =  3.20%
Stock B:  2 + 0.45 × 6  =  4.70%
```

**(b) Stock A is $20 and expected to be $22 in a year. Buy it?** *(2)*

```
Expected return  = (22 − 20) / 20  = 10.0%
Required return  (CAPM)            =  3.2%
Alpha            = 10.0 − 3.2      = +6.8 points
```

**Yes — buy.** The expected return exceeds the CAPM required return, so
the stock plots **above the SML**: it is **undervalued**. As investors
buy it the price rises and the expected return falls back to the SML.

**(c) The reasonable price of Stock A today.** *(1)*

Discount the expected price at the required return:

```
P₀ = 22 / 1.032 = $21.32
```

At $20 the stock is $1.32 below fair value — consistent with (b).

---

## Question 3 — Superannuation and asset allocation · Topic 6 · 4 marks

*Funds management grew from ~$200 billion (1988) to over $2 trillion
(2018), driven mainly by superannuation.*

**(a) Why has the super industry grown so much?** *(2)*

- **Compulsory contributions.** The Superannuation Guarantee (1992)
  makes employers contribute a set share of wages — now 12% — so money
  flows in every pay cycle regardless of market conditions.
- **Preservation.** Balances are locked until retirement, so the pool
  compounds for decades instead of being withdrawn.
- **Tax concessions.** Concessional contributions and fund earnings are
  taxed at 15%, below most marginal rates, which encourages voluntary
  contributions on top.
- **Demographics.** A larger, ageing working population and government
  policy to reduce reliance on the Age Pension.

Topic 6 records super as roughly **85% of the Australian investment
industry**.

**(b) What assets and asset allocation strategy would a super fund use, and why?** *(2)*

A **diversified multi-asset portfolio**: Australian and international
equities, fixed income, cash, listed and unlisted property,
infrastructure, and alternatives such as private equity.

The strategy is **strategic asset allocation** — a long-run policy mix
(for example a "balanced" option of around 70% growth, 30% defensive),
rebalanced periodically, with limited tactical tilts. Why:

- **Long horizon** — members' money is preserved for decades, so the
  fund can hold growth and illiquid assets (property, infrastructure,
  private equity) and ride out short-term volatility.
- **Predictable inflows** — contributions provide liquidity without
  forced selling.
- **Inflation** — retirement income must keep real value, which needs
  growth assets.
- **Diversification and regulation** — trustees owe a best-interests
  duty and funds face APRA's performance test against benchmarks, which
  rewards a disciplined, diversified policy mix.

---

## Question 4 — Bond portfolio choice · Topic 7 · 4 marks

*You manage a fixed income fund mandated to outperform the local bond
index.* The yield curve is a normal, **upward-sloping** US Treasury
curve (1 August 2015): about 0.3% at 1 year, 1.5% at 5 years, 2.2% at
10 years and 2.9% at 30 years — steep out to 10 years, flatter beyond.

| | Portfolio A | Portfolio B |
|---|---|---|
| Average maturity | 9 yrs | 8 yrs |
| Average YTM | 2.0% | 2.5% |
| Modified duration | 6.2 | 5.1 |
| Convexity | 138.09 | 35.82 |
| Call features | Non-callable | Deferred call, 1.5–4 years |

**Select one and give three factors that justify it.** *(4)*

This is a judgement question — either portfolio can score if the
reasoning is right. A defensible answer **selects Portfolio A**:

1. **No call risk.** B's bonds become callable within 1.5–4 years. If
   rates fall, the issuer calls them and B loses its capital gains and
   must reinvest at lower yields. B's extra 0.5% of yield is largely
   **compensation for that call risk**, not free return.
2. **Much higher convexity** (138 vs 36). For the same yield change, A
   gains more when yields fall and loses less when they rise. B's low
   convexity reflects the **negative convexity** of its call options —
   its price is capped as rates fall.
3. **Longer duration on a steep curve.** A's 6.2 modified duration gives
   more price upside if rates fall, and a steep curve out to 10 years
   produces a **roll-down** gain as the bonds age into lower-yielding
   maturities. Rough price sensitivity for a 1% fall in yields:

   ```
   %ΔP ≈ −D_mod × Δy + ½ × Convexity × (Δy)²

   A:  −6.2 × (−0.01) + ½ × 138.09 × 0.0001  =  +6.20% + 0.69%  ≈  +6.9%
   B:  −5.1 × (−0.01) + ½ ×  35.82 × 0.0001  =  +5.10% + 0.18%  ≈  +5.3%
   ```

   (B's gain would in practice be smaller still, because a call caps its
   price.)

**When B would be the right answer:** if you expect rates to **rise or
stay flat**, B's higher yield and shorter duration win — more income,
less price damage — and the call is unlikely to be exercised when rates
rise. State your rate view in the first line; the marks are for
matching the choice to it.

> **Duration and convexity are not on the formula sheet.** The
> price-change approximation above has to come from memory.

---

## Question 5 — Futures for cash equitisation · Topic 8 · 4 marks

**(a) How can a fund manager gain market exposure while waiting to buy shares as cash flows in?** *(2)*

**Buy stock index futures** — for example ASX SPI 200 futures — with a
notional value equal to the cash waiting to be invested. The cash sits
in the money market earning the risk-free rate; the long futures
position gives the fund the **market's return** on that cash
immediately. This is **cash equitisation**, and it removes cash drag
against the benchmark. As shares are bought, the futures are closed out
in step.

**(b) What happens if the market rises while you wait?** *(2)*

The shares you still have to buy cost more — but the **long futures
position gains** by approximately the same amount, because futures
prices move with the index. The futures profit funds the higher purchase
price, so the fund has effectively **locked in exposure at the earlier
market level** and does not underperform the benchmark while it waits.
The hedge is not perfect: **basis risk** (futures and index do not move
exactly together) and any mismatch between the index and the shares
actually bought leave a residual.

---

## Question 6 — A bull spread with puts · Topic 8 · 4 marks

*Puts with strikes $18 and $20 cost $2.00 and $3.50.*

**Construct the bull spread and tabulate its payoff and profit.** *(4)*

A **bull spread with puts**: **buy the low-strike put** ($18, pay $2.00)
and **sell the high-strike put** ($20, receive $3.50).

```
Net premium = −2.00 + 3.50 = +$1.50 received up front (a credit spread)
```

| Stock price S_T | Long $18 put | Short $20 put | **Payoff** | **Profit** |
|---|---|---|---|---|
| S_T ≥ 20 | 0 | 0 | **0** | **+1.50** |
| 18 ≤ S_T < 20 | 0 | −(20 − S_T) | **S_T − 20** | **S_T − 18.50** |
| S_T < 18 | 18 − S_T | −(20 − S_T) | **−2** | **−0.50** |

- **Maximum profit $1.50** — the credit kept, when S_T ≥ 20.
- **Maximum loss $0.50** — the $2 strike gap less the $1.50 credit, when S_T < 18.
- **Break-even at $18.50.**

The question says "both spreads", which comes from the textbook version
of this problem that also asks for the **bear spread** — the mirror
image: **buy the $20 put, sell the $18 put**, a $1.50 debit.

| Stock price S_T | **Payoff** | **Profit** |
|---|---|---|
| S_T ≥ 20 | 0 | −1.50 |
| 18 ≤ S_T < 20 | 20 − S_T | 18.50 − S_T |
| S_T < 18 | 2 | +0.50 |

> **Payoff vs profit** is where marks go. The formula sheet gives
> **payoffs** only. Profit = payoff ± the premiums, and the sign of the
> net premium depends on which leg you bought.

---

## Question 7 — The claimed benefits of hedge funds · Topic 9 · 4 marks

**List the three main claimed benefits, and say whether they exist.** *(4)*

The claims:

1. **Absolute returns** — positive returns regardless of market direction.
2. **Low correlation with traditional assets** — so real diversification
   benefits in a portfolio of shares and bonds.
3. **Superior risk-adjusted returns** — higher returns per unit of risk,
   with lower volatility and downside protection.

Do they exist? **Partly, and less than advertised.**

- **Reported returns are overstated** by **survivorship bias** (failed
  funds drop out of the databases) and **backfill bias** (funds join a
  database after a good run and bring their history with them).
- **Fees** — typically a management fee plus a 15–20% performance fee —
  absorb much of the gross outperformance.
- **Correlations rise in crises**, precisely when diversification is
  needed; many strategies are short volatility or liquidity and lose
  together in a sell-off.
- **Capacity**: returns fall as funds grow ("too much money can be a
  burden", Topic 9). **Persistence** of top performance is weak.
- **Illiquidity** — lock-ups and smoothed valuations understate
  volatility and flatter Sharpe ratios.

Some managers do add value, but the average hedge fund does not deliver
all three benefits after fees and bias adjustments.

---

## Question 8 — Adding a hedge fund to a portfolio · Topic 9 · 4 marks

**(a) Why do some managers say hedge funds should not be grouped as a single asset class?** *(1)*

"Hedge fund" describes a **legal and fee structure**, not a set of
assets. The strategies under it — equity long/short, market neutral,
merger arbitrage, global macro, distressed debt, managed futures — have
**completely different risk exposures, return drivers and correlations**
with each other and with markets. Treating them as one asset class hides
that heterogeneity.

**(b) $800,000 equity portfolio (β 1.1, expected 12%) plus $200,000 of a hedge fund (β 0.8, expected 5%).** *(3)*

Weights: equity 800/1,000 = **0.8**, hedge fund 200/1,000 = **0.2**.

```
Portfolio beta     = 0.8 × 1.1 + 0.2 × 0.8  =  0.88 + 0.16  =  1.04

Expected return    = 0.8 × 12% + 0.2 × 5%   =  9.6% + 1.0%  =  10.6%
```

**Has the hedge fund added value? On these numbers, no.** Return falls by
1.4 points (12% → 10.6%) while beta falls by only 0.06 (1.1 → 1.04).
Return per unit of systematic risk:

```
Equity alone     12.0 / 1.10  = 10.91% per unit of beta
Hedge fund        5.0 / 0.80  =  6.25%
New portfolio    10.6 / 1.04  = 10.19%
```

The hedge fund offers far less return per unit of beta than the equity
it replaces, so the portfolio's risk–return trade-off **worsens**. The
only case for it would be a **low correlation** that cuts *total*
risk more than beta shows — and nothing here tells us that.

---

## Question 9 — Risk-adjusted performance · Topic 10 · 4 marks

**(a) When can Sharpe and Treynor give conflicting rankings, and why?** *(2)*

**Sharpe** divides excess return by **total risk (σ)**; **Treynor**
divides by **systematic risk (β)**. They rank funds the same way only
when the funds are **well diversified**, so total risk ≈ systematic risk.
They **conflict when a fund is poorly diversified** — it carries a lot
of unsystematic risk, which Sharpe penalises and Treynor ignores. Such a
fund can look good on Treynor and poor on Sharpe.

**(b) Jensen's alpha for Fund A and Fund B** (Rf = 4.7%). *(1)*

The formula is on the sheet: `α_p = (R_p − R_f) − β_p(R_m − R_f)`.
Market risk premium = 7.6 − 4.7 = **2.9%**.

```
Fund A:  (6.4 − 4.7)  − 0.52 × 2.9  =  1.70 − 1.508  =  +0.19%
Fund B:  (10.8 − 4.7) − 1.47 × 2.9  =  6.10 − 4.263  =  +1.84%
```

Both have positive alpha; B's is much larger.

> **This question's own data demonstrates part (a).** Compute the other
> two measures:
>
> | | Sharpe | Treynor |
> |---|---|---|
> | Market | 0.163 | 2.90 |
> | Fund A | **0.117** — *below* market | **3.27** — *above* market |
> | Fund B | 0.254 | 4.15 |
>
> **Fund A beats the market on Treynor and loses to it on Sharpe** —
> exactly the conflict (a) asks about. Its σ of 14.5% is high for a
> beta of 0.52, so much of its risk is unsystematic. Quote this in the
> exam and you have answered (a) with evidence.

**(c) How is the information ratio calculated, and what does it measure?** *(1)*

```
IR = (R_p − R_B) / σ(R_p − R_B)
   = average active return ÷ tracking error
```

It measures **active return per unit of active risk** — how much a
manager earns above the benchmark for each unit of deviation from it.
It is the standard measure of an **active manager's skill and
consistency**.

---

## Question 10 — Beating the benchmark · Topics 6 and 10 · 4 marks

**(a) Two ways a manager can attempt to outperform a benchmark.** *(1)*

1. **Asset allocation** (market timing) — over-weighting segments or
   asset classes expected to outperform, relative to the benchmark's
   weights.
2. **Security selection** — within each segment, holding the securities
   expected to beat that segment's benchmark return.

**(b) "Allocation effect" and "selection effect".** *(2)*

Attribution analysis splits the portfolio's excess return over its
benchmark into these two parts. Both formulas are on the sheet:

```
Allocation effect = Σᵢ (W_pi − W_bi) × R_bi
Selection effect  = Σᵢ  W_pi × (R_pi − R_bi)
```

- **Allocation** — the return from holding **different weights** in each
  segment than the benchmark, evaluated at the benchmark's segment
  returns. It rewards being over-weight the segments that did well.
- **Selection** — the return from **picking better securities** within
  each segment, evaluated at the portfolio's own weights.

Together they sum to the total excess return. See [doc 17's worked
example](#/EFB335/17-official-exam-formula-sheet).

**(c) "Integrated asset allocation".** *(1)*

A comprehensive asset allocation framework that **combines two separate
inputs** — **capital market conditions** (expected returns, risks and
correlations) and **the investor's objectives and constraints** (risk
tolerance, horizon, liquidity, tax) — into an optimal policy asset mix,
then **monitors both and feeds changes back** into the mix over time.
Strategic, tactical and insured asset allocation are all special cases
of it, depending on which inputs are allowed to change.

---

## Formula Sheet Attached to This Paper

The sample paper carries the same formula sheet as [doc
17](#/EFB335/17-official-exam-formula-sheet), with one extra heading —
**"Autocorrelation test"** — matching Q1(b). The current standalone
sheet (version 6) does not have that heading. Either way, the
autocorrelation test is the answer to *"how do we test weak-form
efficiency"*, and it is worth knowing in words, not just as a label.
