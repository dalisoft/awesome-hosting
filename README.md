# awesome-hosting

List of awesome hosting sorted by minimal plan price

## Other my awesome lists

- [awesome-storage](https://github.com/dalisoft/awesome-storage)
- [awesome-chatbot](https://github.com/dalisoft/awesome-chatbot)

## Support

You can support project by **Clicking to name of service**, with 💲 badge, not **Pricing** or **Plans** link as **service name links** includes affiliates (only those which with 💲 badge)

## Contents

- [Web Services Platform](#web-services-platform)
- [Backend-as-a-Service](#baas)
- [Lambda](#lambda)
- [Node.js](#nodejs)
- [Static](#static)
- [Wordpress](#wordpress)
- [VPS](#vps)
- [Database](#database)
- [GPU Cloud](#gpu-cloud)
- [AI LLM/Inference](#llminference-api)

### Web Services Platform

List of all Web services platform

| Name                                                                    | Minimal plan                                                                                                            | Trial         | Free                                                                                 | Open Source | Type | Lambda |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------- | ------------------------------------------------------------------------------------ | ----------- | ---- | ------ |
| [Amazon Web Services](https://aws.amazon.com)                           | [See plans](https://aws.amazon.com/pricing/)                                                                            | Yes, 1-year   | Yes, only AWS Lambda                                                                 |             | All  | Yes    |
| [Azure Web Services](https://azure.microsoft.com/en-us)                 | [See plans](https://azure.microsoft.com/en-us/pricing/)                                                                 | Yes, 1-year   | Yes (1 App) / [Free tier](https://azure.microsoft.com/en-us/free/) / 200\$ Credit    |             | All  | Yes    |
| [Google Cloud Platform](https://cloud.google.com)                       | [See plans](https://cloud.google.com/pricing/)                                                                          | Yes, 1-year   | Yes (1 App) / [Free tier](https://console.cloud.google.com/freetrial) / 300\$ Credit |             | All  | Yes    |
| [Oracle Cloud](https://www.oracle.com/cloud) <sup>not recommended</sup> | [See plans](https://www.oracle.com/cloud/pricing.html)                                                                  | Yes (30 days) | [Free tier](https://www.oracle.com/cloud/free/) / 300\$ Credit                       |             | All  | Yes    |
| [Yandex.Cloud](https://cloud.yandex.ru)                                 | [See pricing](https://cloud.yandex.ru/prices)                                                                           | Credit-only   | ~60\$ credit                                                                         |             | All  | ?      |
| [Sber.Cloud](https://cloud.sbercloud.ru)                                | [See pricing](https://cdn.sbercloud.ru/backend/docs/sbercloud_advanced/tariffs/7.6.H_tariff_CLOUD_CONTAINER_ENGINE.pdf) | Credit-only   |                                                                                      |             | All  | ?      |

---

### BaaS

List of all Backend-as-a-Service platform

| Name                                            | Minimal plan                                             | Trial | Free                                               | Open Source | Type    | Lambda |
| ----------------------------------------------- | -------------------------------------------------------- | ----- | -------------------------------------------------- | ----------- | ------- | ------ |
| [litegix](https://litegix.com)                  | [Hobby](https://litegix.com/pricing) (7 \$/m)            | No    | Up-to 5 apps?                                      |             | ?       | ?      |
| [Render](https://render.com)                    | [Services](https://render.com/pricing) (7 \$/m)          | No    | Yes (with few limits)                              |             | Dynamic | No     |
| [Heroku](https://www.heroku.com)                | [Hobby](https://www.heroku.com/pricing) (7 \$/m)         | No    | [No anymore](https://blog.heroku.com/next-chapter) |             | Dynamic | No     |
| [appwrite Cloud](https://appwrite.io/cloud)     | [Pro Plan](https://appwrite.io/pricing) (15 \$/m)        | No    | Yes (Self-hosted)                                  |             | Dynamic | ?      |
| [PocketHost](https://pockethost.io)             | Pro (20 \$/m)                                            | No    | Yes                                                |             | Dynamic |        |
| [Firebase Console](https://firebase.google.com) | [Flame](https://firebase.google.com/pricing/) (25 \$/m)  | No    | Yes                                                |             | Dynamic | No     |
| [Supabase](https://supabase.io)                 | [Pro](https://supabase.io/pricing) (25 \$/m)             | No    | Yes                                                |             | Dynamic | No     |
| [Nhost](https://nhost.io/)                      | [Pro](https://nhost.io/pricing) (25 \$/m)                | No    | Yes                                                | Yes         | Dynamic | Yes    |
| [directus](https://directus.io/)                | [Standard Cloud](https://directus.io/pricing/) (25 \$/m) | No    | [Community Cloud](https://directus.io/pricing/)    | Yes         | Dynamic | ?      |
| [Koyeb](https://koyeb.com)                      | [Startup](https://koyeb.com/pricing) (79 \$/m)           | No    | Yes                                                |             | Dynamic | No     |
| [PocketBase](https://pocketbase.io)             | Your infrastructure                                      | -     | Self-Hosted                                        |             | Dynamic | -      |

---

### Lambda

List of all Lambda(Serverless)-as-a-Service platform

| Name                                                              | Minimal plan                                                                                         | Trial | Free                   | Open Source |
| ----------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ----- | ---------------------- | ----------- |
| [Azure Functions](https://azure.microsoft.com/products/functions) | [Pay-as-you-Go](https://azure.microsoft.com/en-us/pricing/details/functions/#pricing) (0.2 \$/m req) | No    | 1M invocations / month |             |
| [AWS Lambda](https://aws.amazon.com/lambda)                       | [Pay-as-you-Go](https://aws.amazon.com/lambda/pricing/) (0.2 \$/m req)                               | No    | 100K request / day     |             |
| [Google Functions](https://cloud.google.com/functions)            | [Pay-as-you-Go](https://cloud.google.com/functions/pricing) (0.4 \$/m req)                           | No    | 2M invocations / month |             |
| [Google Run](https://cloud.google.com/run) \[container\]          | [Pay-as-you-Go](https://cloud.google.com/run/pricing) (0.4 \$/m req)                                 | No    | 2M invocations / month |             |
| [Cloudflare Workers](https://workers.cloudflare.com/)             | [Pay-as-you-Go](https://workers.cloudflare.com/) (5 \$/m)                                            | No    | 1M request / month     |             |
| [Deno Deploy](https://deno.com/deploy)                            | [Pro](https://deno.com/deploy/pricing) (10 \$/m)                                                     | No    | 100K requests / day    |             |
| [Serverless Cloud](https://www.serverless.com/cloud)              | [Startup](https://www.serverless.com/cloud/pricing) (19 \$/user/m)                                   | No    | 100K request / day     |             |
| [Vercel Edge](https://vercel.com/features/edge-functions)         | [Pro](https://vercel.com/pricing) (20 \$/m)                                                          | No    | 1M invocations / month |             |
| [Netlify Functions](https://www.netlify.com/products/functions/)  | [Level 1](https://www.netlify.com/products/functions/) (25 \$/site/m)                                | No    | 100K request / day     |             |

---

### Node.js

List of all Node.js hosting platform

| Name                                                                        | Minimal plan                                                          | Trial                                                            | Free                                                                      | Open Source | Type        | Lambda |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------- | ----------- | ----------- | ------ |
| [OpeNode](https://www.openode.io)                                           | [50Mb Memory](https://www.openode.io/pricing) (0.40 \$/m)             | No                                                               | Yes (Limited resources)                                                   |             | Dynamic     | No     |
| [Cyclic](https://www.cyclic.sh)                                             | [Usage Based](https://cyclic.sh/pricing) (3 $/m)                      | No                                                               | Yes (1 app)                                                               |             | Dynamic     | Yes    |
| [HostPresto](https://hostpresto.com/nodejs-hosting/)                        | [Node.js starter](https://hostpresto.com/nodejs-hosting/) (3.50 £/m)  | No                                                               | No                                                                        |             | Yes         | No     |
| [A2 Hosting](https://www.a2hosting.com/nodejs-hosting) <sup>untrusted</sup> | [LITE](https://www.a2hosting.com/web-hosting/compare) (3.92 \$/m)     | No                                                               | No                                                                        |             | Yes         | No     |
| [Railway](https://railway.app/)                                             | [Hobby](https://railway.app/pricing) (5 \$/m)                         | No                                                               | No                                                                        |             | Lambda-only | Yes    |
| [GearHost](https://www.gearhost.com)                                        | [Hobby](https://www.gearhost.com/pricing) (5 \$/m)                    | No                                                               | Yes (1 App + 1 Database)                                                  |             | Dynamic     | No     |
| [qodi](https://qoddi.com/)                                                  | [Starter](https://qoddi.com/#pricing) (6 \$/m)                        | No                                                               | 3-apps                                                                    |             | Dynamic     | No     |
| [Roast](https://www.roast.io)                                               | [Zappa](https://www.roast.io/pricing) (9 \$/m)                        | No                                                               | Ribbon-ad                                                                 |             | Static      | No     |
| [StormKit](https://www.stormkit.io)                                         | [Starter](https://www.stormkit.io/pricing) (9.9 \$/m)                 | No                                                               | Yes (1 App)                                                               |             | All         | No     |
| [Platform](https://platform.sh)                                             | [Developer](https://platform.sh/pricing) (10 \$/m)                    | [Yes](https://accounts.platform.sh/platform/trial/general/setup) | No                                                                        |             | Yes         | No     |
| [Section](https://www.section.io)                                           | [Core](https://www.section.io/modules/nodejs-edge-hosting/) (20 \$/m) | No                                                               | Yes                                                                       |             | Dynamic     | No     |
| [CloudNode](https://cloudno.de)                                             | [Basic Plus](https://cloudno.de/pricing) (24 €/y)                     | No                                                               | Yes (1 App)                                                               |             | Dynamic     | No     |
| [OpenShift](https://www.openshift.com)                                      | [PRO](https://www.openshift.com/products/pricing/) (50 \$/m)          | [30-day](https://manage.openshift.com/register/plan)             | [Yes](https://manage.openshift.com/register/confirm) (1 App/public)       |             | Dynamic     | No     |
| [Glitch](https://glitch.com)                                                | No plans                                                              | No                                                               | Open-source ideas                                                         |             | All         | ?      |
| [IBM Cloud](https://www.ibm.com/cloud)                                      | [See plans](https://www.ibm.com/cloud/pricing/)                       | Yes, 1-year                                                      | Yes (1 App) / [Free tier](https://www.ibm.com/cloud/free/) / 200\$ Credit |             | All         | Yes    |
| [Deta](https://www.deta.sh)                                                 | -                                                                     | No                                                               | Yes (Unlimited)                                                           |             | Dynamic     | No     |

---

### Static

List of all static site hosting platform

| Name                                          | Minimal plan                                             | Trial | Free                                                               | Open Source       | Type   | Lambda |
| --------------------------------------------- | -------------------------------------------------------- | ----- | ------------------------------------------------------------------ | ----------------- | ------ | ------ |
| [Forestry](https://forestry.io/pricing/)      | [STARTER](https://forestry.io/pricing/) (9 \$/user/m)    | No    | Yes                                                                |                   | Static | No     |
| [dAppling Network](https://dappling.network)  | [Grow](https://www.dappling.network) ($20 \$/user/m)     | No    | Yes                                                                |                   | Static | No     |
| [begin](https://begin.com)                    | [Team](https://begin.com) (25 \$/m) + AWS Fee            | No    | Yes (5 App)                                                        |                   | Static | Yes    |
| [Surge](https://surge.sh)                     | [Surge Professional](https://surge.sh/pricing) (30 \$/m) | No    | Yes                                                                |                   | Static | No     |
| [fleek](https://fleek.co)                     | [Pro](https://fleek.co/pricing/) (40 \$/m)               | No    | Yes (3Gb Storage)                                                  |                   | Static | No     |
| [Netlify](https://www.netlify.com)            | [Pro](https://www.netlify.com/pricing) (45 \$/m)         | No    | Yes (1 Concurrent build)                                           |                   | Static | Yes    |
| [Vercel](https://vercel.com)                  | [Pay-as-you-Grow](https://vercel.com/pricing)            | No    | Yes (3 App)                                                        | Increase resource | Static | Yes    |
| [AWS Amplify](https://aws.amazon.com/amplify) | [Pay-as-you-Go](https://aws.amazon.com/amplify/pricing)  | No    | Yes (5Gb)                                                          |                   | Static | ?      |
| [Github Pages](https://pages.github.com)      | -                                                        | No    | [Public](https://help.github.com/en/articles/what-is-github-pages) |                   | Static | No     |

---

### WordPress

| Name                                 | Minimal Plan                                                     | Trial | Free | Open Source |
| ------------------------------------ | ---------------------------------------------------------------- | ----- | ---- | ----------- |
| [EasyWP](https://www.easywp.com/)    | [Starter](https://www.easywp.com/pricing/) ($6.88/m)             | No    |      |             |
| [Flywheel](https://getflywheel.com/) | [Tiny](https://getflywheel.com/pricing/) ($15/m)                 | No    |      |             |
| [Zabhost](https://zabhost.com/)      | [Starter](https://zabhost.com/pricing) ($20/m)                   | No    |      |             |
| [WP Engine](https://wpengine.com/)   | [Startup](https://wpengine.com/plans/) ($20/m)                   | No    |      |             |
| [Kinsta](https://kinsta.com/)        | [Starter](https://kinsta.com/wordpress-hosting/pricing/) ($24/m) | No    |      |             |

---

### VPS

List of all Virtual Private Server

| Name                                                                       | Minimal plan                                                           | Trial                                                        | Free                                   | Open Source      |
| -------------------------------------------------------------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------ | -------------------------------------- | ---------------- |
| [MrVM](https://mrvm.net)                                                   | [LXC-256](https://mrvm.net/lxc) (0.5 €/m)                              | No                                                           | No                                     |                  |
| [OVHCloud](https://www.ovhcloud.com)                                       | [Starter](https://www.ovhcloud.com/en/vps) (0.97 \$/m)                 | No                                                           |                                        |                  |
| [4VPS](https://4vps.su/r/9vcdaY54bGZ8) 💲                                  | [See pricing](https://4vps.su) (1.50 \$/m)                             | No                                                           | No                                     |                  |
| [CloudCone](https://app.cloudcone.com/?ref=11853) 💲                       | [VPS Plan 1](https://cloudcone.com/vps) (1.80 \$/m)                    | No                                                           | No                                     |                  |
| [AdminVPS](https://my.adminvps.ru/aff.php?aff=28412) 💲                    | [Lite](https://adminvps.ru/vps/vps_russia.php) (1.80 \$/m)             | No                                                           | No                                     |                  |
| [RackNerd](https://my.racknerd.com/aff.php?aff=12402) 💲                   | [See pricing](https://www.racknerd.com/kvm-vps) (1.92 \$/m)            | No                                                           | No                                     |                  |
| [BuyVM](https://buyvm.net)                                                 | [Slice 512](https://buyvm.net/kvm-dedicated-server-slices/) (2 \$/m)   | No                                                           | No                                     |                  |
| [VScale](https://www.vscale.io)                                            | [See pricing](https://vscale.io/cloud/instances/order) (~2,15 \$/m)    | No                                                           |                                        |                  |
| [Life Cloud Solutions](https://lifecloud.solutions/vps-server.php)         | [SSD Cloud 2](https://lifecloud.solutions/vps-server.php) (2,00 €/m)   | No                                                           | No                                     |                  |
| [Vultr](https://www.vultr.com/?ref=9628836-8H) 💲                          | [Skylake 10GB](https://www.vultr.com/pricing/) (2.5 \$/m)              | 60-day                                                       | Trial, 10$ or 100$ Credit with &raquo; |                  |
| [FirstVDS](https://firstvds.ru/?from=1025225) 💲                           | Прогрев (2.5 \$/m)                                                     | No                                                           | No                                     |                  |
| [RuVDS](https://ruvds.com/pr3299) 💲                                       | Start->Start (2.6 \$/m)                                                | 3-day                                                        | No                                     |                  |
| [aruba Cloud](https://www.cloud.it)                                        | [STARTER](https://www.cloud.it/vps.aspx) (2,49 €/m)                    | No                                                           | No                                     |                  |
| [HostSailor](https://hostsailor.com)                                       | [Mini sailor](https://hostsailor.com/vps-hosting/kvm-vps/) (2.99 \$/m) | No                                                           | No                                     |                  |
| [ihc](https://www.ihc.ru/?ref=423754) 💲                                   | [ssdVPS:1](https://www.ihc.ru/vps.html) (3.23 \$/m)                    | 3-day                                                        | No                                     |                  |
| [TimeWeb Cloud](https://cloud.timeweb.com) <sup>deletes account</sup>      | Danny (3.25 \$/m)                                                      | No                                                           | No                                     |                  |
| [LightSail](https://aws.amazon.com/lightsail/)                             | [See plans](https://aws.amazon.com/lightsail/pricing/) (3.5 \$/m)      | 1 Month                                                      | No                                     | Unlimited cloud? |
| [netcup](https://www.netcup.com)                                           | [VPS 250 G11s](https://www.netcup.com/en/server/vps) (3,35 €/m)        | No                                                           | No                                     |                  |
| [Scaleway](https://www.scaleway.com)                                       | [Stardust1-s](https://www.scaleway.com/en/pricing/) (3,35 €/m)         | No                                                           | No                                     |                  |
| [DigitalOcean](https://m.do.co/c/030da2341a70) 💲                          | Standard 1GB (4 \$/m)                                                  | 60-day                                                       | Trial, 10\$ Credit                     |                  |
| [Kamatera](https://www.kamatera.com) <sup>untrusted</sup>                  | Simple (4 \$/m)                                                        | [30-day](https://www.kamatera.com/Products/258/How_it_Works) |                                        |                  |
| [Hetzner](https://www.hetzner.com) <sup>untrusted</sup>                    | [See plans](https://www.hetzner.com/cloud) (€ 3.79/m)                  | No                                                           | No                                     |                  |
| [RuVPS](https://ruvps.net)                                                 | [VPS-1](https://ruvps.net/en/vps) (4.5 $/m)                            | No                                                           | No                                     |                  |
| [VDSina](https://www.vdsina.com/?partner=8e5e1gf48t) 💲                    | [Standard](https://www.vdsina.com/pricing/standard) (4.80 \$/m)        | No                                                           | No                                     |                  |
| [SSD Nodes](https://www.ssdnodes.com) <sup>untrusted</sup>                 | [KVM / Small](https://www.ssdnodes.com/pricing/) (4.99 \$/m)           | 14-day refund only                                           | No                                     |                  |
| [Linode](https://www.linode.com) <sup>verified</sup>                       | [Nanode 1GB](https://www.linode.com/pricing) (5 \$/m)                  | 7-day                                                        | No                                     |                  |
| [aeza](https://aeza.net/?ref=550011) 💲                                    | [Shared ALBs-1](https://aeza.net/virtual-servers) (4.94 €/m)           |                                                              |                                        |                  |
| [Hostworld](https://hostworld.uk)                                          | [See pricing](https://hostworld.uk/ssd-vps) (4.99 £/m)                 | No                                                           | No                                     |                  |
| [UpCloud](https://upcloud.com/signup/?promo=D5VUZ2) 💲 <sup>verified</sup> | [See plans](https://www.upcloud.com/pricing/) (7 €/m)                  | ?                                                            | Trial or 25\$ Credit with referral     |                  |
| [Adaptable](https://adaptable.io)                                          | Hobby (7 \$/m)                                                         | No                                                           | Public-repos only                      |                  |
| [CloudSigma](https://cloudsigma.com)                                       | [Small-2](https://cloudsigma.com/pricing) (12 \$/m)                    | 7-day                                                        | No                                     |                  |
| [fly.io](https://fly.io)                                                   | [Launch](https://fly.io/plans) (29 \$/m)                               | No                                                           | Yes (3 shared-cpu VM)                  |                  |

---

### Database

List of all managed databases

| Name                                                                           | Type                   | Minimal plan                                                                                     | Trial  | Free              | Open Source |
| ------------------------------------------------------------------------------ | ---------------------- | ------------------------------------------------------------------------------------------------ | ------ | ----------------- | ----------- |
| [Filess](https://filess.io)                                                    | Any                    | [Basic](https://filess.io/#pricing) (€2.99/m)                                                    | No     | 10Mb Storage      |             |
| [Railway](https://railway.app/)                                                | Any                    | [Usage](https://railway.app/pricing) (5 \$/m)                                                    | No     |                   |             |
| [clever cloud](https://www.clever-cloud.com/postgresql-hosting/)               | Any                    | [XXS Small Space](https://www.clever-cloud.com/postgresql-hosting/) (€5.25/m)                    | No     | 10-256Mb storage  |             |
| [Redis Cloud](https://redislabs.com/get-started/)                              | Redis                  | [Fixed](https://redis.com/redis-enterprise-cloud/pricing/) (7 \$/m)                              | No     | 30Mb storage      |             |
| [Scalingo](https://scalingo.com/databases)                                     | Any                    | [Starter 512M](https://scalingo.com/pricing) (€7.20/m)                                           | No     | Yes               |             |
| [Turso](https://turso.tech)                                                    | SQLite                 | [Hobby](https://turso.tech/pricing) (9 \$/m)                                                     | No     | 9Gb total storage |             |
| [Aiven](https://console.aiven.io/signup?referral_code=c5lqcgdy1bmva03f1jer) 💲 | Any                    | [Hobbyist](https://aiven.io/pricing) (19 \$/m)                                                   | Cloud  | `do-nyc` plans    |             |
| [neon](https://neon.tech/)                                                     | PostgreSQL             | [Launch](https://neon.tech/pricing) (19 \$/m)                                                    | No     | Free tier         |             |
| [xata](https://xata.io)                                                        | API DB                 | [Pro](https://xata.io/pricing) (20 \$/m)                                                         | No     | Yes               |             |
| [Supabase Database](https://supabase.com/database)                             | PostgreSQL             | [Pro](https://supabase.io/pricing) (25 \$/m)                                                     | No     | 500Mb storage     |             |
| [Convex](https://convex.dev)                                                   | ?                      | [Professional](https://convex.dev/plans) (25 \$/m)                                               | No     | Starter plan      |             |
| [fly Postgres](https://fly.io/docs/postgres/)                                  | PostgreSQL             | [Launch](https://fly.io/plans) (29 \$/m)                                                         | No     |                   |             |
| [PlanetScale](https://planetscale.com/)                                        | MySQL?                 | [Scaler](https://planetscale.com/pricing) (39 \$/m)                                              | No     | No                |             |
| [Atlas](https://www.mongodb.com/atlas/database)                                | MongoDB                | [Dedicated](https://www.mongodb.com/pricing) (57 \$/m)                                           | No     | Shared plan       |             |
| [Koyeb Database](https://www.koyeb.com/docs/databases)                         | PostgreSQL             | [Startup](https://koyeb.com/pricing) (79 \$/m)                                                   | No     | 1Gb storage       |             |
| [Upstash](https://upstash.com/)                                                | Redis+Kafka            | Pay-as-you-Go                                                                                    | No     | 10K commands/day  |             |
| [TiDB Serverless](https://www.pingcap.com/tidb-serverless)                     | MySQL                  | [Pay-as-you-Go](https://www.pingcap.com/tidb-serverless-pricing-details/)                        | No     | 5GB & 50M req/m   |             |
| [realm](https://realm.io/)                                                     | SQLite alternative     | [Pay-as-you-Go](https://www.mongodb.com/docs/atlas/app-services/billing/#std-label-billing-sync) | No     | 1M req or 500 hr  |             |
| [DBHub.io](https://dbhub.io)                                                   | SQLite                 | Free                                                                                             | No     | Free tier         |             |
| [CockroachDB](https://www.cockroachlabs.com)                                   | PostgreSQL alternative | [Dedicated](https://www.cockroachlabs.com/pricing) (295 \$/m)                                    | 30-Day | 1M req & 10 GiB   |             |
| [PocketBase](https://pocketbase.io)                                            | ?                      | Self-hosted                                                                                      | No     | Self-hosted       |             |

---

### GPU Cloud

List of all GPU renting/hosting providers

> Minimal plan and/or price is referred for single (1x) GPU per hour and GPU should be RTX 3090 or similar performance

| Name                                                                | Minimal plan                                                     | Trial       | Free | Open Source |
| ------------------------------------------------------------------- | ---------------------------------------------------------------- | ----------- | ---- | ----------- |
| [Featherless](https://featherless.ai/register?referrer=0qRlTLHJ) 💲 | [Pricing](https://featherless.ai/#pricing) (10 \$/m)             |             |      |             |
| [Salad](https://salad.com)                                          | [Pricing](https://salad.com/pricing) (0.20 \$/h)                 | No          |      |             |
| [TensorDock](https://tensordock.com)                                | [Pricing](https://tensordock.com/cloud-gpus) (0.20 \$/h)         | No          |      |             |
| [Novita](https://novita.ai/?ref=nzk2mgm&utm_source=affiliate) 💲    | [Pricing](https://novita.ai/gpu-instance/pricing) (0.21 \$/h)    | $0.5 credit |      |             |
| [RunPod](https://runpod.io)                                         | [Pricing](https://runpod.io/gpu-instance/pricing) (0.22 \$/h)    | No          |      |             |
| [VastAI](https://cloud.vast.ai/?ref_id=187311) 💲                   | [Pricing](https://vast.ai/pricing) (0.30 \$/h)                   | No          |      |             |
| [VDSina](https://www.vdsina.com/?partner=8e5e1gf48t) 💲             | [L4](https://www.vdsina.com/pricing/gpu-servers) (0.425 \$/h)    | No          |      |             |
| [Jarvislabs](https://jarvislabs.ai)                                 | [Pricing](https://jarvislabs.ai/pricing) (0.44 \$/h)             | No          |      |             |
| [Valdi](https://valdi.ai)                                           | [Pricing](https://valdi.ai) (0.45 \$/h)                          | No          |      |             |
| [AIME](https://aime.info)                                           | [Pricing](https://aime.info/en/gpucloud) (0.49 \$/h)             | No          |      |             |
| [LambdaLabs](https://lambdalabs.com)                                | [Pricing](https://lambdalabs.com/service/gpu-cloud) (0.50 \$/h)  | No          |      |             |
| [Shadeform](https://www.shadeform.ai)                               | [Pricing](https://www.shadeform.ai/#pricing) (0.50 \$/h)         | No          |      |             |
| [Hyperstack](https://www.hyperstack.cloud)                          | [Pricing](https://www.hyperstack.cloud/gpu-pricing) (0.50 \$/h)  | No          |      |             |
| [Modal](https://modal.com)                                          | [Pricing](https://modal.com/pricing) (0.59 \$/h)                 | No          |      |             |
| [FluidStack](https://fluidstack.io)                                 | [Pricing](https://fluidstack.io/pricing) (0.59 \$/h)             | No          |      |             |
| [Shadeform](https://shadeform.ai)                                   | [Pricing](https://shadeform.ai) (0.60 \$/h)                      | No          |      |             |
| [Seimaxim](https://seimaxim.com)                                    | [Pricing](https://seimaxim.com/dedicated-servers/gpu) (480 \$/m) | No          |      |             |
| [beam](https://beam.cloud)                                          | [Pricing](https://www.beam.cloud/pricing) (0.68 \$/h)            | No          |      |             |
| [Cloud4U](https://cloud4u.com)                                      | [Pricing](https://cloud4u.com/cloud-hosting/gpu) (0.69 \$/h)     | No          |      |             |
| [TitanGPU](https://titangpu.com)                                    | [Pricing](https://titangpu.com/#pricing) (0.69 €/h)              | No          |      |             |
| [CoreWeave](https://coreweave.com)                                  | [Pricing](https://coreweave.com/gpu-cloud-pricing) (0.77 \$/m)   | No          |      |             |
| [LeaderGPU](https://leadergpu.com)                                  | [Pricing](https://leadergpu.com/#chose-best) (523.38 €/m)        | No          |      |             |
| [Lepton](https://www.lepton.ai)                                     | [Pricing](https://www.lepton.ai/pricing) (1.212 $/h)             | No          |      |             |

---

### LLM/Inference API

> Minimal plan and/or price is referred for price per million token (input/output) for LLAMA 3.3/3.1 70B models

| Name                                                                | Minimal plan                                                          | Trial       | Free | Open Source |
| ------------------------------------------------------------------- | --------------------------------------------------------------------- | ----------- | ---- | ----------- |
| [LambdaLabs](https://lambdalabs.com)                                | [Pricing](https://lambdalabs.com/inference) (0.20 \$/1M token)        |             |      |             |
| [Deepinfra](https://deepinfra.com)                                  | [Pricing](https://deepinfra.com/pricing) (0.24/0.40 \$/1M token)      |             |      |             |
| [Novita](https://novita.ai/?ref=nzk2mgm&utm_source=affiliate) 💲    | [Pricing](https://novita.ai/model-api/pricing) (0.39 \$/1M token)     | $0.5 credit |      |             |
| [Hyperbolic](https://hyperbolic.xyz)                                | [Pricing](https://hyperbolic.xyz/pricing) (0.40 \$/1M token)          | $10 credit  |      |             |
| [avian](https://avian.io)                                           | [Pricing](https://avian.io/pricing) (0.45 \$/1M token)                | $1 credit   |      |             |
| [Groq](https://groq.com)                                            | [Pricing](https://groq.com/pricing) (0.59/0.79 \$/1M token)           |             | Yes? |             |
| [SambaNova](https://sambanova.ai)                                   | [Pricing](https://cloud.sambanova.ai/pricing) (0.60/1.20 \$/1M token) |             |      |             |
| [Replicate](https://replicate.com)                                  | [Pricing](https://replicate.com/pricing) (0.65/2.75 \$/1M token)      |             |      |             |
| [AWS Bedrock](https://aws.amazon.com/bedrock)                       | [Pricing](https://aws.amazon.com/bedrock/pricing) (0.72 \$/1M token)  |             |      |             |
| [Lepton](https://www.lepton.ai)                                     | [Pricing](https://www.lepton.ai/pricing) (0.80 \$/1M token)           |             |      |             |
| [Cerebas](https://cerebras.ai)                                      | [Pricing](https://inference.cerebras.ai) (0.85/1.20 \$/1M token)      |             | Yes? |             |
| [together.ai](https://together.ai)                                  | [Pricing](https://together.ai/pricing) (0.88 \$/1M token)             | $5 credit   |      |             |
| [Fireworks.ai](https://fireworks.ai)                                | [Pricing](https://fireworks.ai/pricing) (0.9/0.9 \$/1M token)         | $1 credit   |      |             |
| [Gradient AI](https://gradient.ai)                                  | [Pricing](https://gradient.ai/pricing) (0.9/0.9 \$/1M token)          | $5 credit   |      |             |
| [Featherless](https://featherless.ai/register?referrer=0qRlTLHJ) 💲 | [Pricing](https://featherless.ai/#pricing) (10 \$/m)                  |             |      |             |

---

## Note

- **Open Source** column means is hosting provides free tier or discounts for **Open Source** projects

## Resources

- <https://free-for.dev/#/?id=web-hosting>
- <https://gist.github.com/bmaupin/0ce79806467804fdbbf8761970511b8c>
- <https://gist.github.com/bmaupin/d2d243218863320b01b0c1e1ca0cf5f3>
- <https://github.com/anaibol/awesome-serverless#hosting-and-code-execution-in-the-cloud>
- <https://lowendbox.com/category/virtual-servers>
- <https://hostinghub.ru/top/vds/desheviy>
- <https://cloud-gpus.com>

---

## License

MIT
