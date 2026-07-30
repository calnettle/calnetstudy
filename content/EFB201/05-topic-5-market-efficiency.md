# Topic 5 — Market Efficiency

**Reference:** Kidwell et al. chapter 1; Ang, Goetzmann & Schaefer (2011),
*Efficient Market Theory and Evidence*.

This is the most heavily examined topic in the unit by question count — the
tutorial alone runs to 23 multiple-choice questions. Almost all of them turn
on three things: the **definition** of efficiency, the **three forms** and what
each does and does not rule out, and the **four factors** that impede
efficiency. The one calculation is a short-sale margin account.

---

## 1. What an efficient market means

> **In an efficient financial market, at all times, the market price of a
> security reflects all available information about its fundamental value.**

Terminology, because the exam swaps synonyms:

| Term | Synonyms |
|---|---|
| **Market price** | Market value |
| **Fundamental value** | Intrinsic value, fair price, fair value |

When market price deviates from fundamental value, that is **mispricing**.

```
Market value − Fundamental value  =  0   →  efficient
Market value − Fundamental value  ≠  0   →  mispricing

    > 0   →  OVERPRICED
    < 0   →  UNDERPRICED
```

> **Get the sign convention the right way round, because half the tutorial
> depends on it.** *Market above fundamental = overpriced.* So the intrinsic
> value of an **underpriced** asset is **greater than** its market price, and
> the intrinsic value of an **overpriced** asset is **less than** its market
> price. Both appear as separate questions and both are answered by that one
> line.

### Why should prices reflect information?

**Because of competition and free entry.** If investors have new information
letting them predict prices will rise tomorrow, they all try to buy today —
and prices rise today until they reflect that information.

Exploiting mispricing is profitable, and **when mispricing has been
successfully exploited, market value and fundamental value converge**. The act
of profiting from mispricing is what removes it.

---

## 2. The four assumptions

The deck presents them as a two-column table. Learn it in that shape, because
the tutorial asks "which is **not** an assumption behind…" and the answer is
always one of the right-hand column phrased as if it were normal.

| Enable market efficiency | Impede market efficiency |
|---|---|
| No information cost | **High information cost** |
| No transaction cost | **High transaction cost** |
| No limits to arbitrage | **Limits to arbitrage** |
| Absence of behavioural biases | **Prevalence of behavioural biases** |

**High information cost** — information that is costly to research or process
but potentially valuable when nobody else knows it. Example: a team of
experienced portfolio managers with Bloomberg terminals versus an
inexperienced retail investor reading newspapers.

**High transaction cost** — costs of executing a trading strategy that erode
the potential profit. Examples: broker commissions, the bid–ask spread, price
impact from large trades, and the **time between an order being placed and
executed**.

**Limits to arbitrage** — regulatory restrictions and financing constraints
that prohibit investors from exploiting mispricing. Examples: short selling is
forbidden in some managed funds (US mutual funds) or in certain forms (naked
short selling); short sellers cannot meet deposit requirements because of
financing constraints.

**Behavioural biases** — investors driven by biases that lead to decisions
that do not maximise profit. Examples: herding, overconfidence, confirmation
bias, representativeness bias.

> **"Financing constraints force investors to be cautious about exploiting
> price deviations" is an *impediment*, so it is not an assumption behind
> efficiency.** That is tutorial Q12's answer. The other three options —
> research is free, investors value assets rationally, execution costs are
> negligible — are all assumptions of efficiency, phrased in the positive.

> **A shorter time between order placement and execution means efficiency has
> *increased*.** Execution delay is a transaction cost. Reduce the cost and
> information gets into prices faster. Tutorial Q13.

---

## 3. The three forms

| Form | Past market data (e.g. past returns) | Other public information | Private information |
|---|---|---|---|
| **Weak** | ✓ | | |
| **Semi-strong** | ✓ | ✓ | |
| **Strong** | ✓ | ✓ | ✓ |

They are **nested**: strong implies semi-strong implies weak. What each form
says is *"this category of information is already in the price, so you cannot
profit from it."*

| If markets are… | Trading on past price patterns | Trading on public information (earnings reports) | Trading on inside information |
|---|---|---|---|
| Weak-form efficient | No profit | Profit possible | Profit possible |
| Semi-strong efficient | No profit | No profit | Profit possible |
| Strong-form efficient | No profit | No profit | **No profit** |

> **Strong-form efficiency means insiders *cannot* profit. That surprises
> people every time.** The tutorial's Q6 asks which statement is **not** true,
> and the answer is *"strong-form efficiency implies investors with private
> information will be able to earn trading profits."* Under strong form,
> private information is already in the price, so there is nothing to trade
> on. Weak-form and semi-strong-form efficiency both leave private information
> profitable, which is why those two statements are true.

### Reading the contradiction questions

These are the ones that separate marks, and they all use the same logic: **the
strongest form contradicted is the weakest one that would have to be false.**

- **A senior manager with non-public information consistently earns excess
  profits.** Contradicts **strong form** only. Semi-strong and weak form both
  permit insiders to profit, so neither is violated.
- **An investor consistently profits by following advice on a public
  website.** The advice is public information — that contradicts semi-strong
  form. And because strong form *includes* semi-strong, strong form is
  contradicted too. Answer: **more than one form is contradicted**.
- **Your car-industry share fell because the economy slowed and sales
  declined.** **No form is contradicted.** Prices falling on genuinely bad news
  is exactly what an efficient market does. Losing money is not evidence of
  inefficiency.

> **The website question and the insider question have different answers and
> that is the whole point of asking both.** Private information sits only in
> strong form, so violating it contradicts one form. Public information sits in
> semi-strong *and* strong, so violating it contradicts two. Draw the nesting
> before you answer.

### Implications for market participants

| Participant | What they assume | What they do |
|---|---|---|
| **Technical analysts** | Markets are **weak-form INEFFICIENT** | Analyse past market data (historical prices) looking for recurring patterns to guide decisions |
| **Fundamental analysts** | Markets are **semi-strong INEFFICIENT** | Estimate fundamental value from company data — earnings and sales forecasts, risk estimates, industry and economic data |
| **Passive asset managers** | — | Do not exploit mispricing; mimic indices such as the S&P 500 and deliver market returns |
| **Active asset managers** | Markets are mispriced somewhere | Estimate fundamental value themselves or engage fundamental analysts; **long** underpriced stocks and sell when prices rise, **short** overpriced stocks and buy back when prices fall |

> **Both analyst types assume *in*efficiency — of the form they trade on.** A
> technical analyst who believed markets were weak-form efficient would have no
> job. The tutorial phrases the answers as "technical analysts assume markets
> are weak-form **inefficient**" and "fundamental analysts assume markets are
> **semi-strong-form inefficient** but weak-form efficient." Note the second
> half of that phrasing: a fundamental analyst has no interest in chart
> patterns, so they are content to treat weak form as holding.

> **In a market that is weak-form efficient but semi-strong-form inefficient,
> the winner is the *fundamental* analyst.** Weak-form efficiency kills the
> technical analyst's edge. Semi-strong inefficiency leaves value in public
> information, which is precisely what fundamental analysis processes. Passive
> managers by definition do not try. Tutorial Q17.

---

## 4. Short selling and the short squeeze

The GameStop squeeze is the deck's illustration of **limits to arbitrage**.

### Short selling mechanics

Sell borrowed instruments at the current price, wait for the price to drop,
buy them back cheaper, return them to the lender, and pocket the difference.

The margin definition is **different from a leveraged long**, and this is the
most examinable line in the topic:

```
LEVERAGED LONG:   margin = Equity / Total assets

SHORT SELL:       margin = Equity / Debt
```

Why the difference? Because for a short, **the debt is not cash — it is
shares, and the value of those shares varies over time.**

```
Initial margin     = (Initial sale proceeds + Initial cash deposit − Initial debt) / Initial debt

Maintenance margin = (Initial sale proceeds + Initial cash deposit − Actual debt) / Actual debt
```

At the moment the position is opened, **initial debt = initial sale proceeds**
(you borrowed shares and immediately sold them for exactly that). So the
initial margin simplifies:

```
Initial margin = Initial cash deposit / Initial sale proceeds
```

which is why the share-count calculation looks like the long one.

### Worked example — position sizing (tutorial Q14)

ABC Co trades at $100. You believe it is overpriced and have $10,000. Initial
margin 45%, maintenance margin 30%.

```
Value of shares that can be shorted = $10,000 / 0.45 = $22,222.22
Number of shares                    = $22,222.22 / $100 = 222.2 → 222
```

Answer **b. 222**.

> **The maintenance margin is not used in the sizing calculation.** It appears
> in every version of this question as a plausible number to divide by. 30%
> would give 333 shares — offered as answer c. Use the *initial* margin to
> open a position; the maintenance margin only tells you when the broker calls.

### Why short interest can exceed 100% of shares outstanding

The deck's illustration, and it is a favourite short-answer question:

```
A owns 100 shares and lets his broker lend them to short sellers.
B, a short seller, borrows those 100 shares from A's broker and sells them.
C buys those 100 shares — not knowing they were borrowed — and lets
  his broker lend out 40% of them.
D, another short seller, borrows those 40 shares from C's broker and sells them.

Total short interest = 100 + 40 = 140
Shares actually floating in the market = 100
Short interest = 140% of the float
```

The same physical shares get lent twice. Nothing illegal has happened.

### How a short squeeze happens

```
Price moves UP
  → the loan (debt) increases, because the debt is valued in shares
  → margin = equity/debt falls below the maintenance margin
  → margin call: repurchase shares at the high price using extra cash
  → large repurchases push the price even HIGHER
  → the short seller's position is squeezed tighter still
     (fewer and fewer borrowed shares remaining)
```

Why it is dangerous: it **pushes the price further in the wrong direction**,
and the short seller can **run out of cash before the price moves their way**
— and go bankrupt. A short's loss is theoretically unbounded, because the
price can rise without limit.

### The full worked short — GameStop

Initial cash deposit $2,600; initial margin 50%; maintenance margin 25%.

```
Value of shares that can be borrowed = $2,600 / 0.50 = $5,200
At $26 on 4 Jan: 200 shares borrowed
Initial sale proceeds = 200 × $26 = $5,200
Initial debt          = 200 × $26 = $5,200

Check: (5,200 + 2,600 − 5,200) / 5,200 = 2,600 / 5,200 = 50%  ✓
```

The restoration rule for a short, with proceeds + deposit fixed at $7,800:

```
Equity / Debt = MM
(7,800 − D) / D = 0.25
7,800 = 1.25 D
D = 7,800 / 1.25 = $6,240        ← the debt you must get back down to
Equity after restoration = 7,800 − 6,240 = $1,560   (= 25% of 6,240 ✓)
```

That $6,240 is fixed across the whole table — every margin call buys back
shares until the remaining borrowed position is worth exactly $6,240.

| Date | Price | Shares borrowed | Debt | Equity | Margin | Call? | Cash to repurchase |
|---|---|---|---|---|---|---|---|
| 4 Jan | $26 | 200 | $5,200 | $2,600 | 50% | No | |
| 14 Jan | $49 | 200 | $9,800 | −$2,000 | −20% | **Yes** | $3,560 |
| | $49 | 127 | $6,240 | $1,560 | 25% | | |
| 22 Jan | $75 | 127 | $9,551 | −$1,751 | −18% | **Yes** | $3,311 |
| | $75 | 83 | $6,240 | $1,560 | 25% | | |
| 27 Jan | $470 | 83 | $39,104 | −$31,304 | −80% | **Yes** | $32,864 |
| | $470 | 13 | $6,240 | $1,560 | 25% | | |
| 29 Jan | $400 | 13 | $5,311 | $2,489 | 47% | No | |
| 5 Feb | $100 | 13 | $1,328 | $6,472 | 488% | No | Close out |

Checking one row end to end — 14 January:

```
Debt      = 200 × $49 = $9,800
Equity    = proceeds + deposit − debt = 5,200 + 2,600 − 9,800 = −$2,000
Margin    = −2,000 / 9,800 = −20.4%   →  below 25%, margin call

Restore:  debt must fall to $6,240
          shares remaining = 6,240 / 49 = 127.35   (table shows 127)
          shares repurchased = 200 − 127.35 = 72.65
          cash spent = 72.65 × $49 = $3,560   ✓
```

And the final tally:

```
Gross loss = Equity at closure − Initial equity − Total cash spent repurchasing
           = $6,472 − $2,600 − ($3,560 + $3,311 + $32,864)
           = $6,472 − $2,600 − $39,735
           = −$35,863
```

The price ended at $100 — **below** the $26 the short was opened at — and the
short seller still lost $35,863. That is the entire lesson of the table.

> **A short can be right about direction and still be wiped out.** GameStop
> went from $26 to $100 over the period, so the short "should" have made
> money. It did not, because the squeeze forced repurchases at $49, $75 and
> $470 along the way, permanently crystallising losses. The margin calls did
> the damage, not the final price.

> **Rounded share counts in the table hide non-integer positions.** At $49 the
> table shows 127 shares, but $6,240 / $49 = 127.35, and the $3,560 cash
> figure only reconciles with 127.35. If you rebuild the table with rounded
> integers you will be a few dollars out at every row and about $50 out at the
> end. Carry the decimals and round only for display.

### How the four factors showed up in GameStop

| Factor | In this case |
|---|---|
| **High information cost** | Uncertainty about GameStop's fundamental value; uncertainty about COVID's impact on growth prospects; noise in the market |
| **High transaction cost** | **Robinhood halted buy orders** |
| **Limits to arbitrage** | The squeeze itself — financing constraints on the hedge funds that had shorted GameStop; short interest exceeding the float |
| **Behavioural biases** | Herding, overconfidence, confirmation bias, representativeness bias |

---

## 5. Testing market efficiency

Recall: efficient means `Market value − Fundamental value = 0`. To test
whether a market *was* efficient over a historical period, there are two
approaches.

### Approach 1 — study prices

```
Market value − Fundamental value = ?

  ↓ replace with what is observable

Historical market value − Estimated fundamental value (using all available info) = ?

  ↓ express in returns so different assets are comparable

Historical return − Return expected by average investors during that time = ?

  ↓ the expected return is compensation for systematic risk exposure

EXCESS RETURN = Historical return − estimated exposure to systematic risk factors
```

The models that estimate exposure to systematic risk are **pricing models** or
**factor models**. EFB201 uses **CAPM**, which considers only the market risk
factor (Topic 4).

### Approach 2 — study asset managers

Examine whether **active asset managers actually delivered excess returns**
when there was evidence that excess returns existed.

### The limitations — the joint hypothesis problem

This is the intellectual centre of the topic and it recurs in written answers.

> **Testing efficiency is a *joint* test of market efficiency and the pricing
> model.** You can never test one without the other.

Work through both branches:

```
Excess return ≠ 0   →  Is the market inefficient?
                    →  OR does the model simply fail to capture all systematic risks?

Excess return = 0   →  Is the market efficient?
                    →  OR had investors already traded and corrected the mispricing
                       in a way we cannot observe?
```

Two further limitations the deck raises:

1. The method claims mispricing based on **simulated** returns (actual minus
   estimated), **not on the actions of real-time investors**. So: should a
   non-robust anomaly be read as evidence of efficiency, or as evidence that
   investors traded and corrected it?
2. The method **does not consider transaction costs** incurred in actual
   markets. Findings are suggestive of inefficiency but **do not prove any
   investor actually profited, or even could have profited**. So: should we
   care about market efficiency at all, if the mispricing is not exploitable?

> **The right answer to "we found a mispricing" is almost always "or the model
> is wrong."** Tutorial Q19 asks what could explain a gap between market price
> and estimated fundamental value, and the answer is **all of the above** — the
> market is inefficient, *or* the model overlooks risk factors, *or* financing
> constraints discourage exploitation. Tutorial Q21 asks about a manager who
> fails to profit from a model-identified mispricing, and again the answer is
> **all of the above**. Never pick a single cause when the question offers you
> the joint hypothesis.

> **But when *no* gap is found, the answer narrows.** Tutorial Q20 asks what
> it means to find no difference between market price and estimated
> fundamental value, and the accepted answer is only **(a) the market does not
> violate strong-form efficiency** — not "all of the above". A model that
> "correctly reflects the asset's *individual* risks" is not what a pricing
> model does (it prices systematic risk), and high trading costs would tend to
> produce a *gap*, not eliminate one.

<details><summary>Checkpoint — efficiency</summary>

1. A stock's market price is $40 and your model says fundamental value is $46.
   Is it over- or underpriced? What would an active manager do?
2. Markets are semi-strong-form efficient. Which of these earns excess
   returns: analysing an earnings report, spotting a chart pattern, receiving
   inside information?
3. A researcher finds that small-cap stocks earned 3% a year more than CAPM
   predicted over 30 years. Give two competing interpretations.

**Answers**

1. `Market − Fundamental = 40 − 46 = −6 < 0` ⇒ **underpriced**. An active
   manager takes a **long** position and sells when the price rises to
   fundamental value.
2. Only **inside information**. Semi-strong efficiency prices in all public
   information (killing the earnings-report edge) and, because it nests weak
   form, all past price data (killing the chart pattern). Private information
   is still unpriced.
3. (i) The market is **inefficient** — small caps were systematically
   underpriced. (ii) **CAPM is incomplete** — size is a priced systematic risk
   factor that a single-factor model omits, so the "excess" return is really
   compensation for risk. A third: the 3% may not survive **transaction
   costs**, in which case no investor could have captured it.

</details>

---

## Summary

- Efficient means `market price = fundamental value` **at all times**.
  `Market − Fundamental > 0` is overpriced; `< 0` is underpriced.
- Prices reflect information because of **competition and free entry**.
  Exploiting mispricing is what makes it converge.
- Four impediments: **high information cost, high transaction cost, limits to
  arbitrage, behavioural biases.** Efficiency assumes each is absent.
- Three nested forms: **weak** (past market data), **semi-strong** (+ other
  public information), **strong** (+ private information). Strong form means
  even insiders cannot profit.
- Violating a public-information result contradicts **two** forms; violating a
  private-information result contradicts **one**.
- Technical analysts assume **weak-form inefficiency**; fundamental analysts
  assume **semi-strong inefficiency but weak-form efficiency**.
- **Short margin = equity / debt**, because the debt is shares. Size a short
  with `deposit / initial margin`, then divide by price.
- Restoration for a short: `Debt must fall to (proceeds + deposit) / (1 + MM)`
  — here $7,800/1.25 = $6,240.
- A short squeeze can bankrupt a seller who was right about direction. Short
  interest can exceed 100% of the float because the same shares are re-lent.
- Testing efficiency is a **joint test of efficiency and the pricing model**.
  Excess returns may mean inefficiency *or* a bad model; zero excess returns
  may mean efficiency *or* unobserved correction. Neither test allows for
  transaction costs.
