# Topic 8 — The Foreign Exchange Market

**Reference:** Kidwell et al. chapter 12.

FX is a small topic with dense arithmetic. Three things carry the marks: the
**quote convention** (which currency is the base), the **bid–ask direction**
(the bank always wins), and **interest rate parity** (which way the ratio of
interest rates goes). Get the convention wrong and every subsequent number
inverts.

---

## 1. How big the market is

Daily average turnover from the BIS Triennial Survey, in USD millions,
top ten currencies:

| Currency | 2010 | % | 2016 | % | 2022 | % |
|---|---|---|---|---|---|---|
| USD | 3,371 | 84.9 | 4,437 | 87.6 | **6,639** | **88.4** |
| EUR | 1,551 | 39.0 | 1,590 | 31.4 | 2,292 | 30.5 |
| JPY | 754 | 19.0 | 1,096 | 21.6 | 1,253 | 16.7 |
| GBP | 512 | 12.9 | 649 | 12.8 | 968 | 12.9 |
| CNY | 34 | 0.9 | 202 | 4.0 | **526** | **7.0** |
| **AUD** | 301 | 7.6 | 349 | 6.9 | **479** | **6.4** |
| CAD | 210 | 5.3 | 260 | 5.1 | 466 | 6.2 |
| CHF | 250 | 6.3 | 243 | 4.8 | 390 | 5.2 |
| HKD | 94 | 2.4 | 88 | 1.7 | 194 | 2.6 |
| SGD | 56 | 1.4 | 91 | 1.8 | 182 | 2.4 |

> **The percentages sum to 200%, not 100% — every trade involves two
> currencies.** USD's 88.4% means the dollar is on one side of 88.4% of all
> trades, not that it is 88.4% of volume. If a question asks you to interpret
> this table, say so; treating the column as a normal share is the standard
> misreading.

Two things worth a sentence: the **USD's share keeps rising** (84.9% → 88.4%),
and the **CNY is the only currency to grow substantially in share** (0.9% →
7.0%), overtaking the AUD between 2019 and 2022.

For context, the RBA's Trade Weighted Index weights (as at 1 December 2017)
put **CNY at 27.46%**, JPY 10.70%, USD 10.29%, EUR 9.80%, GBP 4.32%, others
37.43% — a reminder that Australia's *trade* exposure and its *financial
market* exposure are different animals.

---

## 2. What motivates FX trading

| Motive | Detail |
|---|---|
| **International trade** | Hedge against exchange rate volatility — spot vs forward/futures |
| **Investment** | Hedge against loss of purchasing power; **speculation** |
| **Other** | M&A and corporate restructuring; risk management, including originating and selling derivatives to clients; asset management |

---

## 3. Quote conventions — get this right first

Following Bloomberg and Reuters:

> **`AUD/JPY 74.6` means 1 unit of AUD (the BASE currency) is worth 74.6 JPY
> (the QUOTE currency).**

```
BASE / QUOTE  =  number
1 BASE  =  number × QUOTE
```

So `AUD/JPY 75.20` ⇒ 1 AUD buys 75.20 JPY. To convert **JPY into AUD** you
**divide** by the rate. To convert **AUD into JPY** you **multiply**.

> **Direction of the arithmetic is set by which currency is the base.** With
> `AUD/JPY 75.20`, `JPY 100,000,000 ÷ 75.20 = AUD 1,329,787`. Multiplying
> instead gives 7.5 billion, which is obviously wrong — but with rates near 1
> (`AUD/USD 0.67`) the error is not obvious at all, and that is where marks
> are lost. Always sanity-check the magnitude.

> **Beware sources that quote the other way round.** The deck's own
> interest-rate-parity slide writes `USD/EUR = 0.8` and converts USD100 into
> EUR80 — consistent with USD as the base. Some market participants write the
> same relationship as `EUR/USD 1.25`. Read what the numbers *do* in the
> example, not just the label.

### Arbitrage

**Price differences in different markets that can be exploited** — buy low in
market A, sell high in market B.

### Spot vs forward

| Spot exchange rate | Forward exchange rate |
|---|---|
| Used in a transaction taking place **immediately** | Used in a transaction taking place on a **predetermined future date** |

### Appreciation and depreciation

Half the marks in this topic depend on saying which currency moved which way,
and the quote convention decides the sign.

```
With BASE/QUOTE quoted as a number:

  Number RISES  ⇒  the BASE currency has APPRECIATED
                   (one unit of base now buys more quote)

  Number FALLS  ⇒  the BASE currency has DEPRECIATED
```

**Worked example.** `AUD/JPY` moves from 75.20 to 77.10.

```
One AUD now buys 77.10 yen instead of 75.20
⇒ the AUD has APPRECIATED against the JPY
⇒ the JPY has DEPRECIATED against the AUD

Percentage move in the AUD: 77.10 / 75.20 − 1 = +2.53%
```

An Australian firm with a **yen payable** benefits: the same JPY 100,000,000
now costs `100,000,000 ÷ 77.10 = AUD 1,297,017` instead of
`100,000,000 ÷ 75.20 = AUD 1,329,787` — a saving of **AUD 32,770**.

> **The percentage move is not symmetric, and questions exploit that.** The
> AUD appreciated 2.53% against the yen, but the yen depreciated
> `75.20/77.10 − 1 = −2.46%` against the AUD. Different bases, different
> answers. Always say *"appreciated X% against Y"*, never just "moved X%".

> **An importer fears the *domestic* currency depreciating; an exporter fears
> it appreciating.** The travel agency below owes yen, so it loses if the AUD
> falls (each AUD buys fewer yen). Supermine in Topic 6 receives krona, so it
> loses if the AUD *rises*. Identify which way the cash flows before you name
> the risk.

---

## 4. Bid–ask: what the bank charges

Part A of the FX tutorial, using CommBank's rate card of 13 May 2019 and its
fee schedule.

You want to buy **USD5,000** cash for a trip. A US visitor wants to sell
**USD5,000** cash for Australian dollars. Both look at the same bank on the
same day.

**1.1 — Are these spot or forward rates?** **Spot** — the cash changes hands
immediately.

**1.2 — The relevant bid–ask quote:** **0.6695 – 0.7309** (AUD/USD).

**1.3 — What you pay to buy USD5,000:**

```
USD 5,000 ÷ 0.6695 = AUD 7,468.26
```

**1.4 — What the US visitor receives for USD5,000:**

```
USD 5,000 ÷ 0.7309 = AUD 6,840.88
```

**1.5 — What the bank earns on the pair of transactions:**

```
(1) Bid–ask spread        AUD 7,468.26 − AUD 6,840.88          = AUD 627.38
(2) Fee charged to you    Max[AUD 10.00, AUD 7,468.26 × 1%]    = AUD  74.68
(3) Fee charged to visitor Max[AUD 10.00, AUD 6,840.88 × 1%]   = AUD  68.41
                                                                 ──────────
    Total income          = 627.38 + 74.68 + 68.41              = AUD 770.47
```

The 1% fee with a $10 minimum comes from the CommBank fee schedule: *buy
foreign currency notes — 1% of transaction amount (minimum $10.00 per
transaction)*; *sell foreign currency notes to the Commonwealth Bank — 1% of
transaction amount (minimum $10.00 per transaction)*.

> **The bank quotes the rate that is worse for you in both directions — and
> the deck's own explanation is the sentence to reproduce.** *"For the same
> amount of USD, the bank buys more AUD from you (a lower AUD/USD rate) and
> sells fewer AUD (a higher AUD/USD rate) to the US visitor, and keeps the
> difference as income."* Under AUD/USD quoting, dividing by the **smaller**
> number gives the **larger** AUD figure — which is what you hand over.
> Whichever way the pair is quoted, the customer always gets the worse of the
> two rates. Check your answer against that principle before moving on.

> **The fee is charged on the AUD amount, and the maximum function matters.**
> `Max[$10, 1% × amount]` is $10 only for transactions under $1,000. Here 1%
> of $7,468.26 = $74.68 beats the $10 floor comfortably. Writing $10 for a
> $7,468 transaction is a straight lost mark.

> **The bank's income has three components, not one.** Answering "AUD627.38,
> the spread" misses two-thirds of the question. Spread **plus** both fees.

---

## 5. Interest rate parity

The question interest rate parity answers: **what should the forward exchange
rate be, to prevent interest arbitrage?**

### The arbitrage that parity eliminates

The deck's set-up. Two investment routes over one year:

```
ROUTE 1 — stay in USD
  USD 100  →  deposit in a US bank at I_USD = 3%  →  USD 103

ROUTE 2 — go to EUR and come back
  USD 100  →  convert at S(USD/EUR) = 0.8  →  EUR 80
           →  deposit at I_EUR = 4%        →  EUR 83.20
           →  convert back at F(USD/EUR)   →  ???
```

If you could lock in a return rate of `USD/EUR = 0.769`, Route 2 delivers
`83.20 ÷ 0.769 = USD 108.19` against Route 1's USD 103. That is a **risk-free
$5 arbitrage** on $100, and it cannot survive.

The forward rate that kills it is the one that makes the two routes equal:

```
USD100 × (1 + I_USD)  =  USD100 × S(USD/EUR) × (1 + I_EUR) ÷ F(USD/EUR)
```

Rearranged:

```
                       (1 + I_EUR)
F(USD/EUR) = S(USD/EUR) × ───────────
                       (1 + I_USD)
```

Check it:

```
F = 0.8 × (1.04 / 1.03) = 0.8 × 1.0097087 = 0.8077670

Route 2: EUR 83.20 ÷ 0.8077670 = USD 103.00   ✓ exactly matches Route 1
```

### The general form

```
                       (1 + i_QUOTE)
F(BASE/QUOTE) = S(BASE/QUOTE) × ─────────────
                       (1 + i_BASE)
```

> **The interest rate of the QUOTE currency goes on top.** For `AUD/JPY` the
> quote currency is JPY, so `(1 + i_JPY)` is the numerator. For `USD/EUR` the
> quote currency is EUR, so `(1 + i_EUR)` is the numerator. Inverting the
> ratio is the classic error and it produces a forward rate that moves the
> wrong way. **Sanity check:** the currency with the *higher* interest rate
> must trade at a forward *discount*. Here EUR pays 4% against USD's 3%, so
> the euro is worth less forward — and `F = 0.8078 > S = 0.8000` means it takes
> *more* euros per dollar forward, i.e. the euro has weakened. Consistent.

---

## 6. Hedging FX risk — four methods

The deck lists four. It works one in detail and points the second at the
tutorial.

1. **Forward market hedge**
2. **Futures hedge**
3. **Currency option hedge**
4. **Money market hedge**

### Forward market hedge — worked in full

An Australian travel agency must pay **JPY 100,000,000 one year from now**.

```
AUD/JPY spot                 75.20
One-year AUD interest rate    2% p.a.
One-year JPY interest rate    1% p.a.
```

**Step 1 — compute the one-year forward rate from interest rate parity.**

```
                    (1 + I_JPY)         1 + 0.01
F(AUD/JPY) = S ×  ─────────────  = 75.20 × ──────── = 74.4627
                    (1 + I_AUD)         1 + 0.02
```

**Step 2 — convert JPY to AUD at the forward rate.**

```
JPY 100,000,000 ÷ 74.4627 = AUD 1,342,953
```

The agency locks in **AUD 1,342,953** today, whatever happens to the spot rate.

**What if the AUD appreciates?** If the spot in a year is `AUD/JPY 77.1`, the
unhedged agency would have paid only:

```
JPY 100,000,000 ÷ 77.1 = AUD 1,297,017
```

— a saving of **AUD 45,936** it gave up by hedging. That is the cost of
certainty, and it is the honest way to present a hedge in a written answer.

> **The AUD1,342,953 answer requires the UNROUNDED forward rate.** Using the
> rounded 74.46 that the slide displays gives
> `100,000,000 ÷ 74.46 = AUD 1,343,003` — a $50 difference. The deck rounds
> for display and computes with full precision. Carry the decimals through and
> round only the final answer; if the marking scheme expects the rounded
> intermediate, note which you used.

> **Interest rate parity says the AUD is at a forward *premium* here, and the
> sign matters.** AUD pays 2% against JPY's 1%, so the higher-yielding currency
> (AUD) must be weaker forward: `74.46 < 75.20`, meaning one AUD buys fewer yen
> in a year. Fewer yen per AUD ⇒ **more AUD needed** to buy the same 100 million
> yen. If your hedged cost came out *below* the spot-rate cost of
> `100,000,000 ÷ 75.20 = AUD 1,329,787`, you inverted the parity ratio.

### Futures hedge — the AUD/JPY cross rate, worked

FX tutorial Part B. It is January 2022. You are CFO of an Australian trading
company that purchased goods for **JPY 100,000,000**, payable in **March
2022**. You will fully hedge with futures against a **depreciation of the AUD
against the JPY**.

From the CME appendix, **Australian Dollar/Japanese Yen (AJY) Cross Rate
futures**:

```
CONTRACT UNIT:        200,000 Australian dollars
PRODUCT CODE:         AJY (Globex) / AJ (clearing)
LISTED CONTRACTS:     Six months in the March quarterly cycle (Mar, Jun, Sep, Dec)
SETTLEMENT METHOD:    Deliverable
MAINTENANCE MARGIN:   540,000 JPY
```

Settlements for trade date **Friday 28 January 2022**:

| Month | Open | **High** | Low | Last | Settle |
|---|---|---|---|---|---|
| MAR 22 | 81.10 | **81.31** | 80.36A | 80.62B | 80.43 |
| JUN 22 | – | 81.04B | 80.47A | 81.04B | 80.35 |

**2.1 — Buyer or seller?**

**Seller** of the AUD/JPY cross rate futures contract, because the **contract
unit indicates the underlying asset is AUD** — the currency the company will
sell in order to buy the yen it owes.

**2.2 — How many contracts, entering on 28 January at that day's highest
price?**

```
Highest price on 28 Jan (MAR 22) = 81.31   (i.e. 1 AUD = 81.31 JPY)

AUD needed = JPY 100,000,000 ÷ 81.31 = AUD 1,229,861

Contracts  = AUD 1,229,861 ÷ AUD 200,000 = 6.149

Round UP (take the ceiling) → 7 contracts
```

> **Round *up* on a hedge, not to the nearest integer.** 6.149 rounds to 6 by
> ordinary rules, but six contracts covers only AUD 1,200,000 — leaving
> AUD 29,861 of the exposure naked. The question says "fully hedge", so you
> take the ceiling and slightly over-hedge. State that you rounded up and why.

> **Note the deliberate mismatch between "sell AUD" and the futures side.**
> The company owes yen, so it will **sell AUD to buy JPY**. The contract's unit
> is denominated in AUD, so selling AUD means being the **seller** of the
> contract. If the contract had been quoted the other way (JPY/AUD) the answer
> would flip. Read the contract unit, not the ticker.

> **"Cross rate" means neither leg is the USD, and CME derives the
> settlement.** The footnote in the tutorial is explicit: the AUD/JPY cross
> rate settlement is derived by **dividing the AUD/USD contract settlement by
> the JPY/USD contract settlement** and rounding to the nearest tradable tick.
> On CME, a futures contract between a foreign currency and USD is named only
> after that foreign currency — "Australian Dollar Futures" is AUD/USD.

### Currency option hedge

Not worked numerically in the FX deck, but the mechanics are exactly Topic 7.
The travel agency owing yen would **buy a call on JPY** (equivalently, a put on
AUD) — capping the AUD cost at the strike plus the premium while keeping the
benefit if the AUD appreciates. That asymmetry is what an option buys you over
a forward, and the premium is what it costs.

### Money market hedge

Named in the deck's list but not worked. The mechanism, for completeness: to
hedge a foreign-currency payable, **borrow domestic currency today, convert at
spot, and deposit in the foreign currency** so the deposit plus interest
exactly equals the payable at maturity. Interest rate parity is precisely the
statement that a money market hedge and a forward hedge cost the same — which
is why the deck derives parity as the no-arbitrage condition.

> **Nothing about the money market hedge is worked in the supplied material,
> so treat the mechanism above as background rather than as the unit's
> position on it.** If it appears in an exam question, build it from parity:
> deposit `Payable ÷ (1 + i_foreign)` in the foreign currency, funded by
> `[Payable ÷ (1 + i_foreign)] ÷ S` of domestic currency today. Confirm the
> expected treatment with your tutor.

<details><summary>Checkpoint — FX</summary>

1. `AUD/USD` spot is 0.6500. The one-year AUD rate is 4% and the one-year USD
   rate is 5%. What is the one-year forward `AUD/USD` rate? Is the AUD at a
   forward premium or discount?
2. A bank quotes `AUD/USD` 0.6400 – 0.6900. You want USD 3,000 cash and the
   bank charges 1% with a $10 minimum. What do you pay in AUD in total?
3. An exporter will receive JPY 50,000,000 in six months. Should it buy or
   sell AUD/JPY futures, and why?

**Answers**

1. Quote currency is USD, so `(1 + i_USD)` goes on top:
   `F = 0.6500 × (1.05 / 1.04) = **0.65625**`. One AUD buys more USD forward,
   so the AUD is at a forward **premium** — consistent with the AUD being the
   lower-yielding currency here.
2. `USD 3,000 ÷ 0.6400 = AUD 4,687.50` (you get the worse rate, and dividing
   by the smaller number costs you more). Fee `= Max[$10, 1% × 4,687.50] =
   $46.88`. **Total AUD 4,734.38.**
3. It will **receive** yen and want AUD, so it will **buy AUD / sell JPY**. On
   an AUD-denominated contract that makes it the **buyer**. Note this is the
   mirror image of the tutorial's importer, who was the seller — read which
   currency is flowing which way.

</details>

---

## Summary

- **`BASE/QUOTE = n` means 1 BASE = n QUOTE.** Multiply to go from base to
  quote, divide to come back. Sanity-check magnitudes.
- BIS percentages **sum to 200%** because every trade has two sides. USD is on
  88.4% of trades; the CNY is the fastest-growing share; AUD is around 6.4%.
- Bid–ask: **the customer always gets the worse of the two rates**, and the
  bank's income is **spread plus fees on both sides**. Worked total: AUD770.47.
- Fees are `Max[minimum, % × amount]` — the minimum binds only on small
  transactions.
- **Interest rate parity:** `F(BASE/QUOTE) = S × (1 + i_QUOTE)/(1 + i_BASE)`.
  The **quote** currency's rate is on top. The higher-yielding currency trades
  at a **forward discount**.
- Forward hedge worked answer: `F = 75.20 × 1.01/1.02 = 74.4627`, so
  `JPY 100m ÷ 74.4627 = **AUD 1,342,953**`. Use the unrounded rate.
- Hedging removes the downside **and** the upside — at `AUD/JPY 77.1` the
  agency would have paid AUD 1,297,017 unhedged.
- Futures hedge worked answer: `JPY 100m ÷ 81.31 ÷ AUD200,000 = 6.149`, so
  **7 contracts**, rounding **up** to be fully hedged. The company is the
  **seller** because the contract unit is denominated in AUD.
- Four hedging methods: **forward, futures, currency option, money market.**
  Parity is the reason the forward and money market hedges cost the same.
