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
  await page.locator('//div[normalize-space()="Referral Program"]').click();

  await page.locator('(//button[contains(@class,"w-max shrink-0 rounded-md border-2 border-transparent font-archivo font-semibold text-white transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60 hover:bg-[#464646] active:bg-[#1B1B1B] disabled:bg-[#DADADA] bg-[#1B1B1B] p-2 md:p-4")])[1]').click();
  await page.pause();
});