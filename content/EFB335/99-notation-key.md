# EFB335 — Notation Key

Every symbol and abbreviation used in the EFB335 notes, in one place. Each note also has its own **Notation key** box under the title, listing only the symbols that note uses — tap it to open.


## Returns and risk

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

## Portfolios

| Symbol | Means |
|---|---|
| `w, wᵢ` | Weight — the fraction of the portfolio held in asset i. Weights add up to 1 |
| `Cov(i,j)` | Covariance — do two assets move together (+) or in opposite directions (−)? Cov(i,i) is just σᵢ² |
| `r(i,j), ρ` | Correlation — covariance rescaled to −1 … +1. +1 moves perfectly together, −1 perfectly opposite, 0 unrelated |
| `R²` | R-squared — the share of the variation a regression explains (0 to 1) |
| `U` | Utility — an investor's satisfaction score for a portfolio. Higher is better |
| `A` | Risk-aversion coefficient — how much the investor dislikes risk (≈7 conservative, ≈1 aggressive) |

## Margin trading

| Symbol | Means |
|---|---|
| `IM` | Initial margin — the % of the purchase paid with your own money |
| `MM` | Maintenance margin — the minimum equity % before the broker makes a margin call |
| `N` | Number of shares bought, or sold short |
| `P*` | Margin-call price — the share price that triggers a margin call |

## Asset pricing

| Symbol | Means |
|---|---|
| `β (beta)` | Beta — how sensitive an asset is to market moves; its systematic risk. β = 1 moves with the market |
| `α (alpha)` | Alpha — the return above (or below) what the CAPM says the risk deserves |
| `CML` | Capital market line — the best mixes of the risk-free asset and the market portfolio, priced on total risk σ |
| `SML` | Security market line — the CAPM as a line: required return against beta |
| `CAPM` | Capital asset pricing model — E(Rᵢ) = R_f + βᵢ[E(R_M) − R_f] |
| `APT` | Arbitrage pricing theory — expected return explained by several risk factors, not just the market |
| `λ (lambda)` | Factor risk premium — the extra return paid for exposure to one factor (APT) |
| `bᵢⱼ` | Factor sensitivity — how much asset i responds to factor j (a separate "beta" for each factor) |
| `ε` | Error term — the part of the return the model does not explain (firm-specific) |
| `SMB` | Small Minus Big — the Fama–French size factor (small firms' return minus big firms') |
| `HML` | High Minus Low — the Fama–French value factor (high book-to-market minus low) |

## Funds and tax efficiency

| Symbol | Means |
|---|---|
| `PT` | Portfolio turnover — securities sold ÷ assets under management |
| `SS` | Total dollar value of securities sold in the year |
| `AUM` | Assets under management — the (average) dollar size of the fund |
| `TCR` | Tax cost ratio — the share of return lost to tax |
| `TAR` | Tax-adjusted return — the return after tax |
| `PTR` | Pre-tax return |

## Derivatives

| Symbol | Means |
|---|---|
| `S_T` | Share price at expiry (time T) |
| `X` | Strike (exercise) price of the option |

## Performance evaluation

| Symbol | Means |
|---|---|
| `ATP` | Average tracking performance — average of (portfolio − benchmark) returns |
| `AATP` | Average absolute tracking performance — the same, ignoring sign |
| `σ(TP)` | Tracking error — standard deviation of (portfolio − benchmark) returns |
| `R_pt, R_Bt` | Portfolio and benchmark return in period t |
| `SI (Sharpe)` | Sharpe index — (R_p − R_f) ÷ σ_p: excess return per unit of total risk |
| `TI (Treynor)` | Treynor index — (R_p − R_f) ÷ β_p: excess return per unit of systematic risk |
| `IR` | Information ratio — active return ÷ tracking error |
| `W_pi, W_bi` | Weight in segment i — portfolio (p) vs benchmark (b) |
| `R_pi, R_bi` | Return in segment i — portfolio (p) vs benchmark (b) |
| `EP, BP, Div, Cap.Dist` | Fund return inputs — ending price, beginning price, dividends paid, capital-gain distributions |
