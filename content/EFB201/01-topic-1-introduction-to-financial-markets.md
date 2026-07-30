# Topic 1 — Introduction to Financial Markets

**Reference:** Kidwell et al. chapters 1–2; CFA 2020 Level I Reading 36.

The whole topic is built on one framing: a financial market exists because
someone has money now and wants it later, and someone else wants money now and
can promise to repay later. Everything else — instruments, exchanges, orders,
intermediaries — is plumbing that makes that swap happen at a fair price.

---

## 1. The five motives for participating

The deck lists five. Learn them as a numbered list, because tutorial questions
ask you to classify a described person into one of them.

| # | Motive | Example |
|---|---|---|
| 1 | **Raise or save money** — move purchasing power between now and the future | An investor buys shares to fund retirement |
| 2 | **Profit by trading on information** | Buy low before others realise the price will rise; sell high after it does |
| 3 | **Manage risk** | Hedge against an unwanted move in a share price |
| 4 | **Exchange assets for immediate or future delivery** | Swap US dollars for euros |
| 5 | **Facilitate the above** — intermediaries | Brokers, dealers, banks, analysts, rating agencies |

### Surplus and deficit spending units

- A **surplus spending unit (SSU)** takes in more than it spends this period.
  It supplies funds.
- A **deficit spending unit (DSU)** spends more than it takes in. It demands
  funds.

Both households, businesses and governments can be either, and the label is
**period-specific** — the same family is an SSU one year and a DSU the next.

```
Now:        SSU  ──►  financial markets & intermediaries  ──►  DSU
Future:     SSU  ◄──  repayment + return                  ◄──  DSU
```

> **Read the budget, not the balance sheet.** A family with income $215,000 and
> budgeted expenditure $195,000 is a **surplus** spending unit for that budget
> period — $20,000 flows *into* the financial system. The distractor answer
> "a recipient of funds from the financial system" describes a DSU. Wealth is
> irrelevant; the question is whether this period's income exceeds this
> period's spending.

### Investor vs information-motivated trader vs hedger

This trio comes up repeatedly and the distinction is about **why** they trade,
not what they trade.

| Label | Defining feature |
|---|---|
| **Investor** | Accepts risk to earn a return over a horizon; holds a portfolio matched to their ability and willingness to take risk |
| **Information-motivated trader** | Believes they have information or an interpretation the market has not priced; trades to profit from the correction, then reverses |
| **Risk hedger** | Has a pre-existing exposure and takes an offsetting position to remove it |

> **The hedger test is "does an exposure already exist?"** An Australian
> manufacturer that owes BRL in three months and buys BRL futures is a
> **hedger** — the futures offset a liability she already has. If she had no
> Brazilian payable and bought the same futures because she thought the real
> would rise, the identical trade would make her an information-motivated
> trader. Same instrument, different classification.

---

## 2. Positions: long, short, leveraged

- **Long position** — you buy the asset. You gain when the price rises.
- **Short position** — you sell the asset. You gain when the price falls.
- **Leveraged position** — you borrow to amplify the outcome.

**Margin** is the percentage of the asset's value funded by the investor's own
equity.

```
Margin (leveraged long) = Equity / Total asset market value
```

Two leveraged forms:

- **Leveraged long** — borrow cash to buy more shares than your own money
  would allow. Profit if the sale price exceeds the purchase price.
- **Short selling** — borrow the *asset*, sell it now, buy it back later, and
  return it. Profit if the repurchase price is below the original sale price.

> **Short selling has a different margin definition, and it is examinable.**
> For a leveraged long, `margin = equity / total assets`. For a short,
> `margin = equity / debt`, because the debt is not a fixed sum of cash — it
> is *shares*, and their value moves. That distinction is set out in the
> Market Efficiency deck and worked in full in Topic 5.

### The number-of-shares calculation

The single most common calculation in this topic.

```
Total position value = Own money / Initial margin
Number of shares     = Total position value / Price per share
```

**Worked example (Intro tutorial Q10).** Stock at $25. You have $10,000.
Broker offers 40% initial margin, 30% maintenance margin.

```
Total position value = $10,000 / 0.40 = $25,000
Number of shares     = $25,000 / $25   = 1,000 shares
```

The answer is **1,000**, not 400. Your $10,000 is the *equity*; the broker
lends the other $15,000.

> **"How many shares can you buy at margin" means the total, including the
> borrowed portion.** Dividing $10,000 by $25 gives 400 — the unleveraged
> answer, and a distractor in every version of this question. Divide by the
> margin first, then by the price. The maintenance margin (30% here) is not
> used at all in this calculation; it only matters later, when the price
> falls.

The same structure works for a short. From the Market Efficiency tutorial: you
have $10,000, the stock is $100, initial margin 45%.

```
Value of shares that can be shorted = $10,000 / 0.45 = $22,222
Number of shares                    = $22,222 / $100 = 222.2 → 222 shares
```

This works because at the moment a short is opened, the **debt equals the sale
proceeds** (you borrowed shares worth exactly what you sold them for), so
`equity / debt` and `equity / position value` give the same number. They stop
agreeing the instant the price moves.

---

## 3. The GameStop case as taught

The deck uses GameStop (Jan–Feb 2021) to make leverage concrete. GameStop was
one of the most-shorted US stocks in late 2020 after digital distribution and
COVID hollowed out its in-store business; retail investors squeezed the
institutional shorts in January 2021.

### Scenario A — leveraged long that works

Sam has $2,600, buys at 50% initial margin on 4 Jan at $26, with a 25%
maintenance margin.

```
Total capital  = $2,600 / 0.50 = $5,200
Shares         = $5,200 / $26  = 200
Debt           = $5,200 − $2,600 = $2,600
```

On 27 Jan the price hits $470:

```
Position value = 200 × $470 = $94,000
Equity         = $94,000 − $2,600 = $91,400
Margin         = $91,400 / $94,000 = 97%          (no call — margin rose)
Gain           = $91,400 − $2,600  = $88,800
Return         = $88,800 / $2,600  = 3,415%
```

Unleveraged, $2,600 buys 100 shares and the gain is
`($470 − $26) × 100 = $44,400`, a 1,708% return. Leverage exactly doubled the
percentage return here because initial margin was 50%.

```
Leverage factor = 1 / Initial margin = 1 / 0.50 = 2×
```

> **Leverage multiplies the percentage return by `1/IM` only while the debt
> stays fixed and no margin call fires.** The moment a call forces you to
> inject cash, the denominator of your return changes and the clean `1/IM`
> relationship breaks — which is exactly what happens in Scenario B.

### Scenario B — leveraged long that fails

Sam buys at $470 on 27 Jan with the same $2,600 at 50% margin, so roughly 11
shares. The price then collapses. Each time equity/assets falls below the 25%
maintenance margin, the broker calls and Sam tops up.

| Date | Price | Position value | Debt | Equity | Margin | Call? |
|---|---|---|---|---|---|---|
| 27 Jan | $470 | $5,200 | $2,600 | $2,600 | 50% | No |
| 28 Jan | $400 | $4,426 | $2,600 | $1,826 | 41% | No |
| 2 Feb | $150 | $1,660 | $2,600 | −$940 | −57% | **Yes** — adds $1,807 |
| 3 Feb | $110 | $2,542 | $2,600 | −$58 | −2% | **Yes** — adds $924 |
| 5 Feb | $100 | $3,152 | $2,600 | $552 | 18% | **Yes** — sells out |

The **restoration rule** is the bit worth memorising. With debt fixed at
$2,600 and a maintenance margin of 25%:

```
Required equity / assets = 0.25
⇒ Assets − Debt = 0.25 × Assets
⇒ Assets = Debt / (1 − MM) = $2,600 / 0.75 = $3,466.67
⇒ Required equity        = $3,466.67 − $2,600 = $866.67
```

At $150 the position was worth $1,660, so Sam must buy up to $3,466.67 of
stock — an extra $1,806.67, which is the $1,807 in the table. The same
arithmetic at $110 gives the $924.

Reconciling the whole scenario:

```
Money in  = $2,600 + $1,807 + $924 = $5,331
Money out = final equity            = $552
Loss      = $552 − $5,331 = −$4,779   (deck says −$4,780 ✓)
Return on money committed = −$4,779 / $5,331 = −89.7%
```

> **Two numbers in this slide do not reconcile — do not memorise them.**
> (1) The deck reports the leveraged Scenario B return as **−43%**. No base
> reproduces that: the loss is −$4,779 on $5,331 committed, which is
> **−89.7%**. (2) The deck's "without leverage" comparison says $2,600 buys
> **11 shares at $470** for a −$4,070 loss. Unleveraged, $2,600 buys 5.53
> shares and loses `5.53 × ($100 − $470) = −$2,047`. Eleven shares at $470
> costs $5,170, which is only reachable *with* leverage. The dollar figure
> −$4,780 and the −79% price return are both correct; the −43% and the
> unleveraged comparison are not. Show the reconciliation and flag it if this
> comes up — and confirm with your tutor.

---

## 4. Execution: orders, quotes and the book

**Orders** are instructions given to brokers and exchanges. Every order
specifies the instrument, the quantity, and buy or sell. It may add: how long
it is valid, when it may execute, whether partial fills are acceptable, where
to present it, and with whom to trade.

**Dealers** who arrange their own trades do not use orders — they decide on
the spot and **quote**.

| Term | Meaning |
|---|---|
| **Bid** | The price a buyer will pay |
| **Offer / ask** | The price a seller will accept |
| **Bid–ask spread** | Ask − bid; the dealer's compensation |
| **Size** | The quantity attached to a bid or offer |

### Reading a limit order book

A **limit order** sets a worst acceptable price. A buy limit of $26 means "buy
at $26 or lower".

Matching under the **discriminatory pricing rule** in a continuous
order-driven market: standing limit orders determine the trade price, and
incoming orders are matched **best price first**.

**Worked example (deck).** Sam submits at 9:36am: buy 100 GameStop, limit $26.
The book:

| Bid price | Size | Trader | | Ask price | Size | Trader | Instruction |
|---|---|---|---|---|---|---|---|
| $25.80 | 50 | Jenny | | $26.80 | 100 | Tom | |
| $25.60 | 100 | John | | $26.70 | 150 | Kat | |
| $25.40 | 90 | Mike | | $26.00 | 80 | Linda | **all or nothing** |
| $25.00 | 70 | James | | $25.80 | 40 | Peter | |

Work down the ask side from the best (lowest) price:

1. **Peter, 40 @ $25.80** — inside Sam's $26 limit. Fills. 60 shares left.
2. **Linda, 80 @ $26.00** — at Sam's limit, but marked *all or nothing*. Only
   60 remain, so Linda cannot fill at all.
3. **Kat at $26.70 and Tom at $26.80** — above Sam's limit. No fill.

Sam gets **40 shares**; 60 rest on the book as a standing bid at $26.

> **All-or-nothing is why Linda misses out, and it is the whole point of the
> example.** Without that instruction Linda would fill 60 and Sam would be
> done. Any question that puts a condition in the "other instructions" column
> is testing whether you applied it.

> **The deck says Sam "gets 40 shares at $26" — but the fill price should be
> $25.80.** The deck's own classification slide states that under the
> discriminatory pricing rule *standing limit orders determine trade prices*.
> Peter's standing ask is $25.80, so that is the trade price; $26.00 is only
> Sam's limit. (The deck's "after" table also re-prices Peter to $25.90, which
> looks like a typo.) Both readings give 40 shares, so the exam answer is
> unaffected — but if a question asks for the **cash paid**, use the standing
> order's price and say so.

### Tutorial version — a sell order

Book:

| Bid | Size | Price | | Ask price | Size | Seller |
|---|---|---|---|---|---|---|
| Jeremy | 300 | 20.02 | | 20.03 | 800 | Jenny |
| Meredith | 300 | 19.89 | | 20.11 | 1,000 | David |
| Anna | 200 | 19.84 | | 20.16 | 400 | Sean |
| Peter | 900 | 19.70 | | | | |

Sam submits a **day order to sell 1,000, limit 19.83**. Work down the bid side
from the best (highest):

```
Jeremy   300 @ 20.02  ✓  (≥ 19.83)   running total 300
Meredith 300 @ 19.89  ✓               running total 600
Anna     200 @ 19.84  ✓               running total 800
Peter    900 @ 19.70  ✗  (< 19.83)    stop

Filled 800 / 1,000 = 80%
```

> **Direction flips which end of the book you start from.** A *sell* order
> walks the **bid** side from the **highest** price down and stops when the
> bid drops below your limit. A *buy* order walks the **ask** side from the
> **lowest** price up and stops when the ask exceeds your limit. Sorting the
> wrong way is the single easiest way to lose this mark.

### Volume-weighted average price

If a single order fills against several standing orders at different prices,
the effective price paid is the volume-weighted average:

```
VWAP = Σ (Price_i × Quantity_i) / Σ Quantity_i
```

**Worked example.** Fills of 200 @ $48.12, 300 @ $48.10 and 400 @ $48.08:

```
(48.12 × 200) + (48.10 × 300) + (48.08 × 400)
= 9,624 + 14,430 + 19,232 = 43,286
43,286 / 900 = $48.0956
```

> **VWAP weights by quantity, not by the number of price levels.** The simple
> average of $48.12, $48.10 and $48.08 is $48.10 — three cents wrong per
> share, because most of the volume traded at the cheapest level. If the
> question gives you sizes, they are there to be used.

<details><summary>Checkpoint — positions and orders</summary>

1. You have $8,000, the stock is $40, and initial margin is 25%. How many
   shares can you buy on margin?
2. A trader submits a buy order, limit $50. The best ask is $49.60 for 200
   shares, then $50.00 for 300 (all-or-nothing), then $50.40 for 500. The order
   is for 400 shares. How many fill?
3. A company hedges a euro payable with a futures contract. Is it a hedger or
   an information-motivated trader?

**Answers**

1. `$8,000 / 0.25 = $32,000; $32,000 / $40 = **800 shares**`. Leverage factor
   is 4×.
2. **200 shares.** The $49.60 level fills 200. The $50.00 level is at the
   limit but all-or-nothing for 300, and only 200 of the order remains. The
   $50.40 level is above the limit.
3. **Hedger** — the exposure (the payable) exists before the trade.

</details>

---

## 5. Classifying financial markets

Four independent cuts. A single instrument gets a label under each.

### By instrument

| Market | Contents |
|---|---|
| **Fixed income** | Retail private debt (credit cards, car loans, mortgages), company private debt, corporate bonds, government bonds, notes and bills, asset-backed obligations |
| **Equity** | Private equity shares, listed ordinary and preference shares, securitised debt products (structured finance) |
| **Foreign exchange** | Currency pairs |
| **Derivatives** | Options, swaps, forwards, futures |

### By time of entry

- **Primary market** — the first time a claim on a future payoff is available
  for purchase. Think of buying a new car. Examples: an IPO, a bond issue, the
  signing of a bank loan contract.
- **Secondary market** — buying and selling the claim after that first sale.
  Think of the used-car market. Examples: trading a listed share, one bank
  selling a loan to another before maturity.

The deck gives a reason secondary markets must exist: they let an SSU hold a
claim whose **maturity is longer than the SSU's own investment horizon**,
because the SSU can exit before maturity.

> **An IPO is a primary-market transaction even though it happens on the ASX.**
> "An oil and gas company offers 30 million shares to the public at $45.50" is
> a **primary** market sale. Every trade in those shares from the next day
> onward is secondary. The venue tells you nothing about which it is — only
> whether it is the *first* sale does.

### By maturity

| Maturity | Market | Examples |
|---|---|---|
| **≤ 1 year** | Money market | Credit card balances, Treasury bills/notes, commercial paper, bank accepted bills |
| **> 1 year** | Capital market | Ordinary shares, a 10-year corporate bank loan, a 30-year household mortgage |

The deck poses "what is the maturity of a stock share?" Shares have **no fixed
maturity**, which is why they sit in the capital market by convention — an
infinite maturity is certainly greater than a year.

> **Match the horizon to the market.** Financing 2036 Olympic infrastructure
> is a **capital market** job, not a money market one — the funding need runs
> for years. Conversely a 90-day instrument is a money-market instrument no
> matter who issued it.

### By organisation of trade

| | Order-driven | Quote-driven (OTC / dealer) |
|---|---|---|
| **How prices form** | Orders ranked by best price, largest displayed size, and/or earliest arrival; standing limit orders set trade prices (discriminatory pricing rule) | Customers trade at prices quoted by a dealer |
| **Typical instruments** | Listed shares, ETFs, options, futures | Forwards, bonds, currencies — listed or unlisted |
| **Venue** | Exchanges, alternative trading platforms | Bilateral, over the counter |

> **The ASX in 2023 is an "electronic organised exchange" — not a physical
> one and not OTC.** Trading floors were retired long ago. The distractor
> "all of the above" is wrong precisely because organised-exchange and OTC are
> mutually exclusive descriptions of the same venue.

---

## 6. What a well-functioning market delivers

The deck closes the loop back to the five motives. In an efficient,
well-functioning market:

- **SSUs** can easily move money from the present to the future while earning
  a fair rate of return for the risk they bear;
- **DSUs** can easily obtain funds for current projects if they can credibly
  promise repayment;
- **Hedgers** can easily trade away or offset the risks that concern them;
- **Information-motivated traders** can easily trade on their interpretation
  of information.

Each bullet maps to one motive. That mapping is the likely form of a short
written question: *"Which of the five motives were present in the GameStop
short squeeze?"* All of them were — retail investors trading on their
interpretation of information (2), hedge funds managing and then failing to
manage risk (3), brokers and clearing houses facilitating (5), and ordinary
investors saving (1). Only "exchange assets for immediate and future delivery"
(4) is a stretch, and only until you count the options market.

<details><summary>Checkpoint — classification</summary>

1. A Queensland government bond bought from another investor two years after
   issue. Classify it on all four cuts.
2. Highly liquid instruments with 90-day maturity trade in which market?
3. Why does the existence of a secondary market matter to an SSU with a
   two-year horizon?

**Answers**

1. **Instrument:** fixed income. **Time of entry:** secondary. **Maturity:**
   capital market (a government bond runs well beyond a year). **Organisation:**
   quote-driven / OTC — bonds trade over the counter.
2. The **money market** — 90 days is under a year. Not the bond market (that
   is the capital-market end of fixed income) and not the share market.
3. Because it lets the SSU buy a claim with a maturity **longer** than two
   years and still exit at the two-year mark by selling to someone else. Without
   a secondary market the SSU could only buy claims maturing inside its horizon.

</details>

---

## Summary

- Financial markets exist to move funds from **surplus** to **deficit**
  spending units, and the label is set by **this period's budget**, not by
  wealth.
- Five motives: raise/save, trade on information, manage risk, exchange assets
  for delivery, and facilitate. Classify people by *why* they trade — the
  hedger test is whether an exposure already exists.
- Long, short and leveraged positions. `Position value = own money / IM`, then
  divide by price for the share count. Leverage factor is `1/IM`.
- Leveraged long margin is `equity / total assets`; short margin is
  `equity / debt`. They coincide only at the moment a short is opened.
- Margin-call restoration for a long with fixed debt:
  `Assets = Debt / (1 − MM)`.
- Orders walk the book **best price first** — asks from the lowest for a buy,
  bids from the highest for a sell. Honour "all or nothing". Standing limit
  orders set the price.
- Four independent classifications: instrument, time of entry (primary /
  secondary), maturity (money / capital), organisation (order-driven /
  quote-driven).
- The GameStop slides teach the right method with several unreliable numbers.
  The **method** is examinable; check the arithmetic yourself.
