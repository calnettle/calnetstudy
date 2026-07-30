# Topic 2 — Essential Tools for Regression Analysis

*Chapter 3. Dummies, interactions, logarithms, quadratics, splines, weights and
standardised coefficients — the toolkit for making a linear model handle
non-linear reality.*

---

## 2.1 Dummy variables

A **dummy** (also: dichotomous, indicator, binary) takes only the values **1 and
0**. Use one whenever a factor is qualitative: gender, ethnicity, occupation,
public vs private school, mode of transport, treated vs untreated.

### The reference category rule

> **One category must be left out.** If a model has an intercept and you include
> a dummy for *every* category, the dummies sum to 1 for every observation, which
> is exactly what the intercept already is — the model cannot be estimated. The
> excluded category is the **reference group**, and every dummy coefficient is a
> comparison **against it**.
>
> The one exception in the slides: you may include all categories **if you drop
> the intercept**. That is rare, and only works "if the dummy variable is not a
> Key-X".

### Worked example — income and ethnicity

```
income‾ = −32,984 + 5,704 educ + 304 afqt − 7,815 Black − 1,642 Hispanic
```

`Black = 1` if the person is Black/African American; `Hispanic = 1` if Hispanic.
The reference group is therefore **people who are neither Black nor Hispanic**.

- Blacks earn on average **$7,815 less than non-Hispanic people of other races**,
  after adjusting for education and AFQT score.
- Hispanics earn on average **$1,642 less than non-Hispanic people of races other
  than Black.**

> **This is not "Blacks vs non-Blacks".** The comparison is against the *excluded*
> group, and the excluded group here is "neither Black nor Hispanic" — which is
> not the same as "not Black". Writing "compared to non-Blacks" is a wrong answer,
> and it is precisely the confusion PITFALL #6 (improper reference group) is
> about.

### Worked example — the four degree models

Sample selected so everyone falls into exactly one of: High School, College,
Graduate. The true group means are **$40,000 / $70,000 / $90,000**.

| Model | Specification | Reference group |
|---|---|---|
| 1 | `income‾ = 50,000 + 40,000 × graduate` | HS **and** college pooled |
| 2 | `income‾ = 40,000 + 30,000 × college + 50,000 × graduate` | High School |
| 3 | `income‾ = 40,000 × HS + 70,000 × college + 90,000 × graduate` | None — no intercept |
| 4 | `income‾ = 40,000 + 30,000 × college + 20,000 × graduate` | "HS only", with **nested** dummies |

Reconstruct the group means from each and you get the same three numbers:

```
Model 2:  HS      = 40,000
          College = 40,000 + 30,000 = 70,000
          Graduate= 40,000 + 50,000 = 90,000

Model 3:  read straight off:  40,000 / 70,000 / 90,000

Model 4 (dummies are "has this degree", so they stack):
          HS only   = 40,000
          College   = 40,000 + 30,000          = 70,000
          Graduate  = 40,000 + 30,000 + 20,000 = 90,000
```

Model 1's intercept of $50,000 is the pooled mean of the HS and college groups.
That pins the composition: `40,000w + 70,000(1−w) = 50,000` → **w = 2/3**, so
two-thirds of the non-graduates are HS-only.

> **Highest degree vs has-a-degree changes every coefficient.** In Model 2 the
> graduate coefficient is **$50,000** (graduate vs HS). In Model 4 it is
> **$20,000** (the *extra* on top of college, because a graduate also has the
> college dummy switched on). Same data, same group means, coefficients that
> differ by $30,000. Before you interpret a single dummy, work out how it was
> constructed.

> **Model 3 (no intercept, all categories included) is legal but disliked.** The
> lecturer: "it's a really sort of a bit wonky way of using dummies, and I don't
> personally like this last one, and neither does the author of the book." It has
> one genuine use — gauging relative performance across groups, where reading the
> group means straight off the dummy coefficients is convenient (see the
> *Other Objectives* note). Elsewhere, use an intercept and a reference group.
>
> And on the nested "has a degree" coding of Model 4, her verdict was "**danger,
> danger** — just be careful." It is not wrong, but the coefficients mean
> increments rather than totals and it is very easy to misread.

**In Stata**, string categories must be converted:

```stata
generate Dpetrol = (enginetype=="Petrol")     // 1/0 in one line

regress price mileage i.cylinder    // factor notation: Stata builds the
                                    // dummies for you, lowest value = reference
```

---

## 2.2 Interaction effects (moderation)

When the effect of a factor **differs across categories**, the category is a
**moderating factor** for that effect.

Two ways to model it:

```
(a) Two separate models
    Group A:  Y = β₀ᴬ + β₁ᴬX + β₂ᴬ·KeyX + ε
    Group B:  Y = β₀ᴮ + β₁ᴮX + β₂ᴮ·KeyX + ε
    → compare β₂ᴬ with β₂ᴮ.  Downside: smaller sample in each.

(b) One model with an interaction
    Y = β₀ + β₁X + β₂·KeyX + β₂ᴰ·(KeyX × D) + ε      D = 1 for group B

    effect in group A = β₂
    effect in group B = β₂ + β₂ᴰ
    the difference    = β₂ᴰ   ← test this coefficient directly
```

Route (b) uses the **larger sample** and gives you a single significance test on
the difference. That's why it's preferred.

**The method the lecturer recommends for reading any interaction model:** set the
dummy to 0 in your head and write down what's left; then set it to 1 and write
down what's left. Whatever is left when `D = 0` is the reference group's model.

```
D = 0  (group A):   Y = β₀        + β₁X + β₂·KeyX
D = 1  (group B):   Y = (β₀+β₃)   + β₁X + (β₂+β₂ᴰ)·KeyX
```

And `β₂ᴰ` is a **difference**, never a level: it is the *bump up* in the key-X
effect in group B **relative to** group A. The question "does the effect differ
across groups?" is exactly the question "is `β₂ᴰ` zero?" — so read its t-stat.

### Worked example — divorce and school performance

```
Base model:      ΔS = β₀ + β₁X + β₂D + ε
With moderation: ΔS = β₀ + β₁X + β₂D + β₃H + β₄(D × H) + ε
```

`D` = parents divorced, `H` = high-conflict family, `ΔS` = change in test scores.

- `β₂` is the divorce effect in **low**-conflict families. Expect `β₂ < 0`.
- `β₂ + β₄` is the divorce effect in **high**-conflict families. It is entirely
  possible that `β₄ > 0` — divorce may be *less* damaging when the home was
  already high-conflict.
- Including `β₃H` lets the **intercept** move too, not just the slope. You almost
  always want that.
- You could go further and interact the controls: `+ β₅(X × H)`.

> **An interaction always needs its main effects.** If you put `D × H` in the
> model, `D` and `H` must both be in there on their own. Drop one and the
> interaction coefficient stops meaning "the difference in the effect" and starts
> absorbing a level difference instead. Exam output will always show all three —
> if it doesn't, that's the thing to flag.

### Worked example with real numbers — the unit's car data

Using `carexample.dta` (the Week 1 dataset), `price` in AUD, `km` in thousands of
kilometres, engine type Gas / Petrol / Diesel (N = 3,309, `Gas` = reference).

**Dummies only — parallel lines, different heights:**

```
price‾ = 55,738 − 129.87 km + 3,067 Dpetrol + 9,806 Ddiesel      R² = 0.238
                  (4.16)      (1,886)          (1,782)
```

Every engine type gets the **same** slope of −$129.87 per extra thousand km; they
just sit at different heights. At any given odometer reading a **diesel** sells
for $9,806 more than a **Gas** car (the reference group), and that gap is
significant (t = 5.50). The **petrol** premium of $3,067 over Gas is **not**
significant (t = 1.63, p = 0.104).

**Add interactions — different heights *and* different slopes:**

```
price‾ = 26,972 −  22.41 km + 37,889 Dpetrol + 39,267 Ddiesel
                − 140.64 (km × Dpetrol) − 110.12 (km × Ddiesel)      R² = 0.256
```

| Engine type | Intercept | Slope per 1,000 km |
|---|---|---|
| Gas (reference) | 26,972 | **−22.41** |
| Petrol | 26,972 + 37,889 = **64,861** | −22.41 − 140.64 = **−163.05** |
| Diesel | 26,972 + 39,267 = **66,239** | −22.41 − 110.12 = **−132.53** |

Estimating three **separate** regressions gives intercepts 26,971.86 / 64,860.68
/ 66,239.12 and slopes −22.413 / −163.053 / −132.528 — **identical to four
decimal places**. That is the point of the interaction model: it *is* the
separate models, fitted in one equation on the full sample, with a t-test on
every difference for free.

Both interaction terms are strongly significant (t = −8.99 and −7.70), so
mileage depreciates Gas cars far more slowly than petrol or diesel — a real
moderation effect that the dummies-only model completely hid.

> **Read the base coefficient as "the reference group's effect", not "the
> average effect".** In the interaction model `km` = −22.41 is the slope **for Gas
> cars only**. Reporting it as "the effect of mileage on price" is wrong by a
> factor of seven. Every time you see a variable that also appears in an
> interaction, ask *whose* effect its plain coefficient is.

---

## 2.3 Logarithms

A change in a natural log is approximately a proportionate change:

```
Δ ln X ≈ ΔX / X            100 × Δ ln X ≈ %ΔX
```

Use logs when the sensible way to talk about a variable is in **percentages** —
almost always true for money (income, wages, prices).

### The four functional forms — memorise this table

> **If Cal is using the 2nd edition of the textbook, this table has typos in it.**
> The lecturer flagged it directly: "if you have edition two of the textbook,
> please note that there are typos in this table. So this is the corrected version
> of it in here" — meaning the *slide* is correct and the book is not. She believes
> it was fixed for the 3rd edition. **Learn the slide version, reproduced below.**

| Form | Model | Coefficient to report | Interpretation |
|---|---|---|---|
| **Linear** | `Y = β₀ + β₁X + ε` | `β₁` | A one-**unit** higher X ↔ **β₁ units** change in Y |
| **Linear-log** | `Y = β₀ + β₁ ln X + ε` | `β₁/100` | A one-**percent** higher X ↔ **β₁/100 units** change in Y |
| **Log-linear** | `ln Y = β₀ + β₁X + ε` | `β₁ × 100` | A one-**unit** higher X ↔ **β₁ × 100 percent** change in Y |
| **Log-log** | `ln Y = β₀ + β₁ ln X + ε` | `β₁` | A one-**percent** higher X ↔ **β₁ percent** change in Y (an elasticity) |

### Worked example — income and education

```
Linear:      income‾    = −17,042 + 4,731 education
             "Every additional year of education increases income,
              on average, by $4,731."

Log-linear:  ln(income)‾ = 9.13 + 0.10 education
             "Every additional year of education increases income,
              on average, by 10%."
```

Same data, same relationship, two different — and both correct — sentences. The
linear version says the dollar gain is the same at every income level; the log
version says the *percentage* gain is. From the Ch 1 slides: "An additional year
of education increases monthly wage by 6%. At low levels of wage ($115/month)
this could be a $7 increase, whereas at the top levels ($3,078/month) it could be
a $185 increase."

> **The ÷100 and ×100 go in opposite places and it is easy to flip them.** The
> rule: **the log side is the percentage side.**
> - Log on the **Y** side → the coefficient *produces* a percentage → **×100**.
> - Log on the **X** side → the coefficient *consumes* a percentage → **÷100**.
> - Logs on both sides → percentages cancel → report `β₁` raw as an elasticity.
>
> Sanity check with the numbers above: `0.10 × 100 = 10%`. If you'd divided
> you'd have reported 0.1% and been out by a factor of 100.

> **You cannot take the log of zero or a negative number.** Stata silently drops
> those observations, so N falls. If a log model has a smaller `Number of obs`
> than the level model, that's why — and it means the two models are no longer
> fitted on the same sample.

> **R² is not comparable when the dependent variable differs.** `Y` and `ln Y` are
> different outcomes with different TSS, so their R² values measure different
> things. The unit's fix (Ch 5 and Ch 12–13 tutorials) is to define
> `R² = corr(Y, Ŷ)²` for both: for the log model, first predict `ln(Y)‾`, then
> exponentiate to get `Ŷ`, then correlate with the *actual* Y. For the level
> model this reproduces the reported R² exactly, so the two become comparable.

---

## 2.4 Quadratics

When the relationship bends, add a squared term.

```
score‾ = β₀ + β₁ hours + β₂ hours²
```

### Worked example — hours studied and test scores

```
Linear:      score‾ = 58.36 + 1.34 hours                    R² = 34%
Quadratic:   score‾ = 42.26 + 6.56 hours − 0.29 hours²      R² = 67%
```

The quadratic doubles the explained variation. Here is why — the marginal effect
of an extra hour is no longer constant:

```
marginal effect = β₁ + 2β₂ × hours = 6.56 − 0.58 × hours
```

| hours | predicted score | effect of one more hour |
|---|---|---|
| 0 | 42.26 | +6.56 |
| 4 | 63.86 | +4.24 |
| 8 | 76.18 | +1.92 |
| **11.31** | **79.36** | **0.00 ← turning point** |
| 12 | 79.22 | −0.40 |
| 16 | 72.98 | −2.72 |

**Turning point:**

```
             β₁        6.56
hours* = − ────  =  ────────  =  11.31 hours
            2β₂     2 × 0.29
```

> **A quadratic coefficient is never interpreted on its own.** "A one-unit rise in
> hours² lowers the score by 0.29" is meaningless. You must either (a) quote the
> marginal effect `β₁ + 2β₂X` **at a stated value of X**, or (b) quote the turning
> point. Reporting `β₁` alone as "the effect of hours" is also wrong — it is only
> the effect at X = 0.

> **A negative `β₂` does not automatically mean the effect turns negative in your
> data.** The turning point here is 11.31 hours. If nobody in the sample studies
> more than 10 hours, the fitted curve never actually bends downwards over the
> observed range — it just flattens. Always compare the turning point to the range
> of X before claiming "more study hurts".

---

## 2.5 Splines

A spline builds the curve out of **straight line segments** instead of a smooth
polynomial. Define:

1. a **knot** — the value of X where the line is allowed to break;
2. a **dummy** for being past the knot;
3. a **rescaled X** that counts forward from the knot.

### Worked example — same hours/score data, knot at 8

```
score‾ = β₀ + β₁ (hrs capped at 8) + β₂ D + β₃ (hrs over 8) × D

score‾ = 44.47 + 4.56 (hrs capped at 8) − 0.30 D − 0.83 (hrs over 8) × D
                                                          R² = 67%
```

where `D = 1 if hours > 8`, `hrs capped at 8 = min(hours, 8)` and
`hrs over 8 = max(hours − 8, 0)`.

| hours | calculation | score |
|---|---|---|
| 4 | 44.47 + 4.56(4) | 62.71 |
| 8 | 44.47 + 4.56(8) | 80.95 |
| just over 8 | 44.47 + 36.48 − 0.30 | 80.65 |
| 12 | 44.47 + 36.48 − 0.30 − 0.83(4) | 77.33 |
| 16 | 44.47 + 36.48 − 0.30 − 0.83(8) | 74.01 |

So the slope is **+4.56 per hour up to 8 hours, then −0.83 per hour after**, with
a small level drop of 0.30 at the knot itself. Same R² as the quadratic (67%),
and it traces a very similar path — at 12 hours the spline says 77.33 and the
quadratic says 79.22.

> **The interaction coefficient means different things depending on how the base
> variable was built, and this is genuinely ambiguous unless you check.**
>
> - If the base X is **capped** at the knot (what the slide's "hrs capped at 8"
>   says), then past the knot the capped variable stops moving, so **β₃ alone is
>   the post-knot slope** → −0.83.
> - If the base X is the **raw, uncapped** X, then past the knot both terms move,
>   so the post-knot slope is **β₁ + β₃** → 4.56 − 0.83 = +3.73.
>
> These give wildly different answers (a falling line versus a still-rising one).
> The capped reading is the one that matches this slide and the one that makes the
> spline agree with the quadratic's 67% R² and its downward bend. **State which
> construction you're assuming in your answer** — and if Cal gets a spline in an
> exam case, check the variable definitions in the output header before
> committing. Worth confirming with the tutor.

> **Splines are the lightest-weight item in this chapter.** The lecturer said the
> spline *code* would be posted in a do-file and is not something students need to
> be able to produce. Understand the shape and be able to read a spline output;
> don't spend revision time on constructing one.

---

## 2.6 Weighted regression (WLS)

Standard OLS treats every observation as equally important. Sometimes it
shouldn't:

- surveys that **over-sample** sub-populations (by race, by income) — the sample
  isn't representative;
- aggregate data on units of very **different size** (states, countries);
- observations that simply carry more information (large vs small corporations).

**Weighted Least Squares** lets you set a weighting scheme. There is **no known
optimal weighting scheme** — you justify your choice.

The unit's example: `MJ` = % of 12–17-year-olds using marijuana in the past 30
days, by state; `UR` = state unemployment rate, 51 states. Unweighted, a
state-level regression treats Wyoming and California identically. The unweighted
unemployment effect is about **0.2**; weighting by population moves it to roughly
**0.37**.

The Ch 5 tutorial asks why **√population** might be a better weight than
population itself. The numbers from the lecture make the case:

| Weighting | Share of total weight held by the 10 biggest states |
|---|---|
| By population | **54%** (the bottom 10 states get 2.7%) |
| By √population | **35%** (the smallest get about 8%) |

Raw population lets a handful of huge states decide the answer on their own. The
square root keeps size mattering without letting it dominate.

```stata
regress MJ UR [pw = population]           // pw = probability weights
```

> **Weighting is not a free improvement — it is PITFALL #7 waiting to happen.**
> Over-weighting a group drags the estimated average treatment effect towards
> *that group's* effect. If the effect genuinely differs across groups, changing
> the weights changes the answer. That's a finding, not a nuisance: report it.

---

## 2.7 Standardised coefficients

Raw coefficients can't be compared across variables because they depend on the
**units** each variable is measured in, and on how much each variable **varies**.

Standardised coefficients rescale everything to standard deviations:

```
              sd(Xⱼ)
β*ⱼ = β̂ⱼ × ─────────
              sd(Y)
```

Read as: **a one-standard-deviation increase in Xⱼ is associated with β*ⱼ standard
deviations change in Y.**

### Worked example — the `performance.dta` model, N = 80

`sd(performance) = 23.02`.

| Variable | β̂ | sd(X) | **β\*** |
|---|---|---|---|
| tool_quality | 3.1859 | 3.018 | **0.418** |
| training_hours | 1.3058 | 6.036 | **0.342** |
| it_maturity | 3.8080 | 1.967 | **0.325** |
| manager_support | 3.3993 | 2.052 | **0.303** |
| baseline_skill | 3.0601 | 1.728 | **0.230** |
| project_complexity | −1.7853 | 1.845 | **−0.143** |
| budget_availability | −0.2287 | 1.901 | **−0.019** |

The ranking **flips**. On raw coefficients `it_maturity` (3.81) looks like the
biggest lever and `training_hours` (1.31) the smallest of the significant ones.
Standardised, `tool_quality` and `training_hours` come out on top, because
training hours vary far more across engineers (sd = 6.04) than IT maturity does
(sd = 1.97).

```
training_hours:  1.3058 × 6.036 / 23.022 = 0.342
it_maturity:     3.8080 × 1.967 / 23.022 = 0.325
```

> **Standardised coefficients answer "which factor matters most *here*", not
> "which factor has the biggest effect".** They mix the size of the effect with
> the amount of variation in the sample. A powerful lever that barely varies in
> your data gets a small standardised coefficient — and that is the right answer
> to "what explains the differences we observe", but the wrong answer to "what
> should we change". Say which question you're answering.

The lecture's own example makes the same point on the 1907 Romanian peasant
rebellion, where the explanatory variables sit on wildly different scales — a
Gini coefficient on **0–1** alongside percentages on **1–100**:

| Variable | Raw coefficient | Standardised |
|---|---|---|
| Inequality (Gini, 0–1) | **1.14** | small — "played really not nearly any role at all" |
| Commerce (% land in wheat, 1–100) | **0.09** | **0.61** — the clear winner |
| Tradition (1–100) | — | "quite a good follow-up" |

On raw coefficients inequality looks twelve times more important than commerce.
Standardised, commerce dominates. The sentence to steal: "for every **one
standard deviation** jump in commerce, there was a **0.61 standard deviation**
jump in the intensity of the rebellion."

```stata
regress intensity inequality commerce tradition midpeasant, beta
```

The `beta` option adds a `Beta` column; every other number in the output —
standard errors, t-stats, p-values — is **unchanged**.

> **Standardising is not weighting, and the exam distractor mixes them up.** A
> quiz option the lecturer rejected read: "standardised coefficients use a
> weighting scheme such that the coefficients reflect the importance of the
> observations". Her response: "now that's not standardisation, that's weighted
> least squares." Standardisation removes the **units** of both the dependent and
> the explanatory variable; weighting changes how much each **observation** counts.
>
> And note that even variables measured on the *same* range still aren't
> comparable raw — "some of them might move just a little bit at some small range;
> it's relative to the **spread** of the data." That is why the formula uses the
> standard deviation, not the range.

---

## Checkpoint

<details>
<summary>1. A model of wages includes dummies for `female` and `married`, plus their interaction: `wage‾ = 12.0 + 3.5 married − 4.0 female − 2.5 (married × female)`. What is the marriage premium for men? For women? What do married women earn relative to single men?</summary>

- **Marriage premium for men** (female = 0): `+3.5`.
- **Marriage premium for women** (female = 1): `3.5 + (−2.5) = +1.0`.
- **Married women vs single men** (the reference group, both dummies zero):
  `3.5 − 4.0 − 2.5 = −3.0`.

The reference group is **single men**, because both dummies are zero for them.
Every coefficient is a comparison against that group, and the interaction
coefficient `−2.5` is the *difference in the marriage premium* between women and
men — not a wage level.
</details>

<details>
<summary>2. `ln(price)‾ = 9.72 − 0.00327 km + 0.406 displacement`, with km in thousands. Interpret both slopes.</summary>

The dependent variable is logged, the explanatory variables are not — so this is
**log-linear** and each coefficient is multiplied by 100 to become a percentage.

- `km`: a further **1,000 km** on the odometer is associated with a
  `−0.00327 × 100 = −0.327%` lower price, holding engine size constant. Over
  100,000 km that is roughly −32.7% (strictly, `exp(−0.327) − 1 = −27.9%`, since
  the log approximation drifts for large changes).
- `displacement`: a **one-litre** larger engine is associated with a
  `0.406 × 100 = +40.6%` higher price, holding mileage constant.

Note that the second is a big change, where the ≈ in `100 × Δln X ≈ %ΔX` starts
to matter: the exact figure is `exp(0.406) − 1 = +50.1%`.
</details>

<details>
<summary>3. Why does adding `hours²` to a model always raise R², and what should you look at instead to decide whether to keep it?</summary>

R² **always** rises when any variable is added, including a random one, because
OLS minimises RSS and adding a column can only ever reduce (never increase) the
minimum achievable RSS.

To decide whether it earns its place, look at:
- the **t-statistic / p-value on the quadratic term itself** — is `β₂`
  distinguishable from zero;
- the **adjusted R²**, which only rises if the variable beats a random one;
- whether the implied **turning point** sits inside the observed range of X — if
  it doesn't, you have added complexity that describes nothing in your data.
</details>

<details>
<summary>4. A regression of life expectancy uses dummies for `africa`, `asia`, `oceania` and `america`, with Europe excluded. `asia` has a coefficient of −8.2. If you re-run the model with **africa** excluded instead and `europe` included, does the coefficient on `asia` change?</summary>

**Yes.** It becomes "Asia relative to Africa" rather than "Asia relative to
Europe". Concretely, if the original model gave `asia = −8.2` and
`africa = −22.0` (both versus Europe), then switching the reference to Africa
gives `asia = −8.2 − (−22.0) = +13.8` — Asia's life expectancy is 13.8 years
*higher* than Africa's while still being 8.2 years *lower* than Europe's.

The sign flips. Nothing about the world changed; only the comparison did. The
coefficient on `democracy` — the key-X — is unchanged, because the set of
regions being controlled for is identical either way; only the labelling of the
baseline moved. That is the whole content of Chapter 3 Tutorial Exercise 1 (d)
and (e).
</details>

---

## Summary

- **Dummies** need a reference category; every coefficient is a comparison
  against it. Know how the dummies were constructed ("highest degree" vs "has a
  degree") before interpreting anything.
- **Interactions** let the effect differ across groups. One interacted model
  reproduces the separate group models exactly, on a larger sample, with a free
  significance test on the difference. Always include the main effects.
- **Logs**: log on the Y side → ×100 for a percentage; log on the X side → ÷100;
  both → elasticity. R² isn't comparable across different dependent variables;
  use `corr(Y, Ŷ)²`.
- **Quadratics**: interpret via the marginal effect `β₁ + 2β₂X` at a stated X, or
  the turning point `−β₁/2β₂`. Check the turning point is inside the data range.
- **Splines**: piecewise linear. Whether the interaction coefficient *is* the
  post-knot slope or must be *added* to the base slope depends on whether the
  base X was capped — check the variable definitions.
- **Weights** matter when the sample isn't representative or units differ in
  size. No optimal scheme exists; justify yours. Beware PITFALL #7.
- **Standardised coefficients** (`β̂ × sd(X)/sd(Y)`) let you compare across scales,
  but they blend effect size with sample variation.
