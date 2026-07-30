# Topic 5 — DCF and Hypothetical Development

Week 11. This material sits **outside the mid-semester exam**, which
covers Weeks 1–5 only, and belongs to the final valuation report. It is
also where the unit's two "other" valuation approaches live: discounted
cash flow for multi-tenanted investments, and the hypothetical development
(residual) method for development sites.

## Part 1 — Discounted Cash Flow

### Where it came from

- **Mid-1970s** — became a property valuation method in UK practice, made
  practical by reliable calculators and cash-flow log tables.
- **1994** — valuers supported DCF to assist buy/sell decisions and
  selection between alternative investments.
- **2011** — RICS Valuation Standards **GN7**, a guidance note on using
  DCF for commercial property investment.
- Accepted and validated by the courts, because it is an **explicit
  method** — it requires valuers to articulate their assumptions for all
  future income and for the investor's attitude to risk.

DCF identifies the expected net cash flows, positive and negative, and
discounts them at a rate of return back to present-day value. It is used
for **multi-tenanted properties and development proposals** — precisely
the cases where a single year's income is not representative.

### The six elements

```
1. Net cash flow
2. Escalation (growth rates)
3. Holding period
4. Terminal value (yield)
5. Discount rate
6. Net present value
```

### 1. Net cash flows

| Positive (money in) | Negative (money out) | Timing |
|---|---|---|
| Rental income | Operating expenses | **Initial** — at the beginning of the project |
| Outgoings recovery | Statutory expenses | **Periodic** — during the life of the project (yearly, quarterly, monthly rests) |
| Parking fees | Capital expenses | **Terminal** — at the end of the project |
| Naming / signage rights | Vacancy allowances | |
| Electricity profit | Leasing incentives | |
| Sale proceeds | Agency fees | |
| | Acquisition costs | |

Start simple. An office building with gross rent of $100 p.a. and
outgoings of $30 p.a. per m²:

```
Item / Years                   0
Gross Rental Income/m²      $100
Outgoings/m²                ($30)
                            ─────
Net Cash Flow/m²             $70
```

### 2. Escalation factors

The specific rates at which each cash flow is projected to increase or
decrease over the study period. **Rental growth rates are adopted
specifically to the rent review clause** — CPI, fixed percentage, market,
or combination. In practice, forecast CPI is often adopted as the growth
rate for outgoings.

| Year | 0 | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|
| Rental growth | | 2.00% | 5.00% | 7.00% | 2.00% | 0.00% |
| CPI outgoings | | 2.50% | 2.70% | 3.00% | 2.40% | 2.20% |
| **Gross Rent** | $100.00 | $102.00 | $107.10 | $114.60 | $116.89 | $116.89 |
| **Outgoings** | $30.00 | $30.75 | $31.58 | $32.53 | $33.31 | $34.04 |
| **Net Income** | $70.00 | $71.25 | $75.52 | $82.07 | $83.58 | $82.85 |

Every cell reproduces: `107.10 × 1.07 = 114.597 → 114.60`;
`114.60 × 1.02 = 116.89`; `32.53 × 1.024 = 33.31`;
`33.31 × 1.022 = 34.04`.

> **Rent and outgoings must escalate on separate rates, and Year 5 shows
> you why.** Rent grows 0% while outgoings grow 2.2%, so net income
> *falls* from $83.58 to $82.85 — a 0.9% decline. Escalate both lines at a
> single blended rate and you lose that effect entirely. In a real
> valuation, a lease with a CPI review and outgoings running above CPI is
> a slowly shrinking net income, and the DCF is the only method that shows
> it.

### 3. Holding period

The total return earned from holding an investment for a specified period.
Events such as rent reviews, lease expiry, redevelopment or refurbishment
affect the analysis term. **Usually 5 or 10 years** in practice. The
appraisal conclusion depends on the estimated terminal value.

### 4. Terminal value

A hypothetical sale at the end of the holding period, to close off the
cash flow. Without this proxy asset value the DCF is incomplete.

```
                     NOI
Terminal value = -----------
                      i

where NOI = the net income of the period immediately AFTER the holding
            period (used as the de facto market rent)
      i   = the terminal capitalisation rate
```

The relationship with Topic 4 is worth stating explicitly, because it is a
favourite short-answer question:

> The **capitalisation method** assumes the asset is held **in
> perpetuity** and therefore does not need a terminal value. However, the
> capitalisation method is used to **establish** the terminal value for a
> DCF at the end of the holding period.

**The terminal cap rate should be softer than the current cap rate.** "In
practice, apply a rate slightly 'softer' than a rate applied to the
property now" — it allows for ageing and other unknown risks associated
with a property's life cycle, and for new supply of competing property.

**Worked example.** Current cap rate 8.5%, so adopt a softer 9.5% terminal
yield.

```
Year 5 net income   =  $82.85
Terminal cap rate   =   9.50%

Terminal value      =  82.85 / 0.095
                    =  $872.11
```

The deck prints **$872.08**, which is what you get from the unrounded
Year 5 net income of $82.8489 rather than the displayed $82.85. Either is
defensible; say which you used.

| Year | 0 | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|
| Gross Rent | $100.00 | $102.00 | $107.10 | $114.60 | $116.89 | $116.89 |
| Outgoings | $30.00 | $30.75 | $31.58 | $32.53 | $33.31 | $34.04 |
| Terminal Value | | | | | **$872.08** | |
| **Net Income** | $70.00 | $71.25 | $75.52 | $82.07 | **$955.66** | $82.85 |

> **The terminal value goes in Year 4, not Year 5, and that is deliberate
> — but only because Year 0 is the first period.** The deck explains: "this
> is why we have added an additional year (year 0) being the first period,
> then year 5 in the model must be *outside* the holding period (for a
> five year holding period)." So the columns headed 0, 1, 2, 3, 4 are the
> five years you hold, and the column headed 5 exists only to supply the
> income that gets capitalised into the terminal value. `83.58 + 872.08 =
> $955.66` is the Year 4 sale. If you put the terminal value in the last
> column you will double-count a year of income.

### 5. Discount rate

The rate that brings a future amount, or a future series of cash flows, to
a present value. It takes into account opportunity cost, inflation (CPI)
and a risk premium, and it must be determined from market evidence —
including sales evidence, the strength of the lease covenants, building
age and quality, and the terminal valuation assumptions.

Five ways to derive it:

```
Risk-free Rate + Risk Premium
Opportunity Cost + Inflation + Risk
Weighted Average Cost of Capital (WACC)
Client's Cut-off (Hurdle) Rate
Analysis of Sales Evidence
```

| Component | Definition |
|---|---|
| **Risk-free rate** | The return available on a minimal-risk investment, such as government long-term bonds |
| **Risk premium** | The addition to the risk-free rate required to offset the inherent risks of property investment |
| **Opportunity cost of capital** | The return an investor could earn on a foregone investment of similar risk profile |
| **Client's hurdle rate** | The minimum required return an investor sets; accept the proposal when the IRR exceeds it |
| **WACC** | The opportunity cost from all sources of capital. A marginal cost of an additional dollar of capital; assets are financed by debt or equity, each weighted by its required rate of return to achieve the target capital structure. Takes into account stand-alone, corporate and market risks |

> **The deck contradicts itself on the discount rate, in a way that would
> cost you an exam mark if you copied it.** One slide says the discount
> rate is "the investor's required rate of return, which **is equal to the
> risk-free rate**." Two slides later the same deck derives it as
> "**Risk-free Rate + Risk Premium**," and the worked example uses a
> **5.41% ten-year bond rate plus a 3.5% risk premium = 8.91%**. The
> risk-free rate alone is the wrong answer. The discount rate is
> risk-free **plus** a premium for property risk, always.

And the distinction the deck sets in capitals:

> **The Capitalisation Rate and Discount Rate are two separate concepts,
> and must NEVER be interchanged.**

| Capitalisation rate | Discount rate |
|---|---|
| Indicates the return on investment — the relationship between rent (NOI) and capital value **at a point in time** | Measures the return on capital income **over a period of time** |

The arithmetic difference shows how much the rate matters. The deck's own
table for $100 in Year 1:

| Year | @ 11% | @ 15% | Year | @ 11% | @ 15% |
|---|---|---|---|---|---|
| 1 | $100.00 | $100.00 | 11 | $31.73 | $21.49 |
| 5 | $59.35 | $49.72 | 15 | $20.90 | $12.29 |
| 10 | $35.22 | $24.72 | 20 | $12.40 | $6.11 |

At year 20, four percentage points of discount rate halve the present
value. In a long-hold DCF the discount rate does more work than the growth
assumption.

### 6. Net present value

The difference between the discounted revenues (cash inflows) and the
costs (cash outflows) in a discounted cash flow analysis.

```
        ∞
       ___   CFₙ                CF₁        CF₂              CFₙ
DCF =  ╲   --------   =  ------------ + ---------- + ⋯ + ----------
       ╱    (1 + r)ⁿ       (1 + r)¹     (1 + r)²         (1 + r)ⁿ
       ‾‾‾
      n = 1
```

- **Positive NPV** implies the IRR is greater than the discount / hurdle
  rate.
- **Negative NPV** implies the IRR is lower than the discount / hurdle
  rate.
- **Zero NPV** implies the IRR equals the discount rate.
- "There is little real distinction between NPV and Present Value (PV)."

**Worked example.** Discount rate 8.91% (5.41% bond + 3.5% risk premium).

| Year | FV | PV |
|---|---|---|
| 1 | $70.00 | $64.27 |
| 2 | $71.25 | $60.07 |
| 3 | $75.52 | $58.46 |
| 4 | $82.07 | $58.33 |
| 5 | $955.66 | $623.69 |
| **Total (NPV)** | | **$864.82** |

Every row reproduces: `70 / 1.0891 = 64.27`;
`955.66 / 1.0891⁵ = 623.69`.

> **The deck says Period 0 is not discounted, and then discounts it.** The
> stated convention is "the current period is by convention Period '0' and
> is **not** discounted." But the NPV table above takes the Year 0 net
> income of $70.00 and discounts it by one full period to $64.27, and the
> lecturer's own spreadsheet confirms it — the formula is
> `=PV($G$24, 1, 0, C21)` applied to the year-0 cash flow. Every
> subsequent flow is likewise shifted one period later. So in practice
> this deck treats the whole model as **end-of-period**: the "Year 0"
> column is really Year 1 in arrears. Pick one convention, apply it to
> every row, and state it. Mixing them shifts the whole valuation by one
> discount period — here that would be 8.91% of the answer.

Notice the composition: the terminal value's present value is
`872.08 / 1.0891⁵ = $569.15`, which is **65.8%** of the $864.82 total. Two
thirds of this valuation rests on one capitalisation of one year's income
at a rate the valuer guessed. That is what the deck's closing warning
means by "massive assumption bias".

### A second NPV example

*An investor purchased a property for $86,178 and intends to hold it for
four years, with a terminal value of $92,000 at the end of Year 4 and a
discount rate of 8.91%.*

| Year | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| Cash flow | $10,000 | $14,000 | $11,000 | $8,000 |
| Terminal value | | | | $92,000 |
| Net income | $10,000 | $14,000 | $11,000 | $100,000 |
| Present value | $9,182 | $11,803 | $8,515 | $71,077 |
| **Total** | | | | **$100,577** |

```
10,000 / 1.0891    = $ 9,181.89
14,000 / 1.0891²   = $11,803.00
11,000 / 1.0891³   = $ 8,515.09
100,000 / 1.0891⁴  = $71,076.98
                     ──────────
                     $100,576.97
```

> **The deck labels $100,577 as the "Net Present Value". It is not — it is
> the gross present value of the inflows.** The *net* present value must
> net off the $86,178 purchase price:
> `100,577 − 86,178 = **$14,399**`. That is the number that tells the
> investor whether to buy. Writing $100,577 as an NPV in an exam answer
> when a purchase price has been given is a straight loss of marks,
> because a positive NPV is meaningless if you have not subtracted the
> cost.

### Internal Rate of Return

The IRR is the discount rate at which the present values of all positive
and negative cash flows produce a **zero NPV** — where the NPV of cash
inflows equals the NPV of cash outflows.

Three ways to compute it: a computer's IRR or Goal Seek function; a
financial calculator; or the formula (linear interpolation).

Verifying the deck's claim on the same cash flows:

| Year | Purchase price | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| Cash flow | −$86,177 | $10,000 | $14,000 | $11,000 | $100,000 |
| Present value @ 14% | | $8,772 | $10,773 | $7,425 | $59,208 |
| **Sum** | | | | | **$86,177** |

```
10,000 / 1.14    = $ 8,771.93
14,000 / 1.14²   = $10,772.55
11,000 / 1.14³   = $ 7,424.69
100,000 / 1.14⁴  = $59,208.03
                   ──────────
                   $86,177.19

Solving precisely: IRR = 14.0001% against a cost of $86,177
                   IRR = 13.9997% against a cost of $86,178
```

So 14% is right to four significant figures. Note the deck uses $86,177
here and $86,178 two slides earlier — a $1 inconsistency that does not
change the answer but does show the figures were reverse-engineered from
the 14% rate.

**The decision rule:**

```
IRR >  RRR   →  Invest  — the investment earns more than the minimum yield
IRR =  RRR   →  Accept  — the investment earns the minimum yield
IRR <  RRR   →  Reject  — the project does not create value for investors
```

"The higher the IRR, the higher the growth potential of a project — but,
possibly, at greater risk."

### DCF summary points

- The underlying principles are the time value of money (opportunity
  cost), allowances for inflation, tax liability, changes in expenditure
  and irregular payments.
- It uses NPV and IRR to assess acceptability.
- It must include cash flow analysis **and** a sale or terminal value, so
  time frames are crucial.
- It is **subject to massive assumption bias** — growth rates and terminal
  value calculations strongly influence outcomes.

## Part 2 — The Hypothetical Development Method

Used by valuers to calculate market value, often for mortgage purposes,
and by investors and developers for feasibility analysis. Applications:
land subdivision, strata subdivision, and land or property rezoned to
allow a higher-order use.

Other names for the same thing: **feasibility analysis, englobo valuation,
residual method**.

The core idea: the HD method determines the value of the land **not on its
past use, but on the allowable use now**, on the assumption that all
approvals for the higher-use development are in place.

> **Good valuation practice requires two methods wherever possible, and
> for development sites those two are HDM and the market approach.** A
> residual valuation is arithmetically fragile — it is a small difference
> between two large numbers, so a 5% error in the gross realisation can
> swing the land value 15%. Backing it with a direct comparison on a
> $/lot basis is not optional professional garnish; it is the check that
> makes the answer defensible.

### Site types

| | Definition |
|---|---|
| **Greenfield** | Undeveloped land on the periphery of cities for suburbanisation, urban growth or fringe development. Encompasses wildlife habitat and productive farmland on the urban periphery. Also called *broad acre* |
| **Infill** | Redevelopment of existing vacant or under-utilised urban areas as intensive land use — medium to high density flats, or a single dwelling replaced by townhouses and villa units. Also *interstitial development*, *urban consolidation*, *high rise development* |
| **Brownfield** | Land or premises abandoned, vacant, derelict or under-utilised due to actual or perceived hazardous substances, pollutants or contaminants. Previously industrial. Differs from other contaminated sites in holding **active potential for redevelopment**. Also *grey fields* — old, obsolete, unprofitable retail and commercial sites |

### Sales analysis, when comparables exist

- Determine whether any comparable new land subdivisions have commenced or
  been approved in the relevant market.
- Check the DA approval to ascertain the total yield of lots.
- Divide the sale price by the total lot yield.

```
Sale Price
----------  =  Rate ($/lot)
Lot Yield
```

Then: confirm the land has been rezoned and the higher use is allowed;
confirm market demand for the redevelopment lot type; establish the
permissible lot yield from council zoning and approvals; compare the
analysed sales on a $/lot basis to the subject; multiply the determined
rate by the overall development lot yield.

**If there are no recent or similar sales of land rezoned for a higher
use, the valuer has to think and calculate like a property developer** —
which is where the residual method comes in.

### The development equation

```
V = L + D + F + P

V = Value
L = Land
D = Development costs
F = Finance costs
P = Profit
```

You work **back** from the end value to the beginning land value
(englobo). Rearranged, `L = V − D − F − P`.

### The four steps

```
1. Determine gross and net realisation value
2. Deduct profit and risk
3. Calculate and deduct development / construction costs
4. Calculate and deduct interest on the land, land tax and
   acquisition costs

The remainder (residual or balance) is the land value.
```

**Gross Realisation Value** is the forecast of the maximum cash flow the
property will generate on completion — net saleable area × estimated value
per lot or per m², or net rentable area × estimated rent per lot or per m².

**Net Realisation Value** is the estimated selling price less the
estimated costs of completion and sale. Selling expenses: advertising and
marketing, selling agents' commission, legal fees, GST and the GST margin
scheme, repair and maintenance. The period of realisation depends on the
type and size of the development, and **the greater the time period the
greater the risk**.

### Risk

| Town planning risk | Construction risk | Marketing risk |
|---|---|---|
| Zoning | Site problems | Property cycle timing |
| Development consent | Design problems | Leasing-up / sale time |
| Building consent | Industrial relations | Demand and supply lag |
| Ground acquisition risks | Cost overruns | Market projections |
| Use restrictions | Time overruns | |
| | Interest rate rises | |
| | Environmental factors | |

### The gross-up rule

This is the single most examinable idea in the hypothetical development
method, and the deck spells it out because students get it wrong every
year.

> "As this method involves an englobo process it is **not correct** to
> simply multiply the net realisation figure by the profit and risk factor
> to determine the amount to be deducted. What has to be determined is the
> 100% figure. This is calculated by **dividing the net realisation figure
> by (100 + profit and risk factor)%, then multiplying by 100.**"

```
Net realisation                    $2,000,000
Profit and risk factor                    12%

Base (the "100% figure")   = 2,000,000 / 112% × 100%
                           = $1,785,714

Profit and Risk            = 2,000,000 / 112% × 12%
                           = $214,286

NOT $240,000 ($2,000,000 × 12%)
```

> **A 12% margin on cost is not 12% of the sale price, and the gap here is
> $25,714 — 12% of the answer itself.** If the profit and risk factor is
> 12%, the net realisation figure *represents 112%* of the base. The same
> gross-up applies to interest on land and to acquisition costs later in
> the same calculation, so getting it wrong once means getting it wrong
> three times in one question.

### Development costs

For residential development, costs are often quoted per lot; for
commercial, as a rate per square metre. **All development costs should be
verified by the valuer.**

| Major subdivision costs | Other costs |
|---|---|
| Water and sewerage | Staff wages |
| Earthworks, e.g. drainage | Administration expenses |
| Phone and power lines | Open space levy |
| Surveying fees | Parking levy |
| Planning fees | Contingency allowances |
| Council fees | |
| Engineering design and supervision | |

### Finance

- Developers finance with debt capital, because of a lack of money to pay
  the entire land purchase price, or to take advantage of financial
  leverage.
- Debt capital is repaid with interest accrued over the development period
  until the staged project is completed or sold.
- Proceeds from sales after completion of the first stage repay debt or
  fund continued development.
- **The assumption is that the development fund will be outstanding for
  half the development period.**
- **The interest on the land cost is assumed to accrue over the entire
  development period.**
- Land tax is calculated at rates applicable at the date of valuation.
- Acquisition costs of the initial site include stamp duty, legal and
  other fees on purchase.

> **Two different interest periods in the same calculation, and the deck
> is explicit about both.** Development costs are drawn progressively, so
> only **half** the development period is charged. The land is bought on
> day one, so the **whole** period is charged. Using the full period for
> development costs on the case study below would add another $103,842 of
> interest and cut the residual land value by **$89,219**, from $2,381,300
> to $2,292,081.

### The case study, worked end to end

**Facts.** A 7-hectare site at the edge of an existing residential area,
good frontage to a main road, zoned Residential 2a. Council DCPs require a
minimum lot area of 550 m², and the developer must provide all open space
and parks. Although one hectare is 10,000 m², **only 10 blocks per hectare
can be obtained** after roads, footpaths and land contributions for parks
and open space. Development period two years — 20 months of construction
across four stages, then four months to market and sell the final stage.
Interest 6.5% p.a. Comparable vacant land sales $73,000–$80,000; estimated
selling prices average **$85,500 per lot** on completion. No allowance is
made for the developer's GST contribution under the margin scheme.

```
Lot yield = 7 ha × 10 lots/ha = 70 lots
```

Note the effective site efficiency: `70 × 550 = 38,500 m²` of saleable land
out of 70,000 m², so **55%** of the site is consumed by roads, footpaths,
parks and open space. That is the DCP requirement doing the work, not the
minimum lot size.

**Step 1 — Gross and net realisation**

```
Gross Realisation      $85,500 × 70                     $5,985,000

less Selling Costs
    Advertising        $  800 × 70   =  $ 56,000
    Agent Commission   $4,000 × 70   =  $280,000
    Legal Fees         $1,500 × 70   =  $105,000
                                        ─────────
                                                        $  441,000
                                                        ───────────
Net Realisation                                         $5,544,000
```

**Step 2 — Profit and risk at 20%, grossed up**

```
Residual After P&R  = 5,544,000 / 120% × 100%           $4,620,000
Profit & Risk       = 5,544,000 / 120% ×  20%           $  924,000
```

Check: `4,620,000 + 924,000 = 5,544,000` ✓, and
`924,000 / 4,620,000 = 20%` — the profit is 20% **of the base**, not of
the realisation. The naive `5,544,000 × 20% = $1,108,800` would have
overstated the deduction by $184,800.

**Step 3 — Development costs**

```
Water and sewerage & headwork          $  236,500
Earthworks, road and drainage          $  656,700
Power                                  $   83,215
Survey fees                            $   34,650
Planning fees                          $   13,750
Council fees                           $    8,690
Engineering                            $  108,075
Overheads                              $  227,700
Open space contribution                $   83,050
                                       ──────────
Sub-Total                              $1,452,330
Add Contingency Allowance @ 10%        $  145,233
                                       ──────────
Total Development Costs                $1,597,563
```

The nine components sum to exactly $1,452,330 ✓ and the 10% contingency
is exactly $145,233 ✓.

**Interest on development costs, at half the period:**

```
Interest, 6.5% for 12 months on $1,597,563    $  103,842
Rates and Taxes                               $  147,000
                                              ──────────
Interest on Development Costs                 $  250,842
```

`1,597,563 × 6.5% = $103,841.60` ✓.

**Step 3 result:**

```
Residual After P&R                            $4,620,000
less Total Development Costs                  $1,597,563
less Interest on Development Costs            $  250,842
                                              ──────────
Residual After Development Costs              $2,771,595
```

**Step 4 — Interest on the land and acquisition costs, both grossed up**

```
Residual After Development Costs                        $2,771,595

less Interest on land, 6.5% over 24 months              $  318,856
                                                        ──────────
Residual Value (after interest)                         $2,452,739

less Acquisition Costs @ 3%                             $   71,439
                                                        ──────────
Residual Land Value                                     $2,381,300

Value Per Lot          2,381,300 / 70                   $ 34,018.58
```

Both deductions are gross-ups, not multiplications, and this is where the
arithmetic gets interesting:

```
Land interest (SIMPLE interest, 6.5% × 2 years = 13%)
    2,771,595 / 1.13         = $2,452,739
    Interest                 = $  318,856  ✓ matches the deck

Acquisition costs at 3%
    2,452,739 / 1.03         = $2,381,300
    Acquisition cost         = $   71,439  ✓ matches the deck
```

> **The deck uses simple interest on the land, not compound, and it does
> not say so.** `2,771,595 / 1.13 = $2,452,739` reproduces the published
> figure exactly. Compounding at 6.5% for two years —
> `2,771,595 / 1.065² = $2,443,603` — gives $9,136 less land value and
> $327,993 of interest instead of $318,856. Simple interest over a
> two-year development is the softer, more conventional assumption for a
> residual, but state which you used. Over a five-year project the two
> diverge sharply.

**Sanity check against the comparables.** Finished lots sell for
$85,500 but comparable *vacant* land sales run $73,000–$80,000, and the
residual land value is `$34,018.58` per lot. So the raw englobo land is
worth about **40%** of the finished lot price — the other 60% is the cost,
finance, profit and selling expense of turning broad acre into a titled
block. That ratio is the reasonableness test on any residual: if your
residual land value comes out at 80% of the end value, you have missed a
cost line.

### Highest and best use

The closing point of the whole unit. A major factor in the purchase,
development or valuation of commercial property is the current, highest
and best use (most probable use):

```
Physically possible
Legally permissible
Financially feasible
Maximum productivity
```

All four tests, in that order. A use that fails any one of them is not the
highest and best use no matter how profitable it looks on a spreadsheet.

## Summary

- DCF has six elements: net cash flow, escalation, holding period,
  terminal value, discount rate, NPV. It suits multi-tenanted properties
  and development proposals — cases where one year's income is not
  representative.
- Escalate rent and outgoings on separate rates.
- Terminal value = the income of the period *after* the holding period,
  capitalised at a **softer** terminal cap rate. The capitalisation method
  builds the terminal value; the DCF builds everything before it.
- Discount rate = risk-free **plus** a risk premium. It is not the cap
  rate and the two must never be interchanged.
- NPV nets the cost off the discounted inflows. IRR is the rate at which
  NPV is zero; invest if IRR > RRR.
- Hypothetical development: `V = L + D + F + P`, worked backwards.
  Gross realisation → net realisation → less profit and risk → less
  development costs and interest → less land interest and acquisition
  costs → residual land value.
- **Gross up, never multiply.** A 20% profit factor means the net
  realisation is 120% of the base.
- Interest runs for **half** the development period on development costs
  and the **whole** period on the land.
- Highest and best use: physically possible, legally permissible,
  financially feasible, maximum productivity.

<details><summary>Checkpoint — eight questions</summary>

1. A property produces Year 1 net income of $480,000 growing at 3% p.a.
   The holding period is five years and the terminal cap rate is 7.25%.
   What is the terminal value, and which year's income do you capitalise?
2. Why should the terminal cap rate be softer than the current cap rate?
3. A ten-year government bond yields 4.3% and the property risk premium is
   3.2%. What is the discount rate, and what is wrong with saying "the
   discount rate equals the risk-free rate"?
4. An investor pays $1,250,000 for a property with net cash flows of
   $95,000, $99,000, $103,000 and $107,000 over four years, plus a
   terminal value of $1,340,000 in Year 4. At a 9% discount rate, what is
   the NPV?
5. A development has a net realisation of $8,400,000 and a profit and risk
   factor of 18%. How much is deducted for profit and risk?
6. Same development: total development costs $3,100,000, development
   period 30 months, interest 7.2%. What interest is charged on the
   development costs?
7. A residual after development costs is $2,900,000. Land interest runs at
   7% simple for the 30-month period and acquisition costs are 3.5%. What
   is the residual land value?
8. Name the four tests of highest and best use.

---

**Answers**

1. Capitalise the income of the period **immediately after** the holding
   period — Year 6, not Year 5. `Year 6 income = 480,000 × 1.03⁵ =
   $556,451.56` (Year 1 is the base, so Year 6 is five growth steps).
   `Terminal value = 556,437.28 / 0.0725 = $7,675,193.87`.
2. To allow for ageing of the asset, unknown risks over the property's
   life cycle, and new supply of competing property. A five-year-older
   building in a market that has added stock is a riskier proposition, and
   a riskier proposition carries a higher yield.
3. `4.3% + 3.2% = 7.5%`. Saying the discount rate equals the risk-free
   rate omits the premium that compensates for property-specific and
   market risk — it would value an illiquid, heterogeneous, management-
   intensive asset as though it were a government bond, which overstates
   the value substantially.
4. ```
   Year 1   95,000 / 1.09           = $   87,155.96
   Year 2   99,000 / 1.09²          = $   83,326.32
   Year 3  103,000 / 1.09³          = $   79,534.90
   Year 4  1,447,000 / 1.09⁴        = $1,025,091.28
                                      ──────────────
   PV of inflows                      $1,275,108.46
   less Purchase price                $1,250,000.00
                                      ──────────────
   NPV                                $   25,108.46
   ```
   Positive, so the IRR exceeds 9% and the deal clears the hurdle.
5. `8,400,000 / 118% × 18% = $1,281,355.93`. **Not**
   `8,400,000 × 18% = $1,512,000` — the naive figure overstates the
   deduction by $230,644.
6. Half the development period: 15 months = 1.25 years.
   `3,100,000 × 7.2% × 1.25 = $279,000`.
7. Land interest at 7% simple over 2.5 years = 17.5%, grossed up.
   `2,900,000 / 1.175 = $2,468,085.11`; interest `= $431,914.89`.
   Then acquisition at 3.5%: `2,468,085.11 / 1.035 = $2,384,623.29`;
   acquisition cost `= $83,461.82`.
   **Residual land value = $2,384,623.29.**
8. Physically possible; legally permissible; financially feasible; maximum
   productivity.

</details>
