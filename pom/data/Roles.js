import { Role } from 'testcafe'
import loginPage from '../pages/LoginPage'
import { URLS, CREDENTIALS } from './Constants'

export const STANDARD_USER = Role(URLS.LOGIN_URL, async t => {
    await loginPage.submitLoginForm(CREDENTIALS.STANDARD_USER.USERNAME, CREDENTIALS.STANDARD_USER.PASSWORD) 
}, { preserveUrl: true })