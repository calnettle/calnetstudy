# The Official Exam Formula Sheet — What You Get, and What You Don't

<!-- notation:start -->
<details class="notation"><summary>Notation key — what the symbols in this note mean</summary>

| Symbol | Means |
|---|---|
| `E(R)` | Expected return — the probability-weighted average return you expect. E(Rᵢ) for asset i, E(R_p) for a portfolio |
| `Rᵢ, R_p` | A return — Rᵢ on asset i, R_p on the portfolio. The subscript says whose return it is |
| `RFR, R_f` | Risk-free rate — the return on a riskless asset such as a government bill |
| `R_M, R_m` | Market return — the return on the whole market (e.g. the ASX 200 as a proxy) |
| `σ (sigma)` | Standard deviation — how widely returns swing around their average. The standard measure of risk |
| `σ²` | Variance — standard deviation squared. Same information as σ in squared units; σ = √σ² |
| `σ₁, σᵢ` | Standard deviation of one asset (asset 1, asset i …) |
| `σ_p, σ_port` | Standard deviation of the whole portfolio |
| `σ_M` | Standard deviation of the market |
| `m` | Periods per year — 12 monthly, 52 weekly, 252 trading days |
| `n` | Number of items — observations, periods or assets, depending on the formula |
| `Σ` | "Add them all up" — a sum over every item (Σᵢ = over every asset i) |
| `w, wᵢ` | Weight — the fraction of the portfolio held in asset i. Weights add up to 1 |
| `Cov(i,j)` | Covariance — do two assets move together (+) or in opposite directions (−)? Cov(i,i) is just σᵢ² |
| `U` | Utility — an investor's satisfaction score for a portfolio. Higher is better |
| `β (beta)` | Beta — how sensitive an asset is to market moves; its systematic risk. β = 1 moves with the market |
| `α (alpha)` | Alpha — the return above (or below) what the CAPM says the risk deserves |
| `CML` | Capital market line — the best mixes of the risk-free asset and the market portfolio, priced on total risk σ |
| `SML` | Security market line — the CAPM as a line: required return against beta |
| `CAPM` | Capital asset pricing model — E(Rᵢ) = R_f + βᵢ[E(R_M) − R_f] |
| `APT` | Arbitrage pricing theory — expected return explained by several risk factors, not just the market |
| `PT` | Portfolio turnover — securities sold ÷ assets under management |
| `SS` | Total dollar value of securities sold in the year |
| `AUM` | Assets under management — the (average) dollar size of the fund |
| `TCR` | Tax cost ratio — the share of return lost to tax |
| `TAR` | Tax-adjusted return — the return after tax |
| `PTR` | Pre-tax return |
| `S_T` | Share price at expiry (time T) |
| `X` | Strike (exercise) price of the option |
| `ATP` | Average tracking performance — average of (portfolio − benchmark) returns |
| `AATP` | Average absolute tracking performance — the same, ignoring sign |
| `σ(TP)` | Tracking error — standard deviation of (portfolio − benchmark) returns |
| `R_pt, R_Bt` | Portfolio and benchmark return in period t |
| `SI (Sharpe)` | Sharpe index — (R_p − R_f) ÷ σ_p: excess return per unit of total risk |
| `TI (Treynor)` | Treynor index — (R_p − R_f) ÷ β_p: excess return per unit of systematic risk |
| `IR` | Information ratio — active return ÷ tracking error |
| `W_pi, W_bi` | Weight in segment i — portfolio (p) vs benchmark (b) |
| `R_pi, R_bi` | Return in segment i — portfolio (p) vs benchmark (b) |
| `EP, BP, Div, Cap.Dist` | Fund return inputs — ending price, beginning price, dividends paid, capital-gain distributions |

[Full EFB335 notation key →](#/EFB335/99-notation-key)

</details>
<!-- notation:end -->

**This is the formula sheet you will be handed in the final exam**
(`EFB335 Final Exam Formula Sheet-6.docx`, released 29 September 2026).
It is one page. Everything on it is reproduced below exactly, mapped to
the topic it comes from.

Two things make it valuable for revision, beyond the formulas themselves:

1. **It shows what the exam covers.** Formulas come from Topics 2, 3, 6, 8
   and 10, and every one of those topics now has a full note on this
   site ([the topic map](#/EFB335/17-official-exam-formula-sheet/topic-by-topic-what-the-sheet-gives-you) is at the bottom).
2. **It shows what you have to memorise.** Anything examinable that is
   *not* on this page has to come out of your head. That list is long,
   and it includes the CAPM.

**Start with the table below.** It's every line on the sheet in one
place: what it works out, the words in a question that should send you
to it, and where it's taught. The line-by-line section after it has the
detail and the worked numbers.

> **The sheet is printed from a Word file with embedded equation images,
> and one of them does not render cleanly** — the mutual-fund return
> formula comes out as `Eᵢ + Dᵢ + Caᵢ Dsᵢ − Bᵢ`. The correct form,
> checked against Topic 10 slide 32, is below. If your printed copy on
> the day is garbled the same way, you now know what it says.

---

## What Each Formula Is For

| # | Formula on the sheet | What it works out | Reach for it when the question says… | Taught in |
|---|---|---|---|---|
| 1 | `E(Rp) = wa·E(Ra) + wb·E(Rb)` | The **expected return of a portfolio**: the weighted average of what each holding is expected to return. The same weighting gives a **portfolio beta** | "a portfolio of 60% A and 40% B", "expected return of the combined portfolio", adding an asset to a portfolio ([Sample Q8](#/EFB335/18-sample-final-exam/question-8-adding-a-hedge-fund-to-a-portfolio-topic-9-4-marks)) | [Pack 2](#/EFB335/14-revision-pack-topic-2-and-tutorial-2/part-a-the-concepts-taught-from-scratch) |
| 2 | `σ_port = √(ΣΣ wᵢwⱼCov(i,j))` | The **total risk of a portfolio**, allowing for how the assets move together. Why it's **less** than the weighted average of the σs: that gap is diversification | "portfolio standard deviation", "risk of the combined portfolio", "diversification benefit", a correlation or covariance is given | [Pack 2 A6](#/EFB335/14-revision-pack-topic-2-and-tutorial-2/a6-two-asset-portfolio-variance-derived-term-by-term) |
| 3 | `E(R_port) = RFR + σ_port × [E(R_M) − RFR] / σ_M` (CML) | The **return you can expect from mixing the risk-free asset with the market portfolio**, for a chosen level of total risk σ | "combine T-bills with the market index", "the investor wants a σ of 10%: what return?", "lending or borrowing at the risk-free rate", efficient portfolios | [Pack 3](#/EFB335/15-revision-pack-topic-3-and-tutorial-3/part-a-the-concepts-taught-from-scratch) |
| 4 | `PT = SS / AUM` | **Portfolio turnover**: how much of the fund is sold in a year. 0.8 = 80% of the fund traded | "turnover", "how actively is the fund traded", comparing an active fund with an index fund | [Topic 6 §6.10](#/EFB335/31-topic-6-equity-portfolio-management/610-tax-efficiency-slides-3436) |
| 5 | `TCR = 1 − (1 + TAR)/(1 + PTR)` | **Tax cost ratio**: the share of the pre-tax return lost to tax. Higher turnover → more gains realised → higher TCR | "tax efficiency", "after-tax return", "which fund suits a taxable investor?" | [Topic 6 §6.10](#/EFB335/31-topic-6-equity-portfolio-management/610-tax-efficiency-slides-3436) |
| 6 | Call payoff `max(S_T − X, 0)` · Put payoff `max(X − S_T, 0)` | What **one call or one put is worth at expiry**. Every option strategy is built by adding these up; take off the premiums for **profit** | Any option strategy: protective put, covered call, collar, straddle, strangle, spreads ([Sample Q6](#/EFB335/18-sample-final-exam/question-6-a-bull-spread-with-puts-topic-8-4-marks), a bull spread with puts) | [Topic 8 §8.3–8.5](#/EFB335/33-topic-8-derivatives/85-how-the-decks-strategy-tables-work) |
| 7 | `ATP = (1/T) Σ (R_pt − R_Bt)` | **Average tracking performance**: on average, did the fund beat or lag its benchmark? Ups and downs cancel | "an index fund", "how closely did it track", average over- or under-performance | [Topic 10 §10.3](#/EFB335/35-topic-10-performance-evaluation/103-index-benchmarks-and-tracking-performance) |
| 8 | `AATP = (1/T) Σ \|R_pt − R_Bt\|` | **Average absolute tracking**: the average size of the miss, either direction. Fixes ATP's cancelling | "how far off the benchmark, regardless of direction" | [Topic 10 §10.3](#/EFB335/35-topic-10-performance-evaluation/103-index-benchmarks-and-tracking-performance) |
| 9 | `σ(TP) = √[(1/T) Σ (R_pt − R_Bt)²]` | **Tracking error**: how much the fund's gap from the benchmark swings. Big misses count most. It's the **active risk** | "tracking error", "active risk", how well an index fund replicates; the bottom line of the information ratio | [Topic 6 §6.4](#/EFB335/31-topic-6-equity-portfolio-management/64-tracking-error-slides-1113), [Topic 10 §10.3](#/EFB335/35-topic-10-performance-evaluation/103-index-benchmarks-and-tracking-performance) |
| 10 | Jensen's `α = (R_p − R_f) − β_p(R_m − R_f)` | The **return above what the CAPM says the fund's beta deserves**, in percentage points. Positive = the manager added value | "alpha", "did the manager add value after allowing for risk?", "abnormal return" ([Sample Q9b](#/EFB335/18-sample-final-exam/question-9-risk-adjusted-performance-topic-10-4-marks)) | [Topic 10 §10.6](#/EFB335/35-topic-10-performance-evaluation/106-jensens-alpha-return-above-what-the-capm-says-the-risk-deserves) |
| 11 | Sharpe `SI = (R_p − R_f) / σ_p` | **Excess return per unit of total risk**. Higher is better. Right when the fund is the investor's **whole** wealth | "risk-adjusted performance", "rank these funds", a σ is given | [Topic 10 §10.4](#/EFB335/35-topic-10-performance-evaluation/104-the-sharpe-measure-excess-return-per-unit-of-total-risk) |
| 12 | Treynor `TI = (R_p − R_f) / β_p` | **Excess return per unit of systematic risk (beta)**. Right when the fund is **one part** of a diversified whole | A beta is given; "Sharpe and Treynor disagree: why?" ([Sample Q9a](#/EFB335/18-sample-final-exam/question-9-risk-adjusted-performance-topic-10-4-marks)) | [Topic 10 §10.5](#/EFB335/35-topic-10-performance-evaluation/105-the-treynor-measure-excess-return-per-unit-of-systematic-risk) |
| 13 | Information ratio `IR = (R_pt − R_Bt) / σ(TP)` | **Benchmark-beating return per unit of tracking error**: an active manager's skill and consistency | "active manager", "against the benchmark", "information ratio" ([Sample Q9c](#/EFB335/18-sample-final-exam/question-9-risk-adjusted-performance-topic-10-4-marks)) | [Topic 10 §10.7](#/EFB335/35-topic-10-performance-evaluation/107-the-information-ratio-active-return-per-unit-of-active-risk) |
| 14 | Fund return `R = (EP + Div + Cap.Dist − BP) / BP` | A **managed fund's total return for the period**, counting the dividends and capital-gain distributions it paid out, not just the unit price change | "mutual fund", "managed fund", "distributions", "NAV went from … to …" | [Topic 10 §10.10](#/EFB335/35-topic-10-performance-evaluation/total-rate-of-return-on-a-mutual-fund-slide-32) |
| 15 | Allocation `Σ (W_pi − W_bi) × R_bi` | How much of the excess return came from **weighting the segments differently** from the benchmark (picking the right asset classes or sectors) | "attribution", "where did the outperformance come from?", "asset allocation decision" ([Sample Q10](#/EFB335/18-sample-final-exam/question-10-beating-the-benchmark-topics-6-and-10-4-marks)) | [Topic 10 §10.11](#/EFB335/35-topic-10-performance-evaluation/1011-attribution-analysis-where-did-the-excess-return-come-from) |
| 16 | Selection `Σ W_pi × (R_pi − R_bi)` | How much came from **picking better securities within each segment** | "stock selection", "security selection", the second half of an attribution question | [Topic 10 §10.11](#/EFB335/35-topic-10-performance-evaluation/1011-attribution-analysis-where-did-the-excess-return-come-from) |

**The four performance measures, in one line each:** Sharpe charges for
**all** the risk (σ). Treynor charges only for **market** risk (β). Jensen
gives the answer in **percentage points** above the CAPM line. The
information ratio judges a manager **against their own benchmark**.

---

## The Sheet, Line by Line

### Portfolio theory — Topic 2

```
E(Rp) = wa × E(Ra) + wb × E(Rb)

σ_port = √( Σᵢ Σⱼ wᵢ wⱼ Cov(i,j) )          i, j = 1 … n
```

The variance is given **only in double-sum covariance form**. You have to
know that `Cov(i,i) = σᵢ²` and expand it yourself — for two assets that
gives the familiar `w₁²σ₁² + w₂²σ₂² + 2w₁w₂Cov₁₂`. The sheet will not
write that out for you. See [Revision Pack 2](#/EFB335/14-revision-pack-topic-2-and-tutorial-2/part-a-the-concepts-taught-from-scratch).

### Capital market line — Topic 3

```
E(R_port) = RFR + σ_port × [E(R_M) − RFR] / σ_M
```

That is the **CML** — efficient portfolios, priced against total risk σ.
**The SML is not on the sheet.** See [Revision Pack 3](#/EFB335/15-revision-pack-topic-3-and-tutorial-3/part-a-the-concepts-taught-from-scratch).

### Tax efficiency of active funds — Topic 6

```
PT  = SS / AUM                         portfolio turnover
TCR = [1 − (1 + TAR) / (1 + PTR)]      tax cost ratio
```

- **SS** — total dollar value of securities **sold** in the year
- **AUM** — average dollar value of assets under management
- **TAR** — tax-adjusted return · **PTR** — pre-tax return

High turnover crystallises capital gains, so it raises the tax cost
ratio. Active funds generally have a **higher** TCR than passive ones —
that is the Topic 6 checkpoint question, almost word for word.

### Options — Topic 8

```
Payoff to call holder at expiration = S_T − X   if S_T > X
                                    = 0         if S_T ≤ X

Payoff to put holder at expiration  = 0         if S_T ≥ X
                                    = X − S_T   if S_T < X
```

These are **payoffs, not profits** — the premium is not in them.
Topic 8's strategies (protective put, covered call, collar, straddle,
strangle, strips and straps, range forwards) are **built from these two
lines** and none of them is given. You construct each one by adding
calls and puts, long and short.

### Tracking performance — Topic 10

```
ATP    = (1/T) Σₜ (R_pt − R_Bt)             average tracking performance

AATP   = (1/T) Σₜ |R_pt − R_Bt|             average ABSOLUTE tracking performance

σ(TP)  = √[ (1/T) Σₜ (R_pt − R_Bt)² ]       tracking error
```

- **ATP** lets over- and under-performance cancel out, which is its flaw.
- **AATP** fixes that by counting errors in both directions.
- **σ(TP)** penalises *large* deviations — it is what "tracking error"
  means.

> **Note the divisor: `1/T`, not `1/(T − 1)`.** The sheet uses the
> population form. That matters if you compute it by hand, and it is the
> same population-versus-sample trap as Topics 1–2 — see [trap
> 1](#/EFB335/11-formula-sheet). Use the sheet's `1/T` in the exam.

### Risk-adjusted performance — Topic 10

```
Jensen's alpha      α_p  = (R_p − R_f) − β_p (R_m − R_f)

Sharpe index        SI_p = (R_p − R_f) / σ_p          total risk

Treynor index       TI_p = (R_p − R_f) / β_p          systematic risk

Information ratio   IR_pt = (R_pt − R_Bt) / σ(TP)     active return per unit of tracking error
```

Which one to use is the classic question:

| Measure | Risk used | Use it when |
|---|---|---|
| **Sharpe** | σ — total | The portfolio is the investor's **whole** wealth, so unsystematic risk matters |
| **Treynor** | β — systematic | The portfolio is **one part** of a diversified whole |
| **Jensen's α** | β, via CAPM | You want the excess return in percentage points, with a significance test |
| **Information ratio** | σ(TP) — tracking error | Judging an **active manager against a benchmark** |

**Sortino** is taught in Topic 10 and is **not** on the sheet.

### Mutual fund total return — Topic 10

The garbled line, reconstructed from Topic 10 slide 32:

```
R_it = (EP_it + Div_it + Cap.Dist_it − BP_it) / BP_it
```

- **EP** ending price · **BP** beginning price
- **Div** dividend payments · **Cap.Dist** capital-gain distributions

A fund's return includes its **distributions**. Leaving out the
capital-gain distribution understates it, and that is the trap the
formula exists to catch.

### Attribution analysis — Topic 10

```
Allocation Effect = Σᵢ [ (W_pi − W_bi) × R_bi ]

Selection Effect  = Σᵢ [ W_pi × (R_pi − R_bi) ]
```

- **W_pi, W_bi** — weight in segment *i*, portfolio vs benchmark
- **R_pi, R_bi** — return in segment *i*, portfolio vs benchmark

**Allocation + Selection = the portfolio's excess return over the
benchmark.** Allocation asks *did you over-weight the right segments?*
Selection asks *did you pick the right securities within each one?*

> **The sheet's allocation formula is not the textbook's, and it only
> matters segment by segment.** Reilly and Brown write the allocation
> effect as `(W_pi − W_bi) × (R_bi − R_B)`. The sheet drops the `− R_B`.
> Because both sets of weights sum to 1, `Σ(W_pi − W_bi) = 0`, so the
> **total** allocation effect is identical either way. The
> **per-segment** numbers are not. **Use the sheet's form in the
> exam** — it is the one the marker has in front of them.

A worked check, two segments:

| | W_p | W_b | R_p | R_b |
|---|---|---|---|---|
| Equities | 0.6 | 0.5 | 12% | 10% |
| Bonds | 0.4 | 0.5 | 3% | 4% |

Benchmark return `R_B` = 0.5(10) + 0.5(4) = **7.0%**. Portfolio return
`R_P` = 0.6(12) + 0.4(3) = **8.4%**. Excess = **1.4 points**.

| | Allocation (sheet form) | Allocation (textbook form) | Selection |
|---|---|---|---|
| Equities | +0.1 × 10 = **+1.0** | +0.1 × 3 = **+0.3** | 0.6 × 2 = **+1.2** |
| Bonds | −0.1 × 4 = **−0.4** | −0.1 × −3 = **+0.3** | 0.4 × −1 = **−0.4** |
| **Total** | **+0.6** | **+0.6** | **+0.8** |

`0.6 + 0.8 = 1.4` — allocation plus selection equals the excess return,
and the two allocation versions agree in total and disagree by segment.

---

## What Is NOT on the Sheet — Memorise These

Everything below is examinable and has to come out of your head.

| Topic | Not given — you must produce it | Where |
|---|---|---|
| 1 | HPR, HPY, annualised HPY · **arithmetic vs geometric mean** · `E(R) = ΣPᵢRᵢ` · variance and σ · coefficient of variation | [Pack 1](#/EFB335/13-revision-pack-topic-1-and-tutorial-1/part-d-cheat-sheet-memorise-this) |
| 1 | **Margin**: equity, percentage margin, **margin-call price long and short** | [Pack 1](#/EFB335/13-revision-pack-topic-1-and-tutorial-1/part-d-cheat-sheet-memorise-this) |
| 1–2 | **Annualising**: `(1+r)^m − 1`, variance `×m`, σ `×√m` | [Formula sheet](#/EFB335/11-formula-sheet) |
| 2 | Covariance · **correlation** `r = Cov/(σᵢσⱼ)` · the **expanded two-asset variance** · **min-variance weight** · σ_p at r = ±1 | [Pack 2](#/EFB335/14-revision-pack-topic-2-and-tutorial-2/part-d-cheat-sheet-memorise-this) |
| 2 | **Utility** `U = E(r) − ½Aσ²` | [Topic 2b](#/EFB335/03-topic-2-utility-and-strategy) |
| 3 | **The CAPM / SML** `E(Rᵢ) = Rf + βᵢ(Rm − Rf)` · **beta** `= Cov(i,m)/σ²m` | [Pack 3](#/EFB335/15-revision-pack-topic-3-and-tutorial-3/part-d-cheat-sheet-memorise-this) |
| 4 | **APT** and multifactor expected return · the arbitrage construction | [Pack 4](#/EFB335/16-revision-pack-topic-4-and-tutorial-4/part-d-cheat-sheet-memorise-this) |
| 5 | Nothing to calculate: the three forms and the tests are **conceptual** | [Topic 5](#/EFB335/30-topic-5-market-efficiency) |
| 7 | **Bond duration and convexity**: Macaulay and modified duration, the price-change prediction `ΔP/P ≈ −Mod D × Δi`, and the convexity add-on. 15 slides of Topic 7, zero formulas on the sheet | [Topic 7 §7.6](#/EFB335/32-topic-7-bond-portfolio-management/76-bond-analysis-tools-duration-slides-2328), [§7.7](#/EFB335/32-topic-7-bond-portfolio-management/77-bond-convexity-slides-2933) |
| 8 | Every **combined option strategy**, built from the call/put payoff lines · the **futures payoff** and hedge ratio | [Topic 8](#/EFB335/33-topic-8-derivatives/816-which-strategy-for-which-view) |
| 10 | **Sortino ratio** `ST = (R̄ − τ) / DR` and the downside deviation | [Topic 10 §10.8](#/EFB335/35-topic-10-performance-evaluation/108-the-sortino-measure-downside-risk-only) |

> **The CAPM is not on the sheet, but Jensen's alpha is — and alpha is
> the CAPM rearranged.** `α = (R_p − R_f) − β(R_m − R_f)` is just actual
> excess return minus the SML's predicted excess return. If you forget
> the SML under pressure, you can read it back out of the alpha line.
> Better not to need to.

> **The bond gap is the one to worry about.** Topic 7 spends fifteen
> slides on duration and convexity and the sheet gives nothing for
> either. The sample exam's bond question ([Q4](#/EFB335/18-sample-final-exam/question-4-bond-portfolio-choice-topic-7-4-marks))
> gives you modified duration and convexity and asks you to *use* them
> in a judgement, not calculate them, but a duration price-change is
> still fair game. Know modified duration and the
> convexity add-on cold.

---

## Topic by Topic: What the Sheet Gives You

| Topic | Title | On the sheet? | Full note |
|---|---|---|---|
| 1 | Investment background | No: memorise HPR, HPY, means, margin | [Topic 1](#/EFB335/01-topic-1-investment-background) |
| 2 | Portfolio management | **Yes**: E(Rp), σ_port | [Topic 2](#/EFB335/02-topic-2-portfolio-management) |
| 3 | Capital market theory, CAPM | **CML only**: memorise the CAPM and beta | [Topic 3](#/EFB335/04-topic-3-capital-market-theory-and-capm) |
| 4 | APT and multifactor models | No: memorise | [Topic 4](#/EFB335/05-topic-4-apt-and-multifactor-models) |
| 5 | Market efficiency | No: conceptual | [Topic 5](#/EFB335/30-topic-5-market-efficiency) |
| 6 | Equity portfolio management | **Yes**: PT, TCR (and tracking error) | [Topic 6](#/EFB335/31-topic-6-equity-portfolio-management) |
| 7 | Bond portfolio management | **No**: memorise duration and convexity | [Topic 7](#/EFB335/32-topic-7-bond-portfolio-management) |
| 8 | Derivatives | **Yes**: call and put payoffs only | [Topic 8](#/EFB335/33-topic-8-derivatives) |
| 9 | Hedge funds and alternatives | No: conceptual (plus E(Rp) and beta weighting) | [Topic 9](#/EFB335/34-topic-9-hedge-funds-and-alternatives) |
| 10 | Performance evaluation | **Yes, most of the sheet**: everything except Sortino | [Topic 10](#/EFB335/35-topic-10-performance-evaluation) |

> **Topic 10 supplies eight of the sheet's lines.** If you're short of
> time on Thursday, the [Topic 10 note](#/EFB335/35-topic-10-performance-evaluation)
> and the table at the top of this page are the best hour you can spend.
