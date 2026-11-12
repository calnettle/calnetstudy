# The 30-Minute Cram: Every Topic, Every Formula

**For the night before the final (Fri 13 Nov 2026, 8:30am).** One read,
top to bottom, about 30 minutes. Every number below was re-checked in
Python on 12 Nov.

| Minutes | Read |
|---|---|
| 0–2 | The exam itself |
| 2–7 | Topics 1–4 (4 marks on the sample paper) |
| 7–10 | Topic 5 · Market efficiency |
| 10–13 | Topic 6 · Equity strategies |
| 13–16 | Topic 7 · Bonds |
| 16–20 | Topic 8 · Derivatives |
| 20–23 | Topic 9 · Hedge funds and alternatives |
| 23–26 | Topic 10 · Performance evaluation |
| 26–29 | Likely written questions: one-line answer skeletons |
| 29–30 | The ten traps, then stop |

Each topic section ends with **"Also know"**: the points that turn a
2-mark answer into a 4-mark one.

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

**Also know (Topics 1–4, in words):**
- **CAPM assumptions:** investors hold Markowitz-efficient portfolios,
  can borrow and lend at the risk-free rate, share the same expectations
  and one-period horizon, no taxes or transaction costs, no inflation,
  markets in equilibrium. Relaxing them (different borrowing and lending
  rates, costs, taxes) turns the SML into a band, not a line.
- **Critiques of the CAPM:** beta is unstable over time; the market
  portfolio can't be observed, so every test uses a proxy (**Roll's
  benchmark error**); empirically the SML is flatter than predicted and
  size and value explain returns beta doesn't.
- **APT vs CAPM:** APT needs fewer assumptions (no market portfolio, no
  mean-variance investors, just no arbitrage), allows several factors,
  but doesn't say what the factors are. Shanken: it may not be testable.
- **Separation theorem:** everyone holds the same risky portfolio M;
  risk preference only decides how much to lend or borrow at Rf.
- **Systematic vs unsystematic risk:** diversification removes
  unsystematic (firm-specific) risk; only systematic (market) risk is
  priced, which is why beta, not σ, sets a single stock's required return.

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

**Also know:**
- **Why markets should be efficient:** many profit-seeking investors
  analyse every security independently; new information arrives at
  random; prices adjust quickly as they all trade on it.
- **Calendar effects:** Monday returns are negative (about −33.5% a
  year annualised in the deck); the **January effect** is mostly small
  firms (8.06% vs 0.88% a month, 1941–81), explained by **tax-loss
  selling** in December and window dressing.
- **Momentum vs reversals:** winners keep winning over **1–12 months**
  (underreaction, disposition effect, slow diffusion of news); then
  reverse over **3–5 years** (overreaction, overconfidence).
  Fama–French explains reversals but **not momentum**.
- **Semi-strong return prediction:** dividend yield, default and term
  spreads predict market returns over time; across stocks, low P/E,
  small size, neglected firms and high book-to-market earn more.
  **Post-earnings-announcement drift**: over half the price move comes
  *after* a surprise earnings announcement.
- **Strong form:** insiders earn abnormal returns, especially when
  buying. Analysts add some value through **changes and upgrades** in
  recommendations. Professional fund managers mostly don't beat the
  market after costs: weak support for strong form there.
- **Implications:** technical analysis has little value after costs.
  Fundamental analysis pays only with **superior** insight, ideally on
  neglected firms. Without superior analysts, go **passive**: match the
  client's risk, diversify globally, rebalance, keep costs low.

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

**Also know:**
- **The industry:** super is about **85%** of Australia's managed funds.
  Money keeps moving to passive, and most active funds lag: SPIVA found
  **86.94%** of Australian funds underperformed over 15 years.
- **Tracking error:** the difference each period is
  Δ = R_portfolio − R_benchmark. The deck annualises its σ with **√P**
  (P = 12 monthly, 52 weekly). Fewer stocks held → higher tracking error.
- **Index funds vs ETFs:** both cheap and passive. ETFs **trade on an
  exchange all day and can be short sold**; index funds are bought from
  and redeemed with the manager.
- **Active returns:** actual return = Rf + risk premium + **alpha**.
  Alpha is the only part the manager earns by skill.
- **Fundamental strategies:** top-down (economy → sector → stock) vs
  bottom-up (stock first). Market timing, **sector rotation** through
  the business cycle, stock picking. **130/30**: long 130%, short 30%,
  net 100% market exposure, so stock-picking skill works on both sides.
- **Technical strategies:** **contrarian** (bet on overreaction and mean
  reversion, DeBondt–Thaler) vs **momentum** (bet on continuation).
- **Factor investing:** deliberate tilts to size, value, low volatility,
  momentum and quality to earn their premia ("smart beta").

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

**Also know:**
- **Price and yield move inversely, and the curve is convex.** YTM below
  the coupon → bond trades at a **premium**; above the coupon → a
  **discount**; equal → par.
- **Rate-sensitivity rules:** longer maturity raises sensitivity, but at
  a diminishing rate; lower coupon raises it; lower starting yield raises
  it; a fall in rates moves the price **more** than an equal rise. So
  expect rates to fall → buy sensitivity (long, low-coupon); expect a
  rise → sell it.
- **Bond style** = credit quality × interest-rate sensitivity (duration).
- **Bond swaps:** **pure yield pickup** (swap into a higher-yielding
  bond), **substitution** (swap into an identical bond that is
  temporarily cheaper), **tax swap** (realise a loss to offset gains).
  They all assume some market inefficiency.
- **Credit spreads widen in recessions** and narrow in expansions.
- **Basis point value** BPV = ModD × 0.0001 × Price: the dollar change
  for a 1 bp move.
- **Immunisation** works because a rate rise lowers the bond's price
  but raises the reinvestment income, and the two cancel when duration
  equals the horizon. Duration drifts as time passes and rates move, so
  it has to be **rebalanced**. **Horizon matching** = cash-match the
  near years, immunise the rest.

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

**Also know:**
- **Three uses of derivatives:** hedging, speculation, arbitrage.
- **Futures vs forwards:** futures are standardised, exchange-traded,
  marked to market daily, with a clearing house removing counterparty
  risk; forwards are customised and over the counter. Both are
  obligations; options are a **right** for the holder and an
  **obligation** for the writer.
- **Hedging a share portfolio with futures:** **sell** index futures
  (number from the hedge ratio). It locks in the **futures price** (the
  deck's 8,109, below the 8,131.30 spot), not today's index, and gives up
  all the upside. A protective put keeps the upside but costs premium.
- **Buying in later:** a **long call** caps the cost of buying shares
  later at K + premium (deck: 8,219). **Selling a put** earns the premium
  and buys on a dip at K − premium (deck: 8,055) but leaves you exposed
  if the market rallies.
- **Short positions** (written calls, puts, straddles, strangles) have
  the premium as their best case and **unlimited or large losses**.
- **Straddle vs strangle:** both bet on a big move. The strangle's
  out-of-the-money options are cheaper (deck: $39 vs $92), so it needs a
  bigger move to pay. Strip = 2 puts + 1 call (bearish lean); strap =
  2 calls + 1 put (bullish lean).
- **Butterfly:** buy one low and one high strike, **sell two** in the
  middle. Small fixed maximum loss, profits if the price stays near the
  middle strike.

**Profit table method (works for any strategy):** pick price ranges
split at each strike; for each leg write its payoff (long +, short −);
add them; then add premiums received and subtract premiums paid. State
the maximum gain, maximum loss and break-even(s).

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

**Also know:**
- **What makes an asset "alternative":** outside shares, bonds and cash;
  needs large capital; illiquid; hard to value; open mainly to
  professional or wholesale investors; usually a **limited partnership**
  (the manager is the general partner, investors are limited partners).
- **Why PE returns should be high:** illiquidity, poor diversification,
  low survival rates. **Why they may not be:** entrepreneurs accept less
  (overconfidence, love of control, a taste for lottery-like payoffs),
  and returns are hard to measure (stale, smoothed valuations).
- **Australian private capital** grew from $29.8bn (2010) to $139.0bn
  (2023); family offices are now the biggest investor type.
- **VC stages:** seed → early stage → expansion → pre-IPO, with an IPO
  or trade sale as the exit. Raw returns 30–45% a year with betas
  1.4–1.7 come to about **−7.1% risk-adjusted**.
- **Hedge fund strategy families:** **equity-based** (long/short, market
  neutral, short bias), **arbitrage-based** (merger arbitrage,
  convertible arbitrage, fixed-income arbitrage), **opportunistic**
  (global macro, event-driven, distressed), **multi-strategy** (fund of
  funds).
- **Merger arbitrage:** after a takeover is announced, buy the target
  (and often short the bidder). You earn the gap between the price and
  the offer if the deal completes; you lose if it fails.
- **LTCM (1998) lessons:** too much **leverage**, positions too big for
  the market (**capacity**), and no way out (**exit**) when spreads
  widened instead of converging.
- **The verdict:** no evidence of superior risk-adjusted returns on
  average, but low correlations mean a **10–20% allocation** can improve
  a portfolio's efficiency.

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

**Also know:**
- **Why evaluate:** to judge whether a manager earned their fees.
  Investors chase last year's winners (flows follow past returns), even
  though **persistence is weak for winners and stronger for losers**, so
  a bad record is the more reliable signal.
- **Peer-group comparisons** (quartile charts) are easy to read but have
  **no risk adjustment** and funds in a group may not be comparable.
- **Sharpe's link to the CML:** the market's Sharpe ratio is the CML's
  slope; a fund above the CML beats the market on total risk. **Treynor
  links to the SML** the same way, and Jensen's alpha is the vertical
  distance above the SML. Alpha and Treynor always agree on above or
  below the SML.
- **Jensen's alpha as a regression:** (R_p − Rf) = α + β(R_m − Rf) + e.
  Alpha is the intercept, so you can **test** whether it is
  significantly different from zero, and extend it to multifactor models
  (Fama–French alpha).
- **Information ratio:** an IR of **1.0 or more is rare**.
  It rewards **consistency** of beating the benchmark, not just size.
- **Sortino** penalises only the downside: the deck's example has Sharpe
  preferring fund A but Sortino preferring B, because B's volatility is
  mostly on the upside.
- **What a good manager needs:** superior **timing** or superior
  **selection**, while staying **fully diversified**.
- **Presentation standards (PPS/GIPS):** total return, **time-weighted**
  (removes client deposits and withdrawals), valued at least monthly and
  **geometrically linked**, composites include **all fee-paying
  accounts** (no cherry-picking), after trading costs, every year shown.
- **The evidence:** Jensen (1968) found an average alpha of **−1.1%**;
  more recent studies are mixed and depend on the period, benchmark and
  fees.

---

## Likely Written Questions: Answer Skeletons

One line each. Each bullet is roughly one mark.

**"Explain the difference between passive and active management."**
Passive tracks an index at low cost, judged on tracking error · Active
tries to beat the benchmark after costs through selection or timing ·
Active costs more (fees, turnover, tax) · Evidence: most active funds
underperform (SPIVA).

**"Why might Sharpe and Treynor rank funds differently?"**
Sharpe uses total risk, Treynor only beta · They agree for
well-diversified funds · A poorly diversified fund has unsystematic risk
that Sharpe penalises and Treynor ignores · Use Sharpe if it's the whole
portfolio, Treynor if it's one part.

**"What is immunisation and why does it need rebalancing?"**
Set portfolio duration equal to the investment horizon · Price risk and
reinvestment risk then offset · Duration falls more slowly than time
passes and changes with rates · So rebalance to keep duration = horizon.

**"How can a fund manager use options to protect a portfolio?"**
Buy index puts (protective put) · Floor = strike − premium, keeps upside
· Cheaper: a collar, selling a call to fund the put, which caps the
upside · Or sell index futures, which locks in a price but gives up all
upside.

**"What is the high-water mark and why do investors want it?"**
Performance fee charged only on gains above the fund's previous peak ·
Stops the manager earning fees twice for recovering the same losses ·
Aligns the manager with the investor · But it can push a manager far
below the mark to take extra risk or close the fund.

**"Discuss the problems with measuring hedge fund performance."**
Survivorship bias · Backfill bias · Voluntary, lagged reporting ·
Illiquid assets with smoothed prices understate σ · Non-normal returns
(option-like), so Sharpe misleads · Fees.

**"What is an event study and what would an efficient market show?"**
Abnormal returns AR = R − R_m around an announcement · Averaged across
firms (AAR), cumulated over days (CAR) · Efficient: the full reaction on
day 0, flat after · Drift after the announcement is evidence against
semi-strong.

**"What is tracking error and how do index managers keep it low?"**
The standard deviation of portfolio-minus-benchmark returns · Full
replication gives the lowest, at the highest cost · Sampling or
optimisation cuts cost but adds tracking error · Other causes: fees,
cash drag (fixed with futures), rebalancing costs.

**"Why is the choice of benchmark important?"**
Performance is always relative to it · The wrong proxy changes β and
the SML (Roll's benchmark error), so alpha and Treynor can flip · A good
benchmark is unambiguous, investable, measurable, appropriate, current
and specified in advance.

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
