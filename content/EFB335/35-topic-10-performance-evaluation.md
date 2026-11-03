# TOPIC 10 — Performance Evaluation of Managed Funds

<!-- notation:start -->
<details class="notation"><summary>Notation key — what the symbols in this note mean</summary>

| Symbol | Means |
|---|---|
| `Rᵢ, R_p` | A return — Rᵢ on asset i, R_p on the portfolio. The subscript says whose return it is |
| `RFR, R_f` | Risk-free rate — the return on a riskless asset such as a government bill |
| `R_M, R_m` | Market return — the return on the whole market (e.g. the ASX 200 as a proxy) |
| `σ (sigma)` | Standard deviation — how widely returns swing around their average. The standard measure of risk |
| `n` | Number of items — observations, periods or assets, depending on the formula |
| `Σ` | "Add them all up" — a sum over every item (Σᵢ = over every asset i) |
| `w, wᵢ` | Weight — the fraction of the portfolio held in asset i. Weights add up to 1 |
| `β (beta)` | Beta — how sensitive an asset is to market moves; its systematic risk. β = 1 moves with the market |
| `α (alpha)` | Alpha — the return above (or below) what the CAPM says the risk deserves |
| `CML` | Capital market line — the best mixes of the risk-free asset and the market portfolio, priced on total risk σ |
| `SML` | Security market line — the CAPM as a line: required return against beta |
| `CAPM` | Capital asset pricing model — E(Rᵢ) = R_f + βᵢ[E(R_M) − R_f] |
| `X` | Strike (exercise) price of the option |
| `ATP` | Average tracking performance — average of (portfolio − benchmark) returns |
| `AATP` | Average absolute tracking performance — the same, ignoring sign |
| `σ(TP)` | Tracking error — standard deviation of (portfolio − benchmark) returns |
| `R_pt, R_Bt` | Portfolio and benchmark return in period t |
| `SI (Sharpe)` | Sharpe index — (R_p − R_f) ÷ σ_p: excess return per unit of total risk |
| `TI (Treynor)` | Treynor index — (R_p − R_f) ÷ β_p: excess return per unit of systematic risk |
| `IR` | Information ratio — active return ÷ tracking error |
| `R_pi, R_bi` | Return in segment i — portfolio (p) vs benchmark (b) |
| `EP, BP, Div, Cap.Dist` | Fund return inputs — ending price, beginning price, dividends paid, capital-gain distributions |

[Full EFB335 notation key →](#/EFB335/99-notation-key)

</details>
<!-- notation:end -->

*(Reilly & Brown, Chapter 18)*

Topic 10 is where the whole unit gets used to answer one question: **did the manager earn their fee?** A raw return says nothing until it is set against the risk taken and a fair benchmark. The deck builds the toolkit in order: peer groups and index tracking (the pre-1960s and "no risk adjustment" approaches), then the five risk-adjusted measures — **Sharpe** (total risk, Topic 2's σ and Topic 3's CML), **Treynor** (systematic risk, Topic 3's β and SML), **Jensen's alpha** (the CAPM, or any Topic 4 multifactor model, rearranged), the **information ratio** (active risk against a benchmark, Topic 6's tracking error) and **Sortino** (downside risk only) — then attribution analysis, benchmark error (Roll's critique from Topic 3 again) and the reporting standards. It supplies more lines of the official exam formula sheet than any other topic, and Sample Q9 and Q10 come from it.

New to this topic? Start with the [plain-English note](#/EFB335/28-plain-english-topic-10-performance).

Every worked number below — the deck's Sharpe, Treynor, Sortino and attribution examples, and the practice-number examples marked as such — was recomputed in Python.

---

## 10.1 Why evaluate performance, and does past performance matter?

The deck examines the performance of investment portfolios, focused on the **managed funds industry** but equally applicable to a private investor's portfolio (slide 4). Three key questions:

1. How can fund management be measured?
2. Is past performance relevant?
3. What has been the evidence on fund managers' performance?

**Past performance drives investor behaviour** (slides 5–6):

| Finding | Source on the slide |
|---|---|
| 54% of investors regard long-term performance as the most important factor | Sweeney Research |
| Past performance appears in 70% of commercial advertisements… | ASIC |
| …and 65% of those report figures based on only **one year** of prior data | ASIC |
| Past performance correlates with future **fund flows** — good performers attract money | Sirri & Tufano (1998), USA |
| The same flow–performance result in Australia | Sawicki (2000); Frino, Heaney & Service (2005) |

Note the base on the ASIC figures: the 65% is 65% **of the advertisements that quote past performance**, not of all advertisements (so roughly 0.70 × 0.65 ≈ 46% of all ads quote a one-year figure).

> **"Investors chase past performance" is not the same as "past performance predicts future performance".** Slides 5–6 are about *flows*. Whether winners actually repeat is the persistence question in §10.13 — and the answer there is "only mildly". An exam answer that blurs the two loses the mark.

## 10.2 Early measures: raw returns and peer-group comparisons

The industry emphasises performance measures: Morningstar **star ratings**, published **league tables**, and the fund rankings regularly run by the *Australian Financial Review* and *Personal Investment* (slide 7).

**Before 1960** (slide 8), portfolios were judged almost entirely on **rate of return**. People knew risk mattered — they compared returns *within* risk classes — but had no way to measure risk or consider it explicitly.

**Peer-group comparison** collects the returns of a representative universe of investors over a set period and ranks the manager within it. Two potential problems:

1. **No explicit adjustment for risk.**
2. **Difficult to form a comparable peer group.**

### Exhibit 18.2 — reading a peer-group (quartile) chart (slide 9)

Each box shows the spread of manager returns for a trailing period; the dot is the "U.S. equity with cash" portfolio being evaluated.

| Period | 5th pct | 25th pct | Median | 75th pct | 95th pct | S&P 500 | Portfolio | Portfolio's position |
|---|---|---|---|---|---|---|---|---|
| 10 yr | 16.8 | 14.8 | 13.8 | 12.5 | 10.8 | 13.8 | **16.6** | top quartile |
| 9 yr | 15.9 | 13.9 | 13.0 | 12.0 | 10.1 | 12.6 | **16.5** | above the 5th percentile |
| 8 yr | 18.8 | 16.7 | 15.2 | 14.0 | 12.0 | 15.3 | **16.4** | second quartile |
| 7 yr | 18.7 | 16.0 | 14.6 | 13.4 | 11.5 | 14.6 | **15.6** | second quartile |
| 6 yr | 18.8 | 16.0 | 14.8 | 13.5 | 11.3 | 14.3 | **15.6** | second quartile |
| 5 yr | 21.2 | 17.7 | 16.2 | 14.8 | 11.9 | 15.7 | **17.0** | second quartile |

(Annualised returns, %. The exhibit also lists the Russell 1000 and Russell 3000.) The portfolio beats the median and the S&P 500 in every period — but the chart says nothing about **how much risk** it took to get there, which is exactly the first criticism above.

> **In a peer-group table the "5th percentile" is the TOP.** Percentiles are counted from the best return down, so the 5th-percentile figure is the return only 5% of managers beat, and the 95th is near the bottom. Read it the other way and every ranking flips.

## 10.3 Index benchmarks and tracking performance

A fund is compared with a **pre-selected benchmark portfolio**, typically an index (e.g. S&P/ASX 200 or 300) **related to the fund's objective**, and success is measured by how it tracks that benchmark (slides 10–12). Three measures, all on the official sheet:

```
ATP    = (1/T) Σ (R_pt − R_Bt)            average tracking performance        (slide 10)

AATP   = (1/T) Σ |R_pt − R_Bt|            average ABSOLUTE tracking performance (slide 11)

σ(TP)  = √[ (1/T) Σ (R_pt − R_Bt)² ]      "standard deviation" of tracking errors (slide 12)

  R_pt = portfolio return in period t     R_Bt = benchmark return in period t     sums over t = 1 … T
```

- **ATP** — the averaging problem: positive and negative tracking errors **cancel**, so a fund that misses badly in both directions can show ATP ≈ 0.
- **AATP** — overcomes the averaging problem; it is **sensitive to errors in both directions**.
- **σ(TP)** — also overcomes it, and because it squares the errors it **penalises large tracking errors** more heavily.

### Worked example — five periods *(practice numbers, not from the deck)*

| Period | Fund % | Benchmark % | R_pt − R_Bt |
|---|---|---|---|
| 1 | 3.0 | 2.0 | +1.0 |
| 2 | −1.0 | 0.5 | −1.5 |
| 3 | 2.5 | 2.0 | +0.5 |
| 4 | 4.0 | 3.0 | +1.0 |
| 5 | −0.5 | 0.0 | −0.5 |

```
ATP   = (1.0 − 1.5 + 0.5 + 1.0 − 0.5) / 5     = 0.5 / 5   = 0.10%
AATP  = (1.0 + 1.5 + 0.5 + 1.0 + 0.5) / 5     = 4.5 / 5   = 0.90%
σ(TP) = √[(1.00 + 2.25 + 0.25 + 1.00 + 0.25) / 5]
      = √(4.75 / 5) = √0.95                              = 0.975%
```

ATP of 0.10% looks like near-perfect tracking. AATP and σ(TP) reveal the fund was actually missing its benchmark by close to 1% a period.

> **The divisor is `1/T`, and the deck's σ(TP) does not subtract the mean.** Slide 12 calls σ(TP) "the standard deviation of tracking errors", but the formula squares the raw differences `(R_pt − R_Bt)`, not their deviations from ATP — it is a root-mean-square. It equals a true (population) standard deviation only when ATP = 0. Here the true population SD of the five differences is √(4.70/5) = 0.970% and the sample SD (÷ 4) is 1.084%. **In the exam, use the sheet's formula exactly as printed (`1/T`, raw differences).** If a question gives you a tracking error, just use it.

> **Exam link.** ATP, AATP and σ(TP) are all on the [official sheet](#/EFB335/17-official-exam-formula-sheet/tracking-performance-topic-10). What you must supply yourself is the *interpretation*: which one hides offsetting errors (ATP) and which penalises large ones (σ(TP)).

## 10.4 The Sharpe measure — excess return per unit of total risk

Slide 13 lists the **five** risk-adjusted measures that combine risk and return into one statistic: Sharpe, Treynor, Jensen, the information ratio and Sortino. They differ in **which risk** they charge the manager for.

```
S_i = (R̄_i − RFR̄) / σ_i                                          (slide 14)

  R̄_i   average return on portfolio i over the period
  RFR̄   average risk-free rate over the same period
  σ_i   standard deviation of portfolio i's returns over the period   → TOTAL risk
```

Higher is better. The Sharpe ratio of the market is the **slope of the CML** (Topic 3), so a portfolio with a Sharpe ratio above the market's plots **above** the CML.

### Worked example — slide 15

Market: R_M = 14%, σ_M = 20%, RFR = 8%.

| Portfolio | Return | σ |
|---|---|---|
| D | 0.13 | 0.18 |
| E | 0.17 | 0.22 |
| F | 0.16 | 0.23 |

```
S_M = (0.14 − 0.08) / 0.20 = 0.06 / 0.20 = 0.300
S_D = (0.13 − 0.08) / 0.18 = 0.05 / 0.18 = 0.278     below market
S_E = (0.17 − 0.08) / 0.22 = 0.09 / 0.22 = 0.409     best
S_F = (0.16 − 0.08) / 0.23 = 0.08 / 0.23 = 0.348     above market

Ranking:  E (0.409)  >  F (0.348)  >  Market (0.300)  >  D (0.278)
```

All verified. **Exhibit 18.4** (slide 16) plots these on the CML — a line from 0.08 at σ = 0 with slope 0.30. E and F sit above it, D below. Cross-check: the CML return at D's σ of 0.18 is 0.08 + 0.30 × 0.18 = 0.134; D earned 0.13, so it falls short.

> **Sharpe charges for TOTAL risk, including unsystematic risk.** That is right when the fund is the investor's **whole portfolio**, because nothing else diversifies the fund's firm-specific risk away. A badly diversified fund is punished by Sharpe — which is precisely why Sharpe and Treynor can disagree (§10.9).

## 10.5 The Treynor measure — excess return per unit of systematic risk

```
T_i = (R̄_i − RFR̄) / β_i                                          (slide 17)

  β_i   slope of the fund's characteristic line over the period → SYSTEMATIC risk
```

Treynor is the slope of the line joining the risk-free asset to the portfolio in return–beta space. Higher is better; a portfolio with T above the market's plots **above the SML**. The market's beta is 1, so T_M is simply the market risk premium.

### Worked example — slides 18–19

R_M = 0.14, RFR = 0.08.

| Manager | Return | β |
|---|---|---|
| W | 0.12 | 0.90 |
| X | 0.16 | 1.05 |
| Y | 0.18 | 1.20 |

```
T_M = (0.14 − 0.08) / 1.00 = 0.060
T_W = (0.12 − 0.08) / 0.90 = 0.04 / 0.90 = 0.044     below market
T_X = (0.16 − 0.08) / 1.05 = 0.08 / 1.05 = 0.076
T_Y = (0.18 − 0.08) / 1.20 = 0.10 / 1.20 = 0.083     best

Ranking:  Y (0.083)  >  X (0.076)  >  Market (0.060)  >  W (0.044)
```

All verified (unrounded: 0.0444, 0.0762, 0.0833). **Exhibit 18.5** (slide 20) plots them against the SML (intercept 0.08, slope 0.06): X and Y above, W below. Cross-check for W: the SML return at β = 0.90 is 0.08 + 0.90 × 0.06 = 0.134, and W earned only 0.12.

> **Treynor assumes the fund is well diversified — or is one part of a diversified whole.** It ignores unsystematic risk completely. Use it to compare managers whose funds are only *pieces* of the investor's wealth. Do not compare a Treynor number with a Sharpe number — one is "per unit of β", the other "per unit of σ".

## 10.6 Jensen's alpha — return above what the CAPM says the risk deserves

Jensen (1968) starts from the CAPM written as a time-series regression (slide 21):

```
R_jt − RFR_t = α_j + β_j [R_mt − RFR_t] + e_jt

  α_j   the intercept — Jensen's alpha
```

- **α significantly positive** → superior manager.
- **α significantly negative** → inferior manager: returns consistently fall short of what the CAPM expects.

**Applying the Jensen measure** (slide 22):

- It requires a **different RFR for each time interval** in the sample — each period's excess returns use that period's risk-free rate.
- It does **not directly consider the manager's ability to diversify**, because it measures risk premiums in terms of **systematic** risk only (like Treynor).
- It is **flexible**: α can be measured against any model of expected return, including a **multifactor model** (Topic 4):

```
R_jt − RFR_t = α_j + [b_j1 F_1t + b_j2 F_2t + … + b_jk F_kt] + e_jt
```

The official sheet gives the single-period, average-return form:

```
α_p = (R_p − R_f) − β_p (R_m − R_f)
```

### Worked example — Jensen's alpha on the slide 18 data

The deck computes only Treynor for W, X and Y; the alphas below apply the sheet's formula to the same data. Market risk premium = 0.14 − 0.08 = 0.06.

```
α_W = (0.12 − 0.08) − 0.90 × 0.06 = 0.040 − 0.054 = −0.014   = −1.4%
α_X = (0.16 − 0.08) − 1.05 × 0.06 = 0.080 − 0.063 = +0.017   = +1.7%
α_Y = (0.18 − 0.08) − 1.20 × 0.06 = 0.100 − 0.072 = +0.028   = +2.8%
```

Same verdict as Treynor: W below the SML, X and Y above. That is not a coincidence — rearranging the two formulas gives `α_i = β_i × (T_i − T_M)`, so alpha and Treynor always agree on **whether** a fund beat the SML (though not necessarily on the ranking between two funds with different betas). Check for W: 0.90 × (0.0444 − 0.060) = −0.014.

> **Alpha is the CAPM rearranged — and the CAPM itself is NOT on the formula sheet.** `α = actual excess return − β × market risk premium`. If you can write alpha, you can write the SML. And the sign trap: in `β(R_m − R_f)` subtract the risk-free rate from the market return *before* multiplying by β.

> **Exam link — [Sample Q9(b)](#/EFB335/18-sample-final-exam/question-9-risk-adjusted-performance-topic-10-4-marks)** asks for Jensen's alpha for two funds. The formula is on the [official sheet](#/EFB335/17-official-exam-formula-sheet/risk-adjusted-performance-topic-10) along with Sharpe (`SI`), Treynor (`TI`) and the information ratio.

## 10.7 The information ratio — active return per unit of active risk

```
IR_j = (R̄_j − R̄_b) / σ_ER = ER̄_j / σ_ER                           (slide 23)

  R̄_b    average return on the benchmark portfolio over the period
  ER̄_j   average excess (active) return over the benchmark
  σ_ER   standard deviation of that excess return — the tracking error
```

It measures a portfolio's average return **in excess of a benchmark**, divided by the variability of that excess return. It rewards a manager for beating the benchmark **consistently**, not occasionally by a lot.

### Worked example — continuing §10.3 *(practice numbers)*

```
IR = ATP / σ(TP) = 0.10 / 0.975 = 0.103
```

A low IR: the average out-performance of 0.10% a period is small next to the ~1% of tracking error taken to earn it. (Using the true population SD of 0.970 instead also gives 0.103; the sample SD of 1.084 gives 0.092.)

**Exhibit 18.6** (slide 24, Goodwin 1998, data 1986:Q1–1995:Q4) shows the distribution of information ratios for managers in six styles: market-oriented large-cap equity, small-cap equity, large-cap value, international EAFE equity, large-cap growth and sector-rotation bonds. Read off the charts: most managers' IRs sit between about −0.2 and +0.4, and **IRs of 1.0 or more are rare** in every style — a useful sense of scale for what "good" looks like.

> **The sheet writes the IR per period (`IR_pt = (R_pt − R_Bt) / σ(TP)`); the deck uses averages (`R̄_j − R̄_b`).** In practice the numerator is the **average** active return over the evaluation period — a single period's active return divided by the tracking error is not a meaningful ratio. If an exam question gives you an average active return and a tracking error, divide one by the other.

## 10.8 The Sortino measure — downside risk only

Sortino differs from Sharpe in two ways (slide 26):

1. The numerator is the return in excess of a **user-selected minimum acceptable return (τ)** — often the risk-free rate, but it need not be.
2. Sharpe penalises **total** volatility — returns that are too high as well as too low. Sortino charges only for **downside risk (DR)**.

```
ST_i = (R̄_i − τ) / DR_i                                         (Sortino & Price 1994, slide 27)

  τ      minimum acceptable return threshold for the period
  DR_i   downside risk of portfolio i over the period
```

**Downside risk** (slide 28) is the volatility of returns that fall **below a hurdle** the investor chooses — the volatility of the shortfall. The deck argues DR is closer than σ to what investors really consider risky. A popular DR measure is the **semi-deviation**, which uses the portfolio's **own average return** as the hurdle:

```
Semi-deviation = √[ (1/n) Σ (R_it − R̄_i)² ]      summing ONLY over returns below R̄_i      (slide 28)
```

### Worked example — Sharpe vs Sortino, slides 29–31

Ten years of returns (%):

| Year | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | Average | Std dev |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| A | −5 | −3 | −2 | 3 | 3 | 6 | 7 | 8 | 10 | 13 | **4** | **5.60** |
| B | −1 | −1 | −1 | −1 | 0 | 4 | 4 | 7 | 13 | 16 | **4** | **5.92** |

Both average 4% (sum 40 ÷ 10). The deck's standard deviations are **population** figures (÷ 10); the sample versions (÷ 9) would be 5.91 and 6.24. On σ, **B looks riskier**.

**Step 1 — semi-deviation, hurdle = each portfolio's mean of 4%.** Every return *below 4* counts — including A's two years of 3%:

```
A, returns below 4:  −5, −3, −2, 3, 3        (5 years)
DR_A = √{ [(−5−4)² + (−3−4)² + (−2−4)² + (3−4)² + (3−4)²] ÷ 5 }
     = √{ [81 + 49 + 36 + 1 + 1] ÷ 5 } = √(168 ÷ 5) = √33.6 = 5.80

B, returns below 4:  −1, −1, −1, −1, 0       (5 years)
DR_B = √{ [4 × (−1−4)² + (0−4)²] ÷ 5 }
     = √{ [100 + 16] ÷ 5 } = √(116 ÷ 5) = √23.2 = 4.82
```

On downside risk **A is now the riskier portfolio** — it has the more extreme negative returns.

**Step 2 — Sortino with τ = 2%** (chosen "to match the Sharpe measure", i.e. as if RFR = 2%):

```
ST_A = (4 − 2) / 5.80 = 0.345
ST_B = (4 − 2) / 4.82 = 0.415      → B is the superior performer
```

**For comparison — Sharpe with RFR = 2%** (the deck refers to this but does not show the numbers; computed from its table):

```
S_A = (4 − 2) / 5.60 = 0.357       → A looks better on Sharpe
S_B = (4 − 2) / 5.92 = 0.338
```

Sharpe prefers A; Sortino prefers B. B's extra volatility is mostly **upside** (13% and 16% years), which Sharpe penalises and Sortino ignores.

> **Two conventions inside this example — know the deck's and know they are choices.** (1) The **hurdle** inside DR is the portfolio's **mean (4%)**, per slide 28 — which is why (3 − 4)² is included even though 3% is above τ = 2%. The numerator, though, uses τ = 2%, so the ratio uses two different hurdles. (2) The **divisor** is 5 — the number of below-mean years — not the 10 years in the sample; slide 28's `1/n` doesn't say which n. Other conventions change the numbers but **not the verdict**:
>
> | DR convention | DR_A | DR_B | ST_A | ST_B |
> |---|---|---|---|---|
> | **Deck: hurdle = mean, ÷ years below (5, 5)** | **5.80** | **4.82** | **0.345** | **0.415** |
> | Hurdle = mean, ÷ all 10 years | 4.10 | 3.41 | 0.488 | 0.587 |
> | Hurdle = τ = 2%, ÷ years below (3, 5) | 5.48 | 2.83 | 0.365 | 0.707 |
> | Hurdle = τ = 2%, ÷ all 10 years | 3.00 | 2.00 | 0.667 | 1.000 |
>
> Use the deck's convention unless told otherwise, and state it in your answer. Check with your tutor which one the marker expects.

> **Exam link.** **Sortino is NOT on the official sheet** — memorise `ST = (R̄ − τ) / DR` and the semi-deviation. See the [not-on-the-sheet list](#/EFB335/17-official-exam-formula-sheet/what-is-not-on-the-sheet-memorise-these).

*(Slide 25 is a non-examinable photo quiz, "Where in the World is this Stock Exchange?" — the building's sign reads "Stock Exchange Arcade", National Trust of Queensland. It is almost certainly the arcade in Charters Towers, Qld, but that is outside knowledge; the slide doesn't say.)*

## 10.9 Choosing between the measures

| Measure | Formula | Risk charged | Use it when | On the sheet? |
|---|---|---|---|---|
| **Sharpe** | `(R̄ − RFR) / σ` | Total | The fund is the investor's **entire** portfolio | Yes (`SI`) |
| **Treynor** | `(R̄ − RFR) / β` | Systematic | The fund is **one part** of a diversified portfolio | Yes (`TI`) |
| **Jensen's α** | `(R̄ − RFR) − β(R̄_m − RFR)` | Systematic (or multifactor) | You want the out-performance in **% points**, testable for significance | Yes |
| **Information ratio** | `(R̄ − R̄_b) / σ_ER` | Active (tracking error) | Judging an **active manager against a benchmark** | Yes (`IR`) |
| **Sortino** | `(R̄ − τ) / DR` | Downside only | The investor cares only about returns **below a minimum** | **No — memorise** |

The deck's video activity (slide 40) sums up the first three: **Treynor and Sharpe are both excess return per unit of risk** — Treynor uses systematic risk (β), so it suits well-diversified portfolios where idiosyncratic risk has been eliminated; Sharpe uses total risk (volatility). **Jensen's alpha is out-performance relative to expected performance under the CAPM.**

> **Why Sharpe and Treynor can rank funds differently.** For a **well-diversified** fund, total risk ≈ systematic risk, so the two agree. A **poorly diversified** fund carries unsystematic risk that Sharpe penalises and Treynor ignores, so it can rank well on Treynor and badly on Sharpe. This is [Sample Q9(a)](#/EFB335/18-sample-final-exam/question-9-risk-adjusted-performance-topic-10-4-marks) — and that question's own data shows it: Fund A beats the market on Treynor but loses to it on Sharpe.

## 10.10 Applying the measures: the fund's return, and what a manager must deliver

### Total rate of return on a mutual fund (slide 32)

```
R_it = (EP_it + Div_it + Cap.Dist_it − BP_it) / BP_it

  EP_it         ending price of fund i in month t
  Div_it        dividend payments made by fund i in month t
  Cap.Dist_it   capital-gain distributions made by fund i in month t
  BP_it         beginning price of fund i in month t
```

**Worked example** *(practice numbers)*: a unit starts the month at $10.00, ends at $10.40, and pays a $0.25 dividend and a $0.35 capital-gain distribution.

```
R = (10.40 + 0.25 + 0.35 − 10.00) / 10.00 = 1.00 / 10.00 = 10.0%

Price change only:              (10.40 − 10.00) / 10.00          = 4.0%
Forgetting the cap. gain dist.: (10.40 + 0.25 − 10.00) / 10.00   = 6.5%
```

> **A fund's unit price drops when it pays a distribution — leave the distribution out and you understate the return.** Both cash items go in the numerator.

> **Exam link — the official sheet's version of this formula is garbled.** In the PDF it prints as fragments like `E_i + D_i + Ca_i Ds_i − B_i` over `B_i`. Slide 32 confirms the correct form is exactly the one above, `(EP + Div + Cap.Dist − BP) / BP` — as [doc 17](#/EFB335/17-official-exam-formula-sheet/mutual-fund-total-return-topic-10) says. (The slide's own rendering is slightly broken too — "Div" and "Cap.Dist" wrap mid-word — but the structure is clear.)

### What is required of a portfolio manager? (slide 33)

Two desirable attributes:

1. **The ability to derive above-average returns for a given risk class** — from either **superior timing** or **superior security selection**.
2. **The ability to diversify completely**, eliminating unsystematic risk relative to the benchmark. A completely diversified portfolio is **perfectly correlated** with the fully diversified benchmark.

Map them to the measures: Treynor and Jensen test attribute 1 only; Sharpe tests both at once (a poorly diversified fund is penalised through σ).

## 10.11 Attribution analysis — where did the excess return come from?

Attribution analysis (slide 34) compares the manager's total return with a **predetermined benchmark policy portfolio** and decomposes the difference into an **allocation effect** and a **selection effect**:

```
Allocation Effect = Σ_i [ (w_pi − w_bi) × R_bi ]
Selection Effect  = Σ_i [  w_pi × (R_pi − R_bi) ]

  w_pi, w_bi   weight in market segment i — manager's portfolio, benchmark
  R_pi, R_bi   return on segment i — manager's portfolio, benchmark

Allocation + Selection = Portfolio return − Benchmark return
```

- **Allocation** — did the manager **over-weight the right segments**? Weight differences, valued at **benchmark** segment returns.
- **Selection** — did the manager **pick better securities within each segment**? Return differences, valued at the **portfolio's** weights.

### Worked example — Exhibit 18.15 (slide 35)

| Asset class | w_p | w_b | w_p − w_b | R_p % | R_b % | R_p − R_b |
|---|---|---|---|---|---|---|
| Stock | 0.50 | 0.60 | −0.10 | 9.70 | 8.60 | 1.10 |
| Bonds | 0.38 | 0.30 | 0.08 | 9.10 | 9.20 | −0.10 |
| Cash | 0.12 | 0.10 | 0.02 | 5.60 | 5.40 | 0.20 |

```
Fund      = 0.50 × 9.70 + 0.38 × 9.10 + 0.12 × 5.60 = 4.850 + 3.458 + 0.672 = 8.98%
Benchmark = 0.60 × 8.60 + 0.30 × 9.20 + 0.10 × 5.40 = 5.160 + 2.760 + 0.540 = 8.46%
Out-performance = 8.98 − 8.46                                              = 0.52%

Allocation = −0.10 × 8.60 + 0.08 × 9.20 + 0.02 × 5.40
           = −0.860 + 0.736 + 0.108  = −0.016  ≈ −0.02%

Selection  = 0.50 × 1.10 + 0.38 × (−0.10) + 0.12 × 0.20
           = 0.550 − 0.038 + 0.024   = +0.536  ≈ +0.54%

Total      = −0.016 + 0.536 = 0.52% ✓
```

All verified. The manager **lost slightly on allocation** (under-weight stocks, the segment the benchmark weights most) and earned essentially all of the out-performance from **selection**, mainly by picking stocks that returned 9.70% against the stock benchmark's 8.60%.

> **Weights in allocation, returns in selection — and don't mix the bases.** Allocation multiplies the weight difference by the **benchmark** segment return; selection multiplies the return difference by the **portfolio** weight. Swap either and the two effects no longer add up to the excess return — which is your built-in check. The deck's −0.02 and 0.54 are rounded; the unrounded −0.016 and 0.536 sum to exactly 0.52.

> **Exam link — [Sample Q10(a)(b)](#/EFB335/18-sample-final-exam/question-10-beating-the-benchmark-topics-6-and-10-4-marks)** asks for two ways to beat a benchmark (allocation/timing and selection) and to explain both effects. Both formulas are on the [official sheet](#/EFB335/17-official-exam-formula-sheet/attribution-analysis-topic-10). Doc 17 notes that Reilly & Brown's textbook writes allocation with `(R_bi − R_B)` instead of `R_bi`: on this example the textbook form gives −0.014, +0.059 and −0.061 by segment instead of −0.860, +0.736 and +0.108 — the same −0.016 in total. Use the sheet's (and the deck's) form.

## 10.12 Factors that affect the use of performance measures — benchmarks

**The market portfolio is difficult to approximate** (slide 36):

- **Benchmark portfolios** are the performance-evaluation standard — usually a passive index or portfolio. You may need a benchmark for the **entire** portfolio plus separate benchmarks for **segments** to evaluate individual managers.
- **Benchmark error** can affect the **slope of the SML** and the **calculation of beta**. It is a greater concern with **global investing**. The problem is one of **measurement**.

**The global benchmark problem** (slide 37) shows up in two ways:

1. For many stocks, **beta estimates change a great deal over time**.
2. **Substantial differences** in betas estimated for the **same stock over the same period** when two different benchmark portfolios are used.

This is Roll's critique (Topic 3 §3.7) applied to performance: Treynor and Jensen both depend on β and on the SML, so a different benchmark can turn a "superior" manager into an "inferior" one. Sharpe does not use β, but still needs the market's Sharpe ratio as its yardstick.

**Required characteristics of benchmarks** (slide 38) — the six to learn:

1. **Unambiguous**
2. **Investable**
3. **Measurable**
4. **Appropriate**
5. **Reflective of current investment opinions**
6. **Specified in advance**

**Selecting a benchmark** happens at two levels: a **global** level containing the broadest mix of risky assets available worldwide, and a fairly **specific** risk level consistent with the **management style** of an individual manager.

> **"Specified in advance" is the one examiners like.** A benchmark chosen after the period ends can always be chosen to make the manager look good. And remember benchmark error hits the **beta-based** measures hardest — say so if asked which measures it affects.

## 10.13 Reporting investment performance — presentation standards

The **fundamental principles of the performance presentation standards (PPS)** (slide 39):

1. **Total return** must be used.
2. **Time-weighted** rates of return must be used.
3. Portfolios must be valued **at least monthly**, and periodic returns **geometrically linked**.
4. **Composite** return performance (if presented) must contain **all actual fee-paying accounts**.
5. Performance must be calculated **after deduction of trading expenses**.
6. **Taxes** must be recognised **when incurred**.
7. **Annual returns for all years** must be presented.
8. **Disclosure requirements** must be met.

Each closes a way to flatter results: time-weighting removes the effect of client deposits and withdrawals the manager doesn't control; including all fee-paying accounts stops cherry-picking the best accounts; showing every year stops hiding the bad ones (compare the ASIC finding in §10.1 that most ads quote a single year). "Geometrically linked" is Topic 1's geometric mean — chain the period returns, don't average them.

## 10.14 The evidence: performance studies and persistence

**Performance studies** (slide 41):

- **Early studies** found managed funds, on average, **underperformed** their benchmarks.
  - **Sharpe (1966):** the average fund's Sharpe index was below the Dow Jones market index's.
  - **Jensen (1968):** the average Jensen's alpha was **−1.1%**.
- **Recent evidence is mixed**. Findings depend on the **sample period**, the **benchmark index** and **fees**.

**Performance persistence** (slide 42) — do winners repeat?

- **Mild** evidence that top-performing funds persist.
- **Stronger** evidence that **poorly performing funds keep performing poorly**.
- Performance may be related to the **interaction of the business cycle and investment style**.

> **Persistence is asymmetric — bad persists more than good.** So a poor track record is a more reliable signal (avoid the fund) than a good one is (buy the fund). Set this against §10.1: investors pour money into last year's winners, mostly on one-year numbers, even though top-quartile persistence is weak.

## Summary

- Past performance drives **fund flows** (Sirri & Tufano; Sawicki; Frino, Heaney & Service), but persistence is weak for winners and stronger for losers.
- Peer-group comparisons have **no risk adjustment** and a **comparability** problem. Index tracking: **ATP** (errors cancel), **AATP** (absolute), **σ(TP)** (penalises large errors; deck/sheet form is a root-mean-square with `1/T`).
- **Sharpe** `(R̄ − RFR)/σ` — total risk, CML. Slide 15: E 0.409 > F 0.348 > M 0.300 > D 0.278.
- **Treynor** `(R̄ − RFR)/β` — systematic risk, SML. Slide 19: Y 0.083 > X 0.076 > M 0.060 > W 0.044.
- **Jensen's α** — the intercept of the excess-return regression; `(R̄ − RFR) − β(R̄_m − RFR)`; extends to multifactor models. On slide 18's data: W −1.4%, X +1.7%, Y +2.8%.
- **Information ratio** — average active return ÷ tracking error; consistency of beating a benchmark. IRs of 1.0+ are rare.
- **Sortino** `(R̄ − τ)/DR` — downside risk only; not on the sheet. Slides 29–31: Sharpe prefers A (0.357 vs 0.338), Sortino prefers B (0.415 vs 0.345).
- Fund return includes **dividends and capital-gain distributions**: `(EP + Div + Cap.Dist − BP)/BP`.
- A good manager needs **superior timing or selection** plus **complete diversification**.
- **Attribution**: allocation `Σ(w_p − w_b)R_b` + selection `Σw_p(R_p − R_b)` = excess return. Exhibit 18.15: −0.02 + 0.54 = 0.52.
- **Benchmark error** distorts β and the SML; benchmarks must be unambiguous, investable, measurable, appropriate, current and **specified in advance**. PPS: total, time-weighted, geometrically linked, all fee-paying accounts, after trading costs, every year.

## ✅ Checkpoint

*(The deck has no checkpoint slides; these test its content, including the slide 40 video activity.)*

<details><summary>1. Market return 14%, σ_M 20%, RFR 8%. Fund G returns 15% with σ 25%. Does it beat the market on Sharpe?</summary>

S_G = (0.15 − 0.08) / 0.25 = 0.07 / 0.25 = **0.28**, below the market's 0.30. **No** — it plots below the CML despite its higher raw return.

</details>

<details><summary>2. Why can a fund rank first on Treynor but last on Sharpe?</summary>

Treynor divides by **β (systematic risk)**; Sharpe divides by **σ (total risk)**. A **poorly diversified** fund carries large unsystematic risk: Sharpe penalises it, Treynor ignores it. For well-diversified funds the rankings agree.

</details>

<details><summary>3. Define the differences between the performance measures (slide 40's question).</summary>

Sharpe and Treynor are both **excess return per unit of risk** — Sharpe per unit of **total** risk (σ), Treynor per unit of **systematic** risk (β), so Treynor suits well-diversified portfolios. **Jensen's alpha** is the out-performance relative to the CAPM-expected return, in % points. The **information ratio** is active return per unit of tracking error. **Sortino** is return above a minimum acceptable return per unit of **downside** risk.

</details>

<details><summary>4. A fund's tracking errors over four periods are +2%, −2%, +2%, −2%. What are ATP, AATP and σ(TP), and what does this show?</summary>

ATP = 0 / 4 = **0%**; AATP = 8 / 4 = **2%**; σ(TP) = √(16 / 4) = **2%**. ATP says perfect tracking because the errors cancel; AATP and σ(TP) show the fund misses by 2% every period.

</details>

<details><summary>5. In slides 29–31, why does Portfolio A look better on Sharpe but worse on Sortino?</summary>

A has the lower σ (5.60 vs 5.92), so Sharpe (RFR = 2%) favours it: 0.357 vs 0.338. But A's bad years are worse (−5, −3, −2), giving it the larger semi-deviation (5.80 vs 4.82). B's extra volatility is **upside** (13%, 16%), which Sortino ignores, so Sortino favours B: 0.415 vs 0.345.

</details>

<details><summary>6. What two things does attribution analysis split excess return into, and what does each measure?</summary>

**Allocation effect** `Σ(w_pi − w_bi)R_bi` — gains from over- or under-weighting segments relative to the benchmark. **Selection effect** `Σw_pi(R_pi − R_bi)` — gains from picking better securities within each segment. Together they equal portfolio return minus benchmark return.

</details>

<details><summary>7. List the six required characteristics of a benchmark.</summary>

**Unambiguous, investable, measurable, appropriate, reflective of current investment opinions, specified in advance.**

</details>

<details><summary>8. What does the evidence say about performance persistence?</summary>

**Mild** evidence that top performers persist; **stronger** evidence that poor performers continue to perform poorly. Performance may relate to the interaction of the business cycle and investment style.

</details>
