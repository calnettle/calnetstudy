# EFB201 — Unit Overview

QUT · 1st Year, Semester 2 · **Financial Markets**

> **The unit's full official title is not stated anywhere in the source
> material.** Every lecture deck is titled *Financial Markets* (Introduction,
> Fixed Income and Equity Markets, Derivatives Markets, Foreign Exchange
> Market, Market Efficiency, Ethics in Finance), and every tutorial header
> reads `EFB201 / Financial markets`. There is no unit-information slide and
> no unit outline in the folder. Confirm the exact title on Canvas before
> quoting it anywhere that matters.

Living document. All ten released topics are written up. Add new topics as
they appear.

## Unit map

| # | Note | Covers |
|---|---|---|
| 01 | Topic 1 — Introduction to Financial Markets | SSU/DSU, five motives for trading, long/short/leveraged positions, order books, market classification |
| 02 | Topic 2 — Fixed Income and Equity Part A | Money-market instruments, bond anatomy, LIBOR mechanics, ordinary vs preference shares |
| 03 | Topic 3 — Fixed Income and Equity Part B | Issuance structure, credit quality, DCF bond pricing, YTM vs current yield, ROE, market-to-book, P/E |
| 04 | Topic 4 — Fixed Income and Equity Part C | Return–risk framework, systematic vs non-systematic risk, CAPM, beta, parameter estimation problems |
| 05 | Topic 5 — Market Efficiency | The four enabling assumptions, weak/semi-strong/strong forms, short selling and the short squeeze, joint-hypothesis problem |
| 06 | Topic 6 — Derivatives Part A | Forward commitments vs contingent claims, forwards vs futures, mark-to-market, margin calls |
| 07 | Topic 7 — Derivatives Part B | Calls and puts, moneyness, option payoffs, break-evens, benefits and criticisms |
| 08 | Topic 8 — Foreign Exchange Market | Quote conventions, bid–ask, interest rate parity, forward / futures / option / money-market hedges |
| 09 | Topic 9 — Ethics in Finance | CFA Code and Standards, Hong Kong Minibond, the LIBOR scandal with the arithmetic worked |
| 10 | Topic 10 — Contemporary Topics: Modern Financial Analysis | The five-step analyst workflow, real-world frictions, the NEXTDC case, where AI fits |
| 11 | Practice Questions | Exam-style questions across all ten topics, answers tap-to-reveal |
| 12 | Formula Sheet & Exam Traps | Every formula on one page plus the traps that cost marks |

## What the unit is actually about

EFB201 is a **descriptive plus computational** markets unit. It is not a
theory-heavy unit — there is no portfolio optimisation, no term structure, no
option pricing model. What it does want is:

1. **Vocabulary used precisely.** Primary vs secondary, order-driven vs
   quote-driven, forward commitment vs contingent claim, systematic vs
   non-systematic. A large share of the tutorial questions are multiple choice
   that turn on one word.
2. **A handful of calculations, done exactly.** Bond DCF, YTM vs current
   yield, ROE, P/E target price, CAPM, LIBOR trimmed mean, margin accounts
   (long *and* short), futures mark-to-market, option net cash flow, interest
   rate parity, bid–ask spreads. Roughly a dozen formulas in total.
3. **Judgement questions.** "Which market would you use and why?" "What are
   plausible explanations for the discrepancy?" These carry real marks and
   reward naming the mechanism, not just the answer.

## Assessment

The folder contains the **essay instruction** but no unit outline, so
weightings are unconfirmed.

| Assessment | What the source says |
|---|---|
| Essay / report | Harvard case *Darden Capital Management: The Cavalier Fund* (UV7617-PDF-ENG). Write as Daniel Nickerson to CEO Peter Wilson: state your main task and how you plan to complete it. |
| Final exam | Referenced throughout the slides ("values for measures 3–5 will be given to you if they appear in assessments"), but no exam structure document is in the folder. |

**Essay structure required by the instruction sheet:**

| Section | Length | Content |
|---|---|---|
| 1 | 200–250 words | Summary — task A, plan B, expected outcome C, limitation D, consequence E |
| 2 | 400–450 words | Why A is your main task |
| 3 | 900–1,000 words | Specify B and justify each step's choices |
| 4 | 100–200 words | Expected outcome C |
| 5 | 200–300 words | B's limitations and their consequences |

Main text total **1,800–2,200 words**. Times New Roman 12, 1.5 spacing, 1 cm
first-line indent, justified, 2.54 cm margins, page numbers "Page X of Y"
bottom-centre, QUT APA reference list, figures and tables in appendices only,
no table of contents, Word format only. Penalties apply for style breaches.

> **The essay is an action plan, not a results report.** The instruction is
> explicit: if you think CAPM is a necessary step, you narrate *how* you would
> use CAPM and what its output would let you conclude. You do not display CAPM
> numbers. Students lose marks here by submitting a valuation.

Two further constraints worth pinning: you must **not cite anything beyond the
case timeline** (you stand at the same moment as the case), and no external
references are required.

## Topics with video material that could not be read

There are **12 `.mp4` recordings** in the folder. These notes are written from
the PDFs, Word documents and spreadsheet only — **the videos were not watched
and nothing in these notes comes from them.** Each of the six revision topics
has two recordings (they appear to be a lecture recording and a tutorial
recording, judging by the file times):

| Topic | Recordings present | Slides / tutorial also present? |
|---|---|---|
| Fixed Income and Equity Part C | 2 | Yes — slides, tutorial, solutions |
| Derivatives Part A | 2 | Yes — slides, tutorial, solutions |
| Derivatives Part B | 2 | Yes — slides, tutorial, solutions |
| Foreign Exchange Market | 2 | Yes — slides, tutorial, solutions, three appendices |
| Contemporary Topics | 2 | Yes — slides, tutorial, solutions, four CFA readings |
| Ethics in Finance | 2 | Yes — slides, tutorial, solutions |

Because every one of those topics also has a full slide deck and a worked
tutorial solution, the written coverage should be close to complete. What is
*likely* missing is anything the lecturer said out loud and never put on a
slide — most plausibly the exam format, and the parts of the LIBOR scandal
case (Stanford ETH-03) that the deck only names.

Two further items are referenced but **not in the folder at all**:

- The **Barclays LIBOR case study** (Stanford case ETH-03) — the ethics deck
  names it but the case itself is not supplied.
- A **Study Pack quiz** covering "Lecture 1" through "Lecture 5" — only the
  answer key from a past attempt exists, not the questions.

## Errors and contradictions found in the source

These are all worked through where they occur. Summary so you know they exist:

| Where | Problem |
|---|---|
| Ethics deck, LIBOR example | Claims understating a submission by 0.01% saves **$100,000 p.a. on $1bn**. The deck's own next slide shows the LIBOR only moves 0.00125%, which is **$12,500**. See Topic 9. |
| Ethics tutorial solutions | Both Q5 and Q6 solutions are numbered "5". The intermediate `4.817%` is a rounded figure — using it gives $54,800, not the correct $50,000. Both final answers are right. |
| Intro deck, GameStop Scenario B | "Without leverage" Sam buys 11 shares at $470 from $2,600. $2,600 buys 5.53 shares. The unleveraged loss is ≈ **−$2,047**, not −$4,070. See Topic 1. |
| Intro deck, leveraged Scenario B | The −$4,780 loss reconciles exactly; the stated **−43% return does not** reconcile with any base. Return on money committed is −89.7%. |
| Derivatives A deck, S&P example | Intermediate slide builds show John's total cash out as **$9,900,000** and "45 contracts = $10 million / contract unit". Both are corrected on the final build to $10,800,000 and $10.8 million. |
| Part B deck | Calls the **current yield** "the effective interest rate". Conventionally the effective rate is the YTM. See Topic 3. |
| Cal's `EFB201 Exam.xlsx` | The YTM cell uses the **approximation formula**, which returns 7.917% where the exact YTM is 8.004%. See Topic 3. |

Where the unit's own solutions disagree with a verified calculation the note
says so, shows the algebra, and tells you to confirm with your tutor. Nothing
has been quietly "corrected" in either direction.

## How these notes are built

Same shape as `EFB335` and `USB244`: concept → formula → worked example with
real numbers, fully stepped out → the trap that costs marks, with a checkpoint
quiz in a tap-to-reveal block at the end of each major section.

Every number was recomputed in Python before it was written down and again
after editing. That process is what surfaced the seven items in the table
above.

## Source material

Compiled from `1st Year/Semester 2/EFB201/`:

- **Lectures/** — Introduction, Fixed Income and Equity Parts A, B and C,
  Market Efficiency (5 decks)
- **Tutorials/** — Introduction, Fixed Income and Equity Parts A, B and C,
  Market Efficiency (with solutions)
- **Revision/** — six topic folders, each with slides, tutorial, solutions and
  recordings: Contemporary Topics, Derivatives A, Derivatives B, Fixed Income
  Part C, Foreign Exchange, Ethics
- **Appendices** — CommBank FX rate card and fee schedule (13 May 2019), CME
  Micro WTI Crude Oil quotes/settlements/specs/margins (Jan 2022), CME AUD/JPY
  Cross Rate futures (Jan 2022), CBOE Apple options chain (25 Jan 2022)
- **Textbooks referenced by the decks** — Kidwell, Brimble, Lenten, Docherty,
  Mazzola & Basu, *Financial Markets, Institutions and Money* (4th ed., Wiley
  2019), chapters 1–2 and 8–12; CFA Level I 2020 curriculum Readings 36, 39,
  42–44, 46, 48, 51–53; CFA Level II 2020 Readings 1–3 for ethics
- **Four 2026 CFA Level I readings** supplied for the Contemporary Topics
  module: Company Analysis Past and Present, Industry and Competitive
  Analysis, Company Analysis Forecasting, Equity Valuation Concepts and Basic
  Tools. These are copyright Wiley/CFA Institute — Topic 10 uses their
  structure and learning outcomes, and does not reproduce their text.
