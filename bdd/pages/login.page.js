class LoginPage {
    async navigateToLoginScreen() {
        await page.goto('https://www.saucedemo.com/');
    }

    async inputValidAccount(username, password) {
        await page.type('#user-name', username);
        await page.type('#password', password);
    }

    async inputInvalidAccount(username, password) {
        await page.type('#user-name', username);
        await page.type('#password', password);
    }

    async clickLoginButton() {
        await page.click('#login-button');
    }

    async assertUserIsLoggedIn() {
        await page.waitForSelector('.inventory_list');
    }

    async assertErrorMessage(message) {
        await page.waitForSelector('[data-test="error"]');
        const errorMessage = await page.$eval('[data-test="error"]', (el) => el.innerText);
        expect(errorMessage).contain(message)
    }
}

module.exports = { LoginPage }