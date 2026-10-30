import { test as base, expect } from "@playwright/test";

import Register from "../../POM/Registerweb.js"
import Login from "../../POM/loginweb.js";
import Search from "../../POM/searchweb.js";
import AddToCart from "../../POM/Addtocartweb.js";
import CartPage from "../../POM/cartcheckoutweb.js";
import BillingCheckout from "../../POM/billingweb.js";
import Category from "../../POM/category.js"
import Computer from "../../POM/computersweb.js";
import GiftCard from "../../POM/giftcardweb.js";
import Jewelsubscribe from "../../POM/Jewellrysubscribeweb.js";

export const test = base.extend({

  registerPage: async ({ page }, use) => {
    const registerPage = new Register(page);
    await use(registerPage);
  },

  loginPage: async ({ page }, use) => {
    const loginPage = new Login(page);
    await use(loginPage);
  },

  searchPage: async ({ page }, use) => {
    const searchPage = new Search(page);
    await use(searchPage);
  },

  addToCartPage: async ({ page }, use) => {
    const addToCartPage = new AddToCart(page);
    await use(addToCartPage);
  },

  cartPage: async ({ page }, use) => {
    const cartPage = new CartPage(page);
    await use(cartPage);
  },

  billingCheckout: async ({ page }, use) => {
    const billingCheckout = new BillingCheckout(page);
    await use(billingCheckout);
  },

  categoryPage: async ({ page }, use) => {
    const categoryPage = new Category(page);
    await use(categoryPage);
  },

  computerPage: async ({ page }, use) => {
    const computerPage = new Computer(page);
    await use(computerPage);
  },

  giftCardPage: async ({ page }, use) => {
    const giftCardPage = new GiftCard(page);
    await use(giftCardPage);
  },

  jewelsubscribePage: async ({ page }, use) => {
    const jewelsubscribe = new Jewelsubscribe(page);
    await use(jewelsubscribe);
  },

});

export { expect };