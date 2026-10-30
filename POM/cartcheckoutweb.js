class cartPage{
    constructor(page){
        this.shoppingCart = page.locator('//span[@class="cart-label" and text()="Shopping cart"]')
        this.country = page.locator("#CountryId").first()
        this.termsofservice = page.locator("#termsofservice")
        this.checkout = page.locator("#checkout").first()
        // this.asguest = page.getByRole("button", { name: "Checkout as Guest"});
        // this.asguest = page.locator('input[value="Checkout as Guest"]');
    }
}
export default cartPage