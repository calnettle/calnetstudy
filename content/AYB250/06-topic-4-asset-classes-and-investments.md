# Topic 4 — Asset Classes and Investments

Week 4, first half. Source: `AYB250 Week 4.pptx` — the asset-class and
valuation slides (roughly slides 3–26 and 43–58). Reading: Chapters 4
and 5. The risk/portfolio-theory half of the same deck is note 07.

Covers the investment menu: cash, fixed interest, shares and managed funds
(property gets its own week — note 08), how fixed-interest securities are
priced, and the three basic share valuation models. Every worked figure
was recomputed in Python.

## The investment classes

The main investment classes are:

| Class | Examples |
|---|---|
| Cash | Savings accounts, money market securities, cash management trusts |
| Fixed interest | Term deposits, bills, bonds, debentures, unsecured notes |
| Property | Covered in Week 5 — note 08 |
| Shares | Ordinary shares on the ASX |
| Alternatives | Private equity, commodities, collectibles, crypto |

Investment in the major classes can be **direct** (personal ownership) or
**indirect** (through a managed fund). Every choice between them is a
risk–return trade-off — building a portfolio requires an appreciation of
each class's risk and return attributes.

## Cash

Savings accounts, money market securities and cash management trusts.
Provides **liquidity** and a stable return; considered low risk or
risk-free. Return is low and the investment term is generally short.

> **The risk-free rate in Australia is the Federal Government 90-day
> Treasury Note rate.** That specific instrument — not "the cash rate" or
> "a term deposit" — is the exam answer for what proxies the risk-free
> rate.

Cash can still lose in **real** terms: it is adversely affected by tax and
inflation.

### The real cash rate

```
                      (1 + nominal rate)
Real cash rate  =  ----------------------  − 1
                     (1 + inflation rate)
```

**Worked example** (from the deck): cash rate 4.75%, inflation 2.7%.

```
Real cash rate = (1.0475 / 1.027) − 1 = 0.019961 ≈ 2.00%
```

Verified — 1.996% as stated on the slide.

> **The real rate is a ratio, not a subtraction.** `4.75% − 2.7% = 2.05%`
> is the approximation, not the formula. The division gives 1.996%. Small
> gap here, but the gap grows with inflation, and the tutorial (note 12)
> uses the ratio form — marks follow the formula.

## Fixed interest

Most fixed-interest investments have: a rate of interest **set at the
start**, a fixed **face value** (principal), and interest paid on a
predetermined basis. The interest rate varies with **maturity** and the
**perceived riskiness of the issuer**. Low risk overall, though corporate
bonds are riskier than government bonds.

Participants: ADIs (authorised deposit-taking institutions) and non-bank
financial institutions, insurance companies, fund managers, private
individuals, ordinary businesses, and governments — some lend, some
borrow, some do both.

### Forms of fixed-interest investment

Two markets, split by maturity:

```
Money market:    securities maturing in up to 1 year
Capital market:  securities maturing in more than 1 year
```

| Instrument | Features |
|---|---|
| Term deposits | One month to several years, from ADIs |
| Commercial bills | Usually 90–180 days; often bank-provided for a facilitation fee |
| Corporate bonds / debentures | Long-term; pay a regular fixed **coupon** on face value; usually secured over issuer assets |
| Unsecured notes | Riskier — higher rates offered to attract investors |
| Government / semi-government bonds | Very good security ratings |

Typically **longer-dated securities offer higher rates**; the relationship
between short and long rates (graphed as the **yield curve**) shifts with
monetary conditions.

Credit ratings: **AAA** is the highest quality (lowest risk); **BBB−** is
generally the lowest *investment grade*; anything below is speculative.

Securities are issued in the **primary market** and traded in the
**secondary market**, which provides liquidity, promotes market
confidence, and sets prices. Savings accounts and term deposits have **no
secondary market**.

### Discount securities

Discount securities pay **no separate coupon**. They sell at a discount to
face value; the difference between the price paid and the face value *is*
the interest.

```
                     Face value − Purchase price
Yield for period  =  ---------------------------
                          Purchase price

Annualised yield  =  yield for period × (365 / days)
```

**Worked example.** A 180-day security, face value $10,000, sells for
$9,800.

```
Yield for period = (10 000 − 9 800) / 9 800 = 200 / 9 800 = 2.041%
Annualised       = 0.02041 × (365/180)      = 0.04138  ≈ 4.14%
```

Verified (exact: 4.1383%).

Running the same relationship backwards prices a bill from its yield:

```
                        Face value
Price  =  ------------------------------------
            1 + (yield × days/365)
```

The tutorial's $100,000 90-day bill at 6.6% prices at **$98,398.66** this
way — worked fully in note 12.

> **The yield's denominator is the purchase price, not the face value.**
> `200/10 000 = 2.00%` is wrong; the return is measured on what you paid
> ($9,800), giving 2.041%. And annualising uses 365/days — the same simple
>-interest convention as Week 2.

### Coupon securities and bond pricing

Coupon securities pay interest on a predetermined basis. The **price** of
a bond is a function of market interest rates and the security's perceived
risk — mechanically, it is the present value of the coupons (an annuity)
plus the present value of the face value (a lump sum), both discounted at
the **required rate of return**:

```
              1 − (1 + i)^(−n)
Price = PMT × ----------------   +   FV (1 + i)^(−n)
                     i

  PMT = coupon per period      i = required return per period
  FV  = face value             n = number of periods
```

**Worked example.** A $100,000 bond due in two years, 5% coupon paid as
$2,500 each 6 months, principal repaid at maturity. Required return 6% p.a.

```
Per-period figures:  i = 0.06/2 = 0.03      n = 2 × 2 = 4

Coupon annuity:  2 500 × [1 − (1.03)^(−4)] / 0.03  =  $ 9 292.75
Face value:      100 000 × (1.03)^(−4)             =  $88 848.70
                                                      -----------
Bond price                                          =  $98 141.45
```

Verified exactly.

> **Everything gets halved except the face value.** The 5% annual coupon
> becomes $2,500 per half-year, the 6% required return becomes 3% per
> period, and two years becomes four periods. Discounting semi-annual
> coupons at the full 6% annual rate is the classic wreck — this is Week
> 2's periodic-rate discipline applied to bonds. Note the bond prices
> **below** its $100,000 face value because the required return (6%)
> exceeds the coupon (5%).

### Interest rates move, so traded bond prices move

```
Market interest rates FALL  →  existing bond values RISE
Market interest rates RISE  →  existing bond values FALL
```

**The deck's intuition example:** you hold a 10-year government bond
bought for $100,000 with a 6% coupon ($3,000 each 6 months). Rates rise
and new bonds pay 8%. A buyer now needs only **$75,000** of the new bond
to receive the same $3,000 half-yearly (75 000 × 8% = 6 000 p.a.), so
nobody will pay $100,000 for yours — its market value has fallen, and
selling realises a capital loss.

Held-to-maturity fixed interest appeals to risk-averse investors because
the interest payments are guaranteed at a set level and the capital
repayment is fixed — the price fluctuation only matters if you sell.

## Shares

Generally **high risk, high return** — suitable for longer-term investors.
Australian shares have delivered long-term growth well above inflation,
but short-term returns are volatile, moving in cycles with economic
growth, industry trends, company profitability, inflation, interest-rate
expectations and market sentiment.

Shares offer **two return components**: regular income via dividends, and
capital growth — plus the tax benefit of **dividend imputation (franking
credits)**, covered in note 05. Ordinary shares are the most common type.
The bulk of trading happens on the **ASX**.

Market participants: listed corporations, investors, brokers (full-service
and discount), hedgers, speculators, arbitrageurs.

### What moves Australian share prices

Prices are set by supply and demand. The deck's list of influences:

- Economic fundamentals — interest rates, inflation
- Company profitability and outlook; quality of management and human capital
- Government policy and announcements
- International capital flows
- International demand for Australian products (especially commodities)
- AUD fluctuations and commodity price changes
- US share-market movements
- Domestic and international economic and political events

## Valuing shares

Three basic valuation models: the **price–earnings (P/E) ratio**, the
**dividend yield ratio**, and the **residual income model**.

### Price–earnings ratio

```
P/E = price per share / earnings per share (EPS)
```

Indicates **how many dollars investors will pay for each dollar of current
earnings**. An abnormally high or low P/E relative to similar companies
signals the market may be over- or under-pricing the stock.

**Worked example.** Market price $10, EPS $1:

```
P/E = 10 / 1 = 10

Expected EPS next year = $1.20
Forecast price = P/E × expected EPS = 10 × 1.20 = $12.00
```

Verified.

### Dividend yield ratio

```
                  Dividends received over the year
Dividend yield =  --------------------------------
                          Share price
```

**Worked example.** Share price $40, dividends $2 over the year:

```
Dividend yield = 2 / 40 = 5%
```

Read in reverse: an investor who requires a 5% yield would pay up to $40
for this share.

### Residual income model

Values a share as **current book value of equity plus the present value of
expected future residual income**, where:

```
Residual income = profit − (required return × opening book value of equity)
```

The deck describes the model at this level only — no worked example was
given, so don't invent one in an exam answer; state the concept.

### Growth versus value investing

| Style | Buys | Logic |
|---|---|---|
| **Growth** | High P/E, low yield | Potential for high future growth justifies paying up now for future gains |
| **Value** | Low P/E, relatively high yield | Apparently under-priced — may be a bargain |

## Managed funds

A managed fund pools many investors' money; a professional fund manager
invests the combined pool. A **responsible entity** operates the scheme —
investors have **no day-to-day control**. Investors buy **units**, whose
price moves with the value of the underlying investments, and pay a
**management fee**. Managed funds are **indirect** ownership.

### Advantages

- Access to investments with only a small amount of money
- Access to a wide range of asset classes and investments
- Professional fund management
- Consolidated reporting
- Ready-made diversification across asset classes, managers, sectors and countries

### Types

Listed and unlisted funds; cash management trusts; single-sector funds;
diversified (multi-sector) funds; REITs; and objective-specific funds
(socially responsible funds, ETFs). The deck's colour: there is a fund for
everyone — from the VICE fund (alcohol, defence, gaming, tobacco) to the
Iman Fund (Islamic ethical investing), Vanguard's Personal Investor Kids,
ARK's thematic disruption ETFs and Australian Ethical.

Managers also differ on **approach**, which is itself a diversification
axis: active vs passive, value vs growth, fundamental / technical /
contrarian / quantitative analysis, sector-specific skills, tactical asset
allocation via market timing.

### Disadvantages

- **Fees** — entry, contribution, withdrawal, and indirect fees
- No control over what is bought or **the timing of CGT events**
- Lack of transparency
- Hard to choose the most appropriate fund

> **The CGT-timing point is the exam-grade disadvantage.** In a direct
> portfolio you choose when to realise gains (and can defer them into a
> low-income year); in a unit trust the manager's trades crystallise
> taxable gains for you, whether the timing suits you or not.

### The seven risks of managed funds

| Risk | Meaning |
|---|---|
| Market | All markets/asset classes face price and return volatility |
| Security | The specific securities picked inside the fund carry their own risks |
| Currency | Exchange-rate movements can hurt international portfolios |
| Liquidity | Unlisted funds may be unable to redeem units if the fund lacks liquidity |
| Gearing | Funds that borrow magnify gains **and** losses |
| Taxation | Government may change how managed funds are taxed |
| Beta | An index fund only ever matches its index — no outperformance |

### Selecting a fund

Criteria: the fund's investment objective; the nature of its investments;
listed or unlisted; the type of investors it attracts. The fund's
investment structure determines its overall performance, risk profile and
costs.

## Checkpoint

<details><summary>Questions</summary>

1. A 90-day discount security with a face value of $50,000 sells for
   $49,200. What is the annualised yield?
2. A $10,000 bond pays a 4% coupon semi-annually and matures in 3 years.
   The market requires 6% p.a. What is it worth?
3. Market interest rates fall 1%. What happens to the price of an existing
   traded bond, and why?
4. A share trades at $25 with EPS of $2.00. What is its P/E? If next
   year's EPS is expected to be $2.30 and the P/E holds, what price does
   that imply?
5. Name the two return components of shares and the tax feature unique to
   Australian dividends.
6. An investor holds units in an unlisted managed fund and wants out
   during a market panic. Which of the seven fund risks bites, and why?

</details>

<details><summary>Answers</summary>

1. ```
   Period yield = (50 000 − 49 200) / 49 200 = 1.626%
   Annualised   = 0.01626 × 365/90 = 6.59%
   ```
2. ```
   PMT = 10 000 × 0.04 / 2 = 200    i = 0.03    n = 6
   Price = 200 × [1 − 1.03^(−6)]/0.03 + 10 000 × 1.03^(−6)
         = 1 083.44 + 8 374.84 = $9 458.28
   ```
   Below face value, because required return (6%) > coupon (4%).
3. It **rises**. The existing bond's fixed coupon is now more attractive
   than new issues, so buyers bid its price up until its yield matches the
   market.
4. `P/E = 25 / 2 = 12.5`. Implied price `= 12.5 × 2.30 = $28.75`.
5. Dividend income and capital growth; dividend **imputation** (franking
   credits) — note 05.
6. **Liquidity risk** — unlisted funds have no secondary market, so
   redemption depends on the fund holding enough liquid assets; in a panic
   it may suspend redemptions.

</details>

## Summary

- Main asset classes: cash, fixed interest, property, shares,
  alternatives — held directly or indirectly via managed funds.
- Cash: liquid, stable, low return; risk-free proxy = the Federal
  Government **90-day Treasury Note** rate. Real cash rate
  `= (1+nominal)/(1+inflation) − 1` — 4.75% nominal and 2.7% inflation
  gives 2.00%, not 2.05%.
- Fixed interest: money market (≤1 yr) vs capital market (>1 yr); AAA
  best, BBB− the floor of investment grade. Discount securities: yield
  `= (FV − price)/price`, annualised ×365/days. Coupon securities: price
  = PV(coupon annuity) + PV(face value) at the required return, all in
  per-period terms — the $100,000 5% bond at a 6% required return is
  worth $98,141.45.
- Rates up → traded bond prices down (and vice versa). Held to maturity,
  the fluctuation is irrelevant.
- Share valuation: P/E (price per dollar of earnings), dividend yield
  (income per dollar of price), residual income (book value + PV of
  profit above the required return on equity). Growth buys high-P/E
  potential; value buys low-P/E bargains.
- Managed funds: pooled, professional, diversified, small entry — but
  fees, no control over CGT timing, opacity, and seven named risks
  (market, security, currency, liquidity, gearing, taxation, beta).
