
import { test, expect } from "./fixture/fixture.js";
import Login from "../POM/loginweb.js";
import testdata from "../Testdata/webdemo.json"
import dotenv from "dotenv";

dotenv.config();

test("Login and save storage state", async ({ page, loginPage }) => {
//   const testdata = data[0]

  const baseURL = process.env.BASE_URL;
  const email = process.env.EMAIL;
  const password = process.env.PASSWORD;

  await page.goto(`${baseURL}/login`);

  await loginPage.emailTF.fill(email);
  await loginPage.passwordTF.fill(password);
  await loginPage.loginButton.click();

  // Verify successful login
  await expect(loginPage.loginLink).not.toBeVisible();

  // Save login session
  await page.context().storageState({
    path: "playwright/.auth/user.json",
  });
});























// import { test, expect } from "./fixture/fixture.js";
// import dotenv from "dotenv";
// import testdata from "../Testdata/webdemo.json";

// dotenv.config();

// test("Login and save storage state", async ({ page, loginPage }) => {
//   await page.goto(testdata.loginurl);

//   await loginPage.emailTF.fill(testdata.email);
//   await loginPage.passwordTF.fill(testdata.password);
//   await loginPage.loginButton.click();

//   // Verify that login was successful
//   await expect(page.getByText(testdata.email)).toBeVisible();

//   // Save authentication state
//   await page.context().storageState({
//     path: "playwright/.auth/user.json",
//   });
// });
