class BillingCheckout {
    constructor(page) {
        // this.checkoutAsGuest = page.getByRole("button", { name: /Checkout as Guest/i });
        this.firstNameTF = page.locator("#BillingNewAddress_FirstName");
        this.lastNameTF = page.locator("#BillingNewAddress_LastName");
        this.emailTF = page.locator("#BillingNewAddress_Email");
        this.countryTF = page.locator("#BillingNewAddress_CountryId");
        this.cityTF = page.locator("#BillingNewAddress_City");
        this.addressTF = page.locator("#BillingNewAddress_Address1");
        this.postalCodeTF = page.locator("#BillingNewAddress_ZipPostalCode");
        this.pnoTF = page.locator("#BillingNewAddress_PhoneNumber");
        this.continueButton = page.locator('//input[@title="Continue"]').first()
    }
}
export default BillingCheckout