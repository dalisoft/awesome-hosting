import { google } from '@ai-sdk/google';
import { generateText, Output } from 'ai';
import { ProductSchema, type Product } from './schema.ts';
import fs from 'node:fs/promises';
import path from 'node:path';

export async function parseMarkdown(): Promise<Product[]> {
  const result = await generateText({
    model: google('gemini-3.8-flash'),
    reasoning: 'high',
    output: Output.array({ element: ProductSchema }),
    maxOutputTokens: 128000,
    tools: {
      url_context: google.tools.urlContext({})
    },
    system: `
      Parse and extract ALL products and it's plans from Markdown.

      Plans must be ordered by amount in ascending order (ASC).
      Ensure the plans array is strictly sorted by amount ASCENDING.
      Fetch and gather ALL plans details. Convert currency to USD.

      GPU extraction must prioritize RTX 3090, RTX A5000, Quadro RTX 6000, or Tesla P40.
    `,
    prompt: await fs.readFile(path.resolve('README.md'), { encoding: 'utf-8' })
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
