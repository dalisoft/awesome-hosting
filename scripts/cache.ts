import { mkdir } from 'node:fs/promises';

const convertToPrimitive = (result: unknown): string =>
  typeof result === 'string' ? result : JSON.stringify(result);

export const createCache = async <T>(
  key: string,
  fn: () => T | Promise<T>,
  ttl = 300
) => {
  await mkdir(`.cache`, { recursive: true });

  const filename = `.cache/${key}.json`;
  let file = Bun.file(filename);
  let result: T;

  if (!(await file.exists())) {
    result = convertToPrimitive(await fn()) as T;
    file.write(result as string);
  } else if (file.lastModified + 60 * ttl <= Date.now()) {
    result = convertToPrimitive(await fn()) as T;
    await file.delete();

    file = Bun.file(filename);
    file.write(result as string);
  }

  result = (await file.json()) as T;

  return result;
};
