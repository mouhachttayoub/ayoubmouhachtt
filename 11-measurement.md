@@ experiment-minimum-detectable-effect
META: Understand minimum detectable effect in A/B testing, distinguish absolute from relative lift and assess whether your traffic can answer the business question.
ANSWER: Minimum detectable effect, or MDE, is the effect size a test is designed to detect under specified statistical assumptions. It is not a promise that the test will find that effect. Choose a business-relevant difference, then assess baseline rate, traffic, allocation and observation time.
RELATED: sample-ratio-mismatch,ab-test-results-interpretation,guardrail-metrics-experiments

## Define the effect in understandable units

A conversion change from 5% to 6% is one percentage point in absolute terms and 20% relative to the 5% baseline. Confusing these descriptions can radically change the test plan. Record both when communicating the hypothesis.

Also define the outcome and population. Account activation and visitor purchase rates have different units and baselines. A planning calculation for independent visitors may be inappropriate when people belong to shared accounts or regional groups.

## Record the planning assumptions

| Input | Why it matters |
| Baseline | Determines how common the outcome is |
| Effect size | Defines the difference the design should detect |
| Statistical method | Specifies uncertainty and error assumptions |
| Allocation unit | Determines which observations can be treated as independent |
| Traffic | Limits how quickly enough eligible observations arrive |
| Outcome lag | Determines when observations become usable |

Use a suitable statistical calculation for the actual design. There is no universal minimum number of conversions that makes every experiment reliable.

## Worked example: meaningful effect, limited traffic

Illustrative example: a page receives 100 suitable visitors per week and converts 5% into purchases. Improving to 6% would mean one extra expected purchase per 100 visitors under a stable population. That small difference can be commercially worthwhile while still difficult to distinguish from ordinary variation quickly.

Do not change the MDE to a larger number merely to make the planning tool return a shorter duration, then describe the result as capable of detecting the original improvement. If the business cannot support the required test, investigate a larger change or a narrower learning question.

## Separate detection from decision

A statistically detectable difference may be too small to justify implementation cost. A commercially interesting observed difference may remain uncertain. Report both the business value and the evidence strength.

Avoid repeated informal checking followed by stopping at the first attractive result. Use an analysis and stopping approach chosen before the outcomes. For low-volume sites, usability evidence can guide a repair without being presented as a precise lift estimate.

## Prepare the test brief

Write the baseline, absolute and relative effect, allocation unit and maturity window. Ask an analyst to check the calculation when the design is unfamiliar or the investment is material. Validate assignment and logging with the [sample ratio mismatch guide](sample-ratio-mismatch.html) before interpreting the effect.

@@ sample-ratio-mismatch
META: Understand sample ratio mismatch in A/B tests, investigate assignment and logging problems, and avoid treating an uneven count as an automatic result.
ANSWER: Sample ratio mismatch, or SRM, is a statistically meaningful difference between the configured experiment allocation and the observed counts. It can indicate assignment, exposure or logging problems. Check the population and pipeline before trusting a conversion comparison.
RELATED: experiment-minimum-detectable-effect,paid-experiment-exclusion-log,marketing-data-quality-contract
SOURCE: https://www.microsoft.com/en-us/research/articles/diagnosing-sample-ratio-mismatch-in-a-b-testing/|Microsoft Research: diagnosing sample ratio mismatch

## An uneven count is not automatically SRM

Random allocation does not require perfectly equal counts at every moment. Use a suitable statistical check for the expected allocation and observation unit. A small difference can occur normally; a large or systematic difference deserves investigation.

Microsoft's research describes SRM as an important diagnostic before analyzing effects. Treat the check as a warning about evidence quality, not as a measure of which variant customers prefer.

## Inspect the pipeline in order

| Stage | What to investigate |
| Eligibility | Were the same inclusion rules applied? |
| Assignment | Was the configured split implemented correctly? |
| Exposure | Did both variants become available as intended? |
| Logging | Were users or events lost differently? |
| Filtering | Did later exclusions alter the population? |

Compare assignment records with exposure and outcome records where available. A mismatch appearing only after a filter can point to a different cause than one already present at assignment.

## Worked example: missing visitors improve the reported rate

Illustrative example: a 50/50 test records 5,000 visitors in A and 3,000 in B after a treatment loading problem. Some B visitors may be missing from the analysis. A higher conversion rate among the surviving B visitors does not establish a better overall customer experience.

Investigate the loss and its relation to the treatment. Do not rebalance by deleting A visitors merely to make the counts look equal. That cosmetic change does not repair the process that produced the missing records.

## Decide what the remaining data can support

Sometimes an identified incident allows a justified reanalysis under a documented rule. Sometimes the intended question remains unanswerable. Keep the original population, correction and limitations in the experiment record.

Never assume missing data are random without checking. Browser, device or account differences can make the loss systematic. Maintain an [exclusion log](paid-experiment-exclusion-log.html) and repair the pipeline before repeating the test.

@@ guardrail-metrics-experiments
META: Choose experiment guardrail metrics that protect customer experience and contribution, with examples and a pre-launch decision worksheet.
ANSWER: Guardrail metrics track important outcomes an experiment must not damage while improving its primary goal. Choose a few safeguards connected to plausible harm, define how they are measured and agree the response before launch. A local conversion win can still hurt the business.
RELATED: paid-acquisition-stop-loss-rules,minimum-detectable-effect,marketing-pre-mortem

## Connect each guardrail to a mechanism

If a stronger headline could create false expectations, monitor relevant complaints or refunds. If a change makes checkout faster by hiding information, monitor mistaken purchases and support. A long list of unrelated metrics is less useful than a small set of relevant safeguards.

Keep operational stop conditions separate from statistical comparisons. A verified payment failure can require immediate repair even before enough observations exist for a reliable rate estimate.

## Write an actionable guardrail

| Experiment | Primary outcome | Relevant safeguard |
| Simplified checkout | Completed suitable purchases | Payment failures and mistaken orders |
| Stronger acquisition claim | Qualified leads | Expectation-related complaints |
| New onboarding flow | First useful outcome | Errors and support burden |
| Discount promotion | Additional contribution | Returns and fulfillment delays |

Specify the population, window and owner. A metric nobody can inspect in time is not a practical launch safeguard.

## Worked example: more purchases, worse contribution

Illustrative example: a promotion raises orders from 100 to 150 but lowers contribution per order from $30 to $15. Total contribution falls from $3,000 to $2,250 before any additional promotion costs. Order volume improved while the economic outcome worsened.

The guardrail should use the cost model appropriate to the offer. Do not infer profit from the purchase count, or assume every variable cost stays fixed when volume changes.

## Avoid post-result invention

Choose guardrails before launching and record why they matter. Discovering a genuine new harm during the test still deserves action, but label it as an additional finding. Do not select whichever secondary metric makes a preferred result look good.

Review uncertainty and outcome lag. Returns can arrive later than purchases. Keep the final decision open until relevant safeguards mature, unless an operational issue requires earlier intervention.

## Add safeguards to the next brief

Write one plausible customer harm and one economic risk for the proposed change. Select the measures that would reveal them and assign an action owner. Use the [pre-mortem worksheet](marketing-pre-mortem.html) to identify risks before exposure.

@@ holdout-test-design
META: Design a marketing holdout around eligible customers, a defined exposure and mature business outcomes, with a simple illustrative lift calculation.
ANSWER: A marketing holdout withholds a defined intervention from a comparison group to estimate what happens without it. The groups must be comparable and exposure must be controlled appropriately. Attributed conversions alone cannot tell you how many outcomes would have happened anyway.
RELATED: paid-media-geo-tests,mobile-app-reengagement-holdout,marketing-attribution-vs-incrementality

## Define what is being withheld

Hold back a particular message, channel or campaign, not an undefined “marketing.” Identify other activity that both groups still receive. If one group loses sales support as well as advertising, the result concerns the combined intervention.

Choose an assignment unit suitable for the behavior. People sharing accounts or households may influence one another. Regional designs need to consider travel and media spillover. Record these limits before launch.

## Prepare the design sheet

| Field | Required decision |
| Eligible population | Who can receive the intervention? |
| Assignment | How are comparable groups formed? |
| Exposure | What changes and what stays available? |
| Primary outcome | Which business behavior matters? |
| Observation window | When can the outcome mature? |
| Safeguards | What must not be harmed? |

Volume and variability determine whether the design can estimate an effect usefully. Do not assume a fixed holdout percentage works for every business.

## Worked example: some purchases happen without the message

Illustrative example: two comparable groups each contain 1,000 eligible customers. Fifty exposed customers purchase and forty holdout customers purchase. The observed rate difference is one percentage point: 5% minus 4%. Applying it to 1,000 exposed customers gives ten additional purchases as a simple estimate.

The estimate still needs uncertainty analysis, valid assignment and an exposure check. It is not proof that exactly ten specific people purchased because of the message. Compare contribution and treatment cost to judge the business result.

## Diagnose contamination and missing data

Verify whether holdout members received the intervention through another route. Compare logging coverage and outcome definitions. A missing purchase record can distort the difference just as an uncontrolled campaign can.

Keep the original design and any deviations together. If the test is compromised, identify what narrower learning remains possible instead of declaring a causal win. The [geo test guide](paid-media-geo-tests.html) explores regional designs, and the [SRM guide](sample-ratio-mismatch.html) helps diagnose allocation counts.

@@ new-customer-revenue-definition
META: Define new-customer revenue with customer identity, order status, refunds and a stated window before using it to evaluate acquisition campaigns.
ANSWER: New-customer revenue is revenue associated with customers classified as new under a documented rule. Decide how identity, first purchase, refunds and timing work. A platform's “new” label and the business's customer record may not describe the same population.
RELATED: first-order-vs-repeat-customer-profit,paid-channel-overlap,fully-loaded-customer-acquisition-cost

## Decide what makes a customer new

Use the first qualifying purchase or another explicit business event. Explain how canceled or unpaid orders are treated. Avoid counting someone as new merely because they use a new email or device when the business can reliably identify an existing relationship.

Separate new accounts, new buyers and new orders. One company can create several accounts without becoming several independent customers. Choose the entity that matches the business decision.

## Document the metric contract

| Definition | Question |
| Identity | Person, household, company or account? |
| Qualifying event | Which completed action starts the relationship? |
| Revenue basis | Gross, net, collected or another stated measure? |
| Refund treatment | When are reversals reflected? |
| Window | First order only or a fixed acquisition-age period? |
| Coverage | Which customers cannot be matched reliably? |

State limitations beside the number. Identity gaps should not be hidden by a precise percentage.

## Worked example: first-order and cohort revenue differ

Illustrative example: 100 new customers produce $8,000 on first purchases and another $2,000 within a later observation window. First-order revenue is $8,000; cohort revenue over the stated window is $10,000 before the defined deductions. Calling both “new-customer revenue” without a window obscures the comparison.

If some first orders are refunded, apply the selected revenue definition consistently. Do not compare an older refund-adjusted cohort with a recent gross-revenue cohort as though both are mature.

## Reconcile channel reporting

Use business records to count actual customers once. Channel attribution can assign credit to overlapping journeys. Adding each platform's new-customer revenue claims can overstate the total.

Write the definition in the reporting sheet and test it against known customer histories. Then compare acquisition cost and contribution over matching windows. The [first-order versus repeat guide](first-order-vs-repeat-customer-profit.html) provides the next economic step.
