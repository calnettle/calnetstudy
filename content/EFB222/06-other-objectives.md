# Topic 6 — Strategies for the Other Regression Objectives

*Chapter 7. Everything so far assumed you wanted a causal effect. Three of the
four objectives don't — and the rules change completely.*

---

## 6.1 Identify the objective first

There is **no statistic that tells you the objective**. You work it out from the
research question, and the lecturer calls it "the first step — if you get your
objective right, you know what to watch out for. That's the whole key."

| Objective | The question sounds like | Tell |
|---|---|---|
| **1. Causal effect** | "How **much** does X affect Y?" "Did the policy **cause** …?" | You are the one who could **act** on X |
| **2. Forecasting** | "What **will** Y be next year?" "What's the best **guess** for …?" | A future value you don't yet observe |
| **3. Determining predictors** | "What is the **best predictor** of …?" "Does X **predict** Y?" | You **observe** X as a signal; you don't act on it |
| **4. Adjusting outcomes** | "**Given** their circumstances, who performed best?" "Which observations are anomalous?" | The phrase "**given**" or "accounting for" |

### The classification drill (with the lecturer's answers)

| Question | Objective |
|---|---|
| Who was the most effective new-car salesman for Ford last year, **given the strength of the economy in their area**? | **Adjusting outcomes** |
| How does attending a charter school affect test scores for inner-city students? | **Causal** |
| How much is local car sales impacted by advertising expenses? | **Causal** |
| What is the best guess for how many ER visits from drug overdoses each city will have this year? | **Forecasting** |
| How much will the dollar value of US imports be next year? | **Forecasting** |
| What is the single best predictor of whether a female will give birth before 18? | **Determining predictors** |
| How did the Clean Air Act affect the intelligence of people who grew up in large cities? | **Causal** |
| How much does consistently reading chapters ahead of class affect your grade? | **Causal** |
| Are areas with bus lanes experiencing less congestion? | **Determining predictors** |
| Are areas where bus lanes **were installed** now less congested? | **Causal** |
| **Given current property market trends**, evaluate the effectiveness of an advertising campaign | **Adjusting outcomes** |
| Does a recently renovated kitchen predict higher auction attendance? | **Determining predictors** |

> **"How much" is the causal giveaway.** The lecturer: "if there is a *how much*,
> then that is pretty, pretty certainly it's going to be a causal one." Compare:
> "how much is car advertising impacting sales?" (causal) versus "how well does
> advertising expenditure predict sales?" (predictors).

> **Causal vs determining-predictors is the pair that trips people up, and the
> lecturer says so.** Her distinction is about **who acts**: "I'm cleaning my
> workspace, therefore I'm going to be productive — I'm responsible for that
> causal effect. But if I *observe you* cleaning up and then see you were
> productive, I'd say people who clean their workspaces — **that seems to be a
> predictor**." Same variables, different question.

---

## 6.2 Objective 2 — Forecasting / predicting an outcome

**Goal:** the most accurate prediction of Y possible. You do not care about causal
effects at all.

**Strategy:** "throw in the kitchen sink of explanatory variables" — with three
exceptions.

1. **Make sure the inputs are actually obtainable** by whoever will use the
   model. The lecturer's line: "**try not to make a forecasting model out of
   magic**."
2. **Avoid reverse causality** — every explanatory variable must be determined
   **before** the outcome. Otherwise you are predicting Y with itself, and the
   forecast looks far more accurate than it is.
3. **Check the demographics.** Would including race, ethnicity, gender or a close
   proxy mean treating people differently based on group membership? If so, leave
   it out.

### Which PITFALLS matter, and why

| # | PITFALL | Matters? | Why |
|---|---|---|---|
| 1 | Reverse causality | **YES** | Predicting the outcome with itself → exaggerated accuracy |
| 2 | Omitted-factors bias | No | It's a *feature* — one variable soaking up the explanatory power of others is fine |
| 3 | Self-selection bias | No | Also fine; can even improve the forecast |
| 4 | Measurement error | **Depends** | Single subject: less precise but not biased, and the noisy variable still beats leaving it out. **Multiple subjects: can bias the predictions systematically.** |
| 5 | Mediators as controls | No | More variables = better forecast, **as long as the mediator occurs before the outcome** |
| 6 | Improper reference group | No | Doesn't affect predictive power |
| 7 | Over-weighting groups | Rarely | Forecasting rarely splits the model into groups |

### Worked example — the lemon trees, forecasting version

For the **causal** effect of water, tree height was a mediator and had to come
out. For **forecasting** year-5 lemon production? **Put it in.** Height is a
strong predictor, it is measured before the harvest, and predictive power is the
only criterion.

### Worked example — car insurance

```
Y = whether the person had an accident this year
X = accidents in the last ten years, college degree, age, income, white-collar job
```

- **Causal effect of a college degree on accidents:** you'd need a careful
  specification and to worry about all seven pitfalls.
- **The insurance company's objective:** forecasting. So throw everything in —
  except stop and ask whether age, income and occupation are proxies for
  characteristics you shouldn't price on.

### Measuring forecast accuracy

```
                              1  ⁿ
Average Forecast Error  =  ── Σ (Yᵢ − Ŷᵢ)
                              n ⁱ⁼¹

                                    ┌─────────────────┐
                                    │  1  ⁿ           │
Root Mean Square Forecast Error =  ╲│ ── Σ (Yᵢ − Ŷᵢ)² │
                                    ╲  n ⁱ⁼¹
```

Both can be computed **in-sample**, **out-of-sample**, or on **new data**.

> **The in-sample forecast error is always flattering, and it means very little.**
> The lecturer: "your in-sample forecast error is typically quite small because you
> can tweak the model as best you can. **R² now plays a role absolutely in here.**
> [Out-of-sample] typically doesn't work as well. In-sample is good for model
> building, but you'd better check that out-of-sample forecast as well." And on the
> real thing: "there's no way of knowing how badly that goes, **because the future
> hasn't happened yet**."

> **Watch the Average Forecast Error's sign convention.** Because positive and
> negative errors cancel, an AFE near zero can hide huge errors in both directions.
> RMSFE squares them first, so it can't cancel. If a question asks which model
> forecasts better, RMSFE is the more informative statistic.

**On machine learning:** the slides note it can be highly complex and costly, may
identify only temporary relationships, and that "greater complexity often comes
with greater uncertainty".

---

## 6.3 Objective 3 — Determining predictors

**Goal:** find out whether a factor predicts an outcome, how well it does, or what
the best predictors are. No causal claim.

**Strategy: keep it simple.** Per regression, include just:

- **one** explanatory variable, or
- **one** set of dummy variables, or
- **one** interacted set of categories.

Then compare across regressions.

> **This is the opposite of the forecasting strategy, and the contrast is
> examinable.** Forecasting → kitchen sink, because you want the best combined
> prediction. Determining predictors → one variable at a time, because you want to
> know how much *that variable alone* tells you. Mixing them up inverts the
> answer.

### Why one at a time

"Consider practical use: the ones using the resulting information may not have the
knowledge of how to combine effects of multiple predictors." The pedestrian
deciding whether to step out can see how expensive the approaching car is. They
cannot see the driver's education, income or personality. So the useful question
is "**does the cost of the car alone predict whether the driver stops?**"

### How to judge which predictor is "best"

| Criterion | Use it? |
|---|---|
| Raw coefficient size | **No** — it depends on the variable's scale |
| **Standardised coefficients** | Yes — that's what they're for |
| **R²** "well above the others" | Yes — the lecturer says this is the easier route |
| **RMSE** "well below the others" | Yes |
| Variation in the explanatory variable | Yes — a variable that barely moves can't predict much |

> **There is no threshold.** The lecturer: "there is no threshold that we are
> cutting something being a really good predictor… you compare them all and you
> just see which one is doing well." So the answer format is comparative — "X has
> an R² of 0.31, well above the next best at 0.09" — never "X has R² > 0.3,
> therefore it is a good predictor."

### Which PITFALLS matter

| # | PITFALL | Matters? | Why |
|---|---|---|---|
| 1 | Reverse causality | **YES** | You'd be predicting the outcome with itself |
| 2 | Omitted-factors bias | No | You may **want** the predictor to soak up unobservables — it gives it more predictive power |
| 3 | Self-selection bias | No | Same reasoning |
| 4 | Measurement error | **YES** | Noise understates how well the variable can predict. (It doesn't mean you should drop it.) |
| 5 | Mediators as controls | **YES** | It steals predictive power from your single factor, and violates the one-variable-at-a-time principle |
| 6 | Improper reference group | No | Doesn't affect predictive power |
| 7 | Over-weighting groups | Rarely | Rarely applicable |

---

## 6.4 Objective 4 — Adjusting outcomes / anomaly detection

**Goal:** factor out influences that reflect determinants of performance **other
than the actions of the subjects being compared**, so you can measure how they
performed relative to expectation — "value-added". Anomaly detection is the same
machinery, looking for observations abnormally far from expectation.

**Two approaches:**

1. **Adjust for everything in the model** — just use the **residual**.
2. **Adjust for a subset** — subtract out only the influence of those specific
   factors.

```
Model:                Y = β₀ + β₁X₁ + β₂X₂ + ε

Adjust for BOTH:      Y − (β̂₀ + β̂₁X₁ + β̂₂X₂)      ← this is just the residual
Adjust for X₂ ONLY:   Y − β̂₂X₂
```

> **Positive residual → performed better than expected. Negative residual →
> performed worse.** Because residual = actual − predicted. Get this the wrong way
> round and the entire ranking inverts.

### Worked example — payroll and wins in baseball

```
wins‾ᵢ = 71.24 + 0.09 × payrollᵢ

Relative wins  =  winsᵢ − (71.24 + 0.09 × payrollᵢ)
```

A positive relative win count means the team got more out of its payroll than
expected.

> **The slide prints this formula with a minus sign inside the bracket —
> `wins − (71.24 − 0.09 × payroll)`.** That is a typo. The predicted value is
> `71.24 **+** 0.09 × payroll`, so the residual must subtract that. With the minus
> version, a high-payroll team would get credited twice for its payroll and the
> whole ranking would be wrong. Use the fitted equation, not the printed
> subtraction.

**What you must NOT adjust for here:** home runs, batting averages, other salary
measures. Those are **mediating factors of the payroll effect** — they *are* how
well the team used the money, which is exactly the thing being measured.

### Worked example — professors, evaluations and class size

```
Eval‾ = 4.15 − 0.003 CS + 0.455 B + 0.181 C + 1.25 D

Relative evaluation  =  Eval − (−0.003 × CS)
```

Note what is **not** subtracted: the professor dummies. You are trying to compare
the professors, so you must not level out the very differences you're measuring.

Averaging the relative evaluations by professor:

| Professor | Relative evaluation |
|---|---|
| A | 4.15 |
| B | 4.15 + 0.455 = **4.61** |
| C | 4.15 + 0.181 = **4.33** |
| D | 4.15 + 1.25 = **5.40** |

> **The blue dots on that slide are the full residuals and they are useless here.**
> The lecture makes the distinction explicit: the **red** dots are adjusted for
> class size **only** — those are the ones you want. The **blue** dots are the
> residuals from the model *including* the professor dummies, so they have had the
> professor effect removed. Their average is zero for every professor by
> construction. "Those blue dots are not actually working in this example at all."

### The shortcut with no intercept

```
Eval‾  =  −0.003 CS  +  4.15 A  +  4.61 B  +  4.33 C  +  5.40 D
```

Drop the intercept, include a dummy for **every** group, and the adjusted group
performances appear **directly as the dummy coefficients**. This is the one place
where the "wonky" no-intercept specification from Chapter 3 earns its keep.

### What must not be adjusted for

| Do not adjust for | Why |
|---|---|
| **Other measures of performance** | They are typically mediators of the key-X and are *part of* the performance being measured |
| **Factors that hold different groups to different standards** | You'd be measuring performance *within* groups instead of *across* them |

### Worked example — Army recruiters, location and gender

**Should adjust for location.** Some areas have weaker economies, which makes
recruiting easier. Adjusting levels the playing field across recruiters. Fair.

**Should NOT adjust for gender.** Suppose female recruiters average three more
recruits a year than males.

| | Expected if you adjust for gender | Actual | Relative performance |
|---|---|---|---|
| John | 12 | **13** | **+1** |
| Jane | 15 | **14** | **−1** |

Adjusting for gender says **John did better**. But it got there by setting Jane a
higher bar purely because she is female — "we can't be holding these females to a
higher standard."

Don't adjust, and both get the same expectation, the pooled average of **13.5**:

| | Expected | Actual | Relative performance |
|---|---|---|---|
| John | 13.5 | 13 | **−0.5** |
| Jane | 13.5 | 14 | **+0.5** |

**Jane did better.** Same data, opposite conclusion, and the second one is the
defensible one.

> **This is the ethical core of Objective 4 and a highly likely exam question.**
> The test is not "does this variable explain the outcome?" — gender clearly does.
> The test is: **does adjusting for it hold different groups to different
> standards?** Location passes (it's outside the recruiter's control and not a
> statement about them). Gender fails.

### Which PITFALLS matter

**All of them.** If a causal effect is under- or over-estimated, you will
under-adjust or over-adjust for that factor, and the relative performance measure
is wrong. So accuracy and precision both matter here as much as in causal work.

> **Mediators are the one "it depends" cell in the whole grid.** For this
> objective a mediator can stay **as long as it is not a measure of the subject's
> own performance**.
>
> - **OK:** adjusting recruiter performance for the local **wage rate**, which is
>   a mediator of the local unemployment rate. Both are just describing the state
>   of the economy, and neither is a statement about the recruiter.
> - **Not OK:** adjusting baseball wins for **home runs** or batting average.
>   Those are exactly how the payroll got converted into wins — they *are* the
>   performance.

---

## 6.5 The master grid

| PITFALL | Estimating causal effects | Forecasting | Determining predictors | Adjusting outcomes / anomalies |
|---|:---:|:---:|:---:|:---:|
| 1. Reverse causality | **Yes** | **Yes** | **Yes** | **Yes** |
| 2. Omitted-factors bias | **Yes** | No | No | **Yes** |
| 3. Self-selection bias | **Yes** | No | No | **Yes** |
| 4. Measurement error | **Yes** | No for single-subject; **Yes** for multiple | **Yes** | **Yes** |
| 5. Mediators / outcomes as controls | **Yes** | No, if they precede the outcome | **Yes** | **Depends** |
| 6. Improper reference group | **Yes** | No | No | **Yes** |
| 7. Over-weighting groups | **Yes** | No | No | **Yes** |

> **Two patterns make this grid memorable rather than memorised.**
>
> 1. **Reverse causality is the only row that is "Yes" all the way across.** As
>    the lecturer put it: "reverse causality disturbs everybody, so it doesn't
>    matter what you do, you're going to be in trouble." Every objective breaks if
>    you explain the outcome with something determined after it.
> 2. **The "causal" and "adjusting" columns are nearly identical, and the
>    "forecasting" and "predictors" columns are the soft ones.** Adjusting outcomes
>    *contains* a causal estimation problem — you need the causal effect right to
>    adjust by the right amount. "If anybody's into forecasting, you're actually
>    pretty much in the clear."
>
> The only cells that break the pattern are the two involving **measurement error
> and mediators**, and both have a clean reason: measurement error hurts
> *predictors* because noise understates predictive power; mediators are fine for
> forecasting because more variables help.

### General strategy, one line each

| Objective | Strategy |
|---|---|
| **Causal effects** | Avoid or address **all seven** pitfalls |
| **Forecasting** | Kitchen sink of X variables — except factors that would treat protected groups differently, and check every X occurs **before** the outcome |
| **Determining predictors** | **One** X variable, one set of categories, or one interacted set **per regression** |
| **Adjusting outcomes** | Control **only** for the factors you want to adjust for. Be cautious of demographic variables. |

---

## Checkpoint

<details>
<summary>1. A bank wants to predict which loan applicants will default. Its analyst says "we shouldn't include current employment status, because unemployment might be caused by the same financial distress that causes default — that's omitted-variable bias." Is the analyst right?</summary>

**No.** The objective is **forecasting**, and omitted-factors bias is not a
problem for forecasting — in fact, a variable that soaks up unobservable financial
distress is *more* useful, not less.

What the analyst *should* be worrying about:

- **Reverse causality (#1).** Is employment status recorded **before** the default
  window? If it's measured after the borrower started missing payments, the model
  is predicting default with a consequence of default and will look spuriously
  accurate.
- **Availability.** Will the bank actually have this field at the moment it needs
  to score an application?
- **Protected characteristics.** Employment status is fine, but the slides warn
  against including demographic or socio-economic factors that would treat people
  differently based on group membership.

Note how the answer flips if the objective changed to "does becoming unemployed
*cause* default?" — then all seven pitfalls are live and the analyst's instinct
becomes relevant.
</details>

<details>
<summary>2. A school district ranks teachers by their students' end-of-year test scores, adjusting for the students' prior-year scores and family income. A consultant suggests also adjusting for the number of homework assignments each teacher sets. Should they?</summary>

**No.** Homework assignments are a **measure of the teacher's own performance** —
one of the mechanisms by which a good teacher raises scores. Adjusting for it asks
"among teachers who set the same amount of homework, whose students improve most?"
and strips out part of what makes a teacher effective.

Prior-year scores and family income are the right kind of adjustment: they are
determined before the teacher got the class, they are outside the teacher's
control, and they level the playing field without holding anyone to a different
standard.

Watch the demographic boundary too. Adjusting for family income is defensible
(it's about the students' circumstances). Adjusting for, say, the *ethnic
composition* of the class would start holding teachers of different classes to
different standards — the Jane-and-John problem.
</details>

<details>
<summary>3. You must find the single best predictor of house price among: floor area, number of bedrooms, lot size, and whether the house is colonial style. How do you do it, and what do you report?</summary>

**Estimate four separate simple regressions**, one variable each — not one model
with all four. The objective is determining predictors, so the rule is one X per
regression.

Compare on **R²** (which one is well above the others) and **RMSE** (well below
the others). Since the variables are on different scales, if you want to compare
their coefficients you must use **standardised** coefficients — but comparing R²
across the simple regressions is easier and is what the lecturer recommends.

Report comparatively: "floor area explains 61% of the variation in price, well
above lot size at 22% and bedrooms at 18%; colonial style explains almost none."
Do **not** report a threshold-based verdict, because there is no threshold.

And do **not** claim floor area *causes* price differences — that's a different
objective with a different specification.
</details>

<details>
<summary>4. Why can a mediator sometimes stay in the model when you're adjusting outcomes, but never when you're estimating a causal effect?</summary>

Because for adjusting outcomes the question is not "what is the total effect of
the key-X?" but "**what should we reasonably have expected from this subject given
circumstances outside their control?**"

A mediator is only forbidden if it is part of the performance being measured. The
lecture's contrast:

- **Recruiters:** unemployment rate → local wage rate → recruitment. Wage rate is
  a mediator of unemployment, but it isn't a statement about the recruiter — it is
  just another way of describing how easy the local economy makes the job. **Keep
  it.**
- **Baseball:** payroll → home runs → wins. Home runs *are* how the payroll got
  converted into wins, and converting payroll into wins is precisely the
  performance being assessed. **Drop it.**

For a **causal** objective there is no such escape hatch: any mediator sits on the
path from key-X to Y, so controlling for it always removes part of the effect.
</details>

---

## Summary

- **Identify the objective before anything else.** No statistic can tell you what
  it is; "how much" signals causal, "given …" signals adjusting.
- **Forecasting:** kitchen sink, but every X must precede the outcome, must be
  obtainable, and mustn't encode protected characteristics. Check out-of-sample
  accuracy, not just in-sample.
- **Determining predictors:** one variable per regression. Judge by "well above"
  R² / "well below" RMSE and standardised coefficients. No thresholds.
- **Adjusting outcomes:** adjust only for what is outside the subject's control.
  Positive residual = over-performed. Never adjust for other performance measures
  or for anything that holds groups to different standards.
- **Reverse causality matters for every objective.** Omitted factors and
  self-selection matter for causal and adjusting objectives only.
- The **causal** and **adjusting** columns of the grid are nearly identical;
  forecasting is the forgiving one.
