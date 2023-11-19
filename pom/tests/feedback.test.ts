import {test, expect} from "@playwright/test";
import {HomePage} from "../pages/home.page";
import {FeedbackPage} from "../pages/feedback.page";


test.describe('Feedback Form', () => {
    let homePage: HomePage
    let feedbackPage: FeedbackPage

    test.beforeEach(async ({page}) => {
        homePage    = new HomePage(page)
        feedbackPage    = new FeedbackPage(page)

        homePage.visit('/')
        homePage.clickOnFeedbackLink()
    })

    test('Reset Feedback Form', async ({page}) => {
        await feedbackPage.fillForm(
            "Fathur Rohim",
            "trustoim@gmail.com",
            "Test Comment",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        )
        await feedbackPage.resetForm()
        await feedbackPage.assertReset()
    })

    test('Submit Feedback Form', async ({page}) => {
        await feedbackPage.fillForm(
            "Fathur Rohim",
            "trustoim@gmail.com",
            "Test Comment",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        )
        await feedbackPage.submitForm()
        await feedbackPage.feedbackFormSent()
    })
})