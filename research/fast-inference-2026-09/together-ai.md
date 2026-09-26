# Together AI

**Review date:** 2026-09-26. **Observed announcement:** 2026-07-29.

**Product / availability:** Existing listed provider; serving research update.

Together’s ThunderAgent thread reports higher throughput and lower latency under concurrent agent workflows. One reply compares 803 tokens/s at 10.6 s mean latency against 390 tokens/s at 65 s on a single eight-H100 node with batch size 192.

These are batched system/scheduler results, not a single user’s decode rate or a new public API introduction. The context explains why isolated tokens/s cannot predict concurrent agent performance. The existing README provider and reference-model rates are retained without claiming fresh pricing verification.

**Repository decision:** Research note only; no new main-list row. Availability, product type, existing listing or incomplete metadata is explained above.

## X evidence

- [Scheduler research thread](https://x.com/togethercompute/status/2082599087707501054)
- [Batch and system metrics](https://x.com/togethercompute/status/2082599098193224126)
