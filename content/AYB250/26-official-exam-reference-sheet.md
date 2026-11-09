# The Official Exam Reference Sheet: What Each Line Is For

<!-- notation:start -->
<details class="notation"><summary>Notation key — what the symbols in this note mean</summary>

| Symbol | Means |
|---|---|
| `NPV` | Net present value — PV of all inflows minus PV of all outflows. Positive = worth doing |
| `IRR` | Internal rate of return — the rate that makes NPV = 0 |
| `CAPM` | Capital asset pricing model — E(R) = R_f + β(R_m − R_f) |
| `P/E` | Price-to-earnings ratio — share price ÷ EPS |
| `LVR` | Loan-to-value ratio — loan ÷ value of the asset securing it |
| `CGT` | Capital gains tax |
| `LHC` | Lifetime health cover loading — higher premiums for joining private hospital cover late |
| `HECS-HELP` | The student loan, repaid through the tax system once income passes a threshold |
| `LITO` | Low income tax offset |
| `SG` | Superannuation guarantee — the compulsory employer contribution |
| `NCC` | Non-concessional contribution — after-tax money put into super |
| `TTR / TRIS` | Transition to retirement (income stream) — drawing a pension while still working |
| `SMSF` | Self-managed super fund |
| `ETP` | Employment termination payment |
| `ATO` | Australian Taxation Office |

[Full AYB250 notation key →](#/AYB250/99-notation-key)

</details>
<!-- notation:end -->

**This is the sheet you'll be handed in the AYB250 exam** (`Reference
Sheet.docx`, found 9 November 2026). It has **no formulas on it**. It's a
page of **rates and thresholds**. So the sheet gives you the numbers, and
you have to know which calculation each number goes into. That's what
this note is for.

How to read each section:

- **What it is:** the line in plain English.
- **Use it when:** the words in a question that should send you to it.
- **How:** the working, with a small example.
- **Taught in:** the note to go back to.

Every figure on the sheet was checked against notes 04–13 and 25. **They
all match**, so nothing you've learnt needs changing.

> **The quick version.** The sheet covers: income tax, super fund tax,
> tax on super withdrawals (alive and on death), the contribution caps
> and offsets, pension minimums, and the age pension tests. It does
> **not** cover: TVM, the planning ratios, LITO, HECS, the Medicare levy
> surcharge, franking, the individual CGT discount, property, gearing,
> insurance, or the co-contribution and spouse offset *working*. Those
> come out of your head. See [the list at the end](#/AYB250/26-official-exam-reference-sheet/not-on-the-sheet-memorise-these).

---

## 1. Marginal tax rates (residents)

| Taxable income | Tax payable |
|---|---|
| 0 – $18,200 | Nil |
| $18,201 – $45,000 | 15c per $1 over $18,200 |
| $45,001 – $135,000 | $4,020 + 30c per $1 over $45,000 |
| $135,001 – $190,000 | $31,020 + 37c per $1 over $135,000 |
| $190,001+ | $51,370 + 45c per $1 over $190,000 |

**What it is:** the income tax an Australian resident pays on their
taxable income. The $4,020, $31,020 and $51,370 are the tax already paid
on every band below.

**Use it when:** any question says "calculate tax payable", "net
income", "after-tax", "what does the client save in tax", or gives a
salary and asks what's left.

**How:** `tax = base + (income − bottom of the band) × rate`, then add
Medicare (2%, in section 4), then take off any offsets.

```
Taxable income $80,000
Tax       = 4,020 + (80,000 − 45,000) × 0.30 = 4,020 + 10,500 = $14,520
Medicare  = 80,000 × 2%                                        =  $1,600
Total                                                          = $16,120
```

**The second use: the marginal rate for decisions.** When a question asks
what a deduction, salary sacrifice or extra income is worth, use the rate
of the band the client is in **plus 2% Medicare**. At $80,000 that's
**32%**: a $1,000 deduction saves $320.

**Taught in:** [Topic 3a](#/AYB250/04-topic-3-income-tax-and-deductions).
Traps [4](#/AYB250/24-formula-sheet-and-exam-traps/4-applying-a-marginal-rate-to-the-whole-income)
and [17](#/AYB250/24-formula-sheet-and-exam-traps/17-whole-of-income-tax-applied-where-marginal-tax-was-meant):
never apply the top rate to the whole income.

---

## 2. Superannuation fund tax rates

| Income | Rate |
|---|---|
| Low tax component | 15% |
| No-TFN contributions | 47% |
| Non arm's length income | 45% |
| Non-complying fund | 45% |
| Capital gains discount (if applicable) | One third |

**What it is:** the tax the **fund** pays on what comes in, not the tax
the member pays.

| Line | Plain English | Use it when |
|---|---|---|
| **Low tax component 15%** | A normal (complying) fund pays 15% on concessional contributions and on its earnings: interest, rent, dividends, gains | "Calculate the fund's tax", an SMSF tax question, or "what does salary sacrifice save" (contributions taxed 15% instead of the marginal rate) |
| **No-TFN contributions 47%** | If the member hasn't given the fund their tax file number, concessional contributions are taxed at 47% | A question mentions a member who "hasn't provided a TFN" |
| **Non arm's length income 45%** | Income from a deal not done at market terms, e.g. an SMSF renting its property to a member's business at half the market rent | An SMSF dealing with related parties, below-market deals |
| **Non-complying fund 45%** | A fund that breaks the rules loses the concession: all its income taxed at 45% | "The ATO made the fund non-complying" |
| **CGT discount one third** | A fund that has held an asset for **more than 12 months** pays tax on only **two thirds** of the gain | A fund sells shares or property it has held over a year |

**How (fund tax):**

```
Taxable income = concessional contributions + interest + rent + dividends
               + franking credits + capital gains × 2/3 (if held > 12 months)
               − deductions                (non-concessional contributions are NOT income)
Tax            = taxable income × 15% − franking credits
```

```
Fund sells shares held 3 years for a $30,000 gain
Taxable gain = 30,000 × 2/3 = $20,000      Tax = 20,000 × 15% = $3,000
(an effective 10% on the gain)
```

**Taught in:** [Topic 7](#/AYB250/11-topic-7-superannuation-and-smsfs),
worked in [Tutorial 7](#/AYB250/20-tutorial-7-solutions) (the Williams
SMSF). Traps
[16](#/AYB250/24-formula-sheet-and-exam-traps/16-supers-cgt-discount-is-one-third-not-one-half)
and [30](#/AYB250/24-formula-sheet-and-exam-traps/30-non-concessional-contributions-arent-fund-income):
super gets a third, not a half; non-concessional money isn't fund income.

---

## 3. Tax on super withdrawals (the member alive)

These two tables are for when the member takes money **out**: as a
**lump sum** (one payment) or an **income stream** (a pension). They only
apply to the **taxable component**. The **tax-free component** is always
tax free.

**First split the benefit.** Every withdrawal carries the tax-free and
taxable components **in proportion** (the proportioning rule, trap
[33](#/AYB250/24-formula-sheet-and-exam-traps/33-the-proportioning-rule-no-cherry-picking)).
Then ask: is the taxable part **taxed** or **untaxed** in the fund?

- **Taxed element:** the fund already paid 15% contributions tax on it.
  Almost every normal fund.
- **Untaxed element:** the fund never paid tax on it. Mostly old
  government (public sector) schemes.

### Taxed in the fund

| Age of member | Lump sum | Income stream |
|---|---|---|
| Preservation age (60) and over | Tax free | Tax free |
| Under preservation age | Taxable component taxed at **20%** + Medicare | Marginal rates + Medicare, **no offset** (15% offset only for a disability super benefit) |

**Use it when:** a client "retires at 62 and takes a lump sum", "starts an
account-based pension", or "wants to withdraw" from an ordinary fund.

**How:** check the age first. **Preservation age is 60 for everyone now**,
so 60 and over with a taxed element = **no tax at all**, lump sum or
pension. That's the answer to most retirement questions.

```
A 58-year-old (released on disability) takes $50,000, all taxable, taxed element
Lump sum tax = 50,000 × (20% + 2%) = $11,000
The same $50,000 at age 61                               = $0
```

### Untaxed in the fund

| Age of member | Lump sum | Income stream |
|---|---|---|
| 60+ | **15%** + Medicare up to $1,935,000; **45%** + Medicare above | Marginal rates + Medicare **less a 10% offset** |
| Under preservation age | **30%** + Medicare up to $1,935,000; **45%** + Medicare above | Marginal rates + Medicare, no offset |

**Use it when:** the question says "untaxed element", "public sector
scheme", or "the fund has not paid contributions tax".

**How:** the $1,935,000 is the **untaxed plan cap**: the lower rate applies
up to it, 45% above it.

```
Carol, 60+, $250,000 lump sum, 12.5% tax-free, rest untaxed element
Tax-free  = 250,000 × 12.5% = $31,250 (no tax)
Taxable   = $218,750 × 15% = $32,812.50   + Medicare 2% = $4,375
```

**Taught in:** [Topic 8](#/AYB250/12-topic-8-retirement-planning). Trap
[32](#/AYB250/24-formula-sheet-and-exam-traps/32-taxable-component-doesnt-mean-taxed):
"taxable component" doesn't mean it's taxed. Check age **and** element.

---

## 4. Death benefits: when the member dies

Super doesn't automatically go through the will. The trustee pays it as
a **death benefit**, and the tax depends on **who receives it**.

- **Dependant** (for tax): spouse or former spouse, a child **under 18**
  (or financially dependent), an interdependant.
- **Non-dependant:** most often an **adult child**, financially
  independent.

### Lump sums

| Recipient | Tax-free component | Taxed element | Untaxed element |
|---|---|---|---|
| Dependant | Tax free | Tax free | Tax free |
| Non-dependant | Tax free | **15%** + Medicare | **30%** + Medicare |

**Use it when:** "Mum died and left her super to her 28-year-old son",
estate planning questions, "how much does the beneficiary receive?"

```
Mira, 28, financially independent, receives $125,000, all taxed element
Tax = 125,000 × (15% + 2%) = $21,250        She receives $103,750
Paid to the spouse instead                  = $0 tax
```

### Income streams (death benefit pensions)

| Age of deceased **and** recipient | Taxed element | Untaxed element |
|---|---|---|
| **Either** is at least 60 | Tax free | Marginal rates + Medicare **less 10% offset** |
| **Both** under 60 | Marginal rates + Medicare **less 15% offset** | Marginal rates + Medicare, no offset |

**Use it when:** a spouse takes over a pension (a **reversionary**
pension) or the question asks "lump sum or pension for the surviving
spouse?"

**How:** only a **dependant** can take a death benefit as a pension.
Look at both ages: if either the person who died or the person receiving
it is 60+, the taxed element is tax free.

**Taught in:** [Topic 9](#/AYB250/13-topic-9-estate-planning). Trap
[34](#/AYB250/24-formula-sheet-and-exam-traps/34-an-adult-child-can-receive-super-but-pays-tax-on-it):
an adult child **can** receive the super (SIS dependant) but **pays tax**
on it (not a tax dependant).

---

## 5. Other rates and thresholds

| Line | Figure | What it's for | Use it when / how |
|---|---|---|---|
| **Concessional contribution cap** | $32,500 | The most that can go into super **before tax** each year: SG + salary sacrifice + personal deductible contributions **added together** | "How much more can she salary sacrifice?" → 32,500 − SG already paid. Unused cap can be carried forward 5 years if the balance is under $500,000 (not on the sheet) |
| **Non-concessional contribution cap** | $130,000 a year, or $390,000 over 3 years | The most **after-tax** money you can put in. $390,000 is the **bring-forward**: three years' cap used at once | Inheritances, house sale proceeds, the **re-contribution strategy**. Not available once the total super balance hits $2.1m |
| **Medicare levy** | 2% | Added on top of income tax, **and** on top of the super rates marked * | Every personal tax calculation, and every "* Plus Medicare Levy" line on this sheet |
| **Superannuation guarantee** | 12% | What the employer must pay into super on the employee's salary | SG = salary × 12%. A package **"including super"**: salary = package ÷ 1.12 (trap [28](#/AYB250/24-formula-sheet-and-exam-traps/28-including-super-means-divide-by-112)) |
| **Division 293 threshold** | $250,000 | High earners pay an **extra 15%** on concessional contributions, so 30% instead of 15% | Income + concessional contributions over $250,000. Course version: contributions taxed 30%. (Strictly, the extra 15% only hits the part over the line: on $240,000 income + $32,500 contributions, it's 15% × $22,500 = $3,375) |
| **Pension transfer balance cap** | $2.1 million | The most you can move into a **retirement-phase pension**, where earnings are tax free | A client with $2.5m wanting a pension: $2.1m into the pension, $0.4m stays in accumulation (earnings taxed 15%) or comes out |
| **Co-contribution lower threshold** | $49,293 | Below this income, the government pays the **full** co-contribution | See the working below |
| **Co-contribution higher threshold** | $64,293 | At or above this, **nothing** | |
| **Co-contribution rate** | 50% up to $500 | Government pays 50c per $1 of **non-concessional** contribution, max $500 (reached at $1,000) | |
| **Spouse offset low-income threshold** | $37,000 | The **receiving spouse's** income below this → full offset available | See the working below |
| **Spouse offset high-income threshold** | $40,000 | Spouse earns $40,000+ → no offset | |
| **Spouse contribution tax offset** | 18% up to $540 | The **contributing** spouse cuts their own tax by 18% of what they put in, max $540 (at $3,000) | |

### The two offsets, worked: the sheet gives the numbers, not the method

**Government co-contribution** (low earner puts after-tax money in their
own super):

```
Co-contribution = 500 − (income − 49,293) × 0.03333     (also capped at 50% of the NCC)
Income $55,000, NCC $1,000:  500 − 5,707 × 0.03333 = 500 − 190.23 = $309.77
```

The 0.03333 comes from the two thresholds: $500 ÷ ($64,293 − $49,293) =
$500 ÷ $15,000.

**Spouse contribution tax offset** (you put after-tax money into your
low-earning spouse's super):

```
Offset = 18% × the lesser of [ contribution,  3,000 − (spouse income − 37,000) ]
Spouse earns $38,500, you contribute $3,000:  3,000 − 1,500 = 1,500  → 18% = $270
Spouse earns under $37,000, you contribute $3,000                   → $540 (the max)
```

**The difference to say in the exam** (trap
[29](#/AYB250/24-formula-sheet-and-exam-traps/29-co-contribution-and-spouse-offset-test-different-peoples-income)):
co-contribution tests the **member's own** income and is paid **into
their super**; the spouse offset tests the **spouse's** income and cuts
the **contributor's tax**. Both need a non-concessional contribution.

**Taught in:** [Topic 7](#/AYB250/11-topic-7-superannuation-and-smsfs);
Jordan and Jane in [Tutorial 7](#/AYB250/20-tutorial-7-solutions).

---

## 6. Account-based pension minimum payments

| Age | Minimum each year |
|---|---|
| Under 65 | 4% |
| 65–74 | 5% |
| 75–79 | 6% |
| 80–84 | 7% |
| 85–89 | 9% |
| 90–94 | 11% |
| 95+ | 14% |

**What it is:** once super becomes an **account-based pension** (ABP), the
law forces you to take at least this percentage of the balance out each
year, so super gets spent in retirement rather than kept as a tax-free
estate.

**Use it when:** "What's the minimum she must draw?", "Can he take only
$20,000 this year?", or a transition-to-retirement (TTR) question (TTR
minimum is also 4%, max 10%, not on the sheet).

**How:** balance at **1 July** × the percentage for the client's age.

```
Michael, 60, $2.1m ABP                 → 2,100,000 × 4% = $84,000 minimum
A 67-year-old with $500,000            →   500,000 × 5% = $25,000 minimum
```

There's **no maximum** on an ordinary ABP; you can draw more. Earnings
inside it are tax free (up to the $2.1m transfer balance cap).

**Taught in:** [Topic 8](#/AYB250/12-topic-8-retirement-planning).

---

## 7. The age pension (sections 7–10 all work together)

The next four tables are **one calculation**: the Week 10 means tests.
Don't use any one of them on its own.

```
Step 1  Maximum pension            (section 7)
Step 2  Assets test → a pension    (section 8)
Step 3  Income test → a pension    (sections 9 and 10)
Step 4  The client gets the LOWER of steps 2 and 3
```

### Age pension rates

| Status | Maximum per fortnight |
|---|---|
| Single | $1,237.70 |
| Couple | $933.00 each, $1,866.00 combined |

**What it is:** the **full** pension before any test reduces it. It
already includes the pension supplement and energy supplement. Pension
age is **67** (not on the sheet).

**Use it when:** the starting point of every pension calculation. ×26 for
a year: single **$32,180.20**, couple **$48,516**.

---

## 8. Assets test

| | Full pension up to: homeowner | non-homeowner | Part pension stops at: homeowner | non-homeowner |
|---|---|---|---|---|
| Single | $333,000 | $600,000 | $745,750 | $1,012,750 |
| Couple (combined) | $499,000 | $766,000 | $1,121,000 | $1,388,000 |

**Taper:** pension falls **$3.00 a fortnight for every $1,000** over the
full-pension limit.

**What it is:** the pension is cut back the more **assets** you own. The
**home is exempt**, which is why homeowners have the lower limit
(they've already got a big asset that isn't counted).

**Use it when:** any age pension question. Always.

**How:**

```
Assessable assets = everything EXCEPT the home (cars, contents, bank, shares,
                    managed funds, investment property, super if over pension age)
Pension = maximum − (assessable assets − limit) ÷ 1,000 × $3
```

```
Harry, 67, single homeowner: car 55,000 + contents 10,000 + bank 44,000
  + managed funds 110,000 + shares 45,000 + super 220,000 = $484,000
Over $333,000 by 151,000  → 151 × $3 = $453
Pension = 1,237.70 − 453.00 = $784.70 a fortnight
```

**The "part pension" column** is where the pension reaches **zero**. Use it
as a quick check: assets above it = no pension, no need to calculate.

---

## 9. Income test

| | Full pension up to (per fortnight) | Part pension stops at |
|---|---|---|
| Single | $226 | $2,701.40 |
| Couple (combined) | $396 | $4,128.00 |

**Taper:** pension falls **50 cents for every $1** over the limit (single);
**25 cents each** for a couple (so 50c combined).

**What it is:** the pension is also cut back the more **income** you have.
For financial assets, the income isn't what they really earn: it's the
**deemed** income (section 10).

**How:**

```
Fortnightly income = (deemed income + other income such as wages, net rent) ÷ 26
Pension            = maximum − (fortnightly income − limit) × 0.5
```

**Trap:** deemed income comes out **annual**. **Divide by 26** before you
compare it with the fortnightly limits.

---

## 10. Deeming rates

| | 1.75% on | 3.75% on |
|---|---|---|
| Single | the first $66,800 of financial investments | anything above $66,800 |
| Couple (combined) | the first $110,600 | anything above $110,600 |

**What it is:** Centrelink **assumes** your financial investments earn
these rates, whatever they really earn. That assumed income goes into the
income test.

**Use it when:** step 3 of every pension question.

**How:** only **financial** assets are deemed: bank, shares, managed
funds, super over pension age, income streams, loans. **Not** the car,
contents or home.

```
Harry's financial assets: 44,000 + 110,000 + 45,000 + 220,000 = $419,000
Deemed = 66,800 × 1.75% + 352,200 × 3.75% = 1,169.00 + 13,207.50 = $14,376.50 a year
÷ 26 = $552.94 a fortnight      over $226 by 326.94
Reduction = 326.94 × 0.5 = 163.47      Pension = 1,237.70 − 163.47 = $1,074.23

Assets test $784.70  vs  income test $1,074.23  →  Harry gets $784.70 (assets tested)
```

**Taught in:** [Week 10 social security](#/AYB250/25-week-10-social-security),
with all four case studies (Harry, John and Margaret, Robert and Susan,
and the re-contribution strategy).

---

## Which line for which question

A one-glance index. Find the words in the question, go to the line.

| The question mentions… | Go to |
|---|---|
| Salary, net income, tax payable, tax saving | §1 marginal rates + §5 Medicare 2% |
| A fund's tax, SMSF income, contributions tax | §2 low tax component 15%, CGT discount ⅓ |
| No TFN, related-party deal, fund broke the rules | §2 47% / 45% / 45% |
| Retiring and taking money out of super | §3 taxed element (60+ = tax free) |
| Public sector scheme, untaxed element | §3 untaxed table |
| Someone died, super to a spouse or adult child | §4 death benefit lump sums |
| Surviving spouse takes over the pension | §4 death benefit income streams |
| Salary sacrifice, how much more can go in before tax | §5 concessional cap $32,500 |
| Inheritance or house sale into super, re-contribution | §5 non-concessional cap $130k / $390k |
| Package "including super" | §5 SG 12% (÷ 1.12) |
| Very high income + super | §5 Division 293 |
| Big balance moving to a pension | §5 transfer balance cap $2.1m |
| Low earner putting after-tax money into super | §5 co-contribution |
| Putting money into a low-earning spouse's super | §5 spouse offset |
| Minimum pension drawdown | §6 ABP table |
| Age pension, Centrelink, means test | §7 → §8 → §9 → §10, then the lower result |

---

## Not on the sheet: memorise these

Everything below is examinable and **not** printed on the reference
sheet. All of it is on the [formula sheet and traps note](#/AYB250/24-formula-sheet-and-exam-traps).

| Topic | You must bring it | Where |
|---|---|---|
| 2 | The **four ratios** (net worth, liquidity, savings, debt service) and what goes in each | [Ratios](#/AYB250/24-formula-sheet-and-exam-traps/the-four-planning-ratios) |
| 2 | **All TVM**: simple and compound interest, effective annual rate, annuity PV and FV, annuity due, NPV, IRR interpolation | [TVM](#/AYB250/24-formula-sheet-and-exam-traps/time-value-of-money) |
| 3 | **LITO** ($700 tapering, nil at $66,667) · Medicare **shade-in** and the **Medicare levy surcharge** · **HECS-HELP** rates · **non-resident** rates · standard deduction $1,000 · tools under $300 | [2026-27 rates](#/AYB250/24-formula-sheet-and-exam-traps/2026-27-rates-from-the-part-a-template) and [Week 3](#/AYB250/24-formula-sheet-and-exam-traps/deductions-offsets-and-investment-tax-week-3) |
| 3 | **Franking credit** = dividend × 30/70 · individual **CGT discount 50%** (the sheet only gives super's ⅓) and the netting order · negative gearing dates | [Week 3](#/AYB250/24-formula-sheet-and-exam-traps/deductions-offsets-and-investment-tax-week-3) |
| 4 | Real rate by division · discount securities · bond price · CAPM · Sharpe · P/E · investor profiles | [Investments](#/AYB250/24-formula-sheet-and-exam-traps/investments-week-4) |
| 5 | Rental property schedule · cap rate · loan repayment · gearing ratio vs LVR · margin call | [Property](#/AYB250/24-formula-sheet-and-exam-traps/property-and-leverage-week-5) |
| 6 | Life cover (multiple and needs) · income protection 70% · Medicare gap 85% · LHC loading 2% a year over 30 | [Insurance](#/AYB250/24-formula-sheet-and-exam-traps/insurance-week-6) |
| 7 | **Co-contribution and spouse offset working** (above) · carry-forward under $500,000 · Division 296 ($3m / $10m) · FHSSS · downsizer | [Super](#/AYB250/24-formula-sheet-and-exam-traps/superannuation-week-7) |
| 8 | **Retirement target** PV with a real rate · TTR 4–10% · ETPs and redundancy · proportioning | [Retirement](#/AYB250/24-formula-sheet-and-exam-traps/retirement-planning-week-8) |
| 9 | Queensland intestacy ($150,000 first, then the fractions) · CGT on inherited assets | [Estate](#/AYB250/24-formula-sheet-and-exam-traps/estate-planning-week-9) |
| 10 | Pension age 67 · the home is exempt · gifting limits **$10,000 a year, $30,000 over 5 years** · younger spouse's accumulation super isn't counted | [Week 10](#/AYB250/25-week-10-social-security) |

> **Where the sheet saves you most:** Topics 7, 8, 9 and 10. Every cap,
> rate and threshold for super, withdrawals, death benefits and the age
> pension is printed. Spend your memory on the **method** (which table,
> which order, the lower of the two tests), not the numbers.
>
> **Where it saves you nothing:** Topics 2, 4, 5 and 6. TVM, ratios,
> property and insurance are all formulas, and none are on it.

## Say It Back

<details><summary>1. A 63-year-old takes a $200,000 lump sum from an ordinary industry fund. Tax?</summary>

**Nil.** Ordinary fund = taxed element. 60+ (preservation age) = tax free,
lump sum or pension.
</details>

<details><summary>2. Same $200,000, but paid on death to his 30-year-old financially independent daughter. Tax?</summary>

She's a non-dependant. Taxed element at 15% + 2% Medicare = **$34,000**
(assuming it's all taxable component).
</details>

<details><summary>3. Earning $100,000 with $12,000 of SG. How much more can go in as salary sacrifice?</summary>

Concessional cap $32,500 − $12,000 = **$20,500** (ignoring any
carry-forward).
</details>

<details><summary>4. Single homeowner, $533,000 of assessable assets. Assets-test pension?</summary>

Over $333,000 by $200,000 → 200 × $3 = $600. 1,237.70 − 600 =
**$637.70** a fortnight.
</details>

<details><summary>5. Which pension figure does the client get, and why?</summary>

The **lower** of the assets-test and income-test results. Both tests
apply; the one giving less pension is the binding test.
</details>

<details><summary>6. The fund sells an asset held 2 years for a $60,000 gain. Fund tax on it?</summary>

60,000 × ⅔ = 40,000 × 15% = **$6,000**.
</details>

<details><summary>7. A 75-year-old has $800,000 in an account-based pension. Minimum this year?</summary>

75–79 → 6%. 800,000 × 6% = **$48,000**.
</details>
