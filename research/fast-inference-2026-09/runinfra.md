# RunInfra

**Review date:** 2026-09-26. **Observed announcement:** 2026-06-30; model launches 2026-08-15–30.

**Product / availability:** Live hosted GPU inference API; already listed.

**Published provider URL:** <https://runinfra.ai>.

The beta was announced by June 30, earlier than the August date in the supplied review. On August 15 the provider advertised DeepSeek V4 Flash at 278.3 output tokens/s in BF16 and $0.13/$0.27 per million input/output tokens. August 26 brought GLM-5.3 Flash at 254.1 tokens/s, 703 ms TTFT and $0.10/$0.40. August 28 advertised DeepSeek V4 Pro at 296 tokens/s and $0.60/$1.90. August 30 advertised Qwen3.8 Flash Next at 249.8 tokens/s and $0.12/$0.40. These are distinct model snapshots.

A developer’s August 31 agent-harness report measured about 108 output tokens/s and 2.8 s average TTFT for DeepSeek V4 Flash, below the advertised rate. This single workload is useful counterevidence, not a reproducible cross-provider benchmark. The $0.13/$0.27 pair belongs to DeepSeek V4 Flash; it must not be presented as gpt-oss-120b pricing. No current gpt-oss rate or standard signup/free allowance was verified in the examined X posts.

**Repository decision:** Updated the existing Tokens row and moved it to the alphabetically sorted pricing-link-only group. The note explains why the previous numeric rate is not retained.

## X evidence

- [2026-06-30 beta](https://x.com/runinfrai/status/2072043867432796280)
- [2026-08-15 model and price](https://x.com/runinfrai/status/2088594942482374759)
- [Corrected model link reply](https://x.com/runinfrai/status/2088693542688338181)
- [2026-08-26 GLM](https://x.com/runinfrai/status/2092709405049397692)
- [2026-08-28 V4 Pro](https://x.com/runinfrai/status/2093400098701021619)
- [2026-08-30 Qwen](https://x.com/runinfrai/status/2094168878507266165)
- [Developer harness report](https://x.com/BalegaNorbert/status/2094362817683976451)
