export class CartPage {
  constructor(page) {
    this.page = page;
    this.cartItems = page.locator(".cart_item");
    this.checkoutButton = page.locator("#checkout");
  }

  async hasProduct(productName) {
    const item = this.page
      .locator(".cart_item")
      .filter({ hasText: productName });
    return await item.count() > 0;
  }

  async goToCheckout() {
    await this.checkoutButton.click();
  }
}
