import {test,expect} from "@playwright/test"
import Register from "../POM/Registerweb.js"
import testdata from "../Testdata/webdemo.json"
import Login from "../POM/loginweb.js"
import search from "../POM/searchweb.js"
import addToCart from "../POM/Addtocartweb.js"
import cartPage from "../POM/cartcheckoutweb.js"
import BillingCheckout from "../POM/billingweb.js"
import Category from "../POM/category.js"
import Computer from "../POM/computersweb.js"
import GiftCard from "../POM/giftcardweb.js"


test("test 01 Register", async({page})=>{
    let regurl = testdata.regurl
    let firstName = testdata.firstName
    let lastName = testdata.lastName
    let email = testdata.email
    let password = testdata.password
    let confirmPassword = testdata.confirmPassword

    //create object
    let Registerpage = new Register(page);
    //launch url
    await page.goto(regurl)
    //verify Register url and page
    await expect(page).toHaveURL("https://demowebshop.tricentis.com/register")
    await expect(Registerpage.registerButton).toBeVisible()

    //select Gender Female
    await Registerpage.female.click()
    // verify
    await expect(Registerpage.female).toBeChecked()
    //First name
    await Registerpage.firstNameTF.fill(firstName)
    //verify 
    await expect(Registerpage.firstNameTF).toHaveValue(firstName);

    //Lastname
    await Registerpage.lastNameTF.fill(lastName)
    //verify
    await expect(Registerpage.lastNameTF).toHaveValue(lastName);
    //Email
    await Registerpage.emailTF.fill(email)
    //verify
    await expect(Registerpage.emailTF).toHaveValue(email)
    //Password
    await Registerpage.passwordTF.fill(password)
    //verfiy
    await expect(Registerpage.passwordTF).toHaveValue(password);
    //Confirm password
    await Registerpage.confirmPasswordTF.fill(confirmPassword)//verfiy
    await expect(Registerpage.confirmPasswordTF).toHaveValue(confirmPassword);
    //click on Register
    await Registerpage.registerButton.click();
    //verify
    await expect(page.getByText("Your registration completed")).toBeVisible()
    // await expect(page.getByRole("link", { name: "Continue" })).toBeVisible();
    await Registerpage.continueButton.click();




})

test("test 02 Register with invalid email", async({page})=>{
    let regurl = testdata.regurl
    let firstName = testdata.firstName
    let lastName = testdata.lastName
    let invalidEmail = testdata.invalidEmail
    let password = testdata.password
    let confirmPassword = testdata.confirmPassword
    

    //create object
    let Registerpage = new Register(page);
    //launch url
    await page.goto(regurl)
    //verify Register url and page
    await expect(page).toHaveURL("https://demowebshop.tricentis.com/register")
    await expect(Registerpage.registerButton).toBeVisible()

    //select Gender Female
    await Registerpage.female.click()
    // verify
    await expect(Registerpage.female).toBeChecked()
    //First name
    await Registerpage.firstNameTF.fill(firstName)
    //verify 
    await expect(Registerpage.firstNameTF).toHaveValue(firstName);

    //Lastname
    await Registerpage.lastNameTF.fill(lastName)
    //verify
    await expect(Registerpage.lastNameTF).toHaveValue(lastName);
    //Email
    await Registerpage.emailTF.fill(invalidEmail)
    //verify
    await expect(Registerpage.emailTF).toHaveValue(invalidEmail)
    //=========await expect(page.locator('//span[@for="Email"]')).toBeVisible()
    //Password
    await Registerpage.passwordTF.fill(password)
    //verfiy
    await expect(Registerpage.passwordTF).toHaveValue(password);
    //Confirm password
    await Registerpage.confirmPasswordTF.fill(confirmPassword)//verfiy
    await expect(Registerpage.confirmPasswordTF).toHaveValue(confirmPassword);
    //click on Register
    await Registerpage.registerButton.click();
    //verify
     await expect(page.locator('//span[@for="Email"]')).toBeVisible("Wrong email")
    // await expect(page.getByText("Your registration completed")).toBeVisible()
    // // await expect(page.getByRole("link", { name: "Continue" })).toBeVisible();
    // await Registerpage.continueButton.click();

})

test("test 03 Register with short passwod ", async({page})=>{
    let regurl = testdata.regurl
    let firstName = testdata.firstName
    let lastName = testdata.lastName
    let email = testdata.email
    let shortPassword = testdata.shortPassword
    let cshortPassword = testdata.cshortPassword
    

    //create object
    let Registerpage = new Register(page);
    //launch url
    await page.goto(regurl)
    //verify Register url and page
    await expect(page).toHaveURL("https://demowebshop.tricentis.com/register")
    await expect(Registerpage.registerButton).toBeVisible()

    //select Gender Female
    await Registerpage.female.click()
    // verify
    await expect(Registerpage.female).toBeChecked()
    //First name
    await Registerpage.firstNameTF.fill(firstName)
    //verify 
    await expect(Registerpage.firstNameTF).toHaveValue(firstName);

    //Lastname
    await Registerpage.lastNameTF.fill(lastName)
    //verify
    await expect(Registerpage.lastNameTF).toHaveValue(lastName);
    //Email
    await Registerpage.emailTF.fill(email)
    //verify
    await expect(Registerpage.emailTF).toHaveValue(email)
    //Password
    await Registerpage.passwordTF.fill(shortPassword)
    //verfiy
    await expect(Registerpage.passwordTF).toHaveValue(shortPassword);
    //Confirm password
    await Registerpage.confirmPasswordTF.fill(cshortPassword)//verfiy
    await expect(Registerpage.confirmPasswordTF).toHaveValue(cshortPassword);
    //click on Register
    await Registerpage.registerButton.click();
    //verify
    await expect(page.locator('//span[@for="Password"]')).toBeVisible("The password should have at least 6 characters.")
    // await expect(page.getByRole("link", { name: "Continue" })).toBeVisible();
    // await Registerpage.continueButton.click();

})

test.skip("test 04 Register with mismatchedpassword ", async({page})=>{
    let regurl = testdata.regurl
    let firstName = testdata.firstName
    let lastName = testdata.lastName
    let email = testdata.email
    let invalidPassword = testdata.invalidPassword
    let mismatchedPassword = testdata.mismatchedPassword
    

    //create object
    let Registerpage = new Register(page);
    //launch url
    await page.goto(regurl)
    //verify Register url and page
    await expect(page).toHaveURL("https://demowebshop.tricentis.com/register")
    await expect(Registerpage.registerButton).toBeVisible()

    //select Gender Female
    await Registerpage.female.click()
    // verify
    await expect(Registerpage.female).toBeChecked()
    //First name
    await Registerpage.firstNameTF.fill(firstName)
    //verify 
    await expect(Registerpage.firstNameTF).toHaveValue(firstName);

    //Lastname
    await Registerpage.lastNameTF.fill(lastName)
    //verify
    await expect(Registerpage.lastNameTF).toHaveValue(lastName);
    //Email
    await Registerpage.emailTF.fill(email)
    //verify
    await expect(Registerpage.emailTF).toHaveValue(email)
    //Password
    await Registerpage.passwordTF.fill(invalidPassword)
    //verfiy
    await expect(Registerpage.passwordTF).toHaveValue(invalidPassword);
    //Confirm password
    await Registerpage.confirmPasswordTF.fill(mismatchedPassword)//verfiy
    await expect(Registerpage.confirmPasswordTF).toHaveValue(mismatchedPassword);
    //click on Register
    await Registerpage.registerButton.click();
    //verify
    await expect(page.locator('//span[@for="ConfirmPassword"]')).toBeVisible("The password and confirmation password do not match.")
    // await expect(page.getByRole("link", { name: "Continue" })).toBeVisible();
    // await Registerpage.continueButton.click();

})

test("test 05 Login", async({page})=>{
    let email = testdata.email
    let password = testdata.password
    let loginurl = testdata.loginurl
    
    //create object
    let loginwebpage = new Login(page)

    //url
    await page.goto(loginurl)


    await loginwebpage.loginLink.click();
    // await expect(loginwebpage.loginLink).toHaveURL("https://demowebshop.tricentis.com/login")

    //url
    await page.goto(loginurl)
    await expect(page).toHaveURL("https://demowebshop.tricentis.com/login")

    //email
    await loginwebpage.emailTF.fill(email)
    await expect(loginwebpage.emailTF).toBeVisible();

    //pwd
    await loginwebpage.passwordTF.fill(password)
    await expect(loginwebpage.passwordTF).toBeVisible();
    //login
    await loginwebpage.loginButton.click()

    //logout
    // await loginwebpage.logoutLink.click()
    // await expect(page).not.toHaveURL("https://demowebshop.tricentis.com/login");
    



})

test("test 06 search", async({page})=>{
    let url = testdata.url
    let productName = testdata.productName
    //object
    let searchpage = new search(page)

    await page.goto(url)
    //search fill
    await searchpage.searchTF.fill(productName)
    //click search button
    await searchpage.searchButton.click()
    //verify product
    await expect(searchpage.searchButton.first()).toBeVisible(productName)


})

test("test 07 Health book add to cart and checkout", async({page})=>{
    test.slow()
    let urladd = testdata.urladd
    // let shoppingCart = testdata.shoppingCart
    // let order = testdata.order
    // let pagesize = testdata.pagesize
    // let viewmode = testdata.viewmode
    // let country = testdata.country
    // let termsofservice = testdata.termsofservice
    // let checkout = testdata.checkout
    // let carturl = testdata.carturl
    // let asguest = testdata.asguest

    let firstName = testdata.firstName
    let lastName = testdata.lastName
    let email = testdata.email
    let company = testdata.company
    let city = testdata.city
    let address = testdata.address
    let postalCode = testdata.postalCode
    let pno = testdata.pno

    let addtocartpage = new addToCart(page)
    
    await page.goto(urladd)
    // await expect(page).toHaveURL("https://demowebshop.tricentis.com/search?q=Health+book")

    
    //add to cart
    await addtocartpage.order.selectOption("Price: High to Low")
    await addtocartpage.pagesize.selectOption("12")
    await addtocartpage.viewmode.selectOption("List")
    await addtocartpage.addtocartButton.click({force:true})
    await page.reload({waitUntil:"load"})
    //verify
    // await expect(addtocartpage.addtocartButton).toBeVisible("The product has been added to your shopping cart")

    await addtocartpage.shoppingCart.click()
    // await expect(page).toHaveURL("https://demowebshop.tricentis.com/cart")
    // await expect(page.getByText("Your Shopping Cart is empty!")).toBeVisible()

    await addtocartpage.country.selectOption({label :"India"})
    await addtocartpage.termsofservice.check()
    await addtocartpage.checkout.click()
    await addtocartpage.asguest.click()
    // await expect(page).toHaveURL("https://demowebshop.tricentis.com/login/checkoutasguest?returnUrl=%2Fcart")
    // await page.waitForTimeout(3000)

    await addtocartpage.firstNameTF.fill(firstName)
    await addtocartpage.lastNameTF.fill(lastName)
    await addtocartpage.emailTF.fill(email)
    await addtocartpage.cityTF.fill(city)
    await addtocartpage.countryTF.selectOption({value : "41"})
    await addtocartpage.addressTF.fill(address)
    await addtocartpage.postalCodeTF.fill(postalCode)
    await addtocartpage.pnoTF.fill(pno)
    await addtocartpage.continueButton.click()
    //shipping address
    await addtocartpage.shippingAddress.click()
    await addtocartpage.inStorePickup.check()
    await addtocartpage.continueButton2.click({force:true})
    //payment method - https://demowebshop.tricentis.com/onepagecheckout
    await addtocartpage.paymentmtd.click()
    await addtocartpage.continueButton3.click()
    //payment information
    await addtocartpage.continueButton4.click()
    //confirm order
    await addtocartpage.confirm.click()
    //https://demowebshop.tricentis.com/checkout/completed/
    await addtocartpage.continueButton5.click({force:true})

})

test("test 08 click on Computers", async({page})=>{
    let url = testdata.url

    let computerspage = new Computer(page)
    let categories = new Category(page)

   await page.goto(url)
   await categories.computerlink.click()
   await computerspage.desktop.click()
   await computerspage.computertx.click()
   await computerspage.addtocartbutton.click({force:true})
   await page.reload({waitUntil:"load"})
   await computerspage.shoppingcartlink.click()
   await computerspage.removefmcart.check()
   await computerspage.updateshopcart.click()
   // Verify cart URL
    await expect(page).toHaveURL("https://demowebshop.tricentis.com/cart");

// Verify Shopping cart heading
    await expect(page.getByRole("heading", { name: "Shopping cart" })).toBeVisible();

// Verify empty cart message
    await expect(page.getByText("Your Shopping Cart is empty!")).toBeVisible();
})

test("test 09 gift cards", async({page})=>{
    let url = testdata.url
    let receipientname = testdata.receipientname
    let yourname = testdata.yourname
    let message = testdata.message
    let frdsemail = testdata.frdsemail
    let yremailaddrs = testdata.yremailaddrs
    let personalmsg = testdata.personalmsg

    let girftcardpage = new GiftCard(page)
    let categories = new Category(page)

   await page.goto(url)
   await categories.giftcardlinks.click()
   await girftcardpage.physicalgiftcard.click()
   await girftcardpage.receipientnameTF.fill(receipientname)
   await girftcardpage.yournameTF.fill(yourname)
   await girftcardpage.messageTF.fill(message)
   await girftcardpage.addtowishlistTF.click({force:true})
   await expect(page.getByText("The product has been added to your wishlist") ).toBeVisible();
    await page.reload({waitUntil:"load"})
//    The product has been added to your wishlist

    await girftcardpage.wishlistlink.click({force:true})
    await page.reload({waitUntil:"load"})
    await girftcardpage.emailafrdbutton.click()
    // Verify URL
    await expect(page).toHaveURL("https://demowebshop.tricentis.com/emailwishlist");
    await girftcardpage.frdsemailTF.fill(frdsemail)
    await girftcardpage.yremailaddrsTF.fill(yremailaddrs)
    await girftcardpage.personalmsgTF.fill(personalmsg)
    await girftcardpage.sendemailbutton.click()
    //Only registered customers can use email a friend feature
    // Verify registered-customer warning
await expect(page.getByText("Only registered customers can use email a friend feature") ).toBeVisible();


})







