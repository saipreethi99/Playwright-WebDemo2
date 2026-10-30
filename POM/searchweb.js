class search{
    constructor(page){
        this.searchTF = page.locator("#small-searchterms").first()
        this.searchButton = page.locator('//input[@value="Search"]')

    }
}
export default search