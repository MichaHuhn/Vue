import { test, expect } from '@playwright/test';

/*
If you don't want to use End-to-End Testing with Playwright, you can just delete this e2e folder or keep it for later.

Get started with Playwright:
https://playwright.dev/docs/intro
*/
test('visits the app root url', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('.vue')).toHaveText('Vue works');
});
