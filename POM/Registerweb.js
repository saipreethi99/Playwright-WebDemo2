class Register{
    constructor(page){
        this.male = page.locator("#gender-male")
        this.female = page.locator("#gender-female")
        this.firstNameTF = page.locator('#FirstName');
        this.lastNameTF = page.locator('#LastName');
        this.emailTF = page.locator('#Email')
        this.passwordTF = page.locator('#Password')
        this.confirmPasswordTF = page.locator('#ConfirmPassword')

        this.registerButton = page.locator('#register-button')

        this.continueButton = page.getByRole("button", {name: "Continue"})
        
    }
}
export default Register