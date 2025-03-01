const { Given, When, Then, defineStep} = require('@cucumber/cucumber');
const { LoginPage } = require('../pages/login.page');

const loginPage = new LoginPage();

Given('I am on the login page', async function () {
    await loginPage.navigateToLoginScreen();
});

When('I enter valid credentials', async function () {
    await loginPage.inputValidAccount('standard_user', 'secret_sauce');
});

/**
 * Regular expression can be used to pass parameters to the step definition
 */
defineStep(
    /^I enter "([^"]*)" and "([^"]*)"$/,
    async function (username, password) {
        await loginPage.inputValidAccount(username, password);
    }
)

When('I click on the login button', async function () {
    await loginPage.clickLoginButton();
});

Then('I should be redirected to the dashboard page', async function () {
    await loginPage.assertUserIsLoggedIn();
});

Then('I should see an error message', async function () {
    await loginPage.assertErrorMessage('Epic sadface: Username and password do not match any user in this service');
});