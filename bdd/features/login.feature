Feature: Login action

    As a user
    I want to login into the application

    Scenario: Login with valid credentials
        Given I am on the login page
        When I enter valid credentials
        And I click on the login button
        Then I should be redirected to the dashboard page

    Scenario Outline: Try to login with invalid credentials
        Given I am on the login page
        When I enter "<username>" and "<password>"
        And I click on the login button
        Then I should see an error message

        Examples:
            | username | password |
            | user1    | pass1    |
            | user2    | pass2    |
            | user3    | pass3    |