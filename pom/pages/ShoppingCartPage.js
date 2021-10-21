import { Selector, t } from 'testcafe'
import { ITEMS } from '../data/Constants'

class ShoppingCartPage {
  constructor(){
    this.itemContainer = Selector('.cart_item')
    this.inventoryItemNameDiv = Selector('.inventory_item_name')
    this.checkoutButton = Selector('button[data-test="checkout"]')
  }

  async validateNumberOfItems(numberOfItems){
    let itemsInCart = await this.itemContainer.count
    if (numberOfItems == itemsInCart){
      return  true
    } else{
      return false
    }
  }

  async validateItemsInCart(numberOfItems){
    let itemsInCart = await this.itemContainer.count
    if(numberOfItems = itemsInCart){
      for(let i = 0; i < numberOfItems; i++){
        await t.expect(this.itemContainer.nth(i).innerText).contains(ITEMS[i].NAME)
      }
      return true
    } else{
    return false
    }
  }
}

export default new ShoppingCartPage()
