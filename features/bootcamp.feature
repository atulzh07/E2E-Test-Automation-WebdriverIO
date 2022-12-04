Feature: newegg search bar and internet shop logo

  Background: To access the homepage
    Given a user can access the newegg website
    When the promo banner appears

  Scenario: Search bar
    When the user enters windows
    Then one item appears

  Scenario: Internet shop logo button
    Given the user clicks on Today's Best Deals button
    When the user clicks on Internet Shop logo
    Then the user should be redirected to the main page
