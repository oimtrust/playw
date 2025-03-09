import { test } from '@playwright/test';
import { LoginPage } from '@page/login.page';
import { DashboardPage } from '@page/dashboard.page';
import * as authData from '@data/auth.data';

test.describe('Authentication', () => {
    let loginPage: LoginPage;
    let dashboardPage: DashboardPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        dashboardPage = new DashboardPage(page);
        await loginPage.open();
    });

    test('should show error message when login with invalid credentials', async () => {
        await loginPage.login(authData.AuthData.STANDARD_USER.username, 'invalid_password');
        await loginPage.verifyErrorMessage(authData.Messages.LOGIN_ERROR);
    });

    test('should login successfully with valid credentials', async () => {
        await loginPage.login(authData.AuthData.STANDARD_USER.username, authData.AuthData.PASSWORD.password);
        await dashboardPage.verifyProductTitle();
    });
})