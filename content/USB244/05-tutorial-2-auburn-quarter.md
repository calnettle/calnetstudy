# TUTORIAL 2 — Reading a Tenancy Schedule: Auburn Quarter

Week 3 tutorial. The skill being taught is reading a **tenancy schedule** —
the primary source behind every WALE calculation in this unit, and the
document Assessment 1 Part A requires you to annex if you use your own IM.
Worked end to end on the tutorial's own dataset: the **tenancy schedule for
Auburn Quarter, 296 Lidcombe Road, Auburn**, as of **27 July 2026**.

Unlike [Tutorial 1](#/USB244/04-tutorial-1-information-memorandum), this
exercise has no supplied answer sheet to check against — it is a raw Cirrus8
tenancy schedule export, not a marketing IM. Every figure below was
extracted from the schedule and independently recomputed in Python; the
schedule's own totals were used only as a check, not as a source. It
reconciles cleanly (see §5.2) — no errors were found in the schedule itself,
which is a different situation from Tutorial 1's IM and from the other units'
supplied tutorial answers.

## 5.1 What a Tenancy Schedule Is

> A **tenancy schedule** is a document that lists every tenancy within a
> property and outlines the essential lease information for each tenant:
> rent, lease dates, areas occupied, outgoings, options, and special
> conditions.

From it you can work out: **gross income, net income, rent reviews, lease
expiries, critical dates, and WALE.** As you'll see in §5.6, one of those six
— net income — turns out not to be answerable from this document alone, and
knowing *why not* is as much the point of the tutorial as the WALE
calculation.

## 5.2 The Schedule, Reconciled

Eleven leases across a small mixed retail/office/medical building.

| Unit | Tenant | NLA (sqm) | Term | Expiry | Total $ p.a. |
|---|---|---:|---|---|---:|
| Ground 0001 | Cafe 63 (63 Property Pty Ltd) | 146.00 | 15Y, opt 10Y | 30 Jun 2031 | 120,952.40 |
| Ground 0004 | Duo Burger Co | 84.00 | 7Y, opt 1×5Y | 26 Aug 2031 | 65,920.00 |
| Ground 0005 | Auburn Pathology (Sonic Healthcare Ltd) | 78.00 | 15Y, opt 1×5Y | 22 Oct 2027 | 83,050.02 |
| Ground 002&3 | 12RND Fitness Auburn (A&N Wellness) | 140.00 | 6Y, opt 10Y | 16 Jun 2027 | 91,436.48 |
| Ground 0101 | Auburn Medical (Medical Centre Services) | 361.00 | 5Y, opt 2×5Y | 30 Jun 2027 | 285,513.09 |
| Ground 0102 | Essential Care Dental | 121.00 | 24Y, opt 10Y | 15 Jul 2036 | 102,390.44 |
| Ground 0103 | Auburn Psychology (AB Pty Ltd) | 38.00 | 5Y, opt 1×3Y | 29 Jul 2029 | 25,324.00 |
| Ground 0201 | Auburn Body Corporate (Auburn Management) | 255.00 | 5Y4D, opt 2×3Y | 29 Feb 2028 | 179,634.83 |
| Ground 0202 | Therapy Pro – Auburn | 110.00 | 7Y11M18D, opt 4Y | 10 Jan 2029 | 63,756.00 |
| Ground 0203 | Auburn Physiotherapy (AL Painslayers) | 158.00 | 5Y | 30 Sep 2027 | 100,020.06 |
| Signage | Great Site (Great Site Pty Ltd) | 0.00 | 10Y, opt 1×10Y | 22 Apr 2035 | 28,123.04 |
| **Total** | | **1,491.00** | | | **1,146,120.36** |

```
Sum of tenancy NLA         146+84+78+140+361+121+38+255+110+158+0 = 1,491.00 sqm
Schedule's stated total NLA                                        1,491.00 sqm  ✓

Sum of tenancy Total $ p.a.  120,952.40+65,920.00+83,050.02+91,436.48
                            +285,513.09+102,390.44+25,324.00+179,634.83
                            +63,756.00+100,020.06+28,123.04         = 1,146,120.36
Schedule's stated Property Total                                     1,146,120.36  ✓
```

Both totals reconcile to the cent. Every individual $/m² × NLA and $/month ×
12 figure was also spot-checked against the schedule's own annual column;
differences were all under ten cents — ordinary rounding from the schedule's
own monthly figures, not errors.

> **Fully leased.** The schedule's own footer confirms it: **Leased bays 7,
> vacant bays 0, total bays 7**, and vacant area (0.00%). There is no vacant
> tenancy line to handle in this exercise — unlike the compulsory Part A
> edge cases in the [Formula Sheet](#/USB244/07-formula-sheet), where a
> vacant tenancy is included in the area WALE at zero years.

## 5.3 Gross Income, By Account Code

The schedule bills six account codes. Summing them is the only "gross
income" this document supports — see §5.6 for why it stops there.

| Account | $ p.a. | Share |
|---|---:|---:|
| 201100 Office Rent | 577,123.56 | 50.4% |
| 201120 Retail Rent – Speciality | 356,116.26 | 31.1% |
| 201160 Car Park Rent – Permanent | 4,615.38 | 0.4% |
| 201220 Rent Free (incentive) | −10,000.00 | −0.9% |
| 201260 Other Rent (signage) | 28,123.04 | 2.5% |
| 204100 Outgoings General (recoveries) | 190,142.12 | 16.6% |
| **Property Total** | **1,146,120.36** | **100.0%** |

```
577,123.56 + 356,116.26 + 4,615.38 − 10,000.00 + 28,123.04 + 190,142.12
   = 1,146,120.36   ✓ matches the schedule's Property Total exactly
```

> **Office rent, not retail, is the largest income line — over half the
> building.** Despite being taught in the retail unit of the tutorial
> sequence, Auburn Quarter is a **mixed** asset: two ground-floor food/retail
> specialties (Cafe 63, Duo Burger), a fitness tenancy, a signage licence,
> and **six** office/medical/allied-health suites that between them generate
> just over half the property's income. Don't assume "tenancy schedule
> tutorial in a retail-themed week" means the underlying asset is a shopping
> centre — see §5.4.

### The rent-free line is a live incentive, not a one-off

12RND Fitness carries a **−$10,000 p.a. Rent Free** account line alongside
its base rent, effective from 1 October 2025, netting its Total to
$91,436.48. This is the Topic 2 §2.8 incentive mechanic (face rent ≠
effective rent) visible directly in a tenancy schedule: the $101,436.48 gross
retail rent line is the face rent, and the $10,000 abatement is what the
landlord is actually forgoing to hold that face rate.

### Outgoings recovery is a flat $195.42/m² — but only on five tenancies

Five tenancies carry a 204100 Outgoings General line, all at the same
**$195.42/m²** rate: Auburn Pathology, Auburn Medical, Essential Care Dental,
Auburn Body Corporate, and Auburn Physiotherapy — together the $190,142.12
recoveries total.

```
195.42 × (78 + 361 + 121 + 255 + 158) = 195.42 × 973 sqm = $190,153.66
Actual sum of the five outgoings lines                    = $190,142.12
```

The two-figure gap (~$11.50) is ordinary sub-dollar rounding across five
independently-calculated lines, not an error.

> **Six tenancies carry no outgoings recovery line at all** — Cafe 63, Duo
> Burger, 12RND Fitness, Auburn Psychology, Therapy Pro, and the Great Site
> signage licence. That is the tutorial's own prompt in practice: *"what can
> you see as possible issues for this property? … any opportunities?"* Either
> these six are on leases where outgoings are baked into a gross rent (in
> which case, is that rent high enough to cover a rising outgoings bill?), or
> the landlord is not recovering outgoings it is entitled to on those
> tenancies — which is exactly the kind of leakage a new asset manager should
> chase down at the next renewal, not assume away.

## 5.4 Does Auburn Quarter Fit the PCA Classification Ladder?

Applying [Topic 3 §3.3](#/USB244/03-topic-3-retail): **no.** Every
classification from Neighbourhood upward requires a supermarket or
department-store anchor. Auburn Quarter has neither — its largest tenancies
by area are an office/medical suite (Auburn Medical, 361 sqm) and a body
corporate office (255 sqm), and its retail content is two food specialties
and a fitness studio. At 1,491 sqm total NLA it would sit well under even
the Neighbourhood ceiling (<10,000 sqm) on size alone, but size is not
sufficient — the tenant-mix test fails.

The better description, from Topic 3 §3.4, is a **strip centre**: an
attached row of ground-floor retail and upper-floor office/medical suites
managed as one entity. This matters beyond terminology — a Part A student
who mislabels a building like this as a "Neighbourhood shopping centre" would
be reaching for the wrong PCA benchmark (retail GLAR benchmark vs office NLA
benchmark) for roughly half the tenancy schedule.

## 5.5 Lease Expiries and Critical Dates

Ordered by remaining term from the schedule date (27 Jul 2026):

| Tenant | Area (sqm) | Expiry | Term remaining |
|---|---:|---|---:|
| 12RND Fitness Auburn | 140.00 | 16 Jun 2027 | 0.89 yrs |
| Auburn Medical | 361.00 | 30 Jun 2027 | 0.93 yrs |
| Auburn Physiotherapy | 158.00 | 30 Sep 2027 | 1.18 yrs |
| Auburn Pathology | 78.00 | 22 Oct 2027 | 1.24 yrs |
| Auburn Body Corporate | 255.00 | 29 Feb 2028 | 1.59 yrs |
| Therapy Pro | 110.00 | 10 Jan 2029 | 2.46 yrs |
| Auburn Psychology | 38.00 | 29 Jul 2029 | 3.01 yrs |
| Cafe 63 | 146.00 | 30 Jun 2031 | 4.93 yrs |
| Duo Burger Co | 84.00 | 26 Aug 2031 | 5.08 yrs |
| Great Site (signage) | 0.00 | 22 Apr 2035 | 8.74 yrs |
| Essential Care Dental | 121.00 | 15 Jul 2036 | 9.97 yrs |

> **A 12-month cluster is the property's biggest single risk.** 12RND
> Fitness and Auburn Medical both expire within a year of the schedule date —
> together **501 sqm (33.6% of NLA)** and **$376,949.57 (32.9% of gross
> income)**. Auburn Medical alone is the single largest tenancy by both area
> (24.2% of NLA) and income (24.9% of gross income), and it rolls over in
> under 12 months. A new manager's first move on this schedule is starting
> renewal conversations with Auburn Medical **now**, not waiting for the
> expiry — the same "24–36 months out, open re-gear talks early" principle
> from [Part B's anchor scenario](#/USB244/09-assessment-1-part-b-sam-plan).

> **"Auburn Body Corporate" leasing office space from itself is worth a
> second look.** The tenant name on Unit 0201 is Auburn Body Corporate, and
> the lease-name line reads "Auburn Management" — this reads as the on-site
> building manager's own office, paying market office rent, car parking and
> outgoings on 255 sqm (17.1% of NLA). A related-party tenancy inside a
> tenancy schedule is not necessarily wrong, but it is the kind of line an
> incoming manager or purchaser should confirm is struck at arm's length
> rather than accept at face value — exactly the "test the claim, don't just
> report it" habit Tutorial 1 built around the Richlands Plaza IM.

## 5.6 WALE — By Income and By Area

The unit's two edge-case tables (vacant tenancy, holdover, car parking,
signage, options — see the
[Formula Sheet](#/USB244/07-formula-sheet)) were written for the **EOI
date** convention used in Assessment 1. This tutorial has no EOI date; there
is no sale in progress. The natural reference date is the one printed on the
document itself — **27 July 2026**, the schedule's "as of" date — which is
exactly the fallback the [Part A guide](#/USB244/08-assessment-1-part-a-guide
) already prescribes for an IM with no stated EOI date ("use the date on the
financial pack / tenancy schedule").

Edge cases actually present in this schedule:

- **No vacant tenancy** — fully leased, so nothing to add at zero years.
- **No holdover/monthly tenant** — every lease shows a fixed expiry.
- **No separately-licensed car park** — the one Car Park Rent line (Auburn
  Body Corporate, 6 bays) is bundled into that tenancy's own gross rent, so
  it rolls into that tenancy's income exactly as the edge-case table
  prescribes; it adds no separate line.
- **One signage licence with zero area** — Great Site. It is a real,
  separately-let tenancy with its own expiry (22 Apr 2035), not a rolling
  licence, so — following the same logic as a rooftop telco lease in the
  formula sheet's ancillary-income treatment — it is **included** in the
  income WALE and contributes **zero** to both the numerator and denominator
  of the area WALE (0 sqm × any term = 0), so it is mathematically neutral
  there regardless of whether you include it.
- **All options assumed not exercised**, per the unit's standing convention
  — every "term remaining" above runs to the stated expiry date, not through
  any option period.

```python
WALE (income) = Σ (tenant Total $ p.a. × remaining term) / Σ (tenant Total $ p.a.)
WALE (area)   = Σ (tenant NLA          × remaining term) / Σ (tenant NLA)

remaining term (years) = (expiry date − 27 Jul 2026) / 365.25
```

Full working (income × term, area × term), reproduced from the Python
verification:

| Tenant | Income × term | NLA × term |
|---|---:|---:|
| Cafe 63 | 595,738 | 719.1 |
| Duo Burger Co | 334,969 | 426.8 |
| Auburn Pathology | 102,775 | 96.5 |
| 12RND Fitness | 81,110 | 124.2 |
| Auburn Medical | 264,212 | 334.1 |
| Essential Care Dental | 1,020,681 | 1,206.2 |
| Auburn Psychology | 76,128 | 114.2 |
| Auburn Body Corporate | 286,235 | 406.3 |
| Therapy Pro | 156,750 | 270.4 |
| Auburn Physiotherapy | 117,751 | 186.0 |
| Great Site (signage) | 245,696 | 0.0 |
| **Σ** | **3,282,046** | **3,883.9** |

```
WALE (income) = 3,282,046 / 1,146,120.36 = 2.86 years
WALE (area)   =     3,883.9 /     1,491.00 = 2.60 years
```

**WALE by income: 2.86 years. WALE by area: 2.60 years.**

> **Income WALE exceeds area WALE here — the opposite pattern to Richlands
> Plaza.** At Richlands, a low-rent, long-lease anchor pulled the *area* WALE
> above the *income* WALE. At Auburn Quarter there is no anchor; instead the
> **largest tenancies by area are also among the shortest leases** — Auburn
> Medical (361 sqm, 0.93 yrs) and Auburn Body Corporate (255 sqm, 1.59 yrs)
> together are 41.3% of NLA rolling over inside 20 months — while the
> **longest leases sit on modest area but real income**: Essential Care
> Dental (121 sqm, 9.97 yrs, $102,390) and the zero-area Great Site signage
> licence (8.74 yrs, $28,123) pull the income WALE up without moving the
> area WALE at all. Read [the formula sheet's WALE
> table](#/USB244/07-formula-sheet) for the general rule this is an instance
> of: zero- or low-area long leases lift income WALE; large-area short leases
> drag area WALE down. Both are happening here at once, in opposite
> directions, on the same schedule.

### Sensitivity — does the signage licence matter?

```
WALE (income), signage included    = 2.86 years
WALE (income), signage excluded    = 2.72 years   (income base falls to $1,117,997.32)
```

A $28,123 p.a. line — 2.5% of gross income — moves the income WALE by 0.14
years (about 7 weeks). Small in isolation, but it is exactly the kind of
zero-area line a hurried WALE calculation drops without noticing, and the
formula sheet's own worked example (a $28,000 rooftop telco lease lifting an
income WALE by 0.22 years) shows the same mechanism at a similar scale.

## 5.7 What This Document Cannot Tell You: Net Income

The tutorial's "what can we work out from this?" list includes **net
income** alongside gross income, and it is worth being explicit about why
this particular document stops short of it.

```
NI = Gross income − Outgoings                     (Formula Sheet §"Capital Value")
```

A tenancy schedule shows what is **billed to and recovered from tenants** —
including the $190,142.12 of Outgoings General recoveries in §5.3. It does
**not** show what the **landlord actually spends** operating the building —
statutory charges, operating contracts, management fees, non-recoverable
items. Those two figures are not guaranteed to match: a landlord can under-
or over-recover against actual spend, and non-recoverable outgoings by
definition never appear as a recovery line at all (see Tutorial 1 §3.7 on
Richlands Plaza's $111,400 of non-recoverables). Computing a genuine Net
Income needs the property's **income and expenditure statement**, the
document behind the IM's financial summary in Tutorial 1 — not the tenancy
schedule alone.

> **Don't back into a Net Income figure by treating recoveries as if they
> were the landlord's real outgoings spend.** It is a tempting shortcut —
> the numbers are right there — but it silently assumes 100% recovery and
> zero non-recoverables, which Tutorial 1's own Richlands Plaza figures show
> is not how a real outgoings statement behaves (there, 18.5% of outgoings
> were non-recoverable). State plainly, as this tutorial does, that Net
> Income is not answerable from a tenancy schedule alone.

## 5.8 Tutorial Activity — Issues and Opportunities

The tutorial's own prompt: *"What can you see as possible issues for this
property? Rents. Expiries. Outgoings. Any opportunities?"*

| Prompt | Finding |
|---|---|
| **Rents** | Wide spread across similar-use tenancies — office rents from $437.62/m² (Auburn Physiotherapy) to $650.00–790.90/m² for the newer-dated reviews (Auburn Psychology, Auburn Medical). Older leases (Auburn Pathology from 2012, Essential Care Dental from 2012) sit on long original terms with periodic reviews rather than having been re-based to current market — worth testing at the next rent review. |
| **Expiries** | A **12-month cluster**: 12RND Fitness and Auburn Medical together are 33.6% of NLA and 32.9% of income, both expiring within a year of the schedule date (§5.5). |
| **Outgoings** | Six of eleven tenancies carry **no** outgoings recovery line at all (§5.3) — a recovery gap worth chasing at renewal, or evidence those leases are already gross. |
| **Opportunities** | (1) Auburn Body Corporate's related-party tenancy (§5.5) — confirm arm's length. (2) The Great Site signage licence at $28,123 p.a. from a zero-area asset is exactly the ancillary-income playbook in [Part A §6.7](#/USB244/08-assessment-1-part-a-guide) — worth asking whether more signage, storage or car-park licensing capacity exists on a building with only 7 leasable bays and 1,491 sqm. (3) The imminent Auburn Medical and 12RND Fitness expiries are a renewal-or-reposition decision that should already be underway, not a Week-52 surprise. |

## 5.9 Summary

- Auburn Quarter's tenancy schedule **reconciles exactly**: 1,491.00 sqm NLA
  and $1,146,120.36 gross income both match the schedule's own totals to the
  cent, and every spot-checked line is correct to within ordinary rounding.
  No errors were found in the schedule — unlike Tutorial 1's IM and the
  documented answer-key errors in this unit's siblings, there was nothing
  here to flag as wrong.
- It is a **mixed** asset (50.4% office income) that does **not** fit the
  PCA shopping-centre classification ladder — no supermarket or department-
  store anchor — and is better read as a **strip centre**.
- **WALE by income: 2.86 years. WALE by area: 2.60 years** — income WALE
  exceeds area WALE, the reverse of Richlands Plaza's pattern, because the
  building's largest tenancies by area carry the shortest leases while a
  small, long-let dental suite and a zero-area signage licence carry the
  income WALE upward.
- **Net income cannot be computed from a tenancy schedule alone** — it shows
  billed/recovered income, not the landlord's actual expenditure.
- The property's single biggest near-term risk is the **12-month expiry
  cluster** on its two largest tenancies, worth over 32% of both area and
  income.

<details>
<summary>✅ Checkpoint — reading Auburn Quarter's tenancy schedule</summary>

**Q1. Why is Auburn Quarter not a "Neighbourhood shopping centre" even though
its total NLA (1,491 sqm) is well under the 10,000 sqm ceiling?**

Size alone is not the test. Every tier of the PCA classification from
Neighbourhood upward also requires a supermarket or department-store anchor,
and Auburn Quarter has neither — its retail content is two food specialties
and a fitness studio, and over half its income is office/medical rent. It
fits the physical **configuration** of a strip centre, not any row of the
classification table.

**Q2. The signage licence to Great Site has 0.00 sqm of NLA. Should it be
excluded from the WALE calculations as immaterial?**

Not from the income WALE — it is $28,123 p.a. of real, separately-leased
income with its own expiry date, and excluding it moves the income WALE from
2.86 to 2.72 years, a genuine 0.14-year difference. It is automatically
neutral in the area WALE regardless of inclusion, because 0 sqm contributes
0 to both the numerator and the denominator.

**Q3. Why can't you calculate this property's Net Income from the tenancy
schedule?**

The schedule shows what tenants are billed and what the landlord recovers
(including the $190,142.12 of outgoings recoveries), not what the landlord
actually spends operating the building. Recoveries and actual expenditure
are not guaranteed to match — non-recoverable outgoings, by definition,
never show up as a recovery line — so `NI = Gross income − Outgoings`
cannot be completed without the property's income and expenditure statement.

**Q4. Auburn Medical (361 sqm, $285,513 p.a.) expires in 0.93 years. What
should a property manager already be doing about it, and why?**

Opening renewal or re-gear conversations **now**, not waiting for the
expiry — it is the single largest tenancy by both area (24.2%) and income
(24.9%), and combined with 12RND Fitness's expiry six weeks earlier it puts
a third of the building's income and area up for renewal inside a year.
That mirrors Part B's anchor-scenario guidance: start early, while there is
still time to negotiate from strength rather than under pressure.

</details>
