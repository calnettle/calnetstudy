# Topic 8 — Retirement Planning

Week 8. Source: `AYB250 Week 8.pptx`, slides 1–58. Reading: Chapter 9.
Tutorial solutions: note 20.

Covers how much to save and why, the present value approach to a
retirement target, the tax components of super and the proportioning rule,
lump sums versus account-based and non-account-based income streams,
transition to retirement, the re-contribution strategy, groups the system
serves badly, employment termination payments, and housing and aged care in
retirement. Every worked figure was recomputed in Python. One slide
calculates a real rate by subtraction instead of the ratio formula the unit
teaches in Week 4; it is flagged below.

*(Slides 3–7 and 10–11 are charts and images with no extractable text:
the "millionaire by 65" savings chart, lessons for accumulation, lifecycle
theory and life expectancy. They're described only where the speaker
notes support it.)*

## Why plan, and what to plan for

**Lifecycle theory** (slide 7, a chart of income and spending over a
lifetime): income rises through working life and falls at retirement,
while spending is smoother, so saving happens in the middle years to fund
consumption later.

Effective retirement preparation asks:

- How much current consumption will you forgo for future consumption?
- Do you own your home? Any outstanding debt?
- Can you access government benefits (Topic 10)?
- Should you build wealth outside super?
- Will expenses change once you retire?
- What lifestyle do you want?

Planning means **balancing what is desired with what is achievable**.

### How much is "enough"? The ASFA Retirement Standard

The Association of Superannuation Funds of Australia's budgets (March
2026) for households around 65 who **own their home** (single figures
based on women):

| Annual spending | Single | Couple |
|---|---|---|
| **Modest** | $36,434 | $52,473 |
| **Comfortable** | $55,923 | $78,566 |

> **ASFA assumes a paid-off home.** A renter or a retiree with a mortgage
> needs substantially more, and the figures are spending, which can exceed
> after-tax income when capital is being drawn down.

**Sources of retirement income:** part-time work, the age pension, owning
a business, rent from an investment property, and super.

**Three phases of retirement** over a 20–30 year retirement: **active**
(may work part-time; travel, sport, hobbies), **passive** (less active but
self-caring), **support** (moves into aged care).

## The retirement target: present value approach

The lump sum needed at retirement is the present value of the income
stream you want, discounted at a **real** rate over the expected years in
retirement (note 03's ordinary annuity):

```
            1 − (1 + r)^(−n)
PV = PMT × ------------------
                   r

PV  = lump sum needed at retirement
PMT = annual income wanted, in today's dollars
r   = real (inflation-adjusted, net) rate of return
n   = years in retirement (life expectancy − retirement age)
```

Accepting some **longevity risk** (planning for fewer years than life
expectancy) reduces n and the target.

**Worked example** (deck): Robyn is 55, retires at 60, wants $50,000 a
year, has $600,000 in super, life expectancy 86, nominal return 6.88%,
inflation 3%.

```
n = 86 − 60 = 26
Deck: r = 6.88% − 3% = 3.88%

PV = 50 000 × [1 − 1.0388^(−26)] / 0.0388 = $809 690
Shortfall = 809 690 − 600 000 = $209 690 to add over the next five years
```

Verified on the deck's inputs.

> **The deck subtracts inflation; the Week 4 formula divides.** The real
> rate is `(1 + nominal)/(1 + inflation) − 1 = 1.0688/1.03 − 1 = 3.767%`,
> not 3.88% (note 06, "the real rate is a ratio, not a subtraction"). At the exact rate, **PV = $819,820** and
> Robyn's shortfall is **$219,820**, $10,130 more than the slide says.
> Subtraction overstates the real return, which understates the target.
> If an exam question says "adjusted rate of return is 3.88%", use the
> rate given; if it gives nominal and inflation separately, show the ratio
> form and note the approximation.

**What else could you advise Robyn?** Work longer (a smaller n and more
contributions), accept a lower income, use the age pension from 67, use
her remaining concessional cap, add non-concessional contributions, or
start a transition to retirement strategy at 60.

## Super money versus ordinary money

| Ordinary money (outside super) | Super money |
|---|---|
| After-tax money | Concessional taxation |
| Not preserved: accessible any time | Subject to preservation rules |
| Taxed as earned at marginal rates | May be taxed on withdrawal (before 60) |

## Tax components of a super benefit

```
TAX-FREE component          · non-concessional contributions
                            · crystallised pre-July 1983 component

TAXABLE component           = total value − tax-free component
   · taxed element            employer SG, salary sacrifice,
     (taxed in the fund)      personal deductible contributions
   · untaxed element          benefits from an untaxed fund (e.g. some
     (untaxed in the fund)    public sector schemes), part of some
                              life insurance payouts
```

### Taxed element (the usual case)

| Age of member | Lump sum | Income stream |
|---|---|---|
| **60+** | **Tax free** | **Tax free** |
| Under preservation age | Taxed at **20%** | Marginal rates, no offset (15% offset for a disability super benefit) |

### Untaxed element

| Age of member | Lump sum | Income stream |
|---|---|---|
| **60+** | **15%** up to $1,935,000 (untaxed plan cap); **45%** above | Marginal rates with a **10%** offset |
| Under preservation age | **30%** up to $1,935,000; **45%** above | Marginal rates, no offset |

(All plus the Medicare levy where tax applies.)

**Preservation age** was 55 before 2007 and was phased up to 60 for people
born 1960–64. **From 1 July 2024 it is 60 for everyone.**

> **The "preservation age to 59" band no longer exists.** Older material
> taxes people between preservation age and 60 separately. With
> preservation age now 60 for everyone, the only two rows are "60+" and
> "under preservation age", so don't invent a middle row.

### The proportioning rule

Every benefit paid since 1 July 2007 must be drawn **in proportion** to
the member's tax-free and taxable components. You can't choose to take
the tax-free money first.

**Worked example** (deck): Carol, 60, retires on 1 April with $400,000:
$50,000 tax-free and $350,000 **untaxed** in the fund. She takes a
$250,000 lump sum.

```
Tax-free share  = 50 000 / 400 000  = 12.5%  →  250 000 × 12.5% = $31 250
Untaxed share   = 350 000 / 400 000 = 87.5%  →  250 000 × 87.5% = $218 750

Tax (age 60+, untaxed element, under the $1,935,000 cap):
  218 750 × 15% = $32 812.50   (slide: $32,813)
  Medicare levy 218 750 × 2% = $4 375
```

Verified.

> **Check which element it is before you apply "60+ is tax free".** Carol
> is 60, so a *taxed* element would be tax free. Hers is *untaxed* in the
> fund, which is why 15% applies. Tax-free at 60 is a rule for the taxed
> element only.

## Taking the money: lump sums and income streams

**Lump sums** clear debts, fund renovations or replace a car. The risks:
spending the lot, perhaps being unable to re-contribute into the low-tax
environment, and earnings on the remaining balance still taxed at 15%.

### Account-based income stream (account-based pension)

- The member owns the account the income is drawn from.
- Bought only with **super money**.
- **Prescribed minimum** annual payment, **no maximum**.
- Earnings on the balance are **tax free** (exempt current pension
  income).
- **Longevity risk stays with the member.**
- **Commutable** (can be cashed out).
- Capped at the **$2.1 million transfer balance cap**.

| Age | Minimum drawdown | (Halved rate used 2021–23) |
|---|---|---|
| Under 65 | **4%** | 2% |
| 65–74 | **5%** | 2.5% |
| 75–79 | **6%** | 3% |
| 80–84 | **7%** | 3.5% |
| 85–89 | **9%** | 4.5% |
| 90–94 | **11%** | 5.5% |
| 95+ | **14%** | 7% |

**Worked example** (deck): Michael, just 60, has $2.3 million.

```
Pension capped at the TBC:        $2 100 000
Minimum payment  2 100 000 × 4% = $84 000 a year
Earnings on the $2.1m:            tax free
Remaining $200 000 stays in accumulation, earnings taxed at 15%
```

Verified. Also: age 67 on $500,000 → 5% → **$25,000**; age 82 on $300,000
→ 7% → **$21,000**.

### Non-account-based income stream (annuity)

Retirement savings (super **or** ordinary money) buy an income stream from
a provider, who manages the capital. The amount is contracted. For a
**lifetime** stream the **provider bears longevity risk**; for a fixed
term the individual still does. **Not commutable.** On death, the present
value of a fixed term (or a lifetime stream with a guarantee period) goes
to the estate. Can be **reversionary** to a spouse.

Features to decide: fixed or indexed income, fixed term or lifetime,
reversionary or not, residual capital value, guarantee period.

**Deferred annuities** are bought now and start later, e.g. a 65-year-old
man pays $50,000 for about $1,200 a month from 85. Cheaper, because the
money is invested during the deferral; a form of **longevity insurance**.

**Income streams bought with ordinary money** are taxed at marginal rates
less a **deductible amount** (the cost spread over the term or life
expectancy). You won't be asked to calculate it.

| | Account-based | Non-account-based |
|---|---|---|
| Who controls the capital | Member | Provider |
| Longevity risk | Member | Provider (lifetime) |
| Commutable | Yes | No |
| Payment | Minimum set by age, no maximum | Contracted amount |
| Funded by | Super only | Super or ordinary money |

## Transition to retirement (TTR)

Lets a member **draw on super before fully retiring**:

```
Must have reached preservation age (60)
Drawdown: minimum 4%, maximum 10% of the balance
Earnings on TTR assets: taxed at 15%  (the tax-free status was removed 1 July 2017)
```

**Worked example 1** (deck): John, 60, earns $100,000 with $650,000 in
super. He cuts to 60% of his wage and draws the 4% minimum.

| Income | No TTR | With TTR |
|---|---|---|
| Gross salary | $100,000 | $60,000 |
| Add pension (4%, tax free at 60) | — | $26,000 |
| Taxable income | $100,000 | $60,000 |
| Tax ($4,020 + 30c over $45,000) | $20,520 | $8,520 |
| Medicare levy | $2,000 | $1,200 |
| **Net income** | **$77,480** | **$76,280** |

| Super | No TTR | With TTR |
|---|---|---|
| SG (12%) | $12,000 | $7,200 |
| Contributions tax (15%) | ($1,800) | ($1,080) |
| Pension paid out | — | ($26,000) |
| **Change in super** | **+$10,200** | **−$19,880** |

John works 3 days a week for $1,200 less a year, but his super falls by
$19,880 instead of growing by $10,200.

**Worked example 2** (deck): Jane, 60, earns $100,000 with $311,025 in
super, and wants to boost super before retiring at 65. SG is $12,000, so
she salary-sacrifices the remaining **$20,500** of her $32,500 cap and
draws the 4% minimum ($12,441) to replace her pay.

| Income | No TTR | With TTR |
|---|---|---|
| Gross salary | $100,000 | $100,000 |
| Less salary sacrifice | — | ($20,500) |
| Add pension (tax free) | — | $12,441 |
| Taxable income | $100,000 | $79,500 |
| Tax | $20,520 | $14,370 |
| Medicare levy | $2,000 | $1,590 |
| **Net income** | **$77,480** | **$75,981** |

| Super | No TTR | With TTR |
|---|---|---|
| SG | $12,000 | $12,000 |
| Salary sacrifice | — | $20,500 |
| Contributions tax (15%) | ($1,800) | ($4,875) |
| Pension paid out | — | ($12,441) |
| **Change in super** | **+$10,200** | **+$15,184** |
| **Net income + change in super** | **$87,680** | **$91,165** |

All verified. Jane is **$3,485 better off** overall: she recycles salary
taxed at 32% into super taxed at 15%, funded by a tax-free pension.

> **The two TTR examples do opposite jobs.** John uses it to **work less
> for similar income** (super shrinks). Jane uses it to **stay at work and
> pump up super** (super grows). An exam question tells you which by the
> client's goal. And the pension is tax free only because both are 60:
> it's the age rule, not a TTR concession.

## The re-contribution strategy

Withdraw super (a condition of release must be met) and put it back as a
**non-concessional** contribution. That converts taxable component into
**tax-free** component, which:

- reduces tax on death benefits paid to **non-dependants**, such as adult
  children (note 13), and
- can help when spouses are different ages.

It is limited by the non-concessional cap: **$130,000 a year, or $390,000
under the bring-forward rule.** Tutorial 8 Q6 works a full example.

## Who the system serves badly

| Group | Why |
|---|---|
| **Women** | Retire with about **38.5% less** super: less time in the workforce, lower pay, and super is a proportion of earnings |
| **First Nations Australians** | Median weekly income ~23% lower; access barriers; family structures not recognised; lower life expectancy |
| **Self-employed** | ~15% of the workforce, outside compulsory SG; ~19% have no super. The business may fund retirement if it (or its assets) can be sold |
| **Immigrants** | Language and cultural barriers, preference for property, different home-country schemes, fewer contribution years |

**Self-employed SMSF strategy:** an SMSF may acquire **business real
property** from a related party beyond the 5% in-house limit, if used
wholly for business, owned on commercial terms and leased back to the
member; the rent becomes fund investment income.

**Involuntary retirement** (redundancy, ill health, caring) forces many to
retire earlier than planned.

## Employment termination payments (ETPs)

ETPs (defined in ITAA 1997) include payments in lieu of notice, for unused
sick leave, golden handshakes, severance and redundancy. They **don't
include unused leave** (annual or long service).

```
Genuine redundancy / early retirement scheme tax-free amount:
    $13,598 + $6,801 per complete year of service
Concessional tax up to the $270,000 limit (plus Medicare levy):
    15%  at preservation age (60) or older
    30%  under preservation age
Above the limit: 45% plus Medicare levy
```

**Worked example:** genuine redundancy after 8 complete years.

```
Tax-free amount = 13 598 + 6 801 × 8 = $68 006
```

## Housing and aged care

**Housing** needs a plan: the home may not suit (stairs, remote), so the
options are **downsizing**, special residences (over-55s retirement
villages, granny flats) or aged care (low-level hostels, high-level
nursing homes).

**Downsizing.** Many elderly homeowners are **asset rich, income poor**.
The family home is excluded from the pension assets test, and selling the
home is CGT-free, but downsizing can be hard psychologically and may not
free much cash. (The downsizer super contribution is in note 11.)

**Reverse mortgages** (home equity conversion loans) let owners borrow
against their equity. Since 2012 every reverse mortgage must carry a
**no negative equity guarantee**. The government's **Home Equity Access
Scheme** is an alternative: age pension age required (but not receipt of
the pension), fortnightly amount, lump sum or both, interest **3.95%
compounded fortnightly**.

**Aged care fees** (new system, November 2025):

| Fee | Amount |
|---|---|
| Basic daily fee | 85% of the age pension, **$66.80 a day** |
| Hotelling contribution (means tested) | Up to **$22.15 a day** |
| Non-clinical care contribution (means tested) | Capped at **$107.32 a day**; lifetime cap **$137,917.01** or four years, whichever comes first |
| Higher everyday living fee | Optional, for a higher standard of services |

## Too much super?

The concessions are meant to fund retirement, not intergenerational wealth
transfer. The system caps them with the **$2.1 million transfer balance
cap** and **Division 296** (note 11). Treasury's Retirement Income Review
found **about 90% of retirees withdraw only the minimum**, often leaving
large balances untouched: fear of outliving savings leads to a poorer
retirement.

## Checkpoint

<details><summary>Questions</summary>

1. A client wants $45,000 a year for 25 years in retirement at a 3.5%
   real return. What lump sum is needed?
2. Nominal return 7%, inflation 2.5%. Exact real rate, and the
   subtraction approximation?
3. A 67-year-old starts an account-based pension with $500,000. What is
   the minimum annual payment?
4. A 61-year-old with a $300,000 balance ($60,000 tax-free, $240,000 taxed
   element) takes a $100,000 lump sum. Components, and tax?
5. What's the tax-free amount of a genuine redundancy payment after 8
   complete years of service?
6. Give two differences between an account-based and a lifetime
   non-account-based income stream.
7. Why did the TTR make Jane better off but John's super fall?
8. What does the re-contribution strategy achieve, and what caps it?

</details>

<details><summary>Answers</summary>

1. `45 000 × [1 − 1.035^(−25)] / 0.035 = $741 668`
2. Exact `1.07/1.025 − 1 = 4.39%`; approximation `7 − 2.5 = 4.5%`.
3. `500 000 × 5% = $25 000` (age 65–74 band).
4. Proportions: tax-free `60/300 = 20%` → **$20,000**; taxable (taxed
   element) **$80,000**. Tax: **nil**, since the member is 60+ and the
   taxable part is the taxed element.
5. `13 598 + 6 801 × 8 = $68 006`
6. Any two: account-based is commutable, the lifetime annuity is not;
   longevity risk is the member's for account-based and the provider's for
   a lifetime annuity; account-based has a minimum but no maximum payment
   while the annuity pays a contracted amount; account-based can only be
   bought with super.
7. Jane kept her full salary, salary-sacrificed $20,500 (taxed at 15%
   instead of 32%) and replaced the cash with a tax-free pension, so tax
   fell. John cut his hours, so SG fell and the $26,000 pension came out
   of super to replace lost wages.
8. It converts taxable component into tax-free component (less tax on
   death benefits to non-dependants). Capped by the non-concessional cap:
   $130,000 a year or $390,000 bring-forward.

</details>

## Summary

- ASFA comfortable budget (home owners, March 2026): $55,923 single,
  $78,566 couple. Modest: $36,434 and $52,473.
- Target lump sum = PV of the income stream at a **real** rate:
  `PMT × [1 − (1+r)^−n]/r`. Robyn: $809,690 on the deck's subtracted
  rate; **$819,820** at the exact real rate of 3.767%.
- Components: tax-free (NCC, pre-1983) and taxable (taxed or untaxed
  element). Taxed element at 60+: tax free. Untaxed element at 60+: 15%
  lump sum up to $1,935,000, marginal less 10% as a stream. Preservation
  age is 60 for everyone.
- Proportioning rule: every benefit carries both components pro rata
  (Carol: $31,250 tax-free, $218,750 untaxed, tax $32,813 plus $4,375
  Medicare).
- Account-based pension: member-owned, tax-free earnings, minimum 4% under
  65 rising to 14% at 95+, $2.1m cap, commutable. Annuity: provider-held,
  longevity risk transferred, not commutable.
- TTR at 60: 4–10% drawdown, earnings still taxed at 15%. Work less
  (John) or salary-sacrifice more (Jane, +$3,485).
- Re-contribution converts taxable to tax-free, capped at $130k/$390k.
- ETPs: redundancy tax-free amount $13,598 + $6,801 a year; 15%/30% up
  to $270,000; 45% above.
- Housing: downsizing (CGT-free, home exempt from assets test), reverse
  mortgages with a no negative equity guarantee, HEAS at 3.95%. Aged care
  daily fee $66.80.
