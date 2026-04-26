# AGENTS

Guide on how lists we're made and how it works.

## Rules

- Always read latest [README](./README.md) before any action
- Always run `npx prettier -c README.md --write` after any modification on [README](./README.md)
- Always fetch actual name, URL, pricing and other fields value of entry before adding, updating or modifying [README](./README.md)
- Always use **monthly** plan pricing as reference, never use temporarily discounts, yearly discounts as permanent pricing
- Never assume, always prefer to fetch fresh metadata and check. Always verify before finalize
- URL last uneless `/` should be striped. No unnecessary `/` on end

## Columns

- Name: Provider name with URL provided
- Minimal plan: minimum paid plan name with pricing
- Trial: is provider gives free trial
  - Like how DigitalOcean gives 60-day trial or 14-day trials for other providers
- Free: Free plan name (if exists)
- Open Source: Is provider gives discount or free plan to OSS/FOSS projects

## Entries

- All list entries separated by categories (aka topics), see list of [categories](./README.md#contents)
- Some of list entries should contain **status** to mark project as one of [status](./README.md#status)
- If entry **Free plan** exists, the **Minimum plan** should not show $0 or any zero value
- As **Minimum plan** should be shown one step higher than **Free plan** price (if free plan exists) or **Lowest paid plan**
- Allowed currencies are: USD ($) and EUR (€) with their corresponding sign.
  - Any other values should be converted to USD ($) at value of published date.
- Entries are sorted by **Price** then by **Name**

## Examples

### Adding new VPS provider

Name: Megahost
URL: <https://megahost.kz/vps>
Minimum plan: SSD-mini (3000 ₸ converted into USD; 6.5 \$/m)
Trial: not exists
Free plan: not exists
Open Source: - (empty)

### Default example

```diff
 | [AlfaHost](https://alfahost.io)               | [Pricing](https://alfahost.io/?tab=vps) (6 \$/m)                            | No                 | No                    |                  |
+| [Megahost](https://megahost.kz/vps)           | SSD-mini (6.5 \$/m)                                                         | No                 | No                    |                  |
 | [Adaptable](https://adaptable.io)             | Hobby (7 \$/m)                                                              | No                 | Public-repos only     |                  |
 | [rdp.monster][rdp-monster-ref]                | [Basic](https://rdp.monster) (9 €/m)                                        | No                 | No                    |                  |
```

### Lower pricing new VPS provider

```diff
+| [000anon](https://000anon.io)                 | [Pricing](https://000anon.io/?tab=vps) (5 \$/m)                             | No                 | No                    |                  |
 | [AlfaHost](https://alfahost.io)               | [Pricing](https://alfahost.io/?tab=vps) (6 \$/m)                            | No                 | No                    |                  |
```

### Higher pricing new VPS provider

```diff
 | [AlfaHost](https://alfahost.io)               | [Pricing](https://alfahost.io/?tab=vps) (6 \$/m)                            | No                 | No                    |                  |
+| [BetaHost](https://betahost.io)               | [Pricing](https://betahost.io/?tab=vps) (7 \$/m)                            | No                 | No                    |                  |
```

### Same-pricing new VPS provider

When new entry alphabetically ordered as pricing is same.

#### Sub-example 1

```diff
 | [AlfaHost](https://alfahost.io)               | [Pricing](https://alfahost.io/?tab=vps) (6 \$/m)                            | No                 | No                    |                  |
```

#### Sub-example 2

```diff
+| [000anon](https://000anon.io)                 | [Pricing](https://000anon.io/?tab=vps) (6 \$/m)                             | No                 | No                    |                  |
 | [AlfaHost](https://alfahost.io)               | [Pricing](https://alfahost.io/?tab=vps) (6 \$/m)                            | No                 | No                    |                  |
```

#### Sub-example 3

```diff
 | [AlfaHost](https://alfahost.io)               | [Pricing](https://alfahost.io/?tab=vps) (6 \$/m)                            | No                 | No                    |                  |
+| [BetaHost](https://betahost.io)               | [Pricing](https://betahost.io/?tab=vps) (6 \$/m)                            | No                 | No                    |                  |
```

#### Sub-example 4

```diff
 | [000anon](https://000anon.io)                 | [Pricing](https://000anon.io/?tab=vps) (6 \$/m)                             | No                 | No                    |                  |
+| [AlfaHost](https://alfahost.io)               | [Pricing](https://alfahost.io/?tab=vps) (6 \$/m)                            | No                 | No                    |                  |
 | [BetaHost](https://betahost.io)               | [Pricing](https://betahost.io/?tab=vps) (6 \$/m)                            | No                 | No                    |                  |
```

## PR

Create a branch then push to remote is mandatory. Create PR with following guidelines, if possible.
Always ask user with simple question, like `[YES]/[NO]` to push to remote after finalizing the changes and verified.

### PR Branch

Always use `[type]-[category]/[name]` for branch.

For example:

- `add-vps/megahost-kz`
- `remove-gpu/someprovider-xyz`
- `update-vps/vdsina-com`

### PR title / commits

Use semantic versioning like titles.
For example:

- docs(vps): add megahost.kz
- docs(vps): update megahost.kz pricing
- docs: weekly entries update, 26 April 2026
- docs(gpu): remove someprovider.xyz

### PR content

Detailed information with metadata, for example

| Name                                | Minimal plan        | Trial | Free | Open Source |
| ----------------------------------- | ------------------- | ----- | ---- | ----------- |
| [Megahost](https://megahost.kz/vps) | SSD-mini (6.5 \$/m) | No    | No   |             |

### PR commits

Always should be fresh and rebased from `master` branch
