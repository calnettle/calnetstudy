# TOPIC 9 — Weighted Average Cost of Capital

Lecture 9. Ross et al. (2021, 8th ed.) Ch 14.

Since Topic 1 the discount rate has been handed to you. Topic 9 is where you have to produce it. It is the topic that stitches the whole unit together: you need bond pricing from Topic 4 to get `kd`, the dividend growth model from Topic 4 and the CAPM from Topic 8 to get `ke`, and you feed the result into the capital-budgeting models of Topics 5 and 6.

---

## 9.1 Three ways to set a discount rate

The rate must **reflect the risk of the cash flows being discounted**. Three approaches:

1. **Past experience or a comparable.** Quick, unrigorous.
2. **Use the CAPM directly.** You need a **project** beta. Do you know the covariance of the project's returns with the market's? Probably not — so you would **proxy** (find something similar), use experience, or infer. And you must be careful of **capital structure**, because a levered beta reflects the comparable's debt load, not yours.
3. **Weighted Average Cost of Capital.** Assume the project has the **same risk as the existing operations of the firm**. Then the firm's current `kd` and `ke` reflect the appropriate returns; weight them by capital structure.

---

## 9.2 What WACC is

Firms raise capital via debt and equity, and must pay for these funds:

- **explicitly**, via interest on debt
- **implicitly**, via the opportunity cost of equity

> **WACC is the rate that an investment or project must return to meet the required returns of those who have supplied the firm's capital.**

If a project's cash flows more than cover the WACC, it has a positive NPV. Negative NPVs arise when cash flows do not sufficiently cover the WACC. **If the WACC does not appropriately reflect the project's risk, the NPV calculated in the DCF analysis is wrong.**

### The formula, without tax

```
        E        D
WACC = ─── ke + ─── kd            where  V = E + D
        V        V
```

**Example.** Asset value 100 = Equity 50 (`ke = 0.15`) + Debt 50 (`kd = 0.10`):
```
WACC = 0.5(0.15) + 0.5(0.10) = 0.075 + 0.050 = 12.50%
```

### The formula, with tax

**Interest payments are tax deductible. Dividends are not.**

```
        E        D
WACC = ─── ke + ─── kd (1 − t)
        V        V
```

**Same example, `t = 0.3`:**
```
WACC = 0.5(0.15) + 0.5(0.10)(0.70) = 0.075 + 0.035 = 11.00%
```

The tax shield knocks 1.5 percentage points off the cost of capital. That is not a modelling choice — it is a real cash saving the tax system provides.

> **The `(1 − t)` goes on the debt term only, and only on debt.** Equity does not get it, because dividends are paid out of after-tax profit. Preference dividends do **not** get it either. A bank overdraft **does**, because overdraft interest is deductible.

### What cash flows go with this WACC

Tutorial 9 Q3 asks precisely this, and the answer is on the last slide of the lecture:

> **Net cash flows after tax but BEFORE interest and interest tax savings.**

In other words, the free cash flows you built in Topic 6 — which explicitly **excluded financing charges** because they are in the discount rate. Including interest in the cash flows *and* using an after-tax WACC double-counts the tax shield.

### The four conditions the standard WACC assumes

1. The cash flow definition is **after tax but before interest and interest tax savings**.
2. It employs **market values** for `E` and `D`, not book values.
3. The **target debt/equity ratio is not changing**, and the weights represent that target.
4. **The project has the same risk as the firm.**

---

## 9.3 The elements

### Cost of equity — two routes

**Route 1 — CAPM (the SML):**
```
ke = Rf + β ( E[Rm] − Rf )
```

**Route 2 — the dividend growth model, rearranged:**
```
        D₁
ke  =  ────  +  g
        P₀
```

The first term is the **dividend yield**, the second the **capital growth**. Together they are the total expected return. This is just the Gordon Growth Model from Topic 4 solved for `ke` instead of `P₀`.

> **`D₁`, again.** If the question says "the most recent dividend was $0.28 and dividends grow at 7%", then `D₁ = 0.28 × 1.07 = 0.2996`, not 0.28. Same trap as Topic 4, now embedded inside a WACC question where it corrupts everything downstream.

### Cost of debt

`kd` is the **yield to maturity** on the firm's debt, backed out of its market price using the Topic 4 bond formula:

```
P₀ = C [1 − 1/(1 + kd)ⁿ] / kd  +  FV (1 + kd)⁻ⁿ
```

You solve for `kd` by **trial and error**. The lecture's shortcut: look at the price relative to face value first.

| If the bond trades | Then |
|---|---|
| **above** par | `kd < coupon rate` — start guessing below the coupon |
| at par | `kd = coupon rate` — you are done |
| **below** par | `kd > coupon rate` — start guessing above the coupon |

For a bank loan or overdraft, `kd` is simply the stated interest rate.

### Cost of preference shares

```
        D
kp  =  ───          (a perpetuity — no growth)
        P₀
```

No `(1 − t)` adjustment: preference dividends are not deductible.

---

## 9.4 The full worked example — Lecture 9

A company has **1,000,000 shares** with a market value of **$4**, and **10,000 bonds** selling at **$113.420** with a **10% coupon** and **10 years to maturity**. Tax **30%**. The equity has a **beta of 1.75**, the most recent dividend was **$0.28** and dividends are expected to grow at **7%** indefinitely. Market return **10%**, risk-free rate **4%**.

**Step 1 — cost of equity, both ways.**
```
CAPM:   ke = 0.04 + 1.75(0.10 − 0.04) = 0.04 + 0.105 = 14.50%

DGM:    D₁ = 0.28 × 1.07 = 0.2996
        ke = 0.2996/4.00 + 0.07 = 0.0749 + 0.07 = 14.49%
```

**Both approaches indicate the appropriate rate of return on equity is approximately 15%** — the lecture's own comment. Agreement between two independent methods is a strong sign the inputs are sound.

**Step 2 — cost of debt.** The bond trades at $113.420, above par, so `kd < 10%`. Try 8%:
```
P = 10[1 − 1/(1.08)¹⁰]/0.08 + 100(1.08)⁻¹⁰ = 67.101 + 46.319 = 113.420  ✔

kd = 8.00%
```

**Step 3 — market values.**
```
E = 1,000,000 × $4.00     = $4,000,000     E/V = 0.7791
D = 10,000 × $113.420     = $1,134,200     D/V = 0.2209
V                          = $5,134,200
```

**Step 4 — WACC.**
```
WACC = 0.7791(0.1450) + 0.2209(0.08)(1 − 0.30)
     = 0.112968 + 0.012371
     = 0.125339  =  12.53%
```

(Using the DGM's 14.49% instead gives 12.53% as well — the two agree to two decimal places.)

> **Use the market value of the debt, not its face value.** Face value is `10,000 × $100 = $1,000,000`; market value is `$1,134,200`. Using face value gives `D/V = 0.20` and a WACC of 12.72% — 19 basis points out, which on a 30-year project is a material NPV error. The formula sheet's WACC uses `E/V` and `D/V`, and `V` is a **market** value.

---

## 9.5 Multiple components

With more than one type of debt or equity, the formula expands:

```
         s   Vⱼ
WACC =   Σ  ─── kⱼ                 (after-tax cost for each source)
        j=1  V
```

The lecture's note: *the formula becomes difficult to use when `s` is large. A table approach that provides a structure to this calculation is often preferred.*

**Lecture 9's example:**

| Source | Market value | Weight | After-tax cost | Weighted after-tax cost |
|---|---|---|---|---|
| Ordinary equity | 50,000,000 | 0.5000 | 0.1500 | 0.0750 |
| Preference shares | 20,000,000 | 0.2000 | 0.1000 | 0.0200 |
| Debentures | 20,000,000 | 0.2000 | 0.0800 | 0.0160 |
| Overdraft | 10,000,000 | 0.1000 | 0.0900 | 0.0090 |
| **Total** | **100,000,000** | **1.0000** | | **0.1200** |

`WACC = 12.00%`.

**The table format is the one to use in an exam.** Columns: source → quantity × price → market value → weight → pre-tax cost → after-tax cost → weighted cost. Sum the final column.

---

## 9.6 Capital structure theory — Modigliani and Miller

**Is capital structure (the financing decision) irrelevant?** Topic 2 already answered yes in a two-period world. MM generalise it.

**Assumptions:** perfect capital markets, **no taxes**, borrowing and lending at the risk-free rate, no bankruptcy costs, and a **fixed investment policy** (projects are picked independently of financing).

| | Statement |
|---|---|
| **Proposition 1** | Two firms with identical assets and operations will have the **same value** regardless of their capital structure |
| **Proposition 2** | Although capital structure does not alter firm value, it **does affect the firm's debt and equity costs** |

### The two graphs

**No taxes:** as `D/E` rises, `ke` rises steadily, `kd` is roughly flat, and **WACC is flat**. The cheaper debt is exactly offset by the rising cost of equity.

**With taxes:** the same picture, except `kd` is replaced by `(1 − t)kd`, and **WACC declines** as leverage rises — the tax shield is a genuine subsidy.

**Why does `ke` rise with leverage?**

| Risk | Definition |
|---|---|
| **Business risk** | The risk inherent in the firm's operations |
| **Financial risk** | As the `D/E` ratio increases, the business risk is **concentrated into a smaller amount of equity** |

That concentration is what raises `ke`.

### Tutorial 9 Q4 — can WACC be reduced by adding debt?

The cost of debt is usually lower than the cost of equity, so it looks as if loading up on debt must lower the WACC. **Under MM without taxes, no** — every dollar of cheap debt raises `ke` by exactly enough to leave the WACC unchanged, because financial risk is being concentrated into a shrinking equity base.

**With taxes**, the interest tax shield does lower the WACC — but only up to the point where **bankruptcy costs, financial distress and agency costs** start to bite. Those are outside MM's assumptions and outside this unit's formal treatment, but naming them is what separates a full-mark answer from a half-mark one.

### Tutorial 9 Q1 — risk independence

**Risk independence** refers to the principle that the **required return on an investment depends on the risk of that investment, not on the risk of the entity undertaking it, nor on how it is financed.** A safe project financed by a risky firm is still a safe project and warrants a low discount rate.

### Tutorial 9 Q5 — the pure play approach

The **pure play** approach is used when a project's risk **differs from the firm's overall risk** — a takeover in a different industry, or a diversification move. It entails finding a **listed company whose business is a "pure play"** in the target activity, taking that company's beta (or WACC), adjusting for differences in capital structure, and using that rate rather than your own.

### When the firm's own WACC is acceptable

The basic principle is that the discount rate should reflect the **risk of the project**.

- The firm's WACC is acceptable if the project is **similar to the firm** — an expansion of existing operations.
- If the project is different — a **takeover in another industry** — an alternative WACC is required.

> **Using one WACC for everything is systematically biased in both directions.** Plot the SML against the flat WACC line: for projects with **below-average beta** the firm's WACC is **too high**, so good projects get rejected. For projects with **above-average beta** it is **too low**, so bad projects get accepted. Over time the firm drifts into ever-riskier businesses. Tutorial 8 Q9 is the numerical version of this diagram.

---

## 9.7 Worked tutorial examples

### Tutorial 9 Q6 — Steady Company

Just paid a dividend of **$1.00**, growing at **4.00%** p.a. indefinitely; current share price **$8.67**. Bonds: **$100** face, **8.00%** annual coupon, **5 years** to maturity, trading at **$92.418**. Capital structure **40% debt / 60% equity**; tax **30%**.

```
ke:   D₁ = 1.00 × 1.04 = 1.04
      ke = 1.04/8.67 + 0.04 = 0.11995 + 0.04 = 15.995%  ≈ 16.00%

kd:   coupon C = 8% × 100 = $8.  Price $92.418 is below par, so kd > 8%.  Try 10%:
      P = 8[1 − 1/(1.10)⁵]/0.10 + 100(1.10)⁻⁵ = 30.326 + 62.092 = 92.418  ✔
      kd = 10.00%

WACC = 0.60(0.15995) + 0.40(0.10)(0.70)
     = 0.09597 + 0.02800
     = 0.12397  =  12.40%
```

### Tutorial 9 Q7 — Steamless Dry Cleaning

**1,000,000 shares** at **$5.20**; recently paid a dividend of **$0.50**; growth **4.00%** p.a. **10,000 bonds**, **$100** face, **10.00%** annual coupon, **3 years** to maturity, trading at **$105.154**. Tax **30%**.

```
ke:   D₁ = 0.50 × 1.04 = 0.52
      ke = 0.52/5.20 + 0.04 = 0.10 + 0.04 = 14.00%

kd:   trades above par → kd < 10%.  Try 8%:
      P = 10[1 − 1/(1.08)³]/0.08 + 100(1.08)⁻³ = 25.771 + 79.383 = 105.154  ✔
      kd = 8.00%

E = 1,000,000 × 5.20  = $5,200,000        E/V = 0.83180
D = 10,000 × 105.154  = $1,051,540        D/V = 0.16820
V                      = $6,251,540

WACC = 0.83180(0.14) + 0.16820(0.08)(0.70)
     = 0.116452 + 0.009419
     = 0.125871  =  12.59%
```

Note the bond price of $105.154 is exactly the Tutorial 4 MCQ 14 bond. The unit reuses it deliberately so you can recognise the 8% yield on sight.

### Tutorial 9 Q8 — a construction acquisition

Target beta **2.355**. All Ordinaries currently 4150, expected to rise **14.50%** p.a. Yield on 10-year government bonds **6.75%**, expected to stay there. The target is expected to pay a dividend of **32 cents next year**, shares trade at **$4.00**, dividend growth **17.00%** p.a. Your own firm expects the same 32-cent dividend next year but with **half** the growth (8.50%), and your share price is **$3.37**. Target market capitalisation **$20 million**; target WACC **20.00%** at a market-value **debt/equity ratio of 50%**. Your market capitalisation **$15 million**. Tax **30%**.

**(a) Cost of equity for the acquisition** — use the **target's** beta:
```
ke = 0.0675 + 2.355(0.1450 − 0.0675) = 0.0675 + 0.18251 = 25.00%
```
(The target's dividend growth model agrees closely: `0.32/4.00 + 0.17 = 0.08 + 0.17 = 25.00%`. ✔ A nice cross-check.)

**(b) Beta for your firm.** First get your own `ke` from the growth model, then invert the CAPM:
```
ke_yours = 0.32/3.37 + 0.085 = 0.09496 + 0.085 = 17.996%  ≈ 18.00%

β = (ke − Rf)/(E[Rm] − Rf) = (0.17996 − 0.0675)/(0.1450 − 0.0675)
  = 0.11246/0.0775
  = 1.451
```

**(c) Before-tax cost of debt for the target.** `D/E = 50%` means `D/V = 1/3` and `E/V = 2/3`:
```
0.20 = (2/3)(0.25) + (1/3) kd(1 − 0.30)
0.20 = 0.166667 + 0.233333 kd
kd(1 − t) = (0.20 − 0.166667)/(1/3) = 0.10  →  after-tax cost of debt = 10.00%
kd = 0.10/0.70 = 14.29%
```

> **`D/E = 50%` is not `D/V = 50%`.** If `D/E = 0.5` then `D = 0.5E`, so `V = 1.5E`, giving `E/V = 2/3` and `D/V = 1/3`. Using 0.5 and 0.5 gives `kd(1 − t) = 15%` and `kd = 21.4%` — half as much again. Convert the ratio before you weight anything.

### Tutorial 9 Q9 — a brewery acquisition

Average brewer beta **1.786**; historic market risk premium **7.00%**; 10-year government bond yield **7.50%**. The target has **just paid** a dividend of **$0.32**; shares trade at **$4.00**; market capitalisation **$20 million**. Before-tax `kd` **12.60%** at a market-value `D/E` of **40%**. Tax **39%**.

**(a) Expected constant dividend growth.** First `ke`:
```
ke = 0.075 + 1.786(0.07) = 0.075 + 0.12502 = 20.002%  ≈ 20.00%
```
Then solve the Gordon model for `g`, remembering `D₁ = D₀(1 + g)`:
```
       D₀(1 + g)
P₀  =  ─────────
        ke − g

4.00 (ke − g) = 0.32(1 + g)
4.00 ke − 4.00 g = 0.32 + 0.32 g
4.00 ke − 0.32   = 4.32 g

g = (4.00 × 0.20002 − 0.32)/4.32 = (0.80008 − 0.32)/4.32 = 0.48008/4.32 = 11.11%
```
Check: `0.32(1.1111)/(0.20002 − 0.11111) = 0.35556/0.08891 = 4.00` ✔

**(b) Market value of debt.** `D/E = 0.40` and `E = $20m`:
```
D = 0.40 × 20,000,000 = $8,000,000        V = $28,000,000
```

**(c) WACC to discount before-debt, after-tax cash flows:**
```
WACC = (20/28)(0.20002) + (8/28)(0.126)(1 − 0.39)
     = 0.714286(0.20002) + 0.285714(0.07686)
     = 0.142871 + 0.021960
     = 0.164831  =  16.48%
```

**(d) Why use the target's WACC rather than the acquirer's?** *The discount rate should reflect the riskiness of the cash flows being evaluated. The cash flows being analysed are the target's, hence the appropriate discount rate is the target's rate.*

> **Solving Gordon for `g` needs the algebra, not a guess.** Because `g` appears in *both* the numerator (through `D₁`) and the denominator, you cannot simply write `g = ke − D₀/P₀`. That shortcut gives `0.20 − 0.08 = 12.00%`, not 11.11% — an error of 89 basis points that would flow straight through to the WACC. Cross-multiply and collect terms.

### Tutorial 9 Q10 — Northern Lights, and the retained earnings problem

The statement of financial position reveals:

- **500,000 ordinary shares** — current price **$1.10**, next period's dividend **$0.11**, growing at **5%**
- **100,000 preference shares** — valued at **$1.00** each, required return **12%**
- **$500,000 retained earnings** — opportunity cost calculated at **14%**
- **5,000 debentures** yielding **8%**, valued at **$98**

Tax **40%**.

```
ke (ordinary)  = D₁/P₀ + g = 0.11/1.10 + 0.05 = 0.10 + 0.05 = 15.00%
                 (D₁ is given directly — no grossing up)
Ordinary equity market value = 500,000 × 1.10 = $550,000
Preference shares            = 100,000 × 1.00 = $100,000
Debentures                   =   5,000 × 98   = $490,000
After-tax cost of debentures = 0.08 × 0.60    = 4.80%
```

**Excluding retained earnings** (`V = $1,140,000`):

| Source | Market value | Weight | After-tax cost | Weighted |
|---|---|---|---|---|
| Ordinary shares | 550,000 | 0.48246 | 0.1500 | 0.072368 |
| Preference shares | 100,000 | 0.08772 | 0.1200 | 0.010526 |
| Debentures | 490,000 | 0.42982 | 0.0480 | 0.020632 |
| **Total** | **1,140,000** | **1.00000** | | **0.103526** |

**WACC = 10.35%**

**Including retained earnings at book value** (`V = $1,640,000`):

| Source | Market value | Weight | After-tax cost | Weighted |
|---|---|---|---|---|
| Ordinary shares | 550,000 | 0.33537 | 0.1500 | 0.050305 |
| Preference shares | 100,000 | 0.06098 | 0.1200 | 0.007317 |
| Retained earnings | 500,000 | 0.30488 | 0.1400 | 0.042683 |
| Debentures | 490,000 | 0.29878 | 0.0480 | 0.014341 |
| **Total** | **1,640,000** | **1.00000** | | **0.114646** |

**WACC = 11.46%**

> **Tutorial 9 gives no published answer to Q10, and its own Q11 solution treats retained earnings the other way — confirm with your tutor.** In Q11 (below), the tutor's worked table sets the market value of retained earnings to **zero** and gives them a weight of **0.00**, on the standard reasoning that **retained earnings are already capitalised in the market value of the ordinary shares** — counting them again double-counts equity. Applying that same convention to Northern Lights gives **10.35%**. Taking the question at face value and including the $500,000 gives **11.46%**. The two answers are 111 basis points apart. **The internally consistent answer is 10.35%**, because it matches the method the unit itself uses in the very next question; but the wording of Q10 clearly invites the other. Show the reasoning and state which convention you applied.

### Tutorial 9 Q11 — Keepers Ltd

| Funding source | Quantity | Price | Value | Cost |
|---|---|---|---|---|
| Ordinary shares | 700,000 | 5.00 | | 18% |
| Preference shares | 250,000 | 4.50 | | 14% |
| Retained earnings | | | 1,000,000 | 17% |
| 10%, $100 debentures | 11,500 | 108.00 | | 8% |
| Bank overdraft | | | 500,000 | 10% |

Tax **30%**.

| Source | Market value | Weight | After-tax cost | Weighted |
|---|---|---|---|---|
| Ordinary shares | `700,000 × 5.00` = 3,500,000 | 0.5497 | 18.0% | 9.89% |
| Preference shares | `250,000 × 4.50` = 1,125,000 | 0.1767 | 14.0% | 2.47% |
| Retained earnings | **—** | **0.0000** | 17.0% | 0.00% |
| Debentures | `11,500 × 108.00` = 1,242,000 | 0.1951 | `8% × 0.7` = 5.6% | 1.09% |
| Bank overdraft | 500,000 | 0.0785 | `10% × 0.7` = 7.0% | 0.55% |
| **Total** | **6,367,000** | **1.0000** | | **14.01%** |

**WACC = 14.01%**

Three things to note:

1. **Retained earnings carry zero market value** in this solution — see the callout above.
2. The **bank overdraft** gets the `(1 − t)` adjustment: overdraft interest is deductible.
3. The **preference shares do not**: preference dividends are paid from after-tax profits.

### Tutorial 9 MCQ 12–15 — Craddy Ltd

A Craddy share sells for **$10.50** and **1 million** have been issued. Beta **1.25**, risk-free rate **5%** p.a., expected market return **13%** p.a. **100,000 bonds**, each **$100** face, **3 years** to maturity, **10% annual coupon**, trading at **$105.154**. A bank loan of **$2,000,000** at **10%** p.a. Tax **30%**.

**Q12 — cost of equity:**
```
ke = 0.05 + 1.25(0.13 − 0.05) = 0.05 + 0.10 = 15.00%      → (d)
```

**Q13 — after-tax cost of debt on the bonds.** The bond trades above par, so `kd < 10%`; trial and error gives **8.00%**, therefore:
```
kd(1 − t) = 0.08 × 0.70 = 5.60%
```

> **5.60% is not one of the four options — the MCQ is faulty.** Q13's choices are 6.00%, 7.00%, 8.00% and 9.00%. The unit's own Excel solution computes cell `Kd(1−Tax) = 0.08 × (1 − 0.3) = 0.056` and labels it "after tax bond cost", so 5.60% is unambiguously the intended figure. If forced, **(a) 6.00%** is the nearest and is presumably the keyed answer; **(c) 8.00%** would be right only if the question meant the *before*-tax yield, which it does not say. Flag it to your tutor rather than guessing on the day.

**Q14 — company value:**
```
Equity     = 1,000,000 × 10.50  = $10,500,000
Bonds      =   100,000 × 105.154 = $10,515,400
Bank loan                        =  $2,000,000
                                   -----------
V                                = $23,015,400        → (c)
```

**Q15 — WACC:**
```
WACC = 0.15(10,500,000/23,015,400)
     + 0.08(0.70)(10,515,400/23,015,400)
     + 0.10(0.70)( 2,000,000/23,015,400)

     = 0.15(0.456214) + 0.056(0.456883) + 0.07(0.086898)
     = 0.068432 + 0.025585 + 0.006083
     = 0.100101  =  10.01%                              → (c)
```

> **Three sources, three weights, and the bank loan is easy to forget.** Dropping it gives `V = $21,015,400` and a WACC of 10.30% — which is option (d), sitting right there. Every funding source with a cost belongs in the table.

---

## Summary

- The discount rate must **reflect the risk of the cash flows**. Three sources: comparables, direct CAPM with a project beta, or **WACC**.
- `WACC = (E/V)ke + (D/V)kd(1 − t)`. The `(1 − t)` applies to **debt only**, because interest is deductible and dividends are not.
- Use **market values**, not book values, for `E` and `D`.
- The matching cash flows are **after tax but before interest and interest tax savings** — the free cash flows of Topic 6.
- `ke` from **CAPM** (`Rf + β(E[Rm] − Rf)`) or the **dividend growth model** (`D₁/P₀ + g`). If both are available, they should roughly agree.
- `kd` is the **yield to maturity**, found by trial and error from the market price. Above par → below coupon; below par → above coupon.
- **Preference shares:** `kp = D/P₀`, no tax adjustment. **Overdrafts and loans:** the stated rate, with the tax adjustment.
- **Multiple components:** build a table — source, market value, weight, after-tax cost, weighted cost — and sum the last column.
- **Modigliani–Miller:** without taxes, capital structure does not change firm value (Prop 1) but does change `ke` and `kd` (Prop 2). With taxes, WACC falls with leverage because of the interest tax shield.
- `ke` rises with `D/E` because **business risk is concentrated into a smaller equity base** — that is financial risk.
- The firm's WACC is only valid for projects of **the firm's own risk**. For a different-industry project, use a **pure play** comparable.
- `D/E = x` means `D/V = x/(1 + x)`, not `x`.

<details><summary>Checkpoint — seven questions</summary>

1. A firm has 2,000,000 shares at $6.50, and 5,000 bonds ($100 face, 7% annual coupon, 4 years, trading at $103.465). Beta 1.1, `Rf = 4%`, `E[Rm] = 10%`, tax 30%. Find the WACC.
2. A share trades at $12.00, just paid a dividend of $0.72 and grows at 6% p.a. What is `ke`?
3. A company's WACC is 13%, `ke` is 16%, `D/E` is 0.60 and tax is 30%. What is the before-tax cost of debt?
4. Why does the `(1 − t)` adjustment not apply to preference shares?
5. A firm operating in retail is evaluating a mining acquisition. Should it use its own WACC? What should it use?
6. Under MM without taxes, why does adding cheap debt not lower the WACC?
7. A firm has $4m of ordinary equity at market value, $1m of retained earnings on the balance sheet, and $3m of debt. What value of `V` should be used in the WACC, and why?

---

**Answers**

1. `ke = 0.04 + 1.1(0.10 − 0.04) = **10.60%**`. The bond trades above par so `kd < 7%`; trial and error gives `kd = **6.00%**` (check: `7[1 − 1.06⁻⁴]/0.06 + 100(1.06)⁻⁴ = 24.256 + 79.209 = 103.465` ✔). `E = 2,000,000 × 6.50 = 13,000,000`; `D = 5,000 × 103.465 = 517,325`; `V = 13,517,325`. `WACC = (13,000,000/13,517,325)(0.106) + (517,325/13,517,325)(0.06)(0.70) = 0.101943 + 0.001608 = **10.36%**`.

2. `D₁ = 0.72 × 1.06 = 0.7632`. `ke = 0.7632/12.00 + 0.06 = 0.0636 + 0.06 = **12.36%**`.

3. `D/E = 0.60` → `D/V = 0.375`, `E/V = 0.625`. `0.13 = 0.625(0.16) + 0.375 kd(0.70)` → `0.13 = 0.10 + 0.2625 kd` → `kd = 0.03/0.2625 = **11.43%**`.

4. Because preference dividends are a **distribution of after-tax profit**, not a deductible expense. Only interest reduces taxable income, so only debt earns the tax shield.

5. **No.** The mining project's systematic risk is nothing like the retailer's, so the retailer's WACC would understate the required return and the firm would over-value the acquisition. Use the **pure play** approach: find a listed miner, take its beta or WACC, adjust for capital-structure differences, and discount at that.

6. Because as leverage rises, the firm's business risk is concentrated into a smaller equity base, so `ke` rises by exactly enough to offset the cheaper debt. Firm value is set by the assets and the investment policy, not by how the claims on them are sliced.

7. `V = 4,000,000 + 3,000,000 = **$7,000,000**`. The retained earnings are **already reflected in the $4m market value of the ordinary shares** — the market prices the whole equity claim, accumulated earnings included. Adding them separately double-counts equity and understates the WACC. (Note the unit's own Tutorial 9 Q10 wording invites the opposite treatment; see §9.7.)
</details>
