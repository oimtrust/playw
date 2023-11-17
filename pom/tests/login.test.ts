import { test, expect } from "@playwright/test"
import { LoginPage } from '../pages/login.page'
import { log } from 'node:util'


test.describe.parallel('Login/ Logout Flow', () => {
  let loginPage: LoginPage

  test.beforeEach(async ({page}) => {
    loginPage = new LoginPage(page)
    await loginPage.visit('/')
  })

  // @ts-ignore
  test('Negative scenario for login', async ({page}) => {
    await page.click('#signin_button')
    await loginPage.login("invalid username", "invalid password")
    await loginPage.assertErrorMessage()
  })

  // @ts-ignore
  test('Positive scenario for login', async ({page}) => {
    await page.click('#signin_button')
    await loginPage.login("username", "password")

    await loginPage.visit('/index.html')
    await loginPage.assertHome()
  })
})