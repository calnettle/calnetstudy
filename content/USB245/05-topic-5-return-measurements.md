# TOPIC 5 — Return Measurements

Week 5 closes the loop the unit has been building since Week 1: you can now
construct a property cashflow (Weeks 3–4) — this week is about **judging**
it. Two families of measures: **static** ratios you can compute from a
single year's figures, and **dynamic** measures — **NPV** and **IRR** — that
use the whole multi-period cashflow and the time value of money.

Reading: Whipple Chapters 7 and 10 (ratio analysis pp.410–417, NPV
pp.213–215), Rowland Chapters 2 and 7 (the required-vs-expected table is
Rowland [2.60]).

## 10.1 Why Measure Returns At All?

The lecture gives two operational reasons:

1. **To decide whether to hold** existing investments.
2. **To select** future acquisitions.

A measured return is useless in isolation — it only means something
**compared against** a reference point. The deck names four:

| Compare against | Question it answers |
|---|---|
| Expected or target returns | Does the property meet *my* expectations? |
| Industry benchmarks | Does it match average or competing properties? |
| The investor's portfolio | What does it contribute to portfolio objectives? |
| Past returns in different periods | Do the returns vary over time — and why? |

This is the same "measure, then compare" discipline as Week 4's discount
rate derivation: a number with no benchmark is a decoration, not a decision
tool.

## 10.2 Static Return Measures

A static measure is **any simple ratio of one known property feature over
another** — Whipple calls it *ratio analysis*. The prototype is the yield
you have used since Week 1:

```
Y = NI / CV        yield = net income ÷ capital value
```

The lecture's grid is a 3 × 3 family — each **rate** has a reciprocal
**multiplier** (a "years purchase": how many years of that income buy the
asset), plus a column of operating ratios:

| Rates | Multipliers (years purchase) | Operating ratios |
|---|---|---|
| Rate of return on gross income `= GI / Value` | Gross income multiplier `= Value / GI` | Expense ratio `= Og / GI` |
| Rate of return on net income `= NI / Value` | Net income multiplier `= Value / NI` | Break-even ratio `= (Og + PMT) / GI` |
| Cash-on-cash (dividend yield) `= BTCF / Initial equity` | Cash multiplier `= Equity / BTCF` | Profit margin `= BTCF / GI` |

Where `Og` = outgoings, `PMT` = annual debt service, `BTCF` = before-tax
cash flow (net operating income less debt service).

### Worked example — the lecture's $48m property

```
Asking price (AP)              $48.0m
Equity investment (EI)         $10.0m
Loan                           $38.0m   nominal 8%, 180 months
Effective gross income (EGI)   $ 8.0m
Outgoings (Og)                 $ 2.0m
Net operating income (NOI)     $ 6.0m
```

First derive the debt service. Monthly rate 8%/12, n = 180:

```
PMT(monthly) = 38,000,000 × (0.08/12) / (1 − (1 + 0.08/12)^−180)
             = $363,147.79 per month
PMT(annual)  = $4,357,773.50  ≈  $4.358m           (the slide's figure)

BTCF = NOI − PMT = 6.0m − 4.358m = $1.642m
```

Then every cell of the grid:

| Rates | Multipliers | Operating ratios |
|---|---|---|
| Gross: `8/48` = **16.7%** | GIM: `48/8` = **6.00** | Expense: `2/8` = **0.25** |
| Net: `6/48` = **12.5%** | NIM: `48/6` = **8.00** | Break-even: `(2 + 4.358)/8` = **79.5%** |
| Cash-on-cash: `1.642/10` = **16.4%** | Cash mult: `10/1.642` = **6.09** | Profit margin: `1.642/8` = **20.5%** |

Each number is then benchmarked the four ways of §10.1 — e.g. is a 12.5%
net-income return above or below competing assets, does a 79.5% break-even
ratio leave enough income cushion before the property can't cover outgoings
plus the mortgage?

> **Watch which denominator each ratio takes.** The first two rows divide by
> the **asking price**; cash-on-cash divides by **initial equity** — that is
> why 16.4% cash-on-cash coexists with a 12.5% net return on the same
> property. It is a *geared* measure: the loan magnifies it. Quoting a
> cash-on-cash figure as if it were an ungeared property return overstates
> the asset's performance. (Same discipline as Week 4: name the denominator.)

### To use or not to use?

Positives: simple to understand, easy and consistent to calculate,
information generally available. The inherent shortcomings are the exam
list:

- fail to appropriately consider the **time value of money**;
- concentrate on only the **year-1** cashflow;
- fail to account for **acquisition and sale costs**;
- fail to account for any **capital growth at disposal**;
- and you must always **compare like with like**.

> **A static measure prices one year and calls it the investment.** A
> property with a big year-3 expiry, a refurbishment due, or above-market
> passing rent can carry an attractive year-1 yield and still be a poor
> buy — every one of those problems is invisible to a ratio. That is
> precisely the gap the DCF fills, and precisely why the unit built the
> DCF first.

## 10.3 Dynamic Return Measures

Multi-period, time-adjusted measures. Two in commercial use, and both read
the same DCF cashflow you already know how to build:

- **Net Present Value (NPV)** — the difference between the present value of
  cash inflows and the present value of cash outflows.
- **Internal Rate of Return (IRR)** — the discount rate that makes NPV = 0.

```
        n     CFt
NPV  =  Σ  ─────────  −  CF0
       t=1 (1 + r)^t

IRR:  the r that solves NPV = 0
```

Four ways to compute either: long hand (discount factors), formula, Excel
(`NPV` and `IRR` functions — Tutorial 4), financial calculator (Week 6 —
bring it).

## 10.4 NPV — Definition and Decision Rule

Three equivalent phrasings from the deck, all worth recognising in an exam
stem: the difference between PV of inflows and PV of outflows; the value
today of benefits expected to accrue in the future; the sum of the present
values of all forecast cashflows over the holding period.

**Decision rule:**

```
NPV > 0    required return exceeded          →  ACCEPT / investigate further
NPV = 0    required return exactly met      →  accept (marginal)
NPV < 0    return below minimum acceptable  →  REJECT
```

A zero NPV does **not** mean the investment earns nothing — it means it
earns **exactly the discount rate**. If r = 10%, an NPV of $0 is a 10% p.a.
investment.

### Worked example 1 — Whipple pp.213–215

A building is projected to produce (end of year, $'000): 10, 14, 11, 100.
Required return 14%. What is the NPV at a price of $100,000? At $75,000?

```
Year   CF          PV factor @14%   PV
1      10,000      0.8772            8,772
2      14,000      0.7695           10,773
3      11,000      0.6750            7,425
4     100,000      0.5921           59,208
                   Total            86,177

NPV at price 100,000:  86,177 − 100,000  =  −13,823   REJECT
NPV at price  75,000:  86,177 −  75,000  =  +11,177   ACCEPT
```

The property is *worth* $86,177 to this investor — that is the maximum
price at which the 14% target is still met. Any quoted price is just a
different CF0 subtracted from the same $86,177.

### Worked example 2 — the $500,000 asking price

$15,000 net cashflow each year for eight years, plus $900,000 net disposal
proceeds at the end of year 8. Asking price (including costs) $500,000;
minimum acceptable return 10%.

```
Year   CF          PV factor @10%   PV
1–7    15,000      0.9091 … 0.5132   73,026  (sum of years 1–7)
8     915,000      0.4665           426,854
                   Total            499,881

NPV = 499,881 − 500,000 = −$119    →  reject, strictly
```

> **An NPV of −$119 on a $500,000 deal is a dead heat, not a rejection with
> conviction.** The asking price *is* this investor's investment value to
> within 0.02% — the implied IRR is 9.99%. In an exam, apply the rule
> mechanically (negative → reject); in practice, recognise that the answer
> is "the price is exactly fair at a 10% hurdle" and that $119 is far
> inside the error of any forecast in the model.

## 10.5 NPV on a Real DCF — the Week 3 Model, Repriced

The lecture's Exercise 3 reuses the Week 3 residential DCF (rent $775/week,
growth 7%, vacancy 5%, expenses $7,405 growing at 3% CPI, terminal yield
3.5%, selling costs 3%, acquisition costs 4%, required return 10% — the
"Exercise 1a" variant in note 07). Weeks 3–4 asked *what is the maximum
price*; Week 5 flips the question: **given** a price, what is the NPV?

The PV of the future cashflows does not depend on the price, so it is
computed once — $911,456.24 (note 07, §7.6) — and each candidate price just
changes the period-0 outflow `1.04 × PP`:

```
PP          CF0 = −1.04×PP     NPV = 911,456 − 1.04×PP
825,000       −858,000            +53,456
850,000       −884,000            +27,456
875,000       −910,000            + 1,456
```

All three are positive → all three prices deliver more than 10% — which the
Week 3 answer already implied, because the maximum price payable was about
$876k. The break-even price (NPV = 0) is `911,456.24 / 1.04 = $876,400`.

> **NPV and "maximum price payable" are the same calculation, rearranged.**
> Max price solves `1.04 × PP = Σ PVs` for PP; NPV fixes PP and reports the
> difference. If your NPV at a given price is positive, that price is below
> your maximum; the sign of the NPV *is* the buy signal. The assignment DCF
> solves for NPV and IRR, not maximum purchase price — same model, different
> output cell.

## 10.6 IRR — Definition and Decision Rule

The IRR is the discount rate that equates the PV of all inflows to the PV
of all outflows — the r that solves NPV = 0. It measures the yield the
cashflow itself generates.

```
  n      CFt
  Σ   ─────────  =  0        solve for r  →  IRR
 t=0  (1 + r)^t
```

**There is no algebraic solution** — the polynomial has no closed form for
n > 4. Long hand you guess and iterate; Excel `=IRR(range, guess)` iterates
for you (or Goal Seek on the NPV cell); the financial calculator does it in
Week 6.

**Decision rule:** compare the IRR to the required return.

```
IRR > r    expected yield exceeds the hurdle   →  ACCEPT / investigate
IRR < r    below minimum acceptable            →  REJECT
```

IRR is also used to **rank** competing investments in descending order —
with a health warning (§10.8).

### Worked example — Exercise 4, the same three prices

Same Week 3 cashflow, IRR instead of NPV:

| Purchase price | NPV @10% | IRR |
|---|---|---|
| $825,000 | +$53,456 | **11.43%** |
| $850,000 | +$27,456 | **10.72%** |
| $875,000 | +$1,456 | **10.04%** |

The two measures agree at every price — positive NPV always pairs with
IRR > 10%, and as the price climbs toward break-even ($876,400) the NPV
falls toward $0 while the IRR falls toward exactly 10%. That is the
relationship: **NPV measures the surplus in dollars at your hurdle rate;
IRR reports the hurdle rate at which the surplus would vanish.**

### IRR — to use or not to use?

Positives: the most widely used investment criterion in practice, and a
single rate of return is attractive to communicate. Shortfalls (exam list):

- widely misunderstood;
- **multiple IRRs** when the cashflow changes sign more than once;
- difficult to compute (no algebraic solution);
- difficult to interpret in certain situations;
- easily mislabelled — *equity* IRR vs *project* IRR are different numbers
  (gearing returns in Weeks 7–9).

## 10.7 Which Return Are You Talking About?

Rowland [2.60] — the table that keeps recurring in this unit (it is the
same identity as note 03, §6.2):

| | Investment value | Expected return |
|---|---|---|
| Input (fixed) | Expected income, **required return** | Expected income, **asking/market price** |
| Calculate | Investment value (max price) | Expected return (IRR) |
| Purpose | Compare with asking or market price | Compare with required return |

- The **required return** discounts income to a PV — the price you *can*
  pay to earn that rate. (Weeks 3–4.)
- The **expected return** is the rate you earn *if* you pay the asking
  price and the forecast income arrives. (This week's IRR.)

One DCF, two directions: fix the rate and solve for price, or fix the price
and solve for the rate.

## 10.8 When NPV and IRR Conflict

For a single accept/reject decision on a conventional cashflow, NPV and IRR
always agree — an NPV above zero *is* an IRR above the discount rate. The
trouble is **ranking mutually exclusive alternatives**: the two measures
can order them differently. The deck gives three causes.

> **The Week 5 deck's conflict slides do not all reconcile with their own
> tables — every figure below has been recomputed.** Details flagged per
> example; conclusions and rankings are unaffected, but do not quote the
> slide numbers unchecked in an exam answer. Confirm with the tutor which
> figures the exam will use.

### The headline example

Projects A and B, both available, equal risk:

```
Period      A        B
0         −500     −400
1         +325     +325
2         +325     +200

IRR:      19.43%   22.17%      IRR prefers B
NPV @10%: $64.05   $60.74      NPV prefers A
```

> **The slide says "the required rate of return for the firm is 20%", but
> its NPV figures are computed at 10%.** At 20% the NPVs are A = −$3.47 and
> B = +$9.72 — A would simply be rejected and there is no conflict at all.
> The printed $64.05/$60.74 only reconcile at a 10% discount rate, so read
> the example as: hurdle 10%, IRR ranking contradicts NPV ranking, choose
> by NPV → **A**.

### Cause 1 — scale

```
Years          0         1       2       3      NPV @10%     IRR
A          −2,500    +1,500  +1,500  +1,500    +1,230.28    36.3%
B         −14,000    +7,000  +7,000  +7,000    +3,407.96    23.4%
```

NPV prefers B (a bigger dollar surplus on a bigger outlay); IRR prefers A
(a hotter rate on a small base). IRR is blind to scale: 36% of $2,500 buys
less wealth than 23% of $14,000.

> **The slide prints "NPV" of $3,730.50 and $17,400 — those are the PVs of
> the inflows, not net of the outlay.** Netting off gives +$1,230 and
> +$3,408. It also prints B's IRR as 21%; solving properly gives 23.4%.
> The ranking conflict (NPV → B, IRR → A) is unchanged either way.

### Cause 2 — timing of cashflows within the same outlay

```
Years          0       1        2       NPV @10%    IRR
A           −100     +20     +120       +17.3      20.0%
B           −100    +100     +31.25     +16.7      25.0%
```

Same outlay, different shape: B returns cash early (which flatters the
IRR's reinvestment arithmetic), A returns more in total. NPV prefers A;
IRR prefers B.

> **The slide's table prints A's year-2 cashflow as $125, but its stated
> results (NPV $17.3, IRR 20%) only reconcile with $120.** At $125 the
> figures would be NPV +$21.49 and IRR 22.3%. The consistent set — used
> above — is (−100, +20, +120).

### Cause 3 — time frame (investment horizon)

```
Years          0       1      2   3      4      NPV @10%    IRR
A           −100    +120     —   —      —        +$9        20%
B           −100      —      —   —    +174      +$19        15%
```

A doubles quickly on a short horizon; B earns a lower rate for longer. IRR
prefers A, NPV prefers B. (Both slide figures verify: `120/1.1 − 100 =
9.09`; `174/1.1⁴ − 100 = 18.85`; `(174/100)^(1/4) − 1 = 14.87%`.)

### The resolution

- NPV and IRR generally agree; conflicts arise with **non-conventional
  cashflows** (signs switch more than once → multiple IRRs) or when the
  **timing or magnitude** of cashflows differs materially between
  alternatives — the greater the difference, the likelier the rankings
  conflict.
- **NPV is always held to be the superior decision tool.** It directly
  measures the increase in wealth to the investor, in dollars, at the
  investor's own opportunity cost of capital.

> **Whenever NPV and any other decision rule conflict, use NPV.** That
> sentence appears verbatim on the slide and is a free mark in any
> ranking question: compute both, note the conflict, choose by NPV, and
> say why — NPV gives the correct wealth-maximising signal.

## Checkpoint

1. A property shows NOI $6m against an $48m price, and BTCF of $1.642m on
   $10m of equity. Why is the cash-on-cash (16.4%) higher than the net
   income rate (12.5%), and which is the geared measure?
2. Name three of the five inherent shortcomings of static measures.
3. An investment has NPV = $0 at a 10% discount rate. What return does it
   earn?
4. The Week 3 model's future cashflows have a PV of $911,456 and
   acquisition costs are 4%. What is the NPV at a price of $850,000, and
   the break-even price?
5. Two mutually exclusive projects: NPV ranks X first, IRR ranks Y first.
   Which do you choose, and what one-line justification earns the mark?
6. When can a cashflow have more than one IRR?

<details><summary>Answers</summary>

1. Cash-on-cash divides by **equity** ($10m), not price ($48m), and its
   numerator is income *after* debt service. It is the geared measure —
   the loan (8% on $38m, costing $4.358m p.a. against $6m NOI) magnifies
   the equity return.
2. Any three of: ignore time value of money; look at year-1 cashflow only;
   ignore acquisition and sale costs; ignore capital growth at disposal;
   comparisons only valid like-with-like.
3. **Exactly 10% p.a.** — zero NPV means the cashflow earns precisely the
   discount rate, not nothing.
4. `NPV = 911,456 − 1.04 × 850,000 = +$27,456`. Break-even price
   `= 911,456 / 1.04 = $876,400`.
5. Choose **X** — "NPV directly measures the increase in the investor's
   wealth, so when NPV conflicts with any other rule, NPV gives the
   correct wealth-maximising signal."
6. When the cashflow **changes sign more than once** (e.g. outlay → inflows
   → a large capex or remediation outflow → inflows). One sign change
   guarantees a unique IRR.

</details>

## Summary

- Static measures = single-year ratios (rates, multipliers, operating
  ratios). Cheap, comparable, and blind to time value, later years, costs
  and growth.
- `NPV = Σ CFt/(1+r)^t − CF0`. Positive → hurdle beaten → accept.
  Zero → earns exactly r.
- IRR = the r making NPV zero; no closed form; accept if IRR > required
  return.
- NPV and maximum-price-payable are the same equation solved in different
  directions; NPV and IRR are the same model reporting a dollar surplus vs
  a rate.
- Required return (fix rate, solve price) vs expected return (fix price,
  solve rate) — Rowland [2.60].
- Rankings can conflict on scale, timing or horizon; multiple IRRs on
  non-conventional cashflows. **Always decide by NPV.**
- Next week: DCFs on the financial calculator — **bring the Sharp
  EL-738XTB**.
