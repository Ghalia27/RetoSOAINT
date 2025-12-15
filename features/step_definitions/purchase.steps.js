import { Given, When, Then } from "@cucumber/cucumber";
import assert from "node:assert/strict";
import { LoginPage } from "../../page-objects/login.page.js";
import { InventoryPage } from "../../page-objects/inventory.page.js";
import { CartPage } from "../../page-objects/cart.page.js";
import { CheckoutPage } from "../../page-objects/checkout.page.js";

Given(
  "the user is logged in as {string} with password {string}",
  async function (username, password) {
    const loginPage = new LoginPage(this.page);
    await loginPage.goto();
    await loginPage.login(username, password);
    this.inventoryPage = new InventoryPage(this.page);
    await this.page.waitForURL("**/inventory.html");
  }
);

When(
  "the user adds the product {string} to the cart",
  async function (productName) {
    this.inventoryPage ??= new InventoryPage(this.page);
    await this.inventoryPage.addProductToCart(productName);
  }
);

When("the user goes to the cart", async function () {
  this.inventoryPage ??= new InventoryPage(this.page);
  await this.inventoryPage.openCart();
  this.cartPage = new CartPage(this.page);
});

Then(
  "the cart should contain the product {string}",
  async function (productName) {
    const exists = await this.cartPage.hasProduct(productName);
    assert.ok(exists, `Expected cart to contain product "${productName}"`);
  }
);

When("the user proceeds to checkout", async function () {
  this.cartPage ??= new CartPage(this.page);
  await this.cartPage.goToCheckout();
  this.checkoutPage = new CheckoutPage(this.page);
});

When(
  "the user completes the information with first name {string} last name {string} postal code {string}",
  async function (firstName, lastName, postalCode) {
    await this.checkoutPage.fillInformation(firstName, lastName, postalCode);
  }
);

When("the user continues to the overview", async function () {
  await this.checkoutPage.continue();
});

When("the user finishes the purchase", async function () {
  await this.checkoutPage.finish();
});

Then(
  "the order confirmation message {string} should be displayed",
  async function (expectedMessage) {
    const text = await this.checkoutPage.getConfirmationText();
    assert.equal(text, expectedMessage);
  }
);
