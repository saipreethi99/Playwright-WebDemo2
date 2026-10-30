class createContacts{
    constructor(page){
        this.firstnameTF = page.locator('//input[@name="firstname"]')
        this.lastnameTF = page.locator('//input[@name="lastname"]')

    }
}
export default createContacts