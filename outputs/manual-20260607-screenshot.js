const { chromium } = require('playwright');
const fs = require('fs/promises');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1600, height: 1100 }, deviceScaleFactor: 1 });
  await page.goto('http://127.0.0.1:4177/projects/travel-agent/', { waitUntil: 'networkidle' });
  const outDir = 'E:/vibe_coding/profilo/outputs/manual-20260607-travel-agent-web-preview';
  await fs.mkdir(outDir, { recursive: true });
  for (const id of ['problem','competition','solution','experience','sequence']) {
    const el = page.locator(`#${id}`);
    await el.scrollIntoViewIfNeeded();
    await el.screenshot({ path: `${outDir}/${id}.png` });
  }
  await browser.close();
  console.log(outDir);
})();
