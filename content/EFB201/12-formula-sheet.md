# Formula Sheet & Exam Traps

Everything in EFB201 that has an equals sign, on one page, followed by the
traps that cost marks.

---

## Positions and margin

| Concept | Formula |
|---|---|
| Leveraged long margin | `Equity / Total asset market value` |
| **Short sell margin** | **`Equity / Debt`** |
| Total position value | `Own money / Initial margin` |
| Number of shares | `(Own money / IM) / Price` |
| Leverage factor | `1 / IM` |
| Loan (long) | `Position value − Own money` |
| Equity at price P (long) | `(P × N) − Loan` |
| **Margin-call price, long** | **`P* = Loan / [N × (1 − MM)]`** |
| Assets at the call, long | `Debt / (1 − MM)` |
| Extra equity to restore, long | `Debt/(1 − MM) − Current position value` |
| Short initial margin | `(Proceeds + Deposit − Initial debt) / Initial debt` = `Deposit / Proceeds` |
| Short maintenance margin | `(Proceeds + Deposit − Actual debt) / Actual debt` |
| **Debt at the call, short** | **`D* = (Proceeds + Deposit) / (1 + MM)`** |
| **Margin-call price, short** | **`P* = (Proceeds + Deposit) / [N × (1 + MM)]`** |
| Short gross gain/loss | `Equity at closure − Initial equity − Total cash spent repurchasing` |

## Order execution

| Concept | Formula / rule |
|---|---|
| Buy order | Walk the **ask** side from the **lowest** price up; stop when ask > limit |
| Sell order | Walk the **bid** side from the **highest** price down; stop when bid < limit |
| Fill price | The **standing** limit order's price (discriminatory pricing rule) |
| All-or-nothing | Fills only if the *entire* size can be matched |
| VWAP | `Σ (Pᵢ × Qᵢ) / Σ Qᵢ` |

## LIBOR

| Concept | Formula |
|---|---|
| **LIBOR (16 submissions)** | **Sort; drop the lowest 4 and the highest 4; take the arithmetic mean of the remaining 8** |
| Gain from manipulating | `Notional × (Honest LIBOR − Manipulated LIBOR)` for a floating-rate **payer** |

## Bond valuation

| Concept | Formula |
|---|---|
| Coupon in dollars | `C = coupon rate × par` |
| **Price** | **`P = Σ C/(1+i)^t + F/(1+i)ⁿ`** |
| Annuity form | `P = C × [1 − (1+i)⁻ⁿ]/i + F(1+i)⁻ⁿ` |
| Current yield | `ic = C / P` |
| YTM | Solve `P = Σ C/(1+i)^t + F/(1+i)ⁿ` for `i` |
| YTM approximation | `[C + (F − P)/n] / [(F + P)/2]` — **not exact** |
| Matrix pricing (not on exam) | Average the peer YTMs at each maturity, interpolate linearly, then discount |
| Semi-annual conversion | Halve the rate, halve the coupon, double the periods |

**Price / yield relationships:**

```
Coupon rate  >  Market rate   ⇒  PREMIUM   ⇒  coupon > current yield > YTM
Coupon rate  =  Market rate   ⇒  PAR       ⇒  coupon = current yield = YTM
Coupon rate  <  Market rate   ⇒  DISCOUNT  ⇒  coupon < current yield < YTM
```

## Equity valuation

| Concept | Formula |
|---|---|
| Book value of equity | `BVE = Total assets − Total liabilities` |
| Market value of equity | `MV = Price per share × Shares outstanding` |
| Market-to-book | `MV / BVE` (closing BVE) |
| ROE, beginning balance | `Net income_t / BVE_(t−1)` |
| ROE, average balance | `Net income_t / [(BVE_t + BVE_(t−1)) × 0.5]` |
| **P/E target price** | **`Target price = P/E × forecast EPS`** |
| Dividend yield | `Dividend per share / Price` |
| Upside/downside | `Target price / Market price − 1` |
| Value–price gap sign | `Market − Fundamental > 0` ⇒ overpriced; `< 0` ⇒ underpriced |

## Risk and CAPM

| Concept | Formula |
|---|---|
| Return | `R_t = P_t/P_(t−1) − 1` or `R_t = ln(P_t/P_(t−1))` |
| Sample mean | `R̄ = (1/T) Σ R_t` |
| **Sample variance** | **`VAR = [1/(T−1)] Σ (R_t − R̄)²`** |
| Sample standard deviation | `√VAR` |
| **CAPM** | **`E(Rᵢ) = R_f + βᵢ [E(R_m) − R_f]`** |
| Market risk premium | `E(R_m) − R_f` |
| Average beta of all assets | `1` |
| Excess return | `Historical return − estimated exposure to systematic risk factors` |
| Value creation test | `ROIC − WACC > 0` |

**Beta readings:** `β = 0` uncorrelated · `β < 1` less risky than the market ·
`β = 1` equal risk · `β > 1` riskier.

## Futures

| Concept | Formula |
|---|---|
| Contract value | `Contract unit × price` (or `multiplier × index`) |
| **Number of contracts** | **`Exposure / Contract value`**, or `Quantity / Contract unit` |
| Mark-to-market flow per contract | `(New settlement − Prior settlement) × contract unit` |
| Direction | Price **up** ⇒ long gains, short pays. Price **down** ⇒ short gains, long pays |
| Margin balance | `Initial margin + cumulative MTM flows` |
| Margin call | Triggered when balance `< maintenance margin`; **deposit restores to the MAINTENANCE level** |
| Total maintenance requirement | `Maintenance per contract × number of contracts` |
| Price at which a long is called | `Entry price − (Initial margin − Maintenance requirement) / (unit × contracts)` |
| Perfect hedge check | `Spot proceeds ± margin flows = locked-in price` |

## Options

| Concept | Formula / rule |
|---|---|
| Call in the money | `Spot > Strike` |
| Put in the money | `Spot < Strike` |
| Call buyer, net cash flow | `−Premium − min(Spot, Strike)` |
| Put buyer, net cash flow | `−Premium + max(Spot, Strike)` |
| **Call buyer's cost ceiling** | **`Strike + Premium`** |
| **Put buyer's proceeds floor** | **`Strike − Premium`** |
| Protective put worth buying if | `Strike − Premium > forecast spot` |
| Break-even spot on a protective put | `Strike − Premium` |
| Break-even premium | `Strike − forecast spot` |
| Maximum loss, option buyer | The **premium** |
| Maximum loss, naked call writer | **Unlimited** |
| Strike ↑ | Call premium **falls**, put premium **rises** |

## Foreign exchange

| Concept | Formula |
|---|---|
| Quote convention | `BASE/QUOTE = n` means `1 BASE = n QUOTE` |
| Base → quote | **Multiply** by the rate |
| Quote → base | **Divide** by the rate |
| **Interest rate parity** | **`F(BASE/QUOTE) = S(BASE/QUOTE) × (1 + i_QUOTE) / (1 + i_BASE)`** |
| Forward hedge cost | `Foreign amount ÷ Forward rate` (when the foreign currency is the quote) |
| Bank's income on a cash pair | `Bid–ask spread + fee on each side` |
| Fee | `Max[minimum, % × transaction amount]` |
| Futures contracts to hedge | `⌈ Exposure in contract currency ÷ Contract unit ⌉` — **round up** |
| Higher-yielding currency | Trades at a forward **discount** |

---

## EXAM TRAPS — QUICK CHECKLIST

## Positions and margin

1. **"How many shares can you buy on margin" means the total, including the
   borrowed part.** Divide by IM first, *then* by the price. `$10,000 / 0.40 /
   $25 = 1,000`, not 400.
2. **The maintenance margin plays no part in sizing a position.** It only tells
   you when the call fires. Every version of this question offers the
   MM-divided answer as a distractor.
3. **Long margin is `equity/assets`; short margin is `equity/debt`.** They
   coincide only at the moment a short is opened, because at that instant debt
   = proceeds.
4. **A short is called when the price *rises*.** Denominator uses `(1 + MM)`,
   not `(1 − MM)`. The sign flips.
5. **A short can be right about direction and still be wiped out.** GameStop
   ran $26 → $100 and the short lost $35,863 to intermediate margin calls.
6. **Restoration after a long call, with fixed debt: `Assets = Debt/(1 − MM)`.**
   The extra equity is the difference between that and the current position
   value — not the whole shortfall in margin percentage.

## Orders

7. **Direction sets which side of the book you walk.** Sell orders walk bids
   from the top; buy orders walk asks from the bottom. Sorting the wrong way is
   the cheapest mark in the unit to lose.
8. **Honour "all or nothing".** If the remaining quantity is less than the AON
   size, that order does not fill *at all*.
9. **The standing order sets the price.** Your limit is a constraint, not the
   price you pay.
10. **VWAP weights by quantity, not by price level.** If sizes are given, use
    them.

## Fixed income

11. **The coupon is calculated on par, never on market price.**
12. **The last cash flow is coupon *plus* par, both discounted `n` periods.**
13. **Coupon < market rate ⇒ discount.** Eliminate impossible options before
    calculating.
14. **Current yield ≠ YTM.** Current yield ignores the capital gain or loss.
    Order at a discount: `coupon < current yield < YTM`. At a premium the order
    reverses.
15. **The YTM approximation is not exact** — about 9bp low on a discount
    example, 6bp high on a premium one. Use exact DCF when the options are
    close, and say which you used.
16. **The reinvestment assumption is at the *required rate*, not the coupon
    rate.**
17. **An Australian Treasury note is a US Treasury bill.** Translate before
    classifying by maturity.
18. **A repo: the borrower SELLS first and buys back higher.**
19. **The cash rate is UNSECURED overnight interbank.** Not a repo, not
    intra-day, not with the RBA.
20. **A Eurobond is issued outside the jurisdiction of its currency.** Nothing
    to do with Europe. A Eurobond issued in Germany is *not* denominated in
    euro.
21. **Sovereign means national.** State and municipal issues are not sovereign.
22. **Small denomination is NOT a money-market characteristic** — large
    denomination is.
23. **Floating-rate coupons reset with a *reference rate*, not with the
    issuer's credit reassessment.**

## LIBOR

24. **Drop four from EACH end, then average the eight that survive.** Not four
    in total, not two from each end.
25. **Trim by *position* in the sorted list, not by distinct value.** If six
    banks submit the top value, only some of them get trimmed.
26. **Carry full precision through the subtraction.** Rounding 4.816875% to
    4.817% turns a $50,000 answer into $54,800.
27. **One bank moves a trimmed mean only slightly.** The Ethics deck's claim
    that a 0.01% understatement saves $100,000 on $1bn is wrong — the LIBOR
    moves 0.00125%, so the saving is **$12,500**. Collusion is what makes
    manipulation material.

## Equity

28. **BVE never touches the share price.** `Assets − Liabilities`. Share count
    × price is *market* value and is offered as a distractor.
29. **ROE's denominator is EQUITY, not assets.**
30. **The two ROE conventions can flip a ranking** — on the deck's
    pharmaceutical example GSK beats Pfizer on average BVE and loses on
    beginning BVE. Name the convention you used.
31. **P/E target price: multiply.** `20 + 1.85` and `20 / 1.85` are both
    offered as answers.
32. **P/E assumes comparability** of growth, risk and accounting. Saying so is
    the mark.
33. **Management affects BVE directly and MV only indirectly.**

## Risk and CAPM

34. **The market risk premium is the DIFFERENCE `E(R_m) − R_f`,** not
    `E(R_m)`.
35. **The average beta of all assets is 1, not 0.**
36. **Negative beta ⇒ expected return BELOW the risk-free rate.** "Higher beta,
    higher return" runs through zero and below.
37. **Standard deviation ranks total risk; beta ranks market risk.** They can
    disagree — read which one the question wants.
38. **Diversification eliminates non-systematic risk only.** Total risk falls
    but never reaches zero.
39. **The risk-free asset's correlation with anything is 0, not −1.**
40. **The market portfolio is ALL RISKY ASSETS** — not tradable, not
    investable, and not observable.
41. **Sample variance divides by `T − 1`.** Excel `VAR.S`, not `VAR.P`.
42. **CAPM prices only systematic risk, and not always correctly.**

## Market efficiency

43. **`Market − Fundamental > 0` is OVERPRICED.** So an underpriced asset's
    intrinsic value is *greater* than its market price.
44. **Strong-form efficiency means insiders cannot profit.**
45. **Violating a public-information result contradicts TWO forms** (semi-strong
    and strong). Violating a private-information result contradicts **one**.
46. **Losing money is not evidence of inefficiency.** A price falling on
    genuine bad news is efficiency working.
47. **Technical analysts assume weak-form INefficiency; fundamental analysts
    assume semi-strong INefficiency but weak-form efficiency.**
48. **Testing efficiency is a JOINT test of efficiency and the pricing model.**
    When a question offers "all of the above" for what could explain a gap,
    that is almost always the answer — but when it asks what a *zero* gap
    means, the answer narrows to strong-form efficiency not being violated.
49. **A shorter delay between order placement and execution means efficiency
    has INCREASED.**

## Derivatives

50. **Funds pass through returns; derivatives transform them.** A super fund is
    not a derivative.
51. **Callable and convertible bonds are EMBEDDED derivatives**, not
    stand-alone ones.
52. **Swaps and futures are forward commitments. Options are contingent
    claims.** A futures contract is never a contingent claim.
53. **A contingent claim lets ONE party decide whether and when to settle.**
54. **Price up ⇒ long gains, short pays. Price down ⇒ short gains, long pays.**
    Write the direction before computing magnitudes.
55. **Both sides post margin on a futures contract**, and **a margin call
    restores the balance to the MAINTENANCE margin**, not the initial margin.
56. **Match the futures side to the physical side.** Will buy later ⇒ go long.
    Will sell later ⇒ go short.
57. **Check a hedge by confirming that spot proceeds plus margin flows equal
    the locked-in price.** The Derivatives A deck's intermediate build gets
    $9,900,000 by subtracting the margin flow instead of adding it; the right
    answer is $10,800,000.
58. **Moneyness ignores the premium.** In the money means worth exercising, not
    profitable overall.
59. **The premium is sunk and does not enter the exercise decision.**
60. **Call cost ceiling = strike + premium. Put proceeds floor = strike −
    premium.** These two lines answer most option questions.
61. **Higher strike ⇒ cheaper call, dearer put.**
62. **A protective put is worth buying only if `strike − premium` exceeds your
    forecast spot.** `167.5 − 11.15 = 156.35 < 157`, so no.
63. **Round hedge contract counts UP, not to the nearest integer.** 6.149
    contracts becomes 7 if the brief says "fully hedge".
64. **Maintenance margin on the CME page is dollars per contract**, while
    initial margin in the tutorial is a percentage of notional. Do not mix the
    units.

## Foreign exchange

65. **`BASE/QUOTE = n` means 1 BASE = n QUOTE.** Multiply going down, divide
    coming back. Sanity-check the magnitude.
66. **BIS turnover percentages sum to 200%** because each trade has two
    currencies.
67. **The customer always gets the worse of the two rates.** Under AUD/USD
    quoting, dividing by the smaller number gives the larger AUD outflow.
68. **The bank's income is spread PLUS fees on both sides** — three components,
    not one.
69. **Fees are `Max[minimum, % × amount]`.** The floor binds only on small
    transactions.
70. **In interest rate parity, the QUOTE currency's interest rate goes on
    top.** Sanity check: the higher-yielding currency trades at a forward
    **discount**.
71. **Use the unrounded forward rate.** `100,000,000 / 74.4627 = 1,342,953`
    against `/ 74.46 = 1,343,003`.
72. **Read the contract unit, not the ticker,** to decide whether you are the
    buyer or the seller of a currency future. The AUD/JPY cross rate contract
    is denominated in AUD, so an importer selling AUD is the **seller**.

## Ethics

73. **II(A) prohibits acting OR CAUSING OTHERS TO ACT** on material nonpublic
    information. Passing the tip on is itself the breach.
74. **A select-group meeting is not public dissemination**, however many
    people attend.
75. **III(E) has exactly three exceptions:** illegal activity, required by law,
    client permission. "My employer told me to" is not one, and III(A) puts the
    client above the employer.
76. **III(C) Suitability requires inquiry BEFORE the recommendation** and
    judgement against the **total portfolio**.
77. **Ethics is judged on the process at the time, not the outcome.** A
    mis-sold product that later performs well is still mis-sold.
78. **LIBOR is II(B) Market Manipulation, not II(A).** Reserve II(A) for
    insider-information cases.
79. **A floating-rate PAYER wants the benchmark LOWER; a floating-rate
    RECEIVER wants it HIGHER.** Draw the two legs before answering.

## Modern financial analysis

80. **Base case ≠ status quo.** It is the *expected* outcome including the
    identified change — neither the bull nor the bear case.
81. **Sensitivity cannot precede the base case.** If a workflow jumps from
    research to "what if the price falls 10%", the missing step is **Step 3**.
82. **Every risk needs a warning signal, a data source and a re-run trigger.**
    A bare label scores nothing.
83. **`ROIC − WACC` decides the recommendation.** Establish those two numbers
    credibly and the rest follows.
84. **Analyst divergence comes from Step 2 peer/base-rate selection and Step 4
    probability weights** — not from dishonesty or different data.
85. **AI cuts frictions in Steps 2 and 3 only.** It cannot set scope,
    probability weights or the recommendation, and it must never receive
    material non-public information.

## General

86. **State your assumptions on ambiguous questions** — rounding convention,
    which ROE definition, which YTM method, whether a hedge is rounded up.
    Markers reward method.
87. **Sanity-check every answer against a direction rule** before moving on:
    premium/discount, long/short, over/underpriced, premium/discount forward,
    creates/destroys value.

---

*Notes compiled from the EFB201 lecture decks (Introduction, Fixed Income and
Equity Parts A/B/C, Market Efficiency), the six Revision modules (Contemporary
Topics, Derivatives A and B, Fixed Income Part C, Foreign Exchange, Ethics),
their tutorials and solutions, and the CommBank, CME and CBOE appendices. All
numerical worked examples independently verified in Python. Seven errors or
contradictions in the source material are flagged inline and listed in the
overview.*
