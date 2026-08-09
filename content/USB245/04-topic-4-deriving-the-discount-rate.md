# TOPIC 4 — Deriving the Discount Rate

Every DCF so far has been handed a discount rate — 10% for the $930,000
house, 8% for the Week 4 commercial workbook. This week supplies the part
that was always missing: where that number actually comes from, and why
"the deck states both" energy from Weeks 2 and 3 turns out to apply here
too.

Reading: the deck's own closing slide points to "IVSC on Canvas" — the
International Valuation Standards. §8.9 below folds in the sections of the
IVS and the RICS *Discounted cash flow valuations* guidance note that bear
directly on discount-rate derivation.

## 8.1 What a Discount Rate Is

Two definitions, both on the deck's second slide:

> *"A discount rate is simply the investor's required rate of return (or
> rate of interest) taking into account opportunity cost, inflation and
> certainty of payment (risk)."* — Pyhrr, Cooper, et al.

> *"In relation to property valuation the discount rate should be the
> return required by a hypothetical purchaser for that property over the
> term of the cash flow — discount rates should reflect the risk of the
> cash flow estimates being met and will vary with factors affecting the
> rate including the strength of the lease covenants, market conditions,
> the age and quality of the building, and the terminal valuation
> assumptions."* — API Information Paper, Discounted Cash Flow

Note what the second definition already tells you: the discount rate is
not one universal number for "property." It is asset-specific — a strong
covenant, a new building and a tight market justify a *lower* rate than a
weak covenant, an ageing building and a soft market, holding everything
else constant. Two properties in the same DCF template can carry different
discount rates for defensible reasons.

## 8.2 Why It Matters — the Mechanics

```
Higher discount rate  →  lower discount factor  →  lower PV of cashflows
                                                  →  lower value or
                                                     purchase price

                    1                              n    NIt
Discount factor  = ─────       NPV  =  Σ         ──────
                  (1+r)^t                        t=1  (1+r)^t
```

The deck's own worked table — an asset with year-1 to year-4 net cashflow
growing at 3% p.a. and a $560,000 resale proceeds landing on top of the
year-5 cashflow:

| Year | Net cashflow | Resale | Total CF | PV @ 10% | PV @ 14% | PV @ 18% |
|---|---|---|---|---|---|---|
| 1 | $48,000 | | $48,000 | $43,636 | $42,105 | $40,678 |
| 2 | $49,440 | | $49,440 | $40,860 | $38,042 | $35,507 |
| 3 | $50,923 | | $50,923 | $38,259 | $34,372 | $30,993 |
| 4 | $52,451 | | $52,451 | $35,825 | $31,055 | $27,054 |
| 5 | $54,025 | $560,000 | $614,025 | $381,261 | $318,905 | $269,396 |
| | | | **Total PV** | **$539,841** | **$464,480** | **$402,628** |

Verified independently in Python — every cell reconciles, and the
year-on-year cashflow growth is exactly 3.00% p.a. Moving the rate from
10% to 18%, a swing of 800 basis points, takes **25.4%** off the total
present value: `(539,841 − 402,628) / 539,841`. A discount rate is not a
formality — it is the single input with the largest leverage over the
answer, more than any individual line in the cashflow itself.

> **A lower valuation cascades.** The deck spells out the practical
> consequence for an analyst working inside a fund: too high a discount
> rate → an undervalued asset → you either miss the deal (you think it is
> overpriced when it is not) or you lowball an offer and lose it. Too low
> a discount rate → an overvalued asset → you overpay, shareholder return
> expectations are not met, and the annual budget is missed. Both
> directions are wrong; the discount rate has to be *evidenced*, not
> picked to make a number work.

## 8.3 One Rate, Many Names

The deck lists nine labels for the same concept, and the exam can use any
of them:

| Term | What it emphasises |
|---|---|
| Required return | The investor's own hurdle |
| Capitalisation rate | Used loosely; strictly the *income-only* version (§8.6) |
| Yield | Generic — always name which one |
| IRR | The rate that sets NPV to zero |
| WACC | Blended cost of debt and equity capital |
| Target rate | The number a fund mandate specifies |
| Hurdle rate | The minimum to clear before a deal proceeds |
| Equity yield rate | The rate on the geared, equity slice of a deal |
| Cost of capital | The finance-textbook name for the same idea |

The deck's own line: *"At the end of the day, the discount rate is a
percentage return, like an interest rate."* Whichever label a question
uses, the mechanics are the same: it converts a future dollar into a
present one.

## 8.4 Method 1 — The Risk Premium (Build-Up) Model

Reading: Rowland Ch 6, §6.160, pp.145–148.

```
r = rf + rP

r   = total required return (discount rate)
rf  = risk-free rate
rP  = risk premium
```

The risk-free rate itself decomposes further — the deck's *nominal*
risk-free rate is time value of money plus an inflation premium:

```
rf = rV + π

rV  = time value of money (the real, risk-free return for deferring
      consumption)
π   = inflation premium (compensation for expected inflation)
```

> **Use the 5- or 10-year government bond rate**, whichever is closer to
> the property's expected holding period — the deck is explicit that the
> maturity of the proxy should match the maturity of the cash flow. A1's
> AREIT holds 7–10 years, so the 10-year Commonwealth bond rate is the
> better match; a shorter flip strategy would use the 5-year. **Verify the
> current rate from the source the deck itself cites** —
> `tradingeconomics.com/australia/government-bond-yield` — before quoting
> one in the assignment; a chart in a recycled deck is not a live number.

The deck also gives a *compounded* version of the full decomposition,
noting it is the more accurate of the two:

```
1 + r = (1 + rV)(1 + π)(1 + rP)                                    (2)
```

> **The deck compounds equation (2) but adds `rf = rV + π` on the very
> next slide.** Both cannot be exactly right at once. Take rV = 2%,
> π = 3%, rP = 5%:
> ```
> Simple sum:      r  = 2% + 3% + 5%              = 10.00%
> Fully compounded: r  = 1.02 × 1.03 × 1.05 − 1     = 10.313%
> rf, simple:            2% + 3%                  =  5.00%
> rf, compounded:        1.02 × 1.03 − 1            =  5.06%
> ```
> The gap is 31 basis points on the full rate and 6 on the risk-free
> component alone — small at these levels, but it is not zero, and the
> deck's own text calls the compounded form "more accurate." Use the
> compounded form when asked to show working from first principles; the
> simple sum is a defensible shortcut only when you say you are using it.

**Selecting the risk premium** is where this method gets genuinely hard.
The deck poses it as an open question — given two assets A and B on a
risk/return chart, with B riskier and requiring a higher return, *how do
you pick the right `rP` for your specific property?* — and does not fully
answer it before pointing at survey evidence instead.

**RERC survey evidence.** The Real Estate Research Corporation surveys
institutional investors quarterly on required returns for investment-grade
property versus comparable treasuries:

| | 1Q05 | 1Q07 | 1Q09 | 1Q11 | 1Q13 | 1Q15 |
|---|---|---|---|---|---|---|
| Required property return | 9.6% | 8.4% | 10.1% | 8.9% | 8.6% | 7.9% |
| Return on 10-year Treasuries | 4.3% | 4.7% | 3.4% | 3.5% | 1.9% | 2.0% |
| **Spread over Treasuries** | **5.3%** | **3.7%** | **6.7%** | **5.4%** | **6.7%** | **5.9%** |

Every spread reconciles to the difference of the row above it. The 1Q09
and 1Q13 spikes to 6.7% land in and just after the GFC — the risk premium
widens when property risk is repricing, exactly what you would expect.

> **Bond rates move faster than property discount rates.** The deck notes
> explicitly that when government bond yields shift, it can take **6 to
> 12 months** before property discount rates react — there is a lag in
> how quickly the risk premium re-prices. A DCF built the week bond yields
> spike should not mechanically flow the whole move straight into `r`;
> say so if you hold the discount rate steady against a recent rate move.

**Pros and cons**, straight from the deck:

| Pros | Cons |
|---|---|
| Simple concept to understand | Imprecise method |
| Useful for comparing risk premia across assets | The risk premium is rarely explicit, subjective, and hard to substantiate |
| | Likely to be used only as a **check** against other methods |

## 8.5 Method 2 — The Market Approach (Comparable Sales)

*"By far the most direct and frequently used method."* Complete a full DCF
for each comparable sale and solve for the discount rate that reconciles
the model to the price actually paid — an IRR calculation run in reverse.

```
Given: comparable's cashflow forecast, and its actual transaction price
Solve: r such that  Σ CFt / (1+r)^t  =  transaction price
```

RICS's guidance describes exactly this mechanism: *"the best estimate of
the cash flow would be assessed, and a basic internal rate of return
analysis carried out to determine the return generated by the price or
market value"* (§4.68). The method is robust **only if** you can source
reliable cash flow and price information on a sufficient number of
comparables — the same data problem that runs through every comparable-sales
method in this unit.

**Why a naive average is not enough.** Four comparables, their stabilised
net income and sale price:

| Comp | Stabilised NI | Sale price | Implied return |
|---|---|---|---|
| #1 | $27,500 | $290,000 | 9.48% |
| #2 | $29,800 | $310,000 | 9.61% |
| #3 | $26,900 | $275,000 | 9.78% |
| #4 | $30,250 | $325,000 | 9.31% |

The deck asks: *"the average is 9.4%. Is this the appropriate discount
rate to apply to your subject?"*

> **The deck's own average is off.** `(9.48 + 9.61 + 9.78 + 9.31) / 4 =`
> **9.545%**, which rounds to 9.5%, not the 9.4% printed — and weighting
> by transaction size instead of a simple mean gives 9.54% as well
> (`Σ NI / Σ price = 114,450 / 1,200,000`). The gap is small (about 15
> basis points) and does not change the teaching point, but it is a
> reminder to recompute a stated average rather than copy it — the same
> habit that caught three arithmetic errors in the 41 Park Road IM
> (note 09).

The real point of the question is that a **simple average treats every
comparable as equally relevant to the subject**, which is rarely true.

### Weighting the evidence

The deck's worked example: you judge Comp 4 to be highly similar but
slightly superior to your subject, and Comp 1 highly similar but slightly
inferior. You assign formal weights reflecting how much each comparable
should influence your answer:

```
Comparable    r         Weight    Weighted r
#1            0.1100    0.40      0.0440
#2            0.1036    0.10      0.0104
#3            0.0984    0.10      0.0098
#4            0.1074    0.40      0.0430
                                  ────────
              Weighted discount rate = 0.10716  →  10.7%
```

Verified: `0.11×0.4 + 0.1036×0.1 + 0.0984×0.1 + 0.1074×0.4 = 0.10716`.
Weights sum to 1.0.

> **Nothing forces the weights to be objective.** The deck's own caution:
> *"Can produce misleading results if the property doesn't have cash flow,
> growth and risk pattern typical of the comparable properties … care,
> skill and attention to detail are all important in researching and
> analysing the comparable evidence."* The footnote on the tutorial's own
> weighting exercise (note 07 §9.1) says the same thing in the answer key itself:
> *"There may be more than one correct answer for the weighting given, so
> long as it can be justified and consistent with the sales analysis."*
> Whatever weights you choose in A1 or A2, the justification carries the
> marks, not the arithmetic — the arithmetic is one line of Excel.

**Pros and cons**:

| Pros | Cons |
|---|---|
| Simple and straightforward | Relies on enough truly comparable sales existing |
| Reflects observed market expectations directly | Requires careful, matched analysis of income and expenses on both sides |
| The most reliable estimate **if** enough good evidence exists | Confusion between cap rates and discount rates is common |
| | Beware of using **initial** yields only |
| | Assumes future income expectations for subject and comparables are similar |
| | Different financing arrangements can distort the observed rate |

## 8.6 Cap Rate vs Discount Rate

This is the tutorial's own concept check, and it is worth answering in
full because the two terms get used almost interchangeably in casual
conversation and are not the same thing:

```
Cap rate         = assesses the INCOME return only
                    current yield  =  NI(year 1) / V0

Discount rate    = assesses the return from BOTH income and capital
                    growth, across every period of the holding period
```

> **A cap rate can be used as a discount rate — but only under one
> condition.** The deck's own note: *"Cap Rate can be used as a Discount
> Rate if we use 'Stabilised NI' through the investment period."* A
> stabilised income is a level, non-growing income — exactly the
> condition under which `CV = NI / Y` (note 12, Capitalisation) and a DCF
> in perpetuity give the same answer. The moment the income is forecast
> to grow, decay, or has lease events in it, the cap rate and the discount
> rate separate, and using one where the other is needed misprices the
> asset.

This is also the Gordon Growth relationship already on the formula sheet,
confirmed independently by RICS's DCF guidance note (Appendix, Table 1):

```
Discount rate  =  Cap rate + Growth rate            (Gordon Growth Model)

DR = 12%, g = 2%   →   cap rate = 10%
DR = 12%, g = 3%   →   cap rate =  9%
DR = 10%, g = 2%   →   cap rate =  8%
```

Which is exactly the `r ≈ y + g` coherence check already used to sanity a
terminal yield in note 03 §6.5 — the same identity, now stated as the
**delivery mechanism** for a required return, versus the **requirement**
side covered in §8.4:

```
REQUIREMENT                          DELIVERY
risk-free rate + risk premium        cap rate + growth rate
        = discount rate                    = total return (discount rate)
```

Two different routes to the same number — one built up from first
principles, the other read off how the market actually prices the income.
When they disagree, that disagreement is itself informative: it says the
market is pricing risk or growth differently from your own assumptions.

## 8.7 Method 3 — Benchmark Against Alternative Investments

Reading: Rowland §6.170, pp.148–150. The property must earn a return
competitive with other investments of *similar risk* available in the
market — which immediately raises the question the deck asks and does not
fully resolve: *what counts as similar risk?*

| Asset class | Risk | Potential return | Notes |
|---|---|---|---|
| Cash | Low | Low | Stable income, no minimum timeframe |
| Fixed interest | Low/moderate | Moderate | Government/corporate bonds, mortgages, hybrids; 1–3 yr minimum |
| **Property** | **Moderate/high** | **Moderate/high** | Higher risk than fixed interest, lower than equities; illiquid, high entry/exit costs; **7+ yr minimum** |
| Equities | High | High | Most volatile; capital growth plus dividends; 5–7 yr minimum |

Defensive assets (cash, fixed interest) focus on generating income; growth
assets (property, equities) focus on capital growth plus income. Property
sits in the growth bracket but with a **much longer recommended minimum
timeframe** than equities — directly consistent with A1's 7–10 year
holding period.

**Pros and cons**:

| Pros | Cons |
|---|---|
| A wider investment-spectrum view | Risk adjustment is very subjective |
| Encourages risk-weighted decision-making | Ignores non-return objectives — diversification, term, liquidity, cashflow needs |
| Useful for portfolio-level decisions | |

## 8.8 Method 4 — Weighted Average Cost of Capital (WACC)

Reading: Rowland §13.20, p.389. Most properties are bought with both debt
and equity, so the required return `r` has to satisfy both the lender's
minimum and the equity investor's minimum simultaneously.

```
              D          E
r_WACC  =  rD ─  +  rE ─
              V          V

rD    = interest rate on borrowings (debt)
rE    = return required by equity investors
D/V   = proportion of debt to total capital  = LVR
E/V   = proportion of equity to total capital = 1 − LVR
```

### Worked — solving for the blended rate

*Financing available at 9% p.a. over a 25-year term at 80% LVR; equity
investors require 15%.*

```
r_WACC = (0.09 × 0.80) + (0.15 × 0.20)
       = 0.072 + 0.030
       = 0.102  →  10.2%
```

Verified. This is exactly the lecture's Exercise 2.

*Financing available at 8.5% p.a. at 75% LVR; shareholders expect 10.5%.*

```
r_WACC = (rD × 0.75) + (0.105 × 0.25)
```

> **The question text and the solution workbook disagree on `rD`, and it
> changes the answer.** The slide's question states debt is "available at
> 8.5% p.a."; the deck's own answer prompt says *"can you get this answer
> = r_WACC = 8.25%."* Plugging in 8.5% does not reach 8.25%:
> ```
> rD = 8.5%:  0.085 × 0.75 + 0.105 × 0.25 = 0.06375 + 0.02625 = 0.0900  →  9.00%
> rD = 7.5%:  0.075 × 0.75 + 0.105 × 0.25 = 0.05625 + 0.02625 = 0.0825  →  8.25%
> ```
> The supplied solution workbook's assumption cell is hardcoded to
> **7.5%**, not the 8.5% printed on the question slide — that is the only
> input that reproduces the deck's target answer of 8.25%. Either the
> question has a typo (should read 7.5%) or the target answer is wrong
> (should be 9.00%). The 75-basis-point gap on `rD` is worth 75 basis
> points on the final WACC, one-for-one, because debt carries 75% of the
> weight. **Confirm with your tutor which is correct before using either
> number in A2** — do not assume the printed "8.5%" is right just because
> it is on the question slide; the workbook is not obviously wrong either.

**Pros and cons**:

| Pros | Cons |
|---|---|
| Simple to calculate once debt/equity ratios and returns are known | Financing structures are often undisclosed in private transactions, limiting market comparison |
| Enables accurate pricing for a specific acquisition | **Only valid for interest-only loans** |
| Reflects the actual, specific financing arrangement | Does not account for equity build-up as an amortising loan pays down principal |

> **The interest-only limitation matters for this unit specifically.**
> Weeks 7–9 build an after-finance and after-tax DCF with an amortising
> mortgage — principal reducing every period, equity building as a
> result. A WACC computed the way §8.8 does it assumes the debt balance
> (and therefore `D/V`) is constant across the whole holding period. Once
> the loan amortises, `D/V` falls every year and a single WACC calculated
> at t=0 no longer describes the blended return in year 5. Use WACC to
> sanity-check a *point-in-time* required return, not as the discount
> rate inside a geared DCF with an amortising loan.

## 8.9 Professional Standards: What IVS and RICS Require

The deck's own closing line: *"discount rate derivation is an inexact
science and poorly understood — research and judgment is required."* The
International Valuation Standards (IVS) and the RICS professional
guidance both confirm that this is not a gap in the teaching — it is the
honest state of the profession, and both bodies respond by requiring
**documentation** rather than prescribing a single correct number.

**IVS's own list of common methods** (IVS 103 Appendix, §A20.31) is a
close match to the four covered above, just under different names:

```
(a) a capital asset pricing model (CAPM)         ~ extension of the risk premium/build-up method
(b) a weighted-average-cost-of-capital (WACC)     = §8.8
(c) observed or inferred rates/yields             ~ the market approach, §8.5
(d) a build-up method                             = §8.4
```

IVS §A20.34 states what the valuer **must** do, not merely should:

> *"In developing a discount rate, the valuer must: (a) document the
> method used for developing the discount rate and support its use, (b)
> provide evidence for the derivation of the discount rate, including the
> identification of the significant inputs and support for their
> derivation or source."*

That is precisely what the A1/A2 rubric rewards, in the unit's own
language from note 08: an assumption with a named, cited source is worth
marks that an unsupported number is not.

> **Real property discount rates are customarily pre-tax.** IVS §A20.06:
> *"cash flows and discount rates for real property are customarily
> developed on a pre-tax basis while cash flows and discount rates for
> businesses are normally developed on a post-tax basis."* That is exactly
> A1's scope — no finance, no tax — and confirms the unit's convention is
> not just a teaching simplification, it is standard professional
> practice for this asset class. A2 layers tax on top and should be
> explicit about the switch when it happens.

**RICS's discounted cash flow guidance note** adds detail the lecture
does not have room for:

- **A market-observed discount rate is analysed the same way §8.5 does
  it** — RICS §4.68: assess the cash flow, then run the price through a
  basic IRR analysis to back out the rate the transaction implies.
- **First-principles derivation is explicitly `RFR + risk premium`, or
  CAPM, or WACC** (RICS §5.10) — the same three routes as §8.4 and §8.8,
  described as having "no major consensus" on which is best.
- **The risk premium itself decomposes further.** RICS §5.14: a generic
  property risk premium, adjusted for a **sector** risk premium, a
  **location** risk premium and an **asset**-specific risk premium (lease
  covenant strength, building quality/depreciation, micro-location). A
  single "property risk premium" line in an A1 assumptions sheet is doing
  the work of four separate judgements collapsed into one number — naming
  which of the four is driving your figure is worth more than the figure
  itself.
- **The risk-free rate proxy should be maturity-matched to the holding
  period** (RICS §5.12) — the same point made in §8.4 about choosing the
  5- or 10-year bond, now confirmed as the professional standard rather
  than a unit-specific convention.

## Summary

- A discount rate is the investor's required return, reflecting
  opportunity cost, inflation and risk. It has more leverage over a DCF's
  answer than any single cashflow line — an 800bp swing in the discount
  rate took 25.4% off the deck's own worked example.
- The same number goes by at least nine names — required return,
  cap rate, yield, IRR, WACC, target rate, hurdle rate, equity yield rate,
  cost of capital. Name which one a question wants before answering.
- **Four methods**, each with real weaknesses: the **risk premium model**
  (`r = rf + rP`, simple to explain, hard to substantiate); the **market
  approach** (most reliable if enough comparables exist, distorted by
  differing risk/growth/finance); **benchmarking against alternative
  asset classes** (useful context, very subjective on the risk
  adjustment); and **WACC** (precise for a known financing structure,
  only valid for interest-only debt).
- A **cap rate equals a discount rate only when income is stabilised** —
  level, non-growing. The moment growth or lease events enter the
  cashflow, they diverge, and `discount rate = cap rate + growth rate`
  (Gordon Growth) is the reconciling identity.
- Two decompositions of the same required return: the **requirement**
  side (`rf + risk premium`) and the **delivery** side (`cap rate +
  growth`). Both should land close together; a gap is informative, not
  just noise.
- IVS and RICS both confirm discount-rate derivation is inexact by
  nature, and both respond by mandating **documentation of method and
  evidence** rather than a single correct answer — exactly what the A1/A2
  rubric marks.
- The lecture's own WACC exercise (Exercise 3) does not reconcile: the
  question states 8.5% debt, the target answer of 8.25% only works at
  7.5% debt. Confirm which is intended before quoting either in A2.

<details><summary>Checkpoint</summary>

1. Give the two decompositions of a required return described in this
   note, one from each "side," and name the identity that links them.
2. A comparable's stabilised net income is $84,000 and it sold for
   $960,000. What is the implied discount rate, and under what condition
   is it valid to use this cap rate as a discount rate for the subject?
3. Explain in one sentence why WACC breaks down once a loan starts to
   amortise.
4. Government 10-year bonds yield 4.2%, and you assess a risk premium of
   5.75% for a suburban retail asset. Give the discount rate two ways —
   simple sum and fully compounded — and state which the deck calls more
   accurate.
5. Three comparable sales give discount rates of 9.2%, 9.6% and 10.4%.
   You judge the first to be highly comparable, the second moderately so,
   and the third a poor match. Propose defensible weights and compute the
   weighted rate.
6. A fund's mandate requires 9.0% overall. Debt is available at 6.8% at a
   65% LVR. What return must equity deliver?

**Answers**

1. **Requirement side**: risk-free rate + risk premium. **Delivery
   side**: cap rate + growth rate. Both equal the discount rate, and the
   Gordon Growth Model (`DR = cap rate + g`) is the identity connecting
   them.
2. `84,000 / 960,000 =` **8.75%**. Using it as a discount rate is only
   valid if the $84,000 is a **stabilised** (level, non-growing) income —
   otherwise the cap rate and the true discount rate diverge.
3. WACC assumes a constant debt-to-value ratio (`D/V`). An amortising
   loan reduces the debt balance every period, so `D/V` falls over the
   holding period and a single WACC calculated at t=0 no longer describes
   the blended return in later years.
4. Simple: `4.2% + 5.75% = 9.95%`. Compounded:
   `1.042 × 1.0575 − 1 = 10.19%`. The deck calls the compounded form more
   accurate — a 24bp gap here.
5. One defensible weighting: 60% / 30% / 10% (heaviest weight on the most
   comparable sale). `0.092×0.6 + 0.096×0.3 + 0.104×0.1 = 0.0552 + 0.0288
   + 0.0104 = 0.0944` → **9.44%**. Any weighting is acceptable provided it
   is justified against how comparable each sale actually is — this is
   the tutorial's own stated rule.
6. `rE = (WACC − rD × LVR) / (1 − LVR) = (0.09 − 0.068×0.65) / 0.35
   = (0.09 − 0.0442) / 0.35 = 0.0458 / 0.35 =` **13.09%**.

</details>
