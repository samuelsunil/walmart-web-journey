import { test, expect } from '@playwright/test';

test('home page shows all required components', async ({ page }) => {
  await page.goto('/');
  
  // Check header
  await expect(page.getByTestId('header')).toBeVisible();
  
  // Check search
  await expect(page.getByRole('searchbox')).toBeVisible();
  
  // Check carousels
  await expect(page.getByTestId('featured-products')).toBeVisible();
  await expect(page.getByTestId('top-deals')).toBeVisible();
}); 