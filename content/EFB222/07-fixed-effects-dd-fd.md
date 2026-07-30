# Topic 7 — Fixed Effects, Difference-in-Differences and First Differences

*Chapter 8. Methods that actually **address** the biases from Chapter 6.*

> ## Not examinable
>
> **This chapter is not on the final exam.** The unit coordinator was asked
> directly whether the added fixed-effects and difference-in-differences topic was
> examinable and answered "**No, they're not**", adding "but that doesn't mean
> please don't come in and listen to what they are, or at least please read about
> them." The Chapter 8 lecturer opened with "this is not important for the
> lecture exam… so I organised the lecture in a way that it's light material", and
> confirmed at the end of the Chapter 12/13 session: "**you will not get any
> questions from Chapter 8 and this 12**." The coordinator's own summary is that
> the exam "will cover the chapters 2 to 7".
>
> Read this once for the conceptual payoff — it is the answer to "so what do we
> actually *do* about all those pitfalls?" — then spend revision time on Topics
> 1–6 and the practice questions.

---

## 7.1 Fixed effects — the intuition

**The problem, restated in Chapter 5's language:** OLS "doesn't know where to put
these omitted factors in the model, so it puts them in the **error**" — which
violates Condition 5, because the key-X is then correlated with the error term.

**What fixed effects do:** "fixed effects convert this bad operative variation
into **constant** variation." Instead of eliminating the omitted factor, you make
it impossible for it to vary within the comparison.

### Worked example — professors and class size

Three professors, one class each — the naïve across-professor comparison:

| Professor | Class size | Rating |
|---|---|---|
| A (excellent) | 150 | **4.8** |
| B | 80 | **3.9** |
| C | 30 | **2.8** |

Across professors, bigger class ↔ better rating. "So we can say they are positive
relationships — **but this is wrong.**"

Now look **within** each professor:

| Professor | Big class → rating | Small class → rating | Within-professor direction |
|---|---|---|---|
| A | 150 → **4.8** | 80 → **4.5** | bigger class, **lower** rating |
| B | 80 → **3.9** | 40 → **4.1** | bigger class, **lower** rating |
| C | 30 → **2.8** | 15 → **3.0** | bigger class, **lower** rating |

Every professor gets a worse rating with a bigger class. The pooled positive
relationship was entirely the omitted professor-quality effect.

> **"We are not going to compare Professor A's larger class with Professor B's
> smaller class. Rather, we compare Professor A's larger class with Professor A's
> **own** smaller class."** That one sentence is the whole method. It is the same
> move as adding professor dummies in Chapter 4 — fixed effects and a full set of
> group dummies are the same thing.

### Two equivalent readings of a fixed-effects coefficient

1. How **within-professor** differences in class size relate to within-professor
   differences in the evaluations they received.
2. **Deviation from own mean:** compute each professor's own average class size
   and own average rating, then ask how deviations from one relate to deviations
   from the other.

The claim this supports: a **quasi-experiment**. "A natural-experiment-like
design: the treatment varies, but the professor is held constant. And this is much
more credible than comparing across different professors."

### The bias ladder

| Model | Verdict |
|---|---|
| Naïve OLS | "The β is contaminated with this omitted factor" |
| One-way FE (professor) | "Medium biased" |
| Two-way FE (professor + course) | "Better than the one-way fixed effect model" |
| Interactive FE (professor × course pair) | "More refined and trustworthy compared to the other three" |

Interactive fixed effects use a **double subscript**: a separate parameter for
every professor–course *combination*, replacing the separate professor and course
constants.

### Three limitations of fixed effects

1. **They capture only stable differences.** A mid-year course revision, or a
   professor upgrading their skills, isn't accounted for.
2. **Effects may be interactive.** "One professor may be good in one subject but
   not good in another" — one-way and two-way FE both miss this.
3. **You only truly hold one factor constant at a time.** Even with two sets of
   constants, one is held constant and the other is being "adjusted statistically"
   — the Chapter 4 distinction all over again.

---

## 7.2 Difference-in-differences

### The core problem: the counterfactual

You want to know what would have happened to the treated group **had they not
been treated**. That is unobservable by definition — "we cannot see the
alternative universe."

Two obvious shortcuts, both broken:

| Shortcut | Why it fails |
|---|---|
| **Before vs after** (treated group only) | Conflates the treatment with everything else that changed over time — the economy, inflation, prices |
| **Treated vs untreated** (after only) | Conflates the treatment with **pre-existing differences** between the groups |

**DD combines the two comparisons and each one cancels the other's problem.**

### The four components and the estimator

You need a **treatment group**, a **control group**, and **two periods**, with the
treatment occurring between them.

| | Treatment group | Control group |
|---|---|---|
| **Before** | A | B |
| **After** | C | D |

```
DD estimate  =  (C − A)  −  (D − B)

              = (change in the treated)  −  (change in the control)
```

The control group's change is your estimate of what would have happened to the
treated group anyway. Subtract it, and what's left is the treatment.

> **The lecture states this once as "(C − A) minus (B − D)". That is a slip — it
> should be (D − B).** He does the arithmetic correctly in the worked example
> (post minus pre for both groups, then treated-change minus control-change). Use
> `DD = (C − A) − (D − B)`.

### The regression form

```
Y = β₁ + β₂ Post + β₃ Treat + β₄ (Post × Treat) + ε
```

| Term | Captures |
|---|---|
| `Post` | The overall **time trend** affecting everyone |
| `Treat` | The **baseline difference** between the groups |
| `Post × Treat` | **Only the treated group, only after treatment** |

**`β₄` is the DD estimate** — the coefficient you interpret. It eliminates the
pre-existing difference (soaked up by `Treat`) and the time-varying difference
(soaked up by `Post`).

### The parallel trends assumption

> **The primary condition: without the treatment, both groups would have had the
> same average *change* in the outcome between the two periods.**
>
> The groups may start at completely different **levels**. What must match is the
> **trend**: "it doesn't matter where it starts, but the changes in the average
> should move in parallel. All we want is the parallel trend in the growth."

### ATE or ATT?

If parallel trends holds, DD estimates one of two things:

| Estimate | When | Meaning |
|---|---|---|
| **ATE** — average treatment effect | The control group **would have had the same average change** as the treatment group did, had they been treated | A random draw from the population |
| **ATT** — average treatment effect **on the treated** | The control group would have had a **different** change had they been treated | Applies only to the specific group that got treated |

> **Any self-selection into the treatment turns your ATE into an ATT.** "Whether
> it is the ATE or ATT typically comes down to whether the treatment was a
> conscious choice of the subject or just something out of the subject's control."
> The lecture's illustration: if you study a *voluntary* training programme, "the
> average effect is the representation of the student who was **motivated** to
> attend the training, not of a random student."
>
> **We normally want the ATE**, because that's what generalises to the population.

### Worked example — Card & Krueger, minimum wage (1994)

New Jersey raised its minimum wage from **$4.25 to $5.05** in **April 1992**.
Standard theory predicts a fall in fast-food employment. Treatment = New Jersey;
control = **Pennsylvania**, a neighbouring border state with a similar labour
market. Outcome = full-time-equivalent workers.

| | Before (Feb) | After (Nov) | Change |
|---|---|---|---|
| **New Jersey** (treatment) | 20.44 | 21.03 | **+0.59** |
| **Pennsylvania** (control) | 23.33 | 21.17 | **−2.16** |

```
DD  =  (+0.59)  −  (−2.16)  =  0.59 + 2.16  =  2.75
```

The study reports **2.76**. The one-hundredth gap is rounding in the components —
the underlying changes carry more decimals than the table shows.

> **The transcript quotes Pennsylvania's "before" figure as 23.3, which doesn't
> reconcile.** `21.17 − 23.3 = −2.13`, not the stated −2.16. The figure must be
> **23.33**. The lecture also says the DD result once as "2.076" and elsewhere as
> "2.76"; the arithmetic supports **2.76**.

**The interpretation:** a positive DD means the minimum-wage rise appears to have
**increased** employment relative to the control state — the opposite of standard
theory. This is why the study is famous.

**And why the lecture says it fails:**

1. **Parallel trends is violated.** The positive 2.76 is not driven by job growth
   in New Jersey — NJ is roughly **flat**. It is driven by a large, unexplained
   **collapse in Pennsylvania employment**, which was already falling before the
   policy. "Because the states did not exhibit parallel employment trends prior to
   the treatment, the assumption that NJ would have behaved like PA without the
   wage hike is invalid."
2. **Selection bias.** The policy change was not random. New Jersey may have
   raised its minimum wage **precisely because** its economy was strong enough to
   absorb it.

Verdict from the lecture: "this was not a convincing study, but it is a very
popular study… the design of the experiment was not cleverly designed."

### Worked example — EITC and infant health (Hoynes et al., 2015)

The 1993 expansion of the US **Earned Income Tax Credit** increased payments,
targeting poverty while incentivising work. Question: did higher EITC payments
reduce the probability of **low birth weight** (defined as **under 2,500 g**)?

The clever design: the treatment and control groups are **the same kind of
mothers**, differing only in the size of the payment.

| Group | EITC increase |
|---|---|
| Parity 1 (first child) — **control** | smallest payment |
| Parity 2 — treatment | moderate increase |
| Parity 3+ — treatment | largest increase |

Focusing on **Black single mothers**, where the impact was strongest:

| Group | Reduction in the likelihood of low birth weight |
|---|---|
| Parity 2 (moderate increase) | **−0.31 percentage points** |
| Parity 3+ (largest increase) | **−1.04 percentage points** |

Against a baseline mean of **14.9%**, the parity-3+ effect is
`1.04 / 14.9 = 7.0%` of the baseline — inside the "5–9% reduction" the slide
quotes.

> **The dose–response relationship is what validates the design.** More treatment
> → proportionally more effect. That pattern is very hard to produce by accident,
> and it is the contrast with Card & Krueger: "they chose the control group
> **within** the same group of mothers — the only difference is the payment
> difference. But in the New Jersey and Pennsylvania example, **everything** was
> different."

---

## 7.3 First-difference models

**The problem being solved:** subjects (states, students, teachers) have
unobserved characteristics that **stay constant over time** and correlate with
both the outcome and the explanatory variable.

**The move:** analyse **changes**, not levels. Anything time-invariant cancels.

### The reframing

| Instead of asking | Ask |
|---|---|
| "Do states with higher unemployment have higher teen drug use?" | "**Do states where unemployment increased more also see drug use increase more?**" |

That reframing removes every fixed state characteristic — culture, geography,
baseline policies, enforcement, weather, history.

### The algebra

```
Period 1:   MJ₁  =  β₀ + β₁ UR₁ + αₛ + ε₁
Period 2:   MJ₂  =  β₀ + β₁ UR₂ + αₛ + ε₂
                                   ↑
                    αₛ = the hidden state effect — the problem

Subtract:   ΔMJ  =  β₁ ΔUR + Δε         (αₛ cancels)
```

Change in drug use = β₁ × change in unemployment.

### Worked example — unemployment and teen marijuana use

50 US states, two periods: **2006–07** and **2009–10**. Each period is averaged
over two years for precision in the smaller states. The second period sits inside
the **financial crisis**, so unemployment rose in every state.

| Model | Coefficient on UR | Significant? | R² | Trust |
|---|---|---|---|---|
| Cross-section 2006–07 | **0.524** | Yes (barely) | 0.071 | Low |
| Cross-section 2009–10 | **0.244** | No | — | Low |
| **First-difference** | **0.153** | No | 0.03 | **HIGH** |

The effect shrinks from 0.524 to 0.153 and loses significance. Conclusion: the
cross-sectional relationship "may have been biased — hidden state characteristics
may have inflated the earlier estimates."

> **Do not use R² to pick between these models — this is the whole point of the
> example.** The FD model has the **lowest** R² (0.03 vs 0.071) and is the **most
> trustworthy**.
>
> - ✗ Wrong: "FD has R² = 0.03, much lower than 0.07, so it must be the worst
>   model."
> - ✓ Right: "FD has the lowest R² **because it removes the junk variation** — the
>   stable state effects. There is less total variation left to explain, so R²
>   naturally falls. It is the most trustworthy model."

### Real-world application: teacher evaluation

Most school districts already use this logic without calling it first differences:

| Approach | Problem |
|---|---|
| Compare end-of-year test scores across teachers | Teachers in wealthy districts get better-prepared students |
| Compare the **change** in scores (value-added) | Student baseline preparation is **differenced out** |

Still imperfect — differences in learning *ability* (a growth-rate difference, not
a level difference) survive the differencing.

---

## 7.4 How the three methods relate

| Method | What it removes | What it needs |
|---|---|---|
| **Fixed effects** | Everything constant within the group | Multiple observations per group |
| **First differences** | Everything constant over time within the subject | Two (or more) periods per subject |
| **Difference-in-differences** | Baseline group differences **and** the common time trend | Two groups, two periods, and **parallel trends** |

All three rely on **within-group variation**. DD, in the lecture's framing,
"operates on principles highly similar to models that use state and time-period
fixed effects" — it factors out broad uniform time effects and baseline
differences.

> **None of them automatically solves selection bias.** "While mathematically
> elegant, using a DD method (or fixed effects) does not automatically solve
> selection bias. The operational conditions must be rigorously validated." If
> subjects chose their treatment, you get an ATT no matter how elegant the
> estimator.

---

## Checkpoint

<details>
<summary>1. A city introduces a congestion charge in 2024. Average commute times fall 8% from 2023 to 2025. A neighbouring city with no charge sees commute times fall 5% over the same period. What is the DD estimate, and what must you check?</summary>

```
DD  =  (−8%)  −  (−5%)  =  −3 percentage points
```

The congestion charge is estimated to have cut commute times by **3 percentage
points more** than they would have fallen anyway. Five of the eight points were
happening regardless — that is exactly what the control city is for, and it is why
the naïve "before vs after" figure of 8% would have overstated the policy by more
than double.

**What to check:**

- **Parallel trends.** Were the two cities' commute times moving in parallel
  *before* 2024? If the neighbouring city was already on a different trajectory,
  the DD is invalid — this is precisely how Card & Krueger fails.
- **Selection.** Was the charge introduced *because* of something about this city
  — worsening congestion, a new government, a funding shortfall? If so the policy
  isn't random and you may only have an ATT.
- **Other shocks.** Did anything else hit one city and not the other in that
  window (a rail line opening, a major employer leaving)?
</details>

<details>
<summary>2. Why does a first-difference model usually have a much lower R² than the cross-sectional model on the same data, and why isn't that a problem?</summary>

R² is the share of the variation in the dependent variable that the model
explains. Differencing **removes the stable, between-subject variation** — the
part driven by fixed state or individual characteristics — before the model ever
sees it.

So the FD model faces a much smaller pool of total variation to explain, and the
variation that remains is the genuinely hard, idiosyncratic kind. R² falls
mechanically.

That is a **feature**. The variation that was removed is exactly the variation
that was contaminating the cross-sectional estimate. Lower R², better estimate.
The unemployment/marijuana example is the canonical case: R² drops from 0.071 to
0.03 and the FD model is the one to trust.
</details>

<details>
<summary>3. A voluntary workplace wellness programme is evaluated with a DD design comparing enrolees and non-enrolees before and after launch. Is the estimate an ATE or an ATT?</summary>

**An ATT** — the average treatment effect **on the treated**.

Enrolment is voluntary, so employees **selected themselves** into treatment, and
they did so for reasons plausibly connected to how much they expected to benefit.
The people who signed up are not a random draw from the workforce.

The estimate therefore tells you the effect **for people like those who
volunteered**, and it will not generalise to the employees who stayed away — who
may be exactly the ones a company-wide rollout would target.

This also puts parallel trends under strain: if the volunteers were already on a
different health trajectory (getting healthier anyway, or getting worse and
seeking help), the control group's change is not a valid counterfactual at all.
</details>

---

## Summary

- **Not examinable — read once, don't revise.**
- **Fixed effects** compare a unit against itself, converting bad operative
  variation into constant variation. Same thing as a full set of group dummies.
- **DD** needs a treatment group, a control group, and two periods.
  `DD = (C − A) − (D − B)`, estimated as the coefficient on `Post × Treat`.
- **Parallel trends** is the primary condition: different starting *levels* are
  fine, different *trends* are fatal. Card & Krueger fails it.
- Self-selection into treatment turns an **ATE into an ATT**.
- **First differences** eliminate anything time-invariant by modelling changes
  rather than levels. Expect R² to fall — that is the model working, not failing.
