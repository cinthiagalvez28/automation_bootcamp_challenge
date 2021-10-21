import { Selector,t } from 'testcafe'

class YourInformationPage {
  constructor(){
      this.firstNameInput = Selector('input[data-test="firstName"]')
      this.lastNameInput = Selector('input[data-test="lastName"]')
      this.postalCodeInput = Selector('input[data-test="postalCode"]')
      this.continueButton = Selector('input[data-test="continue"]')

  }

  async submitUserInfoForm(firstName, lastName, postalCode){
      if(firstName != null){
          await t.typeText(this.firstNameInput, firstName, { paste:true })
      }
      if(lastName != null){
          await t.typeText(this.lastNameInput, lastName, { paste:true })
      }
      if(postalCode != null){
          await t.typeText(this.postalCodeInput, postalCode, { paste:true })
      }
      await t.click(this.continueButton)
  }
}

export default new YourInformationPage()
