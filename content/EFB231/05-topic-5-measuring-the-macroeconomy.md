# Topic 5 — Measuring the Macroeconomy

Lectures 8 and 9 · Tutorials 8 and 9 · textbook Ch. 21, Ch. 22, Ch. 23

Macroeconomics is about "the overall performance of the economy" (L8, slide
8), and it runs on three indicators: **GDP and economic growth**, the
**unemployment rate**, and the **inflation rate**. This topic defines and
measures all three. The models that use them come in Topics 6 and 7.

## GDP

> **Gross domestic product (GDP) is the market value of all the final goods
> and services produced within a country in a given time period.**

Four parts, each doing work (L8, slide 11):

| Part | What it rules in and out |
|---|---|
| **Market value** | Everything is valued at its market price, so different goods can be added up |
| **Final goods and services** | A *final* good is bought by its end user. **Intermediate** goods are excluded, or they would be counted twice |
| **Produced within a country** | Geography, not nationality. Output of a foreign-owned factory in Australia counts; output of an Australian firm's overseas plant does not |
| **In a given time period** | A flow per quarter or year, not a stock |

### The circular flow and the expenditure approach

Four groups buy the final output — households, firms, government, and the rest
of the world — which map onto the four expenditure categories:

```
GDP = C + I + G + (X − M)

C = consumption expenditure — households on consumption goods and services
I = investment — purchases of NEW capital goods (tools, machines, buildings,
    other construction) PLUS additions to inventories
G = government expenditure on goods and services, all levels of government
X = exports; M = imports;  (X − M) = net exports
```

The expenditure approach **excludes** (L8, slide 15):

- **expenditure on used goods** — they were counted when new;
- **transactions in financial assets** such as bonds and shares — buying a
  share transfers ownership, it does not produce anything.

Three approaches exist — expenditure, income and production (value added).
**The income approach (p. 538) is explicitly not covered in EFB231** (L8,
slide 16).

**Tutorials 8 Q3 and Q4 turn on exactly this distinction:**

- **New-home sales** are **investment (I)**. A fall in new-home sales reduces
  I and therefore reduces real GDP.
- **Sales of previously owned homes** are **not** in GDP — the house was
  counted in GDP the year it was built. What *does* count is the **agent's
  commission**, because that is a newly produced service in the current
  period.

> "Painting your own house" is not in GDP; paying a painter is. The L9 review
> question (slide 3) has exactly this as its answer — GDP excludes "a family
> member painting the family home", because household production is not
> traded at a market price. It is a limitation of the measure, not an
> oversight in your arithmetic.

## Nominal versus real GDP

```
Nominal GDP = output of a year valued at THAT year's prices
Real GDP    = output of a year valued at the BASE year's prices
```

Real GDP strips out price changes so that changes in the number reflect
changes in **production**.

**Worked example — Economy X (L8, slides 18–19).** Base year 2018.

| Product | Q 2018 | P 2018 | Q 2019 | P 2019 |
|---|---|---|---|---|
| Sunglasses | 1,000 | \$20 | 1,050 | \$22 |
| Pizzas | 400 | \$10 | 450 | \$12 |
| Haircuts | 125 | \$8 | 150 | \$10 |

```
Nominal GDP 2018 = 1000×$20 + 400×$10 + 125×$8   = $25,000
Nominal GDP 2019 = 1050×$22 + 450×$12 + 150×$10  = $30,000
Nominal growth   = ($30,000 − $25,000) / $25,000 × 100  = 20.0%

Real GDP 2019 (2018 prices)
                 = 1050×$20 + 450×$10 + 150×$8   = $26,700
Real growth      = ($26,700 − $25,000) / $25,000 × 100  =  6.8%
```

Output grew **6.8%**, not 20%. The other 13.2 percentage points were price
increases. Note that real GDP in the **base year equals nominal GDP** in the
base year, by construction.

> **Tutorial 8 Q1's filled-in answer is wrong.** The economy produces fun
> (Q: 40 → 35, P: \$2 → \$3) and food (Q: 60 → 65, P: \$3 → \$2), base year
> 2013.
>
> ```
> Nominal 2013 = 40×$2 + 60×$3 = $260      (= real 2013, it is the base year)
> Nominal 2014 = 35×$3 + 65×$2 = $235
> Real    2014 = 35×$2 + 65×$3 = $265
>
> % increase in PRODUCTION = ($265 − $260) / $260 × 100 = +1.92%
> ```
>
> The sheet says "production did not increase" and computes
> `235/265 × 100 = 88%`. Production **rose 1.92%**. The 88.7 figure the sheet
> stumbled onto is the **GDP deflator** for 2014 (`nominal ÷ real × 100`),
> which says the price level *fell* 11.3% from the base year — a different
> and also interesting fact, but not the answer to the question. Take this to
> your tutor.

## Economic growth

> **Economic growth** is a sustained expansion of production possibilities,
> measured as the increase in real GDP over a period. The **economic growth
> rate** is the annual percentage change in real GDP.

```
                     Real GDP (current year) − Real GDP (previous year)
Growth of real GDP = ─────────────────────────────────────────────────── × 100
                              Real GDP (previous year)
```

L8 slide 27's example: \$8.4 trillion this year, \$8.0 trillion last year →
`(8.4 − 8.0)/8.0 × 100 = 5%`.

**"The Magic of Sustained Growth" (pp. 583–584) is not assessed** (L8, slide
28).

### Limitations of real GDP as a measure of living standards

Four things are **omitted** (L8, slides 21–24):

1. **Household production** — cooking, cleaning, childcare done at home.
2. **Underground economic activity** — cash jobs, illegal trade.
3. **Leisure time** — a country that works itself to exhaustion for the same
   output looks identical in GDP.
4. **Environment quality** — degradation is not subtracted; cleaning it up is
   *added*.

Stiglitz's framing (slide 20): political leaders are told to maximise GDP,
but citizens also want security, and cleaner air, water and noise — "all of
which might lower GDP growth". Kuznets, who built the first US national income
estimates in 1932, warned in **1934** against equating GDP growth with
well-being.

### What makes potential GDP grow?

The **production function** shows the maximum real GDP producible as the
quantity of labour employed changes, all else equal. When the labour market is
in equilibrium the economy is at **full employment**, and real GDP equals
**potential GDP**.

Two growth channels (L8, slides 32–33):

1. **Growth in the supply of labour** — the labour supply curve shifts
   **right**, aggregate hours rise, real GDP rises. But this raises *total*
   GDP, not necessarily GDP *per person*.
2. **Growth in labour productivity** — `labour productivity = real GDP ÷
   aggregate hours`. A productivity rise shifts the production function
   **upward**, which **increases the demand for labour**, so the **real wage
   rate rises** and aggregate hours increase.

**Preconditions for labour productivity growth** (slides 35–38): **physical
capital growth** (capital per worker), **human capital growth** (accumulated
skill and knowledge), and **technological advances**.

> Channel 1 and channel 2 have different welfare implications. More workers
> means more output but not more output *per head* — and running into
> diminishing returns to labour against a fixed capital stock can lower
> output per hour. Only productivity growth raises living standards
> sustainably. The lecture asks this directly as a poll question (slide 32);
> the answer is not a simple yes.

### Three growth theories

| Theory | Core claim | Associated with |
|---|---|---|
| **Classical** | Growth in real GDP per person is **temporary**. When income rises above subsistence, a population explosion drags it back down | Adam Smith, Malthus, Ricardo |
| **Neoclassical** | The population explosion ended (rising opportunity cost of women's time cut the birth rate; better healthcare cut the death rate). **Technological change drives growth, not the reverse**; growth **stops if technological change stops**, because of diminishing returns to both labour and capital | Robert Solow |
| **New growth** | Unlimited wants lead to ever greater productivity and **perpetual** growth. Human capital grows by choice, discoveries result from choices, and discoveries bring profit which competition then destroys — driving the next round | — |

**Policies for faster growth** (slides 45–50): stimulate saving (which
finances investment — e.g. superannuation); stimulate R&D (grants, tax breaks,
the patent system); improve education quality; provide international aid; and
encourage international trade. The lecture is candid that **aid often fails** —
much research finds zero or negative effects on growth because aid is diverted
into consumption — and that trade acts "in some ways [as] a type of
technology", citing China's post-1978 open-door policy.

## Labour market indicators

```
Working-age population = all civilians aged 15 and over
Labour force           = employed + unemployed

                      number unemployed
Unemployment rate  = ──────────────────── × 100
                        labour force

Labour force participation rate =    labour force
                                  ──────────────────────── × 100
                                  working-age population
```

"Not in the labour force" covers full-time students, the retired, and
**discouraged job seekers**.

**The Labour Force Survey criteria** (L9, slide 11) — counted as **employed**
if in the reference week you:

- worked **at least 1 hour** as a paid employee or in a family business or
  farm; **or**
- had a job you were temporarily absent from.

Counted as **unemployed** if you had no employment, were available for work,
and either actively looked for a job in the past four weeks, or were waiting
to start a new job within four weeks.

**Two forms of underutilised labour are *not* in the standard measure** (slide
12):

1. **Marginally attached workers** — available for work but have stopped
   looking after repeated failure (a **discouraged worker**).
2. **Part-time workers who want full-time jobs** — the **underemployed**.

**Worked example (Sample Exam v2, Q1).** Employed 75,000; unemployed 2,000;
not in the labour force 1,500.

```
(a) Labour force            = 75,000 + 2,000            = 77,000
(b) Unemployment rate       = 2,000 / 77,000 × 100      = 2.597% ≈ 2.6%
(c) Working-age population  = 77,000 + 1,500            = 78,500
```

> The denominator of the unemployment rate is the **labour force**, not the
> working-age population. Using 78,500 gives 2.55% — close enough to look
> right and wrong enough to lose the mark. And note the direction of the
> arithmetic in (c): the working-age population is the labour force **plus**
> those not in it.
>
> A second trap: a discouraged worker who resumes searching moves from "not
> in the labour force" to "unemployed". That **raises** both the labour force
> and the number unemployed, and because the numerator rises proportionally
> more than the denominator, **the unemployment rate goes up** — even though
> the economy just got better. This is exactly Tutorial 9 Q3.

### Types of unemployment

| Type | Cause |
|---|---|
| **Frictional** | Normal job search — firms looking for the right worker, workers looking for the right job. Exists in a healthy economy |
| **Structural** | Changes in technology or the pattern of demand make particular skills or locations obsolete. Schumpeter's "creative destruction" |
| **Cyclical** | Fluctuates with the business cycle — **rises in recession, falls in expansion** |

> **Full employment** is when the unemployment rate equals the **natural
> unemployment rate**, which is frictional **plus** structural unemployment,
> with **cyclical unemployment equal to zero**. Full employment does **not**
> mean zero unemployment. Writing "at full employment nobody is unemployed"
> is wrong on the definition.

Influences on the natural rate (L9, slide 17): the **age distribution of the
population** (affects frictional unemployment), the **scale of structural
change**, the **real wage rate** (including the minimum wage), and
**unemployment benefits**.

### The output gap

```
                  real GDP − potential GDP
Output gap   =   ─────────────────────────── × 100
                       potential GDP
```

| Output gap | Real GDP vs potential | Unemployment vs natural rate |
|---|---|---|
| **Negative** | Real GDP < potential | Unemployment **above** the natural rate (cyclical unemployment > 0) |
| **Zero** | Real GDP = potential | Unemployment = natural rate |
| **Positive** | Real GDP > potential | Unemployment **below** the natural rate |

The L10 review question (slide 3) tests exactly this: if unemployment is
*below* the natural rate, **real GDP is greater than potential GDP**.

## The Consumer Price Index

> The **CPI** measures the average of the prices paid by urban consumers for a
> **fixed market basket** of consumer goods and services. The ABS calculates
> it **every quarter**.

Three stages (L9, slide 21): select the CPI basket, conduct the quarterly
price survey, calculate the CPI.

```
        Cost of the CPI basket at CURRENT period prices
CPI  =  ─────────────────────────────────────────────── × 100
         Cost of the CPI basket at BASE period prices
```

**Worked example (L9, slide 25).** Basket costs \$50 in 2010 (base) and \$70
in 2020.

```
CPI 2010 = $50/$50 × 100 = 100
CPI 2020 = $70/$50 × 100 = 140
```

**Worked example (L10 review, slide 4).** Basket costs \$275 now, \$350 in the
base period.

```
CPI = 275/350 × 100 = 78.57  →  answer 78.5
```

A CPI below 100 means prices are **lower** than in the base period.

### Inflation

```
                   CPI (current year) − CPI (previous year)
Inflation rate  = ───────────────────────────────────────── × 100
                            CPI (previous year)
```

L9 slide 26: CPI 120 → 140 gives `(140 − 120)/120 × 100 = 16.7%`.

**Deflation** is a *negative* inflation rate. Australia has rarely experienced
it, but **1997 and 2020** were two such years.

### CPI biases

The CPI is a biased measure of the cost of living for four reasons (slides
29–33):

| Bias | Mechanism |
|---|---|
| **Quality change** | A price rise that reflects a genuinely better product is recorded as pure inflation |
| **Commodity substitution** | The basket is fixed, so it ignores consumers switching away from goods whose prices rose |
| **Outlet substitution** | Consumers shift to cheaper retailers; the saving is not captured |
| **New goods** | New products enter the basket late, after their steepest price falls have happened |

All four push in the **same direction**: they make the CPI **overstate**
inflation.

**Chained CPI, the Personal Consumption Expenditure price index and core
inflation are not assessed** (L9, slide 34).

## Nominal and real values

> L9 slide 35 flags that this section "is not provided in Chapter 22" but
> **can still be assessed**. Do not skip it.

### Converting dollars across dates

```
                            CPI in year B
Price in year B  =  Price in year A × ──────────────
                            CPI in year A
```

**Worked example (L9, slides 36–41).** A stamp cost 4¢ in 1966.
CPI<sub>1966</sub> = 8.6, CPI<sub>2018</sub> = 113.

```
In 2018 dollars: 4¢ × (113 / 8.6)   = 52.56¢
Reversing it:    52.55¢ × (8.6/113) =  4.00¢   ✓
```

The ratio always puts the CPI of the year you are converting **to** on top.

### Real wages

```
Nominal wage = the wage in current dollars
Real wage    = the wage measured in base-year dollars

% change in real wage ≈ % change in nominal wage − inflation rate
```

**Worked example (L9, slide 43).** Nominal wage \$80,000 in 1997 (CPI 100) and
\$110,000 in 2020 (CPI 112.6).

```
% Δ nominal wage = (110,000 − 80,000)/80,000 × 100 = 37.5%
Inflation rate   = (112.6 − 100)/100 × 100         = 12.6%
% Δ real wage    = 37.5% − 12.6%                   = 24.9%
```

**Worked example (Sample Exam v2, Q3).** Nominal \$29,000 (CPI 133) → \$30,000
(CPI 135).

```
Inflation        = (135 − 133)/133 × 100  = 1.504%   (the sheet rounds to 1.5%)
% Δ nominal wage = 1,000/29,000 × 100     = 3.448%
% Δ real wage    = 3.448% − 1.5%          = 1.948%   (the sheet's answer)
                 = 3.448% − 1.504%        = 1.945%   (unrounded)
```

Real wages rose, so purchasing power **increased** and workers are **better
off**.

> The subtraction rule is an **approximation** that only holds for small
> rates. The exact calculation deflates both wages:
>
> ```
> Exact = [(30,000/135) ÷ (29,000/133) − 1] × 100 = 1.916%
> ```
>
> Close enough here (1.95% vs 1.92%). But run the L9 slide-43 example
> exactly and you get **22.11%**, not 24.9% — a 2.8 percentage point gap,
> because 37.5% and 12.6% are not small. **Use the subtraction rule, because
> that is what the unit's solutions use, but know it is an approximation and
> say so if the numbers are large.**

### Real interest rates

```
Real interest rate = Nominal interest rate − Inflation rate
```

**Worked example (Tutorial 9, Q5).** A 3-month term deposit pays 2.5% a year;
inflation is 1.7% a year.

```
Real interest rate = 2.5% − 1.7% = 0.8%

To hold the real rate at 0.8% when inflation rises to 2.5%:
Nominal rate = 0.8% + 2.5% = 3.3%
```

That is the "rate cuts hurt retirees" story in one line: a saver's real return
is what is left after inflation, and it can be **negative** even when the
nominal rate is positive.

## Checkpoint

<details>
<summary>1. An island produces only coconuts. 2018 (base year): P = $1.00, Q = 200. 2019: P = $1.50, Q = 250. What is real GDP in 2019?</summary>

Real GDP uses **base-year prices**:

```
Real GDP 2019 = 250 × $1.00 = $250
```

Not \$375 (that is nominal GDP 2019) and not \$350. This is L9 review
question 1.
</details>

<details>
<summary>2. In an economy, 5.2 million are employed, 0.4 million are unemployed and 2.4 million are not in the labour force. Find the labour force, the unemployment rate and the participation rate.</summary>

```
Labour force            = 5.2 + 0.4 = 5.6 million
Unemployment rate       = 0.4 / 5.6 × 100          = 7.14%
Working-age population  = 5.6 + 2.4 = 8.0 million
Participation rate      = 5.6 / 8.0 × 100          = 70.0%
```
</details>

<details>
<summary>3. Nominal GDP rises 8% while real GDP rises 3%. What happened to prices, roughly?</summary>

Prices rose roughly `8% − 3% = 5%`. More precisely, the GDP deflator is
`nominal ÷ real × 100`, and the ratio of the growth factors is
`1.08/1.03 = 1.0485`, so 4.85%.

The Tutorial 8 Q2 retail-trade item is the same idea in ABS language: retail
sales rose **3.3% in current prices** but only **0.9% in real volume terms**,
so most of the increase was price, not quantity.
</details>

<details>
<summary>4. A worker's nominal wage rises 4% and inflation is 6%. Are they better or worse off?</summary>

```
% Δ real wage ≈ 4% − 6% = −2%
```

**Worse off** — purchasing power fell about 2%. A pay rise that is smaller
than inflation is a real pay cut.
</details>

<details>
<summary>5. Which of the four CPI biases explains why a smartphone that costs the same as last year but is much faster shows up as zero inflation when it should show as a price fall?</summary>

**Quality change bias.** The good got better at the same price — the true
price *per unit of quality* fell, but the CPI records no change. This bias, like
the other three, makes the CPI **overstate** the true rise in the cost of
living.
</details>

## Summary

- **GDP** = market value of all **final** goods and services produced
  **within a country** in a **given period**. `GDP = C + I + G + (X − M)`.
  Excludes used goods and financial transactions. The **income approach is
  not assessed**.
- **Real GDP** uses **base-year prices**; nominal uses current prices. Real
  growth strips out inflation. In the base year they are equal.
- Real GDP omits **household production, the underground economy, leisure and
  environmental quality**, so it is not a living-standards measure.
- Potential GDP grows via **labour supply** and **labour productivity**;
  productivity growth needs **physical capital, human capital and
  technology**. Classical / neoclassical / new growth theories disagree about
  whether it can last.
- `Unemployment rate = unemployed ÷ LABOUR FORCE × 100`.
  `Labour force = employed + unemployed`. Participation rate uses the
  **working-age population** as the denominator.
- **Frictional + structural = the natural rate = full employment.** Cyclical
  unemployment is the part that moves with the business cycle and is zero at
  full employment.
- **Negative output gap** ⇒ unemployment above the natural rate.
- `CPI = (current-price basket ÷ base-price basket) × 100`;
  `inflation = %Δ CPI`. Four biases — quality change, commodity substitution,
  outlet substitution, new goods — all make the CPI **overstate** inflation.
- Convert dollars across dates by multiplying by the ratio of CPIs, target
  year on top.
- `%Δ real wage ≈ %Δ nominal wage − inflation` and
  `real interest = nominal interest − inflation`. Both are approximations that
  degrade as the rates get large.
