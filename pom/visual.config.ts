import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    testDir: './tests/visual',
    retries: 0,
    /* Reporter to use. See https://playwright.dev/docs/test-reporters */
    reporter: 'html',
    /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
    use: {
        headless: true,
        viewport: { width: 1280, height: 720 },
        actionTimeout: 15000,
        ignoreHTTPSErrors: true,
        video: "off",
        screenshot: "off"
    },

    /* Configure projects for major browsers */
    projects: [
        {
            name: 'chromium',
            use: { browserName: 'chromium' },
        },

        {
            name: 'firefox',
            use: { browserName: 'firefox' },
        },

        {
            name: 'webkit',
            use: { browserName: 'webkit' },
        },
    ],
};

export default config