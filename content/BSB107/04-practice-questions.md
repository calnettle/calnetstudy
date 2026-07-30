# BSB107 — Practice Questions

Exam-style questions across the whole unit. Answers are hidden — work each one
out on paper (or in Excel, which is how the unit is assessed) before you tap.

Every figure in the answers was recomputed before it was written down. Where a
question has more than one defensible reading, the answer says so.

---

## Section A — Financial statements and the accounting equation

**A1.** In March, Priya pays $1,440 for a 12-month contents insurance policy
starting 1 March. State the amount that appears on (a) the March income
statement, (b) the 31 March balance sheet, and (c) the March cash flow
statement.

<details><summary>Answer A1</summary>

```
(a) Income statement   1,440 / 12          = $120.00 expense
(b) Balance sheet      1,440 × 11/12       = $1,320.00 prepaid ASSET
(c) Cash flow          the whole premium   = $1,440.00 payment
```

One transaction, three different numbers on three statements. That is the
whole point of accrual accounting.
</details>

---

**A2.** Priya earns $3,100 of wages during April but only $2,350 is paid to
her by 30 April. Her April electricity bill of $210 is not due until July. Her
April revenue and expense figures, and the balance sheet items created, are?

<details><summary>Answer A2</summary>

- **Revenue $3,100** — wages **earned**, not received.
- **Expense $210** — electricity **used**, not paid.
- Balance sheet: **wages receivable $750** (asset, 3,100 − 2,350) and
  **electricity payable $210** (liability).
- Cash flow statement: **$2,350 receipt**, no electricity payment.
</details>

---

**A3.** For each transaction give the change in assets, the change in
liabilities, and any revenue or expense.

| # | Transaction |
|---|---|
| a | Sells shares carried at $4,200 for $5,100 cash |
| b | Borrows $18,000 to buy a $18,000 boat |
| c | Repays $900 on a loan, of which $340 is interest |
| d | Transfers $2,000 from savings to a term deposit |
| e | Donates a laptop carried at $650 to a school |

<details><summary>Answer A3</summary>

| # | Δ Assets | Δ Liabilities | Revenue | Expense |
|---|---|---|---|---|
| a | **+900** | 0 | **900** | 0 |
| b | **+18,000** | **+18,000** | 0 | 0 |
| c | **−900** | **−560** | 0 | **340** |
| d | **0** | 0 | 0 | 0 |
| e | **−650** | 0 | 0 | **650** |

Line by line:

- **(a)** Cash +5,100, shares −4,200, net **+900**. Revenue is the **gain**
  of $900, not the $5,100 proceeds — $4,200 was already an asset.
- **(b)** Cash +18,000 from the loan, then −18,000 to the seller, boat
  +18,000 — assets net **+18,000**, liabilities **+18,000**. Net worth
  unchanged, no revenue, no expense. Borrowing is never income.
- **(c)** Cash −900 (the whole payment leaves). The loan falls by the
  **principal only**, −560. Interest $340 is the expense.
  Check: `ΔA − ΔL = −900 − (−560) = −340 = R − E` ✓
- **(d)** A pure asset swap. Zero everywhere.
- **(e)** No cash moves, but net worth falls, so it is an **expense**.
</details>

---

**A4.** Opening equity is $41,200. During the year assets rose by $63,500 and
liabilities rose by $58,900. Revenue was $27,400 and expenses were $21,300.
Do the numbers hold together?

<details><summary>Answer A4</summary>

```
Change in equity from the balance sheet  = 63,500 − 58,900 = 4,600
Net income from the income statement     = 27,400 − 21,300 = 6,100
```

**No — they disagree by $1,500.** With no capital contributions or
withdrawals these two must be identical, so a transaction is missing a leg,
or $1,500 of equity moved without going through the income statement (an
owner drawing of $1,500 would explain it exactly). Closing equity is
$41,200 + $4,600 = **$45,800** either way; the balance sheet is the anchor.

The exam version of this asks *why* they might legitimately differ. The
answer is **capital contributions and drawings/dividends**.
</details>

---

## Section B — Investments and borrowings

**B1.** $12,500 is invested at 5.4% per annum compounded monthly for 15 years.
Give `r`, `n`, and the future value. Then give the value if the same rate were
applied annually instead.

<details><summary>Answer B1</summary>

```
r = 0.054 / 12 = 0.0045          n = 15 × 12 = 180

FV = 12,500 × (1.0045)¹⁸⁰
   = 12,500 × 2.2438271
   = $28,047.84                  Excel: =-FV(0.054/12, 180, 0, 12500)

Annual compounding:
FV = 12,500 × (1.054)¹⁵ = 12,500 × 2.2009449 = $27,511.81
```

Monthly compounding is worth **$536.03** more on the same nominal rate.
Getting `r` and `n` into the same period is the difference.
</details>

---

**B2.** How much must be invested today, at 6% per annum compounded quarterly,
to have $50,000 in 8 years?

<details><summary>Answer B2</summary>

```
r = 0.06 / 4 = 0.015             n = 8 × 4 = 32

PV = 50,000 / (1.015)³²
   = 50,000 / 1.6103243
   = $31,049.65                  Excel: =-PV(0.06/4, 32, 0, 50000)
```

**Cross-check:** `31,049.65 × 1.015³² = $50,000.00` ✓
</details>

---

**B3.** A $340,000 mortgage at 5.85% per annum, repaid monthly over 30 years.
Give (a) the monthly repayment, (b) the total interest over the life of the
loan, (c) interest as a share of everything repaid, and (d) the interest in
the **first** month.

<details><summary>Answer B3</summary>

```
r = 0.0585 / 12 = 0.004875       n = 30 × 12 = 360
(1 + r)ⁿ = 1.004875³⁶⁰ = 5.7588399
Annuity factor = (5.7588399 − 1) / 0.004875 = 976.1723

(a) PMT = 340,000 × 5.7588399 / 976.1723 = $2,005.80
        Excel: =-PMT(0.0585/12, 360, 340000)

(b) Total repaid  = 2,005.80 × 360 = 722,087.70
    Total interest = 722,087.70 − 340,000 = $382,087.70
        Excel: =-CUMIPMT(0.0585/12, 360, 340000, 1, 360, 0)

(c) 382,087.70 / 722,087.70 = 52.91%

(d) 340,000 × 0.004875 = $1,657.50
```

More than half of everything repaid is interest. Part (d) needs no `PMT` at
all — the first month's interest is just the opening balance times the
periodic rate.
</details>

---

**B4.** Same loan as B3. Two options: keep the 30-year term, or take a
25-year term. Compare the monthly payment and the total interest, and say in
one sentence what the trade-off is.

<details><summary>Answer B4</summary>

```
25 years:  n = 300, (1.004875)³⁰⁰ = 4.3014264
           Annuity factor = 677.2157
           PMT = 340,000 × 4.3014264 / 677.2157 = $2,159.56
           Total interest = 2,159.56 × 300 − 340,000 = $307,866.71

                        30 years      25 years      difference
Monthly payment         2,005.80      2,159.56       +153.76
Total interest        382,087.70    307,866.71    −74,220.99
```

**A shorter term costs $153.76 more a month and saves $74,221 in interest.**
Say both halves — a longer term always trades total cost for monthly cash
flow, and an answer that names only one half is half an answer.
</details>

---

**B5.** Why does `=CUMIPMT(0.06/12, 60, 25000, 1, 12)` return an error?

<details><summary>Answer B5</summary>

Because `type` is **omitted, and it is not optional in `CUMIPMT`**. Unlike
`PMT`, `FV`, `PV` and `NPER`, both `CUMIPMT` and `CUMPRINC` require all six
arguments. Write `=CUMIPMT(0.06/12, 60, 25000, 1, 12, 0)`.

The correct answer is **−$1,379.76** of interest in year 1, and
`CUMPRINC(...)` gives **−$4,420.08** of principal.
**Cross-check:** `1,379.76 + 4,420.08 = 5,799.84 = 12 × PMT` ✓
(`PMT = $483.32`.)
</details>

---

## Section C — Business statements

**C1.** Riverbend Roasters' budgeted figures for July: sales $96,000; cost of
coffee sold $38,400; wages $19,200; rent $6,500; utilities $1,150; marketing
$2,800; insurance $640; accounting $450. Tax is 25% of profit before tax,
payable after year end. Prepare the income statement down to net profit after
tax.

<details><summary>Answer C1</summary>

```
Sales                                        96,000
Less: Cost of coffee sold                   (38,400)
                                            ────────
Gross profit                                 57,600

Less: Expenses
  Wages                     19,200
  Rent                       6,500
  Marketing                  2,800
  Utilities                  1,150
  Insurance                    640
  Accounting                   450
                            ──────
                                            (30,740)
                                            ────────
Net profit before tax                        26,860
Taxation (25%)                               (6,715)
                                            ────────
NET PROFIT AFTER TAX                         20,145
```

Gross margin `57,600 / 96,000 = 60.00%`; net margin
`20,145 / 96,000 = 20.98%`. The **$6,715 of tax is also a current liability**
at 31 July — no cash has gone to the ATO.
</details>

---

**C2.** At 30 June, Kestrel Pty Ltd has contributed capital $150,000, total
assets $401,000 and total liabilities $201,000. What are retained earnings,
and what is total equity?

<details><summary>Answer C2</summary>

```
Total equity      = 401,000 − 201,000 = $200,000
Retained earnings = 200,000 − 150,000 =  $50,000
```

The order matters. Equity comes from the balance sheet identity first;
retained earnings is the plug. Computing equity as *capital minus
liabilities* — `150,000 − 201,000 = −51,000` — is the error in the
Assignment 2 workbook, and a negative equity figure on a solvent company is
the giveaway.
</details>

---

## Section D — Ratio analysis

*Questions D1–D5 all use Kestrel Pty Ltd. All figures are in `$'000` unless
stated.*

| Statement of financial position | 2024 | 2025 |
|---|---|---|
| Cash | 39 | 48 |
| Receivables | 19 | 22 |
| Inventory | 28 | 31 |
| **Total current assets** | 86 | **101** |
| Property, plant and equipment | 246 | 260 |
| Intangibles | 40 | 40 |
| **Total assets** | 372 | **401** |
| Total current liabilities | 54 | **61** |
| Total non-current liabilities | 132 | **140** |
| **Total equity** (capital 150 + retained earnings) | 186 | **200** |

| Statement of financial performance | 2025 |
|---|---|
| Revenue | 420 |
| Cost of sales | (260) |
| **Gross profit** | **160** |
| Operating expenses | (86) |
| **Profit before interest and tax** | **74** |
| Finance costs | (12) |
| **Profit before tax** | **62** |
| Income tax expense (30%) | (18.6) |
| **Profit after tax** | **43.4** |

Shares on issue: **400,000**. Market price at 30 June 2025: **$1.85**.

---

**D1.** Compute, for 2025: net profit margin, current ratio, quick ratio,
debt to equity, return on equity, and times interest earned. Name the variant
you used wherever there is a choice.

<details><summary>Answer D1</summary>

```
Net profit margin     = 43.4 / 420           = 10.33%
Current ratio         = 101 / 61             = 1.66 : 1
Quick ratio           = (101 − 31) / 61      = 1.15 : 1
Debt to equity        = (61 + 140) / 200
                      = 201 / 200            = 1.005  (closing balances)
Return on equity      = 43.4 / 200           = 21.70%  (CLOSING equity)
                        43.4 / ((186+200)/2) = 22.49%  (AVERAGE equity)
Times interest earned = 74 / 12              = 6.17 times
```

Return on equity is **0.79 percentage points** apart depending on the basis.
Both are correct; an unlabelled number is not. The Week 9 workbook uses
**closing** equity, so match it unless told otherwise.
</details>

---

**D2.** Compute days inventory for 2025 on both the average and the closing
basis. Which is larger, and why?

<details><summary>Answer D2</summary>

```
Average basis
  Average inventory  = (28 + 31) / 2 = 29.5
  Inventory turnover = 260 / 29.5    = 8.81 times per year
  Days inventory     = 365 / 8.81    = 41.41 days

Closing basis
  Inventory turnover = 260 / 31      = 8.39 times per year
  Days inventory     = 365 / 8.39    = 43.52 days
```

The **closing** basis is larger — **43.52 vs 41.41 days** — because inventory
grew during the year, so the closing balance exceeds the average. When stock
is being built up, the closing basis flatters the number upward; when it is
being run down, the reverse. Two full days of difference on the same company
in the same year, from nothing but the choice of denominator.
</details>

---

**D3.** Compute earnings per share in cents and the price/earnings ratio.

<details><summary>Answer D3</summary>

```
Profit after tax = 43.4 ($'000) = $43,400

EPS = 43,400 / 400,000 shares = $0.1085 = 10.85 cents

P/E = 1.85 / 0.1085 = 17.05
```

**The `$'000` heading is the whole question.** Dividing 43.4 by 400,000 gives
$0.0001085 and a P/E of 17,051 — which is the exact error in the Assignment 2
workbook. Convert the thousands, then sense-check: real P/E ratios sit
roughly between 5 and 50.
</details>

---

**D4.** Kestrel's current ratio was 1.59 in 2024 and 1.66 in 2025. Its debt to
equity was 1.00 and is now 1.005. Write two sentences of analysis a marker
would give credit for.

<details><summary>Answer D4</summary>

```
Current ratio 2024 = 86 / 54  = 1.59
Current ratio 2025 = 101 / 61 = 1.66
```

Something like: *"Liquidity improved slightly — the current ratio rose from
1.59 to 1.66, and with a quick ratio of 1.15 the improvement is not an
artefact of unsold stock. Gearing is essentially unchanged at just over $1 of
liabilities per $1 of equity, and with EBIT covering interest 6.17 times the
current debt load is comfortably serviced."*

The credit is for (i) quoting both years, (ii) naming a **direction**, and
(iii) giving a **reason or a qualification**. A list of numbers with no
comparison earns nothing.
</details>

---

**D5.** Kestrel's return on equity is 21.70%. Someone claims this proves the
business is more profitable than a competitor with an ROE of 14%. Give two
reasons that might not follow.

<details><summary>Answer D5</summary>

1. **ROE is inflated by gearing.** Debt to equity of 1.005 means half the
   asset base is funded by liabilities, which shrinks the denominator. A
   competitor with no debt earns the same return on assets but a much lower
   ROE. Compare **return on assets** as well: `43.4 / ((372 + 401)/2) =
   11.23%` on average total assets.
2. **The two figures may not be on the same basis** — closing vs average
   equity, before vs after tax, or a different year end. And one year is not
   a trend: a single good or bad year (Collins Foods in 2023) swings ROE
   enormously without telling you anything about the business's normal
   earning power.

A third, if you want it: equity is a **book** value. A company that has
written assets down, or bought back shares, reports a higher ROE for reasons
that have nothing to do with operations.
</details>

---

## Section E — Break-even and CVP

*Questions E1–E4 use Loomis Lighting: selling price $25 per unit, product cost
$11 per unit, delivery $2 per unit, and fixed costs of $60,000 per month.*

**E1.** Contribution margin per unit, contribution margin ratio, break-even in
units and in dollars.

<details><summary>Answer E1</summary>

```
Variable cost per unit    = 11 + 2                = $13
Contribution margin       = 25 − 13               = $12 per unit
Contribution margin ratio = 12 / 25               = 48.00%

Break-even units   = 60,000 / 12    = 5,000 units      (exactly whole)
Break-even dollars = 5,000 × 25     = $125,000
                     60,000 / 0.48  = $125,000  ✓ same
```

The two dollar routes agree here **only because the unit answer came out
whole**. When it does not — Eden Ciders' 1,253.46 → 1,254 — they differ, and
you must say which you used.
</details>

---

**E2.** How many units for a profit **before** tax of $18,000?

<details><summary>Answer E2</summary>

```
Units = (Fixed costs + Target PBT) / CM
      = (60,000 + 18,000) / 12
      = 6,500 units
```

**Cross-check:** `6,500 × 12 − 60,000 = $18,000` ✓
</details>

---

**E3.** How many units for a profit **after** tax of $15,000, at a 30% tax
rate?

<details><summary>Answer E3</summary>

```
Required profit BEFORE tax = 15,000 / (1 − 0.30) = $21,428.57

Units = (60,000 + 21,428.57) / 12
      = 6,785.71
      → 6,786 units   (ROUNDUP)
```

**Cross-check:** `6,786 × 12 − 60,000 = $21,432` before tax; after 30% tax
that is `21,432 × 0.70 = $15,002.40` ✓ — just over the $15,000 target, which
is what rounding **up** is supposed to deliver.

The trap is dividing the *answer* by 0.7 instead of grossing up the *target*.
`(60,000 + 15,000)/12 = 6,250 units` gives $15,000 **before** tax and only
$10,500 after.
</details>

---

**E4.** Loomis budgets 8,200 units next month. What is the margin of safety in
units and as a percentage? Of the $60,000 of fixed costs, $9,000 is
depreciation — what is the cash break-even?

<details><summary>Answer E4</summary>

```
Margin of safety = 8,200 − 5,000 = 3,200 units
                 = 3,200 / 8,200 = 39.02% of budgeted volume

Cash break-even  = (60,000 − 9,000) / 12 = 4,250 units
```

Sales can fall **39%** before Loomis makes an accounting loss, and **48%**
before it runs out of cash on operations. Two different questions; read which
one was asked. Depreciation belongs in fixed costs for a profit break-even
and comes out for a cash break-even.
</details>

---

**E5.** Goal Seek returns a break-even of 4,617.83 units. A classmate reports
4,618 and another reports 4,617. Who is right, and what is the one-line
justification?

<details><summary>Answer E5</summary>

**4,618.** At 4,617 units the business is still making a loss — a fraction of
a unit short of covering fixed costs — and you cannot sell 0.83 of a unit.
Break-even units always round **up**, which is why the workbooks use
`=ROUNDUP(cell, 0)` and never `ROUND` or `INT`.
</details>

---

## Section F — Valuation

**F1.** Meridian Ltd pays a current dividend of $0.40 per share, expected to
grow 5% a year. The risk-free rate is 3.5% and Meridian's risk premium is
5.5%. You expect to sell after three years for $8.50. The shares trade at
$7.10. What is one share worth, and is it over- or undervalued?

<details><summary>Answer F1</summary>

```
Discount rate = 3.5% + 5.5% = 9.0%

Year  Cash flow                        Present value
  1   0.40 × 1.05        = 0.4200      0.4200 / 1.09¹ = 0.385321
  2   0.42 × 1.05        = 0.4410      0.4410 / 1.09² = 0.371181
  3   0.4410 × 1.05 = 0.46305
        + 8.50           = 8.96305     8.96305 / 1.09³ = 6.921119
                                                        ─────────
                         Present value of one share      $7.677621
                                                       = $7.68
```

*(Rounding the year-3 dividend to $0.44 before discounting gives $7.6598 —
about a cent low. Carry the growth unrounded, which is what a spreadsheet
does anyway.)*

**Price $7.10 against a value of $7.68 — the share is UNDERVALUED by $0.58.**

- Conventional NPV = `7.68 − 7.10` = **+$0.58** (positive → buy)
- The workbook's convention, `cost − PV` = `7.10 − 7.68` = **−$0.58**
  (negative → undervalued)

Same fact, opposite sign. Write the word next to the number.
</details>

---

**F2.** In F1, 90% of the value comes from the year-3 sale price. What does
that tell you, and what should a written answer add?

<details><summary>Answer F2</summary>

```
PV of the terminal price alone = 8.50 / 1.09³ = $6.563560
As a share of total value      = 6.563560 / 7.677621 = 85.5%
(and the full year-3 cash flow, dividend included, is 90.1%)
```

It tells you the valuation is **almost entirely a bet on the exit price**,
not on the dividends. Two consequences worth writing down:

1. The dividend growth assumption barely matters; the terminal price
   assumption is everything. Sensitivity analysis should be run on the exit
   price and the discount rate, not on `g`.
2. A single-point valuation of $7.68 conveys false precision. Report the
   number **with the assumption that would flip it** — here, a discount rate
   above **12.03%**, or an exit price below **$7.75**, turns the buy into a
   pass. Both were verified by solving for the value that makes PV = $7.10.
</details>

---

**F3.** Explain, in the terms this unit uses, why the Victoria Point apartment
carries a 10.8% risk premium while Collins Foods carries 6.2%.

<details><summary>Answer F3</summary>

The discount rate is built as `risk-free rate + risk premium`, and the premium
prices the uncertainty of the cash flows. A single residential apartment is
riskier than a listed food group because it is:

- **undiversified** — one property, one tenant, one suburb, against a national
  franchise network of hundreds of stores;
- **illiquid** — months to sell, with transaction costs, versus a share sold
  the same day;
- **exposed to concentrated, un-hedgeable risks** — vacancy, tenant default,
  a single body-corporate levy, local oversupply.

A higher premium means a harder discount and a lower present value for the
same cash flows. Note the direction: raising the premium **reduces** the
valuation, so a conservative analyst raises it rather than lowering the cash
flows, and doing both double-counts the same risk.
</details>

---

## Section G — Responsibility, ethics and the limits of the numbers

**G1.** In the Wirecard case, name two specific audit procedures Ernst & Young
failed to perform, and say what each would have revealed.

<details><summary>Answer G1</summary>

1. **Direct confirmation of bank balances with the banks themselves.**
   Between 2016 and 2018 EY did not confirm Wirecard's account information
   directly with OCBC Bank in Singapore, where Wirecard claimed up to
   €1 billion in deposits, and instead relied on third-party trustee
   documents and **screenshots supplied by Wirecard**. A direct confirmation
   would have shown the cash did not exist — the €1.9 billion hole admitted
   in June 2020.
2. **An anti-fraud or forensic investigation in response to credible external
   allegations.** EY issued ten consecutive unqualified opinions without
   assigning an anti-fraud team, and did not investigate a 2016 internal
   whistleblower report that a senior Wirecard manager in India had offered
   personal compensation to an EY employee to sign off manipulated sales
   figures. Investigating either would have surfaced the round-tripping the
   Financial Times had been describing publicly since 2015.

Bonus mark if you name the third failure Chen identifies: **lack of
professional scepticism**, evidenced by relying on verbal assurances from the
very executives under suspicion.
</details>

---

**G2.** Eva has your ratio analysis of Collins Foods. Should she trust it?
Give the answer a marker would credit.

<details><summary>Answer G2</summary>

**Qualified yes.** The credit is in holding two things at once:

- *In favour:* Collins Foods is ASX-listed, subject to Australian corporations
  law and ASX continuous-disclosure rules, externally audited, and the
  six-year run of statements is internally consistent — net assets equal total
  equity in every year, and the ratios move in patterns that match a known
  operating story (2023 cost inflation, 2024 recovery).
- *Against:* Wirecard was also listed, also audited by a Big Four firm for a
  decade, and also had a regulator. Ratios are arithmetic performed on
  reported figures; they inherit every error and every misstatement in them.
  Nothing in a current ratio detects a fabricated bank balance.

The conclusion worth writing: **treat the ratios as a description of what was
reported, and look at the audit opinion, the auditor's tenure, and any
qualifications before relying on them.** An unqualified "yes, they're audited"
misses the point of the reading.
</details>

---

**G3.** Give one non-financial consideration for each of the two Week 11
investments, and explain what each reveals about the limits of a DCF.

<details><summary>Answer G3</summary>

- **Collins Foods (shares).** The discount rate prices *volatility*, not
  *conduct*. Franchise labour practices, supply-chain animal welfare and the
  public-health profile of the product appear nowhere in the model, yet all
  three carry real reputational and regulatory risk — and a person may simply
  not want to own them regardless of the return.
- **Victoria Point apartment.** The model assumes rent rises 4.8% every year
  for five years. That is a real tenant paying more each year. Housing
  affordability and tenant security enter the spreadsheet only as an input to
  the investor's return, never as a cost.

What both reveal: a DCF is a **statement about assumptions expressed to the
cent**. It optimises a single quantity — dollars to the investor — and treats
every stakeholder who is not the investor as a parameter. Precision is not
accuracy, and completeness of arithmetic is not completeness of analysis.
</details>

---

## Section H — Excel

**H1.** Match each question to its function.

| | Question |
|---|---|
| a | What will $9,000 be worth in 12 years? |
| b | What monthly repayment clears a $22,000 loan in 4 years? |
| c | How long until $6,000 doubles at 4.2%? |
| d | Total interest in years 2 and 3 of a loan |
| e | How much can I borrow at $1,800 a month? |
| f | Break-even units, when there is no clean formula to invert |

<details><summary>Answer H1</summary>

| | Function |
|---|---|
| a | `FV(rate, nper, pmt, pv, type)` |
| b | `PMT(rate, nper, pv, fv, type)` |
| c | `NPER(rate, pmt, pv, fv, type)` |
| d | `CUMIPMT(rate, nper, pv, 13, 36, 0)` — periods 13 to 36, and `type` is **compulsory** |
| e | `PV(rate, nper, pmt, fv, type)` |
| f | **Goal Seek** (`Data > What-If Analysis`), then `ROUNDUP` |

`FV`, `PV` and `PMT` all return the opposite sign to the input you gave, so
negate them or enter the input negative.
</details>

---

**H2.** Goal Seek returns `#N/A` or simply refuses to move. Give two causes.

<details><summary>Answer H2</summary>

1. **The "Set cell" is a typed constant, not a formula.** Goal Seek can only
   change a cell that another cell depends on **through a chain of formulas**.
   If the target is hard-typed, there is nothing to solve.
2. **The "By changing" cell contains a formula.** It must be a constant — Goal
   Seek overwrites it, and it will not overwrite a formula.

A third, worth knowing: Goal Seek converges **numerically**, so it returns
values like `1,253.4632034632`. It will never hand you a tidy integer, and it
**writes its answer back into the input cell** — which is how the Week 10
tutorial file ended up with the $5,000-profit volume sitting in the
break-even answer cell.
</details>

---

**H3.** A colleague types `0.0037` into a cell as "the monthly rate" for a
4.47% per annum loan. What is wrong, and roughly how much does it matter on a
$500,000 25-year mortgage?

<details><summary>Answer H3</summary>

`0.0447 / 12 = 0.003725`, not `0.0037`. The rounded rate is low by seven parts
in a thousand, and every downstream figure inherits it:

```
                         r = 0.0037      r = 0.003725      error
Monthly payment           2,762.16        2,770.66        −$8.49
Total interest          328,648.53      331,196.56    −$2,548.03
```

**Reference `=annual_rate/12` inside the formula.** Never type a rounded
periodic rate into a cell, and never retype a calculated payment as a whole
number — `2762` instead of `2762.1618` leaves **$88.67 still owing** after
300 payments.
</details>
