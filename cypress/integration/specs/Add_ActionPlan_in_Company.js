import CreateCustomer from '../../pages/Customer_page_obj'
import CreateActionPlan from "../../pages/ActionPlan_Company_page_obj"
import LoginPage from '../../pages/login_page_obj'


describe('AddActionPlanInCompany', {
    viewportHeight: 900,
    viewportWidth: 1500,
  }, function(){
    it('CreateActionPlan', function(){
        const login = new LoginPage()
        login.visit_url()
        login.action_login('smoke-test@metacx.com','metaBoom@1nt')
        const customer = new CreateCustomer()
        const actionplan = new CreateActionPlan()
        const uuid = () => Cypress._.random(0, 1e6)
        const id = uuid()
        const companyname = `MetaCX ${id}`
        const websitename = `www.testorigen.com`
        customer.action_CreateCustomer(companyname , websitename)
        actionplan.action_CreateActionPlan()
        actionplan.verify_CreatedActionPlan()
    })  
})