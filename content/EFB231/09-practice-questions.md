# Extra Practice Questions

Exam-style questions across the whole unit, built from the two sample exam
papers, the tutorial problem sets and the lecture review slides. Answers are
hidden — do the working on paper first, then tap to reveal.

Every number in the answers has been checked computationally. Where the unit's
own material disagrees, note 10 lists the discrepancies.

---

## Part A — Microeconomics

### A1. Elasticity and total revenue

A cinema drops its ticket price from \$12 to \$9. Weekly attendance rises from
400 to 500.

**(a)** Calculate the price elasticity of demand using the midpoint method.
**(b)** Is demand elastic or inelastic?
**(c)** What happened to total revenue, and is that consistent with your
answer to (b)?

<details><summary>Answer</summary>

```
% Δ Qd = (500 − 400) / ((500 + 400) ÷ 2) × 100 = 100/450 × 100 = +22.22%
% Δ P  = ($9 − $12) / (($9 + $12) ÷ 2) × 100  = −3/10.5 × 100 = −28.57%

PED = 22.22 / 28.57 = 0.78     →  report 0.78
```

**(b)** PED < 1, so demand is **inelastic**.

**(c)**

```
TR before = $12 × 400 = $4,800
TR after  =  $9 × 500 = $4,500     TR FELL by $300
```

Consistent. With **inelastic** demand, price and total revenue move in the
**same** direction — the price cut lost more revenue than the extra attendance
gained. The cinema should not have cut the price.
</details>

### A2. Income and cross elasticity

Household incomes rise 8%. Quantity demanded of restaurant meals rises 20%,
quantity demanded of home-brand pasta falls 4%. Separately, the price of
coffee rises 15% and the quantity of tea demanded rises 6%.

Classify each relationship.

<details><summary>Answer</summary>

```
Restaurant meals: YED = +20 / 8  = +2.50  → normal, income ELASTIC (luxury)
Home-brand pasta: YED =  −4 / 8  = −0.50  → INFERIOR good
Tea vs coffee:    XED =  +6 / 15 = +0.40  → SUBSTITUTES
```

**Sign first, size second.** The sign of YED separates normal (+) from
inferior (−); the size separates luxury (> 1) from necessity (< 1). A positive
XED means substitutes.
</details>

### A3. Surplus, ceiling and tax in one market

```
Demand:  Qd = 600 − 20P          Supply:  Qs = 30P
```

**(a)** Find the equilibrium price and quantity, CS, PS and total surplus.
**(b)** The government imposes a price ceiling of \$8. Find the shortage, the
quantity traded, CS, PS and the deadweight loss.
**(c)** Instead of the ceiling, a \$5-per-unit tax is levied on sellers. Find
the buyer's price, the seller's price, the quantity, the tax revenue and the
deadweight loss. Who bears more of the tax, and why?

<details><summary>Answer</summary>

**(a)**

```
600 − 20P = 30P  →  50P = 600  →  P* = $12,  Q* = 360

Demand choke price (Q = 0):  P = 600/20 = $30
Supply intercept  (Q = 0):   P = $0

CS = ½ × 360 × ($30 − $12) = $3,240
PS = ½ × 360 × ($12 − $0)  = $2,160
TS = $5,400
```

**(b)** \$8 is below \$12, so the ceiling **binds**.

```
At P = $8:  Qs = 30 × 8       = 240   ← quantity TRADED (short side)
            Qd = 600 − 160    = 440
            Shortage          = 200 units

MB of the 240th unit = (600 − 240)/20 = $18

CS = ½ × 240 × ($30 − $18) + 240 × ($18 − $8) = $1,440 + $2,400 = $3,840
PS = ½ × 240 × $8                                              =   $960
TS = $4,800

DWL = ½ × (360 − 240) × ($18 − $8) = ½ × 120 × $10 = $600
  cross-check: $5,400 − $4,800 = $600  ✓
```

Note CS **rose** (\$3,240 → \$3,840) while total surplus fell. That is the
transfer rectangle at work.

**(c)**

```
Supply with tax: Qs = 30(P_b − 5) = 30P_b − 150
600 − 20P_b = 30P_b − 150  →  50P_b = 750  →  P_b = $15
P_s = $15 − $5 = $10        Q = 600 − 300 = 300

Buyer's burden  = $15 − $12 = $3 per unit   (60% of the tax)
Seller's burden = $12 − $10 = $2 per unit   (40% of the tax)

Tax revenue = $5 × 300 = $1,500
DWL = ½ × (360 − 300) × $5 = ½ × 60 × $5 = $150
```

**Buyers bear more** because demand is less elastic than supply at the
equilibrium:

```
PED = (−20)(12/360) = −0.667      PES = (30)(12/360) = +1.00
Buyer's share = PES ÷ (PES + |PED|) = 1.00 / 1.667 = 60%   ✓
```

The more **inelastic** side bears more of the tax.
</details>

### A4. Negative production externality

A chemical plant's private marginal cost is `MC = 2Q` and the marginal
external cost of its pollution is a constant \$12 per unit. Demand is
`P = 60 − Q` (Q in thousands of litres).

**(a)** Find the unregulated market outcome.
**(b)** Find the efficient quantity.
**(c)** Find the deadweight loss and the corrective tax.

<details><summary>Answer</summary>

```
(a) Market:     60 − Q = 2Q      →  Q = 20 thousand,  P = $40

(b) MSC = MC + MEC = 2Q + 12
    Efficient:  60 − Q = 2Q + 12  →  3Q = 48  →  Q = 16 thousand
    MB at Q = 16:  60 − 16 = $44

(c) At Q = 20:  MSC = 2(20) + 12 = $52,  MB = $40  →  gap of $12
    DWL = ½ × (20 − 16) × $12 = $24 thousand

    Corrective tax = MARGINAL EXTERNAL COST = $12 per unit
```

The tax shifts private MC up onto MSC, so the market lands on Q = 16.
Output falls to the efficient level, **not to zero** — some pollution is worth
tolerating because the output is worth more than the harm.
</details>

### A5. Cost table

A firm's total cost schedule:

| Q | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|---|
| TC | 60 | 90 | 110 | 126 | 148 | 180 | 228 |

**(a)** What is total fixed cost?
**(b)** Complete MC, AVC and ATC.
**(c)** The firm is perfectly competitive. What does it produce and what is
its profit at P = \$48? At P = \$36? At P = \$20?

<details><summary>Answer</summary>

**(a)** `TFC = TC at Q = 0 = $60`.

**(b)**

| Q | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| MC | 30 | 20 | 16 | 22 | 32 | 48 |
| TVC | 30 | 50 | 66 | 88 | 120 | 168 |
| AVC | 30.00 | 25.00 | **22.00** | **22.00** | 24.00 | 28.00 |
| ATC | 90.00 | 55.00 | 42.00 | 37.00 | **36.00** | 38.00 |

`min AVC = $22`; `min ATC = $36 at Q = 5`.

**(c)**

```
P = $48 :  MC = $48 at Q = 6.  TR = $288, TC = $228  →  PROFIT +$60
P = $36 :  MC = $32 at Q = 5, $48 at Q = 6 → produce 5.
           TR = $180, TC = $180  →  ZERO economic profit.
           (P = min ATC — this is the long-run competitive equilibrium price.)
P = $20 :  $20 < min AVC of $22  →  SHUT DOWN.  Loss = TFC = $60.
           (Producing at Q = 2 would give TR $40 − TC $110 = −$70, worse.)
```
</details>

### A6. Monopoly

A monopolist faces `P = 200 − 4Q` and has constant `MC = $40`.

**(a)** Find the profit-maximising quantity and price.
**(b)** What would a competitive industry with the same cost curve produce and
charge?
**(c)** Calculate the deadweight loss from monopoly.

<details><summary>Answer</summary>

```
(a) TR = (200 − 4Q)Q = 200Q − 4Q²
    MR = 200 − 8Q                  (twice the slope of demand)
    MR = MC:  200 − 8Q = 40  →  Q_m = 20
    PRICE off the DEMAND curve:  P = 200 − 4(20) = $120

(b) Competitive:  P = MC  →  200 − 4Q = 40  →  Q_c = 40,  P_c = $40

(c) DWL = ½ × (Q_c − Q_m) × (P_m − MC)
        = ½ × (40 − 20) × ($120 − $40)
        = ½ × 20 × $80 = $800
```

Half the output, three times the price. Reading P off the MR curve would give
\$40 and is the classic error.
</details>

### A7. Game theory

Two supermarkets choose **Discount** or **Full price**. Payoffs are (Store 1,
Store 2) in \$ million of profit:

|  | **Store 2: Full price** | **Store 2: Discount** |
|---|---|---|
| **Store 1: Full price** | 20, 20 | 6, 26 |
| **Store 1: Discount** | 26, 6 | 11, 11 |

**(a)** Does either store have a dominant strategy?
**(b)** What is the Nash equilibrium?
**(c)** Why is the outcome a dilemma?

<details><summary>Answer</summary>

**(a)**

```
Store 1: if Store 2 plays Full price → 26 (Discount) vs 20 (Full) → DISCOUNT
         if Store 2 plays Discount   → 11 (Discount) vs  6 (Full) → DISCOUNT
   ⇒ Discount is DOMINANT for Store 1.  By symmetry, also for Store 2.
```

**(b)** **(Discount, Discount)**, payoffs **(11, 11)**. If both players have a
dominant strategy, that pair is automatically the Nash equilibrium.

**(c)** Both would earn **20** at (Full price, Full price) — better for each
than 11 — but that cell is not stable: either store can jump to 26 by
defecting. This is a **prisoners' dilemma**, and it is why cartels break down.
</details>

### A8. Market structures — short answer

**(a)** In long-run equilibrium, both a perfectly competitive firm and a
monopolistically competitive firm earn zero economic profit. Give two ways
they still differ.
**(b)** Why can a monopoly sustain economic profit in the long run?
**(c)** A firm is making a loss but keeps operating. Under what condition is
that the profit-maximising (loss-minimising) decision?

<details><summary>Answer</summary>

**(a)** In monopolistic competition, `P > MC` — there is a **markup** — and
output is to the **left** of minimum ATC, so the firm carries **excess
capacity**. Perfect competition has `P = MC` and produces **at** minimum ATC.
Also: the PC firm's demand curve is horizontal; the monopolistic competitor's
slopes down and is tangent to ATC in the long run.

**(b)** **Barriers to entry** — natural (economies of scale), ownership
(control of a scarce input) or legal (franchise, licence, patent). Without
entry, nothing competes the profit away.

**(c)** When `AVC ≤ P < ATC`. Revenue covers all variable cost and contributes
something towards fixed cost, so the loss is **smaller than TFC**, which is
what the firm would lose by shutting. Only if `P < min AVC` should it shut
down.
</details>

---

## Part B — Macroeconomics

### B1. Real versus nominal GDP

An economy produces bicycles and coffee. Base year 2022.

| | Q 2022 | P 2022 | Q 2023 | P 2023 |
|---|---|---|---|---|
| Bicycles | 200 | \$300 | 220 | \$330 |
| Coffee (kg) | 5,000 | \$4 | 5,200 | \$5 |

**(a)** Nominal GDP in each year.
**(b)** Real GDP in 2023.
**(c)** The rate of economic growth, and the growth in nominal GDP.
**(d)** The GDP deflator for 2023.

<details><summary>Answer</summary>

```
(a) Nominal 2022 = 200×$300 + 5,000×$4  = $60,000 + $20,000 = $80,000
    Nominal 2023 = 220×$330 + 5,200×$5  = $72,600 + $26,000 = $98,600

(b) Real 2023 (2022 prices)
                 = 220×$300 + 5,200×$4  = $66,000 + $20,800 = $86,800

(c) Economic growth = ($86,800 − $80,000)/$80,000 × 100 = 8.5%
    Nominal growth  = ($98,600 − $80,000)/$80,000 × 100 = 23.25%

(d) GDP deflator 2023 = $98,600 / $86,800 × 100 = 113.6
```

Real GDP in 2022 equals nominal GDP in 2022, because 2022 is the base year.
The economy grew **8.5%**; the other ~14.75 percentage points of the nominal
figure were price increases.
</details>

### B2. Labour market indicators

An economy has 12.4 million employed, 0.6 million unemployed and 4.0 million
of working age who are not in the labour force.

**(a)** Labour force, unemployment rate, working-age population, participation
rate.
**(b)** 200,000 discouraged workers resume searching for work and none of them
finds a job. What happens to the unemployment rate?

<details><summary>Answer</summary>

```
(a) Labour force           = 12.4 + 0.6         = 13.0 million
    Unemployment rate      = 0.6 / 13.0 × 100   = 4.62%
    Working-age population = 13.0 + 4.0         = 17.0 million
    Participation rate     = 13.0 / 17.0 × 100  = 76.47%

(b) Unemployed  = 0.6 + 0.2 = 0.8 million
    Labour force = 13.0 + 0.2 = 13.2 million
    New rate     = 0.8 / 13.2 × 100 = 6.06%
```

The unemployment rate **rises** from 4.62% to 6.06%, even though nothing bad
happened — the numerator rose proportionally more than the denominator. The
participation rate also rises, to `13.2/17.0 = 77.6%`. This is why a recovery
can look like worsening unemployment for a while (Tutorial 9, Q3).
</details>

### B3. CPI, inflation and real wages

| Year | Nominal wage | CPI |
|---|---|---|
| 2023 | \$62,000 | 118.0 |
| 2024 | \$65,000 | 123.9 |

**(a)** Inflation rate between 2023 and 2024.
**(b)** Percentage change in the nominal wage.
**(c)** Percentage change in the real wage. Are workers better or worse off?
**(d)** A term deposit paid 4.2% over the same period. What was the real
interest rate?

<details><summary>Answer</summary>

```
(a) Inflation      = (123.9 − 118.0)/118.0 × 100 = 5.00%
(b) % Δ nominal    = ($65,000 − $62,000)/$62,000 × 100 = 4.84%
(c) % Δ real wage  ≈ 4.84% − 5.00% = −0.16%
(d) Real interest  = 4.2% − 5.0% = −0.8%
```

Workers are **slightly worse off** — the pay rise did not keep up with
inflation, so purchasing power fell about 0.16%. The saver's real return was
**negative**: 4.2% looks positive but buys less than the money did a year
earlier.

*Exact check on (c):* `(65,000/123.9) ÷ (62,000/118) − 1 = −0.15%`. The
subtraction rule is an approximation; it is accurate here because both rates
are small.
</details>

### B4. AS–AD shifts

State what happens to **AD**, **short-run AS** and **long-run AS / potential
GDP** in the first round, and to the price level and real GDP.

**(a)** A rise in foreign incomes.
**(b)** An increase in the price of crude oil because of a shortage.
**(c)** A large increase in the capital stock from business investment.
**(d)** The RBA raises the cash rate.

<details><summary>Answer</summary>

| | AD | SAS | LAS | Price level | Real GDP |
|---|---|---|---|---|---|
| **(a)** foreign incomes ↑ | **Right** (X rises) | — | — | Rises | Rises |
| **(b)** oil price ↑ | — | **Left** (input cost) | — | Rises | **Falls** |
| **(c)** capital stock ↑ | — | **Right** | **Right** | Falls | Rises |
| **(d)** cash rate ↑ | **Left** (C and I fall) | — | — | Falls | Falls |

**(b)** is **cost-push inflation** — prices up, output down.
**(c)** is the only one that moves **potential GDP**; a cost shock never does.
**(d)** monetary policy shifts AD only, which is why it cannot fix (b).
</details>

### B5. Aggregate expenditure and the multiplier

```
C = 80 + 0.75Yd       t = 0.20       I = 60
G = 90                X = 30         M = 20 + 0.1Y
```

**(a)** Write the AE function.
**(b)** Find equilibrium real GDP.
**(c)** Find the multiplier.
**(d)** Full-employment GDP is 540. Which gap, and how big?
**(e)** By how much must G change to close it?
**(f)** At the new equilibrium, is the budget in surplus or deficit?

<details><summary>Answer</summary>

```
(a) Autonomous A = 80 + 60 + 90 + 30 − 20              = 240
    Slope of AE  = 0.75(1 − 0.20) − 0.10 = 0.60 − 0.10 = 0.50
    AE = 240 + 0.5Y

(b) Y = AE :  Y = 240 + 0.5Y  →  0.5Y = 240  →  Y = 480

(c) K = 1 / (1 − 0.5) = 2.0

(d) Full employment 540 > 480  →  RECESSIONARY gap of 60

(e) ΔG = gap ÷ K = 60 ÷ 2 = +$30   (INCREASE G by 30)
    check: A = 270, Y = 270/0.5 = 540  ✓

(f) At Y = 540:   T = tY = 0.20 × 540 = 108
                  G = 90 + 30 = 120
                  Balance = 108 − 120 = −$12  →  DEFICIT of 12
```

Note (e): **divide** the gap by the multiplier. Multiplying gives 120 and
overshoots by a factor of four.
Note (f): tax revenue is computed at the **new** GDP, not the old one.
</details>

### B6. Fiscal balance and gap (sample-exam style)

```
C = 40 + 0.6Yd    t = 0.5    I = 15    G = 20    X = 5    M = 0.1Y
```

**(a)** Find equilibrium GDP.
**(b)** Calculate the fiscal balance at that GDP.
**(c)** Full-employment GDP is \$80 billion. Which gap?
**(d)** By how much should G change to close it?

<details><summary>Answer</summary>

```
(a) Y = 40 + 0.6(1 − 0.5)Y + 15 + 20 + 5 − 0.1Y
      = 80 + 0.3Y − 0.1Y
      = 80 + 0.2Y
    0.8Y = 80  →  Y = $100 billion

(b) Fiscal balance = tY − G = 0.5(100) − 20 = 50 − 20 = +$30 bn  SURPLUS

(c) Y = 100 > Y_f = 80  →  INFLATIONARY gap of $20 bn

(d) K = 1/(1 − 0.2) = 1.25
    ΔG = −20 / 1.25 = −$16 bn   (DECREASE G by 16)
    check: A = 80 − 16 = 64, Y = 64/0.8 = 80  ✓
```

This is Sample Exam v1 Q5, reproduced exactly.
</details>

### B7. Monetary policy

**(a)** The RBA wants to stimulate a weak economy. Describe the transmission
mechanism from open-market operation to real GDP.
**(b)** The reserve ratio is 8% and the RBA injects \$50 million of reserves.
How much in deposits is created, and how much new money?
**(c)** Give two reasons a rate cut might fail to work.

<details><summary>Answer</summary>

**(a)**

```
RBA BUYS Commonwealth Government Securities (open-market operation)
   → banks' reserve supply rises (money supply MS0 → MS1)
   → the CASH RATE falls
   → other interest rates fall
   → borrowing for consumption and investment rises  (↑C, ↑I)
   → AD shifts RIGHT, amplified by the multiplier
   → real GDP rises; the price level rises
```

Buy to loosen, sell to tighten.

**(b)**

```
K = 1 / 0.08 = 12.5
Total deposits created = 12.5 × $50m = $625 million
New money (loans)      = $625m − $50m = $575 million
Reserves held          = 8% × $625m = $50m  ( = the injection )  ✓
```

**(c)** Any two of: investment is **interest inelastic** (firms will not borrow
when demand is weak, however cheap credit is); the economy is in a **liquidity
trap** (people hoard cash at near-zero rates); the RBA controls **neither**
how much households deposit nor how much banks choose to lend; the AS curve is
steep, so the AD increase becomes **inflation** rather than output; or the
shock came from the **supply** side, which monetary policy cannot address.
</details>

### B8. Comparative advantage

Country A can produce **300 tonnes of wheat or 100 rolls of cloth**.
Country B can produce **200 tonnes of wheat or 200 rolls of cloth**.

**(a)** Who has the absolute advantage in each good?
**(b)** Who has the comparative advantage in each good?
**(c)** What range of trade prices (wheat per roll of cloth) benefits both?

<details><summary>Answer</summary>

**(a)** **A** has the absolute advantage in **wheat** (300 > 200); **B** in
**cloth** (200 > 100).

**(b)**

```
Opportunity cost of 1 ROLL OF CLOTH (wheat given up):
   A: 300 ÷ 100 = 3 tonnes
   B: 200 ÷ 200 = 1 tonne        → B has the comparative advantage in CLOTH

Opportunity cost of 1 TONNE OF WHEAT (cloth given up):
   A: 100 ÷ 300 = 0.33 rolls     → A has the comparative advantage in WHEAT
   B: 200 ÷ 200 = 1.00 roll
```

**(c)** Any price **strictly between 1 and 3 tonnes of wheat per roll of
cloth**. At exactly 1, B gains nothing; at exactly 3, A gains nothing; outside
that range one country is worse off than producing for itself.
</details>

### B9. Tariff welfare

A country imports televisions at a world price of \$40. Domestic production is
1.0 million and domestic purchases are 5.0 million. A **\$10 tariff** raises
the price to \$50; domestic production rises to 1.6 million and purchases fall
to 4.4 million.

**(a)** Imports before and after.
**(b)** Tariff revenue.
**(c)** Deadweight loss.
**(d)** Who gains, who loses?

<details><summary>Answer</summary>

```
(a) Imports before = 5.0 − 1.0 = 4.0 million
    Imports after  = 4.4 − 1.6 = 2.8 million

(b) Tariff revenue = $10 × 2,800,000 = $28 million

(c) DWL = production triangle + consumption triangle
        = ½ × $10 × (1.6 − 1.0)m  +  ½ × $10 × (5.0 − 4.4)m
        = $3m + $3m = $6 million

    cross-check:
    CS lost   = $10 × 4.4m + ½ × $10 × 0.6m = $44m + $3m = $47m
    PS gained = $10 × 1.0m + ½ × $10 × 0.6m = $10m + $3m = $13m
    $47m − $13m − $28m = $6m   ✓
```

**(d)** **Domestic producers gain** \$13m (a transfer from consumers).
**The government gains** \$28m of revenue. **Domestic consumers lose** \$47m.
**Society loses \$6m** — the two deadweight-loss triangles, which nobody
receives.

Note the revenue base: `$10 × imports (2.8m)`, **not** `$10 × consumption
(4.4m)`.
</details>

---

## Part C — Discussion questions

These are written-answer questions of the kind that carry the most marks and
the least arithmetic. Aim for a mechanism, a diagram description, and a
limitation.

### C1

*Discuss the effectiveness of the RBA's monetary policy in 2020, when the cash
rate was cut to 0.25%.*

<details><summary>How to structure the answer</summary>

1. **The theory.** Lower rates reduce the return to saving and the cost of
   borrowing, so C and I should rise and AD shift right.
2. **Interest elasticity.** Rates were cut three times in 2019 and again in
   March 2020. Repeated cuts with little response are themselves evidence that
   consumers and producers are interest **inelastic**.
3. **The real economy.** Businesses shut, employment fell, incomes fell,
   consumption fell. Firms do not borrow to invest into collapsing demand.
4. **Prices.** Grocery prices rose, cutting real purchasing power further.
5. **The model point.** Monetary policy shifts **AD**. Lockdowns and supply-
   chain breaks shifted **AS**. No cash rate fixes a supply shock.
6. **Conclusion.** Unlikely to have been effective on its own.
</details>

### C2

*Keynesian economists believe government can achieve full employment through
fiscal stimulus in a recession. Discuss two limitations of fiscal policy for
economic stabilisation.*

<details><summary>Answer</summary>

Pick two from the examinable list and explain the mechanism, not just the
name:

- **Legislation lag** — Parliament must debate and pass the measure, so money
  arrives after the downturn may have turned, making stimulus pro-cyclical.
- **Impact lag** — economic forecasting is not an exact science.
- **Crowding out** — the deficit must be borrowed, which reduces the supply of
  loanable funds, raises the real interest rate and reduces private
  investment, offsetting part of the AD increase.
- **Potential GDP is imperfectly estimated** — you cannot size a gap you
  cannot measure.
- **Inflation** — if AS is steep, the stimulus goes into prices, not output.
- **Multiplier uncertainty** and **irrational consumer behaviour** — a handout
  may be saved rather than spent.
</details>

### C3

*Cyclone damage destroys most of Queensland's banana crop and prices rise from
\$3/kg to \$15/kg. Should the government cap the price? Analyse using
efficiency and fairness.*

<details><summary>Answer</summary>

**The market outcome.** Supply shifts **left**; equilibrium price **rises** and
quantity **falls**. That price is **efficient**: it equates MB and MC,
rationing the scarce bananas to whoever values them most and signalling other
growers to send fruit north.

**A price cap.** Set below the new equilibrium it binds: quantity supplied
falls further, `Qd > Qs`, and there is a **shortage**. Consumers who get
bananas pay less (a transfer to them), but some get none at all. There is a
**deadweight loss**, plus **resources lost to non-monetary costs** — queuing,
searching, and a black market. And the cap removes the signal that would have
attracted new supply.

**Fairness.** Efficiency does not settle it. On the *rules* view, a market
price arrived at by voluntary exchange is fair if ownership is legitimate. On
the *results* view, a price only the wealthy can pay is unfair regardless of
process. Note also that **equality is not equity**.

**A defensible conclusion**: a cap is likely to make the shortage worse
without helping the people it targets; direct income support leaves the price
signal intact while addressing the distributional concern.
</details>

### C4

*Explain how price discrimination increases a monopolist's profit, and whether
it makes the market more or less efficient.*

<details><summary>Answer</summary>

**Mechanism.** A single-price monopolist must charge everyone the same price,
leaving consumer surplus on the table for buyers who would have paid more.
Charging different prices to groups with different average willingness to pay
**converts consumer surplus into economic profit**. It requires separable
groups (age, employment status, day of purchase) and no resale.

**Effect on efficiency — both directions.** It **raises output** relative to
single-price monopoly, because the low-value group is now served at a lower
price — units that would not have been sold at all. That **reduces the
deadweight loss**. So it can be *more* efficient. But consumers are **worse
off**, because the extra output is paid for with their surplus.

The full-marks answer contains both halves.
</details>

### C5

*Australia is a coal exporter. Explain the welfare effects of opening the coal
market to trade, and identify who loses.*

<details><summary>Answer</summary>

The world price (\$75/tonne) exceeds the no-trade domestic price (\$50/tonne),
so Australia has the **comparative advantage** and **exports**.

- The domestic price **rises** to \$75.
- Australian miners **produce more** (175 Mt).
- Australian buyers **buy less** (50 Mt).
- **Exports** = 175 − 50 = 125 Mt.
- **Producer surplus rises by A + B**; **consumer surplus falls by A**.
- Area A is a **transfer** from domestic buyers to producers; area **B is the
  net gain from trade**, so **total surplus rises**.

**Who loses:** domestic coal **buyers** — power stations and, through them,
domestic electricity users. Trade raises total surplus but always creates
losers, and naming them is what the question is testing.
</details>
