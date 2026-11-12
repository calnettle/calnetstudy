# The 30-Minute Cram: Every Topic, Every Formula

**For the night before the final (Fri 13 Nov 2026, 8:30am).** One read,
top to bottom, about 30 minutes. Every number below was re-checked in
Python on 12 Nov.

| Minutes | Read |
|---|---|
| 0–3 | The exam itself |
| 3–8 | Topics 1–4 (4 marks on the sample paper) |
| 8–27 | Topics 5–10 (36 marks on the sample paper) |
| 27–30 | The ten traps, then stop |

---

## The Exam Itself

| | |
|---|---|
| **When** | Fri 13 Nov 2026, 8:30am (from your calendar; check the time and room on QUT's exam timetable tonight) |
| **Weight** | 40% of the unit |
| **Shape (sample paper)** | **10 questions × 4 marks = 40 marks. Attempt all.** Answers go in the answer booklet |
| **Mix** | **28 marks written** (describe, discuss, explain) and **12 marks calculation** (sample Q2, Q6, Q8b, Q9b) |
| **Topic spread** | Topic 3: 4 · Topic 5: 4 · Topic 6: 5 · Topic 7: 4 · Topic 8: 8 · Topic 9: 8 · Topic 10: 7. **Topics 1, 2 and 4: none directly** |
| **Formula sheet** | One page, handed out. Covers Topics 2, 3, 6, 8 and 10 only (list below) |
| **Length** | Not in any file I can find: the sample paper doesn't print it. Check Canvas. Pace it as **exam minutes ÷ 10 per question**, since every question is worth 4 |

**How to write a 4-mark answer:** one mark is roughly one distinct,
explained point. Define the term, give the mechanism (why), give an
example or number, and finish with a one-line verdict. For "discuss",
give both sides, then pick one.

**On the sheet (don't memorise):** E(Rp), σ_port (double-sum form), the
CML, PT, TCR, call and put payoffs, ATP, AATP, σ(TP), Jensen's alpha,
Sharpe, Treynor, information ratio, fund return, allocation and
selection effects.

**NOT on the sheet (memorise):** **the CAPM**, beta, utility, the
expanded two-asset variance, **duration and convexity**, every option
**strategy**, the futures hedge ratio, high-water-mark fees, Sortino.

---

## Topics 1–4 in Five Minutes

### Topic 1 · Investment background

Return = what you end with relative to what you put in; risk = how much
it swings.

```
HPY = (P₁ − P₀ + D) / P₀          Annual HPY = HPR^(1/n) − 1   (n in YEARS)
AM = ΣR / n      GM = [Π(1+R)]^(1/n) − 1      AM ≥ GM always
  +50% then −50%:  AM = 0%,  GM = √(1.5 × 0.5) − 1 = −13.4%
Margin call (long)  P* = Loan / [N × (1 − MM)]
  100 shares at $50, 50% initial margin → loan $2,500; MM 30% → P* = 2,500 / 70 = $35.71
Margin call (short) P* = (Proceeds + Deposit) / [N × (1 + MM)]
```

### Topic 2 · Portfolio management

Diversification works because assets don't move perfectly together. Any
correlation below +1 cuts risk.

```
σ²p = w₁²σ₁² + w₂²σ₂² + 2w₁w₂·r·σ₁σ₂
  50/50, σ 20% and 10%, r = 0.3 → σp = √0.0155 = 12.45%  (not the 15% average)
Correlation r = Cov / (σ₁σ₂)
Min-variance weight w₁ = (σ₂² − Cov) / (σ₁² + σ₂² − 2Cov)
Utility U = E(r) − ½·A·σ²     (σ SQUARED; A ≈ 7 cautious, ≈ 1 aggressive)
  E(r) 8%, σ 20%, A = 4 → U = 0.08 − 0.5 × 4 × 0.04 = 0
```

### Topic 3 · CAPM (the one Topic 1–4 question on the sample)

The CML prices **diversified portfolios on total risk σ**. The SML/CAPM
prices **any single asset on beta**. Only market risk is rewarded,
because the rest can be diversified away.

```
CML   E(Rp) = Rf + σp × [E(Rm) − Rf] / σm             (on the sheet)
        Rf 3%, E(Rm) 9%, σm 15%, want σp 10% → 3 + 10 × 6/15 = 7%
Beta  β = Cov(i,m) / σm²                              (σm SQUARED; NOT on sheet)
CAPM  E(Ri) = Rf + βi × [E(Rm) − Rf]                  (NOT on sheet)
```

**Sample Q2, worked:** Rf 2%, Rm 8%. Stock A β 0.20 → 2 + 0.2 × 6 =
**3.2%**. B β 0.45 → **4.7%**. A is $20, expected $22 → expected return
10% > required 3.2% → plots **above the SML → undervalued → buy**. Fair
price = 22 / 1.032 = **$21.32**.

> Mispricing rule: expected > required → **above** the SML →
> **underpriced → buy**. Compare each stock to its own required return,
> never to the other stocks.

### Topic 4 · APT and multifactor models

APT says returns are driven by several systematic factors (it doesn't
name them). Fama–French names them: market, size (SMB), value (HML).

```
APT    E(Ri) = λ0 + λ1·bi1 + λ2·bi2 + …
         λ0 3%, λ1 4% × b 1.2, λ2 2% × b 0.5 → 3 + 4.8 + 1.0 = 8.8%
FF3    (Ri − Rf) = a + b1(Rm − Rf) + b2·SMB + b3·HML + e     excess returns both sides
Arbitrage portfolio: weights sum to 0, each factor exposure sums to 0, return > 0
```

> SMB positive = behaves like a **small** cap; HML positive = behaves
> like **value**.

---

## Topic 5 · Market Efficiency (4 marks, all written)

**The idea:** prices fully reflect information, so you can't
consistently earn **risk-adjusted** returns above the market **after
costs**.

| Form | Prices reflect | So this can't beat the market | Tested by | Verdict |
|---|---|---|---|---|
| **Weak** | All past market data (prices, returns, volume) | Technical analysis | Autocorrelation, runs tests, trading rules after costs | **Broadly supported** |
| **Semi-strong** | + all public information | Fundamental analysis on public news | Event studies (abnormal returns around announcements), return-prediction tests | **Mostly supported, with anomalies** |
| **Strong** | + private (insider) information | Anyone, even insiders | Insiders, analysts, fund managers | **Rejected**: insiders profit (that's why it's illegal) |

Nested one way: strong ⇒ semi-strong ⇒ weak.

```
Autocorrelation   r_t = a + b·r_(t−1) + e     weak form holds if b ≈ 0
Runs test         FEWER runs than expected = trends = AGAINST weak form
Abnormal return   AR = R_stock − R_market     (subtract the MARKET, not Rf)
Event study       AAR = average AR across firms on a day; CAR = sum of AARs over days
                  Efficient: jump on day 0, then flat. Drift after = against semi-strong
```

**Anomalies to name:** size (small firms), value (low P/E, high B/M),
momentum, post-earnings-announcement drift, January effect.

> **Joint hypothesis:** every "abnormal return" test is a test of
> efficiency **and** of the pricing model. An anomaly may just mean the
> CAPM is the wrong model, which is how Fama–French was born.

**Sample Q1 template:** (a) weak form = past prices can't predict future
returns, so no technical analysis profits. (b) Autocorrelation and runs
tests (statistical independence) plus trading-rule tests after costs.
(c) Weak: yes. Semi-strong: largely, with anomalies. Strong: no.

---

## Topic 6 · Equity Portfolio Management (5 marks)

**Passive vs active.** Passive buys the index and aims for **minimal
tracking error** at low cost (index funds, ETFs). Active tries to beat
the benchmark by **stock selection, sector rotation or timing**, which
costs more in fees, turnover and tax, and most managers don't manage it
consistently.

| Index construction | Methods |
|---|---|
| Full replication | Hold every stock at index weight: lowest tracking error, highest cost |
| Sampling | Hold a representative subset |
| Optimisation | Use a model to minimise tracking error with fewer stocks |

**On the sheet:**
```
Turnover        PT = $ securities SOLD / AVERAGE AUM
                  $40m sold / $50m average AUM → 0.8 (80%); holding period ≈ 1/PT ≈ 1.25 yrs
Tax cost ratio  TCR = 1 − (1 + TAR) / (1 + PTR)     (decimals, then divide)
                  after-tax 3.35%, pre-tax 6.75% → 1 − 1.0335/1.0675 = 3.19%
```
High turnover realises gains, so active funds carry a **higher TCR**.

**Styles:** **value** = low P/E, bets the P/E re-rates up. **Growth** =
high EPS growth, assumes the P/E holds. Style analysis regresses a fund
on style indices to see what it really holds.

**Asset allocation (sample Q10c, Q3b):**

| Strategy | What it does |
|---|---|
| **Strategic** | Long-run policy mix, rebalanced back to target (sells winners) |
| **Tactical** | Short-term tilts away from the policy mix on market views |
| **Insured** | Buys more risky assets as wealth rises above a floor, sells as it falls |
| **Integrated** | Combines **capital market expectations** with **the investor's objectives and constraints** into a mix, then monitors both and feeds changes back. The others are special cases |

> Brinson (1986): asset allocation explains **93.6% of the VARIATION**
> in returns, not 93.6% of the return itself.

**Super (sample Q3):** growth came from the **compulsory Superannuation
Guarantee** (1992, now 12%), **preservation** until retirement, **15%
tax concessions**, and an ageing population plus policy to cut Age
Pension reliance. Super funds hold a **diversified multi-asset mix**
(Aus and global shares, bonds, cash, property, infrastructure, private
equity) under **strategic asset allocation**, because of the long
horizon, steady inflows (so they can hold illiquid assets), inflation
protection, and trustee duties plus APRA's performance test.

---

## Topic 7 · Bond Portfolio Management (4 marks; NOTHING on the sheet)

**Duration** = how sensitive a bond's price is to rates (a weighted-
average time to the cash flows). **Convexity** = the curve's bend; it
always helps the holder.

```
Macaulay D   = Σ [t × PV(CF_t)] / Price          zero-coupon: D = maturity
Modified D   = D / (1 + YTM/m)
%ΔP          ≈ −ModD × Δi  +  ½ × Convexity × (Δi)²
  D 5 yrs, YTM 6% annual → ModD = 5/1.06 = 4.72
  rates +1% → −4.72% from duration, +0.15% from convexity 30 → about −4.57%
Portfolio D  = Σ wᵢ × Dᵢ  (market-value weights)
```

**Duration is higher with:** longer maturity, **lower coupon**, **lower
yield**.

> The convexity term is **always added**, rates up or down. Δi as a
> decimal: 1% = 0.01, (Δi)² = 0.0001.

**Strategies:**

| Type | Examples |
|---|---|
| Passive | Buy-and-hold, **indexing** |
| Active | **Rate anticipation** (lengthen duration if rates will fall), valuation, credit analysis, yield spread analysis, bond swaps |
| Core-plus | Passive core (~70%) plus active satellites (high yield, emerging, global) |
| Matched funding | **Dedication** (cash flows match liabilities), **immunisation** (set duration = horizon so price and reinvestment risk cancel; rebalance) |
| Contingent immunisation | Manage actively until the safety margin hits a floor, then immunise |

**Yield curve theories:** expectations (explains every shape), liquidity
preference (normally upward), segmented markets (supply and demand in
each maturity bucket).

**Sample Q4 (choose A or B):** state your rate view first. Rates
falling → **Portfolio A**: non-callable (no call risk), much higher
convexity (138 vs 36), longer duration (6.2) for more price gain, and
roll-down on a steep curve. A 1% fall: A ≈ +6.9%, B ≈ +5.3% (and B's
call caps it). Rates rising or flat → B: higher yield, shorter duration.

---

## Topic 8 · Derivatives (8 marks: the biggest with Topic 9)

**On the sheet:** call payoff `max(S_T − X, 0)`, put payoff
`max(X − S_T, 0)`. **Payoffs, not profits.** Profit = payoff − premium
paid (or + premium received). **Everything else is built by you.**

```
Long futures profit = P_T − F₀      short = F₀ − P_T      (no premium, no floor)
Hedge ratio  n = (Portfolio value × β) / (Index × $25)   SPI 200 = $25 a point
  $8,131,300 × 1.0 / (8,131.30 × 25) = 40 contracts
Call break-even = X + premium      Put break-even = X − premium
```

| Strategy | Build | Use | Key numbers |
|---|---|---|---|
| **Protective put** | Own stock + buy put | Insurance on a holding | Floor = K − premium |
| **Covered call** | Own stock + sell call | Extra income, gives up upside | Capped at K + call premium |
| **Collar** | Own stock + buy OTM put + sell OTM call | Cheap floor and cap | Often zero net premium |
| **Long straddle** | Buy call + put, same K | Big move, either direction | Break-evens K ± total cost |
| **Strip / strap** | 1C+2P / 2C+1P | Big move, bearish / bullish lean | |
| **Long strangle** | Buy OTM put + OTM call | Cheaper straddle, needs a bigger move | |
| **Bull spread** | **Buy LOW strike**, sell high | Moderately bullish | Capped both ways |
| **Bear spread** | **Buy HIGH strike**, sell low | Moderately bearish | Capped both ways |
| **Range forward** | Long call + short put, zero cost | Lock a price band | |

**Sample Q6, bull spread with puts:** buy $18 put ($2.00), sell $20 put
($3.50) → **$1.50 credit**.

| S_T | Payoff | Profit |
|---|---|---|
| ≥ 20 | 0 | **+1.50** (max) |
| 18 to 20 | S_T − 20 | S_T − 18.50 (break-even $18.50) |
| < 18 | −2 | **−0.50** (max loss) |

Bear spread (mirror): buy $20 put, sell $18 put, $1.50 debit, max gain
$0.50, max loss $1.50.

**Cash equitisation (sample Q5):** money arrives faster than you can buy
shares, so **buy index futures** equal to the cash and park the cash at
the risk-free rate. You get market exposure straight away, with no cash
drag. If the market rises while you wait, the shares cost more but the
**futures gain offsets it**; close the futures as you buy shares.
Residual risk: **basis risk**.

**What moves option prices:** S up → call up, put down. σ up or time up
→ **both** up. Rates up → call up, put down.

---

## Topic 9 · Hedge Funds and Alternatives (8 marks)

**Hedge fund** = lightly regulated private pool, absolute-return target,
can short, lever and use derivatives, charges **management + performance
fees** (e.g. 1.5–2% and 20%), with lock-ups. A **legal and fee
structure, not an asset class**: strategies differ completely
(long/short, market neutral, merger arbitrage, global macro, distressed,
managed futures), which answers sample Q8(a).

**Claimed benefits (sample Q7):** (1) **absolute returns** in any
market, (2) **low correlation** with shares and bonds, (3) **superior
risk-adjusted returns**. **Reality, partly:** survivorship and backfill
bias inflate reported returns; fees eat the gross alpha; correlations
**rise in crises**; capacity limits; weak persistence; illiquid assets
with smoothed prices understate volatility. Research: on average they
**don't earn superior risk-adjusted returns**.

```
High-water mark   Perf fee = rate × max(0, price − HWM); reset HWM when beaten
  20% fee, HWM $1.00 → price $1.20: fee $0.04, HWM now $1.20
  falls to $1.10: no fee · rises to $1.30: fee 20% × 0.10 = $0.02 (not on the full rise)
Fund of funds     two layers of fees
  12% gross → 1.5% + 20% → 8.40% → then 1% + 10% → 6.66% net
Merger arb        implied deal probability = (price − fail price) / (offer − fail price)
  price $45, offer $50, fail $35 → 10/15 = 67%
Adding a fund     β_p = Σwβ,  E(R_p) = Σw·E(R)
```

**Sample Q8(b):** $800k equity (β 1.1, 12%) + $200k hedge fund (β 0.8,
5%). Weights 0.8 and 0.2. β_p = 0.88 + 0.16 = **1.04**. E(R) = 9.6 + 1.0
= **10.6%**. Return falls 1.4 points while beta falls only 0.06, so per
unit of beta it gets worse (12/1.1 = 10.9 vs 10.6/1.04 = 10.2). **No
value added**, unless low correlation cuts total risk.

**Private equity / VC:** illiquid, long lock-ups, **J-curve** (negative
early returns from fees and write-downs, positive later), so early
losses don't mean a bad manager. Raw VC returns look huge; risk-adjusted
they don't.

> "Market neutral" removes market risk, not all risk: equity market
> neutral was the worst strategy in 2008 (−40.3%).

---

## Topic 10 · Performance Evaluation (7 marks; most of the sheet)

| Measure (all on sheet except Sortino) | Formula | Risk | Use when |
|---|---|---|---|
| **Sharpe** | (Rp − Rf) / σp | Total | The fund is the investor's **whole** portfolio |
| **Treynor** | (Rp − Rf) / βp | Systematic | The fund is **one part** of a diversified whole |
| **Jensen's α** | (Rp − Rf) − βp(Rm − Rf) | Beta via CAPM | Excess return in % points; + = skill |
| **Information ratio** | (Rp − RB) / tracking error | Active | An active manager vs their benchmark |
| **Sortino** (memorise) | (R − MAR) / downside deviation | Downside only | Investor only minds losses |

**Sample Q9:** Sharpe and Treynor **disagree when a fund is poorly
diversified**: its unsystematic risk lowers Sharpe but Treynor ignores
it. Jensen, Rf 4.7%, Rm 7.6% (premium 2.9%): Fund A (6.4%, β 0.52) →
1.70 − 1.508 = **+0.19%**. Fund B (10.8%, β 1.47) → 6.10 − 4.263 =
**+1.84%**.

```
Tracking (divide by T, on the sheet)     differences +1, −1, +2 (%)
  ATP   = average difference          = 0.67%   (ups and downs cancel: its flaw)
  AATP  = average |difference|        = 1.33%
  σ(TP) = √(average squared diff)     = √(6/3) = 1.41%   (tracking error)
Fund return  R = (EP + Div + Cap.Dist − BP) / BP
  $10.00 → $10.50, dividend $0.30, cap gain distribution $0.20 → 10%
```

**Attribution (sample Q10):** two ways to beat a benchmark: **asset
allocation** (weight segments differently) and **security selection**
(better picks within a segment).

```
Allocation = Σ (W_p − W_b) × R_b      weights differ, at BENCHMARK returns
Selection  = Σ  W_p × (R_p − R_b)      returns differ, at PORTFOLIO weights
Allocation + Selection = R_portfolio − R_benchmark

           W_p   W_b   R_p   R_b
Equities   0.6   0.5   12%   10%
Bonds      0.4   0.5    3%    4%
Benchmark 7.0%, portfolio 8.4%, excess 1.4
Allocation = 0.1 × 10 − 0.1 × 4 = 0.6      Selection = 0.6 × 2 + 0.4 × (−1) = 0.8     0.6 + 0.8 = 1.4 ✓
```

**Good benchmark:** unambiguous, investable, measurable, appropriate,
reflects current opinions, **specified in advance**. Benchmark error
(the wrong market proxy) can flip a Jensen or Treynor verdict.

---

## The Ten Traps (last three minutes)

1. **The CAPM is not on the sheet.** If you blank, read it out of the
   Jensen line: α = actual excess − β × market excess.
2. **Beta divides by σm squared.**
3. **Utility uses σ squared.**
4. **Payoff ≠ profit.** The sheet gives payoffs; take off the premiums.
   Label your columns.
5. **Bull = buy the LOW strike, bear = buy the HIGH**, calls or puts.
   Bull with puts is a credit.
6. **Convexity is always added.** Δi as a decimal.
7. **High-water-mark fees only on gains above the old peak.**
8. **Fewer runs = trends = against weak form.** AR subtracts the market
   return, not Rf.
9. **Tracking error on the sheet divides by T** and squares raw
   differences.
10. **Allocation uses benchmark returns; selection uses portfolio
    weights.** Check they add to the excess return.

Then stop. Water, ID, calculator, the room and start time checked.
You've done the work.
