@@ ethical-growth-hacking-playbook
META: A practical growth hacking process with test boundaries, customer safeguards, a learning record and an example you can adapt to your business.
ANSWER: Growth hacking is useful when it turns a customer problem into a small, measurable experiment. The shortcut is a shorter learning cycle, not a misleading promise or a loophole. Choose a behavior to improve, protect the customer experience and keep a record of what changed.
RELATED: growth-sprint-planning,guardrail-metrics-experiments,prioritize-growth-experiments

## Give the experiment a customer job

“Increase engagement” is too vague to guide a test. Choose a situation: new customers cannot find their first report, qualified buyers postpone a demo, or existing users forget a useful recurring task. Describe the obstacle in language the customer would recognize. Then explain the proposed mechanism. A report preview might remove uncertainty; another notification might only create noise.

Before launching, ask whether the idea still feels acceptable when explained openly. A referral invitation should say who receives a message. A trial should explain the next charge. A countdown needs a real deadline. If the tactic depends on customers misunderstanding the offer, remove it from the backlog.

## Build a reversible experiment card

Record the eligible audience, change, comparison, primary outcome, guardrails and stop condition. Specify the unit being assigned: person, account or region. If a company shares a workspace, assigning teammates to different experiences can make the comparison confusing. Keep unrelated changes stable where possible.

| Field | Example specification |
| Customer obstacle | Trial users do not know what a completed setup produces |
| Change | Show an actual sample output before configuration |
| Primary outcome | Eligible accounts reaching their first useful output |
| Guardrail | Support requests about misleading expectations |
| Decision | Expand, revise or stop after the planned review |

These are planning fields, not proof that a result will be reliable. Low traffic may support a usability observation before it supports a precise conversion comparison.

## Worked example: a better invitation

Illustrative example: a collaboration app considers automatically inviting a customer's entire address book. A safer hypothesis is an optional invitation to one named teammate after the customer completes a shared task. The sender previews the invitation, selects the recipient and can skip it. Measure accepted invitations and subsequent shared activity, not just the number of emails sent.

Suppose 60 of 200 eligible accounts send an invitation and 24 recipients complete the shared task. The completion count is 24; the sender invitation rate is 30%. Neither number alone proves incremental growth. A comparison group and mature downstream outcomes are needed before crediting the feature with additional customers.

## Keep the learning after the campaign

Write what the test changed, what the data can support and what remains uncertain. Preserve unsuccessful experiments too. A failed message can reveal that the obstacle was integration effort rather than awareness. Reusing that insight is more valuable than launching the same claim with a new design.

Choose the smallest next action justified by the evidence. Fixing an inaccurate sample output may come before scaling traffic. Growth hacking becomes a repeatable practice when teams can explain why a behavior changed and what they will do with that information.

## Use this playbook

Take one idea from your backlog and write its customer job, mechanism and rollback condition. Reject it if you cannot describe the offer honestly or identify a useful downstream outcome. For a more detailed risk check, use the guide to [experiment guardrails](guardrail-metrics-experiments.html).

@@ growth-team-roles
META: Clarify growth team responsibilities with a decision-rights worksheet, dependency map and practical example for a small marketing team.
ANSWER: A growth team needs clear ownership of the question, implementation, measurement and final decision. These responsibilities can sit with a few people; they do not require a separate hire for every role. The important distinction is who contributes and who can approve a change.
RELATED: growth-sprint-planning,marketing-data-quality-contract,growth-marketing-plan

## Separate ownership from participation

A campaign can involve marketing, product, sales and support without having four owners. Name one person responsible for the experiment reaching a decision. That person does not necessarily design the creative or write the event code. They coordinate dependencies and make sure the question remains intact.

Also name the person who can approve exposure to customers. A marketer may own an acquisition test while a product lead controls changes inside the app. Customer support should be able to flag an unexpected increase in confusion even when it does not own the primary metric.

## Write down the decision rights

| Responsibility | Deliverable | Decision right |
| Research | Customer evidence and the obstacle | Recommend a testable question |
| Experiment owner | Brief, dependency list and review | Coordinate the test and propose the next action |
| Implementation | Working experience and rollback path | Confirm readiness and technical limits |
| Measurement | Event definitions and analysis | Flag invalid or incomplete evidence |
| Business approver | Budget and customer-risk boundaries | Approve launch, pause or expansion |

For a small team, one person can occupy several rows. Keep the rows separate anyway. It prevents “I launched the campaign” from silently meaning “I also approved the financial assumptions and validated the tracking.”

## Worked example: the cheap-lead disagreement

Illustrative example: marketing reports 120 leads at $10 each. Sales says only 18 are relevant. Rather than arguing over the headline number, the experiment owner asks both teams to define relevance before the next test. Sales supplies an observable qualification rule; marketing adjusts the ad and form; the analyst checks the resulting cohort.

The business approver decides whether the additional qualifying questions are worth any reduction in lead volume. The sales team does not need to control the advertising platform, and marketing does not get to redefine a qualified opportunity after seeing the results. Each role has a useful contribution without overlapping authority.

## Make dependencies visible before scheduling

Identify who supplies product facts, creative, data access and approvals. If the designer has two days available and the developer has none, a sprint containing three landing-page builds is not executable. Either change the experiment or change its timing.

Use a short readiness review: is the promise accurate, is the experience usable, can the outcome be observed and can the team stop the test? Escalate unresolved questions before launch. A recurring meeting should resolve decisions, not become a place where everyone gives an unrelated activity report.

## Create a role map today

Choose one upcoming experiment and fill the five rows with names. Ask each person to confirm their deliverable and decision right. Leave no ambiguous “team owns it” cells. When ownership changes, transfer the brief and evidence together using the [agency handover checklist](agency-handover-checklist.html).

@@ growth-sprint-planning
META: Plan a growth sprint around finished experiments, readiness checks and purchase lag, with an example schedule and a practical review checklist.
ANSWER: A growth sprint is a short execution period for a small set of experiments that are ready to run. Plan work the team can finish and interpret. A two-week sprint does not mean every customer's purchase journey must finish within two weeks.
RELATED: growth-team-roles,paid-acquisition-stop-loss-rules,conversion-lag-reporting

## Split readiness, exposure and observation

An experiment has at least three clocks. The team needs time to prepare the change, customers need time to encounter it, and outcomes need time to mature. Putting all three into one arbitrary deadline can create a premature decision.

For a demo reminder, exposure happens before the appointment, attendance happens on the day, and revenue may happen weeks later. You can finish implementation in a sprint while explicitly leaving the revenue review open. Label the result “attendance observed; purchase outcomes pending” rather than calling it a complete win.

## Choose fewer tests than tasks

A test may require copy, design, implementation, tracking and support briefing. Five tasks can therefore belong to one experiment. Treating each task as a separate growth initiative makes the backlog look productive while concealing dependencies.

Estimate capacity by the scarce role. If development can support one page change, do not schedule three page experiments because marketing has spare time. Reserve capacity for broken tracking or a rollback. An experiment that is technically ready but lacks customer support coverage is not ready for exposure.

| Sprint stage | Completion check |
| Preparation | Accurate claim, clear hypothesis and approved comparison |
| Readiness | Experience, event collection and rollback checked |
| Exposure | Eligible audience receives the intended version |
| Observation | Counts, lag and guardrails reported with their limitations |
| Review | A decision and the next evidence needed are recorded |

## Worked example: a demo attendance sprint

Illustrative example: a team can improve a booking confirmation page and send one reminder. In the first days, it defines qualified bookings, audits timezone display and writes the agenda. It then verifies the reminder stops after cancellation. Exposure starts only after those checks pass.

At the sprint review, 40 appointments have occurred and 15 are still scheduled for later. Report attendance for the 40 mature appointments separately. Combining all 55 in the denominator would treat future meetings as no-shows. Keep advertising and qualification rules stable unless a safety issue requires a change.

## Review learning, not just shipped work

Discuss whether the mechanism behaved as expected. Did people read the agenda? Did a timezone error explain missed meetings? Did the reminder create duplicate messages? These observations can justify a repair even when traffic is insufficient for a confident lift estimate.

End with an owner and decision: continue observation, revise the change, stop it or expand exposure. Do not carry a test indefinitely because nobody wants to call it inconclusive. A clear unresolved question is a valid output.

## Plan your next sprint

Take your top three ideas and list their preparation, exposure and observation requirements. Select only those that fit actual capacity. Schedule the final business-outcome review separately when purchase lag extends beyond the sprint. Use the [conversion lag guide](conversion-lag-reporting.html) to define that window consistently.

@@ marketing-market-entry
META: Test market entry with a narrow segment, realistic delivery conditions and a decision worksheet before committing to a broad marketing launch.
ANSWER: A market entry strategy should test whether a specific customer group can understand, buy and use your offer under real operating conditions. Begin with one segment and a reversible route to market. Translation alone does not establish demand or product fit.
RELATED: competitive-alternative-map,bilingual-copy-review,go-to-market-plan-template

## Define the market more precisely

“Expand internationally” is a direction, not a test. Specify the customer situation, language, buying role, payment method, delivery conditions and support requirements. A self-service digital product and a complex business platform can face very different barriers in the same country.

Check what the offer can actually deliver before writing the launch page. Does onboarding require a local integration? Can support answer the customer's language? Does the advertised price match the checkout currency and recurring charges? A market is not validated when interest depends on conditions the business cannot provide.

## Set an evidence ladder

| Evidence | What it can tell you | What it cannot establish alone |
| Customer interviews | Problems, alternatives and buying constraints | Reliable conversion or market size |
| Clear offer page | Whether the proposition is understood | Whether buyers will stay |
| Paid pilot or purchase | Willingness to commit under stated terms | Long-term profitable demand |
| Mature customer cohort | Usage, support load and contribution | That every adjacent segment behaves the same way |

Decide what would justify the next commitment before collecting responses. Otherwise, a few enthusiastic conversations can become a reason to hire a team or launch several channels prematurely.

## Worked example: one segment before a whole country

Illustrative example: an operations tool wants to serve French-speaking independent retailers in a new market. The team starts with retailers using one supported workflow rather than all small businesses. It checks their current workaround, creates a localized demonstration and offers a pilot with explicit support boundaries.

Suppose ten pilots produce six active accounts, but four require an unsupported payment integration. The lesson is not simply “60% activation.” It is that integration compatibility may define the viable segment. The next test should clarify that requirement before acquisition, or investigate whether building the integration is worthwhile.

## Compare a launch with the alternative

Estimate the learning budget, operational effort and opportunity cost. Time spent entering a new market is time unavailable for serving existing customers. Document the local assumptions that remain unverified: pricing expectations, acquisition cost, onboarding time and renewal behavior.

Do not substitute a foreign keyword database for measured local demand. Search estimates can help generate questions, but interviews and actual customer outcomes answer different parts of the decision. Keep the geography of every data source visible in the planning sheet.

## Make the entry decision

Create a brief with one segment, one offer, one acquisition route, operating limits and the evidence needed for expansion. Stop or redesign if the promise cannot be fulfilled. For positioning against the current workaround, build the [competitive alternative map](competitive-alternative-map.html) before the launch copy.

@@ jobs-to-be-done-switch-interview
META: Use a jobs-to-be-done switch interview to reconstruct buying triggers, alternatives, concerns and the decision timeline without leading the customer.
ANSWER: A jobs-to-be-done switch interview reconstructs the events that moved someone from an old solution to a new one. Ask about an actual recent purchase or switch, not hypothetical preferences. The useful output is a timeline of circumstances and tradeoffs, not a collection of compliments.
RELATED: customer-objection-research,competitive-alternative-map,customer-research-interview-questions

## Choose a real decision to investigate

Interview customers who recently committed to the offer, and where appropriate those who seriously evaluated it but chose another path. A customer who bought yesterday may remember the journey better than someone who cannot separate the original decision from years of use.

Explain the purpose and ask permission to record or take notes. Keep identifying details private. Do not make support or service contingent on a favorable interview. You are trying to understand a decision, not extract a testimonial.

## Reconstruct events in sequence

| Moment | Question to ask |
| First dissatisfaction | What happened that made the old way feel insufficient? |
| Initial search | What did you try or ask about first? |
| Serious evaluation | Which options did you actually compare? |
| Hesitation | What made you delay or doubt the purchase? |
| Commitment | What changed immediately before you decided? |
| First use | What did you expect to accomplish that day? |

Follow up with concrete details: who was involved, what document was open, what deadline mattered and what nearly stopped the decision. Avoid suggesting the answer. “Was saving time important?” creates a different conversation from “What were you trying to avoid that week?”

## Worked example: the feature that was not the trigger

Illustrative example: an agency buys reporting software. The team initially assumes the dashboard design caused the purchase. An interview timeline instead reveals that a client asked for a revised report before a renewal meeting, the spreadsheet owner was unavailable and the agency needed another employee to produce the report safely.

The resulting hypothesis is about shared access and dependable handover, not prettier charts. It is still a hypothesis. One interview does not establish the motivation of every buyer. Compare several recent decisions and look for situations that recur, including cases that contradict the emerging story.

## Turn the timeline into a testable message

Write the trigger, desired progress, current alternative and source of anxiety. Distinguish observed words from your interpretation. If several buyers worry about importing data, show the migration process in the offer rather than inventing a blanket “effortless setup” promise.

Use the insight to choose a specific experiment: a migration walkthrough, a role-based demo or a clearer explanation of access. Preserve the evidence that supports the message. Do not publish an identifiable quotation without the customer's permission.

## Run one useful interview

Select a recent decision, prepare the timeline questions and leave space for unexpected answers. Afterward, identify one marketing assumption the interview challenged. Check it against more customer decisions before rewriting the whole campaign. The [objection research guide](customer-objection-research.html) helps distinguish a buying barrier from a casual preference.
