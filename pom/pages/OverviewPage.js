import { Selector } from 'testcafe'

class OverviewPage {
  constructor(){
    this.finishButton = Selector('button[data-test="finish"]')
  }
}

export default new OverviewPage()
