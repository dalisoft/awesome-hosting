import assert from 'node:assert';
import { pricing_parse, type IPricingOutput } from './pricing-parse.ts';
import { describe, it } from 'node:test';

describe('pricing', () => {
  it('text pricing parse', () => {
    assert.throws(() => pricing_parse(''), {
      name: 'Error',
      message: 'Invalid input []'
    });
  });
  // Add later
  it.skip('only pricing parse', () => {
    assert.deepStrictEqual(pricing_parse('4 $/m'), {
      price: {
        amount: 4,
        currency: '$',
        period: 'monthly',
        metadata: false
      },
      link: false,
      plan: ''
    } as IPricingOutput);
  });

  it('text pricing parse', () => {
    assert.deepStrictEqual(pricing_parse('Pay-as-you-Go'), {
      price: false,
      link: false,
      plan: 'Pay-as-you-Go'
    } as IPricingOutput);
  });

  it('plan + price parse', () => {
    assert.deepStrictEqual(pricing_parse('Start->Start (2.6 \\$/m)'), {
      price: {
        amount: 2.6,
        currency: '$',
        period: 'monthly',
        metadata: false
      },
      link: false,
      plan: 'Start->Start'
    } as IPricingOutput);
  });

  it('pricing parse with spaces', () => {
    assert.deepStrictEqual(
      pricing_parse('[Nanode 1GB](https://www.linode.com/pricing) (5 \\$/m)'),
      {
        price: {
          amount: 5,
          currency: '$',
          period: 'monthly',
          metadata: false
        },
        link: 'https://www.linode.com/pricing',
        plan: 'Nanode 1GB'
      } as IPricingOutput
    );
  });

  it('common pricing parse', () => {
    assert.deepStrictEqual(
      pricing_parse('[Pro](https://deno.com/deploy/pricing) (10 \\$/m)'),
      {
        price: {
          amount: 10,
          currency: '$',
          period: 'monthly',
          metadata: false
        },
        link: 'https://deno.com/deploy/pricing',
        plan: 'Pro'
      } as IPricingOutput
    );
  });

  it('average complex pricing parse', () => {
    assert.deepStrictEqual(
      pricing_parse('[Grow](https://www.dappling.network) ($20 $/user/m)'),
      {
        price: {
          amount: 20,
          currency: '$',
          period: 'monthly',
          metadata: 'user'
        },
        link: 'https://www.dappling.network',
        plan: 'Grow'
      } as IPricingOutput
    );
  });

  it('average complex pricing parse 2', () => {
    assert.deepStrictEqual(
      pricing_parse('[STARTER](https://forestry.io/pricing/) (9 $/user/m)'),
      {
        price: {
          amount: 9,
          currency: '$',
          period: 'monthly',
          metadata: 'user'
        },
        link: 'https://forestry.io/pricing/',
        plan: 'STARTER'
      } as IPricingOutput
    );
  });

  it('average complex pricing parse 3', () => {
    assert.deepStrictEqual(
      pricing_parse('[Tiny](https://getflywheel.com/pricing/) ($15/m)'),
      {
        price: {
          amount: 15,
          currency: '$',
          period: 'monthly',
          metadata: false
        },
        link: 'https://getflywheel.com/pricing/',
        plan: 'Tiny'
      } as IPricingOutput
    );
  });
  it('average complex pricing parse 4', () => {
    assert.deepStrictEqual(
      pricing_parse('[Starter](https://www.easywp.com/pricing/) ($6.88/m)'),
      {
        price: {
          amount: 6.88,
          currency: '$',
          period: 'monthly',
          metadata: false
        },
        link: 'https://www.easywp.com/pricing/',
        plan: 'Stater'
      } as IPricingOutput
    );
  });

  it('complex pricing parse', () => {
    assert.deepStrictEqual(
      pricing_parse('[See plans](https://www.hetzner.com/cloud) (€ 3.79/m)'),
      {
        price: {
          amount: 3.79,
          currency: '€',
          period: 'monthly',
          metadata: false
        },
        link: 'https://www.hetzner.com/cloud',
        plan: 'See plans'
      } as IPricingOutput
    );
  });

  it('inference token price parse', () => {
    assert.deepStrictEqual(
      pricing_parse(
        '[Pricing](https://octo.ai/pricing/text-gen-solution/) (0.9/0.9 \\$/1M token)'
      ),
      {
        price: {
          amount: 0.9,
          currency: '$',
          period: false,
          metadata: '1M/token'
        },
        link: 'https://octo.ai/pricing/text-gen-solution/',
        plan: 'Pricing'
      } as IPricingOutput
    );
  });
});
