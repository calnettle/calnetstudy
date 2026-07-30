# Topic 1 — Regression Analysis Basics

*Chapter 2 (A) and 2 (B). The foundation everything else in the unit stands on.*

---

## 1.1 What a regression is, and what it is *for*

A regression is an equation that represents **how a set of factors explains an
outcome, and how the outcome moves with each factor**. In this unit its job is
narrower than in a standard statistics unit:

> Regression "helps towards eliminating the influence of other factors in order
> to get closer to the true, average causal effect of a key factor on an
> outcome." That sentence is the whole unit. Every later chapter is either a way
> of getting closer to it, or a way you can accidentally get further away.

### The four main objectives

Everything you do — which variables go in, which pitfalls matter — depends on
which of these four you are doing. Identify the objective *first*, before you
look at a single number.

| # | Objective | Typical question |
|---|---|---|
| 1 | **Quantify how one factor causally affects another** | Did legalising lane filtering reduce motorbike accidents? |
| 2 | **Forecast / predict an outcome** | How many ER visits from drug overdoses will each city have this year? |
| 3 | **Determine the predictors of a factor** | What is the single best predictor of whether a female gives birth before 18? |
| 4 | **Adjust an outcome for various factors** | Who was the most effective Ford salesperson last year, given their local economy? |

Objective 1 is the unit's centre of gravity. Objectives 2–4 get their own topic
(see *Strategies for Other Regression Objectives*).

---

## 1.2 The simple regression model

```
True (theoretical) model:    Yᵢ = β₀ + β₁Xᵢ + εᵢ        i = 1, …, N
Estimated model:             Yᵢ = β̂₀ + β̂₁Xᵢ + ε̂ᵢ
Predicted values:            Ŷᵢ = β̂₀ + β̂₁Xᵢ
Residual:                    ε̂ᵢ = Yᵢ − Ŷᵢ
```

| Piece | Name | Meaning |
|---|---|---|
| `Y` | Dependent variable / outcome | What you're explaining |
| `X` | Explanatory variable | What you're explaining it with |
| `β₁` | Slope coefficient | How Y is estimated to move with a **one-unit** change in X |
| `β₀` | Intercept / constant | Expected value of Y when **X = 0** |
| `ε` | Error term | How far an individual point is from the **true** line |
| `ε̂` | Residual | How far an individual point is from the **estimated** line |

> **The hats matter and examiners check them.** `ε` is the error (distance from
> the *true* regression line — unobservable). `ε̂` is the residual (distance from
> the *estimated* line — you can compute it). If a question asks you to
> "calculate the error term", it means the residual; say so.

### Worked example — the lecture's income equation

```
income‾ᵢ = −54,299 + 8,121 × educᵢ        i = 1, …, 2,772
```

One person has 10 years of schooling and $25,000 of income.

```
Predicted:  −54,299 + 8,121 × 10  =  −54,299 + 81,210  =  $26,911
Residual:   25,000 − 26,911       =  −$1,911
```

The residual is **negative**, so the model **over**-predicted this person's
income. They earn less than someone with their schooling typically does.

> **Sign convention that costs marks:** residual = actual − predicted.
> **Negative residual → the model over-predicted → the subject under-performed.**
> **Positive residual → the model under-predicted → the subject over-performed.**
> Get this backwards and the whole "relative performance" topic inverts.

---

## 1.3 How the coefficients are calculated

```
        Σ (Xᵢ − X̄)(Yᵢ − Ȳ)          how X and Y move together
β̂₁ = ─────────────────────  =  ──────────────────────────────
           Σ (Xᵢ − X̄)²             how much X varies by itself

β̂₀ = Ȳ − β̂₁X̄
```

The intercept formula falls out of the fact that **the OLS line always passes
through the point (X̄, Ȳ)**. That is a free sanity check: plug the mean of X into
your fitted equation and you must get the mean of Y.

### Worked example — the four-person table (lecture, Ch 2A)

This is the table the slides leave blank. Here it is filled in — the numbers are
confirmed by the saved Stata file from the lecture (`Untitled.dta`).

| Person | X = years of schooling | Y = income ($1000s) | X − X̄ | Y − Ȳ | (X−X̄)(Y−Ȳ) | (X−X̄)² |
|---|---|---|---|---|---|---|
| 1 | 10 | 40 | −3 | −5 | 15 | 9 |
| 2 | 12 | 45 | −1 | 0 | 0 | 1 |
| 3 | 14 | 40 | +1 | −5 | −5 | 1 |
| 4 | 16 | 55 | +3 | +10 | 30 | 9 |
| | **X̄ = 13** | **Ȳ = 45** | | | **Σ = 40** | **Σ = 20** |

```
β̂₁ = 40 / 20 = 2
β̂₀ = 45 − 2 × 13 = 45 − 26 = 19

income‾ = 19 + 2 × years-of-schooling
```

Check the line passes through the means: `19 + 2(13) = 45 = Ȳ` ✓

| Person | X | Y | Ŷ = 19 + 2X | ε̂ = Y − Ŷ | (Y − Ȳ)² | ε̂² | (Ŷ − Ȳ)² |
|---|---|---|---|---|---|---|---|
| 1 | 10 | 40 | 39 | +1 | 25 | 1 | 36 |
| 2 | 12 | 45 | 43 | +2 | 0 | 4 | 4 |
| 3 | 14 | 40 | 47 | −7 | 25 | 49 | 4 |
| 4 | 16 | 55 | 51 | +4 | 100 | 16 | 36 |
| | | | | **Σ = 0** | **TSS = 150** | **RSS = 70** | **ExSS = 80** |

> **The residuals must sum to zero.** They do here (1 + 2 − 7 + 4 = 0). This is
> automatic whenever the model has an intercept — and it is *exactly why*
> Condition 1 ("the average error term equals 0") is described in the slides as
> "an automatic property as long as the model has an intercept". If your
> residuals don't sum to zero by hand, you have an arithmetic error.

> **You will not be asked to do this by hand in the exam.** The lecturer was asked
> directly and said so: the hand calculation is "just to point out that it's
> absolutely doable by hand". Learn it anyway — it is the fastest way to
> understand what the slope *is*, it's Tutorial Chapter 2 Exercise 1, and reading
> an output block confidently is much easier once you know what produced it.
>
> Notice the residual pattern too: small at 10 and 12 years of schooling (+1, +2),
> large at 14 and 16 (−7, +4). **The model fits well at the low end and badly at
> the high end** — a systematic pattern in the residuals is a hint that the
> relationship may not be linear.

---

## 1.4 Variation: TSS, ExSS, RSS

```
TSS = Σ (Yᵢ − Ȳ)²        Total Sum of Squares       — all the variation in Y
ExSS = Σ (Ŷᵢ − Ȳ)²       Explained Sum of Squares   — the part the model explains
RSS = Σ ε̂ᵢ²             Residual Sum of Squares    — the part it doesn't

TSS = ExSS + RSS
```

Check on the table above: `80 + 70 = 150` ✓

**OLS = Ordinary Least Squares.** The coefficients are chosen to make **RSS as
small as possible**, which is the same as making ExSS as large as possible.
That's where the name comes from.

### R²

```
R² = ExSS / TSS = 1 − RSS/TSS
```

For the four-person example: `R² = 80/150 = 0.5333`, so **53.3% of the variation
in income is explained by years of schooling**.

### Adjusted R²

Adding *any* new X variable makes R² go **up**, even a column of random numbers.
Adjusted R² only rises if the new variable explains more than a randomised
variable would.

> **Adjusted R² is not a measure of fit, and this is the single thing the
> lecturer is most militant about.** Her words in the lecture: "Adjusted R² is not
> a measure of how well the model fits. That was R². Big, huge difference." And:
> "never ever is adjusted R² interpreted as a measure of explanatory power. Can we
> please let that go?" She said she can tell who wasn't listening because they
> write it in the exam.
>
> Adjusted R²'s **only** legitimate use is comparing two models to decide whether
> an added variable earns its place — **and even that is only relevant when you are
> chasing fit, i.e. a prediction model.** It is not relevant for causal analysis
> at all. Never write "adjusted R² tells us 53% of the variation is explained".

**How to word R² correctly.** The lecturer's approved phrasing: *"the proportion
of the total variation in the **outcome** variable that is explained by the
model"*, reported as a **percentage**. Two wrong versions she corrected in class:

- ✗ "the variation in the explanatory variables explained by the model" — the
  model doesn't explain the X's, it explains Y.
- ✗ "the variation in all the variables included" — the total variation is the
  variation in the **outcome**, full stop.

R² is always between 0 and 1. If you ever get exactly 1, something is wrong —
that means every point sits precisely on the line.

### MSE and Root MSE

```
              Σ ε̂²
MSE = σ̂² = ───────────          RMSE = √MSE
            n − K − 1
```

where `n` = sample size, `K` = number of explanatory variables (so `n − K − 1`
is the degrees of freedom).

Four-person example: `MSE = 70 / (4 − 1 − 1) = 70/2 = 35`, so `RMSE = 5.92`.
Interpretation: a typical residual is about $5,920.

Rule of thumb from the slides: **95% of residuals should have absolute value
less than 1.96 × RMSE.**

> **Divisor trap.** MSE divides RSS by `n − K − 1`, *not* by `n`. `n` is used for
> a population variance; `n − K − 1` is used here because you spent K + 1 degrees
> of freedom estimating the coefficients. Same idea as the `n` vs `n − 1` split
> between a population and a sample variance. Using `n` gives a number that is
> too small, and every standard error built on it is then too small too.

### When is a high R² good?

| Objective | Do you want a high R²? |
|---|---|
| Forecasting / prediction | **Yes** — that is literally the goal |
| Determining predictors | Yes, as a comparison tool ("well above the others") |
| Causal effect | **No** — "the pursuit of high R² may be detrimental" |
| Adjusting outcomes | Careful — you must not adjust for the wrong things |

Chasing R² in causal work pushes you towards throwing in mediators and outcomes,
which is exactly how you destroy the estimate you wanted.

---

## 1.5 Reading a Stata regression output

Every written exam question comes with Stata output. Two blocks:

**Top block — the whole model**

| Field | Meaning |
|---|---|
| `Number of obs` | N, the sample size |
| `F(df1, df2)` and `Prob > F` | Overall-significance test: are *all* slopes zero at once? Tiny `Prob > F` → reject; the model explains something. |
| `R-squared` | ExSS / TSS |
| `Adj R-squared` | Penalised for the number of predictors |
| `Root MSE` | √MSE — typical residual size |

**Bottom block — one row per coefficient**

| Column | What it is | What it answers |
|---|---|---|
| `Coef.` | The estimated effect | How Y moves per 1-unit rise in X, holding the other X's constant |
| `Std. err.` | Standard deviation of the coefficient's **sampling distribution** | How precise the estimate is |
| `t` | `Coef. ÷ Std. err.` | How many standard errors the estimate sits from zero |
| `P>\|t\|` | Two-sided p-value | Chance of a t at least this extreme **if the true β were zero** |
| `[95% Conf. Interval]` | ≈ `Coef. ± t_c × Std. err.` | The plausible band for the true coefficient |

The last four are one idea told four ways, and they always agree:
`SE → t = Coef/SE → p from t → CI = Coef ± t_c·SE`.

> **The classic mix-up.** "Variation" and "covariation" belong to the *top*
> block — the TSS / ExSS / RSS / R² family, which describe the whole model's
> spread. `SE / t / p / CI` belong to the *bottom* block and describe **one
> coefficient's reliability**. The standard error is the standard-deviation-like
> quantity, `t` is a ratio, `p` is a probability, and the CI is a range. Don't
> swap their jobs.

### Worked example — reading a real output

This is the estimated model from Cal's own portfolio Part 2, re-run and verified
line by line. `performance.dta`, N = 80 software engineers.

```
regress performance training_hours baseline_skill budget_availability ///
        project_complexity tool_quality manager_support it_maturity
```

| Variable | Coef. | Std. err. | t | P>\|t\| | [95% Conf. Interval] |
|---|---|---|---|---|---|
| training_hours | 1.3058 | 0.3935 | 3.32 | 0.001 | 0.5215 — 2.0902 |
| baseline_skill | 3.0601 | 1.2776 | 2.40 | 0.019 | 0.5133 — 5.6069 |
| budget_availability | −0.2287 | 1.3196 | −0.17 | 0.863 | −2.8592 — 2.4018 |
| project_complexity | −1.7853 | 1.0269 | −1.74 | 0.086 | −3.8323 — 0.2617 |
| tool_quality | 3.1859 | 1.0281 | 3.10 | 0.003 | 1.1363 — 5.2354 |
| manager_support | 3.3993 | 1.0470 | 3.25 | 0.002 | 1.3122 — 5.4864 |
| it_maturity | 3.8080 | 1.2512 | 3.04 | 0.003 | 1.3138 — 6.3021 |
| _cons | −19.3327 | 12.8891 | −1.50 | 0.138 | −45.0266 — 6.3611 |

`N = 80` · `F(7, 72) = 13.91` · `Prob > F = 0.0000` · `R² = 0.5749` ·
`Adj R² = 0.5335` · `Root MSE = 15.72`

Checks you should be able to do in your head at the desk:

```
t         = 1.3058 / 0.3935 = 3.319 ✓
df        = n − K − 1 = 80 − 7 − 1 = 72
t crit 5% = 1.9935  →  3.32 > 1.99, significant at 5% ✓
CI        = 1.3058 ± 1.9935 × 0.3935 = 1.3058 ± 0.7844 = (0.521, 2.090) ✓
CI excludes 0  ⇔  p < 0.05 ✓
```

**Interpretation, in the sentence the marker wants:** one extra hour of formal
training is associated with a **1.31-point higher performance score, holding
baseline skill, budget, project complexity, tool quality, manager support and IT
maturity constant**. The estimate is significant at the 1% level.

> **Don't call the intercept meaningless, and don't call it meaningful either.**
> `_cons = −19.33` is the predicted performance for an engineer with **zero of
> everything** — zero training, zero baseline skill, zero tool quality. No such
> engineer exists, and performance can't be negative. The intercept is doing
> arithmetic bookkeeping, not describing a person. Say that, don't interpret it.
>
> The lecturer's rule: the intercept is only worth interpreting when X = 0 is a
> plausible value the variable can actually take. Otherwise **you keep it in the
> model — it makes the slopes fit better — but you don't read a story into it.**

### A second worked interpretation — the house price model

```
price‾ = 100,000 + 45,000 bedrooms + 100 sqm
```

A house with **2 bedrooms and 140 m²**, which sold for **$170,000**:

```
Predicted:  100,000 + 45,000(2) + 100(140)
         =  100,000 + 90,000 + 14,000  =  $204,000

Residual:   170,000 − 204,000  =  −$34,000
```

The residual is **negative**, so the model **over**-predicted by $34,000. Plausible
reasons the lecture gave: the market moved, it's in a poor neighbourhood, the
house is old, the kitchen hasn't been renovated — i.e. real factors the model
omits, sitting in the error term.

Interpreting `sqm = 100`: **each additional square metre is associated with $100
more on the price, holding the number of bedrooms constant** — and *on average*.

> **"On average" is not padding.** Every coefficient interpretation should carry
> it. A regression describes average behaviour across the sample; it is not a
> prediction about any specific individual, and the lecture calls the phrase "the
> most crucial part of that whole sentence". Drop it and you have asserted
> something the regression never claimed.

---

## 1.6 Multiple regression and holding other factors constant

Add aptitude to the income model:

```
Simple:    income‾ = −54,299 + 8,121 educ
Multiple:  income‾ = −34,027 + 5,395 educ + 367 aptitude
```

The education effect drops from **$8,121 to $5,395**. The difference — about
$2,726 a year — is the part of the simple estimate that was really aptitude
getting credit through education.

### The equivalent "strip it out" route

The slides show the same answer a second way, and it is worth knowing because it
makes "controlling for" concrete:

```
Step 1:  educ‾ = 11.036 + 0.053 aptitude
Step 2:  adjusted educ = educ − educ‾     (i.e. the residuals from step 1)
Step 3:  income‾ = −54,019 + 5,395 × adjusted educ
```

The slope is **5,395 either way**. Controlling for aptitude *is* regressing
income on the part of education that aptitude cannot explain.

The same demonstration was run live in Stata on the wage data:

```stata
regress wage educ                     // education effect ≈ 60
regress wage educ IQ                  // education effect ≈ 42

regress educ IQ
predict adjusted_educ, resid
regress wage adjusted_educ            // education effect ≈ 42  — identical
```

In the lecturer's words: "there's no magic to it. We literally, by adding a
control variable, we strip out its effect from the key X." The drop from 60 to 42
is the part of the raw education effect that was really IQ.

> **The intercept changes but the slope doesn't (−34,027 vs −54,019).** Adding a
> control changes what "X = 0" means, so the intercept moves. The coefficient of
> interest doesn't. If an exam asks why two specifications give the same slope
> but different constants, this is the answer.

### Key-X vs control variables

| Term | Definition |
|---|---|
| **Key-X** (key-explanatory / treatment variable) | The variable whose causal effect on Y you are trying to identify |
| **Control variables** | Factors suspected of being associated with **both** Y **and** the key-X |

Controls are not there to be interpreted. They are there to stop the key-X
taking credit for their effects. In a causal write-up you interpret **one**
coefficient carefully and leave the rest alone.

---

## 1.7 The five conditions

The slides insist these are **conditions**, not "assumptions" — things you must
assess, not things you get to assume.

| # | Condition | How much should you worry? |
|---|---|---|
| 1 | The average error term `ε` equals 0 | Automatic, as long as the model has an intercept |
| 2 | Errors are independently and identically distributed (i.i.d.) | Breaks under **clustering** |
| 3 | Errors are normally distributed | Rarely an issue unless Y is discrete/qualitative/restricted |
| 4 | Errors are **homoskedastic** | Often violated; the fix is trivial (`, robust`) |
| 5 | **The key-X is uncorrelated with the error term** | The big one. Violated constantly. |

### Condition 5 in plain English

The error term captures everything left out of the model. If a left-out factor
is correlated with the key-X, then the key-X is correlated with the error, and
its coefficient absorbs that factor's effect.

Income and education again: intelligence affects both. Leave it out and
education gets credit for it. That is a **biased** estimate of the causal effect
of education.

> **Condition 5 only has to hold for the key-X — and every other econometrics
> textbook states this wrongly.** The lecturer is explicit that the standard
> statement ("all explanatory variables must be uncorrelated with the error term")
> "strictly speaking is not true. **We only care about the key-X being uncorrelated
> with the error term.** So the other control variables that you plug in there —
> don't care if they are correlated with the error term."
>
> Two consequences: you don't need to defend every control's causal credentials,
> and you must never interpret a control's coefficient causally. If an exam
> distractor says all explanatory variables must satisfy Condition 5, that's the
> wrong option.

Two related misconceptions the lecturer flagged from the quizzes:

- ✗ "The explanatory variables must always be uncorrelated with the error term."
  Wrong — only the key-X.
- ✗ "The key-X must not be correlated with the controls." Wrong, and backwards:
  "it's very unlikely that you will find controls that would **not** be correlated
  with the key-X." Correlation between key-X and control is normal — it is what
  makes the control worth including. It costs you precision, not validity (see
  multicollinearity).

**There is no test for Condition 5.** No statistic and no software output can
tell you whether something is hiding in the error term. It is an argument you
make about causal structure, not something you check.

**And Condition 5 doesn't always matter.** It is needed for objectives 1 (causal
effects) and 4 (adjusting outcomes). It is **not** needed for objectives 2
(forecasting) and 3 (determining predictors).

---

## 1.8 "On average" — everyone has their own effect

A regression coefficient is an **average** effect. It does not apply to everyone,
and may apply to nobody, because of:

- the error term;
- exceptions and outliers;
- opposite effects that cancel out, leaving an estimate of zero.

> **The exception fallacy.** "My grandad smoked and lived to 95, so smoking is
> fine" is not a critique of a regression. The slides call this out directly as a
> "common misconception to discredit the estimated model based on an observation
> that does not fit". If an exam case has someone rejecting a finding because they
> know a counter-example, that is the fallacy to name.

**Causal effects also change over time.** A relationship estimated on 1976 data
may not hold now. That matters when you're choosing a sample period and when
you're judging whether a historical study still applies.

---

## 1.9 Inaccuracy vs imprecision

The two reasons a regression result can be wrong. Keep them apart — the exam
tests the distinction.

| | **Imprecision** (Ch 5) | **Inaccuracy** (Ch 6) |
|---|---|---|
| What it is | Uncertainty from randomness | Systematic bias |
| Shows up in | The **standard errors** | The **coefficient estimates** |
| Caused by | Small sample; randomness in Y; narrow range of X values | Omitted / confounding factors; the seven PITFALLS |
| Does the model have a problem? | Not necessarily | **Yes** |
| Fix | More data; more variation in X | Redesign the model — or acknowledge you can't |

The dartboard analogy from the slides: **imprecise but accurate** = a wide
scatter centred on the bullseye. **Precise but inaccurate** = a tight cluster in
the wrong place. The second is more dangerous, because it looks convincing.

> **If Cal is reading the 2nd edition of the textbook, the captions on those two
> target figures are printed the wrong way round.** The lecturer flagged this
> explicitly: "the captions or the titles on these pictures in the textbook are
> actually wrong — so they're correct **here** on the slide, but they are wrong in
> the textbook, so don't get confused." Trust the slide.

**More data fixes imprecision, not inaccuracy.** The lecture's illustration: if
the true effect is 5, sampling noise might hand you 4.5, or 4, or 7, or on a bad
day 10 — but a *biased* model will systematically hand you something like 2, and
"it doesn't matter how many observations we collect". The bias doesn't shrink
with N, because the bias is in the model, not the sample.

> **"Inaccuracy is worse."** The Ch 1 slide says it directly: "It is most often
> errors in coefficient estimates rather than errors in their precision that are
> the sources of wrong research." And from Ch 5B: "getting the standard errors
> correct doesn't help much if you are off-target with a biased coefficient
> estimate." If a question asks you to rank the problems in a model, bias beats
> imprecision.

---

## 1.10 Regression flowcharts

You will be asked to draw or critique one.

| Symbol | Means |
|---|---|
| **Rectangle** | A variable — dependent or explanatory (you have data) |
| **Oval** | An **unobservable** factor (unavailable / unobserved / not quantifiable) |
| **Solid arrow** | The causal effect of interest |
| **Dashed arrow** | A potentially problematic relationship |

**Mediating factors and mechanisms.** When the key-X affects Y *through* some
intermediate variable, that variable is a **mediator**, and the route is called a
**mechanism**. Breaking the chain into steps lets you reason about the sign of
the overall effect: if X raises M and M lowers Y, the mechanism contributes a
negative effect.

**The two characters you must be able to tell apart:**

| | **Confounder** | **Mediator** |
|---|---|---|
| Position | Affects **both** the key-X **and** Y, from outside | Sits **on the path** from key-X to Y |
| Arrows | `F → X` and `F → Y` | `X → M → Y` |
| Story | Creates a **false** story | Is **part of** the story |
| In the model? | **Include it** | **Exclude it** |

Flow-chart test: if the arrows run *from* the key-X *into* the box and then on to
the outcome, "that's a mediator, don't touch it."

> **Draw the mediator, then do not control for it.** Mediators belong on the
> flowchart because they explain *how* the effect travels. They do not belong in
> the regression, because controlling for one removes part of the effect you are
> measuring. This is PITFALL #5 and it is a guaranteed exam target.

> **Do not write the words "mediation analysis" in an EFB222 answer.** The
> lecturer was unambiguous: "no one please in your reports start talking about
> mediation analysis, because you're not going to get any points for it… The book
> doesn't mention it. We don't talk about it." The unit's entire treatment of
> mediators is *identify them and leave them out*. Formal mediation analysis is a
> different technique from a different course and earns zero.
>
> The same rule bites more widely: **"answers based on knowledge acquired
> elsewhere may receive a mark of 0."** Her named example was the **variance
> inflation factor** — VIF is not taught in this unit, so writing it up "just uses
> some of the word space" and scores nothing. Diagnose multicollinearity the way
> the unit does: the correlation matrix plus an operative-variation argument.

> **"Moderator" is not one of the roles.** This came up in an assignment: "a
> moderator is not a factor by itself, it's not a role itself. It interacts with
> something else, and that's what defines its role." Her example: in Scandinavia,
> gender doesn't affect education (the key-X) and so isn't a confounder, and isn't
> on the path so isn't a mediator — it is an external factor that *moderates* the
> education→income effect. If you label something a moderator, check you haven't
> just avoided deciding whether it's a confounder or a mediator.

---

## 1.11 Correlation vs causation — both directions

**Correlation:** two variables move together. It says nothing about why. Three
possible reasons:

1. one affects the other;
2. a common factor affects both;
3. coincidence.

**Causation:** if some randomness or force made X change, Y would change on
average as well.

The lecture examples:

| Correlation | Sign | The interesting bit |
|---|---|---|
| Held back a year in primary school ↔ success in high school | Negative | Being held back is a *symptom*, not just a cause |
| Child experiencing divorce ↔ behavioural issues | Positive | Which way does the arrow run? |
| Coffee drinkers ↔ early death | Positive | Smoking is the classic confounder |

> **"Causation does not mean correlation" is also true, and it is the one people
> forget.** A variable can genuinely cause another and still show no significant
> correlation — because a modelling problem biased the estimate the other way,
> because the sample is too small, or because positive and negative effects across
> subgroups cancelled out. The unit hammers this: *lack of evidence is not proof
> of non-existence.*
>
> The lecturer's example: staff training genuinely raises sales, but a new
> competitor enters the market at the same time and masks it — real causation,
> zero observed correlation. Another from Ch 2B: parental divorce helps children
> in high-conflict families and harms them in low-conflict ones, "so they cancel
> each other out and we actually see no effect."

**Correlation is *linear* dependence.** It is unit-free and lies between −1 and
+1. Two variables can be **uncorrelated but still dependent** — just not
linearly. Independence implies zero correlation; zero correlation does **not**
imply independence.

### Scatter plots, quadrants and outliers

Before you draw a scatter plot, **decide what you expect to see**. Then draw it
and check. If the sign surprises you, the first thing to check is whether you
have the right data or plotted the variables the wrong way round.

Quadrant reading, taking the means as the axes: points concentrated in quadrants
**1 and 3** (both above average, or both below) → **positive** relationship;
concentrated in **2 and 4** → **negative**.

| Where the outlier sits | Effect |
|---|---|
| Near the **middle** of the X range | Mostly shifts the **intercept**; barely touches the slope |
| Far out at the **end** of the X range | Creates a large residual, and because OLS minimises RSS, the line **tilts towards it** |

Remedy: estimate with the outlier, estimate without it, and compare. If the
estimates barely move, the outlier is harmless and can stay.

---

## 1.12 Data types and definitions

| Term | Meaning |
|---|---|
| **Unit of observation** | Individual data vs aggregate data (people vs states) |
| **Cross-sectional** | Many subjects, one point in time |
| **Time-series** | One subject, many periods |
| **Panel** | Many subjects tracked across many periods |
| **Multiple cross-sectional periods** | Different subjects sampled in each period |
| **Model vs method** | The *model* is the regression equation; the *method* is OLS / WLS / etc. |

Subscripts are redundant when everything relates to the same subject, but
essential when you mix individual and aggregate data (e.g. person *i* in state
*s*).

---

## 1.13 Stata, and why the do-file matters

The unit teaches Stata but **the exam does not ask you to write code** — it asks
you to read output. The lecturer: "this is not a coding unit, not at all… but you
need to be able to read outputs. If you can understand what's where in it, then I
can ask you questions about the output." So the priority is knowing **where each
number lives in the printout**, not the syntax. She flagged in class that students
were weak on this and told them to fix it before the exam.

Where things are in a Stata `regress` output:

| You want | It's in |
|---|---|
| ExSS | the `SS` column, **`Model`** row |
| RSS | the `SS` column, `Residual` row |
| TSS | the `SS` column, `Total` row |
| Sample size | `Number of obs`, top right |
| Intercept | the coefficient column, **`_cons`** row |

Still, the vocabulary shows up in questions.

```stata
clear all                  // wipe the workspace before loading anything
use carexample, clear      // load a .dta (no file extension needed)

describe                   // variable names and data types
summarize price            // count, mean, sd, min, max
tabulate brand body        // cross-tab counts / percentages

rename enginev displacement
label variable price "price of vehicle"
generate kms = mileage * 1.609344
replace price = price * 1.42

scatter price displacement
histogram price
twoway (scatter price displacement)(lfit price displacement)

regress price displacement          // estimate
predict yhat, xb                    // predicted values
predict e, residual                 // residuals
predict sr, rstandard               // standardised residuals
```

Syntax skeleton:

```
[prefix cmd:] cmdname [varlist] [if exp] [in range] [, options]

  ==  is "is equal to"      &  is "and"
  |   is "or"               !  is "not"

summarize income if collegedegree==1
```

**Do-file discipline** (the unit is emphatic about this): you never use the
menus, you never save the modified data. You load the *original* data every time
and do all modifications in the do-file, so the analysis is fully reproducible.
Comments: `*` only at the start of a line, `//` anywhere, `/* … */` for blocks —
and note `///` is a *line continuation*, not a comment.

> **Two real bugs from Cal's Week 1 do-file, both worth knowing.**
>
> 1. `generate drego = registration` then `replace drego = 1 if registration=="yes"`
>    **does not work.** `registration` is a *string*, so `drego` is created as a
>    string and cannot be replaced with a number. The saved dataset still contains
>    `"yes"`/`"no"` in `drego`. The one-line fix is `generate drego = (registration=="yes")`,
>    which evaluates the condition to 1/0 directly.
> 2. `generate kms = mileage/1000` is the wrong conversion. `mileage` is already in
>    thousands of miles, so converting to thousands of kilometres needs
>    `generate kms = mileage * 1.609344`. Dividing by 1,000 turned 358 into 0.358
>    instead of 576.1. Unit conversions silently change every coefficient that
>    uses the variable — always sanity-check the magnitudes after a `generate`.

---

## Checkpoint

<details>
<summary>1. A regression gives Coef. = 250 and Std. err. = 43 on a sample of n = 200 with K = 4 explanatory variables. Is the coefficient significant at 5%?</summary>

```
t  = 250 / 43 = 5.81
df = 200 − 4 − 1 = 195
t critical (5%, two-sided, df 195) ≈ 1.97
```

5.81 ≫ 1.97, so **yes, significant at 5%** — comfortably at 1% too. Equivalently
the 95% CI is roughly 250 ± 1.97 × 43 = (165, 335), which excludes zero.
</details>

<details>
<summary>2. Model A has R² = 0.72. Model B, estimating the same causal effect, has R² = 0.31. Which is the better causal model?</summary>

**You cannot tell from R² and you should say so.** Fit and unbiasedness are
different properties. Model A might have the higher R² precisely *because* it
controls for mediators and outcomes of the key-X — which would make its causal
estimate worse, not better. Judge the specification: what is the key-X, are the
controls genuine confounders rather than mediators, and which pitfalls are open.
For a causal objective the pursuit of a high R² "may be detrimental".
</details>

<details>
<summary>3. Data: X = 0, 150, 150, 300 and Y = 130, 90, 100, 100. Compute β̂₁, β̂₀, TSS, RSS, ExSS and R² by hand.</summary>

`X̄ = 150`, `Ȳ = 105`.

| X | Y | X−X̄ | Y−Ȳ | product | (X−X̄)² |
|---|---|---|---|---|---|
| 0 | 130 | −150 | +25 | −3,750 | 22,500 |
| 150 | 90 | 0 | −15 | 0 | 0 |
| 150 | 100 | 0 | −5 | 0 | 0 |
| 300 | 100 | +150 | −5 | −750 | 22,500 |
| | | | | **Σ = −4,500** | **Σ = 45,000** |

```
β̂₁ = −4,500 / 45,000 = −0.10
β̂₀ = 105 − (−0.10)(150) = 105 + 15 = 120

Ŷ  = 120, 105, 105, 90        ε̂ = +10, −15, −5, +10   (sums to 0 ✓)

TSS  = 25² + 15² + 5² + 5²  = 625 + 225 + 25 + 25   = 900
RSS  = 10² + 15² + 5² + 10² = 100 + 225 + 25 + 100  = 450
ExSS = 15² + 0² + 0² + 15²  = 225 + 0 + 0 + 225     = 450
Check: 450 + 450 = 900 ✓

R²   = 450/900 = 0.50
MSE  = 450 / (4 − 1 − 1) = 225,  RMSE = 15
```

This is Tutorial Chapter 2A Exercise 1 — see the worked-cases note for the full
interpretation.
</details>

<details>
<summary>4. Why does adding a control variable change the intercept but sometimes leave the key-X coefficient almost unchanged?</summary>

The intercept is the predicted Y when **all** X's equal zero. Adding a variable
changes the definition of that point, so the intercept has to move to keep the
line passing through the means.

The key-X coefficient only changes if the new control is correlated with the
key-X *and* with Y. If a control explains Y but is uncorrelated with the key-X,
it will cut the residual variance (lowering Root MSE and often tightening the
standard error) without shifting the coefficient — because there was no
confounding to remove.
</details>

---

## Summary

- Regression's job in this unit is **isolating the causal effect of one key-X**,
  not maximising fit.
- Identify the **objective** first: causal, forecast, predictors, or adjusting.
  It determines everything downstream.
- `β̂₁ = Σ(X−X̄)(Y−Ȳ) / Σ(X−X̄)²`; `β̂₀ = Ȳ − β̂₁X̄`; the line passes through the
  means; residuals sum to zero.
- `TSS = ExSS + RSS`; `R² = ExSS/TSS`; `MSE = RSS/(n−K−1)`; `RMSE = √MSE`.
- Adjusted R² is a **comparison tool only**, not a share-explained statistic.
- Reading output: top block = whole model, bottom block = one coefficient's
  reliability. `t = Coef/SE`, and CI excluding zero ⇔ significant at that level.
- Five conditions; **Condition 5 (key-X uncorrelated with the error) is the one
  that breaks**, and it only matters for causal and adjusting objectives.
- **Inaccuracy** (biased coefficients, Ch 6) is worse than **imprecision**
  (inflated standard errors, Ch 5). More data fixes imprecision only.
- Flowcharts: rectangle = variable, oval = unobservable, solid = effect of
  interest, dashed = problematic. Draw mediators; never control for them.
- **Confounder** = affects both key-X and Y from outside → include.
  **Mediator** = sits on the path from key-X to Y → exclude.
- Say "**conditions**", not "assumptions". Say "**on average**" in every
  interpretation. Say "**the coefficient estimate** is significant", not "the
  variable is significant".
