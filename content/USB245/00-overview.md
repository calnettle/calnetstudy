# USB245 — Unit Overview

QUT · Semester 2, 2026 · **Property Investment Analysis**

**Live document.** Cal is sitting this unit *now*. Coverage runs **Weeks 1
to 3**. Topics 4 onward get added as each deck drops.

## Unit map

Ten notes, in reading order — topics, then tutorials, then the assignment and
source material, then revision.

| # | Note | Covers |
|---|---|---|
| 00 | Unit Overview | This page: unit map, learning outcomes, assessment, semester schedule |
| 01 | Topic 1 — Investment Principles | What an investment is, risk/return trade-off, risk tolerance, income vs capital vs total return, the six investment objectives, disclosure regime, asset classes, NOI and `CV = NI / Y` |
| 02 | Topic 2 — Property as an Asset Class and the DCF | Scale of the Australian market, direct vs indirect, market inefficiency, the five-step decision process, `P = E/(1+T−M)`, required vs expected return, the 7-step DCF, risk taxonomy |
| 03 | Topic 3 — DCF and Cashflow Components | The seven steps filled in: time frame and period n+1, the initial outlay, the gross-to-net income waterfall, growth, sale proceeds and the terminal yield, discounting, acquisition costs. The lecture's $930,000 house worked end to end |
| 04 | Tutorial 1 — Financial Maths and Your First DCF | Every Week 1 tutorial exercise worked end to end, plus the monthly gap-year DCF and the discount-rate convention trap |
| 05 | Tutorial 2 — Building a Residential DCF in Excel | The Week 3 lab: the supplied solution rebuilt cell by cell, Exercise 1 and the expense-inflation variant 1a, a sensitivity grid, and what to take (and not take) from the `DCF_Sample.xls` commercial model |
| 06 | The Assignment DCF — Model Anatomy | The FICTIONAL worked-example workbook sheet by sheet, every formula explained, tied back to the brief's nine required worksheets |
| 07 | Reading the 41 Park Road IM | Full reconciliation of the information memorandum: tenancy schedule, outgoings, yields, WALE. Three arithmetic errors found |
| 08 | Practice Questions | Sections A–F: Weeks 1–2 and the assignment material, answers tap-to-reveal |
| 09 | Practice Questions — Weeks 3+ | Section G onward: cashflow components and the seven-step DCF |
| 10 | Formula Sheet & Exam Traps | Everything on one page |

## Learning outcomes

Straight from the Week 1 deck and the assignment brief — the rubrics are
written against these, so use their language in the report:

1. **Identify** the investment goals and strategies of property investors.
2. **Calculate and interpret** the key performance measures of income
   producing properties, incorporating risk analysis.
3. **Construct, quantify and justify** discounted cash flow models to
   measure the expected performance of a property investment taking account
   of finance and taxation.
4. **Present solutions** through written communication.
5. **Collaborate** to solve problems and achieve shared goals.

## Assessment

| No. | Description | Individual | Group | Total | Due |
|---|---|---|---|---|---|
| A1 | Discounted Cashflow Model (Excel workbook) | 15% | 15% | **30%** | Week 8 |
| A2 | Property Investment Analysis report (2,500 words) + group peer assessment | — | 30% | **30%** | Week 13 |
| A3 | Final examination | 40% | — | **40%** | Exam block |
| | **Total** | **55%** | **45%** | **100%** | |

A1 and A2 together are 60% of the unit and are built on the **same
property**: 41 Park Road, Milton. Groups of **three**, formed by the end of
Week 5, same group for both parts.

- **A1** = the DCF taken to the *property cashflow* stage — no finance, no
  tax. The agent is quoting **offers over $8 million**.
- **A2** = the write-up: finance, tax, sensitivity, market analysis and a
  buy/don't-buy recommendation to the board.

The AREIT's stated investment objectives, which everything must be measured
against:

```
CBD or inner-fringe location
Minimal capex required
Loan to Value Ratio (LVR)      65%
Target total return          > 7.0%
Holding period                7–10 years
```

> **The brief contradicts itself on the workbook size.** The Assignment
> Details table says "1 excel workbook with **8** worksheets"; the
> *Suggested Structure* section immediately after enumerates **nine**
> (1 Tenancy Schedule … 9 GenAI Use record). Build nine — the enumerated
> list is the one the marker will check against — but confirm with the
> unit coordinator, because the count is an easy mark to drop.

> **The brief calls this an office deal; the tenant mix is not.** The
> introduction says the assignment "is focussed on the Brisbane office
> market sector" and points you at PCA office data. 41 Park Road's tenants
> are a bridal boutique, a gown alterations business, a fitness studio, a
> hairdresser, a print franchise, a real estate agency, a tailor and a law
> firm. That is a mixed retail/service building with a small office
> component. Use PCA office series for the *macro* inputs the brief asks
> for, but justify your rent and incentive assumptions off comparable
> **suburban strip/mixed-use** evidence, and say in the report why.

## Semester schedule (tutorials)

The tutorial programme is the spine of the unit — each week's lab builds one
more layer of the assignment model.

| Week | Tutorial |
|---|---|
| 2 | Recap Net Present Value; introduce the assignment brief |
| 3 | Build a simple residential DCF |
| 4 | Extend to a multi-tenanted commercial DCF |
| 5 | Deriving a discount rate by market comparison and WACC; sensitivity |
| 6 | Revision on PV calcs, simple DCFs, financial calculator |
| 7 | Calculating and interpreting NPV and IRR |
| 8 | Mortgage payments and the after-finance DCF |
| 9 | Property tax and depreciation calculations |
| 10 | The after-tax DCF, and assignment studio |
| 11 | Sensitivity analysis and assignment studio |
| 12 | Assignment studio |
| 13 | Final exam preparation |

> **This table was one week out until the Week 3 deck arrived.** The Week 1
> tutorial deck listed the same twelve rows starting at Week 1; the Week 3
> deck lists thirteen rows starting at Week 2, and that is the version
> reproduced above because it matches what has actually happened — the Week 3
> lab really is the simple residential DCF. Note that the **lecture** on
> discount rate derivation lands in Week 4 ("NEXT WEEK — Discount Rate
> Derivation" closes the Week 3 lecture) while the **tutorial** on it lands in
> Week 5. The tutorial does not always follow its own lecture; check the week
> number on whichever deck you are holding.

Census date is **14 August 2026** (Week 4). Lectures are online only in
Weeks 1 and 2; tutorials begin in Week 2.

Teaching team: **Lyndall Bryant** (unit coordinator, lecturer and tutor;
consultation Tuesdays 3–5pm) and **John Polichronis** (tutor).

Set text: Rowland, P. (2010) *Australian Property Investment and Financing*,
Thomson Reuters. Weeks 1–2 map to **Rowland Chapters 1 and 2**; Week 3 cites
**Ch 2.60–2.100 and Ch 6.40, 6.50, 6.90, 6.140**. Recommended calculator:
**Sharp EL-738XTB**.

## How these notes are built

Concept → formula → worked example with real numbers → the trap that costs
marks. Checkpoint quizzes are in tap-to-reveal blocks.

Every number was recomputed in Python before it was written down, and again
after editing. That pass found three arithmetic errors in the information
memorandum, one mislabelled result in the Week 2 lecture, and two problems in
the Week 3 material — a sale-price row that actually holds a net cashflow,
and a step-6 deduction that does not reconcile with its own definition. Each
is shown with its working rather than quietly corrected — see notes 02, 03,
05 and 07.

## Source material

Compiled from the Week 1 lecture (introduction to the unit and investment
principles), the Week 1 tutorial (financial maths recap), the Week 2 lecture
(property as an asset class, introduction to DCFs), the Week 3 lecture
(DCF and cashflow components), the Week 3 tutorial and its solution workbook
`Week 3_solution.xlsx`, the `DCF_Sample.xls` commercial reference model, the
USB245 Assignment Brief 2026, the information memorandum for 41 Park Road,
Milton, and the `USB245_worked_example_DCF_FICTIONAL.xlsx` teaching workbook.
All live in `2nd Year/Sem 2/USB245/`.

> **The DCF workbook is fictional and says so on its first sheet.** It
> models "200 Teaching Lane, Milton" — an invented property with invented
> numbers, built so you can see how the sheets connect. Note 04 works
> through it because the *structure* and the *formulas* are exactly what
> A1 requires. **None of its inputs are evidence for 41 Park Road.** Every
> figure in your own model needs a real, referenced source.
