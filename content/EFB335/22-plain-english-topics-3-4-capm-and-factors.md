# Plain English — Topics 3–4: CAPM and Factor Models

[← Start here](#/EFB335/20-plain-english-start-here) · Full notes:
[Topic 3](#/EFB335/04-topic-3-capital-market-theory-and-capm) ·
[Topic 4](#/EFB335/05-topic-4-apt-and-multifactor-models)

## The One-Sentence Version

**You only get paid for risk you can't diversify away, and beta measures
how much of that risk an investment carries.** Topic 4 says the same
thing with several risks instead of one.

## The Picture

A café owner pays you rent on your shop. If you rent to *ten* cafés in
different suburbs, one going bust barely matters, so nobody will pay
you extra for that risk. You can just spread it. But if the whole
economy turns, every café struggles at once. **That** risk you're stuck
with, and it's the only one the market pays you for. Beta is the
measure of how hard an investment gets hit when the whole economy turns.

## The Words You Need

| Term | Plain meaning |
|---|---|
| **Market portfolio (M)** | Everything risky, held in proportion to its size. In practice, a big index like the ASX 200 |
| **Capital market line (CML)** | Mix the risk-free asset with M. The straight line of the best possible risk/return combinations, using **total risk σ**. *On the formula sheet* |
| **Beta (β)** | Sensitivity to the market. β = Cov(i, m) ÷ Var(m) |
| **CAPM / security market line (SML)** | E(R) = Rf + β × (Rm − Rf). Required return for **any** asset, using **beta**. *Not on the sheet: memorise it* |
| **Market risk premium** | Rm − Rf. The extra return the whole market pays over risk-free |
| **Undervalued / overvalued** | Expected return above the SML = cheap (buy). Below = expensive (sell) |
| **Alpha** | Expected (or actual) return minus the CAPM's required return |
| **APT** | Expected return explained by *several* risk factors, each with its own premium |
| **Fama–French** | A three-factor model: the market, small vs big firms (SMB), cheap vs expensive firms (HML) |

## How It Works, Step by Step

**1. The CML (efficient portfolios only).** Rf = 3%, the market returns
9% with σ = 15%. You want a portfolio with σ = 10%.

```
E(Rp) = Rf + σp × (Rm − Rf) / σm
      = 3 + 10 × (9 − 3) / 15 = 3 + 4 = 7%
```

You'd hold 10/15 = 67% in the market and 33% in risk-free.

**2. Why we need beta instead of σ.** The CML only works for portfolios
that are already fully diversified. A single share has lots of risk
that diversification would remove, and the market won't pay for that.
So for individual shares we measure only the part that moves with the
market: **beta**.

```
β = Cov(i, m) / Var(m)        e.g. Cov = 0.03, Var(m) = 0.0225 → β = 1.33
```

**3. The CAPM.** Rf = 3%, Rm = 9%, so the market risk premium is 6%. A
share has β = 1.3.

```
Required return = 3 + 1.3 × 6 = 3 + 7.8 = 10.8%
```

**4. Spotting a bargain.** An analyst expects that share to return 12%.

```
Alpha = 12 − 10.8 = +1.2%   → it sits ABOVE the SML → undervalued → buy
```

If the analyst expected 9%, alpha = −1.8%: below the line, overvalued.

**5. Topic 4, the same idea with more risks.** The APT says a share's
return depends on several economy-wide factors. Each factor has a
**sensitivity (b)** and a **premium (λ)**. Say Rf = 3%, sensitivity to
GDP surprises is 1.2 with a 2% premium, and sensitivity to inflation
surprises is 0.5 with a 1% premium.

```
E(R) = 3 + 1.2(2) + 0.5(1) = 3 + 2.4 + 0.5 = 5.9%
```

The CAPM is just the special case with one factor, the market.

**6. Where the factors come from.** Three ways, and the exam may ask
you to name them:
- **Macroeconomic:** you choose real-economy factors (GDP, inflation, interest rates). The Topic 4 CPI/GDP workbook.
- **Microeconomic (Fama–French):** factors built from company traits: market, size (SMB), value (HML).
- **Statistical (PCA):** let the data find the factors. Good fit, but the factors have no obvious meaning.

## How the Exam Asks It

**Sample Q2** gives Rf = 2% and Rm = 8% and asks for required returns
at two betas, then whether each share is fairly priced. Shape:

> 1. Market risk premium = Rm − Rf.
> 2. Required return = Rf + β × premium, for each share.
> 3. Compare with the expected return: above the line is undervalued
>    (buy), below is overvalued (sell). State the alpha.

Written version, *"Why does the CAPM use beta and not standard deviation?"*:

> Standard deviation measures total risk, but investors can diversify
> away the firm-specific part at no cost, so the market doesn't reward
> it. Only systematic risk, the part that moves with the market,
> attracts a premium. Beta measures exactly that, so the CAPM prices
> assets on beta.

## Say It Back

<details><summary>1. What's the difference between the CML and the SML?</summary>

The CML uses **total risk (σ)** and only applies to efficient,
fully diversified portfolios. The SML (CAPM) uses **beta** and applies
to any asset, including single shares.
</details>

<details><summary>2. Rf = 4%, Rm = 10%, β = 0.5. Required return?</summary>

4 + 0.5 × 6 = **7%**.
</details>

<details><summary>3. A share's expected return is below the SML. What does that mean?</summary>

It's overvalued: its price is too high for the return it offers given
its beta. Negative alpha. Sell or avoid.
</details>

<details><summary>4. What are the three Fama–French factors?</summary>

The market, size (small minus big, SMB) and value (high minus low
book-to-market, HML).
</details>

<details><summary>5. Which is on the official formula sheet: the CML or the CAPM?</summary>

The **CML** is on the sheet. The **CAPM is not**, so memorise
E(R) = Rf + β(Rm − Rf). (It's hidden inside Jensen's alpha on the sheet
if you blank.)
</details>
