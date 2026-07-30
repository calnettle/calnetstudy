# Extra Practice Questions

Exam-style questions across all ten topics. Every numerical answer was
computed independently before being written down. Work them with a calculator
and a blank page before opening the answers.

---

## Section A — Introduction to Financial Markets

**A1.** During the 2026 financial year the Nguyen household expects income of
$148,000 and has budgeted expenditure of $161,000. For that period the
household is most specifically a:

a. surplus spending unit
b. deficit spending unit
c. financial intermediary
d. quote-driven market participant

**A2.** You have **$21,000** and your broker offers leveraged long positions
at **35% initial margin** and **25% maintenance margin**. The share trades at
**$60**.

1. How many shares can you buy in total?
2. What is the loan?
3. At what share price does the margin call fire?

**A3.** A market has the following limit orders standing on its book:

| Bid price | Size | Buyer | | Ask price | Size | Seller | Instruction |
|---|---|---|---|---|---|---|---|
| 12.05 | 500 | Ravi | | 12.18 | 400 | Priya | |
| 12.02 | 1,500 | Tom | | 12.24 | 900 | Wei | |
| 11.99 | 1,000 | Ines | | 12.30 | 600 | Amara | |
| 11.90 | 800 | Josh | | | | | |

A trader submits a day order to **sell 3,500 shares, limit 11.95**. No further
buy orders arrive.

1. What percentage of the order is filled?
2. What is the volume-weighted average price received?

**A4.** Classify each of the following on all four cuts (instrument, time of
entry, maturity, organisation of trade):

1. A 90-day bank accepted bill bought from another investor
2. A newly listed company's IPO shares purchased in the float

<details><summary>Answers — Section A</summary>

**A1.** **b. deficit spending unit.** Expenditure ($161,000) exceeds income
($148,000), so the household demands $13,000 from the financial system. Wealth
is irrelevant — the label is set by this period's budget.

**A2.**

```
1. Position value = $21,000 / 0.35 = $60,000
   Shares         = $60,000 / $60  = 1,000 shares

2. Loan = $60,000 − $21,000 = $39,000

3. Margin call when equity/assets < 25%, with debt fixed at $39,000:
      Assets at the trigger = Debt / (1 − MM) = $39,000 / 0.75 = $52,000
      Price                 = $52,000 / 1,000 = $52.00

   Check: (52,000 − 39,000) / 52,000 = 13,000 / 52,000 = 25%  ✓
```

The call fires as soon as the price falls **below $52.00**.

**A3.** A **sell** order walks the **bid** side from the **highest** price
down, filling while the bid is at or above the 11.95 limit.

```
Ravi   500   @ 12.05  ✓   running 500
Tom  1,500   @ 12.02  ✓   running 2,000
Ines 1,000   @ 11.99  ✓   running 3,000
Josh   800   @ 11.90  ✗   below the 11.95 limit — stop

1. Filled 3,000 / 3,500 = 85.7%

2. VWAP = (12.05 × 500 + 12.02 × 1,500 + 11.99 × 1,000) / 3,000
        = (6,025 + 18,030 + 11,990) / 3,000
        = 36,045 / 3,000
        = $12.015
```

The ask side is a decoy — a seller never trades against other sellers.

**A4.**

1. **Fixed income; secondary; money market (90 days ≤ 1 year); quote-driven /
   OTC.**
2. **Equity; primary (it is the first sale of the claim); capital market
   (shares have no fixed maturity); order-driven** once listed — although the
   float allocation itself is arranged by the underwriter, not by the book.

</details>

---

## Section B — Fixed Income and Equity Parts A and B

**B1.** Which of the following is **not** a characteristic of an ideal money
market instrument?

a. Low default risk
b. Short term to maturity
c. Small denomination
d. High marketability

**B2.** True or false, with a reason:

1. "A repurchase agreement calls for the borrower to buy securities with an
   agreement to sell them back after a short period at a higher price."
2. "An Australian Treasury note and a US Treasury note describe instruments of
   the same maturity."
3. "A Eurobond issued in Japan in March 2024 is denominated in yen."
4. "A bond issued by the Victorian government is a sovereign bond."

**B3.** Price a bond with **face $1,000**, a **4% annual coupon**, **6 years**
to maturity, when the market requires **5.5%**. Is it at a premium or a
discount, and why?

**B4.** A bond has face $1,000, an 8% annual coupon, 6 years to maturity, and
trades at **$1,085**.

1. Compute the current yield.
2. Estimate the YTM using the approximation formula.
3. The exact YTM is 6.257%. Comment on the ordering of coupon rate, current
   yield and YTM, and on the size of the approximation error.

**B5.** Sixteen banks submit the following rates for a day's LIBOR fixing (%):

```
5.200  5.200  5.200  5.205  5.205  5.205  5.205  5.205
5.205  5.210  5.210  5.210  5.210  5.220  5.220  5.250
```

What is LIBOR for that day?

**B6.** A company reports total assets of $54m, total liabilities of $28m,
net income of $3.6m, and an opening book value of equity of $22m. There are
1.6 million shares outstanding trading at $31.50.

1. Book value of equity at year end.
2. ROE on both definitions.
3. Market-to-book ratio.

**B7.** The industry P/E for specialty retailers is 18 and you forecast EPS of
$2.45. The share currently trades at $41. What is your recommendation, and what
assumption does it rest on?

<details><summary>Answers — Section B</summary>

**B1.** **c. Small denomination.** Money market instruments are **wholesale** —
large denominations are what make the per-dollar transaction cost negligible.

**B2.**

1. **False.** The **borrower sells** securities with an agreement to **buy
   them back** later at a higher price. The description given is the lender's
   side (a reverse repo).
2. **False.** An Australian Treasury **note** has a maturity of one year or
   less; a US Treasury **note** runs 1–10 years. The Australian equivalent of
   a US Treasury bill is the Australian Treasury note.
3. **False.** A Eurobond is issued **outside the jurisdiction of the currency
   in which it is denominated**. If it is issued in Japan it is denominated in
   something *other* than the yen.
4. **False.** Sovereign means **national**. A Victorian government bond is a
   **local** (sub-sovereign) issue.

**B3.**

```
C = 4% × $1,000 = $40

Annuity factor  = [1 − 1.055⁻⁶] / 0.055 = 4.995530
PV of coupons   = 40 × 4.995530          = 199.82
PV of principal = 1,000 / 1.055⁶         = 725.25
                                           ───────
Price                                    = $925.07
```

A **discount**, because the coupon rate (4%) is below the market required
return (5.5%). The buyer needs the capital gain from $925.07 to $1,000 to make
up the shortfall in coupon income.

**B4.**

```
1. Current yield = C / P = $80 / $1,085 = 7.373%

2. Approximation:
      Numerator   = 80 + (1,000 − 1,085)/6 = 80 − 14.1667 = 65.8333
      Denominator = (1,000 + 1,085)/2      = 1,042.50
      Approx YTM  = 65.8333 / 1,042.50     = 6.315%

3. Ordering: coupon 8.000% > current yield 7.373% > YTM 6.257%.
   That is the PREMIUM ordering, and it is correct — the bond trades above
   par, so the guaranteed capital LOSS of $85 over six years drags the total
   return below the current yield.

   Approximation error = 6.315% − 6.257% = +0.058 percentage points, i.e. the
   shortcut is about 6 basis points HIGH here. (On a discount bond it runs
   low.) Use the exact DCF whenever candidate answers are within ~10bp.
```

**B5.** Sorted already. Drop the lowest four (`5.200 ×3` and one `5.205`) and
the highest four (`5.250, 5.220, 5.220, 5.210`).

```
Remaining eight: 5.205  5.205  5.205  5.205  5.205  5.210  5.210  5.210

Sum   = (5.205 × 5) + (5.210 × 3) = 26.025 + 15.630 = 41.655
LIBOR = 41.655 / 8 = 5.206875%
```

Note the trap: only **three** banks submitted 5.200, so the fourth trimmed
value is one of the 5.205s.

**B6.**

```
1. Closing BVE = $54m − $28m = $26m

2. Beginning-balance ROE = 3.6 / 22             = 16.36%
   Average-balance ROE   = 3.6 / [(22+26)/2]
                         = 3.6 / 24             = 15.00%
   Both are defensible — name the one you used. The deck's worked
   example uses the average.

3. Market value = 1.6m × $31.50 = $50.4m
   Market-to-book = 50.4 / 26   = 1.94
```

**B7.**

```
Target price = 18 × $2.45 = $44.10
Market price = $41.00
Gap          = 44.10 / 41.00 − 1 = +7.6% upside
```

**Buy** (or at least a positive-lean Hold given the modest gap). The assumption
is **comparability** — that this retailer's growth, risk and accounting
policies match the peer group behind the industry P/E of 18. If it grows
slower or is riskier than its peers, an 18× multiple overstates its fair value
and the 7.6% "upside" disappears.

</details>

---

## Section C — Part C and Market Efficiency

**C1.** The risk-free rate is **2.5%**, the expected market return is **8.5%**,
and a stock's beta is **1.25**.

1. Compute the expected return under CAPM.
2. Another stock has a standard deviation of 34% and a beta of 0.7. Our first
   stock has a standard deviation of 21%. Which has more total risk, and which
   has more market risk?
3. Your own estimate for the first stock is 13%. Give three explanations that
   do not require the market to be irrational.

**C2.** Classify as systematic or non-systematic: (i) the RBA raises the cash
rate; (ii) a mine collapses at a single producer's site; (iii) a global
pandemic; (iv) a company loses a patent lawsuit.

**C3.** True or false, with reasons:

1. "Under CAPM the average beta of all assets in the market is zero."
2. "An asset with beta −0.8 has a higher expected return than an asset with
   beta +0.8."
3. "Diversification eliminates total risk."
4. "The correlation between a risk-free asset and a risky asset is −1."

**C4.** A fund manager consistently earns excess returns by reading and
analysing companies' published annual reports. Which forms of market efficiency
are contradicted?

**C5.** You have **$18,000** and short a stock at **$45** with a **50% initial
margin** and a **30% maintenance margin**.

1. How many shares can you short?
2. At what price does the margin call fire?

**C6.** Explain, in no more than four sentences, why a test of market
efficiency using CAPM cannot by itself prove that a market is inefficient.

<details><summary>Answers — Section C</summary>

**C1.**

```
1. Market risk premium = 8.5% − 2.5% = 6.0%
   E(R) = 2.5% + 1.25 × 6.0% = 2.5% + 7.5% = 10.0%

2. TOTAL risk  → the second stock  (SD 34% > 21%)
   MARKET risk → the first stock   (β 1.25 > 0.70)
   Standard deviation and beta rank them oppositely — read which the
   question asks for.

3. (i) CAPM prices only market risk, so it misses other priced systematic
   factors; a multi-factor model would give a higher required return.
   (ii) The index used as the market proxy understates true market risk,
   biasing E(R_m) − R_f downward.
   (iii) Your estimate reflects information CAPM has not captured, in which
   case CAPM is undervaluing the stock.
```

**C2.** (i) **Systematic** — a policy rate affects every asset. (ii)
**Non-systematic** — one producer. (iii) **Systematic**. (iv)
**Non-systematic** — firm-specific, although a landmark ruling could have
industry-wide implications, which is worth a sentence.

**C3.**

1. **False.** The average beta of all assets in the market is **1** — the
   market's correlation with itself.
2. **False.** `E(R) = R_f + β × MRP`. A negative beta produces a return
   **below** the risk-free rate. With `R_f = 2.5%` and `MRP = 6%`:
   `β = +0.8 → 7.3%`; `β = −0.8 → −2.3%`.
3. **False.** Diversification eliminates **non-systematic** risk only.
   Systematic risk remains, so total risk falls but never reaches zero.
4. **False.** The risk-free asset has **zero variance**, so zero covariance
   with anything, so **correlation zero**.

**C4.** Annual reports are **public** information. That contradicts
**semi-strong form** efficiency, and because strong form nests semi-strong,
**strong form is contradicted too**. Weak form is not contradicted — nothing
here involves past price patterns. So: **two forms**.

**C5.**

```
1. Value that can be shorted = $18,000 / 0.50 = $36,000
   Shares                    = $36,000 / $45  = 800 shares

   Sale proceeds = $36,000; cash deposit = $18,000; total = $54,000

2. Short margin = equity / debt = (proceeds + deposit − debt) / debt
   Call when that falls below 30%:
      (54,000 − D) / D = 0.30
      54,000 = 1.30 D
      D = $41,538.46
      Price = $41,538.46 / 800 = $51.92

   Check: (54,000 − 41,538.46) / 41,538.46 = 12,461.54 / 41,538.46 = 30%  ✓
```

The call fires as the price **rises above $51.92** — the opposite direction
from a long, because a short loses when the price goes up.

**C6.** Because it is a **joint test of market efficiency and the pricing
model**. A non-zero excess return could mean the market is inefficient, or it
could mean CAPM has failed to capture a systematic risk factor that genuinely
warrants compensation. There is no way to separate the two from the data
alone. Even the sign of the result is ambiguous: zero excess return could mean
efficiency, or that investors already corrected the mispricing in a way the
data cannot show — and none of it accounts for transaction costs, so an
apparent mispricing may never have been exploitable.

</details>

---

## Section D — Derivatives

**D1.** Classify each: (i) a convertible bond; (ii) an exchange-traded put
option; (iii) an interest rate swap; (iv) an index-tracking ETF; (v) a callable
bond.

Use the categories: stand-alone derivative / embedded derivative / not a
derivative. Then, for the derivatives, say whether each is a forward
commitment or a contingent claim.

**D2.** A pension fund holds an equity portfolio worth **$12.5 million** that
tracks an index currently at **2,500**. Index futures have a contract unit of
**$25 × index**, an initial margin of $9,000 per contract and a maintenance
margin of $6,500 per contract. The fund will liquidate in three months and
wants to lock in today's value.

1. Long or short, and how many contracts?
2. The index settles at **2,540** the next day. What is the mark-to-market
   flow, and in which direction?
3. What is the fund's margin balance per contract after that settlement, and is
   there a margin call?

**D3.** A call option on a share has a strike of **$70** and a premium of
**$4.20**. A put on the same share, same expiry, has a strike of **$70** and a
premium of **$5.60**.

1. At an expiry price of $64, state each buyer's action and net cash flow per
   share.
2. At an expiry price of $78, do the same.
3. State the call buyer's cost ceiling and the put buyer's proceeds floor.

**D4.** An Australian coffee roaster will need 30,000 kg of green coffee beans
in six months. Coffee futures have a contract unit of 15,000 kg.

1. Buyer or seller, and how many contracts?
2. The roaster instead signs an OTC forward with a single supplier. Give one
   advantage and one disadvantage relative to the futures hedge.

**D5.** Why do call option writers buy the underlying share, and what did that
behaviour do during the GameStop episode?

<details><summary>Answers — Section D</summary>

**D1.**

| Instrument | Category | Type |
|---|---|---|
| Convertible bond | **Embedded** derivative | Contingent claim (the holder chooses whether to convert) |
| Exchange-traded put | **Stand-alone** derivative | **Contingent claim** |
| Interest rate swap | **Stand-alone** derivative | **Forward commitment** (OTC) |
| Index-tracking ETF | **Not a derivative** | — it **passes through** the underlying's return |
| Callable bond | **Embedded** derivative | Contingent claim (the issuer chooses whether to call) |

**D2.**

```
1. The fund OWNS the portfolio and will SELL it → SHORT futures.

   Contract value = $25 × 2,500 = $62,500
   Contracts      = $12,500,000 / $62,500 = 200 contracts

2. New contract value = $25 × 2,540 = $63,500
   Change per contract = +$1,000
   The price ROSE and the fund is SHORT, so the fund PAYS.
   Total flow = 200 × $1,000 = $200,000 OUT of the fund's margin account.

3. Balance per contract = $9,000 − $1,000 = $8,000
   $8,000 > $6,500 maintenance margin → NO margin call.
```

Note the hedge is still working: the fund lost $200,000 on the futures but its
$12.5m portfolio gained `12.5m × (2,540/2,500 − 1) = $200,000`. Net zero,
which is the point.

**D3.**

```
1. EXPIRY $64
   CALL (strike 70): $64 < $70 → OUT of the money → do not exercise.
        Buy in the market at $64.
        Net cash flow = −4.20 − 64.00 = −$68.20
   PUT  (strike 70): $64 < $70 → IN the money → exercise, sell at $70.
        Net cash flow = −5.60 + 70.00 = +$64.40

2. EXPIRY $78
   CALL: $78 > $70 → IN the money → exercise, buy at $70.
        Net cash flow = −4.20 − 70.00 = −$74.20
   PUT:  $78 > $70 → OUT of the money → do not exercise, sell at $78.
        Net cash flow = −5.60 + 78.00 = +$72.40

3. Call buyer's cost CEILING   = strike + premium = 70 + 4.20 = $74.20
   Put buyer's proceeds FLOOR  = strike − premium = 70 − 5.60 = $64.40
```

Both ceiling and floor show up directly in the answers above — that is a good
way to check your arithmetic.

**D4.**

```
1. The roaster will BUY beans → BUYER (long) of the futures.
   Contracts = 30,000 / 15,000 = 2 contracts.

2. ADVANTAGE of the OTC forward: it can be customised to the roaster's exact
   quantity, bean grade, delivery date and delivery point, so the hedge is
   exact rather than approximate.
   DISADVANTAGE: counterparty risk. The entire payoff occurs at expiration,
   so a large loss by the supplier could trigger a default with no clearing
   house standing behind it. The forward is also illiquid — the roaster cannot
   easily unwind it.
```

**D5.** A call writer is short the upside: if the share rises above the strike
the writer must deliver a share it does not own, buying it at whatever the
market then charges — an unlimited loss. **Buying the share up front caps that
exposure.** In the GameStop episode, retail demand for calls surged because
options let investors "soup up" a bullish bet for a fraction of the share
price. The writers responded by **buying stock to hedge**, that buying **pushed
the price up**, and the rising price **fuelled the short squeeze** by forcing
short sellers into margin calls.

</details>

---

## Section E — Foreign Exchange, Ethics and Modern Analysis

**E1.** A bank quotes **AUD/USD 0.6250 – 0.6810** for foreign cash. You buy
**USD 8,000** and, separately, a US visitor sells **USD 8,000**. The bank
charges 1% of the transaction amount, minimum AUD 10, on each side.

1. What do you pay in AUD before fees?
2. What does the visitor receive in AUD before fees?
3. What is the bank's total income from the pair?

**E2.** `AUD/USD` spot is **0.6600**. The one-year AUD interest rate is
**4.35%** and the one-year USD rate is **4.85%**.

1. Compute the one-year forward `AUD/USD` rate.
2. Is the AUD at a forward premium or discount, and is that consistent with the
   interest rates?

**E3.** Sixteen banks set a benchmark by the LIBOR method. Fifteen banks submit
(%):

```
2.100  2.100  2.100  2.100
2.105  2.105  2.105  2.105  2.105
2.110  2.110  2.110  2.110  2.110
2.120
```

Bank Q believes the honest rate is **2.110%**. It pays floating on a **USD 2
billion** swap.

1. What is the benchmark if Bank Q is honest?
2. What if Bank Q submits 2.100%?
3. How much does Bank Q save by manipulating, and which CFA Standard does it
   breach?

**E4.** A financial adviser recommends a leveraged structured note to a
75-year-old client who has told them only that they want "something safe with
a bit more return than a term deposit". The adviser does not provide the
product disclosure statement. The note later performs well and the client
profits. Has the adviser breached any Standard?

**E5.** An analyst covering a mining company writes: *"Peers achieve 22% IRR at
current prices; if the copper price falls 10% our IRR drops to 13%; we
recommend proceeding."* Which workflow step is missing, and why does its
absence undermine the recommendation?

**E6.** Two analysts cover the same company, define the same scope, and read
the same announcements. One recommends BUY with 20% upside; the other
recommends SELL. Explain the two mechanisms by which this happens.

<details><summary>Answers — Section E</summary>

**E1.**

```
1. You BUY USD, so the bank sells you USD and gives you the worse rate.
   USD 8,000 ÷ 0.6250 = AUD 12,800.00

2. The visitor SELLS USD, so the bank buys at the other end.
   USD 8,000 ÷ 0.6810 = AUD 11,747.43

3. Spread          = 12,800.00 − 11,747.43              = AUD 1,052.57
   Fee on you      = Max[10, 1% × 12,800.00] = 128.00
   Fee on visitor  = Max[10, 1% × 11,747.43] = 117.47
                                                          ───────────
   Total income    = 1,052.57 + 128.00 + 117.47          = AUD 1,298.04
```

**E2.**

```
1. Quote currency is USD, so (1 + i_USD) goes on top:
      F = 0.6600 × (1.0485 / 1.0435) = 0.6600 × 1.0047916 = 0.66316

2. One AUD buys MORE USD forward (0.66316 > 0.66000), so the AUD is at a
   forward PREMIUM. That is consistent: the AUD is the LOWER-yielding
   currency (4.35% < 4.85%), and the lower-yielding currency must trade at a
   forward premium — otherwise you could borrow AUD, deposit USD, and lock in
   a risk-free profit.
```

**E3.**

```
1. HONEST — Bank Q submits 2.110. Sixteen values:
      2.100 ×4 | 2.105 ×5 | 2.110 ×6 | 2.120
   Drop lowest four (the 2.100s) and highest four (2.120 + three 2.110s):
      Remaining: 2.105 ×5, 2.110 ×3
      Sum   = 10.525 + 6.330 = 16.855
      LIBOR = 16.855 / 8 = 2.106875%

2. MANIPULATED — Bank Q submits 2.100. Sixteen values:
      2.100 ×5 | 2.105 ×5 | 2.110 ×5 | 2.120
   Drop lowest four (four of the five 2.100s) and highest four
   (2.120 + three 2.110s):
      Remaining: 2.100, 2.105 ×5, 2.110 ×2
      Sum   = 2.100 + 10.525 + 4.220 = 16.845
      LIBOR = 16.845 / 8 = 2.105625%

3. Reduction = 2.106875% − 2.105625% = 0.001250 percentage points
   Saving     = $2,000,000,000 × 0.0000125 = $25,000 per annum
```

Bank Q pays **floating**, so a lower benchmark reduces what it pays — hence
the incentive to understate. The breach is **Standard II(B) Market
Manipulation** (distorting a price with intent to mislead market
participants), with **VI Conflicts of Interest** and **I Professionalism** also
engaged. Note the single bank moves the benchmark only 0.00125% because of the
trimming — which is why real manipulation required collusion.

**E4.** **Yes — several, and the profitable outcome is irrelevant.**

- **III(C) Suitability** — no reasonable inquiry into the client's investment
  experience, risk and return objectives or financial constraints before the
  recommendation, and the product plainly conflicts with the stated objective
  of "something safe".
- **III(A) Loyalty, Prudence and Care** — failing to exercise prudent
  judgement and to place the client's interests first.
- **I Professionalism** and arguably **V Investment Analysis,
  Recommendations, and Actions** — failing to provide the disclosure document
  and the basis for the recommendation.

Ethics is judged on the **process at the time of the advice**, not on the
outcome. This is the Hong Kong Minibond fact pattern in miniature.

**E5.** **Step 3 — building the base case model** (projected cash flows, NPV
and IRR for *this* project).

The analyst has jumped from research (Step 2 peer base rates) straight to
sensitivity (Step 4). Without a base case there is **no baseline for the
sensitivity to move from** — "IRR drops to 13%" is meaningless unless you know
what this mine's IRR is at current prices. Peers achieving 22% is a base rate,
not a forecast. The recommendation therefore rests on an assumption that was
never documented or tested.

**E6.** Two mechanisms, both traceable to specific steps.

1. **Peer-set and base-rate selection in Step 2.** Choosing successful
   comparables and tier-1 base rates produces a high starting point; choosing
   failed comparables and tier-2 base rates produces a low one. The NEXTDC
   example: Equinix in Asia at 25% IRR and Singapore at 95% utilisation, versus
   Global Switch's Indonesia exit and Jakarta at 60% utilisation.
2. **Probability weights and framing in Step 4.** One analyst assigns 60% base
   / 30% bull / 10% bear and emphasises **mitigants** (pre-lease anchors,
   government support); the other assigns 30% / 10% / 60% and emphasises
   **amplifiers** (no local operating history, regulatory uncertainty, unhedged
   currency exposure).

Neither analyst is dishonest, and both followed the workflow. The divergence
is created by defensible judgement calls made early and compounded downstream
— which is exactly why the deck insists that the scope note fixes the peer set
before research begins.

</details>

---

## Section F — Rapid-fire concept check

Twenty one-line questions. Aim for under ten minutes.

1. Two names for the amount a bond issuer repays at maturity.
2. Formula for the number of shares in a leveraged long.
3. Which form of efficiency does insider profitability contradict?
4. Margin definition for a **short** position.
5. Contract unit of the CME Micro WTI Crude Oil future.
6. Which side of a futures contract gains when the price falls?
7. Moneyness condition for a put to be in the money.
8. Break-even proceeds on a protective put.
9. What does `AUD/JPY 75.20` mean?
10. Which currency's interest rate sits in the numerator of the interest rate
    parity formula?
11. How many submissions survive the LIBOR trim when sixteen banks submit?
12. Average beta of all assets in the market.
13. Which risk measure captures total risk, and which captures market risk?
14. Two ways to compute ROE.
15. Formula for a P/E target price.
16. The three exceptions to CFA Standard III(E).
17. Which CFA Standard does the LIBOR scandal principally breach?
18. Base case = which of best case / expected case / worst case?
19. The five-step analyst workflow, in order.
20. What does the sign of `ROIC − WACC` tell you?

<details><summary>Answers — Section F</summary>

1. Any two of: **par value, face value, principal value, nominal value,
   redemption value, maturity value**.
2. `Shares = (Own money / Initial margin) / Price`.
3. **Strong form** only.
4. `Margin = Equity / Debt`, where equity =
   `sale proceeds + cash deposit − current value of the borrowed shares`.
5. **100 barrels.**
6. The **seller (short)**.
7. **Underlying below the strike.**
8. `Strike − premium`.
9. **1 AUD = 75.20 JPY.** AUD is the base, JPY the quote.
10. The **quote** currency's rate: `F = S × (1 + i_quote)/(1 + i_base)`.
11. **Eight** — drop the top four and bottom four.
12. **1.**
13. **Standard deviation** (or variance) = total risk; **beta** = market risk.
14. `NI / opening BVE` or `NI / average of opening and closing BVE`.
15. `Target price = P/E × forecast EPS`.
16. The information concerns the client's **illegal activity**; disclosure is
    **required by law**; the client **permits** disclosure.
17. **II(B) Market Manipulation.** (Not II(A) — this is manipulation, not
    insider trading.)
18. **Expected case** — including the identified change, but not at an extreme.
19. **Scope → research → base case → stress test → recommendation.**
20. Positive means the project **creates value**; negative means it **destroys
    value**.

</details>
