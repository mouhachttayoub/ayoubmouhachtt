@@ freemium-vs-free-trial
META: Compare freemium and free trials using recurring value, product costs, support effort and upgrade triggers rather than a universal conversion benchmark.
ANSWER: Freemium offers ongoing access to a limited version; a free trial offers temporary access under stated terms. Choose based on how customers reach value, what free usage costs and why a suitable account would upgrade. Neither model fixes a product people cannot understand or use.
RELATED: free-trial-vs-demo-saas,usage-based-pricing-communication,trial-to-paid-conversion

## Match the model to the customer's task

A product with quick individual value and low variable cost may support a useful free tier. A product requiring configuration or a complex team decision may need a guided trial or demo. These are planning considerations, not universal rules.

State exactly what access includes, when it ends and whether a payment method or renewal is involved. Customers should not discover the essential conditions after they have invested time in setup.

## Compare the operating model

| Question | Freemium | Free trial |
| How long can value continue? | Within the ongoing free limits | Within the stated trial period |
| What creates the upgrade? | A genuine need for paid value | A decision to continue after evaluation |
| What must be controlled? | Long-term usage and support costs | Evaluation readiness and end-of-trial clarity |
| What can mislead reporting? | Many free accounts mistaken for demand | Trial starts mistaken for activated buyers |

Use the same definition of activated and paying accounts when comparing the models.

## Worked example: the costly free account

Illustrative example: a product's free users each generate $2 of monthly processing cost. One thousand active free users therefore cost $2,000 before support and overhead. If paid accounts contribute $40 per month before acquisition, fifty such accounts would cover only that processing cost under the simplified assumptions.

The calculation does not prove freemium is unsuitable. It identifies the economics the business needs to understand. Free usage may support distribution or collaboration, but that value should be demonstrated rather than assumed.

## Make the paid boundary meaningful

Avoid withholding the first useful outcome merely to force upgrades. Choose a boundary connected to greater usage, collaboration or another real difference in value. Explain it during evaluation so the customer can judge fit.

Review activation, support demand, upgrades and retention by comparable cohort age. Do not select the model solely because it creates more registrations. Begin with a clear value path and realistic cost model, then investigate the [trial-to-paid journey](trial-to-paid-conversion.html).

@@ saas-seat-expansion
META: Plan SaaS seat expansion around collaborative value, account roles and transparent pricing, with an example that separates invitations from paid adoption.
ANSWER: SaaS seat expansion should follow a useful reason for more people to participate. Measure active collaboration and paid adoption, not invitation volume alone. A customer inviting teammates does not establish that each teammate needs a billable role.
RELATED: saas-expansion-revenue-strategy,saas-buyer-committee,usage-based-pricing-communication

## Explain what each role can do

Identify the tasks performed by administrators, contributors and viewers. State which roles are billable and what happens when someone is invited. A clear invitation flow protects the customer from accidentally creating charges they did not understand.

Ask which additional participant makes the workflow better. A report recipient may only need viewing access; a teammate preparing reports may need editing. Tie the expansion offer to the task instead of treating every contact as a sales opportunity.

## Track the account journey

| Stage | Useful measure |
| Invitation | Eligible accounts sending a deliberate invitation |
| Acceptance | Recipients joining the intended workspace |
| Useful participation | Teammates completing the relevant shared task |
| Paid expansion | Additional billable access accepted under clear terms |
| Continued value | Expanded accounts maintaining useful collaboration |

Keep the account as the unit where appropriate. Ten invited users from one company are not ten new customer accounts.

## Worked example: viewer access is not a paid seat

Illustrative example: an agency invites five clients to view reports and two employees to create them. If the offer charges for editing roles, the two employees represent the relevant expansion opportunity. Charging seven new seats would conflict with that stated model.

An account with more seats can still produce weaker contribution if it needs disproportionate support or receives a large discount. Compare expansion revenue with the associated costs and retention, keeping the definition stable.

## Identify blockers to collaboration

Check invitation deliverability, permission clarity, onboarding and access to the shared task. Marketing reminders cannot repair an invitation that leads to an empty workspace. Give new participants context about why they were invited and what they should do.

Use a focused walkthrough for a supported team workflow. If adoption improves, observe the mature account outcome before claiming expansion lift. The [buying committee guide](saas-buyer-committee.html) helps distinguish participation from purchase authority.

@@ saas-cancellation-flow-design
META: Design a SaaS cancellation flow that explains consequences, records reasons and offers relevant options without obstructing the customer's decision.
ANSWER: A SaaS cancellation flow should make the action and its consequences clear, then offer genuinely relevant alternatives without trapping the customer. Collect reasons as feedback. A cancellation that becomes harder to complete is not the same as improved retention.
RELATED: saas-churn-analysis,lapsed-customer-survey,renewal-reminder-strategy

## Explain what changes and when

State the access end date, effect on billing and any relevant data-export steps. Use the actual subscription terms. Do not imply a refund, retention period or continued access that the product does not provide.

Separate cancellation, downgrade and pause where they genuinely exist. Label each accurately. A temporary pause can help a seasonal user, but it should not be presented as cancellation if charges resume under different conditions.

## Review the flow as a task

| Customer question | What the flow should explain |
| Am I canceling renewal or immediate access? | The actual action and effective date |
| Will I be charged again? | The applicable billing consequence |
| What happens to my work? | Export and access conditions |
| Is there another suitable option? | Real alternatives, with their terms |
| Did the request succeed? | A clear confirmation and record |

Do not require a favorable explanation or a sales conversation just to record the user's decision unless the actual service agreement requires a different process. Review applicable product and legal requirements separately.

## Worked example: apparent retention hides unfinished cancellations

Illustrative example: a new flow reduces completed cancellations, but support receives more complaints from customers who could not find the final action. Reporting only fewer cancellations rewards friction. Add successful task completion, complaints and later refunds to the review.

An optional reason such as “I no longer need this workflow” can inform product and segment research. It should not automatically trigger a discount. A price incentive cannot create a recurring need that is absent.

## Learn from the reason without rewriting it

Preserve the customer's selected reason and any permitted explanation. Separate your interpretation from their words. Compare it with usage, support and acquisition context to identify patterns worth investigating.

Test improvements to clarity or relevant options while protecting the basic cancellation task. Follow customers long enough to distinguish continued useful use from postponed departure. Use the [churn analysis guide](saas-churn-analysis.html) for that deeper diagnosis.

@@ usage-based-pricing-communication
META: Explain usage-based SaaS pricing with clear units, worked bill examples, limits and alerts so customers can estimate what they will pay.
ANSWER: Usage-based pricing charges according to a defined unit of use. Good pricing communication explains the unit, rate, included allowance and any additional charges before purchase. Help customers estimate a realistic bill, not merely compare a low starting price.
RELATED: saas-pricing-page-experiments,saas-annual-plan-cash-tradeoff,freemium-vs-free-trial
SOURCE: https://docs.stripe.com/billing/subscriptions/usage-based|Stripe: usage-based billing

## Define the billable unit in customer language

An event, message, active user and successful workflow are different units. State when a unit is counted, including failures, retries or duplicate actions if they affect billing. Align the public explanation with the actual metering implementation.

Billing platforms support different pricing models and capabilities. Stripe's documentation distinguishes its current usage-based approaches. Verify the implementation you use instead of copying another product's billing terminology.

## Make a bill example reproducible

| Item | Illustrative assumption | Cost |
| Base fee | One monthly account fee | $20 |
| Included usage | First 1,000 units | Included |
| Additional usage | 500 units at $0.02 | $10 |
| Example total | Before any applicable separate charges | $30 |

This is an invented pricing example, not a quote for a real service. If your pricing is tiered or graduated, calculate the example using that actual model. A flat unit rate cannot explain a more complex bill accurately.

## Explain what customers can control

Show usage visibility, available alerts and spending controls only when the product provides them. Distinguish a notification from a hard limit. Receiving a warning does not mean processing stops or charges are capped.

Explain whether different product actions consume different units. If an automation retries several times, customers need to know whether that changes the bill. Provide a route to investigate a charge without requiring them to understand internal engineering terminology.

## Worked example: a starting price hides the common scenario

Illustrative example: a page says “from $20,” but the intended workflow commonly involves additional units. The customer should see a representative calculation and the assumptions, not a universal cost claim. Different usage levels deserve separate examples rather than an unexplained “typical” bill.

Review support questions and billing disputes after changes. Clearer pricing may filter unsuitable accounts; that is different from a failed conversion experiment. Check customer fit and retained contribution alongside purchases.

## Audit your price explanation

Write a bill from three usage scenarios and compare each with the actual billing configuration. Verify the units, time window and extra charges. Then ask a customer unfamiliar with the model to explain the calculation back. Repair the unclear step before testing headline persuasion.

@@ b2b-demo-no-show-rate
META: Calculate B2B demo no-show rate using mature appointments, then improve attendance through clearer agendas, timezone checks and useful reminders.
ANSWER: Demo no-show rate measures scheduled appointments that occur without the expected attendee, using a clearly defined mature appointment population. Separate cancellations, reschedules and future bookings. Improve the customer's understanding and logistics before adding more reminders.
RELATED: cross-domain-booking-measurement,growth-sprint-planning,free-trial-vs-demo-saas

## Define the denominator

Decide whether the metric includes all booked demos or only qualified appointments. Define how you handle cancellations before the scheduled time, reschedules and meetings the sales team canceled. Keep these categories visible rather than adjusting them to improve the headline rate.

Do not count next week's meeting as a no-show today. Compare cohorts at the same maturity and use a consistent timezone for the appointment record.

## Worked example: report the states separately

Illustrative example: 100 qualified bookings have reached their scheduled date. Seventy attend, ten cancel beforehand, five reschedule and fifteen are absent without cancellation. If your defined no-show denominator excludes cancellations and reschedules, it contains 85 appointments and the rate is 15 ÷ 85, approximately 17.6%.

| State | Count | Interpretation |
| Attended | 70 | Completed appointment |
| Canceled beforehand | 10 | Separate cancellation outcome |
| Rescheduled | 5 | Follow the new appointment |
| Absent | 15 | No-show under the stated rule |

You can also report absence as 15% of original mature bookings. Both calculations need labels; they answer different questions.

## Diagnose why the appointment is missed

Check timezone display, confirmation delivery, meeting access and the time between booking and attendance. Then investigate whether the agenda fits the buyer's actual question. A vague demo can feel less worthwhile than a discussion of the customer's specific workflow.

Use reminders that explain the next useful step and stop after cancellation or rescheduling. More messages are not automatically better. Coordinate all channels so the buyer receives one coherent sequence.

## Review downstream quality

A reminder that raises attendance among poorly qualified leads can increase sales workload without creating more suitable customers. Review qualified attendance and later outcomes together. Preserve the qualification definition while testing the reminder.

Start by checking five known booking journeys from confirmation to attendance. Repair the obvious logistics issues, then test one clearer agenda or reminder. Use the [booking measurement guide](cross-domain-booking-measurement.html) to avoid counting calendar clicks as completed appointments.
