import urls_htmls from '../urls-with-html.json' with { type: 'json' };
import OpenAI from 'openai';
import fs from 'node:fs/promises';

const ai = new OpenAI({ apiKey: process.env.API_KEY });
const prompt = await fs.readFile('./scripts/ask-llm.prompt.xml', {
  encoding: 'utf-8'
});

const urlsWithData: Array<Record<string, boolean | number | string | null>> =
  [];

for (const url of urls_htmls) {
  if (!url.html || url.html.length > 100_000) {
    continue;
  }

  try {
    const chat = await ai.chat.completions.create({
      temperature: 0.3,
      max_completion_tokens: 1024,
      model: 'gpt-4o-mini',
      stream: false,
      messages: [
        { role: 'user', content: prompt.replace('{{html}}', url.html) }
      ]
    });

    // console.log(chat);

    urlsWithData.push({
      ...url,
      html: null,
      ...(chat.choices[0].message.content
        ? JSON.parse(chat.choices[0].message.content)
        : {})
    });
  } catch (e) {
    console.log(url, e);
  }
}

await fs.writeFile(
  'urls-with-plans.json',
  JSON.stringify(urlsWithData, null, 2)
);
