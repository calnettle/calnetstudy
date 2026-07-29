# TUTORIAL 1 — Full Worked Solutions

## Chapter 1, Question 6

> *Some financial theorists consider the variance of the distribution of expected rates of return to be a good measure of uncertainty. Discuss the reasoning behind this measure of risk and its purpose.*

**Answer:**

Risk is the **uncertainty of future outcomes** — the possibility that the return actually realised will differ from the return that was expected. A sensible risk measure must therefore capture **how widely dispersed** the possible outcomes are around the expected value.

Variance does exactly this:

```
σ² = Σ Pᵢ [ Rᵢ − E(R) ]²
```

**Reasoning:**

1. It measures deviations **from the expected return (the mean)** — which is precisely the definition of the uncertainty we care about.
2. Squaring the deviations means **positive and negative deviations don't cancel out**, and larger deviations are penalised disproportionately (a 20% miss counts 4× as much as a 10% miss).
3. Each deviation is **weighted by its probability**, so unlikely extreme outcomes don't dominate.
4. A **risk-free** investment has a single certain outcome, so its variance is **zero** — the measure correctly assigns no risk.

**Purpose:** it provides a single, quantified, comparable number for risk. This lets investors (a) rank investments on a risk–return basis, (b) compute portfolio risk from component risks and covariances, and (c) plug risk into asset pricing models. Standard deviation (√variance) is usually reported because it is in the same units as returns.

**Limitations worth mentioning for extra marks:** variance treats **upside and downside deviations identically**, whereas most investors only regard downside as "risk" — which is why semi-variance exists. It also assumes returns are adequately described by their first two moments (mean and variance), ignoring **skewness and kurtosis**.

---

## Chapter 1, Question 7

> *Discuss the three components of an investor's required rate of return on an investment.*

**Answer:**

```
Required Return = Real Risk-Free Rate + Expected Inflation Premium + Risk Premium
```

1. **Opportunity cost (the real risk-free rate)** — compensation for deferring consumption. Even with zero risk and zero inflation, an investor requires a return for giving up the use of their money for a period of time. This is the **pure time value of money**.

2. **Expected inflation** — compensation for the anticipated erosion of purchasing power over the holding period. Without it, an investor would be repaid in dollars that buy less than the dollars they lent. *(Real risk-free rate + expected inflation = the nominal risk-free rate.)*

3. **Uncertainty (the risk premium)** — compensation for the possibility that actual returns differ from expected returns. Sources include business risk, financial risk, liquidity risk, exchange rate risk and country/political risk. The larger the uncertainty, the larger the premium demanded.

---

## Chapter 1, Problem 3

> *At the beginning of last year, you invested $4,000 in 80 shares of the Chang Corporation. During the year, Chang paid dividends of $5 per share. At the end of the year, you sold the 80 shares for $59 a share. Compute your total HPY on these shares and indicate how much was due to the price change and how much was due to the dividend income.*

**Step 1 — purchase price per share:**

```
P₀ = $4,000 / 80 = $50.00
```

**Step 2 — end-of-year values:**

```
Ending share value   = 80 × $59 = $4,720
Dividends received   = 80 × $5  =   $400
Total ending value               = $5,120
```

**Step 3 — HPR and HPY:**

```
HPR = $5,120 / $4,000 = 1.28
HPY = 1.28 − 1 = 0.28 = 28%
```

**Step 4 — decompose:**

```
Capital gain component = ($59 − $50) / $50 = $9 / $50  = 0.18 = 18%
Dividend component     = $5 / $50          = 0.10      = 10%
                                             ─────────────────
                                    Total    0.28      = 28%  ✓
```

**Answer: Total HPY = 28%; 18% from the price change, 10% from dividend income.**

---

## Chapter 1, Problem 5

> *During the past five years, you owned two stocks that had the following annual rates of return:*

| Year | Stock T | Stock B |
|---|---|---|
| 1 | 0.19 | 0.08 |
| 2 | 0.08 | 0.03 |
| 3 | −0.12 | −0.09 |
| 4 | −0.03 | 0.02 |
| 5 | 0.15 | 0.04 |

### (a) Arithmetic mean annual rate of return

```
Stock T: (0.19 + 0.08 − 0.12 − 0.03 + 0.15) / 5 = 0.27 / 5 = 0.0540 =  5.40%
Stock B: (0.08 + 0.03 − 0.09 + 0.02 + 0.04) / 5 = 0.08 / 5 = 0.0160 =  1.60%
```

**By this measure, Stock T is more desirable** (5.40% > 1.60%).

### (b) Standard deviation of the annual rate of return

**Stock T** — deviations from E(R) = 0.054:

| Year | R | R − E(R) | [R − E(R)]² |
|---|---|---|---|
| 1 | 0.19 | 0.136 | 0.018496 |
| 2 | 0.08 | 0.026 | 0.000676 |
| 3 | −0.12 | −0.174 | 0.030276 |
| 4 | −0.03 | −0.084 | 0.007056 |
| 5 | 0.15 | 0.096 | 0.009216 |
| | | **Σ** | **0.065720** |

```
σ² = 0.065720 / 5 = 0.013144
σ  = √0.013144   = 0.114647 = 11.46%
```

**Stock B** — deviations from E(R) = 0.016:

| Year | R | R − E(R) | [R − E(R)]² |
|---|---|---|---|
| 1 | 0.08 | 0.064 | 0.004096 |
| 2 | 0.03 | 0.014 | 0.000196 |
| 3 | −0.09 | −0.106 | 0.011236 |
| 4 | 0.02 | 0.004 | 0.000016 |
| 5 | 0.04 | 0.024 | 0.000576 |
| | | **Σ** | **0.016120** |

```
σ² = 0.016120 / 5 = 0.003224
σ  = √0.003224   = 0.056780 = 5.68%
```

**By this measure, Stock B is preferable** — it has substantially lower total risk (5.68% vs 11.46%).

> **If your lecturer wants the *sample* SD (divide by n−1 = 4):** Stock T σ = **12.82%**, Stock B σ = **6.35%**. The *ranking is unchanged*. Check which convention the exam wants — the Topic 1 slides use `/n` for this style of question, Excel's `STDEV.S` uses `/(n−1)`.

### (c) Coefficient of variation

```
CV = σ / E(R)

Stock T: 0.114647 / 0.054 = 2.123
Stock B: 0.056780 / 0.016 = 3.549
```

**By this relative measure of risk, Stock T is preferable** — it carries only 2.12 units of risk per unit of return, versus 3.55 for Stock B.

> **The teaching point of this question:** the three measures give three different "winners". AM says T. SD says B. CV says T. **CV is the tie-breaker** because it's the only one that considers risk *and* return simultaneously. Stock B is less volatile in absolute terms, but you're being poorly paid for the risk you do take.

### (d) Geometric mean rate of return

```
GM = [ Π (1 + Rᵢ) ]^(1/5) − 1
```

**Stock T:**

```
(1.19)(1.08)(0.88)(0.97)(1.15) = 1.26160
GM = 1.26160^(0.2) − 1 = 1.047574 − 1 = 0.047574 = 4.76%
```

**Stock B:**

```
(1.08)(1.03)(0.91)(1.02)(1.04) = 1.07383
GM = 1.07383^(0.2) − 1 = 1.014348 − 1 = 0.014348 = 1.43%
```

### Discussion

| | Stock T | Stock B |
|---|---|---|
| Arithmetic mean | 5.40% | 1.60% |
| Geometric mean | 4.76% | 1.43% |
| **AM − GM gap** | **0.64 pp** | **0.17 pp** |
| Standard deviation | 11.46% | 5.68% |

**Differences between AM and GM:**

For both stocks **AM > GM**, as expected whenever returns are not identical across periods. The AM is the simple average of the annual yields and is the best estimate of the **expected return for any single future year**. The GM incorporates **compounding** and is the best measure of the **actual realised long-run performance** — it's the constant annual rate that would have produced the same terminal wealth.

**Relationship between the gap and the standard deviation:**

The AM–GM gap is **directly related to the volatility of returns** (approximately `σ²/2`):

```
Stock T: σ²/2 = 0.013144 / 2 = 0.0066 ≈ 0.64 pp gap ✓
Stock B: σ²/2 = 0.003224 / 2 = 0.0016 ≈ 0.17 pp gap ✓
```

Stock T's higher standard deviation (11.46% vs 5.68%) produces a **much larger** gap between its arithmetic and geometric means. **The more volatile the return series, the more the arithmetic mean overstates the return an investor actually earned.** This is why quoting an arithmetic average return for a volatile asset is misleading — and why fund managers report compound annual growth rates.

---

## Chapter 3, Question 9

> *Briefly define each of the following terms and give an example.*

**(a) Market order**
An order to buy or sell shares at the **best current price available**. It is **executed immediately** at the prevailing market price, providing immediate liquidity. You get certainty of *execution* but not of *price*.
*Example:* "Buy 500 CBA at market" — fills instantly at whatever the current offer is, say $105.30.

**(b) Limit order**
An order specifying the **price at which you are willing to buy or sell**. It is executed **only at that defined price or better**. You get certainty of *price* but not of *execution* — it may never fill. Timing can also be specified (*fill or kill*, *good until cancelled*).
*Example:* "Buy 500 CBA at limit $104.00" — fills only if the price falls to $104.00 or lower.

**(c) Short sale**
**Borrowing stock and immediately selling it**, with the obligation to buy it back later and return it to the lender. The short seller profits if the price **falls**, buying it back more cheaply than they sold it. The short seller is also liable for any **dividends** paid while short.
*Example:* Borrow and sell 100 shares at $56; buy back later at $45 → gross profit $1,100.

**(d) Stop loss order**
A **conditional market order** that closes out a position when the price reaches a designated level **in the opposite direction of the trade**. For a long position it directs a **sale** if the price *drops* to a given level, limiting downside.
*Example:* Own shares bought at $50, place a stop loss at $45 — if the price hits $45 it converts to a market order and sells.
*Risk:* a **'gap down'** — if the stock opens at $38 the order fills at $38, not $45.

---

## Chapter 3, Problem 2

> *Lauren has a margin account and deposits $50,000. Assume the prevailing margin requirement is 40 percent, commissions are ignored, and the Gentry Wine Corporation is selling at $35 per share.*

### (a) How many shares can Lauren purchase using the maximum allowable margin?

The deposit represents 40% of the total position:

```
0.40 × Total Portfolio = $50,000
Total Portfolio = $50,000 / 0.40 = $125,000

Shares = $125,000 / $35 = 3,571.43  →  3,571 shares
Debt (borrowed) = $125,000 − $50,000 = $75,000
```

**Answer: 3,571 shares** (using $125,000 of buying power, $75,000 of which is borrowed).

### (b) Lauren's profit (loss) if the price of Gentry's stock:

**(i) rises to $45**

```
New portfolio value  = 3,571 × $45 = $160,695
Less debt                          =  −$75,000
Equity                             =   $85,695
Less initial investment            =  −$50,000
Profit                             =   $35,695
```

**(ii) falls to $25**

```
New portfolio value  = 3,571 × $25 =  $89,275
Less debt                          =  −$75,000
Equity                             =   $14,275
Less initial investment            =  −$50,000
Loss                               =  −$35,695
```

> **On rounding:** using **unrounded** shares (3,571.43) the answer is **±$35,714** — you'll see this figure in textbook solution manuals. Using whole shares (3,571) it's **±$35,710**. Either is acceptable if you state your assumption. The shortcut is `Profit = Shares × ΔPrice`.

> **The leverage point:** the stock moved ±28.6% ($35→$45 or $35→$25), but Lauren's equity moved **±71.4%** ($35,695 / $50,000). Amplification = 1/0.40 = **2.5×**, in both directions.

### (c) If the maintenance margin is 30 percent, to what price can Gentry Wine fall before Lauren will receive a margin call?

Set the percentage margin equal to the maintenance margin:

```
(3,571P − $75,000) / 3,571P = 0.30

3,571P − $75,000 = 0.30 × 3,571P
3,571P (1 − 0.30) = $75,000
3,571P × 0.70     = $75,000
2,499.7P          = $75,000
P                 = $30.00
```

Or directly:

```
P* = Loan / [ N × (1 − MM) ] = $75,000 / (3,571 × 0.70) = $30.00
```

**Answer: $30.00** *(using unrounded shares: $75,000 / (3,571.43 × 0.70) = exactly $30.00)*

> ⚠️ **Correction flag.** The answer sheet in `Tutorial 1 Questions-1.docx` records **"$20"** for this part. Check the working: at P = $20, portfolio value = 3,571 × $20 = $71,420, which is **less than the $75,000 loan** — equity would be **negative**, i.e. a margin percentage of −5%. A margin call would have been triggered long before that. **$30.00 is correct.** Verify with your tutor, but the algebra is unambiguous.

**Sanity check at P = $30:**
```
Portfolio value = 3,571 × $30 = $107,130
Equity          = $107,130 − $75,000 = $32,130
% margin        = $32,130 / $107,130 = 30.0%  ✓
```

---

## Chapter 3, Problem 4

> *You decide to sell short 100 shares of Charlotte Horse Farms when it is selling at its yearly high of $56. Your broker tells you that your margin requirement is 45 percent and that there are no commissions. While you are short the stock, Charlotte pays a $2.50 per share dividend. At the end of one year, you buy 100 shares of Charlotte at $45 to close out your position. The interest rate is 8 percent. What is your rate of return on the investment?*

### Set-up

```
Proceeds from short sale = 100 × $56 = $5,600
Margin deposit required  = $5,600 × 0.45 = $2,520   ← your actual capital at risk
Cost to close position   = 100 × $45 = $4,500
Dividends payable        = 100 × $2.50 = $250       ← YOU owe these to the lender
```

### Gross trading profit

```
Gain on the price move = $5,600 − $4,500 = $1,100
Less dividends paid                      =  −$250
Net trading profit                       =   $850
```

### Rate of return

The denominator is **your own capital — the $2,520 margin deposit**, not the $5,600 position value.

**Interpretation 1 — interest earned on the margin deposit (standard textbook treatment):**

```
Interest earned = $2,520 × 0.08 = $201.60
Total return    = $850 + $201.60 = $1,051.60
Rate of return  = $1,051.60 / $2,520 = 41.73%
```

**Interpretation 2 — ignore interest entirely:**

```
Rate of return = $850 / $2,520 = 33.73%
```

**Interpretation 3 — interest charged on the borrowed 55% of the position:**

```
Borrowed portion = $5,600 × 0.55 = $3,080
Interest cost    = $3,080 × 0.08 = $246.40
Net profit       = $1,100 − $250 − $246.40 = $603.60
Rate of return   = $603.60 / $2,520 = 23.95%
```

> ⚠️ **Ambiguity flag.** Your answer sheet uses **Interpretation 3** and stops at the dollar profit of **$603.60** without converting to a rate of return. The question asks for a **rate of return**, so you must divide by the $2,520 deposit → **23.95%**.
>
> **However**, in a short sale you don't borrow *money* — you borrow *stock*. The sale proceeds sit with the broker, so the conventional treatment (and Reilly & Brown's) is that the **8% is interest you EARN on your margin deposit**, giving **41.73%**. Some editions treat it as earned on the full proceeds.
>
> **In an exam: state your assumption explicitly and show the working.** Markers award the method. The safest default is Interpretation 1.

### Percentage margin check during the trade

At the closing price of $45:

```
Equity = $5,600 + $2,520 − $250 − (100 × $45)
       = $5,600 + $2,520 − $250 − $4,500 = $3,370
% margin = $3,370 / $4,500 = 74.9%   ← comfortably above any maintenance requirement
```

**Price at which a 30% maintenance margin would be breached:**

```
P* = ($5,600 + $2,520) / [100 × (1 + 0.30)] = $8,120 / 130 = $62.46
```
