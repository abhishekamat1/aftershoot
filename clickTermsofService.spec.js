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
  await page.locator('//a[normalize-space()="Terms of Service"]').click();
});