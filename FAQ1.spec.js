import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://aftershoot.com/');
  await page.locator('#flex-blockid--d10e').getByRole('link', { name: 'Get Started' }).click();
  await page.locator('//button[normalize-space()="Log in"]').click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('stalone173@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Threado@123');
  await page.getByRole('button', { name: 'Log In' }).click();
  // await page.keyboard.press('End');  // Scrolls to the bottom
  //await page.keyboard.press('PageDown'); // Scrolls down one page  
  await page.locator('//p[@class="text-left"][@xpath="1"]').click();
  // await page.pause();

  // await page.waitForSelector('//button[@id="headlessui-disclosure-button-:r4j:"]//p[contains(@class,"text-left")]', { state: 'visible' });
  // await page.locator('//button[@id="headlessui-disclosure-button-:r4j:"]//p[contains(@class,"text-left")]').click();

});