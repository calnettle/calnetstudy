# TUTORIAL 3 — WALE Calculation

Week 5 tutorial. The shortest deck of the unit so far, because the heavy
lifting already happened: the in-class activity is *"using the tenancy
schedule provided from week 3, populate the tenancy details and calculate
the WALE on income and area"* — the Auburn Quarter schedule, worked line by
line in [Tutorial 2](#/USB244/06-tutorial-2-auburn-quarter). What this
tutorial adds is the **interpretation layer**: what WALE means, the 5-year
threshold, and the WALE → cap rate → value chain.

Official solutions arrive in the **Week 6 tutorial** ("WALE Solutions").

## 7.1 What WALE Is

The deck quotes the Property Council of Australia definition:

> "the weighted average lease term remaining to expire across a portfolio,
> it can be weighted by rental income or square metres."

Two things hide in that sentence. *Weighted* — a big tenancy moves the
number more than a small one, which is why a simple average of terms is
always wrong. And *income or square metres* — there are two WALEs, they
answer different questions, and this unit requires both every time.

```
WALE (income) = Σ (tenant income × remaining term) / Σ (tenant income)
WALE (area)   = Σ (tenant area   × remaining term) / Σ (tenant area)

remaining term (years) = (lease expiry − calculation date) / 365.25
```

The calculation date is the **EOI date** in Assessment Part A, or the
tenancy schedule's own date when there is no EOI — the convention, the
fallback and every edge case (vacant, holdover, car parking, signage,
options) are tabled in the [Formula Sheet](#/USB244/09-formula-sheet) and
the [Part A guide](#/USB244/10-assessment-1-part-a-guide).

## 7.2 What the Number Means — the 5-Year Threshold

The deck draws the interpretive line at five years:

| | WALE **5+ years** | WALE **under 5 years** |
|---|---|---|
| Income security | Secured well into the future | Rolls over soon |
| Investor view | **Preferred** — vacancy unlikely to be a near-term issue | Priced for risk |
| Management load | Lower | High tenant turnover — greater management and leasing costs |
| The other side | Little near-term flexibility | **Opportunity**: reset leases to higher rents, upgrade or reposition the building |

That last cell is the line worth remembering: a short WALE is a *risk to an
income investor and an opportunity to a repositioner*. The same 2.6-year
WALE that scares a super fund is exactly what a value-add buyer pays for —
imminent expiries are the door through which rents get reset and buildings
get upgraded.

## 7.3 WALE and the Cap Rate

The deck's one-line chain:

```
WALE ↑   →   cap rate ↓   →   capital value ↑
```

A longer WALE means more secure income, a lower risk weighting, and — since
the cap rate sits in the denominator of `CV = NI / CR` — a higher value.
It's worth carrying the unit's standard quantification: on $2,188,124 of net
income, 25 basis points of cap-rate compression (6.00% → 5.75%) adds
**$1,585,597, or +4.35%**. That is what "lengthening the WALE" is actually
worth, and it is why an owner will pay real incentive money for term.

## 7.4 What a Tenancy Schedule Must Give You

The deck's checklist, which doubles as the columns of your Part A working:

- Area (NLA)
- Lease commencement and expiry
- Option periods
- Rent — and whether it is gross or net
- Rent review dates and mechanisms
- Outgoings
- Other income sources — car parking, signage, storage

Note what's *absent* from a tenancy schedule: outgoings detail sufficient to
compute **net** income — the point [Tutorial 2 §5.7](#/USB244/06-tutorial-2-auburn-quarter)
makes at length. A schedule gives gross income and expiry structure; the
financial pack gives the rest.

## 7.5 The Activity, Solved — Auburn Quarter

The full per-tenant working (all eleven lines, both WALEs, every edge case
reasoned) is in [Tutorial 2 §5.6](#/USB244/06-tutorial-2-auburn-quarter);
the results, computed at the schedule's own date of 27 July 2026 with
options assumed not exercised:

```
WALE (income) = 3,282,046 / 1,146,120.36 = 2.86 years
WALE (area)   =   3,883.9 /     1,491.00 = 2.60 years
```

Run through this tutorial's interpretation frame:

- **Both WALEs are under the 5-year threshold** — Auburn Quarter is the
  right-hand column of the table in §7.2: high near-term turnover, real
  management and leasing load, and equally real repositioning opportunity.
  41.3% of the NLA (Auburn Medical + Auburn Body Corporate) rolls over
  inside 20 months of the schedule date — that is either a rent-reset
  window or a vacancy cliff, depending entirely on management.
- **The two WALEs differ, and the deck asks why.** Income WALE (2.86)
  exceeds area WALE (2.60) because the longest leases sit on modest or zero
  area — Essential Care Dental (121 sqm, ~10 years) and the Great Site
  signage licence (0 sqm, ~8.7 years, $28,123 p.a.) lift the income WALE
  without moving the area WALE. Richlands Plaza shows the same gap running
  the other way (income 3.76 < area 4.02) because its long lease is a big
  low-rent anchor. The gap's *direction* tells you where the long leases
  live.
- **The zero-area line matters.** Dropping the signage licence cuts the
  income WALE from 2.86 to 2.72 — about seven weeks from one 2.5%-of-income
  line. The FAQ's instruction to raise zero-area income as a discussion
  item exists precisely because of lines like this.

> **When the official solutions land in Week 6, cross-check before
> panicking.** If the unit's answer differs from 2.86 / 2.60, the two
> assumptions to test first are the **calculation date** (these figures use
> the schedule's printed 27 July 2026 date; a solution keyed to a different
> date shifts every term by the same offset) and the **signage licence**
> (included here; excluding it gives 2.72 by income). Between them, those
> two choices explain almost any plausible divergence — and if a residual
> difference survives both checks, work the algebra and take it to the
> tutor, as this unit's notes have had to do before.

## 7.6 Summary

- WALE is the income- or area-weighted average remaining lease term — PCA
  definition, both bases, always.
- **Five years** is the interpretive threshold: above it, secured income
  investors pay for; below it, management load — and repositioning
  opportunity.
- WALE ↑ → cap rate ↓ → value ↑, and 25 bp ≈ 4% of value is the working
  quantification.
- The tenancy schedule supplies area, dates, options, rent basis, reviews
  and other income — but not net income.
- Auburn Quarter: **2.86 income / 2.60 area**, both short, gap explained by
  zero-area long leases — full working in Tutorial 2, official solutions in
  Week 6.

## Checkpoint

1. Why does the PCA definition say "weighted"? What error does it rule out?
2. A fund manager and a private value-add syndicate both inspect Auburn
   Quarter. One walks away at the WALE; one leans in. Reconcile.
3. Without recalculating: if the Week 6 solutions computed Auburn's WALE at
   1 July 2026 instead of 27 July 2026, roughly how would every remaining
   term differ, and in which direction does each WALE move?
4. Kallangur Fair markets a 9.0-year WALE by area. Its income WALE is
   materially lower. Using this tutorial's frame, which number should an
   income-focused investor weight, and why?
5. Name the three lease features a schedule can show that make a stated
   WALE overstate true income security.

<details><summary>Answers</summary>

1. Because each lease's term is weighted by its income (or area) share — a
   simple average of expiry terms treats a $28,000 signage licence and a
   $285,000 medical centre as equals. "Weighted" rules out the simple
   average, which is the classic error (it mis-stated the Part B portfolio
   WALE by 0.43 years in the worked example).
2. Both are reading the same 2.86 / 2.60 correctly. The fund manager wants
   secured income — sub-5 WALE means near-term rollover risk, leasing cost
   and vacancy exposure. The syndicate wants exactly those expiries: 41.3%
   of NLA re-pricing inside 20 months is the mechanism for resetting rents
   and repositioning the asset. Short WALE is risk or opportunity depending
   on the buyer's strategy — the deck's own point.
3. Every remaining term grows by 26 days ≈ **0.07 years**, and both WALEs
   rise by roughly that amount (2.86 → ~2.93; 2.60 → ~2.67). Date choice
   shifts the level, not the story — which is why stating the calculation
   date is mandatory.
4. **The income WALE.** Income security is about when *dollars* stop being
   contractual, not when floor area falls vacant. Kallangur's 9.0 by area
   leans on an anchor holding 69% of area but only 40% of income; roughly
   60% of the income re-prices on a much shorter cycle. The area WALE is
   the flattering number, which is why the IM quotes it alone.
5. **Options counted as term** (assume not exercised — secured term ends at
   initial expiry), **demolition/relocation clauses** (the owner can cut
   the term short), and **zero-area or ancillary income lines with long
   terms** (they lift the income WALE while the occupational tenancies roll
   much sooner — Auburn's signage licence is worth 0.14 years of income
   WALE on its own).
</details>
