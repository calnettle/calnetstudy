# TOPIC 10 — Introduction to Derivatives and Risk Management

Lecture 10. Ross et al. (2021, 8th ed.) Ch 23–24.

Topics 7–9 measured risk and priced it. Topic 10 is about **transferring** it. There is very little new mathematics here — the arithmetic is addition and subtraction — but there is a great deal of sign discipline. Almost every mark lost in this topic is a sign error or a mis-identified position.

---

## 10.1 What a derivative is

> **A derivative is a security that derives its value from an underlying security, commodity or event.**

| Contract | Definition | Example |
|---|---|---|
| **Forward** | An agreement to trade a commodity or financial security at a future date | Currencies |
| **Futures** | Like a forward, but **highly standardised and exchange traded** | Wheat, bank bills |
| **Swap** | A package of forwards where you swap one payment for another | Interest rate swap: receive a fixed 5-year rate, pay the floating 90-day rate |
| **Option** | The **right but not the obligation** to buy or sell | Shares, property |

### The three uses

| Use | What it is |
|---|---|
| **Hedging** | You already have an exposure — to commodity prices, interest rates, exchange rates, equity prices — and derivatives are an efficient way to offset it |
| **Speculating** | Gaining a large exposure to a future outcome with a relatively small outlay |
| **Arbitrage** | Finding mispricing across markets and securities and trading to lock in a riskless profit — buy the lower, sell the higher |

> **Hedging removes price risk, not all risk.** A wheat farmer who sells the anticipated crop forward has a set price and is no longer exposed to movements in the wheat price — **in either direction**. But they are still exposed to **crop failure**, and if the crop fails they are short a contract they cannot fill. Tutorial 10 Q3(b) is built on this exact scenario.

---

## 10.2 Forwards and futures

### Forward contracts

- Performed **privately between two parties**.
- A contract made today, to be performed at a set time in the future, at a set price, for goods of a particular quality delivered to a set location.
- Can be **tailored** to particular requirements — provided a suitable counterparty can be found.

**Potential problems:** finding a suitable counterparty; agreeing a forward price; **counterparty default**.

### Futures contracts

An agreement made today to exchange a specified asset at a specified price at a specified date in the future. **Highly standardised** — set type, quality, size, maturity and delivery — so that they can be exchange traded. Critically, **the exposure of buyers and sellers is to the clearing house, not to each other.**

| Advantages | Disadvantages |
|---|---|
| More **liquid** than forwards | Difficult to exactly match quantity, quality and delivery date |
| Transparent **market prices** | (Still a good hedge — futures and physical returns are highly correlated) |
| Exposure is to the **exchange**, not a counterparty | |

### Margining

The exchange manages its exposure by:

1. Requiring an **initial deposit** — the margin account.
2. Posting daily gains and losses to the margin account — **marking to market**.
3. If the account drops below the **maintenance margin**, the trader receives a **margin call** to deposit additional funds.
4. **If a margin call is ignored, the exchange will close the position.**

### Closing out

- **You cannot let a futures contract lapse. A futures contract is an obligation.**
- **Very few contracts go to delivery** — around 95% are closed out.
- **Closing out** means taking the **opposite** transaction and paying or receiving the difference in buying and selling price in cash. If you originally bought January wheat, you sell January wheat to close out.

Why close out rather than deliver? Because most hedgers want the **price protection**, not the physical logistics. Delivery means matching the contract's exact grade, location and timing, which almost never suits a real business.

### The hedging rule

> **Do in the futures market now what you plan to do in the physical market later.**

| Your position | Futures action | If price falls | If price rises |
|---|---|---|---|
| You will **sell** the physical later (a producer) | **Sell** futures | Gain in futures offsets loss in physical | Loss in futures offset by gain in physical |
| You will **buy** the physical later (a processor) | **Buy** futures | Loss in futures offset by gain in physical | Gain in futures offsets loss in physical |

### Worked example — Lecture 10, the NSW wheat farmer

It is May 2016. A farmer anticipates a crop of **1,000 metric tonnes** in January 2017. Spot wheat is **$260/tonne**; the January 2017 futures contract is quoted at **$272**. Contract size **20 tonnes**.

**Why hedge?** Because they are concerned about wheat prices falling.
**Which contract?** The **January** contract.
**Buy or sell?** **Sell** — do now in futures what you plan to do later in the physical.
**How many?** `1,000/20 = 50 contracts`.

```
Step 1 (May)  — Open: SELL 50 Jan wheat futures at $272
                Value:  50 × 20 × 272 = $272,000
```

**Scenario 1 — price falls to $220/tonne in January**
```
Step 2 — Close out: BUY 50 Jan futures at $220 →  50 × 20 × 220 = $220,000
         Futures profit = 272,000 − 220,000    =  +$52,000

Step 3 — Sell the wheat at auction: 1,000 × 220 =  $220,000

Overall: 220,000 + 52,000 = $272,000  →  $272 per tonne
```

**Scenario 2 — price rises to $320/tonne in January**
```
Step 2 — Close out: BUY 50 Jan futures at $320 →  50 × 20 × 320 = $320,000
         Futures loss   = 272,000 − 320,000    =  −$48,000

Step 3 — Sell the wheat at auction: 1,000 × 320 =  $320,000

Overall: 320,000 − 48,000 = $272,000  →  $272 per tonne
```

**The hedge locked in $272/tonne either way.** That is the point — and it is also the cost. Scenario 2 gave up $48,000 of upside.

### Problems with futures

- **Basis** — the difference between the closing futures price and the physical price. It arises from the standardised nature of the contract (quantity, quality, delivery).
- **Hedging and regretting** — Scenario 2 above.
- **Crop failure is a double problem.** A major drought pushes the physical price **up**, which pushes the futures price **up**, producing a **major loss on the short futures position** — with no crop to sell against it.
- **Derivative disasters** happen: **Metallgesellschaft**, a **$1.3 billion** loss from a poor hedging strategy.

### Worked example — Tutorial 10 Q2 — Flour Inc.

A miller wants to **purchase 3,000 tonnes** of wheat in January. In May, spot wheat is **$250/tonne** and January futures are **$265/tonne**. Standard ASX wheat contract: **20 tonnes**.

**(a) The strategy.** The miller will **buy** wheat later, so **buy** futures now: `3,000/20 = **150 contracts**`, January maturity, at $265/tonne.

**(b) January: spot $330, futures $335.**
```
Close out: SELL 150 Jan futures at $335
Futures profit = (335 − 265) × 3,000 = +$210,000

Buy the wheat physically:  330 × 3,000 = $990,000
Net cost = 990,000 − 210,000           = $780,000
Effective price = 780,000/3,000        = $260/tonne
```
Without the hedge she would have paid $990,000. **The hedge saved $210,000.**

**(c) January: spot $220, futures $225.**
```
Close out: SELL 150 Jan futures at $225
Futures loss = (225 − 265) × 3,000     = −$120,000

Buy the wheat physically:  220 × 3,000 = $660,000
Net cost = 660,000 + 120,000           = $780,000
Effective price = 780,000/3,000        = $260/tonne
```

**Both scenarios give exactly $260/tonne.**

> **$260, not the $265 the futures were quoted at — and the $5 gap is the basis.** Effective price = `F₀ − (F₁ − S₁)`. At close, `F₁ − S₁ = 5` in both cases, so `265 − 5 = 260`. If the basis had been zero at close (futures converging exactly to spot), the effective price would have been the full $265. **Basis risk is the residual risk a futures hedge cannot remove** — and this question is constructed so both scenarios have the same closing basis, which is why they give the same answer. Real hedges are messier.

### Worked example — Tutorial 10 Q3 — the wool grower

It is October. A grower anticipates a **22,000 kg** clip in December. December futures are **915 c/kg**. Standard contract **2,500 kg**.

```
Contracts needed = 22,000/2,500 = 8.8
```
You cannot trade fractions. Rounding to the nearest whole contract gives **9 contracts** (22,500 kg); rounding down gives 8 (20,000 kg) and leaves 2,000 kg unhedged. Both defensible — state your choice. The workings below use **9**, with the 8-contract figures alongside.

**(a) December: the grower shears 24,000 kg, auction price 800 c/kg, December futures 805 c/kg.**

The grower **sold** futures in October, so closes out by **buying** at 805.

```
Futures profit per kg = 915 − 805 = 110 cents = $1.10

9 contracts: 9 × 2,500 × 1.10 = $24,750
8 contracts: 8 × 2,500 × 1.10 = $22,000

Auction proceeds: 24,000 × $8.00 = $192,000

Overall value (9 contracts) = 192,000 + 24,750 = $216,750   →  $9.031/kg
Overall value (8 contracts) = 192,000 + 22,000 = $214,000   →  $8.917/kg
```

The grower shore **24,000 kg** but only hedged 22,500 — the surplus 1,500 kg sold at the unprotected auction price, which is why the average lands below the 915 c/kg locked in.

**(b) Drought: the clip is only 1,000 kg, auction price 1,100 c/kg, December futures 1,100 c/kg.**

```
Futures loss per kg = 915 − 1,100 = −185 cents = −$1.85

9 contracts: 9 × 2,500 × (−1.85) = −$41,625
8 contracts: 8 × 2,500 × (−1.85) = −$37,000

Auction proceeds: 1,000 × $11.00 = $11,000

Overall (9 contracts) = 11,000 − 41,625 = −$30,625
Overall (8 contracts) = 11,000 − 37,000 = −$26,000
```

> **This is the "crop failure is a double problem" slide, in numbers.** The drought pushed prices up 20%, which would have been wonderful — except the grower is short 22,500 kg of futures against a 1,000 kg clip. The hedge that was supposed to protect them has turned a small good year into a **$30,625 loss**. The lesson: a futures hedge is only a hedge to the extent you actually own the underlying. Over-hedging is speculation with extra steps.

### Worked example — Tutorial 10 MCQ 11–15 — sugarcane

It is March. You expect **50,000 kg** of sugarcane in November. November futures are quoted at **$2.50/kg**. Contracts are for **1,000 kg**.

```
Q11  You will SELL cane later, so SELL futures.
     50,000/1,000 = 50 contracts                                     → (b) Sell 50

Q12  In November: spot $2.25, futures $2.26. Close out by BUYING at $2.26.
     Profit = (2.50 − 2.26) × 50 × 1,000 = 0.24 × 50,000 = $12,000    → (c)

Q13  You actually harvest 55,000 kg and sell at auction:
     55,000 × 2.25 = $123,750                                        → (a)

Q14  Net value = 123,750 + 12,000 = $135,750                          → (c)

Q15  Average price = 135,750/55,000 = $2.4682                         → (b) $2.47
```

> **The average price is $2.47, not $2.50, because you under-hedged.** 50,000 kg were protected at $2.50 but 55,000 kg were sold. The extra 5,000 kg went at the spot price of $2.25, dragging the blended price down. The closing basis of $0.01 accounts for the rest. Whenever a question gives a *different* harvest quantity from the hedged quantity, that difference is the whole point.

---

## 10.3 Options

> **An option is the right, but not the obligation, to force a transaction to occur at some time in the future on terms and conditions agreed now.**

The **writer** (seller) sells the option and receives a **premium**. The **buyer** pays the premium and gets the right.

| Term | Meaning |
|---|---|
| **Call** | The right to **buy** an asset at a fixed price during a particular period |
| **Put** | The right to **sell** an asset at a fixed price during a particular period |
| **Exercise price (X)** | The fixed price at which the underlying can be traded |
| **Premium** | The price paid by the buyer to the seller |
| **Expiry** | The last day on which the option can be exercised |
| **American option** | Can be exercised **at any time** until expiry |
| **European option** | Can be exercised **only on** the expiration date |
| **Intrinsic value (IV)** | The **lower bound** of an option's value |
| **Time value (TV)** | The value of an option **in excess of** its intrinsic value |
| **In the money** | Positive payoff if exercised |
| **At the money** | Zero payoff if exercised (`S = X`) |
| **Out of the money** | Negative payoff if exercised |

**Exchange-traded options** are standardised for exchange trading, with a **contract size of 100 shares**. The exchange's exposure is to the **writer** of the option (the writer is the one who can fail to perform).

### When is an option exercised? When it is in the money.

| | In the money | At the money | Out of the money |
|---|---|---|---|
| **Call** | `S > X` | `S = X` | `S < X` |
| **Put** | `S < X` | `S = X` | `S > X` |

- A **call** is exercised when `S > X`, because the option lets you buy the asset for **less than** its current market price.
- A **put** is exercised when `S < X`, because the option lets you sell the asset for **more than** its current market price.

**The writer's payoff is the exact opposite of the buyer's.** Options are a zero-sum transfer between the two parties.

```
                 Call — buyer's payoff              Put — buyer's payoff
   Payoff                    /                Payoff  \
      |                     /                    |     \
      |                    /                     |      \
   0  |____________ ______/________ S         0  |_______\_________________ S
                    X                                    X
   (flat at 0 until X, then rises 1-for-1)   (falls 1-for-1 until X, then flat at 0)
```

The writer's diagrams are these reflected in the horizontal axis.

> **Payoff and profit are different, and exam questions ask for both.** The **payoff** ignores the premium; the **profit** subtracts (buyer) or adds (writer) it. A call buyer with `S = X + 2` has a payoff of $2 and, if the premium was $3, a **loss** of $1. Read the word in the question.

### Worked example — Lecture 10, the BHP call

A **December $34.00 BHP call** trades for **$4.65 per share**. One contract = **100 shares**. No transaction costs; all in-the-money options are exercised.

**BHP at $40.00 at expiry:**

| Call **buyer** | | Call **writer** | |
|---|---|---|---|
| Now: buy Dec call | (465) | Now: sell Dec call | 465 |
| Then: exercise the call | (3,400) | Then: call exercised against | 3,400 |
| Sell shares at $40 | 4,000 | Buy shares at $40 | (4,000) |
| **Payoff** | **600** | **Payoff** | **(600)** |
| **Profit/Loss** | **135** | **Profit/Loss** | **(135)** |

**BHP at $30.00 at expiry:**

| Call **buyer** | | Call **writer** | |
|---|---|---|---|
| Now: buy Dec call | (465) | Now: sell Dec call | 465 |
| Then: do not exercise | 0 | Then: not exercised | 0 |
| **Payoff** | **0** | **Payoff** | **0** |
| **Profit/Loss** | **(465)** | **Profit/Loss** | **465** |

**Why is the premium $4.65 when the share is at $37.20?**

```
Option Premium = Intrinsic Value + Time Value

      4.65 = max(37.20 − 34.00, 0) + TV
      4.65 = 3.20 + TV
        TV = 1.45
```

Intrinsic value is what the option is worth **if exercised today**. Time value is the **discounted weighted probability of ending in the money** — the value of the chance that the price moves further your way before expiry.

### Factors affecting option value

Pricing options analytically (Merton, Black and Scholes, 1973 — Nobel Prize 1997) is a topic for EFB344. But you must know the **directions**:

| Factor | Impact on calls | Impact on puts |
|---|---|---|
| Current share price (S) | **Positive** | Negative |
| Exercise price (X) | Negative | **Positive** |
| Term to expiry (T) | **Positive** | **Positive** |
| Share return volatility (VAR) | **Positive** | **Positive** |
| Risk-free rate (Rf) | **Positive** | Negative |
| Expected dividends (D) | Negative | **Positive** |

> **Volatility and time are positive for BOTH calls and puts — everything else has opposite signs.** That is the one row people get wrong, and the reason is worth understanding: an option's downside is capped at the premium, so more uncertainty can only add value. More time gives more chance for a favourable move, and also more time for uncertainty to work.

The lecture's CBA options data (3 May 2017, CBA at $86.68) confirms the two most-tested rows empirically: as `X ↑`, call prices fall and put prices rise; as `T ↑`, **both** call and put prices rise.

### Worked example — Tutorial 10 Q6 — which is riskier to write?

Assume American options on ABC Ltd.

**(a) Writing a Jan $10.00 call vs a Jan $9.00 call.** The **$9.00 call** is riskier. A lower exercise price means the call is in the money over a wider range of share prices — you are more likely to be exercised against, and for a larger amount at any given `S`.

**(b) Writing a Jan $10.00 put vs a Jan $9.00 put.** The **$10.00 put** is riskier. A higher exercise price means the put is in the money over a wider range — you are more likely to be forced to buy shares above the market price, and by a larger margin.

The general rule: **as a writer, the riskier option is always the one that is more likely to be exercised against you.** For calls that means a low `X`; for puts a high `X`.

### Worked example — Tutorial 10 Q8 — profiting from a fall

**Using a put:** **buy** an at-the-money put. As the share falls below `X`, the put's payoff `X − S` grows one-for-one. Maximum gain: `X` less the premium (if the share goes to zero). Maximum loss: the **premium**.

**Using a call:** **write** an at-the-money call. If the share falls the call expires worthless and you keep the premium. Maximum gain: the **premium**. Maximum loss: **unlimited**, if you are wrong and the share rises.

> **The two strategies have very different risk profiles, and that is the answer the question wants.** Buying the put has limited loss and large upside; writing the call has limited upside and unlimited loss. Both "profit from a fall", but only one is a sensible way to express a view if you might be wrong.

### Worked example — Tutorial 10 Q9 — six positions, contract size 1

```
(a) WRITE a call, X = 40, premium 6. Share goes to 44.
    Call is in the money (44 > 40) → exercised against you.
    Profit = +6 − (44 − 40) = +6 − 4 = +$2

(b) BUY a put, X = 35, premium 4.50. Share goes to 23.
    Put is in the money (23 < 35) → exercise it.
    Profit = (35 − 23) − 4.50 = 12 − 4.50 = +$7.50

(c) WRITE a put, X = 35, premium 4.50. Share goes to 52.
    Put is out of the money (52 > 35) → lapses.
    Profit = +$4.50

(d) WRITE the put in (c) AND buy the stock at 36. Share goes to 52.
    Put lapses.  Profit = 4.50 + (52 − 36) = 4.50 + 16 = +$20.50

(e) Same position as (d), but the share goes to 28.
    Put is in the money → you are forced to buy at 35, and you also hold a share bought at 36.
    Profit = 4.50 − (35 − 28) + (28 − 36) = 4.50 − 7 − 8 = −$10.50

(f) WRITE the call in (a) AND buy the put in (b). Share ends at 38.
    Call (X = 40): out of the money → lapses, keep 6.
    Put  (X = 35): out of the money → lapses, lose 4.50.
    Profit = +6 − 4.50 = +$1.50
```

> **Part (e) has three separate losses and it is easy to double-count or miss one.** The written put costs `35 − 28 = 7` when exercised against you; the share you bought at 36 is now worth 28, a further loss of 8; the premium of 4.50 is the only offset. Write each leg on its own line before adding.

### Worked example — Tutorial 10 Q10 — BHP options, contract size 100

On 7 October, BHP trades at **$33.23**.

| Code | Type | Exercise price | Premium | Expiry |
|---|---|---|---|---|
| BHPCR9 | Call | $34.00 | $0.58/share | 29 Nov |
| BHPCU9 | Put | $33.00 | $0.75/share | 29 Nov |

Both American, contract size **100 securities**.

**(b) You buy the call. The share goes to $38.00.**
```
Call in the money (38 > 34) → exercise.
Payoff per share = 38.00 − 34.00 = 4.00
Profit = (4.00 − 0.58) × 100 = 3.42 × 100 = +$342
```

**(c) You write the put. The share goes to $38.00.**
```
Put out of the money (38 > 33) → lapses.
Profit = 0.75 × 100 = +$75
```

**(d) You write the call, write the put, and buy 100 shares. The share goes to $28.50.**
```
Premiums received:     (0.58 + 0.75) × 100                    =  +$133
Shares bought at 33.23, now worth 28.50: (28.50 − 33.23) × 100 =  −$473
Call (X = 34) out of the money → lapses                        =      0
Put  (X = 33) in the money → exercised against you:
    you must buy at 33 when the share is 28.50: (28.50 − 33) × 100 = −$450
                                                                  --------
Net profit/(loss)                                                  −$790
```

**(e) Mark expects the price to increase dramatically.** **Buy calls.** Maximum gain is **unlimited** (the payoff rises one-for-one with the share above $34.00); maximum loss is the **premium**, $0.58 per share or $58 per contract. Compare this with buying the shares outright: the same $58 buys less than two shares, so the option gives far greater exposure per dollar — which is the speculating use from §10.1.

**(f) A call with `X = $31.00` trading at a premium of $1.00 — is there an arbitrage?**
```
Intrinsic value = max(33.23 − 31.00, 0) = $2.23
Premium         = $1.00
```
**Yes.** The option is trading **below its intrinsic value**, which is impossible in an efficient market.

```
Trade:  BUY the call at 1.00
        EXERCISE immediately, buying the share at 31.00
        SELL the share in the market at 33.23

Riskless profit = 33.23 − 31.00 − 1.00 = $1.23 per share  ($123 per contract)
```

**What effect does this have?** Buying calls pushes the **call premium up**; selling shares pushes the **share price down**. Both movements shrink the gap. Once `premium ≥ intrinsic value` the opportunity is gone. **Arbitrage destroys the mispricing it exploits** — which is why the option premium can never fall below intrinsic value for long, and why intrinsic value is described as the option's **lower bound**.

### Worked example — Lecture 10's arbitrage slide

BHP shares trade at **$37.20**; a **$45.00 December put** trades at **$6.80**.

```
Intrinsic value of the put = max(45.00 − 37.20, 0) = $7.80
Premium                    = $6.80

Trade:  BUY the put at 6.80
        BUY the share at 37.20
        EXERCISE the put, selling at 45.00

Profit = 45.00 − 37.20 − 6.80 = $1.00 per share
```

Same structure as the call arbitrage, reflected.

### Worked example — Tutorial 10 MCQ 16–19 — a combined strategy

**Q16 and Q17.** You **write** a put with `X = 38` for a premium of $3, **write** a call with `X = 40` for a premium of $5, and **buy** a share for $35. Options are exercised if in the money; shares are sold at expiry.

```
Q16 — share price at expiry = 46:
     Premiums received                        = +8
     Share:  46 − 35                          = +11
     Call (X = 40) in the money, exercised:   = −6      (you deliver at 40 when S = 46)
     Put  (X = 38) out of the money, lapses   =  0
                                                ----
     Net                                       = +$13    → (b)

Q17 — share price at expiry = 30:
     Premiums received                        = +8
     Share:  30 − 35                          = −5
     Call out of the money, lapses            =  0
     Put (X = 38) in the money, exercised:    = −8      (you must buy at 38 when S = 30)
                                                ----
     Net                                       = −$5     → (b)
```

**Q18 and Q19.** Now you **buy** both options and the share (paying the premiums).

```
Q18 — share price at expiry = 43:
     Premiums paid                            = −8
     Share:  43 − 35                          = +8
     Call (X = 40) in the money, exercise:    = +3
     Put  (X = 38) out of the money, lapses   =  0
                                                ----
     Net                                       = +$3     → (a)

Q19 — share price at expiry = 32:
     Premiums paid                            = −8
     Share:  32 − 35                          = −3
     Call out of the money, lapses            =  0
     Put (X = 38) in the money, exercise:     = +6
                                                ----
     Net                                       = −$5     → (b)
```

> **The sign of the premium flips with the position, and so does the sign of every exercise line.** Writing collects the premium and pays out on exercise; buying pays the premium and collects on exercise. Set up a four-line table — premium / share / call / put — and fill in each line with its own sign before summing. Doing it in your head is how a +$13 becomes a −$3.

---

## Summary

- A **derivative** derives its value from an underlying security, commodity or event. Four types: **forward, futures, swap, option**.
- Three uses: **hedging** (offsetting an existing exposure), **speculating** (large exposure for a small outlay), **arbitrage** (riskless profit from mispricing).
- **Forwards** are private and tailored, with counterparty default risk. **Futures** are standardised and exchange-traded, with exposure to the clearing house, **initial margin**, **marking to market** and **margin calls**.
- A futures contract is an **obligation** — it cannot lapse. Around 95% are **closed out** by taking the opposite position.
- **Hedging rule:** do in the futures market now what you plan to do in the physical market later. Producers **sell** futures; buyers **buy** futures.
- The hedge locks in a price but leaves **basis risk** (`F − S` at close), and **over-hedging turns a hedge into speculation** — dangerous if the crop fails.
- **Calls** are the right to buy, exercised when `S > X`. **Puts** are the right to sell, exercised when `S < X`. The **writer's payoff is the buyer's payoff reflected**.
- `Option Premium = Intrinsic Value + Time Value`. Intrinsic value is the **lower bound**; a premium below it is an arbitrage.
- Value drivers: `S` (call +, put −), `X` (call −, put +), `T` (**both +**), volatility (**both +**), `Rf` (call +, put −), dividends (call −, put +).
- **Payoff ignores the premium; profit does not.** Contract size is 100 shares for exchange-traded equity options.
- Arbitrage **eliminates** the mispricing it exploits: buying pushes the price up, selling pushes it down.

<details><summary>Checkpoint — seven questions</summary>

1. A grain buyer needs 8,000 tonnes of barley in six months. Contracts are 40 tonnes. Should they buy or sell, and how many contracts?
2. Following Q1, the futures were entered at $310/tonne. At close, spot is $295 and futures $299. What effective price did they pay per tonne?
3. Why can a futures contract not simply be allowed to lapse?
4. A share trades at $22.40. A $20.00 call trades at $2.90. Split the premium into intrinsic and time value.
5. A $24.00 put on the same share trades at $1.20. Is there an arbitrage? If so, describe the trade and the profit.
6. You write a call with `X = 50` for a premium of $4. The share ends at $57. What is your payoff, and what is your profit?
7. State the effect on a **put's** value of an increase in each of: share price, exercise price, term to expiry, volatility.

---

**Answers**

1. They will **buy** the physical later, so **buy** futures. `8,000/40 = **200 contracts**`.

2. `Futures gain = (299 − 310) × 8,000 = −$88,000` — a loss, because they bought futures and the price fell. `Physical cost = 295 × 8,000 = $2,360,000`. `Net cost = 2,360,000 + 88,000 = $2,448,000`. `Effective price = 2,448,000/8,000 = **$306/tonne**`. Check via basis: `F₀ − (F₁ − S₁) = 310 − 4 = $306` ✔.

3. Because a futures contract is an **obligation**, not a right. The only ways out are physical delivery or **closing out** — taking the opposite position and settling the price difference in cash.

4. `IV = max(22.40 − 20.00, 0) = **$2.40**`. `TV = 2.90 − 2.40 = **$0.50**`.

5. `IV of the put = max(24.00 − 22.40, 0) = $1.60`, and the premium is only $1.20 — **yes, an arbitrage**. **Buy** the put at $1.20, **buy** the share at $22.40, **exercise** the put and sell at $24.00. `Profit = 24.00 − 22.40 − 1.20 = **$0.40 per share**` ($40 per 100-share contract). The trade pushes the put premium up and the share price down until the gap closes.

6. The call is in the money (`57 > 50`) so it is exercised against you. **Payoff = −$7** (you deliver at 50 a share worth 57). **Profit = +4 − 7 = −$3.**

7. Share price ↑ → put value **falls**. Exercise price ↑ → put value **rises**. Term to expiry ↑ → put value **rises**. Volatility ↑ → put value **rises**.
</details>
