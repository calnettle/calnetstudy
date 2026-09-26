# TOPIC 6 — The Financial Calculator

Week 6 is the one week of the unit with no new theory. It is a **tools**
week: the same TVM and DCF maths you have done in Excel since Week 1, done
on a handheld financial calculator instead. The recommended machine is the
**Sharp EL-738XTB**, and every keystroke below is for that model.

> **Read the deck's own health warning.** The Week 6 lecture body is almost
> entirely **screenshots of the Sharp EL-738 instruction manual**, not
> original slides. The examples reproduced here are the manual's examples,
> re-verified independently. Where your own calculator is a different model
> the *sequence* holds but the *menus* differ — the deck says so explicitly.

Reading: the calculator instruction booklet, plus whatever your model's
manual says. It is on Canvas.

## 12.1 Why Learn This At All?

The lecture's framing question is the good one:

> *"If Excel gave you the wrong answer, would you know it was wrong?"*

Four reasons the deck gives:

| Reason | What it means in practice |
|---|---|
| **Speed** | TVM, NPV and IRR without building a spreadsheet |
| **Mobility** | No laptop, no Excel and no internet on a site inspection |
| **Professional practice** | Clients and managers expect answers *in the meeting* |
| **Verification** | Independently check a feasibility, valuation or investment result before you advise on it |

The deck is explicit that **Excel remains the preferred tool for detailed
analysis**. The calculator is for quick calculations, testing assumptions,
and checking a spreadsheet result on the go. Understanding the keystrokes
means you understand the underlying finance rather than the software.

> **This is an examinable skill, not just a convenience.** You cannot take
> Excel into the exam. Every NPV, IRR, PMT and PV question in the final is
> a calculator question.

## 12.2 Setting Up — Do This Before Anything Else

Three setup operations. Get them wrong and every answer after is wrong.

```
Erase all memory     2ndF  M-CLR  1  =        (or the reset button on the back)
Clear entry/memory   2ndF  M-CLR  0  0
Set decimal places   SET UP  0  2             (FLOAT A = floating point)
```

Order of operations is plain **BOMDAS** — brackets, orders (powers and
roots), division and multiplication left to right, then addition and
subtraction left to right.

Memory, from the manual pages the deck reproduces:

| Memory | How to use |
|---|---|
| Temporary (A–H, X–Z) | `STO` + variable key to store; `RCL` + variable key to recall; `ALPHA` + variable key to place in an equation |
| Independent (M) | As above, plus add to / subtract from the stored value. `ON/C STO M` clears it |
| Last answer (ANS) | Holds the previous result |
| TVM variables | Recall with `RCL`. **You do not press `STO` to store a TVM value** — entering it and pressing the variable key stores it |

> **Clear between questions, every time.** The single most expensive
> calculator mistake in an exam is a leftover `FV`, a leftover cash-flow
> data set, or a leftover `P/Y` from the previous question. `2ndF CA`
> deletes all cash-flow data; `2ndF M-CLR` clears memory.

## 12.3 The TVM Solver — Five Keys

The TVM solver handles **equal, regular** cash flows: loans, annuities,
single lump sums. Five variables; enter any four, compute the fifth.

| Key | Variable | Sign convention |
|---|---|---|
| `N` | Total number of periods | Always positive |
| `I/Y` | Interest rate **per year**, as a percent | Enter `5.5`, not `0.055` |
| `PV` | Present value | Money *received* is positive |
| `PMT` | Payment per period | Money *paid* is negative |
| `FV` | Future value | Same convention as PV |

Compute with `COMP` followed by the key you want.

> **The sign convention is the trap, and it is the same trap as Excel's.**
> `PV` and `PMT` must have **opposite** signs. If you borrow $56,000
> (money in, `PV` positive) you repay $440 a month (money out, `PMT`
> negative). Enter both as positive and the calculator either returns a
> nonsense rate or refuses to solve. Use `+/−` before the payment.

`N` is **periods**, not years. The `2ndF ×P/Y` shortcut multiplies a year
count by the payments-per-year setting and stores the result in `N`:
typing `20 2ndF ×P/Y N` with monthly payments gives `N = 240`.

### Worked example 1 — solving for the interest rate

*A $56,000 mortgage loan, compounded monthly, requires monthly payments of
$440 over a 20-year amortisation period. What is the annual interest rate?*

```
20  2ndF  ×P/Y  N        →  N      = 240.00
56000  PV                →  PV     = 56,000.00
+/−  440  PMT            →  PMT    = −440.00
0  FV                    →  FV     = 0.00
COMP  I/Y                →  I/Y    = 7.17
```

**Answer: 7.17% p.a.** Verified independently: the monthly rate that
solves the annuity is 0.597746%, which is **7.1730% p.a.** nominal.

### Worked example 2 — solving for PV, and a deposit

*A house costs $180,000. The finance company charges 5.5% APR compounded
monthly on a 25-year loan. If you can afford $900 a month, how much can you
borrow, and how much deposit do you need?*

```
ON/C  25  2ndF  ×P/Y  N  →  N      = 300.00
+/−  900  PMT            →  PMT    = −900.00
5.5  I/Y                 →  I/Y    = 5.50
0  FV                    →  FV     = 0.00
COMP  PV                 →  PV     = 146,558.92
ON/C  180000  −  RCL  PV  =        = 33,441.08
```

**Borrow $146,558.92; deposit $33,441.08.** Both verified independently to
the cent.

> **Note what the second step does.** It answers a *deposit* question by
> subtracting borrowing capacity from price — exactly the move you make in
> Week 7's Exercise 5, where the LVR does the same job from the other end.

## 12.4 Cash Flow Mode — Uneven Cash Flows

The TVM solver only handles **equal** payments. A property DCF has uneven
ones, so it needs **cash flow mode**: `2ndF CASH`.

Entering data, one item at a time:

```
Single cash flow      <value>  DATA
Repeated cash flow    <value>  (x,y)  <frequency>  DATA
```

The deck's advice for this unit is to **enter each cash flow individually**
rather than use frequencies — slower, but far less error-prone, and it
makes editing possible.

Two variables live in this mode:

| Variable | Meaning | Default |
|---|---|---|
| `RATE (I/Y)` | The internal rate of return (IRR) | 0 |
| `NET_PV` | Net present value (NPV) | — (calculation only) |

`RATE (I/Y)` is **shared with** the TVM solver's `I/Y`. That sharing is
why a stale rate from a previous question can silently poison an NPV.

The full operating sequence:

```
1.  ON/C                     clear the display; confirm NORMAL mode
2.  <enter cash flow data>   one DATA press per period
3.  2ndF  CASH               begin DCF analysis
4a. For NPV:  enter the discount rate into RATE(I/Y), press ENT,
              move down to NET_PV, press ▼ then COMP
4b. For IRR:  press COMP on RATE(I/Y)
```

Editing, confirming and deleting — worth knowing, because re-entering
eight periods after one typo is how you run out of time:

| Task | Keys |
|---|---|
| Display entered data | `CFi`, then `▲` / `▼` to browse |
| Edit a value | Display it, type the new value, `DATA` |
| Delete a data set | Display it, `2ndF CLR-D` |
| Delete **all** data | `2ndF CA` |
| Insert a data set | Display the item it should come *before*, `2ndF INS-D` |
| Jump to the first item | `2ndF ▲` |

> **Setting a frequency to zero deletes the whole data set.** So does
> deleting a cash flow value — its frequency goes with it. If you are
> editing under time pressure, edit values, don't delete them.

## 12.5 Period 0 Is Not Optional

Cash flow mode indexes from `CF D0`. Period 0 is the **initial outlay** —
and it must be entered even when it is zero.

| Situation | What to enter at period 0 |
|---|---|
| Property purchase | The outlay, **negative** (e.g. `+/− 8000000 DATA`) |
| A stream with no initial investment | `0 DATA` |

Two consequences the tutorial deck states outright:

- Cash outlays must be entered as **negative** values.
- **IRR cannot be calculated without an initial negative cash flow.** With
  no sign change there is no root to find; the calculator will error.

## 12.6 Worked Example — NPV of an Uneven Stream

*Calculate the NPV of the following cash flows at a 9% discount rate.
There is no period 0, so enter $0.*

| Year `t` | Net cash flow `CFt` | Discount factor `1/(1.09)^t` | PV |
|---|---|---|---|
| 1 | $20,800 | 0.9174 | $19,083 |
| 2 | $21,320 | 0.8417 | $17,945 |
| 3 | $21,853 | 0.7722 | $16,875 |
| 4 | $22,399 | 0.7084 | $15,868 |
| 5 | $22,959 | 0.6499 | $14,922 |
| | | **Σ PVs** | **$84,692** |

Keystrokes:

```
2ndF  CA                 clear old cash flow data
0  DATA                  period 0 = $0
20800  DATA
21320  DATA
21853  DATA
22399  DATA
22959  DATA
2ndF  CASH
RATE(I/Y)  9  ENT
▼  to NET_PV  COMP       →  84,691.50
```

**Verified: $84,691.50**, which the deck rounds to $84,692. The slide's own
discount-factor column is rounded to two decimals (`1/1.19 = 0.84` for year
2 — that is `1.09² = 1.1881`), so the PV column it prints is a rounded
reconstruction, not the calculator's answer. Trust the total.

> **Why is there no period 0 here?** Because this is a pure income stream —
> a valuation of *incoming* cash, not an investment decision. Sum-of-PVs is
> the *value*, not a *net* present value. The word "net" only earns its
> keep once there is an outlay to net off. Note that this also means the
> stream has **no IRR** — no sign change, no root.

## 12.7 Worked Example — NPV *and* IRR Together

*What is the NPV at 10%, and the IRR, on this property cashflow?*

```
Purchased for                $8,000,000 including costs
Net income                   $1,000,000 per year for 8 years
Sold end of year 8 for      $12,000,000
```

The critical modelling step comes before any keystroke: **year 8 carries
two cash flows** — the final year's net income *and* the sale price. They
combine into one entry of `$13,000,000`.

| Year | Cash flow |
|---|---|
| 0 | −$8,000,000 |
| 1–7 | $1,000,000 each |
| 8 | $13,000,000 |

```
2ndF  CA
+/−  8000000  DATA       period 0, negative
1000000  DATA            ×7  (periods 1 to 7)
13000000  DATA           period 8: income + sale
2ndF  CASH
RATE(I/Y)  10  ENT
▼  to NET_PV  COMP       →  NPV
COMP on RATE(I/Y)        →  IRR
```

Verified independently:

```
NPV @ 10%  =  $2,933,014.76
IRR        =  16.01%
```

The tutorial deck asks two questions rather than giving the answers:

<details><summary>Is the IRR higher or lower than the discount rate — and what does that tell you about the NPV?</summary>

**IRR (16.01%) is well above the discount rate (10%).** The IRR is the
rate at which NPV equals zero; discounting at anything *below* it must
therefore produce a **positive** NPV. And it does: $2.93m.

The two measures always agree on the accept/reject decision for a single
conventional project — one sign change, no capital rationing. They
disagree only on *ranking* between competing projects, which is the Week 5
material (note 05, §10.6).
</details>

## 12.8 Calculator vs Excel — Which Gives What

| Task | Excel | Sharp EL-738 |
|---|---|---|
| PV of an annuity | `=PV(rate,nper,pmt)` | TVM: `N`, `I/Y`, `PMT`, `FV`, `COMP PV` |
| Loan payment | `=PMT(rate,nper,pv)` | TVM: `N`, `I/Y`, `PV`, `FV`, `COMP PMT` |
| Solve for rate | `=RATE(nper,pmt,pv)` | TVM: `COMP I/Y` |
| NPV, uneven flows | `=NPV(rate,CF1:CFn)+CF0` | Cash mode: `RATE(I/Y)` → `NET_PV` `COMP` |
| IRR | `=IRR(CF0:CFn)` | Cash mode: `COMP` on `RATE(I/Y)` |

> **The period-0 rule is inverted between the two tools, and this is the
> single most common cross-tool error.** Excel's `NPV()` **excludes**
> period 0 — you add it back outside the function. The calculator's cash
> flow mode **includes** period 0 as the first `DATA` entry. Excel's
> `IRR()` includes period 0; so does the calculator. Get these backwards
> and you will discount the outlay by one period, or not at all.

Both tools also share the rate-per-period rule: `I/Y` is entered as an
**annual** percent on the Sharp and converted internally using `P/Y`,
whereas Excel wants the **periodic** rate (`rate/12` for monthly). Mixing
the conventions is how a monthly model ends up discounted at 84% a year.

## Checkpoint

1. You enter `PV = 56000` and `PMT = 440`, both positive, then `COMP I/Y`.
   What happens, and why?
2. An income stream of five equal annual receipts with no purchase price.
   Can you compute its IRR?
3. In Excel you write `=NPV(10%,B2:B9)` where B2 holds the period-0
   outlay. What is wrong?
4. A property is bought for $8m and sold in year 8 for $12m, producing $1m
   a year. How many `DATA` entries do you make, and what are the first and
   last values?

<details><summary>Answers</summary>

1. **It errors or returns nonsense.** `PV` and `PMT` must have opposite
   signs — the solver is balancing an equation where money in must offset
   money out. Press `+/−` before `440`.
2. **No.** IRR needs at least one sign change. With no initial outlay
   there is no root. You can compute the sum of PVs (a value), not an IRR.
3. **The period-0 outlay gets discounted one period too many.** Excel's
   `NPV()` treats its first argument as period 1. Correct form:
   `=NPV(10%,B3:B9)+B2`.
4. **Nine entries.** `CF D0 = −8,000,000`; seven entries of `1,000,000`;
   then `CF D8 = 13,000,000` — the year-8 income **and** the sale price
   combined into one figure.
</details>

## Summary

- Week 6 is a tools week: same maths, different instrument. The deck body
  is reproduced Sharp EL-738 manual pages, so treat your own model's
  manual as authoritative for menus.
- Set up first: `2ndF M-CLR 1 =` to erase memory, `SET UP 0 2` for two
  decimals. Clear cash flow data with `2ndF CA` between questions.
- TVM solver = **equal** cash flows, five keys, `PV` and `PMT` opposite in
  sign, `N` in periods and `I/Y` as an annual percent.
- Cash flow mode (`2ndF CASH`) = **uneven** cash flows. Period 0 is always
  entered, even as `$0`. Outlays negative. No negative flow, no IRR.
- `RATE(I/Y)` is shared with the TVM solver — a stale rate is a silent
  wrong answer.
- Verified worked answers: 7.17% p.a.; PV $146,558.92 with a $33,441.08
  deposit; NPV $84,691.50 at 9%; NPV $2,933,014.76 and IRR 16.01%.
- Excel excludes period 0 from `NPV()`; the calculator includes it. Learn
  the difference once, now, rather than in the exam.

Next: **Topic 7 — Property Finance** (note 07), where the payments you can
now compute get attached to an actual DCF.
