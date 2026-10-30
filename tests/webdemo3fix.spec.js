// import {test,expect} from "@playwright/test"
import { test, expect } from "./fixture/fixture.js"
import dotenv from 'dotenv'
import testdata from "../Testdata/webdemo.json"
dotenv.config();

test("test 01 Register", async ({ page, registerPage }) => {
  const regurl = testdata.regurl;
  const firstName = testdata.firstName;
  const lastName = testdata.lastName;
  const email = testdata.email;
  const password = testdata.password;
  const confirmPassword = testdata.confirmPassword;

  await page.goto(regurl);

  await expect(page).toHaveURL(
    "https://demowebshop.tricentis.com/register"
  );
  await expect(registerPage.registerButton).toBeVisible();

  // Gender
  await registerPage.female.click();
  await expect(registerPage.female).toBeChecked();

  // First name
  await registerPage.firstNameTF.fill(firstName);
  await expect(registerPage.firstNameTF).toHaveValue(firstName);

  // Last name
  await registerPage.lastNameTF.fill(lastName);
  await expect(registerPage.lastNameTF).toHaveValue(lastName);

  // Email
  await registerPage.emailTF.fill(email);
  await expect(registerPage.emailTF).toHaveValue(email);

  // Password
  await registerPage.passwordTF.fill(password);
  await expect(registerPage.passwordTF).toHaveValue(password);

  // Confirm password
  await registerPage.confirmPasswordTF.fill(confirmPassword);
  await expect(registerPage.confirmPasswordTF).toHaveValue(confirmPassword);

  // Register
  await registerPage.registerButton.click();

  await expect(
    page.getByText("Your registration completed")
  ).toBeVisible();

  await registerPage.continueButton.click();
});

test("test 02 Register with invalid email", async ({ page, registerPage }) => {
  const regurl = testdata.regurl;
  const firstName = testdata.firstName;
  const lastName = testdata.lastName;
  const invalidEmail = testdata.invalidEmail;
  const password = testdata.password;
  const confirmPassword = testdata.confirmPassword;

  await page.goto(regurl);

  await expect(page).toHaveURL(
    "https://demowebshop.tricentis.com/register"
  );
  await expect(registerPage.registerButton).toBeVisible();

  await registerPage.female.click();
  await expect(registerPage.female).toBeChecked();

  await registerPage.firstNameTF.fill(firstName);
  await expect(registerPage.firstNameTF).toHaveValue(firstName);

  await registerPage.lastNameTF.fill(lastName);
  await expect(registerPage.lastNameTF).toHaveValue(lastName);

  await registerPage.emailTF.fill(invalidEmail);
  await expect(registerPage.emailTF).toHaveValue(invalidEmail);

  await registerPage.passwordTF.fill(password);
  await expect(registerPage.passwordTF).toHaveValue(password);

  await registerPage.confirmPasswordTF.fill(confirmPassword);
  await expect(registerPage.confirmPasswordTF).toHaveValue(confirmPassword);

  await registerPage.registerButton.click();

  await expect(page.locator('//span[@for="Email"]')).toBeVisible();
});

test("test 03 Register with short password", async ({ page, registerPage }) => {
  const regurl = testdata.regurl;
  const firstName = testdata.firstName;
  const lastName = testdata.lastName;
  const email = testdata.email;
  const shortPassword = testdata.shortPassword;
  const cshortPassword = testdata.cshortPassword;

  await page.goto(regurl);

  await expect(page).toHaveURL(
    "https://demowebshop.tricentis.com/register"
  );
  await expect(registerPage.registerButton).toBeVisible();

  await registerPage.female.click();
  await expect(registerPage.female).toBeChecked();

  await registerPage.firstNameTF.fill(firstName);
  await expect(registerPage.firstNameTF).toHaveValue(firstName);

  await registerPage.lastNameTF.fill(lastName);
  await expect(registerPage.lastNameTF).toHaveValue(lastName);

  await registerPage.emailTF.fill(email);
  await expect(registerPage.emailTF).toHaveValue(email);

  await registerPage.passwordTF.fill(shortPassword);
  await expect(registerPage.passwordTF).toHaveValue(shortPassword);

  await registerPage.confirmPasswordTF.fill(cshortPassword);
  await expect(registerPage.confirmPasswordTF).toHaveValue(cshortPassword);

  await registerPage.registerButton.click();

  await expect(page.locator('//span[@for="Password"]')).toBeVisible();
});

test("test 04 Register with mismatched password", async ({ page, registerPage }) => {
  const regurl = testdata.regurl;
  const firstName = testdata.firstName;
  const lastName = testdata.lastName;
  const email = testdata.email;
  const invalidPassword = testdata.invalidPassword;
  const mismatchedPassword = testdata.mismatchedPassword;

  await page.goto(regurl);

  await expect(page).toHaveURL(
    "https://demowebshop.tricentis.com/register"
  );
  await expect(registerPage.registerButton).toBeVisible();

  await registerPage.female.click();
  await expect(registerPage.female).toBeChecked();

  await registerPage.firstNameTF.fill(firstName);
  await expect(registerPage.firstNameTF).toHaveValue(firstName);

  await registerPage.lastNameTF.fill(lastName);
  await expect(registerPage.lastNameTF).toHaveValue(lastName);

  await registerPage.emailTF.fill(email);
  await expect(registerPage.emailTF).toHaveValue(email);

  await registerPage.passwordTF.fill(invalidPassword);
  await expect(registerPage.passwordTF).toHaveValue(invalidPassword);

  await registerPage.confirmPasswordTF.fill(mismatchedPassword);
  await expect(registerPage.confirmPasswordTF).toHaveValue(mismatchedPassword);

  await registerPage.registerButton.click();

  await expect(
    page.locator('//span[@for="ConfirmPassword"]')
  ).toBeVisible();
});

test("test 05 Login", async ({ page, loginPage }) => {
    //dot env included
    let email = process.env.EMAIL
    let password = process.env.PASSWORD
    let loginurl = '/login'

  await page.goto(loginurl);

  await loginPage.loginLink.click();

  await page.goto(loginurl);
  await expect(page).toHaveURL(
    "https://demowebshop.tricentis.com/login"
  );

  await loginPage.emailTF.fill(email);
  await expect(loginPage.emailTF).toBeVisible();

  await loginPage.passwordTF.fill(password);
  await expect(loginPage.passwordTF).toBeVisible();

  await loginPage.loginButton.click();
});

test("test 06 search", async ({ page, searchPage }) => {
    // let url = testdata.url
    let url = '/'
    let productName = testdata.productName

  await page.goto(url);

  await searchPage.searchTF.fill(productName);
  await searchPage.searchButton.click();

  await expect(searchPage.searchButton.first()).toBeVisible();
});

test("test 07 Health book add to cart and checkout",
  async ({ page, addToCartPage }) => {

    test.slow();

    const urladd = testdata.urladd;
    const firstName = testdata.firstName;
    const lastName = testdata.lastName;
    const email = testdata.email;
    const city = testdata.city;
    const address = testdata.address;
    const postalCode = testdata.postalCode;
    const pno = testdata.pno;

    await page.goto(urladd);

    // Add to cart
    await addToCartPage.order.selectOption("Price: High to Low");
    await addToCartPage.pagesize.selectOption("12");
    await addToCartPage.viewmode.selectOption("List");
    await addToCartPage.addtocartButton.click({ force: true });

    await page.reload({ waitUntil: "load" });
    await addToCartPage.shoppingCart.click();

    // Checkout
    await addToCartPage.country.selectOption({ label: "India" });
    await addToCartPage.termsofservice.check();
    await addToCartPage.checkout.click();
    await addToCartPage.asguest.click();

    // Billing details
    await addToCartPage.firstNameTF.fill(firstName);
    await addToCartPage.lastNameTF.fill(lastName);
    await addToCartPage.emailTF.fill(email);
    await addToCartPage.cityTF.fill(city);
    await addToCartPage.countryTF.selectOption({ value: "41" });
    await addToCartPage.addressTF.fill(address);
    await addToCartPage.postalCodeTF.fill(postalCode);
    await addToCartPage.pnoTF.fill(pno);
    await addToCartPage.continueButton.click();

    // Shipping
    await addToCartPage.shippingAddress.click();
    await addToCartPage.inStorePickup.check();
    await addToCartPage.continueButton2.click({ force: true });

    // Payment method
    await addToCartPage.paymentmtd.click();
    await addToCartPage.continueButton3.click();

    // Payment information
    await addToCartPage.continueButton4.click();

    // Confirm order
    await addToCartPage.confirm.click();
    await addToCartPage.continueButton5.click({ force: true });
});

test("test 08 click on Computers",
  async ({ page, computerPage, categoryPage }) => {

    const url = '/'

    await page.goto(url);

    await categoryPage.computerlink.click();
    await computerPage.desktop.click();
    await computerPage.computertx.click();
    await computerPage.addtocartbutton.click({ force: true });

    await page.reload({ waitUntil: "load" });

    await computerPage.shoppingcartlink.click();
    await computerPage.removefmcart.check();
    await computerPage.updateshopcart.click();

    await expect(page).toHaveURL(
      "https://demowebshop.tricentis.com/cart"
    );

    await expect(
      page.getByRole("heading", { name: "Shopping cart" })
    ).toBeVisible();

    await expect(
      page.getByText("Your Shopping Cart is empty!")
    ).toBeVisible();
});

test("test 09 gift cards",
  async ({ page, giftCardPage, categoryPage }) => {

    const url = '/'
    const receipientname = testdata.receipientname;
    const yourname = testdata.yourname;
    const message = testdata.message;
    const frdsemail = testdata.frdsemail;
    const yremailaddrs = testdata.yremailaddrs;
    const personalmsg = testdata.personalmsg;

    await page.goto(url);

    await categoryPage.giftcardlinks.click();
    await giftCardPage.physicalgiftcard.click();

    await giftCardPage.receipientnameTF.fill(receipientname);
    await giftCardPage.yournameTF.fill(yourname);
    await giftCardPage.messageTF.fill(message);

    await giftCardPage.addtowishlistTF.click({ force: true });

    await expect(
      page.getByText("The product has been added to your wishlist")
    ).toBeVisible();

    await page.reload({ waitUntil: "load" });

    await giftCardPage.wishlistlink.click({ force: true });
    await page.reload({ waitUntil: "load" });

    await giftCardPage.emailafrdbutton.click();

    await expect(page).toHaveURL(
      "https://demowebshop.tricentis.com/emailwishlist"
    );

    await giftCardPage.frdsemailTF.fill(frdsemail);
    await giftCardPage.yremailaddrsTF.fill(yremailaddrs);
    await giftCardPage.personalmsgTF.fill(personalmsg);

    await giftCardPage.sendemailbutton.click();

    await expect(
      page.getByText(
        "Only registered customers can use email a friend feature"
      )
    ).toBeVisible();
});

test("test 10 subscribe to Jewellery", async({page,jewelsubscribePage,categoryPage})=>{
    let url = '/'
    let email = process.env.EMAIL

    // let jewelsubscribepage = new Jewelsubscribe(page)
    // let categories = new Category(page)

    await page.goto(url)
    await categoryPage.jewellerylink.click()
    await jewelsubscribePage.signupnewsletrTF.fill(email)
    await jewelsubscribePage.subscribe.click()
    await expect(page.getByText("Thank you for signing up! A verification email has been sent. We appreciate your interest.")).toBeVisible()
})



