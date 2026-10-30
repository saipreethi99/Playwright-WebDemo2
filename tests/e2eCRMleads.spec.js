import {test} from "@playwright/test"
import signin from "../POM/signin.js"
import home from "../POM/homepage.js"
import createLeads from "../POM/createleads.js"
import testdata from "../Testdata/e2eCRMleads.json"

test("Leads", async({page})=>{
    let url = testdata.url
    let username = testdata.username
    let password = testdata.password
    let firstname = testdata.firstname
    let lastname = testdata.lastname
    let company = testdata.company
    let mobile = testdata.mobile
    let email = testdata.email
    let description = testdata.description

    //create object
    let signinpage = new signin(page)
    let homepage = new home(page)
    let createleadspage = new createLeads(page)

    //launch url -http://49.249.29.4:8888/
    await page.goto(url)
    await page.waitForLoadState("networkidle");
    //username
    await signinpage.usernameTF.fill(username)
    await page.waitForLoadState("networkidle");
    //password
    await signinpage.passwordTF.fill(password)
    //login button click
    await signinpage.loginButton.click()
    await page.waitForLoadState("networkidle");
    //click on leads
    await homepage.leadslink.click()
    await page.waitForLoadState("networkidle");
    //click on +
    await homepage.createlead.click()
    await page.waitForLoadState("networkidle");
    //dropdown MS
    await createleadspage.FDropdown.selectOption({value : "Ms."})
    await page.waitForTimeout(5000)
    await page.waitForLoadState("networkidle");
    
    //firstname Sai
    await createleadspage.firstnameTF.fill(firstname)
    //lastname Chandubatla
    await createleadspage.lastnameTF.fill(lastname)
    //company
    await createleadspage.companyTF.fill(company)
    //mobile
    await createleadspage.mobilenoTF.fill(mobile)
    //email
    await createleadspage.emailTF.fill(email)
    //description
    await createleadspage.descriptionTextarea.fill(description)
    //save button click
    await createleadspage.saveButton.click()
    await page.waitForLoadState("networkidle");
    // await page.waitForTimeout(5000)
    //take screenshot
    await page.screenshot({path: "screenshot/ss1.png"})
//click on contacts

// 

})