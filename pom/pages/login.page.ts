import { expect, Locator, Page } from '@playwright/test'
import {AbstractPage} from "./abstract.page";


export class LoginPage extends AbstractPage{
  // Define selectors
  readonly usernameInput: Locator
  readonly passwordInput: Locator
  readonly loginButton: Locator
  readonly errorMessage: Locator
  readonly homeTitle: Locator
  readonly loginForm: Locator

  // Init selectors using constructor
  constructor(page: Page) {
    super(page)
    this.usernameInput  = page.locator("#user_login")
    this.passwordInput  = page.locator("#user_password")
    this.loginButton = page.locator('text=Sign in')
    this.errorMessage = page.locator('.alert-error')
    this.homeTitle = page.locator('#homeMenu')
    this.loginForm  = page.locator('#login_form')
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

  async snapshotLoginForm() {
    await expect(await this.loginForm.screenshot()).toMatchSnapshot('login_form.png')
  }

  async snapshotErrorMessage() {
    await expect(await this.errorMessage.screenshot()).toMatchSnapshot('login_error.png')
  }
}