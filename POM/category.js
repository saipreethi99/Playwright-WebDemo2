class Category{
    constructor(page){
        this.booklink = page.locator('a[href="/books"]').first()
        this.computerlink = page.locator('a[href="/computers"]').first()
        this.electronicslink = page.locator('a[href="/electronics"]').first()
        this.shoeslink = page.locator('a[href="/apparel-shoes"]').first()
        this.digitallink = page.locator('a[href="/digital-downloads"]').first()
        this.jewellerylink = page.locator('a[href="/jewelry"]').first()
        this.giftcardlinks = page.locator('a[href="/gift-cards"]').first()
    }
}
export default Category