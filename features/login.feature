Feature: Login in Sauce Demo
  As a Sauce Demo customer
  I want to login with my credentials
  So that I can buy products

  @happy_path
  Scenario: Successful login with standard_user
    Given the user is on the login page
    When the user logs in with username "standard_user" and password "secret_sauce"
    Then the products page is displayed

  @locked_out
  Scenario: Login attempt with locked_out_user
    Given the user is on the login page
    When the user logs in with username "locked_out_user" and password "secret_sauce"
    Then an error message "Epic sadface: Sorry, this user has been locked out." is shown on login
