# The Official Exam Formula Sheet — What You Get, and What You Don't

**This is the formula sheet you will be handed in the final exam**
(`EFB335 Final Exam Formula Sheet-6.docx`, released 29 September 2026).
It is one page. Everything on it is reproduced below exactly, mapped to
the topic it comes from.

Two things make it valuable for revision, beyond the formulas themselves:

1. **It shows what the exam covers.** Formulas come from Topics 2, 3, 6, 8
   and 10. Topics 5–10 were released on 26 September and are **not yet
   written up on this site** — see [the scope note](#/EFB335/17-official-exam-formula-sheet/the-scope-problem-this-sheet-exposes) below.
2. **It shows what you have to memorise.** Anything examinable that is
   *not* on this page has to come out of your head. That list is long,
   and it includes the CAPM.

> **The sheet is printed from a Word file with embedded equation images,
> and one of them does not render cleanly** — the mutual-fund return
> formula comes out as `Eᵢ + Dᵢ + Caᵢ Dsᵢ − Bᵢ`. The correct form,
> checked against Topic 10 slide 32, is below. If your printed copy on
> the day is garbled the same way, you now know what it says.

---

## The Sheet, Line by Line

### Portfolio theory — Topic 2

```
E(Rp) = wa × E(Ra) + wb × E(Rb)

σ_port = √( Σᵢ Σⱼ wᵢ wⱼ Cov(i,j) )          i, j = 1 … n
```

The variance is given **only in double-sum covariance form**. You have to
know that `Cov(i,i) = σᵢ²` and expand it yourself — for two assets that
gives the familiar `w₁²σ₁² + w₂²σ₂² + 2w₁w₂Cov₁₂`. The sheet will not
write that out for you. See [Revision Pack 2](#/EFB335/14-revision-pack-topic-2-and-tutorial-2/part-a-the-concepts-taught-from-scratch).

### Capital market line — Topic 3

```
E(R_port) = RFR + σ_port × [E(R_M) − RFR] / σ_M
```

That is the **CML** — efficient portfolios, priced against total risk σ.
**The SML is not on the sheet.** See [Revision Pack 3](#/EFB335/15-revision-pack-topic-3-and-tutorial-3/part-a-the-concepts-taught-from-scratch).

### Tax efficiency of active funds — Topic 6

```
PT  = SS / AUM                         portfolio turnover
TCR = [1 − (1 + TAR) / (1 + PTR)]      tax cost ratio
```

- **SS** — total dollar value of securities **sold** in the year
- **AUM** — average dollar value of assets under management
- **TAR** — tax-adjusted return · **PTR** — pre-tax return

High turnover crystallises capital gains, so it raises the tax cost
ratio. Active funds generally have a **higher** TCR than passive ones —
that is the Topic 6 checkpoint question, almost word for word.

### Options — Topic 8

```
Payoff to call holder at expiration = S_T − X   if S_T > X
                                    = 0         if S_T ≤ X

Payoff to put holder at expiration  = 0         if S_T ≥ X
                                    = X − S_T   if S_T < X
```

These are **payoffs, not profits** — the premium is not in them.
Topic 8's strategies (protective put, covered call, collar, straddle,
strangle, strips and straps, range forwards) are **built from these two
lines** and none of them is given. You construct each one by adding
calls and puts, long and short.

### Tracking performance — Topic 10

```
ATP    = (1/T) Σₜ (R_pt − R_Bt)             average tracking performance

AATP   = (1/T) Σₜ |R_pt − R_Bt|             average ABSOLUTE tracking performance

σ(TP)  = √[ (1/T) Σₜ (R_pt − R_Bt)² ]       tracking error
```

- **ATP** lets over- and under-performance cancel out, which is its flaw.
- **AATP** fixes that by counting errors in both directions.
- **σ(TP)** penalises *large* deviations — it is what "tracking error"
  means.

> **Note the divisor: `1/T`, not `1/(T − 1)`.** The sheet uses the
> population form. That matters if you compute it by hand, and it is the
> same population-versus-sample trap as Topics 1–2 — see [trap
> 1](#/EFB335/11-formula-sheet). Use the sheet's `1/T` in the exam.

### Risk-adjusted performance — Topic 10

```
Jensen's alpha      α_p  = (R_p − R_f) − β_p (R_m − R_f)

Sharpe index        SI_p = (R_p − R_f) / σ_p          total risk

Treynor index       TI_p = (R_p − R_f) / β_p          systematic risk

Information ratio   IR_pt = (R_pt − R_Bt) / σ(TP)     active return per unit of tracking error
```

Which one to use is the classic question:

| Measure | Risk used | Use it when |
|---|---|---|
| **Sharpe** | σ — total | The portfolio is the investor's **whole** wealth, so unsystematic risk matters |
| **Treynor** | β — systematic | The portfolio is **one part** of a diversified whole |
| **Jensen's α** | β, via CAPM | You want the excess return in percentage points, with a significance test |
| **Information ratio** | σ(TP) — tracking error | Judging an **active manager against a benchmark** |

**Sortino** is taught in Topic 10 and is **not** on the sheet.

### Mutual fund total return — Topic 10

The garbled line, reconstructed from Topic 10 slide 32:

```
R_it = (EP_it + Div_it + Cap.Dist_it − BP_it) / BP_it
```

- **EP** ending price · **BP** beginning price
- **Div** dividend payments · **Cap.Dist** capital-gain distributions

A fund's return includes its **distributions**. Leaving out the
capital-gain distribution understates it, and that is the trap the
formula exists to catch.

### Attribution analysis — Topic 10

```
Allocation Effect = Σᵢ [ (W_pi − W_bi) × R_bi ]

Selection Effect  = Σᵢ [ W_pi × (R_pi − R_bi) ]
```

- **W_pi, W_bi** — weight in segment *i*, portfolio vs benchmark
- **R_pi, R_bi** — return in segment *i*, portfolio vs benchmark

**Allocation + Selection = the portfolio's excess return over the
benchmark.** Allocation asks *did you over-weight the right segments?*
Selection asks *did you pick the right securities within each one?*

> **The sheet's allocation formula is not the textbook's, and it only
> matters segment by segment.** Reilly and Brown write the allocation
> effect as `(W_pi − W_bi) × (R_bi − R_B)`. The sheet drops the `− R_B`.
> Because both sets of weights sum to 1, `Σ(W_pi − W_bi) = 0`, so the
> **total** allocation effect is identical either way. The
> **per-segment** numbers are not. **Use the sheet's form in the
> exam** — it is the one the marker has in front of them.

A worked check, two segments:

| | W_p | W_b | R_p | R_b |
|---|---|---|---|---|
| Equities | 0.6 | 0.5 | 12% | 10% |
| Bonds | 0.4 | 0.5 | 3% | 4% |

Benchmark return `R_B` = 0.5(10) + 0.5(4) = **7.0%**. Portfolio return
`R_P` = 0.6(12) + 0.4(3) = **8.4%**. Excess = **1.4 points**.

| | Allocation (sheet form) | Allocation (textbook form) | Selection |
|---|---|---|---|
| Equities | +0.1 × 10 = **+1.0** | +0.1 × 3 = **+0.3** | 0.6 × 2 = **+1.2** |
| Bonds | −0.1 × 4 = **−0.4** | −0.1 × −3 = **+0.3** | 0.4 × −1 = **−0.4** |
| **Total** | **+0.6** | **+0.6** | **+0.8** |

`0.6 + 0.8 = 1.4` — allocation plus selection equals the excess return,
and the two allocation versions agree in total and disagree by segment.

---

## What Is NOT on the Sheet — Memorise These

Everything below is examinable and has to come out of your head.

| Topic | Not given — you must produce it | Where |
|---|---|---|
| 1 | HPR, HPY, annualised HPY · **arithmetic vs geometric mean** · `E(R) = ΣPᵢRᵢ` · variance and σ · coefficient of variation | [Pack 1](#/EFB335/13-revision-pack-topic-1-and-tutorial-1/part-d-cheat-sheet-memorise-this) |
| 1 | **Margin**: equity, percentage margin, **margin-call price long and short** | [Pack 1](#/EFB335/13-revision-pack-topic-1-and-tutorial-1/part-d-cheat-sheet-memorise-this) |
| 1–2 | **Annualising**: `(1+r)^m − 1`, variance `×m`, σ `×√m` | [Formula sheet](#/EFB335/11-formula-sheet) |
| 2 | Covariance · **correlation** `r = Cov/(σᵢσⱼ)` · the **expanded two-asset variance** · **min-variance weight** · σ_p at r = ±1 | [Pack 2](#/EFB335/14-revision-pack-topic-2-and-tutorial-2/part-d-cheat-sheet-memorise-this) |
| 2 | **Utility** `U = E(r) − ½Aσ²` | [Topic 2b](#/EFB335/03-topic-2-utility-and-strategy) |
| 3 | **The CAPM / SML** `E(Rᵢ) = Rf + βᵢ(Rm − Rf)` · **beta** `= Cov(i,m)/σ²m` | [Pack 3](#/EFB335/15-revision-pack-topic-3-and-tutorial-3/part-d-cheat-sheet-memorise-this) |
| 4 | **APT** and multifactor expected return · the arbitrage construction | [Pack 4](#/EFB335/16-revision-pack-topic-4-and-tutorial-4/part-d-cheat-sheet-memorise-this) |
| 7 | **Bond duration and convexity** — 15 slides of Topic 7, zero formulas on the sheet | *Not yet on the site* |
| 8 | Every **combined option strategy** — built from the call/put payoff lines | *Not yet on the site* |
| 10 | **Sortino ratio** | *Not yet on the site* |

> **The CAPM is not on the sheet, but Jensen's alpha is — and alpha is
> the CAPM rearranged.** `α = (R_p − R_f) − β(R_m − R_f)` is just actual
> excess return minus the SML's predicted excess return. If you forget
> the SML under pressure, you can read it back out of the alpha line.
> Better not to need to.

> **The bond gap is the one to worry about.** Topic 7 spends fifteen
> slides on duration and convexity and the sheet gives nothing for
> either. Either they are examined conceptually only, or you are
> expected to know them cold. Ask the unit coordinator which — it is a
> one-line question with a big answer.

---

## The Scope Problem This Sheet Exposes

The site currently covers **Topics 1–4**. The exam covers **Topics 1–10**:

| Topic | Title | On the sheet? | On this site? |
|---|---|---|---|
| 1 | Investment background | No (memorise) | ✅ |
| 2 | Portfolio management | **Yes** | ✅ |
| 3 | Capital market theory, CAPM | **CML only** | ✅ |
| 4 | APT and multifactor models | No (memorise) | ✅ |
| 5 | **Market efficiency** — weak, semi-strong, strong form | No — conceptual | ❌ |
| 6 | **Equity portfolio management** — passive vs active, indexing, tracking error, style, asset allocation, **tax efficiency** | **Yes** — PT, TCR | ❌ |
| 7 | **Bond portfolio management** — passive/active, **duration, convexity**, term structure, immunisation | No | ❌ |
| 8 | **Derivatives** — futures, options, hedging, straddles, strangles, collars | **Yes** — payoffs | ❌ |
| 9 | **Hedge funds and alternatives** — private equity, hedge fund strategies and performance | No — conceptual | ❌ |
| 10 | **Performance evaluation** — Sharpe, Treynor, Jensen, IR, Sortino, tracking, attribution | **Yes — most of the sheet** | ❌ |

> **Half of this formula sheet belongs to topics you have not yet met.**
> Topic 10 alone supplies eight of its lines. The decks and Tutorials
> 5–10 have been in your EFB335 folder since 26 September; they need
> writing up here, and the revision plan needs re-cutting to teach them.
