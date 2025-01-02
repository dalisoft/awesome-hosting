export const PERIOD_MAP = {
  m: 'monthly',
  d: 'daily',
  h: 'hourly',
  y: 'yearly',
  min: 'minutes',
  s: 'seconds'
} as const;

export interface IPrice {
  amount: number;
  currency: string;
  period: (typeof PERIOD_MAP)[keyof typeof PERIOD_MAP] | false;
  metadata: string | false;
}

export interface IPricingOutput {
  price: IPrice | false;
  link: string | false;
  plan: string;
}

const SKIP_KEYWORDS = [
  'Pay-as-you-Go',
  'Self-hosted',
  'Your infrastructure',
  'Free',
  'No plans',
  '-'
];

const PLAN_LINK_PRICE_REGEX = /\[(.*)\]\((.*)\)[ ]?\((.*)\)/;
const PLAN_PRICE_REGEX = /(.*)\s+\((.*)\)/;
const PLAN_LINK_REGEX = /\[(.*)\]\((.*)\)/;

const price_parse = (price: string): IPrice | false => {
  if (!price || SKIP_KEYWORDS.includes(price)) {
    return false;
  }

  const strim = price.trim().replace(/[()\\]/g, '');
  const [amount, period = '', metadata = false] = strim.split(' ');
  const [currency, periodCase, periodCaseFail] = period
    .toLowerCase()
    .split('/');

  if (periodCaseFail) {
    return {
      amount: parseFloat(amount.replace(/[^0-9.,]+/g, '')),
      currency,
      period:
        !metadata && periodCaseFail in PERIOD_MAP
          ? PERIOD_MAP[periodCaseFail]
          : false,
      metadata: periodCaseFail
        ? periodCase
        : metadata === 'token'
          ? `${period.substring(currency.length + 1)}/${metadata}`
          : metadata
    };
  }

  if (Number.isNaN(parseFloat(amount))) {
    /* console.log({
      strim,
      amount,
      period,
      metadata,
      currency,
      periodCase,
      periodCaseFail
    }); */
  }

  return {
    amount: parseFloat(amount),
    currency,
    period:
      !metadata && periodCase in PERIOD_MAP ? PERIOD_MAP[periodCase] : false,
    metadata:
      metadata === 'token'
        ? `${period.substring(currency.length + 1)}/${metadata}`
        : metadata
  };
};
export const pricing_parse = (pricing: string): IPricingOutput => {
  if (SKIP_KEYWORDS.includes(pricing)) {
    return { plan: pricing, link: false, price: false };
  }

  if (PLAN_LINK_PRICE_REGEX.test(pricing)) {
    const [_, plan, link, price] = PLAN_LINK_PRICE_REGEX.exec(pricing) ?? [];

    if (plan === 'Tiny') {
      console.log({
        pricing,
        plan,
        link,
        price
      });
    }

    return { plan, link, price: price_parse(price) };
  } else if (PLAN_PRICE_REGEX.test(pricing)) {
    const [_, plan, price] = PLAN_PRICE_REGEX.exec(pricing) ?? [];

    return { plan, link: false, price: price_parse(price) };
  } else if (PLAN_LINK_REGEX.test(pricing)) {
    const [_, plan, link] = PLAN_LINK_REGEX.exec(pricing) ?? [];

    return { plan, link, price: false };
  }

  throw new Error(`Invalid input [${pricing}]`);
};
