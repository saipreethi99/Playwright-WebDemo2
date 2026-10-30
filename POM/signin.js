class signin{
    constructor(page){
        this.usernameTF = page.locator('//input[@name="user_name"]')
        this.passwordTF = page.locator('//input[@name="user_password"]')
        this.loginButton = page.locator("#submitButton")
    }
}
export default signin