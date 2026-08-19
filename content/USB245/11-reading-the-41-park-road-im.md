# READING THE 41 PARK ROAD IM

The information memorandum for **41 Park Road, Milton QLD 4064** is the only
property-specific information you are permitted to use in A1 and A2 — the
brief bans contact with the agent, owners and tenants. So everything the
model needs either comes out of this eleven-page document or has to be
assumed and justified.

This note reconciles every figure in it. **Three arithmetic errors and
several internal contradictions were found.** Each is shown with its working.

> **An IM is a sales document, not a fact sheet.** It is produced by the
> selling agent, for the vendor, to make the asset attractive. Its own
> disclaimer says the figures "are based upon figures provided to us by
> outside sources and have not been verified by us in any way" and that the
> agent has "no belief one way or the other in relation to the accuracy of
> such information". Quote it for facts — areas, income lines, lease dates
> — and interrogate it for claims. The gap between the two is where the
> marks are.

## 5.1 The Asset

| Item | Stated |
|---|---|
| Address | 41 Park Road, Milton QLD 4064 |
| Real property description | L36 RP9895 |
| Land area | 671 m²\* |
| Gross floor area | 1,209 m²\* over 3 floors |
| Street frontage | 55 m\* |
| Gross rental income | $454,237.52\* p.a. |
| Net rental income | $370,259.88\* p.a. |
| Zoning | DC2 District Centre (corridor) |
| Neighbourhood plan | Milton Station Neighbourhood Plan, Mixed Use Centre Precinct NPP-001 |
| Solar | 120 solar panels |
| Tenants | 8 |

\* The IM marks every one of these "approximately".

Freestanding three-level building on the corner of Douglas Street and Park
Road. Marketed by a Fortitude Valley commercial agency.

### Geometry checks

```
Plot ratio = GFA / land = 1,209 / 671 = 1.80

Average floorplate = 1,209 / 3 = 403 m²
Implied site coverage if the three floors are equal
                = 403 / 671 = 60.1%

Corner-site frontage check:
  Two frontages summing to 55 m enclosing 671 m² would be
  roughly 36.7 m × 18.3 m = 671 m²                        ✓ plausible
  A SINGLE 55 m frontage would imply a depth of 12.2 m    ✗ implausible
```

So the 55 m is the **combined** frontage of a corner site, which is
consistent with the stated corner position. That one passes.

> **The IM gives GROSS floor area. Rent is not paid on GFA.** GFA includes
> stairs, lift shafts, plant, lobbies and common area. Dividing income by
> 1,209 m² gives $375.71/m² gross, which is *not* a market rent you can
> compare to anything. On a plausible 80–90% efficiency the true rate on
> lettable area is:

| Assumed efficiency | Lettable area | Gross $/m² | Net $/m² |
|---|---|---|---|
| 80% | 967 m² | $469.64 | $382.82 |
| 85% | 1,028 m² | $442.02 | $360.30 |
| 90% | 1,088 m² | $417.46 | $340.28 |
| 100% (i.e. GFA) | 1,209 m² | $375.71 | $306.25 |

The spread between the top and bottom of that table is **25%** of the rate.
Any comparison you make to PCA or agency $/m² evidence is only as good as
your efficiency assumption — so state it, justify it, and sensitivity-test it.

### The location claims disagree with each other

| Claim | Where |
|---|---|
| "Milton train station just **220 metres** away" | Introduction, page 2 |
| Train icon: **400 m\*** | Distances page |
| "the Coronation Road bus stop only **160 metres**" | Introduction, page 2 |
| Bus icon: **90 m\*** | Distances page |

The distances page also gives: ferry 260 m, airport 16.1 km, CBD 4.1 km.

> **Two pages of the same document give different distances to the same
> train station and the same bus stop.** Neither pair reconciles: 220 vs
> 400 m for the station, 160 vs 90 m for the bus. Do not quote either as
> fact. Measure it yourself and cite your source — this is precisely the
> kind of claim the A2 rubric expects you to verify rather than repeat.

## 5.2 The Tenancy Schedule

Eight tenants, all businesses. As printed:

| Tenant | Lease com. | Lease exp. | Options | Rent p/m | Rent p/a | Increases |
|---|---|---|---|---|---|---|
| Ella Moda | 01/04/2021 | 31/03/2027 | — | $5,164.88 | $61,978.56 | 4% |
| Bridal Alterations | 01/03/2026 | 28/02/2029 | 2 × 3 yrs | $2,142.45 | $25,709.40 | 3.5% |
| Sciaccas Lawyers | 30/04/2025 | 30/03/2028 | — | $2,333.33 | $28,000.00 | 4% |
| Meralai Suits | 01/12/2024 | 30/11/2026 | 1 × 1 yr | $2,916.67 | $35,000.00 | 4% |
| Paris Texas | 01/03/2025 | 30/11/2026 | 1 × 3 yrs | $3,767.50 | $45,210.00 | 4% |
| The Movement Standard | 01/06/2025 | 31/05/2027 | 2 × 2 yrs | $16,475.00 | $197,710.20 | 4% |
| Dean Property Management | 01/03/2025 | 28/02/2027 | 1 × 2 yrs | $2,135.78 | $25,629.36 | 4% |
| Kwik Kopy Shop | 01/01/2026 | 31/12/2028 | 1 × 3 yrs | $2,916.67 | $35,000.00 | 3% |
| **Total** | | | | **$37,853.13** | **$454,237.52** | |

### Error 1 — the monthly column does not sum to its own total

```
Annual column, summed:      $454,237.52   ✓ matches the stated total exactly
Monthly column, summed:     $ 37,852.28
Stated monthly total:       $ 37,853.13
                            ────────────
Discrepancy:                $      0.85
```

The annual column reconciling **exactly** is what pins the error. Test each
row by multiplying the monthly figure by 12:

```
Ella Moda                  5,164.88 × 12 =  61,978.56   ✓ exact
Bridal Alterations         2,142.45 × 12 =  25,709.40   ✓ exact
Sciaccas Lawyers           2,333.33 × 12 =  27,999.96   ≈ (rounding, 4c)
Meralai Suits              2,916.67 × 12 =  35,000.04   ≈ (rounding, 4c)
Paris Texas                3,767.50 × 12 =  45,210.00   ✓ exact
The Movement Standard     16,475.00 × 12 = 197,700.00   ✗ SHORT BY $10.20
Dean Property Management   2,135.78 × 12 =  25,629.36   ✓ exact
Kwik Kopy Shop             2,916.67 × 12 =  35,000.04   ≈ (rounding, 4c)
```

The correct monthly rent for The Movement Standard is
`197,710.20 / 12 = $16,475.85`, not $16,475.00. Substitute it and the column
reconciles to the cent:

```
37,852.28 + 0.85 = $37,853.13   ✓ = the stated monthly total
```

And the stated total is itself `454,237.52 / 12 = $37,853.1267`, rounded.

> **Use the ANNUAL column. It is the one that reconciles.** The monthly
> total was computed from the annual total, not from the monthly column, so
> the $0.85 is a transcription error in one cell, not a real difference. If
> you build your model off the monthly column you will be $10.20 a year
> short on the building's largest tenant, and your tenancy schedule will not
> tie to the IM's headline gross income. Model annual rents ÷ 12.

### Error 2 — a business named in the profiles is not in the schedule

The tenant profile page describes eight businesses. Seven match the schedule.
The eighth is described as **House of Falcone**, "a prestigious suit
tailoring business, specialising in high-end custom suits, with a particular
focus on wedding attire" who "have only just moved into the building". The
schedule instead lists **Meralai Suits**, with a lease commencing
01/12/2024.

Similarly the profile page says **Dean Property Team**; the schedule says
**Dean Property Management**.

> **Name mismatches between the profile page and the tenancy schedule are
> not cosmetic — they change the covenant you are underwriting.** You cannot
> assess tenant quality for a business you cannot identify. In the report,
> use the **tenancy schedule** names (that is the document that ties to the
> income) and note the discrepancy as an item for due diligence. Do not
> assume they are the same entity.

### The profile page describes occupancy history, not lease terms

Several profiles describe how long a business has been in the building.
None of it matches the current lease commencement dates:

| Profile says | Schedule says |
|---|---|
| The Movement Standard has been "in the building for nearly seven years" | Lease commenced 01/06/2025 |
| Paris Texas "a valued tenant in the building since before 2014" | Lease commenced 01/03/2025 |
| Bridal Alterations has "over 10 years in operation" | Lease commenced 01/03/2026 |
| House of Falcone "have only just moved into the building" | Meralai Suits commenced 01/12/2024 |

> **Occupancy history is not lease security, and the IM conflates them.**
> A tenant of seven years standing on an eight-month remaining term is an
> eight-month income stream. Long tenure is a *soft* argument for renewal
> probability — worth a sentence in the qualitative risk section — and it is
> worth exactly zero in the WALE.

### Lease terms as written

```
Ella Moda                  01/04/2021 → 31/03/2027   6.00 years
Bridal Alterations         01/03/2026 → 28/02/2029   3.00 years  + 2×3
Sciaccas Lawyers           30/04/2025 → 30/03/2028   2.92 years
Meralai Suits              01/12/2024 → 30/11/2026   2.00 years  + 1×1
Paris Texas                01/03/2025 → 30/11/2026   1.75 years  + 1×3
The Movement Standard      01/06/2025 → 31/05/2027   2.00 years  + 2×2
Dean Property Management   01/03/2025 → 28/02/2027   2.00 years  + 1×2
Kwik Kopy Shop             01/01/2026 → 31/12/2028   3.00 years  + 1×3
```

Two look like transcription slips rather than deliberate terms: Sciaccas at
2.92 years (a 3-year term from 30/04/2025 would expire 29/04/2028, not
30/03/2028) and Paris Texas at 1.75 years. Flag both; model the dates as
printed, and note the sensitivity.

## 5.3 What the Tenancy Schedule Does *Not* Tell You

This list matters more than the list of what it does tell you, because every
gap is an assumption you must justify:

- **No tenancy areas.** Not one square metre is allocated to any tenant. So
  you cannot compute rent per m² by tenancy, cannot compute WALE by area,
  cannot tell whether any tenant is over- or under-rented, and cannot build
  a stacking plan.
- **No rent review dates** — only a percentage. Assume annual reviews on the
  lease anniversary and say so.
- **No review type.** A bare "4%" implies a *fixed* review, but the IM never
  says fixed, CPI, market or greater-of. It matters: a fixed 4% in a 3%
  inflation market drifts rents above market and raises reversion risk.
- **No outgoings responsibility** per lease — gross or net is not stated
  anywhere. The recovered-outgoings table (§5.5) is the only evidence, and
  it implies these are substantially **gross** leases.
- **No incentives disclosed** on existing leases.
- **No bank guarantees, bonds or personal guarantees.**
- **No floor or stacking plan** in the document — the visual pages are
  photographs only.
- **No car parking** mentioned anywhere.
- **No building age or construction date.** The 1988 construction and 2020
  refurbishment come from the **assignment brief**, not the IM.

> **Everything on that list is a defensible assumption you must state — not
> a reason to guess quietly.** A2's rubric asks for evidence and
> justification of every DCF input. "The IM does not disclose tenancy areas,
> so an 85% efficiency on the 1,209 m² GFA has been assumed, giving 1,028 m²
> of lettable area" is a mark. Silently dividing by 1,209 is not.

## 5.4 The Rental Increases

| Increase | Tenants |
|---|---|
| 4.0% | Ella Moda, Sciaccas Lawyers, Meralai Suits, Paris Texas, The Movement Standard, Dean Property Management |
| 3.5% | Bridal Alterations |
| 3.0% | Kwik Kopy Shop |

Weighted by income, the average fixed review is **3.90% p.a.**

> **Fixed reviews above market rental growth are a liability dressed as an
> asset.** A 4% fixed review looks like a strong income escalator, and it is
> — until expiry, when the rent resets to market. If market rents are growing
> at 3% and the passing rent has been compounding at 4%, the tenant is
> progressively over-rented and the reversion on renewal is *negative*. Model
> the re-let at your researched **market** rent, not at the escalated passing
> rent. Carrying the passing rent through the re-let is one of the most
> common and most expensive errors in a student DCF.

## 5.5 The Outgoings

As printed:

| Outgoing | per "quater" | per annum |
|---|---|---|
| Land Tax | $2,458.33 | $29,500.00 |
| BCC Rates | $5,374.30 | $21,497.20 |
| State Gov Charges | $1,526.25 | $6,105.00 |
| Urban Utilities | $1,721.08 | $6,884.32 |
| Electricity | $4,598.72 | $18,394.88 |
| Insurance | $3,745.75 | $14,983.00 |
| **Total** | **$16,966.10** | **$97,364.40** |

### Error 3 — the Land Tax row breaks twice

Test the quarterly column by multiplying by 4:

```
Land Tax            2,458.33 × 4 =  9,833.32   vs stated  29,500.00   ✗
BCC Rates           5,374.30 × 4 = 21,497.20   vs stated  21,497.20   ✓
State Gov Charges   1,526.25 × 4 =  6,105.00   vs stated   6,105.00   ✓
Urban Utilities     1,721.08 × 4 =  6,884.32   vs stated   6,884.32   ✓
Electricity         4,598.72 × 4 = 18,394.88   vs stated  18,394.88   ✓
Insurance           3,745.75 × 4 = 14,983.00   vs stated  14,983.00   ✓
```

Five of six rows reconcile exactly, which pins the sixth. And the Land Tax
figure is not random:

```
29,500.00 / 12 = $2,458.33      ← a MONTHLY figure in a column headed "per quarter"
29,500.00 /  4 = $7,375.00      ← what the quarterly figure should be
```

Then the total. Sum the quarterly column as printed:

```
2,458.33 + 5,374.30 + 1,526.25 + 1,721.08 + 4,598.72 + 3,745.75 = $19,424.43
Stated quarterly total:                                            $16,966.10
                                                                   ───────────
Difference:                                                        $ 2,458.33
```

The difference is **exactly the Land Tax entry**. So the stated quarterly
total was struck across the other five rows only — land tax was omitted
altogether. The correct quarterly total is `97,364.40 / 4 = $24,341.10`.

> **One row, two independent errors: a monthly figure in a quarterly column,
> and a total that silently excludes it.** The annual column is the one that
> reconciles — it sums to $97,364.40 exactly — so build your outgoings
> schedule from the annual column and derive the monthly as `annual ÷ 12`.
> Anyone who takes the quarterly column at face value understates annual
> outgoings by `(29,500 − 9,833) = $19,667`, which at a 6.5% cap rate is
> about **$302,000** of overstated value.

### Recovered outgoings

| Outgoing | per quarter | per annum |
|---|---|---|
| Electricity (solar supply) | $3,346.69 | $13,386.76 |
| **Total** | **$3,346.69** | **$13,386.76** |

This row reconciles: `3,346.69 × 4 = $13,386.76` ✓.

```
Electricity cost to the building        $18,394.88
Recovered from tenants (solar supply)   $13,386.76   = 72.77% of the line
                                        ──────────
Net electricity cost to the owner       $ 5,008.12
```

That is what the 120 solar panels are doing in the executive summary — they
are an income item, not just a sustainability claim.

### The critical structural fact

```
Total outgoings                 $97,364.40
Total recovered                 $13,386.76      = 13.75% of outgoings
                                ──────────
Net outgoings borne by owner    $83,977.64      = 18.49% of gross income
```

> **Only 13.75% of outgoings are recovered. These are effectively GROSS
> leases.** Every commercial DCF template — including the unit's own
> teaching workbook — defaults to net leases where tenants reimburse
> outgoings pro-rata to occupied area. Apply that default here and you will
> add roughly $84,000 p.a. of phantom recoveries, worth about **$1.3 million**
> of capital value at a 6.5% cap rate. Model recoveries at the disclosed
> $13,386.76 and grow them; do not assume a recovery structure the document
> does not support.

## 5.6 The Income Reconciliation

The only reconciliation in the whole IM that works perfectly:

```
Gross rental income                     $454,237.52
less Total outgoings                    $ 97,364.40
plus Recovered outgoings                $ 13,386.76
                                        ───────────
Net rental income                       $370,259.88   ✓ EXACTLY as stated
```

Equivalently, `454,237.52 − 83,977.64 = 370,259.88`.

Ratios worth carrying into the report:

```
Outgoings / gross income          21.43%
Net outgoings / gross income      18.49%
Net income / gross income         81.51%
Outgoings per m² of GFA          $80.53/m²
```

> **The outgoings ratio of 21.4% is plausible, and that is evidence in
> itself.** A commercial outgoings schedule that came to 5% or 45% of gross
> would suggest lines were missing or double-counted. 21.4% sits in the
> normal band, which supports treating this schedule as broadly complete —
> though note it contains **no property management fee, no cleaning, and no
> repairs and maintenance**, all of which the teaching workbook's schedule
> includes. Budget for them separately and say why.

## 5.7 What It Is Worth — and the WALE Problem

### Yields at the quoted price

The agent advises the owners are looking for **offers over $8 million**.

```
Net initial yield  = 370,259.88 / 8,000,000 = 4.628%
Gross yield        = 454,237.52 / 8,000,000 = 5.678%
Price per m² GFA   = 8,000,000 / 1,209      = $6,617/m²
Price per m² land  = 8,000,000 /   671      = $11,923/m²
```

Value at a range of cap rates, on the passing net income:

| Cap rate | Value on $370,259.88 |
|---|---|
| 5.5% | $6,731,998 |
| 6.0% | $6,170,998 |
| 6.5% | $5,696,306 |
| 7.0% | $5,289,427 |
| 7.5% | $4,936,798 |

For the passing income to justify $8m the market would have to accept a
**4.63%** capitalisation rate. To hit 6.5% at $8m, net income would need to
be **$520,000** — $149,740 more than the property currently earns.

### WALE by income

The IM never states a WALE. Compute it. Weight each lease's remaining term
by its share of income:

```
                    Σ (tenant income × remaining term)
WALE (by income) = ────────────────────────────────────
                          Σ (tenant income)
```

As at **1 August 2026**:

```
Tenant                     Expiry       Yrs left   Income      Wt%    Contribution
──────────────────────────────────────────────────────────────────────────────────
Ella Moda                  31/03/2027     0.663   $ 61,979   13.64%      0.0904
Bridal Alterations         28/02/2029     2.579   $ 25,709    5.66%      0.1460
Sciaccas Lawyers           30/03/2028     1.662   $ 28,000    6.16%      0.1024
Meralai Suits              30/11/2026     0.331   $ 35,000    7.71%      0.0255
Paris Texas                30/11/2026     0.331   $ 45,210    9.95%      0.0330
The Movement Standard      31/05/2027     0.830   $197,710   43.53%      0.3611
Dean Property Management   28/02/2027     0.578   $ 25,629    5.64%      0.0326
Kwik Kopy Shop             31/12/2028     2.418   $ 35,000    7.71%      0.1863
                                                            ──────────────────────
                                                    WALE =              0.977 years
```

**WALE by income ≈ 0.98 years.** The simple unweighted average of the eight
remaining terms is 1.17 years — the income weighting *shortens* it, because
the biggest tenant has one of the shortest terms.

Expiry profile from the same date:

```
Income expiring within 12 months:  $365,528  =  80.47% of gross income
```

Five of eight leases — including the largest — expire by 31 May 2027.

> **The IM's own marketing copy says the tenant profile "is hedged with the
> number of tenants and lease terms". The arithmetic says the opposite.**
> Eight tenants is genuine diversification of *covenant*; it is not
> diversification of *expiry*. One tenant is 43.53% of income and the top
> three are 67.12%. With 80% of income expiring inside a year, an incoming
> owner faces near-simultaneous re-letting of most of the building —
> downtime, incentives, agent commissions and fitout contribution all at
> once, in the first two years of a seven-year hold. That is the single most
> important finding in the document, and it is the reason the DCF will look
> nothing like the capitalisation.

> **WALE by area cannot be computed for this property, and you should say
> so rather than fake it.** The tenancy schedule discloses no tenancy areas.
> Reporting a WALE without naming the weighting is meaningless; reporting an
> area-weighted WALE you inferred from assumed areas is worse. State "WALE
> by income = 0.98 years as at 1 August 2026; WALE by area is not
> calculable as the IM does not disclose tenancy areas."

> **Recompute the WALE at YOUR acquisition date, not at the IM date.** WALE
> falls by one year for every year that passes. At 1 August 2026 it is 0.98
> years; at 1 October 2026 it is **0.81** years; by 1 January 2027, two of
> the eight leases have already expired. The brief says "update all
> information so that it is in line with your assessment date" — this is the
> figure it means.

### Against the AREIT's objectives

| Objective | 41 Park Road | Verdict |
|---|---|---|
| CBD or inner-fringe | Milton, 4.1 km from the CBD | ✓ inner-fringe |
| Minimal capex required | 1988 construction (per the brief); IM offers "future development and value-add opportunities" | ✗ interrogate |
| LVR 65% | $5.2m debt / $3.24m equity at $8m | ✓ achievable |
| Total return > 7.0% | 4.63% initial yield → needs 2.37% p.a. growth | ✗ tight |
| 7–10 year holding period | 80% of income expires in year 1 | ✗ front-loaded risk |

> **"Value-add opportunities" and "minimal capex required" are the same
> building described by two documents with opposite incentives.** The IM
> markets latent upside; the AREIT's mandate wants a passive asset. Both
> cannot be true. Resolving that tension — with a capex allowance you can
> defend — is a substantial part of what A2 is asking for.

<details><summary>Checkpoint</summary>

1. Gross income $454,237.52, outgoings $97,364.40, recoveries $13,386.76.
   What is net income, and what is the yield at $6.9m?
2. A quarterly outgoings column shows $2,458.33 against an annual figure of
   $29,500. Which is wrong, and how do you know?
3. Four tenants pay $100k, $60k, $40k and $50k with 1.0, 4.0, 6.0 and 2.5
   years remaining. What is the WALE by income?
4. Why can you not compute a rent per m² by tenancy for 41 Park Road?

**Answers**

1. Net income `454,237.52 − 97,364.40 + 13,386.76 = $370,259.88`. Yield
   `370,259.88 / 6,900,000 =` **5.37%**.
2. **The quarterly figure.** `2,458.33 × 4 = 9,833.32 ≠ 29,500`, but
   `29,500 / 12 = 2,458.33` exactly — it is a *monthly* figure. You know
   which one is wrong because the other five rows in the same column
   multiply by 4 to their annual figures exactly, and because the annual
   column sums to the stated annual total.
3. Total income $250,000. `(100×1.0 + 60×4.0 + 40×6.0 + 50×2.5)/250 =
   (100 + 240 + 240 + 125)/250 = 705/250 =` **2.82 years**. Note the
   unweighted average is 3.375 years — the income weighting pulls it down
   because the largest tenant has the shortest term.
4. **The tenancy schedule discloses no tenancy areas.** Only the building's
   gross floor area (1,209 m²) is given, and GFA is not lettable area. Any
   per-m² figure would require assuming both the building efficiency and
   the split between tenants.
</details>

## Summary

- 41 Park Road, Milton: 671 m² corner site, 1,209 m² GFA over 3 levels, 8
  tenants, gross income $454,237.52, net income $370,259.88, quoted at
  **offers over $8 million** — a **4.63%** net initial yield.
- The income reconciliation works exactly:
  `gross − outgoings + recoveries = net`.
- **Three errors found.** (1) The Movement Standard's monthly rent is
  $16,475.00 where it should be $16,475.85. (2) The Land Tax quarterly
  figure is a monthly figure. (3) The quarterly outgoings total omits land
  tax entirely. In every case the **annual** column is the one that
  reconciles — use it.
- The introduction and the distances page give different distances to the
  train station and the bus stop. One tenant is named differently on the
  profile page than in the schedule.
- **Only 13.75% of outgoings are recovered** — treat these as gross leases,
  not net.
- **WALE by income is 0.98 years** at 1 August 2026, with **80.5% of income
  expiring within twelve months** and one tenant at 43.5% of income. WALE by
  area is not calculable.
- The document discloses no tenancy areas, no review dates or types, no
  outgoings responsibility, no incentives, no guarantees and no plans. Every
  one of those is an assumption you must state and justify.
