# EFB335 — Unit Overview

<!-- notation:start -->
<details class="notation"><summary>Notation key — what the symbols in this note mean</summary>

| Symbol | Means |
|---|---|
| `CML` | Capital market line — the best mixes of the risk-free asset and the market portfolio, priced on total risk σ |
| `SML` | Security market line — the CAPM as a line: required return against beta |
| `CAPM` | Capital asset pricing model — E(Rᵢ) = R_f + βᵢ[E(R_M) − R_f] |
| `APT` | Arbitrage pricing theory — expected return explained by several risk factors, not just the market |

[Full EFB335 notation key →](#/EFB335/99-notation-key)

</details>
<!-- notation:end -->

**QUT · Semester 2, 2026 · Unit Coordinator: Yatra Forudi**
**Textbook: Reilly & Brown, *Investment Analysis and Portfolio Management***

> Living document. Topics 1–4 complete, including Tutorials 1–4, plus the Assessment 1 prep guide. **Topics 5–10 now have full reference notes (docs 30–35, added 3 Nov 2026)**, written from the lecture decks; Tutorials 5–10 are not yet worked on the site.

---

## What's in these notes

| # | Document | Covers |
|---|---|---|
| 00 | **Unit Overview** | This page — unit map and document index |
| 01 | **Topic 1 — The Investment Background** | Returns, risk measures, margin transactions, order types |
| 02 | **Topic 2 — Portfolio Management** | *Measurement:* Markowitz, covariance and correlation, portfolio risk, the covariance matrix, the efficient frontier |
| 03 | **Topic 2 (cont.) — Investor Utility and Investment Strategy** | *Preference and application:* the utility function, the risk tolerance questionnaire, strategy design and evaluation |
| 04 | **Topic 3 — Capital Market Theory and CAPM** | The Capital Market Line, the market portfolio and the Separation Theorem, beta, the CAPM/SML, relaxing the assumptions, empirical tests, the benchmark error problem |
| 05 | **Topic 4 — APT and Multifactor Models** | Arbitrage Pricing Theory, the three-stock arbitrage, empirical tests and Shanken's challenge, macro factor models (Chen–Roll–Ross), Fama–French three- and five-factor models, factor regressions in Excel |
| 06 | **Tutorial 1 — Full Worked Solutions** | Ch 1 Q6–Q7, Ch 1 P3 & P5, Ch 3 Q9, Ch 3 P2 & P4 |
| 07 | **Tutorial 2 — Full Worked Solutions** | Ch 6 Q11 (variation), Ch 6 P1, P3, P4 and P7 |
| 08 | **Tutorial 3 — Full Worked Solutions** | Ch 7 Q2 & Q5, Ch 7 P2, plus three non-textbook CML/CAPM/optimisation problems |
| 09 | **Tutorial 4 — Full Worked Solutions** | Ch 7 Q7 & Q9, Ch 7 P9, P13 and P14(a–b), including the full Exhibit 7.22 regressions |
| 10 | **Extra Practice Questions** | Sets A–L (G–L cover Topics 5–10), closed-book, answers collapsed |
| 11 | **Formula Sheet & Exam Traps** | Every formula in one place (Topics 1–10) plus the checklist of 83 traps |
| 12 | **Assessment 1 — Investment Briefing Prep Guide** | The 14 calculations with exact Excel formulas, the briefing-note template, a two-hour time plan, sanity checks, and two flagged discrepancies in the unit's sample solution |
| 13 | **Revision Pack 1 — Topic 1 + Tutorial 1** | From-scratch teaching of returns, risk, margin and short sales; Tutorial 1 fully worked; self-test; cheat sheet |
| 14 | **Revision Pack 2 — Topic 2 + Tutorial 2** | From-scratch teaching of covariance, correlation, portfolio risk, the efficient frontier and utility; Tutorial 2 fully worked; self-test; cheat sheet |
| 15 | **Revision Pack 3 — Topic 3 + Tutorial 3** | From-scratch teaching of the CML, beta, CAPM/SML and the critiques; Tutorial 3 fully worked; self-test; cheat sheet |
| 16 | **Revision Pack 4 — Topic 4 + Tutorial 4** | From-scratch teaching of APT, the arbitrage conditions, factor models and the Fama–French regressions; Tutorial 4 fully worked; self-test; cheat sheet |
| 17 | **[The Official Exam Formula Sheet](#/EFB335/17-official-exam-formula-sheet)** | The one-page sheet you get in the final exam, line by line and mapped to topics · the garbled fund-return formula reconstructed · **what is NOT on it and must be memorised** (the CAPM among them) · the attribution-formula difference from the textbook |
| 18 | **[The Sample Final Exam](#/EFB335/18-sample-final-exam)** | The unit's own sample paper, all ten questions worked · **36 of 40 marks come from Topics 5–10** · 28 of 40 marks are written answers, not calculations |
| 40 | **[The 30-Minute Cram](#/EFB335/40-exam-eve-30-minute-cram)** | The night-before read: the exam's shape, every topic in summary, the formulas on and off the sheet with worked numbers, the sample paper's answers in short, and the ten traps |
| 30 | **[Topic 5 — Market Efficiency](#/EFB335/30-topic-5-market-efficiency)** | The EMH and its three forms, weak-form tests (autocorrelation, runs, trading rules), semi-strong tests (return prediction, event studies, anomalies), strong-form tests (insiders, analysts, fund managers), implications for analysis and portfolio management |
| 31 | **[Topic 6 — Equity Portfolio Management Strategies](#/EFB335/31-topic-6-equity-portfolio-management)** | The industry, passive vs active, index construction, tracking error, index funds and ETFs, fundamental and technical strategies, anomalies, tax efficiency, value vs growth, style analysis, asset allocation |
| 32 | **[Topic 7 — Bond Portfolio Management Strategies](#/EFB335/32-topic-7-bond-portfolio-management)** | Passive and active bond strategies, the price–yield curve, rate sensitivity, Macaulay and modified duration, convexity, the term structure, core-plus, matched funding and immunisation, contingent immunisation |
| 33 | **[Topic 8 — Derivative Use in Investments](#/EFB335/33-topic-8-derivatives)** | Forwards and futures, call and put payoffs, hedging with futures, protective puts, collars, covered calls, straddles, strips, straps, strangles, spreads, range forwards |
| 34 | **[Topic 9 — Hedge Funds and Other Alternative Investments](#/EFB335/34-topic-9-hedge-funds-and-alternatives)** | Private equity and the J-curve, venture capital, hedge fund structure and strategies, merger arbitrage, LTCM, fees and the high-water mark, hedge fund performance |
| 35 | **[Topic 10 — Performance Evaluation of Managed Funds](#/EFB335/35-topic-10-performance-evaluation)** | Peer groups, tracking measures, Sharpe, Treynor, Jensen's alpha, the information ratio, Sortino, fund returns, attribution analysis, benchmark error, reporting standards, persistence |

> **Topics 5–10 are written up as docs 30–35** (3 Nov 2026), from the
> lecture decks, with every worked number re-checked in Python. Each note
> flags where a slide is unclear, contradicts itself or disagrees with the
> official formula sheet — check those with your tutor. The plain-English
> primers (docs 23–28) are still the gentlest way in. Tutorials 5–10 are
> not yet worked here. [Doc 17](#/EFB335/17-official-exam-formula-sheet)
> lists exactly what each topic contributes to the formula sheet.

**Start with the revision packs (13–16)** if you're learning the material for the first time — they teach each topic from scratch and end with a cheat sheet. Docs 01–11 are the reference notes.

Topic 2 is split across **02** and **03**. Doc 02 covers everything that is objectively computable from a return series — two analysts must get the same answer. Doc 03 covers the parts that depend on the individual investor. Read them in order.

**Two flagged corrections** live inline in doc 06 and should not be "corrected back": the Ch 3 Problem 2(c) margin call price is **\$30**, not \$20; and Ch 3 Problem 4's interest treatment is genuinely ambiguous, so all three readings are shown.

**Doc 07 flags a third:** the supplied `Tutorial 2 SV-1.xlsx` is an **empty template**, not a solutions file — there are no official answers to check against, so every figure was computed from scratch.

**Doc 04 flags a fourth, in the supplied `Topic 3 JPM vs mkt-1.xlsx` workbook:** a date-misalignment bug pairs JPM returns from the wrong 15-year window against the S&P 500/MSCI World returns, producing implausible near-zero/negative cached betas. Corrected betas (realigned by calendar date) are given instead.

---

## Assessments

| # | Item | When | Weight |
|---|---|---|---|
| 1 | **Investment Briefing** — individual, timed, Excel + 500-word note | **Wed 2 Sep 2026, 9:00–11:00am** (Week 7). Firefox only. No late submissions. | 20% |
| 2 | **Group Project** — investment strategy, efficient frontier, 2-year back-test | Report **Week 11** (w/c 7 Oct) · Presentation **Week 12** (8 min/group) · Peer evaluation **Wed 21 Oct, 11:59pm** | 40% = report 20 + reflection 5 + presentation 10 + peer eval 5 |
| 3 | **Final exam** | Central exam period | 40% |

### Assessment 1 — Investment Briefing (20%)

Covers **Topics 1–4**. You are given a spreadsheet of total return indices and asked for ~14 one-mark Excel calculations (returns, annualised mean and σ, Sharpe, correlation matrix, beta, cumulative and distribution charts, factor regression, CAPM expected return) plus a 6-mark briefing note for a client meeting. **All cells must be formulas — hard-coded numbers score zero.** Full prep guide in doc 12; the factor-regression calculation is drilled in docs 05 and 16.

### Assessment 2 — Group Project (40%)

Form a portfolio of the **risk-free asset plus 7 ASX 200 stocks** from AU$100,000 as at **1 July 2023**, using only information available then. RFR assumed **3.35% pa**. Data: `EFB335 S2 2026 Group Project Data.xlsx` — monthly adjusted closes for 5 years to 30/06/2025, plus market cap, P/E and dividend yield. In-sample window 01/07/2020–30/06/2023; out-of-sample 01/07/2023–30/06/2025.

| Q | Task | Words |
|---|---|---|
| 1 | Monthly returns, average annual return, monthly σ, annualised σ for each stock (in-sample) | — |
| 2 | State a replicable strategy (low P/E, high yield, CAPM under-pricing, Topic 6 anomalies…) and select the best 7 stocks by it | 750 |
| 3 | Efficient frontier of the 7 stocks via **Solver**; show working | 250 |
| 4 | Locate the **unconstrained** optimal (tangency) portfolio; then re-optimise with **no short sales and max 30% per stock** and locate the **constrained** optimal | 250 |
| 5 | Write the CAL equations for RFR + unconstrained and RFR + constrained; plot them. Build the **final constrained** portfolio = 95% constrained optimal + 5% RFR; show weights, dollar amounts, E(R) and σ | 250 |
| 6 | Buy-and-hold 01/07/23–30/06/25: ending value of shares + RFR interest and principal, realised return and σ | 500 |
| 7 | Reflection: what you learned, what you'd change, whether the constraints helped or hurt | 500 |

Marking: Q1–6 → 20 points (report), Q7 → 5 points (reflection), presentation 10, peer evaluation 5 (rate each member on completing assigned tasks on time with thorough work; 1–2 sentence justification each; anonymous). Report needs a cover page with group number and member names/IDs, then sections for strategy, frontier construction, portfolio positions vs frontier and RFR, two-year performance, reflection. Name the Word and Excel files with your group number.

> The Topic 2 lecture's "Preparing for Assessment 2" slide is the only other guidance: state the strategy as a process anyone could follow, build it in-sample, test it out-of-sample, and **don't overfit** — a rule tuned to 2020–23 data will not survive 2023–25.

---

## Unit Map

| Topic | Title | Chapter |
|---|---|---|
| 1 | The Investment Background | Ch 1 + Ch 3 (§3.5 only) |
| 2 | Portfolio Management | Ch 6 |
| 3 | Asset Pricing Models I | Ch 7 (§7.1–7.3) |
| 4 | Asset Pricing Models II | Ch 7 (§7.4–7.5) |
| 5 | Market Efficiency | Ch 5 · [doc 30](#/EFB335/30-topic-5-market-efficiency) |
| 6 | Equity Portfolio Management Strategies | Ch 11 · [doc 31](#/EFB335/31-topic-6-equity-portfolio-management) |
| 7 | Analysis of Bonds (deck title: Bond Portfolio Management Strategies) | Ch 13 (Ch 12 revision) — *video only, no live lecture wk 7* · [doc 32](#/EFB335/32-topic-7-bond-portfolio-management) |
| 8 | Derivative Use in Investments | Ch 16.4 · [doc 33](#/EFB335/33-topic-8-derivatives) |
| 9 | Hedge Funds and Other Alternative Investments | Ch 17 · [doc 34](#/EFB335/34-topic-9-hedge-funds-and-alternatives) |
| 10 | Performance Evaluation | Ch 18 · [doc 35](#/EFB335/35-topic-10-performance-evaluation) |
