# Topic 1 — Elasticity

Lecture 3 · Tutorial 3 · textbook p. 126

Elasticity is the whole of Lecture 3 and it turns up again in Lecture 4 (who
bears a tax), Lecture 11 (why rate cuts sometimes do nothing) and Assessment
1 (why rents spiked instead of quantities). Get the four of them straight
and a lot of the unit falls into place.

## The idea

Elasticity measures **responsiveness**: when one thing changes by a
percentage, by what percentage does the other thing change? Everything in
this topic is a ratio of two percentage changes, so the units cancel — an
elasticity is a pure number, never dollars and never units.

The lecture opens with the question that makes it concrete: how would you
respond if bananas went from \$3.00/kg to \$5.00/kg? To \$15.00/kg? The
answer is not "I'd be annoyed" — it is a number.

## Price elasticity of demand (PED)

```
        % change in quantity demanded
PED  =  ─────────────────────────────
        % change in price
```

### The midpoint method — the one this unit uses

The problem with percentages is that they depend on where you start. The
unit's fix is to divide by the *average* of the old and new values:

```
              New Q − Initial Q
% Δ Qd  =  ────────────────────────  × 100
           (New Q + Initial Q) ÷ 2

              New P − Initial P
% Δ P   =  ────────────────────────  × 100
           (New P + Initial P) ÷ 2
```

**Worked example — the latte (L3, slides 13–16).** Price rises \$4 → \$5;
you cut consumption 10 cups → 6 cups.

```
% Δ Qd = (6 − 10) / ((6 + 10) ÷ 2)   × 100 = −4 / 8   × 100 = −50.00%
% Δ P  = ($5 − $4) / (($5 + $4) ÷ 2) × 100 =  1 / 4.5 × 100 = +22.22%

PED = −50.00 / 22.22 = −2.25   →   report 2.25 (ignore the sign)
```

### Why the midpoint method exists

Run the same numbers with the *initial value* in the denominator and the
answer changes depending on which direction you walked:

| Direction | % Δ Qd | % Δ P | PED |
|---|---|---|---|
| Price rises \$4 → \$5 | (6−10)/10 = −40% | (5−4)/4 = +25% | **1.60** |
| Price falls \$5 → \$4 | (10−6)/6 = +66.67% | (4−5)/5 = −20% | **3.33** |
| Midpoint (either direction) | −50% | +22.22% | **2.25** |

Same two points on the same demand curve, three different answers. The
midpoint method is direction-independent, which is why it is the unit's
convention.

> Name the base of every percentage. A move from 6 to 10 is a 66.67%
> increase; a move from 10 to 6 is a 40% decrease. They describe the same
> two numbers and neither is "the" percentage change. If a question does not
> say which method to use, use midpoint and say so — that is what p. 126 of
> the textbook and Lecture 3 do.

### Reading the coefficient

| PED | Name | Demand curve looks like | Meaning |
|---|---|---|---|
| ∞ | Perfectly elastic | Horizontal | Any price rise kills all sales |
| > 1 | Elastic | Flatter | Quantity moves proportionally more than price |
| = 1 | Unit elastic | — | Move together proportionally |
| 0 < PED < 1 | Inelastic | Steeper | Quantity moves proportionally less than price |
| 0 | Perfectly inelastic | Vertical | Quantity does not move at all |

Because the demand curve slopes down, PED is always negative. **The unit
reports the absolute value.** Write "PED = 2.25, demand is elastic", not
"PED = −2.25".

### What makes demand elastic

1. **Closeness of substitutes.** More substitutes → more elastic, because
   switching is easy.
2. **Time elapsed since the price change.** Longer horizon → more elastic;
   people find alternatives eventually.
3. **Proportion of income spent on the good.** Bigger share of the budget →
   more elastic.

This is the answer to the Assessment 1 question of why rents rose so hard:
housing has no close substitute, the adjustment horizon is long, and rent is
a huge share of income on the demand side while *supply* cannot respond for
years.

## Elasticity varies along a straight-line demand curve

A linear demand curve does not have one elasticity — it has a different one
at every point. The lecture's own three measurements (L3, slide 22):

| Segment | % Δ Qd / % Δ P | PED | Region |
|---|---|---|---|
| A to B | 0.4 / −0.2857 | 1.40 | Elastic (upper part) |
| A to C | 0.666 / −0.666 | 1.00 | Unit elastic (midpoint) |
| B to C | 0.2857 / −0.4 | 0.714 | Inelastic (lower part) |

> "Steeper means inelastic" is only true when you are comparing two curves
> at the same point. Along *one* straight line, the slope never changes but
> the elasticity falls continuously from ∞ at the price axis to 0 at the
> quantity axis. Never answer "the demand curve is a straight line, so
> elasticity is constant."

## The total revenue test

This is the version of elasticity that pays. Total revenue is `TR = P × Q`.
A price rise pulls TR up through P and pushes it down through Q; whichever
effect is proportionally bigger wins.

```
Demand elastic   (PED > 1) :  P ↑ → TR ↓        P ↓ → TR ↑
Demand inelastic (PED < 1) :  P ↑ → TR ↑        P ↓ → TR ↓
Unit elastic     (PED = 1) :  TR unchanged (TR is at its maximum)
```

**Worked example — coffee, elastic (L3, slide 23).**

```
$3 a cup × 15 cups/hour = $45/hour
$5 a cup ×  5 cups/hour = $25/hour     price rose, TR fell → elastic
```

**Worked example — books, inelastic (L3, slide 24).**

```
$50 a book × 5 million = $250 million
$75 a book × 4 million = $300 million  price rose, TR rose → inelastic
```

**Worked example — movie tickets (Tutorial 3, Q1).** Figure 1 shows 100
tickets a day at \$9 and 300 tickets a day at \$7.

```
% Δ Qd = (300 − 100) / ((300 + 100) ÷ 2) × 100 = 200/200 × 100 = +100%
% Δ P  = ($7 − $9)  / (($7 + $9) ÷ 2)   × 100 = −2/8    × 100 =  −25%

PED = 100 / 25 = 4.0   →   elastic

TR at $9:  $9 × 100 = $900
TR at $7:  $7 × 300 = $2,100        an increase of $1,200
```

Consistent: demand is elastic, price fell, revenue rose.

> Elastic is not the same as *perfectly* elastic. PED = 4 is elastic;
> perfectly elastic means PED = ∞ and a horizontal demand curve, which
> would mean the cinema could sell any number of tickets at \$9 and zero at
> \$9.01. If your working produced a finite number, the answer is never
> "perfectly elastic".

**Applying the test — Tutorial 3, Q2.** Pete's cookies have PED = 1.5 and he
wants more revenue. Demand is elastic, so he should **lower** the price:
quantity rises proportionally more than price falls, and TR goes up.

## Price elasticity of supply (PES)

```
        % change in quantity supplied
PES  =  ─────────────────────────────
        % change in price
```

Same five categories, same midpoint method, but PES is **positive** because
supply slopes upward.

### What makes supply elastic

1. **Resource substitution possibilities.** Goods needing unique resources
   (beachfront land, a particular mineral) have very low PES. Goods made
   from commonly available inputs have high PES.
2. **Time frame for the supply decision.** More time → producers can change
   plans → supply becomes more elastic.

The lecture's applications (L3, slide 40) are pandemic supply-chain
disruption, the war in Ukraine, and the 2020 and 2022 floods — all events
that made PES temporarily near-zero and so turned demand shocks into price
shocks.

**Worked example — the corn crop (Tutorial 3, Q5).** US corn production is
forecast 24% larger than last year, world production 9.9% larger, and the
price of corn 46% higher.

```
US PES    = 24  / 46 = 0.5217   →  inelastic (PES < 1)
World PES = 9.9 / 46 = 0.2152   →  inelastic (PES < 1)
```

> These are elasticities, not percentages. Writing "the US price elasticity
> of supply is 52.17%" is wrong — it is **0.52**, a pure number. An
> elasticity never carries a % sign or a \$ sign.

## Income elasticity of demand (YED)

```
        % change in quantity demanded
YED  =  ─────────────────────────────
        % change in income
```

| YED | Type of good | Example |
|---|---|---|
| YED > 1 | Normal, **income elastic** — a luxury | Cruises, restaurant meals |
| 0 < YED < 1 | Normal, **income inelastic** — a necessity | Bread, electricity |
| YED < 0 | **Inferior** good | Bus travel, instant noodles |

**Worked example — Tutorial 3, Q4.** Incomes rise 10%.

```
Spring water   +5%   →  YED = +5  / 10 = +0.50   normal, income inelastic
Sports drinks  −2%   →  YED = −2  / 10 = −0.20   INFERIOR good
Cruises       +15%   →  YED = +15 / 10 = +1.50   normal, income elastic (luxury)
```

Cruises are income elastic. Spring water is income inelastic. Sports drinks
are **not** a normal good — a negative YED is the definition of an inferior
good.

> The classic slip: "both spring water and sports drinks are normal goods
> because YED > 0." Sports drinks fell when income rose, so YED = −0.20.
> Check the *sign* before you classify, then check the *size*. Sign answers
> normal vs inferior; size answers luxury vs necessity.

## Cross elasticity of demand (XED)

```
        % change in quantity demanded of good A
XED  =  ──────────────────────────────────────
        % change in the price of good B
```

| XED | Relationship | Why |
|---|---|---|
| XED > 0 | **Substitutes** | B gets dearer, buyers switch to A |
| XED < 0 | **Complements** | B gets dearer, people buy less of both |
| XED = 0 | Unrelated | — |

**Worked example — planes and trains (Tutorial 3, Q3).** A plane ride rises
10%. PED for plane rides = 0.5; PED for train rides = 0.2; XED of train
rides with respect to the plane price = 0.4.

```
Plane rides:  %ΔQd = −0.5 × 10%  = −5%     (own-price effect)
Train rides:  %ΔQd = +0.4 × 10%  = +4%     (cross-price effect, substitutes)
```

To leave train ridership unchanged, the own-price effect must cancel the
+4%:

```
−0.2 × %ΔP(train) = −4%
      %ΔP(train)  = 4 / 0.2 = +20%
```

A 20% rise in train fares exactly offsets the 4% gain from dearer flights.

> Which price goes in the denominator? XED is always "quantity of the good
> you care about ÷ price of the *other* good". Put the wrong good on the
> bottom and you get 1/XED and the wrong classification story. Write the
> subscripts out before substituting.

## Elasticity versus a shift

This is the single most common conceptual mark-loser in the topic.

| | What it is | What causes it |
|---|---|---|
| **Movement along** a demand curve | A change in *quantity demanded* | The good's own price |
| **Shift of** the demand curve | A change in *demand* | Income, prices of related goods, tastes, expectations, number of buyers |

Elasticity describes responsiveness **along** a curve. A shift does not
change the elasticity; it moves the whole schedule. So:

- "Demand for mobile service increased, the price fell, so supply
  decreased" (Tutorial 2, Q5) is **false**. Demand shifting right raises
  price and quantity supplied. Nothing shifted supply.
- A price ceiling does not make demand more elastic. It moves you to a
  point on the same curve.

## Checkpoint

<details>
<summary>1. A sports store raises prices 10% and sales revenue rises 3%. What can you say about PED?</summary>

Revenue moved **in the same direction** as price, so demand is **inelastic**
(0 < PED < 1) — but not perfectly inelastic, because quantity did fall
(revenue rose by less than the 10% price rise). This is the answer to the
L4 review question: "demand is inelastic, but not perfectly".

Sanity check: if PED were 0, revenue would rise the full 10%.
</details>

<details>
<summary>2. ABC University lowers tuition fees hoping to raise revenue. When does that work?</summary>

Only if demand is **elastic**. Cutting price raises revenue when PED > 1.
So the plan will **not** be successful if demand is inelastic — which is the
correct option in the L4 review slide. "Not successful if the demand curve
slopes downward" is wrong: every ordinary demand curve slopes down, and that
tells you nothing about elasticity.
</details>

<details>
<summary>3. Price of a good falls from $10 to $8; quantity demanded rises from 40 to 60. Elastic or inelastic? What happens to total revenue?</summary>

```
% Δ Qd = (60 − 40) / ((60 + 40) ÷ 2) × 100 = 20/50 × 100 = +40%
% Δ P  = ($8 − $10) / (($8 + $10) ÷ 2) × 100 = −2/9 × 100 = −22.22%

PED = 40 / 22.22 = 1.80  →  elastic

TR before = $10 × 40 = $400
TR after  =  $8 × 60 = $480     TR rose, consistent with elastic demand
```
</details>

<details>
<summary>4. Cross elasticity of demand between two goods is positive. What are they?</summary>

**Substitutes.** A rise in the price of one raises the quantity demanded of
the other. Coke and Pepsi. If XED were negative they would be complements
(petrol and cars).
</details>

<details>
<summary>5. As cities prospered and per-capita incomes rose, demand for bus travel fell. What does that tell you?</summary>

Bus travel is an **inferior good** — YED < 0. It says nothing about the
*price* elasticity of bus travel, and it does not tell you that raising
fares would raise revenue.
</details>

## Summary

- Every elasticity is `% change in the response ÷ % change in the driver`.
  A pure number: no dollars, no per cent sign on the answer.
- Use the **midpoint method** — average of old and new in both denominators
  — so the answer does not depend on which way you walked.
- **PED**: report the absolute value. > 1 elastic, < 1 inelastic. Driven by
  substitutes, time and budget share.
- **Total revenue test**: elastic → price and revenue move in *opposite*
  directions; inelastic → *same* direction. This is the fastest way to
  identify elasticity from a story with no numbers.
- Along a straight-line demand curve elasticity falls from ∞ to 0 even
  though slope is constant.
- **PES**: positive, driven by resource substitutability and time.
- **YED**: sign gives normal (+) vs inferior (−); size gives luxury (> 1) vs
  necessity (< 1).
- **XED**: sign gives substitutes (+) vs complements (−). Numerator is the
  good you care about; denominator is the *other* good's price.
- Elasticity is a property *of* a curve, measured *along* it. Shifting a
  curve is a different event with a different cause.
