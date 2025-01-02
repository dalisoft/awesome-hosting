import { Type, type Static } from '@sinclair/typebox';

export const ProviderInputSchema = Type.Object({
  name: Type.String({ minLength: 4 }),
  minimal_plan: Type.String({ minLength: 16 }),
  trial: Type.String(),
  free: Type.String(),
  open_source: Type.String()
});
export const ProviderInputSchemaArray = Type.Array(ProviderInputSchema);

export const ProviderOutputSchema = Type.Object({
  name: Type.String({ minLength: 3 }),
  minimal_plan: Type.Null(),
  trial: Type.String(),
  free: Type.String(),
  open_source: Type.String(),
  rootUrl: Type.String({ minLength: 8 }),
  url: Type.String({ minLength: 6 }),
  plan: Type.Object({
    plan: Type.String({ minLength: 1 }),
    link: Type.Union([Type.Literal(false), Type.String()]),
    price: Type.Union([
      Type.Literal(false),
      Type.Object({
        amount: Type.Number({ minimum: 0 }),
        currency: Type.String({ minLength: 1 }),
        period: Type.Union([
          Type.Literal(false),
          Type.String({ minLength: 3 })
        ]),
        metadata: Type.Union([
          Type.Literal(false),
          Type.String({ minLength: 3 })
        ])
      })
    ])
  }),
  affiliate: Type.Boolean(),
  category: Type.String({ minLength: 3 })
});
export const ProviderOutputSchemaArray = Type.Array(ProviderOutputSchema);

export type ProviderInputSchemaType = Static<typeof ProviderInputSchema>;
export type ProviderInputSchemasType = Static<typeof ProviderInputSchemaArray>;
export type ProviderOutputSchemaType = Static<typeof ProviderOutputSchema>;
export type ProviderOutputSchemasType = Static<
  typeof ProviderOutputSchemaArray
>;
