# Tutorial 8 Solutions — Retirement Planning

Worked solutions for `AYB250 Tutorial Questions Topic 8.docx`. Topic note:
12.

> **No answer slides for Topic 8 are in the source folder.** These
> solutions are worked from scratch against the Week 8 and Week 7 lectures
> and verified in Python, with nothing official to reconcile against yet.
> Where a question is open to more than one reading (Q6), each reading is
> answered.

## Question 1 — why a minimum pension?

Retirement-phase (pension) accounts get the most generous tax treatment in
the system: **investment earnings and capital gains are tax free**, and
payments are tax free from 60. Without a minimum drawdown, a member could
leave the balance untouched and use super as a **tax-free wealth store**
for decades, or pass it on as an estate.

The **core purpose** of super is to provide **retirement income**, so the
minimum payment forces the money out as income over the member's
lifetime, rising with age (4% under 65 up to 14% at 95+). The Week 8 "Too
much super?" slide makes the point: the $2.1 million transfer balance cap
and Division 296 limit the concessions from the top, and the minimum
drawdown limits them over time. (It cuts both ways: the Retirement Income
Review found about 90% of retirees draw only the minimum, often from fear
of outliving their savings.)

## Question 2 — Jennifer's retirement target

Jennifer, 59, wants $60,000 a year for 20 years, at a 4% **real** return.

### (a) Lump sum needed

```
            1 − (1.04)^(−20)
PV = 60 000 × ----------------- = 60 000 × 13.5903 = $815 419.58
                  0.04
```

Verified. **She needs about $815,420 at retirement.** Because the rate is
real, the answer is in today's dollars and the $60,000 keeps its buying
power.

### (b) $600,000 now, 2 more years' work, $100,000 extra contributions

Keep everything in today's dollars at the 4% real rate:

```
600 000 grown 2 years:  600 000 × 1.04^2 = 648 960
Plus contributions:                          100 000
                                            --------
At retirement (age 61):                     748 960
Target:                                     815 420
                                            --------
Shortfall                                   ($66 460)
```

(Assumes the $100,000 goes in near the end of the two years, so it earns
nothing before retirement. That's conservative.)

**What that buys her instead:**

```
$748,960 over 20 years at 4%:  PMT = 748 960 × 0.04 / [1 − 1.04^(−20)] = $55 110 a year
$60,000 a year from $748,960 lasts: n = 17.6 years
```

**Advice:**

- **Adjust the goal:** $55,110 a year is still just under ASFA's
  comfortable single budget ($55,923, assuming she owns her home), or
  accept the full $60,000 running out after about 17.6 years.
- **Age pension:** from 67 a part pension may top up her income once her
  assets run down (Topic 10). Her own plan ignores it.
- **Work a little longer** or part-time: each extra year both adds
  contributions and shortens the draw period.
- **Mind the caps on the $100,000.** The concessional cap is $32,500 a
  year *including* any employer SG, so at most around $65,000 over two
  years can go in concessionally; the rest must be **non-concessional**
  ($130,000 a year, or $390,000 bring-forward, which she can use at 59).
- **Transition to retirement from 60:** salary-sacrifice up to the cap and
  replace the cash with a tax-free TTR pension, as in Week 8's Jane
  example.
- **Longevity:** 20 years from 61 is age 81. A woman retiring now may well
  live longer, so the target may be too low, not too high.

## Question 3 — tax advantages of starting a pension in super

- **Earnings on the pension account are tax free** (exempt current pension
  income), against 15% in accumulation.
- **Capital gains are tax free** in pension phase, so assets can be sold
  without CGT.
- **Payments are tax free** from age 60 (taxed element).
- Franking credits are **refunded in cash**, since the fund pays no tax
  against them.
- The limit: only **$2.1 million** can be moved into retirement phase (the
  transfer balance cap). And a **transition to retirement** pension doesn't
  get tax-free earnings (removed 1 July 2017).

## Question 4 — account-based versus non-account-based

| | Account-based | Non-account-based (annuity) |
|---|---|---|
| Capital | **Owned and controlled by the member** | Handed to the provider, who manages it |
| Payments | Minimum set by age, **no maximum** | Contracted amount |
| Longevity risk | **Member** bears it: the account can run out | **Provider** bears it (lifetime annuity) |
| Commutable | Yes: can be cashed out | No |
| Funded by | Super money only | Super or ordinary money |
| On death | Balance paid to beneficiaries | Present value of a fixed term (or lifetime with guarantee period) to the estate; may be reversionary |

The main difference: **who owns the capital, and so who carries the risk
of living too long.**

## Question 5 — Carolyn's transition to retirement pension

Carolyn is 60 on 1 July 2026, with $750,000: taxable component $500,000
(all taxed in the fund) and tax-free component $250,000. She wants the
minimum.

### (a) Minimum pension

```
TTR drawdown range: minimum 4%, maximum 10%
Minimum = 750 000 × 4% = $30 000 a year     (maximum would be $75 000)
```

### (b) How much is taxable?

Every payment follows the **proportioning rule**:

```
Taxable share   500 000 / 750 000 = 66.67%  →  30 000 × 2/3 = $20 000
Tax-free share  250 000 / 750 000 = 33.33%  →  30 000 × 1/3 = $10 000
```

**$20,000 is taxable component, but Carolyn pays no tax on it.** She is
60, and a **taxed element** income stream is tax free from 60. It isn't
even included in her assessable income.

> **"Taxable component" doesn't mean "taxed".** The components are
> labels that follow the money; whether tax is actually payable depends on
> age and element. At 60+ on the taxed element, it's nil. (What *is*
> taxed: the earnings inside her TTR account, still at 15%.)

## Question 6 — Chuck's re-contribution strategy

Chuck, 62, has $800,000: tax-free component $200,000 and taxed taxable
component $600,000. He'll retire at 64 and start an 8% account-based
pension.

### (a) How much can he withdraw?

Once Chuck **retires after reaching preservation age (60)**, he meets a
**condition of release**, so he can withdraw **any amount**, up to the
whole $800,000, and at 60+ it is **tax free**.

For a re-contribution strategy, though, the useful withdrawal is limited
by what can go back in: **non-concessional cap of $130,000 a year, or
$390,000 using the bring-forward rule** (he is under 75, and his balance
is well below the bring-forward threshold). So the working amount is
**$390,000**.

### (b) The new proportions after re-contributing

**Reading 1 (the conventional one): withdraw $390,000 and re-contribute
it all.** The withdrawal is proportioned:

```
Tax-free share  200 000 / 800 000 = 25%  →  390 000 × 25% =  97 500
Taxable share   600 000 / 800 000 = 75%  →  390 000 × 75% = 292 500

After withdrawal:  tax-free 200 000 −  97 500 = 102 500
                   taxable  600 000 − 292 500 = 307 500
Re-contribute 390 000 as non-concessional → all tax-free

Final:  tax-free 102 500 + 390 000 = $492 500   (61.56%)
        taxable                      $307 500   (38.44%)
        total                        $800 000
```

Verified. The tax-free share rises from **25% to 61.56%**.

**Reading 2: withdraw everything and re-contribute the entire amount.** He
can't: only $390,000 fits under the bring-forward cap. If he withdrew all
$800,000, his super would restart at $390,000, **100% tax-free**, with
$410,000 left outside super as ordinary money (taxed at his marginal rates
on its earnings). That's usually worse, because it gives up tax-free
pension earnings on $410,000.

**Why bother?** The benefit shows up on death. If Chuck's super goes to a
**non-dependant** (such as an adult child), the taxable component is taxed
at 15% plus Medicare (note 13). Converting $292,500 of taxable component
to tax-free could save up to `292 500 × 17% = $49 725` in death benefits
tax. His **8% pension** ($64,000 a year on $800,000) is allowed, being
above the 4% minimum for under-65s.

## Question 7 — Jacqui's super

Jacqui, 35, self-employed landscape gardener on about $60,000. De facto
partner Mark is on leave caring for their 4-year-old. She has four super
funds.

### What to do about her super

- **Consolidate the four funds.** Four sets of fees erode the balance.
  Before rolling over, **check each fund's insurance** (default life, TPD
  and income cover can be lost when an account closes, and as a
  self-employed parent she may need it) and any exit fees. The ATO's
  online services list all her accounts, including any lost super.
- Choose one fund on **fees, investment options and performance** (and
  whether it passes APRA's performance test). An **SMSF isn't suitable**:
  balances under $500,000 generally aren't worth the cost and duties.
- Set a **growth-oriented investment option**: at 35 her horizon is about
  30 years.

### Can she contribute?

**Yes. As self-employed she gets no SG**, which makes contributing more
important (the self-employed are one of Week 8's at-risk groups).

- **Personal deductible contributions** up to the **$32,500** concessional
  cap, plus carried-forward unused cap if her total balance is under
  $500,000. She needs to lodge a notice of intent to claim with her fund.
  On $10,000 contributed:

  ```
  Tax on 60 000: 4 020 + 0.30 × 15 000 = 8 520;  Medicare 1 200
  Tax on 50 000: 4 020 + 0.30 ×  5 000 = 5 520;  Medicare 1 000
  Saved 3 200, less contributions tax 1 500  →  net $1 700
  ```

- **Government co-contribution:** her $60,000 is between the thresholds,
  so a $1,000 non-concessional contribution earns a partial
  co-contribution:

  ```
  500 − (60 000 − 49 293) × 0.03333 = $143.14
  ```

  (The ATO's income test uses total income; check how any deductible
  contribution affects it before relying on the figure.)

- **Spouse contribution for Mark:** while Mark is on leave with little or
  no income, Jacqui can contribute to **his** super. If his income is under
  $37,000 she gets an 18% offset, up to **$540** on a $3,000 contribution,
  which also narrows the gap his time out of the workforce creates (de
  facto partners count as spouses).

## Checkpoint

<details><summary>Questions</summary>

1. Jennifer decides on $55,000 a year for 20 years at 4% real. What lump
   sum does she need?
2. Carolyn draws the TTR maximum instead. How much, and how much tax does
   she pay on it?
3. Chuck could only use a $130,000 re-contribution this year. What are
   his proportions after withdrawing and re-contributing $130,000?
4. Why can't Jacqui receive employer super guarantee?

</details>

<details><summary>Answers</summary>

1. `55 000 × 13.5903 = $747 468`
2. `750 000 × 10% = $75 000`; no tax (taxed element, age 60+).
3. Withdrawal: tax-free `130 000 × 25% = 32 500`, taxable `97 500`.
   Final tax-free `200 000 − 32 500 + 130 000 = $297 500` (37.19%);
   taxable `600 000 − 97 500 = $502 500` (62.81%).
4. She is self-employed: there is no employer to pay SG. Contributions
   are voluntary and she must fund them herself.

</details>
