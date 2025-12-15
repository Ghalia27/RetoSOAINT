import { Given, When, Then } from "@cucumber/cucumber";
import assert from "node:assert/strict";
import { LoginPage } from "../../page-objects/login.page.js";
import { InventoryPage } from "../../page-objects/inventory.page.js";

Given("the user is on the login page", async function () {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.goto();
});

When(
  "the user logs in with username {string} and password {string}",
  async function (username, password) {
    await this.loginPage.login(username, password);
  }
);

Then("the products page is displayed", async function () {
  this.inventoryPage = new InventoryPage(this.page);
  await this.page.waitForURL("**/inventory.html");
  const title = (await this.inventoryPage.title.textContent()).trim();
  assert.equal(title, "Products");
});

Then(
  "an error message {string} is shown on login",
  async function (expectedMessage) {
    const actual = await this.loginPage.errorMessage.textContent();
    assert.ok(
      actual.includes(expectedMessage),
      `Expected error to include "${expectedMessage}", got "${actual}"`
    );
  }
);
