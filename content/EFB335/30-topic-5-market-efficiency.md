# TOPIC 5 — Market Efficiency

<!-- notation:start -->
<details class="notation"><summary>Notation key — what the symbols in this note mean</summary>

| Symbol | Means |
|---|---|
| `E(R)` | Expected return — the probability-weighted average return you expect. E(Rᵢ) for asset i, E(R_p) for a portfolio |
| `R_M, R_m` | Market return — the return on the whole market (e.g. the ASX 200 as a proxy) |
| `n` | Number of items — observations, periods or assets, depending on the formula |
| `Σ` | "Add them all up" — a sum over every item (Σᵢ = over every asset i) |
| `r(i,j), ρ` | Correlation — covariance rescaled to −1 … +1. +1 moves perfectly together, −1 perfectly opposite, 0 unrelated |
| `CAPM` | Capital asset pricing model — E(Rᵢ) = R_f + βᵢ[E(R_M) − R_f] |
| `SMB` | Small Minus Big — the Fama–French size factor (small firms' return minus big firms') |
| `HML` | High Minus Low — the Fama–French value factor (high book-to-market minus low) |

[Full EFB335 notation key →](#/EFB335/99-notation-key)

</details>
<!-- notation:end -->

*(Reilly & Brown, Chapter 5)*

Topics 3 and 4 built models of what a security *should* return for the risk it carries. Topic 5 asks the follow-up question: **can anyone consistently earn more than that?** The efficient market hypothesis (EMH) says no, and splits the claim into three nested forms by *which* information is already in the price: past market data (weak), all public information (semi-strong), or everything including private information (strong). Most of the topic is the evidence: the statistical and trading-rule tests of the weak form, return-prediction and event studies for the semi-strong form, and tests of insiders, analysts and fund managers for the strong form. It closes with what the verdict means for technical analysis, fundamental analysis and portfolio management, which sets up Topic 6's passive-versus-active debate. The CAPM and the Fama–French factors come back here too, because any test of "abnormal" return needs a model of "normal" return.

> New to this topic? Start with the [plain-English note](#/EFB335/23-plain-english-topic-5-market-efficiency).

Every number below, including the deck's runs-test table, its January-effect table and the screenshots on slides 36 and 38, was recomputed in Python. Where an example uses made-up numbers, it says so.

> **Exam link.** Topic 5 is [sample Question 1](#/EFB335/18-sample-final-exam/question-1-market-efficiency-topic-5-4-marks) (4 marks): (a) define weak form, (b) how to test it, (c) which form markets actually are. It is a **written** question. The [official formula sheet](#/EFB335/17-official-exam-formula-sheet) (version 6) has nothing for Topic 5. The sheet attached to the sample paper adds one heading, **"Autocorrelation test"**. So the regression in §5.4 may be printed for you, but `AR = R − Rm` and everything else here has to come from memory.

---

## 5.1 What is market efficiency?

**Security prices fully reflect all available information** (slide 5). Fama's three categories of the EMH, as the deck states them:

| Form | Current prices fully reflect… | Test type the slide pairs with it |
|---|---|---|
| **Weak** | All information in **historical prices** | Tests of **return predictability** |
| **Semi-strong** | All **publicly available** information | **Event studies** / studies of announcements |
| **Strong** | **All** information, public **or private** | *(none given on slide 5; §5.6 tests insiders, analysts and fund managers)* |

The slide's diagram draws them as **concentric circles**: weak form in the middle (all historical prices and returns), semi-strong around it (all public information), strong form on the outside (all information, public and private). Each outer circle contains the inner ones.

> **The forms are nested. Use that in your answers.** If a market is strong-form efficient it is automatically semi-strong and weak-form efficient. If it is semi-strong efficient it is weak-form efficient. The reverse does not hold: a market can be weak-form efficient and still fail the semi-strong test.

> **Citation check.** The deck cites the classification as "Fama, 1988". The classification is usually cited to Fama's 1970 review, and the "return predictability / event studies / private information" labels to his 1991 follow-up. That comes from outside the deck, so confirm with your tutor before quoting a year. In the exam, "Fama" on its own is safe, and it is all the sample question uses.

## 5.2 Why should markets be efficient?

The **premises** (slide 6):

1. A **large number of competing, profit-maximising participants** analyse and value securities, each independently of the others.
2. **New information arrives randomly** (in a random fashion).
3. Profit-maximising investors cause prices to **adjust rapidly** to reflect the new information.

The **results** that follow:

- Security price changes should be **independent and random**.
- The price at any time should be an **unbiased reflection of all currently available information**.
- The expected return implicit in the current price should be **consistent with the stock's perceived risk**. This is where Topics 3 and 4 plug in.

> **Efficiency does not mean prices are always "right".** It means price *errors* are unbiased and unpredictable. They are as likely to be too high as too low, so no one can systematically profit from them. "Random" in the results list refers to price *changes*, not to the price level.

## 5.3 The three forms of the EMH

| | **Weak form** (slide 7) | **Semi-strong form** (slide 8) | **Strong form** (slide 9) |
|---|---|---|---|
| Prices reflect | All **security-market historical information**: past prices, rates of return, trading volume, other market-generated data | All **public** information, market and non-market (historical included) | All information from **public and private** sources |
| Implication | Past returns and market data **do not help predict** future returns | Trading on new information **after it is public** gives no above-average **risk-adjusted** profit | **No group of investors** can consistently earn above-average risk-adjusted returns |
| Strategy it rules out | **Technical analysis** | **Fundamental analysis** | Even **insider** trading |
| Deck's light-bulb note | Covers only past *price* data, so studying financial statements could still find mispriced stocks | Fundamental and chart data are priced in. Only private (insider) information isn't, and it may not be usable at all | Prices are perfectly accurate, so no investor can find a mispriced asset or gain an unfair advantage |

The strong form carries an extra, unrealistic assumption: **perfect markets in which all information is cost-free and available to everyone at the same time** (slide 9). That assumption is why it is the form the evidence rejects.

> **Exam link: [sample Q1(a)](#/EFB335/18-sample-final-exam/question-1-market-efficiency-topic-5-4-marks).** A one-mark answer: *current prices fully reflect all historical market information (past prices, returns, volume), so future returns cannot be predicted from past returns and technical analysis cannot earn abnormal risk-adjusted returns after costs.*

> **"Above-average *risk-adjusted*" returns, every time.** A strategy that earns more by taking more risk is not evidence against the EMH. The CAPM (Topic 3) or a factor model (Topic 4) sets the required return. Only the excess over *that*, after transaction costs, counts.

## 5.4 Tests of the weak-form EMH

Two families (slide 10):

| 1. Statistical tests of independence | 2. Tests of trading rules |
|---|---|
| Autocorrelation tests | Filter rules, moving-average crossovers, RSI and other oscillators (slide 20) |
| Runs tests | **Testing constraints:** use only publicly available data · include all transaction costs · adjust results for risk |
| Intraday and day-of-the-week patterns | **Weaknesses:** only the better-known rules have been tested · too much subjective interpretation of data · an almost infinite number of possible rules |
| Monthly patterns (the January effect) | |
| Momentum and reversal effects | |

> **Exam link: [sample Q1(b)](#/EFB335/18-sample-final-exam/question-1-market-efficiency-topic-5-4-marks), 2 marks.** Name **both families** and give one or two tests from each, saying what result would reject the weak form. Listing statistical tests alone leaves a mark on the table.

### 1(a) Autocorrelation tests (slide 11)

An autocorrelation test looks for a **linear relationship between today's return and past returns** by estimating:

```
r_t = a + b · r_(t−1−T) + e_t          T = 0, 1, 2, 3 …

  a      the expected return (unrelated to the previous return)
  b      the relationship between today's return and the previous return
  e_t    random term: variation in today's return NOT related to the previous return
  ρ      autocorrelation coefficient between r_t and r_(t−1−T)
  ρ²     fraction of the variation in today's return explained by the lagged return
```

T sets the lag: T = 0 regresses today on yesterday, T = 1 on the day before, and so on. Under the weak form, **b ≈ 0 and ρ ≈ 0**, so past returns explain essentially none of today's return.

**Fama and MacBeth (1973)** used the CAPM to estimate each stock's expected return and found **virtually no correlation** between successive deviations from expected return, `(r_(t−1) − r̄_(t−1))` and `(r_t − r̄_t)`. Deviations from expected return are random, which is consistent with the weak form.

**Worked example: reading ρ² (illustrative number, not from the deck).** A regression of daily index returns on the previous day's return gives ρ = 0.10.

```
ρ² = 0.10² = 0.01  →  the lagged return explains 1% of the variation in today's return
                       99% is unrelated to yesterday (the e_t term)
```

Even a statistically significant ρ can be economically useless once transaction costs are counted. That is why the deck pairs these tests with trading-rule tests.

The deck points to `Topic 5 Testing Weak Form EMH.xls` for a practical version.

> **The square of ρ is the explained share, not ρ itself.** "ρ = 0.10, so 10% is explained" is wrong; it is 1%. This is the same ρ²/R² logic as the characteristic-line regression in Topic 3.

### 1(b) Runs tests (slides 12–13)

Runs tests **eliminate the effect of extreme observations**, which can heavily influence correlation coefficients. Only the *direction* of each price change matters:

```
'+'  a positive price change
'−'  a negative price change
run  a sequence of the same sign
```

**Worked example: the slide 12 sequence.**

```
+ + + +   − − − − −   + + +   0   − −
   1          2          3     4    5      →  5 runs (15 price changes)
```

The `0` (no change) breaks the run of minuses and counts as its own run. That is also how the unit's runs-test workbook codes it. If you dropped the zero, the two minus runs would merge and you would count 4.

**The logic.** If price changes were **positively** related (trends), long streaks of + and − would be more common than chance allows, so there would be **fewer runs than expected**. Too *many* runs means the opposite problem: negative dependence, with changes that keep reversing. Either way, independence fails.

**Expected number of runs.** The deck gives no formula. The standard one, for n₁ pluses and n₂ minuses, is shown below; it is a clarification from outside the deck.

```
E(runs) = 2·n₁·n₂ / (n₁ + n₂) + 1
```

The unit's weak-form workbook uses an equivalent large-sample version, `1 + 2(n − 1)·p·(1 − p)`, with p = the probability of a down day.

**Worked example: Checkpoint 1's pattern (slide 21).** `+++--++-----++`

```
Runs:     +++ | -- | ++ | ----- | ++   →  5 runs
Counts:   n₁ (+) = 7,  n₂ (−) = 7,  n = 14

E(runs) = 2(7)(7) / 14 + 1 = 7 + 1 = 8        (workbook form: 1 + 2(13)(0.5)(0.5) = 7.5)

Actual 5  <  expected 8   →  fewer runs than expected → long streaks → positive dependence
```

So this runs test **does not support** (is evidence against) the weak-form EMH.

> **Fewer runs = trends = against weak form.** Students often reverse this, reasoning that "fewer runs" sounds calmer and therefore more random. It is the opposite. Fewer runs means longer streaks, so the price is trending and the past predicts the future. Beyond the deck: with only 14 observations the standard deviation of the run count is about 1.80, so z = (5 − 8)/1.80 ≈ −1.67. That is borderline significant on a one-tailed 5% test and not significant two-tailed. The checkpoint wants the direction, not a significance test, but a sentence noting the tiny sample would be a strong addition to a written answer.

**Worked example: Fama (1965), slide 13 (Table 17.4).** Actual and expected runs for 30 US stocks at four differencing intervals. The 30 rows reconcile to the printed averages:

| Interval | Avg actual | Avg expected | Shortfall (% of expected) | Stocks with fewer runs than expected |
|---|---|---|---|---|
| Daily | 735.1 | 759.8 | 24.7 runs = **3.25%** | **26 of 30** |
| Four-day | 175.7 | 175.8 | 0.06% | 17 of 30 |
| Nine-day | 74.6 | 75.3 | 0.93% | 18 of 30 |
| Sixteen-day | 41.6 | 41.7 | 0.24% | 14 of 30 |

```
Daily shortfall: (759.8 − 735.1) / 759.8 = 24.7 / 759.8 = 3.25%   (base = expected runs)
```

The deck's takeaway is **fewer runs than expected for shorter intervals**. Daily changes show slight positive dependence (26 of 30 stocks below expectation). By four days and longer, actual and expected are almost identical. The daily dependence is far too small to trade on after costs, so the overall result supports the weak form.

### 1(c) Time patterns in security returns (slides 14–15)

**Intraday and day-of-the-week patterns** (slide 14). These highlight **market-microstructure** issues:

- **Monday returns are much lower** than other days.
- **Gibbons and Hess (1981):** Monday's return was **−33.5% per annum**, with large positive returns on Wednesdays and Fridays.
- **Harris (1986):** a large negative Monday return, positive returns on the other four days.
  - **Half** of the Monday decline happened between **Friday's close and Monday's open** (the weekend return). Most of the rest happened in the **first 45 minutes** of Monday trading.
  - On **all** days, prices **rose in the last 30 minutes** of trading.

**Monthly patterns: the January effect** (slide 15). Returns in January are substantially higher than in other months. **Fama (1991):**

1. The January return is greater than the average non-January return.
2. In January, small-stock returns exceed large-stock returns.
3. The January vs non-January gap is **larger for small stocks**.

**Worked example: the slide 15 table (Table 17.1, S&P 500 vs the smallest CRSP quintile, average monthly returns, %).**

| Portfolio | 1941–81 Jan | Feb–Dec | All | 1982–90 Jan (to 91) | Feb–Dec | All |
|---|---|---|---|---|---|---|
| S&P 500 | 1.34 | 0.92 | 0.96 | 3.20 | 1.23 | 1.39 |
| CRSP Small | 8.06 | 0.88 | 1.48 | 5.32 | 0.17 | 0.60 |

```
January minus Feb–Dec (percentage points per month):

                 1941–81                 1982–91
S&P 500     1.34 − 0.92 = 0.42      3.20 − 1.23 = 1.97
CRSP Small  8.06 − 0.88 = 7.18      5.32 − 0.17 = 5.15

1941–81: small stocks earn 8.06 / 0.88 ≈ 9.2× their usual monthly return in January
         and beat the S&P 500 in January by 8.06 − 1.34 = 6.72 points
```

"All" is the 12-month average: `(Jan + 11 × Feb–Dec) / 12`. For example, `(8.06 + 11 × 0.88)/12 = 1.48`. All four "All" figures reconcile.

The year-by-year panel (January returns 1982–91, %) shows how unreliable the effect is in any single year:

| Year | 1982 | 1983 | 1984 | 1985 | 1986 | 1987 | 1988 | 1989 | 1990 | 1991 |
|---|---|---|---|---|---|---|---|---|---|---|
| S&P | −1.63 | 3.48 | −0.65 | 7.68 | 0.44 | 13.43 | 4.27 | 7.23 | −6.71 | 4.42 |
| CRSP Small | −1.53 | 10.01 | 0.26 | 13.41 | 3.82 | 10.91 | 7.58 | 4.79 | −6.38 | 10.28 |
| Small − S&P | 0.10 | 6.53 | 0.91 | 5.73 | 3.38 | **−2.52** | 3.31 | **−2.44** | 0.33 | 5.86 |

Small stocks beat the S&P 500 in January in **8 of 10** years. Every difference reconciles, and the ten Januaries average to the panel's 3.20 (S&P) and 5.32 (small).

> **The January effect is a *small-firm* January effect.** The S&P's January premium was only 0.42 points in 1941–81. Almost all of the effect sits in the smallest quintile. When you name it as an anomaly, say "particularly for small firms", because that is Fama's third finding and the link to the size effect in §5.5.

### 1(d) Explanations for the January effect (slide 16)

**More evidence:** Gultekin and Gultekin (1983) found higher January returns in **all 17 countries** studied (the slide says "counties", a typo). Kato and Shallheim (1985) found excess January returns on the **Tokyo** exchange. Keim (1986) found that **lower-quality bonds** also earn extra January returns.

| Explanation | Mechanism |
|---|---|
| **Tax-selling hypothesis** | Just before year-end, investors sell losing securities to realise capital losses and lower their tax on net capital gains. Selling pressure depresses prices in December, and they **rebound in January**. |
| **Microstructure, Keim (1989)** | CRSP computes monthly returns from the closing price (or the bid–ask average if the stock didn't trade). The **last December trade was mostly at the bid**, so measured early-January returns look high. This is far stronger for **small stocks**, which partly explains the small-vs-large difference. |
| **Both, Reinganum (1983)** | Securities sold for tax-loss reasons are **more likely to trade at the bid** in December, so the two explanations are partly measuring the **same effect**. |

> **The tax story is a US (December year-end) story.** Its logic ties the effect to the tax year-end, so finding a January effect in countries with other tax years (Gultekin and Gultekin's 17 countries, Tokyo) is awkward for it. That is an inference from the slide, not a statement the deck makes. Use it as a discussion point, not a fact.

### 1(e) Momentum and reversals (slides 17–19)

| Effect | Pattern | Horizon | Source |
|---|---|---|---|
| **Momentum** | Recent winners **keep** doing well | Subsequent **1–12 months** | Jegadeesh and Titman (1993, 2001) |
| **Long-term reversal** | Winners become losers, and losers become winners | **3–5 years** | DeBondt and Thaler (1985) |

**Methodology** (slide 17): group stocks into the best performers over a 3-year **formation period** (Winners) and the worst (Losers). Then track each portfolio's performance over future periods: 1 month, 12 months, 36 months and so on. Slide 17 illustrates with a SpaceX (SPCX) price chart since its IPO: a sharp early spike, then a slide. This is a recent-listing example to look at, not test data.

**Explanations for momentum** (slide 18):

- **Prospect theory, Kahneman and Tversky (1979):** the pain of regret exceeds the joy of pride, which produces the **disposition effect**: investors **sell winners too soon and hold losers too long**.
  - *Good news:* premature selling (or a lack of buying) stops the price rising straight to its true value.
  - *Bad news:* reluctance to close losing positions means too little selling pressure, so the price falls less than it should.
  - Either way the price **underreacts**, then keeps drifting in the same direction. That drift is momentum.
- **Gradual information diffusion, Hong and Stein (1999):** fundamental news diffuses slowly across "newswatchers", so prices **underreact** and show positive autocorrelation. **Momentum traders**, who trade on past prices, are then drawn in and push prices **above** fundamental value. Because that is an overreaction, prices revert to fundamentals over longer horizons, which produces **reversals**. One model delivers both effects.

**Explanations for reversals** (slide 19):

- **Overreaction, DeBondt and Thaler (1985):** extreme losers become too cheap and bounce back. Extreme winners become too expensive and earn lower subsequent returns.
- **Fama and French (1996):** their **3-factor model can explain the long-term reversal but not medium-term momentum**. This is the link to Topic 4: it is why Carhart added a momentum factor, and why FF's own five-factor model still excludes it.
- **Overconfidence and self-attribution, Daniel, Hirshleifer and Subrahmanyam (1998):** investors are overconfident about their private information, so prices **overreact** and move away from fundamentals. When public news *confirms* their view, confidence rises by more than it falls when news contradicts it. In the long run the market realises the stocks are overvalued and prices correct.

> **Underreaction → momentum. Overreaction → reversal.** This is Checkpoint Q3. Hong–Stein is the one model that produces both: underreaction first, then momentum traders overshoot.

### 2. Trading-rule tests (slide 20)

These test whether simple technical analysis beats what the weak form predicts (essentially buy-and-hold):

- **Filter tests** ("Alexander's filter"): buy or sell when the price crosses a marker, compared with buy-and-hold.
- **Moving-average crossovers**, for example the 50-day vs the 200-day.
- **RSI and other oscillators**, such as MACD (moving average convergence–divergence) and rate of change.

**What the weak-form tests teach** (slide 20): **results generally support the weak-form EMH, but are not unanimous.** If the weak form holds, active investing on past data has no upside, and **passive (index) investing gives the best available returns**.

> **The deck contradicts itself on the weak-form verdict. Know which line to use.** Slides 20 and 43 say tests *generally support* the weak form and markets are *generally weak-form efficient*. The summary (slide 49) says *"momentum, reversal and investor behavioural patterns generally reject weak-form."* Both are in the deck. The defensible exam answer, matching the sample answer, is: **broadly supported in developed markets, with documented anomalies (momentum, reversals, calendar effects) that are mostly small, unstable or not exploitable after costs.** Check with your tutor which emphasis they want.

The slide 22 break photo ("Where in the world is this stock exchange?") shows a building carrying the **NSE** logo, apparently India's National Stock Exchange in Mumbai. It is not examinable, but it connects to slide 43's "except emerging markets".

## 5.5 Tests of the semi-strong-form EMH

### Two sets of studies (slide 23)

1. **Return-prediction studies.** These use time-series analysis of returns, or the cross-sectional distribution of returns, for individual stocks. If the market is efficient, past returns and other **public information** shouldn't predict returns.
2. **Event studies.** These measure **how fast** prices adjust to specific significant economic events. If the market is efficient, investing **after** the public announcement, and paying normal transaction costs, should not earn superior risk-adjusted returns.

### Adjusting for market effects (slide 24)

Raw returns are useless for these tests: a stock that rose 5% on a day the market rose 5% learned nothing new. The deck's adjustment:

```
AR_it = R_it − R_mt

  AR_it   abnormal rate of return on security i during period t
  R_it    rate of return on security i during period t
  R_mt    rate of return on a market index during period t
```

**Worked example (illustrative numbers).** A company announces surprise good earnings. Its shares rise 5% that day and the market index rises 1%.

```
AR = 5% − 1% = 4%      (the part of the day's return attributable to the news)
```

> **Subtract the *market* return, not the risk-free rate.** `AR = R − Rm` is the deck's market-adjusted model. A more refined version subtracts a CAPM or factor-model expected return instead (as Fama–MacBeth did in §5.4). Either way, "abnormal" always means *relative to a model of normal*. That is the root of the joint-hypothesis problem below.

### 1(a) Return-prediction studies: time series (slides 25–27)

Predict future returns for individual stocks, or the aggregate market, from public information:

- **Short-horizon** returns: limited results.
- **Long-horizon** returns: quite successful, based on the **dividend yield (D/P)**, the **default spread** and the **term spread**.
- **Quarterly earnings reports** may yield abnormal returns because of **unanticipated earnings changes**:
  - Large **standardised unexpected earnings (SUEs)** cause abnormal price changes, with **over 50% of the change happening *after* the announcement**.
  - Unexpected earnings can explain **up to 80%** of stock drift over a period: **post-earnings announcement drift (PEAD)**.
  - So the **earnings surprise is *not* instantaneously reflected** in prices. That is evidence against the semi-strong form.

Slide 27 gives two Apple earnings reactions: **28 January 2014, −8.0%** (soft holiday sales guidance), and **31 July 2026, "−7.4-9.3%"** (supply crunch and AI uncertainty). It also links a Damodaran post arguing the SEC should ask companies to publish *less* information rather than cancel quarterly reports.

> **Unreadable figure.** The 31 July 2026 Apple drop appears in the deck as "−7.4-9.3%". It could be a range (7.4% to 9.3%) or two figures, such as intraday vs close or after-hours vs next day. The slide doesn't say. Don't quote a single number from it.

### 1(b) Predicting cross-sectional returns (slides 25, 28–30)

Look for public information about individual stocks that predicts the cross-section of future **risk-adjusted** returns.

> **The joint hypothesis (slide 25).** These tests depend **both on market efficiency and on the asset pricing model** used to risk-adjust. If low-P/E stocks "beat" the CAPM, either the market is inefficient **or** the CAPM is the wrong model of risk, and the test can't tell which. This is the Topic 3/4 connection the examiner wants: Fama and French's answer to the size and value anomalies was to *add factors* (SMB, HML) rather than declare inefficiency.

| Anomaly | Finding (slides 28–30) | Verdict on semi-strong |
|---|---|---|
| **P/E ratio** | Low-P/E stocks earned **superior** risk-adjusted returns; high-P/E stocks earned significantly **inferior** ones. Public P/E data holds valuable information about future returns | **Inconsistent** |
| **Size effect** | Small firms consistently earned significantly larger risk-adjusted returns than large firms over extended periods. A "major efficient market anomaly", but **not stable from year to year**. Explanations via better risk measurement, transaction costs, analyst attention, trading activity and differential information **have not succeeded** | **Inconsistent** |
| **Neglected firms** | Firms sorted by number of analysts following them. The small-firm effect was **confirmed**, and the neglected-firm effect is caused by **lack of information and limited institutional interest** | **Inconsistent** |
| **Trading activity** | The size effect was confirmed, but there was **no significant difference** between the mean returns of the highest- and lowest-trading-activity portfolios | Trading activity itself isn't priced |
| **Book-to-market (B/M)** | **Significant positive relationship** between current B/M and future returns: the **value effect** | **Inconsistent** |

> **Size and B/M are SMB and HML.** In Topic 4 these anomalies became *risk factors*. Whether they are mispricing (EMH fails) or compensation for risk (the CAPM fails) is exactly the joint-hypothesis question. A discussion answer that states both readings beats one that picks a side.

### 2. Event studies (slides 31–34)

Event studies were first used to measure **how fast information is incorporated** into price. The deck's eight-step method (slide 31):

1. Collect a **sample of firms** that had a surprise announcement (the **event**).
2. Find the **precise announcement day** and designate it **day 0**.
3. Define the **period** to be studied (e.g. day −3 to +3).
4. Compute each firm's **return** on each day in the period.
5. Compute each firm's **abnormal return** on each day.
6. For each day, **average** the abnormal returns across all firms (Figure 17.2).
7. **Cumulate** those averages from the start of the period (Figure 17.3).
8. **Discuss** the results.

Written as formulas (the deck states steps 6 and 7 in words; the notation here is standard):

```
AAR_t = (1/N) · Σ_i AR_it              average abnormal return across N firms on day t
CAR_t = AAR_start + … + AAR_t          cumulative average abnormal return up to day t
```

**Worked example: a three-firm event study (illustrative numbers, %).**

```
Day                    −2      −1       0      +1      +2
Firm A   R           0.4     0.6     5.2     0.3    −0.1
         Rm          0.3     0.5     1.0     0.4     0.0
         AR          0.1     0.1     4.2    −0.1    −0.1
Firm B   R          −0.2     1.1     3.9     0.8     0.5
         Rm         −0.4     0.8     0.6     0.9     0.4
         AR          0.2     0.3     3.3    −0.1     0.1
Firm C   R           0.9     0.2     6.1    −0.6     1.2
         Rm          1.0     0.1     1.3    −0.4     1.2
         AR         −0.1     0.1     4.8    −0.2     0.0

AAR = (AR_A + AR_B + AR_C)/3
                    0.07    0.17    4.10   −0.13    0.00
CAR (running sum)   0.07    0.23    4.33    4.20    4.20
```

(The CAR row sums the unrounded AARs, which is why 0.07 + 0.17 shows as 0.23.) Almost the whole adjustment, a 4.10% AAR, happens **on day 0**, and the CAR is **flat afterwards**. An investor buying at the close on day 0 earns nothing abnormal, which is **consistent with semi-strong efficiency**.

**Reading the deck's figures:**

- **Figure 17.2 (slide 32)**, a stylised AAR bar chart: small excess returns around days −3 to −1, the **largest bar on the announcement day**, then small positive and negative bars on days +1 to +3. The adjustment is concentrated at day 0.
- **Figure 17.3 (slide 33)**, a **stock-split** event study by month: the cumulative average residual climbs steadily from about 0 at month −29 to about **0.33 by the split month**, then stays **flat** for the 30 months after. The run-up happens *before* the event, as firms tend to split after strong performance. Once the split is public there is **no further abnormal return to capture**, which is consistent with semi-strong efficiency.
- **Slide 34, post-earnings-announcement drift** (Rendleman, Jones and Latané, 1982): CARs for ten earnings-surprise deciles from day −20 to +90. Reading the chart approximately, decile 10 (best surprises) jumps to about +4% at day 0 and keeps **drifting up to about +8% by day 90**. Decile 1 falls to about −5% and drifts down to about −8.6%.

```
Decile 10 (approximate chart readings):
  CAR just after day 0 ≈ 4%,  CAR at day 90 ≈ 8%
  share of the 90-day move that happens AFTER the announcement = (8 − 4)/8 = 50%
```

That lines up with slide 27's "over 50% of the change happening after the announcement". The drift is predictable from public information, so it is **evidence against the semi-strong form**.

> **Efficient = jump on day 0, flat after. Drift after day 0 = inefficient. A run-up *before* day 0 is not a violation.** Pre-event CARs reflect leakage or anticipation (the split firms' earlier good performance). The semi-strong test is whether you can profit by trading **after** the information is public. Markers look for that distinction.

> **Average across firms first, then cumulate across days.** AAR is a cross-sectional average for one day; CAR is a time-series sum of AARs. Summing one firm's ARs gives that firm's CAR, which is useful but is not the event-study statistic in step 7.

The deck points to `Topic 5 Test of Semi-strong Form EMH.xls` for a practical version. The workbook in your folder is titled *Testing Semi-strong Form EMH*, built on earnings-announcement dates. It also links marketindex.com.au for today's ASX price-sensitive announcements.

## 5.6 Tests of the strong-form EMH

The strong form says prices reflect **public and private** information, so **no group of investors with private information should consistently earn above-average profits** (slide 35). The tests look at three groups who might have such information:

1. **Corporate insiders**
2. **Security analysts**
3. **Professional money managers**

**ASX disclosure rules** (slide 35 light-bulb box):

| Rule | Requirement |
|---|---|
| **LR 3.1 (Immediate Disclosure)** | A listed entity must **immediately** notify the market once aware of information a reasonable person would expect to have a **material effect on price**. Exceptions: confidential information, incomplete or unfinalised proposals, trade secrets, or matters purely for internal management |
| **LR 12.6 (Trading Policies)** | A written **trading policy** on when directors and employees may trade, lodged with the ASX |
| **LR 12.11 (Restricted Securities)** | Promoters, seed capitalists and related parties are subject to mandatory **escrow** (holding lock) periods |
| **LR 18.7** | The ASX can issue a **"price query" notice** |

### 1. Corporate insider trading (slides 36–37)

- **Who (US):** major corporate officers, directors, and owners of **10% or more** of any equity class.
- **Reporting:** insiders report their trades to the **SEC each month**, and the trades are **made public about six weeks later**, which lets researchers study them. On the ASX, insider trades must be reported to the market **within 5 business days**, and **substantial holders (above 5%)** must declare any buy or sell **within 2 business days**.
- **Finding:** insiders generally earn **above-average profits, especially on purchase transactions**. They had private information and profited from it, so **strong form fails**.
- **For public investors:** after transaction costs, **copying insider trades is not generally profitable**. Returns can be improved by combining insider data with **key financial ratios** and the **type of insider**.

> **Stale detail.** "Report to the SEC each month … public about six weeks later" describes the older US regime in the textbook. US insiders now file much faster. This is outside knowledge, so learn the deck's version for the exam, and treat the ASX timings on the same slide as the current local rules. Check with your tutor if the question turns on it.

**Worked example: reading the slide 36 insider table** (Finviz, 7 August 2026). Value = cost × shares:

```
ATTO  Redmile Group (10% owner)   Buy    17.00 × 200,000 = $3,400,000   ✓
ATTO  Redmile Group (10% owner)   Buy    17.00 × 400,000 = $6,800,000   ✓
PUBM  Goel (Chief Executive)      Sale   17.74 × 211,302 = $3,748,497   shown $3,749,427
SVV   Medway (General Counsel)    Opt.    1.41 ×  10,000 =    $14,100   ✓
SVV   Medway (General Counsel)    Opt.    2.06 ×  45,000 =    $92,700   shown $92,598
SVV   Medway (General Counsel)    Sale   11.98 ×  45,000 =   $539,100   ✓
```

The two mismatches come from rounded prices: the shown values imply average prices of $17.7444 and $2.0577, so the trades were filled at several prices and the "Cost" column is a rounded average. Per the deck, the **purchases** by the 10% owner are the informative rows. That is where insiders show above-average profits.

### 2. Security analysts (slides 38–39)

**The test:** can we identify analysts who select undervalued stocks? Once an analyst's stock selection is **made known**, is a significant abnormal return available to those who **follow the recommendation**?

**Findings** (slide 39):

- There is evidence of **superior analysts** who apparently possess private information.
- Analysts appear to have **both market-timing and stock-picking ability**.
- **Consensus recommendations contain no incremental information, but *changes* in consensus recommendations are useful.**
- The most useful information was **upward earnings revisions**.

Slide 39 also shows the AFR/Extel 2025 vs 2026 table of top-ranked investment-bank research analysts by sector, based on responses from 369 buy-side professionals across 201 firms. It is a reminder that the buy side does rank analyst quality.

**Worked example: the slide 38 Microsoft analyst page** (MarketWatch, 7 August 2026).

```
Price targets vs current price $499.86:
  Average  $563.87  →  563.87/499.86 − 1 = +12.81%
  Median   $550.00  →  550.00/499.86 − 1 = +10.03%
  Low      $400.00  →  −19.98%        High $870.00 → +74.05%

Analyst ratings          3M ago   1M ago   Current
  Buy                       49       53        52
  Overweight                 9       10         9
  Hold                       3        3         3
  Underweight / Sell         0        0         0
  Total                     61       66        64     consensus BUY in all three
  Buy + Overweight now: 61/64 = 95.3%

EPS estimate revisions:
  FY2027  current $19.70 vs 3M ago $19.43 → +1.39%   (vs 1M ago $19.46 → +1.23%)
  FY2028  current $23.47 vs 3M ago $22.87 → +2.62%   (vs 1M ago $22.80 → +2.94%)

Recent quarters (the top strip; its row labels are cut off, so these appear to be
estimate / actual / surprise):
  3.90 → 4.14  surprise 0.24 = 6.15% of estimate
  4.06 → 4.27  surprise 0.21 = 5.17%
  4.24 → 4.74  surprise 0.50 = 11.79%
```

Applying slide 39: the **consensus "Buy" is the same in all three columns**, so by the deck's evidence it carries **no incremental information**. The **upward EPS revisions** for both years are the kind of signal the studies found *useful*. The run of positive earnings surprises is the SUE/PEAD story from §5.5. Bases: target upside is a percentage of the current price, revisions are a percentage of the earlier estimate, and surprises are a percentage of the estimate.

### 3. Professional money managers (slides 40–41)

**Why test them:** they are trained professionals working full time at investment management. *If any investor can earn above-average returns, it should be this group.* And *if any non-insider can obtain inside information, it would be this group*, because of the extensive management interviews they conduct.

**The performance:** most tests examine **mutual funds**, and newer tests also cover trust departments, insurance companies and investment advisers. Comparing "universes" with benchmarks is difficult, but overall the results give **at best some weak support for the strong-form EMH**. In other words, professionals mostly do not beat the market.

Slide 40's chart (InvestSMART, fund performance to 31 July 2026) compares a Vanguard Australian Shares index fund, **945 peer funds**, the **S&P/ASX 200 TR** benchmark and InvestSMART's own fund at horizons from 1 month to 10 years p.a. In the chart, the **peer bar sits below the benchmark at every horizon** (and is negative over 6 months). The index fund and InvestSMART's fund also sit slightly below the benchmark throughout, the cost of fees. That illustrates the slide 41 finding.

> **Strong-form scorecard, in one line each.** Insiders **do** earn abnormal returns, so strong form is **rejected**. Analysts show **some** value, but in *changes* and *revisions* rather than consensus levels. Fund managers **mostly don't** beat benchmarks, which gives weak support. Rejecting the strong form rests on the insiders.

## 5.7 Implications of efficient capital markets (slides 42–43)

The evidence is **mixed**. Capital markets are efficient with respect to numerous sets of information, but there are **substantial instances where the market fails to adjust rapidly to public information** (slide 42). The implications run through three areas: **technical analysis, fundamental analysis and portfolio management** (§5.8–5.10).

Slide 42 also shows a bar split **85 (algorithmic/automated institutional execution) vs 15 (retail investor / manual institutional execution)**, linked to an ASIC release on modernising trading rules for technology and AI. It adds ASX totals for July 2026: **market capitalisation $3.3tr, 2,047 listed companies**.

> **Unlabelled units.** The 85/15 bar has no units or date. It reads as a percentage share of trading or execution, but the slide doesn't say of what (value? volume? orders?). Don't quote it as "85% of trades" without checking.

The deck's summary table (slide 43, adapted from prepnuggets.com):

| EMH form | What doesn't work | Observed in the market? | Conclusion |
|---|---|---|---|
| **Strong** (all public and private information) | **Insider trading** | **No** | Market prices are unlikely to reflect private information (because of insider-trading laws) |
| **Semi-strong** (all publicly known information) | **Fundamental analysis** | **Yes** | Markets are generally semi-strong efficient (**except emerging markets**) |
| **Weak** (all past market data) | **Technical analysis** | **Yes** | Markets are generally weak-form efficient (**except emerging markets**) |

> **Exam link: [sample Q1(c)](#/EFB335/18-sample-final-exam/question-1-market-efficiency-topic-5-4-marks).** This table *is* the one-mark answer: developed markets are **generally weak-form and semi-strong efficient, but not strong-form efficient**, because insiders earn abnormal returns. Add the anomalies (size, value, momentum, PEAD) as the caveat on semi-strong.

## 5.8 EMH and technical analysis (slides 44–45)

The **assumptions of technical analysis directly oppose** the EMH:

- Technicians believe new information is **not immediately available to everyone**. It is disseminated from **informed professionals** first, then to the **aggressive investing public**, then to the **masses**.
- Technicians believe investors **do not analyse information and act immediately**.
- So prices move to a new equilibrium **gradually**, creating **trends that persist**. Technicians build systems to detect the move to a new equilibrium (a **breakout**) and trade on it.

**The EMH verdict:** if the market is **weak-form efficient**, a trading system that depends on past trading data has **little value, given its higher trading costs**.

The deck demos basic technical indicators on MarketIndex.com.au. It also recommends *Flash Boys* (Michael Lewis), described on the slide as exposing how high-speed algorithms let insiders **front-run** investor orders by milliseconds. Slide 45 calls it "finance fiction". It is generally catalogued as non-fiction (outside the deck), so treat that label as a slip on the slide.

## 5.9 EMH and fundamental analysis (slides 46–47)

- Fundamental analysts believe there is a basic **intrinsic value** for the aggregate market, industries and individual securities, driven by **underlying economic factors**.
- Investors should determine intrinsic value at a point in time and **compare it with the market price**.
- If a manager can do a **superior job of estimating intrinsic value**, they can make superior market-timing (and selection) decisions and earn above-average returns.
- Intrinsic-value analysis covers **aggregate market analysis** and **industry and company analysis**.

> **Semi-strong efficiency doesn't say fundamental analysis is pointless. It says *average* fundamental analysis earns average returns.** Only analysis that is **superior** to the market consensus adds value. That ties to the analyst findings in §5.6: some analysts appear superior, and the evidence is in *changes* and *revisions*.

The deck's reading suggestion here is *Value-able* (Roger Montgomery), a Buffett-style value-investing book.

## 5.10 EMH and portfolio management (slide 48)

**Portfolio managers without superior analysts** should:

1. Determine and quantify the **client's risk preferences**.
2. Construct the **appropriate portfolio** for that risk level.
3. **Diversify completely on a global basis** to eliminate all unsystematic risk.
4. **Maintain the desired risk level by rebalancing** whenever necessary.
5. **Minimise total transaction costs.**

This is the case for **passive, indexed** management, which Topic 6 develops. The same logic appears on slide 20: if the weak form holds, passive investing gives the best available returns.

> **Efficient markets still need portfolio managers.** The EMH removes the *stock-picking* job, not the *portfolio* job. Matching risk to the client, diversifying, rebalancing and controlling costs all still add value. An answer saying "under the EMH, managers are pointless" loses the mark.

---

## Summary

*(Slide 49, condensed, with the numbers from this note.)*

- **Market efficiency:** prices fully reflect all available information, so no one can consistently earn above-average **risk-adjusted** returns after costs. Fama's three **nested** forms: **weak** (historical market data) ⊂ **semi-strong** (all public information) ⊂ **strong** (public and private).
- **Weak-form tests:**
  - *Statistical*: autocorrelation (`r_t = a + b·r_(t−1−T) + e_t`, ρ ≈ 0 under the EMH), runs (fewer than expected = trends), day-of-week (Monday −33.5% p.a.), the January effect (mainly small firms: 8.06% vs 0.88% a month in 1941–81), momentum (1–12 months) and reversals (3–5 years).
  - *Trading rules*: filters, moving averages, oscillators.
  - Verdict: generally supportive, not unanimous. The deck's summary says the behavioural patterns "generally reject" weak form.
- **Behavioural explanations:** the disposition effect and gradual diffusion lead to underreaction and momentum; overreaction and overconfidence lead to reversals. FF3 explains reversals but not momentum.
- **Semi-strong tests:**
  - *Return prediction*: time series (D/P, default and term spreads; SUEs and PEAD, with over 50% of the move after the announcement) and cross-section (P/E, size, neglected firms, B/M). All are subject to the **joint hypothesis** with the pricing model.
  - *Event studies*: `AR = R − Rm`, average across firms (AAR), cumulate across days (CAR). Efficient = jump on day 0, then flat.
- **Strong-form tests:** **insiders earn abnormal returns, especially on purchases, so strong form is rejected.** Analysts add value through *changes* and upward revisions. Fund managers give only weak support.
- **Implications:** markets are generally weak and semi-strong efficient (except emerging markets) but not strong-form efficient. Technical analysis has little value after costs, fundamental analysis needs *superior* insight, and managers without superior analysts should go passive: risk-match, diversify globally, rebalance, minimise costs.

## ✅ Checkpoint

*(The deck's Checkpoint 1, answered, followed by three questions in the style of sample Q1.)*

<details><summary>1. A runs test shows the following pattern: +++--++-----++. This runs test ______ weak-form EMH</summary>

**Does not support** (is evidence against). There are 5 runs (`+++ | -- | ++ | ----- | ++`) against an expected `2(7)(7)/14 + 1 = 8` for 7 ups and 7 downs. Fewer runs than expected means longer streaks, so price changes are positively dependent (trending), and past changes help predict future ones. With only 14 observations the shortfall is only borderline significant (z ≈ −1.67), which is worth one sentence if the question gives space.

</details>

<details><summary>2. Weak-form EMH states that current stock prices reflect _________</summary>

**All historical market information**: the past sequence of prices, rates of return, trading volume and other market-generated data. So past returns can't predict future returns, and technical analysis can't earn abnormal risk-adjusted returns.

</details>

<details><summary>3. ______ may contribute to momentum while ______ generally contributes to reversals</summary>

**Underreaction** (from the disposition effect, or gradual information diffusion across newswatchers) may contribute to **momentum**. **Overreaction** (DeBondt–Thaler; overconfidence and self-attribution; momentum traders overshooting in Hong–Stein) generally contributes to **reversals**.

</details>

<details><summary>4. Describe semi-strong form efficiency and the two ways it is tested.</summary>

Prices fully reflect **all public information**, market and non-market, historical included. So trading on information **after it is announced** can't earn above-average risk-adjusted returns, and fundamental analysis using public data adds nothing on average. Tests: (1) **return-prediction studies**, time series (D/P, default and term spreads, earnings surprises) and cross-section (P/E, size, neglected firms, B/M), all subject to the joint hypothesis with the pricing model; (2) **event studies**, which compute `AR = R − Rm` around the announcement, average across firms and cumulate across days. Efficient = the CAR adjusts on day 0 and is flat afterwards.

</details>

<details><summary>5. Why is the strong form rejected, and why doesn't that mean you should copy insiders' trades?</summary>

Corporate insiders earn **above-average returns, especially on purchases**, so private information is not fully in the price. But insider trades are only disclosed after a lag (about six weeks in the deck's US data, 5 business days on the ASX), and after transaction costs **following them is not generally profitable** for public investors. That is consistent with the *semi-strong* form, because once the trade is public it is priced. Combining insider data with financial ratios and the type of insider can improve returns.

</details>

<details><summary>6. An event study shows a CAR that jumps on day 0 and then keeps rising for 60 days. What does it say about efficiency?</summary>

The continued rise is **predictable from public information** (the announcement), so an investor buying after day 0 earns abnormal returns. This is evidence **against semi-strong efficiency**, the post-earnings-announcement drift pattern (slide 34; slide 27's "over 50% of the change after the announcement"). Caveat: the joint hypothesis. The drift could partly reflect a misspecified benchmark (`R − Rm` ignores beta and other factors), which is why Rendleman, Jones and Latané's title stresses the importance of risk adjustments.

</details>
