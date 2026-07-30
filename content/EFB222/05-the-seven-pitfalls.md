# Topic 5 — The Seven PITFALLS

*Chapter 6 (A) and 6 (B). What goes wrong when estimating causal effects. This is
the heart of the unit and the heart of the exam.*

---

## 5.0 The map

| Group | # | PITFALL |
|---|---|---|
| **Non-random key-X** (bad operative variation) | 1 | Reverse causality |
| | 2 | Omitted-factors bias |
| | 3 | Self-selection bias |
| **Bad data** | 4 | Measurement error |
| **Common modelling mistakes** | 5 | Using mediating factors or outcomes as controls |
| | 6 | Using an improper reference group |
| | 7 | Over-weighting groups |

> **For a causal objective, all seven are live. Every time.** The lecturer's
> phrasing: "all of these pitfalls that we covered, they are definitely a problem
> as soon as you're dealing with a causal analysis. **All of them — not a single
> one of them can be excused.**"

### The master rule for direction of bias

Almost every direction-of-bias question reduces to reading a **mechanism** — a
chain of two arrows — and multiplying the signs.

```
sign of the mechanism  =  sign(first arrow) × sign(second arrow)
```

And then:

```
Confounder accidentally LEFT OUT  →  bias in the SAME direction as the mechanism
Mediator accidentally PUT IN      →  bias in the OPPOSITE direction to the mechanism
```

> **The signs are correlations, not arrow directions.** The lecturer is explicit:
> "the mechanism doesn't actually look at the direction of the arrows, it just
> simply looks at the **correlations** between the variables." To get a sign, ask
> "if this variable goes up, what happens to the other one?" — regardless of which
> way the arrow points.

> **How to use a direction of bias in an answer.** Never stop at "it's biased
> upwards". Say what that implies for the *true* effect. Worked in the lecture on
> marijuana and depression: "if we estimated the effect to be **0**, and we know
> the bias is positive, then **the true effect is probably actually negative**."
> Or: "if we estimate something small and positive, knowing there's a positive
> bias, it might be that there is **truly no effect**." That sentence is the mark.

---

## 5.1 PITFALL #1 — Reverse causality

**What it is:** the dependent variable Y (or something closely tied to it)
affects the key-X. The estimated effect of X then incorporates the effect of Y on
X.

**What to check:** could the outcome, or something closely tied to the outcome,
affect an explanatory variable — particularly the key-X?

**Direction of bias:** **the direction of the reverse causality**.

### Worked example — marijuana use and depression

```
Dᵢ = β₀ + β₁Xᵢ + β₂MJᵢ + ε
```

Intended: marijuana use → depression. Reverse: depressed people self-medicate, so
depression → marijuana use, and that arrow is **positive**. So `β₂` is **biased
upwards**.

Reading it properly: if `β̂₂ = 0`, the true effect is probably **negative**. If
`β̂₂` is small and positive, there may be **no effect at all**.

### Worked example — is running or passing more important in the NFL?

```
Y = β₀ + β₁Rush + β₂Pass + β₃X + ε
```

Y = whether the home team won; Rush and Pass are the home team's rushing/passing
advantages.

| Measured at | Rushing advantage | Passing advantage |
|---|---|---|
| **Full time** | significantly positive | insignificant |
| **Half time** | ≈ 0 | strongly positive |

The reverse arrow explains it: **a team that is winning stops passing and starts
running down the clock.** So winning → rushing is **positive**, and winning →
passing is **negative**.

- The full-time rushing estimate is **positively biased** → the true effect is
  probably zero or insignificant.
- The full-time passing estimate is **negatively biased** → the true effect is
  probably positive.

The **solution** is exactly the half-time measurement: use a value of the key-X
recorded **before** the outcome was determined.

### Worked example — do friends' GPAs affect yours?

| World | Type A student | Type B student | True average effect | Estimate |
|---|---|---|---|---|
| **Random** (no reverse causality) | 0.5 forward, 0 back | 0 forward, 0 back | **0.25** | 0.25 |
| **Non-random** (reverse causality) | 0.5 forward, 0 back | 0 forward, but B influences A | **0.25** | **≈ 0.45** |

The estimate nearly doubles the truth because the Type B relationship picks up
influence flowing the other way.

> **Reverse causality cannot be demonstrated with data.** From the lecture:
> "reverse causality only exists if you can argue logically that it can be there,
> but there's no way of measuring it. **No measure of correlation is going to give
> you direction.** So the direction is on you." Do not try to prove it with a
> correlation — argue it, state the direction, and say what that means for how to
> read the estimate.

> **Reverse causality can usually be re-described as omitted-factors bias**, and
> the slides say either framing is legitimate — "think of how to describe the
> problem clearly". In the marijuana case, an unobserved factor raising both drug
> use and depression gives the same positive bias. Pick the framing that makes the
> story clearest and say which one you're using.

---

## 5.2 PITFALL #2 — Omitted-factors bias

**What it is:** the estimated effect of a treatment picks up the effect of some
other factor that is correlated with the treatment but not accounted for.

**The three conditions.** A factor `F` causes omitted-factors bias if it:

1. is **not included** in the model (or not fully held constant),
2. **affects the outcome** Y, and
3. is **correlated with the key-X** — and not solely because the key-X affects F.

Condition 3 is what rules out mediators. If F is a *product* of the key-X, it is
not an omitted factor; leaving it out is correct.

**Direction of bias:** the **sign of the product** of (omitted factor → key-X) and
(omitted factor → outcome).

### The five diagrams — which omissions are a problem?

The lecturer drew these live. Learn them; they answer most model-specification
questions instantly.

| # | Structure | Is omitting F a problem? |
|---|---|---|
| 1 | `F → X` and `F → Y` (**confounder**) | **Yes.** Must be controlled for. Still a problem if F is unobservable — you can't fix it, but "don't sweep it under the carpet". |
| 2 | `F → X` only | **No** — this is your **good variation**. Do *not* control for it. |
| 3 | `X → F → Y` (**mediator**) | **No** — it belongs out. |
| 4 | `F → Y` only | **Maybe.** Fine unless F happens to be **incidentally** correlated with X, which makes it a confounder. |
| 5 | F is **both** confounder and mediator | "That's a real tricky one. And that's more often than not what is actually happening in real life." |

### Worked example — income and education

```
income = β₀ + β₁ educ + ε
```

Innate **intelligence** and **motivation**: not in the model, affect income
(**+**), correlated with years of schooling (**+**) and not because schooling
causes them.

```
Direction:  (+) × (+)  =  positive  →  β₁ is biased UPWARD
```

What about **skills and network connections**? Those are *products* of education —
mediators. Leaving them out is correct. The lecturer's line: "lucky we didn't
have data on them, we couldn't put them in and accidentally cause a bias."

### The three sources of omitted-factors bias

#### (a) Spurious correlation

**The search order: start at the key-X, then look at the outcome.**

- Step 1: what makes the key-X high for some observations and low for others?
  (For a dummy: what makes some get the treatment?)
- Step 2: could any of those factors affect the outcome **independently**, and are
  they not fully held constant?

Examples: state unemployment → teen marijuana use; individual wine consumption →
health; a country's chocolate consumption → Nobel laureates. (That last one is a
real study, published in **2012**. The chain: national wealth drives chocolate
consumption — a luxury good — *and* drives research funding and universities,
which drive Nobel prizes.)

#### (b) Incidental correlation

**The search order runs the other way: start at the outcome, then check back to
the key-X.**

- Step 1: what are the major determinants of Y?
- Step 2: could any of them be *incidentally* — coincidentally — correlated with
  the key-X?

"This is the difficult one", and it is **much more likely in small samples**.

Examples: with only 50 lemon trees, randomly assigning watering schedules does
not guarantee that water is evenly spread across soil quality. Or: tax rates and
economic strength 1991–2017 — certain events just happen to coincide in time.

#### (c) Replacement action

**What do people do instead when they don't get the treatment?**

- Step 1: would subjects with a low value of the key-X tend to respond somehow?
- Step 2: could that response affect the outcome, and is it not held constant?

Two worked directions:

```
WINE and health:
   wine ↔ beer            negative  (drinking wine means drinking less beer)
   beer → health          negative
   mechanism = (−) × (−) = POSITIVE
   → omitting beer biases the wine effect UPWARD (wine looks healthier than it is)

OATMEAL and cholesterol:
   oatmeal ↔ bacon & eggs   negative  (oatmeal for breakfast means no fry-up)
   bacon → cholesterol      positive
   mechanism = (−) × (+) = NEGATIVE
   → omitting bacon biases the oatmeal effect DOWNWARD (oatmeal looks better
     at lowering cholesterol than it is)
```

The fix in both cases: **include a control for whatever the replacement action
is.**

### The oatmeal / health-consciousness version

A different omitted factor for the same study:

```
health consciousness → oatmeal      positive
health consciousness → cholesterol  negative
mechanism = (+) × (−) = NEGATIVE
→ the estimated oatmeal effect is MORE negative than the truth.
  "The actual oatmeal effect is not that negative. It might be even 0."
```

> **Not everything missing from the model is an "omitted factor".** The slides
> require the factor to be **non-trivially correlated with the key-X**. A variable
> that affects Y but is unrelated to the key-X causes no bias — it only costs you
> precision. Listing every conceivable missing variable is not an answer; naming
> one and arguing both of its correlations is.

> **Never use a mediator to fix omitted-factors bias.** You would be swapping
> PITFALL #2 for PITFALL #5, and moving the bias in the opposite direction rather
> than removing it.

> **When the key-X is a conscious decision, omitted-factors bias is practically
> impossible to address.** Education, training, drinking, divorce, enrolling in a
> programme — anything the subject chose. You acknowledge it; you don't fix it.

---

## 5.3 PITFALL #3 — Self-selection bias

**What it is:** the individual's own expected effect is a factor in determining
whether they get the treatment, or how much of it.

**Three conditions**, all of which must hold:

1. the subject can, to some extent, **choose** the value of the key-X;
2. the choice is made **in anticipation of a benefit** (or to avoid a cost) that
   works through the outcome; and
3. they are **at least partly right** about that benefit.

**What to check:** did the subject choose or get assigned to the key-X by some
means related to the personal benefits or costs of that variable?

**Direction of bias:** **positive if higher values of the outcome are good;
negative if higher values are bad.**

### Worked example — Charlie and David

| | Income without degree | Income with degree | Individual gain |
|---|---|---|---|
| **Charlie** (likes computers) | $30,000 | $110,000 | **+$80,000** |
| **David** (likes working with his hands) | $40,000 | $60,000 | **+$20,000** |

```
True average college effect  =  (80,000 + 20,000) / 2  =  $50,000
```

But Charlie goes to college and David doesn't — each correctly anticipating their
own return. So the data contains Charlie *with* a degree and David *without*:

```
Observed comparison  =  110,000 − 40,000  =  $70,000
Bias                 =  70,000 − 50,000   =  +$20,000  (upward)
```

Income is a **good** outcome, so the bias is **positive**, exactly as the rule
predicts.

### Worked example — divorce, in both directions

```
Sᵢ = β₀ + β₁Xᵢ + β₂Dᵢ + εᵢ      S = achievement test scores (higher is GOOD)
Bᵢ = δ₀ + δ₁Xᵢ + δ₂Dᵢ + ϵᵢ      B = behavioural problems (higher is BAD)
```

Parents who divorce partly do so anticipating better outcomes for the children.

- On **test scores** the bias is **positive** — the divorce effect looks better
  (less negative) than it is.
- On **behavioural problems** the bias is **negative** — divorce looks like it
  reduces problems more than it really does.

**Same treatment, same sample, opposite bias directions**, purely because one
outcome is "good" and the other is "bad".

> **This is the pitfall whose direction is easiest to get backwards, and the
> lecturer admits it: "it's a little bit more tricky to figure out always which
> way."** The reliable procedure: (1) ask whether a high value of *the outcome
> variable as measured* is desirable; (2) if yes, the people who opt in are the
> ones expecting the biggest gain, so the estimate is too high; (3) if the outcome
> is undesirable, flip it.
>
> Test yourself on the minimum-wage case: does raising the minimum wage cost jobs?
> States choose to raise it when their economy can absorb it. **Employment is a
> good outcome**, so the bias is **upward** — the estimated employment effect
> "doesn't appear as negative as it actually potentially should be."

> **Self-selection turns an ATE into an ATT.** If subjects choose their own
> treatment, what you estimate is the average effect *for the treated* — the people
> who opted in — not the average effect for the population. "Think about the
> student who is motivated to attend the training: the average effect is the
> representation of the student who was motivated, not of a random student."

---

## 5.4 PITFALL #4 — Measurement error

**What it is:** an explanatory variable is measured with error. Causes: lying,
poor recollection, mis-coding, or **poor representation of the intended concept**.

**What to check:** could there be non-trivial error in the survey response or the
coding of the key-X? Or is the variable an **imperfect proxy** for the concept you
actually mean?

**Direction of bias:**

| Situation | Direction |
|---|---|
| Error is **random** — uncorrelated with the outcome and other X's | **Towards zero** (attenuation). "Nearly always." |
| Error has non-trivial **correlation** with something, or a subgroup is systematically miscoded | **Could go either way** |
| Error is in the **dependent** variable | **No bias**, provided the errors are unrelated to any key-X |

> **Measurement error is only a problem in the *explanatory* variables.** Noise in
> Y costs you precision, not accuracy. This is a very common exam distractor —
> "the outcome is self-reported, so the estimate is biased" is **wrong** unless the
> reporting error is correlated with the key-X.

> **There is no fix.** "Apart from simple code mismatches and trackable typos,
> there is no feasible way to correct for the measurement error. Go get new data?"
> The exam answer is: state the direction (usually attenuation), state what that
> implies for the true effect, and recommend better measurement.

### The most examinable version: the wrong concept

This is subtler and more interesting than lying about cigarettes. The lecture's
divorce example:

> Is it the **legal proceeding** that causes a child to behave differently? No —
> it's the household breaking up. "Divorce may be an incorrect variable to use.
> Maybe we should rather have a measure of **separation vs non-separation**."

A variable can be measured perfectly and still be the wrong variable. Attenuation
still applies: the mismatch between the proxy and the concept behaves like noise
and pulls the estimate toward zero.

---

## 5.5 PITFALL #5 — Mediating factors or outcomes as controls

> "Congratulations. I knew the record would stand until it was broken."
> "I wouldn't have hit so many home runs if I hadn't hit the ball so hard."
> — Yogi Berra, quoted on the slides

**What it is:** a control variable that is actually a **product of the key-X**
(or determined after it). Controlling for it removes part of the effect you are
trying to capture.

**What to check:** could any control variable be a product of the key-X? If so,
**drop it**.

**Direction of bias:** **the opposite of the sign of the mechanism.**

### Worked example — unemployment and teen drug use

Three mediators sit between state unemployment and teen marijuana use:

| Mediator | unemployment → M | M → drug use | Mechanism |
|---|---|---|---|
| Teen income | **negative** | **positive** | **negative** |
| Boredom | positive | positive | positive |
| Drug availability | positive | positive | positive |

Control for **teen income** and you strip the *negative* channel out of the
unemployment effect. Bias is the opposite of the mechanism, so the unemployment
coefficient gets a **positive** bump — "it's too high positive because we missed
out on the income."

### Worked example — state tax rate and economic growth

A cascade, and every step biases the same way:

```
Model 1:  growth = f(tax rate)                          ← report this one
Model 2:  + employment growth
             tax → employment    negative
             employment → growth positive
             mechanism = NEGATIVE  →  including it gives a POSITIVE bias
Model 3:  + income per capita
             tax → income        negative
             income → growth     positive
             mechanism = NEGATIVE  →  another POSITIVE bias
```

"So every single time we get a positive bias, then we keep on adding these
mediating factors or outcomes into the model."

> **R² rises down that cascade, and that is the trap.** The lecturer, looking at
> the table: "I am 100% sure that the R² for Models 1, 2 and 3 are increasing
> exactly in that order… **But that's absolutely what you should not be looking
> at.**" The most biased model has the best fit. If an exam output shows three
> nested models with rising R² and a coefficient drifting, that is a mediator
> question, not a model-selection question.

### When a variable is both a confounder and a mediator

The realistic case, and the slides give a procedure. Example: NRA donations → a
politician's vote on a pro-gun bill, with the politician's prior **voting record**
as a candidate control.

| Reading | Mechanism | Consequence |
|---|---|---|
| Voting record is a **mediator** (donations → record → vote) | positive | **Including** it biases the donation effect **negatively** |
| Voting record is a **confounder** (record → NRA relationship → donations; record → vote) | positive | **Omitting** it biases the donation effect **positively** |

Either way you are biased. **The prescribed procedure:**

1. **Acknowledge the dilemma** explicitly.
2. **Estimate the model with and without** the variable.
3. If the results are **similar**, neither role is strong — say so and move on.
4. If they **differ**, report both, and try to resolve the **order of events** —
   ideally with data from an earlier period. If donations are measured five years
   before the voting record, the causal order is settled.
5. If you still can't tell: "you just have two different models and you have to
   interpret them both and acknowledge the direction of the bias in both. **There
   is no easy way out of that.**"

---

## 5.6 PITFALL #6 — Improper reference group

> "Compared to my worst game ever, I did pretty good out there today." — Yogi
> Berra

**What the reference group is**, depending on the key-X:

| Key-X type | Reference group |
|---|---|
| Yes/no dummy | Those **not** receiving treatment |
| Multi-category | The group with **no dummy** in the model |
| Quantitative | Those with a **low value** of the key-X |

**Three questions to ask:**

1. Does the reference group represent an **incorrect counterfactual** — is it a
   fair picture of what a treated subject would have experienced untreated?
2. Would the reference group be more likely to **do something else instead** of
   the treatment, and would that affect the outcome?
3. Does the reference group experience a **lower-intensity version** of the
   treatment?

**Direction of bias:** **positive if the reference group used has lower values of
the outcome than the proper reference group would have.** (You are measuring the
treatment against too low a baseline, so it looks too good.)

### (a) Incorrect counterfactual — military re-enlistment

Three categories: **no deployment**, **non-hostile deployment**, **hostile
deployment**. Outcome: probability of re-enlisting. The slide uses **no
deployment** as the reference.

| Reference group | Army: hostile deployment effect | Marines |
|---|---|---|
| **No deployment** (as on the slide) | about **−0.005** — tiny, insignificant | *positive* — Marines look **more** likely to re-enlist |
| **Non-hostile deployment** (the right one) | **−0.087 = −8.7%**, and **statistically significant** | **−4.8%** |

Corrected, "in both cases there is in fact a deterring effect." The slide's
result is, in the lecturer's word, "**completely misleading**".

> **The "no deployment" Army figure is quoted inconsistently in the lecture** —
> she says both "−0.05" and "−0.005" in the same breath. Either way it is
> statistically insignificant and an order of magnitude smaller than the corrected
> −0.087, which is the point. Don't quote a precise number for that cell; quote
> the **corrected** ones, which she states clearly and twice.

Why "no deployment" is the wrong counterfactual: someone who joined the US
military was very likely to be deployed somewhere. The realistic alternative to a
*hostile* deployment is a *non-hostile* deployment, not no deployment at all. And
a detail not visible on the slide: **the no-deployment group is tiny.**

### (b) Incorrect counterfactual — PTSD and deployment length

Categories: very short / 60–180 days / 181+ days. Key-X = 181+ days.

| Reference group | Estimated effect on PTSD detection |
|---|---|
| **60–180 days** (the right one) | **1.1%** |
| Very short deployment | **2.2%** — exactly **twice as big** |

Same data, same model, an effect that doubles based on the baseline you chose.

### (c) The reference group is doing something else instead

This is directly the **replacement action** source of omitted-factors bias, seen
from the reference-group side. Direction of bias: **opposite to the effect of the
replacement action on the outcome.** Same two examples: oatmeal (the reference
group eats bacon and eggs) and wine (the reference group drinks beer).

### (d) The reference group gets a lower-intensity dose

When the key-X is a dummy carved out of a quantitative variable, the "untreated"
group may still be getting some of the treatment.

```
Model 1:  PP = β₀ + β₁ FiveOrMore + ε      hours on phone: 5+ vs everyone else
Model 2:  PP = β₀ + β₁ About1 + β₂ About3 + β₃ About5 + ε
Model 3:  PP = β₀ + β₁ Heavy + ε
```

If the reference group in Model 1 averages three hours a day on their phone, they
are experiencing the postural effect too, just less of it. **Direction of bias:
towards zero** — the treatment effect gets mitigated because the comparison group
is partly treated.

> **Researchers can manipulate results by choosing the reference group**, and the
> lecturer's honest caveat is that "there's not always necessarily a *correct*
> reference group, but there is a good choice and there's potentially a bad
> choice." So the exam answer is never "the reference group is wrong" — it is
> "here is why this baseline is a poor counterfactual, here is a better one, and
> here is which way that moves the estimate."

---

## 5.7 PITFALL #7 — Over-weighting groups

**What it is:** the estimated average treatment effect is dragged toward the
effect in the groups that carry the most weight.

**Three conditions**, all of which must hold:

1. a control variable (or set) **categorises the sample into groups** — including
   plain dummies and fixed effects;
2. the **effect of the key-X differs meaningfully across** those groups; and
3. the **variance of the key-X differs across** those groups.

Recall from Chapter 4: a dummy control gives you a weighted average of the
group-specific effects, weighted by group **size** *and* by the **within-group
variance of the key-X**. Condition 3 is what makes that weighting go wrong.

**Direction of bias:** **towards the effect in the over-weighted groups.**
Positive if the over-weighted groups have more positive treatment effects than the
others; negative otherwise.

**What to do:** if possible, **estimate the model separately for each group** and
compare both the effects and the variance of the key-X across groups.

### Worked example — class size and evaluations, again

Four professors, 25 classes each. Their true individual class-size effects:

| Professor | True class-size effect |
|---|---|
| A | **−0.03** |
| B | **−0.01** |
| C | 0.00 |
| D | 0.00 |

```
True average effect  =  (−0.03 − 0.01 + 0 + 0) / 4  =  −0.01
```

Now compare two versions of the data:

| Version | Range of class sizes | Estimated model | Estimate |
|---|---|---|---|
| **Equal ranges** (Ch 4) | all four have a range of 40 | `Ê = 3.92 − 0.0098 CS + 0.811 B + 2.29 C + 3.23 D` | **−0.0098** ✓ |
| **Varying ranges** (Ch 6) | A's range is 30, D's is 100 | `Ê = 4.15 − 0.0027 CS + 0.455 B + 0.181 C + 1.25 D` | **−0.0027** ✗ |

With equal ranges the estimate is essentially the truth. With unequal ranges the
weights become **roughly 5% on A and 55% on D** — and since A is the only strongly
negative effect and D is zero, the estimated ATE collapses to about a quarter of
the true value.

Sanity check the slide's numbers: if A carries 5% of the weight and only A and B
have non-zero effects, then

```
−0.03 × 0.05  +  −0.01 × w_B  =  −0.0027
       −0.0015  −  0.01 w_B   =  −0.0027
                        w_B   =  0.12
```

which is a coherent weight set (A 5%, B 12%, C 28%, D 55%). The slide's figures
hang together.

> **Bigger variance in the key-X within a group = more weight for that group's
> effect.** That is the whole mechanism. It is also why the Chapter 4 version of
> this example was *slightly* off the simple average: randomisation gave Professor
> A a marginally wider spread of class sizes, so A's more-negative effect got
> marginally more weight, and −0.0098 came out a touch below the −0.0084 simple
> average.

> **The fix is not in Chapters 2–7.** The lecturer flagged that the repair — a
> weighting scheme **inversely related to the standard deviation of the key-X
> within each group** — sits in Chapter 8, which is not examinable. For the exam,
> **detect it, state the direction, recommend estimating group by group.**

---

## 5.8 Choosing the optimal set of controls

> **"Regression is like a glass of beer."** Jeremy Arkes' story on the slides: he
> poured a whole pitcher into a half-full cup, producing "a mostly-foam glass of
> beer", and told his friends "this is what happens when you put too many variables
> into your regression". Important information is lost and the meaning of the
> existing estimates becomes foamier.

The purpose of controls is to **address potential PITFALLS** — mainly
omitted-factors bias and improper reference groups — and to **rule out alternative
explanations** for the relationship you observe. Including the *wrong* controls
introduces new pitfalls.

| Difficulty | Task |
|---|---|
| **Easy** | Recognise and exclude mediating factors and outcomes |
| **Hard** | The three types of omitted-factors bias |
| Different problem | Improper reference group — this is about characterising the **treatment** correctly, not about picking controls |

### Criteria you must NOT use

The lecturer went out of her way to emphasise the "do not use" column of the
selection table:

| ✗ Not a reason to include or exclude a control |
|---|
| Whether it improves **R², adjusted R², AIC or BIC** — "not of interest. **So stop it there.**" |
| Whether the **control's own coefficient is statistically significant** |
| Whether the **control itself** suffers omitted-variable bias |
| Whether the **control itself** is measured with error |
| Whether the control is a **mediator for another control** (only mediation of the **key-X** matters) |

> **The exam's favourite wrong answer is "we removed the control because it wasn't
> significant".** A control's job is to hold something constant. Its p-value is
> irrelevant to whether it does that job. Same for R²: the most biased model in the
> tax-rate cascade had the best fit.

### Validity of the sample

Separate from the seven pitfalls, and it matters for **every** objective:

| Problem | What it is |
|---|---|
| **Sample-selection bias** | The sample is non-random because observations were selected on something related to the outcome. **Not the same as self-selection bias**, which is about choosing the *treatment*. |
| **Attrition bias** | Those who stay in the sample differ from those who drop out |
| **Strategic sampling** | Parts of the population (e.g. low-income groups) are deliberately oversampled — sampling weights may help |
| **Time period** | The sample period may no longer be relevant today |

---

## 5.9 Applying all seven — the template

Every case-based exam question is this walk-through. Practise it until it's
automatic. Use the divorce-and-children case the lecture worked live:

```
Outcomeᵢ = β₀ + β₁Xᵢ + β₂Dᵢ + εᵢ        D = parents divorced
```

| # | PITFALL | Applied to divorce → child behavioural problems | Direction |
|---|---|---|---|
| 1 | Reverse causality | A child's behavioural problems strain the marriage → divorce. Reverse arrow **positive**. | **Positive** — so an insignificant estimate means the true effect is probably slightly negative |
| 2 | Omitted factors | Socioeconomic status → divorce (**−**), SES → behaviour problems (**−**). Mechanism `(−)×(−)` = **positive**. | **Positive** — a near-zero estimate implies a truly negative effect |
| 3 | Self-selection | Parents divorce partly *in order to* reduce behavioural problems. Higher B is **bad**. | **Negative** |
| 4 | Measurement error | Legal divorce ≠ separation. The key-X may be the wrong concept entirely. | Towards zero |
| 5 | Mediators | Divorce → family support (**−**) → behaviour problems (**−**). Mechanism **positive**; wrongly *including* family support biases **opposite**. | **Negative** |
| 6 | Improper reference group | `D = 0` pools never-married households, single-parent households, and separated-but-not-divorced couples. "If you've never had two parents, you cannot experience divorce." | Depends on the pooled group's mean outcome |
| 7 | Over-weighting | Split by socioeconomic status: if divorce varies more within low-SES families, their effect is over-represented in the estimate. | Towards the low-SES effect |

> **Notice that pitfalls 1, 2 and 3 point in conflicting directions here.** That is
> normal and it is the honest answer: two forces push the estimate up, one pushes
> it down, and the net is unknown. Saying so — clearly, with the mechanism for each
> — is a better answer than picking one and asserting a single net direction.

### The five-step routine for any case

1. **Identify the objective.** Causal? Forecast? Predictors? Adjusting? This
   decides which pitfalls even apply.
2. **Name the pieces.** Outcome, key-X, controls. What is being held constant,
   and how do you know.
3. **Read the output.** Interpret the key-X coefficient in plain English, with
   "holding … constant" and "on average". State significance via t, p, or the CI.
4. **Critique with the pitfalls.** For each relevant one: what to check → does it
   apply here → **direction of bias** → what that means for the true effect.
5. **Conclude.** What can you legitimately claim, and one concrete
   recommendation — a better control, a different reference group, a lagged
   measure of the key-X, or an honest acknowledgement.

---

## Summary table — what to check, and which way

| # | PITFALL | What to check for | Direction of bias |
|---|---|---|---|
| 1 | **Reverse causality** | Does the outcome affect an X variable? | The direction in which the outcome affects the treatment |
| 2 | **Omitted-factors bias** | Does some omitted factor affect both the key-X and the outcome? Incidental correlation? Replacement action? | The **sign of the product** of (omitted → treatment) and (omitted → outcome) |
| 3 | **Self-selection bias** | Did the subject choose the key-X by some means related to its personal benefits or costs? | **Positive** if higher outcome values are good; **negative** if they are bad |
| 4 | **Measurement error** | Non-trivial error in coding the explanatory variable? Is the X an imperfect proxy for the concept? | **Towards zero** if the error is random; uncertain otherwise |
| 5 | **Mediators / outcomes as controls** | Is a control a product of the key-X, or determined after it? | The **opposite** of the sign of the mechanism |
| 6 | **Improper reference group** | Correct counterfactual? Replacement action? Lower-intensity dose in the reference group? | **Positive** if the reference group used has lower outcome values than the proper one |
| 7 | **Over-weighted groups** | Do the variance of the key-X **and** its effect both vary across the controlled-for groups? | Towards the effect in the **over-weighted** groups |

---

## Checkpoint

<details>
<summary>1. A study estimates the effect of attending a voluntary corporate mentoring programme on promotion rates. Which pitfalls are live, and in which direction?</summary>

**Objective:** causal → all seven apply.

- **#3 Self-selection** is the headline. Employees choose to enrol, and the ones
  who enrol are the ones expecting the biggest career return. Promotion is a
  **good** outcome, so the bias is **positive** — the estimate overstates the
  programme's effect. And because the key-X is a conscious decision, this
  "practically cannot be addressed"; you acknowledge it.
- **#2 Omitted factors:** ambition and existing manager relationships raise both
  enrolment (**+**) and promotion (**+**). Mechanism `(+)×(+)` = **positive** →
  another **upward** bias.
- **#1 Reverse causality:** if people already flagged for promotion are nominated
  for mentoring, then promotion prospects → enrolment, **positive**, biasing
  **upward** again. Fix: use enrolment measured **before** the promotion window.
- **#5 Mediators:** do not control for "skills gained" or "network size" — those
  are how mentoring works.
- **#6 Reference group:** who is in the `D = 0` group? If some of them get
  informal mentoring, they are getting a lower-intensity dose, biasing the
  estimate **towards zero**.

**Conclusion:** three separate forces push the estimate up and one pushes it down,
with the upward ones dominant. Treat the reported effect as an **upper bound**.
</details>

<details>
<summary>2. Omitted factor F has a positive effect on the outcome and a negative correlation with the key-X. Which way is the key-X coefficient biased, and what does that imply if the estimate is +2.0?</summary>

```
Mechanism = sign(F → key-X) × sign(F → Y) = (−) × (+) = NEGATIVE
```

Omitting a confounder biases in the **same** direction as its mechanism, so the
key-X coefficient is biased **downwards** — pulled towards, and possibly past,
zero.

If the estimate is **+2.0** and it is downward biased, the **true effect is
larger than +2.0**. Report the 2.0 as a **lower bound**.

This is exactly what happens with `baseline_skill` in the `performance.dta` case
— see the worked-cases note, where adding it moves `training_hours` from 1.4912
up to 1.8853.
</details>

<details>
<summary>3. Why is "the control variable was insignificant so we dropped it" a bad answer?</summary>

Because a control's job is to hold a confounding factor constant, and its own
p-value has nothing to do with whether it does that job.

Two ways it goes wrong: an insignificant control can still be removing a large
amount of bad operative variation from the key-X (and dropping it brings the bias
straight back); and an insignificant coefficient may just be imprecise —
insignificance is not "no effect".

The lecturer lists statistical significance of controls explicitly among the
criteria you should **not** use, alongside R², adjusted R², AIC and BIC. Control
selection is an argument about causal structure.

The `budget_availability` variable in the `performance.dta` model is the live
example: `p = 0.863`, thoroughly insignificant, and kept — because dropping it
would risk omitted-variable bias on the controls that operate through funding.
Its coefficient just shouldn't be interpreted.
</details>

<details>
<summary>4. A researcher compares hospitals' patient mortality, controlling for patient age, comorbidities — and length of stay. What's wrong?</summary>

**Length of stay is a mediator / an outcome, not a control** (PITFALL #5). It is
determined *after* admission and is partly a *product* of the quality of care
being measured — a good hospital may discharge patients sooner, or may keep the
sickest patients alive longer.

Controlling for it asks "among patients who stayed the same number of days, which
hospital has lower mortality?", which removes part of the very performance
difference the study is trying to detect.

There is also a **#6 reference group / #7 over-weighting** angle: if hospitals
differ systematically in case mix, and the effect of care quality differs across
case-mix groups, the estimated average is dragged towards whichever groups carry
the most variance.

Age and comorbidities are legitimate controls — determined before admission and
affecting both which hospital a patient goes to and their mortality risk.
</details>

<details>
<summary>5. Two nested models are shown. Model A: `growth = f(tax)`, coefficient −0.42, R² = 0.18. Model B adds `employment growth`: tax coefficient −0.11, R² = 0.44. Which do you report?</summary>

**Model A.** Employment growth is a **mediator**: a higher tax rate reduces
employment growth, and lower employment growth reduces economic growth.

```
tax → employment       negative
employment → growth    positive
mechanism = (−) × (+) = NEGATIVE
```

Including a mediator biases in the **opposite** direction to the mechanism, so
Model B's tax coefficient is biased **positive** — which is exactly what you see:
it moved from −0.42 up to −0.11.

The higher R² in Model B is not a reason to prefer it. It is the expected
consequence of adding a variable that is close to the outcome, and it is "what you
should not be looking at" for a causal objective. Model B answers "holding
employment growth constant, what does tax do?" — a question nobody asked.
</details>

---

## Summary

- Seven pitfalls, three families: **non-random key-X** (1–3), **bad data** (4),
  **modelling mistakes** (5–7). For a causal objective all seven are live.
- Direction of bias almost always reduces to
  `sign(mechanism) = sign(arrow 1) × sign(arrow 2)`, then:
  **confounder left out → same direction as the mechanism; mediator put in →
  opposite direction.**
- Always convert a direction into a claim about the truth: "the estimate is
  upward biased, so the true effect is at most X."
- Omitted-factors bias has three sources — **spurious** (start at the key-X),
  **incidental** (start at the outcome; worse in small samples), **replacement
  action** (what does the untreated group do instead?).
- Self-selection: **positive bias when the outcome is good**, negative when bad.
  It converts an ATE into an **ATT**.
- Measurement error only matters in the **explanatory** variables, usually
  attenuates, and cannot be fixed.
- Never choose controls on **fit or significance**. Never use a mediator to fix
  omitted-factors bias.
- Most biases **cannot be proven to exist**. The job is to assess whether the
  potential is there, state the direction, and be honest about it.
