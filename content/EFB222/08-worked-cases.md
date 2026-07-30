# Worked Cases — Tutorials and the Portfolio

*Full solutions with every number recomputed from the unit's own datasets. Where
a dataset isn't in Cal's folder, the note says so and gives the method instead of
inventing figures.*

---

## Case 1 — Oatmeal and cholesterol, by hand

**Tutorial Chapter 2, Tutorial A, Exercise 1.** Four observations:

| Oatmeal (g/week) | Cholesterol (HDL) |
|---|---|
| 0 | 130 |
| 150 | 90 |
| 150 | 100 |
| 300 | 100 |

### (a) Quadrant analysis — what sign do you expect?

`X̄ = 150`, `Ȳ = 105`. Plot the means as axes and look at where the points land:

| Point | Relative to X̄ | Relative to Ȳ | Quadrant |
|---|---|---|---|
| (0, 130) | below | above | **upper left** |
| (150, 90) | on the line | below | — |
| (150, 100) | on the line | below | — |
| (300, 100) | above | below | **lower right** |

Both informative points sit in the upper-left and lower-right quadrants —
**quadrants 2 and 4** — so the relationship is **negative**. Expect a negative
coefficient on oatmeal.

### (b) The regression, fully stepped out

| X | Y | X − X̄ | Y − Ȳ | (X−X̄)(Y−Ȳ) | (X−X̄)² |
|---|---|---|---|---|---|
| 0 | 130 | −150 | +25 | **−3,750** | 22,500 |
| 150 | 90 | 0 | −15 | 0 | 0 |
| 150 | 100 | 0 | −5 | 0 | 0 |
| 300 | 100 | +150 | −5 | **−750** | 22,500 |
| | | | | **Σ = −4,500** | **Σ = 45,000** |

```
β̂₁  =  −4,500 / 45,000  =  −0.10
β̂₀  =  105 − (−0.10)(150)  =  105 + 15  =  120

cholesterol‾  =  120 − 0.10 × oatmeal
```

Sanity check: at `X̄ = 150`, `120 − 0.10(150) = 105 = Ȳ` ✓

### (d) Interpreting the coefficient

One extra **gram** of oatmeal per week is associated with **0.10 units lower**
HDL cholesterol, on average.

> **Rescale it before you say it out loud.** "0.10 per gram" is an awkward number.
> **100 grams a week more oatmeal is associated with 10 units lower cholesterol** —
> same estimate, a sentence somebody could act on. Rescaling the units of X
> multiplies the coefficient and *nothing else* changes: R², t-statistics and
> p-values are all identical.

### (e) Predicted values and residuals

| X | Y | Ŷ = 120 − 0.1X | ε̂ = Y − Ŷ | Reading |
|---|---|---|---|---|
| 0 | 130 | 120 | **+10** | model **under**-predicted |
| 150 | 90 | 105 | **−15** | model **over**-predicted |
| 150 | 100 | 105 | **−5** | model over-predicted |
| 300 | 100 | 90 | **+10** | model under-predicted |
| | | | **Σ = 0** ✓ | |

Note the two identical X values (150) with different Y values (90 and 100). The
model can only give them the same prediction, so the difference between them is
pure residual. That is the "randomness in Y" that inflates standard errors.

### (f) TSS, RSS, ExSS, MSE

```
TSS  = 25² + 15² + 5² + 5²   = 625 + 225 + 25 + 25   =  900
RSS  = 10² + 15² + 5² + 10²  = 100 + 225 + 25 + 100  =  450
ExSS = 15² +  0² + 0² + 15²  = 225 +   0 +  0 + 225  =  450

Check:  ExSS + RSS  =  450 + 450  =  900  =  TSS ✓

MSE  = RSS / (n − K − 1)  =  450 / (4 − 1 − 1)  =  450/2  =  225
RMSE = √225  =  15
```

Interpretation: the typical residual is about **15 HDL units** — which, against a
mean of 105, is very large. The model does not fit well.

### (g) R²

```
R²  =  ExSS / TSS  =  450 / 900  =  0.50
```

**50% of the variation in cholesterol is explained by oatmeal consumption.**

> **50% sounds impressive and means almost nothing with n = 4.** Run the
> significance test: `SE(β̂₁) = 0.0707`, so `t = −0.10/0.0707 = −1.414` with
> `df = 4 − 1 − 1 = 2`, giving `p = 0.293`. **The coefficient is nowhere near
> significant.** With four observations you have almost no power, so a high R² and
> an insignificant slope sit together comfortably. This is exactly the "insignificance
> ≠ no effect" situation — reason 3 on the list, inadequate power.

### (e)–(g) in Stata

```stata
regress cholesterol oatmeal
predict yhat, xb
predict e, residual
display e(mss)        // ExSS
display e(rss)        // RSS
display e(mss)+e(rss) // TSS
```

---

## Case 2 — Happiness and human development

**Tutorial Chapter 2, Tutorial A, Exercise 3.** `happy.dta`, 31 countries.
`happ` is a wellbeing index from 1 (low) to 7 (high); `hdi` combines lifespan,
education and adjusted real income on a 0–1 scale.

### (a) The estimated equation

```stata
regress happ hdi
```

```
happ‾  =  3.7667  +  1.6680 × hdi
         (0.6464)   (0.7253)

N = 31   R² = 0.1543   Root MSE = 0.2379   F(1,29) = 5.29   Prob > F = 0.0289
t on hdi = 2.300      p = 0.029      95% CI = (0.185, 3.151)
```

Interpretation: a **0.1 higher HDI** is associated with a **0.167 point higher**
happiness index, on average. Significant at 5% (the CI excludes zero), but not at
1%.

> **Don't interpret this as "a one-unit increase in HDI".** HDI only ranges from 0
> to 1, and in this sample from 0.753 to 0.956 — a span of about 0.2. A "one-unit
> increase" is more than the entire theoretical range of the variable. Quote the
> effect over a change that actually occurs in the data.

### (b) R²

**15.4% of the variation in the happiness index across these 31 countries is
explained by HDI.** Which is to say: development explains a *small minority* of
why some countries are happier than others.

### (c) Australia

```
Australia:  hdi = 0.946,  actual happ = 5.39

Predicted:  3.7667 + 1.6680 × 0.946  =  3.7667 + 1.5779  =  5.3446
Residual:   5.39 − 5.3446  =  +0.0454
```

A **tiny positive residual**. Australia is almost exactly as happy as its
development level predicts — 0.045 of an index point above the line, against a
Root MSE of 0.238. Australia is an unremarkable observation, which is itself the
finding.

### (d) Which countries look really unhappy, and what happens if you drop them?

The four lowest happiness scores, and their residuals:

| Country | happ | hdi | Residual | Std. residual |
|---|---|---|---|---|
| Bulgaria | 4.53 | 0.796 | **−0.564** | **−2.52** |
| Russia | 4.83 | 0.795 | −0.263 | −1.17 |
| Latvia | 4.85 | 0.823 | −0.289 | −1.26 |
| Slovakia | 4.88 | 0.842 | −0.291 | −1.31 |

All four are post-Soviet countries with mid-range HDI and unusually low happiness.
Only Bulgaria clears `|sr| > 2`.

Re-estimating without those four:

```
happ‾  =  5.2367  +  0.0933 × hdi
         (0.5751)   (0.6375)

N = 27   R² = 0.0009   t = 0.15   p = 0.885
```

> **The entire relationship was those four countries.** R² collapses from **0.154
> to 0.0009** and the coefficient falls from 1.67 to 0.09 — statistically
> indistinguishable from zero. Among the remaining 27 countries, HDI tells you
> essentially **nothing** about happiness.
>
> The honest write-up is not "we removed outliers and improved the model". It is:
> **the estimated HDI effect is not robust.** It rests on a handful of observations
> that share a specific historical characteristic. Report both models and say so.

### (e) Anything else that doesn't fit?

Look at the other end — the largest **positive** residuals:

| Country | happ | hdi | Residual | Std. residual |
|---|---|---|---|---|
| Mexico | 5.58 | 0.802 | **+0.476** | 2.11 |
| Philippines | 5.40 | 0.753 | +0.377 | 1.78 |
| Brazil | 5.42 | 0.775 | +0.361 | 1.65 |
| Chile | 5.54 | 0.839 | +0.374 | 1.62 |

Four Latin American / Southeast Asian countries with **low HDI and high
happiness** — the mirror image of the post-Soviet group. Drop the three most
extreme:

```
happ‾  =  1.6383  +  3.9813 × hdi
         (0.6031)   (0.6682)

N = 28   R² = 0.5773   t = 5.96   p = 0.000
```

Now R² jumps to **0.577** and the coefficient more than doubles to **3.98**.

> **Three specifications on the same 31 countries, three completely different
> answers:**
>
> | Sample | HDI coefficient | R² | Significant? |
> |---|---|---|---|
> | All 31 | 1.67 | 0.154 | 5% only |
> | Minus 4 post-Soviet | **0.09** | 0.001 | No |
> | Minus 3 Latin/SE Asian | **3.98** | 0.577 | 1% |
>
> This is a live demonstration of **p-hacking** (Chapter 13). Anyone could pick
> whichever of these three suits their argument, describe the removals as "outlier
> treatment", and report a clean result. The ethical requirement is to **decide the
> sample rule before you look**, then report the sensitivity honestly. And the
> honest reading here is that the "relationship" is really two regional clusters
> and n = 31 is far too small to separate development from culture and history.

---

## Case 3 — Car prices, the unit's Week 1 dataset

`carexample.dta`, 3,393 used cars (prices converted to AUD in the Week 1
tutorial).

### Composition

```stata
tabulate brand
```

| Brand | Count | % |
|---|---|---|
| Volkswagen | 744 | 21.93% |
| Mercedes-Benz | 669 | 19.72% |
| BMW | 493 | 14.53% |
| Toyota | 477 | 14.06% |
| Renault | 416 | 12.26% |
| Audi | 322 | 9.49% |
| Mitsubishi | 272 | 8.02% |
| **Total** | **3,393** | **100%** |

### Price on engine displacement

```stata
regress price displacement
```

```
price‾  =  −12,243  +  17,570 × displacement
           (1,585)     (596)

N = 3,393   R² = 0.2040   Root MSE = 33,856
t on displacement = 29.48   p = 0.000
```

Interpretation: **each extra litre of engine capacity is associated with about
$17,570 more on the price**, on average.

Direction check: you'd expect bigger engines to cost more, and the sign is
positive. ✓ Displacement ranges from 0.6 to 6.0 litres with a mean of 2.47.

> **The intercept of −$12,243 is nonsense as a price, and that's fine.** It is the
> predicted price of a car with a **zero-litre engine**, which doesn't exist. Keep
> it in the model — it makes the slope fit correctly — and don't interpret it.

> **R² = 0.204 with `t = 29.5` is the clearest available demonstration that
> significance and fit are different things.** The coefficient is about as
> significant as coefficients get, and the model still explains only a fifth of the
> variation in used-car prices. Significance is about whether the effect is
> distinguishable from zero; R² is about how much of the story you've told.

### Two Stata bugs from the Week 1 do-file, worth knowing

```stata
* ✗ BROKEN — registration is a string, so drego is created as a string
generate drego = registration
replace drego = 1 if registration == "yes"      // type mismatch
replace drego = 0 if registration == "no"

* ✓ CORRECT — evaluates the condition straight to 1/0
generate drego = (registration == "yes")
```

The saved dataset still has `"yes"`/`"no"` sitting in `drego`, so the recode
silently failed and the variable is unusable in a regression.

```stata
* ✗ WRONG UNITS — mileage is already in thousands of miles
generate kms = mileage/1000        // turns 358 into 0.358

* ✓ CORRECT — thousands of miles → thousands of kilometres
generate kms = mileage * 1.609344  // turns 358 into 576.1
```

> **Always `summarize` a variable straight after you `generate` it.** Both bugs
> are invisible in the regression output — you get numbers, they're just the wrong
> numbers. A unit-conversion error rescales every coefficient that touches the
> variable and changes nothing else, so there is no error message and no diagnostic
> that will catch it.

---

## Case 4 — The portfolio case, end to end

The single most valuable worked example available, because Cal has the dataset
and every figure below has been re-run and confirmed. `performance.dta`, **80
software engineers** at a fictional firm.

**Research question:** does formal training causally improve engineer
performance?
**Objective:** estimating a causal effect → **all seven pitfalls are live.**

| Variable | Role |
|---|---|
| `performance` | Outcome (0–100 project performance score) |
| `training_hours` | **Key-X** (hours of formal learning) |
| `baseline_skill` | Starting skill 0–10 — confounder |
| `budget_availability`, `project_complexity`, `tool_quality`, `manager_support`, `it_maturity` | Controls |
| `skill_growth` | **Mediator** — do not control for it |

### Step 1 — The naïve model

```
performance‾ = 36.94 + 1.4001 training_hours
               (4.07)   (0.4017)

N = 80   R² = 0.1347   Root MSE = 21.55   t = 3.485   p = 0.001
```

### Step 2 — Part 1's specification (deliberately omits baseline skill)

```
performance‾ = 24.26 + 1.4912 training_hours + 3.8725 budget − 1.2788 complexity
               (8.72)   (0.3872)               (1.2168)       (1.2721)

N = 80   R² = 0.2407   Adj R² = 0.2107   Root MSE = 20.45   F(3,76) = 8.03
t on training_hours = 3.851   p = 0.0002   95% CI = (0.720, 2.262)
```

### Step 3 — Add the omitted confounder

```
performance‾ = −2.62 + 1.8853 training_hours + 4.5521 budget
                        (0.4222)               (1.2327)
                      − 0.7477 complexity + 3.2642 baseline_skill
                        (1.2693)             (1.5454)

N = 80   R² = 0.2833   Root MSE = 20.00   t on training_hours = 4.466
```

**The key-X coefficient rises from 1.4912 to 1.8853.** So omitting `baseline_skill`
biased the training effect **downward**.

Verify the direction with the sign rule:

```
baseline_skill → performance         POSITIVE  (partial coefficient +3.26)
baseline_skill → training_hours      NEGATIVE  (r = −0.4472)

mechanism  =  (+) × (−)  =  NEGATIVE
Confounder left out → bias in the SAME direction as the mechanism → DOWNWARD ✓
```

Confirmed by the data: 1.4912 < 1.8853.

> **The raw correlation between `baseline_skill` and `performance` is −0.0492 —
> *negative* — while its partial coefficient is **+3.26**. Use the partial
> coefficient.** The sign rule needs the effect of the omitted factor on Y *holding
> the other controls constant*, not the raw pairwise correlation. Reading the
> correlation matrix here would give you `(−) × (−) = positive` and the **wrong
> direction of bias**. This is a real, live trap in this dataset.

> **Part 1 of Cal's portfolio predicted an *upward* bias, and the data says
> downward.** The Part 1 reasoning assumed higher-skilled engineers would also
> train more (both arrows positive). In fact `r(baseline_skill, training_hours) =
> −0.4472`: the *lower*-skilled engineers train more, presumably because they have
> more to learn. One arrow flips, the product flips, the bias flips. **Always check
> the sign of the correlation before asserting a direction** — the plausible story
> and the data disagreed here.

### Step 4 — The full specification

```
regress performance training_hours baseline_skill budget_availability ///
        project_complexity tool_quality manager_support it_maturity
```

| Variable | Coef. | Std. err. | t | P>\|t\| | [95% Conf. Interval] |
|---|---|---|---|---|---|
| **training_hours** | **1.3058** | **0.3935** | **3.32** | **0.001** | **0.5215 — 2.0902** |
| baseline_skill | 3.0601 | 1.2776 | 2.40 | 0.019 | 0.5133 — 5.6069 |
| budget_availability | −0.2287 | 1.3196 | −0.17 | 0.863 | −2.8592 — 2.4018 |
| project_complexity | −1.7853 | 1.0269 | −1.74 | 0.086 | −3.8323 — 0.2617 |
| tool_quality | 3.1859 | 1.0281 | 3.10 | 0.003 | 1.1363 — 5.2354 |
| manager_support | 3.3993 | 1.0470 | 3.25 | 0.002 | 1.3122 — 5.4864 |
| it_maturity | 3.8080 | 1.2512 | 3.04 | 0.003 | 1.3138 — 6.3021 |
| _cons | −19.3327 | 12.8891 | −1.50 | 0.138 | −45.0266 — 6.3611 |

`N = 80` · `F(7, 72) = 13.91` · `Prob > F = 0.0000` · `R² = 0.5749` ·
`Adj R² = 0.5335` · `Root MSE = 15.72`

**Interpretation:** an extra hour of formal training is associated with a
**1.31-point higher performance score**, holding baseline skill, budget, project
complexity, tool quality, manager support and IT maturity constant. Significant at
the 1% level (`t = 3.32`, `p = 0.001`, and the 95% CI excludes zero).

**Why 1.31 rather than 1.49?** Part of the Part 1 estimate was omitted-variable
bias. Note the two biases run in *opposite* directions: adding `baseline_skill`
alone pushed the coefficient **up** to 1.8853, and adding the four environment
controls pulled it back **down** to 1.3058. The net move from 1.4912 to 1.3058 is
small, which conceals two substantial and offsetting corrections.

### Step 5 — Diagnostics

**Heteroskedasticity.**

```stata
estat hettest
```

Breusch–Pagan / Cook–Weisberg against the fitted values: **χ²(1) ≈ 0.51,
p ≈ 0.47** — do not reject homoskedasticity. (Recomputed in Python; Cal's report
records χ²(1) = 0.54, p = 0.46. Same conclusion either way.)

Re-run with robust standard errors anyway, because the unit's advice is to just
do it:

| | Classical SE | Robust (HC1) SE |
|---|---|---|
| training_hours | 0.3935 | **0.3304** |
| project_complexity | 1.0269 | 0.9192 |
| manager_support | 1.0470 | 0.9929 |

The training SE actually **falls**, and `t` rises from 3.32 to 3.95. Conclusions
unchanged.

> **Robust standard errors are usually a bit larger — but not always, and here
> they're smaller.** The lecture says exactly this: "typically the robust standard
> errors are a little bit bigger than the usual OLS ones, not always, but usually."
> If yours come out smaller, that isn't an error.

**Multicollinearity.** The unit's tool is the correlation matrix plus an
operative-variation argument — **not** VIF, which is not taught here.

| Pair | r |
|---|---|
| budget_availability ↔ tool_quality | **0.693** |
| tool_quality ↔ it_maturity | **0.677** |
| budget_availability ↔ it_maturity | 0.435 |
| baseline_skill ↔ training_hours | **−0.447** |
| training_hours ↔ manager_support | 0.447 |

`budget_availability` is strongly correlated with `tool_quality` and
`it_maturity`, and its own coefficient is thoroughly insignificant (`p = 0.863`).

**Do you drop it?** No. Dropping it risks omitted-variable bias on the controls
that operate through funding, and the collinearity here is **among the controls**,
not between a control and the key-X — which is the only place multicollinearity
matters in this unit. Keep it, and simply **do not interpret its coefficient**.

The collinearity that *does* touch the key-X is worth quantifying:

```
R²ⱼ for training_hours regressed on the other six regressors  =  0.4451
```

45% of the variation in training hours is explained by the other regressors. That
is what raised its standard error from 0.3872 (Part 1) to 0.3935 — see the
precision note for the full arithmetic.

**Outliers.**

```stata
predict sr, rstandard
summarize sr
list sr if abs(sr) > 2
regress ... if abs(sr) <= 2.5
```

| Check | Result |
|---|---|
| Range of standardised residuals | **−2.03 to +2.92** |
| Observations with \|sr\| > 2.5 | **1** |
| Observations with \|sr\| > 2 | **3** |
| training_hours coefficient, dropping \|sr\| > 2.5 (N = 79) | **1.2817** (SE 0.3721) |
| training_hours coefficient, dropping \|sr\| > 2 (N = 77) | **1.2699** (SE 0.3605) |

The estimate moves from 1.3058 to 1.28 and then 1.27 — **stable**. All 80
observations stay in. That stability *is* the finding: report it, don't quietly
drop the outliers and report the cleaner model.

### Step 6 — The mediator demonstration

`skill_growth` is a **product of training** — training raises skills, and better
skills raise performance. It must stay out of a causal model. Add it and watch:

| Model | training_hours coefficient |
|---|---|
| Correct specification | **1.3058** |
| **Plus `skill_growth`** (wrong) | **0.9459** |

```
mechanism:  training → skill_growth (+)  →  performance (+)   =  POSITIVE
Mediator put IN → bias in the OPPOSITE direction → DOWNWARD  ✓
```

The coefficient falls by 28%, exactly as the rule predicts. And `skill_growth` is
itself highly significant (`coef = 7.14`, `t = 3.75`) with `R²` rising from 0.575
to 0.645.

> **The wrong model has the better fit — again.** R² goes from 0.5749 to 0.6452
> when you add the mediator, and the mediator's own coefficient is beautifully
> significant. Every fit statistic says "keep it"; the causal logic says "throw it
> out". This is why the lecturer bans goodness-of-fit as a control-selection
> criterion.

### Step 7 — The seven pitfalls applied

| # | PITFALL | Applies? | Reasoning and direction |
|---|---|---|---|
| 1 | **Reverse causality** | **Yes** | If high performers get nominated for advanced courses, performance → training is **positive** → estimate biased **upward**. Cannot be demonstrated (both measured in the same period). Fix: use training measured *before* the project began. Otherwise acknowledge. |
| 2 | **Omitted factors** | **Yes** | `baseline_skill` was the demonstrable one — mechanism `(+) × (−)` = negative → **downward** bias, confirmed (1.49 → 1.89). Motivation remains unobserved: motivated engineers train more (**+**) and perform better (**+**) → **upward** bias, not fixable. |
| 3 | **Self-selection** | **Yes** | Engineers *enrol* in courses; uptake is "inconsistent". Performance is a **good** outcome → bias is **positive/upward**. Practically impossible to address, because the key-X is a conscious decision. |
| 4 | **Measurement error** | Moderate | `training_hours` is a plausible proxy for "learning", but hours logged ≠ learning absorbed. Random error → attenuation → **towards zero**. |
| 5 | **Mediators as controls** | **Demonstrated** | `skill_growth` and `process_adherence` are products of training. Including `skill_growth` biases **downward** (1.31 → 0.95). Correctly excluded. |
| 6 | **Improper reference group** | Minor | `training_hours` is quantitative, so the reference is "engineers with low training". Anyone with zero formal hours may still be learning informally — a **lower-intensity dose** → bias **towards zero**. |
| 7 | **Over-weighting groups** | Check | No categorical controls in this specification, so no groups are being weighted. Would become live if you added team or department dummies. |

**The conclusion to write:** the point estimate is 1.31, but self-selection and
unobserved motivation both bias it **upward**, while measurement error and any
residual mediator effect bias it **downward**. The upward forces are the stronger
and less fixable ones, so **1.31 is best read as an upper bound on the true causal
effect** — not a clean causal estimate. The recommendation is to obtain
training-hours data recorded before the project starts, and to acknowledge the
self-selection limitation explicitly.

> **That final sentence is the whole assessment.** From the Portfolio Part 3
> brief: "it's not that you just leave me with the point estimate — you're telling
> me which direction it is. **So how do I read this estimate?** That's your
> recommendation."

---

## Tutorial exercises whose datasets aren't in the folder

These appear in the tutorial PDFs but the `.dta` files aren't in Cal's EFB222
folder, so no numbers are given below — only the method. Get the data from Canvas
if you want to work them.

| Dataset | Used in | What it's for |
|---|---|---|
| `democracy` | Ch 2B, 3, 5, 7 | Life expectancy on democracy/education/inequality, region dummies, joint F-tests, weighting, splines, standardised coefficients, best predictor |
| `income` | Ch 2B, 4 | Which of educ / afqt / age explains most variation; college-and-Hispanic dummy interpretation |
| `bwght` | Ch 2B, 4, 5 | Smoking and birth weight; parity; the with-and-without-faminc comparison |
| `hprice` | Ch 2B, 5, 7 | House prices; the bedroom-plus-floor-area question; log vs level model comparison |
| `gpa` | Ch 2A, 4 | PC ownership and college GPA; good vs bad variation in high-school GPA |
| `cars` (804 GM cars) | Ch 2A, 4, 7 | Mileage effects by cylinder count — the source of the Ch 3 interaction example |
| `meap` | Ch 4 | School expenditure per student and maths performance; `read4` as a mediator |
| `lastsem` | Ch 5 | 308 past EFB222 students: quiz marks and midterm predicting the final exam |
| `temperature_gdp` | Ch 5, 6 | Standard errors by country; over-weighting groups |
| `MJ-UR` | Ch 5 | Weighted regression, one- and two-sided tests, confidence intervals |
| `tv-bmi-ecls` | Ch 6 | TV hours and child BMI; layered income controls |
| `lemon_tree` | Ch 7 | The causal vs forecast vs anomaly-detection contrast, all on one dataset |
| `sleep1`, `wage1` | Ch 12–13 | Report structure and ethics |

### The four highest-value ones to work, and why

**`meap` (Ch 4, Ex 4)** — estimate `math4 = f(exppp)` and then
`math4 = f(exppp, read4)`. Reading score is a **product** of the same school
resources, so the second model controls away most of the expenditure effect. It is
the mediator trap in two lines of Stata, on real data.

**`democracy` (Ch 3, Ex 1)** — swap the excluded region from Europe to America and
watch the region coefficients change while the **democracy coefficient stays
put**. That single comparison teaches the reference-group rule permanently.

**`temperature_gdp` (Ch 6, Ex 14)** — estimate the pooled model with country
dummies, then five separate country models, then average the five slopes. The
pooled estimate will **not** equal the average, and the gap is PITFALL #7. Same
structure as the professors-and-class-size example, on data you can run.

**`lemon_tree` (Ch 7, Ex 3)** — the same dataset answers all four objectives, and
`height` goes in or out depending on which one you're doing. Nothing else in the
unit makes the "objective decides the model" point as sharply.

---

## Summary — the case-answer template

Run this on every exam case. It is the shape of six of the seven questions.

```
0.  OBJECTIVE      Causal / forecast / predictors / adjusting?
                   → decides which pitfalls apply at all.

1.  PIECES         Outcome, key-X, controls.
                   What is held constant, and how do you know?

2.  READ           Key-X coefficient in plain English, with
                   "holding … constant" and "on average".
                   Significance: t, p, and whether the CI excludes 0.
                   Note the fit — but don't lean on R² for causal work.

3.  HYPOTHESES     H₀: β = 0   vs   H₁: β ≠ 0  (or one-sided).
                   State your expected sign and why.

4.  CRITIQUE       For each relevant pitfall:
                     what to check → does it apply here →
                     DIRECTION of bias → what that means for the truth.

5.  CONCLUDE       What can you legitimately claim?
                   One concrete recommendation, or an honest limitation.
```
