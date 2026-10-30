class createOrgs{
    constructor(page){
        this.orgname = page.locator('//input[@name="accountname"]')
        this.website = page.locator('//input[@name="website"]')
        this.employees = page.locator('//input[@name="employees"]')
        this.industry = page.locator('//select[@name="industry"]')
        this.type = page.locator('//select[@name="accounttype"]')
        this.annualrevenue = page.locator('//input[@name="annual_revenue"]')
        this.saveButton = page.locator('//input[@class="crmbutton small save"]')
    }
}
export default createOrgs