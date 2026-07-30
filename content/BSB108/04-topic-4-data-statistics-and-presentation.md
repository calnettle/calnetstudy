# TOPIC 4 — Data, Statistics and Presentation

Week 4. The data-literacy spine of BSB108: what kind of data you are
holding, whether you can trust it, how to summarise it honestly, which
chart to draw, and how to label it so a marker can find the source.

Both assessments are graded partly on this. It is also where the unit's own
worked answers contain the most checkable errors — several are corrected
below, with the arithmetic.

## 4.1 Classifying data

Two independent axes. Every dataset sits somewhere on both.

| | **Quantitative** — numerical | **Qualitative** — non-numerical |
|---|---|---|
| **Primary** — collected firsthand for a specific, pre-defined purpose (surveys, experiments, interviews) | A survey asking respondents' age and income | Open-ended interview responses about attitudes |
| **Secondary** — existing data, held in government or international repositories or obtained on request | GDP, unemployment, inflation from the ABS | Published policy documents analysed by theme |

Qualitative data includes physical and social attributes, attitudes, views
and emotions — and also **categorical** data where respondents are placed
into groups (eye colour, marital status).

> **"Qualitative" does not mean "not countable".** You can count how many
> respondents fall into each category and produce a perfectly good bar
> chart. What makes it qualitative is that the underlying variable is a
> *category*, not a *magnitude*. Marital status coded 1, 2, 3 is still
> qualitative — the numbers are labels, and averaging them is meaningless.

### The Drilling Down 3 classification cases

| Case | Data | Classification |
|---|---|---|
| (a) Soft drinks manufacturer researching Nigeria using World Bank, UNDP and National Bureau of Statistics indicators | Interest rates, unemployment, inflation, growth | **Secondary, quantitative** |
| (b) Retail clothing store commissions an agency to interview 500 people from an existing database about expenditure and tastes | Expenditure figures plus tastes and preferences | **Primary** — commissioned for this purpose — and **both quantitative** (expenditure) **and qualitative** (tastes and preferences) |
| (c) Intern reading the ABS *National Health Survey: First Results 2017–18* | Published survey results | **Secondary, quantitative** |
| (d) Textbook publisher surveys students on age, income, and open-ended attitudes to hard copy vs e-texts | Age and income plus open responses | **Primary**, and **both** |

> **Case (b) is the one people get wrong.** The data already existed as a
> customer database — but the *interviews* were commissioned for this
> specific, pre-defined purpose, so what the firm ends up holding is
> primary data. The sampling frame being pre-existing does not change the
> collection. Ask "who collected this, and for what purpose?", not "did
> anything about it exist before?".

BSB108's own focus, stated in Drilling Down 3, is **quantitative data from
secondary sources**, because that is what can be summarised, presented and
discussed to tell a good data story.

## 4.2 Five considerations when using secondary data

### 1. Data reliability

Named go-to sources:

| Australian | International |
|---|---|
| Reserve Bank of Australia | UNDP Human Development Data Center |
| Australian Bureau of Statistics | World Bank Open Data |
| | CIA World Factbook |
| | OECD iLibrary Statistics |

### 2. Data consistency

Check whether definitions or measurement methods have changed over time,
and whether collection is the same across countries.

The unit's worked example (Atkinson and Brandolini, 2001): Deininger and
Squire estimated the Gini coefficient for the US from data collected on
**families** — two or more related individuals — while their figures for
other countries were based on **households**, which can include
single-person households. Different unit of observation, so the
cross-country comparison is not valid.

> **Definitional drift is the failure mode that survives every other
> check.** Both numbers are accurate. Both come from a reputable source.
> Both are current. And the comparison is still wrong, because they are not
> measuring the same thing. When you combine data from two sources, the
> question is never "is each source good?" — it is "are these the same
> variable?".

### 3. Data referencing

APA rule the unit restates: **cite the publication in which the data were
published** — the article, report or webpage — not the dataset itself.

### 4. Avoid making incorrect claims

Check whether data is **real or nominal**. Nominal is in monetary values;
real is adjusted for price-level changes. **Real data is appropriate for
comparisons across time.**

### 5. Use appropriate visualisations and tabulations

| Chart | Use it for |
|---|---|
| **Pie chart** | Data that can be segregated into different categories or groups |
| **Line graph** | Time series data |
| **Bar graph** | Pictorial representation using bars to compare different categories of data |
| **Histogram** | Statistical information displayed as bars showing the **frequency distribution of continuous data** |
| **Scatterplot** | The relationship between two variables |
| **Box and whisker plot** | The spread of data |

> **A histogram is not a bar chart.** A bar chart compares *categories* and
> the bars can be reordered without loss. A histogram shows the
> *distribution* of one continuous variable across bins, the bins have a
> natural order, and there are no gaps between bars. Calling Figure 1
> ("Unemployment Rates by State") a histogram is a straight error — it is a
> bar chart, because state is a category.

### The unit's chart-reading answers

Tutorial 3 walks through six figures. The answers, condensed:

| Figure | Type | Story |
|---|---|---|
| 1. Unemployment rates by state, Jan 2021 | Bar chart | Highest in South Australia, lowest in the ACT |
| 2. Composition of male and female workers by employment type, 2016 | Two side-by-side pie charts | More permanent full-time males than females |
| 3. Annual GDP growth for BRIC economies | Multiple line graphs | China overtook Russia early in the 2000s, except 2014–17 when India was fastest; in 2009 Russia was negative and Brazil near zero |
| 4. GNI per capita vs life expectancy at birth | Scatterplot | Clear positive association, but **non-linear** |
| 5. Mean years of schooling, 189 countries | Box and whisker | Q1 = 6.3, median = 9, Q3 = 11.325, mean = 8.68 |

Reading Figure 5 properly:

```
Q1     = 6.3     → 25% of countries below 6.3 years
median = 9.0     → 50% below 9 years
Q3     = 11.325  → 75% below 11.325 years
IQR    = 11.325 − 6.3 = 5.025 years  (middle 50% span 5.025 years)
mean   = 8.68 < median 9.0  → distribution is LEFT-skewed
```

> **Mean below median means a left tail, and that is the finding.** A small
> number of countries with very low mean years of schooling drag the
> average below the middle value. Report both, and say which way the skew
> runs — reporting the mean alone hides the countries the box plot exists
> to show you. This is the same lesson the unit repeats as "be careful when
> relying on averages".

## 4.3 Descriptive statistics: mean and standard deviation

```
mean        x̄ = Σx ÷ n

sample SD   s = √[ Σ(x − x̄)² ÷ (n − 1) ]      ← Excel STDEV.S

population  σ = √[ Σ(x − x̄)² ÷ n ]            ← Excel STDEV.P

range       = maximum − minimum

"95% rule"  ≈ x̄ ± 2s
```

> **n or n − 1 is a decision, not a detail.** Use **n − 1** when your data
> is a *sample* being used to estimate a wider population. Use **n** when
> your data *is* the whole population you are describing. In BSB108's own
> examples — 31 OECD countries, 16 European countries — the data is the
> complete set being described, so **n** is arguably correct; but the
> convention in Excel and in most reporting is `STDEV.S`, and the unit's
> tables are consistent with either at the precision they report. Say which
> you used. Two students with the same data and different divisors get
> different answers, and only one of them can defend it.

Worked, on the 2018 poverty-rate data below:

```
sample SD (n − 1) = 0.04193
population SD (n) = 0.04060
difference        = 0.00133, about 3.3% of the value
```

At two decimal places both round to 0.04, which is why the unit's table
does not reveal which was used. At three decimals — 0.042 versus 0.041 —
they diverge. **Report enough decimals for your choice to be visible.**

## 4.4 Worked example 1 — OECD real minimum wages, 2019

Drilling Down 3 Table 1, for 31 OECD countries (2019 constant PPP US$):

| Statistic | Value |
|---|---|
| Mean | 15,383.56 |
| Standard deviation | 6,694.12 |
| Range | 23,742.11 |
| Minimum | 2,510.34 |
| Maximum | 26,252.45 |
| Count | 31 (no data for Japan in 2019) |

**Check the internal consistency first:**

```
maximum − minimum = 26,252.45 − 2,510.34
                  = 23,742.11   ✓ matches the stated range exactly
2 × SD            = 2 × 6,694.12
                  = 13,388.24   ✓ matches the pack's "$13 388"
```

Both reconcile. The table is arithmetically sound.

The pack's model narrative reads:

> "the average real minimum wages in 2019 for 31 OECD countries was
> $15383.56. The standard deviation … was $6694.124. This means that 95% of
> all real minimum wages fell roughly within the range of $15383 plus or
> minus $13 388."

**Now test the interval against the data:**

```
lower bound = 15,383.56 − 13,388.24 = 1,995.32
upper bound = 15,383.56 + 13,388.24 = 28,771.80

but the stated MINIMUM is                2,510.34
and the stated MAXIMUM is               26,252.45
```

> **The ±2SD interval is impossible on this data, and the table proves it.**
> Its lower bound of $1,995 lies **below** the observed minimum of $2,510,
> and its upper bound of $28,772 lies **above** the observed maximum of
> $26,252. Since every value must lie between the minimum and the maximum,
> **100% of the 31 observations fall inside the interval — not 95%.** The
> ±2SD rule assumes a normal distribution; with n = 31 bounded values it
> does not hold. The pack's own "HELP!" box concedes the shortcut ("we took
> the standard deviation … and multiplied it 2. That is generally how we
> work out the range within which 95% of our data sits"). Use it as a rough
> spread indicator if the unit asks for it, but do not claim exactly 95%,
> and check the bounds against the min and max before you write the
> sentence. Confirm with your tutor how they want this phrased.

One more free check: the **midrange** is

```
(2,510.34 + 26,252.45) ÷ 2 = 14,381.40
```

against a mean of 15,383.56. Mean above midrange indicates the data is
bunched toward the upper end with a longer left tail — consistent with a
few low-wage countries pulling away from a cluster of high-wage ones.

## 4.5 Worked example 2 — European poverty rates, 2010 and 2018

Drilling Down 3 Table 2, poverty rate = the share of people whose income
falls below the poverty line, taken as **half the median household income
of the total population**.

| Country | 2010 | 2018 | Change |
|---|---|---|---|
| Austria | 0.089 | 0.094 | +0.005 |
| Czech Republic | 0.065 | 0.061 | −0.004 |
| Finland | 0.072 | 0.065 | −0.007 |
| Greece | 0.141 | 0.121 | −0.020 |
| Hungary | 0.073 | 0.179 | **+0.106** |
| Norway | 0.075 | 0.084 | +0.009 |
| Poland | 0.107 | 0.098 | −0.009 |
| Portugal | 0.109 | 0.104 | −0.005 |
| Slovakia | 0.080 | 0.077 | −0.003 |
| Spain | 0.139 | 0.142 | +0.003 |
| UK | 0.110 | 0.117 | +0.007 |
| Slovenia | 0.091 | 0.075 | −0.016 |
| Latvia | 0.133 | 0.175 | +0.042 |
| Lithuania | 0.127 | 0.155 | +0.028 |
| Bulgaria | 0.150 | 0.167 | +0.017 |
| Romania | 0.167 | 0.174 | +0.007 |

### Recomputed summary statistics

| Statistic | 2010 computed | Table 3 | 2018 computed | Table 3 |
|---|---|---|---|---|
| Mean | 0.10800 | 0.11 ✓ | 0.11800 | 0.12 ✓ |
| Median | 0.10800 | 0.11 ✓ | 0.11050 | 0.11 ✓ |
| SD (sample, n−1) | 0.03181 | 0.03 ✓ | 0.04193 | 0.04 ✓ |
| SD (population, n) | 0.03080 | 0.03 ✓ | 0.04060 | 0.04 ✓ |
| Range | 0.10200 | 0.10 ✓ | 0.11800 | 0.12 ✓ |
| Minimum | 0.065 | 0.07 ✓ | 0.061 | 0.06 ✓ |
| Maximum | 0.167 | 0.17 ✓ | 0.179 | 0.18 ✓ |
| Count | 16 | 16 ✓ | 16 | 16 ✓ |

**Table 3 reconciles at every cell.** That matters for what follows: because
the summary table is verified correct, any disagreement between it and the
narrative is a narrative error, not a data error.

> **Rounding to two decimals destroys the most interesting finding.** In
> 2010 the mean and median are *identical* at 0.10800 — a perfectly
> symmetric distribution on those two measures. In 2018 the mean (0.11800)
> is above the median (0.11050), so the distribution has become
> **right-skewed**: a few countries pulled away at the top. Table 3 reports
> both years as "mean 0.11 / median 0.11" and "mean 0.12 / median 0.11",
> which shows a hint of it. A three-decimal table shows it clearly. The
> skew is the whole story of what changed between 2010 and 2018.

### Checking the unit's model narrative for 2018

The tutorial's answer reads:

> "In 2018, whilst the average poverty rate was similar to 2010 (0.12
> compared with 0.11 respectively), the distribution of poverty rates
> across the 16 countries had widened. More specifically, In 2018, 95% of
> all poverty rates fell roughly within the range of 0.12 plus or minus
> 0.08. The country with the highest poverty rate in 2018 was Hungary. The
> lowest poverty rate was seen in the Czech Republic, however this was
> closely followed by Finland."

Checking each claim:

```
"0.12 plus or minus 0.08"      2 × 0.04 = 0.08                       ✓
"distribution had widened"     SD 0.032 → 0.042; range 0.102 → 0.118 ✓
"highest was Hungary"          0.179, the maximum                    ✓
"lowest was Czech Republic"    0.061, the minimum                    ✓
"closely followed by Finland"  0.065, second lowest                  ✓
```

All five stand up. But the interval has the same flaw as the OECD example:

```
0.12 − 0.08 = 0.04   vs actual minimum 0.061
0.12 + 0.08 = 0.20   vs actual maximum 0.179
```

Again **100% of observations** fall inside, not 95%.

### An error in the Task 4 model answer

Tutorial 3's suggested observation for the bar chart reads:

> "Latvia had the second highest poverty rate in 2018, followed by
> Lithuania. However, some countries also showed a decrease in poverty
> rates since 2010 (e.g. Greece, Poland, Portugal, Slovakia and Slovenia)."

Two things are wrong with that.

**First, the 2018 ranking.** Sorted from the table:

```
1. Hungary    0.179
2. Latvia     0.175   ✓ second highest, as stated
3. Romania    0.174   ← not Lithuania
4. Bulgaria   0.167
5. Lithuania  0.155   ← actually fifth
```

Latvia is correctly identified as second. But it is **followed by Romania
(0.174), then Bulgaria (0.167)** — Lithuania is fifth, 0.019 below Romania.
Romania was also the *highest* poverty rate in 2010 (0.167), which makes
omitting it from the top of the 2018 list harder to defend, not easier.

**Second, the list of decreases is incomplete.** Counting from the table,
**seven** countries fell, not five:

```
Greece          0.141 → 0.121   −0.020
Slovenia        0.091 → 0.075   −0.016
Poland          0.107 → 0.098   −0.009
Finland         0.072 → 0.065   −0.007   ← omitted
Portugal        0.109 → 0.104   −0.005
Czech Republic  0.065 → 0.061   −0.004   ← omitted
Slovakia        0.080 → 0.077   −0.003
```

Nine rose, seven fell. The two omissions are the Czech Republic and
Finland — which the *same tutorial slide* names, two bullets earlier, as
the two **lowest** rates in 2018. The model answer contradicts itself
across a single slide.

> **The reconciling parts prove where the error is.** Table 3 matches the
> raw data at every cell, and the "highest / lowest / closely followed by"
> claims all check out. That pins the inputs down completely — so the
> ranking error and the missing two countries are errors in the *narrative*,
> not evidence of a different dataset. Flag this to your tutor rather than
> reproducing it: the corrected sentence is "Latvia had the second-highest
> rate in 2018, followed by Romania and Bulgaria," and the decrease list
> should include the Czech Republic and Finland.

One claim in the pack that does hold up exactly:

```
Hungary: 0.179 ÷ 0.073 = 2.452  → "more than double its 2010 rate"  ✓
```

## 4.6 Worked example 3 — correlation, using real Australian data

The A2 data folder holds three real series: the RBA's F1.1 monthly cash
rate target, the RBA's G1 CPI series, and the ABS Monthly Household
Spending Indicator (Table 1). Merging the cash rate with household spending
is a natural A2 exercise. Here is what the data actually says.

**First, reconcile the ABS table.** For every one of the 161 months from
July 2012 to November 2025:

```
Goods + Services            = Total   (max discrepancy $0.1m, rounding)
Discretionary + Non-discret = Total   (max discrepancy $0.1m, rounding)

November 2025:  46,144.7 + 38,023.2 = 84,167.9 ✓
                55,726.1 + 28,441.8 = 84,167.9 ✓
```

The table is internally consistent, so both breakdowns can be used.

**Now the correlation.** Pearson's r between the monthly average cash rate
target and year-ended growth in household spending, 121 months from
November 2015 to November 2025:

| Lag applied to cash rate | Total | Discretionary | Non-discretionary |
|---|---|---|---|
| 0 months | **+0.111** | +0.069 | +0.237 |
| 3 months | −0.058 | −0.102 | +0.091 |
| 6 months | −0.170 | −0.212 | −0.010 |
| 9 months | −0.254 | −0.292 | −0.096 |
| 12 months | **−0.321** | **−0.351** | −0.182 |

Three findings, and every one of them is a marks-earning observation:

1. **At zero lag the correlation has the wrong sign.** Higher cash rates
   appear to go with *higher* spending growth. A student who computed only
   the contemporaneous correlation would conclude that raising interest
   rates stimulates consumption.
2. **The sign corrects and the relationship strengthens as the lag
   lengthens.** This is the monetary policy transmission lag made visible:
   a rate change takes months to reach household spending through mortgage
   repayments, saving decisions and confidence.
3. **Discretionary spending is roughly twice as interest-sensitive as
   non-discretionary.** At a 12-month lag, −0.351 against −0.182. That is
   exactly the cyclical/counter-cyclical split from Topic 3, measured.

**And now the outliers.** Excluding the COVID window (March 2020 to
December 2021):

| Lag | Total | Discretionary | Non-discretionary | n |
|---|---|---|---|---|
| 0 months | −0.064 | −0.106 | +0.106 | 99 |
| 6 months | −0.430 | −0.463 | −0.253 | 99 |
| **12 months** | **−0.531** | **−0.546** | **−0.405** | 99 |

> **Outliers can *hide* a relationship, not just invent one.** The standard
> warning is that a few extreme points can manufacture a correlation. Here
> the opposite happened: 22 pandemic months of lockdowns and stimulus —
> spending swinging between −23.4% and +32.8% year-ended, entirely
> unrelated to the cash rate — dragged the 12-month correlation from −0.53
> down to −0.32. Removing them nearly doubles the measured relationship.
> If you exclude a period, **say which months and why**, in the note under
> the figure. Silently dropping data is not analysis.

**Seasonality, and why you must not use the raw monthly series.** Mean
month-on-month percentage change in the Original (not seasonally adjusted)
total spending series, November 2015 to November 2025:

```
Jan  −15.13     Apr   −6.36     Jul   +0.52     Oct   +4.67
Feb   −4.54     May   +7.14     Aug   +0.73     Nov   +3.84
Mar   +9.49     Jun   +0.68     Sep   −0.92     Dec   +7.92
```

> **The calendar explains more of the raw monthly series than the economy
> does.** December is +7.9% and January is −15.1% every year, regardless of
> interest rates. Correlating the cash rate against Original month-on-month
> changes returns r = −0.02 — indistinguishable from noise — because the
> seasonal swing swamps everything else. Use either the **seasonally
> adjusted** series or the **year-ended** change, which compares like month
> with like month. This is a real trap: the merged workbook in the A2 data
> folder holds the Original month-on-month column, and it is the wrong
> column for this question.

**Finally, the standard deviations** of year-ended growth over the same
121 months:

| Series | Mean | SD (n−1) | SD (n) | Min | Max |
|---|---|---|---|---|---|
| Total | +4.92% | 7.64 | 7.61 | −23.4% | +32.8% |
| Discretionary | +5.05% | 9.61 | 9.57 | −26.8% | +40.5% |
| Non-discretionary | +4.81% | 4.86 | 4.84 | −17.4% | +22.5% |

The means are almost identical — 5.05% against 4.81% — but the standard
deviations differ by a factor of two. **Two series with the same average
and very different risk.** That is the unit's "be careful when relying on
averages" lesson with numbers attached.

## 4.7 Correlation is not causation, and r is not r²

The unit hands you a second live example. Lecture 7 reports that the OECD
ran a simple correlation between fixed broadband subscriptions per 100
inhabitants and GDP, and got **r = 0.54**, described as "moderately
correlated".

```
r  = 0.54
r² = 0.54² = 0.2916  → about 29% of the variation is shared
```

> **A correlation of 0.54 leaves 71% of the variation unexplained.** People
> read 0.54 as "just over half the story". It is not: the share of
> variation accounted for is r², about 29%. And the direction is
> undetermined — richer countries can afford more broadband just as easily
> as broadband makes countries richer, and a third variable (national
> income, urban density, prior infrastructure investment) plausibly drives
> both. State the r, state the r², and state that the direction is not
> established.

## 4.8 Presenting figures and tables — the APA rules the unit enforces

From Drilling Down 3 Task 4 and the Week 4 support exercises:

- Every table or figure has a heading beginning **"Table 1"** or **"Figure
  1"**, followed by a description of what is presented.
- Every reference in the body text takes the form **"The data in Table 1…"**
  or **"From Figure 2…"**.
- All data is cited **in the caption underneath**, after the designation
  **"Note."**, identifying the author (UNDP, IMF, World Bank, ABS, RBA) and
  the year the data was published.
- The unit accepts the short form **"Note. Data from Author (Year)."** —
  noting that later in the degree you will be expected to use the full APA
  citation.
- **Do not include a chart title inside the Excel chart.** The title goes in
  the Word document as the figure number plus title.
- **Paste the chart into Word as a picture** so it can be resized.
- **Label your axes.**
- Multiple works by the same author in the same year get suffixed **a**,
  **b**, **c** in alphabetical order — the exercises show
  `Reserve Bank of Australia (2025a)` and `(2025b)`.

A correctly formatted figure:

```
Figure 3. Australian unemployment rate (seasonally adjusted)
January 2020 – June 2025

[chart, no internal title, both axes labelled]

Note. Data drawn from table, "Unemployment rate", ABS (2025).
```

> **"Note. Data drawn from…" signals transformation; reproducing a figure
> does not.** The short form is acceptable *because you transformed the
> data* — you downloaded a series and built your own chart. Reproducing
> someone else's figure, table or image needs the full reproduction
> citation from QUT Cite|Write — and in these assessments it is the
> automatic fail against PC3.1 anyway. Build your own.

### The data extraction workflow

The Week 4 exercises give the click path for each indicator. Condensed:

| Indicator | Source | Series to take | Chart type |
|---|---|---|---|
| **GDP** | ABS home page → "Gross domestic product" → first chart → Download → XLSX | Quarterly growth (%) and Through the year (%) | Custom combo — quarterly as clustered column, through-the-year as line |
| **Unemployment** | ABS home page → "Unemployment rate" → first chart → Download → XLSX | Month-Year and Seasonally adjusted (%) | 2-D line |
| **Inflation** | RBA home page → Inflation → "See more CPI data" → table "Year ended percentage change" | Date and CPI All groups, non-seasonally adjusted — **copied manually** | Line |

The exercises also note the presentation details: filter to the period you
want using the chart filter rather than deleting rows; delete the chart
title; and move the x-axis labels outside the plot by setting Format Axis →
Labels → Label position → **Low**, so a series that goes negative does not
overprint its own axis labels.

> **"The percentage change in CPI is the inflation rate."** The RBA table
> gives you the index and the year-ended percentage change side by side.
> Plot the percentage change, not the index — the index is a level, and its
> slope is the thing you actually want to talk about.

## Checkpoint

<details><summary>Questions</summary>

1. A marketing agency is commissioned to interview 500 people from a
   client's existing customer database about their spending and their
   tastes. Classify the resulting data on both axes.
2. Table 1 reports mean $15,383.56, SD $6,694.12, minimum $2,510.34 and
   maximum $26,252.45 for 31 countries. What proportion of observations
   actually lie within two standard deviations of the mean, and how do you
   know without seeing the raw data?
3. Two spending series have means of 5.05% and 4.81%. Their standard
   deviations are 9.61 and 4.86. Which is riskier and by how much?
4. Why does correlating the cash rate against the ABS Original
   month-on-month spending series return r ≈ −0.02?
5. The OECD reports a correlation of 0.54 between broadband subscriptions
   and GDP. Write one sentence you could defensibly put in a report.
6. In 2010 the poverty-rate mean and median were both 0.108; in 2018 they
   were 0.118 and 0.1105. What changed?

</details>

<details><summary>Answers</summary>

1. **Primary**, because the interviews were commissioned for this specific
   pre-defined purpose — the pre-existing database is only the sampling
   frame. And **both quantitative** (expenditure figures) **and
   qualitative** (tastes and preferences).

2. **100%, not 95%.** Every observation must lie between the minimum and
   the maximum. The ±2SD interval runs from

   ```
   15,383.56 − 13,388.24 = 1,995.32   (below the minimum, 2,510.34)
   15,383.56 + 13,388.24 = 28,771.80  (above the maximum, 26,252.45)
   ```

   so the interval strictly contains the full range of the data. You know
   this from the summary table alone. The ±2SD rule assumes normality,
   which 31 bounded observations do not deliver.

3. **Discretionary is riskier**, with a standard deviation roughly **twice**
   that of non-discretionary (9.61 vs 4.86, a ratio of 1.98) on almost
   identical means. Same expected outcome, double the dispersion — the
   textbook case for why a mean alone is not a description of a dataset.

4. Because the **Original series is not seasonally adjusted**, and the
   calendar dominates it. December averages +7.9% month-on-month and
   January averages −15.1%, every year, regardless of the cash rate. The
   seasonal swing swamps the policy signal. Use the seasonally adjusted
   series, or the year-ended change which compares like month with like.

5. Something like: *"The OECD reports a moderate positive correlation
   (r = 0.54) between fixed broadband subscriptions per 100 inhabitants
   and GDP, implying roughly 29% of the variation is shared (r² = 0.29).
   The direction of causation is not established and both variables may be
   driven by national income."* The three things that must be present are
   the r, the r², and the causation caveat.

6. The distribution went from **symmetric to right-skewed**. In 2010 mean
   and median were identical; by 2018 the mean sat above the median because
   a few countries — chiefly Hungary, which more than doubled from 0.073 to
   0.179 — pulled away at the top. The spread also widened: SD 0.032 →
   0.042, range 0.102 → 0.118.

</details>

## Summary

- Classify on **two axes**: primary/secondary and quantitative/qualitative.
  Ask *who collected it and for what purpose*.
- Five checks on secondary data: **reliability, consistency, referencing,
  real-vs-nominal, appropriate visualisation**.
- **Definitional drift** (families vs households) defeats every other
  check. When combining sources, ask whether they measure the same thing.
- **n − 1 for a sample, n for a population** — and report enough decimals
  for the choice to be visible.
- The **±2SD "95%" rule assumes normality**. On both of the unit's own
  examples the interval extends past the observed minimum and maximum, so
  100% of observations fall inside it.
- **Mean vs median** tells you the skew. Mean below median = left tail;
  mean above median = right tail.
- **Correlation ≠ causation, and r ≠ r².** At r = 0.54, only 29% of
  variation is shared.
- **Lags matter.** Cash rate against household spending is +0.11 at zero
  lag and −0.53 at a 12-month lag excluding COVID. Reporting only the
  contemporaneous figure gets the sign wrong.
- **Never plot a raw Original monthly series** against a policy variable.
  Seasonally adjust, or use year-ended change.
- Figures and tables: numbered heading above, **"Note. Data from Author
  (Year)."** below, axes labelled, no internal chart title, pasted as a
  picture, built by you.