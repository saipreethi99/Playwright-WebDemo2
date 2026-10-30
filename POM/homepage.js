class home{
    constructor(page){
        this.leadslink = page.getByRole("link", {name : "Leads"})
        this.createlead = page.locator('//img[@title="Create Lead..."]')
        this.orgslink = page.getByRole("link", {name : "ORGANIZATIONS"})
        this.createorgs = page.locator('//img[@title="Create Organization..."]')
    }
}
export default home