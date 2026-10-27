# Plain English — Topic 7: Bonds and Bond Strategies

[← Start here](#/EFB335/20-plain-english-start-here) · 📁 Deck:
`Topic 7_Bond Portfolio Management Strategies-4.pptx` ·
[Sample Q4](#/EFB335/18-sample-final-exam/question-4-bond-portfolio-choice-topic-7-4-marks)

## The One-Sentence Version

**When interest rates go up, bond prices go down, and duration tells
you by roughly how much.** Everything else in the topic is about
managing that one risk.

## The Picture

You own a bond paying 5% a year. Tomorrow, new bonds start paying 7%.
Who'd pay full price for your 5% bond now? Nobody, so its price has to
fall until it's as good a deal as the new 7% ones. **Rates up, price
down. That's the seesaw.** A long bond is a long seesaw: the far end
moves much more. Duration measures how long your seesaw is.

## The Words You Need

| Term | Plain meaning |
|---|---|
| **Coupon** | The fixed interest the bond pays each year |
| **Yield to maturity (YTM)** | The return you'd earn buying at today's price and holding to the end. The market's interest rate for that bond |
| **Premium / discount** | Yield below the coupon → price above face value (premium). Yield above the coupon → below face value (discount) |
| **Macaulay duration** | The weighted average time until you get your money back, in **years** |
| **Modified duration** | Macaulay ÷ (1 + yield). The % price change for a 1-point change in yield |
| **Convexity** | The price/yield line is curved, not straight. Convexity is the correction for that curve. **More convexity is good** |
| **Yield curve / term structure** | Yields plotted against maturity at one point in time. Usually upward sloping |
| **Immunisation** | Set the portfolio's duration equal to your time horizon, so price risk and reinvestment risk cancel out |

## What Makes a Bond More Sensitive (slides 18–21)

A bond's price is **more** sensitive to rate changes when it has:
- **longer maturity** (but the extra sensitivity shrinks as maturity gets longer),
- **a lower coupon** (more of the money comes at the far end),
- **a lower starting yield**.

And a fall in rates moves the price **more** than an equal rise (that's
convexity). **Trading rule:** expect rates to fall? Buy long, low-coupon,
high-duration bonds. Expect rates to rise? Go short and high-coupon.

## How It Works, Step by Step

**1. Macaulay duration by hand.** A 2-year bond, 10% annual coupon,
face $100, yield 10% (so price = $100).

```
Year 1 cash flow $10   → PV = 10 / 1.10   =  9.09    weight 0.0909
Year 2 cash flow $110  → PV = 110 / 1.10² = 90.91    weight 0.9091
                                   Price = 100.00

Macaulay D = 1(0.0909) + 2(0.9091) = 1.91 years
Modified D = 1.91 / 1.10 = 1.74
```

Just under 2, because some money (the first coupon) comes early. **A
zero-coupon bond's duration equals its maturity**, since all the money
comes at the end.

**2. Predicting a price change.** A bond has modified duration 5 and
convexity 40.

```
%ΔP ≈ −ModD × Δy  +  ½ × Convexity × (Δy)²

Yields up 1%:    −5 × 0.01  + ½ × 40 × 0.0001 = −5.0% + 0.2% = −4.8%
Yields down 1%:  −5 × −0.01 + ½ × 40 × 0.0001 = +5.0% + 0.2% = +5.2%
```

Duration alone says ±5%. Convexity helps **both ways**: you lose less
and gain more. That's why more convexity is better. **Neither formula
is on the exam sheet.** Memorise this one line.

**3. Portfolio duration** is just the weighted average of the bonds'
durations: 60% in a duration-4 bond and 40% in a duration-9 bond gives
0.6(4) + 0.4(9) = **6.0**.

## The Strategies, Sorted

| Family | Strategy | Plain meaning |
|---|---|---|
| **Passive** | Buy and hold | Pick bonds matching your horizon and hold to maturity |
| | Ladder | Spread money evenly across maturities (1, 2, 3, 4, 5 years) so something matures every year |
| | Indexing | Copy a bond index (full replication or stratified sampling) |
| **Active** | Interest-rate anticipation | Bet on rates: lengthen duration if you expect falls. Risky |
| | Barbell | Split between very short and very long bonds |
| | Valuation / credit analysis | Find mispriced bonds, or issuers whose credit is about to improve |
| | Yield spread analysis | Spreads widen in recessions. Swap sectors when a spread looks abnormal |
| | Bond swaps | Pure yield pickup (swap into higher yield), substitution (swap into an identical but cheaper bond), tax swap |
| **Mixed** | Core-plus | Most of the portfolio passive, the rest active (high yield, foreign, emerging) |
| **Matched funding** | Dedication | Match cash flows to known payments (exact cash match, or with reinvestment) |
| | Immunisation | Duration = horizon, so you lock in today's return |
| | Horizon matching | Cash-match the early years, immunise the later ones |
| | Contingent immunisation | Manage actively until returns hit a **trigger point**, then switch to immunisation to protect the minimum return |

## Why the Yield Curve Has Its Shape (three theories)

| Theory | Plain meaning | Predicts |
|---|---|---|
| **Expectations** | Long rates are the average of expected future short rates | Any shape. Rising curve = rates expected to rise |
| **Liquidity preference** | Investors want extra pay for tying money up longer | Usually **upward** sloping |
| **Segmented markets** | Different investors stick to different maturities. Supply and demand in each segment sets its yield | Whatever the big institutions' needs dictate |

## How the Exam Asks It

**Sample Q4** (4 marks) gives two bond portfolios (modified duration,
convexity, yield, call features) and an upward-sloping yield curve, and
asks you to pick one with three reasons. The marks are for **matching
the choice to a rate view**:

> **State your rate view first.** If rates are expected to fall: choose
> the higher-duration, higher-convexity, non-callable portfolio. (1) It
> gains more in price when yields fall. (2) Higher convexity means more
> gain on the way down and less loss on the way up. (3) No call risk:
> a callable bond gets called when rates fall, capping the gain, so its
> extra yield is mostly payment for that risk. If you expect rates to
> rise, the shorter-duration, higher-yield portfolio wins instead.

## Say It Back

<details><summary>1. Rates rise. What happens to bond prices, and which bonds fall most?</summary>

Prices fall. Long-maturity, low-coupon, low-yield bonds (high duration)
fall the most.
</details>

<details><summary>2. What's the duration of a 7-year zero-coupon bond?</summary>

**7 years.** All its cash comes at maturity.
</details>

<details><summary>3. ModD = 8, convexity = 100, yields fall 0.5%. Price change?</summary>

−8 × (−0.005) + ½ × 100 × 0.000025 = +4.0% + 0.125% ≈ **+4.1%**.
</details>

<details><summary>4. Why is more convexity good?</summary>

The price rises more when yields fall and falls less when yields rise,
compared with what duration alone predicts.
</details>

<details><summary>5. What is immunisation and how is it done?</summary>

Locking in a return over a set horizon by setting the portfolio's
duration equal to that horizon. If rates rise, prices fall but coupons
reinvest at higher rates, and the two effects offset.
</details>
