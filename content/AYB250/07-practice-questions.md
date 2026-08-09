# AYB250 — Practice Questions

Exam-style questions across Weeks 1 and 2 and the Part A technique. Answers
are hidden — work each one out on paper first. Every numerical answer here
was computed independently, not copied from the lecture.

Tax figures use the **2026-27** scale from the assignment's Rates and
Thresholds sheet:

```
0 – 18 200         nil
18 200 –  45 000   15%          (base 0)
45 000 – 135 000   30%          (base 4 020)
135 000 – 190 000  37%          (base 31 020)
190 000 +          45%          (base 51 370)

Medicare levy 2%
MLS single: 105 000 → 1.00%,  123 000 → 1.25%,  164 000 → 1.50%
MLS family: double each single threshold

HECS-HELP: 69 528 → 15% marginal
           129 717 → 9 028 + 17% marginal
           186 050 → 10% of TOTAL repayment income
```

---

## Section A — Regulation and concepts

### A1

For each scenario, name the regulator with primary responsibility.

1. A client's self-managed superannuation fund has breached its investment
   strategy rules.
2. A large public-offer superannuation fund's capital adequacy is in doubt.
3. A financial adviser has given advice that was misleading.
4. Two large licensees propose to merge, raising competition concerns.
5. A client wants to deposit $300,000 in cash with no clear source.

<details><summary>Answer A1</summary>

1. **ATO** — it administers parts of the super system, particularly SMSFs.
2. **APRA** — prudential supervision of banks, insurers and non-SMSF super
   funds; financial soundness and stability.
3. **ASIC** — primary regulator of financial advice; monitors misleading or
   deceptive conduct in financial advice; enforces the Corporations Act.
4. **ACCC** — competition and fair trading in financial services markets.
5. **AUSTRAC** — AML/CTF, customer identification, reporting of suspicious
   transactions.

The ATO/APRA split on superannuation is the highest-value distinction in
Week 1.

</details>

### A2

An adviser gives a retail client **personal** advice recommending a managed
fund. Which disclosure documents are triggered, and under which sections?

<details><summary>Answer A2</summary>

All three.

| Document | Section | Why |
|---|---|---|
| **FSG** | s 942C | A financial service is being provided to a retail client |
| **PDS** | — | The managed fund is a financial product under s 763A, and financial products require a PDS |
| **SoA** | s 946A | The advice is *personal* advice to a retail client |

If the advice had been *general*, the SoA would not be triggered. That is
the distinction the question is built on.

</details>

### A3

A podcast host with no AFSL tells listeners which shares they think will
rise. Are they carrying on an unlicensed financial services business?

<details><summary>Answer A3</summary>

Generally **no**. s 911A requires an AFSL for a person carrying on a
financial services business **unless an exemption applies**, and the
exemptions cover incidental providers — the lecture names the media
specifically, alongside legal advice and tax agents.

The distinction is between general commentary directed at the public and a
financial service provided to a client. Once the host starts giving advice
tailored to an individual listener's circumstances, the analysis changes and
both s 911A and s 946A come into play.

</details>

### A4

An adviser is asked for advice covering superannuation and estate planning.
They are highly experienced in superannuation but have never done estate
planning. They research the estate planning question thoroughly and give
comprehensive advice. Have they satisfied s 961B?

<details><summary>Answer A4</summary>

**No.** Limb 4 of s 961B requires that the provider *assessed whether they
have the expertise required to provide the advice*. That is a separate
obligation from doing a reasonable investigation (limb 5). Thorough research
does not manufacture expertise, and diligence on one limb does not cure a
failure on another.

The correct discharge is to refer the estate planning component to someone
who does have the expertise.

</details>

### A5

Explain, in two sentences, why the shift from defined benefit to
accumulation superannuation increased demand for financial planning.

<details><summary>Answer A5</summary>

The shift **transferred investment risk from employers to employees** —
under accumulation the member's retirement balance is whatever the market
delivered, rather than a promised amount. Combined with low financial
literacy and an increasingly complex product set, that leaves individuals
personally responsible for decisions they are not equipped to make, which is
the demand.

</details>

---

## Section B — Financial statements and ratios

### B1

A household's position at 30 June:

```
ASSETS                              LIABILITIES
  Home              $780 000          Mortgage        $430 000
  Savings account     18 000          Car loan          14 500
  Transaction acct     3 500          Credit card        6 200
  Car                 24 000
  Home contents       35 000
  Listed shares       46 000
  Super (combined)   195 000
```

Their annual after-tax income is $128,000, their annual surplus is $9,600,
they made personal superannuation contributions of $5,400, and their total
debt repayments over the next twelve months are $38,400.

Compute all four planning ratios.

<details><summary>Answer B1</summary>

```
Total assets      = 780 000 + 18 000 + 3 500 + 24 000
                    + 35 000 + 46 000 + 195 000        = $1 101 500
Total liabilities = 430 000 + 14 500 + 6 200           = $  450 700
Net worth         = 1 101 500 − 450 700                = $  650 800
```

**1. Net worth ratio**

```
650 800 / 1 101 500 × 100 = 59.08%
```

They own 59.08% of their asset base; lenders have a claim on the other
40.92%.

**2. Liquidity ratio**

```
Liquid assets = 18 000 + 3 500 = 21 500
Current debt  = 38 400   (twelve months of repayments, NOT $450 700)

21 500 / 38 400 × 100 = 55.99%
```

Cash on hand covers about 56% of a year's debt repayments.

If listed shares are treated as liquid — defensible, since they convert to
cash in days — the ratio becomes `67 500 / 38 400 = 175.78%`, a completely
different story. State your treatment.

**3. Savings ratio**

```
Savings    = 9 600 surplus + 5 400 personal super contributions = 15 000
Net income = 128 000  (already after tax)

15 000 / 128 000 × 100 = 11.72%
```

**4. Debt service ratio**

```
38 400 / 128 000 × 100 = 30.00%
```

Or monthly, `3 200 / 10 666.67 × 100 = 30.00%` — the `/12` cancels.

**Reading them together:** net worth is moderate and heavily mortgage-driven,
liquidity is thin at 56%, saving is modest at 11.72%, and 30% of after-tax
income goes to debt service. This is the "low net worth ratio, low savings
ratio, high debt service ratio" profile from the lecture's comparison slide,
one step up.

</details>

### B2

The household in B1 sells the shares for $46,000 and uses the proceeds to
pay down the mortgage. What happens to (a) net worth, (b) the net worth
ratio, (c) the liquidity ratio?

<details><summary>Answer B2</summary>

(a) **Net worth is unchanged at $650,800.** Swapping an asset for an equal
reduction in liabilities never moves the residual.

(b) The ratio **rises**:

```
Assets      1 101 500 − 46 000 = 1 055 500
Liabilities   450 700 − 46 000 =   404 700
650 800 / 1 055 500 × 100 = 61.66%   (was 59.08%)
```

The numerator held while the denominator shrank. This is worth
understanding: the net worth ratio measures what *proportion* of the asset
base is unencumbered, not how wealthy the household is.

(c) On the lecture's narrow definition (cash only) the liquidity ratio is
**unchanged at 55.99%** — the shares were never counted. On the wide
definition it falls from 175.78% back to 55.99%. Which is exactly why you
have to state the definition before you compute anything.

</details>

### B3

A budget projects income and expenses both growing at 2.8% a year. In year 1
income is $96,000 and expenses are $91,000. Without computing the year-4
figures, state the year-4 surplus.

<details><summary>Answer B3</summary>

```
Year 1 surplus = 96 000 − 91 000 = 5 000
Growth applies equally to both sides, so the surplus grows at 2.8% too:

5 000 × 1.028³ = 5 000 × 1.08637395 = $5 431.87
```

The general result: if `I` and `E` both grow at `g`, then
`(I − E)(1 + g)ⁿ` is the surplus after `n` years.

The exam-relevant point is what this *means*: a projection with a single
growth rate applied to both sides cannot show a household moving into or out
of deficit, so it tells the planner nothing. Real projections use wage growth
on income and CPI on expenses.

</details>

---

## Section C — Time value of money

### C1

$750,000 is invested at 6.4% simple interest for 145 days. What is the
future value?

<details><summary>Answer C1</summary>

```
FV = 750 000 + [750 000 × (0.064 × 145/365)]
   = 750 000 + [750 000 × 0.02542466…]
   = 750 000 + 19 068.49
   = $769 068.49
```

365-day convention. Using 360 days would give $19,333.33 of interest — $265
more.

</details>

### C2

Three lenders quote:

- Bank X: 9.8% compounded **monthly**
- Bank Y: 9.9% compounded **quarterly**
- Bank Z: 10.0% compounded **annually**

You are **borrowing**. Rank them from cheapest to most expensive.

<details><summary>Answer C2</summary>

```
Bank X = (1 + 0.098/12)^12 − 1 = 10.2524%
Bank Y = (1 + 0.099/4 )^4  − 1 = 10.2736%
Bank Z = (1 + 0.10/1  )^1  − 1 = 10.0000%
```

Cheapest to most expensive: **Z (10.00%) → X (10.25%) → Y (10.27%)**.

The bank quoting the **highest** nominal rate is the **cheapest**, because it
is the only one not compounding within the year. This is the same inversion
the lecture demonstrates with its 15% / 15.5% / 16% example, and it is the
reason effective rates exist.

</details>

### C3

You save $1,200 at the **end** of each year for 10 years at 6%. What is the
future value? What would it be if you saved at the **start** of each year?

<details><summary>Answer C3</summary>

Ordinary annuity (end of period):

```
FV = 1 200 × [(1.06^10 − 1) / 0.06]
   = 1 200 × [(1.79084770 − 1) / 0.06]
   = 1 200 × 13.18079494
   = $15 816.95
```

Annuity due (start of period) — every payment earns one extra period:

```
15 816.95 × 1.06 = $16 765.97
```

Sanity check: $12,000 of cash goes in, so both answers must exceed $12,000.
✓

</details>

### C4

You save $2,000 at the end of each year for 5 years at 6%, then increase the
amount to $3,500 at the end of each year for a further 5 years at 6%. How
much do you have at the end of year 10?

<details><summary>Answer C4</summary>

Two calculations, then bring the first forward.

```
Stage 1 — FV at the end of YEAR 5:
  FV = 2 000 × [(1.06^5 − 1) / 0.06] = 2 000 × 5.63709296 = $11 274.19

Carry that lump sum forward 5 more years:
  11 274.19 × 1.06^5 = 11 274.19 × 1.33822558 = $15 087.40

Stage 2 — FV at the end of YEAR 10:
  FV = 3 500 × [(1.06^5 − 1) / 0.06] = 3 500 × 5.63709296 = $19 729.83

TOTAL = 15 087.40 + 19 729.83 = $34 817.23
```

**The step people skip is compounding stage 1 forward.** Adding $11,274.19
straight to $19,729.83 gives $31,004.02 and is wrong by $3,813 — you would
be adding a year-5 value to a year-10 value.

</details>

### C5

An investment costs $1,200 today and returns $400 at the end of each year
for 4 years. The required rate of return is 9%.

(a) Compute the NPV. (b) Estimate the IRR by interpolating between 9% and
14%. (c) Is your IRR estimate above or below the true IRR?

<details><summary>Answer C5</summary>

(a) The cash flows are a 4-year annuity, so use the annuity formula:

```
PV of inflows = 400 × [(1 − 1.09^(−4)) / 0.09]
              = 400 × 3.23971988
              = $1 295.89

NPV = 1 295.89 − 1 200 = +$95.89
```

Positive → financially acceptable.

(b) At 14%:

```
PV of inflows = 400 × [(1 − 1.14^(−4)) / 0.14] = 400 × 2.91371 = $1 165.48
NPV = 1 165.48 − 1 200 = −$34.52

              (9 − 14) × 95.89
IRR = 9 +  ----------------------
              (−34.52 − 95.89)

           (−5 × 95.89)
    = 9 + --------------
             −130.41

    = 9 + 3.68
    = 12.68%
```

(c) **Above.** The true IRR is **12.59%**. Linear interpolation across a
convex NPV curve always overstates. A tighter bracket — say 12% and 13% —
would land within a basis point or two.

</details>

### C6

A credit card charges 2.1% per month. What is the effective annual rate?

<details><summary>Answer C6</summary>

```
(1 + 0.021)^12 − 1 = 1.283243 − 1 = 28.32%
```

The nominal presentation, 2.1% × 12 = 25.2% p.a., understates the true cost
by more than three percentage points. Compounding on unsecured revolving
debt is the reason card rates look the way they do.

</details>

### C7

A term deposit pays 4.8% p.a. The investor's marginal rate including the
Medicare levy is 32%, and inflation is 3.2%. What is the real rate of
return using the lecture's method?

<details><summary>Answer C7</summary>

```
Interest %                     4.800
Tax on interest %  4.8 × 0.32  (1.536)
                              -------
After-tax return %             3.264
Inflation %                   (3.200)
                              -------
Real rate of return %          0.064
```

**0.06%.** The investor is barely ahead of inflation on a 4.8% headline
rate. Any higher tax bracket or any higher inflation rate puts them
backwards.

(The exact Fisher calculation, `1.03264 / 1.032 − 1 = 0.0620%`, gives
essentially the same answer here. The approximation degrades at higher
rates.)

</details>

---

## Section D — Tax, HECS and goal modelling

### D1

A single taxpayer earns $145,000, has no private hospital cover and has an
outstanding HECS-HELP debt of $60,000. Using the 2026-27 rates, compute
income tax, Medicare levy, Medicare levy surcharge, the compulsory HECS
repayment, and after-tax income.

<details><summary>Answer D1</summary>

```
Income tax    31 020 + (145 000 − 135 000) × 0.37  = $34 720.00
Medicare levy 145 000 × 0.02                       = $ 2 900.00
MLS           123 000 ≤ 145 000 < 164 000 → 1.25%
              145 000 × 0.0125                     = $ 1 812.50
HECS          145 000 > 129 717, and < 186 050
              9 028 + (145 000 − 129 717) × 0.17
            = 9 028 + 2 598.11                     = $11 626.11
                                                     ----------
After-tax income
  145 000 − 34 720 − 2 900 − 1 812.50 − 11 626.11  = $93 941.39
```

Check the cap does not bind: `145 000 × 0.10 = $14,500`, and $11,626.11 is
less than that, so the marginal calculation stands.

The debt of $60,000 is large enough that the repayment is not capped by the
balance — this year takes $11,626.11 off it.

</details>

### D2

Repeat the HECS calculation for a taxpayer on $200,000.

<details><summary>Answer D2</summary>

```
Marginal calculation:  9 028 + (200 000 − 129 717) × 0.17
                     = 9 028 + 11 948.11 = $20 976.11

Cap:                   200 000 ≥ 186 050  →  10% of TOTAL income
                     = 200 000 × 0.10     = $20 000.00
```

**The cap applies — the repayment is $20,000.00.**

Above $186,050 the fourth row of the table replaces the marginal
calculation, and it applies 10% to the whole repayment income, not to the
excess. That is what the "Total income" note on the table means. Reaching
for the marginal formula here overstates the repayment by $976.11.

</details>

### D3

A couple, both without private hospital cover, earn $98,000 and $115,000.
Compute the Medicare levy surcharge (a) treating them as a family, and (b)
treating each as a single.

<details><summary>Answer D3</summary>

```
(a) FAMILY
    Combined = 98 000 + 115 000 = $213 000
    213 000 ≥ 210 000 → Tier 1 → 1.00% each
      98 000 × 0.01 = $  980
     115 000 × 0.01 = $1 150
                       ------
                      $2 130

(b) SINGLE
      98 000 < 105 000                  → nil
     105 000 ≤ 115 000 < 123 000 → 1%   → $1 150
                                          ------
                                          $1 150
```

A $980 difference, entirely driven by which threshold set applies. A couple
living together is normally a family for MLS purposes, which makes (a) the
conventional answer — but the household is only $3,000 over the family
threshold, so the result is fragile. State the basis and note the
sensitivity.

</details>

### D4

A household has $30,000 saved and adds $2,500 a month. The account pays 4.8%
p.a., credited monthly on the opening balance. What is the balance after 12
months?

<details><summary>Answer D4</summary>

```
Monthly rate = 4.8% / 12 = 0.40% per month
```

Because the contribution is constant, this is a lump sum plus an ordinary
annuity:

```
FV of the opening balance
  = 30 000 × 1.004^12 = 30 000 × 1.04907021 = $31 472.11

FV of the contributions (end of month, 12 payments)
  = 2 500 × [(1.004^12 − 1) / 0.004]
  = 2 500 × 12.26755188
  = $30 668.88

TOTAL = 31 472.11 + 30 668.88 = $62 140.99
```

Sanity check: `30 000 + 12 × 2 500 = $60,000` of cash goes in, so the answer
must exceed $60,000. ✓

Note the convention. Crediting interest on `opening + contribution` instead
would give a slightly higher figure, because each month's contribution would
earn one extra month of interest. Both are defensible; interest on the
opening balance is the conservative one. Say which you used.

</details>

### D5

In a stress test, one partner's gross income is cut by 20%. A student models
this by reducing the household's *after-tax* monthly income by 20% of that
partner's gross pay divided by 12. Why is that wrong, and in which direction?

<details><summary>Answer D5</summary>

Because tax, the Medicare levy, the Medicare levy surcharge and the HECS
repayment all fall with income. Cutting gross pay by $X does **not** reduce
after-tax income by $X.

The error **overstates the damage**. In the Part A case study a 20% cut to
the $92,000 salary removes $18,400 of gross income — $1,533 a month — but
the actual fall in household surplus is only **$636 a month**, because:

```
income tax falls        18 120 → 12 600     −$5 520
Medicare levy falls      1 840 →  1 472     −$  368
HECS repayment falls  3 370.80 → 610.80     −$2 760
MLS falls to ZERO for BOTH partners
  (combined income 193 600 < 210 000)       −$2 120
```

The correct method is to recompute the whole tax calculation from the new
gross figure — which is exactly what the assignment's "must recalculate
correctly if any input is changed" rule is there to test.

</details>

### D6

Why is rent excluded from the debt service ratio, and what should you say
about it instead?

<details><summary>Answer D6</summary>

Because the debt service ratio measures **debt** commitments, and rent is
not debt — there is no principal, no lender and no balance on the balance
sheet.

But excluding it can make a household look far more secure than it is. In
the Part A case study, rent is $39,000 a year against $10,942 of HECS
repayments: the debt service ratio reads a comfortable 7.29% while nearly
40% of the household's expenses go to housing.

The right response is not to fudge the ratio — it is to say so in the
written comment. Something like: *debt service is low at 7.29%, but this
understates the household's fixed commitments, since rent of $3,250 a month
is a non-negotiable outflow that the ratio does not capture.*

</details>

---

## Section E — Taxation planning (Week 3)

### E1

A taxpayer earns $68,000 in wages and $900 in interest. Their allowable
work-related expenses are $180 (phone) and $260 (uniform and laundry),
plus $220 in union fees. Compute taxable income and tax payable using the
2026-27 scale.

<details><summary>Answer E1</summary>

```
Assessable income = 68 000 + 900 = $68 900

Non-union work expenses = 180 + 260 = $440
Standard deduction       = $1 000        440 < 1 000 → take the standard
                                          deduction instead of itemising

Total deduction = 1 000 + 220 (union, always additional) = $1 220

Taxable income = 68 900 − 1 220 = $67 680

Tax payable = 4 020 + [0.30 × (67 680 − 45 000)]
            = 4 020 + 6 804
            = $10 824
```

</details>

### E2

A single taxpayer with no private hospital cover has taxable income of
$118,000 (also their income for MLS purposes). Compute the Medicare levy
and the Medicare Levy Surcharge.

<details><summary>Answer E2</summary>

```
Medicare levy = 118 000 × 0.02 = $2 360

MLS: 118 000 falls in Tier 1 ($105 001–$123 000) → 1%
MLS = 118 000 × 0.01 = $1 180

Total levies = 2 360 + 1 180 = $3 540
```

Both are applied to the **whole** $118,000, not the amount over each
threshold.

</details>

### E3

A taxpayer's repayment income is $175,000, with an outstanding HELP debt
large enough not to be a limiting factor. Compute the compulsory
repayment, and confirm whether the $186,050 cap binds.

<details><summary>Answer E3</summary>

```
175 000 is in the 129 718–186 050 band:
Repayment = 9 028 + 0.17 × (175 000 − 129 717)
          = 9 028 + 7 698.11
          = $16 726.11

Cap check: 175 000 × 0.10 = $17 500
16 726.11 < 17 500 → the cap does NOT bind; the marginal figure stands.
```

</details>

### E4

What LITO applies to a taxpayer with taxable income of $60,000?

<details><summary>Answer E4</summary>

```
60 000 is in the 45 001–66 667 band:
LITO = 325 − 0.015 × (60 000 − 45 000)
     = 325 − 225
     = $100
```

</details>

### E5

A taxpayer earns $32,000 in wages and receives a $15,000 fully franked
dividend from a **small** company (25% tax rate). No other income or
deductions. Compute the franking credit, taxable income, and net tax
payable.

<details><summary>Answer E5</summary>

```
Franking credit = 15 000 × (25/75) = $5 000

Taxable income  = 32 000 + 15 000 + 5 000 = $52 000

Tax payable     = 4 020 + [0.30 × (52 000 − 45 000)]
                = 4 020 + 2 100
                = $6 120

Medicare levy   = 52 000 × 0.02 = $1 040

Net tax payable = 6 120 + 1 040 − 5 000 (franking offset)
                = $2 160
```

</details>

### E6

An investor sells three parcels of shares in the current year:

- Shares A: bought $40,000, held 18 months, sold $58,000 (gain, discount-eligible)
- Shares B: bought $10,000, held 4 months, sold $13,000 (gain, not discount-eligible)
- Shares C: bought $25,000, held 2 years, sold $16,000 (loss)

Compute the net capital gain under current rules.

<details><summary>Answer E6</summary>

```
Gain A (discountable, >12mo) = 58 000 − 40 000 = 18 000
Gain B (not discountable, <12mo) = 13 000 − 10 000 = 3 000
Loss C = 16 000 − 25 000 = −9 000

Step 1 — apply the loss to the NON-discountable gain first:
  3 000 + (−9 000) = −6 000     (loss remaining, still to absorb)

Step 2 — apply the remaining loss to the discountable gain, THEN discount:
  18 000 + (−6 000) = 12 000
  12 000 × 0.50 = $6 000

Net capital gain = $6 000
```

Discounting Shares A first (`18 000 × 0.5 = 9 000`) and only then
subtracting the loss would give a different, wrong answer — the loss must
be netted before the discount is applied, per trap 15 in the formula sheet.

</details>

### E7

The same Shares A parcel (bought $40,000) instead falls under the post-1
July 2027 rules, with an indexation factor of 1.35 applied to the cost
base, and no capital losses to net against it this year. What is the
assessable gain?

<details><summary>Answer E7</summary>

```
Indexed cost base = 40 000 × 1.35 = $54 000
Assessable gain    = 58 000 − 54 000 = $4 000
```

Compare with the current-rules discount method on the same parcel in
isolation: `(58 000 − 40 000) × 0.5 = $9 000`. Indexation gives a smaller
assessable gain here because most of the nominal gain is being treated as
inflation, not real gain — the two methods will not generally agree, and
which is better depends on how much of the gain is genuinely real versus
just inflation since purchase.

</details>

### E8

A negatively geared rental property has weekly costs (rates, interest,
insurance, management fees) of $410 and depreciation of nil (established
property), against rental income of $340 a week. What is the annual tax
deduction?

<details><summary>Answer E8</summary>

```
Weekly deduction = 410 − 340 = $70
Annual deduction  = 70 × 52 = $3 640
```

</details>

### E9

An employee on a $95,000 gross salary salary-sacrifices $15,000 into
superannuation. Compute the total tax under both options and the saving.

<details><summary>Answer E9</summary>

```
OPTION 1 — no packaging
Tax payable = 4 020 + [0.30 × (95 000 − 45 000)] = $19 020
Medicare    = 95 000 × 0.02                        = $ 1 900
TOTAL                                              = $20 920

OPTION 2 — $15,000 packaged to super
Taxable income = 95 000 − 15 000 = $80 000
Tax payable    = 4 020 + [0.30 × (80 000 − 45 000)] = $14 520
Medicare       = 80 000 × 0.02                       = $ 1 600
Contributions tax = 15 000 × 0.15                    = $ 2 250
TOTAL                                                = $18 370

SAVING = 20 920 − 18 370 = $2 550
```

</details>

### E10

Why does a trust distributing all its income to a beneficiary on the
top marginal rate offer no tax advantage over that beneficiary earning the
income directly — and when *does* a trust help?

<details><summary>Answer E10</summary>

Trust income is taxed in the hands of the beneficiary it's distributed to,
at that beneficiary's own marginal rate. If every dollar goes to someone
already on the 45% bracket, the outcome is identical to them earning it
directly — the trust adds complexity (and, from 1 July 2028, a proposed
minimum 30% trustee-level tax on undistributed or certain income) without
changing the tax paid.

A trust helps when there's a **lower-marginal-rate beneficiary** to
distribute to — a discretionary trust's whole advantage is the flexibility
to direct income wherever the household's marginal rates are lowest each
year, which a partnership (fixed shares) or a company (flat 30%, no
tax-free threshold) cannot replicate.

</details>

---

## Where these came from

Sections A and B–C follow the Week 1 and Week 2 lecture material directly.
Section D follows the technique required by Individual Project Part A, using
the 2026-27 rates supplied in the assignment template. Section E follows
the Week 3 lecture on taxation planning, using the same 2026-27 rates.
No question here is taken from a past exam paper — **there is no past exam
paper in the source material**, and nothing in the folder describes the
exam's format.
