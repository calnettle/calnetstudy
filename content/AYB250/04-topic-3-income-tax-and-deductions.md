# Topic 3 — Income Tax and Deductions

Week 3, first half. Source: `AYB250 Week 3.pptx`, slides 1–33. Reading:
Chapter 3.

**Learning objectives, verbatim:** calculate net tax payable for an
individual, including levies and tax offsets; understand the taxation of
investment returns, including capital gains tax; identify a range of common
tax-effective strategies; explain remuneration planning and the taxation
implications of salary packaging and fringe benefits tax (FBT); explain the
goods and services tax (GST).

This note covers the first three: how net tax payable is actually built up,
deductions, and offsets. Investment income, CGT, tax structures, salary
packaging and FBT/GST are in note 05.

Every worked figure below was recomputed. The lecture's own worked example —
Sophie's tax return, threaded across nine slides — has **two separate
arithmetic slips** in the final two steps, both flagged where they occur.

## The Australian tax system, briefly

Income tax has been levied federally since **1942**. Sources of tax law:
the *Income Tax Assessment Act 1936*, the *Income Tax Assessment Act 1997*
(a rewrite that was never fully completed — both Acts are still current),
case law, and ATO rulings and determinations.

The major federal taxes: **income tax, capital gains tax (CGT), fringe
benefits tax (FBT), goods and services tax (GST)**. States levy payroll
tax, land tax and stamp duty separately.

> **Tax planning, tax avoidance and tax evasion are three different things,
> and the exam can ask you to tell them apart.** Tax planning (minimisation)
> is arranging your affairs within the law to legally reduce tax. Avoidance
> exploits loopholes in a way the ATO can still challenge under anti-
> avoidance provisions. Evasion is illegal — not declaring income, or
> claiming deductions you're not entitled to. Kerry Packer's 1991 line to a
> parliamentary inquiry is the lecture's illustration of the first category:
> "you're not spending it that well" — his point being that minimising tax
> within the law is not just legal, it's rational.

## How net tax payable is built

The lecture gives this as a five-line waterfall, and each line is a
separate concept with its own vocabulary:

```
  Assessable income  −  Allowable deductions        =  Taxable income
  Taxable income  ×  applicable tax rate(s)          =  Gross tax payable
  Gross tax payable  −  tax offsets and rebates       =  Net tax payable
  Net tax payable  +  Medicare levy  −  tax credits
    and refundable offsets                            =  Tax payable (or refund)
```

> **Deductions and offsets act on different lines, and mixing them up is
> the single most common error in this topic.** A deduction reduces
> *taxable income*, so its value depends on your marginal rate — a $1,000
> deduction saves $370 at the 37% bracket but only $150 at the 15% bracket.
> An offset reduces *tax payable* directly, dollar for dollar, regardless of
> bracket. LITO is an offset, not a deduction — see below.

## Income tax rates, 2026-27

| Income thresholds | Resident | Non-resident |
|---|---|---|
| $0 – $18,200 | Nil | 30% |
| $18,201 – $45,000 | Nil + 15% | 30% |
| $45,001 – $135,000 | $4,020 + 30% | $13,500 + 30%* |
| $135,001 – $190,000 | $31,020 + 37% | $40,500 + 37% |
| Above $190,000 | $51,370 + 45% | $60,850 + 45% |

*The deck's non-resident column skips straight from a flat 30% to the
$135,001 band; the $13,500 base ($45,000 × 30%) is the implied figure for
completeness and was not on the slide — the flat 30% rate makes the base
irrelevant in practice since there's no threshold change at $45,000 for
non-residents.

```
Resident base-figure check:
   45 000:      0 + (45 000 − 18 200) × 0.15 =  4 020   ✓
  135 000:  4 020 + (135 000 − 45 000) × 0.30 = 31 020   ✓
  190 000: 31 020 + (190 000 − 135 000) × 0.37 = 51 370   ✓

Non-resident base-figure check:
  135 000: 135 000 × 0.30                    = 40 500    ✓
  190 000: 40 500 + (190 000 − 135 000) × 0.37 = 60 850   ✓
```

> **Residents get the tax-free threshold and the graduated scale;
> non-residents get neither.** A non-resident earning $18,200 pays $5,460 in
> tax; a resident earning the same pays nothing. Residency for tax purposes
> generally requires around **six months** of work, study or home-setting-up
> in Australia. Residents are taxed on income from **all sources, worldwide**;
> non-residents only on income **derived in Australia**.

### Other entities, for comparison

| Entity | Rate | Note |
|---|---|---|
| Companies | 30% flat | 25% for base rate entities (small companies) |
| Superannuation funds | 15% flat | — |
| Trusts | Distributed — each beneficiary pays at their own marginal rate | Budget proposal: minimum 30% trustee-level tax from 1 July 2028 |
| Partnerships | Distributed — each partner pays at their own marginal rate | — |
| Sole traders | Taxed as individuals | — |

## Assessable income

Salary and wages; bonuses, commissions, allowances and tips; investment
income (rent, dividends, interest); capital gains; foreign income (unless
exempt); annuities and super pension payments; trust distributions; some
government payments.

**Sophie's tax return — Step 1.** Sophie works full time as an
administration officer. 2026-27 income: wages $50,500, interest $400.

```
Assessable income = 50 500 + 400 = $50 900
```

## Allowable deductions

- **General deductions** — necessarily incurred in *gaining* assessable
  income (work travel, safety gear, home office costs).
- **Specific deductions** — legislated regardless of connection to earning
  income (tax agent fees, donations to an approved charity).
- **Not deductible**: capital expenses (major property improvements),
  domestic outgoings (private travel), or expenses incurred earning *exempt*
  income (e.g. advice fees for tax-exempt income).

### Work-related deductions

| Category | Method |
|---|---|
| Vehicle expenses | Cents-per-km (currently 88c) up to 5,000 km/yr, **or** logbook method (12 weeks of records). Home-to-work travel excluded |
| Working from home | 70c per work hour, **or** actual cost with records |
| Uniform and protective clothing | Deductible if branded, occupation-specific, protective, or a registered non-compulsory uniform. Laundry: $1/load, or 50c if mixed with personal items |
| Self-education | Must maintain/improve skills for your *current* job, or likely lift income from it. Upskilling to change jobs does not qualify |
| Seminars, training, union fees | Full cost, including travel and accommodation if required |
| Tools and equipment | See below |

> **Tools and equipment split on a $300 threshold, and it changes the whole
> method.** Under $300: claim an immediate deduction (provided the item is
> mainly for non-business assessable income, isn't part of a set costing
> over $300, and isn't one of several substantially identical items). At or
> above $300: claim **depreciation** over the asset's effective life
> (prime cost or diminishing value), apportioned for work-use only if the
> item is also used personally.

### The new standard deduction (from 2026-27)

Eligible taxpayers (anyone earning assessable labour income) get an
**automatic $1,000 standard deduction** for work-related expenses, with no
need to spend the money or keep records.

```
Standard deduction = up to $1,000
  − reduced dollar-for-dollar by any work-related expenses you
    separately claim instead — EXCEPT union fees and memberships
  − does not affect other deductions (donations, rental expenses — claim
    those as normal)
```

> **Union fees sit outside the standard-deduction comparison, and this is
> exactly where Sophie's example turns on itself.** If your work-related
> expenses excluding union fees are below $1,000, take the standard
> deduction instead of itemising them — then add union fees **on top**,
> because they're carved out of the $1,000 cap. Getting this backwards (by
> including union fees in the pool being compared against $1,000) understates
> the deduction.

### Common deductions

| Category | Detail |
|---|---|
| Investment-related | Account-keeping fees (joint account: claim half only); rental property costs (rates, insurance, loan interest, management fees, repairs, depreciation, advertising); dividend-related costs (internet, computer depreciation, loan interest, AGM travel) |
| Charitable donations | Must go to a registered Deductible Gift Recipient (DGR); no material benefit received in return |
| Personal super contributions | Within the concessional cap (or carried-forward unused cap); requires a valid "notice of intent to claim" acknowledged by the fund |
| Income protection insurance | Only if the policy is held **personally**, not inside super |
| Managing tax affairs | Tax agent fees, tax advice, lodgment costs |

> **Financial advice fees are only deductible for existing investments —
> ongoing management or a performance review — never for initial advice or
> setup.** This is the same distinction as the "expenses incurred in
> producing exempt income" exclusion above: the fee has to be tied to
> managing assessable income you already hold, not to acquiring it.

**Sophie's tax return — Step 2.** Sophie's allowable work expenses: union
fees $150, phone $300, uniform and laundry $450.

```
Work expenses excluding union fees = 300 + 450 = $750
Standard deduction                 = $1 000
                750 < 1 000  →  take the standard deduction instead

Total deduction = standard deduction + union fees (carved out)
                = 1 000 + 150 = $1 150

Taxable income = 50 900 − 1 150 = $49 750
```

Matches the lecture's stated taxable income exactly, once the union-fee
carve-out is applied correctly.

**Sophie's tax return — Step 3: tax payable.**

```
Tax payable = 4 020 + [(49 750 − 45 000) × 0.30]
            = 4 020 + 1 425
            = $5 445
```

Verified — matches the lecture exactly.

## The Medicare levy

Funds Medicare and the NDIS. Most resident taxpayers pay **2% of taxable
income**. Low-income earners and families get it reduced: nil below the
lower threshold, then a shade-in of **10% of income between the lower and
upper thresholds** until it reaches the full 2% at the upper threshold.

| Category | Lower threshold | Upper threshold |
|---|---|---|
| Individuals | $28,011 | $35,013 |
| Individuals entitled to SAPTO | $44,268 | $55,335 |
| Family | $47,238 | $59,047 |
| Family entitled to SAPTO | $61,623 | $77,028 |

Family thresholds add $4,338 (or $5,423 for the SAPTO row) per dependent
child or student.

**Sophie's tax return — Step 4a: Medicare levy.** Her taxable income
($49,750) is above the individual upper threshold ($35,013), so the full
rate applies.

```
Medicare levy = 49 750 × 0.02 = $995
```

## Medicare Levy Surcharge (MLS)

An **additional** levy on high-income earners **without private hospital
cover**. "Income" for MLS purposes adds back items excluded from taxable
income (net investment losses, personal deductible super contributions).

| Threshold | Single | Family | MLS rate |
|---|---|---|---|
| Base tier | $105,000 or less | $210,000 or less | 0% |
| Tier 1 | $105,001 – $123,000 | $210,001 – $246,000 | 1% |
| Tier 2 | $123,001 – $164,000 | $246,001 – $328,000 | 1.25% |
| Tier 3 | $164,001+ | $328,001+ | 1.5% |

This is the same table already used for the Part A case study (note 06) and
the practice questions (note 07) — Week 3 is the first place it's actually
*taught*, rather than just supplied as a rate card.

> **MLS is applied to the whole income once you're over a tier threshold,
> not just the excess** — the same "whole-of-income" mechanic as the top
> HECS band below. $120,000 single at Tier 1 pays `120 000 × 0.01 = $1,200`,
> not 1% of the amount over $105,000.

**Sophie's tax return — Step 4b: MLS.** $49,750 is below the single base
tier ($105,000), so **no MLS applies**.

## HECS-HELP

| Repayment income | Repayment |
|---|---|
| $0 – $69,528 | Nil |
| $69,529 – $129,717 | 15c for each $1 over $69,528 |
| $129,718 – $186,050 | $9,028 + 17c for each $1 over $129,717 |
| $186,051+ | **10% of total repayment income** — a cap, not a marginal rate |

Three legislative changes landed recently and matter for currency:

- **November 2024** — annual indexation on HELP debts capped at the
  **lower of CPI or the Wage Price Index (WPI)**, previously CPI only.
- **July 2025** — the minimum repayment threshold rose substantially (from
  $54,435 to $67,000 at the time), and repayments on the two lowest bands
  are now calculated **only on income above the threshold**, not on the
  whole amount.
- **July 2025** — a **20% reduction** applied to all student loan balances
  as at 1 June 2025.

**Sophie's tax return — Step 4c: HECS.** $49,750 is below the first
threshold ($69,528), so **no compulsory repayment** this year.

**Sophie's tax return — Step 4d: totalling the levies.**

```
Tax payable    = $5 445
Medicare levy  = $  995
                 --------
                 $6 440
```

> **Flagged: the lecture's own slide states a different total.** Slide 29
> says "All up Sophie will pay $5,490 + $998 = $6,488" — but the same deck's
> earlier slides give tax payable as **$5,445** (slide 24) and the Medicare
> levy as **$995** (the same slide, one line up). $5,490 and $998 don't
> match either of those figures, and $5,445 + $995 = **$6,440**, not $6,488.
> Carry the verified $5,445 and $995 forward — the $6,488 total is an
> internal inconsistency in the slide, not a different (correct) answer.

## Tax offsets

Tax offsets reduce **tax payable directly**, after tax on taxable income has
already been worked out — not the same mechanism as a deduction (which
reduces taxable income before the rate is applied). Most offsets cannot
offset the Medicare levy and cannot be carried forward. Only **refundable**
offsets can generate a cash refund if they exceed tax payable.

### Low income tax offset (LITO)

```
Taxable income          Maximum offset
  0 – 37 500             $700
  37 501 – 45 000        $700 − 5c for every $1 over $37 500
  45 001 – 66 667        $325 − 1.5c for every $1 over $45 000
  above 66 667            $0
```

```
Continuity check:
  at 45 000: 700 − 0.05 × (45 000 − 37 500) = 700 − 375 = 325   ✓ matches band 2 base
  at 66 667: 325 − 0.015 × (66 667 − 45 000) = 325 − 325.005 ≈ 0  ✓ matches stated cutoff
```

**Sophie's tax return — Step 5: LITO and net tax payable.** Her taxable
income ($49,750) sits in the third band.

```
LITO = 325 − 0.015 × (49 750 − 45 000)
     = 325 − 0.015 × 4 750
     = 325 − 71.25
     = $253.75

Net tax payable = (5 445 + 995) − 253.75
                = 6 440 − 253.75
                = $6 186.25
```

> **Flagged: the lecture's LITO working has a five-cent slip that
> propagates into a two-cent error in the final answer.** Slide 32 states
> `4 750 × 0.015 = $71.20` — the exact value is **$71.25**. Curiously, the
> slide's *next* line, `LITO = 325 − 71.20 = $253.75`, uses the *correct*
> $71.25 arithmetic to get $253.75 (not $253.80, which `325 − 71.20` would
> actually give) — so the LITO figure itself is right despite the wrong
> number shown getting there. But the slide's final headline, **"Net tax
> payable = $6,186.23"**, doesn't reconcile with any of its own numbers:
> `5 445 + 995 − 253.75 = 6 186.25`, not 6,186.23. Use **$6,186.25** — it is
> the only figure consistent with every verified line above it.

## Taxation of minors

Rules exist to stop income being diverted to minors to exploit their lower
rates. They target **unearned income** only (interest, dividends, trust
distributions) — not income from a minor's own employment or business.

| Unearned income | Tax rate |
|---|---|
| $0 – $416 | Nil |
| $417 – $1,307 | 66% of the excess over $416 |
| Over $1,307 | 45% of the total amount that is not excepted income |

These are deliberately **penalty rates**, well above the adult scale, to
remove the incentive to route investment income through a child's name.

## Checkpoint

<details><summary>Questions</summary>

1. A resident's taxable income is $38,200. What LITO band applies, and what
   is the offset?
2. A single taxpayer with no private hospital cover has income (for MLS
   purposes) of $130,000. Which MLS tier applies, and what is the surcharge?
3. A taxpayer has repayment income of $150,000 and an outstanding HELP debt.
   What is the compulsory repayment?
4. An employee's only work-related expenses are $600 of uniform and laundry
   costs, and no union fees. Should they itemise or take the standard
   deduction, and what is the deduction?
5. Same employee as Q4, but they also pay $200 in union fees. What is their
   total deduction?
6. A minor receives $1,500 of unearned trust income and no excepted income.
   What tax applies?

</details>

<details><summary>Answers</summary>

1. ```
   38 200 is in the 37 501–45 000 band:
   LITO = 700 − 0.05 × (38 200 − 37 500) = 700 − 35 = $665
   ```
2. ```
   130 000 is in Tier 2 (123 001–164 000) → 1.25%
   Surcharge = 130 000 × 0.0125 = $1 625
   ```
   Applied to the whole $130,000, not the amount over $123,000.
3. ```
   150 000 is in the 129 718–186 050 band:
   Repayment = 9 028 + 0.17 × (150 000 − 129 717)
             = 9 028 + 3 448.11 = $12 476.11
   ```
   Check the cap doesn't bind: 10% of 150,000 = $15,000, and $12,476.11 is
   below that, so the marginal calculation stands.
4. ```
   Work expenses = $600 < standard deduction $1 000 → take the standard
   deduction. Total deduction = $1 000.
   ```
5. ```
   Non-union expenses $600 < $1 000 → still take the standard deduction,
   PLUS union fees on top (carved out of the cap).
   Total deduction = 1 000 + 200 = $1 200
   ```
6. ```
   Over $1,307: 45% of the total ($1,500, none of it excepted)
   Tax = 1 500 × 0.45 = $675
   ```
   Note this is *not* continuous with the middle band at $1,307
   (`0.66 × (1 307 − 416) = $588.06` vs `0.45 × 1 307 = $588.15`) — a
   9-cent gap built into the legislated thresholds themselves, not a slide
   error.

</details>

## Summary

- Net tax payable waterfall: assessable income − deductions = taxable
  income → apply rates = gross tax → − offsets = net tax → + Medicare levy
  − credits = tax payable. **Deductions cut taxable income (value depends
  on your bracket); offsets cut tax payable directly.**
- 2026-27 resident scale: $0–18,200 nil, then 15% / 30% / 37% / 45%.
  Non-residents get no tax-free threshold and a flat 30% up to $135,000.
- Work-related deductions: 88c/km or logbook (car), 70c/hr or actual (WFH),
  laundry $1/load, tools **under $300** immediate, **$300+** depreciated.
- The **new standard deduction** (2026-27): up to $1,000, automatic, no
  records needed — **except union fees, which are always additional**.
- Medicare levy 2%, shaded in from nil below the individual lower threshold
  ($28,011) to full rate at the upper ($35,013).
- MLS and HECS's top band are both **whole-of-income** charges, not
  marginal — MLS above a tier, HECS above $186,050 (10% of the total).
- LITO is a refundable-adjacent offset: $700 max, tapering to zero by
  $66,667 taxable income.
- Minors' unearned income is taxed at penalty rates (up to 45%) to remove
  the income-splitting incentive.
- Sophie's worked example, fully verified: taxable income $49,750, tax
  $5,445, Medicare levy $995, LITO $253.75, **net tax payable $6,186.25**
  — two cents different from the slide's stated $6,186.23, traced to a
  five-cent slip in the slide's LITO working.
