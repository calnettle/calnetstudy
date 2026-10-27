# Plain English — Topics 1–2: Return, Risk and Mixing Assets

[← Start here](#/EFB335/20-plain-english-start-here) · Full notes:
[Topic 1](#/EFB335/01-topic-1-investment-background) ·
[Topic 2](#/EFB335/02-topic-2-portfolio-management) ·
[Topic 2b utility](#/EFB335/03-topic-2-utility-and-strategy)

## The One-Sentence Version

**Return is what you made, risk is how much it bounced around, and
mixing assets that don't move together lowers the bounce without
lowering the return.**

## The Picture

Think of two umbrella-and-sunscreen shops. The umbrella shop does well
when it rains, the sunscreen shop when it's sunny. Own just one and
your income swings with the weather. Own both and the bad days of one
are the good days of the other. Your average income is the same, but
it's far smoother. **That smoothing is diversification**, and it's the
most important idea in the unit.

## The Words You Need

| Term | Plain meaning |
|---|---|
| **Holding period return (HPR)** | What you ended with ÷ what you started with. 1.14 means you finished with 1.14 times your money |
| **Holding period yield (HPY)** | HPR − 1, the return as a percentage. 1.14 → 14%. With a dividend: (P₁ − P₀ + D) ÷ P₀ |
| **Arithmetic mean** | The simple average of yearly returns. Good for "what's a typical year?" |
| **Geometric mean** | The average that actually compounds to your real result. Always ≤ arithmetic. Use it for "how did my money really grow?" |
| **Expected return E(R)** | The probability-weighted average of the possible returns |
| **Standard deviation (σ)** | How far returns typically land from the average. The unit's main measure of risk |
| **Covariance / correlation (ρ)** | Whether two assets move together. ρ runs from −1 (opposite) through 0 (unrelated) to +1 (in lockstep) |
| **Diversification** | Holding several assets so their ups and downs partly cancel |
| **Margin** | Borrowing from your broker to buy more shares. Bigger gains, bigger losses, and a margin call if prices fall too far |
| **Utility, U = E(r) − ½Aσ²** | A score for how much an investor *likes* an investment. Return is good, risk is bad, and A is how much this person hates risk |

## How It Works, Step by Step

**1. Measuring return.** Buy a share for $50, receive a $2 dividend,
sell for $55.

```
HPR = ending value / beginning value = (55 + 2) / 50 = 1.14
HPY = HPR − 1 = 0.14 = 14%          or directly: (55 − 50 + 2) / 50 = 14%
```

Over several years, annualise with the root: annual HPR = HPR^(1/n),
annual HPY = HPR^(1/n) − 1.

**2. Why the two averages differ.** Your $100 goes up 50% to $150, then
down 50% to $75.

```
Arithmetic mean = (+50% − 50%) / 2 = 0%           sounds like you broke even
Geometric mean  = (1.5 × 0.5)^(1/2) − 1 = −13.4%  you actually lost money
```

The geometric mean tells the truth about growth. That's the trap.

**3. Expected return and risk from scenarios.**

| Economy | Probability | Return |
|---|---|---|
| Boom | 0.25 | 30% |
| Normal | 0.50 | 12% |
| Bust | 0.25 | −10% |

```
E(R) = 0.25(30) + 0.50(12) + 0.25(−10) = 7.5 + 6 − 2.5 = 11%

Variance = 0.25(30 − 11)² + 0.50(12 − 11)² + 0.25(−10 − 11)²
         = 90.25 + 0.5 + 110.25 = 201        σ = √201 = 14.2%
```

In words: you expect 11%, and a typical year lands about 14 points
either side of that.

**4. Mixing two assets (the payoff of the whole topic).** 60% in shares
(E = 10%, σ = 20%) and 40% in bonds (E = 5%, σ = 8%), correlation 0.2.

```
E(Rp) = 0.6(10) + 0.4(5) = 8%                     return is just the weighted average

σp² = w₁²σ₁² + w₂²σ₂² + 2·w₁·w₂·ρ·σ₁·σ₂
    = 0.36(400) + 0.16(64) + 2(0.6)(0.4)(0.2)(20)(8)
    = 144 + 10.24 + 15.36 = 169.6              σp = 13.0%
```

The weighted average of the two σs would be 0.6(20) + 0.4(8) = 15.2%.
**The mix is only 13.0%.** Same return, less risk. That gap is the free
lunch of diversification, and it gets bigger the lower the correlation.
At ρ = +1 there's no benefit at all.

**5. Two kinds of risk.** Add more and more shares and the risk falls,
then flattens out. What disappears is **unsystematic risk** (one
company's bad news). What's left is **systematic risk** (recessions,
interest rates), which hits everything and can't be diversified away.
Hold onto this: it's the whole reason the CAPM in Topic 3 exists.

**6. Choosing between portfolios with utility.** Investor with A = 4 is
offered shares with E = 10% and σ = 20%, or cash at 3%.

```
U(shares) = 0.10 − 0.5 × 4 × 0.20² = 0.10 − 0.08 = 0.02
U(cash)   = 0.03 − 0 = 0.03
```

Cash wins for this person, even though shares return more, because
they dislike risk that much. A braver investor (A = 1) gets
U = 0.10 − 0.02 = 0.08 from shares and picks them. **Same investment,
different person, different answer.**

**7. Margin in one line.** Buy 100 shares at $100 ($10,000) with $6,000
of your own and $4,000 borrowed. The maintenance margin is 30%. You
get a margin call when your equity falls to 30% of the value:

```
(100P − 4,000) / 100P = 0.30   →   P = 4,000 / 70 = $57.14
```

## The Jargon to Learn

The plain English above is there to help you *understand* it. **The
marks go to the proper terms**, so learn every one of these: the term,
what it means, and a sentence that uses it the way a marker wants to
read it. Cover the right two columns and test yourself.

| Term | What it means | Say it like this in the exam |
|---|---|---|
| **Holding period return (HPR) / yield (HPY)** | HPR = ending ÷ beginning value; HPY = HPR − 1 | "The HPY of 14% includes both the capital gain and the dividend yield." |
| **Arithmetic vs geometric mean** | Simple average vs the compounded average | "The geometric mean is the better measure of past performance because it reflects compounding; the arithmetic mean is an unbiased estimate of a single future period's return." |
| **Expected return, E(R)** | Probability-weighted average return | "E(R) is the sum of each outcome's return weighted by its probability." |
| **Variance / standard deviation (σ)** | Spread of returns around the mean; σ is the square root of variance | "Standard deviation measures total risk, the dispersion of returns around the expected return." |
| **Coefficient of variation (CV)** | σ ÷ E(R): risk per unit of return | "Asset A has the lower CV, so it offers less risk per unit of expected return." |
| **Covariance / correlation coefficient (ρ)** | Whether two returns move together; ρ is covariance scaled to −1…+1 | "Because the correlation is less than +1, combining the assets reduces portfolio standard deviation." |
| **Systematic (market, non-diversifiable) risk** | Economy-wide risk that hits everything | "Systematic risk cannot be diversified away and is the only risk rewarded with a premium." |
| **Unsystematic (idiosyncratic, diversifiable) risk** | Firm-specific risk | "Unsystematic risk is eliminated in a well-diversified portfolio." |
| **Efficient frontier** | The set of portfolios with the highest return for each level of risk | "A rational investor only holds portfolios on the efficient frontier; anything below it is dominated." |
| **Minimum-variance portfolio** | The mix of the assets with the lowest possible risk | "The minimum-variance portfolio is the left-most point of the efficient frontier." |
| **Risk aversion coefficient (A) and utility** | A measures dislike of risk; U = E(r) − ½Aσ² scores a portfolio | "A more risk-averse investor (higher A) applies a larger penalty to variance, so prefers lower-risk portfolios." |
| **Initial margin / maintenance margin / margin call** | Your own share of the purchase / the minimum equity allowed / the demand to top up | "If the equity falls below the maintenance margin, the investor receives a margin call to deposit more funds." |
| **Short selling** | Selling borrowed shares, hoping to buy back cheaper | "A short seller profits when the price falls and faces theoretically unlimited loss if it rises." |

## How the Exam Asks It

Topics 1–2 carried no question of their own in the sample, but they
appear inside others: **Q8(b)** weights a portfolio and averages its
beta and return the same way you averaged returns above. And every
Topic 10 measure is "return ÷ risk" built from these pieces.

Typical short answer, *"Explain the benefit of diversification"*:

> Combining assets whose returns are not perfectly correlated reduces
> portfolio risk below the weighted average of the individual risks,
> while expected return stays the weighted average. The lower the
> correlation, the bigger the reduction. Diversification removes
> unsystematic (firm-specific) risk but cannot remove systematic
> (market) risk, so beyond about 20–30 shares the benefit levels off.

## Say It Back

<details><summary>1. Why is the geometric mean always lower than (or equal to) the arithmetic mean?</summary>

Because losses hurt more than equal-sized gains help. Down 50% needs up
100% to get back. The geometric mean captures that compounding; the
simple average ignores it. They're equal only if every year's return
is the same.
</details>

<details><summary>2. Two assets have a correlation of +1. What does mixing them do to risk?</summary>

Nothing useful. Portfolio σ is just the weighted average of the two
σs. Diversification only helps when correlation is below +1.
</details>

<details><summary>3. What kind of risk can diversification remove, and what kind can't it?</summary>

It removes unsystematic (firm-specific) risk. It can't remove
systematic (market-wide) risk.
</details>

<details><summary>4. In U = E(r) − ½Aσ², what does a bigger A mean?</summary>

The investor dislikes risk more, so each unit of variance costs them
more utility. They'll choose safer portfolios.
</details>

<details><summary>5. A share goes from $20 to $23 and pays $1 of dividends. HPR and HPY?</summary>

HPR = (23 + 1) / 20 = **1.20**. HPY = 1.20 − 1 = **20%**.
</details>
