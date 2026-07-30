# Topic 4 — Standard Errors, Hypothesis Tests, p-values and Aliens

*Chapter 5 (A) and 5 (B). Everything about **imprecision** — and why statistical
significance is not the goal.*

---

## 4.1 The standard error

A coefficient estimate is an estimator, and it carries two kinds of randomness:
you usually only have **one sample**, and the outcome itself is **random**. The
**standard error is the standard deviation of the sampling distribution of the
coefficient estimate** — a measure of how much your `β̂` would wobble if you drew
another sample.

```
                          σ̂
SE(β̂ⱼ)  =  ────────────────────────────────
             √[ Σ(Xⱼ − X̄ⱼ)² × (1 − R²ⱼ) ]
```

| Symbol | What it is | Which way does SE move? |
|---|---|---|
| `σ̂` | Root MSE — unexplained variation in Y | More unexplained variation → **bigger** SE |
| `Σ(Xⱼ − X̄ⱼ)²` | Total spread of `Xⱼ` (grows with n **and** with the SD of X) | Bigger sample or wider range of X → **smaller** SE |
| `R²ⱼ` | R² from regressing `Xⱼ` on all the **other** X's | More of `Xⱼ` explained by the other X's → **bigger** SE |

So the standard error is small when you have a **large sample**, **little
unexplained variation in Y**, a **wide spread of X values**, and **little overlap
between Xⱼ and the other regressors**.

> **The formula itself is not examinable** — the lecturer said it is "for your
> interest only, you're not going to be using it directly anywhere", along with
> how the coefficients and standard errors are computed. **The four drivers are.**
> Every question of the form "why is this standard error so large?" is answered
> from that table.

### Worked example — the same model, two specifications

Real numbers from `performance.dta` (N = 80), verified by re-running both models.
`Σ(training_hours − mean)² = 2,878.20` in both.

| | Part 1 model (3 regressors) | Part 2 model (7 regressors) |
|---|---|---|
| `σ̂` (Root MSE) | 20.4530 | **15.7237** ↓ |
| `R²ⱼ` for `training_hours` | 0.0307 | **0.4451** ↑ |
| SE(training_hours) | **0.3872** | **0.3935** |

```
Part 1:  20.4530 / √(2878.20 × (1 − 0.0307)) = 20.4530 / 52.82 = 0.3872 ✓
Part 2:  15.7237 / √(2878.20 × (1 − 0.4451)) = 15.7237 / 39.96 = 0.3935 ✓
```

> **Adding four good controls made the standard error *bigger*, not smaller.**
> That is genuinely counter-intuitive and it is exactly what the formula predicts.
> The numerator improved a lot (unexplained variation in performance fell by 23%),
> but the denominator got worse by more: `training_hours` went from being 3%
> explained by the other regressors to 45% explained, so its **operative variation
> shrank**. Net effect, SE up from 0.3872 to 0.3935.
>
> This is the bias–precision trade-off in one line of arithmetic. It also means
> Cal's Part 2 write-up claim that the extra controls "tightened the standard
> errors" is **not quite right for the key-X** — Root MSE fell, but SE(training)
> rose slightly. Worth correcting if that report is ever reused.

### The income / AFQT comparison from the lecture

Three ways of dealing with aptitude, and what each costs:

| Model | Education effect | SE | Why |
|---|---|---|---|
| `income = f(educ)` | ≈ 8,000 | ≈ 350 | Biased upwards — AFQT is in the error |
| `income = f(adjusted educ)` | 5,395 | ≈ 475 | Bias removed, but **half the variation in education was stripped out**, so precision collapses |
| `income = f(educ, afqt)` | 5,395 | smaller than 475 | Same point estimate, but AFQT now explains part of Y, so `σ̂` falls and R² rises |

Same coefficient in models 2 and 3, but **model 3 is more precise** — because
putting AFQT in as a regressor reduces the unexplained variation in income,
whereas residualising it out of education only shrinks the denominator.

---

## 4.2 Hypothesis testing

The logic, in the slides' own analogy:

| Criminal trial | Regression |
|---|---|
| H₀: the defendant is innocent | H₀: `β = 0` |
| H₁: the defendant is guilty | H₁: `β ≠ 0` |
| Enough evidence to convict beyond reasonable doubt? | Is `β̂` far enough from 0 to rule out randomness? |
| **The jury never proves innocence** | **You never prove H₀** |

### The four steps

1. Define the hypotheses for the entity you're testing.
2. Determine the standard error of the estimate (the software gives it to you).
3. Decide how certain you want to be (the significance level).
4. **Assuming H₀ is true**, test whether the estimate is far enough from the
   hypothesised value that randomness alone is an implausible explanation.

### Type I and Type II errors

| | H₀ is actually true | H₀ is actually false |
|---|---|---|
| **Reject H₀** | **Type I error** (false positive) — convicting an innocent defendant | ✓ |
| **Fail to reject H₀** | ✓ | **Type II error** (false negative) — acquitting a guilty one |

> **"Positive" and "negative" here are not about the sign of the coefficient.** A
> false *positive* means finding a non-zero relationship that isn't there — the
> estimate could be negative. A false *negative* means missing a relationship that
> is there. Nothing to do with the direction of the effect.

### Worked example — the empathy test

Historical teenage empathy scores: normally distributed, **mean 100, SD 15**.
Sample of **n = 25** current teenagers, sample mean **104**.

```
SE of the sample mean  =  σ/√n  =  15/√25  =  15/5  =  3
```

**Two-sided test at 5%:**

```
Non-rejection region:  100 ± 1.96 × 3  =  (94.12, 105.88)
104 is inside  →  do not reject H₀
```

**One-sided test at 5%** (H₁: mean > 100):

```
Cut-off:  100 + 1.645 × 3  =  104.94
104 is below  →  do not reject H₀
```

Conclusion: **we cannot conclude that current teenagers have a different level of
empathy.** We do **not** conclude they have the same level — a null hypothesis
cannot be proven.

Had the sample mean been **106**, `t = (106 − 100)/3 = 2.0` and we would have
rejected — a **Type I error** if the true mean really is 100.

> **How the σ/√n arithmetic gets there is not examinable.** The lecturer: "I ask
> you please not to put too much attention on details of how things are
> calculated, try to follow the logic rather. We're not using these sort of
> calculations in this unit." What is examinable is the *logic*: an estimate, its
> standard error, a critical value, and a conclusion that never claims to have
> proved H₀.

### The t-statistic

```
                β̂                          β̂ − β*
t  =  ─────────────        or, in general,  ────────
           SE(β̂)                             SE(β̂)

Degrees of freedom  =  n − K − 1  =  n − k
   n = sample size
   K = number of explanatory variables
   k = K + 1 = number of parameters (slopes + the constant)
```

> **The `t` and `P>|t|` columns in *any* software always test `β = 0`, two-sided.
> Always.** If a question hypothesises some other value — "is the effect
> significantly different from 1,000?" — you must compute `t = (β̂ − 1000)/SE`
> **by hand**. Stata will not do it for you and neither will any other package.
> This was stated three separate times in the lecture. It is a very cheap mark to
> lose.

> **One-sided p-value = printed two-sided p-value ÷ 2** (when the estimate is on
> the side H₁ predicts). Worked in the lecture: age has a printed p of `0.051`, so
> the one-sided p is `0.0255` — **significant at 5% one-sided, insignificant at 5%
> two-sided**, from the identical output. If you don't halve it you'll draw the
> wrong conclusion.

### One-sided tests

Use a one-sided test when theory says the effect can only go one way.

```
Expect positive:   H₀: β = 0  (or β ≤ 0)     H₁: β > 0     reject if t > +1.645
Expect negative:   H₀: β = 0  (or β ≥ 0)     H₁: β < 0     reject if t < −1.645
```

In Stata the critical value comes from `invttail(df, p)` — "inverse **t**
distribution, **tail** probability", where the first argument is the degrees of
freedom and the second is the area in the **upper** tail:

```stata
display invttail(2762, 0.025)     =  1.9608     // two-sided 5%
display invttail(2762, 0.05)      =  1.6454     // one-sided 5%
display -invttail(2762, 0.05)     = -1.6454     // one-sided 5%, lower tail
```

> **Watch the tail bookkeeping.** For a **two-sided** test you halve the
> significance level before feeding it to `invttail`: 5% two-sided → `0.025`; 10%
> → `0.05`; 1% → `0.005`. `invttail` always returns the **upper** cut-off; the
> distribution is symmetric, so for the lower tail just put a minus sign in front.
> Feeding `0.05` in for a two-sided 5% test gives you 1.645 instead of 1.96 and
> turns insignificant results significant.

Once degrees of freedom get past about 30–50 the t-distribution is
indistinguishable from the standard normal, which is why 1.96 and 1.645 work as
defaults.

---

## 4.3 p-values

> The p-value is **the likelihood that, if the true coefficient were actually
> equal to the hypothesised value, random processes would generate a coefficient
> estimate as far from that value as the one you found.**

Read that twice. It is a statement about **the data given H₀**, not about H₀
given the data.

| p-value | Statistical significance |
|---|---|
| `p < 0.10` | significant at the 10% level |
| `p < 0.05` | significant at the 5% level |
| `p < 0.01` | significant at the 1% level |

> **p = 0.049 and p = 0.051 are the same result.** The slides say it plainly:
> people label the first a "significant predictor" and the second "weakly
> significant" or "insignificant", when "there is little difference between how
> significant they are, so randomness or bias could cause the difference in
> significance". Never build an argument on which side of 0.05 something landed.

> **Do not use the canned evidence ladder.** The lecturer explicitly banned the
> textbook phrasing "5–10% is moderate evidence, 1–5% is strong evidence, under 1%
> is very strong evidence" — "like no, it doesn't work like that." What she wants
> instead is in §4.9.

> **Significance is a property of the *coefficient estimate*, not the variable.**
> "The variable is just a variable, like age or gender — that's not significant or
> not." Write "the coefficient estimate on `age` is not significant at 5%", never
> "age is not significant".

> **"Significant" on its own is ambiguous, and the lecturer said she'd rewrite the
> slide.** Strictly it means "significantly different from **the hypothesised
> value**" — which is usually, but not always, zero. The slides and the textbook
> drop the qualifier to save space. When the hypothesised value isn't zero, say
> which value you're testing against.

---

## 4.4 Confidence intervals

```
[ β̂ − t_c × SE(β̂) ,  β̂ + t_c × SE(β̂) ]
```

A 95% confidence interval is the range in which you can be 95% confident the
**true coefficient** lies — *assuming the sample is random from the population of
interest*.

> **A confidence interval is not a confidence interval for the causal effect.**
> The slides are precise about this: "This does not mean that we can be 95%
> confident that the true *causal effect* lies in that interval, as this requires
> that the coefficient estimate is unbiased as an estimate of the causal effect."
> The CI quantifies **imprecision** only. It says nothing at all about **bias**.

### Worked example — the age effect on income

Estimate **753**, standard error **386**, critical value 1.96:

```
Lower:  753 − 1.96 × 386  =  753 − 756.6  =  −3.6      (slides round to −4)
Upper:  753 + 1.96 × 386  =  753 + 756.6  =  1509.6    (slides round to 1510)

t = 753/386 = 1.95        two-sided p ≈ 0.051
```

**Zero is inside the interval → not significant at 5%.** Now the 90% interval:

```
753 ± 1.645 × 386  =  (118.0, 1388.0)
```

**Zero is outside → significant at 10%.**

> **The slides quote the 90% interval as (116, 1390); the arithmetic on the
> rounded inputs gives (118, 1388).** The gap is about $2 at each end and comes
> from the slides using unrounded values of the estimate and standard error.
> Nothing about the conclusion changes — zero is excluded either way. If Cal is
> asked to reproduce a CI in the exam, work from whatever precision the output
> gives and don't worry about a couple of units of rounding.

### The equivalence you must know

```
Significant at 5% (p < 0.05)      ⟺   95% CI excludes 0
Insignificant at 5% (p > 0.05)    ⟺   95% CI includes 0
```

**The CI is more informative than the point estimate**, and the slides say it
"does not receive the credit and use that it should". Two ways to use it:

1. **Test any hypothesised value for free.** With CI (−4, 1510): is $1,000 a
   plausible age effect? Yes — it's inside. Is $2,000? Unlikely — it's outside.
   No arithmetic needed.
2. **Check practical significance at the near endpoint.** "The best guess for the
   association between age and income is an extra $780 per year. But an estimate
   as low as $0 is in the plausible range." A borderline-significant large effect
   can have a trivial effect sitting well inside its confidence interval.

```stata
regress income educ afqt age, level(90)     // 90% CI instead of the default 95%
```

---

## 4.5 Joint tests: the F-test

Sometimes you want to know whether a **set** of variables matters collectively —
particularly when they're correlated with each other, so each looks insignificant
alone while the group is jointly significant.

```
H₀:  β₆ = β₇ = β₈ = β₉ = 0
H₁:  at least one of them ≠ 0
```

This is an F-test comparing a **restricted** model (H₀ imposed) with the
**unrestricted** model (everything in):

```
        (RSS_restricted − RSS_unrestricted) / q
F  =  ──────────────────────────────────────────
              RSS_unrestricted / (n − k)

  df1 = q      = number of restrictions (variables being tested)
  df2 = n − k  = sample size − number of parameters in the unrestricted model
```

### Worked example — the `performance.dta` model

Testing whether `tool_quality`, `manager_support` and `it_maturity` matter
jointly:

```stata
regress performance training_hours baseline_skill budget_availability ///
        project_complexity tool_quality manager_support it_maturity
test (tool_quality=0)(manager_support=0)(it_maturity=0)
```

```
RSS restricted   = 30,007.84      (those three dropped)
RSS unrestricted = 17,800.95
q  = 3       df2 = 80 − 8 = 72

      (30,007.84 − 17,800.95)/3       12,206.89/3      4,068.96
F  =  ──────────────────────────  =  ─────────────  =  ─────────  =  16.46
         17,800.95/72                    247.24          247.24

Critical value:  invFtail(3, 72, 0.05) = 2.73        p = 3.0 × 10⁻⁸
```

`16.46 ≫ 2.73`, so **reject H₀** — the three workplace-environment variables are
jointly highly significant.

The lecture's own example: `test (mom_hs=0)(mom_coll=0)(dad_hs=0)(dad_coll=0)`
gives F = 9.40 with p ≈ 0.00, against a critical value of
`invFtail(4, 2262, 0.05) = 2.38`. Same conclusion, same logic.

> **The F-distribution has only one tail.** It takes positive values only and is
> right-skewed, so there is no "±" and no halving. Everything is in the upper
> tail.

### The overall-significance test

Reported in every regression output as `F(df1, df2)` with `Prob > F` underneath.

```
H₀:  β₁ = β₂ = … = β_K = 0      (the model is no better than predicting Ȳ)
```

> **The overall F and R² are independent, and the overall F almost always
> rejects.** The lecturer: "even if we have R² close to zero, it still could be
> that your F statistic p-value is still zero. So R² and that F statistic do not
> actually work hand in hand. At all." Treat `Prob > F` as a health check on the
> whole model, not evidence about anything you care about.

### Testing whether two coefficients are equal

```
H₀:  β₂ = β₃      which is the same as      H₀: β₂ − β₃ = 0
```

```stata
regress Y X1 X2 X3
lincom X2 - X3          // "linear combination" — t-test version
test (X2 = X3)          // F-test version
```

Both are valid. With a single restriction it is technically a t-test, but the
F-version gives the same answer (`F = t²`).

> **`lincom X2 - X3` is about the *betas*, not the variables.** "Yes, it's stated
> in terms of X's, but it does refer to the betas." `test (X2=X3)` does **not**
> mean "X2 equals X3" — it means "the coefficient on X2 equals the coefficient on
> X3".

Worked on `performance.dta`: `tool_quality` (3.186) versus `manager_support`
(3.399). The difference is `−0.213` with SE 1.367, `t = −0.16`, `p = 0.876` —
nowhere near significant, so the two effects cannot be distinguished.

---

## 4.6 Three things that bias the standard errors

These affect **precision** (Chapter 5), not the coefficient estimates. They are
much less serious than bias in the coefficients — the slides say the bias tends
to be smaller, is easier to assess, and the corrections are simpler.

### Multicollinearity

An explanatory variable X that is **correlated with the key-X**. Controlling for
it reduces the operative variation in the key-X, which inflates SE(key-X).

The trade-off:

| Option | Consequence |
|---|---|
| **Keep** the correlated control | Higher standard error on the key-X (imprecision) |
| **Drop** it | Bad operative variation returns → **biased** key-X coefficient (inaccuracy) |

The decision rule from the slides: **is there any independent variation in the
key-X?** Can the key-X move on its own without the correlated X also moving?

- **Yes** → probably better to keep X in the model.
- **No** → ask whether the key-X coefficient even means anything any more with X
  held constant.

> **Everything Cal has previously been taught about multicollinearity is wrong for
> this unit.** The lecturer opens the topic with "usually I have to start with the
> battle of let's erase all of the things that you've learned about
> multicollinearity". The specific rules she rejects:
>
> - ✗ "Drop anything highly correlated." — "That is **absolutely a wrong way** to
>   go about it."
> - ✗ "Multicollinearity among the controls is a problem." — If two *controls* are
>   nearly perfectly correlated with each other but not with the key-X, it has **no
>   impact on the key-X effect** and you don't care.
> - ✗ Variance inflation factors. **VIF is not taught in this unit**, and she said
>   writing it up earns nothing.
>
> Multicollinearity in EFB222 is defined **relative to the key-X only**, and the
> response is a judgement call about bias versus precision — never an automatic
> deletion.

### Heteroskedasticity

The variance of the error term is **not the same at all values of a given X**. It
biases the standard errors; it does **not** touch the coefficient estimates.

```stata
regress income educ afqt, robust          // the entire fix
estat hettest                             // Breusch–Pagan, against the fitted values
estat hettest educ                        // …against a particular X
```

Substantive heuristic from the lecture: anything involving **money or income**
tends to be heteroskedastic, because low values are pressed against a constraint
and high values are "all over the shop".

> **Don't bother testing — just robustify.** The slides and the lecturer agree:
> an insignificant `hettest` does **not** mean there is no heteroskedasticity, and
> "at that point it's kind of pointless to do the test". Since the correction costs
> one word, "it is worth making the correction when there is even a small
> possibility of heteroskedasticity". Robust standard errors are usually a little
> larger than the classical ones — but not always.

### Clustering (correlated observations)

Observations are grouped such that there are **systematic differences between
groups** that affect the outcome beyond the key-X. Errors within a cluster are
correlated. This typically makes standard errors **too small** — you think you
have more independent information than you do.

```stata
regress Y X, vce(cluster classroom)
```

**The maths-programme example.** 10 classes × 30 students = 300 students; 5
classes randomly assigned a new maths programme.

- Were 150 *students* randomised? **No — 5 *classes* were.** The effective sample
  size for the treatment is 10, not 300.
- Within a class the teacher may be very good or very bad, so residuals in one
  class are mostly positive or mostly negative. That's Condition 2 (i.i.d.)
  breaking.

> **Adding dummies for each class does *not* fix clustered standard errors.** The
> lecturer was asked exactly this. Nine teacher dummies "might help us get a more
> accurate measure of what that β₂ is, but **it doesn't fix the standard errors**."
> Dummies address bias in the coefficient; cluster-robust standard errors address
> the precision. They are different repairs for different problems.
>
> Two judgements you have to make: **what defines a cluster** (with 50 states over
> 3 years, do you cluster by state or by year? — you have to understand the data),
> and note that you **can cluster on more than one dimension** in the same command
> if the correlation runs both ways.

---

## 4.7 The Bayesian critique of p-values

> "Extraordinary claims require extraordinary evidence." — Carl Sagan, reworking
> Laplace

The problem: a p-value tells you `P(data this extreme | H₀ true)`. What you
actually want is `P(the relationship is real | the data)`. Those are different
numbers, and converting between them requires a **prior**.

The lecture's worked figures, using a **1% significance threshold**:

| Prior belief the relationship is real | Chance it's actually real after p < 0.01 |
|---|---|
| 50/50 | **89%** — not 99% |
| Very low (a long shot) | **33%** |
| High | ~99% |

At the **5%** threshold with a 50/50 prior, the corresponding figure is about
**71%**.

### The Nicolas Cage example

```
# drownings  =  87.1 + 5.8 × (# of Nicolas Cage movies)
```

Correlation ≈ **67%** over 1999–2009, and the slope of **5.8** is statistically
significant with **p = 0.025**.

> **The multiple-comparisons argument is the point, and it's a guaranteed exam
> theme.** Repeat this exercise with 1,000 other actors. Testing at the 5% level
> means about **5% of the null hypotheses get rejected by chance alone** — so
> roughly **50** actors would show a "proven" link to swimming-pool drownings. The
> Cage result isn't evidence of anything; it's what a 5% error rate looks like when
> you run the test a thousand times.
>
> The Ch 5 tutorial runs the same trap with baseball: 500 players regressed on
> nightly lightning strikes, 7 significant at p < 0.01 (4 positive, 3 negative).
> At a 1% level on 500 tests you'd expect about 5 by chance. Seven is unremarkable.

**And nearly all null hypotheses are false anyway.** Almost everything is related
to almost everything else by some non-zero amount, so with a big enough sample
every p-value eventually drops below 0.05. Hence the slides' recommendation:
**with larger samples, lower the p-value threshold.**

---

## 4.8 Statistical vs practical significance

**The golf-putting study.** Players are 0.3 percentage points more likely to make
a bogey putt than a par putt — statistically significant at p < 0.01.

```
0.3% ≈ one extra made putt every 300 bogey putt attempts.
A round of golf is 18 holes.
```

Statistically real; **practically irrelevant**.

The reverse also happens: with too few observations, standard errors are large
and a genuinely meaningful, unbiased effect gets declared insignificant — a Type
II error.

---

## 4.9 What an insignificant estimate actually tells you

**Four possible explanations**, and only the first is "no effect":

1. There genuinely is no effect in the population.
2. There **is** an effect, but a modelling problem has biased the coefficient in
   the **opposite** direction, masking it.
3. There is a **small** effect and the data lacks the power to detect it —
   sample too small given the effect size.
4. Effects **vary across the population** — positive for some, negative for
   others — and they cancel to an average of about zero.

> **The hot hand in basketball.** Studies from 1985–2009 found no evidence and
> concluded "the hot hand is a myth". Studies from 2010 onwards, using better
> tests, found it. The earlier studies should have written **"there is no evidence
> for the hot hand"** — a claim about their data — not "the hot hand does not
> exist" — a claim about the world.
>
> **Lack of evidence is not proof of non-existence.** Same reasoning as the aliens
> in the chapter title: we haven't found them; that isn't proof they aren't there.
> This exact logic also applies to a `hettest` you failed to reject.

**When may you conclude an insignificant estimate means no relationship?** Only
when *all three* hold, which the slides call "extremely rare":

- very little imprecision (a narrow confidence interval),
- methods convincing enough to rule out modelling problems, and
- effects that can only go in one direction.

**Statistical significance is not the goal.** The goal is to advance knowledge.
An insignificant estimate on a key-X is just as valid a finding as a significant
one. Treating significance as the objective produces **p-hacking**: altering the
model, the controls, the estimation method or the variable definitions until the
p-value drops under a threshold.

---

## 4.10 Model diagnostics worth doing

| Diagnostic | Verdict |
|---|---|
| Test for heteroskedasticity | Barely worth it — **just use robust standard errors** |
| Test for non-normal errors | Insignificant results prove nothing; if you suspect it, **require a lower p-value** before claiming a relationship |
| **Check for outliers** | **Yes — this is the useful one** |

### The outlier procedure

```stata
regress income educ afqt
predict r, residual          // raw residuals
predict sr, rstandard        // standardised residuals (residual ÷ RMSE)
scatter sr income

regress income educ afqt                    // with outliers
regress income educ afqt if abs(sr) < 3     // without
```

Estimate with and without, and **look at the stability of the estimates**. If
direction and magnitude barely move, the outliers are harmless and can stay.

> **How strict a cut-off?** The slide uses `|sr| > 3`; the lecturer called that
> "a really strict one" and suggested `5` as a threshold that catches genuinely
> weird observations without deleting everyone who is merely unusual. There is no
> single right answer — **state your cut-off and show the model both ways.**
> Standardised residuals should mostly sit within ±3 anyway.

---

## Checkpoint

<details>
<summary>1. An output shows Coef. = 2.40, Std. err. = 1.15, on n = 60 with K = 4. Is the coefficient significant at 5% two-sided? At 5% one-sided if theory predicts a positive effect?</summary>

```
t  = 2.40 / 1.15 = 2.087
df = 60 − 4 − 1 = 55
```

- **Two-sided 5%:** critical value ≈ 2.004. `2.087 > 2.004` → **significant**,
  but only just. The two-sided p is about 0.041.
- **One-sided 5%:** critical value ≈ 1.673. `2.087 > 1.673` → **significant**,
  comfortably. The one-sided p is about 0.021 — half the two-sided value.

The 95% CI is `2.40 ± 2.004 × 1.15 = (0.096, 4.704)`, which excludes zero,
consistent with the two-sided test. Note how close the lower bound is to zero: an
effect of 0.1 is inside the plausible range, so the *practical* significance is
weak even though the statistical significance is there.
</details>

<details>
<summary>2. A researcher drops a control because it is correlated 0.72 with the key-X, saying "multicollinearity". Critique this.</summary>

**This is the mistake the unit explicitly targets.** Dropping a variable purely
because it is collinear with the key-X is "absolutely a wrong way to go about
it".

What dropping it actually does: the control was moving that part of the key-X's
variation from **operative** to **held-constant**. Remove it and that bad
operative variation comes straight back, so the key-X coefficient becomes
**biased**. You have traded an inflated standard error (imprecision, the lesser
problem) for a biased coefficient (inaccuracy, the greater problem).

The right question is: **can the key-X move independently of that control?** If
yes, keep it — you still have operative variation to identify the effect. If no,
keeping it may leave the key-X coefficient meaningless, and you should say so
rather than quietly deleting the control.

And a note on framing: if the correlation were between two *controls* rather than
between a control and the key-X, it would not matter at all.
</details>

<details>
<summary>3. A p-value of 0.03 is reported. A colleague says "there's only a 3% chance the effect is zero". What is wrong?</summary>

That reverses the conditional. The p-value is

```
P( an estimate this far from zero  |  the true coefficient IS zero )
```

not

```
P( the true coefficient is zero  |  this estimate )
```

Getting from the first to the second requires a **prior** probability that the
relationship exists — the Bayesian critique. With a 50/50 prior and p = 0.01, the
chance the relationship is real is about **89%**, not 99%. With a genuinely
implausible relationship it can fall to about **33%**.

Two further problems with the colleague's claim: it ignores how many other
specifications were tried (multiple comparisons — the Nicolas Cage problem), and
it ignores that a p-value says nothing about **bias**. A biased estimate can have
a beautiful p-value.
</details>

<details>
<summary>4. Adding three control variables makes Root MSE fall from 20.5 to 15.7, but the standard error on the key-X rises from 0.387 to 0.394. Explain.</summary>

Use the standard-error formula:

```
                       σ̂
SE(β̂ⱼ) = ──────────────────────────
          √[ Σ(Xⱼ−X̄ⱼ)² × (1 − R²ⱼ) ]
```

The numerator `σ̂` improved — less unexplained variation in Y, which pushes the SE
**down**. But the new controls are correlated with the key-X, so `R²ⱼ` (the key-X
regressed on the other regressors) rose sharply — here from 0.031 to 0.445. That
shrinks `(1 − R²ⱼ)` and therefore the denominator, pushing the SE **up**.

The denominator effect won. In substance: the controls removed bad operative
variation from the key-X, and some good operative variation came out with it. You
bought accuracy with precision. For a **causal** objective that is the right
trade.
</details>

<details>
<summary>5. A study of 400,000 people finds that a workplace wellness programme raises productivity by 0.04%, p &lt; 0.001. Is this a good finding?</summary>

It is a **statistically** significant finding and almost certainly not a
**practically** significant one.

- With n = 400,000 the standard errors are tiny, so almost any non-zero
  relationship will clear p < 0.001. The slides' point stands: nearly all null
  hypotheses are false by some trivial amount, and a large enough sample will find
  it.
- 0.04% is the golf-putt problem — real, and far too small to justify a
  programme.
- The unit's own recommendation: **with larger samples, lower the p-value
  threshold**, and judge on the magnitude and the practical significance of the
  values across a plausible confidence interval — not on whether p cleared a line.

The right write-up reports the effect size, the confidence interval, and an
honest statement that the effect is too small to matter operationally.
</details>

---

## Summary

- `SE` shrinks with a **larger sample**, **less unexplained variation in Y**, a
  **wider spread of X**, and **less overlap with the other regressors**.
- `t = (β̂ − β*)/SE`; `df = n − K − 1`. The printed `t` and `p` always test
  `β = 0`, two-sided — anything else you compute yourself.
- One-sided p = printed p ÷ 2. `invttail` takes the **upper-tail** area, so halve
  the level for a two-sided test.
- `Significant at 5% ⟺ 95% CI excludes 0`. The CI quantifies **imprecision only**
  and says nothing about bias.
- F-tests for joint significance:
  `F = [(RSS_r − RSS_u)/q] / [RSS_u/(n−k)]`, `df1 = q`, `df2 = n − k`, one tail.
  `lincom` / `test` for equality of two coefficients.
- Three sources of SE bias: **multicollinearity** (a trade-off, never an
  automatic deletion; VIF is not in this unit), **heteroskedasticity** (just add
  `, robust`), **clustering** (use `vce(cluster …)`; dummies do not fix it).
- p-values answer `P(data | H₀)`, not `P(H₀ | data)`. Priors and multiple testing
  both matter.
- **Statistical significance is not the goal**, and an insignificant estimate has
  four possible explanations, only one of which is "no effect".
