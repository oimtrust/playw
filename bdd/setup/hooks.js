const playwright = require('playwright');
const { Before, After, BeforeAll, AfterAll } = require('@cucumber/cucumber');

BeforeAll(async function () {
    console.log('Launch Browser');
    global.browser = await playwright.chromium.launch({ headless: false });
});

AfterAll(async function () {
    console.log('Close Browser');
    await global.browser.close();
});

Before(async function () {
    console.log('Open Context');
    global.context = await global.browser.newContext();
    global.page = await global.context.newPage();
});

After(async function () {
    console.log('Close Context');
    await global.page.close();
    await global.context.close();
});