import {test} from "@playwright/test"
import home from "../POM/homepage.js"
import createOrgs from "../POM/createorgs.js"
import signin from "../POM/signin.js"
import testdata from "../Testdata/e2eCRMleads.json"

test("organisation CRM", async({page})=>{
    let url = testdata.url
    let username = testdata.username
    let password = testdata.password
    let orgname = testdata.orgname
    let website = testdata.website
    let employees = testdata.employees
    let annualrevenue = testdata.annualrevenue
    //create object
    let signinpage = new signin(page)
    let homepage = new home(page)
    let createorgs = new createOrgs(page)
    

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
    //click on orgs
    await homepage.orgslink.click()
    await page.waitForLoadState("networkidle");
    
    //click on + create org
    await homepage.createorgs.click()
    await page.waitForLoadState("networkidle");
    //Org name
    await createorgs.orgname.fill(orgname)
    //website
    await createorgs.website.fill(website)
    //Employees
    await createorgs.employees.fill(employees)
    //Industry 
    await createorgs.industry.selectOption({value: "Banking"})
    // type
    await createorgs.type.selectOption({value:"Customer"})
    //Annual Revenue
    await createorgs.annualrevenue.fill(annualrevenue)
    //save button
    await createorgs.saveButton.click()
    await page.waitForLoadState("networkidle");
    //take screenshot
    await page.screenshot({path : "screenshot/orgs1.png"})

})