import { google, type GoogleLanguageModelOptions } from '@ai-sdk/google';
import { generateText, Output } from 'ai';
import { ProductSchema, type Product } from './schema.ts';
import fs from 'node:fs/promises';
import { GoogleGenAI } from '@google/genai';
import path from 'node:path';
import { createCache } from './cache.ts';

const model = 'gemini-3.8-flash';
const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY!
});

export async function parseMarkdown(): Promise<Product[]> {
  // Create a cache with the content you want to reuse
  const cache = await createCache(
    'cache-id',
    async () =>
      await ai.caches.create({
        model,
        config: {
          contents: [
            {
              role: 'user',
              parts: [
                {
                  text: await fs.readFile(path.resolve('README.md'), {
                    encoding: 'utf-8'
                  })
                }
              ]
            }
          ],
          ttl: '300s' // Cache expires after 5 minutes
        }
      })
  );
  const result = await generateText({
    model: google(model),
    providerOptions: {
      google: {
        cachedContent: cache.name,
        thinkingConfig: {
          thinkingLevel: 'high',
          includeThoughts: false
        }
      } satisfies GoogleLanguageModelOptions
    },
    output: Output.array({ element: ProductSchema }),
    maxOutputTokens: 65536,
    prompt: `
      Parse and extract ALL products and it's plans from Markdown.

      Plans must be ordered by amount in ascending order (ASC).
      Ensure the plans array is strictly sorted by amount ASCENDING.
      Fetch and gather ALL plans details. Convert currency to USD.

      GPU extraction must prioritize RTX 3090, RTX A5000, Quadro RTX 6000, or Tesla P40.
    `
  });

  console.log('Result', {
    finishReason: result.finishReason,
    usage: result.usage
  });

  return result.output;
}

await fs.writeFile(
  path.resolve('results.json'),
  JSON.stringify(await parseMarkdown(), null, 2)
);
