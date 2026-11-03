// scripts/record-awesomer-demo.cjs
// usage: NODE_PATH=<pw>/node_modules node scripts/record-awesomer-demo.cjs <frames_dir> 10 1.25
// install: npm i --prefix <pw> --no-audit --no-fund --ignore-scripts playwright@1.63.0
// encode: ffmpeg -y -v error -framerate 10 -i <frames_dir>/f%04d.png -filter_complex "scale=800:450:flags=lanczos,split[a][b];[a]palettegen=max_colors=256:stats_mode=diff[p];[b][p]paletteuse=dither=none:diff_mode=rectangle" -loop 0 awesomer-demo.gif
// thumbnail: thumb-dsf1.25.png in the parent of <frames_dir> becomes public/images/awesomer-preview.png
// Stepped capture: every output frame is one page.screenshot, so length is exact
// and independent of how slowly screenshots or navigation run.
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const OUT = process.argv[2];
const FPS = Number(process.argv[3] || 10);
const DSF = Number(process.argv[4] || 1.25);
const BASE = 'https://patrickclery.com/awesomer/';
const LIST = '/awesomer/l/claude-code/';
fs.mkdirSync(OUT, { recursive: true });

const ease = (t) => (t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2);

(async () => {
  const browser = await chromium.launch({ args: ['--font-render-hinting=none'] });
  const ctx = await browser.newContext({
    viewport: { width: 1024, height: 576 },
    deviceScaleFactor: DSF,
    colorScheme: 'dark',
    reducedMotion: 'reduce' // stops blink/pulse/stagger, so frame 1 is deterministic and frames diff less
  });
  const page = await ctx.newPage();
  let n = 0;
  let cur = { x: 880, y: 430, on: false };
  const t0 = Date.now();

  const injectCursor = () =>
    page.evaluate(() => {
      if (document.getElementById('__cursor')) return;
      const c = document.createElement('div');
      c.id = '__cursor';
      c.style.cssText =
        'position:fixed;left:0;top:0;width:18px;height:18px;z-index:2147483647;pointer-events:none;display:none;';
      c.innerHTML =
        '<svg viewBox="0 0 18 18" width="18" height="18"><path d="M2 1l12 9-5.5.8L12 17l-2.6 1-3.2-6.3L2 15z" fill="#fff" stroke="#000" stroke-width="1"/></svg>';
      document.documentElement.appendChild(c);
    });
  const setCursor = () =>
    page.evaluate((s) => {
      const c = document.getElementById('__cursor');
      if (c) {
        c.style.display = s.on ? 'block' : 'none';
        c.style.transform = `translate(${s.x}px,${s.y}px)`;
      }
    }, cur);
  const frame = async () => {
    await setCursor();
    await page.screenshot({ path: path.join(OUT, `f${String(n++).padStart(4, '0')}.png`) });
  };
  const hold = async (sec) => {
    const count = Math.round(sec * FPS);
    await frame();
    const buf = fs.readFileSync(path.join(OUT, `f${String(n - 1).padStart(4, '0')}.png`));
    for (let i = 1; i < count; i++) fs.writeFileSync(path.join(OUT, `f${String(n++).padStart(4, '0')}.png`), buf);
  };
  const scrollTo = async (y, sec) => {
    const from = await page.evaluate(() => window.scrollY);
    const count = Math.round(sec * FPS);
    for (let i = 1; i <= count; i++) {
      await page.evaluate((v) => window.scrollTo(0, v), from + (y - from) * ease(i / count));
      await frame();
    }
  };
  const moveTo = async (x, y, sec) => {
    const a = { ...cur };
    cur.on = true;
    const count = Math.round(sec * FPS);
    for (let i = 1; i <= count; i++) {
      const k = ease(i / count);
      cur.x = a.x + (x - a.x) * k;
      cur.y = a.y + (y - a.y) * k;
      await page.mouse.move(cur.x, cur.y);
      await frame();
    }
  };
  const clickLink = async (loc, urlPart) => {
    await loc.scrollIntoViewIfNeeded();
    const box = await loc.boundingBox();
    const x = box.x + Math.min(box.width / 2, 60);
    const y = box.y + box.height / 2;
    await moveTo(x, y, 0.7);
    await page.mouse.down();
    await page.mouse.up();
    await page.waitForURL(`**${urlPart}**`, { timeout: 20000 });
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(500);
    await injectCursor();
  };

  await page.goto(BASE, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(800);
  await injectCursor();
  // thumbnail: exact opening view, cursor hidden
  await page.screenshot({ path: path.join(OUT, '..', `thumb-dsf${DSF}.png`) });

  await hold(1.5); // homepage opening view (matches thumbnail)
  const link = page.locator(`a[href="${LIST}"]`).first();
  const box = await link.boundingBox();
  const targetY = Math.max(0, box.y - 260);
  await scrollTo(targetY, 1.4);
  await hold(0.2);
  await clickLink(link, '/l/claude-code/');
  await hold(1.1);
  await scrollTo(160, 0.7);
  await hold(0.2);
  await clickLink(page.locator('.card-featured a[href*="/r/"]').first(), '/r/');
  await page.waitForTimeout(2500); // let the star-history line finish drawing
  await hold(2.0); // repo detail page with star chart
  await clickLink(page.locator('header a[aria-label="Trending"]'), '/trending/');
  await hold(0.8);
  await scrollTo(220, 0.8);
  await hold(1.2);

  console.log(JSON.stringify({ frames: n, seconds: n / FPS, targetY, urlEnd: page.url(), wallSec: (Date.now() - t0) / 1000 }));
  await browser.close();
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
