import { test } from "@playwright/test"
import { LoginPage } from '../../pages/login.page'
import { HomePage } from '../../pages/home.page'

test.describe.only('Login/ Logout Flow', () => {
    let loginPage: LoginPage
    let homePage: HomePage

    test.beforeEach(async ({page}) => {
        loginPage = new LoginPage(page)
        homePage  = new HomePage(page)
        await homePage.visit('/')
    })

    test('Login Form', async ({page}) => {
        await homePage.clickOnSignIn()
        test.setTimeout(15000)
        await loginPage.snapshotLoginForm()
    })

    // @ts-ignore
    test('Negative scenario for login', async ({page}) => {
        await homePage.clickOnSignIn()
        test.setTimeout(15000)
        await loginPage.login("invalid username", "invalid password")
        await loginPage.snapshotErrorMessage()
    })
})