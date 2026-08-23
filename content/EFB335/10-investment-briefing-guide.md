# Assessment 1 — Investment Briefing Prep Guide

**Wednesday 2 September 2026 · opens 9:00am, files in by 11:00am Brisbane time · 20% · Topics 1–4 · Firefox only**

This guide is reverse-engineered from the sample briefing the unit supplied (`EFB335 Sample Investment Briefing` — Instructions, Data, and the Solutions workbook and note). Every number in the sample solution was recomputed independently in Python; two discrepancies are flagged in §6.

---

## 1. The task shape

You are handed a workbook of **total return indices** (daily, ~5 years) for ~20 large ASX stocks, the **S&P/ASX 200** total return index, and four **Fama-French factor** columns (`Mkt-RF`, `SMB`, `HML`, `RF`). You produce:

| Deliverable | Marks | Notes |
|---|---|---|
| Excel workbook with **14 calculations** | 14 (1 each) | **Every cell must be a formula.** Hard-coded numbers score 0, except output from Data Analysis tools (Regression, Histogram, Correlation). |
| Briefing note for the client meeting | 6 | **Max 500 words, dot points preferred.** A summary of the Excel analysis, written for a manager. |

> The 14 × 1-mark structure means the marker is ticking cells. A correct number typed in by hand is a zero. If you can't remember a function, build it from primitives rather than pasting a value.

The 14 calculations in the sample, in the order asked:

1. Daily returns for an **equally weighted** portfolio
2. Average daily return (HPY) — each stock, portfolio, benchmark
3. **Annualised** average return — each stock, portfolio, benchmark
4. Daily and annualised **standard deviation** — each stock, portfolio, benchmark
5. **Sharpe ratio** — each stock, portfolio, benchmark (RFR given: 3.85% pa)
6. **Best and worst** performing shares over the period
7. **Correlation matrix** — stocks, portfolio, benchmark
8. Shares with the **highest and lowest** correlation
9. **Beta** — each stock and the portfolio vs the ASX 200
10. Chart: **cumulative** daily returns of the portfolio
11. Chart: **distribution** (histogram) of portfolio daily returns
12. **Mean and median** of that distribution
13. **Factor coefficients** for the SMB and HML biases (regression)
14. **Annualised expected rate of return** — each share, portfolio, benchmark

---

## 2. Build order and exact formulas

Lay the workbook out as the sample does — a `Prices` sheet untouched, a `Returns` sheet that mirrors it column-for-column, summary rows under the data, and separate sheets for the correlation matrix, histogram and regression. Assume prices sit in `Prices!B3:V1307` (row 3 = first date, column V = ASX 200) and factors in `X:AA`.

### Step 1 — Daily returns (the whole thing rests on this)

```
Returns!B4:   =Prices!B4/Prices!B3-1        ← fill right to V, fill down
```

> Total return indices already include dividends, so **`P₁/P₀ − 1` is the full HPY** — do not add a dividend term. And the first return row is the *second* price row: row 3 has no return.

### Step 2 — Equally weighted portfolio (calc 1)

```
Returns!W4:   =AVERAGE(B4:U4)               ← 20 stocks, NOT including V (the index)
```

> Average across the **stock** columns only. Dragging the range one column too far silently folds the benchmark into the portfolio and shifts every downstream number.

### Step 3 — Averages (calcs 2 and 3)

```
Arithmetic daily mean:      =AVERAGE(B4:B1307)
Annualised (arithmetic):    =(1+AVERAGE(B4:B1307))^252-1
Geometric daily mean:       =PRODUCT(1+B4:B1307)^(1/COUNT(B4:B1307))-1      ← array formula (Ctrl-Shift-Enter in old Excel)
Annualised (geometric):     =PRODUCT(1+B4:B1307)^(1/YEARFRAC($A$3,$A$1307))-1
```

The sample solution reports **both**, and headlines the **geometric / YEARFRAC** version as "Annualised Average". `YEARFRAC(31/12/2020, 31/12/2025)` = 5.0, so this is simply `(cumulative wealth ratio)^(1/5) − 1` — the true compound annual growth rate.

```
Portfolio:  1304 daily returns, cumulative wealth ratio = 1.9213
Geometric pa  = 1.9213^(1/5) − 1   = 13.95%
Arithmetic pa = (1 + 0.000533)^252 − 1 = 14.38%
```

> Arithmetic ≥ geometric always, and the gap widens with volatility (WiseTech: 28.5% arithmetic vs 17.6% geometric). State which one you're quoting. The Topic 1 rule — *geometric for what you actually earned, arithmetic for expected future return* — is the justification if asked.

### Step 4 — Standard deviation (calc 4)

```
Daily:      =STDEV.S(B4:B1307)
Annualised: =STDEV.S(B4:B1307)*SQRT(252)
```

> **Sample** (`STDEV.S`, n−1) — these are observed returns, a sample of the process. And σ scales with **√T**, not T: multiply by `SQRT(252)`, never by 252.

### Step 5 — Sharpe ratio and ranking (calcs 5 and 6)

```
Risk-free (given):   B1315 = 0.0385
Sharpe:              =(B1310-$B$1315)/B1313          ← annualised return less RFR, over annualised σ
Rank:                =RANK(B1317,$B$1317:$U$1317)     ← stocks only; 1 = best
```

"Best and worst performing" in the sample is read as **highest and lowest Sharpe ratio**, not raw return. On the sample data this gives **Westpac best** (Sharpe 0.83) and **CSL worst** (−0.53). Note that on raw geometric return QBE (21.9%) beats Westpac (20.2%) — so say which metric you ranked on, or give both.

> Keep every input *annualised* or every input *daily* — mixing an annual return with a daily σ produces a Sharpe in the hundreds. And anchor the RFR cell with `$` before you fill right.

### Step 6 — Correlation matrix (calcs 7 and 8)

**Data → Data Analysis → Correlation**, input range = all return columns including portfolio and index, *Labels in first row* ticked. Output is the lower triangle — that's fine for reading, but say so.

Then locate the extremes. Either eyeball it, or:

```
=MAX(B2:U21)   → 1.000 on the diagonal — useless
```

so instead exclude the diagonal: sort, or use `=LARGE(range, 21)` (the 21st largest skips the twenty 1.0s). On the sample: highest **BHP–Rio Tinto 0.83** (two iron-ore majors), lowest **ResMed–Woodside −0.04** (healthcare vs energy — near-zero, the diversification win).

### Step 7 — Beta (calc 9)

```
=COVARIANCE.S(B4:B1307,$V$4:$V$1307)/VAR.S($V$4:$V$1307)
```

Equivalent and quicker: `=SLOPE(B4:B1307,$V$4:$V$1307)` — y-range first (the stock), x-range second (the market). Both use consistent n−1 so they cancel. The index's own beta must come out as exactly 1.000 — use that as a sanity check. Sample portfolio beta: **0.99**.

> `SLOPE(known_y, known_x)` — stock first, market second. Reversed arguments give `1/β × ρ²`, a plausible-looking wrong number.

### Step 8 — Cumulative return chart (calc 10)

```
AB3:  1                    ← start at $1 (or 100)
AB4:  =AB3*(1+W4)          ← fill down; this is the wealth index of the portfolio
```

Insert a line chart of column AB against the dates in A. Title it, label the axis. The last cell (1.92 on the sample) *is* the cumulative return — it should agree with `PRODUCT(1+W4:W1307)` from Step 3.

### Step 9 — Histogram and mean/median (calcs 11 and 12)

**Data Analysis → Histogram**, input = portfolio daily returns, leave bin range blank (Excel picks ~35 bins), tick *Chart Output*. Then:

```
Mean:    =AVERAGE(W4:W1307)    = 0.000533
Median:  =MEDIAN(W4:W1307)     = 0.000713
```

Mean **below** median → left tail is longer → **negative skew**. Say "approximately normal with slight negative skew" and point at the chart. `=SKEW(W4:W1307)` (−0.28 on the sample) backs it up if you want a number.

### Step 10 — Factor regression (calc 13)

**Data Analysis → Regression**: Y = portfolio daily returns (`W4:W1307`), X = the four factor columns (`X4:AA1307`), *Labels* ticked if you include the header row. The sample regressed the raw portfolio return on `Mkt-RF, SMB, HML, RF`. A cleaner specification is excess return (`W − RF`) on `Mkt-RF, SMB, HML` — both are defensible; the sample's way is what the marker has seen.

Read the **Coefficients** and **P-value** columns:

| | Coefficient | P-value | Reading |
|---|---|---|---|
| SMB | −0.00278 | 1.9 × 10⁻¹³ | Negative → portfolio behaves like **large caps** |
| HML | −0.00320 | 3.3 × 10⁻²⁴ | Negative → portfolio behaves like **growth** (low book-to-market) |

Both p-values ≪ 0.05 → "statistically significant". The sample quotes these as −0.28% and −0.32%: the factor columns are in **percent units** (a day's `Mkt-RF` reads `1.23`, not `0.0123`), so each coefficient is the portfolio's daily return response to a one-percentage-point factor move.

> SMB = Small Minus Big, HML = High Minus Low (book-to-market). **Negative SMB = large-cap tilt; negative HML = growth tilt.** Get the sign story right — it's the whole of the interpretation mark for this item.

### Step 11 — Annualised expected return (calc 14)

```
=$B$1315 + B1320*($V$1324-$B$1315)        ← CAPM: RFR + β × (annualised market return − RFR)
```

with `V1324` the benchmark's annualised arithmetic return (10.38% on the sample). This is the Topic 3 SML: **expected** return is what the model says the asset should earn given its beta, and it is *not* the historical average. See §6 — the sample briefing note quotes the wrong row here.

---

## 3. The 500-word briefing note — a template

Dot points, manager-facing, every figure traceable to a cell. The sample note runs ~270 words and covers seven things; mirror it:

1. **Headline performance vs benchmark** — portfolio return and σ against the index's, over the period.
   *"Over the 5 years to Dec 2025 the equally weighted portfolio returned 13.95% pa (σ 12.77%) against the ASX 200's 9.89% pa (σ 12.35%)."*
2. **Best and worst stock** — with return and σ, and the metric you ranked on.
3. **Beta and the source of outperformance** — β ≈ 1 means market-like systematic risk, so any outperformance is **idiosyncratic** (stock selection), not leverage to the market.
4. **Distribution shape** — approximately normal, skew direction from mean vs median.
5. **Factor tilts** — sign and significance of SMB and HML, translated into plain English ("large-cap growth tilt").
6. **Forward-looking expected return and Sharpe** — CAPM expected return vs the index; Sharpe comparison (0.79 vs 0.49).
7. **One-line verdict** — "well positioned: higher return for similar risk, high Sharpe."

Every bullet = one number + one comparison + one consequence. Don't describe method ("I used STDEV.S…") — the workbook shows that.

---

## 4. Time plan for the two hours

| Clock | Task | Cumulative marks secured |
|---|---|---|
| 0:00–0:05 | Read the instructions twice. Note the RFR, the period, what "portfolio" means (equal weight? given weights?). Write any ambiguity into a cell on the sheet. | — |
| 0:05–0:20 | Returns sheet, portfolio column, cumulative column, all summary rows (averages, σ, Sharpe, rank, beta, CAPM). Fill-right once. | 1–6, 9, 14 |
| 0:20–0:30 | Data Analysis: Correlation, Histogram, Regression. Three dialogs. | 7, 11, 13 |
| 0:30–0:40 | Highest/lowest correlation, mean/median, line chart, chart titles. | 8, 10, 12 |
| 0:40–0:45 | **Upload the workbook now.** Sanity checks (§5). | all 14 |
| 0:45–1:15 | Briefing note. | +6 |
| 1:15–1:30 | Re-upload both files. Read the note against the numbers once more. | done |
| 1:30–2:00 | Buffer. Do not start "improving" formulas you've already uploaded. | |

The instructions let you upload early and replace later. **Use that** — a submitted 14/14 workbook at 0:45 beats a polished one at 11:01.

---

## 5. Sanity checks before you upload

- Index's beta vs itself = **1.000** exactly.
- Index's correlation with itself = 1; every diagonal of the matrix = 1.
- Last value of the cumulative column = `PRODUCT(1+returns)`; and `(that)^(1/years) − 1` = your geometric annual return.
- Every Sharpe is between roughly −1 and +1.5 on daily equity data. A Sharpe of 12 means a daily σ met an annual return.
- Arithmetic annual ≥ geometric annual for every column.
- Portfolio σ (12.8%) < average of the stock σs (~24%) — if not, your portfolio column isn't the average of the stocks.
- Regression "Observations" equals your return-row count (1304 on the sample). If it's 1303 or 1305 your ranges are misaligned by a row, and the coefficients are junk.
- `Ctrl+~` shows formulas — scan the summary block for any cell that is a bare number other than the RFR.

---

## 6. Where the sample solution and its briefing note disagree

Two things to know so you don't copy a defect into your own work. Confirm both with the tutor if in doubt.

**(a) "Expected return" quotes the wrong row.** The briefing note says the portfolio's expected annual return is **14.38%**. That figure is the *annualised arithmetic average* (row "Annualised Arithmetic Ave"). The workbook's own row labelled *Annualised expected rate of return* is the **CAPM** figure:

```
E(R_p) = 3.85% + 0.9932 × (10.38% − 3.85%) = 10.34%
```

Both are defensible answers to calc 14 — arithmetic mean as the naive forecast, CAPM as the Topic 3 model — but the note and the workbook should agree with each other. Recommended: report the CAPM number as the "expected return", and mention the historical arithmetic average separately if you want to argue the portfolio has beaten its CAPM-required return (positive alpha ≈ 14.4% − 10.3% ≈ 4%).

**(b) "Best performing" means best Sharpe, not best return.** Westpac is "best" in the note (20.23% pa) but QBE returned more (21.89% pa geometric) and WiseTech far more on an arithmetic basis (28.5%). Westpac is top only on the **Sharpe rank** (0.83 vs QBE 0.75). The spreadsheet's `RANK` row is on Sharpe, so that's the intended metric — but the note never says so. Say which you used.

Everything else in the sample — portfolio 13.95%/12.77%, index 9.89%/12.35%, CSL −8.20%/22.66%, β 0.99, Sharpe 0.79 vs 0.49, SMB −0.28% and HML −0.32% both significant, negative skew — reproduces exactly.

---

## 7. Variations to expect on the day

The data will differ and the instructions may too. Things the same toolkit handles:

- **Given weights instead of equal weights** → `=SUMPRODUCT($weights, B4:U4)` in the portfolio column (weights as a row above the data, anchored).
- **Monthly instead of daily data** → replace every `252` with `12`; `YEARFRAC` approach is unchanged.
- **A different RFR, or a daily RFR column** → Sharpe on excess returns: `=AVERAGE(B4:B1307-$AA$4:$AA$1307)/STDEV.S(...)` then annualise.
- **Asked for covariance instead of correlation** → Data Analysis → Covariance (population, ÷n) or `COVARIANCE.S`. Say which.
- **Asked for the CML / optimal combination** → Topic 3 notes: the tangency portfolio's Sharpe is the CML slope; `E(R) = RFR + [(E(R_m) − RFR)/σ_m] × σ_p`.
- **Asked to compare two portfolios or a before/after** → same block, two columns, `RANK` both.

---

## Checkpoint

1. Why is `P₁/P₀ − 1` the complete return here, with no dividend term?
2. A stock shows arithmetic 28.5% pa but geometric 17.6% pa. What does the gap tell you?
3. SMB coefficient +0.004, p = 0.30. Interpret.
4. Your portfolio Sharpe comes out at 18.6. What went wrong?
5. The index's beta against itself is 0.998. What went wrong?

<details><summary>Answers</summary>

1. The series is a **total return index** — dividends are already reinvested into the index level.
2. High volatility. The arithmetic mean overstates compound growth by roughly σ²/2; WiseTech's 43% σ explains an ~11-point gap.
3. A small positive (small-cap) tilt that is **not statistically significant** — you can't distinguish it from zero. Say "no meaningful size tilt."
4. Units mismatch — annualised return divided by **daily** σ (or daily excess return over annual σ). Both inputs must be on the same basis.
5. Range misalignment — the two ranges in `COVARIANCE.S` / `SLOPE` are offset by a row, or the `VAR.S` range differs from the covariance's x-range. It must be exactly 1.
</details>

---

*Built from the unit's sample Investment Briefing (Instructions, Data, Solutions workbook and briefing note, Semester 2 2026). Every figure recomputed independently in Python from the supplied price data; the two discrepancies in §6 are between the unit's own solution files.*
