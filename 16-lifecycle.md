@@ renewal-reminder-strategy
META: Plan subscription renewal reminders that explain the next charge, current plan and supported options without mixing billing clarity with pressure.
ANSWER: A renewal reminder should help the customer understand the coming account event: what renews, when, at what price and what options are actually available. Use current billing records. A generic retention message cannot replace accurate information about the commitment.
RELATED: saas-annual-plan-cash-tradeoff,transactional-vs-promotional-email,lifecycle-message-qa

## State the actual renewal conditions

Read the customer's current plan, billing interval and any applicable change. Do not copy a public starting price into a notice for a different contract. Show dates and currency clearly, including the timezone where it affects the action.

Explain how customers can review or change their plan through the supported account process. Use approved terms; do not promise a pause, refund or price protection the service does not provide.

## Build the reminder from reliable fields

| Information | Validation question |
| Plan | Does it match the current account? |
| Renewal date | Is it the actual upcoming event? |
| Amount | Are applicable adjustments reflected? |
| Action route | Does the account link work securely? |
| Options | Are they supported under the real terms? |
| Exit | Does the message stop if the state changes? |

Choose timing according to the customer's decision and any applicable requirements, rather than an invented universal best day.

## Worked example: an outdated reminder quotes the wrong price

Illustrative example: a yearly subscriber's plan changes, but the queued reminder uses the old amount. The message may be reassuring while factually wrong. Validate the current billing record near send time and stop the old notice when a replacement is necessary.

A reminder after cancellation can also mislead the customer into expecting another charge. Treat current state as part of eligibility, not a minor personalization field.

## Review understanding and outcomes

Evaluate billing questions, successful account changes, renewal outcomes and complaints. Do not label all renewals as caused by the reminder. Customers may have renewed without it.

Keep promotional expansion separate from the necessary account information. Check the full journey from email to account page with the [lifecycle QA worksheet](lifecycle-message-qa.html). The goal is a clear decision, not a renewal produced by confusion.

@@ lifecycle-frequency-caps
META: Set lifecycle communication frequency limits across email and WhatsApp using task priority, current states and a shared message ledger.
ANSWER: Lifecycle frequency caps limit unnecessary communication across the customer's journey. Coordinate channels and sequences around the same task, not separate team calendars. Protect essential account information while preventing multiple automations from repeating the same request.
RELATED: suppression-list-automation,transactional-vs-promotional-email,whatsapp-ecommerce-order-follow-up

## Look at the recipient's total experience

A team may send only a few messages per sequence while several sequences overlap. Count contact attempts across channels where your records support it. Distinguish the customer's replies from outbound prompts and avoid treating a conversation as a campaign blast.

Prioritize current tasks. A payment issue, appointment confirmation and promotional announcement do not have equal urgency. Sending a product pitch immediately after a complaint can be inappropriate even if the numerical cap permits it.

## Use a coordination sheet

| Rule | What to define |
| Task priority | Which communication should happen first? |
| Duplicate handling | When does one message replace another? |
| Channel choice | Which supported channel fits the task? |
| Current state | What makes a scheduled message obsolete? |
| Review | Who checks complaints and message overlap? |

There is no universal frequency that fits every product and customer. Use actual response patterns and preferences rather than an unsupported benchmark.

## Worked example: three reminders for one payment

Illustrative example: a failed invoice triggers email, WhatsApp and a separate account-manager sequence on the same day. Each team believes it sent one useful reminder. The customer receives three requests for the same action.

A shared task record can suppress duplicates and coordinate the next attempt. After payment succeeds, all failure messages should exit. A global cap alone may merely postpone an obsolete notice.

## Monitor useful outcomes and harm

Review resolved tasks, replies, sending preferences, complaints and support burden. More messages can produce more clicks without better outcomes. Respect the applicable channel rules and recorded customer choices.

Audit one week's communication for several customer states. Find the repeated task, then fix the triggering and suppression logic. Use the [suppression guide](suppression-list-automation.html) to make the cap work with current account states.

@@ lapsed-customer-survey
META: Ask lapsed customers about changed needs and unresolved obstacles with a short research process that keeps feedback separate from a win-back pitch.
ANSWER: A lapsed-customer survey should investigate what changed in the customer's situation and why use or purchasing stopped. Keep the request short, optional and clear. Research loses value when every response is immediately forced into a sales argument.
RELATED: customer-win-back-strategy,saas-churn-analysis,jobs-to-be-done-switch-interview

## Define who is lapsed

Use a relevant cadence. Someone who buys quarterly is not necessarily inactive after thirty days. Separate completed need, temporary pause, product disappointment and payment obstacles where the evidence permits.

State the purpose of the research and how feedback will be used. Do not imply that a customer must respond to obtain ordinary support. Keep personal or confidential details out of public research summaries.

## Ask about events, not desired compliments

| Research question | What it investigates |
| What changed since your last use? | The customer's current situation |
| What were you trying to accomplish? | The original task |
| What did you use instead? | Actual alternatives |
| Where did the experience fall short? | A concrete obstacle |
| Is the task still relevant? | Whether a return offer can fit |

Choose a few relevant questions rather than sending a long questionnaire to every former customer.

## Worked example: the need ended

Illustrative example: a customer stopped using a project tool after the project finished. A discount does not necessarily create another project. Their feedback can inform segmentation and timing, while a support-related departure would need a different response.

Treat replies as a selected sample. People who answer may differ from those who ignore the request. Do not present the survey percentages as the motives of all departed customers without accounting for the response population.

## Turn findings into hypotheses

Separate direct observations from interpretations. A repeated setup obstacle can justify a better guide; one feature request does not establish a universal roadmap priority. Obtain permission before quoting identifiable feedback.

If a customer indicates a current need, a relevant follow-up can be offered through the appropriate process. Keep that conversation distinct from the original research record. Use the [win-back guide](customer-win-back-strategy.html) when planning the return offer.

@@ referral-incentive-unit-economics
META: Calculate referral incentive cost per qualified new customer, including dual rewards, fulfillment costs and reversals, with a transparent worked example.
ANSWER: Referral incentive economics compare the total reward and delivery cost with the contribution of genuinely new, suitable customers. Count completed eligible outcomes, not invitations. Include rewards paid to both sides and the effect of refunds or invalid referrals.
RELATED: customer-referral-program-design,new-customer-revenue-definition,holdout-test-design

## Define the rewarded outcome

Choose the event that earns the incentive: a qualifying paid purchase, a completed subscription period or another supported condition. Explain eligibility and timing accurately. Rewarding raw sign-ups can create a different customer population from rewarding fulfilled purchases.

Use reliable identity and outcome records. Distinguish an existing customer using another account from a genuinely new relationship, where matching is possible. Keep the limitations visible rather than claiming perfect fraud detection.

## Worked example: both sides have a cost

Illustrative example: a referral produces $70 contribution before acquisition-related rewards. The referring customer receives $15, the new customer receives $20 and administering the reward costs $5. Contribution after those items is $30, before any other relevant costs.

| Item | Illustrative amount |
| Contribution before rewards | $70 |
| Referrer reward | −$15 |
| New-customer incentive | −$20 |
| Reward administration | −$5 |
| Remaining contribution | $30 |

A discount should be reflected consistently in revenue or incentive cost, not deducted twice. Reconcile the chosen cost basis.

## Distinguish referral attribution from added customers

A referral code can receive credit for a buyer who already planned to purchase. Use suitable comparisons where feasible to investigate additional impact. Do not assume every redeemed code represents a customer the business would otherwise never acquire.

Observe customer quality and repeat contribution at a consistent age. A large initial incentive can attract buyers interested only in the reward. Include the actual maturation and reversal rules in the reporting.

## Decide the incentive using a stated model

Calculate the total reward cost per mature eligible customer and the associated contribution. Test sensitivity to refund and repeat-purchase assumptions. Use the [referral design guide](customer-referral-program-design.html) for the customer experience and a [holdout](holdout-test-design.html) where a reliable incremental comparison is feasible.

@@ lifecycle-message-qa
META: Test lifecycle automation with a state-based QA matrix covering payment, cancellation, duplicate events, timing and human handoff before launch.
ANSWER: Lifecycle message QA tests whether the right person receives an accurate message at the right state and time. Test exits, retries and conflicts as well as the ideal path. A message preview verifies wording; it does not verify the automation's behavior.
RELATED: suppression-list-automation,lifecycle-frequency-caps,marketing-data-quality-contract

## Build a state-based test matrix

List the account or order states the sequence can encounter. Include successful completion between scheduled sends, cancellation, rescheduling and repeated events. Specify the expected message or suppression for each.

Use permitted test accounts and controlled records. Do not accidentally send production notices to real customers while testing. Keep the current offer and billing conditions consistent with the message copy.

| Scenario | Expected check |
| Normal entry | Correct sequence and customer task |
| Task completed early | Remaining obsolete prompts stop |
| Duplicate event | No unintended duplicate sequence |
| Failed send or retry | Supported handling without message overload |
| Customer reply | Appropriate human or automated follow-up |
| State changed | Copy and next action remain accurate |

Assign an owner to every unresolved condition before release.

## Worked example: a booked meeting is rescheduled

Illustrative example: a customer moves a consultation from Tuesday to Thursday. A reminder tied only to the original event still sends on Tuesday. The QA case should verify that the old reminder is canceled or updated and that the new one shows the correct time and timezone.

Also distinguish the booking from payment. A calendar update should not automatically produce a receipt unless the supported payment record confirms it.

## Inspect copy and destinations together

Check names, amounts, dates, language, links and reply routing in the actual generated message. A template can be correct while a missing field produces an incomplete send. Review mobile readability and mixed-language direction where relevant.

Trace the message to the final customer action and back to the relevant record. Keep the test result with the automation version. Use the [data quality contract](marketing-data-quality-contract.html) to resolve event ambiguity and the [frequency guide](lifecycle-frequency-caps.html) to detect overlapping sequences.
