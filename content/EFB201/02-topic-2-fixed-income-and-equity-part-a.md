# Topic 2 — Fixed Income and Equity Markets (Part A)

**Reference:** Kidwell et al. chapters 8–10; CFA 2020 Level I Readings 39 and 42.

Part A is the descriptive half: what these securities *are*, what the market
calls each field, and which instruments live in the money market. Almost every
mark here comes from vocabulary used precisely. The one calculation is the
LIBOR trimmed mean, and it reappears in Topic 9.

---

## 1. How big these markets are

Two tables from the deck. You will not be asked to recall figures, but the
orders of magnitude matter for judgement questions.

**Global debt securities outstanding, 2023 Q2 (USD billions):**

| Country | Amount |
|---|---|
| All countries | 135,318.4 |
| United States | 53,566.6 |
| China | 21,302.2 |
| Japan | 11,197.4 |
| France | 5,837.6 |
| United Kingdom | 5,708.9 |
| **Australia** | **2,251.3** |

**Global equity market capitalisation, June 2023 (USD billions):**

| Exchange | Amount |
|---|---|
| All exchanges | 110,410.1 |
| NYSE | 24,840.0 |
| Nasdaq – US | 21,341.9 |
| Shanghai | 6,804.5 |
| Euronext | 6,652.9 |
| **ASX** | **1,669.5** |

Two takeaways worth a sentence in a written answer: **global fixed income is
larger than global equity** ($135tn vs $110tn), and **the US dominates both**
(≈40% of debt, ≈42% of equity across NYSE and Nasdaq combined). Australia is a
small open market — about 1.7% of world debt and 1.5% of world equity.

---

## 2. The anatomy of a fixed income product

The deck walks a Woolworths bond quote field by field. Learn the field names,
because Part B's calculations use them and questions swap synonyms in.

| Field | Meaning |
|---|---|
| **Issuer** | The entity that borrows and issues a claim for that money plus a return at a future time |
| **Maturity** | The date the issuer must redeem the claim by paying the outstanding principal |
| **Par / face / principal / nominal / redemption / maturity value** | The amount the issuer repays at maturity — six names for one number |
| **Market price** | The current price of the product in the market |
| **Interest rate** | The annual rate the issuer agrees to pay each year until maturity. The annual dollar amount is the **coupon** if the product is a bond |
| **Interest payment frequency** | How often the coupon is paid — annual, semi-annual |
| **Current yield** | Annual coupon ÷ market price |
| **Yield to maturity** | The annual rate earned if bought at the current market price and held to maturity. Also read as the market's **current required rate of return** |
| **Currency denomination** | The currency the product is issued in |

> **Par value and market price are different numbers and the coupon is
> calculated on par.** A bond with $1,000 face and a 10.95% coupon pays
> $109.50 a year *whatever* it trades at. If you compute the coupon off the
> market price you will get every subsequent number wrong. Par is fixed;
> market price moves.

### The equity equivalents

The deck lines the two up field by field. This table is a likely short-answer
question in its own right.

| Fixed income (a bond) | Equity |
|---|---|
| Issuer | Issuer |
| Maturity | **No fixed maturity** |
| Par / face / principal value | **Book value of equity** |
| Market price | Market price |
| Interest rate | **Dividend per share** |
| Interest payment frequency | **At the discretion of the issuer** |
| Current yield | **Dividend yield** |
| Yield to maturity | **Required return on equity** |
| Currency denomination | Currency denomination |

> **The two rows that carry the risk difference are maturity and discretion.**
> A bond has a date on which principal must be repaid and a contractual
> obligation to pay coupons. Equity has neither — no maturity, and dividends
> are paid entirely at the issuer's discretion. Every ranking question about
> which security is riskier resolves back to those two rows.

---

## 3. Classifying fixed income products

By **maturity**, **coupon type**, issuer, credit quality, place of issuance
and currency. Part A covers the first two; the rest are Part B.

### By maturity

| ≤ 1 year | > 1 year |
|---|---|
| Money market instruments | Bank loans to corporates |
| Credit card balances | Bank loans to households |
| | Bonds |

---

## 4. Money market instruments

Five instruments, each with a mechanism you should be able to describe in two
sentences.

### Overnight interbank loans (the cash market)

In Australia, commercial banks lend and borrow the excess cash they hold in
**Exchange Settlement Accounts (ESAs)** at the RBA.

- The cash in an ESA **does not belong to the RBA** — it belongs to the bank.
- It is used to settle payments between banks. When a transaction happens, one
  bank's ESA is debited and the other's is credited through the RBA.
- Banks analyse their balances daily. Surplus banks lend to deficit banks.
  Once agreed, the surplus bank instructs the RBA to transfer cash to the
  borrower's account. Next day the cash comes back and the process restarts.

The interest rate on these loans is the **interbank rate**, also called the
**cash rate**, which is why interbank lending is also called the **cash
market**.

> **The cash rate is an *unsecured* overnight interbank rate.** Not secured
> (that is a repo), not intra-day, not 90-day. Three of the four distractors
> in the tutorial are built on exactly those swaps. Cash-market transactions
> are unsecured interbank borrowing and lending — not borrowing from the RBA,
> and not repos.

### Repurchase agreements (repos)

A repo is the **sale of a security with a condition that the seller will buy
it back at a predetermined, higher price**.

- The **initial seller is the borrower** (needs cash); the **initial buyer is
  the lender** (provides cash).
- The securities are government-related and act as **collateral**.
- Maturities vary: intraday, overnight, longer, or **"open"** — no defined
  maturity date, with rate and term renegotiated daily until both parties let
  it mature.

> **The repo direction trips people constantly.** The borrower **sells** now
> and **buys back** later at a **higher** price. The price difference is the
> interest. "Buy now, sell back later at a higher price" describes the
> *lender's* side (a reverse repo) and is the standard wrong answer. A repo is
> like a secured loan **because there is collateral** — not because the RBA is
> involved and not because property backs it.

### Treasury notes

- Issued to finance Commonwealth Government operations.
- **If the government is in surplus, no T-notes are issued** — the deck cites
  2003–2009.
- Maturities of one year or less.

Naming conventions differ by country, and this is a favourite trap:

| Australia | USA |
|---|---|
| Treasury **note** (≤ 1 year) | Treasury **bill** |
| Treasury **bond** (1–10 years) | Treasury **note** |
| Treasury **bond** (> 10 years) | Treasury **bond** |

> **An Australian "Treasury note" is a US "Treasury bill".** The word "note"
> means a money-market instrument in Australia and a 1–10 year instrument in
> the US. If a question mixes jurisdictions, translate before you classify by
> maturity.

### Commercial paper

- **Unsecured promissory notes.**
- Because they are unsecured, only large corporations with high credit ratings
  can issue them.
- An alternative to short-term bank borrowing.
- **Very limited secondary market.**

### Bank accepted bills (BABs)

A **time draft drawn on and accepted by a commercial bank**. Used mainly in
international trade: the commercial bank **substitutes its creditworthiness
for the importer's**, which is the entire economic point.

The flow, in the deck's numbering:

```
1.  Importer places purchase order with exporter
2.  Importer applies to its bank for a letter of credit (L/C)
3.  Importer's bank authorises and sends the L/C to the exporter's bank
4.  Exporter's bank notifies exporter that the L/C is received
5.  Exporter ships the goods
6.  Exporter sends shipping documents and time draft to its bank
7.  Exporter's bank forwards documents and time draft to importer's bank
8.  Importer signs a promissory note to pay the face value of the BAB
9.  Importer's bank releases shipping documents to importer
10. Importer's bank ACCEPTS the time draft — the BAB now exists
11. Importer's bank either holds the BAB, or sells it into the money market
12. The money-market investor pays the discounted value
13. Exporter is paid the discounted value of the BAB
14. Importer pays the face value when the goods arrive
15. The holder is paid face value at maturity
```

The **interest income is the difference between the discounted value paid to
the exporter and the nominal (face) value** of the BAB.

> **A BAB is a discount instrument — there is no coupon.** The exporter
> receives less than face today; the holder receives face at maturity. The gap
> *is* the return. Asking "what is the coupon rate on a BAB" is a category
> error, and "all bonds pay coupons" is false for exactly this reason (zero
> coupon bonds too).

### What all five have in common

- **Wholesale** — sold in large denominations, not to retail investors.
- **Low returns**, because of low default risk and high liquidity.
- Issuers range from **government to banks to large corporations**.
- Maturities from **intraday to one year** (an open repo behaves like a
  one-day instrument that rolls).
- **Secondary market liquidity varies substantially** — deep for T-notes, very
  thin for commercial paper.

### The "ideal" money market instrument

Straight from the tutorial solution, and worth memorising as four properties:

1. **Low default risk**
2. **Low price risk** — which follows from short term to maturity
3. **Highly marketable** — can be bought or sold quickly
4. **Sold in large denominations**, so the per-dollar cost of executing a
   transaction is very low

> **"Small denomination" is not a money-market characteristic — it is the
> opposite of one.** Large denominations are what make the per-dollar
> transaction cost tiny. The tutorial's Q2 ("which is NOT a characteristic")
> answers *small denomination* for precisely this reason, and it is the only
> one of the four options that is not on the list above.

<details><summary>Checkpoint — money market</summary>

1. Are money market securities risk-free?
2. Bank A has surplus in its ESA and lends to Bank B overnight. What is the
   rate called, and is the loan secured?
3. Why can only large, highly rated corporations issue commercial paper?

**Answers**

1. **No** — low default risk, not zero. The tutorial marks "securities
   transacted in the money market are risk free" as false; the correct
   statement is that the money market is an over-the-counter market.
2. The **cash rate** (interbank rate). The loan is **unsecured** — no
   collateral. A secured overnight loan against government paper would be a
   repo.
3. Because commercial paper is **unsecured**. With no collateral, only the
   issuer's own credit quality protects the buyer, so only strong issuers can
   place it.

</details>

---

## 5. Coupon types and LIBOR

### Fixed vs floating

- **Fixed rate** — the coupon rate is set until maturity.
- **Floating rate** — the coupon rate is **reset periodically** based on
  changes in a **reference rate**.

The historically dominant reference rate was **LIBOR** — the London Interbank
Offered Rate. LIBOR is being phased out and replaced by **alternative
reference rates (ARRs)**, but the deck keeps it because you cannot understand
*why* it had to go without understanding how it was made.

> **A floating-rate note floats with a *reference rate*, not with the issuer's
> credit.** The Part B tutorial statement "we can classify a bond as a
> LIBOR-based floating-rate bond when its coupon varies with market-based
> reassessments of the issuer's credit quality" is **false**. The coupon
> varies with LIBOR. Credit reassessment changes the *spread* over LIBOR at
> issue and changes the bond's *price* thereafter — it does not reset the
> coupon.

### How LIBOR was set

1. Every business day, a selected group of banks submits to the British
   Bankers' Association the rate at which they believe they could borrow from
   other banks in the London interbank market.
2. The submissions are **ranked from highest to lowest**.
3. The **upper four and lower four** submissions are **discarded**.
4. The **arithmetic mean of the remaining rates** becomes LIBOR.

With sixteen banks, that leaves eight rates in the average. This is a
**trimmed mean**, and the trimming is the whole design — it is meant to make
any single bank's submission nearly irrelevant.

```
LIBOR = mean( sorted submissions [5th … 12th] )        for 16 submissions
```

### Worked example — the deck's version

Sixteen submissions (%):

```
4.810  4.810  4.810  4.810  4.810  4.810  4.810  4.810
4.815  4.815  4.815  4.820  4.820  4.820  4.820  4.830
```

Drop the bottom four (`4.810 × 4`) and the top four
(`4.830, 4.820, 4.820, 4.820`). The remaining eight are:

```
4.810  4.810  4.810  4.810  4.815  4.815  4.815  4.820

Sum   = (4.810 × 4) + (4.815 × 3) + 4.820
      = 19.240 + 14.445 + 4.820
      = 38.505

LIBOR = 38.505 / 8 = 4.813125%
```

The deck states **4.8131%** — confirmed, it is 4.813125% rounded to four
decimal places.

### Worked example — the tutorial's version (Part A, Q16)

Sixteen submissions (%):

```
4.810  4.810  4.810  4.810
4.815  4.815  4.815  4.815  4.815
4.820  4.820  4.820  4.820  4.820  4.820
4.830
```

Already sorted. Drop the lowest four — the four 4.810s. Drop the highest four
— 4.830 and three of the 4.820s. What remains:

```
4.815  4.815  4.815  4.815  4.815  4.820  4.820  4.820

Sum   = (4.815 × 5) + (4.820 × 3)
      = 24.075 + 14.460
      = 38.535

LIBOR = 38.535 / 8 = 4.816875%
```

The tutorial solution gives **4.816875%** — confirmed exactly.

> **Trim four from each end, not four in total, and average the eight that
> survive.** With sixteen submissions you always average eight. The most
> common wrong answer is the plain mean of all sixteen (here 4.8165625%) — close
> enough to look right and wrong enough to lose the mark. The second most
> common is trimming two from each end.

> **Count carefully when values tie.** Five banks submit 4.815 and six submit
> 4.820. You are dropping the four *highest submissions*, which means 4.830
> plus **three** of the six 4.820s — leaving three 4.820s in the average. It is
> the position in the sorted list that gets trimmed, not the distinct value.

The manipulation this design permits, and the money it moved, is Topic 9.

---

## 6. Equity instruments

Equity securities are **certificates of ownership of a company**. Two types.

### Ordinary (common) shares

- The **basic ownership claim** in a company.
- Holders have the **right to vote** on company decisions.
- **Not guaranteed any dividend**.
- **Lowest priority claim** on assets in the event of insolvency.

### Preference shares

- **Legally a form of equity.**
- Regular (non-convertible) preference shares confer **no voting rights**.
- Holders receive a **fixed dividend regardless of the company's earnings**.
- On liquidation they receive a **stated value (usually par)** — not a
  residual value.

### The three-way comparison

This table is the most quotable thing in Part A.

| | Bond | Preference shares | Ordinary shares |
|---|---|---|---|
| **Maturity** | Fixed maturity | *Can* have a fixed maturity | No fixed maturity |
| **Payment** | Guaranteed obligation to repay | Dividend without guarantee — company can defer or cancel | Dividend without guarantee — company can defer or cancel |
| **Bankruptcy rank** | Highest in capital structure | **Lower than subordinated debt**, above ordinary | Lowest |
| **Upside** | No participation in appreciation of residual value | No participation in appreciation of residual value | **Participates** in appreciation of residual value |
| **Voting** | No | No | **Yes** |

> **Preference shares rank *below subordinated debt*, not just below "debt".**
> The full order is: senior debt → subordinated debt → preference shares →
> ordinary shares. The tutorial's statement that "preferred stockholders hold
> a claim with priority over common stockholders" and "bondholders hold a
> claim with priority over preferred stockholders" is **both true** — that pair
> is a single question with "both are true" as the answer.

> **"Fixed dividend" is not "guaranteed dividend".** Preference shares get a
> *stated* dividend, and it must be paid before ordinary dividends — but the
> company can still defer or cancel it. That is why preference shares are
> equity, not debt, and why the tutorial marks "receive regular dividend
> payment under contractual obligations" as the wrong description. The right
> one is "receive dividend payment before holders of common shares".

**Riskiness ranking, all else equal:** ordinary shares are the riskiest
capital-market security, then preference shares, then corporate bonds, then
Treasury bonds. Preference shares are **less** risky than ordinary shares of
the *same* company, because they sit above them in the queue and their
dividend is stated.

<details><summary>Checkpoint — equity</summary>

1. Which of these does an ordinary shareholder receive: votes, dividends,
   interest payments?
2. Is a preference share a debt or an equity instrument, and what makes it
   hybrid?
3. Which is riskier, all else equal — a company's preference share or its
   ordinary share? Why?

**Answers**

1. **Votes and dividends.** Not interest — interest is paid to lenders, and a
   shareholder is an owner, not a lender. Note that dividends are received but
   not *guaranteed*.
2. **Equity, legally.** It is hybrid because it borrows bond-like features (a
   fixed dividend, a possible fixed maturity, a stated liquidation value, no
   voting rights) while remaining an equity claim that can have its dividend
   deferred or cancelled.
3. The **ordinary share**. It ranks last in bankruptcy and its dividend has no
   stated amount. The trade-off is that only the ordinary share participates
   in the upside of residual value.

</details>

---

## Summary

- Global fixed income (≈$135tn) is larger than global equity (≈$110tn); the US
  is roughly 40% of each; Australia is small in both.
- Bond fields: issuer, maturity, par (six synonyms), market price, interest
  rate, payment frequency, current yield, YTM, currency. **Coupons are
  calculated on par, not on market price.**
- The equity mapping: no maturity, book value of equity, dividend per share,
  discretionary frequency, dividend yield, required return on equity.
- Money market = maturity ≤ 1 year: overnight interbank loans (the cash rate,
  **unsecured**), repos (borrower **sells** first, collateralised), Treasury
  notes (none issued in surplus years), commercial paper (**unsecured**, thin
  secondary market), bank accepted bills (bank substitutes its credit for the
  importer's; return is the **discount**).
- The ideal money-market instrument: low default risk, low price risk, highly
  marketable, **large** denominations.
- LIBOR: sixteen submissions, **drop four from each end, average the middle
  eight**. Worked answer for the tutorial set: **4.816875%**.
- Floating-rate coupons reset with a **reference rate**, never with the
  issuer's credit reassessment.
- Capital structure order: senior debt → subordinated debt → preference shares
  → ordinary shares. Only ordinary shares vote and only ordinary shares
  participate in residual upside.
