// import {test,expect} from "@playwright/test"
import { test, expect } from "./fixture/fixture.js"
import dotenv from 'dotenv'
import testdata from "../Testdata/webdemo.json"
dotenv.config();

test.use ({
  storageState: "playwright/.auth/user.json",
});


test("test 14 open Gift Cards category",
  async ({ page, giftCardPage, categoryPage }) => {

    const url = '/'

    await page.goto(url);

    await categoryPage.giftcardlinks.click();
    //Verify browser title
    await expect(page).toHaveTitle(/Demo Web Shop/);
    await expect(page).toHaveURL(/gift-cards/);

    // Verify main navigation
    for (const category of [
    "Books",
    "Computers",
    "Electronics",
    "Apparel & Shoes",
    "Digital downloads",
    "Jewelry",
    "Gift Cards"
     ]) {await expect( page.getByRole("link", { name: category, exact: true }).first()).toBeVisible(); }
     //Verify manufacturer section
     await expect(page.locator(".block-manufacturer-navigation")
      .getByText("Tricentis", { exact: true }) ).toBeVisible();

      //verify Search button
      await expect(page.getByRole('button', { name: 'Search', exact: true }) ).toBeVisible();

  })

  test("test 15 select physical gift card and add to Wishlist",
   async ({ page, giftCardPage, categoryPage }) => {

    const url = '/gift-cards'
    const receipientname = testdata.receipientname;
    const yourname = testdata.yourname;
    const message = testdata.message;

    await page.goto(url);
    
    await giftCardPage.physicalgiftcard.click();

    //verify recipient and sender fields
    await expect(giftCardPage.receipientnameTF).toBeVisible();
    await expect(giftCardPage.yournameTF).toBeVisible();
    await expect(giftCardPage.messageTF).toBeVisible();

    await giftCardPage.receipientnameTF.fill(receipientname);
    await giftCardPage.yournameTF.fill(yourname);
    await giftCardPage.messageTF.fill(message);

    // Verify Add to Wishlist button
    await expect(giftCardPage.addtowishlistTF).toBeVisible();

    await giftCardPage.addtowishlistTF.click({ force: true });
    
    await expect(
      page.getByText("The product has been added to your wishlist")
    ).toBeVisible();

    await page.reload({ waitUntil: "load" });

    await giftCardPage.wishlistlink.click({ force: true });
    await page.reload({ waitUntil: "load" });
    await expect(page).toHaveURL(/wishlist/);
  })

  test("test 16 view wishlist and email wishlist to a friend",
   async ({ page, giftCardPage, categoryPage }) => {

    const url = '/wishlist'
    // https://demowebshop.tricentis.com/wishlist
    const frdsemail = testdata.frdsemail;
    const yremailaddrs = testdata.yremailaddrs;
    const personalmsg = testdata.personalmsg;

    await page.goto(url);

    await giftCardPage.emailafrdbutton.click();

    await expect(page).toHaveURL(
      "https://demowebshop.tricentis.com/emailwishlist"
    );

    await giftCardPage.frdsemailTF.fill(frdsemail);
    await giftCardPage.yremailaddrsTF.fill(yremailaddrs);
    await giftCardPage.personalmsgTF.fill(personalmsg);

    await giftCardPage.sendemailbutton.click();

    // await expect(page.getByText("Only registered customers can use email a friend feature")
    // ).toBeVisible();
});




