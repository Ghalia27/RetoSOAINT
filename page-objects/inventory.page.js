export class InventoryPage {
  constructor(page) {
    this.page = page;
    this.title = page.locator(".title");
    this.cartIcon = page.locator(".shopping_cart_link");
  }

  addToCartButton(productName) {
    return this.page
      .locator(".inventory_item")
      .filter({ hasText: productName })
      .locator("button");
  }

  async addProductToCart(productName) {
    await this.addToCartButton(productName).click();
  }

  async openCart() {
    await this.cartIcon.click();
  }
}
