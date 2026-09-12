import { z } from 'zod';
import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi';

extendZodWithOpenApi(z);

export const ResourcesSchema = z.object({
  cpu: z
    .string()
    .openapi({
      description: 'CPU allocation',
      example: '1 vCPU',
      examples: ['1 vCPU', '4 Cores']
    })
    .optional(),

  memory: z
    .string()
    .openapi({
      description: 'RAM allocation',
      example: '4 GB',
      examples: ['4 GB', '16 GB']
    })
    .optional(),

  disk: z
    .string()
    .openapi({
      description: 'Storage capacity and drive medium',
      example: '25 GB (NVMe)',
      examples: ['25 GB (NVMe)', '100 GB SSD']
    })
    .optional(),

  gpu: z
    .string()
    .openapi({
      description:
        'Target NVIDIA RTX 3090 or alternatives in order of performance (DESC): RTX A5000, Quadro RTX 6000, Tesla P40',
      example: 'NVIDIA RTX 3090 (24 GB VRAM)',
      examples: [
        'NVIDIA RTX 3090 (24 GB VRAM)',
        'NVIDIA RTX A5000 (24 GB)',
        'NVIDIA Tesla P40 (24 GB)'
      ]
    })
    .optional(),

  network: z
    .string()
    .openapi({
      description: 'Port speed or bandwidth throughput',
      example: '10Gbps',
      examples: ['10Gbps', '1 Gbps unmetered']
    })
    .optional()
});

export const PlanSchema = z.object({
  name: z.string().openapi({
    description: 'Display name of the tier',
    example: 'Developer Pro'
  }),

  amount: z.number().min(0).openapi({
    description: 'Numeric price (0 for free or trial)',
    example: 29.99
  }),

  currency: z.enum(['EUR', 'USD', 'RUB', 'SGD']).openapi({
    description: 'ISO currency code',
    example: 'USD'
  }),

  period: z.enum(['monthly', 'yearly']).openapi({
    description: 'Billing cycle',
    example: 'monthly'
  }),

  link: z.url().openapi({
    description: 'Direct checkout URL or false if unavailable',
    example: 'https://cloud.example.com/checkout/plan-1'
  }),

  is_free_plan: z.boolean().default(false).openapi({
    description:
      'Whether the plan is completely free of charge or a free trial',
    example: false
  }),

  is_oss_plan: z.boolean().default(false).openapi({
    description:
      'Whether the plan is free specifically for open-source projects',
    example: false
  }),

  resources: ResourcesSchema.optional(),

  metadata: z
    .record(z.string(), z.unknown())
    .default({})
    .openapi({
      description: 'Custom key-value parameters',
      example: { setup_fee: 0 }
    })
});

export const ProductSchema = z.object({
  name: z
    .string()
    .openapi({ description: 'Vendor or product name', example: 'RunPod' }),
  minimal_plan: z.null().default(null),
  trial: z
    .string()
    .openapi({ description: 'Trial policy', example: '14 days free' }),
  free: z
    .string()
    .default('-')
    .openapi({ description: 'Free plan summary', example: '1 shared vCPU' }),
  open_source: z.string().default('-').openapi({
    description: 'OSS terms',
    example: 'Free for verified public repos'
  }),
  rootUrl: z
    .url()
    .openapi({ description: 'Homepage URL', example: 'https://example.com' }),
  url: z.url().openapi({
    description: 'Pricing URL',
    example: 'https://example.com/pricing'
  }),
  plans: z
    .array(PlanSchema)
    .min(1)
    .openapi({
      description:
        'Pricing tiers strictly sorted in ascending order (ASC) by amount'
    })
    .refine(
      (plans) =>
        plans.every(
          (p, i) => i === 0 || Number(plans?.[i - 1]?.amount || 0) <= p.amount
        ),
      { message: 'Plans must be ordered by amount in ascending order (ASC)' }
    )
    .transform((plans) => [...plans].sort((a, b) => a.amount - b.amount)),
  affiliate: z.boolean().default(false),
  category: z
    .string()
    .openapi({ description: 'Main category', example: 'GPU Cloud' })
});

export type Resources = z.infer<typeof ResourcesSchema>;
export type Plan = z.infer<typeof PlanSchema>;
export type Product = z.infer<typeof ProductSchema>;
