# Tutorial 6 Solutions — Risk Management and Insurance

Worked solutions for `AYB250 Tutorial Questions Topic 6.docx`, checked
against the unit's answer slides (`AYB250 Topic 6 Tutorial Slides.pptx`).
Topic note: 10.

Every figure was recomputed in Python. The Turner needs-approach tables
reconcile exactly. **One disagreement:** the Q5 answer slide caps income
protection at 75% of income, while the Week 6 lecture gives 70% for
policies issued after 1 October 2021. Both answers are shown.

## Question 1 — the Bellamys' risks

Ben (38) manages a supermarket; Laura (35) runs a home secretarial
business earning $30,000. Three children (8, 10, 13). Home worth $800,000
with a $500,000 mortgage. A current Camry and a 7-year-old Kia Sportage.

Everything here is **pure risk** (loss or no loss), grouped as personal,
property and liability:

| Exposure | Risks | Why it matters for this family |
|---|---|---|
| **Ben and Laura** | Premature death, disability, loss of income, health care costs | Three dependent children and a $500,000 mortgage rely on two incomes |
| **The children** | Illness, disability, health care | Medical costs; a parent may have to stop work to care |
| **The home** | Fire, storm, flood, burglary; liability to visitors | $800,000 asset, $500,000 still owed; the lender needs it insured |
| **The cars** | Damage, theft, injury to others, third-party property damage | The newer Camry is worth insuring fully; the older Kia less so |
| **Laura's business** | Loss of her income if she can't work; business liability; loss of equipment and records | Run from home: the home and contents policy may not cover business use unless disclosed |

The answer slide groups these as the parents, the kids, the home, the car
and the business. The general method: identify threats and vulnerability,
evaluate the financial consequence, and fund the large ones with insurance.

## Question 2 — Melissa and the hypertension

Melissa has default life cover in super and wants more. She was diagnosed
with hypertension six months ago, quit smoking, and her partner suggests
leaving it off the application.

**Advice: disclose it.**

- An insurance policy is a contract of **utmost good faith**, and the
  applicant has a **duty of disclosure**: every material fact that would
  influence a reasonable insurer in accepting the risk or setting the
  premium. A hypertension diagnosis is plainly material.
- The duty runs until the contract is finalised.
- If she hides it and later claims, the insurer may **avoid the contract
  or reduce the claim**. If the omission is found to be deliberate
  (fraudulent), the contract is **void from inception** and she has paid
  premiums for nothing.
- Answer every question honestly, including smoking history. The likely
  worst case of disclosing is a **loading** on the premium; the worst case
  of hiding it is no cover when her family needs it.

## Question 3 — "own occupation" or "any occupation" TPD?

**"Own occupation" attracts the higher premium.**

| Definition | You're disabled if… | Claims succeed | Premium |
|---|---|---|---|
| Any occupation | You can't work in **any** job suited to your education, training or experience | Less often | Lower |
| Own occupation | You can't do **your usual** job | More often | **Higher** |

A surgeon who loses a hand can still teach, so she fails "any occupation"
but meets "own occupation". The insurer prices in that extra likelihood of
paying.

## Question 4 — why Fiona pays more than Greg

Both 35, same $80,000 income, same occupation, both quoting a $60,000 a
year benefit.

| Waiting period | Fiona | Greg | Fiona pays more by |
|---|---|---|---|
| 30 days | $634.80 | $368.40 | 72.3% |
| 60 days | $429.60 | $203.40 | 111.2% |

```
Fiona: 634.80 → 429.60 saves $205.20 (32.3%) by waiting 60 days
Greg:  368.40 → 203.40 saves $165.00 (44.8%)
```

Verified. Age, occupation, income and the benefit are identical, so the
difference must come from **who is being insured**: the mortality and
morbidity factors behind the premium.

- **Gender and age:** per the answer slide, women typically cost more to
  insure for income protection in their 30s (cancer risk and
  child-bearing-related claims), men cost more in their late teens and
  early 20s, and men cost more again in their 40s (cardiovascular illness).
- **Smoker status:** a smoker is rated higher.
- **Loadings:** a pre-existing condition adds a percentage loading.

Also notice the longer waiting period cuts both premiums sharply, which is
the severity-limitation trade-off from the lecture.

## Question 5 — Isamu's income protection

Income $90,000, $300 in savings, 12 days of unused sick leave.

**Monthly benefit:**

```
Week 6 lecture rule (policies after 1 Oct 2021):
  70% × 90 000 / 12 = $5 250 a month
  (a policy may pay up to 90% for the first 6 months: $6 750)

Answer slide:
  75% × 90 000 / 12 = $5 625 a month
```

> **The lecture and the answer slide disagree.** The lecture says 70% of
> pre-tax income for policies issued after 1 October 2021; the slide's 75%
> is the older market maximum. Lead with $5,250 as the current rule, show
> $5,625 as the slide's figure, and confirm with your tutor which the exam
> expects.

**Waiting period: the shortest available, 14 days.** Isamu has almost no
buffer: $300 of savings. His 12 days of sick leave (about 2.4 working
weeks) roughly cover a 14-day wait, but nothing longer. A short waiting
period makes the policy expensive, so the medium-term plan is to **build a
cash buffer** and then choose a longer waiting period (30, 60 or 90 days)
to cut the premium.

## Question 6 — Mia's 2010 Falcon, worth $5,000

| Policy | Covers |
|---|---|
| Compulsory third party | Injury to other people (compulsory, through registration) |
| Comprehensive | Her own car plus other people's property |
| Fire, theft and third party property | Other people's property, plus her car for fire and theft only |
| Third party property | Other people's property only |

**Recommendation: third party property** (or fire, theft and third party
property if theft is a real risk where she parks). The big exposure is
hitting someone else's car, which can cost far more than $5,000, and TPP
covers exactly that. Comprehensive cover on a $5,000 car mostly pays
premiums (and an excess) to protect an asset that's cheap to replace; if
it's written off, she can absorb the loss or replace it.

## Question 7 — the Turners

Chris (39, self-employed butcher, 3 staff, draws $100,000) and Emma (37,
part-time teacher's aide, $15,000). Children 4, 6, 8, 10, dependent to 21.
Home $1,100,000, mortgage $600,000. Super: Chris $250,000, Emma $100,500.
Chris has $200,000 term life cover naming Emma; Emma has none. Shop assets
$150,000. Car lease $30,000 outstanding; personal debts $20,000. Expenses
$8,000 a month, falling $1,000 as each child turns 21. $200,000 set aside
for university. Life expectancy: Chris 82, Emma 86.

### (a) Cover needed

**Multiple approach** (6% return, from the text):

```
Chris:  100 000 / 0.06 = $1 666 667
Emma:    15 000 / 0.06 =   $250 000
```

**Needs approach, Chris's death.** The surviving parent needs $4,000 a
month until 65 (when super and later the age pension are available), plus
$1,000 a month per child until 21.

| Person | Age | Dependent to | Years | Calculation | Amount |
|---|---|---|---|---|---|
| Emma | 37 | 65 | 28 | $4,000 × 12 × 28 | $1,344,000 |
| Child 1 | 4 | 21 | 17 | $1,000 × 12 × 17 | $204,000 |
| Child 2 | 6 | 21 | 15 | $1,000 × 12 × 15 | $180,000 |
| Child 3 | 8 | 21 | 13 | $1,000 × 12 × 13 | $156,000 |
| Child 4 | 10 | 21 | 11 | $1,000 × 12 × 11 | $132,000 |
| **Total** | | | | | **$2,016,000** |
| Less Emma's income | | | 28 | $15,000 × 28 | ($420,000) |
| **Family support income** | | | | | **$1,596,000** |

```
Repay debts:  mortgage 600 000 + car lease 30 000 + personal 20 000 =   650 000
Education fund                                                       =   200 000
Family support income                                                = 1 596 000
                                                                       ---------
Total needs                                                            2 446 000
Less resources: Chris's super 250 000 + shop 150 000 + existing
                cover 200 000                                          (600 000)
                                                                       ---------
Additional cover for Chris                                            $1 846 000
```

**Needs approach, Emma's death:**

| Person | Age | Dependent to | Years | Amount |
|---|---|---|---|---|
| Chris | 39 | 65 | 26 | $1,248,000 |
| Children (as above) | | | | $672,000 |
| **Total** | | | | **$1,920,000** |
| Less Chris's income | | | $100,000 × 26 | ($2,600,000) |
| **Family support income** | | | | **$0** (income exceeds needs) |

```
Repay debts 650 000 + education 200 000 + family support 0  =  850 000
Less Emma's super                                             (100 500)
Cover for Emma                                                $749 500
```

All verified, and both match the answer slides.

> **Emma's $0 family support line is where the model is weakest.** Chris's
> income covers the family's cash needs, but Emma's unpaid work (care of
> four children, help in the shop) would have to be bought: childcare,
> after-school care, replacement staff. The needs approach as set up
> doesn't price it. A strong answer says so and suggests adding it, along
> with the funeral, medical and legal costs and emergency fund the slide
> also mentions.

### (b) "Insure less and invest the difference"

The needs figures are **undiscounted nominal sums** built from today's
expenses, so they ignore two things that pull in opposite directions:

- **Inflation** raises the family's future living costs over 28 years, so
  the real need is larger.
- **Investment returns** on the payout help, but returns must first cover
  inflation and tax before they add anything.

And the core problem with their plan: **the risk is today**. Investing to
build the difference takes years; if Chris dies next year, the family has
the lower cover and almost none of the investment. Insurance exists to
fund the gap *now*.

### (c) TPD, trauma and income protection

| Cover | Chris | Emma |
|---|---|---|
| **TPD** (lump sum if permanently unable to work) | Essential: the family depends on his $100,000 and the business; a lump sum clears debts and funds care | Worth considering: small income, but a permanent disability adds care costs and may stop Chris working full-time |
| **Trauma** (lump sum on heart attack, cancer, stroke, etc.) | Covers medical costs and time off while the business keeps running | Covers treatment costs and paid help at home during recovery |
| **Income protection** (monthly income while temporarily disabled) | **Essential**: self-employed, no sick leave, no employer. A butcher injury is a real risk. Premiums are deductible if held outside super | Limited value on $15,000 income, but still replaces some cash if she can't work |

### (d) Insuring the shop if it has to close

**Business overheads insurance.** It pays the business's fixed costs while
Chris can't work through illness or injury: rent, utilities, wages of
non-income-producing staff, loan repayments, insurance premiums, less any
income the shop still earns. It **doesn't pay Chris's own drawings**; his
income protection does that.

**How much:** the sum of those eligible fixed monthly overheads, for a
benefit period of up to 12 months, with a waiting period typically 14–90
days. The question gives no figures for the shop's overheads, so the
amount can't be calculated here; list the cost items to be totalled.

> Note the question's example, "the shop may have to close if there was a
> health risk", sounds like a business interruption event. Business
> overheads insurance is triggered by **the owner's** illness or injury,
> not by the business being closed for other reasons. Say which risk each
> policy covers.

### (e) Emma's breast cancer diagnosis three months in

**Her term life policy remains valid.** She answered the health
questionnaire honestly: she had no history of breast cancer when she
applied, so there was nothing to disclose and no breach of utmost good
faith. A condition arising **after** the contract starts is precisely what
the policy covers, and it's the basis for a claim, not grounds to void.

### (f) Other insurances

- **Private health insurance:** private hospital and medical cover for a
  family of six. At $115,000 of family income they are well below the
  Medicare levy surcharge threshold, so the reason is access and choice,
  not tax.
- **Motor vehicle:** Chris's car is leased with $30,000 owing, so it needs
  comprehensive cover (the lease will usually require it); Emma's $10,000
  van may only need third party property.
- **Home and contents:** a $1,100,000 home, with building insured at
  replacement value.
- **Business liability and professional covers:** public and product
  liability for a food business with customers on site, plus workers'
  compensation for his three staff (a statutory requirement for employers).

## Checkpoint

<details><summary>Questions</summary>

1. Why is "own occupation" TPD dearer than "any occupation"?
2. Recalculate Isamu's benefit under the lecture's 70% rule and the
   slide's 75% rule.
3. The Turners' needs approach gives $1,846,000 of extra cover for Chris.
   What three resources were deducted, and what is the gross need?
4. Emma dies. Why is the family support income nil, and what does that
   miss?

</details>

<details><summary>Answers</summary>

1. Its definition is less restrictive, so more claims succeed and the
   insurer charges more for the extra risk.
2. `90 000/12 × 0.70 = $5 250`; `90 000/12 × 0.75 = $5 625`.
3. Chris's super $250,000, the shop $150,000 and existing cover $200,000
   ($600,000 total), deducted from a gross need of $2,446,000.
4. Chris's $2,600,000 of income over 26 years exceeds the family's
   $1,920,000 of support costs. It ignores the cost of replacing Emma's
   unpaid care and shop work.

</details>
