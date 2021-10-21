import { Selector, t } from 'testcafe'
import sidebarMenu from '../components/SidebarMenu'
import header from '../components/Header'

class LoginPage {
  constructor(){
    this.usernameInput = Selector('#user-name')
    this.passwordInput = Selector('#password')
    this.loginButton = Selector('#login-button')
    this.errorMessage = Selector('h3[data-test="error"]')
  }

  async submitLoginForm(username, password){
    if(username != null){
      await t.typeText(this.usernameInput, username, { paste:true })
    }
    if(password != null){
      await t.typeText(this.passwordInput, password, { paste:true })
    }
    await t.click(this.loginButton)
  }

  async logOut(){
    await t
      .click(header.burgerMenuButton)
      .click(sidebarMenu.logoutSidebarLink)
  }
}

export default new LoginPage()
