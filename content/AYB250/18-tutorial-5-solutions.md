# Tutorial 5 Solutions — Property and Leveraged Strategies

Worked solutions for `AYB250 Tutorial Questions Topic 5 updated.docx`.
**No answer slides were supplied for this tutorial** — every solution is
worked from scratch and verified in Python. Topic notes: 08 (property
investment) and 09 (leveraged investing), with tax machinery from notes
04–05.

*(Numbering note: the question sheet's final item says "recalculate your
answers to question 5", but in the sheet's own running order the Jason
gearing question is the sixth item — the cross-reference is a leftover
from an earlier numbering. Questions are numbered below in the order they
appear; the "recalculate" question is Question 7 and refers to
Question 6.)*

## Question 1 — factors to consider before investing in property

From the Week 5 characteristics list (note 08), organised for a discussion
answer:

- **Liquidity** — property is generally illiquid; selling takes months,
  not minutes, and you cannot sell a bedroom to raise part of the value.
- **Entry and exit costs** — stamp duty, legal fees, agent commissions;
  high enough that short holding periods rarely recover them.
- **Ongoing costs** — management, maintenance, rates, insurance, land tax.
- **Income and growth mix** — returns come as both rent and capital
  growth; the balance differs by sub-class (commercial yields higher,
  residential leans on growth).
- **Tenant/vacancy risk** — income security depends on lease length and
  tenant quality; commercial property concentrates this in one tenant.
- **Gearing** — property supports high leverage, which magnifies both
  outcomes (note 09) and adds interest-rate risk.
- **Tax** — deductibility of interest and depreciation, negative-gearing
  rules (including the 12 May 2026 / 1 July 2027 changes), CGT treatment
  on exit, and GST for commercial property.
- **Diversification** — property cycles don't necessarily coincide with
  shares, but a single property is a large, lumpy, undiversified bet.
- **Market factors** — scarcity, infrastructure, credit availability,
  planning policy and migration all move values; timing in the cycle
  matters because forced sales at the wrong point are expensive.

## Question 2 — Georgie and Teresa's loan repayments

$200,000 at 6.5% fixed, compounded monthly, over 25 years.

**(a) Monthly repayment** — note 08's repayment formula:

```
i = 0.065 / 12 = 0.00541667        n = 25 × 12 = 300

              PV                        200 000
C = ---------------------  =  ------------------------------
    [1 − (1 + i)^(−n)] / i    [1 − (1.00541667)^(−300)] / 0.00541667

  = $1 350.41 per month
```

**(b) Total interest over 25 years:**

```
Total paid = 1 350.41 × 300 = $405 124.30
Interest   = 405 124.30 − 200 000 = $205 124.30
```

Verified in Python.

> **They repay more in interest than they borrowed.** $205k of interest on
> a $200k loan is the standard shape of a 25-year mortgage at ~6.5% — cite
> it as two numbers ("about $1,350/month; interest slightly exceeds the
> principal") and it stops being surprising in an exam. Remember the
> monthly discipline: i = j/12 and n = years × 12, never the annual rate
> with annual periods.

## Question 3 — Foula's inherited property

Rent advice: $320/week. Average capitalisation rate from comparable sales:
7%.

**(a) Estimated market value** — the capitalisation approach (note 08):

```
Annual rent  = 320 × 52 = $16 640

               Annual net income     16 640
Market value = -----------------  =  ------  =  $237 714
               Capitalisation rate    0.07
```

Verified ($237,714.29).

> **Strictly, the cap approach wants NET income, and $320/week is a gross
> rent estimate.** Using gross rent overstates value unless the
> comparables' 7% was also built on gross figures. A complete answer
> states the assumption: "taking the agent's rent figure on the same basis
> as the comparables' cap rate."

**(b) How did the agent get 7%?** By taking recent sales of similar
properties in the area and averaging their rates of return — each one's
annual net income divided by its sale price (exactly the three-unit worked
example in note 08). It is an *average of comparables*, so it inherits
their leases, conditions and timing.

**(c) Rent or sell — the factors:**

- **Income vs lump sum**: ~$16,640 p.a. gross (before agent fees, rates,
  insurance, maintenance, vacancies) versus ~$237,714 now to redeploy.
- **Tax on rent**: rental income is assessable at Foula's marginal rate,
  with the note-08 deductions available (agent fees, rates, insurance,
  repairs, depreciation). With no debt on an inherited property it will
  likely be **positively geared** — taxable income, not a loss.
- **CGT on sale**: the main-residence exemption won't shelter it (Foula
  won't live there). An inherited asset's CGT position depends on the
  deceased's acquisition — flag with a tax adviser; the course-level
  point is that selling is a CGT event, renting defers one.
- **Distance and management**: she visits the town only occasionally —
  practical management requires an agent (a cost) and vacancy risk in a
  regional market can be lumpy.
- **Portfolio fit**: keeping it is a concentrated single-asset position;
  selling allows diversification (notes 07/08). Also her own plans — cash
  needs, other debts, and whether a regional property matches her risk
  profile.

## Question 4 — Nerida's rental returns and gearing

Purchased for $650,000 in early 2026, **settling before 12 May 2026**;
gross rental return 5% p.a.; marginal tax rate 37% + 2% Medicare = **39%**.

**(a) Annual rent:**

```
Rent = 650 000 × 0.05 = $32 500
```

**(b) Rental yield after costs** ($7,500 p.a. ongoing):

```
Net income = 32 500 − 7 500 = $25 000
Net yield  = 25 000 / 650 000 = 3.85%
```

**(c) After-tax return, no borrowings:**

```
Tax on net rental income = 25 000 × 0.39 = $9 750
After-tax income         = 25 000 − 9 750 = $15 250
After-tax return         = 15 250 / 650 000 = 2.35%
```

**(d) With a $500,000 interest-only loan at 6%:**

```
Interest              = 500 000 × 0.06 = $30 000
Net rental position   = 25 000 − 30 000 = −$5 000   → negatively geared

Settled before 12 May 2026 → OLD rules: the loss offsets her salary
Tax saving            = 5 000 × 0.39 = $1 950
After-tax cash impact = −5 000 + 1 950 = −$3 050 per year
```

The rental income now costs Nerida $3,050 a year after tax — the
negative-gearing wager is that capital growth exceeds that running cost
(note 09).

**(e) If she had purchased after 12 May 2026:** the property is an
*existing* residential investment, so from **1 July 2027** the new rules
quarantine the loss: it could no longer offset her salary, only income
from other residential property (including future residential capital
gains), carrying forward unused. Her cash outflow would still be $5,000,
but the $1,950 annual tax subsidy disappears from 2027-28 onward — the
full $5,000 becomes the after-tax cost, with the quarantined losses
banked against a future gain. (For 2026-27 itself the old treatment still
applies — the new rules commence 1 July 2027.)

All figures verified in Python.

> **Three different "returns" on the same property: 5% gross, 3.85% net,
> 2.35% after tax — and negative once geared.** Name which one a question
> asks for. And the quarantine trigger is the **purchase date** (after
> 7:30pm, 12 May 2026, for existing dwellings), while the **start date**
> of the new treatment is 1 July 2027 — two different dates doing two
> different jobs (note 05).

## Question 5 — margin loan vs mortgage against the home

Both raise money to buy shares; the difference is the **security**.

| | Margin loan | Mortgage over the home |
|---|---|---|
| Security | The share portfolio itself | The family home |
| Margin calls | **Yes** — 24 hours to restore the LVR if the market falls (note 09) | **No** — repayments don't change with the portfolio |
| Interest rate | Higher (riskier security) | Lower (housing-secured credit) |
| Borrowing limit | Capped by each security's accepted LVR (e.g. 70–80%) | Up to available home equity |
| What's at stake if shares crash | The portfolio (sold down at the bottom to meet calls) | **The home**, if repayments can't be met |
| Flexibility | Portfolio-linked; forced selling possible | Independent of the market; no forced selling |
| Interest deductibility | Deductible — borrowed to produce assessable income | **Also deductible if** the borrowed money is used to buy income-producing shares (purpose test, not security test) |

**Recommendation** (a defensible one — the question invites judgement):
for most clients, the **mortgage/home-equity route** is cheaper and
removes margin-call risk — the single nastiest feature of geared share
investing, because calls arrive exactly when the market has fallen. But it
consciously puts the home behind the investment: the client must be
certain they can service the loan from income regardless of the
portfolio. A margin loan quarantines the risk to the portfolio and suits
an investor who wants the home untouched and accepts the call mechanism
(and keeps the LVR conservative, e.g. Loretta's 60% vs an 80% maximum).
State the trade-off; either answer earns marks if reasoned.

## Question 6 — Jason's geared share portfolio

$50,000 equity; interest 8% p.a.; dividend yield 6% **fully franked**
(large-company 30% rate); capital growth 4%; marginal rate 37% + 2%
Medicare = **39%**; sold one year and a day after purchase (so the
holding period exceeds 12 months and the **50% CGT discount** applies —
note 05).

Method for each gearing level: gross up the dividends, deduct the
interest, discount the gain, tax the lot at 39%, subtract the franking
offset, and compare the after-tax dollars to the $50,000 equity.

```
                              100% equity    50% equity     10% equity
Equity                            50 000         50 000         50 000
Debt                                   0         50 000        450 000
Total invested                    50 000        100 000        500 000

Cash dividend (6%)                 3 000          6 000         30 000
Franking credit (× 30/70)          1 285.71       2 571.43      12 857.14
Interest (8% × debt)                   0          4 000         36 000
Capital gain (4%)                  2 000          4 000         20 000
  taxable after 50% discount       1 000          2 000         10 000

Taxable amount
  (div + credit − int + ½gain)     5 285.71       6 571.43      16 857.14
Tax at 39%                         2 061.43       2 562.86       6 574.29
Less franking offset              (1 285.71)     (2 571.43)    (12 857.14)
Net tax                              775.71          −8.57       −6 282.86

Pre-tax cash (div − int + gain)    5 000          6 000         14 000
NET RETURN ($)                     4 224.29       6 008.57      20 282.86
NET RETURN (% on equity)            8.45%         12.02%         40.57%
```

All verified in Python. Gearing works spectacularly here: every borrowed
dollar earns 10% pre-tax (6% dividend + 4% growth) against an 8% interest
cost, and the tax system adds franking credits and the CGT discount on
top. At 10% equity the franking offset alone exceeds the tax on the whole
position, producing a net tax *refund* of $6,282.86.

> **Three assumptions carry the 40.57%:** (1) Jason has other taxable
> income at 39% for the excess deductions and offsets to absorb (a geared
> *share* loss offsets salary — no property-style quarantine, note 09);
> (2) the market cooperates — this is the Loretta table's up-scenario
> only; (3) a lender will actually write 90% LVR on shares, which typical
> margin limits (70–80%) won't — the 10%-equity case is a textbook
> illustration, not an executable trade. Also note the "year and a day"
> is doing real work: one day less and the gain loses its discount.
> (Timing wrinkle to raise with the tutor: bought now, "a year and a day"
> lands after 1 July 2027, when the course's new CGT rules replace the
> 50% discount — the question clearly intends the current-rules
> treatment shown here.)

## Question 7 — Jason recalculated (the tougher year)

Same structure; now interest 9%, dividends 5% fully franked, growth 2%.
Pre-tax, every borrowed dollar now earns 7% against a 9% cost — gearing
*should* hurt. After tax:

```
                              100% equity    50% equity     10% equity
Cash dividend (5%)                 2 500          5 000         25 000
Franking credit (× 30/70)          1 071.43       2 142.86      10 714.29
Interest (9% × debt)                   0          4 500         40 500
Capital gain (2%)                  1 000          2 000         10 000
  taxable after 50% discount         500          1 000          5 000

Taxable amount                     4 071.43       3 642.86         214.29
Tax at 39%                         1 587.86       1 420.71          83.57
Less franking offset              (1 071.43)     (2 142.86)    (10 714.29)
Net tax                              516.43        −722.14      −10 630.71

Pre-tax cash (div − int + gain)    3 500          3 500         −5 500
NET RETURN ($)                     2 983.57       3 222.14       5 130.71
NET RETURN (% on equity)            5.97%          6.44%         10.26%
```

All verified in Python.

**What changed:** pre-tax, the geared positions now lose on every borrowed
dollar — at 10% equity the pre-tax cash flow is **negative $5,500**. Yet
the after-tax return *still rises* with gearing (5.97% → 6.44% → 10.26%),
because the tax system rescues it: the interest deduction at 39%, the
franking credits (refundable/offsetting in full), and the half-taxed
capital gain together turn a $5,500 pre-tax loss into a $5,131 after-tax
gain.

> **This is the tax tail wagging the investment dog — say so in the
> answer.** The scenario-2 gearing "win" exists only because of Jason's
> high marginal rate, full franking, refundable credits and the CGT
> discount; the underlying investment loses money before tax. It is also
> fragile: a fall in Jason's other income (lower marginal rate), a cut to
> franking, or growth below 2% flips it — and none of this pays the
> $40,500 of interest that must be funded in cash during the year.
> Compare note 09's risks-of-negative-gearing list; this question is that
> list in numbers.

## Checkpoint

<details><summary>Questions</summary>

1. What are the repayments on $300,000 over 20 years at 5.9% compounded
   monthly, and the total interest?
2. A unit rents for $410/week; comparables show a 6.4% cap rate. Value?
3. An investor's property produces $28,000 rent, $9,000 costs and $27,000
   interest. Marginal rate 34.5% incl. Medicare. After-tax cash impact
   under the old negative-gearing rules?
4. In Jason's scenario 1 at 50% equity, why is the net tax almost exactly
   zero?

</details>

<details><summary>Answers</summary>

1. ```
   i = 0.059/12 = 0.00491667   n = 240
   C = 300 000 / {[1 − 1.00491667^(−240)]/0.00491667} = $2 132.02/month
   Total interest = 2 132.02 × 240 − 300 000 = $211 685.27
   ```
2. ```
   Annual rent = 410 × 52 = 21 320
   Value = 21 320 / 0.064 = $333 125
   ```
3. ```
   Net rental = 28 000 − 9 000 − 27 000 = −8 000
   Tax saving = 8 000 × 0.345 = 2 760
   After-tax impact = −8 000 + 2 760 = −$5 240 per year
   ```
4. Because the taxable amount ($6,571.43 × 39% = $2,562.86) is almost
   exactly matched by the franking offset ($2,571.43) — the grossed-up
   dividends, interest deduction and half-gain net out to a position the
   credits nearly fully shelter. It's coincidence of these particular
   rates, not a rule.

</details>
