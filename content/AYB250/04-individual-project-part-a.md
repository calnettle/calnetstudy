# Individual Project — Part A

20% of the unit. Due **Friday 21 August 2026** (Week 5), online via Canvas.
Source: `AYB250 Part A Individual Project.docx` and the blank template
`AYB250_PartA_StudentNumber_Surname.xlsx`.

This note works the case study's arithmetic so you can check your workbook
against verified numbers, and flags the four places where the brief is
ambiguous enough that two competent students will get different answers.

> **This is not a submission and it is not a spreadsheet.** The brief's own
> rule: AI may be used *for assistance in completing calculations* — asking
> which formula to use is fine — but **not to generate your spreadsheet**,
> and you must critically assess any AI output.

> **On names.** The brief names the two people in the case study. These
> notes call them **Partner A — the marketing manager** and **Partner B —
> the engineer**, because nothing in the maths depends on who they are.

## The case study in numbers

All figures current as at 1 July 2026. A couple in Brisbane, engaged, both
employed full time, renting, planning to buy a first home within three years
and marrying in 15 months. No dependents. Self-described **balanced to
growth** investors. **No private health insurance** — remember that line,
it is load-bearing.

| Item | Partner A (marketing manager) | Partner B (engineer) | Joint |
|---|---|---|---|
| Employment income (before tax) | $92,000 | $120,000 | |
| Employer super rate | 12% | 12% | |
| Super balance | $80,000 | $130,000 | |
| HECS-HELP owing | $14,000 | $12,000 | |
| Transaction account | | | $2,200 |
| Savings | | | $55,000 |
| Savings interest rate | | | 5.5% p.a. |
| Car (2020, fully paid) | | | $28,000 |
| Home contents | | | $20,000 |
| Wedding cost target | | | $40,000 |
| Months until wedding | | | 15 |
| Home deposit target | | | $200,000 |
| Months until home purchase | | | 36 |

No credit card or personal loan debt.

### Monthly outflows

| Category | Monthly | Note |
|---|---|---|
| Rent | $3,250 | $750 per week × 52 ÷ 12 |
| Groceries | $1,100 | |
| Utilities and internet | $430 | |
| Transport | $320 | Fuel, parking, tolls, rideshare |
| Car costs | $200 | Registration, servicing |
| Insurance | $260 | Car, contents |
| Mobile phones | $170 | Two plans, incl. handset repayments |
| Dining out and takeaway | $620 | |
| Subscriptions | $120 | |
| Other entertainment | $420 | |
| Gifts and events | $180 | |
| Health and fitness | $160 | Gym, medical gap payments |
| Clothing and personal care | $300 | |
| Holidays | $400 | Monthly savings for travel |
| Miscellaneous | $260 | |
| **Total** | **$8,190** | |

```
3 250 + 1 100 + 430 + 320 + 200 + 260 + 170 + 620
      + 120 + 420 + 180 + 160 + 300 + 400 + 260  = 8 190  ✓
Annual = 8 190 × 12 = $98 280
```

Verify that total yourself before anything else. Every downstream figure —
surplus, savings ratio, debt service ratio, both goals, all three stress
scenarios — depends on it.

> **The rent note is a worked conversion, and it is the reason rent is not
> $3,000.** `750 × 52 / 12 = $3,250`. Weekly rent times 52 divided by 12 is
> not weekly rent times 4. Over a year the difference is $3,000 — enough to
> move the surplus by $250 a month.

## The template

Eleven sheets, in this order, and **you may not rename, delete or reorder
them**:

| # | Sheet | Status |
|---|---|---|
| 1 | Instructions | Read only |
| 2 | Case Data | **Pre-populated. Do not modify** |
| 3 | Rates and Thresholds | Pre-populated with 2026-27 ATO rates |
| 4 | Assumptions | Empty — every assumption with a value, explanation and credible source |
| 5 | Tax and HECS | Both individuals, all three years |
| 6 | Balance Sheet | As at 1 July 2026 |
| 7 | Budget | 2026-27, 2027-28, 2028-29 |
| 8 | Expenses Analysis | Type (dropdown), two % columns, comments |
| 9 | Financial Ratios | All four for 2026-27, with comments |
| 10 | Savings Goals | Month by month, both goals, with interest |
| 11 | Stress Testing | Three scenarios, plus impact commentary |

**The template ships completely empty of formulas.** Every cell that should
hold a calculation is blank. There is nothing to reverse-engineer and no
partial model to check yourself against — which is exactly why the numbers
below are worth having.

### The integrity rules, which carry marks of their own

- **All calculations must use Excel formulas.** No typed numbers in any cell
  that contains or should contain a calculated result — including totals,
  subtotals, percentages, ratios and any value derived from another value.
- **The workbook must recalculate correctly if any input changes.** That is
  the actual test. Change the interest rate on Case Data; if the savings
  goals do not move, you have hard-coded something.
- Keep the template's sheet names, sheet order, table structure, column
  layout and colour conventions.
- Dollar amounts formatted as currency with **no decimal places**;
  percentages to **two decimal places**.

> **"Recalculates correctly if any input is changed" is a testable claim, so
> test it.** Before submitting: change Case Data's savings balance from
> $55,000 to $60,000 and confirm both goal tables, all four ratios and the
> balance sheet all move. Then undo. Anything that did not move is a
> hard-coded cell, and hard-coded cells are explicitly listed as a
> mark-reducing feature.

> **The Expenses Analysis "Type" column is a dropdown with exactly three
> options** — *Fixed essential*, *Variable essential*, *Discretionary*. It is
> a data-validation list in the template. Typing anything else breaks the
> validation and any formula that counts by category.

## Sheet 3 — Rates and Thresholds, and why it is internally consistent

The 2026-27 income tax scale as supplied:

| Lower bound | Base tax | Marginal rate |
|---|---|---|
| $0 | $0 | 0% |
| $18,200 | $0 | 15% |
| $45,000 | $4,020 | 30% |
| $135,000 | $31,020 | 37% |
| $190,000 | $51,370 | 45% |

Every base figure reconciles against the bracket below it:

```
at  45 000:      0 + (45 000 −  18 200) × 0.15 =  4 020  ✓
at 135 000:  4 020 + (135 000 −  45 000) × 0.30 = 31 020  ✓
at 190 000: 31 020 + (190 000 − 135 000) × 0.37 = 51 370  ✓
```

Medicare levy: **2.0%**.

Medicare levy surcharge:

| Lower bound — single | Lower bound — family | Rate |
|---|---|---|
| $0 | $0 | 0% |
| $105,000 | $210,000 | 1.00% |
| $123,000 | $246,000 | 1.25% |
| $164,000 | $328,000 | 1.50% |

Every family threshold is exactly twice the single threshold. ✓

HECS-HELP:

| Lower bound | Base repayment | Marginal rate | Note |
|---|---|---|---|
| $0 | $0 | 0% | |
| $69,528 | $0 | 15% | |
| $129,717 | $9,028 | 17% | |
| $186,050 | $0 | 10% | **Total income** |

```
Base at 129 717 = (129 717 − 69 528) × 0.15 = $9 028.35  →  9 028  ✓
```

> **The fourth row looks like a typo and it is not.** Above $186,050 the
> repayment is **10% of total repayment income**, not 10% of the excess —
> which is what the "Total income" note is telling you. Solve for where the
> two rules meet:
>
> ```
> 9 028.35 + 0.17(x − 129 717) = 0.10 x
>          0.07 x = 13 023.54
>               x = $186 050.57
> ```
>
> The threshold is that crossover, rounded down. It is a **cap**: it stops
> the marginal system from ever taking more than 10% of total income.
> Neither partner is near it, but if a stress scenario or a later year pushes
> someone over, use `0.10 × income`, not the marginal formula.

> **The sheet is titled "Rates and Thresholds 2026-2027" but the assignment
> asks for three financial years.** There are no 2027-28 or 2028-29 rates in
> the template. Both the tax scale and the HELP thresholds change — HELP
> thresholds are indexed annually, and the bottom marginal rate is scheduled
> to fall again. **Look up the correct figures for each year, put them on
> the Assumptions sheet with an ATO reference, and drive the calculations
> off them.** Reusing the 2026-27 scale for all three years is the single
> easiest mark to lose on this assignment, and it will be invisible in the
> output.

## Sheet 6 — Balance Sheet as at 1 July 2026

```
ASSETS
  Transaction account                            $   2 200
  Savings                                           55 000
  Superannuation — Partner A                        80 000
  Superannuation — Partner B                       130 000
  Car (2020 Mazda CX-5)                             28 000
  Home contents                                     20 000
                                                 ---------
  Total assets                                     315 200

LIABILITIES
  HECS-HELP — Partner A                             14 000
  HECS-HELP — Partner B                             12 000
                                                 ---------
  Total liabilities                                 26 000

NET WORTH                                        $ 289 200
```

```
2 200 + 55 000 + 80 000 + 130 000 + 28 000 + 20 000 = 315 200  ✓
14 000 + 12 000                                     =  26 000  ✓
315 200 − 26 000                                    = 289 200  ✓
```

> **Superannuation is an asset — the lecture's own case study puts it there
> — and it is over two-thirds of this couple's asset base ($210,000 of
> $315,200, 66.6%).** Leaving it off drops net worth to $79,200 and changes
> every ratio. It is also completely illiquid, which is the point the
> liquidity ratio then makes.

> **Whether HECS-HELP is a liability is the one genuine judgement call on
> this sheet, and it changes the answer.** It is a real, indexed, legally
> enforceable debt, so including it is the defensible position — and it is
> the only candidate liability in the whole case study. Exclude it and total
> liabilities are **zero**, net worth is $315,200, the net worth ratio is
> exactly **100%**, and the liquidity and debt service ratios have no
> denominator at all. That last consequence is the tell: a set of four
> ratios where two are undefined is a sign you have excluded something you
> should not have. Document the treatment on the Assumptions sheet either
> way.

## Sheet 5 — Tax and HECS, 2026-27

The template's column order tells you the sequence:

```
Taxable income → Income tax → Medicare levy → Medicare levy surcharge
  → Pre-HECS after-tax income → HECS repayment → HECS balance
  → Final after-tax income → Monthly after-tax income
```

### Income tax

```
Partner A, $92 000:
  4 020 + (92 000 − 45 000) × 0.30
= 4 020 + 14 100
= $18 120

Partner B, $120 000:
  4 020 + (120 000 − 45 000) × 0.30
= 4 020 + 22 500
= $26 520
```

### Medicare levy, 2%

```
Partner A:  92 000 × 0.02 = $1 840
Partner B: 120 000 × 0.02 = $2 400
```

### Medicare levy surcharge — the ambiguity that matters most

Neither has private hospital cover, so the surcharge is in play. But which
threshold?

```
FAMILY reading   — engaged, living together, a couple for MLS purposes
  Combined income = 92 000 + 120 000 = $212 000
  $212 000 ≥ $210 000  →  Tier 1  →  1.00% EACH
  Partner A:  92 000 × 0.01 = $  920
  Partner B: 120 000 × 0.01 = $1 200
  Total                       $2 120

SINGLE reading  — assessed individually
  Partner A:  92 000 < 105 000        →  nil
  Partner B: 105 000 ≤ 120 000 < 123 000  →  1.00%  =  $1 200
  Total                                              $1 200
```

> **The two readings differ by $920 a year, and the couple is only $2,000
> over the family threshold.** The template supplies *both* single and
> family threshold columns, which is a strong hint you are expected to
> decide and justify. An engaged couple living together is normally treated
> as a family for MLS, making that the conventional answer. Reference it on
> the Assumptions sheet and note the sensitivity: a $2,001 fall in either
> income takes the household below $210,000 and the surcharge to zero.

The rest of this note uses the **family reading**.

### HECS-HELP repayments

Both sit in the 15% marginal band ($69,528–$129,717):

```
Partner A: (92 000 − 69 528) × 0.15 = 22 472 × 0.15 = $3 370.80
Partner B: (120 000 − 69 528) × 0.15 = 50 472 × 0.15 = $7 570.80
                                                       ----------
                                            Combined   $10 941.60
```

> **The 15% applies to the income *above* $69,528, not to the whole
> income.** `92 000 × 0.15 = $13,800` is the wrong answer and it is wrong by
> a factor of four. The marginal HELP system replaced the old
> whole-of-income rate precisely to remove the cliff at each threshold —
> which is also why the fourth row of the table exists as a cap rather than
> a rate.

### Full year 1

| | Partner A | Partner B | Combined |
|---|---|---|---|
| Taxable income | $92,000 | $120,000 | $212,000 |
| Income tax | 18,120 | 26,520 | 44,640 |
| Medicare levy (2%) | 1,840 | 2,400 | 4,240 |
| Medicare levy surcharge (1%) | 920 | 1,200 | 2,120 |
| **Pre-HECS after-tax income** | **71,120** | **89,880** | **161,000** |
| HECS repayment | 3,370.80 | 7,570.80 | 10,941.60 |
| **Final after-tax income** | **$67,749.20** | **$82,309.20** | **$150,058.40** |
| Monthly after-tax | 5,645.77 | 6,859.10 | **12,504.87** |

```
92 000 − 18 120 − 1 840 − 920 − 3 370.80 =  67 749.20  ✓
120 000 − 26 520 − 2 400 − 1 200 − 7 570.80 =  82 309.20  ✓
150 058.40 / 12 = 12 504.87                              ✓
```

> **The savings account earns $3,025 of interest a year (`55 000 × 5.5%`)
> and that is assessable income.** The template's "Taxable income" column
> starts from salary, and the brief never says to include the interest. If
> you do include it — split 50/50 on a joint account, $1,512.50 each — it
> adds about $484 of tax and levies at their marginal rate, and it creates a
> circular reference, because the interest depends on the balance which
> depends on the surplus which depends on the tax. Excel will complain.
> **The clean treatment is to exclude interest from taxable income and say
> so on the Assumptions sheet**; the alternative needs iterative calculation
> turned on, which is not worth the risk in a marked workbook.

### Years 2 and 3 — the thing that is easy to miss

Partner B's HECS balance does not survive the projection:

```
Opening balance                   $12 000.00
Less 2026-27 repayment              7 570.80
                                  ----------
Balance at 30 June 2027           $ 4 429.20   (before indexation)
```

The 2027-28 repayment is therefore **capped at the remaining balance**, not
$7,570.80 — and from 2028-29 there is no repayment at all. Partner A's
$14,000 debt survives all three years:

```
14 000.00 − 3 370.80 = 10 629.20 remaining after year 1  (before indexation)
```

> **Model the HECS balance as a running balance, not a fixed annual
> deduction.** That is what the template's "HECS balance" column is for. The
> effect on after-tax income is large: Partner B's cash flow improves by
> about **$630.90 a month** once the debt clears. Section "Sheet 10" below
> shows that this one detail decides whether the home deposit goal is met.

> **Indexation is a real complication and the brief does not resolve it.**
> HELP balances are indexed on 1 June each year, and the interaction between
> indexation and the crediting of compulsory repayments has changed in
> recent years. Pick a treatment, state the indexation rate you assumed and
> where you got it, and note the timing convention. Do not silently ignore
> it.

## Sheet 7 — Budget

```
Monthly income (after tax, after HECS)   $ 12 504.87
Monthly expenses                            8 190.00
                                         -----------
Monthly surplus                          $  4 314.87

Annual savings capacity = 4 314.87 × 12 = $51 778.40
```

For 2027-28 and 2028-29, apply **wage growth to income** and **inflation to
expenses**, each documented with a source. Using the same rate on both sides
makes the surplus grow at that rate and tells you nothing — see note 02.

## Sheet 8 — Expenses Analysis

Two percentage columns, and they have **different denominators**:

```
% of total expenses  = category ÷ 8 190          (monthly expenses)
% of income          = category ÷ ??? 
```

Rent worked both ways:

```
3 250 / 8 190          = 39.68%   of total expenses
3 250 / 17 666.67      = 18.40%   of GROSS income   (212 000 / 12)
3 250 / 12 504.87      = 25.99%   of NET income
```

> **The brief says "of gross income", so use gross — $212,000 ÷ 12 =
> $17,666.67 a month.** The three answers above are all defensible
> arithmetic and only one answers the question asked. Label the column
> header's basis in your Assumptions sheet, because a marker reading 18.40%
> without knowing the base cannot tell a correct answer from a wrong one.

> **The % of total expenses column must sum to exactly 100%.** That is your
> free reconciliation check on this sheet. If it sums to 99.98% you have a
> rounded value hard-coded somewhere instead of a formula.

Classification matters for the stress test later, so be deliberate:

| Type | Clear cases here |
|---|---|
| Fixed essential | Rent, insurance, car costs |
| Variable essential | Groceries, utilities, transport, health |
| Discretionary | Dining out, subscriptions, other entertainment, holidays |

Mobile phones is genuinely arguable: the $170 *includes handset
repayments*, so part is a fixed contractual commitment and part a variable
service cost. Say which way you went.

## Sheet 9 — Financial Ratios, 2026-27

Using the balance sheet and budget above:

### Net worth ratio

```
289 200 / 315 200 × 100 = 91.75%
```

Very high — because the only debt is HECS-HELP. Compare with the lecture's
case-study family at 70.3%, where a mortgage was doing the work.

### Liquidity ratio

```
Liquid assets = transaction 2 200 + savings 55 000 = 57 200
Current debt  = HECS repayments over the next 12 months = 10 941.60

57 200 / 10 941.60 × 100 = 522.78%
```

> **Current debt is twelve months of *repayments*, not the $26,000 of
> balances** — the same flow-versus-stock trap as note 02. Using $26,000
> gives 220.0%, which is a different ratio answering a different question.

> **Rent is not debt**, so it belongs in neither ratio's denominator. If it
> did, the debt service ratio would read 33% instead of 7%. Put the $39,000
> a year of rent in your written comment instead — a ratio saying "almost no
> debt service" for a household spending 40% of expenses on rent needs it.

### Savings ratio

```
Savings    = annual surplus = 51 778.40
Net income = 150 058.40  (after tax AND after HECS)

51 778.40 / 150 058.40 × 100 = 34.51%
```

> **"Net income" has two candidates on this sheet and the template hands you
> both.** Against **pre-HECS** after-tax income of $161,000 the ratio is
> **32.16%** instead. The lecture defines net income as "income net of tax,
> more commonly referred to as after tax", and HECS-HELP is not tax — which
> argues for the pre-HECS figure. But HECS is withheld like tax and is not
> available to save, which argues for the post-HECS figure. Both are
> defensible; state which and be consistent with the debt service ratio's
> denominator.

Also consider whether the $400/month "Holidays — monthly savings for travel"
line is a form of saving. The lecture's case study added back a personal
super contribution on exactly this logic. Adding it back gives
`(51 778.40 + 4 800) / 150 058.40 = 37.70%`. It is money set aside — but set
aside to be spent, which is why the conventional answer leaves it in
expenses.

### Debt service ratio

```
Annual debt commitments / Annual net income × 100
= 10 941.60 / 150 058.40 × 100 = 7.29%
```

Against pre-HECS net income of $161,000: **6.80%**.

```
Check via the monthly form:
  (10 941.60 / 12) / (150 058.40 / 12) = 911.80 / 12 504.87 = 7.29%  ✓
```

The `/12` on both sides cancels, exactly as in note 02.

## Sheet 10 — Savings Goals

The brief is precise about the mechanics:

- Opening balance for Goal 1 is the **$55,000 savings balance**
- All surplus income goes to savings
- Interest earned on accumulated savings, using the Case Data rate
- At **month 15**, deduct the wedding cost
- The remainder carries over as the opening balance for Goal 2
- State clearly whether each goal is achievable

```
Monthly interest rate = 5.5% / 12 = 0.4583333% per month
```

### Goal 1 — wedding, $40,000 by month 15

First three months, interest charged on the opening balance:

| Month | Opening | Contribution | Interest | Closing |
|---|---|---|---|---|
| 1 | 55,000.00 | 4,314.87 | 252.08 | 59,566.95 |
| 2 | 59,566.95 | 4,314.87 | 273.02 | 64,154.84 |
| 3 | 64,154.84 | 4,314.87 | 294.04 | 68,763.75 |

```
Balance at month 15          $125 746.40
Less wedding cost target        40 000.00
                             -----------
Carried to Goal 2            $ 85 746.40
```

**Goal 1 is comfortably achievable** — the $55,000 opening balance alone
almost covers the $40,000 target on day one.

> **Whether interest is earned on the opening balance or on the opening
> balance plus that month's contribution changes the answer.** Charging it
> on `opening + contribution` gives a month-15 balance of **$126,052.71** —
> $306 more. Interest on the opening balance is the conservative and more
> common convention. State which you used, and use it in both goal tables.

### Goal 2 — home deposit, $200,000 by month 36

Twenty-one more months, same contribution:

```
Opening (month 16)           $ 85 746.40
Balance at month 36          $189 277.38
Target                        200 000.00
                             -----------
SHORTFALL                    $ 10 722.62
```

**On a flat model, Goal 2 is not achievable.** The required monthly
contribution to reach exactly $200,000 is **$4,589.50** — $274.63 a month
more than the base surplus.

> **But that flat model ignores the HECS run-off, and the HECS run-off alone
> closes the gap.** Partner B's debt clears during 2027-28, freeing
> $3,141.60 in year 2 and the full $7,570.80 in year 3:
>
> ```
> Months  1–12   surplus 4 314.87
> Months 13–24   surplus 4 576.67   (+3 141.60 / 12)
> Months 25–36   surplus 4 945.77   (+7 570.80 / 12)
>
> Balance at month 15   $126 535.41
> Less wedding            40 000.00
> Balance at month 36   $200 445.74   →  target MET by $445.74
> ```
>
> A $446 margin on a $200,000 goal is 0.2% — so the honest conclusion is
> "achievable, but only just, and only if the HECS balances are modelled as
> running balances". Wage growth pushes it further into surplus; expense
> inflation and HELP indexation push it back. **Say that in your commentary.
> "Achievable" and "not achievable" are both defensible here, and the marks
> are in the reasoning, not the verdict.**

> **The $2,200 transaction account is not in either goal model.** The brief
> says to open Goal 1 with $55,000 — the savings account only. Do not
> quietly add it to make the numbers work.

## Sheet 11 — Stress Testing

Base year 2026-27. Three scenarios, with the shock percentages already
sitting in the template's reference cells (0.2, 0.15, 0.1).

### Scenario 1 — income shock: Partner A's income falls 20%

```
92 000 × 0.80 = $73 600

Income tax        4 020 + (73 600 − 45 000) × 0.30 = $12 600
Medicare levy     73 600 × 0.02                    =   1 472
HECS              (73 600 − 69 528) × 0.15         =  610.80
```

And the part almost everyone misses:

```
Combined income = 73 600 + 120 000 = $193 600
$193 600 < $210 000  →  the family MLS falls to ZERO for BOTH partners
```

```
Monthly after-tax income   $11 868.87
Monthly expenses             8 190.00
                           ----------
Monthly surplus            $ 3 678.87

Change vs base: −$636.00 a month, −$7,632.00 a year, −14.74%
```

> **A 20% pay cut to one partner reduces the household surplus by only
> 14.7%, and part of that cushioning is the surcharge disappearing.** Losing
> $18,400 of gross income costs the household only $7,632 of surplus,
> because tax, Medicare, MLS and HECS all fall with it. **If your scenario 1
> shows the surplus falling by anything close to $18,400/12 = $1,533 a
> month, you have cut gross income without recomputing the tax.** That is
> the single biggest error available on this sheet, and it is exactly what
> the "must recalculate correctly" rule is testing.

### Scenario 2 — cost-of-living shock: rent +15%, all other expenses +10%

```
Rent            3 250 × 1.15 = 3 737.50
All other       4 940 × 1.10 = 5 434.00
                              ---------
Total expenses               $9 171.50    (was 8 190.00)

Income unchanged at $12 504.87 — the household is still over $210 000,
so the MLS still applies.

Monthly surplus  12 504.87 − 9 171.50 = $3 333.37
Change vs base: −$981.50 a month, −$11,778.00 a year, −22.75%
```

```
Check the "other expenses" base:  8 190 − 3 250 = 4 940  ✓
```

> **Scenario 2 hurts more than scenario 1 — a cost shock beats an income
> shock.** −22.75% versus −14.74%. The reason is that expenses are paid from
> *after-tax* dollars with no offsetting relief, while an income fall is
> partly absorbed by the tax system. That asymmetry is the insight the
> commentary section is asking for.

### Scenario 3 — combined

```
Income as scenario 1      $11 868.87   (MLS = 0)
Expenses as scenario 2      9 171.50
                          ----------
Monthly surplus           $ 2 697.37
Change vs base: −$1,617.50 a month, −$19,410.00 a year, −37.49%
```

```
Additivity check:  −636.00 + −981.50 = −1 617.50  ✓
```

The dollar effects are exactly additive here because the two shocks touch
different sides of the budget and the MLS only crosses one threshold. Do not
assume that holds generally — if a combined scenario crossed a *second* tax
or surcharge threshold it would not.

### Summary of the three

| | Base | S1: income | S2: cost | S3: combined |
|---|---|---|---|---|
| Monthly surplus | $4,314.87 | $3,678.87 | $3,333.37 | $2,697.37 |
| Annual capacity | $51,778.40 | $44,146.40 | $40,000.40 | $32,368.40 |
| Change vs base ($) | — | −$7,632.00 | −$11,778.00 | −$19,410.00 |
| Change vs base (%) | — | −14.74% | −22.75% | −37.49% |

> **All three still leave a positive surplus, so "can they still meet their
> goals" is a timing question, not a solvency question.** Under S3 the annual
> capacity is $32,368 — the wedding is still comfortably funded from the
> existing $55,000, but the $200,000 deposit by month 36 moves out of reach
> by a wide margin. Frame the commentary that way: which goal breaks, when,
> and by how much.

## Checklist before submitting

- [ ] File named `AYB250_PartA_StudentNumber_Surname.xlsx`
- [ ] No sheet renamed, deleted or reordered; Case Data untouched
- [ ] Every derived cell contains a formula — spot-check totals, ratios and
      percentages
- [ ] Change one Case Data input; confirm the whole workbook moves; undo
- [ ] `% of total expenses` sums to exactly 100%
- [ ] Balance sheet balances: assets − liabilities = net worth
- [ ] Three years of tax, using the **correct year's** rates
- [ ] HECS modelled as a running balance that can hit zero
- [ ] Every assumption has a value, an explanation and a credible source
- [ ] Dollars with no decimals, percentages with two
- [ ] Comments written for every expense line, every ratio, and all three
      scenarios

## Summary

- Monthly expenses **$8,190**; combined gross income **$212,000**; year-1
  after-tax-and-HECS income **$150,058.40**; monthly surplus **$4,314.87**.
- Balance sheet: assets $315,200, liabilities $26,000 (HECS only), net worth
  **$289,200**.
- Ratios: net worth **91.75%**, liquidity **522.78%**, savings **34.51%**,
  debt service **7.29%** — all on the post-HECS net income basis.
- Goal 1 (wedding) is met with $85,746 to spare. Goal 2 (deposit) falls
  **$10,723 short** on a flat model and lands **$446 over** once the HECS
  run-off is modelled. Both verdicts are defensible; the reasoning carries
  the marks.
- Stress tests: −14.74%, −22.75%, −37.49%. The cost shock hurts more than
  the income shock, and the income shock removes the Medicare levy surcharge
  entirely.
- Four judgement calls to document: **MLS family vs single**, **HECS as a
  liability**, **net income pre- or post-HECS**, and **interest on opening
  balance or opening plus contribution**.
