const { Given, When, Then } = require('@cucumber/cucumber');
const { LoginPage } = require('../pages/login.page');

const loginPage = new LoginPage();

Given('I am on the login page', async function () {
    await loginPage.navigateToLoginScreen();
});

When('I enter valid credentials', async function () {
    await loginPage.inputValidAccount('standard_user', 'secret_sauce');
});

When('I click on the login button', async function () {
    await loginPage.clickLoginButton();
});

Then('I should be redirected to the dashboard page', async function () {
    await loginPage.assertUserIsLoggedIn();
});