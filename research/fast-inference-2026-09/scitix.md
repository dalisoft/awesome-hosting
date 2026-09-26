# ScitiX

**Review date:** 2026-09-26. **Observed announcement:** 2026-08-27 model launch; 2026-09-16 benchmark.

**Product / availability:** Live hosted inference API; existing service with recent updates.

**Published provider URL:** <https://scitix.ai>.

ScitiX announced GLM-5.3 availability on August 27 through an OpenAI-compatible API and claimed sub-second TTFT. Its September 16 post reports 59,668.30 output tokens/s for DeepSeek-R1 in an MLPerf Server Open result on one eight-GPU system. September 10 replies describe shipped cache and loading improvements.

The MLPerf number is system throughput, not one user’s generation rate. Model-loading speedups likewise do not measure decode speed. Earlier July posts already describe an API, so a late-September mention is not its launch date. A conference-demo credit promotion is not a standard self-serve signup allowance. No gpt-oss price or permanent free tier was verified.

**Repository decision:** Added to Tokens with a published provider/API link. Numeric reference-model pricing and unknown free/trial fields are not invented.

## X evidence

- [GLM API availability](https://x.com/scitix/status/2093005366716231900)
- [System throughput benchmark](https://x.com/scitix/status/2100241705639481436)
- [Latency details](https://x.com/scitix/status/2100241710827897283)
- [Shipped serving improvements](https://x.com/scitix/status/2097924620934599115)
- [Earlier speech API](https://x.com/scitix/status/2074523585884930505)
- [Conference-only credit promotion](https://x.com/scitix/status/2082684758447071558)
