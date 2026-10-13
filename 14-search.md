@@ seo-content-evidence-ledger
META: Maintain an SEO content evidence ledger that separates verified facts, assumptions, calculations and examples while making future updates easier.
ANSWER: A content evidence ledger records the claims in an article and what supports them. Separate verified facts, author reasoning, calculations and illustrative examples. The ledger helps maintain a useful answer without turning uncertain information into a confident search snippet.
RELATED: before-after-ad-claims,content-refresh-audit,programmatic-seo-quality-gate
SOURCE: https://developers.google.com/search/docs/fundamentals/using-gen-ai-content|Google Search: guidance on generative AI content

## Record claims, not just a bibliography

A list of sources does not tell an editor which sentence a source supports. Capture the claim, relevant source, checked date and applicability. A product feature can vary by plan, country or version; retain the condition that matters.

Google's guidance stresses checking AI-assisted content and its metadata for accuracy. Apply that review to titles, descriptions and structured data as well as the article body. A cautious paragraph does not repair an exaggerated headline.

## Use a practical ledger

| Claim type | Evidence to retain |
| Platform fact | Current primary documentation and conditions |
| Business result | Original record, metric definition and permission |
| Calculation | Inputs, units, formula and assumptions |
| Illustration | Clear label that it is not a reported result |
| Recommendation | Reasoning and the situation it applies to |

Avoid presenting all five types with the same level of certainty.

## Worked example: a metric becomes a fake claim

Illustrative example: an article uses invented order numbers to explain contribution margin. If the title later becomes “How we increased profit by 40%,” the example has been transformed into fabricated evidence. Keep the illustrative label and remove the unsupported result headline.

Likewise, a link to a provider's broad documentation cannot substantiate a specific customer outcome. The claim needs the appropriate record, not merely an authoritative-looking source name.

## Review changes at their source

When a price, feature or reporting definition changes, update the affected explanation and metadata together. Do not change the checked date until the relevant material has been verified. Maintain the earlier claim in the internal record where it helps explain the revision.

Choose a review cadence according to how quickly the topic changes. Stable arithmetic needs a different maintenance process from a platform interface walkthrough. Use the [content refresh guide](content-refresh-audit.html) to prioritize substantive updates.

@@ chatgpt-search-referral-analysis
META: Analyze ChatGPT search referrals without treating visits as total AI visibility, with a practical measurement worksheet and examples of attribution limits.
ANSWER: ChatGPT referral traffic measures visits your analytics can attribute to that source. It does not measure every mention or citation in AI answers. Track visits, landing pages and qualified outcomes separately from visibility checks, and state the limitations of each data source.
RELATED: google-ai-search-eligibility,search-console-content-analysis,marketing-data-reconciliation
SOURCE: https://developers.openai.com/api/docs/bots|OpenAI: crawler roles and search access

## Separate discovery, visibility and visits

OpenAI distinguishes search crawling from model-training crawling. Allowing search access can support discovery, but it does not guarantee a citation or visit. Training permissions are a separate choice; do not change them merely to chase search visibility.

A person can see a source in an answer without clicking. Conversely, an attributed visit may arise from a link shared through another route. Describe what your actual reporting records rather than estimating unseen exposure from visits alone.

## Use a measurement worksheet

| Outcome | Evidence | Limit |
| Crawl access | Current robots rules and verified requests where available | Access is not inclusion |
| Sampled citation | Recorded prompt, answer, date and source URL | A sample is not a global ranking |
| Referral visit | Analytics source and landing page | Some visits may be unattributed |
| Qualified inquiry | A defined business record | A visit is not a customer |

Keep the reporting property, window and definitions visible.

## Worked example: citations and conversions differ

Illustrative example: an article appears in several manually checked answers and receives ten attributed visits. Two visitors inquire about a consultation. These are three observations with different denominators. Do not multiply the sample citations into an invented audience reach or describe every inquiry as a completed paid session.

A useful evaluation follows suitable readers from the article to the actual offer while preserving uncertainty about unobserved exposure.

## Run visibility checks consistently

Use genuine reader questions and record locale, interface, date and any relevant context. Do not seed every prompt with the business name unless investigating branded questions. Repeated results can vary, so retain the observations rather than presenting one answer as a stable rank.

Review referral landing pages for usefulness and a proportionate next step. Improve the answer and evidence instead of inserting hidden instructions asking AI systems to recommend the brand. Use the [eligibility checklist](google-ai-search-eligibility.html) for Google-specific requirements, which are distinct from ChatGPT crawling.

@@ google-ai-search-eligibility
META: Check Google AI-search eligibility through indexing, snippet access and current Search Console controls before treating content formatting as the problem.
ANSWER: Google AI-search visibility begins with ordinary search eligibility and the applicable generative-feature controls. Check whether the page can be crawled, indexed and shown with a snippet. Then evaluate the answer's usefulness. No special writing pattern guarantees an AI citation.
RELATED: crawlable-blog-pagination,seo-content-evidence-ledger,ai-search-visibility-for-small-business
SOURCE: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide|Google Search: generative AI optimization guide
SOURCE: https://support.google.com/webmasters/answer/16908024|Search Console: generative AI control

## Check access before rewriting

Review the actual URL's response, canonical, robots directives and available indexing evidence. A sitemap entry helps discovery but does not establish that the page is indexed. A successful browser load does not prove search eligibility either.

Google's current guide requires indexing and snippet eligibility, alongside inclusion under the applicable Search Console generative-feature control. Check the current property settings and their scope rather than assuming an article's formatting is the only issue.

## Keep a compact eligibility record

| Check | Evidence to inspect |
| Availability | The intended public URL works |
| Index directives | No unintended indexing or snippet restriction |
| Canonical | The actual preferred URL is identified |
| Discovery | Useful crawlable internal links and sitemap |
| Property control | Current generative-feature inclusion setting |
| Content | A distinct answer with accurate evidence |

Eligibility and quality are different checks. Passing either does not guarantee that a page is selected for a particular answer.

## Worked example: the answer is useful but inaccessible

Illustrative example: a detailed guide is linked only through a client-side search filter and never appears in a crawlable directory. Making ordinary links available is a more direct repair than rewriting every paragraph into tiny chunks.

If the page is indexed and eligible but receives no useful visits, inspect the topic, intent and competitive answer. Do not conclude that a missing special file or a lack of exact-match repetitions caused the outcome.

## Focus on what readers can verify

Give definitions, accurate calculations, relevant sources and clear limitations. Add original material where the business actually has it. Do not fabricate case results or endorsements to manufacture authority.

Record actual impressions, visits and qualified outcomes when the available reporting supports them. Keep provider-specific visibility separate from total traffic. Use the [evidence ledger](seo-content-evidence-ledger.html) to maintain changing claims without pretending that SEO offers guaranteed exposure.

@@ crawlable-blog-pagination
META: Make a large blog crawlable through unique directory URLs, ordinary article links and useful pagination while keeping search filters as a reader convenience.
ANSWER: Crawlable blog pagination gives every article a discoverable route through ordinary links and unique directory pages. Search filters can improve browsing, but they should not be the only way to reach content. Each meaningful directory page needs its own URL and canonical.
RELATED: technical-seo-static-website,topic-clusters-internal-linking,google-ai-search-eligibility
SOURCE: https://developers.google.com/search/docs/specialty/ecommerce/pagination-and-incremental-page-loading|Google Search: pagination guidance

## Separate browsing convenience from discovery

A JavaScript filter can search a catalog efficiently for readers. A static directory and topic pages provide another route when scripts are unavailable or a crawler does not interact with the filter. Keep both linked from the blog landing page.

Google's pagination guidance recommends sequential ordinary links and distinct page URLs. It also advises against making every paginated page canonical to the first one. Apply the same discovery principles to a blog directory.

## Review the directory structure

| Element | Useful check |
| Blog home | Links to topics and the complete directory |
| Directory page | Links to the articles shown and adjacent pages |
| Topic hub | Explains the topic and groups related tasks |
| Article | Links back to its collection and relevant follow-ups |
| Sitemap | Lists the intended canonical article URLs |

Avoid relying solely on fragment identifiers to represent separate directory pages.

## Worked example: two hundred articles behind one search box

Illustrative example: a blog stores its articles in a JSON catalog, but none has a visible link unless someone types a query. The repair is not removing useful search. Add crawlable directory pages and topic hubs with real article links, while retaining the filter as an extra interface.

Check that every article has an inbound path and that pagination reaches the final page. A “next” control that is only a scripted click may not provide the same link structure.

## Keep the directory readable

Use a manageable number of cards and clear previous/next controls. Do not dump hundreds of full articles onto one page. Include meaningful titles and categories so readers can choose a task.

Validate local links, self-canonicals and sitemap membership after expansion. Then inspect actual crawling and indexing where property access is available. A complete directory improves access; it does not force indexing or rankings.

@@ rss-content-distribution
META: Publish an RSS feed for a marketing blog with stable article links, clear summaries and accurate dates, without presenting it as a search-ranking shortcut.
ANSWER: RSS lets readers and compatible services follow a blog's updates through a structured feed. It is a distribution option, not a guaranteed SEO boost. Publish accurate summaries, stable article links and consistent identifiers so subscribers can find the actual guide.
RELATED: crawlable-blog-pagination,content-refresh-audit,seo-content-evidence-ledger
SOURCE: https://www.rssboard.org/rss-specification|RSS Advisory Board: RSS 2.0 specification

## Make the feed useful to a reader

Give the channel a recognizable title and description. For each article, include a meaningful title, description and destination. RSS 2.0 defines the feed as XML with a channel and item elements; use a valid implementation rather than a page that only looks like a feed.

A summary should explain what the article helps someone do. Avoid replacing the whole description with a sales pitch or a list of keywords. The destination should match the summary and remain accessible.

## Keep identifiers and dates accurate

| Field | Purpose |
| Channel title | Identify the publication |
| Article link | Reach the actual guide |
| Item identifier | Recognize the same item across updates |
| Summary | Explain the reader's task |
| Date when used | Describe the actual publication or update event |

Do not regenerate an item's identity on every build. That can make existing articles appear repeatedly as new items in readers.

## Worked example: an update is not a new article

Illustrative example: a guide receives a corrected calculation. Preserve the stable article URL and identifier. Update the content accurately and use date fields according to their intended meaning. Do not create a new identity merely to force the item back to the top of every subscriber's reader.

A new guide can receive its own identifier and entry. Keep the original collection intact so the feed remains a coherent publication rather than a sequence of repeated promotional notices.

## Verify the feed and its destinations

Validate XML syntax and check that each link reaches the intended article. Escape characters correctly in titles and summaries. Use a real feed reader or validator where available without claiming a test you did not perform.

Link the feed from the blog and declare it appropriately in the page head. Evaluate actual subscriber or referral behavior when observable. RSS is another way to serve interested readers, not proof that a search engine will rank the blog higher.
