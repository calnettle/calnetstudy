# TOPIC 3 — Business Finance and Decision Tools

*Weeks 8–11. Built from the Assignment 2 workbook (Eden Ciders, Collins Foods
Ltd, the Victoria Point apartment), the Week 10 tutorial question, and
Chapter 5 — "Wirecard" — of Chen's "International Cases of Corporate
Governance".*

---

## 3.1 What changes when the money belongs to a business

The second half of the unit runs the same machinery as Topic 1, on a company
instead of a person. Four things change, and every one of them is a place to
lose a mark.

| | Personal (Topic 1) | Business (Topic 3) |
|---|---|---|
| Income statement | Revenue − Expenses = Net Income | Sales − **Cost of Sales** = **Gross Profit**, then − Expenses = Net Profit **before tax**, then − Tax = Net Profit **after tax** |
| Tax | Ignored | **Always** — Assignment 2 uses 25% of profit before tax, accrued as a liability |
| Balance sheet | One list of assets, one of liabilities | **Classified** — current / non-current on both sides |
| Equity | Opening net worth + net income | **Contributed capital + retained earnings** |

The equity line is the big one. In Topic 1, every movement in net worth came
through revenue or an expense, so `closing equity = opening equity + net
income` always held. A business also takes **capital contributions** from
owners and pays **dividends or drawings** out, and neither of those touches
the income statement.

```
Closing equity = Contributed capital
               + Opening retained earnings
               + Net profit after tax
               − Dividends / drawings
```

> **Trap — tax accrues even though nothing is paid.** Eden Ciders' financial
> year ends on 30 June, so no cash goes to the ATO in May. The tax is still a
> **May expense** (it was incurred on May's profit) and a **31 May liability**
> called *Tax payable*. This is the accrual principle from Topic 1, applied to
> the one expense students reliably forget. Miss it and the income statement,
> the balance sheet and the equity figure are all wrong at once.

### The classified balance sheet

**Current** means realised, consumed or settled within twelve months.
Everything else is non-current. It is a *timing* test, not a size test.

```
ASSETS                              LIABILITIES
  Current                             Current
    Cash at bank                        Accounts payable
    Accounts receivable                 Tax payable
    Inventory                           Short-term borrowings
    Prepaid expenses                  Non-current
  Non-current                           Long-term loan
    Equipment                       EQUITY
    Motor vehicles                    Contributed capital
    Office furniture                  Retained earnings
    Intangibles
```

Why bother? Because the split is what makes the **current ratio** and the
**debt-to-equity ratio** in §3.3 mean anything. Classify badly and every
liquidity ratio downstream is wrong.

---

## 3.2 Worked example — Eden Ciders' first month

*Week 8. Adam and Eva open a boutique cider shopfront. Budgeted figures for
May, their first month. Tax at 25% of profit before tax, rounded to the
nearest dollar.*

### The data

| Item | $ | Where it goes |
|---|---|---|
| Sales of cider for May | 18,200 | Revenue |
| Cost of Cider sold during May | 6,825 | Cost of sales |
| Accounting fees | 100 | Expense |
| Advertising | 476 | Expense |
| Insurance, monthly premium | 110 | Expense |
| Phone bill, monthly | 175 | Expense |
| Printing and stationery | 200 | Expense |
| Rent for sales premises | 2,610 | Expense |
| Travel and transport costs | 865 | Expense |
| Utilities | 320 | Expense |
| Wages for part-time assistant | 1,800 | Expense |
| Inventory on hand 31 May | 23,000 | Current asset |
| Accounts receivable | 9,020 | Current asset |
| Bank account, 31 May | 34,549 | Current asset |
| IT equipment | 7,250 | Non-current asset |
| Motor vehicle, 31 May | 26,220 | Non-current asset |
| Office furniture | 6,180 | Non-current asset |
| Accounts payable | 1,500 | Current liability |
| Long-term loan owing 31 May | 40,000 | Non-current liability |
| Capital contributed by Adam | 20,000 | Equity |
| Capital contributed by Eva | 40,000 | Equity |

> **Trap — inventory and cost of sales are two different lines, not one.**
> *Cost of Cider sold during May* ($6,825) is the cider that left the shop; it
> is an **expense**. *Inventory on hand on 31 May* ($23,000) is the cider still
> there; it is an **asset**. Using one figure twice, or netting them, is the
> single most common Week 8 error. Same word, two statements, no overlap.

### Budgeted Income Statement — for the month of May

```
Sales of cider for May                          18,200
Less: Cost of Cider sold                        (6,825)
                                               ────────
Gross profit                                    11,375

Less: Expenses
  Accounting fees                        100
  Advertising                            476
  Insurance                              110
  Phone bill                             175
  Printing and stationery                200
  Rent for sales premises              2,610
  Travel and transport                   865
  Utilities                              320
  Wages for part-time assistant        1,800
                                       ─────
                                                (6,656)
                                               ────────
NET PROFIT BEFORE TAX                            4,719

Taxation (25% × 4,719 = 1,179.75, rounded)      (1,180)
                                               ────────
NET PROFIT AFTER TAX                             3,539
```

### Balance Sheet — as at 31 May

```
ASSETS
  Current assets
    Inventory                           23,000
    Accounts receivable                  9,020
    Cash at bank                        34,549
                                        ──────
                                                66,569
  Non-current assets
    IT equipment                         7,250
    Motor vehicle                       26,220
    Office furniture                     6,180
                                        ──────
                                                39,650
                                               ────────
  TOTAL ASSETS                                 106,219

LIABILITIES
  Current liabilities
    Accounts payable                     1,500
    Tax payable                          1,180
                                        ──────
                                                 2,680
  Non-current liabilities
    Long-term loan                                40,000
                                               ────────
  TOTAL LIABILITIES                              42,680

EQUITY
    Capital contributed by Adam         20,000
    Capital contributed by Eva          40,000
    Retained earnings (= NPAT for May)   3,539
                                        ──────
  TOTAL EQUITY                                   63,539
                                               ────────
  TOTAL LIABILITIES AND EQUITY                  106,219  ✓
```

It balances: `42,680 + 63,539 = 106,219 = total assets`. **Verified.**

### The workbook's answers, and the one that is wrong

| Q | Asked | Answer |
|---|---|---|
| 8.2 | Net income after tax for May | **$3,539** |
| 8.3 | Non-current assets at 31 May | **$39,650** |
| 8.4 | Current assets as a % of total assets | `66,569 / 106,219` = **62.67%** |
| 8.5 | Current liabilities at 31 May | **$2,680** |
| 8.6 | Equity at 31 May | **$63,539** |

> **Trap — an outright error in the submitted workbook, and it is worth
> knowing why it happened.** The Week 8 sheet computes total equity as
> `=SUM(K31:K32)-K28`, i.e. `contributed capital − total liabilities` =
> `60,000 − 42,679.75` = **$17,320.25**, and reports that for question 8.6.
> Two mistakes stacked. First, retained earnings were left out of the equity
> section entirely. Second, liabilities were **subtracted** from a number that
> was never assets in the first place — `A − L = E` was applied with capital
> standing in for assets. The correct figure is **$63,539**. The instant
> giveaway: a balance sheet whose two sides read 106,219 and 17,320 does not
> balance, and a balance sheet that does not balance is never right. Always
> foot both sides before you submit.

> **Trap — the tax rounding instruction is in the question, not the data.**
> The Week 8 case says *"Round your tax calculation to the nearest dollar."*
> 25% of 4,719 is 1,179.75; the workbook carried 1,179.75 all the way through.
> The rounded $1,180 changes NPAT to $3,539, tax payable to $1,180 and total
> liabilities to $42,680. The balance sheet balances either way, so nothing
> will alert you — only reading the instruction will. Confirm with your tutor
> which figure the marker expects, but follow the written instruction.

### Advice to Adam and Eva

Numbers first, then the observation:

- **Profitable, but only just.** $3,539 after tax on $18,200 of sales is a
  **19.4% net margin** — good for a first month, but §3.5 shows they only need
  to lose 45% of their volume to be losing money.
- **Liquidity is fine now and fragile later.** Current assets $66,569 against
  current liabilities $2,680 is a current ratio of **24.8** — but $23,000 of
  that is unsold cider and $9,020 is money other people owe them.
- **Two-thirds of the capital is already spent.** $60,000 contributed,
  $39,650 sunk into vehicles, IT and furniture.

---

## 3.3 Ratio analysis — the five families

*Week 9. Six ratios in the workbook, grouped here the way the exam groups
them.*

A ratio on its own means nothing. It means something **against last year**
(trend) or **against a competitor** (benchmark). Every written answer should
do one of those two things.

| Family | Question | Workbook ratios |
|---|---|---|
| **Profitability** | Is it making money? | Net profit margin, Return on equity |
| **Liquidity** | Can it pay next month's bills? | Current ratio |
| **Efficiency / activity** | How hard are the assets working? | Inventory turnover (in days) |
| **Gearing / solvency** | How much of this is borrowed? | Debt to equity, Times interest earned |
| **Market** | What is the market paying for it? | Earnings per share, Price/earnings |

### The formulas, with the variant named

```
Net profit margin      = Profit after tax / Revenue

Inventory turnover     = Cost of sales / AVERAGE inventory        (times/year)
Days inventory         = 365 / inventory turnover                 (days)
   where AVERAGE inventory = (opening + closing) / 2

Debt to equity         = Total liabilities / Total equity   [CLOSING balances]

Current ratio          = Total current assets / Total current liabilities

Return on equity       = Profit after tax / Total equity    [CLOSING balance]

Times interest earned  = EBIT / Finance costs
   where EBIT = profit before interest and tax

Earnings per share     = Profit after tax / Weighted average ordinary shares

Price / earnings       = Market price per share / Earnings per share
```

> **Trap — average or closing? The workbook uses both, in the same table.**
> Inventory turnover uses `(opening + closing)/2`; return on equity and debt to
> equity use the **closing** balance. That inconsistency is invisible until
> someone asks you to defend it. Collins Foods' 2024 ROE is **16.06%** on
> closing equity and **16.89%** on average equity — 0.83 percentage points
> apart, on the same company, in the same year. Neither is wrong; a stated
> answer with no named basis is. **Always write "on closing equity" or "on
> average equity" next to the number.** The same choice applies to return on
> assets, receivables days and asset turnover.

> **Trap — a "turnover ratio" and a "turnover period" are not the same
> number.** Turnover is `cost of sales / average inventory` and is measured in
> **times per year** (Collins Foods: 66.8 times in 2020, 84.8 in 2024). The
> turnover *period*
> is `365 / turnover` and is measured in **days** (5.46 days in 2020, 4.30 in
> 2024). The Week 9 workbook asks *"how many days does it take for inventory
> to be sold?"*, computes days correctly, and then labels the row **"Inventory
> Turnover Ratio"**. Answer the question that was asked and label it with the
> units you actually produced.

---

## 3.4 Worked example — Collins Foods Ltd

*Week 9. Collins Foods operates KFC in Australia. Statements are in `$'000`.
2019 appears in the balance sheet only, because the averages need an opening
figure; the ratios therefore run 2020–2024.*

### The inputs used (all `$'000` except shares and share price)

| | 2020 | 2021 | 2022 | 2023 | 2024 |
|---|---|---|---|---|---|
| Revenue | 939,748 | 1,065,835 | 1,192,318 | 1,354,318 | 1,500,977 |
| Cost of sales | 447,896 | 505,996 | 562,358 | 672,345 | 737,936 |
| Profit before interest and tax | 78,505 | 90,225 | 120,429 | 52,779 | 131,864 |
| Finance costs | 32,209 | 29,391 | 30,207 | 33,429 | 40,918 |
| Profit after tax | 23,851 | 37,201 | 64,696 | 16,982 | 67,730 |
| Total current assets | 129,436 | 110,863 | 113,533 | 130,224 | 109,294 |
| Total current liabilities | 132,674 | 140,727 | 168,641 | 183,068 | 204,204 |
| Inventories (2019: 6,322) | 7,082 | 6,943 | 7,609 | 8,239 | 9,162 |
| Total liabilities | 824,525 | 788,193 | 891,596 | 989,784 | 996,262 |
| Total equity | 358,439 | 368,682 | 391,054 | 380,507 | 421,662 |
| Weighted avg shares | 116,569,052 | 116,581,244 | 116,696,110 | 117,177,086 | 117,490,108 |
| Market price at 30/6 ($) | 6.94 | 11.37 | 10.15 | 8.69 | 9.85 |

### The ratios, recomputed

| Ratio | 2020 | 2021 | 2022 | 2023 | 2024 |
|---|---|---|---|---|---|
| Net profit margin | 2.54% | 3.49% | 5.43% | 1.25% | 4.51% |
| Days inventory (avg) | 5.46 | 5.06 | 4.72 | 4.30 | 4.30 |
| Debt to equity | 2.30 | 2.14 | 2.28 | 2.60 | 2.36 |
| Current ratio | 0.98 | 0.79 | 0.67 | 0.71 | 0.54 |
| Return on equity (closing) | 6.65% | 10.09% | 16.54% | 4.46% | 16.06% |
| Times interest earned | 2.44 | 3.07 | 3.99 | 1.58 | 3.22 |
| **Earnings per share** | **20.46c** | **31.91c** | **55.44c** | **14.49c** | **57.65c** |
| **Price / earnings** | **33.92** | **35.63** | **18.31** | **59.96** | **17.09** |

One worked line, fully stepped out — days inventory, 2020:

```
Average inventory = (6,322 + 7,082) / 2       = 6,702      ($'000)
Inventory turnover = 447,896 / 6,702          = 66.83      times per year
Days inventory     = 365 / 66.83              = 5.46       days
```

Sanity check: this is a fast-food operator. Five days of stock is exactly what
you would expect, and it is the check that tells you the formula is the right
way up. A "5.46" that came out as "0.18" would mean you inverted it.

> **Trap — the `$'000` units, and a factor-of-1,000 error sitting in the
> workbook.** The Week 9 sheet computes earnings per share as
> `=(D40*100)/D46` — profit after tax **in thousands**, times 100 to make
> cents, divided by the **actual** share count. Profit after tax is
> $23,851 **thousand**, not $23,851. The formula returns **0.0205 cents per
> share**; the true 2020 figure is **20.46 cents**, exactly 1,000× larger.
>
> ```
> Wrong:   23,851 × 100 / 116,569,052                = 0.0205 c
> Right:   23,851 × 1,000 × 100 / 116,569,052        = 20.46 c
> ```
>
> The price/earnings row then divides the share price by the broken EPS and
> reports **33,918** where the answer is **33.92** — same factor, inherited. A
> P/E of thirty-four thousand should stop you dead: real P/E ratios live
> between about 5 and 50. **Whenever a statement is headed `$'000`, write the
> conversion into the formula, and sense-check the answer against the range
> the ratio normally occupies.** Confirm the correct treatment with your tutor
> before relying on the workbook's figures.

### Reading the trend — what a written answer should say

- **2023 is the outlier and everything hinges on it.** EBIT collapsed from
  $120.4m to $52.8m while revenue *rose* 13.6%. Net margin fell to 1.25%, ROE
  to 4.46%, and times interest earned to **1.58** — the year's operating
  profit barely covered its interest bill 1.6 times over. Cost inflation, not
  a sales problem.
- **Liquidity deteriorates every single year.** The current ratio runs 0.98 →
  0.79 → 0.67 → 0.71 → **0.54**. By 2024, current liabilities are nearly
  double current assets. For a restaurant group with 4.3 days of stock and
  cash sales that is survivable — the working capital cycle is naturally
  negative — but it is the clearest trend in the table and the one to point at.
- **Gearing is high and stable.** Debt to equity above 2.1 in every year:
  more than $2 of liabilities for each $1 of equity. Much of the 2020 jump
  ($401.8m → $824.5m) is the **right-of-use asset and lease liability**
  appearing on the balance sheet for the first time — $369.4m of right-of-use
  assets in 2020 against nil in 2019. That is an **accounting standard change,
  not new borrowing**, and saying so is what separates an analysis from a
  description.
- **2024 recovers** — margin back to 4.51%, ROE 16.06%, P/E down to 17.1 as
  earnings caught up with a share price that had already fallen.

> **Trap — a ratio that moves because the accounting changed is not a business
> event.** Collins Foods' debt to equity doubles between 2019 and 2020 with no
> new loan. If a ratio jumps and the underlying operations did not, look for a
> reclassification before you write "the company took on significant debt".

> **Trap — question 9.5 asks for *liquidity ratios*, plural, and the workbook
> calculates one.** The only liquidity ratio in the set is the current ratio.
> If a question asks you to chart liquidity over time, add at least the
> **quick (acid-test) ratio**, which strips out inventory because inventory
> must be sold before it becomes cash:
>
> ```
> Quick ratio = (Current assets − Inventory) / Current liabilities
>
>            2020    2021    2022    2023    2024
> Current    0.98    0.79    0.67    0.71    0.54
> Quick      0.92    0.74    0.63    0.67    0.49
> ```
>
> The two lines barely diverge — proof that inventory is a trivial part of
> this company's current assets, which is itself the finding.

---

## 3.5 Cost-volume-profit and break-even

*Week 10. The tutorial (Mo's mugs) and the portfolio (Eden Ciders) are the
same question with different numbers.*

### The idea

Split every cost by **behaviour**, not by name:

- **Variable costs** change with each unit sold — the cost of the product
  itself, per-unit delivery, sales commission.
- **Fixed costs** do not change within the relevant range — rent, salaries,
  insurance, accounting fees, depreciation.

```
Contribution margin per unit  = Selling price − Variable cost per unit
Contribution margin ratio     = Contribution margin / Selling price

Break-even units   = Fixed costs / Contribution margin per unit
Break-even dollars = Fixed costs / Contribution margin ratio

Units for a target PROFIT BEFORE TAX
                   = (Fixed costs + Target profit before tax) / CM per unit

Units for a target PROFIT AFTER TAX
                   = (Fixed costs + Target PAT / (1 − tax rate)) / CM per unit
```

The unit teaches it as the **income statement equation** rearranged, which is
worth writing out because it is the form marks are awarded for:

```
(BEP × Selling price) − (BEP × Variable cost) − Fixed costs = 0
```

> **Trap — the workbook writes that identity with the wrong right-hand
> side.** The Week 10 workings read
> `(BEP x Selling Price) – (BEP x Variable Price) – Fixed Costs = BEP`
> on one line and `= 0` on the next. It equals **zero** — break-even means
> *zero profit*, not "profit equals the number of units". The subsequent
> algebra in the sheet is right; only that line is mistyped. Don't copy it.

### Worked example A — Mo's mugs (Week 10 tutorial)

*Blank mugs cost $1, sell for $6 with a design, average delivery $0.16 per
mug. No other cost varies with volume.*

```
Contribution margin = 6.00 − (1.00 + 0.16) = $4.84 per mug
CM ratio            = 4.84 / 6.00          = 80.67%

Fixed costs
  Administration              175
  Bookkeeper's salary       1,200
  Rent for storage unit     1,250
  Depreciation                600
  Electricity                 210
  Entertainment               350
  Printing and communication  440
  Promotional               1,080
                            ─────
                            5,305

Break-even units   = 5,305 / 4.84 = 1,096.07  →  1,097 mugs
Break-even dollars = 1,097 × 6              =  $6,582
   (exact: 5,305 / 0.80667 = $6,576.45)

Mugs for a $5,000 profit before tax
                   = (5,305 + 5,000) / 4.84 = 2,129.13  →  2,130 mugs
```

**Cross-check against April's actual trading.** April sold $10,800 of mugs at
$6 = 1,800 mugs, and cost of mugs sold was $1,800 at $1 each = 1,800 mugs ✓,
and delivery was $288 = 1,800 × $0.16 ✓. Profit before tax:
`1,800 × 4.84 − 5,305 = $3,407`. Mo was comfortably above break-even.

> **Trap — a "Goal Seek" answer left over from the previous question, sitting
> in the tutorial file.** Goal Seek writes its result back into the input
> cell, so running it twice on the same sheet overwrites the first answer. In
> the supplied Week 10 tutorial file, the *"Using Goal Seek, Break Even Point
> (BEP) in units"* cell reads **2,130** — which is the **$5,000-profit**
> volume, not break-even. The break-even answer is **1,097**. The check that
> catches it in one second: at 2,130 mugs, `2,130 × 4.84 − 5,305 = $5,004`,
> and break-even means **zero**. Always substitute your answer back into the
> profit equation. Flag this with your tutor if the file you were given still
> has it.

> **Trap — break-even units always round UP.** 1,096.07 mugs rounds to
> **1,097**, never 1,096. At 1,096 mugs the profit is `1,096 × 4.84 − 5,305 =
> −$0.36` — still a loss. The workbook uses `=ROUNDUP(cell, 0)` and it must:
> `ROUND()` would give 1,096 and `INT()` would too. This is the single most
> reliably examined detail in Week 10, and it has its own written question in
> the tutorial: *"Do we round the break-even sales in units up or down? Why?"*

> **Trap — depreciation is a fixed cost for accounting break-even and a
> non-cost for cash break-even.** Mo's $600 of depreciation sits in fixed
> costs, which is correct for a *profit* break-even. If the question asks how
> many units cover the **cash** outflows, strip it: `(5,305 − 600) / 4.84 =
> 972.1 → 973 mugs`. Two legitimate answers, two different questions. Read
> which one was asked.

### Worked example B — Eden Ciders (Week 10 portfolio)

*Selling price $8 per bottle, cost price $3, travel and transport $0.38 per
bottle. Everything else is fixed.*

```
Contribution margin = 8.00 − (3.00 + 0.38) = $4.62 per bottle
CM ratio            = 4.62 / 8.00          = 57.75%

Fixed costs = 100 + 476 + 110 + 175 + 200 + 2,610 + 320 + 1,800 = $5,791
   (everything from the May budget EXCEPT cost of cider 6,825
    and travel and transport 865 — those two are the variable ones)

Break-even units   = 5,791 / 4.62 = 1,253.46  →  1,254 bottles
Break-even dollars = 1,254 × 8              = $10,032
   (exact: 5,791 / 0.5775 = $10,027.71)

Bottles for $10,000 profit before tax
                   = (5,791 + 10,000) / 4.62 = 3,417.97  →  3,418 bottles

Bottles for $9,000 profit AFTER tax, at 25%
   Required PBT    = 9,000 / (1 − 0.25) = $12,000
                   = (5,791 + 12,000) / 4.62 = 3,850.87  →  3,851 bottles
```

**This ties back to Week 8, which is the check worth doing.** May's budget had
$18,200 of sales at $8 = **2,275 bottles**, and cost of cider $6,825 at $3 =
**2,275 bottles** ✓. Contribution at that volume is `2,275 × 4.62 = $10,510.50`
less fixed costs $5,791 = **$4,719.50**, against the income statement's
**$4,719**. The 50-cent gap is the travel figure: $865 for 2,275 bottles is
$0.380220 each, and the case rounds it to $0.38. Two independent routes to the
same profit — that is what a cross-check looks like.

**Margin of safety.** Budgeted 2,275 bottles against break-even 1,254:

```
Margin of safety = 2,275 − 1,254 = 1,021 bottles
                 = 1,021 / 2,275 = 44.9% of budgeted volume
```

Sales can fall by 45% before Eden Ciders makes a loss. That is the sentence
the advice question wants.

> **Trap — break-even in dollars has two defensible answers, and they differ.**
> `Rounded units × price` = `1,254 × 8` = **$10,032**, which is what the
> workbook reports and is the revenue you would actually take at 1,254 bottles.
> `Fixed costs ÷ CM ratio` = `5,791 ÷ 0.5775` = **$10,027.71**, the exact
> zero-profit revenue. Both are right; they answer slightly different
> questions. State which you used. If the sheet has already rounded the units
> up, be consistent and use the rounded figure.

> **Trap — "what proportion of expenses are variable" depends on the volume
> you evaluate it at, and the workbook answers it at two different volumes.**
> Question 10.1 asks for the proportion of **May's** total expenses that are
> variable:
>
> ```
> Variable = 6,825 + 865      =  7,690
> Fixed                       =  5,791
> Total                       = 13,481
> Variable share = 7,690 / 13,481 = 57.04%   ← the answer given, and correct
> ```
>
> But the workings cell alongside computes `variable ÷ total` at the
> **3,418-bottle Goal Seek volume**, giving **66.61%**. Higher volume, more
> variable cost, same fixed cost — of course the proportion moves. The
> submitted answer (57.04%) is right and the visible workings support a
> different number, which is exactly the situation the workbook's
> "markers must see your workings" rule punishes. Name the volume whenever you
> quote a cost-structure percentage.

---

## 3.6 Valuing an investment — discounted cash flow

*Week 11. Two opportunities: shares in Collins Foods, and an apartment at
Victoria Point.*

### The method

An asset is worth the **present value of the cash it will produce**, and
nothing else. Past financial statements tell you about the past; a valuation
is entirely about the future.

```
        CF₁         CF₂              CFₙ
PV = ────────  +  ────────  + … + ────────
     (1 + d)¹     (1 + d)²        (1 + d)ⁿ
```

Three inputs, and each is a place where an assumption hides:

1. **The cash flows.** Grow the current cash flow at the estimated rate. The
   **final** year's cash flow also carries the **terminal value** — the price
   you expect to sell at.
2. **The discount rate**, built up as `risk-free rate + risk premium`. Riskier
   asset, bigger premium, harder discount, lower value.
3. **The horizon**, set by when you plan to sell.

```
Verdict:  PV > price  →  UNDERVALUED  →  buy
          PV < price  →  OVERVALUED   →  don't
```

### Investment 1 — one Collins Foods share

*Current dividend $0.27, growing 4.8% a year. Risk-free 4.0%, risk premium
6.2%. Expected to sell for $12.00 at the end of year 3. Current price $9.85.*

```
Discount rate d = 4.0% + 6.2% = 10.2%

Year   Cash flow                                    Present value
  1    0.27 × 1.048              = 0.28296          0.28296 / 1.102¹ = 0.256770
  2    0.28296 × 1.048           = 0.29654          0.29654 / 1.102² = 0.244187
  3    0.29654 × 1.048 + 12.00   = 12.31078        12.31078 / 1.102³ = 9.199001
                                                                      ─────────
                                     Present value of one share       $9.699957
                                                                      = $9.70

Current share price                                                   $9.85
Overvalued by                                       9.85 − 9.70    =  $0.15
As a % of the present value                    (9.85 / 9.70) − 1   =   1.55%
```

**Answers:** 11.1 next year's dividend **$0.28**; 11.2 discount rate
**10.20%**; 11.3 present value **$9.70**; 11.4 **overvalued by $0.15**.

Note how nearly all the value — $9.199 of $9.700, **94.8%** — comes from the
year-3 selling price, not the dividends. The valuation is almost entirely a
bet on the terminal price.

> **Trap — "over/(under)valued" and "NPV" are the same calculation with
> opposite signs.** The workbook defines it as `cost − present value`, so a
> **positive** answer means **overvalued**. Conventional net present value is
> `present value − cost`, so a **positive** NPV means a **good** investment.
> For the share: workbook `+$0.15` (overvalued, avoid) = NPV `−$0.15`. For the
> apartment: workbook `−$50,778` (undervalued, buy) = NPV `+$50,778`. Same
> arithmetic, opposite conclusion if you read the sign the wrong way round.
> Write the word — "overvalued" or "undervalued" — next to every one of these
> numbers.

> **Trap — Excel's `NPV()` is not net present value.** `NPV(rate, values…)`
> discounts the **first** value by one full period and returns only the present
> value of that stream. The initial outlay is not netted off — you subtract it
> yourself. That is why the workbook writes `=H16-NPV(G6,G9,G10,G11)`. If your
> year-0 outlay is *inside* the `values` list, it has been discounted a year
> too far and your answer is wrong by a factor of `(1 + rate)`.

> **Trap — a terminal price supplied in the question replaces the growth
> model; it does not add to it.** Do not apply the perpetual growth formula
> `D₁ / (d − g)` here. It gives `0.28296 / (0.102 − 0.048)` = **$5.24**, a
> different answer to a different question — the value of the dividends
> forever, with no sale. The case says Eva sells at the end of year 3 for
> $12.00, so the horizon is three years and the $12.00 is the year-3 cash flow.

### Investment 2 — the Victoria Point apartment

*Current annual net rent $41,600, growing 4.8%. Risk-free 4.0%, risk premium
10.8%. Expected sale price $800,000 after 5 years. Asking price $510,000.*

```
Discount rate d = 4.0% + 10.8% = 14.8%

Year   Cash flow                          Present value
  1     43,596.80                          37,976.31
  2     45,689.45                          34,668.27
  3     47,882.54                          31,648.38
  4     50,180.90                          28,891.55
  5     52,589.59 + 800,000 = 852,589.59  427,592.99
                                          ──────────
                    Present value           560,777.51  →  $560,778

Asking price                                 510,000
Undervalued by            510,000 − 560,778   = ($50,778)
As a % of the present value  (510,000 / 560,778) − 1 = −9.05%
```

**Answers:** 11.5 next year's net rent **$43,597**; 11.6 present value
**$560,778**; 11.7 **undervalued by $50,778**.

### Why the two verdicts differ, and what that tells you

The apartment's risk premium is **10.8%** against the share's **6.2%** — the
case treats a single residential property as substantially riskier than a
listed company, which is a defensible view (no diversification, illiquid,
tenant-dependent) and one an exam answer should be able to argue.

> **Trap — the verdict is a knife-edge, and the sensitivity is the real
> answer.** The share's break-even discount rate — the rate at which present
> value equals the $9.85 price — is **9.62%**. The case chose 10.2%. Move the
> premium 60 basis points and "overvalued by 15 cents" becomes "fairly
> valued".
>
> ```
> Discount rate   9.62%    10.0%    10.2%    10.5%    11.0%
> PV per share    $9.85    $9.75    $9.70    $9.62    $9.50
> ```
>
> The apartment is far more robust: its break-even discount rate is **17.33%**,
> 2.5 percentage points of cushion above the 14.8% used. **Never report a DCF
> as a single number.** Report the number, then the rate or growth assumption
> that would flip it. That is what the marks in a written answer are for.

> **Trap — the growth rate and the discount rate must be consistent, and both
> must match the cash-flow period.** Both cases use **annual** cash flows,
> an **annual** growth rate and an **annual** discount rate. Mix a monthly
> discount rate with annual rents, or apply `(1 + g)` a year too many times to
> the terminal cash flow, and the error compounds down the whole column. Check
> the first row by hand: `41,600 × 1.048 = 43,596.80`, discounted once,
> `43,596.80 / 1.148 = 37,976.31` ✓.

---

## 3.7 Can the numbers be trusted?

*Week 8 reading — Chen, chapter 5, "Wirecard". Assignment 2 questions 12 and
13 are worth 10 of the 45 marks between them, and neither has a spreadsheet.*

### Wirecard, in one paragraph

Wirecard AG was a German payments company, once Europe's largest FinTech and
a member of the DAX. On 25 June 2020 it filed for insolvency after admitting
that **€1.9 billion of cash on its balance sheet did not exist**. CEO Markus
Braun resigned on 19 June and was arrested on 23 June; COO Jan Marsalek was
sacked on 22 June and disappeared. Chen's chapter calls it the "German Enron"
because the failure was not one bad actor but **four lines of defence failing
at once**: the board of directors, the supervisory board, the external auditor
**Ernst & Young**, and the regulator **BaFin**.

### The auditor's role — the three failures Chen names

| Failure | What it looked like |
|---|---|
| **Lack of professional scepticism** | Ten consecutive years of unqualified audit opinions, no anti-fraud team assigned to suspicious transactions, despite whistleblower reports and Financial Times investigations. In early 2018, with the allegations already public, EY signed off the 2017 accounts and thereby *restored* investor confidence. |
| **Failure to perform standard procedures** | Between 2016 and 2018 EY **did not confirm the bank balances directly with OCBC Bank in Singapore**, where Wirecard claimed up to €1 billion. It relied instead on documents from third-party trustees and **screenshots supplied by Wirecard**. Direct bank confirmation is basic audit procedure. |
| **Compromised independence** | A 2016 internal EY whistleblower alleged that a senior Wirecard manager in India had offered personal compensation to a local EY employee to sign off manipulated sales figures. EY replaced the India team but, per KPMG's later investigation, **did not investigate the alleged bribery**. |

**The two actions the auditor should have taken** — the exact phrasing
question 12 asks for:

1. **Obtain bank confirmations directly from the banks** holding the cash, in
   every operating country, rather than accepting client-supplied screenshots
   and trustee letters.
2. **Escalate to a forensic / anti-fraud investigation** once credible
   external allegations existed (the Zatarra Report 2016, J Capital 2015, the
   Financial Times series from 2019) instead of relying on verbal assurances
   from the executives under suspicion.

The regulator failed too, and it is worth a sentence: BaFin investigated the
**short sellers** rather than the company, **sued the Financial Times and its
journalists**, and in February 2019 banned short selling of Wirecard shares
outright — the first single-stock short-selling ban in Germany.

> **Trap — question 12 has three parts and a 200-word limit, and the workbook
> counts the words.** (1) the auditor's role, (2) **two** specific actions the
> auditor should have taken, (3) whether Eva should worry about **Collins
> Foods**. Part 3 is the one people drop, and it is the only part that ties
> the reading back to the analysis: Collins Foods is ASX-listed, audited, and
> subject to Australian regulatory oversight — but so was Wirecard in
> Germany, and every ratio in §3.4 is only as good as the statements it came
> from. The defensible answer is *reasonable but not unconditional* confidence,
> with a reason. Answers are only marked **up to** the word limit.

### The limits of the numbers

Question 13 asks for **non-financial** considerations, one for each Week 11
investment. The argument the unit wants is that a purely quantitative,
utilitarian calculation — maximising total dollars — can produce decisions
that are indefensible on other grounds. Two that fit the Week 11 cases:

- **Collins Foods (the share).** A discounted cash flow is silent on how the
  earnings are produced — franchise labour practices, supply-chain welfare,
  the nutritional and public-health profile of the product, or the
  reputational risk those carry. Nothing about a 10.2% discount rate encodes
  any of it.
- **The Victoria Point apartment (the property).** Modelling 4.8% annual rent
  growth for five years assumes rents can be raised on a real tenant every
  year. The valuation treats tenant affordability, housing security and local
  supply purely as inputs to a return, and there is no line in the
  spreadsheet where a displaced tenant appears.

A stronger version of the same point: a valuation is a **statement about
assumptions**, not a fact. §3.6 showed the share verdict flipping on 60 basis
points of discount rate. Precision to the cent conceals uncertainty of tens of
percent.

> **Note on the source, not a trap.** The Week 11 reading itself is **not in
> the unit folder**. The framing above is reconstructed from the question
> wording and the submitted answer, which discusses utilitarianism and a
> cost-benefit analysis that placed a dollar value on human life. Get the
> actual Week 11 reading off Canvas before you write anything relying on a
> specific source — question 13 requires page references for direct quotes.

---

## 3.8 Checkpoint

<details><summary>Questions</summary>

1. A business's balance sheet shows contributed capital $80,000, total assets
   $150,000 and total liabilities $55,000. What are retained earnings?
2. Profit before tax is $60,000 and the tax rate is 25%. The business pays no
   tax until after year end. What appears on the income statement, and what
   appears on the balance sheet?
3. Cost of sales $600,000. Opening inventory $40,000, closing inventory
   $60,000. Give days inventory on both the average and the closing basis, and
   say which is larger and why.
4. A company reports profit after tax of $48,000 in a statement headed
   `$'000`, with 240 million shares on issue. What is earnings per share in
   cents?
5. Selling price $40, variable cost $22, fixed costs $99,000. Break-even in
   units and dollars?
6. Same business. How many units for a profit **after** tax of $28,000 at a
   30% tax rate?
7. A DCF gives a present value of $84,000 for an asset priced at $90,000. Is
   it over- or undervalued, what is the conventional NPV, and what is the
   workbook's "over/(under)valued" figure?
8. A company's debt-to-equity ratio doubles in one year with no new borrowing
   and no change in operations. Give one explanation.
</details>

<details><summary>Answers</summary>

1. **$15,000.** Equity = 150,000 − 55,000 = 95,000. Retained earnings =
   95,000 − 80,000 = 15,000.
2. **Tax expense $15,000** on the income statement (it was incurred), giving
   profit after tax $45,000; **tax payable $15,000** as a **current
   liability**. No cash has moved.
3. Average basis: avg inventory = (40,000 + 60,000)/2 = 50,000; turnover =
   600,000/50,000 = 12.0; days = 365/12 = **30.4 days**. Closing basis:
   600,000/60,000 = 10.0; days = **36.5 days**. The **closing** basis is
   larger because inventory grew during the year, so the closing figure is
   higher than the average. Name the basis every time.
4. **20.00 cents.** $48,000 thousand = $48,000,000. `48,000,000 / 240,000,000
   = $0.20 = 20.00c`. The trap is forgetting the thousands and reporting
   0.02 cents.
5. CM = 40 − 22 = $18. Units = 99,000/18 = **5,500**. Dollars = 5,500 × 40 =
   **$220,000** (equivalently 99,000 / 0.45 = $220,000 — here they agree
   because the units came out whole).
6. Required profit before tax = 28,000 / 0.70 = $40,000. Units =
   (99,000 + 40,000)/18 = 7,722.2 → **7,723 units**. Round **up**.
7. **Overvalued** — you would pay $90,000 for $84,000 of value. Conventional
   NPV = 84,000 − 90,000 = **−$6,000**. The workbook's convention (cost − PV)
   gives **+$6,000**. Same fact, opposite sign; always write the word.
8. A large operating-lease liability being brought onto the balance sheet
   under a new accounting standard — exactly what happened to Collins Foods
   in 2020, when right-of-use assets went from nil to $369.4m. Other valid
   answers: a share buy-back or a large dividend shrinking equity, or an asset
   impairment writing equity down.
</details>

---

## Topic 3 summary

- Business statements add **gross profit**, **tax** and a **classified**
  balance sheet. Equity becomes **contributed capital + retained earnings**,
  and capital contributions and dividends move equity **without touching the
  income statement**.
- **Tax accrues** in the month the profit is earned, even when no cash goes to
  the ATO. Expense on the income statement, *tax payable* on the balance sheet.
- **Foot both sides of a balance sheet before you submit.** The Assignment 2
  workbook reports equity of $17,320 against total assets of $106,219; the
  right figure is **$63,539**, and the imbalance was the visible symptom.
- A ratio means nothing alone. Compare it **over time** or **against a
  benchmark**, and always **name the variant** — average or closing balance,
  before or after tax, turnover or days.
- Watch the **units**. A statement headed `$'000` broke the workbook's EPS by
  a factor of 1,000 and dragged the P/E ratio to 33,918 where the answer is
  33.92. Sense-check every ratio against the range it normally occupies.
- `Break-even units = Fixed costs / Contribution margin`, and they always
  round **UP** — `ROUNDUP`, never `ROUND`.
- For a target **after-tax** profit, gross it up first: `Target PAT / (1 − tax
  rate)`, then add fixed costs, then divide by contribution margin.
- **Margin of safety** = budgeted volume − break-even volume, as a percentage
  of budget. Eden Ciders' is 44.9%.
- Value = **present value of future cash flows**. Discount rate = risk-free +
  risk premium. The final year's cash flow carries the **terminal value**.
- `Over/(under)valued` in this unit is `cost − PV`, the **negative** of
  conventional NPV. Excel's `NPV()` discounts the first value by one period
  and does **not** net off the outlay.
- Report a valuation **with its sensitivity**. The Collins Foods verdict flips
  at a 9.62% discount rate against the 10.2% used.
- **Wirecard**: no professional scepticism, no direct bank confirmations
  (screenshots instead), no investigation of a bribery allegation — and a
  regulator that sued the journalists. Ratios are only as good as the
  statements underneath them.
