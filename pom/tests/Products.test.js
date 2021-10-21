import loginPage from '../pages/LoginPage'
import productsPage from '../pages/ProductsPage'
import { URLS, SORT_OPTIONS } from '../data/Constants'
import { STANDARD_USER } from '../data/Roles'

fixture('Products feature sort testing')
  .page `${URLS.LOGIN_URL}`
  .beforeEach( async t => {
    await t.useRole(STANDARD_USER)
  })

test('As a user, I should be able to sort products by price (low to high).', async t => {
  await t.click(productsPage.sortSelect)
  await t.click(productsPage.sortOption.withExactText(SORT_OPTIONS.PRICE_LOW_TO_HIGH))
  let productsArray = await productsPage.storeSortedProducts()
  await t.expect(await productsPage.validateProductPricesAreStoredFromLowToHigh(productsArray)).ok() //If error, products are not sorted.
})
