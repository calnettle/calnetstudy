# TOPIC 7 — Bond Portfolio Management Strategies

<!-- notation:start -->
<details class="notation"><summary>Notation key — what the symbols in this note mean</summary>

| Symbol | Means |
|---|---|
| `m` | Periods per year — 12 monthly, 52 weekly, 252 trading days |
| `Σ` | "Add them all up" — a sum over every item (Σᵢ = over every asset i) |
| `w, wᵢ` | Weight — the fraction of the portfolio held in asset i. Weights add up to 1 |
| `N` | Number of shares bought, or sold short |

[Full EFB335 notation key →](#/EFB335/99-notation-key)

</details>
<!-- notation:end -->

*(Reilly & Brown, Chapter 13; Chapter 12 for revision)*

Topics 2–6 were about equities: how risk and return trade off, how assets are priced, and how equity portfolios are run passively or actively. Topic 7 does the same job for **fixed income**. It sorts bond strategies into five families (passive, active, core-plus, matched-funding, contingent), then builds the toolkit every one of them depends on: the **price–yield relationship**, the rules for which bonds are most **interest-rate sensitive**, **duration** (Macaulay, modified, BPV, portfolio), **convexity**, and the **term structure** of interest rates. The equity ideas carry straight over. Indexing, tracking error and active-vs-passive (Topic 6) reappear here, and "active bond management" is mostly a forecast of interest rates.

New to this topic? Start with the [plain-English note](#/EFB335/25-plain-english-topic-7-bonds).

The deck contains no worked numbers of its own beyond two price–yield charts. Those charts were reverse-engineered and checked, and every other example below uses illustrative numbers, labelled as ours. All of it was recomputed in Python.

> **The deck has two titles.** The title slide says *Bond Portfolio Management Strategies*; the course-outline slide (slide 2), the unit map and Tutorial 7 call it *Analysis of Bonds for Investment Purposes*. Same topic. The deck covers Ch 13 and leans on Ch 12 for the bond maths.

---

## 7.1 Bond portfolios: performance, style and the five strategy families

### Performance (slides 3–4)

Volatile interest rates over recent decades have given bond investors attractive returns, and active managers have used the rate swings to take capital gains. But as a class, **fixed-income portfolios produce both less return and less volatility than other asset classes**.

Exhibit 13.8 plots return against volatility. Approximate positions, read off the chart:

| Asset class | Volatility (≈) | Return (≈) |
|---|---|---|
| US T-bills | 2% | 2.2% |
| FTSE World Govt Bond | 8% | 4% |
| FTSE US Govt Bond | 9.5% | 4.7% |
| FTSE US Corp Bond | 7.5% | 5.6% |
| FTSE US High-Yield Bond | 14% | 7.5% |
| S&P 500 / Russell 1000 | 18% | 11% |
| MSCI Emerging Market Equity | 31.5% | 10.5% |
| GS Commodity | 26% | 4.6% |

Bonds sit in the low-risk, low-return corner, and high-yield bonds sit between investment-grade bonds and equities.

### Style (slides 5–6)

A bond portfolio's **investment style** is summarised by two characteristics:

1. **Credit quality** (default risk).
2. **Interest rate sensitivity** (duration).

These are the bond equivalents of the equity style box. One axis is how safe the issuer is; the other is how far the price moves when rates move.

### The five families — Exhibit 13.10

| Family | Strategies inside it |
|---|---|
| 1. **Passive** | Buy and hold · Indexing |
| 2. **Active** | Interest rate anticipation · Valuation analysis · Credit analysis · Yield spread analysis · Sector/country analysis · Prepayment/option analysis · Other (liquidity, currency, anomaly capture) |
| 3. **Core-plus** | Enhanced indexing · Active/passive "plus" sectors |
| 4. **Matched-funding** | Dedicated: exact cash match · Dedicated: optimal cash match · Classical immunisation: duration match · Horizon matching |
| 5. **Contingent and structured** | Contingent immunisation · Structured management |

> **Learn this table as the skeleton of any essay answer.** A question like "describe the strategies available to a bond manager" is marked on structure. Name the five families, give one or two strategies under each, and say what each one is trying to control (return vs a benchmark, or cash flows vs a liability).

## 7.2 Passive management strategies (slides 7–10)

### Buy-and-hold

The manager selects bonds that fit the client's objectives and constraints and **holds them to maturity**. Selection criteria are credit quality, coupon rate, term to maturity or duration, and indenture provisions such as **call** and **sinking fund** features.

- Investors look for issues whose **maturity/duration approximates their investment horizon**, to reduce **price risk** and **reinvestment risk**.
- **Modified buy-and-hold:** the intention is still to hold to maturity, but the manager trades into a better position if the opportunity arises.
- **Bond ladder:** bonds keep maturing, so the manager keeps having to reinvest. A ladder divides funds **evenly** across instruments that **mature at regular intervals** (for example, equal amounts maturing in each of years 1 to 5), so something matures every period.

### Indexing

The objective is to build a portfolio that matches the performance of a specified bond index as closely as possible. There are two routes:

| | Full replication | Stratified sampling |
|---|---|---|
| How | Hold every bond in the index at index weights | Hold a subset that matches the index's key characteristics: **credit quality, maturity/duration, average yield** |
| Cost | High, because bond indexes hold thousands of issues and many trade rarely | **More cost-effective to manage** |
| Tracking error | Lowest in principle | **Rises** to the extent the characteristics drift away from the index's over time |

> **Tracking error is the price of stratified sampling.** It is the same concept as in Topic 6's equity indexing. A good answer says stratified sampling *trades a little tracking error for much lower cost*, and names the characteristics matched: duration first, then credit quality and yield.

## 7.3 Active management strategies (slides 11–15, 39)

Active managers try to **beat the market**, meaning they try to outperform a designated benchmark and earn **positive risk-adjusted returns (alpha)** against the index used to measure them. The deck stresses that **success or failure mostly comes down to forecasting future interest rates accurately**. Each active strategy is tied to the manager's view of where the alpha will come from.

### Exhibit 13.12 — characteristics of active bond strategies

Risk-adjusted performance is scored 1 (low) to 10 (high). The textbook notes the list is **subjective**.

| Source | Scalability | Sustainability | Risk-adj. performance | Extreme values |
|---|---|---|---|---|
| **Interest rate anticipation:** duration | High | Very weak | 1 | Yes |
| yield curve shape | Low | Very weak | 3 | No |
| **Valuation analysis:** security selection | Low | Medium | 5 | No |
| anomaly capture | Low | Weak | 7 | Yes |
| credit risk | High | Strong | **8** | Yes |
| **Yield spread analysis:** optionality | Medium | Medium | 7 | Yes |
| prepayment | Medium | Medium | 6 | Yes |
| liquidity | Low | Strong | 3 | Yes |
| **Global and tactical:** sector allocation | High | Strong | 6 | No |
| country allocation | High | Strong | 5 | No |
| currency | High | Medium | 2 | Yes |

> **The table undercuts the slide's own headline.** Slide 11 says active success "mostly" comes from rate forecasting, yet Exhibit 13.12 gives **duration bets the lowest score (1) and "very weak" sustainability**, while **credit risk scores highest (8)** with "strong" sustainability. Pure rate forecasting is the most common active bet and the hardest to win consistently. That makes a good discussion point.

### The individual strategies (slides 13–14)

| Strategy | What the manager does |
|---|---|
| **Interest-rate anticipation** | A risky strategy that relies on uncertain forecasts. The manager changes duration according to the rate view. Two structures are listed: a **ladder** (staggered maturities) and a **barbell** (funds split between **short-duration and long-duration** securities) |
| **Valuation analysis** | Select bonds by their **intrinsic value**, buying those priced below it |
| **Credit analysis** | Detailed analysis of the issuer to forecast **changes in its default risk**, so the manager can buy ahead of upgrades and sell ahead of downgrades |
| **Yield spread analysis** | Assumes **normal relationships** exist between yields in different sectors. When a relationship is abnormal, the manager executes **sector swaps**. Spreads **widen in recessions**, and interest-rate volatility also affects them |
| **Bond swaps** | Sell a current position and simultaneously buy a **different issue with similar attributes** but a chance of a better return |

> **The ladder appears in two places.** Slide 9 presents the ladder as part of passive buy-and-hold, as a way to manage reinvestment. Slide 13 lists it under active interest-rate anticipation. The structure is the same; what differs is the motive. A ladder is passive when it is held to spread reinvestment, and active when maturities are tilted on a rate view. Say which you mean.

### Yield spreads in practice — Exhibit 13.14 (slide 15)

The chart shows the monthly spread of a global high-yield index over the 10-year US Treasury, 1989–2023. Approximate readings: spreads mostly sat between **≈250 and 600 bp**, with spikes in recessions and crises. The largest was **≈1,550 bp at the end of 2008**. Others were **≈1,090 bp around 1990–91**, **≈940 bp in 2002** and **≈970 bp in 2020**. This illustrates slide 14's "spreads widen during economic recession". The deck points to the RBA chart pack (rba.gov.au/chart-pack/interest-rates.html) for Australian spreads.

### Bond swap types (slide 39)

| Swap | What it is |
|---|---|
| **Pure yield pickup** | Swap **low-coupon** bonds into **higher-coupon** bonds (the aim is more yield) |
| **Substitution** | Swap a bond for a **seemingly identical** one that is currently thought to be **undervalued** |
| **Tax swap** | Swap to **manage tax liability**, for example between taxable and municipal (income-tax-free) bonds |

**Swaps and market efficiency:** bond swaps *by their nature suggest market inefficiency*. A substitution swap only pays if two near-identical bonds are temporarily mispriced against each other. That links back to Topic 5.

## 7.4 Bond valuation fundamentals: the price–yield curve (slides 16–17)

```
P0 = Σ (t = 1 … N) CF_t / (1 + i)^t

  CF_t  coupon (and principal at N) paid at date t
  i     yield to maturity per period  (annual YTM ÷ m for m payments a year)
  N     number of periods             (years × m)
```

Three facts from slide 16:

- Price and YTM are **inversely** related.
- **YTM below the coupon rate → premium** (price above par). **YTM above the coupon rate → discount** (price below par).
- The price–yield relationship is **convex**, not a straight line.

### Worked example — verifying Exhibit 12.15

The exhibit prices a **20-year, 8% coupon, $1,000** bond at yields from 2% to 16%. It only reproduces with **semiannual** coupons (m = 2: $40 every half-year, 40 periods). At 10%, an annual-coupon reading gives $829.73, not $828.41.

```
At YTM 10%:  i = 0.10/2 = 0.05,  N = 40
P = 40 × [1 − 1.05^−40]/0.05 + 1,000/1.05^40 = $828.41
```

| YTM | 2% | 4% | 6% | **8%** | 10% | 12% | 14% | 16% |
|---|---|---|---|---|---|---|---|---|
| Price | 1,985.04 | 1,547.11 | 1,231.15 | **1,000.00** | 828.41 | 699.07 | 600.05 | 523.02 |

All eight are verified. At YTM = coupon (8%) the bond trades at par. Below 8% it trades at a premium, and above 8% at a discount.

```
Yield down 2 points (8% → 6%):  1,231.15 / 1,000 − 1 = +23.1%
Yield up   2 points (8% → 10%):   828.41 / 1,000 − 1 = −17.2%
```

(Base = the $1,000 starting price.) The same 2-point move gains more than it loses. That is convexity, which §7.5 and §7.7 build on.

## 7.5 Interest rate sensitivity of bonds (slides 18–21)

The speaker notes mark all three slides **"Very important"**. These are the rules:

1. **Long-term bonds** are more interest-rate sensitive than short-term bonds.
2. Sensitivity **increases with maturity, but at a diminishing rate**.
3. A **decrease** in rates causes a **larger** price change than an **increase** of equal size.
4. **High-coupon** bonds are **less** sensitive.
5. Sensitivity is **higher when the current rate level is lower**. Equivalently, low initial-YTM bonds are more sensitive (slide 20).

### Rule 2 — diminishing rate (illustrative numbers)

These are 8% annual-coupon bonds priced at par (YTM 8%), with yields rising 1 point to 9%:

| Maturity | 5 yr | 10 yr | 20 yr | 30 yr | 50 yr |
|---|---|---|---|---|---|
| Modified duration | 3.99 | 6.71 | 9.82 | 11.26 | 12.23 |
| Price change | −3.89% | −6.42% | −9.13% | −10.27% | −10.96% |

Going from 5 to 10 years adds about 2.5 points of price sensitivity. Going from 30 to 50 years adds less than 1.

### Rule 3 — the asymmetry (slide 19)

Slide 19's curve marks **$1,000 at 8%** and **$810.71 at 10%**. The slide does not name the bond. Those two points match a **30-year, 8% coupon bond with semiannual coupons** exactly (annual coupons would give $811.46). Using that bond:

```
Rate falls 2 points (8% → 6%):  P = $1,276.76  →  gain  $276.76
Rate rises 2 points (8% → 10%): P =   $810.71  →  loss  $189.29
```

The fall in rates moves the price **$87.47 more** than the equal rise.

### Rules 1, 4 and 5 together — slide 20's four bonds

| Bond | Coupon | Maturity | Initial YTM | Macaulay D | Yield −1 pt | Yield +1 pt | Yield −5 pts |
|---|---|---|---|---|---|---|---|
| A | 12% | 5 yrs | 10% | 4.07 | +3.8% | −3.6% | +21.1% |
| B | 12% | 30 yrs | 10% | 10.18 | +10.1% | −8.5% | +74.7% |
| C | 3% | 30 yrs | 10% | 12.68 | +12.8% | −10.5% | +103.6% |
| D | 3% | 30 yrs | **6%** | 16.88 | +18.0% | −14.2% | +158.3% |

These figures are our computation, assuming annual coupons. The slide only shows the curves, but our −5-point values match the curves' left-hand ends (A ≈ 20%, D ≈ 150–160%). Reading each pair:

- **A vs B (maturity):** same coupon and yield, but the 30-year bond moves about 2.7× as much.
- **B vs C (coupon):** same maturity and yield, but the 3% coupon bond is more sensitive.
- **C vs D (initial YTM):** identical bonds, but the one starting at a 6% yield is the most sensitive of all.

**Why (slide 20):** a high initial YTM bond has a **lower fraction of its value tied to later, more sensitive cash flows**. Heavy discounting shrinks the distant payments. A low-YTM bond has more of its value in distant cash flows.

> **Every one of these rules is really a statement about duration.** Longer maturity, lower coupon and lower YTM all push more of the bond's present value into distant cash flows, so they all raise duration (§7.6). If you can't remember a rule under exam pressure, ask: "does this put more value further away?"

### Trading strategies (slide 21)

```
Rates expected to FALL  →  choose bonds with HIGHER sensitivity  (long, low coupon, low YTM)
Rates expected to RISE  →  choose bonds with LOWER  sensitivity  (short, high coupon, high YTM)
```

> **Exam link.** [Sample Q4](#/EFB335/18-sample-final-exam/question-4-bond-portfolio-choice-topic-7-4-marks) (4 marks) is exactly this decision. Tutorial 7's Q4 and Q5 are the same type with different numbers. You pick between two portfolios described by modified duration, convexity, YTM and call features, after stating your rate view. The worked numbers for Q4 are in §7.7.

## 7.6 Bond analysis tools: duration (slides 23–28)

A bond manager has to value bonds accurately, in dollars or as a YTM, and needs some extra computational tools alongside the valuation formula (slide 23). The first is duration.

### Macaulay duration (slides 24–25)

Duration measures a bond's **price volatility (interest rate sensitivity)**. Macaulay duration is the **weighted average of the payment dates**. Each date is weighted by the PV of that date's cash flow as a share of the bond's price.

```
         Σ  t × CF_t / (1 + i)^t
D  =  ─────────────────────────────  =  Σ [ t × CF_t / (1 + i)^t ] / P0
         Σ  CF_t / (1 + i)^t

  t   date of payment (in periods)     i   YTM per period     P0  bond price
```

From slide 25:

- Duration is measured in **time** (years), not dollars.
- **A higher coupon means a lower duration**, because more cash arrives sooner and the weighted-average date comes earlier.
- **Only a zero-coupon bond has duration equal to its maturity**, because all its cash comes on one date. A 5-year zero has D = 5.00 at any yield.

### Worked example — Macaulay duration (illustrative numbers)

The bond is a 4-year, 8% annual coupon, $1,000 par bond, with YTM 10%.

```
 t   CF_t     PV = CF/1.10^t    weight = PV/P    t × PV
 1     80          72.73           0.0777          72.73
 2     80          66.12           0.0706         132.23
 3     80          60.11           0.0642         180.32
 4  1,080         737.65           0.7876       2,950.62
               P0 = 936.60                  Σ = 3,335.89

D = 3,335.89 / 936.60 = 3.56 years
```

The bond is at a discount because YTM is above the coupon. D (3.56) is below the 4-year maturity because the coupons arrive early.

> **i is the periodic yield and t is in periods.** For a semiannual bond, run the formula with i = YTM/2 and t = 1 … 2n. The answer is then in **half-years**, so divide by 2 to get years. The 20-year 8% bond of Exhibit 12.15 has D = 20.58 periods = **10.29 years**. Forgetting the ÷2 doubles the duration.

### Modified duration and the price-change prediction (slides 26–27)

Slide 26 says the price-change prediction formula has three inputs: **D**, the **prevailing yield i**, and the **forecast yield change Δi**. Combining the first two gives modified duration:

```
Mod D  =  D / (1 + i/m)                m = coupon payments per year

ΔP / P  ≈  −Mod D × Δi                 (Δi as a decimal: +1% = +0.01)
ΔP      ≈  −Mod D × Δi × P
```

> **Slide 27 prints the prediction as `ΔP/P ≈ −(Mod D) × [Δ(1 + i/m)]`. Read the bracket as Δi, the annual yield change.** Taken literally, Δ(1 + i/m) = Δi/m, which halves the prediction for a semiannual bond. For the Exhibit 12.15 bond and a 2-point rise (8% → 10%), the literal reading predicts $901.04 (−9.8964 × 0.02/2 × 1,000 = −$98.96). The Δi reading predicts $802.07, and the actual price is $828.41. Slide 33 uses plain `[Δi]`, and that is the form to use: Mod D in years times the annual Δi. Slide 26 also refers to "the bond price change prediction formula" without showing it. It is the textbook's `ΔP/P ≈ −D × Δi/(1 + i/m)`, which is the same thing before D and (1 + i/m) are combined. Check the notation with your tutor if a question uses m > 1.

**Worked example (same 4-year bond):**

```
Mod D = 3.5617 / 1.10 = 3.2379 ≈ 3.24

Yield 10% → 11%  (Δi = +0.01):
  predicted ΔP = −3.2379 × 0.01 × 936.60 = −$30.33
  actual: reprice at 11% → $906.93, so ΔP = −$29.68

Yield 10% → 9%   (Δi = −0.01):
  predicted ΔP = +$30.33
  actual: reprice at 9% → $967.60, so ΔP = +$31.00
```

Duration predicts a symmetric ±$30.33. The actual changes are asymmetric: the bond loses **less** than predicted and gains **more**. §7.7 explains why.

### Basis point value (slide 27)

BPV is the **dollar** price change for a **one basis point** (0.01% = 0.0001) change in yield:

```
BPV  =  ΔP  ≈  −(Mod D) × (−0.0001) × P

4-year bond:    3.2379 × 0.0001 × 936.60   = $0.30 per $1,000 face per bp
20-year bond:   9.8964 × 0.0001 × 1,000.00 = $0.99 per $1,000 face per bp
```

(20-year bond: D = 20.584 half-years = 10.292 years, Mod D = 10.292 / (1 + 0.08/2) = 9.896 ≈ 9.90; carried at full precision as 9.8964.)

### Duration of a portfolio (slide 28)

Strictly, portfolio duration is the weighted average payment date of **all the cash flows across all the bonds**. It **can be estimated** as the value-weighted average of the individual durations:

```
D_port = Σ  w_j × D_j          w_j = % of capital in bond j

Example: 40% in the 4-year bond (Mod D 3.24), 60% in the 20-year bond (Mod D 9.90)
D_port = 0.4(3.24) + 0.6(9.90) = 1.296 + 5.940 = 7.236 ≈ 7.24

Yields up 0.5% → portfolio ΔP/P ≈ −7.24 × 0.005 = −3.62%
```

> **The weights are market-value weights, not face-value weights.** Weight each bond by the capital invested in it, meaning its price × quantity. A premium bond takes more capital per $100 of face value than a discount bond.

## 7.7 Bond convexity (slides 29–33)

The price–yield relationship is **curved (convex)**, but Mod D treats it as a **straight tangent line**. It misses the curvature (slide 29). Exhibit 13.3 shows the tangent line at y\* lying **below** the true price curve on both sides. The gap grows the further the yield moves from y\* (y₃ and y₄ have bigger errors than y₁ and y₂).

From slide 31, duration-based approximation is **conservative**:

- it **overestimates** the price **decline** after a yield increase
- it **underestimates** the price **increase** after a yield decrease

Mod D approximates how the price changes as rates change. **Convexity approximates how Mod D itself changes** as yields shift.

### The convexity statistic (slide 32)

```
                1         ⎡  N     CF_t                  ⎤
Convexity = ─────────── × ⎢  Σ  ───────── × (t² + t)    ⎥  ÷  P
             (1 + i)²     ⎣ t=1  (1 + i)^t               ⎦
```

**Worked example — the 4-year bond (8% annual, YTM 10%, P = 936.60):**

```
 t   PV of CF    (t² + t)    PV × (t² + t)
 1     72.73         2           145.45
 2     66.12         6           396.69
 3     60.11        12           721.26
 4    737.65        20        14,753.09
                           Σ = 16,016.50

Convexity = (16,016.50 / 1.10²) / 936.60 = 13,236.8 / 936.60 = 14.13
```

### Price change with convexity (slide 33, annual cash flows, m = 1)

```
ΔP  ≈  { −(Mod D) × [Δi] × P }  +  { 0.5 × Convexity × [Δi]² × P }
         └ duration term ┘          └ convexity term: ALWAYS + ┘
```

**Worked example — the 4-year bond:**

```
Convexity term, Δi = ±0.01:  0.5 × 14.13 × 0.0001 × 936.60 = +$0.66
Convexity term, Δi = ±0.02:  0.5 × 14.13 × 0.0004 × 936.60 = +$2.65
```

| Yield move | Duration only | Duration + convexity | Actual |
|---|---|---|---|
| +1% (10% → 11%) | −$30.33 | **−$29.66** | −$29.68 |
| −1% (10% → 9%) | +$30.33 | **+$30.99** | +$31.00 |
| +2% (10% → 12%) | −$60.65 | **−$58.01** | −$58.10 |
| −2% (10% → 8%) | +$60.65 | **+$63.30** | +$63.40 |

Adding convexity brings the prediction within about 10 cents of the actual change.

**Worked example — the Exhibit 12.15 bond (20-year, 8%, semiannual, at par), ±2 points:**

```
Mod D = 9.8964 (years).  Slide-32 convexity in half-year periods = 589.08
                         → annualised ÷ m² = 589.08 / 4 = 147.27

Duration term:  ∓ 9.8964 × 0.02 × 1,000 = ∓ $197.93
Convexity term: + 0.5 × 147.27 × 0.0004 × 1,000 = + $29.45

                      Duration only    + Convexity    Actual (Exhibit 12.15)
Yield 8% → 10%          $802.07         $831.53           $828.41
Yield 8% → 6%         $1,197.93       $1,227.38         $1,231.15
```

Duration alone misses by $26.34 (rise) and $33.22 (fall), which is Exhibit 13.3's error band. Adding convexity cuts the misses to $3.12 and $3.77.

> **The convexity term is always added, whichever way yields move**, because (Δi)² is positive. The duration term flips sign with Δi. Two traps follow from this. First, students subtract the convexity term on a yield rise; don't. Second, slide 33's formula assumes **m = 1**. For a semiannual bond, the slide-32 formula run on half-year periods gives convexity in periods², so divide by **m² = 4** before using it with an annual Δi. (Duration needs only the ÷ m that turns half-years into years.) Check with your tutor which convention an exam question's convexity figure uses.

### High vs low convexity (slide 32 graphs)

The slide's two stylised panels show a +100 bp / −100 bp move from a price of 100:

| | Yield −100 bp | Yield +100 bp |
|---|---|---|
| **Red bond — high convexity** | 110 | 98 |
| **Green bond — low convexity** | 105 | 97 |

The high-convexity bond **gains more when yields fall and loses less when they rise**. That is why, other things equal, **more convexity is better**. (The panel numbers are schematic. Backing them out would imply a Mod D of 6 and a convexity of 800 for the red bond, which is not a realistic bond, so read the shape rather than the numbers.)

> **Exam link — [Sample Q4](#/EFB335/18-sample-final-exam/question-4-bond-portfolio-choice-topic-7-4-marks).** Portfolio A has Mod D 6.2 and convexity 138.09. Portfolio B has Mod D 5.1 and convexity 35.82.
>
> ```
> %ΔP ≈ −Mod D × Δi + 0.5 × Convexity × (Δi)²
>
> Yields fall 1%:  A = +6.20% + 0.69% = +6.89%     B = +5.10% + 0.18% = +5.28%
> Yields rise 1%:  A = −6.20% + 0.69% = −5.51%     B = −5.10% + 0.18% = −4.92%
> ```
>
> If you expect rates to fall, A wins: higher duration, far higher convexity, and non-callable. If you expect them to rise, B loses less and yields more. State the rate view first. **None of the Topic 7 formulas is on the [official exam formula sheet](#/EFB335/17-official-exam-formula-sheet/what-is-not-on-the-sheet-memorise-these).** Macaulay D, Mod D, BPV, portfolio duration, convexity and the price-change approximation must all be memorised.

## 7.8 The term structure of interest rates (slides 34–38)

The **term structure** (yield curve) is a **static** function relating **term to maturity** to **yield to maturity** for a sample of bonds **at one point in time**.

### Types of yield curve (slide 34, Exhibit 12.11)

| Shape | Definition |
|---|---|
| **Rising** | Short-term yields are low; yields rise with maturity and flatten out at the long end |
| **Flat** | Approximately equal yields on short- and long-term issues |
| **Declining** (inverted) | Short-term yields are high; longer maturities yield consistently less |
| **Humped** | Intermediate-term yields are above short-term yields, then long-term yields fall below short-term levels and level out |

### Three theories (slides 36–38)

| Theory | Core claim | What shape it predicts |
|---|---|---|
| **Expectations hypothesis** | Long rates reflect **expected future short rates** | **Any** shape. Expected rising short rates → rising curve; expected falling short rates → declining curve; similar logic explains flat and humped curves |
| **Liquidity preference** | Investors prefer short-term bonds because long-term bonds are **more volatile and less liquid**, so issuers must offer **higher yields** on longs | Curve **should generally slope upward**; any other shape is a **temporary aberration** |
| **Segmented market** | Institutions have different maturity needs and confine themselves to **specific maturity segments**; each segment's yield is set by **supply and demand within it** | Shape is ultimately a function of the **investment policies of major financial institutions** |

> **Match the theory to the shape before you write.** Only the expectations hypothesis can explain *every* shape on its own. Liquidity preference explains why the *normal* curve slopes up even when no rate rise is expected. That is the standard answer to "explain the theoretical basis of an upward-sloping curve" (Tutorial 7 Q3). Sample Q4's curve rises steeply to 10 years (≈0.3% at 1 year, ≈2.2% at 10 years) and flattens out to ≈2.9% at 30 years. You could describe that curve with either theory, but say which one you are using.

## 7.9 Global and core-plus strategies (slides 40–41)

### Active global bond investing

An active global fixed-income approach must consider **three interrelated factors**:

1. The **local economy** in each country, including domestic and international demand.
2. The impact of total demand and **domestic monetary policy** on **inflation and interest rates**.
3. The effect of the economy, inflation and interest rates on **exchange rates** between countries.

### Core-plus

Core-plus is a **combination of passive and active** styles, a form of **enhanced indexing**:

- A **large, significant core** is managed **passively**, either in the US aggregate sector (which includes mortgage-backed and asset-backed securities) or in the US Government/Corporate sector alone.
- The **rest is managed actively**, often in **high-yield bonds, foreign bonds and emerging-market debt**.
- **Diversification effects** help manage the risk of the active "plus" sleeve.

(The deck's sector names are US index sectors. In an Australian setting, read them as the equivalent broad local bond index.)

## 7.10 Matched-funding strategies (slides 42–44)

These strategies manage a bond portfolio against a **known liability stream** rather than against an index.

### Dedicated portfolios (slide 42)

Dedicated portfolios are **designed to service liabilities**.

| | Exact cash match | Dedication with reinvestment |
|---|---|---|
| Rule | Portfolio cash flows (coupons + principal) match the liability payments **exactly, period by period** | Cash flows do **not** have to match each liability exactly; surplus cash is reinvested until needed |
| Character | **Conservative**; useful for **sinking funds and maturing principal payments** | **More choice and flexibility**, which can deliver **higher returns at lower cost** |

**Classical immunisation** (Exhibit 13.10's "duration match") works differently. Instead of matching cash flows, it sets the portfolio's **duration equal to the investment horizon**. Slide 8's logic explains why this works. If rates rise, bond prices fall, but coupons are reinvested at the higher rate. If rates fall, the reverse happens. With duration equal to the horizon, **price risk and reinvestment risk offset**, which approximately locks in today's yield.

### Horizon matching (slides 43–44)

Horizon matching is a **combination of cash-matching dedication and immunisation**:

- The liability stream is split at a chosen **horizon**. Choosing the length of that horizon is the important decision.
- **Before the horizon**, liabilities are **cash-matched**.
- **After the horizon**, liabilities are **duration-matched** (immunised).
- With multiple cash needs over specified periods, the manager can **duration-match across the periods while cash-matching within each period**.

Exhibit 13.22 shows a **five-year horizon**. Payouts from 2019 to 2023 (about $6.3m falling to $5.8m a year, read off the chart) are cash-matched. The long tail from 2024 to 2049 (about $5.7m falling to $0.6m) is duration-matched.

> **Know why the deck calls exact cash matching "conservative".** Every liability is met by a coupon or a maturing bond, so nothing has to be sold or reinvested at an unknown future rate. Duration matching is more flexible but relies on duration, which drifts as time passes and yields change, so the portfolio must be rebalanced (a textbook point, not on the slides). Horizon matching takes certainty for the near-term payouts and flexibility for the distant ones.

## 7.11 Contingent and structured strategies (slide 45)

Contingent procedures are a form of **structured active management**. **Contingent immunisation** lets the manager run the portfolio **actively** for as long as a minimum return is still achievable, and **switch to immunisation** when it is threatened. Throughout, the **duration of the portfolio must be maintained at the horizon value** once immunisation is triggered.

| Term | Deck definition | In practice |
|---|---|---|
| **Cushion spread** | Potential return **below** the current market return | The gap between the market rate the manager could immunise at now and the client's floor return |
| **Safety margin** | Portfolio value **above** the required value | Today's value minus the value needed to reach the floor by immunising at current rates |
| **Trigger point** | The **minimum return** that will **stop active management** | The point where the safety margin is used up, and the manager must immunise |

### Worked example (illustrative numbers; the method is the textbook's Ch 13 approach, not shown on the slides)

The client has $500m, a 5-year horizon and a **floor return of 8%**. Current market rates are **10%**, so the cushion spread is 2 points. Annual compounding is used for simplicity.

```
Required terminal value  = 500 × 1.08^5        = $734.66m
Required value TODAY     = 734.66 / 1.10^5     = $456.17m   (immunising at 10% reaches 734.66)
Safety margin            = 500.00 − 456.17     = $43.83m
```

The manager may run active bets as long as the portfolio stays above the required value. If losses, or a rate rise that raises the discount rate, push the portfolio value down to the required value (the **trigger point**), the manager must immunise at the then-current rate to lock in the 8% floor.

> **The trigger is about value versus required value, not about rates alone.** A rate rise *lowers* the required value today (734.66 is discounted at a higher rate), but it also lowers the portfolio's market value. Whether the margin shrinks depends on which falls more, and that depends on the portfolio's duration relative to the horizon. Check with your tutor how much depth the exam expects. The deck only gives the definitions.

## Summary

- **Five families** (Exhibit 13.10): passive (buy-and-hold, indexing), active (rate anticipation, valuation, credit, yield spread, swaps), core-plus, matched-funding (dedication, immunisation, horizon matching), contingent/structured. Bond style = **credit quality + interest-rate sensitivity**.
- **Passive:** buy-and-hold matches maturity/duration to the horizon, and a ladder spreads reinvestment. Indexing uses **full replication** or the cheaper **stratified sampling**, at the cost of tracking error.
- **Active:** mostly a rate forecast. Exhibit 13.12 rates duration bets lowest and credit highest. Spreads widen in recessions. Swaps are **pure yield pickup**, **substitution** and **tax**, and they imply market inefficiency.
- **Price–yield:** inverse, and convex. YTM below the coupon gives a premium; YTM above the coupon gives a discount.
- **Sensitivity is higher** for longer maturity (at a diminishing rate), lower coupon and lower YTM, and is larger for rate falls than rate rises. Expect falls → buy sensitivity. Expect rises → sell it.
- **Duration:** `D = Σ t·PV(CF_t) / P`, `Mod D = D/(1 + i/m)`, `ΔP/P ≈ −Mod D·Δi`, `BPV = Mod D × 0.0001 × P`, `D_port = Σ w_j·D_j`.
- **Convexity:** duration-only is conservative. The added term `+0.5 × C × (Δi)² × P` is always positive, and more convexity is better.
- **Term structure:** rising, flat, declining, humped. Expectations explains any shape; liquidity preference explains the normal upward slope; segmented markets credits institutional supply and demand.
- **Core-plus** = passive core + active high-yield/global "plus". **Horizon matching** = cash-match the near term + immunise the rest. **Contingent immunisation** = active until the safety margin runs out, then immunise.

## ✅ Checkpoint

*(The deck has no checkpoint slides; these test its key points. Slide 22 is a non-examinable "where in the world is this stock exchange?" photo break. The building shows SIX and BÖRSE signage.)*

<details><summary>1. Name the two characteristics that summarise a bond portfolio's investment style.</summary>

**Credit quality** and **interest rate sensitivity** (duration).

</details>

<details><summary>2. How does stratified sampling differ from full replication, and what is its cost?</summary>

Stratified sampling holds a subset of bonds that matches the index's key characteristics (credit quality, maturity/duration, average yield) instead of every issue. It is **cheaper to manage**, but **tracking error rises** whenever those characteristics drift from the index's.

</details>

<details><summary>3. Rates are expected to fall. Which bond is more attractive: a 10-year 9% coupon bond or a 10-year 4% coupon bond, both yielding 5%?</summary>

The **4% coupon bond**. Lower coupon means higher duration (Macaulay D 8.36 vs 7.40 years at a 5% yield, annual coupons), so it gains more when yields fall.

</details>

<details><summary>4. A bond has Mod D 9.90 and convexity 147.27, and is priced at $1,000. Estimate the price if yields rise 2 points.</summary>

```
ΔP ≈ −9.90 × 0.02 × 1,000 + 0.5 × 147.27 × 0.0004 × 1,000
   = −198.00 + 29.45 = −$168.55   →  P ≈ $831.45
```

This is the Exhibit 12.15 bond. With full-precision Mod D (9.8964) the estimate is $831.53; the actual price at 10% is $828.41.

</details>

<details><summary>5. Why is duration-only price prediction called "conservative"?</summary>

It uses a straight tangent line under a convex curve, so it **overestimates the fall** in price when yields rise and **underestimates the rise** when yields fall. The true price is always above the duration estimate.

</details>

<details><summary>6. Which term-structure theory says the yield curve "should generally slope upward", and why?</summary>

**Liquidity preference theory.** Investors prefer short-term bonds because long-term bonds are more volatile and less liquid, so issuers must offer higher yields to induce them to hold longs. Any other shape is a temporary aberration.

</details>

<details><summary>7. What is horizon matching?</summary>

A combination of **cash-matching dedication and immunisation**. Liabilities up to the chosen horizon are cash-matched, and those beyond it are duration-matched (immunised). The key decision is the length of the horizon.

</details>

<details><summary>8. In contingent immunisation, what is the trigger point?</summary>

The **minimum return** that stops active management. When the portfolio value falls to the value needed to earn the floor return by immunising at current rates (the safety margin is exhausted), the manager must immunise.

</details>
