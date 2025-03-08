import { test } from '@playwright/test';
import { login } from '../utils/helpers';

test('Login ke SauceDemo', async ({ page }) => {
  await login(page, 'standard_user', 'secret_sauce');
});
