# PRACTICE QUESTIONS — WEEKS 3+

Exam-style questions on the Week 3 material: cashflow components and the
seven-step DCF. Answers are tap-to-reveal. Every figure was recomputed
before it was written down — work them on paper first, then check.

Weeks 1–2 and the assignment material are in
[Practice Questions](#/USB245/08-practice-questions).

## Section G — Cashflow Components and the Seven-Step DCF

Week 3 material. Work these on paper before opening the answers.

### G1

Give the three things the Week 3 lecture says a DCF is, and explain in one
sentence why the annuity formula from Week 1 cannot be used on a real
building.

<details><summary>Answer</summary>

1. **A valuation method** — "valuing a project, company or asset using the
   concepts of the time value of money. All future cash flows are estimated
   and discounted to give their present values."
2. **A decision-making tool** for assessing the viability of income-producing
   properties or projects.
3. **A time-value tool for when future payments are irregular.**

The annuity formula `PV = PMT × (1 − (1+r)^-N)/r` assumes an **identical
payment every period**. A building's cashflow is never identical period to
period — rents escalate, leases expire, downtime and incentives interrupt
income, capex lands in a single month, and the asset is sold at the end. Once
the payments differ, each period has to be discounted on its own, which is
all a DCF is.
</details>

### G2

A house rents for **$2,250 per week**. The vacancy and letting-up allowance
is 6% of gross potential income. Statutory charges are **$1,375 per
quarter**. Insurance is $3,240 p.a., maintenance $6,800 p.a., and management
is 5% of gross effective income.

Set out the full waterfall for year 1, and give the outgoings ratio against
both bases.

<details><summary>Answer</summary>

```
Gross potential income   2,250 × 52          =  $117,000.00
less vacancy             6% × 117,000        =  $  7,020.00
                                                ────────────
Gross effective income                          $109,980.00

less statutory charges   1,375 × 4           =  $  5,500.00
less insurance                                  $  3,240.00
less management          5% × 109,980        =  $  5,499.00
less maintenance                                $  6,800.00
                                                ────────────
Total property expenses                         $ 21,039.00
                                                ────────────
NET OPERATING INCOME                            $ 88,941.00
```

```
Outgoings / gross POTENTIAL income = 21,039 / 117,000 = 17.98%
Outgoings / gross EFFECTIVE income = 21,039 / 109,980 = 19.13%
```

Both are inside the 15–35% plausible band, but they are **different numbers**
and a comparison against market evidence must use the same base. Two traps
sit in this question: the weekly rent annualises by **× 52**, and the
statutory charge is quoted **per quarter**, so × 4. Reading it as monthly
would add $11,000 of phantom expense.
</details>

### G3

The property in G2 is held for **8 years**. Net income grows 3.5% p.a. The
terminal yield is 6.25% and selling costs are 2.5%. The required return is
8%.

(a) What is the sale price, and what income is it based on?
(b) What are the net sale proceeds, and their present value?
(c) A colleague capitalises year 8's income instead. What does that cost?
(d) State the exit multiplier and what it means.

<details><summary>Answer</summary>

**(a)** The sale happens at the end of year 8, so it is priced off **year 9**
income — the income the *next* owner will receive.

```
Year 9 net income = 88,941 × 1.035⁸ = $117,118.31
Sale price        = 117,118.31 / 0.0625 = $1,873,893.00
```

**(b)**

```
Selling costs at 2.5%              =  $   46,847.33
Net sale proceeds                     $1,827,045.68
PV = 1,827,045.68 / 1.08⁸          =  $  987,095.93
```

**(c)** Year 8 income is `88,941 × 1.035⁷ = $113,157.79`, giving a sale price
of `$1,810,524.64`. That **understates the exit by $63,368.36** — you have
priced the building on income you already collected.

**(d)** The exit multiplier is `1 / 0.0625 =` **16**. Every $1 of error in
year 9 net income becomes $16 of error in the sale price. That is why the
n+1 column deserves more checking than any other line in the model, and why
the expense-growth assumption matters more than it looks.
</details>

### G4

A model's sum of the present values of future cashflows is **$6,480,000**.
Acquisition costs are 5.5% of the purchase price.

(a) Give the maximum purchase price by both conventions.
(b) Show which one is internally consistent, and by how much the other
    misses.
(c) The asking price is $6,400,000. What do you advise?

<details><summary>Answer</summary>

**(a)**

```
Class method (as taught):  6,480,000 × (1 − 0.055)  =  $6,123,600.00
Gross-up (algebraic):      6,480,000 / 1.055        =  $6,142,180.09
```

**(b)** Test each against the definition "acquisition costs = 5.5% **of
price**":

```
Gross-up:   5.5% × 6,142,180.09 = 337,819.91
            6,142,180.09 + 337,819.91 = $6,480,000.00   ✓

Class:      5.5% × 6,123,600.00 = 336,798.00
            6,123,600.00 + 336,798.00 = $6,460,398.00   ✗
            — $19,602.00 short of the present value it should equal
```

The gross-up is consistent. The two answers differ by **$18,580.09**.

**(c)** Both answers are **below** the $6,400,000 asking price — by $276,400
and $257,820 respectively. The property does not meet the required return at
the asking price. Advise against bidding at $6.4m; the ceiling is about
$6.13–6.14m. Note that the choice of convention does not change the
recommendation, which is the honest thing to say: name both, show the gap,
and note that it is not decisive here.
</details>

### G5

A classmate's DCF summary reads:

```
Year 5 net income                        $  61,200
Sale price (year 6 NI $63,650 @ 5.5%)    $1,157,273
Less selling costs @ 2%                  $  23,145
Year 5 net cashflow                      $1,157,273
NPV (sum of PVs, years 1–5, at 9%)       $  871,400
Less acquisition costs @ 5%              $  43,570
Maximum purchase price                   $  827,830
```

Identify every problem. Which of them change the answer?

<details><summary>Answer</summary>

**Four problems, two of which change the answer.**

1. **The year 5 net cashflow is wrong.** It repeats the sale price. The
   final period's cashflow is *three* things:
   `61,200 + 1,157,273 − 23,145 =` **$1,195,328**. Understating it by
   $38,055 understates the sum of PVs by `38,055 / 1.09⁵ =` **$24,733** and
   the maximum price by about $23,496. **Changes the answer.** (This is the
   same shape as the error on the Week 3 lecture slide, where $1,325,720 is
   printed as a sale price when it is a net cashflow — see note 03 §6.5.)
2. **"NPV" is a mislabel.** $871,400 is a **gross present value** — the sum
   of the PVs of the future cashflows, with nothing netted off. The line
   beneath it then deducts acquisition costs, which would be double-counting
   if the figure really were an NPV. **Does not change the arithmetic**, but
   it changes what the number means, and in an exam it changes the mark.
3. **The acquisition cost line takes 5% of the present value, not of the
   price.** Grossing up gives `871,400 / 1.05 =` $829,904.76 rather than
   $827,830 — a difference of $2,074.76. **Changes the answer**, though not
   the decision.
4. **The sale price is right, and worth confirming rather than assuming.**
   `63,650 / 0.055 = $1,157,272.73` ✓, and it correctly uses **year 6**
   income for a year 5 sale. Selling costs `2% × 1,157,272.73 = $23,145.45`
   ✓. Do the check anyway: it is the only reason you can be confident the
   error is in the cashflow row and not upstream.
</details>

### G6

Explain why "maximum price payable" and "expected return" are the same
calculation, and what it means if they disagree.

<details><summary>Answer</summary>

They are the same equation solved for different unknowns:

```
Σ  CFt / (1+r)^t   =   price × (1 + T)
```

Leave the **price** unknown and fix `r` at your required return → the price
that makes the equation balance is the **maximum price payable**. Fix the
**price** at what is being asked and solve for `r` → the rate that makes it
balance is the **expected return**, i.e. the IRR.

Because it is one equation, the two answers must point the same way:

```
max price  <  asking price     ⟺     expected return  <  required return
max price  >  asking price     ⟺     expected return  >  required return
```

The Week 3 exercise: maximum price $895,988 against an asking price of
$930,000, and an expected return of 9.17% against a required return of 10%.
Both say no.

**If they disagree, one is wrong**, and the usual cause is that acquisition
costs were included on one side and not the other. The same exercise returns
**10.08%** if you solve the IRR against the bare $930,000 price and **9.17%**
against $930,000 plus 4% costs — pass and fail on the same property. Use the
identical outlay definition on both sides, and it is a free consistency check
on any model you build.
</details>

### G7

Your group's draft A1 model escalates gross rental income at 3.25% p.a. and
holds every outgoing constant across the seven-year hold. Critique that
decision and quantify the direction of the error.

<details><summary>Answer</summary>

**It is not conservative, it is optimistic**, and the mark is lost twice —
once for the number and once for not having noticed.

Holding outgoings flat while rent escalates widens the net margin every year
for free. Rates, insurance, land tax and management fees all move with CPI or
faster; land tax moves with unimproved capital value, which in a rising
market moves faster than CPI. There is no market in which a building's
outgoings are flat for seven years.

The direction is unambiguous: **net income, terminal value and NPV are all
overstated**. The damage compounds twice — once through seven years of
inflated net income, and again through the terminal value, because the
year 8 income being capitalised is itself inflated.

The unit's own Week 3 tutorial quantifies exactly this. Exercise 1 holds
$7,405 of outgoings flat while income grows 7%; Exercise 1a adds 3%
inflation to the expense line and nothing else. The maximum purchase price
falls from **$895,987.89 to $874,997.99** — $20,989.90, or **2.34%**. Most of
that damage arrives through the exit: year 6 net income falls only $1,179.42,
but at a 3.5% terminal yield that is $33,697.84 off the sale price.

**The fix**, and what to write in the assumptions sheet: two separate,
labelled, referenced rates — a market rental growth rate sourced from PCA or
agency forecasts, and an expense inflation rate sourced from an RBA or ABS
CPI series. Then say which outgoings are recoverable, because a recoverable
expense that escalates is a cost *and* a matching income, and a
non-recoverable one is a cost alone.
</details>
