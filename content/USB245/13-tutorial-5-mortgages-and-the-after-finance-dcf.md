# Tutorial 5 — Mortgages and the After-Finance DCF

<!-- notation:start -->
<details class="notation"><summary>Notation key — what the symbols in this note mean</summary>

| Symbol | Means |
|---|---|
| `PP` | Purchase price |
| `CPI` | Consumer price index — the inflation measure used for rent reviews |
| `PV` | Present value — a future amount expressed in today's dollars |
| `FV` | Future value |
| `NPV` | Net present value — PV of everything in minus everything out. Positive = accept |
| `IRR` | Internal rate of return — the discount rate that makes NPV = 0 |
| `DCF` | Discounted cash flow — the model: forecast the cashflows, discount them to today |
| `r` | Discount rate — the required return used to discount future cashflows |
| `g` | Growth rate (e.g. of rent) |
| `t` | The period number (year 1, 2, 3 …) |
| `n` | Number of periods — the holding period; n+1 is the year after it (used for the terminal value) |
| `LVR` | Loan-to-value ratio — loan ÷ property value |
| `PMT` | Loan payment each period (interest + principal) |
| `IPMT, INTₜ` | Interest part of a loan payment (the tax-deductible part) |
| `PPMT, AMORTₜ` | Principal part of a loan payment (reduces the balance; not deductible) |
| `OBₜ` | Outstanding balance of the loan after period t |

[Full USB245 notation key →](#/USB245/99-notation-key)

</details>
<!-- notation:end -->

The **Week 7 lab**. Source: `Week 07 Tutorial-3 (1).xlsx`, seven sheets.
Two halves: the mortgage arithmetic (Exercises 1–5, worked in Topic 7), and
then the payoff — bolting a loan onto the Week 3 residential DCF and
computing an **Equity IRR**.

> **Numbering note.** The Week 6 lab was calculator practice plus an
> assignment check-in, with no separate exercise set — it is covered inside
> [Topic 6](#/USB245/06-topic-6-the-financial-calculator), §12.6–12.7. This
> note picks up at the Week 7 lab.

Every figure below was recomputed independently in Python and agrees with
the supplied workbook to the cent, except where flagged.

## 15.1 The Sheets, and What Each One Is For

| Sheet | What it holds |
|---|---|
| `Exercise 1 and 2_Leverage` | The two leverage tables — ROE at 8% and at **12%** |
| `Loan repayments` | The formula reference: interest-only vs amortising, and the Excel function map |
| `Exercise 3 and 4` | Full 300-month repayment schedules, interest-only and amortising, side by side |
| `Exercise 5` | Affordability worked backwards from a monthly payment |
| `Week7Solution_EquityBT` | **The point of the week** — the Week 3 house DCF, after finance |
| `MonthlyCommPMTs` | Monthly amortisation for the commercial capstone |
| `Mthly Comm DCF Equity BT` | The Week 4 commercial building, monthly, after finance |

## 15.2 The Formula Reference Sheet

Worth transcribing in full, because it is the cleanest statement of the
week's maths and it doubles as the Excel function map.

**Interest only:**

```
PMTt = IPMTt = it × OLBt
```

Or in Excel: `= periodic interest rate × loan amount`. No principal is
repaid during the term, so payments are entirely interest and the
outstanding balance stays constant. The full principal is repaid in the
last period.

**Principal and interest (amortising):**

```
PMTt = IPMTt + PPMTt = PV / [(1 − (1+i)^−n) / i]
```

Or in Excel: `=PMT(rate, nper, PV, [FV], [type])`.

| Argument | Meaning |
|---|---|
| `rate` | Periodic interest rate |
| `nper` | Number of periods to amortise over |
| `PV` | Loan balance to be amortised |
| `FV` | *Optional* future value — use if the loan is **not** fully amortised |
| `type` | *Optional* — beginning- or end-of-period payments |

The sheet's four notes:

- The proportion of interest and principal changes each period while the
  **total payment stays constant**.
- The interest portion = periodic rate × outstanding loan amount.
- The principal portion = total payment − interest payment.
- **`PMT` must be recalculated if interest rates change** — using the
  *remaining* loan term, the new rate, and the current outstanding balance.

Related functions:

| Function | Returns |
|---|---|
| `PPMT(rate, per, nper, pv)` | Principal component of a **particular period's** payment |
| `IPMT(rate, per, nper, pv)` | Interest component of a particular period's payment |
| `CUMPRINC` | Cumulative principal paid **between two periods** |
| `CUMIPMT` | Cumulative interest paid between two periods |

### The worked reference examples

| Loan | Rate | Term | Periods/yr | Interest-only PMT |
|---|---|---|---|---|
| $450,000 | 4.5% | 5 yrs | 12 | **$1,687.50** |
| $500,000 | 7.5% | 10 yrs | 4 | **$9,375.00** |

```
$450,000 × 0.045 / 12 = $1,687.50
$500,000 × 0.075 / 4  = $9,375.00      ← quarterly, so ÷4 not ÷12
```

| Loan | Rate | Term | Periods/yr | Total PMT | Interest (p1) | Principal (p1) |
|---|---|---|---|---|---|---|
| $450,000 | 4.5% | 30 yrs | 12 | **$2,280.08** | $1,687.50 | $592.58 |
| $500,000 | 7.5% | 20 yrs | 4 | **$12,116.33** | $9,375.00 | $2,741.33 |

> **`Periods per year` is a separate input for a reason.** The second
> example is **quarterly** — `nper = 20 × 4 = 80`, `rate = 0.075/4`. Divide
> by 12 out of habit and every number is wrong. Note also that the
> interest-only payment and the *interest component* of the first
> amortising payment are identical ($1,687.50, $9,375.00) — of course they
> are: same balance, same rate, period one.

## 15.3 Exercises 1–5

These are worked in full, with the verification and the three source
errors, in [Topic 7](#/USB245/07-topic-7-property-finance-and-leverage):

| Exercise | Content | Where |
|---|---|---|
| 1 | Leverage at 8% → ROE 18% / 12% / 10% | §14.3 |
| 2 | Leverage at 18% (deck) or **12%** (workbook) → ROE inverts | §14.3 |
| 3 | Interest-only schedule, $1m @ 7% | §14.7 |
| 4 | Amortising schedule, $1m @ 7%, 25 yrs → PMT **$7,067.79** | §14.8 |
| 5 | Affordability backwards → $436,107.18, $545,133.98, $681,417.47 | §14.8 |

The three things to carry into the exam from them:

1. The lecture slide's `0.0583` should be **`0.005833`** (§14.7).
2. The slide's rows "358/359/360" are months **298/299/300** (§14.8).
3. Exercise 5(d) is genuinely ambiguous — the workbook divides by the LVR
   where it should arguably multiply. Both answers in §14.8.

## 15.4 The Main Event — `Week7Solution_EquityBT`

This is the **Week 3 residential DCF** (note 10) with a mortgage attached.
Same house, same rent, same growth — one new block of assumptions.

### Assumptions

```
Purchase price            PP    $850,000
Required return           r          10%
Rent                      i          $775 per week
Growth                    g            7% per annum
Term                      n            5 years
Mgmt fees, mtce, stat charges      $7,405 per annum   = (511.25 × 4) + 5,360
CPI                                    3%
Vacancy, reletting fees                5%   of gross income
Acquisition costs                      4%   × PP
Terminal yield            TY         3.5%
Selling costs                          3%
───────────────────────── new in Week 7 ─────────────────────────
Deposit saved                     $50,000
Interest rate                          7%
Loan term                             25 years
Loan amount                      $800,000   = PP − deposit
```

> **This model is geared to 94%, and nobody would lend it.** `Loan / PP =
> 800,000 / 850,000 = 94.1%`. It is a teaching model — it exists to make
> the leverage effect large and visible, not to be realistic. The
> assignment's AREIT targets **65% LVR**. Do not carry this gearing into
> A1 or A2.

### Period 0 — the equity contribution

```
Purchase price          −$850,000
Less purchase costs      −$34,000     = 850,000 × 4%
Plus loan received      +$800,000
───────────────────────────────────
Net Cash Flow            −$84,000     ← your equity outlay
```

> **Acquisition costs are paid out of equity, not out of the loan.** The
> deposit is $50,000 but the period-0 outflow is **$84,000** — the $50,000
> deposit *plus* the $34,000 of costs. Forgetting this understates the
> equity base and overstates the Equity IRR.

### The income lines (unchanged from Week 3)

| | Yr 1 | Yr 2 | Yr 3 | Yr 4 | Yr 5 | Yr 6 |
|---|---|---|---|---|---|---|
| Gross income (`$775 × 52`, growing 7%) | 40,300 | 43,121 | 46,139 | 49,369 | 52,825 | 56,523 |
| Less vacancy (5%) | (2,015) | (2,156) | (2,307) | (2,468) | (2,641) | (2,826) |
| Less expenses (CPI 3%) | (7,405) | (7,627) | (7,856) | (8,092) | (8,334) | (8,584) |
| **Net income (EBIT)** | **30,880** | **33,338** | **35,977** | **38,809** | **41,849** | **45,112** |

Year 6 exists only to price the sale — the `n+1` rule from Topic 3.

### The finance lines (new)

```
Less interest repayment    =IPMT($C$14, year, $C$15, $C$16, 0)
Less principal repayment   =PPMT($C$14, year, $C$15, $C$16, 0)
```

| | Yr 1 | Yr 2 | Yr 3 | Yr 4 | Yr 5 |
|---|---|---|---|---|---|
| Interest | (56,000) | (55,115) | (54,167) | (53,154) | (52,069) |
| Principal | (12,648) | (13,534) | (14,481) | (15,495) | (16,579) |
| **Net income after finance** | **(37,768)** | **(35,311)** | **(32,672)** | **(29,839)** | **(26,799)** |

All verified. Note the shape: interest falls slowly, principal rises, and
the total payment is constant at **$68,648.41** a year.

> **This property is heavily negatively geared — every operating year is
> cash-flow negative.** Net income of ~$31,000 against debt service of
> ~$68,600. The investor tops it up out of pocket for five years. The
> entire return sits in the terminal value, which is exactly what makes the
> terminal yield assumption so dangerous here.

> **The row is labelled "Net income (EBT)" and that label is wrong.**
> Earnings *before tax* would deduct interest only. This row deducts
> interest **and principal**, so it is a **cash flow to equity**, not an
> earnings measure — principal repayment is not a tax-deductible expense.
> The arithmetic is right for a cashflow; the label is not. Week 9's model
> reuses the same label and then, correctly, builds a *separate* taxable
> income line that excludes principal. Watch for that.

### The exit

```
Sale price          = Year 6 net income / terminal yield
                    = $45,112.27 / 0.035              = $1,288,921.96
Less selling costs  = −$1,288,921.96 × 3%             =   −$38,667.66
Less loan repaid    = −(800,000 − total principal repaid)
                    = −(800,000 − 72,737.73)          =  −$727,262.27
```

> **Terminal yield 3.5% against an entry yield of 3.6%** (`30,880 /
> 850,000`) — the model assumes the market *tightens* slightly over the
> hold. A 3.5% terminal yield on a suburban house is aggressive, and
> because all the return is in the exit, it dominates the answer. In A2
> this is the first number to put in a sensitivity table.

Note the loan repaid is the **outstanding balance**, not the original loan
— five years of principal repayments have reduced it by $72,737.73.

### The answer

| | Yr 0 | Yr 1 | Yr 2 | Yr 3 | Yr 4 | Yr 5 |
|---|---|---|---|---|---|---|
| **Net cash flow after finance** | (84,000) | (37,768) | (35,311) | (32,672) | (29,839) | **496,193** |
| Discount factor @10% | 1.0000 | 0.9091 | 0.8264 | 0.7513 | 0.6830 | 0.6209 |
| **PV** | (84,000) | (34,335) | (29,182) | (24,547) | (20,381) | **308,097** |

```
NPV  (sum of PVs)          $115,652.09
NPV  =NPV(C3,C33:G33)+B33  $115,652.09    ✓ agree
Equity IRR  =IRR(B33:G33)       24.39%
```

Both verified independently: **NPV $115,652.09, Equity IRR 24.3892%.**

> **Read the Equity IRR against the required return, and then against the
> ungeared return.** 24.39% versus a 10% required return looks
> spectacular — but that is leverage magnifying a spread (Topic 7, §14.3),
> not the property being good. It is also a return on a cashflow that is
> negative in every year but the last, funded by an investor who must have
> the cash to cover it. High EIRR, high risk, zero liquidity. Say that in
> a report; the number alone is not an analysis.

### The two Excel notes on the sheet

- `=NPV(discount_rate, cashflow_range)` — **period 0 must be added
  separately at the end.**
- `=IRR(cashflow_range, [guess])` — for this formula, **period 0 must be
  included** in the range.

Same inconsistency as always. It costs marks every year.

## 15.5 The Commercial Version

Two further sheets extend the same idea to the Week 4 multi-tenanted
commercial building, **monthly**:

- `MonthlyCommPMTs` — a 480-row monthly amortisation schedule.
- `Mthly Comm DCF Equity BT` — the monthly commercial DCF with the finance
  lines inserted, 74 columns wide.

The structure is identical to §15.4; only the periodicity changes. Two
things to get right when you build the monthly version yourself:

```
Monthly rate  = annual rate / 12
Monthly nper  = years × 12
IPMT/PPMT per = the month number, 1 to n
```

and the discount factor becomes `1/(1 + r/12)^t` with `t` in months. This
is the pattern A1 requires — see note 17, §4.4.

## Checkpoint

1. The model's period-0 outflow is $84,000 but the deposit is $50,000.
   Where does the other $34,000 come from, and why is it not in the loan?
2. Total annual debt service is constant at $68,648. Why do the interest
   and principal rows change every year?
3. Year 5's "less loan repaid" is $727,262, not $800,000. Why?
4. The Equity IRR is 24.39% and the property's required return is 10%.
   Does that mean the investor should buy?

<details><summary>Answers</summary>

1. **Acquisition costs** — $850,000 × 4% = $34,000, paid from equity.
   Lenders size the loan against the **property value**, not against
   value plus your transaction costs; stamp duty and legals are the
   buyer's problem. This is why the real-world cash needed to buy always
   exceeds the deposit.
2. Because it is a **fully amortising** loan. The payment is fixed, but
   `INTt = OBt−1 × r` falls as the balance falls, and `AMORTt = PMT −
   INTt` therefore rises to fill the gap. Constant total, shifting
   composition.
3. Because five years of `PPMT` have already repaid **$72,737.73** of
   principal. What you repay at exit is the **outstanding balance**, not
   the original advance. `800,000 − 72,737.73 = 727,262.27`.
4. **Not on that number alone.** Three caveats: (a) the EIRR is a
   *leveraged* return at 94% LVR, which no lender would write and which
   magnifies downside just as hard; (b) the cashflow is **negative in
   every year except the exit**, so the investor needs the liquidity to
   fund it for five years; (c) essentially the whole return depends on a
   **3.5% terminal yield** five years out. Sensitivity-test the terminal
   yield before answering.
</details>

## Summary

- The Week 7 lab attaches a mortgage to the Week 3 house and produces the
  unit's first **Equity IRR**.
- Three new lines: **+loan received** at period 0, **−interest** and
  **−principal** each year, **−outstanding balance** at exit.
- Period 0 becomes the **equity contribution**: price + costs − loan =
  $84,000, not the $50,000 deposit.
- `PMT` is constant; `IPMT` falls and `PPMT` rises. Recalculate `PMT` if
  the rate changes, using the remaining term and current balance.
- Verified results: **NPV $115,652.09** at 10%, **Equity IRR 24.39%**.
- The model is geared to 94% and negatively geared in every operating
  year, with all return in a 3.5% terminal yield. A teaching model, not a
  template for A1/A2 (the AREIT wants 65% LVR).
- The "Net income (EBT)" label is wrong — it deducts principal, which is
  not deductible. Keep cashflow and taxable income as separate lines.
- Excel's `NPV()` excludes period 0; `IRR()` includes it.

Next: [Tutorial 6 — Depreciation](#/USB245/14-tutorial-6-depreciation).
