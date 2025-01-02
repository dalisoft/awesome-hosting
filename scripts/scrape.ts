import urls from '../urls.json' with { type: 'json' };
import { launch } from 'puppeteer';
import fs from 'node:fs/promises';

/**
 * @type {import('puppeteer').Handler<import('puppeteer').HTTPRequest>}
 */
const handleHTMLOnly = (request) => {
  if (
    ['stylesheet', 'media', 'image', 'font'].includes(request.resourceType())
  ) {
    request.abort();
  } else {
    request.continue();
  }
};

const browser = await launch({
  handleSIGHUP: true,
  handleSIGINT: true,
  handleSIGTERM: true,
  headless: false,
  defaultViewport: { width: 1920, height: 1080 }
});
const page = await browser.newPage();
await page.setRequestInterception(true);
page.on('request', handleHTMLOnly);

const newUrls: Array<
  (typeof urls)[number] & { html: string | null; is_success: boolean }
> = [];

for (const url of urls) {
  if (!url.url) {
    continue;
  }

  try {
    await page.goto(url.url, { timeout: 5_000, waitUntil: 'networkidle2' });

    const html = await page.evaluate(() => {
      let [elem] = [
        ...document.querySelectorAll(
          'h1, h2, h3, h4, p, span, b, i, strong, div[data-bs-title]'
        )
      ]
        .filter(
          (elem) =>
            elem.textContent &&
            /[0-9](\s+)?(v?(cpu|core)|ram|gb)/gi.test(elem.textContent)
        )
        .map((elem) =>
          elem.closest('article, section, li, div[data-cpu], div.pricing')
        );

      while (elem && elem.innerHTML.length > 100_000) {
        elem = elem.querySelector('kinsta-plan-slider');
      }
      while (elem && elem.innerHTML.length < 256) {
        elem = elem?.parentElement;
      }

      return elem?.innerHTML.replace(/class=\"([^"]+)\"/g, '') || null;
    });

    !html && console.log(url.name, html);

    newUrls.push({ ...url, html, is_success: !!html && html.length > 200 });
  } catch (e) {
    console.log(url.name, e);

    newUrls.push({ ...url, is_success: false, html: null });
  }
}

await fs.writeFile('urls-with-html.json', JSON.stringify(newUrls, null, 2));

await page.close();
await browser.close();
