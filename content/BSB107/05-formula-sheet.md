# BSB107 — Formula Sheet and Exam Traps

Everything in one page. Formulas first, then the checklist of things that
actually cost marks.

---

## 1. The statements

```
INCOME STATEMENT          (over a period — "for the month of May")
  Personal:   Revenue − Expenses                        = Net Income
  Business:   Sales − Cost of Sales                     = Gross Profit
              Gross Profit − Expenses                   = Net Profit BEFORE tax
              Net Profit before tax − Tax               = Net Profit AFTER tax

BALANCE SHEET             (at a point in time — "as at 31 May")
              Assets − Liabilities                      = Equity (Net Worth)
              Assets = Liabilities + Equity

CASH FLOW STATEMENT       (over a period)
              Receipts − Payments                       = Net cash movement
              Opening cash + movement                   = Closing cash
```

## 2. The accounting equation

```
(1)  Assets − Liabilities = Equity
(2)  Assets = Liabilities + Equity
(3)  Assets − Liabilities = Opening Equity + Net Income
(4)  Assets − Liabilities = Opening Equity + (Revenue − Expenses)
```

For a business, equity is built rather than carried forward:

```
Closing equity = Contributed capital
               + Opening retained earnings
               + Net profit after tax
               − Dividends / drawings
```

**The universal cross-check**, valid whenever there are no capital
contributions or withdrawals:

```
ΔAssets − ΔLiabilities  =  Revenue − Expenses
```

## 3. Accrual adjustments

```
Prepaid expense    paid now, consumed later     →  ASSET,     expense monthly
Accrued expense    used now, paid later         →  LIABILITY, expense now
Receivable         earned now, received later   →  ASSET,     revenue now
Unearned revenue   received now, earned later   →  LIABILITY, no revenue yet

Monthly expense on a 12-month prepayment = Total / 12
Prepaid asset after m months elapsed     = Total × (12 − m) / 12
```

## 4. Time value of money

```
FV = PV × (1 + r)ⁿ                          r per period, n periods

r = annual rate / compounding periods per year
n = years × compounding periods per year

Future value of an ordinary annuity   = PMT × [ (1 + r)ⁿ − 1 ] / r
Present value of an ordinary annuity  = PMT × [ 1 − (1 + r)⁻ⁿ ] / r
Annuity factor  AF                    = [ (1 + r)ⁿ − 1 ] / r

Combined:  FV = PV(1 + r)ⁿ + PMT × AF

Loan repayment:   PMT = PV × r × (1 + r)ⁿ / [ (1 + r)ⁿ − 1 ]
                      = PV × (1 + r)ⁿ / AF

With a balloon / residual FV:
                  PMT = [ PV × (1 + r)ⁿ − FV ] / AF

Interest earned between month a and month b = Balance_b − Balance_a

Doubling time:    n = ln(2) / ln(1 + r)
```

The single Excel equation all five functions invert:

```
PV × (1 + r)ⁿ  +  PMT × AF × (1 + r·type)  +  FV  =  0
```

## 5. Loan amortisation

```
Interest this period  = Opening balance × r
Principal this period = Payment − Interest
Closing balance       = Opening balance − Principal

Total interest = (Number of payments × PMT) − Principal actually retired
   Principal retired = Amount borrowed − Residual/balloon

Identity:  CUMIPMT + CUMPRINC = −(periods in the span × PMT)
```

## 6. Ratios

State the variant. Every one of these has a defensible alternative.

### Profitability

```
Gross profit margin   = Gross profit / Revenue
Net profit margin     = Profit AFTER tax / Revenue          ← Week 9 variant
Return on equity      = Profit after tax / Total equity     ← CLOSING equity
   alternative        = Profit after tax / ((opening + closing equity) / 2)
Return on assets      = Profit after tax / Total assets     ← closing
   alternative        = Profit after tax / ((opening + closing assets) / 2)
```

### Liquidity

```
Current ratio         = Current assets / Current liabilities
Quick (acid-test)     = (Current assets − Inventory) / Current liabilities
Cash ratio            = Cash / Current liabilities
```

### Efficiency

```
Inventory turnover    = Cost of sales / AVERAGE inventory      (times per year)
Days inventory        = 365 / inventory turnover               (days)
   AVERAGE inventory  = (opening + closing) / 2                ← Week 9 variant
   closing-basis      = Cost of sales / closing inventory

Receivables days      = Receivables / Credit sales × 365
Payables days         = Payables / Cost of sales × 365
Asset turnover        = Revenue / Total assets
```

### Gearing and solvency

```
Debt to equity        = Total liabilities / Total equity    ← CLOSING balances
Times interest earned = EBIT / Finance costs
   EBIT = Profit before interest and tax
```

### Market

```
Earnings per share    = Profit after tax / Weighted average ordinary shares
   in cents           = that × 100
Price / earnings      = Market price per share / EPS (in DOLLARS)
Dividend payout       = Dividends / Profit after tax
Dividend yield        = Dividend per share / Market price per share
```

## 7. Cost-volume-profit

```
Contribution margin per unit  = Selling price − Variable cost per unit
Contribution margin ratio     = CM per unit / Selling price

Break-even units    = Fixed costs / CM per unit                → ROUND UP
Break-even dollars  = Fixed costs / CM ratio
   (or rounded break-even units × selling price — say which)

Units for target profit BEFORE tax
                    = (Fixed costs + Target PBT) / CM per unit

Units for target profit AFTER tax
                    = (Fixed costs + Target PAT / (1 − tax rate)) / CM per unit

Cash break-even     = (Fixed costs − Depreciation) / CM per unit

Margin of safety    = Budgeted volume − Break-even volume
   as a %           = that / Budgeted volume

Income statement equation form:
   (Q × Selling price) − (Q × Variable cost per unit) − Fixed costs = 0
```

## 8. Valuation

```
        CF₁        CF₂             CFₙ
PV = ────────  + ────────  + … + ────────
     (1 + d)¹    (1 + d)²        (1 + d)ⁿ

Discount rate  d = Risk-free rate + Risk premium
Cash flow year t  = CF₀ × (1 + g)ᵗ
Final year's cash flow = grown cash flow + TERMINAL (sale) VALUE

Net present value  = PV of inflows − Cost          positive → buy
"Over/(under)valued", BSB107 convention
                   = Cost − PV                     positive → OVERVALUED
```

## 9. Excel functions

| Function | Returns | Signature |
|---|---|---|
| `FV` | Future value | `(rate, nper, pmt, pv, type)` |
| `PV` | Present value / borrowing capacity | `(rate, nper, pmt, fv, type)` |
| `NPER` | Number of periods | `(rate, pmt, pv, fv, type)` |
| `PMT` | Payment per period | `(rate, nper, pv, fv, type)` |
| `RATE` | Rate per period | `(nper, pmt, pv, fv, type)` |
| `CUMIPMT` | Total interest over a span | `(rate, nper, pv, start, end, type)` — `type` **compulsory** |
| `CUMPRINC` | Total principal over a span | `(rate, nper, pv, start, end, type)` — `type` **compulsory** |
| `NPV` | PV of a stream, first value discounted **one** period | `(rate, value1, value2, …)` |
| `ROUNDUP` | Break-even units | `(number, 0)` |
| `ROUND` | Currency presentation only | `(number, digits)` |
| Goal Seek | Solve backwards | `Data > What-If Analysis > Goal Seek` |

`type` = **0** end of period (ordinary annuity, the default and what every
question here uses) · **1** beginning of period.

---

## Exam traps checklist

Work down this list before you submit anything.

### Statements and classification

- **Revenue is earned, not received. Expense is used up, not paid.** Wages
      earned $2,400 with $1,800 received is $2,400 of revenue and a $600
      receivable.
- **Buying an asset is not an expense.** Giving an asset away *is* an
      expense, even though no cash moves.
- **Swaps and loans are not revenue.** Selling something at book value,
      moving cash between accounts, lending to a friend, borrowing $27,000 —
      all zero net effect.
- **Only the gain is revenue.** Sell a $3,800 piano for $5,000 → revenue
      $1,200, not $5,000.
- **On a loan repayment, only the interest is an expense.** $500 paid with
      $200 interest: cash −500, liability −300, expense 200.
- **Split the prepayment.** $1,305 for 12 months paid in March → $108.75
      expense, $1,196.25 prepaid asset, $1,305 cash out.
- **Inventory on hand and cost of sales are different lines.** One is an
      asset, one is an expense. Never net them.
- **Tax accrues even when nothing is paid.** Tax expense on the income
      statement *and* tax payable as a current liability.
- **Equity = capital + retained earnings**, not capital − liabilities. If
      the two sides of the balance sheet disagree, this is where to look
      first.
- **Foot both sides.** A balance sheet that doesn't balance is never
      right, and it is the only error that announces itself.
- **Get the heading right.** "For the month of…" on the income and cash
      flow statements; "as at…" on the balance sheet.
- **Find the out-of-period distractor.** Every question set plants one — a
      June holiday in a March question set. It goes nowhere.

### Time value of money

- **Divide the rate, multiply the periods.** 4.5% p.a. monthly over 20
      years is `r = 0.045/12`, `n = 240`. Using `4.5%` and `20` cost $175 on a
      $4,000 deposit.
- **Never round the periodic rate.** `0.0037` instead of `0.003725` on a
      $500k 25-year mortgage moves total interest by **$2,548**. Reference
      `=rate/12` inside the formula.
- **Never retype a calculated payment as a whole number.** `2762` instead
      of `2762.1618` leaves **$88.67** owing after 300 payments.
- **Signs are opposite.** `FV`, `PV` and `PMT` return the opposite sign to
      the amount you entered. Negate the function or enter the input negative.
- **Interest over a window = difference between two balances.** Not
      `FV − PV` scaled by a fraction of the term.
- **`CUMIPMT` and `CUMPRINC` require `type`.** Omitting it is an error, not
      a default.
- **A balloon or a longer term lowers the payment and raises total
      interest.** Say both halves.
- **"Total interest" needs its span named.** With a residual, the
      instalments only retire `principal − residual`.
- **`NPER` returns a fraction.** 22.78 years means the target is hit in
      year 23 if interest is credited annually. Name the convention.
- **Some marks are for the function, not the number.** A hand-typed
      correct answer scores zero where the marker searches the formula text.

### Ratios

- **Name the variant.** Average or closing? Before or after tax? Turnover
      or days? Collins Foods' 2024 ROE is 16.06% closing and 16.89% average.
- **Watch `$'000`.** A statement in thousands broke the Week 9 EPS by a
      factor of 1,000 and produced a P/E of 33,918 where the answer is 33.92.
- **Sense-check the range.** Current ratios live near 0.5–3, P/E near
      5–50, inventory days from 4 (fast food) to 90 (retail). A number far
      outside its range is an arithmetic error, not a finding.
- **A turnover ratio is in times per year; a turnover period is in days.**
      `days = 365 / turnover`.
- **P/E divides by EPS in dollars.** If EPS is in cents, divide by 100
      first.
- **One ratio is not analysis.** Compare over time or against a benchmark,
      and give a reason.
- **A ratio can move because the accounting changed.** Collins Foods'
      debt to equity doubled in 2020 when leases came on balance sheet — not
      new borrowing.
- **"Liquidity ratios", plural, means more than the current ratio.** Add
      the quick ratio.

### Break-even and CVP

- **Round break-even units UP, always.** `ROUNDUP`, never `ROUND`, never
      `INT`. At 1,253 bottles Eden Ciders is still losing money.
- **Classify by behaviour, not by name.** Cost of sales and per-unit
      delivery are variable; rent, wages, insurance, accounting and
      depreciation are fixed.
- **Gross up an after-tax target first.** `Target PAT / (1 − t)`, then add
      fixed costs, then divide by CM. Dividing at the end is wrong.
- **Break-even dollars has two defensible forms.** `Fixed / CM ratio` and
      `rounded units × price` differ ($10,027.71 vs $10,032 for Eden Ciders).
      Say which.
- **Cost-structure percentages depend on the volume you evaluate them
      at.** Eden Ciders' expenses are 57.04% variable at May's budget and
      66.61% at 3,418 bottles. Name the volume.
- **Goal Seek overwrites its input cell.** Run it twice and the first
      answer is gone. Substitute the result back into the profit equation
      before you believe it.
- **Goal Seek needs a formula in "Set cell" and a constant in "By
      changing".** Reverse them and it silently does nothing.
- **Depreciation is in fixed costs for profit break-even, out for cash
      break-even.** Two questions, two answers.

### Valuation

- **`Over/(under)valued` is `cost − PV` in this unit — the negative of
      NPV.** Write the word "overvalued" or "undervalued" next to the number.
- **Excel's `NPV()` is not net present value.** It discounts the first
      value by one full period and does not subtract the outlay. Put the
      year-0 cost outside the function.
- **The final year carries the terminal value.** Grown cash flow *plus*
      the sale price, discounted once, at year n.
- **A supplied sale price replaces the perpetual growth model.** Don't
      compute `D₁/(d − g)` when the question gives you an exit price and a
      horizon.
- **Discount rate = risk-free + risk premium.** A higher premium *lowers*
      the valuation. Don't also cut the cash flows — that double-counts.
- **Report the sensitivity.** The Collins Foods verdict flips at a 9.62%
      discount rate against the 10.2% used. A single number to the cent is
      false precision.
- **Growth rate, discount rate and cash flows must all be in the same
      period.** Check row 1 by hand.

### Written answers

- **Word limits are enforced and counted live.** Assignment 1 Q6 and
      Assignment 2 Q12 and Q13 are 200 ±10%; Q14 is 500 ±10%. Answers are only
      marked **up to** the limit.
- **Answer every part.** Q12 has three (auditor's role, two actions,
      whether Eva should worry about Collins Foods). The third is the one
      people drop.
- **Take a position and concede the other side.** Effective altruism,
      impact investing, ESG aggregation, utilitarian valuation — the marks are
      in the objections, not the definitions.
- **Tie advice to your own numbers.** "Profitable but cash-negative — net
      income $1,441 against a $305 fall in the bank" beats general life
      advice.
- **Cite the prescribed reading with a page reference** for direct quotes.
      Q14 needs an APA reference list.
- **Show your workings in the blank cells.** Both workbooks warn that a
      marker who cannot see the derivation may not award the mark.

---

## The four flagged errors in the source material

Detailed with the algebra in the topic notes. **Confirm each with your tutor
before relying on it.**

| Where | The source says | It should be |
|---|---|---|
| A1 mortgage sheet (§2.6) | Monthly rate stored as `0.0037` | `0.0447/12 = 0.003725` — total interest is out by $2,548 |
| A2 Week 8 (§3.2) | Equity `= capital − liabilities` = $17,320.25 | `capital + retained earnings` = **$63,539**; the balance sheet does not balance as submitted |
| A2 Week 9 (§3.4) | EPS 0.0205c, P/E 33,918 | The statements are `$'000`. EPS **20.46c**, P/E **33.92** |
| Week 10 tutorial (§3.5) | Goal Seek break-even cell reads **2,130** mugs | That is the $5,000-profit volume. Break-even is **1,097** |

Two more worth knowing about, both in the Week 10 portfolio sheet: the
income-statement-equation line is written `… − Fixed Costs = BEP` where it
should read `= 0`, and the visible workings for question 10.1 compute the
variable-cost proportion at the Goal Seek volume (66.61%) rather than at
May's budget (57.04%, which is the answer given).
