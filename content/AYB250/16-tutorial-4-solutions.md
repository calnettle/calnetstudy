# Tutorial 4 Solutions — Investment Fundamentals

Worked solutions for `AYB250 Tutorial Questions Topic 4.docx`, checked
against the unit's answer slides (`AYB250 Topic 4 Tutorial Slides.pptx`).
Topic notes: 06 (asset classes and investments) and 07 (risk, return and
portfolio theory).

The slides contain **two questions that aren't on the Word question sheet**
(the Buffett diversification discussion and the risk-tolerance question) —
both are included below, numbered as the slides number them. Every figure
was recomputed in Python; the slides' arithmetic all checks out, with one
small rounding note flagged at Question 1.

*(Housekeeping: the tutorial slide deck's title page says "Semester 2,
2025" — a recycled-deck artefact; the content matches the 2026 unit.)*

## Question 1 — term deposit and the real gain

$75,000 in a 1-year term deposit at 6.5%; inflation 2.75%.

**Repayment at maturity:**

```
Interest = 75 000 × 0.065 = $4 875
Repaid   = 75 000 + 4 875 = $79 875
```

**Real gain in today's prices:**

```
Real rate = (1 + nominal)/(1 + inflation) − 1
          = 1.065 / 1.0275 − 1 = 3.65%  (exact 3.6496%)

Real gain = 75 000 × 0.0365 = $2 737.50
```

Verified — matches the answer slide.

> **The nominal gain is $4,875 but the real gain is only $2,737.50 —
> inflation ate 44% of the return before tax even enters.** (Rounding
> note: using the unrounded 3.6496% gives $2,737.23; the slide's $2,737.50
> comes from rounding the rate to 3.65% first. Either is acceptable —
> state your rounding.) Also resist `6.5% − 2.75% = 3.75%`: the ratio
> form gives 3.65%, and the ratio form is the formula.

## Question 2 — pricing a commercial bill

90-day bill, face value $100,000, yield 6.6%.

A bill is a discount security — pay the price now, receive face value at
maturity. Discount the face value back at the yield for 90/365 of a year
(simple interest, note 03's 365-day convention):

```
                Face value                100 000
Price = ------------------------- = ---------------------
         1 + (yield × days/365)     1 + (0.066 × 90/365)

      = 100 000 / 1.0162740
      = $98 398.66   (the slide rounds to $98 399)
```

Verified.

> **Check the direction: price below face, always.** If your bill price
> comes out above $100,000, the discounting went the wrong way. And the
> day-count is 90/365 — annualising conventions from note 06's yield
> formula apply here in reverse.

## Question 3 — portfolio expected return (and why risk differs)

| | Apples | Oranges |
|---|---|---|
| Expected return | 8% | 12% |
| Standard deviation | 4% | 7% |
| % of portfolio | 60% | 40% |

**(a) Expected return of the portfolio:**

```
E(R) = 0.60 × 8% + 0.40 × 12% = 4.8% + 4.8% = 9.6%
```

Verified.

**(b) Why can't portfolio risk be the weighted average of the two SDs?**
Because risk depends on the **correlation** between the two funds'
returns. Unless they are perfectly positively correlated (+1), part of
each fund's movement offsets the other's, pulling portfolio risk *below*
the weighted average (0.6 × 4 + 0.4 × 7 = 5.2% would be the ceiling, hit
only at correlation +1). The lower the correlation — and two random funds
typically sit around +0.5 to +0.7 — the bigger the reduction. That gap is
the diversification benefit (note 07).

## Question 4 — Sharpe ratios

| | Fund A | Fund B |
|---|---|---|
| Unit price, start of year | $6.54 | $2.25 |
| Unit price, end of year | $7.18 | $2.75 |
| Standard deviation | 0.76 | 0.98 |
| Risk-free rate | 3.50% | 3.50% |

**(a) First the returns** (percentage change in unit price), **then the
ratio:**

```
Return A = (7.18 − 6.54) / 6.54 = 9.79%
Return B = (2.75 − 2.25) / 2.25 = 22.22%

         Rp − Rf
S    =  ---------
           σp

S(A) = (0.0979 − 0.035) / 0.76 = 0.0828  →  8.28%
S(B) = (0.2222 − 0.035) / 0.98 = 0.1910  →  19.1%
```

Verified — matches the slides.

**(b) Explaining the difference to an investor:** standard deviation
measures each fund's risk — Fund B (0.98) is the riskier fund. The Sharpe
ratio adjusts the return for that volatility: it shows the excess return
earned *per unit of risk taken*. Fund B earned 22.2% raw, which the risk
adjustment brings down to 19.1% — still well above Fund A's 8.28%. So
Fund B didn't just earn more; it earned more **even after accounting for
its higher risk**.

**(c) Which fund?** Fund B — the higher risk-adjusted return. (A complete
answer adds: provided the investor's risk profile tolerates the higher
volatility, and past Sharpe ratios don't guarantee future ones.)

> **Compute the return before the ratio — the prices are not returns.**
> And keep the units straight: with returns as decimals and the SD as
> given (0.76), the ratio is 0.0828, which the unit quotes as a percentage
> (× 100). Consistency matters more than the convention — using
> percentages top *and* bottom gives the same 8.28.

## Question 5 (slides only) — Buffett on diversification

*"Diversification is a protection against ignorance. It makes very little
sense for those who know what they're doing."* — identify disadvantages of
diversification.

From the answer slide, expanded:

- **It can limit returns** — winners are diluted by everything else in the
  portfolio (Buffett's point: if you *can* pick winners, spreading money
  away from them costs you).
- **More complicated** — more holdings to research, monitor and rebalance.
- **Increased transaction costs** — every extra holding is brokerage and
  spread.
- **More opportunity for irrational behaviour** — more positions means
  more chances to trade on impulse (note 07's behavioural biases).
- …but the slide's last word: it is **still very useful for reducing
  risk** — for investors who *don't* have Buffett's information edge,
  which is nearly everyone, the non-systematic risk reduction is close to
  free.

## Question 6 — what the P/E tells you

The P/E ratio (price ÷ EPS) shows **how many dollars investors will pay
for each dollar of current earnings** — how the market is pricing the
company relative to what it currently earns (note 06).

**Why buy at a high P/E?** From the answer slide:

- **Growth strategy** — the buyer believes earnings will increase, so
  today's price over tomorrow's earnings is cheaper than it looks
- **P/E expected to fall over time** as earnings catch up to price
- **Herding** — buying because everyone else is (a behavioural, not
  fundamental, reason — and the warning sign in Question 10)

## Question 7 — CAPM: Camel and Lion

Camel β = 0.8, Lion β = 1.3, risk-free rate 5%, market risk premium 4%.

```
Ri = Rf + βi (Rm − Rf)

Camel: 0.05 + 0.8 × 0.04 = 8.2%
Lion:  0.05 + 1.3 × 0.04 = 10.2%
```

Verified. The difference is entirely beta: Lion carries 1.3× the market's
systematic risk, so investors require a larger premium above the risk-free
rate. (Beta = a share's risk relative to the whole market, where the
market is 1 — note 07.)

> **"Market risk premium is 4%" means (Rm − Rf) = 4% — don't subtract the
> risk-free rate again.** If the question instead gave a market *return*
> of 4%… the premium would be negative. Read which one you've been given;
> the slides use "equity risk premium" and "risk premium" interchangeably
> for the same 4%.

## Question 8 — reading a fund's asset mix

A managed fund holds: cash/fixed interest $60m, property $15m, shares $25m
(total $100m).

```
Defensive assets:  60/100 = 60%
Growth assets:     (15 + 25)/100 = 40%
```

A 60/40 defensive/growth mix maps to the **conservative** investor
classification (note 07's table: income somewhat unstable, tolerates no
more than a ~5% capital decline, 2–4 year timeframe). The fund would suit
risk-averse investors focused on capital preservation with modest growth.

**Long-term real return objective** (the slides pose this as discussion):
with 60% in low-returning defensive assets, expect a modest premium over
inflation — conservative funds typically target roughly **CPI + 1–2%**
over rolling periods, versus CPI + 3%+ for growth-oriented funds. The
point being tested: the *mix* determines the achievable objective, not the
other way around.

## Question 9 (slides only) — risk tolerance

**Main determinants** (note 07):

- **Age** — younger investors are more tolerant of financial risk
- **Income** — higher income absorbs potential losses more easily
- **Wealth** — likewise
- **Years to retirement** — the closer, the less time to recover, the
  lower the tolerance
- **Past financial experiences** — past gains breed optimism; past losses
  breed caution

Risk tolerance is a psychological trait, shaped by these environmental
influences.

**Its role in asset allocation:** tolerance is one of the three inputs to
the risk profile (with risk *required* and risk *capacity*), and the
profile determines where on the defensive-to-growth spectrum the client's
portfolio sits — the five-way classification table in note 07 is exactly
that mapping. A portfolio the client can't psychologically hold through a
downturn will be abandoned at the bottom, which converts paper losses into
real ones.

## Question 10 — Slick Oil: name the behaviour

Max hears James and Simon turned 25 cents into $30 per share, and says
"That's for me, I'll buy some!" James: still rising, no dividend yet but
one is "sure" to come. Simon: P/E ≈ 120 but "you don't need to worry about
earnings in the short term — it's a growth stock."

**(a) Max:** **herding** (buying because his friends did) and **biased
judgement** (assuming the past 120× rise implies future rises).

**(b) James and Simon:** **overconfidence** (certain a distribution is
coming; dismissing a P/E of 120 as irrelevant) and **biased judgement**
("growth stocks don't need earnings").

**(c) Advice to the three:**

- Past performance is not indicative of future returns — the gain from
  $0.25 to $30 is history, not evidence about the *next* dollar invested.
- A P/E of about 120 means the market is paying $120 per $1 of current
  earnings — the price already assumes extraordinary growth. Any earnings
  disappointment is priced for a hard fall. Compare it against similar
  companies (note 06).
- No dividend has ever been paid; the "sure" distribution is speculation,
  so the entire return case rests on further price rises.
- Diversify: for Max, a single speculative stock is a concentrated,
  non-systematic bet a 10–30 stock portfolio would dilute (note 07); for
  James and Simon, who hold large unrealised gains, consider realising or
  spreading some of it rather than letting one holding dominate.
- Match any purchase to a risk profile — this stock only suits the
  aggressive end, in a small allocation.

## Checkpoint

<details><summary>Questions</summary>

1. A 180-day bill with a $500,000 face value is priced to yield 5.9%. What
   is the price?
2. A portfolio is 30% cash (E(R) 4%), 30% bonds (E(R) 5%), 40% shares
   (E(R) 9%). Expected portfolio return?
3. Fund X returns 15% with SD 1.2; Fund Y returns 10% with SD 0.5;
   risk-free rate 4%. Which fund per the Sharpe ratio?
4. β = 0.9, risk-free rate 4.5%, market **return** 9.5%. Required return?

</details>

<details><summary>Answers</summary>

1. ```
   Price = 500 000 / [1 + 0.059 × 180/365] = 500 000 / 1.029096
         = $485 863.37
   ```
2. `0.3 × 4 + 0.3 × 5 + 0.4 × 9 = 1.2 + 1.5 + 3.6 = 6.3%`
3. ```
   X: (0.15 − 0.04)/1.2 = 0.0917
   Y: (0.10 − 0.04)/0.5 = 0.1200   → Fund Y wins risk-adjusted
   ```
4. This one gives the market **return**, so subtract first:
   ```
   premium = 9.5 − 4.5 = 5%
   Ri = 4.5 + 0.9 × 5 = 9.0%
   ```

</details>
