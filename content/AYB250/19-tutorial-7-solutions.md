# Tutorial 7 Solutions — Superannuation and SMSFs

Worked solutions for `AYB250 Tutorial Questions Topic 7.docx`, checked
against the unit's answer slides (`AYB250 Topic 7 Tutorial Slides.pptx`).
Topic note: 11.

Every figure was recomputed in Python and the slides' arithmetic all
reconciles. Two additions the slides don't make: a Division 293 check on
the high earners in Q2 and Q4, and a cash-flow problem in Q6 (selling the
shares doesn't actually fund the purchase once CGT is paid).

## Question 1 — why SMSFs grew while other funds shrank

From the Week 7 table: SMSFs and small APRA funds went from **192,000 in
June 1999 to 673,384 in June 2026**, while industry funds fell from 101 to
19, corporate funds from 3,332 to 2, public sector funds from 41 to 27 and
retail funds from 238 to 48.

**Why SMSFs grew:**

- **Control:** members decide exactly how their savings are invested.
- **Flexibility:** a wider range of assets, notably business real
  property.
- **Estate and tax planning:** strategies tailored to the family.
- **Advice:** financial planners (and, previously, accountants)
  recommending SMSFs to clients.

**Why other fund types fell:**

- **High running costs** pushed small funds into **mergers**; scale
  lowers fees per member.
- **APRA's performance test** (since 2021): a MySuper product lagging its
  benchmark by more than 0.5% two years running is closed to new members,
  which accelerated consolidation.

Note the two trends are different measures: SMSF *numbers* rose, but the
merged APRA funds still hold most of the money ($1,631b in industry funds
alone against $1,059b in SMSFs and SAFs).

## Question 2 — Chitra, self-employed on $200,000

**She can contribute up to $32,500** concessionally (a personal deductible
contribution, since she has no employer SG), plus any carried-forward
unused cap if her total super balance was under $500,000 last 30 June.

| | Without contribution | With contribution |
|---|---|---|
| Assessable income | $200,000 | $200,000 |
| Deductions | 0 | ($32,500) |
| Taxable income | $200,000 | $167,500 |
| Tax payable | ($55,870) | ($43,045) |
| Medicare levy | ($4,000) | ($3,350) |
| Net income | $140,130 | $121,105 |
| Superannuation | 0 | $32,500 |
| Contributions tax (15%) | 0 | ($4,875) |
| Net super | 0 | $27,625 |
| **Net worth** | **$140,130** | **$148,730** |

```
Tax at 200 000: 51 370 + 0.45 × (200 000 − 190 000) = 55 870
Tax at 167 500: 31 020 + 0.37 × (167 500 − 135 000) = 43 045

Personal tax + Medicare saved = (55 870 + 4 000) − (43 045 + 3 350) = 13 475
Less contributions tax                                             (4 875)
Net tax saving                                                     $8 600
```

Verified. The slide's net worth rises by exactly $8,600.

> **Division 293 check.** Division 293 income is taxable income plus
> concessional contributions: `167 500 + 32 500 = $200 000`, under
> $250,000, so contributions tax stays at 15%. Above $250,000 the saving
> would shrink by another 15% of the contribution.

> **The saving isn't 45% of $32,500.** The deduction is taken across two
> brackets (45% on the first $10,000, 37% on the rest), and the fund
> taxes the contribution at 15%. Work the before-and-after table.

## Question 3 — Jordan and Jane's spare $1,000

Jordan earns $85,000; Jane earns $35,000. Both get 12% SG.

**Option 1: spouse contribution.** Jordan contributes $1,000 to Jane's
super as a non-concessional contribution.

```
Jane's income $35,000 < $37,000  →  full offset rate available
Offset = 18% × 1 000 = $180   (to Jordan; the $540 maximum needs $3,000)
```

**Option 2: non-concessional contribution with co-contribution.** Jane
contributes $1,000 to her own super.

```
Jane's income $35,000 < $49,293  →  maximum co-contribution
Co-contribution = 50% × 1 000 = $500   (paid into Jane's super)
Jordan's $85,000 is above both thresholds for either scheme in his own name
```

**Better off: the co-contribution, by `500 − 180 = $320`.**

Verified. (They can't claim both on the same dollars: the contribution is
either Jordan's into Jane's account, or Jane's own.)

## Question 4 — Troy's ANZ shares into his SMSF

Troy, 40, a self-employed plumber on $240,000 (45% marginal rate), bought
$40,000 of ANZ shares in January, now worth $42,000.

### (a) Can he contribute them in specie?

**Yes.** Troy is a **related party** of his fund, and a related party can
only contribute **ASX-listed securities (and other securities) or business
real property**. Listed ANZ shares qualify, at **market value** ($42,000).

### (b) Concessional or non-concessional?

**Claim $32,500 as a personal deductible (concessional) contribution**,
and treat the remaining **$9,500 as non-concessional** (well inside the
$130,000 cap).

```
Personal tax saved:  32 500 × 45% = 14 625
Medicare levy saved: 32 500 × 2%  =    650
Contributions tax:   32 500 × 15% = (4 875)
                                   --------
Net tax saving                     $10 400
```

> **Division 293 check.** Taxable income after the deduction and the
> gain is `240 000 − 32 500 + 2 000 = $209 500`; Division 293 income adds
> back the contribution, `$242 000`, still under $250,000. So 15% holds.
> The whole $32,500 is deducted in the 45% bracket, since $209,500 is
> above $190,000, so the flat 45% shortcut is valid here.

### (c) CGT on the transfer

Contributing the shares is a **disposal**, a CGT event, at market value.

```
Gain = 42 000 − 40 000 = $2 000
Held since January: under 12 months → no discount
Tax:     2 000 × 45% = $900
Medicare 2 000 × 2%  =  $40
Net benefit of the strategy = 10 400 − 940 = $9 460
```

Verified, matching the slide.

## Question 5 — the Akita fund's investments

| Decision | Complies? | Rule |
|---|---|---|
| (a) Beach house for members' exclusive use | **No** | **Sole purpose test**: investments must provide retirement benefits, not holidays |
| (b) Shares in Akita Pty Ltd (owned by two members) = 40% of assets | **No** | **In-house assets** limited to **5%** of fund assets |
| (c) Borrowed $100,000 for two years to pay a retiree | **No** | **Borrowing** generally banned. Borrowing to pay benefits is allowed only up to **10% of assets for up to 90 days** |
| (d) $200,000 loan to member Kita on commercial terms | **No** | **No loans or financial assistance to members**, commercial terms or not |
| (e) Bought land from member Akiro well below market value | **No** | **Arm's length**: all transactions on commercial terms. (Separately, a fund generally can't acquire assets from a member unless they are listed securities or business real property, the same related-party rule as Q4) |

> **Commercial terms don't rescue (d).** The member-loan ban is absolute.
> Arm's length is a separate rule, and meeting it doesn't override the
> others.

## Question 6 — Raymond and Evelyn's SMSF property swap

Fund assets: cash $10,000, shares $200,000 (bought 1997 for $50,000),
commercial property $400,000. Total $610,000. They want to sell the
shares to buy a $200,000 investment property.

**Tax on selling the shares** (fund in accumulation phase):

```
Gain = 200 000 − 50 000 = $150 000
Super fund CGT discount one-third (held over 12 months):
  Assessable = 150 000 × 2/3 = $100 000
Tax = 100 000 × 15% = $15 000
```

Verified. (In **pension phase** the gain would be tax free.)

**Beyond the tax:**

```
Cash after sale:              10 000 + 200 000 = 210 000
Less property purchase                          (200 000)
Left before tax                                   10 000
Less CGT                                         (15 000)
                                                ---------
Shortfall                                        ($5 000)   before stamp duty and legal costs
```

- **It doesn't fund itself.** The CGT bill plus transaction costs leave
  the fund short of cash.
- **Diversification collapses.** Property would be `600 000 / 610 000 ≈
  98%` of the fund's assets. The investment strategy must consider
  diversification, and this fails it.
- **Liquidity.** The slide flags illiquid assets: a fund near retirement
  needs cash to pay benefits, and it can't sell a quarter of a building.
- **Related-party and borrowing rules** still apply: the property can't be
  bought from a member (unless business real property on arm's length
  terms), and the fund can't borrow to close the gap.
- "Better return than the share market" is a prediction, and the fund
  gives up the franking credits the shares were earning.

## Question 7 — the Williams SMSF, 2026/27

| Item | Treatment | $ |
|---|---|---|
| Employer contributions (John) | Concessional: assessable | 15,000 |
| Personal deductible contributions (Ben) | Concessional: assessable | 25,000 |
| Non-concessional contributions (Jane) | **Not assessable** | — |
| Interest | Assessable | 1,200 |
| BRW shares: `(42 000 − 8 000) × 2/3` | Gain, one-third discount (held since 2019) | 22,667 |
| BRW dividend | Assessable | 2,100 |
| Franking credit `2 100 × 30/70` | Grossed up | 900 |
| Audit and accounting | Deductible | (3,500) |
| ATO supervisory levy | Deductible | (259) |
| **Taxable income** | | **$63,108** |

```
Tax at 15%                  63 108 × 15% = 9 466
Less franking tax offset                   (900)
Net tax payable                           $8 566
```

Verified (exact: taxable income $63,107.67, tax $9,466.15, net $8,566.15;
the slide rounds the gain to $22,667).

> **Three things students miss here.** Jane's $100,000 non-concessional
> contribution is **not** income to the fund. Ben's personal deductible
> contribution **is** (Ben claimed the deduction, so the fund pays the
> 15%). And the franking credit goes **in** as income and **out** as an
> offset: add $900, then subtract $900 from the tax.

## Checkpoint

<details><summary>Questions</summary>

1. Recompute Chitra's net saving if she only contributes $20,000.
2. Jane's income rises to $45,000. Which of Q3's options now pays more?
3. Why does Troy's CGT get no discount?
4. What happens to the Williams fund's tax if the BRW shares had been held
   for only 10 months?

</details>

<details><summary>Answers</summary>

1. Taxable income $180,000: tax `31 020 + 0.37 × 45 000 = 47 670`,
   Medicare $3,600. Saved `(55 870 + 4 000) − (47 670 + 3 600) = 8 600`;
   less contributions tax `3 000` = **$5,600**.
2. Spouse offset: $45,000 > $40,000, so no offset. Co-contribution:
   $45,000 < $49,293, still the full **$500**. The co-contribution wins by
   the whole $500.
3. He bought the shares in January of the same financial year, so they
   were held less than 12 months.
4. No one-third discount: gain `$34,000` instead of `$22,667` →
   taxable income `$74,441` (exact: 63,107.67 + 11,333.33), tax
   `$11,166.15`, net of the $900 offset **$10,266.15**, an extra $1,700.

</details>
