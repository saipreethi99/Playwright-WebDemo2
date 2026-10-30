class GiftCard{
    constructor(page){
        // this.physicalgiftcard = page.locator('a[href="/100-physical-gift-card"]').first()
        this.physicalgiftcard = this.physicalgiftcard = page.locator('.product-item')
        .filter({ hasText: '$100 Physical Gift Card' })
        .getByRole('link', {
        name: '$100 Physical Gift Card',
        exact: true  });
        
        this.receipientnameTF = page.locator('#giftcard_4_RecipientName')
        this.yournameTF = page.locator('#giftcard_4_SenderName')
        this.messageTF = page.locator('#giftcard_4_Message')
        this.addtowishlistTF = page.locator("#add-to-wishlist-button-4")
        this.wishlistlink = page.locator('span[class="cart-label"]').last()
        this.emailafrdbutton = page.locator('input[class="button-2 email-a-friend-wishlist-button"]')

        this.frdsemailTF = page.locator('#FriendEmail')
        this.yremailaddrsTF = page.locator('#YourEmailAddress')
        this.personalmsgTF = page.locator('#PersonalMessage')
        this.sendemailbutton = page.locator('input[name="send-email"]')
    }
}
export default GiftCard