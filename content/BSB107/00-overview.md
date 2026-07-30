# BSB107 — Unit Overview

QUT · 1st Year, Semester 1 · **Financial Performance**

> **On the unit name:** the source folder is titled *BSB107 – Financial
> Performance*, and Week 1 is listed inside Assignment 2 as "Introduction to
> Financial Performance and Responsibility". There is no unit-information
> slide in the material, so nothing here confirms a longer official title.
> Check Canvas before quoting it anywhere formal.

Living document, built from the Semester 1 2025 material: the two portfolio
workbooks, the Week 2/3/4/5/10 tutorial questions, the Week 6 lecture deck,
and the prescribed readings.

## Unit map

| # | Note | Covers |
|---|---|---|
| 01 | Topic 1 — Financial statements and the accounting equation | Weeks 2–3. The three statements, accrual vs cash, `A − L = E`, transaction analysis |
| 02 | Topic 2 — Investments and borrowings | Weeks 4–6. Compounding, `FV`/`PV`/`NPER`, annuities, loan amortisation, `PMT`/`CUMIPMT`/`CUMPRINC`, then the ethics of *where* you invest |
| 03 | Topic 3 — Business finance and decision tools | Weeks 8–11. Business statements with tax, ratio analysis, break-even/CVP, discounted-cash-flow valuation, and whether the numbers can be trusted |
| 04 | Practice questions | Exam-style, answers hidden |
| 05 | Formula sheet and exam traps | Everything on one page |

## The shape of the unit

The semester runs the same skill twice — once on **your own money**, once on
**a business's money**:

| | Personal half (weeks 1–6) | Business half (weeks 8–11) |
|---|---|---|
| Statements | Personal income statement, balance sheet, cash flow statement | Budgeted income statement + classified balance sheet, with tax |
| Analysis | Accounting equation, transaction impact | Ratio analysis of a listed company |
| Planning | Investments (`FV`, `PV`, `NPER`), borrowings (`PMT`) | Break-even/CVP, DCF valuation |
| Responsibility | Psychology of spending, impact investing, ESG | Audit failure, governance, limits of quantitative analysis |

Everything is done **in Excel**. The assignments state that submissions using
other software are not marked. Knowing which Excel function to reach for is
assessed directly — several questions award their mark for the *formula*
being present, not just a correct number.

## Weekly topics

Titles below are taken verbatim from the Assignment 2 reflection question
where it lists the weeks that have "Readings and Other Resources". The
remaining weeks are described by their content, because the source never
names them.

| Week | Title / content |
|---|---|
| 1 | Introduction to Financial Performance and Responsibility |
| 2 | *(untitled in source)* Personal budgeted financial statements |
| 3 | What-if Analyses — the accounting equation and transaction impact |
| 4 | Planning for the future — Investments |
| 5 | Planning for the future — Borrowings |
| 6 | Personal Finances — Social and Ethical Impact |
| 7 | *(untitled)* Guidance on writing a reflection |
| 8 | *(untitled)* Business budgeted statements; auditing and the Wirecard reading |
| 9 | Evaluating Financial Information — ratio analysis |
| 10 | *(untitled)* Break-even / cost-volume-profit analysis |
| 11 | *(untitled)* Valuing investment opportunities; ethics of quantitative analysis |

## Assessment

Both assignments are progressive Excel portfolios, built week by week and
submitted as one workbook.

| Assessment | Marks in the workbook | Built during | Individual? |
|---|---|---|---|
| Assignment 1 — Personal Finances Portfolio | /35 | Weeks 2–6 | Individual |
| Assignment 2 — Business Finances Portfolio | /45 | Weeks 8–11 | Individual |

> **The source does not state percentage weightings, and contains no exam
> paper or exam specification.** Don't assume there is or isn't a final exam
> — confirm on Canvas. The mark totals above are the raw totals inside the
> two workbooks, not weightings.

Assignment 1 mark split: Week 2 /6, Week 3 /9, Week 4 /4 plus /1 and /2 for
the schedule and chart, Week 5 /4 plus /2 and /2 for the schedule and chart,
Question 6 (discussion) /5.

Assignment 2 mark split: Week 8 /7, Week 9 /6, Week 10 /5, Week 11 /7,
Question 12 (Wirecard) /5, Question 13 (limits of the numbers) /5,
Question 14 (self-reflection) /10.

Both workbooks warn that **markers must be able to see your workings** —
answers with no visible derivation may not be verifiable, and the marks may
not be awarded. Show the arithmetic in the blank cells even when the answer
cell auto-ticks.

## Business capabilities

The workbooks map every question to a capability. Written answers are marked
against this language, so use it:

| Code | Capability |
|---|---|
| 1.2 | Apply technical and technological skills appropriate and effective for real world business purposes and contexts |
| 2.1 | Investigate real world business issues and situations through the effective analysis, evaluation and synthesis of theory and practice |
| 4.1 | Exercise self-reflection, responsibility and accountability in relation to own learning and professional practice |
| 5.1 | Demonstrate and apply knowledge of ethical and legal principles and practices in analysing and responding to business issues |
| 5.2 | Demonstrate and apply knowledge of socially responsible behaviour in analysing and addressing business issues in national and international business contexts |

Note what that means for the discussion questions: 5.1 and 5.2 are worth
their own marks. A technically flawless spreadsheet with a weak 200-word
answer loses 10 of 45 on Assignment 2.

## Excel functions you are expected to know cold

| Function | Answers |
|---|---|
| `FV(rate, nper, pmt, pv, type)` | What will it grow to? |
| `PV(rate, nper, pmt, fv, type)` | What is it worth today? / how much can I borrow? |
| `NPER(rate, pmt, pv, fv, type)` | How long will it take? |
| `PMT(rate, nper, pv, fv, type)` | What is the repayment? |
| `CUMIPMT(rate, nper, pv, start, end, type)` | Total **interest** across a span of periods |
| `CUMPRINC(rate, nper, pv, start, end, type)` | Total **principal** across a span of periods |
| `NPV(rate, values…)` | Present value of a stream of uneven cash flows |
| `ROUNDUP(x, 0)` | Break-even units — always up, never `ROUND` |
| Goal Seek (`Data > What-If Analysis`) | Solve backwards when there is no closed form |

`rate` and `nper` must be in the **same period**. A 6.5% annual rate
compounded monthly is `6.5%/12` per month over `5*12` months — never `6.5%`
over `60`.

## How these notes are built

Same structure as EFB335 and USB244: concept → formula → worked example with
real numbers → the trap that costs marks, with a checkpoint quiz in a
tap-to-reveal block at the end of each major section.

Every figure was recomputed in Python before it was written down. For the
accounting material that means three specific checks each time: the balance
sheet actually balances, every stated ratio was re-derived from its
components, and every percentage has its base named. Where the source
material contradicts itself — and it does, in several places — the note shows
the arithmetic and says which reading is right rather than quietly picking
one.

> **Four flagged errors, all detailed in the topic notes.** In short: the
> Week 9 earnings-per-share formula is out by a factor of 1,000 (and drags
> the P/E ratio with it); the Week 10 tutorial file's "Goal Seek" break-even
> cell shows the $5,000-profit volume, not the break-even volume; the
> Assignment 1 mortgage sheet rounds the monthly interest rate to four
> decimal places and every downstream answer inherits the error; and one
> balance-sheet equity figure was computed as capital *minus* liabilities.
> Confirm each with your tutor before relying on it.

## Source material

`1st Year/Semester 1/BSB107 - Financial Performance/` — the two completed
portfolio workbooks, `Week 2/3/4/5/10 Tute Question.xlsx`, `Week 6.pptx`
(40 slides, impact investing and effective altruism), the Weeks 2 & 3
vocabulary sheet, Chapter 5 (*Wirecard*) of Chen's *International Cases of
Corporate Governance*, Dunn's *Happy Money* Chapter 1, and Brooks' *The
Satisfaction Trap*.

Two files in that folder belong to other units and are ignored here:
`USB142 T03 Monopoly City.pdf` and `BSB106 BMC Team A-1.pptx`.

**No lecture decks for weeks 1–5 or 8–11 are present in the source.** The
technique in those weeks has been reconstructed from the tutorial questions
and the portfolio workbooks, which is enough for the arithmetic but means
any definition the lecturer emphasised in class may be missing. The Week 6
deck is the only lecture in the folder.
