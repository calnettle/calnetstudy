# Topic 3 — Fixed Income and Equity Markets (Part B)

**Reference:** Kidwell et al. chapters 8–10; CFA 2020 Level I Readings 39, 43, 44.

Part B has two halves. The first is more classification — who issues, where,
in what currency, at what credit quality. The second is the **valuation
engine** of the whole unit: discounted cash flow for bonds, YTM vs current
yield, and the accounting and multiple-based approaches to equity. Almost
every numerical exam question in EFB201 that is not a margin account lives
here.

---

## 1. Fixed income issuance structure

### By legal identity of the issuer

| Issuer type | Meaning |
|---|---|
| **Sovereign** | National government |
| **Local** | e.g. municipal, state |
| **Quasi-government** | Agencies owned or sponsored by government |
| **Corporate** | Companies |

> **A Queensland government bond is *not* a sovereign bond.** Sovereign means
> **national**. Fixed income products issued by the *Australian* government are
> sovereign; anything issued by Queensland, backed by Queensland Treasury, or
> issued by Queensland Railway is local or quasi-government. The tutorial
> builds three distractors out of exactly that swap.

### By geography and currency

Three definitions, and the third is the one people get wrong.

| Type | Issued in | Denominated in | Issuer domiciled in |
|---|---|---|---|
| **Domestic** | Country X | Currency of X | Country X |
| **Foreign** | Country X | Currency of X | **A different country** |
| **Eurobond** | **Internationally** | Currency of some country Y | Anywhere — but issued **outside Y's jurisdiction** |

The deck's own examples:

| | Issuer's domicile | Issuance target country | Currency |
|---|---|---|---|
| Domestic | U.S. | U.S. | US dollar |
| Foreign | China | U.S. | US dollar |
| Eurobond | China | U.S. | **Canadian dollar** |

> **"Eurobond" has nothing to do with Europe or the euro.** A Eurobond is
> issued *outside the jurisdiction of the country whose currency it is
> denominated in*. So the Part B tutorial statement "a Eurobond issued in
> Germany in May 2022 is denominated in Euro" is **false** — if it were
> denominated in euro and issued in Germany, it would be a *domestic* bond (or
> foreign, depending on the issuer's domicile). A Eurobond issued in Germany is
> denominated in something other than the euro. This is the single most
> reliable trick question in the unit.

### By credit quality

Holders of fixed income are exposed to **credit risk** — the risk of loss from
the issuer failing to make full and timely payments of interest and/or
principal. Ratings come from **credit rating agencies**: Standard & Poor's,
Moody's, Fitch.

- **Investment grade** has higher credit quality than **high-yield**
  (speculative, "junk") grade.
- **Ratings change over time** — a rating is a point-in-time opinion, not a
  permanent label.

Factors affecting credit quality: source of repayments, collateral backing,
specific contract terms, credit enhancement by insurance.

The deck's three worked comparisons, each holding all else constant:

```
Sovereign bond in DOMESTIC currency  >  same bond in FOREIGN currency
   because the government can print money and raise tax revenue

Corporate loan WITH collateral       >  unsecured loan
   because the collateral can be sold to meet repayments

Mortgage WITH insurance              >  mortgage without
   because the insurer pays on default
```

> **The domestic-currency argument requires the government to control the
> printing press.** It works because a sovereign can create its own currency
> and tax its own citizens. Combine with strong domestic savings and the
> rating is better still — the tutorial's answer to "which factor is
> associated with a more favourable sovereign rating" is *"issued in local
> currency **by a country with strong domestic savings**"*, i.e. both, not
> either alone.

Emerging-market bonds, compared with developed-market bonds, most likely
**exhibit higher risk** — and therefore offer *higher*, not lower, yields, and
typically have *higher* growth prospects, not lower.

### Secondary bond markets

- Newly issued corporate bonds are issued in the **primary** market. The
  secondary market is where bonds are traded **between investors**.
- The major participants globally are **institutional**, not retail.
- A liquid secondary market lets an investor sell **at a price close to the
  bond's fair market value** — not at "the desired price", and certainly not
  at "a price at least equal to the purchase price".

> **Liquidity buys you fair value, not a good price.** Every version of this
> question offers "the desired price" and "at least the purchase price" as
> distractors. Liquidity means low deviation from fair value and low
> transaction cost. It says nothing about whether fair value is above or below
> what you paid.

---

## 2. Equity issuance structure

### Public vs private equity

| Public | Private |
|---|---|
| Issued via **public offering** | Issued via **private placement** |
| **Active secondary market** | **No active secondary market**, and no market-quoted price |
| Accessible to retail investors | **Inaccessible to retail investors** |
| Exit by selling on-market | Exit via OTC deals or a public offering |

> **The false statement about private equity is always "they have
> market-determined quoted prices".** They do not — that is precisely what
> makes them private. All three of the others (cannot be sold on the stock
> exchange, primarily issued to institutions, unsuitable for short horizons)
> are true.

### Cross-listing overseas

Two ways to give international investors access.

**Direct investment** — the investor must follow all the rules of the foreign
market and is exposed to the foreign market's currency.

**Depository receipts (DRs)** — a security that trades like an ordinary share
on a *local* exchange and represents an economic interest in a *foreign*
company. The foreign company's shares are deposited with a local bank (the
depository), which issues receipts to local investors.

| | Sponsored DR | Unsponsored DR |
|---|---|---|
| **Voting rights** | Local DR holders have the **same rights as direct owners** | **The depository retains voting rights** |
| **Cash flow rights** | To DR holders | To DR holders |

> **Unsponsored = the depository bank votes.** The tutorial asks exactly this
> and the answer is the **depository bank**, not the investors and not the
> issuer of the underlying shares. Sponsored means the foreign company has
> arranged the programme, so holders get the full bundle of rights.

---

## 3. Three ways to express the value of a security

| Expression | Deck's examples |
|---|---|
| **Price** | Woolworths closed at AUD33.67 on 16 Jan 2024 and AUD35.53 two days later; analysts think the target (intrinsic) price should be AUD36; a 10-year 10% annual-payment bond trades at AUD140 |
| **Return** | Woolworths' two-day return was ≈6%; its dividend yield is 4.17%; the required return (YTM) on a 10-year 10% bond priced at AUD140 is ≈5% |
| **Spread** (deviation from a benchmark) | Bid AUD35.65, ask AUD35.70, spread AUD0.05; a AAA 10-year corporate bond yields 2% over the equivalent government bond — a **credit spread** |

Checking that AUD140 bond: par 100, coupon 10, ten years, price 140.

```
140 = Σ (10 / (1+y)^t) for t = 1…10  +  100 / (1+y)^10
y = 4.856%      ≈ 5%   ✓ the deck's figure is right
```

> **Do not confuse the ≈5% YTM with the 7.14% current yield on that same
> bond.** `10 / 140 = 7.14%`. The YTM is lower because you paid 140 for
> something that redeems at 100 — a guaranteed 40 of capital loss spread over
> ten years drags the total return below the coupon yield. Premium bond ⇒
> `coupon rate > current yield > YTM`.

### How to estimate a price

- **Discounted cash flow** — the price of any financial asset is the present
  value of its future cash flows.
- **Relative valuation** — price it relative to securities with similar
  features (matrix pricing for bonds, price multiples for shares).
- **Other pricing models** — the expected return is compensation for exposure
  to risk. That is Part C.

---

## 4. Bond valuation by discounted cash flow

```
        C          C                C + F
P = ───────── + ────────── + … + ──────────
     (1 + i)    (1 + i)²          (1 + i)ⁿ

C = coupon in dollars = coupon rate × par
F = par / face value
i = required rate of return (= YTM)
n = years to maturity
```

### Worked example (the deck's, and the Part C tutorial's)

Par $1,000, coupon rate 8% paid annually, maturity 3 years, required return
10%.

```
Coupon = 8% × $1,000 = $80

Year 1:   80 / 1.10¹   = 80 / 1.1000 =  72.7273
Year 2:   80 / 1.10²   = 80 / 1.2100 =  66.1157
Year 3: 1080 / 1.10³  = 1080 / 1.3310 = 811.4200
                                        ─────────
Price                                 = $950.26
```

The Part C tutorial rounds this to "around $950" — confirmed.

> **The final year's cash flow is coupon *plus* par, and both are discounted
> at the same `n`.** Discounting the $1,000 for three years and the last $80
> for two is the classic slip. Written out: `(80 + 1000) / 1.10³`.

### Worked example (Part B tutorial Q10)

Aletek Corp issues a 10-year bond, face $1,000, coupon 7%, market rate for
similar bonds 9%, annual payments.

```
C = 7% × 1,000 = $70

Annuity factor  = [1 − 1.09⁻¹⁰] / 0.09 = 6.417658
PV of coupons   = 70 × 6.417658        = 449.24
PV of principal = 1,000 / 1.09¹⁰       = 422.41
                                         ───────
Price                                  = $871.65 → $872
```

Answer **a. $872**.

> **Coupon 7% below market 9% ⇒ discount.** You should be able to eliminate
> $990 and $1,066 before doing any arithmetic. A bond sells **below par when
> market rates exceed the coupon rate**, at par when they are equal, and above
> par when they are below. If your answer contradicts that, you have inverted
> something.

### Price and yield

The deck's table for a 10% coupon bond maturing in 10 years, face $1,000 —
every figure independently recomputed:

| Market price | Yield to maturity |
|---|---|
| $1,200 | 7.13% |
| $1,100 | 8.48% |
| $1,000 | **10.00%** |
| $900 | 11.75% |
| $800 | 13.81% |

Three rules fall out:

1. **At par, yield equals the coupon rate.**
2. **Price and YTM are inversely related.**
3. **Yield exceeds the coupon rate when price is below par.**

### Determinants of a bond's value

Yield to maturity, time to maturity, coupon payment frequency, coupon rate,
tax status, and other risks (credit, liquidity, currency).

The relationship between YTM and time to maturity is the **term structure of
interest rates / yield curve** — explicitly **not covered in EFB201**.

---

## 5. Current yield vs yield to maturity

Two different numbers computed from the same three inputs.

```
Current yield        ic = C / P                 (annual coupon ÷ market price)

Yield to maturity    P = Σ C/(1+i)^t + F/(1+i)ⁿ ,  solve for i
```

### Worked example (the deck's)

Face $1,000, current price $921.01, annual coupon rate 10.95%, 10 years to
maturity.

```
C = 10.95% × $1,000 = $109.50

Current yield = 109.50 / 921.01 = 11.889%  →  11.89%

YTM solves:
   921.01 = 109.5/(1+i) + 109.5/(1+i)² + … + 109.5/(1+i)⁹ + 1,109.5/(1+i)¹⁰
   i = 12.369%  →  12.4%
```

Both figures confirmed against the deck.

> **The deck calls the current yield "the effective interest rate". That is
> non-standard and it will confuse you.** Conventionally the *effective* rate
> on a bond is the **YTM**, because that is the rate that actually equates
> price to the full stream of cash flows. The deck's phrasing ("current yield:
> the effective interest rate; coupon rate is the nominal interest rate") is
> making a narrower point — the coupon *rate* is nominal because it is quoted
> on par, while the current yield uses the price you actually paid. If an exam
> question says "effective interest rate", check which one the numbers support
> and state your reading. Flag it with your tutor.

> **Current yield ignores the capital gain or loss; YTM includes it.** At a
> discount (price below par) the bond also pays you back more than you paid,
> so `YTM > current yield > coupon rate`. At a premium the order reverses. Here
> the bond is at a discount, and 12.37% > 11.89% > 10.95% — exactly the
> expected order. If your two yields come out on the wrong side of the coupon
> rate, one of them is wrong.

### The approximation formula — and why it is not the same answer

A shortcut appears in Kidwell-style texts (and in Cal's own exam spreadsheet):

```
             C + (F − P)/n
YTM ≈  ─────────────────────
              (F + P)/2
```

**Worked example.** Face $1,000, price $920, coupon 6%, 5 years.

```
C = $60
Numerator   = 60 + (1,000 − 920)/5 = 60 + 16 = 76
Denominator = (1,000 + 920)/2      = 960

Approx YTM = 76 / 960 = 7.9167%
```

The exact YTM, solved from the DCF equation, is **8.0039%**.

> **The approximation is nearly nine basis points low here, and it drifts
> further the longer the maturity and the deeper the discount.** It
> straight-lines the capital gain and uses a simple average of price and par
> instead of compounding. It is fine as a sanity check or a first guess. If an
> exam question gives you a table of candidate answers that differ by more
> than a few basis points, either method picks the right option; if they are
> close together, use the exact DCF. Say which method you used.

### Relative valuation of a bond — matrix pricing (not on exam)

The deck flags this as **not examinable**, but the arithmetic is short and it
demonstrates interpolation.

Bond X: three years, 4% coupon, semi-annual, credit rating BBa, par $100.
Market data for the same rating:

| Maturity | Known bonds | YTM |
|---|---|---|
| 2 years | 3% coupon @ $48.50 | 3.786% |
| 2 years | 5% coupon @ $102.25 | 3.821% |
| 5 years | 2% coupon @ $90.25 | 4.181% |
| 5 years | 4% coupon @ $99.125 | 4.196% |

```
Step 1 — average yield per maturity
   2-year: (3.786 + 3.821)/2 = 3.8035%
   5-year: (4.181 + 4.196)/2 = 4.1885%

Step 2 — linear interpolation to 3 years
   3.8035% + [(3 − 2)/(5 − 2)] × (4.1885% − 3.8035%)
 = 3.8035% + (1/3) × 0.3850%
 = 3.9318%

Step 3 — price by DCF, semi-annual
   semi-annual rate  = 3.9318% / 2 = 1.9659%
   semi-annual coupon = 4% × 100 / 2 = $2
   six periods

   P = Σ 2/(1.019659)^t for t = 1…6  +  100/(1.019659)⁶
     = 11.2158 + 88.9754
     = $100.19
```

Confirmed at $100.191.

---

## 6. The value of equity

Three different "values", and the deck is careful about which is which.

| Value | Definition | What it reflects |
|---|---|---|
| **Book value of equity (BVE)** | Total assets − total liabilities, from the balance sheet | A **historical record** of shareholders' wealth accumulation |
| **Market value (MV)** | Market price × number of shares outstanding | The **collective and differing expectations** of investors about the amount, timing and uncertainty of future cash flows |
| **Intrinsic value** | Present value of future projected cash flows | The truth — **can only be estimated** |

The **market-to-book ratio** indicates investors' expectations of future
growth opportunities.

Three statements the deck makes and the exam tests:

1. The ultimate goal of management is to **increase BVE and maximise MV**.
2. Management actions **directly** affect BVE but only **indirectly** affect MV.
3. **Neither book value nor market value reflects intrinsic value at all
   times.**

> **"To maximise book value is the goal of management" is a *partial* truth
> and marked wrong on its own.** The tutorial's accepted answer is that BVE
> **increases when the company retains its net income** — that is the
> mechanical, always-true statement. Book value being "usually equal to market
> value" is false; market-to-book ratios of 2–19 are ordinary.

> **"Management's decisions do not influence market value" is the inaccurate
> statement about MV.** They do influence it — *indirectly*, through the
> expectations those decisions create. The genuinely true statements are that
> increases in total assets may not show up in market value, and that market
> value reflects the average expectation of investors.

### Book value — worked example (Part B tutorial Q13)

```
Total assets       $12,000,000
Total liabilities   $7,500,000
Shares outstanding    100,000
Price per share           $52
Net income         $2,000,000

BVE = Assets − Liabilities = 12,000,000 − 7,500,000 = $4,500,000
```

Answer **a. $4,500,000**.

> **Shares outstanding and price per share are decoys here.** `100,000 × $52 =
> $5,200,000` is the **market** value of equity, and it is offered as answer
> b. Book value never touches the share price. Read which "value" the question
> wants.

### Return on equity

Two versions, and they give different answers.

```
Beginning-balance version:   ROE = Net income_t / BVE_(t−1)

Average-balance version:     ROE = Net income_t / [(BVE_t + BVE_(t−1)) × 0.5]
```

The first assumes only the opening equity generated the year's profit. The
second assumes wealth accumulated during the year was reinvested and also
generated profit.

### ROE — worked example (Part B tutorial Q14)

```
Net income                          $2,000,000
Beginning total assets             $50,000,000
Beginning total liabilities        $35,000,000

Beginning BVE = 50,000,000 − 35,000,000 = $15,000,000
ROE = 2,000,000 / 15,000,000 = 13.33%
```

Answer **b. 13.3%**. Total sales, share count and share price are all decoys.

> **ROE's denominator is *equity*, not assets.** `2,000,000 / 50,000,000 =
> 4%`, which is return on assets, and is not an option — but the same slip on
> a differently-built question will cost the mark. Strip liabilities out
> first.

### The three-company comparison

The deck's pharmaceutical example. All figures in thousands of USD.

| | Pfizer | Novartis | GlaxoSmithKline |
|---|---|---|---|
| Net income 2016 | 7,215 | 6,712 | 1,126 |
| Net income 2017 | 21,308 | 7,703 | 2,071 |
| BVE 31 Dec 2016 | 59,840 | 74,891 | 6,128 |
| BVE 31 Dec 2017 | 71,287 | 74,227 | 4,716 |
| MV 31 Dec 2017 | 212,757 | 210,869 | 89,968 |
| Shares outstanding | 5,953 | 2,318 | 4,892 |
| **ROE 2017** | **32.5%** | **10.3%** | **38.2%** |
| **Market-to-book 2017** | **2.98** | **2.84** | **19.08** |

Verifying which ROE formula the deck used:

```
Pfizer, average BVE:   21,308 / [(59,840 + 71,287)/2] = 21,308 / 65,563.5 = 32.5%  ✓
Pfizer, beginning BVE: 21,308 / 59,840                                     = 35.6%  ✗

GSK, average BVE:      2,071 / [(6,128 + 4,716)/2]    = 2,071 / 5,422     = 38.2%  ✓
GSK, beginning BVE:    2,071 / 6,128                                       = 33.8%  ✗
```

So the deck uses the **average-BVE** version. Market-to-book uses the
**closing** BVE: `212,757 / 71,287 = 2.98` ✓.

> **The choice of ROE formula changes the ranking, not just the number.**
> On average BVE, GSK (38.2%) beats Pfizer (32.5%). On beginning BVE, Pfizer
> (35.6%) beats GSK (33.8%). The two firms swap places. If a question asks
> "which company has the highest ROE", state the formula you used. The deck's
> answer uses averages; GSK looks best partly *because its equity shrank*
> during the year, which shrinks the denominator.

**The limitations of the accounting method** — the deck's closing question.
Reasonable answers: ROE is backward-looking and uses accounting numbers that
different jurisdictions compute differently; a falling BVE can inflate ROE
without any operating improvement (GSK's BVE fell from 6,128 to 4,716);
neither ROE nor market-to-book says anything about **risk** or about the
**timing** of future cash flows; and a market-to-book of 19.08 could mean
great growth prospects or an eroded book value — the ratio cannot tell you
which.

---

## 7. Relative valuation of equity — price multiples

```
Target price = P/E multiple × forecast earnings per share
```

The P/E ratio measures **how much the market is willing to pay for $1.00 of
earnings** from the firm.

### Worked example (the deck's)

Industry P/E is 16; forecast EPS is $1.13.

```
Target price = 16 × $1.13 = $18.08
```

If the current market price is **$20**, the stock looks **overpriced** on this
measure — you would sell (or short), or at minimum not buy.

### Worked example (Part B tutorial Q17)

Industry P/E for auto parts retailers is 20; forecast EPS $1.85.

```
Target price = 20 × $1.85 = $37.00
```

Answer **b. $37**.

> **The assumption behind using a P/E multiple is that the company is
> comparable to the peer group in growth, risk and accounting.** The deck asks
> this explicitly. If the company grows faster, is less risky, or capitalises
> costs its peers expense, the industry P/E is the wrong multiple and the
> target price is meaningless. Saying "P/E assumes comparability" is the
> answer that earns the mark.

> **Watch the distractors: $21.85 is `20 + 1.85` and $10.81 is `20 / 1.85`.**
> Both are one keystroke away from the right answer. Multiply.

The **dividend discount model** — the DCF approach for equity — is named in
the deck and explicitly deferred to **EFB210**. What EFB201 wants from you is
the principle: *the value of any investment is the present value of all future
net cash flows generated by it.*

<details><summary>Checkpoint — valuation</summary>

1. A bond has face $1,000, a 5% annual coupon, 4 years to maturity, and the
   market requires 6%. Price it.
2. A company has total assets $30m, liabilities $18m, net income $1.8m at the
   end of the year, and opening BVE of $10.2m. Compute ROE on both
   definitions.
3. A share trades at $48. Industry P/E is 15 and you forecast EPS of $3.60.
   Buy, hold or sell on this evidence?

**Answers**

1. `C = $50`. Annuity factor `= [1 − 1.06⁻⁴]/0.06 = 3.465106`; PV of coupons
   `= 50 × 3.465106 = 173.26`; PV of principal `= 1,000/1.06⁴ = 792.09`.
   **Price = $965.35.** Sanity check: coupon 5% below market 6%, so a discount ✓.
2. Closing BVE `= 30 − 18 = $12m`. Beginning-balance ROE
   `= 1.8 / 10.2 = 17.6%`. Average-balance ROE
   `= 1.8 / [(10.2 + 12)/2] = 1.8 / 11.1 = 16.2%`. Both are defensible; name
   the one you used.
3. Target price `= 15 × $3.60 = $54.00` against a market price of $48 — the
   share looks **underpriced**, so **buy**, subject to the comparability
   assumption holding.

</details>

---

## Summary

- Sovereign means **national**; state and municipal issues are local or
  quasi-government.
- **Eurobond = issued outside the jurisdiction of the currency it is
  denominated in.** Nothing to do with Europe.
- Sovereign bonds in domestic currency rate better because the state can print
  and tax; collateral and insurance both raise credit quality.
- Liquid secondary markets deliver **fair value**, not a good price. Retail
  investors are not the major participants.
- Private equity has **no quoted market price**. Unsponsored DRs leave voting
  rights with the **depository bank**.
- Bond price = PV of coupons + PV of par. **The last cash flow is coupon plus
  par, both discounted `n` periods.**
- Coupon < market rate ⇒ discount; = ⇒ par; > ⇒ premium. Price and YTM move
  inversely.
- `Current yield = C/P` ignores capital gain; **YTM includes it**. At a
  discount, `YTM > current yield > coupon rate`.
- The approximation `[C + (F−P)/n] / [(F+P)/2]` runs low — 7.92% vs an exact
  8.00% on the worked case. Use exact DCF when the options are close.
- Equity: BVE is historical, MV is expectational, intrinsic value can only be
  estimated. Management affects BVE directly and MV only indirectly.
- **`ROE = NI / BVE`, and the two BVE conventions can flip the ranking.** The
  deck uses the average of opening and closing.
- `Target price = P/E × forecast EPS`, and it assumes the company is
  genuinely comparable to the peers behind that P/E.
