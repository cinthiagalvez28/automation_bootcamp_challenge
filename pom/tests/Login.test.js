import { URLS, CREDENTIALS, PAGE_TITLES, MESSAGES } from '../data/Constants'
import loginPage from '../pages/LoginPage'
import productsPage from '../pages/ProductsPage'
import { STANDARD_USER } from '../data/Roles'

fixture('Login feature testing users')
    .page `${URLS.LOGIN_URL}`

test('As a standard user, I should be able to log in when I provide valid credentials.', async t => {
  await t.useRole(STANDARD_USER)
  await t.expect(productsPage.pageTitle.innerText).eql(PAGE_TITLES.PRODUCTS_PAGE)
})

test('As a user, I should not be able to log in when I don\'t provide a valid username.', async t => {
  await loginPage.submitLoginForm(null, CREDENTIALS.INVALID_USER.PASSWORD)
  await t.expect(loginPage.errorMessage.innerText).eql(MESSAGES.ERROR.LOGIN_PAGE.USERNAME_REQUIRED)
})

test.before( async t => {
  await t.useRole(STANDARD_USER)
})
('As a standard user, I should be able to log out from the sidebar menu.', async t => {
  await loginPage.logOut()
  await t.expect(loginPage.loginButton.exists).ok()
})
