# EFB210 — Unit Overview

**QUT · 1st Year · Summer 2025–26 · Unit Coordinator: Dr Nisansala Kulathunga · Tutor: Dr Xiaodu Xie**
**Main textbook: Ross, Trayler, Hambusch, Koh, Glover, Westerfield & Jordan, *Fundamentals of Corporate Finance*, 8th ed., McGraw-Hill, 2021**
**Secondary readings: Peirson et al. (2015), *Business Finance* (QUT Readings)**

---

## What the unit is about

Lecture 1 opens with a single question: *what is the most important challenge in finance?* The answer the unit gives is **the valuation of assets**, and everything after that is machinery for doing it. Value comes from three things — **cash**, **time** and **risk** — and each block of the unit adds one of them:

| Block | Topics | What gets added |
|---|---|---|
| Foundations | 1–2 | Cash. A two-period certainty world where value = discounted cash flows. |
| Financial maths | 3–4 | Time. Compounding, annuities, and pricing bonds and shares. |
| Capital budgeting | 5–6 | Applying it. NPV, IRR, tax, depreciation, replacement decisions. |
| Risk and return | 7–9 | Risk. Statistics, portfolio theory, CAPM, and where the discount rate comes from. |
| Derivatives | 10 | Managing risk once you have measured it. |

The overarching objective never changes: **maximise firm value**, which is not the same thing as maximising profit.

---

## Unit map

| Topic | Title | Reading | Notes file |
|---|---|---|---|
| 1 | Introduction to Finance · Fisher's Separation Theorem | Peirson Ch 1, 2.1–2.3.7, 8, 9.1–9.2, 10.1–10.6 | `01` |
| 2 | The three decisions · Capital rationing · Simple interest | Peirson Ch 2, 3.1–3.3, 6.9 | `02` |
| 3 | Financial Mathematics | Ross Ch 5–6 | `03` |
| 4 | Security Valuation | Ross Ch 7–8, 15.1–15.3 | `04` |
| 5 | Capital Budgeting 1 | Ross Ch 9 | `05` |
| 6 | Capital Budgeting 2 — building the financial model | Ross Ch 10 | `06` |
| 6 | Capital Budgeting 2 — replacement and worked models | Ross Ch 10 | `07` |
| 7 | Writing for Finance · Basic Statistics of Finance | Ross Ch 12.1–12.3 | `08` |
| 8 | Portfolio Theory and CAPM | Ross Ch 13 | `09` |
| 9 | Weighted Average Cost of Capital | Ross Ch 14 | `10` |
| 10 | Introduction to Derivatives and Risk Management | Ross Ch 23–24 | `11` |
| — | Practice questions | — | `12` |
| — | Formula sheet + exam traps | — | `13` |

> **A gap in the source material.** Lecture 1's course-structure slide and Lecture 10's unit-content slide both list an eleventh topic, **Market Efficiency**. No Lecture 11 deck, tutorial or solution set exists in the material for this offering. These notes therefore stop at Topic 10. If Market Efficiency is examinable, ask the coordinator for the deck — do not assume it is off the syllabus just because these notes do not cover it.

---

## Assessment

| Item | Weight | Format | Covers |
|---|---|---|---|
| Mid-semester exam | 20% | Multiple choice | Topics 1–4 |
| Report and Analysis | 25% | Word report + Excel model | Primarily Topics 5–6 |
| Final exam | 55% | Central exam period | Whole unit |

> **The two dates in the source disagree — check Canvas.** Lecture 1 states the report is due "Week 10, January 6th, 2026". The assignment specification PDF states "Due: 27 January 2026 (end of day, 11:59pm)". A three-week difference is not a rounding error; one of the two documents is recycled from a previous offering. Take the date from Canvas, not from either slide. Lecture 1 also gives the mid-semester exam as Week 6, 16 December 2025, 9:00–11:00am.

### What the report actually asks for

The Summer 2025 task was a capital-budgeting report for an independent senator on the economic viability of an ultra-supercritical (USC) coal-fired power station in Queensland, under two scenarios:

1. **Business as Usual (BaU)** — no carbon price, higher electricity price.
2. **Emission Intensity Scheme (EIS)** — generators emitting above 600 kg CO₂-e/MWh buy permits, those below sell them; lower electricity price.

Required: a DCF model in Excel with **every input on a single `Assumptions` sheet**, plus a 600-word (±20%) report with sections **Summary / Methodology / Results / Limitations**, no table of contents, and break-even analysis on (1) the electricity price and (2) the capital cost per MWh. Filenames must contain your name and student number and end `.docx` / `.xlsx` — that is explicitly in the rubric.

> **The break-even trap that cost marks in a past submission.** "Break-even capital cost per MWh" means *the capital cost at which NPV = 0*, found by goal-seeking on the capital-cost input. It is **not** `total capital outlay ÷ (annual MWh × years)` — that is simply the average capital cost per MWh, an input restated, and it comes out **identical under both scenarios** because it never touches revenue. If your two scenarios produce the same break-even capital cost, you have computed the average, not the break-even. A genuine break-even must differ between BaU and EIS, because EIS carries permit costs that BaU does not.

---

## How the unit is examined

Reading the mid-semester formula sheet, the final formula sheet and the tutorial MCQ banks together, three things are clear:

1. **Multiple choice dominates.** The mid-semester exam is entirely MCQ, and every tutorial ends with 5–15 MCQs. Distractors are built from the *specific* mistakes the unit expects: using D₀ instead of D₁, the value of a right per old share instead of per new share, NPV∞ measured at the wrong date, a break-even on accounting profit instead of NPV.
2. **You get a formula sheet, not a method sheet.** Both sheets are supplied in the source folder and are reproduced in `13-formula-sheet.md`. They give you the algebra and nothing else — no timing rules, no sign conventions, no day counts. Those are what you have to carry in.
3. **Every quantitative topic reduces to the same five steps.** Draw a timeline → write cash flows with signs → match the rate frequency to the cash-flow frequency → move everything to one focal date → apply the decision rule.

---

## The five habits that pass this unit

1. **Draw the timeline before you touch the calculator.** Nearly every marked error in the tutorial solutions is a timing error, not an arithmetic one.
2. **Say out loud where the annuity formula values the cash flows.** `PV = C[1 − (1+i)^−n]/i` returns a value **one period before the first payment**. Not today. One period before the first payment.
3. **Match rate frequency to cash-flow frequency, and convert first.** Monthly cash flows want a monthly rate. Quarterly compounding with annual cash flows wants an effective annual rate.
4. **Check the sign of every tax line.** In the standard model tax is a *negative* number, gains on sale increase EBIT and losses decrease it, and both are reversed out below NOPAT because neither is a cash flow.
5. **Re-read what the question asked for.** "Value of a right" and "value of the right to one new share" are different numbers. "NPV∞" and "NPV∞ at time 0" are different numbers. Both appear as adjacent MCQ options.

---

## Notation used across these notes

| Symbol | Meaning |
|---|---|
| `PV`, `FV` | Present and future value |
| `i`, `r`, `k` | Interest / discount / required rate of return (used interchangeably) |
| `Jm` | Nominal annual rate compounded `m` times per year |
| `C` | Constant periodic cash flow (annuity payment, coupon) |
| `I₁`, `X₂` | Two-period model: initial outlay in P1, return in P2 |
| `D₁`, `D₂` | Two-period model: dividends in P1 and P2 |
| `F₁`, `F₂` | Two-period model: funds borrowed (+) or saved (−) |
| `W₁` | Value of the firm in period 1 |
| `kd`, `ke` | Cost of debt, cost of equity |
| `t` | Corporate tax rate (30% unless stated) |
| `β` | Beta — systematic risk relative to the market |
| `S`, `X` | Options: spot price of the underlying, exercise price |

Topic 6 is split across two files because a single page of that length is unusable on a phone. Every worked number in these notes was re-derived in Python from the source figures. Where a published answer disagrees with the arithmetic, both are shown and the discrepancy is named.
