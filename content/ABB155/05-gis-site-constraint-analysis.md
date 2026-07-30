# GIS SITE CONSTRAINT ANALYSIS

The Assessment 2 method, worked end to end. 60% of the unit, due Week 14
(Monday 1 June 2026, 11:59pm), individual, ~2,500 words plus tables and
maps.

**The scenario.** An overseas investor is exploring opportunities for
**small-scale residential multiple dwelling** development in Brisbane. As an
independent planning and GIS consultant you undertake a **preliminary lot
screening exercise** to identify **two** land parcels that may be suitable.

That phrase "small-scale residential multiple dwelling" is the missing
middle from Topic 2, §2.6 — not a tower, not a detached house. Saying so in
your introduction ties the exercise to the theory and answers the question
of why these zones exist at all.

## 5.1 The criteria

### Core criteria — all must be met

| Criterion | Requirement |
|---|---|
| **Zoning** | The lot must be located **"completely within"** the *Low-medium density residential (2 or 3 storey mix)* **or** *Low-medium density residential (2 storey mix)* zone |
| **Land tenure** | **Freehold** |
| **Flood constraint** | The lot must **not be affected by any flooding** |
| **Lot size** | **≥ 1,050 m² and ≤ 2,000 m²** |

### Preferences — used only to rank the survivors

| Preference | Requirement |
|---|---|
| **Lot size** | **≥ 1,300 m² and ≤ 1,500 m²** |
| **Existing development** | Prefers lots that **do not contain an existing multiple dwelling** (unit or apartment development) |

> **The brief writes the size test with inclusive bounds — "greater than or
> equal to" and "less than or equal to" — for both the core criterion and
> the preference.** If you type `Area > 1050 AND Area < 2000` into Select By
> Attributes you have used strict inequalities and silently changed the
> question. On this dataset it is unlikely to move the answer, but Set B is
> marked on the numbers being right, and there is no partial credit for
> "nearly the right expression." Use `>=` and `<=`.

## 5.2 The data — what you are actually given

Four shapefiles on Canvas, originally from QSpatial and Brisbane City
Council Open Data. Verified record counts and attributes:

| Layer | Features | Notes |
|---|---|---|
| `Property_Boundary_FreeholdLand` | **420,934** | 14 fields. **Every record has `TENURE = 'FH'` and `TENURE_DES = 'Freehold'`** |
| `Zoning_LowMediumDensity_2and3Storey` | **2,044** | `ZONE_CODE = 'LMR'` throughout. 2,034 polygons are *2 or 3 storey mix*; **10** are *2 storey mix* |
| `Brisbane_FloodRisk_Area` | **5,571** | One attribute (`Id`). Geometrically the heaviest layer — 6.15 million vertices |
| `Brisbane_City_Boundary` | **1** | Cartographic context only |

Coordinates are projected in metres — **GDA2020 MGA Zone 56** — with the
property layer spanning about 73 km east–west and 71 km north–south.

Three facts about the property layer that change how you work:

```
Area     field exists but is 0.00000000000e+00 for all 420,934 records
MCA_L    field exists, value 0 for all records
MCA_U    field exists, value 0 for all records
MCA_ToT  field exists, value 0 for all records
```

So `Area` genuinely has to be calculated with **Calculate Geometry**, and
all three MCA fields with **Calculate Field**, exactly as the brief says.

> **Two field-name traps, and both will throw an error rather than a wrong
> answer.** The unit count field is **`UNIT_NUMBE`** — ten characters,
> because that is the DBF limit — not `Unit_Number`, which is how it is
> easy to type it. And the MCA total field is **`MCA_ToT`** with a lower-case
> "o", not `MCA_TOT` as the brief's prose renders it. Python field
> expressions in ArcGIS are case-sensitive, so `!Unit_Number!` and
> `!MCA_TOT!` both fail. Open the attribute table and copy the names.

> **Every lot in the layer is already freehold, so there is no tenure
> filter to run.** `TENURE_DES = 'Freehold'` for all 420,934 records — the
> layer name says so and the data confirms it. Set B Question 1 asks "how
> many **freehold** lots…", and the freehold part of that question is
> satisfied by the choice of layer. Do not invent a fourth filtering step;
> **do** say in your methodology that the tenure criterion is satisfied by
> the input dataset, because that is a methodological observation and Set A
> is marked on the method being complete and replicable.

## 5.3 The spatial relationship — the single biggest risk in Set B

Question 1 uses the phrase **"completely within."** In ArcGIS Pro's *Select
By Location*, that is one of about a dozen relationship options and they
give materially different counts on this data:

| Relationship | What it selects | Effect here |
|---|---|---|
| **Intersect** | Any overlap at all | Includes lots half outside the zone — far too many |
| **Within** (Clementini) | Lot inside the zone, **boundaries may touch** | Includes every lot on the edge of a zone polygon |
| **Completely within** | Lot entirely inside, **boundaries must not touch** | Excludes edge lots that share a boundary with the zone polygon |
| **Have their centre in** | Centroid inside | Includes lots straddling the boundary |

Zone boundaries in City Plan generally follow cadastral boundaries, so an
enormous number of lots sit on a zone edge and **share** that edge. Whether
those lots count is entirely determined by which relationship you pick.

There is a second subtlety: *Select By Location* evaluates each selecting
feature individually. A lot straddling **two adjacent zone polygons of the
same category** is not "completely within" either of them, so it is not
selected — even though it is, in plain English, entirely inside the zone.

> **Screenshot your Select By Location dialogue for every step, and put the
> screenshots in an appendix.** The relationship you chose is the single
> assumption your Set B numbers rest on, and it is invisible in the answer.
> An appendix showing "Relationship: Completely within, Selection type: New
> selection" converts an unverifiable number into a documented one. It also
> future-proofs the Set A methodology criterion, which asks for a
> "replicable" process.

### On reproducing the counts

The three Set B answers submitted in 2026 were:

```
Q1  freehold lots completely within the two LMR zones      16,132
Q2  of those, lots intersecting the flood risk area         3,239
Q3  lots meeting all Core Criteria                             10
```

An independent reproduction of Q1 from the raw geometry — outside ArcGIS,
with a from-scratch point-in-polygon implementation — produced counts
ranging from about 16,000 to over 30,000 depending purely on how boundary
contact and multi-polygon containment were handled. That spread is the point
rather than a criticism of any particular figure: **the answer to Q1 is
dominated by the definition of "within", not by the data.**

Treat the numbers above as one student's ArcGIS output, re-run them
yourself in ArcGIS Pro, and record the exact relationship and selection
type. If your figures differ from someone else's, the first question is
always "which relationship did you use?", not "who typed it wrong."

## 5.4 The filtering sequence

The order of the flood and size filters does not affect the final set —
they are independent attribute and location tests on the same population —
but the *intermediate* counts you report do depend on order, and Q2 asks
for a specific intermediate.

```
Step 1   Load 4 layers, set GDA2020 MGA Zone 56           420,934 freehold lots
Step 2   Calculate Geometry → Area (geodesic), m²         all 420,934 populated
Step 3   Select By Location: Completely within
         the LMR zoning layer                             → Q1 answer
Step 4   Select By Location on that subset:
         Intersect the flood layer                        → Q2 answer
Step 5   Restore the Step 3 selection,
         then Select By Attributes:
         Area >= 1050 AND Area <= 2000                    → size-eligible zoned lots
Step 6   Select By Location: Intersect flood,
         Selection type: REMOVE from current selection    → Q3 answer, Core Criteria
Step 7   Export Features → Core_Criteria_Lots
Step 8   Calculate Field  MCA_L  = 1 if 1300 <= Area <= 1500 else 0
Step 9   Calculate Field  MCA_U  = 1 if UNIT_NUMBE == 0 else 0
Step 10  Calculate Field  MCA_ToT = MCA_L + MCA_U
Step 11  Sort by MCA_ToT descending → the maximum score is 2
Step 12  Generate BCC Property Lot Reports for the top lots
Step 13  Build the layout (Set E)
```

> **Note what Q2 actually asks.** "How many freehold lots that are completely
> within the zones **intersect with the flood risk area**?" — it is a count
> of the *removed* lots, not of the survivors. It is easy to report the
> remainder by mistake. Reporting `16,132 − 3,239 = 12,893` as the answer to
> Q2 loses a third of that criterion.

### Geodesic versus planar area

Calculate Geometry offers both. The brief does not specify, and the choice
shifts every area by a fixed factor.

MGA Zone 56 is a transverse Mercator projection with a central scale factor
of **k₀ = 0.9996**. Grid distances near the central meridian are therefore
0.9996 of true distances, and grid *areas* are 0.9996² of true areas:

```
area scale (grid → geodesic) = 1 / 0.9996²
                             = 1 / 0.99920016
                             = 1.00080048
```

i.e. geodesic areas near the central meridian come out about **0.08%
larger** than planar grid areas. Verified on the two recommended lots by
computing the polygon areas directly from the shapefile coordinates with
the shoelace formula:

```
Lot 344 on RP137338 (3297 Moggill Rd)
   planar (grid) area from geometry     1,371.48 m²
   × 1.00080048                       = 1,372.58 m²
   reported geodesic area               1,372.57 m²   ✓

Lot 343 on RP137338 (3301 Moggill Rd)
   planar (grid) area from geometry     1,306.60 m²
   × 1.00080048                       = 1,307.65 m²
   reported geodesic area               1,307.65 m²   ✓
```

Both match to within a hundredth of a square metre, which confirms the
geodesic option was used and that the reported figures are sound.

> **0.08% sounds negligible until a lot sits on a threshold.** 3301 Moggill
> Road has a geodesic area of 1,307.65 m² — only **7.65 m² above the 1,300
> m² preference boundary**. Its planar area is 1,306.60 m², still inside.
> But a lot at 1,299 m² planar becomes 1,300.04 m² geodesic and flips from
> 0 to 1 on `MCA_L`. State which option you used in the methodology; on a
> borderline lot it is the difference between a recommendation and an
> also-ran.

### Title area is a third number again

The BCC Property Lot Reports give a **Title Area of 1,333 m² for both
lots** — identical, because the two parcels were surveyed as equal
allotments — while the digitised cadastre gives 1,372.57 and 1,307.65.

```
GIS total   1,372.57 + 1,307.65 = 2,680.22 m²
Title total 1,333 + 1,333       = 2,666    m²
Difference                      =    14.22 m²  (0.53%)
```

The pair total agrees to half a percent; the *split* between them does not:

```
3297  1,372.57 − 1,333 = +39.57 m²
3301  1,307.65 − 1,333 = −25.35 m²
```

One lot gains almost exactly what the other loses, which is the signature of
a **digitised common boundary sitting about 32 m² away from the surveyed
position** — the mean of the two deviations. The residual +14.22 m² across
the pair is ordinary digitising error on the outer boundary. Council's own
note says "areas shown in this Report are approximate only."

> **Three legitimate area figures, three different numbers, one ranking
> decision.** On title area the two lots are exactly equal at 1,333 m² and
> the tie-break used in most reports — "3297 is closer to the midpoint of
> the preferred range" — evaporates. On GIS area 3297 wins. Both lots pass
> the core criterion and the preference on any of the three measures, so the
> recommendation survives; but you must say which measure you ranked on and
> why, or the conclusion looks arbitrary.

## 5.5 The Multi-Criteria Analysis

The brief supplies the scoring table:

| MCA point | For lot size (`MCA_L`) | For number of units (`MCA_U`) |
|---|---|---|
| **1** | 1,300 m² to 1,500 m² | Unit Number **0** |
| **0** | Other lot size | Unit Number **2 or more** |

`MCA_ToT = MCA_L + MCA_U`, so the maximum score is **2**.

> **The brief's table has a hole in it: there is no rule for a lot with
> exactly ONE unit.** It scores 1 for "Unit Number 0" and 0 for "2 or more"
> — one is neither. This is not hypothetical: in the supplied dataset,
> **5,869 of the 420,934 lots have `UNIT_NUMBE = 1`** (against 360,447 with
> zero and 54,618 with two or more). The conventional reading is that the
> preference is for lots *without an existing multiple dwelling*, and a
> single dwelling is not a multiple dwelling, so a lot with one unit should
> arguably score 1. The safe reading, and the one that matches the literal
> table, is `1 if UNIT_NUMBE == 0 else 0`. State the assumption explicitly
> in your methodology and confirm the intended treatment with your tutor —
> if any shortlisted lot has exactly one unit, this ambiguity decides your
> recommendation.

Unit-count distribution across the full dataset, for context:

```
UNIT_NUMBE = 0       360,447 lots
UNIT_NUMBE = 1         5,869
UNIT_NUMBE = 2         5,851
UNIT_NUMBE = 3         5,195
UNIT_NUMBE = 4         4,104
UNIT_NUMBE = 5         2,876
UNIT_NUMBE = 6         2,254
UNIT_NUMBE = 7         1,793
… and a long tail
```

## 5.6 Set C — the two recommended lots

The two lots that scored `MCA_ToT = 2` in the 2026 submission:

| Detail | Suitable Lot 1 | Suitable Lot 2 |
|---|---|---|
| Property address | **3297 Moggill Road, Bellbowrie QLD 4070** | **3301 Moggill Road, Bellbowrie QLD 4070** |
| Lot no. and plan | **Lot 344 on RP137338** | **Lot 343 on RP137338** |
| Title area (BCC) | 1,333 m² | 1,333 m² |
| GIS geodesic area | 1,372.57 m² | 1,307.65 m² |
| Zone | **LMR1 Low-medium density residential (2 storey mix)** | LMR1, same |
| Neighbourhood plan | **Moggill–Bellbowrie district neighbourhood plan** | same |
| Precinct | **Established residential precinct — NPP-002** | same |
| Ward | Pullenvale | Pullenvale |
| MCA score | 2 (size 1, no units 1) | 2 (size 1, no units 1) |

Ten lots met all the core criteria, spread over four suburbs —
**Bellbowrie, Herston, Tingalpa and Clayfield** — which is why the map needs
insets (§5.9).

Overlays recorded on both Property Lot Reports include the **Airport
environs overlay** (PANS sub-category; BBS zone, distance from airport
8–13 km), plus the Dwelling house character, Road hierarchy and Transport
noise corridor overlays. None prohibits development; each adds an assessment
consideration.

> **Set C says "Property Address, Lot No, Zone Name, Neighbourhood Plans."
> Give exactly those, then add the rest.** The CRA's top band requires "an
> excellent description of the properties **as required in Set C (table)**"
> — so the four required rows must be present and correct. Extra rows
> (areas, ward, MCA breakdown) strengthen the answer; missing required rows
> cap it.

## 5.7 Set D Part 1 — which approvals are needed

Assume the lots currently contain a **dwelling house** and are to be
redeveloped as a **small-scale residential multiple dwelling**, with **no
subdivision** of land.

| Type of development | Required? | Reasoning |
|---|---|---|
| **Building works** | **Yes** | Constructing a new multiple dwelling is building work; building approval is required under the *Building Act 1975* (Qld) |
| **Plumbing and drainage works** | **Yes** | New dwellings need new water, sewer and stormwater connections — approval under the *Plumbing and Drainage Act 2018* (Qld) |
| **Operational work** | **No** | No earthworks, vegetation clearing or advertising device beyond what is incidental to the building work is proposed. Operational work approval is only triggered where site works fall outside accepted development thresholds |
| **Reconfiguring a lot** | **No** | The brief states no subdivision is proposed; the existing lot configuration is retained |
| **Material change of use** | **Yes** | Changing from *dwelling house* to *multiple dwelling* is a material change of use under the *Planning Act 2016* (Qld), assessed against City Plan 2014 |

The five categories are the ***Planning Act 2016*** definition of
**development**: carrying out building work; carrying out plumbing or
drainage work; carrying out operational work; reconfiguring a lot; and
making a material change of use of premises. Check the current section or
schedule reference against the Act itself before citing a pinpoint — the
definition sits in the dictionary, not in the operative provisions, and the
brief does not supply a citation.

> **The two "No" answers are where the reasoning marks are.** Anyone can
> tick Yes on building work. The examiner is checking whether you know that
> *reconfiguring a lot* is about lot boundaries — not about how many
> dwellings sit on the lot — and that *operational work* has a threshold
> rather than being automatic. Write one sentence of reasoning per row; the
> CRA counts questions "accurately addressed," and an unreasoned tick is
> not clearly accurate.

> **Watch the ordering trap in the brief's own hypothetical.** If the
> investor later decides to strata-title the completed units, that is
> *reconfiguring a lot* and the answer flips to Yes. The answer above holds
> only because the brief says "with no subdivision of land proposed." Quote
> that condition when you give the answer.

## 5.8 Set D Part 2 — performance outcomes and acceptable outcomes

This is Queensland's **performance-based planning** system in miniature —
the subject of the Week 10 and 11 readings (Frew, Baker & Donehue 2016;
Baker, Sipe & Gleeson 2006).

```
Performance outcome (PO)   the outcome the development must achieve
                           — mandatory, but expressed as a standard
Acceptable outcome (AO)    one prescribed way of achieving that PO
                           — NOT mandatory; a deemed-to-comply solution
```

You may comply with the AO, or propose an **alternative solution** that
demonstrably achieves the PO. That distinction is the whole architecture of
performance-based planning, and it is the most likely conceptual question on
this material.

The brief's table for the **Moggill–Bellbowrie district neighbourhood
plan** has four POs across four precinct contexts. Only the ones matching
your lots' precinct apply:

| Context | PO | AO |
|---|---|---|
| **General** (applies to all) | **PO1** — Development provides an integrated movement network that connects with the existing hierarchy | **AO1** — Development provides new road, bikeway and footpath infrastructure |
| Environmental protection precinct **NPP-001** | PO2 — maintain waterway function, preserve habitat and biodiversity vegetation; manage bushfire with safe access from each lot | AO2 — each lot at least **10,000 m²**; development footprint max **800 m²**, located outside the waterway corridor and habitat areas |
| **Established residential precinct NPP-002** | **PO3** — Development retains the open semi-rural character by maintaining large lot sizes and providing sufficient frontage for buildings to address the street | **AO3.1** — lot size at least **800 m²**; **AO3.2** — development does not create rear lots |
| Low density residential precinct **NPP-003** | PO4 — retain open semi-rural character with large lots and varied setbacks to major roads | AO4.1 — lots fronting Hawkesbury, Church, Witty, Priors Pocket and Livesay Roads: min **1,000 m²**, shared vehicular access, development footprint max **600 m²**, set back an average of **10 m** and minimum **6 m** from the road frontage; **AO4.2** — lots not fronting those roads min **600 m²** |

For lots in NPP-002, the applicable outcomes are **PO1/AO1** (general) and
**PO3/AO3.1 and AO3.2**. PO2 and PO4 do not apply and you should say so
explicitly rather than leaving them out silently.

Applying them:

```
AO3.1  lot size at least 800 m²
       3297 Moggill Rd  1,372.57 m²  ✓  (1,333 m² on title — also ✓)
       3301 Moggill Rd  1,307.65 m²  ✓  (1,333 m² on title — also ✓)
AO3.2  does not create rear lots
       No reconfiguration proposed, so no rear lots are created  ✓
AO1    new road, bikeway and footpath infrastructure
       A detailed-design matter for the development application
```

> **There is a live tension between PO3 and the proposal, and naming it is
> worth marks.** PO3 requires development to *retain the open semi-rural
> character of the area by maintaining large lot sizes*. The proposal is a
> multiple dwelling — an intensification. The lots comply with the numeric
> AO3.1 easily, but AOs are only one route to the PO, and complying with an
> AO does not automatically satisfy the PO where the development is of a
> different kind. A strong answer notes that the assessment manager will
> weigh built form, setbacks and street frontage against the semi-rural
> character outcome, and that pre-lodgement advice is warranted. A weak
> answer just writes "1,372 m² > 800 m², complies."

## 5.9 Set E — the map

Required: a map identifying **all** potential sites meeting the core
criteria, with the **two** most suitable clearly distinguished in the
legend, and **five essential map elements**.

| Element | Present as |
|---|---|
| **Title** | Descriptive — what is shown, where |
| **Legend** | Most Suitable Lots · Core Criteria lots · Brisbane City Boundary · Brisbane Flood Risk Area |
| **Scale bar** | In kilometres, on the main frame |
| **North arrow** | On the main frame |
| **Data source / credits** | Dataset origins, coordinate system, author, date |

Because the ten core-criteria lots are scattered across four suburbs, a
single Brisbane-wide frame renders them as invisible specks. The fix is
**four inset map frames** (Bellbowrie, Herston, Tingalpa, Clayfield) linked
to the main frame with **Extent Indicators** — an ArcGIS Pro layout element
that draws the inset's extent as a box on the parent map, so the reader can
see where each inset sits.

> **Do not let the basemap attribution clutter the insets.** Removing the
> basemap from the inset frames (or turning off attribution on them) keeps
> the credit text legible in one place. And put the scale bar and north
> arrow on the **main** frame — insets at four different scales cannot share
> one scale bar, which is a classic way to make a map internally
> contradictory.

## 5.10 Car parking — the feasibility check nobody runs

The information pack includes BCC's **More Homes, Sooner — Car parking for
Multiple dwellings** planning scheme policy amendment package (Schedule 6,
SC6.31 Transport, access, parking and servicing). It is not in the
Assessment 2 brief, but it is the control that determines whether a
"small-scale multiple dwelling" physically fits on a 1,300 m² lot — so it
belongs in your limitations or next-steps section.

Two rate tables, and which one applies depends on whether the site is a
**key location**:

> **key location:** land within the Principal centre, Major centre,
> District centre or Mixed use zone; **or** land within 400 m walking
> distance of a dedicated public pedestrian access point of a major public
> transport interchange, or of a public transport stop serviced with a
> maximum headway of **20 minutes** 7am–7pm weekdays and **30 minutes**
> 7am–7pm weekends.

| Dwelling | Table 13 — key location | Table 14 — all other cases |
|---|---|---|
| 1 bedroom | min **1.0** space | **1.0** space |
| 2 bedroom | min **1.2** | **1.5** |
| 3 bedroom | min **1.6** | **2.0** |
| 4+ bedroom | min **2.0** | **2.5** |
| Visitor | **0.25** per dwelling | **0.25** per dwelling |

The rounding rule is the trap:

```
For uses OTHER than multiple dwellings   → round UP to the next whole number
For MULTIPLE DWELLINGS                   → round DOWN to the next whole number
Visitor spaces are calculated and rounded UP separately, in both cases
```

**Worked example — six units (3 × 2-bed, 3 × 3-bed) at Bellbowrie.**
Bellbowrie is in an LMR zone, not a centre zone, so **Table 14** applies
unless you can demonstrate a 20-minute-headway stop within 400 m.

```
Resident parking
   3 × 1.5  (2-bed)  =  4.5
   3 × 2.0  (3-bed)  =  6.0
                       ────
                        10.5  → round DOWN → 10 spaces

Visitor parking
   6 × 0.25           =  1.5  → round UP  →  2 spaces

Total                                        12 spaces
   of which ≥ 1 visitor space must be in a communal area, not tandem
   plus 1 space for vehicle occupants with a disability (minimum
        provision is 1 space, at a rate of 1 per 50 ordinary spaces)
   motorcycle spaces: not triggered — only required where the car park
        has more than 50 spaces (then 2%)
```

If the same six units were in a key location, **Table 13** applies:

```
   3 × 1.2  =  3.6
   3 × 1.6  =  4.8
              ────
               8.4  → round DOWN →  8 spaces
   visitor  =  1.5  → round UP   →  2 spaces
   Total                            10 spaces
```

— two fewer spaces, roughly 25–30 m² of site area saved, on the same
development. Table 13 also requires a **Sustainable Travel Plan** for all
multiple dwellings in a key location.

> **Round DOWN for multiple dwellings is a deliberate policy inversion and
> it is easy to get backwards.** Every other use rounds up. Rounding 10.5
> up to 11 instead of down to 10 costs a whole space on a site where space
> is the binding constraint — which is precisely the "More Homes, Sooner"
> intent. Note also that where car share spaces are provided, they **count
> toward** the minimum requirement.

## 5.11 Errors and ambiguities to watch

| # | Issue | Correct treatment |
|---|---|---|
| 1 | Reporting "approximately 20% of freehold lots are flood-affected" | The base is wrong. 3,239 / 16,132 = **20.08% of the *zoned* lots**. Against all 420,934 freehold lots it is **0.77%**. Always name the base of a percentage |
| 2 | Reporting that "the remaining 12,893 lots fall below the 1,050 m² minimum" | 16,132 − 3,239 = 12,893 is the count of zoned, **non-flood-affected** lots. Ten of them meet the size test, so **12,883** fail it — and they fail by being either too small **or too large** (> 2,000 m²), not only by being below 1,050 m² |
| 3 | Quoting the recommended lot's area as 1,372.57 m² in one table and **1,372.52 m²** in the conclusion | 1,372.57 is right. Verified: planar area from the geometry is 1,371.48 m², × 1.00080048 = 1,372.58 m² |
| 4 | `!Unit_Number!` and `!MCA_TOT!` in Calculate Field expressions | The real field names are **`UNIT_NUMBE`** and **`MCA_ToT`** |
| 5 | `Area > 1050 AND Area < 2000` | The brief specifies **≥** and **≤** |
| 6 | The MCA table has no rule for `UNIT_NUMBE = 1` | 5,869 lots are affected. State your assumption; confirm with your tutor |
| 7 | Reporting Q2 as the number of lots left after removing flood-affected lots | Q2 asks how many **intersect** the flood area — the removed count, not the remainder |

## Summary

- The task is a **missing-middle screening exercise**: small-scale
  multiple dwellings on 1,050–2,000 m² lots in two LMR zones, freehold,
  flood-free, ranked by a two-point MCA.
- The supplied property layer holds **420,934 records, all freehold** — the
  tenure criterion is satisfied by the dataset, so there is no tenure step.
  `Area`, `MCA_L`, `MCA_U` and `MCA_ToT` are all supplied empty.
- **"Completely within" is the whole ballgame for Set B Q1.** It excludes
  lots sharing a boundary with the zone polygon, and it tests each zone
  polygon separately. Screenshot the dialogue.
- **Q2 asks for the flood-affected count, not the survivors.**
- Geodesic area exceeds planar grid area by a factor of **1 / 0.9996² =
  1.00080048** — about **0.08%** — which matters only on threshold lots, and
  3301 Moggill Road sits just **7.65 m²** above one.
- **Three different area figures exist** for the same lot: title area
  (1,333 m²), geodesic (1,372.57 / 1,307.65 m²) and planar (1,371.48 /
  1,306.60 m²). Say which you ranked on.
- Set D Part 1: **Yes** to building work, plumbing and drainage, and
  material change of use; **No** to operational work and reconfiguring a
  lot — but only because no subdivision is proposed.
- Set D Part 2: **POs are mandatory outcomes; AOs are one deemed-to-comply
  route.** For NPP-002, PO1/AO1 and PO3/AO3.1–3.2 apply. Complying with
  AO3.1's 800 m² does not automatically satisfy PO3's semi-rural character
  outcome.
- Set E needs **title, legend, scale bar, north arrow and credits**, plus
  insets with extent indicators because the shortlist is scattered across
  four suburbs.
- Car parking under *More Homes, Sooner*: **Table 13** in a key location,
  **Table 14** elsewhere; multiple dwellings **round DOWN**, visitor spaces
  round up separately.

<details>
<summary>✅ Checkpoint 5 — GIS method, MCA and development assessment</summary>

**Q1. Why is there no "select freehold lots" step in the methodology, and why should you mention that in the report anyway?**

Because the supplied `Property_Boundary_FreeholdLand` layer contains only
freehold parcels — all 420,934 records carry `TENURE = 'FH'` and
`TENURE_DES = 'Freehold'`. The tenure criterion is therefore satisfied by
the choice of input dataset rather than by a filter. You mention it because
Set A is marked on the methodology being complete and replicable: a reader
who does not know the layer is pre-filtered will assume you skipped a core
criterion.

**Q2. Two students report different answers to Set B Q1. Neither has made an arithmetic error. What is the most likely explanation?**

They used different spatial relationships in Select By Location. "Intersect",
"Within", "Completely within" and "Have their centre in" give materially
different counts on cadastral data, because zone boundaries generally follow
lot boundaries and huge numbers of lots therefore sit on a zone edge.
"Completely within" excludes lots whose boundary touches the zone boundary;
"Within" includes them. A secondary possibility is that one student tested
against the zoning layer feature by feature while the other dissolved it
first, which changes the treatment of lots straddling two adjacent polygons
of the same zone.

**Q3. Calculate the parking requirement for eight units — four two-bedroom and four three-bedroom — on a site that is NOT in a key location.**

```
Resident: 4 × 1.5 = 6.0
          4 × 2.0 = 8.0
                    ────
                    14.0  → round down → 14 spaces
Visitor:  8 × 0.25 = 2.0  → round up   →  2 spaces
Total                                     16 spaces
```

At least one visitor space must be in a communal area and not tandem with
resident parking, and one space for vehicle occupants with a disability is
required (minimum provision of one, at a rate of one per 50 ordinary
spaces). Motorcycle spaces are not triggered — that only applies to car
parks with more than 50 spaces.

**Q4. Your lot has 1,299.4 m² planar area. Does it score a point on `MCA_L`? Explain both answers.**

It depends on which area option you calculated. On planar (grid) area,
1,299.4 m² is below the 1,300 m² threshold and scores 0. On geodesic area,
1,299.4 × 1.00080048 = 1,300.44 m², which is inside the preferred range and
scores 1. The lot flips on a 0.08% projection scale factor. This is why the
methodology has to state which option was used — the ranking, and therefore
the recommendation, can turn on it.

**Q5. A development complies with AO3.1 because the lot is 1,372 m² and the AO requires at least 800 m². Has it satisfied PO3?**

Not necessarily. Acceptable outcomes are one prescribed way of achieving a
performance outcome, not the outcome itself; the PO is the mandatory
standard. PO3 requires development to retain the **open semi-rural
character** of the area by maintaining large lot sizes *and* providing
sufficient frontage for buildings to address the street. A multiple dwelling
that satisfies the numeric lot-size AO could still fail the character
outcome through its bulk, siting or frontage treatment. The assessment
manager weighs the development against the PO, and an alternative solution
route also exists for applicants who do not meet the AO at all.

**Q6. Set B Q2 asks how many zoned freehold lots intersect the flood risk area. A student answers 12,893. What have they done?**

Subtracted rather than counted — 16,132 − 3,239 = 12,893 is the number of
zoned lots that do **not** intersect the flood area. Q2 asks for the
intersecting count, which is 3,239. The same student's follow-up claim that
those 12,893 lots "fall below the 1,050 m² minimum" is also wrong twice
over: only 12,883 of them fail the size test once the ten core-criteria lots
are removed, and they fail by being either under 1,050 m² **or** over
2,000 m².

**Q7. The investor asks why only ten lots out of 420,934 qualify. Give a one-paragraph answer.**

The criteria compound, and each one is far more selective than it looks.
The two Low-medium density residential zones cover about **2,543 hectares**
across 2,044 polygons, so only around **3.8%** of Brisbane's freehold
parcels (16,132 of 420,934) sit completely inside them once edge lots are
excluded. Roughly **a fifth** of those are then removed for flood exposure.
The size window is the real filter: computed directly from the geometry,
only **16,532 of all 420,934 freehold parcels city-wide — 3.9%** — fall
between 1,050 and 2,000 m² at all, because the cadastre is dominated by
ordinary suburban lots and strata parcels well below 1,050 m². Requiring
all four conditions at once, on the same parcel, is the intersection of two
independently rare properties. Ten is a plausible outcome, and it is exactly
why a screening exercise like this has commercial value.

</details>
