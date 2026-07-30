# TOPIC 2 — Digital Capabilities and How AI Actually Works

Lecture 3. What the labour-market evidence says about skills, then a
ground-up walk through the three technologies underlying AI — machine
learning, natural language processing and robotics — and finally the JISC
framework that A1 is built on.

This is the longest single lecture in the folder and the one most directly
attached to an assessment. It is also one of the two decks that exist only
as scanned images, so a few chart values could not be read; those are
flagged where they occur rather than guessed at.

---

## 2.1 Skills over job titles

The deck's framing slide is two words: **"Skills over job titles."** The
World Economic Forum's *Future of Jobs* reports supply the evidence, and the
deck's headline claim is that:

> Technological literacy is a critical skill for the future of work across
> all industries. *(WEF, 2025)*

That sentence is the one Lecture 3 puts on a slide by itself. If you need
one quotable line from this week, it is that one — and it is the line the
submitted A1 in this folder opens with.

> **Two different WEF reports are in play and mixing them is a real error.**
> Lecture 1 and Lecture 5 both show *Businesses' top 10 skill priorities for
> workforce development from 2023 to 2027* — that is the **Future of Jobs
> Report 2023**. Lecture 3 uses the **Future of Jobs Report 2025**, whose
> survey was run in 2024 and whose projections run **2025–2030**. Different
> report, different survey, different horizon, different rankings. Citing
> "(WEF, 2023)" next to a 2030 projection, or "(WEF, 2025)" next to the
> 2023–2027 top-ten list, is a citation error a marker will catch.

### The 2023 report — top ten skill priorities, 2023 to 2027

The ten skill categories organisations said they would prioritise in
workforce development initiatives:

- Analytical thinking
- Creative thinking
- AI and big data
- Leadership and social influence
- Resilience, flexibility and agility
- Curiosity and lifelong learning
- Technological literacy
- Design and user experience
- Motivation and self-awareness
- Empathy and active listening

The figure also groups them by **type of skill**: cognitive skills,
technology skills, working with others, and self-efficacy.

> **These ten are a ranked list on the slide, and the ranking did not survive
> scanning.** The set of ten above is complete and reliable; the order is
> not, because the slide is an image and the numbering could not be read
> against the labels with confidence. If a question asks "what was the number
> one skill priority", get it off the original deck or the WEF report — do
> not infer it from the order they appear in here.

### The 2025 report — skills on the rise, 2025 to 2030

Figure 3.4 ranks 26 skill categories by **net increase**, defined on the
slide as *the difference between the share of employers who consider a skill
category to be increasing in use and the share who consider it to be
decreasing in use*. The top of the ranking:

1. AI and big data
2. Networks and cybersecurity
3. Technological literacy
4. Creative thinking
5. Resilience, flexibility and agility
6. Curiosity and lifelong learning

At the **bottom** of the same chart sits **manual dexterity, endurance and
precision** — the one category where more employers expect the skill to
decrease in importance than to increase, giving it a *negative* net figure.

Unlike the 2023 top-ten list below, this ranking is trustworthy: the chart is
a single ranked column and the bar values descend monotonically down it, so
the order the labels came off the scan in is the order the chart puts them
in.

> **"Net increase" is not "percentage of employers".** A net increase of 70%
> does not mean 70% of employers value the skill. It means (share saying
> increasing) minus (share saying decreasing) = 70 percentage points. A
> category can be enormously important and still score low here if opinion is
> split. The individual bar values on this slide could not be read reliably
> off the scan, which is a second reason not to quote a specific number for
> any one skill without checking the deck.

### Automation versus augmentation

Figure 2.7 splits total work tasks three ways — delivered predominantly by
human workers, by technology (machines and algorithms), or by a combination
of both.

| | Now | By 2030 | Change |
|---|---|---|---|
| **People** | 47% | 33% | −14 pp |
| **Technology** | 22% | 34% | +12 pp |
| **Combination** | 30% | 33% | +3 pp |

```
Now:      47 + 22 + 30 = 99   (rounding)
By 2030:  33 + 34 + 33 = 100
```

> **Read the direction of travel, not the individual bars.** The story is that
> "predominantly human" loses 14 points and *technology overtakes people* —
> 34% versus 33% — while the combination category barely moves. The deck's
> own slide title is **"FUTURE OF WORK = Human–technology interaction"**. The
> "Now" column sums to 99% because the source rounds; if you reproduce these
> figures, say so rather than quietly adjusting one to make it 100.

The same slide carries four employer-intention figures for the period to
2030:

| Claim | Figure |
|---|---|
| Employers anticipating a **greater** share of revenue going to wages | 52% |
| Employers expecting that share to **decline** | 8% |
| Employers planning to **reorient the business** in response to AI | ~half |
| Employers planning to **hire talent with specific AI skills** | two-thirds |
| Employers anticipating **reducing workforce** where AI can automate tasks | 40% |

```
52% greater  +  8% lower  →  40% expect no change
```

Wage strategies are driven by aligning wages with productivity and
performance, and by competing to retain talent and skills.

> **The two 40%s are not the same 40%.** Forty per cent of employers expect
> no change in the wage share of revenue; separately, forty per cent
> anticipate reducing headcount where AI automates tasks. Nothing in the
> source connects them. Treating one as evidence for the other is the kind of
> inference that looks clever and is simply wrong.

### Fastest-growing and fastest-declining jobs, 2025–2030

Figure 2.2 ranks jobs by net growth and net decline, projected by surveyed
employers (WEF Future of Jobs Survey 2024).

| Fastest **growing** | Fastest **declining** |
|---|---|
| Big Data Specialists | Postal Service Clerks |
| FinTech Engineers | Data Entry Clerks |
| AI and Machine Learning Specialists | **Graphic Designers** |
| Software and Applications Developers | Legal Officials |
| Security Management Specialists | Legal Secretaries |
| Data Warehousing Specialists | Telemarketers |
| UI and UX Designers | Bank Tellers and Related Clerks |
| DevOps Engineers | Cashiers and Ticket Clerks |
| Internet of Things Specialists | Printing and Related Trades Workers |
| Data Analysts and Scientists | Administrative Assistants and Executive Secretaries |
| Environmental Engineers | Accounting, Bookkeeping and Payroll Clerks |
| Information Security Analysts | Material-Recording and Stock-Keeping Clerks |
| Renewable Energy Engineers | Transportation Attendants and Conductors |
| Autonomous and Electric Vehicle Specialists | Door-to-Door Sales Workers, News and Street Vendors |
| Light Truck or Delivery Services Drivers | Claims Adjusters, Examiners and Investigators |

As with the skills chart, these are the correct **sets** but not a
verifiable rank order — the labels are rotated text on a scanned image.

> **Graphic Designers is the item to notice, and UI/UX Designers is why.**
> The same chart has one design occupation in the fastest-*declining* list and
> another in the fastest-*growing* list. That is the whole "skills over job
> titles" argument in one comparison: generative tools are absorbing the
> *production* of visual assets while the *interaction design* work grows. If
> you need a concrete example of why the deck says skills, not titles, use
> this pair.

A related figure (Figure 2.3) plots projected job creation against
displacement for every occupation as a percentage of current employment,
with net growth or decline as the difference — which is worth knowing exists,
because it shows occupations can grow and shrink *at the same time*.

<details>
<summary>Checkpoint 1 — the labour-market evidence</summary>

**Q.** By 2030, what share of tasks does WEF project will be delivered
predominantly by technology, and how does that compare to people?

**A.** 34% technology versus 33% people (with 33% a combination) — technology
overtakes people. Now the figures are 22% technology and 47% people.

**Q.** A student writes: "The WEF (2023) found that AI and big data has the
highest net increase in importance from 2025 to 2030." What is wrong?

**A.** Two things. The 2025–2030 projections come from the **Future of Jobs
Report 2025**, not the 2023 report. And "net increase" needs defining — it
is the gap between employers saying a skill is increasing and those saying it
is decreasing, not a share of employers.

**Q.** Why does the "Now" column of the automation figure sum to 99%?

**A.** Rounding in the source. Say so if you reproduce it; do not adjust a
figure to force it to 100.

</details>

---

## 2.2 Why understand the technology behind AI

The deck gives five reasons, and they are worth memorising because they are
the justification for spending a business unit's week on neural networks:

- Know how AI systems work
- Spot bias, errors and limits
- Make informed decisions
- Join ethical and social debates with confidence
- Build job-ready, future-focused skills

The lecture then shows a sprawling map of the AI field — artificial
intelligence containing knowledge representation, automated reasoning,
planning and scheduling, expert systems, speech recognition, visual
perception, intelligent robotics, natural language processing, and machine
learning; machine learning containing decision trees, k-means clustering,
k-nearest neighbours, naive Bayes, random forest, PCA and neural networks;
and neural networks containing deep learning, CNNs, RNNs, LSTMs, GANs and
autoencoders.

> **The nesting is the examinable part, not the acronyms.** AI ⊃ machine
> learning ⊃ neural networks ⊃ deep learning. Nobody is going to ask you what
> an autoencoder is in a business unit. Being able to say "deep learning is a
> subset of neural networks, which are one kind of machine learning, which is
> one branch of AI" is the answer that shows you read the slide.

## 2.3 Traditional programming versus machine learning

The deck's worked example: build a program that identifies whether an image
contains a dog.

**The traditional approach.** Write the code. The deck shows roughly twenty
lines of C# using OpenCV template matching — load a template image of a dog,
match it against the scene, and if the match exceeds a confidence threshold
of 0.85 (85% similarity), draw a rectangle and report the location.

**Why it fails.** Countless variations exist. Every breed, pose, lighting
condition and camera angle needs its own rule.

**The machine learning approach.** Instead of writing more code to handle
every difference, write a program that recognises cat and dog breeds on its
own:

- provide the computer with a large number of pictures of cats and dogs
- have it analyse the examples, identify patterns or common features, and
  learn how to classify future images
- solving problems becomes faster and less manual

The deck's four key features of machine learning:

| Feature |
|---|
| Learns from data — the more good-quality data, the better it learns |
| Data is used to find patterns and make predictions or decisions |
| Performance improves with more good-quality data **and feedback** |
| Comes in several types — supervised, unsupervised, reinforcement learning |

**The summary the deck lands on**, and the single most quotable line in
Lecture 3:

```
Traditional programming:   Rules  +  Data     =  Answers
Machine learning:          Data   +  Answers  =  Rules
```

| Traditional | Machine learning |
|---|---|
| Detailed, step-by-step instructions | Learns from experience — large amounts of data or examples |
| Must account for every possible scenario | Examines examples of desired outcomes and learns from them |
| Numerous rules to handle rare or minor edge cases | Identifies patterns that let it solve similar problems |
| Complex and time-consuming | Dynamic approach |

> **The two equations are the same three terms rearranged, and that is the
> point.** In traditional programming a human supplies the rules and the
> machine produces answers. In machine learning a human supplies the answers
> — the labels — and the machine produces the rules. This is why "garbage in,
> garbage out" is not a cliché in ML: the *labels* are now the thing a human
> is responsible for, and a biased label set produces a biased rule set with
> no line of code to point at. That link is the bridge from this slide to the
> bias and explainability material in §2.6.

## 2.4 Vectors — how a problem becomes machine-readable

For a computer to learn, the problem must be translated into a format it can
handle. The deck is blunt about why:

- machines do not inherently know what a "cat" or a "dog" is
- they cannot interpret images the way humans do
- they have no awareness of attributes or "features" such as fur colour,
  size, breed or shape

So the problem is expressed in a language computers process: by identifying
key characteristics or features, cats and dogs can be represented
numerically in a **vector**-based format.

**What a vector is**, per the deck: a way to express a position or a
direction using a list of numbers indicating a point's location in space.
Two-dimensional space is `(x, y)`; three-dimensional is `(x, y, z)`; but more
than three dimensions are possible — drawn as a list of numbers, a table, or
a projection.

**Applied to the dog example.** Generate vectors for many images of dogs and
cats, associating each with its correct label ("dog" or "cat"). Each number
in the vector represents a feature. The deck's illustration:

```
Vector:  [1, 2, 1, 3, 0, 5, 0, 2]

  Fur colour  →  1 = grey, 2 = brown, 3 = black, 4 = white
  Ear shape   →  1 = pointy, 2 = floppy
  Breed       →  1 = cavoodle, 2 = cocker spaniel, 3 = ...
```

From these examples the machine learns the patterns that differentiate the
categories.

> **The encoding is a human decision, and every design decision is a place
> bias enters.** Somebody chose that fur colour gets four codes and ear shape
> gets two; somebody chose that "breed" is a feature at all. Nothing in the
> data made those choices. In a business context, swap fur colour for
> postcode and breed for employment history and you have the entire fairness
> debate about automated hiring — which is Lecture 5's material. The vector
> slide looks like a technical aside. It is the ethics slide in disguise.

**Common examples of machine learning** the deck names: spam filtering,
Netflix and Spotify recommendations, YouTube, Google Assistant, and Siri.
One case slide reports over **$1.2 billion** invested in technology and AI
delivering customer benefits described as 30%, 40% and 50% improvements —
but the labels attached to those three percentages were not readable on the
scan, so do not cite them.

The deck also poses, and leaves hanging, the question: *if ML is so powerful,
can we use ML to predict stock prices?*

## 2.5 Neural networks

**Artificial Neural Networks (ANNs)** are a specific type of machine learning
algorithm, consisting of layers of artificial neurons (nodes) inspired by
the human brain. **Deep Neural Networks (DNNs)** have dozens or even hundreds
of layers, and underlie advanced applications like image recognition and
self-driving cars.

The architecture: an **input layer**, one or more **hidden layers**, and an
**output layer**.

**The deck's worked dog classifier.** Inputs include *ear length* and *fur
texture*; the readable weights are `w₁₁ = 0.60` and `w₂₁ = 0.20`, with a
**bias of −1** on the hidden layer. The output passes through a **sigmoid**
activation and comes out at **0.77**, which the slide labels *"strong
activation > 0.5 → Yes, it's a dog!"*

The sigmoid function and the decision rule:

```
sigma(z) = 1 / (1 + e^(-z))

sigma(0)     = 0.50    <- the decision boundary
sigma(1.21)  = 0.7703  <- approximately the slide's 0.77

Inverting:  z for an output of 0.77
            = ln(0.77 / 0.23)
            = 1.2083

Rule:  output > 0.5  ->  dog
       output <= 0.5 ->  not a dog
```

> **Only the 0.77 and the 0.5 threshold come from the slide — the rest is
> reconstruction.** The individual input values on the scanned slide were not
> legible, so the pre-activation figure of 1.21 above is *derived* by
> inverting the sigmoid from the stated output, not read off the deck. It is
> arithmetically correct and it shows you what the function is doing, but if
> an assessment asks you to reproduce the lecturer's example, work from the
> original slide.

**Why 0.5 matters.** Sigmoid squashes any real number into the range 0 to 1,
and 0 maps to exactly 0.5. So the threshold is not an arbitrary convention —
it is the point where the weighted sum plus bias equals zero. Above it the
evidence net of bias favours "dog"; below it, "not dog".

**How learning happens.** Through **forward propagation** and **backward
propagation**. The deck's analogy is learning to shoot a basketball:

| Stage | In the analogy | In the network |
|---|---|---|
| At first | You miss the hoop by using too much or too little force | Forward propagation produces a wrong output |
| After each miss | You analyse what went wrong and adjust — less force, different aim | Backward propagation adjusts the weights |
| With practice | Your shooting percentage improves | The loss falls, accuracy rises |

## 2.6 The black box problem

DNNs function as a **black box**. The deck's precise statement of the
problem: while the step-by-step procedures and algorithmic mechanics are
well understood, it is often unclear *why* specific parameter adjustments
lead to improved performance. That produces **ambiguity or "opacity"**, and
concerns about reliability and trustworthiness.

Three responses, and they are three different things:

| Response | The question it answers |
|---|---|
| **Transparency** | What algorithms and data are used? What architecture is applied? |
| **Explainability** (XAI) | How does the network arrive at a specific output? |
| **Objective** | Identify and correct biases, misinformation or errors — especially in generative AI |

> **Transparency and explainability are not synonyms, and swapping them costs
> marks.** Transparency is about *disclosure* — you can publish your model
> architecture and training data and still have no idea why it classified one
> particular CV as a reject. Explainability is about *this decision*. A firm
> can be fully transparent and entirely unexplainable. When a question asks
> how an organisation should govern an AI system, name both, because they
> require different controls.

## 2.7 Generative AI

A type of AI that can create new content — text, images, video, music or
code. The deck's four points:

- uses patterns learned from massive amounts of data to produce something
  **original**, explicitly "not just copy"
- examples: ChatGPT writing an article, DALL·E creating images, AI making a
  new song
- works through advanced machine learning models — **GPT-style models for
  text, diffusion models for images**
- contrasted on the slide with "traditional" AI

## 2.8 Natural Language Processing

The business case the deck opens with: much of the data in businesses is
hidden in emails, PDFs and meeting minutes. Wouldn't it be useful if
computers could analyse, understand and generate human-like language?

The difficulty: natural languages exhibit **ambiguity** and depend heavily on
**context**. Humans navigate this intuitively, extracting meaning from
context. NLP empowers computers to do the same, which lets machine learning
algorithms automate language-related tasks.

**The worked example — ordering a coffee.** The deck parses *"Can I get a
tall latte with an extra shot"* into a syntax tree:

```
S   (Sentence)     - the root of the tree
├── MD  (Modal)          Can
├── PRP (Pronoun)        I          - a small noun phrase
├── V   (Verb)           get
├── NP  (Noun Phrase)    a tall latte
│   ├── DT (Determiner)  a
│   ├── JJ (Adjective)   tall
│   └── NN (Noun)        latte
└── PP  (Prepositional Phrase)   with an extra shot
    ├── IN (Preposition) with
    ├── DT (Determiner)  an
    ├── JJ (Adjective)   extra
    └── NN (Noun)        shot
```

A second slide makes the ambiguity point concretely: the request *"Can you
book me a table for two at a nice place"* returns *"I have booked a table for
Thu at A Nice Place"* — the system has read "a nice place" as a proper noun.
That is the context problem in one screenshot.

## 2.9 Large Language Models

Per the deck, LLMs are massive neural networks trained on vast amounts of
text data. They:

- **harness Transformers** — an architectural design
- **understand intricate contextual nuances**
- **generate coherent, human-like language**

The mechanism is a **self-attention mechanism**, which:

- calculates attention scores determining the relevance of each word to
  every other word in the sentence or paragraph
- considers **all words at the same time**, instead of processing them in
  sequence
- resolves relationships even when words are widely separated in the text

The deck's illustrative sentence: *"The dog sat on the mat because it was
tired."* — what does "it" refer to? Named examples: ChatGPT, Claude, Copilot.

> **"All at once, not in sequence" is the distinguishing fact.** If an exam
> question asks what makes a Transformer different from earlier language
> models, the answer the deck wants is parallel consideration of the whole
> text via self-attention, rather than word-by-word sequential processing.
> That is also *why* long-range references like "it" get resolved: nothing
> has to be remembered across a sequence, because everything is present at
> once.

## 2.10 Robotics — the third pillar

The deck opens the robotics section by saying you are probably picturing
humanoid film robots, "but you should be having this in mind" — industrial
arms.

**Definition.** Tangible, programmable devices that can sense their
environment, make decisions, and carry out physical actions. Robots:

- combine computation and language understanding with a **physical body and
  brain**
- are a carefully engineered combination of hardware and software
- run a **sensing–computing–acting cycle** at their core, executed at
  remarkable speeds
- have a near-instantaneous feedback loop, essential for motion
- trade off between **high speed and low speed** operation

**The exceptions**, which the deck names explicitly: **RPA (robotic process
automation) and robo-advisors** are software, not physical, robots.

**Why they will not take over just yet.** Four constraints:

| Constraint |
|---|
| Designing new robots is still a highly complex endeavour |
| Today's advanced robots require expensive, highly specialised sensors, computing systems and actuators |
| Robots remain task-specific because of computational challenges — a trade-off between productivity and flexibility |
| Despite progress in soft robotics, many robots still rely on traditional rigid effectors |

> **The productivity–flexibility trade-off is the business point.** A robot
> that does one task extremely well is a capital investment locked to a
> process; the moment the process changes, the investment is stranded. That
> is a straight line into the A3 business-case question: the ROI on a
> task-specific robot depends entirely on how stable the task is. It is also
> the exact tension Lecture 5 resolves with cobots.

<details>
<summary>Checkpoint 2 — the technology</summary>

**Q.** Rewrite both equations from §2.3 and say who supplies what.

**A.** Traditional programming: `Rules + Data = Answers` — a human supplies
the rules. Machine learning: `Data + Answers = Rules` — a human supplies the
answers (labels), the machine derives the rules.

**Q.** A neural network outputs 0.62 through a sigmoid. What is the
classification and why is 0.5 the threshold?

**A.** Positive class — 0.62 > 0.5. The threshold is 0.5 because sigmoid maps
a pre-activation of exactly zero to 0.5, so the boundary is the point where
the weighted inputs plus bias net to zero.

**Q.** Distinguish transparency from explainability.

**A.** Transparency is disclosure of the algorithms, data and architecture
used. Explainability is accounting for how the network reached one specific
output. A system can be transparent without being explainable.

**Q.** Are robo-advisors robots, on this deck's definition?

**A.** No — the deck lists RPA and robo-advisors as explicit exceptions:
software, not physical robots. The definition requires a physical body
carrying out physical actions.

</details>

---

## 2.11 The JISC Digital Capabilities Framework

The last third of Lecture 3, and the framework A1 is assessed against.

**Who Jisc are.** The UK digital, data and technology agency for tertiary
education, research and innovation. A not-for-profit that provides managed
and brokered products and services with expertise and intelligence, aiming to
improve lives through the digital transformation of education and research.

**The definition** — quoted in the deck, in Lecture 1, and in the submitted
A1:

> Digital capabilities are "those which equip someone to live, learn and work
> in a digital society" (JISC, 2025).

**Why use it.** To evaluate your current digital competency and pinpoint
areas for improvement, particularly in education and workplace settings; to
facilitate conversations about digital skills using a common language; and to
help institutions benchmark their progress.

**Who it is for.** In BSB105 it is aimed at **you as a higher education
student**. The deck flags that Week 6 turns to the digital capabilities of an
*organisation* and their impact on firm performance and digital
transformation — the individual/organisational distinction matters.

### The six elements

| Element | The deck's definition, condensed |
|---|---|
| **Digital proficiency and productivity** | *Proficiency* — the ability to use digital devices, networks, applications, software and services. *Productivity* — how you use those skills to accomplish tasks |
| **Information, data and media literacies** | *Information literacy* — find, evaluate, organise and share information. *Data literacy* — handle data as a special form of information. *Media literacy* — all the ways you receive and respond to messages in digital media |
| **Digital creation, problem-solving and innovation** | *Creation* — digital production of content. *Problem-solving* — solve problems, make decisions, answer questions. *Innovation* — willingness to try new practices and look for new solutions with digital technology |
| **Digital communication, collaboration and participation** | *Communication* — any communication using digital media and networks. *Collaboration* — taking part in digital teams and working groups using shared tools. *Participation* — taking part more open-endedly than collaboration, over a longer time and across settings |
| **Digital learning and development** | *Learning* — turning digital opportunities into personal learning gains. *Teaching* — supporting and developing others in digital settings |
| **Digital identity and wellbeing** | *Identity* — how you develop and project a digital identity, and manage your digital reputation. *Wellbeing* — the impact of digital devices, tools, services and systems on you as a person |

The deck's closing line on the framework: reflecting on your skills today and
understanding where you have gaps and opportunities for growth sets you up
for success — **lifelong learning is a critical skill for the future of
work.**

### The questionnaire is not the framework

The Jisc *discovery tool* — the survey students actually complete — reports
against **sixteen** named elements, not six:

```
Digital proficiency          Digital communication      Digital innovation
Digital productivity         Digital collaboration      Preparing for digital learning
Information literacy         Digital participation      Digital learning activities
Media literacy               Digital creation           Digital identity management
Data literacy                Problem solving            Digital wellbeing
                                                        Digital skills for work
```

Each is scored on a confidence level. The report in this folder uses three:
**Developing → Capable → Proficient**.

> **Six elements, sixteen reported items — and they do not nest one-to-one.**
> "Digital skills for work" is reported by the tool but is not one of the six
> framework elements; "digital teaching" is part of the *learning and
> development* element but is not separately reported. Writing "the JISC
> framework has six elements" is correct; writing "my JISC report scored me
> on the six elements" is not. Say which artefact you are describing — the
> framework, or the discovery tool report.

> **It measures confidence, not competence.** Every level in the report is
> labelled "Your confidence level", and the instrument is a self-assessment
> questionnaire. That is a limitation worth naming in a reflection: it makes
> the result vulnerable to over- and under-confidence, and it means the
> result is a starting point for a development plan, not a test score. A
> reflection that acknowledges this reads as more critical, not less
> credible.

## 2.12 Assessment 1 — Digital Capability Self-Assessment and Reflection

Due Friday 22 August. Lecture 1's map places it under the *digital
capabilities and the future of work* thread, and Lectures 3 and 4 both carry
a standing note that you can use content, references and notes from those
weeks in A1.

**The structure used in the submitted A1 in this folder** — four headed
sections, roughly 790 words, with an APA reference list:

| Section | What it does |
|---|---|
| **Reflection** | Sets up why digital capability matters, defines digital capabilities via Jisc, and names the six elements |
| **Relate** | Walks through the self-evaluation — strengths first, then gaps — with a concrete real-world example for each claim |
| **Reasoning** | Argues which elements matter most for the specific career path, with external evidence |
| **Reconstructing** | An actionable, dated plan to close the named gaps |

That is a recognisable *reflective writing* structure and the Week 2 tutorial
was "Writing a reflection", so it is very likely the taught model. The
strongest features of the submitted piece are that every capability claim is
anchored to a specific artefact (a web build, a research workflow) and that
the plan in *Reconstructing* is time-boxed into 2-week, 6-week and 4-week
blocks with countable targets rather than intentions.

### Three factual mismatches in the submitted A1

The A1 in this folder and the Jisc report it is based on **do not agree**.
These are worth fixing before any of this reasoning gets reused in A2 or A3.

| A1 says | The Jisc report says | Verdict |
|---|---|---|
| "I am also proficient in digital problem-solving and digital innovation" | Problem solving = **Capable**. Digital innovation = **Proficient** | Half right — problem solving was overstated by one level |
| Gaps are in "digital creation, communication/collaboration, digital identity and wellbeing" | Digital creation = **Proficient**. Digital communication = **Proficient**. Digital identity management = **Capable**. Digital wellbeing = **Capable** | Digital creation and digital communication are among the *strongest* results, not gaps |
| Closing "Digital participation (developing) and Digital problem-solving and innovation (capable)" | Digital participation = **Developing** ✓. But problem solving and innovation are two separate reported elements scoring **Capable** and **Proficient** | The element names were merged, and one level applied to both |

Two further omissions:

- The report returned **three** *Developing* results — digital collaboration,
  digital participation, and **digital learning activities**. The A1 discusses
  only participation and does not mention digital learning activities at all,
  even though it is one of the three lowest results.
- The A1 cites the framework as **(Jisc, 2024)** while Lecture 3 cites it as
  **(JISC, 2025)**. Both may be defensible depending on which page was
  accessed, but pick one and use it consistently.

> **These are the errors most likely to cost marks in a reflection, because a
> reflection's whole claim is accuracy about yourself.** The pattern is
> collapsing the tool's sixteen reported elements into the framework's six
> names, then attaching one level to a merged label. The fix is mechanical:
> quote the element name exactly as the report prints it, and quote the level
> exactly as the report prints it. "Problem solving (Capable)" and "Digital
> innovation (Proficient)" are two sentences, not one.

> **Your Jisc report is confidential to you.** The report says so on its first
> page. Nothing stops you quoting your own results in your own assessment —
> that is what the assessment asks for — but it is your data, and there is no
> reason for it to appear anywhere else.

<details>
<summary>Checkpoint 3 — JISC and A1</summary>

**Q.** Name the six elements of the JISC Digital Capabilities Framework.

**A.** Digital proficiency and productivity; information, data and media
literacies; digital creation, problem-solving and innovation; digital
communication, collaboration and participation; digital learning and
development; digital identity and wellbeing.

**Q.** Which JISC element does "the ability to find, evaluate, organise and
share information" belong to, and what is that sub-capability called?

**A.** Information, data and media literacies — the sub-capability is
information literacy.

**Q.** What is the single most important methodological limitation of the
Jisc discovery tool, and why does naming it strengthen a reflection?

**A.** It measures self-reported **confidence**, not demonstrated competence
— every result is labelled "your confidence level". Naming it shows critical
engagement with the instrument rather than treating the output as an
objective score, and it justifies why the development plan rather than the
score is the substance of the reflection.

**Q.** A reflection says "my JISC report rated me capable at digital
creation, problem-solving and innovation". What is structurally wrong?

**A.** That is a *framework element name*, and the report does not score
framework elements — it scores sixteen individual items. Digital creation,
problem solving, and digital innovation are three separate results that can
have three different levels. One level cannot be attached to the merged
label.

</details>

---

## Summary

- **Skills over job titles.** WEF's evidence is that *technological literacy
  is a critical skill across all industries*. Two different WEF reports are
  used in this unit — the 2023 report (top ten priorities, 2023–2027) and the
  2025 report (skills on the rise, 2025–2030). Do not mix them.
- **Automation versus augmentation**: tasks delivered predominantly by people
  fall 47% → 33% by 2030, while technology rises 22% → 34% and overtakes
  people. The "now" column rounds to 99%.
- **Why the tech matters**: know how systems work, spot bias and limits, make
  informed decisions, join ethical debates, build job-ready skills.
- **AI ⊃ machine learning ⊃ neural networks ⊃ deep learning.**
- **The two equations**: traditional programming is `Rules + Data = Answers`;
  machine learning is `Data + Answers = Rules`. Humans move from supplying
  rules to supplying labels.
- **Vectors** turn features into numbers so a machine can learn from them.
  The encoding is a human design choice, which is where bias enters.
- **Neural networks** run input → hidden → output layers and learn through
  forward and backward propagation. A sigmoid output above **0.5** is a
  positive classification; the deck's example outputs 0.77.
- **DNNs are black boxes** — the mechanics are understood, the reason a
  parameter change helps often is not. **Transparency** (what data and
  architecture) is not **explainability** (why this output).
- **NLP** handles ambiguity and context; **LLMs** use Transformers and
  self-attention to weigh every word against every other word **at once**
  rather than in sequence.
- **Robots** run a sensing–computing–acting cycle in a physical body. RPA and
  robo-advisors are named exceptions. Robots stay task-specific because of a
  productivity–flexibility trade-off.
- **The JISC framework** has **six elements**; the Jisc discovery tool reports
  **sixteen** items on a confidence scale. It measures confidence, not
  competence — say so.
- **A1** follows a Reflection → Relate → Reasoning → Reconstructing structure.
  Quote element names and confidence levels exactly as the report prints
  them; merging them is the error that shows up in the draft in this folder.
