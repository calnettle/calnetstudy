# EFB222 — Unit Overview

QUT · Semester 1, 2026 · **Introduction to Applied Econometrics**

Unit coordinators: **Annastiina Silvennoinen** (lectures) and **Anushiya
Thanapalan** (unit management). All communication goes through the helpdesk,
(contact via Canvas).

Textbook: **Jeremy Arkes, *Regression Analysis: A Practical Introduction***.

---

## What this unit actually is

> "**This is not your standard statistics unit.** Focus: how to develop the best
> model to address a research question, the many things that can go wrong with a
> model, and the proper interpretation of the results. **Main focus on causal
> interpretation.**"

There are almost no derivations and very little arithmetic. What there is instead:
a single sustained argument about when a regression coefficient can be read as a
causal effect, and the seven specific ways it can't. The lecturer's summary of the
method: "**the first big mistake is that you just shove everything into a
computer, look at the numbers, and try to make sense of them. That's not how this
works. You have to go the other way. Think first, do then.**"

---

## Unit map

| # | Note | Chapter | Covers |
|---|---|---|---|
| 01 | Regression Analysis Basics | 2 (A) & 2 (B) | The model, OLS, TSS/ExSS/RSS, R², reading Stata output, the five conditions, flowcharts, correlation vs causation |
| 02 | Essential Tools | 3 | Dummies and reference groups, interactions, logs, quadratics, splines, weights, standardised coefficients |
| 03 | Holding Other Factors Constant | 4 | The good/bad × operative/held-constant box, ATE, confounders vs mediators |
| 04 | Standard Errors, Hypothesis Tests, p-values | 5 (A) & 5 (B) | Precision, t-tests, CIs, F-tests, multicollinearity, heteroskedasticity, clustering, the Bayesian critique |
| 05 | The Seven PITFALLS | 6 (A) & 6 (B) | Every source of bias, what to check, and the direction |
| 06 | Strategies for Other Objectives | 7 | Forecasting, determining predictors, adjusting outcomes |
| 07 | Fixed Effects, DD and FD | 8 | *Not examinable.* Read once. |
| 08 | Worked Cases | Tutorials 2–7 + Portfolio | Full solutions, every number recomputed |
| 09 | Practice Questions | 2–7 | Exam-style, hidden answers |
| 10 | Formula Sheet & Exam Traps | all | The carry-to-the-door page |

Chapters 1 (introduction and statistical appendix) and 12–13 (conducting a
research project, and ethics) are covered where they intersect the examinable
material — the statistical background sits inside note 01, and the ethics chapter's
substance (p-hacking, overstating what a model holds constant, over-reaching
conclusions) is folded into notes 03, 04 and 05.

---

## Assessment

| Item | Weight | Timing | Notes |
|---|---|---|---|
| **Quizzes 1–4** | **0%** | Open after the lecture in weeks 2–5 | Formative only. Chapters 2(A), 2(B), 3, 4. Unlimited attempts, no deadline. |
| **Portfolio Task 1** — technical skills | **15%** | Week 7 | |
| **Portfolio Task 2** — interpretation, diagnostics | **9%** | Week 9 | |
| **Portfolio Task 3** — communication with technical and non-technical audiences | **16%** | Week 11 | |
| **Final exam** | **60%** | Central examination period | In person, closed book |

**Portfolio = 40% total.** Officially individual work; teaming up is tolerated if
one person submits and all names appear on the cover page.

Three things that cost marks mechanically rather than intellectually:

- **The template is mandatory and must not be modified.** "0 points if you do not
  use the template" — it is in the CRA. Don't add cover pages.
- **No referencing at all.** Do not reference the Arkes textbook, and do not use
  other textbooks: "the standard textbooks are the standard *predictive*
  regression analysis textbooks, which we don't do here."
- **Generative AI is permitted but must be declared**, with the tool named and the
  prompts included. Undeclared use is plagiarism, and the academic integrity
  officer for the unit is the coordinator herself.

> **"Answers based on knowledge acquired elsewhere may receive a mark of 0."**
> That is a real rule, stated hard. Her named example: **variance inflation
> factors**. VIF is not taught in EFB222, so writing it up "just uses some of the
> word space" and earns nothing. The same applies to **mediation analysis** —
> explicitly zero marks. Answer from *this* unit's toolkit.

---

## The exam

**Confirmed by the unit coordinator in the week 12 lecture:**

- **60% of the unit**, individual, **in person**, during the central examination
  period.
- **Closed book.** No materials, no laptops, no Stata, **no writing code**.
- **A calculator is allowed** but "I don't think you're gonna need it, because we
  haven't done a lot of maths in here."
- **A mix of short-answer questions and some multiple-choice questions.**
- Every short-answer question is built around **Stata output you have to read** —
  estimation output, test output, graphs.
- **There is no practice exam**, and there won't be one: "if I give you a practice
  exam, then I'm not going to give you the same kind of exam in the final… It's not
  the point of this unit."
- **"This all will cover the chapters 2 to 7."**

### What is *not* examinable

**Chapters 8 (fixed effects / difference-in-differences / first differences), 12
(conducting a research project) and 13 (ethics) are not on the exam.** This was
stated three separate times: by the coordinator when announcing the added Chapter
8 topic ("**No, they're not**"), by the Chapter 8 lecturer in his opening line
("this is not important for the lecture exam"), and again at the end of the
Chapter 12/13 session ("**you will not get any questions from chapter 8 and this
12**").

Also explicitly not required:

- **Calculating a regression by hand.** Asked directly: "no, you will not need to
  do this in the exam."
- How coefficients and standard errors are computed, or the theory behind the
  sampling distribution.
- The standard-error formula itself ("for your interest only").
- **Constructing splines**; the linear-algebra derivation of OLS.
- Stata syntax. "Don't focus on how to do things in Stata, because that's not
  going to be examined."

> ### Two contradictions in the source material, flagged rather than repeated
>
> **1. "Weeks 1–12" vs "Chapters 2 to 7".** The Week 1 *Getting Started* deck says
> the final exam "covers the entire unit (weeks 1–12)". The coordinator's week 12
> statement is "chapters 2 to 7", and she and two other staff separately excluded
> Chapters 8, 12 and 13. **The later, more specific statement is the one to
> trust** — it was made after the syllabus changed mid-semester to add Chapter 8.
> The Week 1 deck predates that change. Confirm on Canvas or in the week 13 Q&A if
> Cal wants certainty.
>
> **2. The "7 questions, 6 MCQs, PITFALLS appendix" claim is unverified.** An
> earlier set of exam-prep notes in the EFB222 source folder states the paper has
> exactly seven questions — one block of six MCQs, three "super-short" answer
> questions, and three case-based questions — and that the seven pitfalls are
> supplied in an appendix. **None of that appears in any lecture recording.** What
> the coordinator actually said was "a mix of short answer questions and some
> multiple choice questions", with no counts and no mention of an appendix. Those
> earlier notes cite a Q&A that isn't in the source folder, so the detail may well
> be right — but **do not revise on the assumption that the pitfalls will be
> supplied.** Learn them.
>
> **3. Chapter 13 is never named in the exclusion.** The lecturer says "chapter 8
> and 12" and separately gestures at "this one, the ethics". Chapter 13 was
> delivered in the same session as 12 and is plainly intended to be out, and the
> coordinator's "chapters 2 to 7" settles it.

### What actually is your practice

There is no past paper. In the coordinator's words, the exam prep is:

1. **The four Canvas quizzes** (weeks 2–5, Chapters 2–4). Worth 0% and worth
   doing. Answers are discussed in the following week's lecture.
2. **The three portfolio parts** — "both of those assignment types have been
   designed to be geared towards the examination."
3. **The tutorial exercises.**

Plus note 09 in this set, which is exam-style practice written against the unit's
own style.

### Week 13 and 14

Week 13 is a **Q&A revision session** — no new content, all tutors present, and
week 13 tutorials run at their usual times as pure Q&A. Come with questions, or
email them to the helpdesk beforehand. After week 14 the helpdesk is no longer
actively monitored.

---

## The five things that carry the paper

1. **Reading a Stata output table** and interpreting any coefficient and its
   significance — via `t`, via `p`, and via whether the confidence interval
   excludes zero.
2. **The seven PITFALLS** — which apply to a given case, *what to check for*, and
   the **direction** of the bias.
3. **Regression flowcharts**, good vs bad variation, and the never-control-a-
   mediator rule.
4. **The four objectives and which pitfalls matter for each**, and why.
5. **Significance reasoning** — what a p-value does and doesn't say, and why
   insignificance is not "no effect".

Every written question is the same skill in different clothing:

```
identify the objective → name the model pieces → read the output →
apply the pitfalls with directions → conclude with a recommendation
```

---

## How these notes were built

Same structure as the other units on this site: concept → formula → worked example
with real numbers → the trap that costs marks, with a tap-to-reveal checkpoint at
the end of each topic.

Sources: the lecture decks for Chapters 1–8 and 12–13, the Stata introduction, the
tutorial sheets for Chapters 2–7 and 12–13, all twelve lecture transcripts, and
Cal's three portfolio submissions with their datasets. All in
`2nd Year/Sem 1/EFB222/`.

**Every number was recomputed before it was written down.** Where the source
material contradicts itself — a slide typo, a verbal slip, a claim in an earlier
set of notes that no recording supports — the note shows the arithmetic and says
which reading is right, rather than quietly picking one. There are about a dozen
of those, collected at the end of note 10.
