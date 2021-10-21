import header from '../components/Header'
import productsPage from '../pages/ProductsPage'
import shoppingCartPage from '../pages/ShoppingCartPage'
import overviewPage from '../pages/OverviewPage.js'
import yourInformationPage from '../pages/YourInformationPage.js'
import orderCompletePage from '../pages/OrderCompletePage.js'
import { URLS, PAGE_TITLES, ITEMS, USER_INFO, PAGE_HEADERS } from '../data/Constants'
import { STANDARD_USER } from '../data/Roles'

fixture('Checkout flow testing')
  .page `${URLS.LOGIN_URL}`
  .beforeEach( async t => {
    await t.useRole(STANDARD_USER)
  })

test('As a user, I should be able to complete a purchase.', async t => {
  await t.click(productsPage.itemContainer.withText(ITEMS[0].NAME).find(productsPage.addToCartButton))
  await t.click(header.shoppingCartIcon)
  await t.click(shoppingCartPage.checkoutButton)
  await yourInformationPage.submitUserInfoForm(USER_INFO.FIRST_NAME, USER_INFO.LAST_NAME, USER_INFO.POSTAL_CODE)
  await t.click(overviewPage.finishButton)
  await t.expect(await orderCompletePage.completeHeader.innerText).eql(PAGE_HEADERS.ORDER_COMPLETE_PAGE)
})
