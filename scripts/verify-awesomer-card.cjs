// scripts/verify-awesomer-card.cjs
// usage: NODE_PATH=<pw>/node_modules node scripts/verify-awesomer-card.cjs <baseUrl> [screenshotDir]
const { chromium } = require('playwright');
const BASE = process.argv[2].replace(/\/$/, '');
const SHOT = process.argv[3];
const PREVIEW = '/images/awesomer-preview.png';
const GIF = '/images/awesomer-demo.gif';
const fail = [];
const expect = (name, got, want) => {
  const ok = got === want;
  console.log(`${ok ? 'PASS' : 'FAIL'} ${name}: ${got}`);
  if (!ok) fail.push(name);
};
const open = async (browser, reducedMotion, device = {}) => {
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 }, reducedMotion, ...device });
  const page = await ctx.newPage();
  const gifs = [];
  page.on('response', (r) => { if (r.url().endsWith('.gif')) gifs.push(r); });
  await page.goto(`${BASE}/`, { waitUntil: 'networkidle' });
  const card = page.locator('#projects a[href="https://patrickclery.com/awesomer/"]');
  await card.scrollIntoViewIfNeeded();
  const img = card.locator('img');
  await img.evaluate((el) => (el.complete ? null : new Promise((res) => el.addEventListener('load', res, { once: true }))));
  return { ctx, page, card, img, gifs };
};
(async () => {
  const browser = await chromium.launch();
  let s = await open(browser, 'no-preference');
  expect('rest src', await s.img.getAttribute('src'), PREVIEW);
  expect('rest naturalWidth', await s.img.evaluate((e) => e.naturalWidth), 1280);
  expect('no Live Demo badge', await s.card.getByText('Live Demo').count(), 0);
  expect('Live badge', await s.card.getByText('Live', { exact: true }).count(), 1);
  const badge = s.card.getByText('Live', { exact: true });
  const demoBadge = s.page.locator('#projects').getByText('Live Demo', { exact: true }).first();
  const pillStyle = (el) => {
    const c = getComputedStyle(el);
    return [c.fontFamily, c.fontSize, c.fontWeight, c.letterSpacing, c.textTransform, c.paddingTop, c.paddingLeft].join('|');
  };
  expect('Live badge matches Live Demo type', await badge.evaluate(pillStyle), await demoBadge.evaluate(pillStyle));
  const bg = (el) => getComputedStyle(el).backgroundColor;
  expect('Live badge colour differs', (await badge.evaluate(bg)) !== (await demoBadge.evaluate(bg)), true);
  if (SHOT) await s.img.screenshot({ path: `${SHOT}/card-rest.png` });
  await s.page.waitForTimeout(1500);
  expect('gif prefetched before hover', s.gifs.some((r) => r.url().endsWith(GIF)), true);
  await s.card.hover();
  await s.page.waitForTimeout(800);
  expect('hover src', await s.img.getAttribute('src'), GIF);
  expect('gif status', s.gifs[0]?.status(), 200);
  expect('gif content-type', s.gifs[0]?.headers()['content-type'], 'image/gif');
  expect('gif naturalWidth', await s.img.evaluate((e) => e.naturalWidth), 800);
  if (SHOT) await s.img.screenshot({ path: `${SHOT}/card-hover.png` });
  await s.page.mouse.move(0, 0);
  await s.page.waitForTimeout(300);
  expect('leave src', await s.img.getAttribute('src'), PREVIEW);
  // Animation and restart: the GIF holds its opening view for 1.5s, so +500ms is still the first frame.
  await s.card.hover();
  await s.page.waitForTimeout(500);
  const a = await s.img.screenshot();
  await s.page.waitForTimeout(4000);
  const b = await s.img.screenshot();
  await s.page.mouse.move(0, 0);
  await s.page.waitForTimeout(300);
  await s.card.hover();
  await s.page.waitForTimeout(500);
  const c = await s.img.screenshot();
  expect('gif advances while hovered', a.equals(b), false);
  expect('gif restarts on re-hover', a.equals(c), true);
  await s.ctx.close();

  s = await open(browser, 'reduce');
  await s.card.hover();
  await s.page.waitForTimeout(800);
  expect('reduced-motion src', await s.img.getAttribute('src'), PREVIEW);
  expect('reduced-motion gif requests', s.gifs.length, 0);
  await s.ctx.close();

  // The card opens a new tab on tap, so src is checked on the original page.
  s = await open(browser, 'no-preference', { hasTouch: true, isMobile: true });
  await s.card.tap();
  await s.page.waitForTimeout(800);
  expect('touch src after tap', await s.img.getAttribute('src'), PREVIEW);
  expect('touch gif requests', s.gifs.length, 0);
  await s.ctx.close();
  await browser.close();
  process.exit(fail.length ? 1 : 0);
})().catch((e) => { console.error(e); process.exit(1); });
