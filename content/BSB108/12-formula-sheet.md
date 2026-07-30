# Formula Sheet and Exam Traps

Everything BSB108 asks you to calculate, plus the mistakes that cost marks.
BSB108 is not a heavily quantitative unit, but the calculations it does use
are exactly the ones markers check.

## Macroeconomic indicators

```
GDP                     market value of all domestic FINAL goods and
                        services
                        excludes intermediate goods
                        excludes second-hand goods

real GDP                nominal GDP adjusted for price change
                        real < nominal when prices are rising
                        only real is comparable over time

GDP per capita        = GDP ÷ population

industry value added  = the industry's contribution to GDP
                        (= revenue − intermediate inputs)

GDP growth (quarterly)  = (GDP_t − GDP_{t−1}) ÷ GDP_{t−1} × 100
GDP growth (year-ended) = (GDP_t − GDP_{t−4}) ÷ GDP_{t−4} × 100
```

```
labour force          = employed + unemployed

unemployment rate     = unemployed ÷ LABOUR FORCE × 100
participation rate    = labour force ÷ working-age population × 100
employment-to-pop     = employed ÷ working-age population × 100
underemployment rate  = employed but wanting more hours
                        ÷ labour force × 100
```

```
inflation rate        = (CPI_t − CPI_{t−1}) ÷ CPI_{t−1} × 100

trimmed mean          expenditure-weighted average of the MIDDLE 70%
                      of CPI component price changes, ranked by
                      price change in the quarter

weighted median       the price change in the middle of that
                      expenditure-weighted ordered distribution
```

## Growth, shares and percentages

```
percentage change     = (new − old) ÷ old × 100
percentage POINT change = new% − old%

CAGR over n years     = (end ÷ start)^(1/n) − 1

  worked: revenue 9,329.0 → 8,520.4 over 5 years
          (8520.4 ÷ 9329.0)^(1/5) − 1 = −0.0180 = −1.80%
```

```
market share          = firm revenue ÷ industry revenue × 100
CR4                   = sum of the four largest firms' market shares

  worked: 16.2 + 16.1 + 10.1 + 9.5 = 51.9%
```

```
profit margin         = profit ÷ REVENUE × 100

  worked: 357.9 ÷ 8,520.4 = 4.2005% → 4.2%
          (357.9 ÷ 8,500  = 4.211%  ✗ wrong base)

average wage          = total wages ÷ employees

  worked: 687,800,000 ÷ 7,517 = $91,499
```

```
net exports / trade balance = exports − imports

  worked: 543.5 − 533.3 = $10.2m surplus

two-way trade         = exports + imports
share of two-way      = flow ÷ (exports + imports) × 100
```

## Descriptive statistics

```
mean            x̄ = Σx ÷ n

median            = middle value when ordered
                    (mean of the two middle values if n is even)

sample SD       s = √[ Σ(x − x̄)² ÷ (n − 1) ]      Excel STDEV.S
population SD   σ = √[ Σ(x − x̄)² ÷ n ]            Excel STDEV.P

range             = maximum − minimum
midrange          = (maximum + minimum) ÷ 2

"95% rule"        ≈ x̄ ± 2s      (assumes normality — CHECK IT)
```

```
box and whisker
  Q1     25% of values below
  median 50% of values below
  Q3     75% of values below
  IQR  = Q3 − Q1

  worked: Q1 = 6.3, median = 9, Q3 = 11.325
          IQR = 11.325 − 6.3 = 5.025

skew test
  mean < median  →  LEFT (negative) skew, long low tail
  mean = median  →  symmetric on those measures
  mean > median  →  RIGHT (positive) skew, long high tail
```

```
Pearson correlation   r ∈ [−1, +1]
shared variation      r² 

  worked: r = 0.54 → r² = 0.2916 → about 29%, not 54%
          r = −0.53 → r² = 0.281 → about 28%
```

## Sensitivity arithmetic for the focus sector

```
cost line as % of revenue × % change in that cost
    = percentage points of revenue absorbed

  worked: purchases 72.3% of revenue, +10% purchase cost
          0.723 × 10 = 7.23 pp of revenue
          margin 4.2 pp − 7.23 pp = −3.0%  (profit to loss)
```

```
implied total from a rounded share — DO NOT USE
  812.8 ÷ 0.095 = 8,556      1,378.7 ÷ 0.162 = 8,510
  1,368.7 ÷ 0.161 = 8,501      862.0 ÷ 0.101 = 8,535
  a $55m spread from 1-decimal shares
```

```
day-weighted monthly average (RBA F1.1)
  = (days at old rate × old + days at new rate × new) ÷ days in month

  worked: (3 × 2.00 + 28 × 1.75) ÷ 31 = 1.774 → 1.77 (May 2016)
```

---

## Exam traps

### Scope traps — these fail whole sections

> **1. Using PEST for internal company analysis.** The A1 task sheet says
> it "will result in a failing grade". BSB108's PEST is a macro scan of the
> **national** business environment.

> **2. Political vs policy.** P in A1 is the **institutions** that make,
> enforce and apply law, plus the sector's peak bodies. Policy is A2.

> **3. Regulatory institutions vs regulation.** Naming the ACCC and FSANZ
> is A1. Analysing the Dairy Code of Conduct is A2.

> **4. Macroeconomic indicators vs macroeconomic policy.** The inflation
> rate is A1. The RBA's response to it is A2. The moment you write "the RBA
> should", you have left A1.

> **5. International content in A1.** Trade, FDI, exchange rates and
> geopolitics are A2 sections 3 and 4. "You will not receive any
> acknowledgement for raising these topics in Assessment 1."

> **6. Recommending.** Neither report may advise the client whether to
> invest. You know nothing about their objectives, and guessing "will
> potentially undermine the validity and objectivity of your analysis".

> **7. Screen-grabbing a figure.** Automatic fail against PC3.1, including
> screenshots from ABS, RBA and OECD data interfaces. Download the data and
> build the chart yourself.

### Number traps

> **8. Percentage vs percentage point.** The most common error in the whole
> unit. Services rose from 72.8% to 80.0% — that is **+7.2 percentage
> points**, not "+10%". The cash rate rose from 0.10% to 4.35% — that is
> **+4.25 percentage points**, not "+4,250%". HILDA's casual employment
> figures (+4.2, +2.5, +1.8, −0.9) are all **percentage points**, and the
> source says so.

> **9. Name the base of every percentage.** "19% of employees are casual"
> implies 12.6 million employees, not 14.7 million employed people —
> owner-managers are not employees. "$8.5bn" is a rounded display figure;
> the base for every derived percentage in the IBISWorld report is
> **$8,520.4m**.

> **10. Sector vs industry.** The focus sector's exports are **$543.5m**.
> Whole-of-dairy exports are around **$3.8bn**. Quoting the second against
> the first overstates the sector roughly sevenfold. Cheese, ice cream and
> drinking milk are outside ANZSIC 1133.

> **11. n vs n − 1.** Use **n − 1** for a sample estimating a population;
> **n** when the data *is* the population. On the unit's 2018 poverty data
> the two give 0.04193 and 0.04060 — identical at two decimals, different
> at three. Report enough decimals for the choice to be visible, and say
> which you used.

> **12. The ±2SD "95%" rule assumes normality.** On **both** of the unit's
> own worked examples the interval extends beyond the observed minimum and
> maximum, so **100%** of observations lie inside, not 95%. Check the bounds
> against the min and max before you write the sentence.

> **13. Real vs nominal.** Only real data is comparable across time. The
> IBISWorld Key Statistics tables are inflation-adjusted to 2025–26 and can
> be compared directly; the "at a glance" dollar figures are the same
> series rounded.

> **14. r is not r².** A correlation of 0.54 shares about **29%** of the
> variation, not 54%. Quote both, and state that direction of causation is
> not established.

> **15. Correlation with the wrong series or the wrong lag.** Cash rate
> against ABS Original month-on-month spending gives **r = −0.02** because
> December averages +7.9% and January −15.1% every year. Use seasonally
> adjusted or year-ended data, and apply a lag — at 12 months, excluding
> COVID, r = **−0.53**.

> **16. Outliers can hide a relationship as well as create one.** The 22
> COVID months dragged that same correlation from −0.53 to −0.32. If you
> exclude a period, name the months and the reason in the figure note.

> **17. Never back-solve a total from a rounded share.** Four majors, four
> different implied totals, a $55m spread.

> **18. "Five-year growth 2020–2025" means FY2019-20 to FY2024-25.** All
> sixteen IBISWorld CAGRs reconcile on that base and none on any other.

> **19. Monthly average is not decision-day.** RBA F1.1 shows 1.77% for May
> 2016, a rate never announced. It is a day-weighted blend.

> **20. The cash rate is not a mortgage rate.** Pass-through depends on bank
> funding costs and margins, and is neither complete nor immediate.

### Concept traps

> **21. Public good vs common good.** Both non-excludable. **Public =
> non-rivalrous** (defence). **Common = rivalrous** (parks, water,
> fisheries). Rivalry is the discriminator and it determines the policy
> response: public provision versus restricted access.

> **22. Offshoring vs outsourcing.** Offshoring is **where**; outsourcing is
> **who**. All four combinations exist.

> **23. Full employment is not zero unemployment.** It is the absence of
> **cyclical** unemployment; frictional and structural remain. NAIRU ≈
> 4.5–5%.

> **24. Falling inflation does not mean falling prices.** Only negative
> inflation — deflation — means prices fall.

> **25. Not all federal spending is fiscal policy.** The test is **intent**:
> was it designed to move national GDP, unemployment or inflation? State
> and local spending is excluded by definition; defence spending to counter
> terrorism is defence policy.

> **26. A corrective tax is not income tax.** The lecture flags this in
> capitals. A corrective tax is a **price** instrument to discourage
> behaviour; income tax is a **revenue** instrument and, used
> counter-cyclically, a fiscal policy tool.

> **27. Automatic stabilisers are not decisions.** A deficit widening in a
> downturn is partly mechanical. Separate **cyclical** from **structural**
> before labelling a budget expansionary or contractionary.

> **28. Natural monopoly is the exception to "more competition".** Forcing
> entry duplicates the network and raises costs. The response is price and
> third-party access regulation.

> **29. Emissions intensity is not absolute emissions.** The Australian
> Dairy Sustainability Framework targets a **30% reduction in emissions
> intensity** by 2030 — emissions per unit of output. That is compatible
> with rising total emissions. Do not drop the word.

> **30. Adoption is not outcome.** "94% of dairy farms have implemented at
> least one emissions-reduction practice" measures engagement, not
> emissions reduced.

> **31. Social licence is not a licence.** Granted by the community, not a
> regulator; ongoing, not once-off; can be lost while fully compliant.

> **32. Rising concentration is not always success.** In this sector CR4
> rose to 51.9% while revenue fell 1.8% a year, because small players
> exited. Say which mechanism you mean.

> **33. The Dairy Code is a transparency instrument, not a price floor.** It
> governs when prices are published and prohibits retrospective step-downs.
> Processors still cut minimum prices in 2024, entirely within the Code.

> **34. Statistical significance ≠ effect size ≠ causation.** Three separate
> questions. The unit's own quiz-engagement claim ("four marks per quiz")
> is a proxy-variable, selection-effect example worth naming.

### Presentation traps

> **35. Caption placement.** Numbered heading with a description **above**
> the figure or table; **"Note. Data from Author (Year)."** underneath. In
> the body, "From Figure 3…", never "the figure below".

> **36. No chart title inside the Excel chart** — the title is the figure
> number and description in Word. Label both axes. Paste as a picture.

> **37. Suffix same-author, same-year sources** a, b, c — e.g. RBA (2025a)
> and RBA (2025b).

> **38. Cite the publication, not the dataset.** APA rule the unit
> restates: cite the report, article or webpage the data was published in.

> **39. Bullet points must not make up the substantive part of the report.**
> Stated in both task sheets.

> **40. The lecture is not a citable source.** Use it to find facts, then
> cite the primary source.

---

## Quick reference — the numbers worth memorising

**The unit**

| | |
|---|---|
| A1, A2 | 50% each, individual, 2,500 words max |
| A1 split | abstract 200 + sector 200 + four elements × 525 |
| A2 split | abstract 200 + four sections × 575 |
| Formatting | 2 cm margins, 11–12 pt body, 1.15 spacing, 14–18 pt bold headings, APA |

**The economy**

| | |
|---|---|
| RBA inflation target | 2–3% on a medium-term average |
| NAIRU | ~5% (ABS); 4.5–5% (Treasury) |
| Peak inflation | 7.8% headline / 6.8% trimmed mean, Dec quarter 2022 |
| Cash rate trough | 0.10%, Dec 2020 – Apr 2022 |
| Cash rate peak | 4.35%, Dec 2023 – Jan 2025 |
| Cash rate Dec 2025 | 3.60% |
| Trade partners | China 26%, US 9.9%, Japan 9.0% of two-way trade |
| FDI threshold | 10% of an enterprise |
| Govt expenditure | Social security and welfare 37.0%, health 15.9%, education 6.9%, defence 6.6% |
| GVC share of world trade | 70–80% |

**The sector (2024–25, real 2025–26 dollars)**

| | |
|---|---|
| Revenue | $8,520.4m |
| Industry value added | $1,261.0m (14.8% of revenue) |
| Profit / margin | $357.9m / 4.2% |
| Businesses / establishments | 134 / 247 |
| Employees / average wage | 7,517 / $91,499 |
| Purchases | 72.3% of revenue (sector norm 57.97%) |
| Wages | 8.1% of revenue (sector norm 13.53%) |
| CR4 | 51.9% — Bega 16.2, Saputo 16.1, Lactalis 10.1, Fonterra 9.5 |
| Largest product | Yoghurt and cultured, $4.1bn, 47.9% |
| Largest market | Supermarkets and grocery, $4.3bn, 50.2% |
| Exports / imports | $543.5m / $533.3m — surplus $10.2m |
| Life cycle | Decline |
| 2029–30 revenue / employment | $8,566.6m / 5,733 |
