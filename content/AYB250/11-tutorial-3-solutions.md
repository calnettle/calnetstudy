# Tutorial 3 Solutions — Taxation Planning

Worked solutions for `AYB250 Tutorial Questions Topic 3.docx`. **No answer
sheet was supplied for this tutorial** — every solution below is worked
from scratch on the 2026-27 rates and verified in Python. Topic notes: 04
(income tax and deductions) and 05 (investment tax and planning).

The 2026-27 machinery used throughout:

```
Resident scale:  0 to 18 200: nil · 15% to 45 000 · 30% to 135 000
                 · 37% to 190 000 · 45% above
                 tax = base + (income − lower bound) × rate
                 (bases: 4 020 / 31 020 / 51 370)
Medicare levy:   2% of taxable income
HECS-HELP:       15% of repayment income above 69 528
                 (17% band from 129 717; 10%-of-total cap from 186 050)
Standard deduction: up to $1 000, automatic, for anyone earning labour
                 income; union fees always additional (note 04)
```

## Question 1 — Alex: standard deduction vs actual expenses

Alex teaches ($72,000 wages) and spent: union fees $450, conference $600,
classroom supplies $350.

**(a) Which deduction route?** Union fees are carved out of the
standard-deduction comparison, so compare only the *other* work expenses
against $1,000:

```
Work expenses excluding union fees = 600 + 350 =   $950
Standard deduction                 =             $1 000
        950 < 1 000  →  take the standard deduction

Route A (standard): 1 000 + 450 union = $1 450   ← better
Route B (actual):   450 + 600 + 350   = $1 400
```

**Claim the standard deduction plus union fees — $1,450**, which beats
itemising by $50 (and needs no receipts for the $1,000).

**(b) Taxable income and net tax payable:**

```
Taxable income = 72 000 − 1 450 = $70 550

Income tax    = 4 020 + 0.30 × (70 550 − 45 000) = $11 685.00
Medicare levy = 70 550 × 0.02                     = $ 1 411.00
LITO          = 0   (income above 66 667)
                                                    ----------
NET TAX PAYABLE                                     $13 096.00
```

Verified in Python.

> **The $50 win exists only because union fees sit outside the $1,000
> cap.** Pooling all three expenses ($1,400) against the standard
> deduction ($1,000) — and concluding "actual is better" — is exactly the
> backwards comparison note 04 warns about. Compare non-union expenses
> only; union fees ride on top of whichever route wins.

## Question 2 — Morgan and Riley: joint interest and HECS

Morgan earns $90,000, Riley $65,000; their **joint** account earned
$12,000 interest; both have HECS-HELP debts.

Joint account income splits **equally** — $6,000 each (note 05). Both earn
wages, so the automatic $1,000 standard deduction applies to each:

```
MORGAN                                RILEY
Wages              90 000             Wages              65 000
Interest (half)     6 000             Interest (half)     6 000
Standard deduction (1 000)            Standard deduction (1 000)
                  -------                                -------
Taxable income     95 000             Taxable income     70 000

Income tax  = 4 020 + 0.30 ×          Income tax  = 4 020 + 0.30 ×
              (95 000 − 45 000)                     (70 000 − 45 000)
            = $19 020.00                          = $11 520.00
Medicare    = $ 1 900.00              Medicare    = $ 1 400.00
HECS: 0.15 × (95 000 − 69 528)        HECS: 0.15 × (70 000 − 69 528)
            = $ 3 820.80                          = $    70.80
                                      (LITO: $0 — above 66 667)
TOTAL       = $24 740.80              TOTAL       = $12 990.80
```

Both must make HECS repayments — Morgan a substantial $3,820.80, Riley a
token $70.80, because Riley's income only just clears the $69,528
threshold.

Verified in Python.

> **If your tutor's answer ignores the standard deduction** (the question
> lists no expenses, so some solutions will), the figures become: Morgan —
> taxable $96,000, tax $19,320, Medicare $1,920, HECS $3,970.80; Riley —
> taxable $71,000, tax $11,820, Medicare $1,420, HECS $220.80. The
> lecture's own Sophie example (note 04) applies the deduction
> automatically to anyone with labour income, which is why it's applied
> here. Confirm the intended treatment with your tutor — and note either
> way that HECS is 15% of the excess over $69,528, **not** 15% of the
> whole income.

## Question 3 — why does the imputation system exist?

Discussion question. The core: **preventing double taxation**. Company
profits are taxed at the company rate (30% / 25%); without imputation, the
after-tax profit distributed as a dividend would be taxed *again* at the
shareholder's marginal rate — the same dollar taxed twice.

Policy arguments for the gross-up-and-offset design (note 05 has the
mechanics):

- **Integration** — the end result is that distributed profits are taxed
  once, at each shareholder's own marginal rate: high-rate shareholders
  top up the difference, low-rate shareholders get the excess **refunded**.
- **Equity between structures** — investment income ends up taxed like
  other personal income, reducing the distortion between holding assets
  personally versus through a company.
- **Encourages dividend payment and domestic equity investment** —
  franked yields are worth more to Australian residents, supporting local
  share ownership (and, arguably, disciplined profit distribution rather
  than retention).
- **Integrity** — the credit only exists where company tax was actually
  paid, so the offset is self-verifying.

## Question 4 — Terry's dividend portfolio

Terry is a retired resident with no other income. 2026-27 dividends:

```
BHP        10 000 × $1.24 = $12 400   fully franked
CBA         7 000 × $4.75 = $33 250   fully franked
Transurban  8 000 × $0.65 = $ 5 200   unfranked

Cash dividends                       = $50 850.00
Franking credits (large-company 30/70 on the franked ones):
  (12 400 + 33 250) × 30/70          = $19 564.29
  Transurban: unfranked              →  nil

TAXABLE INCOME = 50 850 + 19 564.29  = $70 414.29

Income tax    = 4 020 + 0.30 × (70 414.29 − 45 000) = $11 644.29
Medicare levy = 70 414.29 × 0.02                     = $ 1 408.29
LITO          = 0  (above 66 667)
Franking tax offset                                  = ($19 564.29)
                                                       -----------
NET POSITION                                          −$ 6 511.71
```

**Terry receives a refund of $6,511.71.** The franking offset is
refundable (note 05), and it exceeds his entire tax-plus-Medicare bill —
the classic retiree outcome the imputation question above is really about.

Verified in Python.

> **Only the franked dividends get grossed up.** Adding 30/70 on all
> $50,850 (including Transurban's unfranked $5,200) overstates the credit
> by $2,228.57 and wrecks both taxable income and the refund. And remember
> the credit passes through taxable income first — Medicare is levied on
> the grossed-up $70,414, not the $50,850 of cash received. (No labour
> income → no standard deduction here; if Terry were SAPTO-eligible the
> answer could shift, but the question gives no age details, so none is
> applied.)

## Question 5 — Min's capital gains netting

Min's sale results: $35,000 short-term gains (held <12 months), $103,000
long-term gains, $43,000 capital losses.

The netting order (note 05): losses against **non-discountable** gains
first, then the remainder against the discountable pool **before**
halving:

```
Step 1:  losses v short-term gains   35 000 − 43 000 = −8 000 loss left
Step 2:  remaining loss v long-term  103 000 − 8 000  = 95 000
Step 3:  50% discount                95 000 × 0.50    = $47 500
```

**$47,500 counts toward Min's assessable income.** Verified.

> **Any other order gives a wrong (and usually higher) answer.** Losses
> against the long-term pool first: (103 000 − 43 000) × 0.5 + 35 000 =
> $65,000. Discounting before netting: 35 000 + 51 500 − 43 000 =
> $43,500 — understated, and the netting-order trap in reverse. The
> taxpayer-favourable order the ATO requires is the one above.

## Question 6 — Lockie three ways: individual, super fund, company

A $200,000 capital gain on an asset held over a year, no losses, no other
income, 2026-27, no offsets. (Current CGT rules — the pre-1-July-2027
discount regime, note 05.)

```
INDIVIDUAL — 50% discount
  Assessable gain = 200 000 × 0.50 = 100 000
  Income tax      = 4 020 + 0.30 × (100 000 − 45 000) = $20 520
  Medicare levy   = 100 000 × 0.02                     = $ 2 000
  TOTAL                                                  $22 520

SUPER FUND — one-third discount, 15% flat
  Assessable gain = 200 000 × 2/3 = 133 333.33
  Tax             = 133 333.33 × 0.15                  = $20 000

COMPANY — no discount, 30% flat
  Assessable gain = 200 000
  Tax             = 200 000 × 0.30                     = $60 000
```

Verified in Python.

**What to deduce:** the structure, not the gain, drives the tax. The super
fund pays the least ($20,000 — and in pension phase would pay **nil**);
the individual pays a touch more ($22,520, and only because Medicare
applies — income tax alone is $20,520); the company pays **three times**
as much ($60,000), because companies get no CGT concession at all. This is
the structures table of note 05 in numbers.

> **A "passive investment company" cannot use the 25% small-company rate.**
> Base-rate-entity status requires no more than 80% passive income —
> a company whose only receipt is a capital gain fails that test, so 30%
> applies. And within the individual's calculation, remember the gain is
> the *only* income, so the progressive scale applies from $0 — taxing
> $100,000 flat at a "marginal rate" is trap 17 on the formula sheet.

## Question 7 — Jemma: bank interest vs franked dividends

Jemma has $50,000 to invest; salary $85,000; work expenses $3,000; private
health insurance; no dependants, no offsets. Ignore CGT.

**Her marginal rate first.** Work expenses ($3,000) exceed the $1,000
standard deduction, so she claims actual:

```
Base taxable income = 85 000 − 3 000 = $82 000
   → sits in the 30% bracket (45 000–135 000), + 2% Medicare = 32%
   → both options stay inside the bracket, so 32% prices every
     marginal dollar (MLS: n/a — she has private cover)
```

**Option A — bank account, 3% compounded monthly:**

```
Effective rate = (1 + 0.03/12)^12 − 1 = 3.0416%
Interest       = 50 000 × 0.030416    = $1 520.80
Tax at 32%                            = ($ 486.66)
                                        ---------
After-tax return                        $1 034.14   (2.07% on 50 000)
```

**Option B — shares, 1.5% fully franked yield ($750):**

```
Cash dividend                          = $  750.00
Franking credit  750 × 30/70           = $  321.43
Grossed-up (assessable) amount         = $1 071.43

Tax at 32%       1 071.43 × 0.32       = $  342.86
Less franking offset                   = ($ 321.43)
Net tax on the dividend                = $   21.43
                                         ---------
After-tax return  750 − 21.43          = $  728.57   (1.46% on 50 000)
```

**On pure one-year after-tax income, the bank account wins: $1,034.14 vs
$728.57.** Verified in Python.

The advice answer, though, notes what the question deliberately excludes:
the shares' return here is income only — any capital growth (and the CGT
discount on it) sits outside this comparison, which is why the question
says to ignore CGT "as Jemma wishes to invest for the long term". The
franking mechanics also mean the dividend's effective tax rate is only
2.9% (21.43/750) versus 32% on interest — the shares are far more
*tax-efficient* per dollar of income; there is simply less income at these
yields.

> **Don't tax the $750 at 32% and stop.** The dividend's after-tax value
> is not `750 × 0.68 = 510` — the franking credit first grosses income up
> to $1,071.43, then returns as an offset, leaving net tax of just $21.43.
> Skipping the gross-up-and-offset both understates the dividend's value
> ($728.57, not $510) and misses the entire point of the comparison. Also
> note the interest uses the **effective** rate (3.0416%), not 3% flat —
> "compounded monthly" is doing work; simple 3% gives $1,020 after tax
> and undervalues Option A by $14.14.

## Checkpoint

<details><summary>Questions</summary>

1. Work expenses: union fees $300, other work expenses $1,100. What is the
   total deduction?
2. A couple's joint account earns $9,000. One partner earns $150,000, the
   other $30,000. Who declares what, and can they shift it?
3. Gains of $12,000 (held 8 months) and $40,000 (held 3 years); losses of
   $20,000. Net capital gain?
4. Which structure pays the most tax on a $100,000 discountable gain —
   individual (no other income), super fund, or company — and how much?

</details>

<details><summary>Answers</summary>

1. ```
   Other expenses 1 100 > 1 000 standard → claim actual 1 100
   Total = 1 100 + 300 union = $1 400
   ```
   (Union fees are additional under either route.)
2. $4,500 each — joint accounts split equally regardless of marginal
   rates; they cannot direct the income to the lower earner (note 05's
   income-splitting rules concern transferring the *asset*).
3. ```
   Losses v non-discountable first: 12 000 − 20 000 = −8 000
   Remainder v discountable:        40 000 − 8 000  = 32 000
   Discount:                        32 000 × 0.50   = $16 000
   ```
4. ```
   Company:    100 000 × 0.30 = $30 000   ← most
   Super fund: 100 000 × 2/3 × 0.15 = $10 000
   Individual: assessable 50 000 →
               tax 4 020 + 0.30 × 5 000 = 5 520; Medicare 1 000 → $6 520
               (LITO of $250 would trim it to $6 270)
   ```
   The individual pays least here because the discounted $50,000 sits
   mostly in the low brackets — structure ranking depends on the gain's
   size as well as the concession.

</details>
