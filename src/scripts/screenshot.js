import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Define __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const websites = [
  { name: 'infinity-digital', url: 'https://infinitydigital-beta.vercel.app' },
  { name: 'mt-consultores', url: 'https://mtconsultores.com.ar' },
  { name: 'ccpm', url: 'https://ccpm.org.ar' },
  { name: 'wecomex', url: 'https://wecomex.ai/home' },
  { name: 'candida-gres', url: 'https://candidagres.pages.dev' },
];

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  await page.setUserAgent(
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  );

  // Set a fixed viewport size (adjust as needed)
  await page.setViewport({ width: 1400, height: 800 });

  // Ensure the directory exists
  const screenshotsDir = path.resolve(__dirname, '../../public/assets/screenshots');
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }

  for (const site of websites) {
    console.log(`Capturing: ${site.url}`);
    await page.goto(site.url, { timeout: 0, waitUntil: "networkidle2" });

    const filePath = path.join(screenshotsDir, `${site.name}.png`);
    await page.screenshot({ path: filePath, fullPage: false });
  }

  await browser.close();
  console.log('✅ Screenshots captured successfully!');
})();
