#!/usr/bin/env python3
"""
calnetstudy — notation keys.

Adds a collapsible "Notation key" box under the title of every note in the
current units, listing only the symbols that note actually uses, and writes a
full per-unit key to <UNIT>/99-notation-key.md.

    python3 scripts/notation.py            # (re)generate everything
    python3 scripts/notation.py --check    # report, change nothing

Idempotent: the box lives between <!-- notation:start --> / <!-- notation:end -->
markers and is rebuilt in place. Re-run it after adding notes (e.g. EFB335
Topics 5-10) and the new notes get keys automatically.

Entry = (group, regex, symbol, meaning, scope, context)
  scope   'code' -> only matched inside code blocks/spans (formulas)
          'any'  -> matched anywhere (distinctive acronyms)
  context optional regex that must also appear somewhere in the note
"""
import os, re, sys

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'content')
C, A = 'code', 'any'

EFB335 = [
 # returns and risk
 ('Returns and risk', r'E\((?:R|r|HPY)', 'E(R)', 'Expected return — the probability-weighted average return you expect. E(Rᵢ) for asset i, E(R_p) for a portfolio', C, None),
 ('Returns and risk', r'\bR(?:ᵢ|ⱼ|_i|_p|_port|it|ᵢₜ)(?![A-Za-z])|\bR_p\b', 'Rᵢ, R_p', 'A return — Rᵢ on asset i, R_p on the portfolio. The subscript says whose return it is', C, None),
 ('Returns and risk', r'\bRFR\b|\bR_?f\b|\bRF\b|R_F\b|w_RF|σ_RF', 'RFR, R_f', 'Risk-free rate — the return on a riskless asset such as a government bill', C, None),
 ('Returns and risk', r'R_M\b|\bR_m\b|\bRm\b|E\(RM\)|R_mkt', 'R_M, R_m', 'Market return — the return on the whole market (e.g. the ASX 200 as a proxy)', C, None),
 ('Returns and risk', r'σ', 'σ (sigma)', 'Standard deviation — how widely returns swing around their average. The standard measure of risk', C, None),
 ('Returns and risk', r'σ²|VAR\.[SP]|VARIANCE', 'σ²', 'Variance — standard deviation squared. Same information as σ in squared units; σ = √σ²', C, None),
 ('Returns and risk', r'σ₁|σ₂|σ₃|σᵢ|σⱼ|σ_A|σ_B', 'σ₁, σᵢ', 'Standard deviation of one asset (asset 1, asset i …)', C, None),
 ('Returns and risk', r'σ_p\b|σ_port|σ_P\b|σp\b', 'σ_p, σ_port', 'Standard deviation of the whole portfolio', C, None),
 ('Returns and risk', r'σ_M\b|σ_m\b|σ²_?[mM]\b', 'σ_M', 'Standard deviation of the market', C, None),
 ('Returns and risk', r'\bCV\b', 'CV', 'Coefficient of variation — σ ÷ E(R), risk per unit of expected return. Lower is better', C, None),
 ('Returns and risk', r'\bHPR', 'HPR', 'Holding period return — ending value ÷ beginning value. 1.10 means +10%', C, None),
 ('Returns and risk', r'\bHPY', 'HPY', 'Holding period yield — HPR − 1, the return as a percentage', C, None),
 ('Returns and risk', r'\bAM\b', 'AM', 'Arithmetic mean — the simple average of the period returns', C, None),
 ('Returns and risk', r'\bGM\b', 'GM', 'Geometric mean — the compound average return per period. Always ≤ AM', C, None),
 ('Returns and risk', r'P₀|P₁|\bP_0\b|\bP_1\b', 'P₀, P₁', 'Price — P₀ at the start of the period, P₁ at the end', C, None),
 ('Returns and risk', r'D₁|\bD_1\b', 'D₁', 'Dividend received during the period', C, None),
 ('Returns and risk', r'\bm\b', 'm', 'Periods per year — 12 monthly, 52 weekly, 252 trading days', C, r'[Aa]nnualis|periods per year'),
 ('Returns and risk', r'\bn\b', 'n', 'Number of items — observations, periods or assets, depending on the formula', C, None),
 ('Returns and risk', r'Σ', 'Σ', '"Add them all up" — a sum over every item (Σᵢ = over every asset i)', C, None),
 ('Returns and risk', r'Π', 'Π', '"Multiply them all together" — a product over every period', C, None),
 # portfolio
 ('Portfolios', r'\bw(?:ᵢ|ⱼ|₁|₂|₃|_[A-Za-z]+|ᵀ)|\bw\b', 'w, wᵢ', 'Weight — the fraction of the portfolio held in asset i. Weights add up to 1', C, None),
 ('Portfolios', r'Cov', 'Cov(i,j)', 'Covariance — do two assets move together (+) or in opposite directions (−)? Cov(i,i) is just σᵢ²', C, None),
 ('Portfolios', r'r\(i,\s*j\)|ρ|r₁₂|\br_iM\b|CORREL|r\(1,\s*2\)', 'r(i,j), ρ', 'Correlation — covariance rescaled to −1 … +1. +1 moves perfectly together, −1 perfectly opposite, 0 unrelated', C, None),
 ('Portfolios', r'R²', 'R²', 'R-squared — the share of the variation a regression explains (0 to 1)', C, None),
 ('Portfolios', r'\bU\b|U₁', 'U', 'Utility — an investor\'s satisfaction score for a portfolio. Higher is better', C, r'[Uu]tility'),
 ('Portfolios', r'\bA\b', 'A', 'Risk-aversion coefficient — how much the investor dislikes risk (≈7 conservative, ≈1 aggressive)', C, r'U\s*=|[Uu]tility'),
 # margin
 ('Margin trading', r'\bIM\b', 'IM', 'Initial margin — the % of the purchase paid with your own money', C, None),
 ('Margin trading', r'\bMM\b', 'MM', 'Maintenance margin — the minimum equity % before the broker makes a margin call', C, None),
 ('Margin trading', r'\bN\b', 'N', 'Number of shares bought, or sold short', C, r'[Mm]argin'),
 ('Margin trading', r'P\*', 'P*', 'Margin-call price — the share price that triggers a margin call', C, None),
 # pricing models
 ('Asset pricing', r'β', 'β (beta)', 'Beta — how sensitive an asset is to market moves; its systematic risk. β = 1 moves with the market', C, None),
 ('Asset pricing', r'α', 'α (alpha)', 'Alpha — the return above (or below) what the CAPM says the risk deserves', C, None),
 ('Asset pricing', r'\bCML\b', 'CML', 'Capital market line — the best mixes of the risk-free asset and the market portfolio, priced on total risk σ', A, None),
 ('Asset pricing', r'\bSML\b', 'SML', 'Security market line — the CAPM as a line: required return against beta', A, None),
 ('Asset pricing', r'\bCAPM\b', 'CAPM', 'Capital asset pricing model — E(Rᵢ) = R_f + βᵢ[E(R_M) − R_f]', A, None),
 ('Asset pricing', r'\bAPT\b', 'APT', 'Arbitrage pricing theory — expected return explained by several risk factors, not just the market', A, None),
 ('Asset pricing', r'λ', 'λ (lambda)', 'Factor risk premium — the extra return paid for exposure to one factor (APT)', C, None),
 ('Asset pricing', r'\bb(?:ᵢⱼ|ij|i[0-9k]|ᵢ[0-9])', 'bᵢⱼ', 'Factor sensitivity — how much asset i responds to factor j (a separate "beta" for each factor)', C, None),
 ('Asset pricing', r'ε|\beᵢₜ|\beit\b', 'ε', 'Error term — the part of the return the model does not explain (firm-specific)', C, None),
 ('Asset pricing', r'\bSMB\b', 'SMB', 'Small Minus Big — the Fama–French size factor (small firms\' return minus big firms\')', A, None),
 ('Asset pricing', r'\bHML\b', 'HML', 'High Minus Low — the Fama–French value factor (high book-to-market minus low)', A, None),
 # topics 6-10 (formula sheet)
 ('Funds and tax efficiency', r'\bPT\b', 'PT', 'Portfolio turnover — securities sold ÷ assets under management', C, None),
 ('Funds and tax efficiency', r'\bSS\b', 'SS', 'Total dollar value of securities sold in the year', C, None),
 ('Funds and tax efficiency', r'\bAUM\b', 'AUM', 'Assets under management — the (average) dollar size of the fund', A, None),
 ('Funds and tax efficiency', r'\bTCR\b', 'TCR', 'Tax cost ratio — the share of return lost to tax', A, None),
 ('Funds and tax efficiency', r'\bTAR\b', 'TAR', 'Tax-adjusted return — the return after tax', C, None),
 ('Funds and tax efficiency', r'\bPTR\b', 'PTR', 'Pre-tax return', C, None),
 ('Derivatives', r'S_T', 'S_T', 'Share price at expiry (time T)', C, None),
 ('Derivatives', r'\bX\b', 'X', 'Strike (exercise) price of the option', C, r'S_T|[Pp]ut|[Cc]all'),
 ('Performance evaluation', r'\bATP\b', 'ATP', 'Average tracking performance — average of (portfolio − benchmark) returns', A, None),
 ('Performance evaluation', r'\bAATP\b', 'AATP', 'Average absolute tracking performance — the same, ignoring sign', A, None),
 ('Performance evaluation', r'σ\(TP\)', 'σ(TP)', 'Tracking error — standard deviation of (portfolio − benchmark) returns', C, None),
 ('Performance evaluation', r'R_pt|R_Bt', 'R_pt, R_Bt', 'Portfolio and benchmark return in period t', C, None),
 ('Performance evaluation', r'\bSI\b|[Ss]harpe', 'SI (Sharpe)', 'Sharpe index — (R_p − R_f) ÷ σ_p: excess return per unit of total risk', C, None),
 ('Performance evaluation', r'\bTI\b|[Tt]reynor', 'TI (Treynor)', 'Treynor index — (R_p − R_f) ÷ β_p: excess return per unit of systematic risk', C, None),
 ('Performance evaluation', r'\bIR\b', 'IR', 'Information ratio — active return ÷ tracking error', C, None),
 ('Performance evaluation', r'W_pi|W_bi', 'W_pi, W_bi', 'Weight in segment i — portfolio (p) vs benchmark (b)', C, None),
 ('Performance evaluation', r'R_pi|R_bi', 'R_pi, R_bi', 'Return in segment i — portfolio (p) vs benchmark (b)', C, None),
 ('Performance evaluation', r'\bEP\b|\bBP\b|Cap\.Dist', 'EP, BP, Div, Cap.Dist', 'Fund return inputs — ending price, beginning price, dividends paid, capital-gain distributions', C, None),
]

AYB250 = [
 ('Time value of money', r'\bPV\b', 'PV', 'Present value — what a future amount is worth today', C, None),
 ('Time value of money', r'\bFV\b', 'FV', 'Future value — what an amount grows to', C, None),
 ('Time value of money', r'\bPMT\b', 'PMT', 'Payment — the regular amount paid or received each period (an annuity)', C, None),
 ('Time value of money', r'\bi\b', 'i', 'Effective interest rate per period', C, None),
 ('Time value of money', r'\bj\b', 'j', 'Nominal annual interest rate (before compounding)', C, None),
 ('Time value of money', r'\bm\b', 'm', 'Compounding periods per year', C, None),
 ('Time value of money', r'\bn\b', 'n', 'Number of periods', C, None),
 ('Time value of money', r'\br\b', 'r', 'Rate of return / interest per period (a real rate where the note says so)', C, None),
 ('Time value of money', r'\bNPV\b', 'NPV', 'Net present value — PV of all inflows minus PV of all outflows. Positive = worth doing', A, None),
 ('Time value of money', r'\bIRR\b', 'IRR', 'Internal rate of return — the rate that makes NPV = 0', A, None),
 ('Investments', r'E\((?:R|r)', 'E(R)', 'Expected return', C, None),
 ('Investments', r'\bR_?f\b|\bRFR\b', 'R_f', 'Risk-free rate', C, None),
 ('Investments', r'\bR_?m\b|\bR_M\b', 'R_m', 'Return on the market', C, None),
 ('Investments', r'\bR_?p\b', 'R_p', 'Return on the portfolio', C, None),
 ('Investments', r'σ', 'σ (sigma)', 'Standard deviation — how much returns swing; the usual measure of risk', C, None),
 ('Investments', r'β', 'β (beta)', 'Beta — sensitivity to the market; systematic risk', C, None),
 ('Investments', r'\bw(?:ᵢ|₁|₂|_[A-Za-z]+)|\bw\b', 'w', 'Weight — the fraction of the portfolio in each asset', C, None),
 ('Investments', r'\bCAPM\b', 'CAPM', 'Capital asset pricing model — E(R) = R_f + β(R_m − R_f)', A, None),
 ('Investments', r'\bEPS\b', 'EPS', 'Earnings per share', A, None),
 ('Investments', r'P/E', 'P/E', 'Price-to-earnings ratio — share price ÷ EPS', A, None),
 ('Investments', r'\bLVR\b', 'LVR', 'Loan-to-value ratio — loan ÷ value of the asset securing it', A, None),
 ('Tax', r'\bCGT\b', 'CGT', 'Capital gains tax', A, None),
 ('Tax', r'\bMLS\b', 'MLS', 'Medicare levy surcharge — extra levy on higher earners without private hospital cover', A, None),
 ('Tax', r'\bLHC\b', 'LHC', 'Lifetime health cover loading — higher premiums for joining private hospital cover late', A, None),
 ('Tax', r'\bHECS|\bHELP\b', 'HECS-HELP', 'The student loan, repaid through the tax system once income passes a threshold', A, None),
 ('Tax', r'\bLITO\b', 'LITO', 'Low income tax offset', A, None),
 ('Tax', r'\bFBT\b', 'FBT', 'Fringe benefits tax', A, None),
 ('Tax', r'\bGST\b', 'GST', 'Goods and services tax', A, None),
 ('Super and retirement', r'\bSG\b', 'SG', 'Superannuation guarantee — the compulsory employer contribution', A, None),
 ('Super and retirement', r'\bNCC', 'NCC', 'Non-concessional contribution — after-tax money put into super', A, None),
 ('Super and retirement', r'\bCCs?\b', 'CC', 'Concessional contribution — before-tax money put into super (taxed 15% in the fund)', A, None),
 ('Super and retirement', r'\bTTR\b|\bTRIS\b', 'TTR / TRIS', 'Transition to retirement (income stream) — drawing a pension while still working', A, None),
 ('Super and retirement', r'\bSMSF', 'SMSF', 'Self-managed super fund', A, None),
 ('Super and retirement', r'\bETP', 'ETP', 'Employment termination payment', A, None),
 ('Super and retirement', r'\bTPD\b', 'TPD', 'Total and permanent disability (insurance)', A, None),
 ('Regulation', r'\bASIC\b', 'ASIC', 'Australian Securities and Investments Commission', A, None),
 ('Regulation', r'\bAPRA\b', 'APRA', 'Australian Prudential Regulation Authority', A, None),
 ('Regulation', r'\bATO\b', 'ATO', 'Australian Taxation Office', A, None),
 ('Regulation', r'\bAFCA\b', 'AFCA', 'Australian Financial Complaints Authority', A, None),
 ('Regulation', r'\bFSG\b', 'FSG', 'Financial services guide — who the adviser is and how they are paid', A, None),
 ('Regulation', r'\bSOA\b', 'SOA', 'Statement of advice — the written advice given to a client', A, None),
 ('Regulation', r'\bPDS\b', 'PDS', 'Product disclosure statement — the facts about a financial product', A, None),
]

USB245 = [
 ('Income and value', r'\bNI\b', 'NI', 'Net income — gross income minus outgoings', C, None),
 ('Income and value', r'\bNOI\b', 'NOI', 'Net operating income — the same idea: income after operating costs, before finance and tax', A, None),
 ('Income and value', r'\bGI\b', 'GI', 'Gross income', C, None),
 ('Income and value', r'\bOg\b', 'Og', 'Outgoings — the property\'s operating expenses', C, None),
 ('Income and value', r'\bCV\b', 'CV', 'Capital value — what the property is worth', C, None),
 ('Income and value', r'\bV\b', 'V', 'Value of the property', C, None),
 ('Income and value', r'\bY\b', 'Y', 'Yield — net income ÷ value (a cap rate)', C, r'Y\s*=\s*NI'),
 ('Income and value', r'\bPP\b', 'PP', 'Purchase price', C, None),
 ('Income and value', r'\bGIM\b|\bNIM\b', 'GIM, NIM', 'Gross / net income multiplier — value ÷ income', C, None),
 ('Income and value', r'\bRi\b', 'Ri', 'Income return — income ÷ purchase price', C, None),
 ('Income and value', r'\bRc\b', 'Rc', 'Capital return — (sale price − purchase price) ÷ purchase price', C, None),
 ('Income and value', r'\bRt\b', 'Rt', 'Total return — income return + capital return', C, None),
 ('Income and value', r'\bWALE\b', 'WALE', 'Weighted average lease expiry — average remaining lease term, weighted by income or area', A, None),
 ('Income and value', r'\bCPI\b', 'CPI', 'Consumer price index — the inflation measure used for rent reviews', A, None),
 ('Discounting', r'\bPV\b', 'PV', 'Present value — a future amount expressed in today\'s dollars', C, None),
 ('Discounting', r'\bFV\b', 'FV', 'Future value', C, None),
 ('Discounting', r'\bNPV\b', 'NPV', 'Net present value — PV of everything in minus everything out. Positive = accept', A, None),
 ('Discounting', r'\bIRR\b', 'IRR', 'Internal rate of return — the discount rate that makes NPV = 0', A, None),
 ('Discounting', r'\bDCF\b', 'DCF', 'Discounted cash flow — the model: forecast the cashflows, discount them to today', A, None),
 ('Discounting', r'\bDF\b', 'DF', 'Discount factor — 1 ÷ (1 + r)ᵗ, what $1 at time t is worth today', C, None),
 ('Discounting', r'\bCF(?:0|t|₀|ₜ|n|1)\b|\bCF_?t\b', 'CF₀, CFₜ', 'Cash flow — at time 0 (the purchase) and at period t', C, None),
 ('Discounting', r'\br\b', 'r', 'Discount rate — the required return used to discount future cashflows', C, None),
 ('Discounting', r'\bg\b', 'g', 'Growth rate (e.g. of rent)', C, None),
 ('Discounting', r'\bt\b', 't', 'The period number (year 1, 2, 3 …)', C, None),
 ('Discounting', r'\bn\b', 'n', 'Number of periods — the holding period; n+1 is the year after it (used for the terminal value)', C, None),
 ('Discounting', r'\bTV\b', 'TV', 'Terminal value — the sale price at the end of the holding period', C, None),
 ('Discount rate', r'\brf\b|\bR_?f\b', 'r_f', 'Risk-free rate', C, None),
 ('Discount rate', r'\brV\b', 'rV', 'Real (pure time-value) return', C, None),
 ('Discount rate', r'π', 'π (pi)', 'Inflation rate', C, None),
 ('Discount rate', r'\brP\b', 'rP', 'Risk premium in the discount-rate build-up · in the leverage formula, the property\'s own (unlevered) return', C, None),
 ('Discount rate', r'WACC', 'WACC', 'Weighted average cost of capital — the blended cost of debt and equity', A, None),
 ('Finance', r'\bLVR\b', 'LVR', 'Loan-to-value ratio — loan ÷ property value', A, None),
 ('Finance', r'\bL\b', 'L', 'Loan amount', C, r'LVR'),
 ('Finance', r'\bE\b|\bEq\b', 'E, Eq', 'Equity — the investor\'s own money in the deal', C, r'LVR|[Ee]quity'),
 ('Finance', r'\brE\b', 'rE', 'Return on equity (the investor\'s geared return)', C, None),
 ('Finance', r'\brD\b', 'rD', 'Cost of debt — the interest rate on the loan', C, None),
 ('Finance', r'\bLR\b', 'LR', 'Leverage ratio — debt ÷ equity', C, None),
 ('Finance', r'\bPMT\b', 'PMT', 'Loan payment each period (interest + principal)', C, None),
 ('Finance', r'IPMT|\bINT', 'IPMT, INTₜ', 'Interest part of a loan payment (the tax-deductible part)', C, None),
 ('Finance', r'PPMT|AMORT', 'PPMT, AMORTₜ', 'Principal part of a loan payment (reduces the balance; not deductible)', C, None),
 ('Finance', r'\bOB(?:t|ₜ|_t)?\b', 'OBₜ', 'Outstanding balance of the loan after period t', C, None),
 ('Finance', r'\bDCR\b', 'DCR', 'Debt coverage ratio — NOI ÷ annual debt service', A, None),
 ('Finance', r'\bBTCF\b', 'BTCF', 'Before-tax cash flow to equity', A, None),
 ('Finance', r'\bATCF\b', 'ATCF', 'After-tax cash flow to equity', A, None),
 ('Calculator', r'I/Y', 'I/Y', 'Calculator key — interest rate per year', C, None),
 ('Calculator', r'\bN\b', 'N', 'Calculator key — number of periods', C, r'I/Y|PMT'),
 ('Calculator', r'\bCA\b', 'CA', 'Calculator — "clear all" cash-flow data', C, r'2ndF'),
 ('Tax', r'\bCGT\b', 'CGT', 'Capital gains tax', A, None),
 ('Tax', r'\bWDV\b', 'WDV', 'Written-down value — cost less depreciation claimed so far', A, None),
 ('Tax', r'\bDV\b', 'DV', 'Diminishing value — depreciation as a % of the remaining (written-down) value', C, None),
 ('Tax', r'\bSL\b', 'SL', 'Straight line — the same depreciation amount every year', C, None),
 ('Tax', r'\bT\b', 'T', 'Acquisition (transaction) cost rate, as a % of price', C, r'PP\s*='),
]

USB244 = [
 ('Value and income', r'\bCV\b', 'CV', 'Capital value — what the property is worth', C, None),
 ('Value and income', r'\bNI\b', 'NI', 'Net income — gross income minus outgoings', C, None),
 ('Value and income', r'\bCR\b', 'CR', 'Cap rate — the capitalisation rate, a risk weighting. CV = NI ÷ CR', C, None),
 ('Value and income', r'\bNOI\b', 'NOI', 'Net operating income', A, None),
 ('Value and income', r'\bMAT\b', 'MAT', 'Moving annual turnover — a tenant\'s sales over the last 12 months', A, None),
 ('Value and income', r'\bGOCR\b', 'GOCR', 'Gross occupancy cost ratio — a tenant\'s total occupancy cost ÷ its MAT', A, None),
 ('Value and income', r'\bCPI\b', 'CPI', 'Consumer price index — the inflation measure used in rent reviews', A, None),
 ('Value and income', r'\bPV\b', 'PV', 'Present value', C, None),
 ('Value and income', r'\bNPV\b', 'NPV', 'Net present value', A, None),
 ('Value and income', r'\bBCR\b', 'BCR', 'Benefit–cost ratio — PV of benefits ÷ PV of costs', A, None),
 ('Value and income', r'Σ', 'Σ', '"Add them all up" — a sum across every tenant', C, None),
 ('Leasing', r'\bWALE\b', 'WALE', 'Weighted average lease expiry — average remaining lease term, weighted by income or area', A, None),
 ('Leasing', r'\bEOI\b', 'EOI', 'Expressions of interest — the campaign date the WALE is measured from', A, None),
 ('Measurement', r'\bGLAR\b', 'GLAR', 'Gross lettable area retail — the PCA measure for shops', A, None),
 ('Measurement', r'\bGLA\b', 'GLA', 'Gross lettable area — whole-building measure (industrial, retail centres)', A, None),
 ('Measurement', r'\bNLA\b', 'NLA', 'Net lettable area — the PCA measure for offices', A, None),
 ('Measurement', r'\bGFA\b', 'GFA', 'Gross floor area — the whole building, including common areas', A, None),
 ('Measurement', r'\bPCA\b', 'PCA', 'Property Council of Australia — sets the measurement, grading and classification standards', A, None),
 ('Measurement', r'\bsqm\b|m²', 'sqm, m²', 'Square metres', C, None),
 ('Life cycle costing', r'\bLCC\b', 'LCC', 'Life cycle cost — total cost of an asset over its whole life', A, None),
 ('Life cycle costing', r'\bCa\b', 'Ca', 'Cost of acquisition', C, r'LCC'),
 ('Life cycle costing', r'\bCia\b', 'Cia', 'Cost of installation and commissioning', C, r'LCC'),
 ('Life cycle costing', r'\bCo\b', 'Co', 'Cost of operation (per year)', C, r'LCC'),
 ('Life cycle costing', r'\bCm\b', 'Cm', 'Cost of maintenance (per year)', C, r'LCC'),
 ('Life cycle costing', r'\bR\b', 'R', 'Residual (end-of-life) value', C, r'LCC'),
 ('Green buildings', r'\bNABERS\b', 'NABERS', 'National Australian Built Environment Rating System — rates measured performance', A, None),
 ('Green buildings', r'\bBEEC\b', 'BEEC', 'Building energy efficiency certificate — mandatory disclosure', A, None),
 ('Green buildings', r'\bCBDS\b', 'CBDS', 'Commercial Building Disclosure scheme', A, None),
 ('Tax', r'\bGST\b', 'GST', 'Goods and services tax', A, None),
 ('Tax', r'\bCGT\b', 'CGT', 'Capital gains tax', A, None),
 ('Tax', r'\bOPEX\b', 'OPEX', 'Operating expenditure — day-to-day running costs', A, None),
 ('Tax', r'\bCAPEX\b', 'CAPEX', 'Capital expenditure — spending that improves or replaces the asset', A, None),
]

UNITS = {'EFB335': EFB335, 'AYB250': AYB250, 'USB245': USB245, 'USB244': USB244}
CHECKLIST = {'04-topics-usb244.md': 'USB244', '05-topics-usb245.md': 'USB245',
             '06-topics-ayb250.md': 'AYB250', '07-topics-efb335.md': 'EFB335'}
KEY_DOC = '99-notation-key'
START, END = '<!-- notation:start -->', '<!-- notation:end -->'

def strip_box(md):
    return re.sub(re.escape(START) + r'.*?' + re.escape(END) + r'\n*', '', md, flags=re.S)

def code_text(md):
    blocks = re.findall(r'```.*?```', md, re.S)
    inline = re.findall(r'`([^`\n]+)`', re.sub(r'```.*?```', '', md, flags=re.S))
    return '\n'.join(blocks + inline)

def used(md, entries):
    md = strip_box(md)
    code = code_text(md)
    out, seen = [], set()
    for grp, rx, sym, mean, scope, ctx in entries:
        hay = code if scope == C else md
        if re.search(rx, hay) and (ctx is None or re.search(ctx, md)) and sym not in seen:
            seen.add(sym); out.append((sym, mean))
    return out

def cell(s):
    return s.replace('|', '\\|')

def box(unit, rows):
    lines = [START,
             '<details class="notation"><summary>Notation key — what the symbols in this note mean</summary>',
             '', '| Symbol | Means |', '|---|---|']
    lines += ['| `%s` | %s |' % (cell(s), cell(m)) for s, m in rows]
    lines += ['', '[Full %s notation key →](#/%s/%s)' % (unit, unit, KEY_DOC), '', '</details>', END, '']
    return '\n'.join(lines)

def insert(md, block):
    md = strip_box(md)
    m = re.search(r'^# .*\n', md, re.M)
    if not m:
        return block + '\n' + md
    i = m.end()
    return md[:i] + '\n' + block + '\n' + md[i:].lstrip('\n')

def full_key(unit, entries):
    out = ['# %s — Notation Key' % unit, '',
           'Every symbol and abbreviation used in the %s notes, in one place. '
           'Each note also has its own **Notation key** box under the title, '
           'listing only the symbols that note uses — tap it to open.' % unit, '']
    grp = None
    for g, rx, sym, mean, scope, ctx in entries:
        if g != grp:
            out += ['', '## ' + g, '', '| Symbol | Means |', '|---|---|']
            grp = g
        out.append('| `%s` | %s |' % (cell(sym), cell(mean)))
    return '\n'.join(out) + '\n'

def main(check=False):
    report = []
    for unit, entries in UNITS.items():
        d = os.path.join(ROOT, unit)
        kp = os.path.join(d, KEY_DOC + '.md')
        if not check:
            open(kp, 'w').write(full_key(unit, entries))
        for f in sorted(os.listdir(d)):
            if not f.endswith('.md') or f.startswith(KEY_DOC):
                continue
            p = os.path.join(d, f); md = open(p).read()
            rows = used(md, entries)
            if len(rows) < 2:
                new = strip_box(md)
            else:
                new = insert(md, box(unit, rows))
            report.append((unit + '/' + f, len(rows)))
            if not check and new != md:
                open(p, 'w').write(new)
    for f, unit in CHECKLIST.items():
        p = os.path.join(ROOT, 'REVISION', f); md = open(p).read()
        rows = used(md, UNITS[unit])
        new = insert(md, box(unit, rows)) if len(rows) >= 2 else strip_box(md)
        report.append(('REVISION/' + f, len(rows)))
        if not check and new != md:
            open(p, 'w').write(new)
    for f, n in report:
        print('%3d  %s' % (n, f))

if __name__ == '__main__':
    main(check='--check' in sys.argv)
