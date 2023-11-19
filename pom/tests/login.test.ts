import { test } from "@playwright/test"
import { LoginPage } from '../pages/login.page'
import { HomePage } from '../pages/home.page'

test.describe.parallel('Login/ Logout Flow', () => {
  let loginPage: LoginPage
  let homePage: HomePage

  test.beforeEach(async ({page}) => {
    loginPage = new LoginPage(page)
    homePage  = new HomePage(page)
    await homePage.visit('/')
  })

  // @ts-ignore
  test('Negative scenario for login', async ({page}) => {
    await homePage.clickOnSignIn()
    await loginPage.login("invalid username", "invalid password")
    await loginPage.assertErrorMessage()
  })

  // @ts-ignore
  test('Positive scenario for login', async ({page}) => {
    await homePage.clickOnSignIn()
    await loginPage.login("username", "password")
    await loginPage.wait(3000)
    await homePage.visit('/index.html')
    await loginPage.assertHome()
  })
})