# TOPIC 1 — Introduction to Finance and Fisher's Separation Theorem

Lectures 1 and 2 (first half). Peirson et al. (2015) Ch 1 (skim), Ch 2 §2.1–2.3.7, Ch 8 (skim), Ch 9 §9.1–9.2 (skim), Ch 10 §10.1–10.6 (skim).

This is the theory topic. It is worth taking seriously even though it has almost no arithmetic in it, because every rule you use for the rest of the unit — accept positive-NPV projects, discount at the market rate, ignore how the project is financed — is *derived* here. If you can draw the Fisher diagram you can reconstruct the whole decision framework from first principles.

---

## 1.1 What finance studies

**Finance examines the effective and efficient acquisition and utilisation of capital.** Two main areas:

| Area | Perspective | Question |
|---|---|---|
| **Corporate finance** | The firm | How do we raise and deploy capital to create value? |
| **Investment** | The investor | Which assets do we hold, and at what price? |

Both are about **creating value**. Related fields listed in the lecture: banking, risk management, financial economics, financial econometrics, insurance.

### The role of financial markets

Markets do two things the unit keeps coming back to:

1. **Markets establish value.** The best evidence of what something is worth is what someone will pay for it.
2. **Markets aggregate information.** Prices are the mechanism by which dispersed information gets summarised into a single number.

Capital and risk flow from **surplus units** (savers with more funds than immediate uses) to **deficit units** (borrowers with more uses than funds), either directly through **financial markets** or indirectly through **financial intermediaries**.

> Peirson et al. (2015, p. 210): "The capital market enables the suppliers of funds (the surplus units) and the users of funds (the deficit units) to negotiate the conditions on which funds will be transferred."

### Classifying markets

Four cuts, and you can be asked to distinguish any pair:

| Cut | Categories |
|---|---|
| Instrument | Equity · Debt · Currency · Commodity · Derivative |
| Issuance | **Primary** (new securities issued, funds go to the issuer) vs **Secondary** (existing securities traded between investors, no new funds to the issuer) |
| Venue | Exchange-traded vs Over-the-counter (OTC) |
| Maturity | **Money market** (< 12 months) vs **Capital market** (> 12 months) |

> **The MCQ that catches people.** "Long-term funds" means a maturity **greater than 1 year** — not greater than 10 years, and not debt only. Equity and debt both come in long-term forms. Tutorial 1 Q13 tests exactly this.

### Debt vs equity

| | Debt | Equity |
|---|---|---|
| Claim | Fixed, promised (interest + principal) | Residual — whatever is left |
| Priority in wind-up | Senior | Last |
| Payments guaranteed? | Contractually owed | Dividends are discretionary |
| Tax treatment | Interest is **deductible** to the firm | Dividends are **not** deductible |
| Risk / required return | Lower | Higher |
| Maturity | Has one | Ordinary shares are perpetual |

**Short-term debt (< 12 months):** bank overdraft, debtor finance, inventory loans, bridging finance, commercial paper, bills of exchange, short-term Eurocurrency funding.
**Long-term debt (> 12 months):** term loans, leases, debentures, unsecured notes, bonds, project finance, Eurobonds.
**Equity:** ordinary shares, preference shares.

---

## 1.2 The objective of the financial manager

### Maximise profit? No.

The lecture rejects profit maximisation in one line: *you could undertake an investment that, while profitable, does not yield an appropriate level of return.* A project that earns 4% is profitable. If the market rate is 10%, it destroys value.

Profit also has three structural problems the unit expects you to name: it ignores **timing** (a dollar of profit in ten years is not a dollar of profit today), it ignores **risk** (two projects with identical profit can have wildly different uncertainty), and it is an **accounting** number that can be moved around without any cash changing hands.

### Maximise value. Yes.

```
Maximising Firm Value
  = Maximising Present Value of Shareholder Consumption
  = Maximising Shareholder Utility
  = Maximising Shareholder Economic Welfare
```

Those four are stated as *equivalent* in the lecture. That equivalence is not obvious — it is exactly what Fisher's Separation Theorem proves.

### The three decisions and the funds identity

| Decision | Also called | Content |
|---|---|---|
| **Investment** | Capital budgeting | Project evaluation, asset pricing, asset acquisition, working capital, portfolio construction |
| **Financing** | Capital structure | Debt vs equity mix |
| **Dividend** | Payout policy | How returns are distributed to owners |

They are bound together by a sources-and-uses identity:

```
F + X = I + D

  Inflows                      Outflows
  F = new funds raised         I = investment outlay
  X = cash from operations     D = distributions to owners
```

Rearranged, `F = I − X + D`.

> **Tutorial 1 Q14 works this identity.** `F` is *negative* when the firm is retiring funds rather than raising them, which happens when there is a surplus after investment — i.e. when **dividends are paid out of what is left over after the investment decision**. It is not negative when there are no dividends and operations cannot cover the new investment; that case needs `F > 0`.

---

## 1.3 Fisher's Separation Theorem — the assumptions

Memorise these. They are the most reliably examined list in the topic.

1. **Two periods.** The present is P1, next period is P2.
2. **Certainty.** All cash flow opportunities are known, therefore no risk. The market rate of interest is the riskless rate.
3. **Perfect capital markets.** All players have equal and costless access to all information about cash flows, so there is only **one** interest rate. No transaction costs, no taxes, and no individual can affect prices.
4. **Rational investors.** All investors are utility or wealth maximisers who prefer more wealth to less.
5. **Managers act in shareholders' interests** — they maximise the value of the firm.

Three elements move inside the model: **the Company**, **the Shareholders**, and **Capital Markets**.

---

## 1.4 The three building blocks

### The Company — the production possibilities frontier

The company converts P1 dollars into P2 dollars by investing. Its **production possibilities curve** plots that conversion.

- Distance `0` to `E` on the P1 axis is the firm's **initial endowment**.
- The **slope at any point is `−(1 + IRR)`** — the marginal rate of return on the last dollar invested.
- The curve is **concave to the origin**, which is the graphical statement of **declining marginal returns**: the best project is taken first.
- Funds not invested are returned to shareholders as a dividend.

**Worked example (Lecture 1).** Four projects, each costing $50, initial endowment $200.

| Project | Invest | I₁ (cumulative) | D₁ | Return | D₂ |
|---|---|---|---|---|---|
| None | 0 | 0 | 200 | 0 | 0 |
| A | 50 | 50 | 150 | 160 | 160 |
| B | 50 | 100 | 100 | 60 | 220 |
| C | 50 | 150 | 50 | 20 | 240 |
| D | 50 | 200 | 0 | 10 | 250 |

Notice what declining marginal returns look like numerically: A returns $160 on $50 (IRR 220%), B returns $60 (20%), C returns $20 (−60%), D returns $10 (−80%). The frontier flattens as you move right.

### The Shareholder — indifference curves

Shareholders choose consumption `C₁` and `C₂` and derive utility from consuming. An **indifference curve** joins consumption bundles giving equal utility.

- **Convex to the origin**, because of a diminishing marginal rate of substitution between C₁ and C₂.
- Higher curves = more consumption = more utility.
- Indifference curves **cannot cross** (that would violate rationality).
- A steep curve means the owner prefers **present** consumption; a flat curve means they prefer **future** consumption.

### Capital Markets — the market opportunity line

Capital markets let P1 dollars become P2 dollars (**lending/saving**) or P2 dollars become P1 dollars (**borrowing**). Because certainty and perfect markets mean one rate for everyone, the line is **straight**, with slope `−(1 + i)`.

```
W₁ = D₁ + D₂/(1 + i)      ← wealth measured in P1 dollars
W₂ = D₁(1 + i) + D₂       ← the same wealth measured in P2 dollars
```

**Worked example (Lecture 1, i = 10%).** Income of D₁ = 100 and D₂ = 165.

| Point | Action | C₁ | C₂ |
|---|---|---|---|
| A | Neither lend nor borrow | 100 | 165 |
| B | Save 50 in P1 | 100 − 50 = **50** | 165 + 50(1.10) = 165 + 55 = **220** |
| W₁ | Borrow the full PV of D₂ | 100 + 165/1.10 = 100 + 150 = **250** | 165 − 165 = **0** |

Check the endpoints: `W₁ = 100 + 165/1.1 = 250` and `W₂ = 100(1.1) + 165 = 275`. Both describe the same line.

> **The interest used here is simple interest.** Lecture 1 works period-to-period so `FV = PV(1 + i)` — one period only. Do not carry a compounding exponent into the two-period model; there is only one period between P1 and P2.

---

## 1.5 Why capital markets are the piece that makes it work

### One shareholder, no capital market

The manager picks the point on the production frontier that touches the **highest attainable indifference curve**. The payoffs in P1 and P2 are the dividends D₁ and D₂, and the owner consumes exactly those: `C₁ = D₁`, `C₂ = D₂`.

### Multiple shareholders, no capital market

Three shareholders with three different consumption preferences. Which point does the firm choose?

**There is no unique non-dictatorial solution.** Whichever point is selected, two of the three shareholders fail to maximise their utility. Without a capital market, the investment decision is unavoidably a political one.

### Introducing the capital market

Now everything changes. With a market opportunity line available at every point:

- The firm's value at any production point B is `W₁ = D₁ + D₂/(1 + i)`.
- Sliding the production point until the market line is **tangent** to the frontier maximises `W₁`. Call that point **P**.
- At **P**, the slope of the frontier equals the slope of the market line: `(1 + IRR) = (1 + i)`, i.e. **IRR = i**.
- Owners then move along the market line by saving or borrowing to reach their preferred consumption.

At P the owner may save `F₁` in P1: `C₁' = D₁' − F₁` and `C₂' = D₂' + F₂`, and `W₁' > W₁` — a strictly higher wealth than the no-market optimum.

---

## 1.6 The theorem and its decision rule

> **Fisher's Separation Theorem.** In perfect capital markets, the firm's **investment decisions can be made separately from the owners' consumption decisions**. The firm accepts all projects with `IRR > i` because they increase firm value; it rejects all projects with `IRR < i`. The owners' consumption preferences play no part in that decision — owners use the capital market to obtain their desired consumption pattern.

With three owners at point P, Owner A borrows for extra C₁ and Owner B saves for extra C₂. **All three can now reach a higher indifference curve than any single production point could have given them.** The unanimity problem dissolves.

```
Accept:  IRR > i    ⟺   NPV > 0
Reject:  IRR < i    ⟺   NPV < 0
```

> **Tutorial 1 Q15 phrases the implication as an MCQ.** The correct statement is: *managers do not need to consider shareholders' consumption preferences when making their investment decisions.* Not "satisfy the majority", not "minimise dividends", not "split funds evenly".

---

## 1.7 NPV and IRR in the two-period model

These two formulas are on the mid-semester formula sheet and everything in Topics 1–2 is built from them.

```
NPV = X₂/(1 + i) − I₁

IRR = X₂/I₁ − 1
```

`I₁` is the initial outlay in period 1; `X₂` is the single return in period 2. **NPV is the additional value the firm accrues from the investment** — the present value of what comes back, less what goes in.

### Worked example — Lecture 1

`I₁ = 100`, `X₂ = 112`, `i = 10%`.

```
PV of X₂  = 112 / 1.10       = 101.818...
NPV       = 101.82 − 100     = 1.82
IRR       = 112/100 − 1      = 0.12  = 12%
```

IRR (12%) > i (10%), and NPV (+$1.82) > 0. The two rules agree, as the theorem requires.

### Worked example — Tutorial 1 Q8

An investment requires an outlay of $150 and returns $210 in one period. `i = 10%`.

```
NPV = 210/1.10 − 150 = 190.909 − 150 = 40.91
IRR = 210/150 − 1    = 0.40 = 40%
```

Accept: NPV is positive and IRR (40%) comfortably exceeds the required 10%.

### Worked example — Tutorial 1 Q9

Five projects, `i = 10%`.

| Project | I₁ | X₂ | IRR | NPV |
|---|---|---|---|---|
| 1 | 120,000 | 150,000 | 25.00% | **+16,363.64** |
| 2 | 145,000 | 165,000 | 13.79% | **+5,000.00** |
| 3 | 195,000 | 215,000 | 10.26% | **+454.55** |
| 4 | 75,000 | 80,000 | 6.67% | **−2,272.73** |
| 5 | 225,000 | 350,000 | 55.56% | **+93,181.82** |

Accept 1, 2, 3 and 5. Reject 4 — and notice that it is the *only* one with IRR below 10%, and the only one with negative NPV. In a one-outlay, one-return world the two rules can never disagree on accept/reject.

> **Where they *can* disagree is on ranking.** Project 5 has both the highest IRR and the highest NPV here, but that is luck. Project 1 has an IRR of 25% and Project 2 an IRR of 13.79%, yet if you could only pick one, NPV says Project 1 — the higher IRR happens to coincide. Reverse the scale and it will not. Ranking by IRR is only safe when projects are independent.

---

## 1.8 Valuing the firm and the owner's budget line

Two identical expressions for firm value, and you should be able to produce either:

```
W₁ = D₁ + D₂/(1 + i)                    ← from the dividend stream
W₁ = Endowment + Σ NPV of projects       ← from the value created
```

An owner holding fraction `w` of the firm has wealth `w × W₁` and a budget line:

```
c₁ + c₂/(1 + i) = w·D₁ + w·D₂/(1 + i)
```

Maximum P1 consumption is the whole thing: `c₁max = w·W₁` (borrow the full PV of the P2 dividend). Maximum P2 consumption is `w·W₁(1 + i)`.

### Worked example — Tutorial 1 Q12

Endowment $500,000, market rate 15%.

| Project | I₁ | X₂ | IRR | NPV |
|---|---|---|---|---|
| 1 | 160,000 | 182,000 | 13.75% | −1,739.13 |
| 2 | 185,000 | 205,000 | 10.81% | −6,739.13 |
| 3 | 163,000 | 195,000 | 19.63% | **+6,565.22** |
| 4 | 109,000 | 125,000 | 14.68% | −304.35 |
| 5 | 225,000 | 280,000 | 24.44% | **+18,478.26** |

**(a)** Undertake **Projects 3 and 5 only** — the only positive-NPV projects.

**(b)** Invested in period 1: `163,000 + 225,000 = 388,000`.

**(c)** `D₁ = 500,000 − 388,000 = 112,000`. `D₂ = 195,000 + 280,000 = 475,000`.

**(d)** Firm value:
```
W₁ = 112,000 + 475,000/1.15 = 112,000 + 413,043.48 = 525,043.48
```
Cross-check: `500,000 + 6,565.22 + 18,478.26 = 525,043.48`. ✔ The two routes must agree; if they do not, you have mis-added an NPV.

**(e)** A 10% owner has `d₁ = 11,200`, `d₂ = 47,500`, wealth `0.10 × 525,043.48 = 52,504.35`.

| Question | Working | Answer |
|---|---|---|
| (i) Max P1 consumption | `11,200 + 47,500/1.15` | **$52,504.35** |
| (ii) Consumes 10,000 in P1 | `47,500 + (11,200 − 10,000)(1.15)` | **$48,880.00** |
| (iii) Consumes 50,000 in P1 | `47,500 + (11,200 − 50,000)(1.15)` | **$2,880.00** |
| (iv) Wants 20,000 in P2 | `11,200 + (47,500 − 20,000)/1.15` | **$35,113.04** |

> **The trap in (iii).** Consuming $50,000 in P1 when your P1 dividend is only $11,200 means **borrowing** $38,800 and repaying it with interest out of the P2 dividend. The bracket goes negative and gets multiplied by `(1 + i)`, not divided. Dividing by 1.15 instead of multiplying is the single most common error in this question type — and both wrong answers appear as MCQ distractors.

### Worked example — Tutorial 1 MCQ 19–22

Two-period world, `i = 10%`, endowment $500,000.

| Project | I₁ | X₂ | IRR | NPV |
|---|---|---|---|---|
| 1 | 121,800 | 152,250 | **25%** | **+16,609.09** |
| 2 | 98,760 | 125,425 | **27%** | **+15,262.73** |
| 3 | 110,000 | 118,250 | **7.5%** | **−2,500.00** |
| 4 | 105,700 | 121,555 | **15%** | **+4,804.55** |

- **Q19 (IRRs)** → 25%, 27%, 7.5%, 15%.
- **Q20 (NPVs)** → $16,609, $15,263, ($2,500), $4,805.
- **Q21** Undertaking 1, 2 and 4: `I₁ = 326,260`, so `D₁ = 500,000 − 326,260 = 173,740`; `D₂ = 152,250 + 125,425 + 121,555 = 399,230`.
- **Q22** Only Project 1, D₁ = 378,200, D₂ = 152,250, owner of 20% wants $38,150 in P2:
```
d₁ = 0.20 × 378,200 = 75,640
d₂ = 0.20 × 152,250 = 30,450
c₁ = 75,640 + (30,450 − 38,150)/1.10
   = 75,640 − 7,000
   = 68,640
```
The owner wants *more* in P2 than their dividend provides, so they must **save** $7,000 today. Answer **$68,640**.

> **Q20's distractor list is a lesson in itself.** Option (a) — $30,450, $26,665, $8,250, $15,855 — is simply `X₂ − I₁`, undiscounted. Option (b) is `X₂/1.1` without subtracting the outlay. If you can name what a distractor computed, you can name what the marker is testing.

---

## 1.9 Reading the Fisher diagram in an exam

Tutorial 1 Q17–18 present the multi-shareholder diagram and ask which statement is correct/incorrect. Five facts get you through both:

| Feature of the diagram | What it means |
|---|---|
| Distance `O` to `E` on the P1 axis | The firm's **initial endowment** — not `O` to `W₁` |
| Distance `O` to `W₁` on the P1 axis | The **value of the firm** after investing to P |
| Points on the frontier **left of P** | Projects with **IRR > i** — accept them |
| Points on the frontier **right of P** | Projects with **IRR < i** — reject them |
| Horizontal line from P to the P2 axis | The **period 2 dividend D₂ itself**, not its present value. The present value of D₂ is `W₁ − D₁`, read on the **P1** axis |

And the conceptual one: **at point P, none of A, B or C is on their own optimal indifference curve until they trade in the capital market.** Statements claiming that investing to P lets all owners maximise utility *through the dividends alone* are false; it is the subsequent borrowing and lending that does it.

---

## Summary

- Finance is about valuing assets, and value comes from **cash, time and risk**.
- Markets establish value and aggregate information; they move capital from surplus to deficit units.
- The objective is **maximise firm value**, not profit — profit ignores timing and risk and is an accounting construct.
- Three decisions — **investment, financing, dividend** — tied by `F + X = I + D`.
- Fisher's five assumptions: **two periods, certainty, perfect capital markets, rational investors, managers act for shareholders.**
- Without capital markets and with multiple owners, there is **no unique non-dictatorial** production point.
- With capital markets, the firm maximises `W₁ = D₁ + D₂/(1+i)` at the tangency point **P**, where `IRR = i`, and owners reach their own preferred consumption by borrowing or lending.
- **Separation:** investment decisions are made independently of consumption preferences. Accept `IRR > i` ⟺ `NPV > 0`.
- `NPV = X₂/(1+i) − I₁`; `IRR = X₂/I₁ − 1`; `W₁ = D₁ + D₂/(1+i) = Endowment + ΣNPV`.

<details><summary>Checkpoint — five questions</summary>

1. List Fisher's five assumptions.
2. A firm with a $300,000 endowment and `i = 10%` invests in one project: `I₁ = 80,000`, `X₂ = 95,000`. Find NPV, IRR, D₁, D₂ and W₁ two ways.
3. Why does profit maximisation fail as an objective?
4. On the Fisher diagram, what does the distance `O` to `E` measure, and what does `O` to `W₁` measure?
5. An owner of 30% of the firm in Q2 wants to consume $47,400 in period 2. How much can they consume in period 1?

---

**Answers**

1. Two periods; certainty (so the market rate is the riskless rate); perfect capital markets (one rate, costless information, no taxes or transaction costs, price takers); rational investors who prefer more wealth to less; managers act in shareholders' interests.

2. `NPV = 95,000/1.10 − 80,000 = 86,363.64 − 80,000 = **6,363.64**`. `IRR = 95,000/80,000 − 1 = **18.75%**`. `D₁ = 300,000 − 80,000 = **220,000**`. `D₂ = **95,000**`. `W₁ = 220,000 + 95,000/1.10 = **306,363.64**`, and `= 300,000 + 6,363.64 = **306,363.64**`. ✔

3. It ignores the **timing** of returns, ignores **risk**, and is an accounting number rather than cash. A project can be profitable and still earn less than the market rate, in which case it destroys value.

4. `O`→`E` is the firm's **initial endowment** (P1 dollars available before any investment). `O`→`W₁` is the **value of the firm** after investing to point P — the endowment plus the NPV created.

5. `d₁ = 0.30 × 220,000 = 66,000`; `d₂ = 0.30 × 95,000 = 28,500`. Wanting $47,400 in P2 means saving: `c₁ = 66,000 + (28,500 − 47,400)/1.10 = 66,000 − 17,181.82 = **$48,818.18**`.
</details>
