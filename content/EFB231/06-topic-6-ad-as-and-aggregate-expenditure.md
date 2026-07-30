# Topic 6 — AD–AS and Aggregate Expenditure

Lecture 10 · Tutorial 10 · textbook Ch. 11 and Ch. 28 (sections 12.1–12.3
of the lecture's numbering)

Two models, one economy. **AS–AD** determines real GDP *and the price level*
together. **Aggregate expenditure (AE)** determines real GDP *at a given price
level* and gives you the multiplier. Exam questions use both, and they are
graded on whether you shifted the right curve in the right direction.

> The AE model taught here is a **simplified version** of textbook Chapter 28
> (L10, slide 33). Simplified does not mean optional — Question 5 of Sample
> Exam v1 and Question 2 of Sample Exam v2 are both pure AE algebra.

## Aggregate supply

| Curve | Definition |
|---|---|
| **Short-run aggregate supply (SAS, or just AS)** | The relationship between real GDP supplied and the price level **when the money wage rate, other resource prices and potential GDP remain constant** |
| **Long-run aggregate supply (LAS)** | The relationship when the **money wage rate changes in step with the price level** to maintain full employment |

**LAS is vertical at potential GDP.** In the long run, the quantity of real
GDP supplied at full employment equals potential GDP *regardless of the price
level*, because wages have adjusted proportionally.

**Why AS slopes upward** (L10, slide 11):

```
Price level ↑  while nominal wages are fixed
   → REAL wages (w/P) fall
   → hiring is more profitable
   → firms hire more workers
   → output rises
```

### What shifts AS

| Change | AS shifts | Does potential GDP move? |
|---|---|---|
| **Potential GDP rises** — more inputs, bigger capital stock, better technology | **Right** | **Yes** — the LAS line moves right too |
| **Input price rises** — money wage rate up, crude oil up | **Left** | **No** — LAS stays put |
| Input price falls | Right | No |

```
   P                    LAS0  LAS1
   │        AS2  AS0  AS1 │     │
   │         ╱    ╱   ╱   │     │
   │        ╱    ╱   ╱    │     │
   │       ╱    ╱   ╱     │     │
   │      ╱   ●c   ╱      │     │      c = full-employment start point
   │     ╱    ╱   ╱       │     │
   └──────────────────────┴─────┴────── Real GDP

  AS0 → AS1 : technology improves. Potential GDP rises, LAS0 → LAS1.
  AS0 → AS2 : oil price rises. AS shifts LEFT, but LAS does NOT move.
```

> This is the highest-yield distinction in the topic. A **cost shock** (oil,
> wages) moves **AS only**. A **capacity change** (capital, technology,
> labour force) moves **AS and LAS together**. The L11 review question (slide
> 2) asks which event moved *both* potential real GDP and AS — the answer is
> "an increase in the quantity of capital", not "a decrease in the money
> price of oil".

## Aggregate demand

> **Aggregate demand** is the relationship between the quantity of real GDP
> demanded and the price level, all other influences on expenditure plans
> being equal. `AD = C + I + G + (X − M)`.

### Why AD slopes downward — three channels

| Channel | Mechanism when the price level **falls** |
|---|---|
| **The buying power of money** | The real value of households' and firms' money balances (wealth) **increases** → **C rises** → AD increases |
| **The real interest rate** | Lower prices → the central bank does not need to tighten (and conversely, when prices rise the central bank raises rates) → **C and I rise** |
| **The real prices of exports and imports** | Domestic goods get relatively cheaper → **X rises**, **M falls** → net exports rise → AD increases |

### What shifts AD (L10, slides 20–23)

| Factor | Detail |
|---|---|
| **Expectations about the future** | Future income, future inflation, future profit |
| **Fiscal policy** | Taxes, cash transfers, government expenditure on goods and services |
| **Monetary policy** | The quantity of money and the interest rate |
| **The state of the world economy** | The value of the A\$ against foreign currencies; economic conditions (including inflation) overseas |

> **A change in the price level does NOT shift AD.** It is a *movement along*
> the AD curve — the three channels above are built into the curve's slope.
> The L11 review question (slide 3) lists foreign income, expectations,
> fiscal policy and monetary policy as shifters, and **the price level** as
> the exception. Same trap as "elasticity versus a shift" in Topic 1.

## Macroeconomic equilibrium and the two gaps

Equilibrium is where **AD = AS**. Whether that is a *good* outcome depends on
where potential GDP sits.

| Type | Condition | Price level pressure |
|---|---|---|
| **Full-employment equilibrium** | Real GDP = potential GDP | Stable |
| **Recessionary gap** | Potential GDP **>** real GDP | **Falling** price level |
| **Inflationary gap** | Real GDP **>** potential GDP | **Rising** price level |

### How each gap closes on its own

```
RECESSIONARY GAP                          INFLATIONARY GAP
   P │  LAS                                  P │  LAS
     │   │  AS1                                │   │ AS*  AS2
     │   │ ╱ ╲  AS*                            │   │ ╱   ╱
     │   │╱   ╲╱                               │   │╱   ╱
     │  ●│   ╱                                 │   ●  ╱
     │  ╱│  ╱  AD                              │  ╱│ ╱   AD
     └───┴──────── Y                           └───┴──────── Y
      Y  Y*                                       Y*  Y
   Y < Y*, surplus of labour.                  Y > Y*, excess demand.
   Firms can hire at LOWER nominal wages       Firms raise output and prices
   (prices are falling, so the real wage       (movement along AS). Workers
   is unchanged).                              demand higher wages because
   → AS shifts RIGHT, AS1 → AS*                the real wage has fallen.
   → price level falls, Y rises to Y*          → AS shifts LEFT, AS2 → AS*
                                               → price level rises, Y falls to Y*
```

Both adjustments work through the **money wage rate** moving the **AS curve**.
Neither moves AD, and neither moves LAS.

> Note the direction carefully. Closing a **recessionary** gap requires AS to
> shift **right**, which means the price level **falls**. Closing an
> **inflationary** gap requires AS to shift **left**, which means the price
> level **rises**. Students routinely write that the price level falls in
> both cases because "the gap is being fixed". It does not.

## Inflation cycles

| Type | Starts with | Diagram | Effect on P | Effect on Y |
|---|---|---|---|---|
| **Demand-pull** | AD **increases** — expansionary fiscal or monetary policy, a boom | AD shifts **right** along an upward-sloping AS | **Rises** | **Rises** |
| **Cost-push** | AS **falls** — an input price shock | AS shifts **left** | **Rises** | **Falls** |

Cost-push is the nasty one because prices and output move in **opposite**
directions — stagflation. The lecture's examples are the **1973 oil price
surge** and, more recently, supply-chain disruption.

**Australia's current episode (L10 slide 31, repeated at L11 slide 44)** is
explicitly diagnosed as *both*: supply problems (labour shortages, war-driven
gas and oil prices, a lack of vacant properties) kept inflation high, while
substantial fiscal and monetary support "underpinned a strong recovery in
demand and put further pressure on prices". In 2023 the RBA raised the cash
rate by 1.25 percentage points to 4.35%, and inflation still stayed above the
2–3% band into 2024.

> The lecture then asks the question that makes the whole diagram matter:
> **which of those factors are not affected by interest rate hikes?**
> Monetary policy shifts **AD**. It cannot shift **AS**. So rate rises do
> nothing about the labour shortage, the war, or the housing shortfall — they
> only compress the demand-side component. That is the answer, and it is a
> likely short-answer exam question.

## The Aggregate Expenditure model

The AE (or **Keynesian**) model is the sum of *planned* consumption,
investment, government expenditure and net exports **at a given price level**.

```
AE and AD are related but different:
   AD is the whole range of expenditures over a RANGE of price levels.
   AE is expenditure at ONE given price level.
```

### Building the AE function

**Consumption.** The 45° line is a reference where `C = Yd`. The consumption
function sits below it:

```
C = a + b·Yd
    a = AUTONOMOUS consumption (what is spent at zero income)
    b = the MARGINAL PROPENSITY TO CONSUME (MPC)

MPC = Δ consumption expenditure ÷ Δ disposable income
```

`b·Yd` is **induced** consumption — the part that depends on income.

**Taxes.** With a proportional income tax rate `t` and zero government
handouts:

```
Yd = (1 − t)Y      so      C = a + b(1 − t)Y

b(1 − t) is the TAX-ADJUSTED MPC
```

**Investment, government spending and exports are autonomous of Y.** I depends
on the interest rate, G on policy, and X on *other countries'* GDP.

**Imports depend on Australian GDP:**

```
M = m₀ + mY
    m₀ = autonomous imports
    m  = the MARGINAL PROPENSITY TO IMPORT = Δ imports ÷ Δ real GDP
```

**Putting it together:**

```
AE = C + I + G + X − M
   = a + b(1−t)Y + I + G + X − m₀ − mY
   = [a + I + G + X − m₀]  +  [b(1−t) − m]·Y
      └──── autonomous, A ────┘   └── slope of AE ──┘

Equilibrium:  Y = AE
              Y = A + (slope)·Y
              Y = A ÷ (1 − slope)
```

### Worked example (L10, slides 43–44)

```
C = 20 + 0.8Yd      t = 25%      I = 20      G = 30      X = 20
M = 10 + 0.1Y

(i) AE = 20 + 0.8(1 − 0.25)Y + 20 + 30 + 20 − (10 + 0.1Y)
       = 90 + 0.6Y − 10 − 0.1Y
       = 80 + 0.5Y

(ii) Y = AE :   Y = 80 + 0.5Y
                0.5Y = 80
                Y = 160
```

## The expenditure multiplier

> The **multiplier** is the amount by which a change in autonomous expenditure
> is multiplied to give the change in equilibrium expenditure it generates.

```
              Δ equilibrium expenditure       ΔY
Multiplier = ───────────────────────────  =  ────
              Δ autonomous expenditure        ΔA

                       1
Multiplier  =  ──────────────────
                1 − slope of AE

           where slope of AE = b(1 − t) − m

Therefore:  ΔY = Multiplier × ΔA
```

**Worked example (L10, slides 46–48).** Same economy, but G rises from 30 to
50.

```
Scenario (a): AE =  80 + 0.5Y  →  Y = 80 / 0.5  = 160
Scenario (b): AE = 100 + 0.5Y  →  Y = 100 / 0.5 = 200

Multiplier = ΔY / ΔA = 40 / 20 = 2.0
Formula    = 1 / (1 − 0.5)     = 2.0     ✓
```

A \$20 rise in G produced a \$40 rise in GDP. The extra \$20 is **induced**
expenditure: the first round of spending becomes someone's income, part of
which they spend, and so on.

**Worked example — closed economy (Tutorial 10, Q3).**

```
C = 200 + 0.75Yd     I = 160      G = 80      t = 20%      (no X, no M)

AE    = 200 + 0.75(0.8)Y + 160 + 80  =  440 + 0.6Y
Y     = 440 / (1 − 0.6)  = 440 / 0.4 = 1,100
K     = 1 / 0.4 = 2.5

Full-employment income = 1,200 > 1,100  →  RECESSIONARY gap of 100
ΔG needed = gap ÷ K = 100 / 2.5 = +$40   (INCREASE G by 40)
```

**Worked example — open economy (Tutorial 10, Q4).**

```
C = 60 + 0.8Yd    t = 0.2    I = 40    G = 50    X = 20    M = 10 + 0.14Y

Autonomous A   = 60 + 40 + 50 + 20 − 10 = 160
Slope of AE    = 0.8(1 − 0.2) − 0.14 = 0.64 − 0.14 = 0.50
AE             = 160 + 0.5Y
Y              = 160 / 0.5 = 320
K              = 1 / 0.5 = 2.0

If G rises by $20:  ΔY = 2.0 × 20 = 40  →  new Y = 360
   cross-check:     Y = 180 / 0.5 = 360   ✓
```

> Three ways students lose the multiplier marks:
>
> 1. **Using `1/(1 − MPC)` instead of `1/(1 − slope of AE)`.** In Tutorial 10
>    Q4 that would give `1/(1 − 0.8) = 5` instead of the correct **2.0** —
>    wrong by a factor of 2.5. Taxes and imports are **leakages**; they must
>    be in the slope.
> 2. **Forgetting the minus sign on imports.** The slope is
>    `b(1 − t) − m`, not `b(1 − t) + m`.
> 3. **Multiplying instead of dividing when solving for ΔG.** To *close* a
>    gap you need `ΔG = gap ÷ K`, not `gap × K`. The multiplier does the
>    amplifying for you; you supply the smaller push.

### Closing a gap with fiscal policy — the full routine

```
1. Compute equilibrium Y from  Y = A / (1 − slope).
2. Compare with full-employment (potential) GDP, Y_f.
      Y > Y_f  →  INFLATIONARY gap  of  (Y − Y_f)   → DECREASE G
      Y < Y_f  →  RECESSIONARY gap  of  (Y_f − Y)   → INCREASE G
3. K = 1 / (1 − slope).
4. ΔG = (Y_f − Y) / K.        Sign comes out automatically.
5. If asked for the budget balance, use  balance = tY − G  at the RELEVANT Y.
```

**Worked example (Sample Exam v1, Q5).**

```
C = 40 + 0.6Yd    t = 0.5    I = 15    G = 20    X = 5    M = 0.1Y

A     = 40 + 15 + 20 + 5 = 80
Slope = 0.6(1 − 0.5) − 0.1 = 0.30 − 0.10 = 0.20
Y     = 80 / (1 − 0.2) = 80 / 0.8 = 100

Fiscal balance = tY − G = 0.5(100) − 20 = 50 − 20 = +$30 bn  SURPLUS

Full-employment GDP = 80 < 100  →  INFLATIONARY gap of 20
K   = 1 / 0.8 = 1.25
ΔG  = −20 / 1.25 = −$16 bn        (DECREASE G by 16)
  cross-check: new A = 64, Y = 64/0.8 = 80  ✓
```

**Worked example (Sample Exam v2, Q2).**

```
C = 40 + 0.9Yd    t = 0.10    I = 25    G = 15    X = 20    M = 0.06Y

A     = 40 + 25 + 15 + 20 = 100
Slope = 0.9(0.9) − 0.06 = 0.81 − 0.06 = 0.75
AE    = 100 + 0.75Y
Y     = 100 / 0.25 = 400
K     = 1 / 0.25 = 4

Full employment 450 > 400  →  RECESSIONARY gap of 50
ΔG    = 50 / 4 = +$12.5 bn

Budget at the NEW equilibrium (Y = 450):
   T = tY = 0.10 × 450 = 45
   G = 15 + 12.5 = 27.5
   Balance = 45 − 27.5 = +$17.5 bn  SURPLUS
```

> Note which Y the tax revenue is computed on. The sheet spells it out:
> "government revenue is calculated by taking the tax rate on the **new**
> RGDP". Use Y = 450, not Y = 400. Using the old Y gives 40 − 27.5 = 12.5 and
> the wrong answer.

### The multiplier from two data points

You do not always get behavioural equations. L11 review question 3: a \$1.5
trillion rise in investment lifts equilibrium expenditure from \$7.0 trillion
to \$10.5 trillion.

```
Multiplier = ΔY / ΔA = (10.5 − 7.0) / 1.5 = 3.5 / 1.5 = 2.33
```

## Checkpoint

<details>
<summary>1. A rise in foreign incomes. What happens to Australia's AD, SAS and LAS in the first round?</summary>

Foreigners buy more Australian goods, so **X rises**. Since
`AD = C + I + G + (X − M)`, **AD increases and shifts right**.

**SAS and LAS do not move** — nothing has changed about domestic costs or
domestic capacity. This is Sample Exam v1 Q3(a).
</details>

<details>
<summary>2. An increase in the price of crude oil because of a shortage. Which curve moves and which way?</summary>

Crude oil is an input, so the **cost of production rises**. **Short-run
aggregate supply falls — the AS curve shifts LEFT.** The price level rises and
real GDP falls: **cost-push inflation**.

**Potential GDP and LAS are unchanged** — the economy's capacity has not
altered, only the cost of using it. Sample Exam v1 Q3(b).
</details>

<details>
<summary>3. C = 100 + 0.8Yd, t = 0.25, I = 50, G = 60, X = 40, M = 20 + 0.1Y. Find AE, equilibrium Y and the multiplier. If potential GDP is 500, what should G do?</summary>

```
A     = 100 + 50 + 60 + 40 − 20 = 230
Slope = 0.8(1 − 0.25) − 0.1 = 0.60 − 0.10 = 0.50
AE    = 230 + 0.5Y
Y     = 230 / 0.5 = 460
K     = 1 / 0.5 = 2

Potential 500 > 460  →  RECESSIONARY gap of 40
ΔG    = 40 / 2 = +$20   (increase G by 20)
  check: A = 250, Y = 250/0.5 = 500  ✓
```
</details>

<details>
<summary>4. The economy is in an inflationary gap and the government does nothing. Describe what happens, step by step.</summary>

1. Real GDP exceeds potential GDP, so there is **excess demand**.
2. Firms raise output and **raise prices** — a movement *along* AS.
3. The higher price level **cuts the real wage**, so workers bargain for a
   **higher money wage**.
4. Rising money wages are an input-cost increase, so **AS shifts left**.
5. The price level rises further and real GDP falls back to **potential GDP**.

The gap self-corrects, but only via a **higher price level**. AD never moves.
</details>

<details>
<summary>5. Why is the multiplier smaller in an open economy with income tax than in a closed economy with no tax?</summary>

Because taxes and imports are **leakages** from the circular flow. Of each
extra dollar of income, `t` is taxed away and `m` goes on imports, so less is
re-spent domestically at each round.

```
No tax, no trade:   K = 1/(1 − b)
With tax and trade: K = 1/(1 − [b(1 − t) − m])   ← smaller, because the
                                                    slope of AE is smaller
```

With b = 0.8: closed and untaxed gives K = 5; with t = 0.25 and m = 0.1 the
slope is 0.5 and K = 2.
</details>

## Summary

- **LAS is vertical at potential GDP.** **SAS slopes up** because nominal
  wages are sticky, so a higher price level cuts the real wage and makes
  hiring profitable.
- **Cost shocks move AS only. Capacity changes move AS and LAS together.**
- **AD slopes down** for three reasons: buying power of money, the real
  interest rate, and the real prices of exports and imports. **The price level
  does not shift AD** — it is a movement along it.
- **AD shifters**: expectations, fiscal policy, monetary policy, the world
  economy.
- **Recessionary gap** (Y < Y\*): AS shifts **right**, price level **falls**.
  **Inflationary gap** (Y > Y\*): AS shifts **left**, price level **rises**.
- **Demand-pull**: AD right → P up, Y up. **Cost-push**: AS left → P up, Y
  **down**. Monetary policy can only move AD, so it cannot fix a supply shock.
- `AE = A + [b(1 − t) − m]·Y` and equilibrium is `Y = A ÷ (1 − slope)`.
- `Multiplier K = 1 ÷ (1 − slope of AE)`, and `ΔY = K × ΔA`. To close a gap,
  `ΔG = gap ÷ K` — **divide**, don't multiply.
- Budget balance `= tY − G`, evaluated at the equilibrium the question asks
  about, which after a policy change is the **new** one.
