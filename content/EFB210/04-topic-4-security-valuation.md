# TOPIC 4 — Security Valuation

Lecture 4. Ross et al. (2021, 8th ed.) Ch 7–8; Ch 15.1–15.2 (skim), Ch 15.3.

One principle runs through the whole topic:

> **The value of a security is the present value of its future cash flows.**

Debt gives you coupons plus a face value. Equity gives you dividends. Everything else — premiums, discounts, growth stages, rights issues — is a rearrangement of that sentence. This is the last topic examined in the mid-semester exam.

---

## 4.1 Notation changes

Three small changes from Topic 3 that matter for reading the formula sheet:

- Price today is `P₀` (not `PV₀`).
- Future cash flows are `CFₜ` (not `FVₜ`).
- Summation starts at **`t = 1`**, because if you buy a security today you are generally **not** entitled to a cash flow today.
- The discount rate is `r`, or specifically `kd` (cost of debt) and `ke` (cost of equity).

> **Why `t = 1`?** If a share is about to pay a dividend `D₀`, you are not entitled to it if you bought on or after the **ex-dividend date** — typically about a month before payment. So `D₀` is excluded from the price. This is not a mathematical nicety; it is the reason the growth model needs `D₁ = D₀(1 + g)` rather than `D₀`.

---

## 4.2 Bonds and debentures

A **bond** (or debenture) offers fixed interest payments (the **coupon**) plus repayment of the **face value** at maturity. Face value is **$100** unless stated otherwise.

```
       n
P₀ =   Σ   C(1 + kd)⁻ᵗ  +  FV(1 + kd)⁻ⁿ
      t=1
```

Because the coupons are a level series, they are an **annuity**:

```
P₀ = C [1 − 1/(1 + kd)ⁿ] / kd  +  FV (1 + kd)⁻ⁿ
      └──── PV of coupons ────┘   └─ PV of face ─┘
```

That single line prices a 1-year bond and a 30-year bond identically — only `n` changes, provided face value, coupon, coupon frequency and yield are the same.

**Pricing convention:** following AFMA (Australian Financial Markets Association) market convention, this unit prices bonds to **three decimal places**.

### Worked example — Lecture 4, Example 1

$100 face value bond, 10% annual coupon, 10 years to maturity, `kd = 8%`.

```
Coupon C = 10% × 100 = $10 per year

P₀ = 10[1 − 1/(1.08)¹⁰]/0.08 + 100(1.08)⁻¹⁰
   = 10 × 6.710081  +  100 × 0.463193
   = 67.101  +  46.319
   = $113.420
```

### What `kd` is

`kd` is the **yield** — the constant rate that equates a bond's price to its coupons, face value and maturity. It represents the market's required return given:

- the current economic **cost of funds**
- **default risk** (credit quality — the lecture's chart ranks AAA Australian Government, AA Queensland Government, AAA Corporate, AA Corporate, A Corporate, BBB Corporate in ascending yield order)
- **time to maturity**
- the bond's **coupon**

**In the market we observe prices, not yields.** To find a yield you use the pricing formula and take educated guesses until the present value equals the observed price. Topic 9 (WACC) does this repeatedly.

### Premium, par and discount — the three-line rule

| Condition | Bond sells at | Relationship |
|---|---|---|
| `P₀ < FV` | **Discount** | `kd > C%` |
| `P₀ = FV` | **Par** | `kd = C%` |
| `P₀ > FV` | **Premium** | `kd < C%` |

And the relationship between yield and price is **inverse**: higher yield → lower price.

The intuition: a bond promising a 10% coupon when the market demands 8% is over-paying you, so people bid its price above $100 until the *effective* return falls to 8%.

### Worked example — Tutorial 4 Q3 — maturity and interest-rate sensitivity

Face $100, 8.00% annual coupon.

```
(a) 5 years, yield 8%:   8[1 − 1.08⁻⁵]/0.08  + 100(1.08)⁻⁵  = $100.000   (par)
(b) 10 years, yield 8%:  8[1 − 1.08⁻¹⁰]/0.08 + 100(1.08)⁻¹⁰ = $100.000   (par)
(c) 5 years, yield 9%:   8[1 − 1.09⁻⁵]/0.09  + 100(1.09)⁻⁵  = $96.110
    10 years, yield 9%:  8[1 − 1.09⁻¹⁰]/0.09 + 100(1.09)⁻¹⁰ = $93.582
```

**(d) Which is more sensitive?**

```
5-year:   (96.110 − 100)/100  = −3.89%
10-year:  (93.582 − 100)/100  = −6.42%
```

**The 10-year bond is more sensitive.** A longer bond has more cash flows further out, and distant cash flows are more affected by a change in the discount rate.

> **Coupon rate = yield ⟹ par, regardless of maturity.** Tutorial 4 MCQ 15 asks the maturity of a $100 debenture with an 8% coupon priced at $100 when the required return is 8%. The answer is **(d) all of the above are possible** — 1 year, 3 years and 8 years all give exactly $100. Maturity is undeterminable from a par price.

### Worked example — Tutorial 4 Q4

Face $100, 10.00% annual coupon, 3 years to maturity, yield 12.00%.

**(a)** Yield (12%) > coupon rate (10%), so the bond sells at a **discount**.

**(b)** Cash flows: `$10, $10, $110`.

**(c)**
```
P₀ = 10[1 − 1/(1.12)³]/0.12 + 100(1.12)⁻³
   = 10 × 2.401831 + 100 × 0.711780
   = 24.018 + 71.178
   = $95.196
```

**(d)** Yield drops to 10.00%:
```
P₀ = 10[1 − 1/(1.10)³]/0.10 + 100(1.10)⁻³ = 24.869 + 75.131 = $100.000     (par)
```

### Worked example — Tutorial 4 Q5

Face $100, 10.00% annual coupon, 5 years.

- **(a)** Discount when the yield **exceeds** 10.00%.
- **(b)** Par when the yield **equals** 10.00%.
- **(c)** Premium when the yield is **below** 10.00%.
- **(d)** Confirming:

```
kd = 9%:   10[1 − 1.09⁻⁵]/0.09 + 100(1.09)⁻⁵ = $103.890   premium ✔
kd = 10%:  10[1 − 1.10⁻⁵]/0.10 + 100(1.10)⁻⁵ = $100.000   par ✔
kd = 11%:  10[1 − 1.11⁻⁵]/0.11 + 100(1.11)⁻⁵ = $ 96.304   discount ✔
```

**Tutorial 4 MCQ 14.** 10% coupon, annual, 3 years, yield 8%:
```
P₀ = 10[1 − 1/(1.08)³]/0.08 + 100(1.08)⁻³ = 25.771 + 79.383 = $105.154
```
That $105.154 reappears in the WACC tutorial as a bond you have to reverse-engineer the yield from. Remember it.

---

## 4.3 Why `ke > kd`

Tutorial 4 Q1 asks this directly, and the answer has three parts:

1. **Equity is riskier.** Equity holders are paid last and dividends are discretionary; debt holders have a contractual, senior, often secured claim.
2. **Debt interest is tax-deductible** to the firm, which lowers its effective cost.
3. Therefore equity holders demand a higher return.

**Why do `ke` and `kd` vary across securities?** Credit/default risk, maturity, liquidity, covenants and security, inflation expectations, and — for equity — business risk plus financial leverage (equity gets riskier as the firm takes on more debt).

---

## 4.4 Shares — the dividend discount models

An owner of a share is entitled to future dividends, so:

```
       ∞
P₀ =   Σ   Dₜ (1 + ke)⁻ᵗ
      t=1
```

Three tractable versions.

### Model 1 — Perpetuity (constant dividend)

```
P₀ = D / ke
```

Realistically applied to **non-redeemable preference shares**.

**Lecture 4, Example 2.** A non-redeemable preference share paying a constant 90 cents per year, `ke = 15%`. The dividend has just been paid.
```
P₀ = 0.90/0.15 = $6.00
```

Rearranged, `ke = D/P₀` — which is how Topic 9 backs out a cost of preference capital.

### Model 2 — Constant growth (the Gordon Growth Model)

```
P₀ = D₁ / (ke − g)        where   D₁ = D₀(1 + g)
```

| | |
|---|---|
| **Advantages** | More realistic than a constant dividend; easy to calculate; forms the tail of the standard model |
| **Limitation** | Few real shares grow at a constant rate forever |

**Lecture 4, Example 3.** A share has **just paid** a 90-cent dividend; dividends grow at 10% p.a. forever; required return 15%.
```
D₁ = 0.90 × 1.10 = 0.99
P₀ = 0.99/(0.15 − 0.10) = 0.99/0.05 = $19.80
```

> **The single most examined error in this unit: using `D₀` instead of `D₁`.** "Has just paid a dividend of $0.90" means `D₀ = 0.90`. Feeding 0.90 straight into the formula gives $18.00 instead of $19.80 — a 9.1% error, and $18.00 will be sitting there as an MCQ option. "Is expected to pay a dividend **next year** of $0.90" means `D₁ = 0.90` and no grossing-up is needed. Read the tense.

**Tutorial 4 Q8.** Just paid $0.90, `g = 5.00%`, `ke = 12.00%`.
```
D₁ = 0.90 × 1.05 = 0.945
P₀ = 0.945/(0.12 − 0.05) = 0.945/0.07 = $13.50
```

**Tutorial 4 MCQ 17.** Just paid $0.50, `g = 3.00%`, `ke = 10.00%`.
```
P₀ = 0.50(1.03)/(0.10 − 0.03) = 0.515/0.07 = $7.357  ≈ $7.36
```
The `$7.14` option is `0.50/0.07` — the `D₀` mistake, priced in.

### Worked example — Tutorial 4 Q9 — why doubling `g` does not double the price

Two stocks each currently pay `D₀ = $1.00`. Stock B's earnings grow at **twice** Stock A's 4.00% rate. `ke = 10.00%` for both. **Would B sell for twice the price of A?**

```
P_A = 1.00(1.04)/(0.10 − 0.04) = 1.04/0.06 = $17.333
P_B = 1.00(1.08)/(0.10 − 0.08) = 1.08/0.02 = $54.000

Ratio = 54.000/17.333 = 3.115
```

**False.** B sells for **3.12 times** A's price, not twice.

> **The denominator, not the numerator, does the work.** Doubling `g` from 4% to 8% raised the numerator by 3.8% but shrank the denominator from 0.06 to 0.02 — a factor of three. As `g → ke` the price goes to infinity, and for `g > ke` the model returns a *negative* price, which is meaningless. The Gordon model requires `g < ke`. If a question hands you `g > ke`, say so; do not report the negative number.

### Model 3 — Standard (multi-stage) model

Forecast specific dividends until growth becomes constant, then attach a Gordon-model terminal value.

```
       n                          Pₙ
P₀ =   Σ  Dₜ(1 + ke)⁻ᵗ   +   ────────────
      t=1                     (1 + ke)ⁿ
```

**The five steps the lecture sets out:**

1. Identify the period from which dividends grow at a constant rate.
2. Calculate the PV of the dividends over the finite (non-constant) period.
3. Calculate `Pₙ`, the Gordon value of the constant-growth dividends, **at year `n`**.
4. Discount `Pₙ` back to today: `Pₙ(1 + ke)⁻ⁿ`.
5. Add the two present values.

**Lecture 4, Example 4.** `D₀ = $1.00` just paid; dividends grow at **12% for five years**, then **6% forever**; `ke = 10%`.

Timeline of dividends:
```
t:      1       2       3       4       5   |    6       7 …
D:   1.1200  1.2544  1.4049  1.5735  1.7623 |  1.8681  1.9802     (g = 6% from t=6)
```

```
Step 2 — PV of D₁…D₅:
  1.1200(1.1)⁻¹ = 1.0182
  1.2544(1.1)⁻² = 1.0367
  1.4049(1.1)⁻³ = 1.0555
  1.5735(1.1)⁻⁴ = 1.0747
  1.7623(1.1)⁻⁵ = 1.0943
                  ------
                  5.2794

Step 3 — terminal value at year 5:
  P₅ = D₆/(ke − g) = 1.8681/(0.10 − 0.06) = 46.7021

Step 4 — discount it:
  46.7021(1.1)⁻⁵ = 28.9983

Step 5 — add:
  P₀ = 5.2794 + 28.9983 = $34.278
```

> **`Pₙ` is dated at year `n`, not year `n+1`.** The Gordon formula values a stream one period before its first cash flow. `D₆` is the first constant-growth dividend, so `P₅ = D₆/(ke − g)` sits at year **5** and is discounted **5** periods. Discounting 6 periods gives $31.62; using `D₅` in the numerator gives $32.82. Both are wrong and both are plausible-looking.

**Lecture 4, Example 5 — dividends that start late.** A commencing company pays $0.12 in year 3, $0.18 in year 4 and $0.25 in year 5, then grows at 5% indefinitely. `ke = 15%`.

```
P₅ = 0.25(1.05)/(0.15 − 0.05) = 0.2625/0.10 = 2.6250

P₀ = 0.12(1.15)⁻³ + 0.18(1.15)⁻⁴ + 0.25(1.15)⁻⁵ + 2.6250(1.15)⁻⁵
   = 0.0789 + 0.1029 + 0.1243 + 1.3051
   = $1.611
```

Note there are no dividends in years 1 and 2 — they contribute nothing and need no placeholder.

**Tutorial 4 Q10.** `D₀ = $0.50` just paid; grows 5.00% for 4 years, then 3.00% forever; `ke = 10.00%`.

```
D₁ = 0.5250   D₂ = 0.5513   D₃ = 0.5788   D₄ = 0.6078
P₄ = D₅/(ke − g) = 0.60775(1.03)/(0.10 − 0.03) = 0.62598/0.07 = 8.9427

P₀ = 0.5250(1.1)⁻¹ + 0.5513(1.1)⁻² + 0.5788(1.1)⁻³ + 0.6078(1.1)⁻⁴ + 8.9427(1.1)⁻⁴
   = 0.4773 + 0.4556 + 0.4349 + 0.4151 + 6.1080
   = $7.891
```

**Tutorial 4 Q11 — Spec Company.** Dividends of $0.20, $0.30 and $0.40 in years 3, 4 and 5; then 4.00% growth forever; `ke = 13.00%`.

```
P₅ = 0.40(1.04)/(0.13 − 0.04) = 0.416/0.09 = 4.6222

P₀ = 0.20(1.13)⁻³ + 0.30(1.13)⁻⁴ + 0.40(1.13)⁻⁵ + 4.6222(1.13)⁻⁵
   = 0.1386 + 0.1840 + 0.2171 + 2.5088
   = $3.048
```

**Tutorial 4 MCQ 18.** `D₀ = $0.375` just issued; 25.00% growth for two years, then 7.00% indefinitely; `ke = 15.00%`.

```
D₁ = 0.375(1.25)  = 0.46875
D₂ = 0.375(1.25)² = 0.58594
P₂ = D₃/(ke − g)  = 0.58594(1.07)/(0.15 − 0.07) = 0.62695/0.08 = 7.83691

P₀ = 0.46875(1.15)⁻¹ + 0.58594(1.15)⁻² + 7.83691(1.15)⁻²
   = 0.40761 + 0.44306 + 5.92582
   = $6.776  ≈ $6.78
```

---

## 4.5 Equity issuance

Ordinary shares carry **proportional ownership**, **voting rights**, a **claim on dividends** and **limited liability**. Ways to issue them:

- Initial Public Offering (IPO)
- Rights Issue
- Private Placement
- Employee Share Plans
- Bonus Issues

### Initial Public Offering

**ASX asset test:** tangible assets > $4m **or** market capitalisation > $15m.

**Prospectus** must contain: information on the securities being issued; the issuer's non-financial information (from executives and external experts); the issuer's financial information (audited statements and forecasts); and a discussion of business risk.

**Pricing:** either a **fixed price issue** (based on an earnings forecast) or a **book build** (competitive bidding).

**Costs** — listing fees, accountant fees, legal fees, underwriting:

| Issue size | Total cost as % of proceeds |
|---|---|
| < $10m | Can exceed **15%** |
| > $100m | Average **2%–5%** |

The lecture's case study is the **Dick Smith IPO** (prospectus November 2013): flotation costs of 2.2% underwriting fee plus 0.55% management fee, fully underwritten by joint lead managers Goldman Sachs and Macquarie. The slide notes actual FY2014 EBITDA of $74.4m and a share price of $2.25 on 16 February 2015 — an implicit comment on how forecasts and outcomes diverge.

**Costs and benefits of going public** (Tutorial 4 Q6):

| Benefits | Costs |
|---|---|
| Access to a much larger pool of capital | Large direct flotation costs |
| Liquidity for existing owners | Continuous disclosure and reporting obligations |
| Market price provides an ongoing valuation | Loss of control / dilution of ownership |
| Shares become currency for acquisitions and staff incentives | Pressure from short-term market expectations |
| Profile and credibility | Compliance and governance overheads |

### Rights issues

A **rights issue** offers new ordinary shares **to existing shareholders**. Each shareholder gets the right to:

- buy a specified number of shares (usually pro-rata, e.g. 1-for-5),
- at a specified **subscription price** `S`,
- within a specified time (before the ex-rights day),
- with the possible ability to sell the right (**renounceable**).

To make shareholders participate, `S` must be set at a **discount to the current price**. The effect is that the share price **dilutes** on the ex-rights date — **but the shareholder's wealth is not diluted**, provided they either take up or sell their rights.

The lecture's real example: **Transurban**, $4 billion in July 2021 — $13/share, an 8.3% discount to the last trade, 1-for-9 — to increase its stake in the WestConnex motorway project.

### The table method (the lecture's preferred approach)

**Lecture 4, Example 6.** XYZ Corp issues **one new share for every four owned** at a subscription price of `$0.50`, when the current (cum-rights) price is `M = $1.00`.

| | Qty | × | Price | = | Value |
|---|---|---|---|---|---|
| Old | 4 | × | $1.00 | = | $4.00 |
| New issue | 1 | × | $0.50 | = | $0.50 |
| **New total** | **5** | × | **$0.90** | = | **$4.50** |

```
Theoretical ex-rights price   X = 4.50/5 = $0.90
Value of the right            R = X − S  = 0.90 − 0.50 = $0.40
```

### The formula method

```
      N·M + S                     N(M − S)
X  =  ───────            R  =  ────────────  =  X − S
       N + 1                      N + 1
```

where `N` = number of existing shares required for entitlement to **one** new share.

Both are on the mid-semester formula sheet. They give identical answers; the lecture says the table is more intuitive and leaves the choice to you.

> **"Value of a right" means the right to buy ONE NEW SHARE, and equals `X − S`.** The other number floating around — `(M − S)/(N + 1)` — is the value attaching to **one old share held**, which is `R/N`. Tutorial 4 MCQ 19 lists both: $1.67 (`X − S`) and $0.33 (`(M − S)/(N+1)`). The unit's formula sheet defines `R = N(M − S)/(N + 1)`, which is `X − S`, so **$1.67 is the answer**. When a question says "value of the right to one new share", it is signposting exactly this.

### Worked example — Tutorial 4 Q12 — Bugrid Holdings

Bugrid raises **$15 million**. The share sells for **$2.50** and there are **50 million** shares outstanding.

**(a) Maximum possible subscription price** = the current market price, **$2.50**. Above that nobody would subscribe — they could buy more cheaply on-market.

**(b) Minimum possible subscription price** — approaching **$0** (in principle nil, subject to any par-value floor). The lower the price the more shares must be issued, but the issue still raises $15m.

With `S = $1.50`:

```
(c) Shares to be sold  = 15,000,000/1.50 = 10,000,000 new shares
(d) N = 50,000,000/10,000,000 = 5  →  a 1-for-5 issue

(e) X = (5 × 2.50 + 1.50)/6 = 14.00/6 = $2.3333
(f) R = X − S = 2.3333 − 1.50 = $0.8333
    (per old share held: (2.50 − 1.50)/6 = $0.1667)
```

**(g) Is a holder of 100 shares who cannot participate harmed?**

```
Before:  100 × $2.50                              = $250.00
After:   100 shares × $2.3333                     = $233.33
         + 100 rights sold × $0.1667              = $ 16.67
                                                    -------
                                                    $250.00
```

**No — provided they sell their rights.** Wealth is exactly preserved. If they let the rights lapse they lose the $16.67.

### Worked example — Tutorial 4 Q13 — Poker Ltd

1-for-5 rights issue, subscription price `S = $1.90`, cum-rights price `M = $2.20`, 5,000 shares outstanding. Bill owns 5% and has $95.00 cash.

```
(a) X = (5 × 2.20 + 1.90)/6 = 12.90/6 = $2.15
(b) Value of the right to one new share  R = X − S = 2.15 − 1.90 = $0.25
    (value attaching to one old share = (2.20 − 1.90)/6 = $0.05)
```

**(c)** Bill holds `0.05 × 5,000 = 250 shares`; entitlement `250/5 = 50 new shares`; cost `50 × 1.90 = $95.00` — exactly his cash.

| Choice | Working | Wealth |
|---|---|---|
| (i) Participates | `(250 + 50) × 2.15 + (95 − 95)` | **$645.00** |
| (ii) Sells his rights | `250 × 2.15 + 250 × 0.05 + 95` = `537.50 + 12.50 + 95` | **$645.00** |
| (iii) Does nothing | `250 × 2.15 + 95` = `537.50 + 95` | **$632.50** |

> **Participate or sell — either preserves wealth. Doing nothing destroys $12.50.** Under perfect capital markets the first two options must be identical, and if your arithmetic makes them differ you have used the wrong `R`. Note that (ii) uses **$0.05 per old share** (250 rights × $0.05), not $0.25 — Bill is selling 250 rights, and it takes five of them to buy one new share.

### Worked example — Tutorial 4 MCQ 20

1,080,000 shares trading at $15.68. Raise $2 million. Total shares to rise to 1,400,000.

```
New shares  = 1,400,000 − 1,080,000 = 320,000
S           = 2,000,000/320,000     = $6.25
N           = 1,080,000/320,000     = 3.375

X = (1,080,000 × 15.68 + 2,000,000)/1,400,000
  = (16,934,400 + 2,000,000)/1,400,000
  = 18,934,400/1,400,000
  = $13.5246   ≈ $13.52

R = X − S = 13.5246 − 6.25 = $7.2746  ≈ $7.27
```

Answer **(c) $13.52, $7.27**. Option (d) pairs the right `X` with `(M − S)/(N + 1) = $2.16` — the per-old-share figure again.

### Rights issue vs private placement

Tutorial 4 Q7, from the perspective of **existing shareholders**:

| | Rights issue | Private placement |
|---|---|---|
| Who can buy | Existing shareholders, pro-rata | A selected group of (usually institutional) investors |
| Ownership | Proportional stake **preserved** if you participate | Existing holders are **diluted** — their percentage falls |
| Compensation for the discount | Existing holders receive the right, which has value | Existing holders receive nothing |
| Speed and cost | Slower, more disclosure | Faster, cheaper |

**The fundamental difference: a rights issue gives existing shareholders the opportunity to avoid dilution; a private placement does not.**

---

## Summary

- **Value = PV of future cash flows.** Everything else is bookkeeping.
- **Bonds:** `P₀ = C[1 − 1/(1+kd)ⁿ]/kd + FV(1+kd)⁻ⁿ`. Face value $100 unless stated; price to three decimals.
- `kd > C%` → discount; `kd = C%` → par; `kd < C%` → premium. Yield and price move **inversely**. Longer maturity → more price sensitivity to yield.
- `ke > kd` because equity is a junior, discretionary, riskier claim, and interest is tax-deductible.
- **Preference shares / constant dividend:** `P₀ = D/ke`.
- **Gordon Growth:** `P₀ = D₁/(ke − g)` with `D₁ = D₀(1 + g)`. Requires `g < ke`. Doubling `g` more than doubles the price.
- **Standard model:** PV of the non-constant dividends, plus `Pₙ = Dₙ₊₁/(ke − g)` **discounted `n` periods**.
- **IPO:** asset test, prospectus, fixed-price or book-build, costs from 2–5% (large) to >15% (small).
- **Rights issue:** `X = (N·M + S)/(N + 1)`, `R = N(M − S)/(N + 1) = X − S`. Participating or selling the rights both preserve wealth exactly; letting them lapse does not.

<details><summary>Checkpoint — seven questions</summary>

1. A $100 bond pays a 6% annual coupon with 7 years to maturity. Price it at yields of 5%, 6% and 7%, and say whether each is premium, par or discount.
2. A share just paid `D₀ = $1.20`. Dividends grow at 4% forever and `ke = 11%`. Find `P₀`.
3. Same share, but the $1.20 is the dividend expected **next year**. Find `P₀`.
4. A firm pays no dividend for two years, then $0.40 in year 3 and $0.55 in year 4, after which dividends grow at 5% forever. `ke = 12%`. Find `P₀`.
5. A 1-for-4 rights issue is made at $3.00 when the cum-rights price is $4.20. Find `X`, the value of the right to one new share, and the value attaching to one old share.
6. An investor holds 800 shares in the company in Q5 and does not participate. What is their wealth before and after if they sell their rights?
7. Why must the terminal value `Pₙ` be discounted `n` periods rather than `n + 1`?

---

**Answers**

1. `5%: 6[1 − 1.05⁻⁷]/0.05 + 100(1.05)⁻⁷ = 34.72 + 71.07 = **$105.786** (premium)`. `6%: **$100.000** (par)`. `7%: 6[1 − 1.07⁻⁷]/0.07 + 100(1.07)⁻⁷ = 32.34 + 62.27 = **$94.611** (discount)`.

2. `D₁ = 1.20 × 1.04 = 1.248`. `P₀ = 1.248/(0.11 − 0.04) = 1.248/0.07 = **$17.829**`.

3. `D₁` is already given, so no grossing-up: `P₀ = 1.20/0.07 = **$17.143**`. The two answers differ by 4% — the growth rate — which is the `D₀`/`D₁` trap in miniature.

4. `P₄ = 0.55(1.05)/(0.12 − 0.05) = 0.5775/0.07 = 8.25`. `P₀ = 0.40(1.12)⁻³ + 0.55(1.12)⁻⁴ + 8.25(1.12)⁻⁴ = 0.2847 + 0.3495 + 5.2432 = **$5.877**`.

5. `X = (4 × 4.20 + 3.00)/5 = 19.80/5 = **$3.96**`. Right to one new share `R = X − S = 3.96 − 3.00 = **$0.96**`. Per old share `= (4.20 − 3.00)/5 = **$0.24**` (and `4 × 0.24 = 0.96` ✔).

6. Before: `800 × 4.20 = **$3,360.00**`. After: `800 × 3.96 + 800 × 0.24 = 3,168 + 192 = **$3,360.00**`. Unchanged.

7. Because the Gordon formula values a growing perpetuity **one period before its first cash flow**. `Pₙ` uses `Dₙ₊₁` in the numerator, so it is already dated at year `n`. Discounting `n + 1` periods would discount the same period twice.
</details>
