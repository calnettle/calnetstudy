# Worked Example — Reading the East Brisbane Data

The unit gave you real, messy PRD data for postcode 4169 and asked you to
make a recommendation from it. Section C will do the same thing with a
smaller dataset. This note takes the actual files apart: what reconciles,
what does not, and how you turn a spreadsheet into a paragraph that earns
marks.

Every number below was recomputed from the raw files. Where a figure in a
lecture slide does not reproduce, the working is shown.

## 8.1 The files, and what is in them

| File | Rows | Contents |
|---|---|---|
| `East Brisbane Sales Data.xls` | 3,111 sales | Address, dwelling type, first price and sale price, 2010 → Jan 2026, bedrooms/bathrooms/parking, days to sell |
| `East Brisbane Rental Data.xls` | 932 listings | Street, month/year listed, property type, days listed, beds/baths/parking, area, weekly listed rent |
| `East Brisbane Developments.xlsx` | 34 projects | Title, address, coordinates, type, estimated value, DA number and dates, status, project stage, units, site area |
| `4169 Developments.xlsx` | 98 projects | Same, for the **whole postcode** |
| `East Brisbane vs Surrounds House Comparison.xls` | — | Pre-aggregated: growth chart, peak selling periods, price range segmentation |
| `East Brisbane vs Surrounds Unit Comparison.xls` | — | Same, units |
| `4169 vs Surrounds House Comparison.xls` | — | Same, at postcode level |
| `Combined Data.xlsb` | — | Binary workbook combining the above |

## 8.2 The first thing to check: which geography am I in?

Postcode **4169** contains **East Brisbane and Kangaroo Point**. Those are
different markets, and the files come in both flavours.

| 2025 median house price | Value |
|---|---:|
| East Brisbane (suburb) | **$1,610,000** |
| Postcode 4169 | **$1,660,000** |
| Kangaroo Point | **$1,800,000** |

```
Kangaroo Point is 11.8% dearer than East Brisbane
The postcode median sits between the two, closer to East Brisbane
   because East Brisbane records more house sales (74 vs 21 in 2025)
```

> **A "4169" figure is not an "East Brisbane" figure, and the gap is not
> always small.** On house prices the postcode overstates East Brisbane by
> 3.1% — annoying but survivable. On the **development pipeline** (§8.4) the
> postcode figure overstates East Brisbane by a factor of **172**. Check the
> filename before you quote the number.

## 8.3 Price series — and the broken column

### East Brisbane median house and unit prices, 2011–2025

| Year | House | YoY | Unit | YoY |
|---|---:|---:|---:|---:|
| 2011 | $637,000 | — | $425,000 | — |
| 2012 | $640,000 | +0.47% | $429,000 | +0.94% |
| 2013 | $640,000 | 0.00% | $416,000 | −3.03% |
| 2014 | $727,000 | +13.59% | $447,000 | +7.45% |
| 2015 | $767,500 | +5.57% | $430,000 | −3.80% |
| 2016 | $860,000 | +12.05% | $432,500 | +0.58% |
| 2017 | $899,000 | +4.53% | $457,000 | +5.66% |
| 2018 | $870,000 | −3.23% | $394,500 | −13.68% |
| 2019 | $815,000 | −6.32% | $486,000 | +23.19% |
| 2020 | $915,500 | +12.33% | $651,500 | +34.05% |
| 2021 | $1,300,000 | **+42.00%** | $610,500 | −6.29% |
| 2022 | $1,250,000 | −3.85% | $787,500 | +28.99% |
| 2023 | $1,470,000 | +17.60% | $537,500 | **−31.75%** |
| 2024 | $1,441,250 | −1.96% | $700,000 | +30.23% |
| 2025 | **$1,610,000** | **+11.71%** | **$777,500** | **+11.07%** |

Summary measures:

```
                        House        Unit
1 year  (2024→2025)    +11.71%     +11.07%
5 year  (2020→2025)    +75.9%      +19.3%      (CAGR 11.95%  /  3.60%)
10 year (2015→2025)   +109.8%      +80.8%      (CAGR  7.69%  /  6.10%)
14 year (2011→2025)   +152.7%      +82.9%

Unit as % of house, 2025:  777,500 / 1,610,000  =  48.3%
```

This confirms three claims made in the Week 3 lecture:

- *"East Brisbane units = affordability… almost half price to houses"* —
  **48.3%** ✓
- *"Both units and houses having at least 11% of growth throughout the year"*
  (from a student's Week 9 question) — **11.71% and 11.07%** ✓
- *"A slight decline in median house prices in 2024, however positive signs
  in 2025"* — **−1.96% then +11.71%** ✓

> **The "growth" column in the supplied workbooks is zero for every year, in
> every suburb block, in every file.** It is a stored value of `0.0`, not a
> formula that failed to calculate. The comparison workbooks ship with the
> growth column dead. **You have to compute growth yourself**, and the formula
> is:
>
> ```
> YoY growth = (this year's median / last year's median) − 1
> ```
>
> Anyone who trusted that column reported a market with **zero growth for
> fifteen consecutive years**.

### What the unit series is really telling you

The unit median swings from −31.75% to +30.23% in consecutive years. That is
not the market moving 60 points; it is a **small sample plus composition
change**. Look at the distribution:

| Year | n | Median | Mean | Q1 | Q3 | Max |
|---|---:|---:|---:|---:|---:|---:|
| 2022 | 166 | $787,500 | $858,954 | $480,000 | $960,000 | $4,000,000 |
| 2023 | 108 | $537,500 | $742,124 | $436,000 | $793,750 | $3,300,000 |
| 2024 | 117 | $700,000 | $905,168 | $566,000 | $891,145 | $5,950,000 |
| 2025 | 102 | $777,500 | $1,026,212 | $618,750 | $1,185,000 | $5,950,000 |

Sales volume fell by a third into 2023 (166 → 108) and the whole distribution
shifted down — Q1, median and Q3 all fell together. That is a change in
**what sold**, not just what things are worth: fewer premium apartments
transacting in a high-rate year drags the middle of the sample down.

> **A median is only as stable as the sample behind it, and n is on the
> spreadsheet.** East Brisbane records 48–166 unit sales and 48–84 house sales
> a year. At that scale a handful of atypical transactions moves the median
> several percent. **Always report n beside the median**, and prefer the
> multi-year trend to any single year-on-year number. This is a free mark in
> Section C and almost nobody takes it.

### Median versus mean — why the unit reports the median

East Brisbane houses, 2025, from the workbook:

```
n         =  74
sum       =  $161,235,499
median    =  $1,610,000
mean      =  $2,178,858        ← 35.3% ABOVE the median
Q1        =  $1,353,750
Q3        =  $1,910,000
IQR       =  $556,250          (checks: 1,910,000 − 1,353,750 ✓)
min       =  $960,000
max       =  $14,999,999       ← one sale, ~9.3× the median
```

> **One $15 million sale is why property reports use medians.** The mean is
> 35% higher than the median in a 74-sale year. Quote the mean and you have
> just told your reader that typical East Brisbane houses cost $2.18 million,
> which is false. The distribution is **right-skewed**; the median is robust
> to the tail, the mean is not. Note 06, §6.5, is the theory; this is the
> evidence.

### The neighbours

Because a suburb only means something against its comparators:

| 2025 median house | Price | 2025 median unit | Price |
|---|---:|---|---:|
| Coorparoo (4151) | $1,800,000 | Kangaroo Point (4169) | $800,000 |
| Kangaroo Point (4169) | $1,800,000 | Norman Park (4170) | $820,000 |
| Norman Park (4170) | $1,765,000 | Coorparoo (4151) | $775,000 |
| **East Brisbane (4169)** | **$1,610,000** | **East Brisbane (4169)** | **$777,500** |
| Woolloongabba (4102) | $1,507,500 | Woolloongabba (4102) | $740,000 |

East Brisbane houses sit **fourth of five** — cheaper than Coorparoo,
Kangaroo Point and Norman Park, dearer than Woolloongabba. East Brisbane
units sit **third of five** and within 3% of the top.

> **"Blue chip" and "fourth of five" are both true, and Section C rewards the
> second.** The Week 3 lecture calls East Brisbane a premium blue-chip
> suburb — true against Brisbane LGA and Greater Brisbane. Against its
> **immediate neighbours** it is mid-pack on houses. Which comparison you pick
> decides whether your recommendation reads as "premium location, price
> accordingly" or "value gap, buy the discount". **Name your comparator set
> and say why you chose it.**

## 8.4 The development pipeline — the biggest trap in the data

The Week 3 lecture shows a table headed **"Development Pipeline — East
Brisbane (4169)"**:

| | 2025 | 2026 |
|---|---:|---:|
| Commercial | $1,100,000 (2 projects) | $100,000,000 (1) |
| Industrial | — | $1,600,000 (2) |
| Infrastructure | — | $2,000,000 (1) |
| Mixed-use | $80,000,000 (1) | $192,700,000 (6) |
| Residential | $108,500,000 (4) | $10,200,000 (3) |
| **Total** | **$189,600,000 (7)** | **$306,500,000 (13)** |
| Units/apartments | 305 | 528 |
| Townhouses | 5 | — |

**Step 1 — does it add up?** Yes, exactly:

```
2025:  1,100,000 + 80,000,000 + 108,500,000              = $189,600,000 ✓   2+1+4  =  7 ✓
2026:  100,000,000 + 1,600,000 + 2,000,000
       + 192,700,000 + 10,200,000                        = $306,500,000 ✓   1+2+1+6+3 = 13 ✓
```

**Step 2 — does it reproduce from the raw Cordell file?** Also yes — but only
from the **postcode** file:

| Commencement year | `4169 Developments.xlsx` | `East Brisbane Developments.xlsx` |
|---|---|---|
| 2025 | **7 projects, $189,600,000** ✓ | 2 projects, $1,100,000 |
| 2026 | **13 projects, $306,500,000** ✓ | 3 projects, $3,600,000 |

> **The slide says "East Brisbane (4169)" but the numbers are the whole
> postcode, and the postcode is almost entirely Kangaroo Point.**
>
> ```
> 2025:  East Brisbane suburb =    $1,100,000 of $189,600,000  =  0.58%
> 2026:  East Brisbane suburb =    $3,600,000 of $306,500,000  =  1.17%
> ```
>
> **More than 98% of the "East Brisbane" pipeline is not in East Brisbane.**
> The 2025 total is driven by two Kangaroo Point towers — The Bedford Mixed Use
> Development (128 units, $80m) and 77–85 Linton & Vulture Streets (126 units,
> $80m). Writing "East Brisbane has a $306 million development pipeline" is the
> single most damaging error available in this dataset.

### Step 3 — the pie charts are by value, not by count

The slide's 2026 pie reads Commercial 33%, Mixed-use 63%, Residential 3%,
Infrastructure 1%, Industrial 0%. Compute both bases:

| Sector | Share **by value** | Share **by project count** |
|---|---:|---:|
| Commercial | **32.6%** | 7.7% |
| Industrial | 0.5% | **15.4%** |
| Infrastructure | 0.7% | 7.7% |
| Mixed-use | **62.9%** | 46.2% |
| Residential | 3.3% | **23.1%** |

The pie matches the **value** column. By **count**, residential is seven times
larger a share and commercial is a quarter of what the pie shows.

> **Two legitimate denominators, two opposite stories.** By value the 2026
> pipeline is a commercial-and-mixed-use story. By count it is a
> residential-and-industrial story. Neither is wrong; a chart that does not
> say which is being used is. **Always label the base of a percentage**, and
> when you read someone else's chart, work out the base before you believe the
> conclusion.

### Step 4 — the classification does not follow the unit's own rules

Match the slide's categories back to the raw `Main Category` field:

| Slide category, 2026 | What it actually is | Value |
|---|---|---:|
| Commercial (1 project) | **Aged care facilities** — St Vincent's Campus Kangaroo Point | $100,000,000 |
| Industrial (2) | Warehouses, cargo sheds, distribution centres | $1,600,000 |
| Infrastructure (1) | **Police Stations** — Gabba Entertainment Precinct | $2,000,000 |
| Mixed-use (6) | Five unit/apartment projects with mixed-use titles, plus "Commercial complexes — shops, offices" | $192,700,000 |
| Residential (3) | Unit/apartment projects | $10,200,000 |

And in 2025, the slide's "Commercial, $1,100,000, 2 projects" is:

```
Offices                        $350,000   (5 Manilla Street office conversion)
Student & group accommodation  $750,000   (491–493 Vulture & Fisher Streets)
                              ─────────
                              $1,100,000  ✓
```

The Week 10 lecture gives the unit's **own** classification scheme, and it
puts **"aged care, retirement villages, hotel, serviced apartments, student
accommodation"** under **other residential** — not commercial.

> **One $100 million aged-care project is doing all the work in the 2026
> chart, and by the unit's own rules it should not be in the Commercial slice
> at all.** Reclassify it as other residential and the pie changes completely:
>
> ```
> Commercial 2026 as charted:              $100,000,000  =  32.6%
> Commercial 2026 after reclassification:    $2,000,000  =   0.65%
> Residential-type uses:                   ~$303,000,000 =  98.8%
> ```
>
> The same file, classified two ways, says either "a third of the pipeline is
> commercial" or "the pipeline is essentially all housing and living sectors".
> **Publish your classification rule before your chart.**

### Step 5 — status is not the same as supply

Every 2026 project in the file carries a status of **"Possible"** — except the
Gabba Entertainment Precinct, which is "Registrations". Not one is Commenced
or Firm. By contrast, **five of the seven 2025 projects are "Commenced"**.

The Cordell status field runs: `Commenced · Firm · Possible · Deferred ·
Abandoned · Early · No further information`. Project stage runs from
`site acquisition / early planning / sketch` through `development approval`,
`building approvals`, `tenders`, `contract`, `site preparation`,
`construction`, to `completed`.

> **"$306.5 million of pipeline" is $306.5 million of *maybe*.** A project at
> "Possible" has not been approved, tendered or financed. If you compare a
> 2025 figure that is 96% commenced against a 2026 figure that is 100%
> speculative, you will report a 61.7% increase in supply that may never be
> built. **Filter by status before you total, and say which statuses you
> included.**

### Step 6 — the dwelling counts, which do reconcile

| | Slide | Computed from raw |
|---|---:|---:|
| Units/apartments 2025 | 305 | 128 + 126 + 36 + 15 = **305** ✓ |
| Townhouses 2025 | 5 | 5 (10–14 Ellis Street) ✓ |
| Units/apartments 2026 | 528 | 232 + 172 + 65 + 29 + 15 + 4 + 7 + 4 = **528** ✓ |

```
Pipeline growth 2025 → 2026:   value +61.7%   ·   count +85.7%   ·   units +73.1%
```

> **Note what is missing from both years: detached dwellings and land lots —
> zero of each.** 833 units and apartments, five townhouses, no houses, no
> lots. This is the same pattern as the Greater Brisbane pipeline in Note 03
> (87% apartments, 2.6% detached) into a market that PRD says is short of
> **stand-alone houses**. The pipeline is not relieving the shortage; it is
> building a different product.

## 8.5 The rental data — cleaning a real file

### What arrives

932 listings. `Property Type` splits **646 units / 286 houses**. `Status`
splits **900 Historical / 32 Current**. The problems start with the price
column, which is **free text**:

| Format | Count |
|---|---:|
| `$### per week` | 526 |
| `$###` | 148 |
| `$### Per Week` | 63 |
| `$### Weekly` | 32 |
| `$### weekly` | 19 |
| `$### pw` | 10 |
| `$### p/w` | 7 |
| `#rd Floor $### P/W` | 4 |
| `$### pwk - Fully Furnished includes …` | 3 |
| … plus a dozen more variants | |

And **28 rows carry no price at all**, containing text such as:

```
"Leased by Belle Property"          "Under application"
"APPLICATION APPROVED"              "3rd Floor - City Views"
"Leased!"                           "6th Floor Fully Furnished with City Views"
```

`Days Listed` has its own problem: **four rows hold −1**, which is impossible.
It is a null sentinel, not a duration.

> **A `=MEDIAN()` over the raw column returns nothing, and a `=AVERAGE()` over
> Days Listed silently absorbs the −1s.** Excel cannot parse `"$695 pwk -
> Fully Furnished"` as a number. This is Week 7's "formatting of input data"
> and "checking for data errors and outliers" made concrete. The cleaning
> steps are: **extract the number from the text · drop rows with no price ·
> replace −1 with blank, not zero · then check the extremes.**

### Reproducing the lecture's Q4 2025 figures

The Week 3 lecture reports, for East Brisbane in Q4 2025: *29 house rentals,
78 unit rentals; median $898 (house), $650 (unit); average days to let 25
(house), 22 (unit).*

**Counts.** Filtering the raw file to October–December 2025 gives **29 house
listings** ✓ and **81 unit listings**, of which **78 carry a parseable
price** ✓.

**Unit median.** $650 exactly, on all 78 priced listings ✓.

**House median.** Here is the interesting one. All 29 house listings sorted:

```
200   550   630   700   700   730   740   750   750   800   820   850   850
850   895   900   950   950   950   950  1000  1100  1250  1350  1400  1500
1600  1850
                                   ↑
                        median of 29 = 15th value = $895
```

That is **$895**, not the reported $898. Now drop the first value:

```
median of the remaining 28 = mean of the 14th and 15th
                           = (895 + 900) / 2
                           = $897.5   →  rounds to $898  ✓
```

> **The $3 gap is one listing, and it is a data error.** `3/27 Hampton Street`
> is recorded as a **House** with **1 bedroom** at **$200 per week** — in a
> suburb where the next cheapest house is $550 and the median is near $900.
> A one-bedroom "house" at a unit-style address is almost certainly a room, a
> granny flat or a mis-typed field. **PRD's published $898 is the median after
> excluding it**, and reproducing that is the proof that the exclusion happened.
>
> The general rule: an outlier that is **implausible on its face** (a $200
> house, a −1 day listing) gets excluded and the exclusion gets disclosed. An
> outlier that is merely **extreme but real** (the $15 million house sale in
> §8.3) stays in, and you use a median instead.
>
> *And note the address.* 3/27 Hampton Street is on the same street as the
> assessment site at 26 Hampton Street.

**Days to let.** Restricting to `Status = Historical` — that is, listings that
actually left the market:

```
House:  n = 29,  mean = 24.79 days  →  25  ✓
Unit:   n = 79,  mean = 21.72 days  →  22  ✓
```

Both reproduce. Note the reported figure is the **mean**, not the median — the
medians are 22 and 18 days respectively.

> **PRD reports a mean for days-on-market and a median for price, and both
> choices are defensible.** Prices are right-skewed by a few luxury sales, so
> the median is the honest centre. Days-on-market is bounded below at zero and
> less skewed, so the mean carries the information about the tail of slow
> listings. **If you report a "typical" value, say which statistic it is.**

### Rents over time

```
CY2024 house median $800  (n = 117)      CY2025 house median $800  (n = 140)   →   0.0% YoY
CY2024 unit  median $620  (n = 233)      CY2025 unit  median $660  (n = 339)   →  +6.5% YoY
```

Interesting against the Q4 snapshot: full-year house rents were **flat** while
the Q4 median hit $898. The Q4 number is a quarter of a small sample at the
seasonal peak; the calendar-year number is the trend.

## 8.6 Yields — putting the two datasets together

The exam-relevant move is to combine the sales file and the rental file:

```
Gross rental yield  =  (weekly rent × 52) / purchase price
```

East Brisbane, 2025:

```
HOUSE     897.5 × 52  =  $46,670 pa      /  $1,610,000  =  2.90%
UNIT        650 × 52  =  $33,800 pa      /    $777,500  =  4.35%
```

Cross-check against the independent SQM/PRD series in the Week 3 lecture:
**Brisbane Metro house yield 2.9%**, unit 3.8%.

> **The house number lands exactly on PRD's independent Brisbane figure, from
> two completely different sources. That is a reconciliation, and it is worth
> saying out loud in a report.** East Brisbane's unit yield of 4.35% is
> *above* the Brisbane Metro 3.8% — meaning East Brisbane units are cheap
> relative to the rent they command, which is a genuinely useful finding for an
> investment recommendation.

> **This is a *gross* yield, and the distinction is examinable.** It ignores
> rates, insurance, body corporate, management fees, maintenance and vacancy.
> The Week 3 lecture is explicit that Brisbane yields fell *because holding
> costs rose*, not because rents fell — so the **net** yield has compressed
> further than the gross. Say "gross" every time you quote one.

## 8.7 Seasonality and price segmentation

The comparison workbooks carry two more tabs worth knowing about.

**Peak selling periods** — median monthly sales counts, East Brisbane:

| | Jan | Feb | Mar | Apr | May | Jun | Jul | Aug | Sep | Oct | Nov | Dec |
|---|--:|--:|--:|--:|--:|--:|--:|--:|--:|--:|--:|--:|
| Houses | 1 | 5 | 6 | 6 | 6 | 5 | 6 | **8** | 5 | 6 | 6 | 3 |
| Units | 7 | 12 | 12 | 7 | 9 | 10 | 9 | 7 | 10 | **14** | 12 | 6 |

January and December are the troughs in both; August (houses) and October
(units) the peaks.

**Price range segmentation** — the count of East Brisbane house sales in each
price band, by year. The migration up the bands is the clearest picture of the
market in the whole dataset:

| Year | $600–700k | $700–800k | $800–900k | $900k–1m | $1–1.2m | $1.2–1.5m | $1.5–2m |
|---|--:|--:|--:|--:|--:|--:|--:|
| 2011 | 18 | 13 | 2 | 4 | 2 | 2 | 1 |
| 2015 | 24 | 28 | 16 | 14 | 14 | 6 | 2 |
| 2020 | 5 | 15 | 14 | 12 | 13 | 10 | 9 |
| 2025 | — | — | — | 1 | 6 | 20 | **44** |

> **By 2025 the $600–900k bands are empty and the $1.5–2m band holds 44
> sales.** That is a better argument than any growth percentage, because it is
> a *distribution* shifting rather than a single statistic moving — and it
> answers the affordability question directly: there is no longer an entry
> point below $900,000 for a house in East Brisbane. **If Section C gives you
> banded data, plot the bands; the migration is the story.**

## 8.8 Writing it up — from spreadsheet to Section C

Here is the shape of an answer using only what is above.

**Background (site and heritage).** Brownfield inner-city site, 1,395 m² with
822 m² of existing office/warehouse — 59% site cover. Check the Brisbane City
Plan for a **heritage overlay** and for **flood** exposure (East Brisbane is
one of the 22 flood-affected suburbs in the unit's own dataset), and check the
**Aboriginal cultural heritage database**. Both affect the development
envelope and therefore feasibility.

**Economic indicators.** National: GDP +2.6% YoY but only ~1% per capita; CPI
3.7%, above the RBA's 2–3% band; cash rate 4.10% and rising; unemployment
4.3%; population +1.6% (+424,000). Local: Queensland supported by population
growth, Cross River Rail, Queen's Wharf and the 2032 Olympics. **Rates are the
headwind; population and infrastructure are the tailwind.**

**Demographic analysis.** East Brisbane skews young, professional and
small-household, against a Queensland backdrop of strong overseas and
interstate migration. Cite at the **SA2** level and compare with Queensland,
naming the geography.

**Property indicators.** Median house $1,610,000 (+11.7% in 2025, n = 74),
median unit $777,500 (+11.1%, n = 102) — units at **48.3%** of the house
price. Vacancy **1.4%** against the REIA healthy benchmark of **3.0%**. Vendor
premiums of **+13.3%** (house) and **+3.7%** (unit) in Q4 2025, up from a
−7.3% house *discount* a year earlier. Days on market 48 and 33. Gross yields
**2.90%** and **4.35%**.

**Supply.** The postcode pipeline is 833 units and apartments across 2025–26 —
but **98%+ of it is Kangaroo Point**, and **every 2026 project is at
"Possible" status**. There are **no detached dwellings and no land lots** in
the pipeline at all.

**Graph.** Line graph, median house and unit price by year 2011–2025, both
series on one chart, title, both axes labelled, source line: *"PRD/Price
Finder, postcode 4169."* Drawn with a ruler.

**Discussion.** Demand indicators all point the same way — extreme rental
scarcity, vendor premiums, falling days on market, double-digit price growth.
Supply is constrained and is delivering apartments into a market short of
houses. The headwinds are interest rates, construction costs and the
speculative status of the pipeline. Office is the weakest case: the fringe
market recorded its first negative net absorption in nearly five years, with
Urban Renewal losing **−10,586 m²** as *fringe tenants relocate to the CBD*.

**Recommendation.** *(Underline it.)* **Medium-density residential or
mixed-use with a small ground-floor retail component**, subject to confirming
there is no prohibitive heritage overlay and that flood risk is manageable,
and subject to stress-testing feasibility against current construction costs
and a rising cash rate.

> **The recommendation must answer the question that was asked, and it must be
> conditional in the right way.** "Residential" alone is a guess.
> "Medium-density residential, subject to heritage and flood clearance and
> feasibility at current costs" is an analysis. The conditions are not hedging
> — they are the two site-specific and one market-specific risks the data
> actually identified.

<details>
<summary>✅ Checkpoint 1 — reading the data</summary>

**Q1. A chart is headed "East Brisbane (4169)". What is the first thing you check?**

Whether the data is the **suburb** or the **postcode**. Postcode 4169 contains
East Brisbane *and* Kangaroo Point. On the development pipeline, the postcode
figure is over 170 times the suburb figure.

**Q2. The supplied workbook has a "growth" column. Can you use it?**

No. It contains `0.0` for every year in every suburb block in every file.
Compute growth yourself as (this year ÷ last year) − 1.

**Q3. East Brisbane 2025 houses: median $1,610,000, mean $2,178,858, n = 74, max $14,999,999. Which do you report and why?**

The **median**. The mean is 35.3% higher because a single ~$15m sale (9.3× the
median) drags it up; the distribution is right-skewed and the mean is not
robust to that tail. Report n alongside it.

**Q4. A pie chart shows the 2026 pipeline as 33% commercial. Give two reasons that figure could mislead.**

(1) It is a share **by value**, not by project count — by count commercial is
7.7%. (2) The entire "commercial" slice is **one aged-care project**, which
the unit's own Week 10 classification scheme places under *other residential*;
reclassify it and commercial falls to 0.65%.

**Q5. Q4 2025 East Brisbane house rents: the raw median is $895 but PRD publishes $898. Reconcile.**

PRD excluded a $200/week listing recorded as a one-bedroom **house** at
3/27 Hampton Street — implausible in a market with a $550 next-cheapest and a
~$900 median. The median of the remaining 28 listings is (895 + 900) / 2 =
$897.5, which rounds to $898.

**Q6. A weekly rent of $650 on a $777,500 unit. Compute the gross yield and state one limitation.**

```
650 × 52 = $33,800 pa  ;  33,800 / 777,500 = 4.35%
```

It is a **gross** yield: it ignores council rates, insurance, body corporate,
management fees, maintenance and vacancy. The net yield is materially lower,
and the unit's own material says holding costs have been rising.

**Q7. Every 2026 project in the pipeline has status "Possible". What does that do to your supply analysis?**

None of it is committed — not approved, tendered or financed. Comparing it
directly with a 2025 figure that is mostly "Commenced" overstates the increase
in real supply. Filter by status and disclose which statuses you counted.

</details>

## 8.9 Summary — the eight checks

Run these on any dataset you are handed, in the exam or in an assignment.

1. **Which geography is this?** Suburb, postcode, SA2, LGA, GCCSA — and does
   the label match the contents?
2. **Do the components sum to the stated total?** They did here, in both
   pipeline years and every column of the Greater Brisbane supply table.
3. **Does the figure reproduce from the raw file?** The pipeline reproduced
   from the postcode file and not from the suburb file — which is how the
   labelling error was found.
4. **Recompute every percentage and name its base.** By value or by count.
   Against this year or last year.
5. **Check n.** A median over 74 sales is not a median over 740.
6. **Median or mean — and why?** Mean 35% above median means a skewed
   distribution.
7. **Are the outliers real or errors?** A $15m house sale is real; a $200
   one-bedroom house and a −1 day listing are not.
8. **Is "supply" committed or speculative?** Status and project stage before
   dollar value.
