class createLeads{
    constructor(page){
        this.FDropdown = page.locator('//select[@name="salutationtype"]')
        this.firstnameTF = page.locator('//input[@name="firstname"]')
        this.lastnameTF = page.locator('//input[@name="lastname"]')
        this.companyTF = page.locator('//input[@name="company"]')
        this.mobilenoTF = page.locator("#mobile")
        this.emailTF = page.locator("#email")
        this.descriptionTextarea = page.locator('//textarea[@name="description"]')
        this.saveButton = page.locator('//input[@class="crmbutton small save"]')
    }
}
export default createLeads