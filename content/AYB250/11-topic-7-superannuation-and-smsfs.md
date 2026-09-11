# Topic 7 — Superannuation and SMSFs

Week 7. Source: `AYB250 Week 7.pptx`, slides 1–52. Reading: Chapter 8.
Tutorial solutions: note 19.

Covers what super is for and why governments run it, fund types, the two
contribution types and their caps, the government co-contribution and
spouse offset, the First Home Super Saver Scheme, investment rules and
restrictions, conditions of release, how funds and benefits are taxed
(including the new Division 296 tax), and self-managed funds. Every worked
figure was recomputed in Python and all reconcile. The co-contribution
thresholds, the $2.1 million transfer balance cap and Division 296's
1 July 2026 start were also checked against current ATO and industry
sources.

## What super is, and why it exists

Super is a system of **saving and investing during your working life to
provide an income in retirement**: an investment structure accessed
through membership of a fund.

> **"Pension" means two different things.** Overseas it usually means
> employment-related retirement savings. In Australia it usually means the
> means-tested **age pension**, which isn't employment-related. A
> super-funded income stream is called a pension too (note 12), so read
> the context.

Governments run retirement income policy because of an ageing population,
longer life expectancy, fewer taxpayers per retiree and greater lifestyle
expectations. The deck's projections:

| Measure | 2010 | 2050 |
|---|---|---|
| Population aged 65+ | 13.5% | 22.6% |
| Population aged 85+ | 1.8% | 5.1% |
| Working age (15–64) | 68% | 60% |
| Median age | 37.8 | 42.9 |
| Life expectancy at birth, male | 80.1 | 87.7 |
| Life expectancy at birth, female | 84.4 | 90.5 |
| Aged dependency ratio | 20% | 38% |

Australia's policy is the **three-pillar approach** (slide 5 is a diagram
with no text; the standard three pillars are the means-tested age pension,
compulsory super through the super guarantee, and voluntary saving).

**Purpose.** A fund must be maintained for at least one **core purpose**:
retirement, reaching age 65, or death benefits. **Ancillary purposes**
(such as benefits for members who can't work through illness) are allowed
on top.

## Regulation and fund types

Super is governed mainly by the **Superannuation Industry (Supervision)
Act 1993** (SIS Act). Every fund is a **trust** with a trust deed, and the
trustees must act in the members' best interests. APRA regulates the large
funds and the ATO regulates SMSFs; see note 01 and trap 12 in note 23.

| Type | Profit? | Who can join |
|---|---|---|
| **Corporate** | Not for profit | Set up by an employer for its employees |
| **Industry** | Not for profit | Traditionally one industry; most now public offer |
| **Public sector** | Not for profit | Public sector employees only |
| **Retail** | For profit | Run by banks and investment companies |
| **SMSF** | — | Self-managed, up to 6 members |
| **SAF** | — | Small APRA fund |

| Type | No. of funds, Jun 1999 | No. of funds, Jun 2026 | Assets $b, Jun 2026 | Members m, Jun 2026 |
|---|---|---|---|---|
| Industry | 101 | 19 | 1,631 | 14.7 |
| Corporate | 3,332 | 2 | 37 | 0.1 |
| Public sector | 41 | 27 | 783 | 3.3 |
| Retail | 238 | 48 | 868 | 5.8 |
| SMSFs and SAFs | 192,000 | 673,384 | 1,059 | 1.2 |
| **Total assets** | | | **$4,378b** | |

Verified: the asset column sums to $4,378b. The story is consolidation of
the large funds (3,332 corporate funds down to 2) against a boom in SMSFs.
Tutorial 7 Q1 asks why.

**Two phases:** **accumulation** (contributions and investment returns in;
fees, taxes, insurance premiums and negative returns out) and
**withdrawal/pension** (lump sums or an income stream). **Transition to
retirement** bridges the two (note 12).

## Contributions

### Concessional contributions

A contribution **for which a tax deduction has been claimed**:

```
Taxed at 15% on entry to the fund
Cap: $32,500 a year, which includes
  · super guarantee (12% employer contribution)
  · salary-sacrificed contributions
  · personal contributions the member claims as a deduction
```

**Worked example** (deck): Jeremy earns $120,000 plus super.

```
SG = 120 000 × 12% = $14 400      (the employer claims the deduction)
```

**Worked example** (deck): Juanita earns $134,400 **including** super.

```
Salary × 1.12 = 134 400  →  Salary = $120 000
SG = 134 400 − 120 000 = $14 400
```

Verified.

> **"Plus super" versus "including super".** A package that includes
> super must be divided by 1.12 to find the salary; don't take 12% of the
> package. 12% × $134,400 = $16,128 is the wrong answer.

**Worked example** (deck): Chris is self-employed, earns $150,000 and
makes a $32,500 personal deductible contribution.

| | Without contribution | With contribution |
|---|---|---|
| Assessable income | $150,000 | $150,000 |
| Deductions | 0 | ($32,500) |
| Taxable income | $150,000 | $117,500 |
| Tax payable | ($36,570) | ($25,770) |
| Medicare levy | ($3,000) | ($2,350) |
| Net income | $110,430 | $89,380 |
| Superannuation | 0 | $32,500 |
| Super contributions tax (15%) | 0 | ($4,875) |
| Net super | 0 | $27,625 |
| **Net worth** | **$110,430** | **$117,005** |

```
Tax at 150 000: 31 020 + 0.37 × (150 000 − 135 000) = 36 570
Tax at 117 500:  4 020 + 0.30 × (117 500 −  45 000) = 25 770
Gain in net worth = 117 005 − 110 430 = $6 575
```

Verified. The contribution cost $21,050 of take-home pay and put $27,625
into super.

**Salary sacrifice, the employee's version:** at a 32% marginal rate
(30% + Medicare), $10,000 sacrificed costs `10 000 × 0.68 = $6,800` of
take-home pay and lands as `10 000 × 0.85 = $8,500` in super, a tax saving
of `10 000 × (0.32 − 0.15) = $1,700`. Week 3's Kristy example (note 05)
is the same mechanism.

**Carry-forward of unused cap.** Unused concessional cap can be carried
forward if the **total super balance was under $500,000 on 30 June of the
previous year**. Unused amounts last **5 years**, then expire; the oldest
is used first, and it applies automatically once you exceed the cap.

**Division 293.** For individuals with income above **$250,000**, the
effective contributions tax is **30%**. The extra 15% is levied on the
individual, not the fund.

### Non-concessional contributions

A contribution **for which no deduction is claimed**, made from after-tax
money:

```
Not taxed on entry to the fund
Cap: $130,000 a year, or $390,000 over 3 years (bring-forward)
Not available once your total super balance reaches the general
transfer balance cap: $2.1 million (from 1 July 2026)
```

### Government co-contribution

The government matches a **non-concessional** contribution at 50%, up to
**$500**, for low and middle earners (at least 10% of income must come
from employment or a business).

```
Full co-contribution:     income below $49,293   ($1,000 NCC → $500)
Partial co-contribution:  income below $64,293
Reduction: 3.333 cents per $1 of income above $49,293   (ATO)
```

**Worked example** (deck): Jonah earns $32,500, contributes $1,000 NCC and
receives **$500**.

**Partial:** income $56,793.

```
500 − (56 793 − 49 293) × 0.03333 = 500 − 249.97 ≈ $250
```

### Spouse contribution tax offset

A **non-concessional** contribution into a **low-income spouse's** super
earns the contributor a tax offset:

```
Offset = 18% of the NCC, maximum $540 (reached at a $3,000 contribution)
Full offset:     spouse income below $37,000
Partial offset:  spouse income below $40,000
(ATO rule: the $3,000 base falls by $1 for each $1 of spouse income over $37,000)
```

**Worked example** (deck): Jason (earning $150,000) contributes $3,000 to
Jonah's super; Jonah earns under $37,000, so Jason gets a **$540** offset.

**Partial:** $2,000 contributed for a spouse earning $38,500.

```
Base = 3 000 − (38 500 − 37 000) = 1 500
Offset = 18% × lesser of (2 000, 1 500) = 18% × 1 500 = $270
```

> **Co-contribution versus spouse offset: whose income, whose money?**
> The co-contribution tests the **member's own** income and pays into
> their super. The spouse offset tests the **receiving spouse's** income
> and cuts the **contributor's** tax. Both need a non-concessional
> contribution. Tutorial 7 Q3 compares them on the same $1,000: the
> co-contribution wins by $320.

### Contributions outside the caps

| Contribution | Rules |
|---|---|
| **Small business 15-year exemption** | Whole gain on active assets held 15 years is CGT-free; 55+ or permanently incapacitated; proceeds can go to super; lifetime cap **$1,935,000** |
| **Small business retirement exemption** | First **$500,000** of gain exempt (lifetime); under 55 it must go into super |
| **Downsizer** | Aged **55+**; up to **$300,000 each** (not more than the sale proceeds); home in Australia owned **10+ years**; main residence with at least a partial CGT exemption; **exempt from the caps** |

### First Home Super Saver Scheme (FHSSS)

Voluntary concessional or non-concessional contributions (plus associated
earnings) can be **withdrawn for a first home deposit**:

```
Up to $15,000 of contributions a year, $50,000 in total (per person)
Withdrawal: taxed at marginal rates with a 30% tax offset
Owner-occupied residential property only, not investment
Apply through the ATO BEFORE signing a contract
```

Super's tax concessions mean the deposit grows faster than it would saved
outside super.

### In-specie contributions and age limits

**In-specie** means contributing something other than cash, which matters
for SMSFs. A related party can only contribute **ASX-listed and other
securities** or **business real property**, at **market value**, and must
elect concessional (15% tax payable) or non-concessional.

| Member's age | Contributions the fund may accept |
|---|---|
| Under 55 | All, except downsizer |
| 55–67 | All |
| 67–74 | All, but a **work test** (40 hours in 30 consecutive days) or exemption is needed to **deduct** a personal contribution |
| 75+ | Mandated employer contributions and downsizer only |

### Choice of fund, stapling and payday super

Most employees choose their fund. The employer must provide a choice form
within **28 days**. If none is chosen, the employer requests the
employee's **stapled fund** from the ATO, and failing that pays into its
default fund, which then becomes the stapled fund.

**Payday super, from 1 July 2026:** SG must be paid within **7 business
days of each payday**, not quarterly. That makes unpaid super visible in
real time and gives members the compounding sooner.

## Investment

Funds must set an **investment objective and strategy for each option**
(e.g. "outperform CPI by 3% p.a. over 10 years"). The objective is the
performance benchmark, and the strategy must consider **risk and return,
diversification and liquidity**. Options typically include capital stable,
cash, conservative, balanced, growth, high growth, **socially
responsible/sustainable**, single asset classes, DIY options and MySuper.

### Investment restrictions

| Rule | Meaning |
|---|---|
| **Sole purpose test** | Maintained to provide retirement benefits, nothing else |
| **In-house assets** | No more than **5%** of assets in related parties |
| **Borrowing** | Generally not allowed, except in limited circumstances |
| **Loans to members** | Funds can't lend to or financially assist members or relatives |
| **Arm's length** | All transactions on commercial terms |

These apply to every fund but bite hardest on SMSFs. Tutorial 7 Q5 tests
all five.

**Performance test.** Since 2021 APRA compares every MySuper product's net
returns to a tailored benchmark. A fund **lagging by more than 0.5%**
fails; **two consecutive fails** closes it to new members.

## Conditions of release

Reaching **65**; reaching **preservation age (60)** and retiring; reaching
preservation age and starting a **transition to retirement** income
stream; **death**; **terminal illness**; **permanent incapacity**;
**compassionate grounds**.

## Tax

### On benefits

- Withdrawn **after 60: tax free**.
- In **pension phase**, investment earnings and capital gains are **tax
  free**.
- Accessed **before 60** (e.g. compassionate grounds): **20% plus Medicare
  levy**.

Component-by-component rules and the proportioning rule are in note 12.

### On funds

A fund is a taxable entity and calculates tax like an individual, but pays
**no Medicare levy**:

```
Assessable income − allowable deductions = taxable income
× tax rate                                = gross tax
− offsets and rebates                     = net tax
− credits and refundable offsets          = tax payable (refund)
```

| Assessable | Not assessable | Deductible |
|---|---|---|
| Concessional contributions | **Non-concessional contributions** | Management and admin fees |
| Interest, rent, dividends (grossed up for franking) | | Custodian fees, brokerage |
| Capital gains, **one-third discount** if held over a year | | Actuarial costs, insurance premiums in the fund |

| Fund status | Rate |
|---|---|
| Complying fund | **15%** |
| Non-complying fund | 45% |
| Contributions without a TFN | 47% |

**Worked example** (deck, slides 43–45): a fund receives concessional
contributions of $55,000, non-concessional $10,000, fully franked
dividends of $25,000, interest of $5,000, and a $30,000 capital gain on
shares held three years.

```
Concessional contributions                         55 000.00
Franked dividend                                   25 000.00
Franking credit   25 000 × 30/70                   10 714.29
Interest                                            5 000.00
Capital gain      30 000 × 2/3                     20 000.00
Non-concessional  (not assessable)                       —
                                                  ----------
Taxable income                                   115 714.29

Tax at 15%                                        17 357.14
Less franking offset                             (10 714.29)
                                                  ----------
Net tax payable                                    $6 642.86   (slide: $6,643)
```

Verified.

> **Franked dividends are worth more inside super.** The credit is
> refundable and worth 30c against a 15% rate, so it pays down tax on the
> fund's *other* income; in pension phase (0% tax) it's refunded in cash.
> Super's CGT discount is **one-third, not one-half** (trap 16).

### Division 296: large balances

From **1 July 2026**, on **realised** earnings, levied on the
**individual**:

```
Total super balance above $3 million:  extra 15% on the share of earnings
                                        attributable to the excess  (30% total)
Above $10 million:                      a further 10%               (40% total)
Share = (balance − 3m) / balance
```

**Worked example** (deck): balance $4 million, so the excess is 25% of the
balance and 25% of realised earnings is subject to Division 296. On
$200,000 of realised earnings:

```
200 000 × 25% × 15% = $7 500 extra tax
```

The thresholds are indexed. The legislation has passed and applies from
1 July 2026.

## Relationship breakdown and fees

Under the **Family Law Act 1975** and the SIS Act, super can be split on
the breakdown of a marriage or de facto relationship, by agreement or by a
Family Court order, as an **interest split** or a **payment split**.

**Fees** must be disclosed in the PDS. **Direct** fees are linked to a
member's actions (establishment, contribution, switching, withdrawal).
**Indirect** fees cover the annual management fee and everything else not
attributable to one member. The **MER** measures the management fee; the
**ICR** aggregates the MER and other indirect costs.

**Modelling accumulation** needs assumptions about wage growth, returns,
fees, inflation and retirement age, taken year by year because SG is a
percentage of earnings. Moneysmart's retirement planner does it online;
funding retirement is note 12.

## Self-managed super funds

```
Up to 6 members (4 before 1 July 2021)
Members are not each other's employees, unless relatives
Every member is a trustee (or a director of the corporate trustee)
Governed by a trust deed
```

Trustees are responsible and personally liable for everything:
contributions, investment decisions, benefit payments, record-keeping and
compliance. Penalties apply for breaches.

**Why set one up:** control, flexibility (a wider range of assets,
including **business real property**), and tailored estate and tax
strategies. **Generally not suitable below $500,000.**

## Checkpoint

<details><summary>Questions</summary>

1. An employee earns $95,000 plus 12% SG. How much more can they
   contribute concessionally this year without carry-forward?
2. At a 32% marginal rate, what does a $10,000 salary sacrifice cost in
   take-home pay, what arrives in super, and what is the tax saving?
3. A member earning $56,793 makes a $1,000 non-concessional contribution.
   What co-contribution do they receive?
4. You contribute $2,000 to your spouse's super. Your spouse earns
   $38,500. What is your tax offset?
5. A fund realises a $60,000 capital gain on shares held three years.
   What is added to taxable income, and what tax does it cost?
6. A member has $4 million in super and $200,000 of realised earnings.
   What Division 296 tax is due, and who pays it?
7. Name the five investment restrictions and the sole condition that
   lets a 60-year-old access super without starting a pension.
8. Why are non-concessional contributions left out of a fund's taxable
   income?

</details>

<details><summary>Answers</summary>

1. `95 000 × 12% = 11 400` SG, so `32 500 − 11 400 = $21 100`.
2. Take-home cost `10 000 × 0.68 = $6 800`; super receives
   `10 000 × 0.85 = $8 500`; saving `10 000 × 17% = $1 700`.
3. `500 − (56 793 − 49 293) × 0.03333 ≈ $250`
4. Base `3 000 − 1 500 = 1 500`; offset `18% × 1 500 = $270`.
5. `60 000 × 2/3 = $40 000` assessable; tax `40 000 × 15% = $6 000`.
6. `(4m − 3m)/4m = 25%`; `200 000 × 25% × 15% = $7 500`, levied on the
   **individual**, not the fund.
7. Sole purpose test; 5% in-house assets; no borrowing (limited
   exceptions); no loans or financial assistance to members; arm's length
   dealing. Access: reaching preservation age (60) **and retiring** (or
   reaching 65).
8. They come from after-tax money, which has already been taxed.
   Concessional contributions were deducted by someone, so the fund taxes
   them on entry.

</details>

## Summary

- Super = compulsory and voluntary saving for retirement income, under
  the SIS Act, held in trust. APRA regulates large funds, the ATO SMSFs.
- Fund numbers have collapsed (corporate 3,332 → 2) while SMSFs boomed to
  673,384; total assets $4,378b.
- **Concessional:** deductible, 15% on entry, $32,500 cap including SG;
  carry-forward if balance under $500k; Division 293 makes it 30% above
  $250k. **Non-concessional:** after tax, not taxed on entry, $130k a
  year or $390k bring-forward, unavailable once the balance reaches the
  $2.1m transfer balance cap.
- Co-contribution: 50% of NCC up to $500 (income under $49,293; phases out
  at $64,293). Spouse offset: 18% up to $540 (spouse under $37,000; phases
  out at $40,000).
- FHSSS: $15k a year, $50k total, withdrawal at marginal rates less a 30%
  offset, owner-occupied only, apply before signing.
- Investment restrictions: sole purpose, 5% in-house, no borrowing, no
  member loans, arm's length. APRA's test closes MySuper products that
  lag by 0.5% two years running.
- Tax: benefits after 60 tax free; fund at 15% (no Medicare levy),
  one-third CGT discount, NCC not assessable, franking credits refundable.
  Division 296 adds 15% (over $3m) and a further 10% (over $10m) on
  realised earnings from 1 July 2026, charged to the individual.
- SMSF: up to 6 members, all trustees, personally liable; generally not
  worthwhile under $500,000.
