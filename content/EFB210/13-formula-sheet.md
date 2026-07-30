# Formula Sheet and Exam Traps

Everything on the two formula sheets supplied by the unit, plus the timing, sign and convention rules that are **not** printed on them — which is where the marks actually go.

The unit supplies two sheets: a **mid-semester sheet** covering Topics 1–4, and a **final-exam sheet** covering statistics, portfolio theory, CAPM and WACC. Both are reproduced below.

---

## Part 1 — Mid-semester formula sheet (Topics 1–4)

### Two-period model

```
W₁   = D₁ + D₂/(1 + i)                 value of the firm in period 1
W₁   = Endowment + Σ NPV               the same number, the other way

NPV  = X₂/(1 + i) − I₁

IRR  = X₂/I₁ − 1
```

### Simple interest

```
I    = PV × r × t

FV   = PV(1 + rt)

PV   = FV/(1 + rt)

r    = (FV/PV − 1)/t

t    = (FV/PV − 1)/r
```

### Compound interest

```
FVₙ  = PV₀(1 + i)ⁿ

PV₀  = FVₙ(1 + i)⁻ⁿ

i    = (FVₙ/PV₀)^(1/n) − 1

n    = ln(FVₙ/PV₀) / ln(1 + i)

i    = (1 + Jm/m)^m − 1                effective annual rate
```

### Annuities and perpetuities

```
PV₀  = C[1 − 1/(1 + i)ⁿ]/i             ordinary annuity — value ONE PERIOD BEFORE the first payment

FVₜ  = C[(1 + i)ⁿ − 1]/i               FV of annuity — value ON the date of the LAST payment

C    = PV₀ / {[1 − 1/(1 + i)ⁿ]/i}

C    = FVₜ / {[(1 + i)ⁿ − 1]/i}

PV₀  = C + C[1 − 1/(1 + i)ⁿ⁻¹]/i       annuity DUE  (note the n − 1)

PV₀  = C/i                             perpetuity

PV₀  = C₁/(i − g)                      growing perpetuity
```

### Security valuation

```
P₀   = C[1 − 1/(1 + kd)ⁿ]/kd + FVₙ(1 + kd)⁻ⁿ        bond / debenture

P₀   = D/ke                                          constant dividend (preference share)

P₀   = D₁/(ke − g)                                   constant growth,  D₁ = D₀(1 + g)

       n     Dₜ            Pₙ
P₀ =   Σ  ────────  +  ──────────                    standard (multi-stage) model
      t=1 (1+ke)ᵗ       (1+ke)ⁿ
```

### Rights issues

```
       N·M + S                     N(M − S)
X  =  ─────────          R  =  ──────────────  =  X − S
        N + 1                      N + 1
```
`N` = number of existing shares needed for entitlement to one new share; `M` = cum-rights price; `S` = subscription price; `X` = theoretical ex-rights price; `R` = value of the right **to one new share**.

### Capital budgeting

```
        n
NPV =   Σ  CFₜ(1 + r)⁻ᵗ
       t=0

IRR:   the r for which NPV = 0                       (trial and error)

BCR  = PV of net cash flows / initial cash outlay

AE   = NPV / {[1 − 1/(1 + r)ⁿ]/r}

NPV∞    = AE / r

NPV_LCM = AE × [1 − 1/(1 + r)^L]/r                   L = lowest common multiple of lives
```

### Depreciation

```
SL rate       = 1/Life
SL depr.      = Cost × SL rate

DMV rate      = SL rate × 2
DMV depr.     = (Cost − Accumulated depreciation) × DMV rate

Book value    = Cost − Accumulated depreciation
Gain/(Loss)   = Salvage − Book value
```

---

## Part 2 — Final-exam formula sheet (Topics 7–9)

### Returns and dispersion

```
        Pᵢ,ₜ − Pᵢ,ₜ₋₁ + Dᵢ,ₜ                          1
Rᵢ,ₜ =  ──────────────────────         E(Rᵢ)  =  ───   Σ Rᵢ,ₜ
              Pᵢ,ₜ₋₁                              T

                 1
VAR(Rᵢ)  =  ─────────  Σ (Rᵢ,ₜ − E(Rᵢ))²      STD(Rᵢ) = √VAR(Rᵢ)
              T − 1

                     1
COV(Rᵢ, Rⱼ)  =  ─────────  Σ (Rᵢ,ₜ − E(Rᵢ))(Rⱼ,ₜ − E(Rⱼ))
                  T − 1

                       COV(Rᵢ, Rⱼ)
CORREL(Rᵢ, Rⱼ)  =  ───────────────────
                    STD(Rᵢ) STD(Rⱼ)
```

### Portfolios

```
Rp,ₜ    = Σ wᵢ Rᵢ,ₜ                    E(Rp) = Σ wᵢ E(Rᵢ)

VAR(Rp) = w₁²VAR(R₁) + w₂²VAR(R₂) + 2w₁w₂COV(R₁, R₂)

        = w₁²VAR(R₁) + w₂²VAR(R₂) + 2w₁w₂ STD(R₁) STD(R₂) CORREL(R₁, R₂)
```

### CAPM and beta

```
E[Rᵢ]  = Rf + βᵢ ( E[Rm] − Rf )

           COV(Rᵢ, Rm)
βᵢ  =  ─────────────────
            VAR(Rm)

βp  = Σ wᵢ βᵢ                          COV(Rp, Rm) = Σ wᵢ COV(Rᵢ, Rm)

COV(Rᵢ, Rm) = βᵢ VAR(Rm)               COV(Rm, Rm) = VAR(Rm)
```

### Cost of capital

```
ke  = Rf + βe ( E[Rm] − Rf )           CAPM route

ke  = D₁/P₀ + g                        dividend growth route

kp  = D/P₀                             preference shares (no tax adjustment)

kd  = yield to maturity, from  P₀ = C[1 − 1/(1+kd)ⁿ]/kd + FV(1+kd)⁻ⁿ

         E        D
WACC =  ─── ke + ─── kd(1 − t)
         V        V

         s   Vⱼ
WACC =   Σ  ─── kⱼ                      (after-tax cost for each source j)
        j=1  V
```

### Options

```
Option premium  = Intrinsic value + Time value

Call IV = max(S − X, 0)                Put IV = max(X − S, 0)

Call exercised when S > X              Put exercised when S < X

Effective hedged price (futures) = F₀ − (F₁ − S₁)   =  F₀ − basis at close
```

---

## Part 3 — Rules the formula sheet does not print

These are the things that decide whether the right formula gives the right answer.

### Timing — where each formula's output is dated

| Formula | The value it returns sits… |
|---|---|
| `PV₀ = C[1 − 1/(1+i)ⁿ]/i` | **One period before the first payment** |
| `PV₀ = C/i` | **One period before the first payment** |
| `PV₀ = C₁/(i − g)` | **One period before the first payment** |
| `Pₙ = Dₙ₊₁/(ke − g)` | **At year `n`** — discount it `n` periods, not `n + 1` |
| `FVₙ = C[(1+i)ⁿ − 1]/i` | **On the date of the last payment** |
| `NPV∞ = AE/r` | **At the date the replacement chain begins** — not necessarily year 0 |

### Frequency matching

| Situation | Rate to use |
|---|---|
| Cash flows and rate both annual | `i = J1` — no adjustment |
| Cash flows more frequent than the quoted rate (monthly cash flows, annual nominal rate) | `i = Jm/m` |
| Cash flows less frequent than the compounding (annual cash flows, quarterly compounding) | `i = (1 + Jm/m)^m − 1` |

Work in the cash flows' own time units. A quarterly annuity deferred two years is deferred **8 quarters**, and you discount 7 quarters at the quarterly rate.

### Conventions

| Item | Convention in EFB210 |
|---|---|
| Day count | **actual/365** |
| Bond face value | **$100** unless stated |
| Bond pricing precision | **3 decimal places** (AFMA convention) |
| Depreciation residual | **Zero** unless stated |
| DMV rate | **`2 × SL rate`** |
| Corporate tax rate | **30%** unless stated |
| Variance / covariance divisor | **`T − 1`** (sample) |
| Cash flows | At **year end**, except the initial outlay |

---

## Part 4 — The exam traps, by topic

### Topics 1–2 — the two-period model

> **The consumption bracket is multiplied by `(1 + i)`, not divided.** If an owner consumes *more* than their period-1 dividend they are **borrowing**, so the shortfall is carried forward at `(1 + i)` out of the period-2 dividend. Dividing instead of multiplying produces a number that will be sitting there as an MCQ option.

> **Always cross-check `W₁` two ways.** `D₁ + D₂/(1+i)` must equal `Endowment + Σ NPV`. If they disagree you have mis-signed a borrowing or missed a project. This takes ten seconds and catches nearly everything.

> **Every borrowing needs a matching repayment row at `(1 + i)`.** Two separate borrowings need two separate repayment rows. Collapsing them is how a `−7.70` becomes a `−7.00`.

> **Under a budget constraint, never rank by IRR.** Maximise **total NPV across combinations**. The Lecture 2 example is deliberately built so that IRR ranking (A+B+C, $22.72) loses to the correct answer (A+E, $23.64).

> **On a bank bill sold before maturity, use the days REMAINING, not the original term.** This single error flips a $242 gain into a $118 loss in Tutorial 2 Q12.

> **Count the days.** "About two months" is not 52 days, and the difference on $130,000 at 7.25% is $234.

### Topic 3 — financial mathematics

> **`n` prices give `n − 1` returns; an annuity due of `n` payments is `C` plus an ordinary annuity of `n − 1`.** Both are off-by-one errors and both have dedicated MCQ distractors.

> **A deferred annuity is discounted from the formula's landing date, not from today.** A first payment three years out means the formula gives a value at **year 2**, so you discount **2** more years. Discounting 3 costs 9%.

> **Convert to an effective annual rate before comparing anything.** The lowest nominal rate is routinely not the cheapest loan — Tutorial 3 MCQ 24's answer is the bank quoting the *second-highest* nominal rate.

> **"Total interest paid" = total payments − principal repaid.** It is not total payments. On Tutorial 3 Q12 the difference is $17,914.

> **Carry unrounded periodic rates through.** `0.065/12 = 0.005416666…`, not `0.00542`. Published loan answers only reconcile with the unrounded value, and on a 30-year loan a rounded rate moves the balance by tens of dollars per year.

### Topic 4 — security valuation

> **`D₀` versus `D₁` is the most-tested error in the unit.** "Has just paid a dividend of $0.90" means `D₀`, so `D₁ = 0.90(1 + g)`. "Is expected to pay a dividend next year of $0.90" means `D₁` and needs no adjustment. Read the tense.

> **`Pₙ` is dated at year `n`.** It uses `Dₙ₊₁` in the numerator and is therefore already one period ahead. Discount `n` periods.

> **The Gordon model requires `g < ke`.** As `g → ke` the price explodes; for `g > ke` it goes negative, which is meaningless. If a question hands you `g > ke`, say so — do not report the negative number.

> **"Value of a right" = `X − S` = `N(M − S)/(N + 1)`.** The other number, `(M − S)/(N + 1)`, is the value attaching to **one old share held**. Both appear as adjacent MCQ options in Tutorial 4 MCQ 19 and 20.

> **Participating in a rights issue and selling the rights preserve wealth identically; doing nothing destroys it.** If your two figures differ, you have used the wrong `R`.

> **Yield > coupon ⟹ discount. Yield < coupon ⟹ premium.** Check the direction before you calculate; it eliminates half the options for free. And a par price tells you nothing about maturity — Tutorial 4 MCQ 15's answer is "all of the above are possible".

### Topics 5–6 — capital budgeting

> **The decision tree decides the method.** Independent → NPV. Mutually exclusive, no replacement → NPV. Replacement with **equal** lives → NPV. Replacement with **unequal** lives → AE / NPV∞ / NPV_LCM. Tutorial 5 Q9(c) has replacement *and* equal lives, and the answer is NPV — "replacement means AE" is wrong.

> **Depreciation and gain/loss on sale appear TWICE, with opposite signs.** Subtract above EBIT for the tax effect; add back below NOPAT because no cash moved. Adding back the depreciation and forgetting the gain/loss is the single commonest structural error in Topic 6.

> **A LOSS on sale adds back positively; a GAIN subtracts.** In Lecture 6's gold mine the year-3 add-back is `62,500 + 12,500 = 75,000`, not 62,500.

> **A loss on sale of an old asset is a cash BENEFIT.** It is a deductible loss worth `loss × t` in reduced tax at time 0. In Tutorial 6 Q7 that $12,000 is the difference between a positive and a negative NPV.

> **Working capital never touches EBIT.** It goes below Cash Flow from Operations, alongside capital expenditure. Out at the start, back at the end, no tax effect.

> **Tax paid a year in arrears adds a whole extra year to the model.** Year 1 has no tax; the final extra year has nothing but tax.

> **In a replacement model, add back the OLD depreciation you are forgoing.** And remember it only runs for as long as the old asset had remaining life.

> **`DMV rate = 2 × SL rate`.** A 5-year asset depreciates at **40%** reducing balance. Tutorial 6 MCQ 13 turns entirely on this, and one of the unit's own solution files gets it wrong.

> **Accounting break-even ≠ NPV break-even.** The Retro City Bicycles question has an accounting break-even (EBIT = 0) of 2,606 bikes and an NPV break-even of 3,063. Only the latter is an option.

> **Break-even price, break-even quantity and break-even capital cost are three different numbers.** Name the variable you solved for.

> **Maximum borrowing supported by a project = NPV + initial outlay.**

> **Record which year your perpetuity is anchored to.** Tutorial 5 MCQ 18's options (a) and (b) differ only in whether `NPV∞` is dated at year 0 or year 2.

> **When evaluating costs, choose the LOWEST annual cost** — the least negative AE. Tutorial 5 Q13's one-year option has the smallest NPV of costs and the *worst* annual cost.

### Topics 7–8 — risk and return

> **The divisor is `T − 1`.** Sample variance, sample covariance. In Excel: `VAR.S`, `STDEV.S`, `COVARIANCE.S`.

> **Carry full precision.** Tutorial 7 Q5's published correlation (0.9419) uses rounded standard deviations; the exact value is 0.9427. On three or four observations, rounding to four decimals can move a correlation by a full percentage point.

> **If a "correlation" falls outside [−1, +1], it is not a correlation** — you have miscounted `T` or divided by the wrong thing.

> **The `2` and the squares in the portfolio variance formula are both load-bearing.** `w₁²`, `w₂²`, and `2w₁w₂COV`.

> **Portfolio *beta* is a plain weighted average with no covariance term.** Portfolio *variance* is not. Tutorial 8 Q8(f) supplies `COV(R_X, R_Y)` purely as a distractor for a beta question.

> **`COV(Rm, Rm) = VAR(Rm)` is the hidden first step in every table-filling question.** In Tutorial 8's Bondy Corp MCQs the market's "covariance with the market" of 0.040 *is* the market variance, and everything else follows from it.

> **Two assets with the same expected return must have the same beta.** Their standard deviations can differ wildly; the difference is non-systematic risk, which earns nothing.

> **Diversification beats the weighted average, not necessarily the safest constituent.** Compare portfolio risk against `Σ wᵢ STDᵢ`, not against the minimum.

> **Discount each project at a rate reflecting its OWN systematic risk.** Tutorial 8 Q9 reverses its own ranking once the two projects are discounted at 17% and 13% instead of a common 10%.

### Topic 9 — WACC

> **`(1 − t)` on debt only.** Bonds yes, bank loans yes, overdrafts yes. Ordinary equity no, preference shares no.

> **Market values, not book values.** Bonds at `quantity × market price`, not `quantity × $100`. In the Lecture 9 example that is 19 basis points of WACC.

> **`D/E = x` means `D/V = x/(1 + x)`.** `D/E = 50%` gives `D/V = 1/3`, not 1/2. Tutorial 9 Q8(c) is built on this.

> **Solving Gordon for `g` needs algebra, not a shortcut.** `g` appears in the numerator (via `D₁`) and the denominator. Cross-multiply: `g = (P₀·ke − D₀)/(P₀ + D₀)`. The shortcut `g = ke − D₀/P₀` is out by 89 basis points in Tutorial 9 Q9.

> **Cross-check `ke` two ways when you can.** In Lecture 9 the CAPM gives 14.50% and the dividend growth model 14.49%; in Tutorial 9 Q8 both give exactly 25.00%. Agreement is strong evidence your inputs are right; a large gap means one of them is wrong.

> **Every funding source with a cost belongs in the table.** Craddy Ltd's $2,000,000 bank loan is easy to skip, and doing so gives 10.30% — which is one of the listed options.

> **Cash flows to match the WACC are after tax but BEFORE interest and interest tax savings.** Including interest in the cash flows *and* using an after-tax WACC double-counts the tax shield.

> **Retained earnings: the unit's own tutorials treat them inconsistently.** Tutorial 9 Q11's published solution gives them a market value of **zero**, on the standard reasoning that they are already capitalised in the market value of ordinary shares. Tutorial 9 Q10's wording invites you to include them at book value, which changes the answer by 111 basis points. Use the zero-value convention for internal consistency, show your reasoning, and confirm with your tutor.

### Topic 10 — derivatives

> **Do in the futures market now what you plan to do in the physical market later.** Producers **sell**; buyers **buy**.

> **A futures contract is an obligation and cannot lapse.** It is closed out by taking the opposite position.

> **The effective hedged price is `F₀ − basis at close`, not `F₀`.** Basis risk is the residual a futures hedge cannot remove.

> **Over-hedging is speculation.** If the crop fails, a short futures position against no physical asset is a naked short in a rising market. Tutorial 10 Q3(b) turns a 20% price rise into a $30,625 loss.

> **Payoff ignores the premium; profit does not.** Read which the question wants.

> **The sign of the premium flips with the position, and so does every exercise line.** Writing collects the premium and pays on exercise; buying pays the premium and collects on exercise. Set up a four-line table — premium / share / call / put — before summing.

> **Volatility and time to expiry increase the value of BOTH calls and puts.** Every other factor has opposite signs for the two.

> **A premium below intrinsic value is an arbitrage, and the arbitrage destroys itself.** Buying pushes the premium up; the offsetting trade pushes the underlying the other way.

> **For a writer, the riskier option is the one more likely to be exercised against you** — a low `X` for a call, a high `X` for a put.

---

## Part 5 — Contradictions in the unit's own material

Flagged in the topic notes and gathered here. Each has been checked computationally. **Confirm each with your tutor rather than assuming these notes are right.**

| Where | The conflict | What the arithmetic says |
|---|---|---|
| **Assignment due date** | Lecture 1 says "Week 10, January 6th, 2026"; the assignment PDF says "27 January 2026" | Neither can be verified from the material — **take the date from Canvas** |
| **Tutorial 3 MCQ 25** | The question says the final deposit is on the **64th** birthday (30 deposits), but the published answer of $7,169 only reconciles with **31** deposits | 30 deposits → $7,254.10; 31 deposits → **$7,168.56** = the published answer. Tutorial 7 Q1 confirms the unit counts "31 saving events" for a 35→65 plan |
| **Tutorial 6 MCQ 13** | The PDF answer key says **(b) −$59,968**; the Excel solution says "(d) cannot be determined" and works the schedule at a **20%** DMV rate | EFB210's own convention is `DMV rate = 2 × SL rate = 40%`, which gives a year-5 book value of $139,968 and a loss of **$59,968** — the PDF is right, the Excel note applied the straight-line rate |
| **Tutorial 8 Q7** | The published table rounds to whole percentages, showing 18% / 13% for the 75/25 row and 13% / 13% for the 50/50 and 25/75 rows | Exact values: 75/25 → **17.50% / 16.07%**; 50/50 → 15.00% / **13.30%**; 25/75 → **12.50% / 12.50%**. The rounding hides that 25/75 is the low-risk point |
| **Tutorial 9 MCQ 13** | Asks for the after-tax cost of debt on the bonds; the options are 6%, 7%, 8% and 9% | The correct figure is `8% × 0.70 =` **5.60%**, which is not listed. The unit's own Excel computes exactly 0.056. **(a) 6.00%** is presumably the keyed answer |
| **Tutorial 9 Q10 vs Q11** | Q10 lists $500,000 of retained earnings with a 14% cost, inviting inclusion; Q11's solution sets retained earnings to **zero** market value | Including them: **11.46%**. Excluding them (the Q11 convention): **10.35%** |
| **Lecture 6 sensitivity** | The slide reports a gold break-even of **$1,352/ounce**; the workbook's "sensitivity" sheet solves for **quantity** instead | Break-even **flat price** = **$1,351.29** ✔ (the slide, rounded). Break-even **quantity** = **372.53 ounces**. Both correct, for different levers |
| **Topic 11** | Lecture 1 and Lecture 10 both list **Market Efficiency** as an eleventh topic | No Lecture 11 deck, tutorial or solutions exist in the material. **Ask whether it is examinable** |

---

## Part 6 — The five-step method

Every quantitative question in this unit reduces to the same procedure. When you do not know what to do, do this.

```
1.  DRAW the timeline.        Label the periods in the cash flows' own units.
2.  WRITE the cash flows.     Signs matter. Outflows negative, inflows positive.
3.  MATCH the rate.           Convert nominal → periodic or effective as required.
4.  MOVE everything to ONE date.  Usually today. Note where each formula lands
                                  before you discount it.
5.  APPLY the decision rule.  NPV > 0, IRR > r, AE highest (or least negative
                                  for costs), price vs market, in-the-money or not.
```

And two habits that catch more errors than any amount of rechecking:

- **Compute the answer a second way whenever a second way exists.** `W₁` two ways. `ke` from CAPM and the growth model. Portfolio return from the weights and from the CAPM. If the two disagree, one of them is wrong and you now know to look.
- **Say out loud what date your number sits on.** "3,790.79 is a value **at year 20**." Nine out of ten timing errors die on contact with that sentence.
