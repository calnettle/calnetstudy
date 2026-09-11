# Topic 6 — Risk Management and Insurance

Week 6. Source: `AYB250 Week 6.pptx`, slides 1–56. Reading: Chapter 7.
Tutorial solutions: note 18.

Covers the two kinds of risk, the five-step risk management process, how
insurance works (pooling, underwriting, utmost good faith), sizing life
cover by the multiple and needs approaches, the disability covers (TPD,
trauma, income protection), Medicare and private health insurance, and
property, motor and liability cover. Every worked figure was recomputed in
Python. The deck's arithmetic reconciles, but the Topic 6 **tutorial**
slides use a different income protection percentage from this lecture
(see the income protection trap below).

## Two kinds of risk

| | Speculative risk | Pure risk |
|---|---|---|
| Outcomes | Loss **or gain** | Loss or no loss, never a gain |
| Examples | Gambling, starting a business | Death, illness, fire, theft, being sued |
| Insurable? | No | Yes |

Pure risk can be **personal**, **property**-related, or arise from
**liability**. Risk management, and insurance, deal only with pure risk.

> **Insurance never covers speculative risk.** If an exam scenario
> involves a chance of *gain* (a share investment, a new business
> venture), the risk management answer is diversification or structure,
> not a policy.

## The risk management process

Five steps, in order:

```
1. IDENTIFICATION   which material risks exist?  (threats × vulnerability)
2. EVALUATION       what would each cost?        (lost income, costs, replacement)
3. CONTROL          reduce the chance or size    (alarms, smoke detectors, safe driving)
4. FINANCING        pay for what remains         (insurance, savings, retention)
5. REVIEW           repeat periodically          (new risks, changed cover, law changes)
```

The evaluation step sets the treatment. **When the potential loss is
large, insurance may be the only option. When it is small, other
treatments may do** — savings, sick leave, a higher excess.

## How insurance works

- **Pooling:** many people pay premiums into a fund that pays the few who
  suffer a loss.
- **Premium:** the contribution to the pool.
- **Underwriting:** splitting the pool into risk categories and charging
  each a different premium.

| Insurer type | What it covers | Notes |
|---|---|---|
| Life insurers | Death or disablement of the insured | **Non-indemnity** — pays the agreed sum, not the actual loss. Often held inside super. Largest: TAL, AIA, Zurich (incl. ClearView) |
| General insurers | Everything except life: home, contents, car, liability, pet | Largest: IAG, Suncorp, QBE, Allianz |
| Health insurers | Hospital and "extras" (dental, optical, physio, chiro) | Largest: Medibank Private |

**Intermediaries:** an **agent** arranges cover for the client *with the
insurer*; a **broker** is the *client's* representative, shopping for the
best terms. **Regulators:** APRA (prudential supervision of insurers) and
ASIC (consumer matters). Same split as note 01's regulator table.

## Utmost good faith and the duty of disclosure

An insurance policy is a contract, and both parties must enter it with
**utmost good faith**: a high degree of honesty, and a duty to take
reasonable care not to misrepresent.

The duty of disclosure runs **during negotiation, up to when the contract
is finalised, and again at renewal**. If an applicant withholds a material
fact:

| What happened | Consequence |
|---|---|
| Material fact not revealed or withheld | Contract may be **voidable**; insurer may reduce cover on a claim |
| Innocent misrepresentation | Contract can be rendered **voidable** |
| Fraudulent misrepresentation | Contract is **void from inception** |

> **Voidable and void are different answers.** Voidable means the insurer
> *may* avoid the contract or cut the claim. Void from inception means the
> contract never existed. Only fraud gets you to void. And a condition
> that **first appears after** the contract starts is not a disclosure
> problem at all; it is exactly what the policy is for (Tutorial 6, Q7e).

## Terms and severity limitations

Standard terms come from the **Insurance Contracts Regulations 2017**.
Insurers limit their liability with **severity limitations**, meaning some
risk stays with the insured:

- **Excess:** the insured pays the first part of every claim.
- **Waiting period:** no benefit until a set period has passed.

**The standard flood definition** (introduced after the 2010–11 Queensland
floods): the covering of normally dry land by water escaping from a lake,
river, creek or other natural watercourse, reservoir, canal or dam.

> **Storm surge, tidal flooding and rainfall run-off are not "flood".**
> Many policies don't automatically cover storm surge, and king tides and
> high tides are a common exclusion. A coastal client with "flood cover"
> may still be uninsured for the event most likely to hit them.

## Life insurance

Life cover protects dependants from the financial effect of a premature
death. The questions: who would be affected, are there dependants, how
badly, and what cover is appropriate? The financial consequences to fund
are funeral costs, final medical expenses, clearing debts, emergency funds
and adjustment expenses.

### The multiple approach

Start from income. Find the lump sum that, invested at a realistic rate,
replaces that income forever:

```
Cover = annual income / expected rate of return
```

**Worked example** (deck): income $120,000, return 6%.

```
Cover = 120 000 / 0.06 = $2 000 000
$2 000 000 × 6% = $120 000 a year, in perpetuity
```

Verified.

> **The multiple approach ignores the actual family.** It doesn't know
> about the mortgage, how many children there are, how long they'll be
> dependent, or the assets already held. It is quick, and it will over-
> or under-insure. When a question gives you debts, dependants and assets,
> it wants the needs approach.

### The needs approach

```
Cover = (debts to clear + future living costs + other needs)
        − (resources already available: super, savings, existing cover)
```

Steps: calculate the amount needed (who are the dependants, what are their
living expenses, how long), then subtract current resources.

**Worked example** (deck): James, 40, married to Anna, children 8 and 10.

```
Needs:     funeral + pay down mortgage       385 000
           ongoing family living expenses    780 000
           children's university             100 000
                                           ---------
                                           1 265 000
Resources: super 200 000 + savings 65 000   (265 000)
                                           ---------
Cover needed                               $1 000 000
```

Verified. The full-scale version (the Turners, with a dependant-years
table) is Tutorial 6 Q7 in note 18.

### Life policies and premiums

The **term life** policy is the most common, usually with a **terminal
illness** benefit included. Features: indexed sum insured, special
sum-insured increases, guaranteed renewal, multiple lives, policy
duration, convertibility.

Premiums depend on the type and amount of cover and are set on
**mortality, interest and expense**. Mortality depends on demographics:
age, gender, smoker status. A **loading** is a percentage increase on the
standard premium, usually for a pre-existing condition.

| Premium structure | How it behaves | Suits |
|---|---|---|
| **Stepped** | Priced on each year's risk; rises with age, can become unaffordable | Short-term need |
| **Level** | Constant; overpays early, cheaper over long periods | Long-term need |
| **Unit-based** (not in text) | Premium constant, cover falls over time | — |

**Common exclusions:** suicide within **13 months**, self-inflicted harm,
war. Occasionally hazardous pastimes or occupations, though many of these
are now insured with a loading instead.

## Disablement covers

Three policies for three kinds of disability:

| Cover | Pays | Trigger |
|---|---|---|
| **TPD** — total and permanent disablement | Lump sum | Permanently unable to work (definition-dependent) |
| **Trauma** (critical illness, crisis) | Lump sum | A listed event occurs |
| **Income protection** | Monthly income | Temporarily unable to work |

### Total and permanent disablement

Usually an extension of a term life or trauma policy. The lump sum funds
two things: medical and disablement costs, and ongoing support of the
client and dependants.

The **definition is everything**. A common one is either the total and
permanent loss of both hands, both feet, one hand and one foot, sight in
both eyes, or a hand or foot and one eye; **or** illness or injury that
has stopped the person working in their usual occupation for at least six
months and will prevent them ever again working in that occupation or any
other they held in the previous five years.

| Definition | Restrictiveness | Premium |
|---|---|---|
| **"Any occupation"** | Extremely restrictive: if you can work in *any* job, you are not disabled | **Lower** |
| **"Own occupation"** | Less restrictive: disabled if you can't do the job you had before | **Higher** |

> **The easier it is to claim, the more it costs.** "Own occupation"
> pays in more situations, so it attracts the higher premium. Tutorial 6
> Q3 is exactly this, and "any occupation costs more because it covers any
> job" is the backwards answer.

### Trauma

Pays a lump sum when a specified event happens, as a life-policy
extension or standalone. About 90% of claims are **heart attack, coronary
artery bypass, stroke, malignant cancer and terminal illness**. The event
must meet the policy's definition, and definitions differ between
insurers. Limits: often a **90-day waiting period**, similar exclusions to
life cover, usually only for people **under 55**, and an upper limit of
**$1,000,000**.

### Income protection

Before insurance, check the other sources a person unable to work might
have: sick leave, workers' compensation, compulsory third party, sickness
allowance, a disability pension.

```
Benefit   generally 70% of pre-tax monthly income
          (up to 90% for the first 6 months)   — policies issued after 1 Oct 2021
Benefit period   2 years, 5 years, to age 65, or even 70
Waiting period   14 days to 2 years   (longer wait = cheaper premium)
Partial disablement   part benefit may be payable
```

**Worked example:** income $84,000.

```
Monthly benefit (70%)             = 84 000 / 12 × 0.70 = $4 900
First 6 months, if the policy allows 90% = 84 000 / 12 × 0.90 = $6 300
```

**Tax treatment:** premiums are generally **deductible** against
assessable income if the policy is held **outside super** and doesn't
compensate for physical injury. **Claims are assessable income.**

> **70%, not 75%.** The Week 6 lecture gives the post-October 2021 rule
> as 70% of pre-tax income (up to 90% for the first six months). The
> Topic 6 **tutorial** answer slide for Isamu (Q5) uses "maximum is 75% of
> income", which is the pre-2021 market norm, and gets $5,625 where the
> lecture rule gives **$5,250**. Show the lecture figure and note the
> difference; confirm with your tutor which one the exam expects.

> **Waiting period trades against savings.** Someone with little cash and
> no sick leave needs a short waiting period (expensive). Build a cash
> buffer or bank sick leave and they can choose a longer wait and a
> cheaper premium.

### Insurance inside super

Term life and TPD can be held through super. Premiums are **substantially
cheaper** (group insurance), but claims may have tax consequences, and
because the trustee otherwise has discretion, a **binding death benefit
nomination** naming a dependant is advisable (note 13).

### Business overheads insurance

Covers a business's **fixed expenses** while the owner can't work through
illness or injury: rent, utilities, wages of non-income-producing staff,
loan repayments, insurance premiums, less any income received. It keeps the
business running. It does **not** cover the owner's own drawings or
salary, which is income protection's job. Benefit period **up to 12
months**; waiting period typically **14–90 days**.

## Health: Medicare and private health insurance

**Medicare** gives free treatment as a public patient in a public
hospital, funded by the Medicare levy. Outside hospital, Medicare pays
**85% of the scheduled fee**. Bulk billing means the doctor accepts the
scheduled fee as full payment. Otherwise the patient pays the gap.

```
Gap = fee charged − Medicare benefit
    = fee charged − 85% × scheduled fee
```

**Worked example** (deck): scheduled fee $100, doctor charges $120.

```
Medicare pays = 100 × 0.85 = $85
Gap           = 120 − 85  = $35
```

Verified. Medicare doesn't cover dental, glasses or cosmetic surgery.

**Private health insurance** costs extra on top of the Medicare levy. The
government pushes people into it three ways:

| Lever | How it works |
|---|---|
| **Rebate** | Up to 32% of the premium, depending on family income (and age) |
| **Medicare levy surcharge** | High earners without private *hospital* cover pay 1–1.5% extra. The tiers and the family threshold are in note 04 |
| **Lifetime Health Cover loading** | 2% loading for every year over 30 without hospital cover, maximum 70%, removed after 10 years of continuous cover |

**LHC worked example:** a person who first takes out hospital cover at 36.

```
Loading = 2% × (36 − 30) = 12%   on top of the hospital premium
Removed after 10 continuous years of cover (from age 46)
First cover at 55: 2% × 25 = 50%;  at 70: 2% × 40 = 80% → capped at 70%
```

Compare policies at **privatehealth.gov.au**: decide the cover type
(hospital, extras, combined, ambulance), who's covered (single, couple,
family) and where you live.

> **The MLS is Topic 3 tax; the LHC loading is Topic 6 insurance.** They
> push in the same direction but are different mechanisms. The MLS is a
> levy on *income* that stops the year you hold hospital cover. The LHC
> loading is a surcharge on the *premium* that depends on the age you
> first took cover and lingers for 10 years. Extras-only cover avoids
> neither.

## Property: home and contents

Risk management applied to the home: **identify** (fire, storm, flood,
water damage, burglary, vehicle impact, earthquake); **evaluate** (building
and contents only, because the land remains); **control** (smoke detectors,
alarms, deadlocks); **finance** (adequate insurance).

| Home insurance basis | Pays |
|---|---|
| **Replacement value** ("new for old") | Cost to rebuild or replace |
| **Indemnity / market value** | Value at the time of loss, after depreciation: doesn't fairly compensate |

The insurer's maximum liability is the **sum insured**, and the policy may
be subject to **co-insurance** (an underinsurance penalty). The deck names
it without giving the formula; see Chapter 7.

**Contents** are usually covered at replacement value, and the onus is on
the insured to prove the loss (receipts, photos). Two policy styles:
**accidental damage** (everything unless excluded) or **defined events**
(only listed risks). Extras can include temporary accommodation, food
spoilage and burnt-out motors. Common exclusions: home **unoccupied for
more than 60 days** and not disclosed, deliberate damage, structural
defects or poor maintenance, tree lopping, illegal activities, and
high-value items unless separately listed.

**Liability** cover for the property (e.g. a visitor injured on site) is
usually part of the home policy, typically **$5 million to $20 million**.

## Motor vehicles

| Policy | Covers |
|---|---|
| **Compulsory third party (CTP)** | Legal liability for **bodily injury** to third parties |
| **Comprehensive** | Damage to **your vehicle** plus third parties' **property** |
| **Fire, theft and third party property** | Third-party property plus fire and theft of your car only |
| **Third party property** | Third parties' property only |

> **Match cover to the car's value.** Third-party losses can run into the
> millions, so third-party property cover is essential for everyone. But
> comprehensive cover on a $5,000 car mostly insures a car that's cheap to
> replace (Tutorial 6 Q6).

**Other insurances:** sickness and accident (a restricted income
protection policy), consumer credit insurance (covers repayments on a
finance contract), travel (luggage, medical, personal liability).

## Liability risk

Legal liability arises three ways:

| Source | Example |
|---|---|
| **Common law** (negligence) | A broken stair injures someone; a negligent financial adviser |
| **Statute law** | Employer fails to provide safety equipment; landlord rents out unsafe wiring |
| **Contract law** | Agreeing in a contract to be liable for loss or damage |

Personal liability risk is increasing and claims can run to many millions.
**Professional indemnity (PI)** insurance covers legal defence costs,
damages and settlements from negligent advice, services or breach of duty.
It is often mandatory for accountants, financial advisers, lawyers and
health professionals, and it **doesn't cover deliberate dishonesty or
fraud**.

## Review

Risk management is never finished. Review periodically to catch new
risks, reassess existing ones, test whether current cover still fits, and
keep up with legal changes. **Underinsurance creeps in as circumstances
change**: a new mortgage, a child, a pay rise, a renovation.

## Checkpoint

<details><summary>Questions</summary>

1. Classify: (a) buying shares, (b) your house burning down, (c) being
   sued by a client.
2. Using the multiple approach, what cover does someone earning $95,000
   need at an assumed 5% return?
3. A client needs $300,000 to clear debts, $600,000 for family living
   costs and $50,000 for education. They have $150,000 in super, $40,000
   in savings and $100,000 of existing cover. Needs-approach cover?
4. Income $84,000. Monthly income protection benefit under the post-2021
   rule, and the maximum for the first six months?
5. A specialist charges $150 for a service with an $80 scheduled fee.
   What does Medicare pay and what is the gap?
6. What LHC loading applies to someone taking out hospital cover for the
   first time at 36? When does it come off?
7. Which costs more, "own occupation" or "any occupation" TPD, and why?
8. An applicant forgets to mention a past condition (innocent), and
   another deliberately hides one. What is the consequence of each?

</details>

<details><summary>Answers</summary>

1. (a) Speculative (a gain is possible): not insurable. (b) Pure,
   property. (c) Pure, liability.
2. `95 000 / 0.05 = $1 900 000`
3. ```
   Needs     300 000 + 600 000 + 50 000 = 950 000
   Resources 150 000 +  40 000 + 100 000 = 290 000
   Cover     950 000 − 290 000          = $660 000
   ```
4. `84 000 / 12 × 0.70 = $4 900` a month; up to
   `84 000 / 12 × 0.90 = $6 300` for the first six months.
5. `80 × 0.85 = $68` from Medicare; gap `150 − 68 = $82`.
6. `2% × (36 − 30) = 12%`; removed after 10 years of continuous cover.
7. Own occupation. Its definition is less restrictive, so claims succeed
   more often and the insurer charges more.
8. Innocent: the contract is **voidable** (and the claim may be reduced).
   Fraudulent: **void from inception**.

</details>

## Summary

- Pure risk (loss or no loss) is insurable; speculative risk (loss or
  gain) is not.
- Process: identify → evaluate → control → finance → review. Big
  potential losses need insurance; small ones can be retained.
- Insurance pools risk; underwriting prices categories; life policies are
  non-indemnity. Agents act for insurers, brokers for clients; APRA and
  ASIC regulate.
- Utmost good faith: non-disclosure makes a contract voidable; fraud makes
  it void from inception.
- Life cover: multiple approach `income / rate` ($120,000 / 6% = $2m);
  needs approach `needs − resources` (James: $1m).
- TPD (own occupation dearer than any occupation), trauma (lump sum,
  listed events, under 55, $1m cap), income protection (70% of income,
  up to 90% for six months, deductible outside super, claims assessable).
- Medicare pays 85% of the scheduled fee. Private health is encouraged by
  the rebate, the MLS (note 04) and the LHC loading (2% a year over 30,
  max 70%, off after 10 years).
- Home: replacement beats indemnity; watch co-insurance and the 60-day
  unoccupied exclusion. Motor: CTP, comprehensive, FT&TPP, TPP. Liability:
  common, statute, contract law; PI cover for advice businesses.
