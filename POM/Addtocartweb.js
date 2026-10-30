class addToCart{
    constructor(page){
        this.addtocartButton = page.locator('//input[@value="Add to cart"]').first()
        this.order = page.locator("#products-orderby")
        this.pagesize = page.locator("#products-pagesize")
        this.viewmode = page.locator("#products-viewmode")
        this.shoppingCart = page.locator('//span[@class="cart-label" and text()="Shopping cart"]')

        //this.country = page.locator("#CountryId").first()
        this.quantityTF = page.locator("input.qty-input").first();
        this.country = page.getByLabel("Country:")
        this.termsofservice = page.locator("#termsofservice")
        this.checkout = page.locator("#checkout").first()
        this.asguest = page.locator('//input[@value="Checkout as Guest"]')

        // this.checkoutAsGuest = page.getByRole("button", { name: /Checkout as Guest/i });
        this.newaddress = page.locator("#billing-address-select").first()
        this.continueButtonn = page.locator('//input[@title="Continue"]').first()
        this.firstNameTF = page.locator("#BillingNewAddress_FirstName");
        this.lastNameTF = page.locator("#BillingNewAddress_LastName");
        this.emailTF = page.locator("#BillingNewAddress_Email");
        this.countryTF = page.locator("#BillingNewAddress_CountryId");
        this.cityTF = page.locator("#BillingNewAddress_City");
        this.addressTF = page.locator("#BillingNewAddress_Address1");
        this.postalCodeTF = page.locator("#BillingNewAddress_ZipPostalCode");
        this.pnoTF = page.locator("#BillingNewAddress_PhoneNumber");
        this.continueButton = page.locator('//input[@title="Continue"]').first()
        //shipping address
        this.shippingAddress = page.locator("#shipping-address-select");

        // inStore Pickup checkbox
        this.inStorePickup = page.locator("#PickUpInStore");

        // Continue button in Shipping Address section
        // this.continueButton2 = page.locator("#shipping-address-buttons-container .new-address-next-step-button");
        this.continueButton2 = page.locator('input[onclick="Shipping.save()"]').first()
        //payment mtf
        this.paymentmtd = page.locator("#paymentmethod_0")
        this.continueButton3 = page.locator('input[onclick="PaymentMethod.save()"]').first()
        //payment information
        this.continueButton4 = page.locator('input[onclick="PaymentInfo.save()"]')
        //confirm order
        this.confirm = page.locator('input[onclick="ConfirmOrder.save()"]')
        //completed
        this.continueButton5 =page.locator('input[class="button-2 order-completed-continue-button"]')
    }
}
export default addToCart

