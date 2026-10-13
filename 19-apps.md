@@ app-monetization-choice
META: Compare app subscriptions, advertising and one-time purchases according to recurring value, customer experience and operating costs before choosing a model.
ANSWER: App monetization should fit the value the app repeatedly delivers and the customer's expectations. Subscriptions, advertising and one-time purchases create different incentives and costs. A high install count does not establish that any particular model will be sustainable.
RELATED: app-subscription-paywall-transparency,app-install-vs-activation,saas-annual-plan-cash-tradeoff
SOURCE: https://developer.apple.com/app-store/review/guidelines/|Apple: app monetization and subscription guidelines

## Start with the value cadence

Ask whether the product solves a one-time task or provides continuing value. Also estimate development, support, infrastructure and content costs. A recurring fee needs a coherent recurring offer; a one-time payment needs an operating model that can support the promised access.

Store rules and payment options depend on the platform and applicable conditions. Check current primary guidance for your actual distribution rather than assuming one checkout approach works everywhere.

## Compare the model's tradeoffs

| Model | Customer consideration | Operating question |
| Subscription | Is the ongoing value worth renewing? | Can the product sustain that value? |
| One-time purchase | Is the promised access clear? | What future costs must the payment support? |
| Advertising | Does monetization disrupt the task? | Can usage support revenue without degrading experience? |
| Combination | Are the differences understandable? | Can the team implement and explain both consistently? |

Avoid mixing several models merely because each appears to add a revenue stream.

## Worked example: occasional use and monthly billing

Illustrative example: an app helps users complete an occasional file conversion. A monthly subscription may not fit customers who need one conversion this year. A different offer could be more appropriate, but the choice still depends on actual costs, platform conditions and customer evidence.

By contrast, a recurring collaboration workflow may have continuing value. That does not remove the need to explain price, renewal and what the customer receives.

## Evaluate contribution and experience together

Track useful activity, purchases, renewals where relevant, refunds, support and delivery costs. Advertising revenue can rise while the user experience deteriorates. A paywall can improve immediate purchases while attracting unsuitable subscribers.

Write the value cadence and cost model before testing persuasion. Use the [paywall guide](app-subscription-paywall-transparency.html) for clarity and the [activation guide](app-install-vs-activation.html) to distinguish downloads from meaningful use.

@@ app-store-custom-product-pages
META: Plan App Store custom product pages around a specific use case, accurate screenshots and campaign continuity, with a practical mapping worksheet.
ANSWER: App Store custom product pages let an app present additional product-page versions for different supported content or features. Use them to match a campaign's buying situation, not to promise a different app. Keep screenshots, metadata and the in-app destination consistent.
RELATED: app-deep-link-campaign-qa,app-store-optimization-conversion,ad-to-landing-page-message-match
SOURCE: https://developer.apple.com/app-store/custom-product-pages/|Apple: custom product pages

## Choose a real supported use case

Apple documents custom pages with unique URLs and variations in screenshots, promotional text and previews. Their metadata follows the relevant review process. Verify current capabilities and account conditions in App Store Connect before implementation.

Choose a use case already supported by the product. A campaign about collaboration should not lead to a page that only demonstrates individual editing. Do not show an unavailable feature to make the page match the advertisement.

## Build the mapping worksheet

| Element | What must remain consistent |
| Campaign | The audience's task and accurate promise |
| Store page | Screens and explanation of that task |
| Access conditions | Plan, platform or setup requirements |
| App destination | The supported next useful action |
| Measurement | Download and downstream outcome definitions |

Apple also documents supported deep-link conditions for custom pages. A configured link still needs testing on the actual app and device states.

## Worked example: two uses, one genuine product

Illustrative example: a planning app supports solo projects and team coordination. One page demonstrates a personal plan; another shows the supported shared workflow. Both should accurately represent the same app and clearly explain relevant access conditions.

Do not assume the page with more downloads produces better retained users. Review relevant activation and continued value by comparable acquisition cohorts where reliable reporting supports it.

## Verify the whole destination

Inspect the shared URL, page content and app-opening behavior. Test fresh and existing users where the route allows it. Keep fallback destinations clear when the intended feature cannot be reached.

Record the page version with the campaign so later changes are interpretable. Use the [deep-link QA guide](app-deep-link-campaign-qa.html) to avoid losing the original task between store and app.

@@ app-store-review-response
META: Respond to app reviews with useful clarification, verified fixes and privacy protection, then turn repeated feedback into a product investigation.
ANSWER: A useful app review response acknowledges the specific issue, explains verified information and offers an appropriate support path. It should not argue the reviewer into changing their opinion or disclose private account details. Repeated reviews can inform investigation without proving the cause alone.
RELATED: app-crash-free-user-metric,customer-objection-research,app-onboarding-drop-off

## Identify what can be answered publicly

A review may describe a reproducible error, an expectation mismatch or an account-specific problem. Publicly explain what can be verified without exposing personal information. Move sensitive troubleshooting to the supported private channel.

Do not claim a fix is live merely because it appears in the backlog. State release or support information accurately. Keep the response tied to the actual version and conditions when those details matter.

## Use a response decision sheet

| Review type | Useful response |
| Reproducible bug | Acknowledge and explain verified status |
| Unclear feature | Clarify the supported workflow |
| Billing confusion | Explain the appropriate account help path |
| Product mismatch | State fit boundaries honestly |
| General criticism | Address the substance without a defensive argument |

Avoid a universal copy-paste reply that ignores the customer's task.

## Worked example: “the app crashes” needs investigation

Illustrative example: several reviews mention crashes after a release. Thanking everyone for their feedback is not a product investigation. Compare affected versions, device conditions and crash records where available, then communicate only the verified status.

Reviews are a selected sample of users. Their count should not be treated as the crash rate of the entire app. Use stability reporting to assess scale and a reproducible path to investigate the problem.

## Feed learning back into the product

Tag repeated issues by task and version, with privacy-protected source context. Assign an owner and connect the finding to support, product or marketing as appropriate. A misleading store description may need repair as much as an interface problem.

Review whether the response actually helps the reader decide what to do next. Use the [crash-free metrics guide](app-crash-free-user-metric.html) when a stability complaint needs quantitative context.

@@ app-deep-link-campaign-qa
META: Test app campaign deep links across new and returning users, login states, unavailable content and fallback destinations before promoting a workflow.
ANSWER: App deep-link QA checks whether a campaign reaches the intended supported destination in each relevant user state. An existing logged-in user and a new installer can follow different paths. A link opening the app is not proof that it completed the promised journey.
RELATED: app-store-custom-product-pages,app-onboarding-drop-off,marketing-data-quality-contract
SOURCE: https://developer.android.com/training/app-links|Android Developers: App Links

## Define the intended destination

Write the task, app screen and prerequisites. Specify what should happen when the user is not logged in, lacks access or has not installed the app. A feature unavailable to the customer needs an honest fallback, not an error or misleading purchase prompt.

Platform linking behavior depends on supported configuration. Android documents App Links and their verification requirements. Check the implementation's current guidance rather than assuming any web URL will automatically route into every app state.

## Build a state matrix

| State | Expected check |
| Installed and eligible | Correct task destination |
| Installed but logged out | Appropriate authentication and return path |
| Not installed | Supported store or web fallback |
| Content unavailable | Clear alternative or explanation |
| Access restricted | Accurate conditions, not a false promise |
| Link modified in transit | Campaign and destination parameters remain valid |

Test actual supported devices and versions where possible. Do not claim deferred routing survives installation unless that path is implemented and verified.

## Worked example: the campaign task disappears after login

Illustrative example: a reporting campaign links to a shared report, but logged-out users land on the home screen after authentication. The app opened successfully while the promise failed. The QA record should verify continuation to the intended report or a clear supported next step.

Also inspect tracking. Link opens, installs, logins and useful task completion are different events. A campaign report should not merge them into one outcome.

## Keep the test record with the campaign

Record the URL, destination, user state and observed result. Repeat the relevant checks after release or routing changes. If behavior was not tested, state that internally rather than describing the link as verified.

Use the [data contract guide](marketing-data-quality-contract.html) to define events and the [custom product page guide](app-store-custom-product-pages.html) for store-to-app continuity.

@@ app-permission-request-timing
META: Plan app permission requests around the user's current task, clear purpose and a usable decline path rather than asking for every permission on first launch.
ANSWER: A permission request should explain the benefit relevant to the customer's current task and request only the access needed for that supported action. Timing cannot replace an accurate purpose. Design the decline path so customers understand what remains available.
RELATED: app-onboarding-drop-off,app-push-notification-strategy,ethical-growth-hacking-playbook

## Connect access to a visible task

Identify why the product needs the permission and what changes when it is granted. A generic “improve your experience” explanation may not help someone understand a request for location, contacts or notifications.

Use the platform's current permission implementation and requirements. Do not replace system controls with an imitation that suggests consent was granted. Avoid promising that every denial can be reversed within the app.

## Review the request flow

| Question | What to specify |
| Purpose | Which supported task needs the access? |
| Timing | When does the user encounter that task? |
| Scope | What access is actually required? |
| Decline | What useful path remains? |
| Follow-up | When, if ever, is another explanation appropriate? |

If access is essential to a specific feature, explain that limitation accurately without implying the whole app requires it when it does not.

## Worked example: notifications before value

Illustrative example: a planning app requests notification access before the user creates a plan. The customer does not yet know what reminders would help with. An explanation connected to a supported reminder task provides more context than a broad first-launch prompt.

Evaluate useful reminder outcomes, opt-outs and complaints where observable. A higher grant rate alone does not establish a better customer experience.

## Test refusal as seriously as acceptance

Check that the interface handles declined or unavailable access without breaking unrelated tasks. Review the explanation in every actual language version. Keep collection and use consistent with the purpose described.

Start with one permission and map its task, explanation and decline path. Use the [onboarding guide](app-onboarding-drop-off.html) to distinguish a legitimate prerequisite from unnecessary first-session friction.
