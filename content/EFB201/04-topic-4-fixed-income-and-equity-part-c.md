# Topic 4 — Fixed Income and Equity Markets (Part C)

**Reference:** CFA 2020 Level I curriculum Readings 46, 51–53.

Part C answers the question Part B left hanging: **where does the required
rate of return come from?** The answer is a return–risk framework — a
risk-free benchmark plus a premium for risk — and one model, CAPM, for pricing
the risk part. The unit deliberately keeps it small: you will not be asked to
estimate beta, and sample means, variances and standard deviations will be
given to you.

---

## 1. The return–risk framework

Decompose the investor's required rate of return into two layers:

```
Required return  =  "Risk-free" rate  +  Risk premium
                    (compensates          (compensates systematic
                     inflation)            and non-systematic risks)
                    ↑ benchmark            ↑ spread
```

The **benchmark** is the risk-free rate. The **spread** over it is the risk
premium. That is the same word "spread" you met in Part B as a credit spread —
a credit spread is one component of the total risk premium.

### Applied to fixed income

The DCF bond model from Part B rests on **three assumptions**:

1. The bond is **held to maturity**.
2. **No default** by the issuer.
3. **Coupon interest payments are reinvested at the same required rate of
   return** throughout the holding period.

When those are violated you get, respectively:

| Violated assumption | Risk that appears |
|---|---|
| Held to maturity | **Liquidity risk** (you may have to sell into a thin market) and **interest rate risk** (the price you can sell at moves with yields) |
| No default | **Credit risk** |
| Reinvestment at the required rate | **Interest rate risk** (reinvestment risk) |

> **The reinvestment assumption is at the *required rate of return*, not at
> the coupon rate.** The Part C tutorial's Q1 offers "the coupon interest
> payments are reinvested at 8%" for a bond with an 8% coupon and a 10%
> required return, and the answer is **false**. The DCF discounts at 10%, so it
> implicitly assumes reinvestment at 10%. Getting this backwards is the
> single most common error on that question.

> **"There is no active secondary market for this bond" is not an assumption
> of DCF — it is irrelevant to it.** The model prices the cash flows; it does
> not care whether anyone will trade the instrument. It only becomes relevant
> if you *break* the hold-to-maturity assumption, which is a different
> question. The tutorial classifies A and B as true assumptions, C and D as
> false or irrelevant.

### Applied to equity

Five measures the deck lists. **Values for measures 3–5 will be given to you
in assessments** — you need to know what they mean, not how to grind them.

```
1. Return       R_t = ln(P_t / P_(t−1))   or simply   R_t = P_t / P_(t−1) − 1

2. Risk         variance of returns, standard deviation of returns

3. Sample arithmetic mean
                R̄ᵢ = (1/T) Σ R_i,t                       for t = 1…T

4. Sample variance
                VAR(Rᵢ) = [1/(T−1)] Σ (R_i,t − R̄ᵢ)²      for t = 1…T

5. Sample standard deviation
                StdDev(Rᵢ) = √VAR(Rᵢ)
```

> **The variance divisor here is `T − 1`, not `T`.** These are *sample*
> statistics estimated from historical returns, so the denominator carries the
> Bessel correction. In Excel this is `VAR.S` and `STDEV.S`, not `VAR.P` and
> `STDEV.P`. If a question hands you a population variance and asks for a
> sample one, or vice versa, the two differ by a factor of `T/(T−1)`.

---

## 2. Systematic vs non-systematic risk

The deck's central illustration, from monthly returns 2011–2021:

| | Arithmetic average | Standard deviation | Return / risk | Beta |
|---|---|---|---|---|
| Woolworths (WOW) | 0.28% | 4.80% | 0.06 | 0.51 |
| Flight Centre (FLT) | −0.20% | 15.02% | −0.01 | 2.51 |
| ASX 200 (XJO) — market proxy | 0.29% | 3.84% | 0.07 | **1.00** |
| 30% WOW + 70% FLT | −0.06% | 10.84% | −0.01 | 1.91 |
| 50% WOW + 50% FLT | 0.04% | 8.24% | 0.00 | 1.51 |
| 70% WOW + 30% FLT | 0.13% | 6.03% | 0.02 | 1.11 |

What the table is designed to show: **the market index has the lowest standard
deviation of anything in the table** — lower than either individual stock and
lower than every blend of the two. That is diversification. Combining stocks
cancels out their non-systematic risks and leaves you compensated only for
exposure to systematic risk.

### The definitions

- **Systematic risk** cannot be avoided and is **inherent in the overall
  market**. It is **non-diversifiable** because the risk factors are innate to
  the market and affect the market as a whole.
- **Non-systematic risk** is **local** — limited to a particular asset or
  industry, and need not affect assets outside that class. Also called
  **individual risk** or **idiosyncratic risk**.

The deck's classification exercise:

| Event | Type |
|---|---|
| Employees go on strike | **Non-systematic** |
| CEO is diagnosed with a decision-impairing illness | **Non-systematic** |
| Pandemic | **Systematic** |
| New regulation bans coal as a production material | Systematic for the market as a whole in its effect on rates and sentiment; **industry-specific** in its direct effect — argue it either way and say why |
| Central bank increases interest rates | **Systematic** |
| A breakthrough in the R&D department | **Non-systematic** |

> **The test is "does this affect *the market*, or only *this firm/industry*?"**
> A CEO resignation, a strike, a product breakthrough — one firm. Interest
> rates, inflation, a currency move, a pandemic — everyone. The Part C
> tutorial's Q6 answer is *the resignation of the chief executive officer*;
> the other three (interest rate decline, US dollar depreciation, inflation
> spike) are all market-wide.

> **Diversification removes non-systematic risk — not total risk and not
> systematic risk.** "Total risk" is a wrong answer because you can never
> diversify away the systematic part, so total risk falls but never
> disappears. Standard deviation measures **total** risk; beta measures
> **systematic** risk only.

### Why investors are only compensated for systematic risk

Two arguments, and the second is the sharper one.

1. **Non-systematic risk can be diversified away** — random bad news at one
   firm is offset by random good news at another.
2. **Even if some investors are not diversified, asset prices are bid up by
   the demand of those who are.** The deck's example: investors A and B both
   want a stock expected to be worth $40 in a year. A is undiversified and
   will pay $30 (a high required return). B is diversified, so needs a lower
   required return and can pay $35. **The dealer sells to B.** The marginal
   buyer sets the price, and the marginal buyer is diversified.

> **The second argument is the one that actually closes the logic.** "You
> could diversify" does not by itself mean you *are* compensated only for
> systematic risk — someone still has to bid the price up. The answer that
> earns full marks names the diversified marginal investor.

---

## 3. The Capital Asset Pricing Model

```
E(Rᵢ) = R_f + βᵢ [ E(R_m) − R_f ]
```

| Term | Meaning |
|---|---|
| `R_f` | Risk-free rate — uncorrelated with market risk |
| `E(R_m)` | Expected return on the market portfolio, consisting of **all risky assets** |
| `E(R_m) − R_f` | The **market risk premium** |
| `βᵢ` | The asset's **beta** — the expected risk of stock *i* relative to market risk |

Beta readings:

| β | Interpretation |
|---|---|
| 0 | **Not correlated** with market risk |
| < 1 | **Less risky** than the market |
| = 1 | **Equal risk** with the market |
| > 1 | **Riskier** than the market |

**Computing beta is not required in EFB201.** Its value will be given.

### The five assumptions

1. **Market risk is the only systematic risk factor** investors should be
   compensated for.
2. Investors are **price-takers** and **risk-averse**.
3. Investors plan for the **same single investment period**.
4. Investors have **homogeneous expectations**.
5. **The assumptions behind market efficiency apply as well** — no information
   cost, no transaction cost, no limits to arbitrage, no behavioural biases
   (see Topic 5).

> **Assumption 5 is why CAPM and market efficiency are tested together.**
> Every criticism of market efficiency is automatically a criticism of CAPM,
> and every empirical test of one is a joint test of both. If a question asks
> what CAPM assumes and you list only the first four, you have missed the
> connection the unit is built around.

### Worked example (Part C tutorial Q9.1)

| Security | Expected return | Expected SD | Beta |
|---|---|---|---|
| Security 1 | ? | 25% | 1.5 |
| Security 2 | ? | 15% | 1.4 |
| Security 3 | ? | 20% | 1.6 |
| 3-month T-note (risk-free proxy) | 3% | — | 0 |
| ASX 200 (market proxy) | 9% | — | 1.0 |

```
E(R₁) = R_f + β₁ [E(R_m) − R_f]
      = 3% + 1.5 × (9% − 3%)
      = 3% + 1.5 × 6%
      = 3% + 9%
      = 12%
```

Filling in the rest with the same market risk premium of 6%:

```
E(R₂) = 3% + 1.4 × 6% = 3% + 8.4% = 11.4%
E(R₃) = 3% + 1.6 × 6% = 3% + 9.6% = 12.6%
```

**Q9.2 — highest total risk?** **Security 1**, because its expected **standard
deviation** (25%) is the highest. Total risk is measured by standard deviation
or variance.

**Q9.3 — least market risk?** The **T-note**, because its **beta is zero** —
the lowest relative exposure to the market. Among the three risky securities
it would be Security 2 (β = 1.4), but the T-note is in the table and beats
them all.

> **Standard deviation ranks total risk; beta ranks market risk. They can
> disagree, and here they do.** Security 3 has the highest beta (1.6) but only
> the second-highest standard deviation (20%). Security 1 has the highest
> standard deviation (25%) but not the highest beta. Read which risk the
> question asks for. Answering "Security 3" to Q9.2 because it has the biggest
> beta is the marked-wrong response.

> **The market risk premium is `E(R_m) − R_f`, not `E(R_m)`.** Using 9% rather
> than 6% gives `3% + 1.5 × 9% = 16.5%` — plausible-looking and wrong.
> Subtract the risk-free rate first, every time.

### Three statements the tutorial marks false

**"The average beta of all assets in the market is less than 0."** — **False.**
The average beta of assets in the market is the market's correlation with
itself and equals **1**.

**"An asset with a beta of −0.5 is likely to have an expected return higher
than an asset with a beta of 0.5."** — **False.** A beta of −0.5 means *lower*
exposure to market risk than +0.5, so it earns *less* compensation. Check it
with the tutorial's own numbers:

```
β = +0.5 :  E(R) = 3% + 0.5 × 6% = 6.0%
β = −0.5 :  E(R) = 3% − 0.5 × 6% = 0.0%
```

**"CAPM can price both systematic and non-systematic risk, but only systematic
risk is priced correctly."** — **False.** CAPM prices **only** systematic risk,
and **not always correctly**.

> **Negative beta lowers the expected return below the risk-free rate — it
> does not raise it.** A negative-beta asset pays off when the market falls,
> which is exactly what a risk-averse investor wants, so they accept a lower
> return for holding it. "Higher beta = higher return" runs in both
> directions, including through zero and below.

### The risk-free asset in a portfolio

Part C tutorial Q3: for a risk-averse investor, combining a risk-free asset
with a risky asset gives a better risk–return trade-off than either alone
because the correlation between them is **0.0**.

> **The risk-free asset has a *constant* return, so its correlation with
> anything is zero — not −1.** Zero variance means zero covariance means zero
> correlation. Answering −1.0 (which would be the *maximum* diversification
> benefit) is the standard trap, and it is impossible for a risk-free asset by
> construction.

### The market portfolio

Part C tutorial Q4: the market portfolio in CAPM consists of **all risky
assets** — not "all tradable assets", not "all investable assets", not "all
risky *and* tradable assets".

---

## 4. Challenges in estimating CAPM parameters

Three decisions have to be made before you can put a number in the formula,
and none of them has an obvious right answer.

| Parameter | The decision |
|---|---|
| **Beta** | Over what period do you estimate it — two weeks, five months, ten years? |
| **Risk-free rate** | Treasury note or Treasury bond? Which country's? |
| **Market return** | Which index best represents the true market portfolio — **if the true market portfolio is observable at all?** |

Plus a structural limitation:

> **CAPM is forward-looking but we estimate it from historical data.** The
> model asks for the *expected* return on the market and the *expected* risk
> of the asset. Everything we can measure is backward-looking. This one
> sentence answers a large family of "what are the limitations of CAPM"
> questions.

The market-portfolio problem is worth a sentence of its own: CAPM's market
portfolio is *all risky assets* — every listed and unlisted share, every bond,
every property, every private business, human capital. No index observes that.
The ASX 200 is a proxy for a proxy.

### Q9.4 — why might your colleague's estimate exceed CAPM's?

The tutorial gives three plausible explanations, and they are worth learning
as a template answer for any "explain the discrepancy" question:

1. **CAPM only considers market risk** as the systematic risk factor and
   therefore fails to capture other systematic risks. The colleague may be
   using a **multi-factor model** that captures all the priced systematic risks.
2. **CAPM has correctly captured all public information** about systematic
   risk but has **not captured private knowledge** the colleague has, which
   points to a higher fair price. On this reading CAPM has **undervalued**
   Security 1.
3. The **ASX 200 understates the true level of market risk** — a proxy
   problem, which biases `E(R_m) − R_f` downwards.

> **All three explanations blame the *model or its inputs*, never "the market
> is wrong".** That is deliberate. A discrepancy between a model estimate and
> another estimate is evidence about the models, not proof about the world —
> which is exactly the joint-hypothesis problem in Topic 5. Structure your
> answer as: missing risk factors / missing information / bad proxy.

---

## 5. What CAPM is used for

Two applications, and they are the same equation read from two directions.

| User | Use |
|---|---|
| **A company's financial manager**, deciding the present value of a project's future cash flows | CAPM estimates the **cost of equity** for a given period — the average return required by investors who supply external equity funding |
| **An investor in equity markets** | CAPM estimates what the market (the average investor) thinks the **stock price should be** for a given period |

The link back to Part B: the required rate of return you plug into a
discounted cash flow model has to come from somewhere. For a bond it is the
market yield on comparable bonds. For equity it is CAPM.

And the link forward to Topic 5: CAPM is the pricing model used to compute
excess returns when testing market efficiency.

```
Excess return = Historical return − estimated exposure to systematic risk factors
                                    ↑ this is what CAPM supplies
```

<details><summary>Checkpoint — risk and CAPM</summary>

1. The risk-free rate is 4%, the expected market return is 10%, and a stock
   has beta 0.8. What is its expected return? What if beta were 1.4?
2. A stock has a standard deviation of 30% and a beta of 0.6. Another has a
   standard deviation of 18% and a beta of 1.3. Which has more total risk?
   Which has more market risk?
3. Your CAPM estimate for a stock is 11% but the stock has historically
   returned 15%. Give three explanations that do not require the market to be
   irrational.

**Answers**

1. Market risk premium `= 10% − 4% = 6%`. `E(R) = 4% + 0.8 × 6% = **8.8%**`.
   With beta 1.4: `4% + 1.4 × 6% = **12.4%**`.
2. **Total risk: the first** (SD 30% > 18%). **Market risk: the second**
   (β 1.3 > 0.6). The two measures rank them oppositely, which is the point of
   the question.
3. (i) CAPM omits systematic risk factors other than market risk, so the true
   required return is above 11%. (ii) The market index used as a proxy
   understates true market risk, biasing the estimate down. (iii) The historic
   period contains realised outcomes that differ from expectations — CAPM is
   forward-looking and 15% is backward-looking. A fourth: transaction costs
   mean the apparent 4% gap was never capturable.

</details>

---

## Summary

- Required return = risk-free benchmark + risk premium. The premium is the
  spread.
- Bond DCF assumes **hold to maturity, no default, and reinvestment at the
  required rate**. Violations produce liquidity, credit and interest rate
  risk. **Reinvestment is at the required rate, not the coupon rate.**
- Sample statistics use the `T − 1` divisor. Their values will be given.
- **Systematic risk** = market-wide, non-diversifiable, priced. **Non-systematic
  risk** = firm or industry specific, diversifiable, not priced.
- **Standard deviation = total risk. Beta = systematic risk.** They can rank
  assets differently.
- Investors are compensated only for systematic risk because the **diversified
  marginal investor** sets the price.
- `E(Rᵢ) = R_f + βᵢ [E(R_m) − R_f]`. The market risk premium is the
  **difference**, and the average beta of all assets is **1**.
- Negative beta ⇒ expected return **below** the risk-free rate.
- The risk-free asset's correlation with anything is **0**.
- The market portfolio is **all risky assets** — and is not observable.
- CAPM's problems: choice of estimation window, choice of `R_f` proxy, choice
  of market proxy, and the fact that it is forward-looking but estimated
  backwards.
- Uses: **cost of equity** for a manager, **fair price** for an investor, and
  the **benchmark return** for testing market efficiency.
