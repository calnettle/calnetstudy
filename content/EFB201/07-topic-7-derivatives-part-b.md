# Topic 7 — Derivatives Markets (Part B): Options

**Reference:** Kidwell et al. chapter 11; CFA 2020 Level I Reading 48.

Part B is the **contingent claim** half. A forward commitment removes both the
downside and the upside; an option removes only the side you choose to remove,
and you pay a premium for that asymmetry. EFB201 does not price options — no
Black-Scholes, no binomial trees. What it wants is: the vocabulary, the
direction of every payoff, and the ability to compute a net cash flow and a
break-even.

---

## 1. Definitions

> **An option is a derivative contract in which one party, the buyer, pays a
> sum of money to the other party, the seller or writer, and receives the
> right to either buy or sell an underlying asset at a fixed price, either on
> a specific expiration date or at any time prior to it.**

| Term | Meaning |
|---|---|
| **Exercise price** | The fixed price at which the underlying can be transacted. Also: strike price, strike, striking price |
| **Option premium** | The sum the buyer pays the writer |
| **Writer** | The seller of the option |
| **Call** | Gives the holder the right to **buy** the underlying |
| **Put** | Gives the holder the right to **sell** the underlying |

### Who buys what

Back to Jenny (holds a $10.8m S&P-tracking portfolio, wants to sell by March,
fears a decline) and John (wants to buy such a portfolio by March, fears a
rise).

| | Sells the option | Buys the option |
|---|---|---|
| **Call option** — right to **buy** the underlying | Writer | **John** |
| **Put option** — right to **sell** the underlying | Writer | **Jenny** |

> **Match the option to the direction of the fear, not to the direction of the
> position.** Jenny already *owns* the asset, so she fears a fall and buys the
> right to **sell** at a floor — a **put**. John does *not* own it, fears a
> rise, and buys the right to **buy** at a ceiling — a **call**. Say it as: buy
> a put to protect a floor, buy a call to cap a purchase price.

### Moneyness

| | In the money | At the money | Out of the money |
|---|---|---|---|
| **Call** | Underlying **above** strike | Underlying **at** strike | Underlying **below** strike |
| **Put** | Underlying **below** strike | Underlying **at** strike | Underlying **above** strike |

> **Moneyness is defined on the *underlying value versus the strike*, and it
> ignores the premium entirely.** An option can be deep in the money and still
> lose you money once you count what you paid for it. In-the-money means
> *worth exercising*; profitable means *in the money by more than the
> premium*. Two different questions.

---

## 2. The wealth-impact picture

The deck builds three overlays on the same axes (index outcomes from 4,600 to
5,000, profit/loss on the vertical axis).

| Strategy | Jenny's profit/loss | John's profit/loss |
|---|---|---|
| **Do nothing** | Rises with the index — she gains if it rises, loses if it falls | Falls with the index — he loses if it rises, gains if it falls |
| **Forward commitment** | **Flat line at zero.** No gain, no loss, whatever happens | **Flat line at zero** |
| **Contingent claim (option)** | Flat (protected) below $4,800, then rises above it | Flat (protected) above $4,800, then rises below it |

The question the deck poses to motivate options: *"What if Jenny and John only
want to remove the **downside** risk?"* The answer is the hockey-stick shape —
the loss side is truncated and the gain side is kept.

> **The deck warns that these graphs are the mirror image of standard option
> payoff diagrams — read the axis label.** These plot the **wealth impact on
> the hedger's whole position** (portfolio plus option). A textbook option
> payoff diagram plots only the **option's** payoff and profit. Jenny's total
> wealth is flat below the strike and rising above it; her *put's* payoff is
> falling to zero as the index rises. Same trade, opposite-looking picture. If
> a question shows a diagram, check whether the vertical axis is the option or
> the position.

---

## 3. The S&P 500 option example, worked

On 18 January 2022, Jenny and John go to the CBOE quote table. Both buy at the
last price. **The $100 index multiplier is ignored** — figures are per index
point.

| | John buys a **call** | Jenny buys a **put** |
|---|---|---|
| **a** — cash out to pay the premium | −$22.14 | −$139.10 |
| **b** — strike price | $4,800 | $4,800 |

### Case 1 — the index ends at $4,700

```
JOHN'S CALL  (strike 4,800, market 4,700)
  Market BELOW strike  →  OUT OF THE MONEY
  Action: do not exercise; buy from the market at $4,700
  Net cash flow = premium − market price
                = −22.14 − 4,700
                = −$4,722.14

JENNY'S PUT  (strike 4,800, market 4,700)
  Market BELOW strike  →  IN THE MONEY
  Action: exercise; sell to the writer at $4,800
  Net cash flow = −premium + strike
                = −139.10 + 4,800
                = +$4,660.90
```

### Case 2 — the index ends at $4,900

```
JOHN'S CALL  (strike 4,800, market 4,900)
  Market ABOVE strike  →  IN THE MONEY
  Action: exercise; buy from the writer at $4,800
  Net cash flow = premium − strike
                = −22.14 − 4,800
                = −$4,822.14

JENNY'S PUT  (strike 4,800, market 4,900)
  Market ABOVE strike  →  OUT OF THE MONEY
  Action: do not exercise; sell to the market at $4,900
  Net cash flow = −premium + market price
                = −139.10 + 4,900
                = +$4,760.90
```

### What the four numbers mean together

```
JOHN pays:   $4,722.14 if the index is 4,700
             $4,822.14 if the index is 4,900
  → his cost is CAPPED at strike + premium = 4,800 + 22.14 = $4,822.14
  → below the strike he still enjoys the cheaper market price

JENNY receives: $4,660.90 if the index is 4,700
                $4,760.90 if the index is 4,900
  → her proceeds have a FLOOR at strike − premium = 4,800 − 139.10 = $4,660.90
  → above the strike she still enjoys the higher market price
```

That is the asymmetry a forward commitment cannot give you: **downside removed,
upside retained, at the cost of the premium.**

> **Watch the sign convention in the deck's formulas.** The table writes
> John's out-of-the-money case as `d = a − c` where `a` is **already
> negative** (−$22.14) and `c` is the market price. So `d = −22.14 − 4,700`.
> If you read `a` as +22.14 you will get the sign of the whole line wrong.
> Safer: write every cash flow with its own sign and add them. Premium is
> always an **outflow for the buyer** and an **inflow for the writer**.

> **The premium is sunk. It does not enter the exercise decision.** John
> exercises at 4,900 because 4,800 < 4,900, full stop — the $22.14 he already
> paid is irrelevant to whether exercising is better than not. The premium
> only affects whether the *whole trade* was worth doing, which you assess
> before you buy.

### Reading the payoff as a formula

The four numbers above generalise to two lines you can apply to any option
question in this unit. Write every cash flow with its own sign:

```
CALL BUYER, net cash flow at expiry
    = −Premium − min(Spot, Strike)
      (you buy at the strike if it is cheaper, otherwise at the market)

PUT BUYER, net cash flow at expiry
    = −Premium + max(Spot, Strike)
      (you sell at the strike if it is higher, otherwise into the market)
```

Testing them against the deck's four cases:

```
Call, spot 4,700:  −22.14 − min(4,700, 4,800) = −22.14 − 4,700 = −$4,722.14  ✓
Call, spot 4,900:  −22.14 − min(4,900, 4,800) = −22.14 − 4,800 = −$4,822.14  ✓
Put,  spot 4,700:  −139.10 + max(4,700, 4,800) = −139.10 + 4,800 = $4,660.90 ✓
Put,  spot 4,900:  −139.10 + max(4,900, 4,800) = −139.10 + 4,900 = $4,760.90 ✓
```

The `min` and the `max` **are** the exercise decision — you never have to
reason about moneyness separately once you write it this way.

> **The writer's cash flow is the mirror image, plus the premium as an
> inflow.** The writer of John's call receives $22.14 up front and is obliged
> to sell at $4,800 whenever the index exceeds it. Where the buyer's loss is
> capped at the premium, the writer's gain is capped at the premium and their
> loss is not capped at all. Every option question has two sides — check which
> one you are being asked about before you start.

### Strike-price relationships (Derivatives B tutorial Q2)

As the strike price of an option increases:

| | Premium | Why |
|---|---|---|
| **Call** | **Decreases** | A higher strike means the right to buy at a **higher cost** — a less valuable right |
| **Put** | **Increases** | A higher strike means the right to sell at a **higher price** — a more valuable right |

You can read this straight off the Apple options chain (25 January 2022,
AAPL at $163.06, Feb 18 expiry):

| Strike | Call last | Put last |
|---|---|---|
| 155.00 | 9.63 | 5.01 |
| 160.00 | 6.65 | 6.95 |
| 165.00 | 4.00 | 9.55 |
| 167.50 | 3.10 | **11.15** |
| 170.00 | 2.35 | 12.40 |
| 175.00 | 1.30 | 16.77 |

Calls fall monotonically, puts rise monotonically. Note also where they
**cross** — around the $160 strike, just below the $163.06 spot.

> **"Last" is the option premium in the last transaction of that trading day
> — not the strike, not the underlying price.** Derivatives B tutorial Q1 asks
> exactly this. It is the price the *buyer* paid the *writer*.

---

## 4. The Apple put decision — a full break-even

Derivatives Part B tutorial Q3. You hold **100 Apple shares** you want to sell
on 18 February 2022. You predict the price on that day will be **$157**. Are
you interested in the **strike 167.5** option at the last price?

The option that protects a *seller* is the **put**, and its last price is
**$11.15**.

```
WITH the put:
  Sell at the strike                        $167.50
  Less the premium paid                     − $11.15
                                            ─────────
  Net proceeds per share                    $156.35

WITHOUT the put:
  Sell in the market at your forecast       $157.00

Difference = 156.35 − 157.00 = −$0.65 per share
           = −$65 across 100 shares
```

**Not interested.** The tutorial states it as `167.5 − 157 − 11.15 < 0`, which
is the same comparison written as a single line: the put's gross benefit
(`strike − forecast price` = $10.50) is less than its cost ($11.15).

### The two break-evens

The tutorial then asks what would change the answer, and gives both.

```
BREAK-EVEN MARKET PRICE (holding the premium at $11.15)
   167.5 − P − 11.15 = 0
   P = 167.5 − 11.15 = $156.35
   → interesting if you predict the price at $156.35 or LOWER

BREAK-EVEN PREMIUM (holding the forecast at $157)
   167.5 − 157 − premium = 0
   premium = $10.50
   → interesting if the premium is $10.50 or LOWER
```

> **The break-even on a protective put is `strike − premium`, and it is a
> *floor on proceeds*, not a floor on the share price.** $156.35 is what you
> net if you exercise. Any forecast above that and you would rather just sell
> in the market. Any forecast below it and the put pays for itself. Compute
> the floor first, then compare it to the forecast — do not try to reason
> about it verbally.

> **A protective put is not free insurance and the question is testing whether
> you know that.** The put with strike $167.50 is deeply in the money already
> (spot is $163.06), so almost all of its $11.15 premium is intrinsic value —
> you are pre-paying for the $4.44 you are already owed plus $6.71 of time
> value. Buying deep-in-the-money protection is expensive; buying
> out-of-the-money protection is cheap but the floor is lower. Naming that
> trade-off earns marks on a written version of the question.

<details><summary>Checkpoint — options</summary>

1. A call has strike $50 and premium $3. The underlying ends at $56. Is it in
   the money? What is the buyer's net cost of acquiring the share, and their
   profit versus buying at market?
2. A put has strike $80 and premium $6. At what underlying price does the
   put buyer break even? What is their maximum loss?
3. You write (sell) a call with strike $40 for a premium of $2. The underlying
   ends at $47. What is your outcome?

**Answers**

1. **In the money** ($56 > $50). Net cost `= 50 + 3 = **$53**`. Versus buying
   at the market for $56, the call saved **$3 per share**.
2. `Break-even = strike − premium = 80 − 6 = **$74**`. Below $74 the put buyer
   profits. **Maximum loss is the premium, $6** — reached whenever the
   underlying finishes at or above $80 and the put expires worthless.
3. You keep the **$2 premium** but must deliver a share worth $47 for $40, a
   loss of $7. **Net −$5 per share.** Writing a naked call has unlimited
   downside — this is the position the GameStop call writers were in.

</details>

---

## 5. How options fuelled the GameStop squeeze

Flagged in the deck as **not on the exam**, but it is the cleanest available
illustration of why option writers hedge, so it is worth two minutes.

From the Financial Times video the deck quotes: *"Retail investors had access
to the options market, which hasn't previously really been open to them. And
that's a way to really soup up your bets."*

To bet on a price increase an investor can:

1. **Buy shares now and sell later** — costs the full share price.
2. **Buy call options**, exercise if the price exceeds the strike, and
   immediately sell the shares.

Method 2 is **cheaper** — you pay only the premium, a fraction of the share
price — which is why demand for calls exploded.

**Call option writers then have to hedge.** In response to the demand, writers
bought stock to cover their exposure, which **pushed the stock price up**, which
**fuelled the short squeeze**.

### Why writers hedge — the deck's numbers

Day 1: stock at $49. Write a call, strike $50, 15 days, premium $10 — collect
$10. Day 15: stock at $120, and the buyer exercises the right to buy at $50.

| | No hedge | Hedge |
|---|---|---|
| **Day 1** | Gain $10 from selling the call | Gain $10 from selling the call; **pay $49 to buy a share** |
| **Day 15** | **Buy the share at $120** to deliver, and receive $50 → lose $70 | Deliver the share already held and receive $50 → **gain $1** on the share |
| **Total** | **−$60** | **−$38** |

Verifying the arithmetic:

```
No hedge:  +10 (premium) − 120 (buy) + 50 (sell to buyer) = −$60   ✓
Hedge:     +10 (premium) −  49 (buy) + 50 (sell to buyer) = +$11
```

> **The deck's "Hedge = lose $38" does not reconcile with its own rows.** Its
> Day 1 line is `+$10 − $49 = −$39` and its Day 15 line is `+$1`, giving
> `−$38`. But the "$1 gain" on Day 15 already nets the $49 purchase against
> the $50 sale — so the $49 is being **counted twice**. Adding the three actual
> cash flows (`+10 − 49 + 50`) gives a **profit of $11**, not a loss of $38.
> The **relative** point survives either way: hedging is $71 better than not
> hedging (or $22 better, on the deck's own figures). Since this slide is
> flagged not-on-exam, do not memorise the totals — memorise that **writers
> buy the underlying to cover, and that buying is what pushes the price up.**

---

## 6. Benefits and criticisms of derivatives

The likely essay-style question in this topic. Learn three benefits and one
criticism.

### Benefits

| Benefit | Detail |
|---|---|
| **Hedge** | Facilitate the **transfer of risk** from those who do not want it to those who will bear it |
| **Investment flexibility** | Enable **strategies and payoffs not otherwise possible** with spot assets — the truncated-downside shape above cannot be built from shares alone |
| **Market efficiency** | Provide information about the spot market; offer **lower transaction costs**; **reduce the capital required**; are **easier than the underlying to go short**; and thereby **improve the efficiency of spot markets** |

### Criticism

**Destabilisation of the market** — derivatives are criticised as a form of
**legalised gambling** and for **leading to speculation**.

> **The deck's own verdict, and a good closing line for a written answer:
> "derivatives are primarily for hedging (shifting risk), not for profit
> speculation."** It makes the point with hindsight: the S&P 500 declined
> sharply after January 2022, so unhedged Jenny would have taken a big loss
> selling at spot on 31 March and unhedged John would have saved a lot. Neither
> outcome was knowable in January — which is exactly why they hedged rather
> than bet.

Notice how the "market efficiency" benefit connects back to Topic 5. Three of
the four impediments to efficiency are directly addressed by derivatives:
**transaction costs** fall, **limits to arbitrage** loosen (shorting via
derivatives is easier than borrowing shares), and **information costs** fall
because derivative prices reveal information about the spot market. That link
is worth making explicitly if the question invites it.

---

## Summary

- An option gives the **buyer a right** and the **writer an obligation**, in
  exchange for a **premium**. Calls buy; puts sell.
- **Buy a put to floor your selling price. Buy a call to cap your buying
  price.** Match the option to the direction you fear.
- **Moneyness ignores the premium.** Call in the money when spot > strike; put
  in the money when spot < strike.
- Net cash flow for a buyer: **exercise if it beats the market**, otherwise
  transact at market — and subtract the premium in both cases.
- **Call buyer's cost ceiling = strike + premium. Put buyer's proceeds floor =
  strike − premium.** Those two lines answer most numerical questions.
- Higher strike ⇒ **cheaper call, dearer put**.
- Break-even on a protective put: `strike − premium`. Worked case:
  `167.5 − 11.15 = $156.35`, which is below the $157 forecast, so **do not
  buy**.
- Maximum loss for an option **buyer** is the premium. Maximum loss for a
  naked **writer** is unlimited (call) or strike-minus-premium (put).
- Benefits: **hedging, investment flexibility, market efficiency.** Criticism:
  **destabilisation / legalised gambling.**
- Derivative wealth-impact graphs in this deck are drawn from the **hedger's
  whole position**, not the option's payoff — read the axis.
