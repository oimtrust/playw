import { test } from '@playwright/test';
import { login, checkout } from '../utils/helpers';

test('Melakukan Checkout', async ({ page }) => {
 await login(page, 'standard_user', 'secret_sauce'); // Login terlebih dahulu
 await page.click('.inventory_item button'); // Klik tombol "Add to cart"
 await checkout(page); // Proses checkout
});
