const puppeteer = require('puppeteer');

(async () => {
  // Browser launch karo
  const browser = await puppeteer.launch({ headless: false }); // headless false matlab UI dikhega
  const page = await browser.newPage();

  // Google open karo
  await page.goto('https://www.google.com');

  // Search bar mein "puppeteer" type karo aur enter dabao
  await page.type('input[name="q"]', 'puppeteer');
  await page.keyboard.press('Enter');

  // Search results load hone ka wait karo
  await page.waitForSelector('h3');

  // Pehle result ka title print karo
  const firstResult = await page.$eval('h3', el => el.innerText);
  console.log('First Result:', firstResult);

  // Browser band karo
  await browser.close();
})();
