# Formula Sheet & Exam Traps

Every formula, every "which curve shifts" rule, and every sign error in the
unit, on one page. Read note 09 first — this is the last thing you look at
before the exam, not the first.

## Discrepancies to take to your tutor

Four places where the unit's own material does not reconcile with the
arithmetic. Each is worked through in the note listed.

| Where | The source says | Recomputed | Note |
|---|---|---|---|
| **Tutorial 4, Q1(b)** — demand falls by 100 at each price | Total surplus \$300, a fall of \$500 | `Qd = 300 − 50P`, `Qs = 50P` → P\* = \$3, Q\* = 150, **TS = \$450**, a fall of **\$350** | 02 |
| **Tutorial 4, Q1(c)** — supply falls by 100 at each price | Total surplus \$750, a fall of \$50 | `Qs = 50P − 100` → P\* = \$5, Q\* = 150, **TS = \$450**, a fall of **\$350** | 02 |
| **Tutorial 8, Q1** — % increase in production | "Production did not increase"; `235/265 = 88%` | Real 2013 = \$260, real 2014 = \$265 → production rose **1.92%**. The 88.7 figure is the **GDP deflator** | 05 |
| **L12, slide 30** — tariff revenue | "\$3 million a year" | 500,000 cars × \$6,000 = **\$3 billion** | 08 |

Parts (a) and (d) of Tutorial 4 Q1 reconcile exactly, which is what pins down
the schedules and makes (b) and (c) identifiable as errors.

Two smaller notation issues, both harmless if you know about them:

- **L11 slide 33** writes "Amount of money created = **R** × initial deposit
  = 5 × \$100". The multiplier used is **K = 5**, not R = 0.2 — wrong letter,
  right arithmetic. And \$500 is **total deposits**; the *new money created*
  is \$400.
- **Tutorial 5 Q1** puts values in the AFC and ATC cells of the `L = 0` row.
  Those are undefined — you cannot divide by zero output.

## What is excluded from assessment

| Excluded | Stated at |
|---|---|
| The income approach to GDP (p. 538) | L8, slide 16 |
| "The Magic of Sustained Growth" (pp. 583–584) | L8, slide 28 |
| Chained CPI, PCE price index, core inflation | L9, slide 34 |
| Alternative monetary policy strategies | L11, slide 45 |
| "The case against protection" | L12, slide 32 |
| Import quotas, other import barriers, export subsidies — **tariffs only** | L12, slide 28 |
| Positive externalities and consumption externalities — **negative production externalities only** | L4, slide 39 |

**Marked "for your reference only"** (read for intuition, do not expect to
reproduce): the two-group airline price-discrimination example (L6, slides
53–55) and the collusion-to-cheating oligopoly illustration (L7, slides
35–38).

**Explicitly still assessable despite looking optional**: the *Nominal and
Real Values* section (L9, slide 35 — "not provided in Chapter 22" but "can
still be assessed") and the simplified **AE model** in L10.

---

## Microeconomics formulas

### Elasticity

```
              % change in quantity demanded
PED       =  ───────────────────────────────      report the ABSOLUTE value
                  % change in price

              % change in quantity supplied
PES       =  ───────────────────────────────      positive
                  % change in price

              % change in quantity demanded
YED       =  ───────────────────────────────
                  % change in income

              % change in Qd of good A
XED       =  ───────────────────────────────
              % change in the price of good B
```

**Midpoint method — the unit's convention:**

```
              New Q − Initial Q                    New P − Initial P
% Δ Q  =  ─────────────────────── × 100    % Δ P = ─────────────────────── × 100
          (New Q + Initial Q) ÷ 2                  (New P + Initial P) ÷ 2
```

**Point elasticity** (useful when you have the demand equation):

```
PED = (dQ/dP) × (P/Q)      e.g. Qd = 600 − 20P at P = 12, Q = 360
                                PED = −20 × 12/360 = −0.667
```

| Value | PED | PES | YED | XED |
|---|---|---|---|---|
| **> 1** | Elastic | Elastic | Luxury (normal, income elastic) | — |
| **= 1** | Unit elastic | Unit elastic | — | — |
| **0 to 1** | Inelastic | Inelastic | Necessity (normal, income inelastic) | — |
| **= 0** | Perfectly inelastic (vertical) | Perfectly inelastic | Unrelated to income | Unrelated goods |
| **= ∞** | Perfectly elastic (horizontal) | Perfectly elastic | — | — |
| **Positive** | — | Always | **Normal** good | **Substitutes** |
| **Negative** | Always (sign dropped) | — | **Inferior** good | **Complements** |

**Total revenue test:**

```
Elastic   (PED > 1):  P ↑ → TR ↓     P ↓ → TR ↑     (OPPOSITE directions)
Inelastic (PED < 1):  P ↑ → TR ↑     P ↓ → TR ↓     (SAME direction)
Unit      (PED = 1):  TR unchanged, and TR is at its MAXIMUM
```

**Determinants:** PED — closeness of substitutes, time elapsed, share of
income. PES — resource substitution possibilities, time frame.

### Surplus and welfare

```
CS = area BELOW demand, ABOVE price     = ½ × Q* × (choke price − P*)
PS = area ABOVE supply,  BELOW price    = ½ × Q* × (P* − supply intercept)
TS = CS + PS,  maximised where MB = MC  (i.e. where D crosses S)

DWL = ½ × (change in quantity) × (MB − MC gap at the new quantity)
```

Demand **is** the marginal benefit curve; supply **is** the marginal cost
curve. Height = value of the marginal unit; area = the total.

### Intervention

| | Ceiling | Floor | Per-unit tax | Quota (below Q\*) |
|---|---|---|---|---|
| Binds when | Below P\* | Above P\* | Always | Below Q\* |
| Quantity traded | **Qs** | **Qd** | New equilibrium Q | The quota |
| Excess | Shortage | Surplus | — | — |
| CS | May rise | Falls | Falls | Falls |
| PS | Falls | May rise | Falls | Falls |
| TS | Falls | Falls | Falls | Falls |

**Tax:**

```
Supply shifts UP by the tax.        Wedge:  P_b − P_s = tax
Tax revenue      = tax × new Q
Excess burden    = DWL = ½ × (Q* − Q_new) × tax

                       PES
Buyer's share   =  ───────────────       The more INELASTIC side pays more.
                    PES + |PED|
```

**Negative production externality:**

```
MSC = MC + Marginal external cost (MEC)

Market equates  MB = MC     →  OVERPRODUCTION
Efficiency needs MB = MSC

Corrective tax = MEC        →  output falls to the EFFICIENT level, not zero
```

### Production and cost

```
Accounting profit = TR − accounting cost   (explicit costs + acct depreciation)
Economic profit   = TR − opportunity cost  (explicit + IMPLICIT costs)
Opportunity cost  = explicit + implicit (incl. NORMAL PROFIT, econ. depreciation)

MP  = ΔTP / ΔL              AP  = TP / L
TC  = TFC + TVC             ATC = AFC + AVC = TC/Q
AFC = TFC / Q               AVC = TVC / Q
MC  = ΔTC / ΔQ = ΔTVC / ΔQ

MC  = wage / MP             AVC = wage / AP     ← cost curves are product
                                                  curves upside down
```

**Rules:**

```
MP > AP → AP rising;  MP < AP → AP falling;  MP = AP → AP at MAXIMUM
MC < ATC → ATC falling; MC > ATC → ATC rising; MC = ATC → ATC at MINIMUM
MC cuts AVC and ATC at their minima.  AFC falls forever.
min AVC occurs at a LOWER output than min ATC.
```

**Short run** = at least one fixed input; U-shape from **diminishing marginal
returns**. **Long run** = all inputs variable; LRAC U-shape from **economies
and diseconomies of scale** (specialisation vs coordination/management
complexity). Constant returns come from replication.

### Market structures

```
EVERY firm maximises profit where  MR = MC.

Perfect competition:  MR = P            (horizontal firm demand)
Monopoly / mon. comp: MR < P            (downward-sloping firm demand)
Linear demand P = a − bQ  ⇒  MR = a − 2bQ    (twice the slope)
```

**Shutdown rule:**

```
P ≥ min ATC              →  produce; economic profit ≥ 0
min AVC ≤ P < min ATC    →  produce; loss < TFC, so keep going
P < min AVC              →  SHUT DOWN; loss = TFC
```

The PC firm's short-run **supply curve = its MC curve above min AVC**.

| | PC | Mon. comp | Oligopoly | Monopoly |
|---|---|---|---|---|
| Sellers | Many | Many | Few | One |
| Product | Homogeneous | Differentiated | Either | No close substitutes |
| Entry barriers | None | None | May be considerable | Yes |
| LR economic profit | Zero | Zero | Can persist | Can persist |
| LR price vs MC | `P = MC` | `P > MC` (markup) | `P > MC` | `P > MC` |
| LR output vs min ATC | At min ATC | Left of it (**excess capacity**) | — | — |
| Efficient? | Yes | No | No | No |

**Monopoly barriers:** natural (economies of scale), ownership (scarce input),
legal (franchise, licence, patent).

**Price discrimination** converts CS into profit; needs separable groups with
different willingness to pay and no resale. Raises output, shrinks DWL, makes
buyers worse off.

**Game theory:**

```
DOMINANT STRATEGY  — best response no matter what the other player does.
NASH EQUILIBRIUM   — each player is best-responding to the other's action;
                     nobody wants to switch UNILATERALLY.

If both players have a dominant strategy, that cell IS the Nash equilibrium.
Test any candidate cell one player at a time: "given their choice, would I move?"
```

---

## Macroeconomics formulas

### GDP and growth

```
GDP = C + I + G + (X − M)          expenditure approach

I  = NEW capital goods + additions to inventories
Excluded: used goods, financial-asset transactions, intermediate goods,
          household production, the underground economy

Nominal GDP = current-year quantities × CURRENT-year prices
Real GDP    = current-year quantities × BASE-year prices

                        Real GDP(t) − Real GDP(t−1)
Economic growth rate = ───────────────────────────── × 100
                             Real GDP(t−1)

                    Nominal GDP
GDP deflator  =  ─────────────── × 100
                     Real GDP

Labour productivity = Real GDP ÷ aggregate hours
```

**Real GDP omits:** household production, the underground economy, leisure
time, environmental quality.

**Growth theories:** classical (growth per person is temporary — population
drags it back to subsistence); neoclassical/Solow (technological change drives
growth; growth stops if it stops, from diminishing returns); new growth
(perpetual growth from choices, discovery and competition).

### Labour market

```
Labour force  = employed + unemployed

                       number unemployed
Unemployment rate = ──────────────────────── × 100      ← denominator is the
                         LABOUR FORCE                     LABOUR FORCE

                        labour force
Participation rate = ──────────────────────── × 100     ← denominator is the
                     working-age population               WORKING-AGE POP.

                  real GDP − potential GDP
Output gap   =   ─────────────────────────── × 100
                        potential GDP
```

```
Natural unemployment rate  =  frictional + structural   (cyclical = 0)
FULL EMPLOYMENT  ⇔  unemployment = natural rate  ⇔  real GDP = potential GDP

Output gap NEGATIVE → unemployment ABOVE the natural rate
Output gap POSITIVE → unemployment BELOW the natural rate
```

Not counted in the standard measure: **marginally attached / discouraged
workers**, and **part-time workers who want full-time work** (underemployed).

### Prices

```
        Cost of the CPI basket at CURRENT prices
CPI  =  ──────────────────────────────────────── × 100
         Cost of the CPI basket at BASE prices

                   CPI(t) − CPI(t−1)
Inflation rate =  ─────────────────── × 100        Deflation = negative
                        CPI(t−1)

                                       CPI in year B
Price in year B = Price in year A  ×  ───────────────
                                       CPI in year A

% Δ real wage      ≈  % Δ nominal wage − inflation rate
Real interest rate =  nominal interest rate − inflation rate
```

**Four CPI biases**, all making the CPI **overstate** inflation: quality
change, commodity substitution, outlet substitution, new goods.

### AS–AD

| Curve | Slope | Shifts |
|---|---|---|
| **LAS** | **Vertical** at potential GDP | Potential GDP: quantity of inputs, capital stock, technology |
| **SAS** | **Upward** — sticky money wages, so P↑ cuts the real wage and makes hiring profitable | Potential GDP changes (**with LAS**) **or** input-price changes (**AS only**) |
| **AD** | **Downward** — buying power of money, real interest rate, real prices of exports and imports | Expectations, fiscal policy, monetary policy, the world economy |

```
RECESSIONARY gap:  potential GDP > real GDP  → falling price level
    self-correction: money wages FALL → AS shifts RIGHT → P falls, Y rises

INFLATIONARY gap:  real GDP > potential GDP  → rising price level
    self-correction: money wages RISE → AS shifts LEFT  → P rises, Y falls

DEMAND-PULL inflation: AD shifts RIGHT → P ↑, Y ↑
COST-PUSH  inflation:  AS shifts LEFT  → P ↑, Y ↓   (stagflation)
```

### Aggregate expenditure

```
C  = a + b·Yd            Yd = (1 − t)Y     so   C = a + b(1 − t)Y
M  = m₀ + m·Y
I, G, X are AUTONOMOUS of Y.

AE = A  +  [ b(1 − t) − m ] · Y

     A = a + I + G + X − m₀            (autonomous expenditure)
     slope of AE = b(1 − t) − m        (tax-adjusted MPC minus MPM)

Equilibrium:   Y = AE       →      Y  =  A ÷ (1 − slope of AE)

                    1                     ΔY
Multiplier  K  =  ───────────────  =  ─────────      ΔY = K × ΔA
                  1 − slope of AE        ΔA

Gap        = potential GDP − equilibrium Y
ΔG needed  = gap ÷ K                       ← DIVIDE, don't multiply
Budget balance = tY − G                    ← at the RELEVANT (usually NEW) Y
```

### Fiscal and monetary policy

```
Budget balance = Revenue − Expenses      (deficit = FLOW; debt = STOCK)

CROWDING OUT:  deficit → gov't borrows → supply of loanable funds shifts LEFT
               → real interest rate RISES → private investment FALLS

Limitations of fiscal policy: legislation lag, impact lag, imperfect estimate
of potential GDP, inflation, uncertain multiplier, crowding out, irrational
consumer behaviour.
```

```
RBA objectives: stability of the currency; full employment; prosperity and
welfare.  Target: CPI inflation 2–3% on average over the business cycle.

EXPANSIONARY:  RBA BUYS CGS → reserves ↑ → cash rate ↓ → other rates ↓
               → C, I ↑ → AD RIGHT → real GDP ↑, price level ↑
CONTRACTIONARY: RBA SELLS CGS → reserves ↓ → cash rate ↑ → other rates ↑
               → C, I ↓ → AD LEFT  → real GDP ↓, price level ↓

Money multiplier  K = 1 / R
Total deposits    = K × initial deposit
New money created = total deposits − initial deposit

Bond yield = coupon ÷ price      →  price ↑ ⇒ yield ↓;  price ↓ ⇒ yield ↑
```

**Effectiveness depends on:** the interest elasticity of investment, the slope
of AS (price effect), the multiplier, and expectations. **The liquidity trap**
is when stimulus fails because people hoard cash.

### International trade

```
Opportunity cost of 1 unit of A  =  (units of B given up) ÷ (units of A gained)

ABSOLUTE advantage    = more productive (fewer inputs, less time)
COMPARATIVE advantage = LOWER OPPORTUNITY COST     ← this is what drives trade

A mutually beneficial trade price lies STRICTLY BETWEEN the two
opportunity costs.
```

| | **Importer** (world P < domestic P) | **Exporter** (world P > domestic P) |
|---|---|---|
| Domestic price | Falls to world price | Rises to world price |
| Domestic consumption | **Rises** | **Falls** |
| Domestic production | **Falls** | **Rises** |
| Imports / exports | `Qd − Qs` at world price | `Qs − Qd` at world price |
| CS | Rises by A + B | Falls by A |
| PS | Falls by A | Rises by A + B |
| Total surplus | **Rises by B** | **Rises by B** |
| Loser | Domestic producers | Domestic buyers |

**Tariff:**

```
Domestic price rises by the tariff.
Domestic production ↑,  domestic consumption ↓,  IMPORTS SHRINK.

Tariff revenue = tariff × IMPORTS         ← not × total consumption
DWL = production-inefficiency triangle + consumption-inefficiency triangle
    = ½ × tariff × (rise in domestic production)
    + ½ × tariff × (fall in domestic consumption)
```

---

## Exam traps checklist

Run down this list before you hand the paper in.

### Elasticity

- [ ] Reported PED as an **absolute value** (2.25, not −2.25) and with **no
      % or \$ sign** — an elasticity is a pure number.
- [ ] Used the **midpoint method** unless told otherwise, and named the base
      of every percentage.
- [ ] Did not write "the demand curve is a straight line, so elasticity is
      constant" — along one line, elasticity runs from ∞ to 0.
- [ ] Distinguished **elastic** (finite, > 1) from **perfectly elastic**
      (∞, horizontal).
- [ ] Checked the **sign** of YED before classifying normal vs inferior, and
      the **size** for luxury vs necessity.
- [ ] Put the **other** good's price in the XED denominator.
- [ ] Did not confuse a **shift** with **elasticity** — elasticity is measured
      *along* a curve.

### Surplus and intervention

- [ ] Measured every surplus area over the quantity actually **traded** —
      **Qs** under a ceiling, **Qd** under a floor.
- [ ] Checked the control is on the **binding** side of equilibrium before
      shading anything.
- [ ] Remembered CS can **rise** under a ceiling and PS can **rise** under a
      floor; only **total** surplus always falls.
- [ ] Included the **rectangle plus triangle** where the supply curve does not
      start at the origin, or where a price control creates a transfer.
- [ ] Did not assume the tax is paid by whoever is legally liable — the
      **inelastic** side bears more.
- [ ] Set the corrective tax equal to the **marginal external cost** and let
      output fall to the **efficient** level, not zero.

### Production, cost and market structures

- [ ] Divided by **marginal product**, not by one worker, when computing MC.
- [ ] Explained the short-run U-shape with **diminishing marginal returns**
      and the long-run U-shape with **economies/diseconomies of scale** — not
      the other way round.
- [ ] Did not say a loss-making firm should shut down — check `P` against
      **min AVC**.
- [ ] Did not say profit is maximised at **minimum ATC** — it is at MR = MC.
- [ ] Found the monopoly quantity on **MR = MC**, then read the price off the
      **demand curve**.
- [ ] Used `MR = a − 2bQ` for linear demand `P = a − bQ`.
- [ ] Said **zero economic profit = normal profit**, not "going broke".
- [ ] Tested the Nash equilibrium **cell by cell** — it is not the
      highest-total-payoff cell.

### Macro measurement

- [ ] Used **base-year prices** for real GDP.
- [ ] Divided by the **labour force** for the unemployment rate and by the
      **working-age population** for the participation rate.
- [ ] Remembered **full employment ≠ zero unemployment** — it is the natural
      rate, frictional plus structural.
- [ ] Noted that a discouraged worker resuming the search **raises** the
      unemployment rate.
- [ ] Treated new-home sales as **I**, and previously-owned home sales as
      **not in GDP** (only the commission counts).
- [ ] Used the **CPI ratio with the target year on top** for dollar
      conversions.
- [ ] Flagged that `%Δ real wage ≈ %Δ nominal − inflation` is an
      **approximation** when the rates are large.

### Models

- [ ] Did **not** shift AD for a change in the **price level** — that is a
      movement along AD.
- [ ] Moved **AS only** for a cost shock, and **AS and LAS together** for a
      capacity change.
- [ ] Got the self-correction directions right: recessionary gap → AS
      **right**, P **falls**; inflationary gap → AS **left**, P **rises**.
- [ ] Used `1/(1 − slope of AE)` for the multiplier, **not** `1/(1 − MPC)`.
- [ ] Kept the **minus** sign on the marginal propensity to import in the
      slope.
- [ ] **Divided** the gap by the multiplier to get ΔG.
- [ ] Computed the budget balance at the **new** GDP after a policy change.
- [ ] Wrote **buy to loosen, sell to tighten** for open-market operations.
- [ ] Distinguished **total deposits** (`K × initial`) from **money created**
      (`total − initial`).
- [ ] Remembered monetary policy shifts **AD only** — it cannot fix a supply
      shock.

### Trade

- [ ] Based specialisation on **comparative** advantage, not absolute.
- [ ] Checked the two opportunity costs are **reciprocals** and that no
      country has the comparative advantage in both goods.
- [ ] Confirmed the trade price lies **strictly between** the two opportunity
      costs.
- [ ] Computed tariff revenue as `tariff × IMPORTS`.
- [ ] Drew **two** deadweight-loss triangles, and said what each represents
      (production inefficiency, consumption inefficiency).
- [ ] Named the **losing group** — trade raises total surplus but always
      creates losers.

### Presentation

- [ ] Labelled every axis and every curve on every diagram, and marked the
      **direction** of each shift with an arrow.
- [ ] Said explicitly what happens to **price** and to **quantity** after each
      shift. A diagram with no sentence attached rarely gets full marks.
- [ ] Showed the arithmetic line by line. Partial credit exists; a bare number
      earns none if it is wrong.
