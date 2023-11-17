import { expect, Locator, Page } from '@playwright/test'

export class LoginPage {
  // Define selectors
  readonly page: Page
  readonly usernameInput: Locator
  readonly passwordInput: Locator
  readonly loginButton: Locator
  readonly errorMessage: Locator
  readonly homeTitle: Locator

  // Init selectors using constructor
  constructor(page: Page) {
    this.page   = page
    this.usernameInput  = page.locator("#user_login")
    this.passwordInput  = page.locator("#user_password")
    this.loginButton = page.locator('text=Sign in')
    this.errorMessage = page.locator('.alert-error')
    this.homeTitle = page.locator('#homeMenu')
  }

  // Define login page methods
  async login(username: string, password: string) {
    await this.usernameInput.fill(username)
    await this.passwordInput.fill(password)
    await this.loginButton.click()
  }

  async assertErrorMessage() {
    await expect(this.errorMessage).toContainText('Login and/or password are wrong.')
  }

  async assertHome() {
    await expect(this.homeTitle).toContainText('Home')
  }
}