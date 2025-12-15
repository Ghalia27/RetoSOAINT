import { setWorldConstructor, setDefaultTimeout, BeforeAll, AfterAll, Before, After } from "@cucumber/cucumber";
import { chromium } from "playwright";

let browser;

setDefaultTimeout(60 * 1000);

BeforeAll(async () => {
  browser = await chromium.launch({ headless: true });
});

AfterAll(async () => {
  if (browser) {
    await browser.close();
  }
});

class CustomWorld {
  constructor() {
    this.context = null;
    this.page = null;
  }

  async openNewPage() {
    this.context = await browser.newContext();
    this.page = await this.context.newPage();
  }

  async closePage() {
    if (this.context) {
      await this.context.close();
    }
  }
}

setWorldConstructor(CustomWorld);

Before(async function () {
  await this.openNewPage();
});

After(async function () {
  await this.closePage();
});
