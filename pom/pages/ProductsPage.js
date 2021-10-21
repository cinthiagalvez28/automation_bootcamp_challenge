import { Selector, t } from 'testcafe'
import { ITEMS } from '../data/Constants'

class ProductsPage {
  constructor(){
    this.pageTitle = Selector('.title')
    this.itemContainer = Selector('.inventory_item')
    this.addToCartButton = '.btn_primary.btn_inventory'
    this.sortSelect = Selector('select[data-test="product_sort_container"]')
    this.sortOption = this.sortSelect.find('option')
    this.itemPriceDiv = '.inventory_item_price'
  }

  async addItemsToCart(numberOfItems){
    let itemsOnScreen = await this.itemContainer.count
    if(itemsOnScreen >= numberOfItems){
      for(let i = 0; i < numberOfItems; i++){
        await t.click(this.itemContainer.withText(ITEMS[i].NAME).find(this.addToCartButton))
      }
      return true
    } else{
      return false
    }
  }

  async storeSortedProducts(){
    let itemsOnScreen = await this.itemContainer.count
    let array = [];
    for (let i = 0; i < itemsOnScreen; i++){
      let price = await this.itemContainer.nth(i).find(this.itemPriceDiv).innerText
      array.push({
        price: price.substring(1)
      })
    }
    return array
  }

  async validateProductPricesAreStoredFromLowToHigh(productsArray){
    let areSorted = false
    if(await productsArray.length != 0){
      areSorted = true
      for(let i=0; i < await productsArray.length - 1; i++){
        if (Number.parseFloat(productsArray[i].price) > Number.parseFloat(productsArray[i+1].price)){
          areSorted = false
          break
        }
      }
    }
    return areSorted
  }
}
export default new ProductsPage()
