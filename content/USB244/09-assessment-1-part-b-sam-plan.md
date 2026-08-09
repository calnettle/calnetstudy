# Assessment 1 Part B — Strategic Asset Management Plan

**30% · Group of 4 · Due 7 Oct 2026, 11:59pm · 5,000 words max**

Part A looked backwards at one building. Part B looks forward at a
**portfolio** built from the group's Building Twos — at least three different
properties — over a **ten-year** horizon, and delivers a brief strategic asset
management (SAM) plan.

> **No Part B rubric has been supplied.** Everything below infers weighting
> from the brief's own task list and the unit learning outcomes. Get the CRA
> rubric off Canvas before you allocate words — the Part A rubric moved the
> word budget substantially, and Part B's will too.

## 7.1 What changes from Part A

| | Part A | Part B |
|---|---|---|
| Unit of analysis | One building | **The portfolio as a whole** |
| Direction | Historical — 3 years back from the EOI date | **Forward — 10 years** |
| Question | What did the property manager *do*? | What should the asset manager *do*? |
| Output | Review | **SAM plan** |
| Words | 1,500 | 5,000 |
| Marks | 20% | 30% |

The brief states the trap in one line: *"Your report should address the
performance of the portfolio as a whole, not just its parts."* Four Part A
reports stapled together with a cover page is the single most common way this
assessment goes wrong. Everything in §7.3 exists to stop that.

> **The other line that decides grades:** *"Simply providing property/economic
> statistics will not result in a passing grade."* The brief calls
> interpretation *"the most important aspect of this assessment"*. Every
> figure needs a "which means the owner should…" attached to it.

## 7.2 Building the portfolio

- **At least three different properties**, taken from group members' Building
  Twos.
- A group of 4 therefore has one spare — you do **not** have to use all four.
  The FAQ's own worked case: if three members chose retail and one chose
  office, the group may analyse the three retail assets only.
- The portfolio **may** be mixed commercial and retail.

That choice is itself an argument worth 200 words. Three retail assets give a
clean sector story and a defensible sector scenario; a mixed portfolio lets
you argue diversification but forces you to handle two market cycles, two
benchmark sets and two sector scenarios. Say which you chose and why.

> **Your sector scenario in Task 3 follows the portfolio, not the group.** If
> you build a retail portfolio you take the retail scenario; if office, the
> office one. A mixed portfolio has to nominate one — and justify the choice
> by weight of income, not by headcount.

## 7.3 Making it a portfolio, not three reports

This is where the marks separate. Four things you can compute across the
portfolio that no individual Part A contains:

### Portfolio WALE

```
Portfolio WALE (income) = Σ (asset net income × asset WALE) / Σ (asset net income)
Portfolio WALE (area)   = Σ (asset area       × asset WALE) / Σ (asset area)
```

Worked, with three assets:

| Asset | Net income | WALE (yrs) | Area (sqm) | Income weight |
|---|---:|---:|---:|---:|
| Retail — neighbourhood centre | 2,188,124 | 5.21 | 4,947 | 28.8% |
| Office — B grade suburban | 1,450,000 | 3.80 | 6,200 | 19.1% |
| Office — A grade CBD | 3,960,000 | 6.45 | 11,500 | 52.1% |
| **Portfolio** | **7,598,124** | | **22,647** | |

```
Income-weighted portfolio WALE = 5.59 years
Area-weighted portfolio WALE   = 5.45 years
Simple average of the three    = 5.15 years   ← WRONG, and 0.43 years low
```

> **Never average the three WALEs.** A simple mean weights a $1.45m asset the
> same as a $3.96m one. Here it understates portfolio lease security by five
> months. Weight by income for the income WALE and by area for the area WALE —
> exactly as you did inside each asset in Part A.

### Concentration and diversification

| Measure | How | What it tells the owner |
|---|---|---|
| Largest asset share of income | 3,960,000 / 7,598,124 = **52.1%** | One asset carries the portfolio; its lease events *are* portfolio events |
| Largest tenant share of income | Sum that tenant across all assets | Anchor covenant exposure — the Task 3 scenario |
| Sector split by income | Retail 28.8% / office 71.2% | Whether "diversified" is true or nominal |
| Geographic split | CBD vs suburban vs metro | Correlated exposure to one sub-market |
| Expiry profile by year | Stack all three schedules on one chart | **Cluster years** — the thing to manage |

The stacked expiry profile is the single most valuable exhibit in a SAM plan.
If two assets both roll 30% of income in FY2029, that is a portfolio problem
neither Part A could see, and smoothing it is a concrete recommendation.

### Portfolio financial metrics

```
Portfolio outgoings ratio = Σ outgoings / Σ gross income
Portfolio occupancy       = Σ occupied area / Σ lettable area   (state the basis)
Weighted average cap rate = Σ (asset value × asset cap rate) / Σ asset value
Portfolio value           = Σ (asset net income / asset cap rate)
```

### A portfolio matrix

Position each asset on hold / add value / divest, and defend it:

| Asset | Role | 10-year strategy | Trigger to review |
|---|---|---|---|
| A | Core income | Hold, re-gear anchor early | Anchor option date |
| B | Value-add | Refurbish, re-grade, then hold | NABERS uplift achieved |
| C | Non-core | Divest into strength | Cap rate compression past X% |

## 7.4 Ancillary income as a portfolio strategy

Ancillary income — rooftop telecommunications, signage, media screens, casual
mall leasing, car parking, EV charging, storage, utility on-selling — is
catalogued asset-by-asset in
[Part A §6.7](#/USB244/08-assessment-1-part-a-guide). At portfolio level it
becomes something different: a **strategy the owner can only execute because
they hold three assets**, which is exactly the "portfolio as a whole, not just
its parts" argument the brief is marking.

### Scale is the argument

A single neighbourhood centre negotiating a media contract, a telco renewal or
an EV charging rollout is a price taker. Three assets negotiating one contract
across the portfolio are not.

```
$25,000 pa per asset × 3 assets  =  $75,000 pa  =  $1,250,000 of value at 6.0%
$50,000 pa per asset × 3 assets  = $150,000 pa  =  $2,500,000 of value at 6.0%

Against portfolio net income of $7,598,124, that second case is a
1.97% uplift in net income — for no lettable area and no new tenancy.
```

Portfolio-level moves worth recommending, each with a reason that only works
at portfolio scale:

| Move | Why three assets beats one |
|---|---|
| **One media/advertising operator across the portfolio** | An operator will fund the screens for a multi-site network; they will not for one asset |
| **Portfolio telco review** | The carriers' tower companies negotiate as a portfolio; the owner should too, rather than renewing three leases separately at three different times |
| **Single EV charging partner** | Capex funded by the operator in exchange for a revenue share, viable only at network scale |
| **Common parking platform** | One app, one pricing policy, one data set — and it is the proptech recommendation in Task 1 |
| **Embedded network across assets** | Bulk energy purchasing improves with load; the margin is portfolio-wide |
| **Storage and parcel lockers** | One national operator, three sites, one agreement |

### It is a valuation argument, not just an income argument

Ancillary income is typically capitalised at a premium to the passing yield
because it is short, unsecured and traffic-dependent — Part A works the
25% haircut from moving 6% to 8%. At portfolio level that produces a real
strategic recommendation: **convert ancillary income from licences to leases
wherever you can**. A rooftop telco site on a 15-year lease is capitalised very
differently from the same income earned on a rolling licence, and the
conversion costs nothing but negotiation.

### It is correlated with the anchor — which changes Task 3

The scenario in §7.7 has the anchors of two buildings failing to renew. Groups
model the lost rent. Almost nobody models what happens to everything else the
centre earns, and ancillary income is the most foot-traffic-sensitive line on
the statement.

On the same worked asset (net income $1,157,251 after the anchor departs, cap
rate re-rated to 7.5%):

| Ancillary income falls by | Net income | Value at 7.5% | Further loss |
|---:|---:|---:|---:|
| 0% (the naive model) | $1,157,251 | $15,430,013 | — |
| 25% | $1,134,182 | $15,122,433 | −$307,580 |
| 40% | $1,120,341 | $14,937,885 | −$492,128 |
| 60% | $1,101,887 | $14,691,821 | −$738,192 |

> **Ancillary income is a second-order anchor exposure.** Casual mall leasing,
> ATMs, media screens and car parking all price off foot traffic, so an anchor
> departure hits them too — and it hits them *before* the specialty rents
> reset, because licences roll monthly. Modelling this is a small piece of
> arithmetic that demonstrates portfolio thinking better than another page of
> market commentary.

### The ten-year view

| Horizon | What to say about ancillary income |
|---|---|
| **Short (1–2 yrs)** | Audit it. Most owners do not know what they earn outside base rent. Re-tender the media and parking contracts; find the telco lease nobody has looked at |
| **Medium (2–5 yrs)** | Convert licences to leases where possible; roll out EV charging and a portfolio parking platform; build the sub-metering that makes an embedded network viable |
| **Long (5–10 yrs)** | Ancillary income shifts with the sector — EV charging and last-mile/click-and-collect grow, ATMs decline with cash use, rooftop telco consolidates as carriers share infrastructure. Say which way each line is going and why |

> **Do not oversell it.** On this portfolio a strong ancillary programme is
> worth roughly 1–2% of net income. It is a real, defensible, low-capital
> recommendation — it is not a substitute for the leasing and capital strategy,
> and claiming otherwise reads as padding.

## 7.5 Task 1 — Proptech and generative AI

The brief asks three questions and you must answer all three:

1. **Would you recommend the owners invest in proptech to better manage the
   portfolio?**
2. **Why or why not?**
3. **How will AI help property managers in their strategic asset management
   plan?**

> **Answer question 1 with a recommendation, not a survey.** "Proptech is
> transforming the industry" is a statistic dump. "We recommend a staged
> investment — platform consolidation in year 1, sub-metering and BMS
> analytics in years 2–3, and no AI-driven leasing decisioning until the data
> is clean — because the portfolio's $7.6m income base cannot amortise a
> full-stack rollout" is an answer.

### Evidence you already have

Phil Levesque's guest lecture is a citable primary source and it maps
directly onto this task:

| Layer | Named in the guest lecture | Portfolio use |
|---|---|---|
| **Management platforms** | Cirrus8, MRI, PropertyMe | Trust accounting, lease administration, reporting at scale — the consolidation argument for a multi-asset owner |
| **Building management systems** | Connected BMS | Real-time energy, access and equipment monitoring — feeds NABERS and outgoings control |
| **Data analytics** | — | Turns raw data into insight on income, arrears, expenses, portfolio performance |
| **AI and automation** | — | Accelerates reporting and analysis; *"data now drives decisions that were once based on instinct"* |

And the limits, which is where the marks are:

```
AI WILL          accelerate reporting · summarise documents · draft
                 communications · prepare first drafts for review

AI WON'T         replace relationships — trust and negotiation
                 replace judgement — commercial decisions under pressure
```

The unit also lists an APREF/API national study, *Future Workforce for the
Property Industry: Are We Ready for the Change?*, covering property
technology/AI, sustainability and soft skills. That is the academic reference
this task is fishing for.

### A defensible structure

```
1  What proptech is, scoped to THIS portfolio (not the industry)
2  The investment case      — cost, who pays, what it replaces
3  The benefits, quantified — outgoings $/sqm, arrears days, reporting
                              hours, energy intensity, NABERS uplift
4  The risks                — data quality, integration, vendor lock-in,
                              privacy, cyber, over-reliance on AI output
5  THE RECOMMENDATION       — staged, costed, with a decision point
6  AI in the SAM plan       — forecasting, scenario modelling, lease
                              abstraction, benchmarking, tenant analytics
                              ... and what it must not decide
```

> **Tie the recovery question to the leases.** A proptech spend is either an
> operating expense recoverable through outgoings, a capital works item, or
> neither. Which one it is changes whether the owner or the tenants fund it,
> and whether it hits net income or the capital account. Almost no group
> makes this point, and it is pure property-management reasoning.

## 7.6 Task 2 — Economic and market conditions across three timeframes

The brief prescribes the structure, so use its headings:

| Horizon | Period | What actually moves in this window |
|---|---|---|
| **Short** | 1–2 years | Cash rate and bond yields, incentives, arrears, leasing enquiry, outgoings inflation, insurance premiums |
| **Medium** | 2–5 years | Supply pipeline delivering, lease expiries rolling, cap rate re-rating, refurbishment cycles, tenant covenant shifts |
| **Long** | 5–10 years | Structural demand (hybrid work, e-commerce, population), obsolescence and repositioning, decarbonisation mandates, infrastructure and precinct change |

For each horizon, three moves: **forecast → portfolio impact → asset manager
action.** Never a forecast on its own.

```
FORECAST     "Brisbane CBD vacancy rises toward X% as Waterfront delivers"
IMPACT       "Asset C's FY2029 expiry of 3,100 sqm now rolls into a
              tenant's market; incentives on renewal likely 35-40%"
ACTION       "Pre-emptive re-gear 18 months early at a lower face rent
              with a shorter incentive, preserving WALE and capital value"
```

### Where the forecasts come from

```
RATES        RBA Statement on Monetary Policy · RBA cash rate decisions
             and chart pack · market economist forecasts (Big 4 banks)
MARKET       PCA Office Market Report (Jan / Jul) · PCA benchmarks
             CBRE, JLL, Colliers, Knight Frank sector outlooks
ECONOMY      ABS retail turnover, CPI, labour force, population
             Deloitte Access Economics · Qld Budget papers
RETAIL       Shopping Centre News · anchor group results (Woolworths,
             Coles) · household consumption and savings ratio data
LONG RUN     Infrastructure pipeline, Brisbane 2032 planning documents,
             NABERS/Climate Active mandates, tenant ESG requirements
```

Cite the release date of every forecast. A forecast without a vintage is
unusable in a ten-year plan, and the marker can see when you pulled it.

### A supply-shock calculation worth doing

Most groups quote the vacancy rate. Very few compute what the pipeline does
to it. Using the unit's own PCA figures for Brisbane CBD:

```
Total stock, Jul 2025                    2,365,118 sqm
Vacancy, Jul 2025                             10.7%  = 253,068 sqm vacant
Waterfront Brisbane adds                   120,000 sqm  (+5.07% of stock)
New total stock                          2,485,118 sqm
Brisbane pre-commitment rate, Jul 2025        55.1%  → 53,880 sqm uncommitted

(a) New-to-market demand, no backfill released
       (253,068 + 53,880) / 2,485,118      = 12.35% vacancy

(b) Every pre-commitment is a relocation, all backfill released
       (253,068 + 120,000) / 2,485,118     = 15.01% vacancy
```

Two bounded outcomes, both defensible, and the real answer sits between them.
That is a forecast with reasoning attached — the thing the brief says it is
marking. State clearly that it holds demand constant and ignores withdrawals,
because it does.

## 7.7 Task 3 — The scenario plan

Three factors, applied to the portfolio, with **the actions the property
manager would take to protect the owner's interests** in each. That last
clause is the deliverable — a scenario without an action list is half a task.

### Factor 1 — The anchors in two buildings do not renew

This is the largest single value event in the assessment, so quantify it.
Using Richlands Plaza's real numbers as the worked case:

```
Gross market income                         2,791,905
Less outgoings                               -603,781
Net passing income                          2,188,124

Anchor gross income (36.9% of GMI)         -1,030,873
Net income after anchor departs             1,157,251     a 47.1% fall

Value at an unchanged 6.00% cap rate
     before  2,188,124 / 0.06  =  $36,468,733
     after   1,157,251 / 0.06  =  $19,287,517

But a centre that has lost its anchor also re-rates for risk:
     after   1,157,251 / 0.075 =  $15,430,013

Combined effect                            -57.7% of capital value
```

> **The cap rate is the bigger half of the loss.** The income fall costs
> $17.2m; the re-rate from 6.00% to 7.50% costs a further $3.9m — and it
> compounds, because a shorter WALE, a weaker covenant and a vacancy overhang
> are exactly what a purchaser prices. Groups that model only the lost rent
> understate the damage.

The manager's action list, sequenced:

| When | Action |
|---|---|
| 24–36 months out | Track option and expiry dates portfolio-wide; open re-gear talks **early**, while you still have time as leverage |
| Now | Understand *why* — turnover, GOCR, network strategy, the tenant's own store plans. A Woolworths leaving on 3.3% GOCR is a network decision, not a rent problem |
| Pre-expiry | Model re-gear vs replace: incentive cost, downtime, fit-out contribution, make-good recovery, split vs single replacement |
| Pre-expiry | Test subdivision — the specialty and mini-major market for a vacated supermarket box |
| At expiry | Enforce make-good; protect the trading environment for remaining specialties |
| Portfolio | Two anchors at once is a **correlated** event — stagger the response, don't fund two re-fits in the same year |

The specialty consequence is the property-management point most groups miss:
a neighbourhood centre's specialties trade off the anchor's foot traffic.
Losing the anchor breaches nothing contractually, but specialty turnover
falls, GOCRs blow out, and the *next* renewal round is compromised too.

**And the ancillary income goes with it** — casual mall leasing, ATMs, media
screens and car parking all price off foot traffic, and they roll monthly, so
they fall first. Worked in [§7.4](#/USB244/09-assessment-1-part-b-sam-plan):
a further $308k–$738k of value on this asset alone, depending on how far it
falls.

### Factor 2 — RBA cash rate decreasing to 3.35%

> **This factor is dated to "the end of 2025", which is in the past.** The
> brief is visibly recycled from the 2025 offering (the FAQ's library link is
> tagged `USB244_25se2`; the site-visit deadline reads "11 August 2025"). Do
> not write as though this is a forecast. Either treat 3.35% as the scenario's
> **assumed rate**, dated explicitly, or check the actual RBA cash rate and
> current forecast path at the time you write and analyse the *gap* between
> the scenario and reality. Cite the RBA release you used. Confirm with the
> coordinator which reading they want.

The transmission chain to write about:

```
Cash rate ↓  →  bond yields ↓  →  the risk-free leg of the cap rate ↓
             →  debt cost ↓ → borrowers return → transaction volumes ↑
             →  cap rates compress → values ↑
             →  household disposable income ↑ → retail turnover ↑ (retail)
             →  business confidence ↑ → expansion leasing (office)
```

Sensitivity on the same $2,188,124 of net income:

| Cap rate | Value | vs 6.00% base |
|---:|---:|---:|
| 5.50% | $39,784,073 | +9.09% |
| 5.75% | $38,054,330 | +4.35% |
| **6.00%** | **$36,468,733** | — |
| 6.25% | $35,009,984 | −4.00% |
| 6.50% | $33,663,446 | −7.69% |

> **A 25 basis point move in the cap rate is worth ~4% of capital value.**
> That is the number to use whenever you argue for or against a strategy —
> and it explains why protecting the cap rate (covenant, WALE, ESG, condition)
> often beats chasing rent.

Manager actions under falling rates: refinance and extend debt tenor; bring
forward divestment of non-core assets into a stronger bid pool; bring forward
capex while borrowing is cheap; and resist the temptation to read cap rate
compression as management performance — it is a market gift, and the owner's
report should say so.

### Factor 3a — Office: Waterfront Brisbane opens 2028, ahead of Brisbane 2032

From the unit's own slides:

| | |
|---|---|
| North Tower GFA (stage 1) | 75,331 sqm |
| South Tower GFA (stage 2) | 59,999 sqm |
| Podium GFA | 9,860 sqm |
| **Total GFA** | **145,190 sqm** |
| Pipeline table figure | 120,000 sqm |
| Public realm | over 9,000 sqm |
| Sustainability targets | 6-star Green Star, NABERS 5.5 energy, 4.5 water |

> **Two dates and two areas, both from the unit's material.** The Week 2
> lecture pipeline says the first tower delivers **2026**; the assessment
> brief's scenario says Waterfront opens **2028**. And 120,000 sqm (pipeline
> table) is not 145,190 sqm (**total GFA**, which includes the podium) — GFA
> and NLA are different measures. Use the brief's 2028 for the scenario since
> that is what you are asked to model, cite a range for the area, and note the
> discrepancy in a footnote. It is a mark for care, not a problem.

The argument to make: a premium tower of this scale plus a 2032 Olympics
deadline drives a **flight to quality**. Premium and A-grade tenants trade up,
their backfill floods B and C grade, and the secondary market takes the
vacancy. If your portfolio holds B or C grade office, that is the entire
medium-term story — and the response is either capital (refurbish, re-grade,
chase a NABERS uplift, add end-of-trip) or exit (divest before the backfill
arrives), and you must pick one.

### Factor 3b — Retail: 2028 federal income stimulus lifts disposable income

The chain to trace, and to bound:

```
Tax stimulus → disposable income ↑ → retail turnover ↑ → tenant MAT ↑
             → percentage rent ↑ (where turnover rent clauses exist)
             → GOCR falls at unchanged rent → HEADROOM to push rent at renewal
             → specialty demand ↑ → casual mall and pop-up income ↑
```

The property-management move: a **falling GOCR is the signal to raise rent**.
Woolworths at 3.3% GOCR at Richlands is already an affordable tenancy;
specialties typically sit at 8–15%, and a specialty whose GOCR drops from 14%
to 11% on higher turnover can absorb a market review. Identify which leases
have turnover rent clauses and which have fixed reviews, because only the
first captures the upside automatically.

The counter-argument that earns the top band: stimulus is **temporary and
partly inflationary**. If it lifts CPI, it lifts the cash rate, which works
against Factor 2 — and a rent set on a stimulus-inflated MAT becomes
unsustainable when the stimulus ends. Note the tension between the two
factors; the brief hands you three and expects you to see that they interact.

### Present it as a scenario matrix

| | Base case | Downside (anchors leave) | Upside (rates fall + stimulus) |
|---|---|---|---|
| Portfolio net income | | | |
| Portfolio WALE | | | |
| Weighted cap rate | | | |
| Portfolio value | | | |
| **Recommendation that changes** | | | |

That last row is what the brief means by *"how any of your recommendations may
vary"*. A scenario section that reaches the same recommendation in all three
columns hasn't done scenario planning.

## 7.8 Structure and word budget

5,000 words, with no rubric to weight it. A defensible split:

| Section | Words |
|---|---:|
| Executive summary | ~350 *(outside the total — Part A excludes it; confirm for Part B)* |
| Introduction and portfolio overview | 400 |
| Portfolio analysis — WALE, concentration, expiry profile, metrics, ancillary income | 800 |
| **Task 2** — economic and market forecast, short / medium / long | 1,300 |
| **Task 1** — proptech and AI recommendation | 850 |
| **Task 3** — scenario plan and manager actions | 1,300 |
| SAM plan — consolidated strategy and action timeline | 250 |
| Conclusion | 100 |
| **Body total** | **5,000** |

Task 2 leads even though the brief lists it second, because Tasks 1 and 3
both depend on the market view. Tables, charts and appendices are free if
Part A's exclusion carries over — confirm it for Part B.

## 7.9 Working as a group

- **Register the group in Canvas** — via **People**. Groups may span tutorial
  slots, though the coordinator prefers you move into one.
- **Register site visits early**; the group is encouraged to spread across
  different visits so the pooled primary data is diverse. You may share site
  visit *notes* for Part B — that sharing is explicitly permitted here, and
  explicitly forbidden in Part A.
- LO4 is *"collaborate strategically in professional contexts"*. Split by
  **analysis layer** (market, portfolio, scenarios, proptech), not by
  building — splitting by building is what produces three stapled reports.
- Nominate one person to own consistency: one voice, one reference style, one
  set of portfolio numbers that every section agrees with.

## 7.10 Traps checklist

> **1. Portfolio, not parts.** The brief says it explicitly. Every section
> should contain a sentence that could not be written about a single asset.

> **2. Never simple-average a portfolio WALE.** Weight by income for income
> WALE, by area for area WALE. The error here was 0.43 years.

> **3. Forward-looking only.** Part A's historical material is context, not
> content. The brief: *"focus on the portfolio's future strategic property
> asset management opportunities rather than the historical property
> management perspective in Part A."*

> **4. Statistics without interpretation fail.** Stated outright in the brief.

> **5. All three timeframes, every time.** Short 1–2, medium 2–5, long 5–10.
> Missing the long term is the common omission because it is the hardest.

> **6. Answer the proptech question with a recommendation.** Yes or no, staged
> and costed, with the reason. Not a technology survey.

> **7. Model the cap rate, not just the income.** In the anchor scenario the
> re-rate was a third of the loss.

> **8. The RBA factor is dated to end-2025 and that date has passed.** Handle
> it explicitly; don't present it as a live forecast.

> **9. Waterfront Brisbane appears with two dates and two areas in the unit's
> own material.** Cite the range, footnote the discrepancy.

> **10. Your recommendations must actually vary across scenarios.** Identical
> recommendations in every column means no scenario planning happened.

> **11. Pick the sector scenario that matches the portfolio's income weight**,
> not the group's headcount.

> **12. Model ancillary income in the anchor scenario.** It prices off foot
> traffic, so it falls with the anchor — a further $300k–$740k of value on the
> worked asset, on top of the lost rent and the cap rate re-rate.

> **13. Ancillary income is a portfolio-scale argument or it is nothing.** One
> media operator, one telco negotiation, one EV partner across three assets.
> Written asset-by-asset it belongs in Part A, not here.

> **14. Get the Part B rubric.** Everything above is inferred from the brief.

## Checkpoint

1. Your three assets have WALEs of 5.21, 3.80 and 6.45 years and net incomes
   of $2.19m, $1.45m and $3.96m. What is the portfolio WALE, and why is 5.15
   the wrong answer?
2. The anchor leaves an asset producing $2,188,124 net, of which the anchor
   was $1,030,873 gross. Why is the value loss bigger than 47%?
3. Waterfront Brisbane adds 120,000 sqm to a 2,365,118 sqm market that is
   10.7% vacant. Give the bounded range for the resulting vacancy rate and
   state what each bound assumes.
4. A specialty tenant's GOCR falls from 14% to 11%. What has happened, and
   what does the property manager do at the next market review?
5. Your group is three retail assets and one office asset. Which sector
   scenario do you take in Task 3?
6. Why is a portfolio-wide media and telecommunications strategy a Part B
   recommendation rather than a Part A one?

<details><summary>Answers</summary>

1. **5.59 years** income-weighted (`Σ income × WALE / Σ income`) and 5.45
   years area-weighted. 5.15 is the simple mean of the three WALEs, which
   weights a $1.45m asset equally with a $3.96m one and understates lease
   security by about five months.
2. Because the **cap rate re-rates as well**. Net income falls 47.1% to
   $1,157,251; at an unchanged 6.00% that alone takes value from $36.47m to
   $19.29m. But a shorter WALE, a lost covenant and a vacancy overhang push
   the cap rate out — at 7.50% the value is $15.43m, a **57.7%** total fall.
3. **12.35% to 15.01%.** The lower bound assumes the 55.1% pre-committed
   space is new-to-market demand and no backfill is released; the upper bound
   assumes every pre-commitment is a relocation from within the same market,
   so all 120,000 sqm effectively adds to vacancy. Both hold underlying
   demand constant and ignore stock withdrawals.
4. Turnover (MAT) has risen faster than gross occupancy cost — the tenancy has
   become **more affordable**, which is headroom. At the next market review the
   manager pushes rent toward the sector-normal GOCR band (specialties
   typically 8–15%), capturing the upside that a fixed-review lease would
   otherwise leave with the tenant.
5. **Retail** — but the real test is income weight, not headcount. Part B
   needs only three assets, so the cleanest answer is to build the portfolio
   from the three retail assets and take the retail scenario. If you keep all
   four, nominate the sector carrying the majority of portfolio net income and
   justify it.
6. Because **the value comes from scale, which a single asset does not have**.
   A media operator will fund a screen network across three sites and not one;
   tower companies negotiate telco renewals as a portfolio, so the owner should
   too rather than renewing three leases separately at three different dates.
   Written asset-by-asset it is just Part A's ancillary income section again —
   the portfolio framing is what makes it a Part B recommendation.
</details>
