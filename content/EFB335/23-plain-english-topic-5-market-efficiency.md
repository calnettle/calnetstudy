# Plain English — Topic 5: Market Efficiency

[← Start here](#/EFB335/20-plain-english-start-here) · 📁 Deck:
`Topic 5_Market Efficiency_upload.pptx` (50 slides) ·
[Sample Q1](#/EFB335/18-sample-final-exam/question-1-market-efficiency-topic-5-4-marks)

## The One-Sentence Version

**In an efficient market, prices already include the information
people have, so you can't consistently beat the market using that
information.** The three "forms" just say *which* information.

## The Picture

You hear a hot tip at the pub that a company is about to announce great
results. By the time you get to your phone, thousands of full-time
professionals have already heard it, bought the shares, and pushed the
price up. The bargain is gone before you arrive. **That's market
efficiency.** The only way to stay ahead is to know something nobody
else knows, and trading on that is usually illegal.

## The Three Forms (the heart of the topic)

Picture three circles, each inside the next:

| Form | Prices already include… | So this can't beat the market | Real world verdict |
|---|---|---|---|
| **Weak** | All **past** prices and trading data | **Technical analysis** (charts, trends) | **Mostly holds** in developed markets |
| **Semi-strong** | Past data **plus all public** information (news, earnings, annual reports) | **Fundamental analysis** (reading the accounts) | **Mostly holds**, with some anomalies |
| **Strong** | **All** information, public **and private** | Even **insider** information | **Rejected.** Insiders do earn abnormal returns, which is why insider trading is illegal |

Each form includes the one before it. If a market is semi-strong
efficient, it's automatically weak-form efficient too.

**Why markets should be efficient (slide 6):** lots of competing,
profit-hungry investors; news arrives randomly; and they trade on it
fast, so prices jump to the new right level almost straight away.

## The Words You Need

| Term | Plain meaning |
|---|---|
| **Random walk** | Tomorrow's price change can't be predicted from today's. What weak-form efficiency implies |
| **Autocorrelation test** | Does today's return correlate with yesterday's? Near zero = weak-form holds |
| **Runs test** | Count streaks of ups (+) and downs (−). Too few runs (long streaks) means trends, which goes against weak form |
| **Trading-rule test** | Does a chart rule (filter rule, moving-average crossover, RSI) beat buy-and-hold **after costs and risk**? Usually not |
| **Abnormal return (AR)** | Share's return minus the market's return that day: AR = Ri − Rm |
| **Event study** | Line up many firms around an announcement (day 0), average their abnormal returns, and see how fast the price adjusts |
| **Anomaly** | A pattern that shouldn't exist if markets are efficient |

## How It Works, Step by Step

**1. Testing weak form: a runs test.** The checkpoint's pattern is
`+++ -- ++ ----- ++`. Count the streaks: **5 runs** in 14 days (7 ups,
7 downs). A random series with 7 of each would expect about
2 × 7 × 7 ÷ 14 + 1 = **8 runs**. Fewer runs means longer streaks, which
means trends. So this pattern **goes against** weak-form efficiency.

**2. Testing semi-strong form: an event study.** A company announces
surprise good earnings. On the day, its share rises 5% and the market
rises 1%.

```
AR = 5% − 1% = 4%
```

Do this for 100 firms and add up the average ARs day by day (the
cumulative abnormal return, CAR).
- **Efficient:** the jump happens on day 0 and then the line goes flat.
- **Not efficient:** the price keeps drifting after the news. That's **post-earnings announcement drift**, a known anomaly.

**3. Testing strong form.** Look at people who might have private
information:
- **Corporate insiders:** they *do* earn above-average returns, especially when buying. Strong form fails. (Copying their trades after they're published doesn't pay once costs are counted.)
- **Security analysts:** some evidence of skill, mainly in *changes* to recommendations and upward earnings revisions.
- **Professional fund managers:** most don't beat the market after fees. Weak support for strong form.

## The Anomalies to Name

| Anomaly | What happens | Which form it challenges |
|---|---|---|
| **January effect** | Returns are higher in January, especially for small firms (tax-loss selling in December) | Weak |
| **Weekend / Monday effect** | Monday returns are lower | Weak |
| **Momentum** | Recent winners keep winning for 1–12 months | Weak |
| **Long-term reversal** | 3–5 year winners become losers and vice versa (investors overreact) | Weak |
| **Post-earnings drift** | Price keeps moving after an earnings surprise | Semi-strong |
| **Low P/E, value (high B/M), size, neglected firms** | Cheap, small or under-followed shares earn more than risk explains | Semi-strong |

**Behavioural explanations** (slides 18–19): investors sell winners too
early and hold losers too long (the disposition effect), news spreads
slowly, and overconfidence makes prices overshoot.

## What It Means for Investors (slides 42–48)

- **Technical analysts** assume information spreads slowly. Weak-form efficiency says their charts add little after costs.
- **Fundamental analysts** can only win if they value companies *better* than everyone else. Average analysis earns average returns.
- **Portfolio managers without superior analysts** should: find out the client's risk preference, build the matching portfolio, **diversify globally** to remove unsystematic risk, **rebalance** to keep the risk level, and **keep costs low**. In other words, go passive (that's Topic 6).

## The Jargon to Learn

The plain English above is there to help you *understand* it. **The
marks go to the proper terms**, so learn every one of these: the term,
what it means, and a sentence that uses it the way a marker wants to
read it. Cover the right two columns and test yourself.

| Term | What it means | Say it like this in the exam |
|---|---|---|
| **Efficient market hypothesis (EMH)** | Prices fully reflect all available information | "Under the EMH, investors cannot consistently earn abnormal risk-adjusted returns." |
| **Weak / semi-strong / strong form** | Past market data / all public information / all public and private information | "Each form is nested: strong-form efficiency implies semi-strong and weak-form efficiency." |
| **Random walk** | Price changes are independent and unpredictable | "If prices follow a random walk, past returns have no predictive power." |
| **Abnormal return** | Actual return minus the expected (or market) return: ARit = Rit − Rmt | "An efficient market shows no significant abnormal returns after the announcement day." |
| **Risk-adjusted return** | Return after allowing for the risk taken | "Outperformance only counts if it survives adjustment for risk and transaction costs." |
| **Autocorrelation test** | Correlation of returns with their own past returns | "Insignificant autocorrelation coefficients support weak-form efficiency." |
| **Runs test** | Counts sequences of price rises and falls | "Fewer runs than expected indicates positive dependence (trends), inconsistent with weak-form efficiency." |
| **Filter rule / trading rule test** | Testing a mechanical technical strategy against buy-and-hold | "After transaction costs, filter rules generally fail to beat buy-and-hold, supporting the weak form." |
| **Event study / cumulative abnormal return (CAR)** | Average abnormal returns around an announcement, added up over time | "In an efficient market the CAR adjusts fully on day 0 and is flat thereafter." |
| **Joint hypothesis problem** | Tests of efficiency also test the asset pricing model used | "An apparent anomaly may reflect a mis-specified pricing model rather than inefficiency." |
| **Anomaly** | A pattern inconsistent with efficiency | "The size, value and January effects are anomalies that challenge semi-strong and weak-form efficiency." |
| **Post-earnings announcement drift** | Prices keep moving after an earnings surprise | "Post-earnings announcement drift shows earnings news is not instantly reflected in prices." |
| **Momentum / reversal (overreaction)** | Winners keep winning short-term / extreme winners and losers reverse over 3–5 years | "Momentum is linked to underreaction and gradual information diffusion; reversals to investor overreaction." |
| **Disposition effect** | Selling winners too early, holding losers too long | "The disposition effect, from prospect theory, slows price adjustment and contributes to momentum." |
| **Technical vs fundamental analysis** | Trading on price history vs valuing the business | "Weak-form efficiency undermines technical analysis; semi-strong efficiency undermines fundamental analysis unless the analyst is superior." |

## How the Exam Asks It

**Sample Q1** (4 marks): (a) define weak form, 1 mark; (b) how to test
it, 2 marks; (c) which form markets are, 1 mark. Answer shape:

> **(a)** Prices fully reflect all past market data, so past returns
> can't predict future returns and technical analysis can't earn
> abnormal returns after costs.
> **(b)** Two families of test. Statistical tests of independence:
> autocorrelation (is today's return correlated with past returns?) and
> runs tests (are streaks of ups and downs longer than chance?).
> Trading-rule tests: does a technical rule beat buy-and-hold after
> transaction costs and risk adjustment?
> **(c)** Developed markets are broadly weak-form and largely
> semi-strong efficient, with anomalies such as size, value, momentum
> and post-earnings drift. Strong form is rejected because insiders
> earn abnormal returns.

## Say It Back

<details><summary>1. Which form of EMH says fundamental analysis can't work?</summary>

**Semi-strong**, because all public information (including the
accounts) is already in the price.
</details>

<details><summary>2. If a market is strong-form efficient, is it also weak-form efficient?</summary>

Yes. Each form contains the ones below it.
</details>

<details><summary>3. In an event study of an efficient market, what does the cumulative abnormal return look like after day 0?</summary>

Flat. The whole adjustment happens at the announcement and nothing is
left to earn afterwards.
</details>

<details><summary>4. Why is strong-form efficiency rejected?</summary>

Corporate insiders consistently earn above-average returns on their
own company's shares, so private information is not fully in the price.
</details>

<details><summary>5. Name two anomalies and the explanation for each.</summary>

Any two, for example: the **January effect** (tax-loss selling in
December pushes small-firm prices down, then they bounce);
**momentum** (news spreads slowly so prices underreact and keep
trending); **long-term reversal** (investors overreact, so extreme
winners become too expensive and fall back).
</details>
