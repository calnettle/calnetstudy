# Practice Questions

*Exam-style. Tap each question to reveal a full model answer. All arithmetic has
been verified.*

> **These are practice questions written to mirror the unit's style — they are not
> past exam papers, and no past paper or practice exam exists.** The coordinator
> said so directly: "there is no practice exam… if I give you a practice exam,
> then I'm not going to give you the same kind of exam in the final. It's not the
> point of this unit." Your closest thing to real practice is the **Canvas quizzes
> (weeks 2–5)**, the **three portfolio parts**, and the **tutorial exercises** —
> all of which "have been designed to be geared towards the examination."

---

## Part A — Multiple choice

<details>
<summary><strong>A1.</strong> A coefficient estimate has p = 0.30. The best interpretation is:<br>(a) the effect is definitely zero — (b) if the true effect were zero, a t-statistic this extreme would arise 30% of the time, so we cannot reject zero — (c) there is a 30% chance the effect is real — (d) the estimate is significant at the 10% level</summary>

**(b).**

The p-value is `P(an estimate at least this extreme | H₀ is true)`. It is a
statement about the data *given* the null, never about the null given the data.

- **(a)** is wrong twice over — you can never prove a null hypothesis, and failing
  to reject is not the same as accepting.
- **(c)** reverses the conditional. Converting `P(data | H₀)` into
  `P(H₀ | data)` requires a prior. That's the Bayesian critique.
- **(d)** is wrong: 0.30 > 0.10.
</details>

<details>
<summary><strong>A2.</strong> The key explanatory variable is self-reported and noisy. Its coefficient estimate is most likely:<br>(a) biased away from zero — (b) biased toward zero — (c) unbiased — (d) biased in the direction of the reporting error</summary>

**(b).** Random measurement error in an **explanatory** variable attenuates the
coefficient towards zero.

**(d)** is the tempting distractor and is not a thing. Measurement error doesn't
push in "the direction of the error" — if people under-report cigarettes, the
coefficient isn't pushed downward, it's pushed towards **zero** regardless of its
sign.

The bias could go either way only if the error is **correlated** with the outcome
or with other explanatory variables, or if a subgroup is systematically miscoded.
And if the noise were in the **dependent** variable there'd be no bias at all.
</details>

<details>
<summary><strong>A3.</strong> You are estimating the effect of years of education on income and add "current occupation" as a control. This is:<br>(a) good practice, since occupation affects income — (b) controlling for a mediator, biasing the education effect toward zero — (c) controlling for a confounder — (d) irrelevant, since occupation is categorical</summary>

**(b).** Occupation is a **product of education** — more education gets you into
better-paid occupations. It sits on the causal path.

Direction: the mechanism `education → occupation → income` is **positive**, and
including a mediator biases in the **opposite** direction to the mechanism, so
the education coefficient is biased **downwards, toward zero**.

Note that (a) is *true as a statement* — occupation certainly affects income —
and still leads to the wrong action. "It affects the outcome" is never sufficient
grounds for including a control.
</details>

<details>
<summary><strong>A4.</strong> Your only objective is to forecast next year's outcome. Which pitfall still matters most?<br>(a) omitted-factors bias — (b) self-selection bias — (c) reverse causality — (d) improper reference group</summary>

**(c).** Reverse causality is the only pitfall that matters for **every**
objective. If an explanatory variable is determined *after* the outcome, you are
predicting the outcome with itself, and the forecast will look far more accurate
than it will ever be in use.

(a), (b) and (d) are all fine for forecasting. Omitted factors and self-selection
can even *help*, because you want a predictor to soak up unobservables.
</details>

<details>
<summary><strong>A5.</strong> Which statement about adjusted R² is correct?<br>(a) it measures the proportion of variation in Y explained by the model, adjusted for sample size — (b) it is the correct measure of explanatory power in a multiple regression — (c) it rises only if an added variable explains more than a randomised variable would, and is used only to compare models — (d) it should be maximised when estimating a causal effect</summary>

**(c).**

This is the lecturer's single biggest bugbear: "**adjusted R² is not a measure of
how well the model fits. That was R². Big, huge difference.**" It has no
share-of-variation interpretation at all.

- **(a)** and **(b)** both give it R²'s interpretation. Wrong.
- **(d)** is wrong twice: adjusted R² isn't a fit measure, and *chasing* fit is
  actively harmful for causal work — it pushes you toward including mediators and
  outcomes.

Its only legitimate use is deciding whether an added variable earns its place, and
even then only when you're building a **prediction** model.
</details>

<details>
<summary><strong>A6.</strong> A control variable is correlated 0.68 with your key-X. The correct response is:<br>(a) drop the control — multicollinearity invalidates the estimates — (b) drop the control if its VIF exceeds 5 — (c) weigh the loss of precision against the bias from omitting it, and ask whether the key-X has independent variation — (d) nothing; correlation between regressors has no consequences</summary>

**(c).**

- **(a)** is the pre-loaded misconception the unit explicitly targets: "that rule
  of thumb of just getting rid of anything collinear is just not right… absolutely
  a wrong way to go about it." Dropping it returns bad operative variation to the
  key-X and **biases** the coefficient — trading a lesser problem (imprecision) for
  a greater one (inaccuracy).
- **(b)** invokes a tool that **is not taught in this unit**. Answers based on
  knowledge from elsewhere can score zero.
- **(d)** is wrong: it inflates SE(key-X) via the `(1 − R²ⱼ)` term.

The decision rule is: can the key-X move independently of the control? If yes,
keep it. If no, ask whether the key-X coefficient still means anything.
</details>

<details>
<summary><strong>A7.</strong> A dummy variable model of wages includes `female` and `married` and their interaction, with single men as the reference group. The interaction coefficient is −2.5. This means:<br>(a) married women earn $2,500 less than single men — (b) the marriage premium is $2.50 smaller for women than for men — (c) women earn 2.5 units less when married — (d) marriage lowers women's wages by 2.5</summary>

**(b).** An interaction coefficient is always a **difference in an effect**, never
a level.

If the model is `wage = 12.0 + 3.5 married − 4.0 female − 2.5 (married × female)`:

- Marriage premium for men: **+3.5**
- Marriage premium for women: **3.5 − 2.5 = +1.0** — still positive
- Married women vs single men: `3.5 − 4.0 − 2.5 = −3.0`

So (c) and (d) are both wrong — marriage is still associated with *higher* wages
for women, just less so. (a) confuses the interaction with a level difference.
</details>

<details>
<summary><strong>A8.</strong> Which of these is a valid reason to exclude a variable from a causal model?<br>(a) its coefficient is statistically insignificant — (b) including it lowers the adjusted R² — (c) it is determined after the key-X and lies on the path to the outcome — (d) it is highly correlated with another control</summary>

**(c)** — that is a mediator.

(a), (b) and (d) are all on the lecturer's explicit list of criteria you must
**not** use: "whether these controls in any way affect the goodness of fit —
R², adjusted R², even worse AIC, BIC — **not of interest. So stop it there.**"
Statistical significance of a control is on the same list, and correlation
*between two controls* has no effect on the key-X at all.
</details>

---

## Part B — Short answer

<details>
<summary><strong>B1.</strong> A regression output shows Coef. = −0.84, Std. err. = 0.31, on n = 150 with 5 explanatory variables. State the hypotheses, compute the t-statistic and the 95% confidence interval, and give your conclusion.</summary>

**Hypotheses.** For a two-sided significance test:

```
H₀: β = 0        H₁: β ≠ 0
```

**Test statistic.**

```
t   = −0.84 / 0.31 = −2.710
df  = n − K − 1 = 150 − 5 − 1 = 144
```

**Critical values** (`invttail(144, 0.025)` etc.):

| Level | Two-sided critical value | Reject? |
|---|---|---|
| 10% | ±1.656 | Yes |
| 5% | ±1.977 | Yes |
| 1% | ±2.610 | **Yes** |

**Confidence interval.**

```
95% CI = −0.84 ± 1.977 × 0.31 = −0.84 ± 0.613 = (−1.453, −0.227)
```

**Conclusion.** `|t| = 2.71 > 2.61`, so the coefficient estimate is significantly
different from zero **at the 1% level** (`p = 0.0076`). The 95% CI excludes zero,
which agrees. The estimated effect is negative.

Two things to add for full marks: the effect is significant *and* the plausible
range runs from −1.45 to −0.23, so its **practical** magnitude is quite uncertain
— a sixfold range. And significance says nothing about **bias**; whether −0.84 is
the causal effect depends entirely on the specification.
</details>

<details>
<summary><strong>B2.</strong> A researcher has a directional expectation that a coefficient is positive. The printed output shows Coef. = 2.6, Std. err. = 1.9, P>|t| = 0.173, on n = 240 with 6 explanatory variables. Can they claim a significant positive effect at 10%?</summary>

**Yes, at 10% one-sided — and this is worth being precise about.**

```
t   = 2.6 / 1.9 = 1.368
df  = 240 − 6 − 1 = 233
```

The printed `P>|t| = 0.173` is the **two-sided** p-value. For a one-sided test in
the direction the estimate actually points:

```
one-sided p = 0.173 / 2 = 0.086
```

`0.086 < 0.10` → **significant at the 10% level, one-sided.**

Check against the critical value: `invttail(233, 0.05) = 1.651`, and
`1.368 < 1.651` — hold on, that says *don't* reject.

**Resolve the conflict.** The critical value for a **10% one-sided** test is
`invttail(233, 0.10) = 1.285`, not 1.651. `1.368 > 1.285` → reject. The 1.651
figure is the 5% one-sided (or 10% two-sided) cut-off. Getting the tail area right
is the whole exercise:

| Test | Tail area to feed `invttail` | Critical value |
|---|---|---|
| 10% one-sided | 0.10 | 1.285 |
| 5% one-sided **=** 10% two-sided | 0.05 | 1.651 |
| 5% two-sided | 0.025 | 1.970 |
| 1% two-sided | 0.005 | 2.597 |

**Caveats the marker wants.** The one-sided test is only legitimate if the
direction was decided from **theory, before seeing the data**. Choosing it
afterwards because the two-sided test failed is p-hacking. And 10% significance
on a borderline estimate is weak evidence — the 95% CI is `(−1.14, 6.34)` and
comfortably includes zero.
</details>

<details>
<summary><strong>B3.</strong> Explain, using the standard-error formula, three distinct reasons a coefficient estimate might have a large standard error.</summary>

```
                          σ̂
SE(β̂ⱼ) = ────────────────────────────────
           √[ Σ(Xⱼ − X̄ⱼ)² × (1 − R²ⱼ) ]
```

1. **Large `σ̂` (Root MSE)** — a lot of unexplained variation in Y. The model
   fits poorly, so the estimate wobbles. Numerator effect.
2. **Small `Σ(Xⱼ − X̄ⱼ)²`** — either a **small sample** or a **narrow range** of
   X values. If everyone in your sample has between 4 and 5 hours of TV a day, you
   have almost no leverage to detect how TV affects BMI. Denominator effect.
3. **Large `R²ⱼ`** — `Xⱼ` is largely explained by the other regressors, i.e.
   **multicollinearity**. It has little independent operative variation left, so
   its relationship to Y is hard to separate from theirs. Denominator effect.

A fourth answer, if the question invites it: **clustering** and
**heteroskedasticity** don't feature in this formula at all — they mean the
formula itself gives the *wrong* standard error, which is a different problem with
a different fix (`vce(cluster …)` and `, robust`).
</details>

<details>
<summary><strong>B4.</strong> `ln(wage)‾ = 1.24 + 0.037 educ + 0.018 exper`. Interpret both slope coefficients. Then explain why you cannot compare this model's R² to that of `wage‾ = β₀ + β₁educ + β₂exper`.</summary>

The dependent variable is logged and the explanatory variables are not — this is
**log-linear**, so each coefficient is multiplied by 100 to give a percentage.

- `educ`: one more **year of education** is associated with a
  `0.037 × 100 = 3.7%` higher wage, holding experience constant, on average.
  (Exact: `exp(0.037) − 1 = 3.77%`. The approximation is fine at this size.)
- `exper`: one more **year of experience** is associated with a **1.8%** higher
  wage, holding education constant, on average.

**Why the R²s aren't comparable.** R² is `ExSS/TSS`, and TSS is the total
variation in the **dependent variable**. `wage` and `ln(wage)` are different
dependent variables with different total variation, so the two R²s are measuring
different things — "apples and oranges".

**The fix taught in the unit:** define `R² = corr(Y, Ŷ)²` for both models, using
the *actual* Y in both cases.

```stata
* level model
regress wage educ exper
predict wagehat
correlate wage wagehat            // square it → identical to the reported R²

* log model
regress lwage educ exper
predict lwagehat
generate wagehat2 = exp(lwagehat)  // back-transform to dollars
correlate wage wagehat2            // square it → now comparable
```

Note it doesn't matter whether the **explanatory** variables are transformed —
R² only involves the outcome and its prediction.
</details>

<details>
<summary><strong>B5.</strong> A researcher tests whether four industry dummies jointly matter. The restricted model has RSS = 8,420; the unrestricted model has RSS = 7,610, with n = 300 and 11 explanatory variables. Conduct the test.</summary>

```
H₀: β_ind1 = β_ind2 = β_ind3 = β_ind4 = 0
H₁: at least one is non-zero
```

```
q   = 4  (restrictions)
k   = 11 + 1 = 12  (parameters in the unrestricted model)
df2 = n − k = 300 − 12 = 288

      (8,420 − 7,610)/4        810/4        202.5
F  =  ─────────────────   =  ───────────  =  ───────  =  7.66
        7,610/288              26.42          26.42
```

Critical value `invFtail(4, 288, 0.05) = 2.40`; p ≈ 0.00001.

`7.66 > 2.40` → **reject H₀.** The four industry dummies are **jointly
significant at 1%**.

**Why this test exists.** Correlated variables can each look insignificant
individually while being strongly significant as a group — their shared variation
gets split across them. If any of the four had an individually insignificant
t-statistic, the joint test is the one that settles it.

In Stata: `test (ind1=0)(ind2=0)(ind3=0)(ind4=0)`. And note the F-distribution has
**only one tail** — there is no halving and no ±.
</details>

<details>
<summary><strong>B6.</strong> `score‾ = 42.1 + 0.90 hours − 0.03 hours²`. What is the effect of one more hour of study for someone currently studying 5 hours? 20 hours? At what point does more study stop helping?</summary>

The marginal effect of a quadratic is not the `hours` coefficient — it depends on
where you are:

```
∂score/∂hours  =  β₁ + 2β₂ × hours  =  0.90 − 0.06 × hours
```

| Currently studying | Effect of one more hour |
|---|---|
| 5 hours | `0.90 − 0.06(5)` = **+0.60 points** |
| 20 hours | `0.90 − 0.06(20)` = **−0.30 points** |

**Turning point:**

```
hours*  =  −β₁ / (2β₂)  =  −0.90 / (2 × −0.03)  =  0.90/0.06  =  15 hours
```

Beyond **15 hours** of study, additional hours are associated with *lower* scores
— exhaustion, diminishing returns, or displaced sleep.

**Two things a strong answer adds.** First, `0.90` alone is only the effect at
`hours = 0`; quoting it as "the effect of study" is wrong. Second, **check that 15
hours is inside the observed range of the data.** If nobody in the sample studies
more than 12 hours, the model has not observed the downturn — it has extrapolated
it, and you should say so rather than advising anyone to cap their study at 15
hours.
</details>

<details>
<summary><strong>B7.</strong> Distinguish "holding a factor constant" from "adjusting for a factor". When is each phrase correct?</summary>

| | Holding constant | Adjusting / controlling for |
|---|---|---|
| Correct when the control is | **Categorical** (a dummy or an exhaustive set) | **Quantitative**, non-categorical |
| What actually happens | Within each category the control genuinely does not vary, so every comparison is like-for-like | Only the **linear** relationship between the control and the key-X is removed |
| What's left over | Nothing, within the category | Non-linearity, imprecision in the estimated relationships, and anything else omitted |

**Why it matters.** With a quantitative control it is "practically impossible to
fully control for" the factor. Even bucketing it into bands doesn't fix it,
because variation *within* each band remains bad operative variation.

**Why it's not just pedantry.** Chapter 13 lists "**overstating the model's
ability to hold factors constant**" as an unethical practice. Writing "we held
family income constant" when income entered as a continuous variable claims more
than the model delivers. The lecturer corrected her own slide wording live on
this: "strictly speaking, I should be saying *holding the soil quality constant*
and *controlling for* tree height, because we can't hold the tree height exactly
constant."
</details>

<details>
<summary><strong>B8.</strong> A study finds an insignificant coefficient on a key-X. Give four distinct reasons this might occur, only one of which is "there is no effect".</summary>

1. **There genuinely is no effect** of that variable on the outcome in the
   population.
2. **There is an effect, but a modelling problem is biasing the estimate in the
   opposite direction**, masking it. (An upward-biased estimate of a negative
   effect can land on zero.)
3. **The effect is small and the data lacks the power to detect it** — sample too
   small, narrow range of X, or too much unexplained variation in Y.
4. **Effects vary across the population.** Some people are affected positively,
   some negatively, some not at all, and the average of those cancels to about
   zero — or gets drowned out by the zeros.

**The line to write:** *lack of evidence is not proof of non-existence.* The unit
illustrates it with the hot hand in basketball — 25 years of studies found no
evidence and concluded "the hot hand is a myth"; better-powered studies from 2010
found it. Those earlier papers should have written "there is no evidence for the
hot hand", a claim about their data, not "the hot hand does not exist", a claim
about the world.

You may only conclude "no relationship" when the CI is narrow, the design
convincingly rules out bias, **and** the effect can only run one direction —
"extremely rare".
</details>

---

## Part C — Case-based questions

### Case 1 — Corporate training and productivity

> A consultancy is asked whether an employer's voluntary training programme raises
> staff productivity. They estimate, on 80 employees:
>
> | Variable | Coef. | Std. err. | t | P>\|t\| |
> |---|---|---|---|---|
> | training_hours | 1.306 | 0.394 | 3.32 | 0.001 |
> | baseline_skill | 3.060 | 1.278 | 2.40 | 0.019 |
> | tool_quality | 3.186 | 1.028 | 3.10 | 0.003 |
> | _cons | −19.33 | 12.89 | −1.50 | 0.138 |
>
> `R² = 0.575`, `Root MSE = 15.72`. A colleague re-runs the model adding
> `skill_growth` (the improvement in each employee's skills over the year). The
> training coefficient falls to **0.946** and `R²` rises to **0.645**.

<details>
<summary><strong>C1 (a).</strong> Interpret the training_hours coefficient and assess its significance three ways.</summary>

**Interpretation.** One extra hour of formal training is associated with a
**1.31-point higher productivity score**, holding baseline skill and tool quality
constant, on average.

**Significance, three ways:**

1. **t-statistic:** `1.306/0.394 = 3.32`. With `df = 80 − 3 − 1 = 76`, the 1%
   two-sided critical value is about 2.64. `3.32 > 2.64` → significant at 1%.
2. **p-value:** `0.001 < 0.01` → significant at the 1% level.
3. **Confidence interval:** `1.306 ± 1.992 × 0.394 = (0.521, 2.091)`, which
   **excludes zero** → significant at 5%, consistent with the other two.

The correct phrasing is "**the coefficient estimate on `training_hours`** is
significant at the 1% level" — not "training hours is significant".
</details>

<details>
<summary><strong>C1 (b).</strong> Your colleague argues the second model is better because R² is higher. Respond.</summary>

**Your colleague is wrong, and the higher R² is the evidence that they're wrong.**

`skill_growth` is a **mediator**: training causes skill growth, and skill growth
causes higher productivity. It sits on the causal path from key-X to outcome.
Controlling for it asks "among employees whose skills improved by the same amount,
does training help?" — which removes the main mechanism by which training works.

**Predict the direction before looking:**

```
training → skill_growth    positive
skill_growth → productivity positive
mechanism = (+) × (+) = POSITIVE
Mediator included → bias in the OPPOSITE direction → DOWNWARD
```

And that is exactly what happened: **1.306 → 0.946**, a fall of 28%.

On R²: adding *any* variable raises R², and a mediator raises it a lot because it
sits close to the outcome. For a **causal** objective, R² is not a selection
criterion — "that's absolutely what you should not be looking at." The model with
the better fit is the one with the biased coefficient.

**Recommendation:** report the model **without** `skill_growth`. The mediator
model answers a different question ("what is the effect of training that does
*not* operate through skill improvement?"), which nobody asked.
</details>

<details>
<summary><strong>C1 (c).</strong> Can the consultancy claim training causally raises productivity by 1.31 points per hour? Identify the two most serious remaining threats and their directions.</summary>

**No — 1.31 should be presented as an upper bound, not a causal estimate.**

**Threat 1 — self-selection (PITFALL #3).** The programme is **voluntary**.
Employees choose their own training hours, and the ones who choose more are those
who expect the biggest return. Productivity is a **good** outcome, so the rule
gives a **positive** bias: the estimate overstates the true effect.

Worse, the key-X is a **conscious decision**, which the unit says makes this
"practically impossible to address" without randomisation. Randomising training in
a workplace isn't feasible, so the honest response is to acknowledge it.

**Threat 2 — omitted-factors bias from motivation (PITFALL #2).** Motivation is
unobservable and sits in the error term.

```
motivation → training_hours    positive
motivation → productivity      positive
mechanism = (+) × (+) = POSITIVE
Confounder left out → bias in the SAME direction → UPWARD
```

**Also worth a sentence — reverse causality (PITFALL #1).** If high performers are
nominated for advanced courses, then productivity → training is positive, giving a
third **upward** bias. The fix is available in principle: use training hours
recorded **before** the performance period began.

**Conclusion.** Three separate forces push the estimate up and none of them is
easily removable. **The true causal effect is very likely below 1.31 points per
hour.** Recommend (i) obtaining lagged training data to close off reverse
causality, (ii) explicitly reporting 1.31 as an upper bound, and (iii) if the
employer will fund it, piloting the programme with randomly assigned places.
</details>

---

### Case 2 — School spending and test scores

> A state government wants to know whether spending more per student improves
> Year 4 maths results. Two models are estimated on 1,800 schools:
>
> | | Model 1 | Model 2 |
> |---|---|---|
> | `expenditure per student` | 0.0083 (0.0021) | 0.0011 (0.0018) |
> | `Year 4 reading score` | — | 0.71 (0.04) |
> | R² | 0.06 | 0.48 |
>
> *(standard errors in parentheses)*

<details>
<summary><strong>C2 (a).</strong> What is the objective, and which pitfalls are therefore in play?</summary>

**Objective: estimating a causal effect** — "does spending *improve* results?"
implies the government could act on the spending lever. Signal words: "improve",
and an implied "how much".

Because it is causal, **all seven pitfalls apply**. None can be excused.

Contrast: if the question were "which school characteristic best predicts Year 4
maths results?", the objective would be *determining predictors*, only reverse
causality, measurement error and mediators would matter, and the right approach
would be one variable per regression rather than a multiple model.
</details>

<details>
<summary><strong>C2 (b).</strong> Model 2 has a far better fit and a much smaller expenditure effect. Which model should be reported, and why?</summary>

**Model 1.**

Year 4 **reading score** is an **outcome of the same school resources** — it is
either a mediator (spending buys better teaching, which raises both reading and
maths) or a parallel outcome measured at the same time. Either way, controlling
for it asks "among schools whose students read equally well, does spending raise
maths scores?", which removes almost all of the spending effect.

Direction check:

```
expenditure → reading score    positive
reading score → maths score    positive
mechanism = (+) × (+) = POSITIVE
Mediator/outcome included → bias in the OPPOSITE direction → DOWNWARD
```

Observed: **0.0083 → 0.0011**, an 87% collapse. Predicted and confirmed.

The R² leaping from 0.06 to 0.48 is not evidence for Model 2 — it is the expected
consequence of adding a variable that is nearly the outcome itself. Model 2 is
close to regressing maths scores on maths scores.
</details>

<details>
<summary><strong>C2 (c).</strong> Even Model 1 is not a clean causal estimate. Give one pitfall other than mediators, with its direction, and one concrete fix.</summary>

**Omitted-factors bias from community affluence (PITFALL #2).**

```
affluence → expenditure per student   positive  (wealthier areas fund schools better)
affluence → maths scores              positive  (tutoring, books, parental education, stability)
mechanism = (+) × (+) = POSITIVE
Confounder left out → bias in the SAME direction → UPWARD
```

So even Model 1's 0.0083 **overstates** the causal effect of spending.

**Fix:** control for a school-level measure of socioeconomic status — median
household income in the catchment, or the proportion of students on
free/reduced-price lunch. That converts affluence from bad *operative* variation
into *held-constant* variation. Note it can only ever be an **adjustment**, not a
true holding-constant, since income is quantitative.

**Alternative answers that would also earn marks:**

- **Reverse causality (#1):** underperforming schools may be *given* extra funding
  as an intervention. That arrow is negative, so it biases the estimate
  **downward** — pushing against the affluence bias. Fix: use expenditure lagged
  several years, decided before the results were known.
- **Improper reference group (#6):** if expenditure has been dichotomised into
  "high" and "low", the low-spend schools still spend a lot — a lower-intensity
  dose — biasing the estimate **towards zero**.
</details>

---

### Case 3 — Ranking hospital surgeons

> A health department wants to identify surgeons who perform better or worse than
> expected. They estimate a model of 30-day patient mortality on: patient age,
> number of comorbidities, whether the surgery was an emergency, hospital
> post-operative infection rate, and surgeon experience in years. They then rank
> surgeons by the average residual for their patients.

<details>
<summary><strong>C3 (a).</strong> What is the objective, and how should the residuals be read?</summary>

**Objective: adjusting outcomes for various factors** — gauging relative
performance / value-added. The signal is "better or worse **than expected**".

**Reading the residuals.** Residual = actual − predicted. With mortality as the
outcome, **higher is worse**, so:

- **Positive residual** → more deaths than the model predicted → the surgeon
  performed **worse** than expected.
- **Negative residual** → **better** than expected.

Note that this is the opposite of the usual "positive residual = over-performed",
purely because the outcome variable is a bad thing. **Always state which direction
is good before you rank anything** — a sign convention error here would invert the
entire league table.
</details>

<details>
<summary><strong>C3 (b).</strong> Two of the five control variables should not be there. Identify them and explain why.</summary>

**1. Hospital post-operative infection rate.** This is a **measure of performance**
— partly of the surgeon's own technique and the theatre practices they influence.
Adjusting for it asks "among hospitals with equal infection rates, whose patients
survive?", which excuses a surgeon whose patients keep getting infected. It is a
mediator of the very thing being measured. **Remove it.**

**2. Surgeon experience in years.** This holds different groups to different
standards. If experienced surgeons average better outcomes, adjusting for
experience sets a *higher bar* for them and a *lower bar* for junior surgeons —
so a junior surgeon with worse absolute outcomes can rank above a senior one with
better outcomes. This is the John-and-Jane problem exactly, and the same logic
that rules out adjusting recruiter performance for gender. **Remove it.**

**The three that stay** — patient age, comorbidities, emergency status — are all
determined **before** the surgeon operates, are outside the surgeon's control, and
genuinely level the playing field for case mix.

The distinguishing test in one line: **adjust for what the subject inherited;
never for what the subject produced.**
</details>

<details>
<summary><strong>C3 (c).</strong> Which pitfalls matter for this objective, and is there one specific to ranking by residuals?</summary>

**All seven matter**, because adjusting outcomes contains a causal estimation
problem: if any control's effect is mis-estimated, you will under- or over-adjust
for it, and every surgeon's residual is wrong by that amount. Accuracy *and*
precision both matter.

**The most dangerous here: PITFALL #7, over-weighting groups.** If the model
includes hospital dummies (or is estimated within hospitals), and the effect of
case mix differs across hospitals, and the *variance* of case complexity differs
across hospitals, then the estimated adjustment is dragged towards the
high-variance hospitals. Surgeons at hospitals whose case mix barely varies get
adjusted using coefficients estimated mostly from somewhere else.

**Also live:**

- **#4 Measurement error / wrong concept.** "Comorbidities" as a count treats one
  serious condition the same as three trivial ones — an imperfect proxy for case
  severity. Attenuation means the model **under-adjusts** for case mix, which
  systematically penalises surgeons taking the hardest cases.
- **#3 Self-selection.** Surgeons who can decline high-risk cases will look
  better. That's not skill; it's case selection.
- **#6 Improper reference group.** If experience were kept and entered as
  "senior vs junior", the junior group still contains a wide range.

**Recommendation:** report the rankings with confidence intervals, not as a point
ranking. With small patient counts per surgeon, most of the apparent spread will
be imprecision rather than performance, and a league table presented without
uncertainty will be read as fact.
</details>

---

## Part D — Rapid fire

<details>
<summary>Ten quick ones. Answers below.</summary>

1. What is `df` for a regression with n = 500 and 12 explanatory variables?
2. `R² = ExSS / TSS`. Write the other expression for R².
3. Which pitfall's direction of bias is "towards zero if the error is random"?
4. Which pitfall matters for **all four** regression objectives?
5. What is the one legitimate use of adjusted R²?
6. Which two objectives require Condition 5 (key-X uncorrelated with the error)?
7. `Ê = 3.30 + 0.0040 CS` becomes `Ê = 3.92 − 0.0098 CS + …` when professor
   dummies are added. What happened?
8. `invttail(200, 0.05)` — is that the critical value for a 5% or a 10%
   two-sided test?
9. Name the direction-of-bias rule for a mediator wrongly included.
10. Your key-X coefficient is +2.0 and you have argued the bias is downward. What
    do you tell the client?

---

1. `500 − 12 − 1 = 487`.
2. `R² = 1 − RSS/TSS`.
3. **Measurement error** (in an explanatory variable).
4. **Reverse causality.**
5. Judging whether an **added variable earns its place** — and only when the
   objective is fit/prediction. It is never a share-of-variation statistic.
6. **Estimating causal effects** and **adjusting outcomes**. Not needed for
   forecasting or determining predictors.
7. Professor quality was **bad operative variation** — better professors were
   given bigger classes. The dummies moved it into the held-constant box,
   revealing the negative within-professor effect. A sign flip on adding controls
   is a finding, not an error.
8. **10% two-sided** (or 5% one-sided). For a 5% two-sided test you need
   `invttail(200, 0.025)`.
9. **The opposite of the sign of the mechanism.** (Positive mechanism →
   downward bias.)
10. That +2.0 is a **lower bound** — the true effect is larger than 2.0. Never
    stop at "it's biased"; convert the direction into a statement about the truth.
</details>

---

## How to use these

1. **Do them closed-book, with a pen.** The exam is closed book, pen and paper,
   in person. A calculator is permitted but the lecturer doesn't think you'll need
   one — "we haven't done a lot of maths in here".
2. **For every case sub-question, write the five-step routine down the margin
   first** (objective → pieces → read → critique → conclude), then fill it in. The
   structure earns marks even when a specific point escapes you.
3. **Never leave a direction of bias as a direction.** Always finish the sentence:
   "…so the true effect is probably smaller than the 1.31 reported."
4. Then go and do the **Canvas quizzes for weeks 2–5** and re-read your own
   **portfolio parts** — those were built to mirror the exam.
