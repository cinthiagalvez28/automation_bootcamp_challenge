import loginPage from '../pages/LoginPage'
import header from '../components/Header'
import productsPage from '../pages/ProductsPage'
import shoppingCartPage from '../pages/ShoppingCartPage'
import { URLS, PAGE_TITLES, ITEMS_IN_CART, ITEMS } from '../data/Constants'
import { STANDARD_USER } from '../data/Roles'

fixture('Shopping Cart flow testing')
  .page `${URLS.LOGIN_URL}`
  .beforeEach( async t => {
    await t.useRole(STANDARD_USER)
  })

test('As a user, I should be able to add multiple items to my shopping cart.', async t => {
  await productsPage.addItemsToCart(ITEMS_IN_CART.MULTIPLE_ITEMS)
  await t.click(header.shoppingCartIcon)
  await t.expect(await shoppingCartPage.validateNumberOfItems(ITEMS_IN_CART.MULTIPLE_ITEMS)).ok()
})

test('As a user, I should be able to add the "Sauce Lab Onesle" product to my shopping cart.', async t => {
  await t.click(productsPage.itemContainer.withText(ITEMS[0].NAME).find(productsPage.addToCartButton))
  await t.click(header.shoppingCartIcon)
  await t.expect(await shoppingCartPage.inventoryItemNameDiv.innerText).eql(ITEMS[0].NAME)
})
