# TOPIC 8 — Derivative Use in Investments

<!-- notation:start -->
<details class="notation"><summary>Notation key — what the symbols in this note mean</summary>

| Symbol | Means |
|---|---|
| `P₀, P₁` | Price — P₀ at the start of the period, P₁ at the end |
| `n` | Number of items — observations, periods or assets, depending on the formula |
| `N` | Number of shares bought, or sold short |
| `β (beta)` | Beta — how sensitive an asset is to market moves; its systematic risk. β = 1 moves with the market |
| `S_T` | Share price at expiry (time T) |
| `X` | Strike (exercise) price of the option |

[Full EFB335 notation key →](#/EFB335/99-notation-key)

</details>
<!-- notation:end -->

*(Reilly & Brown, Chapter 16.4)*

Topics 1–7 built and priced portfolios of real assets: shares, bonds, the market portfolio. Topic 8 adds the tools a manager uses to **reshape the payoff of a portfolio already held**, or one not yet bought, without trading the shares themselves. The tools are forwards, futures, calls and puts. The deck covers what each contract pays at expiry, what drives option values, then eight portfolio uses (futures hedge, protective put, collar, covered call, calls and short puts while building a position) and the volatility and direction trades (straddles, strips, straps, strangles, spreads, butterflies, range forwards). Every strategy is just the two payoff lines from the official formula sheet added together. Master those two lines and the rest of the topic is bookkeeping.

New to this topic? Start with the [plain-English note](#/EFB335/26-plain-english-topic-8-derivatives).

Every number below was recomputed in Python, including all ten of the deck's strategy tables. The check found one error in the deck (the short-strangle formulas on slide 44) and two labelling problems (the butterfly slides). Each one is flagged where it comes up.

---

## 8.1 Forwards and futures (slides 4–5)

| | **Futures** | **Forwards** |
|---|---|---|
| Contract terms | **Standardised** | **Customised** |
| Where traded | **Exchange-traded** (e.g. ASX SPI 200) | **Over-the-counter** (private) |
| Obligation | **Must be settled.** Both sides are bound | **Must be settled.** Both sides are bound |

**Basic types:** long-term interest-rate futures, short-term interest-rate futures, stock-index futures, currency forwards and futures. **Uses:** hedging, speculating, arbitrage. (The deck points to asx.com.au for listed Australian examples.)

### Futures payoff

```
Long futures profit  = P_T − F_0        (agreed to BUY at F_0)
Short futures profit = F_0 − P_T        (agreed to SELL at F_0)

  F_0  futures price agreed today
  P_T  price of the underlying at expiry
```

Both lines are straight. There is no kink and no premium, because nobody holds a right they can walk away from.

**Worked example** (using the slide-16 numbers in §8.6): sell one SPI futures contract at F_0 = 8,109 index points.

```
Index at expiry 7,950:  short profit = 8,109 − 7,950 = +159 points
Index at expiry 8,325:  short profit = 8,109 − 8,325 = −216 points
(The long side has exactly the opposite: −159 and +216.)
```

> **Futures have no premium and no floor.** A short futures position loses without limit as the index rises. That is the price of locking in a value, and it is the opposite of an option, where the holder's worst case is the premium. "Futures vs forwards" is the first blank on the deck's Checkpoint 1: **standardised and exchange-traded** vs **customised and over-the-counter**.

## 8.2 Options terminology (slide 6)

| Term | Means | Term | Means |
|---|---|---|---|
| Strike / exercise price (X or K) | Price at which the holder can exercise | Premium | Fee the holder pays the writer |
| Long call / long put | **Buying** a call / put | Option holder | Buyer (has the **right**) |
| Short call / short put | **Selling (writing)** a call / put | Option writer | Seller (has the **obligation**, earns the premium) |
| Covered call | Long shares + sell call (earn premium) | Bullish / bearish | Expect the price to rise / fall |
| Protective put | Long shares + buy put (protect downside) | Collar | Buy OTM put + sell OTM call, same share, same expiry |
| Protected call | Short shares + buy call (cap the buying price) | Straddle | Call + put, **same** strike and expiry (long or short) |
| Covered put | Short shares + sell put (earn premium) | Strangle | Call + put, **different** strikes, same expiry |
| ITM | Option has value (price favourable vs strike) | Strip | 1 call + 2 puts |
| ATM | Strike = stock price | Strap | 2 calls + 1 put |
| OTM | Option has no exercise value | Spread | Buy a call and sell a call (bullish / bearish) |
| | | Range forward | Similar to a zero-cost collar |

> **Slide 6 says a covered call means you "expect the market to rise". Slide 23 says it adds value "when prices are flat".** The strategy's payoff (§8.9) caps your gain at the strike, so the view that fits is **flat to mildly rising: you expect the price not to go above X**. Checkpoint 1 Q4 tests exactly this. Use the slide 23 reading and check with your tutor.

## 8.3 Call options (slides 7–10)

A **call** gives the holder the **right to buy** 100 shares (the minimum ASX options parcel) at the exercise price. To exercise, the holder pays X to the writer.

```
Payoff to call holder at expiration = S_T − X   if S_T > X
                                    = 0         if S_T ≤ X
                                    = max(S_T − X, 0)

Profit to call holder = max(S_T − X, 0) − premium
Profit to call writer = premium − max(S_T − X, 0)
Holder's break-even   = X + premium
```

**Worked example (slides 8–9):** long call, X = $80, premium (cost of option) $14.

```
S_T          $60    $70    $80    $90    $100
Payoff        0      0      0     10     20      max(S_T − 80, 0)
Holder profit −14   −14    −14    −4     +6      payoff − 14
Writer profit +14   +14    +14    +4     −6      14 − payoff

Break-even = 80 + 14 = $94     (slide 9 marks $94 on the writer's chart)
```

The holder's loss is capped at $14 and their gain is unlimited. The writer is the mirror image: the most they can make is $14, and their loss is unlimited.

> **The deck's slide 9 table shows the option value as +$10 and +$20 for the writer.** Those are the holder's values. To the writer the payoff is **−$10 and −$20**, as the slide's own chart shows. Writer lines always sit below the axis on the right.

### Determinants of call value (slide 10)

| Ceteris paribus, if this is greater… | …the call is worth |
|---|---|
| Stock price S | **More** |
| Exercise price X | Less |
| Volatility σ | **More** |
| Time to expiration T | **More** |
| Interest rate r | **More** |
| Dividend payout | Less |

The interest-rate row is the one people get wrong. The deck's reasoning: buying a call is an alternative to buying the stock on margin. At higher rates margin costs more, so the call, which needs far less funding, is worth more.

The deck also shows the **Black–Scholes** European call formula:

```
C_0 = S_0·e^(−δT)·N(d_1) − X·e^(−rT)·N(d_2)
```

> **Black–Scholes is shown, not worked.** The deck never defines d_1 or d_2, never works a numerical example, and the formula is not on the official exam sheet. Know which inputs move the price which way (the table above). Don't expect to compute a price. Confirm with your tutor if unsure.

## 8.4 Put options (slides 11–13)

A **put** gives the holder the **right to sell** 100 shares at the exercise price. On exercise, the holder receives X from the writer.

```
Payoff to put holder at expiration = 0         if S_T ≥ X
                                   = X − S_T   if S_T < X
                                   = max(X − S_T, 0)

Profit to put holder = max(X − S_T, 0) − premium
Holder's break-even  = X − premium
Maximum payoff       = X  (if S_T = 0)
```

**Slide 12** draws a long put with X = $80. Its payoff rises to **$80** as the share price falls to zero, and the profit line sits below it by the price of the put. The slide does not state the premium, so there is no profit number to compute.

### Determinants: calls vs puts (slides 10 and 13)

| If this is greater… | Call value | Put value |
|---|---|---|
| Stock price S | ↑ | ↓ |
| Exercise price X | ↓ | ↑ |
| Volatility σ | ↑ | ↑ |
| Time to expiration T | ↑ | ↑ |
| Interest rate r | ↑ | ↓ |
| Dividend payout | ↓ | ↑ |

```
Black–Scholes European put (slide 13):
P_0 = X·e^(−rT)·[1 − N(d_2)] − S_0·e^(−δT)·[1 − N(d_1)]
```

> **Volatility and time raise both calls and puts.** The holder's loss is capped at the premium while the upside widens, so more uncertainty can only help them. Every other row flips between call and put. Checkpoint 1 Q2 ("as the stock price **and** interest rates rise, the value of a ___ option rises") needs a row where both S and r push the same way, and only the **call** has that.

> **Exam link.** The official formula sheet gives **only the two payoff lines** above, the call and the put, with no premium in them ([formula sheet: Options](#/EFB335/17-official-exam-formula-sheet)). Profit, break-evens, futures profit, the hedge ratio and **every combined strategy** in §8.6–8.15 must be built from memory.

## 8.5 How the deck's strategy tables work

From slide 16 onward every example uses one ASX snapshot (April 2025): the **S&P/ASX 200 at 8,131.30**, May-25 SPI 200 futures and European XJO index options. Each table runs the index from 7,950 to 8,325 in steps of 25. The prices the slides use:

| Instrument | Strike | Price used | Bought or sold | Slides |
|---|---|---|---|---|
| SPI 200 futures (May-25) | — | 8,109 | Sold | 16 |
| Put | 8,125 | $42 | Bought (offer) | 19, 36 |
| Put | 8,125 | $36 | Sold (bid) | 38 |
| Put | 8,075 | $20 | Sold (bid) | 32, 44 |
| Put | 8,075 | $20 | **Bought** | 42 |
| Call | 8,125 | $50 | Bought (offer) | 36 |
| Call | 8,125 | $44 | Sold (bid) | 38 |
| Call | 8,200 | $19 | Bought (offer) | 29, 42 |
| Call | 8,200 | $14 | Sold (bid) | 44 |

You **buy at the offer and sell at the bid**, which is why a long straddle costs $92 but a short straddle at the same strike only collects $80 (§8.12).

> **The deck uses "payoff" differently from the formula sheet.** In the deck, "option value" = `max(S−X,0)` or `max(X−S,0)`, and **"Payoff" = value with the premium deducted (holder) or added (writer)**. Summary slide 54 says this explicitly. The formula sheet and textbook call `max(S−X,0)` the *payoff* and the net figure the *profit*. For the portfolio strategies (§8.6–8.11), the deck's "Payoff" column is the **net position value** of shares + options + premium. In the exam, label your columns ("option payoff", "net premium", "profit / net position") and the terminology clash can't cost you.

## 8.6 Hedging a portfolio with futures (slides 14–16)

**Purpose:** lock in the current value of a portfolio. **Method:** hold the shares, **sell** futures on the closest index, and work out how many contracts you need.

```
n = (Portfolio value × β) / (Index level × $ per index point)

  SPI 200 futures: $25 per index point
```

> **Where the 40 comes from.** Slide 16 shows "Number of contracts to sell: **40**" with no working. The workbook behind the slide (`Topic 8 Derivative Strategies.xls`, Futures Hedge sheet) computes it with the formula above: portfolio $8,131,300, β = 1, $25 per point.

**Worked example (slide 16):**

```
n = (8,131,300 × 1.0) / (8,131.30 × 25) = 8,131,300 / 203,282.5 = 40.0  →  40 contracts
(using the futures price 8,109 instead: 8,131,300 / (8,109 × 25) = 40.11 → still 40)

Hedge size check: 40 contracts × $25 = $1,000 per index point
                  portfolio $8,131,300 / 8,131.30 = $1,000 per index point   ✓ matched

Initial position = futures price − current index = 8,109 − 8,131.30 = −22.30 points
                 (−$22 on the slide;  × $1,000 per point = −$22,300)
```

Per index point (the slide's table, with $1 = 1 point):

| Index at expiry | Short futures (8,109 − S) | Portfolio value | **Total** |
|---|---|---|---|
| 7,950 | +159 | 7,950 | **8,109** |
| 8,000 | +109 | 8,000 | **8,109** |
| 8,100 | +9 | 8,100 | **8,109** |
| 8,125 | −16 | 8,125 | **8,109** |
| 8,200 | −91 | 8,200 | **8,109** |
| 8,325 | −216 | 8,325 | **8,109** |

Whatever the index does, shares + short futures = **8,109**, or $8,109,000 in dollars. Slide 15 draws it: the long portfolio (up-sloping) plus the short futures (down-sloping) sum to a **flat** line.

> **A futures hedge locks in the futures price, not today's index.** The value is fixed at 8,109, which is 22.30 points *below* the current 8,131.30 because the May futures were trading below spot. And the hedge gives away all the upside: at 8,325 the shares gain but the futures lose 216 points. To keep the upside you need options (§8.7).

> **Exam link.** [Sample Q5](#/EFB335/18-sample-final-exam/question-5-futures-for-cash-equitisation-topic-8-4-marks) is the **mirror image** of this slide. A fund waiting to invest cash **buys** index futures (cash equitisation) instead of selling them, so it gains the market's return before the shares are bought. Same contract, opposite side, same `n` formula. The formula is not on the sheet.

## 8.7 Protective put (slides 17–19)

**Purpose:** offset stock losses but **keep the gains** when prices rise. Buying a put to hedge a holding's downside is a **protective put**, or portfolio insurance. Two ways to build it:

1. Hold the shares and **buy a put** (portfolio insurance), **or**
2. Sell the shares and buy **a T-bill plus a call**.

```
Position value = S_T + max(K − S_T, 0) − put premium
  S_T ≤ K:  = K − premium        (the FLOOR)
  S_T > K:  = S_T − premium      (upside kept, less the premium)
```

**Worked example (slide 19):** buy the 8,125 put for $42 (initial cash flow −$42).

```
Floor = 8,125 − 42 = 8,083
```

| Index at expiry | Put value | Portfolio | **Net position** |
|---|---|---|---|
| 7,950 | 175 | 7,950 | **8,083** |
| 8,000 | 125 | 8,000 | **8,083** |
| 8,100 | 25 | 8,100 | **8,083** |
| 8,125 | 0 | 8,125 | **8,083** |
| 8,150 | 0 | 8,150 | **8,108** |
| 8,200 | 0 | 8,200 | **8,158** |
| 8,325 | 0 | 8,325 | **8,283** |

At or below 8,125 the put is in the money and tops the position up to 8,083. Above 8,125 it expires worthless and the value comes from selling the shares in the market, always $42 behind an unhedged holding.

```
Maximum fall from today = 8,131.30 − 8,083 = 48.30 points
                        = 48.30 / 8,131.30 = 0.59% of today's index level
```

> **The floor is K − premium, not K.** The premium is paid whatever happens, so it comes off both the floor and the upside. Compared with the futures hedge, the put costs $42 up front but leaves the upside open. The futures hedge costs nothing up front but locks the value both ways.

## 8.8 Collar: paying for the protective put (slides 20–22)

A **collar** is the simultaneous **purchase of an out-of-the-money put** and **sale of an out-of-the-money call** on the same underlying, with the same expiry. The premium from the call pays for the put. Avoiding the upfront cost is the **only reason** to use a collar instead of a protective put, and the price is **giving up the gains above the call strike**.

```
Position value = S_T + max(K_put − S_T, 0) − max(S_T − K_call, 0) + (call premium − put premium)
  S_T ≤ K_put:            = K_put        (floor)
  K_put < S_T < K_call:   = S_T
  S_T ≥ K_call:           = K_call       (cap)
  (when the two premiums are equal)
```

**Worked example (slides 20–22):** buy the $97 put for $0.56, sell the $108 call for $0.56. Net option expense = 0.56 − 0.56 = **0**.

| S_T | Put value | Call value (short) | **Net collar position** |
|---|---|---|---|
| 60 | 97 − 60 = 37 | 0 | 60 + 37 = **97** |
| 70 | 27 | 0 | **97** |
| 80 | 17 | 0 | **97** |
| 90 | 7 | 0 | **97** |
| 97 | 0 | 0 | **97** |
| 100 | 0 | 0 | **100** |
| 108 | 0 | 0 | **108** |
| 110 | 0 | −(110 − 108) = −2 | **108** |
| 120 | 0 | −12 | **108** |
| 140 | 0 | −32 | **108** |

**Minimum portfolio value $97, maximum $108.** Slide 21 draws it as a flat floor at 97, the stock's 45° line between 97 and 108, and a flat cap at 108.

> **"A costless collar may be achieved by buying ___ and selling ___"** (Checkpoint 1 Q3): **buying an out-of-the-money put and selling an out-of-the-money call.** Get the order wrong (buy the call, sell the put) and you have built the opposite position, a long range forward (§8.15).

## 8.9 Covered call (slides 23–25)

**Buy the stock and write a call on it.** The premium adds value when prices are flat. In exchange, gains above the strike go to the call holder.

```
Terminal net profit (slide 23):
  S_T ≤ X:  S_T − (S_0 − C_0)
  S_T > X:  X − (S_0 − C_0)

  (S_0 − C_0) = net cost of setting up the strategy: stock price paid less call premium received
```

> **Slide 23 writes the cost term as "(S_0 – C_0, T)".** The ", T" is just the textbook's subscript for a call with maturity T. It means S_0 − C_0. Also, the slide splits the cases at S_T < X and S_T > X; at S_T = X both lines give the same answer.

**Worked example (Exhibit 16.15, slide 25):** X = $40, call premium $5.24. Exhibit 16.16 (slide 24) shows the long-stock line crossing zero at $40, so the stock was bought at **S_0 = $40** (an at-the-money call).

| S_T | Short call value | Premium | **Net position value** | **Profit** (less S_0 = 40) |
|---|---|---|---|---|
| 20 | 0 | 5.24 | 20 + 5.24 = **25.24** | −14.76 |
| 25 | 0 | 5.24 | **30.24** | −9.76 |
| 30 | 0 | 5.24 | **35.24** | −4.76 |
| 35 | 0 | 5.24 | **40.24** | +0.24 |
| 40 | 0 | 5.24 | **45.24** | +5.24 |
| 45 | −(45 − 40) = −5 | 5.24 | **45.24** | +5.24 |
| 50 | −10 | 5.24 | **45.24** | +5.24 |
| 60 | −20 | 5.24 | **45.24** | +5.24 |

```
Net cost / break-even = S_0 − C_0 = 40 − 5.24 = $34.76
Maximum profit        = X − (S_0 − C_0) = 40 − 34.76 = $5.24   (S_T ≥ 40)
Maximum position value = X + premium = 40 + 5.24 = $45.24
```

> **Exhibit 16.15 tabulates position *value* (stock + premium). Exhibit 16.16 graphs *profit* (value − S_0).** Both are on the slides and they differ by exactly $40. State which one you are giving. Selling a call (Checkpoint 1 Q4) means the writer believes the price is **not going to rise above the strike**, so it stays flat or falls. Otherwise they would just hold the stock.

## 8.10 Calls to gain exposure while building a portfolio (slides 27–29)

**Purpose:** a manager who must buy shares later (a "short portfolio position", meaning they are exposed to prices rising) buys a call to **cap the purchase price** while the positions are established. This is the "protected call" from slide 6.

```
Cost of buying the shares = −S_T − premium + max(S_T − K, 0)
  S_T ≤ K:  −(S_T + premium)    buy cheaply in the market
  S_T > K:  −(K + premium)      maximum cost, using the option
```

**Worked example (slide 29):** buy the 8,200 call for $19.

| Index at expiry | Call value | Portfolio (to buy) | **Net cost** |
|---|---|---|---|
| 7,950 | 0 | −7,950 | **−7,969** |
| 8,100 | 0 | −8,100 | **−8,119** |
| 8,175 | 0 | −8,175 | **−8,194** |
| 8,200 | 0 | −8,200 | **−8,219** |
| 8,250 | 50 | −8,250 | **−8,219** |
| 8,325 | 125 | −8,325 | **−8,219** |

**Maximum cost = 8,200 + 19 = 8,219.** Below the strike the manager buys in the market and pays S_T + 19, so the premium is wasted but the shares are cheaper.

> **Exam link.** [Sample Q5](#/EFB335/18-sample-final-exam/question-5-futures-for-cash-equitisation-topic-8-4-marks) asks the same question ("gain market exposure while waiting to buy shares") and answers it with **long index futures**. The call is the option-based alternative. Like the protective put, it costs a premium, but it keeps the benefit if the market falls, whereas long futures lock in the price both ways. Knowing both answers lets you write a stronger compare-and-contrast.

## 8.11 Selling puts while waiting to buy: the "covered put" (slides 30–32)

**Purpose:** earn something while you wait to buy. **Sell a put** at the price you'd be happy to pay and collect the premium. If the market falls, you are assigned and buy at the strike, which you wanted to do anyway.

```
Cost of buying the shares = −S_T + premium − max(K − S_T, 0)
  S_T ≤ K:  −(K − premium)      forced to buy at K, less the premium kept
  S_T > K:  −(S_T − premium)    buy in the market, premium reduces the cost
```

**Worked example (slide 32):** sell the 8,075 put for $20 (initial cash flow +$20).

| Index at expiry | Short put | Portfolio (to buy) | **Net cost** |
|---|---|---|---|
| 7,950 | −125 | −7,950 | **−8,055** |
| 8,050 | −25 | −8,050 | **−8,055** |
| 8,075 | 0 | −8,075 | **−8,055** |
| 8,100 | 0 | −8,100 | **−8,080** |
| 8,200 | 0 | −8,200 | **−8,180** |
| 8,325 | 0 | −8,325 | **−8,305** |

```
Effective purchase price if the index falls = 8,075 − 20 = 8,055
```

> **Compare §8.10 and §8.11 carefully. They protect against opposite things.** The long call **caps** your purchase cost (max 8,219) but costs a premium. The short put **earns** a premium and gives a lower effective price on a fall (8,055), but **leaves your cost uncapped on a rise**: at 8,325 you pay 8,305. Use the call if you fear a rally, and sell the put if you expect a flat or falling market.

## 8.12 Straddles, strips and straps (slides 34–39)

These combine calls and puts on the **same underlying, same exercise price and same expiry** (slide 34):

| Strategy | Buy / sell | Built from | Use |
|---|---|---|---|
| Long straddle | Buy | 1 call + 1 put | Expect a **large move, direction uncertain** |
| Short straddle | Sell | 1 call + 1 put | Expect **minimal movement** |
| Long strip | Buy | 1 call + **2 puts** | Expect volatility, **more downside** (bearish) |
| Long strap | Buy | **2 calls** + 1 put | Expect volatility, **more upside** (bullish) |

### Long straddle (slides 35–36)

```
Profit = max(S_T − K, 0) + max(K − S_T, 0) − (call premium + put premium)
Break-evens = K ± total premium
```

**Worked example (slide 36):** buy the 8,125 call for $50 and the 8,125 put for $42, total cost **$92**.

| Index at expiry | Call | Put | **Profit** |
|---|---|---|---|
| 7,950 | 0 | 175 | **+83** |
| 8,000 | 0 | 125 | **+33** |
| 8,025 | 0 | 100 | **+8** |
| 8,050 | 0 | 75 | **−17** |
| 8,125 | 0 | 0 | **−92** (worst case) |
| 8,225 | 100 | 0 | **+8** |
| 8,325 | 200 | 0 | **+108** |

```
S_T < 8,125:  8,125 − S_T − 92 = 8,033 − S_T
S_T > 8,125:  S_T − 8,125 − 92 = S_T − 8,217
Break-evens:  8,125 − 92 = 8,033   and   8,125 + 92 = 8,217
```

The position is profitable only when the option value exceeds the $92 paid: a **high-volatility** bet.

### Short straddle (slides 37–38)

**Worked example (slide 38):** sell the 8,125 call for $44 and the 8,125 put for $36, receiving **$80**.

| Index at expiry | Call (short) | Put (short) | **Profit** |
|---|---|---|---|
| 7,950 | 0 | −175 | **−95** |
| 8,050 | 0 | −75 | **+5** |
| 8,125 | 0 | 0 | **+80** (best case) |
| 8,200 | −75 | 0 | **+5** |
| 8,325 | −200 | 0 | **−120** |

```
S_T < 8,125:  −(8,045 − S_T)
S_T > 8,125:  −(S_T − 8,205)
Break-evens:  8,125 − 80 = 8,045   and   8,125 + 80 = 8,205
```

It is profitable within a tight range, and losses grow without limit once the index moves too far for the premium to cover. This is a **low-volatility** bet.

> **The long and short straddles are not mirror images here.** The buyer pays $92 (both offers) and the writer receives $80 (both bids). The $12 gap is the bid–offer spread, a real trading cost the textbook diagrams ignore. Each side's break-evens come from its own premium.

### Strips and straps (slide 39)

The deck gives only the shapes. A **strip** (2 puts + 1 call) has a steeper left arm and is **bearish**. A **strap** (2 calls + 1 put) has a steeper right arm and is **bullish**. Both lose the most at K.

*Illustration using the slide-36 prices (8,125 call $50, 8,125 put $42). This is not a deck example:*

```
Strip cost = 50 + 2(42) = 134     Strap cost = 2(50) + 42 = 142

Strip break-evens:  down  2(8,125 − S) = 134  →  S = 8,058
                    up    S − 8,125 = 134      →  S = 8,259
Strap break-evens:  down  8,125 − S = 142      →  S = 7,983
                    up    2(S − 8,125) = 142   →  S = 8,196

                 Index 7,950   Index 8,125   Index 8,325
Strip profit        +216          −134           +66
Strap profit         +33          −142          +258
```

> **The double leg doubles the slope, so the break-even on that side is only half the premium away from K.** A strip reaches profit on the downside after a 67-point fall (8,125 → 8,058), but on the upside needs a 134-point rise (→ 8,259). "Two calls and a put" = **strap** = bullish run (Checkpoint 2 Q2).

## 8.13 Strangles (slides 40–44)

A **strangle** combines a call and a put with the **same expiry but different strikes**, and both options are **out of the money**. Buying two OTM contracts **reduces the straddle's initial cost**, so the strangle has a more modest risk–reward structure: cheaper, but it needs a bigger move to pay off.

```
Long strangle profit = max(S_T − K_call, 0) + max(K_put − S_T, 0) − total premium
Break-evens = K_put − total premium   and   K_call + total premium
```

### Long strangle (slides 41–42)

**Worked example (slide 42):** buy the 8,075 put for $20 and the 8,200 call for $19, total cost **$39**.

| Index at expiry | Call | Put | **Profit** |
|---|---|---|---|
| 7,950 | 0 | 125 | **+86** |
| 8,025 | 0 | 50 | **+11** |
| 8,050 | 0 | 25 | **−14** |
| 8,075 → 8,200 | 0 | 0 | **−39** (neither option has value) |
| 8,225 | 25 | 0 | **−14** |
| 8,250 | 50 | 0 | **+11** |
| 8,325 | 125 | 0 | **+86** |

```
S_T < 8,075:  8,075 − S_T − 39 = 8,036 − S_T
S_T > 8,200:  S_T − 8,200 − 39 = S_T − 8,239
Break-evens:  8,036 and 8,239
```

> **The deck buys this put at $20, which is the bid.** Every other "buy" in the deck uses the offer, and the deck's own short strangle (slide 44) *sells* the same put at $20. Bought at the offer (the workbook's ASX screen shows $24), the strangle costs $43 and the break-evens become 8,032 and 8,243. The method is unaffected. Use whatever premium a question gives you.

### Short strangle (slides 43–44)

**Worked example (slide 44):** sell the 8,200 call for $14 and the 8,075 put for $20, receiving **$34**.

| Index at expiry | Call (short) | Put (short) | **Profit** |
|---|---|---|---|
| 7,950 | 0 | −125 | **−91** |
| 8,025 | 0 | −50 | **−16** |
| 8,050 | 0 | −25 | **+9** |
| 8,075 → 8,200 | 0 | 0 | **+34** (writer keeps both premiums) |
| 8,225 | −25 | 0 | **+9** |
| 8,325 | −125 | 0 | **−91** |

```
S_T < 8,075:  −(8,075 − S_T) + 34 = S_T − 8,041
S_T > 8,200:  −(S_T − 8,200) + 34 = 8,234 − S_T
Break-evens:  8,075 − 34 = 8,041   and   8,200 + 34 = 8,234
```

> **Slide 44's summary formulas are wrong. The table beneath them is right.** The slide prints "8109 − S(T)" below 8,075 and "S(T) − 8166" above 8,200, which is the long-strangle template with +34 dropped in. Test it: at 7,950, "8109 − S(T)" gives **+159**, but the table (and the algebra) give **−91**. The correct writer formulas are **S_T − 8,041** and **8,234 − S_T**, and the put and call value columns should carry minus signs, −(8,075 − S_T) and −(S_T − 8,200). Check with your tutor. Don't copy the slide's formulas.

### Straddle vs strangle

| | Straddle | Strangle |
|---|---|---|
| Strikes | Same (usually ATM) | Different (both OTM) |
| Long cost in the deck | $92 | $39 |
| Long break-evens | 8,033 / 8,217 (184 apart) | 8,036 / 8,239 (203 apart) |
| Flat loss zone | One point (K) | Whole range K_put to K_call |
| Short version | Max gain $80, tight profit range | Max gain $34, wider profit range |

## 8.14 Spreads (slides 46–50)

An **option spread** is the purchase of one contract and the sale of another, alike in every respect but **one**:

- **Calendar (time) spread:** two calls (or two puts) with the **same strike, different expiries**.
- **Price (bullish/bearish) spread:** **different strikes, same expiry**.

| | Straddle | Strangle | Spread |
|---|---|---|---|
| Exercise price | Same | Different | Different (price spread) **or** same (calendar spread) |
| Expiry | Same | Same | Same (price spread) **or** different (calendar spread) |

> **Slide 46's table puts "Different / Different" under Spread.** That contradicts the slide's own bullets: a spread differs in **one** characteristic only, either the strike (price spread) or the expiry (calendar spread), never both. The table above is corrected.

### Bull and bear spreads (slides 47–48)

| | Buy | Sell | Net premium | Pays off if |
|---|---|---|---|---|
| **Bull call spread** | Lower-strike call (higher priced) | Higher-strike call | Debit | Price rises |
| **Bull put spread** | Lower-strike put | Higher-strike put | Credit | Price rises / holds |
| **Bear call spread** | Higher-strike call | Lower-strike call (higher priced) | Credit | Price falls |
| **Bear put spread** | Higher-strike put | Lower-strike put | Debit | Price falls |

**Bull = buy the low strike. Bear = buy the high strike.** That holds for calls and puts alike. Gain and loss are both capped.

```
Debit spread (K_low < K_high):
  Max loss  = net debit
  Max gain  = (K_high − K_low) − net debit
  Break-even = K_low + debit (bull call)    or    K_high − debit (bear put)
```

*Illustrations using prices on slides 36 and 44. These are not deck examples:*

```
Bull call spread: buy 8,125 call @ $50, sell 8,200 call @ $14
  Debit = 50 − 14 = 36
  Max loss = 36 (S_T ≤ 8,125)     Max gain = 75 − 36 = 39 (S_T ≥ 8,200)
  Break-even = 8,125 + 36 = 8,161

Bear put spread: buy 8,125 put @ $42, sell 8,075 put @ $20
  Debit = 42 − 20 = 22
  Max gain = 50 − 22 = 28 (S_T ≤ 8,075)     Max loss = 22 (S_T ≥ 8,125)
  Break-even = 8,125 − 22 = 8,103
```

> **Exam link.** [Sample Q6](#/EFB335/18-sample-final-exam/question-6-a-bull-spread-with-puts-topic-8-4-marks) is a **bull spread with puts**: buy the $18 put for $2.00, sell the $20 put for $3.50, a $1.50 **credit**. Max profit $1.50, max loss $0.50, break-even $18.50 (recomputed and confirmed). The put version of a bull spread takes in cash up front. Don't assume every bull spread is a debit.

> **Slides 47–48 attach volatility labels to the spreads.** They label the bullish call spread "low volatility", the bullish put spread "high", the bearish call spread "high" and the bearish put spread "low". The deck never explains these, and price spreads are **directional** trades with capped risk. Learn the directional view (bull / bear) first and ask your tutor what the volatility labels are meant to convey before relying on them.

### Butterfly spreads (slides 49–50)

A **butterfly** combines three strikes K_1, K_2, K_3. It is similar to a straddle or strangle but with **less risk of large losses**. The long butterfly with calls **buys** the K_1 and K_3 calls and **sells** the K_2 call. The result is a tent peaking at K_2, with a small fixed loss outside the wings: a **low-volatility** bet.

```
Long butterfly (calls):  +1 call @ K_1,  −2 calls @ K_2,  +1 call @ K_3   (K_2 midway)
  Net debit D       = P_1 + P_3 − 2·P_2
  Max loss          = D                     (S_T ≤ K_1 or S_T ≥ K_3)
  Max profit        = (K_2 − K_1) − D       (at S_T = K_2)
  Break-evens       = K_1 + D   and   K_3 − D
```

> **The deck labels the floor "P2 − P1 − P3" and shows one "Short Call".** With only one short option the right-hand arm does not flatten. Above K_3 the position is still net long one call, so it is not a butterfly. The flat wings on the slides need **two** short options at K_2 (the workbook's butterfly sheets use two), so the floor is **2P_2 − P_1 − P_3**, i.e. −D. Python confirms that the one-short version's right arm keeps rising.

> **Slide 50 is titled "Short butterfly spread pay-off (high volatility expectation)",** but its diagram shows **long puts at K_1 and K_3, a short put at K_2** and a **tent-shaped** payoff. That is a **long** butterfly built with puts, which is a *low*-volatility position. A true short butterfly is the upside-down tent: it earns a small credit if the price moves well away from K_2 and loses most at K_2. Check with your tutor which one slide 50 intends.

## 8.15 Range forwards (hidden slides 51–53)

*The lecturer hid these three slides in the deck, but "Range Forwards" is still item 14 of the topic outline (slide 3) and appears in the slide 6 glossary, so they are summarised briefly here.*

- An **equity collar** (§8.8) has some of a forward's features (no upfront premium) but is really **two options**: a long OTM put and a short OTM call. Collars are one example of **range (or flexible) forwards**.
- **Many zero-cost range forwards can be built.** For any OTM call you choose, there is an OTM put at some strike with the same premium.
- An **ordinary forward** is the limiting case: a zero-cost range forward where the two strikes coincide.

**Exhibit 16.25 (slide 53)** compares long positions on USD/CHF:

```
Long regular forward:  profit = S_T − 0.67           (one straight line through 0.67)
Long range forward:    long call @ 0.70 + short put @ 0.64, zero net premium
                       S_T below 0.64        → loss  (S_T − 0.64)
                       0.64 to 0.70          → zero
                       S_T above 0.70        → gain  (S_T − 0.70)
```

> **The collar is the hedger's range forward, and Exhibit 16.25 shows the buyer's.** A long range forward is long a call and short a put. That is exactly the opposite of the collar's long put and short call, which is why the collar protects a share you **own**. Both are zero-cost and both carve out a dead zone between the two strikes.

## 8.16 Which strategy for which view?

| You hold / need | Your view | Strategy | Section |
|---|---|---|---|
| Own shares | Lock the value, give up the upside | Sell index futures | 8.6 |
| Own shares | Insure the downside, keep the upside | Protective put | 8.7 |
| Own shares | Insure for (near) zero cost | Collar / range forward | 8.8, 8.15 |
| Own shares | Flat to mildly up | Covered call | 8.9 |
| Must buy later | Fear a rally | Long calls (or long futures, sample Q5) | 8.10 |
| Must buy later | Flat or falling | Sell puts | 8.11 |
| No position | Big move, direction unknown | Long straddle (or cheaper long strangle) | 8.12–8.13 |
| No position | Big move, more likely down / up | Strip / strap | 8.12 |
| No position | Little movement | Short straddle, short strangle, long butterfly | 8.12–8.14 |
| No position | Moderately up / down, capped risk | Bull / bear spread | 8.14 |

## Summary

- **Derivatives** derive their value from an underlying and are used for **hedging**, **speculation** and **arbitrage**. Futures are standardised and exchange-traded, forwards customised and OTC, and both must be settled. Futures profit is linear: long `P_T − F_0`, short `F_0 − P_T`.
- **Calls** (the right to buy) rise in value as the underlying rises. **Puts** (the right to sell) rise as it falls. Volatility and time raise both. Long positions **pay** premium and short positions **earn** it. The holder has the right to exercise and the writer must honour it.
- Payoffs: call `max(S_T − X, 0)`, put `max(X − S_T, 0)`. These are the **only** Topic 8 formulas on the exam sheet. The deck calls these "option value" and calls the premium-adjusted figure "payoff". The formula sheet calls the premium-adjusted figure profit.
- **Portfolio uses:** short futures lock in 8,109 (40 contracts); a protective put floors the value at K − premium (8,083); a zero-cost collar bounds it between the strikes ($97 to $108); a covered call caps it at X + premium ($45.24); a long call caps the cost of buying in (8,219); a short put lowers the cost of buying on a dip (8,055) but leaves it uncapped on a rise.
- **Volatility trades:** long straddle ($92, break-evens 8,033 / 8,217) and long strangle ($39, break-evens 8,036 / 8,239) bet on movement. Their short versions ($80 and $34 received) bet on calm, with unlimited risk. Strips lean bearish and straps lean bullish.
- **Spreads:** bull = buy the low strike, bear = buy the high strike, so gain and loss are both capped. Butterflies are a three-strike tent with a small, fixed maximum loss. A zero-cost collar is a range forward.
- **Deck errors to know:** slide 44's short-strangle formulas, the butterfly floor label (2P_2 − P_1 − P_3) and slide 50's title.

## ✅ Checkpoint

*(The deck's two checkpoint slides, answered.)*

<details><summary>1. A futures contract is _______ while a forward contract is _______</summary>

**Standardised and exchange-traded** (futures) vs **customised and traded over-the-counter** (forwards). Both must be settled.

</details>

<details><summary>2. As the stock price and interest rates rise, the value of a _______ option rises</summary>

**Call.** A higher S raises a call's value and lowers a put's. A higher r raises a call's value (the call is a cheaper-to-fund alternative to buying on margin) and lowers a put's. Only the call has both pushing upward.

</details>

<details><summary>3. A costless collar may be achieved by buying _______ and selling _______</summary>

**Buying an out-of-the-money put and selling an out-of-the-money call** on the same share with the same expiry, with the call premium paying for the put (slide 20: $97 put and $108 call, both $0.56).

</details>

<details><summary>4. Selling a call requires the writer to have a conviction that the stock price is going to _______</summary>

**Stay flat or fall, i.e. not rise above the exercise price.** The writer keeps the premium only if the call expires worthless. Above X plus the premium, the writer loses.

</details>

<details><summary>5. Selling OTM options is a(n) _______ strategy used to _______</summary>

The slide's wording is garbled ("is a s strategy"). The answer it is after: a **short (option-writing) strategy used to earn premium income** when you expect **low volatility**, e.g. the short strangle on slide 44, which keeps $34 as long as the index stays between 8,075 and 8,200.

</details>

<details><summary>6. Buying two calls and a put using a _______ is based on an expectation of a _______ run</summary>

**Strap** — a **bullish (upward)** run. Volatility is expected, but more upside than downside.

</details>

<details><summary>7. When we expect a significant gap up or down in share price, a _______ is preferred over a _______ with a view to _______</summary>

The slide does not say which pair it means. Two readings, each defensible from the deck:

- **Long strangle preferred over a long straddle, with a view to reducing the initial cost** (slide 40: "by buying two out-of-the-money contracts, the investor reduces the original straddle position's initial cost"). In the deck's numbers that is $39 instead of $92. A *significant* gap is what a strangle needs to clear its wider break-evens. This is probably the intended answer.
- **Long straddle preferred over a short straddle, with a view to profiting from volatility in either direction.** It is less specific but also correct.

State your reading in the exam. Confirm the intended one with your tutor.

</details>
