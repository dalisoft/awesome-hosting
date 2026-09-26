# Fast inference introductions on X — September 2026 review

Reviewed on **2026-09-26**, with **37 provider/project evidence notes**. The main
window is **2026-07-26 through 2026-09-26**, extended to **2026-03-26** for relevant
earlier introductions. Dates use the post's UTC timestamp, which can differ by a
day from the date displayed in the browser. A model update, public API launch,
company introduction and first hardware shipment are recorded as separate events.

The strongest recent public-API introductions found are LithosAI, RunAnywhere's
Wally, Prism, Inco AI, Isoquant, Inception's Mercury 2.5 and Fast Inference.
Sciforium adds a recent optimized-endpoint announcement. RunInfra's beta was
already announced in June; Aster's API introduction was in July. Existing
providers' new model endpoints are included, with their existing status stated.

This review adds **13 products** to the hosting list: **10 model APIs, 2 gateways
and 1 API access subscription**. It updates the existing RunInfra and Aster rows
and fixes GMI Cloud's position in the price ordering. Each provider/project has
its own commit and evidence file; this overview is a separate documentation
commit. No PR or remote push is part of this review.

## What the speed claims establish

The following table collects **dated provider claims for DeepSeek V4.1 Flash**.
It is a useful shortlist, not a controlled benchmark or a current leaderboard.

| Provider            | Announcement date (UTC) | Claimed output tokens/s | Evidence                                                                     |
| ------------------- | ----------------------- | ----------------------- | ---------------------------------------------------------------------------- |
| LithosAI            | 2026-09-24              | 650+ per user           | [Provider update](https://x.com/lithos_ai/status/2103191853248213388)        |
| RunAnywhere / Wally | 2026-09-21              | 615                     | [Launch](https://x.com/RunAnywhereAI/status/2102145104450601419)             |
| Prism               | 2026-09-24              | 547                     | [Founder introduction](https://x.com/RajitWrites/status/2103168653256712603) |
| Inco AI             | 2026-09-17              | 532                     | [Model addition](https://x.com/inco_ai/status/2100695042713412088)           |

These posts do not establish identical prompts, context lengths, concurrency,
quantization, speculative-decoding settings or quality. They also occurred on
different days. Peak decode rate does not determine first-token latency or total
agent-task completion time. Inco's separate GLM-5.3 Flash claim is 592.6 tokens/s;
Wally's launch snapshot for that model is 380. The winner therefore cannot be
inferred from a single provider's highest number. See the individual
[Inco](inco-ai.md) and [Wally](runanywhere-wally.md) sources and limitations.

Other high-speed claims use different models or metrics:

- [Inception](inception.md) reports Mercury 2.5 above 1,100 tokens/s through a
  diffusion architecture; it is not the same open-weight autoregressive model.
- [Aster](aster.md) reports gpt-oss-120b at 644 tokens/s in its July introduction.
- [Sciforium](sciforium.md) reports MiniMax M3 at 289.5 tokens/s per user, with
  explicit accuracy and prompt-length qualifications in the replies.
- [Isoquant](isoquant.md) reports median TTFT of 452 ms. That is latency, not a
  452-tokens/s generation claim.
- [ScitiX](scitix.md) reports 59,668.30 tokens/s for an eight-GPU benchmark system.
  This is aggregate throughput, not a single user's output speed.
- [Together](together-ai.md) reports scheduler improvements at batch size 192.
  Such concurrent-system results are not isolated-user decode rates.
- [Underdog](underdog-husky.md) and [nousenlabs](nousenlabs.md) report local
  performance. They do not establish equivalent cloud API products.

RunInfra's [August 15 announcement](https://x.com/runinfrai/status/2088594942482374759)
reports DeepSeek **V4 Flash**, not V4.1 Flash, at 278.3 tokens/s. A
[developer's harness report](https://x.com/BalegaNorbert/status/2094362817683976451)
observed about 108 tokens/s and 2.8 s average TTFT. It is evidence that real agent
workloads can differ from launch snapshots, not proof of a universal rank.

## Cerebras, Groq and ownership wording

There is insufficient like-for-like evidence here to assert a blanket ordering
of Cerebras, Groq and GPU providers. Cerebras describes an OpenAI partner preview
at 750 tokens/s; a separate developer demonstrates Qwen3.8-27B at 1,950. Neither
is a comparison against the same DeepSeek model and workload. The partnership
post does not establish that OpenAI acquired Cerebras. See [Cerebras](cerebras.md).

Groq's primary December 2025 announcement describes a **non-exclusive NVIDIA
technology license** and continued GroqCloud operation. This older post is used
only to check the supplied ownership claim, not counted as a recent introduction.
August hardware/deployment posts also do not establish a universal fastest cloud
endpoint. See [Groq](groq.md). The reviewed posts do not establish a simple
completed company acquisition.

## Pricing and list decisions

The README retains **gpt-oss-120b** as its pricing reference. This review does not
claim that it is universal or change the reference model. New token-provider
rows use published provider/API links when a current reference-model input/output
price cannot be verified from X. A link does not imply that the provider offers
gpt-oss-120b. Model-specific prices remain in the provider notes with model and
date attached.

RunInfra's former $0.13/$0.27 pair is explicitly for DeepSeek V4 Flash, so it is
removed from the reference-price column. Aster's former $0.15/$0.60 pair could
not be verified in the reviewed X material and is replaced by a link. GMI Cloud's
existing numerical rate is retained and reordered; it is not described as a
fresh price verification. Other unchanged legacy rates/allowances are outside
this pricing refresh.

Fast Inference's $9/month announcement is recorded as **API access**, separately
from per-token pricing. The post does not establish unlimited usage. Temporary
coupons, introductory discounts, blended rates and provider-to-provider rate
quotes are not used as permanent gpt-oss prices. UsePod's cited model rates belong
to Z.ai, not automatically to UsePod. Lithos' low-cost Kimi blended tier is not
automatically the fastest tier's rate.

For rows added or refreshed by this review, **`-` means not verified from the
examined X material**, not an assertion that the provider has no trial or free
plan. Wally's $5 no-card signup credit is the verified self-serve exception.
Prism's DM-based credit offers, ScitiX's event rewards, packet.ai's waitlist and
Z.ai's application-based Coding Plan trial are not automatic API signup credits.

Live hosted APIs go under Tokens; routed marketplaces go under Gateways; monthly
API access goes under API access subscriptions. Existing providers are not
duplicated. Waitlisted or unverified services, local engines, robotics, speech,
typed-decision models and hardware-only introductions remain in research. New
entries receive no author trust badge.

## Provider/project inventory

Every row links to an individual note containing primary X posts, relevant
replies, availability evidence and reasons for its repository disposition.

| Provider / project                            | Observed event date                                           | Repository disposition                      |
| --------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------- |
| [Aster](aster.md)                             | 2026-07-16                                                    | Existing Tokens row refreshed               |
| [B.AI](b-ai.md)                               | 2026-09-21                                                    | Research only; see evidence and limitations |
| [Baseten](baseten.md)                         | 2026-08-18                                                    | Research only; see evidence and limitations |
| [Cerebras](cerebras.md)                       | 2026-08-13 partner preview; 2026-09-13 developer demo         | Research only; see evidence and limitations |
| [Chutes](chutes.md)                           | 2026-07-29; 2026-08-25 model additions                        | Added to Tokens                             |
| [Command Code](command-code.md)               | 2026-09-19                                                    | Research only; see evidence and limitations |
| [Dreamscale Labs](dreamscale-labs.md)         | 2026-09-22                                                    | Research only; see evidence and limitations |
| [Etched](etched.md)                           | 2026-06-30 public introduction; 2026-08-18 rack shipment      | Research only; see evidence and limitations |
| [Fast Inference](fast-inference.md)           | 2026-08-27                                                    | Added to API access subscriptions           |
| [Fastino Labs](fastino.md)                    | 2026-09-24                                                    | Research only; see evidence and limitations |
| [Fireworks](fireworks.md)                     | 2026-07-27                                                    | Research only; see evidence and limitations |
| [GMI Cloud](gmi-cloud.md)                     | 2026-07-27                                                    | Existing Tokens row reordered               |
| [Groq](groq.md)                               | 2026-08-24 hardware update; 2025-12-24 ownership context only | Research only; see evidence and limitations |
| [Inception](inception.md)                     | 2026-09-08                                                    | Added to Tokens                             |
| [Inco AI](inco-ai.md)                         | 2026-09-03 beta; 2026-09-17 model addition                    | Added to Tokens                             |
| [INFER](infer.md)                             | 2026-09-24                                                    | Research only; see evidence and limitations |
| [Intent Lab](intent-lab.md)                   | 2026-07-28                                                    | Research only; see evidence and limitations |
| [Isoquant](isoquant.md)                       | 2026-09-24                                                    | Added to Tokens                             |
| [LithosAI](lithosai.md)                       | 2026-09-09 inferred; 2026-09-24 speed update                  | Added to Tokens                             |
| [Nari Labs](nari-labs.md)                     | 2026-09-11                                                    | Research only; see evidence and limitations |
| [Nebius](nebius.md)                           | 2026-09-21 competitor comparison                              | Research only; see evidence and limitations |
| [nousenlabs](nousenlabs.md)                   | 2026-09-23                                                    | Research only; see evidence and limitations |
| [packet.ai / Token Factory](packet-ai.md)     | 2026-08-17 waitlist; 2026-09-23 reminder                      | Research only; see evidence and limitations |
| [Prism](prism.md)                             | 2026-09-24                                                    | Added to Tokens                             |
| [RunAnywhere / Wally](runanywhere-wally.md)   | 2026-09-21                                                    | Added to Tokens                             |
| [RunInfra](runinfra.md)                       | 2026-06-30; model launches 2026-08-15–30                      | Existing Tokens row refreshed               |
| [SambaNova](sambanova.md)                     | 2026-09-21 hardware update                                    | Research only; see evidence and limitations |
| [Sciforium](sciforium.md)                     | 2026-09-25                                                    | Added to Tokens                             |
| [ScitiX](scitix.md)                           | 2026-08-27 model launch; 2026-09-16 benchmark                 | Added to Tokens                             |
| [Surplus Intelligence](surplus.md)            | 2026-05-17 public API-key post; 2026-07-30 marketplace update | Added to Gateways                           |
| [Taalas](taalas.md)                           | 2026-02-19 launch outside window; 2026-08-06 corporate update | Research only; see evidence and limitations |
| [The Singularity Layer](singularity-layer.md) | 2026-06-10 network; 2026-09-24 SystemOne                      | Research only; see evidence and limitations |
| [Together AI](together-ai.md)                 | 2026-07-29                                                    | Research only; see evidence and limitations |
| [Underdog AI / Husky](underdog-husky.md)      | 2026-09-21                                                    | Research only; see evidence and limitations |
| [UsePod.ai](usepod.md)                        | 2026-08-27 model addition; earlier marketplace                | Added to Gateways                           |
| [Venice](venice.md)                           | 2026-07-21 discussion                                         | Research only; see evidence and limitations |
| [Z.ai](z-ai.md)                               | 2026-09-21 fast endpoint                                      | Added to Tokens                             |

## Search coverage and remaining uncertainty

Only **X posts, profiles, threads, quoted posts and replies** were used as
research evidence. Provider website URLs are metadata published on X; their
external contents were not used. Search-engine discovery was restricted to X,
then evidence was read directly in signed-in X. External benchmark reports,
pricing pages and launch articles were not independently inspected.

Discovery combined date-bounded searches for inference/API introductions,
tokens-per-second language, named open-weight models and YC inference launches;
provider/founder timelines; and replies containing price, availability and
benchmark qualifications. Representative targeted queries used:

- `from:scitix (API OR inference) since:2026-07-26 until:2026-09-27`
- `from:ZixuanLi_ "glm-5.3-flashx" since:2026-07-26 until:2026-09-27`
- `(from:FireworksAI_HQ OR from:nebiusai OR from:togethercompute OR from:SambaNovaAI OR from:GMI_Cloud) ("tok/s" OR "tokens per second" OR "gpt-oss") since:2026-07-26 until:2026-09-27`
- `SambaNova ("tokens/s" OR "tok/s" OR "tokens per second" OR "introducing") since:2026-07-26 until:2026-09-27`

X search and visible timelines are incomplete: deleted/private posts, unindexed
launches and undiscovered providers may be missing. A lack of matching results
does not prove a provider did not launch. This is the collected, source-backed
candidate review, not a claim to have enumerated every post on X.

The supplied review's July 6 Singularity AI Machines date remains unverified.
Venice's captured discussion does not establish a new fast endpoint. INFER lacks
verified public availability in the examined introduction. packet.ai remains
waitlisted in the latest captured launch-window post. Taalas' first product
announcement predates the six-month cutoff.

Other leads are excluded from text-inference provider additions:

- Perplexity's [September 24 Fast Search announcement](https://x.com/perplexity_ai/status/2103184653373014509)
  concerns retrieval latency, not model generation throughput.
- TypeSafe/Jev appears in specialized decision-engine discussions, including
  [The Singularity Layer's post](https://x.com/x402_Layer/status/2103494279574573289).
  No separate hosted text-model introduction is established here.
- Ollama, vLLM, LM Studio and the supplied Antigravity/Gemma local mention are
  runtime/tooling leads. No dated primary post establishing a new hosted API for
  these items was verified in this review, so the pasted claims are not promoted
  into provider rows.

## Validation

Each entry addition was checked against the latest README with case-insensitive
`grep`, then formatted with `npx prettier -c README.md --write`. One-provider
semantic diff checks guarded against mixing entry updates. Final checks cover
duplicate names, table structure, source-link domains, local note links, trailing
slashes, date-window labels, numerical USD ordering and alphabetical unpriced
ordering. All prices in the affected priced groups are USD; no EUR conversion is
needed for the affected adjacencies. The reference model is unchanged.

All 98 distinct post citations in the provider notes, plus the additional
Perplexity citation in this overview, matched posts captured directly from X.
The two cited posts before the six-month cutoff are explicitly labeled as
Groq ownership context and Taalas' out-of-window first product launch.

These checks validate the repository edits and the correspondence with the
captured posts. They do not independently reproduce speed claims, prove current
API uptime or refresh unchanged legacy provider pricing.
