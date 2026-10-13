@@ subscription-payment-failure-recovery
META: Design failed-payment recovery around accurate billing states, supported retries and clear exit conditions instead of repeated generic subscription reminders.
ANSWER: Failed-payment recovery helps an existing subscriber resolve a billing obstacle. It is different from selling to someone who never paid. Use the actual invoice state, a supported payment-update path and messages that stop when payment succeeds or the account state changes.
RELATED: suppression-list-automation,lifecycle-message-qa,behavior-based-email-segmentation
SOURCE: https://docs.stripe.com/billing/revenue-recovery/smart-retries|Stripe: payment retries and failure events

## Identify the state before the message

Separate a recoverable failure, a payment method requiring action, a successful payment and a canceled subscription. A message that says “your payment failed” after collection succeeds undermines trust. Read the current billing record before sending where the integration supports it.

Stripe documents automatic retry capabilities and conditions where retries do not happen. Use the supported provider's actual behavior. Do not promise that every decline will be recovered or invent a retry schedule unrelated to the account configuration.

## Map the recovery flow

| State | Useful response |
| Failure recorded | Explain the relevant billing obstacle accurately |
| Customer action required | Provide the supported secure update route |
| Retry pending | Coordinate messages with the actual schedule |
| Payment successful | Stop failure messages and confirm the appropriate state |
| Account canceled or ineligible | Exit or follow the correct separate process |

Do not ask customers to send card details in an ordinary chat or email reply.

## Worked example: the event queue is behind the payment

Illustrative example: a failure event starts a sequence, then the customer pays before the next scheduled message. If the automation relies only on the original event, it sends an obsolete warning. The exit check should compare the current account or invoice state before that message.

Use unique records to avoid multiple failure events creating overlapping sequences for the same invoice. A retry count and a new invoice are different situations.

## Keep the communication focused

State what happened, what the customer can do and where help is available. Preserve the real access and billing terms. Avoid turning a failed-payment notice into an unrelated upsell or repeated pressure campaign.

Review resolved invoices, duplicate messages, customer complaints and available match coverage. Recovery revenue is not necessarily added revenue caused by every reminder. Use the [suppression guide](suppression-list-automation.html) to stop communication when the original task is no longer valid.

@@ transactional-vs-promotional-email
META: Separate transactional and promotional email by customer task, trigger and content so order, billing and account messages remain understandable.
ANSWER: Transactional email supports a specific customer action or account event; promotional email encourages a purchase or broader engagement. Keep the purpose clear and avoid disguising promotion as an urgent account task. Operational classification alone does not determine every platform or regional requirement.
RELATED: lifecycle-message-qa,post-purchase-communication,lifecycle-frequency-caps

## Classify the customer's task

An order confirmation helps a buyer understand a purchase. A renewal notice explains a coming account event. A product announcement promotes another action. Write down why the recipient expects the message and which record triggers it.

A message can contain both information and promotion, but that mixture can make the important task harder to find. Keep necessary billing or delivery details easy to understand without reading through an unrelated offer.

## Use a purpose worksheet

| Message | Main customer task | Necessary information |
| Order confirmation | Know what was purchased | Item, amount and supported next step |
| Payment failure | Resolve a billing obstacle | Current state and secure action path |
| Appointment confirmation | Attend the scheduled meeting | Time, timezone and joining information |
| Product promotion | Evaluate another offer | Accurate benefit, conditions and action |

Use the applicable sending preferences and provider requirements for the actual message type.

## Worked example: a promotion hides the receipt

Illustrative example: a purchase confirmation begins with several offers and places the order details at the bottom. The buyer has to search for proof that the purchase worked. Move the confirmation, actual deliverable and support path first. Keep any permitted optional promotion secondary and clearly separate.

The same principle applies to a failed-payment message: customers need to resolve the current invoice, not evaluate a new plan before they can find the update link.

## Validate trigger and exit behavior

Send confirmations only for the event they describe. A checkout click is not a paid order. Stop obsolete notices after cancellation, rescheduling or successful payment where appropriate. Test the failure paths and duplicates as well as the ideal path.

Keep a message inventory with purpose, trigger, sending preference and owner. Use the [lifecycle QA guide](lifecycle-message-qa.html) to check those conditions before launch.

@@ email-click-vs-business-outcome
META: Evaluate email campaigns beyond clicks by matching customer tasks, mature outcomes and control groups where feasible, with an illustrative purchase example.
ANSWER: Email clicks show interaction with a link, not necessarily the business outcome the message was meant to support. Define the desired action and observe it through a reliable record. Compare qualified outcomes and customer safeguards rather than treating every click as purchase intent.
RELATED: cross-domain-booking-measurement,holdout-test-design,lifecycle-frequency-caps

## Give the message a job

Choose one primary task: complete setup, resolve payment, attend a meeting or evaluate a product. A link click can be a helpful diagnostic for that path, but it does not establish completion.

Also understand the reporting system's definitions. Security systems or automated checks can affect link activity. Inspect available filtering and known journeys rather than assuming every reported click represents a deliberate customer action.

## Match the record to the outcome

| Email purpose | Better outcome to inspect |
| Setup guidance | Relevant workflow completed |
| Payment recovery | Invoice state resolved |
| Appointment reminder | Qualified meeting attended |
| Product evaluation | Suitable inquiry or completed purchase |
| Replenishment prompt | Mature repeat-order contribution |

Keep outcome timing and cohort membership consistent with the message's eligible audience.

## Worked example: attention rises but contribution falls

Illustrative example: Email A produces forty clicks and ten orders; Email B produces eighty clicks and twelve orders. If B uses a deeper discount, its total contribution can still be lower. The click count alone cannot select the better business option.

Where feasible, compare against a suitable holdout to investigate purchases that would have happened without the message. Attribution to a clicked link does not establish that the email caused every sale.

## Review the journey and costs

Check destination relevance, payment friction and clarity. A strong subject line can create clicks by raising expectations the page does not fulfill. Include unsubscribes, complaints and support where they reveal a meaningful downside.

Write the message's outcome definition and available evidence before launch. Report clicks separately when downstream observation is incomplete. The [booking measurement guide](cross-domain-booking-measurement.html) illustrates why reaching a third-party page is not the same as completing its task.

@@ suppression-list-automation
META: Build suppression rules for lifecycle automation using current customer states, preferences and duplicate checks so obsolete messages stop reliably.
ANSWER: Suppression rules identify people or records that should not receive a particular message. Include preferences, task completion, cancellation and duplicate handling where relevant. Check eligibility at send time, not only when the original sequence started.
RELATED: lifecycle-message-qa,subscription-payment-failure-recovery,lifecycle-trigger-audit

## Separate global and sequence-specific suppression

A global sending restriction and a sequence exit serve different purposes. Someone who completed setup may exit onboarding reminders while remaining eligible for relevant account communication. Someone with a sending preference restriction needs the appropriate broader treatment.

Keep suppression attached to reliable identity and state records. An unsubscribe stored in one system should not be lost because another system uses a different contact key.

## Define the send-time checks

| Check | Why it matters |
| Current state | The original task may already be complete |
| Preference | The intended communication may not be permitted by the recorded choice |
| Recent messages | Another sequence may already address the same task |
| Duplicate record | One event should not start multiple equivalent sends |
| Cancellation or reassignment | The communication may no longer fit the customer |

Use provider-supported mechanisms and document how changes propagate across channels.

## Worked example: successful payment, queued failure notice

Illustrative example: a customer completes payment, but a failure reminder remains in the queue. A current-state check suppresses the obsolete reminder. Relying on a delay alone is fragile because event and payment timings vary.

Record why the message was suppressed. Otherwise a marketer may mistake the lower send volume for an automation failure and remove the safeguard.

## Test conflicting sequences

Run scenarios where one account is eligible for welcome, billing and product messages at the same time. Determine which task has priority and what should wait. Prevent frequency limits from hiding an essential account message behind a promotional queue.

Review suppressed, sent and failed messages separately. Suppression is a valid outcome when it protects the customer from an inaccurate message. Use the [lifecycle QA worksheet](lifecycle-message-qa.html) to test exits before release.

@@ onboarding-human-concierge
META: Use concierge onboarding to help suitable customers reach value while documenting repeated obstacles, manual work and the steps worth automating.
ANSWER: Concierge onboarding uses direct human help to understand and remove obstacles to a customer's first useful outcome. It is valuable when it creates learning the team can reuse. Record the work and boundaries so the offer does not quietly become unlimited custom service.
RELATED: saas-migration-marketing,time-to-value-saas,marketing-automation-human-handoff
SOURCE: https://paulgraham.com/ds.html|Paul Graham: manual help in early-stage products

## Define the useful outcome and support scope

Choose the customer task, inputs required and help actually available. Explain what the product does and what a person will do alongside it. Do not present a manually completed process as automatic product behavior.

Paul Graham's essay describes hands-on early customer work as a way to learn. Adapt that principle to a defined onboarding task rather than treating every custom request as a roadmap commitment.

## Keep a learning record

| Observation | What to record |
| Setup obstacle | Where the customer stops and why |
| Manual help | Which action the helper performs |
| Repeated question | What explanation is missing |
| Product gap | What the supported workflow cannot do |
| Outcome | Whether the intended task was completed |
| Cost | Time and resources used to deliver the help |

Separate a recurring obstacle from a one-off preference before deciding to automate it.

## Worked example: the helper reveals the missing instruction

Illustrative example: several new customers reach an import screen but cannot identify the required file format. A helper repeatedly reformats their files. The next improvement may be a clear sample file and validation message, not a permanently larger onboarding team.

Observe whether customers can then complete the task independently. Reduced support time matters only if the useful outcome remains accessible. Do not replace effective help with automation that merely sends more instructions.

## Evaluate fit and economics

Track which customer situations need the most assistance and whether they remain suitable after setup. A complex integration may require a separate service rather than being included in every self-service plan.

Start with a small supported workflow, document repeated work and turn one obstacle into a product or explanation improvement. Use the [human handoff guide](marketing-automation-human-handoff.html) for situations that still require judgment.
