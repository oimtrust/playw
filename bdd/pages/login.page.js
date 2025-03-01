class LoginPage {
    async navigateToLoginScreen() {
        await page.goto('https://www.saucedemo.com/');
    }

    async inputValidAccount(username, password) {
        await page.type('#user-name', username);
        await page.type('#password', password);
    }

    async clickLoginButton() {
        await page.click('#login-button');
    }

    async assertUserIsLoggedIn() {
        await page.waitForSelector('.inventory_list');
    }
}

module.exports = { LoginPage }