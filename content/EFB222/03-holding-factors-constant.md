# Topic 3 — What "Holding Other Factors Constant" Actually Means

*Chapter 4. The most conceptual chapter in the unit, and the one the written exam
questions lean on hardest.*

---

## 3.1 Why we want to hold factors constant

The aim is to compare people who differ in the key-X **without those differences
being accompanied by differences in anything else that also affects the
outcome**.

Income and education: you want to compare a 12-year and a 16-year schooling
person *without* the 16-year person also being more intelligent, more motivated,
and from a wealthier family. In an ideal world **the key-X moves by itself**, and
nothing else moves with it.

The exercise the slides use to show how hard this gets:

| Question | Why it's hard |
|---|---|
| Does cinnamon in cookie dough improve taste? | **Easy.** You control the batches. Every other ingredient is known and measured. |
| Does parental divorce affect children's outcomes? | You can't assign divorce. Families that divorce differ in a hundred unmeasured ways. |
| Does the marginal income tax rate affect GDP growth? | One economy, one history. Tax changes coincide with everything else happening that year. |

---

## 3.2 The 2×2 variation box

This is the single most useful diagram in the unit — and the lecturer said so in
almost those words: *"we could just kind of stare at that and if you internalise
that, we can just go home and do the final exam and you'll be fine. This is how
fundamental this is."* Paired with telling confounders from mediators, she calls
it "the essence of the whole unit really".

Every source of variation in the key-X falls into one of four cells.

| | **Good variation** | **Bad variation** |
|---|---|---|
| **Held-constant** | V1 — harmless but wasted | V2 — successfully neutralised ✓ |
| **Operative** | V3 — **this is what identifies the effect** ✓ | V4 — **this is what biases it** ✗ |

**Definitions, in the slides' own terms:**

- **Good variation** — variation in the key-X caused by factors that are **not**
  correlated with the dependent variable, other than by affecting the key-X.
- **Bad variation** — variation in the key-X caused by factors that **are**
  correlated with the dependent variable, beyond just through the key-X.
- **Operative variation** — the variation actually used to determine how the
  key-X relates to Y.
- **Held-constant variation** — variation that does *not* go into determining the
  relationship, because it is being adjusted / controlled for.

**The design goal:** move as much of the bad variation as possible from
*operative* to *held-constant*, i.e. **make V4 = 0**. Ideally the coefficient is
identified purely by V3.

> **"Bad is and stays bad; good is and stays good."** Controlling for something
> does not convert bad variation into good variation — it moves bad variation out
> of the operative box so it stops contaminating the estimate. And a control
> almost always drags some *good* variation into the held-constant box with it
> (that's V1). You lose precision to buy accuracy. That trade-off is the whole
> reason multicollinearity is a judgement call rather than a rule.

> **Bad variation only matters for two objectives.** It is relevant when the
> objective is **causal analysis** or **adjusting outcomes**. If you are
> forecasting or hunting for predictors, "bad" variation is just variation, and
> you want as much of it as you can get.

### Worked example — hours studied and test scores

```
score = β₀ + β₁ hours + β₂ major + ε
```

`major` is a dummy for whether the subject is part of the student's major;
`hours` is the key-X.

| | Good variation | Bad variation |
|---|---|---|
| **Held-constant** | Any effect of `major` on hours that runs *only* through hours | The part of `major` that drives **both** study hours **and** score (majors study more *and* find the material easier) — successfully removed |
| **Operative** | Genuinely idiosyncratic reasons someone studied more this week: a cancelled shift, a quiet flatmate, a bout of insomnia | Everything still left out — **innate ability, motivation, prior background** — which raises hours *and* raises the score |

The model does something useful (it neutralises the major effect) but the
remaining operative bad variation from ability and motivation means `β₁` is still
biased **upwards**.

---

## 3.3 When it works cleanly: categorical controls

Holding a factor constant works **cleanly only when the control is a dummy, or a
set of dummies representing an exhaustive categorisation**. Then within each
category the control genuinely does not vary, so comparisons inside a category
are true like-for-like.

### Average Treatment Effect (ATE)

```
                Σ [ Yᵢ | treatment  −  Yᵢ | no treatment ]
ATE  =  ─────────────────────────────────────────────────
                              N
```

The obvious problem: **you can only ever observe an individual in one state.**
The counterfactual — what *this* person would have done under the other
treatment — is unobservable by definition. So in practice:

```
        ⌢       Average outcome        Average outcome
        ATE  =  ────────────────   −   ───────────────
                (treatment group)      (control group)
```

which is only a good estimate if the two groups are similar on average. Random
assignment would guarantee that; controlling for factors is the second-best
substitute.

**What dummy controls actually produce:** not the pure ATE, but a **weighted
average of each group's effect**, where each group's weight depends on

1. the **size** of the group, and
2. the **variance of the key-X within** that group.

Point (2) is the seed of PITFALL #7 — remember it.

### Worked example — class size and evaluations

```
No control for professor:      Ê = 3.30 + 0.0040 CS
With dummies for professor:    Ê = 3.92 − 0.0098 CS + 0.811 B + 2.29 C + 3.23 D
```

The class-size effect **flips sign** — from +0.0040 to −0.0098. The separate
per-professor regressions show why:

| Professor | Separate model | Class-size slope |
|---|---|---|
| A | `Ê = 4.56 − 0.0257 CS` | −0.0257 |
| B | `Ê = 4.90 − 0.0113 CS` | −0.0113 |
| C | `Ê = 3.82 + 0.0023 CS` | +0.0023 |
| D | `Ê = 4.14 + 0.0010 CS` | +0.0010 |

**Every professor individually is somewhere between mildly negative and flat.**
The naïve pooled positive slope was pure confounding: the better-rated professors
happened to be assigned the bigger classes, so across professors bigger class
looked like better rating. Controlling for professor converts that bad operative
variation into held-constant variation, and the honest within-professor effect
appears.

The pooled-with-dummies estimate of −0.0098 sits close to the simple average of
the four slopes (−0.0084) because, in this version of the example, **all four
professors have the same range of class sizes** — the lecture puts it as "they
all had a range of 40" (roughly 20–60 and 100–140, about 20–25 classes each).
Equal spread ⇒ near-equal weights.

> **−0.0098 is not exactly the average of the four slopes, and the gap is the
> whole of PITFALL #7 in miniature.** The lecturer pointed this out live: because
> the class sizes were *randomised*, the within-professor variance of class size
> isn't identical — it happened to be highest for Professor A, "but just by a
> little bit". Professor A also has the most negative slope. So A gets slightly
> more weight, and the pooled estimate lands "a little bit more negative than that
> pure average would have been". Small here; catastrophic when the ranges differ
> a lot, which is exactly the version you'll meet in PITFALL #7.

> **A sign flip between the simple and multiple regression is a finding, not an
> error.** If an exam output shows the key-X coefficient reversing when controls
> are added, the answer is that the simple model's operative variation was
> contaminated: the omitted factor was correlated with both the key-X and the
> outcome, and it was strong enough to dominate. Say which factor and in which
> direction.

### Reading it through the dummies: income, college and ethnicity

```
income = β₀ + β₁ CollDeg + β₂ Hisp + ε
```

- For **β₁**, `Hisp` is held constant: you compare incomes with and without a
  college degree **among Hispanics**, and **among non-Hispanics**. Within each
  comparison the value of `Hisp` never changes — which is exactly what "held
  constant" means. The reported β₁ is the weighted average of those two
  within-group comparisons.
- For **β₂**, `CollDeg` is held constant: you compare Hispanics and
  non-Hispanics **among degree-holders**, and **among non-degree-holders**.

> **"Held constant" is a claim about a *comparison*, not about the data.** Nobody
> in the sample changed ethnicity. The claim is that every comparison contributing
> to β₁ is made between people with the same value of `Hisp`. That is why the
> phrase only strictly applies to categorical controls — see below.

---

## 3.4 Why it is *hard* with quantitative controls

When the control is quantitative rather than categorical, three things go wrong:

1. **Imprecision** in the relationship between control and key-X, and between
   control and outcome.
2. **Non-linearity.** Controlling for a variable linearly removes only the
   *linear* part of its relationship (or the polynomial part, if you add one).
   Anything curved is left behind in the operative bad variation.
3. **Other omitted variables** may still affect both key-X and outcome.

And bucketing a quantitative control into categories doesn't fix it — there is
**variation within each bucket**, and that within-bucket variation is bad
operative variation again.

> **"It is practically impossible to fully control for a quantitative factor."**
> That is the slides' own conclusion, and the terminology follows it exactly:
>
> | Control type | Correct phrase |
> |---|---|
> | Categorical (dummies) | **"holding the factor constant"** |
> | Quantitative, non-categorical | **"adjusting for"** / **"controlling for"** |
>
> Writing "we held income constant" when income entered as a continuous variable
> is overselling the model — and Chapter 13 lists exactly that as an unethical
> practice ("overstating the model's ability to hold factors constant"). Use the
> right verb.

### Worked example — the house price model

```
price‾ = 100,000 + 45,000 bedrooms + 100 sqm
```

Comparing a 100 m² and a 300 m² house, the model says the price difference is
`200 × 100 = $20,000`, apparently controlling for bedrooms. Why is that "likely
not quite right"?

| | Good variation | Bad variation |
|---|---|---|
| **Held-constant** | — | The *linear* part of the bedroom–size relationship (300 m² houses do have more bedrooms, and that part is removed) |
| **Operative** | Genuine size differences between houses with the same bedroom count — a bigger living room, a wider hallway | Everything size proxies for and bedrooms doesn't capture: **land value, suburb, bathrooms, garages, build quality, age**. A 300 m² house isn't just a stretched 100 m² house. |

Because `bedrooms` is an integer count and only removes its own linear
relationship to `sqm`, the $20,000 is contaminated by all the other things that
travel with floor area. Bedrooms is a control; it is not *the* control.

---

## 3.5 When you do *not* want to hold a factor constant

The default instinct is to control for everything that affects the outcome. That
instinct is wrong.

> **Do not control for a mediating factor.** A mediator is one of the *reasons*
> the key-X affects the outcome. Controlling for it removes part of the effect you
> are trying to measure, and pushes the key-X estimate **away from the true causal
> effect** — specifically, in the **opposite direction to the mechanism**. If the
> mechanism is positive, controlling for the mediator biases the key-X coefficient
> **downwards**.
>
> The lecturer's paired rule, worth memorising as one line:
>
> ```
> Confounder accidentally LEFT OUT      → bias in the SAME direction as the mechanism
> Mediator accidentally PUT IN          → bias in the OPPOSITE direction to the mechanism
> ```

### Worked example — the lemon trees

The design: 50 "identical" lemon trees, half in good soil and half in bad soil.
Ten different weekly watering amounts, each **randomly assigned** to 5 trees and
held for 5 years. After 5 years, count the lemons.

| Variable | Role |
|---|---|
| `L` = number of lemons | Outcome |
| `W` = weekly water | **Key-X** — and it is randomly assigned |
| `G` = good soil dummy | Control |
| `H` = height of the tree at year 5 | ??? |

**For the causal effect of water:**

```
L = β₀ + β₁W + β₂G + ε          ✓  include soil, exclude height
```

- **Include `G`.** Soil quality affects lemon production and is not caused by
  watering. It is a legitimate control — and because watering was randomised, it
  is mostly buying precision rather than removing bias.
- **Exclude `H`.** Height at year 5 is a **product of the watering**. Water makes
  the tree grow, and a bigger tree makes more lemons. Height is on the causal
  path, so it is a mediator. Controlling for it asks "among trees of the same
  height, does watering help?" — which strips out the main way watering works.

> **Randomisation makes the key-X's variation good; it does not make controls
> unnecessary.** With `W` randomly assigned there is no *systematic* correlation
> between water and soil quality — but with only 50 trees there can easily be an
> **incidental** one (that is PITFALL #2's second source). Including `G` guards
> against that and shrinks the standard error. Randomisation is not a licence to
> control for nothing, and it is definitely not a licence to control for height.

---

## 3.6 Correct terminology for the write-up

The summary slide, restated as rules you can apply under exam pressure:

| Situation | Do you control for it? | Why |
|---|---|---|
| Factor affects both key-X and Y, and is **not** caused by the key-X | **Yes** | Confounder — this is bad operative variation you can neutralise |
| Factor is a **mediator** (a reason why key-X affects Y) | **No** | It *is* the effect; controlling removes it |
| Factor is a **product of the key-X** that also affects Y | **No** | Same reason |
| Factor affects Y but is **uncorrelated** with the key-X | Optional | No bias either way; it will cut the residual variance and may tighten your standard errors |
| Factor affects the key-X but **not** Y (except through key-X) | **No** | This is your good variation — controlling for it throws away the identification |

And the phrases:

- **Categorical control** → "holding a factor constant".
- **Quantitative control** → "adjusting for a factor" / "controlling for a
  factor".
- **Never** → "we eliminated the effect of X" / "we fully controlled for income".

> **The one criterion that is *not* on this list: goodness of fit.** The lecturer
> was emphatic — whether a control improves R², adjusted R², AIC or BIC is "not of
> interest. So stop it there." Same for a control's own statistical significance,
> and for whether the *control* suffers from measurement error or omitted-variable
> bias of its own. Control selection in causal work is an argument about causal
> structure, not a model-fitting competition.

---

## Checkpoint

<details>
<summary>1. A study estimates the effect of a company's training programme on employee performance and controls for "skills gained during the year". What is wrong, and which way is the bias?</summary>

"Skills gained" is a **mediator** — it is the mechanism by which training raises
performance (train → gain skills → perform better). Controlling for it asks
"among employees who gained the same skills, does training help?", which strips
out the main channel.

**Direction:** the mechanism (training → skills → performance) is **positive**,
so including the mediator biases the training coefficient in the **opposite**
direction, i.e. **downwards, towards zero**.

This is demonstrable with real numbers — see the worked-cases note, where adding
`skill_growth` to the model pushes the `training_hours` coefficient from
**1.3058 down to 0.9459**, exactly as predicted.
</details>

<details>
<summary>2. In the class-size example, the simple regression gives +0.0040 and the model with professor dummies gives −0.0098. Explain, using the variation box, what the dummies did.</summary>

Before controlling, the professor's own effectiveness was **bad operative
variation**: it affected evaluations directly, *and* it was correlated with class
size (better-rated professors were given bigger classes). That correlation drove
the pooled slope positive.

Adding professor dummies moved that variation from the **operative** cell to the
**held-constant** cell. The remaining operative variation is the *within*-
professor differences in class size, which are good. The −0.0098 is a weighted
average of the four within-professor slopes, each of which is negative or
approximately zero.

Cost of the move: some good variation went into the held-constant box too, so the
estimate is less precise than the raw one — you traded precision for accuracy,
which is the right trade for a causal objective.
</details>

<details>
<summary>3. Why can't you claim to have "held constant" a continuous control like family income?</summary>

Because a linear control only removes the **linear** part of income's
relationship with the key-X. Anything non-linear survives as operative bad
variation. On top of that there is imprecision in the estimated income–key-X and
income–outcome relationships, and other omitted variables still connect income to
the outcome.

Even bucketing income into bands doesn't fix it: within each band incomes still
vary, and that within-band variation is bad operative variation.

The honest phrasing is "**adjusted for family income**". Claiming more than that
is listed in Chapter 13 as an unethical practice.
</details>

<details>
<summary>4. A researcher estimating the effect of a city's public transport investment on air quality controls for the number of car trips taken. Good idea?</summary>

**No — car trips is a mediator.** Better public transport reduces air pollution
*because* people take fewer car trips. Controlling for car trips asks "among
cities with the same number of car trips, does transport investment clean the
air?", which removes the entire mechanism and pushes the coefficient toward zero.

It could also be argued that car trips is partly a **confounder** (a car-loving
city both invests less in transport and pollutes more). When a variable is
plausibly both, the slides' prescription is: **acknowledge the dilemma, estimate
with and without, and report both.** If the results are similar, say so; if they
differ, report both and explore the order of events.
</details>

---

## Summary

- The design goal is to move **bad variation** in the key-X from **operative** to
  **held-constant**, leaving only good operative variation to identify the effect.
- Bad variation matters for **causal analysis** and **adjusting outcomes**. It is
  irrelevant for forecasting and for finding predictors.
- Holding constant works **cleanly only for categorical controls**. The result is
  a weighted average of within-group effects, weighted by group size **and by the
  within-group variance of the key-X**.
- The **counterfactual is unobservable**, so ATE is estimated as the difference in
  group averages — valid only if the groups are otherwise similar.
- Quantitative controls remove only the linear relationship. Say "**adjusted
  for**", never "held constant".
- **Confounder left out → bias in the same direction as the mechanism. Mediator
  put in → bias in the opposite direction.**
- Never select controls on R², adjusted R², AIC/BIC, or the control's own
  significance.
