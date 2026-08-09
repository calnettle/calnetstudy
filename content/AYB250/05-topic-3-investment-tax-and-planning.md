# Topic 3 — Investment Tax and Planning

Week 3, second half. Source: `AYB250 Week 3.pptx`, slides 34–77. Reading:
Chapter 3.

Covers how each type of investment return is taxed, capital gains tax
(current rules **and** the rules due to start 1 July 2027), tax-effective
structures, negative gearing, salary packaging and a short introduction to
FBT and GST. Note 04 covers the income tax waterfall, deductions, Medicare
and offsets this all sits on top of.

Every worked figure below was recomputed. The CGT case study checks out
completely; the case study's own **tax payable** figures rest on a
simplification worth flagging, detailed below.

## How investment returns are taxed

An investment return is either **income** (received while you hold the
asset) or a **capital gain or loss** (realised when you sell it).

| Investment | Income form |
|---|---|
| Fixed-income investment | Interest |
| Investment property | Rental income |
| Shares | Dividends |

### Interest

Assessable income, taxed at the individual's **marginal rate**. A jointly
held account is assumed split equally — each holder pays their own marginal
rate on their half. Allowable deductions are narrow: account-keeping fees,
and advice fees for *managing* the investment (not the initial advice to
set it up).

> With savings rates around 5.0% p.a. and inflation around 3.8% at the time
> of the lecture, this is the same real-return arithmetic as note 03's tax
> and inflation table — a 5% return taxed at even a modest bracket and then
> eroded by inflation can go backwards in real terms.

### Rental income

Assessable to the landlord, but with a **much wider** deduction base than
interest: loan interest, depreciation on furniture/fixtures and capital
works on the building, repairs, property management and body corporate
fees, bank fees, insurance, rates and land tax, and (subject to recent
changes covered under negative gearing below) net rental losses.

### Dividend income and franking credits

Dividends are company profits distributed to shareholders. Because the
company has usually already paid tax on those profits, taxing the dividend
again at the shareholder's full marginal rate would be **double taxation**.
Australia's **dividend imputation system** fixes this: a dividend that
carries a company-tax credit is called **franked**; it can be fully
franked, partially franked, or unfranked.

```
Franking (imputation) credit = Dividend received × [company tax rate / (1 − company tax rate)]

  large company (30% rate):  Dividend received × 30/70
  small company (25% rate):  Dividend received × 25/75

  Partially franked: multiply the result by the franked percentage
```

The shareholder declares **dividend + franking credit** as assessable
income, is taxed on the total at their marginal rate, then receives a
**franking tax offset** equal to the credit. Crucially, this offset **is
refundable** — if it exceeds tax payable, the difference comes back as cash.
That makes franked dividends especially valuable to low-income earners,
retirees and superannuation funds, who may get a full refund of the company
tax already paid.

**Worked example.** Stanley is an Australian tax resident. 2026-27: wages
$45,000, plus $35,000 in fully franked dividends from a large company. No
other income, no deductions.

```
Franking credit  = 35 000 × (30/70) = $15 000

Taxable income   = 45 000 + 35 000 + 15 000 = $95 000

Tax payable      = 4 020 + [0.30 × (95 000 − 45 000)]
                 = 4 020 + 15 000
                 = $19 020

Medicare levy    = 95 000 × 0.02 = $1 900

Net tax payable  = 19 020 + 1 900 − 15 000 (franking offset)
                 = $5 920
```

Verified exactly against the lecture.

> **The franking credit is added to assessable income before tax is
> calculated, then subtracted back out as an offset afterwards — it passes
> through the whole taxable-income line, not just the final tax line.**
> Forgetting to gross up the dividend by the credit before applying the tax
> rate understates taxable income and gets every subsequent number wrong.

## Capital gains tax (CGT) — current rules

CGT taxes **realised** gains — only when an asset is sold. It applies to
assets acquired **after 19 September 1985**; pre-CGT assets are exempt
outright. The **main residence** and **cars** are also CGT-exempt, by
category, regardless of acquisition date.

```
Net capital gain = total capital gains for the year
                  − total capital losses (current year and carried forward)

Held > 12 months before sale — two possible concessions:
  Discount method:    only 50% of the gain is assessable (individuals)
  Indexation method:  cost base indexed (assets bought before 21 Sept 1999 only)

Held ≤ 12 months — the entire gain is assessable, no concession
```

Net capital gain is added to assessable income and taxed at the taxpayer's
marginal rate.

**Quick examples, verified:**

```
Shares bought 6 Jun 1983 for $30,000, sold for $517,000
  → pre-CGT asset (before 19 Sept 1985)  →  $0 added, fully exempt

Investment property bought $200,000 (22 Aug 2009), sold $750,000
  → held > 12 months, discount method
  → (750 000 − 200 000) × 0.50 = $275 000 added

Family home bought $230,000, sold $2,498,000
  → main residence exemption  →  $0 added, regardless of the gain size

Shares bought $300,000 (24 Aug 2008), sold for $260,000
  → capital LOSS of $40,000, not a gain  →  $0 added
```

> **A capital loss cannot offset ordinary income — only other capital
> gains, this year or carried forward.** The $40,000 share loss above
> doesn't reduce salary or interest income; it sits waiting to net against
> a future gain.

### CGT case study — current rules

Tobias sold six assets in the current financial year:

| Asset | Bought | Cost | Sold for | Gain/(loss) | Treatment |
|---|---|---|---|---|---|
| Home | 5 Mar 1995 | $210,000 | $1,200,000 | $990,000 | Main residence — exempt |
| CSL shares | 1 Jul 2002 | $5,000 | $110,000 | $105,000 | >12 mo — 50% discount |
| CBA shares | 10 Jul 2026 | $52,000 | $55,000 | $3,000 | <12 mo — no discount |
| Zip shares | 1 Jan 2021 | $20,000 | $2,000 | ($18,000) | Capital loss |
| Investment unit | 10 Sep 2013 | $420,000 | $650,000 | $230,000 | >12 mo — 50% discount |
| Car | 10 Mar 2016 | $30,000 | $15,000 | — | Personal-use asset — exempt |

The ATO's netting order matters: **apply losses to non-discountable gains
first**, then apply any remaining loss to the discountable pool **before**
halving it — not after.

```
Non-discount items:   CBA + Zip  = 3 000 − 18 000  = −15 000 loss remaining

Discount-eligible raw gains:  CSL 105 000 + Investment unit 230 000 = 335 000
Less the remaining loss:      335 000 − 15 000 = 320 000
Apply the 50% discount:       320 000 × 0.50 = $160 000

Net capital gain = $160 000
```

Verified exactly — every line reconciles.

> **Applying the loss after the discount instead of before it overstates
> the tax saving.** If you discounted CSL and the unit individually first
> (`105 000 × 0.5 = 52 500`, `230 000 × 0.5 = 115 000`, sum $167,500) and
> *then* subtracted the $15,000 loss, you'd land on $152,500 — a different
> and wrong answer. Net the loss against the raw gain, then discount the
> net.

### CGT — what's changing from 1 July 2027

The 50% discount is being **replaced**, not extended:

```
From 1 July 2027, for assets held ≥ 12 months:
  · Cost base indexation (adjusted for inflation) replaces the flat 50%
    discount — you pay tax only on the gain ABOVE inflation
  · A minimum 30% tax rate applies to all capital gains accruing after
    that date
```

**Tobias under the new rules**, using the indexation factors supplied
(CSL: 1.908, Investment unit: 1.414):

```
CSL:    indexed cost base = 5 000 × 1.908 = $9 540
        new gain = 110 000 − 9 540 = $100 460

Investment unit: indexed cost base = 420 000 × 1.414 = $593 880
        new gain = 650 000 − 593 880 = $56 120

Indexed gains total = 100 460 + 56 120 = $156 580
Less remaining loss (same −15 000 as before) = $141 580

Net capital gain (new rules) = $141 580
```

Verified exactly.

| | Current rules | New rules (post-1 Jul 2027) |
|---|---|---|
| Net capital gain | $160,000 | $141,580 |
| Tax rate applied | 37% | 37% |
| Tax payable (slide's method) | $59,200 | $52,385 |

```
59 200 = 160 000 × 0.37    ✓ arithmetic checks
52 385 ≈ 141 580 × 0.37 = 52 384.60, rounds to 52 385   ✓ arithmetic checks
```

> **Flagged: the slide's "tax payable" figures apply the 37% marginal rate
> as a flat rate to the whole gain, but its own stated assumption ("even if
> we assume no other income") means the progressive scale should apply
> instead.** If the $160,000 gain really is Tobias's *only* income, the
> correct tax (from note 04's tax formula) is
> `31 020 + 0.37 × (160 000 − 135 000) = $40,270` — not $59,200. Under the
> new rules it's `31 020 + 0.37 × (141 580 − 135 000) = $33,454.60` — not
> $52,385. The flat-rate shortcut (income × top marginal rate) is only
> exactly correct when *other* income has already filled every bracket up
> to $135,000, which contradicts "no other income" as stated. That said,
> the slide's **qualitative conclusion survives either way**: the tax saving
> from the new rules is **$6,815.40** whichever method you use
> (`59 200 − 52 385` or `40 270 − 33 454.60`, both equal $6,815.40, because
> the two methods differ by a constant). Use the full marginal formula if
> asked to calculate actual tax payable; use the flat-rate shortcut only if
> told the taxpayer already has other income at or above $135,000.

## Tax planning strategies

- **Income splitting** — transferring income (via transfer of the
  underlying asset) from a higher-marginal-rate person to a lower one. Only
  income from business activities or investments can be split — not salary
  and wages. Watch for: minors' penalty rates (note 04) if income is
  diverted to a child, whether the income is actually paid over, and
  whether transferring the asset itself triggers CGT.
- **Income versus capital growth** — income is fully assessable each year;
  capital gains may get a concessional rate (discount or indexation) and are
  only taxed on realisation. Which an investor prefers depends on cash flow
  needs and time horizon.
- **Tax structures** — see below.
- **Negative gearing** — see below.
- **Salary packaging** — see below.

### Tax structures compared

| Structure | Advantages | Disadvantages |
|---|---|---|
| **Individual** | Salary packaging available; main residence CGT-exempt; 50% CGT discount*; tax-free threshold + graduated scale; losses carried forward | Can't split salary/wage income; marginal rates to 45%; Medicare levy/surcharge may apply |
| **Sole trader** | Wider deductions than an individual; main residence exempt; 50% CGT discount*; tax-free threshold + graduated scale; losses carried forward | Limited income-splitting; marginal rates to 45%; Medicare levy/surcharge may apply |
| **Partnership** | Capacity to split income between partners; losses distributed to partners, offset against other income | Marginal rates to 45%; Medicare levy/surcharge; income shares fixed by the partnership agreement |
| **Company** | Flat 30% (25% small); losses normally carried forward; can split income; imputation credits pass to shareholders via franked dividends | No tax-free threshold; losses quarantined in the company; no CGT concession (except small-business concessions) |
| **Trust** | Easiest structure to split income; discretionary trusts fully flexible on distributions; 50% CGT discount* | No main residence exemption; losses quarantined, only offset against future trust income; minimum 30% trustee-level tax from 1 Jul 2028 (genuine testamentary trusts exempt) |
| **Superannuation** | 15% flat tax on earnings; **one-third** CGT discount (not one-half) for assets held >12 months; pension-phase earnings tax-free; fully tax-free over age 60 | No main residence exemption; borrowing heavily restricted; funds locked until a condition of release is met |

*Changing from 1 July 2027 — replaced by CPI indexation of the cost base,
per the CGT section above.

> **Super's CGT discount is one-third, not one-half — the single easiest
> structure fact to mix up on this page.** Every other listed structure
> that gets a discount at all gets 50%; super funds, taxed at a flat 15%
> rather than a marginal rate, get one-third instead. Companies get **no**
> CGT concession at all outside small-business rules.

Choosing a structure means weighing: the type of income (gains vs business
income), its size (higher incomes hit 45% in some structures), operating
costs, legal liability, and whether there are lower-income family members
to split income toward.

### Negative gearing

```
Negative gearing:  total deductions on an investment > assessable income
                    it generates  →  a loss, usable against other income
                    (salary, wages)

Positive gearing:  total assessable income > total deductions
                    (the mirror case)
```

The logic: an investor accepts an annual cash loss because they expect a
capital gain large enough to offset it.

**Worked example.** Jenny buys a new rental property in regional Queensland
for $300,000. Weekly costs: rates, interest, insurance and management fees
$320, plus depreciation (new property) $70. Rental income: $300/week.

```
Weekly deduction = (320 + 70) − 300 = $90 per week

Annualised: 90 × 52 = $4 680 per year
```

Verified.

> **Two different negative-gearing regimes now apply depending on the
> purchase date, and the cutover is a specific timestamp: 7:30pm on
> 12 May 2026.** Properties acquired **before** that time, or new builds,
> keep the old rules (losses offset any income, including salary). Properties
> acquired **after** that time that are **not** new builds fall under the
> new rules from 1 July 2027: losses can only offset income from *other
> residential property* (rent or future capital gains from residential
> property), not salary and wages, and unused losses must be carried
> forward and reported every year. This makes the effective holding cost of
> a negatively geared *existing* property meaningfully higher for anyone
> buying after the cutover — Jenny's $4,680 annual loss would no longer
> shelter her salary if her purchase falls under the new rules.

## Salary packaging and remuneration planning

An arrangement where an employee substitutes part of their cash salary for
non-cash benefits from the employer. It gets **more attractive at higher
income** (higher marginal rate = bigger saving per dollar packaged) and
depends on the employee's cash-flow needs.

Common non-cash benefits: extra super contributions (beyond the mandatory
Superannuation Guarantee), a fully maintained car, car parking, reduced- or
zero-interest loans, school fees, laptops/phones/electronic devices.

**Worked example.** Kristy earns a $120,000 gross salary.

```
OPTION 1 — salary paid directly (no packaging)

Taxable income = $120 000
Tax payable    = 4 020 + [0.30 × (120 000 − 45 000)] = $26 520
Medicare levy  = 120 000 × 0.02                       = $ 2 400
TOTAL TAX                                             = $28 920

OPTION 2 — $20,000 salary-sacrificed to super, $100,000 cash

Taxable income      = 120 000 − 20 000 = $100 000
Tax payable         = 4 020 + [0.30 × (100 000 − 45 000)] = $20 520
Medicare levy       = 100 000 × 0.02                       = $ 2 000
Tax on the contribution (15% contributions tax) = 20 000 × 0.15 = $3 000
TOTAL TAX                                                  = $25 520

TAX SAVING = 28 920 − 25 520 = $3 400
```

Verified exactly.

> **The saving comes from the spread between Kristy's marginal rate (30%,
> plus 2% Medicare = 32%) and the flat 15% contributions tax inside super —
> not from the amount disappearing.** The $20,000 is still taxed, just at
> 15% instead of ~32%. This only works while the packaged amount stays
> within the concessional contributions cap; packaging beyond the cap
> triggers additional tax that can wipe out the saving.

## Fringe benefits tax (FBT)

Employers must disclose non-cash benefits ("fringe benefits") above a
threshold on employee payment summaries. FBT is paid by the **employer**
but its cost is typically passed back to the employee through the packaging
arrangement. Process:

```
1. Determine the taxable value of the benefit
2. Apply a gross-up rate
3. Apply the FBT rate of 47%
```

The deck doesn't give a worked FBT example or the gross-up rate itself —
don't invent a number for either if asked; the process above is the extent
of what was taught. Benefits fall into four categories for FBT purposes:
fully taxed, concessionally taxed, exempt, and excluded — each processed
differently, but the deck does not detail the differences.

## Goods and services tax (GST)

A flat **10%** tax on most goods and services. For investment purposes, the
category most affected is **commercial property** — GST touches rents,
property expenses, and the acquisition/sale of the investment itself.

## Public, private and product rulings

The ATO **administers** the law; it doesn't make it. Where it publishes an
opinion on how the law applies, that's a **ruling** — guidance, not
legislation. A **private ruling** applies only to the taxpayer who applied
for it (and is binding on the ATO only for that applicant) — nobody else
can rely on a private ruling issued to a different person, even in
identical circumstances.

## Checkpoint

<details><summary>Questions</summary>

1. A taxpayer receives a $28,000 fully franked dividend from a large
   company and has no other income or deductions. What is their franking
   credit, taxable income, and net tax payable (ignore Medicare levy for
   this question)?
2. An asset bought for $80,000 is sold 14 months later for $95,000. What is
   the assessable gain under the current 50% discount rule?
3. The same asset instead sells for $70,000. What's the CGT treatment?
4. A property was acquired at 6:00pm on 12 May 2026 (before the 7:30pm
   cutoff) and negatively geared. Which negative-gearing regime applies?
5. An employee on the 37% bracket packages $15,000 into super. Roughly how
   much tax does that dollar amount save compared to taking it as cash,
   ignoring the Medicare levy?
6. Why does a superannuation fund get a smaller CGT discount than an
   individual, and what is it?

</details>

<details><summary>Answers</summary>

1. ```
   Franking credit = 28 000 × (30/70) = $12 000
   Taxable income  = 28 000 + 12 000 = $40 000
   Tax payable     = 4 020 + [0.30 × (40 000 − ... )] 
   ```
   Wait — $40,000 falls in the 18,201–45,000 band, not the 45,001+ band:
   ```
   Tax payable = (40 000 − 18 200) × 0.15 = $3 270
   Net tax payable = 3 270 − 12 000 (franking offset) = −$8 730
   ```
   The offset exceeds tax payable, and franking credits are **refundable**
   — the taxpayer gets **$8,730 refunded**. This is exactly why franking
   credits are so valuable to low-income earners.
2. ```
   Gain = 95 000 − 80 000 = 15 000
   Held > 12 months → 50% discount
   Assessable gain = 15 000 × 0.5 = $7 500
   ```
3. ```
   70 000 − 80 000 = −$10 000, a capital LOSS.
   Not deductible against other income — carried forward to offset a
   future capital gain.
   ```
4. The **old** rules — the cutoff is 7:30pm on 12 May 2026, and this
   purchase is before that time (6:00pm), so losses can still offset any
   income including salary and wages.
5. ```
   Marginal rate incl. Medicare ≈ 37% + 2% = 39% (ignoring Medicare per
   the question, so use 37%)
   Cash path tax:  15 000 × 0.37 = $5 550
   Super path tax: 15 000 × 0.15 = $2 250
   Saving ≈ $3 300
   ```
6. Because super earnings are already taxed concessionally at a flat 15%
   rather than the individual's marginal rate, the CGT concession inside
   super is **one-third** (not one-half) for assets held over 12 months —
   smaller than the individual/trust/sole trader discount, but stacked on
   top of an already-low tax rate.

</details>

## Summary

- Interest: taxed at marginal rate, split equally on joint accounts. Rental
  income: assessable, with a wide deduction base. Dividends: assessable
  plus any franking credit, taxed at marginal rate, offset by a
  **refundable** franking tax offset.
- Franking credit `= dividend × [company rate / (1 − company rate)]` — 30/70
  for a large company, 25/75 for a small one.
- CGT: only realised gains, only assets bought after 19 Sept 1985. Held
  >12 months → 50% discount (individuals) or indexation (pre-Sept-1999
  buys only). Held ≤12 months → no concession. Apply losses to
  non-discountable gains first, then to the discountable pool **before**
  halving it.
- **From 1 July 2027**: the 50% discount is replaced by cost-base
  indexation plus a 30% minimum rate on gains accruing after that date.
- Tax structures: super's CGT discount is **one-third**, not one-half;
  companies get **no** CGT concession; trusts split income most flexibly
  but face a proposed 30% trustee-level minimum tax from 1 July 2028.
- Negative gearing cutover: **7:30pm, 12 May 2026**. Before that time (or
  new builds) — losses offset any income. After, for existing properties —
  losses only offset other residential property income, carried forward if
  unused.
- Salary packaging saves the spread between your marginal rate and super's
  flat 15% contributions tax — Kristy's $20,000 packaged saved $3,400.
- FBT: taxable value → gross-up → 47% rate, paid by the employer. GST: 10%,
  heaviest effect on commercial property. Private rulings bind the ATO only
  for the applicant who sought them.
