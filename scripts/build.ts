import fs from 'node:fs/promises';
import path from 'node:path';
import { parse as parseCSV } from 'csv-parse/sync';
import { Value } from '@sinclair/typebox/value';
import { pricing_parse } from '../utils/pricing-parse.ts';
import {
  ProviderOutputSchemaArray,
  type ProviderInputSchemaType,
  type ProviderOutputSchemaType
} from './build.types.ts';

const readme = await fs.readFile(path.resolve('README.md'), {
  encoding: 'utf-8'
});
const lines = readme.split('\n');

const tokenize = (str: string) => str.toLowerCase().replace(/[^a-z0-9]/g, '_');

const map: Record<string, string[][]> = {};
let token;
for (const line of lines) {
  if (line.startsWith('### ')) {
    token = tokenize(line).substring(4);

    map[token] = [];
  }

  if (!line.startsWith('| ') || line.startsWith('| --')) {
    continue;
  }

  const row = line
    .replace(/\s{2+}/g, '')
    .split('|')
    .slice(1, -1)
    .map((value) => value.trim());

  if (map[token].length === 0) {
    map[token].push(row.map(tokenize));
  } else {
    map[token].push(row);
  }
}

await fs.writeFile(path.resolve('map.json'), JSON.stringify(map, null, 2));

const json: ProviderOutputSchemaType[] = [];

for (const category in map) {
  const values = map[category];

  if (values.length === 0) {
    continue;
  }

  json.push(
    ...parseCSV(values.map((entry) => entry.join('|')).join('\n'), {
      columns: true,
      delimiter: '|',
      on_record: (
        record: ProviderInputSchemaType,
        _ctx
      ): ProviderOutputSchemaType => {
        const is_affiliate = record.name.includes('💲');

        if (!record.minimal_plan) {
          // console.log({ record });
        }

        const [_1, name, link] = /\[(.*)\]\((.*)\)/g.exec(record.name) ?? [];
        const plan = pricing_parse(record.minimal_plan);

        const url = new URL(link);
        const rootUrl = is_affiliate ? url.origin : url.href;

        return {
          ...record,
          rootUrl,
          url: url.href,
          minimal_plan: null,
          name,
          plan,
          affiliate: is_affiliate,
          category
        };
      }
    })
  );
}

await fs.writeFile(
  path.resolve('urls.json'),
  JSON.stringify(
    json.map(
      (
        entry,
        index
      ): Partial<ProviderOutputSchemaType & { index: number }> => ({
        index,
        name: entry.name,
        rootUrl: entry.rootUrl,
        url: entry.plan.link || undefined,
        category: entry.category
      })
    ),
    null,
    2
  )
);

console.log('Total services in the list', json.length);

if (!Value.Check(ProviderOutputSchemaArray, json)) {
  console.log(...Value.Errors(ProviderOutputSchemaArray, json));
  process.exit(1);
}

await fs.writeFile(path.resolve('sources.json'), JSON.stringify(json, null, 2));
