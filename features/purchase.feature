Feature: Purchase products in Sauce Demo
  As a Sauce Demo customer
  I want to add products to the cart and complete a purchase
  So that I can acquire the products I need

  Background:
    Given the user is logged in as "standard_user" with password "secret_sauce"

  Scenario: Add one product to the shopping cart
    When the user adds the product "Sauce Labs Backpack" to the cart
    And the user goes to the cart
    Then the cart should contain the product "Sauce Labs Backpack"

  Scenario: Complete a purchase of one product
    When the user adds the product "Sauce Labs Backpack" to the cart
    And the user goes to the cart
    And the user proceeds to checkout
    And the user completes the information with first name "Ghalia" last name "Rebaza" postal code "14001"
    And the user continues to the overview
    And the user finishes the purchase
    Then the order confirmation message "Thank you for your order!" should be displayed


    
