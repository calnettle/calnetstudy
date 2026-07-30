# Topic 10 — Contemporary Topics: Navigating Modern Financial Analysis

**Reference:** Four 2026 CFA Level I readings supplied with this module —
*Company Analysis: Past and Present*, *Industry and Competitive Analysis*,
*Company Analysis: Forecasting*, and *Equity Valuation: Concepts and Basic
Tools*. Those readings are copyright CFA Institute / Wiley and are summarised
here by learning outcome only.

This topic is unusual for EFB201: there is almost no arithmetic and no formula
to memorise. What is examined is a **process** — a five-step analyst workflow —
plus the ability to say **why the order matters**, what goes wrong in the real
world, and where AI fits. The tutorial is eight questions, five of which are
"put these in order" or "which step is missing", so the sequence itself is the
content.

---

## 1. The analyst workflow

```
scope → research → base case → stress test → recommendation
```

| Step | Name | The maxim the deck attaches |
|---|---|---|
| **1** | Define scope | *"Lock your scope before starting research"* |
| **2** | Identify past/future value drivers | *"Every number needs a source"* |
| **3** | Quantify future value drivers with models | *"Base case = expected outcome (not best or worst)"* |
| **4** | Risk, scenarios and sensitivities | *"What could go wrong before it happens"* |
| **5** | Decide and sharpen the narrative | *"Numbers drive recommendation, not feelings"* |

### Why the order matters

Each step needs the previous one:

```
Without scope     →  research wanders aimlessly
Without research  →  assumptions are just guesses
Without base case →  nothing to test
Without testing   →  blind to what could go wrong
```

> **The tutorial's Q5 answer is "you need evidence to justify your model
> assumptions" — and that is the whole argument in one line.** The distractors
> offered are regulatory requirements, model complexity, and peer comparison
> needing historical data. None of those is the reason. Assumptions without
> evidence are arbitrary, and arbitrary assumptions make the model circular:
> you get out the answer you put in.

---

## 2. Step by step, with the Woolworths Metro example

The hypothetical running through the deck: you cover Woolworths, which has
just announced **20 new "Metro" small-format stores** in urban areas. Will you
update your analysis, and how?

### Step 1 — Define scope

**Questions to answer:** What decision are we informing, and for whom? What
exactly are we analysing — company, segment or project?

**Output to Step 2:** a **scope note** (decision + object) to guide the data
plan and peer set.

**Applied:**

```
Decision:       Buy / Hold / Sell WOW equity   (current price $35)
Analysis scope: Metro format rollout's impact on group returns

Output: need URBAN RETAIL comparables, not just supermarket peers
```

> **The scope note determines the peer set, and the peer set determines
> everything downstream.** That is not a throwaway line — it is the deck's
> explanation of why two analysts with identical data reach opposite
> conclusions on NEXTDC. Choose the comparables in Step 1 and you have already
> half-chosen the answer.

### Step 2 — Identify past and future value drivers

**Past — how did the company make money?**

| Approach | Method |
|---|---|
| **Bottom-up** | Volume × price; simple margins (gross, operating); cash conversion (inventory, customer bills) |
| **Top-down** | Market size × share; benchmark margins; leverage; average cost of funding |

**Past — build peer base rates.** Identify close peers and compute peer rates
(e.g. the median).

**Future — what will change and why?** List change factors: industry trends,
supply chain structure, competition dynamics, company strategy, regulation.

**Output to Step 3:** an **evidence pack** — past performance table, peer base
rates, and a short list of change factors.

**Applied:**

```
PAST PERFORMANCE
  WOW supermarkets:  5.5% EBIT margin, $65k/sqm sales
  Coles:             5.2% margin,      $60k/sqm
  Aldi:              3.0% margin,      $90k/sqm
  Small format globally: 7-Eleven @ $120k/sqm, lower margins

FUTURE CHANGES
  Urban density ↑ (more apartments, fewer cars)
  Convenience > price for time-poor professionals
  Delivery eating into big-box stores
  Competitors ramp up metro as a response

OUTPUT: Metro could achieve $80k/sqm but at 4% margins
```

Notice how the output is **bracketed** by the evidence: $80k/sqm sits between
supermarkets at $65k and convenience at $120k; 4% sits below WOW's own 5.5%
because rent is higher and above Aldi's 3%. Neither number is invented — each
is positioned against a base rate.

### Step 3 — Quantify with models

**What to do:** turn each change identified in Step 2 into **one or two
measurable levers**. Show the effect on sales, margins, investment needed,
funding and cash flows. Use **two or three methods** (DCF, price multiples) to
find the **value–price gap** (upside/downside %) and its main factors.

**Output to Step 4:** a **base case model with documented assumptions** and an
initial value–price gap.

**Applied, with the arithmetic checked:**

```
Investment:  20 stores × $5M each                   = $100M
Revenue assumption: $80k/sqm  (between $65k and $120k)
Margin assumption:  4% EBIT   (below main stores — higher rent)

Result:      $400M revenue, and 4% × $400M          = $16M EBIT by Year 3  ✓
ROIC:        $16M / $100M                           = 16%
             against a 9% WACC                      → value creating  ✓

Valuation:   DCF adds $1.20/share
             Price multiple check confirms $1.10/share

Upside:      $1.20 / $35.00                         = 3.4%  ✓
```

Every figure reconciles. Note that $400M of revenue at $80k/sqm implies 5,000
sqm across 20 stores — 250 sqm per store, which is a plausible metro footprint.

> **"Base case ≠ status quo" is the single most examinable idea in this
> topic.** The base case is the **expected** outcome — it must incorporate the
> change you identified in Step 2, but not at an extreme. The tutorial tests it
> twice. A software company currently growing 20% at 30% margins, facing AI
> pricing pressure, gets a base case of **15% growth and 28% margins** (modest
> headwinds), **not** 20%/30% (that is the status quo, ignoring the change) and
> **not** 5%/15% (that is the bear case).

> **The same logic answers the retailer question.** Existing stores earn 6%
> margins; the new market has **higher rents but 20% higher income
> demographics**. The base case is **5%** — a partial offset, reflecting **both**
> the cost headwind and the pricing opportunity. Not 6% (ignores the rent), not
> 4% (ignores the demographics), not 8% (assumes premium market means premium
> margins, which the evidence does not say).

### Step 4 — Risk, scenarios and sensitivities

**What to do:**

- **Measure sensitivity** — change one lever at a time and measure the impact
  on the value–price gap.
- **Build bull and bear** — adjust multiple levers for optimistic and
  pessimistic scenarios.
- **List key risks with early warning signals and a data source** — demand,
  pricing and rivals, execution/timing, input costs, currency, policy.
- **Re-run rule** — when triggers fire, update the model and the
  recommendation.

**Output to Step 5:** **decision checks** — a sensitivity table, scenario
triggers, and a conditional thesis line to pre-empt objections.

**Applied:**

```
SENSITIVITY:  each 1% of margin = $0.30/share impact

  Base   4% margins  →  $1.20/share added
  Bull   6% margins  →  $1.20 + (2 × 0.30) = $1.80/share added
                        (if no Aldi/Coles response)
  Bear   2% margins  →  $1.20 − (2 × 0.30) = $0.60/share added
                        (if Aldi/Coles attack)

SCENARIO TRIGGERS
  Watch: Aldi/Coles metro-format response      (quarterly)
  Watch: CBD foot traffic recovery             (monthly)

RISK MONITORING
  Competition     → warning: planning applications for Aldi/Coles urban stores
  Cannibalisation → warning: quarterly same-store sales decline
  Execution       → warning: lease announcements falling behind target
```

The sensitivity arithmetic checks out exactly: 4% → 6% is two margin points at
$0.30 each, so $1.20 + $0.60 = $1.80. Bear likewise.

> **Note what the bear case is *not*: it is not a loss.** Even at 2% margins
> the Metro rollout still adds $0.60/share. A bear case is the pessimistic
> version of *this* project's outcome, not a catastrophe scenario. If your bear
> case is "the company goes bankrupt", you have built a stress test, not a
> scenario.

> **Every risk needs a *warning signal* and a *data source*, not just a
> label.** "Competition risk" scores nothing. "Competition risk — early warning:
> planning applications lodged by Aldi or Coles for urban sites; source: council
> planning registers; check quarterly" is the answer the deck is modelling.
> That is what makes the re-run rule operable.

### Step 5 — Decide and sharpen the narrative

**What to do:** state the final recommendation — Buy / Hold / Sell — with a
**one-sentence why** based on the value–price gap and key factors, and include
the **implied upside/downside %**.

**Output:** an executive-summary sentence.

**Applied:**

```
RECOMMENDATION: HOLD

ONE-LINER: "Metro adds value but insufficient for BUY;
            3.4% upside doesn't justify execution risk"

THE NARRATIVE
  Bulls say:  "Urban goldmine" — capturing high-income professionals
  Bears say:  "Margin trap"    — small stores can't compete with Aldi
  Reality:    Modest positive but priced in
```

> **The tutorial expects a *conditional* recommendation, not a bare one.** For
> the retailer question with a $0.50/share uplift the answer is **HOLD —
> positive but insufficient upside given the execution risk of new market
> entry** — and the follow-up asks what would upgrade it to BUY (evidence of
> stronger pricing power, or a faster payback). Attach the condition and you
> have answered the Step 4 and Step 5 halves together.

> **The bull / bear / reality structure is a template you can reuse on any
> question that asks for a "narrative".** State the strongest version of the
> optimistic case, the strongest version of the pessimistic case, then your
> own reconciliation. It pre-empts objections, which is precisely what the
> Step 4 output is for.

---

## 3. Frictions faced by analysts in reality

Six, and they map neatly onto Topic 5's impediments to market efficiency.

| Friction | Detail | Topic 5 link |
|---|---|---|
| **Information asymmetry** | Incomplete disclosures, management spinning narratives, selective guidance | High information cost |
| **Time constraints** | Covering multiple companies simultaneously, earnings-season crunch, client demands | High information cost |
| **Behavioural biases** | Herding, confirmation bias, anchoring to previous estimates | Prevalence of behavioural biases |
| **Career incentives** | Bank ties on the sell side, pressure for optimistic ratings | Limits to arbitrage (institutional) |
| **Data quality issues** | Non-GAAP adjustments, varying accounting standards across jurisdictions, missing data points | High information cost |
| **Market irrationality** | Prices can deviate from fundamentals **for long periods** | Limits to arbitrage |

> **"Prices can deviate from fundamentals for long periods" is the practical
> statement of limits to arbitrage.** Knowing a stock is mispriced does not pay
> if you cannot hold the position long enough for the market to agree —
> financing constraints, redemption pressure and career risk all bite first.
> Connecting this topic to Topic 5 explicitly is a good way to lift a written
> answer.

---

## 4. The NEXTDC case

The deck's real-world illustration: the same facts, the same workflow, two
analysts, opposite conclusions.

### Background (with the deck's own citations)

| Date | Event |
|---|---|
| **May 2023** | Announced regional expansion and an equity raise; **KL1** (Kuala Lumpur) and **AK1** (Auckland) |
| **2024–2025** | Sites flagged in planning or evaluation: Tokyo, Bangkok, Johor, Singapore |
| **Sep 2024** | Thailand BOI approved an investment application for a **Bangkok hyperscale data centre** |
| **Mid 2025** | Secured new senior debt facilities; **KL1 signed a 10MW hyperscale customer**; go-live target early 2026 |

> **The debt figure in the deck is ambiguous.** The bullet says "about A$2.2b"
> while the reference it cites is titled *"Debt facilities increased to A$5.1
> billion"*. Those reconcile only if A$2.2b is the **increment** and A$5.1b is
> the **total**. The deck does not say which. Do not quote either figure as a
> total without checking the source announcement.

### Why data centres are analytically hard

- **Capital intensive**, which makes DCF assumptions critical — the **timing
  and size of cash flows** dominate the answer.
- **Demand is evolving** — cloud adoption, AI compute, edge vs hyperscaler.

And the Asia expansion adds:

- Regulatory environments and geopolitical considerations
- New competitive dynamics

### The frictions, specific to this case

- **Information challenges** — assessing demand in new markets, understanding
  regulatory environments across different Asian countries, discerning
  management narrative from fact.
- **Modelling complexity** — forecasting capex requirements, ramp lags,
  utilisation rates, pricing power in unfamiliar markets.
- **Analyst divergence** — different conclusions from the same information.
- **Real-time complications** — geopolitical tension affecting cross-border
  data flows; competition from hyperscalers and REITs.

### Same scope, opposite theses

Both analysts define the identical scope: *Buy/Hold/Sell NEXTDC; analysis
scope is the Asia expansion's value impact on company returns.* Then they
diverge, and the deck traces exactly where.

**Step 2 — divergent inputs:**

| Input | **Value Creator** thesis | **Value Destroyer** thesis |
|---|---|---|
| Past | NEXTDC's 95% customer retention; network effects in Australia | NEXTDC's **zero international experience**; high domestic market share |
| **Peer set** | Successful international expansions (Equinix in Asia: 25% IRR) | **Failed expansions** (Global Switch's Indonesia exit) |
| **Base rates** | Global tier-1 markets (Singapore at 95% utilisation) | **Regional tier-2 markets** (Jakarta at 60% utilisation) |
| Future changes | AI sovereignty regulations; Malaysia's Johor–Singapore special economic zone | Hyperscaler self-build acceleration; US–China tech decoupling |

**Step 3 — divergent models:**

| Metric | Value Creator | Value Destroyer |
|---|---|---|
| Utilisation | 40% yr 1 → 75% yr 2 → 90% yr 3 | 20% → 40% → 55% |
| Pricing | AU$250/kW/month (carrier-neutral premium) | AU$180/kW/month (commodity pressure) |
| Margins | 65% EBITDA at maturity (yr 4) | 45% EBITDA at maturity |
| Capex efficiency | A$8M per MW (learning-curve benefits) | A$12M per MW (construction overruns) |
| **ROIC** | **18% by year 5** | **8% by year 5 — below a 10% WACC** |

**Step 4 — divergent risk framing:**

| Aspect | Value Creator | Value Destroyer |
|---|---|---|
| Key parameter | Utilisation ramp speed (assumes high terminal value) | Construction cost overruns (assumes thin margins) |
| **Probability split** | **60% base / 30% bull / 10% bear** | **30% base / 10% bull / 60% bear** |
| Emphasis | **Mitigants** — pre-lease agreements (KL1 10MW anchor), government support (Thailand BOI), first-mover in tier-2 cities | **Amplifiers** — no local operating history, regulatory uncertainty (data-localisation rules), unhedged MYR and THB currency exposure |
| Trigger | Monthly contracted utilisation updates | Competitor capacity announcements |

**Step 5 — divergent recommendations:**

```
PATH A — BUY
  "Asia ramp adds value; [X]% upside if pre-lease > 60%
   and power milestones are on time."

PATH B — HOLD / SELL
  "Upside priced in; pre-lease < 60% or a >[Y]-month power slip
   implies slower ramp and thinner economics."
```

> **Both analysts are honest, competent and reading the same announcements.
> The divergence is created in Step 2 by peer-set and base-rate selection, and
> amplified in Step 4 by probability weights.** That is the deck's thesis and it
> is the likely written question: *"Two analysts reach opposite conclusions on
> the same company. Explain how."* Answer with those two mechanisms, named, and
> give the concrete example — Equinix at 25% IRR versus Global Switch's
> Indonesia exit; Singapore at 95% utilisation versus Jakarta at 60%.

> **Notice that the ROIC-versus-WACC comparison is what actually decides the
> call.** Value Creator: 18% ROIC against a 10% WACC — value creating. Value
> Destroyer: 8% against 10% — value destroying. Same in the Woolworths example
> (16% ROIC vs 9% WACC). If a question gives you both numbers, the sign of
> `ROIC − WACC` is the recommendation, and everything upstream is about
> establishing those two numbers credibly.

---

## 5. Where AI fits

The framing the deck uses throughout: **keep rigor, cut frictions**. AI is
positioned against the six frictions, not as a replacement for the workflow.

| AI contribution | Detail | Which friction it cuts |
|---|---|---|
| **Data processing at scale** | NLP for earnings calls, automated extraction from filings, real-time news monitoring | Information asymmetry, time constraints |
| **Pattern recognition** | Identifying accounting red flags, detecting management tone changes, finding comparable companies | Data quality, information asymmetry |
| **Model automation** | Rapid scenario analysis, Monte Carlo simulations, sensitivity testing | Time constraints |
| **Bias reduction** | Systematic application of frameworks, challenging human assumptions, backtesting predictions | Behavioural biases |
| **Time liberation** | Automating routine tasks so analysts focus on insight generation, client interaction, strategic thinking | Time constraints |
| **Limitations and caveats** | Where human judgement remains essential; risks of over-reliance; maintaining professional scepticism | — |

### Guardrails

| Guardrail | Detail |
|---|---|
| **Governance** | Audit trails, citations, reproducibility packages |
| **Bias and hallucinations** | Human red team and **line-level source checks** |
| **Data boundaries** | **No material non-public information**; policy-aware prompts and outputs |

> **"No material non-public information" is Standard II(A) from Topic 9,
> applied to a prompt box.** Pasting a confidential document into a
> third-party model is both a disclosure and, potentially, causing others to
> act on inside information. The guardrails slide is where the ethics topic and
> the AI topic meet — a good connection to make explicitly in a written answer.

> **AI cuts frictions; it does not replace Steps 1, 4 or 5.** It cannot define
> your scope (that requires knowing the decision and the client), it cannot set
> probability weights (that is judgement), and it cannot own the
> recommendation. Notice that every AI contribution in the table attacks Step 2
> or Step 3 — the evidence-gathering and mechanical-modelling steps.

---

## 6. Judgement over model output

Tutorial Q7 poses the case squarely: your base case shows a **BUY with 15%
upside**, but management has a track record of **overpromising and
underdelivering**. Should you still issue BUY?

**Answer:** **Judgement should override mechanical output when credibility is
in question.** If qualitative evidence suggests management cannot deliver, the
recommendation may need to be **tempered — e.g. downgraded to HOLD** — despite
the modelled upside. Models inform decisions but cannot substitute for analyst
judgement.

> **This does not contradict "numbers drive recommendation, not feelings".**
> The maxim is about not letting *preference* override evidence. A documented
> track record of missed guidance **is** evidence — it belongs in Step 2 as a
> change factor and in Step 4 as an execution risk with a warning signal. The
> right answer is not "override the model", it is **"feed the evidence back
> into the model"** and note where you have applied a judgemental haircut.

### Why structure matters at all

Tutorial Q8, the meta-reflection. Without structure, analysis might **jump
straight to modelling or conclusions**, risking arbitrary assumptions or
confirmation bias. The workflow **forces evidence → assumptions → testing →
decision**, creating **traceability and credibility**, and it helps communicate
to others **why the recommendation is grounded, not guessed**.

---

## 7. The four CFA readings behind this module

Supplied with the module and copyright CFA Institute / Wiley. What each one is
for, by its own learning outcomes:

| Reading | Learning outcomes |
|---|---|
| **Company Analysis: Past and Present** | Describe the elements of a thorough company research report; determine a company's business model; evaluate revenue and revenue drivers including pricing power; evaluate operating profitability and working capital; evaluate capital investments and capital structure |
| **Industry and Competitive Analysis** | Describe the purposes of and steps in industry and competitive analysis; describe industry classification methods; determine an industry's size, growth, profitability and market-share trends; analyse industry structure and external influences using **Porter's Five Forces** and **PESTLE**; evaluate a company's competitive strategy and position |
| **Company Analysis: Forecasting** | Principles and approaches to forecasting financial results and position; forecasting revenues; forecasting operating expenses and working capital; forecasting capital investments and capital structure; the use of **scenario analysis** |
| **Equity Valuation: Concepts and Basic Tools** | Judge whether a security is over-, fairly or undervalued; describe major categories of valuation model; dividends, splits and repurchases; dividend payment chronology; present-value models — **dividend discount** and **free cash flow to equity**; advantages and disadvantages of each model category; intrinsic value of preferred stock; the **Gordon growth** and two-stage DDMs; **price multiples** — P/E, P/CF, P/S, P/B; enterprise value multiples |

Mapping them onto the workflow:

```
Step 1  Define scope                  →  Company Analysis: Past and Present (report elements)
Step 2  Identify value drivers        →  Past and Present + Industry and Competitive Analysis
Step 3  Quantify with models          →  Forecasting + Equity Valuation
Step 4  Risk and scenarios            →  Forecasting (scenario analysis)
Step 5  Decide and sharpen narrative  →  Equity Valuation (over/fair/undervalued judgement)
```

> **Two ideas from these readings sit directly under EFB201's own content.**
> The **price multiples** reading is the source of the P/E target-price
> arithmetic in Topic 3, and the **over/fair/undervalued** judgement is
> literally the `market value − fundamental value` sign test from Topic 5. If a
> question invites you to connect the contemporary module to the rest of the
> unit, those are the two links.

<details><summary>Checkpoint — the workflow</summary>

1. Put in order: (A) test what happens if delivery costs fall to 12% of sales;
   (B) recommend SELL; (C) define scope as a Buy/Hold/Sell decision; (D) find
   that delivery costs 15% of sales while competitors charge 10% delivery fees;
   (E) model a −$5M base-case value impact.
2. An analyst writes: (1) define scope — evaluate a new copper mine; (2)
   research shows similar mines achieve 20% IRR at current copper prices; (3)
   ???; (4) if the copper price falls 10%, IRR drops to 12%; (5) recommend
   proceeding. What is missing?
3. Match to a step: *"Peers achieve 8–10% margins; 15× EV/EBITDA typical"*;
   *"Each 1% market share gain adds $2/share value"*; *"Base case: $45/share
   intrinsic value vs $40 market price"*.

**Answers**

1. **C → D → E → A → B.** Scope → research → base case → sensitivity →
   recommendation. Note that E (the model) must precede A (the sensitivity):
   you cannot test a base case you have not built.
2. **The base case model** — projected cash flows and valuation metrics
   (NPV/IRR). The analyst jumped from research straight to sensitivity. The
   base case is essential because it is what **links assumptions to valuation
   metrics**; without it, "IRR drops to 12%" has no baseline to drop from.
3. Peer margins and multiples → **Step 2, Identify past/future value drivers**
   (these are peer base rates). Each 1% of share adding $2/share →
   **Step 4, Risk and sensitivities** (it is a sensitivity). $45 intrinsic
   value vs $40 market → **Step 3, Quantify with models** (the base case and
   its value–price gap).

</details>

---

## Summary

- The workflow is **scope → research → base case → stress test →
  recommendation**, and the order matters because each step supplies the
  previous one's missing input. Without research, assumptions are guesses.
- **Step 1** produces a scope note that fixes the decision, the object and
  therefore the peer set.
- **Step 2** produces an evidence pack: past performance, peer base rates,
  change factors. Bottom-up (volume × price) and top-down (market size ×
  share).
- **Step 3** produces a documented base case and a value–price gap.
  **Base case ≠ status quo** — it is the expected outcome including the change,
  neither optimistic nor pessimistic.
- **Step 4** produces sensitivities, bull/bear scenarios, and risks that each
  carry a **warning signal, a data source and a re-run trigger**.
- **Step 5** produces one sentence with the recommendation, the reason and the
  implied upside — ideally conditional on a Step 4 trigger.
- **`ROIC − WACC` decides the call.** Woolworths 16% vs 9%; NEXTDC 18% vs 10%
  (bull) or 8% vs 10% (bear).
- Six real-world frictions: information asymmetry, time constraints,
  behavioural biases, career incentives, data quality, market irrationality.
  They map onto Topic 5's impediments to efficiency.
- **NEXTDC** shows that identical scope plus identical facts produce opposite
  recommendations through **peer-set and base-rate selection** in Step 2 and
  **probability weights** in Step 4.
- **AI cuts frictions in Steps 2 and 3.** It does not set scope, weights or the
  recommendation. Guardrails: governance and audit trails, human red-teaming
  for hallucinations, and **no material non-public information** in prompts.
- **Judgement overrides mechanical output when credibility is in question** —
  but the honest version is to feed that evidence back into the model.
