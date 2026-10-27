# Plain English — Topic 8: Derivatives

[← Start here](#/EFB335/20-plain-english-start-here) · 📁 Deck:
`Topic 8_Derivatives-Upload.pptx` · 📁 `Topic 8 Derivative Strategies-2-1.xlsx` ·
[Sample Q5](#/EFB335/18-sample-final-exam/question-5-futures-for-cash-equitisation-topic-8-4-marks) ·
[Sample Q6](#/EFB335/18-sample-final-exam/question-6-a-bull-spread-with-puts-topic-8-4-marks)

## The One-Sentence Version

**A call is the right to buy, a put is the right to sell, and every
fancy strategy is just calls and puts stacked together.** Learn the two
building blocks and you can build everything else.

## The Picture

- **A call option is a deposit on a house.** You pay $5,000 to lock in a price of $500,000. If the house is worth $600,000 at settlement, you buy and you're well ahead. If it's worth $450,000, you walk away and lose only the deposit.
- **A put option is insurance on your car.** You pay a premium. If the car is wrecked (the price crashes), the insurer pays you. If nothing happens, you've lost only the premium.
- **A futures contract is a handshake on a price for later.** No deposit to walk away from: both sides *must* go through with it. Futures are standardised and exchange-traded; forwards are custom and private (over the counter).

## The Words You Need

| Term | Plain meaning |
|---|---|
| **Strike / exercise price (X or K)** | The locked-in price |
| **Premium** | What the buyer pays the seller for the option |
| **Long / holder** | Bought the option. Pays the premium, has the right |
| **Short / writer** | Sold the option. Receives the premium, has the obligation |
| **Payoff** | What the option is worth at expiry. **No premium in it** |
| **Profit** | Payoff minus the premium paid (long), or premium received minus payoff (short) |
| **In / out of the money** | Would it be worth exercising right now? Yes = in, no = out |

## The Two Building Blocks (on the formula sheet)

```
Call payoff = max(S_T − X, 0)       worth something only if the price ends ABOVE the strike
Put payoff  = max(X − S_T, 0)       worth something only if the price ends BELOW the strike
```

The sheet gives these. It does **not** give a single strategy. You
build each one by adding these lines up.

**What makes an option worth more (slides 10 and 13):**

| If this goes up… | Call value | Put value |
|---|---|---|
| Share price | ↑ | ↓ |
| Strike price | ↓ | ↑ |
| Time to expiry | ↑ | ↑ |
| Volatility | ↑ | ↑ |
| Interest rate | ↑ | ↓ |
| Dividends | ↓ | ↑ |

Volatility and time help **both**, because the buyer's loss is capped
at the premium while the upside keeps growing.

## Using Derivatives in a Portfolio (slides 14–32)

| Goal | Strategy | Built from |
|---|---|---|
| Lock in today's value | **Hedge with futures** | Own the shares, **sell** index futures |
| Insure against a fall, keep the upside | **Protective put** | Own the shares, **buy** a put |
| Insure for free | **Collar** | Own the shares, buy an out-of-the-money put, **sell** an out-of-the-money call to pay for it. You give up gains above the call strike |
| Earn income when you expect flat prices | **Covered call** | Own the shares, **sell** a call. Upside capped at strike + premium |
| Get market exposure while cash waits to be invested | **Long futures or long calls** (cash equitisation) | Buy index futures for the value of the waiting cash |
| Earn while waiting to buy shares | **Sell a put** | Collect the premium. If the price falls you buy at the strike, which you wanted to anyway |

## The Trading Strategies (slides 34–53)

| Strategy | Built from | You expect | Profit picture |
|---|---|---|---|
| **Long straddle** | Buy a call + buy a put, **same** strike | A big move, direction unknown | V shape, loses the premiums if nothing happens |
| **Short straddle** | Sell both | Hardly any move | Upside-down V. Wins inside a range, unlimited loss outside |
| **Strip** | 1 call + **2 puts** | Big move, more likely down | Steeper on the left |
| **Strap** | **2 calls** + 1 put | Big move, more likely up | Steeper on the right |
| **Long strangle** | Buy an OTM call + an OTM put (**different** strikes) | Big move | Cheaper than a straddle, wider flat bottom |
| **Bull spread** | Buy the **low** strike, sell the **high** strike (both calls or both puts) | A rise | Capped gain, capped loss |
| **Bear spread** | Buy the **high** strike, sell the **low** strike | A fall | Capped both ways |
| **Butterfly** | Long 1 low, short 2 middle, long 1 high | Price stays near the middle | Small, safe tent shape |
| **Range forward** | Same as a collar | | A zero-cost collar is a "range forward" |

**The memory trick for spreads:** in a *bull* spread you **buy the low
strike**. In a *bear* spread you **buy the high strike**. Same expiry,
different strikes.

## Worked Examples

**1. A long straddle.** Strike $50, call costs $3, put costs $2, so
$5 total.

| S_T | Call payoff | Put payoff | Total payoff | **Profit** |
|---|---|---|---|---|
| $40 | 0 | 10 | 10 | **+5** |
| $45 | 0 | 5 | 5 | **0** (break-even) |
| $50 | 0 | 0 | 0 | **−5** (worst case) |
| $55 | 5 | 0 | 5 | **0** (break-even) |
| $62 | 12 | 0 | 12 | **+7** |

Break-evens = strike ± total premium = $45 and $55.

**2. A bull spread with calls.** Buy the $50 call for $4, sell the $55
call for $1.50. Net cost $2.50.

| S_T | Long $50 call | Short $55 call | Payoff | **Profit** |
|---|---|---|---|---|
| $45 | 0 | 0 | 0 | **−2.50** (max loss) |
| $52 | 2 | 0 | 2 | **−0.50** |
| $52.50 | 2.50 | 0 | 2.50 | **0** (break-even) |
| $60 | 10 | −5 | 5 | **+2.50** (max gain) |

Max gain = gap between strikes − net cost = 5 − 2.50.

**The method for any strategy table:** one column per option, work out
each payoff at each price (remember the short ones are *negative*), add
across for total payoff, then subtract the net premium paid (or add the
net premium received) for profit. [Sample Q6](#/EFB335/18-sample-final-exam/question-6-a-bull-spread-with-puts-topic-8-4-marks)
does exactly this with puts.

## The Jargon to Learn

The plain English above is there to help you *understand* it. **The
marks go to the proper terms**, so learn every one of these: the term,
what it means, and a sentence that uses it the way a marker wants to
read it. Cover the right two columns and test yourself.

| Term | What it means | Say it like this in the exam |
|---|---|---|
| **Derivative** | A contract whose value comes from an underlying asset | "Derivatives are used for hedging, speculation and arbitrage." |
| **Forward vs futures contract** | Custom OTC agreement vs standardised exchange-traded contract | "Futures are standardised, exchange-traded and marked to market; forwards are customised over-the-counter contracts." |
| **Call / put option** | Right to buy / right to sell at the exercise price | "The holder of a put profits when the underlying price falls below the exercise price by more than the premium." |
| **Exercise (strike) price, premium, expiry** | Locked-in price, cost of the option, end date | "The call writer receives the premium and is obliged to sell at the exercise price if exercised." |
| **Long / short (holder / writer)** | Bought / sold the option | "A short call has limited gain (the premium) and unlimited potential loss." |
| **In / at / out of the money** | Exercise would pay / break even / not pay | "A collar uses an out-of-the-money put and an out-of-the-money call." |
| **Payoff vs profit** | Value at expiry vs value minus net premium | "Payoff to call holder = max(S_T − X, 0); profit deducts the premium." |
| **Hedging with futures** | Selling index futures against a share portfolio | "Selling stock index futures locks in the current portfolio value." |
| **Cash equitisation** | Buying futures to get market exposure for uninvested cash | "Long index futures eliminate cash drag while the manager builds positions." |
| **Protective put (portfolio insurance)** | Shares plus a long put | "A protective put sets a floor on portfolio value while retaining upside, at the cost of the premium." |
| **Covered call** | Shares plus a short call | "A covered call earns premium income but caps upside at the exercise price." |
| **Collar / range forward** | Long OTM put + short OTM call, often zero cost | "A zero-cost collar is a range forward: downside is protected and upside surrendered above the call strike." |
| **Straddle / strangle** | Call + put, same strike / different OTM strikes | "A long straddle profits from high volatility in either direction." |
| **Strip / strap** | 1 call + 2 puts / 2 calls + 1 put | "A strap is a volatility position with a bullish bias." |
| **Bull / bear spread; butterfly; calendar spread** | Options differing in strike (or expiry) | "A bull spread buys the lower-strike option and sells the higher-strike option, capping both gain and loss." |

## How the Exam Asks It

**Sample Q5** (4 marks): how can a fund get market exposure while
waiting to invest new cash, and what happens if the market rises?

> Buy stock index futures (e.g. SPI 200) equal in value to the cash
> waiting to be invested. The cash earns the risk-free rate and the
> futures give the market's return, so the fund isn't left behind by
> "cash drag" (this is cash equitisation). Close the futures out as the
> shares are bought. If the market rises, the shares cost more, but the
> long futures gain by about the same amount, offsetting the higher
> purchase price.

**Sample Q6** (4 marks): build a bull spread with puts and tabulate
payoff and profit. Use the method above.

## Say It Back

<details><summary>1. Call strike $30, share ends at $36, premium $2. Holder's payoff and profit?</summary>

Payoff = 36 − 30 = **$6**. Profit = 6 − 2 = **$4**.
</details>

<details><summary>2. Put strike $30, share ends at $36. Payoff?</summary>

**$0.** A put is only worth something below the strike.
</details>

<details><summary>3. What's the point of a collar compared with a protective put?</summary>

It protects against a fall at little or no upfront cost, because the
call you sell pays for the put you buy. The price is giving up gains
above the call's strike.
</details>

<details><summary>4. You expect a huge move but don't know which way. Strategy?</summary>

A **long straddle** (or a cheaper **long strangle**). Lean down? A
**strip**. Lean up? A **strap**.
</details>

<details><summary>5. Futures vs forwards, in one line?</summary>

Futures are standardised and traded on an exchange. Forwards are
customised private (over-the-counter) contracts.
</details>
