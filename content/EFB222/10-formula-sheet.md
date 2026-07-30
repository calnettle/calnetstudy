# Formula Sheet, Stata Reference & Exam Traps

*Everything on one page. The exam is closed book — this is what to have loaded
the night before.*

---

## The regression model

| Concept | Formula |
|---|---|
| True model | `Yᵢ = β₀ + β₁Xᵢ + εᵢ` |
| Estimated model | `Yᵢ = β̂₀ + β̂₁Xᵢ + ε̂ᵢ` |
| Predicted value | `Ŷᵢ = β̂₀ + β̂₁Xᵢ` |
| Residual | `ε̂ᵢ = Yᵢ − Ŷᵢ` |
| **Slope** | `β̂₁ = Σ(Xᵢ − X̄)(Yᵢ − Ȳ) / Σ(Xᵢ − X̄)²` |
| **Intercept** | `β̂₀ = Ȳ − β̂₁X̄` |
| Line passes through | `(X̄, Ȳ)` — always |
| Residuals sum to | **0** — whenever the model has an intercept |

## Variation and fit

| Concept | Formula |
|---|---|
| Total Sum of Squares | `TSS = Σ(Yᵢ − Ȳ)²` |
| Explained Sum of Squares | `ExSS = Σ(Ŷᵢ − Ȳ)²` |
| Residual Sum of Squares | `RSS = Σ ε̂ᵢ²` |
| **Decomposition** | **`TSS = ExSS + RSS`** |
| **R²** | `R² = ExSS/TSS = 1 − RSS/TSS` |
| R² across different Y's | `R² = corr(Y, Ŷ)²` — the comparable version |
| **MSE** | `MSE = σ̂² = RSS / (n − K − 1)` |
| Root MSE / RMSE | `σ̂ = √MSE` |
| Residual rule of thumb | 95% of residuals within `±1.96 × RMSE` |
| Degrees of freedom | `df = n − K − 1 = n − k` |

`n` = sample size · `K` = number of explanatory variables · `k = K + 1` = number
of parameters.

## Precision and inference

| Concept | Formula |
|---|---|
| **Standard error** | `SE(β̂ⱼ) = σ̂ / √[ Σ(Xⱼ − X̄ⱼ)² × (1 − R²ⱼ) ]` |
| **t-statistic** | `t = β̂ / SE(β̂)`  or  `t = (β̂ − β*) / SE(β̂)` |
| **Confidence interval** | `β̂ ± t_c × SE(β̂)` |
| **F-test (joint)** | `F = [(RSS_r − RSS_u)/q] / [RSS_u/(n − k)]` |
| F degrees of freedom | `df1 = q` (restrictions), `df2 = n − k` |
| Equivalence | Significant at 5% ⟺ 95% CI excludes 0 |
| One-sided p | printed two-sided p **÷ 2** |

### Critical values worth knowing cold

| Test | Normal / large df |
|---|---|
| 10% two-sided (= 5% one-sided) | **1.645** |
| 5% two-sided | **1.96** |
| 1% two-sided | **2.576** |
| 10% one-sided | **1.282** |

Past about 30–50 degrees of freedom the t-distribution ≈ the standard normal.

## Functional forms

| Form | Model | Interpretation of β₁ |
|---|---|---|
| Linear | `Y = β₀ + β₁X` | 1-unit ↑ in X ↔ **β₁ units** change in Y |
| Linear-log | `Y = β₀ + β₁ ln X` | 1-**percent** ↑ in X ↔ **β₁/100 units** change in Y |
| Log-linear | `ln Y = β₀ + β₁X` | 1-unit ↑ in X ↔ **β₁ × 100 percent** change in Y |
| Log-log | `ln Y = β₀ + β₁ ln X` | 1-percent ↑ in X ↔ **β₁ percent** change in Y (elasticity) |

**Memory hook: the log side is the percentage side.** Log on Y → ×100. Log on X →
÷100. Both → raw elasticity.

| Concept | Formula |
|---|---|
| Log approximation | `Δ ln X ≈ ΔX/X`, so `100 × Δ ln X ≈ %ΔX` |
| Exact percentage from a log coefficient | `(e^β − 1) × 100` |
| **Quadratic marginal effect** | `∂Y/∂X = β₁ + 2β₂X` — always at a **stated X** |
| **Quadratic turning point** | `X* = −β₁ / (2β₂)` |
| Interaction: effect in group A | `β₂` |
| Interaction: effect in group B | `β₂ + β₂ᴰ` |
| Interaction: the difference | `β₂ᴰ` ← test this one |
| **Standardised coefficient** | `β* = β̂ × sd(X) / sd(Y)` |

## Forecast accuracy

| Concept | Formula |
|---|---|
| Average Forecast Error | `AFE = (1/n) Σ (Yᵢ − Ŷᵢ)` |
| Root Mean Square Forecast Error | `RMSFE = √[ (1/n) Σ (Yᵢ − Ŷᵢ)² ]` |

## Adjusting outcomes

```
Model:               Y = β₀ + β₁X₁ + β₂X₂ + ε
Adjust for both:     Y − (β̂₀ + β̂₁X₁ + β̂₂X₂)     ← the residual
Adjust for X₂ only:  Y − β̂₂X₂
```

Positive residual → **performed better than expected** (unless a higher outcome
is bad, e.g. mortality — then flip it).

## Difference-in-differences *(not examinable)*

```
                Treatment    Control
  Before            A           B
  After             C           D

DD = (C − A) − (D − B)

Regression form:  Y = β₁ + β₂ Post + β₃ Treat + β₄ (Post × Treat) + ε
                  β₄ is the DD estimate
```

Requires **parallel trends**: different starting levels are fine, different
*trends* are fatal.

---

## The five conditions

| # | Condition | Worry level |
|---|---|---|
| 1 | Average error = 0 | Automatic with an intercept |
| 2 | Errors i.i.d. | Breaks under **clustering** |
| 3 | Errors normally distributed | Rarely matters |
| 4 | Errors homoskedastic | Fix with `, robust` |
| 5 | **Key-X uncorrelated with the error** | **The one that matters** |

Condition 5 is needed for **causal effects** and **adjusting outcomes** only. Not
for forecasting or determining predictors. It applies to the **key-X only**, not
all explanatory variables.

---

## The seven PITFALLS

| # | PITFALL | What to check | Direction of bias |
|---|---|---|---|
| 1 | **Reverse causality** | Does the outcome affect an X? | Same direction as the reverse causality |
| 2 | **Omitted-factors bias** | A factor affecting both key-X and Y? Incidental correlation? Replacement action? | **Sign of the product** of (omitted→X) × (omitted→Y) |
| 3 | **Self-selection bias** | Did the subject choose the key-X based on its personal benefits/costs? | **Positive if a high outcome is good**; negative if bad |
| 4 | **Measurement error** | Non-trivial error, or an imperfect proxy, in an **explanatory** variable? | **Towards zero** if random; uncertain otherwise |
| 5 | **Mediators / outcomes as controls** | Is a control a product of the key-X, or determined after it? | **Opposite** to the sign of the mechanism |
| 6 | **Improper reference group** | Correct counterfactual? Replacement action? Lower-intensity dose in the reference group? | Positive if the reference group used has lower outcome values than the proper one |
| 7 | **Over-weighting groups** | Do both the **variance** of the key-X **and** its **effect** vary across the controlled-for groups? | Towards the **over-weighted** groups' effect |

### The two rules that generate most answers

```
sign of mechanism  =  sign(arrow 1) × sign(arrow 2)

Confounder accidentally LEFT OUT  →  SAME direction as the mechanism
Mediator accidentally PUT IN      →  OPPOSITE direction to the mechanism
```

Signs are **correlations** ("if this goes up, what happens to that?"), not arrow
directions.

---

## The four objectives × which PITFALLS matter

| PITFALL | Causal | Forecasting | Predictors | Adjusting |
|---|:---:|:---:|:---:|:---:|
| 1. Reverse causality | ✔ | ✔ | ✔ | ✔ |
| 2. Omitted factors | ✔ | ✘ | ✘ | ✔ |
| 3. Self-selection | ✔ | ✘ | ✘ | ✔ |
| 4. Measurement error | ✔ | ✘ single / ✔ multiple | ✔ | ✔ |
| 5. Mediators as controls | ✔ | ✘ if they precede Y | ✔ | **depends** |
| 6. Improper reference group | ✔ | ✘ | ✘ | ✔ |
| 7. Over-weighting groups | ✔ | ✘ | ✘ | ✔ |

**Reverse causality is the only all-✔ row.** Causal and Adjusting are nearly
identical columns; Forecasting is the forgiving one.

| Objective | Strategy |
|---|---|
| **Causal effects** | Avoid or address **all seven** |
| **Forecasting** | Kitchen sink — but every X must precede Y, be obtainable, and not encode protected characteristics |
| **Determining predictors** | **One** X (or one set of dummies, or one interaction) **per regression** |
| **Adjusting outcomes** | Control only for what you want to adjust for. Be cautious with demographics. |

---

## Flowchart notation

| Symbol | Meaning |
|---|---|
| **Rectangle** | An observed variable |
| **Oval** | An **unobservable** factor |
| **Solid arrow** | The causal effect of interest |
| **Dashed arrow** | A potentially problematic relationship |

## The variation box

| | Good | Bad |
|---|---|---|
| **Held-constant** | V1 | V2 ✓ neutralised |
| **Operative** | V3 ✓ **identifies the effect** | V4 ✗ **biases it** |

Goal: make **V4 = 0**.

---

## Stata command reference

You never write code in the exam, but the vocabulary appears in questions.

```stata
* --- workflow -----------------------------------------------------------
clear all                       // wipe memory, including temporaries
use carexample, clear           // load a .dta (no extension needed)
                                // NEVER save the modified data — save the do-file
* comments:  * at line start   // anywhere   /* … */ block   /// line continuation

* --- describing ---------------------------------------------------------
describe                        // variable names and types
summarize price                 // count, mean, sd, min, max
tabstat price, by(brand)
tabulate brand body             // cross-tab counts / percentages
correlate x1 x2 x3
histogram price
scatter price displacement
twoway (scatter price displacement)(lfit price displacement)

* --- creating and editing variables -------------------------------------
rename enginev displacement
label variable price "price of vehicle"
generate kms = mileage * 1.609344
generate Dpetrol = (enginetype=="Petrol")     // string → 1/0 in one line
replace price = price * 1.42
summarize income if collegedegree==1          // ==  &  |  !

* --- estimation ---------------------------------------------------------
regress Y X1 X2 X3
regress Y X1 X2 X3, robust                    // heteroskedasticity fix
regress Y X1 X2 X3, vce(cluster classroom)    // clustered SEs
regress Y X1 X2 X3, beta                      // standardised coefficients
regress Y X1 X2 X3, level(90)                 // 90% CI instead of 95%
regress Y X [pw = population]                 // weighted least squares
regress price mileage i.cylinder              // auto-generated dummies

* --- after estimation ---------------------------------------------------
predict yhat, xb                // predicted values
predict e, residual             // residuals
predict sr, rstandard           // standardised residuals
display _b[_cons] + _b[IQ]*100  // build a prediction from stored coefficients
estat hettest                   // Breusch–Pagan (against fitted values)
estat hettest educ              // …against a specific X

* --- tests --------------------------------------------------------------
test (mom_hs=0)(mom_coll=0)     // joint F-test
test (X2 = X3)                  // equality of two coefficients, F version
lincom X2 - X3                  // equality of two coefficients, t version

* --- critical values ----------------------------------------------------
display invttail(2762, 0.025)   // = 1.9608   two-sided 5%
display invttail(2762, 0.05)    // = 1.6454   one-sided 5%
display invFtail(4, 2262, 0.05) // = 2.38
```

**Tail bookkeeping for `invttail`:** the second argument is the **upper-tail
area**. Two-sided 5% → `0.025`. Two-sided 10% → `0.05`. Two-sided 1% → `0.005`.
For the lower tail, negate the result.

---

## EXAM TRAPS — the checklist

## Reading output

1. **`t = Coef. ÷ Std. err.`, always.** If they don't reconcile, you've misread a
   row.
2. **The printed `t` and `P>|t|` always test `β = 0`, two-sided.** Any other
   hypothesised value, you compute `t = (β̂ − β*)/SE` yourself.
3. **One-sided p = printed p ÷ 2.** Forget this and you'll call a significant
   result insignificant.
4. **`df = n − K − 1`**, not `n − 1` and not `n − K`.
5. **MSE divides by `n − K − 1`**, not by `n`. (Population uses `n`; here you've
   spent `K + 1` degrees of freedom.)
6. **Adjusted R² is NOT a measure of fit or explanatory power.** The lecturer's
   biggest bugbear. Its only use is deciding whether an added variable earns its
   place, in a *prediction* model.
7. **R² and the overall F-statistic are independent.** A near-zero R² can sit with
   `Prob > F = 0.0000`.
8. **Say "the coefficient estimate is significant", never "the variable is
   significant".**
9. **Always say "on average"** and **"holding … constant"** in an interpretation.
10. **The intercept is the predicted Y when *all* X's are zero.** If that's
    impossible, keep it and don't interpret it.

## Signs and directions

11. **Residual = actual − predicted.** Negative residual → the model
    over-predicted → the subject **under**-performed. Flip the "good/bad" reading
    when a high outcome is bad (mortality, defects, behavioural problems).
12. **Direction of bias uses the *partial* effect, not the raw correlation.** In
    `performance.dta`, `baseline_skill` has a raw correlation of −0.05 with
    performance and a partial coefficient of **+3.06**. Using the raw correlation
    gives the wrong direction of bias.
13. **Confounder left out → same direction as the mechanism. Mediator put in →
    opposite direction.**
14. **Never stop at "biased upwards".** Finish: "…so the true effect is at most X."
15. **Self-selection: positive bias when a high outcome is good.** Check which
    way "good" runs for the outcome *as measured*.
16. **Measurement error attenuates towards zero** — not "in the direction of the
    error", and **only for explanatory variables**. Noise in Y causes no bias.

## Model specification

17. **Never control for a mediator.** Never use a mediator to fix omitted-factor
    bias.
18. **Never write "mediation analysis"** — the lecturer said it scores zero.
19. **Never select controls on R², adjusted R², AIC, BIC, or the control's own
    significance.** In the tax-rate cascade and the `skill_growth` case, the most
    biased model had the best fit.
20. **Do not drop a variable because of multicollinearity.** Weigh the precision
    loss against the bias. It only matters relative to the **key-X** — collinearity
    among controls is irrelevant.
21. **VIF is not taught in this unit.** Answers using material from elsewhere can
    score **zero**. Use the correlation matrix and an operative-variation argument.
22. **A dummy coefficient is always "versus the reference group".** Work out what
    the reference group actually is before writing a sentence — "neither Black nor
    Hispanic" is not "non-Black".
23. **"Highest degree" vs "has a degree" dummies give completely different
    coefficients from identical data.** Check the construction.
24. **An interaction always needs its main effects**, and the interaction
    coefficient is a **difference in an effect**, never a level. The base
    coefficient is the **reference group's** effect, not the average effect.
25. **Quadratic:** never interpret `β₂` alone. Quote the marginal effect
    `β₁ + 2β₂X` at a stated X, or the turning point `−β₁/(2β₂)` — and check the
    turning point is inside the data range.
26. **Condition 5 applies to the key-X only**, not to all explanatory variables.
    The standard textbook statement is wrong; the slides are right.

## Language and framing

27. **Say "conditions", not "assumptions".**
28. **"Holding constant" only for categorical controls. "Adjusting for" /
    "controlling for" for quantitative ones.** Overstating this is listed in
    Chapter 13 as unethical.
29. **Insignificance ≠ no effect.** Four possible reasons; only one is "no
    effect". *Lack of evidence is not proof of non-existence.*
30. **p = P(data | H₀), not P(H₀ | data).** With a 50/50 prior, p < 0.01 means
    about **89%** confidence, not 99%.
31. **p = 0.049 and p = 0.051 are the same result.** Don't build arguments on the
    threshold.
32. **Don't use the canned evidence ladder** ("moderate / strong / very strong
    evidence"). Explicitly banned.
33. **Statistical ≠ practical significance.** The golf-putting study: 1 extra putt
    in 300, p < 0.01, 18 holes in a round.
34. **Don't chase a high R² in causal work.** "The pursuit of high R² may be
    detrimental."
35. **A sign flip when controls are added is a finding, not an error** — name the
    confounder and the direction.

## Textbook errata

36. **2nd edition: the accuracy/precision target-figure captions are printed the
    wrong way round.** The slide is correct.
37. **2nd edition: the log-transformation interpretation table has typos.** Use
    the slide version (reproduced above).

## Two slide errors flagged in these notes

38. The Chapter 7 **baseball payroll** slide writes relative wins as
    `wins − (71.24 − 0.09 × payroll)`. It should be a **plus** inside the bracket —
    the residual subtracts the *fitted* value.
39. The Chapter 5 **re-enlistment probability slide** labels the bands as
    "0.6–0.7" and "0.3–0.4" when the coefficient is 0.065; the intended ranges are
    **0.06–0.07** and **0.03–0.04**. The percentages (13.2%, 8.1%, 1.5% below zero)
    are all correct for the intended ranges — verified.

## Exam-day mechanics

40. **Closed book, pen and paper, in person, no Stata, no code.** A calculator is
    allowed but you shouldn't need it.
41. **Identify the objective first.** It determines which pitfalls even apply, and
    there is no statistic that tells you what it is.
42. **Structure earns marks.** Objective → pieces → read the output → critique
    with the pitfalls (direction!) → conclude with a recommendation.

---

*Compiled from the EFB222 lecture slides for Chapters 1–8 and 12–13, the tutorial
sheets for Chapters 2–7 and 12–13, the Stata introduction, all twelve lecture
transcripts, and Cal's three portfolio submissions. Every numerical example was
recomputed from the unit's own datasets (`performance.dta`, `happy.dta`,
`carexample.dta`) before it was written down.*
