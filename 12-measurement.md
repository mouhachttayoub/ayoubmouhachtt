@@ contribution-margin-waterfall
META: Build a contribution margin waterfall from revenue to variable costs and acquisition, with a worked example that distinguishes contribution from net profit.
ANSWER: A contribution margin waterfall shows how sales turn into money available after specified variable costs. State every subtraction and keep advertising separate where the decision requires it. Contribution is not net profit when fixed overhead and other expenses remain outside the calculation.
RELATED: ecommerce-break-even-roas,customer-segmentation-profitability,marketing-roi-vs-roas

## Choose the revenue starting point

Use a consistent basis for taxes, discounts, shipping and refunds. If you start with gross orders, show how those amounts become the revenue used in the model. If you already start with refund-adjusted revenue, do not subtract refunded revenue again.

Document whether the numbers are realized, estimated or a mixture. A model with unresolved delivery or return outcomes should display that limitation rather than resemble a completed profit statement.

## Worked example: trace the deductions

Illustrative example: the business begins with $1,000 revenue under its stated basis and subtracts $50 of refunds. It then records the costs below. The example excludes fixed overhead, financing and other unlisted expenses.

| Step | Amount subtracted | Remaining amount |
| Starting revenue | — | $1,000 |
| Refunds | $50 | $950 |
| Product cost on stated basis | $350 | $600 |
| Fulfillment and shipping | $80 | $520 |
| Payment fees | $30 | $490 |
| Other variable costs | $20 | $470 |
| Advertising | $200 | $270 |

The $470 is contribution before advertising under this model. The $270 is contribution after advertising, not the business's final profit. Recovered inventory and return-related costs need their own consistent treatment.

## Make the waterfall a decision tool

Ask which cost changes when the team changes a price, product mix or campaign. A discount can reduce contribution even if orders rise. A new region can add delivery costs absent from the historical average.

Segment when the difference matters. A store-wide waterfall can conceal a product with excellent economics and another that cannot support acquisition. Keep the definitions identical across the segment views.

## Reconcile and review

Connect the rows to business records and assign an owner to unresolved estimates. Explain timing differences rather than forcing an advertising report to equal the ledger. Review the model after returns and collections mature.

Build the waterfall for one actual cohort, with the source and definition beside each row. Then use the [break-even ROAS calculation](ecommerce-break-even-roas.html) to convert the pre-ad contribution into a stated advertising limit.

@@ ga4-payment-referral-check
META: Diagnose PayPal or other payment-provider referrals in GA4, configure unwanted referrals carefully and keep attribution fixes separate from payment verification.
ANSWER: A payment-provider referral in GA4 can describe a customer returning from checkout rather than a new acquisition source. Diagnose the actual journey and use unwanted-referral settings where appropriate. Hiding a referral does not create a purchase event or verify that payment succeeded.
RELATED: cross-domain-booking-measurement,marketing-data-reconciliation,utm-naming-conventions
SOURCE: https://support.google.com/analytics/answer/10327750?hl=en|Google Analytics: identify unwanted referrals

## Trace a known journey before changing settings

Inspect how a customer arrives, leaves for payment and returns. Determine which domains appear in reporting and whether the return page collects the intended events. A payment button click, return URL and confirmed transaction are different observations.

Do not mark a purchase solely because someone reaches a thank-you page. The transaction needs trustworthy confirmation through the supported commerce or payment integration. A static page can be opened without a completed payment.

## Configure only the relevant domains

Google documents unwanted referrals under the web data stream's tag settings. In Admin, open Data streams, select the web stream, choose Configure tag settings and find List unwanted referrals under the available settings. Add the applicable domain condition and save using appropriate property access.

Check the current interface and the effect on your actual reporting. Do not apply a blanket referrer-ignore rule to every page or exclude legitimate publications that send new visitors.

| Observation | What it can establish |
| Payment link clicked | Intent to visit checkout |
| Payment-provider return | A return journey was observed |
| Verified transaction | The supported record confirms payment status |
| Referral excluded | The configured source treatment changed |

## Worked example: a misleading source, not an extra sale

Illustrative example: a visitor arrives through a newsletter, pays on an external provider and returns to the site. A later report credits the provider as a referral. The investigation concerns attribution continuity. It does not justify inventing another conversion event on the return page.

Keep original reporting context and note when the setting changed. Historical attribution or sessions can remain different from new reporting. Expect limitations from tracking permissions, browser behavior and configuration.

## Verify the repair

Follow a permitted test journey and inspect source, event collection and transaction deduplication separately. Compare known business transactions with analytics rather than assuming a cleaner source report means complete revenue tracking.

For a journey involving a calendar as well as payment, use the [booking measurement guide](cross-domain-booking-measurement.html). A referral setting cannot tell you whether the customer attended the meeting.

@@ cross-domain-booking-measurement
META: Measure a website-to-calendar booking journey without confusing outbound clicks, appointments and payments, and understand cross-domain tagging limitations.
ANSWER: Cross-domain booking measurement requires reliable observation of what happens after the visitor leaves your site. An outbound calendar click is not a confirmed appointment. If you cannot configure the third-party domain or receive a supported confirmation record, report the click as a click.
RELATED: b2b-demo-no-show-rate,ga4-payment-referral-check,marketing-data-quality-contract
SOURCE: https://support.google.com/analytics/answer/10071811?hl=en|Google Analytics: cross-domain measurement

## Map the journey as separate states

Write the visitor's steps: content, consultation page, payment, booking and attendance. Identify which steps the site can observe directly and which require external records. A browser returning to the site does not prove the preceding transaction or appointment.

For GA4 cross-domain measurement on domains you can configure, Google's guidance requires the same tag ID from the same web data stream on the relevant pages. You cannot assume control over a hosted PayPal or calendar page simply because you link to it.

## Define the measurement levels

| State | Evidence required |
| Calendar opened | A recorded outbound click or supported visit |
| Appointment booked | A confirmed calendar record or supported callback |
| Consultation paid | A verified payment transaction |
| Appointment attended | An attendance record under your definition |

Use different event names and reports for these states. Do not send all four as interchangeable conversions.

## Worked example: sixty clicks, twenty bookings

Illustrative example: a portfolio records sixty calendar-link clicks, and the booking system records twenty appointments. Those totals describe different actions. Repeated clicks, abandoned scheduling and appointments from other routes can explain part of the difference.

If matching is unavailable, report sixty clicks and twenty recorded bookings separately. Do not divide them into a precise site booking rate unless the populations and window can be matched reliably. A paid consultation also needs payment reconciliation.

## Use supported records without exposing personal data

When the platform supports an integration, preserve unique appointment references and status changes appropriately. Track cancellations and reschedules rather than counting every update as a new appointment. Avoid putting personal email addresses into public tracking URLs.

Test a known journey and check deduplication, timezones and available status fields. Mark missing observability explicitly. The [data quality contract](marketing-data-quality-contract.html) helps prevent a reporting label such as “booked calls” from silently meaning outbound clicks.

@@ marketing-data-quality-contract
META: Create a marketing data quality contract defining events, identities, timestamps, deduplication and ownership before building reports or automations.
ANSWER: A marketing data quality contract is a shared specification for what a recorded event means and when it is valid. It connects the business definition to implementation, reporting and ownership. A familiar event name does not guarantee consistent data.
RELATED: ga4-event-taxonomy,offline-conversion-quality-loop,funnel-denominator-audit

## Define the event in business terms

Write the condition that must be true, the entity involved and the record proving it. “Purchase” should not mean a button click in one system and collected payment in another. Distinguish requested, confirmed, completed and reversed states.

Specify whether the event belongs to a person, account, order or appointment. Keep the identifier stable where the supported integration permits it. Document when identity cannot be reconciled.

## Use a compact contract

| Field | Example question |
| Meaning | What customer or business action happened? |
| Trigger | Which verified condition emits the event? |
| Identity | What entity does the record describe? |
| Timestamp | When did it happen, and in which timezone? |
| Deduplication | What prevents repeated handling of the same outcome? |
| Owner | Who fixes errors and approves definition changes? |

Include version and known limitations. A definition change can break historical comparisons even when the event name stays the same.

## Worked example: appointment updates counted as bookings

Illustrative example: a calendar sends records when an appointment is created, rescheduled and canceled. If every record emits `booking_completed`, one appointment can produce three apparent conversions. The contract should specify the state and unique appointment key needed for the intended count.

Report cancellations separately and choose whether the KPI describes created, active or attended appointments. None of these definitions is inherently interchangeable with paid consultations.

## Validate with known journeys

Trace a small set of real or permitted test records through collection and reporting. Include failure, retry and reversal paths, not only the ideal purchase. Check missing fields and duplicate handling.

Assign someone to review definition changes before release. Keep the contract available to marketing, development and analytics. Use the [offline feedback guide](offline-conversion-quality-loop.html) when online events must connect to later CRM outcomes.

@@ funnel-denominator-audit
META: Audit conversion-rate denominators for population, entity, eligibility and maturity so funnel percentages describe comparable customer journeys.
ANSWER: A funnel denominator audit checks who could have completed the action being measured. Every percentage needs a defined population, entity and window. A checkout conversion rate and a site purchase rate can both be correct while answering different questions.
RELATED: marketing-data-quality-contract,saas-cohort-retention-analysis,new-customer-revenue-definition

## Write the numerator and denominator in words

Start with completed actions divided by eligible opportunities for those actions. Decide whether repeated sessions, accounts or orders are the unit. A person opening checkout three times may create three visits but only one purchasing opportunity under an account-based definition.

Check timestamps and stage order. An order in today's report may come from a visit last week. A stage-based calendar report is not automatically a matched cohort funnel.

## Worked example: two valid rates, two different questions

Illustrative example: 1,000 site visitors include 130 checkout starters, and twenty recorded purchases follow within the defined window. Purchases divided by visitors is 2%. Purchases divided by checkout starters is approximately 15.4%, if the purchase population is correctly matched to those starters.

| Metric | Calculation | Question |
| Site purchase rate | 20 ÷ 1,000 | What share of the stated visitor population purchased? |
| Checkout completion | 20 ÷ 130 | What share of matched checkout starters completed? |

Comparing the two percentages as if one improved over the other would be meaningless.

## Check eligibility and missing records

Customers without access to a feature should not automatically enter an eligible adoption denominator. Future appointments should not enter a mature attendance denominator. Recently acquired customers need the same opportunity to repeat purchase as older cohorts.

Investigate whether tracking loss affects the numerator and denominator differently. If some purchases are missing but visits are complete, the rate can appear weaker without a real customer change.

## Make denominator definitions visible

Add the unit, eligibility rule and observation window to the dashboard label or accompanying note. Maintain the same definition across comparisons. If a definition changes, mark the break rather than presenting a continuous trend.

Audit one important metric by tracing known customer journeys into both counts. Use the [data contract worksheet](marketing-data-quality-contract.html) to resolve ambiguity before changing the campaign because of a percentage.
