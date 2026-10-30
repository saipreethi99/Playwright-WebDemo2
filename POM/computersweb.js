class Computer{
    constructor(page){
        this.computertx = page.getByRole("link",{name : "Build your own cheap computer"}).first()
        this.desktop = page.locator('img[title="Show products in category Desktops"]')
        this.addtocartbutton = page.locator("#add-to-cart-button-72").first()
        this.shoppingcartlink = page.locator('span[class="cart-label"]').first()
        this.removefmcart = page.locator('input[name="removefromcart"]').first()
        this.updateshopcart = page.locator('input[value="Update shopping cart"]')
    }
}
export default Computer