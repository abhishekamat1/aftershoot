import { test, expect } from '@playwright/test';

test('login', async ({ page }) => {
    await page.goto('https://aftershoot.com');
    await page.locator('#flex-blockid--d10e > div > a > span').click();
    await page.locator('//button[normalize-space()="Log in"]').click();
    await page.locator('input[placeholder="Email"]').fill('stalone173@gmail.com');
    await page.locator('input[placeholder="Password"]').fill('Threado@123');
    await page.locator('button[type="submit"]').click();

    await page.pause();
  console.log('Works fine')
});