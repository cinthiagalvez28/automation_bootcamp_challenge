import { Selector } from 'testcafe'

class SidebarMenu {
    constructor(){
        this.logoutSidebarLink = Selector('#logout_sidebar_link')

    }
}

export default new SidebarMenu()