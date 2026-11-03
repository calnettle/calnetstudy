# Formula Sheet & Exam Traps

<!-- notation:start -->
<details class="notation"><summary>Notation key — what the symbols in this note mean</summary>

| Symbol | Means |
|---|---|
| `E(R)` | Expected return — the probability-weighted average return you expect. E(Rᵢ) for asset i, E(R_p) for a portfolio |
| `Rᵢ, R_p` | A return — Rᵢ on asset i, R_p on the portfolio. The subscript says whose return it is |
| `RFR, R_f` | Risk-free rate — the return on a riskless asset such as a government bill |
| `R_M, R_m` | Market return — the return on the whole market (e.g. the ASX 200 as a proxy) |
| `σ (sigma)` | Standard deviation — how widely returns swing around their average. The standard measure of risk |
| `σ²` | Variance — standard deviation squared. Same information as σ in squared units; σ = √σ² |
| `σ₁, σᵢ` | Standard deviation of one asset (asset 1, asset i …) |
| `σ_p, σ_port` | Standard deviation of the whole portfolio |
| `σ_M` | Standard deviation of the market |
| `CV` | Coefficient of variation — σ ÷ E(R), risk per unit of expected return. Lower is better |
| `HPR` | Holding period return — ending value ÷ beginning value. 1.10 means +10% |
| `HPY` | Holding period yield — HPR − 1, the return as a percentage |
| `AM` | Arithmetic mean — the simple average of the period returns |
| `GM` | Geometric mean — the compound average return per period. Always ≤ AM |
| `P₀, P₁` | Price — P₀ at the start of the period, P₁ at the end |
| `D₁` | Dividend received during the period |
| `m` | Periods per year — 12 monthly, 52 weekly, 252 trading days |
| `n` | Number of items — observations, periods or assets, depending on the formula |
| `Σ` | "Add them all up" — a sum over every item (Σᵢ = over every asset i) |
| `Π` | "Multiply them all together" — a product over every period |
| `w, wᵢ` | Weight — the fraction of the portfolio held in asset i. Weights add up to 1 |
| `Cov(i,j)` | Covariance — do two assets move together (+) or in opposite directions (−)? Cov(i,i) is just σᵢ² |
| `r(i,j), ρ` | Correlation — covariance rescaled to −1 … +1. +1 moves perfectly together, −1 perfectly opposite, 0 unrelated |
| `R²` | R-squared — the share of the variation a regression explains (0 to 1) |
| `U` | Utility — an investor's satisfaction score for a portfolio. Higher is better |
| `A` | Risk-aversion coefficient — how much the investor dislikes risk (≈7 conservative, ≈1 aggressive) |
| `IM` | Initial margin — the % of the purchase paid with your own money |
| `MM` | Maintenance margin — the minimum equity % before the broker makes a margin call |
| `N` | Number of shares bought, or sold short |
| `P*` | Margin-call price — the share price that triggers a margin call |
| `β (beta)` | Beta — how sensitive an asset is to market moves; its systematic risk. β = 1 moves with the market |
| `α (alpha)` | Alpha — the return above (or below) what the CAPM says the risk deserves |
| `CML` | Capital market line — the best mixes of the risk-free asset and the market portfolio, priced on total risk σ |
| `SML` | Security market line — the CAPM as a line: required return against beta |
| `CAPM` | Capital asset pricing model — E(Rᵢ) = R_f + βᵢ[E(R_M) − R_f] |
| `APT` | Arbitrage pricing theory — expected return explained by several risk factors, not just the market |
| `λ (lambda)` | Factor risk premium — the extra return paid for exposure to one factor (APT) |
| `bᵢⱼ` | Factor sensitivity — how much asset i responds to factor j (a separate "beta" for each factor) |
| `SMB` | Small Minus Big — the Fama–French size factor (small firms' return minus big firms') |
| `HML` | High Minus Low — the Fama–French value factor (high book-to-market minus low) |
| `PT` | Portfolio turnover — securities sold ÷ assets under management |
| `SS` | Total dollar value of securities sold in the year |
| `AUM` | Assets under management — the (average) dollar size of the fund |
| `TCR` | Tax cost ratio — the share of return lost to tax |
| `TAR` | Tax-adjusted return — the return after tax |
| `PTR` | Pre-tax return |
| `S_T` | Share price at expiry (time T) |
| `X` | Strike (exercise) price of the option |
| `ATP` | Average tracking performance — average of (portfolio − benchmark) returns |
| `AATP` | Average absolute tracking performance — the same, ignoring sign |
| `σ(TP)` | Tracking error — standard deviation of (portfolio − benchmark) returns |
| `R_pt, R_Bt` | Portfolio and benchmark return in period t |
| `SI (Sharpe)` | Sharpe index — (R_p − R_f) ÷ σ_p: excess return per unit of total risk |
| `TI (Treynor)` | Treynor index — (R_p − R_f) ÷ β_p: excess return per unit of systematic risk |
| `IR` | Information ratio — active return ÷ tracking error |
| `R_pi, R_bi` | Return in segment i — portfolio (p) vs benchmark (b) |
| `EP, BP, Div, Cap.Dist` | Fund return inputs — ending price, beginning price, dividends paid, capital-gain distributions |

[Full EFB335 notation key →](#/EFB335/99-notation-key)

</details>
<!-- notation:end -->

## Returns

| Concept | Formula |
|---|---|
| Holding Period Return | `HPR = Ending Value / Beginning Value` |
| Holding Period Yield | `HPY = HPR − 1` |
| HPY with income | `HPY = (P₁ − P₀ + D₁) / P₀` |
| Annual HPR | `HPR^(1/n)` |
| Annual HPY | `HPR^(1/n) − 1` |
| Arithmetic Mean | `AM = Σ HPY / n` |
| Geometric Mean | `GM = [Π HPR]^(1/n) − 1` |
| Log return | `ln(P₁ / P₀)` |
| Portfolio HPY | `Σ wᵢ HPYᵢ` |
| Relationship | `AM ≥ GM`, gap ≈ `σ²/2` |

## Risk

| Concept | Formula |
|---|---|
| Expected return | `E(R) = Σ Pᵢ Rᵢ` |
| Variance (expected) | `σ² = Σ Pᵢ [Rᵢ − E(R)]²` |
| Variance (historical) | `σ² = Σ [HPYᵢ − E(HPY)]² / n` |
| Standard deviation | `σ = √σ²` |
| Coefficient of Variation | `CV = σ / E(R)` — **lower is better** |
| Sharpe Ratio | `(Rₘ − R_f) / σ` — **higher is better** |
| Annualising a **return** | `(1 + r̄_period)^(periods per year) − 1` |
| Annualising **variance** | `σ²_annual = σ²_period × periods per year` |
| Annualising **SD** | `σ_annual = σ_period × √(periods per year)` |

*Periods per year: 12 monthly, 52 weekly, **252** daily (trading days).*

## Margin — Long

| Concept | Formula |
|---|---|
| Total value | `P × N` |
| Loan | `P₀ × N × (1 − IM)` |
| Initial equity | `P₀ × N × IM` |
| Equity at price P | `(P × N) − Loan` |
| Percentage margin | `[(P × N) − Loan] / (P × N)` |
| **Margin call price** | **`P* = Loan / [N × (1 − MM)]`** |
| Return on equity | `(New Equity − Initial Equity) / Initial Equity` |
| Leverage factor | `1 / IM` |

## Margin — Short

| Concept | Formula |
|---|---|
| Proceeds | `P₀ × N` |
| Deposit | `P₀ × N × IM` |
| Equity at price P | `Proceeds + Deposit − Dividends − (P × N)` |
| Percentage margin | `Equity / (P × N)` |
| **Margin call price** | **`P* = (Proceeds + Deposit) / [N × (1 + MM)]`** |
| Rate of return | `Net Profit / Deposit` |

## Portfolio Theory

| Concept | Formula |
|---|---|
| Portfolio expected return | `E(R_p) = Σ wᵢ E(Rᵢ)` |
| Covariance (definition) | `Cov(i,j) = E{[Rᵢ − E(Rᵢ)][Rⱼ − E(Rⱼ)]}` |
| Covariance (sample) | `Σ [Rᵢ,ₜ − E(Rᵢ)][Rⱼ,ₜ − E(Rⱼ)] / (n − 1)` |
| Covariance (population) | `Σ [Rᵢ,ₜ − E(Rᵢ)][Rⱼ,ₜ − E(Rⱼ)] / n` |
| Correlation | `r(i,j) = Cov(i,j) / (σᵢ σⱼ)`, range −1 to +1 |
| Covariance from correlation | `Cov(i,j) = r(i,j) σᵢ σⱼ` |
| Goodness of fit | `R² = r²` |
| **Two-asset portfolio variance** | **`σ²_p = w₁²σ₁² + w₂²σ₂² + 2w₁w₂ r₁₂ σ₁ σ₂`** |
| General portfolio variance | `σ²_p = Σᵢ wᵢ²σᵢ² + Σᵢ Σⱼ≠ᵢ wᵢwⱼ Cov(i,j)` |
| Matrix form | `σ²_p = wᵀ Σ w` |
| Number of variance terms | `n` |
| Number of unique covariances | `n(n − 1) / 2` |
| Three-asset variance | `w₁²σ₁² + w₂²σ₂² + w₃²σ₃² + 2w₁w₂Cov₁₂ + 2w₁w₃Cov₁₃ + 2w₂w₃Cov₂₃` |
| **Min-variance weight (any r)** | **`w₁* = (σ₂² − Cov₁₂) / (σ₁² + σ₂² − 2Cov₁₂)`** |
| Min-variance weight (r = 0) | `w₁* = σ₂² / (σ₁² + σ₂²)` — *special case of the above* |
| Zero-risk weight (r = −1) | `w₁* = σ₂ / (σ₁ + σ₂)` |
| σ_p when r = +1 | `w₁σ₁ + w₂σ₂` (weighted average) |
| σ_p when r = −1 | `abs(w₁σ₁ − w₂σ₂)` |
| Single-index correlation | `r(i,j) = βᵢβⱼσ²_m / (σᵢσⱼ)` |
| **Utility function** | **`U = E(r) − 0.5 × A × σ²`** (A ≈ 7 conservative, ≈ 1 aggressive) |
| Indifference curve | `E(r) = U + 0.5 × A × σ²` — a **parabola**, steeper for higher A |
| "Modified" Sharpe ratio | `E(R_p) / σ_p` — **no** risk-free rate. Not the same ranking as the true Sharpe |

## Capital Market Theory (CML) — Topic 3

| Concept | Formula |
|---|---|
| Covariance with risk-free asset | `Cov(RF, i) = 0` always |
| σ of RF + risky portfolio M | `σ_port = (1 − w_RF) σ_M` |
| E(R) of RF + risky portfolio M | `E(R_port) = w_RF × RFR + (1 − w_RF) × E(R_M)` |
| **CML** | **`E(R_port) = RFR + σ_port × [E(R_M) − RFR] / σ_M`** |
| CML slope (price of risk) | `[E(R_M) − RFR] / σ_M` |
| Weight in M for a target return | `w_M = [target E(R) − RFR] / [E(R_M) − RFR]` |
| σ_port for a target return | `σ_port = [target E(R) − RFR] / CML slope` |
| Sign of w_RF | `w_RF > 0` → lending (less risky than M). `w_RF < 0` → borrowing/leverage (riskier than M). |

## CAPM / SML — Topic 3

| Concept | Formula |
|---|---|
| **Beta** | **`βᵢ = Cov(i, M) / σ²_M = (σᵢ × r_iM) / σ_M`** |
| Beta of the market | `β_M = 1` always |
| **CAPM / SML** | **`E(Rᵢ) = RFR + βᵢ [E(R_M) − RFR]`** |
| Characteristic line (regression form) | `βᵢ = COVARIANCE.S(Rᵢ, R_M) / VAR.S(R_M)` |
| Mispricing test | Estimated > required → **underpriced** (above SML). Estimated < required → **overpriced** (below SML). |

## APT / Multifactor Models — Topic 4

| Concept | Formula |
|---|---|
| **APT** | **`E(Rᵢ) = λ0 + λ1·bᵢ1 + λ2·bᵢ2 + … + λk·bᵢk`** |
| λ0 | Return on an asset with zero systematic risk (the RFR's seat) |
| λj / bᵢj | Premium on factor j / sensitivity of asset i to factor j |
| Fair price today | Discount YOUR forecast price at the MODEL's E(R): `P₀ = forecast ÷ [1 + E(R)]`; below market price → overpriced → short |
| Arbitrage portfolio | `Σwᵢ = 0` (no wealth) **and** `Σwᵢbᵢj = 0` per factor **and** `ΣwᵢRᵢ > 0` — all three simultaneously |
| Multifactor model | `Rᵢt = aᵢ + b1F1t + … + bKFKt + eᵢt` — investor names the factors (APT doesn't) |
| **Fama–French 3F** | **`(Rᵢ − RF) = a + b1(Rm − RF) + b2·SMB + b3·HML + e`** — both sides EXCESS returns |
| SMB / HML signs | SMB: + small, − large. HML: + value, − growth |
| FF 5-factor (2015) | + RMW (robust−weak profitability) + CMA (conservative−aggressive investment); **MOM excluded** (short-term). Carhart 4F = FF3 + MOM |
| Expected return recipe | factors → premia λj → regress excess returns for bᵢj → `E(Rᵢ) − RF = Σ bᵢj·λj` |
| Factor correlations | Theory: **0** (independent risks). Far from 0 → multicollinearity → unstable betas |
| Significance / fit | `t = coefficient ÷ standard error`, priced if \|t\| ≳ 2 (df big) · R² = share of variation explained |

## Market Efficiency — Topic 5

None of these is on the official formula sheet (v6). The sample paper's sheet adds an "Autocorrelation test" heading only, so memorise all of them.

| Concept | Formula |
|---|---|
| Three forms (nested) | Weak (historical market data) ⊂ semi-strong (+ all public info) ⊂ strong (+ private info). Strong ⇒ semi-strong ⇒ weak, never the reverse |
| **Autocorrelation test** | **`r_t = a + b·r_(t−1−T) + e_t`** (T = 0, 1, 2 …). Weak form: b ≈ 0, ρ ≈ 0. **ρ² = share of today's return variation explained by the lagged return** |
| Runs | A run = a sequence of the same sign (+, −, and 0 counted as its own sign). **Fewer runs than expected → trends (positive dependence) → against weak form**; more → reversals (negative dependence) |
| Expected runs (not on slides) | `E(runs) = 2n₁n₂/(n₁ + n₂) + 1`. Unit workbook: `1 + 2(n − 1)p(1 − p)` |
| **Abnormal return** | **`AR_it = R_it − R_mt`** (market-adjusted; subtract the MARKET return, not RFR) |
| Average abnormal return | `AAR_t = (1/N)·Σ_i AR_it` (across firms, one day) |
| Cumulative AAR | `CAR_t = Σ AAR from start of window to t` (across days). Efficient: jump at day 0, flat after |
| Joint hypothesis | Any "abnormal" return test = test of efficiency **and** of the pricing model used for "normal" |

**Excel (unit workbooks):** autocorrelation via **Data Analysis → Regression** of `r_t` on `r_(t−1)` (or `CORREL`/`RSQ` for ρ, ρ²). Runs via a sign column `=IF(P_t>P_(t−1),"+",IF(P_t<P_(t−1),"−","0"))` and a change flag `=IF(sign_t<>sign_(t−1),1,0)`, summed. Day-of-week and month effects via `AVERAGEIF` on weekday or month, annualised `(1+r̄)^252 − 1` or `(1+r̄)^12 − 1`. Event-study returns `=P_t/P_(t−1) − 1`, then AR, AAR, CAR columns.

## Equity Portfolio Management — Topic 6

| Concept | Formula |
|---|---|
| Return differential, period t | `Δt = Σ wᵢ·Rᵢt − Rbt = Rpt − Rbt` — portfolio minus benchmark return |
| **Tracking error (deck)** | `TE = σΔ × √P` — standard deviation of Δ, annualised; P = periods per year (12 monthly, 52 weekly) |
| **Tracking error (exam sheet, Topic 10 line)** | `σ(TP) = √[(1/T) Σ (Rpt − RBt)²]` — divides by T and does **not** subtract the mean Δ; equals the deck's σΔ only when mean Δ = 0 |
| Total return decomposition | `Actual return = Expected return + alpha = [RFR + risk premium] + alpha` |
| **Portfolio turnover** (on sheet) | `PT = SS / AUM` — $ securities SOLD in the year ÷ AVERAGE $ assets |
| **Tax cost ratio** (on sheet) | `TCR = [1 − (1 + TAR)/(1 + PTR)]` (× 100 on the slides) — use decimals; TAR = after-tax return, PTR = pretax return |
| Holding-period rule of thumb | `Average holding period ≈ 1 / turnover` (205% → ~0.49 yr; 2% → ~50 yr) |
| 130/30 exposures | Long 1.30 × capital, short 0.30 × capital → net 100%, gross 160% |
| Price decomposition (value vs growth) | `P = EPS × P/E` — value bets on P/E re-rating, growth on EPS growth at constant P/E |
| Expected utility (Exhibit 11.27, hidden slide) | `EU = ER − σ² / RT` — inferred: reproduces all six exhibit values; RT = risk tolerance |
| Brinson et al. (1986) | Strategic asset allocation explains **93.6% of the variation** in quarterly returns (not 93.6% of the return) |

No Excel functions are used in the Topic 6 deck. For tracking error by hand in Excel, the sheet form is `=SQRT(SUMSQ(diff_range)/COUNT(diff_range))`. `STDEV.P`/`STDEV.S` subtract the mean, so they give the deck's σΔ, not the sheet's σ(TP).

## Bond Valuation, Duration and Convexity — Topic 7

None of these is on the official exam formula sheet. Memorise all of them.

```
P0 = Σ CF_t / (1 + i)^t                       bond price; i = YTM per period (YTM/m), t in periods
YTM < coupon → premium;  YTM > coupon → discount;  YTM = coupon → par
```

```
D = Σ [ t × CF_t / (1 + i)^t ] / P0           Macaulay duration: PV-weighted average payment date
                                              (in periods; divide by m for years; zero-coupon D = maturity)
```

```
Mod D = D / (1 + i/m)                         modified duration (D in years, i = annual YTM)
ΔP/P ≈ −Mod D × Δi                            % price change; Δi annual, as a decimal
ΔP   ≈ −Mod D × Δi × P                        dollar price change
BPV  = Mod D × 0.0001 × P                     dollar change for a 1 basis point move
D_port = Σ w_j × D_j                          portfolio duration; w_j = market-value weight
```

```
Convexity = { [ Σ CF_t/(1 + i)^t × (t² + t) ] / (1 + i)² } ÷ P
                                              in periods²; divide by m² to annualise
ΔP ≈ −Mod D × Δi × P  +  0.5 × Convexity × (Δi)² × P
                                              duration + convexity; the convexity term is ALWAYS +
```

```
Contingent immunisation (textbook method, illustrative):
  required terminal value = V0 × (1 + floor)^T
  required value today    = required terminal value / (1 + current rate)^T
  safety margin           = current portfolio value − required value today
  cushion spread          = current market rate − floor return
```

**Excel:** the deck does not use Excel for this topic. For checking: `=PV(rate/m, n*m, -C/m, -F)` for price, and `=DURATION(settle, maturity, coupon, yld, freq)` / `=MDURATION(...)` for Macaulay / modified duration in years.

## Futures and Options — Topic 8

```
Long futures profit   = P_T − F_0                 agreed to buy at F_0; no premium, no floor
Short futures profit  = F_0 − P_T                 agreed to sell at F_0
Futures hedge ratio   n = (PV × β) / (Index × $25)   SPI 200 = $25 per index point (deck: 8,131,300 / (8,131.30 × 25) = 40)

Call payoff (ON SHEET)  = max(S_T − X, 0)         holder's value at expiry, no premium
Put payoff  (ON SHEET)  = max(X − S_T, 0)         max payoff = X (at S_T = 0)
Long option profit      = payoff − premium        short option profit = premium − payoff
Call break-even         = X + premium             put break-even = X − premium
```

Value drivers: S ↑ → call ↑ put ↓ · X ↑ → call ↓ put ↑ · σ ↑ and T ↑ → **both** ↑ · r ↑ → call ↑ put ↓ · dividends ↑ → call ↓ put ↑. Black–Scholes is shown on slides 10 and 13 but is not on the sheet and is not worked in the deck.

## Option Strategies — Topic 8 (none on the sheet — build from the two payoff lines)

```
Protective put   S_T + max(K − S_T, 0) − p        floor = K − p                 (deck: 8,125 − 42 = 8,083)
Collar           long OTM put + short OTM call    floor = K_put, cap = K_call   (deck: $97 / $108, net premium 0)
Covered call     profit = S_T − (S_0 − C)  if S_T ≤ X;  X − (S_0 − C) if S_T > X
                 break-even S_0 − C; max value X + C   (deck: 34.76; 45.24)
Long call to buy later   max cost = K + c          (deck: 8,200 + 19 = 8,219)
Short put to buy later   cost on a fall = K − p    (deck: 8,075 − 20 = 8,055), uncapped on a rise
Long straddle    break-evens K ± (c + p)           (deck: 8,125 ± 92 → 8,033 / 8,217)
Short straddle   max gain c + p at K; break-evens K ± (c + p)   (deck: 80; 8,045 / 8,205)
Strip / strap    1C+2P / 2C+1P; doubled side's break-even is K ∓ cost/2
Long strangle    break-evens K_put − cost, K_call + cost   (deck: 39; 8,036 / 8,239)
Short strangle   below K_put: S_T − (K_put − credit); above K_call: (K_call + credit) − S_T   (deck: S_T − 8,041; 8,234 − S_T)
Bull spread      BUY the LOW strike, sell the high (calls = debit, puts = credit)
Bear spread      BUY the HIGH strike, sell the low (calls = credit, puts = debit)
Debit spread     max loss = debit; max gain = (K_high − K_low) − debit
Long butterfly   +1 K_1, −2 K_2, +1 K_3;  D = P_1 + P_3 − 2P_2;  max gain (K_2 − K_1) − D;  break-evens K_1 + D, K_3 − D
Range forward    long call (upper K) + short put (lower K), zero cost; collar = the hedger's mirror
```

**Excel (Topic 8 workbooks):** call value `=MAX(S-X,0)`, put value `=MAX(X-S,0)`; long/short sign `=IF(cell="buy",1,-1)`; initial cash flow `=IF(cell="buy",-premium,premium)`; position = `SUM(option values) + initial cash flow`; hedge ratio `=ROUND(PV*Beta/(Index*25),0)`.

## Hedge Funds and Alternatives — Topic 9

*Nothing from Topic 9 is on the official exam formula sheet. Memorise all of it.*

| Concept | Formula |
|---|---|
| **High-water mark (HWM)** | `Performance fee = rate × max(0, price − HWM)`; if price > HWM, charge the fee and reset `HWM = price`; otherwise no fee and the HWM is unchanged |
| HWM over many periods | `Total performance fee = rate × (final new high − starting HWM)`: the fee applies only to gains above the previous peak, never to recovered losses |
| Management fee | `Mgmt fee = m × opening NAV` (deck: m ≈ 1.5%; Exhibit 17.14 mean 1.4%, median 1.0%) |
| **Fee waterfall, hard hurdle** | `Perf fee = p × max(0, gain after mgmt fee − h × NAV)`; investor's net = gain − mgmt fee − perf fee. State your conventions |
| Fee waterfall, soft or no hurdle | Once the hurdle is cleared, `Perf fee = p × gain after mgmt fee` |
| Fund-of-funds net return | Apply the underlying fund's fees first, then the FoF's fees to what is left: two layers |
| J-curve, since-inception return | `(NAV_t / NAV_0)^(1/t) − 1`: negative in the early years, positive later |
| Merger-arbitrage implied probability (textbook, not on the slides) | `P = (current − fail price) / (offer − fail price)`; buy the target if your probability is above P, short it if below |
| Adding a hedge fund to a portfolio | `β_p = Σwᵢβᵢ`, `E(R_p) = ΣwᵢE(Rᵢ)`; judge with Treynor `(E(R) − R_f)/β` (Topic 10, on the sheet) or return per unit of beta (sample Q8) |

## Performance Evaluation — Topic 10

**Tracking a benchmark** (all three on the official sheet; divisor `1/T`)

```
ATP   = (1/T) Σ (R_pt − R_Bt)            average tracking — errors in opposite directions CANCEL
AATP  = (1/T) Σ |R_pt − R_Bt|            average absolute tracking — counts errors both ways
σ(TP) = √[ (1/T) Σ (R_pt − R_Bt)² ]      tracking error — penalises LARGE misses (root-mean-square, no mean subtracted)
```

**Risk-adjusted measures** (Sortino is NOT on the sheet — memorise it)

```
Sharpe        S  = (R̄ − RFR) / σ                 excess return per unit of TOTAL risk; market's S = CML slope
Treynor       T  = (R̄ − RFR) / β                 excess return per unit of SYSTEMATIC risk; market's T = R_M − RFR
Jensen        α  = (R̄ − RFR) − β(R̄_m − RFR)      return above the CAPM/SML; regression intercept; + = superior
              R_jt − RFR_t = α + β(R_mt − RFR_t) + e_jt          (or any multifactor model on the right)
Info ratio    IR = (R̄ − R̄_b) / σ_ER              average active return ÷ tracking error
Sortino       ST = (R̄ − τ) / DR                  return above minimum acceptable τ ÷ DOWNSIDE risk
Semi-dev      DR = √[ (1/n) Σ_(R below R̄) (R_t − R̄)² ]    deck: hurdle = portfolio mean, n = number of below-mean periods
Link          α  = β × (T − T_M)                 alpha and Treynor always agree on above/below the SML
```

**Fund return and attribution** (both on the sheet; the sheet's fund-return line prints garbled — this is the correct form, slide 32)

```
R_it = (EP_it + Div_it + Cap.Dist_it − BP_it) / BP_it      include dividends AND capital-gain distributions

Allocation = Σ (w_pi − w_bi) × R_bi        over/under-weighting segments, at BENCHMARK segment returns
Selection  = Σ  w_pi × (R_pi − R_bi)       picking within segments, at PORTFOLIO weights
Allocation + Selection = R_portfolio − R_benchmark
```

**Which measure when:** Sharpe — fund is the investor's whole portfolio · Treynor — fund is one part of a diversified whole · Jensen — out-performance in % points, testable · IR — active manager vs benchmark · Sortino — investor only minds returns below a minimum.

**Benchmark checklist:** unambiguous, investable, measurable, appropriate, reflective of current opinions, **specified in advance**.

*(No Excel workbook accompanies the Topic 10 deck.)*

## Excel function map

| Task | Sample (÷ n−1) | Population (÷ n) |
|---|---|---|
| Variance | `VAR.S` | `VAR.P` / `VARP` |
| Standard deviation | `STDEV.S` | `STDEV.P` |
| Covariance | `COVARIANCE.S` | `COVARIANCE.P`, **Data Analysis → Covariance** |
| Correlation | `CORREL` — identical either way | |

**Matrix work:** `=SUMPRODUCT(P, R)` for `E(R)`; `=MMULT(MMULT(wᵀ, Σ), w)` for `σ²_port`; `=TRANSPOSE()` to turn a weight row into a column. Data Analysis → Covariance returns only the **lower triangle** — mirror it into a full square before `MMULT`, or the blank cells are read as zeros and portfolio variance is understated.

**Factor regressions (Topic 4):** **Data Analysis → Regression** with Y = the stock's *excess* return and X = **all factor columns selected as one block** (multivariate — never one `SLOPE()` per factor). Read coefficients, t-stats and R² from the SUMMARY OUTPUT; its pasted output is the exception to the every-cell-is-a-formula rule in the briefing. Single-factor equivalents for quick checks: `SLOPE(y, x)`, `INTERCEPT(y, x)`, `RSQ(y, x)`.

---

## EXAM TRAPS — QUICK CHECKLIST

1. **`n` in annualising is YEARS**, not number of observations.
2. **AM > GM always** (unless all returns identical). If you get GM > AM, you've made an arithmetic error.
3. **Variance divisor:** `/n` for population, `/(n−1)` for a sample. Covariance in Topic 2 uses `n−1`. Excel: `VAR.P` vs `VAR.S`.
4. **CV: lower is better. Sharpe: higher is better.** Opposite directions.
5. **Margin call, long:** numerator is the **LOAN**, denominator uses **(1 − MM)**.
6. **Margin call, short:** denominator uses **(1 + MM)**. The sign flips.
7. **Short sellers pay the dividend** — it's a cash outflow, subtract it.
8. **Rate of return on a short** divides by the **margin deposit**, not the position value.
9. **Utility function uses σ² (VARIANCE)**, not σ. Square it.
10. **Portfolio return is a weighted average. Portfolio risk is not.**
11. **r = −1 does not automatically mean σ_p = 0** — only at the specific risk-minimising weights.
12. **R² = r² is always positive**; correlation can be negative.
13. **Number of covariance terms is n(n−1)/2** for *unique pairs*, but `n(n−1)` if counting both `Cov(i,j)` and `Cov(j,i)` in the double-sum formula. Read the question.
14. **Stop orders become market orders** when triggered — gap risk means you may not get your stop price.
15. **State your assumptions** on ambiguous questions (interest treatment on shorts, rounding of share counts). Markers reward method.
16. **Any `r < +1.0` gives a diversification benefit** — not "any *low* r". A correlation of 0.8 still helps. The threshold is exactly +1.0.
17. **Correlation is divisor-invariant only if you are consistent.** `COVARIANCE.P` over `STDEV.S` produces a number that is not a correlation.
18. **σ scales with √t, not t.** Multiplying a daily SD by 252 overstates it by a factor of √252 ≈ 15.9.
19. **Weighted-average-of-annualised ≠ annualised-portfolio.** Weight the *periodic* returns, then annualise once. Annualising is non-linear.
20. **Minimum variance ≠ maximum Sharpe.** They are different points on the same frontier, and questions ask for one or the other deliberately.
21. **A strategy back-test needs a benchmark.** Buy-and-hold on the same asset over the same window, and a turnover/cost count. A positive gross return proves nothing.
22. **Covariance is measured against each series' own mean, not zero.** A positive covariance does not mean both assets rose.
23. **Only the tangency portfolio M has the maximum `(E(R) − RFR)/σ` ratio.** Every other point on the efficient frontier is dominated by some RF+M combination at the same risk level — don't assume any frontier portfolio is "efficient enough".
24. **`w_RF` can be negative.** A negative weight in the risk-free asset means *borrowing*, not an invalid answer — don't discard it as an error.
25. **The CML only prices fully diversified portfolios.** Never plug a single stock's own `σ` into the CML formula to find its "required return" — a single stock needs the **SML** and **beta**, not the CML and total risk.
26. **β = Cov(i,M)/σ²_M, not Cov(i,M)/σ_M.** Dividing by σ_M once (not squared) is a very common slip and gives a number roughly `σ_M` times too large.
27. **A negative beta still has a positive CAPM-required return in most exam numbers** — it's *lower than the RFR*, not negative itself, unless the premium × beta term exceeds the RFR.
28. **Don't compare stocks' estimated returns to each other.** Compare each stock's own estimated return to its own CAPM-required return. The stock with the single highest forecast return is not automatically the best buy.
29. **Changing the market proxy (S&P 500 vs a global index) changes beta and every downstream CAPM figure.** If a question changes the index used, expect the beta — and the mispricing verdict — to change too, even for the identical stock and time period.
30. **APT valuation compares the DISCOUNTED forecast to today's price** — never the raw forecast to the model's future price. Get it backwards and every stock looks underpriced.
31. **An arbitrage portfolio's factor exposures must cancel per factor**, not just in aggregate — check each λ's column separately. And a losing leg is fine: the profit is a portfolio property.
32. **Fama–French regressions use EXCESS returns on both sides.** Regressing raw returns on the factors shifts the intercept and corrupts the loadings.
33. **SMB/HML sign-reading:** negative SMB = *large*-cap behaviour, positive HML = *value* behaviour. Saying "negative SMB = small" reverses the classification.
34. **High R² does not make every factor significant** (and vice versa). Joint fit is R²; per-factor pricing is the t-stat. Portfolio B in Tutorial 4: R² = 0.91 while Factor 2's t = 0.77.
35. **Factor sensitivities come from ONE multivariate regression, not K univariate SLOPE() calls** — univariate slopes smuggle in the other factors' effects whenever factors are correlated (the Topic 4 workbook's own footnote concedes this).
36. **Fewer runs than expected is evidence AGAINST weak form.** Fewer runs means longer streaks, i.e. trends, i.e. predictability. More runs than expected (constant reversals) also breaks independence.
37. **ρ² is the explained share, not ρ.** A lag-1 autocorrelation of 0.10 explains 1% of today's return variation, not 10%.
38. **Abnormal return subtracts the market return (`AR = R − Rm`), not the risk-free rate,** and outperformance only counts if it is risk-adjusted and survives transaction costs.
39. **Event-study verdicts depend on timing.** A jump on day 0 then a flat CAR = efficient. Drift after day 0 = against semi-strong (PEAD). A run-up before day 0 (leakage or anticipation, e.g. stock splits) is not a violation.
40. **AAR averages across firms for one day; CAR sums AARs across days.** Don't sum one firm's ARs and call it the event-study CAR.
41. **The forms are nested one way only.** Strong ⇒ semi-strong ⇒ weak. A weak-form-efficient market can still fail semi-strong tests.
42. **Strong form is rejected because of INSIDERS, but copying published insider trades doesn't pay after costs.** The second fact supports semi-strong efficiency, not strong.
43. **Anomaly ≠ proof of inefficiency (joint hypothesis).** Size, P/E and B/M effects may mean the CAPM is the wrong risk model; Fama–French turned them into SMB and HML.
44. **Annualise tracking error with √P, not P.** A weekly σΔ of 0.5% is 0.5 × √52 = 3.61% a year, not 26%.
45. **The exam sheet's σ(TP) is not quite "the standard deviation of Δ".** It squares the raw differences (no mean subtracted) and divides by T. Use the sheet's form when it's given; the two agree only when the average difference is zero.
46. **TCR: use decimals and divide, don't subtract.** `1 − 1.0335/1.0675 = 3.19%`, not 6.75 − 3.35 = 3.40%. Plugging in whole percentages (`1 − 9.90/10.41`) gives a nonsense 4.90%.
47. **Turnover divides by AVERAGE assets, and counts only securities SOLD.** Using ending assets, or adding purchases to sales, gives the wrong PT.
48. **Brinson's 93.6% is the share of return VARIATION explained by asset allocation**, not the share of return earned. Don't write that stock selection is worthless.
49. **Index fund vs ETF: the difference is how it trades.** ETFs trade on an exchange and can be short sold; index funds are bought from and redeemed with the manager. Both are cheap and passive.
50. **Strategic and insured allocation respond to a rally in opposite directions.** Strategic rebalances (sells shares back to the policy weight); insured buys more shares as wealth rises. "Increase shares as prices rise" means insured.
51. **Value assumes the P/E is below its natural level; growth assumes a constant P/E.** Swapping these reverses the classification.
52. **Convexity is always added.** `0.5 × C × (Δi)²` is positive whether yields rise or fall; only the duration term changes sign.
53. **Duration-only estimates are conservative.** They overstate the loss when yields rise and understate the gain when they fall, so the true price always sits above the tangent-line estimate.
54. **Semiannual bonds: convert units.** Running the duration formula on half-year periods gives half-years (÷2 for years), and convexity comes out in periods² (÷4). Slide 33's formula assumes m = 1.
55. **Read slide 27's `Δ(1 + i/m)` as Δi.** Taken literally it halves the predicted change for a semiannual bond. Use `ΔP/P ≈ −Mod D × Δi` with Mod D in years and Δi annual.
56. **Use Δi as a decimal.** A 50 bp rise is Δi = 0.005, and (Δi)² = 0.000025. Plugging in 0.5 or 50 inflates the answer 100× or more.
57. **More sensitive = longer maturity, lower coupon, lower YTM.** All three push value into distant cash flows. A short zero can have a higher duration than a longer high-coupon bond (a 20-year zero has D = 20 vs 12.37 for a 25-year 10% bond at 6%).
58. **State the rate view before choosing a bond portfolio.** For falling rates choose high duration, high convexity and non-callable; for rising rates choose low duration and higher yield. The marks are for matching the choice to the view.
59. **Only the expectations hypothesis explains every yield-curve shape.** Liquidity preference says the curve should *normally* slope up; segmented markets puts the shape down to institutional supply and demand in each maturity segment.
60. **Payoff ≠ profit, and the deck's "payoff" is the formula sheet's profit.** The sheet's payoff is `max(S−X,0)` with no premium. The deck's strategy tables label the premium-adjusted (or net-position) figure "Payoff". Label your columns in the exam.
61. **A protective put's floor is K − premium, not K.** The premium is paid in every state, so it lowers both the floor (8,083, not 8,125) and the upside.
62. **A futures hedge locks in the futures price, not today's index, and gives up all the upside.** The deck's hedge is fixed at 8,109, which is 22.30 points below the spot index of 8,131.30.
63. **Bull spread = buy the LOW strike, bear spread = buy the HIGH strike, for calls and puts alike.** A bull spread built with puts is a credit, not a debit (sample Q6: +$1.50).
64. **A doubled leg halves the distance to break-even on that side.** For a strip or strap, solve 2(K − S) = cost (or 2(S − K) = cost) instead of adding the full premium to K.
65. **Long and short straddles at the same strike have different premiums.** You buy at the offer and sell at the bid: $92 paid vs $80 received in the deck. Each side's break-evens use its own premium.
66. **A butterfly needs TWO short options at K_2.** The net premium is 2P_2 − P_1 − P_3, not the deck's "P2 − P1 − P3". With one short option the right arm never flattens.
67. **Short calls, short puts, short straddles and short strangles have capped gains and unlimited (or near-unlimited) losses.** The writer's best case is the premium.
68. **The deck's high-water-mark example says 20% but computes 25%.** Slide 46's row is labelled "Fee applied (at 20%)", but its formulas are `25%(8.20 − 7.80) = $0.10` and `25%(8.70 − 8.20) = $0.13`. At 20% the fees are $0.08 and $0.10. Use the rate the question gives and show the formula.
69. **High-water-mark fees apply above the old peak, not to the month-on-month rise.** In slide 46's month 3, the fee base is 8.20 − 7.80 = $0.40, not the $2.60 rise from $5.60. A gain that is still below the mark (month 5, $7.70 → $8.00) earns no fee at all.
70. **Raw returns are not risk-adjusted returns.** VC's 30–45% p.a. becomes −7.1% once adjusted for its beta of 1.4–1.7 against NASDAQ. Hedge funds have the tools to outperform, but the research says they "do not earn superior risk-adjusted returns".
71. **Merger arbitrage is an arbitrage-based strategy, even though slide 39 is titled "Equity-based".** Buy the target when you think the deal is *more* likely than the price implies, and short it when you think it is less likely.
72. **"Market neutral" is not "low risk".** The longs and shorts offset market exposure, not all risk. The equity market neutral index was the worst strategy of 2008, at −40.3% (Exhibit 17.18).
73. **Hedge funds target absolute returns; mutual funds are judged relative to a benchmark.** Losing 8% when the index loses 10% is a mutual-fund success and a hedge-fund failure.
74. **A fund of funds charges two layers of fees.** For example, 1.5 + 20 underneath plus 1 + 10 on top takes a 12% gross return down to 6.66%, a drag of 44.5% of the gross.
75. **Early negative private equity returns are the J-curve, not proof of a bad manager.** Exhibit 17.22 bottoms at about −8% IRR around years 2–3 and crosses zero at about year 4.
76. **Sharpe divides by σ, Treynor by β — they disagree for poorly diversified funds.** Unsystematic risk lowers Sharpe but is invisible to Treynor; that conflict is Sample Q9(a).
77. **ATP near zero does not mean good tracking.** Positive and negative errors cancel; check AATP or σ(TP) before concluding the fund hugs its benchmark.
78. **Tracking error on the sheet uses `1/T` and raw differences.** It is a root-mean-square, not a sample standard deviation — use it exactly as printed.
79. **Jensen: subtract RFR from the market return before multiplying by β.** `α = (R_p − R_f) − β(R_m − R_f)`, and the CAPM it rearranges is not on the sheet.
80. **Sortino is not on the formula sheet, and its semi-deviation has conventions.** The deck uses the portfolio's mean as the DR hurdle (so a 3% year counts against a 4% mean) and divides by the number of below-mean periods; τ appears only in the numerator.
81. **Attribution: allocation uses benchmark returns, selection uses portfolio weights.** Swap either and the two effects stop summing to the excess return — use that sum as your check.
82. **A fund's return includes capital-gain distributions.** Using price change alone (EP − BP)/BP understates it; the sheet's version of this formula is garbled, so know `(EP + Div + Cap.Dist − BP)/BP` by heart.
83. **In peer-group tables the 5th percentile is the top.** Percentiles count down from the best return; the 95th percentile is near the bottom.

---

*Notes compiled from EFB335 Topic 1–4 lecture slides, the Tutorial 1–4 question sheets, and the Topic 1–4 Excel workbooks. All numerical worked examples independently verified in Python.*

*Topics 5–10 sections and traps 36–83 added 3 Nov 2026 from the Topic 5–10 lecture decks (full notes in docs 30–35). Every number re-checked in Python.*
