# Topic 9 — Estate Planning

Week 9. Source: `AYB250 Week 9.pptx`, slides 1–51. Reading: Chapter 11.
No tutorial questions for Topic 9 are in the source folder yet.

Covers what a will does and how it is made, executors and probate, which
assets a will can actually pass, contesting a will, Queensland's
intestacy rules, tax on a deceased estate (including CGT on inherited
assets under the current rules and after 1 July 2027), testamentary
trusts, superannuation death benefits and how they are taxed, and powers
of attorney. Every worked figure was recomputed in Python and all
reconcile.

The next topic after the mid-semester break is **Week 10, social
security**.

## Why estate planning

The deck opens with disputes that went wrong: Gina Rinehart's fight over
her father's estate; Bob Hawke's daughter challenging his will (settled
out of court); Olivia Mead, the secret daughter left $3 million on
conditions, initially awarded $25 million and cut to $6 million on appeal.
Less famously, *Geoghegan v Szelid*: a ~$200,000 estate where the
ex-husband established a $30,000 entitlement and the lawyers' costs ran to
about **$115,000**.

Estate planning used to mean the will. Now it means more broadly
**protecting and maximising the net assets available for distribution**,
including assets the will doesn't control.

## The will

A will specifies how property is dealt with, names the beneficiaries and
what they receive, and nominates the **executor**. A valid will is
important but **not legally required**.

**Making a valid will:**

- Governed by **state** legislation; each state has its own.
- The willmaker (**testator**) must be **over 18** with **testamentary
  capacity**.
- In writing, signed in the presence of **at least two witnesses**.
- A minor change is made with a **codicil** (a "little will").

**Keeping it current:** review regularly and after marriage, divorce,
starting a family or the death of a dependant.

> **Marriage generally revokes a will; divorce does not automatically.**
> A client who marries and never re-signs may die effectively intestate. A
> client who divorces may still leave everything to the ex-spouse.
> Exam answers need the direction right.

### The executor

Organises the funeral, manages the estate's legal and financial affairs,
obtains the grant of probate, secures and insures the assets (even
changing the locks), pays the debts, distributes the rest as the will
directs, and defends the will against challenges.

### Probate

The **Supreme Court** tests the will's validity and, if valid, **grants
probate** ("proof of the will"), confirming the executor. With no executor
it appoints an **administrator** by **letters of administration**; with no
will at all, letters of administration are granted.

> **Grant of probate is not probate duty.** Probate is the court's
> confirmation of the will. **No Australian state currently charges
> probate duty.** Small estates (e.g. around $25,000) may not need probate
> at all, depending on each institution's policy.

## What a will can pass

| **Estate assets** (the will controls them) | **Non-estate assets** (the will doesn't) |
|---|---|
| Solely owned property | **Jointly owned** assets (joint tenants: right of survivorship) |
| Bank accounts in own name | **Superannuation** |
| Investments in own name | **Life insurance** with a nominated beneficiary |
| Personal assets | **Trust** assets |
| Own share of property held as **tenants in common** | Assets controlled through a company or other structure |

**Worked example** (deck): Bianca's assets. Which belong in her will?

| Asset | Estate? | Why |
|---|---|---|
| Family home, jointly owned with spouse | No | Joint tenancy passes to the survivor |
| Super with QSuper | No | Trustee pays it (a BDBN controls it, not the will) |
| Joint bank account with spouse | No | Right of survivorship |
| Personal savings account in her own name | **Yes** | Solely owned |
| Car registered in her name | **Yes** | Solely owned personal asset |
| Life insurance naming her spouse | No | Paid direct to the nominated beneficiary |

Only the savings account and the car go through her will.

> **Joint tenants versus tenants in common changes the answer.** Joint
> tenants: the survivor takes the whole by survivorship and the share
> never enters the estate. Tenants in common: each owns a distinct share
> that **can** be left by will. Check how the property is held before
> counting it.

## Beneficiaries and contesting a will

Beneficiaries are entitled to **proper administration**. They have no
claim on assets while the executor holds them (but can go to court if the
executor doesn't apply for probate in time), and can't borrow against
their inheritance until title passes.

A will can be challenged on **validity**:

- lack of testamentary capacity
- undue influence
- incorrect execution

Even a valid will can be challenged for **inadequate provision** for a
spouse, child or certain dependants. In Queensland these are **Family
Provision Applications (FPA)**.

## Dying intestate

Dying without a valid will means **intestacy**: the estate passes to next
of kin under a precise statutory order.

**Queensland intestacy rules:**

```
Spouse, no children:     spouse takes the entire estate

Spouse and children:     spouse takes the first $150,000 + household goods
  balance, one child:        50% spouse, 50% child
  balance, two+ children:    1/3 spouse, 2/3 shared equally by the children
```

**Worked example:** $600,000 estate (excluding household goods), spouse
and two children.

```
Spouse:   150 000 + (600 000 − 150 000) × 1/3 = 150 000 + 150 000 = $300 000
Children: 450 000 × 2/3 = 300 000  →  $150 000 each
```

**Same estate, spouse and one child:**

```
Spouse:  150 000 + 450 000 × 50% = $375 000
Child:   450 000 × 50%           = $225 000
```

> **The $150,000 comes off the top first.** Splitting the whole $600,000
> by thirds gives the spouse $200,000 instead of $300,000.

## Tax on a deceased estate

**The 3-year rule.** The ITAA allows up to three years to finalise an
estate, taxed at **normal adult marginal rates** in that time.

**Capital gains tax** depends on when the deceased bought the asset and
only arises when the asset is sold.

**Stamp duty** is exempt or concessional on a transfer **under the terms
of the will**, and standard if the transfer departs from the will.

### CGT on inherited assets: current rules

| Asset inherited | CGT consequence |
|---|---|
| **Family home** | CGT-free if sold within **2 years** of death, or it stays the beneficiary's main residence |
| **Investment asset bought before 20 Sept 1985** (pre-CGT) | Cost base resets to **market value at death**; CGT on later gains when the beneficiary sells; 50% discount after 12 months |
| **Investment asset bought after 19 Sept 1985** | Beneficiary inherits the **original cost base**; CGT on the whole gain since the deceased bought it; 50% discount if the deceased and beneficiary together held it over 12 months |
| **Personal assets** (cars etc.) | CGT-free, unless collectables (art, antiques, expensive jewellery) |

**Worked example** (deck): Sam inherits his mother's home (bought 1995),
shares worth $150,000 (bought 2000–2015, cost base $45,000), an
investment property worth $680,000 (bought 1983 for $25,000), a $15,000
car, $80,000 of contents and $10,000 of jewellery (about 20 items).

| Asset | Result |
|---|---|
| Home | CGT-free if sold within 2 years, or if it becomes Sam's main residence |
| Shares | Original cost base carries over. Sold for $150,000: `(150 000 − 45 000) × 50% = $52 500` taxable at Sam's marginal rate |
| Investment property | **Pre-CGT**: cost base resets to $680,000. Sold for $680,000, no CGT; only gains above $680,000 are taxed, with the 50% discount |
| Car, contents, jewellery | CGT-free personal assets (the jewellery unless an item is a collectable) |

Verified.

> **Pre-CGT status dies with the deceased, but the cost base resets.**
> The property bought in 1983 isn't CGT-free forever in Sam's hands. It
> gets a fresh $680,000 cost base at death, and later growth is taxable.

### CGT on inherited assets: from 1 July 2027

Gains accruing **after 1 July 2027** fall under the new regime for all
investment assets: **cost-base indexation**, with a **30% minimum tax**
for individuals (note 05). The transition:

| Asset | Beneficiary's cost base | Gains accruing before 1 July 2027 |
|---|---|---|
| Pre-CGT, deceased alive on 30 June 2027 | Reset to **1 July 2027 market value** | Fully exempt |
| Pre-CGT, deceased died before 1 July 2027 | Date-of-death market value | 50% discount |
| Post-CGT (bought after 19 Sept 1985) | Deceased's original cost base | 50% discount |

## Trusts in estate planning

Two estate planning objectives: a **tax-effective structure** for passing
assets and income to beneficiaries, and **control** over how assets are
distributed and managed after death. **Testamentary trusts**, created by a
will, achieve both.

**Essential elements of a trust:** settlor, appointer, trustee,
beneficiary, trust property, and a personal obligation. The trustee
controls the assets and distributes income and capital under the deed.

| Trust | Beneficiaries' entitlement |
|---|---|
| **Fixed (unit) trust** | Fixed share of income and capital, in proportion to units |
| **Discretionary trust** | A right to be **considered**, not a right to receive |

**Uses:** tax minimisation, asset protection, succession, and provision for
minor or disabled dependants. Testamentary trusts are **proposed to be
exempt** from the minimum 30% trust tax (from 1 July 2028, pending
legislation).

### Tax minimisation: minors

Minors normally pay penalty rates on unearned income, but **income from a
testamentary trust is taxed at normal adult rates**, including the
tax-free threshold.

**Worked example** (deck): Maria's discretionary testamentary trust for her
son Michael (income $100,000, two minor children) earns dividends $8,000,
rent $15,000 and interest $7,000.

```
Trust income = 8 000 + 15 000 + 7 000 = $30 000
Distributed $15 000 to each child → under the $18 200 threshold → no tax

If Michael received it directly (30% marginal bracket):
  Tax           30 000 × 30% = $9 000
  Medicare levy 30 000 × 2%  =   $600
  Saving                     = $9 600 a year
```

Verified.

**Asset protection.** Separating legal and beneficial ownership shields
trust assets from beneficiaries' creditors, and protects a vulnerable
beneficiary (addiction, gambling, spendthrift) from themselves.
**Succession:** assets held in trust stay available for future
generations and gain some protection in a beneficiary's divorce (though
the Family Court can compensate the other party).

## Superannuation death benefits

Super is **not an estate asset**, so the will doesn't govern it. On death
the **fund trustee decides** who receives the balance, **unless a binding
death benefit nomination (BDBN)** is in place. Handled well, super offers
tax and asset protection. Handled badly, it delivers "de facto death
duties" or defeats the estate plan.

**BDBN requirements:** signed and witnessed by **two witnesses**; normally
valid for **three years** (non-lapsing versions are now possible); confirm
or renew when they expire.

### Who can receive, and who is taxed

A death benefit can only go to a **dependant** (SIS Act definition) or to
the **estate**. There are two different dependant tests:

| | **SIS (super) dependant** — can receive it | **Tax dependant** — receives it tax free |
|---|---|---|
| Spouse (legal or de facto, incl. same sex) | Yes | Yes (former spouse too) |
| Child | **Any age** | **Under 18**, or financially dependent |
| Interdependency relationship | Yes | Yes |

An **interdependency relationship** means a close personal relationship,
living together, and one or both providing financial support and domestic
support or personal care.

> **An adult child is a super dependant but usually not a tax
> dependant.** The trustee can pay them, and the tax office will tax them.
> This is the whole reason the re-contribution strategy (note 12) exists.

### Tax on death benefits

**Lump sums:**

| Recipient | Tax-free component | Taxable: taxed element | Taxable: untaxed element |
|---|---|---|---|
| **Tax dependant** | Tax free | Tax free | Tax free |
| **Non-dependant** | Tax free | **15%** + Medicare | **30%** + Medicare |

**Income streams** (tax dependants only):

| Ages | Taxed element | Untaxed element |
|---|---|---|
| Deceased **or** recipient 60+ | Tax free | Marginal rates less 10% offset |
| Both under 60 | Marginal rates less 15% offset | Marginal rates, no offset |

Death benefit **pensions can only be paid to tax dependants**. Lump sums
can go to either. Consider asset protection, tax on the lump sum, and tax
on the income it later earns.

**Worked example** (deck): Vijay's $250,000 super (all taxable, taxed
element) is split 50/50 between his wife Madhu and his daughter Mira, 28,
who earns $100,000 in Sydney.

| Beneficiary | Status | Amount | Tax | Net |
|---|---|---|---|---|
| Madhu | Tax dependant | $125,000 | Nil | $125,000 |
| Mira | Non-tax dependant | $125,000 | `125 000 × 15% = 18 750` + `125 000 × 2% = 2 500` | **$103,750** |

Verified: Mira loses $21,250 purely because she is an adult child.

**Also:** a non-dependant receiving $200,000 of taxed element pays
`200 000 × 17% = $34 000`; $100,000 of **untaxed** element costs
`100 000 × 32% = $32 000`.

## Powers of attorney and health directives

A **power of attorney** authorises an **attorney** to act for the
**donor**, with the same power and the ability to sign binding documents.
It is valid once signed and witnessed, lasts until revoked, and **ceases
automatically on the donor's death**. Laws differ between states and don't
cross state lines.

| Type | Scope |
|---|---|
| Limited | Specific matters |
| General | All financial matters, while the donor has capacity |
| **Enduring (EPOA)** | Starts or **continues when the donor loses capacity**; must be made while they still have it. Financial, medical and guardianship (personal/lifestyle) categories |

An **advance health directive** records a person's health care wishes
(resuscitation, life-sustaining treatment). It binds health professionals
if valid, must be in writing and witnessed, most states prescribe a form,
and a doctor may need to certify capacity.

> **A general power of attorney fails exactly when it's needed.** It
> stops when the donor loses capacity. Dementia planning needs an
> **enduring** power, signed while capacity still exists.

## The planner's role

Identify the client's objectives and wishes; identify estate and non-estate
assets; identify the tax implications; make sure a valid, current will is
executed; establish an enduring power of attorney.

## Checkpoint

<details><summary>Questions</summary>

1. Under Queensland intestacy, how is a $600,000 estate split between a
   spouse and two children? And between a spouse and one child?
2. List which of these pass under a will: an investment property held as
   tenants in common (50%), super, a joint bank account, shares in the
   deceased's own name.
3. A beneficiary inherits shares bought in 2005 for $20,000, worth $70,000
   at death, and sells them for $70,000 under current rules. Taxable gain?
4. Mira-style: a non-dependant adult child receives a $200,000 lump sum,
   all taxed element. Tax?
5. Why does a testamentary trust save tax on distributions to minors?
6. A client marries and doesn't update their will. What happens? And after
   a divorce?
7. A 40-year-old dies leaving super to her 17-year-old son. Can the
   trustee pay him, and is it taxed?
8. What's the difference between a general and an enduring power of
   attorney?

</details>

<details><summary>Answers</summary>

1. Two children: spouse `150 000 + 450 000/3 = $300 000`, children
   $150,000 each. One child: spouse `150 000 + 450 000/2 = $375 000`,
   child $225,000.
2. The tenants-in-common 50% share and the shares in own name. Super
   (trustee or BDBN) and the joint account (survivorship) don't.
3. Post-CGT asset, so the original $20,000 cost base carries over:
   `(70 000 − 20 000) × 50% = $25 000` taxable.
4. `200 000 × (15% + 2%) = $34 000`
5. Testamentary trust income distributed to minors is taxed at **adult**
   marginal rates, including the $18,200 tax-free threshold, not the
   penalty rates on unearned income.
6. Marriage generally revokes the will, so the client may die intestate.
   Divorce doesn't automatically revoke it, so the ex-spouse may still
   inherit.
7. Yes, the trustee can pay him: a child of any age is a SIS dependant.
   And it is **tax free**, because a child **under 18** is also a tax
   dependant.
8. A general power ends when the donor loses capacity; an enduring power
   starts or continues at that point.

</details>

## Summary

- A valid will (18+, capacity, writing, two witnesses) names beneficiaries
  and an executor. Marriage revokes; divorce doesn't automatically.
- Probate = Supreme Court proof of the will; no state charges probate
  duty.
- Wills pass only **estate** assets. Joint tenancy, super, nominated life
  insurance and trust assets pass outside the will.
- Challenges: capacity, undue influence, execution; or inadequate
  provision (Queensland FPA).
- Queensland intestacy: spouse takes all if no children; otherwise $150,000
  plus household goods, then half (one child) or a third (two or more).
- Estate taxed at adult rates for up to 3 years. Inherited home CGT-free
  if sold within 2 years. Pre-CGT assets reset to market value at death;
  post-CGT assets keep the original cost base. From 1 July 2027:
  indexation, 30% minimum, with the transition table above.
- Testamentary trusts: control, asset protection, and adult tax rates for
  minors (Michael's children save $9,600 a year).
- Super death benefits: trustee discretion unless a BDBN. SIS dependants
  can receive; only tax dependants receive tax free. Non-dependants pay
  15% (taxed) or 30% (untaxed) plus Medicare on the taxable component.
  Mira: $125,000 → $103,750.
- Enduring power of attorney survives loss of capacity; general doesn't.
  Advance health directive covers treatment wishes.
