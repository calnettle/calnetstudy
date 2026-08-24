# Topic 5 — Leveraged Investing and Margin Lending

Week 5, second half. Source: `AYB250 Week 5.pptx`, slides 31–46. Reading:
Chapters 5 and 6. The property half of the deck is note 08.

Covers gearing and why it cuts both ways, positive versus negative
gearing, the gearing ratio versus the LVR (they share a numerator and
nothing else), margin lending, and margin calls. Every worked figure was
recomputed in Python; the deck's tables all reconcile exactly.

## What leverage is

**Leveraged** investing means using borrowed money to acquire more of an
asset — a mortgage on a home, or borrowing to buy shares. **Leveraging,
gearing, debt financing and borrowing all mean the same thing.** Leverage
can also refer to derivatives (futures, options, warrants) creating
exposure to significant gains or losses. Investors need a strategy for the
associated risks.

Gearing buys **more assets** — more upside, and equally more downside.

### Worked example — the same unit, two futures

You buy a $300,000 unit with a $30,000 deposit and a $270,000 loan at 8%
(interest $21,600 p.a.).

- **Scenario 1:** rent $400/week; capital growth 10% for the year
- **Scenario 2:** rents fall to $300/week; prices rise only 1%

| | Scenario 1 | Scenario 2 |
|---|---|---|
| Capital | $30,000 | $30,000 |
| Borrowing | $270,000 | $270,000 |
| Total invested | $300,000 | $300,000 |
| Rental income | $20,800 | $15,600 |
| Less interest | ($21,600) | ($21,600) |
| Net income | ($800) | ($6,000) |
| Capital gain | $30,000 | $3,000 |
| **Total return** | **$29,200** | **($3,000)** |
| Return on capital | **97%** | **−10%** |

```
Scenario 1:  (400 × 52) − 21 600 + (300 000 × 10%) = 29 200 → 29 200/30 000 = 97.3%
Scenario 2:  (300 × 52) − 21 600 + (300 000 ×  1%) = −3 000 → −10%
```

Verified exactly.

> **The return is measured on the $30,000 capital, not the $300,000
> asset.** That is the whole leverage effect: a 10% property gain became a
> 97% equity return, and a property that still *rose* 1% produced a −10%
> equity return. Same asset, same loan — the outcome hinged on rent and
> growth assumptions only slightly apart.

## Positive and negative gearing

```
POSITIVE gearing:  income from the asset  >  interest + costs
                   ("cash flow positive")
NEGATIVE gearing:  costs of owning        >  income from the asset
```

**Positive gearing** is not considered tax-effective (there is extra tax
to pay, not a loss to deduct) but is a good retirement-income strategy and
a risk-minimisation strategy, particularly for investors seeking long-term
capital gains.

**Negative gearing** is popular because the ATO allows the loss to be
claimed against personal income — most commonly on rental property, share
portfolios and managed funds. The full worked example (Sally) is in note
08; the tax rules and the 12 May 2026 / 1 July 2027 changes are in note
05.

> **The quarantine change is property-specific.** From 1 July 2027, losses
> from **residential investment properties** purchased after 12 May 2026
> can only offset other residential-property income. A negatively geared
> **share portfolio or margin loan is untouched** — its loss still offsets
> salary. Expect a question that tests exactly this boundary.

### Risks of negative gearing

- Income lower than anticipated; expenses higher
- The lender changes loan terms
- A fall in the investor's *other* income lowers their marginal rate —
  shrinking the tax shield and straining their ability to cover outgoings
- Forced sale at the wrong point in the market cycle
- Asset-specific factors (bad tenants)
- The anticipated capital gain never arrives

> **The strategy only pays if the capital gain eventually outruns the
> accumulated losses — and the tax shield is only as big as your marginal
> rate.** A pay cut attacks a negatively geared investor twice: less cash
> to fund the shortfall, and each dollar of loss saves less tax.

## Two ratios that look alike and aren't

```
                        Borrowed funds
GEARING ratio  =  --------------------------------      lower = less risk
                   market value of the investor's
                        capital contribution

                              Debt
LVR            =  --------------------------------
                   capital contribution + debt
                   (i.e. total value of the investment)
```

**Worked example** (deck): Matthew invests $300,000, of which $100,000 is
borrowed (so his own capital is $200,000).

```
Gearing ratio = 100 000 / 200 000 = 0.5
LVR           = 100 000 / 300 000 = 0.33  (33%)
```

Verified.

> **Same numerator, different denominator: gearing divides by YOUR money,
> LVR divides by ALL the money.** Gearing ratio 0.5 and LVR 33% describe
> the same position. Lenders set maximums in LVR terms; if a question
> mixes the two, compute both and label them.

## Margin lending

A margin loan is a geared investment where the borrowing is **secured by
the investments themselves** rather than a mortgage. Generally used for
shares (usable for other assets); the lender publishes an accepted-
securities list with a **maximum LVR per security**, and the borrower must
maintain that LVR. (Margin lending peaked at the end of 2007 — before the
GFC demonstrated the margin-call spiral.)

### Worked example — Loretta

Loretta has $50,000 and wants to invest in the iShares Core S&P/ASX 200
ETF (IOZ), which her lender caps at an **80% LVR**.

```
Maximum loan:  L / (50 000 + L) = 0.80  →  L = $200 000

She borrows only $75 000:
  total investment = 125 000,   LVR = 75 000 / 125 000 = 60%
```

First-year income position:

| Item | Amount |
|---|---|
| IOZ dividends | $5,000 |
| Margin loan interest (9% × $75,000) | ($6,750) |
| **Net annual position** | **($1,750)** |

The $1,750 loss is deductible against her salary — a negatively geared
share investment (and **not** caught by the residential-property
quarantine).

### Why isn't everyone doing this?

The deck's table, one year on, at various market outcomes (all verified):

| Scenario | Portfolio value | Loretta's equity | LVR | Return on equity | Margin call? |
|---|---|---|---|---|---|
| Market rises 20% | $150,000 | $75,000 | 50.0% | +50% | No |
| Market rises 10% | $137,500 | $62,500 | 54.5% | +25% | No |
| Market flat | $125,000 | $50,000 | 60.0% | 0% | No |
| Market falls 10% | $112,500 | $37,500 | 66.7% | −25% | No |
| Market falls 20% | $100,000 | $25,000 | 75.0% | −50% | No |
| Market falls 30% | $87,500 | $12,500 | 85.7% | **−75%** | **YES** |

```
Every row: equity = portfolio − 75 000 loan;  LVR = 75 000 / portfolio;
           ROE = (equity − 50 000) / 50 000
e.g. −30%:  125 000 × 0.70 = 87 500;  87 500 − 75 000 = 12 500;
            75 000/87 500 = 85.7%;  (12 500 − 50 000)/50 000 = −75%
```

> **The leverage is symmetric but the LVR is not.** A 20% market move
> produces a ±50% equity move either way — but only the downside walks the
> LVR toward the trigger. Note the market falling 30% costs Loretta 75% of
> her equity *and* triggers a margin call at the worst possible moment.

### Margin calls

Triggered when the security's value falls below the lender's required
level. **Must be satisfied within 24 hours**, by one of:

1. Paying additional cash into the loan to restore the required LVR
2. Adding new assets as security
3. Selling some assets to pay down the loan

Most lenders allow a **buffer of 5–10%** so small fluctuations don't
trigger calls — which is why the −20% row (LVR 75%) survives but the −30%
row (85.7%, beyond 80% plus any buffer) does not.

**Worked example — meeting the call.** After the 30% fall (portfolio
$87,500, loan $75,000), Loretta pays **$5,000 into the loan**:

```
Loan:    75 000 − 5 000 = $70 000
Equity:  87 500 − 70 000 = $17 500

LVR = 70 000 / (17 500 + 70 000) = 70 000 / 87 500 = 0.80  ✓ back at 80%
```

Verified. If she couldn't fund the call, she'd sell IOZ units to reduce
the loan instead — crystallising losses at the bottom.

### Benefits and risks of margin lending

| Benefits | Risks |
|---|---|
| Greater access to wealth-creating assets | Capital losses (magnified) |
| Diversification | Funding the interest payments |
| Liquidity | Funding margin calls |
| Personal income tax benefits | Fluctuating portfolio value |
| Direct investing and management | |

## Checkpoint

<details><summary>Questions</summary>

1. An investor buys $200,000 of shares with $60,000 of their own money and
   $140,000 borrowed. Calculate the gearing ratio and the LVR.
2. Using Q1: the lender's maximum LVR is 75%. The portfolio falls 15%.
   Is there a margin call (ignore any buffer)?
3. The Q2 call must be met with cash into the loan. How much?
4. Dividends on a geared share portfolio are $8,000; margin interest is
   $11,000. What is the tax treatment of the difference for someone on a
   39% marginal rate (incl. Medicare), and what is it worth?
5. Why is positive gearing described as both "not tax-effective" and "a
   risk-minimisation strategy"?
6. What three options satisfy a margin call, and what is the deadline?

</details>

<details><summary>Answers</summary>

1. ```
   Gearing ratio = 140 000 / 60 000  = 2.33
   LVR           = 140 000 / 200 000 = 70%
   ```
2. ```
   Portfolio: 200 000 × 0.85 = 170 000
   LVR = 140 000 / 170 000 = 82.4%  >  75%  →  YES, margin call
   ```
3. ```
   Need: (140 000 − x) / 170 000 = 0.75  →  140 000 − x = 127 500
   x = $12 500 paid into the loan
   Check: equity 170 000 − 127 500 = 42 500; 127 500/170 000 = 75% ✓
   ```
4. A **$3,000 negatively geared loss**, deductible against salary (shares
   are not caught by the residential-property quarantine). Worth
   `3 000 × 0.39 = $1 170` in tax saved; the after-tax cost of carry is
   $1,830.
5. Not tax-effective because the net income is *taxable* — there is no
   loss to deduct. Risk-minimising because the asset pays for itself: no
   reliance on capital gains or on the investor's salary to fund the
   position.
6. Pay cash into the loan, add new assets as security, or sell assets to
   repay part of the loan — within **24 hours**.

</details>

## Summary

- Leverage = gearing = debt financing = borrowing (or derivative
  exposure). It scales the asset base, so it scales both tails: the deck's
  $300,000 unit returned **+97% or −10%** on $30,000 of equity across two
  mild scenarios.
- Positive gearing: income > costs — taxable, safe, good for retirement
  income. Negative gearing: costs > income — the loss offsets other income
  (for residential property bought after 12 May 2026, only *other
  residential-property income* from 1 July 2027; shares are unaffected).
- `Gearing ratio = debt / your capital` (Matthew: 0.5);
  `LVR = debt / total value` (Matthew: 33%). Lenders speak LVR.
- Margin loans are secured by the portfolio itself, with a maximum LVR per
  security and a 5–10% buffer. Loretta: $50,000 equity + $75,000 loan =
  60% LVR; a 30% market fall pushes the LVR to 85.7%, triggers a call, and
  a $5,000 payment restores 80%.
- Margin calls: 24 hours; cash in, add security, or sell down.
- A ±20% market year is a ±50% equity year at 60% starting LVR — the
  benefits list (access, diversification, liquidity, tax) is real, and so
  is every line of the risk column.
