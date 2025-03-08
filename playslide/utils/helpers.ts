import { Page, expect } from '@playwright/test';

// 1️⃣ Fungsi Login
export async function login(page: Page, username: string, password: string) {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', username);
    await page.fill('#password', password);
    await page.click('#login-button');
    await expect(page.locator('.title')).toHaveText('Products');
}

// 2️⃣ Fungsi Logout
export async function logout(page: Page) {
    await page.click('#react-burger-menu-btn'); // Klik menu sidebar
    await page.click('#logout_sidebar_link'); // Klik tombol logout
    await expect(page.locator('#login-button')).toBeVisible();
}

// 3️⃣ Fungsi Checkout
export async function checkout(page: Page) {
    await page.click('.shopping_cart_link'); // Klik ikon keranjang
    await page.click('#checkout'); // Klik tombol checkout
    await page.fill('#first-name', 'John');
    await page.fill('#last-name', 'Doe');
    await page.fill('#postal-code', '12345');
    await page.click('#continue');
    await page.click('#finish');
    await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
}
