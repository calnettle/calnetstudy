# Formula Sheet & Exam Traps

Everything from Weeks 1–5 on one page.

## Capital Value

```
CV = NI / CR

CV = Capital value
NI = Net income  = Gross income − Outgoings
CR = Cap rate    = a risk weighting
```

Rearranged:

```
NI = CV × CR
CR = NI / CV
```

**Value of $1 of recurring income** at a given cap rate:

```
Value per $1 pa = 1 / CR

at 5.5%  →  $18.18
at 6.0%  →  $16.67
at 6.5%  →  $15.38
at 7.0%  →  $14.29
```

Useful for instant estimates: cutting $20,000 of non-recoverable outgoings at
a 6% cap rate is worth 20,000 × 16.67 ≈ **$333,000** of capital value.

## Yield

```
Yield = Net income / Price
```

State which income:

```
Net PASSING income      = what is earned today
Net FULLY LEASED income = passing + assumed rent on vacant space
```

The fully leased figure always produces the flattering yield.

## Occupancy Cost

```
GOCR = Gross occupancy cost / Tenant turnover (MAT)
```

Benchmarks: supermarket anchors ≈ 2–4%; specialty retail often 8–15%. A low
ratio means affordable rent, sustainable tenancy, and limited scope to push
rent. A high ratio means renewal risk.

## Productivity

```
Productivity ($/sqm) = MAT / Lettable area
```

## WALE — Weighted Average Lease Expiry

```
WALE (by income) = Σ (tenant income × remaining term) / Σ (tenant income)
WALE (by area)   = Σ (tenant area   × remaining term) / Σ (tenant area)
```

Both are reported because they answer different questions. Reading the gap:

| Observation | Meaning |
|---|---|
| Area WALE **>** income WALE | Long leases sit on low-rent-per-sqm space (typically a big anchor). Income rolls over faster than area does. |
| Income WALE **>** area WALE | Long leases sit on high-rent space. Area rolls over faster than income does. |

Richlands Plaza: income 3.76 years, area 4.02 years — the anchor case.

Calculating WALE from a tenancy schedule is the **Week 3** tutorial.

**Remaining term**, calculated at the assessment's **EOI date**:

```
remaining term (years) = (lease expiry date − EOI date) / 365.25
```

**What goes in, decided** (assessment FAQ):

| Schedule line | Income WALE | Area WALE |
|---|---|---|
| Vacant tenancy | Omit | **Include at 0 years** |
| Holdover / monthly | Omit | Omit — state the assumption |
| Car park, no separate lease | In that tenancy's gross rent | Follows the tenancy |
| Car park, separately licensed | **Include** | No area — discuss |
| Signage | Include if car parking is included | No area — discuss |
| Tenant with an option | Assume **not** exercised | Assume **not** exercised |

### Portfolio WALE

```
Portfolio WALE (income) = Σ (asset net income × asset WALE) / Σ (asset net income)
Portfolio WALE (area)   = Σ (asset area       × asset WALE) / Σ (asset area)
```

Never the simple average of the asset WALEs — that weights a small asset
equally with a large one.

## Ancillary / Non-Space Income

Income that occupies no lettable area: rooftop telecommunications, signage,
ATMs, media screens, casual mall leasing, car parking, EV charging, storage,
utility on-selling (embedded network), percentage rent.

```
Ancillary share  = ancillary income / gross income
Value            = ancillary income / cap rate      ← usually a HIGHER cap rate
```

Richlands Plaza:

```
ATMs 19,706 + sundry 62,127 + % rent 10,441 = 92,274   = 3.31% of gross income

capitalised at 6.0%  $1,537,900
              7.0%   $1,318,200
              8.0%   $1,153,425     ← 25% less than at 6%
```

**Effect on WALE** — zero-area income lines move the income WALE only:

| Driver | Which WALE is higher |
|---|---|
| Big anchor, long lease, low $/sqm | **Area** WALE (Richlands 4.02 > 3.76) |
| Long zero-area licences (telco, signage) | **Income** WALE |

A $28,000 p.a. rooftop telco lease with 15 years to run — 2.2% of income —
lifts an income WALE from 5.21 to **5.43** years and leaves the area WALE
untouched. Casual mall leasing is excluded from the WALE altogether (nominal
term), so a centre with material CML income has a WALE that overstates the
security of its *total* income.

## Leases and Rent Reviews

**WALE interpretation** (Week 5 tutorial):

```
WALE 5+ years      →  secured income, investor-preferred
WALE under 5 years →  turnover, management and leasing cost
                      — AND repositioning / rent-reset opportunity

WALE ↑  →  cap rate ↓  →  capital value ↑     (25 bp ≈ 4% of value)
```

**Review mechanisms:** none · fixed % · percentage steps · CPI · market.
**Modifiers:** ratchet (no decrease) · either-or (higher/lower of two) ·
floor / minimum · cap and collar.

```
CPI review, collar 2% / cap 4%, on $400,000
   CPI 1.1% → 2.0% → $408,000      CPI 6.8% → 4.0% → $416,000
Market falls 8%: no ratchet → $368,000 ; ratchet → $400,000 held
```

**Effective rent** (straight-line):

```
Effective = (total face rent over term − total incentives) / term

1,000 sqm · $500 face · 5 yrs · 6 mo rent-free + $150k fitout
Incentive 400,000 / 2,500,000 = 16%  →  effective $420/sqm
```

**Percentage (turnover) rent:**

```
Natural breakpoint = base rent / percentage rate
% rent             = rate × (turnover − breakpoint), if positive

Base $80,000 at 5% → breakpoint $1.6m
MAT $2.1m → % rent $25,000 → total $105,000
```

**Profit rent** = sublease income − head rent (sublet $360k on $300k head
rent → $60k). **Rental shortfall** is the reverse gap.

## Outgoings Benchmarking (PCA)

```
Outgoings per sqm   = outgoings $ / lettable area     ← NLA for office, GLA/GLAR for retail
Outgoings ratio     = total outgoings / gross income
Recoverable         = statutory + operating
Non-recoverable     = straight off net income
```

Richlands Plaza, worked:

```
Statutory        147,349   $29.79/sqm    24.4% of outgoings
Operating        345,032   $69.75/sqm    57.1%
Non-recoverable  111,400   $22.52/sqm    18.5%
                 ───────   ──────────
                 603,781  $122.05/sqm  · GLA 4,947 sqm
Outgoings ratio  603,781 / 2,791,905 = 21.63% of gross market income
```

Match the **benchmark year to the EOI date**, and the **benchmark sector** to
the asset (office vs retail). If the matching year is unavailable, use the
latest and justify it in the report.

### Cap rate sensitivity — the number to quote

On $2,188,124 of net income:

| Cap rate | Value | vs 6.00% |
|---:|---:|---:|
| 5.50% | $39,784,073 | +9.09% |
| 5.75% | $38,054,330 | +4.35% |
| **6.00%** | **$36,468,733** | — |
| 6.25% | $35,009,984 | −4.00% |
| 6.50% | $33,663,446 | −7.69% |

**25 basis points ≈ 4% of capital value.**

## PCA Measurement — the one table to memorise

| | **NLA** | **GLA** |
|---|---|---|
| Used for | Office buildings | Warehouses, industrial, free-standing supermarkets, showrooms |
| External walls | Measure to the **INSIDE** surface of the dominant portion | Measure to the **OUTSIDE** face of the dominant portion |
| Inter-tenancy walls | Centreline | Centreline |
| Structural columns | Included | Included |
| Engaged perimeter columns | Included | Included |
| Window mullions and frames | Included | Included |
| Fire hose reels on a wall | Included | — |
| Lift lobbies, shafts, stairs | Excluded | Excluded |
| Escalators | Excluded | — |
| Toilets | Excluded (service area) | Excluded (named explicitly) |
| Foyers / atria / access ways | Excluded | Excluded |
| Service areas | Excluded | Excluded |
| Protruding external columns | — | **Not** included |
| Relative size, same envelope | Smaller | Larger |

**Dominant portion** = the portion occupying the most surface area of a
vertical wall. Tested per wall:

```
Window area MORE than 50% of wall  → windows dominant → measure to inside face of glass
Window area LESS than 50% of wall  → wall dominant    → measure to finished wall surface
```

Third method: **GLAR** (Gross Lettable Area – Retail), for retail premises —
full rules below.

## PCA Measurement — GLAR (retail)

Applies to shopping centres, commercial buildings, and strip/free-standing/
semi-detached/terrace shops. Shares the dominant-portion and centreline
rules with NLA/GLA, plus a **third boundary unique to retail — the mall or
shop line**:

```
From   the internal surface, dominant portion of external walls, firewalls, service areas
To     the centreline of inter-tenancy walls
To     the mall or shop line          — regardless of whether the front is set back
To     the external surface           — ONLY IF the front extends BEYOND the mall/shop line
```

| Include | Exclude |
|---|---|
| Window mullions and frames | Areas set aside for services (ducts, a/c risers, fire hose cupboards, plant rooms) |
| Structural columns or piers | Public spaces not for exclusive tenant use (toilets, tea rooms) |
| Engaged perimeter columns | Lift lobbies, shafts, stairs, escalators |
| Fire hose reels attached to a wall | |
| Additional facilities for individual tenants | |

Clearance under 1.5 m (e.g. space under stairs) is measured and **recorded
separately**.

> **The mall line is the opposite trap to GLA's protruding column.** Under
> GLA a protruding external column is *excluded*. Under GLAR a shopfront
> extending *beyond* the mall line is *included* — the reference plane is
> the mall line, not the building envelope, so physically extending past it
> adds real lettable area. A setback shopfront still measures to the mall
> line regardless — the setback recess counts as if built out. Full worked
> example (both directions) in
> [Topic 3 §3.5](#/USB244/03-topic-3-retail).

## Shopping Centre Classification (PCA)

A size-and-tenant-mix ladder, **not** a quality ladder — don't map
Premium/A/B/C language onto it. Every tier requires a supermarket or
department-store anchor.

| Classification | GLA | Anchor requirement |
|---|---|---|
| City centre | > 1,000 sqm | None — CBD arcade/mall, specialty-dominated, usually no supermarket |
| Neighbourhood | < 10,000 sqm | Supermarket + ~35 specialties |
| Sub regional | 10,000–30,000 sqm | Discount department store + major supermarket + ~40+ specialties |
| Regional | 30,000–50,000 sqm | Dept store + discount dept store + supermarket(s) + ~100+ specialties |
| Major regional | 50,000–85,000 sqm | Dept store + discount dept store(s) + supermarket(s) + ~150+ specialties |
| Super regional | > 85,000 sqm | 2 dept stores + discount dept store(s) + 2 supermarkets + ~250+ specialties |
| Bulky goods | > 5,000 sqm | None — bulky-goods retailers, few specialties |

> **A property with no supermarket or department store doesn't fit any row**,
> no matter its size — classify it by **configuration** instead (strip /
> mall / cluster). Auburn Quarter (1,491 sqm, no anchor) is the worked
> example in [Tutorial 2](#/USB244/06-tutorial-2-auburn-quarter).

## WALE From a Tenancy Schedule — No EOI Date

The compulsory Part A method above is anchored to the **EOI date**. A
standalone tenancy schedule (no sale in progress) has no EOI date, so use
the schedule's own **"as of"** date — the same fallback Part A already uses
when an IM has no stated EOI date.

```
No EOI date  →  use the tenancy schedule's own "as of" date
```

A signage or other zero-area licence that is a genuine separate lease (not a
rolling/casual licence) is included in the income WALE exactly like a
rooftop telco lease, and is mathematically neutral in the area WALE — 0 sqm
contributes 0 to both the numerator and the denominator regardless of
inclusion. Worked at length, including the sensitivity of dropping it, in
[Tutorial 2](#/USB244/06-tutorial-2-auburn-quarter).

> **A tenancy schedule gives you Gross income, not Net income.** It shows
> what is billed and recovered from tenants — not what the landlord actually
> spends operating the building. `NI = Gross income − Outgoings` needs the
> income and expenditure statement; a tenancy schedule alone cannot complete
> it, because recoveries and actual expenditure are not guaranteed to match
> and non-recoverable outgoings never appear as a recovery line at all.

## PCA Office Grades — quick reference

| | Premium | Grade A | Grade B | Grade C |
|---|---|---|---|---|
| Green Star – Performance v1.2 | 4 Star | 3 Star | 2 Star | 2 Star |
| NABERS Office Energy | 5 Star | 4.5 Star | 4 Star | 3 Star |
| NABERS Office Water | 4 Star | 3.5 Star | 3 Star | 3 Star |
| Operational Waste credit | Yes | Yes | No | No |
| NABERS IE (base building) | 5 Star | 4 Star | 3 Star | — |
| Climate adaptation capacity | Yes | Yes | — | — |

**Size, existing buildings** (Brisbane falls under "other CBDs"):

| | Premium | Grade A | Grade B |
|---|---|---|---|
| Syd/Melb CBD NLA | > 30,000 | > 10,000 | > 5,000 |
| Other CBDs NLA | > 20,000 | > 5,000 | > 2,500 |
| Syd/Melb floor plate | > 1,200 | > 900 | — |
| Other CBDs floor plate | > 1,000 | > 800 | — |

**Size, new buildings** (Brisbane and Perth named separately):

| | Premium | Grade A | Grade B |
|---|---|---|---|
| Syd/Melb NLA | > 30,000 | > 10,000 | > 5,000 |
| **Bris/Perth NLA** | **> 25,000** | > 10,000 | > 5,000 |
| Other CBDs NLA | > 20,000 | > 5,000 | > 2,500 |
| Syd/Melb/Bris/Perth floor plate | > 1,500 | > 1,000 | > 700 |
| Other CBDs floor plate | > 1,200 | > 800 | > 600 |

Guide: *A Guide to Office Building Quality*, 3rd edition, effective 1 July 2019.

## Risk Matrix

| | **Low impact** | **High impact** |
|---|---|---|
| **High probability** | Adjust systems to lower probability · benchmark · low-cost systems solutions | ← **concentrate effort here** · specific risk management plan · major strategy changes |
| **Low probability** | Maintenance management / response · systems and records · look for trends | **Insurance** · lower risk profile in specific areas |

```
Internal to the property → NON-SYSTEMIC risk  (manageable)
External to the property → SYSTEMIC risk      (market-wide)
```

Risk = variance from expectation. It can be **positive or negative**.

## Key Market Figures

**PCA office vacancy**

| | Jul 2024 | Jan 2025 | Jul 2025 |
|---|---|---|---|
| Australia | — | 14.7% | 15.2% |
| Sydney CBD | 18.0% | 12.8% | 13.7% |
| Melbourne CBD | 11.6% | 18.0% | 17.9% |
| Brisbane CBD | 9.5% | 10.2% | 10.7% |
| Perth CBD | — | 15.1% | 17.0% |
| Adelaide CBD | — | 16.4% | 15.0% |
| Canberra | — | 9.2% | 10.7% |
| Hobart CBD | — | 3.6% | no data |

**Brisbane CBD stock by grade (sqm)**

| Grade | Jul 2023 | Jul 2024 | Jul 2025 |
|---|---:|---:|---:|
| Premium | 395,257 | 395,257 | 395,257 |
| A Grade | 990,134 | 990,134 | 1,035,493 |
| B Grade | 721,553 | 694,308 | 697,743 |
| C Grade | 221,897 | 208,804 | 208,804 |
| D Grade | 27,821 | 27,821 | 27,821 |
| **Total** | **2,356,662** | **2,316,324** | **2,365,118** |

At Jul 2025 the mix is Premium 17% / A 44% / B 29% / C 9% / D 1%. Total stock
grew 48,794 sqm over the year, almost all of it A Grade (+45,359).

**Brisbane industrial (CBRE, 2Q23)** — vacancy 0.6% · net face rental growth
12.5% to $145/m² · average incentives 13% · demand led by transport, postal
and warehousing 44%, retail trade 19%.

## Exam Traps

> **1. Cap rate direction.** CR is in the denominator. *Lower* cap rate =
> *higher* value. "The cap rate improved to 7%" from 6% is backwards.

> **2. NLA vs GLA.** NLA measures to the **inside** of external walls, GLA to
> the **outside**. GLA is always larger for the same envelope. Never compare
> $/sqm across the two bases.

> **3. Structural columns are included in both.** Only externally *protruding*
> columns are excluded, and only under GLA.

> **4. Dominant portion is a per-wall test.** One tenancy can be measured to
> glass on one elevation and to plaster on another.

> **5. Existing vs new PCA size tables differ, and Brisbane moves between
> them.** Brisbane is "other CBDs" for existing buildings but named separately
> for new ones, where Premium jumps to 25,000 sqm and a 1,500 sqm floor plate.

> **6. Insurance is the low-probability / high-impact answer.** It is never the
> answer for a high-probability risk.

> **7. Tenant ≠ occupant.** Tenant wants a platform for business; occupant
> wants habitability.

> **8. Internal → non-systemic, external → systemic.** Easy to invert.

> **9. Passing vs fully leased income.** Fully leased includes rent nobody
> pays. Yields quoted on it are flattered.

> **10. Always state the denominator.** "70% Woolworths" and "56.8%
> Woolworths" describe the same tenant in the same centre — main centre GLA
> versus total GLA.

> **11. Percentage claims in an IM run the wrong way.** Richlands Plaza labels
> "43% replacement cost above entry level" when entry level is 43% *below*
> replacement cost; replacement is actually 75% above. Compute it yourself and
> name the base.

> **12. Face rent ≠ effective rent.** Incentives protect capitalised value at
> a one-off cash cost. "Net face rental growth of 12.5%" alongside "average
> incentives 13%" is not 12.5% of real growth.

> **13. Two WALEs.** Income-weighted and area-weighted differ, and the gap tells
> you where the long leases sit.

> **14. Both SAM components start at three to five years.** The difference is
> the upper bound — strategic extends to ten years and beyond.

> **15. The slide decks contradict themselves on dates and one figure.** Site
> visits appear as both 2025 and 2026; 360 Queen Street is 45,000 sqm in one
> place and 50,000 sqm in another; Waterfront Brisbane is 120,000 sqm in the
> pipeline table but 145,190 sqm of total GFA in the detail slide; the Jan-25
> slide misdates Sydney's 18% vacancy as January 2025 when it is July 2024.
> Check Canvas, and cite ranges.

> **16. WALE is calculated at the EOI date, not today** — and vacant space is
> in the area WALE at zero years but out of the income WALE. Not out of both.

> **17. Portfolio WALE is income- or area-weighted, never a simple average**
> of the asset WALEs.

> **18. Losing an anchor costs more than the lost rent.** The cap rate
> re-rates too. On Richlands' numbers the income fall is 47.1% and the total
> value fall, with the cap rate moving 6.00% → 7.50%, is **57.7%**.

> **19. Never benchmark $/sqm across different area bases.** GLA is always
> larger than NLA for the same envelope, so the same dollars give a lower
> $/sqm on GLA. Office benchmarks on NLA, retail on GLA/GLAR.

> **20. Ancillary income is not capitalised like base rent.** Short, unsecured
> and foot-traffic dependent — a 200 bp premium costs 25% of its value. And it
> falls *with* the anchor, because it prices off the same foot traffic.

> **21. Retail's PCA classification (City Centre → Bulky Goods) ranks size
> and tenant mix, not quality.** Don't map Premium/A/B/C language onto it —
> and every tier from Neighbourhood up requires a supermarket or department-
> store anchor. No anchor, no fit, regardless of size.

> **22. GLAR's mall line is the opposite trap to GLA's protruding column.**
> GLA excludes a protruding external column; GLAR *includes* a shopfront
> that extends past the mall line, because the mall line — not the building
> envelope — is the reference plane. A setback shopfront still measures to
> the mall line regardless of the setback.

> **23. A tenancy schedule gives Gross income, not Net income.** It shows
> billed/recovered amounts, not the landlord's actual spend. Non-recoverable
> outgoings never appear as a recovery line, so `NI = GI − Outgoings` cannot
> be completed from a tenancy schedule alone.

> **24. With no EOI date, use the tenancy schedule's own "as of" date for
> WALE** — the same fallback already used for an IM with no stated EOI date.

> **25. A zero-area licence that is a genuine separate lease (not a rolling
> casual licence) belongs in the income WALE.** It is mathematically neutral
> in the area WALE either way — 0 sqm contributes 0 regardless of inclusion —
> but omitting it from the income WALE understates the number for no reason.

> **26. Ratchets are restricted in retail.** A no-decrease clause on a market
> review generally has no effect under Queensland's Retail Shop Leases Act,
> but stands in a commercial (office/industrial) lease. Confirm the current
> Act before quoting it — the office-vs-retail distinction is the exam point.

> **27. Percentage rent only accrues above the natural breakpoint** — and the
> breakpoint is base rent ÷ percentage rate, not a number someone chose.
> $80,000 at 5% means nothing is payable until turnover clears $1.6m.

> **28. The tenancy schedule shows face rent; the deal was done at effective
> rent.** Effective = (total face − incentives) ÷ term. A 16% incentive turns
> $500/sqm into $420/sqm, and the schedule never mentions it.

> **29. A long lease with a demolition clause is not a long lease.** The
> owner can cut it short for redevelopment, and purchasers price the WALE
> accordingly — check for it whenever an IM sells "development upside" over
> a long WALE. And options never count as secured term.

> **30. A short WALE is risk *and* opportunity — say which you're arguing.**
> Under five years means turnover, leasing cost and vacancy exposure to an
> income investor, and a rent-reset/repositioning window to a value-add
> buyer. An answer that only sees one side is half an answer.
