# Tutorial 2 Solutions — Financial Planning Skills

Worked solutions for `AYB250 Tutorial Questions Topic 2 (1).docx`, checked
against the unit's own answer slides (`AYB250 Topic 2 Tutorial Slides.pptx`)
and the supplied workbook (`AYB250 Tutorial 2.xlsx`). Topic notes: 02
(statements and ratios) and 03 (TVM).

Every number here was computed independently in Python. **The unit's
answer slides contain two arithmetic errors in Question 2** — both flagged
inline. The final surplus is right; two of the lines shown on the way
there are not.

## Class activity — the Financial Planner Challenge

Jordan, 22: salary $75,000, savings $8,000, credit card debt $8,500, saves
very little, wants a home in 7 years.

The model answer (from the slide notes): **(1)** eliminate the credit card
debt first — unsecured debt at high interest, so repaying it is an
immediate, risk-free return; **(2)** start a disciplined automatic savings
program ($200–300 per fortnight) to build the deposit through compounding;
**(3)** structure the deposit strategy — budget, high-interest savings
account, first-home-buyer programs. The ratio to monitor is the **savings
ratio** (progress toward the deposit is exactly savings relative to net
income). Risks: new consumer debt, lifestyle inflation as income rises,
under-saving against the deposit target, and higher future interest rates
hurting affordability.

> The slide body says Jordan's credit card debt is **$8,500**, but the
> teaching notes on the same slide say **$5,000** — a recycled-content
> mismatch. The advice is identical either way; just don't be thrown if a
> tutor quotes the other number.

## Question 1 — statement classification

Each item belongs to the cash flow statement (income/expense) or the
balance sheet (asset/liability):

| Item | Where | Why |
|---|---|---|
| Car loan | Balance sheet — liability | An outstanding balance owed |
| Bank account balance | Balance sheet — asset | A stock of value held |
| Monthly loan payment | Cash flow — expense | A recurring cash outflow |
| Paid mobile account | Cash flow — expense | Cash spent in the period |
| Taxes owed | Balance sheet — liability | Owed but not yet paid |
| Tax refund due | Balance sheet — asset | Receivable, not yet cash |
| Car | Balance sheet — asset | Property owned |
| Rent paid | Cash flow — expense | Cash spent in the period |
| Interest received | Cash flow — income | Cash received in the period |
| Commissions received | Cash flow — income | Cash received in the period |
| Overdue credit card payment | Balance sheet — liability | An amount owing |

> **"Paid" and "received" signal the cash flow statement; "owed", "due"
> and "balance" signal the balance sheet.** This is note 02's flow-vs-
> stock distinction — the single most-tested classification idea in the
> unit.

## Question 2 — Casey's cash flow statement

Casey's year to December 2025, sorting the given items:

```
INCOME
  Net salary (after tax and super)              $67 000
  Interest on savings account                       110
  Share dividends                                    245
                                                --------
  TOTAL INCOME                                   $67 355

EXPENSES
  Groceries                                     $ 6 240
  Rent paid                                      23 400
  Utilities paid                                  2 380
  Car expenses                                      650
  University supplies (textbooks, SSAF)             765
  Subscriptions                                     720
  Clothing                                        5 000
  Laptop repayments (paid to date)                1 600
  Petrol                                            855
  Car loan repayments (19 750 − 7 300)           12 450
  Purchase of shares                              4 900
                                                --------
  TOTAL EXPENSES                                 $58 960

CASH SURPLUS                                     $ 8 395
```

**What was excluded, and why** (the slide's "circled items"):

- **Reimbursement for travel expenses ($1,950)** — not income; it offsets
  an expense Casey incurred on the employer's behalf. (Its matching travel
  expense is likewise excluded.)
- **Cost of laptop bought on credit ($2,200)** — the *cost* is not this
  year's cash flow; only the $1,600 actually paid is.
- **Purchase cost of the car ($19,750)** — financed, not paid in cash. The
  cash flow is the repayments made: cost $19,750 less the $7,300 still
  owing = **$12,450** paid during the year.
- **Outstanding loan balance ($7,300)** — a balance-sheet liability.

> **Flagged: two errors in the unit's own answer slide.** The slide's
> expense list shows "Car expenses $855" — duplicating the petrol figure;
> the question data says car expenses are **$650** (and petrol $855). And
> the slide's stated total of **$58,950** matches neither its own line
> items (which sum to $59,165) nor the correct ones ($58,960). The
> giveaway is the slide's own surplus: **$8,395 = 67,355 − 58,960**, which
> is only consistent with car expenses of $650 and total expenses of
> $58,960. Verified in Python; raise it with your tutor.

## Question 3 — future value, annual vs monthly compounding

$1,000 for 5 years:

**(a) at 6% p.a.:**

```
FV = 1 000 × (1.06)^5 = $1 338.23
```

**(b) at 6% compounded monthly:**

```
i = 0.06/12 = 0.005        n = 12 × 5 = 60

FV = 1 000 × (1.005)^60 = $1 348.85
```

Both verified. Monthly compounding adds $10.62 over five years.

**Alternative route for (b)** — convert to the effective annual rate
first:

```
i_eff = (1 + 0.06/12)^12 − 1 = 6.17% (rounded; exact 6.16778%)

FV = 1 000 × (1.0617)^5 = $1 348.99
```

> **The two routes disagree by 14 cents ($1,348.85 vs $1,348.99) — purely
> because 6.17% is rounded.** Using the exact effective rate reproduces
> $1,348.85 to the cent. Prefer the periodic-rate route (i = j/m, n = m×t)
> and you never touch the rounding; if you do convert, carry all the
> decimals. This is note 03's periodic-vs-effective trap in live form.

## Question 4 — present value

Needed today to reach $20,000 in five years at 8% p.a.:

```
PV = FV (1 + i)^(−n) = 20 000 × (1.08)^(−5) = 20 000 × 0.680583
   = $13 611.66
```

Verified. (`(1.08)^(−5)` is just `1/(1.08)^5` — the slide makes the same
point.)

## Question 5 — comparing deposits with different compounding

4-year term deposit: **4.8% compounded annually** vs **4.65% compounded
quarterly**.

**Route 1 — grow $1,000 under each:**

```
Choice 1: 1 000 × (1.048)^4                = $1 206.27
Choice 2: 1 000 × (1 + 0.0465/4)^16
        = 1 000 × (1.011625)^16            = $1 203.13
```

**Route 2 — compare effective annual rates:**

```
Choice 2 effective = (1 + 0.0465/4)^4 − 1 = 4.73%  <  4.80%
```

Both verified. **Choose the 4.8% annual deposit** — marginally better
either way.

> **Convert before you compare — but notice this example lands the
> opposite way to the lecture's.** In note 03, 22% daily *beat* 16% annual
> once converted. Here the quarterly option loses anyway: 4.65% quarterly
> is only 4.73% effective, still short of 4.80%. The rule isn't "more
> frequent compounding wins"; it's "only effective rates are comparable".

## Question 6 — Brad and Nerida's NPV choice

Required return 10%.

**Option 1:** outlay $10,000; cash flows of $1,500 in years 3, 4 and 5
(nothing in years 1–2); the $10,000 returned at the end of year 5.

```
NPV = −10 000 + 1 500(1.1)^(−3) + 1 500(1.1)^(−4) + 11 500(1.1)^(−5)
    = −10 000 + 1 126.97 + 1 024.52 + 7 140.60
    = −$707.91
```

**Option 2:** outlay $15,000; $1,200 for each of years 1–5; sold for
$17,500 at the end of year 5.

```
NPV = −15 000 + 1 200(1.1)^(−1) + 1 200(1.1)^(−2) + 1 200(1.1)^(−3)
              + 1 200(1.1)^(−4) + 18 700(1.1)^(−5)
    = −15 000 + 1 090.91 + 991.74 + 901.58 + 819.62 + 11 611.23
    = +$415.07
```

Both verified to the cent against the answer slides. **Choose Option 2** —
it is the only one that adds value at the 10% required return; Option 1
destroys $707.91.

> **"After 2 years… for the next 3 years" means the cash starts at the
> end of year 3.** Putting Option 1's payments at years 2–4 (with the
> principal back at year 4) instead gives an NPV of **+$221.30** — the
> timing error alone flips the sign and the decision. Draw the
> timeline before discounting anything. Note the terminal year bundles two
> flows: Option 1's year 5 is 1 500 + 10 000 = 11 500; Option 2's is
> 1 200 + 17 500 = 18 700.

### The supplied workbook

`AYB250 Tutorial 2.xlsx` builds the same two NPVs with
`=CF × (1+rate)^−year` per year, then `=SUM(...)` — matching the Part A
"every derived cell is a live formula" discipline. Two things to notice
before reusing it:

- **Option 2's formulas point at Option 1's rate cell** (`$B$8`) instead
  of Option 2's own rate cell (`$B$17`). Both cells hold 10%, so the
  answer is right — but change only one rate and the model silently
  breaks. Repoint the references (or use one shared rate cell) before
  experimenting.
- There is a leftover `Q7` sheet containing a *different* cash flow
  statement (salaries $37,000, rent $9,600, "purchase of bonds") — it
  belongs to an older edition of this tutorial, not to the current
  question sheet. Ignore it.

## Checkpoint

<details><summary>Questions</summary>

1. A friend's employer reimburses $800 of work travel. Where does it go in
   the personal financial statements?
2. You're offered 5.9% compounded monthly or 6.0% annual. Which is better?
3. An investment costs $8,000 and pays $2,000 at the end of years 2, 3 and
   4, plus $5,000 back at the end of year 4. NPV at 9%?

</details>

<details><summary>Answers</summary>

1. Nowhere as income — it offsets the matching travel expense, so both
   drop out of the cash flow statement (and nothing is owed, so the
   balance sheet is untouched).
2. ```
   5.9% monthly → (1 + 0.059/12)^12 − 1 = 6.06%  >  6.00%
   ```
   The 5.9% offer wins — the lower nominal rate is the higher effective
   rate.
3. ```
   NPV = −8 000 + 2 000(1.09)^(−2) + 2 000(1.09)^(−3) + 7 000(1.09)^(−4)
       = −8 000 + 1 683.36 + 1 544.37 + 4 958.98
       = +$186.70   → accept
   ```
   (Year 4 bundles 2 000 + 5 000 = 7 000.)

</details>
