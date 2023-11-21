import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/home.page";

test.describe('Visual Regression Test Example', () => {
    test.beforeEach(async ({page}) => {
        let homePage: HomePage  = new HomePage(page)
        await homePage.visit('/')
    })
    test('Full Page Snapshot', async ({page}) => {
        expect(await page.screenshot()).toMatchSnapshot('home_page.png')
    })

    test('Single Element Snapshot', async ({page}) => {
        const pageElement = await page.$('#onlineBankingMenu')
        expect(await pageElement.screenshot()).toMatchSnapshot('online_banking_menu.png')
    })
})