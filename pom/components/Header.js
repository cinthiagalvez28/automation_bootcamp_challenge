import { Selector } from 'testcafe'

class Header {
    constructor(){
        this.burgerMenuButton = Selector('#react-burger-menu-btn')
        this.shoppingCartIcon = Selector('.shopping_cart_link')
        this.shoppingCartBadge = Selector('.shopping_cart_badge')

    }
}

export default new Header()
