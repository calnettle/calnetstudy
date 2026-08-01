# AYB250 — Unit Overview

QUT · 2nd Year, Semester 2 · **Personal Financial Planning**

> **These notes cover Weeks 1 and 2 only.** The unit is running right now —
> Semester 2 2026 — so only the first two lectures and the Part A assignment
> brief exist in the source folder. Everything from Week 3 onwards
> (taxation planning, insurance, superannuation, social security, estate
> planning, the Statement of Advice) is **not written yet**, because there is
> nothing to write it from. Don't read a gap here as "not examinable".

## What is actually in the source

| File | What it gives |
|---|---|
| `Lecture/AYB250 Week 1.pptx` + `.pdf` | 41 slides — what financial planning is, its history, why it is growing, the regulators, the Corporations Act disclosure documents |
| `Lecture/AYB250 Week 2.pptx` | 60 slides — personal financial statements, the four ratios, time value of money, annuities, NPV/IRR, tax and inflation on returns |
| `AYB250 Part A Individual Project.docx` | The full Part A brief: case study, the eight sheets to complete, integrity rules |
| `AYB250_PartA_StudentNumber_Surname.xlsx` | The blank Excel template — 11 sheets, pre-populated case data and 2026-27 rates |

That is the whole folder. There are no tutorial sheets, no worked solutions,
no past exam papers and no textbook chapters in it.

## Unit map

| # | Note | Covers |
|---|---|---|
| 01 | Topic 1 — Financial planning and regulation | Week 1. Definition, history, FOFA, the five regulators, AFSL / FSG / PDS / SoA, best interests duty |
| 02 | Topic 2 — Personal financial statements and ratios | Week 2, first half. Cash flow budget, personal balance sheet, the four planning ratios |
| 03 | Topic 2 — Time value of money and investment maths | Week 2, second half. Simple and compound interest, effective rates, annuities, NPV, IRR, tax and inflation |
| 04 | Individual Project Part A | The case study worked end to end, with every figure verified |
| 05 | Practice questions | Exam-style, answers hidden |
| 06 | Formula sheet and exam traps | Everything on one page |

## Assessment

Straight from the Week 1 deck:

| Assessment | Weight | Individual? | Due |
|---|---|---|---|
| Individual Project — Part A | 20% | Individual | Week 5: Friday 21 August 2026 |
| Individual Project — Part B | 20% | Individual | Week 9: Friday 18 September 2026 |
| End of Semester Exam | 60% | Individual | Central exam period, on campus |

Both due dates check out as real Fridays in 2026, and the Week 2 deck's
in-lecture notices (a Thursday 6 August event) also land on the correct
weekday. **The admin detail in this material is genuinely current** — that is
worth saying, because recycled decks in other units routinely carry last
year's dates.

> **The exam is 60% of the unit and both projects together are 40%.** Part A
> is an Excel build. The exam is not — it is a central, on-campus paper, and
> nothing in the source describes its format. Assume it tests the same
> technique by hand: the four ratios, the TVM formulas, the tax scale, and
> the Week 1 regulatory vocabulary.

Part A is eligible for the 48-hour late submission period; anything longer
needs a formal online extension.

## Textbook

*Financial Planning Essentials*, 2nd edition (Wiley). The lecturer's note is
worth repeating exactly: earlier editions have similar content, but **many
rates and thresholds will be out of date**, and updated rates are given in
lectures. The Week 2 slides are screenshots straight out of the 2nd-edition
Chapter 2, so the textbook's worked examples and the lecture's worked
examples are the same numbers.

E-book access through the library is limited to three simultaneous users, per
the speaker notes on the textbook slide.

## Teaching

Lecturer and Unit Coordinator: Laura de Zwaan. Four tutors are listed on the
teaching-team slide. Tutorial questions live in the Canvas topic folders,
not in this source material — Week 1's closing slide says to attempt Topic 1's
tutorial questions before the Week 2 tutorial.

## Learning objectives, verbatim

**Week 1**

- Answer "What is financial planning"?
- Explain where financial planning comes from.
- Know why financial planning is important.
- Able to define "regulators" and "regulation".
- Understand the topical issues in financial planning.

**Week 2** (readings: Chapter 2)

- Prepare and analyse personal financial statements
- Explain the concept of the time value of money and the benefits of
  compound interest
- Understand interest and the difference between nominal and effective
  interest rates
- Understand future value and present value formulas and be able to apply
  them in complex scenarios
- Explain the effect of taxation and inflation on the rate of return

Week 2's closing slide says the next topic is **taxation planning**, and
Week 1's closing slide flags Week 2 as "very important for your individual
project". Both are consistent with the Part A brief, which spans "Topics 1–3
— financial statements, taxation, budgeting, and goal-based planning".

## The AI rule for Part A

The brief has its own clause on this, and it is narrower than most:

> You are permitted to use AI for assistance in completing calculations in
> Excel. For example, you can ask the AI which formula you should use. You
> are not permitted to use AI to generate your spreadsheet. You must
> exercise critical thinking in assessing the accuracy of any AI output.

Read alongside the integrity rule that every derived cell must contain a
live formula, the practical line is: asking *which* function to use is
allowed; having the workbook produced for you is not. These notes explain
the technique and verify the arithmetic — they are not a submission.

## What was checked, and what disagrees

Every number in Topics 02, 03 and 04 was recomputed in Python before it was
written down. The lecture's own arithmetic is unusually clean — the four
ratios, the annuity examples, the NPV table and the compound-interest table
all reconcile exactly. Four things do not:

> **Four flagged issues, each detailed in the topic notes.**
>
> 1. **Week 2 slide 58** — the footnote says the example assumes inflation of
>    5% p.a., but the table subtracts **4.0%**. The table is internally
>    consistent; the footnote is wrong.
> 2. **Week 2 slides 29 vs 31** — the year-by-year table ends at
>    **$1,360.49**; the formula slide states **$1,360.50**. The exact value
>    is $1,360.4890, so $1,360.49 is right.
> 3. **Week 2 slide 34** — the formula `i = [1 + (j/m)]^m − 1` is labelled
>    the "periodic (effective) interest rate". It is the **effective annual**
>    rate. The periodic rate is `j/m`. Using the labelled version with a
>    period count will wreck an answer.
> 4. **Week 2 slide 55** — linear interpolation gives an IRR of 12.7%; the
>    true IRR of that cash flow is **12.59%**. The method is the syllabus
>    method, but know that it overstates.
>
> Confirm each with your tutor before relying on it in an exam answer.

One thing that is *not* an error but reads like one: the HECS-HELP table in
the Excel template has a third row at $186,050 with a 10% rate and the note
"Total income". That is a genuine cap, not a typo — the arithmetic behind it
is shown in note 04.

## Source hygiene note

The Week 2 slides showing the case-study family's cash flow budget and
balance sheet are **screenshots of someone's desktop** with the textbook PDF
open in a browser. Those screenshots incidentally capture a third party's
mail client and email address. Nothing from them is reproduced here beyond
the textbook figures themselves.

## What is missing, plainly

- No tutorial questions or solutions for any week.
- No Week 3+ lecture material — taxation planning, insurance, super,
  social security, estate planning, plan construction.
- No exam paper, sample exam, or exam specification.
- No Part B brief.
- No unit outline / CRA rubric, so the mark allocation *within* Part A's
  eight sheets is unknown.

When those land, add them as `07-`, `08-` and so on.
