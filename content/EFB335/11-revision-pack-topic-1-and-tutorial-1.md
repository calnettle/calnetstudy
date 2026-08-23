# Revision Pack 1 — Topic 1 (The Investment Background) + Tutorial 1

## How to use this pack

Read Part A once, slowly, doing every worked example on paper or in Excel before you read the answer. Then do Part B (the tutorial) closed-book and compare. Part C is your self-test; Part D is the one screen you memorise the night before the 2 September briefing and again before the final exam.

---

## Part A — Concepts taught from scratch

### A1. What is an investment, and what does it have to pay you?

**What it is.** An investment is a current commitment of dollars for a period of time in order to derive future payments. You give up spending today in expectation of spending more later. Nobody does that for free, so every investment has to compensate you for three things:

| Component | What it compensates | Name in the textbook |
|---|---|---|
| Opportunity cost | The time you went without your money, even with zero risk and zero inflation | **Real risk-free rate** (pure time value) |
| Inflation | Dollars you get back buy less than dollars you handed over | **Expected inflation premium** |
| Uncertainty | The actual payments may differ from the expected ones | **Risk premium** |

**Why you care.** These three add up to your **required rate of return** — the hurdle an investment has to clear before you say yes.

```
Required return ≈ Real risk-free rate + Expected inflation + Risk premium

Nominal risk-free rate = Real risk-free rate + Expected inflation
                         (what a government bond pays you)
Risk premium           = Required return − Nominal risk-free rate
                         (the extra for bearing uncertainty)
```

**Real vs nominal.** A *nominal* return is the headline percentage. A *real* return is what is left after inflation has eaten its share. If you earn 7% and inflation is 3%, the precise real return is `1.07 / 1.03 − 1 = 3.88%` (the quick approximation is 7 − 3 = 4%).

**Where the risk premium comes from.** Reilly & Brown list five sources of uncertainty. You will be asked to *name and explain* them, so learn the list:

| Source | One-line meaning |
|---|---|
| Business risk | Uncertainty of the firm's operating income (sales, costs) |
| Financial risk | Extra uncertainty from the firm using debt — fixed interest must be paid before equity sees anything |
| Liquidity risk | How fast, and at what price concession, you can turn the asset back into cash |
| Exchange rate risk | Returns earned in a foreign currency change value when converted home |
| Country (political) risk | Changes in a country's political or economic environment |

**Preview — the security market line.** Put required return on the vertical axis and risk on the horizontal. The line starts at the nominal risk-free rate (zero risk) and slopes upward: more risk, more required return. That line is the **security market line (SML)**. Topic 3 builds it properly; for now just hold the picture — the intercept is the risk-free rate, the slope is the price of risk.

> **Trap that changes an answer.** The question "discuss the three components of required return" wants *real risk-free rate, inflation, risk premium* — not "business, financial, liquidity". Those five are the *sources of the risk premium*, i.e. sub-parts of component three. Mixing the two lists is a classic half-marks answer.

---

### A2. Holding Period Return (HPR) and Holding Period Yield (HPY)

**What it is.** HPR is the ending value divided by the beginning value — a *multiple*. HPY is that multiple minus one — a *percentage*. They carry identical information; the exam just wants you to know which is which.

```
HPR = Ending value of investment / Beginning value of investment
HPY = HPR − 1

With a dividend or other income D received during the period:
HPY = (P₁ − P₀ + D) / P₀
    = (P₁ − P₀)/P₀  +  D/P₀
      capital gain      income yield
```

**Worked example.** You buy a share for $50, receive a $5 dividend, and sell for $59.

```
Ending value   = 59 + 5 = 64
HPR            = 64 / 50 = 1.28
HPY            = 1.28 − 1 = 0.28 = 28%

Split:  capital gain  = (59 − 50)/50 = 9/50  = 18%
        dividend yield = 5/50                 = 10%
        total                                 = 28%   ✓
```

**Why you care.** Every other return measure in this unit is built from HPYs. Get the sign of the dividend right (it is income *to you* when you are long) and the rest follows.

**Excel translation.** `=(P1-P0+D)/P0` or, from a price column, `=B3/B2-1`. Total return indices (like the BHP file and the briefing data) already include dividends — then it is just `=B3/B2-1` with no dividend term.

> **Trap.** HPR can never be negative and `HPR = 1` means you broke even. If you ever compute HPR = −0.2 you have subtracted 1 twice. HPY can be negative; HPR cannot.

---

### A3. Annualising a multi-year return

**What it is.** A 3.5-year HPR of 1.40 is not "40% a year". To compare investments of different lengths you convert to an *annual* rate by taking the n-th root, where `n` is the number of **years**.

```
Annual HPR = HPR^(1/n)
Annual HPY = HPR^(1/n) − 1          n = number of YEARS (can be fractional)
```

**Worked example.** $10,000 grows to $14,000 over 3.5 years.

```
HPR        = 14,000 / 10,000 = 1.40
Annual HPR = 1.40^(1/3.5) = 1.40^0.285714 = 1.10091
Annual HPY = 0.10091 = 10.09% per year

Check: 1.10091^3.5 = 1.40  ✓
```

**Excel translation.** `=HPR^(1/n)-1`. Get `n` from dates with `=YEARFRAC(start_date, end_date)` or `=(end−start)/365.25`.

> **Trap that changes an answer.** `n` is years, not observations. With 42 *monthly* observations over 3.5 years, `1.40^(1/42) − 1 = 0.80%` — that is a *monthly* rate, and if you report it as annual you are off by a factor of twelve-plus. The BHP workbook has 13,608 daily returns over 52.16 years: `n = 52.16`.

---

### A4. Arithmetic mean vs geometric mean

**What it is.** Given several annual HPYs, there are two ways to average them.

```
Arithmetic mean   AM = Σ HPY / n              (simple average of the yields)
Geometric mean    GM = [ Π HPR ]^(1/n) − 1    (multiply the HPRs, n-th root, minus 1)
```

**When to use which.**

| Use | Measure | Reason |
|---|---|---|
| Best estimate of *next year's* return | **AM** | Each year is one draw from the distribution; the mean of the draws is the expected value |
| What you *actually earned* per year over the past | **GM** | It is the constant annual rate that turns the starting value into the ending value — it respects compounding |

**Relationship.** If every year's return is identical, AM = GM. Otherwise **AM > GM, always**, and the gap grows with volatility. Quick estimate of the gap: `σ²/2`.

**Worked example.** Three years: +30%, −20%, +10%.

```
AM = (0.30 − 0.20 + 0.10) / 3 = 0.20 / 3 = 0.0667 = 6.67%

Π HPR = 1.30 × 0.80 × 1.10 = 1.144
GM    = 1.144^(1/3) − 1 = 1.04586 − 1 = 0.0459 = 4.59%

AM > GM by 2.08 percentage points.
```

Why GM is "what happened": $100 → $130 → $104 → $114.40. Growing $100 at 4.59% for three years gives $114.40. Growing it at 6.67% would give $121.37, which is money you never had.

**The extreme case to remember.** −50% then +50%: AM = 0%, but $100 → $50 → $75, so `GM = (0.5 × 1.5)^(1/2) − 1 = −13.4%`.

**Excel translation.** `=AVERAGE(range)` for AM. For GM, `=GEOMEAN(1+range)-1` (array formula in older Excel) or `=PRODUCT(1+range)^(1/COUNT(range))-1`, or from the start and end values `=(End/Start)^(1/years)-1`.

> **Trap that changes an answer.** If your GM comes out *above* your AM you have an arithmetic slip — usually forgetting to add 1 before multiplying, or forgetting to subtract 1 at the end. `GEOMEAN(range)` on raw yields (without the +1) is wrong and will even crash on negative returns.

---

### A5. Portfolio HPY

**What it is.** The return on a portfolio is the weighted average of the returns on its holdings, where the weights are the **beginning** market values as a fraction of the starting portfolio. The textbook calls this the dollar-weighted or value-weighted return. It is also just the overall change in the portfolio's value.

```
HPY_portfolio = Σ wᵢ × HPYᵢ        wᵢ = beginning value of holding i / beginning portfolio value
```

**Worked example.** $60,000 in Stock A (returns +12%) and $40,000 in Stock B (returns −4%).

```
w_A = 60,000 / 100,000 = 0.60        w_B = 0.40
HPY_p = 0.60 × 0.12 + 0.40 × (−0.04) = 0.072 − 0.016 = 0.056 = 5.6%

Check by values: A → 67,200,  B → 38,400,  total 105,600  → 5.6%  ✓
```

**Excel translation.** `=SUMPRODUCT(weights, returns)`. For an *equally weighted* portfolio of daily returns, `=AVERAGE(B4:U4)` across the stock columns only.

> **Trap.** Weights come from *beginning* values, not ending values and not share counts. And portfolio **return** is a weighted average but portfolio **risk** is not — that is Topic 2's whole story.

---

### A6. Expected return from a probability distribution

**What it is.** Historical returns are facts; future returns are uncertain. Risk is the uncertainty of future outcomes. You describe the future with a list of possible returns and their probabilities (which must sum to 1.0), and the expected return is the probability-weighted average.

```
E(R) = Σ Pᵢ × Rᵢ = P₁R₁ + P₂R₂ + … + PₙRₙ
```

Three shapes from the lecture's Example 2:

| Investment | Distribution | E(R) |
|---|---|---|
| Risk-free | One outcome, P = 1.0, R = 5% | 5% |
| Risky Investment 1 | Three outcomes, unequal probabilities | 7% |
| Risky Investment 2 | Ten outcomes, each P = 0.1, from −40% to +50% | 5% |

**Worked example — Risky Investment 1.**

| Pᵢ | Rᵢ | Pᵢ × Rᵢ |
|---|---|---|
| 0.15 | −0.20 | −0.030 |
| 0.70 | +0.10 | +0.070 |
| 0.15 | +0.20 | +0.030 |

```
E(R) = −0.030 + 0.070 + 0.030 = 0.070 = 7.0%
```

Read it: a probability-weighted return of 7%, pulled toward the most likely outcome (10%), with possible outcomes from −20% to +20%.

**Worked example — Risky Investment 2.**

```
E(R) = 0.1 × [(−0.4) + (−0.3) + (−0.2) + (−0.1) + 0 + 0.1 + 0.2 + 0.3 + 0.4 + 0.5]
     = 0.1 × 0.5
     = 0.05 = 5.0%
```

**Excel translation.** `=SUMPRODUCT(prob_range, return_range)`.

> **Trap.** Check the probabilities sum to 1.0 before you start. If the question gives you frequencies or counts instead, convert to probabilities first (divide by the total), otherwise your E(R) is scaled by the count.

---

### A7. Variance and standard deviation — expected and historical

**What it is.** Risk is uncertainty, so the measure of risk must capture how far outcomes are likely to land from the expected return. Variance is the probability-weighted average of the squared deviations from E(R). Standard deviation is its square root, and is reported more often because it is in the same units (%) as the return.

```
Expected (forward-looking, probabilities given):
    σ² = Σ Pᵢ × [ Rᵢ − E(R) ]²
    σ  = √σ²

Historical (a series of HPYs, equal weight each):
    σ² = Σ [ HPYᵢ − E(HPY) ]² / n          E(HPY) = the arithmetic mean
    σ  = √σ²
```

Why squared: positive and negative misses would otherwise cancel to zero, and squaring punishes big misses more than small ones (a 20% miss counts four times a 10% miss).

**Worked example — Risky Investment 1** (E(R) = 0.07).

| Pᵢ | Rᵢ | Rᵢ − E(R) | (Rᵢ − E(R))² | Pᵢ × (…)² |
|---|---|---|---|---|
| 0.15 | −0.20 | −0.27 | 0.0729 | 0.010935 |
| 0.70 | +0.10 | +0.03 | 0.0009 | 0.000630 |
| 0.15 | +0.20 | +0.13 | 0.0169 | 0.002535 |

```
σ² = 0.010935 + 0.000630 + 0.002535 = 0.01410
σ  = √0.01410 = 0.11874 = 11.87%
```

**Risky Investment 2** (E(R) = 0.05, ten outcomes, each weight 0.1):

```
σ² = 0.1 × [(−0.40 − 0.05)² + (−0.30 − 0.05)² + … + (0.50 − 0.05)²] = 0.0825
σ  = √0.0825 = 0.28723 = 28.72%
```

**Risk-free investment:** one certain outcome, so every deviation is zero: `σ² = 1.0 × (0.05 − 0.05)² = 0`.

**Worked example — historical.** Four annual returns: 5%, −3%, 10%, 4%.

```
AM = (0.05 − 0.03 + 0.10 + 0.04) / 4 = 0.16 / 4 = 0.04

Deviations:    +0.01   −0.07   +0.06   0.00
Squared:       0.0001  0.0049  0.0036  0.0000     Σ = 0.0086

Population (÷ n):    σ² = 0.0086 / 4 = 0.002150   σ = 4.64%
Sample     (÷ n−1):  σ² = 0.0086 / 3 = 0.002867   σ = 5.35%
```

**Which divisor?** The Topic 1 slides divide by `n` (they treat the series as the whole population). Excel's default `STDEV.S` divides by `n − 1` (treats it as a sample). The briefing-assessment sample solution uses `STDEV.S`. In a hand calculation, follow the slide formula and *say* which you used; in Excel, use `STDEV.S` unless told otherwise.

**Annualising risk from daily or monthly data.** Variance scales with time; standard deviation scales with the *square root* of time.

```
σ²_annual = σ²_daily × 252            σ_annual = σ_daily × √252
σ²_annual = σ²_monthly × 12           σ_annual = σ_monthly × √12
```

**The BHP example (Topic 1 BHP Historical Returns workbook).** Daily total-return index from 1 Jan 1973 to 27 Feb 2025, 13,608 daily returns.

| Measure | Value | How |
|---|---|---|
| Total HPR | 554.28 | 55,427.78 / 100 |
| Years n | 52.16 | days / 365.25 |
| Annual HPR | 1.1288 | 554.28^(1/52.16) |
| **Annual HPY (geometric)** | **12.88%** | 1.1288 − 1 |
| Daily AM | 0.06106% | `=AVERAGE` of daily returns |
| **Annual AM** | **16.63%** | daily AM × 272.33 (the workbook's multiplier) |
| Daily variance | 0.00029223 | `=VAR.S` |
| Daily SD | 1.709% | √ |
| Annual variance | 0.07364 | daily variance × 252 |
| **Annual SD** | **27.14%** | √0.07364 |

AM (16.63%) exceeds GM (12.88%) by 3.75 points; `σ²/2 = 0.0736/2 = 3.68%` — the approximation holds.

One inconsistency in the workbook you should know about: it annualises the arithmetic mean by **×272.33** but the variance by **×252**. Using 252 for both gives an annual AM of **15.39%**. The answer the unit expects is 16.63%; if you rebuild this in the assessment, use the same multiplier for return and risk and state it.

**Excel translation.** Expected: `=SUMPRODUCT(P, (R-ER)^2)`. Historical: `=VAR.P` / `=STDEV.P` for ÷n, `=VAR.S` / `=STDEV.S` for ÷(n−1). Annual SD: `=STDEV.S(range)*SQRT(252)`.

> **Trap that changes an answer.** Multiplying a daily SD by 252 instead of √252 overstates it by a factor of 15.9. Multiply *variance* by 252, or SD by √252 — never SD by 252.

---

### A8. Coefficient of variation (CV)

**What it is.** Standard deviation is *absolute* risk. A 10% SD on an investment returning 2% is a very different proposition from a 10% SD on one returning 20%. CV scales risk by return: units of risk per unit of expected return. **Lower is better.**

```
CV = σ / E(R)
```

**Worked example — the lecture's Example 4.**

| | A (benchmark) | B | C |
|---|---|---|---|
| E(R) | 0.05 | 0.07 | 0.05 |
| σ | 0 | 0.1187 | 0.2872 |
| CV | 0 / 0.05 = **0** | 0.1187 / 0.07 = **1.696** | 0.2872 / 0.05 = **5.745** |

Read it: for every 1 basis point of expected return, B carries 1.7 bp of risk and C carries 5.7 bp. B dominates C outright — higher return *and* lower risk.

**Excel translation.** `=STDEV.S(range)/AVERAGE(range)`.

> **Trap.** CV is meaningless when E(R) is zero or negative (division by zero, or a negative "risk" that looks good). If a question hands you a negative mean, say so and fall back to SD.

---

### A9. Sharpe ratio

**What it is.** CV uses *total* return in the denominator. The Sharpe ratio asks a sharper question: how much return *above the risk-free rate* do I get per unit of risk? **Higher is better.**

```
Sharpe = ( R − R_f ) / σ            R_f = risk-free (or benchmark) return
```

**Worked example — Example 4 again, benchmark A at 5% with zero risk.**

```
Sharpe_A = (0.05 − 0.05) / 0        = undefined (zero risk)
Sharpe_B = (0.07 − 0.05) / 0.1187   = 0.02 / 0.1187 = 0.1685
Sharpe_C = (0.05 − 0.05) / 0.2872   = 0
```

B earns a small positive excess return per unit of risk. C takes on 28.7% volatility and earns *nothing* over the risk-free rate for it.

| | CV | Sharpe |
|---|---|---|
| Numerator / denominator | σ over **total** return | **excess** return over σ |
| Good direction | **Lower** | **Higher** |
| Needs a risk-free rate? | No | Yes |

**Excel translation.** `=(annual_return − RFR)/annual_SD`. Keep everything annual or everything daily — never mix.

> **Trap that changes an answer.** In the briefing the RFR is given as an *annual* figure (3.85% in the sample). Dividing an annual excess return by a *daily* SD gives a Sharpe in the hundreds. If your Sharpe is not somewhere around −1 to +2, check units.

---

### A10. Risk-free versus risky — the one-line summary

A **risk-free** asset has one possible outcome, so variance = 0, SD = 0, CV = 0 and its Sharpe ratio is undefined. It still earns a return (the nominal risk-free rate: real rate + inflation). A **risky** asset has a spread of outcomes, so σ > 0, and must offer a **risk premium** above the risk-free rate or nobody rational would hold it. That premium per unit of σ is exactly what Sharpe measures, and the upward-sloping line through (0, R_f) is the SML preview from A1.

---

### A11. Types of orders

**What it is.** How you tell a broker what you want done. The four the unit tests:

| Order | Instruction | You get certainty of… | Risk |
|---|---|---|---|
| **Market** | Buy/sell now at the best current price | Execution | Price — you take whatever the market offers |
| **Limit** | Buy/sell only at your stated price or better; can add timing (*fill or kill*, *good until cancelled*) | Price | Execution — it may never fill |
| **Stop loss** | Conditional *market* order: **sell** if the price *falls* to your level. Protects a long position | A trigger level | **Gap down** — the price jumps through the stop and you fill lower |
| **Stop buy** | Conditional *market* order: **buy** if the price *rises* to your level. Used by short sellers to cap losses | A trigger level | **Gap up** |

**Worked example.** You own shares bought at $50 and place a stop loss at $45. Bad news lands overnight and the stock opens at $38. Your stop triggers at the open and becomes a market order — it fills at about $38, not $45. The stop limited the *decision*, not the *price*.

> **Trap.** A stop order becomes a **market** order once triggered. It does not guarantee the stop price. If asked for the risk of a stop loss, the answer is the gap.

---

### A12. Buying on margin

**What it is.** Instead of paying 100% cash, you borrow part of the purchase price from the broker, with the shares as collateral. The broker funds that loan at the **call money rate** (what banks charge brokers) plus a premium covering admin costs and a risk premium.

Two numbers govern the account:

| Term | Meaning | Lecture value |
|---|---|---|
| **Initial margin (IM)** | Share of the purchase you must fund with cash at the outset | 50% |
| **Maintenance margin (MM)** | Minimum equity ÷ total value after purchase; below it you get a margin call | 25% |

A **margin call** is met by depositing cash or securities; otherwise the broker sells the shares and repays the loan.

**The one idea that makes every formula obvious.** The loan is a **fixed** dollar amount. The lender is paid first. Whatever is left of the position's value after the loan is *your equity* — and you wear the entire downside.

```
Total value        = P × N
Loan               = P₀ × N × (1 − IM)          fixed from day one
Initial equity     = P₀ × N × IM
Equity at price P  = P × N − Loan
Percentage margin  = Equity / Total value = (P × N − Loan) / (P × N)
```

**Worked example — lecture Example 5.** 1,000 shares at $100, IM 50%, MM 25%.

```
Total value   = 100 × 1,000       = 100,000
Cash paid     = 100,000 × 0.50    =  50,000
Loan          = 100,000 − 50,000  =  50,000
Equity        = 100,000 − 50,000  =  50,000     % margin = 50%  ✓
```

Price falls to $65:

```
Total value = 65 × 1,000 = 65,000
Equity      = 65,000 − 50,000 = 15,000
% margin    = 15,000 / 65,000 = 0.2308 = 23.1%   < 25%   → MARGIN CALL
```

**How much cash to deposit to get back to 25%?** Cash deposited raises equity *and* total funding by the same amount `x`:

```
(15,000 + x) / (65,000 + x) = 0.25
15,000 + x      = 0.25 × 65,000 + 0.25x
15,000 + x      = 16,250 + 0.25x
x − 0.25x       = 16,250 − 15,000
0.75x           = 1,250
x               = 1,666.67  ≈ $1,667

Check: 16,666.67 / 66,666.67 = 25.0%  ✓
```

**Margin call price — derive it, don't memorise it.** Set the percentage margin equal to MM and solve for P:

```
(P × N − Loan) / (P × N) = MM
P × N − Loan             = MM × P × N
P × N × (1 − MM)         = Loan
P*                       = Loan / [ N × (1 − MM) ]

Example 5:  P* = 50,000 / [1,000 × 0.75] = 50,000 / 750 = $66.67
```

The slide prints this as "$66.70"; the exact figure is $66.67. Either earns the mark, but $66.67 is the one you get from the algebra.

**Return on equity and leverage.** Price rises to $120:

```
Equity        = 120 × 1,000 − 50,000 = 70,000
Return on equity = (70,000 − 50,000) / 50,000 = 40%
Stock return     = (120 − 100) / 100         = 20%
Leverage factor  = 1 / IM = 1 / 0.50 = 2×
```

The stock moved 20%; your equity moved 40%. At 40% initial margin the factor is 2.5×; at 60% it is 1.67×. It works identically on the way down, which is the whole risk.

**Excel translation.** Loan `=P0*N*(1-IM)`; equity `=P*N-Loan`; % margin `=(P*N-Loan)/(P*N)`; call price `=Loan/(N*(1-MM))`.

> **Trap that changes an answer.** The numerator of the call-price formula is the **LOAN**, not the initial equity. The unit's `Topic 1 Margins Solution` workbook uses `Initial Equity / (N × (1 − MM))` — which only works because at IM = 50% the equity equals the loan. At IM = 40% (Tutorial 1, Lauren) that shortcut gives the wrong price. Always use the loan.

---

### A13. Short selling on margin

**What it is.** You believe a stock is overpriced. You borrow the shares (through your broker), sell them now, and buy them back later — you hope cheaper — to return to the lender. Three rules come with it: you must **pay any dividends** to the lender while you are short, margin requirements apply, and a **stop buy** is the order that protects you.

**The one idea that makes the formulas obvious.** What you "owe" is not a fixed loan — it is the **stock itself**, and its value *floats* with the price. Your equity is everything sitting in the account (sale proceeds plus your deposit, less any dividends you have paid away) minus the current cost of buying the shares back.

```
Proceeds           = P₀ × N
Deposit            = P₀ × N × IM
Equity at price P  = Proceeds + Deposit − Dividends paid − (P × N)
Percentage margin  = Equity / (P × N)            denominator = current value of stock owed
```

**Worked example — lecture Example 6.** Short 1,000 Vodafone at $80, IM 50%.

```
Proceeds = 80 × 1,000        = 80,000
Deposit  = 80,000 × 0.50     = 40,000
Owed     = 1,000 × P
```

Price falls to $70:

```
Equity   = 80,000 + 40,000 − 70,000 = 50,000
% margin = 50,000 / 70,000 = 0.7143 = 71.4%     (slide rounds to 71%)
```

Margin went *up* — the short is working.

**Margin call price — derive it.** With MM = 25%:

```
(80,000 + 40,000 − 1,000P) / 1,000P = 0.25
120,000 − 1,000P  = 250P
120,000           = 1,250P
P*                = $96

General:  P* = (Proceeds + Deposit) / [ N × (1 + MM) ]
        = 120,000 / (1,000 × 1.25) = $96  ✓
```

**Return on a short.** Your capital at risk is the **deposit**, so that is the denominator.

```
Net profit     = (P₀ − P₁) × N − Dividends paid ± Interest (see Part B, Problem 4)
Rate of return = Net profit / Deposit
```

**The symmetry table — this is the exam.**

| | Long on margin | Short on margin |
|---|---|---|
| What you owe | Fixed dollar **loan** | The **stock**, value floats |
| Danger direction | Price **falls** | Price **rises** |
| Percentage margin | (P·N − Loan) / (P·N) | (Proceeds + Deposit − Div − P·N) / (P·N) |
| Call price | Loan / [N(1 **−** MM)] | (Proceeds + Deposit) / [N(1 **+** MM)] |
| Dividends | Received (income) | **Paid** (cost) |
| Maximum loss | Your equity (100%) | **Unlimited** |
| Protective order | Stop loss | Stop buy |

**Excel translation.** Equity `=Proceeds+Deposit-Div-P*N`; % margin `=Equity/(P*N)`; call price `=(Proceeds+Deposit)/(N*(1+MM))`.

> **Trap that changes an answer.** Long uses `(1 − MM)`; short uses `(1 + MM)`. Flip the sign and every downstream number is wrong. Sanity check: a long call price must be *below* the purchase price; a short call price must be *above* the sale price.

---

## Part B — Tutorial 1 fully worked

### B1. Chapter 1, Question 6 — why variance measures risk

*Some theorists consider the variance of the distribution of expected returns a good measure of uncertainty. Discuss the reasoning and purpose.*

**Answer.** Risk is the uncertainty that the realised return differs from the expected return. A risk measure therefore has to capture dispersion around the mean — and that is the definition of variance:

```
σ² = Σ Pᵢ [ Rᵢ − E(R) ]²
```

Four reasons it works:

1. It measures deviations from **E(R)**, which is exactly the quantity we are uncertain about.
2. **Squaring** stops positive and negative misses cancelling and penalises large misses disproportionately.
3. Each deviation is **probability-weighted**, so rare extremes do not dominate.
4. A **risk-free** asset has one outcome, so variance = 0 — the measure correctly reports no risk.

**Purpose.** A single, comparable number for risk: it lets you rank investments on risk and return, it combines (with covariances) into portfolio risk, and it is the input to asset-pricing models. Standard deviation is usually quoted because it shares the return's units.

**For the extra mark.** Variance treats upside and downside identically, whereas investors mostly fear the downside (hence semi-variance), and it assumes mean and variance describe the whole distribution (ignores skewness and kurtosis).

**What the marker wants.** The formula, "deviation from the expected value", "squared so they don't cancel", "probability-weighted", and at least one use. A limitation lifts it to full marks.

---

### B2. Chapter 1, Question 7 — the three components of required return

**Answer.**

```
Required return = Real risk-free rate + Expected inflation + Risk premium
```

1. **Opportunity cost — the real risk-free rate.** Compensation for deferring consumption even with no risk and no inflation: the pure time value of money.
2. **Expected inflation.** Compensation for the fall in purchasing power over the holding period. Real rate + inflation = the nominal risk-free rate.
3. **Uncertainty — the risk premium.** Compensation for the chance that actual returns differ from expected. Its sources: business, financial, liquidity, exchange-rate and country risk. More uncertainty, bigger premium.

**What the marker wants.** All three named *and* explained in one sentence each, in the textbook's language. Naming the five sources of the risk premium under component three shows you know where they belong.

---

### B3. Chapter 1, Problem 3 — Chang Corporation HPY

*$4,000 buys 80 shares. Dividend $5 per share. Sold at $59. Total HPY, and how much from price vs dividend.*

```
P₀ = 4,000 / 80 = $50.00

Ending share value = 80 × 59 = 4,720
Dividends          = 80 × 5  =   400
Ending value                 = 5,120

HPR = 5,120 / 4,000 = 1.28
HPY = 1.28 − 1 = 0.28 = 28%

Capital gain   = (59 − 50) / 50 = 9 / 50 = 18%
Dividend yield = 5 / 50          = 10%
Total                            = 28%   ✓
```

**Answer: HPY = 28%; 18% from the price change, 10% from dividends.** Matches the answer sheet.

**What the marker wants.** The $50 purchase price derived first, then the split. Per-share or total-dollar working both score.

---

### B4. Chapter 1, Problem 5 — Stocks T and B

| Year | T | B |
|---|---|---|
| 1 | 0.19 | 0.08 |
| 2 | 0.08 | 0.03 |
| 3 | −0.12 | −0.09 |
| 4 | −0.03 | 0.02 |
| 5 | 0.15 | 0.04 |

**(a) Arithmetic mean.**

```
T: (0.19 + 0.08 − 0.12 − 0.03 + 0.15) / 5 = 0.27 / 5 = 0.054 = 5.40%
B: (0.08 + 0.03 − 0.09 + 0.02 + 0.04) / 5 = 0.08 / 5 = 0.016 = 1.60%
```

**T is more desirable by AM.** Matches the answer sheet.

**(b) Standard deviation** (slide convention, ÷ n).

| Year | T − 0.054 | (…)² | B − 0.016 | (…)² |
|---|---|---|---|---|
| 1 | 0.136 | 0.018496 | 0.064 | 0.004096 |
| 2 | 0.026 | 0.000676 | 0.014 | 0.000196 |
| 3 | −0.174 | 0.030276 | −0.106 | 0.011236 |
| 4 | −0.084 | 0.007056 | 0.004 | 0.000016 |
| 5 | 0.096 | 0.009216 | 0.024 | 0.000576 |
| Σ | | **0.065720** | | **0.016120** |

```
T: σ² = 0.065720 / 5 = 0.013144    σ = √0.013144 = 0.11465 = 11.46%
B: σ² = 0.016120 / 5 = 0.003224    σ = √0.003224 = 0.05678 =  5.68%
```

**B is preferable by SD** (less total risk).

If you use the sample divisor (÷ 4, `STDEV.S`): T = 12.82%, B = 6.35%. Same ranking.

**(c) Coefficient of variation.**

```
T: 0.11465 / 0.054 = 2.123
B: 0.05678 / 0.016 = 3.549
```

**T is preferable by CV** — 2.12 units of risk per unit of return against 3.55.

**(d) Geometric mean.**

```
T: Π HPR = 1.19 × 1.08 × 0.88 × 0.97 × 1.15 = 1.26160
   GM = 1.26160^(1/5) − 1 = 1.04757 − 1 = 4.76%

B: Π HPR = 1.08 × 1.03 × 0.91 × 1.02 × 1.04 = 1.07383
   GM = 1.07383^(1/5) − 1 = 1.01435 − 1 = 1.43%
```

**Discussion.**

| | T | B |
|---|---|---|
| AM | 5.40% | 1.60% |
| GM | 4.76% | 1.43% |
| AM − GM | 0.64 pp | 0.17 pp |
| σ | 11.46% | 5.68% |
| σ²/2 | 0.66% | 0.16% |

AM > GM for both because returns vary year to year. AM is the best estimate of any single future year; GM is the compound rate you actually earned. The gap is roughly σ²/2, so the more volatile stock (T) has the larger gap — the arithmetic mean overstates realised performance more, the more volatile the series.

**What the marker wants.** Three different "winners" (AM → T, SD → B, CV → T) and the point that CV is the tie-breaker because it uses risk *and* return. In (d), the link "bigger σ → bigger AM−GM gap" is the discussion mark.

---

### B5. Chapter 3, Question 9 — define with an example

**Market order.** Buy or sell at the best current price; executes immediately; certainty of execution, not of price. *Example: "Sell 500 CBA at market" fills instantly at the current bid.*

**Limit order.** Executes only at your stated price or better; certainty of price, not of execution. *Example: "Buy 500 CBA limit $104" fills only if the price reaches $104 or lower.*

**Short sale.** Borrow shares, sell them now, buy back later to return them; profit if the price falls; you owe any dividends to the lender. *Example: short 100 shares at $56, cover at $45 → gross gain $1,100.*

**Stop loss.** A conditional market order that closes a position when the price reaches a set level in the *opposite* direction to the trade; for a long, it sells if the price drops to the level. *Example: bought at $50, stop loss at $45. Risk: a gap down fills you well below $45.*

**What the marker wants.** Definition plus a concrete example for each; for the stop loss, mention that it converts to a market order and the gap risk.

---

### B6. Chapter 3, Problem 2 — Lauren and Gentry Wine

*Deposit $50,000. Margin requirement 40%. Price $35. No commissions.*

**(a) Maximum shares.** The deposit is 40% of the position.

```
Position   = 50,000 / 0.40 = 125,000
Loan       = 125,000 − 50,000 = 75,000
Shares     = 125,000 / 35 = 3,571.43  →  3,571 shares
```

**Answer: 3,571 shares.** Matches the answer sheet.

**(b) Profit or loss.** Shortcut: profit = shares × price change, because the loan is fixed.

```
(i)  $45:  value = 3,571 × 45 = 160,695   equity = 160,695 − 75,000 = 85,695
           profit = 85,695 − 50,000 = +35,695
(ii) $25:  value = 3,571 × 25 =  89,275   equity =  89,275 − 75,000 = 14,275
           loss   = 14,275 − 50,000 = −35,725  (= 3,571 × (−10) = −35,710 on the shortcut;
           the $15 difference is the 0.43 fractional share)
```

With unrounded shares (3,571.43) both are **±$35,714** — the answer sheet's figure. State your rounding and either is accepted.

Leverage check: the stock moved ±28.6%; equity moved ±71.4% = 28.6% × (1/0.40 = 2.5×).

**(c) Margin call price at MM = 30%.**

```
(3,571P − 75,000) / 3,571P = 0.30
3,571P × (1 − 0.30) = 75,000
P* = 75,000 / (3,571 × 0.70) = 75,000 / 2,499.7 = $30.00
```

**Answer: $30.00.**

> **The answer sheet says $20. It is wrong.** At $20 the shares are worth 3,571 × 20 = $71,420, which is *less than the $75,000 loan* — equity would be negative, a margin of about −5%. The call would have come long before. Check at $30: value $107,130, equity $32,130, margin 32,130 / 107,130 = 30.0%. Confirm with your tutor, but the algebra is not in doubt.

**What the marker wants.** Position = deposit ÷ IM (not deposit × IM), the fixed loan carried through (b), and the call price from `Loan / [N(1 − MM)]` with a check.

---

### B7. Chapter 3, Problem 4 — Charlotte Horse Farms short sale

*Short 100 shares at $56. Margin 45%. No commissions. A $2.50 dividend is paid while short. Cover after one year at $45. Interest rate 8%. Rate of return?*

**Set-up.**

```
Proceeds      = 100 × 56   = 5,600
Deposit       = 5,600 × 0.45 = 2,520     ← your capital; this is the denominator
Cover cost    = 100 × 45   = 4,500
Dividends due = 100 × 2.50 =   250       ← you PAY these
```

**Trading profit.**

```
Price gain  = 5,600 − 4,500 = 1,100
Less dividend              = −250
Net trading profit         =  850
```

**Rate of return — three readings of "the interest rate is 8%".**

| Reading | Treatment of 8% | Working | Rate of return |
|---|---|---|---|
| 1 — Reilly & Brown convention | Interest **earned** on the $2,520 deposit | 2,520 × 0.08 = 201.60; (850 + 201.60) / 2,520 | **41.73%** |
| 2 — ignore interest | — | 850 / 2,520 | 33.73% |
| 3 — the answer sheet | Interest **charged** on the unfunded 55% of the position | 5,600 × 0.55 = 3,080; × 0.08 = 246.40; (1,100 − 250 − 246.40) = 603.60; / 2,520 | 23.95% |

The answer sheet stops at **$603.60** and never converts to a rate, although the question asks for one. Its interest treatment is also debatable: in a short sale you borrow *stock*, not money, and the proceeds sit with the broker, so the conventional textbook reading is that the 8% is earned on your deposit — **41.73%**. In the exam, state your assumption, show the working, and default to reading 1.

**Bonus — margin at the close and the call price (MM 30%).**

```
Equity at $45 = 5,600 + 2,520 − 250 − 4,500 = 3,370
% margin      = 3,370 / 4,500 = 74.9%
Call price    = (5,600 + 2,520) / (100 × 1.30) = 8,120 / 130 = $62.46
```

**What the marker wants.** Dividend subtracted (not added), the deposit as denominator (not $5,600), an explicit interest assumption, and a percentage at the end.

---

## Part C — Self-test

Work each one before opening the answers. Numbers are new; methods are the ones above.

1. You buy a share at $42, receive a $1.50 dividend, and sell at $48. HPY, and its split into capital gain and income?
2. $10,000 invested for 3 years 6 months is worth $14,000. Annual HPY? What wrong answer do you get if you use n = 42 months?
3. Annual returns +30%, −20%, +10%. AM and GM? Which one describes what a $100 investment became?
4. $60,000 in Stock A (+12%) and $40,000 in Stock B (−4%). Portfolio HPY?
5. Outcomes: −10% with P = 0.25, +8% with P = 0.50, +25% with P = 0.25. E(R), σ², σ, CV?
6. E(R) = 9%, R_f = 4%, σ = 15%. Sharpe ratio? CV?
7. Historical returns 5%, −3%, 10%, 4%. SD with ÷n and with ÷(n−1). Which Excel function gives each?
8. Buy 500 shares at $40, IM 60%, MM 30%. Loan, initial equity, margin call price, and return on equity if the price goes to $50.
9. Short 200 shares at $25, IM 50%, MM 30%. Margin call price. Percentage margin if the price goes to $20, and at $32.
10. Name the order each investor should place: (a) long holder who wants out if the price falls to $45; (b) short seller who wants out if the price rises to $60; (c) buyer who will only pay $104 or less. What risk do (a) and (b) share?

<details><summary>Answers</summary>

**1.**
```
HPY = (48 − 42 + 1.50) / 42 = 7.50 / 42 = 17.86%
Capital gain = 6 / 42 = 14.29%;  income = 1.50 / 42 = 3.57%;  sum 17.86% ✓
```

**2.**
```
HPR = 1.40;  Annual HPY = 1.40^(1/3.5) − 1 = 10.09%
Wrong (n = 42): 1.40^(1/42) − 1 = 0.80% — that is a MONTHLY rate
```

**3.**
```
AM = 0.20 / 3 = 6.67%
GM = (1.30 × 0.80 × 1.10)^(1/3) − 1 = 1.144^(1/3) − 1 = 4.59%
$100 → 130 → 104 → 114.40 = $100 × 1.0459³.  GM describes it.
```

**4.**
```
0.60 × 0.12 + 0.40 × (−0.04) = 0.072 − 0.016 = 5.6%
```

**5.**
```
E(R) = 0.25(−0.10) + 0.50(0.08) + 0.25(0.25) = −0.025 + 0.040 + 0.0625 = 0.0775 = 7.75%
σ²   = 0.25(−0.1775)² + 0.50(0.0025)² + 0.25(0.1725)²
     = 0.007877 + 0.000003 + 0.007439 = 0.015319
σ    = √0.015319 = 12.38%
CV   = 0.1238 / 0.0775 = 1.597
```

**6.**
```
Sharpe = (0.09 − 0.04) / 0.15 = 0.333
CV     = 0.15 / 0.09 = 1.667
```

**7.**
```
Mean = 0.04.  Squared deviations 0.0001, 0.0049, 0.0036, 0 → Σ 0.0086
÷ n:   σ² = 0.002150, σ = 4.64%   → VAR.P / STDEV.P
÷ n−1: σ² = 0.002867, σ = 5.35%   → VAR.S / STDEV.S
```

**8.**
```
Total = 500 × 40 = 20,000;  Loan = 20,000 × 0.40 = 8,000;  Equity = 12,000
P*    = 8,000 / (500 × 0.70) = 8,000 / 350 = $22.86
At $50: equity = 25,000 − 8,000 = 17,000;  ROE = 5,000 / 12,000 = 41.67%
Stock rose 25%; leverage 1/0.60 = 1.67×; 25% × 1.67 = 41.67% ✓
```

**9.**
```
Proceeds 5,000;  Deposit 2,500
P* = 7,500 / (200 × 1.30) = 7,500 / 260 = $28.85
At $20: (7,500 − 4,000) / 4,000 = 87.5%   (short is winning)
At $32: (7,500 − 6,400) / 6,400 = 17.2%   (< 30% → margin call; $32 > $28.85 ✓)
```

**10.** (a) Stop loss at $45. (b) Stop buy at $60. (c) Limit buy at $104. Shared risk: both stops become *market* orders when triggered, so a gap through the level fills at a worse price.
</details>

---

## Part D — Cheat sheet (memorise this)

### Formulas

```
RETURN
HPR = End / Begin                     HPY = HPR − 1
HPY = (P₁ − P₀ + D) / P₀  = capital gain + income yield
Annual HPY = HPR^(1/n) − 1            n = YEARS
AM = Σ HPY / n                        (next year's expected)
GM = [Π HPR]^(1/n) − 1                (what you actually earned)
AM ≥ GM,  gap ≈ σ²/2
Portfolio HPY = Σ wᵢ HPYᵢ             wᵢ = beginning value weights
Required return = Real RFR + Inflation + Risk premium

RISK
E(R) = Σ Pᵢ Rᵢ
σ² (expected)   = Σ Pᵢ [Rᵢ − E(R)]²
σ² (historical) = Σ [HPYᵢ − AM]² / n      (÷ n−1 for a sample)
σ = √σ²
σ_annual = σ_daily × √252        σ²_annual = σ²_daily × 252
CV = σ / E(R)                    lower is better
Sharpe = (R − R_f) / σ           higher is better

MARGIN — LONG (loan is fixed)
Loan = P₀ N (1 − IM)             Equity = P N − Loan
% margin = (P N − Loan) / (P N)
Call price  P* = Loan / [N (1 − MM)]
Cash to restore MM:  (Equity + x)/(Value + x) = MM
ROE = ΔEquity / Initial equity   Leverage = 1 / IM

MARGIN — SHORT (stock owed floats)
Proceeds = P₀ N                  Deposit = P₀ N × IM
Equity = Proceeds + Deposit − Dividends paid − P N
% margin = Equity / (P N)
Call price  P* = (Proceeds + Deposit) / [N (1 + MM)]
Rate of return = Net profit / Deposit
```

### 10 numbers and facts to know cold

1. Risky Investment 1: E(R) 7%, σ² 0.0141, σ 11.87%, CV 1.70.
2. Risky Investment 2: E(R) 5%, σ² 0.0825, σ 28.72%, CV 5.74.
3. Sharpe: B = 0.02 / 0.1187 = 0.1685; C = 0; risk-free = undefined.
4. BHP 1973–2025: GM 12.88% pa, AM 16.63% pa, annual σ 27.14%; AM − GM = 3.75 pp ≈ σ²/2.
5. Example 5 long: 1,000 @ $100, IM 50%, MM 25% → at $65 margin 23.1% (call), deposit $1,667 to cure, call price $66.67, at $120 ROE = 40% (2× leverage).
6. Example 6 short: 1,000 @ $80, IM 50%, MM 25% → at $70 margin 71.4%, call price $96.
7. Chang: HPY 28% = 18% price + 10% dividend.
8. Stocks T / B: AM 5.40% / 1.60%; σ 11.46% / 5.68%; CV 2.12 / 3.55; GM 4.76% / 1.43%.
9. Lauren: 3,571 shares, loan $75,000, ±$35,714, call price **$30** (sheet's $20 is wrong).
10. Charlotte: deposit $2,520, net trade $850, RoR 41.73% (interest earned on deposit) / 33.73% (no interest) / 23.95% (sheet's charge-on-borrowing reading).

### Traps

1. `n` in annualising is years, not observations.
2. Add 1 before multiplying HPRs for GM; subtract 1 after. GM > AM means you slipped.
3. Required-return components are real RFR / inflation / risk premium; business, financial, liquidity, FX, country risk are *sources* of the premium.
4. ÷n (slides, `VAR.P`) vs ÷(n−1) (`VAR.S`, briefing). Say which.
5. SD scales by √time, variance by time. Never SD × 252.
6. CV lower is better; Sharpe higher is better. Keep Sharpe inputs all annual or all daily.
7. Long call price: numerator is the **loan**, denominator `(1 − MM)`.
8. Short call price: denominator `(1 + MM)`. Long call < purchase price; short call > sale price.
9. Short sellers **pay** dividends. Rate of return on a short divides by the **deposit**.
10. Stop orders become market orders — gap risk.
11. Probabilities must sum to 1.0; beginning-value weights for portfolio HPY.
12. State rounding (whole shares vs fractional) and interest assumptions; markers award method.

### Excel function map

| Task | Function |
|---|---|
| HPY from prices | `=B3/B2-1` |
| Log return | `=LN(B3/B2)` |
| Arithmetic mean | `=AVERAGE(range)` |
| Geometric mean | `=GEOMEAN(1+range)-1` or `=PRODUCT(1+range)^(1/COUNT(range))-1` |
| Annualise from total HPR | `=HPR^(1/YEARFRAC(start,end))-1` |
| Annualise a daily mean | `=(1+AVERAGE(range))^252-1` |
| Expected return | `=SUMPRODUCT(P, R)` |
| Variance / SD, ÷n | `=VAR.P(range)` / `=STDEV.P(range)` |
| Variance / SD, ÷(n−1) | `=VAR.S(range)` / `=STDEV.S(range)` |
| Expected variance | `=SUMPRODUCT(P,(R-ER)^2)` |
| Annual SD from daily | `=STDEV.S(range)*SQRT(252)` |
| CV | `=STDEV.S(range)/AVERAGE(range)` |
| Sharpe | `=(ann_return-RFR)/ann_SD` |
| Portfolio HPY | `=SUMPRODUCT(weights, returns)` |
| Long margin call | `=Loan/(N*(1-MM))` |
| Short margin call | `=(Proceeds+Deposit)/(N*(1+MM))` |
| Years between dates | `=YEARFRAC(start,end)` |
