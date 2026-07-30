# Topic 6 — Derivatives Markets (Part A): Forwards and Futures

**Reference:** Kidwell et al. chapter 11; CFA 2020 Level I Reading 48.

Part A covers **forward commitments** — obligations. Part B covers
**contingent claims** — rights. The single most valuable thing you can carry
into the exam from this topic is the 2 × 2 grid, and then the mechanics of a
futures margin account, which is where all the arithmetic marks are.

---

## 1. What a derivative is

> **A derivative security is a financial instrument whose value (performance)
> is derived from the value (performance) of an underlying security.**

The deck presses on what "derive" really means:

- It **transfers risk from one party to another**.
- The value of the underlying security is **the source of the risk**.

### The pass-through test

Are asset-management products — superannuation funds, managed funds —
derivatives? **No.** They **pass through** the returns of the underlying
securities to clients. A derivative **transforms** the underlying's return
into a different payoff shape.

| Passes through the underlying's return | Transforms the underlying's return |
|---|---|
| A superannuation fund invested in government and AA+ corporate bonds | A forward contract to sell 5,000 Alphabet shares at $143 on 17 December |
| A managed fund that mimics the S&P 500 | A futures contract to buy 4,000 kg of cane sugar at AUD0.39/kg |

> **"Pass through vs transform" is the exam-safe way to say why a fund is not
> a derivative.** A fund holding $1m of bonds gives you a bond-shaped return. A
> forward gives you a payoff that is *linear in* the underlying but does not
> require you to own it, funds itself, and can be negative. Same source of
> risk, different shape.

---

## 2. The 2 × 2 that organises everything

| | **Forward commitment** (an obligation) | **Contingent claim** (a right) |
|---|---|---|
| **Exchange traded** | Futures contracts | Options |
| **Over the counter** | Forward contracts, swaps | — |

**Forward commitment** — contracts entered into at one point in time that
**require both parties** to engage in a transaction at a later point (the
expiration) on terms agreed at the start.

**Contingent claim** — a **right** to make a final payment contingent on the
performance of the underlying.

**Swaps are not covered in EFB201** beyond the LIBOR case in Topic 9.

### Hybrids — embedded derivatives

Some instruments carry a derivative inside another security.

| Stand-alone derivative | Embedded derivative in a financial instrument |
|---|---|
| A put option | A **callable bond** — the issuer can pay off before maturity |
| A futures contract | A **convertible bond** — the holder can convert bonds into shares |

> **Callable and convertible bonds are *bonds* with an option inside, not
> options.** They go in the "embedded" column. A put option and a futures
> contract stand alone. Derivatives Part A tutorial Q2 is exactly this split:
> **1, 3 stand-alone; 2, 4 embedded.**

### The four true/false statements

From Derivatives Part A tutorial Q3. Only **statement 4** is true.

| # | Statement | Verdict |
|---|---|---|
| 1 | A swap contract is a contingent claim | **False** — a swap is a forward commitment (OTC) |
| 2 | A forward commitment refers to instruments like forward contracts and call options | **False** — a call option is a contingent claim, not a forward commitment |
| 3 | A futures contract can be either a contingent claim or a forward commitment depending on the contract terms | **False** — a futures contract is always a forward commitment |
| 4 | A contingent claim allows one of the counterparties to determine whether and when the trade will settle | **True** — that optionality is the definition |

> **Statement 4 is the cleanest one-line definition of a contingent claim you
> will get.** *One* counterparty — the buyer — decides whether and when
> settlement happens. In a forward commitment **neither** party has that
> choice; both are obliged.

---

## 3. Forwards vs futures

**Forward contract** — an **over-the-counter** derivative contract in which
two parties agree that one party, the buyer, will purchase an underlying asset
from the other, the seller, at a later date at a **fixed price agreed when the
contract is signed**.

**Futures contract** — a **standardised** contract created and traded on a
futures exchange, with the same buy/sell structure, plus two features a
forward does not have:

1. **Daily settling of gains and losses** — mark to market.
2. **A credit guarantee by the exchange through its clearing house.**

### Margin on a futures contract

- On initiation, **both parties** deposit a minimum sum called the **initial
  margin**, usually **less than 10% of the futures value**.
- Thereafter both must maintain a minimum balance called the **maintenance
  margin**.
- If a party's balance drops below the maintenance margin, they receive a
  **margin call** asking them to deposit money to bring the balance **up to
  the maintenance margin**.

> **A futures margin call restores the balance to the *maintenance* margin,
> not to the initial margin.** That is the opposite of most equity broker
> conventions and it is exactly what the deck's worked example does — John's
> balance falls to $4,000 and he deposits $7,500 to reach $11,500, the
> maintenance level, not the $24,000 initial level. Check which convention a
> question is using and say so.

> **Both sides post margin on a futures contract.** In a leveraged long on
> shares, only the borrower has a margin account. In futures the seller posts
> too, because the exchange is exposed to whichever side is losing.

### The comparison table

| | Forward | Futures |
|---|---|---|
| **Venue** | Over the counter | Exchange |
| **Terms** | **Tailor-made** | Standardised |
| **Regulation and transparency** | Less | **More** |
| **Liquidity** | Less | **More** |
| **Settlement of gains/losses** | Entire payoff at expiration | **Daily (mark to market)** |
| **Counterparty risk** | Higher | **Lower** — the clearing house guarantees |

The deck's reasoning on counterparty risk is worth quoting almost verbatim in
a written answer:

> In a forward contract, with the entire payoff made at expiration, **a loss
> by one party can be large enough to trigger a default**. Hence forwards are
> subject to default risk and require careful consideration of counterparty
> credit quality. Because futures settle gains and collect losses **daily**,
> the amounts that could be lost on default are much smaller, which gives the
> clearing house far greater flexibility to manage the credit risk it assumes.

### Choosing between them — the Supermine question

Derivatives Part A tutorial Q4. Supermine, an Australian mining company, has
contracted to sell 4,000 metric tons of lead to a Swedish customer at
SEK20,433 per ton, with full payment on delivery in three months.

**4.1 — What is the main financial risk?**

**Exchange rate risk.** Specifically, that the **Swedish krona depreciates
against the Australian dollar**, so the company receives fewer Australian
dollars. The currency matters because Supermine's operations are domestic.

**4.2 — OTC or exchange-traded?**

**OTC**, because OTC contracts can be **customised to match Supermine's exact
risk exposure**. Supermine is unlikely to find an exchange-traded contract
matching the exact **currency pair, size and maturity date** it needs. The
counter-consideration, which you must include for full marks: this flexibility
must be **weighed against contractual (counterparty) risk**, which exchange
clearing houses mitigate more effectively.

> **Answer the "which market" question in two halves: the advantage, then the
> cost of that advantage.** Naming customisation alone gets you most of the
> way; naming counterparty risk as the price you pay is what completes it. The
> same two-sided structure works for the reverse question ("why use an
> exchange?" — standardisation, liquidity and the clearing-house guarantee,
> at the cost of an imperfect hedge).

Note also the price is already fixed in SEK, so **commodity price risk is
already hedged by the sales contract**. Only the currency remains. Identifying
which risk is *left* is the actual test.

---

## 4. The S&P 500 worked example

The deck's running example, and it recurs in Part B. Set-up, 5 January 2022:

- The S&P 500 is at **4,800**.
- **Jenny** has a stock portfolio worth **$10.8 million** tracking the index.
  She plans to sell by March 2022 and fears a big decline.
- **John** plans to invest around **$10.8 million** into a tracking portfolio
  by March 2022. He fears a big increase and wants to buy within budget.

Their three choices:

1. **Do nothing.**
2. **Enter a forward commitment** — a forward contract or a futures contract.
3. **Get a contingent claim** — buy options (Part B).

A swap is not applicable here: swaps change between fixed and variable **cash
flow payments**, which is not the exposure either of them has.

### As a forward contract

Jenny and John sign an OTC forward on 5 January: **John will purchase the
entire tracking portfolio from Jenny on 31 March 2022 at $10.8 million.** Done.
No margin, no exchange, no daily settlement, and each is exposed to the other
defaulting.

### As a futures contract

Jenny **sells** and John **buys** E-mini S&P 500 (ESH2) March 2022 futures on
CME Globex.

```
Contract unit      = $50 × S&P 500 index
Initial margin     = $24,000 per contract  (assumed)
Maintenance margin = $11,500 per contract

Contract value at 4,800 = $50 × 4,800 = $240,000
Number of contracts     = $10,800,000 / $240,000 = 45
```

### The mark-to-market table, verified line by line

| | Index | Futures price per contract | Jenny (SELLER) transfer | Jenny balance | John (BUYER) transfer | John balance |
|---|---|---|---|---|---|---|
| Day 0 | 4,800 | $240,000 | — | $24,000 | — | $24,000 |
| Day 1 | 4,750 | $237,500 | **+$2,500** | $26,500 | **−$2,500** | $21,500 |
| Day 2 | 4,400 | $220,000 | **+$17,500** | $44,000 | **−$17,500** | **$4,000** |
| | | | | | *margin call: deposit $7,500* | $11,500 |
| Last day | 4,600 | $230,000 | total **+$450,000** | | total **−$450,000** | |

Checking each figure:

```
Day 1:  50 × 4,750 = $237,500;  change = 237,500 − 240,000 = −$2,500 per contract
        Price FELL. The SELLER gains. Jenny +$2,500 → $26,500
                                       John  −$2,500 → $21,500  (still above $11,500)

Day 2:  50 × 4,400 = $220,000;  change = 220,000 − 237,500 = −$17,500
        Jenny +$17,500 → $44,000
        John  −$17,500 → $21,500 − 17,500 = $4,000   → BELOW $11,500 → margin call
        Deposit required = 11,500 − 4,000 = $7,500

Last:   50 × 4,600 = $230,000
        Total move from Day 0 = 230,000 − 240,000 = −$10,000 per contract
        × 45 contracts = $450,000  →  Jenny +$450,000, John −$450,000
```

### Closing the loop — does the hedge work?

```
Portfolio value at index 4,600 = $10,800,000 × (4,600 / 4,800) = $10,350,000

JENNY (long the portfolio, short futures)
  Cash in from selling the portfolio at spot   $10,350,000
  Cash in from the futures margin account      +   450,000
                                                ────────────
  Total cash in                                 $10,800,000  ✓ locked in

JOHN (needs to buy the portfolio, long futures)
  Cash out to buy the portfolio at spot        $10,350,000
  Cash out to the futures margin account       +   450,000
                                                ────────────
  Total cash out                                $10,800,000  ✓ locked in
```

Both parties end at exactly $10.8 million regardless of where the index
finished. **That is the definition of a forward commitment: no downside, and
no upside.**

> **The deck's intermediate slide builds contain two errors that the final
> build corrects.** Early versions state John's number of contracts as
> "$10 million / futures contract unit" (should be **$10.8 million**) and his
> **total cash out as $9,900,000** (should be **$10,800,000**). The $9.9m comes
> from *subtracting* the $450,000 margin flow instead of adding it. John is
> **long** and the price **fell**, so he **pays** $450,000 — a cash outflow on
> top of the purchase, not a rebate. Trust the last version of the slide, and
> sanity-check any hedge answer against "does it equal the price I locked in?"

> **Direction of the mark-to-market flow is the single biggest sign-flip risk
> in the unit.** Price **falls** ⇒ the **short** gains and the **long** pays.
> Price **rises** ⇒ the **long** gains and the **short** pays. Write the
> direction down before you compute magnitudes — a correct number with the
> wrong sign scores zero.

### Settlement method

| | What happens |
|---|---|
| **Financial (cash) settlement** | Close out the futures contracts and margin accounts. Jenny sells her portfolio in the physical market to whoever wants it; John buys a similar portfolio in the physical market from whoever has one. **Both transact at the market spot price.** |
| **Deliverable (physical) settlement** | Jenny delivers her portfolio to John at the mark-to-market price. |

And the identity that makes both equivalent: **market spot price =
mark-to-market price** at expiry.

---

## 5. The Micro WTI crude oil hedge — full worked tutorial

Derivatives Part A tutorial Q5. EFG Chemical Ltd uses **12,000 barrels of
crude oil per month** as a raw material, and hedges with futures. In January it
plans for **March and April 2022** production using CME Micro WTI Crude Oil
(MCL) data.

The relevant contract specs and data from the appendix:

```
CONTRACT UNIT:      100 barrels
PRICE QUOTATION:    US dollars and cents per barrel
SETTLEMENT METHOD:  Financially settled
MAINTENANCE MARGIN: 03/2022 = 580 USD    04/2022 = 570 USD
```

| Settlement date | Month | Open | High | Low | Last | Settle |
|---|---|---|---|---|---|---|
| Thu 13 Jan 2022 | MAR 22 | **82.16** | 82.29 | 80.90 | 81.22 | 81.62 |
| Thu 13 Jan 2022 | APR 22 | **81.38** | 81.46 | 80.21 | 80.44B | 80.86 |
| Fri 14 Jan 2022 | MAR 22 | 81.23 | 83.79 | 81.09 | 83.68A | **83.30** |
| Fri 14 Jan 2022 | APR 22 | 80.54 | 82.81 | 80.50 | 82.76 | **82.42** |

### 5.1 — Buyer or seller?

**The buyer.** The company **buys crude oil** as an input for production, so
it is exposed to the oil price **rising**. A long futures position gains when
the price rises, offsetting the higher physical cost.

> **Match the futures side to the physical side you need to protect.** If you
> will *buy* the commodity later, go **long** futures. If you will *sell* it
> later, go **short**. Supermine (selling lead, receiving SEK) sells AUD/SEK
> exposure; EFG (buying oil) buys oil futures. Getting this backwards doubles
> your exposure instead of hedging it.

### 5.2 — How many contracts?

```
Contract unit = 100 barrels

March:  12,000 / 100 = 120 contracts
April:  12,000 / 100 = 120 contracts
                       ──────────────
Total                = 240 contracts
```

### 5.3 — Mark-to-market price on 14 January

Use the **settlement price** for 14 January, multiplied by the contract unit:

```
March 2022:  $83.30 × 100 = $8,330 per contract
April 2022:  $82.42 × 100 = $8,242 per contract
```

### 5.4 — What happens to the margin account on 14 January?

Initial margin for March is 10% of the contract price, and the position was
opened at the **open price on 13 January**, $82.16.

```
Initial margin (March)
  = 10% × $82.16 × 100 barrels × 120 contracts
  = 10% × $985,920
  = $98,592

Mark-to-market move to 14 January
  = ($83.30 − $82.16) × 100 × 120
  = $1.14 × 12,000
  = +$13,680

Balance on 14 January = $98,592 + $13,680 = $112,272
```

**Why the money moves your way.** The oil price rose. You are **long** — you
contracted to buy at $82.16 and the market is now $83.30. The **seller** is
now contracted to sell at a price below the market, so the seller has an
incentive to walk away and sell into the physical market at $83.30 instead. To
remove that default incentive — to keep the seller's "skin in the game" — the
clearing house transfers the seller's hypothetical loss of
`$1.14 × 100 × 120 = $13,680` out of the seller's margin account and into
yours. There is then no unrealised profit left for the seller to default on.

> **The solution sheet's phrasing here is confusing and worth restating in
> your own words.** It says "the market moves in favour of the seller",
> meaning the seller would now prefer the *physical* market. In *futures*
> terms the seller has lost and you have gained. Both readings end with cash
> moving from the seller to you — so the direction is right — but if you
> reproduce the phrase "in favour of the seller" without explaining it, an
> examiner will read it as a sign error. Say: *the price rose, so the long
> gains and the short pays.*

> **The solution skips the 13 January settlement mark, and the total still
> comes out right.** Strictly, entering at the 13 Jan **open** of $82.16 means
> the account is first marked to the 13 Jan **settle** of $81.62 — a loss of
> `($81.62 − $82.16) × 12,000 = −$6,480`, leaving $92,112 that evening. Then
> 14 January marks from $81.62 to $83.30, a gain of
> `$1.68 × 12,000 = +$20,160`. Net: `−6,480 + 20,160 = +$13,680`, the same
> figure. The shortcut is safe for a *cumulative* question and wrong for a
> *"what was the balance on 13 January"* question.

### 5.5 — When do you get a margin call?

Maintenance margin is quoted **per contract** on the CME margins page:

```
March 2022:  $580 × 120 contracts = $69,600
April 2022:  $570 × 120 contracts = $68,400
```

You receive a margin call when the balance falls **below** those levels.

Going one step further — the **price** at which the March call fires:

```
Balance = $98,592 + (P − $82.16) × 100 × 120
Set balance = $69,600:
        (P − 82.16) × 12,000 = 69,600 − 98,592 = −$28,992
         P − 82.16           = −$2.416
         P                   = $79.744 per barrel
```

So the March account is called if crude settles below **$79.74**.

> **Maintenance margin on the CME page is quoted per contract, in dollars —
> not as a percentage.** The initial margin in this question is given as a
> percentage (10%) and the maintenance as a dollar amount ($580). Mixing the
> units is an easy way to be off by a factor of a hundred. Multiply the dollar
> figure by the number of contracts; multiply the percentage by the full
> notional.

<details><summary>Checkpoint — forwards and futures</summary>

1. A bakery will buy 50,000 bushels of wheat in six months. Wheat futures
   have a contract unit of 5,000 bushels. Long or short, and how many
   contracts?
2. You are short 20 futures contracts on an index, unit $25 × index, entered
   at index 3,000. The index settles at 3,040. What is the mark-to-market flow,
   and which way does it go?
3. Your futures balance is $18,000, initial margin was $30,000, maintenance
   is $15,000. The next settlement costs you $4,500. What happens?

**Answers**

1. **Long**, because the bakery will buy. `50,000 / 5,000 = **10 contracts**`.
2. Contract value moved from `$25 × 3,000 = $75,000` to `$25 × 3,040 =
   $76,000`, i.e. `+$1,000` per contract. `× 20 = $20,000`. The price **rose**
   and you are **short**, so **you pay $20,000** — it flows out of your account
   to the long.
3. `$18,000 − $4,500 = $13,500`, which is below the $15,000 maintenance
   margin. **Margin call.** You must deposit `$15,000 − $13,500 = **$1,500**` to
   restore the balance to the maintenance level — not $16,500 to restore it to
   the initial level, on the convention this unit uses.

</details>

---

## Summary

- A derivative's value **derives from** an underlying and its function is to
  **transfer risk**. Funds **pass through** returns; derivatives **transform**
  them.
- The grid: **forward commitment** (obligation) = futures on-exchange,
  forwards and swaps OTC. **Contingent claim** (right) = options,
  on-exchange.
- Callable and convertible bonds are **embedded** derivatives; puts and
  futures are stand-alone.
- A contingent claim lets **one** counterparty decide whether and when to
  settle. A forward commitment binds **both**.
- Futures differ from forwards by **daily mark to market** and a **clearing
  house guarantee**, which is why counterparty risk is lower. Forwards win on
  **customisation**.
- **Both sides post margin. A margin call restores the balance to the
  MAINTENANCE margin.**
- `Number of contracts = notional exposure / (contract unit × price)`, or
  `quantity / contract unit` for a commodity.
- **Price falls ⇒ short gains, long pays. Price rises ⇒ long gains, short
  pays.** Write the direction down first.
- A perfect futures hedge locks in the initial notional — check your answer by
  confirming that spot proceeds plus margin flows equal the price you locked
  in.
- Micro WTI worked answers: **120 + 120 = 240 contracts**; MTM $8,330 and
  $8,242 per contract; margin balance **$112,272**; calls at **$69,600** and
  **$68,400**, i.e. below **$79.74/barrel** for March.
