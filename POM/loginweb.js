class Login{
    constructor(page){
        this.loginLink = page.locator('//a[@href="/login"]')
        this.emailTF = page.locator("#Email");
        this.passwordTF = page.locator("#Password");
        this.loginButton = page.locator('//input[@class="button-1 login-button"]');
        this.logoutLink = page.getByRole("link", {name: "Log out"})

    }
}

export default Login