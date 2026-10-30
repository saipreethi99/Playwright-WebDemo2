class Jewelsubscribe{
    constructor(page){
        this.signupnewsletrTF = page.locator("#newsletter-email")
        this.subscribe = page.locator('#newsletter-subscribe-button').first()
    }
}
export default Jewelsubscribe