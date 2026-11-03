# TOPIC 6 — Equity Portfolio Management Strategies

<!-- notation:start -->
<details class="notation"><summary>Notation key — what the symbols in this note mean</summary>

| Symbol | Means |
|---|---|
| `E(R)` | Expected return — the probability-weighted average return you expect. E(Rᵢ) for asset i, E(R_p) for a portfolio |
| `Rᵢ, R_p` | A return — Rᵢ on asset i, R_p on the portfolio. The subscript says whose return it is |
| `σ (sigma)` | Standard deviation — how widely returns swing around their average. The standard measure of risk |
| `σ²` | Variance — standard deviation squared. Same information as σ in squared units; σ = √σ² |
| `Σ` | "Add them all up" — a sum over every item (Σᵢ = over every asset i) |
| `U` | Utility — an investor's satisfaction score for a portfolio. Higher is better |
| `A` | Risk-aversion coefficient — how much the investor dislikes risk (≈7 conservative, ≈1 aggressive) |
| `N` | Number of shares bought, or sold short |
| `CAPM` | Capital asset pricing model — E(Rᵢ) = R_f + βᵢ[E(R_M) − R_f] |
| `SMB` | Small Minus Big — the Fama–French size factor (small firms' return minus big firms') |
| `HML` | High Minus Low — the Fama–French value factor (high book-to-market minus low) |
| `PT` | Portfolio turnover — securities sold ÷ assets under management |
| `SS` | Total dollar value of securities sold in the year |
| `AUM` | Assets under management — the (average) dollar size of the fund |
| `TCR` | Tax cost ratio — the share of return lost to tax |
| `TAR` | Tax-adjusted return — the return after tax |
| `PTR` | Pre-tax return |
| `σ(TP)` | Tracking error — standard deviation of (portfolio − benchmark) returns |

[Full EFB335 notation key →](#/EFB335/99-notation-key)

</details>
<!-- notation:end -->

*(Reilly & Brown, Chapter 11)*

Topics 2–4 built the theory of what a portfolio *should* earn; Topic 5 asked whether markets are efficient enough that trying to beat them is pointless. Topic 6 is the practical answer: how real equity money is run. A manager either **tracks an index cheaply (passive)** — and is judged on **tracking error** — or **tries to beat a benchmark after costs and risk (active)**, chasing **alpha** through fundamental, technical or factor strategies (the factors are Topic 4's size, value and momentum, now used as portfolio tilts). Behind both sits the bigger decision of **asset allocation** — integrated, strategic, tactical or insured. Two formulas from this topic are on the official exam sheet (portfolio turnover and the tax cost ratio), and the sample paper spends Q3 and part of Q10 here.

New to this topic? Start with the [plain-English note](#/EFB335/24-plain-english-topic-6-equity-strategies).

Every number below — the deck's industry and fund tables, Exhibit 11.16's tax cost ratios, the hidden Exhibit 11.27's utilities, and every illustrative example — was recomputed in Python. Numbers marked **illustrative** are made up to show the method; they are not from the deck.

> **Four slides are hidden in the lecture deck** — slides 29 (Exhibit 11.9, overreaction returns), 32 (Exhibit 11.12, large vs small caps), 38 (value vs growth, first slide) and 45 (Exhibit 11.27, optimal portfolio selection). The lecturer hid them, so they may not have been presented. They are included below, each marked *hidden*, because they illustrate points on the visible slides. Treat them as lower priority.

---

## 6.1 The investment industry (slides 4–6)

Australian managed funds grew from under $250 billion in 1988 to about $4.7 trillion by late 2023 (ABS 5655.0, chart on slide 4; values read off the chart, so approximate). The growth is driven by **compulsory superannuation**.

**Funds under management, December 2023 (slide 5):**

| Institution | FUM ($bn) | Share of total |
|---|---|---|
| Superannuation funds | 3,797.40 | 85% (85.3%) |
| Public offer (retail) unit trusts | 485.40 | 11% (10.9%) |
| Life insurance corporations | 121.10 | 3% (2.7%) |
| Other managed funds institutions | 48.00 | 1% (1.1%) |
| **Total** | **4,451.90** | **100%** |

Verified: the four lines sum exactly to $4,451.90bn, and each share is that line divided by the **total FUM** (the deck rounds to whole percentages).

> **Slide 4's chart and slide 5's table do not show the same total.** The chart's last bar is near $4.7 trillion; the table's total is $4,451.9bn. They cite different ABS tables (5655.01 vs 5655.09), which may not measure funds under management the same way; the deck doesn't reconcile them. Quote **"super is about 85% of the industry"** — that is the number the summary slide repeats — rather than a precise industry total.

The deck's discussion prompts (slide 6, video activity): name some super funds, compare their investment strategies, and log in to your own super account to see what your **default strategy** is based on. (Defaults are typically a diversified "balanced" or age-based option — that is strategic asset allocation, §6.13.)

> **Exam link — [sample Q3](#/EFB335/18-sample-final-exam/question-3-superannuation-and-asset-allocation-topic-6-4-marks)** (4 marks): why has super grown, and what asset allocation would a super fund use? Part (a) is this section — compulsory contributions are the deck's reason; the worked answer adds preservation, tax concessions and demographics. Part (b) is §6.13 — a diversified multi-asset portfolio run on **strategic** asset allocation.

## 6.2 Passive versus active management (slides 7–9, 21)

| | Passive | Active |
|---|---|---|
| Strategy | Long-term **buy-and-hold**, usually tracking an index | Tries to **outperform a passive benchmark on a risk-adjusted basis** |
| Goal | **Match** market performance | Earn **alpha** |
| Judged on | How well it **tracks the target index** (tracking error) | Risk-adjusted return over the benchmark, **net of costs** |
| Costs | Low trading and management fees | Higher — research, trading, tax |
| Philosophy (Exhibit 11.6) | **Efficient markets hypothesis** → buy and hold, indexing | Fundamental, technical, or factor/attribute/anomaly strategies |

**Exhibit 11.6** (slide 21) is the map for the whole topic:

| Philosophy | Strategies |
|---|---|
| 1. Efficient markets hypothesis (**passive**) | Buy and hold; indexing |
| 2. Fundamental analysis (active) | "Top down" (asset class rotation, sector rotation); "bottom up" (stock under/overvaluation) |
| 3. Technical analysis (active) | Contrarian (overreaction); continuation (price momentum) |
| 4. Factors, attributes and anomalies (active) | Security characteristics (P/E, P/B, earnings momentum, firm size); style factors (value, growth, volatility, quality); calendar (weekend, January) and information (neglect) effects; ESG attributes |

### The money is moving to passive (Exhibit 11.1, slide 8)

US assets, USD billions:

| Strategy | 2022 | 2016 | 2008 | % change 2008→2022 |
|---|---|---|---|---|
| Active equity | 3,107.1 | 2,332.9 | 1,281.7 | 142.4 |
| Passive equity | 3,871.5 | 2,153.4 | 789.1 | **390.6** |
| Active fixed income | 3,758.7 | 3,029.4 | 1,706.0 | 120.3 |
| Passive fixed income | 1,052.5 | 639.4 | 211.2 | **398.3** |

```
% change = (2022 value ÷ 2008 value) − 1          base = the 2008 value

Passive equity:  3,871.5 / 789.1 − 1   = 3.906 → 390.6%
Active equity:   3,107.1 / 1,281.7 − 1 = 1.424 → 142.4%

Passive share of US equity assets:
  2008:  789.1 / (789.1 + 1,281.7)   = 38.1%
  2022:  3,871.5 / (3,871.5 + 3,107.1) = 55.5%
```

All four stated percentages verified. Passive equity was smaller than active in 2016 and larger by 2022. Slide 8's Morningstar panels show the same thing in Australia: through the 2020 pandemic, flows into active funds suffered while passive flows soared, even though passive is still a small share of Australian net assets.

The deck's video prompt (slide 9) asks: *do all active managers outperform, and could you pick the ones that will?* The data answer is in §6.6 (SPIVA).

## 6.3 Building an index portfolio (slide 10)

Three techniques for constructing a passive index portfolio:

| Technique | How | Upside | Downside |
|---|---|---|---|
| **Full replication** | Buy **every** security in the index at its index weight | Closest tracking | Highest transaction costs, especially reinvesting dividends |
| **Sampling** | Buy a **representative sample** of index stocks, by their index weights | Fewer stocks → lower commissions; dividends easier to reinvest | Won't track as closely → some **tracking error** |
| **Mathematical optimisation** (programming) | A program uses **historical price changes and correlations** to pick the mix that **minimises tracking error** | Few holdings, tracking error controlled | Relies on **historical correlations, which may change** → can fail to track |

> **The trade-off is cost against tracking.** Replication = lowest tracking error, highest cost. Sampling and optimisation cut cost and accept some tracking error. An exam answer that names the technique *and* its cost/tracking trade-off gets the mark; naming alone usually doesn't.

## 6.4 Tracking error (slides 11–13)

The passive manager's goal is to **minimise the portfolio's return volatility relative to the index** — that is, to minimise tracking error.

### The formulas (slide 11)

```
Return differential in period t:

  Δt = Σ wi·Rit − Rbt  =  Rpt − Rbt          (sum over i = 1 … N holdings)

  Rpt = return on the managed portfolio in period t
  Rbt = return on the benchmark in period t

Tracking error = standard deviation of Δt, normally annualised:

  TE = σΔ × √P
```

The slide says only "where p = period". **P is the number of return periods per year** — 12 for monthly data, 52 for weekly — the same √m annualising rule as Topics 1–2 (standard deviation scales with the square root of time).

### Worked example (illustrative numbers)

**Step 1 — one period's differential from weights.** A three-stock portfolio, weights 0.5 / 0.3 / 0.2, returns 2% / −1% / 4%; the benchmark returns 1.2%.

```
Rp = 0.5(2.0) + 0.3(−1.0) + 0.2(4.0) = 1.0 − 0.3 + 0.8 = 1.5%
Δ  = 1.5 − 1.2 = +0.3%
```

**Step 2 — six months of differentials.**

| Month | Rp (%) | Rb (%) | Δ = Rp − Rb (%) | Δ² |
|---|---|---|---|---|
| 1 | 1.5 | 1.2 | +0.3 | 0.09 |
| 2 | −0.8 | −0.6 | −0.2 | 0.04 |
| 3 | 2.3 | 2.0 | +0.3 | 0.09 |
| 4 | 0.4 | 0.7 | −0.3 | 0.09 |
| 5 | −1.2 | −1.0 | −0.2 | 0.04 |
| 6 | 1.9 | 1.5 | +0.4 | 0.16 |
| **Sum** | | | **+0.3** | **0.51** |

```
Mean Δ = 0.3 / 6 = 0.05%

Official exam sheet form (Topic 10 line), divide by T, no mean subtracted:
  σ(TP) = √(0.51 / 6) = √0.085 = 0.292% per month
  Annualised:  0.292 × √12 = 0.292 × 3.464 = 1.01% a year

Textbook "standard deviation of Δ" (deviations from the mean 0.05):
  Σ(Δ − 0.05)² = 0.51 − 6(0.05)² = 0.495
  ÷ T     → √(0.495 / 6) = 0.287% a month  → × √12 = 0.99% a year
  ÷ (T−1) → √(0.495 / 5) = 0.315% a month  → × √12 = 1.09% a year
```

> **The deck and the official sheet define tracking error slightly differently — use the sheet in the exam.** Slide 11 says "the standard deviation of Δt" (deviations from the *mean* Δ). The official formula sheet's `σ(TP) = √[(1/T) Σ (Rpt − RBt)²]` (listed under Topic 10) squares the raw Δ, **not** Δ minus its mean, and divides by **T**, not T − 1. The two agree only when the average Δ is zero; here they give 0.292% vs 0.287% (or 0.315% with T − 1). If a question gives the formula, use it as printed. Check with your tutor which form markers expect for a Topic 6 question.

> **Annualise with √P, not P.** A weekly σΔ of 0.5% annualises to 0.5 × √52 = 3.61%, not 0.5 × 52 = 26%. Same trap as Topics 1–2: means scale with time, standard deviations with the square root of time.

### How tracking error grows as you hold fewer stocks (Exhibit 11.2, slide 12)

The expected tracking error between the S&P 500 and a sample of fewer stocks rises slowly at first, then steeply: read off the chart, roughly 1% at 200 stocks, a bit over 2% at 100 stocks and about 4% by around 30–40 stocks. The slide's tip: the construction technique (good sampling or optimisation) should aim for an **actual** tracking error **materially below** these expected figures.

### Tracking error versus active share (Exhibit 11.17, slide 13)

Cremers and Petajisto (2009) classify managers on two axes: **tracking error** (how far returns stray from the index) and **active share** (how different the *holdings* are from the index).

| | Low tracking error | High tracking error |
|---|---|---|
| **High active share** | Diversified stock picks | Concentrated stock picks |
| **Low active share** | Closet indexing | Factor bets |
| **Near zero on both** | Pure indexing | — |

> **"Closet indexer" is the one examiners like.** Low active share *and* low tracking error means the fund charges active fees while holding something close to the index. **Factor bets** are the reverse case: holdings look like the index (low active share) but the returns stray a lot (high tracking error), because a few systematic tilts drive them.

## 6.5 Methods of index investing: index funds and ETFs (slides 14–16)

**Index funds** (slide 14): the manager replicates the index exactly — the exact securities in their exact weights — and only changes positions when the index itself changes. Low trading and management expense ratios make them an **inexpensive way to buy a diversified portfolio**.

**Exchange-traded funds** (slide 15): **depository receipts** giving a pro rata claim on the capital gains and cash flows of securities held on deposit by the issuing financial institution. Examples: **SPDRs** (S&P 500 Depository Receipts), **iShares**, **sector ETFs**. (Slide 15 points to marketindex.com.au for the Australian ETF list and to UniSuper's investment options as an example of a super fund's menu.)

| | Index fund | ETF |
|---|---|---|
| How you trade it | Bought from and redeemed with the manager — **OTC** (summary slide) | **Exchange traded** — bought and sold like a share |
| Short selling | No | **Yes** — can be short sold like common stock |
| Fees | Low | Low |
| Holdings | Replicates the index | Pro rata claim on the deposited index securities |

> **The checkpoint answer is the trading mechanism, not the holdings.** Both are cheap, passive and diversified. The **difference** is that an ETF trades on an exchange during the day (and can be short sold), while an index fund is bought from and sold back to the manager.

Slide 16 (enrichment): Robin Wigglesworth's *Trillions*, on the history of index funds — and its discussion question, *what are the socio-economic risks of widespread passive investing?* — plus the Acquired podcast episode on **Vanguard**, described on the slide as the single largest equity owner of most S&P 500 companies, on behalf of 50 million clients.

## 6.6 Active management, asset allocation and stock selection (slides 17–20)

### The goal and the hurdle (slide 17)

Active management aims to **earn a portfolio return that exceeds a passive benchmark, net of transaction costs, on a risk-adjusted basis**. That requires an appropriate benchmark. Two practical difficulties:

1. **Transaction costs** must be offset by superior performance against the benchmark.
2. **Higher risk-taking** raises the return needed to beat the benchmark on a risk-adjusted basis.

A sense of the fee hurdle, from Exhibit 11.16 (§6.10): the active fund's expense ratio is 0.99% against the index fund's 0.02%, so the active manager must beat the index by **0.97 percentage points a year before tax just to break even on fees**.

### Asset allocation versus stock selection (slide 18)

A managed fund's two main decisions:

- **Asset allocation** — how the portfolio is spread across asset classes (equities, fixed income, cash, real estate).
- **Stock selection** — choosing individual securities **within** each asset class.

**Brinson, Hood and Beebower (1986), "Determinants of Portfolio Performance":** **strategic asset allocation explained 93.6% of the variation in a portfolio's quarterly returns over time.** Security selection and tactical market timing accounted for the remaining 6.4%. The deck notes there is still considerable debate about this.

> **93.6% of the *variation* in returns, not 93.6% of the *return*.** The study says asset allocation explains most of how a portfolio's returns move up and down over time. It does not say allocation *earns* 93.6% of the return, or that stock selection is worthless. Misquoting it as "93.6% of returns come from asset allocation" is a common slip.

> **Exam link — [sample Q10(a)](#/EFB335/18-sample-final-exam/question-10-beating-the-benchmark-topics-6-and-10-4-marks)** (1 mark): two ways a manager can try to beat a benchmark = **asset allocation** (over-weight segments expected to do well) and **security selection** (pick better securities within each segment). Topic 10 measures these with the allocation and selection effects, which *are* on the official sheet.

### Decomposing total return (slide 19)

```
Total actual return = [Expected return] + ["Alpha"]
                    = [Risk-free rate + Risk premium] + ["Alpha"]
```

Worked example (illustrative numbers): RFR = 4%, the stock's beta is 1.2 and the market risk premium is 5%, so the CAPM (Topic 3) gives the risk premium. The portfolio actually returned 11.5%.

```
Risk premium     = 1.2 × 5%     = 6.0%
Expected return  = 4% + 6%      = 10.0%
Alpha            = 11.5% − 10.0% = +1.5%
```

Passive management takes the expected return; active management is the attempt to add the alpha term. Slide 19 doesn't specify how the risk premium is measured; the CAPM is the natural model from Topic 3, and Topic 10's Jensen's alpha is this same decomposition.

### Do active managers beat the index? (slide 20)

- **Exhibit 11.5** — the percentage of US active mutual funds beating the S&P 500 each year, 2001–2022, is **below 50% in almost every year**, with lows below 20%.
- **SPIVA Australia** (S&P Dow Jones Indices, 15-year horizon): **86.94%** of funds underperformed the S&P/ASX 200 and **13.06%** outperformed (the two sum to 100%).

So the slide 9 prompt answers itself: most active managers do *not* outperform over the long run, and the minority who do are hard to identify in advance.

### Slides 22–23

Slide 22 is a title-only placeholder, "Investment Manager response to your questions (part 1)" — the content was presumably delivered in the lecture and is not in the deck. Slide 23, "Where in the world is this stock exchange?", is a photo quiz with no answer given in the deck (the building looks like the Shenzhen Stock Exchange, but that is not stated; not examinable).

## 6.7 Fundamental strategies (slides 24–27)

### Top-down versus bottom-up (slide 24)

| | Top-down | Bottom-up |
|---|---|---|
| Sequence | Country and asset class allocation → sector allocation → individual security selection | Select securities **without** any initial market or sector analysis |
| Looks for | Economic cycles and sector momentum | Equities priced at a **substantial discount** to the manager's valuation-model value (intrinsic value, good company fundamentals) |
| Typical users | Active traders and asset managers | Long-term **value and growth** investors |

### Three generic themes (slide 25)

1. **Time the market** — shift funds between stocks, bonds and T-bills on broad market forecasts (**asset allocation**).
2. **Sector rotation** — shift funds among equity sectors and industries (financials, technology), or among styles (value, growth, large cap, small cap).
3. **Stock picking** — analyse individual issues to find undervalued stocks.

### Sector rotation and the business cycle (Exhibit 11.7, slide 26)

The sector expected to lead at each stage of the cycle, as drawn on the exhibit:

| Stage of the cycle | Sector that tends to excel |
|---|---|
| Late contraction, heading into the trough | **Financial stocks** |
| At the trough / early recovery | **Consumer durables** |
| Expansion | **Capital goods** |
| Near the peak | **Basic industries** |
| After the peak, into contraction | **Consumer staples** |

> **Rotation is about *anticipating* the next phase.** The point of the exhibit is that sector leadership follows a predictable order, so a top-down manager overweights the sector expected to lead in the *coming* phase. Staples (defensive) lead into a slowdown; durables and financials lead out of it.

### The 130/30 strategy (slide 27)

**Long positions up to 130% of the portfolio's original capital and short positions up to 30%.** The short positions create the leverage, **increasing both risk and expected return** relative to the benchmark, and let managers use their research **both ways**: buy stocks they think are undervalued *and* short those they think are overvalued (a long-only fund can at most hold zero of an overvalued stock).

Worked example (illustrative numbers; ignores short-sale costs and interest): $100m of capital. Short $30m of disliked stocks and use the proceeds to buy $30m more of favoured stocks.

```
Long  = 1.30 × 100 = $130m      Short = 0.30 × 100 = $30m
Net market exposure   = 130 − 30 = $100m  (100% — same as a long-only fund)
Gross exposure        = 130 + 30 = $160m

Picks right:  longs +12%, shorted stocks +7%
  130/30:     1.30(12) − 0.30(7) = 15.6 − 2.1 = 13.5%   (long-only: 12%)

Picks wrong:  longs +8%, shorted stocks +13%
  130/30:     1.30(8) − 0.30(13) = 10.4 − 3.9 = 6.5%    (long-only: 8%)

No skill:     everything returns the market's 10%
  130/30:     1.30(10) − 0.30(10) = 10%
```

> **130/30 levers stock-picking skill, not market exposure.** Net exposure is still 100%, so with no skill it returns roughly the market. Good research is amplified (13.5% vs 12%) and bad research is punished harder (6.5% vs 8%) — "increases both risk and expected return" in numbers.

Slide 27 also points to **Buffett's approach** as an example of fundamental investing: economic moat, margin of safety, long-term compounding and key financial metrics.

## 6.8 Technical strategies (slides 28–29)

| | Contrarian | Price momentum |
|---|---|---|
| Belief | Best time to **buy** (sell) is when most investors are most **bearish** (bullish) | Recent price **trends will continue** |
| Based on | **Mean reversion**; the **overreaction hypothesis** | The trend of past prices alone |
| Exhibit 11.6 label | Contrarian (overreaction) | Continuation (price momentum) |

The slide's sidebar names famous technical analysts: **Charles Dow** (created the Dow Jones Industrial Average), **R. N. Elliott** (Elliott Wave theory — fractal price patterns) and **Paul Jones** (predicted the 1987 crash, per the slide).

### Evidence for overreaction (Exhibit 11.9, slide 29, *hidden*)

DeBondt and Thaler (1985), "Does the Stock Market Overreact?": cumulative abnormal returns (CAR) for portfolios of past **losers** and past **winners** in the months after formation. Read off the chart, the **loser portfolio climbs to about +0.19 CAR** by month 34, while the **winner portfolio drifts to about −0.05**, a spread of roughly 0.24. Past losers outperform past winners — the contrarian's case.

> **Contrarian and momentum predict opposite things, and both have evidence.** Contrarian strategies bet on **reversal** (over the multi-year horizon of DeBondt–Thaler); momentum bets on **continuation**. Don't write that one "disproves" the other. Both are also anomalies against weak-form efficiency (Topic 5), since they trade on past prices alone.

## 6.9 Factors, attributes and anomalies (slides 30–33)

### Factor-based investing (slide 30)

The manager builds portfolios that **emphasise characteristics** — **firm size, relative valuation, low return volatility, momentum, company quality** — believed to produce higher risk-adjusted returns than a market-cap-weighted benchmark. The **risk premia** on these characteristic portfolios (**factors**) are meant to give **superior returns with better diversification** than a traditional passive index fund. This is Topic 4's Fama–French logic (SMB = size, HML = value, plus momentum) used to *build* portfolios rather than to explain returns. The summary slide calls these factor **"tilts"**.

**Exhibit 11.11 — historical performance of equity factors** (slide 31; Blitz 2015). Read off the chart (approximate): the **market** sits at about 15% risk and 5% return. **Low-volatility** earned slightly more than the market (about 5%) at much lower risk (about 12.5%). **Quality** (about 6.5%), **value** (about 7%), **momentum** (about 8%) and a **multifactor** blend (about 7% at about 14% risk) all sit above the line through the market portfolio — higher return per unit of risk than the cap-weighted market.

**Exhibit 11.12 — large vs small caps, 1991–2022** (slide 32, *hidden*; rolling 12-month Russell 1000 vs Russell 2000 returns). Panel A: leadership **rotates** — large caps beat small caps by up to about 30% (late 1990s), small caps beat large by up to about 27% (around 2000), and the sign flips repeatedly. Panel B: the risk difference is **almost always negative** — small caps are consistently more volatile.

> **A factor premium is not a free lunch every year.** Exhibit 11.12 shows the size factor's sign swinging for years at a time. Factor tilts are expected to pay *on average over long horizons*, with long stretches of underperformance in between.

### Other factors, attributes and anomalies (slide 33)

| Category | Examples on the slide | What the strategy does |
|---|---|---|
| **Earnings momentum** | Actual EPS minus expected EPS | Buy stocks with **accelerating earnings**; sell (or short) stocks with **disappointing** earnings |
| **Calendar-related anomalies** | The **weekend effect**; the **January effect** | Trade around predictable calendar patterns |
| **Firm-specific attributes** | **Firm size**; **P/E** and **P/BV** ratios | Tilt toward small firms or low P/E / low P/BV (value) stocks |

> Slide 33 cites **Exhibit 11.13**, but the exhibit itself is not in the deck. Use the textbook if you want the data behind it.

> **Earnings momentum is not price momentum.** Earnings momentum is fundamental (actual vs expected EPS, an earnings surprise); price momentum (§6.8) is technical (past prices only). The deck files them under different headings.

## 6.10 Tax efficiency (slides 34–36)

Active managers in particular must weigh **tax** when deciding whether to sell a stock that has risen:

- Selling at a profit **crystallises capital gains tax**.
- The replacement ("reinvestment") security must earn a superior return **large enough to make up for the tax paid**.
- How large depends on the **expected holding period** and the **cost basis** (the size of the capital gain) of the original security.

### The two measures (slide 35) — both on the official exam sheet

```
Portfolio turnover:
  PT  = SS / AUM
        SS  = total dollar value of securities SOLD in the year
        AUM = AVERAGE dollar value of the assets

Tax cost ratio:
  TCR = [1 − (1 + TAR) / (1 + PTR)] × 100
        TAR = tax-adjusted (after-tax) return
        PTR = pretax return
```

**Turnover** measures how much trading the fund does; high-turnover portfolios regularly **crystallise capital gains (and losses)** for investors. The **tax cost ratio** measures the tax "cost" investors bear **on top of portfolio fees**, for comparing managers with different turnover.

**Turnover, worked (illustrative numbers):** a fund starts the year with $140m and ends with $160m, selling $45m of securities during the year.

```
AUM = (140 + 160) / 2 = $150m          (average, not ending, assets)
PT  = 45 / 150        = 0.30 = 30%
```

### Exhibit 11.16 — passive versus active, all verified (slide 36)

| | Fidelity 500 Index (FXAIX) | American Century Disciplined Equity Growth (ADSIX) |
|---|---|---|
| Management approach | Passive | Active |
| Expense ratio (%) | 0.02 | 0.99 |
| Portfolio turnover (%) | 2 | 205 |
| 5-year average pretax return (%) | 9.41 | 6.75 |
| Tax-adjusted return (%) | 8.90 | 3.35 |
| **Tax cost ratio (%)** | **0.47** | **3.19** |
| 3-year average pretax return (%) | 7.65 | 4.16 |
| Tax-adjusted return (%) | 7.23 | 0.82 |
| **Tax cost ratio (%)** | **0.39** | **3.21** |

```
5-year, passive:  TCR = [1 − 1.0890 / 1.0941] × 100 = [1 − 0.9953] × 100 = 0.47%
5-year, active:   TCR = [1 − 1.0335 / 1.0675] × 100 = [1 − 0.9681] × 100 = 3.19%
3-year, passive:  TCR = [1 − 1.0723 / 1.0765] × 100 = 0.39%
3-year, active:   TCR = [1 − 1.0082 / 1.0416] × 100 = 3.21%
```

All four stated tax cost ratios reproduce exactly. What the exhibit shows:

- The active fund turns its portfolio over **205%** a year against the index fund's **2%**. As a rough rule of thumb, average holding period ≈ 1 ÷ turnover: about 0.49 years (about 6 months) for the active fund, against about 50 years for the index fund.
- Over 5 years the active fund trailed **before tax** by 9.41 − 6.75 = **2.66 points**; **after tax** the gap widens to 8.90 − 3.35 = **5.55 points**. Over 3 years: 3.49 points before tax, 6.41 after.
- Turnover drives tax: the active fund's TCR is about 6.8 times the index fund's over 5 years (3.19 ÷ 0.47) and about 8.2 times over 3 years (3.21 ÷ 0.39).

> **Use decimals, and divide — don't subtract.** `1 − 1.0335/1.0675 = 3.19%`. Simply subtracting the returns (6.75 − 3.35 = 3.40) overstates it, because TCR is measured relative to (1 + PTR). And plugging whole percentages into the formula — `1 − (1 + 8.90)/(1 + 9.41)` — gives 4.90% for the index fund, which is nonsense. Convert 8.90% to 0.0890 first.

> **The official sheet prints TCR without the × 100**: `TCR = [1 − (1 + TAR)/(1 + PTR)]`. It's the same quantity, as a decimal (0.0319) instead of a percentage (3.19%). Either is fine if you label it.

> **Exam link — [official formula sheet](#/EFB335/17-official-exam-formula-sheet).** **PT = SS/AUM** and **TCR** are both printed on the sheet — you need to know what each symbol means and the direction of the effect (higher turnover → higher TCR → active funds generally have a **higher** tax cost ratio than passive ones; that is checkpoint Q4). The tracking error formula on the sheet appears in its Topic 10 form, σ(TP); the **√P annualisation and the Δt definition are not on the sheet — memorise them.**

## 6.11 Value versus growth (slides 38–39)

**Slide 38 (*hidden*):**

- A **growth** investor focuses on the current and future economic **"story"** of a company, with less regard to share valuation.
- A **value** investor focuses on the **share price**, anticipating a market correction and possibly improving fundamentals.
- Value stocks have generally offered **somewhat higher returns** than growth stocks, but **not consistently** from one period to the next.

**Slide 39 — the P/E lens.** Write price as `P = EPS × (P/E)`:

| | Value investor | Growth investor |
|---|---|---|
| Focus | The **price** component | **EPS** and its economic determinants |
| Current earnings | Doesn't care much | Looks for **rapid EPS growth** |
| Assumption about P/E | P/E is **below its natural level** (will rise) | P/E stays **constant** |
| Source of gain | P/E re-rates upward | EPS grows |

Worked example (illustrative numbers):

```
P = EPS × P/E

Value:   EPS $2.00 flat; P/E re-rates from 10 to its "natural" 14
         $2.00 × 10 = $20.00  →  $2.00 × 14 = $28.00     gain 40%

Growth:  P/E constant at 25; EPS grows 25% from $2.00 to $2.50
         $2.00 × 25 = $50.00  →  $2.50 × 25 = $62.50     gain 25%
```

> **Value bets on the multiple; growth bets on the earnings.** If an exam question says the investor "assumes a constant P/E", it is describing a **growth** investor; "P/E below its natural level" is **value**. The HML factor from Topic 4 is the value-minus-growth return.

## 6.12 Style analysis (slides 40–41)

**Style analysis** explains the variability of a portfolio's observed returns in terms of the returns on a set of **benchmark portfolios**, each capturing one security characteristic. It finds the **combination of long positions in passive indexes that best mimics the portfolio's past performance** — i.e., what the manager *actually* does, whatever the label says.

The simplest version is a **style grid** on two dimensions: **firm size** (large, mid, small cap) and **relative value** (value, blend, growth).

**Exhibit 11.23** (slide 41):

- **Panel A — the standard 3 × 3 style grid**, with an example "Manager A" plotted in the **small-cap value** box.
- **Panel B — where popular indexes sit.** The S&P 500, Russell 1000 (R1), Russell 3000 (R3) and Wilshire 5000 are **large blend**. R1V/R3V are large value and R1G/R3G large growth. The Russell Midcap and S&P Midcap are **mid blend**, with RMV (mid value) and RMG (mid growth) either side. R2 (Russell 2000) is small blend, R2V small value and R2G small growth. The **NASDAQ** sits on the **growth** side, around the mid/small boundary.

> **Style analysis uses *returns*, not holdings.** It regresses the fund's returns on style-index returns to infer the style mix. This is how you catch **style drift** (a "value" fund that has quietly become growth) and judge a manager against the *right* benchmark — a small-cap value manager should not be measured against the S&P 500.

## 6.13 Asset allocation strategies (slides 42–48)

An equity portfolio is **part of the investor's overall portfolio**, so the manager must set the right mix of asset categories across the whole thing. Four general strategies:

### Integrated asset allocation (slides 43–45)

Separately examines **(1) capital market conditions** and **(2) the investor's objectives and constraints**, then combines them into the asset mix that best meets the investor's needs.

**Exhibit 11.26** (slide 44) — the flow chart:

```
Capital market side                    Investor side
C1  Capital market conditions          I1  Investor's assets, liabilities, net worth
C2  Prediction procedure               I2  Investor's risk tolerance function
C3  Expected returns, risks,           I3  Investor's risk tolerance
    correlations
            └──────────────┬──────────────┘
                     M1  Optimiser
                     M2  Investor's asset mix
                     M3  Returns  → feed back into C1 and I1
```

The feedback loop matters: realised returns change both market conditions (C1) and the investor's wealth (I1), so the mix is revisited continuously.

**Exhibit 11.27 — optimal portfolio selection (slide 45, *hidden*).** Three efficient portfolios (step C3) and two investors' risk tolerances (step I3):

| Portfolio | Stock | Bond | ER | σ² |
|---|---|---|---|---|
| A | 20% | 80% | 7 | 7 |
| B | 50% | 50% | 8 | 13 |
| C | 80% | 20% | 9 | 20 |

Risk tolerance RT: investor 1 = **5** (less tolerant), investor 2 = **40** (more tolerant). The exhibit's expected-utility results (step M2) are reproduced exactly by:

```
EU = ER − σ² / RT

Investor 1 (RT = 5):    A: 7 − 7/5  = 5.6    B: 8 − 13/5  = 5.4    C: 9 − 20/5  = 5.0   → choose A
Investor 2 (RT = 40):   A: 7 − 7/40 = 6.8    B: 8 − 13/40 = 7.7    C: 9 − 20/40 = 8.5   → choose C
                         (6.825)               (7.675)
```

The cautious investor picks the 20/80 portfolio; the tolerant one picks 80/20.

> **The EU formula is not on the slide.** It is inferred: `EU = ER − σ²/RT` reproduces all six numbers in the exhibit. It is the same idea as Topic 2's utility `U = E(r) − ½Aσ²` — return minus a risk penalty that shrinks as tolerance rises — but scaled differently, so don't mix the two. The exhibit prints σ² with a "%" sign; treat ER and σ² as the plain numbers shown. The slide is hidden; if it's examined, check the form with your tutor.

> **Exam link — [sample Q10(c)](#/EFB335/18-sample-final-exam/question-10-beating-the-benchmark-topics-6-and-10-4-marks)** (1 mark): "integrated asset allocation" = combine **capital market conditions** with the **investor's objectives and constraints** to set the asset mix, then monitor both and feed changes back. The other three strategies are special cases, depending on which inputs are allowed to change.

### Strategic asset allocation (slide 46)

Sets the **long-term policy asset weights**. Long-term average returns, risks and covariances stand in for future capital market results; **efficient frontiers** are generated from this history (Topic 2), and the investor picks the mix that suits their planning horizon. The result is a **constant-mix** allocation with **periodic rebalancing** back to the policy weights.

### Tactical asset allocation (slide 47)

The manager **frequently adjusts the asset class mix** to exploit changing market conditions. Adjustments are driven **solely by perceived changes in the relative values** of the asset classes (investor objectives are assumed constant), often on the premise of **mean reversion** — an inherently **contrarian** method.

### Insured asset allocation (slide 48)

Accepts **frequent adjustments** caused by price changes. It assumes expected market returns and risks are **constant**, while the **investor's objectives and constraints change as their wealth changes**. It involves only **two assets** (e.g. shares and T-bills):

- As stock prices **rise**, the allocation **increases** the stock component.
- As stock prices **fall**, the stock component falls and the T-bill component rises.

### The four side by side

| Strategy | Capital market expectations | Investor objectives / risk tolerance | Response when shares rise |
|---|---|---|---|
| **Integrated** | Monitored and can change | Monitored and can change | Re-optimise on both inputs |
| **Strategic** | Long-run averages, held constant | Fixed for the planning horizon | **Sell** shares back to the policy weight (rebalance) |
| **Tactical** | Change — relative value, mean reversion | Assumed constant | **Sell** shares if the rally makes them look expensive relative to other assets (contrarian) |
| **Insured** | Assumed constant | Change with wealth | **Buy more** shares |

Worked example — what "rebalancing" means (illustrative numbers): a $100 portfolio with a 60/40 shares/bonds policy. Shares rise 20%, bonds are flat.

```
Shares 60 × 1.20 = 72      Bonds 40      Total 112
Share weight     = 72 / 112 = 64.3%   (drifted above 60%)

Strategic: rebalance to 60% → target shares 0.60 × 112 = 67.2 → SELL 72 − 67.2 = 4.8 of shares
Insured:   wealth has risen above the floor → hold MORE shares, not fewer

If shares had instead fallen 20%: 48 / 88 = 54.5%
Strategic: BUY 0.60 × 88 − 48 = 4.8 of shares
Insured:   cut shares, move toward T-bills
```

> **Strategic and insured move in opposite directions after a price move.** Strategic (constant-mix) rebalancing sells winners and buys losers. Insured allocation buys winners and sells losers, to protect a wealth floor. Tactical is contrarian like strategic, but it acts on *perceived mispricing*, not on a fixed policy weight. A question that says "as share prices rise the fund increases its share allocation" is describing **insured** allocation.

## Summary

- **Industry:** Australian managed funds grew mainly because of compulsory super; super is **about 85%** of the $4,451.9bn industry (slide 5).
- **Passive** = buy-and-hold or index tracking, judged on **tracking error**. **Active** = beat a passive benchmark on a risk-adjusted basis, **net of costs**, through fundamental, technical or factor strategies. Money is moving to passive (US passive equity +390.6% from 2008 to 2022), and most active funds underperform (SPIVA: 86.94% of Australian funds over 15 years).
- **Index construction:** full replication (closest tracking, highest cost), sampling (cheaper, some tracking error), optimisation (relies on historical correlations).
- **Tracking error:** `Δt = Rpt − Rbt`; TE = σ of Δ, annualised `× √P`. The exam sheet's σ(TP) uses 1/T and no mean.
- **Index funds vs ETFs:** both cheap; ETFs trade on an exchange and can be short sold, index funds are bought from the manager (OTC).
- **Return = RFR + risk premium + alpha.** Brinson et al.: strategic asset allocation explains **93.6% of the variation** in returns.
- **Fundamental:** top-down vs bottom-up; market timing, sector rotation (Exhibit 11.7), stock picking; **130/30** levers stock-picking skill both ways.
- **Technical:** contrarian (mean reversion, overreaction — DeBondt–Thaler) vs price momentum (continuation).
- **Factors:** size, value, low volatility, momentum, quality — tilts to earn factor premia; plus earnings momentum, calendar anomalies and firm attributes.
- **Tax:** `PT = SS/AUM`, `TCR = 1 − (1+TAR)/(1+PTR)`; high turnover → higher TCR (205% turnover → 3.19% TCR vs 2% → 0.47%).
- **Value vs growth:** value bets on the P/E rising to normal; growth bets on EPS growth at a constant P/E. **Style analysis** maps a manager onto the size × value/growth grid using returns.
- **Asset allocation:** **integrated** (market conditions + investor needs), **strategic** (long-run policy mix, rebalanced), **tactical** (frequent contrarian shifts), **insured** (two assets, buy as prices rise).

## ✅ Checkpoint

*(The deck's checkpoint slide 37, answered, plus three exam-style checks.)*

<details><summary>1. Fundamental, technical and factor-based investing are examples of _____ portfolio management</summary>

**Active** portfolio management — each tries to beat a passive benchmark on a risk-adjusted basis (Exhibit 11.6). Passive management rests on the efficient markets hypothesis: buy and hold, indexing.

</details>

<details><summary>2. The difference between an indexed fund and an ETF is that ___________</summary>

**An ETF is traded on a stock exchange** — bought and sold (and short sold) like a share during the day — whereas an index fund is bought from and redeemed with the fund manager (over the counter). Both are low-fee passive vehicles.

</details>

<details><summary>3. Tracking error is measured as ____________</summary>

**The standard deviation of the return differential** `Δt = Rpt − Rbt` (portfolio minus benchmark return), normally **annualised**: `TE = σΔ × √P`. On the official exam sheet: `σ(TP) = √[(1/T) Σ (Rpt − RBt)²]`.

</details>

<details><summary>4. The tax cost ratio of an active fund is generally _______ that of a passive fund</summary>

**Higher than.** Active funds turn over more of their portfolio, which crystallises capital gains sooner. Exhibit 11.16: 205% turnover → TCR 3.19%, against 2% turnover → TCR 0.47% for the index fund.

</details>

<details><summary>5. A fund's share weight drifts up after a rally and the manager sells shares back to 60%. Which asset allocation strategy? Which strategy would buy more shares instead?</summary>

Selling back to a fixed policy weight is **strategic** (constant-mix) asset allocation with periodic rebalancing. Buying more shares as prices rise is **insured** asset allocation.

</details>

<details><summary>6. A fund has low active share and low tracking error, but charges active fees. What is it called?</summary>

A **closet indexer** (Exhibit 11.17). Its holdings and returns are close to the index, so investors are paying active fees for near-passive exposure.

</details>

<details><summary>7. Brinson, Hood and Beebower found asset allocation explained 93.6% of what?</summary>

**93.6% of the variation in a portfolio's quarterly returns over time** — not 93.6% of the return itself. Security selection and tactical timing explained the remaining 6.4%.

</details>
