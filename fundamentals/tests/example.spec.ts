import { test, expect } from '@playwright/test';
import { loadHomePage, assertTitle } from "../helpers";

test('Simple basic test', async ({page}) => {
    await page.goto("https://example.com/")
    const pageTitle = await page.locator('h1')
    await expect(pageTitle).toContainText('Example Domain')
});

test('Clicking on Element', async ({page}) => {
    await page.goto('http://zero.webappsecurity.com/')
    await page.click('#signin_button')
    await page.click('[name="submit"]')

    const errorMessage = await page.locator('.alert-error')
    await expect(errorMessage).toContainText('Login and/or password are wrong.')
});

test('Clicking on Input @click-my-tag', async ({page}) => {
    /**
     * type command for run test
     * npx playwright test --grep @click-my-tag
     */
    await page.goto('http://zero.webappsecurity.com/')
    await page.click('#signin_button')
    await page.type('#user_login', 'username')
    await page.type('#user_password', 'user_password')
    await page.click('[name="submit"]')

    const errorMessage = await page.locator('.alert-error')
    await expect(errorMessage).toContainText('Login and/or password are wrong.')
});

test.describe.parallel.only('Hooks', () => {
    test.beforeEach(async ({page}) => {
        await page.goto('https://example.com/')
    })

    test('Screenshot', async ({page}) => {
        await page.screenshot({ path: 'screenshots/example.png', fullPage: true })
    })
    
    test('Single Element Screenshot', async ({page}) => {
        const title = await page.$('h1')
        await title.screenshot({ path: 'screenshots/exampleh1.png' })
    })
})

test('Custom Helpers', async ({page}) => {
    await loadHomePage(page);
    // await page.pause();
    await assertTitle(page);
})
