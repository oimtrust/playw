import { test } from '@playwright/test';
import { login, logout } from '../utils/helpers';

test('Logout dari SauceDemo', async ({ page }) => {
    await login(page, 'standard_user', 'secret_sauce');
    await logout(page);
});
