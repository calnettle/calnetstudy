# EFB335 — Unit Overview

**QUT · Semester 2, 2026 · Unit Coordinator: Yatra Forudi**
**Textbook: Reilly & Brown, *Investment Analysis and Portfolio Management***

> Living document. Topics 1–3 complete, including Tutorials 1, 2 and 3, plus the Assessment 1 prep guide. Add new topics as lectures are released.

---

## What's in these notes

| # | Document | Covers |
|---|---|---|
| 00 | **Unit Overview** | This page — unit map and document index |
| 01 | **Topic 1 — The Investment Background** | Returns, risk measures, margin transactions, order types |
| 02 | **Topic 2 — Portfolio Management** | *Measurement:* Markowitz, covariance and correlation, portfolio risk, the covariance matrix, the efficient frontier |
| 03 | **Topic 2 (cont.) — Investor Utility and Investment Strategy** | *Preference and application:* the utility function, the risk tolerance questionnaire, strategy design and evaluation |
| 04 | **Topic 3 — Capital Market Theory and CAPM** | The Capital Market Line, the market portfolio and the Separation Theorem, beta, the CAPM/SML, relaxing the assumptions, empirical tests, the benchmark error problem |
| 05 | **Tutorial 1 — Full Worked Solutions** | Ch 1 Q6–Q7, Ch 1 P3 & P5, Ch 3 Q9, Ch 3 P2 & P4 |
| 06 | **Tutorial 2 — Full Worked Solutions** | Ch 6 Q11 (variation), Ch 6 P1, P3, P4 and P7 |
| 07 | **Tutorial 3 — Full Worked Solutions** | Ch 7 Q2 & Q5, Ch 7 P2, plus three non-textbook CML/CAPM/optimisation problems |
| 08 | **Extra Practice Questions** | Sets A–E, closed-book, answers collapsed |
| 09 | **Formula Sheet & Exam Traps** | Every formula in one place plus the checklist of traps |
| 10 | **Assessment 1 — Investment Briefing Prep Guide** | The 14 calculations with exact Excel formulas, the briefing-note template, a two-hour time plan, sanity checks, and two flagged discrepancies in the unit's sample solution |
| 11 | **Revision Pack 1 — Topic 1 + Tutorial 1** | From-scratch teaching of returns, risk, margin and short sales; Tutorial 1 fully worked; self-test; cheat sheet |
| 12 | **Revision Pack 2 — Topic 2 + Tutorial 2** | From-scratch teaching of covariance, correlation, portfolio risk, the efficient frontier and utility; Tutorial 2 fully worked; self-test; cheat sheet |
| 13 | **Revision Pack 3 — Topic 3 + Tutorial 3** | From-scratch teaching of the CML, beta, CAPM/SML and the critiques; Tutorial 3 fully worked; self-test; cheat sheet |

**Start with the revision packs (11–13)** if you're learning the material for the first time — they teach each topic from scratch and end with a cheat sheet. Docs 01–09 are the reference notes.

Topic 2 is split across **02** and **03**. Doc 02 covers everything that is objectively computable from a return series — two analysts must get the same answer. Doc 03 covers the parts that depend on the individual investor. Read them in order.

**Two flagged corrections** live inline in doc 05 and should not be "corrected back": the Ch 3 Problem 2(c) margin call price is **\$30**, not \$20; and Ch 3 Problem 4's interest treatment is genuinely ambiguous, so all three readings are shown.

**Doc 06 flags a third:** the supplied `Tutorial 2 SV-1.xlsx` is an **empty template**, not a solutions file — there are no official answers to check against, so every figure was computed from scratch.

**Doc 04 flags a fourth, in the supplied `Topic 3 JPM vs mkt-1.xlsx` workbook:** a date-misalignment bug pairs JPM returns from the wrong 15-year window against the S&P 500/MSCI World returns, producing implausible near-zero/negative cached betas. Corrected betas (realigned by calendar date) are given instead.

---

## Assessments

| # | Item | When | Weight |
|---|---|---|---|
| 1 | **Investment Briefing** — individual, timed, Excel + 500-word note | **Wed 2 Sep 2026, 9:00–11:00am** (Week 7). Firefox only. No late submissions. | 20% |
| 2 | **Group Project** — investment strategy, efficient frontier, 2-year back-test | Report **Week 11** (w/c 7 Oct) · Presentation **Week 12** (8 min/group) · Peer evaluation **Wed 21 Oct, 11:59pm** | 40% = report 20 + reflection 5 + presentation 10 + peer eval 5 |
| 3 | **Final exam** | Central exam period | 40% |

### Assessment 1 — Investment Briefing (20%)

Covers **Topics 1–4**. You are given a spreadsheet of total return indices and asked for ~14 one-mark Excel calculations (returns, annualised mean and σ, Sharpe, correlation matrix, beta, cumulative and distribution charts, factor regression, CAPM expected return) plus a 6-mark briefing note for a client meeting. **All cells must be formulas — hard-coded numbers score zero.** Full prep guide in doc 10.

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
| 4 | Asset Pricing Models II | — |
| 5 | Market Efficiency | — |
| 6 | Equity Portfolio Management Strategies | — |
| 7 | Analysis of Bonds | Ch 13 (Ch 12 revision) — *video only, no live lecture wk 7* |
| 8 | Derivative Use in Investments | — |
| 9 | Hedge Funds and Other Alternative Investments | — |
| 10 | Performance Evaluation | — |
