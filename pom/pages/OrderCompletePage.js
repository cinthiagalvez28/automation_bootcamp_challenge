import { Selector } from 'testcafe'

class OrderCompletePage {
  constructor(){
    this.completeHeader = Selector('.complete-header')
  }
}

export default new OrderCompletePage()
