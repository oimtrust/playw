import { test, expect } from "@playwright/test";

test.describe.parallel('Login/ Logout Flow', () => {

    test.beforeEach(async ({page}) => await page.goto('https://www.saucedemo.com'))

    // @ts-ignore
    test('Negative scenario for login', async ({page}) => {
        await page.locator("#user-name").fill("invalid username")
        await page.locator("#password").fill("invalid password")
        await page.click("#login-button")

        const errorMessage = await page.locator("data-test=error")
        await expect(errorMessage).toContainText("Epic sadface: Username and password do not match any user in this service")
    })

    // @ts-ignore
    test('Positive scenario for login', async ({page}) => {
        await page.locator("#user-name").fill("standard_user")
        await page.locator("#password").fill("secret_sauce")
        await page.click("#login-button")

        const logo = await page.locator(".app_logo")
        await expect(logo).toContainText("Swag Labs")

        //Logout
        await page.click("#react-burger-menu-btn")
        await page.click("#logout_sidebar_link")
    })
})