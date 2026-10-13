@@ ecommerce-break-even-roas
META: Calculate break-even ROAS from pre-ad contribution margin, including a worked order example and the cost assumptions that change the advertising limit.
ANSWER: Break-even ROAS is approximately one divided by your contribution margin before advertising, when revenue and costs use consistent definitions. It covers advertising at that margin, not necessarily overhead or a desired profit. Returns, fulfillment and payment costs can materially change the threshold.
RELATED: marginal-roas-budget,contribution-margin-waterfall,average-order-value-vs-profit

## Build the order economics first

Use revenue after discounts and with a clear treatment of taxes, shipping and refunds. Subtract the variable costs associated with delivering that revenue. Do not mix revenue excluding tax with a cost definition that assumes a different basis.

If returns are unresolved, separate the realized result from a modeled allowance. Avoid subtracting the same refunded revenue twice. Record what the allowance includes and whether recovered inventory has any value.

## Worked example: the real limit is below the headline margin

Illustrative example: an order produces $100 of revenue on the stated basis. Product, delivery, payment and other variable costs total $58. Contribution before advertising is $42, or 42% of revenue. Break-even ROAS is 1 ÷ 0.42, approximately 2.38.

| Item | Illustrative amount |
| Revenue | $100 |
| Product cost | $40 |
| Delivery cost | $8 |
| Payment cost | $3 |
| Other variable cost or modeled allowance | $7 |
| Contribution before ads | $42 |

At $25 advertising cost per such order, contribution after advertising is $17 before fixed overhead. At $42 advertising cost it is zero under these assumptions.

## Keep the threshold tied to the revenue definition

A platform may report gross attributed purchase value while your model uses collected revenue after refunds. Applying the same threshold without reconciliation can exaggerate profitability. State which revenue figure the ROAS denominator requires.

Products and customer segments can have different margins. A single store-wide average can conceal an unprofitable campaign concentrated on low-contribution products. Recalculate when discounts, shipping costs or order mix change.

## Add the business's profit requirement separately

If you need $12 contribution after advertising from the example order, allowable ad cost is $30 rather than $42. The corresponding revenue-to-ad-cost ratio is approximately 3.33. This is a planning target under the example, not a universal recommended ROAS.

Use observed repeat-customer contribution only with a defined window and cash timing. Do not insert uncertain lifetime value into the first-order threshold without labeling the assumption.

## Calculate your threshold

Write the revenue basis, variable costs and contribution requirement for one product group. Reconcile the revenue with business records, then calculate the allowable advertising cost. Use [marginal ROAS](marginal-roas-budget.html) to decide whether additional spend meets that limit.

@@ first-order-vs-repeat-customer-profit
META: Compare first-order and repeat-customer contribution by acquisition cohort, using a worked example that keeps repeat value and observation windows explicit.
ANSWER: First-order profitability evaluates the initial purchase after its costs and acquisition. Repeat-customer profitability adds later contribution from the same cohort over a defined window. Do not use all returning-customer revenue to justify acquiring today's new customers.
RELATED: ecommerce-repeat-purchase-rate,customer-segmentation-profitability,cac-payback-period

## Keep acquisition cohorts intact

Group customers by first purchase or another clearly defined acquisition event. Observe later purchases from those same customers. A calendar-month report containing old and new customers cannot directly establish the repeat value of the latest acquisition cohort.

Deduct refunds, variable delivery costs and repeat-purchase marketing where applicable. Revenue from a second order is not equal to contribution from that order. Keep the cost of retention separate from the original acquisition cost.

## Worked example: repeat orders do not automatically rescue acquisition

Illustrative example: acquisition costs $30 per new customer. The first order contributes $20 before acquisition. Half the cohort later places one repeat order contributing $16 before repeat marketing. Expected additional contribution per originally acquired customer is $8, giving $28 total before acquisition and negative $2 after it.

| Contribution component | Per original customer |
| First-order contribution | $20 |
| Repeat contribution: 50% × $16 | $8 |
| Observed or assumed window total | $28 |
| Acquisition cost | $30 |
| Contribution after acquisition | −$2 |

This is an illustrative scenario. If the repeat rate is only an assumption, label it as such. If repeat marketing costs are missing, the calculation is incomplete.

## Compare customers at the same age

A six-month-old cohort has had more chances to reorder than one acquired last week. Compare fixed-age windows and note unresolved returns. Separate observed value from extrapolated lifetime value.

Inspect product mix and customer intent. A campaign acquiring replacement-product buyers may behave differently from one attracting gift shoppers. Use the difference to improve targeting and offer fit, not to claim a single permanent customer value.

## Connect contribution to cash timing

Even if later orders make a cohort profitable, the business must fund acquisition until that value arrives. Model the time needed for collection and the costs incurred along the way. A positive eventual scenario can still create a near-term cash constraint.

Create a cohort sheet with first-order contribution, mature repeat contribution, retention spend and acquisition cost. Review the [repeat purchase guide](ecommerce-repeat-purchase-rate.html) for denominator definitions before using the result to scale.

@@ ecommerce-discount-profit-calculator
META: Calculate how a discount changes contribution per order and the extra volume needed, with a worked promotion example and sensitivity checks.
ANSWER: A discount reduces contribution unless costs fall with it. To maintain the same total contribution, the promotion needs enough additional orders to offset the lower contribution per order. Calculate that requirement before judging a sale by revenue or order volume.
RELATED: ecommerce-offer-design,product-bundling-strategy,ecommerce-break-even-roas

## Use contribution, not the discount percentage alone

Let price minus variable cost equal contribution before any additional promotion costs. Keep the cost basis consistent. Fulfillment, payment fees and return patterns may change during a promotion, so the simplest formula is a starting model rather than a complete forecast.

Required order multiplier equals original contribution per order divided by discounted contribution per order. If discounted contribution is zero or negative, no finite increase in equally unprofitable orders restores the original contribution.

## Worked example: a 20% discount needs twice the orders

Illustrative example: a $100 product has $60 variable cost. Contribution is $40. A 20% discount lowers price to $80 and contribution to $20 if the cost stays unchanged. The required order multiplier is $40 ÷ $20 = 2.

| Offer | Price | Variable cost | Contribution | Orders needed to match 100 original orders |
| Original | $100 | $60 | $40 | 100 |
| 10% discount | $90 | $60 | $30 | About 133.3 |
| 20% discount | $80 | $60 | $20 | 200 |

Whole orders require rounding upward when planning a fixed target. The table excludes extra acquisition, fixed costs and changes in returns.

## Add the promotion's additional costs

If the sale requires more media spend, creative or overtime, include those costs before declaring success. Check whether discounted buyers would have purchased at full price anyway. Attributed promotion revenue does not establish how many additional orders the discount created.

Also consider timing. A promotion can pull next month's demand forward rather than create new demand. Observe a suitable follow-up window and compare the broader contribution, not only the sale days.

## Evaluate the actual result

Compare realized contribution with the planned model using collected revenue and mature return outcomes. Examine customer mix and capacity. Doubling orders can require a different fulfillment cost or create delays that affect repeat purchase.

Calculate the contribution under three discount levels and write the required order increase for each. If the required uplift is implausible or unsupported, test a clearer value proposition or a relevant bundle instead of a deeper price cut.

@@ ecommerce-inventory-marketing
META: Align e-commerce marketing with available stock, replenishment and product contribution using an inventory-aware campaign planning worksheet.
ANSWER: Inventory-aware marketing promotes products the business can fulfill while considering margin, stock cover and replenishment uncertainty. Available inventory is a constraint, not merely a feed field. Buying demand for unavailable or low-contribution items can waste spend and damage customer expectations.
RELATED: ecommerce-paid-traffic-capacity,cod-stockout-ad-spend,marketing-logistics-alignment

## Define what is actually available

Separate physical stock from reserved orders, damaged items and stock already committed to another channel. Record the update timing. An advertising system receiving yesterday's availability can keep promoting a product that sold out this morning.

Estimate demand and replenishment using your own records. Avoid treating an expected supplier date as confirmed stock. If the product is a preorder, the offer and checkout should state that explicitly.

## Create a campaign readiness view

| Product input | Decision it supports |
| Sellable stock | Whether new demand can be fulfilled |
| Expected demand | How quickly available stock may be consumed |
| Contribution | Whether the product can support acquisition cost |
| Replenishment confidence | Whether promotion can continue safely |
| Operational capacity | Whether orders can leave on the promised schedule |

Stock cover estimates depend on assumed demand. Show the assumptions rather than presenting a single exact depletion date.

## Worked example: the top seller is nearly unavailable

Illustrative example: a store has 50 sellable units and receives ten orders a day. At that rate, stock covers five days before considering existing reservations. A promotion designed to double demand shortens that theoretical cover to 2.5 days.

If replenishment is uncertain, the decision may be to reduce exposure, promote an appropriate alternative or present a transparent preorder. Do not keep the original delivery promise merely because the advertising creative is already approved.

## Coordinate changes across the journey

Update advertisements, product pages, checkout and customer messages together. A substitution should be relevant and clearly explained, not automatically added after the buyer expected a different item. Record who can pause promotion and how quickly availability changes propagate.

Review stockouts beside campaign outcomes. A conversion decline caused by missing variants is different from ad fatigue. Use the [capacity planning guide](ecommerce-paid-traffic-capacity.html) when more demand also requires more picking, packing or support.

@@ ecommerce-preorder-messaging
META: Write clear preorder messaging covering estimated dispatch, payment timing, changes and customer support without making unsupported delivery promises.
ANSWER: Preorder marketing should explain that the product is not ready for ordinary immediate fulfillment, when dispatch is expected and what the customer commits to. Keep the distinction visible before payment. Do not advertise a supplier estimate as a guaranteed delivery date.
RELATED: regional-delivery-promise,ecommerce-inventory-marketing,post-purchase-communication

## Separate dispatch from arrival

Dispatch is when the parcel leaves; delivery is when the customer receives it. Explain the estimated timing for both where the business can support it. Identify the source and confidence of the estimate internally so the public wording remains accurate.

State payment timing and the actual change or cancellation process. Use the business's approved terms rather than inventing a refund promise to improve conversion. If the date changes, communicate the revised information promptly through the supported customer channel.

## Keep the same conditions throughout the journey

| Touchpoint | Essential information |
| Advertisement | Product availability is a preorder |
| Product page | Expected dispatch and material conditions |
| Checkout | The commitment and payment timing |
| Confirmation | Order status and next update |
| Delay message | Revised estimate and available options |

The condition should not disappear between the ad and checkout. A notice buried below the purchase button may not resolve an inaccurate main promise.

## Worked example: a two-week estimate changes

Illustrative example: a supplier initially expects stock in two weeks, but the business has not received it. The offer can communicate an estimated dispatch window under the stated conditions. It should not claim “delivered in two days” because ordinary in-stock orders use that schedule.

If the supplier later delays the shipment, revise the page and inform existing buyers using the actual order process. Continuing to sell with the old estimate creates a separate problem from managing the original orders.

## Measure more than preorder volume

Review collected orders, cancellations, support questions, delivery outcomes and contribution once the cohort matures. A high preorder count can conceal widespread misunderstanding of availability.

Ask someone unfamiliar with the offer to explain when they pay and when they expect the item. Correct any ambiguity before expanding promotion. Use the [delivery promise guide](regional-delivery-promise.html) to distinguish supported regional service from a blanket claim.
